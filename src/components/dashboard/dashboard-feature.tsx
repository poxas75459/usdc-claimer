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
    "5sKkCYtyuW15Ej5Urxx9KEDcWpWXZLsmWR9wfQaRECYfwH5dyfSKUWWTPsJ2CicXuspKRuXbJvq2a57UvPSSsLaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fne7ozaqiPRc6RU6n2s1tfEqQKeUbbez58ZBtMGytpQzLjLziN4e8XmPUcX3xRaFp3prpodJ2cVuffzHhUPdgJA",
  "key1": "AnemQcGKxdQnTZjEa4NARAaporeVTphtRyh6sjvv1ei5KaPULSLjiZksGr972eByENvww1YU2iCyu1iPMRx28ze",
  "key2": "1Lt7JXN6SF1NReQny6y1rjXLq2rhBz1EGnGsRn9CMvjnumuBv9UmsewWmCQcyPdkM4rhEpSvWx54WUpwgwpqgMZ",
  "key3": "2n1J1CDNGcWktZmkayhFuYw8hPpTPzVYf9NdHxFcvrzjtx9b8Pqk1hRmz69Kt9qwRgEnn6QuAikpdH2Zgy8GFFfh",
  "key4": "2jJqvzzABvhVwKurD25KfG2Qhkd67v3ghVLcSq8y4zDgWQSW8BPdPvoL13J9ZToS3DifUSyvgWzjdeyKWJ95DHW1",
  "key5": "GVTe8tW1kXDk48HDZkxBUS6BNLRkM7tP9JC3bMkpRygC18g3ys79GRtyLGonLUkVewcGKXZXRk2nBH7deodPcHU",
  "key6": "5g88REZidLNNQEh7v8PfGURhPqFBw7EBkVZYxeEY8U2i9xHWKHtDm4XyX8MNEzLd3P6Za7s1o7ZmK9Zg8PapNVyg",
  "key7": "67L7Z7378dNJDhe9UoUS8rY9oY3yhNLHge9qNBnF3MyH4j4hbDe8u2XGAkK4rztAJDxMxew7y4QqFiyP9HbMkTvV",
  "key8": "4RzDZy3A7jXARzEqv1M1A8YnWycogc9mZasS95rYNVWv3Yxjw6ZR61Zg6hhQnQPQG26fbGKbxwr2mnsPr6uBvUWF",
  "key9": "667BUDqWyYqpxarj2d9dgy9neqUyu53t7nsMFmfiEmqq53odF2gh6QChPVAaKDF4Wxo7sT53kpwCbETHsJUNzehf",
  "key10": "25QxUThtjeq1yCL6REDM8MVmFSJ6Pkr8WgY4wMcJ8X5ZyxPZuvymqXw45uPtkW34YCMM3beiCSunjwcq6G3SzPf9",
  "key11": "23f6WdDbDKMZWfcMrYWdhP3nhQxaumuZK7Avn1bukkRMVX8zpcLrc3SD2q1EYZqcBtEUcz5yABDHAHLAzSYarAMq",
  "key12": "4vetqbWCX1WBVQ9YiaJYu2zgSzxQk9KGpDjW6Y2wxgNtxgpmE7HqHEESdTnLqNPdCUSd6hAW682SuEQwJmSmYF2a",
  "key13": "4DTSuVXyig84mYQEgqrrgSTffzR22HPVGYLuhSH6GfiS2ztLvzhzKTticPaDBhxWPqUticKVqhkV1KqvTBCcLtoa",
  "key14": "5fZYsHiqLrh8VY5RyebHQYgh2JfyCcKgRpoLL5XzTuZiEnCZhfMYdfFMngAhv1q7fKPMivgnYqP1koHxRJHi9ixa",
  "key15": "Qhqwzn6TZmspb2i5JDwfYHhdgXzxDocrdFhyBU2QSc2n8ELTDZcSNQXRCwJkTy61w41221aZFCZsSAThQg4VdwB",
  "key16": "3fhpg1gBAXuabruT2hRZUCQSCzF83BRwHFtQ6P2Yf4tvpnzgRAQd7mXvhEy9uzQBVLQkJq7Z1jsqwJZjtJNGScRF",
  "key17": "291QAFFQdrNBeEEAAMRp8deHryFqrVVWaZKzKeo37pMzf4QgYLWb1mntLT293mUdccXmmgUzYfd2QJ3g3M6N4Skw",
  "key18": "6Z4sqDSHypmUNtstzLXVMLSB33ki2b8AnUrE3FEESJLHDPB6DHyec7Lp2j4FTQtJbf8scQGygbDiHhvK6rEAucs",
  "key19": "22g4VSZcUmdbTj2M7yfYeku1kCm3XSEwxLotxQM6GbNFRbkvpcC39JzmQnF3BxY6sPbsjRhDtPeYq2PxC1wybNp3",
  "key20": "362qGpJfGtVfcw7mqUjkEeBktiYTPBfjSE9RwvP2Bhp5N3nZkPCpzgMGsmJx81f6f4xfLBDmABqYDtk1W88YQuRx",
  "key21": "3DcWAtwesUvixcAbmfXDeYb2hCiocK65jERkDwWTfTbeoKAtcEXj6z4YedYaCspKd7ESrJyJrUshdQdE44KVP9ds",
  "key22": "28se9YKWgWbSy9zXuhrG454keccVSJvDCQKEGib3h654rYEqkrXN3qUC7FZVTmXBCgGoaWnf1ShcD5ARpFKegKfM",
  "key23": "5vKuvK2UaSXuLZtTxMtPdfFSFWdSB79NKQDrpgwkz6osZiYiGqgaz3m3hmJnmp5Cxb7MNz9pVEjXvVPVws7h2Qpz",
  "key24": "478XcN5mqCa1hF4T2AfMjQJk1QBCEngdscNKAoePv1Ckch4hMkeSZdDDDYB72AqMrzya2shu3oG6DRxy5LvZE2c4",
  "key25": "4yDBipZtewaXJMfHCag5nfZGBDzW3zxsparQ1UogJPpQebc88FYhm1xUf5AeUGpwyFeKr1pn6npVnPdX6MZTwTqJ",
  "key26": "oGzcywjW1rvfmhEbQUUQyhk3Jkpub4Xvnm9aTzJ65XigU1KGpcqKZ1aZ5LXPRqDRqogsRUqq6qgPzz5VKjpJtg6",
  "key27": "3hs1KvxUfBXe2veduM4PGKBdtCtV1U9jj1oMTTZh4Xv45ddRU6YJpSak1LvCfFKDEmPyUQLvXDof1ADLqkdSyfuc",
  "key28": "2hbJ6EvmDKX2KfKZh8BwfJqvEak584ZJQdnCcbGnk7zgSjBq9MRr5hEHD8deuJFaftm4bZeBepQKnJAHWj17Wuj6",
  "key29": "5gfQWHdTzKsCY3Qm1maVBKKLu4dzCFVRoZzASFUhaoqZ3X2wcTy72MEXHFTvD2wvajhWA3pmX8vaszeXT6BgKs5x",
  "key30": "2LRnVDfFJFQRNz6oM95BqSwjxbLhCk6DFHDKbvkqiyifxyVXCm879tvXZptcLPZxgvnsz75yG82V2f95xq6XuMKM",
  "key31": "5UH42i4vNPxQZmFi335J7Rdynk7WrfnXRtQyxVcFBoqXnJdLyUb7M3vQAzMUctkLBeSpbgtbGEPZKLk8PaUnKDzo",
  "key32": "HYYb2VqqVz5SK4gLRnbPhxjm7QuJWopAPaoXe79nu9uCXKvDf4EwtsdmLwB5pw4dB8w9a3NmGe4SZoySwutcgUM",
  "key33": "5wP1SpV7DdDA3uEGdYhmsvPMw5VuFWvoWvnQecnhVqETgoQUVZHqo8NadFVeTCtySadSokKskLv7bVqvuHujY1CX",
  "key34": "63inwKxXc2UnkSYkEMisiLfnrLnBnuqAdyYV4T9PY1RYaCRVVg91R1VzckXkd6phdC8tCFJD1EQLd7pKf9hvFiYY",
  "key35": "2VhaeWRWMsduE3bDPJECeHkDYoxPVyqFKdDtcxCV76X9Vcn5EUXkvPFYyvnbZmTuDe9Bsr2takiLCYaKtejoGXAi",
  "key36": "5PZa38XEFpzNCQRWCydQvvU4VDdzPwzEDSLHg1SEHWtDn6p4eyqtEnMjjSh1QbmdtqxvFNYw26Dp1AHhJYAxUtiJ"
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
