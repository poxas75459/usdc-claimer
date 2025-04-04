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
    "5pycd7fdt6e8Vgk6JRWs9HqRqy3Tc7YGXoSvgi14yUGZeVMiaVSnGzGG6hXzuJah5E8H2AJmYTxdNvNnJrvZtiZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PE8ddFJyRYy9WTa4qMpSYGiDntDJcB2q1hpvk1UUpjobjkujcdcTYVGCVZuhL21462SWHg7PcAze6b68G8zBEZU",
  "key1": "95rXzSZbBtbRYgrUvmzc1tJ6TEr961KLe6W5ynVtgig3snKWmNp3VvqYNbT9ifvAVFzVrMFb6jT97HV45tfFwm5",
  "key2": "2KJYEAi6jqpJmjDzJxeZ6DGshLA84btSfwTHvLnH71LThSQeUAhBpX2uvTH3qXz38N9y5BHQjUBJZWfMafhCr7U4",
  "key3": "HEE8kmyBRjb9dbMHahNJwJcMmsmFA7pbGjuxPtjUU1FQi4rwFnVGw3WWiqeX5N2QHXD5sGVYYjpPspxMcjESEPr",
  "key4": "5Cy8KRaJZkpUvbGr4v9Jo2uUWDmRQeWq62huxYvjqYqjPNjp23kioQcm7PMfNsKawnY4CVW1hyJF7jS5KtYdkFWj",
  "key5": "3bxVhmwCbmweXQ8dsbR1Ws7SnSPpMK6vkcP7Y2ArGHG8aeEUxHLvjWgbmH7f2rZmBy7Nu4EU2SSUd6UecJSPBGuj",
  "key6": "2Vq7PEtrMfnYQWwDWNv5TSpqmpH7nod25UuYCtKZZavZBppJAZzSS3ZdY6NSiWhxCfQAi9UVc8U62gC7xtSMoggt",
  "key7": "2ErWD8Vznn17T9ZGyXRG8c2ZDyFHvWhk2qP1GWeV9qQ2BdHHmAjXV9c5yN5y2X2mub92E1fwk9tznMFVWS1kANt1",
  "key8": "5SX1aAiBpBnSzSXVUFReQU1bi9uRQ7gF7Eg24erSXLFjbE2jNMsjXcReD3DRyan4d2wPoTzjgCTkYy6Gr7DG1wJw",
  "key9": "47Qxw2YdnHN21vi1GFyAJofwStjLz61kFmAqVJCytuFGZVYst2jmwN7yg5y45cZmDqiy5zSXs7dUoGpeuMwSyAsS",
  "key10": "5oJiKqn5KFGUJZ2nnRKBrPq2tndARrF3vLxiyv88qSGuvRU7HNxhuy5s8cWJcmKpg5Cc64dJGH7T3JxLF3RAwY1T",
  "key11": "3LZTFjjsePYAfHP3Ssmcv3cxiSWK2oguGj2J2xvb6MbcHLK4PP2ALCEkTbMoHmma2mx7FEYERmwkJsg6PY1Wd82H",
  "key12": "58kcJ8VP1wDnqooxXrb3knMKGEzqkfYM81haiFvqp2wFpMwX72BPpjNxZg6tm5SGKPGy8f1zx7EFUThAQ7kCAX3e",
  "key13": "3BF1tp35Zv6xLWthM3pKTsdwzfwsfc1Jnjbpqd998avYtYyzMz6Wdtia3ydwrR6x55XsrtxAi6fb61t71Kqwvg25",
  "key14": "3zw2KeCw5Aw3BZzEyBS9yoRRz9cw4GxcioKTBJCYxNamHCXdo6tcjL2uk2JRyype4P3D87abBcWYWaprVBNEVtQu",
  "key15": "4tnFeAiDCaYSPkxutzAnV14mcyk7vqfDFGR5qQRxhFkso5PBu1Sjg6fwiDktnZ8U7jxP3BmzWcfWyw66hKuJeHFV",
  "key16": "3stbpCCGX8xe6z4qDCGkLbZGbM3YrGYRfCXPfPKE8VESX1xCfpTp4A3cZxBNJimemKpYcekDVJkLRPkQk95KyyTB",
  "key17": "3M2kZMsBJf9BoiZfhZcCAs86r2e7nYpT1MZTWVEqrnxAWwCD4eCPxy2oFUnCwwwiLQ6wqZNeyetJJ44sKCmZhQYi",
  "key18": "a9ERrrbZVZh6hQGCh484QFwU3wZwGVUcSU3S2fiAoYznUCED7t6547weQoR4hNN2trsnzySH5qgcrreautrxqUk",
  "key19": "5Wq4bAPn3EnY2SBzKYTXE5D7icvfDvwKUfiMxjhy6MuPL6JZpLYFgDv1SGhdRJm3yd4Rg4QMAaGzJT5wj6qrNn21",
  "key20": "2WWKBBVg8ugVyb9KDvQhJr5HbFQVb6uQMiwXeprFQFGfSXkn8ef4r5rjy143FkAcjBKsxW7HJbigE7f9qTzVdysp",
  "key21": "4qWir2PEnxCxS3ESxRb6a6iuXJLE5DPp7P6BQU9cmPZ7PJBRTSVta9ogJGy1WwgHfeifCDYaoXS3H6Ezj5HHsbtY",
  "key22": "36my7qWYtaa5VS8Ff6xKDN2ThbiCmSGpqqQs3YNJvkVJqWcZ25FedB91iXcULdjCk8r9xLk1PXBDyNQa2GNiaYfP",
  "key23": "5YA6BSdRd3Dz84U92j7fw7oqyADgLSFpWktmDEZAvJx2WVrtYPDFYVwkxsKmsBKK5cF17Bb1F3w4Zm9DFGkzSg86",
  "key24": "5TpDitqUfy6EXxKdJnydGdyPddnuczzisPdkkQdP8BZoC5z2CPKkvt3x3StkAYxmehrkBWqZei2G6g7EMaVkeRLD",
  "key25": "2CucHGiSHy4eFiJnyGvst4ZHRd8PjRXuihZsL9PK5xw85uv3cbWgQzZk1AecxaRNCRnFNXdAyckhSbZu1rXsJY5e",
  "key26": "5yfDeFmcUQxEcXyXbRWFZM4v9MxcppSMczsd1qw3NsufxaAtocYkGCUpSrbe46RNKpr7imQEYjYZCKiMSdo5wvkf",
  "key27": "64RWX7qknY2aLoCQqKpc3csx6ZJmQq1TRHJAXUembHGjZXnRfdzsHNoRig4ADMyaPDDFxZcinmgL6u1mVuKVrBgx",
  "key28": "5ndfkrN7UfhoeiP5hxWHrVrK2WmDmANo4SpGddx7HJ4ykigsLLkQD9tMrPSGeQmDb6XdMWSwuLA1VoxoWBLfrPKR",
  "key29": "5pzSuBAbTKq4kX8mvevM8ZpPSPd9FSWNBYwCAtQZdXTGrFiCmjkoBBuzRb4zovKaxQQVfJSZxChgygBf6CPmUEwN",
  "key30": "zCTgNLdk9TnbHz8Z2B6t67GKMmUDBzZaPKYUeEezrcW3fqSwCdZM2FnNbjsYVKR18V3ynxkv47P5kLHiuFpkRZT",
  "key31": "pyqXXS7Q2QeawVZ1aduN1CaLAz3cxcaMi77eobDAwxonsD29akR7QNAsgHYo43iXmmHJjccPZt8NgcbhY77D44Y",
  "key32": "4mXBMdr3U1ZTV9BPwFmfCWSyk1RggqjPqk9GnjjRL6Z5ipdFJuyamsAQJWBG9VbTQvzzhFEBfGe9e8tLeJ8YvZ7n",
  "key33": "3SVCNYnLyyF8v3afTcAoG1M5qC83nTtTxT82NpbD7GdFcxcLKSKth5Z6Yn5Yzk2dbzpSHhaRU3KX4bvPm7vF9BuE"
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
