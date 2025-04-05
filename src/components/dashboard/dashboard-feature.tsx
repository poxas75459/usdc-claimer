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
    "4cc5GMGRzsGknFzWke3i1hMusYrZ6mCk421SgEM7bJuk9TNcKbDDxaiYK52mtZWcTkUiii7Gv3LZfqs89WXddJdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGSsoYuqqdpeLpyxfiZo7qSNTUgWU8WWEeWLeZwrdjvDKQLWSQJa9VGKq4mD5ZWTYexnJ8Jqvz5FjAkJoW28WJ7",
  "key1": "4oWqfc88Qx5XiriQAUFXtsaAdYq9tiZUYMR7rHTzZuR21i3UFaDKyaTY8FdkyPz3KW2dvbtCrXX4412aYpL7QFKr",
  "key2": "dFEKaMmeWmS6AP4dhqAdUAjA5SZCcQ6uPSJQUMtePZboDPzJpG6WzbD8Ny8mxwDwaJWYfYXu5n4LAqtbBvX6noG",
  "key3": "4V3rkLp9jhuaKum32t7rJS4XyxXTUYEZra4BYumFzdb5dMRAwuXZwGX7dcr7hgSXB8DMg9QqrRHgQ6HTX6tFwqU8",
  "key4": "5HquNP2Vj7PvtGp2eyMDzQ37ohtJsgtdzj7HS4y41giAG7UgrPTcLH31Fc8wyt5YyzLfMxpxUp9Qb4w6eEkguDtf",
  "key5": "kThcJQCtzQ1Vmotzoa7jdsNAJ9oH2bvg2tJhPM64oSFk2s83RLDWGGYSnC17onWwyENpJuo2oYRumSwmqHDZQ8G",
  "key6": "3AAMUnHu6PrbGs6BWXoG2eB5kSkUe6vXN7NeCrWFAKQjfznaoV6CS2emF1M4pY96anac1bVFJgPxz9sh1dg7HvTy",
  "key7": "2SEu8LmeGZSsAoHCiDk8nNygVCft7dNSj4wWbAGyitiPUmhL4Ls7kk1JebwG16fqwsFueUnRhowSTGDS7jMCN1u6",
  "key8": "3myu6NSJKkRzytqijknUH72p3KVPYxk76R9JrCMChuZuq8G4b3cTbRvYSh2Q1gEeLQojByA5AKcobkfLtYXckJwn",
  "key9": "4VyBNx66nPM2WcMmktECScSiu7E5fC6ZS7jDpzzppzF2xnY9szeAASjfWw1ai66aeTJQHYUc9W52rvRGyNXWxufx",
  "key10": "211ewE7sy8WfVuZWPZ358LXs73GaD6hfMuxHa8QkpMwLofcm7aPNZ2y5Ft18tZdGVCmRTjoVWmNHa1Z1fKp1ney5",
  "key11": "XePtcjjxoYXEHEKeFk83VikFubTTN8WosoD6doPe7Fvug7mP5CspPK8o8N5FvJW2jkCejKR81zg36ieFnTpDXJU",
  "key12": "4JDBY8KfavVVUpDfcTT4B1h6NbnssKKHn13Bc3UwYQjF2fmcNuaNC3muoVeV67MUFUXPvJUChnCjPCKdVPReFwBa",
  "key13": "618bvZHReiJpEs3noE7gVutqLJu5d8AUUiWfcD2giUMJ7fEEpGAgAsEE2yxkRd9CH1d6ikzcK1yEYJ5Pw39jAkf2",
  "key14": "3kFJ7qwgkgj3m7h1LDf8WtALkXowe8dQUR3TkKnuPXdFd2bgRbW7n1jgeXnJui7SdtEXnTsfDzNYMmJcveNLftPn",
  "key15": "5jdrkNhACZnowHvqqbvi52w9gxMwJZQmuevZFzTdJams6ujYqPje8Po5tCzGwsSi5FA4jbd8f1yVegJUxD8vKTqq",
  "key16": "31RWYN3VZ8u5n5CWgiHG1enLv7XYeHtu5frLh4H2vXVQeztvWug9VBFXfpTPkKZhAzFGeDhwJZaSG2rJC7LFskza",
  "key17": "27uqxvZzKs5bZryh6vwukjFbsHetHiVLQYPnzPGpWGqr3DqZNNp2qBp7ev85UdKu9YzFBAJtxDhz8jAzJ2gdXQzg",
  "key18": "59qtK3pPisj29ngWTLBqrvkthSd3hNXerYsfHpGWce39V1vtZNGUJFVcSKw872SN8KacaVwdVtG4jjAv6c5eByJL",
  "key19": "2W9xCde4dxttTWD52xZUEnyVYiE3rgjx9s3n1mjpTjSiafoyX73aez3kD2saedssewLjGuuzUswXn6btjXaY1j8E",
  "key20": "4cUY3MFWq19xLR1UfLhBpwd9feyhz1tKo6KVgyff9UTztanGtyGN6do2Le4J8kBzRnG71v79WXbE8g2du4T4H1vr",
  "key21": "5z3QSnhRWSjL54Kmzjkrn7jmxCoDsGrPgDgWma4gbMzZ5m4oeKzgrGpsmeuAfKKqrE2s1vtqCkFUKwSNVMPmVShQ",
  "key22": "2mxtWZokQrtMEdUK8hSHfVT4G3puphtnDtmHLA8sccQi32cXYuQYCdrZSxeY8DFT9Xr1Tadb91KDXYbXkjrk8nak",
  "key23": "4ScUSZJNfqGVfVwtVReF9xqS6UQURWBXXo8eJX5pLXtvFcLCTwM92sE1FSbbJ9FZFXtrBUpUgvNYwUFcQhZeZLY7",
  "key24": "2FRhhsRhfVAZCAp58ucq3XhtsuHQ5EAaNUzfG3L96ZiXTsV7qR2nWAv9cLWDY76AnmsBxiXcfRkSAkXNnTf1nRcB",
  "key25": "5CEvZmh4XjthYN5ZcXh6bgbVs2yvMocVnS9ErkJF5963SjWvnBquKdehXXPyvPQjnmpcKEQerZL8jjHgxrVmfzRS",
  "key26": "czYRuvcrUEjEo3QFAH9HwCFRQQtKAsodwgUnnkvSp7uh26NVENAMxAJ4PMsuNDVWRAyGQhthoh5fy87iKvqjP6L",
  "key27": "4uVqDJSNkhE6aDY667JtPAPm9b8LJLdzSJ5g6BvLwyLt6KH1pYhqcdpJw4CDbUBqrWFVvSKeugpceJExyYz5JHDr",
  "key28": "5b391q2w4z6TxpSG2akMj5Dq9X7Yg8euRWCiUTWusXBDw9n5H4A2diEpP3EgjSuqQFsdg4Mf4YLFfctDg9uVv5wN",
  "key29": "29nrGdL8VUbsxQP7ABjV32HgVbwtKemZqxkpfLUK62wi2Z9ttB5dVpj7qqZ3vJfxMTuiAygF9CfGto7suqiZ6nTF",
  "key30": "yQUdm8GNd41m7dCqKTFyGbq9MiLNh5dbBu3tuivNXaVQ54i9zwwJStzFtS25Enpkj72xRN2gjM2BKNfQ5WhEeZD",
  "key31": "2aTALvTQSyKRZ1bjpQA26fFjG4nuNHW3pJGYAEKPb68KifE7jvEuFcJAGVZrbLNX6d4uJ1wA6QbPF6kGMeXyrKTb",
  "key32": "4QXV3aMrpmhMLRGvjKWb5GCTq7FvULLWojNp4Dubfuidny1DoaTTCevwA8e9t7ryr9ML24ChjY5a7ffjNku3J6oz",
  "key33": "56H963aJF6Mc7n93HxJLTEgfwd5cJde8KUWNe3t6qNRGjwMtz28GUYSGHW6NeLbKoiv2cU6T7UE5jWwNSA8Zp2f4",
  "key34": "5fudWtFYv4Wf4oFcBAEG2YnhghehZtC53JU1zv1vGagPN9kvTqRYaAKH2XyrbBDEmjYzW2y4n5vwAeSsp7tKV1fj",
  "key35": "2rSxtfQFcj4jRChPPh5qcY4SRDDvAWdtDrJ5fCnBZfvbbEghDM1m7WNnXj6PmDVAMQD2dJEKSLQJcmBQ2jF9Tcwt",
  "key36": "3CQQ5kSxstWxjiBqGVS1PySfkH9u9E1dZspkr6M9bQxJCvEzEaSRyV7h9KVAeEkogGfsj83vUZA8TG891eJJ2zNe",
  "key37": "tG8rfz2REs9H6wWqZySrisKT9LzCFTrvLQq2vyCvrfcnFnoRtWYaDRfPhg2DXhKyLKUgrs8F7XxjKXyPHkAvt5K",
  "key38": "2t12UsziencPLndeMxJUW9Xzz3HrX29Xuk39k2MC7pCCo2X5Rqf73ycwp1b2QP7BXoxRw241X4aF3fFQ321ni2yN"
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
