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
    "28WvsGu1fyJh8tm1vLD6wogfiViry4pNu9uCppoU8SYJ4VJyZkieqJ6zZEDA3KgcR6ugCGxzQg1c1pRbo5NKY25M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMun9BgXv3iNsenQjm8QkPtrkYCyicwXs3WezKjCTavCK5hQpdzMRakK76pejR5wpn5ZDRqkhw9jMEdAmENzKF3",
  "key1": "5hgZzdGMjv52FyDoxGAb9HxJhHyNDXKtdYivTcwAHwpacZpAXxEWpceeyEd9SN6GudgqmNaAtyM23a3WfrPTPRUm",
  "key2": "23Vj4cKRkvHQ73zhFpwgh4DwUZDmXvuyMzEqMzSp4gvW46kbQ5g9Ess9FhGyA92wayFEmDsS6P9erSidQzJuNmex",
  "key3": "5WiZi4qybmJJCMSzTV7auzPYUxrBUEagqXp9yd87mnUGM9JKCYmeqQgPd9yvm4nDSuKs4xAtjYS1BbhgaiiGNTEw",
  "key4": "2KkJSB2oSLSKzXeCSNbCNxb6Syqes6FDzv5wvNnuUi85AfU7D66t1CtHMBDFrz8MNoSgdfrKqoQHCeacNGfNoXYr",
  "key5": "S1jX1zijhA4hZ8KsNV6RJ5kwYvqUiiTTLMWtbNGcvpW54sFnQJGzUQCABHDaBy4drE9FbdQztT627FFqMAbMByS",
  "key6": "2jEP2tNYi2q7fv22pqp3oxhGFuAmdQ7CUp1nPzZjVZRokN7y6BrynqUNBSea3iSpazyt8kT7jo8rAGdGQv5mVusb",
  "key7": "5GWBgwHZYwggak6vAz5cLLpgNdz4gS2mJzTDudQmmrsZcpSe3V3bRSuVv76e159NcRqGCGfhHJADcvmZQaMdMNww",
  "key8": "3of1jsxJ9epxJTjbGPEdj6WHT35bdotVYvyu4UBwHLwFr8RJfYJN8yZJiacsWPVXWKuKTkNJKt2j1UtTFHVSKnSb",
  "key9": "VGmM7MZxBVhUT9HwqrYj7Er8qa24XrgCqXJRoZSSqz1Zi4hnjrgFeTpBauVfobHDHsAXQ128m2HdKV1YRVkeCKV",
  "key10": "XupP9qBSDjkpiWcB5qy1ZxfyFZWzZBxD41eiYJ4nzfHWgm6sqjW5zZNqGtchvRJpgxPjHu25gvNZaYFhboNuNU6",
  "key11": "2khdfPdtdLgLkxEj1DNecB7gCHRgoMYjRGsFkXfroTQuKM3dBfwigpYS9kC7CE2tTqUukNfmRfGDTJNjic7cHid",
  "key12": "4czf8CDbCBXExSv96PLf4b7kTUigKEh43GoDGqL2f7EJxQYcjBfmQjzqvkZE3Ai1mnq7dukzWjHXwK7YGS9eA44w",
  "key13": "4JyxaXfCyVwmAeSe4KgMgWcQ32S6AiEnHsbsCU5reGjVqr7jX5R4gq4ErvBizXgNrxeDR3HiHNQVpz5hvfRdBf9q",
  "key14": "5zuSYwG7ENm4bqeLZZaiGFEg2JFTmku18sLJbBXgyNvjBv49o8J5jTGKGGEpKUANBumwf2HajfReLmrgsTWooNp3",
  "key15": "4UsNH9uzPbexVwZ7cSyV5cB6GtUswDjiBiXYbq9ASk4ND3VK6RfhYN77jycPdaiAyoEjjeipkKA19v5NsRoRHQ9V",
  "key16": "2LBuxVoWL3RGGG8MovLPp2RwMbmtYFuo7kEUHyxFFagH3pLs1PcLDreFEenwX8K2qSZ1eMu2cUA46vUoHKtqcsu1",
  "key17": "5REqnSpXn2VX4gbsUXrnpkitafVDPezgXFQnEdoVsC8LyHhRFEGwA41hvQAKUoK8ZWqEK2PNAhphqDUBA1w3dfBS",
  "key18": "4dKmUw2iKWnAkmRH2h9rrKiT6VeJ2dLVjamS3dVdAeU4mHVCSSyksgcCzfTT6R9xLyNxRf9tone3A1pNL7f3ocDe",
  "key19": "2p8EbdH9FodHQghGKYceiiTTajiHr4d9T6ZcK2b6TTtzufK1mvhsQCRkmAt6tNFzqUAfViYTE3EmDSTJtY3ef8Tq",
  "key20": "3JL2rajJtLbe9AdC4SJeEGm1mCbFVPyiexWN4uKnAPWeLpv1ye879jUwJKYzTHiPDQSBR6Tt9wEtYq2sMjFGRyqs",
  "key21": "3hQ9Z87tpMpPyjijaf1sPftH9JdAM4DBYuQsUgMCt6mW4QSyHvpprukw8h5Kwu7RT24vNviBt6aVBu3XGqHmcGRE",
  "key22": "5YN8pxYgghnDGCfMwKTd5UCNZDVPkRP7eDX8dFTH4MF8A2QTcmwHLEDQ3TLLSzrcezBSqx83ptEfFPpuBY7fRQRP",
  "key23": "5hUJL743wTbwjpbQG8FUd3PiTTTywdPsUxhp4QFXKLTJY8qzHkmuetwzYNCjwvnNsWY9fXAXKcsaga7tyHH3b38G",
  "key24": "95kgsXmbBfUf3nam6sT4vBSbE1jdMRvV9E2DNfi2a7TDQbxfrB7vzUr5vDgYNkXRY93jFhqwDh7WjptQKHNGLdd",
  "key25": "2zmPhUUzvNfCR7vf2PKdD3kvrGNNNGoSfKgQ89ff6tugkR61riwnBsq4FbPABJf6ocDoHVycKwL8bbM43D7EyWM2",
  "key26": "3c8XDTbn7X3u5j8fJBmPSUeqxSqfTjC5yr8qLwzAMrhujtQhcNWcNeFqWp8WDvnMDAr7vXChQ4ovm5mSkqDwsoMX",
  "key27": "PY13kzaH7XKQDwU8bHtiU42PJu1ng5JtckQq6fRFd54XuSzvGZBPWNV8Wbr4CKSYHC7SZHnQWRPdv3qHQM8ASBC",
  "key28": "5aiNKvyMT8xB1xWFsGFEBXh1zCE85LpQeqDunqvQNVdf4XeowRXkuEisSDegKkw1ZCmPc1XaM6U81e6jQNSTqY1u",
  "key29": "2SLEjfGwzcJNwE5aqM3xG6NF9cgwythMZXQFUj1HafRAy2bVDMyuaXwsVrtCExVSZ71fMqC6PLnkNJ1dS74uLVfC",
  "key30": "2zQRaDEZqsMGrq9oX8fHQzLxdYENPP6ywgWHPinaCrMyyFgVBkfFvYiE363v4kbW3eSYD8mxD1CwTZdU59yeKsDx",
  "key31": "3UMcuU2FpNoGJ1MYygFtk62ZEUHDxRNySKxLFyiEqrH74u2XN85M5VZiCfTXTNsQ8ms6QTraJ2JahKfAi2pcmzKu",
  "key32": "58h3vzgKec1isNvtxpYVQ6dQyq5TjPWaKccsuG8Ns9zrpV3gZkWUrv2rCB3QgFLRe7KfkHVKVuo71tsptxpF1Atk",
  "key33": "5dK1xiXjKLmcf3X5iG78nJcDxpHy3xME7F1vMvHzx6BFP4p7SL2M2F8969HbWavSKBqqVNhsR76UsyKxnv9Y9vPa",
  "key34": "5RMS7W862dpzNxyseuZ7sDeHCeLb75rgZRUat6BjKsRQFUJPjhUSXwDH9SaGFTSLamKMT87abJrzoQ3nMfkgDDK7",
  "key35": "3MQ6XC3PCzM1hyB66HoB45m2tvFpT9zUYsBXNHwKfu73ttMrr5wTdR1tB4trF6HQrtV1Juuw4LSTPQvZAWMC9B7m",
  "key36": "594VMFLd1z42MQhs7W3XVYnbFyw1mrhGHjcQPuqpAefWxHri3NjouD6VAaLodyZRyFDkkBRZM3agxHVpASxnqkBG",
  "key37": "66YtUbMn1qiK7pPFLDVsxmhBzwL88JbzYztngF9DgaX4Fwcx1efJxdqFLm7GBgCMtji9iJcr2AaaZuCZ7MywQofW",
  "key38": "2UTSU2aHXHAArU4st3jUuwmrjwmEiiRna3ftEwPYKAHkaUVVqRfcAtqsXTMW6FFCrxkCzUQ8ALZBKBZ79xHSdaNM",
  "key39": "653itidHk1SLC3R8o7Nuwb8jiksaWLA3aQ4T1MmRborgLpUo85NA1F8TqQsi5Yp37H4wSPwxvZo8YtLoXyCP7MgD",
  "key40": "59NWw1BnfcvaHqTgQtBD3aSnxgqafoNoEhzYowU9KLTDrkWDiiZZwnZ1tribqDEUhTva3UNr5Zjvf8Vy89g9vMQF",
  "key41": "4wf3gZoEiv35kf8oBT2EZ9iEdYyiUvNQWHTY1uAfqRaRpVjYH48u57Ae5MBKAXbySBU5u7YTLFLCiQqDovBFbeqH",
  "key42": "28656XT8PgK7CEPA6UxrggKzUAZEQXdK8HqiqxkryVU2piXpjDf6qTKdi7SfKZuyd97EYWE3P1Ag6pciU2uTCwVy",
  "key43": "5KL5AKwGwRM1Tpzyny27eghZbQAtN7DTyQtpr6NPiYFVYhnjMvQUYrShTBhBhmn6vshmdpSqZMVtscts9ievR4bB"
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
