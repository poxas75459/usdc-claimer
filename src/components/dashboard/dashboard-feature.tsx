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
    "5Qbr2remDTttd11xFbfccS7vM7BUHrvgaCK9uymPz5Lgzs4mjFcUA1V418ezZyWfama6Yzok2kg9oXHhwAbJoCAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCoj9HsLPgdsuFGW26FEgtFdi9Z4MkaaiPDKUJumsMW33JG5wgxBm78eHEbaWZdBJKycGisyGGuXjzph4U5VWRK",
  "key1": "WqWoM1EMJAtqm5zdmJ9uFjzEZyASwLqUcsKYUJ3M7sBuNMpkV1b1gzqXDCxhm1RxDsgBPQACnX931y4s28S7aFQ",
  "key2": "MzyYok4CB263skFFmzuFhWpKbWMinhhEuu1Modag8d3iNpwC2TiuYfWZy7ocYFp31T2cUeaCHPzaSUvYu4YScLt",
  "key3": "4ZVRDmHB9LCTHUtWxVc6QbfKzVnp8qkQXDECspfddkiDQCPM2dn7t66Y4HF81AoNp326X3FKhn6Pdyu9tciDUtM8",
  "key4": "4t4C1Ehu8eKCHkUFtXgvv69NwfL25NpffMP8frezexcWthP6b9c75EVSfizQ12JrUhotmq7HZ8Vh5JU3pxaZFDee",
  "key5": "sHwjqP39onfaTpM7LLXcgpf65WFdf1eTPu8n7YU1kZGyujKw2akVC31ZZd9TEDaVGYxV8emF73kvH9vY8NLVPuV",
  "key6": "eXS9SKMk1gq8ewz7vDBLodpjHxfWbJPgGP5us1N9NDG3bQksxQvQPSgfehGXmwuXwJSpHhgvXUZDY5xb38v8Pet",
  "key7": "ZHV6qy8bnkcEE8ieJj8SH9d4Yfqgy8XtT4jz3gwvAHXHVi4KQ3YGvXR9cPXDBLA39czCXdSmUNjksWJ84WGk9g2",
  "key8": "4UZMeyCQ3S3zQpz8SAUFzK8mfbfaxaaXfZuRMScwcWhs9DqMWwDdYaQvr877hndwdW2EvmjodgScAt69HX5FeS1r",
  "key9": "452ZqqoDFTZogTReciNtk2oes1K5doGTx7CMppYbQ1NH4M5CGgbw7fF6TPDZtEtDnSnLNzk3Bp8iDV8r4wiW96j5",
  "key10": "2b7oYVbNaAai1YGGWBDo6CTYpadkHvkMn5h5St8qQ8YJgoaqQ7TgBGsA5uYEGBiw47PHuzBvoPngZtc6UY11Ff3z",
  "key11": "3gQgNrJRd9yPzxq3DPmUfSvXJ6bCPX4meC7aJmSZBh331Jojx57ywLmYmzZNy4qXbP9N8cg2Cd8soGyETfu4apPS",
  "key12": "57u31iGHT4n8z9qFdzz7rroVYBRidHsm7pb6pFBmgR5Gp4vgfuLwbDtY42cQ6VreD3rNysfkL6n4p5gFqF1ncRkD",
  "key13": "3v66a83rU2k5r2yXetoHZGLUVSoqVKfHY7wuwB27DWeCr47TEqMKBDKPhXVZRTVTsuNsbPAhBSohmZyxSJZsW2jK",
  "key14": "3qWoWuYnA1FMhub64KuqrpWdmVuBNK9RmmTThXYBmVsDPavxfXfoXnxyBtKH4KDygJEBbfG7y5j5ZKfN89HjeQoA",
  "key15": "qKdZ2dMannhrfLjxxkkApGgGtTJ651YTqaviTEqYivXZ4SbSXAx4xWzP9xBHBTX2g5PnM7dvrSMehq15K2TGxb7",
  "key16": "5YfQYT4GXNsc86ohWyx87g859yBAtWzjobUFzMrSdeY28sNGMaqmG2389JfFegN6FBv4DS938wSiLFSy2Av4j9XL",
  "key17": "CMFUjGELADnDUsZsQTrnE1YzpZMvcwmf3B4PqdmjCfbTfa14Sq1FX8dZ9cSL45fQ5gpcNsWxo7zES5TKdqbZwZq",
  "key18": "36FZH1foPHfwPH2MTxvqDoNwTzr53Gf8WsyEZpLZ32r6fd7SzTtDwi113C3V16xGVEE4WT5S3jcwRr5qTsF14gen",
  "key19": "PgcSAM6rihzxve4a9BobhH7WiioUYxQkN8tHaikq9Zvm98gUWa2J99y7k6hSggk4SDjSccWuMAGGCXw6i4pbY95",
  "key20": "5wTwtDPMnLrQ6ZdNbtyt3BUby3snNzQgxJw3uiJwXscpD1ArVx6yTtcPVJ9mVNQB88GKfXYSh1eRyGNG4XsApJZa",
  "key21": "3hEt8aML7DUSysWSKXSuaDeiAbciCSZuLp8BxGJgbZBehFDbmAGCuSxAGJ1t6gYFdsWYnsgzWdqm4eu2tGpzxgBw",
  "key22": "tUPv5mYLCKAnwJ1DUpB6XCnhdtVt1fAk4aLDY3eeHaF6coV2QTwPx5XurRmr42ZgKXEUbus77ADBZeUma4DaXQk",
  "key23": "4ompxtCEpkiwvU11v4vFimwzBrQXFpKNusinD7ZKcunQvgZ9PGn8MWNpM6huL7PHwH7K3AbzztGp24boXVaq9Y6G",
  "key24": "2BLF8bj6abw5amqm9aBMwrE9RTR4GgTHWHEretqQDToRZsYZFMKU2u8T5kQPrmg7L1wvKGHZRe4SxwXSX2oBjUrV",
  "key25": "3e66BZHd2uLrKvQ2ysjPisGCmZyuTDSYEDCcN4cnYF5f7NAp9MyDAxxZRXC9jdW9D1ZdmtYjfohWv4TbZBXrUptw",
  "key26": "5uAxCfqUTPEARwTjMmRfgRdf5TvtLVDxqjNs2PfMAyXnsLBKkARJg2tuxuchvZ8KQq52kGRDw79XuBbCPdFSV6kZ",
  "key27": "2LAQyFFqRiR2axZnK1svaZNz3EXcWTo9QAGc2qSRngdCPMJWxiLfL1v9QohrWqSEtJrrRz7JkvtGANzX4tQLratG",
  "key28": "3T5v72E6F1CNh1W2gryFzv4eW88MkcERCvGDBv57z3aVe86W1zbfkbh5zEjt6CHEsGtVRyqjMUUQmgtptqFxL2wK",
  "key29": "4t3fsD7GFGGSbiJd9nzcsyPjmxxTxnbBFctqBc41h3JPxHBwHfpW6XpydSy5vbr5AEHL6XyH87FAHyVnkLMzw7tc",
  "key30": "WQS4gCqaVm5kxsgXiJVsEkBn2fokwswu5MbeSy2d33YhXX2SGeak9KJFTGRc3qJMcdUhCUwJyocanRsM5EJkukZ",
  "key31": "4Vu4DFdFAJNjL4SYo9AJzc5BPChCXG2y1UN7DvrHw5s7gnVH5WUZBkLBpSzLB4PEATYgFuumbjesqfLQ4koLQMzL",
  "key32": "67qvFNYbmEynTvSCDyGMQsdZVfpxQv7XRhrsyLw6Xiq7NCZJRaeeVTVK4MLnYtdALEvyxRg31kP8yYfMszeSs8z2",
  "key33": "DNpyEhxKinc2yEJVKxHYThe46W2eWNHjbWJs9t1verMMrV3SXmt9nTTZZJEyGMkEawjWoTJLbR3HEyuhNzC4J2X",
  "key34": "4Gn7L5kBKwPczeoz6XGoAEZ5FVaMvoqyjQkPgyUeSEDegLEBHXKQAxLctaoGLBF3rzzyvhtqELVxiuamRa3aozwa",
  "key35": "4GYSVSYNuB4ygX5nWpiqPtFnt8NMmXAKev9CYgCRGfytAXP3bH9ouHiWRLZRpeun4Lpn6rSWE7xJEBYzoMQU86y6",
  "key36": "3ckEsGXb7Dudkyecp9Y21Aeak5JZ5rgTA5yaRm4NX3idVopmdKhJyZwymJrH6PqiQRUyKjrBUbidxgjV6YUZQDpp",
  "key37": "27PRFGcCaN9HVjuVKTkoXrmpu6toLD8tQoTs3VtmStjQRMUT6kLXZ8BwzbadAE6amPVFbyxbK8GWRsCdQ2hHzB6f",
  "key38": "3RvfgPeH4G2jreVvNFh4ZhQ1qEj19shUZ7VrJZcKoFk5MGKpc1i1TqyrDBbyehWqSnsESKt71j7gjARYUycC5nwa",
  "key39": "4mNHKz8Y8XWTEZYvH1zZRgJ21VBZ21aGixBEfkJ4nUqtAMLaKm49t91vu3hbT19RpZKEBpWtav4qbBcSMoUdE5UQ",
  "key40": "jWUrhXFbNrNmYpFe4zFCm7gnMb7DFK62W7oZXzSZDUvsmxpveiKzZvyaNqy7dDwZXb815B7Y8Vahe5WQHmVYSVW",
  "key41": "5M2CbAAnKxkeupQt8hmnLWsCVEmzaZjfATvE8TYKXp1e8HaF8fbpNcAfBNDeN4ip6N5hpjRtUbtGJGsBwNMpjESc",
  "key42": "3xBe8U4Q93Wgmz7AoNbL6YFSNyZR8LngUEQ3xTd8LGjmfPjsTCjFak1wBVL9z3gcjE2v8MvtypAkXFbF6nHT8Mm9",
  "key43": "4Sc14ivXM3FttBzvTFbXvaBTjSy4oV3X9t3HTeNHESfhQb7kXKRPZz1VRoiQQbPMcHSPg48ZMWfD1Y88mjxVps3h",
  "key44": "4ER91M9H6BcWqpZrg1vLrX7fBqy7uqbo7LvaQc8peC2EisrJTkGUqHPiaKCJ3A8FF6nC5BjY7QeGirRC8PsmjJzK"
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
