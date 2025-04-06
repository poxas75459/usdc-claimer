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
    "58J4opAmZoY6yeFeEJSSPwtWMYZqnH2tg9A13wr929ioeFMkTfQ5eqxFVUDja7D7uHMgeq3CmsN8PGz8YsJ89889"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEAU9ZZp5NFG4of2SgF6R7grnDGUYwsk6c6tLcxwk4PNeUkth6QEG9ZL4TXwEq6KHiFzXfGwo2QDi6JEUHzvgEW",
  "key1": "5AvX2VBLskbNdxUZshpvKPYJjJrZTKdmh2dPyUXpTBypvFSzZXwxDnDsjUk3acSxzfaWWGchN7P2jCBbrGu3ssSU",
  "key2": "YeDN9YVKDyBtgMGmPuYwVZEnpFskZ3opXirKoGeSMYsX6hf9tY8y8uTxKXhULksg6FYSUjC1jghQAvjEzddCAMU",
  "key3": "3RmUN1KSjyMhM2nEf8uYGmjsKvcyBw7VoEcV5AqUyFuWgqc9ckFfkB8FJyxp1W6cd5cMHhPeywJedMw2MAPMyBCo",
  "key4": "4SxR4JZZGWFMncwjRzGp2uu2Q2ULiaTMC6ju6q1kPtVWFmchZZQEgrBJUJ7XHLiuoLuwfUadnyEwTxuW673VEj3D",
  "key5": "5U2SJMxt5sK5D342RpFb9joYe11dzmkJBBxAuDvG9TaSF7uMRAHQqgNiEoDcpSKeQJXXKMq7oE89JSB1NXTxJG6D",
  "key6": "2q5UtM1LBEgESkmS5uVDH6mDS3w1dhuqLWUuVyzZAY8NVoyZKtLvTNWHE5CXjdNi38Mqiid5Yo5253vWJeQf26dn",
  "key7": "iXyPFeHmAnENMupfBD6xCG1jiQVWHtSKGTVod7Eoj8LY1NdHmDpEv9oYoQB9a88D7g2Z1E5A75LqGb16eJHAg2T",
  "key8": "ynTwm7WgEPFh3yvncJHijUhwQa3K1xQd9Sh4crBtoncFi1L14Ch4wrCqr9ERGgeyhrmMMH5FiT2zZwwaGBsbyQ6",
  "key9": "2a4bwNNLjJEcZhoynEeqzL5K7pAYBxxLxuy8fQZFYC58JqMJSrYeUWjLrxztf7eL7m8ENmRYD4efQC7zQp1YH4MH",
  "key10": "3gXyb3tYYJkSbewz57nbrJ8aPzWZCxFRqnE7ZYFZBCryzUshrirhoZLFQBiXveqpnaxYdP7QcFbiDYmQrL8uCnCK",
  "key11": "3vPfBCR7Q7FgA16UKSj9EouYEWeVHF3t2jiFijs9pTzQWr69xkn4pkse1bzqYTj9hLhxL8sv6zBrMzEwoAWwACHn",
  "key12": "667Yr4V1EvBHFUuayBsjx5kpcuUsMB4DVAEJAb3cD4e3GRyBVBqiVjBvPksRfGYkRyusJNwogjmgoH3aXbA8LQui",
  "key13": "4WAvUN6whSp71snWZ3vzBLHbix46SsYLSzAwJ2g967GgAxBvqH8nNCFKLQ7nSsuWyeVQLK46G6mn2amyv6fiQLX4",
  "key14": "124k7Fw7Guw7PusM7SCrttZmyKRsniDuKv7PmRVtdNzfJA42bVCa4rZcKaZwSksTtsyiUafrL2A1znqEgBAdqyFp",
  "key15": "1ghNxrU1zH1dRShWJKHcSggg67vKEDEAE8nxa3Eucw9BVBoyvBvzTtMLzmW7CUcp6uTjTZ5F9LqarstCWX1SZw4",
  "key16": "5dkZtE5nmJgSrWsNuK7ttqkNfCu8a1rRXtAu2FnrLXZuEd3thoLL1jHDeZ9bXWmXDjJ27irYkc8tKBTEjaag3PGM",
  "key17": "UP1Dhv5j2RTcbf4oQqTfpivGuREF4rCWEU5ZLTJ2wSXMhjFthrUgBHuHJdhLDFFyfZcYXJb41Kc7EGw3GNpx1rd",
  "key18": "46bfko27QtX7EMkiNgiTs8hBBqzomeBoHzYTQHsenVQA74dYZsUCeN5ktwbV5fFJ6qnnW3FrSbapJta1NHjh5QNx",
  "key19": "2dX9jtUi4LihYEMbozG3GYP95vTtxKxwEX44rEERhDF7SNi67BstyPf7zaeUH9smkXGbngSfN9qwsH9zZREN38kk",
  "key20": "5gSd5MvJrzR5amkvnxF5QaPMXf3F8XsjTyEHzMQiMc15LtVvXhXctBDP7yzV49BfvMo51vjVkxF9KAEuWaBFtwjJ",
  "key21": "5J44aeeDH5FXyJcTuJkGmzk5qsGnbFwRqEKeHErXjyD4AUF7HEKNNp1WL4pcoSjQcgZnrDAXXDXBXr3HoRs4yij3",
  "key22": "Pp2dczhxhQypVzkSYAxvCt25yV6VCoCRARSc2BtAtvwz73FAPHQm8DL3HpzffGmEuFgUNwFDFEq8RpwQRwuiHBC",
  "key23": "618fKiPK7C83ui9A7AaJb5hU1wVXCbYYSpbfE1jTUZK3VPCjKqRNzNMoRa6fuK5ueKDuHsdso8LYVzniLxjry4H",
  "key24": "5oJYjAMdU3vhRLc1kssRf9VhXX3D3xxqNQFU61A5vurXbi7mtc8DH3mKmwKf4SgxERLJFZjc5jCCfLq5hiTYj8nR",
  "key25": "416iziwhASFK7y5TtJujEGn9n1CCcV61eHxCYua6dxreUewcBamkrzhAiYoqheE8uicyG2jjbZiWUJrgX3XcfJJE",
  "key26": "SN9Lz1Vt972EF5XTHoakef2PGGiAoBpiMg1kEvE5jtnADETVtZDFdLuMeLjRPWxCZWXQAcPdqXnUDjk7JHJcJrh",
  "key27": "48BfuTQoA99ZsMzgS4ViQeZKuu3XCcjWhFfXqdKJCBvmedFBu4vPktBskjx8ExWB3XJuSFoJUpj7RgBkQPa6e1JV"
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
