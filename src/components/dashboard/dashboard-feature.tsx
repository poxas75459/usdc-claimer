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
    "4xR1h928RXC5WDzxRaAzPEjYEhJK3BuNpJJfDUYKShfLqYpNF89gt4g5J44yFk51oeUwdSn8QSWa1TdMeztSQubc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JSrwQMGioQHr9Bo3whs5XWWvR1Cea3tnfEdNgC2Snt5o7Fs4vzX4AHpxbqegr7d5bYH5yaMKmfo85zGyJDQk8w",
  "key1": "26QE6qVbLvaJGJRYrbaUYTYAnTRuJYB3Ekh1MwdzrvN9zJqWhXYWbLoxJksJztemzMpGY3njp8yxRnxocVa9oLjd",
  "key2": "4E4Td6TmGc5WCqnoCcdMWgmheeMeeqZsJ8TU5TfTizDF7374Y1uRnj5B42hRe6MJPxJWeUh5m4goMVuYY9K9RNrf",
  "key3": "2WXXqh3Sy69sSnrXXWr8RETsWoScethRVhM9s6pCirXsSN7p1TrEFeqhNtdqzmM1wz2JvC5o475p54a8iqKfrBBu",
  "key4": "4e1omtvgv454byhU94WWvRuhh8TVLEtyEKrEPBGoxhtfywP1bQBdrEWxJwRuThdftGTm4VrbfsSHyyyjH7q4rH9G",
  "key5": "5k61RwETbsg43XTcrRMTuaAPGUP9r1hLuC2eEmtsJ9rB6GXbx9wUsngG2eocd974Pw4AWyzFURRrJrw8ZxfbL5cH",
  "key6": "3m5tmzTbPsEMJh8hVCTzWyP1bFcvsF2UPrU7APm3QBDHVsgDqrbYbrFTK3rwX6PPVUV5WK6MEs8zdmmanf9K6jHD",
  "key7": "2aosw2FLnGsMAFi8jj83SwWezDx2NZWVDrKXA3o8PFhZYPCVShmWMdq2r7EVYxKwHBGkxnV73W38eqgKmbLLoRnB",
  "key8": "NZjAKai14mMWLS7mFYjDXrmTrtKDmNmig6giDMogP9H2KWoMnna6gfeJCMT2Ba3rF7qN2x2v5XYCTsuMwWBvVJc",
  "key9": "2ZVdfhaW5zudsuZ9q6CzVs9rx93K3hP3a3Qy75DHLD3BKxHnVZo8ajcYeBvp76mrZeYd5j1itpHZnKnJSyE81rA9",
  "key10": "54R3KkQgoBw3EZ9MNPXGzC6dvALhEz2T53V777qoCDoNZ2YdxkXcvGyGSqY4PWzi2SXo2dKmVh6KDFcp8S6aLUMt",
  "key11": "5oYkEfFPphDJ6t3PwLUdxRXQ6hW7xKVLgwpPUDnaMe9dmMjUQt3Wsdjv3VVqFRo8NS6SJ4r4dYvaGGJCTNvSuWYC",
  "key12": "32xYyitG8k9KYvXwyQA1rE86RRi6bMCZkGzR3uUYP9DiK5t4zj4FR2Wapy1DpzVVNwJFfkT5AQEqhKbPNAbecPAL",
  "key13": "3wJ6SCSkpsdNibfSB6LcHiPSgCDuqnWUw7cF5P2LxTEQZTvW56cDM1fkVwwtWA4UAhowAv65U2zUrr1DeLZ6S5U9",
  "key14": "2a1Xe1Bu5jcN3vqtQ4cX7quTSBTgsK7qCEGVnJGVWcTfv5PzEPfkYBqwjYCJHAfhPS1QGFQdGNtgdv7Uy5LYK8Cc",
  "key15": "47dTkTK1cdeXjGEpHQEyM4VuGLozc69yRvh4AuoywZGy8ZhhSJa7m8v4aCUhDCxxQ2Gs55aAwAZocJUn89ANw7AX",
  "key16": "5T5aozpPqYT2kcBFPdRfFVsEdPRwNWDN284A6aWo4KRFntzvjFXpbBjJyiP534qcd1qEXJt5PRLkZCf8a2oqfqoh",
  "key17": "3pPQi7AcjnuBRvLk6qVxnAgcBqQqxU7zm1aFS11Q3nVCK3BpKYXp4PLs5gtMt3xD8g4ZnY8PuaY3q9UGNpZWRfk5",
  "key18": "2QjaZGbRESBPzvzry1wws58mzR1XrDas3xZfKuS8S2nMyRBgz72BaJMnhcndSKqqf6bpWty8wA2XQrxT1wMiuxX4",
  "key19": "3rNLmuArcDCTr5DfTu4FxVsLWNti6XeXgU43Kf9dS5SN7WNd3qN8dz1Fcx3cNLK7snYJzWbtgAFo8SF2x3h2Vimi",
  "key20": "5iFh1YD9o2zojh8A7AVPs2rUw94w7BH5wRn5PsDNftHke1uPFpd1KnYsZYQKZeat9cTzNcwohskfRDSjcH2uxmyJ",
  "key21": "5ckFxxehD4vK4sfSFM7xBXXntNB2FyAQ6k8TUGTVVj9PxWNFtgahySPbG6abmGCcQRnbmWGndggXo7i1VXppaioT",
  "key22": "667HtNVFkkhFoeMQhPoqv4Cv4YgCwnk34div2zfuswqBLLuJVHjk2JoUTxLpWXyNqQ7kivXgSUkgmKE5pMsLS1Rw",
  "key23": "3bq5qvyP2yaF3FthkP64Y86rBDxehfwCpnwRfQRihRxPp2kYMPy4hzMqvvJnBhqEBZNSA7badtiNczhtSq6M5EgR",
  "key24": "31Sh5iw9UKpeiUCuMQEvhvsdoDw6WeaF6MNEVoLNf48kns5aJaKXYswaCcBRpB6CESFgPznwMmMRqnxEtY8WZSx9",
  "key25": "5aHQGCZ7xfhtbfaU8esvZ3rCBXzYGGxCLgcsAG1cd1GnXj2vrFWb9MYgN8M3gHkD6jqPYb9uvnCFDTBSyULgoVAU",
  "key26": "33t88TJkGvQLkeKcBRMLKpfQ4YoUpj6W51rFoV5bSWwDSCFQuDpw1R3HFcMbuHGTSixCDSGUA6ZUKgERc7dtJVbk",
  "key27": "4gag7uCqkCN7478JnvNGVTkSwbpYHpUN1pMcCPkFfhsJdXoqaj7KXppkoGSiz4wv435u4SppZaeRbjwKpkAQP9py",
  "key28": "4wFHM83N75bu3bir19gbfHyGRrxgGFhmL5FGqhvj7Mun8suYrJHwSxbXPtS58ztig9tHh4GLKGAMpq5LimNs8P9e"
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
