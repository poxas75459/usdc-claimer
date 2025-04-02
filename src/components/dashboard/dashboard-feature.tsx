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
    "3jbAAj7LupVguaXLB58FAzhxxFJuArB1NvMiSSLgaaBwfDG9DKLw7VfwApqmz2hLuL2zBW37NWw9BYYgBVnqRfqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZEnbZ8Fxsq1qZrgXHsFA5DWyG3bBCfxnJR9BvmKFRkVxXUx5LMTcxhv8fKzJpXdZQZjuDjA9Quv8hs1xocxayfk",
  "key1": "4sQYXQuCxtx2srskCEPh9PyUKc253YASRG4foRDXPh9Gstq6iwTTtMLBuTV5C3MLt1EETFruNZxtAi3Jk9zimR4D",
  "key2": "249PYf8njLsYwzRakNnpaVayg9KvYWcLT81dDwzs1ckJQmnrYUCYGCQXjz6E4ttMHhSc9ZJNw83vK49imDdXBNWX",
  "key3": "3au1RVGqqdfftCZRs6j2m4vRxdWZMUQCYMtBKnDQ6yhRFjmbVVkrnFbV77NpaMdfsHU4q9LP4hw4HiP1Qokqwvbp",
  "key4": "4UbYQEotsZruRT2U1Eok5QLjfYcwqMr6sxhSL8nq1w2kY1ffbKFakDk1hC1PBQsVYq119jyM621DnE7p9AUhw25r",
  "key5": "22HLrU1oewLqJ8rybYqSNcrBEGzbX7t3ii9N4sTiFGQf4kNYnZPCNNZjJTaWLptexTDgf2WLuvK1pyGPh9ru8pym",
  "key6": "4YRf1vS61C1fwjDsbzAeVWc3Hk7uAEWgsJPcTy22tbs23PrrqwgrT3VxzSCfm3DLQWvXyHK58Encg6fyQNzhbku5",
  "key7": "cEtqawaModUbv666XNeWY81A6dA1EtnEbcjHfdrp8JxntoZ8hjjqxKGPvYgn9tsx4refTYidVEG1tGc9sPMXbth",
  "key8": "5ETcPXx9Dwrzv9U3DsFuBdZAhpm7syXtk2FPBVSuGZgmWLSu3RKaTGLFBrTib5eCriSybwXJrWnB3rCPqAAVJuiz",
  "key9": "nv7EsXGFCW5Ybdrk2rg2dmtUMS41BRD1cn7mJQjbq6MRUCdikBe1Ths9wW2w4txYie3YPC8gkituPnMkGRw6euG",
  "key10": "4yDYnwPGqQCENir9ssvVqZZQGBiPLKu9bKhRWBKxfVAfFNEy8cLBgotR9HTpi9UYPY2agnCJBpGazVLnUCH15PTS",
  "key11": "BwTy9qDN18AEdDwm8t6Gmo7t486Vbz5JnTG4YdAiV6rfCMrh3qg6QddrKvTx5bxSnHYVT3ygUVULVskbbMwi83N",
  "key12": "2GBCd3xApyvS3Xjp4Mmdq5w7F7S22qqV4LgUue8swtfy2B6AG7PwBuAxHes6PLTtQMbrzjnevR7MhY2EWf3qfF9P",
  "key13": "3pAYDygaidREEYrRKCo8wwAzLj1JzEWrzFYnctzT7zaohM4HkZiuVS1dgR54jCSxKdXwqmu9N6kRAt7234q1XV1A",
  "key14": "HGfBMa4sMAdWFHgxXs5oKMysGxDGaJTjdnrzwLq7b2xrA5HPy9FSDAiLeGLwftadxubksWdUurCQvwrR7BmqfCS",
  "key15": "41yTNdkRKaGBsBd7tmDHtkhW6AZggtdPyi2tJES49RLdPnqxYXXZBh3ygF3fsE7HNQNbCJq99ZMKyWtgUhw36ekP",
  "key16": "2UrRVYgd7oVfcKJnowoP1ByttAuocgQhZvSyeCLyhofPUQzjc3B5R5b38ux3nYY2tpqhaHYQAB6NCRJcEZ5nkPas",
  "key17": "35dJiVYEw4DmC9P32VhdEXqvnF36CA8gj4UjVZC6JMjqSYKcopaG3UuMzAeDg1ST4CqqqAa4RAX74npqgv8d2fNJ",
  "key18": "3VDQ3HqAoSq2ZiGDpk9o465trRqA6PyMx1bjgnbpdKLjG1nPNh7T9FHChQ6ZTnPsigYoVpLwYQbD7HyHfjaBRMo1",
  "key19": "2KSK84WSNQWk6CcVdybmt3xFdnw1ZpJuimLbfKK7sHRfvqQRibcUreWr6qVHFfs9KBitWoWyzeMD2659xHqjy5Ci",
  "key20": "4HyRjxvJRJUGa8G2vyYMosn7MVWCDo3f4ggXCvhf3eEXnuAjJAWV71S6YwwqSE69xVMCGZe945HneaVt3SQzs7YH",
  "key21": "5wEaxwNNEJwL8uZ5mJcMr8a6CXQAA7dHL25TXwngZDRbqLZXs3KyfASvgCLXJDNWSd3vPNiKDD17etMpfwd1YrAM",
  "key22": "3CSkAVuboqmBH631NBCqhXnFrpM6bLDYrcRGmc5GRQXLr454yUYBVCmmYf5s8H7G6eBj9irP7rftEAvHEg8x5jsn",
  "key23": "5Ab5WVJyX1j7ozxDvcYbUEfDPZkbnGCKvz5eGR8xkM857GxzJxA23grT9ec9bprKYXLwJxjLR6BzbEwhyBzD1hCE",
  "key24": "5DC4r28mvduGrrc7mxHNrt5gtB8RzydiJKuFGC7AygmExRCiq4LuvEFkQRwgQqCivuZhL4sjunpNZtz54wow73r4",
  "key25": "yX4bmqkjT8C6heeqgRCJCVofo6MScik9f1XGxESVVXLzDVchKWQ8b9fsScFWLMM5SeG289C8hmk8KcXndAoKeAP",
  "key26": "4PuSCAFsKcy3wHXPEd6fcT38VKg1mojtUNCnC2jTjHPkHimDXSSFnAFNjtfQPA45fyTBMEBTnPD6KV7qiBi2NXox",
  "key27": "5NUQoqYL2qupzp6qJ5spXzp2pBngEPJuAxQWeYPDkaSHJXmqQ9sHubSYP6K8Di9847bMY7iUfbyLn7VRciimRHkX",
  "key28": "iLAza6p7CuQHwn3WrvRnqPdVX1MU4YDxLhobS4ZxoUKP9wcvn6evRyQuRT1Wstpa92kUwFpUygS8LhP9762ChiB"
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
