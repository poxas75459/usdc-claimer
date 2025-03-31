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
    "3eNDEn3V8WsZ9wXRdyXB9icoZzbQs5UnuvhEFQnwhjWbJ8ZjNM8pC7M5pEdjy8EMKUdpuEAbY6QGSqoQUsJ1mM3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jH5A5GEhvHrYJvoSKEsqTcXwfNtWJsubD62r9A8p7BsMJcM8oHp4Kdov4TXfAcLJbMiXQEEcj1bJtYTZc5ZEiHo",
  "key1": "2M2SxLcAtSLc1i3n33XNkwLgkFFjPr8mVupzvR6Sr3bZMeEwrhnGMXCofMPSfpauYS4HqZwwRRbXkqjTrdcJJfUs",
  "key2": "4gpHerM3F7nvCGRv2SCheqyoXKGfwQ4WEigBxxeggbWVg24JhZW1QDcbhBKFV6W8ozdgQixiTzGrTnGE2gfskspF",
  "key3": "Xq6pVdvQWhvqr7rFPTKF4U4wRS2LCRM9FYDG8CcwsA2PXz9TETGxDKeGJHpTxiABNP7F38KFKwLhP1z4f1yJnBi",
  "key4": "36JTR4XHExqRXQnzAdoahUxqQCBwjwshFJ5yoRJvWQfpcf252LvZLpr5rK636AtRjxE7o4eLcyM6FRgVvtGk2k6f",
  "key5": "3mVYCjMhPoBhVSwUXq66fsWs1giceFuLFehRLTr7fEMGAYQZqDXg5ZZraPnKxTTevjYBSgaTw4rco941mKQH52Qj",
  "key6": "2apwdrHbatjaDyPiuJccMrktoycvjKnXvEzFxUWZyPX9aVK1bzh9o4aYTjuFTrMam2bkVJUfJqGwLVmoCdX1h7Wn",
  "key7": "3NgSctWmr3XbNxVY4msUjDXx3VqDpWGJJTpaCBbmUWK1oC3f4Eu3oczNx663SZqhrzjkrKr4YqYTHk4iCgxz9QoU",
  "key8": "2yP1M7t4EUqTXU1BoGt8wKcod994CSynFeH2ZNkja3o8ag8g4YWRLJFVgUeudSFHp56EaLBp3kBHRjBNqdf7zxAq",
  "key9": "66YX6M3GfNPDBdwhxR4ku99ZzpvUmXTRcTv7v1vaxEhvvEkPCoZrFWrXng63uVc2kxetYy1Rjv8AJRkyq6cVuVuo",
  "key10": "2TNAWJYqL1zNgyvnyev2LTqk9SkTryWaMU43YQzxTTNULCk9LgDEY34iibLhD1QVYTgq5TfMZocJ3aSPq1AhhHtG",
  "key11": "4CNqUNGNgLosbVZhkqzANxmxCqAQWub6LAhF8h5SaaeC9WssMPTq5T4Z6NF5nRMGnLbpPXtKHWmnWxqBVntDKmPp",
  "key12": "3KJUKX84raddTXoneSj8x2T83XquntcxJt2kBKkirBH5iw4voB58Atm5N8BEHTFwVxj6uL2Dn3H16BdPjvmgD5t4",
  "key13": "2RTZNws4wqGxoAaQzbp6mvQoc7gDCPPwwZqEtUHDKWGsAVbUxNdnPCafTFmpVeiKgEGCrd3sPkiXgekcjHUC5io",
  "key14": "4eWziHXfVGLdgaHHmJ1YuL7ze9ooVQ7fTNLfWx6kofuM8bw1LkkthWwfi8CTdcwfPnoGWrXVMmwdCKgSp7HfSed4",
  "key15": "5k2H9D7MwzpNSZcWckfbfDnBcUSVqMMHoizcJ1PLuCfk3PYeFWUUEeMtLJzCKurqGphkzpHjioBKsqUCwsoQLB5D",
  "key16": "2fM5vrzsAXNGvZHxG9tE9w5bWY9G3ZiPjZe7gNXUxNTaQCBe6kmSsD8VdfwZyKjNMhTm8Af2MQ2ZaZcr8LTQPh8v",
  "key17": "3jbxT4rjtfRyhGgpprpQxKZH7F2ZZx29zdB1XfQo5CS86VLhMU6FfM3c9dbT64Wy2qAwHxyYiDkkqq65bx4RcJDu",
  "key18": "4gZ9hFCDXT3emkFFiWzUxyC96r9neYdNhEm2RBD85q5Ct6TLrcnNcJPWbxxVfMyvEkDwPraMBWKGbMQB2xM2tKTc",
  "key19": "2vUpbwXXQUjvhssJm4N6EZb9cavE8gKMFpaWKvV7yeU72aXP36uBqSJpELUbsJJaAqwgFWUeoLLRNoo7EsX6n8Ge",
  "key20": "652i9DnSZ9PUePDcQnbcGWSJbotcdxVsaYwP9UfzvjezXKKFmAFNSGbynx7J6164dRFxfxL5WbTgq3sVZ56aLtLK",
  "key21": "5NV46exsqYg54V9y2H3Go3L3F9cg8bZSHpuybC1jLm4AUFEuiMW6BgEcpw3y9r1wfWEHrdxUZ6d3AAVSfzSLYpX4",
  "key22": "51EQaKW616G5p7mzkmYLroqrJmwoehGfU2mCTChvrDSvxkt34arUe4THaXGWQh3oyPtm8o3REs5bFTSQZgWoX38V",
  "key23": "3n164qK2jyUhZSczvz1XLrfTZTh7Q6c8k7RsaRJTCqurx3ww75XXUkaDD5umkfUk9oMtBEZfwRuwuxcijE9x9Uy3",
  "key24": "5HHDhZP8up3TvG8baL5L1YherwtNzkkxcaFnqFBUXEX1TEnYXmnfKFyj8XDBu6gdFT8Y2KStn4Rwmmet2NJP7Kqa",
  "key25": "5K4YJ16pvQVnv8SgBqy2aB5qoWpCtQX8cqF2VLNm65Bjzg87gDHijon9hYJwh39MJQhTnPE8M8382pwNMSZKshPC",
  "key26": "2yxL4PrCHXfBqpWc8asdi77vPThVb6AKuZXipXPsDyEkE5KL1wGKYRP5nnCtVaQrYY7DEqWJ6336qximhDndFUts",
  "key27": "3iNvdRTVnUsC7Di13uwcd5DJfMGbL6mFrd2jRCZxnFzENxmMDfavK42bh6HqswBdPMZZZn4fii9T7cTn8nYtqzxN",
  "key28": "4igdRjSeG2kC3RLFkVa4AcMeKucKWCvSUcrZ6RqNHM5xeFRo9RMiB85qqgfdMHyEnPRz7bmwmnJpm5N5hAyDTYwZ",
  "key29": "3HxKpVogxqmdW8Wi8c6oLDN9TN8PV8AeTcCJ5brvaSbdCam1MbWiuPKVkZMciGRUqeuKPXsX4snWvuFDsv52EUDq",
  "key30": "3UzYRj9eXS3adoWNNasLFQrcAyPBzULUn7hZNHEZjTKMQqe4vB4EVgQGCg71YqrF6SqhHvrdnHdBK5hgKswLkTwD",
  "key31": "VWtuHNhGPUdCQB1EEuF6hZ5qVyooSFx9G9D88An9jTYWb1YoiAP9JsTirTVHqsTZuNnUmhTvQx9bcKFyQsTMd8j",
  "key32": "2B7U5QjEibcRDhVHukRzkdkLV1d3UvanY87wKQH1jGEbZMetYV7CbKoheWahSKUv4tUtBBDR6cy4bARivjdXqhz7",
  "key33": "TdSBioPavitzGvPg3Y6LPY17tsXTEXkref4aJ2UZstk54QLdtPXE8na9jrssftP9qkfkU6VTX5hWbUCGaG5MBQP",
  "key34": "3HE9M6YPk52TZUPHGj55X4ytgGeMNhHcBkjhty9Hue2yTLzqAx1NMDjVp25zfnBEjMQwY26P5EYqAuFZmvhYBE3X",
  "key35": "56v4iZ5gug9KpW8kcXE82R9UysscMSEsj2LWsF1iNYq5nCC3Wduz7ifruoirevUMpeQygAX7i7XEuDJgF1AUUCMD",
  "key36": "22zFLfrkdX5mDTm6ZJPVtXhqBWWKVyCEFn7nrJKjWZ4wh5arnjPQyEddxBKdvADVhz2JqwPdvcust7w4MHwSW3F3",
  "key37": "3mKdz5PcNNYH4NWoj7wWPKiJNak3TsjoM1EKAYJiThxHx4vkCPrkZkWwsscgcSSpC2AJriw6EYAyV2Lavpvh4Y32",
  "key38": "4YdEp3xDV1MDF8VNcK2mSxNnpCYiPmteTeE6vH5abcz1XNLqVhKxQU5kJppuVWZeSunMP28NYVQTzDupDHKQ48C7",
  "key39": "3TB4eiiMmApKoteqyb7JDu64Uai55r93pe4zX6uz5jTssgTeaJBfAY2i1LgkCVxj9zWyjVj55rL64uZTGgUzNB7E"
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
