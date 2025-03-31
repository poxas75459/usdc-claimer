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
    "zVSnnZgzYaGHBgDrT7Dqm7rfb9hsvsgGCwTSNdjr8gJghjv9urtQBAP1tkmmFrT34sxXF9wJs4oxdgPHaQLjPsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWYaoL751gPfPyVS91aW7HctqXUg4vg3vSXLfM8p6uKkXvVRCAC9GpRKT855trnP8pxkz1Sh9vrmKtV7dENjaz1",
  "key1": "3HDVuXS6qtXoKWroX3tT8nrDmWoQ3B122KXoosAjgRySaKWsrFBD9cV39A2RMJitRV1nC3oVq8VZmB3pax5RHQXd",
  "key2": "3FLKb7VJjR5sK7eTJb4LU2gJTzJptWaUJCBWUHoHXowhKPkxwk81L5soWAZ4wooM9JjvZyutAF116cvshh1VCNwo",
  "key3": "kwRA63dCpfL1EpYESNCyyaJjrgL4pEbGDShGFLfxPzfpiixS8wgiMyVqenBxmVj8UM7WXu681pwHQSYXLwVQPLH",
  "key4": "4cyg8Keymm1d3PJeZPPTHECsURPXXYxCXfzE1sJBRh4m8g2bTLCiDsWZbZnxo1Y1oNfP4ZB9ZQU4zU5e9G4vLWLK",
  "key5": "2XbgLHJWXLE898sx6Y9Ks1i88E9apvkArUDVM7EXdVfhvyPZt5JFs8a7NQSr5HKN8PoMX62H8CSVEeEDxnUmx7ok",
  "key6": "4tnfqPyizr946v3oyRHFJUmzeJ8dxRy1F4uC4DuKeAS6wDaKNVxUpfMAd7RsevpHfRPLgjdrwzvz57wCHBDWScti",
  "key7": "35ByDDNQmZr2FkBbdm6Mv9eZHSA8cYbXZkTdMB9Crm8yC9Ao2Hanx6kpGAUSCQJxyJerRPmdxa8KxvW4TeKR3qpd",
  "key8": "2rREHL27Bv8FpDA9MbevDYqXtAE4h49ZLSRS5uECSL4LFbwzX8W2Vtq5q1fkN7QGowXNJGZr11nNRwM53hpVLCvV",
  "key9": "3EfPnqKi4MJYDWhCpgbGVi6r6HPW67zm25eFPARYuUHv7QyRGsxcHZjsEQ3FC4jcyg5V7KfkwVcwoogNwU1xkoNj",
  "key10": "3u9jieBDySy7LZivtQwPhYMjrrvzcF7MqNEUWnQfLFgP3BH1GFUbFJeoFuR6wJw4yAujrPXzsc5MN85HhvP1vXD4",
  "key11": "fv8vGU8gMtxXF8U3z4idAojizZycv8vfPC5SHypNbTvKktoN8ZvDod44tHuDEjDnVi2Dfuo6EjG8kiiooieBcGj",
  "key12": "9U2gqa3q6KboKkxokLJwGn7NVAZoDnjNeuFXMbTwf1sUAihG9AFXtJ2AWpDcMteMGP4PJqbK1m5wmRJV9cbHWfM",
  "key13": "46wSd6pqfH7tJpNuKiYzeYjqbNCLVKBiW71ALcFzdXfcqHdW188Rmf3bPQjBNCswsaEi3ngpG3BR4g9umcjkGND3",
  "key14": "4qSCaZqhgrPCuY8f6N9cViFT97797bwPEAQ693o4bNstdyqZ2ArRjYuPAaFLyqhiMC6G6kMGdZfTWmQwjcMgxKKL",
  "key15": "5PKsrr73tiXabqzEKaHQ5xZhfnVtYnESD4Q1JjAh3ckzz22cQLps1LqsBvu49yYpbVx5JJQ6PaUdtxqKBWzb977T",
  "key16": "5p71w4We1keb8WBuakjJEhN1xnpqkuYUJ1XtUvXRqLgeBeF6VJZwUwywFATwZFMGo2pCA8PgQigyrSVaekd4zuyL",
  "key17": "4aEF2uTUqPvZwU7EhfDQECjuNfpW6gMA8TxcitxVHnxv7dSBLj6DFFfWjuQSeDTwm9R7LVZ1UBrQBnuaxyeF5XGN",
  "key18": "BMUXUcFoc9Hs3L6x2EhFGfeDfwwzbTU5VsSu1S4wkhrSZhz7xy2pZ4wbaLFboyo4Ftf8QocCk9k6oZRQfKbAxbt",
  "key19": "qTRpuhAX2L91CHd1HsyQrrWtvUPaF2UBsv8VtdBc9YEiMExmPhNgVAJqSktPrwGEERNqE3SbK9UzuciSD7Rtu1X",
  "key20": "5gH9c7MuEuVb6N55SWAqnF4W4nbk7QznQzsxwyDvxjcrNyjH1eNcTZL8F6eUAScoq828awTmVT5vgZcMqPzgouZW",
  "key21": "4yt3Raa7DfiC8koY739qF8su1nBoEx975jtLwGzz7Xbti6QD7YUrpUYzAp4bDxd54d3hB7RF1mXk8WLz7aRqyqfM",
  "key22": "zuXQkHV9ikFVaAZBQddAQtPQzpEk1g7RfnLE8DMemtwj5X3hoJAF4mmbJzwSoiy2PwGVKa154eqyQ2TM1Nu95MC",
  "key23": "zVwipPZiBLkvcfrATiJU4yK3X3XYqmFcnStWzmy5g5F8A95NAUe61CNQYVXAQdQcquUaftwDjRQ5yff53ysrgh5",
  "key24": "3g8twJj394Q7pPKcFSUSKZuiGyam4LmestizmayP8uCd6FC1Mh4LCvbThCMK5XkgRjtH6aRm2wFyq4JhTTQ7727s",
  "key25": "54x3fAbsC8tGbEc525bvDB1mk4dVFkCBXvGyvc6MVuaUNNZZNzAo2MjteZhtdJXSXYgZsz9Rh1NvQSwEs4Dig2bd",
  "key26": "bHKw8RgmQWcQpBuJre2rBfKM8cDopY7d5r4ifXYfim9PnZ3ZohtDbnzYBCfwhFPcedryBa79hjt12ScyBHFKFGe",
  "key27": "3GQ6zZxPn9sjBzkqcmS4tXekJSWh8RgSc6B26tPwfEfhDA97QK53NzVBndz5HzyZNk6V4BvLzU7jrQ9LnxyoHJ5K",
  "key28": "KW5apXwBTAPgYhbxaBBjggZcpZ1RWcWVLAUkDyEdCYwyL9HtbzdPA4YxB1KBn3m1aNU4sjxu3QMUYKVPGeyU3sj",
  "key29": "2P7rCfXomGJ1zJ9ZfY5RNBgpSMNcSwWxrn53oHstmgXMimD93n6jQPYRmjfMQhZycScFm5XQjWg73JHWskoNfwmN"
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
