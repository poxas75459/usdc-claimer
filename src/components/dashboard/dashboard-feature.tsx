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
    "5nTBJHcxHjX5uRzL1zpCLxW9B2Nkji44hhtJgApMSHcQWfZWuYx7kyhBunSv4enu6qmtT7U2CECB1Sua28jHf8Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxZJxVWrS8x2A1uyeGJHj5afefmhZkMK3ydgbX8DZFs6mef3nHSnCKGAXSWFW8YxfN7ecehpu1vDSKpqiaCCQZE",
  "key1": "2Y8whr6Vzbek38HwrXQs2jVDwCRbk5qQKb4mmmnvxLmSUf8EgpQhAYc43cWsuKA9uYsGFEskGuwaLA2FGdQjCcpv",
  "key2": "32eWeppk3TDpjWr6hCgJW7rdf2qTNVoz5nsEmPris8eEHfBo3WvDCRqhx66HMzRsgjAHNJur5czTZR666r2PLiFX",
  "key3": "5Ymqh9WTDutorSKGonRdqMsHpmqGBoSw7seHUQsYfRwTR99eHSHGacfgFBrbkuoPNoEWYh1QU67oaBvcGhL2Fz2a",
  "key4": "3kpPzk9iCxYjJqoJ2p9igt7qXDbPbbVUhZhgAmkGyxe3Hfp1T4czkbjCngvm7H4uQbjkrsNRHsy2f54FLtjrspgy",
  "key5": "2BEKdR7nFaSgAQp5Ecbf6rWiQkJ6MvwQ7vA2XmFWCP2HTP5ZVhdSNCZfCur89qg7o3U5jKmiyVG33EMoxtEM3xGt",
  "key6": "3Pm68kjxFUKengK7AVvmsR11rmzcdzh1ZT981SQTAWnBPqTpSyf9Jq4n2pZceGAqw85QYisweTAHE8eh1HBhehcG",
  "key7": "3H5ZNjQN15Zg6mxZctDf99KVbyEpcxiL3W6gmbZAYJoZQnKERxD1z5P3uC9T2MrnpEVqJcqGonTeKbcrpCbUiD5C",
  "key8": "5c3J7gz4Prdtr15x3GscpwMux4fCpBZTFNwaTK3TTvhJyYX5LJm38rH84K3WzNZH2jj15ZzZDnk6sfK7jcWXenP2",
  "key9": "5uHnK8KGJAz5cLses6Dti6yanQ44GfjZaC2dCnCYKxfa3RvukiZmnVWNH96wJGWweVXJ5JjaEZ9LtbjchDBZL4kM",
  "key10": "5T9k7sZn8Jxn5Juk1iji7NhbX44CxmE9hdf93ZzP4AvKoHfLprQen2byZVENX7Sq3rccGdtqUheWSYfmzXyQnqgN",
  "key11": "49ieHT2P219D5s4e2sMnx7Ns4cFPZVZ1ey9maD6A28yhFepXLxbb75FDqrvKXVayK56GtLZsAAV5uLousH71UdSv",
  "key12": "23vWa8sanydST6BQQcZbGD7hV6JwrGWWAJmKRXsJVoCS8sbyNZM5o6YC8A7X1GqqiuDQiGqtLqwJ3AJyEQyWncrx",
  "key13": "4Ss1Pt5ADwkhjHN1Dicim92iEvugfDmwbBGHAvMzGgzka5ujceXnrTqM6XPNVMGk5wLFCMkUWpTkQMk7aF8fi1yn",
  "key14": "8NfhZDQCLHZX5kCi5283LciMocv88aeShaVy3xVG8nC6hPn6C5WazDwmmoz8qZUEio3mRKg3MqEabcA91mHozkn",
  "key15": "3Ld2BUy8dpVX3qhweTnV6HswkxTop8UkQYJGR5Nt8MDvQbJMwfJm4DzgTu4kbLXBiDFWZd4uLXzGTyVPYiXKJN3U",
  "key16": "4md1CycPueoZZVqk6MyypawS8ZvzW7ao5kNyjVHzW4QvxCduNWSWQvueK4k2fDxyXEZMwd9Zf6N6psbjGXBVrtL",
  "key17": "59JixLC8BR7XXJ6qLJFWrWgZcg2XutP9HmoQo2xB2NcM6NPmsTs4r5vaBuxwuNUvvvvrFWTJGDjMvgopJguqvfGN",
  "key18": "2Lk2ioVZefc8FEdzjYF19ZaLUA8n6HFHq6eDogmWxW7HVcLnvQX9qmrdneh3mDoSUmYtH1ZdTFoyshoKYzBn7fVR",
  "key19": "518qY1cVbd5hwU2PYq4i3adQvJnT8chVW4vTAo23KJKLoMPrYxbpNkawCNh6FSspYvzcJ5f2WBwos2PFvatdbvKG",
  "key20": "39JdrsHkyTf4rs6LidrR6bYuH6qcsKB8Puzbxt5yydET9Vrt2MR3PHqB7Tf6wgyPENRoaBzFLmFPcf75n5oXJPHe",
  "key21": "4iXVBuT4RnHtzYdPTBtKCMCZAYb1HwZQVeTCwVyrpVrUSxUKPXBvkvCaaPXJY3gx32wFQu4U3S9UYMAwFgnaj4Qz",
  "key22": "4X2RxupB3LhPaXUdUdipixYm8RJRyJDaxT7o3ME5ZxDycadwn76co9VNCJLS4FBzFYuQA9HwFr2DefoCnyG9BZXd",
  "key23": "4r93a5YNR4trq4ZC4oY4HP6Kyfmq8CE3JK5uwkBLvtBZ76wWX65iQPvnUS5L6A9kRMwjrQ6f7iAw4kaABSmKLXhr",
  "key24": "5cWjSGhfjet4AaLnkjqc9gwNnjeCrya4YTUDrcJUk3L4UPFvBjnKDJNs9KsHMYGvT2FY7AahNTn2vH93U8UTnQYX",
  "key25": "5nrRsqm4FEBizBKRCrXJWPxeezDBeb8uyjwGCiK9Yt39GPnGk6E5Z7Ckc9XosEd15ptbtz2dUGhteBTPh2opc4CE",
  "key26": "26SijWui5UXawFnhrWzADKEtEwxRSodt962hdivSQYiou6Xkr7M81JvqjHzGt8mf6UdLJHWc5kQefPnqMnSLCTPQ",
  "key27": "NeN5d3o9t7uB4MYLvMfNGdvfds1Z5tasvSkLEwNirZme3BPnyVXvLRSkoX98dxTbe4NvYd4nn5s3wTSpVWxnPgT",
  "key28": "5JEGm2P67aqzgamSi7GDYMhBEdCEh8kk8vdWL7uXu23ZZtSuQBZCc6KZJaEw2ewh3btmw5UpFsHu351YiZH62CGd",
  "key29": "haBBTqicLZvGmWuP4SwrFdxh8et6EtVziyfkmFK5Da9MCKtUjcGbSokzbfUG9qqkg4AX9XbE1PrrKUp78wXsizx",
  "key30": "3m7sV6s4oTSNxUANkqLSAvs29ErKJbieTvMN3MWtVkiikFdfpFPzBJ9HsGHAmTx4dVk6nX3o4Rd3WP6dPtpCwG8K",
  "key31": "61TNkKLunHZXm2gt4at6SGQeTtxmmjBxRfecFrDAeeiRuNFk3UVXhVMDyKeYxBgt9DZBwvtSHaP4guK2iwpFE71h",
  "key32": "4y1ZZCgYVrvup6C528T7CcPSQzjyXnnzdePaLWWywKDJ1oAfd67LhWqrpaWdEfLqU4Drcfayn6MQpA3KbFJLkChG",
  "key33": "4g2LKDUxiQsfkfKELQ8hRNfSrqfYkh7uAjatoPhDHgUZVvdtLv88YYB1KiDHDpw33cPS3tqQHFeEBwu4MNiWHC4P",
  "key34": "UZpwjc7VARNCiPiS78WrK9U5zR2fXJmJuM6W13DFykWiVWa6uqUWjhibKytihYxLPbtugv3BXhF9bqN3wwCoosS",
  "key35": "3rahjYjD7VRAzTg8wGmp4ZwEoMa6CYcmQHdZKU8p4EynW8yD9jdh7MfpMDK2RhN5ozdNgGRe6ZBkwrEJzMRhwi6n",
  "key36": "2zB1wZUJZiTRJhEBVoChTpQ2oqyJy64fwHhk4knzviquMNmHsEHxQpLht8QPVdh7uW4DJR2fBtCh3sms8hQNvCQE",
  "key37": "63K4SENkhw1TwNQ7XQZeY5ySQLDk9zR5q75ZHR1UzdbFZJTheX2ErfMHY2uiLJwoMZQBDbg9WBeJdvS5tfUBmYA2",
  "key38": "5uaquacwJC3LrkWiyKmYk9XPsbPwfDPNpJacVvMiyCJDb9S6BCmoN43eyrZZE86WjhxTNbS7c4pPw3PANyCCcAY9"
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
