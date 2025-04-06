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
    "3TMK3BYemyRLMbKQoXTrfsG47ScdtA7RMecNALPTFdDvdsusX8FrRTVi1JyuTVuoEzkmhEE56zWbbXSQT6cNn1D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNT5nENSboiRLkkZXgQQ1Sb16iGdfT2ebbaKs59yYfBroLhYtxNit1ptEALhguxqNnsSM2AGLjxc2ycCqNesF3D",
  "key1": "4Pyhbp7bTDv8b4UpLFoURYjpN6biZV3tDoZ7jDiRSRWhbkeXwj64QFt1ZWJniLrznuduqE7fazbjxSdVnN1fnthN",
  "key2": "4e2pZcchpxM9knUEUUJd52Ms1AaU3k929e9uR4imkJb5hZ1TRacZxs99LnvHLh5Kgu26SmkJLoLX8p5y3VKHAL3n",
  "key3": "3UyKDPmEGeptR5L2r41MiKdXK7J4zkEmrf7rBbLAoiMyHTfeyFqo77EzuSn98QGVhrPG4j8B9k7iE2sgwFDq5C8C",
  "key4": "5GL8js8g68c1xPNbZQabzk7iuEWoX1f3TxrKTEF5Y4onDHAz6xnLhtGqBwATHLavxsKPU7KhqqXz7wq954DKMYRp",
  "key5": "5uvetRC1GXjPKxqxLZ5Zu3hPPCamqrdtJDhHV9FH7hnqwjjtAyFLruyCdh8fbPBYBMB2YkxLWQP9dNWGffArtcrv",
  "key6": "2xNM9oR5FB2rvctaiPiBRXMhfnDw8kxDrdVZGQ7X9TkxDTjjwaPMDjCymRkRreYuEFCMEfXFyWFHdaZ8oKvXL1iA",
  "key7": "5tsUMJDHx5qTZiD3wfk3V1q7ShNHhPbB1heiS1afAPnwyeZVLfW9JBPCDKoDGMPYTkpjjcie8maaswC9qyXos2x2",
  "key8": "5njGPiLdYsbwmyac8gNqUmdNh7rGP3n3DBAxinSJdYWzaVK6cuTwthK9pV3T9FAH5CggF6vgXUoiJMv7J4ToJ9CX",
  "key9": "2DJR2UATqBvFWMZkLKitdG5npPwLtPp2anHzLP85CHs8kDpdFvCPQsdQ1EzNZxLHZxnbq4V8Dk71ps3rhX3Dvsyc",
  "key10": "hSCLTryFEWdAPDAxVGQigfVZa5o19wKQVQy6Bka7seonTPBjm8s3Ec3i6ARnfot8JZCasR3s8Fp4Dn3sSMpHGdF",
  "key11": "JNy1VmoNJVnwcCWba9uUvyyLzhKX4tEFsuyrEuK75iFSBjsYrxxuUyrBmEpXxQ6RrrySYwydUZWGookjboEfW88",
  "key12": "4evTAAvyxgSKb1yGvdnMcofFUiBqm4R6YpFCYy1RQWboBMkbGvru49Uo2ueTKEa4dQ2BeqK8xNockziwfkxcwb39",
  "key13": "4FgJwe5kqfCs3gzFxXDam439S2eZb3TUryp9yTTNi1KVTsv9w6JwgVDmtRFpWQtcyD3Phqf1D4M6y928PyDS5zRw",
  "key14": "58ipaMVnWrifgrLhyC5tXZxiBCh6P9tstUwa7GCy3i3QxM7yv7GNzcLjHKKEzSxh67MJQ4PfHzmg9Y97oQFSy55M",
  "key15": "N1n9L9P4ZBJdW99T1i7LfZzbSz5StQm89d91tjHSXV2Z35A874V7JxpWvDxvbcZk9RDY81tfcqEzCi9zpRRkQDt",
  "key16": "5vjG6gHAHENg6cbj81VeYmoMgEk6qtYTByWaku5ptYZpAm1t1nG9Ygohm55Hoz5TUqkZCB3jTiBhyBcbm1KcFtMb",
  "key17": "2EXN6TdqMGL1U6FU4TCjEBLzPyA3srFSbu36CyfKDEyd5fZfxZtnkDCftQx65EbTxrxNzFVkHVLTna4hPo9Exr6Q",
  "key18": "4jSPY5Mpp4kRYCyZ3dm1dKKxBQeGUZwaST5QWQY5osbf6vuELTtnXJkEmtzHCwwrF5yGtER9Rj5URRCru7FZi9Xb",
  "key19": "2URqKWB14K2RnG1mqiBcLo3yLkP7qopwkiNvCsBF4VfPk59h21Pd4z79a1pwVuS4Ng4LiAByuL6BDNrjUCro7YS2",
  "key20": "5LTpRoyB1Qs41w2qZTE7YP14iTLCVEMaWCtZhBrCouGS9gPYaLTb39kKwuvFekmFppE9LovXfEDKktAK4iYPdpuq",
  "key21": "5EX3P81LBsXPKui4VFcmSYWFPxRDzBY4V79KRiwJ1TviQXcoYWLYcES2GAB3Gz7Le2f2eChpsNxdf9D8PdbDDGTx",
  "key22": "2b4DjnxSUYpYhXLQoaVPSvWa3vo97pNjmAfKnRkc5xH4d7saJM2MmLdweNbyy3CkFYCWE7UuxV4kDRsSB8rbQtXo",
  "key23": "3gGPbt2FDbKairvXxyNSBuja5cyXVfdGN8AgfpHp7XzL72sbkNSnVYVtd9XXYb3hMK29zP72uYA1qH7DiqSaciZM",
  "key24": "5DBcHhotfpEdiNQGp7QBLjUHc3RtNY89ya3mgja7gRKxtt9fVwnLauqH4smcpyJesj9UJSaESaCLZjyfCchHs9XD",
  "key25": "4EjusERREzPQWUjgAtn5gA3TQ44pn5i3F8Q9AepokkDWSHnR4TxGVRGrr1kBXyACqnLxynDR4vkqbEfeYMQZ3K4q",
  "key26": "KdD8ERY1diYhSdwp2CL855bUxi2docckc7qdtU6nvpoZjcqXmZSrE9GUuX9jGz7DyGNq1hK9PKs5rvP8Y4RBcRn",
  "key27": "ceGntz197RXFJjtYswKqe6jryEXeeGt3hs81sz9SsCbcpFdFY3uRJtjgEebiVghdch6QeTLxFMNCEXLzPPhhNCt",
  "key28": "Rw7Tz4xwSRTiV6gBYcLL7kHDVARgfKRJ89tYG5mVHkms3Ca1JHT331iRStmUTtkFs2NyLTxMuNh2Vx4C385CrsM",
  "key29": "33mZeA2URcoCZK5PHczQ9QvxrPYgEy8sGVyHuzYJDNp9u2RXVJp8ZPJJXv9kj4CTWT18k4rux6xSBywBRANyyEzp",
  "key30": "5DqY8m9GTGgw4pugHtdV8QHfmNn7jDBKmy2L8n6qFwkiNi7N2VR5fAVxwFwr72k3ZCS9ceHffJdxNQ6tS2UJGNsr",
  "key31": "5bLbLa2kWWjumRhSfBPqnWnt2QjpVFGKDiz6Asp8UrJwcqyaw9ywbnRkW1ygm7QDSF8H5UKpQrsfEG4cpqhj2UNN",
  "key32": "41XVj1wMbUCdwyASGVxaWb1BBQkwg8Kenc2u9Rb3gEsfV73P1bkGuHDmxvpFcx2JGNKXUMcRrjad3eVWD8WPjWTr",
  "key33": "4DPfahotCDi4mUjqGdQwbeogyuWdCUroRxuHbf9yHn1ZawqoizVCerduafLZdWWmHawAKyghJBbRuWvMtWtKkXLb",
  "key34": "2KfPZBK422ydDsquZJZdHz8Xq5tnGsK7ZTPuUcV8DTGzNbFAjQZdNJjPQJReP4JUqYPtQkDyck1E2NY456UQYK5A",
  "key35": "2z1ehFNW9b3KTGtK3PkBHvcY31hTurf2mwoEmnofSbJEZ3feJBwVRhzKuFKFYjSYBf2SP6MP5rqtVUaV1D36pQvS",
  "key36": "yD8HApV5Snxhfb1UwqoZBsV5YEanQSUDLaMMHcCWFYUYphi5bkXHvy8GS7cT4VdJKPXi38gSTpsCXDkr1ETSCxj",
  "key37": "3NyGzMvP6QvvDpCCCsL7vxT4QjUr8N8oAguuZVppUgbDvhE668WsysmKGgpJvL22SJ7SiwiDVKUjiGANdaAYJQ3X",
  "key38": "5F4Mrc1KkXzjH2oWtS4afW5hpknfX4hrro4ocHGrtudYhNEb1Pjn43fujSR56aY4BfduhSghN1VekMMkf2F5s71b",
  "key39": "3hAbTgz4ZGyP4A6kqqRFYAFqpaRjj4isdLx3kziKhe7L1VK3nNfQ9dxrooRGKRNP1RJ554K5fvqfgJUAMGxKhvvB",
  "key40": "2wS8tRRtMJEjGMm6gQyH5Z5Mz4JbC2i9aqLJC9HCSmSU8bnkkAoAnQAp2FxdMio1oS2fLxF9ZtHfKJrjwQVVoBe7",
  "key41": "4edBSknzqRSjcn9jgRdsZNrDvMUh4aeukuRobJKtwp27YFJhFdfBEHTmcYSw8j9QPrECmcXPBS9gdyzqhWrgMrGK",
  "key42": "4fQeUeoqTAgvJ8EkV9JVg4phBQ41o9jq9SBAXieibUc2Jb2Hnt1czAwJBgtaBbBUZGgb5CoebhN79a2TVfsh5vxJ",
  "key43": "4qpgdRyEwAtYxCAt39QHH7oGRKeXzPFHHS28mBNtt56XdHNmkAHhAERkKfJPZLZXqp2UeVWCtwmQBfhdhL55Geou",
  "key44": "3wQ5S1SyxpR9xF3GeBt8dJ4TwSBtapFcWyz5pXr3DxgHoCXiZ9ZEiDjakstB6K4oCRTw1YFSDJKWtEuUwrmTYxUm",
  "key45": "4gCEAiBui3bvnoiE8doeF7WGSvuDMCbnDZKxD8X4qrrzazNtUuX9w89iZqnoADhHtsEZHuf4wmEHUZNn6f3HxaZo"
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
