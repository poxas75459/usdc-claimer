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
    "5vHkuwWJ9f4dCDZRXiNsRqkAZpmRcKLkVmLAu1Ms8JXEU94cdCG3wH1Pcugy4u59s2gSs7FnGnyouvCb58o8akdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48oZK4z9zy7JhD5PVNQDrdKHEg2Fb32taHZXTQasPNSdMCr5C9fYWVDj5F72Aogs8MrPqHzaRQ5PoVw5fzQf8xYz",
  "key1": "4uhfXvLuCT3GpvmyeqJaLRpKVz3GnyBeA17mNvqZGL8EbCJG8ahP6jYAPn3REw9FbnJqhGFTuxwFWtnh1xVnnNsS",
  "key2": "2tstmv515HX3JMuzauSihc2RzA8qJk9FqSeKC9dbBCZZM3vfn8qEVc2inmDUK1x1SDyWgvbJYwbxYLtuEUULKgof",
  "key3": "2bquzGCKDGwwhDk387ybiRXASkY85WtU2z3CZdRNAz7iitpXkXPMQqKh76JVhZVCetsuA1wFbFGPWAc2EGYiRhhF",
  "key4": "5V8w1EkcavwE2uDxoVGbMT4jNJvy5QxVc1tQHzcVEgDaL3vppvQdSk3jUy8KQ2Jvs5CULev2FRAxH2Q33aJqbFmy",
  "key5": "36WMpgqs6SiMb7kGDsU259qVu6MUZ9z5b2i58FZM1MyjP9ujYTX9VDm92TvuGxJHjp9xyviFgGRyKiPLe3cnsHYT",
  "key6": "3TVhwKbSMHEUEV3iY2gw4NGLXGiD42scvuNZzyhRBDC4E2ftUjanxGpYHy8VXQG3SrP7QRmu8H98dSvrwKjSVugZ",
  "key7": "4q46qqCeGhE8te6CHfHLwBqLrUTdadBaBzx9vqB9urJxhRkW99PCMVNEeJ8DpHMCGc4c4JPeP9Pfa4QaPX42R436",
  "key8": "6NNXWmokv2JBBvAu3YytDt8TYH3sEkphvK1AVzVFjvRvvaipQjjtKfKRb6zWm6KGe9ESZPqX6yMggBfkmVFxJst",
  "key9": "4d4xZYiXtME9cT76CdLrx1Lk3y5gcuxazcp2vZetfzvJHW9vv5pXGKp4iPZzPAwzoWaozGzmXYU22DUEVg3pendK",
  "key10": "3n5aJMHCgQVcvHJPmdzoJtfT7jidRHoyg3Rt852F7HZGWB8cadNf2zcRDjdHM8LBX1jUFsB6aV7uRgeLxdVpJhzj",
  "key11": "4TPiUsV4a94gsNc4qogbrTzpdheCWVACr6YDDucEhLjQ5PTA17L98D4R3hfC8rPffnEnjed71Y4249m1ki4ZYY49",
  "key12": "591xZhyiHuEdSYhH2o9k36XgaPQM1ueCaBtif4V4RJMPobG4sCmHqiojj5TR1De8LnRA72YHBbKz2cCwrSR5HPVx",
  "key13": "3gND1wrx9bhHrMJzoeuU618L8bY9hUiViVyxxsDcqHnZa2u1785Z59M7RsevA8ByALP4roX63bbBHirGZXTYe4aM",
  "key14": "5zMTtfeQWG9r2g3y5MropmkdatcSFmKotDPFCtu4AbHihuypCHQJDpPHvPUC3v9UTn7jmKPAR1XjeDpG8b2eSyQb",
  "key15": "dJWEtsDgSbhh5sqUBVC2NW3ud6VCzMpi75B6FTWB1XNiiZcUGz9yqV4JfQakgBKwmLJs8cxSRRLp8ETEVxEXBRy",
  "key16": "2xRy9mFNgnnWTahBuM7zQwACNDWdbuyNGvvpZnovBoYLDtPsnYXYcBJvigWiWBCdZokvi1qJYZaiqr4F5heBYbfd",
  "key17": "2E4Rei4hkjt66hbYBsPY2wYA9sDBw17rmRzTyxhPCyWQrHjnxAoU6mbuCerbd1eyv7fP5xwY6pFeZshMCUAMATFi",
  "key18": "479MMmgp5xs7Hg2hhQUWhbufuNb6xmFq87WUpwpZn41U2FKQPcXoox2M8eaCV7QpkCfgeKDrjQgkMRaLE7PWMtWv",
  "key19": "kkx2XcZtfGugxmAw8wNJ7JQRNsYKpn6SXALoNj5RVdjJ4N4sBVJ6iu93eDzGNkWsayHVuEQYFoR9mE9z2ZqtmUe",
  "key20": "3wpMKYBbDDmsh5jF1qFwyRJmNUrABH1etpER83MAzM1FWAUqj1S3Tt7XZkg1WLcJeJjC7UUDpVBuwrTgSXLT8BFJ",
  "key21": "5LnZTjfemn6xUVU4keayDPdk2jRf28ko3sDJmbrgwRp5U1DJMXWdLbdjiuaoLFZhJe8Awhfnh6rwCrrNRoEmHoYx",
  "key22": "5mfhBnart3geb9iVbuyy8Sw9YfeV27UCh91HBpxZmeFKYTXQBCDvRD5GZXVSZsAn8TLAscE8Jxtz25Eciichj66X",
  "key23": "5yN6BhdLyEZmvt42ky9cS3jWgDUtn8gz5J5msg5YibQkMqFXkrJE7LbK7zSnzMrrtaicFgUR2M3KZxrEdnLACRvv",
  "key24": "274U6TEAggdcRgQfekrZX9WfceSYnajcSZTqtEnHHuVnBFw2eoC16k8G2weXqEZUGeEMf6d6MkSijNwSNRoWL1GZ",
  "key25": "2tteJSdkbDverPo4ZPoVK6GV8WgrnePRhEHSZ1jmBw4a9VpWXUUGnm7M8CzUaFCQjSkKxDUFLyLsydiefjf1NBhb",
  "key26": "2qNNVdGo6Xeg2txEMZK2MbGcFpMjRjMrsbKXPL2ZDY1eFhwUsR9s3sMmsg8Jz5qNm21xV2zP5VdPHMX8ReyyiXM6",
  "key27": "cX7Q7kCjxxeZbzf82XY2YejAQx1H1evu6mQ2N9YN3NdZwSEkgQxP47K1kZrrkffrj46P9xZV5VXdk8P8R8TUqzW",
  "key28": "3D8ExAq54bLXH5ybCDWiczHym9an3HDcsagMeSxfUGLjK6KdKD2bv3wQGG6Bz3TXERuJtjzU5yyRe3euzM6Cq3xo",
  "key29": "2NQS9ZL8kxLhBKw62EKjzZS2R6q9MKWZd5rZhCtE97UAFXC6yCPFAZwzQ1tXcyPGbCH8DWBVfiHKuDHqepZNucdf",
  "key30": "5A7NfxTHs4AEbY77QWoKJarB46QYLcVk571kA34Xfc6ccjEi4Y7jCGb9vPZNxpdy6S1XRjp3A4PcCiqUNJNLeB9w",
  "key31": "5HAZA4GroqYj45pLMwHbGQKQUshoZaf5vTpmQTU2YvHXUd8DBZxWZHcWG5j4yUYTkcMBGjsKta6JcrEkwK3ykzfb",
  "key32": "iMC345Xzhsfn54LVxKfMKohsBy1kTyfkwEWaV3jksB9BxTH8NcVvAYAJ1u3VBaLxrKqn5cZbLXY8Q8MYQJPidok",
  "key33": "5J4fcwp45kb7ngVpRw2qghiEACWo3iNEm4sCTExZ2shMx4dBkpoiAq2KKiQvFMFSjRmqTg7SYKezqZv2t9g5vr5V",
  "key34": "56ayRbqAYobJbM5hCbJNyn1jZzfCcm2cKzKkHUMLEi6u4HWin5Gb7qLxdFJasFG3vNpFid9ZCAASophQ7fJqsqWw",
  "key35": "3Za8Ltd5zshZR7jqghch6chuB7jNDB2BXSw4Rw6SrsEjvdNFrEqTFqPijCdr8kFTJGaN3hDmv353fzJXbUUk5i31",
  "key36": "CtfK9L4QApUhiLe4qT2QhqgNm2uPPc5rTEqz7TMw2rUCJpBSDUxBZxm4KpMXLXa37B9Y5FVRWovictLH4gTC19s",
  "key37": "4qypFJnb88SL5amE1UGhGnNeoQH37TbumxYavt3ZgSEEDkjGd5BKrQUFuYTFhZGpDGrdjXeN36SCr6ZmzRkTrmE4"
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
