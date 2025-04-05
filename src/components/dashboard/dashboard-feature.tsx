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
    "4phpmf4QacyqTw3vxM1YXrWTnVux8qXPAjNui9kEwjkjhWdSo2hRwZyTNbcdM7iqpymhQMi78wpfSoGjmJi5mtyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbZcN6vLPepU6phLshrikukawbGfp5uk4SQxLwctJettaNUYFeFskdnpPoSYhyBgiiYfghSWedBiBJQF8v1EunF",
  "key1": "2cJRZQ3iG8YNkzTuRUyeNuJ3zAJCQgnLV1LSJXVpFxtquB668HNY11EqvfHVK4MWx6LSNpDUgCCScg89EkN1rjxs",
  "key2": "3UCJ4UxpFZJAm7p5wwETH6CJfeeP9dnLPFrcyvb2ugTi7drQvhsZ1ZpsGVVSnkT7i2wcJuu447uSqWNkGfHQnicd",
  "key3": "aKsHTk8idu7xLbSYtuktU8tU4rDxhCQRMaDkZknubMXKmgYAazYkFqdXiKW1XsYc3cTgjEvpuGW7yGekTj7odpM",
  "key4": "imqoYmpU7Zwqx1TQh65BPfbSqyZFMGrPfrSyj8dLT6xywph3CQhURMymSqEwh4NNHGGTBWDJGxvvXnW924a7K7z",
  "key5": "2xqqyEbTU5bi7BegoWfqxPZ8D6hgEAdjMgfyG4gmvoJoSX8dZhxQa5xuGdsWFcskMc6W7dA9urkCAju8TbeQg21Y",
  "key6": "22iii6XmdaKd3bEXwF5vCr3qv4h4rdRHHfBHsuJZGtYywt6dLoxR3iQJJ6FCMCnqiP4USM6wMcC8BBywPJrMxjVe",
  "key7": "5ZjBoiXyA68gkiJ7qYTHhpsRuh2mRmQ3hHr7uKn4BKkZpiZ5RrfZARc8TbywAFa14bCjWEzcLn8P6ZYuoWJnEGYZ",
  "key8": "1QBD9mJADAVufGQQs1ko96sMD6gzobs3uyEeHm8rLzDQHgcmQhyrjz2yRNosk6MAAKJuCodScau76M7GSrtzwDh",
  "key9": "2qjpQdU6UreUEpN1sfGjQDfz61VCVKrEbAB7DmWnkg9qLAd6iGd8JzbYX76BeCmA3QHf9B8gqE6NigMyGRvoFxyN",
  "key10": "5ZesGsrzXhWgYDFVoCX2SPkLp3DxsaXte1inYagrhqMQzNj7fMrhBuXyCayzJ1wcYDycHqPjTTKL6dfnfYKq8UWg",
  "key11": "5ySUYDeroq7V4ZAWqEF3VQujWxRCRfwWuUunDhh7Kj1gWCcneNHKAcaf5Ma1Jp9NjHKM4ee9v66AtiSF77Jtuht",
  "key12": "41EWkbJyaL9Gr486DLCQsvDoUBxCFJ1TbC4dNiAfAzvW4WT9CmbNqsTDe7Wz96fPT4Wki1VFW9JTey1x5Pg1CpGi",
  "key13": "5Doh7buzUKLkd2aBcyLRWxyF9KJcUbEy2TSYwatjKw2sLYJaj6yzArWciJX3CtiFpmYQCwukd1JkiKdgxMDTCRFA",
  "key14": "3Uz1nw9GvLBGWXAVpN93P49uaiGuSZAv7Lo1X3QiBhe5Xj2PZUix7WuGQVtB7tumtpq1L1t4q2drVfJAd6qejPUn",
  "key15": "25VKxK7Zi3dQfN3dnLV96hD4FQB3BXZwFpQYUL98inHE51BFKYTPsbAf2DD5H9R82DQLWEbwnpMNfGeVGVqPtw7K",
  "key16": "5Vn7B4oDkTSxGY7rFeMwXMMgfNaaL9h4Ykiy6PrN4F3xeWwDuVPX3AkuK7KBdnmrygTG8cRZcn8VsKn82j4k2NRz",
  "key17": "5doHAzBxsdiihHFvVxnDCxSxSjoTuwcxSCkET2mYmBu2PmuSPb96mBsL4ASrx5war6Trt7MaSyNRfFvz181V6wYN",
  "key18": "3W9DMTHxvK8ta7htM1vGQqDc5BSCokHX49hoSjFnsq3orvESia4m7TTnPEfPLNvit7guegQjQbSLyBnwxdfDoUW5",
  "key19": "53DTuaHn2oeaR4rE9N9QZjScZ7NbD66oiZrSB3pGyBEvTeF1ZePuvdGD11nZQxFLMTqvgsb11TLfkLShdaLwvBi9",
  "key20": "585E8W91U41S3VTA8aHqBajJAPWsRMDZJdJHDwnAPc8UJFhnnQsAvwpJydN1eK4bVak9HTj7B9jGMaTtmaFJnJck",
  "key21": "3JF5WPwxq4BWTFG2KGamvLJg7dGWzZnzasKZDM3PneDUL3KPdYFpgS9wXCKm7n3pTUksSnWXmsoxuULmDx9Wm7UW",
  "key22": "3Gv74eMoVRxkka3GeUSRgG6TmNhVKqkBCeqcE8xCZ3HAfEg5XDy8xRtRHwnMiY5ZJehhsTPMPAPZ1EJB1fzw3DeQ",
  "key23": "3RrV9tnQF6yuZqQkSmjrxoKkwh6CQBPahh7e5anF4SwaTFWzdJebM9pZzriWx9asiLAuH3iSdGnLzkWGafL54iNU",
  "key24": "5N1h1WmVz6tzZkx3axho5NJoAzRzUdx9Cd3CxuPirgGuxK17JnvCNcMbVhQBcbJWPVCPSVov7Ts7Am3LRvKoSNbZ",
  "key25": "2Mv2xGTuiHRyTsHDNT7s5DApzewf84bLH3VRWu6Jcm6D7g4BsHadDbLkAiwB5w32RXxSQ1XNuaBhDYShMNz7fwLS",
  "key26": "3X9NusKrsm1tHqHTYkCS6hdLXMCJJoeAZAdWhzCJQ9ko6dQNu7sfgV292ECVFCdwpUCZ41UH1Zy3R9hNssyxn1Ga",
  "key27": "X8WqbfAx3KNdZW2pv4gBoMKzDEyzyad8S2vzMvkQ9uUqaRmxm3LfNMJjX6qNFzMRxegLqf2eBx6MAm48GotvFEQ",
  "key28": "659xgtXZEQ6HsbmHNBYiKtBi7GLAaGrQ1xyumbS58uCajHfrjerxHRMfJoPh2yAuCcXqh7C3FgXpmYGVqKPUS1sP",
  "key29": "43rTXAy5hB7ZGBQg7WEDfzm7hcFCvpFMh5oszfGnDVjCDWoEH6KiVvjwnp32HJ5oX7w24ZTTUiuZrgpxVCa1qEFG",
  "key30": "4h5cm1wgn6JmMFocTgH6Nq1zhBvEgBQYM1YfV5nMEjVMHdmSTydQRir9cYR6xfTxRRF5mssNNDPJA1M3RFwUjitu",
  "key31": "34RfDmFGNHWgGjBSnPTXqnxAQgDeSbMaLQa9F7s5e7fvZnCvW1ktvJywAKPxmdSHm7DASpJx7zdjP5JU3x7Npa5g",
  "key32": "4A6Yxyw9ftDrry1L6i31g6WtV6nwBnQFT3x77sEGn443VscrBmKkffvtkbjCqBfZavZcrmAWZm212tj6p9PQevPY",
  "key33": "4BwiJzpDXskqW7v5qzRNUPAcq4BEVPkUocnWJApqGZQjqC8dBzsDnK1jwkiKE81PryGYLydb7dR3A8cLNf4x1GnS",
  "key34": "3QpPNZjjoiqwQEMKhcU1o2LReHjEC1LUZ2mNWbeqvaubVsr7qtPjHxQDcg8VcxPvy98jHEkvKmThy1XBham1n2XK",
  "key35": "38n1BMwkN3WUonZ1wFjup8tfAxAWLGidSpfZVSKuHUvDc5asHuDcE4vHXZ6AowacbCXXA6vE3G71XjwSKpd1o5Wu",
  "key36": "3F3QTFt1phSDbn3af6qapbC8YXT2KLthRQRtkJDeKYZJWxEtvZJWzReZCZgvdt8LuW12TpZKasNNg7cuxeMZxt8T",
  "key37": "5PhZD7dG1X8qzXUmofNRHYCETG33DNffSFLKJQKrVUVL1LjCtZkufWCxA39WLNmmQpioqfHSrkLW4Qj3G9CaWH2",
  "key38": "3vHd6kLQbWDwARCB1Lp75nu5Cgta8NVQxbqUUDvF7CA7hdeMSoTtPkAHFABBTXeyqhpCAToVnFU2jNVM857UPRoo",
  "key39": "4UWvuLgXMuM4LEHH4NmhUKj2iJywM89e2hFYJDAhwuQRm27tNHtoC9qYZBuh5bDjtrBfZ1stPiaAi7b1s5UEYTPe",
  "key40": "5MztftTXj4AEseoKGFL4QMaoi2ACyC6H9nDmcAQBaFQCjCRRtjJLZ2uJqaYC5Ln8TJTXkeC3EduXbMoiEe3CvFqx",
  "key41": "4z4yx6vGLKXDR8Xb7Ft1QD7KdQCHehJ11aepMgJ6zFUiJLvADduyDgkCiTNv6qnZ6GCzXRUUvdZicccmX71WahWk",
  "key42": "4sKotNdgfcHYdMTMrDV4gWrDjMuydeJCki6XZHbj2McK7Tsjxs7E2Lv31GxFaHBmcJRAJ4VHL9cuS8gniHNz3HAm",
  "key43": "3BG5hccftXkaTFUtN4qyxjsBPefC728VnzsKo1vcJ3yT6o9t9kKiNLxyadcDAgt2oRWfZPURtcAdAtCeMQTLxX8e",
  "key44": "2RqbJFU9YjkKkuqUyzrZRHhvG4UUJ8qCNCd6LDqbr5FmcFVmHsFFnQ17GoAXCb72gFmQQDy6zT6K34wG8KjbTHwQ",
  "key45": "2dJN15y5TNDHXisw7tXgNC7sqBLf1GGDkj3kWQDQWvjRtLUsXQCdneYMS1sG8Rv9yvZDMMF1HNND7ff2eY3f5AoD"
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
