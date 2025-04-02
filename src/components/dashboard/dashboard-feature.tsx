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
    "63QG9AN5nFTEGyuo9ecpJHBD2kKW1ska1v2dj3anbfD9NjDQ8tRhwkQc91B2Q5ocJSTWxaYF8EzdyVSMiaMMBw7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrEMh3uQbvvRyLosgnkc9L96v6tTpA8cHwNY95d7KTSazEUzgCZbFxLT84gBQZXdUJ741iigHFszK1P2F17v3oz",
  "key1": "5eF25TqHDh4DYGK9aEnQtFAstT9R6FNbyVdi3rmFL3MP5fe2rjxGK5e4q4U2PfNnWWtDuJbxbnuoCf2U8TyASvrn",
  "key2": "5UL6ghF3j8fAUta5iHrVFJfNjS6jMK3SPGnZKkHbDhkcQ27zANpLzcjUQ7JgheT4WDQVmf7qprBeUwgx74W8iND8",
  "key3": "2zU35as9dH9CLyE8DAaugWoECfLvmRgUAA2Dy9G8bF2Z1KBLzoGyXwZsTUZb7597d9MyDvnteaAa8XR5zhcXfcrV",
  "key4": "5YvdPDnSPrfGZ1fFWLdsYGtptVxRNvD6RhKctPLJgQpccWgtr6cS7n4YWXikx2AchCZ3yUuVTxSvGVyNmzg5SBhw",
  "key5": "2oRxEo8SwaiVHxWBqs6smR2kAihTpqm5RXoY7cYkDyXYc8qwSU5Vufhp3zfwXZuSQ1H7bSF1vstBpP6tGoqZVq4z",
  "key6": "3T9X6xsaNMoyYTfukddwjVjaseqRF7J9hMWgLZgXavREyzFdoVdcsMMRr56sJFWzsNdBb16mvwPWwGQVoCaH1SAo",
  "key7": "2Uf9VPhmXTiy1SQYrGQaR9tPz4dDM3L9DN5FQ1qNZv1zfg6eNce29YeyMayi1nT3f44KaWPzyncAHcRLjR9Z5L92",
  "key8": "45G1TyHapw7MtiDH7rJ5UDTAy9P9vi16TZbkmpVhB4o45pFzWxji3KWDDkttwf9UhS385qLunXX4YsWbDk1EuLLf",
  "key9": "2QBQ4fJ5HCqTbn1EwGhkf5tx5ZXNYh1Rgde5EeX8gsVxzXkYVH5VznV8FkUVXF1Y8JERS8eDUtDqxtWs62R8Yfwp",
  "key10": "4nAqJkQ3TgjVv9UDz7DRYUswFViSfBH37oXWqdpLy2Xo68nrRRc8T6PLw9Z4m5tsZiexGBXHt9ZuAzqtNdmtgTsv",
  "key11": "HZ2Jr3gFuHV8S8c1JsZHK6HYPdX4uDdyXDV8jZhBxvJbMMFTLKK84ReMeHcY1zyEk7zCGebrCQgwBbo52LxfiF1",
  "key12": "3EivsGeHSqM7iGAwVfXDhKQi77ej9F2uKe5t1Bf8F5TLSbdWY8h9cGtS7gJc5KSc2LWojij4bJTGn3XkaQ5uSUFQ",
  "key13": "5Siyfhv1sBMSAPcXUhRaurAMLAttV8LykSWN6odSyRcS5pDR1N9KoGzPFY4A926veVTYQz7WTrtmmiCrKy3H9LsC",
  "key14": "4HXNxz3MhREQNYTNrHez1sxLU9uauKbjEpkampp1vv9S51TC71YxMXUKRnT14QdR7f735C5wqZmwCoWtURSE49yg",
  "key15": "2oqQwCQffTWSkc8r3s8nALt7NcWcfdJcsRa7WbZUeVDtHUZ9Fu1pbTzGhcu7si28iu3G1418ZCbSCAdt5p1Qzfu4",
  "key16": "3J74fS1sn4Kv7Q5gVuyryfZvZ1isQgi7QRr27U8KabVpJ8HoErnYu5Xt1gJe9MDnfc8qUpbUd26sdFqgBP85vWAN",
  "key17": "3C2FtyqGPKujnc5CNuCgU1rcHoyTFSkgtfVca8EwGog1S1ZTbKYhLgnLnQfouUq6dFBr3fmb4uCLNzYuBsNTrNBU",
  "key18": "4xcAHvimNJQzdVGQ6TjuM46ZKSw1GjrTqEWGokBCWMDJTB7x43qnMuVAA5mZtipSDJpowjiZQ6sxJWSjo3EduGzK",
  "key19": "3sq14MV8rReNJpXLBMsGnoS1nLo4DDtA48GKnbYPzkEBUhRukauFbyPVfvqQDsi4Buu2tCr8JX6BsoBEi7aKbGjg",
  "key20": "5sSLCZCVqSbMnweEtMuhteEehJTGkzCW63KbNFW1FrAYhRGCuxWiBHYv5365dXbD31sSwmW6DAhmpg7kmf8aC6mT",
  "key21": "2GQ484tjUv7T7xaoxitjfYGn1qUaBz7TkoV6SqaHaRFJ8r2kp9ofZsTZg2dYS25ER95sLZ4uRDxbpdgr4wSfZ78h",
  "key22": "va1hWM6ntQWQ2XDNCNpbrqgwPpZxPw1KuGD9nkUKswVokcMy5wYt7nkrGE2Z6PeqHiBU6P6wc2WptVf7yeTifz3",
  "key23": "2sHRuJSq74itg6G2pUyb4qQqiEs8yUhbgqBbJW7ERfaVzRuJiVTeRHshPSxNFcphEYxNavNgwEhnRiqcqdFKfurP",
  "key24": "43dxiF3ivijTixyWuoDRk7p2oBKo6MAEAwrZzW1jmtcwoDoSbK3zCGdWGZi1m7iZrw5kqnef2Y7NuXP6QqvwUqRw",
  "key25": "4xwpCu2TfhQoTN8u6gWTCwTfzJiaJ6ZvB85KxpVxTreB3KJe5XfXRpuheLWoY5EiL46uNZoFxT7GxkCzDir67asW"
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
