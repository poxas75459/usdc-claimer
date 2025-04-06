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
    "228K65NWVZfRVoryVRFZKkpYwPghVomrPST9TAM7LGyPg52XDUaZQrYTZ4cxtEVKzmJsrDrXDtevGwuMJrHLX8PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5zUCUnVL643by7MKLqEULbmqgPgq7R1v9byc7dh3SkBfxb5GLhsXrnSdkj87GiSWV1zKZoafuUzgddBj11xsfN",
  "key1": "34WxToZ1CKnasneXUu3R9aNGRfhKfYiFWPefY3gTBpGMyYT5GvfsMTDaFzumXzxStw8gzttfDsBQWZXAj6L1DuLM",
  "key2": "28Lwb5pKvAswcWh5nmkfy2U2sGprtQeSsy3fbeNVLzRLCcEQyXqvC75uBGKux2e3HmLvfpQz5jnGFkF3z8UmqxLS",
  "key3": "2x7ZYqcZMGTjaujC8zNfdhmqqVpTGxJnLjLD4BPEz1iMfdRvbCFPBr64g5yMEKreoaFctnUJVATkk6chSnjsvc1b",
  "key4": "2QmuFcMrHDWHGn53gREABYE5b1gKpSA9XsBw9WKDC3zNBRLBBkTWMQCSk5goMLe2G1yJLx5xRUtzqCHA8Fsns19s",
  "key5": "4iVfFxv8KrKaio46nDxFpCdxdr9YyPPgsmBCg2pWkj4zAPjeg8mFeuJG9nfAM2htMCWF9A1LEu9t9uNBWWYz9DdE",
  "key6": "3qtr5sXxspwPAcWgVg697RL8fnNbKWvJdckEuaSwHnKjB9xre6TxZzutHZRrgaksDSDeJGmFXYXtxE8hwDcUt5rd",
  "key7": "54jUR5AMmsFmTHTiGSWrq49pXxpKDQQ9pZWKYzfX1SAGhAiZWppgVkXRea6A8GUKJGQh16a5jBpJhQSjVhERJuMi",
  "key8": "4TtwfwWUXdKNFAfc2yyWnfLYV8YphJp2W58TvbtrDsXD1S6NxCb1kBNxA51P2yNn1iq6eegrZtFhcwpEgWNKDQ1K",
  "key9": "5c3fMZAUYQbpAFUdZpxrdXLPZdhWBMQZxQ6exW6MvqwAq6hi5oqnFgJj1WoSh212VTxwGjnmmQMSztcJ1oA3wWbC",
  "key10": "53wNcxLd1TmNU8uTPcVyYuZjNQ4kcYSw5iKK73dY8zXfFfXV7GLtYm1z423iMFcGE1XGkvpdXdVJQ1xf1MkaTvC2",
  "key11": "5RmWvxnTwCmVFnSE6MVvAWoCy7Nr1YB1UL2HyULR5LruGkeSGMAh1x6pSR5BVayqX6YQUGBVqYzz1tJTPQmtAwr4",
  "key12": "uBLwWnvXEgfxU2gXCHTKpXooq6wDbP1YhhYpBNC9MjNGRBxWPfQAVBVewMTAaAhmjmcrs3CjtBnr8GBvtFaLdwU",
  "key13": "34fG6aVcSNKSmkJFdkybr3G9FiucMwL3gB3Cr1g1TxkXd1mjt9bXRo9rnMuCxT1UyZCRceVNxp4djKTUnJsSYabx",
  "key14": "4LqoaG1Hh59NDdK2ZGyt1oiycZN8tzUdmfEUqznrnfUE3vTJ3twbzJjMC1zKg1SqarbvrLNmNmEpRe37epA1Ve43",
  "key15": "3mt3SyrRyyN1cKLyXp97xXyYtCb1LgfhfvPJddHD2xhpjqXhydfGYq5EcmEDjNXtFvAHjKSyfq8DCNYuEbz9oMeM",
  "key16": "5LfmWkycBpUkr7cS9LZoWAFUjcEj13Ya99EPkzMxw9xcXKmS9cB5Y9jLJ4LdoWogs4oSkLofKP9ZPE17229zsEMW",
  "key17": "4SA8qpYnNcoCCvp79j4JB2JJDfHC5WGK1gmopQaFkPENYVLW8ZUCuPNo4tLw9WWXgbn6DJbCw24uhFtcDoKCEX1i",
  "key18": "5uJV7xaZkTgAMm1VwPmntGjYF8JJXDh255btky3RWD7sMUkyijmqQA2FamUdfoV19GYYedJ2QUiH7vwfKFGtKTVj",
  "key19": "3E6trH5yQCQFdfSCqmEqLAdn5Y744cmWBZVjon61JxCXALUNEW9LJ1GAPUXxcBEyJTB6txSr7eBTpAwqfbJh5jg9",
  "key20": "4dbDdZMzQqHi3YNETuGVz4jbJqr6HLjPjufCGrdwUfhMGYFnBTytLRXbe67cWagAUS2aHiY2SJxWgA3DnWvjzfg",
  "key21": "5qUgLWZeJ9wVykP26YbgTqSDcSdFsnG5W6yvw9riqXQYWTCNY1f2fPAnysnnnwWcvwDVwRkobjx4BFvSJE27njU2",
  "key22": "c3D9SX7Gn8hBjzSUJM2d1vwCVRTmVbTjErJiniNNPhYTueb4jWb3bzscGd7U8iSEQkq91KSBpRGSvjEDDYMBGeS",
  "key23": "5BTSFRqdx9aRS7za8uBpa9pRGg5Q3FAumZ81SQYFej5QiXQWXYYKhVkR2eFb7XmEkUdHTyRKqcuBcGPPAsFC8Vt4",
  "key24": "2p6owdCbFusCoW8UrSdkSmSzjAJPR5wa3irvX1xUXVW7rB67rye3oQ7hEc5D2AqeDpXXRPUfmxugGaLkLPpkUQ8C",
  "key25": "2NUSCDWxnxULRYGC7N3miCw74CU2xg38bfAyeK32fWP9CBQthh3Yy1JmK7XydPTD2RJA4UD44Td18H2c39YGkGzy",
  "key26": "dCVfRr5fAU6S8x9SC494S3NiUyhauB3rTc5mw4pjPv1aMCTTEuhWFWBhYZEi2iZSybnkp4ve65zwhjJn1ygv1Ca",
  "key27": "33KuNi6yo7PGKks1gNpDR43n5L6goahTkB6gatDzhiFumjfnAyYi23uzDDeTYuUtQXkPZTZnnbfLpovnhemtR8CM",
  "key28": "2dSW8kfWYpxCeF9VdSsCgUv4uhbSwHx69PjkgU5DM982rAtHZYtsEdL7Hv9wSpx61K4ogixXnFKCUAynM9L5o2Nz",
  "key29": "nSYK3qpaKe4gAGrgx6pxDQ5hFxjytxegwk8JpKwSrBZvFpFyJREFy49NPr7itYxHyi2M8MCzEUxBrShVR3qNaPV",
  "key30": "247htWrYXqAzSQMSddNCuT1FsSZyQVZN3pf82hgXQTUPkaMn7KtRh1kG1PKjXzhrT7Kjv7kPcw3NjbcvkemL52Pj",
  "key31": "4vuvKPEAf9qEVxy3BftfG6TG3X9UsZkW5UP3vRByR6uHgmMQiFNAZutKZ5N53SaogzLS28vuiDWHE9tQxh9gxspm",
  "key32": "54VAVwkimC3AQwDzJ4qNLL2NMhsA1HBjrj8uB38QUGue2fWTPFYcx8yjNSE4BZACMoJdbBSh55uVTj4Kdh72Rk6X",
  "key33": "HsxWY85a8pe2mUDRfReQEx9zjbqpyMrSq63Hdue2YwgMg1MVkYr5UpZhZGag9r7s7zTyUYV6ULwUGPyUmzhy2Xc",
  "key34": "4C5LTdxaRMF5wWy91SAhr1wBwHnR3Boiuc9ceP9BmPQi1fXEV3R6aoR9zTc2Ku8LNfNGB8tgTsiystyN9YRQPDPt",
  "key35": "xvrYWWcvr9bgBfSgDcoRqShavJufhgvoSNayxAqeYvXaiEHbCANUcdJ7rvGxo2U3sXPKA4dZN2wfQYWFviGXU5L",
  "key36": "39rtbEy68thqsm25U1HPqm1E5JgtkFL7rKSpxjqazGSr3xRE8DvPu4DR4ufzBUZTNYSoTrXG4EtH61MYNYhVNPhu"
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
