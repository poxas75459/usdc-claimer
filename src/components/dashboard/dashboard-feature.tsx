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
    "2mNytBCNxb3tnpF9H1Q5HKc5oR1dDJ6LPsPyftjUvqsbcpUQEEt96f9c11bQFr5MWShANvgGhyJmiK4VJkJ3Di4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k4rfShpT3gzKwLAGawThJQ1Ch67W4cdTip8M63taZp6yZFyn1uPyMu6hqMbGoU3CE94fRxRyLqKDyFAuJTGNniC",
  "key1": "4sxNSikJNQ45ERpbi97weyhkNriimhgFPcjd1kjPPwua7GJikRDcGXYbvbGUfjUCU8YJojhFn3xJcrkGdzsTWz3R",
  "key2": "4yZuLakMNcHJgc7uUWCrvHiq4C9ceceHySWcKpiKVSZcLrEwwhRYxTWqa1KaSUhWHmKpiHHFngtBH4ECer3A8yVs",
  "key3": "uwrixjactvsZPNtQmRP3c6rDT7oGwXLJSZDSC2UxwNZHxjzkDm7wA8ezNjJzocLQDHjrTNMdrrLBNZiDaLr7u4C",
  "key4": "3xJwwyBXVjted9NhJjBWCV4ZqbWS8NFYfYdem9cqTEigZjc2FqAQd5bHMjqkmj7HEyZAHiWMNvjhzYxNxyQN7Fb",
  "key5": "2oRcYctGKmSYG5umjPzCB1TrRAjJ4PVumYs3Dp1e5yfUL1i1JZRqQQY2PBDq3Geg3rbaTmFyxsyWPRckPMoGpnmT",
  "key6": "aV7AMivaRANsnGv7CXbKcBLxhmrcLjCHZG7cQs6gkC3aM7SLtxeNH1XNLJaWZguac2fHJHJda8peTdKVcM9VRaJ",
  "key7": "3grdrqTudbaGjWnQFe1jjqQmjKdd7ikFBGSTSpME7WoegDTsKfZDLWdzQ69uyeM4dm52KTFjFaTATe1bi9LoRcPP",
  "key8": "2KLFsJ16jto97MphW5DwuHeypYLopeixtLYkDhLwRPDdy2bHe31eK9hL9j3hWXXCWviFnpfipBNz3vpgfsmBN82R",
  "key9": "5YoVKFHHJkJK29Bt4xvGk4VecVbEEWc4rQptCrDn8Fb8JbgKD2BJqZSM2EC7ikz6hnW4SxvAXmVTj78A9sdgQeV1",
  "key10": "5KrPHowC7LeTo2BmfDWLig5LTZmvpyRv1o8sfBGXyrDp5Q11jgKobm51YT2nL5DNQUWpCXkd5kzS9ZbKqheoTXF5",
  "key11": "3m9hYkeXA2Z7WXVcdukGoy4jWmMeaX6rJg7jcD2RY4srGRgeTcVMrfX2gF88TAiM9W8zLj6yF9nZiowZkkQ1926u",
  "key12": "5Phn2csDCMucUBK7mNxqPtPswuVQy1D2WyijV9cUHc2ySxpYxYi7CRUbfTBKBXNEwJ2NmK31gsdZsuFjMbJ4mnny",
  "key13": "2c3MHX8gcB1N7YnaG4DrRJ5bcsHuoznLQLRnKxwtHSibJYcqMWXgmUDsdJh4LQyRdBEMJKW2iUSK5rpRkvSCeKmB",
  "key14": "8X7FMvXxuPGpFsnTbpqovYaV2xRNKKepgyWiWJRaZrh6HkdwMV1vWUEdE8Ye4LTkAtCCotsajaJq43UXzybx44Q",
  "key15": "49UePjFWVhUVS9MdHe4gjSVGZU1xotB9SKyDCs2MQXEnf7ecq6czhjLNNi7RN3aFzggnZGN2BGGoG8tdrXz7UVcx",
  "key16": "2Ao1vndccdfMeq14zNXVuqT28CPp7QyL1BcZM82rSt3wVrZVEfZJzKkdEb7P7QgLRFKvjap27gqeQJMxs2A6SdCu",
  "key17": "34CwSTYZLfknT2ivghA5zra8odhASXY3bTvU7xttPV4CC2afn2W3RxET1SjpbkA1yyKdqXwnjmbGL4FdmjgcHLHc",
  "key18": "219yVuDMKRWj2bt8BQ3M6rC8j54gwazt4dguEVASey21CR7yXnradgLANuGWjJqCMddSkPfhXmPBWgjnWUPGwFni",
  "key19": "4PqjNwXRwNMgaZD2fDAFNznY6LHMnqV4pKuspmTNt7wKkBrsaApYXBNuUMyzcFzc3DpNmhRNsKu3S2Z7PTaVJKZk",
  "key20": "22Zbd8jbt334Y2vu9WZuk13mLhxh74o4n1cRZynZaW9zLfwBZJpuYqpnxkrTdYappMdCBohAo5jU2ASKaftoqAvK",
  "key21": "5SSBanGs23g66u3JDfVw9NVzaAtd7RCrhNCkwuQouAMWr8t9w8qDegioGDV7vzETks1N7dyvKvJ4wwBC1q7tDVWx",
  "key22": "649jet48DYh9H4jMScmJNuBqh6XBwg8BtGXUm7QAoNYQcJJAZZ632qtTHfzE8LxJtCK8MmKzfjNvKQVFk6m9tbPP",
  "key23": "5xx8xxMJCdwQuUo54ggbtjNDLebLRw3QPfNycNEWzFsFSvTUtm86qvPoZrHUt1JN3hQi5QM4JGXygaLFzBy5ceLh",
  "key24": "2ryzBZxP71EWE67LUemPTsSWPekrKtPM6SFsJCWaED6B7f8n22zweKTvzKWK2jkofA3UfKV2LwKGXgqnwuVwrhPP",
  "key25": "3WEL6WXYonuiep1DsCwu3a3odCekNU3hceimZjKJh5L8wgw9TNoaPzYkCuGfuL83wCP6N8yfESEQKGwp2KGh4r3q"
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
