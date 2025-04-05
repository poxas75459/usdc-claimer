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
    "3Nu69kWAdKWXBeBnxtGTvL8nfK5DTJKrTXzCJJjf9QciDaZS7gZ3KUAPA1tUe5feMiEeSe1rGq7wJr57c6qfcYU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1GA4WAeRrAHEuzP7y1qofqWbVGHWVhXDD1NHnGzQmi3LQCgksoyCRH1WVvEFyRJqRFGcmkVB5y8Au8vGF9qder",
  "key1": "25sxaqonVxBTjs9H22xW1df7BreghHHwHYKi639zH6hWNbWYzk2zDLAp2SDWVWou81hrGHpAQsuNMDfPDewUZTYM",
  "key2": "5BoQNotv1M7U3unMVEgibhb8RfNRvVmLoY1smUdHGFkkHCkUgmGYUVv24eREuHxU65EJDCUvtw4DiqDebiwnYgRs",
  "key3": "9gXPSyeCBeVczvcrsFfN9pY1c6LUEJF6ij6ypbAWsFeSHPzByxboEAC9XmWK9dHfANmrt8VugARJgJNnN9dpQQB",
  "key4": "3kqi58jaHkVSAoyuBJ85Ru94fUUtD3PB8hMcQbbSDyvY8hgYdi2uf8h5MCNn9LxZy58tsy3kfp7Nc1SsDZWDBn9q",
  "key5": "4dzVLQfjLFwAR9hVosoJPtNEvHks9c7mXCMhxqz2ghVw3cijRWWaBkvb99tWfe9Si9c8ezHAc6nPNEtXG4qWAWYW",
  "key6": "4pUkRaGaXTMk33hBCaUCwpEPvAAhFRgFEh39kq6XUdoGUguXmNsWYbjqo1K1FsGBzLwGYMUnk7FWsXXxsqquUheL",
  "key7": "29uqnZPRkqKRWv5TAX5VZfc6VRvF42pyv1ruS1i936VED6gqgAmYns9weBNZSiqqBzF4xgW4fXos1cNnHJRPtgLW",
  "key8": "5FfzF2RAGjYZuqbukVFReHb6yp2A18BJd7gBBaeBt23k1xCKWpGRQdjLZ8STEiitS3SHLKQq82ZsWtKUkEa2j8WS",
  "key9": "JxhFkWTZ7wweoui9rt2NYdvj8hoWc5oF9CAfraK4XNyrAvidmgzfYT9rDihNNGzxKt32MYHxmKzKExbTgPMBmSt",
  "key10": "3rkD8sdo3WhtUUXHDpTRUwDL9gUsv2UUB7mPYV3XeDxnZq9F2P3RDZZCf6WpPu8AVB48bPZbqerxnRsZk2ecbfHa",
  "key11": "53u4zGYZp8yPa6rafkzzn44DLbbBcwLUJkZaueh6sPHK919HTjgz2g9biAEMKHebTi6MrTmKUrpa216JoiUfavB1",
  "key12": "4qKx2MjrhQYE7dQe2j4fwDNTdnAqzst24N4jjUVr81SBx8HuZaU49phsx3RG4e6gfntKJCBPjjYJrzfD6H4UMoop",
  "key13": "5Ex2LYAnSK8iZsBH9ahPKrSoSwfe8Mmosq4BqS3XetPXWazHBFrAZYCaWTni4ny7axSy2WenUiC9yvKrMmLF7sgE",
  "key14": "4xcrqmThWXePAWiDi8hdYkUAyhjdV74SifirNXRQBevydouSxQ5tEumUkQc8WG6F4rjJMTH6xDzzj4vypCFzqeyX",
  "key15": "3AWHpMBavokyLzg6ZXaDH5pFxaMrtsf5tw1UdjyCUCgZdSbqtg7833Zpv3o4j33L3H8WrSV3ona6paZTDzdoCqNi",
  "key16": "2sNnmnUwxcLtQYca5FKiK8GiqkabHMyy4Bkr8xitazG2AEk61xnR514UnFwJYQjczTjuYaf83gfuh39Qq3T27mo",
  "key17": "4sMYj7hL4vANnLoAGdzNgwSGVYkXHE1aJxao5j4Ce6LnKBkYq2NzrCxjnAhgJo8MWyTD7osTJ235XjnTbJhHhYU5",
  "key18": "5pqwfH8xVSJHdEWb4aWyALARMxUA8sNGCJFiiuG5Rrc9ad3N6B4b6Xfz9W6MtvBvToPXHhb28yhHYqpsyeVwvQsy",
  "key19": "125LkYHcFWmejkdpt1cJTTqNHCcEz8nyYCnaB3pSH5UoxNsgdk8wKAW9RnwFLo9KntjMAjVkMQg4QmstWh98Hsk7",
  "key20": "3smQB4fwHUUPVSMNHnXcm9TJ6g5eCt7njFsdJ8U7YfAvph8DjiwEQRivb6pSFp94FSxJCUggaL79sduuPdVtVUzL",
  "key21": "5MZummTPFPM8zZ6nkYMmPd9eaYPfPMDfzAzZtkULuH9i89uJXQSSBhVN7X2cU942NKAoEtLeCuaw38Yazro1Wuaa",
  "key22": "3bGDjwkVrwtwdixp33x8v3G1FooFRokyN5YvSSpLf16mzncaxDCBGbFaCEEcweckTPRdetYQCh9iaGgbErQphai4",
  "key23": "62nPrAeimqdScX2LUM4iJhzKfvDTbVXaKTH2oGMMt5JdtJhStHptQVbHTnE2N979cV3S4PcuRUEcyX3BQVPFbpnM",
  "key24": "4xzAuD2qbC1msYNhWcSdgeo9HqrFWafanrWPKhjb8nyBkGgC9mtVSAjEHuNtNxGgpz92RVU92Ah7ponG8pQqBe37",
  "key25": "2dgwKuYi1WZG84MCm6Lr2KjCyHfGGFcakfK3ZcU1GeB9uxqbsHLwG6W6VpHG57cHLNQoox3Dh7hKtSfV9bjejNCK",
  "key26": "4GNU2vA7jeSiWDpmfCdH57JR4R6SHVSUXLTmJZ5DmJWgJBSA5erKUtkEperErndjM7PcSmXsLG69AVXzJhwfTTB8",
  "key27": "2MdbbLrz5HJ6J23VH45dkeZadJGzRd3f3o6EkyHfhmuhdHMhoCaA5ieuHomyJNmww6dAVaNg4s5Y6Y4YjRjWJd1w",
  "key28": "3KdtGtnSysd6jJekhZpVNcwrBzUtB4PR5EtZrgUvyteMDCAPC52XhPm8EhDxExU1vophywvNXh8GhwFveZPvfixU",
  "key29": "588VkNuUcgar9CTEpCC5hXDcTLmrHuykGbYWoH5YMkFVLZNvoz1GrCEyFfcco6hQZMJ34phxdSz91XUUdnhcTi3d",
  "key30": "36ByRsEEpTi82qyS8ef6P4Tjkk8YFWxm1r76z6uj2We6w338pgKoVN93DPqX5jXdAQ9dSG4fgjTicv3UBSgqhxZo",
  "key31": "24wpvYCgaaMDf57LRi1Piew7CCC2vrYmYVqHRKTJvdUm5SMyBMcZqki8FatVJTeZN1yWQs1CeBjXPX52nkbaTdAv",
  "key32": "2S2JpZg6E82bKwKPZjgn7HiHC2thiCqpSWhCcyZSS3BvQWqyQBbhhZMosdz3KarRmyF9D9cxvspJyTGBEVSd8Tea",
  "key33": "4NhnQBKkfudfbn72pMTwAewQehM3Js5P7QyNkGY89YBBT9xfbn4VHh3kEGgRjEcehp53sj13GY6nKsEBuxGeqC8M",
  "key34": "4XX4rYrNi6MSWF8JmnyPHxAKUcFPSFvK1Jf3tGKM4i4niBFne21w2zY75w4vErbGgV2ooWLgz6x4KJGWLiViDisN",
  "key35": "4qLLRZu6NqZZtih2rsXdSZXP5QEgsgqwxy5iWRrHDmWuZm6ph8ixkxj765Zzfm5DymVRivGjtfmae15zG5kxgv4U",
  "key36": "43zvm2ypUrPTmEAD8DkQu4AYyUdmV7d3wqngZcvmZkJaQrBVvMmcBR9c7xjzpXvjdCK3FpB7KJQFGPXBneRciBSQ",
  "key37": "28Qg21FuPaRtsg9etwZcPgQWJyg2MdfnoZtJo8g1mmJxdcKgfPUAQquezjmBh5QU3cFHN8AEeAzMPynDJacxgUn5",
  "key38": "5K1MhxgUpx9MWdMtTEbFDdF5g4QN7Z9yLLwh3fmZzAc42NVqER5SekTRBU6DNRKhsChULgGbZp277DAygwgGMnyD",
  "key39": "3TM62LBmTwBMXoaxW3jaPJPRGCUUTZPmr7rofe1dxTukhjFx83tWkQ2wxisRnHpjoyrdMzn7ehpafgptjWy9j3RZ",
  "key40": "xFQyc99friqZ3orsEpgHeiDJz3AimtXFA5afs7C5TR5Gr9GzN5d2wX4bfZe53tzcv9xCY4bm6QvLQkab14fDX3m",
  "key41": "41dvzVPE4Hh2o6HAZuN47CaJYVMG1VbB6vVxiWjZEU1RDYN6iZmbYznMXgyRznhdTHhzP5QW7agLNGFY7CMyidmy",
  "key42": "2xXpFQTJg5HbGPdgQPsHrq6MmCgdNomnVKEfUYz8GR18QoXvWL7dZ2augbCT9KRvPBPvTtiwKHU5YXcs1fHqog6L"
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
