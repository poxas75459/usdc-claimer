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
    "2wQMSLPX6B9JDCVgpK79DyM3w6mwpfD8fFzkFy3vpf55RNgWaqLZvEUqqJBgy9YKfUwJa9Txw3XPqL457g9MFAje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RssanoMo8XK7syNBXi7fVzbMQK8GQPKdYfybTsxgKxNM7DqprLWz6BRTpk3W9KJPT97V7j4cHcTm7ykdXabnCS5",
  "key1": "5LT9VTeMRBdeZQLVPW9PLBCbxqytSWfVRC3wPxfAKWogv3aXvHgERUTJWRDGqfjr8rd1onXJ9961gzEFkezpXaHp",
  "key2": "oKQbsfU8ojUye9cTP82ba5Y2rvvaVNScfYwarbAN3EFCnM7d4cWWjX28qxZ1mWKdyEfxGED331kEF8saggP3bEa",
  "key3": "3FRv5y5b4JKkDKHkn6zA3vbwEtE7BLywKrMhAbmV3NTYNhZ3Z9hCHvmZHRHh5xjLuQ3Ff8Gudz6RN1TR4x3o7GRt",
  "key4": "2tWYmo9WQY9hEC8vAC2s9c61phB3FK6mt4wHWiTyfvw85szQttNpd92ziRpB2nLPmoQJbP665y6GBLvqsNjtdaQN",
  "key5": "AtbKwbfhvcSjde1ThqJHNgi9qbumfmcTTAxmAFcwvfaM9AvGKG16v6d2qbsihYftjryNKZLoavB7gRPJn3wKs5n",
  "key6": "2Ea5UCZMNdUAr2ZMFCcgfrRmdEbWjfenKQJXUxEXv1NNUDRwXE4fvfhxHg3dbfxaD2mVim2WSUdKRhYYwc7sTp2S",
  "key7": "3o6mhrB1ZQpKCzeBNGeZh7xf64vfFtkVkhHhzkqdMBM3zshb3Rw3FT96a3e3okmL8yw5dekimkumL2bSVZqd1uNx",
  "key8": "544Pa6cdzeDQN4fAQ48vG1q4yEyt4e7kaVW45G2hWtNDrxVXoCs1ArFMwj7fA9cbHD2UWh7Lg8z5z7kDs1kvtHkk",
  "key9": "4ydXjba4qNwNm6ni38Z9FYVMdGoyah6mBoSvdgyW3qDhbaFpxkHXFQRnxFPvJoEi6NpK7rioWvPAC559ZeHmjPEh",
  "key10": "3fULZMKBJbgpMUNWBAvFRhQxDbFRj1oEgKYA9BQN5yKxNGJCJjv9B6nwcwEefcgNadL2TJ1WsVXU4jHMgiDr1QSy",
  "key11": "5HabkpW6QYkHMthrpiDYtkga2ew2NF1fnw1vNntMWYNjU4i9wGwhwSjcHKS5neb2r15CsdnrKa1UiSx2ijrZur6d",
  "key12": "5D7k3uoD64pqtqkwCeGxZkLbKaY1Sd1F7kXv8ks9JgRavmnE3Jf4x8pTyPxBAvbfrkgrf3SKKNMcf7D9vQmJ1DPc",
  "key13": "3zo3WT8Havzp7YVQ3ZzxDg83s4oT8S6SViTtAbW62DYCSXXivGVrTzUuLUWakd594bFPnQAECuuA46ZZ1yoXT3Ne",
  "key14": "4JdbpX5n8j5FLvX8rNSkkWWTbLQBm57eJN2jD72YKBuxyNFViXP9P3R7YNtGH5QA2bX3ccGLbJt59zQELmvDzYAY",
  "key15": "3pKwqxt2aCo7xAMYmmELTGRbkJoYNXcchVwS5UBYTCKfSstRGx2vsXBwmgU5BvM2UN6QCbVruJx3f9U5YFpvbnc9",
  "key16": "tsYPXJAyRjw3kQQg2Trung56bN2sjSGkksXW765FoASTwE3yxiNiiiwoUxdkWR9Y5fS3nDWcnhmPZuFC4wLr5Ci",
  "key17": "tGXyAKCXE1JXnrYLbqzYpVNPecYG1XJg9P2gzTPLSLwa8ehnG14Gb1uzmPc48YnL9WgwWSxtZNd5xwngCCF3vMD",
  "key18": "5qhXakhJjWeGdQhUTqnkJKmXA8JQqGDbp1z3x5MUUZ7La74TFCeCKvLMrmzfKqiAgEo9g1RaiEd1L2i9ymqi7wUQ",
  "key19": "3fEL65HjSpyEjEzhkpjMhmqQuD73NM4urY3bQkFqHEA1cq28wgcr6SDUk62PDmThGEJsnzYT2U7JKbPEpDfqGkpN",
  "key20": "2ubrRvaVhBmkaw4UrqJv23ZmGT3jjN53yMFzh378bHDSxJ7wL2e2csVftac4wZtGVsEJ2nbG5nJ8k329WrjgKLDf",
  "key21": "4PMc1sptwt2BrF1fuQns81iTyX3Ya2DxtyAPtGkzeb8G42A485BkveiBpGjmUyGqfC8SBWBz7rRKXaccpDgu4CeF",
  "key22": "5MZk2rk35dnJ4tmU8mRLZGKqWVDcFAvGtGGBkiMiRPysiwupStnALTbiH7QyejNJhCVwK3aN6a7Cg8uxee52XYpq",
  "key23": "3ipx1dhGLydNEZHsaReLzTTr5DawwygSxS6Z5n3uWJQ45jVZfPzFZnBLwpw3pC7eTtNWRHBCaf19wSbDc79898ak",
  "key24": "3RLBiSDTQUAHR15KBoQavTza4apXYBQZCCRzWwvV74HHXDuSMNxcCQsVbaStvrKsUpN9xXA5z3P83YrahgtD6a31",
  "key25": "4Mw7RttUzNtSmLTPW222urRVmbJhymfLjqyiWUofNY3GnEA9KPGB7XtQdsaJCYfU5RLWWUGaW95R3kzNaUZHh8Gh",
  "key26": "3g2p6FADVEL7GaoFJZ64chU2GTqT2YA4gcNC7pT1SpXJEzGNVE5TkGwV5gj75nkeVWtm4uDSLh779gJS3LAeC5QF",
  "key27": "4vkGLBNWXK5UBcwW2RB7tnsV39DWhscNV3qrw4kGwJQCVCUcMUcadxcVAv3w97bDGoJRTNNy4PBEcQxr5ti3jPRi",
  "key28": "57oykfUMYjXdj6CR7SZBduguA5TpDLEhESG7LdT4fVXA4cBWAdAYcWUL6AzHLDHQ7TpbX41DSPiLMpLRs6NQ89Uo",
  "key29": "3MjxuEg1e9mEwHN2wWwAiLZf3pwTertM9QPWogK9oQtUpHvf8hRRrqTb28Mi2BkzjJ1PW3LeqzeKnrJHToeTEfZt",
  "key30": "2TnpCBcG3pUAdAdpYssb6FXCFYc2koHNAdrjZxFb3owUbzEACM3dg7sYsRGAviCtTSS911wSe2ETfH3Dy46ekeYr",
  "key31": "3QhNjU78LgBfHBfnzAa4MxvhpBuEjJVtW2fLigusCCBi4Xt2eHG6HPadBq7WrLHL8iDoKtgtvnzgigz5JF3UZq9p",
  "key32": "3xT7XT9ZVUYM1NYa16mhtKXJXeaogVjBEvxmcE1muQFXhUJN6aKmhX97v4Gsu3tpGGZc7nxYwYeghRSufCjXYYRm",
  "key33": "4di4w5Zn4CccgzYjErbpb7oEUGvAapLZuEmSqzQomN6XaqorfAP9wwvNWw1T1JvyXGPboEHhQubSueGtuUAD64JQ",
  "key34": "3LkuSKpUJi7Yj18LbdtEV6m6pRVvyS3TQRzj6uFuT493T7W6NPY3cGAvZ6nATFg1qEjpppJtDAnRsppyk8c2XEME",
  "key35": "5ibcq5hgSBQqTvUEadY1E4WS2GNeC85S8SK8LWEbKBN28njAppNP2tbF4mgsUBGaHHerxjZKuDW8W54JifbPk3kD"
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
