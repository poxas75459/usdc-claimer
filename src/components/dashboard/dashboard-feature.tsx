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
    "3wTmBPJsNbRkZeFeNw7wTkhELpEbofuP41151jiKzqR6odfhz4UFb1YCzgjVFhKgPTr7fKpUCEuHSFcpkzDmKEWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BChBGK2BFg5m29miLy2cCTX1EaDDdJMSb5XuDWtKzxWk9nz5L2MeiZQPBYjDvY5VNkRWt3YN7k6dJmsdkW4FcMw",
  "key1": "2oVd6aAdS3N2xiEVqmzVP4ksRugMRHKRxTwYmrTEaAFPCk5JvjMdJf8nfEHoLSGHoKGZCSJwdME6o9uHxfCLQ5X3",
  "key2": "3zY9NVuKVSF4Qa1QZvikGWRbJduqWEuww8cx3yYL8XhtosdrFgLVYWHLrt35FuFKcq1e9YR4sxNADJHBeWCCGypR",
  "key3": "Sbt1qYj1U6jV8i46ZsGokKz8sQw8WdbodbYzdcEpYqYMmeTwmkNMVnSvfbkn6cMzzFxavQFsFAchZXdz2sS7wMv",
  "key4": "3ZZoutJJVkGt8VBnGPG4ZntKmK9S9xQPhkt91psQST7PyWGFc2Spg6o9EzeXbayUNwvqnmVeynhE9Y4zqiYYATf6",
  "key5": "5Qfnrz6nnuXxthnLQSFWctSqPTMsFDxdSjDWdDPajNhxx6X6kzg3kAQ1oYh6gv1wnULi5vDtLPssvG8cRZXieFhA",
  "key6": "62hEaUTn2tqtYjMj2U4UknGLv4miemrApMAPnkWKtkZ1nrDnNjHnNAkNt5NeZ5DpDX42Hhce4t4oSYTBkd7PACbJ",
  "key7": "NcWA8kZL8oJNNgxNnYPyFaF9nSyAbwCNVn2XmqCKtKETnWo5uUFZT9EAZr6oEpxewuSc8wfDWpSNZaDKfanT1Zx",
  "key8": "ZE87uB5gG6Wfqn96Q8eHG8c8nRwL54vGDDLLXPBZF3EF7Neqgh3a6dxF6qKa7HofnMyefdJsW8HTYRscD5wkwjf",
  "key9": "5J4keaMmoDeKzaitANp67W1SoRVG34MKscqc1eg9N4pRFA9swWbgNA1NeMwbQDm2TmWuvtvx1yPCN7yzWNPkuWpu",
  "key10": "3aT9EGpUxskq3LTbQTK1LQJxQoWUKLqhCwgTurYkrJtFDFYSi13apPm6GByMbMbTbdwmXZFAWLUAZS3gF6ap9qgn",
  "key11": "31geD5hsWMyjPXG19mcG3DLPP4jDC6hTmQg3b1RL8HHDAjtzt7zFjCC2LuTgQwendFbvxBrfX8tRznhxjD1YZPCh",
  "key12": "5Aodbmj25JB7AvuLMPwyBaQbWkuyqqZrL7XbbJ3VKLA79VL5MyeAph8Wk33pbJnPSdPQpL24jxZtGp6k7syNPLis",
  "key13": "3XDB1G3tuqd8iXGuCW4HrMWt3mpQK6Za61eXEhZPfBw1QWqmGUt3AvmV1FedXShJnKsjZCYnAJG7LpKddprWtVZt",
  "key14": "4uj6n76B9v4gfSveVyRaHQwuRdzGsgmdjunmrosyKmTEtUDtxZPseQuutqoVPSFHPzfMrrjMN3Zd6cG3jitGaNHK",
  "key15": "nbr8EB5wAiNKkGYqzJHJk1btA7JWCajJunCWdURiAi8YUFzwiuGTMJmCkY9oPVSeU7vXrPRDRa8DFb4tatS8kHQ",
  "key16": "3jNBqr34Wf2J9prZBpxkSkqMoanpZqALPG4EEkP99fuec3fJA4diaDHxHari64KoevWLBEWVqZKHemyCU1mnWJZU",
  "key17": "3tSBrTPxcyv63PxUMTU9pxidQPkVgvfvLDCCvCQQjHVWYE1rLiGdsbSySeS8pdLmhVDNdompA4Gb5sYQa2hziUCY",
  "key18": "3d8cShAv2qBUFHW4ehxcMjmXDDCk55eVxz9ZnFRMcbHU2spTyuD2uHRVmNR3ivtMrhDbLZhtJtyeFuwRuYCaYhHm",
  "key19": "5DKATbnr44gt4cBMxoVSUACFAPL6WpRbFdgXQxBByYJzphDN5YrxR3jgxj2B2PYe6AEpSgh3agK3L7cXepTziPfM",
  "key20": "21jbL7DNarzaRHruzXsD1rfcCtZh7SsZ7fGCU941D8YxfsLuU6pKgULmfqiAL5zUt3t6simbSu6znnrmvftEa7pB",
  "key21": "59noKJDiN3QgwsS5EmkXdCJCCY4qyry7V7tNgvR4cxAvJuADu56gdvSQkeY7RWzeoif61TrfuDT91Ts7GHVJz9d7",
  "key22": "x4yPv1gv6ihVyUS2hFVfPJyYFeGY6JD6YrfNUsdBUqNktyBXJpGkAg3MD9KYqhmQQQP4KYrCTbWNTg7KsXhbMUw",
  "key23": "5mw5RqLg6wv7zCVvsfAwu6CcpdieAyhgctVHSJMafcFQyigm6N9uFLmpuEDQq7uVR9SWy8YnBFPLu8c7BEXpLxe8",
  "key24": "32FkvJtgfU2SLMqQJ77D1JKAGLog4aihNVrPsFKmFuhZotLB3fKbuEkDVzXgGS3ggfKek3fSqMRtMM7GkURrD97Z",
  "key25": "2hJiZ2tN14yZYkh6MGsrzBUMZN9sTbsYh4DAiqqUk85ChxDWgzsW1mCwFruRce1bevkmi5qdjrEEKUH9Wb2Bif7e",
  "key26": "3bpbUTejLNuB7VdjUgJaTEXBMmnSsLhUAPmWBoRFEyWQXAPQ7d1vXBUhSvDZQBaV5g9YV6zDLaPUikTkRStXfqkn",
  "key27": "CTZ1BCdd6GL12FLnxipP9TGR1SbrnkNsZXGcZrKrqMrR1mLoP8fXRK7bNZLNTNu1ePJfAMhaNCd5j3jX8Fe9g1H",
  "key28": "4JFiSKukSx52RnyQBM77JMV9SDg3HihausaZmY4ajn4Jnv5E9RAcgU4CZwGunhVMZeAA1NTxSu3N7sxye41P14JL",
  "key29": "3qhSUNWPtJx45p7tv9oghujsimUiuNyzjiTmHbLExSdC8ftCUACccLHZW7CDHP52VhkiSmVpRpVEuJdt9gw9MiMG",
  "key30": "48F8dKMk6Fv3yBNeufRs5dGKsFNobtppsids7pTyFc2hTGzfD2gaxQFQ9uhJ1xJPtqLGQZrgeRSVwV9nRb9ecJaE",
  "key31": "3Yr5MCz6k1j7EEAy5Npf445xFwHC9fRo1ke8j3UZNxgJNbe1MXqHdqEDmCLFL7qpVQTonKQd2GKvWhnowns6xz4w",
  "key32": "3YbmG9MCufLDWNr1UTrxVZkcZYmnLPRVZ9dX5Ztj9iC48n23cvpdH2H2UMSgKfgt9RQbnHUe732ywo1mPRLD9HpT",
  "key33": "49cwPchR64pSrAQaCam4Ad1N82TjBxnUyRgk2SbmTr8hM9yi285mm2QPaonMvHExpaYstCFrxUeD2jy9Fa1cVn3U",
  "key34": "SSFnLPg2TR3Zc4RDP1QsjKVbTuDHemL6ogvLW4Pq622Nz1dKuhDzZ3fYZMhoswBZWQsQTvT9f7LisxAhXB9dgLP",
  "key35": "5jzLbeubnUSRvJmkW2wBNZNqVyJ5UFZFNgocSAg3JP2DiBSqLTAczn6R4q16UJUkM14AcmVm19wA5KvC8UnF31La",
  "key36": "8VpSFggQ5CSu4if2FiaUxqf1YHEBioEGXo4nepc8JSmVv6Smb8eJ28aWhRXR4gWWyodXeXEUFh7sJ9GnBroe7Cr",
  "key37": "4NJvVJNr5LaVwGB4fruUngrGGEbVKmQ5PJW5qASFRA9wPep4asQDpEFo6fohm4W1wmFKRtDTM6X5GYqf5xYcXRs3",
  "key38": "2CBKRGWddDuJLNHrKtj4rayLpLyD4bhNDSfULqc2JFkyMHkZ6FL1EQMoAkAvLkPEZVC1JWHKLMkX2kXMLt4ykRZ6",
  "key39": "THJvPMXJJZ2Hia48H3KqccXyC5Vr5ND5BSbcmXNDvmw4KzjoLgicZNXQiQXwAjvZWboycqg5zDyXoz2kYhLvryk",
  "key40": "5JzWsGW4oXhkAYcXzaUW8WkT8FXYBg1uyqAjHyEazWdBc4XGDaUAvMZT6AaLAb9ZT3uGQQ951fP3DH6JUQJbyqMq",
  "key41": "2AE8yu1vqL6xmFze7Cxb9NN4baisnScjcsN9By85xRxdizjN4RSkgRrxCzS1Z83m9F7rWz3iLx5U7Cr7ZnwfGAj2",
  "key42": "3ggQRUHCzwVcUV2XMkAXzqdZB6wDB9zhyWJhJawgbRKDfkpRsjsfmjhy126Mu8VW1LPZBb9Wq4U7BFunTzy9LVmw",
  "key43": "5YdCi2qMmGnoRvEFL4411sSD8314xJNFb1imcsLtCf7RjUJzSRbk68o74npQ6rh6dXnx7ZybnM1htjqQ35MZXySH",
  "key44": "n3cjWSAxGHb4ffDztsQ59WcLF8UfAHLWZj1EykZW9osyAa7znGQzqsw7fTKLFcsuDpHgjruBKpU67kDUgWmMnQG",
  "key45": "9A5eNCfc8hoeDCBVk4BrvoMsxj2aC1c6aY4CrBcNQb1ivCxgEXVkRTQJCNUfAVpYkd5j9Y2szB7duE83uGfis1z"
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
