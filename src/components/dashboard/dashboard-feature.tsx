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
    "4Jhqhqg4CQWt753QunQKU7xW9EFpeR159EnAjGUsfUpz6k1QFcAcckFD1NvFkYuxz2Gwb9fHuE5ivYq7MsSXPoxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMbMA1CfE8Q6iW83LK5wMvgjfFTduQz8UGx8s528BYgPPvhkfAz1nJ7faCTRFvj2VkQ4V7PB9WsmRvLkU3wvs4U",
  "key1": "5dL4obFD7CGrua2oUiKDvFYda74tQJDqf5SvBjrdocMaYfwDe1LvDvN9wUkAZZowPpABUSHndupVkLjNEoB3ifJ6",
  "key2": "Bqniuw4R531SMctgHWRZada5yYeYqWWw1P6CCrfqvAnojFNM8yLReZeWXpQq7rEHewUkC2rHdhSJdes22kd5DXw",
  "key3": "5sFKLC4naRodA7eMSHnGLuJWeEN5w3grFJk1idA4P4oNFxh2TZt7MxtQNK7YPixHKbyz56kQH3E3GoE1BiARyGFm",
  "key4": "4iDSGY2QupoCfctnm6asVz6obkW9y2oqcC2ChaihcFv4TJZrvTTrwze78DP3poWHrjMb9HpwZC1aDcBF8hU1iVn9",
  "key5": "DYeCzKbqY2UcGFNSZgK5Mgrp6Y7eoSWZUNTkiLL5dPCUeUaJvr2oVq62TWu2qzHX8NNTPRoBMZSQCfoPX2FHesA",
  "key6": "57s64NqypwgzF3Jmz7UCP14Bm36hkby7hzf9JHTjRYEh5NKoBrDfDJ78tk7xW2EB6D5qsrLkQRVmhn12QE1a9p2V",
  "key7": "25g3WDhskGFhzmS6skaVMGLiKsNRagi7tFZaPiodKR9MsGJdm2HAfToAQRnCUmVhJXAPGG6KNQ4g6xyJgfBtNtpj",
  "key8": "XyuW3pjrkxj4eWcEnnRpNYyXScV5quZbeZKSSoqPYwhKSyh8qTpZeRhsNS8S7KQQRb3gSXFgPai53kYTwNvEjRt",
  "key9": "517GJegr1pHuGrNqxR3h5nDfmGfKpH2YjH8shtABgnxAuk8T5kCX8n6pno8awBFkFoNbK5kfK6eTJUYUY6nmu6zF",
  "key10": "4tamRTt8VjJDFB25qGG1ZAXEsJTMSm1zbaVf1serVpVyUAVmwRd1DQnkQArcLG4GQM1oXrW5r21q6fx5PYvr3P28",
  "key11": "3wLgCARPnm1pGy8tbeAseAMGixJpKbKhuUJifcHvMdwVdfK2XePhzD7z6dDknVWr1iLxEak8K1giySrF4neCTJKJ",
  "key12": "2Yw3XqsSCgGrGxrYfGMrKGeCQfLp8ycZCq568agQH6A9CVDKbVuWVLNGJ3DFHz8ydZ4SsZuWnPAbapNAQ2yee2Tu",
  "key13": "2QLU61oYoDsbBv57ugAuESqRUeVRN7L1VeRsrkHpdqeQyEBns3Bdwnfn58ANq9uyvjfUF4C2ERPYjMWSGTRUSFqe",
  "key14": "3FUVYq7mvNCxeP7bszm6eGKgh84BAApVUDPyp2rdteG98PdNRKwieMQx17cgf4NtZamY3Jz2EKugsKfMYaoLjTET",
  "key15": "538jRQeHWoSJEYrPTy3FJGuA32JjUHKFQCvpJehfTFoGMYCpNRReWJnstWHaYRCRWy9sjaJFg6pj9xQ6Z2K8QRT7",
  "key16": "3ASHmmrftstA81EuVLVixuch1TovEY1h21xRvH5EjYvJ6PADfs5gk9JJDd9nnUke9jJxiLf2Sbw6z3Nc2iXHhT25",
  "key17": "5wtwDGz1q1s1mmztPuAFYy3c99HFFCQvK6sGxVvYy1WTgno3Ehkx1yru3pjWXKEShLsJRtWJChfSqNScet9GAPDu",
  "key18": "5R47WtiY4UFUpeDyDsmWzx2DdeSG2MzLqgKXp2V4MwMpjp6TC9nr5bBCJ63NBQDgVodBibFqFJwu6hXt2eJzLE5k",
  "key19": "5EFHSU7vQiipNnvUdy7pJxGzcDsH9vaE5n1bo1n2hVfZyDxeZf9MY3W7JLQDee8sRYvc8CEseJ69eoZhRQqexvmn",
  "key20": "WkjBT4C6WkBj9iwgqUoYauEGeA3HbMskPB1nRoqUH97vVPeC7M5guouXUWhxNRSGiYktJs3JagWfgff2NXpU15r",
  "key21": "5kEzFrcixs2pm22Y6g1t6jnyCuuKD4CT2JtcsMCMEiUgAubEpRVKXaYynGN4mDLyJXFMjLHVKDuKv6LUWEZejjNk",
  "key22": "Qo72sr3bYyrQaG3sMqxjZm3ytJtjDYCXkjvEWHS1ptpSYcVhjSRnb7FYDVwLXVB8uXeNnaWAuaqXQxhc9pRUNDo",
  "key23": "3EvAVMSNyUKGejdcxM6rSL7cNJAekZSkf3azdjZaM75QoDCJT9oDPSKNgXxu8M7vpfLFYL3ANH9uhinAsLRGJUa9",
  "key24": "7yinRK23SgGkdUTc65DbLPfjgz2RwvWfTW8D2TvxAGTJ27rvefLtCr7HkAZpyb76fF7gfprK5MiUGB2fJXsgi1M",
  "key25": "J1FMexLJCCjjvLLC9RXDbswTcHQvRqL2Fr274EfdFYdaQ6ZKPySEtg3NSCLNJeAVuud6VDp44RVpos4hyJiLveQ",
  "key26": "AGc49NpBwn1NRVcZhrVhrTcGHzoLM3QRBPgbDx63gMpHTmp8KAcDpyinN8sk7WVtyQPge8eBBLHnGQatVugZWMT",
  "key27": "5if5vN8bP1DU86U7Y7KAw9zLCQjDGm48bHfKBRvMPUx7wssWg7nMXTt1ZVxHeagjMBL4i5ahcNFkpeA9NH8oYdCF",
  "key28": "3GBTB34Pa3AXQvtq4arkMdotCKQBBD9gFLmygiszBrDCUokKcDMGors3SenkQ72cm4thGyAFd333oNZCWyXG91ga",
  "key29": "2YLkV3Dvwzkf9DzLttX9dT9tvdsBtiAvmUJJvXCMwxWA4QuzRid4e7wh5uJV4Q8rDeNs6SH9ZwXQtyGGD4Xbx69J",
  "key30": "4p2gsQ7bNyKP84nxqsStx2Ey4kFyQGKirArEtojemXiWUa8TR1sKzgNXcUqci8yuSSqsrBcQSDQNRrtUejrN7Wif",
  "key31": "5zeG2bjkjgkcaXZzfye2HXiz1vyvtTbfz5HavPa2Rf4ZxPjVM1VHboBxWgQLVyYiDQr7RyornwNUQFADUb4wHACN",
  "key32": "gdiugKnU8wWyPudz2mJEzKeLbnVMRzd6UF7396XQjxwxvJ9iBQfsKsAGYNudtfLAiqoUY141kvKrcxeBT9iF3tc",
  "key33": "4CDZdW8MV8cqfQfqNV4fhKMsroZ5qqJv5Uot81MdsfGdPMEA739mDKBgfWsiHFCp4FkhBBytrAKADArNCKGV3su1",
  "key34": "4g3Z5soZHxcaVZtGq8LxZrkrmhW4LrfwiYmsr3B79KJA4tv26nFuxPNYCNpEspfxNeyVguuXVuFzPpwDifiPvFex",
  "key35": "3aKF1FcCCs5PVrbdR1mBsVQHyhHwu4S7XXPyzpJy4b6pkqtpXkKghBFDTe8FWJgtnKgW1mtAV18UmxFRpQFjmK6g",
  "key36": "4vtzLEhyfBdLHpcS7DMekm9eLPZmHrjmHenjjjXmV7SoobEhYoaTfL8n5ogRuh9ZZwu1hFLqDvQUUDBBUNZp3Chc",
  "key37": "36bLysVwg9f8XsowWZnmCvGYfz3GjN1AQzqn3CjxxtGvSEFVRFxb7vZcpbjXF4REf6Rhia5SK6H8ZHLTfNzrBxzE",
  "key38": "5AfutNH5QhaiLiCGhPFVYXncNXSRRdnPg8Ta3sSMhsrATS9zrR2fbX17MqioBoqheqUdSTrj42WhgsbkJhV7ppc2",
  "key39": "zZNV3rgrwxHySY9GmjPFVEbJzJcPrMFDw3o82eApkDoHb1XjCx8yEGRc2JjgTmcGMGpAdt9rF7KvPTeUHiX75qW",
  "key40": "4MZh29bLxbEsEnxTaytm9zqHCqcM3RprM62u9tWnss2btq9dCejNZTwH1MqDS6marPUZPAoaHsuAAtKuxPHf2BUq",
  "key41": "3zHB5U9qhwcKC6NjTod5encAotrTWhmR8rmWH2yUtifZMhrziVfcqcdRkkGNJbCzx8bnc5fYkamD7Sw7kUayZwzH",
  "key42": "4dPVdcN5Nisc8rGSTtHmnrStzy9XD5v64jzBSCodsv18c8MGkEWPnHDfaZRVk156pHVRXwWct9cG5JhiapGEsey1"
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
