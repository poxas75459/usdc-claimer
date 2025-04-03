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
    "2bBAHAJkVv4bhsrRvYDvMGqzWCkBRf8GCPs2m7A1tswUQ9BeM187tvZJLZxDxLy4wGYykW8yWsfpTndQ3FUA4Mup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSq5FEdExGJE2zE9bZFgNMLtEq1UwVR23LrKoUQ1jjGKzdxf8mMHqykWNURZbgZE2rP9FtpKHKsHcbujkSHjaVn",
  "key1": "dTFjrJf8G36KGsMoE5DsyRKB7LpdTKjqBXYAq6tudLtsnZsw6mZeT5HpFm52AgeHt19GmDPbH76det84rHFfqHG",
  "key2": "5TXJacE71D2xv5QhVm5EthjUMiCjyhHKj1afpChjR3bkkUwZW9A4tavRsSMsrdknT1kYAVb5ZmmnkEGBm8HeUKYn",
  "key3": "5rKyFp3h1CyUVgK7NHeiR7mYXy5Y42aAgnrtSz4D1Qqhwa2Zd1VvPtKWksbTXV9dQ5D9U7cn8aMsBEFwbNMpDxRC",
  "key4": "2k4eeCPCiEa1KBQALYWCF9apSqHQn2TnwoNKthtPEyhjZsUJ1TrgBXx4a4J8LwvJrCsg7jDkH5J4frDE8qvoJQyy",
  "key5": "XHisZKbV4G2aH8H9HwwSHLnrLSJE7Vza1iiHfEUVTCmXg23ie1kpdtnrmPoeRDHN9eG48f6yxZLXYhVMw5SAvtU",
  "key6": "54XmMRPogshnUu74YnaudPF8VPY4GvWk5KtbaoffyTQwGQWxVJCer6u8ztqVrqXTFSDjLDc2YvoUUEpmc5tFYDbu",
  "key7": "2KBS5QHGCFAxUZ6ZnP97eLUGetBz7HYyLDbrzPQFbamJnf9rS5VcKVSXnjE59QZRboBMRF9ck92hpTjTo1AFywHn",
  "key8": "2KXTkcURJXMsbooGEWcVv365YxGyxGmPbJKSFmQ4uLfBcN4z5uYpQJzP47xtxEyRw8onNT33XknqBZJ62TjfgbPC",
  "key9": "5r1fnYGWZq8nJrBpwAbuZtrVevMVDWEndsBA2GCj4YidfJ3mCaSX54kTdFcxiwdPu4Q8eQHNUXDxGywBRDSz5pof",
  "key10": "4z9XiAcADGziYUXEAKUKu8CHAaQJEzn3EkP72PXMxL6B6ynm7LFnMvKfuFevcsJ7sytkVoVswAszBS7vGs54AvZg",
  "key11": "2SPWEARDU46TVhnWEeNu7ydu9TcD7ZMzBnrHuuWn1isPW4866bfktuCqKfuguhcnVHUmcwrP8KbHqqYBRSbT8pbd",
  "key12": "KcmWt2yyxD2P2urcrfCHR8aM8MnSk8zXToggy1FRKy7VvGbns5Ha5z7k14XE4Jf7AtWtJd48qx7BcTRHEkViSBH",
  "key13": "31AiMMKcjin6Ysvh1wALudXk24QWNDFuoVEKUHEdieAFeovdxhbmnT1cVGAihTDBDKjzw9B42c9SYecL5p9PaZqm",
  "key14": "5MQkAKbMYnPRudtEjpCFC1pCAMs6wxfN8y8Y5MSUS7v6ctTAcdNJxbpPj9GCB84awuEmKTePJBV8MuzHnPcRc7Jf",
  "key15": "4cBn9GZWmYq1vq6vBZX1ds35rkzJkqgCTk4cEfAqzfWHdzsNowx94AE6wP3j6J9mQBP3xrRRWvpM4mDeLKiYaPbL",
  "key16": "2Q3Yn5ht4vUDkYWrN5iQwgmoqYNtqvggMwE2VHAcvVWKczmmDv1DHiQPqwb4Da3VR68u5Uyy2QucVhQXmNz5w1Bm",
  "key17": "3etvJNgWq1MUT754eW1VWN1VtGdPXXxm11Uy2cQgV752PeQNUQRsUpPDaQDbxVzaBwhho5FwNZVHxiPUptvRoABw",
  "key18": "2zrA14wafW179X2ZVoBvkwYHgMXbnTzBir1UrthYsJ6qZy3uDCNCx5mJEFNAXdvXSwdt9mZzyg9BSnLdGQ8mpm4F",
  "key19": "5tWF42onb8trZJahrGuEzBHPJtsTaXjLfiQcwJ28HuVLSTrnzK3GG5HoeNSDa1iWTXakpdn2pdZJyakyPmPJQraJ",
  "key20": "3wANMiLpQeGqYPZPJcineRrnnrApP6sYHpVqQQd7FL8Ntfe9dVXieoiGh2DSULUoLccGgRLhTAa5CR3BmTLb3QBs",
  "key21": "r7hKkrAqEgbasLd4Y2JqgPBiZamttXKqvgpgQcDsJRfYCh8bUVfDQ5WCAbHd6qUz9W8HtRXL9L1xSayBA1RsYvE",
  "key22": "Kdu1MZavitpXrhdLzQF44zmNtQ2bFtQUQfn7rCSDXGJcmaGfP6o5MAZJF37wb1ei6S29ykn5rbY6v4V1xtXXXgC",
  "key23": "Ps1Rvg8udztKNxCzPEDBp66LqANGTKwMgXY4PGMpih8MhHF1FMCh1Cp659coP5YLKhSQgYT3icMFQUJBXTzNc8n",
  "key24": "294J2dwoj7uCvMgoPzqXdqju9vEMHQHsD1zFdZBWPtg8aj4dkz26ESTs553kjBwy8XCCiDWW2zMWUvVG2YeFenYv",
  "key25": "s1Pm7hxXex4FLHhTjJU6zXVruKqABtMZxKvgiEKGQHk2vyApiQU5eZhvCBEsjsYCVR1ETRduM2xvcq4JyLeFcPy",
  "key26": "ktZLRzQukGz3dXVCzQwbh5BUpe2wGr5LXwpVCyyRfheaWeApKhRoGdH7QnjRYHFgLH5Bb7yX6EV1JoGvuSxktTp",
  "key27": "3KEVgfZJxguX5qXVQJqLwMgjbS2FJu4Tkr45xWRPYbayiBgogVXARmEHWdUY9Wdet7uRc27Tjjr999TEQYJxrhpj",
  "key28": "57Xhu6msxMSK3x7omb6caW95Y5rJ8A6NUJzACHnLMKEEzTbqCupN96qraKpTYcZkztrdAhVGBPV3uDLkgdBbccsG",
  "key29": "3cUnXasV7pLwxicEzVqGRWyYq7FfD8dPYUVqh1oMfFbrPfcSV12N2azGdXSLiGQgRxUVwHJWSMyWL7WLHwNyyXoe",
  "key30": "3mMUVSsdhi9hUYzgm3ThkDA28GTrPRbRcUSNSu6AuGkVRR4z7vFZCnkhniZ1mqDvXALQvzSCorW5krpdxEkCMdRB",
  "key31": "5gbHwCsQm1fkZKfDGCzhCrD58TvPQW3oCUtWrHrmdw3MyQkKUbjUa4Gkcc6MYdSTHF2zd4Fn79tjWm5i7P1gYHh",
  "key32": "jHLqVtcexMCj4dQw3WfoKqsczxCB85rkLSUirRRTDnmBvQMhknAmMaqrVuwVjVizkKnujZvXUopZE8evb6TSEw3",
  "key33": "BLi28prJsRFkKhPDpZaCjtPNdq4tfGkHURHXk4zqr74t1KaeiRANa1FUJ2cM3hfA2Wb1Qj4HqyH2Ddy2WBnbUnD",
  "key34": "bYnDcVHtGSvfRPFJfhGhEHi8FLT5qkSi4zpaqXe16BZsMERTm5XcrVU4ZNaT1wYjshwJx5YUKm3WCTheADngw8z",
  "key35": "5EuDJ1t7yDHtRDuVWuNuKzfTq54Eq3qbqXfpi7uBSEeb4r5kE4PYuwvrvTpW8KqeD5rqCKcxepjkDfjEaD2KEV9u",
  "key36": "2SciwkGhtrL4hRTeHXEtkxo9NKcCVLcB9gfFitsMWxTHaWPVw7Tfn3PYwYRxYDKrUmFV7ZFRxkQAzVfinMfNyDiZ",
  "key37": "4bAoqFC2vd3HKCFFzij4SQeN1hNyLriBoEpLBNofdBDy7pphe7eTHaVPskSoELqGkr18Ue9jCXYCZ3KuVNYPcFTJ"
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
