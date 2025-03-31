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
    "2N3STozDhM3mhpnB3rxb5MXeB3e8LsDQZaTsgmbQ5tL5ub3pRbo9WggZSMtvW9uKxcV54wYp3wwoTsKKJmr14Fue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gb5si2mFnZwe9TmBQpnnYV7N88EE2evaRjzNnDrcHx7fGHssmuuHwoboG9TxCZtpEb7LDMTQbLsVZbdEkkmNE1B",
  "key1": "4bvgfNTm5nDLwXtuXo6juVXXJUm3j7YNS5PFJGP4wy9VjDykiqda2PTE7cGtPB7NYPvMaYr7JVqrvMsQdGNdBReV",
  "key2": "2Hj1EbXRRvb4CT9GsywZ3az4YSx5arbprE86nYsmeHm95AbSuHEmhMwhSrpWpkt4q8tFKvcDZSk4koR2Z5UsxASy",
  "key3": "j6FTUSJLLtqkyM7jVVYb3FJxfYPjC4g2fSFiQytgxtWekWyZPNt9XkyzqNG314JdKst6jALMSuWzsFc6UP2uXjU",
  "key4": "nAwz7osgpWfgfdZUonftAYi3GY8t59KSMmLpJGXyFX9egwNknr95v2btqKC6QHmq73UjsdqmkbxeCFmGSuFJAt2",
  "key5": "4ZiSeP4xQYYf16FL887NerGXiphi5dQoWkLJAXSYCf14117xX2upRfCyKN4VNCNzJWqbf3jFYAEtowu4E9ZkgQRG",
  "key6": "3ZFb4NsDUzKkddmmtbCryWRqpK94JyVRZUvpCPtzQFztTeiUdirjYyiaDFk4xgCqgaMGm37KbBKLfpuMZipY1Vs8",
  "key7": "3UqsVS6pfQJBbQ6R7GkraQ41FStGpZY7LsAdCVVWJShG9Nmr3aksJdvsBM8o2GxpEjBEnJYVkxHCS71QmQXPtL7r",
  "key8": "5LeJ7ZLxg1znAXkmvJjSbkhaDhmUYbtxdfAT9FduDVuFeLsXGoW5977ZZodmqUB5TdmC3sowrFGfEufRSPU6bDXg",
  "key9": "5BF7a7Fz6xDhGivuDTfiHsUf6exYARXqRUBkXkPPMPrU8rqwenYXErfo11U6ACqeXfSNwh3k7NUSEcuizvKDgqFm",
  "key10": "3ioR74iSNqCxuBo81zGCmgtnk3MGvkALTwWVuvzDP3zXUZPyvnda49SvzGUCxamWxji72YjwPWaD7kuv7Nfo6YC4",
  "key11": "36RVLfARt4dhUC5SGVZ7BreQbbuia2TVk8uepoUgmrphUEK45vpvBHgKURfornquceTNYTDApuA3W5qYrvh3ooS8",
  "key12": "61NPS1yJpzX3Wu37oovP5KUzhXHm93hUprh521g6sQpawSAEct53v9Nnw3dfUbL3HtoV9bHYhtSu4ghbiDRKFDJq",
  "key13": "4jb6p75DzW3NufF1XQJ4mJFNYobKPrjKHV1RUvjBx7dPVRct6uzCGsydERnCpr89AB4UaMUDrTyjzjSojyFycq9K",
  "key14": "4uiNFpfpeMFzTXsnDLhRYEREgYo3qdT6cxnaXH7xPRfJxk5aaneiSoje36nYshm1o3XBifETbpbJzuG6erxvVZoP",
  "key15": "4z2EB4uQNcfL8iJ7JvFpxoLcPobfbfp5t1MfXgAhqfVNLr1Xe1oSz6cFXPkUhbx7V99YxfML9SR8ZSUzthgdHSsM",
  "key16": "4sBkkoL21WfSssgvVgUwq57jS9QnCtCdLGdaHsEeMbZRZUEMEUbeLGgmQ9YwB8e3E113jxdupt3W3HU84nFjh2MW",
  "key17": "3MLEHJwocz39BdRv3ELnmsdD7mxSZRywekej3uNKtY7NXJTNzHSYtKYtjuyFUBPrnJTmAVWnQPJ39R5BouR9gMfg",
  "key18": "2TuEVKcdzyuVe1bN5a579i4WXcojA3kd5bcVvN5wbF9rPt72bDvfM2TyxjJFPAFssPdH7xTgivvwiU5D2P3tnfWx",
  "key19": "2VBdHnhBpVySVb4AbHYkWb1kcYEkyUPka49vgirvGLXMhpjgPemjiYp3E8TEnPqSKLo9EnYQiVqRLkbRr5r3nmRD",
  "key20": "4uxPQcRhpg1f6acLrkG1KFLF8yj5Ns53g8uYS1RYSRVdE27TJZWuehtW8B6Lb5oFtRMR1fdzt7DZeZuAyVBuns36",
  "key21": "7dwtzhYMZtk1JwHp6CKbGpebb1kMSGV8XNXCRkpnYSxN4N5ePSxRkrPM6BSpK67fdP72Xes19kNVDqKoNBE6beT",
  "key22": "3gmpyxSTusxxSzR5SadzmVhobgZznKTkiyT528aRV6SFD4bFFsB581sV53d6zubpRD7K2AmCB13oAUe7g6C1omuy",
  "key23": "3EvUX5aqLdKA1QxRZnmu6js3xPbMZrSNQMkqG9cuQmt73nTqLWFvXUpQqBRcCWMwZe4ZabK9qem4gvEo7NqJK9Dj",
  "key24": "5qYkCxR7zqAxhf56ccctyYtSk8cZPigx9aPS8Dbi4pbZDgcaxhxefqpwSPDd2xqWRsaV2GJJTppUtveCjUZrPp5S",
  "key25": "2qq4KRzf5aiztyC9yYogMb1YaGxq525m9WaQc11Jv1ZQt9iWqceGKE8N9xNyQYNNTrUq8WK8T4CKJfbjmFaMEpTK",
  "key26": "3DtzRrCzQMbZkvhKQBJq439VCAmY2aPC4MfozPcxy3PSaTRttrKbDRsepphHCVyHmKmMn4A6BpL2Aui9jHiZuWHd",
  "key27": "5MKAK454JXHHDvVZngjtVSJ2AtqsvxUNvztNi2izWzXyPBxsYLJpagwjCwTJ8vf3bjkPGNMkCsd5YU2MMRsBq8AX",
  "key28": "iSmeKp6E6c9wFrm33e9LsHjCJ7gKKpqyx7GFuE3cPug3zBD2FUcg1mJsqaTDTrCy4p8bNPXw7T2MfzRAseRdZ3e",
  "key29": "5PagXcwvUuDZVRmcMN4thXvyp16xefJF8wUFSxeJjLMkkBe18w4f9qGAxbFxNGU9j5AZeuvQEEaaA8vnXomYCLhJ",
  "key30": "xahbAzQ56csach1rQuVqT4fbTBnR8W8UQ5eiAeuzVgtrv5sYaehCnqqwZSg3ej9MiK4dicsKekgo2qNq4GXDvjb",
  "key31": "CrorgL8FK4mpwT7qCBhf2zXAuvtr2DMqE9oL8cAj8NMeAv6HSzVkzZUqDhbhy863U8XN5e4WsU2RyEJqfG9bkRf",
  "key32": "3FhAZEk9TFgFQGxwSmnKYDKgm4RJZdVsvmQiGTDiHfrA7rnKHFHgfbPujn6r8baSEhcV59QjbD6ZCmUe4cGH6cvJ"
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
