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
    "3ZHtxbfrzJi59d2mAsjsqfLW7Uz1sSYCpva7FpUYgH9oawPHAWjKug6bLusXMokQfBMHnNEYdBuP3pA5n7By5T6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fn8twhuHngtekhR6zdmRcuc2Lg6XMKMFzVPzi8Yf65c6Tu2qQWxAmsUwmnYooE89feTYWNbDX3QksjLmQHPL8s5",
  "key1": "3EUg5Q8YAkQaGn36xPf4DJpj1AZf2BRmfRNavnhgstGhhdbKXX5iJ6h27CgHF3RJMV3e4bgW2427qhaipK3ZFe6u",
  "key2": "4gSF9ovACBqU1Mst9Dcnus2aA1qg6imhno6Pw76RRDe6F8EtyQJvANJT7PWmDPvXR6Ch54CPtyrWZ6K6BfCzEHm3",
  "key3": "Lz7JGaSvevbgpZSeQ7q2BZzqikzAnbExVH1o6967RWediMwSehBJw35876bXFg8xQvtkvJrPKiRyGxgFiGeyv31",
  "key4": "324esvKeZdc9KwZFVvJS3eaDJcdAwkjQYEJmn56mAjePggsZ9jphHwc4iiYkhun8kViK2CMFFEKc1S4xDL64Hz2Q",
  "key5": "4H4JaF7Mo5kHSDNb7Ry6o2yFiaxVzozbzRtwM1vVcvrm8utX4W1zEJip5f8XAiivWJur3cvoatp2DQ6m4aUmUbY5",
  "key6": "osE5jg4q5MpTom1wg5Jo1vBg2ocqhAAN49RvZfFJGP52cLsvh5Q3baDCgsQvysKAmLTBhE9mYWFC625gNChgNnL",
  "key7": "5z7XwudfCXHKgzc8qyNnrx4JWhYw6qpsqBRAR1xQ8W1UCkf7EoYDbzR6n6iqzkSXx88XvDU35AFVL29AcPf1XWf1",
  "key8": "496nWZNNdDAViLaG5A9nXDDVQnk864HjRepuxpNipioLQpM8MyDrA71wJA5xL9xTWF3Ysw2uZreHvsRxGahfFPPv",
  "key9": "2q7BbgnQSQu2R6quuZBq8n4cWadCWeQG4qzY1qkJ3fqKSLgaravBmdgHvnTvcnTndzQ3XmRVX8nZuPeC9xmwETjh",
  "key10": "57wbKPzGoCCyUvipKyDgLDWF1UvATSScmTnBwrmjqjLig6hKtTYnp7jm5R96SLmEi3YwWQFjcqoWP4PSk3B6bGaP",
  "key11": "ZYU2X7ypfE6sF2mELNwcErRtDvrzGaJq494y4VkKWsGfikyUMEv42NfuGPhNYsWVb1BTAd1a6ksyzQXavSPP3wT",
  "key12": "4CTP4YkCLwz7gLhXXzWN1oqd1QPsTvH2jbvmA6pcQgtPTP1oA6e3Aj4huX4mqftHSGCFuf75myQpmwHHc8BHTswZ",
  "key13": "5JaXVq76eqZU1irWLM8DXgVaraPqdAQEZXugzf6arjecP9KNeVRxKF5TtPSDaPrnf7dZ6uFhVsTydYC5GvXejeNP",
  "key14": "5eDv54Rr39jFNRKdSDx2NfK5Umo4FuF6yWS2k3AjDE9jq8Z8JZvnNKV4nAMoxN1kbT1NWojTK2WGQwdTQg79WuF7",
  "key15": "Af4fFQ9UtVkfQT8FzW3anSWNmpzu8QJGt9LKHRA674EHhFzECsmy86BChH2nyfAgUiPpzB6Qd4oi44dEZkLc6B6",
  "key16": "3xisyKsBr1uHQUsSHKD4xRmxSfL2eUSKWD7NPWa9F4xyNSXQ5omoyytcnj816Wqbdd3MqcqDZpjR8dEJ3ov1hwTT",
  "key17": "5rJsASHWW5XhN56twaHZm33SkYYM1iEQz3CueP6DgAKvHiJnp9scR5CFMk1S2GmV4gikD4Z74c9Q1qdpSKzrGy8A",
  "key18": "2xQ1tWDHzS6c8ZLJLMUA291EbLoi3wkZnQbd1vQAAXc6fCBAL2tSa4uqhh9rH42R4tHP7iGkLjNhZHcJwSXqQsSh",
  "key19": "6APZ4MYNEzdeLCJkLeTu4813Huvrb85hYQmrNEDSLxVVNEDsADE3MP1mE883HwSSJY3qC3RUi8ZjXSCcCqaPtcy",
  "key20": "5XGiyRYPzJPFAss5zLRa7ZryezTxxEU7Hp7N1rJYVXymt8XKqs9kn6kBoWKokatEnrShi5SfpGCgptZLGW1v5B6f",
  "key21": "61ubK9FRVSUo82YZarjktHJHCAvGvZm8soVtGWkh96LVpo2whEaC71RpR98aJD81jqAjzoWDPZFB6vEidhf2v2xo",
  "key22": "4wog6qSMUExVhse3KcmcFT45RsLfsowqiWjh7jgGXXPke59Sk7PCjANH3Vh6RyrHkf792LHmWVEnejUtwHQt9JVV",
  "key23": "4s6pR14qkkdsyzzB76A7rZdrFPc4dUCLkEsSehFY6jodmo2xn5vJ1T3xexf85ACtpNxBP9qcf2UJi7iQ8w9m213K",
  "key24": "3T4uKb19LRPox9zRdPckidhm4vnurz7V9X9dvrdsjx2QwY86kP1TKPoRqWZUsbWEvTsBJbA8BVVV1ziBEucpamJr",
  "key25": "2UFYHtGgGahhSf9Y2KoRos7Ymjz81isf96EBVHXc3oTuaHhVWhPTkwmZPtm3TJcUHZz9rEBGdeVHim7PRqcwytPW",
  "key26": "2KT8413MihMUFSGdEiZwWVNskr6z5C9rLtRkAjUsXPYaQoUvBMix93ibVxhwa5qdgGkvFCZX3Wn1q6cz5vK5P6nG",
  "key27": "2XNGQop67NfUnVJXrCxMY7niANWFXCuva1cDa5t3U6Dn72S1MjDJySZZNUQ8Huc5D1XptjBSzvS3EEF1sbSqyHQ6",
  "key28": "hFzZ3FnqDt6kHportVDUVw8PHycgC6NU9NExZ9xcdBa4WjUz7vLmzbqzbRbHUR8p3XJ8doZCfbFoCVjY7Kimwgj",
  "key29": "mQwn7cX2ybKEJ5aSwx6orttXgqfeMft6zntsSSeSx7zwePaEBy7w7iBVT4SwXRgXUr6m5aJpjCuseL6RYpr2FvW",
  "key30": "4y9ts4iSSrtckzSKfpB5YME1zKHJrAN8UoZjjz4M7yPgEkVBPKDbf4ESYccMymX5ki7jgMrPuUvqbvpv4bM2KeU8",
  "key31": "2T8qYDSiGPtqBsKeAX8Toywu8WweXzBtBRSSorKrWM2NiBtqBi5H4XCNR5dHYiGkN5xncDnymHv4YTURsd9rHJEm",
  "key32": "4eo8hh4JTsayX9hykfspVvN4YYb4ozSmys9zFAR9Wc33g2WpTCSSQhNaVci71E52qGSU1FjHJdhrVD92xQdXMKvB",
  "key33": "64D48sH1H7B4ruu2uTxPFYRD4pvUmGvhc3wF4Deg2o6ziRwV5YS5vo4VXEVPYCDro8ptiRwcJctKXovtZKvZZjxK",
  "key34": "3Qdq85jN5bGDkF1cdVFKVMHucAhjWuayDwPzwko65G3scx8dxWtB49JaivQPjyZzUBTj74a4aazuKuqG6NMmEbAq",
  "key35": "24aQmczTRNMcuKZmyRoCuh8gLykym3ZCYoaujwRDEVr8RtyBBxvFVMfjLv42xQA5UBAjPrmRdw5BHrw3USZtSY8W",
  "key36": "3HDFSfZaJWeSRGZfMggA1uAJ9PfDupCe6xZVJoEkNpxgKgXanLTLpiXRtao4kVN7rqN4aDzqzXmd7fjwZnBx1Pbx",
  "key37": "5PSu4yKZyrBgRTafKqoc9TKTJ5y4vh9piyF83esHSN6rUY7WZZCoTVz3ZjYVsGjkM9DStetKkAQ1AtvUKxyqgiBA",
  "key38": "5R8CVvoc2YYAex3ZHQ6Wi7kuF7PKSo5mZwum34EksuCWPMeYfJhtQ47Mw8zWetCeQQdK8kARe6NA8HhxBkbZxTVw",
  "key39": "34Fh3uPEyVQEwgaw9knqBsu5czXHnvcwzK3a948A6hdcqHYin21JjxGWTVs9sU1bn682QDe6pvt9VgqUR1L9E441"
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
