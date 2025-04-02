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
    "3nxjusegMuAw6Q68VSBtnLEJQHHGGDAbZ7o2ng7qmKfJgiCKYV71gXuNjgMkEVpkjS2HE6saPHWj6rqx89fY8xkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43P3iWFLGNdrNrZshsF2bN43MbPBsdyLiYVJjeMWyVXAqfjzaiYpkZ7bhSaFcjXHUPSASmEkg66knSQdN5GZijtz",
  "key1": "5Gb6e46BUVkwnQxSKUYMFFMafcW5YZRcu479GTNL3pzCjnARp3EWrN7QThG5AxDodZZQmZKBNnABtGEuGf2XMRX2",
  "key2": "5dfci3vMsKhvsQMXu1hRvaMygQvg815j6AMTvWM9KVwU9zvUGKbyB5XbdmwwURfRpdqGuUCaAomuJjzFBNyTq4Vs",
  "key3": "5XLDyhuRMDPMATw1BJLAG9GiAV2ez4LYR54dobCSHM5K3mCoXkSjfzJKguzZy4o16Bk7oa43vPGG7hEvQi4uCv3h",
  "key4": "5Lg25BQuJactHj8uj7yN6XvE98d1ghkvcodkngubLyY9eXzYxvZuQPZvbPnsHfVkCyrpazRMmzPDqAWCwsVGQME2",
  "key5": "4DwcbEfSjeq9mUd7cFuWJ6eoDHgEdXemntbErEo72YNDbV4jgut32XamqJQpdG5XeCrfgKD89S9y2Gve1AdchMjd",
  "key6": "6rH2PaBRvjGZiPycF9DVBhNVfsqQeCwsjSMG1Cywx5KNxVuVkQDGfce5hcSxRDczr13yKK6qfWoxiajAzBa2Q5f",
  "key7": "2a5Wdseb3GjNTy8W7QxZgkTsW4YL7GGZfYX6K6mGZhajxeUmgmX2z8zjfAY7EhSTrViJybR5EsDRf6yYeNCZTbuJ",
  "key8": "WaXy3GQMQ1sFkCSjPpUR1qi6bFnzmaVNjBseXPxNmJoUUkQ3zXdD3SErsQt2uGndDc85PA1xfoBsWuRSAb5w4dy",
  "key9": "4atJqumRj3CVyvKiQv2ZVVeNMPVJjr8mapGaimJ84W38gkjhsCfHEycZKfmT9BGsqwNrps9tfAi87NHz2eNanp3E",
  "key10": "65L8ewHGY2susemciTMKGHgxSHa7pCCft6eL6yMKyTV7nwDSQ8kUuJP2EJnr4WQK7hkd41drR91hzsRFVi9ZVzPk",
  "key11": "4wZTScPzcsxLYKUWUpykkBziVJLjFYsTd2bL4kMkpSimAr24fZNzAs1TgDynfyusbjUMrXyrvs8BvPFdg1b4iyiq",
  "key12": "2im9vcGYFrs4dSTaZCHuajRWVgrJjP4aWsNhHFyp72kYJuTsDEAEL1UwBMeXivbXVpNpPNGmc4dsoBJLUCvcVDfQ",
  "key13": "4BPvs8JfqrxcLmgwPz9RUUWi2dTnN1g3eFr7ucMhgRuX2tVhJSxeMzwfLDcdzRaZVWcseNnA6FCJCu8h2LdyZaiz",
  "key14": "3X9xpz5G8osfzi2Y6i9x54WkHoNadCdcfSAtYJdEnpHApEYEV1TyBQPrntDU6QiLaPWzdvA5wr5ThYdYSXZfQmZZ",
  "key15": "3sev3zL2PemunJwCP3Eat7WmFEPkQNoiCrswSMkTUQKt15mR8GwvpY9RYTu25fH1zptAP7Lr65eKnHRw1K5ZhL7W",
  "key16": "57QYqYVeD2tkyj8JZFgo8uDvvcesicKiKFM41qWem9ZsytQKyyuGUKU4is1qtewdqQNzELfbeMnmPqF92wVG3VmY",
  "key17": "282SkwteG7T5SpZw7Ywbc2V3RHhbMY1BmuqLrqCSgqTQEfH1oZz9BNmAi9zASeagPTkUAajhxeGzDP4zkWLmXu6e",
  "key18": "63JkzwA5uwJpsp3zBamM9c2auF3x8oF7LTBZCSiuQKumtmekE8FygQL9ddqnwwWUgAjtdhQiT9zaLLmo8DDmbh7u",
  "key19": "4ZYJXP4Z3CEi5ZkujZbVCy3KYduLJZB9gjqaxniSeh8ceiuwPzBzww7AD5XiYMfJh3RN9Exsb7BKquRGFhRcF8Dt",
  "key20": "285TMxq4xEwj9KBPcwnaKx47mCuXzMq9NvXurDKR3K4W2DRqaEXZAYDWguNqmMn2SVYCUsNu7KRe967GqPDCT84j",
  "key21": "rjU6EugiYiw9XxT7vTAe2QFdvzAaDY1B5AwR1WQmv2r7zqDYGZZYq4x9yL6n7G8abLQxJrzjJqm4RJBYENPX9BD",
  "key22": "24hJqyyAqbBNJnM6LjZKcWzG47m5wcbUCXnj82ZSrESi6A2gxEtFgqpaTjbeCebtY2tcC6bkYhcexTAZtZXJrf5N",
  "key23": "4hPqWr7cth9Y2dHE15iXSh5qbVSUrMd3mKG4zn1AbCe34R8xeAuU5d1BBWa2B62ZGTVdJPrxaqTLpsaaaWwPxSgv",
  "key24": "5ik76PPz9AX4oaHWfUnwpc77a4do1sHryaP2jW2QmKpEYCnVVc6hwcoNciQxYpuSxMjUVA6jUHenCc5tpfZu44h",
  "key25": "3kaR7GVKHtZQjyCx4JsZvSgwHyNe5ZxNsGCYacU6Kida2vES6tFC3HYGiAYfhNPXECZSqWBycmnuv92VNADEMwg5",
  "key26": "5fH2NZ4Mz5CzYoxYCFTyQqXxKEhZ7EJvzRVvQBr5CaNZXmkbHNYQUUfd433Zxc2vNueVGCoxQRZKiw9gg76kgm9F",
  "key27": "3NJUaHw2weGhSNZddaGWZLoF35zXdQFqE5MmBHJHFm4m8iNXHdiukqrdnjLf9258BtRqftDBDDMGPTiMhDg6XhUq",
  "key28": "4JKKPRv5rzJATfNJTUZ6orngBMECroiYmVnmHjg7cmcTgZzFK3jwDu8YNpfWcmSGYES87G1gLbV1yxbq4gv1spM4",
  "key29": "5TaJA7FBygNUE87sahEGAe9PCybCaPJ15RgTsMdeckyBf5EnuxvoRms2noMoVP1jRhZgVmswdcGjjyM1aBi8g5di",
  "key30": "JdggsqKsPrRq54HgALb52bSf5rSfppLvbCy3jhdu4PJegZ6PhrimfVsRRXVUJN9gky4s2V62EcEZvrWfngFqQib",
  "key31": "4shDG8PUHFzVUStFao2LRDCELr35aESFgvbadB4LnK3NuqvCy2zrwJkgiqCL7wLPW9JwRBRLdydq4WKoX8F9TQ4M",
  "key32": "5RFKz4G7v4CJDYN666rw924By8n1yw1DNmEp6VUZFf74zohSbgdoFo73sNwUTvx4QYMngGgVsYxpSruaWXSCJxQQ",
  "key33": "3xPQ2vWT4sq7pMkJfcVTEQFLDBuZEryFEag69WCoMqj6YQAUGrjnGU9h7yeewnADdiWT47bvkxhFZqGV2zMuAHxj",
  "key34": "5ZiRmYwYisgs7TuBoFZmLaXZ1LQ8Ei4cAzRzWW6iezdFVqNt2F7RoRZing5mPR8gtxbHYbfmBQCFUikX12uzgoVf",
  "key35": "3Mmc7e6LJspMNFWSyzbuDgQcJiGQwzVAV9hNrmWmPoGCLuD8YrtS2isyp5DAQdT39KjPcAvPuFak8BLn975UueFd",
  "key36": "5VgxDpqAUDikaaA8bB3uMt2pwL3LJs71CTbdAHgZcH2gsJQExCMUvu1xnjCo25hWmQoKe2NvS3kiMUVU1UjVKQdn",
  "key37": "sUSVtpUKwkaRqdwdKdiq1wmLgbBdfKXuicAzz6qvt17tnuVfcVJgtKDwFzEj6i92HLUE26hz9kfBJhwZbdVLfor",
  "key38": "2zQTfXHT8iueqfwnCMyYtJDk4BXZz7QSQJpNiS3XrdVbgxpJuEERrAMmg5GMsVME828K4zJKa14tmL3hgqsUqmUs",
  "key39": "nMmXGrC1yryd6bc3k7xRywmzQuo8RNot9mvQZgT51pN4xUKvdoPCFU3dShmhtkWtsSywnoakFVWv6uqdKLDL8tX",
  "key40": "4mL3gyUeNNQum1YbYYWYmyCaQnsBQZwCDvCUokog2oivFZVNGBqkiniedx4z9V2nKnGyfkFcuempzt25ktqUM3Ze",
  "key41": "5EysVuevmBEqmQ3mFnzY2qf6VgPjGFVNkN543sbrfsffUGh963bcw37vBfPJQ5cEmLqyudhBCEoT3J8ppGgs44BJ",
  "key42": "5ABog8B1eUgjkXvv85vX5jXpjrnzp6ac8PCYFuGcT7KHvodXZHThgdF3mjUJV9pv3Rf4hhWR5naJNBHaY1JNHa8m",
  "key43": "2H8md3g4EKVqJFXNh1CoSYyK1imheRBN9ZWjB9d8ctDkh72NJDnACgKt4LHk5q2RCCQVsAfgX71FAVC1Tc7Hhtxn",
  "key44": "4BTWBTNzagk4pc6adrrRKs59iVHgBwYDCNYhvFedq2V6oMsLCZuCJVcBQb356mmXMwkt81ntTeTeAP5ydScd5zdv",
  "key45": "3ZSmB1fC2D255zRZ9hxjnEnmatew31DawYqdtvHetYW6bmKk1uXLbhbFRAWBePvPMAtquv7Lf9q5RwdSK74sp3YH",
  "key46": "4yzFmmHLvqRmaSztNHbZZY6yhtaFNFT4QCGDxXqQbULYsCJaQVmdjRGCRVKvPAynoA7PeuTKsnRpzsza2SyFKfm",
  "key47": "4hqL46NqZ8g5U1Ya8Q4gATnYR5CtxvUmYFzpShYUEahunqnFZyhrbKsBwjstLXK5ct3Mkqb4qiGUaBUqTEbwrQw1",
  "key48": "2hdFHr7KcLJr2GAKQpNEe5JRen5KqVvnuqhV4tBqayECaU3fhXTT1zS7BnbMQq6bc5af77orugur91tsJBXqY7NN"
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
