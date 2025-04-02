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
    "4Ca4bhB5hpCqegPTP2zvEKL4V2HHppJdzNtV4Azgsi5tidazSZn864SXQdcFxojuhBPmNTqULvPzTUQZc7CNkDrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aVF4eS7rgVCou7BUD4TM2f2V9HMpUHFH8HpsJaVfJhu33kz2DpYb4hJweumvyf6CPEkaVYfLta61SPxnoEiwGp",
  "key1": "3MgANauYV7LCd7ebtZ2pQJLwZ4yo5CSJtDreJHuYnnWyzzHgnqD75k97dUq4UK5eAmC6ZbFj28mK98YqKm22jpE6",
  "key2": "2mh4GdseYZytiqQQPJyD4AgSaRED1mW3B3BjWvwg8YUfLnNyRQe2ksJ1rQe4Vs3AFajyxu4kSLqqpkes5QFo7cJw",
  "key3": "3HH9TYX8izt2FH72YRhBH1MXX8cv4D97kantzKTAE42aXmW5ZcHeDsUpDgaQ1fx8fVwL8PyDrndEG8usagRWea3B",
  "key4": "4V6UH8huAnfTb1ff4zmwLb3mRfXkAU1R232EzPMQkZQJcMifTfkGde3ewxsJUuT9j5wmT9Mh16jTYzkcZeCb3g2P",
  "key5": "2Sa1h5d28VaUct3wbyGMwQ7Jrcp7YwxkCTS625rXjfrzJc6zJJifRnx7jBcTfNgVRBAsh4cRGq1VadS3tZrnEFi6",
  "key6": "4PDDrAXhqBfvJrG7UFLTDqfD1Jd4KhQTX4F1A1b2qjdJEMJynBpzWRv1sP9dN76SNuR2Z2sD9KwTgrz7dZwJYnXj",
  "key7": "5VkmpiwkZSe8EVHGHfgnEgRjmJo8ag7uajus5KZkaXKTf5EcjmCz6gDEDBf8Zpujexz76ukEuLvWd1yZznm7bAw",
  "key8": "JGJBzhLkiHFGmnJnY3ouK51gCDjJxUg3y8WaTMDMY289rd1aCeDzQNA8wFhCTtuNia4gsT35tNdEjuWKLYFHPK4",
  "key9": "uAXGaYgNth3sj7ZjMpp2ZL3hYxWndeW656JRfSvRMa9TAnWmZZvSCwmbFzk2gbqXTnmJ8DRNwhkvLH17KQDg48a",
  "key10": "3HKBttrMDgBiNXMnRgPdZ3FjSwDiN3K5Nntm7PXvTZS7YmsukdohJAshJu2vwzbpsN22trJ9aGVVYoWHQ7jq53Zm",
  "key11": "5RpS1cmDA5h49uUcewQXYjSFcjzPxpDm3UAL5jDJyn7xe6eyDUuPxtrXc49ujfH1foTLgHsPSXiTDV9ke166H6EE",
  "key12": "4Am8JeW26frojhZdnWAZosbEFBDCRgEdJy1XYy8bURvDvcjgyHC5ZpvkpK19cUTMBv1Ysac2M287NxsEP2GKYxa5",
  "key13": "3QWtD8iRLSKd4SbU3gba2CXPee2s66XtpAvqqnVoguZDH2ooUDPwzFJ7y2jobkcJCL9iiomcAiyXXehbhLh6ow8v",
  "key14": "3cbauWYnJpG5Pd8Map5haU7hTY6b5ijg2adR5Hsz3dtrWnSZ1KfZKm2FWbkMv2yJxg7kfrSiniNs7zsbUSizSCAe",
  "key15": "1U87RjncyEY9U8oqvtWxesZDmaE7Uk5YndAnJkJ9XzPoankucmqZzgox2V1Gd9Z7o8fG9jRF46ogFT2j9Mu6AhY",
  "key16": "dFmhfDzQUgH4RbhXP6csP1MzffiQqMcxDiVZNECcppyMCpgm4Mcuk7teQvuqJTWiGEcwCxxJs8P6u4bpYASM62K",
  "key17": "2H5m4PbK5uhbMwwS7yCBFXQS7wzQARyLuY9jHzWu7B4ZUMGDQC2FTBEvHdWRXdtXaSqiNPUeH1hzFmNoYD7LeEfB",
  "key18": "4PenPVwsbZEJjJySmwogmWEghGyysXCKBpujz6M8Yr8G9Zb1B8qHpiwrBLmgR8vcV1nFpQc4haDijBGHY9PKSfiG",
  "key19": "4vtYfvWdptjC72WKij7zmFpjeG5qZnT6FfciiGnRofREK26ebmGR1nJBLomxk6aD92E3wXBnxQC17W4aqxp1A9es",
  "key20": "5a88hierqKBraxay5gAkqQESToMFUQ6gPWzeqSFmEZX5Eqn4cxf4XzYHuKFFQPzyKqw9WRMvM4pVyjNYwV5ybZwY",
  "key21": "4pqfsUbEZifhLyffjjifxzWipoWwwUcVYTAFHJDfXk6YfRt2Dc46gdvNig4YEwaZmZDbGMrjZWWrebSsBQfxMKRk",
  "key22": "23xTP4mudo8waoGtkvYicRre9nSuGxxFhVApMqEZXov2mdk9xprh2uunQjt5nF1BWoZbyVKzxoMeS82smmwAaJwG",
  "key23": "4EMTT97xyqxSG1uZ8iF8a6XRQjEPXSWesmHDMBtLfGuSG1vPU7cefN1BE5BjGkhztEcpnZsSJVLxJ6A3bJdoXi3B",
  "key24": "3PxzN4t4BBLqrSwbsYvFpiSE2dnfEN4dvvPZXGBSmWtuveUUdvBS8gnmxEHjKVKdp1wfoyUGeM5EV2SHb68d4FRe",
  "key25": "kTcXudV1sGPiZ2srkbiYJhaXhn9suPGnanD968m8MenjvaufSLVyXfaMKndqupSGjg4SxF9PmL16oQncP5VeLx1",
  "key26": "49KahkYTrqEqh7GPgSVK5N4G3sHXjxcDs5fTxBqVfXZPCeFqa6MNQxZfVCp9fF8UG4PsrnbFAMQfDkbX25hRvMya",
  "key27": "42PWEDA63fB8k8CVEumhRWCnfchKyCtE4LVoEnxNjLTostWy8pRW2aZPRt4hH4JDQyCLo6VKvWUEC1Yy4jBXfsGF",
  "key28": "wZQSENkq12ujSoa5Rhsu9tZw9AGBaCWTxQB97HSLVnzooxKA9CP8agLiEcYEF1j6mkvKcHQq7KyWPyHXCXdXd91",
  "key29": "3YfeMrc92qYdbt5PTQb9xv9BTDfW9myNqDa5CK5YtBYv9TrjNPqBjsv6sYZHKLxyXDZjoV1jpZ1rJZ6xZz4rg3kS",
  "key30": "5KbgCH2zjZxpqbXhoJaxLjF5hrqu2WT4c9QLq8EkuC1uZHXSEFEwBH4dDSqgAQxH5BesC5vrPbYgVUY3mA5SdaPk",
  "key31": "USUM5dLKvQY84Efs2T9XQkVSSioYoqcdAVGNStk1Heuua8QbmVuAQP7fn6uTTS1FFm3Ez9vNo6mhwxH8hkSjPF2",
  "key32": "aLzVbN9CVijwVQpU1ht4Fnvn2z8CiHNEBdX4dCaaDmXvV7rD8ywg3km2oFousR7MuA6pQyMyk2nJyTWTPA1xPeb",
  "key33": "4f8zEy6bUmP1A3smKurw1SUSuEhKB7es8Mq56A8WSmpHkTEeFwuaZihJZ9MbgZdAcJwd14ZfhqHfBPT8T27KAefT",
  "key34": "5AcNmzcKSs63NBXVF2uAUL8K6f4KeHKozyS3WKVHjeFeCCoKfPJAcjk9aiWrYWSRbZFDQmVWMeaFYx7hK1USRDfQ",
  "key35": "4TNmzaKFmiKMpaTQ4aQSt73C1x38J5wVVQSyzKBAccM4adwxBDoHgdSG69PXiTvjphDscEgQHCUmwqyzMhcA95Jm",
  "key36": "2sc1Gumx58oKkSAiKjmHNXoNsNC97V46Zchs8xnYbGQi8CcQH8VBctjvGqyH8fkoE8BadXAErufS4dm8uUn7HbBa",
  "key37": "ZtCUvxQH7xkTHexCnZzwDjXqPJkVUuiWpZJbieXnVq3qLh93pRdAbukxYzo2L8GQWygJ12mzYCTHWA5SRVHCdD6",
  "key38": "3VddR6Bm4kwTTJGDzyXhTYAPrJSDSJ25KpUyHLb8VRBhJHRQyHMfchQLukXN4p5fWuSsmz1zibKFFGauuuvp5BrQ",
  "key39": "2nguYvfQQXdkM8bX7ufU9kTLfeJqBHPzF4wJ5iNScruRoBYGyATMnvkGo6EQhJuYZpMZPeacfqbkgvHHXkd4NuEZ",
  "key40": "2AXUVPhq5AoqzFUnKBrfb4iBrPEAM7Eydjm2Nmf5RcdmKDP8aHSxjAA4zxKw3MZ7MyJYTBw1PcNHAHKRuMVK19me",
  "key41": "YLdAmPFya8L2wJwzofBeSmJn8Mw4ijm681iZ2iWcGqy3QrfVUuPk3Bd7dsoo3m1eYeqWCLJm3iiADJHnStBLE22",
  "key42": "2uMgy9pMcLNngBcCsGnQfvtYPhBSD8UaUHHoQAieUZAb5uXpmx2Ymd1SE9Lpu1B8Zivj1qGUdpzUAoeNtZXeXcam",
  "key43": "2Ak87PAKVukLj615QZMxrGCJ1sSSiLjWCjSkXzQsXsvFocqAi8jP7KhQ5Sz1DRYiPt6yMXefxkQhj2rbMTCfa2Js",
  "key44": "YR4PNpxWPG1GinRGTDA1QCfpdyk1tAi8m2HbA4aAYzb2h1grTY7SCBDSTaDWZ9KYT9RZum7LLVyQhFTiCk9GYBS",
  "key45": "TxiA3v79spaFcG7gsww4CPTiVA6bHWXaJDHRVftt7KcxSnHZMp3DAdnM93WTyR2fvrpHqHbfEcFTWbJKUm1CR1G",
  "key46": "2nJczsJcC5nqB2MgntX3DfAEdCrHnMVvhKF1g2Zr9SUW4oWuN9tTsRnM79syp8h573ike1FseB6dAbor9hHLVfoc",
  "key47": "5yWKaRiEjQEidpV6TJ3naTqpRjb8QNtgKNjWpURUs9Vw6Hxyxz8wJ4gCA4j2za5Js39XJP6QbY941uYcdxiUWAm4",
  "key48": "5WfyyzTWre3B8nJkXFmZGdWW1Lww2D3W4ALBDxLyYvNmY3nRt3tZFvuSHSYaqjs4ogCtwvFkbnLdVTHXWmiGW3TN"
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
