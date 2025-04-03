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
    "VPDxNiaBEs9oetizBLMLBfxCEXLb4BD6MdnDPFUxgteagY1hLiyMbTVYs3ciqfMxf3i7C5naEtmJrgHZFVpePLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2gjkcg1nFiLRSbawh4CHuZ9H42YPkNErEFmqyXrQmq9Ky3Kv6amV6EDmttjbw78mtzvVcWdnTGjsyvtjRUPfHe",
  "key1": "2hrpt6WFoUAaTARD25zqVzcYdBuG5Q2G9irSc5uynH25yYP7vKsy2dST2LKm2hmPKSoHZGHNUDYjSYzeiFkuKhuz",
  "key2": "4PvwnPHVELWs2HPVcWKQmhnfDpjZCzcWFhAGbGTWCXYy6EkE6w4x7zk7jiwxJ98cGte9gbwTZ2UZTCJHpS8qeQdP",
  "key3": "257uo4qwE1cksSLYLg8miimMyvVeLBFkY3Lux9vJSaSYh1ArfXKAfvBiRcFCZNcKuciGG8tL5R2qTBWh5xWiNGXt",
  "key4": "2RnP9v6RkyyYvRpNEqG6cHGMTr7NkMny76WKFiKsUQHF3aDMueakLMQJ9hhusrZa1kUxFzbrjH8jvo2skcc2BLCs",
  "key5": "5PCh2EcEqgKmaJxVBB4EjcRJhDHuZXW1oWJWi7w8qhWCv1Y92mfZbRobJNh3eNYVdVk79eUMA7S7ZshxW6zVj4tW",
  "key6": "wxNHWwDDXMUKorj66KdtJuArDBdXatdbqmMqcYaRoVxs49V2qPPk2Qy1HqsPQCmvW64VTAtpMno3UmG5KzQGYYV",
  "key7": "5b23SqtNZAT4X6kq8SdHLHWadyKtaAwJ441bvjzqzYvN4vnDG4hwgQbe6SCoHmEN5N5ibmwmLLn3v2eG5iaTWfNb",
  "key8": "4ZHPAaVQgWoaAXzGHehbd8p6BZ5XVeJW2VDiJ5vJD2gCMH49QmudB65nW2wcMwYMQFwSC8nMTKQjBcJskgdsWaNe",
  "key9": "2sTMxF9LzH81Fs6B3Eugg6cx7r3GRJfPMGAN7JH96AoSmvcYBgTUWo1dZ6BkhBHeoPR7u2nuYiWLvqEDSpNpWZTr",
  "key10": "2XSyorDsVMdbCcdGY3KGm3cREg5hX7yZSCphMpoEjiFwRHukG2jKRjoQrvpvX9k3CjP1t14f8XkKBqFYR8o1v8mA",
  "key11": "5mzujH9BW3fg3mDP8V1WGyj5cCgURHw916KkNKUt6w3iwY4idZmJVgBcrGUpQ5k2eCrvp6rWsNSAxohvicfKKkZt",
  "key12": "3gno9p1R84f4Gry26eYYmSbJS8hphvcXsDKnAXk586hbY9i9TuED1yXmygR5nykLREJKQsJsiBH9chgqmdiq3H11",
  "key13": "5EeXZwdtVJHc7D6B7aNQHNYVMTG9trFopB3HA26CuFLbYqDAh2c4dBjCKA6F2fThSgp22HhRzzcbn6pzyg8s3zac",
  "key14": "3mRuH5tMXwazQV4ZyRow6xks4m1Wdd5GS2VJhgt2FTs7aQGduVvCKPUGCeXse2hUAxtpifWSta3BEzaixHrncdtm",
  "key15": "2KBxP5Fn4R7nVuKfMGPdTaPha7KUx5r5N3MeMHT6FxyZng8EoZsiFs2miKdjNLhWdc3GsHHYqQz8PiPixi4Sonkm",
  "key16": "64uH3qPmK7TqeSqUNtvqPTVeuX6dRpmjrsSGh7oFBcvWg156EVkdUs58bNEZZVUbSYMZMBLJVqzTMhQpvzqkWDFQ",
  "key17": "FpqpRJwDY3oNj2asJxFApqAJnB2RUsJDkybTbos646pehubPG93CT9T2nupaAR8qU2Q9DVfUzCnDxEM7BVEZ7nJ",
  "key18": "4YZAZsu1PVDWSppozWEaJQoEXbKEhXd6sLESZLJrR8ZtR8LyKdYARkNcBJUL8TZ4B6C5eHBhqBHcXCCyTroUVAJY",
  "key19": "4tDNfYFxemUiYpEungRvAJ1UgCLuSrnEDfRpCtpdhtCGyh7ARJhZPxeFZyfhEeaxzitLzwFppofSYYB8J6Y3233J",
  "key20": "38kjHcEjXs4LnXDRXDAuDhYQKxCMrHPDabeML2tGuSJYTScKxCxj4TV3pX2eJfpXifsxfcvKNqYcuxZ2LYbg5RDW",
  "key21": "37FNXY5xK5YEHGsYPLe88m2NRtzX6g3N1hjJpXLMSugLV6wMGCVuBFk4Vk1Yshae7xA7zRmAVy19uk4v2wey8NCG",
  "key22": "59szruHxi52nRDHRYLyHnvzNUmpJSheiS9yEoGuJ9HV6Jsyk9PiRSYSd5voYDELG1945RqwsvDCQrBmSiXPprYQN",
  "key23": "5ja87z5nnm75Ds189fBqVxsh7o7GW5NB5eSmicRN4Kws2FbEhQcP5EgQU8Xc7ycmn6kutJPiZKUaDNHgPcpTstH4",
  "key24": "4jcK6iE59PJm7gttZePxgwiXoEr9Zh3C1FmfGmXPj817a6c18PnGMA4Jh3ybV1kAXrtnth6BRVqJD3nmXd4XDw8c",
  "key25": "5KaFdM5Gjxk7xozVaJtgSWdAGSU1XnbNrD4TruzMmtt3RgPQRrxXyGe22mEHEjUU1Saed64Q6jDaqAECopisK5wM",
  "key26": "PujDgCs1A751vwxaVXWCZPvYY2mLU4SbV4R1zgWXStDueHCBSGsSnQnJmWQN5aUThYhv7RuPysnTnatwyuVZLqv",
  "key27": "5YG13JzG4dEEmburr7JCUKsRRuTUjWPv4xoa6VA6hCpi93Wj6oxddRLFkhdJHzb1koVP1AGCP8YPmjHVZePK4LrA",
  "key28": "3sgLWwi41fAo6xARt7EzkfjbLtLBWz9ZdtqkKWNkRcqdXbRD9ixYmDn9dd8151CkUkdrkqWkYPrcxhXu3uTMZpmg",
  "key29": "5SQMNJWtrhNMRVikEPYBXVFMPsQNz1ZGtD4eJZq7y8dw549ZJWSKTXQgjrJa7YJz8zayAaxiB6xBAQtitVnaTwgA"
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
