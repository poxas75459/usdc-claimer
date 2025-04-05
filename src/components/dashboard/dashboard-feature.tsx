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
    "43QVxEWwx8ThTVd5MYnPm1gMZQHK7AX6WnyqznKfH1nWaAzBrkTpioESWKQpigLQA38fpYx9i8khk4QFg9kzFW4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVWhg5x73fnYjBJjXn1M7VZgCLK5FdkVJka79DfrkvW7YJVAqY6AJivX3BfkjahvVdughZgfd3xVUNJkes1d62g",
  "key1": "5GyHcLLr4bmQKh8Uc7cJGFMhurfN8hEXB5rj4adUth4kpo3KM3VmDKoAdZ8aVHku819GgJtvFWpBx29HH4ApHaiH",
  "key2": "3eAz8YLt13sZmwM2SyerbipDGFU35kKb8LXgnDx6avH62DgN5DVEPBLM7xhh5T9VtwVKrDQDTCieZmob1zoBwWHR",
  "key3": "QMzZzLuazFfkr4e5BY7EHpkDdftvWwZHEhLvVrECN1rXKgUUWXA6C7AcrKBUC1kWjsTBEYvd8zKMiYF43qipaRf",
  "key4": "2eVYpuk9KVms2SV8Jui2ppHKwMuj7LR5DKR5WbHwo8CQCZ8fhmzzHrXVj2DvAaWhWNpNcX7ZZhwFnbLbYwC8Nko4",
  "key5": "5XZB7nikPrrYi46HUpXc3acz3eeXW8peAdoXfCUAnEgF3qxtfbvKfHRbDC3L2CYHiFjDpWTYXU48tEorau3dVLms",
  "key6": "3txaAXsFe5UVtfHuq2JwxXuycQHCz8rzmJsty9aSJ1eiqGo4s3TMZDGux4DrXmvqWNXhJfw2g686LvgSrbGgE5Dz",
  "key7": "484WboUCmLbM1t2vGrDJuzAprS7Pvaoo1GRZMAkFMDHYsN54T7RafUTH7s1NfVXxafoJyqe5mZApJSPyUYdKtFAQ",
  "key8": "3bhSFyy53AXuVKvXx4vPSZHXefcRP9HCPRNYgquqwqWJJ7uwSKAB8jewpMErnUhmEP4CAzaL4KxnPogMXdpaqRfr",
  "key9": "3T44sQPQ69ApzccaPZf8Fz3vbHiMqLJuixERYoe22DMHmnkruvFBxPweFMupS5mUdDnwZdpNBo75H5jBrKwoRK71",
  "key10": "4C9gJydnDVc6Ka89WTJLpTqYJ2QLyU51hj3o4AHk2UGXLj6A3uyzPAjyns1kfoYM6F5GfaeLm5pxBmp3RvcGFFb9",
  "key11": "3Ew2zr5byTGf7AmW51xACgA4uQGXwuVBPQWQRncs2KP9b2RE232p37eyqtVXEcUPhfNbtbFwptDpzFWd83ybBWwy",
  "key12": "2R4RCXaaNQrwWLh73CXj54v98rEYbBsUMoMMmi4uXHPbb337YtCiDmcgGyLfaYQMvbQYEBdQsRMnp6QbomsJaiZm",
  "key13": "3H7UW1UUVLMYr74rkXJfKKbxA43hvf5J4WwAJVs7dQPaRf8DbyD1wZYG8dXMeWVCPg1H3KJNVpPt8FGrF38DhM5H",
  "key14": "3hFdqqUoQmugPoYuCvAJjpTsYfyVvwoakwkTY7sT182KXzHLstQAZcf9Y7MXquuaxqqn85bLxs2vCXV3DZprKFHK",
  "key15": "56ToAfQXV9kch7r5SA5BFK9C1FvZFMwsM2jcPB9jdbiLFzaYbJj9pbUbGKqHQrhn4tF4MSfF2Nba5SvKMVnebXkY",
  "key16": "3MeyJHeCYRDaA2XLdZ6QAEhBHV4BQ1KYXBssZ3jqGjLEK87iUY2oQdk1tFkhNHQMQCRZgEEazQ8udefjsGWAx1nJ",
  "key17": "3BxWeq9ipctMXNypT4hVfQ4BGtrX1U4YezE7MeDPzUYzSfVHSaBMaKCnyJQo1RBF6uVC2MQVZYFBKkySrTCdY9hX",
  "key18": "KKGAv383x2aY8hGmdMr9HECBcEmzhD1THa1VhexJCeixDRi7WeWKkd7ubbZiKYMDWx7Vj2dmBKMbTh4Ljkifard",
  "key19": "2wUVNk8PpmkeAgYDzuJpQCskCknHu75GgWXYrXHg2HaYtfRmjsU47ajJpAPUZFWEj7N26Zc2VZnEcEX2ksrSwP59",
  "key20": "31sp1R6cj4sWfE7jravueHLZicQfSMqgwmA3b6qo7LbesQY5SdDCkKx5yLZR7wrdjEAveDbwh7EoxutqXzEKmFnT",
  "key21": "3JfkZNLJJXDdNXa53rh87dWWao3HdNwZnfgwzFhGJaMYfsEw897Uh1Q9nyaPSQ7L93pEHHuU6HrLz4VQmF6MDXiq",
  "key22": "5sa5pBWGJM371x5bmHvVQQiEnEuGoYLP4tAmoX9nXYfUiZPks4y2o4BXPqWbdMsgqLeg9LGL63njSPTVPB2M6WL9",
  "key23": "5oux8WzjZhdGyqjUySWL7kRrE7dtVo6FAEruLTauLn82bi2tacj1wa45ahuffkreDx4M2r1bZkmo2172gLaNTj7c",
  "key24": "3VyC38bgauKUeWYftbSn3LwNuXoQzCcvJPAMsUbEU1FJCpFNpHYFNpyoyeNnp1UTgPDGQEsBWSE5ejNVG2tQyJFh",
  "key25": "PUCntnxH5Y4QRKnYuwF6FNfx3KxMkwpNr3wTXVs4EfoUFJFVKFtBmRLZGCMUJ7Nc6jeWm6VhmZ8YzbdhZVDRZTA",
  "key26": "5bKj5UFpWzuEyJ8hiBTtwVpCmbxBvuQBNrBeyoh7fDad8tFBsexTLjKNYAS1poFAhbyukHgDRjKBzRe3v714K44w",
  "key27": "5nRJVRHHGXwZuZx4ecZvjMQfWxF18hXPZQYgSNcwQecgndnH9HSG6GNhustHQa7hrTukcBGKfTavW6VCGLws9mHX",
  "key28": "aaqFuqruJMHkUFVRxFxD3jKUrKkXrDoxDR9MMcQy2Nd9S32KNCVAG4kDmT2daBDhdtrnUTzEwtbZNXRsdRadJTD",
  "key29": "2m7RTrdKp7pgmjxoj2frLd79z2yLT6VG23D4Xkax8k2j1AE4GEft9MiRwXGmUexGkDb4xLHK265yxER1k5uBPFyb",
  "key30": "3jPeBc1qcdfL2uLXb8ukvf5RnUTHw6gVeP4amXK64RysQY6vmG5a4cyjnvEyrFVqJJXWtNCBX6McaBxmU1Z19aLh",
  "key31": "5ndv9Gvg3ct9WANogWFa7uz9K5xDMoNDx6jTt6aFMes1SoTP2DuPzXMxPAcbvdFGFb2mp2FUU5ojcSdyGHVTeqD8",
  "key32": "3vFzn38J4CVNaPyUCfLZSxCcyDkoKbSGqTzYf7c6ampoWkbXW99PdPTrok5h53uZXkvTCwi7DXtVeUEdHqDtzaAw",
  "key33": "43ELgkzEBUoWRTjpzMMHGuSY6VWWWqWFqsJsW3G9SGZPWVsTS5gfzgqgK9awMX3gP5qNraw8mbUuCokugwmgTjLG",
  "key34": "5TTMnBVB9SGk9p8q7wee8h72fnrsvbzYQ2qMN85LfnZdsCoGEGCrz6uEanHrSCRroshXfvFPADW2WH7wx1Kj8uQc",
  "key35": "38iGZwfxMJpbDFen3hAPCtC5Yc9qRxUhcsSXpqFRPm2VknXtukkgjkjmQvqfycqPvpw7simwkrqkVMgq4UtcWjqT",
  "key36": "4RFT3wknPMs7TGyQWTh9jeKPEMBba2K1feGMc5veNEsUzyJSHHscJT5uiSTS5SnSrrGuCBTKjjyYN1wBGxjTgoJJ",
  "key37": "5ujrMorW6YTmCJxjS4U6GJ5owRxU6TBgv1hiUKkLFavrkHeRYj8H9WQxdqTnPn4w5FvaRxxYu6tfFMzdTmFqA6br",
  "key38": "4juugvih8XULjPpLyqFTCLiPR3nYBg1Lt9HYnVYmw9Y3GmejZiFvnPk3nQE5Pjy7MNJm8ahkex6FtqXU1VcXHojX",
  "key39": "44we53WJKxN1G1LbP9c1VNyyJ3UV5GJKamWBaPD58pB3HpLCFwcy9Nb5duZWYp5DvbiKuJR8sje4dw2eE2UaHu8S",
  "key40": "32m7RKNtvQV63CKFkqeExCAJ1s24BSEyjEF1asubmoL6iXznRGfVne155FweDJZPwScg42uf4LaLGyARiQhcSYtu",
  "key41": "2jbUkAiuZe1Bq5gqx2pNstXbswBRHy159R3R5kn4T8jWYtzp8MN1p7XB9rYHnzRc6LQLL9w1TN3XDdZAXrpCNtiB",
  "key42": "2RMztQJ9vJFmaKvTkuzKDn1xaY9f1t6bahDTK1DY8LVAx1qJLe4BPjexzUBeKgSxbM9wLU219xpMoTTNSdb5SFKq"
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
