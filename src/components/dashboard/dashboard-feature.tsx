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
    "24L48oRMMh7RB3hHxaB67rFBtFeQsp2V3aqSW7NCYbNTKZgC2YzfFxYMwBFCUaK5vVew8345zxXti6BYvex3uMi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkBv6dETtc3paWtVzKaxaq6iFCudZHAE8fru4dhA57bwfMu292LFnRTG2Lz4DeHr94NTiv2136Mtpmkw6BbhWvq",
  "key1": "57nP4Fgjt95WKSLMcqRE4HC2zmiswRefJcLUee53vWes3zKx3mqJuB41ZL3fzqoZbAxTFtpPeoYh4HRGKVZSdf1f",
  "key2": "3Dyahb3njs1GDDEMETiYxccHkx9mGx6rR25X9D1fdtiCFgeHnz6yP2fZnihTsYxk99KZ2wZ1e4EJ9dNS2X8iKBjM",
  "key3": "3Vtuuxjxvqbz4fmMLMEZ94wqibhY9PU8qjJFyhy1kYbpeYnnugHWVpUMKDrtV7DvRk6YpVMyBybpR1ptbFKcZ4qb",
  "key4": "4kkzghcE63hbn5nbB5H41pd5GfX5kJpRYHFWr2XgZVPNHR6B2HfGQPsgGaNvQ3sXTubqn6S2BWKsykxs1qs3A3gL",
  "key5": "2gwuJdhZi5w8BUh2pUZ5477WjeaKdimqFXnHtjwscFiH4AGAKE4aUcuznXr3Le1m5QMxPgrDkEqKuxb4JMxjJqWd",
  "key6": "368Er8ji2uZLajQ5WvMGVK15CJhLEi3Qomkc3N5zvhq23F6MfNe2BEyBWG1NmVZeed7AjK7RUQ8jApVhrKWMujh9",
  "key7": "5hKUrukHCqqVdsgmG4W1zoXfSqaoKJXqoTDc8red5wGB5L1nRQdqLzWfUFVTs3hYFnVzAY7x1WvtoHfKJctiqRgX",
  "key8": "2vz2qCPjsZBTKavrtSVLcHtchd1jneFJhgf6JPePHH3CRGfhFH4TSimhL9UsuygtdJYG5v5966t5zH6ibbefmW1T",
  "key9": "4poATFDd14cY9rMmCY8C6jGdfeXegs4vtgXCtNeWF6bHyDUS2ozZahNecDd1C8zLnBj9HcydRSFtzbTk6kHmZCzT",
  "key10": "5JL9bj3ktmTNmr78TTrfuZgBSW7dvR8LTBZ4fGRYLUATnFynqzH8pffQpz6CXsz9i7BaTcT2ukNnaiYpmwJRKjGj",
  "key11": "2WU5hvtwFk6vZ9j5SDhmj23bqKopF5okyMUo9D8wWQKhCRXwWreWNwagu8FArKcz2c1VHdRzqzT3WVrTnAR1AfWq",
  "key12": "2PMPwKt8Gb1Y9BBGbhLvHezEeXHAhUS8aHPGhYBzF1D5YDn5ra31bbwJZaCYiYFeYRUeT6x9JacirCFynZFb4Xqa",
  "key13": "4BZ7nJrcH5cPuoxPGJx9vUHBKPXnwNnWeL5kpF9DQz1is5YsQxKuVFjyixe5ZgmqVfZmLTSuJLF9JCxfhcsyn2dP",
  "key14": "645hiNnoChz1p4zZp6FieSZCiGb1K8BuWznf66ejbrepjvbiPpnNVbW3NKzmfhJ9Bjw52sVMfSJCYjeHjWjeQKDV",
  "key15": "2kCqdkofbjMVaCGgJ1eyJzgviJBQZwHcjLtqR5xHP15dgFZxpo5hrAw8xZcbBhvSykEsc5tbdtJz3WRgvvYjnsqG",
  "key16": "5zg7iJa2AKtJWaFxMkGsyDuWLLN7saJktUoZLFZq7EUAxcoSQ5nGeMyaYr1w9bwSfBPmrHRvyBBpFipAXBysG4ds",
  "key17": "225PMVLQNKA9TCDuYUh2SZ4iKmDg82Tp2Fn1w8Am9Hf7ZKapYteyBtcnZkmqyAigimEJRwBeGbm91VhPKpjCPQxN",
  "key18": "4ihJi4TSY3kC3UuUCn2PJYVYzfnpiW5DyXCCkScYjr1U1Vf77e9yKx7QXibY6Bpv1Y347v8tzQ3fAcRG94vN4L4T",
  "key19": "2iW8rzhBTxdah5aMdphtYeQorVtN2zSCqQ3oy8YF5TrpPJBy6Zc2vHKXBVmeZDQVPMeZA2SjPgbiG55hHtv86kJA",
  "key20": "5SSiPttFkvZhrnKjghBmpsmeEtrjfa388xCLqamojr9yB2R7THyGTRzVu2t8KU633PPdLxciA9gGkfUCyXCSZnEr",
  "key21": "29ZvSF98Vcn55D33n39nFdHDtDnbQsD5sqY4WVnZKRYqeb76Htb9UHv67qiAq1D99w8fNjtvijp2D6d9jNzYjGBa",
  "key22": "XhxsoPKARWrUZDuWcxEfh4DZctEaPUGw5E29MM5FoM3B3uCbVGDfo1wybqhTJg9MVZ4U21KrM1RcuT5mz1WsWR7",
  "key23": "2eeQDFzQpqtW9ZVF8LHPSaCxAoop9Tgy9FBtcr3jTRG9umts2muWw21SwGBY6fjWBSay4MMkAQxZe6QyypMTagit",
  "key24": "54iNwqkSd7TKiaUZhsbx4oTRHwD6PvnQa4oGhXnXZNAmE3TWPVHvn38rAoDVnwHC3ah53FDd9qYgH1jxD93cpJ52",
  "key25": "eJnR76peSqrRBsJxjM1YP6BDNKugzvCMjyR81LSnNKEobYZfhQRzx3gdWe9FNqXwJsNTMa9aH3VZUEEUqmgG7zP",
  "key26": "2wf8ZTTfgCFAn1A1aGQ3opzNPJukyYWGSAWsaZZxLKK95z7NEzU438bLmdijpNLNaKEzHZ1vF7KYdfDwSxtvtTwk"
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
