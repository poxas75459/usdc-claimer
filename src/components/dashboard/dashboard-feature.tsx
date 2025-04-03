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
    "71WHBQnLYxP9qWGVWNGiu99TrPMsdvdq7yzFnpQxP76s2rnP2XpmghYBCXnFCAMQjNg5DveoVnzTuyPX4ZWC711"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krzjXFDPTS9vJRYf8qzJV2PFaEYZqabn1M3XLR9e9r4wRz1VbUBTPBRLA4ozmorec6pjngskvZ6GusZtH3bRWd1",
  "key1": "2qkBwRcwnA3LSw4kPgBjDBEUsz41eUijNUzz75PuoeT1rsUtYt5QUCruMQynCSihg5hjiaVMv87ch6aMsvDhyPGo",
  "key2": "38yhgiRFidMtKoFQ7KfRM32vHE8QjbLrRGx7wAj41fHdFEbzXhF83HTcFCNfVFuZTuCuBhM3HgLWCm9gyZUV7DPR",
  "key3": "4jdzrKLe3j94hghfGfEpdgJMXkmaRgChTqgSVvpjpbXv9gBTw7tY67gnjafzhvfP7dRhbPo9tZ9GAf4PSq7d2c9C",
  "key4": "5S32Ges7JB4hfyHvnXkfENiPZg8eUCXpJSwkJydb9ZFzpWBgvkTJnNwgUsipuzZw5LjH5VNGRHzXBHLs2ewYt1c9",
  "key5": "4V4DtFKCjtnB8s87SVSyAsip6hGw5yaLneNdK5SZ1VwAPzb7qATAZRzq4ByoYdBH3dPXPiMMirrSXq6waME9NgWy",
  "key6": "4uTmphXK3vADAfLGLPPKsprMUi5YHYe1LzHg3VEXkcdowjtid4bYwyfvgFoXcxZip4X2kTdBXRgfssyyNfW6rvic",
  "key7": "4te6S79bWBwrnHjM5sP8B5gh4SR6y5vHegZWBWb1J4w7SZXpBucZApepQXjTqph9CTxCnMQbTMvoLJbzAAXBm4Ls",
  "key8": "3dFeNGAmLwvcsgYbVzar7dY9uQdFDFrJtZ5jvinmJdFkwEkpoTbumh6DkUcsr3xuLThfWpjBEJrRwS1MG96T3CHq",
  "key9": "4EkRFbdUEcrVTPjjRQjvAWUQnFBkbMAHxvJBgHCn7YGyi5hzcr7HPmesqKbC33PaoXuZ8Vq8ngfoycSXuf9eESKc",
  "key10": "e6U1b4DUFAZeAgrD9TyXe4kLLuTKP9UKgT7AAgDMc55aFtZfEtcJVBcMQXDkUNDF8Y1Eag11u4GGrorPYmJX9zd",
  "key11": "4KRavn827DnP8JuTTYBWJuAxC6cv2nR5iPofFCvKB6hsnQ1wk8YhdqYneHHW5Q8LgSKCPX8kWXQLyBr3PgxPSsD4",
  "key12": "5gXQJhXCKQGfHUmfCLLWTqLESRpQiM7YEd8tvNRtQvRLAaUULLeY7BUc4DPFrWvePSgeq1pvyB3j4b71JhC454tR",
  "key13": "2ZkdAH5EM2py6BkeKaVeV1GaKfmcT8UgeT2ammtiowk1bXq1F4Y5RSiybL8Wz9byVBuWUwMGCYwihxWKDVUxPMbZ",
  "key14": "5G3LAsFrfAbPStCCY9PhkQWXosQVFnXV8YfpVWiiTQC962gdWmPgcrLS2z9XucTMJZpyCmBjhYC6nC7HdBGS3rBG",
  "key15": "34y1uBrVLuqR2ZogMxu6YuccK12hePVxfA2EsW9gC94fP1Y1JbUfWx71qqLUgMFds4aiaxTzoXP8qDtu6KGJTE13",
  "key16": "VGC2FdPiQzFrsNgbezXohJAXWtKNgJKYdhbRkuLCLyz2rPUAu3gBYFZTX4vDA4DxfzuUriJHnZ6mDuKx41FfGGq",
  "key17": "2WCp24MqUDih1trPoTn9LwDmAwyvne16k5Gf67jgfReCxH9AMi6vNter8yWGzktekkyZ3HjpmbBTDBkwWL8syDMx",
  "key18": "yFCzurJ1mi8jyRnvtCQxsxqmUjrzuXh5uYvGwtt9BTKPq6jaesaf1ceEt9FzGd1nwRJMNRhCi9zh8hvmrC8LSwE",
  "key19": "3mBzWEqpHqsc9djAMX3NFTeSPnVM5UDaZ1D1kwSuXiYP2kVPhqVqLrKaCWdxTovwkeH1hTmjUTHU15PD4uU4X3BH",
  "key20": "ohvhEvgFNHTNyS1CcXdD2pS3QfZaGrTMNQ1NKqiYKuqnRLUp7nV4NX1EEc8yqVyqaqVnNNjumqvpyMAJnBGQssa",
  "key21": "5nV8kAJMAZ5fbhf4tKFatyfe9L3N7ndB6SMEpDDAHh32subLYB6RXGjjhvyTELeLFs5iw1DHwo18sW1oRVwXFXn1",
  "key22": "4JSct782xCUxF77TDNzKfHFJhJXKUfXpZh6YAuCc7Uv9tCgRoUPvhFFeziXFPPXMrMm4gZF5MZsudCeRBponeMBX",
  "key23": "2L9vA7BBV31ZDtwutSW84Q1yDKjzRWMwmE3onpW248G3Xj5o9HRhpAffkfW37kFhXG37u2JR4dYj9yYFNRZvBZbT",
  "key24": "2XpiDV9aGQfo5YBNXmusgvvW9Sb5ybmcvB3ZdwHaUFwQExnLu8NAQVURF247jVR6d6tTGX533Xtnjd8iPS43UMTf",
  "key25": "4EtSMdTjLUehKDK9DhEcG2p1JTfaad4kgEtJ4XHJYkG3RYQDqyiMpnGeb6h4Ms8iF6hcJaLhAHKCEHyeRQQ7ttsx",
  "key26": "5ghyAdYqvKjusdZsDXCjBwHqkCYrVMjuy8rzdmgdJPQRGePvRvd8bhf6Ky1qP7YwuJ8ToyxJ1Lp9X5E4X6Ea1ZeB",
  "key27": "3PcYfFEexzW8NGJKn85eHayRLNQkwy6nyS2RWSUkvoysHodDnEmqBvhkvnhRoqmWfa7sCBH3rp6PT9AoTm2EoC8k",
  "key28": "5pHZWjNkogiRQ1A2B7wvkdZ9Xfnm1VuzXNsXQQ7s58YCr1LKigxq85u7D3nJxfhkXNj2AheFMBzZPLZ2zxpH4tav",
  "key29": "mnD13MYSfFGvzujwRmXEqMkPB5aNSve6xeB1n49uUPK1msQzwz1Vv2y7vhwbkrazjT1kZj6JotEN2QStuaeBGqv",
  "key30": "4K4YN8tauaK9DCWo9tbto8kV4hRMJ1dDYFxD5RH3LZVEk5fZmPFsBdL2Mk1PQmxd8iiR8FzSQEUcwayAJgrrBVmW",
  "key31": "5d3YwU3UkZ5TGV3au2sTbnPFcTYxyKVAdyWDjq3qxL4nVtGKEUnK49XfQMs27NebMSu5TfQ1ZGF6dtBDY4iTXHKv",
  "key32": "5puTVA8w64M6SoqLrBoRphucedKpTioU7A4wxSb7jUhv37QnajubvEJeZKhSu2KTyn4MNiFUQvhAbis1xitEqH1J",
  "key33": "3Pa8jnDbtuGYgHrfjCNr8zaoMUnHoaqZpPAZvDhWabCd4i53Ezd6RCAXeywBEcaKxxRDPCfJJ6FEGqLAUgvw3pG6",
  "key34": "4WTZX12C8NqCBVcWMVLm6UY3gXMWj7VqmgG5t4Zo3UgNsSYVREWyyJf9nEduQLUkufxLqiFQJ7Wa3KUKWfQAnjbR",
  "key35": "3KsGVc3KrjFfFt4SNoXcxko1HrctHhyUm3AcwiXmpru8WoHNFVbPGePnwLJcrE23z7m73UcizGVhZvYy3e4sv4EZ",
  "key36": "4ZvgZNRBnKU4yhE55VpiBgBkr7aqrxSCRC5zUFEwcJsfgsizVAoyXG9K4VRVAdWn3EyK9qHCNDiALjUn3Ph58PHy",
  "key37": "YhMNGPLAbX5dURdaRtEFN2xmZqmVX8NrP5N8Arb7ohGo9zyzd66NTpC9tVC4uJy8bCP2Hem3HgGmQWdVyho6RoW",
  "key38": "2UsCGc35toXzm4PLbbfmb2WjeEjH5DizuXzkV5x94PkEEz5bKbbhFjj8CBU3nE5CLGqtqcrzwjPf5n2zrv2S896",
  "key39": "2gZxE895mGX8Aaui6xxuaWfKiJKXQcfgM6PL1MGojUYdVWmq71X22MPUpMWbxww3fjueEkhca914cH7Uapvmp8mZ",
  "key40": "3tzWRfARL6Zdj8WNJFp7e7E5MwYxwqCjHjc9FnFaxBzALyVFJ5EX722xp5SuYsyq5wp5FNF6eHsC7E2UJQ37Ac16",
  "key41": "4mYef1pxToSZvmEnMkrqSXe5dHb6WWLwhHkAy99b7xihZpYeAAJwKVq5kbn69rS3FiGp9zqHtFLffRLjpiLUepnw",
  "key42": "2ucwQFrAdoYtSGL2uTNh4Pce1jaALKZLbCWX5HhSLiKjhGWzzRx7cJCAMPMA4W52BSzRFQZoFeQcSmmBi5eDthXV",
  "key43": "4tQSRGbuqADxQU6Wn9UDAq8sAnTSjgV2CTXSUsQwT6yxQDrAZfzC9xPjeYvKRNcj8X8R5Cv2WdU4VefJ4M2KhmXZ",
  "key44": "57scQXKp5XYKJmKTr8nJvt7nK3bkwTVxodTvTb87TUaNsqp1g2Mof2CJ89mDvyunSmTyA8Y7jL3HSvAdtsrJ5Nm3",
  "key45": "2ZKgVpmSUMENgWp9AtdyYGzy9TsDuXcrHfn63TfxX8Ar5nN152R8pzwxPkBaiGTugCHiUD1kEREkEenicwohDzKp",
  "key46": "3EoDwpgynQA5DYmyAeTiFUHLCgNLWP3CvFL1onzMccPEDgv9ssvK2Zz1NQ6n4cAJ3RivL7tMhfXcErP6K1dARdJ9",
  "key47": "2sH1KDanwN9ToWgNYA81xhutvsxrNcFvoKovxEN9b8JszFvMZX8kU7dL44Mb4PBkbLKwCj6dmyuAeSmRzM5B69Te",
  "key48": "2pxBvVmrJNRM4g553ctHQSh5LWLatGh5Lh2vi6bJasbd7qvcXLTtVq2vsjx31uWR8iMGyDQeKcqqaK5Y3eg5ALxR"
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
