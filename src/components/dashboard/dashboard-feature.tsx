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
    "kuzYoPuzZrMvrjQ2w3M6AdMjhmTdnWcLmxSomaFdK4tJPpWXwNi253yNfMFbqX1bKzrBTN8WDJcsr5BCRudhCdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftr575cSVy3sHiqKUEqUf4vxKwPdokoW7w35o9rMd3kdp9DjHt2NPvVrL3DEc6AYXa17W7r1KfRR8Tbh5mR8pUP",
  "key1": "2ToFkr9yhJ3ndSmy99t16HVzE4JS9ftuc2GdKT83YnTvTXP5DGNwo6tHVJhGww8xBAbZJXgDo1rywTVSmQRDeSq4",
  "key2": "5w7muzJk74w2d8RdbuUSWVnEpguTuhR5EhHb8DAPNBfgUaqqXaXUaVuRyiMkXBMPGGpZgqpyxvGQGHE998AxfdJs",
  "key3": "5YqoRiv1LpEZnttLnJpomSip72snXFDpPDn6564VkAkZkjCwDJr8gZzcPS9iKnY94HzRrZg1djBwVVBdZdk9DJ7M",
  "key4": "2wHHvxruzbhsA2B1G5Zkwyw2gy3twBXLweNa8X4vBSb8aLWX5Ww3G6PfWAQJ1xUKpCcs3fU52buRnvXQNynMqWZm",
  "key5": "wCdLbntnPSyAxTMXWTJ1hsLn5LUdcAPPLyB3Eoak4WxFxsrJrLk6MUCnzZAGYhU4CWNPjhdUdSUMHtm9GHAMnHo",
  "key6": "4y17xiVNiPX2XLSkwgPRgWtieSQCQBU4D4SctduX95PcvEC78JFQKXGbgyCpz6TFcFE4fKjDBB6oqq7HrPc4idAK",
  "key7": "215u6kfjf4jfBN3B97qDob8HstTjkWZJUS7aKaJHx5ZhyNSRjcJ8zmjn2irjvvc55ReSWrVxGzfLKoXqsu5QUSu5",
  "key8": "5bPHfBcH1S5EyosqzZGZBSmqMYYpxdA1G5khwVf7gCexuKGDxbA96ep94cURKZYHs8kBfrtfPgNyn1QmgqMf4gSm",
  "key9": "3T4Kiha2EJdVwZe57fVVUKqqceLauydG3c7utTgzjaqf3XXSNwB5R9VXPcJj1RiPE6YYVuZSVU2aKZRTDm2ai1Ze",
  "key10": "2Xwsj2mVj4g2ipqgbN2QwkRUkEsdaCyMSyqyVRZvQM6V4TcrYioN7qBpGEy7xFryo44KBdPkijWg5FHUDN1ZLnGQ",
  "key11": "2YUnfG8gPFTiAZNSbtfRfHdDPijUNGjqPSMrpcBM79nLXTRw2V4VM2aX1jfia6jeB1kPZenVavbMmKyYbED2r7yG",
  "key12": "mdT3aiCFUKkShWauGhTqmYbP6N8buXP1s7Nn4upLB9kqd7RQd74vkrSY6qFFXdBad5zemRbPkk9nJrspHXDN1A3",
  "key13": "5TiTuvHqcznWD462r9mdGAZnJWiCHJhkbQ6PZ1xXKs7S2sr2cHPyrtjrJpw8STUkvJbWZT8SybdJxseFQgNMapQf",
  "key14": "315LrKuSPko13ARkowMZtSQw2DUzMYWj78xnLjJLznTfskoz7LGgxq4K1UnVnr6pHQtRecDcjnVaNwsDo8msB1PU",
  "key15": "AUhCGWD88ZEPzoGqtxL3ySmWGEgAeLnSxFBGnFmkkh3hHjv66wemhkCsdniUZGBVji1zc6BHhAm2hHD8vCRK22p",
  "key16": "2c5TpxujqXkHfXDsgHG5UtBvMVkH4JC6GzXPKoAxb5UwkfT6joZuqG4PuGuc4cZZG84UtwKf7FpyqHjXE5pqZDxj",
  "key17": "5VSyDccdJkY9ZTdtdiCihu1t2jTk43ZkdG51Extc4cDtQudHzc3E3kBV67c9mBY6x1NMaLz8tNxUoWGCa9ZvZ1jp",
  "key18": "3fE3SxZBQRxddUezJZ8Wm5Yzj5Wa1KMTzer1wTv4Qjbrxfbd3R49LqCvJ7FZAHfFCcDDiWrFAYjDB27JaVDkimtR",
  "key19": "2btnNT6bLKsKAzaP9CjAc5JmxwoEidLNgpYFGMgEHh36HVyLpLrPVYAc55WRAdWmYwqXkNgTKpPh7HQhga9f1DTu",
  "key20": "5oGva1dayUDbs1w5YK6pDMjL79bMSEqJKFtqTi5JzcFkbiquozKzm4dRkGe9XccvRCshcVVFncJNdw9UoTKTrTnF",
  "key21": "2c4mDcWmi3Xuok6LkZJyAU3DCYMpfxUuAzypMpRx2jkyQa68oCLRjdHvP1DJGUtBJF5rSXXn41e3YBZsqPX84C2",
  "key22": "5FbgYo2vVHnE43ET5Ehbajc5udu41k8Be9F83qs9jJfu6Ck9F8zA8YuxAwGGJ23EL578D3EasBho9Q57ZuvFYuvQ",
  "key23": "5dhxyzE28wtxC4dnskurrFyrvwLgZKv6ze1Dvnbz4RZaCNLyu6JDKJwjey5RTzQ9KQGzeq1sNJR3PrQRURccTn7M",
  "key24": "4Brrj7V49cCvRa25Bwg4xCRVTVhobMRPPb249QztsvsNJAyyFxGeLp4c6SSEHmF53KZD7GpquhWVagUKTJxwLTyR",
  "key25": "4ZQfM9AAoGdSUybtvnWGwEohY5aLHxwcav1ABQ3GzzCQuMjft9ntYfNLSqyCNp1etEj1k8JBYWwewZkB6kjcyKQr",
  "key26": "4DnvzPbWjefGP1WAwrvCU7ZVeUsXuuN3n4ZxQjNUiJbStSn9uqaeimiZZMzpkPPvHbrTQGgakWoTKEe7B7Q2NVRn",
  "key27": "2fLvNruoZvbSbZLRDquz3Je8NJuMqgAUvvQB8uxeVDE7AqUVhGqWMtofFA9bpLaJYHVgArwMVcBxojLpLPXn4zwP",
  "key28": "3yxkwCcsHUhubPYUfpjDQk3GH1TvDnaSeakVuM6P2MNqCCn9wxkQSz28ngDTtZgCu3ejRqVkugwCj2Q7cPJs6yFe"
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
