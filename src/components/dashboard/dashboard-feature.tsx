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
    "37dz2Te9gRLVq8RhZF7upvM4qnqunWJLwUR95p41FJAuUhpCHhiDQFkc2d2qMJVAMnPsYwsLfmdMtbnviCcV2vSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kr3tye665NcXzrqHMMV2SA9eFEL6iT7HkGQq9QwwV4Q73DqQmHbL3T1KeuDdmAMR84ZxJ6C5UaQrcCUR6T8LMSP",
  "key1": "4ciP3hAWidwoDqM5fo3f4fJfPzDq1JhiQ2zmuzn925v1fn4qWfvmw1epByj9zMvrCmhGiTDM48eteXJJEsFxQJjq",
  "key2": "2MU2ZhgEhXU6ivHheUZRiK5Lvt4zbmXcC9dLRSyVqY7HxFybT3EqBXMuY8TwrxrFd54uxBPFctUBQmdet8482F99",
  "key3": "WXYyf5AxRiY7NxyMQmtozosAxcafPUtA1Kcg9hMTHwM9a4uCUcDFSXr2X2m2S9F8PFFvudeRdB4KLsXMKignedA",
  "key4": "2mHxpDQHAScogUJMAiXZ4R5Mbrt1F62w6Q7HCTrH1Me3TaqSvFnwQg5DHudRHL8JLSdiYfCfBrvbehkTDWmE5RRf",
  "key5": "3taifQa9yAvnuSoEtsYfbXqhaTG3wT6p1aFKe7SkiiN9rXBw259B8sxEiuP2ekWLAa4oXRRVTnXrwRHw6Xv2KBM2",
  "key6": "3n8J2FAgntgxm11NfoWYTw7YDySt5o8G7698UKQvdURbrzSbZ611Br1oTCmvkxJc1JcMDLohs7XyUGbYtgnTtoEo",
  "key7": "ePgDKE4r8uNaQKuycWxstx8k1oHHyUpxchBd6VtYa9aoTE2urf7LXKYzQ1dGY6L2Woq7H8epHZ9Bkz5wPYMUHKU",
  "key8": "3AzXamwfsM1YPp41bUzEPmDAGJ6qujKeZwm345bzXAW6q9qpwCzA7NNsjabkrNbaFxBaK6UthnUhpHHTKfT1JPMr",
  "key9": "32LAxLjopdBAMXhsyjoKpHYiv3X7BdWEhTwbxUX6Xujtk52VEHesm3KGN5B9cFx3T4aRAtsv2cBxvJiAyKHw9qYD",
  "key10": "5PrgzdndWccrfPgzZGEzXCCF3tRCoEqM7mny3ZkisWvLVpVWVswmdLoEmDitJfhvbL3cMikvF2BNDCL9rr5Gigsg",
  "key11": "jgwoAeoQxgizeXvbEctaPdF1mgE7AXESP7sa4snZVG3a8wx8Rni1DwkebQ5DY94YVmw63FMB78hC5ftYHxDunqr",
  "key12": "4xa8rCZGiVLT2ZJ4vKu1Qy6aq9RyJQhucDRqVNWUWbDffUkfSyj7bdSVqcZojYZPCJVKAQ8E2aurmZ1E6WxmtBRW",
  "key13": "2nnoTSU3U68riWbT18ZAHnsftFA3fScStgmfFATsYpziHis2JYi3WLx647xbfyPtGZME9PAaefeJXFuBVZTsd8Bq",
  "key14": "35B3mjs5ZYJn6ZxLHAFAds3d8sWvPrhcCBocELtYyFudwqhLWH1tSqzmzqUMXRDtqmQFk89Ebwgaia3Ap2UwmdBw",
  "key15": "3fe3rTotCtprBBC3Q4wDM8rhQJwckZPvfe3uP8GFQCzYdiM1v4j3C6QuGdJ7nC8bbGFc1Xxao55yhkoNHKKicA1E",
  "key16": "45t76UGPh4q5naqmUmzsTwRZ92zaoQpcXRtVa6r1onU1WFpE5urdfrbTZtASTwFDqRSBisi5VG9TSXuhQQkHgevC",
  "key17": "5fBPhRW71yFzwrQsmCRmGzFg4HeMhuR8euwPb7BM6WV2vkejvERjphFbLdCT9v4zfMBQcAFtRedtw61vgdBJhjw5",
  "key18": "2Pzazx7gqxEWp52GQPxKcMwAm5zbAarWyNQKNY8ojNBBXXYJfeFL349V6DAMtJBXek7PmFo9wFfmWnUuChbLvjNh",
  "key19": "3edFxW6pjzXidHh2cyqQFDgForrG5KkKpNjnS8V2nLYATZ8YjFogw6ijH8Gt8kmWKnuksYUWbxutBiKxxonnEnXT",
  "key20": "233JntM3XWr7Hf8LiwVxe4cpoW9drCbgD7zUbQVxymWaPDvuEefdiKNA9kJZCWXPp8U2BFNHjUaPtQ3RtAXeC93m",
  "key21": "3jAm2PJVVNQ9TTbthXovUUGcXciJL1dPxmNSvrSUsMsCp1or4q8fNUJFPmEx4VFu3CLDsUnzjMKiU3EuSizYY3vo",
  "key22": "4MRKpuEuU4iHpSi6vubDddPHNJfzcjYWG1FWMi4E36pmNe8fYra8M9JAvTtcRZpAJywgepN8FZu21CQk2wvvopUi",
  "key23": "2kB4b4Gd6rYVZoKogkUxEa45zckBZS8kbEEKaJE1S2F2tkMPE6Et4P3opsVyBHrjgMsiizzqHWxS8LFMvMry3PSY",
  "key24": "3VZggiKXdFnLM5gEMVrzymxx4u4FRhVApvT7FJs7ecHsbvC34dN6icpV29mHoChoFJjbhxBSDouWQoAMoD27whiD",
  "key25": "5VqZHyid7RvBtRAejfPY3snDQ7qznk4LZYngd1tjV9NVMMPPDSGpTn9oPAaj1otJaMHXwJphAFD5ZQuQu2VuMptP",
  "key26": "3Pk7wQ8HzXwHGKHU8AjrsUPsp8zz7UatNRB6gmUZ6bD1WDQbJ5HDEJ8ncrgzzFFFC5ADHeZab98EvYMV5fxq5Y1w",
  "key27": "2BtsW1WJ2oXVtviZUNnst9snt8zP67HpTZN1hhYKkPjnY3YnDLSk6nddhFv2ZJvNd6coFacWNtEEa87YAggNtBbb",
  "key28": "5RRFSUkpM47mKZmoyXiJRDxagQyQzyrdv4sWUBgiR61dAbhgr7rf9WDrUPwVXhd2cnk56rwvLtCGc3rZk12Xh5Ue",
  "key29": "61rMGLnHBW797z8kjnUnvwB9rYUi6FjkAEpWQcD2b68peuR2XCQE7z6MhjqhYrRQvErYgR1WrRzuGkzdL5FYYwxU",
  "key30": "23XDnFhCUuiYXLwXxsQnZpxey5A8UMLsSk9P5Ad8tbdhQGbNRN5fKwiat1UVKJRHjX5GmpV1RVEqmzWTnpM53MyA",
  "key31": "1e85FRy7sE3aJ9GgfxnPSSTotid44zERquc2pCuAc5qnS9iDo6fmgiYftqR3oqSaKLtKG7TH8UxNszuAswYELhE",
  "key32": "5Y1ZvQat4piQN8LsNTEuQ9dqA13Z1itcKzmk6zML6uxWwZZ3HV5CNhBf3mPy8NSViVgeJjFsf392qTbw9TbYfUYr",
  "key33": "3DTECsgHsasubG861J129p5ApaePiQGyGT1FwixqMeRNrmXZ1gPodky7xHrPE5tTDQc2fCEE5ANk3ELKCsxQxvbf",
  "key34": "4WTrbKMcXfZq6VWUuNijA9nKRPDxZdPRTQEZTW9yCKqJShtn83688s5WbK5tVFp7xNkPz1KDaVcR4mSgVcot5awm",
  "key35": "KVSh84uM75cVnjWCpVHUxhvWLZGqn7BJPfRQRfWz6WwfFaouTJDz1cYPhVLbrPf7mv4ytnLwKzeoe2vGw2z2n3J",
  "key36": "3rUs1GqN1GY9j9FJC4Wqqc2haSoiiZhXZiommb13zikknuWBNiSyMmVAkz6T5k9ZBBiR1hbFsuGusXURyPf7j7Pk",
  "key37": "28wRVYFkFteeJy37VY111sbuhwPQJ3mVWYb9DpHKb6QjVUeFkJ6doeVWd3ZEhMJ8UiUzEdGuJq5HwpR32i1Y4Sep",
  "key38": "4sMmEpyUWde6yxUCeeHq531Dus7kCtPYv8XPgf7imZJWM4adu8bCyLJnnmkaoF9Xyi24XZvDDHJgVWDJzKoXEdv2",
  "key39": "56CN92Lo223rBWEHUy4DbvHKdiQj87EKx7aGtqqxJsqQGqkFkj6iLvt6AHR6z39MNJ9JyV3oLr1yR8GCaax51DRW",
  "key40": "4Jvn6TDryC9bFUyHEmvT6QDz3vc5hBDQ3ABEk38Xd3SFmuMbr5UTy3y27LzD5tfLR9Z6LBbQiz4mQWZrio58XikA",
  "key41": "4tJqQmeek2QpNGfyYvodpa26vMisioMrzKGiZkfMEdCqxnp2cYxy6sbb5fPasqWVuqva7bLGp99vGHdwX7G8QNyP",
  "key42": "2KtMi6pSbu5mDpBy7aAXnWVTiQTfMJT9srp7ddJDdKTZanpbzkmWKrc7BvcC3HccXqYauqJ3yfY3sJMhBsvDTUE",
  "key43": "N53QcbZZv1FpYXKh3wcLNxAysTFPL8MSpoJRvoEhmJs8vvy279uBVLExVx8WZQmKEXCJ2vw5PTQMXSK7zyNzpDt",
  "key44": "4LnWVjiUkJtQJXMkk9XXPSuxqQcZ9yoqs2d5pvNWPybGZyWyeZy87gkH6a6yPcvW1ryENSUwgMut5zGdhsB74vUH",
  "key45": "4fSs2g8CwTu76RcD51iHNwjcq1jf37TS8x1PqJWWWYS1w3Cb5jFQoERegPZe63xmZwyzH2XGnwPeUiSfmKRBZB8J",
  "key46": "4arnzmpsWmDck53NL4S4d1FKQcoEesVWujUAUp2kuadbiLeDRHS63EsJhrgRR28w7VnwAwUPp9gXWAtFpiR6ypnx",
  "key47": "ZEuM91rSg16NFNqi9HkkRsvY5VxodrKnFbaRAW8woWQVxxtJFPN85PSBiLrHwBn96cCrKeYXKhYebSXgCdBdiG3",
  "key48": "4fJiStjvXAWTRGQuPd3CAy1R28E47wmdRZo1m64M1iSLgwoUYRxSiRZhN27LAhDZXWi1KZLvpfvwu7Xw9AzZQcby",
  "key49": "3cBkMos8Y9cBZzWJHdJvxTsRD96ygetFye4tFxeHL3i8L8F9YqkmkRJn46B8xjQTR2KbZxi2FZe7KRNzzNCxySEh"
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
