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
    "5hhpcjQv5YyF4HWAkpX5pGnv9enSpoe6eU9igdptdpCWyHJSQui67ChcCq7FojxDzWF2srbRQPe83PQSKsRzLKEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DyysrMeU1M9uT68xSmcEnhaTC13E6unucQ6ejQH2RKrHg6MqUgFEfyGN4zyV9xiHZjUroKyKfW81ECC173T3HW",
  "key1": "2gXDePZzLWFfiYHrDyQtmirRyfo5wQPATU4Yh7xyPAgf7xg2jHouFBqK5v1qPWKHgLEBY1i1PuS83c8PHm3UbG6G",
  "key2": "2k1CNYfDFZVuxf9kGprhm3RLoZvBR6tgSiTwzoVzLw1FmunY3VkWL2hoGWE123nB4HusMQDuH6D1JvoSPxgSD1iv",
  "key3": "3u4yQzwhGh5Jqi5EmiHHaemVDJ4xLKNgPfThWVex36g6REvQ84kTT3L3rumkvohc7rLVRQGqFpzFu78Wv4UG44YZ",
  "key4": "5JeXAagUztp8Bcop67zwMjHi1A6iTrqYfakWUKgvvkhQCkihZxtz4tcth6gybWdpmJ3CdCSvxhDAdhNdF1x5PY1D",
  "key5": "Be1mh9Np9yGwVbh4L4r88CmzNS5ptPJyNWp46TQpaKAwwwYrie4Gk5awxKCF5eQnkpQo5KMBoejs2Wh9bxMfRYk",
  "key6": "4BJtWy2MfaLhoA58moSvSvQ3W6kMvt4djRt3pjpPS9edCtNFMbMxaFHsn7VtAJHqd3JJD1GebLZqwwT7CVftehVB",
  "key7": "5irWRXzi9uPLTh479LAgPQHMpoekWFofQBkt5qHtUuCZDfbz2LPxzMZewX1Boc95zBhgs9VS3vtrKkLnAkEgL1TK",
  "key8": "3N7ZRAng74Qf81XY4kCdYSCboL27RyifPz6aBkryrov9XnyaESbgLMVBifAkLs9BJFPoA1CRpFQyPg3TeUonefg5",
  "key9": "4WD1jSndWXU9PA6odp3APv1Jm8VTCPpypK3GmeteoSdqifsfNGF3XxTBoXLwS2Vj6YxCBn5rdN7Zj3DCU7DNFBXB",
  "key10": "5xgUwVyY2ngPzAT9PydNnuHRwwQudBukQUGkay7QuttDFjs1MEDATC5dC2NfZRhj9S7iAnge1CZyhcwWQoUiuv7U",
  "key11": "rmgG8YY7MCGLzSpg8xqtsnuzLmuTBKwLNPmsNEW8XHiC19YNCbPdZLHJAtk9W2KdaNsLXWbdBLZKN2XkQkTTGfx",
  "key12": "2UbtWyg4Ubq48aWQHxyEYPHRCKkpj6dTVMcXTZqFUcy5cYZ8XSwNqy8yDdd51mYmAJMy2YjBU5u9Gzf2T9fHgrbP",
  "key13": "3i34GVMoK9yGr1H3Lr1DXEmfzRf2HV99DRzpU7XRENtCYKYpDJo599MbhB22MTGr4FjYXnotC3Lmyy6o4Fatcezx",
  "key14": "2BPABuT3PHQmQqczt1eMpAQsGoPaqPAxyCZUpKeN38CjLfwJeA9ZPgUCp3DevuP99fTLKfZrhiujXBiskph4xex5",
  "key15": "2qKPXFhGKSTxWchzHFTHyocFUjfGhXhqpKJrVHQv4hEYgWkcnhBdAfKFcYA8qSFTXb4jf7ap8Csan2uWvxjQeH56",
  "key16": "2KXY5iyjQegUmyNhCcz8K9V1WGZDS15v9TpqjHQy4FjzJ57eYQG3ApTtYETcSoVkTgUKmoeNu5x9KJoR9XXqryLz",
  "key17": "2fu6bLY5K4CTBDYyxp2cGD9DhLWrgSHMxQMwcAb19Tz94kjcm7grgSQoT6w6mkxwZqN8MYriMPudB9Nuxa82veJC",
  "key18": "4ix55QTKUK9yVT8dZnhrcuBqEb3cugUDEudpfv4Gecn1vBraYmccbDh5p8wjNzeQgyKrmWZJWXEQRVA3yn8oM6Sj",
  "key19": "3YC8DinMjiNdWUt9V25K6GB3t4XdgJTYZW9Pgx2R2A8M6FMUHkYy6o2pfWdRRLg2NLSg4XNhYogUphCLFinNnq1w",
  "key20": "3wAGqqaG5j2MfEJXCWyCHaxNFix4nQMvjiZLAeYf1mx1yHxZsdBJBmxc9QRBsTaXKQQpP3KawKKnHnyZXmSbjy5Q",
  "key21": "L3idj8dB5bBKwVp21KMAMwHKGHjqGqqcdvXCX2Lu4ruyRPfEkMY6gzXqBUZi4EH9QDkWB9M9FAjxw1B1abUG4K7",
  "key22": "3c5ZzwRwcdWBX2XaBR4jf3ZQSyqDy8JdXDux9BqtDdJ8jUF811cvs4BF9ZeBAiiKDp7PkzHMFPh9mZ6yboZQyYiV",
  "key23": "3AhnHkHqwFhSHpe4c2aVMy95JgeTiYb648kE8L92cJ2HMDAtjEyeemxy6YiSz6khvVdGRGyDK8pHNhmqehyjhiFx",
  "key24": "4v8aWEYQ1knJeS184iZMNEkMwQfT8yS8GZvn4EKyhSopRV4MkNndy8D2an3yukLzYiMtZEKPkMSBZiDvZPnokaff",
  "key25": "3D7rv8FFK7JSaJdZPDCTj3fSYmRCF6ag9vceiFqKLTKK2veeGhkEf7sEUQAcPfyaaN3YeX9zyoUBHJdhj46PyyBx",
  "key26": "3nWqfCpKKsTFtXAXSj68DDEa16BHvdDfbVGuHKL1aRoKqf4zg4c1nuWug4XgH5zZoRk9zYYSBg1ZbfbL4v8WH4T9",
  "key27": "4YaMgq2LvnL7rUGQg2MrPuf5bMCo4xaj7RgPWev7KwyCS5UyELpWTsx3c3cco17yNRcNo9kpY7HhxAmwQsyTBQXA",
  "key28": "64iKMc3SSw4bfQn81or4NbMrDGqgakAYae2rA7nVgqBtbHDvwjVk95bzK9fcTnUXKKojVk2tFgAptXYYwzRwcV9Q",
  "key29": "3MrV84nkGugY4i6EdApKmtzN1gCXjkFxcftiweX2HfA86cXDwRC6B68kXgJHN8D3S2DbZUr7iJeruToVD3ocFUxu",
  "key30": "WNq69UuGr6ooNQkM4NnB9x3NuBUY8Wje36QE34vKeAyDjxGREfZWt7hqboz6ik18PfRQ7YA1LYmriayXjm2ULj5",
  "key31": "2VjbJBoPf9VajpymJJYNPCnNSm2USKuX1KTRsULGp59bp91urD2xQWkZBEGZMeaGhVpvfQqtL1Zodb8Pcu1JwxPe",
  "key32": "3wHo21vqudbjjpWxfRH6YAQhdvaK4unC4EMptkyrx7SSG9WwPFfki1FXfcF4EVWrGLGnZ3nWAH3HDK37MZGXuDLP",
  "key33": "ip5XhcxB5B8Vr2JFd2VpNZaELsnRBG8Hrr6mqa9xUtJPvtaxDzuk7EfFKQZS7EPmTuSXbMduFpg2yG4ewXTaZhB",
  "key34": "3Gb6nWaNQr3H6DCpyuKF2Yo1D4AMMzmEbmwviQ2HEjLCocyCAC2GwYZL6gBoGGhJ6i2CSMoa2UptYiYJoTy5qBHA",
  "key35": "5mdrYAxjYD6inYq8uYZfP6QqWtq7VnGwtdjcNwQ8S8ViNBcRkrDKMUmnsaszNKeTPjiuBYNhFRfatvEZXcGnwgQD",
  "key36": "23hYaEiTEk8B2WRKqbEEKNm1PC76jvjwcxszMDGNRNkuXLn9785KbkdtrcSbZLATzLZdHYWc9PV12cLHBsG2x4i2",
  "key37": "cVKagwdg2SdjjnZ7S6eFqHMH8sUjntad5rYRTERe4qfbheHM5WhcZS1Dwer6ZHN62pBwxG3PDtns7TcXCVaJhbG",
  "key38": "54ecX1eiFgq9XZSWFkqgBfNUpZpQe9LJmzh49uy27YNAxV4cF26z1TbNV2ijKnfdiZ38qkoHK9q2a6X15xp1mvnN",
  "key39": "5pkmY7PH7CTUjzcpp9mEaPUMYpVRfhvAc9rk9UxHJN3rYXrJ3KMWQqLE6dweedu2H6f1T222K1Ddg41pSNneWMUz",
  "key40": "2tRHqbWwFM1q9dpge5yeqYuC16VUWVA2dHaFGsYDRFHHFtcw78bWgQL3gMmdxD5VJYvy8TMTTLWwYZP4QPz2DBbQ"
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
