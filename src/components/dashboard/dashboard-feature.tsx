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
    "4PSt5hGfK368skVYhCqxxXM7tjvL6Wm1TBQJvN7k6Wy3nyZvfdBpiHTVrrrnXA2vCpoC8Vwr4H4Uexvw8senSsiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPXD7fvamLUsCSXzsFq2ija6dzQuHKPKAZQ2xZL4UAGQES5QxmsX2tGxQC76x6yA26isCZwRZLhVnjCVf9AU7L2",
  "key1": "jozLY6zEm9FpZzE67CY4GEWBu49aa75AruRss1k4xK3ry8XBgMD2bq2h3jjtNHuduSg3WgZpjPhmd86iiwnc1TC",
  "key2": "4zkTZNiytvgBWPrUrExV7GFTTBZCdYWATBJDXsZgnWZUyQXy8xrmxMT2q2s54cDprrzbQgPtAddB9DhT1KyVuZKi",
  "key3": "3ofwa1QgSH4bVfS8xb9oF7fedxapFccMnYgwYsJhmnREC2PyisXYfoS3L5ubW7sXZoRHLWhs8upecRZTumiVVjk3",
  "key4": "3MyrftE9no8E8FjRpkMFwa5hZY2a8mYaMMy8YcA1nrNVpkrhj2JaFHNdykWNXMErD5XKiVEFSmRJcRCEEcdqpJaQ",
  "key5": "63s96MJNDwUfY4CRdfwnUXwYaZzVpirsQYv3B43JeqfJVtrJHtw3swrWVYc3sBdAvUvTpnbQit9Ji8h4zNUpqUNc",
  "key6": "5aAZULpyhiMyfSAUUsDKYm59dtpfo9BiSwkx4VuzzSYQqiTi8AujpAHXZJaNS9khY75GAXyPVNdzCiJSeZ1omdkT",
  "key7": "5tNPejfbZT9KaLjhLECon73ZxMiLL4Zv3h6gMGvFV2MZxaxihBdEfL1ZTgUgqgYUhkfjKyCQ49vVEpNt3YdpfvHs",
  "key8": "4PCCzfo4vrc6Mpb4i7TuVYVfc4YWZzVxVKXy1WAPvH78Bx1RyXyrMmW4GobAXY48VBKR3uHWL7Wu1WFJsMRWHdWe",
  "key9": "5ZrHY87qMxyT6W2DEt82ovayR6UoMB4PbkjpshwdzVNnRcGRSovCtmGsnYYNTy33TbGWqW3PgVFHTiB1dpjzTsJL",
  "key10": "Bsv7poPTBrhMN7DBzrSASVYbZ2q1hXvnaNVjtExSE564ZXYD5WPS7Lieh9S8N7faKu7uzFnBM5vhbCGYotuHBJc",
  "key11": "2aUYtRACKho8fQSzTz3D6MvXGiWsUWAdM9AjFrYinGExKuwfUCy17Th7kkB11DjHPab9DE17Caqd1dyTE8J2AHor",
  "key12": "ojNYJJRjU1JYkdecj3ZdPxznvDUnB6BryhwieprDK7xJBZuLgiqmLpESnyC6LpcRaTiWT6QRVBJ1UTC2V8i8g6J",
  "key13": "yjuG7xrXVmbgLkfQ6W9LqYk5UCrGXPjd5v3cW98YCJL6FHSA5uo1kjb8wANGQpE2jQYo3MjvN7wrTu4ixLfRQJ6",
  "key14": "42kTx8tUy4i4y1C7Ezrz9TnE5WqrZv32JowesFKW8TEL2QDnwRU8K4wasnSDUTAr8XdV8Fehk7vjyD5Et4w9jGNe",
  "key15": "KMuLtz1Yxzjq7ksqDFuMuDadzaDxaZDWF3rdeNbReUDFRcbYkWiYuZxj7z4f2X9W8TpqeSd1H5vZVRQDwFD4KWk",
  "key16": "2WSGvFr8h3rja8xsn4Ts7SmU4fS5x3rpwL6qCHnMzjiLThQ1MWv98FX3synAhPtGaki2nUdXFAXCxyvqw27h6XMZ",
  "key17": "kXCQ72eSHMTsAE3jW5qPxdk2thYffhhGBeTrUFg37PBwYXWVZaPf8uzJj2YxC9GWCufDSqUKu9dn212myUUniTp",
  "key18": "2FBuk96YYfkGpHLoBGmE8AxV5uyF5vsCV6ksodQ83muFXWYJEyCKTMiLSE3dGHHaVWnEJKoza141LLz2HuWiYFJT",
  "key19": "4WTUVwvnUTRp9RyLcaV1RNTk62RgxrtMx2yZxvShRHbzanPYT3ST4MhJXj2pdieuGkyRAHQibY17gHTYehrFs8fd",
  "key20": "4eYiUFd7dZu3xuqC1kvrCbd4ZM6SYRvUsatQRbfHuF1Ary3Vqf8XaspeJHoYpCkjWXmTmyWPpLNUvfTtnYhekkVz",
  "key21": "zktfXdHk19LEGk3WHp9r7MRoMtJZcvQ4z4Zmos5Y3tHutaQ3LwEoYegjsppCYjTBK9xnz19dcSD6BAEGyuqs72y",
  "key22": "4eUw4FJMLRgCDieqhvQNZJW4inKWin1iar5gsetTQ53Cifv3dy4PHJrT9vi6uwFoeRMM3WbNQ5AbQben7sexPSDv",
  "key23": "5J2uGJ5zpChxVcni1perE9d5AXpFXSE8fuyPXGFiTM92gHQQnnthKbFbb2h5TpPLrYVnd5gMSoZnSHgt6ZDg6meA",
  "key24": "5hHSJ3vXNonMbPEABYhVrnSHhm2ZuSAEvYkkjjQBCbnxkfycRzCRYfzXW9M8B85813xfdSy5HCXL9KFLy7S2srC7",
  "key25": "4Kmgr3ZvLuLdz5xunbegFm4JAn45jpAVUUrS7d1WuK4aaE3RcM5KfvzZzCJAeGk9XvMX3BYZRa2Mmzu5PyM2oZzh",
  "key26": "4Zu3ANrNa7zM4FjjTpCwmjzYL69TVL4WRckaQPUz41ueP6mv4hqACDL9gVAjNf7Nc36og6rGHP1p13hRuKk8NtKm",
  "key27": "Kvdzf4NAbYWuwrNcKTiMyibMFq8tUHSmsC3jZZ2ALUG3XcdzPEofTnqv4Mt4kMrY5Zoi4C4Ucs4V8PXskLLv3hx",
  "key28": "26US2kpP9dyZc49Q285Ph9b4sWKTjcvZjHjrcKcruesMhmdvse57GQ9BcyPwBj3AeMibS8h9YqfSbcsJJfXAnixK",
  "key29": "2hqxDVYeDUaYp8z4umWQXGptZuHVLt7Bk8EDnukrP9CqPghgJU7tgk7kvy5nBCxmZLQnVkAsquVSX1V8Wb2XnvVm",
  "key30": "5v32kuTFwh8YWoHme4nf4hGEBrniHdyBQkPsyMmMwercJgV4xyUMsXDTSNmMFmK8EwyWpU5eDhVEX9TsdnkCntDZ"
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
