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
    "4gvzoeintNB9QHXJFTuf1GLys5RPv9h6hxN2S4NncvnwmV85qspiBcpQwezva9wt28Pe4MmjKBmBpQqLxRG99ogD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XeGM2zag7pT7UyrRfokf9nCaGX9YPxn3DD5GR6ZJ4hfdaRx2Hbm3M5coGJ5fNYRuqKd3d84tGFVSCcRg3wJQHGe",
  "key1": "5Shycd7YVv1Vc4a4UhoEA6ttPLb541odGEQvfeoRnChrgeZwzFi5zeTKj8zkaEb5i9Ssx73G3vr8i48VffcLnUrU",
  "key2": "5mRnTFrEMksuQtjM5CMnRtNE4qvKrSB3obmEEW5YmjVpMXG32hLBUx1S4TkkfxwerhoowXReW6UihQcej2Ns6Noe",
  "key3": "MmKCXyrYfqENPfkhkF4k36bRejqKsmRsKoiPDrdPKa1TV776dk53w6bpf9HydLUmi2q5KWg7xAKttrLYNsvsayQ",
  "key4": "3V9wc5a9W5SSE1uD7yVhmc77c5FEJzKa8BYiTDQ1zFiR1zvCiyJRDozoFCuAaNM7QPebxBJEuQTtiFCGbvvn3zoE",
  "key5": "tzdMBWKsq6X9yViaywSDu86aC6zEBAXV4wk4AHz2QiCPpaXgkEzYWYEd3PqWz2CKtiCv5kuk4jtpxTAnQBseuu8",
  "key6": "5nN2DhCCLKM7BEpc7RAGoVVJPnTJsXovwov7NPwsbtNUP85i2fzMFTEsAcdRg3VkBKaJSxhkGLcfhkcWfxwaXcro",
  "key7": "4NN8L9kffKGqQoTLQEy98WEiUE9c9W6gJwcPEawkv2gNgczW8asYT85oqgV1S6NacHUwJUy4wjNzVXJG1eFGJe1z",
  "key8": "5yHLtpFNL6vrXK1YmtoBupcowU1EYK41op18eqEtLUM1EJ5p5LnMUbtGd7VViAaEC5eR55f55fT2cCcHyMPLskuL",
  "key9": "35ky2ALgsrcsUsKcS5gMo2puX2UGCSY55pbri132WiH1ZVqs552ESjiZkTL3dcXHiHKQDMhmvnj1nn3JEgpRhs7D",
  "key10": "5XEMFokaTiiSGdWhFgMa2iSdfAz9vYM2tTZZEaJPmEQEZ75kBWpcnL5NF546GKhCi6iVNnYseM8zM8vZq8eftcBp",
  "key11": "5tPRFSaPz12nQRxZ9cK5vZvTt27qRafs3bVPK3bxsyKsUSq9SRxdn9tf1NuAWGcf9LeNordbpCpVSCWsBikBWHak",
  "key12": "5r67HCxmaJECusFakyNj4zweJFCbMSEresDTadBKf9GxYjaTsoUicdVU8ei6PUr9aLeh4NboPbo2XCLGu3dRrms7",
  "key13": "4Z7DqnDu9w1nchQHRYxypgJjzcEJ8WQnqcD9BkJiwtff3SXmMEJxagu5SFWJjQyrupza5X2HNUXEW7tMBc5y4uik",
  "key14": "2bLMwsg6uELS5XhrbW6qN4NScoipLZaKQk4WCD3udvw2HiQrkjMXfFcnPwi53S8o4e5GevKJZB9AnEm4BaoQwprk",
  "key15": "2nBjnqawfNndQ26dmDuJPFNghq35nCrpv8eNE4ijQVw6EfGUz2MzhYTKCRWbkR7swa5j5z3aAvwrubKJJuaUg18W",
  "key16": "BT8SJMDDNQKaYTQZZJmzM6VL6B45MujfMFT6e9hBbCRwVaTj5QAE2DHtj9G8rpH7gbam4KRk9Wto4LLN8XL51fz",
  "key17": "zLfqnTZJpVDRK2YMHEio2qky7FhcB7VQ7xV4bq9TUfeNNzg6aiEi79a8SevmqHNuyqNsDZg8KN8JAXHksGhQQ5B",
  "key18": "BUi1vUmWzvJaSMbtmQad9nfsazhRBNeY4CwZGbpXnCzYcYMEYCL8wxs8fUZvGFkk9q8v2KP82rXmF74DigM3QzK",
  "key19": "3AV2wtSya98EiPt3xkPYRjYqsFugL985iBwsbu3vLLy5Dz2yrbNGgCBvktsAbzedqJkLTu1dd1sbjKuFrvimiinv",
  "key20": "46KjjfUEE5NuX4mAib69Cj8giqGGBtJzorajBrQzrCbsbAfsJ4486E8kAoKwbyed1WGhhWNpTgidxb8c4qrcGGH8",
  "key21": "cUJsNt1dnk423Mfw1UYkheSGpnASjr1JRmK5tmrsyneYaT6FXwVBNHS3GudFF8BHQ88qY9iwA174yTwRyHqBa7a",
  "key22": "3eNfouojMcV8bZt4Kj8d3GXEBxSEaQQBYXtdU4P6Tc1HzznXApBXuMgvTQcJtE4mmXJHQXQcEAT6jfFSFikZXwzK",
  "key23": "3cBLtJB78zw75Lfooopr6Ao4SzLEENZMwH677mL4V93vmydTxF81dvzDLiLrAfYxF3eNjz1BCRWbd4QSTsDhAfmo",
  "key24": "3cpkSTNXdzSEiQmxkEYHwuiSaHoshxcevjuRb7vWPkpm12VjMkA5oPJC6bHgvHAjFw1HddU3BtmqdWbEE9Pi8cCv",
  "key25": "35jdz4HUkGjRU5cPBo2At7P5xUqnY3tktpC3pW9SD3pw4mv5hcCV6A5zKF8o89g4vd8QXofA3KBY3utdQyihLASC",
  "key26": "5VyNKADjvji7x6gQZAkZYSrehhGFBJPzXHD1N6iKdGt6ruJegU744RrGfAWzWTvqGAxHjLTmA2HMLwEM2xkmCFEG",
  "key27": "HTT1sCFzeQQwwj3CAu4r7GQHnbtQ9NjCbaHNDjZcuj8cGu38gF7iemCYviyg2c6xEyL5fmDGwjGg7CowFaBiwD9",
  "key28": "53ehJrf2AqZgwyJi9pNeBdpm2rRiL4HCTujxHHqQ6rhmGB39YTM5q5EzAHUwophJwrVLjwcZaHtK1HQCBmoqv9dW",
  "key29": "2zM4z5MnQQuEFW47dDfdR9R7tGfgpEdieurGVGA4WqQajqFdhNVztgyfZConJ6wdHkNEiZidX4ppZewcq2nDVnYR",
  "key30": "j6DhGNfVPennuanQ2nLaEHbugTXqcVq4i8Yt5wAWmuKEXvscLcX8TubM3xutP13NqRxmbUPAk93YQ3hgpDvzZiw",
  "key31": "3sjvGXMds8t3JDBWhf3CW8FGjQ2oNTH2ehWorjQHHtTpsqiD41ciQeuBKQfXCk3sE4bkHoUDKzwrCu2xdUGRd1fW",
  "key32": "47xKEYCSu9HesGaSDidujc1k9dwMtAdRNrVyJKAxVseqLptpnfbZy3uYo7uNZ5GRcDDBU47yJBzMeMoG62BytMiG",
  "key33": "2Mi6qUz2CZCD3roN4Jv4BmedFyHYfUg21x9HBBQSAEScBYCZnkMWZaDj2qAVrQx87mHQWBC9Fb6W2QTKwjNk8qeb",
  "key34": "3KDpXYWjSWzXDJBoTKaYjZNacQGyeSyp1HorGZCYP7RgxWAzNaisFHcZChedRXa1HvdFkJYKT8kUaau5vHU7HsS1",
  "key35": "4Xkb96YknZiXrYC7ykGDB6VMRvqTiyQ5YfPGx98aiDgiwAKSuA6xjC9Zg4DGWdkFC8eZuc4SDRRJZh2vyjzkCwHK",
  "key36": "2QkHLFDrEiQpbqvkRVh4uW95dVSbsZEG3rERY4KyG2MJxWCrS3sytohCoKyp2cY7uJxUrRHRE6jqtrwSkcqPB5Ye",
  "key37": "2edtkMi7Tkrjw48tbZyoYbm7yj9TPEFMqe7PdNWYBFxYi6mxmgr184372uqmNQNa7ew5zY2HQag9UZAhfL6dVvJH",
  "key38": "UJWmvjTmFwwowShazd8tbF84CFoA1riffnjVGpebs2VzDpx6Pk1Qmp1gabDRBUC4vjRY7UQwifxAGEUC2XK2FXr",
  "key39": "QvDLxfGJEXum3dBJAwLCrtJvhozfSM86vUYXrZKPUnj6iLpNgUywhRRkXCbtvdazUFNvmXJwFGTv61kDG9am1qG"
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
