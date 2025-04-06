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
    "2tGhfdNorTREaEc3pYeUDaxDrpdEu2322G7CJHHjmkd9sjRcT3ycwm2BYsTx5mwHrgpSijYQGezG6VdS7U8DBh8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNiXF5ferzAvXLGLG9YRyGqH4V17BWrwEa2DH5KryuoPWzGpgvEZF2DwMGBK2E2SJ7AzoiQn98xCu7pVYwoXoWz",
  "key1": "KwFF47DKRe887PAYgVB3GwBEUF6XbCaASEcbJG11yvjo6jbLjCJ9mVGRafxrL6saGaWkYxvC2D5LuHYrzdCucH9",
  "key2": "2zpNQheFmpAyryCvyqjD2NJhMwANTyKxv2bmxvHqxfprAM5zRcQ5S35zkLPYgFhRi5qT6mWyWsqBk11Jjr42eQKA",
  "key3": "2a7tf9Pfaru49mvu1fmqXRViBVkhvkVSoLFNLtfZAmEQRFdKftpaTBfv5LNMyHHtpF8S78rVTPXjjCPZndJfg39y",
  "key4": "DbSdqx91nwDGk3MCpuMZ7vi87mtfXKUQidG2zbDbLyAk41ZPAVd9iqRTZdwiQYcZ4p6P3y4AdH1tni9kpJkMPvW",
  "key5": "3WoPRsXAjsDeoGnBqKnkyCqC1oHW6f29XyzRStSsnd5VxwJG6sHtX8TAqnUocJKivWKNiAL8hWDLx9Vsvkp43ypP",
  "key6": "4WbehWi8cRDkjLE8qa64zHTsettEsAQcm1h2iUT4v6jJ5zZCgCu2Zkx5nq1Guc1Zvfn6YR3GjK31MjevVviC4pjr",
  "key7": "ZGm1uJ5rce6QQgyfPW7xsuYE4QLD2ea3E16AdsAa3FEDhWnfbsQPh3XBMCrga1JtwS8Epe4uYzULc6u5irmbhBf",
  "key8": "38wPwKpKFKKp8RnT9UgRFCqTqyGa2CufoiEdv8MMt7366pBaJ8xzhypWNmQ72mcqbuzbWP27LL5wC19jnj4maJAY",
  "key9": "4DVpc5H7AY8Fstx4SwA9QRYffH6jR3DqY3MYqNxobn9QrhwnThpWU5J4AftfxMV73p6LGvMvKDzi9FaP2ra9QwGg",
  "key10": "3cdhUkissBxPZ339dSa6MZYWVcizDmoWPEDWoEdCAKHBszjb2ppkN9ibZ6CUQEc6gfdU1vnVHxW8NWeLuVz4rWa5",
  "key11": "RMn7FBv8wj3KM8rf13B6ZgWth2rmRRgN69ohFBMMK16saEp92RVw47LCYc7xFpx4H3rzsqFs4R5VcuWkcdSXgG2",
  "key12": "5TcwRfJvuKPyAEHQRdaPpB2oR81duoQ2dEHuUsZRJzZ7rPEREEN7CAnNrzfATEUPzcxFQRgrN6iamcY69ey4c6Jd",
  "key13": "5Zfa66aaLyUC76foMiYGAozcUpyqvrkY9umdA2bBK4K3DfgpmwG85vBTZ3zHkeJ614wid5jqsgrv8E7AwADYfVqm",
  "key14": "3gfp54gmffQDsudLbvkNzHLvEv9JdJYhKbSEFNc9PZDcDKCxgpDiBJ6Df61GLaep5VBEkZhvvaa2Ys4w9vkk5nRN",
  "key15": "3beurG4pgKcWWwpLE4aM2imQkX91sy6fFVMCrywGaYbxjoYcXXKT7uhkGXWkSFC5PdKynApnEsVrk6UJyp4KDZTH",
  "key16": "3nXJFed1aAbEjwsSqVKZ117SLrXgbbcjH1vM94F2Ff8Mz1R5XyDjnZ8YwRdY3yHgGXrmzEX3V2jMLxeeHAaZ9un4",
  "key17": "3PFAnezwPYDzXzntSUXAhP7b6nPEZLqUjbbE8Fm1SLsQ2P2dCihqMQyrwaQcyKJBbw9Em8eLVEKcuLi6zHrGWZG6",
  "key18": "4co3sJ21tvBavyumQd814fV9o4T6PFYj4UHF9qNctQyHHUmEjXn2u7gcmBAfBbyXC3cX1rLkJjMsPvSZnBviJzSD",
  "key19": "2fYakmcWXvcuBPStDwoNdDGNoussNuRTCBeRjAAiCHbVfQrqY6qby1HpPGMfFG35krmZb7fxCWdVcCeLjvrQxKHY",
  "key20": "2oVa2SRKZ6Tps3ma54pK22pHx8r2a3Ki11CWXVJMnSvaJu7WuuF2uiW9JHia1M1aUccRZ2uKfYoTe6eD9iiq8XxM",
  "key21": "kofB4uALU17eqbQ4KpNFXGKPqd9gZe1AXqzdUVDJF3Rw6nnSEBFYHUBQbbyxRw17kSKHDuZQGSq3ND9Et2UY6V9",
  "key22": "3uyz9BEYewKU1fHJ81RhwNC2DR2vdLVqT2oMGj5mZUduYuPH7RRKvcGW8TyEp2RaDGAH9SRGpBx3vSFArAtWzKYi",
  "key23": "4y8c7LmqYfdffGdUyrqCoMTJH2uuViDyxNhF2wt5Tp9N13Ecrx3haaxGDoFUtkununeTZkHvw2Ezk5BFqAreihmH",
  "key24": "4sPVvLqN6ZjE8RX6XytwHAGTQofGbC8W5LBWzhVaQcQTNQYZdZFpFHb3HTnYTjE2RRwuwETqG9Qv76qUL5sJxX2R",
  "key25": "3EPg6UWJvx5TfDZUEZ6JaH9rYzjxsN3rwMm7bmC7GkH9c55tyPQhYokhi7k2QbJjy3ZNmKCaGv79PvYnaX4tkKok",
  "key26": "5sKiU7GTfzkKU6LtBXtmaamd7pQceE6bCQdb6PfGZeg4gzZEPHtvxn6P9WLFjpYH6Zq3XSnAHvYCXmjpamN3nNkS",
  "key27": "D8CEZU6XfaEJwj5MgiAyXhyJCrMLtuYZF5v4U1toCWgURzsM2uiCttvKDYwZGyW4kSbBnSe8gKvttAdyMjJV8AA",
  "key28": "bGy36MgKYyDarC92CVNqa6P5Pq9NhsfX6v6b8tnBrHXNSm5YEsJvdZSzcmnixHZmkMXdt4NNbdvfoy6S15xdmLG",
  "key29": "4KWJ8NfBa87XxEg8XQZZwNtY2yXS9u5LfridGyjkVhAeuLe8GjEFWFkUFbKbxAGAF2TnvaiaPF4HD8jhenFKfhwW",
  "key30": "2umX3voMxFbUsSqo1t4jUsG1xLSunCRPto5xuYwqr9xxzYoAtZQDomMWzRUf4iViYCe3tmJ1zrpkfZmwayhVUfLh",
  "key31": "46Uf74UnxzJUzPUcqeyFrEj81i8Esr9dPa5S8K1uhvNkWKMrQhjg2GCqfnZQLUWdt17bzdL1BQcrk6o2ipZjwFWV",
  "key32": "4BeE9KYBiutBuSccMB9XcFNFAhhhP92JikCwqUSXiNnw3Dz776oMDUig9jCuL7yaSyBktsBcTNJ3YxpHF61DdDU",
  "key33": "2MHFpmrJrGLpQeq9Lw3vp1idstmgnZ9pdTzxCWxGDpbjEngEojAvib2iwF5G2BPMGxFfnsDUXEvswVG3FoScuzWN",
  "key34": "2EhwpixP7ms4zuDfKSGwUAJnRpKXHK7KHVKgXZdNHanw6JXc59kmFPSqPNmhFsMxKkWGgneda3apQoX6kD2hhJ4r",
  "key35": "3yqHaG1nT9zomY4gY8WK9FjM1fie68k9MeuoRaQhQodxiWeRv3MtyyDE5Z3RD8mMWRDvFzeSkYrYoN8CWJVYUzZ5",
  "key36": "6ZTJa8mNmZY2UAoQbVwCmFLx4agy9DAfb6QTVw7DJf2LEJRiHdhat6PJfq9z7qjRSyJA9hEGEzEpptjR1cXyf1y",
  "key37": "3mHWSgkk1MqeZyKX6P6j4xPSfAMkhNkxUBkb2jJG4BgQoPVWhLRdf1NcaSdopKgfRWP7TzkNKw3KqTg1D7CdUfoL",
  "key38": "4Q2KjatV7FHiwoRsveijJ8jbLntCuayXxAoMBGWkvtND9fPzPFpGjUaUZK5UrzXiTHzQBRqzQNbB3BCcjZGqEJaY",
  "key39": "5RdZizCwbT1KSDMB7qgxhcerBtwFgW6WuCvNtgWLGEqC53XwKG9G1ANmoDV9urDvsf96v8iamLCeDCMMg2JNJGDR",
  "key40": "jExM3ULEosZikt9LwpK2VQYJTUiERjFvf9rfm94xiyG8xrdgsLxsHtq36JX148pgyqjqdWZdHjTSSMofScndzft",
  "key41": "5KU4gEW5RWNkphDaqBu2FLhYXuuLf1ejrd7asDZD8aVW5XMyfwRnppZA3BhQ3xUXPkg5cwdQ2hHRQPocFSZs3QPA"
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
