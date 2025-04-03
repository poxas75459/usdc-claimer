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
    "2CKMi9ctjbKfhQUoyV7yniQXhpaquozAz1WqYY2ttwzWjBw1aWMBQKQxrUByH2SStce7TRnMfENT9iKbU6QSA7Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otMxBHGyb64ZxEiMuL9jPTUhYkxBzFXCYc44Wg8uRHnN18KfK65wZD66axEMuAndWRHtAN8fyj1gtetHfsNN8EJ",
  "key1": "378B3JMgEek9LpAq8QrwBKHU9ngHtaDgbPndgaQtzSb7u4g5gc6ufCHccaoEVpqhQUVt9vWSM9y3NDeWQPBUnoUE",
  "key2": "4ghVMJTnZgog1qzdvr5BZhVu7fYu17wsRkQ9uWCBpNF7Cm1oc5VyQeVHD9AkCLecKpvnQJHr5T86nPA1BuNDsjgG",
  "key3": "2KLFZTsP8BP8FAygpU7438x2kb41zBGYZVtNR6f6xPxTcMns8sJgJv11Udgct1YysAu69K1csiU4Y7FRjPjo3ypd",
  "key4": "25bpRLQJGQQAm1ivWUmjALHx8FLwexNqC5BuxYLnhAZ8eTatPcz4r4xtcN6BoGauH8i3DPCYNdshBxvQBna67hHe",
  "key5": "KKpLcV3m92B3pF4Nq6kvWWRG7wEXs2c7tZEVkCqPVUma2bYtfXxQaSTh2JvmaRT6pU5wstJzhMQHEnRqbm5YScX",
  "key6": "yJaAH2nmndtd1aoyV46ihTDar2nM9BmjcrwurWyLmAS9H93561xMpRBdnmW3wRHaqUyqa3VWzNW5VxXxMrUUR1c",
  "key7": "2mja8545yy8s7StTzDgcRhaeoc8GChLRUpRuK2obgfQ6DBcHJ1tqxNvEZovVWWc5aqnAuSpZZFfQED8PPhdWRYh3",
  "key8": "2MmWaS4bbE575aHdkG41xQgKXKooThTZCmJmSgDwrhiyBX88XK3ygGAQkGmabuUSVNKF2tbyshmCCGLjBEE4Zp1g",
  "key9": "5LHYjr5kK8twMQmb8AfZp16RHukujRu4KVXMTnqcVpvN5qXR8zcpWoRjkjdBTdEQCZZyAdF4hVaykSG6M9PvotbG",
  "key10": "w3ZuiXDCeHf758prX1nEEDjkKkp5Fcw1y9Dr8CwLGsTikAUmELPQejBDjsy4E8K5Zqc6KMNe4JtS3f6rEy7wW7m",
  "key11": "F7MofjR3f7tgoE3E7LJNwknbt5h9mjBF2DLy3R435hSoMZ6KgENrCk1Zdh86Fnf8Sx2FRhbgW1cpHpWY2LXhitd",
  "key12": "2EpTe5xosKu7QSG3bG7PKa2nFwpp4ahSwyXzFfrHbKBjJz8AanNsXR7z1WJ2ssyXihCsRT98z3drpsYRn4wrsi9g",
  "key13": "5T99f8JjnwUGhoMNeFqDhoNn4WrYtQBi9p16j9oRdCp1BZm6gyXSULZoBRE3VJk9WK62DpUCxZjNwEYDkX9XZKrX",
  "key14": "2BnEmuxqvqGRWJoQqNh7v27CXqyDDE71DD4XMmgXoMHJ3GEyhomNMeoxjsiH9FVghyyUDfg2boib45T6DTnvGhMa",
  "key15": "LMWWwev5jbq7tapsiupDPWmRBfGEyfVxThUx5ZcoxRkU7qoRvHVjvBhLhVKRPVxWpT2fdL7PPuV6h3n6rfYFD2r",
  "key16": "5R69VjPEeUykfNiSXmea5suqJ7Wq9d5qY9qHBECRdm5q7KthTegLvRT9MCHn8z54qxzvRULjwTNzXpGPE44AUmJ3",
  "key17": "4eXyruZFXTXPLGdR7qwBJuKYRiXWZXhAxUAK8z7sA8USn3dKS94D1v1VHfYaH4Do54pBixUpGpu8hFKvfKVepgK2",
  "key18": "3GqgrXTcx7m9Xm6hN9H11JiAH3hW8Pdro2gNyRhRQEjq9XVwafiSCrJHTjq1PsGkpUmwh8djmGaeSL6dKwjPVSSv",
  "key19": "4Ph5gU3ABoNuXDhtqR2VXtx4VgBmU8VbqnTrW357MSNgirDn6UATmWGpnstJdxhB6aAMJ6svLQJcjtvp4qeR1piP",
  "key20": "4LUcXqBZmMaLjMQtqY5gNiZ3FZKEjNfmgoGuFVc5sUpjfwQCxShEr2KsKnqR6UJqTczm5VFPw8vKN3ZJTVuHsoUG",
  "key21": "iaBZ2GD7zRZG2HY4h9GdsaKhBTz95aQiLaV3TnCMMoh2tHhHQoHJHvRRX7v7ApN5biWuW9aqSxLcwxy8UT3iH2U",
  "key22": "5cmyq28qp4ijFweKMREpnPMEUjVbSFoDJPjyKD4C2k9RadFwwxrWcXNhJnyZERGxsM9bRCg2yECCVpcNBZ2iLjH5",
  "key23": "qsd99Vtf8yKTCggpAzX9R5RYARXb71jNHYD9yvftuCFkixJ5ATyp2XjojvTbgNttieqCMdUYfqHJKnagBP4838k",
  "key24": "X5y6nc4jbEiGuePUN5cnZUFbuNG7xpzJg28Eiwa1T6Q7iHm2BPFTBwoMByT7EK1b4HAtF4Y1BWsV6HgrfsEbr4u",
  "key25": "4N84SJ8QPpuvpNH5HS5vYM6r82qyDdJXSYCwojpQXS9jUHcThW1LCqVvX72izaAGaQzSgRZEeLTwtKW66HhTcAb7",
  "key26": "5rBx84kbKeg19uxxy7PeJY8M5C2gK6BrPHadWCDFuJkgvn9g8GdLGhqj5qp51bifmY2XytHkZPBrRJYu4BmUrFHc",
  "key27": "2wFQYXuefSSzcSdAqeuVLUFw2BrSTqxgWwyFvw585NJrkMvXt4LxeRAZ9ZtGLH1KhoC9NusYJppZbANFys8BFVUS",
  "key28": "4utkv55JJC6qpG5B71bYEb2Awj7A1DN4AmJaCfdWBaapkrzpZYsnpQ7UGZkBfN95VCgwJSvoQnM52CJLXBh4vaXy",
  "key29": "5WURr3txGAwtXADuYgBSVsyRR2ce5uB5uj5MWqFzoTjwpbWqqwL7ddmvk4PUCB6B3znRWt5tteE7yukLpT41yEHW",
  "key30": "3dLG4u3cdUfXTkXSEeDjTAxiu4zHW6PdcPpXY41qpFgGGHqA3diSBide8yBP5cRphwtDFyZHWGjPNcCgVcbuJVuZ"
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
