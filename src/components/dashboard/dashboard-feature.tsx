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
    "591Vw4feHKhrENNgUKbQXsPKf3RXDWwe5EJr8E25RNHU2xZvenRjQKsUbNiQvx5xzPbtr67nKMaG6mJTKJdxv3sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJAfLFkCnW6NM7Kf2MPdyWQarzo5MMjQfC7zgYmwdNqDgA5X1MYYx1PXT72YKacJBdBYweQFctgZn38ejsoZU9D",
  "key1": "LUNSpWwfNSTV7ScKWsdrTtoDjPwQoJu7z1jhj552NocDCr3hfK9JATyyFNcZJ7nm77oC9NoTcmXn1Y3Q8nPjisB",
  "key2": "2HwRTzqtvtHSAEmsMczSNKDPL1WARaEMTgrbTj7si497vFzPGxwyHoqtA69u1FhUsJUKtPAav82tSYur9pzYUQCU",
  "key3": "5awfu9HSuZ4DkNGZMF7taZpxDy8WUgog4QHmbzcSzTHxqif7iDA7a4JdYYZSJPL1PeE3ck9rqCdfEPF5jndmGvG2",
  "key4": "2xpFxgh6R3ZYR8XWt6no1dzCgpnsYPeJyzJpQ3d1ehz61XwUPisfRtzkaWnnsGfKVdQHaSDacNvjTgFefPaDabjm",
  "key5": "3XXbFjQfcZdPnGdWiWz9LNR6vzZPbnKEA5zWUcn8jyUSmNHoRRB5qqr1vto4XDtnj3borGx9Tjj4Bx8vvRMF5UbN",
  "key6": "j3WLpW67Bd8ho1v9GV31TVsFmuwYHckKqX7zTUhQbNe8eGTfvRUix25XmFcdDWfmDRrg5N5LvwC24v4q3DhNnkJ",
  "key7": "4y223TEcnMrKAT2Yb59rFcZpxdaTgGLGgR1YYYVAucVNJe25KzaSxMo7osULjU6uFPc68GNNJLK8D1LLDH1t7kN7",
  "key8": "4M7Nzy7iA3tbukKD9agXTEbXnFktMCPBgp1Ei2XkciDNFX5jXoE24Hf4UkeuA9RiyeL78vSFrbc8HYPGHnqQGwgr",
  "key9": "4CwvqFHCyDYJFttvDUTULW4twkvDG6b19UXLuVNtrnPj4KiBkBxwtg7189MvGe7zYTS7t9L9efTxKiFsSmKQVhXS",
  "key10": "3vuLUZz5iKFi2ZD87KqJGbcksSj5DkKTs6zBeQ8saKedshCoYnzZu8wjUDDmtYXcCqCsTfjeGL6RdTB2xLH1rwHm",
  "key11": "4rzEyZTHrWmg35DkfLjmZkHX2VFXgXNtChHTLgYEaUMFv1rbJiL7UJQZrbojHcNAt4EbfmpH1GJdK6rFngaWFryR",
  "key12": "3xUMx7R9GGuRPALnvhM7ED3NBwGN6dzFyjNuo56oYx9gntYQ5VKY5wB3zg2SDznnrVkxSMt2RVHAXLPMBx2fjeQP",
  "key13": "WPvwdPnXChpuEzSLxuWd9aLBkLpuycfPHAY8ZKyufmrYtJnwb8mtwagsTVJJmzBmhzxEJfdefnZZj3zVaeoMgRD",
  "key14": "kbKMtxiravnygJ8qd1mSuRmsh3jhbP3QMShmLgqxyRh2iU4hnD4jnNBrevHUQFNQvWxbHnvffqwqrU28oXUa6Dv",
  "key15": "3e8rjiLyUHMbUErYXGrRxqgeiAzHDQ2NQiUFNosjAAgMy9uUMr2NCQsiVBs7BKoJGeJykkVBaBfMtvCeYLjNWpDh",
  "key16": "5GtmrkNQG7EvKCgT51mnDDU8QkJXYDfAQGNvufbgf52PWfvhUxWG8Y4HJ5BNGySEZxWfHx5ZKH13hPcyaTvtkT1b",
  "key17": "PHZvqNoSgDD6V8NXoYPxADq5AHN55swhSTmPATk4aP2nS3UDYch9MRb3EUa2RQ34EMtJdjexQnYrLCeyNH1ZPnj",
  "key18": "2DweNrqjdn98w6y3D2H3f9z8FKvp5UhYiJ8W89PJn14dZwfUtkMqUGEKQU1xgrbA3kewQYUxW3TufxhTCsoYomUa",
  "key19": "5bP7eawLLJCZr9RzdSjvTMSCeAiPFNEbzkx4bV8sJ3HGf5oUbiKA41GJmVxLtnUL4LidJW5WBpvqkywSqhdhgpEf",
  "key20": "ciXQHRNZq4gS6ppN3FC44rCXaVHoTo1Uw6oqPVvKJGvqkc8B2nksFYUp6LxXkJWpu5Ssr1bCKNVkZR9KVTtjQ7B",
  "key21": "2eu3ttxG15vZMygsCrQ3R76MZG3agp66g6UiSRVjiPmww7vJYjuZ6Lobutq36s9DRJsqeVCwvWNbNAGyPSpKtJaX",
  "key22": "3xcVJYGfpxzmKNz5tgACcj3EPwBpVxGQsKyiNnVg16MWAvRiYCNTRX9oVD4g2kUk6RxdEf6QkfCY7ikEeo54cGVJ",
  "key23": "671qcQdD4SVjsP4cYsGY3Aa6wAfAyRAZXgNNfRwCa9KpTCwgMnhZNL19q635vQQT371ncZZ9jcfoe4G3PytCwpzj",
  "key24": "3BhxZrNyiWhFRWEKv8v3HNT92EJcbkJUjckDXiwq9RWFg3LDQFfpBrNkP4WUMgsn2MZzYnZFMYWuVR3NLTegZRsc",
  "key25": "2t82qgKre9Vryh4tDR63LbA47qqsufwY7Mx8PRgSqxCBy1XbLk1AqX2FRWSm4Ku2iGWDbSnEK949vZPeB2qZQLZa",
  "key26": "3woPXfd59Ttrjqv3AU94tR1wYvyWexwG3sbidhrbgxuV7BrQSdbU8BxekT3bp5eRqgn5cM8uaLCwBAKivBLZw3Eb",
  "key27": "4jbhYeescPyvaQ5kZMCfFU26XMSKJNq1P3Fq2kDWAiePP51xviH7vUAQZo9mPs2RGhPKGtXVpnFr6mP9NhMc9PGV",
  "key28": "5xdHK2A5sbUpe9sr3mVmv39y7XM4nLF8LkVyiurFjfZZTs3Nbh7ocVqW67SGpuuqKbJARzy2DB4EtX6zWFjGoygu",
  "key29": "2rnx23K3kQhzWrswMvMftRAVJvHbqyGxaPV1GjoXZC5viKskpDh1384JsnSPmoxiyquyV1eEChEogpDsKpJKJdMz",
  "key30": "4dovdNyfgz29rkZZbcz27JKNZeBx1U6c9Fub4TmDHJSSfB8v5THE1YU3uKuSAwgKaB4DSfufNfFiAZvqYvcmBKeQ",
  "key31": "3KzFaJXAc4r9CJbVuYWh9xWdxCGuSUvVYWFAUPzWvwvs3z3WUo5Ks6YSSZXbGpdLAuqQQ8AbiVoMm835MYbRZ2K2",
  "key32": "3wmrN5ZqiEvaTiEBRVkhuJ31uUKhuKQQY5nwkjovPBNG8XvmQqjmCmVofBFzZmrx8dmnFkHMbUNH4DXTTs64Huqh",
  "key33": "3dJ124gH62zggcMDCuDG9RcXqEqUEtKVXyv3ZGPXb2HC259QF4NgN3nxYUdQwaxquAy7HJArkxpZcjn9cbfvNUCP",
  "key34": "3ZSukPhRy3GKiCKZPdsEDchxuejK2JsdR3vBeTqf9BEJuYE4bGECjHUsJeSxXpVsiAsfaowikEXGNR4c38pJW1oB",
  "key35": "4uYPP2LoG49NtpgsicBmJTQrb9M6Kq2pd6GeRMKHikXRfPSZq1GPboFkmyPhEECykdZTrR4vfFSrdx8SGLTfwyC7",
  "key36": "5J2BpUwY71xmuni5ATvrQwP96jvFCgjCYe8qH1wLsAsBnT5NJrAHqkoJw4kuGBm5SHxHBkBVCptFoMj7uu3V8qbg",
  "key37": "5K7LJeF4nSvt8YeEtQo7KrvvtidFcYEcKsRJnUAa1oVGrHa6r7Y37urZXUXi3iQUXboxvN1ZWEfsNRo7A3kzswZY",
  "key38": "4juRCvLQUK2w6S3kvsNYrkHtFBhi11rdig2hRFzvKEa2SzVs62NaU42EstHKCa2rNuFQQNxXwM1R1MpwuuXKwjJD",
  "key39": "32wpxQdJAVe8qYVXfWpXepLWyrne4dGAxgjAzL8Mj26kU2QgSA3sLc4ixhoSTmYTPWjQyGqUpf86gYPy7eV2u9LF",
  "key40": "ZyEcBXduDNS3SKA6ieTctvnErursqi6AAjKwpuv86YGQ6Ug5RRebcHLjKuMQmXY4bkQSkmsGWvo44ZD9dikwS77",
  "key41": "2YL8VXGSv5MZKsRxPK6nF7Fy8WHEXPQR3tZfFJbeBkigWcC9Dp9zH7K4v56bXJVwueM11aoUreVoc221XbGmZCXJ",
  "key42": "3dZxirosh9v8w9yAd5venC95nZ8mYGsoDZev3qxUKyWpoUA98vT1L8cFKfBv5oHjwpLkDDFswbkYRtpyHMbu41ht",
  "key43": "4pe7u99WvrjEuUu4QSBCsT2dgLB19bqFQtb58GhN57uZjj74zeWwV8zDsLMnf7wjagoV6RvqsCycFKxmiytNbGiR",
  "key44": "2WiTsWgYN3BoF386n8PvhhKyR2VfC5AG9XdqA7w2YwdePpWaWQqVKniCZbA6PbenKvAxZoCbqRCjQsPGLnDwWRzB",
  "key45": "3scveGz8m3YhmLEsrQcqbstv7L4VWf3T1Ertq2e5gb8giqvTFxbzRvy7Lk4kGPvPZB4s5yEFvNkS4GJK6F5nFSnW",
  "key46": "5ZphyGsmyPXcy2zyUHptPNT4BySKCCiRucrhHb3GifcmjXXkyJS594rx2xYuje6b2qsVH5saFvxqjuadx1Xn9LaX",
  "key47": "ktagvkBYxGgw7ALBKKt6V5ZP13crwFpuRHRozue6UdhkwpmGXzDCjY473Z8gZLNb5orQeyqrXk5dHwRkDA7EyV2",
  "key48": "EaLoqCF5DeXQpWbRfayts31vFWUVJueQcaUgdCenvWGZD9gdNWecyAkn8u5mshD3Epmn3rdrqfxkNCRrsYLCLLi",
  "key49": "3yAAjTXhZx8NW4iehjxu7zUi8mXqnPGpgFf9ZghqaZXnWwxLb4nry3jWP71S369gnbLgaWPWEkZ54yqJYJvBHh9j"
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
