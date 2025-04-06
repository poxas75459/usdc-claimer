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
    "5FS1ih5GEEngtksujTuEVLTJtoh95CrekCt2b5bpKd17iHyMHttoV8gtckAzkbQ7tDxaVWEjdi4M1wc4F34ayWLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WgYzrwQi1jd7w4SNWyiE1bNiGy5BZwS96UtrSUuUTcxJ35p94HYi3uiFJ46cY2nWiiA88YPysQeU6oJ1PFaCoh",
  "key1": "3wvHkndBh4MvqieK1WxEzErMQx8y3gA3gBXNGrcdXbbnM7BqLSZBLfcnMSjfqUyfiFFzp62a8NJZD8faHHRKShQ5",
  "key2": "4e67axVTFzGAzyWJeEmiLfm9ioyHkf9ek3Q7ciVmntFRDMJY42hsKuzGPn1ExzXyPL5DbE3m3CMxW72JLmj96Vau",
  "key3": "5xMVXsts8zA75bdsSkB9mEhhaxgybaeHvMyQoZytE8KjW8Kx6BDywUuBLwk2CtrUGaE2ZuQPjPTeTtPj9ZGso53W",
  "key4": "yUiD69gQ5TQ3EHKRwG443dkGCFYkpN6RuX4h4dF9uqDyTaB5JNU17FjZbAqMBzbBKJp8pmvPoZa5RyFSKBxYDud",
  "key5": "5xe9ShwWrR42wQxNL1zCit1YFRNYQYzCcbyThwDWVycJ7EcQr5oXzinapoGbN9wUGzit3jZz9NvTfdTTYGA4QXLG",
  "key6": "56VsbQR8dhMtbiPnHhZ8672Exrecd4sdxXsgq5VP464eaxezqeRck8npLAS3inAkgJJwPKZmczjXtPjCXPjiGzVY",
  "key7": "f3Dz8FDxjDfHg2NgJbdLAJnPkj279uHBbVxQZb4RaHntsJpH4yA6kwf3cQ9J27ZkUw2uXrF7TNCfNKDc28xcGxK",
  "key8": "65tfq3oKqM3BViDArBZjGDnTtPJdUxq3NpfajKVpokQeaiiDr2hPQgTzTUU51b4fmcKGki8yutXQEiJAVzBwLhGq",
  "key9": "W8KAnaC86JT2ZtWr1QUXR78j5uedm6uJvMNxpKL5ararSuVPWGL3nFJapmV4hfeafwpZrijwnLDq5UW5UTt3mE1",
  "key10": "3gLNHszHKTAi5QXZJ7Rt86xabCKMoFXq1i55zdEnUqKN3FUK34F3zgwjZkvAE8Xv4aFihSiu7eYvpEkiKVTyGRJ8",
  "key11": "4Vsn7euUhWWPerJkMvbDhQfCxhhxuats2zQLg2678UmEELSvp1ys5iPDjv8c8izKWeYhaM11aavuf5d9SZ9hrcGs",
  "key12": "51cQrCocbyFZtN5H1yHmM1yGyxc6jSRsbBhiPa42otSQq2PEUHgBtPVbd1x3xdafQ7LDmJVadZsCeGtB77yoUmJj",
  "key13": "5ZuzkonrvDYh19EuQB6uF97Q8XGSxzLsrfw6DbvTSU5SMizQ7Rw3Ku8hcaMrYw58VqN4je3JxW7uBxaJvi8hkkpo",
  "key14": "4PPdtUXFwQvdTQ6GarnpQfCPS2BBZbKeeSAJ5Drh64Q98oXPvJe2q2KcsPps2y5HkB1YzVdwirV3ztLUwC2NmjfD",
  "key15": "4aBMcuH9hwqnyaAYiDbHToAUPLT5ATQNgMtLTBsM1hbzqUQ97qihL5mVp94vPEammg9Un29VgfuJZA6Q9GEA276Z",
  "key16": "SW7Pja2udaqBP5bGsaTeUNAE3agxPjEjuZHELyCKqJcPqaTQt4oME2CHCqsXtLz1vKkL58aaVHDWggJD1kBC7FC",
  "key17": "5aAHvC7JSg7diK9fr5SKPFWH1Gk27WXTDwvuz61JAEGob2NRvQoVzAMd9AT6FygusdR18XCEr9hr8GQwRqMdH2nK",
  "key18": "DdD9PZLggGG8S714ZPJZqk9KjUJRy1imtLKBbDC1NctDUvhWCn95S3Do74iZmFmWj4r2WbA7LDfUfutYmKi7M9v",
  "key19": "24KcNwzdMLjkyr1KDCduxvimUJkZ6xUCHR5PXhtvdtHa3VAXcqhiausjdUzPSgcXG8Tq5fuHyP4aTJk9hJA8VK7t",
  "key20": "26en4hAE4yqzaUB9XAjLB3yophssv2UJQrhwVeRQMYURswmXBLhBN9Tp1t7AuSpV2yz8jSvPDWrMHaHKEMGjYLry",
  "key21": "32Jai4YUxv7yViXr89skaYy8Nkf9AqPCXwirYBBbTwcW6pxYD1EkR9TKpmaMCSQXgmW3YVHiiWJdSqkAsch6uHhr",
  "key22": "2P3kacqyFLzcdzWnKh7qH5KhHGDrWBfUAzn3pT2iUS9KTfHLo1oNq2nQvPevmafVpW7EUkF7JA6kBRXgX4RUSyP9",
  "key23": "3uspkWk2xNnawxsuac34qxkR63ztXDp8MHmyvsYVmiF7tfJx2LrFuriFgXC6oHH6pgLxSoMx52BJL6odE3VNujvf",
  "key24": "3QXyNJTK4xfMrBDkhkZQQJUDQJnEPPJKTQ2oFe7hKM4y8yPE7Z6QiAs1wuKGqJqqjWiPH5ompr7bdNBxM4MweTMJ",
  "key25": "MGWRfnwyJt9mq8B6SuWvtXqUPohjS2nUvLzas3BtdP7CF7r2Ykxd9FwQ8G2ovj6QyGBa3DfzwKgJRHmdkQn1ezS",
  "key26": "5kJe2H8nk5PyiHFVxtVs5z3fEgUSfHgZGpqG38enfHbgH4F1P6VyncY16UkUFHh8REXY3Ghhk77M8zpohXywTo4k",
  "key27": "3yZQAWo9DdTGAkbJbNjqqkMYkF6WByf1aiKJACCUzUbVF6fPGSAEHPa3r3hnY2WvL1hhUwAquazj9nnS5DDna1VN",
  "key28": "5UNou64xo8Mn5c6dxNC5FVVRi31u7zd78pY8cquV6sZsFEviqysyqMDbm1u4hAvjruN4S2sGZuqvXUdLPVHEMqUu",
  "key29": "5XbHSC4bJY7bxqEk3GZjtnNEvqRRTakPsmEZ8PVWto5zmsZKTDPwoTe16DBT5JTS5XSLwZYvPkGWybMBi7XSboSb",
  "key30": "3k4vxphi1LvBy1nbJdbAGJpbeEVh6sUaBWmXyLeyfbD9iV52AewkWfXcbYWXrp5n6B1gvXAWhCovP3S2sUvfBvUr",
  "key31": "62a3NUv3VsPeJFpMukwTEHLchJGBQHckkgQMAwQZ7g4aXd99Z3jwmqHHFUvgEwT4qZPW4oNbvXwWaASugMyJJnWA",
  "key32": "37tWRMsMzMHS4A2pRVtGD9TsQTA6NJ3ZhftJEgX3RgheUWra86ceFWyWJMJVX4AdH2du6ecKz1LfsAUzCaAZU5Et",
  "key33": "4sENQsYNGpdsJGBLyueDyDpLyANxJpNy9LnWcBt86XdSt8xqowkk9PV12QTYvzQiFHsGoEheM8NezmtRzCWTqphS",
  "key34": "7d7Xfbie3tkmfpSJ8TRYVWFe1rBwjKYgCWYFKTkYM82sMWt9hpFy7sEudZp8Q2vzJq3LLGzWBG2ZfsSaQ2m9Qve",
  "key35": "47f1RvXhq8ZmYPa1nK6hMHDFrihhBzZmi7LBgQhyC8mHtiBVsafpue4QeWVqnei8iE92ANJuCjTC7ktTKVEUo4tq",
  "key36": "7fzmjomtEwkPPZ8Q2caRE6sMuTQPsWRCuqjJWLdD8bcnmQz44mvuTWYktdMNbzEVFvM4wUqCTSkhy3dSTZ1T8G4",
  "key37": "5VkTysASoqeLncT1LDQcbypQHypKVHz5E44gV7euA51adukRsjmVU6RnS7TmH7ages1EnEYJrsHXeCvpq1hqkA9m",
  "key38": "2DgxQ9t1EpRXW3HwiqG8CfqFh6CwN6AzhgFADc6haTj9F51pYGNPp7JtycWhW4ynhHWNenGobRVm8qSPcuriWDhP",
  "key39": "381b24pKeeD2BzTLcCwwsLDBv4nfrfSktiwe6Y7WzWRdf8snF3KyPG5F8dTjYCh48JkKMhzfxGfKNwHzir52nvQ9",
  "key40": "21m87ahhUpN63yrRdZzHyh3yR5gim7biTLQZud9gXocaYYFoqik83w6KdmfzKtdwvXkffePexPKzVkvpUGhDrWPn",
  "key41": "2nUKjGEMDCjZQ5daRNa5B7EgrkiyrqTNMR3rqHXswUdvZyfkntWJuXfx3QuSg9tPKyBZXreaBecjaYWc7Zi7EN96",
  "key42": "5J3FQmDvBrp23JC6avYBTo3R2poR7M8vmV1j44Wdm1PhfcNAsovgemCBRi5kR42Zh3Rc8akSauVGw4RjJLK7Qhju",
  "key43": "2XbAQ9KZa4a2DwsWtjRj3L6t5MMbtJRWeUrwvUb9FwsP4zJV3hTyfj3wLJToJBCHLP7vZyaytwwyqpr2CoYLiS12",
  "key44": "5FRaVdQKwSuccuCzHUDBp1wRtNCkFdiinWrAwpiKh8KCxTckUJ79xU5xGJ5Htr6n8XkFjd4LUnJqftYtHTsXQHC2",
  "key45": "4ADFXxDPhPxxbK7q78EKHPcw7to9R6fuubbXGYTZU3Q6a8C9mqRiqEGmqaXGv8q1GcJxCKM7wbDqNVUoDryGApRH",
  "key46": "24CTDv9PKYSYptHfv4iz4ynPiMSDBXfToiZTLqferng8RrP3pKaXs35kdiLVoeQa6RrH7LywRJQWFVZCNekbb2qu",
  "key47": "5pYJa58CNzhmHhz2T826NDHpzr6rSvpEbCwnADjJugk9uKT2wRwsv6BuJMqZtr6kYy4iVES2nHfAqZe74dWiSGsJ",
  "key48": "4SMJjQXLULHuZ4GEc1bD7KSrGB7DvEmPuZUgoaWsXcQ3ZDMHaK73FxXfjhYgA8xFMqwfzVpJxdh37VPGTs21KH43"
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
