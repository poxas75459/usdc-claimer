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
    "5RtzU2XjQJgHQw3yhmq7AgDS44LmWtgQygwv6pYNXYDk3utuuGjaK7VyuNKszDWK9Z8cZXFuqREanUEUTLfXCMEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDwuXHfGhybTGSqccModvXEvUv3HHZiCkQfpQLFfzhbmxzg7qi2XknXfsbXpsLAPZ9PEdGUP4MpzvX7CivXpja9",
  "key1": "3xjx31FfV7Tju2mugx4KZASB2n5ztDmPcazdvy3qoNk4JFZK8NsHWhWPddAD4mLougrPsYYCLHFq3Bkb3qRYsCj4",
  "key2": "3sAeELKi2eu3RnRNK4zurNfeuhyZnfoufedRRovLtnLTuHLwoAZvRMwcm5bcnVaZrihyCmUJVnYFdteEgaFPVmMu",
  "key3": "55JeyhFE9CMVr5f4MnDQAnCDKHT5WdGSppWn5dvZvG7DWCDWo5b8wL2kc9NzJCuD8y6JKymarxTqRuiPdUjdb9ZM",
  "key4": "1BBwJNwsnD9ecKbrDQqX8sxSrM7pwkRh8963SKyYX7Fm2yKXYPdukY8FMMeqdRo62xEXxuapwQ5ZR7JcSYcsjG8",
  "key5": "5TcREVjAhfvgDaDEtwKMUpHFMBnBbFGtuDAxrvrQfuKB5focApNrq2MxEBwcTwdZQ61NMxtiepohsfrzARvdGtHT",
  "key6": "VWtzzzdmivvztAmWtLbRnQmVwpgGURCAf9EAQb4vgaDJTNXy1V1snJzyTyh6a38zcETZnMTHEA3ybiVXGbFt5vU",
  "key7": "3DMW1jLk1s1gL2ohKgRAo83U1AKpDK4otBLoep4gbfSzvwsqpJH3s381aCA8QXZziAJtxBM3Gp3NQYpxQ93VMfAz",
  "key8": "KQB5i5qbBeCnVQCutmeC1ixhNRJKTnYR1TCWDSxy71wYKrpHMivhjaLeaQnpM7TqBqiPRMz8bEoT3GBAX1HN1Vh",
  "key9": "depbhg1RXSgTx88b2Ji4nUDontKgcpWmRekykyEWEyB2iociL2ozRfB89fTYFbKxamRoFrpCmgrk5r6cJ2sqptw",
  "key10": "4LBv4AjgKBK6E532T86k37wXv2bPHLQmstywjTqrPchbDgQpxiMcgs9wnmYcMS8q6UBCvVmwc3KsS8q1ePHUoWEC",
  "key11": "51G5UiaBxfe2MoSGkbp24FeFGhmmHk5f8MVRkEg7iA3QjULowefk9mnddG1hFtsXMTLQRpWwRLhnECfPEdsKRkRF",
  "key12": "4U5BcUpNbpghVAJ1Yj42QZYEgnY3yc8MdFvTgFnGLigA5b8RTsgFM93LSZurfetqrQKRwDwr4irzFEa5geTBCmMs",
  "key13": "4x9AanS4D4Xov4uB3rFbD6u8gwZbjNCeWbgcqURCaHnW5N29FFKSZsA84hpxXZQaFS2enTeiEMzRyh88G96Ydx3o",
  "key14": "2ZYYkpnZQwwqkZQEZ9haSe6sx1vxji8HBJjsHZdUNrkL7nFyHKGSAYi1TybWeupwJBv7v5CdrEzJS7ZedTJrrGMT",
  "key15": "c8MLfDQLkLcaQLSDiqfn4Kh6qmfN35tbCTGWrgfYRgf1xkHsUbSkYkAS24uaAGH74nQ1amrHMqPttaN7wkGN385",
  "key16": "2TYg7EjqWa7EHtKhtgm3jagjde9PygaVVQdAxokSPJ148ZWfMr85LZ5sKpk87AyCvieqWzftay9342sFAvxEJe6G",
  "key17": "4ZbXxWLz9sEZmcu6dnVjVJwnAkTq8dgewRch2BwCd9GFQ8J6STjPHFKHtuVmqHa6rt7xqrjU5NunBwpVZFzWQeXS",
  "key18": "26zpmfaBVYbDKszNwwdybK6ToUYEv8EkhowyodCjuJx6y1xe68iviUCtcwoMnEuKDQHXZCii6Vi76H5JXfWdijgo",
  "key19": "31GNqueHo7C9o4WXWVD8iNaYRcaPCzyd5Sh32WKc8fdNPMgFh4ptqqTPezh9qxSSZgaXPpSWMCybMqZMDT1M46ei",
  "key20": "4Q79RGtsaSpUGMp46C33Ht6SZ84YzVTj9qPkF4nQmc9qAfhA1fdcCfXHV3JuZw4WorR6YDmqXQB1uCiLZ58Ttuo3",
  "key21": "4AXL1qY8zTWUfZjftWRWgWoKxiMSyGAFepH3hF2VKrxdrPiCLt8Dog3PFiTHrYg4eekhv2vcpjFVYNJ4B7YxUbCw",
  "key22": "2dfBWJ2kBkzc9QM5U6yVVVXkZ26CFuMXySTySy7Hio9ccGm9vQ86f8iaWCseWee8oApsNKZegpuTevgWVjjyYFXQ",
  "key23": "37vmi2UMQy3BAGcVgHsKXTLcBqUks8R12n6RfhY4gWwHUcrPEozxJBw3VXm23seAzdHc3ivq2bdEnsWYLQBo8Nc",
  "key24": "ymFoT4ZRxSMcgTUzYHteKM9t2HWfatJBDatoRVVBre1LA85ZpntMVc2HNtFodxV49uY6HsWrW5heZURtLtj7Wc4",
  "key25": "552wZPfNoa1d5YN6xaKHQLz76HJH5pBkUvdz2mTg96q8bor29ZAJdgMXYMgH7JNsQDN4JpxbictcSD6JxX8LKsBP",
  "key26": "2qCbSdrmhDgDB96VCo6UjzXCdkNQ46zsi9a8A5cJRkppU1X5XZmJf3BNV1VNoGaJcrD3pbKraT6jJf7uPbEkyeC9",
  "key27": "JEfQJs2JJ974Kf5PR4vH9nZLWPoURsV7y1h8yCimLtH4j2N4dHEGPVUxJcXThA65FdWi9wuW8dcNSZ6ZLQ4wG2s",
  "key28": "3uaf15DUKtXJ3KdoT837FQoPpTaCs4AqCft73uawGLYrqMbQnc7fc4u8igyQ4g1UfhMrp2as7mb78NeHEK4EUxgm",
  "key29": "2DPjSQCKDUcS9TchHsSnXShAiSFuCyKeG3zYTwY9igFScserDmf3Xr3u4ZCsTziL4SoGVmV1Gys7FXkaMZh9noA2",
  "key30": "kp4XBojNTZKLDM2Y2jF6zpd3TFir5rGUwDRV6Ljg457jPnpBZhtgCFTKBVDeauCMW17xYqRW8fsHgLx28XnuwT6",
  "key31": "31NVyd2VzdxUcFmimRiDFRFU2Mkn2fP8xLqgYNqWGPg9tYhcqSVrDMkUoc8By7RJBYgfS6uoFvSHGMWWuSLe5j1E",
  "key32": "yemQ9YWdsN3BgzmJjM15qTq8twgsThtbxKM8soR6QRjQuXzf27TSBhs1SCtLBvXwaqS5oPf2giF7wZs46jYbi8y",
  "key33": "4WEkYVabEP4wKxe3PkTCiuDGciLDRujHMTboWFoy3C8njXDwdMU4iBpGuiVjbTuhEVUkdrrxZnQ3TK7McHtbNMam",
  "key34": "4xi66tXCmR5pCBvetKmT2bwAdZUu1gkAP5LK17sXCVye382eVE988SBiBb8CA85iJiUh1pK2GJC7LWX7PwzrofPN",
  "key35": "2nzVaXTY1Ahmm5behBkjQzDgiq7TfB3cZFh9EuBDUDZAYHz6cmPVxwwezHEkvFSL5rnRPqH96pgGGrc8Mx5DQAbX",
  "key36": "4wWVVAjrndjBav6vmyG4ps7ZUWL6WtGtfrV5TLECQyBYMmesDBWoMTvULR32whzwmP8FSXJgmHvMcTomq7Hqoz7Q",
  "key37": "26d6xiM3rXxjEaMJqZ5SuJNnbm52paasF1RSx6UKa31MM67or8nDzJAHeNQusD2D25F5P6EFX3BV4BMfryFg1ayP",
  "key38": "5ZwC3oHSCSoob5h39z1xgnxKLxYm4bFyJL18dUMs7wCkEwEyRb9yYbknqiymSJD5UntRJ8fJBGtzcn9opJPahsTm",
  "key39": "31x7Gv2GBX2nzGmeNXiHXdeBni85gN5bDeyyqyEdAmKJ6koGkmYxYuNnLsLM2DbfYYEGtg4khTFiWtfEHq9GKhUK",
  "key40": "4hAQvJR9V7wy9uUvVVEvH1HuoJQwrcKVeXZN2ayfEuVXq3xjBMjv26xXdeK4kqXTvtX19my1F2EXwNCDd3PfdWXc",
  "key41": "5UAE5eY69KVjmUyGcu6mdGZ8VY6nZV1j8H3xJdqRQ3uovkcFGLQULJp9KApFUvwjMUUYH7sqmJ1ZdE7HN3ZJmQKK",
  "key42": "42eMBgLVqPt5QQuBtmqdCzjS9EXYUNiVwe9ADbCinL4RMuq4kPBQxZGsqHVcUg9FV5CdfCiUrLWG4rLP7P27Ji4V",
  "key43": "s7gKDeWExzzTxuRLEzSe79qToWmTyXyfbrdAd4Mehpe9QbnHnaYWiNNhUkNamA47rVfU5oYXLJXgaRoLUxc6P9w",
  "key44": "5k5hV3CLihYNPQugPysNLb2E2qGUgpQHL45gHuYP377VQVpVu99FeRFPBQmWmN8LjD6qMtZCzqjTVCKfsymBB5X",
  "key45": "5d2RqxT49aQjd9AAm4YBuSqaQPbVgqsHj86DCTZGJK7VVj3GZTp6euFDxLhhQpWDeh5ZJNDcqxnzsSUsnSKfjDp6"
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
