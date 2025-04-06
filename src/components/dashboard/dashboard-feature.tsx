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
    "5Kud4KQhHUAUiPUqQVV1ekEGaTc8WrdVT8gAa4txR8jSj7F6eMz4HucpJkKHEbH9p1ovrUrEMzRDSQbRw2ZCDsXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJpqiZ4mPuHq9QBsZpY46mkXEdK4mrL3Ast2MgfBp9DJ4sHL7uyLx7kyTf88coahpREWj6Dqyq3JNEdTRrtVAkM",
  "key1": "4Gdwaw9k2s7GN3pnd4oKAKDuj96vKmcPXkPAxAkn12RhjnbZCAua3mPEjx2jdRh6sehLZbf1pwAVogvceqEFkY4S",
  "key2": "27V44GkArtXrNJC751Y9NBooKFjNzmEAEahJusPVxhXqCvRFju4PqFbGFeP9Xybn93EfrsRqP1H5re4da1E69QmY",
  "key3": "2o6X3izpZEYDj21KGdmrUGiSRsEDFiFwaNTu5jQAH3DwCo495miCaix5jaWuzWiEncqAQ6CHokoW4d3Bb5QZqrPR",
  "key4": "2YBC1rfWJAsnmFPo3JKcbrS6bs8tWsjYnQfmNwD6g6eepd6eEpfTsUymGJ1E9Mu4dyCg9KCR1BWkgGwifd9eRxfy",
  "key5": "9cpmxhTNzXgizocumv3jm5P1vp6KY4QtRmMzGNfWAGbH7jEVAmALLmzr7T5EdZ2DhhpxVZYRf2N8xgYCrNUCWaR",
  "key6": "gcHQDqPms4XN8cahvhsmPoeStrCG1CEpV6BdQ2GUfzE4e5dnyEbhKEF7Mh9isR2cW4XX89pKpvPEP4DcMdpTS3B",
  "key7": "3M377Y65DakXWXZ72cit312dgFmxpiBJwiQmVGeEzWxWDRSExXNHK6KHAunFmBM8A1V1VV1AYQ9JjBa8rDdSTc4i",
  "key8": "3TjEaJjPiEFpZPK9QyUvUCFMTkW5He1JXE5tZ9DvtrBwVcZ4a2RT4BqnYRPQvupHhFngm2DsUBgKCGw7zBf1S6Hr",
  "key9": "hxXxUWAy2NBkJpFBZ4busgn78sGLZjwg8p2FR6F87H2W5vabDfm8KxBHfEYH8n3up7awhovDQgR1a5FZsjCCELz",
  "key10": "nZ4yDttfC6Zfeuig6KaxRpcM8REazDHWpe7wW8Ybu5KdA6VXEipNzghNDS99kPz2TPw8KmkcnSnGxwvwGhAfZQA",
  "key11": "3ca7A39MNxK1vcRfvyYNBn9F5AYveatjYcHz63jiZoVZC1g8s6garHcqtKi4BKpXhxipY8cFoB7RjU8j9GCoZ9m6",
  "key12": "4R3EuhSrV1HjMNACFYrWtG78wu4u8ASyNeYfywNuaSMTL6ougfsi3gSGfXhYE7WuzBLCF113azgr8U4THUKGU4v6",
  "key13": "4Z88qRR4XqyTJzX4dBVUma79VvWbQvh8YTS7HqZbmPhqC7ti5BTnx8dH8HoJmWwAmdzHDa3rJWZQUw3J5BaYySXe",
  "key14": "REY3dPmXMuiFtYra7ybvrAUgLCmepgYhKdwUaywSoEE16GvrnMAgBmyZwzkkFHcgEK8qjodnHBx9xzKNWnc8Sr6",
  "key15": "44BZWuj5APDbjhGeBjWDe2QZ9GY5wvU1Wsjyr4givXWd265HYMecnzH3GJquAuzzhQwqiWwejYLE4cnreQwaZWVd",
  "key16": "2PPSgXkTRH3y9M7cUAEbGBe1UgePB9i37iN3eByynjTuUp2VqEZoFU1P3Z3xpiYeoFmXKmDajYq6SMqYehLN1J5g",
  "key17": "2g51N8s764rFEUwMkihbsYGeN8mKXXQsTMbeDjbZSg4stJpBDt7WQSY7jfqiMmywYuMvS8kQUWnQ6waDExFjXBPz",
  "key18": "5ADxfvjGbrPxzLAfwiirjcMcp1M2LMd5hUk81zkq93NsdFtQGbQHrQv8j24GQw9kfTVE3h6ZLowzW2jw3jkraLG3",
  "key19": "mxgbKk5iZkv2tZzfM5DU8bDS7egBze2SPDf81NzZKL49at8a3inZWxAxRAV7ihxbXtW3gp1ivmQ9UhMkjVSk4fw",
  "key20": "23Pdem6Zv5zDAdcCQ3zf5Tjs8kjGgFcumQN3H6uHyyA93ASJ94b5W33etC5fYd3K7aEbSUuuVF3QFuBcN7buKq58",
  "key21": "5cCL6mheGt5VoTy1m39xcqGuykS8K8aoxn1AizVgg4iCf4NjiDaE8br3ELre11kPfxyfZEvtP5sfRP1QXZGB9L52",
  "key22": "62vMCZcDrMSdbyaXGFpZb7cdKG9emMNhPc15J5a4Kmy9nrqTz4TrG7G1VrJDgh5ZhgyCvSz6RWMfRxLogCo6i7Ej",
  "key23": "2NzuR6VweY7HKSiREWnwzMr7cJPvWswnQJRV74wtgtJXu6yGvCMVaRVXEKoJTPZZrgdYGjPAFy4xHhT4YQsjx5oJ",
  "key24": "4tEVs4AZ8Pj51GRJZaE55c4LZwETf7HLdssvj4KtBEzZY8opSnP17GqvgQCXKgAi6k8ZrszZM5uicw8mVFM343ew",
  "key25": "hcPGuuV1XQSbRTSPbywXXkfefxZS7V9X8yjcx2Lvy6XEVsXKdwBK838oPV6Fq8NrX9JiJRJU311cPYiTKyANXEo"
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
