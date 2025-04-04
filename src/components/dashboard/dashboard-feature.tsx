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
    "5LzXR4Y1wwviqivEMnaTFHZ8ZxLYEHSrphpPxi53Vi2nVnVXozM9LHpECmbRjkbiHgT8P4M7to4Q2Hti5Ne3qvPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9Cf5JhZqkxhzt6eCgYk35zf8B5UnhG6YMzkK5pipAdxrU3Zzi98hsxJuzwwgMNfWfi8RVUFKz7TENyg2eB8Sd1",
  "key1": "51uSqyz9VpNYZwyJ9XG7hDQQQZAYSLWmLB9r3stwzU34hUdZJQ3qFAK42ipsS4pc37m12ozFLSyW6kinPLQbXU3V",
  "key2": "5vu3wPx5GrKYWSxps1vo1QDj8X6UGygY3aXDDh2p6a9ntL7ouVqKtzFhuHZ7E5Fh2FwgFrgjqhWrLYxEEZxSJS22",
  "key3": "J2bvdkxnD6NuBGe4d9jn4VEC2UeUYws3ERwMsUBS4X3fL6kHnGs2ULgDfjtxGp1dDN72t52JZtwaeHhkCvSrWMd",
  "key4": "2cUXmM8jg7PAvAbpy6UWXhpvL26G8K4yVaCJdyzdxnNim23u9bJdLgmRHmEp7b2QNqqEXPYie5HXPW1VaPAZMZ9j",
  "key5": "4r9A4hCkZzmi6hvaBBU8aryJgtEBEwHT9Js51ZtB2Ahp6YWh5i6wyftFdLmLQ5uTnjGMDo67m3RwMXGQemBGBfAY",
  "key6": "XUhvqaryBcRCTJxC8HGToB9KLQR8SEmzPVSBDpGWGKTM4wTHbnqZRTGChUNpBHxaN1d9Zs18PLHe8pkztvRRQoT",
  "key7": "2YxCkbNGAfzSECVL9huTreHvC3aKQmHESQ5iab9hbiGR5EKbDtrFTrFBv6AdUf6qyV9NdJQk9fzsz7k5Sa6gUTsk",
  "key8": "AECQvavWYEUAjDr4CMQyPBxvsegswGSZ5PzyVHSsXJQ6y5xyt89imumsp8GhaiUEugz3BoRkdYWs1rVa68dj6of",
  "key9": "5Mfk1cpjoyFcuh3jFpqTNrrE7sCoxEmuSU8kDfsxAnu2zyxXQksjRtaS9VTU42WWvVMqtbMi1SE1wn6aeyqR72v7",
  "key10": "5VEHyeagcVVZApwXXRisHQRWbxN21PgvbGYiPYMYrb724mHuSZNPYgz82bFF79unSBjiycS3xnGFVGU4m4pgpAPu",
  "key11": "3CXpXhy2n7p21bHLRYftFjJiU8DQ2x8x8VqLySa1zkGVmpTQGNwbTHyYctCfpYkuvAJsXkJD4UAnxdFX6zvDvS3E",
  "key12": "63YuTJYVDHZpYZJ9ZH8n3mTLLMKBzjo65vUXFe9fWuPtEKgqdefgseFWaSmRbc6wEoHGKFPuU3LSVzPbKWEs1bNM",
  "key13": "xARbvMX9aYuS7LGiudwvBqCW7NPzBHMuCoREFvigWyk3nsa7GE4BL3hphLpEzKdArJcatbmm1oMB7NrB6n82gqn",
  "key14": "5uRnFVjVvJt4bhR24VWu9QQnkc8yRChdrz6XiJo4Nwe97r3xmUqBG8Tqe9byWknU3VW8aogYGa5fSwTSdpuCb9NQ",
  "key15": "JuuEea54SA3Ejxo7Khyfj9T9ujNKSDwwim1mF9bTzCdEWPfbYUWU4k5Ybj5KduNAosgPYm22jJw39nKeRnzmJro",
  "key16": "2iGqjvxioG4hXt5CKpX8zzgjQcVS6VxnypNN55wkFax5schkYGKAQAs8jNpgWUwALaNoHUKqqz4ZmVDGhqnohiHW",
  "key17": "ddX2y6hZbju95tugtdRg672xKhpY7A5bktadxZjTNPWUJz9CbJXVsTHotPbKYFApBFektXW7eiwpdXitsY2V7PP",
  "key18": "4vb9XSpbAfHUJe1pEfGLmvDTexkxBCnCKVSUJHpHEFs3k2tspKvXHXezcREZYEvXWPG14EnXCwoNmvdKsagqmH6K",
  "key19": "goosBWtWFXCNTbSNaR4iLGhenBQLakurDoX6i6JmgUqC1qU19P66NfaHUM7Zr5mQQks8kAjiGbmZ8yEiEbi2Mqs",
  "key20": "3J7BnZbUApETsHsGaPSrkBZ3XCtM556jdCjFzyQN4amitz9CLtoF9ZLCp6LGRoj6XqxuXZ3y1qNBL3AGnUUzVcHd",
  "key21": "4XSeMHYihTRA7RReVc9eNF7xHtzjh9UtgVoWxjdyMRqJkNpXQVZ2WAYKG8gXqtxTGMkvPvjnQ9zEoqkRbFKNiAHT",
  "key22": "61jRbBZiYBBQyH14QifKjG43x6jhT6TeBjvCUjF8TFd9MN7TKy8gyV6d3U6M3wPH8ptb3fL9KmnsNpCvzSidwmLM",
  "key23": "5D9m9ehXf5k42TJnNpqyxmyRS3qdqR7YrzBZn8gEcZ3PBJp4um1Kuceeq7GzL1TkvzfSnjLSeL2FDZY5MJRmRvkh",
  "key24": "23M5MSKfuBk1xthD74z3zXYBkgNqvVTq5EjtxfGXbvdA2zonLVFanJuVjw29ugQGn1AKQg6JX9jmHkAdm6g1kef7",
  "key25": "EUDq1LNfqN4SYZRCmVFBrRwBNAgRrn88nhmdEgoi7xZML1U9dQ6tquJV8i5LSwzumf7NQ6sMA9bqrHhyEiWems4",
  "key26": "2mUoNXcRczhnqh2geJzTBEfhtJouqFMfAvbcu4nPjQrschjHGVTdMctUNXykTQZdKDjfTwH2FqZ5Qs679ATuCq3a",
  "key27": "QXbrMbM94wTBLkZK6RqZ2D9GDvXY132jSSksn6D5Y2PnFqPyrJV1GGkGWMEZ1Rx6heq9y2riUTokUrbciJ3FwaM",
  "key28": "Z7WrTCL62puxgrDM8D8sn8kbuFoEaBzwmt1XhFTJe2ZZxX1kPum4CfDorXaiv55arprjbLjyVNa5iWabyB189De",
  "key29": "4zpCaWFFJJpVmjCbJBn9koCtPKmzwMPVShfqPeJGRrYGM3X7M4mapEzxvBXiQ8MCF8et1WcjCEzmFsbrTwnkKdt9",
  "key30": "5h5S7N6FLjGMCiPeDvviCpv7R5Zuy4LeYyBqVM2rpzoME7pggrvkLCW1FdRZVah4ygRZYmkjAD2cvygAD6yZVSUa",
  "key31": "bDuWvmwPgitzjmVAAppsP9SM6ejJ5fSUYaUcqAwLcDMKYY5akctFrAZcQQ6SaQjovGqdmg6TghxBKUmMiZQeE7P",
  "key32": "4FoHMdrT5jZ7tH8wMGQ6gcxEgbcMffNszRYgcskDZETnmEpxnby8zwTn5figExiSsjiD1XHVKnWnYkfFQ2cAxusf",
  "key33": "hRWvQKF13533axpiV86GiFs2jAJ1wPtCEWvuqBsAtHnKnP6rfdFmixoa7ErwCkCy6PMgL6tBWSG6mhC3uher1Yw",
  "key34": "2JcTVARVT8dahCRnyWkeqnjMKNeYwfQQqXUoqk9jwUr2Nh8yV2gosU4FnkjS31sFtY3UDPSo1J9ELKfXnUPYDkqn",
  "key35": "2eu8EncgoGKD9rWB8xSUs2CEogjswGpCHrNeZAVv3FarXU2Ns384SGfwe2VJbqvoTY32CRE2S13aMRqaxwWhWBSK",
  "key36": "4vzNAncEqG68ShvjD32xeXciDV6mDKLKYRwrC83m6oBVDAFydAxHbVGTQVM3acMiBi2xv4MxxFKifA2xJCRpz9tJ",
  "key37": "sS87mJBveKkjesvnJi34HpbSWpobBJjcMiWgtN5c6pbbZXcw9pWWYxWpbAcdAKV7HMdUQnqoBZ1FYfrcuNH8Wt4",
  "key38": "5T3ckbPZGNYgixdco1wXkXKH99TreRaYQ8viaurQGFg6M19ExVvEDApaSroe3otJyoGyf1f83aPegvxaa6DPTyfW",
  "key39": "2WzgA76rHJviUTVb7ADJNZSsr3ZuFiZdQxZ1yoDXN88i3C578c3KLhMPQf6AuxW9RS5K9RGR16NasWWUzJjikwA2",
  "key40": "3ApzFWEjEkgomZGVPGe9FXHEgoYumFH9kyZQD1YALu5M2AWWqi789V7ft89tjr8oqeZegR3j5Gdda1UqTSVx5Ys3",
  "key41": "4QrJCmdH5MF5Dx6ZFQWRZiPBkJuS6xW7UD91MAc19hMdjURcXiQuuJSLiExbk2MiAzDM34DLSpqMhgb6sHTrk2nB",
  "key42": "3Rct1zVAM6SGLshcog8354mkqoxS2Yr7yVtt5TCueCfqBxfmYFmMVpEYEExb37XU7SAYduAq4YnwjKivVKwh1MZg",
  "key43": "2YKZRPTfCcdx9varSUBL7vVvLwWRq2f4uUo3RBqiwf1bxhc7TBg1irLCEZ9E1Vvwz2ahzMr6V7e6ce4VXEn4ZW2",
  "key44": "43HacTjhCZbCZpTfPfdY4YSefTQg8TGjjHxUrdoK6DwfKd5MEUUtMpRCe5kyqCFGn6LJ6Nv4QRxNHUkTGSDudLTb",
  "key45": "NQN4rTMjBGAmGJZW24N6wPuHgekjDdFkijuhLAmE8AUoe242HtUnGL8yNdhWWuH5hBpXjdkxufExSL1sy6rEBWy",
  "key46": "SLdGGNkuoSn7fpTHgZoFRFczq4NBMthQuCSou7FHsH9KFVGj7AWNAZRPJAw9iXmDgKZGX6xPbQHwyXvpxjyKFqZ",
  "key47": "2uNUxhjtdGkf5swX3Z5D5fEdcdSDbvjoTRaCc57KELohxA6oyy1z1a6RkKzJbWtasxaPSZcho1bp4vuT4Re6UNhY",
  "key48": "5BkXUyZjLWhdfrFNG6DA2pQR5RHZkuoGrF8WJsjKkzmPKjrj3KJA7uLPHMPVhWe8vk3vi1cDL124r5c5uBM3no68"
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
