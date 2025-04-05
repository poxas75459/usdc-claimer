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
    "66RNDetnz3Yt9hBYUoWE9XTkhB2jxeSwRJLzYyZTJbNm8bebzZntMRW9tYEU9YuKL9PdYZXmcddj5Wx8t6TtVaTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwVyCZjbGkehMMWF2E1FnuontHPSCv33FdKF38LcuC83CdiLGmcguTkKpZxk9HRkBAWmGSpYZJUJTgn8MGPB1zy",
  "key1": "ReKGgNvvnbW9ri5Vq6jT3LJxthUVBMUbG48hSUj4Z3XHtiHgiWCmG6ADXu6kjh5Fn43g2aEJUoQ7mo4CGKLkQJq",
  "key2": "8Hdb9H8X9yJ4vLUhQviUVNZyBpoNurTG7wiZNCKfUjYt1bDJw2vZmWi43x89vmqLz5Jjz2qddPdwc3fVDk7eUSZ",
  "key3": "4b2P9Vu9KBcs7cxVwaxTHKvcue91riMw1XatS6tmyckXzy6on21hKaTRDpsEti9WZdgnasebaVmqwofYJq7Ck6GV",
  "key4": "zyZkPxXdYCXyxJ9VW9dKBLknFqMG5pAMwL9aPd22GtPhua4H4FVMKiZnATEcAmVJTrxXn6pvypmdE3J1EpN7Fnv",
  "key5": "3cbYnbSJFDTvZvTKbZh8CbBJcx3b5dbL9uJBdZgvMhmb1wV4EsQH6Myo4uMX8S6nAt6YJhVbv5PYBU7hTFfjG3RJ",
  "key6": "4DUkDSY8v4tXkLCsWnrgK55kuY9LgCZXEMNCi75NCRLf8xwKBGTmMeL7kErQDcJ9yzZL6VasY6g4L8utdfesYFvE",
  "key7": "4rYVuc3w7QCKYhu84v817erwQQf5ZA1UDJfCSWFH2vTSUPjpTVgqgac1HeJeTjv1dxLUZkVfYVajJZWjr2sGy3kM",
  "key8": "4rt7wgig7ZvU2Vp6Gxj4tG79FxESJ3UWC3RsxcJhomKPE9W4FrMJqw3n8yxrVQPPiJwmYqUT63ymUQwrfa5DjSMx",
  "key9": "GJz8AUDcou2CqQFaD91tHaSLDpc1XiwXVX4HRFsNXt34qm1iyaWCWpE8om6xtMunEeTQscWZCLfVPxBDf9WjBE7",
  "key10": "4rZ92ExQd3E4nYnE46nSDRNjUjbApBijKKZRQCvCg7ZdR45b2Z9eSE8Aqn5hsjHmvk6jVj7CCJ7KXmeBF376Lx45",
  "key11": "3xnYjpDQyZ6b31GeEeG7UaC7i9fAPqaDLMscRJa4JeE6jtmQXqLFBUHd1Gxzxdk2JkUNLvkNxgLtF7a2XrRwPxDj",
  "key12": "2K2kchtKLtk7JUzdz1rafFWJCVFcxXwAjibNLfG12EdYXs91rPBdFyZGL33XrrAN3Co1yZ1dUfFuYvGAhAeCcri3",
  "key13": "3u7z2bXvGG6DE12VowxmW1JujcCh2fTFsPgMNXadwKrm85ToyJKPi3fnaE8a5a1D7wK9FVeoNEsHhEGLX9YHe5RE",
  "key14": "4iZfBJvRnjfW6H3Q2cnEYopJNSWPmUuaKiMbQvA6BcapVi4VMmx6LhMJh17cnEpqBvkz4sAar2oXBrjT4Z81vkWb",
  "key15": "5kGEY7eQsEhGeT4jsuWhJuV6HhDGmoyQrPEddD4tN2skGevDVqjBTydKoaDgu81EHjL34X8shyCJt4vtG2xdn8wZ",
  "key16": "64GCJE7kxLVw5f8mkrmEWqJGiEnCSD5Zi1643megagXMuysoF15r6yXcgADtsh9uCz2QzZZby813ftV8owUWwVj2",
  "key17": "2TJfbgFiEjkKkrQknvQ6WGD9z8caMLX7HKmSzWwK6U1U2Unm2hNbxfcW4TRzFayZ18o7ZxN94KcpDZJM3vWHj2f1",
  "key18": "22eEVeKN773dzewbDJUJ42JvV8PNPiPKXaUQws4oP73dsaidDy3R2iB8EwEEFpBmpBSqazCvSPcquFdWYap8SNko",
  "key19": "5v5EN47BFo8T3Tjfu5J5WLzKfQDSEEwRE1siXTsjyrP78rpJnsSF4Hwmc9vPmhoShETMHGM9cVKW6RTYTic7XgsU",
  "key20": "5TtySgnKHaEN6xTJwoo41SzRMk1RK4PmEYue6ScdhfFupLvmsxQ32SE5d7Bt7ATLe38LYYdMWjsTE2v38x41nTib",
  "key21": "33nW1rDqBCYBZ21qBHbfXNURArzJMwt1WP1DGWdpRarqmJDNVKph9Pz6SDMJYgiay37gVtu2NsT4vmRmfE4uTpJf",
  "key22": "5uAjpQkYFmCrLag1QpDfBK4WovqL2PknJ9FDM9hMcvWBAVN7T512rckALrhhdsa5bUG3EG81fzXCfQyECauNZ2t8",
  "key23": "5WLEm37EY7qGAefzssNgJmbcJczXnoq8w153NqqUU5HZuiHThPHt3VbebSKyCQ65LnXBomJhkJnmuicEAnHruk1h",
  "key24": "3NCA7r3ZALkkaNqFYggxgUwLTwMqyiCY7TQwMDZ9TzYYDh5iLHwqdkYZkexbnej99ecEtZz75CCinZB5sWrSkM1s",
  "key25": "j7XWnXEi92o61eyQ6y7xbr9TAL8ez6kuBhyBcmKdqJ25pn7YUVGpNeZA6Ge77tV9B8mWSipF6F5qY8b9ZmKeV2G",
  "key26": "5fPstuBS3w1h5oD24SpiJ28AJUeHqzVpydchjPJvWjaDxmUScAEfi4gkVrbCCZF9ndfPnZqzxf4qcRQfwZW6TJj3",
  "key27": "3K13wmwAnhkaPsHbeGi5PGy6bRhdfJMGk7hQBygsUV8GVYmUTQjjdLQXf43uxr8LnzedLAsJ2oTojFUJEQodCZv6",
  "key28": "5szKMFiAwsL8MySnE5JUCNvbcAPXEjMSEmSgbBmb3RuFKqnU4Mq6GWr9m4N1ALndr4KWRNHZGbVkRPC7eq4fkUKQ",
  "key29": "5epzyZHPbzymuaFHRdUSZNDzk6AG1MD9W1vb5eheUSgTM45TNJcv632cwJrFUVDKyjEoNURMCLsJr4YJeebsUKMm",
  "key30": "2kY47picgx9VkBfaSguiEWmTGV7fTRkq2tc5ChFuimq5dMmyTvrLuWcvuEQYBotkTnttYrAbqDEaoW84k5wL8n7E",
  "key31": "4wKpvizLucHsNg4NgPowfVQqtLYTeCQuiKSmk3Rccky3yv8DHZRmg2tMWVUJrTNsThYNLWnTiooY99bWkQM9K26x",
  "key32": "2Q3gGdj5pLhaSE8gz6T8k4uT3PhrJuSHtBvpEciA8swdY8Zy5WMMbMH3fNJUcQFVbPMp7YMvf7X3bVytMBGdZCpo",
  "key33": "2iKVGvmEXfyzzpoMJpmnWmGLykS3amQcmzNba9P88DhNQpo8S5b1FmZtrw2ChvXZEc8TdHbviTNCkqzrrTajt1Sn"
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
