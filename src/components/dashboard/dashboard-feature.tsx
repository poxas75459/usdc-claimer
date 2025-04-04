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
    "3w4sxrzNEVQtQJjxbXuUyze1NqhfpQRMwkz5P2aunDwunXAjYd356uP7Wr6Ehs3DjqgN9DtsUuQbVHsnVa5kp9mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674WgRBLvjrgbrZyWAMZWyFNfmQCx14JzLeagQc3mUoNBE4tpHEgTYdSJvj2Z8F11Td6UW12Tc7xwhjuwe5LdHiK",
  "key1": "5LroyXxQZhBz2DTBjRu4PwxgSgR25ekRDW2aZ3686XGWNMckuxiPv84XKytHh4mZhXYBPEh7U1Aw4kk81kATUFUp",
  "key2": "2kB1rkbi7gVhCuKUeryhNQ71TEQZCW68T45Pr7mZkj8fdzXBMbP81cY3c73wzs6wqiiBtBvL1jnkzspdqXHNUHCS",
  "key3": "3VkXxoGzzhXyQNu3aeYiZsfg3zzKq8HQbhKBmPH3ZzPGXVUuVbb83ToWwJ82B2kJMyaNuYTag29a5TiDiJecj4tG",
  "key4": "2Tie9eTVhhJr45RoP2rokGVtWkLewEghhdvCmcGFFLAnDUR6ncJVEs8B2gr4svZbQb1mqaXYp79ryau2WqHoMYki",
  "key5": "2ftBUKRe9Xm6uNSrXudvmUShZRhvbRmQMD1XTQsp6gErFdTnXzvsbEX1cbsybFKzsihmmMJBQ46UGuGFV1Bp9YSH",
  "key6": "3kd72FA7DwT1UqUqZuahfoL3eDL9evNWJDoxieCSp4D2NonQwYUgpZHHCr665V14JUWLM3bgKS8erjbRkSG5Bad",
  "key7": "51nmWZEWTQDNPt11BpSo4swMFZ6QgAydU6PMaMr3BKxhk9sUtafvBHnK21yW1Q5EGjXZmH7xTLS3EYdBKXQzYGpF",
  "key8": "4c8U2zeNQe33XJpGyDuto6r9fy81ndy7suPdbEFQjYKESMGbRDA4QmP5uYxha9s5kiHG5WN9hZ56zDkL1W8azFY7",
  "key9": "4jRzYaoz6Qr7HV9vGQ2XGctp4jS6FCvSyM6eM6cJv1ez8Fg9jPziS1osECp8oe7pNEEDYLtA9Mjzb7Wdi2n5Njh3",
  "key10": "3GDvmnw3HrJffQiPoBzLmi8GVev5QbgPbERJKaoDqUVWS28E3VRnPktZsZk4P93URxf5eh2omLMXkUnE1CdEkBx9",
  "key11": "3pzv4uFPwmbCnJQtc5DH6ZY7FsTAxWzFXbjYVV1XNquDKQfUme5A733umWFUKeURAm6EwUtZ3qzGpCenNTy7ysy7",
  "key12": "5zcbadRM5nsVXkRBeENBGUQ85CMbKZn4GZxcKWLBThz98eywuGTPhYXam5JswHbBtRi8rWrPJmHNVABBxmsKdEsV",
  "key13": "2GK8XtbXCbfUGXugGKJr9CNjk74s6jX9MsybeX7xtWjGhDqUTiTefJGFicNXLMomoaWKbRz4yADbJPEVhj4ohga5",
  "key14": "5jWgK8Z1HV7SikZvt3xywBi8Ywye35NECwKBd5DzjiPH3Zx2o8Ar7NS2TcdBD1LoA7KjWnnKbyFDiP8Npiqe5QaN",
  "key15": "4ppA5whGSVcQkMzWwkShfYQYRv56j4gfm8kqP2ZCAJT7XTMRAQ2nmzUbwFzXw8aJs9boH29dry6Tntw3wgJhw24q",
  "key16": "UW4VjQncqBaptSBCrB4LFsg4JwHsSxX387pRyWBmh7MqoqqPSgNDhZgnogNbPM424FkaJbz9StHVXCuZsubj6Z8",
  "key17": "4vZsgAGfnuX5JC9GVW1UA8tQvgVNh6yLs2umZzbP2zyC9GgbkGbPsTgN85PEJpEwacdATUDEmKWVTnfhhmZiZDzS",
  "key18": "59W9BWDXkdFZqwGRjiY6xzcCCGkNgLmwwvdfNGU1ZR84ZFX4RfTVHNQmZLdtDDbMpbrL6FLYWLv4ZTr7PuRqgs4s",
  "key19": "3gHmCv5g6xHTgVBFcXQYQTU5fLfW6Hrfpriiv7vUurEzyZubtrkmy9D949FP99AAguuUb3no1PpM3V5Ecx4WSzHq",
  "key20": "3Eehq9c3g9QJmiNhAMmaXJwt3Eku5qszXTVR1ewFdEk9nGpdMfPexwZkJNNr4RPMuBsKFfp6gCNGBWzFKcaecGMj",
  "key21": "iMcD4X66Gi925wCYH7BAFDzrManSSmjK2P4dzyDAoVxokMH63NMPoSZnQsLzJJzR4tUk6geokW13ekfCtyf4oN4",
  "key22": "5SgKXyuvmiZFcxNc8pxQup1XxM44EWdbkkNLZbqLkhPGuMRj8xTHunejmHg2bjgnfp6wJLhBAM5jLaSwuuPR3RmZ",
  "key23": "2giTMMHcjVSXDafvQpaNVb3iz3KePBnhEQgKB23aTGTM3bHiPMP2EckKSgSsrhQcNWgoaHukudpsLNVCjnhNaQAG",
  "key24": "4Gqw8h2Vkn9c2K7sDbYV8GbgDaY1NyYduTwHrG1yixhWwEThvZb6ZvbxPTGdq15YvAhm9B81WicboEPhdsRmM1uG",
  "key25": "2963X5szhqiZGmgi3EMiFL7kHMfZDDmni1BCGUabhsFMTd7xvxmGR9XnyyfE7R3J9WBFbcFed4vbW5rzWNGJKRwc",
  "key26": "GMrzGYJNsomvDrMrEgbYTaKQkoasPmNc3JB8NjPTaFj5qGnTe1pTxjE1fZAfQ3u2PbgX7C6rtMsRdbLp5YkgXKL",
  "key27": "HRyCFuKTXM6FeXnLvDzxqChBChXamjeRdc2XbPax1pxKPya2VVMV4RydBAodX69ycecuSuwn7BcWcxNnqrYMkwp",
  "key28": "kKsKLSjq6JwMMcC2BjfbJqJdGghPdmr8uzpAB6LXo9QKzCSSy4PEUWq9ubzfGDDXH2utkdSzdccweNfuLowWcfy",
  "key29": "2zwJgbaTyRBBNiziu2kismsitbjTd4DXDp1v77LGrVRS8xScCmeR9GdUDgNRzzzYocEhCBe8YUGghv9vKH2xLkBF",
  "key30": "56tA57UkpJC2BFqBPv2xAXCW6KZsE4cJjXyL7MsfjS5FKq3Y4oh4vh8bPfu6zufy3MWrjw3tXuL8s2o6kDJZ7hiB",
  "key31": "Qi9RSqfNr1Qd3nct9iwkveqJkkU63NajunqrNWhGRSx8Kw8YrHYaswxZ1YQ7Fd8DTxWcnhkCPSyNKk4UJPTv7PE",
  "key32": "53R3B7s1v6DWpbsC5UCNV6b5LkxgW61Zq5KScx6xXdFjKiBdse6c65A5qJWDe4eJ4Xc5gg5Jer2qSuedVtbnGCcb",
  "key33": "57wKkj649fRBkKLJeNfSxb543zzjUoCGBYZnT1SH5wZD4bhMMuPzf8kVanzXQ6P9xTUx9QRuYQYt7b8j7gLsrZB5",
  "key34": "5jxF2o3KCaNwnU1vvZzcoznNJ27yhCJytGW8o914h6vrTa8tXehPM8JW14VYVkryB6d7ooX4QsVyz4f7XCnkD1SV",
  "key35": "3jePkfNZxpRSDtB6mi3GZZSu6nXmfuFhhjBS1wqSuFdUY8HeVXJCuvtCYdx5cwxf8jfGpXMXDuZxntaLQ1GS2dci"
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
