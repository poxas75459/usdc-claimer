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
    "66aasxm58W5oY8M45BuvKLkex9dbdovtXsAu36zih8mvoKFaHU4Q8j4smXHo9JmRqNTsg1GwT6o954u8ovxnKjyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBPgkokXtEAEW8WB7KMB8T6VP9PpTtqmUTn4YdCWzchP5AXAtkMwC9ZWR3bFnWjXo5LnDtv7sDB6CsiyVqy58PP",
  "key1": "5g9b8WnFSERCB8RmMYGvBYt3wyEvBXV8cXUgBNKQneWqb6MaFCLnBqTYu3jeki8sgujvGB59JsgaNf1AiZx35bs9",
  "key2": "4BN5UczBa885Y2htbapdSDJT5QH8AVTm89MVbMQcdsn7CNiVvc5pKKSCAioeGmhY2ZUMcUkz6FXcsZ1Zqpcc1mma",
  "key3": "5UBGkzR7RN2MR8NPjGR96yX4awtVnsCxnNJrppqh1jqGJQGvL8eWGefQ6SG8ruyV5E7m78P8UUYu3PBpWGv2GHgw",
  "key4": "26JTeSN5cDjXS1K6PiiSv3DroP52ZeV57RZFzjcx6Z34UQAPuJaYQ9qXJMwuLNN4jqcsGNuSvp8KitP1ATb8dKpU",
  "key5": "2EyA8dLvHw54KxAYRTa9AVQXScwvimrvVNuqeEEVnrypbpsa7k8ZqPWmwmTucy2ZL11g46xgyyHfH5v5jejpz86J",
  "key6": "2K2Lf6d38JPps7cboZRArbiJez5kozxN7MTcT8zkfcz3PEo1yctPDzMXKPPY4LEUUVDbdCFYdttf8quDBGJTmbsZ",
  "key7": "5RUbac4X3mejpbcfW9zGKiFc7tDbatk9YVJSrZernMDBR56W3mtawfJ4xCDdrXaSQ7YwXWakevDv7cxmTraEQVR9",
  "key8": "4WoHguPm9F7624wfZyFyYS1hfKqEGr4BXjoajzgNn1Pk7h5ycsJAMnkwEkGMPwuGzde8GssYARMM3KrKdX97XtAU",
  "key9": "63zXBWT9D42vycrDXhXePoR8u9drjJEbJ88XkmzoRDBeRFfmqdzRHxrS4n6GTpW6Y5BErr5tP8dtf6MwrHF8iWKX",
  "key10": "4wuS9TYkjZpHoB15PhUzjnjG5kS7wm7q4scvfzVzVmBS7bHGtVkpJiZF8ZudRU8xjgRxFt9nchoumHJnmEn76Cmg",
  "key11": "36VMkW5Ced7cBWEiLzvTbhS2ihZGBtJyLiggUoX6QTRhjuZTvLm3v8ahZgsJpxWZNbaHhp4m8kZua5WMbDLxaC7H",
  "key12": "46Vt4B45fDqyj3cDyAoprLDhUYchJiHyaB62ZLqh6VjHNcMH1VAAXbCrbTm4DkxZfKRjEGt3WGd2BMHhrjbnSi39",
  "key13": "4rSUrRkcXrzWedjjn8msBGGftqsUViu26SDW124jLUU2WRD2HoQuS38tZgZsaJJRyK9Dt19vGF1btXoamXNePx2x",
  "key14": "2TZ4zaaVVXw6HogVgdgbFZPvtVfb2WoZPwA1UXJw1Lx3RtCEQQ6eghqEMEbruxVL2BEiZvpMrgkQ3gW8Q7p79KMW",
  "key15": "2xLaW9cD6ZEKrn5N43hPuaK93akA9YjGguBF1FH7Py1XE8mGVupwboQX5UAPHMUMVukKchnZmDBUypLSKXx8yitU",
  "key16": "5X48cRgqyUV8nEQcH6hBJRQaSxfq2WnQKEawBY7SUwbwhjdtGzpaXVvhNTuygNVhBxaZh6Uww3E72ify7xDQosHK",
  "key17": "32XC68vwxuJSwSiyTC9g9nrVmM3anwotMujHZ8nc7njMWbu2F2QzTuaCkW2Q85EDEAFyuFxBtqjudpMbo8BqNgiT",
  "key18": "4o3kT7k47dwibJALS8tdSkR6dHUVJ7DxXbeNuAiXv8uww6FN7A9FmCG6iqyhQeSWZEXuSmeTgsT6GYotPGKo8uJR",
  "key19": "4mvUgkUjqnhfwvYdEoRcdsaaNnyoj1VLn14EsVPYMJnUUojSvYhP4bRLShnbdfazCRCKf3XVbb3sdnizrpiuMw4i",
  "key20": "5t4D7C3DqFmEFvSvbdC6xAJQgvDMp2FnBcoN5LEkWFWdLqNZci3BRLfgPPb5771kiwfFwaUK1NB696c5D3TVNFJY",
  "key21": "2dyvXo8d7NV2VC6kpYyH8kvFx6GnhPSCgwJ4vN7wzkmw7kvGWpiyoNJLmwMqP1sKcXh1bRyTZw3sYb68atbPyJyE",
  "key22": "5ntBd1yFJ9F1uUmS5F45b8KiE1aNFtxo7hj1Abobvc2WHrgx1MxFQJjFFi4ybtavGwG5E2HEgxDv4mLkW61skaVq",
  "key23": "2hgtpWomTRjBJox34ZJzhNcuQ3FgYSc5FCMQLjnADpc2Sg9ybYKNRiYsSP9s5mRBr8AvpSc9QRJEaVxwXdkMNyb6",
  "key24": "4vH8xm8RsgwApmP19TpuQgKfy5PfWHMDysnoDXoqmKPbApmk1rqEeKFPMWRPmm94rXmYqgxdTEy1NA8HqWGUBxAB",
  "key25": "5h3d4fkhAPG593bmTQVDUTx7TFj5wf9srp1AcHHkqeiVH49q6Ltwp61j7G43kNUP7eJhWQjz6mrp7XaiH84JRzV2",
  "key26": "quzgFb3gS7S3YMUMxhqnbaAHitHbbbEXZP9yc84Rxmhtc95J7kTNAHkwfDLGnz4WFsiQ73urqoiisvYXxJRTp1T",
  "key27": "3VAXDKJrf1oEWTRqAL4seZgEDa58ysorbtxvWjSRqyYGQG2pE7Y74TyhX3LzzXPqt8534JCBVuLC5WM3SiBNCiZm",
  "key28": "3jE78xe6iYsrsYrnCcFv1Y9ugHZhpRRWFEfqN9P1ugbyftLAh934AyvUZQNWqybxu3beYe9BQHmdCVL59MkYkoRq",
  "key29": "57GH6BXkM9ZfmbAw2z8KcCNmRQ1qagsV4QQNfcZ5m1LbF7zSMmHTLJ7andAuxSKQ8iqs7nGHhn1FgBWiEQ4hDPpi",
  "key30": "3qRfZuhjUJbhkkspEygdCiWR1defiQfimvxTJgc1DqRSrqpR8YYsry9FbBg8UnpZ8Zo9yvD5jdMZnqf4WXH8Vzd2",
  "key31": "4R3UpFtCoeuicdYTaaxZeH5ehRyKijVt7rH98dyjbzRrqMXxz4JuvqsYVd9MhaogbZnCrqubDBw4J6XW3fqNZqCp",
  "key32": "53q6yuR8Uj1VCcVGBKHUcLaQUTBBxzz3rueQ8worZV2dfySm1D6ckgATRigJ3dnZQ29dx71AJFGLu5o8baSrGzYm",
  "key33": "u2svfjfYC7ZZMJ1pvJbKBocRbhxihhQYih6QQ1AYjmC9TL6na81PnLz5PidEXxS19R7SDGtVkyrZcBQ2H4GQptW",
  "key34": "kagWCqFHUeRySa1WT2X9tft95jwAcjtByh34VXgYYdgUWBqbWdmiSj2XS3j2bRZvRUfGfay8kG63xCCdJGH3o1z",
  "key35": "tMcP8jjjcTXpDuiotJuxAH5jLRMZskp6BtVdm9aB4KVgun9L2Eme4MAoSDHxYEjwZZyTNNz5Wma6zQgodhutBZK",
  "key36": "4pi1bCDT5pKgBXnfKbvNjtLkRAXJNukVYxjuH9JAjCiHPfEVKVDqsSEMxFLiqreYUBLGFKJdRUBUfyiCC1xjeHVY",
  "key37": "2Fb2GNYRPk28uYfQHp3ySiJ6VZNvv7o28pj1vFSFLThyRBYHvS2p4rMS9bPVPoC9js7FbLKLyV2dcNMSJ7pPEUPd",
  "key38": "pukaLPPLaLbzkPTw6pnjvuBQh1kPLDd5HA3fLqxN4h3D9fJMiqoPVGt35KroMwV4WXfMqdjXWErDpxcb92dJotn",
  "key39": "4EuNbCArmBZnsmpuuBcxQjC3JPBbHKAGoc9MtYGEaFEoLXkpZzJuXYJfGaCS1xStHkgK8EwsjW6BEwf2FzwfdVY5"
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
