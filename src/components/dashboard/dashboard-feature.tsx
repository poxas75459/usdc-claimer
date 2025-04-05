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
    "XkJyc1oVhR5Upxtfq1RSs792ABR69wj1gdRwacuvXMvQwmZSMmpToz9ctNNBH7EnEuzeoBeTVUC4MBDi8QMSmTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VQTkZdngXT5MGQs8D9mUUQY417BdsuVDQy4jsfkBm8qgGUkXgwaSpcM2AXN2j23qRXrdcSMEgKLCneYqhwQd8D",
  "key1": "5eHigtRypsWo2ayfbvC9HByhoFj2q7NZ9oq62zmtsKzm2H5kVexMEUKrKotKJsFWQSwK68zxD5DN78WvNZyDjLi",
  "key2": "DhxsUuGPHTyXMQWKWQqNeppxS1Q4H64pSjyekCZHTP6d6t3Y4fCaeELNrJaHpTzeRmTXgwzLRekFattd7F27doQ",
  "key3": "2FZd8sdXMvPzDi9kFpuA5BVFnVz32qYVYzfQwqoH1HvfnMeCjowz6YWfG5oGpupsiydVK4KG6rFqjoEHeCw2cLsC",
  "key4": "4BP1bnZpNyHTBeJnbSK3GgahLBNZguzMrHHH61nwxuvjYxcr4Xrm8vVnww87EKHTNa1GPorH659wybqohveCJGrp",
  "key5": "5iw5PuLo3jj9pHHEGR9hUUPN5fEPxvYaaFiDojt3JPLAGav7ePYvBD797DXhFVqk2GB64xhvwqr9A1boYFAxwQUb",
  "key6": "5oyuwbiimLq5WmH851jn9h5rt5E4AE69fSsF4WXsF2DYCJrpPJdfoHrTngWtMWM539YD7Rgu1kPPMsd9hGCE84uy",
  "key7": "4RRb2mrRFnzVh1UBkemheiJvni2uT76gt2XxdLGNUnQm16HxTZvqeCJAgD8wqbZ1MoS3PR6yQztkeHjKjrPPEyRv",
  "key8": "2ABVmHHoEKq3dZmfrjgUiMT9eJbaxwzpFCrbz8ny1Z7BtxQj68fXBAxJHDmgcHoHYQo3PndxKvrogWgFHCQv8G6G",
  "key9": "4zmRqoNhkRiUcvupEw3gnDb1WbGbf98wJ2EwQCKm6efHCzW7hfAttE6cKfHhgXQfnfvCehnibqbAnn8H78W1sro4",
  "key10": "3v7AinZzJgwaDt4vTRHLwnR7aEBNWicqWWzGPsUGt8KNfZhMPn5jNfssxLFuvR9PZf6Rcm8WRpK8FSJyCP9hksgf",
  "key11": "575m54W16gwah1LDoHXmKDo5XhFRqojkBS2eMadyETYRFHvW6sT7a7vNw4G6La8Mq8cERgqT1KmLpLGvwjURpBQ3",
  "key12": "2dY8JK2jejuGyDjVf4iVpgvCptNJprASTwoAKaxiiPQBzQYcBh8DU2ke73QToBHzVCx5x6mcJyyxSAMDBoMUhiFc",
  "key13": "2Xr4piCk5AFBv1CZoksaZpWWXbEzKgtz62BVtKey3NcTyxZa9hByaGoWRDvVN6rRbxjYsUGw3XcSLcHqbwZJNSd1",
  "key14": "2Bk8ChBxvKSeZHbEAphkc6PdNwgSazkwUBtGyVoNogPG5ybcHDCQ2BgzTxfqPoBoZKEACq8FAxe57ydnFd3brq5o",
  "key15": "2y2F8msYLG93eTvYJZf6KxJ1RNfdchh6zF8PTxMC9PgJ4iYKcTkmemsZavHktfvReCCeDJ1kZLS9HMRdynaUCRx4",
  "key16": "2TmG2Bef53cpToAjNKmrsGGNumZjoDoYgheq2NmhKbeEoVfkp6KtQCWsWHdiANyi89F1ivMirqLSBGnZ9ucpeTBn",
  "key17": "5jVDhknZ92Fekht5JDC2yTqxfy4RV9ddCg828dLLvfKRWfdpKPyoPLhbiyQnCTWy2m4s6VwKojyWVGJnkEdH816U",
  "key18": "pkwxPZ5em589RXfi6X7w14v2YrkQRDrBEfdY2R7vDnGQYMRK64LABVwZJUPUAjTUyECsiZnQ473p3HNuWHQXtjD",
  "key19": "3AJUMNUWnX9YzSygtS4BdoRHjUakfjo1NAtzysi4KgePRFr9XMtoyKMbCC3hFy76CKCcBMAdPS3oDLReMWX9w44r",
  "key20": "5vuucEtLMaH1tnL1EpaBtq8LhQZ7pDAqSKwtMBB3JWB29jKzbpUijf1rmgDHS5hsdZw69yn38QnBTXbETU8fQc6G",
  "key21": "36q4bLDUvKYXoXzCc51hy5PZcATdtrdXYGR7WKvfJ9ZBmkWskPtD6dACy1ds6Pz1byuWQZv4M7DvtDDQRyQYBXgE",
  "key22": "2THziaqcGFaMTk4E2uaSeATWf8k7CZsvAC8Y2BxiQFQnEVbegfnednDH7knhztp4c9aTZLZTe4EikPw1MgBaknT7",
  "key23": "5hQMpXHKNwUCrJX9nit2JgzhiXYUX1DNcbexZUJW3Fpv2HtY4JvY38spiio8zGJj68VTPQ4PtqC9apJHsufvM6hn",
  "key24": "4S1nuoNA9GfYjQcFFJ3MAg8kCM4BvXHfTpvaWtXFAEQ1mkntG8CD2Ks96svWAyvUywMCaNA5oAcSvAtveWwWeB98",
  "key25": "4yhx7DnSD7DipVcMmeiWwf6QfgdSRR1KhwBn7GFHgotyZy41yL36Jj7DonMuK93YaUCUKcf8gKfUR6W4tG5qGtFb",
  "key26": "4u8orR9axxKxdsgkvsQu5YEP96B3gnyomkX6QxyLZGHuMXcq5XnJ9o6Xd29vP7xCbvWnmqspuCsRKAx4XfnM2QK",
  "key27": "2Vmbceh4YWM7w8FPi1rCzy2x1qbtVfqFEEB4p8TgQnmjZdxNuJ4Fgxe3ML1bjQy1oWoDoji5dcmjV3YSprGSn8XC",
  "key28": "5kDrStQKLKozoyTbVQhC1cG2Wcn9T2KZMJNFtpUKFUR1boAQAUmkBewReFRcap1rUDGLKXKHzvFnJU9yKpEY6LWd",
  "key29": "8AeU3L9ai3Qq1DvpHd6fU7fC8bVyMusu1TRqgQCPDhsMRHwPBxsRYabx11F9fdPpiS3AJewXPVVY4wMuXkwkmqp",
  "key30": "4Ezi9QFD7nEKdP1VvrGmJp6wLH2M7zRawnz4eyx66oKUpcR17eJjjSsdFcD7iYbGkWTZiosTiEf2wGGFfTH48DD2",
  "key31": "5b9L6b9uv1WFrj522iXvc8ip1h62Yv6S1pcy4hrheZuCK6kJ7iBN3P9pX2tw2UHf7ULYMBmQbS5QKwsy2w1nTE3e",
  "key32": "5fmyxXWWviK4BzTE2EqHjZ1cySZr7mRYSL6XKpMFwbT2VRpQSvB96hn7y7wbQbe3W89DC4V5HgwivzESrezsZE1p",
  "key33": "2jGm4gDBxPtFcGYJRERtLQys14vVovpvvsrD1BKLXTZENPGNFkdg94h64hbiWDoUv6wm1vKTRPpkbgXz4gUF7Nr5",
  "key34": "3sw2x7P3MNwHpSzrkVN8krM5mRxwV8m4EtrDpBVg7ZgPfsp2YiuwhWNUB8rx4UaVnGjRvqSFZyfM3SWmfRHVVXJg",
  "key35": "51q65NorqNgYFNiSEEwhn3GCWHwy7x8vb3yByUGT2uDBuvSfa1mChjLwQsk4tsKAwi5xhJKkqxPLy22uNooyC2us",
  "key36": "8Ex4aBRqvjxv8ZFT3gP74ZPb2124cfDkfKpNrkX3ce2j8byyYaa944ho72RSSK8fMZFeahgw4hkdzNJuB5UR5SJ",
  "key37": "3k6797WStH4tZrt1uYCK17WhCj9woogUEv7sqGkMGvKV12JJs1AoTVNfTPiv1qGasZDokBNkjqYHEMsUmufkqXu3",
  "key38": "2G6Fs7kJ223PFHi8pdiM1MZmGGfpb1AHwzJQ5baueWSEDR2fFfCM85phfJJy4BNHxuZbMsDcbMEjvco53MuNLNeu",
  "key39": "66J4ziVsZoWqcZXwnqDaDbT93gozWAUiUUhVJhsGG88Bzf51ZkPEv8ZfZDZzW821mm9zrgFHCn5Lc6sRNUpXGBmm",
  "key40": "2QAfjk7CbZ1BwL9WecWeqavThpoCK2JA55pSvdJGjtTQXKnv6veuv38FW8QKHQWB5xExiXMdjRPkuSqM85mi9fsg",
  "key41": "jVGaPwVfRk9sgReuhYqVebrRbbQ4ABk37nS7PXAQbsF3bVL8GzHwmexuWj3a1oMHSizjH43mpKaqCHV4ixCPWJs"
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
