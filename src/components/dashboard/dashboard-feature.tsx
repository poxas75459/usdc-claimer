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
    "4ty4nZgBLTvVgekBjZvpCyNns3W1xVhmbfD8MJSny6NN6H9j3KZyYgFLpJUiLfdhtRo2JbhCxQG55BiRE24xCWpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGYd5mpt9SedDjSazNYRRnGoS9MVQWcBZJEx3GzzWSjf6rMupQ6y8zSmVS9JopwQT2qDHdhe3cotp9GZ6fgBCMy",
  "key1": "3u3tCyMDB7yXyNdCUrEDazZwSkv5sZ3HSokMqcwzj7iRc3JzBcPTB2KvhetqcXh6GjUJWb8zyGJzogtDbYuCrWzb",
  "key2": "4UEh432kh51rkVbw4WqeXPfLrui5sqU7rmi7ntoXrSNMkRvw114bcGXJLjZgSoUqMPB1A6g4AwB28Tpg9pNV8X6w",
  "key3": "46RCFDd4h1nw2pfBLsKfXFdTC3PdRW67NR87p3SVkwvgQmagQ4xdtnrM52aQRY52jssLy1jc49Er5ZsEpVpqmtuM",
  "key4": "21ycdKPm8mokU5YrTxapCKUJuJZaUrqG45GNmcwbjWzfjMiZtvGtNsLvagxeNfDrTj2MgYEF2Nn4pfFbg3YzkaKQ",
  "key5": "1HQLXqrYNrWoevqetZkKNaQCMSYJx5yRZQf9BCVfgRkxoAtJfrhVRhguCeny8qxoWBrJxeFRavcYGptJbXeeV13",
  "key6": "3bCgBVeuzXnZMpMnkN9w6aaSNyWBUcHBHKmyz4o8RbWvLVTHFE7PYdAWn8z3ceBJXMy6npruKWT6EBX4eFrPGr43",
  "key7": "3VumGWPU1jvqVjCb2KrtHT3NiDBuy9ZdLTpQxYFtX99LYafdj4eSkcC7jdpbdEU6NSdjuScqNviQum6GCHvVsTcD",
  "key8": "GDmB5CC8ocy5kmWFkimZxrbsGacfA84fSPZFjCwh96PH9igiY7zyL7zoRALhESaa2cofW1LGiRKL9QmADbDqn6n",
  "key9": "24sLEqkNhE58sikmN8uukdae2BWq7e9zD4iGE576bDrCjnZaywKfkXtzNWqW9TPVucTxSjgPmeCq46QuqGX3efLP",
  "key10": "5iZuGPT85MN1u2P4PDvbGWPbspnUuieHhzKmQc6yDvoLV99dZVbJ7b67GyecnpAzvKtci8Gqs2aRnLrYWu9Pq4zK",
  "key11": "4XMyN8EKdeW6JYFtnsKGvDPFhL82UKNWuUJKy1NM6UCWQjLHEgsL5ENb4rnhit9YbDT9bHHV4WCxtvu2g8bBUMCL",
  "key12": "2fafR5hXUfedn7FBUBnXf9u1FLpZy9J3MZwwEy36t5QSfbjnyDsqggYYjXrMZ7VFNtFWhfNUiubpiQjFWywbmSBc",
  "key13": "tWoazcq2iZYzYmftJStKUM8C3g6MpUrxA2Kg1w8a833LQCT1XKWDGix8CpeKZcPp6EYCHTXZZ9viw9DmPoQkL7H",
  "key14": "Ahe2g1iJHLd8QCjghqW9MEZoTFpAf7qbAPLZjgjyUNF3LFVBRaVDxNae7J1cZ2XfYczMMr4rTvLRyBpUygfGrSt",
  "key15": "583HkEB9Ttur4L7KBQMujDE4GLzvVJH6Ctsm1efpNDWzMQWj6fM1S8djeMgr6GmTn29RDri5en6cnveCeWkuvG4d",
  "key16": "4SyF5g6YhzW7hsGex8V3PikDMu4QMkQUekHSGsUDu6tqyGc93Ld1QbUbQGJhgarTwKHLyHw6ymWnS3ea3D3HMBLr",
  "key17": "9Lk4bFTN7s4GQbbw3Y2DWjBF6fQgDCQTHfsM6Y8UhAy2tNZgfPsP6vyBaPQU2knENekiPFnHYq16trDYdYGKuzS",
  "key18": "5XPK1yYhs7X92oVJ2UxHEFg296ieQm9NkTvubah6jNPoceDSoyFZNgYXSfp63YMKsYccjtTeQVtiRt2zRxHtjNnr",
  "key19": "4gdNQ5fawfU474ZMKqE3b7wNRaVjH6qxaEwCYBM4md2sCry5emLYHgWKGehdUZXZJcBhyqDkYPh3xfq4cyWP68CK",
  "key20": "67VjsnR66Vajdgxg9hZUHjBi614kni4UBAag26U6iyJadCe8Tf4qRCSR5xj9k814WCX1nUqfEfAbs7u1EHv54eqR",
  "key21": "7WC1QkUunYcw17QeZFoY14NtNy6KwFFH3LABoeKcP3CkfWeTbmXBy61EJ2kFqNHPkYkma3uYbPAqNE2UC75NBqL",
  "key22": "5MXJynSvMZCfg2LaaKbUUYKTPPzA4LzUtsq4js82f1weZ5X8tgRN5NHrzZ6dDo6cZVo95pKzSuGDKnwKrs5CqPa9",
  "key23": "2ziQUYD7qZaRNyFzrswWNAGf4hVfTeMPywyE1PYxbAZXEmhGJYC4KdJNst8FcctKvzZRCk5TJb2UiR7Dj342gEpS",
  "key24": "5gtLSLtfCwZebDcrbGHQ7zSdsFFQmCHGeMHd5MDVtKmPu1gxyYvDdU1h6PmKPuwr7gxYRGG1VxYNtEnBoC5ew85s",
  "key25": "4B4kxhVvnPuSBR2CwoyBv1fx8yqxNtNUwcRas3dfQ67BgMQ3vukc6XRsr2Lj9ShwD72uYSzXxbr1Uwf3HACFngqn",
  "key26": "2dPcyRHDq216nMYgjkMbddh3S7L22eQnPEWBAP3U28BmP4rYWyyaJJDsiZ8KrjDTmB2Nr3ikuyPwCv6ZGRioJJPc",
  "key27": "3ncpiYCqY96JvucUxNDc4wuWFTkxqYxcjoisrZX65SB9rTk9MjtGE8hsSboezD3JVTcVTzySYoFoBrSfKXj9Q9qF",
  "key28": "3LpbdBqy14THTAkoeGM1oKwin7cFpNBphpayHnAokHmgDZUcGK8PkgrDE9CdKhjMr7RDjuuUriL4qfV2uoDVHpAS",
  "key29": "34ArjTPyXcg9LTZR1R2UHKfg8pFUvos1KTBKPkX2qNZn7RUYTKuS3EsnLg6ybaVJbcymoyKpqqCzfhSe5LbUo27m",
  "key30": "61cyGNiQpwrM1b7Pm57NYDmkiB1FBMEnfb7RLWNNXcFpMfdJJF1XF4BYHADFFqTpf8VvApsCcwq5QHNmu6wfcCEo",
  "key31": "5qQ2QZ14W5Ly8xSf3iPQf7W7wVftUE3wRwxh4zxb6ATfYmdpxkGRjeytWuiN2U5ZKExWPmxJFLNYscEEdyrLgXDY",
  "key32": "3vBTrKmnRpJWnt2Yst1KQ7MARv7JsUjThSEqdvemKpM91JsXnMV7ZBM8Mb8Wkt26Un7zD7nnW6XNsXwjyn15xYFL",
  "key33": "2bUJQi4HskLGia16ubEXd9ZjxsiVrsJ6hiSGTCYbagsoEf1LeuLx35GWw2wEcFhC4z3zg6sHGpr5YE78Hg3ZzX8s",
  "key34": "3a4qXs9VB7XUgrrRFy61SzWcu2hZuccgT3JfAXGfZdbwmFEMR68HWCduqNSfLar9j5GtFXweb8gLmSHUqRKhTAdh"
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
