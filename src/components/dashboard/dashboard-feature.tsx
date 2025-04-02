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
    "3aZDSAVr1HZhC45XgcCp3sm4KRZ4A3SZFoUVFb9WoXQvJoRAiHhfRHaSLajEAKnkKFjJNCt1QRmM3btye7o5ekZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542Nk5MqQFiRk76T1mWrpBSn83LbWt2cVfyQDFxxdhYJRLUKKKbxFKo5DSJpUSCvZHVUAA4MSC3MTz4s5RL95Kd6",
  "key1": "59X3xxYL95AoRZFrk5R3JLMkjfZYh3mAxT7JU95v9AmeLEf31GV96T8gYm3npvx868pzL2nrcxbZxcabWhB4eqKd",
  "key2": "54ACEdLPfaTGSaHgoo783d2ABTxu2foHHM9Y9H7EL3sQhoq68ynPFLLaF2aZkCutjotLneqKVgJ4iUNWdi6UTBXq",
  "key3": "bjvab5bKFkXZw6C3ryYDLZRQJQo8u1xPYH9JxQVsXNuDFbDkomKs9TWVztdeVUzrwD6TB4cyxY2kGMohA1NbaT5",
  "key4": "4kkuczrKrLfbF8LZVjzp35A4WoUd8td1tmAV3MvKffQrZNo9fsRP2y6NbowToXByKR7ERkrWZdnYZQDAduarsW6a",
  "key5": "3fjFod1zJpRcFFQd529k63mVGGTJLZiqj4R81a4AKG4pQ3VWm7LSsYEMDgwGhvz2ibM88yHcnXf4weyv6mjCaE2L",
  "key6": "2dtuxiuygCSGthtiBsxQ1U8BGrZ3G5hX7x4PjAEJfVZLF8t2wWyHi7nHutieUKVa1dmAgjdNM7eRm7m3Sx7v9bw1",
  "key7": "4DkFHdncgPP9Koc7NLkD62dfAhWS5yEJnfQoMiVbjghHRzrsNDoFTDEGszMRx8JtPjtovVYvJz6xN9NmwnwJJJnT",
  "key8": "5N51t7LFQkNLV1BKCr18FAb1xCFY88Vm7Ne3ywBs5aJsHtkGNVd1vhsKDRZvSWmDnKi84zcBc95X2ibqn6EWiYe3",
  "key9": "mFEzGkXAWJBazaGXkJ1VVcdS6MTrFwtuanmquwGXAhquZHbKGNKL3jAArneZg2dcY87vTAyRsDNTD8zUZYeJG3U",
  "key10": "63fvV76FqHx1Ps6MaxveQG6UTmfNdLv6yPDmLr87VM7jQmqF3QfRUrX3jcszJ5poCjXLppU8KBfhuYVoaNVD7eWX",
  "key11": "4usUcYBUV2GkkZhT2QLT7bwq9Ro38fQrmaSDiJ3zYFSgDb8Zq9CPBCane4XkZjePGX2TEwUQTf8UXrzqmBvueTi6",
  "key12": "n5Dqag3ygDdnrdTHzMy6axvbxQytG6pV1p4jtNmjFkm98LvNXTV3RZiqtg4JipFWzE3KXnxQXrjE3tPSwRZPQ11",
  "key13": "3SSybQorg3zDosmutzFPoTN34NK3cuQrywkJCsVqkceDDWRMZJ7nDycSXXwNZqarpcATx7fxCs7nUj5pagUJWkyk",
  "key14": "5NsLLPN4Ek5sZ7vzBzKHvw6sLX52uFbfaUiKG6ykWJg5vtz1a2rXLqxE4Bom7FWAfFu2bUh2HSCQbbrTHQh8qYhp",
  "key15": "4Txtfn6H836d6W1Vycs9Ad8nCmE7XTRDsU6cR3QFDdNAYEpvEUw4YXrHTXTUHAf3q1SY9RLw7nPyuqTG7wa27crU",
  "key16": "i7RsZMWabfLGjJkUEbg7uR7boxyWLwRUUV4vyoCmGSQsMH51zSNKas1shEy4L3ahRNfXENq54jZiQqTEDG1wVY5",
  "key17": "2aX7y34BBF6rSsgAXoZAquPmhqoHXgpKfEcGm4611Aui7pV5goRRtfr9NgWgTPom1He3GUGEoEdnwHUTCWp2CPWf",
  "key18": "2sZ9uyVMb69qhSXJgYcAgWNENKwCbUM1xGquJpcfPgBPhUTAJyLeuN8d7cSYEVUBmdJ12eMWDdc4Tzgj3o6gAwnh",
  "key19": "3GJoZkDiHgX5QJfWfiAdaMvaAGjkNNQKEJUT4WdqPCYACrTCqrBwguDsFPerqZ7kVo9JE5vWWspYfGcxz7Ah84Vn",
  "key20": "4qsCHEF9AauwtWobjxaLBBASjtjpmBTXLCLJFWvxDmFeY7hQvouNJ58uJftYU6JSMYR9MvnymbxjPxwvBgCKkHZP",
  "key21": "2npXzfBGWbb3KHuupbi7Styi1RjPY58yaqtPTxEdYRv9AneRQ2UDnrxmkSvW9cxzMsTwpKJzvovaTjeepAyjL79N",
  "key22": "5STUJetgcCbfAmcWCgD7FhLzvLgV5VPzAw7nyyYThcS2uzSyoj49kg2B5kDivfpQutyNcTRMJ7FRes18qc1h6r4V",
  "key23": "2daZRm6g9o4mt4vixRGtM7CyuQpgWiCZkETBs3bJX6TPySu84njR6cyEHubfdpiFDU7mVoPtEidMZc82pxaPJtVa",
  "key24": "4qqPDYg9TSWLuf4PxPskztYYHJxLPS6tzFdHzcnb3LqBuFpEbhiyzS9XJPmx5CAdAJAqbEKs9EhxYEQ1SWFAUcDA",
  "key25": "3KcJxtBP9snoeEp3ZZRUyKddkmRTPez15Q8CxC63xG3CF7FS6Z5AFjhrx5HiszkFvWzqfPBHQjfFsPCfFkCGAPv5",
  "key26": "3B9dvwZjikGMFjK7GbVLTqoY932MQaKAmSMrFaUZJiAACqi3spA1ebydK7xqkPT2prgqUj7pAMRtvmgPXbUyxa5M",
  "key27": "4gvVTeuBApfJKCfyzNSjMAQrJEkJGvoi3EPQRgZVaodkzkQTeD8pDrC8EasPQ1wWLJpP2gcTTGTgA3PdmiMBZoyW",
  "key28": "5wW5bT9AKBGg5skBHVHyQ38yCLmmh6LCdqijrjG24iMf4W4h7axrTxkS7FCVkFgJfGZMyYcb4QMXH4AtfkxC8hxw",
  "key29": "5EBEuMij1kQ9Wf8cNTVYnWWJGWiKHehBo6Vy6KaebDTw2vR57BiLgqTbFE1uJaWEaE2scHJFLixemUGLhsuqFSij",
  "key30": "2NuyVrCh1PmUcTw3vFLgZ86TrdxaTSvdQoJLUZj8xBLbKW7DNnmH7n8D92AqE4zRr35CfYqSkFjXRE2f6GDe5uzz",
  "key31": "PqpZAMmT81oDysPmd37hdA9d7m6DGcXBhen1DMWC7Q5y37sx2vqPPndd4mDUh8X3k94io483YmmrCw9QBpJWPj3",
  "key32": "pyfHoR68pDBseQoK1qZxJTafkL35EmPfmch6S1QJW8CdVbhae7HxUWfSnPtabPbUWamWPJKYDaavpoWmXPrgATx",
  "key33": "26xEVWefATnzJGbkYMct1jaP6fdUzHmTzHF9MsKPSnSTLSZskhFiSVEaNE2MqnhmGQ6LMUeRiACNJ4bkPyCWAXsz",
  "key34": "2gzSkMJ8J59Y2ALKWWYzTDeXn3XHSKVGsSVZo623w2yWs9Bn2JcJCet8CNMeNSjJizcoezWZ61d4wE5VRXeWXdzJ",
  "key35": "5NPUWHhBPteHATPBn9e6S58YhRxqXCam2goGqqxGQ6b5qFzT5MskaKEh4q7Qum9oCt9xrfTPTz5qcUTnrB3iw532",
  "key36": "4YHExD7tqfEd2Uxb3m3f5AztNmSn97EVMUYs43kPLL7T46Vxr6bDXWHMhv4u13fKjozUowsDdf3Jq5fFpsJrMd2H",
  "key37": "EauVrYnMzggkAXFRpgHNYsYiQtJ4cxz39ZYXRvqW3nNj7ZVZFhxmaoJvqDtE73u1aSpb2ymMcQDiX2EYsuE264Y",
  "key38": "2yuCHf8Jb33HQCvXciwPvZR8AaCceN7pAj59ybCAXDDaV9GJqhnSkQMM6K1cuFCxpVEUTzN8AyjJEVvfLbCkfDZK",
  "key39": "AwB2qMu24fBo6XNuwi1Q73BRyPSeeNzGYX5ATCq1ZgFXpdtCpUBX4Vc5EzvEBaRcDZY7KVMzw8wBtCfAvJGcAHS",
  "key40": "eVhnaeoMw4hCs6VEDVL6CMmLtLbjN7J41fXbyruzkhqMHk1LJ26ndr1oCFsdynNqBzfSwUDmDtwFznEXnc8PBWU"
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
