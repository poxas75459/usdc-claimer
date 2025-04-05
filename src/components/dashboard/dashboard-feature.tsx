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
    "2WyTa7eae9wREvnSUy5xHdiG9fSw8hW29mh7s371TAq1JSWBy1voaz9XR6eaxsRtP3Ypx2W53y9CUaJ5MvFPpQwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h26Fo581U6fYjFTaDmdjH3DcbnwjxoizYQQop6U5jz3BQSrptvv6PGJqoUD5TQYSo6XxajSBuXp2Y8cbsqyVUdb",
  "key1": "4aMM9NmfL865ztfq97C7S6igvWTQ8CkRARjCMQrQnrS1Xzobdbd9m768q8zQbtuqFAJb8nCMpq5whfsdUVeG7AYB",
  "key2": "2KPgBN8oHLi1TTM2D3cJknQeXD74X4Aag52ynzgoKxvNyzhTAk8fCcqcQ7UgphR1PqT4AaU6ZXjMfHrgQcvCxwmm",
  "key3": "49gksPBLrgHQEiMLieDReqYhPKaUMjs62KWmF1DWGLmyvH8NEvwmdz4LnMTcvhrcFj81AXBcxxjUrmMQZgVDC5hV",
  "key4": "3Aeqt7hVb36a2Zh67BeMdaHz2cgwHjkTvmuqwRgyipjayBpf5rfvwWHGfUM2ZW3qiMSaVzxsJHUFpHJLtV12zBn3",
  "key5": "2QXEA9wigyVs9tnrDQtY6ozTggLyAtSjD8co9RFMaXJobPSPYe5eQMdFkkLkCCc8afWBkENiinSsXfhECnQByVTS",
  "key6": "uTA4ffLayhNeTRTu1Y8Z1phVgnBaynojZEKQuAGqrhM539ER5JMESvE8ZRLujaodbsBFSX25ZPdx7Pk1XMLox2K",
  "key7": "3VgS3G3QwjUWywgvxRckMVDKQ8XnDPTLcWRo2cEgg7pg6uyobWPRi25qnsRkGDwUTucUZN3uvbq5UZ7LjFmmcqQR",
  "key8": "3DNQZX47tZiYsYU16qE296yBjEV9XYrCntUcbj95vMACQa3rB6eXAbeatpfsDoHPnSvHoQRAjTD98AVdzkggucGr",
  "key9": "5PY4v2A74j7HQ5Chmz1ad2wLfuArKmkVfScaX5HawEVwv6DGHg2vv8GrqdC95okEwD8gMCZBdimSJVZLsmkNMznH",
  "key10": "2rwwJWFxAWsxxBbce6kzQTNxgLY4RZPnWxC5CmwASX3qkt62uZjXEaRaee8TUCCav7cWfuycqGAxkfbtysHc8UUp",
  "key11": "pFSc4XgPQtJSNXCqzEDQCm3zV6RSCCg9Fd4mXXd6GQKJSqNJvJ1rPuPsj9xVcHRzPSdA6mUrahYHgcoeNQeCN94",
  "key12": "9DscpYXLYQb6kciwxvCtGrLPnTJWJn18BVWwYN8fo8yK5Dg82sdquQLFHQvLosHV4ZcGEKWLyHZp6v45ho22MvL",
  "key13": "4jbUgj9KLq2g7UZigPNvTNkxuJ7DF31jYALGTUVZb3Rn9Z3m7pd4JKQHbiv5xaWgyjrD5pHUBRHH89fG4iwT2Aev",
  "key14": "4t4xFA5dPCeLQndQJosu3fUBU1pVc1yRJefAJi3LaeQ1NUusTSyuKrAPVs4sLGnnhMf7GGCVz2VNk28d28a2PSsG",
  "key15": "5HG4JnjkSS6qNZNdxnM3YEtfmmBYnp3779GimSq78gxDKJQmv7cgT2LvVL2UeJEkwhKXfb2B5PA6oSzfSeHY9qih",
  "key16": "3YibSmmNPiWv6v6Gba7PZvFbFEynFfiYQytWkMxWSmXFHoDH9651FxZmQz77zMZ2XRefNvDyXkCPrQ1C7tkGuqRn",
  "key17": "2osmexqPC9egQRgXvuHS5CJVHkcY6uAQDFjduTKUQvDidGxcQ2bHNAEPFP7Ue3XiW1WVZ3CaorgF23UHnuxzJXkJ",
  "key18": "52i7gnwP9EGsB9RJXdvdEmUQpf8E7nzG7aLr1ic8RrmGTky8DApenq4aykchWxCQnwTLxv2MRa1e5TAmSxSVX9wU",
  "key19": "2RigTrcX3RtpVyKYj8uUuGmVWmEexdAWaNTrbSFFkHbjppBdvTQp6UcXv2HsixsbMQsruJWMrybvSbG7gbJqEf1x",
  "key20": "27XQFjcqCgp5SZ5biQfyVuybKfmttyfzfwmmfA7eCWn6r8EDGUfXKLoyBqy9evEN4fPkRAtceMCdwiDyCZFF7JAn",
  "key21": "4PvePWozQnRvcDw9KUs6ASJLNLfonQn6oc6eBfxrWN8rrZph9ddNHRSicpoV4uNSrE8E8qQKdcasg7QSauNrEqZR",
  "key22": "p9hecujEf2Mxv9NeV2toi8ifKdXFt5rDm2srWizVmQHk1FvtRs3ikiEZrFE59aZgDrvMXqDeS1VPvPB3Stz7x7Z",
  "key23": "drvPwhmPuMYFA3oYReztJGGiM9s74eWrpmz4brfK4ExPugftMQdudAVqhoEvBZxMUuKDDd74ErUkNk4vz7mbWwA",
  "key24": "34qtgKo3rJ756LnHcyiW3gNyLSu4y9zURRSYEfrMznUWSojY5vRqdJsWUE9SNQXHk8U4kWdEW82w7VRzk54KRLvs",
  "key25": "2QMbZqBgF4PcBwNdUBip3QhR76wsbxtA5GweBGaofZWDmN1zVtHu2md5YoTwfTyqU9Wo1pGV2E5FefKuKNiJa9L6",
  "key26": "3DodF7HLdhkZDdafmBncEt5oJGKHkQSNj6bUmX1XhGsNFDjyPZhfQKVmtiXvL1npBYMciqgZ4gmogUxgS2h3kUrN",
  "key27": "S2VL22jrHv8yxBUTVSCra2GgCJiQvzCGxEhqaQaZQgsqSLadiEQV3pk6HTqN7ETB9f8CkNdWWeaDcPNveGQp8no",
  "key28": "3dGS6N9XUgKufPF8mByRhhFJh4LUenuRjuCBnh3H6yudUp5RnFnJbMhgqondKHBbYWUufiiRcDdY4x6kmQ7iXmSm",
  "key29": "KYUySpptVgPtK2eHQmZK47QaoZX7E3Rwq5QHirpQbSykZUgzeiUs4vjNiYo5cq1SNjuknmwtiKpG5Amnv9MwDkW",
  "key30": "4pG5XKrHFVKYa8uRgPhDd5mYz46sMoFDMxRnyixX6w1CmWo7d7APhwiF3vEmJaDqfH5pEfQdYU7uZqefrRXf8UN5",
  "key31": "4ok9dhn5vTrxUDCfyGBvS6hEdJUvJQg9A74ynsaHGQZZH8KLedFutJJq5yFJ4zFHC2AwmwLfuWByebc4B5QkzjY1",
  "key32": "EGoRz8PrrEJUFjia3Q2rV53Rr2TgXPTHufWmGRm1qNf71EmrkJWH5evRccAPoWL6J3bJsTUvXmeBEwFuZCPvBPq",
  "key33": "2VUnX8UbZqrqQEXgoWJXAJ9UgAqdmfDrzduKYz98yYHqiodek2RJCsdw3fu7ZgaePRmzNznxMLz8hLmEwpsSemcY",
  "key34": "2Y85qECujGLwQbJ5w6s3ywRAH7TLSojqScvLMyg4VmbhQKUSGks3Ye7FYsRgjAJ17Xcyit6Q2SyXP4JbmNdb51Gx",
  "key35": "3kfGHUJeNDbZBQtqCSPSrFRGVnGnJHV77bf8jPG6gWGZvzccQWnYevcVRvP6aFcPeeGEYfi3UZ38XcpZ3Sxahmd8",
  "key36": "4YyZ5zeXg1XGSgAneTbysXZcvpxBxEENxCwTk8qNGpuhYxcS2YLxHA6isEA6qLf5ufHETvbjC7HNSAjLeJvUyvfp",
  "key37": "4c8AonJM4yTsST3j3QHc9a7nopS6RSdWYCHtcX7fVeW4RjBGXhacQoMVc1jAyJNDrNqMZrKMsqxiEVWnMVTbZe3P",
  "key38": "5sKLdu13bE55TULLayEgnShAFuCsep2TmTArsBvu9CqpVLS6oLvsJKTVrRpVZYiMJ7SBkH1JRherSjSKuesXcLBX",
  "key39": "3DN7j92yhn4nJrcE5qSCEXRiWbzSJsjSYVXYKSqDBKJ3adb3Nf1qYfvewyU63afpTaApr7akbHBdbPajgMfDjMyo",
  "key40": "3MJM3yETT9uWoBQbiQQSZxV6Fzsk7d45CaLXBv42Lnj3LhdgrX7E4vVtS5A15VgrSbRx3P4ML6hezqKvqBLTALG6",
  "key41": "3EyRKko82dYHnA1eJRk4nvLvs726Meddc7Z72nWk76DzM5GfHGssn55ZxQrYeE1k2jvEFGiFBKhiAxjTz8BcmkPD",
  "key42": "4K8EHGGM5JzeEaXjqSnSfgZPVyZHjXr9RETHCUEzhYrUz2Jqw7jy7jGStGqrCpyNcUZazcAFqkZvBKAthszxfWth",
  "key43": "2Sim1jZifXB7BvnrMFgE1pk19iAf8hQEbKwbLqSDdxjy6ykEGAw4gEdSoMc47YAyyGjahWDqBVry5dRk7HWBeqj7"
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
