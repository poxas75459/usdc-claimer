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
    "3z1UuW9UU6zdj8UgpbgWNP4RAUG4fog91HwfPRREoVrytz8cW8M2PkCYiVX4amGHvSvZB9GNbUwB1Tz63pRfSyDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FMqzZXWZSbZkiUicNmCzpmWzJAAoqQyiv5PSwg3nmPYj4mBWme7qndCRzGgKn8jvUQZLFWg5vPTSLsTzRRFqRjE",
  "key1": "3kBxp6xnkmEuQsc9P72STqXJKCKcw5PcZHCsJfTFA1yiXmdRDeDU1Fpjkmvf41i9VnRb1JiWS1eUqyvnS3Tx81nq",
  "key2": "56Jr4NGaz6LqyM156jXg3FaezPvj11VS7KqDZMaShmyF99CxxwqMA8iRsZJx3DfdfUrZiXsYr9rjY5UYq98JkxJU",
  "key3": "Y8cR2VjbGpNTSnaY5SykpHTxW4NH2L3i4S7V6YWGnTLBb1h6LDNE1AUWT9GPQxFFui1cz1nwqs9ziE5MM2ZuMiV",
  "key4": "3GQN7CUSTt8Anxp3AyToY9VeuNrAjzFd34CFSX2x8zDKk8yrPqaeX2q3bpXTQg53tqswB5ZVzgafk4PkAESUmDMV",
  "key5": "2gSk6JPmkrBXqyChGzXDLLDgGuL7CBbc9ghQEKm6QhMuqDJ8FZ787PLWiiq7KAGSwZtpgv1jzNDZtoX6sNoYHnmo",
  "key6": "5yTid7P6pwgCC1AcGCQEqs5Nqm1p8K7EQmfsQ5CWsRm65x12q6BfCmHahKfeB919ACY5pByGnfP9MZtDZVRFsPGL",
  "key7": "5c6xezfxfJ4u9CBbCVgoKJ3eWBzDCfStmQwYGFobew2F6LDkw1mk8hfEBZkJqriFSazDRJHqqzusg5JbjWM7dChN",
  "key8": "uPFqn4mn22sFpMvwvQ4pkoRgDAn2xa8rhjZzwkKEhuScoNADtPRhArpTDajRDftsBSx1rq6DNXXthZmt5azn4SN",
  "key9": "QkMy4fnCWWCkaBj2vN3mo5d3EvW2PJv99MWT49HtFcgX9jeTHS17QNDpEUWBDe4S5kga188ktyh3kYWj4L5H3Tx",
  "key10": "4dTpsuGMeodG2p3mCSnpoSszzhVpNj5C7tgqhxiHTfXp4q9vsj9iZbjzNnfxQ8jy1znbhaZKKZwrf7zqGHzy18yb",
  "key11": "65aJYRVc518jKDkZfRCCwLRF6WekbrQx2qAmQfDyvqSWzTc4SLsDd6vApS3AeuWg4zisXSZAEAouDqzxx2qu4xUH",
  "key12": "4ziZgoubq2juLjG51mGdWHRotBVe5d7v1N4ogBJU18UqDxtyKaSsV7eBgyCYtQTZD4xZfuFBQiSLqTKDrTWCPXHp",
  "key13": "5Z1xhRuVV2Y6uqZY3uEEqomXdZtfLAC8rgPHfX8At8nnkGSQ8LLpjekGuFUukaCxXj2mDSd58NWHDvH1RH7cotc7",
  "key14": "MQjgnz9YV3Aorh8xQeLeB2BL8XpWkQdMcky9PDSQGQTSt8Zoox66mqsPvE7CZmSUxBrZq7xdJMfchPdco6CGDMv",
  "key15": "4vWFeYP1JAwG4PqKWP19gHbQg1c6DVF1eZxt3Qd8u1z8UccJ8xtF9bdwKessS8XmGjh4HX7KgsWqthmdhsyj6FhW",
  "key16": "3VUkmQ7ihp28fdomoGoHwPDBKv9XkktYc4Pf2TZUxHRoLxZ4xtwRwENbDXSmjjVhF3FYpDkxCFvdwrJWDbizsLZ3",
  "key17": "2FWNkEjHhiRaBCH7fRnLDcABdGEbGWZHFfg1aMqKwang2kGV3B2CS2T7KtLk9dmqDNGQbQbSDna1WQ339X1ezF4z",
  "key18": "3WMsYhQad3cAwwzqxWRgvpgQkbrJvNcvfKpCrQEL5dHUoGxDeJWHx36FBF9rhktNYE1GUMdCx3mFg26x8iR5v6Gh",
  "key19": "65512yrxiRzQa2cUTppAZJ7yRLYxweAKqyucLEbhvWk88VWa2C3YQh4G2yzrwWX4imzE3Z5PzXPWmvQQhEW1ggTo",
  "key20": "3vDcHXoS5jntB5ceSFpeSvsrcV7C3UtGayP76Y8cmvWz3sncqmdy3bPcPNqcDK9FTebT4WSKcc99GBNCimJWE8Ji",
  "key21": "4KygeJfEzzxeAicedQhcLT4cafyW7rVa9MRr4iKkDrFwwZncEiXiEuqXdkE1L2PuEinBtogdoNMx1Q8W7FG5wvdJ",
  "key22": "3vKcizw3Lu46Ke287khvTziwjLZqV8JXd55AVB8VtaRsAxoLE8qvFQLoUerRfDDzwSsKQSkwKfFwfPyU2NUR5T9g",
  "key23": "2isp2ZUVrXQkJbVGcpGntbiTyBx49s7nLBByBWJG7cr3xNpe6VJkennD6ix1JUhDq2fgNzG61cFeGYZpRQtpPuMf",
  "key24": "2QkbTSEHKbeUxaPUdM2uKUYfykK5fnhSubBS35Jwie6wXY1oExo4ybWR5J4FQCVqtxKvy7YHkPqJkA15TqUYKvvd",
  "key25": "TEhz5eqQStidf9r2JoQanYVHLiTUi998faUq6RX2wdi3oz8VHJRydXg7y42AGQKW3XGFbiJAEcfdohJx3VhaqBn",
  "key26": "uVirSnHA865SSBoqxCX6SxmUaLk3e4nCK26DccVY3GTEZf5VLM9cmkihDDYACiELe87GLBwbgbceMDNRxz2xaQs",
  "key27": "4pke2wxWxfjTAjxiKxeUyKhUiPYGgC3PN9HaMhTbmKAV9Q9mJxMJkr5rZCLJosk7NrS1KppMhDRhke7MQDq8SgJJ",
  "key28": "3PtX9JrYGvHAiti8cUnthLaWhK6bqQcV34S27kvYXcgXkSy2kz9m4y6k8SRnmBUoLZco9p5ocTkHttznJzE8mig9"
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
