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
    "3u7qeaPHeTDd647UeXMLQttxnK9a8Zy9kqQcvBuGysVbbimrg8sQae7G5S8htCfXvrdKAN1SGExa2r11iegtFmAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42yqNmAJWooFZ4QDecSAYUfcSu8Ch3ajTec3EcYhcqjEiFB8fu8k5EFNohhSwVL4YYmooJTtGDmtarbdU3yYVytD",
  "key1": "3dsg7exVRRtxAfKQS5Yiro2fjoa8Ba5PP4TvabgNMZkxnHsdrC4SUrxo8d32cDmjZmmyMzD7PAMfwR3X72uHyh7B",
  "key2": "1sr6WiN9khJ8wYqa3GjCgy5UmWDf4Y4D1hjZsEo2JfzeicEARMgxfoFv4RAfr9zjQCdLFUD3bvU5b8QyDTgt8Ns",
  "key3": "3tQPGg4PSowpcqbLt8hejT2iM72hAvP952HriQrGv1dZL5oDKxBqUjfPB99yCD8Wgj1qCn8JLgawW9hW8KK4p2fF",
  "key4": "21Hqy6sNGCZdWfyNQHjTNaL9A1qNFBnhtmENpsNhuoFzWZs9G5uUZySUHivF7FGZfjALGfzuBzGzbnFAtZNp5Ext",
  "key5": "5P8oQGMDA3aLqyadYxJjAxFq7PBSv8Z941FYY8rEGK6syapL6KB7rMSU5BFT6seXr4RhtpQaDUaftzcJxfWf5VUH",
  "key6": "5zvpdL1Htv8u9CooLmnomeCD6YgwSsnQQHV2CcsyT1uq9raQ87o3W9BdXot1haTNSRaX6ye7t3WVvjWzBNvcB15e",
  "key7": "2rscEfjnTYtuQqbEgNUr91ZFKj2Ty5Uqapr7av2MAnqQKk9yCsHeuwNShmonhtVZbbBr4TutHcSpvCfLroQWS38P",
  "key8": "ctD6EzveVEjcSjEqv3g7GqhNqg4BsjzwBUZspsbzyeNrYy4eB8QBz4eJcDWdsKrnaEvD48YchkCHnCt2ko1hbMr",
  "key9": "zvC6xqiwwt1HowGsYij6ojw4dRSRBfeKfLjS1xdcxd8cZbkorLZ8NQBwxCZK8Dv3V99Cay5x9jve9NBB7JmPYcU",
  "key10": "urxKgdMZ1AkKeFeqjzJGvNW6nZNGuu3SUCoP36P2gjijjtP1GrTrHLoF7WUC7j1FkanEJndYJ6MeThVFEcSqbQA",
  "key11": "2QnJEE7xvxepB6A9ZhJo8p4PpWnHcn8AvWNZLmDPvPEWQ24nELbcHDMumAFitwAT7a5REboAe5kDh7S6eRysvqr5",
  "key12": "2uWjnVPvLq6aALiC8uzFFVrSBCtAxrHavHvcEYNXFzACo1vZGpJLFyfn8XHvBje9wjC3QJDt5m5DRRBjg7RVZwdX",
  "key13": "5GK79mYCDZroq6R4pfRDFSesWr4gz8Kui7R24XJuRJhXudwYFkTCWYmqhmGnHsJyQvnD8qQTjg8KWm7LoZEycumm",
  "key14": "3LsAP5bek6meRUqkrN44Xj8v4aKXtjh3jwKFHttHeUuVkJQmzA2vsxU34G4M4AmjF4vhte1WZKMvV63KB1HFbTGB",
  "key15": "5Yj56z144JUePNGn4kxztMKNwAXwHrrMesF2EgqUoTaHhgR7uV4FhQxoCsFiBbrSoZzw4oUNBnGcNBHdxFYw3Dt2",
  "key16": "3jXRSWewG7iJQbMes8JWdw7eATn1WMvKhBi7vdFNfKjcQ6ruPhCeuUS2K8UpqtNq9VoSN4rDLmKnS4XabongWATV",
  "key17": "2yBx7wbQdKnmMZt3k5GEHbBngdnyHsWXjtyd3wdEbyTfosRQwxSHJpUokSuySUTWmyTpgJnxse3XH1xyRBFb4h3F",
  "key18": "5CYZeJjQiuj9qVwsRNYJGHV8zXNbtrML8G7jcfgAZQQ1m6A39Ldp5aNsFdEMfyKiun8z6v5HUzASYHVHHybkWLL6",
  "key19": "4aeSocS1gbfuZGBKnpDEcn2BBWsWsaPqGX8T8guXifUEPUXbepdXe8WkCdcTncV6yuPvdy5xcC6QnYNQXw7eLWmi",
  "key20": "3w8FhPyLBPwdXdG8gevA63CSDk1u5EQh3Ry2D82jchhmTuWKRdprDsU86N953J779Kdwt2dTqVspUN7JoffSypuv",
  "key21": "26GzbGiApBhXoBesjPhj9kHFcWLq5SkXT9t36yeTiCjCb1rJWbhLhZ4AsWsVyfixGLuSjuiNPk4vLiJSNSi9pzut",
  "key22": "5Ch4vzNdHaMVjPDsSPiwrxdGnNBym12sTXR8Tq5zgP7kxFcn4WHA2udKQWKf8wPtcq7znKpHo3EoB3LiRvVPtwaL",
  "key23": "5Xn4N3V8zYLdEPSAqoHz14U3Jn6Za2HZqeHLqmSDHyEq2x1hq6n31SJSEiTedLGS4up5p2NmDsdFjjZB7XwykPYG",
  "key24": "Ma7BEgRqCJoqQjfhbbH5UVGV34Bk6qPgpUWzu4TPJSjz6deeRxtZrUUBbH2T7DKpohxq8X33Rhc99TsL79FiHmj",
  "key25": "4FM3ccmrYC2nMkZCahFN1obxygcrGhXTBsouk9korRY58BdTVSJCyV3wFm8QcZMPDsxUQV1NmTU3gF4ZDZuzFkQE"
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
