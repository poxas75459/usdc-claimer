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
    "4CdiJtXKp1uBESKZHBMAfz5MLVcmbBKbjoGkjtk6p591kdRVced5Y4rfWC1s2iTy9FQf1MZSrfpf6YsTUNdDy2Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5og5x5u2JKemFtiAmRrLSzGrSKZNhsXTam6YRsJtEENJGy866Kd3SHQ8hx5tQibFYXpdRp3Huu1qR5bXNNQGstWr",
  "key1": "45Z7sUpruxxQGQuc3TeL83fbii3WuAozoCEgWuKptTHk7Z9t4GcTM7iqHJgag2RPQZfJEuH2FVpQxgRjhDTQbNYd",
  "key2": "3mELntTYM9x77Em7BDifcbVckMuJ22wXepNjAae6q2iS5NHPKMAiWbPUfxZaibumybgyucKyMMLzZ6saRuwQtEUX",
  "key3": "5WNSyBCAWg4tm9rUgc5mJPseUtTjsyh2HfkEfygCDKYGAHaMZRhoBrR8bs6T1JKp7f176hccUqLRNnkdxCUXXkBJ",
  "key4": "4HYHFJyr9KzuxeXbyaWCW2Ts3MWM7MQJ8WwTvctSFy6T6XToDCZT3h7U5XHxuV1p9fqPB84hEwSeYgqGH2Wtp6HP",
  "key5": "25pEPyPNRF846B1Ftj6Wa5CxLsT8bD8o5XDFzb6uUAnht9wmJ8BRUL13Mm7G6QUUf2c18Q2ZmgrK7vQsw2g92Hu7",
  "key6": "5DDz2BtvocsEnbAytRNgHbENRrRRM6Mx5yVZh5QxrawpQ8QDAiwmJRY3eXzvC6oE4636yA2sKAv6u1xEGrECFoGn",
  "key7": "67GPDzSJxnVU92wjaJ6ygyDZHD7DCrG5riZ7FCha9P6zPyCdprSNvCFapaeF2Vnw1EfvHZBx383W5T6kmytzfEQW",
  "key8": "4CHJtwkq2V6n6jxp182prv2LXLR2RUAtGeY7rA7xjeoNsshjMTKZdZkuAcWhzfBi8nWy8uucCgd7j2LmMFgXQLLS",
  "key9": "4S9EvQLkpkCNJsKkwwmUT4RBLxRNdTCDPvTjU7jDZghabTsJ517gb7kgXnP21S7Y9fFFWJ46voMEhQFUhN9pK4UE",
  "key10": "5ZsoKUhi6ZsBdUs1KjpZ4qrqXWhHL7oUqu45ZabyYMqqdTnP49AERK3z65WWTzWzbTxZD5MXy6kwzdCittcWD8vd",
  "key11": "4Uxot2T87Y669nVYhNF5gdgquuXa87kX2XJ6rgWTStu4uJyzbq6dbuCssHfqmjRR6Z7XaMow8kGMMtVQcf2gdov3",
  "key12": "5fHQVDPfH6MXB1QjbKGvD75GK3i6rs4XgTL7Av2yKi8ARJvgQ2zJ3zCsim6XskCaZxFWiQGCR2uvPM8YzkeSARNT",
  "key13": "2T4uGEq2Lfbm6jSeDXG7hXQ9sFm9FfqEChWZ3qmXaTydLuSBdFBnv2k9JyBJ1zW6soaLLrq3vCBKYcmhNk3RdhFR",
  "key14": "2KGn8DftuGFvVr1EDxbMLiLYFH8YSmFraPDZdCFwUfjWbGS6zXSXZks9akcBxfTJEC5D98zWxDayF9kXFYeFdZW9",
  "key15": "3E8GrPstS6daEd7vWNh6wMj1LvXtuaUPmsoB8g3rtR9griqr1tBjEATNsSEcj6bAtDp2uPqQqKrf6y2YBRDddtbt",
  "key16": "4LgUTefYriSc7p79ahykqbijRTz8UZxYuWLfVXtKZkjke5qYtNoxZ1U8H1feowpjbkrYnRshU79jcm1ssLzd8M2o",
  "key17": "4DdyCyzqDWDr3eNwHthWcBEY5ejXwdM8LCJzaSodYvuL4qsdMiZixEhQRdQkZwTM2ZA6qkGdihE7eC9EqbxGCgEq",
  "key18": "128SHpQLHscqPffRqqq9tUB5NX66BDUCafAjYEYTPv6yYAxdnbyo5h34bFUPykkDgAu7TzijvHGzuQobZmnRGyVu",
  "key19": "U3gfCzV8Ub1Bhxu4QXVCg2kx1tA6RRwMke5nSE6UMa9Z7iEBnxVgedD6DbW7JxPBGeYspcY9WyEisa9eiwsh7iv",
  "key20": "4wYAozcXixS2GQdUH6fnDdaGU8n1oohp62Cepu8HyW9Yh4ktkGjpAzYqtPhTqdaqLrfqeQijMjeuJGGybbCHRLRc",
  "key21": "qiBgDwXujehx89Ron46WxUzQ7YfWTNuNZTm21dKifQRs6FMTkQhiK6Sko5oF5uXpavMMDbWe3bEhMb7tbpi3RJe",
  "key22": "5XFSBZcCeQ2wbfC7fFrPUovmZB49JR5ga8xDhxKh2A4jEDsB8L6WdtjfMheR3Z253HVagvpmvii4qqiW7oZEcAP9",
  "key23": "4W5wTkMaxE5CcjZFNRzApHkHmzYWJBm5HkRmRTwiwb2MMBHDzfqmTGL8r3sSozpVsxKNG7e1B6ii25dviT8W2PUF",
  "key24": "2MPjQWzqLHonz7zyRn7JDYveCPXKZn9TTAmVAtizK7CbsVYes1PDfVWPqiKbMwxJYVNi6F76GXMpMDgjtGncUhFA",
  "key25": "3CRe4xUmzq8RdEaBD8VA9GSKNPtpa2uFLnR9Qc4okMXJ8zYfZpLVVL9LAWLu5aoDtSyi2H7gGfLjNhJD7KVCaMTG",
  "key26": "2NjMf4xEbgYTQYBB9F7HzTDeym19NYCEDRAcos2jQ47T2MNkyWksmaX9DnZ2mLmFERRx5jkHuc7taS8ZMmLMrVZP",
  "key27": "4tJxoNzkxWVWu9MfeRXS8ZoxeLTSUx52r36X2fQ4gExt4fUaAud41EmWmrKk1zHmCKQyuTn9vTwsyirzbRjUFLxB",
  "key28": "2AhjftDdqRrMPhPgaS8dL3beMCHHeTNBUxaPmGPyorTF8tu5AAHk1bhqkdJwdMidPkzj7ZkZ4A6T2oqqzv5Fq6y8",
  "key29": "5fyAADTwPt4nTccifSjn2bfXNraGrFX5bFic43DEVcYpemkFTbsvqqsJk6Jy31dw89y6u1oTDJNPXUeAEYGiuWyR",
  "key30": "2CxssrJPFQBLk8DHMATkrcux68HwMTuEF6WgnR9ic3neZ2gNeyw5uk2vQ73bkw3Lh9rFv2dzmpjjufrHFc5pg6zd",
  "key31": "3awe4nh3S7oaoGYKJwC43RPFCvebK7JvFmmUM6YrK1fWdqvybhuLhegDxofGzGBLQdiockDPras6PVxJZxAjSL5C",
  "key32": "5ExdKo6SLFoKCz6gRxhHajHZripUjckw67SdU4Q6eZ5UdvqcXYxzAuXs8TD3JrqZ2DN2RZJWw7FB65bT44t5SAPh",
  "key33": "4qu1RqbGL6STgDy6yx8FeFF2tbPArAQcgk2s7bwcx731gbGcvdx7ecojTigr2eFNbyN2RtnDVuF4YTdoh6abg33r",
  "key34": "2xZ7eJfqnuZ1uc5VNNnCf6DVVrcNgzNBFK51rhk9Z2ThmdkjDAdyxcZGAcrtqocyRf6m958DTEoJsamUfTRbqa9E",
  "key35": "51P5EGHr2KPkyCTgFwABQMtG1tPTy5JrMvxkVb8gN6D1XdMYckC1QNpLBfixD9u5p9cQeRs95xqMZ335JK269hFi",
  "key36": "3kJ8JxHkCPqn99tSSNhCeDwskmKaEwM73QJnh3jYMttVDsf8UQh4iHNxrM9edN1Wk81DhepvBeiutC2gUL3eHJzP",
  "key37": "5Gf5aDM2Yd2K1UmTcjYadbvAQ1jZRtbwGkqrGVv6uL43yZ2jaBfNi1nvAPVz4FyQeg3UTx2dgueRL3UvcRuPMUB1",
  "key38": "3z4nka4NYMEnpXTRrBbyyTJr4qyFhgtwbS1NjZgUtnAENZVHd7ZBVyKrpKqJpgWqCy3mVRKf1MKgAtrUUjZf7i6S",
  "key39": "3qkZG15H5qLccseq1G6BDaBgaPnrwnuYMK3GTJzr8QtVzU9Bp3zaWhpbeu2ZCMKx9vvBzRQgM7MrPv7gfSJ5pW61",
  "key40": "65bvNrLcb7hjiTboVB5X3yNWZtUMEWa29zGoZ139rY3TuwV9bSgJvLafyB7kxLPj6kR9PFJNgXPAbEipvBq8Ts6X"
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
