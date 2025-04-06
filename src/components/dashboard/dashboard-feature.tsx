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
    "5rdTFVcuy1s39fHiSq8boaaacs2rMdEzo48zkgBZUYmFpFpTo4xnc6E9o2ZuMnD9NqwgLvYori9vATubgCpy7BUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxxLZcjhWPZQAkrYsR2BeFar98X3d9k316c5428jDFymcG3FMvWFA3o7Hbi27HXswQZigAA3AHsNzQ7sXxvFz2G",
  "key1": "dpnfXHceBtk8Pg2r5UUP6uR1yLszt813HhFiJWcfnPUVzWjC8rLoSmT5wRycAroH37x2deLTJK7dHHTfzM7ShKb",
  "key2": "5uHqcbmWns8KuKRxTNmhsPNronYP6T5Cn6exh83ezDSGZoAV9CMipgH3QF173FNmdKqLs3cHMwLQzLNkY24FVFQQ",
  "key3": "tti3Ehm1sXZKEtEcuKtQDXpiNfqLdeDz44bwsQwmGryRWfV3eF9yxfz7XK66uLWdUUWpB2fqmDrydeof1D5gF9H",
  "key4": "975eHFASwMLeeCt8bobNFKxfUTA4CiWgbKVqzeiJ9tQjKqqiP4HeZVAAerLdzcLJubGbN3DLLXxLfEeeFKfvh59",
  "key5": "3CL91R9gnvjFHcVSgQ5t4hQTR8rjvUcsRkW8zyzr8GZTLVvtet9N9eQrrQpVSqA3LKRFmdghCXTCLCS643DWqbiK",
  "key6": "3vNAfiEXKhHiW9L9S465nesfksoCnHS3eGgC7V3kAZnTJFAGoyjXeDfrUW87nT9qevYHffbNQtqJsM4288U33PYS",
  "key7": "rMgtwTghE5DUzCXnUZzLbDAHswxy7GgpGjuPQQdNotD2pJi4Hsbz8j2QifeibCJJgASJ1qn933ZcJs3KJVR4xmf",
  "key8": "2tsFwSfz2ES9K9tZmHAuhKphzyD6kJAWVervMHLT9A8F4fHdEEv9iuNEgQwCiC8HaocCGsc3SCBMNmHFhxb5rRzN",
  "key9": "3QLavJ2vZFcHLqDHBG8CH8hCTGciQdWWbwSJe4rqScnPrGVruQWx6DJ6g7ifmMvF41nVrPSQ8sXGsvzu1Qerbtgr",
  "key10": "58Q9eDtjnsaLZHo1NvdL5uApQwnmEz9NYRp5qYXZFxBUGMDgjwAtptM8BRdPnswEzmnmHFpKh9yAHCXZ9bsb9GEK",
  "key11": "311zYinEiCoV9iuK1b1p6eoB5LoJfJ3syhYYvHKCHqPwbUF3TgLTQ6t8TU4Jag3MLSB4CM2HXyMWpeFkeFBuQo34",
  "key12": "SwNVUFyC1HJmUZJh9uabDa2CzxfQBmQwKtEgK7HPxZDADSY5TXNsuwBCXG3oLAKkosWt6tiNcGVLpJAm78NmvtD",
  "key13": "4JG4aSDpf1p3se9iLdkhXT6ZDhSb3LGCKUURK2wbqYNruHsAHWxvntJt6L1X4r2PuemhRbj3oYQXcUq8PVhJnEY3",
  "key14": "4BEX5hZX28hntyx4gqUsj8YBgaxV4pe7KpiyhZGp3vjWZhtQtvv2w2JbUVeXPCfPBMc8jvpM42U9dQdrVJWnYn6K",
  "key15": "3PWKq5npdGqkLsVbKGqacWQQStt318FcwGTZqkhQUP6zyjbQsSMXpjQ1nTekXpof88vPt5rHTpFNXoiRTA2ZVC4G",
  "key16": "38WFhT76cBLjjo13tTHZQDeV9fauJX5f4gYHQPvFZsrcNBxjkxwwJcKz8EGRwopQxyesaWLu8XY1gABe3Xy2pPSf",
  "key17": "4Pegfp2nFyoaBJZBnpZcHToW7bwDgMVyh1s3FpgvadNKLJEYFiB6KwkRrW7F1bqHQBjsooK99QkdEED5wVsyPPHN",
  "key18": "5vQ6vvM6XdYFC2M4HiaPE6eXgqnCnSqGUG9Qn8qK3z31SSw8Z9BLjDzpa9VjncUmzu6rVCHJ7B1cwJrgT4P9jH47",
  "key19": "4LDqMXgNPytH7rCDtEy6WZERkhSz4WQxESgFU4r78YaCMmgNypuopBqYWU79tMf3JydiqBe56UNJCubD9s1jgAUr",
  "key20": "2XBuqL6yKEC1hBSddhmvkGV2CjTeL37mdFznym5BpREvLT2XxvNqhMRPU2H3Qo8ej29Wck2o2jMxBp8BxdLFWQWJ",
  "key21": "iK5f1WTRDByjXY2B4ZGQwLyx8FzqUbUbchwnhxU5GjaWsW5h8EENnLwGYaoMvLTyjzRJ6ZEH9Z5Rnn5TopMCsEP",
  "key22": "2RNWHttkgkj5e8cXYmMRYsLvg1xbYH2Leg9es5vfmYsW8zfUJ6HLGG3sKWqxtxghHtHAcZS7XxA5aYREpHnKoWnK",
  "key23": "4yCL6v3XCa8GyK8mxM7A79iwqotn5FqojTrgVMYc8C5Fw57rK1aty8YzKnZZesckf17nnXC5kVeDbUskHDtsqtEL",
  "key24": "4xGkXpE118DgEMVCL4AFApByrFfeTFN9i888pCifhQEXPoqqXLy8PSUY52HCGMJDQCHUhK78yq7Fg1ct85QbiTgV",
  "key25": "35agYRupqgcK6i2e1pSvViWzUEkZDLYBm8D68JFrt8t1cce5QcAEXJyS8uJJYaCNJpqEV2CXgg6ucJFLqdprqk6v",
  "key26": "sxL1J1DdnBrekqEimxNGkhCUcJKvorz4fzVb6tQSRQPUL3R82NRRN9X38PPNd6ogiins8NuPHYNBv5ptX9h6Azc",
  "key27": "49v1eXpSqrZfHhbDYZyUSeJyCDUhjTB52mpixDCoQxsokXhtdNoQSp7yQpTs64ZNebvXkmKjFvPidWkzhbzDS91y",
  "key28": "5FKU4T3vHUi6nKESRdjb5dBRGvFT4tQC8B2u7Vbuz2QZTXHBN8K4KWWepiooZYWGY3k55xfVVXEF62qxevf3jKSv",
  "key29": "26G6q5k8LSCaMXkB2rHFzEwvFNE6wEBtQ6if7Nw8mRHzf1YKczLc5JJcBA8hYm9XTZp1yJ3dp1s4WWspmp1fjcFM",
  "key30": "w1KtA5a8ryPrfjteKnX4gVqzepUt3edpQcvVUFLmtQowRGrFxeBMkasTnew3ZnyKNSg2HPXqjZzZf9pJY4yN8cR",
  "key31": "TcZcewKAH7y85kEzPRwYnzLHmyRKypaBRcJLeGe3sNKG9NEMBTFw5o1Ac3M472knEwBahqPfucFdTx5ExVn3ABb"
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
