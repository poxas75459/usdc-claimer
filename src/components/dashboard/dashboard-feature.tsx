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
    "4Xed3M5N9Nxe36HWRxWaH5JYy4upcZJBeK65LtRJJEf43JnhxCRj6FVo9mSFntD5n6VCbTQaSkx5Yfim9RTSs4ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9fTyFeJjM38F5yY7S5ipq1XyzjJRUFxKGb4TzZKvcowpm8jn5D8xRkExnfG8E6mZ23WYeaiFuhVcoUG3vkq4ZF",
  "key1": "54RB9JPt9iUkvj6G2KKgxpUBxpcEG5aqtErDY1edWvtRJiwhfY1dJBHjwii5jLHLS68kQXk6FvFz71HSf5xQiB4n",
  "key2": "vtzGMbfX7uW4nSbzfEcmajkZYzqdQ8aNXFtcampFPS6YfhAbzkHfXnGa7HDiFZjXs3nU3EjUkvBgFPLp62oNxtQ",
  "key3": "2kpzjR8Aerqe9nyaPfHvuMesmbMoz9yfqVLYdGwjzFpdB9AhzkUPQQuCvFJC1fLVbwbeG4HibfLvqaoKAt1wvMJ9",
  "key4": "gdxHMRgaY8BztkS7vgPd7KXbPXgrwaeuKE8Dsz8ga6RY7svbVbjjiWiPpeaGiN4f1AESsz6aRN9w9hAqg4rj3uJ",
  "key5": "3PEtZvJ19RJDwhxsZTFhi4vKqbCZFki2VCRPKJHv4HkorDT2KNUmCC6LBaU2BDamiVSueNBBWZkYbqKs1Gzfjxds",
  "key6": "2KKjJu4Evb3Qk8kB8fGAd9FCj262P6AosF4WfNu6ZCYtF4L15dE29Gf1mc1kwfQBVwXwShmjWNufbdy2znL5buUQ",
  "key7": "5LXKnSgQ8XH3z1LPe43dgJVDHPcwv5jUVJPeXx5mNxAgDBkQ5BdxUtCftRksUK8MLb8ibsGNgyii8tVKJLAUckt4",
  "key8": "3RbDF6eT8D4HK9f5PUZBaANJ6GvtSiSviwaN9mDHs6wjCxMUmTTi1VmzdR1gu2yS8d4LcUgvmwgpUyBeTL7nc3zw",
  "key9": "4wuWEZJNPBDcpkngW7LgJRxxuoia4y7Tm6aorFSeCPZSbEau5TLCbgBRjioAu5XLfMnp6iK6YvV2txCm8m13LTLY",
  "key10": "45o1SnZ6Wxssw35B9EShiqDcgGHvvkNM3P75j8rtS5LoHYynr6TMdWaHWqgp8spSw2oYZHCr3V72jJGGjUFkgTEB",
  "key11": "3yztFH5r6zp1MSPUFJuj2aNCCcf9RDMLsPCUbiZCC3qwrLfG1ZWgzZEV2wkrpyF4Jy1xtizLbUB8sxJRMdmMK6Yf",
  "key12": "1CDpR1ubY5w6mkF5D3WDfEXbABXqykeKbScBpRkMHKQrLi4uzT9jkiTvnCLxwtatuhg8aPUAfJbYNjNUsfHPLK5",
  "key13": "95jLKdn5pLb9hRuDX1vCTuvPs9Gy6nb5r8spVnntX2DMZL6xMX9tHE6wQGnxAC9xLrhVcLoZhf5t8YQx7qDaFVB",
  "key14": "5FJMbmXvHNCNA46q92WdM5DP1yHCuKsKLvVvu5zhJkh5bLoCAdG9ok1ohBBWYUuQBkfTND2tG8QpaqCuzRaYWzds",
  "key15": "3EGqLQWTjae7wDsPwTkZb3ExsNbXfP1BJG4ajuXEZYuo5dzvHdqfSqDM2Chb79RJkKZgYwe93k8vJiB6VQDKSzSU",
  "key16": "2yTVYoQ3EjFiqzRtZNUHjg6gSuWC6euhDQKQYpHQ3ABW74WHrM9D3KSd5ofeMBRvN3kitJB5rZ73TJPkPVddBxqx",
  "key17": "2h9NHrTLD9NARPQx76mMxcANqhiYNKwRd598osh8HsadxaJJApTMvZNGrjSif936NnpoXKaS6r2JHHVCuf93cBix",
  "key18": "4aRpNuVNXVjV5wNz4CY8dfFVbpyvg5B5PVHfYZJ957pojq3ZLUJnbSPzzzEGNG7T2rYUjefNEQoBqH5wovyXkQEx",
  "key19": "4w4VBZevjdBcT4QNUc1SqM3zdNfnkw8S8uVs4Xv45JvBxLQn5z6MJ14hqmhJy8z7CRiqDaZJK2FwFjrZMxV1HsRM",
  "key20": "2KXt5FCyjHPhdMoCQDmStKwcxtV6F6VBgmUptJaueMZiH71NGGH2FF4EQUXtWebqT8Q7G2sYoHMjzJSp9JNuJW5M",
  "key21": "HDzTtZgvBV9gu5CjrN42XPjNoZQ1CcssZcp1nhow258HkkQeKPAapqBwchnWpaNQ8wzF4bXrHKmzroJmT2wPgxx",
  "key22": "3JVwB4zagNdaz6xiM8iQ4MXJScmSyFwYdy7ZkhucyQeZnnprH1aaPzPCSqPoRAMsfqb1zNbGAmnpPHap7R6aqseu",
  "key23": "4J9k3KrHwKxjpoDryvfTetG1yiWzAFfKsuKRF7mxgqCcoreQyc1XMq79XusJwWqU8knb6fc4RyjSU7MELrPihR3M",
  "key24": "5vnosJLjgp8a3MM97LUmxXCaGGvcC7Shb45anvSmiM2bs4efqFeGRcW86qLnndgUfNfwozGdj4cJfyrPUdPtyouB",
  "key25": "5esknXhYAhWoGBReWgJvK793EF5YdfLtzCDfaY2FMExawHdzyaDPomNJwE9FD2thoUeEJfhBKpicdffCWqiMcsnC",
  "key26": "5hXyLtddNSd9Zy8D4YXHq4L1vj3w7huRCwJZ6ZMAufjXNHTZcrpTE2jUnb8wg2mNvbrZ9WeLUzkrs817BA1b7PWb",
  "key27": "5kTMXDc7Dr3iVD7RNgiKykYoXDvgY8Bg7FkJ6H1AWgw3KpkMck9SG4DE7gp3S24uC4v1mC54FexDzQrph3rzMod9",
  "key28": "2tvBHTRvVKDDkpqYcgrUJqnVUvjcSekTnQ1FxoxqLJ36oRZDFAf78yaJ3JqzezW2KyAZjd89je3VfwrWXWXFS6if",
  "key29": "5usYCKYaLMB2EAD6PyWppbb1CXyN2bQB9AAbYeyV1fQiL8U1udqkFrA4XRWaf1PHFQcEi38xPEbmQpgSCbDcvvpU",
  "key30": "5Wrpt6UiTW2FJxq3fzHaJW6AYrv1mQRnxHbmuakq52z3QyS9TQWK4HJzQCDgsL8YvSmcH7CjPkMGQeAQzo7PKbRt",
  "key31": "3XqWpHUSVf7Zy7cUgdrVr2aipezCVZHeE9wKRyABuSVhXCCaSZMHnSQeQBC9RHST6p361KDKMeqCT2uvk8BHYC2B",
  "key32": "3EnG6x1DQM46d699FX6f2zkaHsZwqLsxwjZbBN369ZLBW9sMixya6wnp8Z97E7H7NXyjxncpe7w9RSpRPiKwU3Lz",
  "key33": "VDa7juYDGcAqG1n2F4hrTLpyvxDtCjZ11Zht8erkpsBaTYq9iRvFiJEXpiPfhesoB7953khxDbXgcUMBJcceAY4",
  "key34": "4ULrw4gctegJ4Q3sqPfX2onrZLnfv1k4BJ9HypQ9xSMoqTX5mrkRwU5ycugHB7McA1ZrtAUVnUBFrmYYE2qds8eW",
  "key35": "2L6q7Q7YPjXa8qxGMgxLYjL2zGEDzT69WMBH6v6E7AJzzXPECUJa3x3JU8bY3HPtDJgEjycaQcvsyJcZWiYPbjmn",
  "key36": "63EzejCXhwtd4s131TrEMxzAoAMDCzZLy75vE4zK6UgTfTMmNk9bfkAPktYt2Gk9xYNw4bYaGQi6zVa9hDqggJgC",
  "key37": "4ht6QWNFqy7cyWNQuj8oQaJqut3vHtSVDdEY51zWVsJTqiCbJKTWijA5kzTRf9aER6PX2DEhRcGswj1hEWbHa3cG",
  "key38": "3Vur8UGPDUy4fnGV4gEWC6abTYFdvYEeCimVCfPeWg36dKAcWVGPtyL8PoMF141botfansFkzj1QGTT3RoxTwfLF",
  "key39": "3SzABrURgFAFSE3rc2p6EU53zgLRUq8kL92gk1bLMffKKEaD7RbXfZ1acz13PSUfw9W6rLQ7dogpcPJz7RYitk5F",
  "key40": "4gXWABothLGdNdE8GUgtk2sk9HCan6rjeJ6PsBjuPow9RXYuQgUPij18mbhgHSMcZ1WS9iPsgFvjRuQ5YM5KHdsx",
  "key41": "2xkSy6YubR55w47SntVwk26U8XLB7EmfPQRpKVqyRiP3EFAjosrHHHp3MdohWVNtWBPxx7R1M7ekDuhfpnYpuWM6",
  "key42": "45TVDGoQgzbtSF4347hqcnvfxnZgKqVSVPwCEHBVqgyR6v32VUNQs213vz7x5FU1UBojaiAXGTruktsm6uBYeKMd",
  "key43": "5JN4UnfCjyKPAYxrxmaCfCyeNnEtETBL8ZwyVFXGnUQqHo12qTkZ8fWj2Rqg6XnirrdUiYqrpLKMzH413DLdxNHB",
  "key44": "5ZWko5SMcNUdugxkEHLg6vBX1FzbAWr8155Wb65CzEu6BSLNnFeVF6f8CWxvEQz9ye3kj2Yrtw53xh6a6vo761rQ",
  "key45": "5MXoQFJg5x5QYrhd94mEifEXTcp3HeMCcytcDN5FeECX4q7r99SRicFYwL4DsPRC22m2girPTXFMbR4rP9jkozo8",
  "key46": "5PvKYuzL6NC652wHjruS4YVHx9cvmWEAhQW1xhgAMEvqFsqwP6E43nE3Q1eSr3MqkfhRQE6bJPSuQkmYqJW9CqS3",
  "key47": "4zmH15DQiEQvPbytdRXHmovrZbcZ5xY1U61juchit27HosPHgBfj794K2GBQJUZ1urqKp7uTTfWKsC3RGm6NfUMz",
  "key48": "4h1r5XbfW2aRz4vzad17BgFDXpxKZyRAGzDsHVXHh1zgs8AqS1X2X6osmUcjT8M362QKwEJmhjVM4Ssb34aCMTHn",
  "key49": "5EYgvBT86kcXPxMgGG9CrGb8TpCZMjXysEJwYd1M21zSgMekf2f9JLfcuPQS8gsuQn4Mj1S8bC7uBRnwy2tMqEeP"
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
