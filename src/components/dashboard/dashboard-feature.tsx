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
    "4Ya8Ak2VFJLbR5qDWkRagvGpu26x9YXbQsU25zKeBeuZnqAWdzksvqTf5efyQhesTjfwuPf6hm1VvZxgncTR1pc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFpsX43DaE4K2sVNWk5GjFAgoCE7aZhowFvQwhBPAotaAqCMve5nFkLCSpvX7uCiHE6GWXJu5iaQXBp1fwaPnrK",
  "key1": "42CLv9hbSJFApF36J7TLZrcmrRk6YA8NS8G6akAgY2xSs172JL6Haa2Gua9QbnqtDQJfeQnzqt55GaT5rAEUSDUz",
  "key2": "5oPePcNw3t1c5rCpb2bJMT8xi1BbyvSADKuMWMu6oG7e8nNwrrmN5sdaCD3hu1tPW3jR9Q5tVTq6k1BLTf3PFAEB",
  "key3": "5442REE7hLP3nva4PFP5Zd3KLTsgzsREKd3fTHeH9uEx9cymmrBCwvisyd2sHXvxZddHreBMBnTcpbmrfuG7eCb8",
  "key4": "4a84VMNGQcognudHAfbhEjijWqwmvFW3Hz42LNWPL2vUhTAk7aweyXa6HdVssG6PhB8PV7xFtxa8YQQaXkgqWnCx",
  "key5": "55UHJadyVSkK8XogyhmQqYM8ajYTEwvBouQMknzT589ZZoECBeqtSFZSpuU9hEe4oWkwQCw9mLC4F3gxeKB48H2u",
  "key6": "4jQGVCuaD79hAwCejjLvPsrJvhf5vYcPyZVwkagvsRhJ4DGDFNG746ZQzN7g5E64LADWkmBtUJ6K1Zyd8cmEvuZc",
  "key7": "3LaKqKDzFxX8pmFNA4QR214rMC7EAYbYBWmtBrjE432uBBSEzBWEQX5v5GT3H96Z854maziob69dUTrpxJQkPjh",
  "key8": "5GJSsdHW3u3LxRbWBzR5TL2gVysrouH18w1h48jr2tcqg4DZC8otyPEGj6zMeSrb2NNJCxNCuuBnwaE4ABSo6JCW",
  "key9": "5ZXrun9a25P7x1gkbSWRxFe9ryQuMqeVBzP4GiVaw3TTc1Wvs2JPmevkkXS9ehAJs7KcPJRisBDSfphHD9LRqe7j",
  "key10": "2S1SZxDd6uFLBwyyHPy32U79BJERETseAYEz9K8NNgZNnNcJ9n3N5nUr2MMXGLBWRXiYY9fZ195gURGUURGtFJD1",
  "key11": "5UrFihxxHVQfvxWAXZeUdF45wNzj9DmAp3A2u7rFuNhCPtkYcJjcwxosrM6zzxh9UvXykU8vozcTCQcMoCTycYXD",
  "key12": "2kFRjJTafQPJ24zvbqZKEjTyiFryVp91P8X7fjPPr9eQCxEjUAMhiyAUjtUgrrU2F8RB5RiLqGu2RAB5kKeqvg9N",
  "key13": "665yXgmaSV4GTRcP8PnAXC7mYF4XRJhRkdCFSHnTLW1nCxqfMCnLhriCT3q3wuUquHtD39etULBXzDMG7S766xih",
  "key14": "5krDd9hu6PGwieB2eyLUfEDCu75GBvyPvwmu868YRHyEAnET1tLVVvgSRUUQXqfMQse8dE9FkNTP17jYPjRB81Ga",
  "key15": "41XE4hgqybTRZiJbTPBRx6MJmCkSMASVZGWfE3TrWJkY93RQ9WAG92nkgeQCr9bYqeXayBDXPa4wfRJnPemD9uat",
  "key16": "5cNFmPi6nHym9K8mq2oW7NPZ5n1yJ3iCWAkrqunTHSogUkuYdhtsU9vzKcmhV72FSRrPj4Lxbeq2SwXoE2TVzPvs",
  "key17": "4rM5nTJ7UHSD7ChVL2of8cLJqcjPdWnCyuFVzJR4aPW7hn6XaWiYokMLMdD3ioCTDmhCyDvswyFrVJuAtw1mDGRp",
  "key18": "4PnuUY2PFxRSpMQ3BwYGk5LvDu9aUkeejhQF3diEP19pBoouS5jcbs158gaWu2i5u7JrQd3df9gbdAJyq5mZRGWj",
  "key19": "42JVXwTdsVEDF5KQmFLw7yhWCqXPeB5ssVcCrbJ2h8gYPmw5AhGhUXRd9XeqrxqukivSfSaeN2DyhN3t6944se3U",
  "key20": "3CYrWRbzUaVFUwxgKeShmVdXZhqYyek23MPGU9hJRXorpWZ19EmkWMi76zDUakGUKz8AAxGzGtFtvLPAhMEPAE6s",
  "key21": "A4fT5aFK6uhdQQcf5YhK3Bmh3iuDnvvNsN4AZBaEm63DGnSxKg4qQWbwEn1XsL41faMhcBbhoRMVVN4vW4PoFTa",
  "key22": "3k9pNNTXdUd9ZQCWn7hTt9iT1C3aag3DSpfHVhMr8NaMCfAABau8FbiSMv5SgsHAKEDimRk6XjKAtSTBRutTUSUH",
  "key23": "31DCA116bqSkEYqPcDiotoXUERH3JZCZK3jNWcmSWXdoPeWyBS7b7PZ2qezKnfjD2URGaUVnEL6hzpA1S49UTZMe",
  "key24": "3QUugLcLJs7TRbMmzdy7F7ZokpPsanjyqAv8bWFM1SjyCuszS4StCVMqw9S3zKzSL6jno7osNYFmZYSeqq5gXZJM",
  "key25": "22XFtNw9sezwgzFKsDS3fZdaUPwPJauQgLzagkypKMwo7enoLtgMUoU2ZWYgB97h4n8u6mgpzdWRWZxdNWDxZamf",
  "key26": "62s6HaSRHQvYZVndE8nheoX95uey2PfDrTJjb8K4j9waZstLPf9hQbFXxP3VxBE5VGNsHTnVq8iXTyF3a2LbZ4aN",
  "key27": "3aB3zTqBSwQajhCcWCn2v3JG7FYMNKi6m46eTBmgvHAWKC1AuZ6bJrfWArSaUNFb9pFrVp3zeFdH9yYfNZVF5c9T",
  "key28": "594QA3KiVgnZQd6qQ5JoUcjahGKZ5yp2X58bqhPKXdKzZdHd9q6bFH6KUZXzbdtMT8qHRXDrsVFmurBVX318DxYJ",
  "key29": "56dRWESJjNHJ6Z3nz2MUT9jkU5hh61xwhudW5LTTd6FS6LJHoYhzy9sBYbaceodQHGdbUGAoMrgiJxLA4ajahJh9",
  "key30": "5qPJ5vq5wjsusBD8nwQnT3Ce8qCxAPJkcEM4igaFkngZSm2s6hmMqEd6xRMCnw2QZMfhtQNA5Bo5BuHe1qLc5Bxu",
  "key31": "4JCUgZH6bzNKjTBhXQXL8WZVufQXuy1rNwSBynWMN1GABDaXrpuYBwtyY8KderqY2bsJUUQk6EqJRT179raeN1Gi",
  "key32": "hHDsX3cZ43x7wyKKEe6ykzTATSZ7MVw9tsFbZ8MzKYgAz9AP7ed1rY9sLxP8PaU4W21Enrc1gN8LdHowVgnVrri",
  "key33": "3c1Wg2PzQTCHoPu4wF1xtkTXf9csnhGWL4kjgdxoSXyDSFmFhouiDnMHNsaZR4Q5Xx9FqyQck5Akti6Yy9gZfsRW",
  "key34": "dWLKyAo4gZycUmAwA91o1CWK38Gn63shmTq3g3kpyr6BWkXe9hmWySTpM3de6QbfSw9HDUYbMgFw2nvaNbEkmzb",
  "key35": "4jKjdvEi3yVSFFNNmmdGR17CTDAjpkynq2iTiafGjiCZjPAiHTuybhrENsAuswonjNQBGtsUqypJ88kA8mygo3g7",
  "key36": "5kb9Qx4YCVoZ4ThkpwJzWBxsQzDzWs1vuvVugEgtuimCeZE2fi5mPcgzJj4mURx7ww2MSrUVsN1m7fXoELPpDFeW",
  "key37": "66ByEMTWKKTbTACABrLuindcDxpspVW3XYt364Wk4YgNH8yvwCUiVjPJJdv2WhGbXQRZe89Cw3TxY5MLZnFb5JiP",
  "key38": "57DoGKH6FMq9Pkb2uuzrWQLtdwkgyesB7i9CgNmYTGbTh58eiELJx4atLCB5fyxUkrNS3DsV7AciBUDE8yLp87BV"
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
