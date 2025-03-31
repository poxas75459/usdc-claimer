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
    "4BVxSpXfiwyhEm5eCmuRaAxevtExWspu919yQzwWf2wx2z9dEUX28kx46neKR4FPefbGn8uTSnooAAfvMQ37w2n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41x2YafA9NuzUZuNWQEZjimKz5yBxA7Eaff55ESifeKz6mhtT341dvWV51GGi3d9DqHPdKsi4Ag39myCDuQFQzjb",
  "key1": "5JB9Nff1CUxw76Vg6gxzhQESxDBWthtB54VkAayJhBZg7ru5HXaxV1Z8nYz1HgjNq7ZYMGaovW6QWg6mjskpi5Ea",
  "key2": "5T9nTck6WMJ4dacstMNXnCKbr7XoyAFfWLamjwj15MKJqQU4MfLBEb1C77iMvpM2EGSPztDn45YRdRGMLECskeAD",
  "key3": "5YtN6VdwTmMu91K8triCLXpHuthcPwHwsopH3Ao8EzUKf3S1LJnAH3BBPyd8HLmxLWfFBHJeEWPjAzQnxufbgX3U",
  "key4": "4rBGEoyTcj96die9dPfCo2z66tJk7FgA5eauZoWfPYSJ4k1rsDLHBJFyZuW5cPj9w7RxQP1qKmzp65Row81eZdGK",
  "key5": "5qvSVTeYxmnKJEhaUCmhQXEZ4UM3eHx11bZNQJQbbSAVk4QNWmFXe2KuKeSfbQxkeEv5drdNuwVd3EMvKhFZ2tih",
  "key6": "44am5mKbA3ycbcnJjA5Z5JEEB9Fr5yeeoJzeHaSq7wSgY3VxFn6TXEMXTJQDJxfPRogZPLgT2gzJxNZPG5AC6Y38",
  "key7": "2xZbAESdk6Xz4rCwyDyuE2fv1N68Pn8PfiQKDBjWucd5dCA5wP5gHHnwnWs29z3pTb9cvzEFSUPDpipN3EMTkUQ8",
  "key8": "y3bYV39ri8oHQSWiffKStsjrda4e7W5wCW3ubyUtAtygLUcUkF8ytRU28GVn6bEpWvhyJh3NzpEW8YpeB5xfgj9",
  "key9": "5TcavmiN4Uu82ZeYP21UUebcvk8mhuLJykUeTAJvMFp1WStgpANan9mrmSLX3qy24HfuAJkccateSFhSXeAx7AXX",
  "key10": "127FgwaeYt3FHpLSBbuhDGuCw3AqtL1drBcFeuqSdTm8e6SeF4CeyiA6b5CuGhCZtiQGADiiakW4u2tv7atCqdAQ",
  "key11": "3FCJiaYd51HPf31cG81P8k8a32947G6EJ2sanTpaVKxtP9djGw23m3Z4gshzkHT2MmuWNn79rPMf2fbS8BboPqh3",
  "key12": "m7Bcq5Cx7DMMMGKjjZ7bPJ8VozfjkGgWnF3JmwniDTzoh2YRGBdzFVzvFG1d5RmPWV9GzudvnkT9WtyDYDxkvxS",
  "key13": "5q3pyUipU4ghuAASSLurC2heLELPwYNYTuv2KWV6TN9eVGKbHqeYkHEdK4UMi4XZPLQcJuxajQCpbvhZXfWCwjNH",
  "key14": "4xtrd5gN5oHVvC1TvMAvnR7eEJBQhc9tcp9XS9b9sSbvhEmmwQ5cNJGKza52wqiMLJ7R4nWwFDDYt8pqJBNipzBb",
  "key15": "2zmrrsu2iiBuLip2NoXEpspbZqePG1f4ym4K9UmfYZHEpinrWFzowkEek4jxFa2wxud3x3EM2ay3ezUK7z2XueYZ",
  "key16": "3hzZ6RkLAYjyG8oxuehErrCGcBhpp7wbrv2eR6DRpv3z5ZtsDmg7MA7hjaEzPixsY9R3kHg14vgbKFobhtMJzqm3",
  "key17": "5CQn24EqMXwPnf4q4uV4MgePPLnFgWXKpDTSAbStYGzivmUCRdwKM7zUgWEXeLdQTzpkEZxnoNLTJkUB5EbQdrwg",
  "key18": "2zXDDx19GxcuqVrwm6dko9oqJWEs5hscw6YPvFDrH1YC4vCbxaZPsxWTJkHitQhKS98V6kkhvBt9fmGD16vmfdX8",
  "key19": "54wHB1tRzH6fs2oodDKMEkFnB5iZspeuTNU2P9YfuN9r7x6Ef7mVNzZpeqkm7g7tUQ1kcoes29Z9PiSHXQ1mkhKR",
  "key20": "2Tfz6HRBZFDjJq5C9k6EmJAp2nc1gPu6iTAdSzAfqvuLNHiyQbs2TJ7uxPcqoiUYjCZoptfby16Qz2ZtUaUPgbpN",
  "key21": "5mofUHAwe7aRLdZQ72J6jP7ySymATbTmBetYdb98gASvgKfDM5wdPNb7UkGb9HJHW5QMpkJHdNi7oAs6huFsNFzU",
  "key22": "2G6EhZfQvMfASwCJ866YJnT1JrBDYPP58eizBywuuL6nVTPtmLgEJHyZrp2j3jJUTX7YVtD1zfVwaAWk47Y7Exw9",
  "key23": "3qN2ef41qL6WWxEqyfQEjWXfYe3MD2xiaQureiQCUgzfhNLNCTLrff257Dt9do4VUDUstu145EBuzedgWKoCmSUB",
  "key24": "5ddTj9nLwsrTiu7VJ195AcGWMCgToAeNxe63foNTV7NP8CcbYbu3mZvaFCoKfQ1B3J1L1KcGvYwtyqoECV1GQEHa"
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
