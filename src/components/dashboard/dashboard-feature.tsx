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
    "3CwEgutgzkC7D3BuXD8yGeDruQwTAGcU8bKpmCh5Lt9aNvnfx3bEnYHwTdThsmt1UCqn5yCsb1zpbGc35GRtE7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpfdFvNrtFGLppe9pjnZ8Zv3eqfjdwffScHzP9vQjP1VkicPptWSzzbZhbNXXiAd9eqyfvFm1vbyunA1398dHyx",
  "key1": "4fiXwzkBQVgpUwyvmMp8TeDzj9CAay8giTfBDzozU2WUARWKx86YwgtMqSzNzzs9yJYXDVrGvKXBsLGzZWGu2wCq",
  "key2": "4FWsE5Dcc37JbQEsxJWrWrXaAUwNqJSBLkMqerNcJHuf64qjBsrKzFFKBrqCpneTFXToVMNR4UFqhuHozDxAmHrf",
  "key3": "5XvUxfSZ5gU2oBt4YzbBGk4i1G1nKLP92Pn1Hwjns6Q4ggi4X8Txx6jrw7wAJSFhiRcP1WuyQkSBhHtjzFGJUGPG",
  "key4": "X4FcXwEEYDfNeesGqd8oxd9BijaRt2XrACf9amuNnmudP2pq8WXdhWVP6tFAUD7jTfg1wRT9spCm6hMWushjHav",
  "key5": "2iseBEgRY4sTwFanZahtLYHg6Xpuz4W6Kd2aiYQXD1JqLhK3tsFefghMpNP2VGQv9kQyXv2kiPaSsNPzEhqFncEC",
  "key6": "4uNbP1V2kivSJmT3Lv5WGZtu2iGuBfYWmnRot3Bp6rroUshQ1B8J2WAkKN8AcF1mgvbekerjiG6siWa6fLAg7tW5",
  "key7": "3tgYNem7cSgzVftdSVnQb2c7aESKDWxfHdoUbFdk1XiFvWUUb2UT3m9cSk1q2aKJ45sb9DJHRvKsJACzbmMax83n",
  "key8": "3sZKTLanPhgRY7bQJxELBx7mqZRWeYDjrnJsCsir1bqPuERyEHDwoaSaXeqxueMHNMwPrRBeLHXDTb1CS3fAQnS",
  "key9": "34JXzemee52KKCDcovNJkUzaqUWZTkqMv3eNtc4cYK5USJepPVF4n6R7CvKpZZcf1eevVAEEkEVdBS8LGtbVrFYX",
  "key10": "3mJw7VsU3GBETSMYhM7KFsZGCCtPHc83RwiSSwBvwc3YQpAqUA1eCEdZkdJNovuvtZeT3D2jGjrJNgVRAVBTCpUm",
  "key11": "64M1ch6qSTQh2eok5v2zdPRfvzJw1uaZHHoeEV6UxeJASFxkWQnUXZx2cHcpRYmtLX19TGCWJX2GVFVfeb2C5A4J",
  "key12": "2FAFhqrT28ZgwiuKYt14RFJEp3dikjCBTRMLQXCEmorUNxv9jfskVhkUKBu5nN1m7KUYyDtmiHmFveb2gCbRfqYD",
  "key13": "Fzcx4sbLtw8Jy79fXkFgsnxQMifEX3r3hx51a7Cfx5yuBTUPt7chrTsKMjyV64GmnXX7zkBwKpX1qnfV58kofXf",
  "key14": "2ueaTu1boFotwUhwhCqHsUqhHX54ebhMGyHpuCSK6fz1ETEtgKppsh2q7L5oYJENBkwEy1ckPNEQXuHV6XR96v9Q",
  "key15": "PGYTjcdZsyWamqGTHdfsKXx4XSa66nmWr3ksUvQ8rb8j28yu3UZErJTztY2UW891k2D96cLMG6Jn893TMBgYRYX",
  "key16": "5rFDpvoL8XGyLcEPYYK1qcbBHcSHbHJENPVy6kAjDNSp4ZiFXWmhPmaQzYXxC61QnYktzzPhVRQXw6krjczJaiPZ",
  "key17": "3w5Gx3XVvfQFgi3nmCfhATqzcCQFvjf1H6eNDajR6AJLMZ4sEzKP7jCycA75S1XuDFsSLnXJPr1yZ7rcMMU14RNu",
  "key18": "4d9vEMUF8TZfLaK7ca7CUTpcAVeCxX98ArmwjV1Sa8EnYnagaYhpX9tiK6eSWaoRAUhi5cHiQT4FZZi5crMX9Qeg",
  "key19": "ejWNTzzA8ar3jPXzJSV9cq4ETc9hb5ZiWzLhgk1qoY7mDwENh1oDjrxypVqGUDFjeSTWkT7Urqi7aGnsvVqKg8p",
  "key20": "3Tz26DsdbkVKpjWm8RMy4mC37xcDwRyk32AtEvorzXxLfNH2XawB9zTnptpB8yc8WXreNYoo4BnHDNmJmxnrXNwU",
  "key21": "3BefqFKk16bWnTa8XwrgkWkC7stgWs64u5PqBJYSYnxaxUSVeng6Gw1QTpNziFrLa5cryNX5531cNTLYCVphxM3X",
  "key22": "2Wg2dTHjaaM9Mmm4Wt9qrKtQ3XavbYtTaZh8DuQhRZMpmGtj3DsC5QRGcf49gkmxYNj7E3tmx5s9eA3siFgGLCue",
  "key23": "amFVqYyH464ZnRjw5oHTXRLaXmigA72DAghAjtoTV9RU8BK3tq7gVeKgbE8PNSdz4GjrJG8cprKGHzD7Nk8J4qK",
  "key24": "fjZg7d7erE2pDGMvFqaoPoBUgbJHuqCHceb1Sd9494CHyfgWimr8dw4SLVvoQnhwEDU59vuvL4haq73cf7fTPDj",
  "key25": "2oQPQKqDcpmQYUPME5YyM2AckxnDwGwfTD4p1aMwwHfwhjAjJdkk9M1nq6PhTS189BgDasv8bP6S23KNC1AvVChh",
  "key26": "3FvK2S1gU4TfMcrjfRb7CV9oDkdFXgmWywPWjoqcTRThQnvqsi969waGYU8hKzDEHTcZsRTvNK74uLpUSd51XDxG",
  "key27": "32HAdtfut7JCnWqmpC1pxDQaF3yGCAR1qemyi3iTpk7CbVdm9GkUW72odcmoEZVK2fkeqNtBk8VJsPQMnCTKqZu1",
  "key28": "2iPmNkcQzyDybbgqxGq3ymAQF74FJBFJb6UKhAJUTKaq9jqxpUPEB9XVumHdXeCtFWP2Y7RiYnfjYovkv6F4ocm1",
  "key29": "2iP4iKK9woCLauGpGUaKkk5VWh9qgMQ954FjtLKU1mZALDZngZq1QXiwgpgv1k3EReoeQcXw8okPgTJhscuuczUr",
  "key30": "3XL3JckwqGrUgHpfs4XWv5UDJZptqRaJ6gYuJNkLebwM2QeMmXG4WNmQh2uD1oSZidJmAsq9piPGFnGqjmaQaQjw",
  "key31": "5yqFbVjDcHbeBa5H1jxmXyBcbGDPgn7xAXqjJagPzbC7boEC1DavNMEhjJBWVt1b4aqenBUj8wm7cGtQwtT7sh74",
  "key32": "FyprRPbZNLrZ27umHJeTdCXmCtPQXiMBtVu4SwSuXEr8yAngqtyVZD2qtkyAxg6tgqUw8w4Zj7EvHGHYoB5Xe8J",
  "key33": "5ZEXWHKohPA5BQXwypaVbXT8RhgfNLMeBAh25ewmv87eWwaFJt4UUNz8hTMzbVTwYGNod8CNMBk8cSTttcermQKf",
  "key34": "34yKsSZSUpmiaaR7vxxmEFnm9e7g4p1FDWAaH8TxvkASMP81umRJhahfQvFeNNLd3DKwejXXsswKu1SZ6XPZzaFA",
  "key35": "2oh5KwdpcaEb59Ps35iPb6o1gJDb1eW9H7DXr16zQ5noTkWan76VF77ewo7cETZhfFE92R6bGUZd2yTe6F4CdW9d",
  "key36": "UAEm5tKFbZYgeVfSH7VWmYe4x4ZXzYiEiD7LMRQ3WZb9twae6qRxrnsh4QBC4o1B6JLX5pNMqX9xvZLojSvfaZE",
  "key37": "4HyixvoHnSaRyxbuTs2BqjogAgqGQj3rTomRbEyAMLK3ZtWofpiuK4QnDruEUBHp6V8husPf1ChzqkktDwS63jKN",
  "key38": "2F6UPknA12GRZ9J2vRceajhyxsNk8cBLK5o8aM61yY457NbVLQ9S8GFq1FWYSdusseCJma3NRSRoPe3Sg5YebF4A",
  "key39": "5ChmSQcWoCNyQP46J4wGKvSoGSj7tCRcpN7DoRkgwF1MdmPP7LbEFB2M9v3TLmN7wtRsiPJC9PdVCdwud3UGjJJt",
  "key40": "3Hn4BU2FMY6naLCcY5DRTJdx7SauMEmJLCdePJvwPYdi1zPudR3N1LgSV145z38WN4PW1NsVPKx3W1txu4KfRRJ1",
  "key41": "4Wjqriagp522gudfwhWAEnkuhpHkakaDvkoUZoP14r9HaQyTcqNCB3M7HwupQ7639joGKoaeEovnvuMsM2iHreX2",
  "key42": "2tuxB4844JKgoQWXTw4bpunCVoxMvMAcNjQRa1w4A9hSJ7y9oLMHnekpZjCLdcjnLj5LkYFbEpsbWCGxkvUBpx2W",
  "key43": "5c5ji2zmn7KdyB4S2KjSNoZ2P3hLGWRppFvtnsWVRxajSknjbM3NN9HCQ93w96bhU5HRiD3Vx5Q8tfnT2ta59xcZ",
  "key44": "2vmrERGAuvvfPey69rpLtmECAWmZ5MgWvuos4hK9wgdo3k4a6zrHyMM8fGLiuNRY7rn6vaNQkwYUH21QDkR2GBr4",
  "key45": "4pBuJLvxY66CHgrtPeAou2WYjv9FeZWZQbAB8KmLKL86DxjVrWSYpVWxf91VG1sgCGfMxiPYZqKQm8b113ZPuQy5",
  "key46": "3QGuDgh7FiybBAX9cmA6EhUWR8LEXpyF4hKrDNChWsbxzRCC2me6QSi38PXuC2Awxs6SRKsdbSiajTf6ZRdcLM14",
  "key47": "25CMh28vVj2Ru2Bhd5KQKDK1nWsyvJf6LuVW3P3DtQNVwy4akZJnZ1FeD5vXrtDb1aauF3Mc4YhvtnhM7zY8cTSr"
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
