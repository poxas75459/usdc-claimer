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
    "DWYGQndw5szmvwSC3Hms2UDxH7gbgECeUKs3DSzjwvwsXWFG6wSfTpTn3eQwG6wRVrHs7mN8N7XG9z779gs9pPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zdqj36obVwgUAxzNKK41kgiA56zXWEb6WQuXpMcxmsMfBFTbM4eKLcgg2T3YNmuifioZzsiUosZDWrRKSKzezTa",
  "key1": "5t8pMDNpWoLvkpRqC4N5SRdLp38iYyg6CE8byDsELRLQu7oV8kaB6HDA59oZSaoksiB2hUBTv7RDuFNsXoXV5HcF",
  "key2": "5ecW677YdCwraRjTka4Xq3GpzxCqP1GhVNP6JMgBMcU6BkQvZHMk22uwTDWxRt3fGqMy3tqUzJvWta1cTtrbpkEH",
  "key3": "544pAPor62fYyHsv9Jh7FuAum2DP9ox4zJRB2EbgJE2Ee3bsA9BriJpwHafrQp7mzGph1oXvAs8bXsH9cdrb4yPj",
  "key4": "5XCP87d7pjZytqMuAgWeEDFCsL9smGps1s8yRtKJDDoi9aLTuY3jXMrTd5qDgZTeYneeVhB7Gee8KgZq2ygQsYRc",
  "key5": "2ubeYGF1aquhmnfW9CzBfkdFAxUr85tZp1UVWinUz5L2zjtqB9d5x7yi4c1LC3cny6bPhRaq574Kui2QVURYKNk",
  "key6": "4zZ8Eb35vYLJUP1bhquUXJU5kEnf7qsJGKWaozp8AkXQkukc3GJP7MYrtz7ngcowJyAi5oj8ocBT9VhheBESA5jt",
  "key7": "FFbxyJz8ubVeuL7WuRGNmfoUCaHRb38fyWBxznyccMyyK84M445Vpkfn6ZCEzvQ2RixLkh4m78ubNscnXKjeB8Y",
  "key8": "Dw1cW3f7DyEo3gx9dgKhxiYLA2jDnC4snCNLkV2rDPgCTru3gGT79E6VUqfKhu7MnWKFBU4ekB6uigCRpA7Gchp",
  "key9": "4iya2Cpsr6vKs68mTsrapRM8nWcqAmjMQSzX3r6ho9ou4WxKUpsmRtVMs7zpVCNtxqXes9ZDcT6yH8tULpTVAV35",
  "key10": "3uMokcezYiMJN2W5QEoC67GW3AUmnaaybiZ8LH4ASZZA4rRUsE6askaAyu5F2xNwXxaMdaMnCMkABrqynr64VQEM",
  "key11": "2nGVzSnWYoNTNfnhGAXViZ3EwhgurDe8H1Hr8Dnfet6aY7VcyWU5Zsd6NN8wYx4EYusxXo3nfAM5tSETEYYM6onp",
  "key12": "58GpP1L3VQJhGYZa911jXcF9EHZ2c6fqsVwvKZnwrJscXKuqVrj2oJHeu1s2ejTwED4JZ9mB81YUVw5TfuZcbUd5",
  "key13": "tLa9JTGrbaNb7Nj8BnoYa7qoMeucte7kuqYE7EizNUAZZfNtzuA9Vmwo48USHiyjvwQbMRq6QAhaFGDz2xPsAGr",
  "key14": "24CyuLdzVRubpq4HMrmYX9TfNeTjVvNCM2pFnw4HAxHuie1xq1mueoYGWaofL1juWt22dPtRVGgrYBDGdU4mSpyZ",
  "key15": "3iyGzytLLQhC7o3imYotAHZR1aAGFNzR8zGcEmpqSt8BXTS5gqvvVnoZBeWSKE4MYkjUesWyNYg6WvoJd2Md8bx4",
  "key16": "CEWCJUmDLNanS2XHbw3yHKca8gy3sgxwKZ12kf3ZyHcKc6PbQ6V7xAr9MZEQpQVgfbJjNe8C1Ek7GDaRU57CsaS",
  "key17": "2h2Sb21rGDmuVdsf1hHvvSJAeLS7FbMnjHRqote5Xz7HQNv8FWNL8pG9fjfaGNkkNAo8zu9cJdc12rDcRKdbNXYN",
  "key18": "49bet5pDEVKM15N4Tg4E7DTbUaU82jJkRzRaH3Fh3xeEVXEynTTSMPPziuRSUt3BC73oW53uyoL3TJeWm51yDgxD",
  "key19": "62Cvc78yEGkRfUsh5C35ALxaoaWbei9Aox5tbrQgH43KokVxWcGUVFJvr8kVUUZifvsbrjJQULThRMPRtFxZoP29",
  "key20": "5iFS4nc4iBYF8EjbQR7g4KtzdVFNKLX8DtUorQDNFju2FHiZzkSp4WBDCz7ji6mU69JXrRpwNLzzF9DdxrJ2bHTT",
  "key21": "5PJ6c3beedvTUfPkmveMXSHa87PrXBG2rTwFV7KPYULzjts3AKNvQiCrHLkwZ1JLNKrMCLZduBzMvMiuqNevmVtQ",
  "key22": "5A4dMLZaZNyu4C1Az4raoiSudzJqz59bgEY1gEVf3gwQMvCJ5zfPDiA2R6HG7CYSaLZNzZ6FnMNhCx7rfFmas2dg",
  "key23": "5LE8e3qosoww1Kba4ib4c7ojnQtWzEeKeqUxZnvGfMSpcem6JwNtJ5Z9QnnNUGwWvRm9icX1aHPDyzs67xDbEMG1",
  "key24": "4tP5Xw3qu2nWoF1UD7G65btdzs6SUeorkm7xsFaC9tMevsJuSs5UDaQwRbypPVwuzyhyK99r1MxdCvvex2T41PGv",
  "key25": "3NvAsBosb6Ybe9FQp2saoyf4fDj9LscjHxYKjuboPxjNDxXg2JbDLgQCUdM6Hmg6Aa9WyovH2e8SgQcfMR8YZfq6",
  "key26": "2cHcmKBqSwi33CyuvTcQD5FYXnPahze7PjwW4NdcTn8YyBZbP8ziKoWjzfePZTwmu2YrRF8GRQncupx6dCCxZQZK",
  "key27": "4ZRXVnLZzPrZBFuF6b8T1DrSHURJFvfEcjRnkSGdJUWkBCVV8ykR4W79MgJHV2d82uNBzK6gsC27hyUWsezBt9Kk",
  "key28": "5A3pGP2DSYV8rM57z2cqsk4Vus6E63uHSxTbB9RtHMRygNG91mbrq2hy9EvvESsoz1bVqeqhmVfpLDxt2ry2QdvW",
  "key29": "4Fw1ncX2fuV68Vnme8Zo9GhggmpFhJRJW2cLG35aZ2xjRbLfo4GuksNkmjG2tK1wYe57k11uKrYJenrqFD6cUuZY",
  "key30": "2WpafSs6cpycfcTGQV2XkY2Dio5B5vEdmYKCj4vzhvAxYjkjfdajSoqzUbugfQWU6PiGg62mLSCcJ2EYMSsrms9k",
  "key31": "jmXMTSWy9stnHN7F3UrUC4d6tfnVmduM5Q1xoqRbAgMs23GPuMeSy2VH8BzFtQxHFabnG4JpaTfoXBp8roDQofj",
  "key32": "4zttnyrvQD5Ras7zkMStVUYNSU62yEs8JoBXxcjt7Do9JimqHjhLNAaxNEGgoRB2y7aSMqDfoMEAppxfzFAQ6iUK",
  "key33": "6o9uRC1VmbBJZesBw8oEA5zCoCvZUzXRWD2tR1u1gqMVNb2riDDYFwPEdjS6pEyXVKTTakExAQNvaUJWrSKSjGR",
  "key34": "3JtWf2HVWoNxwLVtVF2jxSDxUKSKsDVDoUMvPGTpzj8mgqiByFFW8V3m94ARBZzZ9omf2SJY4VSdYmNDL11ovhhg"
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
