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
    "zbzjQJnYinWBj6sGmvDUjtnocAvHjeBdS3BUogocswvGZqYFyW99CYok4tjerPKiXbHoTv6YrtSoVArYuzBMfvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzhBzxqDK6HUruq3RBAmDTSEU8PBR2Rqb31Wu51TRGhhSNQ1vgnrtg5RB162Tet4qRSfMbxDZktBqtgBzBzAzP3",
  "key1": "BKhBGTSGq3HgPacabm4jZD4ZMcP87Je3MjAGj8FcJnfoRT7rX4Wr7CXRv3SdLBTAX8y2mtu25yh76FVJXRztLnG",
  "key2": "4L3wuyDGuiFZaaHeG2TCNEy12e1eujWNtMPpT9ben2jNtAhKFVfayqdwzt7P3cfmESwECX7X4YLEkjwSePZW8Grt",
  "key3": "3TxT6kZnZhj57CRmTNQFeNH6NiaV8JbdUB2P3EQ7VBdU7nEttWReRo25uULhACBL6LxYuApzdoTWkkA6wUeJGBai",
  "key4": "5im2H9MPjL6EgiAzWUQCMFmdujH4dsawndErKuLDV4B12XqruGfmAMzHeJ59UAtgoeUNRxSHzoTanY8uR8R19yHw",
  "key5": "4LECvXPEHtHdjGsxoNYsQV2KmZ8ABzZdguZddcKk41Wa9GSF6i6DJf8ddNnLiqhpAYCmpPn7QrgjndjeRWC3hEUv",
  "key6": "2Pp8eJvGyc28UB69ZLpJTGERYu8dKrqZMkN2cEzURjTxdv4jKDivsQMWesubBU2yhYtxBAydQuNBGHYNmxP2uoUD",
  "key7": "5SyoKgCE3wRawuiVh6AtkBWE5m37rJMnXYUQ6j7aW4juPf2TLJjq2AjHuMH3f8QpMFAZhwedQP1FXVELA2SGgE9",
  "key8": "2hoX31zeuiwsuKYBAEkQERjMuhfzigYkjbuqjCavoCJaFbRzTnKyu68cJ3QCVdJCf8KijFtPGhpG6cRsaJvitW3Z",
  "key9": "2WFm63G5fXtjZUdG26FK78xSmVkrTN8fnTcc9hkmh8JAPetdDdNDxHwhYo1iPDgAVtSJNppXShLsVphBuSrcxHHo",
  "key10": "27ePGA1UoBZdNaTvwMx5TFxbkbuv5tv52sJ4arE29L4CiCz4Gfz5C4xtFC46C9ZtEwzsPUME7iNwgapUqMWxEZRd",
  "key11": "3ZYQuwauAgFsprQ9hx7aTKG76PfvhzZDxA75ShLnmBvU7DjDL2yifZzo1z9SQuAokx1dGUsB3xEznGnoUvkBq4GR",
  "key12": "2b2vCu7CEWq3z9YJVDZdYLMv3jDSyQ61fcHFd2YD5gQryNpf2etWhUBx57Gir1AhaxCqAdaxX1jbbfbirQ67s5Ax",
  "key13": "KVGpfejPW9s5JXVoZS9km2LY2rM3ptozAoP3xDEY7Pxn6vDabfYyxsqBP9U7HWCaq92fGbWsHhaiGn78CnNv21J",
  "key14": "SXgVs4eJhzNkSbQoSWM6DWUNq8Xgh8TqJe5Pxzij9Ww4VUcxx5AjNm4CLbAr3DpCtQr7M6MJkzjdnBeB7Tz9GeU",
  "key15": "ppLKHNnQYiyaGF9mia69m39mJmD3rvzuV2PH9F93XF3CsCCCh4iGsQyPXMpL8Jbhxyrr8jpdZfgyQBfvVPzQ2MA",
  "key16": "5dd8TCDTXi1xes46c7tPnGMc8hmEUGhwG1mEErTqJfsuFddvC9jYFA7YNzDv2WqojuKnSJdQVE489GhmfGzn44wH",
  "key17": "5Vxb53MftqBJa1fERrrixGFepLT7UJ1mrodXfU7unaRqq9o4gVN8p4KEFYkRBrtDCRUTj2HFfmm6GHwNPHrPCMBs",
  "key18": "5C8X4th6AQf2LU9LdnrvQunF7JssyJw6X3C89BdL68WfTpGCcGmRGLr8uFHV9Hjb9KGCdcvvTbe1h36rQeZ12jxb",
  "key19": "4tmdR2xtZMp1rrvMortJHpypgjtX8enWHRZEzzUsYQPcV8DgHmUkNBqbz6xNWqBJTJw42eCg2e7bm3HkKviZGQ7V",
  "key20": "245VDJpGnjf3E5LHDE3XLsnQmTQX58ChpkdKWBMKjxvvZ4TvAyjErsLMD4kSmkdvHVvbWgGmmBeLMovSQKnTmJQW",
  "key21": "5gPq3X275TBWzhcGhkWoRgbd3Q2x1by9RVEftwccpWY2BHNihXJpgsCTrUALoS4HJDRWpQZahJLupZMk7xDANeNP",
  "key22": "2a3u3T4pUQtfatsV2RrBWPVFqmU9gqPjANpjHPP4FAZFWsHxAXi6UxXqd5yi1sCrMSS621SpgBgxBB32RSTEVXjy",
  "key23": "3NcewKRJo1tnajwggU2jNrhS2gm36qdwv5jthCDkr6K1FMHMvzPruHZGhrGJacgtHZGwidWaBtLWDcgKxuBL72Vj",
  "key24": "5Yo4vNF1LTygeDrYpwThZxSKpnU7eG5YKu7MEEaEJuNNF69k6o9CkQpETsTdgG4ogUJdgfziLCfaVYpvRNxLHiCM",
  "key25": "2HFvFh3ifQanN7Qw5S7NH61ACUUrzG7SHbK1Tq1QSGt1ZsbkztXLTt86UmZ7nze4s6Z7mn5qhb3dq5Ln36ZM7Qi7",
  "key26": "231yrF2GfL7Jcv4BnB3MEfXM8H1skpaMWZkvfMuPT5LguA352RY6o9GsBdXqmXTM5YcstW7HUj2H1zLtPN75dzrF",
  "key27": "5x5fRxLd7doGRBW5KG6xqBaECfC5kiRTMMCSHckKb5yJrVhzH6rGjsFVhMgeAiBnBpcP4oFw4QLmvnrkQZ8PpKQh",
  "key28": "4qcWikro8umtLPAenSdQSXQjmmthr94Rp8k1BJBqpenDJRFKY47Jdnod29NQEicFY6WydvtvsZgkmP8X3bRCfwQa",
  "key29": "4xvPuJ9vz4RdCH5i86BfqmhQPW318b4FKjNc2XbPkeaSvoH7ZZnaMuwFWWpJY13kzSWVHzdTR4W9N9Nse8czWrez",
  "key30": "2EggrrQPDiMXPmPnGVgZkZnW4psDWKPhuD81yFDApBGHbH3dKzPUByVhb4mp2yDTLpk2UU6ngv1xrP75mFhzHEVj",
  "key31": "5MzaaiMybDqWXgN7Q6pHjnBh3vq96CTRiXiDNGSXKUyN9VELuqWkh71qbXZM3Ty5f6xG2uTzptkFUzLsAiBL1s4S",
  "key32": "XVHEu1LCX93eyeU3sT24cXbtBJQmZbwRvkrfW2iyp4z4sHPx9MDv2fzp2LkyD3nNSoLvBT6crZWqLD5GgJE1rkH",
  "key33": "eyXc1yjA8cKMGVYmFJ6WzBhi1VnZ4PhmCRe9xD4ZffGprCn4AnUbjk3BsLo5kPbL2L8WEASQ3XmwCY7d1tBwH4k",
  "key34": "5LmBp8ybd1jvXiSrGzQagNEWiduK5qUG1N8JFF8fXPK6Dv8qaxVa7cADZxMLkiKEVZnEy4VvYoUWd1VNrQ3oxF2y",
  "key35": "2TH9H13w6kpnyYE3FdMgii75aMBGnupSvadDfaY1jkiyeNaDvn8SNCrBy7aqWqQ9Ju4G2K4rV445qirsouDHqpkT",
  "key36": "3ASVLFsMFMrf8VzW4MaSbQmFQ4L7eWeRAFocmjCpmeH1wRLYXtNTU937SJJ4qmBbQUtcs2gsDM8TnxTYFKG44mVE",
  "key37": "5uPqFSMp3dz5eUtKX8wTkkMBNCFYxNnNX8qfXGy2ED3Fbb6fuLYFoa1ttEXwKEFyYjNgtEMbhoHD7JUtp415imgE",
  "key38": "2PJrBjdQE7U1daZw7bgJH5LiPQfbdqMdh2Mf5ZLhiC4hjzazUjnKMxsXCKQ35m1M9CHQyEaptE7F1PqhqBsWBFHt",
  "key39": "rF3e2BHW4LeRbKwoEXT1xoJQzVUL57mxzEpNMgtmrcDyDAX9cdELhNFeXKmvj4HwP2nDj7UxD5hCQdcb8rBJ2Mc",
  "key40": "JPVhN8cm3v7j7KCgLu9vGHXALYout3f6WUzCqm46Ye3wjEkSXKmi4ritZP9j9ZnjQua8YMfXToEmXcMwbsxKJGN",
  "key41": "4jxuXLN8esQF3qHNiPvu8HM5eYEWG5oW1vrGiM4KTkCXpQMDyTpohbTCyQwzseRQHDJ7CSGDJXD11BE5Tpnvsi5M"
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
