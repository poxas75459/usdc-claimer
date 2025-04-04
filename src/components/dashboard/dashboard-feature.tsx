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
    "2KRnkSMga1TSe2N9v9VLubEAAUKawYG6uGdPHd9pjACM7HfHeYVDHTMADuHcKG8M6pnubpAAhFmURMtHP9VdJAJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAfrrpKcKLFDjm3eoZiosvUQJDYTqCLC9aFGMcKP6hv7e9rhQxmSoDMaEzHGTBqMfQZVVp8VgtZwmpwdeAXqV2Y",
  "key1": "3KBdeSy9rci5UV4PJU7tpYNbkWcqew8qGzbfShqzrKKeGi9KMx7w5pGFoZfjMfGRwpDKUV4hrbPjHg5RcnX1dvB1",
  "key2": "dXRgxBeTTHepP7xJ23o63m1gafiXFHaP6yAjgRxYFjs8gPB1oDx8Ch1Q54xhZjJSTcxewoFCk7pHtGhRxybnvMx",
  "key3": "uw6bJ355yAobLa1K67MwXK2Y19HHZ6ATcCm2SzsdheaGGA4VsbghSDmix6LPU9fwh4xF8PqoVwYBqppe2wTurSu",
  "key4": "3bRsHyXXdrKYtGxBxTjZU4QL7k6sDy6NbqvmsdDFhRRA96aHHo41KwrHarFd8J5ZYW5KJ1RXk7mG6dJgp7oxDgsD",
  "key5": "3TBjE9Ch62kFUMEEw7iU4GybZ843659eUVZzuV9Z4Ab7Rooaruas45HV26kACqvMPJRE6JJar2CrsrZo46VNpQk9",
  "key6": "5LuQcctf9HWXctmTUAb39tWwm2QCHQWnRY8GNHhKrKCHgvSLJPSqfk6BuARBPxVZSEcgTFkdnHUw7JcZmvaH7tS4",
  "key7": "K5V6XZZDSMjQF44rESSN2W2RdqvHQWE9ruowXPscN5A6rMbQTgmNsXtEHsuBnXCmSBfeY2dLmaL8vn7UMMDDXKN",
  "key8": "4cpa5PbdWPgZx6snDMd5j1UrkPV9vJmjHPNhvM8ttLGwNbEm3kPYgqY7DEas9qpzbsHSe6AkxRk6g1hnhdJhZN51",
  "key9": "2vva3sGC3sMb3RRpeWxLt5ZERTsHuZnqAPE2YUntRCQCMEKMiESU8n4urd3pePSEE9GLUcVPoBs6MbH7KtdSw88h",
  "key10": "5JhoaDtdm6be1nx4v8y22XW2Mdo9P2sLMhn5pQH1Vvf4D2mSTiCWGAsb4uKwDVCqngrmPgxo2cejBbFx5svg9cEY",
  "key11": "5x4BKyAZdr88w2wfgFQDA1LyH1ZCbuWnKRPzufJAdhe4e41RgQdH5uUCcXrgVtQHHYSiemqCpPtojnSeULVYvHv8",
  "key12": "xXYprTZCaq95k7kQ5scDfcC6dENABEjKsfD9TCjCoCJnkbNEPKxnqSWPvQ87gwSuEav2CbqSqFHNyQszZQWqK4T",
  "key13": "4fcoJvQ9tyWaxtfxk6HvNaZmXk9NCd8pAbKufbaNHRKjzBGj9YQ9ZYiGy9GVRg5bRmHhAkz8dmEcisYZfwqnKmrX",
  "key14": "3xV6EGGFwWLcJQDotpyYZZgtCr3X5QcjkEXrwsYdZDYvNXRaTrpzBgYrSNQ4ZzUYY2RSKrcMM2SkXTJQycKFVAnN",
  "key15": "4MMfcRVK8xPdYuxYLDFnTiQqhXrsLNerPmGkYVkanzmSuR7uUHzrBHxkzc4AuwEgWZkSQkqo9cGQpvKyw9MouSxa",
  "key16": "5vnn7nEH25nsXrAXgvQPZWnYwtDycDzN375ScNyM3c51Vd7t82XtJUt1rvWztXznQb5W2PEc9TAC3L83dr291xux",
  "key17": "5C6CCh2DjgtSM7stekPCBQtryMJ3Q1ZSW31u4n3wTLCTzeF3HDj6LSy71edJK57UFSt5oBFPxQMkNJmAEjw4Nh1K",
  "key18": "33zEFaKiU5jQAsBW1qQgTWMnxfn3zSgZQ9yWvNczyfoxsBBSnJkAfQ9GSHRnnEwYPPkDqrR69kUExp2toCGMbDAh",
  "key19": "31r3CbHdefPWoJKtE3Uh4cGPn8x4FQAW6qLX5qAwUwVAPciLmMXud4qsMeExo9p2ZJy7hFeUdRA2WvU5TkfpsSo8",
  "key20": "3FNVDLFUjgUur1H7s3SBgcVKEdafnYiSWHnM5H89iFePvQkYtyXKgmokFLK83wLm3PzzfABhjmJsXfAcnQ2DK4fR",
  "key21": "Q9mH6jdNzC2JEogCSojwkT8Bdrsmk7vgBYghnFTM4rSehWDHd5pVWLw2cJmAQUQ92yrcjtqbHZxx8FPaktYiKd6",
  "key22": "4exaJKBkjKecbVXWnxbtgb6sAAj9X2bAdkKSqgEn6hkPtBSY2JUrLbAeeqPSNgPXgYspzNjSNBSd7vEZMxkZXv2s",
  "key23": "2wtNX7muFvPBvrVF8Q59Er2iLKJGfjDz3qxipJQURiTKHpVhzfRdX7mdJop3ua5NbAPSctXRiwMCMkbzJJ5iu1Ec",
  "key24": "popt27Gei37qnjhiL7bmRNFRWPPR1qw7rwUZCChPdHuJg7pnr7EGwnRTCTnZ1pzMpfJEpzismern8gpLgEEauL5",
  "key25": "4oZ8QffevPtx5BpRSSoMJYRxqqxVu219YjxUd1uKp8TVXhzdt6KvDqKcDTTDFSh2Xp5N1s6fHtPfFj6xqMc29RsF",
  "key26": "56mwHKArBWmFWDFkpUWTEowmmV1tLAHARDXVHWQt1M4q6HMXoA8JQv3amyuKcuBTys7zdfdNSPPpzb2rDQYdsuaX",
  "key27": "5XG2PUXEL4jX2hDe4r7LizLyoJgcfXjCJU7srYpQHjJiJBdXzZ9bgJVBsAAeqf2si4vRdwnjuW2oxkz3NXiRfMA5",
  "key28": "2Egjt9u4kJjQV9TeXh89jjyDKBT7QJMyDLpFJc38ZaDaMGj7NJLgN1UJwUHXKZCu29mVtyrw9ztxAAXfBwFY1s1q",
  "key29": "4JHLrLn12LM8fNx8Ladhxuq56AmXR28Hy7paYvh7VHLuGNZALPmg69xNjhqcFFWi4uviV5DLkUC7shfS8biDMKyK",
  "key30": "2B28pPgMAcW2uCNrExmkmMFRvSHXKrMZcuKzsjrheLF3uWzBdZSyNDh6LsoHCsmSDFTLnMZ8T68n2YTVfMXqqkHN",
  "key31": "N2i3pZ6Nj7UtHVeQQbTYJXjGYgRGo2cy8HPLd8rnRDDC7LztVAmgUehEqVAqBvFHR2E34oTf7F1wKpLpwwZSN2H",
  "key32": "2BjuAf8BXiMDSVP9A8A76WCAUp5LLRps2noCVS4tNTKCD5Rfv1h1SotQENtE3k3GtaRMKDbocwc15rMzUGsg9i5P",
  "key33": "449YbrHSpQGGQKx2BH9bDvAHZtpniRpqHVEsf4V5oCbBFXbBK2AZDbkkqYuevD47nsvVMuXzagFiyC3jhtjqFLxb",
  "key34": "2yF6GAvAEfapuXtkUhGBAG6Tpu4m6CLposs5PDiuZsxgAcmbaUZNuL64QhzgNqVpBKQgMKzacnYJSU6i5QCKwMsN",
  "key35": "4UqQ2A2Rz21wKJHvSapojogUTqg7PhhWFfsqfCoeRhPsrA9941L84ehNvEJF1uMHgRgZo8JEZKbcA8tjq5WQLaDY",
  "key36": "2oMNpVoMywn5AQJ7Qj8DS2vHDjujpYkPXvp5fT1UVh4ha1trhJccxfNk8vWTKivaj3wJAgZCYWZP6ZYt1VrG9Ruy",
  "key37": "5vM7eaWPVxj9Vp6rNx8f73cgyuT6ymnHAXVrdkACmSFMf7U411hwhxDpd5SNYB8X8FtUPh7QdszEeHfW4rjBG3Ab",
  "key38": "3n71Gs5Q3YYshhrJJMBHn2Uj24s1gDfXY3AzjKByWwZthdRv1egEc6rE83QR5G6vJxa6LLFgU4qdhi664CqJFhKd",
  "key39": "8eNmRuuc5FLR5c1cX9R72N9GTdYLCZ5gzEYakrHavScmnobDoZvurwHwfJBnycabXQeydmsWEAZGWtTBsA5PE2R",
  "key40": "47ukzHBwtmeWk8qLgiztzfSvivcspenr9HUsZXutQvwCUpmGUq3JJRJtLN5nnZELTxRyUndeGX379dtPDstGt3Fz",
  "key41": "4NEMeK6NXvJJfrKhqWphbwhQEQECXZpubLYQWMbvM6h6fYmgKwdYVuGWmBCgUC23a7HPjTESFev9BD7LWFV2ZhAm",
  "key42": "2MWynpwgg3RzJa2zfVgWk63J6FBhrbkJHusHfVsJCLRg72ETztPTzfRP4RmvKjJzKHcq9Jvs4DjfUmqjco7G9s4s",
  "key43": "4qHxRLwqwTxxdUuNAYDFhCvZTaRg7bwvvrDHqRLZFpEdrRsDoGdDUJ33psWqGxkThnqshRNpQ8cahyZdEH3JfZz4",
  "key44": "hbt7D72aNW48hqHxBEQG3q3zmb7Vymwu55K6qUUKDT6g4PC9fsH8fCWAueKPhiuEeCaqAfGf5FydRtdkFJjLczn",
  "key45": "4FyHsF9n8mHUwMnkrF1ZpNRnm6PRRZKanpUDC544zrFoRcCM9CnfLS2jpdcKj3a5wTb2LEV7R1zwK85kAV9kg1wn",
  "key46": "2fG2eBwn8TVaCJfKFAWTZmzgjRBPaAZeFZn5z8FerzQjBa5x8VFTWg8iqfpi2BLqpRxZyWnJYN2xpfdA9TbePKta",
  "key47": "56UFgchUqq3pXqEXRhnaB5Bb8pum5AphF1nAcnY6w88ojQfksmdTLUHeZ6hgt3mESBrmkMbiXzttAfBfgAYf5Aqt",
  "key48": "67mW6pExJVFjJoAWZNZVEyhvFagg32TJcDDhRnPvVEk3CytrfRmUbkyrb3ZwaSWyB7sA9cP1ei61bxUQiuiXUgaV"
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
