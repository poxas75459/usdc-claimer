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
    "43xNedVA3VrGB9T78dU34PVPBAEeasa9aBNtfQxNBteyhFYsqx1mV9ckRm2JXDToGnxGvsr7dWswZCXb5gLS4RhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JocsrdKkdGjbwpFWY19pk5HwjqfzSbMKjDASsedjhFfDeunb6PduPJTZ5Ms8L2UC1y9gLDDsRLkwzXFuV2z8AQU",
  "key1": "5zNddkVqVb2CS8jVSJW8Kr4EpG2QbAHRdsAqw7bxHK7DxwrxtpvmmRT774oV2Gm877jiCmnzFexieNVce5sPjKqg",
  "key2": "4KDnBt7mLpoMQZYCkbeBAuoSn4zB2FxGwngLdDgCMwm3eVYs2uo92QScTDBogqKfxsjbMzdNvHTSeBNtCWS9XR2J",
  "key3": "4kwnMRcZskFfTdNAJTyq1NjyRwWjcx5A3P4dYmzszrie1nmCJmPZ4q85zChBW39sqoTbsDwUm61PSr1xNh6bpbqX",
  "key4": "JF9Bf8yfgNbiNNLNJVsFw8dDQhX45vK7w2PdJcoUjJYpMDLo6Lfrk1AebwAGxNbQ2GAyzqfUFFM2aCQerb8siLH",
  "key5": "2tRTYC3pZzHJLMNmamkDmMA7toyFdc78bNJpnotnrqEsRbFEu6KYmCz3EmCdYuQWYUXbA1epYJMC1E6BxJes6bcz",
  "key6": "5RPmfFeDBhG9ZZqyadLyYhowAuCXEzUsvAJmUCqnQ94wPbkpyt6ZrJ4ShTtnTJbdoS9MFN9zvwFXArEXJTzTsDe5",
  "key7": "3FWQknda87haELDBP3LiytRtVDJnVrhPDNrnb7gvcoFx8TSYXDpUBUMdaS7Xx5HL6kAS3Kmr2kP8spzjim2wG1Vc",
  "key8": "4TScgJRfNDu3pVFWs5TZvE2Edp9FdUGjSxZsrbs2g5GE4GiaKmL2VAWALytDAgAXw1m3n7hndU7SPmnUKsADjftT",
  "key9": "4aTivrmHdsRFM7TVUrRwpFccP8iKcxMuHsjNdKNpNNPux58LVyELWkMKvwtEQE7m6VsQxTZ26hHLHkVLVVtmM6MG",
  "key10": "3fPUdQim6C32rNKjHRSps3cmhF8WYWD86JsWDDdGYXU55uB1sYQtcGgJmhELkrVhunQZadjX9NwajAPrTTa2Q8hY",
  "key11": "kZM91dFMF5tqFqWcmXt4oJJnw2McRX8b3a4wKz1fCcUfnFs5BhXStsU379bAuTtmthae86xCF8UC7vcgZRjuKB3",
  "key12": "5yMNhg5uvCsZa2fB8i1RyEpJgBxCdviyWMJUpK5P1QV2RxYTcjcedDyESLXcYuYPQ97cDZvuBPaGSAGvxwRTL9ay",
  "key13": "3CDYnyeKf5WqyC13yNX8xi1UtXo71WbMEPeXsu2HRJ19mH2JXncYSCrYCXNvoXPtDUPAth4YsxX5cb1Du7eaDWeA",
  "key14": "5KeZmVzrMQzkN5wu5RsmPTAoU3PNKbo2JcYuzN6Q86uQXtNbAPsxqnVY4HhSBVd1pyYQRFTPMZ9hHuz8UkgPH2Wf",
  "key15": "ewMHnJeUa7RiamMCFQNEqKzDU9C8Jg8RLAw12itZEFa6ujfe8mx9dJdQajddExLa9wYpeJf1xeAXouFnKMjuP8A",
  "key16": "4Vz41Eg6cEquoTQJhiyrofhfrBy5Lfct1Euo8Df9hHaKk5b4F7WTSjQdgY66vHBQvVTVDgMaTkavfLvzaR4ckqmP",
  "key17": "31tzDN52LtXeAQhoRdN8JeQDGmcUYdF8z2G6WyPWb8ZtGixDwUVR8AfWT3wv5KNVvjpo91V6TZHA7g7PscLxNU5o",
  "key18": "22U8xoa7ourND2jBR6eZBaGRerPmtVEsKQoUgpxqHNsJH27LCqtE8gXfMF4BgM2rTE1xyAwrYJjB7LdJrg4ioP2w",
  "key19": "5WEmbovNPXZ6rpWPgN4VdghDweU8HHjqJz2yMyQ7x6JJihkHKz5DgLvX44xiTZ7f2H9UfBCuA3YNH6iVoR22iub5",
  "key20": "2iMnXN1yg4Mz3oJveMZxKqnM2H1T3CUA6tv1Fe9iWHfpnyckPvzJcrkxBFpCFaqT7UmWEiAEDyJLXu357jPhikoC",
  "key21": "5SN8WApsqdwzLQ1VSoGPZGA2KxnVCjTHxN1Yrbnp6yLiyY5rMu8e7KWsw6DqWXJ3V8jxs7UQFToEVZ9K4rnFPPqJ",
  "key22": "5mzTZa7dMi2nDv4gVvxnwNHMutSELCGxtXy5pQm8zhAaSky3Dhm6jQQspwpQknMfaoZrYq9qqtyTNUsnJDVuhUav",
  "key23": "3wbKrFFqH3vKr8rVNo5LtakSXhcEtiorSGcjrKoHq2ukRa86o3iRRfLMh4n4WLUMrKnP5Es6abq468wcsxTRCNWS",
  "key24": "3332mYWf7hgv9ULj7prYxW6niBzKrbMcxsPvcfZhET2LaRyw3nB5NYv4bzw8ds5gZBY4LU6PEwxPE4syNBdSVPMq",
  "key25": "3ahTdu63bhmEya2K4CxSfYHPus7Krim8HQZNxNwWESYwSKvunF6UTKHGi7BWwbYTA93RydnETa3xePZ5HkSjRpaA",
  "key26": "j3RVJRzLEeCUjMB5t7Z2hxqc7A7XfRHgiGAB661rSaPQfcLodE4CFy9Pra8sWVJPPF85rEifrEGo6PKESB128g1"
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
