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
    "2BFq1sVGVW4sthuh2zn96vazvapWuAHiopKbwCnFzoYwkeQjSBLbYMoCG8KJQKi3Nps5TxQwNVG14NJEnMwWy51X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdFQhjHaKSR6wWzgnBRMjf5o8rQgFyDrHEiU4VRWLWcru4fBbageM7omQY9P8wUCV2DZkcfJr22sZNgQUFF8A4B",
  "key1": "N8yPsNqHJ2Ndx4hX9pL1Vbmky8GoaUwmQxWq2RuCJq7jgADKiq9G6dCUvKS25L84X5VMkQBXaufgN9ZVPT8BqXe",
  "key2": "5Ys2HqPQxARJvQUFYBPsFZFR43H7DY7VHMyzf26KBpmBW18cw649baCdSfiMQG4FEo4dQy5N8C8q6azCWHHbR7q",
  "key3": "4xg9hevV6jA7nVREY2Vujdia3aPrmEWCEbAKdwPeoa9v28yXPcgQxHnxPpUJs3Tyx1KXPZRP9vcJQFsVYSRFsMZj",
  "key4": "PjtXmSCG37wZYWA5Sy4gXENi7STKofaPdC8Vj3MWMUm8T6ypqdidzorS29MnCh8ny274tNznAfjJXruwPVgTu7c",
  "key5": "3gFcdQSP7BwqfF2j68FxMgnmjfYeGAZbVFWtnL1oXy7E4aRVAexjkSfgQmfqzoCJmiG2wYTfwZ8NzKjHcix6qTnP",
  "key6": "1TN3aRK7DcziGD6pirWcZoFbQYVKQvG6uVuVzeRvxmiMFYean9cgV3hbHAPxiDN2SL89MJr279yxtbeXnJ5v9XA",
  "key7": "m7z6qiTSBAqPBSNSHf7RRTbuPTaKzYa4pwZMwWWx3JrvFRqDPXT9o9d13EhYFf5QJm9Fv4DbXHyCzz3pHik5C8j",
  "key8": "cDjDJ6q6bfwDskwg2PgBUR3mjB7hYCe9h3VEMuCmvb6Bz4XFt3mtZLc3mQH7usouNA1Zx1Jqd3HVDagjVKpEvP9",
  "key9": "3nPv5nbqGVdkGknRfpJY9nRApPnCfDzxdVoKXbicgEfHH2y1yooyLfiKL82M6PZgLwQtB6doSkYYeAJVXRNhwcyn",
  "key10": "4xoum5oVmGMEssBAAnjHRC6GnxiEXnoiJCSVQviow9z2zD5pmDHLHmhrKPEG6GevKv99p1RPGM8Z1PV9Wm9WzkjN",
  "key11": "3vKJaxr3xEoTS4drPgtty3y8Lu78ZWw2Nz9FaG7bReD4fLyuHi8jeMwAUajWBnS91kysBuAkjB4aNWuBKAqqmSe2",
  "key12": "22tCLFhEomXiigKR3JYjwPF722BaPK6PaxWijhZZPXwqThimhjuQFQNL4vhGLxQXmE9GYhJteUt3FeLAQiQUEZ2W",
  "key13": "3Sz3XkuyaXXNkhsGVDhhVrhnqfQWG9WWWRfYGrLfvHZBhNNGJpxmk8HZ5bZjCKnCEfV61NBo3GWtmNTNfb3Bki2p",
  "key14": "5pnknMwNzyjfqWGPumoCMECfyzT5kQxrDD4PWsAsQJEkJtrxkNk5EtfmyHYVSUvERW6x98EMiod6ip9uc9fuLc5p",
  "key15": "5dZafDp2xy931zvyKMexP8UHozcLTLS6yYmE4Uv6FZwcb2AsyDAKF5ANGrazXxemSKyXe4SGX9VZyTcsfgw7UXTo",
  "key16": "pyFk59FxTNZxw9wq5VxgYfHbxdwBCyPns6BBgoKDFi4voZGU84mZvk367eiceRb8226qMXJSCf3venMwhxq5XP2",
  "key17": "3rxm1ZiT2y3TSLG8MJvoBooV2VKvT8SQebHaE2vyFKgZQT7snaqKke3QNyoYy9tng3x2GT1zoLAmkeZpjVnWyGZM",
  "key18": "4u9t4NhBAea3vfJVvtXPhTx4Peu1uik5rShSryLVeMQE2Njpo6Uur7qnsgs7seGDQRB1fZ2RcD6XWojtc3iMF2K7",
  "key19": "YSLBckee67cS27vpEDoa4yZ9YJVKC5pEaEeNKma9ys2wnwv8vHhSVgmTzbRGe8qCVvgkdGaSZoMdbHyV3VAXRiT",
  "key20": "pPDyGK59WSPcVh7qMkvhKuuZkK5GYePhkecoxfB8WXWpcKKQR5ULWY5qx3e12xfywuePSCSQqafJDX3gBBus7UA",
  "key21": "2P9kBtHod5uk7yt4zDgUjHyGZf2zFg75jsFgWJsKMjcfhbn8upNJzJddUhxR5eF7Chwm1N5Zw1xe2eYJaeDDKRib",
  "key22": "b1jSmA7FqdyGz54tyEiy5CuiVJwYK2aRGCrsEdD8NEAXkqYexqF7sAmFyRBJ3qQGjo6tE5Y95REtn5zDxJDMxTH",
  "key23": "hWRQRrVvUcrVrJisHcpWPA15w7x33dMqbDq4MqnXLbLX6zwg8s71WGv4hZHoPDyR9pfHHykviFD87DzcgyGc7z1",
  "key24": "3pkpxXMpjvPXpAfAXzCfKB7UxcvWTwGYvQMLSQMbYkQyqhSrEtFq3sCmVZTYFFKi3qgGVuUHLM9UiteUg9oSngbk",
  "key25": "4D4L39NptqqgmT1YQX8AkkrvqaGFi4N8qsG4SqMPBK9vV2UZJa1e3b4TRUKCGzBqzoAqB2j3wFioUtmomMVqMMzY",
  "key26": "4M8wKSHfDi5XeQPS9QCwvAMaiawLwZT4gLfGPE3CQFLwEea5DZvhN4m3nZnYyuCae5ZFhUBcEz2Cu6UxEk2vWNjo",
  "key27": "4PCickrgHAEQcQ1FBYjU1mzSFnc9h2YN1pzUyNeahAnpj3tZmAfBFP7xNtgXwXmViaFkxDk3J1SddTQt4FK2At5G",
  "key28": "4mXQWs1Xet6VLgyzLxW7PQ481KPkhgo23Pb6XZx7ZbbFg6fBEVFGVsKYJ12BrQmBmiRXdvwd9wktwDDo9ipL6UB8",
  "key29": "37ZJY3zKUsUfVbonL6pigR2qeuCXCEXwNzhckgxEPXx8mwpzApMZxM4e7VyTWR5Kp5NSmY1RCgrXZYFbUcKq6srw",
  "key30": "3VUSnUEXjxK65gZU82opYiTPUn2HV2raCZ48i4HFtixMs15DrP4eYRknpyDDBH6PPoXEsDSoYuQj7jjiaax4VWQv",
  "key31": "3JGv3W4HKenHHRrCNfypMCaoUzZSMBWtjgVi5Pk29CMAcsnBn5wJkvx8aA8H2enf12FXoWYBWJpTQzFDMS53VzA8",
  "key32": "5FWiHcwkN8FHA3MWFbLUAz79eFAcHCWsSD6QnxxNepdqkBRGJsodubXYc8c4bL8VotXKGnH7hDcMercTUJfHgioV",
  "key33": "W5VUitZ3L2erSXvJc8sFTwk1un2oswMLyAf15dyrfMcpS1P9AUNyPEzs4yk5i8xCUj1sTnjgzB3zrrMRa14v8U8",
  "key34": "Jf5eMw2mbSg7Wn7vEJ4yFRau82MxnBVnBcCVmYn6ZLv6i1smqCVcSXwjxAyHMhHcgXdbY2HKsp8jmNtx4tv4uMe",
  "key35": "3TpdX4qGQMvME18egxpoTqrgTfjJEdqqa7iQX4XqbGvHcTi8fyTBjpx9xHb8Fu5ZqXDNCKGgfmzmZW2f4LG7EEka",
  "key36": "2a8CmTUe9kkpzCDX9x4RYTZWGxeimtC17gDMhwWsLaUrSuQXYXxjM6dqvkKRw8mLSqPrUm8DmBAGwvtyMs6qBXxx",
  "key37": "3wRBdfYSveUj3tLDBXWkokL7ax1H26QLGSf7BUACCyxGPfCATDMNrKw4zmjbNPxtCGKydNMX1cNYo6pEgAgLX8JE",
  "key38": "dPDKawsMBwqBqmEsh1JiAAatpHqh9LDKSW5wwHmT5whuEaWzmz1QEa2CX5z9MZStYYwTzH4PgXFpuE2p9x6q3ta",
  "key39": "2CTEN3dnKiTiSAzdsm8p5FCAKwVx7oVWUDJbXevkZL6k7dp3eNHvuKYKXo13mxhiZK7AibiRMwC9tP1pbkh993L1",
  "key40": "vQLW87hKtkk2pY8ySdN1H4XHTSGGcNVrmz1YjGzeqChK1dPoVirGowPLP753vjZ2axBdVGsDV7K7ExZyVDvRPV6",
  "key41": "25VrxQq7A8z47AthUXFYdggr72TArmycwXv7bWWr4BfiUAqXHZt48HcrXZvbtzhXMHmnVngmJSVZm6W4xSbcPHeA"
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
