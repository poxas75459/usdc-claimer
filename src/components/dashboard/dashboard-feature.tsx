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
    "5c1Er6DuKFvt7KG5GxdnZsCXyeRdCFUzQHhYWDAmHNyEMge11G763t1tSWxUnju9MG4eNARrFTGRUV4SWc4QoUL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2TL2BDqueh5W5TNgEPAqMiMmZ6PNgajLumezHDCDLTAwjB1uvtaAgkDAnWHkZ5kZWyiMafGJMCvcoMRZcpP51G",
  "key1": "fb9PGMYHpgcKnjicUmPSvEwkAqpyJYbbgieBS8e5daKyzbDw5YF9MxRE2TApVwdnjWhWHK1uhNAx9vxCKeDnKRC",
  "key2": "5w5zPreDJ1b6BDhBXEgjz6bMo8q58wV73gAi5PzXRzTpsgk9obZuwd4LWzKexTGL6MJa2XFvSrWM4h4NfRNA6RtQ",
  "key3": "3KPfiihDftXBUEaYciTFdCsHmToy7wYoLEDTU3aqsK6z8EjS6fdabKmSPwFvJk3tGnaRJzuKT23JAYW5Rbg9ZAug",
  "key4": "5bbZMBFJhgkT4dYGt53SYAgQ5yzXivBADSSfjKF5TNkQt5MBaWNoATt6utZ169ReUVAy4CJdmxM6aeikYrtwT9t3",
  "key5": "MCg2VZ81Z4Y52mLv86LL4DsHoQhpxuSXSF3MkBYPpP1DphSXc7Ba4rkNBdwyFsyptdPsPShre7a4EYEJRCy5dWf",
  "key6": "29Q13YNYsUWipBo6uWFxyeooYAYCNu1E14jbykgmSd7bVyVJN7YNdyPJaJupY7YW2SRALeQfJN8iFsqi7byGdHoB",
  "key7": "5yiZpZiHHgc98ZHb2cpYeudQs2heSUcbxxvfEE9uzgrUuVTPXdsNvkYWQz6wDaZJqemKBVoYTdJ7aB5d6vZMJFtX",
  "key8": "5rggtnQJkYVcTqwBdk2L3et85YdXM9u51CbtiJAywQUDxPmkEab6D4DiQzWVbMqe9UNTdRD8n7xG6QvoYFFR9FaG",
  "key9": "665g5ekycnGewGA9mwosmWLLs3HfnQAoGw3E8qqdYpCzBbqnKDmAG2USbPHkMyLPGVoqphmPBG3n1EHGDMZyuB1w",
  "key10": "3q1DnETEdAicRQVjvPca3xhEjiZT3zFU9ZdRJYRjpawPbEfZBJP5S9TuyzGKC2bDjhrrXocgjfL9NNcwWuMDVETc",
  "key11": "5j3VH8WPc6zMq7rYMJHGWttg8afh4gyghHDK5toJRais9dQRKSSECSL4k4wgubhV2s2CoDXZpbA7GF7wisia8Waz",
  "key12": "5hzxuBHoKbWJE3UMmC2ZC4dJegbfazbTG5AD6WLVockdfoRawn7M7PPs5Jvue9m6ojVs4wWc4EMcj8RVzb8XJ4mR",
  "key13": "5ne6mYHdbe1kxDStbq5zEfYqFJzBSie5Gu5mxuHXAbnpumeasexMcyhzpX7vGvdi76sihsQko71Qx88qjtji4Bn4",
  "key14": "3dRX5fWn2miK7mJQUWhACCXohsjCg59gMS6Fzigs4pzpimcvs8L8q21XVaiHwD3AShhdZPZkRNXWvjNKuxJtAgQo",
  "key15": "7T8NR5S6QARuVbAj3ePUsbKu2BePxT5q26crRdtv1WjS9GZGR4NE3WAHRyb4QVjqsDnvk5NKE4b1KJWX2BuYb19",
  "key16": "2o2wUQSRjZLTdYYG7UZyxr6PZa7A7MPe5sP72VNQkprFbhD9b4tJ2T9A8iafuWGQeVwWgF2U7oQYDZVa6GRVBUJz",
  "key17": "4pZ1BHmQhUhpoHHTyevtwy5wpywVUmeD2ykdvzE73ec2Kp4riWtLAUHXKtN7GTHEjFFfgGV9y2xcsyH5SqhJ3U5c",
  "key18": "5SPdd3RdGckt7ym2yoJUmirE9AapwBFMAArHM1T2s1n1iXCTR28ZvZQuavkGt8XcTCb6QEqWUmXkkV3cE7Wm7N3P",
  "key19": "7vnDcQA3jPDAfX4PBd4XbN1EVq2EZX6X2JKTS7ZYJdx6C12HBrkvEG8DryScDvstfAaqwoK8bEEELj7hoDNER2z",
  "key20": "5ypPRWGrampXVdVkLJNsAwrUhhTv6fadsDxg3MGVFXp5dH2vbjR7VqLcFgJMJnCKVEQ4TDyawzVTkhXtsH6UJVeR",
  "key21": "5dBMgadiTD8QTvkXpTZM23ucq2hxc4EnBJXsvx5XTxT4w4GHTJCayZBSPRh3z5Vb6EvUhTd48CYRvEFhi11rhiWV",
  "key22": "4QUMuMPTccFed7AYhcTn47dqopTAsCSG1WQkBiBm8fJsxADCDM5MRdTZ5sb1Eeu8aySM4df4RsupCzncKGE1aY78",
  "key23": "53RPrZPxmtZi6nvud6rBkAvf3tK522ntXnuJvm9CJdYNwef2qQsFv5sH2MmWxZYnNX1BGPS578k91XHt2rEgBm4U",
  "key24": "67THWpcpmicAgN8xjPFb79up8Kexng35sPfDKospnLNXpUbnNj2AMBXAp2sLjX5g9UqCLWXZryoU8Rq4DRviSkEG",
  "key25": "2NDfX1WT2Nh1m1F9t2bvd8Pe1q3G9mthMrk8cjr543A4rWTrKRJ9mgfDhg3FreJor4TWB8pjxKFvHERLWcKgpajb",
  "key26": "5qXTgEKEvWTvNzWxHEEKp7Keg5ab6s5HQa9swaFLnLAiuhQHETHFK8XhnvwJzk5wvcpsDXGGXSBW3B6GVbJoYytQ",
  "key27": "Z5WgLVwBMsSrRLMQumSm4WhTECxZv3UfxTwp24zDo95x4CWc8HH51QCdZH3GCynDgPHNhsux284S1YE7GHigUYV",
  "key28": "258bkpoxq9V96sKe96MC44xZew1bHXR3bDzeWe92MB8bZQTdfUVoZUc3Xvdxdans8xCQL4wWu6YSQ5qY3m6reXAd",
  "key29": "3g8SwdNku48a6JRW2mN2aYGVDQLjavLsfESBwx2trURg5S1dvtGRWPKHUZM6LRQYKSTAmAZXy7u6YfGPPjEhXtmU",
  "key30": "YJvfns72UHrE3RBCsZFUiw14CwWADkJvt2X6cKgzQtsf511yCRgHUt9kSp7dzHEEnytff3Q2gQoHNseBJPqxrkF",
  "key31": "hNZxrVktCDgtj2USbjQeTWsqA6oWQfRccCxq3xcxa81BHsAoPB1mtWLL9Jby3LAEmYFSYiAz2C9dXrgsKfUiYi8",
  "key32": "3uC9m19oHXDdU6TgZcb5romNkJoNw7ULqiYL523ZxLhDDZRsE5KQ5RSC684x8KTLc8hAvjp1dv8zLzzHi4cvJpx9",
  "key33": "61WQDK1kyVdQ5Q2a62n6Amr9cL17UKnEFM9XWfSMZHYXoFvSmoe7qpubA1qes7zXF83UPDc66oyhz29QsGMETMrf",
  "key34": "4qU8Z29Ks6bymQYdjoy78R9WLhWREs69voBWkJZG8FMK5r3HMP2a7awM95vCu1Jpj3iqAq872Xjqdoy36QyAPiEX",
  "key35": "2gbd1VSSKDVNLbaB4T8uKncYUeGR9EkMWMmUaiZ7fQ6iGedee9HKk1mV6eo3xvfh8PmodJskRpotE45WKE7QHaT9",
  "key36": "3ELxKD6fJgLKXzvJNRzfHPEWUA23pmvJ6J8rRNXrDfWaVDxMsjVkYqHAa7hApADuQ1Z44hCoAVTPT3ZtESWe1qWU"
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
