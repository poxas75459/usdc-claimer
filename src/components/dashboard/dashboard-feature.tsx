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
    "4VMmUNGX519yPtS2thahpuwyrUboyaufLB4xT1YkZiKHkK6AMMBzkXVVSRkezS6ZQUrzakCaAVmBNEuBhMKjB3CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8gdymiCKHRvrZ1gxAmFXyRYbPe7PpHS24AUK1uHt1MufEoBupaM2kmFRn8qee5A8pETnwGmDGjcDkQbuCdRnnk",
  "key1": "65JS6toniyNWeu1Li9u5RkXB2tYChHsGB2dyZAxWEEprwRzfqfqFwywV7xBSN4fGkhSSu2mdM46pTm2cQAFNLJJV",
  "key2": "4nhjAUFmbgYbUnFpxs9KBARtJwpAktXFVMJKLVXdMEUTmMnzUnQ3nX8AiLr8bSJQBFe8TUy9zzT9aug2yRZUnfaZ",
  "key3": "GckL8k7JDn1siWgLbX8TaoW4qMvyhpnGZzCeTbnapQ5PNhMyY8yVfXDigdY5RJnSbAV9qtR7zyjM7dRV2xQv2qK",
  "key4": "2Wc26bWtHMVHNR1ckCskfkTtfsHzcxBKfRt7r4GeigF4e6ALhMkqzWbThtvo2TWLftNvcwshAR7PiCsqjYKzcnLC",
  "key5": "USr3q3pVL9zxwYVMdWtcfo1dTJk1abtGP4JTT8YgAHt5Ems5617DSmg2aQmW6e3Xrm1ZZu361WS8HnSRLbmEREe",
  "key6": "2o3sQvo5Rsa5M2rxLRFoH99hVsdwiv1RLvbxqrML2kkNhvHWsDHMwyXJafoDz7JVQd2Ca1fWdVB5CgA1xNCsNrPR",
  "key7": "3iZMJYZaPfEuFTc3ytkT5qFG1GVqQptp6qfedYDRwhQ8aQaHhmkvJ3nt18bZUH7n4iimtsKGqRRj4FD4P85Rrn6Z",
  "key8": "3jbzUdDPVZWAuXNfhPXhtdCooWfgjiBaDqm5Uh71ChD3HL1f87HzebTAabroybwKGvTkMtBTo66cHTWbE8W7CSmQ",
  "key9": "3Pw6R5rPxACTAVvhx4f3EfVXqBUfqXFdaVCc5qeTDXaFtPSuu2dVWi2QV2TqkGHGExEAvwMkxypAMNDPpLfMsh75",
  "key10": "4kMMcZxruFoBvFwVawGmkUA3rQvGzKVGahvUrMdQmuhkV8L3iSCFTKjrKPPSBVNs9KukDSeKgchcNEcxhkN9G6sy",
  "key11": "5BQ1xW8ZdDhgKU2yg3akF6FpGSN5mF6vpJaLgWp6nP7qBUUzoQMasuNjPAxrY3cfBU9X6qPszv6R5ZhMnBKSVpdA",
  "key12": "3T6z65aZmSzcxFB7BP1jZugYV6V2ePvutsHzH23Gd8EstkRxtM3pFyYjtnFozh7LwtJe4Jo6YoHkues2aKbVoQGS",
  "key13": "32Wwkwo8CSqkWfF8vH9zkrC5HpQJ37dRPNUL5GpxPGgDHJLKBawDwmi7B8BdHW5dk5dTFnWA778wycsFvwrHiZBY",
  "key14": "GBycM92zCQ9gPk6Zu9ZBSnYV78CWUFzS2RZ8UNHtZEjg4SJbeVgHo9GL8G5abS2G2pe6m6d8SfmNqg1L9rhbmQy",
  "key15": "5XwpM191NYhrpNjy8hozuDJBHH2NGJJsvRKirWzY1E8p715yra3bZZARXLAMQL3bn6Jq3HMzT8xTiZZQq8weJpLF",
  "key16": "EYTGrjW9z6Vp3fJWMK5Ya1TCj78o48BGLB74bJyGy4mipYrmg9zQBaerwHR3V7Ubd3Sf9fdyTuv5hUTmzHqFzQy",
  "key17": "5ytwx3bJpXrvAoXZNsP58ojUr6TNLo3WA2A39shjwfTgSskt1g9mSNtKSfv96tGJLxxrFtzb2v4rXw2kBGgX28GR",
  "key18": "5uR1e1ipZFqFyJsQifZuLshBobewyt8qmZ2jdYiakXopFxEmR4tdt737n9dQ5gKMXfV44wjNsfm26YqKWhbZSX43",
  "key19": "2SX2qJiZTh6RjTFpVeXtSwr89HGusE8XV1ZfHahmUSt6WMPuCaKDgZaRYxEbiUQFjrxrTGdjQLTX4oX8qiMXrLPp",
  "key20": "3otMxYfghoXt52H8yZ94YFekiPpeXksLRjKgnQKyG5w3XKy7kUhPLscwEmHnSjvsk8icXYN7LZt9tjbxrmKMQ63Q",
  "key21": "RsgYijcN4SRVt34ttoxKEEnkA7Hfn4yj3PUg5wv5cDUqJPLhbaWzLiRb3dNKnHakoy2jh4VgH1NtUerMC6oYiQe",
  "key22": "4UZfVYWWezWSmA3dUNuniwzGTB2vDZFBUbuCbSbqGUDModVGgTrAPWVKTLxtFcvJYqUfWMwnWDCbyrq1MuGf3qTq",
  "key23": "4tJFVfnBRokC6W4NLM2eBCxokH4WpwyVJX6QDbHZLZWKgio2NpedMTUzFhLK7YnmgFDgtnvDepyfp8VpHctr3Deu",
  "key24": "3R3ip4DsogrJ4qrLsivTnPmsoLyT3bS42jEmSfscZtbH8LXaRQr6PAkXLwTYLzkfmMYR9hHzK77bvbPRuRdEyZhu",
  "key25": "3m4y3SSCuUGLDio4XJXEPmm4iNLR9bMa7sgbvjmQjroRco9nLtfTmyAmTsUihvijKaxo6u2oKeVKgJXvuh6RnjGh",
  "key26": "26Z7GDWDJ2Rov6auP3eNHvc6ogbqqxes1ouFHxg4WF4BvnhZPmYpjXi3fzE3dzb9S8YdWHtd34HA53rcJqN8vtVQ"
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
