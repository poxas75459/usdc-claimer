/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "35oW92RP8bX5WMbAfF7iZRmdXV9vthoEmbmpgFRvWeZhABYALSKpH7E377ib6EgE8wTkx7z9HrauZUJrZju1jrid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "128sk1e7R47ZG6gQGweYmhh1TU5N99pAii7hkarDdZwtB1qx1b6sL7Sf15iS3gatiZkVsbgUErYcG8bZTQKAzKju",
  "key1": "bCViRyJodThjRb3yqWVp79w3FtjjGsVexXct7CE5R7vPnARqLtXdsBFFzXL3aKRnjWiKAzQhJJoz3TGZGoHgpZL",
  "key2": "5PPmGPVmjvUwvpdLGcRkmHw1DB6sHEi2ELNfWY9VHMg5JtqjyxhqJjwCygVMwgUTBpdn5HZke1eK7sBZ3bDT67E7",
  "key3": "3bsBjkGJD54oncXnjTLkeiKfbBCeE8FDanwp334MQyoC7KLkB3nNoy7DRQey2SVCmeh7SaThVAZN5y3TUcq46NyZ",
  "key4": "2MMsiUJu5d7yhTranpq7Vq7XR6tBnEojZCW3zsc7Sw5iKUaSFqjP6CgHwFgmj67jVSA2GhJWwhgEWmPJDTrm3Wzz",
  "key5": "3WGoRBtuy6WwRRgPovJuk9RT5csFh8FiL2RoJxtegxfatp41BzE3RRgznbbC9VaiYcYZfTEXCfBJ2oGugEg6F9Vm",
  "key6": "3rNmg7BEfudzjNVRi26Se9ZQMWhMW7SSsBGjtkyLGxV9Xt1fMmuhYnD8LFDEME1TH1iaGMw8Kkpqwt3ayi6ejDdk",
  "key7": "3vsNtoeWdHiyyRtXVVDcuGV9DyDCVLkkgKHR8Buw27j8Q5fPUDquBNUrSaHnbaefERbcHhv5LKNQBssNiYf3iBeW",
  "key8": "rhNmm5Zo4m2xP9GcRUnvUa8Q1bMKbPG1UkyVVs43QpxH8wEo3TYQDSGJgiYBtT6nHfS6tDbCQDALiHU3eBnTr7U",
  "key9": "4g1wyspisvWThciQLSu3G5uZmC1KjFUdykdm5Lc2SuYj14QhPUvZ8iRfvEmVKTMkyXnokGr6xuQxjQoJpcSEmVNR",
  "key10": "63RjZfjJ2STtpB1vWHUBzCFJRQFXNQrHYhBYGm7A1pUBLwJDNYH87ZQu7KZtm1U4rEmQfveFHpgLmTyjBcZ9CEJa",
  "key11": "62qsXEp8Tgjepez9GPVWbuydRqkdurYReLqfD4SMGr4U54aqWu1i8v8bwMuU6jB84BoV6beJaLNLMuSAeVQadDBD",
  "key12": "4z6qfQcqHLA9QMGse1x6dAmA47KB4XtEtMJYcebNzCTya5oj298cPud34iZeXV1v8VYrTGJcSf8xBFScY7FFuKi6",
  "key13": "2MbhPiJTQ7FEP9gKf3ynsYcYW6UH1vPnURwytfGBEBH8trVwonBJGy4GNusHwPi6p1SSkjRSQcJfadzXjsrjt7mp",
  "key14": "3m7Cay2ztc4b6hJUghUESaKvUjz1ZhFAHqWFobrr96q3faY7nVgbVSjEkFSCNud63oSphBLAovex5ZiFgMQUkKE3",
  "key15": "uagULtLuSJPBiK1BuGdh9VwtQYTX74b2H2mpCmAkXFB5fwASWFmoEMDKbKCgPvLbEyuf7fkcKSbmtjczKkniaRh",
  "key16": "3VuHZkrLUGfGq9efqqBkzZ6jWB18zdQpW5ZKBk5ePbjVCxe6jKLs214LcD3Z4R2NBpsC5EwL7iUMpJmC2U6DAqgK",
  "key17": "idMkr2XPr6u6zfVaRZkeZeKAk5s2k9NRk4QgERjGt1EdBGYwy4MvpUAVxsaDacfxieNCLRTdfJLAMp8PUAgkmq1",
  "key18": "hdMHTEkRPCh4dkz46obT3s78J11ydXJhwuKihKWGJmboQJEcBjhpzciyN8i3jXNpSk9SJnvBoVaUiC37ovUmN5k",
  "key19": "bYpDDmquaqrc7cHNz2W6aPPHs3KGv5tKJKDQi1t3B5rrcFCN2gpA4tdvVxA7h3nG2FEtsBksHbZAAPtS8YSULTa",
  "key20": "5Vdya16d24ShAyeEr99Z1sqkjvrBVZRm5uPXhWKjM6WFeuWAHTdCgnJgYARpggtK1mGiTEtqQCwP5cVVZEBG1g6N",
  "key21": "4xoX1PcNt9syixXkHAgzDjvZkDka4rvKrLeoPhdedjsG6m1xT7xmuM92ntNcSbyT4EHHf5BdYGDQReQH6jyYdGwM",
  "key22": "5fPgLmFwhUEBHHsg2RQGCND6wZTuq1qbFkB53NTiyy4DZ9MUvhHgViHFU4xKR9VQmuT7M5jegxEEkND7oyLMpJqT",
  "key23": "2hrMMZj2azD7KJVkCjHjUyinGecvvebu2VbvwGwcz1AezAQWrowMiNXdkxwPWgGgYSGyc7GThqkiU7Gq1Cm6NKmo",
  "key24": "7PvsFJYMKbGcJvuiPd5i4iXoomvuAm37qpPnywtRZE2rHH5UL222PbBQEYmyRpt6fgzXrGcENCCvuroaGC8rHa4",
  "key25": "5K95AQuXCTpbMJ7Ardo4A4kDYNv4BvLujucTZwhQSCUjsUGHgGQXjYqWrtwydneYQj1dygT6BJzkFahpa8UKT3ZW",
  "key26": "2vvS3BsUk7aQbBUtoQ1GuSi7Z8K65wCQEwoCcMW8Sa1jrZDEmZ1fqqSkb6mjCS67fhogLoB4Mo3CXVPn81VuRX7L",
  "key27": "3tvoJjsjdfFwCTuXRWfg9LS1QeV7N8wAy3Wea7hJZHgj2mALEbcbbZ3cTkdkXDHm66RtEBXFcArcXHtNqN6PLkWz",
  "key28": "5Xg22qv5Afwyybsotg35WeUwJ4TFaBFSb39HuiFGJswgS4DU2UWAx9bxYLjMYQDCjeg2ot1BjD7RS7Sa8t9KjZ29",
  "key29": "GW7TNp19TBg3waB31BETTiWum9pQyxgUqsLYparTiDJAC7VjQp7xNaZ2rFnmcPmCkMGjEKG9LGUzMw7rgdAwaeG",
  "key30": "5n6QQ329b6oKQbWZCjFXKMKn1j9VzUMAnDSYsNP76V2NCLJxMzDPkYEm3z6G4ht4zoXie6rJLh7hLqUCNqbhkoYa",
  "key31": "5uNPDM9qPWSZ8wLUKG6qWshFjRaTiHTeQyJguJja6UFSunnhoxyVarcMNJbsQCWgx1SnygdhNC4gDz1UF4McXAU2",
  "key32": "3pZ3q8g21B9TUZgxsDMPZJxbEmWWRVsN5LF7aGqZH9b9vqajobo1awEwAZXDjud7pPe6kbiPragWEYU3pWwGRVP7",
  "key33": "4Ws9UmeEqeRJNo8dBg4RffkXkeLy3PHWhSswdR43meJMe1JBfk1nSDTSyhta3mLoeQdGAy7LsDoBmBT1qGTgVFtu",
  "key34": "8rTSJjCF4DEnChot85cSTJzrRtMUpGZFu3cM3pttm7EpU2jDa4k9KyenA1JUuC4veqVdBWop9iGWSEhPfnjLHkr",
  "key35": "3Ac4MFmh5M6LHXuNwLZfqdqe6dmdeuMKy6DBHjgDAvH8MMe38rAGDNtxaej495KGDt6ABvXBULFHxZaS9NRPyYQR",
  "key36": "wa8Y7NxtJyJ63AFwWoRwoTbSZbgDNQ2k99G5vLuvBEeYuz71YMBbPro8uWZNyY1i88QWKJDZ7fCspTdx1NUbcig",
  "key37": "5AawDJsZWEN1NHotUaJUNF8npZpYhSK7WrKtgDKR9urEKZ6UaXXTEFbxm1x4JgveYMphvhPFrEjfGJM2yAR3BrCr",
  "key38": "2395nVp348r56zEfbwUvoaeLftzPUgeUEiEgPMejjNgCY6GqYUtDRN1sEoeYtuPaPJzRzppiZHUAkKBpaFK4S5t7",
  "key39": "59zPruc2eVS2LkAWeZcUAX92vHxnqSXt3EBnvmhZnBV7qnCuq2ef1BYF3uaeBgM86MeajKR8CVWnCDvBed31Ljh5",
  "key40": "SJW2ZXrGampDttLVKYqfLQyvg4TxLFHkshQNw9UXvi6HE1wPtB1UoUCQvJwrNLys6HWdzUWgM4k2qc3AjMdkrC6",
  "key41": "4DxYVWAeC2fedPtTZj9TfPHLUD2nsR4Y7nS9maJEEQbwiB1ZbKgDczwMhTzMGUk8Tr7CZUXBfJqE7F5F5hoSseZZ",
  "key42": "3xnq9yupVQYuMLuYcRHQTEbukiRmw7eRRe2NimDQskp2KwLkuYRzjZTDQXBTZvrNMniBK4rPDWYTUTTHLkwoj93v",
  "key43": "22CXcbJqocFGDM991BNm2doSQ5pAnXaCbYKDSMc7TtSUYJy5RZrrpF5QWc9qHEfpJHgneTNrzgiH6uXnPcDtSRnp",
  "key44": "5eESdb6ZVmQodJ3A7HrYWPesYf8ebbh4uQ9yQ1fUFpDYoDrQDskhDX134H7oL2BnjpgNzz3cnuvrCmZZGCAhFKwv",
  "key45": "568diCqXDhVXY87ZYVCKwSCDQEwe3WDEFGDtTNW91mwBseFxBmoCXiQQdEwTq2J4cHjSYuhtw6oZyYyWtEDJjTXs"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
