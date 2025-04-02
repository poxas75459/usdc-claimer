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
    "4HunuNxmeS2Sof7bhW9Tsa3cknWX8WYvVpkTNGQ2KHYcPQPPsP3io1L4XrnCN5EtkrG2o1cbrDwFc9gLqDiMt5vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMQeR34fhigMYda9CAEyZx5SauCmohuBnK8aN7iNJeYjzkHjwFrBXLf6zRxQzZGpSFP6p8o5ubKNJ7vhVVCH6M",
  "key1": "4HxSGVzN5JdZyotWe8L1Uf54TQZFqY9SJrYM4CE5Nv9QdEZbruabVkzAESHhMB6z1xC6UGUo2bRaxKbgSwmyCxu",
  "key2": "K1qY68gBeRbtsrupgQDXj4VyM2LgjmfNJTDPJ9n1z9xBLH7jx8y7Rg8NhsS8yM4gyeZYTi8NPy3yLfdxXzLFYhj",
  "key3": "4QJmkLbSUcgxwUz8jZtsqgUktcrPVppYnHo3mLS4CER1Po77DdnjDqP62HRnoQWv4QLnZcGXaJW7wZJdX3XZ33E8",
  "key4": "32HNXG33YhriV6RWkEz7x3V8mZkG8ssmDcCDiirTtcDZnKurVkMAbm3xwWv5cxjVgD7HbSFBo36mLFp3e57vMy6L",
  "key5": "PFtt3TT8PNCGhotqJJCFhnYwRT8swkwtCvYnhVKgskFwjNeVU6dheMFRHUDbypsAqz7wiLJqGA8DkHMK7U96S1V",
  "key6": "3ifH5wMEsfhrrdME9LrbBowudPmTVzRxbQnzfW6gChU3dbSHBJnweJaSbmGyVpNvMrYMzWaRyDwnVY1nih8qwSUq",
  "key7": "58jBuDdgA9U2qPuxC29jjgkAoxMk2sRbYKQWua7BhxmYi6mjtcdmvT6GZZ284GDuyqJfRoHWJNSxyfGVrmFFwbgq",
  "key8": "5fXenP2YBnD3AZKLSBwAXraSZFbbvYBYtBrjFrk5EcikL4YmbH6ACfCDcbNiX51W8eSH4S13sEPh9JBXCw2nUiZ5",
  "key9": "3GaX4ViQTEUZMq8JLf1dejaXHoKQk1a3Cwz34NzgAc7L9UwSfjLZ4rKGcByETHBHpsr3jZgkjzSbWYKiGmJK2qHt",
  "key10": "48kAoyFKJTyDZR3BrLKcsGj9uATHG57umNUnMm2g8hma7ycycz7trh6yReX5iRfcUBQuh3fp6dXMUQqdvPdsysmU",
  "key11": "3fjX2j7pxmNpZNHGbHaVnqw3zo2zakHQ3B2nffy9tywH9JkDNfuLr5fT3XkLstXgsGXQReyHDwspJMRfb1J6bwTp",
  "key12": "2agaVLxkmVdS4Q1KaiHWzbyQEUWJsGSRqZE52dqoiRKDFBGA21r33d2e1apZuh1xpmHqCYV9TMFgwRgVfsJzFYbc",
  "key13": "3Z8Nfm2o2Wf1i6nvYmGBLgxtHz5NSLVoDwtbdmBNmdY156JwatW7aaKwDZF1QcP2zT5ZwBtyCZ9HcPa6wUU4enSD",
  "key14": "2yyzZka7murXmzr22WwFkqdRo5ve4aoeWvpXBRPbqANgEHThQRAx8mxCw7SDV1QZbqCzKC5u8gAa44wGzu4k3AqE",
  "key15": "4NjAGKtM1bH54gsLbaUSx4H1MUbWgkKarkdETt6jUta5PoVB9FFruzB75oLN3AC2HRNGJNxMPggMhBEz43r35sMi",
  "key16": "3ocYg25X6N6wc7kXeEbyYZByCS8iJwbeKqkRyfeha7NTWswsBVUjb9qF81xvMpcuYqAvcAF9Qktg7YawKxYPEwv9",
  "key17": "vwzzPWEGhbXrG37Sp5qsfX39eEtDYgsnFG42vVJUgsrq6KtjsSQP8JAUKCmGBB17oAvLgnfS1c7T831v5zHgZxJ",
  "key18": "35YnZpiw2qWedqNG2cWRWQDkkZfgmLmBWJP11tA4nEFV1NLfZEUimPf9FmUtxNszMB1XHBeSApAdCXLqiXFdmtCD",
  "key19": "5XMPLNFE1SgrqHeSKUYEP5J4EPwQ2QTzuFRkCh48fsdVtA1phovVwkyB7FQhtYujTaHQiWq6iRUmiTiQ1eHiq3aa",
  "key20": "64aopMme7XUdsCAXRnwWEDKkBapSLdRMxe8KBiWpdFrCK2968r3cX8Dsbhpy1qgVeTjup9CaUpZLXS5QtqL39ktC",
  "key21": "9rKjbppxnxkxCvqyc4HAinChjwmv6MftMLJM3CkTZ7CKZZw1HScb3b8rNy9Kc6MqM5rgH2iT7kJAbHBhEaWENPL",
  "key22": "AaSBNsgJLj4YnbQ3JTobYjS7tt9pgPgXuCEoP7ij27HdJVGnzb4xq8cLkJftTH4xXMaPuUVNgzWY6myTmvzMpKb",
  "key23": "2y9KA4rYcFXyppkiQRUsLm2U39DkE6FMFEn4DznTFYAdDUKh7acmeEpWkuyz5ffHudCdTspj3nx8ePKXcvQTP7yC",
  "key24": "4rLnXpN9S7ev5g4EUk5EhTsahYCDjPRV4QDBv1dRH2X7EjfoFwKMej4E1kbWRvcjbpfxqKRfWiEfFHjXUjJ98EAF",
  "key25": "eVerpDsRLUESSKhpo18BswisQhHAA7qMPhmvUDDv8TunYb3q3h1VMVstqhkdkdo7h6Z2uK6uSyLUxAT8xGrsmLf",
  "key26": "cwNnbNEhTGHQbHvwV5FBs7AB9JAKVkKfzuvL3DnA8u68P26QjA4rXpJLKkQzZkmZvRkw1F3tqpkwPZq1rRi6NwA",
  "key27": "3an41aBkQTSGChyFExxKVm1GnzHjZmy1Doq6U7Max5ruAJ5844h2rTLgGWrhG8DAHHKoejrm8pKGEaoMg5Duye4E",
  "key28": "2ynAAPXKzr6gzEftguARbhKACTPdgkCTUncRBYqkXkeHiYLPoyDcdDsQ9NYq6jUHcJM9nGNvqBLYd8q8ss3D91dz",
  "key29": "5UDpXsivpr6Vv6RhwbYttuLnGZkx8oJLwxFoM4Qo26KmP2CtcoUs6WbZdmabcbWgsonsc4dWyXyhwPFXUCMdVmXv",
  "key30": "4gof7C8ZZhH1iBAxr2raKKbTcvvEXjb5zj3Jon41SB4R2WgbyK3o3y5ZmjNGcWsX3ugexeUCgiFJQZSfCNHiS41C",
  "key31": "5svtgzN5kroEehSETR4Vyu5pSoEUXMyP3uySQLgCEbPJrWigvSp8T7FbQCP86bcgGCgQhEzr96KmhGikqkeV8nJg",
  "key32": "4WSJPnu2AhP9U7VGYpRzDcJwLE2jAL9ehKGyqbLwf5dp2zKRb1xQVb2WCB6barRnQqwWKMEJy83KZk31hwGXcCiq",
  "key33": "2XE41PMUyvGr23aB7yzEnK8UC46wrz2nETaqDmGoWNHoJ1sM2fCixJ5hXCGDpMZz1vde8SeYzQkXThuAPti65Pbp",
  "key34": "R8sYJ3284sEmjkdSyLje8TnDa6MAUqoMNgqcdqVyZgPmUenhkQS2FqFhGUsupznXL5zCULzkP22yEbVEQQ9jX7F",
  "key35": "2UTKpBuB5ZxSvkVCueNQkRF1NpAsM7xcCW8UJyRkasG8iqpMFVPmZsSYX2fu6vh2ix8ryUEdzGMs3HTSC4sjiQc8",
  "key36": "3ETNmGnm9Cy7v2HByjZHHo6DMAAxQBtbmTeya1Z4vR36HinVu87AJTj5bnuE8eYVmnhyu21Fk36eVD1P33pNr2gR",
  "key37": "CsFDNtyERrEcrp46uFZTj9FDFgY9Qt9htSd5JPY1mHgx5Xj7Xaw9oEpgXyC7BLcC4bXftwnRYfgE276uCBxyJuw",
  "key38": "52h39pUustVTGknCk3bRnPtcqQxVPjNedxJW6VL59ju2MTnasjPkh3qn7Y9L97s4uYU1PkVM8CL849M3W3XwzDGU",
  "key39": "4CQTA9hjzWvkc4tZX5kgdVzJWdx7UUVEpiSjGQ8Z7Lqmh2fzADSbPam38nJziHmTsE1vK56ZcMQf9XP6JRXCmPqA",
  "key40": "e6LMf2KLjcSswLmmHkM7TAykhmP2MJRvVp4FUDsQQjhzknpfjT1UzrafFtZgEEw3AJfAXv1M9H939NCZSTgQeBP",
  "key41": "61Tw6z4TFsPikPSZfJpLbDzxorAJkSps3vA1zse6a6XND7vKDKjaDGgQWkkFR4N7qa5Q1yR6yyhx5t4LULzueDXA",
  "key42": "274m7JTvkzy7NBGBnoEJMQ591oAVBeD2jRSaiudNp2xyhmV648otjnTERPHrHrJxEhZbSdzHMvXUizDPpVjwcP6S",
  "key43": "4umPNYaRXFxQkXkVS4Qr7qA9eDi7HcAEJfW6doFyS5BfJNm7mq9uhNDhCg6gU9pFMTEYn5AHpwLoXapeHfRE4Zyz",
  "key44": "Yo1JiQ4BsjXhY4pW1bHq4rz7pyNEUTbwnLZ4mjebLovH88Dqx5mqS2YqqWNjwwxGymR9DfX7cMZhL9fbxCRPq8d",
  "key45": "3UY6oRoSvtJquzZRJKT8Vj8D7MYEwBW42aWY1fQEgT6yEbFYc7YSjM6StrsqcVUfhiTsqo9wb4LX9oQHNzaPswuK"
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
