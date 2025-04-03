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
    "5Tn4t9NSLgcC6bgNxUVQQw5ExEuxj2jjCrcg2R531RLLPDZv5FNZFS8oUoPVBaCTks1PYakQ3gK6zvcqt4ZoeaS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TATc4e2h1TYGYY7RWAg6SVmMPSMPCe5sSQLfa7j922NwUpknzkkrkqt3wAcj8zP7tdRtF9gtp3XZEcf78ipJTZZ",
  "key1": "2CFESBgYabwxtQ2oW6U4uoURuqmshnxdJtHnbX3MM2LZJdvnygnEqemeEH88fmYa5uH88PpczhyYHbGoCeuY3Y9T",
  "key2": "2bJk23CAwAmM7teHHhiUCNcAzgxHQVoghrog5CpTthZzaGRbU75pCmCzH6A4u4jNwMM7YUDXzc87K4pXvRZaTvka",
  "key3": "5kXojs47aUY3Jed9u7YLPcvQ7NnJPb4s4qr11tYrCjh8uikFGz1GPaWHyYsZNq1bVZa2VHque47v9dWoaGqees9u",
  "key4": "2rP6Lm19EWZxxjcZKaANo725441uMWLj1BHPv2SYgJpt3q8keKV5Q29S3XwrUEZZAoU5wxoT79SQZCeRb7yavyYK",
  "key5": "42TNC5UrKS86YbtVwBLm1v7rm3EkKj1fT96GpSoVE5baUFrwiP1ny6DTxpU4pLdimjnGUiwm9vG96N5YtWZ6E2TG",
  "key6": "4DK3FvYxTEpAiixY2J5FdC8pKwQqr9cQpcyVhEc8F4MLuVo3MWWWEuFM3PuKK6PyGvPLP7nPbLzdmJXU6bFqPyKC",
  "key7": "3bYmF24Fu6DZwRdEb9xshY7EH8CT9a6wTUYDSY1ACnncPgrSmXGi2hZokDBQXpMwyvY4vZToJQbzhprjVTARRp2E",
  "key8": "2dD8Kn3qfMewCaHsL3jaBTPPVeZ1sW4SgL5tavsfQ6gsAFnxC9amrmjGTKjqpADvtLKri9VX6ntBwW55uwXtqFQb",
  "key9": "67fk4HNN5woMUFTGT6tGZRdsZ82tw9CeTBwNtCvk9kJRPHqaZvKW6fhkMGzBq5Czyf2tQaFVMA1BpQ5xBgY7Raq6",
  "key10": "2oT13EGoh1XoAj4ormNwBYVfdiFKL9XUarC6QJBNoBAK8MuCe6uvWwthjyhyqYTrGoh4CiNMgYD1tkkWCVaYoDJq",
  "key11": "5ajfU1ZEE4GWcQniGYhtVnwNxWWDDm4MmjUwTYtFhyXACe9dZLjLfkuZfgHijP8saQPLRMfByb9ysTeELVA3pDZT",
  "key12": "5Qsif5VdMorK2t2RBtYmWYqjokcPm1xsdrBmBBNQjgh1TCv3QaMg8tfhn859im7nX63ue58YWcQc4588sQUmMtK5",
  "key13": "5xt5GPPRps8k13RZvXbeV6jL5NynJQy58cJJhEcCxD9gjTi2DCpWKQod9KrrhHCNJrc7ixE6JaW2D31aS6cDx78H",
  "key14": "27eLteLeBWPKZP3W3eLAhvq66j8dg4B8UcWnC9DuBQbhaLsfLKvxKKz9r5J1UDzFhS3WwEHbqevpz2nfFweCnVpx",
  "key15": "4R5LSiC6uMfuV34o1TeFP1KaaLxHiJuMku2T6MpuW5Sv7u7fgCSM6bbpdv4HPEvTQY5PfCNd6eogq1PJK786TCd4",
  "key16": "552Y1vM1pvuPEw8MBBQdCh2GCmxV6USeWkbFg4J4mZEUv1DMuB51E5wVNQrMNzGgZMU1FugnJty5xtfaSDDgAUcr",
  "key17": "5pX4vVqPs4qJ86ibM847H76iZUkRtY85u7rNoovfsXjKPFsykQnjraVmZnHmnUgCCPkaemPEwgDiQ8v7nVTfaR1n",
  "key18": "4521PqqTPT8wggvSs8x43L4o3VLKJAX2H56CLk312eBGcWzVytosmPzThE12cfe4v48LET6Yc6QWVmVn7TnTcsZw",
  "key19": "5smnjP8Ea71DH21qbgPUdrXhXh3Fwq5pyNXEFVXzMGtVgDzwSUii2DKTW9suXabazPA82gGWkVkUVQHzMbthFERH",
  "key20": "2SbX1LamgRXEU6Q9cqtvwyfsGJhJRWJTQQKdwW9TWLE4ksR4zPBCQZbCfoBYm4jeDXYySXiT3d1CKf4oEnxrbChx",
  "key21": "Ywo7Ap729dR6Ps2Nhwt2W1GR1sabYcg33H9CBugRxiXZDrwcXCAPDr3g9g5qnYfdLnvbKh6WgNa548DGwX4gsuy",
  "key22": "4UmGQyu5UaSEQ6fR4rk94SYreXzLPZS5xsiFSsdqpvCbEjA1PQgxEkQ2cL5aqCgdob8vin5fdjoFecJmDjB4N4xr",
  "key23": "3dVVF1NUeaxJ4uNAD2rBrngmgp7mLMjz49CAwHrF4X7dbXx8gVfG3JPT9tktsmXLAzwNe64A9YXj97LMSbzt6DoV",
  "key24": "2zMeSX32JDU1yia2QNrif3YK1KDVRKemKLdtRTwuCjGguHjwe3qrTfPEqTUso1WGLznsbe3Zi5zuTP319XNebVAq",
  "key25": "3AsM5KEE6TDWtJcGMyico8MkNuiQReB3YEEhUsn5UB43RY8msnMBmJuCJMBQP3yMuWhcC9Yjp1iUWLtnPVHVDzoH",
  "key26": "2vrDNzM6avH3d9jZAKZJ73JDhQKxqTNuQmjcnzjc6xFsJKhTmQYZjcE5GDVqUdHSAJn9o2BPuNMdiVcKFeRfP2gY",
  "key27": "5e3N84wpMk89uXjdoudvURwT3Vy2Dpy9zQehEkHfsQ2FuzrY1efeMTy4mz7E7phhVPuYcG4mEpnAGMa36PUqpX4b",
  "key28": "4gBKS8xGY27xEmG1UGJsWfHEiK4njLYvzhJrwGZpE1ZjVtJNFzD2fFkCAiA7U6ewDisYFwPU7P3pffjDGsjhVv1Q",
  "key29": "3bpmnW5CRXPwQbsFTfCQP3CLhv8qdRCzZrntn67BgNYcgn6GNu1hics2o4ShmbfWSFMQY4VwARhkFnKeGAXuaJV3",
  "key30": "63rGwiqqysXH6HZpgYZbw2d5YvCu1J4zrwaVTCdqMmZSeegQD9Y2bA8o6QrDAtJzKnVnuhgKSuGYECm1g4NYszMw",
  "key31": "nf9FzsYL9Lwyyrh1PiwSwU4UvhESraZnzu2cn8aSorGMADy9zdF1k78TXia4p4ZkyhRWSkr5jjSczoFFHaytnJT",
  "key32": "rGfw6PjHQyre47qbnE4TRGZHi8p5bYtft7zwBZzkLWqB85nrbRAYyieyqBThFwcKc8mQB3J8v5XrzSGR4pSTrSU",
  "key33": "5U2zQrU4Xu3TnxFRrrrV8dQ4et94dHmuu8aYZnmUgBeavczbV7q1qA6h8hTmCcyBBB95YYMCpSM7PxQ2WTCbbFvo",
  "key34": "YmXUPmRxu9arRARtbkwPt5uGnubxWQGWoi4A22u548Pt8acyHp7ER2FGVV29QpWSFwtimcrtChq1JeQxb9Y83gE",
  "key35": "5FrM4xnTTSqH6b9CzWm53uS9bm5r6ijtsghqmTkD6dRe812WAyA1U3v9n9CzfkivqgsaHhQE8L1xRtouZ419XkXj",
  "key36": "3P7XuRwTe3bSTzEHpAdTrJAqHgqufNoL22CFi2Lxc3ij8Vb9ixxb4ZnyXcBca7ocQqiXr9Y6xYiHbHGLqnw2RcBt",
  "key37": "66MJiFq2JEm5dJLczFo5oQHSW4AaRTR8uYNucp9Zmcyx3MLZMwLvrTYiuf6AQpVQLHU7g5bX3XZW2fQji9Trp8iN",
  "key38": "2wChzY9zGuySTrdt78KZ3LLNpY18PcF5umFZXHQpCWKLcv9T6u7C9cE6AZkq7MqN2raVos6uHkTzSpAa2G8iKTKa",
  "key39": "4Fr577s8ETFtYtxhDUavrKqHN4EZhYXZzFyiFkTf68tZUetwcxwktdXFuT1dGyQBKhJ9tX249C4edm2sKb79zryq"
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
