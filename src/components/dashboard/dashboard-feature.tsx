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
    "nEC58rsWB74JyFnxu32kPrUQtRauTFdMk3vk2a6aib7whkwM9PWFw3wEFdsXHQHr73NCWag7pAwBQKVuRP5XZNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vF1ioxcrk7J5sVk1bgRDMzrkTvXcjbqk71EYFY6BvR58xPJhzJWfKEuGLv49yXUo8HXFFqpvbuLWzgNV63DMLHb",
  "key1": "5Qqiqk9uN9DXxv8eM8sbafaJGp7S6sp91czArLpiBLzgCnm9y1LzcM7NwzaotDWnpu4KrUjGpAk9zwrxjoiPEeeV",
  "key2": "2t3QBAymGp4XbxHwMqfCfdgkJR25z982Ee2md5H1PusCG5vqhPdWYMMswLHGPKYVsQ37xq2Wg7phhzwQ8VPx734d",
  "key3": "33cSD9Rn3nt9xtc18dqs474w6WRsxgm2dReGZZmd82xaXZmBrDnDJwoBALjYqPG5iHPtFVwoJ7DdM4WLkjRgSfTV",
  "key4": "56VmdwNzwhQ9RK8p5XEEXHqRu3917ZpLruMBLR4YS3tkV8r5pBPGjgFiH1QRqSkCkj8fAmiUxP5jYqYgdqwa6BmT",
  "key5": "5TXkC6vHiLD4e2eAccU5wTa2KJ42B4TfZ3nPCXwWcN5YQwQm8GKd5APshfDGoxit2r1MXyykYTrhGnVca249CPPe",
  "key6": "4SYJioXG4MZPPa48T9UrEUkqLiceH4XB4fzGPqrd8E3tSQZu5GKj8R81T8njzDGQu41wkz76zFkoBuH18hecRWVe",
  "key7": "38i9QjtQtbpy7FvurpHSt1KrK7MRQeDvr6V4xocK2w6reEWCbeQ5ZUdEh6hL2jVGdqj6mABHpRUmoNa1WgGcP9Bh",
  "key8": "3DtaNpmTfm8nFcS1d5kHmvz858PchAVCfuykvkS2iVpzDEFtsB7zd9Cbp6sFJiCqfEittbH1Z3xjYUiqEPknE9dR",
  "key9": "2JQcBUwC8VC7evnEraT5my2S1rS63nkdpZixjx5x8iHX4zbcTCkEfAxXzdUwZkyx4UU7gQqBnMV3AWpyvYbPNpd9",
  "key10": "2DeMXGW4roFs6eFoeYoyS43YPjfu73UyriNLkibzZeQ2R52oXpWBsvyK2aKvTv8vpaeM2ooN3nMaXM91btQFZww5",
  "key11": "4Cr3qx6kjA2x9rKAVsfGQRXHAKZzj9M5KpGjorPwx5BHVgKT8YpQhUawPVZuDG8Hbmx8yvwFbKkgRzpDDLgLjejY",
  "key12": "2hZfiyuN7nUmMZ5v9diQcsciDDPmzCGJsd93cuwbwhyVnf8ghsikzuoqRebT47kPkTFz21TgRuo2DwXw2Y5uGHgU",
  "key13": "5fCgSxzeozf1eckhMaDr3yM9RjTR62BfA7MgmbGF5qaPynQBEg4ZhSEhcvWufqjsWz2gsMwfiAETGBkuBCnLqHaU",
  "key14": "dZsjkMbD92W3NEZ8mkKyR8svv79rdBiC7bix3tumSgiNJUDS3mqXqGNPwVQp7wLzh1wrnQCt6W2WFxUKjVZjjzz",
  "key15": "3jkhcCdVhh5DQavpuFMHPccF27gsU2QMaDPZYCdP3XMi6S27SNqgYa6ZYpHsbZb8WQzwEU7dZReuQSg3jcTtDh5r",
  "key16": "RxJUXZx39xunU954mBfB5jry6UpLK9vhyuZZ2XR8g7Gih3HMiNhrjekkKTs5M4MDSvdqs5XB6vLanWKBvLHWbZF",
  "key17": "5nvN5d1hRxhPtcmutR1vq6hG3UeKe7U2XRsT4p6uJ6eSvvSe5Gr7FihN69X47jBTtxRav66Qi2xvwJodpj1fRw8E",
  "key18": "3QKSF3fAr8uGTkviHJU2StgKG64Ek8vEFrB9F1t4y8Pmca1mLnMTm9Wsykb9xsbgwHhyFrZxeuuKX8uJWF13iqjH",
  "key19": "2Q4b5WfHWu17mnqjXtqEefjkLdnrrdtthVtk8EQvChbdmEVnYrV4epVt46TvAfmeiu5zggMngcqb8QvTo78ATDJb",
  "key20": "3Z6MykL8MG4W9mK1njueV6m5MQobiAyXMGMcKjbzifDqFhSDRgFHCbv3ccQ82192YSVxWZ8TdVvSPUZgLQG9nC5x",
  "key21": "5NbpQ7hsJ3yit4Vhvq3ou1p6YMapt9jUBKoBTfc7pAbXkZUc2FJp3hsuP3kgi7yiPcpHWJi2RaUhVScrJF4aa9dm",
  "key22": "57DokMh2KJy9mfLTF5X3URsQnbbeFtyP6QWv7vWs4wCYXoTzSWRMknQbT4MPbSNaGhYFh9vWbbXLRNW8bHK7ifd4",
  "key23": "2rUjLUZ1A37bsoLm5pBWkip8N422ReHT3awTY6KLoJLNcbRKaz7RzZekeLAKa1TC1bBGLF8G7go4zjFYbXfUs9ho",
  "key24": "58PGgNex4QwRvpEPi2DSdLXwBARLTUrLr7bYRagCadW3tm38qTtBvirgUm56195Wu5q8dXg3WRmxX22rmKX5Vzxh",
  "key25": "5irr4NHbnkM2jyTuGjoxA4M5gsizt4BYcK2tAuJUfdPmaofwp9AXg5G2GKRuh8Mr4LuB5QgxQTWBhzUiwYUTnZXY",
  "key26": "2tSRhrWR9iQqPsb3LHSNPAuiYTYcxXTyj266w2P1AjG6xRomAJQsCeoVatYqMreRGCr48hpajJQYGmAbrwqopx96",
  "key27": "WmaMzctPVHstBFuM6p5XRvMxW9jtz6yMotmdugk6vv5kyATwWipQgFEU7PhdwvUUB1UmRXhidtpzd1Bvru7Suss",
  "key28": "4Vkvm444y55QDaPsv4jRLQQLJGKuriq4SjouyTDLoE2YrD3rUmAeorg8b3KQ7fcMtrCG2gbF9PVJfWD4hPubxiro",
  "key29": "xSEktQFUM63Ka7mYjz8tFFvKJDyy28PUUJwFMw8PQUvPekXYuWdbA7kyAzJqYjB3Dfn9PneWowuypZK1JWmbLbF",
  "key30": "eQdRDkG2fh3LWDRt3xAdzrSuPD4b4mbi72BfWq7JTvacotLWuJuMVc8BTPmqiMtm3KaFUgcHoJLjsqJMtNN5ZZD",
  "key31": "5KVT634D114AbeU5YZdfQDvnhCLYFDEZas1g9cV27VWq6NgnC69jLG1fhEyhs7EV1r3e6D97uZEaH7K9p13SKs9P",
  "key32": "28L4XWAwZERckz6ikmVPwaKxWLjkshm7XoTqF29Kq5wkHa9u1Z8L1q6fxACncwFE9NYoQNYbevephoJP2wCaAEQe",
  "key33": "2y8sVkF9p1Qjcb4bnaCNEWNFHeCAxtQHwHjUSbyBrkdVuBH7eum2u7ZdNmCxqt4CESvWo5eT5tVda6r24C8pi8Ua",
  "key34": "5AFxH1J1Vr9kaH8QZ4UxhQFGEAetNRBcbsJpBBz3eQ81nYNSMTnbsLZbtj3ZdKyQbgB5vHX3JaATyzYWJVkuHN93",
  "key35": "2sQkn6CdV2WUZ7yvXuVHrFLnXzAhf2euLVsPT3Zkajcv2Rbh89DPmcJrMmkxWy6swZ2WYRrAKfAWEhDMJN3ZckHb",
  "key36": "ZWHCgZhwjP9BANqyb2tocn3A8yYKHhWetibYsgjoPFS5m6QmYUXYpSVw5koQnTTAtmxymPZsyEt12mHstYbHGZG"
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
