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
    "AzEKCgjDZXSojY1j16Lgj3dre9ZwXZrHWEFtgTBeL975nyyHJRqhETyX5zhjLmD4YuZKJL82UUtDagzPhTBv4Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3txkwP64YmzCD2ewmNBVyVBdScw3LhjsfAhhKthNT1YWLyA4JhsirajevMcrT6MGfxvzDrPPRuSRkoQLmP3BMD",
  "key1": "HXXzpK8T77R1dgvsmKAgP6B2bMZCS4URP8HwRyKsWKAWD1YgfSvLJcwUmZYRjj6QdVeNSxVm4ccx4gtgUxtJajk",
  "key2": "GFKUsKHD4hxEMFYUNuE4vrVGTfkDbXsYJ9rE4rUhWK5xAcknTYHxM7yLeX64j8tsnHNCkSc4RuHiAQuV8qiUvmq",
  "key3": "5utvx9qBhv9ncri2YwWrSeMGYDE5a9AuNWxXshPvDQ9vBXQ2Css5R526Bn1WZycZcfL7CAdhgzpXws9nNngdw7Gm",
  "key4": "4KRwuA7kRjhoNSoxSBdk1MJEqbGymQzRvPCvxpWk8YdkBKoGsrBQJTTAHQJacod8itT3FmhVvNwpeDND5S5WUYbz",
  "key5": "4BNXHYmPzDBN4gwGsJRR5pwEHN19yuG4NtxCG5v8mNb4LiNbn44AExUuvyJ3RgwEP8WkGwe2FzpcogvGmU9RJt47",
  "key6": "43BjSxXYZCriatxoe15FcFdgXBMfZD29nD8va3Tcxazm69oYAERhPjtiyCkxAM9RpnGxePdXjKBHZJ8q215vPws",
  "key7": "2V1eFLQoVE34ANpe49Pk32accRpXVDciadHQAA7UpLdqhtc8Cs9TKWwS9hZrGULc7uMG2JHMhLH5x2UK6wRPDqBt",
  "key8": "5ffRDgWg6m4AVRT99ezvawRbyg6UrYJpuafVVkCUssw5Bt1oRnNWjo4Sb4vB798uZz29CBXpF6fuHxWH7P9xYyjG",
  "key9": "gGkUbZ1eSirtkH8seVW2P2vij1u7ChuYkGeFVndABPiXSongfkiYscdA3pDL5TwMoRie6oSNXAeqFeC3U6k42nK",
  "key10": "2ygc6yYoAtMHHkud28bZqvMU7bFWbyL6iQCeWQtDPJXpksMLd9vEb3WhQ1vaenUdKkmbT8jM89W9LKNiQfUxHpsF",
  "key11": "N49PaDfKDspePmUQejRMzfvafSo9hKMjyoUmze47M1js1iqu8htksGVngE5CCFWhoBG3T8MrPz5MEatMe31vXm3",
  "key12": "3VEGfcsKDcxGeXRhyN5d9uBegGbRi47bxTJfHMYFzB5wU1mtS1dc9mRFTq4z5CANzi6VhHUMUD14xeaB6u7N2xc2",
  "key13": "AeigUzYfBMF5ZsX5LkcQR2aoWyBcjRiRnaFaW7Bo4BV71SRrYzgN8KwwhNfdVKyTXUUPAHz8L9cZoTkj18qnaLX",
  "key14": "4N1fbkpLgFWUbDKDk9jDmqtFY9W6bwuFLQPXh9nXQrbf9epxTcY5u5RU7fPXGpLdJkNSd6Efs6CtNGVPSiSvt2Sr",
  "key15": "2RbANyfzc8Voc3z9N4cxvAsYAfLMYZcoukovy83zZ2TjxjkVo11AgR8aYi3Nwy5YKYAp4TufXVUvfyBsQrqd1rcg",
  "key16": "r9JDGd73W7v84pov2ZeBVWeCuPsxHzKJ19JW45FPGU31pCsCM4LWwM2TaQnZDZpXBEzX9WhfMUmX5CKJosbez4z",
  "key17": "3sR6v5SABNz91CWCHmogrDD7MMoRMZEbNy2DhpH4inegcY74gzMFLYicbWFvNz5GZfvCbUXZcL6NC7cjUHkHjY8v",
  "key18": "3NGxkFKRYQ1HY3dmhJK6dTTWfGCAhszV5a6H9ijJDvVA6N4ybZv3hJP8WXFLayvPZrkynDXBNFeWdKUKFLBNHEwx",
  "key19": "5kp8qNv1tnQ2dQUbekQKXD3MW79UPKLgRwe2ZWW7rVX9EE7K2o65Lym1BGFaRnQcuHh2Mzdjd8HbiKY9YWVLLnvS",
  "key20": "45HjPAKqreqFDZXRNwr13ajorvG1konKTbEuM8UMcH1sh88wFBrVqHq8o42SxWafR4KThyKmoaWHrZf5t2G5i1J9",
  "key21": "3gzw8fzvj5gCExc7NDp5Qg7esbp5huMNKM3WETrPdZ9G8vADAyK6k5DVDXG2JLVmQPsQXwLBNprdmoz3v9tANpw4",
  "key22": "5M1HzFAR1LiRbqvK8LrK1DWZcvpLUzQjA6TUqtuN4Fd6FcDxzNQe3YRTtZLCHq43i6Dh1n6ZTEbnAivNZJwvhCE3",
  "key23": "3XwvGBGHiQcbsm8dG1HSysdnCbA2wfWPC4SnD2Lt5tD7v8H318em61zuKTae2QMt9Fvx38EBVwnWGxE6FmPEzxtV",
  "key24": "4N3uZhnXS3M57BTzHqAqgdzfXU5dBarZ5D9Zj5ifMoWrmAdUGk9utn99XdRhwzr1TsdP74zCbknBeVczv3prKUv9",
  "key25": "4yVwiuK7di67vNV2pVeJuJKY3tWbASoQpxcHQwqa3ATCQqapE1p7WsSAGPnubd9tcmd7MkYLEvitsMiKM5jkhsKZ",
  "key26": "4DRCMWsFcdmUoNC87LvFLTHs5a3zF6Gt3Cd9nEBEbHPQRy63vKg6mPGqfeceL3RwEZu8WqxF98WLwAYGspchJr4F",
  "key27": "4oE2KhxvYsnqvn6VbX8vuTZLFZoLic3KSR9p5wjk26qVEwufevginybC9r3yz9Nrvccbb92S5BHFXVgwP6JdNCgC",
  "key28": "4qJVPBazk1s2PaW5WmpGeti4utw6CQrMfEA5LmKh4NPk6bYUWqJjW3x5Bg3HvnTkRz79vpv4L33G4WKDtu3V8AGe",
  "key29": "4Ndun9X6xnhVF1FUWbG3gRCmHD6YuM3AWnW5RimF4NZng2WJ552XDWtzU9NbZBN7mHPdyXwa3XngVNXACrHYEf7a",
  "key30": "5FYC5jwsCf3eLfYR9jNa8AwvkV1cGqFqZRZRJA3kcCSoarszwmYARCdfQnjcJXL6uCRBAiDrFUsagSGTLU3Ap7A6",
  "key31": "3aHgF2LzZCLH2pCqkgUWPCEJRvjxgMdsrAQLKAVXKoWewmVk2Dzfmg5jv8BL1kzpnrUNk2qdZ1qodoj9w3ZMcbDu",
  "key32": "4BQHC2fTSjBGSsrouHJTvTsjmmKDP9KmnbjaNE7cW6kodcVUg1ZkN9YqPBdStDC16RwghoB2rFi5vYSTBxgg7NH4",
  "key33": "wY4RKQTMFaZ1v9j7UQoeqBQDN5totfTiQjRHCx6EqBEGMXpt3EtDtbApTZsQWWL1aKPVa4hmASHiggP4frhVYnt",
  "key34": "Tx1XTezEJYWud8GZbF4yphF9cZNSscbZAJnc1ayRbPoEd8fD8fX5VfvpXTBPhya7B4jjx2Qwx2pru9M3Hjrmqtp",
  "key35": "4qTyVK7weBNHbRk6CyZyLyw9WVRLoN2cekbPQ9CeEGZVXakHm7YpPfME9MMhkh1zbGQxsUKSET1zGe6n4eLPuGRd",
  "key36": "2idupQqoCzEVJEuErTY7UzW4FcoVL8KzpYyeuuhb7nwEMPrs4LCAuESxY9q6GJv1AYCspCFkKRTDPoVP6cYwkMak",
  "key37": "7CJCVSm3JPSUkfe5B4s56GTcGCnKHSxSzUvuvFHNuvUgn2AX9u2hihEA5XHqHu3kKr3QDGnE7eqN8vRBNQwGJsM",
  "key38": "5rf2TBTHe7xG9C9PgXPYaK2cUJ16aQKBsgdX6hq2YNNkgK6qzKkvn6xxJ5pEBuvLAgqs39a5CvosTr1ysGpxTAKC"
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
