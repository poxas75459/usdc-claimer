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
    "3osKUoaNFontsYLgUUhewJZxzGxNezv77ki2y6Yc5F8KjpC2XU4KJHuxHrivTghdk3xyXiNXMU8aysZmu3KWCuWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuzuvTmgrjedL5pt6pPZBwgdw9v5LoJbTXCbUCPXXMdjA5JGtc3XwLM2S2SwA4mxXoB75cK3Qdjgb8AGHUAgXzr",
  "key1": "2d3aqc5yBfEM2KocMjxTqGsYimx35rXNhSXYLeMRi5M3ZZELD7UUpLX3VkN5SQpU31fpwx921a1z3LxkEiPwXFpi",
  "key2": "4jKureuYdThcTkL787MMvGhXZNM3cidJ7cEQ98Kgs5zyWU7pLo4XH6wsza1h9eYqZJa8WJA8hiMjjBkbqw6sdNVi",
  "key3": "3mCZrBGrQtMy5FMvAHm7QiigBCG1VjoN1gAbweqzexfPfPCXqMTcEzn4Cs3KyL8iKR59FKbaL2sryWHLMPcGDAgP",
  "key4": "5uVA1vENcoqPvgG6pEUX78v8FWiP8bcShhonbrFcSx6cmCtUfbEuwzTpWakVmWWJUbxQqnLTQts8eoCzCnkUXVTe",
  "key5": "2p3NFJjjwQ1paALgXppTTqcwfr1XTLxF5G5SMnrACC72agTfGzB2A7TmB175Pyt3ZUNvRbXxcTvd1bj2NFKWQyxK",
  "key6": "3UgonL3KQSQ4WMfzLR9gQd1jgZdwhRnvNqhpQCgtWaTatFRBU7WmVg5tsrugK4jcJgAndpmn15VN6abR4zUPhwGN",
  "key7": "4SDy5gjfdcc5TwDMi1T7pFY1Srx7a3CauokhWXDf6DFbSdQYyEWiSLER1vhQMa5CGgzUKgbxBw3wHx5e2cx5Frbp",
  "key8": "2aLQhfX91qpjCNU8tx1EZiXvqWLHQ9EyQCL48x74uZc75cYFQ58mpKBgCvSfyeUhtkW4h9LusUtVLpMLo1G9qgzC",
  "key9": "648X3joETdAyHviyZbK4Nv42gz6nobDZsaWm5WhWSHM4rPxSKZypj9MSuLFCRtTUkYwzpcbc7sNfkfe9zw6mjTCM",
  "key10": "2o114mskqiawVerUEEeR5rfF3DoDnn9tk13mabqMbS783R1LHuT6JGLh7gfwrAuQKZZ8NEyb9n26LGm7tnLJRowR",
  "key11": "GqvEeXeSEpGBsTC3h8bYYto7d7xdhmL1KF27ihwFmbkxJjsBJ2aDdHoTi4YdyTYTrypEuYkNFLfHdEwDAa7A6dU",
  "key12": "5PCKinqbMm2zZ4DcrRkUEXEem65r4WzMMe2XKm3sdWyySsuBn6HfTdmdXx8kH1scY7gJdRnzHLW5rRQwxJksy21s",
  "key13": "5GsoaU5BJVLpNjVkbyE7pTkTLNvwcNTBkZGzYShYhTVz2J1dcVkD6ySoWApq91MU74CFuqcTKrub9VD8P1q2JFnk",
  "key14": "4GARQrqiyfsg2YzGNnSUsEWV8u7t8kAx64bDfDFZpF1hc1AQGYg1o6r9p9ZjmPJBhEvzhEHsuzNu8WQ6nkiMRTbs",
  "key15": "MU8H8PJ2P21EZxd8bRzaHPUeRbjHSvFJhcJp8nro1QVXhYK2zB9xSHfAnbdS4xzKPttSbTdD5k1VZ9aEstcygGz",
  "key16": "3kMoCo9ywLLi9kQnMCY6xjgHzJq8o7JmVB8Sy2XF3XuYvYjsp1XLEZboqVzSfZ8GS5QxZg6zaX2CW3xAsKmjy4me",
  "key17": "26SX4VyjC2Kn57372Zdf11vVDxrBK7rw57eNtxpuW8ju9b4Jeavmxs5uMCQcVpmQzViNNitewJiqmkEt3wUeyCpX",
  "key18": "3Lh1RtWijnVbrw8ijeYhQWSJ8JFz4b9oy9LWpT9AdxnTKBXYy8nS1iCGbdP8B6K2youeheroDDBFUi3d7YkvRR1V",
  "key19": "5bfei4zipya2ahrG168cxmK5DRw6eeMA9AChv1ZkZ2q5FS66rgCCCgkMDggjA8jGh3Jvk3xfdyf73b8N7TgmtM3",
  "key20": "5eknSsETcwkrHXXiYUsAv6VfHFhdmAHUZnqZNHcq87KwuJ2msLW3MawpfdjmDczq6ddj9nVNdVgWkiLAeRkfFgY5",
  "key21": "2FMTcQCKixTVyCusLToG15NMe4XxYrmfcxtW3nDT3NwVSbsh3MtzjXEuCrpw48vB4q2weqHmR3zShb8PSb8X4FBD",
  "key22": "U83Z49TWbwvCJUTCeg2XNAvWGu7LrNqAs4C1GYLzSMre5jd6Uoeyg79SFPszuS8B11LbbnDZ68oh1R2rNJytNWC",
  "key23": "3xrjte7vWsHTsNXwVkdt5pR6kCbHWUgRwB9Zk8Xqz1G2AGzhkk7u15tLzKjSvBqr2o3TgP1VNPrzhjLKGxGuyyyA",
  "key24": "4x5xwrTi5sB1SA1dFNt8JJF7hfHrZWkLzFBmMxpxz6S4eVRG5gW4vXRF5ytUpbB1NKp2yMc88Hu8UYRYNxE1s3aE",
  "key25": "2wk4smWZNeciEs49JDN1X74PpFXtSFnGB5gZMKW5zR9NZXf2hkENkzhXvyqFpR5ixQdRunQayKLaYe3Knn4ZG3UD",
  "key26": "2h2ct1bvptCAHA129cZ9C5h7FUgAgBih5YZKzcodERDLao62WWMqemVNMT5AnxYwsFS724tjEEqKZopkoerMrALi",
  "key27": "3gQzkiqdz9cBKK5nVHjSmz1EqFH7aPWkU24HVxCjmQG54uYzBwH7PwenNYSYVAi9tSjYWX8NPdpoEZWU9J41KYAW",
  "key28": "fLhWCG3Ttck3FNB6Zpc2hv4RRKbhTBmGoH5dj4Pt4JuBSPXT8WHWo6eANB6fpujo3bLtJtf2cZPZqcD3rCxHNfG",
  "key29": "5U3niV9EhyzCTWud4uzDn8iES9ZGbYCAPDFL8rJ4jvtqvJ62pD4yox4RRFrBCiCJ9SByE5fBuQVwmopKavUFaeQo",
  "key30": "2v3sN5tEFE45yVBZnXiHuujDAbxdTH5ndwJ9DHqDZCDeYRtKp4wDwEJMK1uiBKLzFXj7vgr7zWfa9ZtyR1roNwcQ",
  "key31": "3EB2e2fmnNAKC2k59SjwU5nhbL8eEqQmPqHNcZ8D6JkqvbFgyVw89yec9XEF5kpAYMwAYngtF4rj72UB3my3tpiU",
  "key32": "4Uud14uKyGUEgPvf88v27V22xacCZhKDJjDLYk4j6maojRRnQr6vpngZyLwoSEVyfx1wD761YdSLRpP5Y1JM5FPG",
  "key33": "4Gcojc3eu1sNXVe3y7uW8KSkHWENpr6vQnqfjdVJyKRhULkqhvn5PGY5rV1CaKoVvJRuGpgq3EFBobd9isfe9MUv",
  "key34": "FBsPPZehjH4yhmo26pDXk5SKWS3jF87KP5qXMChaSSKS79E8CzT8ew68MPhkMzLom9AWWTbDVpEbuBsn6zDtkej"
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
