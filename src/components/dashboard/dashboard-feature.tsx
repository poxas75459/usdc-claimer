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
    "dQCtae1Kytmp1UfS68EduLeRQTA5X6nVhLBaVt9Bi4sNQwwvt75hLZQZ6c5JatXexorwit9DFDEELzE4pkzhVLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJnNaSTAmwJTzYzBLFjUTxR2trgPSDh9Stg11AA3itwMdcv7N3A3JmK5ZYAAgi2BMrNZZA3u1M2nXAQ5MTxGykq",
  "key1": "2Diztc2vbJ1q9MbWUfA4MXTe8Giu2XDPwHi1rnf7rAK2R2pvA3ZeEcqAvG9VJW2Qk5nQ2FRXLJmaPTWH7do4Ny2r",
  "key2": "hi1XKA2eKJBZFUZHHiDVztMujyzm3mAMuiA1wLsv2bsxwoRFAtZx2VWSD7C97kCAHbfydcsnjv7MowUEGcSYKZy",
  "key3": "3CUsF84NRJbFJuEJLV5om4W4bEYav6k2q3hb3W7RXxv4JHj7K52AhDffx5XZinL79fbWt88rE8yYgwAg9FxFgsJf",
  "key4": "5nNc8G52kJN9u4FByn9LcbgaCbAtxC53bvqt2gMWzNTc6VE8hcf33mQXqGn1LffBsasdBozHw3mgJ9qsApqsF9iX",
  "key5": "5mtjdFjSWXW39fqGuqggX9cqWoVAwmjRdkVhkCWZ3ZnJyVZyzfDGCMnEc3RBToVYsBbuPz43mWrYVZQDZAMWgXMr",
  "key6": "5jg2jogXwgtQNmWMqb46vT8NeW2CTFhyYbeuL7jaDeX3B14UjjrPfkiHeTBPCG2FZV8NBwLCwmafLjapMM2yowDz",
  "key7": "5A6z2NLJSD2M3EGEiRYjavGai15TQUfNiZaAwwnw9gpxLkr6VU3w6W8BWwYLQqYtdb7TXh4jZM85bAkfxJhfh1DL",
  "key8": "38ZdDywJbcLRRx1a5z3WMXP1xzs5w7HEya3Jqiep97PRsY8GZ5vXD2xx31siFk3jXcDGna7nnNCLYr5tVKka9oox",
  "key9": "SQKwVwyTqcxP4vVCziyfFNxn1JJv37ohPvLzS9PGWipv4ekgh7Xk8xF69btikCx2nPErkwxSvASnhCx5tsxHCzw",
  "key10": "39Exa8o5moVyHx79xs4YZJYaxzooznDRapUaFmc1RyZDSBYD5vUNTSBuC2U7nYnvwKW1gN4qs25TC1KZWbh6rnHv",
  "key11": "4474vRJTALakLuMMxnucWLop4M9UsyyqfRKAQ4snyLhtaSWbs9jNBzB1j1iwPPHDF4mwEiduXC9e6n2QaQVzDdfF",
  "key12": "5XtB2wwpH5YWuAj3QdPAvBQnn4PH85wxTMu1MxCoTBKvFZdbuaPsM8UySXJCaEfdpfatrWmVdqBHLBgtMNd2UXR6",
  "key13": "2vk2LEFXbxz5mM7Piu5SVdPCFANZQt47ip4WS6MwY7sSVzWzW8EGidvusw4An4vqK6WMpLLBkMT5vzjmB4ak3hGq",
  "key14": "3dapxbgu36VdDBByBTfL2WSXQc8jFTkfCFtKwkHheEhcsh1KmdgqpmFTmyXq76DqYv3LGpeTeQYXbirPfNhFtBd4",
  "key15": "4QPcr8n4NzztXAg1Vqj5Ar3sZNF5kmHpJTAbg1TiWw8ptzAFDN2jC8WwU33jWxeRFHwDrEZoDjS2yRRnZUSWxJAi",
  "key16": "5EtRX3xAaM8DhaKsjjqsmo4HtdLT6NC6jg3ahXAeLgqFMQG9bCC3ucHaH7GqT9WBfVq9mda2SoMqoFjuDdHNNPPF",
  "key17": "5cw3rCvMwwdUfATXF9UFGQtQpMugx2qynojxeFizXE5NPzzXmLhbCdHmUmF82ncYEf398BoBKoxuMoN3cytBzoXQ",
  "key18": "4XjjDH6yDpg4WZwSpcexQahYrskF5AbiKfFowqAZMgiT9ZtXib6xDmTsdyVnTqMEQG3Mz6cHm17KbWbRFaiPUG8K",
  "key19": "5rMMpLJhjmuREYwzx2nG7dRDLNSUpEWt6E3Jjwe7ZHK5T8EubCCzA8n1FrrwNqHBpGwHViB8DWfSQFuqNZAgnUHV",
  "key20": "5EHgQbD5Qrbx6hPowJUoUsV2qKkxhG83LCgPvUZQyPib4uRqRRSf2skSMrG88wc7HdWKPS16RzrTpTVkmkF6HxNN",
  "key21": "3KLAGCsN4BrdJ4z2eBgduJNAPgYQCuaHur1M5PQpJnEJCK5Lagzte986Huh52JkDnA2n5g5H2MvftK3GhxDPMj1n",
  "key22": "2hyzMQoptPoLWnNbLKe71txRfP4TECYnsUPCEVQJGwgk6JhAaYdkb6rw2KPECe9hx2JtLG6noxxQe8Mc6thvbhh4",
  "key23": "3YdCL6USgNDZok9URfsbbwRnMB27e8wsgNARM5oR8vYWuH5NKHEY55cdpxPEJ8WGkcKSBW53L6YMzd9NENB1DaFo",
  "key24": "DoWBoH496CTep1TWQubdS1CKDrqvWAaXESs6LQaPjbeSxyj2vZ8waptpWAdYAbszES4SQiifTekm6n4tWkSP6cF",
  "key25": "4rfaHxnWdsZEFRv2v9XX8DtSAkLbJag3XJ6GaYMJjPRXUhFNG3QFNaBjttXxTdEb8B8pFmHtbuqCcA7R9Pys7jbP",
  "key26": "5AFbzc5mAWdcecZpoF2vggvkZKscmnsRnS4FbrCbtodmn1cY91yk9zbX2L3YaQBz3XrCyBiX5vCorUKc2uxff4MA",
  "key27": "5p1XC57ADUYH7aVzsrG3aFPWdjq9fZY68S42drSHA9uKCZc2MbeLLwq1JwiQEL2yLgqxktcj6bx8SKgUdaxnstV6",
  "key28": "whm4wKZ5DVKmxsERRMFG9sEkPJEKDmmsZbuwevsBJgQgAvEPoqcr1MxNBfdzfZZrSkmTJwFWuFqx9toHJTLMxkx",
  "key29": "49VZZvJ9dChWgjTcmyktoK68qn2JvuMfU4FWVHXfkpV7xghpGdsaR98oYFTj3mvnEBT35LhWwPesZndSPyeiCD3J"
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
