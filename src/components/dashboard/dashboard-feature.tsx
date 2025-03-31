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
    "k8Q6mNmH6P2mTLwRpRbgkwirSVEED2UUStqGWky3U8vykuL9ALeWBaGLgQdXapAWawANDoFAPaLnn4S7Z89uZub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MQhun5VLqyCzaEp3QpENUfPdSWs8goZgNb2yzVs4dA8TcYNSCu3YfTLJAh9gG8RoyRkoC8bgcLWiRt9wQRfeRH",
  "key1": "3Y8FJ3pCLkHBLDSYVFz4Sii4QDTgxRsYVDKHpg9fEa8Fdv9GQWU7Dy9C5z2CzEsoYQZJ9Bf4UeMA21DGciHyQbZj",
  "key2": "2wBMCWPqJJiFe74kfkMEepfLtPN6jontdbeHXYsyDdK615GsdWpw2PpUFmNfbDY4bo9AbMyqyNhz3cWfyhQRbFRT",
  "key3": "wSt7EamnvdHRwKGdkeuQjAkLmvwnt9ZhhBrGyyKkmm8ib5ncsyaLBVXKStuWKg341cnwiWq9DW3XkM6udEqNKWP",
  "key4": "48vjEG8MFAE8i6FSnuzuvtfLuxLjUfyADgrqgzC4x5qdfLre499TLfYkyDYxCemsrxve1RazZqEQwiWGqB68Gkh4",
  "key5": "25zhuyzXAy8Vu7mAg3xtTny9vmx2ZoKperRPBv95B9F4dT2kTkrHpmgK5FfPpqEpfSMMY5V6L7M7zvSd6A6UGNNp",
  "key6": "3CK491GHBuH5ufWHah5NsWC15mBfeQAwYjMyqR1k5GHyokLqi9krpuvbnv1D1ifU9GA6T7MDNwbQJRFRLAx7YJe9",
  "key7": "2o2toZEVVQ3xSkRPnF7mxAeKHrQhgbUq5wCrd5cWz6VrHqSGgozoFBbXM3PPZbuMy2TkQU4b1Bh4nBTMEspJmSaK",
  "key8": "4SbqC8VDLToj5FnkWY4BePrC5PiWR6PVRMumqHEwPK7ybAGEf6BpsKwwSShGb5md1cTS7rBv68Nr1XcUzvFBVnSq",
  "key9": "2CkvvZVNskkoXwSAs2P4hoHZdvrguhC75RrwhmawTcrxtyFoPQSjFfamidL5hvRqZYdPVMNXL7nY2F7nHwF72D5o",
  "key10": "31YsASF8xAEmPZXdT5uzFqCj98564dQ78DsBoAu2cjbNaoDC57NVhR5ztsmc5xZhjjrdJoDkiSAfDzF341xZgick",
  "key11": "3tQFixMigPiCSfqE3iExVQbLHn4ff3hCSJ4ufT4CK3qJY1B69TDetguJY314GE7v8EZURT4kM2HGkoXviQmzPgSz",
  "key12": "3rBq8JeWQ7S9XP6HkrXMjdELodPsE1AruKGQVKGfnxbD8SbGuUNh45FhmcJSkcEHpEboysQGWtR6UAifkkw9R9NY",
  "key13": "56h5HGsLviZN4c8SJMmQuHozZibVYV3bnBeZSjuesAQwFYrgHVD99SnHzkNBwvW893xZjJkpQxZvmh2WZLN4tLi4",
  "key14": "2XWz6krdrmeEN6jtEsYuYFQK58TAuv85ruKB8WeXzDbVkiXFt1m9jruTkvEurMqRp5oikGYhFddgCvYstY5VCwAx",
  "key15": "3b35idKzBXvFSdErgLUnVh31dirxWYpB2BiDy1i8qq8vyeZ5UcL8zAFBHPsbywAAP4vTRadLM5cx4espvbZeTXS2",
  "key16": "2QVQVa7wBooyH7NNjH4UzwxMpwCTuNUC6pFpGC3uiXHjEK8vGDKvCCPPpJ3pZe7MHRmPE8H4KzxdGbptCe7h5UZi",
  "key17": "3ekWHT9TTrfK2Jx8JavFVngFRxwYCSU9VKhmhjsYNC3c1z6oR2Ppo1Nusouhk4hTaYT1u2yRC6QnC8rjLmpqq4Nv",
  "key18": "3oJFXjQ3pRPCPQoLaWbLXLGyFXSU9wDSgZwuWFPCNYqrVxsYdrpH9DMbsD69zY9pL6QPw9byUpGhsAb6dHpYHUks",
  "key19": "3WnYTGQ2tYQE5evSG3AcE1euCTU5omeAWwf7fS2XZeGCf2g6QLXgDxjtR8sZfM4LXXPkXvSA3j4giRZk1tXYJ1hy",
  "key20": "49kpHQDRaycoi1W15VDnFwtQ6jPYCgYdZxkPk6cV7i9fEjco3BkmpMr8oyiFM719nvD4QDsphaVrjfwBg2sJgVMQ",
  "key21": "YsawZcYRjqqYiCu7MbxpewS6PzuodLcDWDCFUpcHgYN7z7XQACkrQP3qgAs6mVSRXivjqKhBNQN88m2kFVQd4dM",
  "key22": "5Dc2Vp2jY7SQutqsauW8GM1PXGK9vzFKfK9XGehM94wXKxFbfG4dBz5psBSh7AEAccqx1A66zH3JrR43CqoFECp3",
  "key23": "5Gdk9p96676hr2FdhwQEq8n8FUm4ZWbdtVtUqTuWYFgg6WFNW3FKbiV8SXcWiByDytkRNFjjLsyKo4ujY1fqH2JP",
  "key24": "2CmnHv8nA2zG7ToLjZPue3qLMhMwFdp3mtvdB2y1jZ8ozDLHNLjmMCRoV33dcVwvjeh3S8Xh67VqJTK6dZun726w",
  "key25": "5Da93zN4LALm8Wag9S7M73Tnb52mEfVqJbY3FLVqD7QGDdZ3KMi1DhP4JtnKHrfxaa5XWAwgAJPUEpk4FyMtPsbQ",
  "key26": "5pCss6SqgdGfyQoNvDj9U8FM46NKNJbqPfWQPiRGM4pTv5iwVw53WkriFjuSANjgzhL97pnZhJjWx9EqNCSJYPEW",
  "key27": "39Q1qeZhcSxsKjGCRpcHpT71HuRKjb3g1m5Lb5TSEJQJ5RnJ4dXRFDj591wUfukwi7GJoYYKCnXfLjeA51NWZBo7",
  "key28": "xzXEph2w6CfJxMUa19NCPaBiVAiyLB7DVF5NV9gvAnuxaYCQEcKt64hHRn2NSHeEfbq2VHqWWry5pJK31rCjLb2",
  "key29": "iQ53r7o4DaXDXBSQTsCQAyP7UHXn9KhMNZwk1AvwXWvPdhphkCYfRumUc4Y362noqzNkuPuqC5NyJ7crSze1iHX"
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
