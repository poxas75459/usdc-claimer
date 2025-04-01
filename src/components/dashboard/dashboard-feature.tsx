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
    "3TkM7xP8KJs9C8RiNo8Q296VjFrwcY168Y369s9yungE5v9zpJzkhQKiZUZiPyzgtujwLFEdW993Emf4ZT2N5PLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvVEtaQdXC2JKpFbVt7xawUW3Kqe1VEvFNx9ghuwje6B7cr1mfNZHjY6yYx7KCReS8ibTxnJT5fyeEBDya1BhKp",
  "key1": "5RpRKd55Cgv4fvpRG3DJ9CoYi5ij2ZbK6fmtUahPNgN5aKzoBZsRz8Xbsxh6jMKkZxFjtZYGurkbgdUkAp31ixV1",
  "key2": "4eFQ4iCnkKEpmXE9CbS5DhsEC8yu8j9BYoUwtomS2HLhjuqW2TLqJmeYjGhXfemtSMigCKM8FsQbSnZr2zSszDk7",
  "key3": "biFDLGbBrUkp4LXTMLoBpqtaLGox9SDy4uiwagmQLttN4hqsQvXRJBmAnmG1GdejZb5C7qMiztgb7TSNkocNEEo",
  "key4": "52F4NrqHRLERxbhbEgSNNmmqV6V8cKPPh8TaBdJTDny1DyJ1bTGwjMRB3Gw3RiZvkxqE8G3f23cYzNckE73if989",
  "key5": "5tsyfffXoVHLVJWqqi45xqRE5YMME9SdQhAVwnUKeop1MRc2vAArhStG52djtKkdWmM1rDsE5h3AP5ZKdC39H8eC",
  "key6": "tzHHbvSCXR9JYvSm6y42NSbHJPSQAEkQbH7G9f8tMAg6nsnzwjwrEHfPzM3kSMnqK9QKghuRGyFWHAxHNzhGzAn",
  "key7": "49w6rbnucfDYJuk1ktVWjbkqsXxCrktiLDbNPofWqkG6iRkxfaxo4vRPuT8ocney5CC82VLV5d4PYki8yp8XMw8T",
  "key8": "5DizrYwbtPvSkrKWrMgQKAG2kdbJKGuVGeeK2q3cGUJGgTsJBBkf1LDeH6f1pBBTK2rfxSk8shYannGYfw7hL2ph",
  "key9": "3vx3xJe1APfQsVJz4X5vw87KXFgcHarqBLAu7LSpPLBEr73Z1nmb2Xgc7ky9R5Sy3hLSWece7eH6YbicWfyEJUap",
  "key10": "4AjHkr6oFUPygmi5X3gtpGZTqTdRTimnhaeihnG4qeeZ4oeudG5PpuMAi76gEBzmfezLA1W3cSnTFGN3bkdnPVm3",
  "key11": "5suxt7tJvvxGZ622UBF1dKyS8d9YoC6UF9qd4tbcwM4TcZKkBosqWMT5WkX2q3PG9CG2wS9bwmpvRA2CQZLSAZ4g",
  "key12": "2BxvBk2eDAhCiXR7W6FxtDCKHA9GjEyynsEuemGnbehMTmJFM3Eokxu96Hsra3f4hQM3KtY2fcHPcDTWJxC59heT",
  "key13": "bpiy3A92KXeb8jN4BivC9WSYLYhQJiZTkV5uBLPzS25TdHgF2TZop3xUAVFH3GZaHN4gH8sxb6uqcZg21LydSE1",
  "key14": "2qGrLuyapTkzATvdtFoDXhLvjAerQYFLTKeceXUGacyKDrArhf86qhTfzJQaUx7SRCpVYij2BUaRdzaid3FRA6b",
  "key15": "3aMDFN2rkgSWjUfv368rWkDzFV9Qi2j3UDrS5FhRoeKjxrj1nbSj6nyUMkb9rBPYFdnd1DDyFQNNPUpVeNDcMrV",
  "key16": "57sPE1RXXtXVJwWKhLFKAWYAvQV8gegrzSQwtDEcoZDewm35JapND2Zws3ZdF6h3BdtUvtb22DsMH4t6PMBQqKAn",
  "key17": "3wwYQZJc4GUR66GYpGxwqNo4iYKnYAnfecyLxkegLwMRKeXZ3rr2tFEkG3mwKowChLZW4ZSYAtEgPTG5bZgK47sZ",
  "key18": "3Xawmtr6dmD7JWUcNFBsZwoBF5RiDSUHWeWkPGxsUBhpPbSAvS9icFMVZS58QpBBZ6oM3ZCaafRk5AeWffGCotGJ",
  "key19": "4ZtXQhv6XWMHZgBn1cka45kJRJZhsT8wtnnKcT236wdcLC4zHN2o8BFBL3Zfp1MVLYSp9cFHk4HGaGsc5ccgJbv5",
  "key20": "F3BoGgNZigp2KghF1dbdoJCNFXT4t8eWtggETwQkagY68MqWy5XaMQPZD8JnTWzJBJq9Z5J72d9zwzLTZmwZ9dN",
  "key21": "HP78DnJzK1Ws8QMbhtkJiHZ4tmzqAwvZWhXeaLYvjB5rNk3r3G6QJrPFcHFJUhBNqsEAoZMpp9xYSEuYwAfR4ww",
  "key22": "41ryVUeRk8MveEuxvNexZiTN4Z9ZFt8A9BPg4gkk2GbxfRxsUwt7C5NiP36eZE8fTbxUg1rB1GxT8Bn3LjiMxUEc",
  "key23": "5L28eTpfgn5EVAE5LWTLA2ETt2U1midXEZwxPXrETXtPYqLLz4bEV8zUz27svN7bTUS9CjLeF3eeZkZehu6MgiLk",
  "key24": "3qBVdgEVhHQ4HLEw1GbJcPe9wagwbT5eh1t8t4a57hZaGyDjnWhE8iteKrCkcun5C1BRXYg3cjtj2KofFnhBWs4k",
  "key25": "3Z8Lj9J8gfHRUJE95fF6A1k1rMgozQyhpAMfjWjJDP5gYX2oPEGWPsc62w6vDmx6kRWAu86DxbRGAKEy6zpedGXR",
  "key26": "21kYKNKHnraibamH59H7Wu3NuoQhuQEoMPjyQB2eqjwaHkmmcBN81QCrS8L5zTZ1Ws5CTE9sHXhpBw2jvvaejPvN",
  "key27": "4jUyZnoe4eBPGyNyiEopPEgEAAgmxJJ8ZgWJg42R6m4Hof1zykiMnaH5g1ybVBr37vw9kFtZ8XfT3WnPnxv238U4",
  "key28": "2yktham2fANVgxDDSTKVc1mUJ5bWCTiRcSzWFWF1RGNxP1wyWi1DHhwy5BduDpQAWigWcXLiiQnYPpjRuwjnwMYK",
  "key29": "3q3Rz8mNQzV7aymshpyCTQgrvhSt3hDUpJGm6d7HHu3VyyKnjgagMXTZV9QCHRuGaLaoSJP8eunnWv4byws938Nr",
  "key30": "7h5vGTnKoc4Je8S6kdWq3i3ibYhTKAdU4G6RnvwZHT9jmbNoNHXHxit6Gjuszf743YAy7mHPKWvVnx15wAAURLM",
  "key31": "5YKKUY541NmyNM5im1aWZoCdQeBucwJsjJ5cevpirh5y6E3ax6p4kQDfdXFnKB7aWLfEKmxrqQJ67uYSSfMiyZt5",
  "key32": "4w9e1WscQ78bVZfxMgVw5fJrsVDEyR6nddpra2HrRzMiSQAXHHu798G1dUk8FiWCSpP5FPLSWvEKFBaNW6tgCFBZ",
  "key33": "4kLUuvpx5FJCQoiyoZ5YjC4wcT3wXhBRM7GdFuHyXQhxHfa11S64CiervvctUMw955qK6VToTNvMXtgrRR8m922D",
  "key34": "4vkvEtZ66zgVW8TUF991Q7uVCLCTsMGB85kXwrDAcp9fji1vQHEs36FamsCFaWgLsEGaoxN2JPJXcb8KXyQ3a9pW"
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
