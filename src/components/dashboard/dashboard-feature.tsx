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
    "2hWtjUJJLB8QYrPqcUFV6jLbPBvQfSnPQszFgamxLeVYg6HwdaDkigzfzTk4FUqUHEsvvmSBnaoiWGD4JbqQYBdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kK5E4w26j1ynwBLGeLjjhVtBewF3EB9R8DpS82JnNcvKQ6PJEkih84F2Pz6VsCXeVGQ7yThQ8AqyaWHtWZPegDq",
  "key1": "4wa9wFSXiE4TaAHLsTrETpkAZ2gNTMozaDEdMHACjrFxWUeRDhU8FBKecjuU7crGC9cdph9GXaAHEoFu5Bys2sJw",
  "key2": "5NNizkABvFeVxPeCKccsZ3rJzwyNPwVM4wWxZWcfZEV7iRqQ1p8HhsFjPz53rRFU9WS1QL4ier7mN6THq6dGdBpU",
  "key3": "zjQvZWmsQXkjReqAq1X2GFvAWWthybS5NhiiJw7cWcNfjrpHtBiXGgrHyeLhAwaQbAjvo7jo5J5oRKgn2N3U9W5",
  "key4": "2TNecd5fGUEoYsHv5g5NTEBBecXqXZWTzvMfydKR779GRu3Z6NDDbySHER8CWdLiEEQMuyTqc7VzKP4cLF7hVXiB",
  "key5": "4DwDaj6dnKsUS4gm8TXXFmvN75a3xzNh8MnHgmaDM7pTgo5JYXC58gKekNQcVEpXF5QWkvBaSnfB7U4KMg5bgnJS",
  "key6": "5NVBSSf78U1M7dBFN4es1hbFXdHqQ1gUAbYnXvftGzQSjLVQPZx9JRXMaXAp7DRYQzqwsoLHSkwbnANUmaiCoaTi",
  "key7": "Gt18HWUZDhrxfCzVcFGQHv7ZoBuAChYe2JkGivfLxoSDDsbtKGmTFBGe9NSCVyBobnxGzAqMVmXQoxv8TuESQdj",
  "key8": "5AftqpjDc2ZhuHXeeeW9xrqZw4bfrwepBbQajVjKZZT4qvXjEP11taeuNUFow674gjgXfNhpiYXRLLZMjFBSz1Sb",
  "key9": "FMgSK2WGuL7Lb1ADZiZ1g7Z2JTw1ezjgXgCWh323RjqeubDrPCNuv2pW8UbbVdMF9ie36LQHBk5u3NwTs1Dv4Ww",
  "key10": "44PvLeFtFvzQz7nFnGa9F6ftYXxgZ74VCEWgAFSmEhqs5WeoK6uEEfEnCDdXk2jdGxHi7WiRVCTETdAXDEf8SWZc",
  "key11": "5H2JX15wufXoXmc5Q6Xt1bjkPzo9L8KXv796QtA8gpkA2wYz5xCwFp2Vn1bMtoPYU3kUpRpsJcZzPa24Xu19YBqj",
  "key12": "4tshZtQjUf6Hdsd2Sim5NZszgQgSxK499Qi6eXvSiyViwTd9HFmLjUNbRE7ZAKGNJi3bxhYNcUhyKmxAB7PPfWHL",
  "key13": "5H4LMrmBvt2tx1LPga9rSR5phj8b7nnoi4bysGPHMv5D4euLpnW6sqT1Y5KbKDMZEDJPTZqwqAEhyvwFUDiPPs1C",
  "key14": "2LNHDBYbnB9dpuVLRVzmhxv1CCdrEjNs4SakSVrrHCgzx61eckVh5FwggbaoVtbUTbZ2RM8sRdxYB4T6fQzvaqrE",
  "key15": "t84r4akuop1mCZNXwFjoZk4aoAKTFbwJr14kBbyAHa1oNPojgBmpXYZGZXjpzMz5BMxjdkd224T6F2GGuQHVJF8",
  "key16": "2b4HNQQ7vjVQ7gsgbe5fd1zqfNfzmjNCBVkMbUpjr7f1q1Z4p2xvWQSnKksSJLq8v1sZGC89SCKopawyC7bm4w4d",
  "key17": "46iPJdPGZbs1vpLRo8fdepzT8bQrDUUCSnKzaQ7ZaLKDLANiJ3ZsyPCcKvZVkJ4nvACUWZvpzJ3VKVXXLSVxYL16",
  "key18": "34zHbH85CP5kCEpei53SAQi9suhQwMjec2KBgF6Mh9He2hXsKu3kq3JcSF92oETxujgp5fYtTjUoeWRi1cUFJNdY",
  "key19": "2djuocWWLCwAjkocp1tdVY7JuYjeE5tLaU7gyea81gejKgemZu5e491uazuEqjZSmV2M3ttamsTzQac7AxLJD5pe",
  "key20": "zE6YtuVWyJ51KVJJLbsG4HicxhJFzrFvAftiyKV6k7zQcynLwytcSSjDFgDvSRyDcLEGkGT5HqzBJRSKPGkTCXs",
  "key21": "4akGuFfZqgL6hN2ABMuuMNiHkhPtqkT7Bho93YbRZByHAf4yPS9rJoHT5gW5GARaX23KiAQSGnRVLGWWRjYvSA5E",
  "key22": "5iCLPoAkncCcwkt4ZPqFjE2c4M6DWcf7X9csAkTBU5acCCDmYd3chnNag4e5saXZRJZic4dW3HdzrqecwDEzBG7m",
  "key23": "3UC7iLeKhH3GyGE37ZSZGb1MtmRtYirjo5grXb9iPWcBsTyZRsJDGSYDbAYUt225QQRnHdJEscY3tJ3jmxpuEkNK",
  "key24": "46HpuzbVU4JYbbrq1QzVLmuDRcmnndHCxEz2zLEq6tNSnhK2kHmxW5Jwcri2c2QtMXKLNzbfdca1nN9H78KHjoTa",
  "key25": "3fN5tp7YXgBc1cLP8DLEXzFqHta7bzoAE3L2r8EJr9WL7HGjaGzrKTgCA6SZY2ABFMcS7d3Fy1vi39CwebckjJXo",
  "key26": "5qxL8j3fezHWPmYffwhPTguSmFX4wD3fVUHAqwAec48ZuuzgpijqttNfGfbCrpR2aQ5keEy8BKZuM4h5wxAqnvep",
  "key27": "A2DXtiCfBvP29T9inTUbpYknnDnPCuRbJwfSnsrbzgWVkYw26k4kZm5oDCYjiD5zyfTkVLWs154MqYv7bhHbqwi",
  "key28": "2s8TiY7YEFqvii4Mcxu6fJj1o8y2aHJRjpYyuUqeUoAhZPLe3ut4bBkHZ9z3jPK2WeRMLQAmX1dBTkihDNbkkaMF",
  "key29": "5rEzLgEgPKSuFTNb3yu5Uz858C1hW1vfgjzbcA2bVkhbmw1T7FF4u9SXWMFvBuHDW4gL8Dk66Xm4zFora1qzsQxe",
  "key30": "4mzCRdosUK6Sn2rGRrSNfAbBCxKX8H4QKFuWDcMteNPvioEh8LZJCy8nWAxpo2gcsgHzs8gbuN8JacyDLDGXFaq9",
  "key31": "2e5tC7QNvck8TvnyU7Z5TnxLwgNmrT8MPZqBr92eJsYJxKPED7cdeNAy1qD6dEm18ZXx5ubrLys5P1g5nSVdEund",
  "key32": "3x455uZadEeRaguWp4TeMcXvDX8P4gX2qYu8b5SBRnmaCCPYuYvgzKbyk8HmJn3DKKM9FTTqySUh1ruHVQDLXZQG",
  "key33": "dzFhidBXRXzC9nAv2XCeodjgk3LNPhmSpznpczoCCoe2gEjQrAmrGpGkz5wwwwWwDJec4WQwYZZLVNkvG7KuSpy",
  "key34": "5Dk4JFzYeW22USfCJAMZ8bpr5NkRGoHWZpRkBkUCYTTGTjC5DbHvVU19YYUT8UPjgBjwVbQ1uXHxZBe1yi3nvCSD",
  "key35": "37CYvUh4ttjYfwZ6JqdfQ2vp2aJd4VaaQZGfKo3MVDVdUa29s1brfAUzAL5hGpFyFjmbJgFMTShTzc7WieHDAoTG",
  "key36": "4iS9RddTvGCudqJerhYzkXmhvbAS3xw7ReK7uniMAcPP6Ym6fPWgJuYZovuy57t4n47W8SFhfjeKGyjC2cRt86sw"
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
