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
    "4vbDmTCDwRz3BnfGP6ziJRaqyKJQ4dRfYkLMu2vYG6Di5GwSo8gfTwxuSa5KhC1hcRuF9geA9bD9RsjmPbpcZ9cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JbJ9sXDvwXBQX7VKT6DTvxcSxcxHBCfgJ3tMDYbQsexqj6YjNBQHi1yYKxXqvDfZfsPoignomfCRFAqfGkXZVcF",
  "key1": "4ZwaDXHwGgiczkjvHRcK7zBGrihty1XZVxpvHvNaKTVccPJdbhKmk2KLPb1gNPZnSnREGoYKDFsoo915RD5JTLCD",
  "key2": "2iuh9QoNWTrstrVMFJXbX67kXbg7e2RrUGd4ik639uGSbsM7LYgrJTfazX6K8FZzqbthsdrBGVpTMzk6gwmEtVQ",
  "key3": "4EMtpQ6Q9Lejh56sus9fvn5n33Bqfqt1jCiyVMRCaNrGgTqRZrpSys46d3fm8df4GnD5i13mhC3EjzSgbSSHMYXj",
  "key4": "nSmCWvFsUAv9Ztkfp6FgAEfx6PqW3yohg9j1YiP99rKDWNLfhDRPdv4zfVadXdZbMWw787SFZi8hs74HPT1cBQ9",
  "key5": "5Fy8eM4puAy7xQMLAWdMqEex4vokxKinvVzouQ4eYe41HV9WZHL3GATAx1w16HWkKBeGjzP8xdDg9jMq7MwU6nX6",
  "key6": "4dtsnQwVJEyG2gt9QVTHX4V261yqZWPRX1emw2N9a6G5wYP6Pv2ps2gZ7VZSdj1cKw7SB9W4KS7ojQCxVe4BVaok",
  "key7": "f6bkzk7DB8sCY6H3A5rJMEBwa7NVkVyhb8LcDujvhLycQxZ4uw7vG7QragT1pbNwUEVuBc4HZQLkDTPo8XrawjJ",
  "key8": "32RRxfDJTqwxH77KMiyjQQPugDT3seK45BfpQAvpdShFSN2Dg76fiJjfpv4nbAgDYznKwEJV8D9hTrqpEZWcttCC",
  "key9": "2GTNhCfhucgYiQxDWh6Gi5uZtLTstU5ycys3gHhquUG5Zvp7CZ8JDR2zCZiYbbFrXiJpbK8HzpDZnvFk8VFcGcPf",
  "key10": "sZvTT8RAqH1RdJnfHL1o2sVXg8y26XJt3LaUDbbdu2fjKKNGCmYUWM6b1T9ftqPE53bVD2FXCxLpxeorLAg3Uhe",
  "key11": "3qT6zjTxyq1Sm5tdiqVWQXJKv7ykv7p7mmByzJBHwnw7pMjyXSKiAWbMj9dFdh2JVSvEHpFSfD8EEnMAE84MFh8c",
  "key12": "2AEhabQ3frNFRJu14oRfmmfwMymbT5EKV5Xu9KY6CigipRVdSqoq8t3iFKyu4DpRrZWZnMQFM2Btoh9tUCrEYzYs",
  "key13": "79bUhu5B6fut9pVVqt3Fq2S7FSsGfda9tkGBNR71ZYJ6sRzn3co2WdHEkReemQJSXrYKhct3omAfNC8c1EJVfMV",
  "key14": "3jTXxACSoCphp4EXaDFFZKzYgVQNgVSpP4vnyaehKzuiTATMiz8PZU7NnTpG9UjFjh5kkGh2Ye3uwFFQBM7NAZ87",
  "key15": "4kh4pFdq5zSeNBy9TaUYHWz6nW2iF3PLNrMUqt7sCrjX9t1DCMbU3zvjkM8kGoZh7DiQwMa8NdVS12wJi1G2kmk2",
  "key16": "4kboEAsyjQtbB839wFzPk54WsGiq73yU6dHoDoJnkWUpyMWJ1UWnCz3ALFh6pH5KfPJxpFbXE4XX8ftQ9HvSVYXS",
  "key17": "5nxFhFU6XDSWh1XpVFTizdcBu9xf9b7SimDNBptwztcyPUyJd1Q7AQhqNjTvMVBA6erbjRrDA1MBWzgzWNb6nZf4",
  "key18": "4KjWGb3vFBLHBSecLgxaoWPgb68RjkYSpEoKMgq5H8oJ8ki2rSDUyWWVLMj1yLckM3He5jaFmcFr8bfm5WtG3RZA",
  "key19": "4topQJKeGiK7UNFs6hHiaKtnEa8YaXyf27xhfWHYcrNBcgd5VWW5BWym1GNNi6ZVYE7aHVPdtwzEW5orxMfnMbYo",
  "key20": "52G51VYWnaFSoyR6pA4jRquEEHf6EohydKgW86CNyT2MHaKJwc2YnH3WU7zfbVskyGHJG2gyDxvEVtJbPVTtDqyR",
  "key21": "4Kd1QuEhiRZ1HTEwrauAQZ56YF8FnbgYkdjSpjNaCMTfAUa7evqvqTFGPkCEG3hUaL4pvAagq3BpkzDC2EHXuwyK",
  "key22": "5SHWwjvsHcVytCjE7cQ5kxniKVifPDLxKzggwHp1SuUSSqgGvSzSey4ffmWPHQ41RZxL1qnSk9yMFdNyiABjU7EK",
  "key23": "5cDfHbUiqDgazdikk21gxTTprJkSzM1WTxJppJwpaPH3zRP4w2boN8TBiyME77hvHPK8Vje3TGyp4RCFwJm2WG8t",
  "key24": "4yZZTDqdnTSefCkaGAZBsootHjEpNbNaAaKmVSetMsub1PkTLvCjGFEXWe3BqXPH8Hpb1sqLDEJHGMyJV2F4GiRH",
  "key25": "JKCRvDQTxR3RZYfs7Wv2xvo2vRafgpe7dhMGj1piPASJnY2soiNjpoQEYtWVYGV4DzKXBgKSZ7PZ9kyPaidJ5TD",
  "key26": "5xiU7NHHYLsuuCRqeqA8NG9MXsc59sRnvGGTayQUPQhQ9G4wwqjr4qAx83HKJ1WgQUBvxkYSck6W2qERPm9fozvv",
  "key27": "4VatGaUSayqChPFqHxHvCZBH2kyde1Qgv8D4akPTirNyrmx98ypbTaXki7zA9mnGVSDTqWWj4Uc7U7JYpHAFbHuH",
  "key28": "4rxwbVy2rxeF84mpsfsUDQNGrdiVg4bC191GeY2MoPyqt9rnYfQNb9KwA25Pnim7r5cm5749utPkz1SHtYoK25Ph",
  "key29": "46PHh9ephiA8R9mirgc53Wh79w8a5BWSeBwWHxmqDQStHZkS52czhrGxZiZkkawjGnR4jUpc2Cex2EWx2BLen4gn",
  "key30": "2w6RoCKw8WvK5gMcuwaJhtJ5G5ykaoNCFarT7e8VznAUYUkDRi3kVCpiDFssTS3M3MGseiiWeTdfpNQSt99wvWyM",
  "key31": "2kEmLaG5ZTQRnB5Pajf8Z6btx63RK9bownxG29tCSzXh9jpvq1ffDf4yZX5bAupAjyFLdfzJzLpYwFR1F9KvmxNk",
  "key32": "48VH9ZSneg2nKRvaXj4C6djC9g56TxYvUmPGeoTpvYCeCSNqnLYDVdhe8mB4Ft5BB6nfjSrtK9JAcK6rgWX2MNX7",
  "key33": "F3dZAxyNqoCgedsW9rmCNZQpFNMHZC3n7nv5tR1QAPrUhqsNXNYrbmZksYD2rdyT3hnf1Kp1fwgxz9SrEWernQ8",
  "key34": "52P5xnwthA5fuxxL1LDndndDywPiMgvBhSxG2FXoLxtk53tcCGT64vxuqrhD441mByJVQKxcxX1SZVzn2Rh4TVZN",
  "key35": "3Lt3ubQ2QFJU9uAUcTNbCVksetYhLYFLKa9991nid2CTcZu9p9BV1GqR6QWMD5MfzEuy2587poJ5ebE2k74ZHjMK",
  "key36": "T6UYDKPbi2gtQ29kirVPym19LRY7F8JfJk45SR31zj6UJffFSuwpUNHpzeRc5mERz39QKsQvC8c4D6bxDFThiy2",
  "key37": "4pRnvVqmA2GNKLxtcTWjTVE5c8jLD868g766Bd4gCJYYULLyYLjDSoMn7YmzpBs4msjfLzKucW8DUGXs2W2aLrZ4",
  "key38": "64S7hFMTupVrnvShidTYWVNkYMuXeWEBXEbkAFqG8r5fmMwENwQpbPdUt8dWcmsqr2cGByTo9Qa5NzUix223xd5p",
  "key39": "wpuxJxDYBqM5yCpF1FJVLAG8kEX9qdAkbRFA9UBifc5pFLyMdSYgDJ7nHWPDtyihC6moi1NqGNCiwArkXrvBt5E",
  "key40": "4dhGkXiArgXTQ32D8QTu1PHm9EUsv8bzbwPK4BTCf28sRyg5fcpCT1LZcBHgWtt7sWfZBodAdM94f63Sj9JcwJ2b",
  "key41": "81h43DUBVeV7XAsAHGrXCPmus6vcnuRyogofSST9hcfub7g6QXoCfAjkYaRnixFdsY39hMvDkEimsKmiJiUjQ39"
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
