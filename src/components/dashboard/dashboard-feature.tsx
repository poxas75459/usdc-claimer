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
    "2rNCpozF3fo5vbo2Kh7uCXAufXTvfHPe9sJ2t2SWH6iDeQGYqqJcqVM6PUAXU5kE351jHHEGA66qD9Aac83SH68U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Xi8iNeQoPwaRM5X1bcozhw3bkn11Vztuj8afaWDrsFAHdueJx7H6qAH6FbpCQK4vbRLNK7Zd5QG5hjwZi7fmJ2",
  "key1": "5cUr9wAQTqo5wgBVFZFCyVLFfTyEFNt1fbvU5ygnNr18xZ1tSBGXfFPQwH7n8nnPkHehaZ15X1nUdYJfyYAE7qsz",
  "key2": "3sa1fiQ4aJfiXrTGU61zXHiWPhfvzWKJasnuSzYw8LsECzEoFww6kgHsLqgL4YMRy3xAh47aJs2rb3x6dD2PLSCu",
  "key3": "4AzhF9ErvuGTzzv5ygkrxTjacut6fPrYz1aWDiN1eqyY92rZqAq1y1UB56fRtHgLLeT4dNQRGdME218tmPTcBfwe",
  "key4": "5jBEk8vyCKauoVY3zUUUitsAXJUeaLSyrz9Vw6KWHMuXk57nT576vnNaBqSM2XnMpQqAjMJHLGtfTTzpj98M9LnR",
  "key5": "5c3WsbNd8NS2tjN4E92Wggk1cVfHRgWUeXxGo9Lg1fZ9HcviwXXZZmsEE5dPqx23FrJaPexN2oFxK5w5ZJthnDQL",
  "key6": "2SMbHhSQvy8dWQDcehw2FnRxSP2RyAE7XUyoLMXEk8sh4eB3c8QPYiU3Zw9iNk9qTyS2GDsPcJB1xepj5akU4Q7V",
  "key7": "5w9D8VbDSwHBd5YVApvQ5MHBRABweBRuqiCpQAtj6ng2Ub4zu8Eo7mnQMr2qHCSqw7F83jSgaraWrpuhRHJ544tE",
  "key8": "2ySWPuDqpotkuD9o48SPS8ir5oUbKgD7TG3F4KVMGSRCPKRQoSBBEoS1mM6Gr8bABr2vracrUtXTEkh5PSGKChkb",
  "key9": "4GXJU8Ah3pBhNGpKNqcJicqmnihcRimKaYZMDtkyREcMLsY8ATCNxxRArdDDFTmbrbDP3RVWACgR2Tt5Pt3UJ9eM",
  "key10": "5jTSbAi5vcUhjqnJnSv2zWE5hGG5YZ3NSuYoBnM6Pigzo3Zc1NeWSnk17VLE8WV6SbBixh5qX7jDmhcDfxvu4nyH",
  "key11": "35rjhLJMVR8H31KQXbtac4t8HdPiKDAn4KaQRCTHRfoxEMPXujWBTB5X1U5cRLW5R6Tw9ZMDxsS8GafdLNb1ZHGt",
  "key12": "49Xs3DTvNoghtZmefC9c4kafDnnnRVa6bpDgCbkMZKKXDAKB59VCBwwy5NH3QHxw4HFh1zzAwRt9Nn9JcWHg8UfB",
  "key13": "55nphkSBHLZ16JinS324UESBVc9S8zcPgKrNV36PF4DjnpP9AYfDBNzU81HQLarxNoEFxpmNsBxQGQGZz2FC6kni",
  "key14": "3sgqwcG1F4VjUqkjyv99yqRvbJA518J5mZyZkWq5GZ1tZhzeKwxuETGr5s8PVNBe2woUNRFhhrh4ULTP6DCGk9P3",
  "key15": "pg8iKRWZPPE6PNoZfRc19TzjL5JeakeXqU7rnWiMNe7zHZVX7KHJZxJaWwnDW2F6nKFcL86RjeyBrBCAxKGwV9C",
  "key16": "4ExYV1QYAG8ReJRg9ZZ3FGo4avS43srkGRKNcPvj1X647D5VuvfHnyinKUcPjBgRrVTCft7Y1ArePUf6JcK9f5Pb",
  "key17": "2PTa9KQYqTXyttZ8sktyhAjd4EAMsdJUF15zi8CFw1dyrt3P5dMPPkrSExucBQjLHNVdBtH7zdkyQVBTj3roJCiD",
  "key18": "5djbJXi64DuajWmeG6fEXb7Wy1nSTgcTtmrHjNQQKHbrgTiRCpD7dJogph59vp23tSkZXbqTUddmAxeVxmE953gC",
  "key19": "2qg6GTeC9TdiJd7sqigfvR2qZM3Z38io9hPtpHt7Wv5kFzHAiiDZ7FjiJ3bfLBFSg69yUx3hZXK4dvLwB2BxKtyU",
  "key20": "ok3XYaeDpg7PpF1nuevPTi3batQKA23nnRhgwNW99Nwc7318uaAD2orSpkFPEdkYHjSxuWeo4YRbfEQrc4wowAJ",
  "key21": "4AYtmuPkYRifnyTHoMgF1ZfZWaPFTMwdyQWHg4bKsmS1XUduTvcH8YBUnZtmt7sSaC26gHfwXr8RkVJyMXJdZZtV",
  "key22": "9bopsLEcjjniZe4V84gxUhykNkVWMCkphvoPVwNSv2RTXncQ7ySkbKLH3oFJngrTMB8PPABpnudVvLJqiznkoip",
  "key23": "5xDYFQA5pG3bYYUcFfP2RwNoZxriBfVP8dhe84wHbezQZerrzS8jvkyn8Mzxk9D9MCu68NfVx27TZFdoa9Yjuzvt",
  "key24": "31JN6QhcHwgDrPxkqwnxD7eUvVDXdWA2zQ25xAAYD3U4NSSEwByvDdsjix49DRfwrPgdLn4nSVdGVeHMgmLpH7Yo",
  "key25": "4nHXXWqKeHd7onaysQiA3Rvi3zY7VbCz8ArUXMN6f376VeViL2WjkeKxtkdKAo9MGntmKHmhDmqpqmEjv61pCKzk",
  "key26": "47aYzgZ3eKokNqk8XsfWr36jbEid4ap3Mg1HGnMqj2MkNwsY486xfXTKoSC1houwjDg1caKq497KxTxXSGd6cXnT",
  "key27": "Fo8ieWcSqpUZVcSrAcz77w7Czb2NiqiVrxLF8QKSP1jSFEAzCGH91JpS3rsCpgXJPPYdi1p7qachfR77LiRbxqb",
  "key28": "2TEYB41e7ZqKFWVbc8H83dk3TJcYimMngPZjHJUBUqZLKcFPbFxoej21Qh6GfsSgex75UpBYyE6xG9sr2mJRzGht",
  "key29": "2fFrad5pv7vwmYabvVLfYhwAFsam7RDxjP1wUrCVYMN9K7ocmRJxX2n5VNXpt5zk5ietJEVnDsasKFvWoQa4soFC",
  "key30": "3QC13WM6t7HDwymQBPrY9cGmvhG93C4G235H9hmMQdGzxgXp7weT3UDDXFcTmdXCiPK55BrMh7zrrwkivXZtN4HN"
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
