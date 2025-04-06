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
    "3obDvwnzEAvKtiqMh3vPZD9NEtbWv5PHhnzdxN7LJmYmyDgM2XHEPaE6EqMP6g3K6QhwMmhK4Bjm7TFDr9koVvJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kA6PVsEUiEhSGXU1as1TDMbuK6nWV5uLSp7Qi3iQZav7sb8HDsVswq6oXQ3ZpLvcyULy3KYbecwgKMG28EonizD",
  "key1": "4Vz13wEczM2Zss9n5prJNCP7ZvCeZUTybuqGhEDroEoCnuRtH8EnKRXsc93arwykHfMsgCFX8pYYRBAMQnNzpB9M",
  "key2": "2cQeDTd4ZTCsEFWng71eHJcp9b5rabsQ5Wq8b6sxBLUxAYkSp9Moe9fJmGXZTA9pVHBpMHFpsrgm1CJNSHJv7fVT",
  "key3": "rtcgWnB5onhxa2VF3P8H39UVE9GwQykeTSDErxwheixmEwLLmwghQpMg29dhXj19pfHkzT2Ynph6JqTS6JMxnvW",
  "key4": "54nFUBiery5c4HrNAnQUVejD1awxyJHreunrqcsbDbAyjZdwPTRcrU4QcEqJK2eE88FX4po8ipFQF3igvgb7dtNN",
  "key5": "tAYrR9WddpH2y5tjxpUZVLzR6dKmPP4NGWAuf9VFkPZUZE33UEYMgGqS9rAAoNSYdt7N2WUmKrQxocbpL296UnB",
  "key6": "33KvwLNoEc6hDqwHyotiVBsQB7p7Myp4XAdyR882iVkxxb4ZLUwRHyb1Scs3XtYMw3xXoHUxVMCnHvkyQGSrBeCe",
  "key7": "5irv76nq2Wssh3ByVRYbga2HUE9x4Vc8jHzvV5MRg2vEkV98zq6VtXbJP2rrjCDhqBizFJFUuBwFhNC1SGSLhSmr",
  "key8": "5H34LFqamdjfvud5FzBcnB2EGt8tsU7oJyQvuDnzVWvbUAyJ2Tr28F2YMFJHZtJM9m16WK3zKEKHA8ieeRr9t2uJ",
  "key9": "971YFYYGxihYfdfB9rVP1C5ayZYNAhgW8QBVCXbubwLoc4neNmCUgvF7Cfverpvwsg35Sa9ZWc5C8A8XEej22AE",
  "key10": "3coygZKXFrhZL9yTT1efSRBTcKkHTShQUvFppWcJQPuw71nX5gKHo6gkDzEbwWNKKx3fdDaSKLHmUgRNPF5RGHqz",
  "key11": "4z5BXNUiMrnE2x3gwfYbKEuPTgodYNAsnhGo29pFQEayZq7bzpxWhu9NdTgnnnjh44Y9DRd3E8u3bgDixEJmVrPN",
  "key12": "3HHNHeu5c4kdbHwCAEXSFjTpajvsr6jMw5LKb3ZAzJiPhq3yYdgESexHHGySarGH3o6yx6nkNhZKyzMsPp5jSbhk",
  "key13": "34aQsFdqAxX2L1PPcGLre2bCaLVo9XXyAcPJiGknhTwH3VyRC1YLNDp3sbr2e6cghCqMjUzWC8rEQDkXLFosFNPF",
  "key14": "59KEv6EetVYT3KFXwVLHt4Ku3obwGSeVWndm3RSZjZ7FSU3j4qNhojUAMEnwkjj6wUcgF5hHJkH95fJcF5UQjR2P",
  "key15": "3YgGALhyfBJEwrCNmTDB1hZRkyx96F5oFsafevYcsdnejvo61rurZdkVegxe8YwGSMPv74LJbAkrnyXiDKKhWfN6",
  "key16": "CZ7HHEyWwsiYqx9qE3c9rUxC2Y4564AW2QrT9UHLEEvqzf2FV5AK5p9xZyduwWt7sikpAg5uC2U11Kpa93WC25b",
  "key17": "66G6HwuEQktcdXwdZnHZaQUrTXkXWw8LbokTyVCcAt8VoZfJsz1FL92z8zbHz6sdTxmFqPWan6s1MacDQBonArAT",
  "key18": "9h4yDogam22WaK5rYYqykd7uvxV8GSDm3Lqe9CMMZ2NhvHrbr3nmKczo47PNRH3kXN28Q2T2DpXx82S29UtaCbL",
  "key19": "5fJz5uGsKR14vcGdzMhvQwPMo6ZL9et2zNd9qQohkcZJbd68vDijXUbp3ELUTGex3trumQDyL8dkYA6wcoAHy8sg",
  "key20": "2wD1mCZAjEVt8n784dKAb3oWFyzHHE841rDtMkgB7dNJDhaGWV2RcDS47dfafsRsVC15o21y5ziXXn7YnFMt1byA",
  "key21": "4RDQs8DkdvBHA8XRw5sKHsToNejzJLogsrJF93ztTvKqoyts75iVkpMMbEaSSKbRciKJhgrbgmpdwo5ZmCe7CgPH",
  "key22": "555Hsf6iH3bnvDz4MzaHB4qNvNcfrmGcM3GWghfrbUGYukNfDtmB5RozaNwFCtHx1uiXpVUdsPkfGYfstzrxMFzY",
  "key23": "8pRwATmPjSQtjGvxV9UmqtVBfNZQSZ8zefZMDMbxFCGUyRbfUfG7yHgvxMrRsY7JzYAueEUtkCsCn89U8WVRFpB",
  "key24": "4xf3FvkqowCVx7XwLwoyqb6edVVtAjuiQZ1t5pRGJhCTvsDTxCPyJ9jeiaSS2kG3oArV239wSQmQ6on1fHjSpWY3",
  "key25": "3bV7Ua5vRK3fwcEyNtdhtAkyJLtEjbTxaS6pewfXfKSG1B8Lg9B9e1DPEv1o8PbmbtrXaKbPFGfgZt39jiyrFHue",
  "key26": "2nocyb94TzvS6Dgd11cgVNHPXJM1tfCixb7FBcrUdeh3rivtQbG3G2CGdTF8BsTryjrP25jsB5xNockwsFHM9Wak",
  "key27": "4jadUTGwh8cs6ecYC4wegn3RndWaKdWdNSvFrQBxUGbPZMV6Zs5F26T3DCfj6SazWhV7sSDy8uYxUaZEPDW5eTui",
  "key28": "3G6JVH5F4Ybkd2QgQZDVt62hzSprkSz9LaT6m5aA4k5tGe9z6jNQFqf3iat48mZPATShph9qA18hx6otfriatv1j",
  "key29": "jsQxheJyLJX5ysDD5YSu7kCyaqc2D4CkC4xN6sQwP495GzjENV8JFQQYXnQnmTVbvSoYyjY4TzoCYoFc4GwrD45",
  "key30": "4t7kKHLBSBBU4jsYBdLcb5V71sExPdhXV7DpxuNBSQmSmbpsYaw9tdBGFH5HZFvryCEmZtPDjEm3iUbzwhmCB2qr",
  "key31": "2o5oVt2WZiYt8DMMtec5VtwuqNcyZLET9DRvDbNs6baQpGkvPkDdT7dL7kFnAxCGfqjMYy7EzQCiR12CpzGjpDGL",
  "key32": "318h9YYia7VYMDepMXG1fRrAhGgm7TgsispNziBJ3CGk6BZRhinAzYniG9oHFp3NBpBazqX5yLSPYvgGMqcTuexn",
  "key33": "3viERW7swUBHKrgCpFjR7jBZr58WkVAxaYDLygPatkV6WJJ7C6JTRT4izcLJ2Adpvu3h6YJRim2ftNYUbDJrAmC",
  "key34": "2xE5JFzu6JYSmNZMGR7yknYi1QPoqqdP3MW9ctHf3NfSRFBaN77VmNuiC9QYj121x3GabaiLbm2bUBVdnwdgzz6o",
  "key35": "3vkWeK5kBk5ejceobmJ2rEQrTTXjjjRzYbdQ29px1CQcPrE2fywTZkFBRFivN5x7mz8TTz5x9N7CAWRox21cszpE",
  "key36": "2uSbyFD4w6KWpsPhD6ccc7o5wqLhmjRARuDkCLGuRKTC4xsVmZYzcartfkegj9jHwruqBfGzCG1ZydYR8MVt8EV9",
  "key37": "4Tjs5nSbS6bZ1LqmS8RTmSk2LYbjuqekMTz1aHVsDNcoiJ8zmJJdeNwt3i5F5PJPyqkeQiXs2ADeiuUA9tXKuGBr",
  "key38": "4YRqUMHkKzYRYD42P7n73imNoSKruZb7oSPLMZtHmU578WAztLEKtfVdqvTTaiVik3WBUi7MJwYip8nm542C1Dqx",
  "key39": "H4JRCSjxhkJS1wsRbyPNXqTMsKrT8wAkKaAy2oY8DZMCtfjdtr3jcTsPqoZLPWbuHk2tuvKgFsm18VUYkkyuSE2",
  "key40": "5zTzJVG4k3V1jDpXKaG8hzEisRdH3cuUWhxLQAsz2q95GjmrCLm5dygpx55MVfwDkoiNGxRH6vu2HseDvzQRYWQK",
  "key41": "2Nms9kqZGGpZjrFG7PeQQAfkqzsPEozX1BRUaRdAcz3setZmQ1St1RUnHbFgGmnnxWU7fe3zeqBHaAPMA2Prndbw",
  "key42": "3iVnQxWt3oXoboRsNLR6eSHfhjwtZWXysgigUa7MpdorfN32EYK7be6YszVguCFL2QHCapPNfyhcCVkKmY3JYSoa",
  "key43": "3MkQ9nqovMF9DzEoPSP5hQGKRsTNvirk48eoMj7Foh5ZZ7xqFNKVE5LfzaSxPj58YbHVZ5kd15tYrNJjDJivHsda",
  "key44": "mm54tRwG1tybpdrtRhVz6BycdRHcCXgbEJ3tP3ew8fbRhA8tN4SoPc47PTPLDABY7AGgwrJPxs5p2XY9r6V2K59"
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
