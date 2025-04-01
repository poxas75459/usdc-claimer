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
    "5rpra62rEwfXPYVw86EpYncp1AD1WmdK1YLWXdJjm3wdWHXQPz6CCsLPheuu82hFpVWFnBMdS6NdGQfLfcF2aiAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYxFvt5hC4HqopmkVVsPfZPRthzC2ee9M1GwQabHfBfVC93SFJYA79GspJzSP6LpMCuD9VHXJfc7L88CPnPoagN",
  "key1": "2BfuRRy3EVn3UCtnRR9W3mXG2qiGhTRY5Pb4R75NptmUaZu7zvcdaVQfUZ77K6vPUEV81wuyFU53TNSjGynoiDgA",
  "key2": "2kwJRbhBnVhH4LAZsFJzSTU1rjYZGNo7duMf6owQ7iy48ZcJADjnJ42BPEBCXvTC6TPUuvuDjcRE3TyG5JjKXM3i",
  "key3": "5ZP2LqAWLUFUwfPmE9WnUf3wnxMKw6WEYM7yma9eRRXScDKVkyu3596FFGCbTQtkB29Q46Hnti5ddFXoK4JXgsmr",
  "key4": "3XakGkfsV64ofhex1L8cmTEZ3PMGr96tRdDdFUfSTbi3PC1ZyXourYXG5Z3mYmMyZVzVbNntFqUoAKSHJ2oSHJ7S",
  "key5": "5N6Jf9UV7XTAdK4GvdiRhw9T4LpKj7VjexkJUCY87e5oR4827CL5RANXQpio6VNbSyXMeSGTVWvttRUoTjN9zeb7",
  "key6": "3CgVqqPc9rJvoCTAoGony8eCu43LA13933Yfcov6daWJwNvTwaxGrvRngcETwLx3VbnTGgSgFNr3W6zdM1VxxQS2",
  "key7": "5FujBFt5DFW2n9Xkkj7EAsZkuYVYsb98Z5FYut82uUHwJYD2QGaSEbAjB5wHt6njBFmFoy8dDTr2iqWCN7iJyQG1",
  "key8": "ZZJ6TMwfefzHLkiuPAuGVE3GpDdBp7sxgtNuCkPtMJwDbrED6xVz6ikLX63FPrfygGSLB4T1wCe9jiq4qZaFFWs",
  "key9": "2kJdhSa2VFfE9SwA7o94P2dvXBVafGEJ5LshAhd9z3mB7SNWcXzCPTm9kPjXpAkVthpLqYGetyUhLVRScpqzsYNE",
  "key10": "4KZGkveL9THHZ84EeP9AYMdkzXZpgs39v41e5tFForgf5ejrX8yoKctVcA6hPJiZPVZPiPktjcgfv2a6pt2phApe",
  "key11": "2ooZBg16W27WTvydf8BvRr1AdgzwEhGsbrG5h6AFfst28dQWHhjeQST4sG48s5xEAVDXUVFZYzYdd5DQ7oDH4p5G",
  "key12": "BYG4imWcj2XS2G3vGkdRLvpDhVbAyTJqDF2ckGZToRr4yXYXM2KbsYi2FMZ9uqfZ1mRewPcMVGwPxS5AXVSvhTX",
  "key13": "2DbPUkgVobnMo6b4sHVyf37nvMmzmM36ZLaVjmY53EMjwSvNmAq1MAg4BLs29GuoHqcNM89iJRA4BZi2fFc13488",
  "key14": "RRWSknbqpMB7o1gYt76kkxCrZLK8GtfCyNgdNugPhg4KdUqZ3rgMc341Lif8P8EGbUADCymodpYVS1QnsBfDDPP",
  "key15": "2vAiS5nFVxGzHi3xqAUZBMe347EVRvoKJAQAKfFGU5h5dksAgYMwza4Jm7GddmRP7WFF1uWpBoxMfNC2GTWZwEu7",
  "key16": "61T7DiFoh6AkTBfrUPdjaz9kZrQV7eD27sjvN1Nd4F9jSnuowCu5xDxmnuJ9AsDL6riQV1TbEZofaRMfVdtY5CyG",
  "key17": "5ocGfmnLawFcJXuRRjPaCHYcAsnSpwQ8VJBbEg3X4rxW6bskKxir4N5AhhSx8Nhn5FkutAVyNJcWhUjJvxJZLaJV",
  "key18": "5gMJEuNMDUq3ZDTj9E2kJDyJVJUBdZkgjHssvdEN5A5RQZ6W7pjbss4aGZ5SFtw29HXXWTht4cUELKD5yyVTgr3K",
  "key19": "4WLBRFFDPEmceFiSRMkMmq6ZryB5GPA4swru9Nd8j5sWa3ED7fdhebbfrGFbyPFZ6mPpjhCSk3XHeNd244H8jbcF",
  "key20": "Bzm7L3pLd4stbiR8XWvm6EFxsZimVshcd4ftSzBMRmEYrj9f2HWuRNMUAchpNFh7dTAuBMLLWkCUw6yGcmCPSqB",
  "key21": "2vmVZoXTucz3GXYLvqVX7372AJH8tVSTFfFhrQTD1Am37xU6yT521x5tiCLftyHQYu86JBohXWFnNhvgtPvTGduG",
  "key22": "5xg3ufu1buYGNr98Egw2Lqxh7tTHujP4UZDrJgFSSgGE9URG52v39gUSoxGBq1cGtBB52FsE6UB3HS3NUch7gsCN",
  "key23": "4E54yqBKFJLss8Ti1JqZrZUAUu4pKuU7JWcRsGFFvQokvE2pGDU9ccoH3aNKYXSNahez5thW1XGDGsuS5mRLWMde",
  "key24": "5o9w6BKBcvCLCF6KE7cuMXWMukmKZ3DeJzi2qFvECARWib8q2G2dFZt5KJKfXsAwLfCjXvmpxwGC7DywuVqnpDX4",
  "key25": "2ULzms3F9DJezXQ8jXm4jf9F8SRQrAwGe2JtujqE9hcjE5Rjv9uuKc7RASv9S1tHucTbGSD2Ya9ckJVKJnsUhtc2",
  "key26": "5SrikQGasiBofoawroCkz5U1T326cqTVZsYPZaeHkY9D1vEWUebD4Wy3beavNRweiS2YR2o5mQrmF5gA7V8GZDyP",
  "key27": "5aLC3W7PeTXX76tMLG3jDgzBhi6xyHri59ZGKVcFYnfAeb9fVVvVbZDtbbYTr9uWEmVzEqunTGS2hDeLzbmGdH1N",
  "key28": "52QVuYgCV2uWFRsjqBbBUwMGg5PsK9Ba923xjSDvXJMtktiXBuWFjkFCeUGWHvPjx6sXQkc8SwkD6MZ4nGcBGvHZ",
  "key29": "4fDyFyWuqqHiwiTLyR4ExKXG2izadg2eZ8JidcePzYKFwcmtqcgNn6yq3zMWnqDVg7iagBEGxk1xj5Xsb2EzcrQo",
  "key30": "4vjAfe81xjATZAKHx59Pm3cH8jSjYTYXhA88R6zGsk3WuRg2T5QXipDeYEf4c58XyftFDup8dQ8TwordcYdVYYaY",
  "key31": "2vyKpkjyZzwsJD5F3nyVLoEjT8eDZojY3HtYaMjjqnPpe4M2NUvk1yi37osm2bnUa1bVJSiYXEyNkgrD5GLbWJpT",
  "key32": "3uJwF9knZQnzSBPuRMJnRGiwjC5tm7VhpubW2XC3UM2hVzT6TKQM6gZiUhBUANV6xPtSfyQEtdpfq4e8unvLYiHZ",
  "key33": "Xm51XFH4hVvM6Wxyv8hqYjkcXzbpgRVHwPseJN62pEM9nzXw9LcUVbWc2eB1sWGJQSKQiqPzGTX3meH2B3TEhZH",
  "key34": "3Fd7WQpDAn5WbJshuEMUy1KPguoEjPX5ZHBMvYSJjpGCgetNZrCWEQmnfouNn1c2FtpLme2mmZtDfuRn4smzWEnK",
  "key35": "2oLuVSKF36yaWAMQjWufSuTXSEdgB2dRmnSNSZnwTy8cjnMKpxxpVbcQvsFoLgxWuSR6omyANxSbZmYQqTkQt9WJ",
  "key36": "q1Bro7CkgnFbs71xJ8H8wnSFYt3w8bfneFyrw8bi72ap5map6h4aPig5AyTjoZTR9C2LqwYDfsHjsERi8bDMWSu",
  "key37": "67kWtTVBZfNr4oY2USF6N4Ztgxmc9DWTbLQFucSPxdwhEaN1xR2wzu3VHPbEH8y39eUfgGhZd2hKua7wduHRdoeT",
  "key38": "4XVtA1y1xvwDNKPdKQW73GxRGQ6qWcAdB5Udbo7c4pAhf2xk5T8cddyEjUFna3v18P6WyK9g5mwYxmZb78PoJqdU",
  "key39": "2wq89FEKYzhQLLiVJMbvV77tEQcf3aSujZ6TKvW24Mt2sxyW1U6993wwAFHeXtfSHXNALpt2Httf1LpUCUhuvX8T",
  "key40": "621kBbZDkvzAmxPumUrkcHpr3ebap2Jd52A4gXebW93zpV2mEAXdSnjiEAwgs8gukvSR9KMd7J2VzJLqfyc3dNJT",
  "key41": "38kGhJQg781owDU9Gw1hKXX4AYzMexxUT96WZpbjpQG7dixMaYcXty4Fr3u2i3KspHnzNbq7EYy2Zx9VdibwsLtk",
  "key42": "2tQCvMcSx7oeoqEqPMBCaPB7kSoYgwSbeALfjFs7j5HoFwgpejaV2vdzJSuwJMLe2aCfZej4tqJppbhQg2UAUBhV"
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
