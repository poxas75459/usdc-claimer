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
    "4wYCaSiMSSEVW28hJiZywbvMb94BPDzXMdf4VBJAE6BXKTKwZUxWNw5iTMomDv2x53QTmZ6kw7JT8JiuRdeEvuSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpRucTYtSQq9CEyFsxS2LpKiAEShPC7pwXbjFRTcGE8kEhJpfLFwDyxdL7b6xvpTAyQzvZsb4Lz8NEJfRQqwSRC",
  "key1": "2NzhtLDhAURRTCw2mGzLm1PrfV3uTEEp37ohkT1nK4egVASjcb5VbNtd5vJkhQKh2xGR2fphBu2d1dGKzuwHKghp",
  "key2": "2NSnjYmvPdwBStBrcKafvQtg5DW7d9kK4RE485j8VfqN2grGsyQQhYRCB9ufX6e2iAUfPouY5HTRLqi1Xz6rmcFJ",
  "key3": "3gg8RRSpEiB9RoSyXMhVmmsqeEwCT5Wt4X5yVGkD1e5dVrgvdtbAXFjJN6pG6DGtxxcarYVZz3iTQ11Naz1TuVEK",
  "key4": "5dgiwzEWymoNUSdie4vtnFRCu21Nb7bNpJaZizuDgY5dqsTGAeDF5ED1H9bQ1d37MTWVAsYY5zwwf7rV1i2ckpwv",
  "key5": "7Cdft913XaJuM9bGZ6JE5FCUXA4cbCvCqdH6toXeTuG34NnhipbLeLujju5XVLVbahYJMizC8KzTj7mayDaYJLu",
  "key6": "3AndW199deQS3g29ptRqqmFUYCFHuxz6if7vgXWJuZQbtVYQnjLRdkXwtyDrQ6xu3EuUNwXHb531u5UMsrKxFRPo",
  "key7": "2a6V9wtjxcbRmm2ANxHV8Q3wNjeY1VshecBKBngTYHznK9MS9Ti18n1wUzKyF5t8GgB8iSXQL9pwR1kRyKisv51t",
  "key8": "22UGKCJobXwzykPdJezXQgbzGCXSkKaCB9cq4GfAsvb2u2BXGu1Sa4NwGr9nTmpSw78CpXu2F4zh3Kf3CgNbAoz4",
  "key9": "2HP4bZkZhRe81PLdXcsTLkmW6vYSY3P9r9S4V8aNahDGKq9cRVwsM3Tr2VcKRCuaxQQE9LRV8tKLAmX5aeqLQLDG",
  "key10": "uxJ1NX7P2PdZitEnBP8uvGccxup6CyZuLykYvmUuAdGc2pXNxqwWJT8FWWuQo1LmuYnCdJYtrfWDD4rS7K1KDYd",
  "key11": "3WLT9ipe8PSRxVWvn1Q4oGBYNLhTAyf5qTjQkGEF3w6pqGMzXZuyj3GgppMSvHRKcvFzCTszSs8LsQgSfo2fwSkF",
  "key12": "LZYFGTHR2sU64vdfXd9mCBA1NQpExznFrn5RLYK4eaqTGGFdhnMQ6fSArKHfiLtR9eL1MD6t1vEMHuuomArXM2t",
  "key13": "4aABXtq1hn1M3FjUwcwP1E2vMBeAxuLV7yFZaiw94eUPoqrCcuf7JQPVy2kXn8QtBiTREBibQVn6cGpd1Kaod3dU",
  "key14": "uQ2kSzqYkTgkCJf4LzqvWwVpH4R84oeqzSFrSbVAFhnRqTgS1TKBaRM9tHnpha55GitHYNeV65wy7QeiL7BzKLk",
  "key15": "5pteyMfzm1zPaXtHbJhugfJZAZQgWLiVHY4uZmgQ9Akx1kho5YAW65mhnVNK7udE1QVb8bQsdR9mnoPqm3U5QarS",
  "key16": "4ypU9Cs8AbbZV5ix2zcYP6H2dDvatW5ELMHSSoicdBtFSfJxJ4pU1YzVg1fmifg97PppJ1k8Lfs5ACxf7XPHxeDm",
  "key17": "6pynAXK4VBkwYeUFKqJoYKMVKsjsKSx1eRZ2uGgbfffXjFLE87ZmRNanNmgL6aHoTBiZppDTSP7Kwi7pYq8mDFS",
  "key18": "545nL383gsvvVzQXzchzNkaKWrXrrNq8tiRP3spJos3aYzp1kayeTVu2zzWgbE2pknkFboG9qyE4DE3989Er32jD",
  "key19": "4X6fjTNzibvhiXPfAwy3z1kVEvomDXZkfTZwu1DQudqrkD4G1QZNJo9EAkeZXUdtxZNzSTVVEhtdLJXt51AqoAmT",
  "key20": "2S96XcqmmYeTjhZBPssjA14MXcEXKfiFH9hGGAPVsRGGCDDRC5oVmPgJEV4pPmcR4eVNHqCoQNCio9wTGZyLbATi",
  "key21": "5HvnsviG77YmyeZi9bYKYTZyf79Wt268DwmHnEF67AdCXpVNeztZSPH3PH2XyajoKkcwghEs5WQy9rHNQaxixVny",
  "key22": "4PkatkUSTdPGEDfxjJ16dz7hxqr7NEnuBXAxaNKvyPpPbX7LdGvRENZn1UxBxP9zxkaWXodxHuX7nL9Y9EJxLR89",
  "key23": "nR3wg1HJczrgd59iNf6EHYxR6z9jtXx9j6sUxSEbpzJCQgNsQkTm3uZ7c5YSahRkzSjTTBEMZCsdYGX1KbRURan",
  "key24": "21A5M65v7NgRJE5v2bicwy13M151t7Rk5uGYJch1HZs7VwtWpgoWewU3Df4BrGbNbX9TeiyivP473r2rzJh8umZe",
  "key25": "2HtCxh2RWphjHagjy88dZQuXEnEiip2rvD3JD3cNgjRwxCMyRoVfQxjp6xrjF9447hD6xnDHMfE23gazCkAerLzE",
  "key26": "4SnXBeWi8BJynjbztPWQorBFJ7pNx95govQRxMSoFyzKTGNwSRfHGTWx3jeFEojMfYgpyzJX8dLvLRh5ae1oeXCQ",
  "key27": "24vFFzLfvVgrtWyNc3y4wcgoZL7GDrUhEjGuporgwinmsNJ1z3nNFnFS1eBwhaF53QVHEGXLmU6Rg1zTwCYF95XP",
  "key28": "4Td1eTX6AvqtvJxbWv55gfBXuNGB116JRrgpKYHxS8hYcAQ7c9HR1FQLYa3EfU6A8rA4Y7uLCmv7q6KE6RBK8HvY",
  "key29": "41aVNKPxyug1gEiNeLevgDuYucjTJoVgjxwyLw5tio3PeyjQNkMiyVWEdvE47BVvT3xQw2ne43CPwHbtVjaohLML",
  "key30": "4v6TDwsvvUB7b3C59BudGUM5knyMwGCM8ht2rqjj4wTPi2H59nGG43GMn4ZDg649Bg22vGL5UyDqd4y54wJqTG9f",
  "key31": "HK8ezsNMe64MyKqCYBubD9Cp6SQ1kJiKLzssmj6nJrwX5bN63atPZ3LQmC2UZ8RB4fKqHFP8tX6VJn24csRrHsu",
  "key32": "3mppN3jygE6FLv3Nn6fBfVBxyA8mqiTxtmyFFfLCMC2vRgjhHAYfkKbNj8FHPd5PRcjPkGPJ6zsah9CBu29mPCLr",
  "key33": "2DrTnfswLgK4WWjxgdbY3wzhS4BWE1ujzNuafgoBX78vYuhenQ1XbMx18e7fyNx1LZa7rHmRJsQXinmtFH4CNnUk",
  "key34": "3TLxJDLtpDjaGj5CgWSywU8aS1316UrfuUhHpvA4tX4ftP8XYZWNqeJGhtRw7ppJ5tZ5DiBz5KV3rpSyeVdnezvj",
  "key35": "3NE2ax6uJcyNuu9LH5v4264GEaAbF1wApSmucKAkDrerNJgJMRMgje5VwYMttnLt1SdRmeSdGdQbAKawQd349ubx",
  "key36": "4W762Knc4B1hcc7KfpK3xugzn3jGy8PaB63V1ARkk2hXZTeYY5xC5fDCC7XvV4FbAHTQgoKKV2U76nGdD9qw7km6",
  "key37": "4gzTSkPGwQ1ViyXbZNPp3SZZ4zRtEce98a9dn95Q2hdQ3SrLFhsMrrkyQ5a2hZaUXgRPD66oeK4rPBJnMjpAmvW6",
  "key38": "752rnAgbGddLiZPxxXqL9vxaBoe88R6DX5VFGCmY2GLiZ4XUKcm4qpnt9Y1viMapxeg3HAXUdZpMWHU6RyXsBsi",
  "key39": "4NwcGxRdvS41pVS3cJhD9xkB7voV9M53hS6M9HJHvotFk3R2dVWhcuPgRV7cE5KYUCSBsQfMJg9DMJTsYr7akMCa",
  "key40": "2g3G2RiD2mjv7DyJrtQCtqkwqBVL4KDpi6bbgQtKydHLbnj6RkR1KPwquJARtYf3vL1Efm4e5gD49E8cCrUEM2Va",
  "key41": "4XGab4xmzagaceUCYKv5YtoX7xR5qmaQUUWhFg3FbMup4MBqjGS83rcBPg6EC9GHVcwXF32uSuwYCZfX6V7RN4Ma",
  "key42": "4tWpDGxYjs87ZxcXBfi7vLnZFLHmg3cDNUGhsCBWdJToHuV3q9bqjnidqauGGtuhYprUYma7vrUbeYmNdwvg2Aue",
  "key43": "2H8p7p7gC1LAwVzeF3i5XnvhTmV3kyKkPDpSbjYTdnQGKLtGzbuLH2fnkQWitD872oJjaZA97ynhQd32xm67dCWc",
  "key44": "2JsFZhe8GUxFpfT4RTNFukrZV3endyjRLrUWAneL5EtWLagnyo8M7VQ8Z69Zp2ZomyXZPdDt9X7XoMDsD15xM8Uv"
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
