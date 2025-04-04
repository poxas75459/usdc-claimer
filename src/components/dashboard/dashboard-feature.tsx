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
    "5tHgGbrCTBRAyXmUgFmCBsX9zfLsTKjC8ikhKNssYhwyWhVqEXbTT6AqSnQBPq7eGRjYd6X2Vtx9UTbKxZZALneh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qiBBbg8Hf9BkG5v9QYyT5VYSxgKexf3D7Ad6M8yiKr92mtCRecdCQzzN1WningAhQt5j4MADYA7NAFetqZXd1c",
  "key1": "TJqMmvmaVQkMt6jB7gNRjrSz3u2yDszfeZFP2LJYtBG9Libkq1KXypbwLqBFuRP7QxisEsbMyNLTEKj6ScRg4pd",
  "key2": "5FcCuqo2BrSBPQTuXXBdw1tYKignJ2nHMTtcgz5jqEgrFG3rcWJ38oesfso3fg6nXVDJQ5q4AFZw68XigsrwukWV",
  "key3": "3DCQHgH7dbb1xrWSs4e9oFMLvJpWgnuw2o8Y92vrSjeAEVuLdfpsfkkrKkwFBCrH7gLitmFuPAJ9iPdvu5yzJ4yS",
  "key4": "4YW4v63ZNgaeAcGWp2nwKEKwt8wE6qEwwZNehQne7q3WHonA7LXodnJ2knQzKMP4X3bAoKxdtLKQKXwx14JzXh41",
  "key5": "2koMUJ4thFVL4V2XddUVrPeAmzmonyz4p6f3dUcYYGEaN9UCqTPQ1VAgHoinJvVYM946nDwWUc1LsmNYNH41n8GB",
  "key6": "58KH65QDUA7UfVM8ug8z5B88ikhi5bu3PpBFFdcgLj3UDRv2mH79HdAZJL6PqUnusLxJmqFAgDHG11oyCUD6JCy4",
  "key7": "S6Wpjh9eg7sHE3tdtU9hDgGHC2QZoTGpfUxe39cqi8iXHeuXWuRoFn5DuFXADF864AtFpSPKjEKQE66g7yYA2dq",
  "key8": "2VEAkQ3KzXmb53dRosDTqS8tSem78Jrmb8LWrGFgD91gCqZq4Nw4Evg2xdSyJWnsUzknWPeUk8pwTYUKGue9Y6kh",
  "key9": "4atGi196zHgaQSQA7ghN5RM9ffto5G8Lh4T4ytBPZXtPYpoCfZHk5XPis6sjJjuxysqtxRtQTMCpXm4wy6uN7RZm",
  "key10": "5auffVyeXFAaaaz8rURXejukKbfhbiaYfzgdL8ja1qCeyGycmQqWyCTJECpfdZbUc5Q36VsYvP7vp2QAZ7mLyBzw",
  "key11": "4mCj7mHThtNRBKALYRoxCzRczsJJg4p9UQzDpdH3Jka3gDvhzns3jdTDU2xCeefjZa2pAK1pZSc3x7PoLut8Vq3G",
  "key12": "43zRQYWfKFMpqXA9xYAGbyinwZrV9eo4SjbDHLMYsPu2VwZ44YxifpQDmhdFriqL77zsciwcYUf3z4XVHVXQ9GKe",
  "key13": "64AQXU6qmVxMCXhVKCmAbzj5G959p18G229RcAxGgwMf3dsi8NFRQTEJMK755wmzpezQgvs96HDdceuNnm5gdiEp",
  "key14": "2wA6u8bfzZndujeu8kwX2v1QZgVbKST1iEUXetU5DB168kzCePnrzNMErBdD5pWp5uFjeNq1aUhfpN6woDqrcJSP",
  "key15": "3i9YuJDJFXUSBheiEAWHVenB7p3MaoNw365NrtuGqPZtAoCdqNcFXQ46xJCEd7i1cWxP2pbRrtq2oLPTdQ7YBAtY",
  "key16": "54FunXgosQdzKyxNppgf2HZxSSR8fLHr7Q8CRhBG9KVJVcMn8QP7S7VoMWgXshv89gkVVmripzjb3v6R1f8b42Uy",
  "key17": "3gBWLJTdsqTHabywj3RYh2FawjQts5YahzVzdkfT6HwcV9W1mCnJqoamigBdMw2TqrNCWubJQMSKsqdqT3qNBWQL",
  "key18": "RAXznFAWTRG6pagQLitPET2cmMBVhuqvdvLpQyaMNHZ4UYasV7z5RSDsb1ofEFbNegTpKBfJEo3XLpKaRf9yi3H",
  "key19": "5Lewj7fizVx1dtDLbB8Jarc9ZCXSE7oe4zRzm4E8i4tFU6VrZhxFTqoAES2hnW1iugnhNqN5UJ29qxUpuFPUbrhW",
  "key20": "5ZaK9EdMQ6sZxwrxv7Q312oQAhGojxEybGreQbGvHgoeqvJB764HEs4wwSfHJ9Ga4oMEJbQjqKNfNMrYM54r5WEF",
  "key21": "5YC46MtcMMFQ97hh77gAAaHCYpWN1TFopnbAhDwd9p4smEvriLibxmFrBqCkrqQMbVJKXU1PQCfCvPefb5PFduNu",
  "key22": "ZWVJB2TYaEaHoT1VdHY1TWUz1oapLJ43U4Lqb6dmF9kKTmceTa8iGB8mXgL5zsdMd47FNBN7iLG6cJMty6U3KB6",
  "key23": "4uzdrk1GJJsWZjYKQJJJKrvC5ukohQ7r6PRBvaRrcZDyBCpBF2fQijiqBqtB4CaU4VtV88K7cgjrMyHDiL5YFJiK",
  "key24": "4ApA6wacE1CCF1jbBYjToxxobUCdn5NzXvZ6iNPQsF85WUF4uZrb1vDzhtT1hxJdGcn6nrdJXatmeuHgr3V7vxfo",
  "key25": "CAVxKzMQV7qcvxjHjGsi37cNX6PAZE3YUCwCVEG3EBRCUEb8zQ1k6cEVKf7hFwcWjGALvWtEJE5kaYCwAYc7d2j",
  "key26": "VhVAdz7J1wjusqYW8epSYyTm6gw7qsR7uzLh4uDcKcxccUS6kTYTEHxjaouDZZNnVhQxa9HjPZv3uDsX69Hf2vF",
  "key27": "3L8Hjof3sX3Dgot9KXWQFxdNk34toy6VRPDQukHtDU5xxZnnBhvFhLNNK7dCMeXPPsknPAdgiuPozQP4s4sudUZm"
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
