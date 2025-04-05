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
    "CWMrFaoWynZT9GbWFcxrDP1GzthRiXrZHyh4Xhxn6G5rvdgqEU9315QYRmSfg4DyCNCK4j38FCdzUsjT6H1rEUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GtVadT8qokvMVKanHmARsrHHr8P9RFeuGEgPopSxa6LeiG6w4fK6dXGK5AEkewaXVTbvwuUzo3qsSN4PtCvn4Tu",
  "key1": "5gbN4aKieZfR6WCAkpTbr1kcd6p4wosH5qqjcTcqbgV4qEhNpoYHyPYFrKG6t2mEXBdDjripM3x7djQnq1GETNpS",
  "key2": "2zgDBXT7fBuD2C9Rb52bSWnhNbtu5qeKbh66kE58zof6auwV3vBLxWz5g8C6jk1JwNrgBqugrD9GNGkxietHbteL",
  "key3": "4WNecsxox919jnCawkMwJPWbFh9Qmtwv8NNmyibiEe2YxEsBq66LXYyY822T3ARszF5viW52AUvU6g2dXmmuV1Mn",
  "key4": "4GLjCNMdZQJmFs2QWdQTqG4tRcEJq6ZbRGDE4LfgEgZy8GaDC86VBdNgQNFNKvXhTdS3dxN8Ufaiy9fJr7J3zUA9",
  "key5": "4WdVDbRniLgwGK4o1akmaN4HuARw3dzGbykZLKXVPKYQcETnPg6KEFPpbPGcVyrbMWP8PmkS9KMXtwbQDPwQx7oh",
  "key6": "5W9d9ph3HKdP44SroTA1EHrotHWZ3wmdUSekovjqsEsLAa4PAKVDdndMTVybTbzRvv8xFtegamKzB7fVuvEGBfvq",
  "key7": "2gSKvpaQSQfTSNaCTSVpqxyWHHfM6xZEcyiFz7JpahPjtRuyUDjQiNg53PcGZUKiw6DBZx19MrYhiqezro2JyU4i",
  "key8": "4p8pso2yjEkU5ZMdmN6e71qmMxreqCLnW5goLd6PuTUn2567HX2TMkpzjWc6muBY5C4CwaiSRb2tbWWAbVe4C4yq",
  "key9": "5eCbxnTjmBcJY6BxMJBnRMceJsiccN7BDCfutiotdvPJxAFreUN9dfzcLwPP7oDj54fMsGPbUutDMUVrqbFUibgc",
  "key10": "5fgsmujk2P7BN3qBWNd6KVueJJm5P1FmoYCtrr7xBWmZsk4eFHzwnDg57VSVCQV96aS9KCFkZ7xrk1xQ3bHtJ6ti",
  "key11": "33uBVgjsmwm78SvYZEoMzExgttkWER6t28DkHdcvyYrRfX6aKsi6wATCVH9CVK6mfyMJitiCTSVYf4tBid55wBac",
  "key12": "4wZvJJWwuxrvmRm6EZJVXJqZcaSzMcDtUHhPDgw8xhgeZbPsfiAeoGubD7SfYWS7ELa6VxTvV9nhbXQTDtwBoaNi",
  "key13": "3eFDrS5GLDFWc9XEyTwPeqeYo1JVm6KWe4AJfEr23jQ8qXEB8Fs8dxQFaNhsVutwWRL39sKGjJSStPF9sHG856xa",
  "key14": "tAW3KHGZf5kFGgKQU5JCWG7Xff2ZcjM2FtZ79rxEAU9DGBfTT9FNm9GktYdTECVZzQCDa3DqmERfCZNFmUxWyhS",
  "key15": "28FPjz1cvCQnaUwTM4AKFhhQCRNfSkJEpmMmJujriifZMkxDn7EgQnXnSEApfkeCXas9CWAtTjJ9MVt8CzciZGuG",
  "key16": "2jf3Hf9FvanVpq7j97i6cTHbVMfQ7fkobC9Eba7JyPfxgftJcEFZ3SBZGkJqvzinh54uPmRbpjKAJvGfrdu4GbKx",
  "key17": "32XEBPkNN3TW4anpivjwfMVYAhWh9sacCj4X4kNCnqEPXaUnxkHDJgD1Y6JgZRAa7SiCpcT1VXA1AKwseP3Mqg4z",
  "key18": "2ELU4GBfo9YNhijanGYkFi2GTTxK8zQpyAMcroTfnfna4KuYBcidJdZrm8XWnpQ1ffQKSGrAUm5h124LkJivK9Me",
  "key19": "3JLok6FgdLWLKfqYRvX54qGpZwBzh4J3y7JZC7imtQsjRPDDbby6MoCC6T8Pw3RJqjBz98t6Z2JpidGnu3LihSBB",
  "key20": "5FJ1x5LaGCTAgJNXcqHoScbPY8XbmpsZrZ69goTcVx6QFvFL5fFq7ScYSyduZqZSCnizzKwtZwbr6T6VY8tvNdDq",
  "key21": "2rL1U8k2atpap9aHwchXJsWALvmBVG9FpVDYve1FpFBFCRJgqMwynEjf1hdAyPokYU1gNEx25X43TtVuZMPxBdHC",
  "key22": "4Lt85Ev5yPFqQtkYUqm53WywHV8f9uzi3vCeQpLeCFxC5ns5egtyQfBcYsvhu58945KRkMYv4zHgZ8WspgK84Rtr",
  "key23": "49aVvu2RAvDk4ay44ncNpQr1xxyBdn7zQokJsra5DMczZZFBXHDB6xTkFtS75BjpJdG2ceRoZhdq4XKBRT86UreQ",
  "key24": "4LjscEDUDE1d6xGSzpAAj3yQHwyX5oKuJZWvs653nur5hVFWHxFYiMxLBqBBjaDLxZ98J5d5cG29Fq4xcKG3qxN5",
  "key25": "3gnzWkyb6F9BUm3T22N6PaK2we5TG59BT3uxD3vxb6KgsyPa6zRRe4MBpNFb2UtPjftpumA7327r3Vi9GLPQhLLb",
  "key26": "2KSHwjN5mtqobooXSU8YxRyJJJh3GowzFB46VZWy1A3JvmHy9ADFZX2yLkAYCRAsS1z7g3XGStLCqJWiZpye7du8",
  "key27": "41iCxEgawn1uaJTD4ZSdk9Uyn4E2bXYBvznJWbwVZ2YxuinuN85siGvXiPdycVFfcDiU1hL94ygEBqY7pm4AcwEm",
  "key28": "5XNC6ofrnung42twcZrStNwJTXBn6aYBDhAhr4fN9hFnCRrrCc1eUgvwR7Wo1zGv7qXAJB6TNvZ5JAsYkiXmDYJz",
  "key29": "2xbNUhaUpLbp5KD7NanS8VsiUwAdUnVwc2UCyyEgP8wjaqsjo421uMWS1vF6n9XUUbGp2qPmCxupf5PQfVbUmfYx",
  "key30": "kLCNLDYZbRAPqpHWPMjTSKkf2JVs4DbpgfgH5qqBH1rbZe16Qjjivq1A4gTXVRG7dRzWaX6Lw5vHytqBCmzCuei",
  "key31": "5qEYwztgtatEJnj4mXV98xp8iXkKoMVCzxYCpF7t2UHV9GfPzMcH26jFqdqRamm3B5PrBMd6YazBUpfuU1uJ8hW7",
  "key32": "2G5XNZ3UQH3n7Vzwp3wJQ1XuzvZva8C3XrpnUSmh1xazXDG5SsQhczFk2tcVMnWx5BCc873M64daFe5nV868EiQg",
  "key33": "2Uf9xsCMqxRjEfsx74qntCU3qFn9HXmyjBnNMyVcN31yf5VrnhA3vGwbV5PnzWumBFVjXK5h2afUVu4QUCbSEKwe",
  "key34": "FrF2LqTLGRseJY5tfyhgsEe19eB9WrSag9x1dnZyJvpR7NRYk9V4neu6tWwVNgF8sEZDY8q4Kx39caimUkzB85P",
  "key35": "5ohR5n6tssUagMndEtepcgzP6yF9HK18Sso5Gck7vmz5NLxmLeLrFpRuMGhRt8sLmvmtTJsMgKNKcmHECSgmXcC",
  "key36": "4vbyDwk5VSNVkgRz9HxiWNF3kJkVWGYAiVUEVYnFR6rzzWGqwESnrnK2ehCccs3tA9ek5FYyEL4K31vFzwJ2KKW9"
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
