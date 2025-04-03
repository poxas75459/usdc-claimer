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
    "2WDu4hUdpZn3YpiyTLmCH55Z1dQLsFExtrHShLyjx4abtZja85CpxehyHfWptFR3Akaystg3EZXfj17147GagxHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KRDrJA8dHMwQivPQaVuDkdfWLSpYjGaD2vmPBPrsGLFsfAZGVvhqcS6wJ1CyTATJkEymKNR1yXDoB4QzpDVoChD",
  "key1": "5fMtbYtBC8JCJ8bNmQB87BKJxHADQT3oap7HKG2i6z6tCgEVfV4NBecsBMpgFkxuZX44835oduFLbAmJbmmzkRSE",
  "key2": "5DKbR7jRJFZ5YertAaHD1fFW36SWQ3k73bBQqUKqE1Lk5GvEy7auTRijY7qidkrwkjxb5iB7CwP61KkspshbrCJp",
  "key3": "3Siaa4Ue7JSM1tEANYdqvwuodTFSdfvrqXhjyJoYdKfXvG385cB7caXoba3qdJ8EL1yFGiuzEHwKzGfVZK4TwMx2",
  "key4": "ynoKy1XzD2FoXoYH8MMCfi8cAomqKSVtqRh74RBzjEdbTeHmxsQ9MDYBKpU4asGZYbTpovARGL58KMJTTa6KJXc",
  "key5": "4nEmEnuHQ6PSPfPRifPxsTdCJc8CJTZYfGNFeRMstEQRsjxnvpJtqGqjhmZ3Zomg9LbZoNzqtoTx5sxMLbFKm71o",
  "key6": "2jAJpfewFharWrrtJsvcFqyoqTSBzdU6fc1mWc4yC1eudZJXZVTJ99Udnij7imnidLUwPF9YgtKr1QfhT8QB8KEv",
  "key7": "2rrCgoBVWBZyZQchhfWxZ7HRHLujDknKuJ58nnEo3gF1ZLPk2gYoyoF8zTjBUFCqmsCPPUCAfuLCKXMA7RNACzSA",
  "key8": "36H9gVh65DVQPScdVZTEPF6tHJjSeqZB3YyfVMKXZ3VhSP3cESVrn4ADevsuHs1JT9DYnK5dCmou6xmd15WXs5to",
  "key9": "4cpEJoiV1E7P1m69BYcZU5RMn2rnS2iYZ1Ax3PXrLNWb9GcZZJayXpF7VegF5b6mfv6xEsrGV4f8UwusrjZvqDBF",
  "key10": "4SDnLTDfeWGrRjBYweb2DRjun5aiCiBYrE56XS512mggUjzHq5fWLZQvGkCggAN8ys4FkDBjKWmdLUac4sLv9yft",
  "key11": "5T3PzL2cFBqe82ZGmvjjSLWXd6rBbVmiPQNpW5x3Byxp5GyzTRiGsd3gCoDm6FaYLi1yUE2zkhFXtF5ziGcfCLFU",
  "key12": "2Ezv9H18Zw1xs9njYMyVhhoJsbRcB8aXm5xWHAWbfmJZ34ViY4phBX79JMJYwTj9EY2zKmwHnA99MSiWWDRVSh5y",
  "key13": "2UzbP8FnZfLf67bvdSSmek8HhUkfi1ib1fMuTsEX4MEeFWmcarLkFbgXULuZ3eTKA9CBAvEksmHiikjDLXncs7fe",
  "key14": "Bn4z6FNzYVneWddNFSu6bRem1G83fHxzbvzi4ptaCkrXvaDyJupYAGUtoaYqGsw7T9APqHMa6AdmWENn9yrUTnv",
  "key15": "YM9of7jH8yT1rXdPh9vwhF6v8VFDKojzso1qyX9oQyeFRqpSupWiv3UTKfbYp3kNY2NBezn8Me5PNYG6Z3AG86E",
  "key16": "5wCoTpbKeGqp3u6DBVwNbzjQW82dkDxYdAwQmxk4uuwcUuHZn1EeTvWXr89m9PQM64f5QS56nESdmdiPuoZLaLdP",
  "key17": "2kSBLNmfzK9tEjJJ1PDfBz5EivhrK28JdtwibEZepD5wrT3CMZrmjurNRUwqdxRrRsaY4tgzmvMjJP1kJMGaS4w3",
  "key18": "4CZQmDkapkLBj7X1LQ5a7aVq2FjkQMAJukXF9VwWD2ggbaQCagZsLxs4Zv6bYqZvj5H1kdwWAcigW9EjAiQkqeXH",
  "key19": "2pTxNEYxezJDncYgAM1qrc7v9LBqH5ZU9A2ZvfbzyU8Vy8s7euqZpNAhzonte1tmRtBNJaKXW3ztu5VRFPXhxnxP",
  "key20": "2As9b4myvsTr2mywUzD2RwwvU3UHTbLCUjg8E6ErSjyJ5USbmeKdG4fxdcdhA9qmFRjpZNaHdKXxf6J4gw2CVavZ",
  "key21": "5sp1UVYjimUu9XS7ZDNS8aTAos2UpL1oXTtWmEZHAqTxpDBvzn6zjYYp8gzhXYvDpM9cHAzsmzABBe2BJyQS1Xo5",
  "key22": "4BfvYKhNxaumMFgBHRrttfFK4ChWxv6yYxwDizGoUijcSDj8rLXxNqGHN5WtR2xhXQAvneoPbnBc6cnNoUcQej3c",
  "key23": "66pdozZ3H8xRHqNBJcyLqvQ5K5frgzhDHZ27wepTWYnJCCHF5fCYj8XgdwQciZU5kBLkK85h2mQoUHsjxVsEQ9xD",
  "key24": "5cePjQoLEqFsuaHaNV9v9mxj3d2JgF3EPFdLPHpMkwHZLuBaW2Px1E3Gm43TL7e1vW9gZcLbZ2iXGPv1TQasaeSc",
  "key25": "4u6fdE35hdAkxXaWcbzn5xaheUjDz95bzWJ9F5TMee4JpiYUVg3rozjk2QtGuzt2XiDFpuND2KBAeQ6QscXuudi4",
  "key26": "d77CJjgKZtw2dsQeDM2k66FQpJ8GzpVYBC4RFZ27raTSvUFPPfHiPiw4hU35LgNygVFS5BTbCsXCDMWhuUagdPr",
  "key27": "YMLiGYYgLFjXk1t3nNH9rNEbUt2N1kgU2zyEY77ZHyr5A6DZG8L1y2GoDQvJ4phMgAA2Wsh3KcT9P7njGTm8iY8",
  "key28": "4kSt1WB4fA9h3tKLBUWqRtDPKWGFYwPrCCK3Wr831SkeQXop4UmUguGwQUdNMVFPsHHht6wzMV33QuHwDp7jjAQ5",
  "key29": "3nQAwzyG36ZvSfpeMWtWVxcTUWsyfntB46dZfJQEgW3FR4E821sbexX8kiR352JqqZyeSPUExFkGfzKo8rsSH35w",
  "key30": "5qLvoFrPSXmSgmvZnwF18Lxf1mDbFvwQr39DsDozWqdpzyeZNgbb9AQ7xrRTS2hytc1tcfEBfWrX9zoDQWpKyFKf",
  "key31": "3XTV3qvmFn2myJamRkc1RkLPxSVMXN3RkJdfLJ84KwipieYX8YFxNFbsJPeFriVNutffr24kMtuEN482AQVyaDLQ",
  "key32": "5NJ9hFMgFPmhTBE9xVTFJ91M3EJQSpvyP8V7tZMsrhPwYjq8wHJpVGMMR5Zisqoao7T588mtyBkWqUNySQTwW6tm",
  "key33": "234y8MJFFfzbkwAJomEGo4GhHV9uyVdEvkLBUKdvtatFCHMe4jkYXUnByEETF9wUi4iEeUw6XG9x3niYtmW8gLQr",
  "key34": "3ppKzGtgeRjkbGfqo9z6mHzZnJUqGUWFy763pu3rPzH1RUnTwwRASfN1G25x5CbFCkSSSGbfQ8niRKqELrEY95pX",
  "key35": "3okqJGL1rBCD6WLzmVeqBAf6NrANi7Y2HwYwvJuHBMzddeJWUoR4ZkMvbrTuxKZwaXRtnm3bGn5EXk3ccAb9cYHN",
  "key36": "3sFNrhwK7ZCVojXZ7FPCEWWjMMoc5qif9VjzMJxPg9kdoyGK6iisT4THtM2zNqPuVmvYxvWSHfkwMVThvhjV1vTW",
  "key37": "rBJSv8g6YQeSAyzYqSMtDwgvbUVpw5CwiTVaFYnqRAgrUAFUJpkR46M6Xvp4DHRRsy8ZBAVxc8JSkwhpm64MZWg",
  "key38": "5xdvNTWJNTRHW79R5vM1wbDJ7EWf3KnU4VzsMvEAZFmHoVocW495XXEgxV4G4dYYiqX1aw9geTXB7tYEPke1z18u",
  "key39": "3nZAAxsAPXWZ6kt2usRdY5wzsSq6D17zuJXgETCkTzQNd52BxaxV3ZvQra2qF9ZYqAxwzz1mbRa6zNi1CNFQobJ5"
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
