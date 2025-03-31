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
    "ffvAxh1VoEXtcyrLudq1d4YMfdNii2ausSfjMC1ka41UnmfH2skoToLfipar9SMa3UiBYHzbLhjs7RYYQDSmLAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3QzpcVBuwLk2HwKjoiyvimu6tke23MHiTgLQEznkRw6SfPSkkJcAUCCz3dZ5RzyraCQ6evK74h5owD3jCSTpNW",
  "key1": "5iP3V6Sb4vz2AtVmTCt7GpTX1KDbhkqK7SwjLpYoVHCReW9AeE42NsuD47XDqdUYeveS83Hz4BgiwUoYBf9LhDDk",
  "key2": "2GwMYKzSiAM131wVfodDcgB8KuuJUWqV2S44tC5ze3qJYZyroJyJ8eD2ACbuUCrzwmRCfpDaCTFG8rFGk4X4Kfsc",
  "key3": "646FhErXCjKrzweav5auDWP9z3kEfrH3HmD2vjRM5kQhsCU1qCoYZ6FiEXZvffEuTuTQLRA1SsFSFMypvFCCXenk",
  "key4": "4ibjCDPjUCsnTJKrz1YH2FHXYgE352cXZENjidx2Sxb7SBVZxqYKjCiaHT9SGQviuHNTTe58jvYHzjx4rRnazvMU",
  "key5": "4uyLoyCwU1EE9JCPi4y473q47NF86QTFCSGffyyvtC9sQ8kYsrDW84av1D91r8r11Yxrs3c9F1Axo5SKMaSuvA6z",
  "key6": "2cfNhFau7dgSDZFVhK2ZKqoK2kvvay71Xsxk1FmGPaFUNmFZm5kJi6Ebd6PcUdkm4ZATC3cDkEHveUsgrmz3q6VV",
  "key7": "4iDiTK6L4Pz14wJntTMRVxL7DUe4QXWsCB6K1K28zfijXbx7jYP5U3a8NuidqFQtgeKim3EXDMuCC4p17cs4rDd8",
  "key8": "5c9DHJXm8rPJTCfEJdAmMANjuZsUV5g7KBuSk5Nys1UmTtHhbhbyC3w8D1YiGifxFBDxdUkJKmg9rXykLLZ1rTy6",
  "key9": "2MBeEYg7HKnjzn58pBxRPWKRodqqynVwa5XbEkQp9wryKNvgLz6Pyoe35Ct1k5YPBGdtJa2T9V3WAzx8MD1GYaj5",
  "key10": "5Z5FGJH1Dusj5Xk7dL4DoNd7zYpR7UhyT9QQzwQZdhvwrkhvzE8nUpjDuH4PX2Q1XinH9Ya2LCE3WQCUbmFDgWAP",
  "key11": "3wrcWJw6fDa928oZiMCCGKRoYwFo9Qk26Ac7C1toXVLxAgTfjh5cnHeNALnEcajQh95LMCXPt6mNpjvYmcEZB5rp",
  "key12": "4oofwwEXZwiGT6PfLwUyhuMVtnk86x2j29D9H7jQTaSywPp6o1jET7sty5ykQzKrnNaKTA8pLnrFQU1WotMdQDu3",
  "key13": "5rmHwgANhgV45thkudx2zqyDcVuHCvni1bNTdhw2y6wYYTEyJVwtmfwZCqFwAMouUGdb6BBYNWPLVDyMVRUBJvKH",
  "key14": "41ikKf7MHui64KBamDGY721RkjHSN2vaDnnpXpmyNVDHkaAv1ZudDYuCQXaWmVeV7LaKxBCTV7cnrmDTQs8cvCBR",
  "key15": "mXzMJJBh69AJtWhheorumh5VErAc8xfnrZG1qWHSdD52R8bf5Zee2cenEq6koZGvR1XU2aBue6MtjX4NNAVHWsN",
  "key16": "2cg3TwyZnbYTtBXU3W9PXCKT5nPrjf2atJfaGfE4f1xBYdx9re535HizDz6yuymgLQ5C1a8u37w2SZXQsP2anaVJ",
  "key17": "23aJQuYgmxxQpp4sa8ubkM8Tbr9oyrrnLJErqKMFVWs1Gb9csAcncM1epQbjGd2syjxtwsgYvi1sBhFTcPWvn3ep",
  "key18": "3gAWr38fUf5DMNcvLaJkc6WMoP1ojS1Lzn6BJat2SGeYWETFSkQ6QppXs27TD9mqbQVqiEpBDJPrHkwcaNJdKpZr",
  "key19": "4rBrZAtyGBw2HBbmvVKa7TLEJvGCE5N2VoJ1wPVaE8UfH4MNGQdmP78yZMT6e1wAwTsrjtTNEAHBHwg4YD82nMyx",
  "key20": "3N8SsFtMf2uQbuo1sCzoDxN1weTPqvzM7HedN1SKG6tXyFJxpoTrVfYQKTPpkwt9FzV7eYDCpvYFbQ8e55DVVtVg",
  "key21": "61gksZNhrfzpiun3LsXi2PpqHHJc22YSdfG9bsonX7YUzPF2W6Xk6Vq3thAM3qJV87tcyirdMtBrYPDVLRBZXSBW",
  "key22": "5bCg3ZjRDxxhuE6aLJ9x1CkAARpGttMHCV5ELbCkmxmVziPSzk3uwc1p8ob8gxC5fvVBJM47XTxdqfwG7iYr2nHX",
  "key23": "4oSeSSuFP2zP6fHYGsNKnY3qWqkEeMELvfjXsXUpV9nT5EKMPi5dfva1oD1LLNWmRbX1CDCUA32yqBL3thffRBmt",
  "key24": "G3wwRFvUg6bGh1gjakqFd2BYNFmy3fp6GfH2dW11TPscguXtcwnNJftHkmfnW2mY1p7gtYyn4hA1q3nwVbRxjN8",
  "key25": "48uZKsM2qBmKazCz2Fsb2qdWrppbKDC31wSR2ueUEFanCdkTjnx54ShyXD3m6EnQFAtQBUtDZSmbRvsXiPqfmiXe",
  "key26": "5iRYovABsRwY7Y8zAuoSVWuK8nupxbccnWrRpnLfKcTqQiX4GYgKvLX9ufdm5SUeW7A76Xdbkhk6tAQDFJbEaUAf",
  "key27": "23Cc6DtHqnt1qbnUnXCP7Jj87irdKQpCpUvwdjFYuVTGp9Zn3vL6skjeF4ss52LjixqYxstj93MbZiJa9dJ9kaoj",
  "key28": "35BkhRdj3BJtX57z7sdXjZ2AXnHVhxkF5XvZ9D9WoZVDFvy5npJa6zBrXgJnqFofNdVLTLXPjgdimVBt8dSDYNdu",
  "key29": "4nCnpaYHqpBCVHBP1Xycv8QtxvhWySMcyToqq4wAgndSWBUqj64RNGUdpWqwt1FkSaJBGhq3X2hHsWjFRANsc7q9",
  "key30": "3DYopdpTnpKQRXVvMPV5HZUMCCrfXq4xoXtkUvo7ncexoT2Nxy83hmXgJ8KMGnApc5WxKaPiDorXxH2DdeVncNwh",
  "key31": "24UXCGgyTG1U5bM3eEWj7Y3xHQtCpNZRGDCzY8PAJfMmDaie56dejigfc9J5sPCgfdShyGWv5N1W7HL7q5Kx5W9m",
  "key32": "34tuRnhTUBRFGpUyMMNgeeZkC1oi1jJTDnoFeyEzyRczt6Ji93xZBCeUvtN2LQd1GerytUVqoTfcLYzf2PGNNfGq",
  "key33": "2j3H5MdvnN3GooQZ74nL8oDkS55zXsjJMbXTXb9gNy4TqGbK7Y6n17SRgxVKC5gygiEcfPcqJXsNvHUBXQyZmcmV",
  "key34": "pEoVoJUwRZHrLFK1hQ2kGuin8cKwGMtABV1ebW5ynmSULgDPdVDtarPKbPPoDD4GXANqQ5ynAp7EpaKZREcKztG",
  "key35": "41rCtYwAseSLVihCkfzusKG3euYJxckRqs3RwMb8AQR7RvgQiCfL954zigvtgvbksxgM1seukstjTLSkB5CaimVB",
  "key36": "46kRaMR3E7p2hBysMX58Zx6cYAa3ZwZipMrPPXXuVGVaGxrsT6pGswpu6xvS8Kiz88GEE2yT7q5CeWjCab8Sj71T",
  "key37": "2j1N5vwYYCMLFouD728kmUSbAcKj9DdM9KyKHYg5z3LCP69mASt9cL6U8ovoSmc3DQy5ibwxqFrw5f4shiL2r7Er",
  "key38": "2H3W3HS3DqYswaqLjhvps2B4eLn6kyMBDwa8eaWfHbgvYPjJLTLQrdZ4vDt1dtKxwagqt3Uwe6yrhTx9XFMs21S",
  "key39": "2USY4xzjqn6Vx7zsQTA4cBUJEDf2seQnpz8bdtGWvso3zi2eY9S8CjXsQpPH5v4KuVwhbr25zEKXAezA7tgcmcst",
  "key40": "37De8dsdzfxGeK1Jnz9JtTJcTBRHbP4RQGV5ECDKan5jx3drzkLYFbLYnW1sYoMf1TLW1JXahn1Kn2DUVVTzoBqs",
  "key41": "2nE9nmZoAcNTJ6WyqNDrM59faUxPGYULCLT2kPdkohzit3EwaFLJA1Y2vJk62Q2r8HL27UUXcEyXWWxwmgEpKu2B",
  "key42": "2YNrpNWs5LABbY7J5mhkcdVuXzdZcXky7XoeXe6Q2bXUyuEgZWm71bhk7GYnifta5uFtb7dgvot1x1YLzk6ekMZo",
  "key43": "4dH9fYp8c3CW7mL5qibdSqwhC7tSPf167BKYb5Rr5bogzJWeJ9bK3eC3QS9xqCqwG9qSAnaY1qmzAsfkEiyC5QLx",
  "key44": "4RzNL5U47x72PMsCwBzbtADE7XUw4PsXAKuhN6mHwWQEbYFUNHJjfosRCRzTp94BPzBas9BH3mkHfiT9YfqV1nyr",
  "key45": "FoXp7e1Xr8jYWbxKSb7eqdwuvniEeJzWvE1K9vX55Vn3RHY21pqCGu3FGWyBVLX2abWeer3CyFiXpsHLPtxcBUE",
  "key46": "MjgmwENU1E7cMjtVeBPGeFo7HvWW77kRvVeuXhzjotBAj6HdFDY3SEpdNkeAF3ovfCBMUrpyBZXwMb6VXwMwHpt",
  "key47": "32oLVkGwoVvvWj22fV2rjoneAtW9RNyEuHeWrEuc6sLSWfYv4vtoYzXc5FFCx8Z6v5RjnJrcMCrcp8HYiqovdyWn",
  "key48": "27CeqdMAfKkchMVUaAbw3TWEMGq8vrVQo35vrPmB732k5KAqGyVgASCWkBVCnkugYUdjuhmbubTaKKcwh3dCTdBa",
  "key49": "Py9pkhiK66STMcLTddYQ5WmbPhb5XgzBVqkuWDeX3ZpJ4Bv5XJDyg3fWR8HoP7uqMSENFKFZzDkq1XYp4UMv9hH"
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
