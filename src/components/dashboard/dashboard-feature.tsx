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
    "3o45XWe1xNGW4oHSvG1zhXGuhJzxkZTVYxHzqa3e7vUJhPS5yiQMtxZxaxgiJqYPm9MBShYVMqBRPzojfuMTSLQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bjdN7rWHRxGw7Q86yGHK6QN4HLBjkZsSEFrjyaebPJBMbMi9qfDVT6jReeZjCjeGH2AAN7GA9uDtEx4mWSZ4tZY",
  "key1": "62Pi1X7w1FapwWepfiKZQJ3pBSoksgkB9fobuq6GXfpidKp7Rou4ZYiokSGGL5ZzM5Qh5KWC7LTjEZAKzKTAM36b",
  "key2": "3YafDdJd9wtP3AMtQ12upgaicMPSsL4KdtjBZGbbqoV4wbd23nDZrZ7ZNdTBWtaKPdhF1gqiRjWDAhwU1arfSgwL",
  "key3": "bVb5mRQdNxesh3UAvEhsU1rKsYR7zaH7GxrKsAh45MD1ofqbtYqTeQptKMWXqfbTd5obPcpswAu6yAPkyhaee4H",
  "key4": "3k8tfiFhE6pg8i48wR6iDx7xzj3BAbahV76tYUZyWUC2TwM1Ws2WqQr8gaaF1zGF33n2QYu2VxR3eEn5YP2ReWDJ",
  "key5": "5vVZJYbSDxwPGdMyBB4ZiMbdyEWuqPJG8SoZmHQphM5WTQP2SxzfZ2GySWNgExCYRBjEzsUjiybqiwJaFQya21vt",
  "key6": "2vLFpWcKcCuWXSkrVt2HNkSHPBVy45uByy6Jg4Sv8F9qYE6yrzpxLZAvP64bm2kX5ZVoCEG3QhJ7dcdsDTd25auK",
  "key7": "3jS8KPEgFcSLX6ESerZqgWmm7g8gsx2V7XL3wk3Zt42EATeNo3vwG6hGg3vSrb3K7SjAryi7W51L21hwwHtbbfeS",
  "key8": "4v1aVXt46MitJHkPJq5frKqKeYy4EoBLtvg3h3YDvgPtZ33SVGKTVxJK3tYYxX6hftuSTKZtyf31PLVgCdgZeaXU",
  "key9": "2xZ5VHfR4RGChrHgvfAcswPqzdzf1Wn8Qyrnu4ZauzMSaJ86DzkzsfVFWxvTARSf386QvXJtM3ihKJenuWtpAX81",
  "key10": "5yjVP11VPA9pgukKAShFSkZbCfamv8Y1pKYadtNbst5T1UWgBZ5nvEu4oWUc8Y43rw932sgAqz8ha4N5qr61ekWj",
  "key11": "2KYtYQ3mAhKq6CZ9k2FkZiaDLS5Hd7FMaM3ECCTEJLAB8ax7UkDdy52LWENmpWajaUyYLp1JuGvBgS8MaQKhYhTw",
  "key12": "46moAFNmkDyht9UMZRcb7Gs3ZTAZrCkPQvfhDk3VjT29XYAzEy6gvBP7mf7haCt32mU2E47EMh13sgS5nUAxzRQY",
  "key13": "NSCLQaUJGd99hi7rKqLJSBbtVdShG64PJ57aYdHXEj26fVtdpjfy8LrRNtd93WvqFrVAWRtkcBWEaKsgLjzcvWA",
  "key14": "5FZtMHeZomVxGe1zKMVEJZvJWFaPWvCcKPtMA3HwC2Xt1pFFUwd1FThduZjVCRo8ysgGdc5sZG12SVQqHKwEWTJK",
  "key15": "heWRQqb2aCUc9YJrV1VV1D8UzRWrB7ZKK7iMBNqAcmUKdF4GLmHw1z8VWL1YJdXqMiAxuPpE7QJ4JFzZf58HHS7",
  "key16": "2DEZc7QqMneWKnVKgHwmEv55ezGUQNk4TK3sMwn5xY1v9u7yZkA6ETJU7KBGZj7hAavGr65d8hyMp1Vw3ZECfCxG",
  "key17": "2mbsDywHMcnCXMTbcz6azqhrmwCN3vrTyZkdkZ7tDq2fBWeqhBgTGYiwDTT1TFgXYue3ZpiR49RWx8MjneTnPNqA",
  "key18": "2Av7kGtzyPFe22UJs9JtN3bnCJXUsZKyys8QGmGLivifnzwZy9d9gLQ4qjwNHrDqpbXWWwB2qPEjLjnREk44kkPz",
  "key19": "5PGQagXkyuksg6vj11n8Ag1VFq6dF5WDcZpHRXeBHbdrdLySW8ezZwedsLbnwfpKthSYhyJptgbjVh1vfRy348Ya",
  "key20": "3VDkUtatHWUd9joNYgTBvcAiTjwK1uzh9k4EaBi22RkBTK3F2dragoS6KecxjvkLNZG7UayZjWVwmHWAZEsaSi5v",
  "key21": "5kqMzjvhe9ToKHy8v8dv6ULBDSY6zJzpL46zscAGNvLJBwaxKpuRDYL3maLjcWSqE1eo5migQACMHtnbZMabCqHQ",
  "key22": "2cBcFhESku6Q7pB1j17d3tTjNGf3881YDUtEwdhhKfGjQkow3PMoVSiDdJTr1XkUC8hmRn731tJFwLWRG3BPeVv3",
  "key23": "3d6q7nH1C5XUqMC3WXVm11PNJiv1SPaKbr9Ry5DbFJvsSE5PFFYbMkncDSG27qp2goveSPQPg7CiJatxJHYFVuyq",
  "key24": "ctZb9TBUL8dXfKPEnvXSP1W7HQAD5P54x5zJqaaLxR2pe1nEHBhhVLsXyicpS2kWugLD86kM75zBJWwtAJ27JUq",
  "key25": "55qRhfjbtmVTndS2FHfDYPCHyvSYXQbg6pSdfik2ffMJvF2ZaQWZtibmp7nYUh6PEoGjDAbMmSGnaeEKKzzRcKrx",
  "key26": "63X6C9x3zMdcfQXWySQYcgbBj5DhKGDhzDKzBZw5UiZaUNYxLbmtdhzTNNRu4jNvCJAbHUgLFBfui3SepoJe5AWG",
  "key27": "6661fHzvNPXwMbEF3BoyCM7i5yeQEb4kc6918fcgHE8C9x4ouW6FV67payq9S2pPaN5uznnJ9XcAhqEsynA4prrD",
  "key28": "2yCJkrK6hnSzjMJWjQ2qGPrYygHVTwsChnPxABJ4v23itB24C2PowKVTwfcZtwZpPWcGiV7TvUhkFZn79TcLGr1D"
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
