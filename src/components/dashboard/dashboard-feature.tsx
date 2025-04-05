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
    "5aWFWZCN6V4MDyafC4fFSGCvVtvKwUVVcZLbufb4JbMH3DEXNRk1m6rqZx26wQuhqCaY3FoMVFks4KVzwekYJoJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgSsYGd1uPUHv3g56FeJb3R6PqaxaQy9FcjAT1Vx4Lr8TneLKeiL6ffVeqTwhhXLy2Up4i8XqBDKVVevDLAqDJe",
  "key1": "5iKe16P7hQpbhxRqQQUkFnyJS6vEtTFcY51HeHdJ1BTbZySESBcMfnyrKb5CQsv59ktgocuHRdqEYC7eyZVu5b6W",
  "key2": "46e93rnpmy7M8NzEWwK4Q7FyFouM8Gy4g7Ye5JkuzjaXNgSjuu2k4ypsJe8MoFm3sPWcuPuCwe8LmxZHTTXVkN7Y",
  "key3": "2cQjz6otrhMM6H57fUU7uTFUx9n5TMXVNhgroYFkvsjoFFc7gSRmQeqjfD85KeYLXpdKWVjs5eD2ckmnCeX5VGN3",
  "key4": "39JYo3jHyxX7Ts6mdStq8Fo6BY3PksF42tZZvjvgmBVGwo3Xif2xcnigMEfq6VramsLfLsynZRJgUxxY9R6F6iJu",
  "key5": "28aYK6eRpSW4TShyEyC1mbCSL5Q1akzyxDMMqVojLfqeUjbABr9Hv2MSAgqxmJ6frhywGxRPzDQYT5WothZvG6WT",
  "key6": "Phi3cYH5ZKb48KQ2dwkrM85DzUNFDBnCbv1ZSG4az8552G7iYFrnUh47gJ3rbYYH9HsQXpRhmW97dAWTJavW5JG",
  "key7": "5hw1EUaNLARfFbxcXHM1wu4xvj3HXyYMbzWjYVR6YRWeVh1MZAusyAAoSBYR7Ew9JiWnP9piGdCoeu42m31zP2uv",
  "key8": "3xV1LtXHRzwMZeJTdZM5LYcxt6hzJMMwnknbLT7cGW9hSoJKpVSwGwgqCc1K7Xtz2Znef2k1zkuRT1zC6adoULp9",
  "key9": "4yEMH3L2CR45toL8fda2NKm2CVdx4rLxTCu9hE65PwmrbzEu5KCAs4MSz6PT1o4EETzC1cNt2w2vg24bxeyEmbwu",
  "key10": "4EiRAhGLvtthW4J1f4K94BTDxzdu94deqjv3DjZY1dL3eXtY35vBsXgkgXPHoWdW8PBt23jc2ei2ckJq9h3VBmbW",
  "key11": "3nyRkDTvLkgrXmrJqRvY97QcZE9ZMqaiWpfvHRmVyxf5EyRznv4ZmbveACsDkdofrxKeW1thiXa4YjJnDNUtoHoV",
  "key12": "4iosCjG3No4bygVAxNea8eWg8MhTffcaJjNwb3kzUnipHZhQQaZNRkfAXGjGGxj8mRJih1a2KEdvh5ywapkS9UD3",
  "key13": "3VWcsRPT2WTnVT3iywC2s593BJQrVQsgTLteKkY5EQ3uEnR5yjWtnCaehSQnuW7FwicM3JnttKruWhmPvSrZEWQT",
  "key14": "5dBt4urYcCCsCh8bQC3ZFQSGjrfJtjk648S48k5UqRAGTwzneLcuyEfziZ6ULtCSsaaVYw7yvJqN5z86rZTSNbnz",
  "key15": "57vyewbzUyLYWG3fvSBi7mu46f5vka5fQNHKDqWxvqdnv21MRbs34S3hsCycw1T6xEqqoLR1yzvZKCXyDc7GQXf9",
  "key16": "5sE4pSBFsbS9Y2iC2jDrzKGkXfTcA85vBFy1CszGGKarE5GYuEnR9UMYz5dCEoGcdHg4FWwBzEE62ufoPSGYMSLf",
  "key17": "3xRYVCVJDLjC5s94nEg3Yw4qX8rD7X61S2smDyBJiA1DDfq9YUw89MpCZTsbdM9ukaFwwS6woNK76wXhTYYqwH87",
  "key18": "QJ6tnfojJ3hdHA1eStq5dGx7vkCseE54g58WEbsmuszTe1YaMcsHsx5gokN96Vbact9Q6chPPidfWYzEkjGLLXC",
  "key19": "9rY18maM6Vr2g3EKvhhMEU22E68WNoNd7HHLgrdBp3ELKvD7fzBMiw9qXTekFpCCMZ3uesy6G8dEVGC3vRVRuiA",
  "key20": "5t9YvVAbXAfsWTB5Th8iwSizaqvc8fJMsZE3hUfdFnKV5pRhk2kwZdifmxXGFahqkcEn7bHsB1gNJpsL4Ry6XN9B",
  "key21": "3ntAkdLzFxpJuRp4fK4SMgeDjbrBQJvNk4wzJfZautMt5DknC6Uq3GyRh3WpKGBsyG4pq76jV6uEtHanXRw2izgR",
  "key22": "5dAKusNU8rWZhUE1g91hPfY7T97R9DJUUra1VaUpvhv24Ao7UspcRAbDpS79yt4UPAs1t35LiPVbWEBzogGbQ8VT",
  "key23": "49xepvY2ybFzvTjUdoXwibuHq2GXkr1Uth6q7nZYxnLsvkEmu5pHT644V6yjq1cDU6muqKyNxjpdNnBrDhVUSbgd",
  "key24": "2tnmURbKMsAj4TX5UtPC9V5wGGErGrgHDMVRe8Mi7AXprtdaENxwDtobFvt5VBQCFzc8xP74RbdF2t6ZBnuzyPjV",
  "key25": "5tXiLT8MindBwQ2Hsu15JfJ7RBwzrQ22LXxDU5J1XFDYQzHxZuBj2fRNagWWWpGWa423iLndqcdREhDd8rWUru1b",
  "key26": "5Tn5SbCfZuCTfM1qHE7KsrQ5YPjuScaVbyDKKx1rGCH61VC7GEFAu6E7DypiBw326Cbj5atdn2bMYzq4qZv9rfKb",
  "key27": "2fTjMaWr2ZzWBtr4iP4uf6Swsj3V6jSXRXR7tE5tMbCnNxsAVH6uGv5wyJApDe1Br1J5cU8VNvGd7nWxqpFkJe1R",
  "key28": "2FSJJe47MeLXQmHQoTENq4Hk764RwzGWkJZbeS4kJ7LFNajpH7ENEcT33unbyqarJ2et7KbAvJV27F3ti6Wx7z9P",
  "key29": "2JczCiAuZGYxDTxPWHSNCeGfBtFwyd2yXtwaeAbqocEh47KHcqTj6Mws6zdGNom5kvYebEXcYgXTmmm6A9uUmLk1",
  "key30": "zAdAnRMrtKG1gF4huQLAfKGhizhinsWQaTc914CXScrbFoS73jzQ8g2CZJzusJVqvWaMSkZLC8k2d1KgWZUyC8X",
  "key31": "xrZBYHXsnwWj6VmgGMt95UftX8M9CQ6dibaVDJBoGmP66Y1coVHQGFxdFSbBa3aTB5DDkZkPQiftmopmWSHhP8X",
  "key32": "2P7TCiseTRq9aQm3WXQeauoHrMzPFyqkCKaqJPd4i3LWfJvVSdTQWquJtftLY48wb9hZxJrmxLXrAoZeKPfdntnH",
  "key33": "4BmNyLrVqMXSZCi9SXCCAsKQSTEaJNutAqwE6LxNCkt1t6YwWVmoUFDbKSSpoMTuajBGF69HLhs4mSDSpnWCx57e",
  "key34": "4aMfCxyM2wYCbFD4ff2hAPFxdeCZ6DZ7vqJGDSyACvpceLNa3u4AK7AjjaQ56tyaxq26KXEXLp5XHSz5KirXN3nm",
  "key35": "21b6ZYqu2j3DgVHWQ7eCuFgC9z4jKLnjtovbrpGn4F3D5x7LCfVSVaCsgvtsytd6Xdx5iQd289izYq3UuKuAChKk",
  "key36": "5hxCLTVVmsrAVmuF1Dt9dWFpEMiSgnd4h3A2ZE87BfmyBxndaYS3Vg25f9FaTfJqVKF4ykfJeWyLCNzRTVGyZFRF",
  "key37": "3FQufeosmBfixozx8oJ2upYXYpPxfvTE6VZrUQ8nCWT4y1LJXMuXqDwi7on8zCume4ycqtCf7YPoZsbVUL5eaHb",
  "key38": "2VkC44n1oSophSmt1g6Ym9x23YECgoSexJKq3ppUqaDfRcyFJ7exAgBxzBui7mNcSSr7d9jVsVrCFxF5Xbrxzv7o",
  "key39": "2n6iTvVcYbYPhaJNik6m1gjeT6MpA2PHiWPtMgAZCncqLkbXXhJdt3Xnk61kSUBmy2KUK1tyGMKk2NYNc7V4HdQH",
  "key40": "5wyczhBfqdQCHDM8Z5ZMXjgthSfcv9KSwenzX3DcSj31VogrCQVnjYmDE8bgLUr4JECj6LKNBa7pD4dC4wVQQ66d"
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
