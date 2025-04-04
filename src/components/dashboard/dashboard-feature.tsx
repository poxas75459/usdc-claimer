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
    "WgdftTktQgjwJbsMwQgceFrbTQsVii6tM9qjcskYsnQ2Jb2rZ4kr3vKgnjkNoAkcXfZpmdYT8NVwpXVcZvpj12f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRViBb4RDJgxKy4Wf3knEaqr4mZQa5RDfVKq6cv689bqPrkBYokL3Sj7K1rzv6FNKqsVAXB3rEfg6ZSsjW2m1tJ",
  "key1": "2g1VbXyY48NZsC2qka6BZuLMsYsCSKszQSKoF3MCFbrCXFLHakRFQj6iAKxRkGEDnzbAr4iJrAWbYtdJxXVLx2Cb",
  "key2": "5TwFHcmFhzXqaY37V7uvMkrHQqUj9B9vXTU2r2wkXse3qvT9KR3RisUwzT6wUtqjbA9LBuYSd4Kvmu62t8kRmmkf",
  "key3": "3EkMVkdRNgXjjx2gTmY9NCXKhxsvZkVmrEDtNVvR5Wqsj3QFfXyqpa1YYp6GvB8BgeHzGcCZVVuhTZhUQ3zz83gm",
  "key4": "5rg3GvSet2EPqzg5xcAgsJPpj3TPmTAAgrcNRHCNagFBR7Aw6xQFX4Fgq8qi4b86BDX8BuKEypg4n5XpEatLZyvx",
  "key5": "3vsS78kWdsebCdGkKnMnkJLsrFWUaJe4BxK8RGxqoh8Bk9LHrKxGaP2JGsPCwQqnmkGPokekLepGtxHtcV1Y6R86",
  "key6": "2tLtDbawcLiGPGeGRrjZ51ciajwLgEcfQz6sZtQ9v56gbWy3GALSuMWc33V5MKSLZVfiBy6zW37zMAUqro1ycaFL",
  "key7": "n2XVM8FiQm3stKt4GTeDYPKuiBa2SFE7WacPzGVetpFfSrwKcuZLshaa1fKyfAucqDyP5PekoCMZD4dZrz6a4ta",
  "key8": "64XsTiYdraJpRXeeur4YER67G6c5AAiFQkzAUkyuasveYLxnjU2wsgWqTkhHNSqns33SfwroretVk6t6PqSCjXRt",
  "key9": "3vxN9frZ5TFoB7MeGnG4tLFs8ZxpzoHaCdQvJJWZ5HViHgjuSZbAmXigHxCkGjXgkEvfghoDR4AM9PyKyR76hfgs",
  "key10": "31yPHyb9CLM59ofAnq4VstmXLe9JmFWBgPTYYCSZjYNVftiQucHDjiBDgBWsVBdvifE7nuCVwrdedqdbqo7Fosp1",
  "key11": "qWc5YxNXD19HM4qANxQSu6HHnW5NJtiUy43GHTQqTXTeXBibCWUw8S6YLwjjAD8box5u3pUcanfqRPKGzPfECC2",
  "key12": "2GXgS6muJevwdZoF9TAFB7KUAWPs5o5QuNrWZnNynX7kWeUUE4hGr2wYDs1jM5TpSxFqJKEzkwADfHawFw7sfL76",
  "key13": "5ecgfAR6FZEdwbsSHxVK5Xqd72mSJSHfkDtunSQPzMLdzBJBQq1RGkStTmmpsvJRRXjDz9mB2abrZcpxKkw7LwUz",
  "key14": "5nKQXCvjuQbrmJKVTLhwXQL3raYh83HsiXoT8kXfbSE1XSod2rr5N9DyyFHM3Lu1vAgZUZNF9eUk2ZbJLfm5T9zz",
  "key15": "4Kt7Frypx6VJ8fj4bLbiTEDFhoMErnfrrynb6wvJJuFLmb97J1vyaYCLWATcnzK6AoZXTLo743jHEWk9Mxr9V3mi",
  "key16": "65Kjcoq51v6b3GDZyLpjREDwPVhLT2niviub8WBeztLgJwJ2acD6m5dTTStrbJ4stkQEKFLyDdApNxHH2v6gTe65",
  "key17": "38R6cMyc4Q8HyBDRVBhEyv6D6BqCdgZxvsZfMhaU9WDyQrw3d5AqV6agjVSP6aNaaZ7x3SY1sZyz4aWCkFmLypFe",
  "key18": "3Qe1q56uCabtLfAG2GHqh5M2oJDpWEQXU9xRbDAwpnfRSfUQPXhfkEv7X4mpDpoLgkJ9rSJXmmbnVwFKdoAeS5x4",
  "key19": "4vR1m397swGzq1MFBqjd6iJ8rzYWRNtzKHtxEaTWwMLohdPkaZGFPTXw5RmTpXFATCEaQ7yUuqhrq4akqjceAb44",
  "key20": "3UdHYGmuejruZwieGfbFubctM1cUdrDxV1RHvoswNBJreMsKFzjLSaCVgD87Prxcd3b9GdfeDPk3K9grkwPnf41B",
  "key21": "4HPjU3uVRDaNGWAD8VCmQFjud9DpHTQB7jkRQ7TwqHByFxfi9wQz7yJon5WaA2BLNTCFpksVXMrsZTXLFHc3jgha",
  "key22": "471dyHYU2hwNdJFhpNqxH63z4tvL2pDsVJCZKL2RT2XwjosbSbt8vH16fYCqYvJ3nWrfM9uYqKHiz5UqLu1gmNh",
  "key23": "LaJe5yPCHe1DV3xrpfrgGnL5aoub8hwJcMjapEWh6ocnAabGDaDxhdPV8HGkqtZP7tZdDZp4VGsDeqjMKUVMQT3",
  "key24": "2drs8R9aw7sxSnQK73Xzg3q7hmLEVCAPjybfawxjBJBLstaQPpkqt1JfdQdhKZ3ABsEjgLTc9ByPz6kieJtknG7u",
  "key25": "2ckiftHJuJBzD6cWtCjSzXVKNieyk6uRd3nMrQvWqPdKr275BTqspDP1hVmfToBvpq4ZKPcMPcfyi6c7CE7fq8zM",
  "key26": "4wK2D6dhsCGbfHj9jAVgScJeUe7HWzCLV9TmdmqEHH5bGGfETbiYS57HZhKrAHCHKrWXpT386hvxrVWfdRvFEDfN",
  "key27": "5VYuYerv9mwVHBqmkguR4nsmbHMQRfHuH1vHacJgi76hZ1S7zqEzo7QcUmxgepQ14PkiK4MbXsugoS5KW864YeC",
  "key28": "pJp6Jzg697uSbwHC2r1kUfhsx1YEV1MZ4tubjfhxye2gp3GL5WtgRVqNppYSD1xA6kJ23mxiPZhijJX79T5AX2z",
  "key29": "3P7zrC3ieNyY5HhpbjTooMXh5frNmuVB67aEriYtYfZfkdCVtSN2NX7VX8rD2QPUmGM837E1XgnLNW7N366hP4CZ",
  "key30": "2oLQwSVVXaGSFrRdq7M2E4yQZ7pzZjPYKBr3q3yfvCecyST17RakNvdYVwsoeAeWM8s9yTMPfhNHTgRZDnRvKxGP",
  "key31": "2e9i2uPfRpa6DUDvkegXrikSoH4aPfRvJMnuc6HUvKr5SAeg2bdVLeuH8syoWa451kmFwukkPeqAZkfWNf2RS3Hr",
  "key32": "2VYhG4h5yKsjWr9PvhvbPz5qRqnj8tvjha4W1HdrXsksT1d3E1y6SYwcDr4XRFhHHSoLvFXh5YLaBw6nu7bJwW5F",
  "key33": "3N8pQ8GPYkFzDA1rnnLyw7Ljaurqv4u3wfYMTfUNvnu7ASeceHZS9QbF5bQBVMmzQy28UgkHm8vknnx4pddKLM5z",
  "key34": "2omFN2mhRJwMZYB9CqNqah2gwYdM1mGs8LpQ7a7Qq4JceC1R7FhP1Qp3EUYnbzEEH6U1567h6JfBmDjUx4Std9rt",
  "key35": "3NayAAURxPoSreTEwRmsgUYVu7BWEFeTv15uznjKa35GaQvFeSURLB1K1kbLemJDp14Wd5p9hZCncV12HnirvWWz"
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
