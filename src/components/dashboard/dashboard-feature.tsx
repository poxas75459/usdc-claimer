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
    "2Mfheoz7NTXPnyVdWr74ZBtaTebKobYxWyDdAn2u9yE3AvskU4X6vMEMKjncKEgeUyo9qjds9J9RE5erSjdw876i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amom1wKosNwbQ7PKRtp3pkexjXvE9maqVzRTuCG9kdkogmoNafeGdiaRsrBbjwudS5Vw3G3ETqkAn5kCPH9qcHd",
  "key1": "zXsRZXhqihx2hL7vWoPTpT85rx2Y6EXdKG4U114vH8CBiReKT1hkU7LHhjvRc4T7oDu66C4uoB4hJpU4iiDCCk6",
  "key2": "4bQxzXGNxLUzRtj8TeXcAMmtZpaxpQQpvrfW74Wy5XwYjCzTj8BFSo39wyiW1Y8aoxQvhP3edEhgZ1dvRrUMCvNg",
  "key3": "2qYb5ckkXLsGUDLccWKTrM8ABrJLRf9ahYmrWAsuKzdrKjG8zhmJDuhQh37zGhL8KfJgEgveAhJuyUtWsuS7x4NK",
  "key4": "3j4Zwzx8JTzsPafFxuTDWjJrzZ95BqTzCcsfnZJwAJ6AAbm6H6EMEo98bQjAdc34nSfuEgtofMKWoQ2fVB4e2ekM",
  "key5": "5NwHLpxPm4eYsnsg1WjnzeBbdkJZJUooRZ9Fmu9vRD6gDf4TLD9Z8dzsorDnL9ZUHYdH7jQt2w3XLh86ESvPg85X",
  "key6": "5ghU1A2BBVPcdY1PksbCvJbw3BNRo3x3KXD5DeQrfQD3VAzBY83bcLE8RjnwPruz68jieUjxhL57yq6uyUeQmDDg",
  "key7": "DuqLbiMFCcxpxaaa9igdNvavnxx5aVUvfvdbqV88TZTos3s85sYrCrC1f9FC8RvmQp3LA4dpfzaLG4o5UjbZYR3",
  "key8": "4pPj4XZihPVq1MvurABWv55wF22KfjNrEfx2H3E1Dz5Yb4ViDaCgTQ1ojDwR9VXNmyTSFJPSu3VfM4YBfmFe3WzD",
  "key9": "4ZhFmhBBxT7SDWgvXFJYtEgnCwadbUVTFhDB6MnHj1FUjFy5PX5ZSGYgJNsgocrr4FuRMSUuCFZzy7woTmnhvgUE",
  "key10": "oUkgQDXWzLcRsmgVTJqLk7haFBwGdnrrc5m6Z3YRqrg7utvr4uJf7Wo9rMtVhuNFPc8VepGtKPunQQsXSfUj7Xi",
  "key11": "2NJL2G7nk1xocy8y1dQctYeb7dSAqeVwwEsabnj6z6DYrpJEufQmWVPSxZzNTYimUggBYD6wZeY5TkSL74HQxF2U",
  "key12": "31j6nCm5cEaoy3YJ3DRAqPw1XZZie3FpnzQe6MWnTgmRbzcxakULxFJqWWbkKTmXSpyUT759jbh3YukVBpWXz8HS",
  "key13": "33WzKqD75TqLxyLpVYeguwKJb2iCbLjgrm5hYULRojXFCuwJrkUtVcYzFwRJN7eMXnX4gqwAaK1zx1ht8qR3TSVt",
  "key14": "Wdyqayf7mKBSjLMFyPPC1PNRoXGkZYaJFXZ4y6km7hgDtvvcZRsL5KM2ey9xuXD1gdyhrCK83henr9uqLht5R6P",
  "key15": "4GgSZDAWWNa1vtemSuEYY1rCJvrBkeyk1mDgznnYJcfEbdT3ExSuk77t8PnVyZx2xu6be22c2L8hu8L4Jjzj7C2x",
  "key16": "2g3CVEh5av9kF1xcTepgfqMf7oYWZ17kXpZjgLHFxrtznPFw5msvhL3P14ZatPi2YW2La3jFRgiDFdbkwuteDNMF",
  "key17": "Rfpa2PJN6NEBgLQp6VzA7JHVRrWJpBpsRoyPnmQjxgCFnbYJ6YEn7UYvnMMwBASiEfhLE11GyoiFXxP2BrmY15k",
  "key18": "244PYsjh3tP46i5csDxSM4RjvAhT1ABTQFcKhoLYfZgbk8yvo3bKdpD8F3Czxzm7US9QxSGH9NqKNvTHg8fa2bMD",
  "key19": "3nnjWyWewfwtAKMSDJ6DWmHtYPQRL4ko3ka1rH2fXayFaBxXqLDLAkjJdcTrbzBV99yzSE2FJGnL3B2hBxh4dCRR",
  "key20": "5HUN1MufxhBX4MzhbitUwVmTNVq6Hs3nLgxWyM5pTSPAtnxmNzY28idd9PSoK29C7MmuSZqTNkVWmRWYMNySSZEg",
  "key21": "dxM1Nf5m3Pap7gnuMpBAPqcp82fZJf8kMVWyUJqaW8BNTZHq8U3nnMkMKm4wK1CvkWxTucFui83HRbxAU7ZHh8D",
  "key22": "2LJK6wScr1qyS58RzkJNebMojsSnM1wSeVH6xqmqrWYFuqoSfXerKyZwQkRdArBnjzJRo5t4rt5sDWQXkkFngFEH",
  "key23": "KxiPNcKQBcjbehti3o79rmAXccqTvAzfrBeUYyPHBsqL2mtnVjqQDEbKMY9xC83JEWfhLZABR4utgsg19kT6gb4",
  "key24": "224brfDBgwr6E4npoGoU7pHiq3kM6CVAuG6W4c6aEneAyi84ZVBVqdoyZQDxm1tpfSCPettCwmhJWJ8J9GDSpnoH",
  "key25": "39wsTL7owt37zUCFDWTB9EyxUoZngus732gju3jLd5tGsNh33AsjqUhTfgMkzMRsCvG2EaChNG4jt8QbHKci9188",
  "key26": "3RDoMUjr1h77cjB3n2a2vWTtVrr9RVREghtQFBJzUGmnFG4gJpcXEzwWu6WC5KpbyLtJEBPoK6atSjJsAezkocV9",
  "key27": "4J39zvibFkmMeavn2RwJCYZWCW9F3btCsSAXyruvTWXZ6fvnQxLiHNgXD5aHvLpqUtHZqjQvJPs1X4bvZujSMXwn",
  "key28": "4JaLXPBwZj8kFVWkcmqCMqo3X9FzW9fH8ZZF3azpN6HEkqnHdN2tp6bwvd2X4Uq9J2XSnsud3q3CKAcU1cwYiKHP",
  "key29": "ayvd78fjYxWvaNnzyZ1i8zuUqBuNrktDjdRKbjSk1UNjDx9d36iJwiPmYu1NNfUHcfSFnUpu7aYZrj5aPHC7QVs",
  "key30": "3kxZkq5sRgut4obgE8ieAAnN5M2rgvRgHaAs6V1UTVVAwwoTvYxUD4nRKgYZmhxpuiZss9XFg7Xneu7DrUQXWwT",
  "key31": "5tuckmFBPPkSSyYAkqs35JvikwWnc2Wxhe8nKJfrtN37uyKJKtnatv2trqfmER2pbEGzQTdAtw2EHPLVFAGNYg6n",
  "key32": "5dExEmaMVP7Qk1fRr4GCEZ2L6MZ3REYUQJJYCNU76W4KYasRpwq8weGqA6H4tu19qQ4Nu8ySg9xBMZ9AZDDEh6v1",
  "key33": "2K5qTQPXMkhvGbNgXBY2HY56Kcm4dxs5KyvVmV7GZebZ6hFmn2KJXChUouAAFx6xit5dmtommqxUu1Lrv65zXGeD",
  "key34": "3Rk9MQshDnadXh332A7uJ4JgLQgrVysUB67oFRkwJawotrkV2DtxxrYt4k9wgDqzFixkcZ2haBcXdwqy7EA5e6Uk",
  "key35": "51NnGYWBE97aiai7dSpY499ptkBmfoHD4TGqk5hesuAxwdfxDi2U179ZJPwbwXDbtd9pUfhcQDfWWpB3HmeTMFgX",
  "key36": "2SVGVk1QU3eDbCQQqK4SEL4qhotJhXKcN3nuMaKJXw2MMrCyp9em6QZjLUCVCWbUNXMsPnrjFyZ593VEVTB97kMd",
  "key37": "2cH4UdT9UFBDffnRdBDV9czAJvM8D9TmpA2Yv18bpsvzYFHau7pRmq9eqZhaeoWs8rdCfKmeHjKzbXBH2BZUFRzN",
  "key38": "4vEPfkCETrXsfHJqo4B3Gh1Es1NUHHGi18fkaAp6YGzPZSYfaq8VDDkxnJhYRtzQoFHpQ6riJuCzn29ZcPCA7Rmn",
  "key39": "4E57qLEWZxhzre3PzBhTB6SdazMYYMkpPdWtX5HqGSRnZS8W7PbFwNy9ethtJ9t1Vyvbh3ALXEKVmABdVWmzpA56",
  "key40": "4K9ABrgRKPoJFocdqYNDQ54FcBrzvJsiDRmZrRzXLpeoG97NX3ymBAP81UT7ExPsPpStoMj1q2U8p6KzdfDxXZBZ",
  "key41": "yVUTzrmtBdFu7aZeSPbzHCoC7hWJmuLkxamFioYXmW8gtu5CkKnsaTvTpdMc1iBTnJV3G3Bsx4jQPFwEefC2P4T",
  "key42": "3JvDna57eS42aKVda3XupZNCVn4fPUbEiFeZFEEAkbJy2f52Dm9ADQX9h1z4CSof82ozuwBb1cSXnAj11AnB1T9J"
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
