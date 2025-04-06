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
    "647orDmRGn48knaNbHsPJnqMQyMQRiiwsSBXnbPjgrYgtogHiXGy3tEn1mmjEKn1ASwpS8vvrPj7QVEhueZGTaG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdj8fGdPKGcq75Jbq4zDwxzzBjhdu1fnhEzYK3EwevnWVVSgfN5xrCfuCG98sL1SsxXtfTobQKcbZBcJ9wfW84T",
  "key1": "4mpJKkjDbJSf5QHpoZwhszvQe7hg6QEZ3PkxEBAftd4hKLpWocb7YGDkUwduVcW8CvJaz4iDd64GWvnadAuxQYMX",
  "key2": "ThgGUaXXgA4a5BJvosaBcPJNSZk5gRbb7cN7j89kD49JuRM8kvqnvJvtfszyAZsHJqkzz2TPtiMijERAUgxL69R",
  "key3": "5vnHV8BvozmuVAZKR62REgtaNoA7CjxayeQ2tABptJJicNuJk1a39dvxbvuAefL8yjaQBMSoxBSyehxMbwradbfb",
  "key4": "pQVgAkxEPgCBv3amRLvRhGMEWhHGsULJt68dycN94f1trsTou2rVxbGJZA3asPJXBjYBngbQKSWyvQ4LwSKYk3L",
  "key5": "2JPdz5oyTLFG19ih2JkRAVX6Wze4fchU63aFUSMVZSHwuW3ZMhvBdR7886fbuGTCNEpuX8uj1xnAJERFKyncjjMv",
  "key6": "4s2oLj7x3BicZVSHZ5SjDsHUj18nrLfg7xS6ewiKAkwdYCnVBuJeqJfBoz329GSmowprnoYJpapcsqqfP3FXdswu",
  "key7": "5yvCw7A6MDqR3a8CCeQchbKcVRtVoSeQjetBAn6Ze8npfGdiRFXg3otRaD5wkpzYep9FYZkJQ1vhaN6xQyowG5sQ",
  "key8": "xWWdkm8UKz23Sidc4CbRiE81vGbzFaG5is49qgU5EcPbPUvmqEjiGt7jVKizqeUZTvJ8rpYTGpqVCJQgn2wxWxC",
  "key9": "4WciWFMVy8jazyXsE9XLKCharNLyrPwveQitRCBnHugXCvk7YqEMvQjtHN5939rqf8m7kParDErN2pLVLUB2RJZA",
  "key10": "2j7oW2ZWyCmhTkF5aQUP5oHcPiFfx8U4yuTEfZANdXdEW1puz6hzxVqU2R7zughCCWjTpWtziEuCoeQx3Jt2tvpr",
  "key11": "2KAQ2VfF1JSPjjJxmqGJAV3Qp7bWStupefAoWXxSiwm9XEZqyjkgPtd1Dga4SpThnhHUqX8by88YRkBuin6e6TA5",
  "key12": "4AosxsyQ4YUptdbzBBniu3swnRqysk8tRUbq9mMC3o4wh8a8K9aacYKtZ9zMVU9mMkk6XBf1p48CcSWLEGgsKEct",
  "key13": "3F5rNwra3JpVHsCqueVDb75BL6Xac42SqkrHMZ5M7st2jnzsmbCTGDfD4DQrrmGMfx45g8KxU4c9e5Z6vbxb5ZZt",
  "key14": "5xSJTCr8cgA5suo9ospgLtDjnjZvNGj8JDmrYX79Uh52wTtZKPp13tJwc7icFGGwsc7xhquGGWs6UP73pzi31hfn",
  "key15": "3fcgUbMQ5e8BNKWBC1tWbAocprWxxrK1E4EQH9RLvPx9qodGGwrJXf1BVDyhcWVTFfCJPsNefwkzxCfu9FjLmz4t",
  "key16": "2aEv6r6RPuTzwQSoE33nDo1gFa2stKmB6TeYyp5pmaYPokWbvKVsyCryRv493rencbLsRXPQms8TrqC4Cb9onQns",
  "key17": "56hjX2Pk6zpX7n2MG2wS1kt8DFVdgvRh3qmpWU925i2m7Ca3CGd7dM3Rir8zrfqnu3Nc8dKbQfGFkjhJP3jPuC3y",
  "key18": "2YibeqepP2h98ZceWYiBydYVGQh9M8QT4diQEGwMkeohKcThoFgkp9EfjBUab4W5od2YYs5ZTMXV17RR8v3ExbVc",
  "key19": "3nxQRoqjMwuzcw8pQ36U7ZrjmM1gEUGFE1skkB8LEkkmvjwMoRTXCsP1cvAd2PRWmkRksfxaHVBb3EToo73FLJtq",
  "key20": "2PRgsmuf4fbowzUQvkcUQN46nLF2RrSxqAjQmvfZwX9pFjvSvU8eTXG6e1THs3A7DqJ6tCzh3kHNZH7YzQvNKrcs",
  "key21": "59QhZRgTnBcfFFs7cpHfzT6Mp8ebTvQmNN7R6wk2XaVWo7pZYXCYXx959cDYuUbkcT6tLXY673cGGyQHr4e2xM64",
  "key22": "2EZUCmiE7wTVYxX3nduTYgy1FVcAkhhbX6bmAkhoDuUzu1TVoR6zc1f3BnTgWc6b2cregH4chSNEBUfRqDTuWCzU",
  "key23": "4kS3E1GiWhrAK2rAPSkpY86btTTBQnSbPFx2dzqoj63XjpNvKZBiuSh8rrf5ZmbnX9g7MprZrDhCFXks5BoX4VsE",
  "key24": "42zcFRSgJKDxNacgUL3Fgf8zD4ubMfA8oXe7NEEtpAxXZssz8DCSfRtrFkkJK8BRtqrk9bAE1LGSsbgAujeSDUKs",
  "key25": "67dhpaHvoiCUtBcs5NztmxBADQyWJknrEK72AYWK3eRf9ANFdern8tQtDrAPehy8r3SumAVbXX5qeXayGGVwQM5P",
  "key26": "4BLqrzTH4NPptj8HNpEbu5ywjrc1Tu48Nbw4i5vSDg9RtJcxLER7UASWEyVpPsZS3mV2jRjAiAeUnALWP6rjun9b"
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
