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
    "2bkLEMsykfwi3TtuEwaSDkmgCPbH79pX5YWefDG4BBdEEKiw3hcTjfRpeHMSZMq298JnFRZWTYvBda7TCSzA5WUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAsWRY4tSwSHNDWpyfxZAtEQssoyhFwrHBgEbZM8XM1vZFC6DKiuPBWUSHzE9baKUuRLcig7PYXkBbNbeBqKZhX",
  "key1": "2ENfgpSYXcsF8Dc89ohe8wVhGAyNRXq1a8UAnMQ4U3zwdWuYfEa5L24YPKZ94xaFP5xBTh6EKu1Ya9bijXvd6pA2",
  "key2": "3L9viTUJmNbEXeYEPWDUhMDQvvY2ZJPqgbp9VfktKKERwTe2gjjRpVB4T9xYVhvoacWp8S6dvojujKMjkPnB9vpu",
  "key3": "Q639GB3jstaxGH9YY6tErjE4mkD7xKVgWkQwtqyzp5h6xbXd9HpqG8dMar1fRypWRuBwBKvb5oUXrH98p4Wo8qs",
  "key4": "5swhMyxnsppvVhxEqu5Yzo9piKAqyXMsA4cusAV4kS45U83xTLvjsd9x9onrosMLMQmYDhBC6QqYfrnANEn8BL59",
  "key5": "2cb6BC2KK2hANhDeeyyn7dYNvpWG7BoFDas14fJXwX99o9YXwkW7anmt1q16tjip5d1sMJaiCGAfFTYcsHMheb4F",
  "key6": "3f5RtKnksvDAzXjn9bN4aL86hAcDFWV6SpqgY8M88padWeN9aaBkonT4Gx24n33eL9NWf6EgdJYGipLRmA7qUwXu",
  "key7": "2eoiBTPRAeNwdB7qNw75VaQQxwCdrdWC4zzkVNouWJj7ANfgN4iaFyFig8ZSy6pcydR6aHx498jFibdhgMNLGxGf",
  "key8": "31cvzEHuYEmS16CHK4W3bCk1CBbwhhNJ5ihZ3YANpaZ2qdxqTP5nEc3Tvmp1bDKLzwGnhgVasLKGF8M7Tohb9z4X",
  "key9": "2YreNyLkKAhuPve7SmRCs5tT5kHTAodBPzLk4i3BQLsaj55DUnmznFtdDw3GN4Xud1MtWZejgNMq6fHYhxZLLWXK",
  "key10": "4ajhovQioRmEfcNXaLPc3ikuj92MRFLhQEyowtvmujQRCBe8UD5Q4YxhxsRQJHXdqxnBV5uK4CShxFdkJ5p5QNyR",
  "key11": "3HozywBBfqrAd5opkPfnbL6E4XuGiM4Yj5LcegNLWnnxiftqmGawbLhsmizHXbEJMMqhK44nfMe9fKwR7ADaQCWU",
  "key12": "MsB96TGwBHqMAv2NLELVRGapyzPHBTR1ynG1TMwkB7PD41jWHGcLkPLkABZv5zAzBXeqNWcUseoQvZKHTHbvXN7",
  "key13": "X7cPievut8WeszFrngAYgQE3Wtbe5X24BAm1koMu6Z3ZKku13esKCrwhLnPokvLfZnENSJvj3ue99AK2gPYMYvE",
  "key14": "3dW2H6sbRqMonFxKVXPyHcgdaC4DKu9FvF81jQiF8Le8g19cxfpUwDjGNB5k7rE8HZ2ZGe93c885pm8tf1CC3hHb",
  "key15": "fU3N8CGXtbWm4qik7cRsg4paskeTjdYxfwwP2h9z194Cm1j3VwyCHgfoTVP4w7kf9SR9SKnoLAQ6DeyoarbxwD8",
  "key16": "2MHXpaf699Wdm7AbkgYyAaUCAJsQt4foNnWx9RrVb2KHEVqXFKM5Dd3BQL4AkondbXiBXmR8dhzaUBHh1CHMbUP7",
  "key17": "2yzLYgJH3SWVdrQbtXcf9VebTsUoS6dXVjh2PciRZBLSTyt8dCpdrTBBvzy4tNLXYffXjP5KraE95ok5kADCqYsg",
  "key18": "2gyPjS8Diu9BJfA2tLPfD2ngvPc8TmNxKRdVJCPgz6rJ15o7Smqv7uBeue2o4gsYQWuz1sr4xw245t1oxtifdnHZ",
  "key19": "SDfLAtDqbz9qB1tFSYFyyrsxBtEseigSNfBV16ZxJcd34RLnL3F9LkUUMXXV6edFiA6znktxMLFe4qT2QG8xHLk",
  "key20": "4USk8L5TiZNcYdVqjLJ2RJHdizyUGTSLfscgYFZLtGZJ36dsv5h6cUCzYL4Go8HtBbidYUaxDA6KexuQkQbJub3p",
  "key21": "5dvvSw9xCaM5LEy9ptG6w4nUv13PdAdmb4FW1QBCWsurmscnUxCKmFmVD4ZyRa7U1bcr9tNQsNbwRUsxMq8U8zJQ",
  "key22": "4y5aPUT9m2YFkPzqAyF7AsadtA3uRMCJ3XwyYc3pMrQhaVFt5orCUnxusv8VFRyJR5BJyGpFysuwCxSUrbMGs2gK",
  "key23": "5SPX7VS4DuNLeoo7gG2rMYvh7R5chXqNvoRLN5KNJbdypUfcKAE1FMML466k6KWHx4EYPYVqyG27cuNVaDa2GwuZ",
  "key24": "7Lipiwwow1EsDmBkyuQe77dnqmGAzZ3feYAyemGx96PKt7eJF6NKyUyZLs8Tau1Quv1vntnqCRR7zLKmQkPg6XE"
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
