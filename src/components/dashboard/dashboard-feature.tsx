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
    "2rmBBsPwWf3jMXFraR4PDgUbbiSAW8tVsg3V8aJ8wz4YaLMM3GDiZBuXt5fRcscpYCxRuLnfzsnNrbPx5RUtLYC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCAynMEnKQX3VaKVy6493Cq3RqGnrF8rXZpSknrfRPvZebrQPy2JwuyAgiaQKHjFu6ns1nzZeLzVchR3VXHAPeG",
  "key1": "NZpjWmNmiNMxvHRwYUAwV3a2wbXSH3My7fsSeLz88fnDFRPhyhwUwmjNyVB1gnyzovMbG3bw1gU8inDDDRFCTCV",
  "key2": "4Tv7cBZiDKccehX6Eha27XL2s1ZfKef6oNZw8Yu125MxNqwS6sdAK6DjodoREkrK2ahmj9yvxNPsM2YtBFzTH7ZT",
  "key3": "2apmxzcDP3F52RYAe5DbyXgAm3RTTx6tVyKHNPN3DgR4Udk8bCkAU88M9hDGmgdkD2qidRX8vdTzzdp5R5tBZo2X",
  "key4": "2HYFAUA3fhkrjVhQNCncfA45wZHEf4RfuYoG1ch2fWGzsAfhtj1XQ8rdZDP8fjNcDWgS6hdx8LcvYHfG2fzW19aG",
  "key5": "5jfYtcv8qSAHCZaaqC3EineQk7d9Pck7s36BptrPnSEM1Qq2x4tp4Pu7k5ZeQVSDwXRerc3amj4XaA4GUAQRvSn",
  "key6": "4ALfMdUwwuez7aqYvuUuszfkVivMTsmeGaFB2E19amkXoR9ijnxXTrDyBRQidBrtStX4SCvZX8pNATsaPWY3V5Av",
  "key7": "4QNCr5ve2xtjPbh19hZ6HEZPtN3zw9BKtMzmHnrF2XACyDD991h4S3WhmUVViKw9jP6fQ9QYTNvrDYEYXM2g4wPQ",
  "key8": "2kedYv1QV2i4DzNPqq6hX2VwAencYygo2S6S4Ac542GAC6HfGYTSte4HMwGBegjh1A6Qu1dRi1pxjkKT9uMjSrc7",
  "key9": "4dVc2byBL2Tz74NXwY9bVh2EGZNGpjZRZnH8SkEfZacULCPmofi9zQVE7soauukt9aPFsVqPGCfLfXw2QjowXDdE",
  "key10": "5veGY3CmppkLd5JdXboxrYsJX9M6bUrLu9wJVfKpZTYiitQioLUKCh7iU8gGaYxXhkCGCB5EGPuSCqvH27bT5vca",
  "key11": "JhmntMVsbtYxWmYjpmzdNRXQeqvCJgUykjAJqxUqp9riWgSfnEJHKeCHfYjsWZR1tNLyzjczgh2i179qzJ8T7kx",
  "key12": "2CtMDJt7e52HgCjmVRYvsgqiGe9jwUHxA6y4nJsfVe3X6JUTBn4ouDi6kf8CuhwQpsmtNZv4af1YTr5ebF8xVFbX",
  "key13": "4CAMDyQU5KQoUTg2k1iGsX8iQb8cCyV6Mp8zUZ9W5rs7KUg81zptw9k47KqznEKbpJy1JLJwdKvAAU69qoW4MxNU",
  "key14": "2FmLqTKvSpwfLh5J5STygfmofXH5H9Wqpg5uRANpGrQh35BZLAXDi7Kd36KsQarMTNb4Vp9L7kDVZtAwu5yRqSYk",
  "key15": "3iez6fUVroq3agPdHvFYN39PZCJTeWuBejmWFvRwXbJrJR8wuQf7oE1PLTCxhac7TxDtvDey2SZZhe2vMT2S999f",
  "key16": "LjeFSfSEukmAVCP7ofTE6KDyYkM7qirNUq8JiqAcngvhbSe3ipBpye7e5fvXu4SP7Hh7L71XhsMKk19ZUd7WS8e",
  "key17": "5yxtcTwhHusQzyVw5yLnEpAZ6jZB77raqUBn3wxyzkQtLBe5t6eDsKgKGSEF1YJwGUbDm8cteHhMXoaQE3ydQ3A5",
  "key18": "33jdpT5fbSzTo5nTsqJcRsgDjZnLffbSsHkkSfHFCxqFFA5LkSpjUbKuPh4DAzsKXx9fDfywdEY6gCLM9jzgRDTf",
  "key19": "61jwQzth4HMhVqThfefDgNa81xFVrofCBrGfw8fR1WH3GHLt2VdYDW8bpRbSehVb8xEYT4VWNZeCBk2XnYt3zyPa",
  "key20": "2FaPmXDBMHYEK9qbdvPePJB1YLmN6KuJnhynX89CVBn6Eu3Ra6ooifNxEyoX4DbsANdYVKtgWQ9ePykcwBuLTZkn",
  "key21": "2RXr3jKxb8i8aRuzW6axca5yaWK2qfyQ4nRDupGoML7AKgCtMFByadRQc3jzDRKJEdbXgqJApUqyXgupzXjXFecm",
  "key22": "3rFuGZBxaDMYksirASfsVHfQ3oMbxodb2PiiiHjqGfaameWnqZ6bVmQzt7493UMXwhTJ76JXeKihckduf5uvGrZQ",
  "key23": "2WcLZJ7vPZk61vpy4Dq2wr7wSX3ZGUyGEzJKCTyrHAgiLPtz3YxYzCemuBXZnVcT8V3PAPos8h9Yzxb7vJ6XoqU8",
  "key24": "2wzjVZSVt8iv7QB8mbKCTktGYNocvYnSX65iaXQjeExbijBtu22yhZPGuRE4MP9FeoGFEXcwc5htkwTZrxgC7Ppr",
  "key25": "3qHTwUUHnKYEgLzre1SucvFvPRBE1J6Ec3d1x8yzDP4F9Xd5wYAnJn3eN1Jq7J6wZKMBAcYp3XbJY1Ph3xFiXeBX",
  "key26": "53KLLf2LuXca8dUXvsZFrDH7axmDPHCEpE4fNJuqw1LYDLZjc6HKW2keCKaxudU3dSbD5ydsEqxt3qWFmgTEut5s",
  "key27": "5JdHYKZVLm8WUzZZHp5tSVJgWtR7TQ6y8tue6r7GRNR1ViwA7Yzdkyv527ZCwqoBYbUw5vQycTC2LMa81mqVeffo",
  "key28": "4xThbHamYaCcBre5TiGifwm1eVvVZwxEWNiw6NfL36hJhLxRZG3cgmu3TB5YJkfdrDBBTYyU46a5xrR74QBCxFSq",
  "key29": "3d5NxVc35bhoKJRpGRFYLpy6NFf3W6JWVuGiesrmoPsxztgz4sCzfYndNHmT7hExKeMbFudC3ZbB22SoGBHZ8ZLN",
  "key30": "4eMmz6SkDA7QG7pnfLNRbeyEE1WpHtrm2TJ8CfjKMFVNo3xJoDkWCXeWRVwxQoVmT527mhnBp3x9K6vjYkSDmmPA",
  "key31": "35gRfLQXaxbK2LbhWDFEcrgHqdzyHtmiCcAGTHvijkobbdAbujaNp7b8iPRcdH9CrtN8tyaMm5LxURPaAXdyTrZv",
  "key32": "SGZT3XGDadQaqJrL5vby97R7bgMx4eS8bhN5th26KzJPpAHUgifFhRoCnvnckZa5oaHVeX9gu2nmqUGkDouQgAv",
  "key33": "eVZrMn4T3dhZShsB3WUL2rDRrTSoeSJwWyjn2QYwPPqhSExgXZxGmMyNCbsveXgUjQYMFs8YjeuL9spBJRMFGQB",
  "key34": "4whtTopUgMRthybJyLGXFPQGWuySCxpyxzvSJJuRe1aFCznUxGGBZFUZfi5ZaHMVeMwvVjU6XgokknBR5YCuFhXs",
  "key35": "4XK4wjL3gMsFYFdJ5gsng4BVi4F2k2zBJUQNGp6SN6LAWPmwxSz8dUtRuqeanFsRF5HpMtUtLuv7NU8GEcpUCVj5",
  "key36": "TjrsDdwvNUVcC81B6kh9qmJWkuioRePbBocboEThsB9KJCnhaxBZLsRXk6YRVXbuVdu1pG9omZgA8qpAUYrrmb7",
  "key37": "rwdyYqX9wUaCMyNZKMRZJ6pXf4AgZcECXwq9JVS7voLxAaevH9wuR9wffd6axgWTW21LkFTiEE4NPbhqVthwBzf",
  "key38": "2NqwfSF1sMkxEzFEpovwsoaXH4MLM6ZnYMj4G24t8sBNE7mFhiMVTpn5vUY5BHwCPoCy5Zzs5sxFzdtpMqEXdJLa",
  "key39": "2JFCC7RPajWL9YWPycoy7YNQvmeZStXQNhEECT3B5WeyV7sd43NZJTXhU6k6hjbLnP9xWosdJ8unHQMDzrUVpyQU",
  "key40": "52fmVmNmXhPQH22DrzZGgiALo2zXnKXKoPHNSdnVSb7MXjU6RKUNMcQnHHF1ScPbMLqCtuof57GiiKmKgzLKNELK",
  "key41": "3VYcXt64A9Ysn6BukTBqTjkg971CEuWXo3kYBWdXQSTuYbjeeHy2kV13ma8oq4U6f2JdwnPXdepZZAQPbeTET73P",
  "key42": "64BmwCMijaBXZ7X46pHV8Gaim35vZYE3JXqkaPXiNoHhYTxBLszCMFjisB3HdzitXQ68HniNi8K1dvqecWYF1v35",
  "key43": "4W8xKXzhe2Tu3gJPnuxLtPhJxMQwy7uQ4ucQsLeJqatFwgndgASiSkmD6eEXWXUke2g6HxgMCSVeMCH9M8vpAaH4",
  "key44": "4wANi7aEfi3eNoLstquGzbLY3R3mTpBbTEryPjpXc6sfRMkEaQzhQRfCVHPj1rmRhrghu11XEQAw3rGveCuA9qn1",
  "key45": "4zgsr8TnpPhsU4WC7GgUo3pcfhdQpihLbYZ4mCi7PPATpTVUsU7qJixpCB7TV189bzdtQC3eobUVm4i8ENBRqYGd",
  "key46": "3B2J6x25FXWPfYiMQzok1YDuP3Gzef1GYSY1zHfM8NxaGJamYv2itNELPRdJ1nZtQLTxNV55SZgyGTawTosp6cnM",
  "key47": "TA4yLyBajH3At747PSuPJRo95Uo6H2jm69ZRD8h4iwt27nbnxoci6br8xXkpjdxW3k97Le5BZymh8mVrwu7G9rh"
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
