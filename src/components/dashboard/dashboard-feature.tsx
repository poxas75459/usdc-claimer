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
    "YpAX6AEbBW1g3quAhHEvtHgHjcQjBGxC6opPrjf85uh8Tku6hk6umT4iiAm41ECgdq9BMdSq3sKVXfDNikhg1FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjKhPtm8UYKit3khP3BtqHsiUNrdEJihGuxEyFZfmDRxkoFf6kh3gfPU4zMhWFGxhKqH6b6mAEPYFT7pfaP1sGC",
  "key1": "4X4os7kn6LsbA5DN5k9uaSkF9wyHpHqRzHDdRPTzSDTgsHb3iwmuxpNsxVMmYtDa5tru2mHzKkCrmtbdz5fU1HcW",
  "key2": "21WKxG5qFcpZYZkTAAuT7X9vsuVdEucWBJBpaeHP945dEEeUJJjHDAsLMYrLMEpAuz1sGTY3J8UBQ9ogNYMkUvP5",
  "key3": "2itP8dchyRCxhwExxnueQ6ZsWfZubEKvQgTWujwuwEExu32UtVgVaeUpBarG2dpkesyhXNbZvWAvHewXFZu6UDib",
  "key4": "4d6QjoV5dpFYWZ71k5Amm59JhHCNkoCzGfpyrivsqtxZhyRVqKkHkHUaM1bUvLiqd76p8WCUuqxCtx4fyMTCmmVs",
  "key5": "41NhfwzK7MdMVs84ZUq2o6L44YwmHD5cSpQp238aJCadjopaWBgfuf9viEia7FYtLw8RtkSH9irK9tY1KJHrRJ6R",
  "key6": "1211w55hxqkMpmFPavarY1Ag9uNKPxpUuBApbH7McFTHJheG9v73es5P3k7esGvBP3Q5YUPybqxpVKoeGF3caXJh",
  "key7": "4s3jUjuHHPJgtDGf8AGPDgNieMgEDTqeGv8i4tiMno2oVvdArn3cpunBxv5YJUY25fe6Kax7P4h1zfxYEkhq68ff",
  "key8": "53XNZt37A6aSpt7x2bCJX75sRXwPPBJkMCDsYSR8fPytgwJRqnMGG6kCWNGkBJaqeXAPnnRCeMshiiVfM3uBZauQ",
  "key9": "4273k3ikL4WJ4CmY33MSpQKtGP1yGu7JzN4LnCWJZ1HA36HUJSj6zf4DG7jCXmMJR5Cb8dYnjoaG72vnzuUFR8U6",
  "key10": "4kACYNmWn4h9bYi2NMSC9fJ6JjCMfc66m3XVMUgBYXfg9AYzkGwwxjVd5ctBY6wVHZzmbuozEfwYTVxpXdMUPRCW",
  "key11": "yUYVHYz7Um9adnfZjd3rxSdqta9wb8N8nhXUmkNnGsZTjvkN9h6o7ZYRsxurxFzj1des98nY8w6Tg8eVVGjNV62",
  "key12": "2Rdf9VuiuwDw5a7Bz5xyyUpF54xkwNsUAToQto9Lpkvn5QYDhCh5N7QJXDGij6AuG474QBnTjqo74qFrxvRG4mAG",
  "key13": "5zhEtvENT1mfXubpWZjdND7sDmnc6yRwr38wMYh3UTijPHntwhvxUg2qXqpP4ajTGXMptBQiR6ubnPBA6poLfoXd",
  "key14": "4asGXmHqkHPXtrowP7Ywx449jJzdstaDQqj5ZSYHXGnj2NsTghexgdM7tUxKFWRYdj8xCNGmRqxZU8ZQC1SqEPYL",
  "key15": "2piK1CzorwWe6U6jX9CBXgmAZJ7kCKFfhhufbkCK1xqMb3d6kRAXQGYjg2EXkVTinmKTec92LSGTtA8vpa7EwLHX",
  "key16": "49wZEmHN5uFivcwtkoDN3C2x5D61nBkVcJLKqynDW5ZXfnKuKzCGCuK4aQ4xXxhhhQZfFYbyVDA5eBfKpR89AQWn",
  "key17": "5oQBq6GoWhzsTdQaSXuk2YjubPrgeZTu8VNEF2Eo2U7cgS7CswqGM4N4wXjb4mjofVuGsCgv1y36NJvrhDCrZa5s",
  "key18": "4FsxjDT5PcEk5np8V1BDLCoMKXuFNEQbb2dcDvANrZ6PFCsZ9Xpk7cG9nVY5kCJ4U7pZmAFuac7t1RXitjMcQiKB",
  "key19": "w3aFoVPSAnXrEELSiVdmzZAE39N3qXGbFN9Fi2o58kV3GZq19v61TC9rJ2iTsVea6r2s9toYcgfrVm54Tv8V5Tw",
  "key20": "3AsHkz3mFh7ES48CQyCGN3V5gjnZABbcsWWtSyr4Dpz8zyUKNpGJLLxrSK81F63Ns32JbA8jUEtYnVCH4Ch3FX6W",
  "key21": "5Qr6h7DpzPAkp85u74UwCYiERfCr4RfEkWShY82cFxr2RV6kCzMnK3SRV5Hvpf3PLgC8Y2aTtxbF4yENL2RGgiKV",
  "key22": "2ozVsfcahjEhJS5PKupJTDqvTcVQemuNRr1tgx9Q7ivWYRnTUUaGtcXSBPhDZxj7DCQRFwkwLchD4dPmRXh4mrAW",
  "key23": "2NEK5hAqKfraKvQkn3S2m6SZr9sMXfKLLjok6eERJzuKF6eZxBnrvPjW4Zo4uyA4TNTW1NmtiUe8EtTGpQUuUwq6",
  "key24": "3sVh8CH4Z5iXsKEoJBZUDuLFNNW6r4UsyLmA1EBaH4p6LhswkYYFr7PdDF9uKx5HZxNpb4NHkfYqXyKA7aMaok5d",
  "key25": "48GMVSp5LuyfmaKzivnJvaufcwbc9h3aNbVtk9URf24MQFBkxikZWEyiSzwMNJGU7Rrroay4GxCsTrJeYjqg9qZt",
  "key26": "3pe6vhpyCKZDT2mvzCHMY7JWPx1d7cFwF4tWqu5WxCHUvNGyMBCosQj8RLRmhKdxgrumAJ41KJYreUEfTPfXEMbB",
  "key27": "2GFoGerFh3HsSB49FR2UjeqUFeco3YuxQgCuAgHmVcGyq1qigsH8KU3fFBZ9kcBq91JUcN5U57ezJLuhKbVGvtw3",
  "key28": "3SMHtGS5z32FP3Mz2AgSZVvEPruq4Zraw8MuaSjD8SbhJbTKZZV9RSNU4qNrkbdocaLTDQ3cxWYPs6RxmyV12Bkg",
  "key29": "vPkJ8wp5JKafco6mf9zj6m5yA42RoDPfZUmPa7xTB5H6zYD3Zda9mupxsZJpeBfQgUGtTyoyHicbH3rc31sbfP7"
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
