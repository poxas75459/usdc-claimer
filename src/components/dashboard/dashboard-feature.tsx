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
    "BZQa9tZLtvXdXWgzZDjeTcQ3tmXLFVZsdYfMnp3gnXXTgnNMd4yCceRaz4TRqxacFPSTdsbs5obQ3HCnoQfeiv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7BEnzHn4cZTAX8bwxRgmmqPBrUFXBqb5gqv8y1zg97JF9gcKVYczL8GmTVjsJsgPCRdAg7661WctGGZLy9yD3T",
  "key1": "64ogRhuTBqEVth94srtY5CcUcN2xwsYK6MNSUNKS331jBc8oauy1AUvDhpSscYiPYJ7PDxnFHzVCTmcGWbtyvWz1",
  "key2": "4B4cQb9eEGc9Ka5qQseA9ZPcuePyH5aFYxvu4xU4GRLDQjXERY9buaVrppdoH35Lh7zKu4Hu1tEp4FbHsbkSRF31",
  "key3": "3Pe41vT9FzqT3nd5aSi9J4YmTjxMiL1wLdX9CcMUFD8PS3nekvnieZvxXvDi5C24GBgyh2XJ4f6cCdWZL1JwutMm",
  "key4": "2HjJiabGcrosHhhG9aVW7vsUiSoyUsQPQS3gt6kbVjFqPuWumS2KfDioBJ9j5gUVsiRZH3LypuifoLo4rUwNx3Ez",
  "key5": "2jmrUpsCskaFwr7gV882Kit48XWrLqSjS4f2zoEoLkjiPj3RQibKmU7TCjr2Ur6dR3saoCyqgZdN91C34rw83nFN",
  "key6": "3Fiiu9xJ6fDmDHtt1aTmARJC6PFARuTGNtikVfgUWCRwLCjBYzq2KudHqahCcNxnmQRWDssw21BLwcyuRkT9WbHE",
  "key7": "3t5KsrTYHQoLc7wvkS3X5RkiohTSd8R65XkqMqjeFmUWxG4XSEduPaTN7S8KgLtpAa6HbCRt1w66iKyE9MnLbBQg",
  "key8": "YKVgnHMxcLcVHeyYVF8jyB8HLEX83jcwTZMHrWvm3ppRsXxXksWV5oxVkTaUw2cBgfTo11e1qvHwvheHU8r8ZNT",
  "key9": "2z25bFh1P4dNN1xym69TCbQ4tnN8BbEF9ZRXcioJ58NQj556pFYmmP7NRWvTAiLzeUGc8DCVpzomCVKTjXRtNqBH",
  "key10": "2byiap9VYgaAmy89jYQJgVvg2fM33jGWkrKAJNF8RoRGxh5RWumoFrBNeD9ngyNSVvX7rt9Txqnh2VCDfvCnMpuo",
  "key11": "5xn6unMKLe5fuPKrPNLwn68tiZ7y2HeTohQNUnfg9uhvsC4caWzmtc5eYxdfvz2dFdMEB7fLt1xsXFJDK9dWPzW6",
  "key12": "3ZgPZPk2XZwxXWqQ7N1HUkpmYiCoFXSeaFr1h9gGeRrCDWbdtkhHW9i5uM52AiE7AHgWk3cgqmq9HddrU3SfTCym",
  "key13": "Z34WX8WQ61No3ahQppBag3G9sUBCrZAEP15G9GLknnC8uSkVqif3Dq2rF5brMY4FyM4qp4SgucdxDLb2rD4csDz",
  "key14": "3HM5VNMVs62gxtZ339ZLB1mh6poGuFaFvvGRTNqgKiC5QWzmWniSt3AjZdLpc3heNAci7Ycbbxk3F4zd9VVJ9hFi",
  "key15": "5ASyoWgauiWLy6vcKtTdkwCWMKLh5STfCwh4nGCsqqWuKXMyyQGMN2nsuGZWoKPwqH1832prS8enbLPSSDRjgyKf",
  "key16": "5U1WYVEKNLYqR4BEYrCjGzPqmQrKNx6FnoJZbHqAfvx8wUeuJxfio5i97XXoZVnxLjnL3JyPXJ5RyCFRxVTakDdb",
  "key17": "2M7mBQVfBj8LZBJAQHCf74g53BDtb6To3acTcrbhimUykhzobKHwgynPjdhmciYgdzHuSE1CmAvySxhRAMbohiNi",
  "key18": "3DAfTfLrET2znpjSXNARm9XVkTGpMKEamTjk532PvyU6WqwPxcXFVbjkPMawR5uUzUW7RNjSdQ9pcubatWP6TZ5K",
  "key19": "5UjH36dq23ff8AonkvsZLZhRiZJQDt6MSmPnHQdi9DWnJX14NANKrXrPACb56qQyxj7Bb4V5thVpeqnTsMdCosgz",
  "key20": "5rXZA7G4cS1fCciRFkxnL6FuNUwsugk3ChBC9ZzEXWMTyAknUy8QAa7achqHRzjm8GA1Vih8FPR4eVgZ1CukGoPU",
  "key21": "557TgHiodb9CfZVdGJAeuVn936kp8eqe2AidTtENLMWm4XDNZAZapjKPWcsYoTMbWQ3eyTjxALdDtW7vckQcmdam",
  "key22": "BEnkMFP8pVN1sLbABeEGwRoRfbxCZFJQ4NJss9g2s2835Jxep8zgR1XQ4WJA3gPpBCNF1kQWsQuZzLgzPsUtsyi",
  "key23": "62K6MeSTqf8M6mp69aiaouptmqHPkKcge2v93ksmeoZFrrevFempNAKsA3VEabSGmmUBUasg6pSNg8BDxEWaVB2n",
  "key24": "5hFw7Tgu8cMk9ghyLvei5wzk8Lup2SZtcBXRjQDTxBAkwa84gY133Vfv83irxqPrnspxrNNXiT6eJaDe3KNByh21",
  "key25": "53418fFkgm5paZjRgbcStho4AwDxS6giaZatKgtQN2QbA3mu7RbYWeqXVAw8syLCA1UzaRphje35q5BPfpeCb2QV",
  "key26": "67R23CHY3fPbfeXHJdG9BP1e8D2HxNHPYS67DCrrpSf6nTSbcHRA4YJXyqbDvmgpJ1dAtehi1YCjWXUJ5Tfrgsrv",
  "key27": "3WLZSF9KQHd6grQocfMoe78aypgPg3HtKGNcv653xyEaNYeprLAvzAGVa74xdny1PuehmZVv82VqqbY7vmuP5A8m",
  "key28": "2BHDX6ZKDkiefExJSDC6RKeZmAc1e4NKw8kVhfGwi8e7DQa26eHnJLVHnN6Kt234ufeiMGSqgmsMhbtxBn9r4hSN",
  "key29": "3CVXh4ebWfDscnSuumdpacTccsKiGCwHzLFGjDWivLBof3RD2SJw7Gj1QfcSyoLKovF82hFrqVcN9jRtqWzgoBvT",
  "key30": "5pL6iHXDAdodGhogg1sNp93YCWKTvrcF5iUMoYY9nDd82ayHNWvL3MGsjnLcWfqPYu4MMmkUwjSYreQ3fyfwLV3h",
  "key31": "3vypE1oJCTExhS2MRPR7BzZpytVZHEA2hvgXnPV1Wmt9A6EEddw61rFYSNRowozAbra1tTJiDuc9NqsQjUr7g2xT",
  "key32": "5xfXuradSpLuQrKNJdjWgvaBnJgZggTjX5ua4XBdLQ7cqKPgJfBV1zJB5zdc5dWi5WfZSpsJRAmGd8aqZHGGUasB",
  "key33": "35CJ8HT8DHANtCBgCjj6JuswqbSuaz4zohWp8jX7jPCRKLTiTj6BVGPwJjGAooxvKDfNcCSZ8Jji5cj7J7zkFeUv",
  "key34": "5aRXh3UD1iGP2wG8UwxHjJoTKEJ8CCW4nZBYFWzw6p9cUoTU9h1YrZwGrSVZqXaxeqbUAfEB6bRubKwfBqcv4R77",
  "key35": "3Dh1m84vKq1AFjwmzx79JKUPmuVtnwVHuhKV1Wf4EQc9T8ezTp9B2wUN1n6BeBQPRda4p5Zi9UJ3zgWi3TRV15Hu",
  "key36": "4AEbU5ZW4AoN6TVrany851GaDRiqjQog4LigQEoxretsNTD9TJFzfENzXM9WFSyKSeiSJ1YoaiYgMScVA4bL5o5s",
  "key37": "3QyoDGH5aEL5Q2WrU7XupnwksAYzDQU5FBSeHx3VvWHcWmm4pJUPEcAAM4DtyZjfTv2gUKduuEwNfBjqoVt97wYw",
  "key38": "29BJhSWSfLMLtdxW8mU9uZuYyZb8wNEhu1UY65vb1qZcuzRRonxiRCZZSc3CgZBHvTC18a4Yig15zsydBwW5h3gE"
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
