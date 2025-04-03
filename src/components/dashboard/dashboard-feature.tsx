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
    "3BrbuTaHrPJuZAa4mrfC9EqbrY6oeBfPrgQ8cNWEhHVhNbfecPRBeUJBL1oEUSJ9jnXhiS2fbob7i4Cwo6frxGZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPMBcY3GnYQSUmMeD314avV3DAkNTyxj9wT1G5oySkkXcCXb1ZobYKDNBA6NTnnimuKCXLWKvX33m4Ywf6hFh8H",
  "key1": "euunAPabq5NDxrNH9tSAiCjRhR3au5NdSmqcNeCTj9paXmSmDptvmcWzG4XaHMR5yknZBM6TYRwMNwQXYruLrPG",
  "key2": "4puhZv3iRWHLAVHF1TNkXXamoD4gM8yDVwK1tY9HAeEWHiPxT8Fe1TMF11dUnkM2Zu8dxMqgtnrgbPxpTqYiGfBe",
  "key3": "4E6cG4jtMkdcGeQ5a5KtnXPStxRNJpYmrdik3RTuwLTgYF6S4eETMf7y6FAUsibDMTo6GCptwN78TohcU3khSj79",
  "key4": "2XScwMpNem6R5PRbxFfEcBFjxvEAJjSLeJFK6zFck3GnR2gyQe8eGNR5yxqFWhDH3q5fhRWZWfiFJwAtKVThPx3D",
  "key5": "34AYvcu3ZYWBvwWWmk1GNEgkqa2UEsGouNHWQenEmJVPs9vi45aGMzf3gQPk3N6HGJm7HSap1QzGVFPXN65VLqKs",
  "key6": "5hq5J41pHfbeW5rwfRVkr9C1EpAUdtMrFnyV1mUg7RPkXfjzzrrCqhY8m9qCJKzDosk42NZxqUB4K32SQgA8hFhJ",
  "key7": "2yPKQVo2AMoiDurfFxEkdRuPXrteDxm5Jmy2Cfu3XuYzMDehexZTiaKV7G7tWsY7adUKzLiesC5sh7uzFX4tvWBt",
  "key8": "5kDwWoTDqJDhjVPD9aMhVwfZxMuf1LJFhu5vzLshUKFiA7bbmJ6qZLuSrg34KxPjAkEobmAibjS5KZWeE7CfreTv",
  "key9": "2LaTsm6JEPtrbp6UEi2jbc5uU17hhS9PBGFdDxoLzSvP6nfC6UxkSuvhzN3e7xdZrrKPV89mnmimJFc8HZVCpdmD",
  "key10": "31BmtGY9CUPKmUNiCHy2sDrMcFRSY94mbiXX5Lx6JRFQuAAGPv4nLX6FfY2sRuw9mtYGyMr2vWBw5FTQxg4Y2EWe",
  "key11": "5bYGMKMW9TxrAPDHrtofzHw5c41Ew2LnSYMLXvr8RWF2Pi4xDZ9EAfF1LZYjcSaMb5Akp6yzip7FsAN9JqktgsC1",
  "key12": "xLLUyrDiBSxdkcWK5JV4dgVrZ1S1bfnN6REKyJ2GdHwzGKKJPFK4cD7KMXutMsbcrDi81aCdpvyc3rJk8QdYQUh",
  "key13": "2ETpScQWM58Nq4ZqPfBARD1edjWmCs7X1MZug4TeTssZ8mo4b1zqtWxXGYTvwGqeByVbK7zU4sgHCqFovc6oRWWb",
  "key14": "57LykT2bkJrb1gJgNRnNeJwzpnHizgq7iQ6xstziKjkMsPJRxbPuvTaKhiaoVkAP9YnBNsgDNttUyd25wR3uddmU",
  "key15": "4uv2n7Hc9t3dMqU2digepfE4xZqSYEFmfbk2XAtezZ8vYLgL9FkU8oFzhRNRRfFkyVvWe5HFcWYgvMTK66EqJUzr",
  "key16": "4G5Uiwf5X9NgGwJbiEdgKKSqCeLt7vUJNYEJmUYxzzo6D3zJ7R7jBL9GVwRM1AQyqTibx9RPpWBsPPjbK36AuAAB",
  "key17": "5LciUQGF9xXrymP15W1GQd7j3nJS6L8mGw6naxKskaH4sRoEAxYkbutYBeQny8bA1ecyunQNcn8vcZRnmEWKcJNk",
  "key18": "58Zduwv5BTK13qPh3x5XYrYQ6yawqD3JU4eY9Kp6Mx5FBmxVFJHaHkUmCcTu5NNgQJY5kZizD8ps1Vz7SMeig8gJ",
  "key19": "4MHrg6TsfJM4vB8UgE2YfYnHcaNKzx3mnDUTQsBbaXCDRP6iGjq8k73yd9YJtZNeookyF7gge9gfnh4HHjyzx9fX",
  "key20": "5Z3M7KAMR3sdLaoYwGmh84ZRHwgPaE5hLGWMCDNsgMKE898DLRqsb9g8kLV5VpVffZ3DCmByLXb4LAA6cz79uVux",
  "key21": "4Z8UkfZL3er7npKrPfrKcUa6hfdLEnwaMSL6Np1SMiLEUr3k4eEDnHRLNnqpVNTSDyXQAzdHCNHtAGST6jNLEbbY",
  "key22": "3vGpCjXgPoEAT9ZxnUTK55Wk4oBDMj9dV1GeVVLufJoMtF8RxMe7bfYYVqz7PSXeMqSfw3dnVTsyKCbXM8dic2ko",
  "key23": "2tFRyUt5c7FzZ3SAZnVzyT9kpeGLr2yEL3rNhjB6gcqTTo85vM5kABmLxB9ndrrYqzWby9V1oNRWFya4K5GLzw2m",
  "key24": "3AzGS1PThqPPovqBeXU8jgHNZBVGRDiy8JQh1rTdnggQwD8iMRUrXyLX1rtNeJasEcYqmLm9Rq3XXRpKmEurG4BM",
  "key25": "26UYWffAmgEbAMcXzNaPDGWYAoEhFmhGKUv3oBWXSi1knRdJaRA9QrnK8yRnjTV4RT1NqxG2GopgB5d5kbQEYFU3",
  "key26": "5cqu4ciN71ACewvLT1LaSwgPj6VrpQtXgsgHv6Gw5iuTPiN31ZtkimJr2JvUxyGF97vot4df9NfBoscHPJUcVqWM",
  "key27": "HwYjZrmPsYHQxHCqCKYewUQxzeEYqNNQZn2Cqg426YPXGUMsHL824Hm9PotDjP8jbDg2dkEncsTB6vf5x57xoGV",
  "key28": "GtBuL2QgJBaTkLFTrveLoMrapwmQc4LrzpsFvWBKS1RbHRD8rPGe8xU1Wi6owaUgpjFb3aAAc9us37jTeF1GpDD",
  "key29": "5xTcMXQSBTwrEvzrVgYedttAt2NZtiqSVwvPFWuScZ1U3StJVHf7CpZwSjxyve72HLZxw4V5KES2Lq486jQyK2f1"
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
