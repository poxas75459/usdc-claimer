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
    "4cGddDKNgZ1D8ng7q7LpzpgvZ6P2KkVMmHvD57Vi7JinixGoUTavuUAHqsVMSvkdHggU2MsyWdQJ2cF35n2XJB8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zj7vjqnopLwPRFVdmU1UHCmJg5kienBSuBhXB8kvDgqLU67zaAYxTNn724pDv9og8wWHSsCkRor3yZkaUD5PCWC",
  "key1": "24DL2Fq1ebcHaiSENbaH5UaFD13fFXtV6PJFWfjxb5rTrnNiTA3DjLwiKuChKWuVXWtjVj9YMqhkWaywefJHrthU",
  "key2": "4q7MnvxKvD47XoVfHkERAKZSeWafAPSg8gpwKCSGyPyqx4b8Xp3CTDFj5VcCJKFqbET79SdusTjkFEirhvoKG75E",
  "key3": "4kJdpsakCCkWYTnWtDS9xLDJrj1rMgaMV9X8qrmzP1XTfhqvnWtRLSUfbE8h2dSKUDqf81saix38XPYP5yur4F2Q",
  "key4": "3mxFWsgp7rD9wT3qpZ8Zxhh4W3DjecihnNZhHnT2yUEEC7tYrjJ6QmDCJWyx7mTvHWib6dUQF4tEsUpHGdxUjXQH",
  "key5": "37D6QBC1ykVrjn2w218RxLUrzxbuxr3s17BdT6BPXS2HXSb7i2PJSZR7w6sVJUozTJ3WTyRQpeGxomZWmqe1QkKy",
  "key6": "4cL9XALdxcNAu5j1pPHmm1M9MG9EXNj6o2oYtmsQP6z2AD9dihtEnLfPfRy2ncDrkBsbhZ9X9pVf2tvBSq4CFRd5",
  "key7": "3ofhhyQt1KFeEFy5opg24NjA2SGXvUx2DhVYKxxWeAh54kiKz3nXMjjMTx6SShX9CMDnpXjBexsWD2ZaGRGxDJGq",
  "key8": "qGcoPw56dkHtAGm3ZxvmSPgsBx4sR7xTGqtoqK9Du5KwNXooy3pMQN5qokeY4hRxqAJNTci565sHV1gLRsx3Gdh",
  "key9": "4catNCAKiGDPQaTkYAJBggQeD3w2jH7fK9WoefcN8ppK6RN9iuoJ8hReQzCwYADVyNAejAknvrydnZpzwuAbCsgX",
  "key10": "5aJdGGe5RUvjpnNdqdRxkUGehnkXPUthGf9FsXgn4QSqat2wmEx34vYQAiXzTrEepLz4S1uyFnmTwdthmQM9qzhi",
  "key11": "3Dp2BftCB7qqTw5nxzRDDSPSDPbSBYnyDSuCLQDypy8BtX37Y87vomC9EAfUenr1t1uta1xFJwt57NnzztLeiZYU",
  "key12": "3vkxR32XzEc9g38o39ZLCe6aLAtpGCewxyA9hreqrdxFHbTkeUDMZoQLg18GKqqen8HveRbDgtVcU8P4QQfUm3Xb",
  "key13": "273rqukVwC6Li1RmTyv8Z6tmfQStQUWB3aTh3v8HfQpX8nusHt3EQnSKpMQqUarDuz444S784qa9i7QMzxEwEey6",
  "key14": "6mYqo2Care7n7UgoSzgtCFcn3RN82AJNEsJDLSe1ShUi4LmYcst3uQicJXHW6UMUB6tUb94nc5pp8cWxa3s6Wvi",
  "key15": "2SuiXVnySgdYz4unDNNdyUw6DeGH3U3yE4jJh7ke7ScTQdrTMSNgtip6WXpqF9j8BJXtfevFcWECCSHQr48NM9Qb",
  "key16": "2nfDseM4EHB9LVwD2MuWG6iNBg9wqmL7KcsH6Evv6LHQThxhGnvauxC73VxUf75qDEUDx6GddFYy9by8kFqiRVwj",
  "key17": "dpieCfSGBUDHir4pRqDnbXyTY4JfvbzsiUr4Bmcis4EH57hJAkd4rZ2gDXVqPiwHW5Ssb1hwGkLcBRdG2GJgh3a",
  "key18": "4pVBnZZkkEDrHj6txMZ2BGT5LRxBtDVZoYRUz88hgkapmgTgY3MJB5JrqwbnpahvfQh2TF3p8spfbZpEsXV2HXRq",
  "key19": "2WQcnQKAgKbY3w6nZtMDZLqG3S1MdTWzuhQqtW8UMJjJRq8MkEdBkbSxp3mxW1eZFStZEkwnPDWmnhfQoNYpy9Xe",
  "key20": "2fZk4C7RdgYYf4JbF4HWbTRRWLiFCYtWNpgvntv1cLc7hYRZUdRjJpDGfyXTng4H6iLdwk6U5Bs6RGY5AHasHXvD",
  "key21": "4syCcEQiMUnDBP7N4sJyP1gUhYJAhGn3WCHg919gruZdUiFfUkeRx1m3MW5nvwSs1cVJbfkMuLNxhL7EvdfSa7rA",
  "key22": "4LRVZRhqozL3hMVd4B6rMn1of9h4yub24NLy5etFaPMiiBNungMFyiwgG6rYj6Cev8Yr4WM5jbxkZ7P9nQt3sEBK",
  "key23": "3Af9q3qWHEqe7b8VNtCVvqNu8Ux1WWpGUceSBoWPDGSQ8dNn8ofQhQLkEJVYWaJKh3dNvNL2RF1mMb7QpJ87LTcv",
  "key24": "2Voq3rTMx3SketDHrFZmQ4JfQe8AGeiQFUrSRZ2XKD4NHoQmM22rFx49LnnBu8m4iPWDLAdEtELpxADBbLjn9Ymq",
  "key25": "4xcufWUHUcJNFkPGVaxxDxHxNRAJJUp7TAioijUwjKQ1use5ddttc1ef32cfVVC8VXbCPv8S56kevj623KeEMcoh",
  "key26": "2djvkZqHrvCDm2w1G8AeHzXxxdizxifBViQRAwWY5The8mFqqcpTs8YHnuuQHGfvT1WQ4zLhCPb23VQPbupYgDHo",
  "key27": "4vdCoE4DUY7ovZkMTYUqvWdZTubDssuCf5dMsmhDY57svpZekHmxXUCJo6aKHTXKoq7MuLqDfhExkwJc2F5znvrN",
  "key28": "5KKTSJFEogB5N5p9b91DA7SEuvoHZf9G8vVjCoLrzxg7gisov6apUxDpq1rbAEN1r4nLrEsPMy2ktU7TqJjg9Nyk",
  "key29": "5n1zBmhVYb8ZTS5UmteizxwArfhqCNJienrM8xkGz6YWxWPcgnaMxNSPe9A5dhQnSSrpUkvS3MhtVQWqPYN5eaur",
  "key30": "7exW6EeQjt1fyMUp77EqC2cwzSEHU4twjvnoDpJFUSk7eC2PqDGN6tmTaMH6L47Lxinb6m7U53yWaabdpDuaBPm",
  "key31": "3x7DpfutnKFM43BSyoKpZ9V9TxjCS5nquthZURveU288ygE5crEKEugfsnHWGoGoNpsApA3zgd2CAtz78ieRh2ap",
  "key32": "4ektNbAWHXecmmJCiNGmpicdVZrJGdCMdrVWpeRMyj8REujdfW6ear7wiLLkuv8PTMJwraRQD64vTGYnxtLKKZws",
  "key33": "2N5HCdGbdtbMryCjQJMGfahcSa9qo51veSiwzcDvyabkbgWxx1PCJa1v5RBywsdPoK5BDKP7uMT4ipfYDHn9i4H8",
  "key34": "mSQstLnGEZ8VLVKXGFeqXBmCyb3Cj7je7anfAr9NssYZAPazg9rsZMc4G1oxyf8jEbAyPBJUy61LdCumEEMgfD7",
  "key35": "4bZi8ug9dwu2wtVz3gQvG8bVtNChKWM5Ngt52RamSvg9e9b9dSKyLJ9RRVSyDx1WZdfVg2eAv7tENBoWH6PcEfY7",
  "key36": "25cbEBi1ioHmrrSJNPenS4GhajjgPvCcqWfDzz7XF3c4tcaFuU5dZYddYPW6yBFRwSKCFhDQzePxPkCXB4AcQUtQ",
  "key37": "5dCA1AtGPwy6kW7HeBhL327ivi57bj4BdEUe65xspNE53u8ijd27HSBwgeqf5XgAm1No2iiNGCw1Pb4pqxsGUVs8",
  "key38": "27StujgycUrmMsWAJF2zL2a5yyZqv4kNfgaBSNdqVRux1b7whWdGV6AQqiJFcudvkgypqdxeCSYZmrQBrdi2B8AD",
  "key39": "21JW4jLG8ek9R57CJFcPw1MfcxTb7dRyySup35JigBZPqdBs3f3UBg9ADahbnnNZdEAfB6dx55iGTK928LSc8fYt"
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
