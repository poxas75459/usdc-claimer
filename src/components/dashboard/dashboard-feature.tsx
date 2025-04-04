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
    "2FyPKmCuci8s5T526Z6aB5v7vQrUupZfwAMHFL8dbN8xRnCDNuu7bACQuHP1ZaCPtDMrwcKmcGHFGnwAnZanAYDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTbCLzbjDnMFdYmhtGmJYRtJ2CHVUanNzMBPXkYmGbkXWCNNFrHFsELvSK27FQHEB4zUQwfVXRFBognthoufvBK",
  "key1": "1Ntd6fX28r4mRph1zeQCdM9gLEunV69fC7BPLq7vMrSC7nAbzFCWpe7cNGfhVv8yDzJhDiz8hniWAqoCwGpg3o4",
  "key2": "My1J5M6i7giLNPVkNQdpUmxJ4BffiTf6ySjYzVUfXMbrq9kYFhS7bUGZ6h2tFWo93MttSzu8mHzTd1ThHHWDV5T",
  "key3": "4wmqh8DDytcATXthzwn2J4qp73hsHUtnoLLTAscnYHpjtVubCy2PBhQun9gMrpHHFjq5M1fQb7S8FoGMHgv4QFV9",
  "key4": "5kwuckEEmic4HsJG64AZPZYMRFTVMfYZUu8ksumfE987jcNstBN4De5qqt93DatwDVDFQE8799RjWDFiGFzStbcQ",
  "key5": "YDsMoPWUQNoMC55rqTjV8qDHrz4ncx6TG77m6RjT1UBk64s5qMuHkQvx66CaPWw3F5LUmtGoBpAjuaKQx3q6QwP",
  "key6": "3j6k9CKc4DkCy2DE7caN78QVqExwynfVtpSXmMHvT2Qx1m6u8UcYg8LWf7XqJM3sKtqYajAVHz7noVMP5ak8R4vD",
  "key7": "1xMmrybUV16SoUxkgRmjnhgELLrM44xZUTH532MdRxbD1Hqt8VJJWFiUHrf1xqRem9V4apjBhB2GiKbpNsmV6ow",
  "key8": "63PL4y6UVdWtfcFYf6ZkxaVVLgz9jmiuXV4YNRwkFViPH5bZFg2ADqP7nYXACbN39TzVEZSvyZ2r2K3DgcfMrmVo",
  "key9": "BYboKzdRGb9houC2PhgokoEUiisjqVhrsDEB4AQSj6JgY8RyFPXpzAGbhHpzvXcvoW4CtGEHdn1AKiNgPbqcxBj",
  "key10": "jDapxCjZwVnNrTXCzENzbESgfRoAwtpzqAiveftf5EyXYcy1keAdsaYkPy74796TSjHznsVFZHdPYptvrQAtnrs",
  "key11": "4JQQSpjdRdbFsSqHzYZZokbRvbqJFS7pWs4ZLgVmkf5nMoUTraxdnem5722mnJbJos6wfpvkUmiEnwBr86HhL9gm",
  "key12": "4NzQRc2ZQHdLjzVpZdVFrnvhzDPS48r7uvuKv3ahmhLXFWb55SDuhjbJSNTDce5avKAUNEizjkVDPje43UPHYMoR",
  "key13": "QhKwygarc7s341My7nhL1Y3fXGD9isJnDY9MzdXC3tvy1cg9uGtH1jYhzo2MDj5vPA4RRtiibkg3F1NGzYrUFDt",
  "key14": "5HB2Yq7dJVTHXYLu1ADWEk6vkMDzg3YMgb7vxNU9GMjczs7sKF24aEwYjzzwXRvvdVaCjEHFUzx4QfsEmKWeeeqb",
  "key15": "3ZRnFhFhZSevTpPrLk1fKLL3g5voKc9v1syaQSAW9W8bz7M1Vo83LN48My4ShcjhRpPtFn6TMKAn41os2LZWTJSt",
  "key16": "534aKiMki6J4UwRAi9rYpexc2Fep4x73uqMgNmWjEGfEjnPDBJ39aHdxGS34cQCYB9JBRiQt1HrSJwvrfjz4VebN",
  "key17": "3dqPpF5xYMTmAh7cpNb4PLoPA3AW75uj2wqdGcTo3tsiCGp93gfDJspSaybB6MX12eGmZomHDf4up255UYVUgMmQ",
  "key18": "4C8TLhELwd7DjVGRAx1c2ihfgsjS4Du2ej6XYKsi3JrDjQsGNinYbjte6qHUPDzcdPLGDZjHu3F1t1sTbcAE38n9",
  "key19": "k5iNjjtvuLNzSF53HtqsNZWfgGwyT7rJjcRd7rF2YCY1NPWhroWJPEmCXFh1ppaowj3tqNnDS75daBi3yXzLDZD",
  "key20": "49RBHHSpYPsAZMgo6RizwzaAPhnUXepqkyeqWFQPmMT38XwGRnT4DFuBzDaHTQKDxSiMZh7oDJdzyGFfm5rQu1rW",
  "key21": "L2Sby7NPu8h64MZdhmfuTq4VojsNjzh1WsggXutgv2jeCuAfmchXY1WhHSMAFz8upbo34a4GdQcMGq9G9yFBCpZ",
  "key22": "4XaCggLDFKZfvPN6GXCm5fKwGm4JDYvJfmkiikLKhnAfD524ooKhCsWBKiDDmsUcvSkZ1yhEwFd5Upde2jAR2kic",
  "key23": "2dJFJjAbPUK53HEFWdQa6etK3CYNFXbLRKPLM6aYKhV6jUgnM3xVdArioNphzEabXkuzWUcMQY1R4usqeufZXdpu",
  "key24": "5MjDEaHsNBsG8L8o5TqyjihgXZZvAveLL3metZrxwhws2VTa8FeBhkGNdqCVGgMr7dRbXoc2nqvzEunuk5VAAVrA",
  "key25": "3mjBE5fXMyQiuJb22auBwHXYsErsFg3763XQfsrBim2cWn6WFscVTJQXjzezjfoq1MQBYxTxFsSxhtaAyfzTbzDA",
  "key26": "2q7RfhkMT3cZ8oFDdso2qMEd8C7pUmEgw1MpWiHXHmq59uVLsThWxneKyaLNBrgHg9mQ6iX8a6XYM93g26173HLx",
  "key27": "2k5XjhPFcfsT6DBeSCMQAQXmNz4r6tkz83QNeE1B28vqu7jBvUvmQQFCbnpMVpvWbLkTA4fH6hiPLuNJT1wnPoMi",
  "key28": "43iCAZbLqZmYMztVtPJTZXj3q8yD1mDATHZrdr1SSjcVcXGXrpmFsq1LhQ7xoAJMUYRnWpTtJPSCP8WwM6GSHbyB",
  "key29": "tUxwxjNG9qdBbVLnYdYiadVdBLA7EuFdb7BmjKfYsJ1WwyyaR6gryByLn5cyhUAvTLxBHgUeXudojs1k2wAWYxm",
  "key30": "5yCubGWwSCPor1f7uKafWLPnF3ktzcjD35yh9b7gfzsF1Ttz8VEu2oCbjiE7nqTSAzcTWuEucXQ9BgH4QfhbinDQ",
  "key31": "4qZF2ghxwtHGpFdLY8HBfT9xEAXNJcGpivKm3HvjykGJQQVCX5Q5cgjhMmadi5wCMKuWebmWctZ5C1xbt9yxsc2q",
  "key32": "4aWbMSWFQUAKpcFd3b1GKfp1Uc5J8QttAyANEQDvuVwCRBsiqoXXAYR2PLE2c21jdoedjNfo2NiZhVwdi6AqhwP6",
  "key33": "fqD99xyWcq1SJ4oMghaFefgDd9X8HMuYubJBWYkhGV5zBa8oLzHy1w8CAmmDJxaw2fGedsTfVEWf63wtWzMrhFs",
  "key34": "4a6tf62xH8YkjrBhjtiu1X5aenW8gBvxTUXX7J3WvMvZUBBCadk6qEAngEGNetBR4tFEqCxbenLyUNZL8rJ6F7Qb",
  "key35": "3VnQGPqwca1WFw5bpQWDfRhcr5ebGVt6XZAuFJc1mS7iPFcVeTEbxMaaLQRCaNECMNTF9mzynrCNiyTmboeh6Z8K",
  "key36": "3XLicZvdj1Aki1NyXJuz4gDqUdaFfKzRDcnazFfwx63s9d5knYRaJHykXWE1dTywYrg6zWRqwsGoHDqF4mDtHiQY",
  "key37": "5yjtLTzuz2iEHXDz6dNk253Moac6nvLwZdnNsk4pjaN3MMFbMqYWCdxSJcwEYS7ySFCV2d8AUKV294zh618Bo2bk",
  "key38": "2FsvbtdgefaG4mFedjeEg3tzPqhzcPUWiWdeXYTDFPP9fjnD4bcrZjA29pZg6hvKuUSHqsfr7UJGkSjf8q8xwGqG",
  "key39": "5HsU2yxiKdSJ9zsS8S1qpAcaDGLXiGvBHpcg9BdMUUQ5ggKspY6RymCUg7M8bXhAnsQJTVPKusNMndToSrdnxMe4",
  "key40": "5DbTJvyvXrd3sZfNuoLpwpZGa1aKEPq5Npb5z9jM9g3uPVKD8cmjvryw4e3NKxSi3zvCZpeT418pAU5x8YkWj5Da",
  "key41": "4Q9ZmcgBfP1F8NMCf6BsJPmGJLkocDFT96pdFvEM2yJexJEcBJByrsFCUTQJuKK84vuKmps2WD9nbPXmCfA2pNGT",
  "key42": "4dAzGBSYT3TDVweBrvmmU9WZFxijAX6f8ZSZpzCJRomW6pJBqkCPrMpPKCWC3i34RtPrDayM5ApLixKr3pLCgc4F",
  "key43": "5YBg81QW9h71hq266uNVr83ciXDts9cgxrgfufP5yhCpNuNudnNutxmYZDaamsmWyeqaoJRS9KvGywq94UPmELUe",
  "key44": "2pacnB4rLCXwiHnPmYwzN3oDb3RjiTB8bgxwsrWkUJyAP6v1P1SzjLkdNGHkmMnDBYLxTixvTFds4bje9aQAf7sx",
  "key45": "tFz5E7wtqeGk41dRSvGuMyaLzEnQMuPUTtj8BjdDA6LQztqAt1VDjTGX4sEvY9MmMUPfyxuyyuq2BjjBon4M2YZ"
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
