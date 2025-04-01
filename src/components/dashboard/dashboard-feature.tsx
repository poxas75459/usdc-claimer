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
    "5AdkQeEbofu4ptqommzNmmE2ZYUFDaiEGmf45Dfhwa4YygpMtVrPtQnxtcepS1M4cZsz7Na6XkFFYKvasCx7ZMn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YeCokudv25pWvTc1L1Dd6T8PuCZgqZLvkaz1rY44AXReRj476p7aGwhYiRynWbo5NMesRA5rJ3CMigPfqaA9U23",
  "key1": "5r4yhkz92xrj7NEm44MHxLuec2TiHdMqhhbMztouF8ww3MbsWNvp1ZgGDD8rum8WMNHmLFkKpb2yEDy3A9Aoyofa",
  "key2": "uoHVMwG5cooG3xUuKZdvaVFjNf9aLooPgT526wetAH8mKSHwxoqYx2uQXbqzYbqo3RKRvE7NQNSMz8Dz1MrtvXm",
  "key3": "2N9P2bLS3L4nBp8Maw8QgYnCaj1ZXHTEPXyz1se3nMU9FX4G3tdDhvenoqZW3EZwap2k4DLURPFSY1eux5zTXR5C",
  "key4": "5RF3HKtSJcrbKbTW3vhFrAMjicpQ3qzNLAcmeX5msYmavQvNYd6nnnm26UxZLz9hH25Rt8e7zj5giJmRkB8dN3dQ",
  "key5": "3ojG78M2Azy8i7nrq9pewgyPZsiAmiQz5CrJnJAoZhMCV9BrYaj9wEprZpygnQ7dRaSy4LKmwfcCpdnvNZAZj9gS",
  "key6": "4fQbvX9ENeQjuQHeCv1geoSBg3jK2gkmBwBjF7WVddVXfQNkmeTX8BABbqU3skiEmxveiGuaUGb4of6E5RhMt6Pv",
  "key7": "2X3DkmEH4KqBcdg1H67WmxRWqPagNwv7rF9YaDjSrJ96rpK81PcGt87MN4LwNthefkdkdY4rc9sw8iF1tNcaHu8S",
  "key8": "ucXrfHZVzP7zp3XeMYcMPHEPu4spVH8BdhBGXtNjPAaX9tfNn2GyVMMfJFeiYzkGrfs24T6HdWpB22SuusWDGk6",
  "key9": "3DQQESSb8NbHZv7DkjZkGXBRTS8d9n8BPoJccHjXd7q9CuJkKTkJDeYfKXqpvr226ZoVdf5K5N2j3Azs6tywQM8H",
  "key10": "R3aksq2m29pTFbHtWAuvmGAtf1Au2ELjosW7a6nYMME3LnzGPMGh1gJognPJUdGzRprrde2jw9NHjBLGyUSm2Jb",
  "key11": "2aSn7MYKxeDSfrTVeCyTofLP4JAv7RWezjJCphPXsV6N93HnCAqVL5nFtujfc9kMicgpjN18ygTsaDKpkGHwRX3Y",
  "key12": "4BN1vCtjU7dyFS5CcpC2BZXddrQDddjw5pEbRyqi3prYVvFBF6qoiCog2rfUfJSyhSi5xKFSHJ8QTj3hBX5GA4wv",
  "key13": "4tgG6QcospTJv3MWKp67eB8CVrGHbhUdQ9uo9WAgwUZ7jQgG8CKtxHdeXZkZUSGg6saVtTFywYUPv8Yd7jVu9rfR",
  "key14": "3FqXkXDAzEvXtPhxEvZv43RgqJYn2QaR3nGFsUV6vEzpvgVUUvaQgUWjExZvTBGenRncipm4uEzQt24nNvAeiz2V",
  "key15": "2chHEUj7WjTxqsG6bwseBSKwpLyyPUHR8JK2Uk8YXsgTYZ75im54EDbwGjjRLqeG3nYHP9vhUfPrjvx5Sg5neowr",
  "key16": "3MAFfmz6y8F5ecHt7sy845EihgCKtc9rpXY78PJzHhsBZopwrue49hDAciG4a4Mh1nkZBcVDJ1JV8tCH8yKdqXWb",
  "key17": "2aNaVZW7PkJ1NanqRN1KPKBwmc8669KUjnhVAeEHvE6eFCya6nfgef2mms7W7dKHaVA392Va6zv9vWaUHZJpJwBh",
  "key18": "3e3FzJoCjnEbbnTnbqu7Wsy4FPs6HPAiVwHsTKVi4yigtTyfiyPqNpxiE6fJdoYuPVFa7nhjyzZtUnSRZzwbYHmh",
  "key19": "588t5tZH7AgTSMJRJXEXiCGEaiJcTuHNm7KZ57CbG2stQkNgYa3QW3cbkPCbPwUQwGmqDND2qZ5uK7hsfgt5LVnK",
  "key20": "3E9bScaqpH5ptrZgLnHJ3hk5NedszdPbtQYFbUhmcgWNT17xeRkdCjECXDR9bUewCVHrXEMy3XnHQfmiLmpZLU2X",
  "key21": "5LfZjvoKo77ayrdTET7L8ti4AT7sgexcoc28wxR244jeidHzFxAbZpcavtsvRppGXRkHmztvghM8xLpUxLW9pQCX",
  "key22": "YSX9h2XJFiea8wrweLMegBV2wE51LGKUVK6d2FjurHGhULuzG95t6kqFfa65gqQBPXKHLWLs7ptNVNJHKHUe8sH",
  "key23": "5gFZcPbeCUHzpgsdur7va3kDnjGpUVTinBdoYi3Sf7mFtTsZ2zpdRkD2gaEVm3K3SZg4onKUV7ninh9hVw1KQcJx",
  "key24": "3vnz5FULQU3c1ocUvWEixufeGEphNfGvykRgUfwiD9xLKZYTqvmEmo9a1GawLUTXDrS8jv3nDwcPYovWZHQXKzXT",
  "key25": "288eNQy9MXNFcaZJN28f2N91KnKFxz9G6opiRQNqHHusJUPDPo6XA5tbJs25JN97W8QoN5UjECMMSB9pwRAM1JnB",
  "key26": "3oruj3izNhMPbwhe7AvrCVj8jF2iCXF9HZ8a1NptpA2Ss5hHwtKT3HsXy3GQifAzVZkNUcbYUPQcfxnV5UTfcR82",
  "key27": "48CqKr96gZr8hHQDrKcvccuEyUpWv3dtSaAk4Q9c2UR1n5xQGHCGTp2SnniAVNeSrWPUJWTg7AyuC7pr5fAjsxhk",
  "key28": "3gqWoX645dvFPeKh7ecYm7WkdM46FByTVRt6oG98XDx3aPJnhMG37fpdojvMk5jPYqVMN3Q2cbdZcnRXJjSk9p3m",
  "key29": "4BNKHGTwNsjHWVsMPTbueJ9UNahg727QPvGU3HkPfLfPuveA8xLfkQqG57QjjgffCVe3xbgwYo3WNL9GE4gEkzLK",
  "key30": "3oigEwSnH8RPQXdiy2cSUtngkkg9ivijkVMiP8nxu2TiojwYPVbTEZxvGVbGFHkgEAynvbWW5Wox1CPzqHge69uo",
  "key31": "ZJtHtrQN1SMXxi3i7zWDFQLhRdzHt4thAR7A5xZanREvpXL5RwYhHuptBreovmdQt2gAp3sCdGHESJ8yTeu2Mua",
  "key32": "n5mJiS23cnKiNCeZcxXxnMurPEWpFgbc7fLqUhmAhJ9vhgunduX4S4VZyUp5qauEZGu1UdK5rtmqfQvzgR8sgux",
  "key33": "WkbBRfFVCYYKwLNXcFk7ipCLjupkWxhzJwRrd283LpZQ66riMMEifiXvcFQsB6iXz6Vu3hoTL5NNbHMM6YFvBVR",
  "key34": "3QUBUXQrDTDRAnphSJDBw9oSeuxANMLcJH1n65WnJPvdPDdfB1A5QBbDT69T3nyoxRDk3QFrfsZSkUvmny4RfKFj",
  "key35": "21v1jEejbskVwBoTgr7hpB9t2wskXHsirhJhPRLVTJojrmAUk1caGRCp9U621gF2osWz9WovHp16zXtbMP9wvasu",
  "key36": "4EybfkjQ3DS2gnFG7Saw7iYyrLmh7iaBbzKWuLoKmYJhrhNDAftbfTFsRx6CJ4yr9fmALji67tA4JREs7kFtGKLu",
  "key37": "3jJcb5xpds6fvZyW9NgrK5mdBnxEPEEmGr2oT2RQi8C518gMXeEuKhByFCRRXHMbL6Z88gGQ7zkD3xeaEkHwvqJx",
  "key38": "27JHBfbicvZuKwBk1sj7BLTKsnuHA9H2q5mGveX255dVEqMa3rmZk8uo3nkYwJrbFbZ1NQ65NZUDh2BiSrGYNW1f"
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
