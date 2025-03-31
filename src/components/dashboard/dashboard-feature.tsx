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
    "2MKJLbPCeTp11xtUoY4eyvV8JjqscD37UwrHAUQm8Rf8qjjddeMXPCNCtqj2R1hDkmbtEhNSAidd2K8HR2ZDTpcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1wuBWmLVqXRBcjdMVTHz5uMhyJBPVRqNHqY5Nk55RpszXG244UUwL3g4T8REWvbaBBtjadAc1cMizXcEMsFbU5",
  "key1": "3R37VcFjdnrpJ7tGTMbZRSiszkAnnBXnYsvHVrvzXVEHWnYedkSXGo4uxP83XPeddGxdrVAoeNKoays5zG98A8Hk",
  "key2": "63CtH73mcChWchuh5E7irfZrqfGDfpjN49bJq6JCvLhkJeWG6tMCBonrFHZ6jpRoNU4UBMS3D4fbQKPcuhBv8uSW",
  "key3": "5ZZo7SQVQSLqXkbKzfsJi9zfRtta8TveqVhxKQYqHJSsys53abgu9rK6Uq7wAqsLmUjn2DD8QoLEKu6z9CbiTTtu",
  "key4": "4yCUWm3BXGAtzo9xF3drtfcBHv4GCYBioiz1w4CzAn1rsoKXWdzDdTDCU9dMSoRo1G2Ddsifj6Zfph14JKCBhsPd",
  "key5": "5P2cZzoQttNAPhgiaf62omx7HFsLuYa5XqegStn43dQ4i2vk9uDQv97b2d5tDg4dCG1hD4fzKjsDndWJrqEjvKPx",
  "key6": "2hGfuYhWbBvH4yc9BkyPHKmCPEjSJawyrK9BbsFtxPLPkefPtSycAnG1xYLFPUxs1Y5DLwNyE7j9vrXDRVzDUF5E",
  "key7": "4isfaEqh9uqHJAyvgCn7QMWwoAAc4jUTRH8JEm4ywusBJhoUGPHd244x1rQxPnfwoRpQxV38BH7hsfqwBmGDDZ9u",
  "key8": "bPtXtT53TCJcb9Dq2PgFFiuunfZW2gT7kEjaJRkxyiWH76uBcAjoi62GKSnHCChWvUhXYsra82z846ac3pyZi4o",
  "key9": "4icoL68fvU8H9aic9XNRjrWGabdDE2LvLWctnQ92gKrpbYt6AMvBUg9fuoutwxpHeqBmzxWb6vLTDEJb1oJTin6w",
  "key10": "HbZEZVnph39HdrETreQ4J4MsnWakQNFSEiwFHaVcC7aSC3kP6F4FvNNyAhQkAis5NCE8CFqR2sEfNKjW3HMV2BA",
  "key11": "3R6aKHbbCnFvc5eHEpFJCipid4s1tue92my5dBsPRy8T5RLGU9arSBr2sdJ1dGNNM4NGGer12WhFdL9pXA2xB9kz",
  "key12": "PNT74mQwqsNs38AVrRs1YheYFSGjfrdcBTgoZ7fEYso254cxuZadNSTC3mihiTs8vz1nm8L6piivuHuiYqWk3oA",
  "key13": "UAhS4GJairW9WXEtj5atSnGPRtRYWBLWYbMVpXQSpP5FK23QxzcnkPazarvwtKvHy757RYPV2oMtG4RxtLsqRp3",
  "key14": "CkkzJCdFDfrabkxQxbp2eUsyQfD1c4KFPF74QPbSz4h7Nw74McLtzs68d5PzBQsCVNRwZJWZwnxupqyvJoNNRtY",
  "key15": "4QvnpqZwP1ZBGaVK3Q4TmZTchFCvpKgHS9NF3imXDTAEtWoFsv8mAtZZdANm241xHbJtteN5UBoch5Qiu7g4ZjF2",
  "key16": "3ptC1GM6s1jVCituRd3tmmsZH9aceMYbUHwKhsFTUUSZXW7etbHTKHAPN3WR6XUQSj6JBdBvTask9EFhfdUruUr6",
  "key17": "5vMha7kXqEBuifMuu2wikW8CdjEqLCevdPqBL3NqGr95LeBnBJV64UCbqpwhA6mW3Vv5jBxc2eXLT3rJqW93UxT1",
  "key18": "3ZbKDJuyKkcR85biJKWVEQ73W8pc3CWgJZBRig9QdbDwLQoPJfLJZKt8b3tFC6Wp5ZJKy5TrCYZCPxgFdSK37sLr",
  "key19": "2UQ2Gj9YkJppWknnaneDUd8TBkYCfnHAXF8ue86ugpj2BmVXGEYfFdMyH8XSEKA1e5up6eViT4VL3Rzdse4qbDZb",
  "key20": "5y4qrFnCicRXjfsUvVsikTzTpKUd8VdB4CQkFSJLLczKPptiYhhF8pEKJ4cSLwFxa3rxMmaAFRbtXPY17ojejxgR",
  "key21": "2Bx4e9PTCYW1fUyFRPNngRqgFpBvK15wE4z95aUsgUVUc1G6jjecHT68phQdopaqWYYns6pjk89GR4pbcdDF6bsR",
  "key22": "2ycFnP2aWHgS4piEijFqVdJGfWEDKPcFu2hgDkXQBhcry2x3dnskHpk4f54f4S4jHXsiJt4X1bqcnwiS59JsiFzi",
  "key23": "22W6chnj499XiY6uH1WWwQpUawPdBvunkj3AjbjiYUFTkUdMvb2CTSmKMgat1zRLef1x25oFRdQYYMKUtzZ59sXk",
  "key24": "4vnJFqQyjhNmT9UjvRSHdN4XJ32jcsSyGLhgM2qDqJn3tK6dsbSvf7ctX1Jvbis27QnYMcwz5Nd1Hx82PJsgGu1s",
  "key25": "3cTZRVSp9Nb3cC4Bq7Gb9cYTxzh1YaaZj9LMD9WaBrRwbbwX5ewGRPBc55y5z9hHyw2NbRey5JnexK1VKAsLQ23R",
  "key26": "4otGn5gycAyP7w5SoX5cr5hg2ugERh52dSgUBCYzDYbcamj8AjQmmrdxgrCmja41kBKqAP3fjqi6A7PGeFXLmju7",
  "key27": "nfZ4G2Wt3xcJdnoHWpwp8Ga6DKgJCvsPLsZXSPFcct7j6Yf565eim9LkRF4eXAn65pm41DK87fDFWzyeYG5wpZy",
  "key28": "46gBBoBXP2jULNE1s7gaK9bXmy93LTbTHCYYxtjVnarYx5nrdubbgquGhukp59iwAad3fRVRE3MFeQZdGc1cm4xr",
  "key29": "3newBGZVrVkYng2fbKzEtS6AVrLj7x1QrwvYma4NnV4YX9NxGn7JUAYUi4YxEJNTxb2KkQfimcPqKYVUEb8od8V6",
  "key30": "3Yh2gTd39CLYCD5LC9BdfH6D3WCLNC7Jsnfja4itE126TKPPRoSb6FmG9GMNiUcqZwtVU2CTiVN7JGyq8BVcoVy6",
  "key31": "5NaHcGfQxmYUEnwFP9barVW1kFuSUynETv7oGGPKvK6VrKA5m1nHfVeYxm9DRr92ViHFFqcaSLfKUxCXRC8AmLhv",
  "key32": "2rDpq2hhVBToqzHvmtNRqq35DTmBX9ncst5DdsDGYbEbsFpBnF5omQ5BwmmvtKn1Bzi3f1dwpTtPqmVdU1J8rRbo"
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
