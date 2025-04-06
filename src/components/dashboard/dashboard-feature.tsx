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
    "tfSkvkQKK1gXcNHAgcReGfjmwiQHRdexbeWKxkxbixk3HeWRPisa5Qj8TGCMJjAGrSapXHPT1bZW8oQgsjhdd6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66CsT9P5q4bYd3TMmz6Yb3i2j6DsqQeCz8LCiRPNpbEZG2K3PTyn3JBFXmD2EqsPAnfjbx49avi4iSQt2361a42k",
  "key1": "4rg2kZv6YtMc5Dj7Zb69SnA4HodUbxJzz8VsHa3GiuSfFjz3P6mXWAWmieznJhnaxtXyTxwFe2TRprpuL5tYof2d",
  "key2": "abE4hUmBWgtR82UwjTVXDgVWRiTRuCBj8fPqV9HdxSVV5mAY2Nj9hV5Bwhz4EmhPHXaMuqYd5TYAzBZHhZmZyMx",
  "key3": "56PNmULi7aZr9jmqyvVFjTnnKkHHMM5bkThmka41DryA8a3bFCFWHiETUwBRL9qPiEupbpZ84JGEhtSCgZV5cZgp",
  "key4": "3gZBEKJQdyDDehGFoEDPj7z9zQMu2Y8owKeQStMQaWdy7ECpihxjSdADro4GDCQfafRmwNq8wQdNhJNz622sKTYn",
  "key5": "5DsENhjLmfXKS8s7qHTPnNWuQHH6RFo8ihhRr9f6YfsziMqChjSHV3AXAf2ZMh42hJ1eoYBavsdJ3yLb2cRDWshk",
  "key6": "DUka2tjsFXSssGgbPywHLiqZ8j8wrygzdG17DSB47NSdbhReJEuLgeYBvpcmauiKjtj7Gv62cB7JGM896RHc6KB",
  "key7": "3YicyUDsKJ2UME6fChZ4SykdC8gtt9XRVuD4bWHZN4UywQ9Z4tnaKUeEvgpdCf2UhnnjcVktyZnBopgwzHrKWMCq",
  "key8": "2xNotS3w57qR83472iLSjNzUv248WGEbR2h29EcQvWr1LZbpvGhdn2t2rMyoJmC8ZMiCTcQDG2Y6STJfuN5n5sv",
  "key9": "2fXRiXqWwhTb5UfCmzCcoAL6wEkERTaq7fKdJKXGpkbmoRY6Mf4hfJBAgYk8CXP7iJJ12uddQHdoS8XBswdAvyk1",
  "key10": "zyzAszGVQbTtoZdYyxjU1aaQNzxqphgtyfhFg1TqyVMjFszhoFhnNf49yQ5HoHiR1dLd3Bv9LXfPvau2T8aLiqL",
  "key11": "5FbajnAXxnjdKxDo4s5SbXkUEayQjK9z5hVtuQTt8KoshgcmB3VWxD9wKKg1HHPBeduMrVQGGCRwAsBihtd9SWzc",
  "key12": "2HZ2C7GjQuy8KHi5CQe6JVbMComYDnE1nhkHgdkJnPvwPbe6XXUz872gkdvBxCzfLSjEX3rAsAVpq23WLvNF4Lkk",
  "key13": "49E6n9H6JLubcgnzCBW45q2QqLu7CkGW83gMKRkFGK6N8UgVWxDp3reSam5EAba3Q2wx7Ph6yZ22dTh6jBsNCaRz",
  "key14": "3zSDT64xb77AXWBng5ipb8FtUUomWzNo7ubup44pP3mjvGVDtxxRU3EC9WKf7y6VBP5Zjfib3dk266XzZvRBufeN",
  "key15": "4q1uy2Qm4BvUFaXzZwxQugb2m8iKPL5s4yQW4pQ3matFcKen5wybY28YwF7eUj5tTrM8Z4YRXEqKGWEi4xVxkH4D",
  "key16": "4cEntBa8shdtFjrYRnSdp59g7reSn5Au9EstfCKJym1knQEU2nwr8TbwRSUrqR43U43hydNr5KSYedrRtNN4CuR3",
  "key17": "hG9UAvqLvhRMAEocgrFo73cYfRpEyaa73Duh3h1cdk4zKXtZnrfo7pBApn3k4pP5Bgvr8uWyAgLGWCzmW8XPbS3",
  "key18": "24t4BLyBEa62LqG5aEW4nxo8dth6rSZjEjGn2hxE5igWUqEdGZ7bC2by9EdZc7Q8gTZ5A9ZpkaaVeZsKtbVcidDk",
  "key19": "5T7h3MWVJBioVNcyxtRcf7qNWep8DXfa8nvuWq6LoPoXp6bN2Pa8XUddkiHrR7UG6z4FsrZxk5PAbJkrzqsiPLWv",
  "key20": "48HyYhXtZQAgSxKevwyxvi9be9g38t373GD2AWa7ojZMVQvUMs6A7fGu1XWfQMHvxxjgJben2okRVCogDpfe2vtW",
  "key21": "4nWf2paPXSe87Z79rNGt4MF8udLWNVyVx8V82vaSzqav7NCd2i1fYqbiWvccKVCzGhPAXsapZqHQTXmGLjtF3GCH",
  "key22": "5yDGg9jwcsD5B1hyRm5jPAGjtWjkSt7du7s1aprnBewvPCbvdZdqR8SMR4Cp1ZJZ8AsTZCrbNfdXYBTjW4QHW733",
  "key23": "32F3x8yUg4EJEDPiN6NoUr1Ne58odgSjZjJH5WThg9P9BYL9XvtHBikX42atxZXnxAoFYejh1g8aCaz9BFjhbJsF",
  "key24": "5hnfHHf6LmjsGtv3vgSbDRy9CVmtoB2LYFnD6LetShdPdC2h42WpUPjtx7uoMcJracvMs43BSXVA6C4xxKjbA4dC",
  "key25": "3V5VDW9d2KU42VvB2bv6AUCmaa13fpbqWPtRBzCCrjJfNouUQYLQwEnxn6nEr9sSruHUKBPPSEzRAvKdpVFboQji",
  "key26": "4AK7JkMryiNbvJssdGDr1SCSBkLR3TX1MsA2KnivgLrNFPykKaxfjUaq8w5f354z2aH3z1nHLhRxrmzk839VZK9C",
  "key27": "4stTfjGjWfYmqGyAuzXDup1b1beV8EMsd7GPy6shbJLT6DQw9LM4zoUyw1YLxuTHBGtiCsBNoKTt4zXBfsuxChxA",
  "key28": "2cV8GzqCkDJquZcAQxjw8wuz25Rp6ynYBnbQj9My54jeHjnbyxYYUjCJw8J2Ur9YHtioYc1B8nqMpKVeEit2NTF9",
  "key29": "c2CGHYLbpk8VwLNhkMS46Vb4vf9mTqoARLeRP66rfQADvFyR8yi8KEvKD59r2AW8TojzntEYJayBzUViTgkdmRE",
  "key30": "mz1cpimZvN2695osk1LLSxSjgwyfPCwVxetEsjZjDhJ7hqYJtQ9oP9EdF6hr5LvgQJ7C6h6SqZ8hWzDQJtqsc6J",
  "key31": "2GfyZ4AqC385id9YAUMgZdS6uaG7hSjd7du6mEKMf2jNQEoSn2fZccVTGUwDCwZY6A2D8VsooGAgcqcSoKF326bj",
  "key32": "3RXnLVRe5UaWf7eszBUMn5kGmeN7dKWFYHwTtgJg9E746QFcHowWFJrSN2YB6YTtQoSLzq3m6XHptZ2tsSYqbgdE",
  "key33": "5XqiKTdXzVgs47Y8s85VY2vc1f7NzStAtXNHPXrUuzFTLcAnzp5Pr1sKnMJoUuYJLkrLgnzzmdakqkT1EMzc9x7n",
  "key34": "WaCHYwYTwH1sE8uqrnuPxk19iiaRp1HYb5i5Uqmet9hU9V797U5yL6djWuycJZsNfJbJAw424pmAJroyVaSf8Cu",
  "key35": "5KWLZiVi9SBqG8d3QRy9rE9oG7N1Jd1KYH2ZUqUsaNu4yHEtrKBX6ViyHneZBySmcWcwdhsexEEmdEJ4bY745oVS",
  "key36": "58UpWaSHALCtEz6PMML4cVNENY2nKAEZ5aR4Tujcvs1VnJLXDeyxRLnkoaBFVZriBccWK6kmcAEsG5TPqRobcRvX",
  "key37": "3ECK4SsdFDBqK9EZvzWPjiePhCQGToJcaoAsJ1YfJHXRjWFFCy7Ji6NzF6YzSLktGzJbxiny6y82UPteZHtajAHr",
  "key38": "WAghHGZxVTRHKMZg2QQ2bZWRW3Cct1Cev7rtWrosCDzW9wVq36869DnKB3hvmCunZay6ya9AkvR7aeSt7XH2TAZ",
  "key39": "5pCiwdsp5n2PJbVh9xUD2ehS8BgyxQNTTrHCW3VNaW2Fd1w1FrSujouukBjCCtHQnwQ4AcC2BbgJfdj6bgNgehR1",
  "key40": "kRr1eJynGicZzL8tNxAPKR2VoBRL4vvjMsm1WG73Ury6UdwkYQ4rjUNzTW2dEwDTYffRfzgFvauZsmJapTxWPxC",
  "key41": "2ufWFfXfkH57dcikh4xbCwpk76RyjoJbA4GcNz1PuFSANrAK4hnwmxunJMyv1pAWLmQXYGRZMu5uNQ2TweDqvbyh",
  "key42": "V7BxJcAQjqcf5VSbBd9nJ6jzqNo2XCp2rYA3QtZC8y2adn8jkLevciAdSZ6skP1Ni8h1onbb2YP4fJ1AEwYUd6C",
  "key43": "29Qw2H5c8cD2k2NChhqHSpSe886R9A6VTK6F78GTpfvxsL5T2bpshEcr9AuJyxADA6jXSeQW2BynCeNJrVBgCNRk",
  "key44": "4yhhdBrCz2JKg71dnGizc32n8XnA3zsAKRLtM3BLkcAxF9TX2rRELNiEtWPU3F6yBdeQMm2oa8t9en2KvNuukpre",
  "key45": "59ycZhtzgRBH9tMD6xFWaSmpM9rwF52gt1v3qdH8vo2bRUVa2w3pwjrireyBtEq4bFaoWQCA6csYVTBxzSfRtPhi",
  "key46": "3EfUnadDkKZnGGMGDjVacNpXtVQQkFzEGSFjgRTj3ap4MGGFGwaGNrHg1TAX72sxv7jq7yUxctDJKSpdzaPAuDZr",
  "key47": "5GMii6NtWJLpD4SF9XpCJnWcYGYoaFxMEpSYzqHdTHZx8yVkp9mYAb1P9ZUkjxM8dTa9xBma3XPHK6H814NRAGrL",
  "key48": "3SjX1WSaWaYBCwqqTgvYttotQ4dRhQDGfwnfE51XTtEGWB8QjLkiaPagGdKdwdduytrjT9P1CB8voCC8XcSt5rMq",
  "key49": "5HVJYiaiuMbG8XecvDDU65aTvxfViHXRNj1WWSabEijpBUPzzoVHw3fmrCsrTadxt54pRUGf1zpmU11A78trNf6d"
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
