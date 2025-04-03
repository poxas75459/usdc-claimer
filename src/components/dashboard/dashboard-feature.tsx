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
    "3egfbxFbJdgcLeGoCuRknpZHZWAgQ2YbHg9Y9XqTNofNiqTR3FFz72w4oDpprfsAMiwyBeS7GhutKtVfxy7EVRff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238yrZEgGuPtqEbxf1EbtUGX7642gCU3dKC5AH3m4qEKxWHHeFm7DG4tRTJ4b4zMoZAD2fpknpPeg9PM67VhxYm6",
  "key1": "3ngSoN3DfCSi4jfki5bJR872n6AK4uFrz4ba7eGuyPvtEmq1PfVWvBavPHNJwfeXCRyfpBz7JD5crUywfe2tm1pH",
  "key2": "LA7JPzEZyKVpQHBNLHP1rqoqcjHc5pz5ieSBJYM4Tiq1gEnDsxQaUEeTtAhhQNg2ePWx7UjywpVRFnmXVvo1rpp",
  "key3": "4DLmhXi32LqLMSJZARCsFz8fEUiBXXJ43SAHBmW1nRXV5hU4BNbRyD3yayUWyowSJs7XWgSt3fv1WnsTqUgnpknL",
  "key4": "2JGbxpS4kDuPJSUnZUhuAMbUtzb3maAdp51FWQVdSNdcHPMe9NmUh3ns1SBfL4pnBMvSeELU3ekxr4aa12qoJ47Z",
  "key5": "3B42rY3j9kRdMS3cYmUdwdunWfuxmJtRksETZszPXWfUASz7qSp8sbPA5T1joeVDMT5Mfo7aX5k7RgtgjcFARsmF",
  "key6": "5N4gNKUoPjySMrZycrCsmD5pmKXkQNNQ8V9ta76SimXF2DvgTcyrKsuDkWWxNHw67Lek3LwUs2Cnpt1MP7hPSSDh",
  "key7": "4mUZ2ESw8mGy3y9RpmmE1poTmc9vwY7gkbL8afomoX8QzZHthwTULkpDGi8xYUSqzNTmMPKARYG2ySTTGddMtFbY",
  "key8": "2pkCNpE89WkhAhtmXQCNWY9EgwisF6pJXhVWhTP8Yu9jg5gagvrvn1jzHnp3NdWDG4WoukESUCq9NSXZxdHavrAx",
  "key9": "2UrLus21vjBpjmF7FFNLGtj3NKi3sZGDophMBrUm3ikew1xpUwBzt7KA3Ca9ydPNrEQD6LQEvD9MbZ4pZgek1unS",
  "key10": "2PpqTY3cG5KDCB1ia3CPY4ZirJXHH11inQSuqkyAHUK5cSnLWneizN2iNTnBLw3YWGzHy7eZqkFBu9fTudv2EuGj",
  "key11": "4yxaXmVmbHdMssX4TWfkP1PXpuvVz8Yd6PPDAWTU41xtTRSRcw2VsDdKeQ7botoFwvjxd8MuzkKrZk5gZAeeyvQf",
  "key12": "KCR5Hhmkz1PFXQFYym95ryWMCSjGDB9D32YZkpRaAbPxnGjBsUS12jG7VYZveoeeTiisFHmpFjXvNWuoLTU8VqN",
  "key13": "5jZX3HJ6Ct3SFkeN33zRSWPQu2p85UTo1mpz4sYZZ6gHYHuFTtWbrSMduwvWpkviBjypH1P444Z8odXj1DvgkoGs",
  "key14": "2TbMxXHfvs1sjq3YaNqGRwFwLRmFE2MzhNYBW58i1mxED8cp4QyRnkqxQwsPyZYxaT296be9Q5GzZFFNhNPH2AdL",
  "key15": "3AfTohmmGJoos4bzT93kccEnLoeEU4j32xBW9bDE4x1viyhL8rjb7UyzhtrYpCz97XuSJS99oAxJP7Y4y6Hjh5bz",
  "key16": "2cxjheBF7NABtdsqj664cR9CPCqmT92KBcqa8t8tUEHukpQgcUEvv1rUuD4CVmvyNzWKN1QSrQRcdz8HJvKaB5KH",
  "key17": "5k5zNo513a9X2WU2cxkEeGR4hXKG7vdJKhhyCZgr2RNDep4AKTojbgoneuaW1v2rg5XZoNon3w6AVAceqiFUtq7F",
  "key18": "3joUMuWarFYueqMLNUbFYW9HyGu1FBst8dy4MNPytJ11eZCPyFNiNS7gLykD8FHeXcPyhCZBGwSmHydvJh3a6Quz",
  "key19": "38xMqw2TZZ7qJav6cSjC8vqi1bsHpiXaCfkma4SgcNt5LsMvjNuRAtugdXLsCHjb6GzMSKKrXdYXwjJDCtXk2JJi",
  "key20": "63FNyKcDsvJWABUWFXRxBBTKN93kTqqPxXNm851JnnEycRr4uEh5bmke9DXP9kgAjaLiiRsma6r4EjQSTtcJfgfy",
  "key21": "2LZbYLqv39nhs2gZENNgooHiuuRJknYFKwUGEC5b3WUDNBpoCDtpaFHJfXu97ytd2sAVam1MFR6Zn7WtdwrtiaaH",
  "key22": "5n9gaec1txNV5CBBnW9C2JMQTrdsZQZ2EB2phBcZr5UsLx917Fi9rEtYb8oSjLmyLsYzshmcmqqAD6bSP1zkWP9G",
  "key23": "3uyLZk7Z3awABSsyf3eUtK6jEddVBGQBpZFzmmefay2Kxa8bk8NUpZ64jK9MDsrpRdFZ4sQEuvaYkD71EnCFuNX6",
  "key24": "GFgC4sfB5bAh86oAKZev6929u1sRqU5JBmrVzsgo4f4W3XGfoZ3vQe4714EX5UhTr2oSEb1HupwB4XpXxauPBQa"
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
