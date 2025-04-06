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
    "4RZ3VSvHqmT8aMXvm5Kqy45V21KumAJvXFfLvTq46zP5MjmrVMbTrcwjWJ6UHfUQQjwLdFjxwAmMfN6fUPduM7sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABJixTbfjcWSbRJ7WRShh3iBYVN7hryNwiQEkr5MjiH5PkRHbFnyfYB7ZZ1kT8S8evSMcXb9cttzwqNBu55t9PJ",
  "key1": "5pqznmMmjviGQnptNJWSGDoskqpbbrM6vFzvnUBNymWXdQbjuzG2qT2vjC4XA3ECHo5sC8uSy14oyguZqQsY8gt8",
  "key2": "EAMFrGeT2WhnG16XHKZXkgrKD6MgQymwawJRDtUaJcCoLuZ2vssnJDrW2fzPj7vKgijLagxbKAqEwRtmuFkXvDy",
  "key3": "3JBWrAGK94jFHHamGLRHhUwuANT125rZ7urYxtLU3TgaFy3pzXxHBz1QPyFk6U5WxL2hsiHwbZWoH93XxCZ6eB7s",
  "key4": "623vQnc7ic3YeJFQtRjx5NxtDgSHZRprgorAYEiwH35oQHGFYVhhgzwZem9FxcgfhHyM5W7v4TSJodLUFEdoGxdv",
  "key5": "52gq5SuJJFQGYKtioLUPPkDW2PBdMXkpDAjcUYJXy5qrFCHpuJM77Y6rRf1NVizDYnViCfspaXGnh6CsFJW1MSFe",
  "key6": "2Deh1mMcoi7UDe9wMUJiZfsjBv3kb7fskdag142NFCndvLarGeoTJFD1qhgSUfxJi6RdUhhmuPLmERNKFkuMeMR7",
  "key7": "2p9ey5YHnQuEkPFdQmsSWUDx211we1R1kbEBL2f6NxNGXDUVobcowc65Jkr3oTotnDV69ZCniZEKgeFKhA6DKNUP",
  "key8": "5hKDSQmMCTxctNsUQ7s15SiVnVNLoZf4GJY9iGT93ToQzm51oCqcEKAc3NSyfJEbjFSonTGTFcfCMJtxrD23fFLi",
  "key9": "5LQ3yXEWjzCqbEgAgFWqkMqNupMG8icrTEvwbhiyw39xdzcYWvKRRBkz4c1Y6XVkSsfxyn43E4bq3ncSabdJN3Gf",
  "key10": "LqPGQDGFXoZ1CfRoNC9yGDBSjAAsoskKZHJEwKRpmuzZdmWves1ww23VWyP1Db93qdhKKe4UH6NVTYBBQRGCifS",
  "key11": "5gPs9LdNwoxgNfU12MPKLtw4pCqYuh5voPmfwTe9iyxd518RKdLg87DWrTNEyN9rhFuL6xhxDwZ4GDxh8ytn33Sh",
  "key12": "3dfR7azKbG7NXoQfHjsUnMR63jCNVVqqHj7Vd9hhbS5C22RWFFxWiqW4B8n848gwBxqXu1iT5tq26D1Va67aPyE1",
  "key13": "hcS5X8Xji5sDvjE5mcDfHba9bos5NTpdL2jhJ8HE3Yz8vkA4EdxvVwjZ3EbAJJ7diW2RBMntcsWkJL89G9kUR6n",
  "key14": "3dQgzTmuyVzxfEHcvVTcN85P1vJwLLA8s24oWXpRP2SwyuLUWzEqJRZ6SkJxjpXLUsvFLHf1meNoQWfdhHMwjTXW",
  "key15": "4a2mDjY22vhfTxbjBiL1LqGYCUmHxzAFF5iUqqbifakBZroH7MqjW3wvbjmn2renifBGDDVwd1zKfG8FZqkYQWfj",
  "key16": "33gHJBV4r4F4yonq1xd1GfrprnTVxPJqvfunrBj1dbsWgQTA3iegHJPMxjeU7SQZKxMXBWhqjCmpmzJwYNS4VMPJ",
  "key17": "5prcLuVWwJ36o9d1z5FBhPPbDdFk5PGCpC34zAprV3BciPkXiaXMSzZXneYGynL4vJ2qsB98QgcorFCBHAvH8mgB",
  "key18": "2CAFhV1e23zekGdw7qsDvdSCZ1W6TBkFvRqjAqhRUBFiakpbkLw6e1KiDiDksZTDWkAGAdCvcJMEiPPvDk1Nu2kZ",
  "key19": "518HCgLh4u6GJAiYSsUp8ARKqNiLzHRhN4vHEjNhuqfsAVt3EJ1eZiCh7qQHYMrRVRjX85D48k9qm1NL9g8yXhq4",
  "key20": "5HxLW8rVzXD2DJm3QAWgYw1YAmdtmaYHcAHbS26aRdfZoHxvRuaGKAxPqJt3NnZVqqKXwCEsowkQwBvXEXemq26r",
  "key21": "5Ki4LqToQ3dvRFGcEGp7MimiNss2H6GJt55WjiVJVRNJoWmqQ3zeUwxtoeak6VrKk1BixCFLNxNVo65Qg2vfYwSn",
  "key22": "3GYnq3yx8JG7vs2kzVHb6RdJ1deLZEzxtx5KDWLvUgK6UqiDcRQvj9GGLYj3kf1qbKcQN7QTiqyaumWoDQXhysSu",
  "key23": "BCNne7F5cUYoCX4kHez88gUUMaxPcyw9siYMjpHvK7MbZtWppwtDnXofUEz2CVt9uGZpdh2NyjDf5fRVB7sbCWQ",
  "key24": "438R8ySL3U8dGC3NEYY9p1GYQFXJHdfJkAZMSPshSVUd5pH41tJ9cQKiavb2XRpmjbgphNW7sqp2SHjkHWeMZ9zG",
  "key25": "5sBr68ryMyxgtXCKJ9PfQCgk9GoWoSoeFy7Dk8fYcBNJ3yM1wrAaoWEJhb34xK6mbnQ5LQPJ2ogUuJNyGyedpZ26",
  "key26": "hft2nNLPn6p7TFkcy6MboU7xJpTTxGzU8VxUrpqZPvypWwcoqK36TUhogRXW1opCZmZYcSpymnemtEyg3K1pfVK",
  "key27": "51nxjUCFwtBU35vis9aMBnTyqiqTbvY5qxDE8sQy2X9chwh5QUhm1v5MJkMB9EvVsB8ZUF8jf5XaisNZWhwvTZvN",
  "key28": "4jD3So8AB2hH6uA8fA9uz3HgbJv6kJGyNRJrpU4nYxJoCHwoBiS6eLpQQoMcUN4iTRfSfupvUiDE9dZd9SUaPq5X",
  "key29": "3hxCsYecLSp8NXmYEQPaf5Dnyf37JL3gAtqrg9YHYWyTQKJDgV1K7qRYTiqGW24TE1J6uqTL46j4WNutZNCXqNVK",
  "key30": "5HjAm8vjqZNia34bJwPnAwq5KccYgJpmeetgudNzKdEE4LeVs4Q8rEzzW5hauDbtB2QRDdxsucBEDpYojVDCSoL6",
  "key31": "3Na3gwKUFSwQVvvgAd5FtDH6iZLCamytA4j8A7qC9efSKskVHN9s8oKjyeiroQVFTP4ZXGV1xnpPLs93QRRSL4a",
  "key32": "4t1V33xBev5MKdMEWehhJYgj5sZdVD3mhRWojh2oinzM28BYxxCcbqbnbTtSq73bMbaSMjqNJx33UZsHe1Q71f4L",
  "key33": "5LyzCDAFvZ55hgzXX6cXzbncBdYAT5bu4DtCL3m6skcmrDbxnDKPA6j1t5yYtoiv6AZHWL4DduPkjzS2Tkyj76qw",
  "key34": "2NMhPwNCkYeG8ivW2pm3N39SWXPyTGdJ27QrZ1bs9kE1PEBWRGvNrQTGZKuHgqQt1rj8eSXecwyWvD8f9sy9Kn8g",
  "key35": "28cJm5CGpcsL2vh797RpxUezuEp1HyEVEGpXtcNbY98tgUnV6yPRShoZJkbt9fnGYbqNTZoek78oCJ5hwDpy8ZyT"
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
