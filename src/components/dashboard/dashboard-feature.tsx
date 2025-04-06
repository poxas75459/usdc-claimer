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
    "23ij3tG7wGiNVjNDPHJSbQVLtnUK2hw48Q5SK52SMVW56DQK9enZtn2uUheyX7vENBsksdtqh8wbyNcQXYJUMrZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5yoA3w18khZ2HJ5FNqrMjwnWLDroFQ4Wr5rfQSMWtb8ZkobcX1Jd2mfTvk2gUhTNHEpyR9UcpquxyTrpXxm3cy",
  "key1": "62jpTQkd4L4QXSA1Ai83HSimG3HLewfvhj3XWaVRsrQXnwxbwLa6NEtURdA8CSsirvcooEDgsa7r4qxjjJcDcoS8",
  "key2": "5admdZJCLkiw2XsRvRdqrGdTy2YfcntgA16wCrbByNKJJHvvisYaH6n3nCrGS74FuyKCzAs1M56aLyrexAS7u5z2",
  "key3": "41pLbiYxugrfuq1vyeVhQuPUNf5NoH3SYiat9WL5WXzbU7vfV3ydfLsGrtyx3xjeUqKmFyUzPfD4SdXuZYUhZCVz",
  "key4": "2nYNZHnsCfeC9ckKapjzrN3S2Jwttr6u8tyTXdbbLeHwoEsUCAMDT5DjYmiNMTexNLG7zeCMCcK8bC4bmrS55jEA",
  "key5": "3tFCxR79wefku6kJTcNz8aN4aCJZ6KH4wgnuRMTSQ679j4emCiQF7YudLXVvfuvYsD4soPpeMbrpAeJZnt9BQhpw",
  "key6": "523SJLkFUg3r8XYK2XRjcqbw9SmBDuQDHP3VMKaQ7EXZT8fVt7wzcTwNTsqKCHVC1H2E3q2Qdk8P9TqUq1hKahGj",
  "key7": "61PvxSx9sBvkbphG5Xja9BM4gXw8yA2Dr6bepxwiHGJSefinbkGWTWD4GQCXzdi3BQdkoaMNpZEBKdLzbDvceofi",
  "key8": "3yujqLjJuo76AWTczACHsBAJnkbLf8SfxCUWqxwgqfW7jZXFfZZ4jXbxoa34VyPVSYUwwzjxwTGFQzr9LXPDYcCo",
  "key9": "2LopMyj4XLRbutRmr7xD29zPpNwQfFaufRdM9ywmZsJezx4z2FeWJjFcSGJ54jjsSeuYdnSRLZ6Kd9EZmTd3cQUY",
  "key10": "2FNjqYzLTmT6gEDaPwpGHoBHxkiyu7Md4oULC3F2eaBfE8K7sS7PqKqCE8Kw57vHHBiRKx88MDWhb4Jqt3AWfokA",
  "key11": "4eQSEwvdBLKCHRM4XGSNh2PynvsKR8HsTV5FRgQXwQwZD8AGZptEMswZh3b3o9TRJH21X7QRZoTPMxBBGgYapHgw",
  "key12": "5wZrQUKMcJHnAeoMj6Br62chJdTxWS2ZPag8WrcCP5cPZ8rBLFjRatLZJzmhkFjeUyJ6w549KhrvzgdKbwFvv3PF",
  "key13": "2zirVqKSQZftgHpd48pzenZT3bdc9cn8CYEbd7UQQL2ePYPQQK71HcDdNEHQKqoLaykY7wTuY4ns1ydsy4cmgy84",
  "key14": "VnCUFkLD1v9u1SxnUhgHGdAGCwzHgTcwQSo3dPZeRcfAHSWrEtFUGLPQ8wvZn5uamrJKWYT4eSNrEYabxKMkRY3",
  "key15": "4EJVsxAFfteiHu2uKnrLcCymAfGsWzTU2Cr1mV3oKynAuScZsanAvKpt4tCkbXrMmumU1Xw17pZA4xZooCVMjmk2",
  "key16": "3A9hURcDMyh5SrtqDnJqcuL87SDC7bX4NxdJkURadUUPNxU2taFw6KQHbH4PB6aeYtThKiLwGQSLmzuKXd2fVogo",
  "key17": "2KbjJEDXzoL4XMjGi2pZ9BMdfk9mKWoedoSptNRVgpAAZmgt7kaBwKdRDYQ7kkZLHpDqkRZfaPPPTHi6WjJfWonJ",
  "key18": "2c9XveQe4Vy95jaiwqn35yqjYnG9PjfRLLZrbRjzde5TZqHrK7NYdQBZjGic3jJnUAbu7tq9MFwhRp8VUGnWGdmC",
  "key19": "ehvVX6WniTxGSKABSu8fVSw9UmnG7pTDMxRB46mm2CY6R4z36JUZEdaDLyJVcdc2qbgnHSf8qdc5da5m5KHNkPQ",
  "key20": "Rw2V3S5QpQz6sfAapbPMA1sKiBPDN9dAU9FmL32Twha6MU9XDQF3k6iHvNWS81PkgqoZc98YS55ErQZY5wkvLpL",
  "key21": "c3qLPuecbZZuuotsLwtKnzZcEuGuGM4ZqJBZx5h4QoLnVE1TSfXdcMiwg5yCP72EaBcvpuzWSYnwJux3RXDi8rr",
  "key22": "4dJDwEeB7DvRK7uoabfR5YTTgYLEoZtVMywWWNqS6iBPgJax4GV9JrhXMu7JSkCfQVoFQ7mVTxuJcNwVLEWTVfmU",
  "key23": "4Xc1gN9ZZWnQh1QLprktUvbWfd8ahoDfyV7T7T8JjYtPG9SRBuuqtQ695HWpK9kidVmNAWMtA18Uht4xPNBaj8HZ",
  "key24": "5T9Qb74nGKsqUFTg7Kgp5ypYiEB9obN8SjGrMnDGDV94E7zEJWDgAQPHtpB2SXfibmMucTctLtVeqy4qNwdVXQYJ",
  "key25": "gZqBYXLb7G9tuA6zXfYw1uRx9Ybip3CDDb4kCPExcfyqwr1342Nam4zHke2eDDF23f29ZVsp66vv8N7VUoossLA",
  "key26": "5RMxmsVZ3eJvKV78q2j3tGm9sJPSXgnGgB3x9gUFjY61FMYqJyyvuQjMtXZoK3o1GpAg9jZw4Sr67Hvh19pC6FZi",
  "key27": "5EJXZcgDyTSi1a7PZJ4ra7zwPNqLKzJbdLpUwfPU4kSFMgiwox7TtnjTJZWpPzUvwjuK4XrJT9bWcFabVWKntmSv",
  "key28": "5eNaB6JpM5u4zGcsbPkezgTYaPzWCa4PNDan1jTM1Rj5x6nL3PVPhbF28dLRd5hBGc7PCwSRx9tjdBohyEqXgLdf",
  "key29": "3nXZkHcjWqzAkjATw4aQjuAMSPhM36q82ihbruYSZGqvFMQ7cfy9QxZXzJZPxpK8H8mfQ375qbXob5RNmQ4b8puw",
  "key30": "42keMV64HDjdSkqWCRcPFp1EMNs2vpcbmvvM3FP764CJtg9QLEVsKe8dzvcoZDWps6HJxqgNsc98BXHKTtpqgKAx",
  "key31": "4sqtnp9kR5TtfxuGQ66Ttp7YvhUYpPw2pPaquQEqKHB4VWNXH5onMFH2bvL9Rye6hcyZ4pneNqXYPMT1v4gwyczQ",
  "key32": "4ymeuX5LdLPbmCjgQrfq9vRryiwConFENV7q7KxKk2QzCwhXJ2gpnsQxNU1kWScBW4pbMjCfeVq7fcxw2KhzT8HZ",
  "key33": "33FgA6KoGHyGynmurijZ524sxej4hqpxmrDdZqPgydUM6aKpcybheD9tcaYASXzrTKm8w2pS35auajii3bZtAFeD",
  "key34": "3VfpfwvDstrMgUBWz5X1oGbKEXG1e1NXtb4spF48YNsM5HYwVZovSawmQBY7imUoLfRGPYVm1kpTvPdXVDedJetC",
  "key35": "53ao6R3NZE3XAM2ky6h9UiSPUntqtYyqAQKiANVtzFpqvEJZ7YJqEjfWpU5W2WTK3So42tPd52iGAFmDsBnmUmGn",
  "key36": "4EzSofs157tqhwDeRiN3oRESxQQm6HjQaHimNZwoAzurGKbKmxFrrmQVohUvxuUYQkEbg2dpdWEs7JrjS1AW5cD",
  "key37": "i6FPeKFaPfC7ZyuXbSkkMbR4XDbRsxtPkX7BKLxWeeYdk4XkhmNzp92qxqSaYAAdE5SQG12qQZ1DZ5qACMyDk8s",
  "key38": "2p2Vb1JaP85eALdNcPLoBae1aeAsMmnBJFuWfYWuENtCe8MHxtT7PDKNpGQ5RQ1HCAc7nookwa9MApk2DG75Njqv",
  "key39": "2VVwchzsVC8FycVuaWZFXuzEk3JAmxaa9NEK4Hi7wjiHwDgEXVTh7YcwAK9jy9yabyWDiH9nguLgkQuLTEG2NtFs",
  "key40": "5Y2hNiwHdKnhXeEbD3uANT8LmrGpYRwYWKQWYSNVufuca8xUPTnGRBy3VuSFiFyA4USEzND1grv9osPWm7x9AxBm",
  "key41": "62k7dbzxz2rF8aWoZ7iFy9woR95b2Le9BZrcg942gdW5qykCtFPzom2gKqp9HuCtshtxogZxHfCLFhibeyJt4t2o",
  "key42": "2iX5MnXp5iG7iY11Vgn5iXZ8U3NdZDq7LmbaNrRZmhSiRuRFTKB7JdyYq1iV1985EjgKinhiQXC6qZDeoRwut7jP",
  "key43": "5c2iu2zMvwpJc1HgTnbkRPJdSUcjFmLxDKutzJn666qCuFvMRBRFfK197KfddHcANNjq3qXw8phy9aUaz3vKGsra",
  "key44": "3Rjo8YovAC2pbPJh7AZZ2YGd15EU4jYB6WnyD6289jqEYLJLQnjYerQtNXmzGiLQG7JsTxaJJTbUTdcfmMjvusSj",
  "key45": "Yor64pVZ1ZwcxoySx2gAV83nWtW9LZM9GxBfwADJbjyo7aQgCYqsH2LBNajce9TzCL5AVM6wWAcvUKzUP3R9mLv"
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
