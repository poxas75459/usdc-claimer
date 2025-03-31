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
    "4DYyLRgsUtKdj1RikfmCe9SeTkbqVuue6HYxwgy6buHPo114jxcD3bcPt9fUfcckh61K9Hd5Wb64Nm69EVF5ef89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahQUngsoJkwgFJ3TUehQoZ8oTz7nEAp58Bpe3krzVYocP6pLyEipYTJpRu9mNSF8WyLizS3EXgrsgTpRBXiqC4n",
  "key1": "31N95PxoPp3dzKLHGCFYTh7E2PfmBCPPbASaJ9VX9t9VhFBCNCWFCRxvUxoqWHb5K5VNJLk2cqFdiKfC8Gg6wtDR",
  "key2": "4yjorhv8YnngeKNCKTzR82CftYxBsyAxTeTmP35XPk8EamjrZZSdkyhz4pdDokxKJJ137sWCvPHV5GAmYtgqmqpN",
  "key3": "3b4ZwRBqxPiaCucPFDTZfshq6uwPT597xkPZhXM4SQDpvfTiR62GEPS539sbsen2Upim1gjG7KSyrFzgFSvaj8fT",
  "key4": "4FatB9Yjg1eGbHNSpHyyNCd4DmKW87f6YGAQySXtt6RWzhr2jtoxwTB8ttqkjPMpj1axTXApnt54CHYkp51HrFDh",
  "key5": "3qEF8kv5p98F4g7mzz2AE4idANgci5eDizGm46pgWHmYK8TUu41bd7YdeCFAB3dzVSnpm6B5hE1p77StQVGWwCCj",
  "key6": "4e1ewpdyTqruoFpu24pKm8Tr1syKpCYDhNNkUQbKvQpQSnypSdtFuZKuPE8qjh89aS1pzpkDYwDSNsnwyDG7Kffk",
  "key7": "4sqbZCabLNXDZmWvm7FtyFNnz6R6ThbXRyWvYxV1m2764ndGU81aBP7istAYEjvnnzkZkTmVVTshGWTqsAHLozrH",
  "key8": "2XuqJySXdsrQmcFzcfpiusS4TmH7RTJuF5iZuHr8SMgsMFZAm1M338bqj2t7cqSnxAm6hdQy2G7eTQer2nCKkNGm",
  "key9": "39H15A15wEGXgvhtJYZqdnBAFfaATbjc8o4URxiWT7kgE78YypQ1hDDWpHzNK6i1kCWEXBzNVCShLLshocmjDodg",
  "key10": "3TYmdZHRBNj75gQjnzL42rQ2RzfnKoaFHJ7wpvDDSeWo7EFMv9dqEdwuQLsHdJttmGW6pGSpN62DtJDKr5zfo4UX",
  "key11": "3jnHVo7orNesKe1h4mHfznbELaBQof6uWW7cwXrVPASnZ16MZDXYt4mEtQNjdrJVT2Fh9i1P2t8QCxDgeeBNHaci",
  "key12": "7BC9fhgdqWbwGN3rfUTbb9JzhCPhuRy89R2uLHVsPezFGAMMiGo7FD84FsuQiDA5SinGjJnyZpAgc2kS7356PGm",
  "key13": "38f64rpb9ApACXSBT59QUebvySJdiQSe8jHmcnBJCF52KEe6yGWqv2VSdJQ6oFu3KNTG3wNEi5dqMYHsVKosgjMP",
  "key14": "3RSuEn4uH7BqCsCaYQVKA5wDkDryCypz77sfdxrisqLXSHfbZUioGMVZ2yTa5tgALxJUbhYg9DLePegG4ro89sSK",
  "key15": "2t9LzQswyVNbuCKCqgv7druibnyWkt5J6NM7p8msuuddKrpxsPbpvMhWGaiCJjESSqfk3ccDxB4wJhTVruoXymt8",
  "key16": "51BoBkKmZZb6kH4nUDL1eARqkt6yfQiom83LnXGXgysCrPn1b3taMUKbPpRmXi82EVZDgHWsN3s7WoWA7DwTxARA",
  "key17": "2584wtkGK5sRJE9uEthjvKQWDfq1vzhdGcyYWREmYNYhvMNNj7turXHbU4PGwhdv5dwfsCRCGxLe6y7DtMqnGnXc",
  "key18": "3i7r3sRjpeNdHYMtEChZPSBr8W2yWsn3isEHR1v5SHGsQZ4MKqCdQB46NJJgZCuSDiVukodsB8gfkSytqP1HLTrD",
  "key19": "4B51iJTQXk72rjSxbBdNVUYVrnSMn8RReLcBAK11URJnULMjtw5KdvcyX61yooCGo5o2RdJyg1m9FquZ1K3gQzWn",
  "key20": "K1Lc2F49Pwk8hSnWrMchtont63J5CvFbgDdVaFdYwHseMFApa2ncNi4cSpZseuQmocuQQF8EFfQS5YN4n6dbV7Q",
  "key21": "3nqxHgirNfCdNdoGYbL4JErJfXyetZm4PsKRm5QUNnC727pcpN8pcyng5yJC4UjhYDJ9QURBAoHURDUn9D5LR6Yp",
  "key22": "mDmGjFJu81QL2NBjuZ74FLwM6rnLiLqoQWAtpdf2aty7SqwPpsKfCWvWV9QBpfxewWi2jTmrZSFAKQAaTbHZP9W",
  "key23": "4H1qeqcfLjUmJQJdRZusj2qtwVjPo3FQJQ1cts1shAPSozmtgRKBe3EjM2Dj8rQup1CCWF7bsURxT7UnAX9mUPL5",
  "key24": "2YEmjRFQegEDjG1nznjD8b382crqvHqgaa65h1sYQH9VuckudGavNxoNKTWcuVinCgGNniNrX4Rq5vAJQE3xvhht",
  "key25": "56Xg3pBFdV48LgXjti3eNkWi31GouBBtCmD7oXjuFJTy7ATWdzh45RbM4Ruf58LaQxXCASzKMqKs45yJ5PsnGrTw",
  "key26": "2SK47vbqBYCyFiLviFaT9r7jp9ET3y3fYCFo1kr6VHgdgrknvgeEbVGMaNrRj3f7F2TpAMjievDEvdcL1Ua2QTAy",
  "key27": "5hTWw5vTUoGnXz3c7Ymofjzw8e1owq28TGpqfaYDmg8CqVfN9BAA4mHWX431wEwKxwEDMs4L4cze1ZfBUMAFxTS9"
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
