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
    "4KkdBBtZRLsvVQWhYEwPVtoJ2ZwuAzuSAaVm6zZ9BNk4dfwja6NQas7okUc1PLvB3ErmDk5pNWm18TMv2uRcqboz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fggKKUGAemtWMpTArL15cYrZAgnETnCwxKZuUWRid3BhLStDqac3MKbezbakjhXfsKGVxnGdYYEgMxtT2VGdHZy",
  "key1": "5eXnn7gdRmWBa7yPeDE2UbHapgfnzvsQMKCHfHiEGvK7vWyGtTekXYspvj9w58KN68aZSERem8UNABQ9gHqxH3My",
  "key2": "dRH9X8QyuYhpxtk7fKpSEnfV6f6VR5EkNiZSSkya1Am9VeQRuxaaw8unBsSDPJBaxdHcMWcCkfGWoJaYxwUe55R",
  "key3": "3u5CLDzk6Q5oUr4v9A2EpnCAsptTqc6z9x7Qs1GckAkCbW2VrQaJ5ENNHwv8R1EJHZq4a3U8sZ2SX7vW2KNWoweD",
  "key4": "3JbcaKUgURzUq93GxzKEVmM9cGwKBu9rAMbK8rYBjDjDdMpnnEuZQfPbBx7MQWGLoxXH8rtxLchnrgfDnK45Ntnj",
  "key5": "RA94S1dbf1ib6n46GxGGtsPmQnXPQjCgtoTzyZRuSe5wg8HtWpSdWifkb2z1rUok4vwjmDJdRg9Z38bg76AFff8",
  "key6": "2tTzdLWsYx416RJ6kKnaLUvCKrY2SbPdCvvg44e5QSefzDitGrdgJeNjnsQnzMUmHz9t1YxwkzEPZna1dp8U4tW7",
  "key7": "2JrtEKtyprWn5XEGN9vJ5SjjGEqiym4pLHn4LQkB2weLFNrottXQ9ews1JTHots7gowKjMpKYejKTEPKqQEWHSBk",
  "key8": "4DTvVnx4XjPaYoMVprG6kxkNhHDv6JsR5wgteho2zV4ziU5sX7rYYDUUnHw5uWZdvLdfqf7exgVkECfYfxwPLznh",
  "key9": "21NyrTcTL1XsR3gh6kyxUdgM2PceSyp54Po22yi1gqefa5wcikLhmZ9srWY3AjgHev4TuKrMWxg3vdgAkRKik2jN",
  "key10": "25gd9ZRGJCWh6GzzLauteZgNVCzC8DjknLdhDzTWfhVoQrrFiR1VGspokvyLy5G2pnLaqsn1JwgvuNwrMzLuYJN2",
  "key11": "2a6hvuCcSPDSAHJBxTFpYWKxRfNdCeQZPNLGKwdXzybMxooQoTFWQiKLN5JBG3yjr2pTGBfJuUa8KthQLLrCC4r9",
  "key12": "5s95yLwSbBDdTgDgFSzdfTNXF9Jno7JQA6ZwRrVon3hSxxhFmooRS6iWX7jL9z8ST8qgxsvpSkpH66e1WZ3ufJhJ",
  "key13": "2hg3pvt9G6UN5xinVQfJofesYs1dygAAwYX8WN1RYEGggKQhE5HvM3GjVkQGQ3xygh5s1ZWTXodjhdTbfBbLsa4E",
  "key14": "4dCxMvmXgwyk5J9PC2vMePgbShuXyhePF65SuorwVfEqxCsid4E4EThCUkz5rgznPB83WBMFJGMLULFoUtvdbSEu",
  "key15": "5Ld7V98c6qbfEpGR5sqTezDBQpZiYLuoo2gEQ2dmMeghCX2Q6b4z4oZjuoP4CX5JeKkhcz3zv6qKU7TkrXadBGJb",
  "key16": "4ibwD9ekbWkpCsUNaKirjv1QX6EiLLrqXeR4ZM2QEJh976W9XYpybYw7LwNeik1ucWDiB2S2FSpojdBiXtXfEvzA",
  "key17": "4bBZ1DivePMYNiCv3pu2VUfPoTV8SbdWgHknS98qJY1Bp22RvAig4ZkPpg3q6XeWXztHaw8UzvSaCVmiaUKz88F2",
  "key18": "5iqeVndw3F6pGVznR4FiFyuNpTuXLXZ4A9RgsFVRNJZ1DU2k1MMNd6AkTtGRzHD3nkcckgteDac4pgVbKh2ojcCo",
  "key19": "4g1UYnZdUfNxPaRsvXCTFBnqo3ChnyCoa78XpGFZZjkHUtazDo6ZVUbVpx6fBsZWT51mcpoEdVmiBnCzkFwSLkVZ",
  "key20": "2k4vVgLPtMfxqmHuYPHdxVnu5fm4tdzNwRARVufdfcnani3C43YBdB7HzVS2eFY4RfE5KqTr617GSWy1tFFT3ov7",
  "key21": "5mL8VHkXyY9n3dYVLpnL1S5iBxDXMyWkgWtdAq5FsispJ21ev9DfJ1PmjJinVHf6Ye8gogxtyGKNQRzaeqEZYDf",
  "key22": "5Z8c7xDzryunnvVwG1JCeymb3vngZZNkq2eXcyVr7bgm1UVRRRDPwhPoDj47ozEdkAuLiskVXf7eivPXUhfeKoyd",
  "key23": "2NFKBGZswD4svb9jqTkg2UW54Af9Xdc35MSGWxeRNQVAbmMQvLy1YNoDy9rJBJN5Zx9vTBCc7Zvfkxy9ZpkDLBFy",
  "key24": "5prxhysWsJyFiW8BCzRjGbvcYREqkLqcWkUL7zardMEEx3s6WcTDBjgav1F3zvJr5kLLJBtR3xRsMVX2siWFKtrA",
  "key25": "57fPEHeB8yNhCnuEPnJTETaLmBQ2CgwHxRkHaoqD9dmgkjG72jgVLGtW6dQrvkN5agdZrCYuk66rjyWTSnDCpko7",
  "key26": "2fdWSXryUL854s8cHcVUrP4H1CbPtsQCuWNmgGtDpSDF1BwVzkdw5WSjfy4azwFucwP95qbYZdJ9tWvGk3hAAXHh",
  "key27": "5CzbPMzF6knhmLUFayTtKYsvvbZF2YcTNh5UCWuWspA3zFFiJs4iksijurqS7xfXcv4LrTmQArcjJpodD5cDH6Vr",
  "key28": "4mBQ5zi937bag9397X278npSVeWq4YQf9sRgcmjz3rRJbNnyWAgNm5VhseHaJ2dBdFQ7jXReV6eujxkKMueDJfCv"
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
