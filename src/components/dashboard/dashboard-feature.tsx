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
    "2yMmcNMxcUMw3ziHFsGK2DnL7T428rKdjMqtDnzpiT3SmmhsL6AGccnxZmwuKyGy517XRMryL6egn1wU3uKQGCn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575zikTJdp9mBanffCLLHhPZDsTyf4tk7Ha68SZMhuzH8CeXBvRuiz7xWSJzqCXRKSrtd77aK4P6byL5h6Jno8Du",
  "key1": "2LsTZAzPBABX3fENEWUNNPGkpbJa8bsmGtGLesWVsaNeouw992ugdGeLJEH6GPkFb95n8F8BytqRkuVdZsYTBsWm",
  "key2": "2sSEkJHjzinfKmw32Lz172HxKyr8cw2NeyhroAipvAU81CRZ5hV8KpUGLEn66k7YkH1FEbMW1a14nBXp9ckV6FJe",
  "key3": "3CAaMFfMCQwE7TqyVpQHMWP9smLQu8feMNrjC97Fa7zJGgxGe71Q1BNsXk7vnvQjZRmB8YFNgAasYZt7WhLXp3ey",
  "key4": "5Cnp1564Q2r7UU79FaBMFVGMb3Zg8umREjhMMBXhFY7DLcWyxXENEBx6Dz3qSwdJE8zszpNX1d4RT6v76j7ndqV",
  "key5": "5uVzrR78XEto48peQ6CTu2eazA1wjiqhpChsi8hvWUejPbWidKFZW3LRcvPp2TrX5WBgXryRkyR9fC8V7BEHacb",
  "key6": "51C7CcN6VBpYU435FBnpbzPPx2iydG6uibnK1XCpZs9jATZTGxTqxZabfSv1Z49H1NN7PWT8Dypf8zc7zDUvJ6bT",
  "key7": "63Da8aZcyZH3Yu2rnHZf43amfsF5LhnF4xMbxCV7rpZ4bJbrrCmT9G1SdvQASd6g3ETJfYn6YKqXKmbzJpGh4tsk",
  "key8": "3d3SVVsfMwSpNoQFR3W9fE1Dn8zLsH1fMoEmuXL3QoyH3pRLURuZ6Bwev8EZhth2qviPM8hPMkx976rVSWciDdqB",
  "key9": "2kVuqm3P1QqBr6oeWJu816kfk2HbLUhfo1GzNpqHMrhyNzPPf9pkyRLPfaDRpbQfJHwAAvyP6KkWiKRx8s4azLy5",
  "key10": "5nFeqVX6sLhhG1AvWDWTGA6gzd3FLm8xDD1Xj2E4ebcg5E1C7YkzNDHBfXurCbtUT1iEu9MhokruVqr97iCB5XTC",
  "key11": "3BbyjyV9hTqEuVuJMo1V1auBmESP22hmBdXXmNqT39tHgRqVDQsnYdkEzWTJc6kxVdkkTC6zWZyZWdruJTfvMSdY",
  "key12": "kfmqmnqLLbs2wHa3rAAMtNPW2697ReeWuMJ93mUmSiMqYquL3S2aVsKQMsZXFkArWJ6RK2YzNYJW2ppthTyxeQf",
  "key13": "3N5GFRqnd2ATfyvoWjkZNzUjZ74EFsbwJEHLsS1KxqLWMzy3GqT5aB75oRRP8h9ipUddPrbA7yehYdjuZFhiGJSf",
  "key14": "2ZEmKPiWewVCQb2cmhXJKvTs2mjDPnxgfXa9Myyr7ete7gTEncMBKqnBHKpzX1RaTetmoU6sQmUCDqUSKgZ4Nx9F",
  "key15": "9eatp8uY2NrBWwbEoufqf4KbNGG9B4Cg4AGnUzckSyLA5MV6jTWYy5f25L535T9UhunvynrApTbb4Ag1a88ig65",
  "key16": "874aNWjuyRrs5Tp1henR66uWswLkd3XHbUYesiC5j4STutvv8mZMBvi77qddkHiDwdA5DdM9unLqEkhJ4Y7527C",
  "key17": "3sLgJjNyBskp6MeLhpVy54EDdXwPbF4pYd4yuA2NuAac2inAZTBWo1es6SnHjiEnnJFecScMADnE13mu4hGfcG7T",
  "key18": "2ygfUCQa9LMEVWTgSfVhpx41fpiTz815APiBw9GJboeGL6nm5R4j49FNPDaisitAB4k4hWTPCpsGRKrEYhoUM4P2",
  "key19": "65DdaDQXDUVfoKrNhETj4P3RiA7AMLMDmZJznCsB4CUpPtmDKnedsS9NRjkAjvxUSk4g4Brwb58BHLBjG4u7tG4M",
  "key20": "5PTrd2CJbguSdp8z6dPALtgxVXykW5LNkzoaXaboGQoNbkxDseSZLJEP5ajEtxVueyQybek1eECn6SRQtPRfeAcj",
  "key21": "5j5vQAdXBP38kVRXFHxQw5bMHsPcGTuNgLNiApYcfh7drWGAowHc7zfwgjJ2ghduWopHMyCU9m4Yzq9pu8AWFtWj",
  "key22": "sZxc3JmoM3qkpAipWVmadELnWFku5miN8x8bbSSoWCSwaTFHo9DtgcmdQ9pXQB4FNhka6HfsMH916GEb89TgUNv",
  "key23": "3To1NaggD4NQGFk3YMt4CvkUk5wqLsmyp4r5LSA2DmYTJqv1pVWgpbPVdWSRDV7qyj7FfaZJPtcNToTTHqwbpjaU",
  "key24": "w7s2Y69oCxxVW12nuRuk9U35v4EtZbjfMgP5GiPpmk2eqFGWnjJtK38GzWqfkuJeWWXPLSqsMw3QsfLeCMgVNAB",
  "key25": "uWsMQ3XQHH57j5pryyLJAVTAYWpoFw9gMkE6n4YWsMmk8qaJRg9L9Cv8R9TE61bLKZgNJ6B1x4j4U89DW8wz7Ed",
  "key26": "4zdgVDs4BqLKkBVuQHaWWsa4582t6ZLyywLE2YceL1YemBanFF2fahrRvb8sSzvvrsB6Ufa3EYTdm9m2MsbWTCmp",
  "key27": "21fqrbfxNLzMY3yHKXXbUiwypVqQ4L2XTaWj8uoEhfS3gEcKsE8k2XUUSrSVby5i7YnqnrgWYDJq54zV3t9PSdVf",
  "key28": "3Th92J9g5ZNVGcX76wZJZqLNSCBUhgEXc4jLbN5xX3U7RSf1PBdrmCo89mgo9NUJhax4usoL3PZw2wbxQewidhKq",
  "key29": "jrCXKi15zS2xsUjK7grU5WADbyd5mrd6EfJwcUTtiD5PzvR8XwBspEbZwjszR1i1L34KCURZ2yNq46GneJydx5e",
  "key30": "38nuPt3QhqQDe6c1Kgmhaq6kE2LPQkmhG8SMa31gpsRBAWQpM7gKw78rWZTMmC5oja6BpQ9xNBWj4GoYZd937b89",
  "key31": "2mvxM1E8bQ7YsGt9MGWr7bxHx7DTmnrfS85ULf82k84YtznRUn5ahjtFDoztzc5pzKQmpQ4RXQjES4UcbFrEwvs7",
  "key32": "QzGu3XooNJPTbjfydwfqPbeQPZ4dhcuKvZsFwYjbKDm3vY1pSM4UU8mt9KMXKKBVTks6XXv2k4qkXbddsq8m4Vq",
  "key33": "3jSbwpGinXj7bZhtrUeuxRUaLJWtgWHL5RX4oy8LwSv7bkAW99aV8V2N9kfWsXjAhEiLioFdo61HWPYXdUSoC1ss",
  "key34": "5w4p2aLJSQjvGPmAJ8YBMnzpKYob7EZujurtwFUG36m7WkheBJLbfDTKHiDZSTiQycDd3XrjJcsFCU1e6er1iAs2",
  "key35": "3CuaRAEazDgHxD4CXVWNKj3re7LxNETZhh6gHwJr2PrF5tjDHd7D92sca4GS2Rbby2UGzVWrKYbMWxmCtaQJT4PM",
  "key36": "22vsMcr2k7W458vJ93JDV2VnGrZbWfApbBzhvWXJVDFNH4ChW5EA9xbYJhJeE2ZT9C5BRerVErToS3KCKkpES8qs",
  "key37": "ck5c3bCzDbutqEEJPtE7cZon31wUoNg97LzBpN9UBfQdqWv2F1NWYqgDxrVthWH3jW2fpamSo8qfC3gXT7s134Z",
  "key38": "3ptKYK7RbWNxHW9whWPwMWRULHE9NSZqvjXnMU4aR6wrgZathF8A4SYKTpaPzTuPVwtd7WeptpR2uWRh9cLwSETv",
  "key39": "5eZ7V3oBvKWVoYYvLo3hMfok3suDd7jDFE8RgdCWa9FUXSdHvXdcV8eFzna3bvkVKvGwTzocreC4V8ZZXz1kaW5i",
  "key40": "2oh2AFmupAu538HiB6eGVBMQh7ChP2BQ8npzvwfDbZTusptHycJWuemw9bKJNfZH7XqEsSHQLUdEqPHopDT3XyeG",
  "key41": "USKCKZQdb8xfAdNz2JJ8kd6HKS2LirGZ1DD35bEoFo4BauL89rLdvucxzGogw2TDpcHJgCgPka68QD4cYGdNsho",
  "key42": "3gkEWmvhqo3R244t4yS2woJ5trAoKah57Z9QPf3kAxNpSH8tGTfWMKo13HLpn2BXFcbdCPoGmAJt8tVRNhdczz2p",
  "key43": "5hcSsYSgx6gfHuNCLXe48CtHJxFHhdnMKMjA5R4R5j27jkH5avTNfyZkWUQXrxv7HBNj2jrKFhiT8tQ1Xixy9FGr",
  "key44": "3NWwce3LL7SUyK2okCy5kF4CPZB6QK1HvVhHi1EV6bS8S62PuBh7PWjBJxQ65v4ZmSYgRYoB5Ss5v4HgNWffQ8E6",
  "key45": "4rx8Hig9PL8TZZgmGX6bZyEcJcJZqbwdzE8BaBFwYAHQHZtq2zuCPsi5ZVNN9L1GmP6SjesvTPXgQ8j39pd1k9ey"
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
