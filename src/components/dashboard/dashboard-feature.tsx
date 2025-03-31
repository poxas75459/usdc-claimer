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
    "QTcmFsV96PhcEFVeoS5tto2423BAJbRQSJdvXsW2pKccjEdC9GFmSvKnHzK3DZDs6xDkAppET8nnUP5H7Do6CB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhXZvWuzvWHopzCRGqAnGyyEEM8cor2wq5tTeT3T3QYx9NjxRQSHdr9iSaNSewoDZpLi3HpLNSMsZZPn1x27shS",
  "key1": "2FAmf6V7UXnpLjejsjMSaREZum1uwpkWosjeAFg2GNfB4QJYxvAsogjTfZjijAJ5oL4xBqoUYXkFVjCG8VFG5FcD",
  "key2": "3hKu4BFmjzDoV9mdLPQi6KmTtAqP6zLNHtr9S86axrdTCpjSPg4cmALd6RCbgEPGMF5xqZKSGS1tyCEKMYT9zWET",
  "key3": "64FknviNEtBrjR5FMwSBqWK7WZEToTVw1RTNhrU1v17iLwn7U1XKcXeJ64on1MatMn4wb23doRjQcvuBVVR4GXXC",
  "key4": "3Wq7vNB77Dy4e5rpByo1ykZjmLpGWnkUJDjG9tKQ9gSUxMYcKDsKxkdCmw7Q5DFkY1JwnYmspitfieDA4cVsezoQ",
  "key5": "2WWURa8YvVSJwcANWZNMYyWEERQFL6gJkmzXAG2HSd2abr4FQZ4wSt1axHiK9iUgL8c4GzhMtTcQ53DPEjm1Qmnw",
  "key6": "2o8RTdyd9YtnEdSyctx4qN7vMf9DGtG4HA13FpVxN6eaPEX3fYCo17XNihmtbRnw4xwH64vHLBpKN9eX5oj8RxzV",
  "key7": "5DsUEfpeDp31XyAZRXfeJ4sfWD244z9wDQPzaTNmQ69JQZfBcqUBNJMBL12hrpg1jUzNJwgqrxkzMd3xpc7CcgNT",
  "key8": "4oJ31F3bmuAM2VKAYeuw5gbhbzftcDnEvydYDXQEzDwnKuucJGDNepb1V3X2K6amk6yCGVyvWaFx7VJxYGmkiWVR",
  "key9": "3PmyaLePARKzoseXXahLrUFxbzXz7f1E5A4gneGz6sbuUVNkt4PmUTooJSk8jizgMtESmbsGArQLKrigk94dgZQn",
  "key10": "2AW7Qg1WPQL5DHHBvxskakDZXt5WQSEhJ5JPn93pkomD4xkM7KkjH8wUAbSVDG9gbxzuEJE1uK9D6EMZN21RM7ae",
  "key11": "2iJ4TXGxzL33je8CvMPMzCF9sAkGUksuZooqq5FYBqiVa6t5xqLX8o3Bjgyh9YVBbTKB3LMZQCoMVweutBHB6ZtR",
  "key12": "2tRy4fNVhMPuZGc5kDb2a2YnS6C5mUNNwutv9rgA9htJNP6DaMxkAf7vfSM4L1riFmSVfvErvo5yNkM9miCAzsTE",
  "key13": "4jk53FZim7rjZfDsynhbXn35mvcW417PkVor6jATvMu89wKXwMjK6CEUZRCwT4bPqBy3TRX7BxnwWzdfUf3TZ7fd",
  "key14": "gs5ttSy46BfYe8fNvLTAsqay7mMEHgJJ4YSrttuDZypcqomVypfpTFFDeCvjv8KioQsAqj49K9hohTPaF1YPou7",
  "key15": "33oeoUhrsg38wyBQkES1AiqxPrDpgjKYqFxHmsuQTTT4xWhS59P85TuD5fwHSCS31cC47JnJ4VcSbxEi81nt8vn1",
  "key16": "Ta9eHcZwkbBveutA7N4xUoT64Ymq4N1Eah8ggAfmjZPQxK6j7KFHUPsuMXoA1W1dCDwi4mQy6ExhJ9LLFGQ9XUW",
  "key17": "5bx74k5K71F12iW3SM7pz27HwLY6TxwxwrakShxVgXm9cQP6S1TyW3iQszHsTdkRUvpaQ9X4uib1DHr3SDeLbFvj",
  "key18": "31kmM9eXQp4FxEnqy2ndbrcPjnjBWXACSCTjXDsHB1WV6m9saHx6bMizasbW9qDVJXnf7ULUjjpHAydrBw6h61Hd",
  "key19": "Sdpvcj6NbrWVx65uGcD8aTiWiKeHUHPs2yXpX2j2NrargkJYWCgqn5PSMWWkCpftspw3mp2fiVxx2vdjPE4htAt",
  "key20": "13dkXwt41gF9X8UnTV7p74Z3cMysVs18ecvgTfMyXRede3zuENkEDH6vQtSqvEfQUrVaPe7xFm3wHr2FBPDBgSk",
  "key21": "4EXEXQGtYjRnswaGp3NPnS4mnazVoC6H1AZ6QEZzPRezgvyAHyfcsZDmiBdrhLfwDSinEec3e9LQFpyHRvaLL1xd",
  "key22": "3yRQCB1irXJdnCwKjd3wsx5BYdEhAov7FQCFWu8Q9EoVrkHdTgKc4GtBBNuCqAsHRYnBxocxn6dWW1oejg7bc9wo",
  "key23": "51dQFnw8asWDbrGt42WjkwDavAWdLDtr5PEanSsiKPpDX9Q9HdzZdv1XsdNGVen7V3MmdTFy1TkuHHjQKdLCu13D",
  "key24": "4CvTqUAU3oMCFvLcna5Rz9VyGoZ6c48J1iK9QmWsCE36yLaJAMMyFCXeD7Jh8mb2mVG1n2hkX7igPrQe9PzVfUnF",
  "key25": "5KE8Ki8qYWG3ZKfjNbn6s9WApJY3BDdGFhuaLtTcuUWxV4WyocrPozifgbuPbPg9UWaDKKzCvSouxJmxb1Ji5mku",
  "key26": "4gmrmQ3oJZguUG8e6qqSnf5itWaKddm1N5EfbQhqhpZHLTqHYJouyodUc11VnNRV3kUJzUafVrp1MguLUza1DQYv"
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
