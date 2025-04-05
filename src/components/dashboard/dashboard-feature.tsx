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
    "w83EzEoy74Y3DUv5vjPwJLKWAUz8K8eJNPNJsrT3sNC7RMncMjTbmcxLdzWWXdh7SZG9aFTmRn1Jcx1WW4DNnMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GMjb7bZ9B7euRo51HWXXswRJ4Csh7khm1R8bifsG2dUEpfJBmbNZC4SLNtq3UhKSmUKgsgdMUxV5pWkijUEPwoj",
  "key1": "3z5yrejQXALGY49iKLTEMrpVrAJ5MrsP75rwSt8h26WnzQ4wiMmytoEdJPfop57FKCAb7f9pjx5ZV15MRw1eQCpt",
  "key2": "2Tv93ohDFHjGxuHNBjvUVKP19yh9ccyEmZSkpxmA9RUX8YRBUpccrUnS9WtkLXvmUyeqxTkJwA9iuhMx4dnYSckZ",
  "key3": "2jSywUtaGF5pEqNQH1QpqDPgTu2ctZkhpZirSreuA2Twz34XQpJWM3jwYEeowiLpEeUZrewRpqUN8qiqQvjo4Z3d",
  "key4": "Z4YMbYfPbEHx6FPdM3ByVvfQuR1pqFWukT3hsbyfEvGs3Y8pseD5e6k1iUaPKWor6kZk8oKEKv7M5Ceeqw9xL8J",
  "key5": "4WvrCmKVNWdSeAcbmQ9eoWGJCRDxsmih5ZeWLZDbiZwqzXVC49mSrCkQJ3ERGLJgspupb8oo2g86xdfMqeK56CnA",
  "key6": "xDP4dWT6JjzJVb38dvDFpjTQMmdjxN6iqkfBJSB2JScnqtye4i5DDYG49QqExjYZcNnxNTNkAjYhiH2sSjnFE7q",
  "key7": "NpiYuae64A35BcdxmFuPwuqbqQLecJKF9Wf2fGzD1aKzHxdhGDUfBsu35FWQSE4t573mWJDPRmcKgs5GUFNa3dk",
  "key8": "2yaKpnsj5BcVLP3XyAG4FxTqTCy7xqW6cyV2BMwPQnzYS3auo4PLnnwUQdkUmRn7F3cwbmu7sJ9LefLamW725bTx",
  "key9": "4qZxKieTTyMPsY4DHBo6bdDRdrDrkho4ohZUtNva1YG3paATfsMxvc2ioN7WLNYLFuagwLm8MJaofPZD5czAfaDE",
  "key10": "4aKj92kihWWmv3zpAkG4V1acpkYFocCbHvddg9GSgBFKHgu6MJMVDvsoMK8uteFe4dsbktKjV1ynSeimFuq7MK3g",
  "key11": "4Pbs2iQPJcnqfwFrZSdWsugxiBcgQ5uZzYsLkG3R7PRY2H4GQqft2n8jji2igqGBsJppSGXpT5wU8AqZxXA9jKGv",
  "key12": "4CtA8Q2WfN6k5bFqr2bVtzfr1op8LGcErF3XbnBJmKYtBBejCLPqLdkMb4tKdr8g47Gw12vrM8eYkWtMEkB8WBTT",
  "key13": "3kdrNhLPZYYgp5nhG6pj5uv5hxedstk6JmgHHowJSaPu5mnxn5fpCCKn7VfgwEu7W4ttCVDh9emTMy7uh8XN7pZg",
  "key14": "3jvZk21teNYipiGHPCb4BYWU3PUt1LAFZgX3RFzw1ezqsHKVcDFonGiBr7njegVNS6MTTb7B491MDADJHkeSAPYD",
  "key15": "4Yz5uMoGt6w2gt9WxDMCrsbo1EXAVpwgd8sknC3jn9Wt4NFzdUy8HPeGDeLwXBeQqr2BXcFLBNYhb7KFwro6Ljde",
  "key16": "2MZSmQtnqVEqusyT5kYPTCSzwfj5WVcYGwEADAN9omSV1mSxScyrYTtDUGJke5Vfk7xBUtSo2QtUd9jVDzQEbEok",
  "key17": "4vLg9VRxrqNtSrqyjx712DPCN6HXJw1pHM1bwAM9no6ABEjk6hrKuVKTaRKZxYzcyJsbtNBkqUCSxviNt1UpMjwm",
  "key18": "3uEUZU4mMPndmhrRMw1tUfbkUE53jtB8zn6ChtpszzferGFRYYpwCu16jnPB2mYSuWo8Pg9rYmHAQckNLoF68xXU",
  "key19": "2BPLPc4rPYdkYadTfHjsX5A8Gy2i1gmrLfJGNsazkbzdkV9Hf9nCvD7ZWJ25GmGsShA1sW3nVSYAAYEAUGWYsBcd",
  "key20": "2awvRHWRFv57aEJRh7Mf4aKE3PQVXbLYxgJeae6mq334XPRCvVhENGFJPiMU8mLBU6MG8eRhgmRXHkN9r4EGB5oB",
  "key21": "2s5wrT8akvj6BMGznfUL57PMN8N6quwH19sgR8Tgjv7yzhSHrF2TDTfjVMEpXw3LRXtAcLECDXwRdXEvQ6agF2Vu",
  "key22": "3UohJD9mAeGViL5mFxVLGQDzEaF9aPymqwmFdb9vSmf5dJRtT3ecU6VBWXoXz4Bi1HVvgX7ViGmyL9TDp6wxwK2",
  "key23": "NxfGjTivT9mQgX8cgPchJpeyFE4DabChp65dUp8aLcREya5dzEBMqjGy45HSuMZmZ8HQHfiQBKz52mo4TMeWi5V",
  "key24": "5JsGtwTBRdaDoxG2NWubp7HMdV6NE8WYEj9wtiLrKmBeRp5tuudeqBdrEigo3WfvAEnu5z69s6mjzyCDJyzex4Ht",
  "key25": "5twT3JR5XKW3Sq2iEjd3T47uDcWnBy7ukkHxnPpwJPXdVVBW2rAR8ToWTomdhjRGKbQ87Sh84JjRCRNcvmbb8nLU",
  "key26": "5ArMkot7cNetDjRum2HMWxyJBMqjDzueBQaH6gxEJW1dqms8d4FzT4mok9n2YaCG9aam5uR1HqqSUiUAg3SE74fW",
  "key27": "o6Xe85NnJ8LojesWsTgpNfEvTpCBABT1RpVzPBLLdYHnqVrmM4xRwHNEoUhcFUVxyt3KE3fVLpCQ2awCbpF8ivw"
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
