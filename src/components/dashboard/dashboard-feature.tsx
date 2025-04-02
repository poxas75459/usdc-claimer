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
    "4hxNWcWsB5YhNpMZdd6jiht5gWj5PXki3ciN6taX1fK6CRk7bEzJim4s69NZU8cDAhiSVaXwZHxder9pYJXUw1ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEYY7BB2EHhhbTe9HLrtk6vv3WQZWAHgVa23wwUKbzQauiCctviVNsA8Wav5k73YTnJRdxFLBWpaTAguawjJ47D",
  "key1": "3SYqoAmTXS5g1PzJHS9U2YY76SpF9ABijn1Ww9bQArctQisg7NsQKt7Dp7RykTYbHBTKkR2nZ2jT78kSR8wscMyj",
  "key2": "5zCRigqFsZW4huHhe52u6cMck67qqKBBdEum3XMi1AFj6fGNamsurrqXozuzr8mA2JekLeAGBdGj1yEMXKNxrpjq",
  "key3": "bjtwC8JHmeNBqMhQfXWYEpehtEwDzfUSQq6ERc6xoVTMjHaRaHQqXouCLibhbuwsiPxe9Tetwxz9CJFrgFqUThr",
  "key4": "4kVqgWXkX8oC2g2ExJ6M3HGgXr6JsYQn2F6gxX1mrTZZQW4jVQVMuUJGDFKHHsnbZaesAHmCJBkShNNbLuxFeVYY",
  "key5": "fdio2AKhbnpTUx2tcva2Gcryequd2VEA9i47My2tzBquiXN1de1sfB7CBoDb3vqiocZugyYrLe1rxGNSMmfp8k5",
  "key6": "4TKK5q4VbCQ6kELzXXk7oXW8XLaqNohAF77prLWyPSKKBdEiREtHewNjrTiSgLuTrjLXnHtZhTXvNsXUtGdzZnix",
  "key7": "2X6JSW2A9KmgaMEYdvFuXYAh7V38ZBNXuHLQC7iqvaZu1uGXXDBgS1B4u4oQALbjV78fBUqiyGRW1SCsHQJTmZ7w",
  "key8": "mYrheXW8WHR8NBy4BZ2oHzwkeGAorm1AzxmA7CbCuiEgYxf1g5DxQSefCecgdRrwZEDxscGYvbTaPcw5MZ2jc51",
  "key9": "HFvMWer5JXsJpGpkgVS73zb3puR9C4bgNtSA8UbFySagM1RJRuHpVCePmjrKoQNLEC1HEtg2DCEg4dUppHZfiPy",
  "key10": "4L4Wt1mhLhG61kfrcBbzm2tFif8aVMCkCHKFnhWDnfSXdxoW44aezdPvNpLKAg2Bj4p3Czzzsm7Aoxf987CUXku",
  "key11": "4LPDgDMa7Lb8haT4eBp1fBYe77HWh5KTxCF6LfiAisi3vceu7CeVqcBwFqC5w9GjmNJLgizpubPAuiAhhUbT5KWP",
  "key12": "5P46XDKsPBAEszWZV1nwg2gNjWLHWorjk1xc7p4oNQvHfAF6QroTrfG2R8aNbs1XdAwNouP8AsbsHcKrixUK9thH",
  "key13": "5yqxBuXUFZ9MkN4px3unuevcRB53pQSvT6YSHBfU32QUcrBEoCZnh2EuxNqRfq7Zpv8GWsbQWkEXULBuq3HthcdG",
  "key14": "4PhzrAxFGJfYRFpR1Vc4DG5YMQ9iRxn1S3ysuLXs7AFD1mfmcQUYQSh2QFe5XSuZZKZ8sN5sMAdJS9hivjmkLv9q",
  "key15": "fdcMJapDrSaMcz9D6gzRpBGqk9ST7h55rEUJTqjY4RmNmTDBvoa5jHZ2anfh66o6s5uEfRfBbPXD5ZSdHfkVcjX",
  "key16": "4XQDeDGFTGga2jfeuFF62ppNKFEkd15a3UeaUXj7gTwvKHX4w8sVo6Jkam1LDHLpm9iHuELYyUpbbWw6wKjfBsZ",
  "key17": "4rL7GVUWrZTRMvCNwqdUhkUpsmen2E2Lk4US32HDqehGVr8E5XA9qW72G7WhyBoxadH6hZaqPiKSMvUwJFnZxtC8",
  "key18": "3BpSVDMadDaGQZoibf58NQkkk82GMxciGQiYeZmnzPru1hLBbYg5TmMjiQNAhctChC3VS3SNNF9i5rppRxtLU8jF",
  "key19": "oztCo8BZ9zwTVT5c4MWfCrUhpavDQ4CLhnke242CerT9qDHFnb4p8zsXFxwXQ6yQCnjrek67tXfWxYXiAXDRrAz",
  "key20": "5cdUjddXpNyzCrYQ9ygCAMDHYrz3xroNGVao6NFNzvj5wMsssmj5QY3cEawEa3TeoapJ5QEcSfQWYMATHBtEFT24",
  "key21": "hq9PYqA7nggSbiJhxHavFaRTDFoEKRURRq1k3ChLH1j4RWB6JCC4Q4f2sKKYiQGq5ci1duSut8kguXFQVVxQvb3",
  "key22": "5KopF5hB5tqkCRxe5Ygnvk6tBCAMNvfw9fcW7aCLg4uGx4mTqN3f6KvuiyP1ExXtYATjhENoQZVNqKr3seBx4Upb",
  "key23": "xDGSezRmL6EzsfaRL4HXsrg4fpsqZc1WfQqof6sYPNBtQz2SpBbxwJgfdYjwU7TGEwFvC1GN6raCjh2D9uP7BWe",
  "key24": "3UVWwLxpG1K78XW4EUPiFJw85gqSbPvQXPb3UvdZrp8TkxSCwWS3VpQ2rATaf6nFsjepZGkxGPpf1o4rnC8CZrTy",
  "key25": "3c9WRsv2v7UF3MhNCkMCdMNRsVr9tv78VQifEaGb9J1RLhUTBn34zHsUsx6xZLdZmFYWQ6F4b4NZ1MRj5SM21Jg1",
  "key26": "2MXWa1uLESjj2gz699g9Jdy5ehtfbTaqBV4MD32Qi7h2Tdo4J9dvuX7FKs7Gc1P3jdVk5LaoMNhbtmL4kG1GHewh",
  "key27": "5hSzJMhiE1odaKJSdKRVYnHBAXrYEq5wz3zhaHFAHrNJDwfXgYSeRGA8f6mYt1eX6eaDkZUD1UNajk5AMnXqjm2p",
  "key28": "2qoE6jXG8y7Bdw2NPAtDrebj43bHj2Ri9SkbtYLdV32MDFGwdKDQh5pdaWhkbygUgPzuh7PBz85mti8zg3L9q7x1",
  "key29": "TxiVKr6XYx2K1VbWFnTTthh9kydoS9rY96NV8CrJxEMK5aqQv55zL3Lkag58SeWsEpHy6G3V4RgLNskLTjKGZGV",
  "key30": "26fgRSREdJMthykNAqHP4pZFczmRf8Tz4od68yctf1KdRgoGC4Ee6f8zadb1rLQs3ekDWZmurJ7DxZUgfndoxL4d",
  "key31": "5Pv43yzpYyATZFAZQ7JqBeKRx9Gpv9p8BBsMUiWg1yMW4WeHjGirzjQbwNVFkiFacPWTZB1X656oKDDgtZK5bfeD",
  "key32": "2oareexG5HiJwqdHyakoRanwqkZ2YMrWsstaFfsnNqd8q1oNrFpbA91aHE1TGbirJdG4VRzpDaTiKAJeRAMk78ej",
  "key33": "66keSN5KkUgnLwMbjQRms9ZsqYXceybzSqCQqjmJMqkkHPnfTn2bNNeANEhgkkxTBtxuBaZGVHtiRpxJfFnXEosa",
  "key34": "25RrcWHTfKcQbbJU1SFb3rcJRyYDLjoqJs6TMFBw7CrGumkFeARTxUYxzyoRUEYpjkUvySsQB4uEJnpNvdb511iU",
  "key35": "2GYxzMkCYN4GRns8fZtFnMTeQe74wYYZQzvHarZ1stChfPQjEFarkKjRqF78w19Un13b6UvxP29YWoCe5BUnGaMN",
  "key36": "5bg6LmgXotgwr1DqB4VVRWqMKKd1EiAKtfZkEs3sh3AvJdFKkZeQiKu8M7tVVUdBXZDNsfMVXh9gWGwNwLmRqpXT",
  "key37": "5CpWd6UoXwJJXUUnvzgqQhF5aneBa17Giz6nsYh9jU2KVG7GLHTYGV8jbQPmQ3JWnjkRbvXKg6K6KT4kwFZKLtkm",
  "key38": "36Ae2ocTQPwori6i6TLBbYSPHSvs9WYmXEhv5gfjxCU4haUafBHBt59rV7XPxqJ2XNkN5rQxcvAjBK7dDfY35Ju9",
  "key39": "5j5pnkhjjrTBF7pt47mFjoYjw8VEiT8tDNbYq6REyVViKdym6TTGEenN99iVevjVS7k2MW7MQgkZi6WQmfydEs3g",
  "key40": "NT2SRTPqUWEXddXLTCmAgyQDm5zJxNsu7wWKjrkh43RL1cnyG7a5JGLPJHi4mdwx3T3mzf63m2UyxXMZHZLesBW",
  "key41": "5DPMP73y1Q9AmxmrGKfrRxbDZrtws6zw3wZx7kZ4bDus4MU3CCWyiTeZ7e5kz7AEw5XySg8FvAM59qAyqqbL9pp7",
  "key42": "qK3xn32Fi8VwicNMRU2vfCqyo39cB3JZ96uLEGDUu5gs5H6z8TwjUiJ4SCWErynBrDBsXvpr2nTEbfag2ga4JQo",
  "key43": "2iwR2aKram6wM2Fw8JSQ6XvEi3ucfE5HVxDBqRZQVuF5CNJpe7LvoXwKdSpfw8h7HuM6TnsVkJinnehY4cHvsmt3",
  "key44": "3KcWMiKSaV3HKeckbvruvqviLuTiJKpymFMidm1wt36AtMFD7FwWjJ95MxQQcZXugsv8D8XrsGVFcFP8GWRUPpXs"
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
