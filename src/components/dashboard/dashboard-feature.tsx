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
    "5Vf2wQkTGseZqWzBHLCtoqJGg4nSxvcEqm5EznkSfAtPyZM69QtBeSqFgBCYh12SLBJEYSiE9aZA9Ye1u3ig4ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWwSKf4Pjr5tDjCDYZMSHuXmNFUtQRjJtG56mcY5Zn31VA3mYJtrNSmF486FxRJaEBb9oMviHTHhKpievpDwhPS",
  "key1": "CQURpbi6jydgrpmbN9gvMjxdko95jMYnEy1j98gkErSuxeFLVBxUKA6mrUbXQRWYjYyTK6sik1gU3tfNE3yNeQ2",
  "key2": "7VNQoTtWXkjfH9obXQyPTk8Ve4PU6PtYKv9EwE2scs6iGcCByfpCSVTPsUk19WtYGVYPDtsX31ZBzNbyYivTkNe",
  "key3": "4XiwqDNR3v3BbzLTmYTp3AzyxUhKqxKfBb6XJijJGYciUZ4CdUreV5v8sVejQyt189YBYpnvc6HbMW3WWV2vaSsL",
  "key4": "59ShneYKrVQyLmcLRWgJwZCo3WLMpJN747k9gwDxJohApPN5GURfraaN4XRu9N1BD2Py9BHUtbXA7zEig4fkJtyG",
  "key5": "EyrSeM7hUG7j9shnngGWZi7wGiZzmqP3uHbWS7zChtoBs39gBJJ2SczDBaTJvs6o3W9rB2FfiDkKM4v5qRgdpr2",
  "key6": "35h7cQqrws3xHjbEKFqA5naijrDbtZT7mirTECh7btnE9mBoK9Qv6cbEWx28SNiMyECu4w1gt91821EDFtWF41b5",
  "key7": "2RxhWVRyrVft2XvYA3gCGMytr7J1m47LHBxfQyXgQigFuq37ekpKH9SZtXwpiqLktvgB1VEMevaZWkchZ7Fi8PmP",
  "key8": "5jwzi7SKZSpbcdQMLtxMNfFDZQ6LU2zLuDsqWqSt2M2Rtw42TpqkEDr6FwEoLEK7XAzwGgUHHpbHai33JXRf3Bnq",
  "key9": "5iSjraB75YpKm2W7EoQxN9L9gX7aQvs4wMByz2JroPL7ukWvgW7V9tBRR1rc4k4WduJE9uNPhyhoBWb5m39nH6fg",
  "key10": "NH9y628Xwg7o87qWa2GnZc8D8azsmSS92BKMjhRA4wQG23e8CbJEiSn2ErK2BCZRwRajWZomxzcUGWSmbjXRp3W",
  "key11": "3vew5E1h3yQprU9Z72k49w1u6dKKyMconoePYQut2YY19vTDeCKMv7eqxHxH5zZgh6bHiMAdoiZ5wbcD8BSQCcJm",
  "key12": "4nmnzKmgasFXvxvx8ScmEBymMCY9mpHMe2x1xaQRpJ3PtDz6PCwLpieR3ULqpPkFybeiaPomyCxrb5rixSrWFjCs",
  "key13": "4fSV1kukrAC7QPTTv7ZuBeQZFsMxVsaFAQ5X7szEnLmacMyvieLV6QjgYZrrvqYMXeVAVkAHXHVpEHuLQ9Lx9GFq",
  "key14": "57pS4L81tLVCJ3yvjSkAqyx2UKmWkPuRSVHnnzXzMjVXo3PHALsHZyZaCvmTP19yT42VGDuEXfyvGEJkDtm4REkd",
  "key15": "4Zq7NpPppLP7e8NZ4ABuuQGr7GpZzWLisK6DPqDFTPTsatYGxSU4qYyf46WiUdM7KHm6v18pUEdJ9uFtkFFRGfou",
  "key16": "o1VzGysuAHTYRVEMcNJQswhJhjEVApwE7sQq296jg8b1KU7KGCpGAiqNQ1vbnLhznW2wCZC8m4b4aGGWCYezCNM",
  "key17": "2tuikYMq51AUhceb1nApM4FVDrAThwHTqQmG8C8z6RxPdAk2tZY4kBq25xz7YTapGZwH6hn58bGyJJECVnysaUkw",
  "key18": "3n5NEPfgVQgRsU5K9dk8zzzCsLkQC2vPRcL4go1NrwZPUQSA5MPiyCzvaEFyMNhbZj3RC2oo1FoF499cyRvK7hn4",
  "key19": "kiVz6kkZ9BQrT4FNs4Wc5x9xMWa4cvVgVvR7tpSqxomoF5UJb3sYdypoXzHrrsbSeESsBaSwvgc18YwwkvXPvit",
  "key20": "UtVscdfztsf1sQNNthzsFAfQLLxFKueJYT43WJGzwxXfMbTrTWhVcQFTLGkWKkPzcZS2GHF25f4KT2JUUzRUocu",
  "key21": "xpYev6tTv5eF3DAVJgCGPcGc1hp1X1qHsXsfdX3ooDFmWvRDEKK7k75j5apvQwjuF8X8XekuqgHPG5qdspBM4Bw",
  "key22": "52Yhz8RfM87WSLnsmNhfvkGhcwRGxLkerUYrjsWD6fpF133GtodkE833bLJa6TUabWCbvX9sg8Nh72bFiH8nwQ9S",
  "key23": "23D6ZpfdgHpzqt2jLzEFUuTahkyEYGGQV3wzxUXnPyb2rizQ4pHyyfKGd9dL5BQhG5cuKTqJHc5hvnPgrcdknQTa",
  "key24": "5TryLCCwLTdDzqGK49jytBLdrWwfUCrPKx8oQuYDbkiWx1S1H5GP6heJbYTt36LFLCf4at5cPe73Vq6z28hAZT69",
  "key25": "4wmst26zvADF8N9cA6FuQAe2TzwRmFYhMsdPbBW3oXKDCQfDxaQ82DjD1YvmkxVc9s2Kem99dNp7jsLte795Xaw3",
  "key26": "57CMu5yFse8xVdodXxpKhg6WHR5vK7NqPGUADak3P1aRignGYfULvrTH1ijHyEZDhLyRH1rMKM9wgeMNxrV4KNAY",
  "key27": "5jceiLWCf44QqhMNRLmCAjDd3tSS7DYRS9J4THMkCEdr2tEjVrZdqUGhGa6F5JZyPbgaaEQwUH8an1uBJzNTgvtc",
  "key28": "4Eog7A2BgtwHbm7qwppfcyX75mT1LrJ5wWXTTH3QeQPpGJcnPZ58iNFnzeWC6kKG4q1fCx726NsWaz6esPAtDKht",
  "key29": "52vPgGJD2G6GaoXdfoipFd9YGM9Edu14c4BmLwHhiJChK1jhzVEucdNoEUApotGT46cZRViujAm92WsBGzragE3v",
  "key30": "59RrYRrXUSUiCAjJdPP1XitdctUUZGUwhb1BbkKHF9A5MoH4A3rw7fGQiu1LyKEckp5nTnNehTbm4Zvuh5JFKCU3",
  "key31": "41F6BMEnvMpkGAuWqWbp9iTNDgHSwHcEJarQc2rxqCPtB8X5yQyVUPSNk7QhLnd7TjcPpe65aaZLEMPuXHM2opCv",
  "key32": "257MfvMsmyMo5jVxcyTmR8GUieuGUSpLrxDaNueL7cqrX5UgQtfxGw2u2nBpFG85qXoWtqknTgA7fv7TEjeGBTbL",
  "key33": "5RZMRCFqXMEse6K2UUCQX6pKLKBwmLTdMPYqV7c2Jv1ajrMxhRjQ5zZ6cNw14QaAUTCFfk6kvUNYXEdok5fnSvyY",
  "key34": "5iB94HyWgJ1M6hnr2KZQ79viimhhBsumUibM7ZjpwEyNTb9wgJusPcxsRuawv6nCMDbqPiFVyAPt2ZbyT7PrJ3y1",
  "key35": "4Va2dTAPZK6oyDfoCLQuzGkihxn4gmSwGYNMFyUfRpqEU7X5jK1n6tzRcv9z9LzpPKt8CAN4b4xCWickQRgYzGVa",
  "key36": "2LsQD8tphuaTvFHT12u5cZ3YjaPQbqvrzVdb18wCaorMPs9CDWdCMuLC59xkHmjsjkonswAkCUJhPrBN7W8Wgw2L",
  "key37": "3NbRYahERP5Wa7iriKMcCQ8ReQnqtxsMuHRDdWnwyZjFGVkpLY27BeXpsRsecN41NZoqtDtn95T23rTqcGM8epiW",
  "key38": "32oEjyhn8qHnfJswom1ZNzPmXoZ78Md58358yaMLdpkjnjkvSyWFSifTcgTAobpzgHgYVddWUhjqzvUe8yNhMcHm",
  "key39": "5jmgKSQqN3fauhS41abkngJrbeb6Zq4VGGu7z4aZ8oDxd3QyiDTvUvSPXB5oWUbf1VwpXM75SZtTeLSdF1jruk3A",
  "key40": "sikAPN2S2LXwEVGcYazaXr6Z4FbMFTrVEq9v2VAxbviTSuL8Q6PeiQfmPr4c4WvE24M6xGwxgr39if6gGHHQUwq",
  "key41": "5Xnsk8wj9ZbmASmLocNfP3sNvVuGWY6FNbvLJGxzeKCDRyUCZrpx6L5tZxJerGdB5T5jttq4oyiJJcfWP6T65hMy",
  "key42": "4N7pzZ9HqBLrRBhUTrqdQiBUuod1TAny2fQQFoeuXVfrdwwfXd97KqwwCnbVVt81eEjRnJv5nqywxVRqxcuX76z3",
  "key43": "2vgUPj62CrkZyqAuJoBXnCTCkbq9innW77ZZPquaD3m5RNPZCBQhUcmmUQyjrzZsmbPdoKcupPFyjiL3KCKHiHzA",
  "key44": "Y7qv3b2bf4mMT9NtDTverqNUc2LuZuPxNBgNvu9dS5sqHuhChT27L4bnqbAzgBt3r9r4kE6kjcjwVBXs3CQHegk",
  "key45": "LNTPnwrwzz2Jh68KMtvTLHVCiYm2TnbHdK1qKWFrart1kpbpE3e2oZq5WYrgeMvbAjoGpxvFXMYunbgb4ovfW9c",
  "key46": "2W7khH7ADFyhPW4A3K6WuozvcDxTtKJuooUvYenCCtf86QdwkTfLEa5qeoxmiSUDQGMsbkeekSz2vQ9jSRFkxcAG",
  "key47": "4gTV1Kt2bvsE7GFei2TCJdy1H2ePZyEE8B5kCwYw38PmP7Fqimu99KQnfzMhS39oe31k5Drb6VEgBjhwwRSmx86y"
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
