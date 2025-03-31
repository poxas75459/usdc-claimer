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
    "5zKtqwgiiuPo1xqeJTWBedQQzhS8M9QAsJ8ZcFKRKV11A54akHfC5fCUQMZve84gapfNz8hZrXosGsFHt4x2gZK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akgvKbEJz68nHpSV8ZVPWF18eUwi29EfSbRmZLkh54Z2UidR1fafbj5EWLMUJeCzXrj5nvyaazZ4SYwUQ3efRzb",
  "key1": "3XjCCKGUEouG84DUeWkRBmgN1W2h3xXZJCbeEaV83bJgj1R7BFThjvR21vu44FDLB69WVuSF1gcESpDP51UWrpBD",
  "key2": "VwnJ7jt4ex1AmBxNU82BQEj6YAYytuaf4EQco8RMnY3srV7SDUhKZiiKaHGBdEMBCUYPenvs7nfdxrDJXD495UV",
  "key3": "2KGujGU3wkqA6vZWeCNBMCaZdxKw8hmGT5Ye9z8X63rekSCaxUHdiikDuFyWqgbw3CmMNgi8GQZnqNmC2KkZbhBF",
  "key4": "4CXiFQygWtqcPqEEjFT56v5wCUNv7WBWJtjYKiAu3FgpYX823QzaX2FQe3CNijGopc7y2Vrj88DgjKcJQT8p9Xrq",
  "key5": "54iREVHGmem5wTHd2PxoFnCxjzs9B8gipkHGkAya3zvWz7Kvn67d1Q1FoWFFmiAmU6Y6CSR5qijHBCoTACGKLjHt",
  "key6": "AynE6F9GNAStVLJjnkJNjYRdSdJoFnvKV3Q52qfxc2mFetayezpA2YKX7C9JE6yej7NrcbsTzhgR7nu34hg3xYy",
  "key7": "416m9w52RRrP51FPHze2QRLLHH6tco1QjdnVnAe4NeeqMB7W6E5nxijUd2JsEgpL7oZSj1M56sG36CfUtiUawgPv",
  "key8": "2cdzYYUxUw4VpF1xp3cEuPJYiHog1Z1So776zjk9MPv7xkExUqF46ABhLhSh1b8492hsxc8hHhBKWFFLmkmKyLz",
  "key9": "2XBE1j2d2aYvFXnDQSwsd2dg9dsvXKqMJieJQtz69PKBF5rQte3sSBjs7JmF6XSXaQKXaYibH5SonbxLgqGPHVHe",
  "key10": "7dg3ms1mdpGdFt4bvF5z1bGkNZFmxMpVXFkEFtFVUH8Xaqu83ZNGNaycM5u9AwGjvj16fxiJE8b3bnc7ZpLSzYi",
  "key11": "5kZvdWzHkkPWEDvZ2qfN6ife2LVjQWyLjcDwtdupFTYy45CXHuKV32SWuEpifwZ1aJjZiYPb3nUwDDvMNPKvHr4q",
  "key12": "64xkXGhYNurEBAdCq7BoZtLSKE2WBSgCgsDt8KsZx92N8dEbcMd6EKQHJ47T4g99uU8ouHRVfxUoF99gYJbcP9B2",
  "key13": "4aBKrD5tSKquk1eXsLkps51GSQygywfybcMZzFLWswQyLRLUJhDvKR6ikSdA75tEyyU6NaJV8ZuV2nNVE1R46Md8",
  "key14": "4dTghTFJd8iqBZomqZxhJzyYXxHFL3yEbWDNvUfFpXLQpENgbF3sG1oknBpFkQbQLgzdX2EM47TdBbH4ZjAg9VYP",
  "key15": "a4nTHEK2Go3zLVM13rZmC4KZrZFmnFja1Zt5pqJDqkKZPwdqWyQhgLMHGNPe13ja3mcRoSQHguWMYxt7VMvB6DH",
  "key16": "5Ey8cH6BBZP9VC3qS4cVqDP6xFLJWf1QB122mmG9ZUYF46q82LQB3vUj6mNarD39zK1qRuj5ms76dygmbjkeumdM",
  "key17": "2AZ1WguH6sRBTUGVPTeJyJSzkCEfRosy3wWQ4BGMTCAsx7NQdVm6ShDiNVe7osJsqxCpBBBaT4SWZKBbZnCuMMDm",
  "key18": "CgTLNcPe7Cu4v6tZsJoPVxvskKqai2P8Wap5ZdJCCy4XH5mvqHRWs9a6YSTfhkrPdchjWYPBH4uPSzeJEMUpNuo",
  "key19": "3kGurP6TccYhe8CcorJ5fCqJuKTXRF8Gn8ipe8qYfcjpKqjcgTJGc7WwSPAV5thgWe5rnbtGTy2fto3aPxHWmQ3G",
  "key20": "2UxZRbtjxtc3bU5gFGJVRCfaYboqkf7qBPi8V1XRqmDrVLToLLBWh5FyEaQZBsFydwrdoVTnLsuu8VFaNc4f85NS",
  "key21": "2aVMTQgGJadji3oWu8zGMWTCMG7da3auTbsMDn4vR4LQeydKAZgWYiwBWvrRE2x1nvGHG2JDSvNc7wazgKnmP2G",
  "key22": "hocnABy3Msm7LnTpaTMayx9hNq1fGVbTP2SDqucauBNNXPAEXBgruzq2gSVAXSEHvRUyntaqZp28ZrFV9MP2wXo",
  "key23": "5qzpA9psZhCTEWXVEHvE2nr8LzVhTu5NdJT2u78zBBnTz6MxSeZ816ZRLZi9vT4L7GdC43uJnuULryR7ws4snBK8",
  "key24": "23MnSiFqpsQQ9fueNCSBxksR6oS2t7iB8NfghiRxQEtnEN38cFGjSbTaUod1HHkbyBC47Jyz1xw8bux541aNFf3G"
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
