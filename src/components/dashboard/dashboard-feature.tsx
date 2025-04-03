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
    "5yiBjymqVztmJaQnyYv4iumecE6FYXdrLdwEEvegTPaXg3aPZtBLPksA8ybLotMsAydZN6m8ZkLeED6EG5XmwjkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDSwPLncNEXfkKdP15BiVUbd7gKXd94anQgXqbAVzJHsncuPp1pjiPtpnZ6bjhFNZSkZDGTyNfyvdhpBNyaR2Tn",
  "key1": "66dMJaSFpSsw1DgZyPLb3gMsjVpzg9ZVyjCbA3wd8xoYHWeBqj7Td2uqQacSRCijix1mTSn5EGKRDVYxjhuGKeic",
  "key2": "2QFroLwg7uGSdy1QzXYHo3RbgXZdhNhBhkom1Z5q47UrTp64i1Sfvy5Hdh6wWHCv86UqV3mPZAs3AnNvMr56j8Ra",
  "key3": "2nsFSXMVTGZ38njvdPkJUTF55EWjJi6KJbNoT2Dzjv5KhCZEa1W5eYZDjEhDvBxERqVzqwjp2zByu8HxSjN7UqF5",
  "key4": "5hC9ubMxgCzJG3x2V9qmJ3ZHxNg6uWmBi3w2PFSYaFtnnrwTtkmvCYMPSYWCXsFrEokgamWQvH7qWhF38pSK8Nho",
  "key5": "4b27b1zkpPTs2ebn4RYcPCvHyZX9imNPR1zrVgzKvNDap6F44FBERV1EgSefmg1t89FKheDWTdQizdVyK8tu2AAr",
  "key6": "D3oNr84X5D6pTvba8qg3NRGpPHcLQhFF49TyDVoZBFK4v4fiTaRDuWc6LCsB3EMru8MXZ68SnExymuCehB5qEzv",
  "key7": "wV5wfsZWqXAg8dsP2WHRsBj6Gz81LVgJXGJgzGBspxKdpCsxKM3pvWL9dSqxkwDi2Uah39tr5FtE99j4iE9hcfJ",
  "key8": "39KZAGNZWUcxz1eYZ59dyQb8TZZHnWcUXkuHQnxvDooKbGxgyQFaFwZJ1bMNpHBKRdv32S8Z1Q9qgdcvNHZ23VCq",
  "key9": "Vw11TyjvXuqFdaF7KRuPQjR3A1C1kosBpadPAtSDd3yyiaTUczWXN7PfnqfhzfKTBEDGMBHhmYLTNChsToHbXkX",
  "key10": "56WwFPoVyTfEHoKwpW92Ve8x2nnsWPffTepz4QDnCaKWawNjcvexgCetBTyWjVN2k3cNtiTGsb7mqb9jULngn9CV",
  "key11": "3LpBi4yhqyLL6QpGantLsVUPJNbmQujayeX2LPJrkZWBDedyPCrLrwUKExEoQPY8orWXqPXoysWMXJBzWFWGpBEd",
  "key12": "g9jeH9KRbq7ae7dXDFMggG3jfJeLpqi2vRVCjNPvBQ6z2e42Z9zyPi5pqux3RiME4A7jswY9wv8nDJrcaqZbRjs",
  "key13": "3hmYvZzo6BskLW9ukzMNqAsgBDSrNdUm2ZVXZLbbNohvroBhDXoJDa9ygae9fKBNXEJXANkkAzAnY1ivyBznBytY",
  "key14": "2B4JLjHtuo2u3CzXpxjxLS2e6ioMG7Cc9hfq3xiNNoDJVrXec5JgWGzszcuSQe2fpKfnM9FtsbqgospmqjaxWVyL",
  "key15": "4iJCRveThrmtq8wMeA8n4vjd8SMhbC5n4rj9uXkbZ2YJXvA22k6je28R7y1VeGUhNj1zKiqm2E7GW3d28J6tZXyy",
  "key16": "3zgcmzQ4tCXwQVwcwrFomKFNVX5PfBJ222sj6YR4KjpNM92WAqMN211SGGVYJS9qbckjbZ43cRbhVCdyKhTmgxf7",
  "key17": "3S8Q3vhNnZAzMrnAwBUG7cJsD8KakiaaxGn7ciPzU1WE3oRvLYT7pCZCDtQfYgvagAE1g7VcY5ytEgPn8H7TZvv5",
  "key18": "etmQKxwXEWnXCFcvPBa5dB1JawLkDT4c8sfKDBCrLdtiioHxCEPz4k6fNctJeKgyvftLTtTsSmN4nYYeHpWd9EZ",
  "key19": "xSY3gk6aK6AJ8fFzjAERao2p6QMzYEFr2WNFLH3qx5q7Xw6ScMMDMmo7esL2as6ngE32t1TuZs8DAcmFdttc316",
  "key20": "2bRT53BSg7zx2W9Sv7YrfFyEDVjKe1YAKxTvXoPZJikB9bGMbg5J49azrscsNEfpPTmX9qxxKiq2uNKNzYKH69Nf",
  "key21": "JTXU8EU1mHMtjejETCa71ZRV3vHXkq43CKRXNmyXw2C6kCm3jJDVVLEEHGRo997TgruNgXgSFKdQuJKCHWwddB8",
  "key22": "35miTEmgsJV5bsJcCMMLYMgaADz1Cpmx1PtdXvKgSLPRkzE6sVpHdLcNmJ3WU9Ehh6EaDnvpFibXsxBsc2BriMZu",
  "key23": "5pPqnoEvLNrdmakAK7QWmNN2jZZeb9YXhZX1bRaSigJwMZ3FfZuM6KiRvVdwmX8RqWVFMhExrEXKWXMJPAgCHwWE",
  "key24": "2L2fGaRwfuj8a3445FX1TnrBCcEdaSZvaNSB5ZNmx5dnsuJqQwFw3kYWpm95mK6CpziP396biPKb1B23uc4d5yxC",
  "key25": "5BuaE7TtxdftzAZbqJu3fxJ34t4ZUafqXe7XuyB9eNVBKAh3vSYkdRw2UAUPfC9i2mQmhYLRc8T41QGkZgVFDZQT",
  "key26": "VAnEZwX86ibgBuRvCX6KobAja3pvzkxAWaaYiK8XyugAwfgZHVzrQyU7Mvx2PbX6kUmm6kMGFNDzgkAMXccgpHt",
  "key27": "4SioUgbjNozgC3u24k9afksV2WMBb3TmTfKnAtcVrvkT8NqvVBuCVx1fQFvjwwJrfwoHWuKviAUrbaAz15Kcijaj",
  "key28": "5rFcfPMdSimQcDx1p3EoDKXJiNPuXboNzuD9P5Sh9itNXAmfzZt5t2szpP25JekkBXCo1ooLRRz3J9hXwc7pGiM2",
  "key29": "85jQcpbb3ua4RK6gMMaxS3yVY1FQZz21W8bULwXP73UvLJznCwMpc7uq4H2m9nGRZuxCMtz5RZNTckS6pN8vGu9",
  "key30": "4WywFxEFTfYowmKNwnDj9BrezkmqPYoXchByqHr1vXjjQsg7SvmzSM8crJCGit4dVTb8RTw2avCEecu6kcagXS82",
  "key31": "3nxnSoeA4GkvXLJqMnjuZBA5XXReqGmUwV9vizXyDXzE4MJBn3qLqg2CmfxKhfrbBrjCUrkM4cXFSxCd2NuqYdYP",
  "key32": "3VLWATTdk2nUi8qB7iMwP8tX8m11Hck3jJXmYv1JDKZMWE9kgydX5Y6NkMTXWYuQ924UkNUbjBYmEDeNuph4NjzZ",
  "key33": "4SR5p68pQKSvwQjrk6nHaVQhDMvoYMD8s9mnsDhcs5hCzou9XEK2oz2X8jnjjHgWkvxLyG29TtNkiFvDfYJaeau6",
  "key34": "BJrFyUwefi8CWXcRLdZFfvp8H7NGU1678Pd6qVh1WtsYG7KctZXDGNMHEt3zGJ6iwXpD3oGStgMaWjeE17fXKjx",
  "key35": "5cHvzDGkLeTY8Uu2UeQ78r4bHg4e8Pr78EbUn7KpzRQyK3BrW4KDAa5Ydsmt9SqpLeQ5D4sHpRexq7ZVbZFu9hLG",
  "key36": "3jnDcZ9Tg9dLYntAYQmtDZs4ER6KRi532pH4DGixSZ57aKnDvYu2sM334XBTc32EAyENRs4myJz8cGP6EKqkPucG",
  "key37": "2naHBTfArPR1ML5CGuip3vEcEcX3a8tnnErYQn348Cyuq5nfBWoWo46HsdSRCBcodE9JqJAgq4CbWhXctLrF2jcx",
  "key38": "2wZe4NLQE9jiEXPZnmeewK3AzVcjZUz6U7d8DD3bezJYQ31SPqLPbUKXGxMRvxjjsKRz68wdg9gH2j1BtwqH1ScZ",
  "key39": "4RtF7ZkdgB5yvCpWc6SAvRT3XvBseGgPE2W2R6mbkS9SF63XbeLrkB4t8cXfT7hskJVTaP7yB3BDKD1G8pbUAAWb",
  "key40": "4n76MffrbyzHPS9tmbb5wqtJGA6JqQBcrckNkM7MW81wJXtdETuwUUaQn1knbAdDCLJCZT4TbJmQvw71g7cskkvp",
  "key41": "2UNxrffKs6aqzMGKU8q4fzpzFAbyE5paz3XEfq7yXD4rfBL3WfyfQmhujbtVTqjbQSx1VQRXKbXQSBHQhmfpJUyJ"
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
