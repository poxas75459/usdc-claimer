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
    "74hvyGfu7yjKDzffgaK5S9q4YJQSNkRWMFY28eCRHz4xrM9DD5WXaqUfPGChJP9DbZBrghkpTeUzkD5roBWwnGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQnJZg865tEgi9ppfVY9JkUEWb8mwRWZyz1f47S9znYKpPAuAN8qabWLxCwZ1EQ1CuCfzKXQsiJw7qNFxYvKxk9",
  "key1": "2mMnmopvvY1mxY8GSVAcYgGSiR5JiyiixFgDwpQTQjUMUtrc8xPMNodGvsRaztumEshfiUic6AxDDzNCsnvME8SD",
  "key2": "3p6qqQt3SnYPr1sCKkpC46mrE9FpEyoaUin6Y32sfxxrtzEXZQXzd1goAKYsPPRC8GswBGsvihb8ipJgyyJaumdu",
  "key3": "2ykJbpmso61C3yxkDSYp9W4up7tvfsA7EcvKciN3JPhuTjA179ZqutodPWromFTBCC8xg99EjxzXZobwQ7xgdiKJ",
  "key4": "5YHdvxJd4Di14GEKDp5VsWKFLVtkHwGsEZNytQa7iJiDJrp4P9FmSq8TRoFo94pPMuBYKAiBoTMoozYyym4FAzPE",
  "key5": "ybge467zNVtxk2nqtaon9NYefGB8L6hvkGoKMqX5tWvr2xvFXkdaLBDksrGCzqBDToCA2cdxeX75n5Yt8cL4eaE",
  "key6": "4TXgJPSrusX2hTYVxG9XqzV1r5wqkswdkbj2DdZACrPNQdnVFuuw34TcihmAnm1XH6SawEaM66SnzRcmEg4rdfrc",
  "key7": "2Y1aDak94UmqZ9p1LjKsRt6TrVGoa77MskxQUbjvRwRUaPP5xLWgL6ostaPKYz9PD3Cz9mgnXXo5ky4EMdBK8Lw",
  "key8": "5RNQmNGn2mKnLZtkiJ2pUUffxZTKvJUAWnwKx9uirJkd8NpVqJt5J5iQzor6s7pHhbvWkwsEYfRftAAPB66GiKAZ",
  "key9": "28t8TR6ffcgZQRBkmPNKSmrZZdaQa79Unx3x8ohP1Uu2bmCXaKfSgLpGevmwEmxBzoM1Pn2zASUqFrVizduURwA6",
  "key10": "3MeUPdig3uEoKWvB3yvX1Eq8nz1wG3u5EwobMGJXkvV533sHm26gd5jPyFsP42v4nYvohYaWcyjmEPNb9Q4KTKhf",
  "key11": "5tJ4v7v6mwEs2XS4eDxFV8zrYVxrzd9XHRqBjdhzwSncmXgtEkbb1SGWeiTHMgJoNh58zwDqPrqFa56pLPWJmbZ3",
  "key12": "2EKziVoQvXgzk9JxmgmtsirG3aP1qRNDWCa5eYK29JyNdWpauyWXHxYzBQKRMu8XjGmxA9oQmrgSyzrtFycUVj4d",
  "key13": "59VL8KCbqXVEX82HjSNh6tEVxSQJrT6EQRyrL6hMXH23vXLk9brMJH8HrfcTkX8tE7bxsPoXfqoAcCbWDoReaQaa",
  "key14": "2qHNzkUbxjNyHzz2RHpGiWZg2XR25jFKuwHwsWgNGypXxF7si3vmCWHcrLHD1rsmDPnRVaCfuaXmqh983ZxbLDAA",
  "key15": "Qb7aR9Ns6LkwWaz197P7igQMYykU3DZuHxJiVtDupnY4UrqEf6wwprk5SQJNp9j9f2hqhUEesVFTc4LXkPjQyAi",
  "key16": "3RJ5CRsvoj1NMfpZmwuaXzxzbNDE9kjL1CN1PLsjxaHSCvuaDSETCrXgT9oggPGvMwSRJfWjwyr7vbFrg2XiBHTh",
  "key17": "45HNvDbRNgMhKqFSvZrLSNHnfGqKYa17GcEpoRYW3e69ySnf6SmxbcwmK7SBZZZeeJDsVv4RaYppFJciV9LekKfV",
  "key18": "36CTxNuyn8rmMECT5R3jJkHeQ1MJNE5qNLAGjurjAmMRaTLoi3mm38cjThLysPqMVqq1e69ag4sdSdaPJmk9uGVb",
  "key19": "3sQD9TMQ2hAjuQqiBQVwt4kM5wwiiUkr1U1WguN86MYmWDkDKCRNgyPoAM4191jnKDvBZqCmJhhSi7iYmP1AUoPt",
  "key20": "JDWXyykTVnmJwD9RwmHAqurQXyCsVQ5CzEWXakWtt5Cp2rhUzC5D5ebt5QSYYYsnDo389AimLdm6TruNfRoCWcB",
  "key21": "J2bsWPQY3XvvXNvhjZyrihfioi2qamEtFK8zpbUT2SuiqzqtcfjDghLD7V54x8iArQjsSa2bTJA5JG1xbju6M6d",
  "key22": "2JZ4NGmMP1MPb9dGw8eV4qEJDdVAu7d84AvAnHkPfEWGrd8dWvLCG3yCz6ZCgrRU5xyhXRoVcX3xZnC5Y7EamBUP",
  "key23": "2NJ7dVRin8toPrtkmKnhB5jwaEaYaKxutPhoYmDtCTEHSWTYvkemGK7eHDqLfTD5ez3RnEydJNiLjbA3mXTFeA8o",
  "key24": "UD8Ezcz27DQhaMrxRL6HKRXHPQDesUtSpapttwWEHtTsb9BuiboCdegJPQCRYzvAeATSZ46df9xWAB3B3Cuetha",
  "key25": "2ojTPRe2Faf56z7cT75A2iJnZk4qAKU33Q8W9oPYAMTxRV4w2tKEMFAw1mB1KcXguAh7Z3JWMwNSgpxfYuzKd4pB",
  "key26": "2Qt4v9HgRYDhvpux9CkvyeL1esRVkNXSSahjBhe1ukV1HS1iXHjMpNYetyLrL1jNYyRf1CfPbvv554Qf1sQKQHGc",
  "key27": "kgSDgZWiQkRuQ7BDjspyDrEfLAFQkH7vQ8UQ7EvcAkZYa3H8bTtzakjbEwzNtc3kSLZwpCUJqjPK6Viwh3Qwpy4",
  "key28": "5mJxU47ZVMkC2vgQsqFnGhhKHVdg5XdJy1T3nvxrHBv8EAt3qbVdVtAAQB7KdwP1Zqkc1T988ohpkEJRGe58FyEa",
  "key29": "2tznfvYjug2GukDGk6LazJqWsPuruKLMiDAyG9Bvi8ypBRS1YgUkoXKhChCh6rCpGrzcfBmUs6H5rgbmyPUzYmxH",
  "key30": "5Z588bCxGpxeTYkcopxmi2LiDWRjNHGiuLn29waBnwmsBJoqwW9FcJU1tvNw5owYNKHVp4iyBCJEfKL35t13UZs1",
  "key31": "g9nV7rxLYjMwJdg7SqqdwMVrHYyc2bgHsfHYCoKs7f3z4vk64PpS7VEWAyfgVnY7P6gAtREPRKsicVQVBSVV616",
  "key32": "oT277aPrBcrMjZRSAWBPA5mEVcJLdCHu8AgEFSqhsLLEpCBD6BcasE2HJj8xVHc9mCohWz5p7E7foD2gNLEHoMz",
  "key33": "5hHiwPvWLTJSMFbTG7fSGnCdd9o8pPQiNkETGzdU4JVMioSojrEBaiS4RY8yHCfgPnmP8GgP3g8f3Qu2YgzFELNh",
  "key34": "BcaNHYaGEFeoCgcrYRmfKwFjPwo77ZRPkNsEfohwT5fougUCZGkbCXVZMPDSuccBfrfsibzeQFGzWSF5WmKuBUA",
  "key35": "5kTnQdqYo3DUNqYBPMy4jUwy8MMmCpEznRHmVZYsFe1XaUnZeAn8b4MscvFxK5CpCyGjoY9GvNaDjXuMv2qjg296",
  "key36": "3cD6qdLL59bHNojx2HgUtsLwWKZC3D8b5creHUF4v5bzqc5k7QLgzVh798DV6QihCNuQuzxaQZDbPMksMgQog8oE",
  "key37": "5UBhtA4j9fb94eaCSqYQqL7QXpoeXGaFjA2heQ7VxyrBwibNw2MGZt7M9TzdGqV4N6hNpdR2AaHnUvbjJF9hJmno",
  "key38": "4zLNALCwSxHV79eqDp671GSda7m3u32N4BPqphES4VwaHwkNY8aUp8bjJowP3snUaFL6eWT5CWEPxwKkWJGLaNEJ",
  "key39": "3t6wdjkGnkweDR3n6TmcEy8Kq4d9mb8M4HZKwJkZKGXgr8v2bMxvCYCLSVWZCjqs4uhznxy7ziGQJxY3qRdVGx9Y"
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
