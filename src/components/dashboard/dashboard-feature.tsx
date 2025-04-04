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
    "2Fcbyu3eE16tNZX8Bm6RjRQy1kreguyNXyJrZ5Ms68dCPAGWri2ix2JHfzyMLVXvb8y483GML36byjgH2jvdUET9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FnMjioWvn8xkvq3QQkKC3H18WLhojTtwfyMYG51XfdB6AyqSvoGdCYMPbDM2c8AXXpb84CediUdGhddkKaqGx1",
  "key1": "3gEH3qK1Sdn1DfxQpmAz1EG6zn6P1Fo5D66ofYZ4qkcQ6hhcWKArCM6u5hsE823kEVmRcV1EhJMVMz2MwcbKgAVz",
  "key2": "2Y3Q1WfNz9HRxJDkhMKxhe9mgxaZ9eMu1E5gVGgAe4fW21ytAJiic1o9xfgUNPCe31FEAY69Y5F5TAgPwWwXexus",
  "key3": "5BY7JaZ2fvtAuYXRA4G8nHxUk8ECSepL4PZWp8ddYT2PnL5bT4qWESuLpMZsvxAq1fDkQRn17QPsLJXwEM4JfQze",
  "key4": "3tfK1YQXDxm9ijHRG6dJwcKZK9RjCasFNeitTRRsPtAT3RQfFedPzVs1ndtrBsNF1wf5eJykW1YeXsUXBnY7DM9H",
  "key5": "oR8AwPMWzqSaZCW9Xxa5YPsRWKbZqwT1J2PKzK96wUhbjucmSTJHHb52YMsxRBWstXNPrVCGe9FzHMmoD4ZRoUX",
  "key6": "5XuRtq5ZKVr5zG1CVjLRWdy4qv9c58WShT5JRKSmUjQMgPaunwqGjxd8c7QSHA6yeXURGsiZTB5dFSjnq9n1drst",
  "key7": "5YRTzCynVPDzarVq2HPMuo1rGBdkFmFUYYD6sLjncVaB1Qvwyvw2PTk5aRfaf7Hv7xSsmzfbxLTMMkvw2877ecAS",
  "key8": "3CEktjsp2mhy3RjTZgGxnWv7iACYv3xnvST1hbRGZpn3PYRL7QdTh6dDoewhEwE1DFKZv1RbduMVv6NNBWh54wAm",
  "key9": "oJmsnaLXZC3Sgdc6e7MGWzSHzbGhtRPQ1GFCcvT12j5kkAiwgZMaXfvYAtgXhCzD8R8G9nnKXRnmi7JmZaSHG7M",
  "key10": "4rUjDJJrKUFnVH7q1QZPoZgzDoy8pqWVjeL7nkGsAMiZmjcuNzo6xkMpJ9tLJQV15hK3bqt2hb2z84Pf6w7qipRA",
  "key11": "5PZsJ4yVH2H3oA3YwGYSpVNoKzJqWUYBTEaD5UyCz1a17Mk6MctPQaZTTgcYtBMS1dpJF67iozbFin3BLFyM3Q4E",
  "key12": "3kspErPxgnP39S4cqMDAUysuKfFyyjX7eWhyFjfVYcdVJqXo4eUCoKpStM2bAXPB13HgYPfYcrwwsJTj3G1wr35W",
  "key13": "2MQNR1w8W7741vKqyApeQF9GMXvSZWXXQ7VrYMiDx1fKeikvirL2rUdpMfePWeTTUdLUMqx6YaUPYwENhrqo3PL",
  "key14": "3GZJJqG3ex5jCgZUEfTBNLrpWJzB8Krdw2XQruK7zZD7b8oTgdzxgA2ZmoihzPvDrisvrUH22czm8hnrMMvoPohf",
  "key15": "5EdRysBYNaNfnaunsaxDypUCLk8GxHwdH4tTVtdXGtw7hPgx917BtrrcdaBQhJzK2h6mzGmwuqqbvPCu9fsPFyor",
  "key16": "3PWmzQ5zntzuugoPSrCmgNrdHEX7nyEX5nP54kgCvMANnr9gwYC7mS3iokaTxTPz4VtTzSLZKwfwafT5Ddt1SGqU",
  "key17": "52oGPFxvk8CEBfmcjkKmysz94NZkPiZo9rqx6C7x2LTeCHC7vED2SkdAnJQBt3FQgBwCNwwGkin5sTZHM68UoDHB",
  "key18": "3Ym53L769YSJfGXiNCBrCbES3WSFHQcfdviFUt7xZGapukPX685U7zogBKjYhhojzbdEfVESyHf6XSDTowGcgdgN",
  "key19": "3zmi4ZJCYeos7mRRrB7VhPLGoj87jqodAH6ifX17RuKfYjLsRZNmYtfNcMqX9xnACa49j6jisNkjbvXpuhDibXzT",
  "key20": "b4pDWsicXWqQjqnoABPytUZRucAshsxeKvMbfeZN2f1U4cf8AyNMwy8dUxwsNckn6PNR5gjhBkqvMtVN7Zc9sJz",
  "key21": "5UvhNUyLjDJTcNXAJ5qXAXceCcDbkmwpvhr2RgnzK7WSZFyUseyTkBRQ4wXv1vc9Ahax8nFWv3PRiY4pa6qVdpc",
  "key22": "2XQxg55ZhNeKpCi9nhRQAcMmxocVfcZo7AQwWka7WuPYyALvkYWnhSQk7xzUbZdFVdVsEq6dmD8QdDiyHM6q98Qd",
  "key23": "5fUpMsrwQAeWGbBP8Xpas3BNqewJWYrGC7Nhkv3kFGVgYnP9ycP7Yv95RbCUCBCpDaXfeQWRqSM6HSV4ms9h7XFB",
  "key24": "ivfwbwcAdpkBZr2tiaXrdMPHBjWxHuyTHmrUFdx4MLf1Ays175gqXPfFEwXrJ5dLWwobgvDRtkaQRLnDb59XjU7",
  "key25": "3qB9VkC2QJ54u9xxzp2YZiZV2UF9t8ptmwVfUpt6zMJMH8eAba3CbtF4daLZKA6J34XospHu12uUfGMDmJYiHgNn",
  "key26": "3ahNsXpAYgdzKTdSAfJiDWdzcM7nYKcNHzqBG1Gb92QJZwQax2AxnvurPbVP8RDMh6L4a68C8GhFzQcmuW2jzmRV",
  "key27": "4eEoLdVmmhbEmcwRLKxnw5NKAXKZkeNhdPPYoXLqdLxGDS5kkwHhso9vUghcN3xY2wbDZqXGf97LC4jkzG3VWRnk",
  "key28": "2mDhwYCgNBrJNHR2VBxktp4h9tQA8N5Ye4Ce1S4EiDmzX3RKENUKuHNXjVbuqsTWGCfYPBPSsYWEKL9eCvxJwRiK",
  "key29": "35z9hjNEE7Y8b5ftz5v8fbWdKUdX4XiGfVf4NxuETU4aKPJ5n9vykHFeXWiTJbUSGW2thAQcksDmFTUHdqegK5PJ",
  "key30": "92Mq5uAW2VnL1vHTf7RNwxcjynXQRPt6sd3TMEgG3dYsy5qjST9wLCoX7H3CSoEMai9qGsuo8btPop9tq4vtvYB",
  "key31": "5Hq8iJ1rWGheBcgpyZ5KMHLfQXLTekXJBUTvHSkVEvjxDho6SeCDVUdyuwGSENXwrkMXKv4TW3HQQduRyWG1qK9B",
  "key32": "w7EF5WJijZcktMpHrHg3zePWi1A7Fke6c3xy4xQiBCoF96AW55WrcbXkNkCSGWkhU3ke3BFqUrKpNtFSydb7G69",
  "key33": "EQkbNxz9rN1an5q94GvzynWSCi4c391C23phxpXNJ8eS6beZf2iaU9u9kj4EtUb4fRwcLxAuoYnZ2eXCpxTkEL2",
  "key34": "53erNCUEdQWoeD46dzVFyHFvE4yaiPUg1eDLqErzk9oo4WSfvGcviYyuyMTV4Y3mDE1FJDM5sABQbEvt2jJaCkAZ",
  "key35": "5K3UqW1rvbqTqgNSjmKA1dcBpyYV7iHuHmpUk8yLqSV9ufQKGeH26dNfSN58vyJJppbZQQJx7MLMrvaGP1sHbFtL",
  "key36": "4P8ZUHKPo9n9bR8LuUKDsUSsNWSUsLiGy58x5QLEtweMrSXa4e7u6H7rqJ188AHLUH95KwLN9hw48V4NfacQBGRX",
  "key37": "32LvnwL7szcdEHrV76yc6rkJPAH8LddguLX82aMVi8kDPYoAbyD1yWZYJHeXkWNwVtcANsJbo46QTsDqfuPhEhbj",
  "key38": "A7m2tWBiYhvBBoEHLNipv7qQ2tLaq65aVSYVQ1sSx7pFmP5bPoUpAcu5ejBDTUXkuyGzxsczNcDLS1By8rehtK2",
  "key39": "5QjA9hwR2p72WPmxjYkXKrcwf7NbPnxmXGEeTW1gsGCadM1XmiiW8tCzFedZYVr4R37c9WsfAEHPK7t3QoU5fd7c",
  "key40": "2eswdh1SkFKMm8wtw5CXcm8dMBpYBhpfPahuzgZfYkfZ2rmDeZKUbnFEY9ZTQuqXNN98H4UPTRKoHTjxMZgaem5E",
  "key41": "3NSp3wZvhZUCiGd9gWii49UDy6vNnKxBh9rCS7MbZd6RC3AAjDavjNta7p1gBBbJX28P8wXJixHZLPoznACtRXVb",
  "key42": "4eFMjwVbFdwTA6VRgiQTE6rookF2kWC7zAc9ghKr2c9SERg5JmVFK6MNdNxhqfk2gDamrUXAgifeQNFqfgepVoPf",
  "key43": "5xTSYhaUXuCPPYAUpQAsZjT2difAZxyrAdjvNChHt9aw4xGrVzGMYgCgH15wS6PXzNvioC7KFgC7rwQzMuUe8yfh",
  "key44": "4fXZPboTErh4WXvxddr4Wr5RsFMp8DRGXxwBRPkBB9aCYuvSRRST4GpKSQUeh1ngwE33mqPg53767L6xbV9cSr3F"
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
