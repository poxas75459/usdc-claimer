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
    "2RjpptEXegWMSNeqy4BSnwEd8XC7QY2MmLxe7F6tK7FtXNeGe4CM4mqdiDp5Z54abe4QUpxeEzJNBY12n716FAoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeCf3zhMiYcJ43c1fUbDRLYYmk58UREeLvCoT5e7ASdQ2GpKmSTNL4tcxZ4WHX76k5jvWY3omRNmwS2Vttcx3Wr",
  "key1": "gmDYSpDsBtv6P4412eJajaYT7uSVHp85w6We3niyUQuk5aT6fgRrSjE6EwYBUqNSLThbMFsXih1QdpKwYfaBsh3",
  "key2": "tADiKRWbGV9jMvchGpCAHvcXHDf3pKRzFqqzbJQPkpozJyYbkaEexhg8m8bUXmyVLnWXioaAHXpGF7yX963Gi8b",
  "key3": "3fwvYhjF3B8XG3ch8DPhziSNj9g5F83ckhMfkPjWHKGVYxxJ3bQYs9VinEdCGvw525thG4cr1wDrbC5YQA45uyiC",
  "key4": "4p8QiBYn4JbDwMiRnwiYrdwSyLqoEAeLYze4NVrZ3DR19TQtP5mvFFGQGTTXQFLTaDNL2qU9ykGNRWU73ueyaWzP",
  "key5": "5yBXxtFh42aTsoFx6hBjrkRJJkf1o8KPCG1qWfbhiYxB4ezrpSn6AR1NtTKqHZ3VL7ZE4xDABKkSbNhJ746F2T8B",
  "key6": "DinPCJg4bEamWvFKVxS9xf4MRsFP4U2aLzqxxdLF1erZW7vDzdPV7xmmqsgb4CdP3J4XcZXZKErrjymL7ywtgqz",
  "key7": "2X6jLWDuKRKPCEtKXva67mYskpteUFKGaWR6FLyaJJmadm72Te8bpxR8zRCepzGnGuPjuQpvT3h5dpLU9GP78vXi",
  "key8": "5QW5ac7NszAgnTqJfeQ5esSvoJsASF31ztXnyuUiupWN1a8DLNwtj2TkmuYUGDSSd4utbyqzZseMg5oAku2dSp2W",
  "key9": "3WAwuKypKQCxqzzeMiygXygJNrKSmLPCtYUX9g2K4cB33HjaXFrRN1XvMU9exKx61NUApeY7WwDes4KbmcrNKG7x",
  "key10": "226kJLiR1w4kxZxakzgNzWUaJRetvGNG4Y21k7BfSp37E46ca3AWsYFJ6t7tm5t18ofxQVjCmo49pjazMkdzPke3",
  "key11": "367ZSFec4xeTFVAQKqf8bkuK5AzEzxFvsyvVB6fa7NwxgHE7z8afwEBCw34zy4VYArYW6D7Ffq6o6wgwJ2dxt63B",
  "key12": "2sZJLvB54NhTAWXRfs758YF8aZMSHTGJu9fFcqv4HSCcrtZNLtfEP61n7Np7foDeiSjnbCFuzaXRum1Jdx6Vo1Xg",
  "key13": "LEAciYZ21DwanRDdxKjUsWCbb8wgnXZjM29KKG6sK7XVu6xADu5NqfGZxG4x2AosgdZJCf9Sa2Pi5zy8a6hXfGN",
  "key14": "4PvoJqAVXCK2oKnrHdKVEYDqnpAPTpda2q6vzjdYtA3LXD9eeoYWqh643HfUJqHFKg7WzVSav5MzdAzz5p1kv4Qr",
  "key15": "3Esx3fYbHnnonR89sVtfrWcogibjQkaZpWzwR8kcrhwvre7eKLaFxygQERWvYNavK9XW8X7q7wHsCaJTQYm8BwmX",
  "key16": "5wKRiNsPqmpRdHq2mZXCbrCjh5adgyAk5ZLHv45myTzePtK6iWMhCxYuhyweCCpfuFye7fPfBLBwZuRxnwGx2HSS",
  "key17": "64i6zqtQsw2AJhsi9CM8k3vj18wY7X3aNyfEDz7G59jqPDq54d6CYrt4oVmXYLvquv2kCbK5FJba9ekv78PvXJ2h",
  "key18": "32nQgVyMzcYCck82Fs14cvZhiPTBj8d6W2g7vrcr52naCBXTwaxSnczRM2bH1L539c96HCaB5ox1bzcAqNTMDzKW",
  "key19": "4Ctm6nD7zdZ2wBDDGVdZttKXy8Gjfp1SW37KjzHfKkv7Cv8gyZmzQc5fx8wTS38kEcXtDdWRMoBCSdHHmfNzT1eE",
  "key20": "3zXDpsr2GhC7BAVDhyGi7VsECzJEz4NVTnrzYFbPpGxaUiGo2e1sDJqavfoFca4gKMfnHbr16pJi9UxMJ9UqzqNb",
  "key21": "2pGejpLzUEukMa7vZQHVF9K7eMvCzhh34bypQZMQxZ9KL2QB4fwmZrbZe4i6V1wJcfhyKbbLQmjpGxtDc9necPw1",
  "key22": "3JN5rCp6d86vfPUTWXMDHuEP3eUnbDYhBsYqXm89Z3ro58pJP9g5G8gkwCKPEioFUtccwJ4dYiDqJWJEqGe5QFGS",
  "key23": "4wGbrACaCgNYkAsu6UdTHvpMAcdvGFzJntZZeiGCKPFK4nY2tUA9p1gNLxGrXfzgF3KA3nNT2ANk99aYCCS9V3N9",
  "key24": "zAkD2cZXJhUa9d176wk34WqcPgY4tFY54PY5fDvMQcsaNFyjW1GiNuie4QpKkCaGsLq1b4CdsqcreMTkwa3tNgW",
  "key25": "B23qHKDUm334cFfXk63jDEvQQAnfd48TCbsHw5XBSWj7uAqyFgKYStmvydzL4uRyMvvJetDdDPx7ywbpfdsT6w8",
  "key26": "21dthJmLnkdPoXbP7aWiPAWeh8AtfKT7G4NizHrvDCvcaQBvpQ8i2Y2fVyKEW1rpCs7zjfRSxZTrpM5A3oHYWThz",
  "key27": "4asocqvV11aEYCvdmHcPjrri6fY5yGEvDYL3Kkky9Jnec7X8Qd8rDgdMjZE6VbHUrKMRcTzMDyDjSZ7Ezu8ABNkc",
  "key28": "4catM7g9F48caNTQAbfK2etzaB9KA34LBQfThGNVryc19mvLbaqw6B5VXgTNHJsuZVLQznf7vhzpNyRTdVoJjQPm",
  "key29": "5pbmV4GoynnJKxBM59ekbdybKi9oLcCNqcQhrMwyCw1D7AFh8cACF4b8uS6BNu4vUEnmQa8dTwKvfd4WeZDLSCoA",
  "key30": "AKr8yJGo1MTfmBz5ammPG1q8NkW6Mm3jURC8trR29Q2dsGebehsAee8gx7QRPoPiC2qMhLz34CcskMmP45vmosV",
  "key31": "2xkX5UM2WSDwNS5pWZAtQAd2dKjUjYovvqmLQwUfdqRUPmdKPZVkvWty39fyUD95RZWPSSN4vtomEfGuZtDb31PL",
  "key32": "4tnJBSRqYwMdkkCqW3u87abBnSk1phRBrejcCwRL59XjH2djEJoH9gCzwaSD4s6Qb3r2hc8Qdz3S786D6kxqbHAo",
  "key33": "38ye8xWXAUyungZUVpcz9A1BUHobEDZpbcseBFNKRSCdzBPbYx4tz9Sjb94RxZsskZ12VGfzrN33eHZw6J38sgVz",
  "key34": "21uKAJ3CkPEnxz8q3L1pZLJgFAyHKq9QZjB4eDx7N1YQqNoaKGARnyPq2hmiQAwVvVcnrjWm87u2Cs4A2g4n4wEm",
  "key35": "2zqf3HBiu9UqUut9YDEizLzjpQ9rreGPPfZkCD5hik9k9zg8kX9mr1cQ8UfQo3eWXSb3VCFwdjFG1Q2EtE8QgJeJ",
  "key36": "2GG7ChT9TYUyNGoPQLLoLX1kDHnFZxFeTrJntTwhFJdDETpd95691zZmitQEaKyYrEZg8riSCfKyqtkuEKSzHE3c",
  "key37": "45PWS7b83SEKQCon3PqUhSmuEGCPDKStSmRRF9n79ABxasDcyufQARvpU9pkt7bsKtbag3A4hBEUcWRagvzmPdg1",
  "key38": "2JudviF44jB4YZSJkdBE4aQ8Z8Uw4hV324c2n7kYyzYwR2gTX6DJ1G1X4XbxqZ8dEUHv4uMdfAA8T7rnKhAVwqpb",
  "key39": "33mtmef5mqpVxwPvE3BTnSemQviUtvk1eV9NLW53dEDz37krvpuEztSgg3kAsyrRMHVaoVhCT26foiWXyG3tsVx6"
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
