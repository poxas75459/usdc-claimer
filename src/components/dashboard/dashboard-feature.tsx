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
    "62CXUUfoSFkmXUH5knUo6FaYtiZoPSLH3DQjCTaWPuLYyFxkqooqGR11rZUPqX5ttyTQxn1zhg5PiTBBHvvnrSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBiKWmsGjLUfZNsRBEymD1tWrB7Fx6nfenCTSnC64mB16a9Ji71kNTgfVypLRb5MdRdZooSRtD8MJa1KoU1DEYe",
  "key1": "3SNZ9sRBUSUmp8XNj3nNVp2bYH42oBPDLk6wir7ZJmqBicLoGzvAxMT9CBFJdNHajSRrCyKe8YT6W3UUvmycMHSc",
  "key2": "32Ys1nExSFUYfNCqXEYaWbDT1MWsXyUCiUiB9ybFsUMfWw4B2Gt3M9kDYEsc2d1GK4WQZcMho1M3i6emtB9y1wXd",
  "key3": "2QivoMihQNBk9Ufou4ft6wFdVmr4hNGMumAxqakenvRPYEEnLwg9SRJJNWPTYin4n5hpJYqfdmBCS9JeXx832GFb",
  "key4": "24W1bhmtRe7MXvZqXebYL5912bvZ4EjWM4cTh7Cd7diW3CwaZDWHPgyQYEKrGitzuspuCBnAjGvJssN61e33ycAD",
  "key5": "2Vd2faN7vpbY7MGYPSs42hjtr8SJh7CoKHejAnpX8ahAGNfE1f4i2wNHBFPszbWx5YC64QmUi9K8tfosJJLvwfEZ",
  "key6": "26ouquy3jd9xUFuptSdryAZxLfVfr4xGggSGTXsFCRXA5DEdHkz5WA8AwZi6aWh5psGrYVwiFfnW3xvMAMYvy6WK",
  "key7": "41cuUZEYvHvSh1xtcjaMM3zJnxSJdzxNt31PQMZa3SVDt5TUgdRXYSxr8c7AAZ7iRaMRe7M2XKMA13r4S9rKRTmq",
  "key8": "4rWNVHGAtwweRqHY3kPLmS883wDwRnhtfqngN6Cea4ZJJt1sMxcruQQbgG822zncg7D4BY4cNtW1FzbtuAEsWTvi",
  "key9": "3KZjQhoJV6Fw2huHx9Erc9qEjGrXyBXqKMeqzw2BKeknDXJrX3N9K6GUWBrnHC6Evoyk7MQuLgsKzH3RNaeQ8xTp",
  "key10": "4eDE1gmooeYCTZKNrt5tDxo2ojTWwvSMt5ZvL799khxbSgNA2SaG8WfEuiNAo9m3hdcWSW7puvvUKJ9cEqXy8akA",
  "key11": "9tAHFpotq2S9GhXtz5QeTzNaotNYWtmcsZN3uQM3EfoLDpYvEwwnHdjjhMTXbZEvMaUv9xZbwscL4bHDiAzpKBS",
  "key12": "2QpAyXdDo52AbXgt8fcjRSjkFpL9HWc9wjG4h8swnWrbuXZVgckTXhQTpmVKfqXv9E96daeCKQszFKKpRPpTSVjH",
  "key13": "4Y91wiyh16iJJh1NCDa2b5JvuKqGdMAUe65MBtBdy8Jysm7U8G7K1NURW6H6fh9cRddNoNn9eVn2hByX2YRFr42z",
  "key14": "3Gf5bDopsbZkZU9xFN2DaYN2NsR949W48a6X6BZGrmz3HAGouHK3AX5yroykUzymauwKnzNjL8EDA5aPFLJL9SXm",
  "key15": "eA1rtSDMdPhVznZWECtGj6wekbHCakwWNRaJjJnH6NeuA3UHdko2wFDQY52kFJNHrr7pVwMWQVaTameCxqvGWq5",
  "key16": "3fqqeJEwMAQg9uCKky4iCC5o41Cc5n5bjMR11Pn9yHEYeMgMvzRBZuB2CBLrUnZR7BuVgXGDgzpW3Mis7kRGewYP",
  "key17": "j96jTXnDHnupYqPyHgsivpPoR11BoKEsuNUbzDgsWtY6UaxTYbWDQLKHG5itktMv6RCSrzpzCrVeWJv2Ajo4vjR",
  "key18": "5znitgY9k8NuXJ9KEwQsuAjDKBZ2hSx1zc1q26ScVQZ5PNNp2QtLaCfnKEqdgCZbDjDy7ZdtqWeU3q8yk2Nk6XZ3",
  "key19": "2efKJ43uQVv6NL8JjyK8zRLEuACoRshrpiNRs5aLM4qPk6vZRBbitXoYvB4r6fZLGeybRjGGYc97QiC8G83v2cEH",
  "key20": "63tHYHDfardL7jdsbcrYkiTSgWEEUHaUgfQU69jJycnqn6JjYLkBkyQW6uZweDP4gSRS78Jga8pc2ppn6e1RNBQy",
  "key21": "2vGumxYEWWsrZFi3fUdmhh6efZ52TwmYEgwX4cp2RKtzAg62RRffp2sR9Yo8v6Y5sTDe61jKdkxq8hHnNSKwBFTh",
  "key22": "43irf4NJJLZeQ8p1KKridzJuDJ7pQ6cjju5PA2ZHmCGS4ABDriqYhhQVKegyEqAGkDuEQQjF8z1zSmkRRRUaf6cT",
  "key23": "YczQMvc6mq1iefwCg7p38bVtfcriEe5ZhDDJBA6se9fdiPNt8rJrhXJ3gHkxWBWG6GdpyJTtpFw2udtVhPVyfTc",
  "key24": "3YmDM5VY71YmV84eGugDDTTAYRhqXfayKxKnBV6NH959Y7NeB5NfHQQfnUATg7EbnrStE52DeeGCNtRMMQMtYgg4",
  "key25": "3Cu3XFAU8Dhbx6B37sCKfaeLeDhorqwGMego3EDV7RDLncHcXe1Dp7KKnbFqcBvTGF7xqGr4KJu2J9yvofvRxFhi",
  "key26": "2HjXWCdFBP2CbkhtQjpHHE2rwgQVmsA5aPYwCKKQ7MENezUTFvfVHk7pLLuiCvkJuPg21hpcSoNdwLHimBhTJ9AK",
  "key27": "3dTE4zRiKLa66ds3zDYHFu94mH5PRKbooAw8iuPiM7dWNRPfRMhVZesqAtBQNUrahPZpzobJfuBkmN4zKh2McGBR",
  "key28": "3G68frBwkjAxabcDZ8xFszny6iqP4WmWqZ4UoRtTi24b7htpURyYVgNqJ9A1jRpEJVF5CBnGehnnnm3K1AxErR4y"
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
