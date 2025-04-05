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
    "qsi5fbvzeth6NGTEKBASXMSRZ5F7QxE2bqVJrcrFnnvfSt1hJXxMzoSCRSwWLRdTywxDRZuMVtcKBNGFG2kVgg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hxKK7dSRWcfnBe6VLrFaexkRHGxgQCpjhDazn512rNzLBh3cyeSk49suiD6hzKtPeRbweB2KZW3QjdC2FxwHCa",
  "key1": "3k92AaWegcM3RLLa4bDaBMwmMCWYXvkBTa3YaDqe4F4ewNbR6vDCSz6dSmeQdnmWuoYbKRhZEw5g2daNkBjxGKRD",
  "key2": "3wPoX9St4TazcgrYmsuYELbGPjXNFt5xeqhSuUrgh2Es3qXzFCwyHSDBqRZSo2iTSuw85xM4ziCxzh8Vqb5xs1aR",
  "key3": "2S26FjfUVjXhJE5zvdxrbCvDUeuqkx8Cf9ZsESaDMfkw3693bX2J8FetDZcAdvZRshFTFGBiA2xAsfFnxEuarcNX",
  "key4": "5z2yKpNVkUtZ9aEGXF56VveF9WKf1Fyq92v9NxNQey5G4EyvNjZgQtLpjFjqJy4Tt3K9fZsLTCbNZ2FcMHy2LmYG",
  "key5": "3SnPg9Ecor5UWPcqrgCTfG1opiuRunENqYT1kpYTwCvPKfmKu6n1bEwvdS8os5t6bDcU9yD4nkLTDCdzHPJvnDCu",
  "key6": "v6jVusNiiUHY2b8nGKPB1VUGbvKeJZWDrd4Qk54bYVgRRm943d9ceP8Udt1bp3UkpEbsBCvbja4MrjmxHrLYGrV",
  "key7": "XPgb4sq8YpYtoAB1VG5v5JcqYZxdXzGnsmn7RhHnwg1XDDaHDTNq53MeBPcxjxVyEwvki4gpQTYd3vyyiY9jmzv",
  "key8": "2KdTqhWvW5sTJx8We4zedJbtzWP2a4z4JNTQqVagfxwcb8X1aLrRFFfkQrDb6x9z2uKAu17WENEwB8TgsppLx6gJ",
  "key9": "SXn6cPMvp856K3Hkuj7E2zCVxS2TibxigjnbbodYUU26XuPEqTov3CTvtFJRMFkGTVrPF644QeYB5M4GM7tsU8v",
  "key10": "2LbTEbxH5dLdZDai8DtubvW9ksiXmoL6qUFuv1i3KEpXZE7vH1THvwVFdhxPH7R7n9yUMiCszJ8Zp5QArhz3rbB3",
  "key11": "3TLM3L5Cb7P5fm4n8LPjU3cpue5GPqxw5NUAWoiW9zfcTvK72BmsDRWWLSyHo8aQ5ZiwdmozvBJ1dwzT2VY3RnvN",
  "key12": "4kkYDF9b3urs2pSZR8BXUnsE3zeh4wFzhcPmE2EmP9CarLEYkVxwSG2maaHXhFnaJcg9d5ZpqiRmru37kDUJNz7c",
  "key13": "4WvWduvbYunRoxiHRQNobDkuJsMnaYjfPo8cHCnqAN5512X59szs1RJQVc2RDuwxZf8QQusm5c8ZAwNaKGMREody",
  "key14": "5vTybBewiETrVQYjXuqP9Zo8i9PAJ7oGBuDksFi4cvA5EKdYYRRDqTponJMWwGxCKoP48RL2UtoXD9zBBRVhFcZj",
  "key15": "4etpne3XDkdD2gjqhrPpCwbQsJ3ugUkpDSQSfURfeAUQeeD2WFEaST1NteiUoQBKgc3MGwh4HFughofv6D229SEQ",
  "key16": "2X9FWWH1hXZ1gH3eekcKnzb5w2E137tsRuGa9vEMZ11kEdEQMD4wEbTxSYHVy4qgtQjCJ8PVDeEuEpZyHuxeerjE",
  "key17": "xYZRndz1n96X8kRRSFP3d86LYKzmkWtw13MU3JcFNFqgVDvqxXXU2j1CyZnx6TG8bQ1sSZupRFeoZCkekVRvNFw",
  "key18": "3cvWBogzr7J2TNzPtprHvrEAW8PDsvjeeykjNs7Tw5FDN1h8XABzG2g4wJ4C6FK1UyzzZq81XYTqZ1yf3z4Gs3mY",
  "key19": "3dHJJ47JT1p5o2rqfHBi8q8VhcvhaErEm41a4t4ELeDBqUey8zQnMpafG1zWa2ZqtzJXcVS6arjGzkwzE6CMqF6Q",
  "key20": "2xh2SJbxkU3wFmgZDCEpNspSs2hiRFoHhXNawQKQkRrxEGpMojqiDpjWmkVvUBkBCSew3ZKgf98wV634b7ZXhX4C",
  "key21": "27U1r8Y5yiEb2E73Lj3NhV6jtN4Mk16oXWtdTr2RLLYLR8HXUZRZ6aDLiurQE9sJznhst29FndsTt6qqo9NKUsDX",
  "key22": "4zJ7NcRPMLdjZqGYLtfQdD5dgmmNEpQ3imXw2nt7oqvx5L2StGtCX9okYJNUuxHVZdxHmPeu3zCSdEymcNKmwo79",
  "key23": "3ejSmzCohv5mbRyH4SWVTYGxhkqSDfpP3Fb8aNhx1QruSKxai46jWYCp8o3PTh1coXycuVvDuTDuzi1DamVKcApY",
  "key24": "4Ghfew5jE2o7kpDB9EoXenc8Z47rJgxWixxFDX2KBu3NEm2ESpoXRh9PSQA8AfbxoYpC9HWER54Cm6LxjZ1utCGG",
  "key25": "4TfyriYLZH6M5CVwN1PFPecPecqf52A5eFhk25MNBBJXiYsw2QWGGmNWFQftnks11JwmphTqJATGRLsZhq5t83tZ",
  "key26": "3ctUTmoJL6vGbgmhCp8uwENC3fhNYZY2YMW2Kp7KDuLoXomEgzfhQECceD9e6jaW54s9U5b4B4RiXhzV5X2bNtvg",
  "key27": "2S3Q3SEQUFeY1JMMRdQFFvEiehrHdThSzqVw8bj4xfxvHmTdvk5CSudfRTRyG15DJvwWFMrwZhnN79nhRRU5eZzJ",
  "key28": "3yJ3XLGdNCth2zTwc71ehfRXRnMndCiENoMJo2jNRP2x2Vjsf4Wr38jrAB89evCzPfeMDkQxWdt5kvcqp6cEnHSQ",
  "key29": "2aToCYQzuFj1eH3r5W6XpHn8txdCpPBK4hrerPwsz3A2qmNuneup6sfSR9nLZJ3xbSjz2ouNu5BbUrnVf9QqPeEb",
  "key30": "3naWehKdz3iMKYnWxr6HMqQqDpQXgMyP2ey3W41Np4JFh4wcHhZqPBsSMc2ck2E6HgAaD8CGggK6hhfntDCWdQ4g",
  "key31": "2zn95FihnG2TKmTfhi4qBVECTGMXNyv1wWTXPRcU7aUGnTDeg1YYsCbBtKisrEVhr3CCU2Hj3oY6pmEahyuahSgP",
  "key32": "2zF6GoF6QAXXxdpodYEsgzeXvK6SKCojEimXVf9QsPPfgQ5woK91pdubPkradvkyvv3aTqvYzvAP5W9K4Bhzk81Y",
  "key33": "AqK5hNwiaQkqGWA9EhuYTF36FTu8SL6Vnb35LcVHPTuUGwTNFVMNBVyqNNB5kEQEx6cUKtoUy8GJ7JNgBYxesXw"
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
