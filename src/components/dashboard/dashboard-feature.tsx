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
    "2dahvT7saw7ibmkuARA46iYTuowchYEdV9s9XdZgzE3yMxYpg3ZaH7CVUwTaMcqcE5XpkVx9eYje2a9tQb1cnUmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pPghLoJ5yrhLEkGYvgX2bP4YtMcXXSDjK834a2WZTxJkGHfaMvb6wGzpkZwK7pCN5mFwskpCw6fEDuveasM8X3X",
  "key1": "YvzcqinTt4gTMkg2B46FLGs8vpM2fbrfJNjuq7LH86r54QUk2L8Wjw5SFFEcA6TX7dfFssLnJDp7m4HnUr143sU",
  "key2": "wuvHSgfS4oYimwJvuqFsM18BnA712GUarhCGoVghJc6kmhRuJwc2owcoMxSaTm75XQvRJcsaHwZiQAXiadTx9oM",
  "key3": "2nbUhWmwUDdasVfckfNXtGQFF56EBW8av2xnWsmN7G7PLhCdeLq5ynbBrrZ8ziXQwyS3pMwH1qEtBqADJXQi5vtf",
  "key4": "3BhZeEP9Xu49DxEhTd53p49qRx3iHEKjJ4yBVVksHbaxGMrVuVqHArChd8gL9HWzuAQHqTAsoSGTaKYBkv7xXjc1",
  "key5": "2KR7nzkLsGao68pizj3ScxNBKpvVXwQknnYes5dCRLaiDecv9qE1mCATMjkQCZv1VEDMDiAHX4yyQZfKyThJDra6",
  "key6": "3brheTrXvpEjPmYZyZUzyKDnopErrPdnMMHrsxrVzKWWwdtKFwXJ5f5omYtEd1sxThPvGHEwoZNnziv1MdKAKip5",
  "key7": "5YyCsgyChWSUHWcjV7YuD2hwdkSPNsccEDp4ZeboAGJ3zbFep2Ysk37iRznzGHKcnDfMbTQWT1KJMkaVobZFvQww",
  "key8": "4k9d1kAPqYeBuCUgW91PKZgmYfQbTsm6ah91yuBNCD1RXLx8PeqJBD5FejgJwYmWUKPbrTEpWiH4wN6TzySqe8AW",
  "key9": "ZPZh92RtWz2t5Zm7fpPrzzBmQQWz4bxS2ZmZSweG9aJYE9mE6ySRHdWUFxLW8bcyFnVPAZxSRABRGMmAYnKQSVi",
  "key10": "2rZ9R3tL6StSp2WWB6CsyEzrX9xTVwwVGmMuzxwg1w9QRQQxg7aSR8mBkZmXHCHCXaS1QnVCXbFcd9DYor1rj48h",
  "key11": "k3HyNcG1P3soB2KgP8YRZA5H2xy34KuLyyrQrtwBEwA35CPecBDzSi8ZffGcxEWygcx1Z65ekWENaZc69XkmLfz",
  "key12": "sPEgdeezu8ULMiqvpKLQr3Uf6H6zWhePuy4PgNpMTD7arSDm21D7GBg1CU45JW7vTdfPfr7aQZb8z9nWufbHKq2",
  "key13": "3HLwSsmrawbVxiYzQdAjS4iHz1yNySFBmntGnw421MPP7TWEGhwmnAWXw2tsEgVgSYQPmzg7BT36CZGtnEhzQZo5",
  "key14": "5bvJpasPeUMUWPF8fL5SdcRCV19waNH594ktT6mAD9qUaHuufhYwEBuyfrgj5bboScEEeQn8mQZMFKhEPNoQJ71V",
  "key15": "2zzD3HJ13e8kNcLQtu26q6jUbseHkiYw5PUbsSTzGZjEm58A5ym2u7BZFUTomTy3b7Bc4dWyqH8xaVz488r6BFti",
  "key16": "5LJjcSsWrbRxR3Fuw7Sey7EDPkmG2TEx2BWEXQ1k9jxzD63N1pKZkRbTqjkVd4Zs4jpJyfv3Mdq8hAx15mWwrog7",
  "key17": "5e9i5YnRVczNMoQrG3fXDSoFh2i7WU77Yy7wKaAmuEy7kdi8mYxC9TCPynQAi7onS8NF7hPFd5DTdc2ejbRdEYXA",
  "key18": "d66vBnuQB8Nyxgv3kHpuhhNd6dkzwff7HgBYBCupr7qxC7vgZFau2JirqVTiyVZhGtEgwnVcX2msZ2oDmKrxJZk",
  "key19": "3NtMQsuHTFgc45QDk3TFPaWBW46Ah48J18r2yk8AHxjSacuQD4eck3bsYezWLYG8ybyYo8KEv4eviKZdzXzh88zJ",
  "key20": "bFBdCpWEnwJMCV2RvkrjcXpSFSiZzZ1Y5K6KrhXhh5MQCBLhBRhDjVpm5LJxCsmaNWf7JubaQyDb4Uu26WafbSc",
  "key21": "Bm4nYAhUgdzV6dzoJvZ1f2TiH5CQvF2TP2XuX5v9k33sJuh7p1tXF9x9B6CtM3XMBHyvVua2kH6D2kpUk2HtaHF",
  "key22": "4QzjA9Le86HGsaCa8J97NRcgpYPdySobtst119SwM91qAWim7kgJrCDTrxdkXq4ZzmYZ3St72mK1zoHYAgUeZXVk",
  "key23": "3MmuzKrjc1rcAPigzYRAiM17Xzf56r44dwT9ZvUMhQAzK15i5uZqUfvPaDydvxLDzGysyb5oPB8V2w2TS7Zwmckv",
  "key24": "5NnwCYMcqnVGSSwwtdGbTD33Q5T6no97yAcmVRYUEt6xhZ3n8nXsZGty8akdzy7vxqfCN1sWn8E5AKDzYWGdgSBt",
  "key25": "5MBr1brQ8iFP8oab5GBMm285i1T743DvyL8fHaua7edyDNg11iPba9zM6eHNePtnGPSqUMQEjqr9hDhvyWgUQW4U",
  "key26": "Egw64UrAcx5Jy8zXBUHAuMYeLhUqq4Tm3tBWuipoBecpwcG4hXwJ2p97RJVVt3EXKgQFY16E47SHPfadaZTVU7d",
  "key27": "4Qpo7iFMtndokKCYqnhkuRcX2ZhPM94CnFifHwH8u1wckZHMJhCFtyLLc3dE1CQrPheo2BRVaN1yevyYRw5hYXjf",
  "key28": "4PNFiMEbK7pnsD3qvaKynEDvR7tqhZF1FWWwuGDoHpGsnLgVcPCZ93xB5VWQgMqvYZ4jhnmZJBPZg6rMRqdWjcF8",
  "key29": "44MtW6aPcxsGFq2oTJXC15JeJrLAFbvsSthHzjm1Yf9iZct65FBqt3BywcVgAfuBfobs1hy4PNwFp5DdaiEP7wgn",
  "key30": "W4XXrAnGWoLRaJiWmzAACTiXCSMBx1W3hBQRJrXBGm7dsTwy6erBj5UoztBbSYS6siCoh7uZ8GTBzkaqbopo5Ec",
  "key31": "5FdxCi2KtQQqPt5rjAsF1nJYrDT7P1Za6njZNbE86PknTeb2Hea46Y7NDWK2dzw8kWRmGdGuwrnkNJaecUUdbp27",
  "key32": "3Xc1sLCzB5nMS2EdbyXuL5pC39jww61QSueCKUeci4ES8XJv4c8XbB1zmJiGQRMrUV7SriXN6bEqf4Y2TJ8pmhJ6",
  "key33": "2WG9VpciRcK2PYRWeSiYwPNrHyN3vu1PPQUWKQHEXUj9hAgtYoqzsRv2JVj3uGPGHfq6BiYTKhtZ6FGFLZgKTbzc",
  "key34": "4ka8Con832z4WQoBv2Mz76Va8hVKQwXYo9JVPvHbJsFWSCZezgfem7Cj4hXD6Xhm9mJMRKN2bf7j7rxSxXpt2aaE",
  "key35": "5MBiv42uV2UTBzATvGJGMehDmTfrSGhdMEdDoX8bLevsTt9JRwXz7bFPPNDN4KVXQMZQkhPHsx7nE2Re3eybFeM3",
  "key36": "5t3UAL8sdGUuk1zPeWjDnutw7Ngf6JzJJHiGwecbiBD1y5m292zgtLpX553YysoJ8aAQ5TanQkXJAtHrk6hfsoYh",
  "key37": "3Ly5A67EW2XKQt5FVWucbpAP8vpgNAZcCbBd7aJdLSnS75dGkXQa1QJhpeUSw2aF8aHYLUfvodskJ6GzwfVqKSPJ",
  "key38": "3eoP7hJyUGT9qfi7wDne6z5S7dCPVff1JqPiGSA9GxqfiXWWdWTQ3R2U7aKHAMxSfpBMuJPwKuyWw1UEq12L2MgF",
  "key39": "3FDCyWxaYVv9GuYUytLiMdhrMSUa3gDZgYhC3o7Es43gYkp94t2KZtQ31bqvf1mLzhjMdVJ8MVtu2dQSv8y3xiRe",
  "key40": "27sx3ptyysqcm2pBa9wviAEiMCtD2AVfPao9W97SSfKsfu42yrin4wq2gvzQsBYDRcmqGWq1Y58bBF4Dnj4SLe4s"
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
