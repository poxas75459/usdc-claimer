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
    "3tUmBWDJn8Fcug9msWzwYuQq9SU69k3pnJJV2UwgEUjkACpFiqsTrFySFENbVmMFtf9fizdcdM5NU8pPSQE6U9Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XPFu5GC9uZeRDuCRbSzprAffs1wcpsLKdEJb3FCBTr47DxNheHrDbPvPXQYriVQpzjxepQBC6DCfVpaiYXqkLo",
  "key1": "3FRjiwPzizCgJ7MByYSWHjw2XHT4XiuBUwTJxsoJoKPPiH2pRysr8TTGhYqvMuWf5GTvKNfshjLrKZ68HibFu67m",
  "key2": "51nUG6oqqp6fRSSEMgEjuSEYzoGXhSuNeM4seutBg92KzSpFj22J6ktdqmvxvRGS3xNhipgzDjkqTxzJhryTCVeH",
  "key3": "4zvxJiMENTDqnB67GvzJtsv9k2N4Me9z4PgFPqCyJ1NTmehYJjcwby5Y2LThzAcZ2HKi8qpKHR1WV4mrJbsA5X5j",
  "key4": "4DGLNbAkboph3y2uhWckJHVYuitwBK5VTwR72bCHciJDhqCymBBBnPLRzCFUcUSWaxSqkm7ANdPJLNrzZgdUht6a",
  "key5": "23A1WT8KavMG11PHM8EgNR2fkpEjcyc3F5XvVKoydw7159j1ADA4tJjeG74RC4jiNLo1nqCdkGCVp75BoFNjYVTT",
  "key6": "4CPn3B223aZ1yNsGxUTPsnDVcMvSeEfU46Wwsf3qpcpTqpsvJPJP4J2278LbHjkCFDaYFRLTwTfbBSdz13EC72oJ",
  "key7": "4NWF17H18YuokPXWM5hBfj2abFCEVKZ1RQYzKbqu9rGqJ5nFzoPSS9S1qpWGjmBTYQyz9BRF1y6RAkJXU8uuKntw",
  "key8": "4Qib8gXyJwxKeXAQKjUYT2UwEdWhHFvKTo825iDLfoZNq67wh9xwFkZTXCBuTbMfV58GavEiQD2bJYBArRaUNJS5",
  "key9": "4Q6AxTJ5w1M9uJDhmUeFs4F5yxGxZmtoqzg8MyP6KQi7F8Htt7bY5HyocVXMe9gDUPgcCAYDVrb4RMyqhwoiVoe8",
  "key10": "3PbWpNJziARkSWtqxRdZKGzgArEfw57jWFCkcNyMHPXpVZdw3CYHfoU8wHVXUHYW3iA8CnMxrEvuJWWJP9Ai4fLt",
  "key11": "CVUDt3UxK61mRYhaPdmupaUEgFMhAfddHsTjvGFcPoRFd6pXkLTtaoBmJA9H3agwy6g2iPuTuH5cC6ZpGgWKFez",
  "key12": "3NfGJaW97p3rTab1HCWbhr9qP9RXNQtTqXVtscw7AdzAcDrv6HohyzyV2S6W7rorhDd8wUxDfeRH65bh5U93Bwx8",
  "key13": "vttTJXnFtDn8QCfsQMiGAPyQxafBRpYKxsy4AdsWP47jLXJ43i3cfrPojGW6dizhsUk1VrNMy8ELXqs88UYXHUZ",
  "key14": "3wRLeoyHrg4aoDH9x3sT9Px8fDDhxj7auNYqHKgYUB44rsm8spJPe1U5Trja7r3WS5FazwjRuPdfPXBot2Ab76rb",
  "key15": "4tDbzs7dGHe1YpfVSiUbLnsd1Qk5eFMjjsZ5u51cszA3pH6NL4nUxaMVdj2otjsdgtK22Axq7C3KBANP71fnwrcC",
  "key16": "5NuNQ5XrLC7nS6YRHPosKvJfdB6whcFxfttwe6ybXEYu1QmBbsHvaFiHmmQAteEwH4rYQDafPxTzHp6AnU6TFv15",
  "key17": "5DSKLkkumGYeWam5bmJj7PAUGuD3rwmPdJzx9xsVL9ftkV75BkcjMAWTmUmNJsEpTzAwqk59iu447q82STx6aNLC",
  "key18": "4x7zkWRM8HKF5yVYmi1FT5wwQZdff7FxQMVCrgJF5vgEs2BBbMA93b7Ua3RscvqiH9zdroZXGkQMNFpjANJdDHJS",
  "key19": "3QYwUwrvKLagxu5cf5TxVLJcCoBPWoWbwTDigJLRwu1F9gcSnQgDAMvRBLf1rNwUhqG9UwBJcutqegdByM8emCTE",
  "key20": "2dyg1JmfbwmCmV2xke1F75M9JYXmfsaSFeVeAdfnEnTn36YALQRg9RuXgpijpYTNXUJoKmQGPf7J9tHAKtomxTDQ",
  "key21": "ZioWKPftKhdMiudJcHWzStmQmzMjuXG6Nqvoo6mhrPqRTPEMNcgNAbAi5kTdsjb2WpNg7vTqbLarDjW98vkSiAp",
  "key22": "uKbb8TKWPhyJG94MVB55gBoDVJtpyDTk4RbuzoJ5icDAz6b45m2yAeLv4XxnbQoGGfLh1Kuf4naNniZQyUDdyiB",
  "key23": "31NrZkXUZFF45shjFaTz8DPAH8iP3A8VyXSYSHC8ARWQYBMHUMEDhx1zRtLb9sH6GRbZkWwEaFNmSmpDAZbAAwR8",
  "key24": "455CbNAU61pp42hvnfrHe1HyHQaWmKLm1TYefHE8esrCZg8ScVtsf73twcjD8iF6LSoEoafVyUvXu14odVjxb6zv",
  "key25": "64P1oYkmMxJj9X9DDeRBfHtgAVNketwQTRtpc2ogGBJT9wy3wTzYoz8C4U4Tm5sjya4GjGTA3EMT5G4VAJr8iaf7",
  "key26": "xoV88MQkmYAfLzEmRRE8JRpyx3UrZPwryjz7zun4BejZpdcBchd9DcTjx2EohARrJCNs8zp3NBW4jVC7iSEEk9X",
  "key27": "4SKshFmXuzrir76vTntPNkjTeuiokjYdBQA2D3GGGBEjRyh7hWWpiEjZc1LtKsTaiTn9vkTeEcfDjaqR751x9X1M",
  "key28": "Lx8V6kik4p83N6q8B2yU7ajs3joRUfvKjn4MWTCVcryjDjjsfnyB22cMwAEEaLgMJS2kuyi5a28Hb1yDTYTHQ7p",
  "key29": "3XpQ92TfiVTCZkBVoN55nuo6xjHK9bZJU6AgZeCnHiBbjmSZgApUoceZWwJjPgA3SrwB51ggzDR1z1FbCJTg29uc",
  "key30": "2up2CTZbxD796yPyzp66VKZSk8fxTsr9sG1JgDpkLh6yCJTqjuEznLwNntd9yirjndPp37YdJTTZTFnpxEnR6gu2"
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
