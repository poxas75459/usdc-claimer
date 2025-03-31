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
    "2zi2TgDSQ8mSMGdAPmoZKN3oinTE4rdQPuLQdapRaPeSoSQ5xizni3jEp1s5XhWkkTw2aJbWuWg7sFCE6A76XLDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMznryaZ9SSgsJgwwBBiaKMvU2oMyJ7psexVjqiXxodfassWobaJ1YyDwhjPGCZLryFJqaZZk2U2oA5m6JtrHuz",
  "key1": "3anZQXbY6UuAt2xWd8Kg77zig41PyV4jqRJBEK4MAvkLuogkgTPYtHT4BvNujCKjdd8pEMpRQDgTct7qgY5YuPso",
  "key2": "5dAgo5eg7Rcwd1KdCSjBkZQuHdGpBDivRQfgp36xzu7LvddmPFqTozwMHrMmv1Umg8MaKH8kWgPQ9vJz5kvizxH",
  "key3": "4WZDwp8LJSFupkdxyVhS5Qy1heKXF63ofgSU9LdEztimFTH7WYfDZHDRfSvTKUJ3xopJK5my1XRDLD9XA9PbzMyt",
  "key4": "FP8yNyyYrSA9uNJTxwbBXHcw2pwzvYaHYSbZ186eaeReRgQQFayo5GaZZEMzG2VAQK6Ddsxna6Dgd96X2cGsP5R",
  "key5": "2gn9Qk2QE3KXYC7Fc4E2MKUpRPKpaJBv6vbnaQy3H1qH2cGkzE85j3DYCrZJXs7PxsSdm22J2XhKpsNwYrTYE6B3",
  "key6": "3EwE83SSJ8MBc7utHDnFJvaHXxMoYe9dx1wcxJJsWfo75MRAZFaHBrhqD6ToaPXRRmav3rvVwa43pWonNwakoqij",
  "key7": "3ifUniVgbh5JWrjUj7c8QuVubw3kJqgVUkRjnKH92mo7ht7GPrGgRMtACAnH77XyBTmBFUMQosomKuhoDsE7xmHu",
  "key8": "4wqCSsyRNHrXNc8uahcrvzy5KpiFUqK1i9SbBQPKoSJ4vwHmYL6TozxdJpK3bK8pprouXyevYJpB5stZuquoxVw6",
  "key9": "22x7q2zZUfp66S6aVvBwUzbZZh81oqtXsH1yFjYLNHRtogB52ba5jWsuBK395GYbsiHByTF2v7ybp6A6f5Zjfiyi",
  "key10": "3Cq4193pZkLLLEfy9v7HZeQHTsAKPD9ABG43doKPd545q7fstnQiiNfy65yqgzNZ9YM96SLqg235kGPjsXBe9tY5",
  "key11": "4D5N2Z48idEUgegpY4EJssCpTSbmUpfWCmZPsgbUEgPyL6RGPCLSYYo6FDniPa5L8AgoCjaUREpejZFarVyCoNbR",
  "key12": "5UJx4EdMAUGRjzprwLMEthhzKXqT6K1oyyxAQedYFA83GhXULK3fQNUcYM87PgP33sWdFJef3FAfemQxMs2guJD7",
  "key13": "2KE7gPqJ2hsunxKfcY4RbtzpAv5xUAbW8seACXjBUPq4ymhwrfQjFMzTcxWURfSkezsutp91LzkcWATAgFgyYqLN",
  "key14": "2PCfVKNwirN4NUxQwvENmYKhr7RbmjEchsNJvzFFhpDxoB1AyXMeBoZxexSheTP36n8NVx39sYCQRxBvc9kXD8VJ",
  "key15": "Mp9gSiRgBAnMZWgjbXGifBP22Y7FNdRHnBzikXwt3KLqET5noqXuCtaLNWS4RSnKoy6Ha7Vmris3gp2PpqeiKSD",
  "key16": "eqyyFYySEyqr4FoFxMSmuqsUHrDixiCHCJcHyDNTdABBhtEf9rxMySGEfYE63L6p1rkFuLSWtyt8ycpSeELoMgs",
  "key17": "t2BZ5gcPAHrPJz3CeBVGgZcns89SJSv5pRbyMGBUxyqibecoMPRZGVLk1R9a5Yz3s2Ae49jYt4qMsZ7cX8zVyzE",
  "key18": "3uGn33e5ywc7GzFrS7PQFP9ysnmffR3FDaEp9hE1R4bWm8fFKFbN1gHiZUSZVP5M9xRpGZ9A8WN5SzkRsqhnyafz",
  "key19": "4vmtXGPqLTA8SWMWgTSXt7VDwKcZETsQPMPdyTT9FbVB91QMUGa8WXbP2LE27B8Y3DjeBvqQcGQ1FXkrmQTFzskw",
  "key20": "8QnMkPiiKQrTvAhZ9qJgLf5h4EwwspB7cv4NZ939RPH53GwAKto8MnQ3paZmG1hBsZWAvhLsgUdcPcMToqwG9q8",
  "key21": "5AHMWPMqrxS7RhdYMTdRwqGAoZHYkWzXRwDBq8LTaTdvzB5qjkYydAGrr42WWGk8ayEtAp1KA3v4smQkgo9nK3F7",
  "key22": "2RwM48QmDTiSD2vTg9vXwntiphsvzMqihoNqJCvRv633DzeX9PPA4tvioSom2gpjNBWqhUXzoHK7XxVxPPqjKm87",
  "key23": "2eHyy7myPdUi7iFArKzh7mTFdcCBQM9nJJ2HBaj6ghswW1y3gzkmEM35Hf4Kx5BuKtwYNV7t1W2Z2E3qN9X65oC5",
  "key24": "49zrhGSFvpJfDTTCkaBDrb36kmfAUYeL8E3Rp89Z1U3NkgogMqghRGvscNcXVhTHQCADipvhPeFxUXJaxbAZXYZ8",
  "key25": "3e1LFTZj7WcbiUemQcxDwAGL4AEVAck3TqgoQg16kVnekTrQAb2ZR7irUYfBq5xrT5hS1Ar2nZutZcnzN1K1PxpK",
  "key26": "2JvrttpjC8yDAMfKkxTutR4JZkScbEWsrxhkaQKBxwbEi2G2bdLX7GnaDN9zLavL3niUyX8cp4caJfRSsWrrKgyY",
  "key27": "4EU4wqEvHjK19hohM4qxCNec5LUyejPyLUmkX2G4U98riz4ng7SjbNFbDPVwiuDmmxxPjJ2ABqaeBfsw7VKZoZtq"
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
