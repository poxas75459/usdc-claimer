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
    "9cE4eFgvywLitoPjmDFZYTsRec9UE3C4XfvFTwhGMui3qWMVhVD72Q6WPLfdV5gPgf5QvZ2egTqpcJPMgiivhMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxXKmzMeiT4LPZfDBwNW1Yi7QjM1pPJPVZbnbiWbQSc6nYp8ARjWa6qDjNs5bFfeJyCFcxpb3QMnTbKu5zuSTMr",
  "key1": "3c1CBRHKPdTHzX952aoizJS24LF3WcF7C42UzjZzk5pdnPGsaAKkdoqgfcZpZdoPZ5ZgN6GnhMnBr4epMuPCPGXD",
  "key2": "3epgB2siDVQdXdF3SBMKW7snhYonTou6cHuDTpmgCRTTUPjQVhk2nEs45RNVCaHkoSNpL8keQzfqeqGdhtBAfSyD",
  "key3": "4WuQY3eWj72Uc6uA6QLYifN1ZqLgiKkT1RZoEoUnEY227LbsLfSTvoMan3UKmfUoJ49u1tc3Mz6DKQ3eMYnKB5B8",
  "key4": "2TvD6Yxt3F7HRAJ55RSPwCLi3Xf182QZi4qeCqnxyz4xg7qTtjs3oR1A2r37v8m9pAGhtCZ7zcDs9pkny8HyEZaz",
  "key5": "zgNSTg1qbHm9TZzhAkUdf6zTSzLGdcsdXWKqNbVTWn49kEsXRieGMmzzxLjMQTJq74ts1jQ2KtZSEY2k43F3sFK",
  "key6": "44eRdTYP8gvjeV5Gp8zb2XYLgkehBSJm2tJb5xbAjWqKSuiVTZXfWjfyNo6DsmE9z5usaRysp1n45xNXnzd7oYTA",
  "key7": "2Cy6PNYPeRzygVnzJVcHwpBWaHtkuLDvaqmkXbu4qQt6y5g8yRa3PK8NqYPBaMtVKhCegrc7q3ScQ691WnEqFLGT",
  "key8": "5fB6WE9KEvNc6UFdzU6TsDoBBnaf4GCnaoVnJYfFijg3AbGkU83VTrpzRviFvD7zW12mNzGkEB9ug3ZxaCp4HgEj",
  "key9": "2ENmGVYGKz2Gze5VZfMb2GzdSahLc3ArGQQwfKNScKf6eApu28v5LXiuNTbYPm9wcaba5pAoegSQ2uUpXmkFQjRi",
  "key10": "2iTaebnGJZAXKTJp4KFESFcZW5zqovviQ9PQBF2Meo323Q2p15cafFKD7ChVR25t5B6pu7PXv4i4eXZtQTrom4Wz",
  "key11": "4gMJa3CpcXtK4DHQroieP8kdiDziSCEGsyBVNDJrCcaUAPwc3k288UgM57zrLA46wQGHbjmdfbn86HMVkQWmMe92",
  "key12": "5spFWkREVmW5bbTxJqwx97peSsfMkgHZpXRxdN5VuZXFSLVA6Fn8Yq9Fn9pSRRAPGtLs6v2vepFpeyakkUW2GDvS",
  "key13": "SExrxjanYifT9S63aft6qdqaiY817TBJesCFFbBp7u7PhLqMDB5g8BcrWFvRw8Kkt6srFhsa2bD4pG3Y5vmjPML",
  "key14": "3axq2aWu1TNh1aw2HPn35LvkBbX6Gi1F23StQy85EZpnGxYdunwVsuCxfPEdm1JpzZg9QH7Ftf4BB5yrGnAZ3B6J",
  "key15": "3GL6ytChifqLvWmGzGWpHQQd2a8x1gjoX9WHKGUcravp6axtKAZHtBwNShAkYBM2uzAVh1uXhvW8zioM5egEv5A9",
  "key16": "3pPCXgxxgiLqrUDSq8TDbPnM2y2rbkqmq7tfJftrhxC5mFyUS746rhLCipA8wpJWUpuTDvEuChrR4PYSmQSh9mQi",
  "key17": "3anDy6gmPueUUVe271aoceP4EXzxjHmaJU34wJyaLachR151ZFdxvAAr6ApMNHHPdmwKbEGCErXTmB9aXvvdsiAy",
  "key18": "B6NNq8TVU7pPdfDjq231iYgRdcVwcH12PSmHrsmmsaMeUjQbt9Y1ooLXoevrimDZMYFtDf99YZiQGrhMPHQRQDu",
  "key19": "3oiqwwtruGNbp1aeQi7mo3gGcsZ1q3axSMFP1FmrcAR8H2arVJ38mW2WDWjNSbEc7WS4oJ65nuA1JxMKdvB9MJa3",
  "key20": "4AcM2N1j5m7nYwZfc51Gj8uWb4DHfouhfWu4BKwyTez7LimbipxpLzyNJMi4u1QYtQSGcZxDJHND9LrxGdQ76gqq",
  "key21": "3N6Hf2K6KuN7rfziST6rJftbHT4rPSvEVvd6kZKTU1LxvB7zHbi7XndFEqGqL7jyPYKz6btscbrpt6EZBoW59Tm4",
  "key22": "2vMPMsHSeLCRoS5WR1eZY9ndhuvdt5Xk7bVygs8TKK7923oT9yEPHSxtFux9E1DV1J1M3VnmGyb9DFsNU2avmhiK",
  "key23": "CWcXR9K5ep3rsHyZ7XH1CnsyYT33Lej2xWwAzcxFK5jrRRmULyhxbwQDKUBhs8Jc3gAHLuCDgjVSWzDksBvr2Am",
  "key24": "3EpG1dnH64ogYcf9FZqAZiynbZ9T6X7kkfFGJs44i21jFRzZh1sGZ2gFMid3cgjG9NzsARMdnKq4NaJKMXSreWT8",
  "key25": "3E8jiEhAihtsgGJCiETpckL7cvuhrdGaGmPxeNCkbjKxKoTkisnZR3KHT7qTNZT1TzFkLGsceJiqmzrQKRqeKgZp",
  "key26": "5t2TpiUvhYZaXKprQVP8DymLfeWZAeTuBVNLFZjaswRtsRwGYfC2booxr5aerATGam87gmgATAcqeVio1uvKJqo3",
  "key27": "4ATYcyXjZ4DbZrPT4nqDSKmFaU6k2rV34Us8tgpGTR7N4RrHsdukkSaLCXAFFAGRDke3W6THFQuEqYBxf4rVwyao",
  "key28": "2WZgJKh7zJgY6KD6Vuz4AW297gccaZ9cNrXKBiPk9JHJPNMha6UqxvVhiKhjqwMxBnD7d6BqdfpjMf9EosKT7Hs5",
  "key29": "3T4iA6cX28CdC4jdZ7UY29P3jxzE7iW9uSUwXa8QEs1ezwhevqBQaFvuYkdgw9tigQdkCGawdUg25yMK4GR3UdF3",
  "key30": "27nwqGkkBbdZtEmW9UmeqiLdC9yE3KeifUyJCUkVefEjPjxaKeKqUL6Cibvv4Qpzkh8vHd34u3w9vY7K7FXKS7EP",
  "key31": "5cSZgYz4YBrpepmWWoy4aK3HB9tjbeQEbBUi1Tq6syT5YPabQghoh92Lg2wyjHeEEaSx67BWBbeA6aKnTWYFdTzo",
  "key32": "32DWbChGashyuUDWmuGp1mvePBRnDp9EUbiXAq5RbEJ4HW7N3fe5hbZ6JnoBau6CVjsQwBDx2DiihXyvg7UivDii",
  "key33": "3EM2KRqqAoyW8SppurE7ZfVHBXTA72MGFLuaosQJdSWPFLV1evrbSRt5h31MJ6j7jfNne4Z3bsKmkRvKCeVSyT4F",
  "key34": "4Cqs5SYugnq1ru9jnDWBAkWcmPSPBbMhk8nZrWRR2iUFFD7QLZEKJVpXSzeUo1x9hdzqsed9vyvYjW7Di2NEtvVu",
  "key35": "3394sfDdNQSwQ3W9RJacZ8H2n39DnpKbKDcXqnKtVCzAqRuobb5CzNSzMPfBBVyxUVNSFEQwEYW8a9rQWLGNSJFU"
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
