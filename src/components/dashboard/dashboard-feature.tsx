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
    "2wHBA5L6s8aZAQ37d5TkEbxH2r1qRxrBJrXqavFruUUXAXrCLc2Xx3kyDwi9RJ88eWr5mHnBihnTVbDTX17dHiNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7KWUHWCTBnXr8wxkgxGerGD9t1qzRQyjKvw5jshWtgJTxbKvC918BXFatrnZRiskeAa8S3AvU89fNg24YtEmvX",
  "key1": "2i4tbUwxCFcvzZdVCn1LMuP83LBTo9QttMoRxsgqG4dc4V6meVP4nyQQKqMryddacQtuvQQNkMZYDwhdbeFcb7pX",
  "key2": "3hJErndDcet4tY1J9PTxXDVQzAwyc7jyoyqRHKD841ttFvH9tTmsDDZfAbdXmhd2YV69BwngiT2QTYD8m1rhYxvV",
  "key3": "oTAWMpZPeELxPcYbqmhea4tAS7z1jZvvaBb9K8NAsCb1KTv6ofm627CeitiV7MuQQdkhZKHVvo1DbGHvaQbdXao",
  "key4": "4uTX6fihhEDE5nVZmSLgZVZ5rms6ztLEaNU9E89fwrCAn4DP1knPYaTydL3jA6e1sUgFN9pLES9FWp7SvM8C1wAn",
  "key5": "2hXqygGcu3ygHE46E4Wm5wNmb3yb7jBK32A46QizjhSj8C9So1BavHHvvALoyYsnNSqXGXWDf3EsVRaVeiJCKW12",
  "key6": "5EXoNQo76W7MJNups1LymDHjmcbpXjPUa7ZCDbERPrUcPVN9Cseb4vcqUxQWKNDPoZmA3EH6jwRMRWAAUaLqCqhp",
  "key7": "4gJjMUZ38ePgDJUHRyxsTFtaJqgvVCyZrhXpauK1Ru7mk76AiengcHMVpneRTaiL469JpdBcriJhoPXmvr1GyexC",
  "key8": "4QHXARWvFJUHatvTnbtyVPWvmJiVQDpnfMaLWv7rP4vTPNJP1ksvNTVu6HohJ5fMj8zgswmrR6JehkwFHyjg27D9",
  "key9": "41dvxGxNM9rN8fTztyivDj9PxzPti6qN329GNdWYooeBarDZmupQ32FePEXRKzvBCwsS6kJeEjh18vbYyPEGotFy",
  "key10": "3HMJTudX8YsizZJ6ysPp8vDabmfk1SpoekSAm9o4v5fJh5ftzCneGSeBQpR5vXtuvb3oJrBytDAEE9yMJND3MBZ",
  "key11": "2un7PfGvCMD72uEBMegBLL9nQ78JBhjoMNEnAWGBoacvdti8GdTv9BfRa2bd4auLvrTZhQV23n3YHMGvgJSQPYeK",
  "key12": "3PtBrHiAWKwcjVaDMjuScUhi8GWYKM4dZSzZGe7Uoo4zEfFKkXnBZe9mvSH1GvybmbVutJcZx5QhTYxbJhXe2h86",
  "key13": "5Ps1bfjfsVkJkXF3cFjdKJ6HpZQryWouHRSinGfDeoXYQV5JZmjLNiYbv6NFwUkckC5dBDvmqdhPYdRxgMdnocit",
  "key14": "4vjYrmjr9QUeGATBDG3GaFaGTY918TANDunuXf9xjvTucMCDmbZcEvnxvGtXtPt5imsGWsQsXTStFtWeiVTurJF2",
  "key15": "5YX6eWfnAKW7d1yAesWj4pnL9Ya8U6Pv6g2zuwkEFBCsF34XLmygQFMf1miNedMxbqDjx25zE4DnW3tcevfDo6UM",
  "key16": "3o37EKezu3jA4VkMsz7DLR5ZdjGAdgzbGaiHMyxr3FTBL1zzJFruKR9aUq2LSaYCxaUXmQ1N3bm3SJ3h87oY8dMz",
  "key17": "maoxZ1gx9qByNzc9ZqKww9nqWzFTUf9ccQZS2VZqB4c9LD77TFxwnkHfm2oqZ2GWRxU4KeUqb8F4R89ekeWvqex",
  "key18": "5shrmRhs6abBTPmjhUvpo2rN9Z7rLUNNJTTEe83NbB1v5r61UDYkz5k93t9eNff13RsM3uPQsrfSrW4L3PPq47ix",
  "key19": "4GNa9u4yA7vBaM6EQJJJpwb1aeJ3rVuqpSvf9ka99CCjVoveT1SCKqGKFRKxit6N4zANjpjgGZSsT2fCkttyxKxx",
  "key20": "4SWSpWrQvp2VxDPgK5Ds3vzoACw1sXXRA2b48f45CGT5bUsznwLk2ExW665XJ6APiTaW76xaSuB3R9rpbTcS11xu",
  "key21": "5ApkrYHiz38rRAXcv1ABh5k1qNBiULAsrTEZE3CbqvAS5t6hoS9PGhamFmDaoRkgfkZEkWv2PfVurpBvEBVvHQZw",
  "key22": "25aGDjkMG3yFMkzZzC9GwBBeo8av82XU8hRpAtBQfU4YySoPWkrGZ3q3LU8U1QxmH2aLKw9XXsEBaMDZpRfJ2GSr",
  "key23": "DZy2zrpqVzspdNZKhQKMPKjPgaACtqbb37fVyhozioRYaTs6PrwrUV7ouBMiHB1ovaYCCHmLk22cci28RaPPh6E",
  "key24": "5tGEZfUyLE5AGBKZBini3EqRTYiYfwy3JS3aeLehJKBRsRQCXzSCCypz3pPDddqFaChE8Df9QrAsXgWRWeEWWp1i",
  "key25": "2zMaXSdHDKhX3BYQdyX62bDNhKvk3yKTmZw6XMzoyT14KXcvt8kuhncA2j1Wptvcm89iC867M6xtV6L2DvUtEvRr",
  "key26": "49WVfHtVgFEPhP9vWbR4Q5CpUrrfhdLiwsHyHBv4Bry2fiEp1g1vTY9JkLHGJTzu41FkL9nQ8wikj8miW9GCoHvH",
  "key27": "21QQwW6ipgcgeJD31LdBYLceeapF9asYMJiySwRqyNoX5cC1j6E4z9JKQmL7zHXJTbuZGNXgUmd4RmKBsU4hHjam",
  "key28": "2KgSf2E1Ga4dGSx1QzVStPDkxm5kECVdyUYYAg5Fs1qodJLYwKwhS9Echib7gZiK5gev4aNHQyvrBe6zRQCaQHTd"
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
