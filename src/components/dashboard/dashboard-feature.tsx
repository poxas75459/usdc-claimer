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
    "61PSupYBD4goyVQkW3TTE445W6nPg1F3hmYUXSW2Q9jx5qiQXrR1PWpny2yYejHk9nbarX9KqcfMFWW8qHpKa3bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGHpmYVrQ54KKFEXYi5ek88abVQ7Jtyhk2pBUdkRYiMC6KrQZjg72tkSAxxup8eh5cBCmxE6ePmsjaT9oizz38x",
  "key1": "3M5j6FZ8EkLb4YBorJkSw9GhnBo2iPf2HgDU2rWnrN6tRSQ3XdvrWF4VqFZMaUAvvJqBzCjHcWkZkSaedX8tbdcy",
  "key2": "nygtJK1LMx7CLPtSXE3ChfNGcDJF3WBZ18UnxfKPSyCvq32uZd155EvsALymBcWnuHNCGrJhaQfYH1yaSJ7Ft5A",
  "key3": "ddGpGWCqdqKoPZGmMEzanPRsBgPfADgkg3S7UiYyADURctgypNAQR52sRWVmajxX5pHDn8f1RXMzT5qpYveARa1",
  "key4": "4BkXLpW9NtFqrFkoKKtZuJMrSChhveNUhENUycNk8eADUiD6AfbResNe9zUKvB1PegMRKSY5jztBHWURnH24TLpH",
  "key5": "4LeH3AatvUQ5cfTXTQ4Vc1FjjHBGVXFK81UZWBmRnUR36MvotE1rgPsdNU3FWHKq6xG8QvWjxZNcoRaW2y3Lq3HM",
  "key6": "4or1UgyodEjBaTkVWh7Bgm8TofeNjJBJitrxPe8gJXvZ5XcE3Hu3ziKfHZaSETD3sCbWHPQ2qCFGw3Kk3nZcGwzD",
  "key7": "37aR7BT2MVtpmdSGWnaAyLMMVdCJRLuE4veZWxz1fAYrix53kADdGdhci7SBgXa4cRWMzBzPyiVG2GhAs9ifYnGE",
  "key8": "4mby8yCsuVyYXVTunp5eXcthvLgiQubaQKH5MZHpLNuYT9vnfpHk2YRmpuXM4MxcTkLKFk3cM9bnBbrmqaVsCAnY",
  "key9": "2ZG1fx2RiznLVJ9yf9yv3QBTMauPCxcEM7Tq6g3nW8brCrvZD7JG31evAmpRPL4f1FCyi1YiBjxax6eqP7c8Rjos",
  "key10": "Jy9L7ZhDQdsuveasVyrn6pKL3NDcDCUjFTAbx65NQzvKrWXHKgvb5APUmVWXP1n3ZKxfcEmrNGNdoTMPvAuug7E",
  "key11": "4G6AdWostAwWiAnuwamBj3ksQWYdzhFYudFthubaLrpjhPoN4NYm7uXthKuFDUhtNrBxAWYijSLc4h4Rrdj8UQRW",
  "key12": "2HX3TuB8NLpWQvY55d6A9ZZNtPmM7xRLBWRKPqjLwz4t9U43Ea5Ymp5Mn9G7qHF1adtbCMJsi1m66pmda8bDZ3QW",
  "key13": "3e21ydhYZu6byqNy5RJtv35xpRBXtZao6qwdb7KCGdGd4NXxknZby2yQCwJfyAdqDCQRDKabxAX2A3bMB4ERwcQy",
  "key14": "NbfF3CshbUteTV6GyakYPCAjkaDxe9QhHghn2JJjeSp2k3qwCXoU6xA46pCGaYc5SNKKgnsmSUKvtqYAFZ7V7y3",
  "key15": "4PcRwG5sUgHYdhEcLCbKvP4ebCe6M5dfWd9fLwbbDDAhjVXEZrtfWzQhsXE9ae9YREmCz1Ug9JD919YK9VyaKQE7",
  "key16": "25jp7PqWYrjEGoWasWNEiJrjCRF8Q2XaTPjAXy3TU4q7Ud677y2XsneesoGo2eRoK6EDNrCeYQTEKBSNC8LbgZmx",
  "key17": "bk4CoCsUm7Wbet8WmAx3QrYthCnk5E8n8FtuSLcBY7LD1MiFirYc7RyMoDhffkfaKH7pHFww9vRQHbDHUGMudmx",
  "key18": "2c9W54wsUaDZzEspiJsN5fywdMkXAsAJ6uZBi2asFutJHEPXs8qXfgTEciReCduebhPLpZLo3DRMYaBzaSh5CG7A",
  "key19": "5Laq9kqeu5hUr9MF1DhPZFu9bUVfZpzSb5ab68iqNDFhXHPC6hv7DELi2pzApHwNo3eLr9to5uSEXr2V1DVB3neP",
  "key20": "35vUqYT7JFhQCkuJw6Kg6ctjg87L9Et8GoZCT9aWi8RkB7DbZG4bL7oQ1SrCRJp3U483SXnujPMb3a18YhuBBqPR",
  "key21": "xxMsD8PSFHu4mRCGZbmXRTW8WEoZcoSpqNvrtHhx7jiDwxLusWUw21hvxdzv56sYEAE9qwYA99B7KGR84i5d5jd",
  "key22": "4TtbXi1aJrx4pE2FkDno58Fy7L47iSLPQZLTTVAk9itpLJtjSjwRgNs2ZyJhm1LQAH9BVHhMysZ9WbAPadtGHoqG",
  "key23": "3cEMh2KbMseK8CdCgmAarXBJKfEQGVDHG3JiyCXFGw3bfvwQ4r6FGqZ3nC9RY6hM4JMZ7BAKyDLathHVc892QLss",
  "key24": "2prDfnGdS2CAykaFb9Xx8B5JEPy1fSSGAmh3pX7sGMYyyhemMFpnsBofhHrnDY5Ansh3QzWGo974wpebwyFY59gE",
  "key25": "2gtSzKX3Mhp2fKLbG1z33NDJ6D2GpxApmt4hQDhrcCkJQZa7aBES7NvX3VD9oH4fGy6j2EjMAShMksYLgAS9dW73",
  "key26": "2CRRrzcRrKEd6UbKe4ymqPxJrc45HmqeaQ2GAdLRyn77Wz6mdTrch6fT3bRu7ZTpJBRShwGBLbRyYqiZtvUc8hog",
  "key27": "3qQ1mer1QVfhyWPXpSLobL1fin3i4ucbcsVkGeFfFRP4zpzAhhkh9vHnUNyd5bvNjYuAhCFunAkdQtCEm5trJJRg",
  "key28": "wGw82WgN7zQ9hXKw2X1skT9guodH63pLKU2CEQnLHtbzSRrAjUEYurgNnXZyCab1nUPHtEb524bydSb56afwrfX",
  "key29": "52oerXJT385rEVZxnZmav9QxPswegkinT5ZWw5sRsV21WNaG8f4KP7RWoacXV3WQoJhDowVNe1naiMqKhmrcjnwN",
  "key30": "2N3Lf6mUBi9mVy5gdN4x8dyQUUWBcv6V6JCP8eYYH6QzQWWsNNQBa4QpG6N6k9bWD6Sb1FruoygEF5zRju2hhtNP",
  "key31": "4SUB21nCYoMJTBXtr7YJpa2PLwMt4cqiwbksYDAyHYa8RtYtbqPg69qBNcVmtiaqdvHz4t8otzFUHfhEwNejycJg",
  "key32": "491wSEme4TtrYzWAST6W336puFhu4DAKz9DowXFFYM8WKwoQS4heYUvBr1wHoBbCjkYYMxJmH5dPWaTeQJXFeKJR",
  "key33": "YPa941se8RX5Sw1iE9jg8FdWhyvyqFUFTKBgWRNDhjfb4mnuRSqkuGvMEujefCXPkdkuQYuDTkxm4ZaUS5o3HX9",
  "key34": "3s1MJtGMW29SRdGRXmqZfbLfFLHEpiaMovgWiFYgw5TRgPDLW8THVcmBrrmVxyaXBgjM4YtPTMxf2qEH18Bq5heD",
  "key35": "vA7Ljq4JE1komNVLgffyPTZXpv2e98aza2rJVPpgfTXJY8MBxw79pgquKi2E5o44Nb1Gx8KbYoJvNtguarogmLh",
  "key36": "4yJekfMLiWQ3eNaQYaNCELRRsNDcXNvCZBPGc23E7iRyPvYvYdrYEY8Skh5XFJHPCQ1MXc7iSfBg5R8Sy6w5wnEU",
  "key37": "DqaNRwwQYhNjK3DNADM74CZ5MV4B4HbWZ2vXnyuhGSSC7YEWnBikTSgH3XhgLnivmWJYdUBigXCU6Jm1mXNCsy6",
  "key38": "2W7yGKxm35ACV5CHXwpDjz75moJFUkgqmmTG8YyLWqeDTKMnRLdv1LSxJomrd8HRxecqUESbSr6NAWhXqi1rjzjv",
  "key39": "2yYtnBkFpRhaRt5heYvNUqChSKmzbq1ozPLUSch7tijbRVDcmbAGQkNZDCc8gxvSbEwhddZUSC429sWtLDpgDV4B",
  "key40": "2gRHbN58ppQyLZ7v4WP9RuPUrYKKb29nHibkV5thaSpSD5zdyvtz69Qxq1Ys3Hm6LiBmNiBc8DheNKxzxN6LU4GA",
  "key41": "uC9nwE2SV88evZ6vu3Gr7D85mRSfPndhWbvXA8tynWThrfCgPzDju6YvJtWUvaLnuHbgVtyPVTh3qCUvMXPAWHs",
  "key42": "54dK1rE3Y1Ugmd5ZYKrVN4SR2kCWaT1HM2JBJW93WUTZ1gdjxxCUyTGveeGocdd8LUqyBo3BsJ6jgdB4damwmEUq"
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
