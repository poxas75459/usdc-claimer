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
    "3qc1PJ2qVbUtprswQuuiuRz59fNdeiusvVoSRZQdM4UhRuF6LLyXut7yAtpPUkFKZDmoKaPi3ZyNbKGrFRUKPYvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JEpJxG8CADSDCWsDnhqUL2foJdxhM3PFi19k82z1GfwvEsLWKXQXKvm5yEgJSQrx8iJqdabSr1vhtqg5QfpGEJ",
  "key1": "475zQMXzWJdofBSrtHzTzC7jCH1MKTLhZMwG8dCLecufePtqd6UyyUDUDWEd6Sr4Jr6cAYane83hGRhqoLi2pYcJ",
  "key2": "5SuvZUTaC48J2ZXkbxLnYRCw68gExC33HH4eC8VQR3FpwjJ2BKVUeqF1vsD4dF25ngyxoAsMJ5oZN7sLT9bpVnxU",
  "key3": "3ZW5i32WMuWZpdCGpjBM9YM5WJu7pUsRwntUwasvWAyqEa3vyBia1RTvDJT5eymWqzd5iaQfh4dPzemSACYf8yrv",
  "key4": "22oeatrBdNUuw5rfNndqCGpsph52Qqw3jNAXC3geypG79CmtuBeyQKtRkU16DW64GqmVuASEAvSG6P8HofzdyF9T",
  "key5": "4aMBsFgtmEACaNUrJhUt6ZkGsHGhntqhQwExN5Rhv6vcL5mU9CnwkSuwzDjPEqqo6GFd6KHUtHu3prV5VTy86B2X",
  "key6": "58wJayjstSQLfM2zBSdCNa1UpCgdoFLsu5ieF86UcmRuk27exEgjBJeVhZqkQmqBxBUegHTE4r5FqxtxJeBaLV9y",
  "key7": "53WdWRtZaAGfpXD2biFbARXsacuzuvb2ksKrLCwcmwuGWXwZmdpqi6DFhRf8qKsXy3pU2dhLDs1od9hJBbyhBWM1",
  "key8": "2ataVKDwoqUAeSs7herPUH4UyeKem2me1tPfNJ68CXZPC6ZqGPrm92J1hVSEL9dq49AXzycpnTPf5ibn2v9A2pxS",
  "key9": "21pAxuFgPQo1WbYHG5YYFsVKp8K4LvNFxh6SSzbfwj4vx1TzDyui36tVDgsWPQVbgA6jVw58v7sfVdzA6xHoGJfV",
  "key10": "2ojCxgW9Npw6p79bTrpGVuuE2Ji7Dss6LWG7GEETcxMcUi6J4Y5AGTSScgpbPjUGRsVpw9QrHgSEcJwrh6v3PrDN",
  "key11": "zeEZPyBAwZdn7mfwvACpaXgQEiQ5yuqBVx9AM1Wbo3xrWDpqRnEFvtY1EvpmUfoXNmDuYtkBpwP9nny7ptoCFK2",
  "key12": "4fegMjNFNq6SWfaSZ9NxCuwriaFZxwq3u6y9Vy5YNsq8vbMRviqWYR57iBzUvA3CRH3nTn7cN5BYsKTRgFAUAm6z",
  "key13": "3nDEMDYDQwTGojt8XPE32MyYv3hWnq4ngK1efaKymfySJ7dZRCaoU34o9yfCm1bniNXA8opJAkMH7vJPaxh1NPt7",
  "key14": "2uEPkv2Dn9EkaGCcU3bL5JVgJCasoA1eTfBLwvizUPJUgfsGyfPSLE2S2k7rQ8jMWNB9AmP2GhQfC3Xm8dywCxBH",
  "key15": "5i9qvx6qvXW2LHpaBmWwsr7FsyTf9LYtzcEPjoDfarkfGqKLyZvurnMUdeXPuz5bjkn7y28DsahdsE4pJrz1KUa6",
  "key16": "3ViYQ31pRVxnXC77N2i8SzKVVDqYgmEpDd3W1hjCLiSKgj2oGyMprfANTUxx9BhAc5Pmz6zETXrKgiKCRR8JJ37F",
  "key17": "LRGywhXrAQVB2Ke8epfYNNUe8QFWAqzMYLKNwrwvYtcc4MQSHpbwHv3QjeUf3Di24DgtyCnauWub9NugmMXQqUD",
  "key18": "Gzz1xXPXYzLXso97EwbgfHDoH4S62xoSYpk4VgSTqAJxoxyLLbG5JcmZwvt7gPLwAxJ5uq3b3QJEztbpPJMAmDb",
  "key19": "iPgwt5N5UiuiuQyQhYKiXQjDickNdttYt8cnKteAzZUAgyXUAFTwQY4W1VnHXKvvMa63rxTpw3Dbg31gVs73FtL",
  "key20": "KL9deiCtUcU9J9dgCz7cbGTuvJ8hHKiqd9rqXN84v5CZfvzKHCKzW45C5Qi9QYucXsqar6EU5P1Va8C5kNjjAYM",
  "key21": "45Hmqx31G4PH43n5AvgHx2KPKSJSAqu5qKKASAWfVNSNjBLBdVvrRVW86hBgPDo7vPnuFN3vSCviqPF811WA1UkL",
  "key22": "2ka9qtibxztzgZH6tgkeXHtFE1fjdXYtStMmMqYE3o4ZBXUKWsyaYvRs7g7yVciSruwrjcquFvUsoG4GwFtaLPJU",
  "key23": "5Z25CnR5er6gbXAnz9bcqushvnk67ay5GGVoVQWKwB5gTD3YzL1ZRF6JzSDDMAGG5u7mHoNDgHx14vfVEB5iEsrX",
  "key24": "jSuKnMV8reAKCEsbkcKbeGbKh63zeWkBPgoZeKZi5HxskgAqzoSPdwmucv5tsnMKc13SjHqRpAKyj6CygK2Xgmu",
  "key25": "56LZ3NQdqLDMx3ZzMNpaErig5R6oDE74umwippbgQy63BTjP6iFXpWHZFc3jMhfNHQ94zGRkyy66cEprGWqDMF2",
  "key26": "5zEBnfh9ToLPYPgvNMRRmqBeRtxNHA4jv71qZ4eqNhCHgt4G8v6CHcfydPPHzFAS7NTJZQT8GhnXAiTMxsf4e5cf",
  "key27": "2eDhVEr9PW3KyqS3hbJpbiG59vQsrHyfu3o5r9jmmS2N1AykMKGu6mAm6TzZAc13zuHcv4yHbAnqrjytis8yhy9G",
  "key28": "zjUJSAQjBRHQQSHmGcqCFGHjyd2fQQkwysimberyGhnD92uKyRzoZeN3S1iVkGgKvqvzoxaooqFYQzhpFteuzif",
  "key29": "2PMYVdqL5rmeTxsWfE81diEttpzAjq7R7A39WTk1CCB8o244x3djx9NcugQxotjbZqYE5M5VudBKpUmoXo5HL3kk",
  "key30": "2LqBEK815yArH1rAv7CtVan6WzAhzSv7KS4RrvY9vM1ZRzXnAgSVBKj9FMF6YrBgqVGBudaBY1qmNsT2nDXn8JFP",
  "key31": "61icL8oguf8DSWZqBDQx3mRiUhAshEe4o1nTZnBijPzefcCm6EwJ74TyZ265WdyQzMNhj1dqGqeKfyvfjjs9YSkA",
  "key32": "3gGBg7VRfyUzVHxFSkza87MdEeMj8JqFK7osQW1bVJM3EX8oqTQRmVzvL1LyoAC9nQRJtmPamRcM2wQtQpzTPYSM",
  "key33": "3vpiJkbqFqTtLJrtmHQNSKm6zmMXK8NbA2atMKtKD8kkbZh4B7ZxhrXkAiVC6hJa1ydvw2UwsFwErtZMvMm2d5nS",
  "key34": "6cJzdVTAydPNammmGYncrMtVNnQTfKGEFcArkWup1ws74fq9UUB31snuJ4dzfmDddgSyHPVj9p6dLu2PLZ8ao68",
  "key35": "4zNdBgS8jgSn4SemRsUvCXEWAQSY4gCdEd6TY548RT6EVztNs2hx8wXramqwfsdt26UDDK8rfuTAvBH4CDWQh1v5",
  "key36": "voEvnikZKDv8EqWanbfQrS2ghoX9nyL91jWhcr2ft1bJb1cXEnKA6qoPpTusJpdkzyaeeqsJjc4kTroQS8Y6nJz",
  "key37": "GdzrQCVHusYZDsfDpijeHsWyaxvzcXTDmh5CAR8oe5xp9ywwCq1dartvrLXRDCbpe8BnmGGGWuHGex7iKWKThSQ",
  "key38": "3pC5wecnfxfdiGXg9bMabHhPCiPqg4aFtTAnT3GjgvQAo85rEJFxnHhhMHJvXkzzUraHuWqFLaUNLAZJKGhhZaWr",
  "key39": "2MkELPAZ65bZZfsaFKKTzYucEGU2D3qAQ6XZkmVKSvfXWiBY11qNQjsZiY6igicbHkas7QQoqFbRhkKiVE7wGD7j",
  "key40": "4QEqgqHZeKjEs64WeH6Bkgj6Na3WzYJNYHhW1xxuqC4YJXLizhGioieV1XAC8v1KhhcKWKbhh78Nx3M4J2wb9XV4",
  "key41": "2AkaaSNJZ822u3a6mg4GpwqEU3kx41DKVHiZsdeHYcL4ri7BuhpFz896DQbBA7XZxPB42YHzN5EdSFvG9hVS23Rk",
  "key42": "3qRLayopvqCBVUVzSp2WJQREdZemq66QiW1BHL3izZjVWVKGN5zgnbFoTV4fU9KFNqwx3ZuFDQkDTu7uV5YYty3W"
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
