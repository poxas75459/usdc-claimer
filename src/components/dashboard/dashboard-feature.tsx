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
    "3QGwc7VwMdhZLxyqgiQ57TWY2dou2z96Q2n1VQZvj2jpvd3mRCw47u7XA8vm8dTeAAhweyRr5xvCFKqhxXv4DWfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jj8bioCJRMViFAhfVtg6zqwuMvznsPNkqJUpseUM9RVatNfoxiLt8gEw2trLYc19AN8E6g4RRFYA45pZUXw5Jiu",
  "key1": "4Gppm7xRrSJ9Y7fe5ERhYcjarSbgRoSrCQkDWGuYr2SVdVNsVEtcPpoeKA9AMbKvStUXnyXWT9LvkMcJoEe2gCg9",
  "key2": "4eeJzGsEN3ctwHTMQRFWKtCdd1LUVR4eafUnkDNQak3eknCska82ZxDy66DoMp7Vt6Yonq7yYn3kaBfZNMydaoDV",
  "key3": "4qAphvVPmyfTUswkHWKtJMM31Cujo73Gm1YVnQ1gfeQmhWRFrcFYxwmgMM3CNqYVr4pvJUotMXncc1fhbDoccaZH",
  "key4": "3XFeY4Ku8N7XVzViKn6g8DSFPD2kHQmG7tKoMm9A67qSgfdkx1S2J4aqVWPnf7Pwo7Nw9a8W7d2rC2dP2CYcuF5Z",
  "key5": "GrtR1A5YrLCE7AJPEB73rWaCr1X4jvbhoN8jCfyNmjioc5zpm7cZd7aV3pHo36xdBWfQqs1iQCupwiHAjUkTZDP",
  "key6": "Vpgu3HQ7pqxNeGkNPotEycSefT9FZ1EzBRmEMsKia7K647DXnjLn69DidMUPSxZx3P1Q9aqGPTSyq33xwnxp7qV",
  "key7": "2YHUmKupkcXj8oTZm6vsZitQqkaASAJa6zQBwuXpWQHo6kJ1aLkHMsumJfzYsKqY18VsLdLr8tuRDPSsB8yJRxJn",
  "key8": "5cnTiP5A8ryVMkjXJzCSuDMP7WmU8VwQMTAgjgSzXVGnZJZS3kVZYyWnyo8AutZzkjFdBFpUDnkf5gYq6dLW2Xhy",
  "key9": "2gNpqQwDM2czLp3ZjvZQWWKdSkuAARhjoYzsTWmFVL2mxsVT7uGALV69zrXbQcrez9GD3K3XEXegEX1wxkH1csBB",
  "key10": "x9Rer7YLQ42KqFYQi6LfE8C5rTghGSUviaWVG2GYZzrFMiGziKt6fqgt7rarwbmcXmyCBQz3HRTuimEGQqinPL1",
  "key11": "JrygYcG2rTErNkkjWUJV8q47343XzEqp41SQjkkCHTxWhkxsAnyBDvEv9RMKFqp6BPZrUdAgdr8DTP4mLpdRiUb",
  "key12": "2noTEcZ6pbBqEiicccn75chizRsPLqm5mvB2iWXMV3NgTGuo6QZgcLCerirRQVbZQCBjCo8qW9QdDCD4XYzWHrsG",
  "key13": "4iueG65DhHGUVpJ5wh4DvZccsq19hFBmHwrq6JUL84qTNJ4EP1tHP5jAcL6hnwRzAAXcBPMSd9EKDFAPMhCvsbgo",
  "key14": "4z8n1hws4L4mPsrnqQodL4xz8AWJWhuneuMsv8rAFn8pF68QojtHKUy6DTJkhA22nZrHf3dHoTGuMdBr4ntwLkHw",
  "key15": "4bZXwXYa75GaZHAtmYYVLHpmwJn3T42p6w8jCQNSdifXyVdiD3CVwsLQESgg4KeGCGkzb8RTyuKgxoMurboiciL4",
  "key16": "3iRFrGpM1sEsXko1n7NuN1CEUvPxaq91TPYdj15A2n4dEYVCBL6T2KJkuqHaMzWHuh9xQD35btTXoA71LfkkkKgA",
  "key17": "2QzhpSjqoK3LHNcTmtmomQuzDsqyDNp2atfYZGgeGxTq8A26CGwvi5qWsSAKm3A9ep6kiVEVwvMgFRzE8LEDGFSR",
  "key18": "WtzNdLdgtdpFWww9rqovNnC9uhJ6A5hV7aYmoiCQsU3vVCSBxmFz44BuWkiaN387aCDa58YMzaWu46bvFzeqPGn",
  "key19": "3Yjkw3GH9kRQN6pbzAhK5FY7oDACFPm2JjJRgT7nEgUEFcPrb16jxNvvmcKju8fHg1JxcmXSMRyg3xu2iu1SSDgj",
  "key20": "2UA8jZqhRkfRfDUDVFAxVzq4oq9gwMFfZeEw2pGnu7AtHprhbFFyDSztW321U77az7UkqyHCBp34Gs6htevQagdD",
  "key21": "4rQhi1GCUZmM9c17UgRoRuo84unWpmWLibP3mobbetRzh1S56yH6s3RYpxMySBpAS5CtStQBbpippkTtL3x6EBzz",
  "key22": "39xQt9hBzWcs6a6Ae59YodpMzQVHrtE44HMfVz8RScv7J84Wr4tbMvCgCsarkVwo8goRADUzWnbzcYSjjzjTXcwu",
  "key23": "3oxZyf8KkKJCC1vqir7a2JMTcySH85YqM6QAHe6mPaBCTpFP5vc4R9MW4pH8xDz8KrCEWMiaycE8L5M8G6144WM5",
  "key24": "4NhdfkzeSQdHYXpT3dWhJqePWMFi1Pf6Cb9WX4MDZGP76843PBg2G2YkPSpe9QFjDqwWgHTYdNKMLhpFjkBQhZTC",
  "key25": "9VMhJy7385zmUd63ohRXWc28iyhdGCxdQqba3ogwJ97sFSL2qghqtipzvvhfmE2EnwoDjRe66RorcdZAUW7d5Pr",
  "key26": "4HYsDYS3DPJKUqVcoCm6ryW1Kq7YurWJVm1go65hkiDYipYKoeJhwKYrCBBYvL2SoUV5DZvTyqATZnWBcB17HKKw",
  "key27": "27uQZ3HNxAzWPNfnJ7keYoayCDCeV6kCGSb8HzFoZwHCed1gCKqVPZj6RZGsAbj3dYEdqQdyxHYo99uoHJKj41Fp",
  "key28": "5NTL4RCXVCDsDgrmxv8m3RzZ4iyxYFtrhHjNm1ZpZASH38fPwX3F8iPfYsYvarvNqKJujC2YswWyT4gR4gdEfHHf",
  "key29": "4mCn8r2tDNPZDS8CHaLLZbbasNTdf66XfQJsfNpJVduRw16kmkRjHtk9PEG4FsyUFdB97wJffaEFDYaJhaoX7jXQ",
  "key30": "5F6GUPWLG19xaq36s8Mj5261dwgj1rNFzQsdyZd2rQ6JgGqhSfkmwXNaW2L8H3LKRb4GEoMZHaFknpHQt9AevrRE",
  "key31": "3QguS6S6uAW9cpNtYzCYRtz1VNNd6rX3g955o1CA2Ra96JCoBeC1b3WTFcpuTFGLaeavhHCiLo359AAAGzWWRt9K",
  "key32": "X2wf2LVUmFRwyncSVMzR6hZ7U98gyNoFeF1A8UuGxvyBRUpu8xbx2vZHhGTpYtqVebV2MScwv6iz8L4QFPxqfxp",
  "key33": "66gnm5aTT32L1BXVsqybLDwZQAe65gEwRYiuWGMwCEXzKSsXaBdkNgMu39kNxNHp2UebNxKoioHmSSmH7Wmj2HFb",
  "key34": "4qXyZB9zg6V9Ec5DSe8owathTaUnMUaaciSLF2JmBUYu6ajGH6uFC2vYCHRZ2Th4vwLa3KCJ1Uswc91EHqTkT8fU",
  "key35": "4cpU3iNUfTRNNxWWBkrcto36oiAHAipHJVxo8n7x578hJ19DkCLEWzD8Q3EZ1kqh6CYXpbVLNkCX5u5APo3iQdXU",
  "key36": "257rH3NhhmGvHjZ3wyEjyLfjKSwoz9HjfJ8CDwkQdGLdZvGDDX2UESm386RN8Hzh9RPDFJPfi4qP9cTETL4tiNQw",
  "key37": "3PcUUYBLsiQFh38ehGarYr5F1avDdxPv6DmCNf6ST6FmmwQJk9TestHuSSZD5VjhcxmBh3Vgud9EU7Lsh7r4rU2R"
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
