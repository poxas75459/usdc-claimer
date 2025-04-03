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
    "37FzESDMXXBLhuJrU6NJnXsV7kFC5UHmvY8LBdP9XWJYswcYWBXrdkv711scTGtAgz6qrVyZXJocMMm7ETeQkkAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqwcJrFjXy9cMyG48tBie7EqibTwKtQ7XkvxRGmhyTYNuxhEfzmL4ai424DWMzoBC1NcP2aHQrKrEjXgiC16Dez",
  "key1": "5BiYpMSCdqCrUYW9ELqihQqGdRgyD6ztoVwRB9H9iV5TDAFTEq6H2i8DbHimj1D5AeBcnzgwthTrC4bwXTxEP4ib",
  "key2": "XkuvakHVzCgswMZhAjtpbmweo7e5iemhLujiHDfpnSfRMAaYArG1Uq8GPSUZD7MawPXdCTuQLFK3o1hfCiX4ymi",
  "key3": "4j8UQX8se7Wnb9dpQLm2AzgD1bTwU1NQZ5cCtPCEca2RRuaLfcR4xd5sBssBkm5uLG5N8ojTNSAD133Bo2nS731E",
  "key4": "2X3QkFxxYWqsyean1YVd3QhAyAurZApCTkmwrXP1Sig1ysMbgUhjAf7KBN1HYtxNSpo5JwZJEeEv7KqNVjYWifph",
  "key5": "2VYEPkxVMMS4ePmsvvk7vE2mLQa5VgKLJC7JMaTm61k43xqwXpMuLfJcgnqSzP4C1pgDZG6mfzjNR64ThTfy8DZ",
  "key6": "5sRmMV6yHx7d6U4NcKLmcDyE8WaJ7eKatcrHisfv5aqUfStzrg7B5vAcScjEAxdTNTKwKiih9Q8MfP3Shuf6Kqpa",
  "key7": "3NYk3KqBrKQtCnybUcYN1kyyPBeJWhCQx4urjivRTRJZAADseJ5Af1kUQ1hP9j6U2FM5s4PXEoSpKAJtd7AnywhR",
  "key8": "4hAUD4TVBAhdb4HN3nzGReRtNsV8GUN8Qgkzbng7KC688iBqP89jrs2kEGrdvyaRvdyVcJXoFPuJP8E1MHSGpPa9",
  "key9": "2dFGt5WesizURDzogWD4pY4Axp3SbBf2MwCqjDsgLidfWj9GW8BivFBjZimu9JcZgz59LD4BnnVmdJrgTLyvJLsX",
  "key10": "48cndVKa4dmu6cz4UCQKdjTvCS9PWgNHu9sYdFk5S1SvBK82Va7TuNMnF4yqVhN8YcvLmgBvip5XVD5cMwrhcrHa",
  "key11": "3wwaoVcg9wbE11fZEJBqUTLGhka1jUfTnMgkMjWAku2o81X8MXdt3AnbwR3tqBLGmKKf8mXKFEqoz8bhenf81vAc",
  "key12": "3xCPWPUDyzai4piDxeQP2LinWUwPCAH9vcTtA6LK1Ykw3zPnHYPqka8cvoBwjZF5R8hKxEU7cPW48xK2mZ6QbNnn",
  "key13": "3ZF4gtREK8Q7JG7ndk463kXFU7h4URewpJJWRnpcn3wMQaTdkfTP72rWM636mCg2fD64CFmxj9uWnvXro3iX33T4",
  "key14": "5zVZnTZupMepcuMkCJ9TFFcmDiKNd3ZRrPP1eRheL8voU2QGWYnEo2J4E4mKXMtLZpra5nwtXn6f7L5wUBZZMgUR",
  "key15": "4ARDTjf3zy4tQjVZnnrAsdNCLvLzKegdk9FsmhUcdj2HMv8Ev3aHNT5D91Qwe9VMFbyYgJwszaxZikSsKTewWame",
  "key16": "3RuoA3wpHoBzqMudkgTKFRmRGcF4z5qseVQXage3ckpCtmuL8SqUYvmpHBDuwpdh4UJTUpCrEoye6X1Td8oSZrUq",
  "key17": "ao1TbA1gJhFsV27fXDk4JqZkuDPVmPYRzsicrgNNp3aBtm2uLc5KJJqyy9Cxg9yPmeVGnrmFcrWxPsHEqHvHxAs",
  "key18": "5aodrbpbKGxeyPuVrmiC3pqd6kWMqQ7ut4raQh1hoXWo1TTmRFFBkDTqdjtNcs8RHVGXSrpEHc5XtfXbN3Fr81dy",
  "key19": "3S4oexNyqQYe36KhyUrmps5EUiFJwctefXV7uUBD7Lx5n7sUYUCmtriugpgzZ3uvZRVApV1p2gsLTcrunaXwbtDg",
  "key20": "CCkeLnYn4G8WF9V94zTiwbfHeLL7jw7tLRteGDJZr3W7wBKaDCzEvJz2dJvH2VM5JJVXiCXa7XcvpZjeWeB5yQE",
  "key21": "59vw3TiPbNgkVH1ppeP9E1zeeUZK8guKQ8AHcwhiUKw2qNpTFN69QtqJwe1YXvkQVbJYL3vdaWdvydmXcPHawTCv",
  "key22": "4LuDf8cVNKjdJpLcN3AM7UrwxkSjmLPtPjbaEQAfdWQyfbQYiVXWmAJ6gZELnpRUzUMZmPjaTTvQmfsrWo6nDJFi",
  "key23": "jktrkoxdivaJT19uLZqv2sYYB9bwiJ5Kmazgb6xFSdNEiNQW5H62Yho3CKs7YzqYAEdNwUeicaoNEvnWUS7Hcyt",
  "key24": "4khv6fyDFqJsLqUcWjvk8utPVyHyEwMm5gNJQKb4gjQAQBC8Sg96BjTUYHkVUwQB3Aec8QzPKpjGKGHUugxHsig2",
  "key25": "4FC5uKvA9UHkNnziEhxcqYEaJyArSBDFkfmDR8mF67KJdgB9ttspr3jYRGJu1hx9umyf4vDdzzCmipBADBBh3P79",
  "key26": "5ZjXX7s5cBuQVC5iwXsy8Y3fZUkRhXDXtWAgzeMHErAe6MroB2W2QjGmqhfQ92SRVr1vNWWzHfEbSt4bWbxtb4v4",
  "key27": "2LmSyVqbZ8MY3ARc12uLudr885sYzsx66yn2nmDDjVwmP5o5jPg9vv8JAy19eXqXsoYPizYjqguhkZRsUmXhVX9K",
  "key28": "3192KcjbQHgDjCFxNMbEhHum3gDw8SgJsRguEWxHLrHNVz4JfJHxjiMvquovDDYynZN98sLwMaXRU3KVMVffUK4v",
  "key29": "5Pxk5u7xzdrfmLqwxcYUP5USM8ExEyHihhprFdEg1NyuEypxCYwKuqhz5FWFf4n6CtoTmTmXWbHfhaV8pXLQ2umR",
  "key30": "62y1pFvQG6oQEbJsSb9jx7TLFXn7RTtvHApiJbNfVrpE7Gv1YmVm1Wk2MRvy4tsehssAxcAq4dL14QyvmyJVDGrm",
  "key31": "58GCDzQQEeNHt6Nfxp3bLS1hZZ6YkRHSeGdEWcb6kSc8EeeVpJQLnNXNwBngzcQ7jpEUVKjnb7YdNBFSrBik6vER",
  "key32": "4rEHcRswxea8kEuXFtavduaVTSmeSBqYk7VzQuRMit1DSmGTVBAt7qmbQu5HzKB8pcLcMkeQYC5yXYMje5hY2PRW",
  "key33": "5WVse9YSE8JQ39PKWPCS1L8Ksq6tefHcvkw8nhHDWRgU75Sfp8yKb6ZCjiSqMxNE49Q7zSnrqSZjaTUfY2RtVyco",
  "key34": "34aNepE9WLT8MaPCgzhCc3RhSYM4K7yBV9R7qvwmSgMQsHLxKCsExBoifW97nF1HDgKNtJpGis2SXpD81PQX7XWc",
  "key35": "5M3HJMykuheQ46ztx49Yz9aqGQPvsqcbvxiAjN2hoy9gtqS8R7n9fNX2jMUkqiKrFzU3wYY3KhdDsGSdgDCDC5Us",
  "key36": "2utJTP3sAc2Uijyb2pmziocdFqYDcMcJYMzuhJzoByfqKUxSmLhDoDoSPq6MB5CSmxffmU4VpYDQdPy6W69yjEc8",
  "key37": "3ULZdF2Wg5ihxTHQtRPhJp42sF9rjtFkocfEWn8gB2hWQ8DTcJ1TFVGqUNZMZAGFNwLA8wFQBeRLiZnhp8hiJcAx",
  "key38": "5P7skTYVkSg57VU2Dna36ZBBivdpik7cJQ9RjDRww5r4J1MaK91GVrGrowCJPTz21U4ywwyPLaEU3Cf5sFAXenmn",
  "key39": "3SRxfqUjPGGBg5kRAFzLDr4q2W59v4zcExALuk6NYUaLpFRoXZFPUPCKVZfmhvayaGCw8P4RNsDiJbjaonHFP21w",
  "key40": "4Kq2t4tQ1NytejQLPiVe8Thq1EJHF8h1LrZqjR3rTYHSuprswHV9ZbhR25hpY9GqaZ9cVDHusoxUknTZa5sEmCET",
  "key41": "2pKTurmLkeCbGuhcvXAaueXatFcZpje3Wi5CQaeu8xjcd6qQqrrjN8ckEde2ChS6kGqsezN3ZsW3yoXZTKECUo4t",
  "key42": "2nTzSVJpUoGfW7ouivYacEj23XT98hT9poz1iXgcCExUHoJR2TXHMBeW6VxjcHFMoJBhvWgrgREvtEPN4Pvy8NCa",
  "key43": "4VJgr5XVK2Y3DEd76TRwewPWR77HL3jvAufpXkeXC6xwZxr3by4srw1C8NbQtxWkxRDUxKMQyXvqhLQ2xkoN7XQT",
  "key44": "EprZQknysKeHssLUe2PCbe8XG2qVMWukc7g4ZDa8posh5qgyLdk4FWtWD33iY8GeqmnRfL4pYSzmLTrb7bBwmtn",
  "key45": "wVo7jwzYR7JGNgq3TPMeHBPTd9fzDMNHZWqZmshqLUopKnk77fGAAzJJunfVnNYXzf6XXeDryw26JadN69VULQF"
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
