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
    "4xuJiTJtszxCp3ZvcY5Z3PGbuRUG2BpBh7PpWuNGJfH3U4u42CGjYbpRpzMrFHrcxBQp6a9fRpAtP7e7tbHfu4S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdTEF7HCbiF6YfqocizNU7oEGauY8mqcCajnYNifUGbC58dxVr4BG3yLjDWWTkYqWpyAFeUXP28QNBR6mU6wz9g",
  "key1": "4X9TfUujzgjLYkQRdtEKnbSCHjULvQf8D7Ycy2az1JGpEn7WVPA2Fooe6uu8U8zbKJC1DMsLzK21e1HyagpJxQnP",
  "key2": "4k7vGrAKtAc2yeZehDXVJqN5JDQqFq8QJQR48z5xGFJX35K2sQkKu5sEC6hF858waz2SfgcxQEM6yAt8bSQ7Hfpo",
  "key3": "2eBtrMeoUny2K7sEW2p4bCx9LnJaKJWQWptj598YgibYYg4YkwdU9VoSee4ah1KppZtNS9aNhPmoyQowjAxevsxq",
  "key4": "JJJvWE1wsUHMGGJGgqbJvNdLQNEmAsC9umeTrdgPsPXQDbqCQSWRfe9f9ARfdiQXD3byxJPLjHX895gM4oyZjUc",
  "key5": "2Z2KdtZiVQTb5SVTeTKriLVuRrHR2BYbcwkdsqqXmecAHnRngX19nADnnneweMQwQDXjzRCsXJFxXYvCopeFo8cR",
  "key6": "3oxzcxquodyptkw7C28jdNzrXjPnGbH4VexyvEoPDtJjZJADtYgHDK588Y2ywjnkWRfQhpf1W7wRG9xXWbcgPruv",
  "key7": "3xnmdqKNoJSx4wP88m5Crdna5FhPrn8jtNLuvajwgz5CuBMfCVGY4ZMPUSn26aQwyBetStfaZqLZ8NHWo5kTnVos",
  "key8": "4cwmAxb5zYc8A9RNGEJuxADzyGo1ahtusLr7HynqUs8mNqEUoXURaKrReugf7Y1fSqcziFJLoomKBXLvAj1fW2gE",
  "key9": "bwdmMCpWmv2pEuEJb64DCG3PBC7vzVSPY73p3zuc71vxHUDRgTcq6aUbTWZvmprdM3rqqe8n9qXp9nLMYpYD8eQ",
  "key10": "39yoVdgKnjeoDWryFLm2DPcru3tMFcSfFez3M1gfUSiSbU6jCgeoisyvvMtyU5Xgzxjtcz9pFD2tiuKYBM4YCA7X",
  "key11": "5iLfwYwhwX85CQYA7J1u2gC8nTp5gGpLWZR6ap9phmNDLNa9MUTorGhsMuEKfMJj3eX1uCgH8QW8YqWfVvWxuK9q",
  "key12": "r3e9z5thfNAKWcL4zn3ScCTTmetjvuHFX6w7FARwS46eaUFU7vwDiWCFePJh8HP3xABQK7yBMWTZzgQTTKDAdhf",
  "key13": "agxJSYFT3bCTxnq1Hef3oqBD5hv93gCy3K7uJf9MK9ZouVf486gEjn7A5hW2J8KQFjrKJkW4bzwkbCmfzpYtuTp",
  "key14": "52A1vSc97vZAu5c5KkFLjyc7LeiCdnsEjoFXme1nNa4LXuiQzdktgxHNfCwjvipP4TQ8GueiDZUxmxt4PWhw2WRR",
  "key15": "3cEhdvXzBFv6PQ6C2UWk9aBLiZ7L66Pzhu3dW8EqJZKwhP5qRV2uge5VNWXxAVk54iNEesRdtgWdpNMvE6EevYws",
  "key16": "5yDPvpQj9zaJCVthLBnZCpZZSvfqKAPAjm69KpzkNs6sowwUkQTNDDZnbe3zhwWikq4sDj8KG6MDW92ygx53gcfQ",
  "key17": "2tveP9fS3doo2MnNmww6eRQ6ZLhSJVLBuU4T5ksMf1YuxAsTwFY7V9D6kv5jWMMZY1Vdo77qZC8F4RAQeP3nzD6F",
  "key18": "53kGEF8wDj1DuintDKvAqe12AGxd7FmfSWbGoh5zFwvy1UMVYdZRARApHiWWNPts6gyuMSe4Uas5Sxmf3qxY2Pet",
  "key19": "5zxEWoNXXGQC6KMGXVD9dmD92SvMYLxoykeE96J7t2K37WU6evsjHFGQ1qV7hiBBNKaBeQBM1yYdXCWJoeWpSEPT",
  "key20": "4whJS4fH5juf7dfpKboM1XdKKsjD1XZLJf9h8LBFiKpyRDTVcMK6MpvuriUaYNJuK8zGyErtTNxChrRVTdzAYGhF",
  "key21": "46cKXGzW5ueUb5bJsmud4PycN7JHvvoEC7Vf4yhG8XuamD6yzYY1pZYSrvgefNAPrv8K2PUENA1yktiaFMN3Zm2z",
  "key22": "5sZvaZxDFf3gRhroMFRegS49cXonZDQ3vaWD8P9vV35vRQzbaAaNti3fgU4AsTuH4J8yP3sQvgXfmJMm22QPX3rj",
  "key23": "38inEocaWKBNpkJAZoQMD2AW5B1q4JNocQnax2VuZ3qkMswYx88BmfxCXMKbfwTDs6a7rmqSonqvGsFPxtDLMwjq",
  "key24": "uAhorN2rg1pQ6DeHWcFn27EJitXVaYj4YrdeoRbppDfNcB2Lk3AnjaRN976GVD5w5qkJFhawCNiqTDSRsoTuRhi",
  "key25": "6SiYjkviEaxeKYnbm76LZowTpqMUczDmA9isrqQY6hDXujxf1FV4CThzuTrVYnoXiFp48fcbxPDS6G11JMtdBEn",
  "key26": "4d4BwqzLU75NiUQ1jQYB8P8RYfe3VWXbj69E4C41G74mELAxefFeXc5K9q46gGAmsEbRafD4NZHNKsB59UPWCGwc",
  "key27": "4ba3Cp5Z6iERiBe4PyMDp5PhyabNf6ursHa22CDnopp2SqTapQtiPdEKf4G62KzmDQerakpcBwnsa1uzCRr62e4g",
  "key28": "65k1QduLpY2KeNH2YaNrgg2t1BhpWnanXhYJvvSU4oxv5kFQqFiPt63tC1u2v5QLhwfjwghPnu93ZienrTvQfitY",
  "key29": "5eXLqP4UVcBX6WjhXciep5a8u2FNFXoTnq8uE36X1QoC2iY3tmG1nbZZ2E1VC1frFN2mo8NMvvji5X4MCR8jRMuw",
  "key30": "bE6JMgd5ddW1ywpQDpQpSFvZhtZPmyxqbnuhwZQbNBQUQ2zcb9SdxCxpkf1y2YUSDtrbYhHNAJWTGU48qmWeJUP",
  "key31": "5cox9KLVdKSKWgix7S43X13YdKvDTULLLou4XzG2wAzoTQLES6rA79dF2f4Hk4UpPBMvof1rF9gYYEcL58DRWNZo",
  "key32": "3boNCW5W2wir5fx6hDHWfZQwCP5cEJfEppkMm23U4ZG6i9K2vwUcUCXkptKPM2VFeqrB8fJCBHWKbr189vR1oLVB",
  "key33": "4VFh35fxnkJRQAraK3SMLeneFUrVwvAsoSFoT7wLzf4vHEyQgkWsStEjchMFZdd8NWHZsWbqX5DTvPbeYfLzUaL7",
  "key34": "37WmGhiBUyeB82t6VhcN1ka1WAtqYqq3VHdqNjf27y5JNYvYZnrEbhGYR5mfw4XxV43LoWRETdKiTHFTAXJE3acU",
  "key35": "2kEcxMjneAo9BneVtdtAQMFMZ8nqvYyuDpXFyBHivH1dUP3dAbAgjfxbKUJgkyS9WtSzyEB2K7CmzzbGHoj3NpG1",
  "key36": "5zassYXfbViJk5XhhvfGJ8gQ9v1uuoahVB1BbDDHr8445RM4LWbHg4BBDaiwirzMMKg2tNbRU9926zThtS7Szo7"
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
