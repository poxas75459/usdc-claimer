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
    "3vokrr57VTe3RcAim74j1mJcvrQ6eEDxxC1TDss9fknaCsywEp1bcKVWs8GC6qxRGRZzKge196JpHWaG1vUxtZFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgJvvqR2HSYXHVpVVrF2ZEFyCX1gnt4AHw5ojsRgfmSWXbNM2WqvXjar4MnQWyfsW8Sia7mi4fixUH8FyD2oUW4",
  "key1": "DhDJuEqBQWswneSRdF129XSRTpAQJMo8KiuKc82m1xrrK3pa5FVysKXGkJsvFpzM6AV8eVCb797oZXEm5BHG4iV",
  "key2": "3RPcYKZa4E6kFee7RWdbNyH23qxmESMr6fUcUzqhP5VofwkxkwwU1yYYPAphUT6HENdED3yruTRxAGQeD7x8nZwW",
  "key3": "512j2jTLPrN8GFtBeNyzwdaPdyn2Wz3SeYiXwqhb24PAvrwn8GjaQSGtkJUJjjhoHqrAf4jMibn6Kyyc7J7uyQMg",
  "key4": "4QumrsjFxfj4HTbUjMn9dnhEG8Zm61rScTqrjp8dB5rwtDsLf6WcQCtZtuH2RKbXorZ19GzJFkab5Lp7gPJF51WL",
  "key5": "2eMfrP5hTKoWqzvk4kgvYYdCMMAkP352wXN8FPFcJcYo2UfVcKmigbAGAduEsD3TaDQPs9u5kgHFDjS1t1Rwiwqn",
  "key6": "RehecqStVtqk7iGLQngzdyJvXPsy7d2Vz24FMMKZ46L3T6BsdVACS8RKHoTd5WuTHbW1GGKhtCLV3e6ssqBwek1",
  "key7": "3t1UoqGGxhH17Fphcv5HiTmbZHjxzxyUhaGJHavzpegYCXyUdMLfHi3WhWzTmb19ovDA49pYv4psgW8kqMsL6qcc",
  "key8": "3dxeJgMpz8DBq2bHesKMMp5B8bACpkmukPRCpgNeRkwB1SmjyWit78HwkD7o3wtn8ofEtTnZbNYVW84VNyP2GWQT",
  "key9": "4R9iC2W8GoLN189w23P13YheGzzeziTZjrESWPSFbnRMdbpsACW2hguPLgF8NTfkNEBZ37qx5xJ5yKbZUxp2uFCe",
  "key10": "R6VunpkVAtUkVPkksKwPwYRsTxVVxcU5n8vKPtBHr1Qj6suun5JsrWKZoEtE4LFZEwfsx5VqCWbxYBSLGfTwant",
  "key11": "5MqDAVjZ9LLvFsbkmiGwkgwZS25zeha8tuu1ykuYbEt3cY5XTx3x1hmvGscwxRkVuY67cRK4Wz33H5Tgg21odjSr",
  "key12": "QdQNnoNxbnXhXdQ1JqLpTUGYN7tcmbnh85S7x5i61TpoACMb1ky6G8dY9uebiqgCdz3xtfrabWE1MZ6GvSp1Xhd",
  "key13": "4qnMJHQjPv2aXz7Cgc4jFP1za6FpG2gLG222FGkG3fk1geDCCgtVCaVBfsZyJTTiTxn7zU3zHFDWFKmRwkTF8m5j",
  "key14": "5MpqeNkvfUFodqzxnL8GpJFcEhfpyELp9jrk4ept6SggAyMRrNwZ7prApkkbt8sDdwQPTC4qwpVVjTMPyemcbEwZ",
  "key15": "2hWJprthVr1bbpBVs4GW2Js2vvcup1hSq6HEkqXqeH8Tjb1dw9MiKKMLPh3AW6jTxE7gJpxDiszFNcDQNAoaQpts",
  "key16": "32E7A9WYmmt8E8Wuej2XhBS9kySi57VYE7y9mQ4tx6gw9aNuE2e5en8xyxTwiUrs2Jm5a29FbFD9wXzExrJFz6gH",
  "key17": "3HEfPjkCkKCJxwqCBG7zCHoCKeLFaajSAXdpVeWZgj3jx71jpdw3bH38GaU6JFfryUf6GCX7uNh7aTkTaYumLH39",
  "key18": "48f5cWPzqGvRqMsxCFHEJJu3kha4CQq45LAhiHjaN78xHCMG7iXDcsa6XvZEaN9szFRiBfHumuBfFgFbdfDjGdBm",
  "key19": "2mc1NsZia6TtTmJENXFUwsarxW66TVCXL3Tv4QsgbxZKA1UtngqH9o7otNH9nPnJHw7Dzt2YWr3bLiVTpEzxnawc",
  "key20": "3tCseCwBW6Nnd2cJ8Fuu1fWpD8qGbMQKUGiVFcR2SaaKYjLq2JsfFF8A71j3f1nv9xRgQpZW1aUY7q5531dfTLWC",
  "key21": "zkTstrwSCcQZ92Rp9pUDDtqqnr5kSMM921Geyc9LmLLcMAe9o2Us5efpAUhgU3qrVpQmSz89LAtpY3gSsiaGR9S",
  "key22": "54svwSCbxxorFt7vLXjpVUXFSLcPyVcujjcXNcaMNax9CkYfZ7yfN3j8gkLrQ25ZNx28zjkvH74nd3zzt1ZwkUyd",
  "key23": "244TvUwvpXuadVyZyk923BVdEUWUKPMuE68DXSY7cCRRHiXu4twH5LDQHym2DCugBa8Q2po3L5GxW3qscQGtrTJa",
  "key24": "2kPPgFN65QimfrMZDmXNFKkCxqpgvNDNyZdXVD9CPu6iNBdEk3w63cmp7cRKVTBUxVbiNK5CbDV4CZ1t5txhoaCW",
  "key25": "513YEVKu5XyKt3utZyHWgAQVKCsKDnnRnzgb54cCVSXeqmE7gBfBBNTjkZy4ZZmUszmxQpWWpxx3J8SVDdHySycp",
  "key26": "3LsMAzhsMqoUGuAawv2gLtbRWyJ5nF2ahs4iNuouQYHh1CdkE3dDhNfPSnGmbaSHRLcPY5A1M1fykE6dGrwTZuBD",
  "key27": "JTktVtmYakMSc5ZRGeQZkDCH4eapi2iZjFhNHwH4dj9v4AeMjwTHQEB1kjereLpyje8JkVwENMo5x997GFfbAUw",
  "key28": "21WoXxCN2DzfSSbmqMpGsVMmqina8jtmx2N69wNpNSEgqxcs9aAggXbp7jYTC3nfAc6RuVt1ztXbd8fuD2SSfKKc",
  "key29": "62XjTitHn6iS6CAbP3cGwp6EjuhKvqhsb1S8AwE7oqb2Gn5eFLHDisH6LzRYBWTLSSSfSqUkvVYrX9dDsky3BaVm",
  "key30": "6pjxZg9q1quXbrdWamrC62nd5VnU6asxuHukidu7nr8JJYpzpt4Fs5B6vUbxSTWuTnM4KTpPPSi2GXnmMcP2FPJ",
  "key31": "5NkCfUGLYSVQq1Qpc39kxFQ6VraJQ5F4o59DpJxmYPwSEVMcnyWndjxMF34dod8T947kgu7tADwVwf8fBewm7wKx",
  "key32": "34KJ7oyBg9q94YCjvQXp3maowCsEr9au9vsi11Ro9FaFd5cnn7gHHC6v7NuAAsSX34vPn7CTFcK7qWeANn6LNv2i",
  "key33": "5Zgt6o5fKtRQh9WyaAt6UnZsPHUR9QJ6wgpybGBgbmU1u5H7zCaX3A8e7e4aRsjN9m89EwXvYQDq2d26GZBfACkG"
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
