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
    "27osNbsUdBpRpBG8MeQrpKiGaCAucNT6AJ2P4eg1DJMycuskVBs2atUcC4EoPYRSCpPC8acSC9nBHDfAkz7xEHgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62xWZE37XnVrWdkEXf2iXxTxVj8XRVbmQvPquBLx1SXiuTX3hJcyq6BSTx9Veqs2zC1gCWxHuTkX8jx7jXFEnQ46",
  "key1": "5xX3TRTFujZBDV96Wqe3pMi6Lu4oRKbegdgJvbA1JEpNDKvSnzo647rrwT7UVUw4E4mZj1C9RunanhmeEcS2Ls2j",
  "key2": "3qjVX5wUVNuFzTsoi57oFayXgUCAqUaxnQSDahwQ6pfdVZxs6YQhhX6fTtvMpSnB4dypehFy6WHh21PU9qA4ZcHY",
  "key3": "2dpS8WQMdEJRPo5jZmotVuS7a2jMWZ1xc7SR1aDMnWgRBDRxVrFv2uYrFMaX73GUqatxbz5p7hYVmA83RcbdPkQg",
  "key4": "3cJpTGTTQXk1e1ETdELmzAPVSfB3gMjG3P3EYQsXvUq12pvj86tTd8oPyDReFfWyhZBxQdeCBMRLeDaddNRCyDtn",
  "key5": "3dNEG8UJUFBDG3RfXBCerCNHEy1zZn2HwReaUTyippLTg8TAEVWtyPxD1JYSLqFzZoVRQcqQFvRVtte3hZ3immBs",
  "key6": "4PBZSnmErzpSRZa28gN7SQ3ZQQNpHK41EbHmP9UpD5kGkCHq3gHp43pStMfghdimpz6jQbsQCL8FZMoHKjRZ5DbN",
  "key7": "3ss1ZK5ha1wsUwbuafgZpDvrE7CKMJFb7KTENo1stBWGHi7b8RM42ao6RSrPQKWHUStGfD7G6bXYtSfBDVjX8SZb",
  "key8": "2gx1EGnVvfkJktiMKPJ6PcnRYZX1ohnqxbv7PqtCn9Uek7njhCS5YgdcgpYVg6F7vY213rSfs263boafJW9f87UA",
  "key9": "3E3H7vqnG8GLJrRCKGj2k7WE7obWQnULjcPguD9KQSC7T3nTy2z2YNBSQ4fwpyfsWXEzbwzzhcrK9YkrrBXfoWHq",
  "key10": "pupTxm8JKYR88wBECZ31ecyUvHKeVu1gnTJuXYqBNEuCDdNRmWZ4NecuiLt3qjHXYKN2iEG6ygnSbK1SWPz69e3",
  "key11": "55MtxUqhRTXENfVpz5mCoVq2RkWtSmcAfee73EytQRL7WuNyM1iANHqbuyMkYydqjX1DkqEraD57784LSirkS5jS",
  "key12": "iPn9oVzUgogYBLJmLWqLbGnzw5kctda4qSgmQrx1wYuyzCzXvn3qajnF4LdKzNvCaZgkvNMAURnpxt2h4ZTgnMB",
  "key13": "5Pb7NMj8g4zGcYLAjNtHJ3Wg2rp1Mg6u3EpjL3YksFf3YxvJM2UUAc14kUTsMAx9SMvzM12rdWr73i4pFoTnmLzg",
  "key14": "3JUXQW6L4DkrMfcbr3Jk7Pxbf9C5e3TUbPTdrjCCdxXzC6Jd2kqepxRsirAEcYo9R8PYyF5bupdGfdot8gQRD7Ei",
  "key15": "3ZwxoseJaQraVaUe1HWGmqiZuosMAMn4AJwFA6wtn5ANK9HrRP5rrgcm1vGJt2w3ii8xHGszZqC4CHjGWVgyievN",
  "key16": "5tvX19TCGh1KAmtYjWcX1tQs1Vt8qy3842P7VuFvQktCHv7zYmPgSjAso9UKJophm9TcTTW6ATqfXvseQnPa7YFG",
  "key17": "3tQ8xhrT48eSFwRuHjkwUXbeMq1fPiLD2aJMWLxj1oQJ4KXgQxxqo5wJwydpWiTFF6gyj7D9GDpTRqUWgStJ6BXk",
  "key18": "NPsXrXARCWsPhVGbSbTffvf8tDcpQyk12t4yAnQzEgZthvHVF9Ava5he9tkov6rwpCoxjZ4A2ZpFW4MDkQbMCkd",
  "key19": "iidp38p5MsHg8DT9ynXLmi1Z2T2hSFmcfMr3s5t7h8p7t56eYMMUbkXPuyuxKe9k3C8WRaRaiab1XBEAiLe9cvi",
  "key20": "2URxe9YbShtbiJAbbKryK2L8foWjpxr1Nz7JTNeAgwYPSXr2zGJocRaYyGdJsRaJn25UAPbM8KS6rVJEUGRjLZmD",
  "key21": "65pGChX6p43L24hS3p2g7Ht7Hpxe3RNXhjByS17esv8kvC3JSaCr3u5giEZ9KF1fmWyJ3NQY5VSEFSxYpCHeGASg",
  "key22": "8SKLT1am9BkFtqM2a4JB4n5HaPmVVaTD2QWgrf7KW7wt4T5U5iW1gd3iVhBF8iiNKQjBgvwfnZFZY9Ba22HYonA",
  "key23": "2Cyj8QCiNQMcodww9tWD5prn5rBxq1fEkZkKou5YC7UwJBokYr7GYx37pTTqZLGaURy2rsbH1E45AdQVt3Q4DDCi",
  "key24": "bYy57m2W8oRR3L2cFnTs4PWWGUuwima8w3wDZ9HFnbBb584zcz4kQdxky9A2W5phbivGepruX2Y4kQZhUGBrRVA",
  "key25": "5g9sfuj3cbFaFnuzVCYhwCLJex3S2ezdrWs4gedV9GmLh4sa32N1vN3u73rBE45uxA9qhgtvJ7DrWqLWN4hqgQ7A",
  "key26": "4tP8xSP14idRR6EG79DZ3oQRGTFtVVt9P5UfYWjwsJqR9in35jMRdq6isLkhYiCjMwYp38fHUXaY93wehnV96coF",
  "key27": "YAwZcjsMmQr5qShW1fMnRRes192HLKdZwUbrXsqaXnmAzUFf8Az1VzxxgX7wrprXgA2oLJ9JPCU5HmDRgVuUHyj",
  "key28": "3NPrbu983S1XzzEy6yDz4AbdzS5Vbw9VWBus5kdsuiym7TeLMRpphw882ronksUd8a3s4vX3uCecrsFu9xUp7y1X",
  "key29": "2LtDzafEDJmemZnRFnmPvRp9ZR9mD4QB3dFkzRFFRQq3iWrpzLmXWBGqpCWc8n5Nb75wZQjUUUZsyAwtiG9GUxts",
  "key30": "3NUuW8jjcRirLi53WPXz2mYc2GLEGkRGhUqCCa4KFFsiRrRmNuMzHDXe8JtRtw9n6S6jZPVs9FDCJgLRnAQctcdK",
  "key31": "4r5jTTRmJ2SSmTc2CNJ5iSojWMzrwSfFYoXuhTYJKk1hyTwdaTH92Y9FNmBEr2NpHmZFgPB8RKpsLbH2DNoPK3M6",
  "key32": "3qxRKJXFWbWzyD7Vu16pzH6L1Joq1sKj5wKaFQfE9urh5Q5vonC16FTZbdWEvN11iLmsBcbWLr3x8mzUzF8EbEPp",
  "key33": "38f2GcE2vTVW7FiYFxZ5vNhs82zF9KS6LaZEuQF6841XHjWzr5D17UKg67yeJmZ9Z2zBd1e9D91qoAk3qWPrHjMZ",
  "key34": "2qvrU9bTyS2uFb9V9K7s6X8d2nZcnmeJaCv1nniG8iTnKb6nM22xwUcZP62wRSUKVV35o4Wet9tgzHRijz11DSug",
  "key35": "4L7wxUqgp2mUBBx1WeFMvfyxAyhMDi3CTWwtK5TJM758CZj4D4D4dn8C7DLwUnB64ABCpfyYmhBRFhf8MvQyQupM",
  "key36": "33weoYrqVKDxTEqT2BqZTRAedjhpoRkWNRC6KW6UvpaS3VvCSuzuXUW1zKm5MHdoz5eNhvw9CqfynuqCjqzQu9y8",
  "key37": "4wRMjbxozKm6qkQtvzdkh2brY4QWAsG6qsDv5RC81N4rK54t6PPiupL3vzKca55KHSYguEWzeWzmowCMQ2bcNn63",
  "key38": "3wBz24jd3xt6DCVPi7JxiXH96PHyH3rcQdYWN5j7N51fPmunaVFuiqv8WibRtTuAaUK4ifzzioDyozvo45j4bmdD",
  "key39": "66AcHpssRDoErhU3hjvKMDofsrqTCQTCppBLLjpHcmoa6trDu8xJy5mg6EkBnwjnP1j9judUQ4PCtCDHoJzGGKsa"
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
