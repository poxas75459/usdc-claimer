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
    "2P7qU5wavCpHaEDmpyxLq7R7RDzXHwh6FRJsWRjCgMf1SZiPE9DHUwNPVPn4iDwSQLvWPmcaofQgFX6SNg6QziYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "worcikp65CkJm2xDCF4RA1SW1hQYV5GMGiYoqTcZnMK6SzvoMvFQtmBkt6MUe21QPwRfJNT6hzfuA6v3S1Zgsmi",
  "key1": "3RL5xT98yDWDX4HCzwRRGZZXV9ECPhFC5CwcThr6tJPUGEwovsqiHFdf9WPYfjdsi8XYkRsE7oAVjwnvZJRLJrMt",
  "key2": "338kdsh3SpdJ8aSEqfJyVbdY4NyiMvJQEa4GbaGyMCVRkqQB5CHoEkcaHi2jiZuuq3wRmRHXRaz7yMw64snZnzAy",
  "key3": "d8ogr7KmqVXhF61LyEKZok32VbYSpswfvuZNtYbMVa9bPs1dCdSqVtZKhu7tgHy9F9fVzb1RuQC6uQJ1hzkffL7",
  "key4": "JovrsSvr29AULNiYGMGz6iJPqXCF3KiK9KV2exxDHs1H3BuD4omgfmgGzGyFmQbYDcaMP4M2qf5paJw13wFmkTF",
  "key5": "2y8gHCmEukdSekvMD8QepAfdYYcDGsRDAS9jFsfRnTWoH7yx35yATBEgPNKWckMPMdnCfU9VjvEbsarg8Tsxinm1",
  "key6": "4EHW3KqYPaLaJSiwoUBKxUzAgeFFpnyKNxrsgYXCG2jxGDmkr39DNAhVaxnvajZBKVKPZMWb7AJwy5zKtP63gQnz",
  "key7": "3fS4LzvMUPEaRyct9QAfv3s7PiU9WHKTP8wSs4gEnJTxMbrY7Qs1kst4RUiKnYUNofJpmdFaZqDL5rtQsCgppAgB",
  "key8": "3qwtYACW1d8W1qjUoP2sUedweFSAZAoLi9FKrbbMEpD2wAZqvgeSnSohdp2EkipaiUFWwGnRfevXe5s19z6Gu2ZQ",
  "key9": "NzujFHcoMC955EzTes1QkcWpkqAtVv3xF1cxCzCrTxStRwqLj1J3NAchoxmdsVtG99VgYzE1zzTftNhpu3MZZst",
  "key10": "2xWkKkQiWZRNQfFA8RYkHywtw3NRMhFbKS7UjghUKUJS8YZJP2w4iZY4dc7DDej722fFC7me5PqA8PS3puJNvfpJ",
  "key11": "4o3zRyhiTU88DDM7NiqjwuiNbk1k4tYnrEsXqEpngY2eCJEhpVsoct33pYUgJAN9iPDfKLLQoHsDgCPQnGwZdMVs",
  "key12": "4FjTRrgEqCtXGfJfC7ytLErWNjM7RJC5xgvnYbhqy9NCEuMCgXpywdo9SV5wPRPASgd3c1WSLmGdt8y15cSQ8ZSc",
  "key13": "378effxZLxemE2YrWTToLpQzRTbvjPTpN94QfvakCr4tLfD6pfdx5tdENX2qyXH7UP4bia3zVmzjkFyQRZsS1uNC",
  "key14": "38ikyp3ipa29BX8Yo9AGWtVxJKpJJk68hQ5cYsnF8zJciDhgmmzYPUTMJDL9waSb1AUiGpJz21xbMdkyBwR6oTLX",
  "key15": "3pTGBUaoF7DpGmkmb7Pqjj2GyMSPycWxVGzJCbpDWi56oqzHzmrkhPbvxEbxmjXWC3iYqSB6z2PTZSP5AbgMvkiP",
  "key16": "4qeiriU5tkcqGTvT7LLc2kU6pmdKPLSVCvKTf4gPtvgr3BEdfq4NA1TcysSckj5YbL9VHXuMqgQh8BnKAbhgwJyw",
  "key17": "46smV2hX44TZwTcD523hupJfMPwRPiixFzKLGgbc7qgXXmYRbBd8P55KFBzhkPrVA2ZkxKSuLUf7PdSc8ckiFTtu",
  "key18": "5ki5HMLv6643sQBy4j58RrVB94CrSMtd6WULNyRgMfP88cVRHAN49Rwt5qt27g2wSP4UyMaKAF4bLASDNwGe3YEc",
  "key19": "5Aksr1fi2PeM229eEeVTAJmdD1uCHvgbiUnWxqEkU1m8xZmrUKE7dW4psYi1Tb4Y3n7MidZhdamRzpYfWTyJ4ECz",
  "key20": "4rHU8gbJQQh4M1CWVbiJUbkU4tNyLFCuVMcuaCYQLDQtPV5G1KmZR2Vd5gd9zxKRJaucsGXkEQtydnfhFAjW3bpe",
  "key21": "4xRvaou4scWuWb3qB9QsUFsKQx1WigLs3vJ7rVGJm79E5WzK89FqiDv8aQvsXRUMEy3iFV1gMZcPUHmyVhL7qYWv",
  "key22": "2eu7V1fjpZpmMPAjDninR2JEzHYPWfVtQmyQcQyKFqi8LnBgz1ox3aWjRYAhRpqX4xLXMmr8497yFfePQzhmEk2A",
  "key23": "AtyHPWgjsP8QdS25CUSdPBKFDycEJUVhK6SJaMyFSRnpwM17gvXEiLkaGbmRMHCYaPxnA8ncZmzTbmgHVocp3ES",
  "key24": "eLPAqt19jtKyBQd1A6wtDrMQyknTWGZjqLvoteZEpBpEoziVnHpDj7N2SoKdC5BivwJhFjJZFhZjhv6BUeN9rwb",
  "key25": "2FLXTyk7Ztc39KB9GtF3egErWCzCb6hY9V9zPqR5HVt8U4iAkJi2152gpQ1xehhKABCK6vjVjWmzoA9HH73pvsTL",
  "key26": "44Vh3okmt3YjrwdhTngmeeFRRvvvB9N5fdBL3EPuYgm5xJxjtBXNYGPUsHcSCAQg96o2haeYvwKtf6pkawPjojgD",
  "key27": "5je7MxycHFKJmSGKHWYeY8eQ8ZuUnKRYe8qLpzbVAH6V4AvaaPe6AyepHBkczYvZwwq5TyjZph52qBvPi92BtUUv",
  "key28": "2sQfCgSLWGgmqefoSHcjfvoNBZHaoKVFeJhjpKfaT1ej9jtiG21CTrPFUbdEswg6XrmAXPHkcPUY7MhRskQEstsy",
  "key29": "37AvS3VeCDwPCdFM3tcp84u5DF28TeS7rC7vcYAQf4pptpJ5GmNj1aMf737NHUFpy7eXczGC84CaZPKwgwSX7LTT",
  "key30": "5jXVFWwkGZaPLKmTz1U8hXmuhvFPddXrG7dna7KTjM2VAHvgDDQcEEgfJfqBEuE6cpn4Tat9hJc95ZbBGTQ27EuZ",
  "key31": "3hRu42DV5GQ8WEc2h7Tap7oQW6L2ScPff7WWeMV7EX17QnENAwaFrg2pUZLrgiVmmDL9GpxjybpRSjKmf7BssX47",
  "key32": "5fVZX8eJQPJYJvpLLHRhjnZ46o8CYL2X5ZmDezgo8HMfJwCcFhKSYqBX5C2iUnQzeshAA2BeekWFY2auJ1Jcb31c",
  "key33": "5nrDhhMeFL4qzf75WuVziCbV6tYfnJzi8x3gj8ditGuwzNdnjDXuhgkfJmizuruPpnrdkqzA8U6yoPQ3SAKDr8To"
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
