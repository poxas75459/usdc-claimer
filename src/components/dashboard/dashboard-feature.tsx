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
    "4JL4PF5fmajJvcke51Naf3gyaNyNmYWXtNg3PZwc3gWh6U5AyTm89ucreUs7JxKtAUf8Yn8gTfo647ScetirttW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmcYuAxHJtkJYCDtaBLZ2XKZ6etkcKSuaMHXbKaf4w2qnLYvM5b6ffPtXNjBhy2jnAaz2yKkxyX1umuRqMqrvX7",
  "key1": "4yBAYwQiQ5qtLatBYpjyL8XGy1HLZ5JZH4mimu6ukV5SfhB3BjFLTUZxsSwAR7FjFbEiPib1oADrUhBxwtYriDrP",
  "key2": "32U41hjDDaJ1HroAcHrWYT8EQ4dtVvodJWy8kZgLpeFq1uQ9YYUofmwFs9RDALSpUQXGXzt43XBsBXXytWyAx2ox",
  "key3": "5AGrnfbdrgNeHxy7vhqPQ6tgs2ZuL6hz7o39yLFYhYmej66BCy9Yg4kUURgrCEY637bt61zrUS8UPz5gfH57VGWX",
  "key4": "5SsNUxRaLLwCpoTLqrMi6BX2S19nSbJMdVvaCnVXxFKSwMCLP7KC22NnRsdHunK1abPeQP2zdomMLab4UNeoPcA8",
  "key5": "4XusRU5e1XS7GSixeEZ2XHwncxW1iYhW2PD6XiFi8ivRzHY83qp6LLbuTcgBknuFryoyHkfai1dKBe6Gj2nPMZwh",
  "key6": "3zZpC5cd5geL8NX6xn1DDJdQK8nmNE18fVTYNhRc8X9Bs47FYfjVdRcVujEh95A6XQHGA2tFhUsGELB1FCK3wBqu",
  "key7": "3mSrET3eHU3mMrBACaTfzEgaGzcrNBRBvY6MHC11BDSEe6JpLadY4cZARawCi5tVeTTB9E2KN59AhrmXrjLJoHu9",
  "key8": "3cctvSmLXzTCKkcBkG51Ywuwy52sqQUwcs5mfyY9G11kanJh6UrS1i2NxP5DhB6jo6kNhBewQCYtUToANeToxP8E",
  "key9": "4VXiFshM2EDAyL8shnuMaSfCZpNu2wQVwbF77ZKbqyC6Y7pUyv132QadRyBigmakYHMnoJ76S6y9juVxcjiF74uK",
  "key10": "49bYbvd8GGGD5koytacfy1ZmXtTCpBqTdeWekYzF7wobw8EsjLxggmKx2oTFmJCmi9yHyWMWyNwiAv67G2tmZ59R",
  "key11": "2iUUuHb9csW46i9GY3JoELr5YMPSGgmBRfmMc2Re9QoL6q26awpAWj9LwPzv2ArtkbBYt1KYYf4PpnAGmmstfref",
  "key12": "367mavRyFbUE6ctsZ13vBqREpJCkwmQjSavJ7Beh7hDDnYTa9wijhTkMyRrzzBdSNs2948qkWAvvMj3yPaPz239j",
  "key13": "4wqGosQMxyQLHp5VLr4rEEKxGrzPUFZeAsB7bTEeAS36LXFxMuQyPTACCUW4TeNS9qyNNcC6HrnsK5AFtruMqT7",
  "key14": "2v2NAXayHv9nz4yLEcUq643EaZcotfqaq6ygRJrQcyJPxA1A1SpDnKZPsba5uyP68ygCXJxGesuCe6P1v2fNejL2",
  "key15": "21PrrKWcpkjbug3rLYtxDHGKAtGtg5RJdDiNTeGynH7BhsqcLFPagAtuwZadaibPWegTpXC28QguaL2zgsHw6ZKm",
  "key16": "4mktnRLmAzCV7AfYXMk7UDvhgzmZ9JD1BfvQV9U586iKk9SGKVCe7cywhBX2bWzKX6Mji79UpXJW87bZEgCekxAR",
  "key17": "2N7NbjUXwoVUec9Mr9C314L3apztN6nuF2tVq6UtvqLjEEVwzDA9tFVaSco3iW47opGtKggvHvYrmtEC2e8zpryR",
  "key18": "5hUAJVLaHr23gNZbDuV8UpeJNxsBg4ZZkDkRshaAmDzgjNRJW5uCuFUVrgjozQN3mZovBf7SXoKsz2wqcjaQPJso",
  "key19": "4LNoUnHYcryzDWT4xd1AXuNvQ8TEiQeeTPTFSM5U4rhAb3ptkXxLuePx5uqQP2juV4tAKLzXRSVVsGk5KFssYZvz",
  "key20": "5Arm7Yo9cwt7fLQxj95arTR6okHMjgJifGovxCP9p5demLQgV5JBcvuGvPSWRzHVUQyrsL7DKk2SQbmu5q1Fkbz",
  "key21": "5F839Vhuctk92irqxEZzU1AkaCUaTPuYTpPBxzEgi4pzCnwB1zWS6eXuAcRcSo3yK12G1er3LEZLSEhPZaRKyHoh",
  "key22": "43Y7F5gy1V6efC6t3MzRta3o5VGhBPWnzwKbSbQ5bM2wa2sCmkmn5MFQYA7KaV8egmUjsTwEwxJFUC9Ec9CQ3g91",
  "key23": "41accio1zgtqEkUeNRynzY5ESe5QDm9nMbsEoXdHw6fZsS43sWL9Z2gVSiczFG2ePXRP9DF9PbH3G7bSTWar4GFj",
  "key24": "2yjG5dseiqhF7jv1JjAkZ8rysukcbPyQyo7ex4HJh4WKC8xrLMwNXDyNQYWZpR7vVbPYByKvJ5JchDo5jydwvGSB",
  "key25": "eWo4jyrNxVeWfZrB56vaMuXUMjC38ichzmhounCVkN3CDeEEywWkX8nqWPtdD3ngt4a6doUC5TX92jCwFUQScRf",
  "key26": "5bo94mW1AMatQAfndDrg3mh8iDiLiJjSracLqAkZZzRifYxSs6EjQgpb9v2twizjPeabS3qTurQ1kRFY5QPT2Fuo",
  "key27": "URz86ZmRjsk3NSk9ML8neBXDfrT9PgwaGaRN5eSj8qYkZDP6Q8CWij7AnBUf97fZNUG6BvvDWhvWtHsbR3w5yEw",
  "key28": "3jzVS5A1gXZuq8hTnTPseHjMpD52KLDQ9jXPh5WEcquqaMTMNvJTfz11nQzJDF71cCQ7jwhAqxC8Sioq5qXxGx9X",
  "key29": "fQWhaeT8MHSxJhkk6CxshycYBVvtPYV2ExjhRWXCk3EiQwybREZ51e66EpWs2jiDJoCsGN7CEzCMUPvcjs6Bf7y",
  "key30": "5pnvkAePQa36BQGivn4m5CYiooQffmyDwM8Wy3ae24Ejnbx76prrNQDoQvpeDorUP9dJNDmQNGsBxwmX6AgHTL4s",
  "key31": "4aCFp6Y62oGW8vVrDr59AQ5SDofdHy3QoNbGjf8Ri2g4pd9gWKAN4EknyV9DtGqCVyVxjSBVSehhsbnBAougG2DJ",
  "key32": "4EAyLUgVTz4MvZFwpHFk6qWt27yva4rFUN1X7UXJQE7XLgsTX2wbide9tmQA4LEMZszumMNmxtrbuV9YmdaD9xL3",
  "key33": "3GijV86QdbAGSPCaxzg7saEWjGGxiEHyBqq7z9PuRL7WjM2mfRhsz7v55wz5EQNJrebH6ofFfvUs1t5XVNU3L2yK",
  "key34": "4HxdWoRbZuiXAZohrggG9RqANsQuMi7QZVMWN149T3mZGu9exAJG9wRAy4WZYq3xyhJsyQMQHeyRpQDnJB3VMc3X",
  "key35": "2kyAbs126mG9gK1Pnn5P7Gd9NHLyzRKsukt2aQAfdPeZ2i7Rf96AKnFnqWVsRgVJJruymqH1AL76EfkER46HqYe7",
  "key36": "5zNgHCW2mQgK8oDKW73ZPL86CVB7DdzQUFh5ZDckSducNM5dnxqDpjbnRYmrZy4kAqWY3TYtoYSxMf12qGJ1z7sV",
  "key37": "37dia95JQ688UDRdT8Tx64SdLADe1h4kVPtG7W6zfEsj2XTMHVPzX7HMQmZKe7pm5P9LrZAnrB4BbSbWWGUC1jG7",
  "key38": "4Zb5T2dnahy97ExvNUN1nocpYj8FZTEtxPxZujAqZSFGMGuWaU8RhrBsFFsyv9XJkXGUrJ3xDiL3iV947Pmky8Ar",
  "key39": "4Gi8BemoD7ZvHAyoksXHBCSxdj1YxnPZeWvbvtdMMTfZcC6opEvCETetm1b1XCpdQvLNMpTraVuDXpi8oAEdtUTn",
  "key40": "2jAVYAuiK4TQzQPtSZSVVSugHNEFHwUcwNrDbcaYi1JAca6ib7hYarfDJLVkDFRZGDtQbNRrJzTN94jfcr6UuWgm",
  "key41": "4Xn1i5MS6Cwp9eFmqmobssmUdxPWpJWkqLBGDK32LTpH9rimzfqeftNV8cQyoYbBzpXV5gGr4LwRLx9AnE6xz63L",
  "key42": "kT7GT2ZnJb2yKHqK5exSJFqMBNJ6ZCq39oHyLjcfxWYSGSZhMUNKa4MrPRMf77DfwBiz7Y4xiRjgM2pGc7LuYPC"
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
