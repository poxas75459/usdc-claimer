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
    "3tKp8cZUT3TDW9rWzUfg57DHxNq9DPGJdi9w4wgSX23nNkDxHn8aiXw4oJHY1tP3AvFpE6EsXLtgMVzqVoGaP5RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AagyGpKY2P7PPpz9xztLP1rzBwGUkcvgrtXK92u711XbiXiwqKrz6VtotX65WFkRNVbVeTKs81Lu4nkA3tV3Ltq",
  "key1": "46rbr6qz84F7tk1FLE5vFWaxZV6yZWRQ3VYahu1tdNKakeKVsZ7jm6Y7fUsRCuN3UZfqQuqsx8M46V6Eniar6Hyj",
  "key2": "4U4LZ8rJ35eP1ve26Y8GRqNqb5HQ6kSKTAAt4TcTyVvPKx8GXEps3P1aTfHgrZZnX9tpTuQVXrCcA2KbQyDphMZS",
  "key3": "5VMSVzcPTSkrHDeuaEsEhoieCWXvhgr5wGE4nYzXQrP1edtxzJSzdFpzaN9bL5ojtjJPiAC21JykUVqZ5sx4799s",
  "key4": "5iir4AzwA1gVDuSscArTT6RTcaRFmXvtYNrm3QfnKqbtjG7dffWNNc4KjdbQmH6oXXyRkwuGbgjbps1X727Vuk3v",
  "key5": "5WcAVvw9Q7bnnFbk3fWA3EakKv4ABsJttZuTxFJJ5XeMr4ZZsd228Bny7BxAVAPuxHWP1iqvqJr8c6TTZH1nNyBc",
  "key6": "5VD4yZkb6WfUStZLtXSQEijh1mKuQEpCdaxNYBD2n5UHQvqG5QiZZd1F89wsGhtSgAiKviiSQgcFdFiBiJFbUsDn",
  "key7": "3yqywDZTrhMTX2gxypCZsrUAjHsJaxoS7RnoCimUEe9kzNtG9mBRDBkHLCwnS78dziu3PgonJt2Z8Xmki5n7cYKE",
  "key8": "gfvdRyfvbQyuafqJycjrqFyrCxzz8NrEUBWt68okoeSWTZ9YubqgfAFVDhKcHd9cAduw9oV7RaeaYT31EMkLmCj",
  "key9": "5MfvCRmkFVradA8hoFNqVVB9o3TvygD8hNCS9rpFPbg7VAauLJE8UCdcEgpKKWqEm4LfdVokNp9EiaDG1ZVh5cF",
  "key10": "2YsbXroQH1bwMDDGWqmfddLhahskCiaPdhQ3vYCLiPx8JytcMBTbNLC5cXVmpYzdJ1rosahDznRAoHoQSdphWLbP",
  "key11": "b2tAZZNuVYHDPZsixzvAFszrSsyCedkYLx2yoDkjT5ZLLjiv4dLLteAMbn8GEMT8SDSfxYWw8QMuV31tncMsPMe",
  "key12": "26fbZLRn7TPkFaCnpr1VETFYCJsU96Pn32QWjFvMfFH4AohWxfoXz93nCpuf1YkjETYeJszwdZEMuN21TsinLvR8",
  "key13": "4cFBN6RrHzxYZTSEuYPdMbspn5xQqmxFTNzDR5tXdWQdaRGt6PaGbWnCQfK6if5VUjpBihrcfaTtfi6bCXoenrkx",
  "key14": "5JyRpoRnnRSSXkSzmtuV7FAEoqeXZRvgRV5ZT3kqb4JN59q1jwzZYPZp4DpwEF6pgFC8r87F68AsKYr2N6GxqZfJ",
  "key15": "46r4KHGi8iHsCG2RPNeFrkzP6FYWjVUtimUMDx77cbyGrTwAarYpLCTPboyStfXFnDzAS3ykRxTeXWZGjk5C9D2w",
  "key16": "3aRV1hye7NcYkJAzG2H3xon1E59ovgGRRSp3A3QzpvNPbGtF4mLJeuYU34D8rjyXyNTCoGxqRvFZ7kjtZJBWpBvr",
  "key17": "XDmdGQUfMstanSScxA35YqEFA6kHootBCKdvnxb9oB9neYS61ys4FsBDowm2rxX2NUYhmTeb1pihySmgj3eFkNG",
  "key18": "6jRThjfgWAN1B8kWrhTQtFzBM78UBuFiqghF7Qou3AUgpGsZQpzXASR4rvW1EKtw7D9GSTDKw5xsk1vreaZja1W",
  "key19": "SuHrYe1iEwnakN2P1ZZmW6wVTebMcFzMVahDxyDuZWVKbFTCVZFo13bDePTDGkXfAHcNNMg5BohseNivjj1qV7Y",
  "key20": "65UPFPjbWA6rwQYgX64QeNspkk2sdKedPdnizrS2XN388g1pi8rpE2qLKFQoEtxgNfKLrQ2rMMbexDjFuMuQBktZ",
  "key21": "hoRjdCfdQwbRFR61nemmFb6oqY4ToZHmi842RSAYMm2dAQfveUt1X2q1Rc96yTNwQy2ryaQwWsWUMcJyTTv5BHy",
  "key22": "61GcXAro8ijFyQpiKNaqTBhbRcrPT9tKMty5JHYK1qaBwkRoXDWLYsLBbaxDxy4evBojAxCh6XXGBGCiKx7rhcfj",
  "key23": "4U7F45woTufsucbmfjQfJyezNtB7HVuYJJXvzMtnnhRxfyAacEVJu3iQkvAeGaVRiU1rtgWZUf4GoNHdX8DqQYdL",
  "key24": "4ujgzLpgX12TL51eaTixaPC9c9cHT7tLk5FNUcrtZsbp1P4Nf6Ja3UBhQ9HiDSKbuAz4o1EvQFYV7Jkg96RXt3RP",
  "key25": "292SdM9VWSE7qtjS4Cdq2hHsyxxu1GbwgFwV7z1XWzoURWAYmvt5XKpCYemeX9g65u1bfw56kRuJ5NFNWGMnfj3j"
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
