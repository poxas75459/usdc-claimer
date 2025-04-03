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
    "4NZngaK6w7divuqppFcsHDdNgfnsSSShTnfuiD5FBgwQuMqUVQDm9KS6VGi2vTDRe2g5suErcVmbTo2Cd8ghgctT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgcuLfSEsbWBnatRs2TzC5LvgLWwpH1TFW72DyycXFiqVgBYZp7vyqe8aV6S2oLut9dSxo6FfPdGe42pfzkPgJp",
  "key1": "29r3jEKF4RTPngdtEmhzmgRyQRNgpTKVauRMtBhfbhSnXahifhnqHqpAzLA34onHekL2Xuq2yABSTWDpGrnjX7GU",
  "key2": "5MnJukV4hJMmjaGmq6TPxDqFEuJwME9NJGqjwZJWcZBateay1bZf9DFc4RfqmEbzytGDgruuuAhgYPRXj8Zbpg8k",
  "key3": "hxQ9Fhr4DPP8kA8ANvb4xC6xng2kepqtNEBXh2V5mmcpcGRXnrHAjh9EEvAWwZ7ovHtM6VTH3ZG3YkHjdWbQeaz",
  "key4": "3wnuvUVJ5pfJ2t21yFxmZTm5Eq1NegWkKMXjaNTHozLKN8ma169WB4L1AaUviXL7rQKxASxoAhTA4uei7QzYwDK4",
  "key5": "5MXCvbuxw3v5GfoVKYRKYpSR6pgx1UnYnmYNAhMju7azwsbAVszPyzy8R5zSUcGG21f5bVr1SsHu6gs1nEvZV2zo",
  "key6": "2VTQCR3jjXBanjFQ2wTxCx3MCisZmznPJxumCJcHX3o1A62XeDuSpLQ7m9HByfxZ7iYP7gstQoCoJJG6SrKuVdC2",
  "key7": "3iHYQ67Dy8QztkmCx6H71wuWp2CLLWucXtHbmHceuLuE9J63eBAZTYyqQsdmtFY5qQJuV8xCFUxdF6ddoSE7o1GQ",
  "key8": "RcBcM9KK6hEeArUbdRPKbWFi7HY9jZBBWfxfCTrLj8wUbV9BkqgdJRMx88pYj9DUggPsEXvhNUeVnQmhe6vwK1M",
  "key9": "26fJAeM35Wyoeuy1rZ7uahvVGzBTetJXPav4BYJzy7XhkJwdBnJgtT3ebon1Ni6pZNwbqiEantb6UjJWw9KRFXXX",
  "key10": "msej6KvwW6W1qu1QgRk7Dw8AGbCLQ5UAXWMgrLEmdMWYr8g7bsLmo7Jnhhdvkun4aaka2j79ueNDMghBAnVbVtv",
  "key11": "bkhqo49z1v6deYDRvGHQb6VGB6DMV6o1VMVJ5k6JVUZaaDaB99QUzqybMWr49BQ6x3ztHwNgLL6stc48LNKxTxm",
  "key12": "2Hs6eBdLficZRbFfmG5iVaciJ9LDQDkxMLBMgAbvedB4tsnc3Bwu853xjsPu8XA3xqqjD9S4fH9hbJGvTXWZk9nE",
  "key13": "4hA4aLVy9PtopLya9bUCnqtPB38YeqxBy7yrvrdGMGiSFS8RsHXXw1mvkjrbX8VHfagNwqxAfqxNkpkzsgBiUpjM",
  "key14": "ZZonrsxS2ePPc9d4cAEJxRewc1gBnTduQavTxNu75fDzStPRNFU1Y7H7sbgPoMAd8aQ2zQD6qXrakgSiSxWLeVD",
  "key15": "3mbi7ShbNTEmXXmfp3GVQyvpZzH1Y1YsKc9TmpPYQCgRhjhRCsbyWTxxYRa4cUQSyrPvpGCGYXDL28mXWUVgPJM7",
  "key16": "zu7hz8DC6mKcbUq1zpa691sc8rrjaD2xWZNJYhRzbQNH2YTixbBy4WL33CZpUZj2K78bP95Vk9FKSsbVbgFXF5N",
  "key17": "56kpq87DLRzfZsGiMustVWRGh57zQsp8LAq3ucQ49AW9khFbieptLzPMbCzZhqWVs5kKyuP3qAbjNnx9MGZnxg6h",
  "key18": "4SxuERLuHeYdHCAdqNsDZK2uSQgWXjbQgmY6N2iC9WRbQs7Fh3JFuZ54vFLQMy8u4SE2wZxAm6ZVEcveG7TUFF55",
  "key19": "y4F2Eacp4LGPyNTQjBzjymePkuzwGMCWzuMmUMSqsSDTEbzsXNLHDoHejDT8QiVeDFBcYh3a4vkM9b3Pw1ytqrZ",
  "key20": "4JjkRpTN6QNRkU1UXiR8okShzq4q6K8rEUK8ceMTRSG7PuNU1xkdUoLXRkyLgRmtCiK37pEPwioEfy5dQj24xvmU",
  "key21": "5QVxYM1b7GUndB8zAy2oH2ga7VyFYy3X9X11qzPrvZYbA2BHdAWnKTRePeaVWZLQxsWmihwHaLxBMMDHe5HsjTRF",
  "key22": "obbQNvTwD1rgSuBh5Q3VqrZs9iPhKEpYNfqukasWYue6x33inGEn2dsFk4h94TwJrLnKi6SnD1eVvcHMThVvZ7P",
  "key23": "66oJw55mPbjiaC778E6KJ6ANWawGiVemJnXTLJcvc3twgbbshqd1XhQuCNVzMRuEXyt7B5BcuzSjL5oL4UM5kbmJ",
  "key24": "3hpS3UdAk6KaekbcFv9kYRbUEtUpNmNiKJHq9oMmiFLqGURkEA3fspdYaeVfa6sswFsWLQmKE8thcakzxbjaz3Kn",
  "key25": "7g1PWKfPpUqBzAtWKawpfhhPFAfakPyvSAFsvbp4DwXzdKLVuhfFmYYn3mG3oL3z8u4chCwzVFaioL8LwW1DfyY",
  "key26": "2x5zwyFXanAib5HTmtov932VDeEwHYiPy77JgKHB6QqH6kd4EQC2mjC1aDLi3hs8nfbNagXci4igg47tDE1DK8rG",
  "key27": "3L242VCqWyKQGBXUDBwK1cz9X6vj5Cj6kqgpku1G53YBwZJYxp4eQmfq1xdL3LjvraeTmTv49TmdqEkAduGbGSpK",
  "key28": "3LaAq2QTTkou8cZbJiStrTGa2aFMtmVyVZdZEHbnfvjZRzezjrcdV9hVSg2vFpAf2TujrEytAjetBaNR6PgABvtv",
  "key29": "5i1FUAvJ9GXn6bvV6Uo4n8C6qKNatvNGrjQgU4jcJ8wJ3BPewVvYXokY3oC8zdGtCGEiwZZRjXCxXkEgKjmr2PyK",
  "key30": "2NeYJmR8Gs5iWnM9bJNupaoGgw94NymFBVHYiDExtMYS8BRgHWLVdZ5u2kiLGr3ekckTs6Fe5fu6ZaX1BDr5E1Yi",
  "key31": "3K2eqnEPYER8mVAeFkewr1xT4CBANLERRm4L2cDb2mxunehF18qtCXMme3dzef2vxZvu6F8AVVUrpdjz8Qn9mdEJ",
  "key32": "4pasUM5YVgbjMxRpQHgNf9trZ4okdtte8ZMH8BNVJLAPgeyFvxmrbhhuepXyPidsRGqQrTg6tBuAMyvVz99ap2dW"
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
