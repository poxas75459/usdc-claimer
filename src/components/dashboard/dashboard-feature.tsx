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
    "2f6GQbebr6nhtqWu8axW7YsgKzY8SFkAPBq6bvUfSu7x3FtybmrTJRkobDUwHpHLNDsxbfej5uymBx31MUuyqvYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHxMfqfMMkoXCTxh5ugAE1Z91ZmFQ2tcxq5zDcfizEFFceuoQ28q4nuY7T8oJd3rtjsKMEX6kY3Rucpaty3AFht",
  "key1": "2pmNcKBctVTR44JFHAmSD62CEgMYt8ds5m2caKsWskKHUUx6dYQhfj89n6ZpsZMgEkcNKuiJWYWu6Z1ds5sTTq3U",
  "key2": "45UM8NV5bMGRCqDVDZXRmNY2aTuVB2QbUfkv4WXzRan2WfMgpKEFkXjubzD9xTNfXuh2BawP6S5o393vV9p3wyzV",
  "key3": "v5cbYdt8AmzPk7bePwW7HFupyCuppd1BgpfYumoHH3LZbjm82Xh9QbKf48xCEmDgQdYo3uDJReeKrfuuDQdcRAV",
  "key4": "4GQTGogPnSAT762uKUSY7YQ6bUrWgC7wRRX36iZhnrZgJczUNzjtCSUqLTYtsFZmB2WvGBqut1niUY97KW2tmcQ7",
  "key5": "5LepbcVu2svW38oqsqdiGNufEVua9p7u8wH2kih6VU4i3Cr7yQrJRpMLX5jhEkBsVYAz9HmRRfjv3one9nPRxvKk",
  "key6": "49BAnbxeZFo7M48SPYP3PkSPCH7imJU6ejQb4cqMygazTF6hyw6ZFbnfJmPWN41U7AAqcHvPwX692BneT4kS4ksT",
  "key7": "4xdyqTqnntzJiioqSw6bZRqM69DuFq4H2Y3ED1e2yacffe64hAcf642EpqgaSwRVaJdknDduA9Pptkcb7Hdq142U",
  "key8": "2BhAkHr5wzo12K9vYEdfKEu6drg7wkCXPExLgJVsNQfJUbzUXnsuuwsS5WyUqmfLFWSj5dKYfQaCyFw37QGzyi1K",
  "key9": "2oP43JqegXntW7WAGyRXstfYWD3EGWJ9pgUucTEJp2tDZe2X3PZ4hnVKHijGn7qvRQFoS63LjH9cxRSJv7JWNxMt",
  "key10": "4yViJPUqC6e12qf6r9zqirhotgQDCBHp9Q1aEGrFnSmh4ck8JRTnF8q4FU2CQngxzx4kajWVhx3p6hTfpsQK1UBz",
  "key11": "351jA6DwvqGJnZU7X5VLHqpxQf1nWQC5wgKgXe22ecEhx5hGcwMAeGy1Gbxg6EhFq5PbyGWyf9HHE58fdSsB3tp4",
  "key12": "37WDnFh7fGc4LDa6RQTnvVUoBvoeyNiKMFH3N58e8czAnxZhxCX2QS45BTXUXg2AzVYbLpE8cvBkT4SUF7RVwGyk",
  "key13": "39B24qrZPmp7Mhbn1HJwmZ6G1CQRxt4L5m8FPRxoKaAKRACueNrfTbtoURhu6AxopUB9uiZjCjVwkR37DW94nhji",
  "key14": "5kTzxa12RwcMromQVHBJXbToQBAxw2uf9CnTrcMrESieKvNExvdtRKJhPGpAo5q3nQYTGrpiYh2pisRfGWzdUT7c",
  "key15": "5p4CwNQpV5omHF2C53KcShnQ6X71U2GANMxRqmqgMDZhHB8wAakStP2LoccW8SRs2zPbeNNWXpdyJU1QK3D1rPYr",
  "key16": "w9SyCjM9JuAzncMbpSqijz8cRpVi63Pzsa9ge8zPmh4fdqq2beDjU1NiPmpforo5gGt82JEdapjWNq5C3JN6Hh3",
  "key17": "nAd4NsdoChWpBp8p4M5jqDvhByuww1xzWsKe9Csow8deui9W7TeLGZaPLmYVDex3ov5jk1xhRGFKkMZzUWswE1B",
  "key18": "cS2n1d9rt4ne6njriSsXEyZD8zTbHitH8H48bKhY6o336AbCDyKWUCpNfzK5sir91cJhu1ZfKw9jZEi8wt7nBDr",
  "key19": "5sRmhFmkvTybfUxTjgprQ4YnJLDWZBULHfWuddHz9DZNyt8eeJ35n5tBKWM9vXU8xVy3qbWioLgHyNs4pq8rjQC",
  "key20": "zMdXKexfVrfqD5rbDJCqtF3cTAv68GpDpeT5BbkBeJGXDHJvbJHaYqGuXgXuEKg6uEKu3meHn2aBTDUH2484sn6",
  "key21": "pgNfSsrQTeKkYY1AeQVcXbPGJYBy5m5WqsRASmNHZqdaCfD7YCTKAB5unYEemSFS5JBKZjhmFvT32AiKjTXvEHc",
  "key22": "2guA1mMhpN54YNddWbyrJWTRLQAUCSZ61oLbSEqUFRtgof5Fv7WawURdv8T4dot3E47yJeqUy5PCJjX5ybKjpFCC",
  "key23": "AwKn65do3UtgJ5JyC8LSDxJMz6GyB1iJ8Sh9pMxCrowAEjqirbnz559eyFMurdCGD342Doziyz2LhMXsUGYsBQr",
  "key24": "2uvgzgJef79w2m9yBmm4c9GSNpRLMsd4MV3PeHVr1mquy1tDdZBbamNUFdqBEkANYF2kaB2DSrLsqqZSqaK1VJ4f",
  "key25": "2JufFz81ZnTMQb46ySGobJMZux5VfQbpZUvQWLLRoQq2WHVCdCPgqLKEqyaaBAZfBN7EYxrqNX2w8hsv7Ys7LbwD",
  "key26": "kGUDVH9PrKqw1TBC5g3Qkb8YQFTcHawVT4mFf7tn6VvcA5w7oUhiAHQXTQAzCuSTddJd8Azy7TTNTnQT1eHNgeT",
  "key27": "62Lu46FuyaD9MhBsSPtMZyZpK1dtui2jvArUuSGLtC2eBoeQLW2UT1hhTQWY1ni4L92Y1z8hEQGPaznG7tt2yWZ2",
  "key28": "Y6uidLED3BC4TckCCai1WhBGYoUdGP7DzX8ApQTvkmfsG9zdX872Hgi2Y6N3KAeEgFKXYica9Ft9GRUMNb6qmyp",
  "key29": "5DYhsMLNrA8s7gnFV82qxbCk35YD2xqReGHcHP8rwRuTvzXtmGNAL55gTVT2p5tRB3VxaoJMg5C3x9KMyt353xrd",
  "key30": "4JuKkxRg27mbj2xB1VeLzBf6SYYy8YVuqg6w7oTe7QGfaKR4juhc1kRs73MdDqjKzsL9SAhwHsRKQJ673rrPie5V",
  "key31": "5htQJX3qRBfHW5qQDc1kZ3ePphYJeNGfvGYFUVCKduqbwUAbqR16CHAH78Lh9FTgFYaXuxZ8uVUVVLjPUL1ciMu6",
  "key32": "2KfwMEVYgo3tcyhMH4QaU3gHFQGcsrKgA3h5piTT9rSk7U9JnaaMcHGfpEM1Mrsv7NoKFYrxKB6wfgn3FaqcygPZ",
  "key33": "5VkdS82S3jrd3ogogJFKNuasYydwAqxHFNPeNgjCBzo1FyY5UuQR77McRq2E9YUcN8c3sgzSkHejkDrPc9uvvUSt",
  "key34": "5p5eERbMfqTK4JjyqhjLLBVbWb6K2Q8pCmUQSgoQF97fdVoTXE7REJy6srXwNrhCLcRyHCssfcmVYcQLS6YtXm5o",
  "key35": "4FPVQCzqUrfthxrdtsR8M1U3PSFNox2iLnBrX1gTkAdV8FvLDWzuHzUwJNDWDFbPwLYUfwKkVEdwb4BxUUcRnrDh",
  "key36": "3cs955jT9FA7w9SZurVPCVo16ttVT5mUMiC5KSjNYSiydTZhuLKemjLkJy41NGrKgFWkXgq7peLD9JdcotXVFVfL",
  "key37": "5aF8Lxsdqkq3LkdEfwVhTRcpRxWeNGAEdsQpPhyKqFbvBFYFVcjzoRhLe29wqbYLV1y7PRp7SDgw2UJAHdHxXmSw",
  "key38": "5kxCKhSjGjEd4A6qVQ8eKDsMBQGEZpha4oPuW2mfX9oXmiq7jpX3E4MYU9b6dDyKnLXwMJwy6Jo4LkBVetEUpye6",
  "key39": "4TxiWiR4yZw84jHYxoV1L39dE3gEupwpY464B1eui1WQyAVvDGAweMjkKzthihGpa3VFBLYzmFi7JPoB3tb4Su5L",
  "key40": "2Dq3Yk1BLa7E9gvYScLyMEY5M8CZziJ5AkYgK4WoX1yNMFwd6jjQBr9Kk8BFCMetyMTJwMqCPkY5TQCGk3iYT9B5",
  "key41": "5VW1cDNj3aPWcuHuzhfuNX1apNQ6x4774XaKfr6k88s7Khf62exCbPHTVDuUK9FQgjZUdjeYpnLuo7gftCCf3wJG",
  "key42": "4XkCGnBQqNSBJYEJW37RNaymHmkdu2CA4kuBzkKyRC1PZH71GxfSfG2aGF2xNSZNxs36AFQpxm7vybWguco9nKdW",
  "key43": "3TMNfHfhbMoaMYRVJgBBi5ERt5gVjQHovfe4v145FGfMSiRSCDsMoyWKHUG2kqLjamjv3G2E3LvXAgJioQa8BjEo"
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
