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
    "4DoXnRogQBEjFfveTv623faNgQaubkDm6xweoo2BbN5qagujjD3XD9rFypo2AfmSypzfh37UAX2zMw4hdrk4cG2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ca7tFaLTCXZqHtpCPETKCGeeefoLXZX668tDGQvH18sgNBKni1bUCLJ9sKb77ueGd2iMAaWZWAJD7ugoBzzp7xa",
  "key1": "3rT5V2wuruwFJ1brbsWbZAYGBeHyHf9ytG5QwqVnpTf3KwbBP2QHmTSquvU8NiYVb5tZ7djSYBHhDB1Jghd9qB51",
  "key2": "5C8PfpNU6w4FgTPCw2xEam5YTjkrYEBh9dPyuhegWRExPKt1HxwRMFXvSNnsCHUZvtorks6RJVxD4GXg5kVHyauH",
  "key3": "MVymg8aS9wo27HQhpxyBJuJBXzJZf2m1fooWGuWDWud797EEqsfidV5S5oEBDNo8g5Y3UiEknpd6spuV4n6fbtW",
  "key4": "4XZXtkLJS5mw5Vi5PyCEUtVfsMNbBoj8ziFuzwBA3F8BLZu9PR8vEUpDiTpBpGbn4z5kUExERMUEzS5dRq67MgZc",
  "key5": "3tkdEKWvNfAcyWjeX4yprabpKVniuXhWEDgXj9yKztGkYsMfSVfuwUf6LJp7TGdMPczftN1x5wU7uuhvVtTLLtqv",
  "key6": "4c9NBg3fMteoLyDsKhtZRhEG4n7y1HkfZ1A47sPbqUd8kHqybyt8RpHoiWMMHQVdtw7v2EguHFxjdcWvCqPD49Ji",
  "key7": "UH1J1vbTyprVKXKnarfKyBWRahGZfcZkz8T5SqQ7rpLnH3scauzJkk2bYUJdBxUyrNSgwUWpRVXgstj9S17a9xD",
  "key8": "3yKD7JuPTJgjaVJZXajsMkegdwTo3rv2kt4jcqnXXe3TWTfhWbuimN35jd1YuksxMVFuwy57pfEVwbB7jnX76Mse",
  "key9": "geZgxFiXkCDtJ4JBFi8HqN6CGARAgLG2nR4jZVs6oPEUA6HRRDQ49A7LXGLreV2x8sFHinqoGcEuBwLc8cqE9nz",
  "key10": "2gBPaY81zi7NRHvqaUip3eFUAdZ6FN1UAjvK1wF3Kg4dH4a2f2rQDJLpusZ6PZVYXo9EjjwuJCsNToyo87hYj4R9",
  "key11": "2kGJnQD2dMJHDZesULsL7GhYYNwi2vpmVFzeA49j5NUafN2ZMDgN5E2iUexX9PUsWT52WzqnNc8ADv79R9yvcD6g",
  "key12": "3ZbujyT24TNTuKWCDBUai92dPVxMZdfZnFkLT9j78pXNP46GQZy4N9DyScvYUpnjcajJozJrvp7yFyhxU5TABa6T",
  "key13": "3qb32YehBzDNGW6jB5V27e8qRZe4KURmGbByweWjnSdnRSteJwQSQthq37FqAs4Tm8vT9329Rm3MY6NcSU1AjhP3",
  "key14": "45feSB9cRdgEKoGfRZ8jgqffGk3EMogX2ksTcu9NXcbnmabT9eunirXSYEZJUxVueRrbewifRN9hcbT3zh9yxY7U",
  "key15": "5iHdi2UwnofoPDVfJyqqdhtVP4kawS9J8mNzV3Gn8a5grbFaNmxgBK6muVugHWeCxhu9fb2PR2gQRS7stJXincR1",
  "key16": "3ceDDZHMRNjWHqzP4UvBRn8UuJjKWC4fabh7niCji6BuwhMGd84qCpDtXAN6uMAVtPoQd6DFu5LptwSNf7CGQ2PR",
  "key17": "5CPHq9h7y54CkEzhn4v3VjUXzRnFugDE736278QabXyMgVkd6kyrNzG5KZ8CcqkG1mWqRbxLRY4Nt2P1DoWN5F5T",
  "key18": "2jgsKXN4HJAgZ5sA8qziEThLM7R4AWq1zQE2ptAXf3Dg1FWuFTaHfMJfj4z7XtEjm78FQYf1MZivjZeDQUWsreSG",
  "key19": "4DaxK4oBc8CPvbrsBM26xfY98cZrCfohKP5NsWwXVvWfJrrPzXi7PrptBpTUMx9fasU31k3scS9LtsVbEwGLrwEN",
  "key20": "2rN5tmEuxEAQ3AAHcqYGihssacRppcGahrPrRZzPPVrb57AbCjB8VeAcDG4aBbBGwkqBQQtpCfrEAcqCEEWRPqaT",
  "key21": "3VbFM1aGHU1rSgXMtYAffeHWtcPexYuDHmi92ZtjTGiiBpHWhEjsr1ZUvVuXRYqwVpYSwpSPSVrH7XNjiaXbnMTx",
  "key22": "5pAhFzv6PRnwmWc3zRbmyyBECmR1UFtuD1xAGFsyKTciUmQi9yrQji56t2N37rnrXCRgSr3dVeB1cDpQLBEYtjMn",
  "key23": "3vFMEAJiXUFkcfTFzDfvPpQSmaULfv89fZtT7h5aV2C9D5ePnuwzwEqG1mVJHZ7qYJVTD4V67Ciacvum9A2JKGEi",
  "key24": "61hrkQ98KvqtuwVkCFTPmg7w8EANb8AnaXjfuhQRzyxwQ1PnR1FFLqEBtdqmqrmdTaTR65Vkb9DpR9NfmkUqsU26",
  "key25": "5GkCFfibFuF6cm5ey9CYdF3uSZ6XhDDNrJey8sFS2uRqjDHp2k8DEBqTQdKqYMYqyxHv2zJLMtn9EceFeEodccj3",
  "key26": "3LmSkpRSJWs2AJdaFyyYP4tjuQ7ARCWpJyRwgyQ1UhY9fbz5PwyFCvMAVdQHxAL7uCMHsDLLhRit38HJJpBmLVQD",
  "key27": "15VqX9tmjnzjmVEWfFRjJeRUYayNyFBwd31UWg6F1KTMbEqGeJQJUqdNqmrJwVTQk1ozxs7sFy6V3dpRoAgKoCY",
  "key28": "4cnKgArYvzywRjs1whWvb2bxreNicJiQd8mfckG2SQgRt3nKaPa52q6fnkqLqJgnsJWXtxH9Gi8B3bNW68tT5yyC",
  "key29": "2HNDSrCmH4Az66neb5ysgmrAedo8LmgtgtvUQK9ZCCfoS7DmYDF1sW3rYbe5WDYVvw5WnK5DBScrutkrfEoon1n9",
  "key30": "nMndMZfjHchLG6xvQepWyi8QS9DVeVWSe4mx2vBLsdN1X7T2xBTJBh5w4e2hqQuMoHz8PmLuo6meMRE88WJQhvH"
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
