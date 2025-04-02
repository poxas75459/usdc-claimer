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
    "51FP1Kjv694NHivHfT4G4tkWVWJGJZJ4iQVBSGzkAg5UUfqUPCGTDQ5FGBbWGMZQ6M5MKNDnVFsWSFnVGfiurrSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FE2HgHcoa9LHJFUNekDXkW5n2bcSdJUNtRCEnPSGyME7JgY3kmM1GdxLq63N5rsmfXRt1C9sX6LEqwbJQeccZ4U",
  "key1": "XUs8yAB8t9CcxLtSjG5Rxh7YbCfGi5QrWUSxQDv8swScNSv7kUFk3FmB8uug2emdJayZhTXhYQHBwAsHN4Bc49c",
  "key2": "5sV9sYvwo9Bi4dDri7GWgR4amrzXzdYAUHDi1i6wN49W4exaZqDjdR6S9FXHb9fLBuMB9KDW8GDA2xWbn4anTS39",
  "key3": "qk4UEFGXVLwGDyNH3T3yWJ2PAqWrmTaUVFQDK3ezuLfFmkXnTFU4nxjwBjveCvVCCyUD7dST7wNc46QBxn9Ur2g",
  "key4": "5fWNHHJ7xrG7bJEjhB23psFS7bEi4BL88eHgf9GPjcLv8HwbDS21dt24LKozkdBDg9uQA3UxsToqL3VHD9vAWZDv",
  "key5": "5nScnYWUhFZTWyjos1EGyEfnUT4jYK86FK44KHzZkrLs8oVgzegjyGdWAzPWKUHDZ9n5aemftq5yn5ZmwJVLSURs",
  "key6": "5jNN12DEspCX88qDT3AWanaMR35CQLABT3mxYieSYzJUzP95g9FnsQ1XX2cRmobgqR4inZj3N2tW1AsfqG95s53b",
  "key7": "5UnEjK4xQ7fyuXgAehAJigEwgHv7GDV5DvwvVGDwB1TEZtLsfSdL7i6jzAdpGTVh5YsFUhgsSXiGi593ypJUtmxM",
  "key8": "34LfE75YASmVvLkJpefL7sRyo1wXF1vZGMrunub1U6opuXxvZupk3qDK6gjAvQUfu8JDDdcWt93tEcAhnmHnFdPu",
  "key9": "2eVxypQcStFucNE2tKkdefNxoiTf1qwJDeWy33YjvS2wZ3u4y6eLL45qbEmX5iyv8zD2WLnkFLKRGZhRgyzr7vrf",
  "key10": "3gPeN2hG24UUKnV2N8oVGBj6noJD7pT7Bk5gCAnZZkq6tLx4xzxFaZwHJUCkTo92U2u3FiKyxrkx1YcEHoSBUqLG",
  "key11": "Ljdi9S34RBHgBnSfMUEtJfgi9hWpcGoRtPw398eP9eNhvPwf5zLAUi4dJ8pmWAwrExg5GWBsQfh5Eck9RJFPSpH",
  "key12": "4Mxi3REYA3fM6kAaZ25G2v7yUm8EESXMsMaWVoCYTsUti6nSfgbVsdeEgVtBix22bpca84g9j7tfVGVRxXtxC2yA",
  "key13": "WuG9FcvTXky1b47sTwX9RPJJKfC95ic4zTYRXx23KHfYnnQ21RQHmDXMtHbJMuFXrWoBjU2wJszDeiPdoPjL2pu",
  "key14": "PDsj3xFnyTDXgQtDXgGDCnPhcR1MLV16SH73dD1oXcshf374cJncqu4G5MjFCibA5ENsXhckr1StvwbmZsJdX1g",
  "key15": "5h9QesNJbiDmYUWhdpufCFFkcF6xZ5AzQYsZfZjJWnQ8Kq76TTsQSrWiGMLeVU7E7fKh4BiFr8VNF7pZFV7GmMUf",
  "key16": "3gkSHRzbyFNKgqWc4mwinpjsJ2QpFBRQYYz4ETzbcw2kLNscRPNAunZrZ9WJtYLwRs9FnsqSKHJi8xX2CZjmrkCm",
  "key17": "674BtLBL4UJ5dLXR2yxNsdqn4KVd5CJAbFGCGhwrwRNG8btptaJpT1euqwnv2E1tC8qc71qLUz36AZnFUipPZxJ",
  "key18": "2ybkHLFUZxMxYdwYc6ygRrN1Xv7PXSWZaBnoWRqGxAc53sZJLXCXvzjk4VbjcF1gPsg2Khdeku67UGH4PUeY5Y3A",
  "key19": "2Q9zvaggsA4ABUcJJ93A8cbDKh738Y3uAK9bcgMFTAKZKcqA8KrCkPbhsz19NZtAz2VDzURWke1Sp1o9Zu2p3QHr",
  "key20": "4x3kXDkru7vwSNct7oQocL9Wr5t5HYFCi7EbLPcPawSZETvQHVNe85z6A9ac8R8LRLi3JRWZ5RD3hhxrsXydybbk",
  "key21": "43MUS3qQXyFNEZ1LzpLbK7dJt6cQYagzU5UAHEU8XKkTKeBUniLBdj48j6NPeZsQJFXXe3TSg7jdVgnEHeFArZaU",
  "key22": "2fdecYxM5jXovdVtRTiPZHWiVSZE5dxzCQhkcXz5vFreswb7v3B2MBodXkcfZJrchnZHcJj9U1sPWoa7YAovDfe7",
  "key23": "5Ruob2cciQTviEH3v4xo3aLjMwtnuubW1y8xTw51bUsadVSp7TVWopxSnQkNrunEajj8dSkpfD7gMmtzvKdgA9om",
  "key24": "uprHbzj6idyp5QAWsQrgemP3gK4eZHbTeRD1tqNgaQTNeieAm74zkSH4vxT55E952111eR4kUPJxZjkAbEvkuB9",
  "key25": "4L42H9P67aQ3aHJNzXjfWexwXBKMQoasjuzwGzmru4LVW4p6YdnHiDufhgbzCgzSr5zU4cGWPBPpCbNrFiGzVMVC",
  "key26": "5tMTwsFbZpyqqQcoUdBcCzA3958gQBW4Z73dyr94p8GKbJVBjYTt69Dc8NTvha81tHBbLPQzD8CbEzqANr46iF3q",
  "key27": "3KuXzovkBwhFgRkynihbJP5JoibAqWm4m1UeM3FsmFAC98Bu4wtxntDWbeprLfYUGXE9To42rn4yWjSZ3KdMcu6u",
  "key28": "5cZFm57eRXhEW3LSWwpbcMxM1FNK8dBoZNvjyRpG94o3WwDkvvJcwpYRmbrUHBcMqYzKDH85kkDRaakkTP1tqnSj",
  "key29": "9Ldz8PZu5bEZYySnjyCuAox5C4PUzKCvv8sF95QX5hHdZA3vCqir5JDjGM43oJKDEPCfL5ghPvhckQ7J36QhAu3",
  "key30": "5NnjDTKMp2Hg7iMAEsj2sM3BqtgP8b4aW25HJbLKxFxguvuc47N1DVAyZtFVvHuqyhJGpzdcD8ZsvQQ6Kuets7PV",
  "key31": "35trMxtoFSmrVGvGZzPwwU8ksdkgMEbytKHipeaZrAZh4uj4BFonj44zBx2H1KtTip68pR33QjUxnXcivak7Sy2Q",
  "key32": "byGHKsWT37ggbJzTKetssJbJ4eMkK8fH1C7Mi8qLedcan4hx2enXXpMikvCRw6iZPrZSJixRYXuCkBwx5Hoa3oW",
  "key33": "3riiATULLfXULgTofezJHHLbbEbo9pByqKP1WFHqqhXihj4KsP4LZvtfXKtUPpmj2dX3TvmXNixcfagjRwMvHiuk",
  "key34": "5f62A7r9MtxPDsDtSUMetr8YC5GCy9XCiSCSRMQabCCfxWtKJKkz5MJhJxQJ3Yy99kM45w3MuQeqbJLoHKBaB3QP",
  "key35": "3LxJssMNYtXC98Hd1mahfRKRxMhC6ZNHy2GRZYL3szJGMUdAdiEWPeW5Gr99bm2FGUYGGzer4dKHaG9z3MHWKBMU",
  "key36": "3n8vBcGCPHVTQ3aDBf9XU4B68235vyjYfCvVkxyhnnQcpe6xM3twc7K75HxvJQCTujvKhmr85Q4Yd4EbzjQ1de16",
  "key37": "2Jsk4Qc6prw6HuvSpvnpMRPumzKaGurQ85BZ1wWxHbCuW2aMN8bWxekmXAx6ianHnwKNcqYWk93ZHch6LnPZGN36",
  "key38": "547bFpc5D7sDFpM5E6AU9BTtAG6BfgtnAKJfWsFfJddGpkdtWsXPHAMGknwcazC29EExRDJLetkCpKaSS1znTLGP",
  "key39": "5xYLnTBqDjapXawdutcJ27vM8oUHoW5iSduPVTcuff24eFyvHQ5U1pqPyWHW5sezpxwxx8tGuEagZPS8cAwoY84L",
  "key40": "8jSmGATBHCYYaNKscSwD9Hf6xEqGq3KMEvHvptmMy4v3jrCM4CAf8UoLGf8bmj8zr7ea9e3qxCGZnY9graY8wgZ"
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
