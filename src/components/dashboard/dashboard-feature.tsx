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
    "3LhE2hWt8Vowe9qGch1z46edztMycQGzPHy7PZyTg4aQcbprQLmtbT5N2LEAVtsgiLhYLPkD7hDyCq2kMrt1PpZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z45NMMBviY1kYt3HvgdKvNxiBzhhk6yxvRd1WignzXkUh1eu7BmWDEzx3v3AbRrgbmZMG8k14FrSbWoSHP4V4wE",
  "key1": "56yDdNC6RKTxcoda6yeMuH5UUWn3KCEnYBGQM5AV3jHPYPsCz1ePvBsFZz3SiKqGh2jspZkFccoVLKkPBsEHWJtz",
  "key2": "Z4X9cmQg4qbxyZRsRQ6smY9jRcns5Ni9xih9Ud2cyVeUWGUkDrrFnT84MJtuu4V94agipNd4zGfTjpaMX47jM2a",
  "key3": "ebdhnh4LBqkg9wVo6jrP8eQW72oiYtRLLwv4RfenAbSLM4kkYY57n81ArAfcLDr66xWjBc9LqkSAwPg3waGBMJ3",
  "key4": "4hubt9i85mGa3mZRqE6M5akAuUkCLzirXq5LDHJeG7p3myUVRa37owhVxS5FTmxGDwvKPjM6kdSNdyuSQAfCZKTL",
  "key5": "5CuUXnqhXRKy8VTzBP93DGC3Q3fvkZQZ1LtKXAPGUTZD4YTRwpwm5iutjTjzkL43VANF5QW8bcaF9MHD2bQLDHYo",
  "key6": "5GHwgBGsym3AWorfeTLx7bPQGrv6RNo7C6TTdWm8PcT5dQ2CBZDQzALgna2T4BBtfG5CwLWMNf9qGYx1AscVQfLo",
  "key7": "5BZS1C6PxQhEyFFwQYdj3Fd1ozYK62tVhu3fsq59rzUALXQ15t4saayShnaHv5zHfUi1w5xipEjQu7WVXVt7KJqn",
  "key8": "4uDKi32D3XPEp5WmGGFW1ZaYDZhfhwRVa7WqVNTFpMcZnCCfXBddAmsqmDM7HAxU7sgDwQ1K3RyPrHJfDsWYuFeA",
  "key9": "64sZ9fD9crShKGqvSH79HFz4oUikgSr8QrQd8fLveygrknqwfc8HbocHDvbbqTaBWwiKZK4bvHbfLCRTHQqbghuw",
  "key10": "2XC3aW7LJU4h4JUSUG4iLPJEzynWtYUSCoYAV6KcTZnce8KhHRrFQR24F8uGNhznpToVtDeDPUYo881ctVYppthz",
  "key11": "3TZ9UMNox8k1wJi1uavVFtcDTTmukUqCcaAJFtgsd4xwgbrfkjvwL15SEFiDMjFaNBGjFMYJ5C6fB2gx4NoYVAgC",
  "key12": "3DTfi36ZtHphJMEJLGtm3qjEnEsSiDpK3Pqb8fQB9LdY5RVDSc64G8BmGQWje9sCSsReyVdFw7Xng3mGpqn4YyDB",
  "key13": "fLwbB3CSBob24Ws82XBbbinZdWswNhAYY2QeCYZ68T9irXmqE86XDVsjSHk7o7M2To74t1uEfYcoVf5tSECCADC",
  "key14": "3pNYPCYcvDYEG2Du7dMP1rJU6mDfJi55rarvFaTCzFwjVJwwVQ2q8M1kEM3EsboocjsHAJNuBTghG8h8ydu1GMca",
  "key15": "QHEstAwyywfUE3cAYuuiFbysHkjtMGfNdaoXnkJphFrGUSma8tnuh6RSXmZSKcVqpWmvFA1U7u3VAf2beEEWiCn",
  "key16": "5djVokW9Vw5vgTZim9P1x9zWbouM5v3fDDGsW3FZr4ARHnvYor3pmV7zUR9Ka5g7zy2M6H8p4pK6Zor4uPwWQRje",
  "key17": "43xPRk1AMkzWA8hjh5HXCxw4CKuovJbH5vubJZguW8ZWaq2pPMUpY8MvCEN1Sa6qYb3tc7bPw3xsRpkK2tfS4tUE",
  "key18": "3PBpj7CpeGgqu2vnnJMRzRCehSZ4j5bTC8Q1Zut3Mt4eABcjhnmkRGdZxCQrR6eTzoDDSkCs7JXeHqienUJE3CiQ",
  "key19": "4i5C6XUxjN5YE1V8Y4DW7KSziU7TYRXzgqmAeKmKPMYb6YQ2c5uNugZ4Ky7BJVFknjhYCbs3DFDtAcuPFovAfAcB",
  "key20": "cXVtwqWfBYDiUJKFhGGi99YxqDsh9z3qCjohF3LCGrT1ZHrQp3887LvoAd8SZPg8NTtZHX7mJfZ3E1ceHwUujRw",
  "key21": "36U2joS8xaSeNN16EbZSEQqN3Kaz4rjQHG1MKbGbHdhhbt3L9TnqqZ8Jsxd6zbSLmH7ncmUdgKFbfytW9Xn4aP1L",
  "key22": "4w8SXsxqx111DqPrgGSq5fPhtB8AEMmKyrpCbts83ot1go1PhbgzrEdcT2EAWMFeEkMSQfBNUztvpYSSq6bX6dY3",
  "key23": "2QAemvbvbSE4WTyPQJV6A76D3R2ZGQdKTgpfnagz5zB35ZxqHhyZSvVkdXgFe9mp1gf92wTXV2YkM3YNnRgUqwAd",
  "key24": "5dxR7UzK4WzATXhG7rusBj9kqribWrTh5bb1ePhReroHJr6Fye8VcC6GYzkDMJNBsh1QUS4RCWoAY17Ae54WuqRW",
  "key25": "32EjEyzuCcpUfXdFFKiETH6X2GGCmwhqZnP6HqPDRM43MTXWqmXUVEk3BHwDxEmm8RWxdYaEMG3BodzHRCkPnw8a",
  "key26": "5NNe3ov3exJBHeqw2DxmqYf98uG4Hhy2fEKZywaNYoCv4d19rBsqWCqnudHVEKaGD5WWc3ur9Koxn4Qmg8wFxUM7",
  "key27": "5ePphcUJrkY2yBuBbHhpzvjbuifdcDNyNeWLW5aXFub5FUr2X8xTWfkfApt5a9yuMS2XHHkUDV4XQUommrLEF4Rs",
  "key28": "CUeF2MGn7MZyuuUkujPr8XDCo34FDW5bTKx2Fp9jU8PnPNX2iB1t651VpHe5XnJxBsf98qLGh7idyBSinB8VtXe",
  "key29": "37W5wtf7A915oojLKZjHnN1EfuM13QGTcTcxF2ngZtzZD4AYGKnegMtcu6XwrVWNQHoDmWo5ZSGudH4Ve2ya89Sh",
  "key30": "5bFh4QZsNuRUHADg5dVu3WzGf59ercTTFQ3LBaP7VSUijdEYFYXE4n9YT2wyopFsLo2dWvnrTauD66LZhuq7DqVu",
  "key31": "YJJ2vv2A9fKi67WfoDdbCPaap74G7QtpuK3DTJFEviJyfKn4Ksz2wkm4ZfZYCX5qcK5g8WZRE5tG1NGjEZH12rS",
  "key32": "3vLC9bEsPyVZUgCx9X4XoNFev491ACzr26ZHKx8qX9iqCdeM9jjy9brknTGXayvMnCUPuGCYHyPRqDYNmN8Pxaw",
  "key33": "29rdDXcxiCsLorMmpc8SQpwaHaJWQhGZ2tvS5M1PBK7f8K3CmcjC8VLuSHYmAk1arrzaXxPbfsE7S78QurhS6Fbe",
  "key34": "5QBXWsYrZ7uE9KonKHu6RpdG8TWscehBjwWLXC1obeYURdxrVVBXuGY8kepF2kLzZ7NrXvRpbYxAi9fVLL9AnKRw",
  "key35": "2eShT9wWYh6qkkmtfgEXwfCZLNX4WozCVQA5ndapCRAXmpAmMFxDGErnMeHynaZ8WuyQkPiV884ytsQywYZQNET4",
  "key36": "468t5s6WhcgeLi2j3yJU3QrD3kT7tDNcXsAYWMU2M27BuoUSUwMeEwxxG8LwojVG8cucfCaMMAAfWQeUMytAQuNy",
  "key37": "3Lsggt3VsYmpZpGetryKo5DtgMFjpdHK9kRGXhzy8CJFzDG8WywMk86ZEk6EJr9hn2nukhjWXyCa32CagUZZHonT",
  "key38": "4UP1NgvqwV7EsBagKWEZNHnYwgas5sPWJ29uL9sNYXvWA9h9Xyue5JPqFUGXa8kmT55wCcxPQWawV1ojaRM6BiwQ",
  "key39": "4yWpL9szQLuMqm4WWFsQuYyrnjS7nJzy73R3jqH5P3sS9qUAcJ6CUS8Y2ssCXujyTVFfAejknjkcdbJAVjgHAdNH",
  "key40": "5vsoZYNvRfTTX5R1pK6ZpKUtPDZmnL5eR2NnPUfpc6mNtBRXoMDEFqAPAmwarjmAWvJEgiMwB9xZWHzxzLCzgLDu",
  "key41": "3WoHsMjP6p89tFw1GCGqqMPfLyX5vuEdR7KJPZmkhR4CPodKt3w67RxPZMUjBk79YggocCczYQ8CuT1vaDShchNA"
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
