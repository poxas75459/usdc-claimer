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
    "2A2JZjUfWkEK1ysr58Pyjwywbew2YDiXEobRnWe8QQmDbYs2kNZoUutAthx88NZsFdqL3f1nUGSDcSLhcEdnp5Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haS7RFbe6euxQ4p994H87Cdcz719WFVMnU22pzu6TaSPTCuLL6s28HbZAkRNGUJAX4yNmtqyWeDufmjEE69EtAh",
  "key1": "2pv5d2bySAxy4Pkmq5rpUYpZSjFb7MkLWxFAoGjFSd1nYuo47R6QUJ3PMpLwZCGZAiGqp9GjYZ3aGGj729TnpGxH",
  "key2": "4eXXe9hnPnuVVsxyiN4rkuFd97HE3je7s2h8t3Uzg6JxQx1UBucSEoBEuaiPPcEvJpJEmEDo7VnB8QM3kZWq7xTB",
  "key3": "4vdB9dPJEXCyq6A58XMvnF1DZBv39mySJhWC3cmGNdyoCY6CED6wZS5BKNU6jrvbtDJbco1R4cG56PD9dkH6zrKG",
  "key4": "3ThJF8JzCN3myQt8pLUwUKU6MmXH6PgH96S5b5NvpauV7PfyqRuV2fEE7eoDoorQc8bpn4Wc3Z3zvrb4nL8CYw7b",
  "key5": "33udR3jNwZ4Ewc47jntzdQYy2LbwZuecS2Usyu5CxzpUk8SBUgiJQ5LQ7rQn8VW4NodfJtaYBvGFAQ1tWRSCmHTs",
  "key6": "2wukttsLYCo8pwe5jvepZVVAnAcT9pXrZBUgzqVYPNW2e3soHqx2PAVRdndXnzdkpo3m3tfWTvHpMEGMRw5T6jYw",
  "key7": "cNeHxG39XWfWGkyv7FU3ZTF4487bdtp1nBNipNQ31ZMaBZx4Q727v48ZSPfikNqujmMER2awFK18YFeb5JXE1wU",
  "key8": "5n38guS9ViPEYd5X4aBY6QXx9sJ7snVgPZtgXZhisXAp7Hh7khYHQo864iLjMcEHrAAiAen8VKR6c1VEtdCZzMBs",
  "key9": "2rVmdTbUcwNNTAuWEiWoHisnzfNx87AK5nzHaJ3TP1L6StxTkFF51YCam8NDKToMUH3QKh48RJBg8C6qX5avVAmE",
  "key10": "3KuAKZL23WNZb8FiJe78H62kAn6PPgEWmVHKPVD6hYMFoUVGUYC5ssLzjKJfFAWwMaaZ6FrARdQds9nkeeTwr8z6",
  "key11": "5uQxA4SdSp3iCejFhVUta6sXseHXuSiS3eMmWVSsTeC3iyoSA3dux1MMV7tcKNUxgz6ms8aKZyswQ6sZ2FCAkRe3",
  "key12": "4nqWjDpnY4RGT4T6MUKhb2NxzCkEXMyuSwinukV8vYuY8mWG9HU78ZEa8uGPPPSXpo2Lg8ocHMGv9Nq3PgyFSZPq",
  "key13": "3DQr3NWegzKBxjphbKTG5vVgjSxfcRxBtwe5KHMLHswqFDSh3tnEWZbRbqPHXM2j117aBqA3wsrH7JnP7BAJsuob",
  "key14": "3aJD6oYxA5UMUjxrYZf3fQTnhC73ZEhQmvqBtYQ4HiaNobiTT2JsSnhH7nTARQvEsZhtuviNf25Smmnqh42pydbX",
  "key15": "3oCe3jBLHi7BT1zzvqEWDwoivTgm7QNafpF4Eeu1YKhUyaYjHtA4N3DTjuWzmtfoqDE5TfygRTwSMLGRCQUk87dv",
  "key16": "3JE6JfGgeamSRmvvRf7hXLuCSWktxYAYRwBWAXP9P8GFaide1s8HCkHZexzEyq6uKvKqPZy8Y7xb7v8AfEN5vaAH",
  "key17": "4bsBZEFtqCzTMPEyoX2aBvMsSpym4ygHzhNEZ9krsGHZGnxCjj533kKD5k8zpwQnUhJg4RHtk3CCwyUXNHMYzQ5a",
  "key18": "3qdTHAsY4iaYPFiFepyM4zNAc6JcjhdutfmfZ1C8nuUJU9Uq454n3bZkKAFDS1L7VNriknY6KK1KUqSUNmZMfwa9",
  "key19": "22TRfhJdXcL6dWp2Ea2eiPbFVDGphB8EzA1MQrZiUx71r3LC3sd5mfGfHrHn6Rbp2E4sKz5VCBu61227LGZocgqt",
  "key20": "57uNRjLE7t79TZSqNaDPmXGg4jZevhFtnymLoHMVqeFze2aftiadjmdyFByYhsGi7k7zVYCYcBQoFvQZsH7Sn3Wu",
  "key21": "2c5XSfmZ5mFGpBoNUGKtt1jkf749763UeuNTmzohMKBwZhkMi812Rth378L96SLDwTg1NSnxFB12nbLDn31qCx92",
  "key22": "3AnghRsqHFCxMjwt3r6ptadcJRKSUPxpfrcdTwDcuhnT9g9vN1sh1So9jYNHab6B4xwuU9WNgAny8ruiKG1Dgt7p",
  "key23": "41AJfR3saXtHFfmhRHCUtWwRvkucuRAZfGDobTAykNvkRJiSurZAHyjpUZvDyzqcyK4vaUGBpFMTVeuoqYdQXU8Q",
  "key24": "3PmvrUsPpDQhWsJtdJKAUUnjLiVySFWkAq4iYmmFo1z8hYxmVT5RbHHQRcsTd7TtFxwX58GD6vaJRQGJmdFwkCUU",
  "key25": "63qMq1AYEX9cGj43t4S4qDniUjtccnHzMe3L5Ra5UivTPkPrQxUgtyHRTbMGd3DECM1d72nwBGRn4FNwRq96bwyE",
  "key26": "2Mxjb878LsDmg4sMyQKZNqFXgi7rZcKVRPis7Rbv79hzNrPNVsNMwc1NdkvQeDXsqLk93D79juYbfkKpHtcqBWnS",
  "key27": "4yF4NkraYL8LzgwRUxTGLeeK9ebfPbP4ducbzXbZMtksGeqtjZoSKuTPB6F8S7ECJGHzzTrMTKd9ghBEb2ZbdDDE",
  "key28": "3ftnMxDKszZ3LbVvdmULNRnn7rb9TmWeCu2d1w5NjoLT3jPXax4R8KHYvx4WiNwSnwr3d9j3qVXRCEtnZKbTrQkA",
  "key29": "4kCewSrbHTmTWJMoSWJ3QbmzMciTU84gAvn3TLZNQu87gag75e1x4o5g6XitaKZ1xd1oDoWu4RKefuGYggs5NhPF",
  "key30": "4M8WpoD3nDNzQgpuas8eYLsbb9HZGfNJRkccEuddwTE9ztAN5bGGh3jyxvwFbPaDk9CaE3nj7pRr6oU9XCh97znz",
  "key31": "4qmZVHVUsta7hA1WRsdrgTejyZ23yrpQXxbdkAB56QuCvasTmS21SJ9KfxSeAJjVuSs5XKPbr1F2NjeEgo6pXYkh",
  "key32": "64DqmWG8G5v5p6wLZ8mSak7XJTnPK3q7rwpfTwa32mecB6qkY7JZHZzHYjD63tcisJmDXfCvPEJfLM7tfUtU58zi",
  "key33": "3X7YFtXrwDjPnADphgrZyBUcSJBgLxVjkD2eLMg6kYzgq7Wi3QN4xb4PYCmH75o9akuNPp5RcFqZwCDVnUfnDT1D",
  "key34": "5a9mbH8e5THxCBXSPRqZA7WnuhBBF9n1fXb3eA6EpPRj2PM8jY7BN6RQSDARfHXPXEV3ZnpP8rbFjjmNueV1zUSF",
  "key35": "3kQVhwzumSudj2HZFAnVh9smPD7aJm2iU74svFEz1ztKZPRGJRxWPjKeiJ54sxYt111yjpyHBZZoF1WKHM9QQceP",
  "key36": "bCBBBBHQtAuVMg2kxM5dDZgyMgAfo37jJ6vE36Bv74MHZvz2gaX6duFW4Bmx3MZWYjHvdi1k9hDPszQhGUfvQJk",
  "key37": "2nfDRPut6zu3UFPrJRLyr6PyPv3uM6HBKtHvfPqxUnCqAoi8qTErvrcFwHcAyNsTo1jCNBhygPVriuvaP7xHWidi",
  "key38": "62EjT2Wc12PKKvKwwkMWxiyAEse7LvFgjFKFjN4o7YNBJ4uQZN6xE2Pcp1i1QJcBp2pT3dazugfVJ6bZAzqDvDAd",
  "key39": "Bu7w7vU3gDkW1bmijoTraGTQKw4qUMN5FQhcuF7oMphQGgEJb1B11mJrtZJczafub9SJV336r96uiVjHriUdrWD",
  "key40": "2mKnHaTbA512vvFoUs29NYiQcGdpXGWAk6R4QqiCS7u8hpBA2GD2Xuaz7q5aS62rimjAA4aHJXWYNrbq1feXnFy1",
  "key41": "495BKe3HeuP3NUNreGnLo26rJXVKU3eRK5LLtbzQAKZ7CGqqAkHmoYSYLWw8P3PuMYG45PMz1Mxbizwhzso1SMbR",
  "key42": "65uJvrFHd15h64ofwyuLJ6xqSvt2h6v64XeRBsetc2rwQ37xUnBV6vZgJrw74Z2X23Y3KZUwZNMGgnNE3WFn2iDC"
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
