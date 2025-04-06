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
    "4jpcF27KHdUEzDWNyPFWvoYypd33pqthoaN4jxp76WBz8Y3ecy518iwNmNyMpXqYKxupvs63jP669t3tahzHBzXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X48iXFTzns6x4rAqz8npsDjGSi6vgYNJ9WfLVvUCxh11Jd2zbAsHh6VdrKckv2QnqkWV9BJmaRxQ87NvKU56pqq",
  "key1": "3TF5ERZyLoJSq3maxsFLgj7qMnpCVvUteiELBkKFqd5bzqmJDd7yqajyajLwKw2AkL4FLFXCECwJCTwx3eUwCgY3",
  "key2": "2xHpxBs3KJBkr6HJaAvVwBZYRK53tHiSjnCEMhMomLq46kMm36zpvqLAkGcE7eMKcW3g3pfbuA3Eg7tRETEYmt1Q",
  "key3": "5YDahBPyViZbtiYPuao5HJCd6Dp198NbeTDLhrWnMn777cz6rqvpPDMEP5Q4FEcfb21SxcALiNcuyTvDoJ62acyF",
  "key4": "rP3z1txzfD5TF6Ew3Q8BrU9VsShLsa2F3Fd5vb9k9qHSceBzCwiqDvGb53sSEx62jJycs2G8EnSWgrER8mEE6u5",
  "key5": "5PrGGXL9jexnWc5sP7SqnGoWUjroCQYSSNcqDTeFYUA5wQo1eAdNYYyFkwzTBXAKv5ww7VuAZxB2JAALK4UdtkQf",
  "key6": "5477Kzm9ns6NxBbvyaJBbSHXsQixdQ8nBhDZrL66M7L26JuVw6V1qrir8az6cZ5PnGLoTKdCkY7qb2nLzEcUfdS7",
  "key7": "2gACcob9Fe4jqrogmktcD4s9ebGMwrnPoNQDcvpKB9rKfWJuTKsFcuguFKHQBbft3Jp6ZyYBgTNTfdzjKCwR7hff",
  "key8": "24XcgkrrjxUKj4gGUyaRxCZ2MZzsGna5NQNkYBSffYbpjNuTohzao86Sh3L6hECQArN4ePAvbr3L6BDh4RnqVnhQ",
  "key9": "32LP7cGGQDmko8HtnaPVvCn2mrgsk9RAMG2iyKEXmpHDwG8bwXe3jPFBZZi1zWoEcK8iT85Zu7uuMTHRHSDVkTtA",
  "key10": "5ErmjvEAA6unF9bLmD981n8DxxCyyamHwy7KN6quFtTQLn4uX5MMj81uwkxU969FQ6DZB1wg6Er4FU4hMbLq4rgj",
  "key11": "3cvqyLD8uATyBKAxDN2iKZarPddcVyqBZDZisWWVpHM9g4g4v3HbN67Rgmpme71iX6b61e3jRanEWet7JDNGbtW2",
  "key12": "4EELVykmwwZRBgRDdBhKQA5G64BAe2UT1X1YqnLMAWE1cDFv5ZbMtJX2cN58ykyBuQ9R7HU8BLR5LBxdEGQESzjs",
  "key13": "5NZW8Q3aHKAHMfz1LjGHFKgFtPRvFDo8fhBGrTkNLdENybx3JXQX6hGzyYfFyWHMxvGSbJJgsmf2YnZbm3udFeTT",
  "key14": "aNGwvEY4i9gjRe8UhCoYDodPiRu8EuigtrNJu4LhDF43bY9ybh8nazdQkTRBeYDfdwmH8JkobWThp8W71WYJucv",
  "key15": "iqdKFVosCb4NF6JEfDNEttei5Fy6yGxSwSepWzdmd44V6VPQmA94YULJ9CZc5p9emutoh7pMkF9xUZvfgXG7DED",
  "key16": "3VFHXuQq6c7fdq7Kr3zLKXfcpk2CvPsiwxPV9iSUuxWNuvE9xD15PEeSdtregNrRPdHk4JzwFEH1KVbWBpyHt7Ek",
  "key17": "5xmskFqr6agUuAxjQdk5D9sYAsGQuxanfcKUNZGmHnk47bNJR6HwJivSDaxWjykav5jpLtP3YvpoL3GNhDLHdXDn",
  "key18": "4iLNYWD12nNdUY2D8DGVKAGmdtyJKVBfaMafPiiDrdSPwh7YLLbbLofyWFfqV1sUzbRBnQHZa35qQmjNWT4uPLwk",
  "key19": "5xgYH1jD6qNbYjuCinZMs6J2qQwf19ir68TXR1uYu8Mrb1pkUaBZKMnTNQVWwWVMuuf3VXQFzTZ78r8uXQC4uRNN",
  "key20": "X9A6hxxNEd5abmg2bEX1QSpXB8mdgayNHeF5FfjfQNJ9aeEC8d6CboBZ22Baq5yVv4Q6sNGaG9ciAFqX52RTpCG",
  "key21": "5v5BkKMCwvr4M3eu3TSWyA9VBMCXzLdtm7hpLEDPmhUrxY7YwtQiVczg8BqdquF9QSUBbgzmAcfYrwjfHyZbXUfw",
  "key22": "2hY2zhqJPV7PEWWhejBuBKek1AS97aTEvkmgSF6hkgraAToNDUueBmTfANQFVZbN78YmfiyFWcNThhFnoimKiq3E",
  "key23": "4JVo2R6UV6gAXmcFcVZ4G9zfD7GjBQ3DpWKvj1SnmWnjD5EjK75xrYPs1Cw1kDZVCv4PRUjKUcqu27MRVtafwFEo",
  "key24": "4hP7FL1hcu2qqGcNR1z3WKThvNrFDV6MdUn8vi1t4GPw1221VHFT2p4eHjGFjd1sBxicWPMZHxTnibjnyEpNbWC4",
  "key25": "jwmUep3u7S29kgAKA6UR2gJTLowChsKbqXZRxMKnDed369ENMUnXcxgKKwDBd46a9r38MywsawPm3EPBrXAeo1a"
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
