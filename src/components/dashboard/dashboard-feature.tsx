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
    "4E7GBJPMgHbjQ9fbFK7tTUfq4UfJhzwmbNtBUVXGXQtqb1xkxYUSaYQGnSRB1DqVXuVvVAVZsBWbA2fGJ6DHub33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TnrMwa3raCTt9Lbr2bwQyPXuUEwuYvnsENxzLrTvWfSstFBkKamNqFG8D2tPeNNWLsT2JNMHj2rtG3xoPvTu65",
  "key1": "tvcRGEtMrd8EPUiS3qGEHH1QSzELhoXp9We78XZ5EEZdhznyQEv5vQfND6Zc2p7wSQripB38p7Jjfxen7F9fakH",
  "key2": "5gR9HQQVM9nzdkuUbaiZevF1e4vMPLWisfc9ZxVXpvYb4BZcujaAvdh9c5Sbu5RDrPkFfzFnSLAScrqoPRvRYx3K",
  "key3": "5iYrYbChZ7cPPyMQtoPJ3iKq2x1ZPDenZJH1htzVspYZd5UJHaZnqGQvfBcPN2FVmZurMjKJEGbFFALRSKPeQmcy",
  "key4": "26Y6JuGTBcN7zWZr9cn8HQWbkDa3hNU1pai1gUHw1ng4V7dU5ixHwJJUoPUjTZRVc78eNSqenrv8kEsCwGoujpeH",
  "key5": "2ukevSNKvocZ7B4SJxbde4xrxkzsWC2puLH9Fdn9AkCGbnjtZFd1pRM8vXPKpXDU6uvvbiuntzeVBVyNKkXoLUnq",
  "key6": "4Tc8izJNS5W5XsZXfEi8EXwNM2fRjmRdcELJo68SxDMNuKWorCYdjUZQGtzCe85HRJYKHvJxi3Q5pUyS3tFvqACo",
  "key7": "2HALT2zRmTcTFp7wJKa6siJpyjXKp1kAh83Agn6ngKoyqqhaypPtpi7zVb8V8rNtdktHyX94SDBPuhXjEvTLEHYs",
  "key8": "3KpadpyvFvq39qGKv2K19Y1At9EobJ99TNhkdqKCimaFxWKmRETQtG8xXzVDbRfCeNca6SngyJYUkpZaMmYrkBei",
  "key9": "2awgFLNi3amCdrm9CUNWUXe3wQQavFmswYebSeFW3NcMasvXCd7WDEHFz3qLSXAV6dLtMh8EEMrumckCwWQNnpvv",
  "key10": "QSsS36FwE3LrXbZC26fmh9o6UyhMHHBTjupWbxcBipNLgePfEw5YDvGyRLZ1tsaYEnGsNn6CwJwSHGxyvbWZcXX",
  "key11": "38jryjWLkiEa2QqagAKQKfwaA9KrSHoKVL5fm9JcxfuU3idcURkUX1QByD1MvM4E3n6NtRCHMBFUNBxX1hRDiR58",
  "key12": "54kLv2xyEhxefWMcPZR5hEmqfu4U78GKo3L4UbVhAGcd5YWmzHZ7GLBo2kQDbaVmJtBoGtfVhmTfbeArZD5Xn7vs",
  "key13": "4BYjmAZ2kRHHmQjJd9umX6gMzTEDBidjdkmYTysf9EeJxianP585zm7vXgg2sZNz1v4Rw1YHp8ygxFB3qTvr7X7b",
  "key14": "5JK7GreaAyTSbUdGRQ7Y14k1e7Xgq1JkhXEDQWDyNBppBtsk6DmsdgfEWSksQ8sCqq4o2vFqC6LfHbHFUCjfaayU",
  "key15": "5YVSQTYTzHn7q4MNmmpdjxAjDTuzDKC934a7rSEP8qgzDSqbJSfU9JijFSZPiDRe2pHgiGbZW321SEtRcENkhbhu",
  "key16": "46j1vLrgsw9szYVeusKEhYyV5rndRi1EtKBF7Nxu64sAMHToV4ANWYEeoTx2sBvcMVt744tz35Yyn2bcEv4cFzah",
  "key17": "479TjVnQ9ZHu2KkGjpcHHAXVv2P8yTesNATXDLmRyu8Mt6ts5yNkVCMutHsZCQX66UXEhEKbJuD9kipHX56bt9u4",
  "key18": "M978rAQc5dnyadLrxfK8Zu9grfPVNN2NdMjasvWc5aDpJ6jpBCbF6V71dsdWsZA1gkHYvGuuDNaqA5Uf1DcVBok",
  "key19": "5cMoEEtZnMMTS4hybiQ6Sv961GRLT9D8X1CJciBkD2K9pv5xPT1QoLvBaxiLrRTebHnQkzadxjNLDkcbw4gvynz4",
  "key20": "3Q2s99wvHmLvte82Z8TQ8HaPX4oSUgEJUDp5TZdun1YYfhUgnQo6wWBwb5wek8YSA213uoJb9JrNkmkUWsTcGpEY",
  "key21": "3PbXV1KWQcHC2DGq2QoskcN1mcCNevcmRNgVT5j6xdpjNFM5hMhFNZ2FD3HM2VXF8kZnSTfvuyAfFSe5Hs6r8zti",
  "key22": "4uQH4z36fduFzFcZhHLcLgT8N1gukv5oDFr7fzVx8yr3HMFYGN59cYwKp9sA5DY8VLmeszdceyhKYMVNozLY6kJN",
  "key23": "27QSUvDicT6PnZQE2uyP7SgofKYHZ4jsiDWpk8xNYyBUfEFTVc1VMUKGoHYB4EugVctFyW7xT7kheRePYnrCZyXW",
  "key24": "633pTXAyEroiftVGdNxhCXoVFkGh7gzWGUWRwsujqwBEJaUSpCV3f6scrK2FRijNfoeJ8xvgVU395y67yNGGWLiE",
  "key25": "4WoeXeSe8vBjxvsxf4NQAuETHcjbL6rwYvKGSNyL6MDc2A6o9usTRyr2MgzjcPAvCTrwn3pRmjLViH9rv9QTmK1x",
  "key26": "5wHXVFvYFKsAax5JyFb8efjgM35DrEypTmYkM7WxgBfzMYiccavTgh5gqApFbu8Tm5fBLFwkTsW54WQPNCoChNqp",
  "key27": "2bW8b1NVnJjCZ8mpSGTtgG1pGVaF1UAZqmAbhzXHbyzFZx2mcRgZ9W1fZ5Wx8cyZSFLwRgfvowLVHfdGRuoMxFow",
  "key28": "4EnBcPPAdq8FdK9tumVqUc5q7uKCVagaHajbbjLUzFmDiaEjPZb9ubJvJwNAswracWD4qbW6j5y5VNiPnEP2iKyw",
  "key29": "RqHMYJR4LN5sxsNSwLqDp1HMywJ8vtKtwERLEYGRG1n5Up6wzm9Cf7Em3sY69G7gVagAQyHWSxsqzoDey4V1gwH",
  "key30": "23L2BAKWnd9p48mJweuhPvvNeAWRoEsyHZmdMvGJ37JJYQpMkVvMM57zan2dDhHQgucbRHphJtWuPk2qGRY6zhjT",
  "key31": "2RMg5qXMEW1Fg9qVWRGuCZnzK8a5XaACzhCJ71bZ6zNBPKuadGJxbxXv6Np5zQqdvtbeKikdcKzVYL2K4uwo6Xqt",
  "key32": "5766fn4fznbft36sq8CZTUbBzTJFzqNqoAM6KKrGjddYxt8t54phSbNefQL8h4BSQDfPEr1MXmK5rwJ8dcwxtDnY",
  "key33": "5P3pNuiXzVzMyf9XZzbJM59k3wsfqot6Do3GMoNj6DC6DccJz8xVec6A3b8VAosfFbK1GogKgcGtLpjWRs7aDty",
  "key34": "kdae5XXLmCFzEGnEyYyJyhdiKf7VWFTtebJxavmXj5yw59sb2doVQQpngcsyZ9tUh1zzRzVKjRrjmUUd95bwjRm",
  "key35": "2RhBJpxz2iGhAjqUBFvEpvNLuYiHa7fy9p44bmGggcRyF1ecWywmuLwugy6uu5yvBArcjE2FF8cFMfhm7xoraxQw",
  "key36": "4hnTCmLosAhqhxLwKAfnzudjyYWPaqEirk6x7uw2jvJx8yJJW2smd4JwwNGqiPMN1RctDgdzApZ9j19uAepmS5H6",
  "key37": "5Fw6WpZSbSPyvbdbqt8A8wd2bQEigz4jYoTbztzLmMtKT4BJK9jWB616ELS1EMg2FnXdj6o4qsymYVM3eZ5F7oyi",
  "key38": "2zJpLNz129jo7xr1w215PW1aWuyskktbzQyNApwY5cp3BZjrYHJD1XLZiMzhkadaHDXqw3TdZDYd9qBL88snzLj2",
  "key39": "3rZAh5oPwBVE2SYi9i9Ww5Do7XKRcZuqNNw7C93Bkt2p5QakxBvMmZEpvt7SeC6LvW2yb9SC2vNS62SCyQrSoCvx",
  "key40": "4EirU56EDUKuBUXwe23HgiJg1367QeVsvvqGThoKk73C715NPX6ewR6vkXDGh8CjthhLLv3fR6mjGgAegcQkEarw",
  "key41": "4VN88bsUGAJSSDAr4TJ3qYatUDGvSd6kfGJhPsVoadffb9Hf6ZXgtuzViXRNcvTDWSN3LnVBf4ru9pvHeWCCzRXd",
  "key42": "XLxCJGwxUViN6Vmz2sc4LnHFZEM9PGXdssecJLy68PMdsJYe6KvCYZX722fAqv5jHKURCQmHRYX93SPuJPU7wWL",
  "key43": "4WifvnJhVfGVdLXgWtaGjwYWyqtxpP6QcNinbLD4yoTZkJN4J7msB3PnkanzqaAhVdfrqzYY4W69f9DSGz5emy6j"
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
