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
    "5yBJaUJtNPGP4uj1eqi61qiURhoohQnCeFo4xCYB72ZkY3BkaPFn817Rk5k29Kzw86zewAitduxJQ9wHM4p8npYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fTircXLytV7abZXHQwXufDAGZx2J7FbfUZwArUbizFs3xXxWvKTqqckApnCQaTWwjZxEFvehYoy8JMcz9qqdZo",
  "key1": "2oCyCd5GvYFHyKVDgAjizfaSwUJWj2kBnWMf8Z2bEuUdPbVtzyoWYCBomavBUfRGpnf1skw5A1CahFbmpLhX273h",
  "key2": "3bHeHxi8efYqUHBbDDEB59vVyA3TBXdCRy7uYvYiRJsxtDPtpEzz4TW61AUjNkaqG8sPRxbDAZskhLzNiv1wZGz9",
  "key3": "4NquEioe8onzmJQW1mVtPyDDEaYoNgB7EAQWgbuzDFYuHzK8Dh9LcgrAKKYruaGTrdQVgWAPt87W9oT6mC5js5yh",
  "key4": "28moB4taD2XVrjdLgNYcBJQrSCyTpSKkmXguzKm4BVhMTBzHEUnMfnTsmPaUZ5hCQRMtGn7pfFFL76YsoXecqvaN",
  "key5": "5tXoeaKjdYMkiDG7VK6oZhT9ib8DWTK7BiCurYAz9qHCCj4HMTMt5jjwEnp6tKzVDDfsvzLqYxhpAjmqkRuLGqEe",
  "key6": "uhLonor9pPfB4XFx8T9xG4rVUxwzSio8hBNparaenuppq8rGw2SciNZrvhQwzCDFNDG5BnkPhMxxCHq8iuiAWRn",
  "key7": "3oLMckn4b24wNZt6j8LMee7XYekW33zx4CWuR1ktuSVAr5TsKmrscswXRCPSBit2S3X4wWGYDMKnd2Q77fgNXXpH",
  "key8": "2AfEZYF9JZAso48ogPPAyvYiKgd5pn6zwzgmsBx1cnvwU7NwKCmBHpexrD7uMqttjE9Gyqg5Zn6xwEztBmQfHLgL",
  "key9": "49teEtJgX7N1rMCofvuyhS3JgusyiJn7EhbTjL96mmnZ47svABW2dcbtFReptsUzXUQcFDmH5t83dmgbwCA3akRz",
  "key10": "5VKmq6aXCGWDtSDR4qxgSEFxbuwmmhGwzPnpE7AHKWdotFmi5hzNzMcsBFcokoXpxV4jkFS3P6eUNL7Jx1sAbnbM",
  "key11": "Snuarxpg7FyCMz1mPz8zmrDWRfjcWU68Ww9p1e7u8GzRr5aCUrBo93Nzr6bhtn8JsXvgvnAECGbHiuWFaQFuhZy",
  "key12": "5jcuGgPJ1HBsnTQP43SFdxZBErSHtwZ42gSPivrBnUi4JahJ4D7KhTGucfKGPdZabi7AxCssFjrZfgQGpsjZdAt2",
  "key13": "ixEqxLzuM8UFUA71UBhpbyVLvikXComsvsvWpLXpoHfiut4kTXisXCHjZNxmGG9tvoJHxUo8X8MEYK78tQEbq2a",
  "key14": "4ThtUfFckQX6t4izu6rXJ8fJXaGrThNH8WrLbJZLrw72hNQ7n61jwhMCHXSQbHojDwfMrV8An8zrEihi7X3f33vK",
  "key15": "54mqcDQnKJWS1LzjTdhqHfYPFk4mZGRovy3TKtG21xsAgEy852jP3udD4dTK1euQwZfYzvSDRbRcQawayBh7gET",
  "key16": "2VGLP2huzQdQ2KSd1JUBTAKZBVLFK8m41vvwVMV1Lbtas9ChPXi7AMSQ2Cn29mTHjZhnY2F1DuRqEVdLDtN44582",
  "key17": "dPDzhMzuL78mcvwvbmeyfZCQnjFbmdmwuS8RtFJgSPDPy5DM3ZW8H6hfGqUDWjyGqoZh8z14DbkwCUQC2zTKRxb",
  "key18": "48a4J8mVmmaqaGFbCe2HC9qyxAj9yuBUxbr4NgbxRdMzdLQaEvxXZjE1K5iyHfJrLZZnw4bDRWJrmAhDz8yS3a24",
  "key19": "2oEoobcmy9UBQDhGNrY7F3r3pibht8DoEHMbRGQnBFK1iRo96KrfXhqJ8LjD1ezpyDcCzGn9qoSGRT4CZV6BJbg8",
  "key20": "5oAvvkQffDPxY2thG4SDxKUqVse2U6dftuxVj1Lwt5ziYMibPW8V5FYTo8FLuVTJMfDkwX3eFZEg9CbNXD8ysjDC",
  "key21": "evYWMrhbRZvqVPC8EYeiih9nNNgPxckpBbrbizHUba7uLWAbbpuAKWEJn5MWPmUVpZCrLMHfDA2YBR51mnoaZCb",
  "key22": "2PdFCpVFUQiEaJrMZS4t1tuRk6KtWP5GdgvEVwRJUPv6kGQrhf1Zp3hTzcXxdDcGwvmDUw5cXxFZecUr3T6jWGsm",
  "key23": "4Qm1k2engp88DZD38hscNF3d7weXV6uLLx42qJKh1ZfHM8cvwzrf5WbrLgGnE3xcLdFuXnVBLoRgKtsUZcdP1M51",
  "key24": "5wD1y4ym32URBrGGP362GHheE9zkpBzqAo8crd44zbhfELpBvnS9q66yhd39i2U2xzW5UaMhrYf78z818DigbuXj",
  "key25": "5oXgGq22hEm3t95EW3y8a91Lnw2XcgpiLiWvMmuV8ZVLgTnvCnRuyPcKe6Rid9P4tLZZEJ2KbRnzj4j3T2oV38wU",
  "key26": "cYcAFzaZnQXChc2XGr51qkW6PF3MGJkadvgoaSffwA2W3vZ4dHt9kQgyGb4ArdPUe6FjRJGxuiQw4FNPbhnLAB2",
  "key27": "3Qvn3vevbn6Kt4GEfUMuKijkU39Dvh2p41AGoEjitD7pak4xMPjyghNYWr7Scc2RMhFeSAizSkJCiU5c2tEoURYA",
  "key28": "4ij8Q5UjMPHCogxXfVGiX26V5KfNC3wEDoHtbpYJApoB6iqTuGycYtNzCqikspwcrs9n7a3gXkk8tttwfdmw6rJi",
  "key29": "5oZ7Vw3fg1DwRj2GkQbd3wUEaCfZuWJgq1WxzqDVw1Pk6T2qfQccNu1KVRpVjagjkSFw3HRX8Zw9UFjsAQD9sGXQ",
  "key30": "2CgimerSBTBEmSRgNng9taLdEPgxXFeT7EZ3Nm9D52DpXMqCojSDx1fqwWo4F3v8eAZsLMWyqRfzrDFRnpFhaw5D",
  "key31": "3fSNF8yprFJfjESMEoj7P4EvSmo76hqtqvvGqddp3ZwWoYQCWjYGM7muGTnvCYSWmRzWEk6pJ8iudhrARuYVB9BY",
  "key32": "4GuReVwvq3RGmrei3DNYRKMivPsm9mxY6sxgTe91QFt2ToTtkgS2uLMfRjTRuDrk1kYiEMctjBJbBNBJTMgcF3Qq",
  "key33": "3x1acte6PzBdh8JKQPy3SnPeQFgHsjVMbUQ1Wo87WCEAfjFCfyiHNaFP8dK9mfrUxLQtyNEbaSZ8Kme5yTyNgjXL",
  "key34": "67TAnrWxf1deWuaWNPLVk8n7cKk4fufvAdYK2NZxytcLuyimyVAZbW9VjZzuX8sPgv5aVNgTuzCQgYBDyqLgXngZ",
  "key35": "4KFxJYa7tRz6W4LuEEDV7ZhVASCKP13Mc9LWtFw1NciMQAdJ4borFr4ALzVEDsHH17o9T3mYDu1eCrguwdyhPKXR",
  "key36": "4mUUi233xhiTRtofgqJwRrJRCmXRD7PDuX2hewG7s3vDkRcL8GE6QSgKjKfAA1Habcct8MFvyp1UaZZQZgoccWsz",
  "key37": "55EU2RcwZPcxQs5wAJYeJqrr4ZSU6vXNGv2Y71nazURQjhoGNAUjphM1CaVNh22KFYUpRXvejp3F4dZGFHHS5ViL",
  "key38": "3quBEWGoVkTL5JC26V2gLZ2XJ9hvR4dgVBU7Khn6QdHefutzLB4LZxDPBK5W6EzTcq8ETw4t9PY9JdwKGAfNBGYo",
  "key39": "2V5k1zRyGCUwgWNLh1iTr99wfLguz7Wrfd8Q5vLTGr4TzxbpNVtSKx4Gsb7MYC5hZRzgC7Gd6kWbJZv1Vtf3c6BH",
  "key40": "5etcj8FZdbnxoUykh24QLxA3RVRrJz3sFkRi8BvaZenKm3ohKdeaTfGsHxrhkgzpNWRYyy3QFSAyHegdugUP4w7T",
  "key41": "45hKsxw9xr6pMgn2PjQyaSZqRugQF2GkzJrU9MJwbbDv2mwhUiGEJ9J3u1sS1tsjUL7UDTvqejKKsdxZeYatZumz",
  "key42": "5jFGCuqbtkWz47ziBihHZAch2MQ2LThZ37Y7X9Ujd5tCyPy5YfepUs158VUJj6h2gWpKGxeGUkRhuHVTPHz6EsWK",
  "key43": "ZdpKLVNT4ZUpj4yHD4om38iDK3FTFdmxfptWBnYosMLkQUu2n8SGKoH4HK4qj7LMh79K6UtQ6kwYYYd8vZBREwS",
  "key44": "Q4Ma1WaHT6prtoV2LDmJ34zwTaL8sXCxcKqLJ6fyo3BRJxfxcBGEvqLNyWdTWefbVBTbdhW2rcm5smTCLHkWmSy",
  "key45": "2MFnnJYsSEQyZfoUNzo9HQjM4Sh9MAaCv5g1NEbpcrJddJfwaeu4aWLMKiKqpXR4wEHQFm11nZJ1D9Su4XAcj6Yc",
  "key46": "3wFePwtD1DX6uBzWtoVMkYFmuMpz75mawbuYD8xHDBxnRjLV4Yr81hrpEqvVBMKt4y92TcBzm84vtVNJ6pbawp1E",
  "key47": "3CbrjEVo8TVUc6Rw6rfLemkjkRCVnio2AJvtXoNvARB73igg474iPp6QvbUMMmHBJcB64PrQaJ7NRkeQFwh7Y8Zu",
  "key48": "4qFNrLXMHZoPUbDVHCNxuZjMzMqpesZdnPz9N1FKbm1dVmQpAkp8bsP1FQP75gSUXu4p5k8q1ep6KWcnZEWSKEcz",
  "key49": "5o3nMKYyvSNN3WZirG95eHutM1mr5NDxPyMKpRwZvAa4PCyPFKAvGyhFtbL8YnAkE41ps26CkQHpCg6UCdkpyhTw"
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
