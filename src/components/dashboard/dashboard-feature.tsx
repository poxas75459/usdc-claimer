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
    "2vTFNvweBoi933g4uvWfUFQCAKKR8LUXEMRnsqHjN6mGr18pemv1YbCV7HJ9t2ruRAuUYWRyLQwYakq5WMKRbTrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKfQVHdH5EoogwT1D1L62LmWaVAnrvLpCBk6ZqwzT2JsQXipAr7dz15XVaoFk2rjTFFbvVck44Snc6Hkh8SaFHN",
  "key1": "3X1ZAWyFFwsV2nxmCxGB5tce1oFpdWqdBuA7zosU8v8HjaAVKsPZYwJNdU8HYefZUSxcSEnyTGSTWJt8HKPjiYTA",
  "key2": "5fnpMvifcJP3ZYWq8uGyucjQGG3dMkxKbsAckkJJ9KzEeErbyrbAsRjRUMUzQZkbMxyjzSqTau4cPz18PhMZdXgH",
  "key3": "7gBWE8U1jGphLYzyuAonUGdTAoEvbsEt5ud6Mgmfhk2eKBZ8cgypdPcALW6eNMmFRozxJUkMjiHM68NEKJCRJpg",
  "key4": "5Q2PuK4tegLwpvdxY8R6QdVaTreX7Y2dmwcbUuDqFPVbHgptMzhfrwXsL3rG6oVk9WsewZbKZp61rnHrnHsZfCkt",
  "key5": "2JaFrhkktQ8gGEJnDDEEwCngNAP7awcWetVLJVGWTcjyxiDdfKKEpHuucsbj3Xmb7fhE4QgUSaUNQthmi7qYv2AC",
  "key6": "3A3bNvF5QJSvboJRJHQ95yoxBDijWTMBkqi2X2n53hTJ7Kbzd6gn7iRPwdoHEAxiepiznEt7ngKxchS1mbs9ne5U",
  "key7": "3xoHNzy1uGutTKYsxoENDCenj4mkpW7fFizzDktTYNLQUJAcsHxaA6PqsRkCgrKv13Sfow6KrgGj7Kpmo2RwvqEm",
  "key8": "42EQBYvwWn8sGhkzRmF3o21Q8i4XmSPasRxg6jsBi9g5g5pt5jg2j72LdSSqYMgk32ma7g6QHZveD2twbvqkzwp5",
  "key9": "49RAzBk2c5SQNvCJknHnBn3LY2y7bFqidXrcWerXcJFH9sFDzrva6gtbm19mJsohpyXgNTtiq9Hi3ZMVDBFhU9N4",
  "key10": "63LwcaV4vzkquy1tFeC6U6yjKaVS9LtDXf2EpPB32wsJ98t42Xn5AduvMUi7bqnNSffNSNuETi4eNCcJcXQD4GEg",
  "key11": "avDHorJf51szBHEVDyK7L5djEHLYPHCDQ88pKuQ4jAyDnknLre9Vb8F7efpZcqpkY7Fn4efTSe1uesh3HTzCnKY",
  "key12": "1ubxFF142QPb78h6u5ZUnNzNYiBATHA33CpsspZG4aJEbAxARVW5a9uXuY2PfsiDyvydzUrCGPmobPwgPDcx9Jg",
  "key13": "2roCj4jpHQCMdjtmCr6ZNNFcjHemfBdiDSAZxw2GPfboJVzBySP3E9ScvTLKHj4ZfpmjE2yGkAFV44xCvW6J5yTj",
  "key14": "2Spuy5PkJHZ8a4HobFpUKE2ULn7dfFGCx3o5tv1irg6QbkXEaRzMjg2AWRrNe6oi8j5CjoHwqDKNjnbRynhkcuLU",
  "key15": "2hNpc487Af7dCSx7xEr6fApsdM2rxZa9G8grnxrkHRjdG6Fq1MfHHEmo2LKRECkrnJCxiECfDPjW15FzhkKr56iq",
  "key16": "5Cqh6hKyYNHYBF8GWC9DYrA47VPoqdL4wTGByig1DPVr4UoNykyejegycFZG9eNSTfb2zunKPn6HE6VuRPTuvgy5",
  "key17": "4KqGqwqjVAmZu82fhMkRKK74MQ1RUmeZjUhZqSyeTNEBiQKaBLmWz3UJhhrtEFciAzCdHunTS14wtZqStF5FQDmb",
  "key18": "3LHqqBQ8NJAN4f7xB277yAS13U4HA3WjRjq1yDVFq1gjRPxuUHK5QqSzC7QXNhMk8frgT9qbWF9i9zpNJxMBHZzy",
  "key19": "4QLEeMWEihDUHky36GopNrTA315nG8a5TUSZBN2fsNWtwt48Aijb8teqK9QHS1MjbirV1nMizs7L8di8yvCHjNE8",
  "key20": "2FYwBvTyXvCxhg7SMWdLkXpqJHVjn2zrfLP9cxESzevS4qxUwWjjs4zU5rUr1NuiK4fnwkP7UKqUwD7EF4CJvjXW",
  "key21": "4iYqqwFX7zWixsLDjUb5eWAvbNDo5Lrfzi5q2Uzx6ThhA9vMFCwA9ntEr97sukbJNkqhotUdg7kuss8AVDcJ9Xdd",
  "key22": "3p7rFszsqEBXJ388CoqvLfGD41yqMe3KNAZoTrAHHn9XZWaZQH7TCNpVZhirZu98QUZDRJqfAr56ZbAS7pAuqxKw",
  "key23": "rDvwhBdKgLmPrRRrCrza4bsUC1zYEBiA1G7S8FDKMmsF6pqtDVVe2DJm4CXX6JRit4datjP7mWNd9P6Wi6Bgn1a",
  "key24": "49h7bsBoB5DGZFhWSxGfzAnbgLccsR2QBdpBxvipMjEdpTefiTmssuYLL2wewWs8uRrihMoPLLgpY6rXpwkzpfrt",
  "key25": "2g3yh2xDr3XHNrgWU1NpxHBd4TfDbsRMU51HrHBPEZ5H4NrMRgnFTbDmhLQUoUCiFiwmj59NgFYjXLS9NhddfVRA",
  "key26": "57H9ac8RzPep8AFLSFcH9TRcvgDx4CZ11jn3pjK5DmNhgGFMdZ7NrBB9HoZLGazEh2Q3b58t7VfpYANELfHufdcR",
  "key27": "cAsEtgNEjADEqsz5XG9PxRqtd9i6TyaCEdhpYF3LJ6nnrnFbtpkusZ1uo8dg4GQzNFBvPxMi2MagSUzwzin6doA",
  "key28": "4812hohTSVFUTwMfFrLXmarXcxKp4B6yjaxCL6okZ6E8T6VBA6wFGP7JFFfZkL144GyqMVQn8mHX1gp9g68qo1VG",
  "key29": "5s8ahxP8NX8v8QWntfSgbUzfKSSYzMVyfoiod2GegAecw5iqUVGDW8TxQdyhCYs62ucMEQSYgAWp8behxn8QxHXe",
  "key30": "2SnocKe19rMkeKPJ29udBSUQhwGTg6LKshw6L6e7YmWPqQ4opnKyWue7dMs6rcUsm8YD2pQaSp9QT2iNumfrTZSw"
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
