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
    "2kdWFJjaM5gxqG8hUHZuL6Pu34LaYasYEtRW3DPSjuswZ59tDPX42gUqXtVTWvk7aMTJZPSDtTxjG87JrBa1qUuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XtSaMf8351FDbWVNE5qg3kUWCVBo8hS5cRGo1zxK44kCWSWoQ5YSC4zFX8EzfQjB8HYfzLyraH4SBgFMkUWM13L",
  "key1": "2ffyWGi969Y7CuGKMKNj8gxPAuxG4tRuVvnuJJHwpbWgrAjScfiYqYSRjefna9wVq9NUrcaGQUnTQah52hk3zMAu",
  "key2": "CmGyk6fkEMG2A7qzuqtXpQp1eZyhQSGiaXeCMVeNc3PQRKe6QKAv4amx4xS9rSipnQRMR1X6UG2H3XL1TcEJXc7",
  "key3": "5L8CYF2hV98w5HvVeAv2aMWVZ4NHpdVsCDFnRQbbCzYc8YSAJj2nX9swfxYGDMZvBzcJAdBzEZgpMkpTAykywRmN",
  "key4": "42ibafdi3ZezxYuxP5vpUvqs7jfuHxcVH4ZVpHJSPdbtZ9syxTE48cuh26yW9UBEaXYp4FcpzdDnbR15cSC9RdRU",
  "key5": "2mSkWP1W1evFQNwFCpjoaCo9bCcg5xUq72aPpD7VbjyKegeQGJ1CaoSxkey9Qt6BGhNDZecnxH5CGGuPhVQmq8H9",
  "key6": "5nxbZZKD3DzuzwmQv5XpTLvfr2ps1rTN9wX7mF2VNofH7Q7zUzjSxarGvxhEQe6s3Gs9vSarVK77EGs8S98jZJHS",
  "key7": "4g5ZzhuqkyQ7PdUNMy5TCR3f1dpEf5xKb2G2AQeoUCZt2bScMirzdctLmDNcsW4EvVfVjUCzyWTgwdgEuKdBiC4n",
  "key8": "4uhuFMZ5Mn4GndzVwDP4jq4XMdb81kVot1cGPvW4ovRUy3JcaJigfVoC3uF1GToPUU7Xq3b8nrQuyAMYiNM9DNAs",
  "key9": "4BHR3sDJuMC3j5R4E5uPLrqnRhJ9ticqSde7RtRRzHkH9cGnfdVsE8YaHys2YhFzJic1xEiwvhtkYo3DceKpxagT",
  "key10": "2sVcoEToCcbzHTQ3VbwgRKfVhrBqdaEzHknLSKpY5ZVFkNaBtv5RdggSFWWajjC3sytuqktjLQ18HQBms79xutkZ",
  "key11": "3FJnQWuJNLVtYkz8LCJGyUq9B9ZoF8sSxDdRVpGbLHh5Y1DdfvDMt5aXcutntqoLdj2yzX9i7jfuRrq3f1bEapJy",
  "key12": "39zahrhtDbAX2utN7ZBya1c29tD1MshLd1pv3yGcTfZTZPFfx7Vk2Av7o61RUeQhm4LbpvjwpZKR8BuxzPZMTMJj",
  "key13": "RhbLyVnzQw8CswHni84L5Ux2VZH4YaxX7EkSiYDYcr2E3PFgWw3KJfcbofk3e8eWh3B1YgbnbaHCPsQPoZH1HEf",
  "key14": "5gd2VXCP4XTcfmkQVwD6GfUmpysauAhPafdXb825ArN1A51Qvup9C165DX8CspmXgzxEgR9U2QGV5cjof1GuBzVN",
  "key15": "r8cmkutT4jjdgaiAdQtcc8YmRd5N9joeZMEy8CLCDGQgp11MbkDXZvSBwEMgPXoZxVRgTQ1h49XXt8T3ZtDJvZQ",
  "key16": "5JDycsu5dQnnXi8ovCx5jQXdH1Y2i4c5k4Kr4YHyN3AG3Z3kF6JxEEaJKYnk94m8pzanp3YLF4sBRiP9BAy5DgJy",
  "key17": "5NcCwKLe49o2fVeirYXHUfRMBR2xWtZDDujJyuvDAAJWh4434BZDy9H8rVbdXccRuBfLNPxVdZyArhqPDzZQG3hG",
  "key18": "5yzdv1kfSK6gAYKvSYKyyGaKxbjzR8i9D5qXnPnFFGEuS2zNHaH53WyoHPWFaRvQY2EMQxTs3unu6qVz3TCHcqJ6",
  "key19": "dDm6VwnhT96AwGwXJJGaAn9kyzmbzuDDSr5frok9kdAvvw33zsfbsvt7kyxF8edguvrGhcGif7qVYedCQTnLgEY",
  "key20": "3vPpX6yVpWphYt4EWShqP36uHgPHQ8fnFiWoZpdnXuyBdKsSZrCJ2V9bwkJsVLAMGwUmx8b17MXyWkv1WB5Ls9kY",
  "key21": "3EZXc7vqkCGXCKMtLeXpk6Z7zM9r71LMysTRbaFvxKqdDJ2tpM5evwa8rT54MyNxwwmtJXh2GEBacFvStALqyPTS",
  "key22": "2XMWE7B1vVTpLYQpoxEnbm2gFb6HyM3bJbWic8MLtkg44eh1uE6xxWGX3YUhS1teDWUZrQsS5dnVBABa1VqBEAtR",
  "key23": "7uaeKkT19UJHVbYobWubdA3iAsQjHT3cYstQR6MyzHQiU3qczNhhjKxk3MCfSxhty2Ux9RLtm12EqAzTy1BQDEs",
  "key24": "64rfZVrLgyzC7kAZTN3xyuE6nQYSDow3V2janopV8q7R88zZKB7aTSYKskRtsG2erHTVRBY922tdU9zv6c9dykP8",
  "key25": "3JVjPn78yknXqJXo7KsCWsSDruDTARBrFFJHTXW44egtTfDBPpdGwtswN7t3rm8YmXdJF39iJkGjBRxXtwxQxesM",
  "key26": "23mCZoF3iJUegwr3Rqb4ptAPBwpMGrnxLYatSdfLmtBXhcF5Tc3SCS5J2igbVfNgfegFK8Pkz3f4SwiPcNB9LbSW",
  "key27": "txXWXwtbdh6m8MMZ57GQn7QMoWN1tgaVswHmwiriGVietPMgFXcmbaRWQ9fautFE7nCtaq28bnLDoJDbLX2iQaq",
  "key28": "3NGSEJnANjKPDGRq3UZzeMGDfhhgfvEcjY4PYy3EpbQ59f6jpLMQQfbDh4F6cfLwHMbqgcy5EqCKi1fL2D4RBuM5"
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
