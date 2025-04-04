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
    "57CeJWN1eRsE86wyTfAsow9yzvs1EJnuZSxQAH7aWRWH7hqYT6goUACusBaTsgjLrC1pWHy5uwNbbGyucPzhSYnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eghTZqz4Lnp35gyswZrearftndB1kZ9jdzwQaBGgCEXbd6h9cFXiDCU9XUviFCz4pC8SjQbjXzqTvFvoKn1wwfx",
  "key1": "58gUhLy6MWNEEaVMXKtkooHRMeySSxBEDCkM5dm9HjQXxPzaPpLffeWauoMtYBfpsawVZxVdPCDsnio4yYjpW3jj",
  "key2": "4yY9dazjxtogfEtwBz179UhYHiGxYFxRYUVbB7WxtEeEP6huXp2h9JFDj5J3ddg1pzZSAiSVk4aeLLcYULmNYPJi",
  "key3": "4np2rdxn6WQm9GsjrpXVBPwegxTegp1W8KQbjwsjcYv3B6vV9ig8EMxJmkYcLQGkDk6k9NXyiYobtNNCYYyd9g9f",
  "key4": "2eipV9W33prjqtpXGN5B9gcTK8CVzP2L9bPDgAMCT7yy8vNaCHuPrsPDJNYUL84ruXMXuLrfpYWrS23zKqsFwwsH",
  "key5": "AvXGS649xs8yTxoRxeLH1h3qtisJtGjTZNM4FDaHhvLGQePe4v3NgA23WySoVVQsPMF4buMbSsg7zAqsC21KP9P",
  "key6": "32zLQak5Ac3RvbaQeaUVQUcu4N3v5oxiSgtpECwHvVhBHjrEo9xGfnZSXCdZYxoteJwVAPnBrtVP5tQgKse9WLFC",
  "key7": "47JedSESXA59JTBKWCwLayCTAL3pqJS7MgZgw499v5kYoJyqJCR75i7LWh6PFh6a7mCwHUN8VKjYapaFvTkSB2Nn",
  "key8": "2LaHb3cMJBKYuUQA87xNtp7kLRXFdad7pRcfZehXo32wx1WgkxCTm1oFtwEn3Amuaagvbw4DiX3RmEbxwBqUFdrt",
  "key9": "3NT4R1o2qoQ3BB7vupY1F1rizdwSY7g1aJPrxKUt9uMdQkvGexYB6s8YmKUiZBGT3GZJhdBgVLPPsnzj9soQz2Kg",
  "key10": "3JQXzMSJ1o5JkT7tBy76CcEADCQqis5FayXfxTKumtfaJMC7Cu2kib6GtBDt11cu1wxGoGtVfxkAbZo3xHjCjMfW",
  "key11": "26Kse82Wa5yRRHkBbzBTQK9BPWxvorrhB9w6CqnLnqW21U8qwkoBDTBhGrv7wVuiR7MVH9oZn5MWNLeUDXrCu1T3",
  "key12": "2SioDZ6DPJRFdMgJcH9erSLAxsC1YAvaQDqNewyzWwfjcoC3skWSsF5FHiyA4X2vsKRweeMwUDHrqhzu8tZJfCV4",
  "key13": "3kYnxBEKUqTpcN5Sv9zsp7Y4KwMTtcU2BY8JQUkKHkX8u5zUtsn3ASWtGi2ve8dHd7mqSLMuuZnevhhZdzKzRuXs",
  "key14": "62y4GijqWFp938E6yoyUFcYzYZx6kwTHe4PMmoNez4Jvfb5Siu5bm6chbVb7X5fskVTf9DABi4V8sshycuagpeHQ",
  "key15": "FYXFYU1DMK4dV4g4UjYvqAxn4BVCvNQrWJVJA2DwKWBcdhcGZJGxb8HyLkaX2bqCRns6Ego5SDU2TL5ZhsqnhxM",
  "key16": "3o9MQXFGsb1b9JiVnc1tntABbf3miZvpr5pHa7H5s89v93P4TykNEoPymbXPvxZntCk3FeR9sKA1ied3XSgcyZCZ",
  "key17": "4dt4eNmZgSoYC5vT71fXWYUveLs7ERerc3JVuvC4rUKQUXM92bBMSMJV1fRpEL6ubc2dZQe3G9TJksmEbc9XmBdw",
  "key18": "4JtW4aCgPzQjqXXHEuUjFdzXZfuT7woTtF9HMF6Wmr14DKuubyUZdPGuJHiFSW2rV1ydjRktLPtQtT7sKDT8UutT",
  "key19": "4qUoQUjSn7RGvFqhBhYSP34g6gB1KZbHRVYZ45oW4ono1VvBLoK79zaPbYZEFjheoCgQ6NQrFgSrwktfKBpSAQ5C",
  "key20": "4jTCNPoVL2MtvJPfFqd2wmvZBwMDhRuJeyNbnVCGvRbVVmde633Rmoc8vczUAV5CKLbohXoVqzynZPSdjTXhtBhh",
  "key21": "WYbb5934ioujMXAkjtvznMktMXxvRLS8g3k3Yd37GkpbDHEAEKtZtjDrdNSaCkCvCdqtHV7RK6nhh5MgKG8oz22",
  "key22": "5MhvTtfvGEEQVCJf8Uf1T6DucWG3iSKPjw9JSRXrizwu51Qe1ruLAj7B8n8z7niWw2i7TeCrL6jgFGobys1Joe15",
  "key23": "VzgZnd5hHY6g1qc5p7a49eQdcHF8MfohF9TkjYqCegCPSJ5oDdiS7oALD8m4qMtru2L7tnnUPS8FggEaSgT68VA",
  "key24": "3fbVrtXWLhmy7tf8zx3GoywGswSmNV19otKyr4peandcFzssbZup6Ydje1eek3eqrTW2w96P6xfVLX21Xyt387Qy",
  "key25": "2WYk1916ow2FfRECDzLmUyZVkUC2uRgUwBgbX5gYZavqXsqFChAjPCBWjcn8SCq5BoJLk3Pm3KkXCCDJJh86c5xg",
  "key26": "2FCp8Z8braRXHH524Y7vJjhNMkqy6Rkk5x1utSe7p7AzQewVa25mvZpaqfm2NaiyWgtUwaWn4q2B4hN7PmK7HszB",
  "key27": "2kEixM5CUvMoeLWB1etvmozBirJd63PVL4yLDEzFSz46W7win16ND594m8XbTjcWL9NjUdSUuw8GtcVAYxEYSPY1",
  "key28": "5AmwQcHjFNUrCjxFQSaswLfCeZRNP9wGNaiJ8Vz5PuEWZwiQqX7PmCSyJqsv9DZWs2naPknoWSy3SUnk6D9Cgg6C",
  "key29": "34Pi97wfMC39EamnyRGMATLCgkY11UE8rTUUsyjWWuY8R3jcFk5dtJ1sVVjFBaQEtpBAXn2fHgZpbchh3V4v1bV",
  "key30": "5DRZK9Gac565YYfg34e2VVRPtAyEutDyHyZsL2LRrn3pT7Wi9aajz5Ci9J6pqLmXeD7WMZ2zN1vpfswaRiHqu9Ci",
  "key31": "w3BNnV2E4PTr6ZqW5aebjvERmFNunrAiDQDyeUeA8SEGfZSwkJQLWqbZfoy9rhbdtN2J3nVyJ11dgdZoBgttYmq"
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
