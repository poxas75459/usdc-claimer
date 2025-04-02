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
    "2oixxGv7i2NJAVG29LLTpBhDQFSrKPzE2ewb8yDR3hByBKVhVkFgu7gMtqAqtZUtqNzQU91Sh9pzTFjTQU32LU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTnizsZsPSKdY7ebAmdYqXJzY93bXEB76DPChtowLpQWeFd1Pd2KiEL5Gn6hk685vYmTYn7PDHqvPTCkdroEpFx",
  "key1": "2CEuwrDJvZRUicg867RBGnpvafuFdVrc5HL9P9TSEgiGpr4A4nVHgF3mzobfgcB985k8SbihE76SYhCVetQKsLpU",
  "key2": "51ArNq8vHKGU7Ctqsn2AdwLkBUdyxyFhFtjTe5G5ykqZyVovN61phqQ3QuCjqWLBZj2GUu82NrmcFH7rGkLA72gs",
  "key3": "643kHjaEH99ojKAyMKZChtxBY6atVDFRuYHdzpxBU8Z1Ej7sDi3rqB2yKxLRtyKfK5tkcKG4FWBpwC6PmshhGDfq",
  "key4": "529WLoxonWrbFix3jaoD57wderkLLiBKfHNEMRkwPGGFd48Z2373aWduwMkang3exZZsPTjiT6QrhAeUBuPFsHow",
  "key5": "2YuA1gqizA9gW16zrQvv8WrnchkmCgxN2eRP9cX7ne5gsdvWNVBtqotcsJYpzvSZkQT4vxvBEwVPmBuJg3LWYNNi",
  "key6": "4VNk8ktrtV5Xcey6zLR4uT3B2ESb48DWT6g8wXyDsFh9pNvSXsHEHp1wAVBQChQWs1tQEg9ykgrbSNqYFVh8LTSd",
  "key7": "4WSasHrYBQ5YoEYgG6GV7AxcfcW7rosvNPQNW7DJrmvRtnA4rNVv8m6tP1EvJdNaUPScHx7Si1KDzjmnUPaE6vf8",
  "key8": "3vQ5u3YYnYGJVt1AvGZUM2MwcxWR9vnRyPYGyEiDqgicec2eA8FCXQ5oCz4c6Nz9Wta251DBxrJfR9TZj6mHXh32",
  "key9": "46FqYCAtEwskw2djEjNvEyQGA1tzRG3FcHGrvd6RhVzDG74PE28xxHVrp7o91em2hQYoaHeVGg5pGfi2xJ2rQ7EM",
  "key10": "3oFk9daywkjWLBevt8US8RteV8n4noacr6pBymgQGtHzBABgbRjhpS9Dd7uMke6zYbF1Ee53yhpkLDBDF3BF9rDt",
  "key11": "7jFcDJcSHTsWsYsefsH4Fit9tvHBk112BzuHRTUdcXmFd9FFSRVtz8LU7Tw4Ze5oEgGJV1Akd3J7tS2dSGzj64N",
  "key12": "5zd83vJorhm8fx4j9W7RpVF9QkdJiVsjJfA28wSRUTAfrc8rKvzt6ypNRvtuXk97ozid9ZQNhhXwB8AAHYAU3nGd",
  "key13": "3Uj9mXJ5ZSM7iyVC7EKwz4sKPiKwL2VPk1ZoF9LPjonm21N6JXwFEsvRCzdCuas5JyTnExLeWvXCr9sMDBEJ5uTh",
  "key14": "3P2tQRaHn6Qn6ynTHkAmwnik5cwphJxjsLQojwzGbap4mVFbDQUoY1nbZYnpRTRkKfeevdiTB1YKUMLBAwjW5u1U",
  "key15": "5iwZExAiCxHorwAwiQDdq6muTngeMS8Vi9rCgQX9KmBixUJGEJHqfWhY28UddVP1QaUqLd1WRkkZDN9NxRgYA99d",
  "key16": "5KBpnQgyHu5nqPKc3kebMfgqofKm2E86ibvNrcFVXvwrQR3UDpnNVnCgBsHSe9dk2TYps9ZVFjfmjDryweWnWYzq",
  "key17": "5abx1LEL56dKbC7F7BN1LEVWRz4VGPcFVeFC9uqkbRLnVg3Jtx6gsy8vvxFMezsYH5Yahe6bWF94xpidFjiJGueK",
  "key18": "3BD4oEAJxX63Se1FntLH5PM2t1wW3X1WLTPch275TBp9sQmDsoyppWFEcST7C4h2UifnTkq2egoAZqu1ofykUZGJ",
  "key19": "5A7HjkmBayGotovJC4Gh2vfz2ruBTyrqu8UudWhLqv4j1uxhdGioof72fwvCB4tTzqmJ1seE9j1P2Q5D3gnjMqNr",
  "key20": "4EVg4tUiosabBpCXPeoDvuvrpaCqwrRVD347xWDbcwNcR3VeRjsn9yEFyZ8hnBanyxnkkQ5AeX7RJ26tMGKKBEH4",
  "key21": "3DHuktBL44uFqFNkXpravWCzVXVqN5AuW77W4thvrKmc2aZVB1Pe2uMDVLa537PJt7U8KhDxWfQaxDQVekVE5EB7",
  "key22": "5JxSuN5kvSDtC7sdPPJodVP8w1XJfVd9fT2XuzXtTjBaKdkbrrA2LfpNfe5PXhgL8ZGBUPDqNVzcGcwY2zJbCURq",
  "key23": "2a96w5a9WuVfWz7VTC5XYK9kSHbbBAhRciyKBdedZdGMkKwZrzkJm98YTLnEDgRMDR3Gr2mA3RrQ8zxjxmkgnFPD",
  "key24": "5P5P9ez7Wn8KSggFR6KotCMJjzoen7eHzGs8dg2RnvCtvi31H1gNVB5n1pUFrFFAVZGvnazBHbuMdzZzq9jKexQM",
  "key25": "3gPUx6fEN85JaoCy14ckLofuNXS9papjqMsDzXPnckfBpSBrmRB8pZ7FAsPDbfzExgAG3DZHX4L3AGGxusn1hVLy",
  "key26": "BsPagmS6HAXyLK7Fg9yFpNaFfZw6mJCnFicGhiNRzmSw9EV2dki9YNLaXFdfFbdnVt4G2yKmjFUmYSG5SmTa8Cw",
  "key27": "3VyxtMvsAdTeuzoVuJy4SJK7KZDXD6mLJGqxyPiNJdw3spHUHLYBJ9it6xx4zQNMxwSpXcuwBbjcbHS82gxxBDxp",
  "key28": "2Np6eJUak8m79rJt3QjKjqzhHEwsgQKW49QDoTW6eDGx4yr8n9YdnfkJ3h3hyTijpCqPb46z3kJnaiK7HhBMstei",
  "key29": "3qfkSc7EUTvRqtEpYoqfHtxeLpXHb1YbHYuVaDygubWWG295Sr7SMcEGZ2RERASuDoT2zK5mPrUqT1AMxjVNBHff",
  "key30": "UDm4ZiAhFViGKDVJGJGhQBSEfcqWideTb3BwyZLeSmg9E4TpmyzixFMb3mnTofnvPkgqthjy2z2C5KdT7jfJNrw",
  "key31": "3ktyNqTYBiiozpFqPESTcdZGBvXBkFvC2ZkwDTqDf2WtVW1o9Y2Vmme6W7CzPa5qvQ5KFETXth6EH7fPjB5cWMSu",
  "key32": "4PQUCJmJ5wFz2Xx7JwRirsEN6ftnJ1KNtv6HrzTRD84EfDAPVdcirvPAa1UTXC4MYbT2dHbVgY8bSFSGRKSCTanc",
  "key33": "2rnN1NCnZdvLb6jL5ahQ6LwdsqB3MDEk732tGEp6mwUR4kuGvU1mPd3k6enTJjEZfjv8MsXet84bemKr1DJVWoAW",
  "key34": "4FFFQgXov2rtrmauop8pQyD6xLQYaFgKcHZj291ebAuWoTTJVweKUTvhUr92jNG5JwKYdnxtZ3sDN2UowYM4PQ2N",
  "key35": "28ZHM2CYZV7nyyHVyvKP3BWJX7uZfZARAP5fZRw84tQAAeDPSzX9HfUS9vECYX1wzWAVe5teEby37vN4LYyiH4Fk",
  "key36": "2pPe6e5ST9H6xyNpnXq2FRvMRRiyyN2kY4U5E1kVP81zGGibSqrrMk6FwtypfcEoSdM4MYxTKK6thf3bAp2dZD2B",
  "key37": "5vp9in6GhwTcS3TCceVu1WQAx53jkagg4uDmY4c3b9rbK5fJVVreZK5uB3mHXr2dDfJDL9e7GC1eAjDML72wHBNg",
  "key38": "5H7AyLS8kLpnrxEZ8KVqdye1QXVkrKtp4Evs9QcpEcgR2on1CUTbAhwrMFcwbKUkEJW5k1X4eGFq1AvncUZnqZgG",
  "key39": "5gRdCQHssUcB1HvPysrxBG45WiosrfAaRXxqdnQxEyaaRR1m2LHYn5JpTwrVqQEGE1ztiLJ9Lsddie6EnYA1Bh37",
  "key40": "4b7hvgM4ZepjEGsnMowxaZxgBjbAkfXPzPA3Tnt5xSgt8QCNab1QXn1QJYRj9VZotgCKsZuoezvUVSdun5fXtW1F",
  "key41": "6WfzaZko1UAGJvB9CFxAELsdkURdAu2Mi47oSeNg3GJ6pYuPh9f2MjyNYdSTfSzbUmMuT4TZjFPV22kjmh7bUbb",
  "key42": "3aKvV9epeUwGCZEmHNiQcEfMM24RsPnJyMeSNt8U4cCUcgHGHrQF5MmqHwPJAoZpdXSKCxwGJbBET6PKvN1SdeaX",
  "key43": "3BkhuPvwKqBVxC4G5waJLScpFewyatoJMCjKWMPPHPt6Kqhqb6TRU4F84ttdwCjoW5WRKHoEhTdPYow1B7XME4AH",
  "key44": "4cryVca2Z98oCuNqkx6agv2zV8Axw2isfQCy52wnybGyP5iQPRPq87CGALzR2wAb3kvnh6fnEsGXAxfWqnqNtRMs",
  "key45": "5SfeyKMEzofB9Y5sRnAGxm6Cp9HxT7TJD25fSv4UNGP56qrrynKy27fxS4ZPGeL5j3eApkWjLjqbDGmqv2fWiWZz"
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
