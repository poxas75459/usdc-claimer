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
    "4kD4pWtRzheS68r3QxqDAKfkDv9KV7S7znwkC3a8GcDxwh8XZ7o6eGHEx5fajayxNP4edc311t8BxDVbaWNdEsP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvTkAYvMeEFfRecMVTJhhz1Ks9qMMFxa6E4sY4tBH3sVA5rj95T2W2xirxTWnN8xNo2ee4GyaFzFPsyP7JGWjtL",
  "key1": "5Xv3xh8FiHYamHMQwsJyXAUpW3s7QFNYEQncPsnrCFQTuXWp63aCgWZJxNoCbCKJd2adaeLsA18Td41wAf8p17Nn",
  "key2": "2bktN7qaUPXL63MZmrCmEYisVXLBCtvFij3PkPr64sm4vHqJaiZFjyP3RHeFAo4uNWM55EUxmY49oteNFeJvXLt9",
  "key3": "5vZTRiM8XXosL45HbwAbzgEMNjVbsoCussqQ7nZ64EmodWQ8UM3FSPjG2A9H1WH6hQJmYTavBYbpASE8baGpRb3e",
  "key4": "5RwF61v96V4c4E9rpFaDuy9nBCsobPUL2Gbf2eQuxA6KgJMcQhqPq2Yzo9KpBAJ86ZJZajYwwsh2vLhUg4NJLNCe",
  "key5": "2a7Znu5HFdSV6XcrqgzF7zdbJGW7ghtZgiAHXiSmR1wSPgzHwzoro9rv8MuHp7QDQonJEhAth8Tzef8ompP6SGSv",
  "key6": "36nZdxxy9W5j9wXj4QAHinfgZxKj9oGXkbrxyhtSZBYews5kHksgFjpSQnsDPwc3udjBzHeJAtzYkghr853gZtnx",
  "key7": "5Xr9BpC3sNcEPtMeYXpLt8yqQLVoQgBDuaBqu6x39C7LMbAwTRoHyrks2dN7MA6tNbauDwfdfqc2FKzqzS1Q4F71",
  "key8": "2uMc6P2tttiJUNJJjdR1qTiydJwJ56ZjHP4CNtgyA46teySBo3Fs4Roart4crU58dGf9pmveGpsAfkGy3LRVsyCT",
  "key9": "8hb5LzAodEy5maaCdeX9SB2sftMbsdUq5q89et6fHem6f3Qim3HctCK6zSwarG1KCyWQ4skkbHYav3V6uHgZGSY",
  "key10": "NuVjvLq1fR5fcTcLJjTqtfoy42VLLKCozegvB7LqQ2UzBYVf3E15A9vuipJ9ukjprhUg9ExYdgewpWj9QBpmPyg",
  "key11": "25wq5DFnx8THNunB6bVSCv9p4EaZE7ZMyps1MTm3JtjQdp8LYpbya89fmoypsWEzQndTNfxihjG1EYzJGrxEXjoq",
  "key12": "LkEst7nGFuatvimBv1H1ovkmwcfnzg3EndV4DoEXGbbzYF7Lq8WweMvhpGqNZFGszvRS4AaWcyyVDjGye4XpMk1",
  "key13": "5nDuyWPQPcb9qYT3v55rtr6SNHtUmkzBYn4CKRYRCYsHwTmobLYBFGwgqu3zY6thNgYoJ3qr3CbP11wb8QyfMviq",
  "key14": "2mfnXVyBtfaSDESxSwjMrDWvwy2UGJJJJFhMPsou9BW5vBD9YUpHsMBbcsWvvfFX9SGB6a31NAW4PL9i2yQdJHc9",
  "key15": "5mGaRpJjXTiHfeFnt5oGkAgQQqu7dB9qXicZmkWgDuijraeeivUYYxumvFEevzqF9NXxQKYfapYpsiTnSPGfennJ",
  "key16": "33wA25EFkNirMW1AokRmX3fyed3C5ajDsjut2XbB38Xpcvk4iaFva7G9dZSQGaq4D1DXwQ89MAXbjy8CJKG3RdxA",
  "key17": "4RYvfkFqj9LCxXDjbzcSxyqGzwkwHGA8cnP5AMScNcEp7erH83LNqVCmxLKuCjTgMcJZ3f1MADfvRWTZq7ozz6uE",
  "key18": "yGyJhRY2EYEhG7NrU1wBz3AMn4d1FVpkQx2zXfLyiKM8seS7Z687w62PsLEAU76XsFsaic3eZji1YiFvfeYVsFi",
  "key19": "4yx33L4U3Ed41Z37pHoet2XazjbXtZBUhEbJZLZ2o5W9ACt7RyQS3iRzHq2KBGPuX9Q9bf8BqNcprbv31wiyGhZS",
  "key20": "kmME4phx7SLRKM6vseVDAFEpyoMKg1TNnyYvErkyxhNh6YdUGNauAGbAC5nXWqmrEFjhVeGA3UGh9Z7CbCQkR5k",
  "key21": "4Jv5cs6F3dBXoVDw6UDntqLuDQKSiEeMzzgfjaNuCQk2g9UXDX91JKPt3k2AoCkEF8NM2XRcqiEGPaqsj7NyaN9V",
  "key22": "5MBnZsa7djQUinFzerbYzLmTwKniTFparchMN9rZVgc4365icZrEs2EceHPSjvZYFLpyENQPCn6aJcT3N2JRZV4Z",
  "key23": "4bGcF4QasVy6Siz5mf1FzaXBr7gEN3H7ETvJ8e6TPAnjhrXKDfh1rz9p5Wn24aJV57tekEYyXA5HXzamc4nLoxGb",
  "key24": "2JwAkMwnCoZ3H5YLrSAhCU6eTBagYA8jf4iQ2Sr7vTqk9xG2ZSFUVZL7tWEbKjnYmsb5HVG2NtnLenHh4pSf5eFG",
  "key25": "5tJEHy4pazMFZxYki6egWwtTfQ8R1zaNyPPob6qQjZc5FcgRyNUqavhGvp6BZ2g7eckWC2Htfbgv311w6HmP3tvs",
  "key26": "4TtZwGsbwkxgsPpQiV3WjD6M2pWj1CdcMXGBUBieP2oHn4HSRb95jr5u4weQ1gFW4J5PrB7CrRxzjXSHDBNs6TAZ",
  "key27": "2SMFL4FtYh7qT1ne5Aa3KevxdTYBJGoz6uArCmL4MfBKzYp1mxLA7UEZWG5XPZz47YvHi2fErnQrCfqJwGMpqPFf",
  "key28": "2dNSzgaWG9wXf9qNv5HhRaZPdRrWaFeGSWU58J9Nu9xP62HpzbiE2PZKBWbJMjFSu3XwPdfht777xVu1YNxbvkfH",
  "key29": "5zN4N8rxazP8WGEUoptorDg2t3yKujdeuVMEkgTmQGeK8eQjRFEvg16krhR59kpK4BUzngNQ9voXjvZvNz45hsrb",
  "key30": "4ANM2CFEw9puDd2aKfTL4nxbvagxzxtvJtVmrcmVhzt6AVXTeS5zm3zu28xtcKk6KBY5sh4GfBp3jsyZvZRHzAGN",
  "key31": "3wECUJjgeVFws7cPGpUqx2NJCj257w9X5vdMuZQTHMpiUk1dbRcCzJAc2L5PrZPHJtiLvq3NjGuwrsmYPNjA4WP4",
  "key32": "5xXfqnHk8nMZZeVbSg57UEKP76ugLHRLajRGtRP1fUicKraA3zMHVSR75w5JQEYYPKJmpbZoKGcG8xogX7h324c4",
  "key33": "5tQ5M7BUi5wUJgAZSEgwbqoeZFu1wCgbJtanM7taywVf7cWx6YYyzM62chFMAsCc1sAvd7Hbke11z3TKMhA5wXQ3",
  "key34": "UDn5htbQ7hkc9ioBYxGwTj73Eu8z2fEdARv6VQJdWd3iw4c23WjPQtaJaWnG45fwAMMTADsfuJBCB9P1mnrpB6e",
  "key35": "4QjDCgv6hW44CbXB1tvWbAuNeYp1uzPhxcLSWWTSjgJYhMaEKzmZMCJrywQJZm9uVXZdQLYxLSMZfBEdSFtQXryn",
  "key36": "22oTkBjpt6vP85s4cKvzvhaQzf6ZgQvcCS2NpUUDmPdJWNkj3VJKkyZU39WDYDBWPt1oFgPdXFihoLfsXU83N3oq",
  "key37": "4zWwQ3gVApYrEGdnuBPs1TZpPstW5MfSZB7Uf6q6w6caBD4AfSwBuNW57jYdJmQHrhC1UGNRusbD4EfXvD3jYBxe",
  "key38": "47NHZJRp9qEQ9hXKNAvajVxSviFX6EMQsTi7qUkm5uuy12pLwnjEqmvXNoAnrXF3ZnQ6LVWaspTxRbm6h1qR7aY5",
  "key39": "emDXZnAxYkXMkWEK9d2BVzL4yV5QLTeaayULkPMfuHDx6FcRwY1kNYrqAAQVSsy6UqrDAwnzMNkjgEcbwvAjLtR",
  "key40": "hxYCxRtZmNCTMxgv7vhqwLJqYNbYcUeVMNQZRwMNxwZaxfUiYsxpPNa1tVkaH7oUMhYnxPHy8Rrvp8m84GmJ9dd",
  "key41": "wpAYyURVBKUb1CacYtaG1mM3KePeCALSvZg6HxYnJPFtTh9Dho8NtE7Rb1k2A95AYSDsGuf2WcukzHgvJMD1kCT",
  "key42": "5Je4Km1Kau9zfV7x3r1woiD5NMME43svFi3LiX4uT52kTyGXLeUdZovBfrihyaw1VrkbLbkScMyqkb6Ftc6xUSX",
  "key43": "2VTYtoa3Jn5GEVkCigq9W5bFbgqGo5aSx8zrjsM7kf4UuttFWTcPsinVpuDDU9ghBhW6cJDmtbYFMwMokqVzZ3Y9",
  "key44": "5eo67pbquvC1Vi6ktbWVruvYWueiAAUnCXaDTJqTYhNwUhfZRwWW5YTkgnUny7UcVaeaJErPy3ELLCABE2NBztco"
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
