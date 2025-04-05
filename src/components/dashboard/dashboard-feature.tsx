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
    "35UxFbvzTWBAb364JHcj2q5VE6iax21WvHDkpxyge6KV9tm8DSJxpK1wzZByY5oLs7A4T7djbZbDdfGEqHHLZVxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DXU9MoPiiCQZPkXzhLirrnbiwVkkHaAyBmcMX3MFhFQFCPnV48N4mJDjrkczpQhjYe3CH8TjueGqv5ekfAMVpMV",
  "key1": "2hm8o87y3C6YWSY98U9cpvV3R4xrzQd3jVHo8kQU1N3uAC33cN62SmfDqRzVJB367aYDkHqTsM6jF8quL34Vs8SB",
  "key2": "3p3vru7ajfgD6sNmxQUcMJsEqyqQRPtgjpRsQD74NQSBJT6bzmr32eHaQEayNrmV6XRwjyh3Lgm5YyvhhdykqBgy",
  "key3": "4EtQemawPtT7Z19wG39Dome53inbGwQtBp9GNgEVAeBiyXD7HNanZpj4maTwDpMzxCC56t6XKmcQd2WE3mRUF64K",
  "key4": "XCakD37CmFCayPssvWbAPayLwJZhCv3i6MtRzsPEL879z7mmms7Ge4zuQh29hGDvHkJ8otSQDRMrxuRFXkse7r1",
  "key5": "2LktZyS4xQFRDhp6E58fEi8Q9nTSoiAw3PHSzXd8RvSkTZJanSgkS5HRXXhVURo6EyERQGioUXLGn49ETwHTYuKx",
  "key6": "559DicvoSf737jxR87m81MRhFzwHEAR3HPAT9VUvCHvX6K3GjDiEkPCoHDFQYLR1T8rHLpEohk47pedEWUvF7nfq",
  "key7": "3Esd4qYejF7Lhb3Xw8XstLSi5kmRpa1e7D13zb85zPoJvVAUVC5Vd1C3rD8E5t85NT6DCBn6z9Aa4VnMfRMFoc9o",
  "key8": "5mN436ka7BhzS3SqfG9XnoYkxLq3bq8iNC3m57vNpGe8onhBW8hue3zaYbZTeCsZEE5PJKnMRPa5SUiZ2UGBP5RH",
  "key9": "4Tx6TxW8Qp4dd5Tg4JENDrXmMzEB8tctW4QuWUSXwxQGrQLT3zaNoTouWzXb8EY5hGheJUa5qddbAYgXt7pBtNBf",
  "key10": "3ovJCrJikijhfBFxZPkJo4ZEaQ8Hz5jU6a7XgNURPkuKiYfmGEsafPYd5zHcFfjXydGmqmoCRGGsnfxKFRzRmLXn",
  "key11": "3dcD98N6og1zKFyeqEm3sttU3khjiHmAjeVes8x6NEEPszWMs7NfVYtbZjrpYpUgomuAG3r9u541W7WawiarYK1D",
  "key12": "3jD6CvwnijpgrkyyS7uBrZ7jUsteWMKKK2F1m3XGKi36ngHzBk9k9sxmxrfyHULQTZT5CAoua1szEVWhYVsH7661",
  "key13": "3m9FzpdFPJEA38ByV8XvaPkXWKDCvaZpNdonUmd8tXFap4TBGQTUSKkUda5pdb5QZZ1rnE49hJ4cyHsCKPgnQa1A",
  "key14": "3NYoGGFwrxdQpykY4dD6yatbQEEwcvu837YvkX17s6W96R4FQa5hpfc67uLVitouSZNKEjTHqPMjFfuDtmyWw3EX",
  "key15": "2YtZTD5cTZDupR5MDTfM661wtxqgTRCh2hzZcgZhfkqCe2nNp2hhiVHaV8b1KbTCUyTD3kf8yeEGScLhviA5wGBs",
  "key16": "K88hMEYaqwJBT4j7qmcmz24qNzrW5tRNs9z9izzc7rXLapWczmDP4beRGcaMF4PRMhHg4vsQN1ETBqEuKBxLGsR",
  "key17": "4heiw2UdJu2HbKin6nyUnztnBJAR9LkLKpYjDiYkMz9jMdHNAwq41JMtieiJh8tJvmsQvzNuUT1aNdCKPveTRk5x",
  "key18": "51551ESgVRMGgzxrF1mM1AEtGJEEz8LhpckXoE2seLueNHVsP6rF1ycXNZrcHw2C3ptVxKiUCrhh17xWUL2xU5ks",
  "key19": "eyeEZpmTRwVcCLVQoQYWcBBsZXrFoTWteUtD8WCxETzCyeM1y4J7GQabafkkEg5JHdRP127fCY8FZyDUthAqt2X",
  "key20": "5Dr5qjFhY2CNAgarAPF7kT4jn5KJNdFzjkSXMLqD3fS8W1GmmBtbXB9Uw3JVvcYDmdpKXB8nZvYXCWDMoKraSok4",
  "key21": "2sGbcaYfKV76zXpHxsxsWYskWrRd4USng6A8vxUQV9mpkAdpZzyBHsUypVf7K1H352w31V4cXkDtDUYNotYC8cvY",
  "key22": "5akMzTaHB1Dh2Y6KPBbr5NsBoYWSGhfdcKe6VGCtdkknyZYxmCBiTBE17x46inLyg58QWJjaaoD1XVJFEbowibYk",
  "key23": "3JGLSwZym25oPRygXfBQErdLpy29VorDaqE22rYs7vLDesKYFJth8rR8ASumD97bpdwS1Fri147Pq2bhRDQvsZMA",
  "key24": "Wag8W3WCgYakDhXbRG58sefFBBfYu5JmSz2Ya1RzUN5ek6Z7hYtE89CGTdhgyszYXJ4JSpPeFL8naf1m6Hbb8Ci",
  "key25": "4YbGKFF4sE1LgmVDyMeK6KaDKnQP2G6G1GTsAVGtf9fT8u8T1iu9Cgh5wM3pvoHV5VG5qQZ39NVL9zzNBy29Ho2T",
  "key26": "ZdS6cL8RqBKwR7CQgjBus3pnneZJdmYCj6j8hFv19RqV8CLdUxmcozWoVigpBacScfGAQuVg3dqsEvG9tydLW6j",
  "key27": "2LypQHgxpxEisTvzHG7qzKZpJ7QUdE2eCEwdHp1YPhemQsiHjP7u4cRpRZQiJeU1DBb4vGnfHMRJsG56cB9WjRED",
  "key28": "3dpZPSmcHiRF1gZ2gbWLJMhctdZA7syFUTnsgnx4mGcFJ6weruPBCGiqEzQa4ibZuPDu85Vfswrv7y3bbXjv3Ln1",
  "key29": "41SnRVhK2iakifARsxyrSMfGgTtyHQnyAkeK6puwhRx2NjmJg5Ejdfk3gWunnE3pZ4V81TFmpZmJoRuX1n43LEir",
  "key30": "5BNPbu1khiBtpEN3TbTiphemWLG468CpK23BVEhddUXSuQrXsLnTWXztSW9qpx5uE7VrZDd1gwBta81LNWX228MY",
  "key31": "vAqZmKkeGcNth5c7UufT9cevSCJ4Te1ErNCpsyqUfoGTRZtBPdRrMXMWUMtLNJGMPTzKWNCNsM3vTj84keCde3H",
  "key32": "ci4zvFJHXEeQciBRDqKN48Tt34aZynMT2Y6LnKbsE6oexY5f1q7TDXfaSREN1kQu266tRnxmtvcE8u4H25q8rdJ",
  "key33": "5iouXGzUit6XXstfD1qEKJ5aEq6oGtbxcvpFp1oDdZMzyvpQXD5mNUxWgaNg95R98J9egp3kjZfLFCa2WKhDbCQz",
  "key34": "66Rmv69BdL5VNezCfwAjzWy2uszzHevyHm7m38Dua44J5Hzp3Z5tJxiQX1fvkqT6hCAL3H5WNnwbu1a5t7B23JdV",
  "key35": "4bBRi7A2EURRovaq4USuLh9RrWLFLmk6mXNndSpymGJFQwZP9uX7JSqszi7C2VMjuJ3E83RKpmAmtbf1jLa9ReT",
  "key36": "UCkWYqnHEZkYhfB6zGtvrCZMgbBJ5hJ4YSx4XB9tJxQnFuw45rbsB3SjfpmrD8LDfwYw2o9fM3ciiTqZbC6aDsA",
  "key37": "PsE1HCNvYmJFq1kyeccQAEK5LZTzTgX8odUQVKjNpfhmPTR4YFqtK59ngDBKa9qFhEkavPQ9nz139uQHeKrRoEu",
  "key38": "VezQQVMkGCymTvaBRFLrsbrUxTBKzjqU3jcd3u3Sk6p3Mw2S8Bv4bzwxsHPV2M4fvCpcVp4TksdbifF7cLscnfj",
  "key39": "5cy46HcukU1LYC7TAPAvcy7RmqFWmkXL4AqyjrZ3Fwetu2qhoermY9rrSJPfLFFqBUndCLxmVctqdXrGUbGXcfnv"
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
