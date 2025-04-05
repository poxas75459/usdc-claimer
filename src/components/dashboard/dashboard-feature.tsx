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
    "JSNW6wPyMKCQwa3gaJCCDBtVU4Qw6HudosonzhxxNanzaRKF388KJV9ZzZ6B5rQ9dA1exqXRbiSiLkkSSoc2U7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cFL9PWLMhT9QX8tUTxk6x4r7sAb7DoCgjNTBuG2k4MLZy1a5TddbhzdZUW1pEW8SzLSiynDKJmzRnvPG1mmpYC",
  "key1": "3Jo2NjkmtQpC6hqhf33SpMPEhqddpWoWJMwr1T8f7NfP5j8jdVcwMCYJByuEKJ34KdeX6yVNmNJvyMN5f9g6wbbt",
  "key2": "47B4Mmn2vwrQoEusMU41dmE7Skb8c5jPgKr5cg2g1EAQbQTYCti6EgfMi91Yu64qQFc8seUvk61R636ABNb8j3aC",
  "key3": "3781Hmkz9Cn8RMiw8veS8ZymbbwcrY41FnpqoiMH3Y9obEx3P1TKT5gUd2cGxX2pdD5TeMS38kxhoeWy7hjhzRjE",
  "key4": "5HG1mtMfwjP5Y9NPV8iwtjCp3kc6snq8VcyHY3UoybEct9DbPB3jw4hXq8KNUxdUK1JQRabzsM9U6fmtfK2EXK6o",
  "key5": "4W57TH7UeeBNhUCmjZsuVoMv5squ8J6J1REcVALJJWZmbmEqWKXMF4xE9PXcUi58Lrw9HMEeRoQtakCNG4QJYWrJ",
  "key6": "3puthQq6fLU3q98Ry6C1FVsF7hz5G4JtG9yWz1Xwqdi1KAQ1wTcnrwfBfavppJp2rvu3oNy2vCkmhUV5vZMmTBSM",
  "key7": "vf45yizDpYBLKriS2F6yuyf6gW5ApafvGM8K2Xi1vou8guzcFyZBSRxqGTHF7f1orvYf83rWo4MfZVe1KFnLPVA",
  "key8": "2tf9F1UmnZ6gofACCEWfX8NDahQpSEBAw784CvU8ya5Z4Xtz7TossG68mwhJNhz72ve5SaiHaULLytGTToiKoir",
  "key9": "2wbVcq7avH8zhgYFcuw7rqqHJM5qchAXzyfd2yWQG41ECZPAsb8M6yUPw2dtvm9cc6tBWz5oMYvdM3UxVRbrcnvz",
  "key10": "37MozDQtBzwDjqHQeURToyVh61Pqu2RoC8JpbCT65ZuJfbuvTz2rdjeWAop8pyojG8CdUw3YXcvtkHMBqiszHtzq",
  "key11": "64RR3fP1bv9swe7w3t53zVEe8q7yCKusXRS1BXFQWspLK7HHMQLLZ9ksY8XLtCvDCTNkykPJc6d9cr2prJ397My3",
  "key12": "3X4Ft7TGneadwTfDsFrFGNWYukWehTsSpj4QTag3NuZyMZ6JjNfugWYYzKQZNQv4nTjLLsKZSbfpvfroh67osoWW",
  "key13": "4p4gR3xsBLd2Je86KaSU58nPgNDxitkYiqMPzMxsE3wk4L3DidFKsJECPLbjxnJuDgL7kMRQbManBiMZfr6QpSB9",
  "key14": "3wK6EQ18WtiWMnFmJPjbwDXxy1SaRGi6AGKAHzTmgBhrvu8sxT1MsvEQREfV1nnnhUKHbbWudtcmDiK7G25a1cD",
  "key15": "1wt3YS9Z6F26Fa5dxu1VpjtQWdy61aBFLXcz42JoDw8UNv3zrbGcWax7FqDRxCjdP4B8PV45sVsdamRaJxdog59",
  "key16": "5atYvcWKPTWswn2cb2DyvYF61kcnNu8i9rPX3DgkvzYVuhLwqL8kUEenk1AF8KKuU1m8WBc3VVzEBjwKtDJTrFm5",
  "key17": "3nASnjxg4e1dcg8KHJXspqAyemjyNGA5eLdcLH3LTSttwY6FQzLo2gdfmRa6vMfXzAimLVcKBZNNJ1XfJpHuWDmb",
  "key18": "Hz4MrhjtBWFNTeNwjrbmfWHKY8e2uQHrNGz4BFdUc2BpvNncqkNwFmQjztvCzMzPdkirBanyJ87tLsXw57umZSs",
  "key19": "49tKsuuqBr6uZHYXM3f3H7gZyB4rWdvPPJUHgehi1LDq55ySoNqz5XgddPnatZsQFckQgJyU1BLoQx9ESFotxHFw",
  "key20": "56JGsRyxMsoYBu6c4Q6vgJah68wgjgmsKZK6PXaF3gJxKfvzNM9zdx9R6X92fuvb5hF44PHBn22LqPJ3ActNdPfe",
  "key21": "27ciRTBCi3msaz3nbZDksxtRwUe3fbcErNf7KxqyjxW2CUkcf7aRRg2vy71yVAmDdwmpUUGV35XaFVeeH1U1qH5k",
  "key22": "TgM8J6L3bgjVw52mpSphz55exF6hiTTqK1Tappipg8sJvHAco1odsJg9mQ2ftAF5uoj6KiD2avu6GYdiUYPtME7",
  "key23": "5G6sbCdSx8e3neFNeZSth1yyDedQZkEpo1XgNqGbVmp7zprpcNuNncbr1xWU4jFC43hGh9LivyYFWymDyzhcrYBL",
  "key24": "3WJramAyp8tWawdCZ7XLVTY2EA24npFM36ZddXwFgQbJXz7jrjWDRYRXQNSsSdCuEsdS8hnxNwk8UyELsfCpTTzA",
  "key25": "2bPDCnKxCup3PZ6S6DS5UU6Nt86EUeGS7sKv4fCVXaDW5sTB2qKRB2FAJf5mxdbuSThFbr6nEirmFB7S769boVHa"
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
