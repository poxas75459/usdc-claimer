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
    "2MRxHK8JYhUacjSt4fTunUXa55bT6MPNyRmh1rYAb3BZpRjWX4KKosVBvt1bU95tRrCNSB3ZJFBSp6mLrFfTDQxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKt3bmYD9rKmsBc81iHcFX25Qk15NXvxtV5MkmTci1Zd2L1CQroUmGSJ4Rar3V1Vn9MYgkG3NkJEPFxV72Nbk1b",
  "key1": "5orcPvbum5Jn8eVdfcCRzQDwbdN1tYSA3Sf91vMdzG2puMncAkELFgstB3yFYUj2tiTyFFtABsJn6wRF8k3YNamL",
  "key2": "3bgc1eecdCPF8DKViTSDc9bq7LFzjsH5sGRcoPE6VBj88AHEF3XhZ99Epe8R34E6LukiaBHaSa73ezvgPcPpfqHn",
  "key3": "5nZUpjxpHXyBrKnUz6iRxVFAxaBT2mc1BcKqqfNxAzmMcnhbsosKfXcgfxS9QYvURDybTAtA7iWLwZmVcM9RAgUD",
  "key4": "21jLgajEYFFXMr5bVk4jZRaku2LHUv7cNvdTSmBF8oLwfMcC99w1iDASPxKytCtAEqttLQYLhANrV6j5VyWy7U9T",
  "key5": "53J2YcaurAvioQNEGfJzwK1MPxkhFPWAgTEuMspc2oYKbHrdYQRttePAfYaHpSUdgfAggHVmqN9enyNF186VcMfw",
  "key6": "4uxbgcccNRM147KdvGoQKDYwugerb39vqVCFfUMhtieMc1gZMrNfa2fYiztJNUjBgsiZ1ELAKjM6VYbt55bkkdYM",
  "key7": "uQHCjzCGwWPMW79PDcy6ovXrwpnGGAmvoRwFAQaPLtp1h1QCwZ73AWvnLZ1eRXAu5ZDvHCEF1EPhmfzGa9Gsdju",
  "key8": "8MyPKGRNmUiVdtBiXZ8eMgHhNbz1qqzZqBHcUeSxvbuy8QodGtme1GfoXmqd855CqaRaKSikaLYfm2C5vLXKWCm",
  "key9": "34QXmjDU6iHX3zJU9f3f9Lfvgwi77PifuohYcgacFiX3Nk4Kv8L4ccVC4fow4u8umPj3K91bDo1uGWJduWJvGgAU",
  "key10": "UN78gUpsT33pXEinwYgsQyCJJeipka39nvqWcqkFz7BsRm7XuzxJNHSJS6uuLCQaaw1TEdUHfZQC6w3PHnE6Rfe",
  "key11": "GX7fnHXxRPq2XuhU29kFPAXmWuoSRFp3sM4oE2dJb4TakzR3AwxMc2WvZp2dZMmhHXRepXqnNnQv4d9S2UME646",
  "key12": "4BAip2ZryfnUYUgP9BRwSo1dMPFM5H35kj4ZayqdA1PqbJKiK3oYNjjTDEnt9pffaZkpc4WeDLV5TdSqKWEeovPt",
  "key13": "idD7pn3w4HHHNoytg3UxgJwfdH9nSyVDKYoFh3rkWK1WwNRrRo9NU979BpdfxaBg4wP6h8Z2YGBWaR4eQtfxBfA",
  "key14": "3qYeaxytSYZQH4gj6gucAwoVD45HvsmKE6Gcv9exCWhFNPSuXaeG21jWukMgBSwJzczsxaBneoohSx3cVQkh7kwj",
  "key15": "upqp1sJ2bnae2WQevfY9cRp1BEtp5dk5CpZvmd7JjSncZNJbCxG6t6wUfcKFLkfjrMk7LjqMSxoA39dKuj8ioKq",
  "key16": "2pncVURQma4cFKfh2fFqF4d7p7qyKA8f6hAba4DszQAgMsAHFLVqpVMSQurBqGMUaGBxt4xjXMDrnAxdAc7o2ccF",
  "key17": "4eD9LgZYU4oCVfzhRa6F4WREM53qe25i8vM7zWsbdGD7HkkKmTe9ZznELkiFKktFPwAVKeAJNTTVveL8hawfB9qR",
  "key18": "2vjVeMV6eKyQGRvuUw4pcMo3auNPusim1mHPwR2uD9rXm74DZhM9Lnatge4XYQ7Qr7KMHs4ByfCxE4CPtFFyZbvm",
  "key19": "3BGM3SoZrLzHmxbzeKjfGgAAccC8XNpfFmEesVeoqAZghfbKeLSiMS3temNnJk44fgdwvrAXB1hYYNFh9tsayq7F",
  "key20": "4zurjtJ5nPRufgFQeFLgRkzp2KwBpKwzpnTCt1JjEgvH6dfxHB7Q4yzQ2fzPCTEaWkRCE65uM6zmGDL8RNK7KwjQ",
  "key21": "5TDp38ejhk9RVJL3RgQU6kPqodZcph7qWw2DY32re61gugVKAwpX9hed9dgqdMRV93FN1fK8XBkzaydL4W2umB99",
  "key22": "5nBw8pJEeMAL1pUDS16WnsS3WR2hGsrhA5kJCt98LRsAkrJSUTLQWamKMfLoMtgdgcqxiU9J8RhtAviQKEy6Uw5F",
  "key23": "5WTWYaiJbBcDvEVG6ib1RSHhKYmrnQrKnqxyBJb61DyV5YyZssfQUJfB7SjqjEan6hxCR4f81C5coYVfb92pZT2X",
  "key24": "4taZyXej4jrwXPra3DU3tBmDuK71BGVXKwVxYEHP3xHVBxFez6CCWtJgjsjAi6qCySqtNtHb5E9aN581tabW553M",
  "key25": "mQweLTk8Ar19v18QnBy9zMTYU1fcpwCHksL89UUQNGo1PD9maFPTYfMueRQSaLp77pCeoYZ6p2QDKgU7qANvivR",
  "key26": "64r7GH1hHHczgtQATbxtN2ATkCmwFhkabkHpdBj9kKCLbBqAQcCatJZAEZeWchKiWXx8pSMJZA2cDNoobfncnTEt",
  "key27": "5QTLbGTzoQgcZzFUxDDgLujP7zaW6U7mBwGcVfLELbGgvLtBWydWyMEpHFGWhsEymCGrfqNddgbxxUq7mbjPStEJ",
  "key28": "GNVAVciXxmr2d4cX3BujE2XpjfeqitbHydA5FiVC2guMd5WySWUnXRepga5TurMHAgQCka8xXGgxZWFi64mQBV1",
  "key29": "3xNtd2UPLFrTQPBuEitUX8ASMsY1G57r6dfD4yFXVNbvspsb4jZ2GtxCpygtD5hTZwj6CJfbyZkaw2pahMk24NHR",
  "key30": "5e2w196DzgQtmm6YjtWvH1pUem1YWmrGDgfzh2JPXYYYg7QDCns2SoQgqGBe2PndhAxzPoFXzEv894kJeFcjBboV",
  "key31": "cxKcFFq1UYJXMV6VM5a7Qw5H8jw5ziewVedX8VstesEvLZgPQPAhhVBvDTWxtzAvZPeLMzkbA8zBj9E9C4a5hRW",
  "key32": "5nrqEqezRB1dW21BS6abHzzeRQNkXPfeaXTvLXPse9AVbzZo6R6dtafGm9t3uSkMnNjSyzrviZa9yxuhWVQUgpYf",
  "key33": "4VdUSgNiYeRSRQC6cLbHYX1wVZuuzfWgzeWCqoQVjmPNwEue1MiSkcV5F4hGPVn6hHrierbQDWWqjKN6BUppWBND",
  "key34": "5wSCJum6TSuTt1icNdkcymt2JNmj3VSbFqNz4jo94snq2WcL4MdPFNxRpMWaEwACC8AiwdRzHgLjF4dG96dakCWR",
  "key35": "XyRfZkn1pvdNYsVXPYYXzfw98hM5aQtNi85oKPiDcai4PH7XYVB3TngbfTX5P3QEWiHhuDq6UEHCHgRHioq9uSv",
  "key36": "4ES8mEssXsTwZ1eLQAV3nAMVZUqrAB2NAWkTATtsT8X9KMA3zVfmF3nuu6qSNqiUvaXJwhMzXENhcsfzhFK2cReJ",
  "key37": "xNzPdzZk5jGyAoeAW6QMSYy4fdQyk8RkR5dc3GhWaKuK8y1bcdANJsmD1FJk9pp4rWebrAVkmHP1jAuUfyFYnJq",
  "key38": "5iDC5tskbSS9DxnEqbb754RoLaifN726wJir6RRo8e2ZdWA62HZpcDf3tWCDRVSLzdUCH3BTYUKm2UJ2nsfdm4au",
  "key39": "4YVEWqtdpV4ouJWxfmj5RBtmqEdvgJwG2o3y3tjYYd53h3ZQNyjuv87cQCHwLqFqcdMfCn983uWdJohr43CnV82r",
  "key40": "2cEV7Yj1mThNp6icAxgHpbmmCnaJoVxW3hozDot7H6mgBDjPXDsppYuA8H4YjyqswQCoEmYcTCzFJ61PMsaBZXkt",
  "key41": "3xLKcoWGDLeTqb1tWqGzzvTi9UH3JyrrdmywYG93QZJbhDz3y51DrvPRwg469o1bs84CRQq9wEmuVXvcH45zC1WC",
  "key42": "3MZHiBGuH8fi61Kv2Jm9KrmQN6kSE64B5ZnuWYvuUVe2dQkMaiWLr9uua9b8gGmEscY8ox3zmt1nF95XpXRJ7Cod"
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
