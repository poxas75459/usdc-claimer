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
    "sFaPABUaYfm2UdW2dAexqqG99WvCDhpbb8mfnjXB3CPJsWFdg97q2n771UEiuRtr2RGqXgwcdJJbkNhwvgtkyF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5E24Ccu3S9io6iCKxB7espLHPxAvJSPrs9BQM9BdvvW2kHVj9Puo5FSDMygx4j5tAazmTVpzRdPXhV3ykGpZsB",
  "key1": "66UGdacBnDbFfeMqtkHtBDeDZrHnpGx3yZyFMiJ8VAmibHktNGQTV1iMdG4MgGQTi9tBrxidBmmuQJDK2waRCwkP",
  "key2": "5wFeqfHoWMc6xh4SkDsrrTv6JExg6KAtcFWrZgTY2oL928tSpzA62zH77vqGxoWBHF1fHgrNBTxYv7uNesfsiQJB",
  "key3": "3Q41vqGys39v5xUTEqjo7v3uFKfRjjWnVcY1YeMDmfHYp9qXx73gLaSRhzScmA77eC6UUcQpQxXKCupubqLyMXsH",
  "key4": "KrWJMWYov82CH2gqgHLU7FZCxYrwkm8pfYqwwsJjm2tfPeq6HSks1wAYz1wrFAcZbT7DxrK4Pv99NSWEVhRhv1a",
  "key5": "4F2LkC33EP8NmC5CjJuo68JVHqtkDAJgW5fKj8MntPkqfDuEFtFXVHDqbFoQ6c3hC3LorSB1gfv9g2N4MW5BSYG4",
  "key6": "53rZGC52D3hpSejYhi1MiHGRG63Tod3HABLzHByCQuVfguLCxoAWUPdtXDYEQLBxd1ZPrexmAuPUuBGcBZXJpWRG",
  "key7": "3ZVUDm2WXAZBZo3TG1FrQY1VmrsWitM9EHvwNz7qZaWBFsAeBTtDXruZwZfV4cxSTQTgpWRgaCiYTP33Ubjed9ri",
  "key8": "T6cTCkdj4U4tX2VDniAnktCarEStjwQDBpTHqDzdUQkQNzQXJAeUqmKe36KzyejAyb1KmQfEi66ZBiVL4CjAKjP",
  "key9": "2Y83C4TCdJuGvRZWtQcGvsYH6tzXHMaqwu99A9aK5Yfn5zYMAob6wjj1pSdFjECwTEXxY8Roe2Q1dZohfc2kbaXn",
  "key10": "3H57qSsVSo2RGfQ4dQiB6Xj5MVbxC3xrsHXgavwXWaPhU7g6o175r6kM668KnLsPtQN8Qgo239VWy5ZaUjZDgiHN",
  "key11": "2xgRe4R5HXb2sfobVDx3LR9qXwgezN2bmZ12aQ2oNJTprzmoR77eW5pAkK8SVQ4YYNheTcLCyrQXnucBBbzLtqAS",
  "key12": "3z551QqkPuNs7HZDPmSvJ45zYB2Hfh1wadnq93KQhEAyBZW876eCcBU3CGaEtHjaze856h3rsEhTR9LiuAfwjHbA",
  "key13": "4mTbX3YFPxquNuUThwAwPFXGea8jefttmA4trsFPJf4umrt1AiedHq4xjUiFd3VWBs6dPqeHsQjHYDmrcCchYQsC",
  "key14": "3JjEoFS2LbAXkLzq7scFkisWArZWAabjuk7tkqhm7gLqU3gDvENZ8Xf6qN2Hu5xXPtKpSCFNN9z8j2YfxQoAY3CQ",
  "key15": "9WfcQ5h1LDHEgGexnCoPzoPUpmkLfWfvbokPx79kosp8XuhC6ucAzKEqiMBsSEXaeR3uTg9Z9AUMaCsEMqkdCjp",
  "key16": "34aCwbkWKBCL4Mt89B6ePG149MHZNwkXmn6UtKCtnibUkkrnEs2WQRa8cNTjeq3mKP8wbLLX3PBBAK2Dss2APWxf",
  "key17": "bUSHgtqLAocyhUTk5TuoPKzXdYzLXDSgrdaQoAwTr9KCbeBk5jyjQw8yc8nNZF9MqRsfzGiiFAwR662rSwv1sXr",
  "key18": "4m9i8dZb7roWv94VxvND4HHW57ikD4ERkbb4J9kzEiX7tKgHBAqoG5xPtPY6iHmVyjxathGyiPNwvWzMJZyxUMXU",
  "key19": "4nubUQR1N3orbvuJGmfEWkQ6tnmDGGnn9r7GL7KEMx4x2yAPK1DNUzuB7phtNLuC45tU3N5mYfbBWUtFQWdNR4y1",
  "key20": "4UnhRj2Z2PJ8BWkw2XJohLk1A3PN7sCyHbhaQcysHMpPMtu1nSor3bMgu9HSfoYo3owNBEwptEJ3793Yj2Hba737",
  "key21": "siJ3io6TdDtHzci4qw5wuBtZcJStfQMRTi864NFcEW87kLp8WXCT8HrVgxorCWTqibpBaaLXtBSiTxsrfcFntbr",
  "key22": "3FbfVRLXRh7TbsRtHSVLSGCuw3MHwYPGVqwH32Z9jZLe4khzoxfZngu1Ny9Arvsv4ddzzfBCjES9RmDnxRWK7YV2",
  "key23": "57PmsuUDYHLDbBC25z9tM3jCdM5bGSM4FjszhstmzwnC4Bs24fEtt6C2XMCXQupHabbAejGEmnDmgNLnoTS5uyn9",
  "key24": "5XvugiBtwK9HpYXiT7SaTfMEi3KeRwMpAcRS4N4qmXvkAJvz8PtTwSR7J2fyAQmWBZ3EudVe552PcUSDALkdTgbj",
  "key25": "4qPyHn5kHfAryLZdQYyDpPHug3P4BspNWU3fTYAf53QTYKVRChdoFjYGogMzkzJJJBPV6K3KBg55wmVFx8SmjsNt",
  "key26": "NvrT1yPkLRLy4L8diRfFTknqSpsiM4yLZrGEXK53LnXYjSrF7iCANp6cXAyCm4TqyaXEAaihonycQdEh332uBr5",
  "key27": "8RtE7xEVhCyiTU3KpUTSwq6TGbASsfoQNnPe1kugEKLaym6nQNaK9aNNerbZ8r7dm3us9Xx5xvVrxneUb2rL1L1",
  "key28": "5tph8YysLxzX63hohXBtPtKD36PrapSin5hLr3eYCsGsnVpq8PJN4UZcW5G6hTKGLMurRTmC56KdcJRTZJ9yYfbQ",
  "key29": "3ZJNiW4DKUzwLYjvS6M7sSZgRp6eYzxMxHvMRMHWNQ2PiiRrdQASoZ7NC7tMBF1GfQ1D5RXnq85pMo58fCSTywyo",
  "key30": "JjS65U7PRiuhcgovyUVLcjLmanWASCjb7ShatiCmdV19KbYu4QbmeJ8XHWJ8ZWToWZj2XgF9JWTMFDTv22ZqAyF",
  "key31": "24pge9y1kj4kBejswi1T3VDenLteZpJJCndXHLGiJXschohD5HtFbZypdVBpSgNp5tabXuZ6Ng9xtHF3kx6pzgGJ",
  "key32": "2nD897WfWtuJqr3Vh5VPEBBhtkfJ5iCAyeVzsFLma9YuTS1sWW1VNP8PjpVDbAiRk3ob8wYaPQ6oPVoC5TQjFGR4",
  "key33": "3vhe3kGJHhkBha8w3j9iS7CSPgvXcAwBBjitmD1ZV9mCP7kcLqLLjrSaPMLhcxLfXCXVrG2D1eozBTrch2AeGk4K",
  "key34": "3yvqVSPqUxzRd3oKh5YLNggURLQ6rYoyzsvkJJgid26WtD9nTfJHsrunvso8aLBWZBkEgRuTj97t6jaV9iR2Je9U",
  "key35": "2JUJRjdDFUeWbeEW3iMsoBWzGWGXaVc8cwpFVTxB8Sa3T1FMKyKysq73fN7AhVX2eZWkTSogPPepX1YJMUAeXUuu",
  "key36": "Nm8WPHsUzoHgPvbciNF2qnfd1rDrLcDggXGUt5pPNcuzdFPjCjyYcpzw6rFgtaPh1kz5V9SmTmJbMbLTqqN9cct",
  "key37": "92TV5SKbFy4RdvygcXZW8ftFKGjiwRLABSoQd7j5DDtTLMr6BM5uGVZS8v6o6VLoxHYRQhNWQpNEjEmHiS1hw7Z"
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
