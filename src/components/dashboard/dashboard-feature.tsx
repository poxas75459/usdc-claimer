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
    "3CzeQoc1qNjBT8bAug72ci511oKA7onXyQfcTwJWJ7uBdeKZXgSRttXFJ5pLX7Thd6GuvQqa4Kra9HUYjyvA3AQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWCFj7j8ZT8f2YGyUu8BeQvcXQjq9WENYGFEYfxykMSraSJAMFxrvhmEPLTJ4ZwWiT5HSwxJAa19btN56mamuSV",
  "key1": "3Md9SViLGPYjFeNTWiojPeHaooxx8H3pyJwDUVidJdJhdAyf8ZMWcu9CVPGXJT3XbcTdqhQxd6USwSTJRnmuBh5g",
  "key2": "1dLXV4gpaiDw6ksFEPEpfmkRqN83fTEbhgaiRsFeBzVbrYfbEUZdDU3sri88C8mvYfn2DVt8EjDG4QDFKawKuPC",
  "key3": "57QLr5hc1ZAGMG1FBwNWZ6iWTuuDs8xeqTvMqbQjhkJEnadLmsJTwS5rs7ioxLZDRSXvAmSM7URfUHeo97UZnCCp",
  "key4": "48dgmU9XJTtC8UeX2wmnLvv2VyAgrMKAuvwYn9iMkHR7EdwRK78NgvwtDBmxcN7w4C7V4YVUg3R3FNG5Z5azZAUV",
  "key5": "4ftV1Z2wRUmG3A1H6QjoegGiw2yuQQR3oGyC87PdSmvas6WcVoxxgMxRjgvJBY3RkNGE5D95ChG27ZQpMHAMn2bo",
  "key6": "2Lo8PdwP7coLbUw5jtRofK8jS2w7RiNPYHmK6LCAmc1kBHN5xYe8vqGrVTJRSeRJrbmMC6EmzVExBhTUND97JaDj",
  "key7": "4yXuwVEut8cVVsMYS9yuBQdYhtRLhRcKR1i9dWMZLameipMWoVHPyEF9FodXhKiE5G9S24FZhJP35iKvTBwXNW91",
  "key8": "tbzKWhuMLvRkJdDp8tRcCrrvD256VSarvuq92atqiPfeBKSB7F6p6ZxFREM3nmVDBxBoSS4W1dWstDM71WvVXit",
  "key9": "6r6Eef41HmTKJWdu9AZWtCky6uaBBSJTTadUxNDG56J2e5NGSictLzLDDhrnKG9zMn4NPqRS7SVX1GH4BA1EwzY",
  "key10": "4ao9y7ZyRG5yKhBMefDBrPkCp2nqXMVfLxEzgkDzcJdxLQ3PikVjPqRH4avx2WWUZrnfXK7hHocdDPBTRGGmQ9ZT",
  "key11": "97kV7fAbAgj49w8eSyHunY8Bx2u2GuZoi29mXpYvjqADdhdMNKXUbo6cJpmnAzsR9DxPng3EYcLQ9B8TM9Ht2hY",
  "key12": "59jaA2qpnACefkZAS23ci9QBs86faNQizuKZdWGJC9gTm68qB4URNkRd1FavQj4nPmVZwtjZfcTuz6i5DqYYGkuH",
  "key13": "5YZZKnYUDhxfW2zxaxxQ85dAL61MnMnQ1scurRM44noAuW5Yx31WVG1JqN9FAXFKJ5wTpNm4rCSV6y5Sm2SohZZJ",
  "key14": "6RJi94jPsernpwRPYxF5pmPd7zAWqmEX94aCGYaq6zfow1SEDCU9QML2xc3ZZRF7futjvVseogfSgKpSCVdCreC",
  "key15": "4KoPy1yueEn6Q6VHSXAgTNtY3sduoenT5Nbrwa1YpqqwpH94XT2nMANjX55wKvxuo6WHyJGeUeCKhXGEQtmxZcEi",
  "key16": "3ZxsPfJ3MNT2qx4iYg9SNQvDu3CpusyPToo2M54t7amwg8sGTffzv8PNzq6AHdyGAhhYA6bLgUeoE8wPqNPb7MEf",
  "key17": "2wXT1zNtaUSPQu7WPVMGgMBEbgXQpULBeoAnbuRkRGtBSBRprtHagm7mpxuaAeVPUhcwpkcRasnSowQsyv8V7Wfc",
  "key18": "3Jgr1iQsexYc1taHLY3xeDYWend9orVnq2N1CWpM3Ni89xY8NzzqbuB8WZQYxi4SHGLvtMQqVSMEHWazjWzuohYM",
  "key19": "3yXUrqi4wUbmnPBp58oZuQBpEgHnBsdyCfBF7frNS1HN2HdwTibS6xSo2GFszu4JyX2ZxNwjiYjmRyaMqZHyFDoj",
  "key20": "2Z6NhuwKusq1hrm8N7FMiyhq1FFRvoyq1HLfRMw4q3t555nCW9RficFWkmQsNDqAx2erX5vnPn1PZ2GviQX3R8hN",
  "key21": "3FK7AqsGa91cHX3GWWzBgMoxcSwdsF98Mu56t6wTLZH1bc45jPJB64PJ4HyznWQR2mnh7Pit1GNaLTmuRd5cFAJ5",
  "key22": "2SQBfwCyyR5uWzM5PpgRTDrVzkNVia4A3h8qL2E7beZs5sgbArE5hkh63qDsTQk7KVVm1jsw8ssyYJsm94QYPpD4",
  "key23": "GQ5dvmuRS9LhatqnkpAijBvhDnGzaDh8txaJFaRMYBFfXDCpzTzxGrUzW4aXaHYGDCu5fcx4AohjBdEHqj8CEPB",
  "key24": "ioA19SDWvcWMMi3LXKvxK6nMPjNrU6qDe1GB1uoKxN2EPANit6mvqjyGqdedm6bt5hgwZoVXGHfXcCwWDCqo9cU"
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
