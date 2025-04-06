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
    "5p9Xiz5h3kdFhmTcFTvjERxnntT6Yhpr5SfbvUJNZ96tbyC3D6SSmGKZVTMmrSPAzuppiqfY97oJucySRNZCc5Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRrbd2hUzdinhgsk1ehQjsoViBM6h5MbTpxpEeELHMx5KKdVEYguf8R2GwyewFcuSPk3mfvivckNQyFbAi1NtUY",
  "key1": "4UtdusR9rRds2y9aEvokcieGxZvU98Q8ZBehznyeaMSVHaorcz15uDVHtN5MxqCzrutBzjoypQQH2BiGtDWU5Uyq",
  "key2": "5mjhRyjop1KN9wDGafNS4cXRgF92n8KSYbUnV5Z4bW34yEiZ2AXeS7qkbsMPjSd68UVewNj797wcL6Vdbo6hXqBd",
  "key3": "3wiGa6KLRwYZkJsqwoeH1i6Sfr4SsoTxdwDNg7382sCqDjDgGLup1JW9x1rxANmVsepFPgMuDM8dgxxiByeR1FUW",
  "key4": "58PX4aqCtUcA3eqmuDDqWURFGVTCq8VYUDsKhptWbay3AZRuVDsBPfwcpSD5TrvyKkfSkAfUsXfU8UbRGj9urp8c",
  "key5": "3xGTBbwUnX8BjiLzCfeGpRW2SYM7ubh8c11LZGAmjdWBHYauPS6mYzVcTdahEf3DQu3F3BghTyyJuQQkKCkD6y4p",
  "key6": "5a6zSXZjpEABemdGqqXXLNfouGZtH1VZyoNsiM4GQXDiqrBTnBmwf63kDruJuPbQHQh8aCivURHDy3EirQwUmEyn",
  "key7": "5EQPjk2F3rjLAqaq7H3USLvfDzT7dEWcAtcgK2xFecP2MTpqHMvuXpbNTNGv5W1dtwouA36UDBbPftYnHkaytwgk",
  "key8": "4wvYQm6j1TsBMwe9bGS7re9KMNtbd5dpwGe2DdaeiKY69AgbhTuPc4xChdVJDmnq8UqQEmn5E1zUyzavu8zmYXuk",
  "key9": "2yvqbXxS6PhHhPTEMUmLWtDZZwJr6bzsucMKkfenTngxGFe2yX6HHkA9dmWmQP2iodsLF1vMQPkAEEhfEv38Wb2H",
  "key10": "3FQEdNQH2CyFqEsdRkYV9rxXEftRRqcApWnQqGgk69DeKtHQ9EYuDh5RjPBuLaCLHWrYc9djxTZpZG8TrDbkprda",
  "key11": "3rh8gaZBvRdScErqKTU5NF5fr7kg4piBJ5Wy5rDTTQW6FPMLEJvhyHXA2KzBGPjjxZ52smguTi4mNYuHG5THujjH",
  "key12": "r7bP9YPcYwedFgje4V2bVemAc8tpfN65EvvSiwe13TgJcxpipVHPdfrBeCDDbSRmdWUrCgLZHbiH2MZMEtuujuz",
  "key13": "47eBgr6MvffNKm1mrZG4qNG8EnBgSuY4qgqmT8AD96KeonbNjZZQa32DV2xZjY49RdjQ5h3APhGL4ACdrWS7hgYz",
  "key14": "2iN67oQrZEfCbSJ5kpeykMsSUzNkvw2iUM381yr1iyG1sZWBedv1S9xDkwGX3XrEe1hyxQWQrvW4bxgCzWo9anD9",
  "key15": "4dtN8GovyUGEZGyPPTayWeSXMYrw8jVDGbdpmWAnV4k9WpzRTrKQb2cDBWZJ3C1JUAAAjuSZNVxnshpdeg4ampLE",
  "key16": "3y7qMG237LkUx22Not4kgTZGvbgmnzUK519odRQykH7gAxE8J4Zb9Sia1We8tQejE5H6YeshBA6wc83iSZh4AJ6q",
  "key17": "4oEmjR1XigdfCw9sRPXPjpKZBzSsqFWPeY3oKQ3uP8U3tkyXATz6zB1YMXfgRb9dSQhFisEytqHEtXYpVLfLkWy9",
  "key18": "33UBtt7KvceBdpDnr8sAhWa6oceczxBtwqzRY5R3iRRmig1UByKdP5gunWwkfARCU7riSmRzfGHHAviba48zHzDn",
  "key19": "rFDFwRhVK3HRPh7JmzG67NGNAKoVK7hdX66k97zQuKc3Lc9dXuBFFem6F4HF98v25P7XSFYEeQtJWCXXzmz1onr",
  "key20": "5jrwyM1KWZ5GjRHgGPgCPb5jY18YRQZyJBpS28ZFsAoQtgJmpAmcQzc1KabZdqMpGN1FFBBEtqhDrLaVUP82zZTQ",
  "key21": "4pwCHvJfK8spMy24fu5ga6CAfJFQw4g9yxR6mSPcjHn5S78JS2XFeeJjnaiNYL7XaVb9yptbfWSDapwRzqH8aLxe",
  "key22": "GuA4DxuAefSdYeuh9XLSFRSxzUifemspCwFhNR8Jz9K2qmRoVh9NEambE4ry7JFMtCYgLWYeKJeAbZ8YSiTuQB9",
  "key23": "5SdwjAHVDWXExGU9nvi7fHJPgd9D21GhviRg28QaBDqvBDXybKn3Gj2LFGVjej3nck5HcKX8tvfVg3k6T3aKUpxF",
  "key24": "4BzznAnz4HWE4S9L9LkFWW6hiMRbFbHZxQJS1C3EbEzXvueGd43fwLeW2cYsM7qLc37qULAqiZo3MGS2N1pJa5tK",
  "key25": "4EgV5tCEFzJSYovDUsECVrabh9hkntwhRjmBBtCJDy1jS5E4upGSjvn69QgLTQdFj6Fwj7e18o5imAbpPuKDTLPy",
  "key26": "3qzWJcPLCYX9cm25zmACTmWgk9eyVTuuxd9jeH8uBQxS2wXJZCoajEDpngL7Mao22cShzUnERh5oi2yYmGFAgAPQ"
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
