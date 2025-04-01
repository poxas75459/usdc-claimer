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
    "3UpDB1X1WGuHJBH8r4Mo6hGahx7DxN9Sn1MANJVywqRdA9ZnmAGs6XRU2xTU5NCMWzWZ9K8S8r3PC9bLNvuzfiYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhDtSzK6DUKSxScBsYEBManG8nqRMBBv3WcsNrDMZzjALVwR3VUqjE8xbtGck1JZSfptSfXCnyDZvSv2nqMGKeD",
  "key1": "3tYrL8KspYGD48ZuzgQECHTSPTDqH1ssDoNNybeYiynoNHLtUyox8wtkAfRPXLdV9Sgj8XvnfP9dJvXSCwRsxsS1",
  "key2": "2SZVXkpvFmbRsMsFWaEfuccFqM3QjJtF8pAKuD2P8ondr55RJDoPj7xmkiB3t6kqNfpC1e8iqXfG57UEEyVKX7jB",
  "key3": "2rqCaAk1TN9QoK2p3tYTVucvz7hvQt17nFfH61ymd96Qu79H19om8khWcj4qyMn7rga23bWsyhRTnzxShQiQTy4q",
  "key4": "2CPnHYF91ZUnxTR7Stnwf3y44eYFiWRBSz9cU8t1AJ4RVuH9Wayn5NftbDKCmLSgZzg8EzFGwsgdiGmYwzqPEQjt",
  "key5": "2CW1Xq9a5THvS1eyT1UqfQ1XgSAbGNmQqSaptvubWD3Gysec6uLcpDAqjgJLGvdbUKGd5mWmWf2kxf3Heen6JNwS",
  "key6": "2vJJSUN76e5b4YDwnccPobNxWNWyg9Qvkm9Dpe4WxHPRRvrNR6UShfM6At4Ucx2295a1ZmG3kQU5KhdjpbobMcnT",
  "key7": "3QyCTtHqm4ujGgX1o49yVAdsW3ePKwYXCvLgfvLs5rHtxQVnUPJ4Kek7dazrYymo19MXsffPGRtnZaw4xYbvBTv4",
  "key8": "4J1Xf8T9W8wj5yQmGxSb9f5vzEz26E2G8nEJ6BU1h8SHFExg6CMvjDrRGnUnqxvHGr1XCgfnvkkbQ5kfBYpyPzcq",
  "key9": "2t97qd4grJ9o7dWdM3WDau2mKPCUjKvQD5GTtyqUpW7UEKj8D6KwMd3HwRZbGNnWsCUBgCKeLEHH5DMM6uN3URJ1",
  "key10": "iMktti1sTjxYBRqtycS8ZeBeu44AU2w29zZuvqLDSWpZomp3wNA2vSB6xdKacehfWHBQhU8GqxJgt78LxSkx56S",
  "key11": "3B2Zwtv6ZtWm9BqQGGSb2WGpXkpXM5owLyrJU3EUesE1bwgKiVZGBrKUh2KovpCfvBjzwdJHEL51SUoh1WjDfh7v",
  "key12": "2GZukk6phqVo4CdVoxSU6FSVbm21bqmB4EL2Y8jKEWm5DQCNFMFijfXaVUQtFAuXxJ1VhYDQvYRLXAWKWK7CdPPr",
  "key13": "5Akx1hhYWqDFFqmfGiBbUyisKdUYfwAFg8PbFWufffsj7yG9wPVF5fNkpDjKcPSboXshTKEYwmqpHb2HUJy9ryF6",
  "key14": "qcueQKxRbA2v5eai6VMSNc326KGhY7DMvgUMnyhMqttFesat9j9nt9UdwWb8qSGuznA4pYmUHfTUdcm5Pyc9AHC",
  "key15": "2XZQCMVMfgNe36NzNMkUe4peWAiZD6uJGjtMFgR8pPGgiceW7TGc9SndfaJ9XGkurybgKsvNpdgDnMMaKRSP6qDF",
  "key16": "5BpmD3wegwbtMZT4qZZPE7cQzYV8Ny4WWGEcWbRaBpt8bvkxxENUA3KRt3g5YMQysQeAooAH65r2qHKqPuuhkJkv",
  "key17": "3Sxvrekx1RWAAd9RXCrmbPL8s4PynXCgKjCBt2JYZmD34bo77VxZanpwXiQDbqKqP7aNfsXihdubCte3RLrY1jS2",
  "key18": "5tGrxkkzAp8MXiBmGwTX8hLRKhUsNemRzhKR7n7CZqjgeVvceNREmbczh9SVk3BCdrAN99NxE8XXC2PZtuRfFdkc",
  "key19": "XxGKeKm9prMBxpaJoUtkDK3xB1o3MyqNjGWjjVBBAj5oREj1rNSPmXAujGAEG7E6YhNZBazyzTh3rHcEh2mY99t",
  "key20": "kpY6jTr2nk96RxvZybYPZGqEA2ANU5ePFGj8fK7shNrQSigNT9ZqvbusWV5y7vXzRxWbXP1z6xeaenx5k6DP69C",
  "key21": "62ezribNUhATtaEDGSDQEvcJJnYFC6db6V4Awqji8CakXNbMbuHorrM2qB8erHEA59ofGEXrdD7nuast8orw8set",
  "key22": "nA22GMx6B6BihHTvEsYNWTV3xDJA7FvPRSsa27tkjvoS3FEVctw4rEAbpwPQr6oFWodCd48jjbq9gnRqTcqx2hK",
  "key23": "24BycueBTQqEuvgMtA3AxKnQvXwdebBjZsWDvWUxkQbAVmqu12s5JWRY59goTzUh5ZrPoGAKusN6zmFqCoryiTrT",
  "key24": "3upERGRnWwPNXVV4YRwuGq3EbLF7XR6dk7iJQewkvvzCx3uhK4wrx9KpxgCGxoeEFGJyT4z9gjN2gKrGrZRnygNK",
  "key25": "g6ywxnKo9AFAuWLz7pfxBaSNczRgbjSw6SyCToysa1D3uq75i8MTYLyc6yeYfDuuST1istfFCV5HuXHo6xBdPNR",
  "key26": "65RoNC26RAQF51V2ecUrGBRZLWvBFRxriLbbLi68qtUX3upGMNUAFvomF2grKritkFvkoqpytNy5tF7XrHLNErSd",
  "key27": "3U9pvSEhJQkv5s9F92qwyk2ccw43MuGbp63MvGrnwb1in54N43xwYtVs4czbeQqygaWyeTmfjzA9raBYUFun7QSS",
  "key28": "5B8nZdMCttVPuggdXiHhgjMcCa8eyxEsBmP9zpXoCKrbH2wi9ySNLGJPC5SR5Fn8TZ9rwxJyvgMGJCesfhqYHu4u",
  "key29": "2RiK8TND6FUcSwX6wC9GHKq3uykSVjk6ka8EcvQqwAjSzF5u7qn9PebVnEoG1UZUAPuVMBoQnAQc24F1gniik5x4",
  "key30": "5kRe4JWVgoNsmJPXCpQfNrsiSrPTjMvQQNgc2EbxxYT25PkgdkVCsCwfCLfj5nhMAJnTpqzvjrPYuSyb6JwbtwHW",
  "key31": "3Sv3Xrd8gGoqqsd4xPENHjGQAyPtZFxRAKWbdWhRrY1BzNG1VyNMuUyKZU1xMPpK596p6p3wTydFryqLKuRov2dD",
  "key32": "5KcTxeQfUEnAzCiF4eAnpfCe1K8VndLoA115tAMxUp2qj8xxQJMpD7LrF4WBV9Qr31dLube9w4wTsHTV6AE6H2x2",
  "key33": "N4UaefFenedG9u8RD8qqUi9Pok3Td3KJSiEKdbgv4CsdGdZRU14Pq7iEkrTCrpKzyLyTE1hAwtAcHeQ5Y2r1UiY",
  "key34": "2XRTrJUdec4iUVFv17SGSUfcpBJhwpekkqKemtJ7YbL7UeZwQtF7AoDCFUwqqqG97p3Qu8tcy1dTuee4zUu7tE2y",
  "key35": "vW1Pj12ds6dQVgBazJu1h2HWiuLrVtrz9gP5Eg2NYLGmLUNTgyYdqRNPiEftf7cCaiG452qx7T3n3fiyn2CxvX7",
  "key36": "3igmtTXy3tVsp4UyWJjjr6QWhK17uceF92qvkG7REW8utiLy75KoJ8rTQjX27XuUEtn8oUtvYruX8Tj1jB2A4372",
  "key37": "4XXj6UJLPJKcVRtASky8ug5vFh12Xqc1fDcmqrJZK9L8aJ4775JhnJRDfBxvdgyzJY1wo1iJjeuHSZqDNPNWuQJS",
  "key38": "2fdgBq3dGMVpdAAmWZkcd7BhrDaK3U9kqHTBJNYzvX4QCGn1UmdGKVL1iBatkV2gHeoJHoy43xXjYaAg7nyDVuJV",
  "key39": "4SsGmx8QmiV97gwUb95Pa32pCCyBm55JtK9bvG6Nsn5JUwUovaKVJyWzSJH8WkBZbDLp5yPzoaYgAxXkqBHppwuU",
  "key40": "3SNtmr9iydBhjUbdPzpu2LqXNiLEgyC3mKAxADzxpiqPUGXo35TX4a1Fdd4b1krRueq3Wjum5cSCbJeCtPjr9mXG",
  "key41": "5F5SgWB3FspHQSoptUUwjWwvshuzn6H7f57Cq5kZ1YA6sAhvGqcEpfRum2dD1yfCz1tdoYHfboAz9D8GP5Hdqpvk",
  "key42": "37w5QY42rjW4bsmjApgNVCB4boDsPEB4y67Pm7AYFcxrn9X4sSCQQpeUfDFYtxfwyv98YaiwULrsUT64Emr3Z71f",
  "key43": "TyqNgsk8fTh7FxLmBFszMvh2DWr6d4hn6jRUpDUmeQ5DCYyKykQwrPxuhVwQkHVtuurU36fy7q561z5t46iM95w",
  "key44": "WCjHz11iJ7vxWuBEWXZV5UwA3qtfRnx5wbmKdC3gW2Krn9fvsyfbHRJhS5TFhXEGkCmgPH2h9osHGjZo8TrjZuV",
  "key45": "3huXzL2PFJ8yXfZHBybGDAtpaa1AYGZ1XSWxh7F9kNEA6XNDco7hKwbt8aszrA78jNo4u1arHDqhP5ZZsDPEiGfm"
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
