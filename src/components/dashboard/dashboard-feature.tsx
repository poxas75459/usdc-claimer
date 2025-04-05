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
    "qAgYvXWDW1dK55h5UyFnfLHpKGgBYhgGsCAPZ3kHFLhH5LceYcQxh12T5P7KyxK4PbMgsjCd21fmN5pCRWMwRmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6pgrDAnfUMKz6jvxYfGw4kJMS5mHCgUkwuKQKecbd3fhcBZQisQ7JBrzietB89xzR3br8FDoAvKhVuHfrAyEg9",
  "key1": "4n78WU8wRatWeE2o8J3AL6wRUQcgsJ4yUgavbTvkPTZzV2W5JqRAgVZPnXxjnsJ5P3PWomrGrXi14y7DiLXsPw2c",
  "key2": "5XTy9ssRtYjYHhRqWkNpPS8uCmV9BD4zDyB5qqc8EnFKJQNuYRDWkZfyL21pXUqvB3kTuFRDHG2k8iBtwudsqcoE",
  "key3": "4EuE5rVY6dUMrFMpmhWvWmiLCYtuRip2pY5Eb2nShDkxRPS2tAg4aL43tDBSFuKL6fnJZY1qF9gBbuDkkXuyHQd5",
  "key4": "SapfHJ29vGq13Wzhkk8hezrHV6rJoefxa1rVm3YTCNPqFK9ksHn9LffidZ5PYrtPJVHDz9gFFt9qNTTFqNUUzs1",
  "key5": "3z9ePkjoRUPByVbFgDnD9ATZrs9qeq1TLccxXuD3r8LjxVCPMS5C3jqR4dcXShZ77bHnaGvbHB8DyUVjkYryZvNQ",
  "key6": "2jKDbqWwGY7v31FsbLGw8pJiPRSyfz5rzPFRBfa37Nwv14iYg9JL9N8X9CE7SYoVUCn5q6CE3PqqpoH6hyiSEPm7",
  "key7": "63W9iX9Hd1tmAR2LtXx7nu4Tgoaf8iV3pxkW7Z7DinMXs3DuGJPx5ANCHMkTgGzKaozABzpDPJKXT84BJnonwUSL",
  "key8": "2WVXtfUCt3ymSUGqHoPjEMKMYRW7hWphFFnZ4ZAiB4MYZQ3zKnZHxasfDMybDGU97g4eRJWWarzSPVUGJoe7P2fY",
  "key9": "NeyLzwSjM5iTSChsMWBdP2PZr9sk8ZT8tPJqDuJbP1jw6WoBnzJJ5zFNhSRwJ7aa2gzVmwWsucV3HhGUtfuJhGw",
  "key10": "2TWZsE3r4KbRjHQNLL6Q7Ht7sjRFE8YHyGqErPh9iN7prkySjp2bU8uzj9TQnn8MQMW2Y1MCibHyX93dwkab4x6Y",
  "key11": "Fg1SKn73NnJPWjHtpBbT1H3Y69LpoPVxg1WoaYZyZiPz2oDKzRm1F6nUtK89mNG1egzrhgEo34E85EvCBVHUoke",
  "key12": "5N4U9NrxmTA4QHFSe7b3j89GHh77ZcDbiweDdLJCVZGJTjgshtsqzuDzXKoWH42ifi7cjfnsEY8L1eCv3gim11cg",
  "key13": "2xDcwmUgKKZxLeJyvoeJQ5kWCVn4jhc3L4cJ6Z2a6o3sBBxZGyHsvXwRfCdH19wSaDpkL2iM2eND7TutZprq79E4",
  "key14": "53kjEnJ8xsE11D2LK3j2bLzjhBRniX8PjZQ54751CY9oWi8rfNq5UoSu5fokd5ARE5js7aKwUiVoWwVz47oAPUWf",
  "key15": "f2qzPmZtu8qTkCbTwSaaH7SQhaWdk2YZNd2TxHVXe5m6CEj6mSr4nVTmDcPiBUvXU2uBv2K8PopdYS2rqfyDYz9",
  "key16": "57efhTDQNZvSbJCivdpHPKPN3wbVKKYCtoqrhs4WCPAWyCu6uaTS6Eoe2cNdHkVT9HpXGYZEEw9AhnN6k417D62V",
  "key17": "2B7QR3VzdphtRNjszpzT5uVSiqdG6Y5USskZSYbdHWM1ZA9uFedfcunQSBvGk3AZjKjKePgidPEVVJLzwRUTDmsS",
  "key18": "2wzVo3zahjuxG5sNiAhKCARMD9ZkR1jxXJEjXi3tLhGp4yD8xgZm59UxrZedj9Smw48LD4iH1j4jhRGKAgc6zzXG",
  "key19": "34nQk5qqn55QfDTKveeEQjJBFZy5Sb5dS7oGnGdypBA4HDcCpGmdkwW9iUD96do66DCfC8YyJwjFq5PsANw3ZXgU",
  "key20": "4qVYX4GzYAKdnCu5GhRAr3xoSaCD9h2JNAkMkdVnAhJ4moRVR8ESQxZRz5832D18HrZuCFRHJzRSfgRFeTuPgZBD",
  "key21": "syh1uhiEL8ZgGCrZironMyzgcrq7MFK8tJSSgYseMkDjsxQNdLD4hnxyDqm8ErNsZFXD6d6KkNfsH4vGENz5Qxg",
  "key22": "5oWnPPXEWy2CqKzFTRCSYeJbpGE8Pqg2YymiFvRvMkPqLGLitDnxQJzeWYcRMm4HQVi1BoMtbJwHveLT6K85pZoK",
  "key23": "5mMrwabSFM3U7vGV8z2byBEtz5xiUTxGvzqgu6huqodKbLqhBRuUykg11qpBf4v27fUMt7BfZ9zWqhKpi2YkfUtc",
  "key24": "5WonnsDy3g3foi2uE3BqGtq7ykWRJcj7Qx75Sxswy2QT6JYrA65DVyYYqLEMEzW3GQycrKdZ1qdekgDKzKAFicGa",
  "key25": "5U3jiLHL87nns2W62pomkQMgXoKEYQu9VuMvYM5i917bcrYWoa5ikkqunUDwtcB4LnmK3reFs56ETxPidTU7a1GE",
  "key26": "pXcR9ApYfzcCH1Gdp5mhtFbv1ZLNdu3yqcE1hivsEjXzhZUncH1tssF3MwjW9XjxJKJhC2tkWuCGAxkrWtJP1bE",
  "key27": "3QvrYHPNr3TAG5w3HK96ZjM739uYYZgAPo3geeDVxzjrJCbzzvsdsKFsrs5mTPXj6qVxLuS9gfN8HSvuuadTA6D1",
  "key28": "21nG7JSAYaaVSk8wRoVQj8rxvkvjnKyvaEySgBogDzPDSWPeHX21SbkwdAneLhooFLLBF5hFHJq74jCRxSCGguxm"
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
