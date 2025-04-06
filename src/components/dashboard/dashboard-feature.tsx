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
    "2Eu8FQzUyajrWLad5VAtMkdaEzUaRQhCUq1Um9ptwkKFKsgNhcGiQYFLyg7Dkvuz5ZMhRfZ7V7uzJMZqA2fqHeuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfnBhmb61qRTSTdb6V7mTYWqJEBo88aU5pTh3caj9MDRoAgLLhPi9QQHw4oxrTpDt19RB8qJKBNEgycPmj5HMhD",
  "key1": "5hvRevh2NoqqiHZzpeuBkYWaVtMwJJMupHxGGRZiwyZ7zcSeUXfyG7RuiHyWUNW6LGB327m27g6YeBGifdmJra3J",
  "key2": "MKncMiCk3x7DcSjnmLQxogcTRpUDHK4NgTTNZKzkaQR6Q4HV3nrPzDs7CrCkFb8j4fassTAX9pLCVK5nJEm34ew",
  "key3": "3meEQZ2K2hvDb2GQwuAA9YGFyVFBniDq18eKURZf3mGU73aNfLS4Vdnx9CVwvbzAwDzEYq3zq33GcLYeBiBpnHSX",
  "key4": "3GZx3YN34ctrHAzZKJbhaX3d5fJFcejQjarfUY8YFNfukFjFxKQ9XpCDS1Cs2rar2BVKXXw6fenmkawUYKhLRumH",
  "key5": "4Rqmvu7bbjRM4ShNrFzfSxV8WKseYT1fqjQvm3hc9WcNThsVuA1o8ce6FzVry7t8RgLEMHf1dkbzMdEidttNYv5z",
  "key6": "i5AVsuntgcG69eGcHT6MxRRWE2eUa1oHZQCywp52kSzjT9qdVhrnyc4ioGEydedVR7ReQEdpCQFaLo5v9yHGNmQ",
  "key7": "2c7ZSrqNX8fpjSfa2dPDbqwMbYw8a2oUSsMBS8vVh61dUMvHXru5SJsVwEfyPVkw9Vwe4VaLFtfvi89kk8eYPXmw",
  "key8": "4HJEXGHTHGipZ3LEt52ZbKXmsUwUHZnMwbxLXKRTUH8ViuN5mX2R7oJcZCUHzsSDY4Jxbtr4R3oEyLEAZcJxfjuf",
  "key9": "4TECz9LeV8Sxb6pvcgUQJvgYGHj5jpzu9jvEqfR6GPoGdQFyDV9n4NP463KDyPhNrdXKgHZMx66iEgXCV6G6mLgE",
  "key10": "4yxMFi5B1DFwbKnEvmBtpLcCakYhWMqETSSGW7fPNHiBj8PTauinabTADNB6uwrDU9ciWca9CM8BNThGx7ECvPLQ",
  "key11": "6YTMnZbeg7pmbAiz2ooWthuxrJpkAPDSYURSwe219CNFocLEpWgt69FCEb7Kt23shAnWbEhdXZY4G7cf2ZFK7Up",
  "key12": "5hY2UiTsyxGirTJioExJnJtEyWzv7CHQBdkzT7ALiUfqoKnjX4n5kNiGEQszxpUJAoUM57mHv2jseJRVZkxwbtpb",
  "key13": "C2TVSeKrbWAfEDFMsUpdMB7vpVJ17uE8myri74hBBbZRjp26b1CYWBDK7H6kzgQUf2X56ZpFWVDG68aWpDd1bbd",
  "key14": "3kogpsDS5zrWbs4kH56jkebxThb8NEQpFsYsWnATH71gRSMiNhRKWc8j3srWrjX8S4pMPQDXDNep8mS5mKCxShpo",
  "key15": "51puQuyPKW9czPG28s8R4jT556Jm4mjv5UYGqz6oteTi3FTS4e4cjX5EgqbdGQEbD4dZT8JwbZCEDcgADPMjsEQo",
  "key16": "4rjHZiLm2NT3tvcT74RS8oKDKbRdWKrotfWBsFzAoU6cRM5SsokiQ89HiMryGFbSFWnVAm8aQtH8r9gAQTp86tDg",
  "key17": "5TbMKacAP9mPo73SyzCLDkRiGVQKB8HHWp8dVYgnCX97vY5rzKyxhVkwodkzkE2CrEThEoGoSCsSWM6ZWKrevJ6c",
  "key18": "4r4P9Etq69kuHMMkznMi79aNLmph5WteuTz15JkwTt64Siss2gwt6Bu7z8BSHwzR76FM3Dxav6smHQFmrb3VJFp1",
  "key19": "3wCXDvenu34XtMKw18jwjhWrX4JYwEQEkfUge6wdwBVZdYRVNM9ixr28RXv9qYJCd8Zb5M37FvCNaQzpXhVR8tp1",
  "key20": "3WURNcja3F3goUCvwg3Dd19mhjXaz2NuKj3vsK7CyoQZmJjstDBcHWxTYG8P9ZeE6gHzwr6sPmLokPDuZdiDw85j",
  "key21": "61ebwsbGqfFC8TAduCQkmxeZUjS8Q8KW7HnNMPTV6b9VgdSumT38KDTjF1gveyTYyatHrELBXEFoqzBxHsW67PbA",
  "key22": "5ny6SQMAuCDAasKXvU2gccoFHhv4KGRKBMSVZ8JYS6RzZoVSYsETARF3VuHH6Uw1NdqhPd2Ghyzbcb6FDxHhFubv",
  "key23": "4doZQgh6WTpQb6agA9QMfB16LounDYq4npCxW9VgKaadE3DEHGv9hrUmJcWNGWwcsyNwefUjYxioGNuTsAqSCAKv",
  "key24": "rcSf7BG367ALaBjmRZ8UNsbi5rAVAZ722QYZ9aXN1648rz8JFYZFC716mmXBivDthtbW4e1MbBPizCMxHAXM2KL",
  "key25": "3A18J1iFyQsJwU7uG587inNPDZB1JJfW191H93Z658kdGqb6b6goavUVcDNEaNx7t5Pm8hZn5PQCQV9N25kfmH39"
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
