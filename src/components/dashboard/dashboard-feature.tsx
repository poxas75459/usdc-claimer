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
    "2DfaHPAsNkered2k1ep4CzixHrrXmncpf33F8uWDCTuHW6qXCsPFJ1K9ajtT6iu5BoubAEoW6DYpBLeSRU3Fqr4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eng4cdbuov5p8GP7NfeAZsYSTdABXkpqxmW7KmipZJB9Lv7Me8f9i7MvQQoxGmHtm6KJd7Suv4VZWSDtp6YkfCL",
  "key1": "e3TBo7hRdA3PHnVzU17jbEEQQsRbLC2pTf6s9Uvb5PzTKLJr4nD4xdQ6eUZ9mVkMWD8uzx6TeKxYHzgjRVmZHzn",
  "key2": "kUPbZk2L8TPgWeY8x1XH4c7knvQtcpkbHH5Sah6NB26pEmpSrYbpj4NoGTd3218CmVeoUaRGtRasgQc5QzpG9rS",
  "key3": "2sVZ1kZaJDtDQR2PPmZQphigbZt7vAMgcdpGKD7RtXYXUcwJbmb6DmafsQ9bMPdmgH8tWWeXsprMkUCHT9udUoPn",
  "key4": "34JL4dqzVXEm6cM2yFA2AGMnSSgm3k55cbvJ1nWu7qW5aNh38Q9XiUsrQ52CeBa5GbrHh9aRHAQVmsGdzsoyw7Bt",
  "key5": "3x56pA4wbdEunbHA7LLDDPCc83JduwKz8oXxs6vj6USLLCk6JwEsBJMp6RN1nXF8ffAFjiTGmdPaKz9rZHoDAt8z",
  "key6": "5HAcohTWo1WTsEJtKnRt3RLxsbZvB18X6bJEWXeNqzmTvun6GfQ55MH1FNu7sjpCBgCZF64dB8aKucoZ9TmBa4Ud",
  "key7": "2XeoWczvPLvJhvujTGJqZ35zbTKXzH9rdGaueQZSg1yvAnZvoGVPjTeQdjhwj1h8waQiKnHxCWyeD8B882gHnTXu",
  "key8": "35ChaTuuDhkcSpZrAqNvLeWL6w6dfzBJq26X41dQVMNL3YJgBxtGbnhgLrBwG2ShrYCaSTtDuyYTwDGoxdEFoYKK",
  "key9": "2XLToeVALwjth6uF6zj1kgEQk7zs7WesGCFswkSidKR6Ct2k4XbWPRyovFyqBMdzwXW4D8XsgqwExVHVbsETmg8b",
  "key10": "iCSaPiT1Dv8HCK8wh6oG4mhMux6dKMfwKhRi1NFRYAC1n5CxsixdbCoaZ5uCwSDyuqa376sK9aHshxchBn2DQmR",
  "key11": "eEaNN9E74Y88EqJQRc3GeWG6iJRMDfqzHhwzHUgLt1CXPbrtMgkFM959eueJG3inHrHXoR5gpAnpe34W15RZcAr",
  "key12": "4oCvi76qs4Vvp49rS4e8FSPUAYBTwvFUJPogEt9GH5HS4Tqj9dkbXtWrf668eAS8mpcFZmiCfeqw53w7PVZz12KX",
  "key13": "4JGfBCEabXEBzH2KgrYcbUJRbEs8nrKjxjyn8RvkomGG4FVed2fDNAcMcMdAqJWnar8WWmFwA9Y1tGnDmit2TqVu",
  "key14": "4fbjV8ypMEfEmU8rdK3LxFCEoh8Lc2fXZgMoXdFaakmGVBeMn9zdNkrbXZXFWEVup9BK8V3nckgZCDdFr62JQEXi",
  "key15": "3Q73ggxetrDVrSta7iMUQrhjpx3WMFhm7CvMXQqzCyjKeX1kBqvcWwhWoQuSbDku7GCZNxqMFUL7bnqDt4Adt1ui",
  "key16": "4D5ipDPWEqoKUBMBrCLsXaFopqEMvwyoXt16yXSDtm1aVsfBbDrre8R4wLsrFK2eZBvyHgZFCEXGt6MoDYaEgkkC",
  "key17": "4UwEG3R6Zbf7sidgeDAZ3tYWd5C118uMVsCdHbmVYg6qxvoDyt5cCinHdSBRwV37WMHgqbxsAp8n37Ke1FgYCHWo",
  "key18": "jX2SFcttKv5ByC6ukrNBEcgz1FptSLyQqGY51YxTc7MfEGEKtiKAz7kEW4NuHUwhMv5jBWmY96aYxqwh1VKWb9d",
  "key19": "TYZ3EBmbX7u7j28CaLbYb37hdXNtqsnTvrY5KUZ3dZtKZDVCTiXdnpsTBvVuJDfueYaJdLBNbghCvC3xxkyQ66B",
  "key20": "29eP9ooVg38XDbUqttAtBqzvdzGADWRAPYEuvzrTwFdRsEXzNppNuzTrQgXqHK7rcrXBxcHtr2Z5mEQJRkqtJYi5",
  "key21": "2GWsZ6XsLMMnurhgxbo82YCVWDenCQexdZ5kXTiTPP4YYuhV5SYgRj9ivkd7jSw2AaQqpy4aLmVESSwZRu6WrbKB",
  "key22": "21SM5tRKJCb8SYSaBf5GnePBkD6Pr3Ke1sop2Gdskox9mDyfzzGvBw7JN4axP14wWZ3Ked7seiRfLNTGUeokuEMt",
  "key23": "4dJJqjsSCYhCjKXnkMVj7TiWe9gTCLv5ewZKuzPL4vxZ55iPKHBrhpLBN2hBA3WdTskPaBX8E6P1TU1BW9dvBgyc",
  "key24": "5gCFXGSfL1RMrin5DFpRkAtdTqRjUh9G2iresn2sfuNXobacPc3unWsng5QYueJu6Djtcq9zoEVYVePQbv93aabD",
  "key25": "4CSnG2ER49ko28oDffHQkkq7veoZG7Cormf5WhExywmTZjEUs7GdyxVWdKfSseuKfAY7HMaokoUhAd7PjbWjvu98",
  "key26": "3QUfi2sQAsfUahU5kJVTEEYQQLgn7QN3HoZ1qT64ovdxuUWFwfwgN9tKB8y57rZiRjfvkjg2cYX52F2LNUirQZFy",
  "key27": "4M2Vkf7LKBAK5rdDCNzU3VeXmRRRsQhVJsQNdJua4z9LAzmVrKpEueFk5J8JcvyGy1Ufn3CjVnJtvyyrcdwxczKf",
  "key28": "4vkQo7cbLGT8ugnp8YGcW9jPtqA3VSVvjMF32XjNFpXsMnrP6rc8dTwUW37LYks6o9xEcNZM8paWBn8qxx1yTVi4",
  "key29": "5sTXeta4smnK3dy6XSF8G1no1RtqoHAfVoevU6kRLekrdAQU8F8wkYNhYsaMhzEzbeVNAkbEb7eNBFToDgqtzyi3",
  "key30": "mGwFDbMSgPWNRpbwXKHkYpfz1oRv5pV6cWNRABvzwD9y38T9Uthc21cHbjpu5q5BJiKhpykqFh5oX9Hc8vt5nxD",
  "key31": "4G5YKNtrVWqHZBTmdaLTymgi6AdeYbCeRFCk4DvNaMgPfo9nN7YfpZeYr4PvijDXELP7JjJZ76pmwUCDS2haZ8Cn",
  "key32": "SmoCmT86vJzrn39hRkbkKXZKDZtRZcPo22Tcx7WLr8ahoFnA72CzGwwVWcmZHiMkERHSgJ7rNPzS5nbCH1To6g2",
  "key33": "4KqAg9wVry8BM2vBJ4mxeS6dLdEtqGPuDRhP9nY4QKGDn4JMQXMn8LTx1V1x61bHHDudJouNvwGVCX8ftAfYxq7E",
  "key34": "4RgFJY9Kn4RYsR2rhGiXJ4RA6ikAZzo7J5aBfnkWQDFSi79mp2zi5L7fvygDJeCM6suHGz9ZvkwFfALdHQHZU1s1",
  "key35": "6114pm91pHvXH6K7drqGwNHVVdZCQBETYhEYB19sNjXzGdsd48u3pvnDUW1VTtsvZJhCpg4rNtriTf5wLE6VK4YW",
  "key36": "44F9ApAMqaVuH7q62b8MdqruiDKa4yHqKuNxgkvXXgEopTNy74C3KNojd912ePJPFZQs878KAZbFRPQAx26qyHgR",
  "key37": "2uCYhSJ5nSH4dmekCC5az2fGAGcGHmbbgd2nQf7PBcs8ucbgCV8PrfjgrkrWpifA6ie28SdBSTn7Jp8erdjQj4Jo",
  "key38": "57Vj7EUUxJ3Zf7Wf6em2rvAa3zF2WfApP2SC2i8861QN7E8CJYQn8zteqLdsDmuXib8Ace51WZwZXUFud3cbeKfa",
  "key39": "2W4fn9Meb1boQGWoWezPwCfLKM4eejKGijTm8Qi5h2KvP6u9CUBe6cE1kACiYjoWZQZvZhM2H4LjBzSBrNC2B1rW",
  "key40": "DKvi76a7KHToGeDNoeU8yuXNC1ud7w2jjWVm2aFQvMRKF3b5h4UxfNqvVtu6bdsALgdsnEBF9NdKgv7boJQWg3i"
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
