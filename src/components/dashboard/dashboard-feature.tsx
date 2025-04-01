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
    "GVnQEpxxM15irXed5rGePqmygwvW9FafJv4SBtgDCJY4xkmVHquwP5uoFBsMYLhphEoETcgJjG2vB7GtbAMC2Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJwtBT1naWQvR6sdX7z61XdAMxyLjFbXdHjzsUdb4qegYmiZigmSLdBBeKEtPin9LKibHe5AA8bMiuizMKHWCD5",
  "key1": "6618RsZUXnrsLv1W7wTy7Ay5QUiwB1cW1pG8P3noFoWHc8XVEDNbU2KLDQ4MhDFscPMFcGGB2RVnKwo6aPDSRpL7",
  "key2": "MRP4ysXzzphh3cXmvgzH5g8eyyq9GPwB7w3oEhCChrA1f6Qt1tqp93d3B5YDq8TRWU55Afto7GrLsZmXRfiNpTT",
  "key3": "3Fcm9SsADjYCcjVZaNrcwBK58az9vtwJWoaqnMfyJCJT2WQLWJMixRbcJX8Z7TJD155smNT7RpjfZvN7rBDTaJMa",
  "key4": "2ASGdLW2JZWThNApSiXu7k8YMJso5n84UfVogabeF5keL3wx33w5ZCSfdVTzAriSzUZQCTgGwC8JHW1G9nHVSbBC",
  "key5": "2j98vxh4w9MqsM7NHth5ZxSme2hc234udTUHntPUGMUSJJ5UhU9xKFtbho3cnWFXX83nsfRjonwusRqzVPyUUSM2",
  "key6": "5cFaytd2HMkxkw4bvAKPcnS5uNMVcTo1xcKXvEH8yVzbSfgBTpZofQTyTQ3FeLQiqrLFVkmwueNqp77ufHRDCw2r",
  "key7": "4SH8PyTLSskNx1JfmXoBomrwtKbGDwWAak5G5ukvSWHNjmasra8XAL83jStwTyXiATB4sSWpqkT4YZXQq98Sh6Am",
  "key8": "3szcCLoqvqG4b4q19j8Hj3eNAREhTtzZ5UPeYV1qs3q8ketCLuNKL7uraAkh8rC9p4XFQz8Du36zr8tJaE1gL1a1",
  "key9": "2NTX9ok6jnMo3h6cSmJdD4WZAYog5HzbvmGDnFwvbGVWnQLRvEd6JrwgZECdZEfKKfBg4aUHAzCTQM5qWJyagFnp",
  "key10": "2xx6c2auXfKHQrgn4qo6cBEMT62mVgmtQM8Ft1pHggoGQfxiBNaXsBvKDRgUuRvBuBM9doivszVVj7RBvy2St9w8",
  "key11": "eVsWmiSdyWs1BLeAxXAhkLB2Y7QTt5EWohQzavtEt5mgmcC1nMCUpjpu1XaHc1jiVGVUtG8EjgK2wECn8pzqn1i",
  "key12": "37Rcu9jHy7U1p842V3WApQ22nqeBfkGvRtmY651S6idzGbnygL1s4ow1oVHM41jM5DyRDbh8qdAkGKPBXRXiCSNG",
  "key13": "2WXz96L5PUXBu3oUE3TAeQtg6JsQimsPgxjNpv4iWXA7bQQnuzfvybKsWWyUXoM47oYiSbdVKu49XjVQiKbvhMDV",
  "key14": "3ZwpHAUuY6Suw5JgbAqnc7xHGiCoqxUMiUVogndm1HYkMJEKgEtiUrbjMQ8ozL6HeNZ3jDJm8CbGxp6xQqwDCnxh",
  "key15": "5doZXFvx9R46pe3xVdSGKX6KtCLLdQNZspxGEkmTwm7GJBmXWnv7buFQtY5a3arksEKAsfTUk9iWuwuHC4igxo9M",
  "key16": "2w6X3ykDGNAfhvNmwEEXhbQMB6c7KLZLFJpm3eSp1M3rb1SbhzeiGoiWu1FfpU1Le3e4qc5LPmNRYcmY5STMKc86",
  "key17": "3bA74eeTvgH7b76ui5NNRk1RRDbEi375bWyJBFNSvTjmJ9CP9RP6NsUTryquV4zpZE3PBy9fXb6zK7JSoydWTpR8",
  "key18": "48EgVgoxdagV26mF53hJcdCpBgQXnZkqZaChEr7Z4NEAvqZU6BjarGsNRncwTw4R2b2g8huZvjQSxAymGfQQutw5",
  "key19": "4kSyyFDz9x7psSAKMiF8j7wE7LLHyex7whd6EoB8S98FTpWpcMUUMuyE9ypzSfjruC7bbTfEgPntLfjxPZPpjDEK",
  "key20": "2nX27iTvbLCSMjYL7SCsQR5HBY9PAerZR83nJahyzEvgxUXb97kFMUaLHMYYK7x1CHwN29ZJSwS4aAixga6YVDCJ",
  "key21": "5H9uGN1bnrv1X6Q1VFj62odxHzhtgwyAWbR2ASmjiyMoAgkAXnDD7VAzE1W9cPM29GDgYLrvD6ZNuNyRMbz8Rg56",
  "key22": "RjsxSgB2xfzLtS1we7ZURjwLAngkZUAayMz2j266GErA4nyc7KBr7M9sLKMyzwLQMBBcmTBCKVjM48B1ik13c3m",
  "key23": "5bTFj4JkxKMnRwaDLokUNEYXKVgVV7VVt4MZrpLSXEh7DaFfNRw5Np3LF9ze9DZRiMJG2aNRykntLirrTeGvhpta",
  "key24": "2EY2Ti353DKNRtN37TmQdd9MvRNA3janjyDQwBV6iHXW8FkfxKrHVohNNVawTTP4DnknRMipaMBkgqhAP7PwZXfm",
  "key25": "2Cs8yJqjTH5bJML2PbXP23Ts7HYvrX38qHn5jRLqqLyApqZMraH5MTucGvuQfVNYMUnmorfwrWeia2QQBMeMSC5F",
  "key26": "3VdDbnjSZnzYRusbX3YQGjEYvvDiUkxfymQwKhKdFRikLwzZ7c8rpxYfZQ3Kzm4rPTscWn3m4eZsNP1asxFi57gK",
  "key27": "3j6xBpQGpjZwoHzU952xVpLeYC4GkKuCknXUhP7zFsJYcxX1LeFuTgDA59F6z95SPDqKKyxceA3iY3hJqBEvA8GZ",
  "key28": "4C9zqopTMNZY73Ttxmhv3wQnPJK9XfdScyZx51Q3ch8R3P4SSRvTwPeCp9gkjG48eawcdhpysNZsMQo3oaJU2mAr"
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
