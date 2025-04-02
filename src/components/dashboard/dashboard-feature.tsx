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
    "51giGRvzwyP9g7yrS6wNYz9hoQhMn5K7YAPnABVjuB26ZBz9v7xGQDHFv5pyZeQp8nd2mBD9Cmrj8AFs3gXY2pLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1B3e25zACUuexYzWrwLEvPvdnT1oCi8K9YtcwJpAvKt31p5SKPyWMRBaSotfMXmpgjCUasabGqEyi5xezM1SM6",
  "key1": "2DYpi9tFtKoo8hX9MhMrT83hehQCqbFYZrokcXszCD6TWzc2zeAbxQXWzvKydALFUVX4kAX8xJuuj7tHAoiJwEo6",
  "key2": "5EQ2jfrvD95FDG1xRgrpkQs1LUdmxcQ1pzhnPvcV1i8RiW7CPPqaaNBctWPdpXDvmQkhRoeqnzNTVvqKfEPPWcsc",
  "key3": "3yLNgo3A3GMrz5wDYukxmJ7yh8jN3rJPCc3uUoVaRuzYkmNWL46e9qQW8hVGH1itFRyd1BTVwF6vmD6yuBfgJz6j",
  "key4": "426HcC4seRm1mL1utRw86d5ZeWR9kykyBmW25qJ63aGBZaECiG4LhLkkcPH3CgT83LuzpAQToiShE3MspvPqph3v",
  "key5": "4KFRrPNSseT9B64dZumnpE8dCXP9xAS5g9dFWNhbhJVSP9E1wArrJ4UgxF2TMHeQwWuQTe1V6nMvPZsMEWGRRAH",
  "key6": "4UbxHsLPS3CbVJAXSK3N7NF86GQMwm9DRKYUX55Y3tbSqxr5Sn4TsUHCUY1ZfboN7sgL2X53iiLvJeZSGtay8M9X",
  "key7": "63sJ235qKKDiXR5knaaaUZvMvuYdGb9HKof717yQ1xMu6ZHbWJDyhfADPpSa5N6DaxpRRnWn2xj6FVPkiNEQK3pi",
  "key8": "5ySikC7aUPSiZ7CYczbCKULzaSw1R6HMrp3jcxeyweUBQPztcGwn8NpPEBSTKc2YAGi7Zg4SkEZZuJX6fnizu6xA",
  "key9": "2fXoqXqVwDtuYm8mJcNbyTqDrMP4Tvz8Vx454wqWFspwHE8w3LCTisE8SJz4P6kLPLJi3cRPkK5U5coREwRjJfiW",
  "key10": "4yQ6UVSqaskTNVTw2tsg6M38xzU23vBKfBuBK28EpaBbMhuwpF47v8SRFD2PwemdHeQwRMgbhpmoBxbBx1Zg4hhe",
  "key11": "2HJA5GjWQeXcJ4xkDhySeFw3pRznh7aikskF3TjQTwLvHhoi2FAJ4uVGmPaNAmxuzMXvtLMVpLwhoej2WzAHtSkg",
  "key12": "5e9pEYKUU6iEHaSnwexzwkditZ35dAzvzARGkKoqKsWZkXGR7VaAD19CqbJYYiSxcWn5QxjuZKg5rj3mnxxCwnc5",
  "key13": "EKX4tE8cLFMJUravMtE9kRiXCEcw56DYV2PYV9GoyrsmYhJwiJFg56bJivG1vwcDfzdutext3gqN5tXEaKairnY",
  "key14": "4TxhqBtHA9GuYcEySCFPigX8EQ1k8Jbrr9Z9GJaQfd1LhGefVBWt7YsCFWvxEvsTwnvWJ1xvxXcQFXjx6j67YqHY",
  "key15": "5o9SNUrLW2REDMJW5Rfcw822ZwjV4xwMLbs98kntGbWRMQDcHtjoM8AWmY1akdYFJvQsw5x1ovYi65j95GY74n3Z",
  "key16": "21hVfoo835LzSbQiwC8YXnffE61GQtBJwXG3sLFuS96jCpNnLPVuFHyZTucTLXq8oyziNPJdxSGatwGVgAWX6kyo",
  "key17": "3B2R1FZrF9n67SuKYLBrCbywqq7DjHWyNAeNrh5BhdsjWFZUQ7HJcuTteSaCNGD1aD6RcEnocSQh88mC9w5LYZBK",
  "key18": "4VEDFwrNaEHWFSkVQU8a5FauCWzmz8kf6pVftZxKm2cazVd3LGon2aYkN9Uvjf9vJg6c2rvGjg8XdXNz515q2Gvk",
  "key19": "RM9viApXKxYSRtQ76K7WqYqawXtUDQvUE2KTqYnX9A52VMPmCjqmdJx6iqoBAaYHPLdGpYTahARcxvwk3WnDxEY",
  "key20": "5c7CjK9GvSG9X8QHT3K5whiVREYutQUkTyLDmdnmMNocqgq9VV5ZDro9HXCkmu5EiE4H2FFx7rnMzZfEgidaMN5M",
  "key21": "5z7dGXjRuL6rJabkAbEnoRAgcgSJ87XAs8rhpACkctv1dLGfij83Kk4qgCzTFRRZUqoLiSbbViBSoh7tPzEure5B",
  "key22": "2ZKZWvCedt5x3AjYUTRXgn2B7vKQq2HHd8zoATgGttbfktvnnRY5qj3122ms6mnmiHCxF5YB3NJHyBuy5mV97XNK",
  "key23": "Vkeifw3WYNk6ZibkK7JGhcuxS4wMWZG2qTFAB7gd1P36bj5yQXZLvHNJrc4Kji9hur8Ezap6eoqN4Cgt7qq785z",
  "key24": "4B6DWh1Lxuv1yRiAHrHs995Q1xmPTwSVKgmZ7PqdCB7dozweR4nEehFyHMShZnLWs4PhmvAtQrTwQiM3PBj6t6Kj",
  "key25": "46PkVfKruJ3R2FFDcq9twJ4DaZiH3VgedHHrDmDpk3U8FAcYBLwzgK5H2QxNDieJkH8UBHYVMtq7P7KZUHhiCLmn"
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
