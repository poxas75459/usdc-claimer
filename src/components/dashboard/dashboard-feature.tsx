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
    "eaSnGrbLKvKgGLzVsGCLwovkjEJwCAgkDRvnFhinqw7m3aveeuTtLz1YFYp8qBHVUcqbHbjv4wrvpVncWcWicHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guR3X7xeR7AVJifFhm9cPyFdksUmeQWrbxMTB1oa3mpiNXvdg21NhFcAXcJhbYXJdp4wud18rxH1fi1u5zgkgLz",
  "key1": "4YbTEYLVrCVt17XnDPRcUWVnj59j6btmPuqDbdDMzNWuRVZU21YKLqifXVi6j1ytRCETBUU6z4epnnrQjhop9L93",
  "key2": "4TQBkpZ7gGAQGCSrscP8G2cDH3GcRTmDepFagkGnqzjnAMpDtTJu6anDKT3U8UA6iFATB2FS3iiAVPUJJMa6Gcoo",
  "key3": "5oyfUNaVmGV49RoPdJWdeU53kLrB2kzLZxp6zdEd44hRzPVAhRqDjrUNyjz3H8cryE7kHfPvGJG6bHrJxj1pm52L",
  "key4": "3HVCjTJ9JBQ1cHHhYuKErjg7KbMgoqcmkMWTCSVq4AFw4m9EeKi3LgayoUCn3ejaErQVUJWem4DvLt3YirE7qV3d",
  "key5": "dShKngDJhNLT1ueeFJ36hMiv88gxrgdKET2kryXSTrcKyzPDVvtZvnUDm2ZBXPcsoH1dm9L8tiMTbLVqcjJEoya",
  "key6": "3uxJpVzRBiZjzLXX2VE6VdeJ6XejQf6R2Dapods1wuZTCknSaNFyTpDZf7MXuaUep4nweKSU6XnCohuu6DkXqG98",
  "key7": "2FC5onHYVFD5iC74kcLyBB8i1LYrvH97tDQk6JARVbaDGdmPjkWyKCvZUPCGJUHoMnWh4FMr9J5DpHDGLGhP8bvR",
  "key8": "4R88VB9RQPjpc53CDEpjjspErVSbv3Ng8kcHfp3hu3vsWpxUgRMptssCZ7S3grq2MGVf4iKcDyxYiePPv1q2xaWk",
  "key9": "duLb1C3bGij775EkE7EQKZzDWoTQsPeePVSVZ1qxBB8CcwMSPPigVvgT2ZzAbyAXJeqZkpXMFk1beYT6JfyAyf4",
  "key10": "4c8vnXqXuwG6by8HUwo7e61g5mBDfYsJxN7gPS6N6YUXh891LXra6XWoErHQJopQEKRP1R8vmm9aCNpT5WLb2ZHo",
  "key11": "2NG81sunhBkhoTdWaNo236odq5iQfENqYvrbbdyYQpegvammi6TdGaCVP1t7ZzaWWJ79iJNx2bkpvio3bGboQfRS",
  "key12": "3rtA8nmKJPByHuFdXknqZv3Y4ypLCShbt19Pi73h8mmnzY2qhcmYx2tW1Tguhh3qYx9WjyXCM3u82Vq9hTKtyr4a",
  "key13": "3LMroNEAXK2xJcEucc5J7Qrai1idPdcowExN71D2oowQUzWSXfVfj17Gi3VztcKwnoU5shNefVAwQ876vya6qvB8",
  "key14": "3SuYNPQqBzFeXsKbcuN4a6tbTCFx6zu82TCiHbNb3cZq9oJwzjd9DXXAYJ2itKNXfyuT4BWfYQ8i4Y2Troqej49b",
  "key15": "3B5vmh2gWuGriudPFM3PRshCmtNuTmwFMotKFZCMqpmrZ5jBir75gBRrMtnYKGmtqDpGNZQqm6KL9eE3PcnxvT6y",
  "key16": "3E2eXf6AZd4ygSyvc93esMwrjHZ4eEY1RossGMpfyUDRiLkyAW2mpd1ZU9w1GjHty28qa5LXWbdSHn4G4R26hnU4",
  "key17": "kCM88wHCCxPs1jDEj42v6vsgdTSkqEeejFbAEPRw5AT6kvUuEYuaNETxEKqvtgNq6Zr9Ky3eGJBDi3XhXVCzd5T",
  "key18": "44sPRmr4D8F1mcCJTFJUhHT3QyW5ZfqsyobU3Ls8VNfX2FFkNLidchfg2qfCjBeDNEBrhh7At3VyMtocMr423xh9",
  "key19": "3FS1whH35W9rBoddn9Wpk4jJRQw2vdyLECLDhcG5qktuaBbsaz6ST5LrPqNYq3GUPiBN9Q64Bk4urEDfbE8jboPo",
  "key20": "5Y2ocVfZeJdxsUDmN9LRy7fbjwLAf9oXBF9LkemVTmFoHc5APn2prN5XQjvyMZMvUAgzZcgaNHDVx4JbbwFcmkma",
  "key21": "2GULUB8RcQCx33N624HN5PBmw2eEj9tYbEhgn3L8JChvjzY2AJvVTPUbvf3HhEo8JKmXingtTE8vAxBWrACRePD4",
  "key22": "4BhqpHyj1oCPPK8wZYmeAsBBaX1XywmmUNgy9iwnj536G33GffQDU1W1yvEnHEJtkbgwBaZzDyWfbVoXr4ZqF8xq",
  "key23": "vnVzYNQP91oFeefmcbRKZkYT9zec8G3i4QpZXLWxR94P21tX6iCpc1KaNqiNRK2UVfnNyRbwFEvvTvZiqSDGJWz",
  "key24": "5g2f8aEqx5QQjPUPboMm7LTdR2sKaoswRD4nbRkmUuRRdUpwmxFSZbKtN7FGSQkCB8Uc2SX7TaBRkEQo3jw65kZb",
  "key25": "2L8Q1qFFGEviEfNzWNUfFePxmiWvqBcD2mXQcHvhPYvikh39ZYE1hU6zLjGRPCT4tZAVMrYezrXTVv6pgDq8Y7Ny",
  "key26": "29U5nqRFoidSN8nvoG2WAELfHb9b1ceJCzatyAeoaEfzpdv325Y1dSqVGQx8BZXu4HGmwcLc7bdxpyTLcHSe8q4X",
  "key27": "4M5hB7WuAgs1hkGCpHUybfH1UpvbnKQenNm6WraXdtf3Jvo3xyWmp8eEU9WZbDMvPNm7wxerpwVdtP7TaHPLKXLh",
  "key28": "jte41vGTGdDhzEGyB1RgLDrzTnXZekAzgwkRfhzbCB71jB8M2UabCgyEo5vhPmGFf38A8WrZDtmoHdVVyoFxF8m",
  "key29": "5jvkHQFVADyG91BufPFwncbQTxW1PhrrSirvd9Cz2FSz6LLXjLvhDVs8JrpE5yBqAzvXDQU5RQkQu5t4bXju8397",
  "key30": "mAmYNVb8MpZSjvoePQRTysbegbUH7Ed1hCS3k9vjbkEuV5SSbwvR2g77B41dN2DY2mN4sqNVPCfxqi5jxEkv7GR",
  "key31": "35aw9meMpu2mxJ2sgPfGKpe1ZoeJh9jKqLpXrqobD7JZuPXQ6ZVFQRzhYyQBV6yB4Mw5ZcFLzBTMeVYv4istidrP",
  "key32": "4YvR6EJUMx8Uw7bv7qEjXT9vSXv7gAUBfJkEieBa52azkyt5awPkLQ9y8p8pfui8xv6MYbi2Xn7DRiE9k9k7jr2S",
  "key33": "UbASg7Wy6hmqLPQuhpGLgt4Y1QmEPAY8UMrq6YLPKTP2DNKE2Cuw5omwzJbfg9qemrz9HwNCUdsrqvcsqdMDERD",
  "key34": "2nTgAKJCrMKZwcCDaszt2ysM4QzFyYktupN3MkiYyYMa5jcvpTbyR2JgiDS5vGxhFBPTfUasEudvHhTLmJZuaAC3",
  "key35": "eycnrc3ENpHdx4BqhGQojbLXqVWBC1tMZT5VBRFi1NFty427TUJrrXyFW2zwPcMiaEnbYkKuM4ENff4ysuP4xwa",
  "key36": "4UfMEjqGkX267C9cn7N4LAb7CMNB8eW6eMsDNmE7wLDHphD2pUhV9A3awE85A4H2CHTLjyQqDuqK9o5BH2YHRcqm",
  "key37": "zzXE6N3961yruwGB8uBEYN3hmy5s1miXFih1FcoRTXct5gHpdvUp1rFEWUAj68PFd5NKbzi5fx92NzvLH8JochC",
  "key38": "5nMxxwS8kbL5J6hZgQTrcbYFmYncjNm5cmyHY3o9M7d1F19r6kQw6tMSexyn33qyzw5zDvZE3UDNpHTbGouwaymE",
  "key39": "5Wm6iCJyHdpvQHg1DJf2oRFNz7ANXrCfYBwQx6wRXMeuezfF8CmDk4NaQvcGuF3MTmthRwwP4W6EBvzSd4nhMupH",
  "key40": "3EwUQ51wMEquzK4UNE8JYvJn3oQapoPEVed9HEf2YAWjofatYuAd9tgBuX9xoejbZTu9LnxHzizAaTeXSvAC7VH6"
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
