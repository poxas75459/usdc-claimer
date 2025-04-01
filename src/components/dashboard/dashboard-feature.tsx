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
    "5bbyyfqAEksvhy1LXLKJsSbzYHBCQyRRiaG9s4eSwoMDXdmjQZAt4cwWxukgWcNXr6eQsARNniiRDerF35zjwSEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4sW6GbZBWXF6NB8AGngFcWy6cqKoZPFpftMwr8TUGngbQYBAWRwhXNegYbXBVr9aUH8m7WJHRxLkV5ymbuYQHR",
  "key1": "4Sarjgd5mj1ihAAWHGLCqECa5JBfVSRt7rhrr8FTSkAmVDeYJFrPw4auZK3YG8GvsV1vVQgVCeAazLxSthZdQmxd",
  "key2": "2Jqh4iLQCqjZ7omVPq7L72TWQGbYdGny2bSoJdZT7zBE1LzUrDp8wMe9zU4UCkmGfMTJCtfnJYvLGAbXXz1oapVL",
  "key3": "62JFSLerYd5zJtUAeFceXSBjPuW5aVuVnn6EeU2U1YbEi6YiNRgGmwGv44wHjuqDfo6CPWUWjChGqZArbn7buwsr",
  "key4": "41y9Qk1ESM8YCLac5nCsivQm8oGnv4PtVB66DWuRNgDtSHU8BxUkFKK9GjBG1Ba4PX5zGw7Mpik2fq7b3NL4JE35",
  "key5": "HFB19ZqLWSSyMwuiCqyF2z3eUhJtLEXdCYEkLxXedbwRhDwzp1tvt2MsTPoZiWu3jbTtCaeN9oBwYZjfMJRdF8C",
  "key6": "39LeKeLKzv1EfkDryV7mRF5dKEF8y6RGB4ji5ykqAyJCjJbGffQfgestyBd3wjWuUdScDjqJrhS4AUW496uQVanF",
  "key7": "411bYuDHxAPGPDeZxvrLkZ8qeyNPJRR5dj1dUSPhJh4acSDsndLdteSYdn2zhxXFm9iM6wSdRaKTy32C6Nd75JD7",
  "key8": "4ThTCbG6cULgDjQ7rWw3ZjVShhTPtSL78wXogfMjMpB7N4vQuBkB3JANVFiezPsX47BwTfB99iWZfnnSXRWyUYCg",
  "key9": "2n93m6tL9izn69jhSGXirgevU5ttNpGWNvEBqMyiYHmxUTd7CUuaEkuHw1XdZS7XmFQQBUo5yfBpG7aAgTeiiYxq",
  "key10": "3Z79J6QkJYL9jLu5NmGMc5nraCHLY3vY7SFBxvdB7uBYiCn52oGcbEZsTAQ8LiPSUKTxRikyiodRrGzDiVUL7FAc",
  "key11": "w7MWUybRbcv2kaCnxKXHnRQyMf9npzTUw5th2dMJARZcjxzgckQzLJhKve4P19PxXw7vLGXdSEquAm9o7tpjgPL",
  "key12": "Q1KTmBuC1t5PUKmRQfmsSLi4EhA11HbDjsLteCiUUKDCUo9bJjvqzDa1UdWbV9FJKuoYmKkkG1NrrZeB4gDTA1B",
  "key13": "4p6cFDDgtXE8nFvoHLeu7Jq7L8heVwR1gXd8tvZrQ9KA2U729qoN2rnoRzrZ44a3Q4k67mVC91yACF2goqibTTGz",
  "key14": "4KxDkLExq4EUX1mTX7sVqN4RKt1fcFjXYb3uYq5kfcs8MEyoxRWAu5kFyXGtCadmQPxWkbLzXuRGycDxUZ3judin",
  "key15": "2Fj9U1Mm2h2KMZXLFveND5uoaHLFmd33qhscWLP1WF5TfXuMkVD5BcGszX455A93S6WB4xrhqG5i524x1w3n23bW",
  "key16": "4MSTEo3rz6wDWrorMKkEPrv4bsxpG76usKkZ2RwHnFT1yhbFfzeZXxyFAf7dCTzi4xaUthBAva9XTirfBjqKY4Jy",
  "key17": "2M2bi9NH6vXDEp6Yo377NA5uk2cFwN7gWJ8XVbcn3H9SW3KWj8gatSKs4b18GN7aaoRwr8Xe8QHdmSGNWwmZPKxq",
  "key18": "26zY2tRZQyaNobTDCui9hRnektLcaqmQP2MY3w3rMYs7XwHp3eVzyQVpenQmnDDqyQfbAiihXf2BpifxPoJ14SQ6",
  "key19": "2NBkWhXc122UtLmAFQtzA9f9WtcC1pM8ZrUyqHJ8bLsmUBJ6vR31FvQSXQ4HcL5pvsy11Xg6d5B5vVXR5TaHbikS",
  "key20": "5wrxA3f26mppKNhwxQmX2a3wTAeYzL1YY3yQPyf2BKT8fAmfMPuUMhtjkUkJfmsjAEYRNn2kmQjVQJQ725WtmrhG",
  "key21": "2EVMmeP1eu8cB9ARCtaqmH6HwBKdaF9CWKeFPdwztZ5ktjxoPTPZtPQpLChYXfYg4FjLoaqdfTJm2dZxSRVa9kaC",
  "key22": "5Y7vBGTayLEbCLpRxfTWcFonLJpy7ps2F5wdmPfM5Mu9wcV6k7epgnADfuoy9rEZVmi7ASy3GR9cuunFGkvMDNsp",
  "key23": "4W1D7hnw1pQubLDea9rK6xM1BuNppd4Z5sf671aJTEZJc8TQBTRG9qPqWFJiTK3m87HESN9YbXfFye1Z9MstJYdH",
  "key24": "j4kLkBHF2SKezp3FnKNJD5uZxs1ZwgYDMcJqTWKTmxqj1CNZh8zByrHVRVaByFRvbncg7iNhNFHn3Aqzjg3Aty4",
  "key25": "65f5AVCRr9sKkkwKTu8QBBAE9FYaoocXUC1BErsWspE2QzE8gdE758sDUiQo3GZHPoQcvebWeGWoXtkiVyVuMs1A",
  "key26": "4Umj5FXyMoF32pEfaaYeuQCaWoXG72EpikMwaogBuvhJDuhujwtVBwreEE95Dwb5eR8JF1kcb68KaiQLvw7kqMPM",
  "key27": "2TmmaNQaA9GTxKWdn1qaCFCJKTo99r44YQaHibxZ893KDaF9hjPmJAG4FwoxPFcixMj4iF121QBf9fLoQKsXrL3d",
  "key28": "63C5NMdeQw6YMKfVkZUaV6cQwbc8P6zw8jcXN3HM5t1jPHiAUxgGFHzYPXYnMznjNayZyxpU8UsSPRxWj6sTHGFD",
  "key29": "2ZPbMNhD7WB4yxcRYEARzbAgRzbV7kdUwi2VgkqS7smtECNBGsAsL6xFksNmto1PN8yaTGKcmwwTGQSBouuyM5LK",
  "key30": "5Ceue3ndjS2S8tVim1cjYFp2kinXZqotHTCAZEP1Yzb2YXLkNrqQCoU6hC7hnrtw5yX5MXREjp8JStnNgXG2sMbu",
  "key31": "23rcPyhikPqmMdWHYLgkemGMRSoPSausNdRD49gN4o4MbWab8xHCkZrEVZEwhsxHRKJqmUfnifXUuaJKcNMMWPej",
  "key32": "5w643VBp1u6dYDsPgqMZC1Z5ht82K6XDFzziVWww8PS4ySPZhkEcR7SgCzQCjJ8v1cyQMkaBGCZFqccJMrxJsHg8",
  "key33": "2svK6wGVAVzTMajixdDzPxCf4RW8gQsH3CmkjgAvodFU7DsdQCSiDhqKVTAMYmSLg3kbTfmq6nVaiqx6yLzcpU7u"
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
