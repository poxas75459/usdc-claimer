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
    "2Acp3iKeEsy1R25ETK8qQ5AXgyrMM2QUgHFK9zTM7m3HfE1KpfiB9sab2THgQCeTun3mnPMYrbw6gsDFZMhc1qE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3fYjFVf7dJyN8HdnUMsFuwxBKF2weYrG9W82E7oqBJxeUEwEmE5QxcF884DPPAfnvpZnLk5LGaCRARt7oUwvU5",
  "key1": "88jbs6vuUPHYUShUa1N28zFs9GLkAXp7skDSLMXTqtoBNKPiHLmc8dhrLsaUcCKqjgeN5jJWq5qsaHum7s5XyAd",
  "key2": "mJJibDjDc7R6x6jTMx6Dr96uZ3rgemoGoJengNNFNwUnLKfpF23j52aVCdt8sAaQDodddU4VfMyXqxhCQWfAPRJ",
  "key3": "attYP4XuaAKsa22M6HkcQ8iehXUrr5aRnTSQGbSfb3cNU3gb9TQTDD9An6D2JyesCyPuZWKqpgCtqAvNAkq8wAW",
  "key4": "2Y9haL8J7P9ScGhtxKWg5qsZkk8birEdxjx8njV5iJPNcXHFkPoDfqE15gm16n8ERPoqfVxRZ87gvUEo9F8h5PNS",
  "key5": "4e7KNN3xQkx4UV73QWwuHx62cxke4ZKq8TrGxSFmvzF8nytqT5prRQhBAvaSgd1kq22GhHkytbpPb7emfPXs3J7x",
  "key6": "4FAaqSHbCUfQuF67c386w9Z9XiwBxwyMR2as3h4j3DFfsVpH3gaQBZPWqRJCPt4yNjR5EB6oYQLVu47AbVboEoM2",
  "key7": "3pLmLWL82baGRazqZY3NMXYDf1pTLP4Pze43xcViNgxiJoSSoGdCS33NpX14dTdbpCJJRjUY4UVwJbkdiC1SnNGX",
  "key8": "3cZ5mPRzv9kKW156nue32btJS8FmJysVEUR2m14eAz9jkVDeCRt1bkvxqkZSFGZx2id79wZKfs4sUL4BNDYw7fJa",
  "key9": "5422baVu6fTyFjgv68wFngnZhivbP2XUowPVQayMLEVwUuBrFK4iJ1icU6zoFDUkhhGaYKFBnb9T8Kd48TYDtK11",
  "key10": "2p3sNkKHKQqRc6RScuLZTHmGsV4HKA8w8fvj1dHtk4aTEd78b3V8PWk6MB5YYCqms3pKL5PW527bqdimLb24YcE",
  "key11": "4dpBB1mxvxhgiotQY2FEQFRnvuakKzpvaVmnt75AVZfpLRU7cMRUJJCandnWmHdwFqYznccdXTb9BQFCRTmiQMVn",
  "key12": "3RFkBFYLufdN452YdutiELxyhU4z1RYAjDLH32pDX1JvU6NDMRvf8L3wM1P9tDRqQzSHd2NCqr97QsY8UumywB5Y",
  "key13": "1WzK9maQJaxiKkMeGLJQbaWPa5YTK76uBQiodH4CYmDMbLbKw68mcVy574ZqWCfmqubVrwx53D96MaT3YJ4Rxem",
  "key14": "ejtm5yaqHVV1L5Ur8NzuThwShCfTewAcENYL4dYghoXFpSqgouzFRKrduatfJfqyxb9CfT1jKeT2DfaZTiwr7Pk",
  "key15": "pgFVy6TdKb3BUV9WgD44TVPoNkwniQg6qEVaAHhGYUuU9ir8XSmZRnHRRBXL3t5vhsa2LcviBwunUQiXP8M4ToJ",
  "key16": "5aYXsc8N38VtCVPuM3q4BFC4uHqgncWnEm9Mno6VYCLaUVVdPikxhqyAuVrZGixfwdczNYSWbofc3TdeXMYTGUDA",
  "key17": "28KZxr9vvH227tRGJsSNqp4UbAaAmBVuxfqG1NSkZDbWKHNjU8VCjHXqDptydPxAYAaLxoGNygrwh6GvjaETL9nV",
  "key18": "a1tVMZM2Xuz6akYiDadZQJAukUkUo587oxDxLD9q3hLnaGdaAvbmKbuyGUqNqputDfVwU5dWk8RZiD55bsubowc",
  "key19": "64J9oYbAgTa2EeUz92DSLoy4uaQmVDaSBodWqm1JonuST8JaotuFHsgDEBMAh7rkCtVJXZfw6Wda7ow1e3RJuotD",
  "key20": "48aoJbhP4eocRJAPWi6ZoTkkNJ97GunqHzbiqSPhhAaAArZQNDLMmCh7R537tQdyWskmf2mjgF6LNckkhVjmoRe4",
  "key21": "4AG7Z24KHz9hHedSwsiae3DEdrxGsKJenVT71HpCBbNS1ZNPFyM2Wyn2PYBHNt5HW7GZbCChzWaQdJxaNfVBScLf",
  "key22": "5GhgR6eXzKxir7VZtZ3CSo1vVuBEL8HVRaWqRXfksEmgYZnLcqpqVqixLvqbtnSM95d4MhbKVexJEzVe9vLTz8m2",
  "key23": "zPJxQvXyhPeYzabf4AjV6tHHGJwHT4t6F4jWXcCYCnoFftVRdUTp5F3iSvSWCH67Hh66T8nqA6XRA3nArkGuaPc",
  "key24": "58rXw52oEZH2cp5R8hexTSoAT8V7wvuMqRtF4DLfNHqyQypuNC4t7L4eV4j5PqaprYfhpqDMXNu51hL51CK5cEuu",
  "key25": "5yR4tZUbmDvxBG9VALBFdExqPwNAF1sFKL3QfkQtMVMtxKW12dgLHKBfxAN1UgNKesNsKnQekLk14matxTkWS6Wi",
  "key26": "55zMXWBB2MB6k5YhSk937jrHoiFP8UpzE2NCSmkPc6AVnCixhnKXPmRNcfbjFZo3vgZ77jqdSCyUnaFTgM9PbTPs"
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
