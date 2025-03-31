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
    "2BAnnsjJHdngJGiYm7JMTxe2wjBzi2u7JbQ4ZrLPhWd6kkPQkmtbQReB6E5U1Y1fPwqUsrWBkcP4qN5bfvsVdzcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NbYZoVGhC1ugSswSDqZrKhfv6Cmo6caPzXaJhFf7mpRCJeZzCWsZKypfGpJnov6duGRoJVN4Mv4EJTcyPHtfZJ9",
  "key1": "41B1ziifDeagtRmvimj65jim7YrXLQeBBWvxpoQrWS9LWU5SQ3nPLU8KTsHJEbxZrcseVe1FE5Eh757uiBL4C67A",
  "key2": "51Qa7bx6iqdo14Bh1BRxFwKdnMbebhvCiHHe2S9TpMLgapcRj6EE4yepmM9dAmERFeEtqEBq9US3F1gD3gvqnGEF",
  "key3": "WXsY2aisdcM2Wr8uperUsJSLk4q2pzzArrQJHzTHE4TFWxDirTvgn75Rdt4VW7pdtazibzihsegc7r2uFAjQzNz",
  "key4": "25Rdpzw6bQTZS4ncGofYsDdd3GR7tteWq8ahQueo61TCxxEp9AqwPzvJCKJxhVyfXySXXF7DSHv6P9zZREtWtfam",
  "key5": "4wEB2PRQ7MaUsAZeWoaUcqzJtPyyfDWVWxNvHPHqxKE9ZSbjPSjNDKEr6AW68FXQD6tHxptpsqoMzxp6zzg7CXsm",
  "key6": "v7YtKdU3f1qJUBtCnTrT6FAgePFDriRPNcVJXt6dnnZaAiG3XdQmRJTf36areyX9rSTU39X7hbmHY8N1MA5xFge",
  "key7": "D112iurWQmqmbDtFZJLhbirpEmRcFiyA7a66PUnpBddbM7eLC2pZJGrPJuyamYFYBwvcEqSiNggJ3ows7wzGsZt",
  "key8": "2xKuhAzvPbSWEbw1iPB6YUNCv7SxQ9UEkKp141vCjyBE8krwXrqivp2tgvvzQYs9a9XmnUgoiAa9Z83NA4ENHWsU",
  "key9": "3FZKABCEZzBE62ufXYkW4oXt6QpQ4Sv8G2vLH4DZoyUg5D3pMKPBvJe99bD5vbs83VTT9eXqsSwwk6BTMJpcxonq",
  "key10": "62RMxpAumS5FQEUzYQV8L9aztVhDjRNQBtyG9R3y68cxdZ1d4pNrRFed3V8Q9W1munPk4P3n9nmesSRmd1qS6c2P",
  "key11": "21vCNc6ksLz2QzAxrnmWTakUKG9xyfd34C4FUQkARv773PSMBKdcEq66q2MrGrQP2xPg5n2ZXUTc3FuvwbvAmtcR",
  "key12": "2hRVkXterdiVUupVP8mFaostBF7WynMJucbS24tGqpNJaEH6AjE5W4CAJTiEi68qzq4HtkAZH72UZeiNJio3v9S4",
  "key13": "3SKb4F2GuGSm2sinpbC4G6ZnLM4CXV7fqVVWvLrT1F55DQw3DQ18fhNJRQWG9SkR15JTZuUwFTT2i3eYwcZPhrz9",
  "key14": "65ZGRR7dMrDtAihWshwnY5FFGwe6GhTmcJtXTx2dB3HznttpCgp78BrGRP2bx7JLAqybbJXA4hbHTCKQ7eiAYiFX",
  "key15": "5UHnb2vT1gihEcMioH5os9ktjhSaHCE4t3koYJnzfmKj2ckYvSL9ArmmwVfM8Yne6sy2fvxKVpHR3EzqU61eNW68",
  "key16": "36nn2jiFXjM7JCZiKc9LxDvc3MQnB6pNvFcLEQ3VzoD5fCqfV6QTcZStNDKSNA84QrTzvaSmeMcDFLSLxTHjNTED",
  "key17": "4AJmHtanMqDivUvXeSHzgpBFgtDmXxUYgKtCruqe74kUL8jftcVV5ifGxWKwvcxt6ggrz3Y9mbefCDkSzARmLnvd",
  "key18": "64EfUuns3cCZE49tqSMb2zthvB2n8fraY8btQ35zWGQ13vQNF4L2uS6PdQfcJqQoVYawMmEBjdzKKyrsVbqL3CFb",
  "key19": "5XoNJYVhAqFrhSYsdvNrCJJ6Thh5CN857y2LxfowfqmmcyRQ8WgCemuGQEfgytnddxjPLQ4RUFEdRu82ZgZC6iK",
  "key20": "EFCvCUeoox3QzD3QLBNEzMMeHRhDJ5BotyasPUseYb1JyFbuRUPi2Dbw2ZaxS2fW1Y85CgcVwymMiViXz5jcgmw",
  "key21": "Qx6VxiphZP4aira82upzZk1BU3a9D47TfgUJgFA9Fg3rarVMYBn3SzwyiFispm3ZvixZkzjBpgtrKNynDKqbMzf",
  "key22": "AQXFnDwi5Px1isiBvqQE443rDESXL24rqeU8BR5YUruksn6eHMfx2LV6wx39i28XfvHWVhWhFyziFfRehGjBTp8",
  "key23": "2HnJwYjLmCfSNEZkR1e1ksciJMweuAVAqw32XtcS7R83gevK3DpZax4KGvNJxiht1oDpQSNWzPNsZJzyqX6JBwVJ",
  "key24": "2GjzUo2hBMP24CZiyJ18RSxr2H7VjJwrbuuDeBy4LiC5s6QaVm3hwkUqfU9PsCKXdhK6FmyiAt9qfro2NB9JNAZW",
  "key25": "3TeNVewFx9U5qbsJKrMYoLfJRKbF9z9kzc3pDmzESgRk6Nc9grcywqSoea9WUafo6LMgPzZNaEibspqofyBLgDLM",
  "key26": "3grqeuFqNhpBaePWkNTcb6TQNnmi9oDTSvZqZBF21R5GawypUd9L4Ax6Y9pps1NRFyFiMCH1dLRNwx3o7kvHfiKB",
  "key27": "4CBmbenfABfbYpHoucJdAuaQzRSeb7eZU2wRCncw5ijAZi1gzKzDAiRGS54APp69iubkAouUoZzpeo7fzSwzjKHW",
  "key28": "3vW7WdYGrZCTzZHVpKHumWpLh7DvmBwmdcb6Azb59HDcTJdLhhNsQtGR4xeqxturzKArWiTVf77XXWud29m9hfem"
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
