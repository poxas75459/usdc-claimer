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
    "3GyuiTgqWEEuJLXeeKsaibk2CRFfqGKKKXcfT9WRdaaRnhnxDsd1oayUFdjqHXuvJ4StLTr7AzGqzejQHTwKamt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz1objmBhJw2J8aMkfFSHkV8mpP9p6ovVv917M7Aem6KRzvA931gFwgkRB3GoF2qxXwp9ohQwWLa1qXvEt8EvfV",
  "key1": "66mbBpeig2HnF69unzkArmckVw88ZsLSNJLGFhcfPWx6cR2JYU6LPuAZwjVvidbKasXkmXYbJ3c3GmKY4K6HvSav",
  "key2": "4X5skRnGnTEDrpmhgTj1Zr9Rd49Bx6tTdpyVW1niMfuksySf1aGd7HHD1RMWP12aWFerLkvN38PA9ufqd6GTdeAg",
  "key3": "2GqaUQbJPeQTGLUnVJBD7pyVVryBAeMqbSePSpauNFF1EwdQgXme2ptaaiDSy7bxFXfKPDdgMifbEno8Xe2dMAJc",
  "key4": "3UqeqkqoaVxUAvxWEQmgkftdCtfbKDfEf8B3dz25b16A7C49HyFVc1qjWzMXXQxmo2dcsqUQMMxSemFRFkPALNNw",
  "key5": "5bTVouXPuSGvibC9ukNiLGv9GqiBwuqLXfrCKK653D8nVFqFHLyPkXSx7U5jeTdi6cnZHpTVJBMzcfuhHkfVEtC6",
  "key6": "XywZndXTYSk2gagg9s5ekEyFuBwobsF7xaVA7ze7H9Xy3opKMsGtieJgofoMKdoFnWSjXh7khe4Xs2sUxs5nxBZ",
  "key7": "3FBDYqqcdihkq2byAUFQpuyoZK7awrxcK8wPf3eub7MzAXUKPpvuLBzubNVeVvVVZ3sHNEFXocVtqC4NXPY9VErq",
  "key8": "W9ZNwcjbrS1RdWYBQJiz1wREuqJ3Fjxv7k8AdjjVyef3tcn865rkMojqowjsCwiD32iKcvRhA6qYrkh3CxGnrfA",
  "key9": "3HAY2f8Tjh4XpTzU6ZuXtSgdLCyLc9gEsiSYmHQ1rwghKbf3s6UPtxGp5AoZmXNsZdmHF6uKgu8knJ5Dew1viaPW",
  "key10": "5kigvBihvM7Nvw2XdfAd9Jtv2iXMoR9XVPGoWzuTSN8vAKs5KQ5f9arFnncXqq2D76MWh31rnBF1GyTaG9gmTfEv",
  "key11": "2yQX5qXHXC26gqmZ4fcW2AtKfd12Qxqgu7u1YMWBQcCkoe4mjm8HLu6rvnceLCHERs5MP4xWLeyQYGPbdLNu4kKG",
  "key12": "3gbd5DAj7H2TdNeP9pWngw6d1yvCC7uNjtC1eUYDQWJ3mSHVReE9EzXLL1MTMTZRiyJaeb3Yeg9hWCvdjdnBFD1o",
  "key13": "yUw2JTKBiWqN4sHap3NT884a2hdgGcoBpGPgfVW8ZA41cfaLyvLAiYA4dK6xJbzSopnfucdsFGYufNzr56L2ZYY",
  "key14": "27785Ghm3EYKYknTzxumkqwRgQo1EWhHwXUAt2ZySVSRxKBiWrB9WxXSnM4C3sNmXgbqEwoAf1tabVDfPdzydiMY",
  "key15": "3N8SUF2r3XifhpMtzKahnfEz1buDQCVdwXQbmq6gi759ni3PYnEswCMxqSc8YJ5cFr1eCPavxnHSfZLAMUS5N8Kk",
  "key16": "2gThWqmUe9BgZFNzfBwazTz3yio5N5LP6Bx1he1eQw62aWrbGQGtMfbb15YDVFFxwYBhLZRjnR7RW7RYqpPmwnFB",
  "key17": "34tbD1a6SDTUQPwBLJn3KeSWjzv4LS3QJyWKc1qYzMiqzWsczP96P42HwQZpshWNikqxANY3RyLijU4MKR7EmPBQ",
  "key18": "4UW2GjkhLShaTTzijEmB7jyePd1KsSdUA37VqbRip1GdWrEiCZs8rqbjAUXzdwkFdMtriMWEd58uqa5QMTw7X8k3",
  "key19": "5zYkg5NRRpzYergxK4WTweMzMTGsm44N76qX7NdxLrbNEyj71YNdmJZwXap5rBK6h5xxsNkGC5nQmk2PoF63ntRa",
  "key20": "5pgXaaPAkvQnLwcK5fgMeXAFfKzZBcM5BFWZaMDSZi5qrFpQhx5nwAEwA2RUEghQkbso5QyGJXqxKFrZq27B37b2",
  "key21": "5DLGYs1BkFGnXQgCk3LEkXZJ3yxGFc54bfFRpHBgF2myzZY4UNMuAJquo2txzB4jLURFqgGMT3vVdGEDgd37FuDT",
  "key22": "2FWf7DkAFcrEmVqhK9m9kmrstUwZbzd5pLEsUnyq4nNBAGn3tKxqRYMVbCgWTvwsP3npqJC3XpY52ypyPuvRibzD",
  "key23": "3hdEgxMa171tGCnhLX6qoDasGSZuVahLEqnuBK1vfRhtFyQBzBVbEdV9Bn6ehghuTNyTqYcubKLXzjYoAA1KLN4i",
  "key24": "4t7mHMGZJ2dVEPniDNDrPULERQkJVRcEGavL8kdVLV1WxXD4NFH9y2nashUR1e3RBAbHtNYdMQ5q9n933XosX3Tb",
  "key25": "Ha5eubabUW947nQAbuoTMNMved9mUKkiyHLNEU3t4AmZA6CnxjvPm9U4uv4fZUiLpiMf1hBaJPH1LmCr6W1PD6j",
  "key26": "4wWfCAPyVsT4f2Jp2rGg92staXHbbGxPBUUAwKh419Kz4uZgYm4o6fFhHFL9LxV9HoQBHji3Y7AVmJgJLHCrNXf8",
  "key27": "QHTBQxpfWcLRDKBkvRduk5oktu9d91vsnnqyPCG1McH77eGbA8cFmZR8KnC9pq3CfNmykPT3EBmkQfAHL8PcX8C"
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
