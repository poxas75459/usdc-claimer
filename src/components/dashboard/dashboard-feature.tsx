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
    "3v22eYb3k3DPxDt8tApeww5KiXTt23KiNUBQMBjr9HtWBdYgwViPgYv4eTPSi9sq5k6hRcefxCn3XDZT2bLG8cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5di14btjkG7yYvdgRERyLJNCUGrrfS6YAb6Nwdyp9rYTdGZAPbwJNWxS3S6FJP73TFQqnpajohbbChJncGvCmxdP",
  "key1": "54eM4LBhLraEempXsMb6uWvKD4Maqqn8FVwLxUeNGJnTZ5dRRczWS81vJQXRfVjM7kKcvTYtcKiEFERkLdTzi8ez",
  "key2": "2oMZHkKJGr8E2eAihFDMnjPkZ51PicvjjaVHNRhmKKq7N4AV1iYFJoYNGbSJERFXg7rftcWk3LosNrFcy5znhJsy",
  "key3": "q5is6EnVQHEad6cLfHWKzD9uQjDwo3SneLz8BEsN95Dx6tukjCzMy9b746Vt7Edi3SmiBJuxDhC7vE6j2PApMtC",
  "key4": "46WBRH9Mi61HsHLXhXeR4xP76rg6wi5pyfiN5yqttse76c4ouP8xwixpSaJF5nRCRkEFCYd9KjWA53NdGoyBskdv",
  "key5": "49EHKx3tCpoWGagY5YiV9NREhQpPTDmkTfKs918YMzWZx4o5uwYHd9kfoEcc6pbtsKnDwFvbjzqo3EG6rTMJmn5d",
  "key6": "2dLLStvesBgQ34wq2MynXezBHRsfHGF1F4hSLdmdAC8n8sUQezzhWZgvLmbbYQNSadjsGyA6XThWodpTdC1faMep",
  "key7": "3iMqx5yCiDBdneBTCpQnAgu4Er8LTypU76HzvFunGaV9gKSbNgTUWd3z2XKuU7TxgSUhmsoSCM1FAM8v7NBp5Mgh",
  "key8": "5aVu6Niaxe3M6qgbG6biPzGreJE71uCZDvJNvgf51dkzntfRd49ZVACn98fw3GRf5P2JP5RZybsavFDEXsCM26B",
  "key9": "4EJxKwQ3hRsNNLK7Z7T5Y9qh3CvudACjpo8L8KtnobozLUMPQtxQYnr26Uknpn4Yjyvj9qCvJbKYBeR9446XfwUr",
  "key10": "43mpqStBEs76DZde5GLLVEzoUPJMLSNJgBVSTmj8QhZVcvxNK32VdC7qSYDyA9bRzyi3J833Y6HEaa9T65PzUvGy",
  "key11": "5q2LJypEUMWBU74fkNCdXhD6nFXFw2EbVxxyqUiun5firHc24oeqngxRFVxE4ZScD4aCvU2uVi722YemwNbnzbKs",
  "key12": "2ECnLzb5kixeaNvZJ3oFZcRsbz8XECUUcBJ3fYKfZZZkGo5y2iVVsthyqQmVA4QVtzwfsSrBunH6DDkosWGNW8Vc",
  "key13": "3bLKFTSxRE6YG5HB8LkWbsTdcsBxcM33gJqiMau1QVH6eRuYForPLRHkT1dDsY1NeC1fGbsM9YwqVczaA7oT3PnS",
  "key14": "4GGFf4Le7rZXpg46X3nv9nm3T4kkxmgDfLnmBJXFNz18pVNEV6TiEr2JNzp6J3mdQyKgjJS2htGqepQX93FbsqTP",
  "key15": "3yrpwyXAjEAZEwzsQUzsDAEBwbWfM9rdgBWj39NzHcMMUyFdRZJa8NEqUTdF1WrkjySaSEn4Djx27dSCDbpTT4Sa",
  "key16": "5dPbe9MLbEp4J8h2otHciuefDSr6JSeRMqyjoohw3fogW4RJ1YM3oWBcJujBz9jmBNzaMkfUQpTCR4cSkdGS8ho6",
  "key17": "2wd3ubgLRzE2X3fhuFo11NaiReCYRLfha2MMqBAmQKqb6R27V2cT3yKyWWDrDQz5WjeTxWwkNNVpZGYrLbu9sAS6",
  "key18": "2BMsHVxHYpj4FhURCF6CYdmMTatg14d9JfxFzq2wzWy1mgVKQQDrtRSi8RKL6gqGEbZv2ezsBvBauGnm6AXUqutN",
  "key19": "25yqsPdzQXv4CrAQAaVnbkTW5GK5qZogDLQLg8s8umvwoJynALRAjzz6t9nowv73vpmqTfXtgqG9YwGewYEMsQMs",
  "key20": "53peDXZnTyB7oEyX29Zub9gHCQRkwa1voJj8YzUPV6gNWenBahFjBaaKMGcgQcxX5Rc1QYoxTpf5eCMv9QswStyE",
  "key21": "3LDbD9EZ7NsnywY93yaoFV4MxdfN91L3Hx9qjHNt7Fd5szy4CH6553vkFusmFS441dMgGnLzMjZaHN7TxXheiYXi",
  "key22": "3wwCufK5JJPhmqRGieUdpSNgHjFQEYSzCubAbPvQv3UnGeznzk9DZyrjdb34UGxAP3cEhQWFdMEjE1Htrxy1Mbo1",
  "key23": "56foywyPHoqwKLU9kpb2hEvf9CLiHuXzVYrDqxCVfLg5HHh1pQyxc8A1puheW5kCjfQLjQbP5MJWp2mcFGZMWEjD",
  "key24": "QDNXa5PwZ6JaKewpESvm7eADjWBfS3XwU2ecnfZpvGpZ4Weg4rNodXcS48ZRz6XYFN5UKnNBc8hW611jYtA2zuS",
  "key25": "3CxRJ3dwPphJHqt38BRFMQsdAopmeTvbfAgpFxJDJUu4fjBifGcwjfM6VzwFEFZuNq77nPUTWe8oBCQYiHK4q4TW",
  "key26": "5UZDv1nAPs9uE6Q54EdgFXQ35y339yaKWNgtRFgE93ZuVBXKTtNWXHkvYDHLjqR3pkdfET4XEiA8UJRtxUr5mkoB",
  "key27": "2secRWyKPbpGmWP417bLKLRXNqD3mUkjxn88cGBrd2SjwZnrCUpooyGYWvnrgzvgREtzvJhcC1sNwNDxEroL9oRg",
  "key28": "2y1beWcjqhaPyoy53TZhUNCx3615wimnquxasYWG6GFZx4A5Qhf5uZM9jhW34qCPNjvSq3rfriNi4jMZ2XVLqkay",
  "key29": "vmoBuNBAskWsR8b8JxCmmWL3nZS1d33A4eRVAms8gLDgZSm4nJwkqdTWt1ZKevCYZHbsfU9bUGyiyhYuXpK1w3F",
  "key30": "65nQ8We6sx1emH8FoDJ2gkE1MburBCH2rhegVw1LEXMcBK78z8yyL1QNKcpJU9s6UPwjTYvxgG52ahZrSqin6tk3",
  "key31": "nW2fg1GC962gyufFSp3f8Z35cRb8J1SyePyJYC1swSzzAUcs1ZP9j7g6Y7xhJFFYnP2KyzkCeX4aZw5BooXkbo7",
  "key32": "2bxRqmPjuWeXyfHT1YNhJqRdq31dbBpUZ9KBrik2Km1EeoJ29EBJRKDpS98tjVkFJUXHbxoLiwGLtK4ScuGu36rg",
  "key33": "3JcHmji8yFXjb2Ue3DoBzECADJ4s4v5sYBeVBBJnahteLCq3UVF3KobnmS1yaoz9gVP4hdwWHgEAdKU87ajNAv9a",
  "key34": "MnZiwuKhpW59JA3M7FaKgLGvx3xn6dP9aMa1JfsrAza2j7pwXQWNob1hnk9C9BmRB4cXogfDwrbV9hMsyHx1TzQ",
  "key35": "2W2bbtDDNN3oxxi2xyPCp8stbx8jZZckRSfH6PVMa66rMbaW2bSqUJHTNUah47kvMqr9DMsojf29ZKCuscNhcK9v"
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
