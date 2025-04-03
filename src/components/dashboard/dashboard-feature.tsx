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
    "2ofs7YDkscq2rz2rpbaekhQHV1RUZCRBZNVhrr17VWzTVi9QX65saiZZzqCHjrophw2jRPm24pk1CrEigSvaNrfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RN5kGDPqk9o7QX9MDvYFkZ1GQY5U5Ujht4psfhW3HqvvgysvN1HPP4zCtTSCGtpDhu8XeSsXMskuPX3BsWFG553",
  "key1": "sE4hL8vxMttkqgYUzh2yimP9Wt42ocLzvhWeKPQJvCHLxKVBLpkvmeV8knAMo5V9aMYjX1Z4xCNfrSgCXJYrwEG",
  "key2": "4L4Ubnq5VPCrqHXzdpcrmX6ZsTbdpRh69ZEu5UDrAe1e2YjhGXPH42dDoPU2gTXmPZKmvGkctsGKc3zLyAP9xp9W",
  "key3": "5TLhRA565sBMMEUo2YhQZWdDLhQaSQ8KNftNPbPpMU78dbRVy3o1TMfGZPbyyMq5iTq3Gen9pABhvEkcEAiHotZn",
  "key4": "3PuiK4WbfybHbdNxHymsced5REPjzZsFKLcjebNPqAijwosgqvQsSgKWgkiNWp9SgHQvinERYQG8u5iymfCuibL9",
  "key5": "2e7pQsNMyT7LUYYAF4qWb4PaY8EiNw2r3jfLfg6V8tQaxL9gbkKe9xAz9rbHprir9HmkmPdFR51avUt36WWMQqTa",
  "key6": "4UaahuNTpRBGLZNSZLj7HgYUE3Bdmm8PCK7iVcjAxEfFzvvPc9EzahPpB9DENr934GwwF5XeLve1FfpRo8NKs5yV",
  "key7": "qTyDeGy87qiAWjuEGjbgvMfMWLqde12huz4zNx19doztjFFVVFbimaDJsoL5U1wDNVT4UpSzeBn1b8Z4D8UarKa",
  "key8": "2NFWQAZLEvmhQCqKkvaoGbGuHagyfWdNdDb8mtk1BYw8xAMZ3eY8jc5Soa7AFddPbj8F9iAqYBemdc4GAGqcDjzr",
  "key9": "5MjUjc8bKVDkDhp4uLqQptnLAVwFPPRtQwbKR4BR9XdaAeM1SoQP9GwSYt1g6o2sMwjUm4bNyKGPvivGE7Q7rtKC",
  "key10": "3PRkx2GVm6DeFzFPbb73vEYmjCEM4CysNnNP7Q2aouToVzJgh6GrRtotZkN1ni5W72rcUkq2oyZjGJ7WA61k1q63",
  "key11": "woBY9HAyM94bfVhn9cExoiwmDeUpxyvHiXDdtLKodsVxZEZsRWru9bopQMZ7CQPUi4ETTUZCCkd5thXLAgqMng4",
  "key12": "3GW3a3p6m27f3ZEb8yyus86vEVKt4RTqCheEMRA2ayCSbCqKFJ8gvEnb2VcvsevyNp7sBnTfB7T7ttsMdAz6sihZ",
  "key13": "5zXYB3nSyymge9j49vB7R2swy23DYJoxJiPq6px7kRUG9hRXC7d9w6WVsFSNgixuchV4Y75hML7Vbd2B6V7D6NwJ",
  "key14": "67gAGpTF9HneJ4btc8odRnaxREszBvbkyZzUF1RyVFAnuU146S2xnKSogXkBX2w9byHnPbGuiUnMvVV8Hpsx27KZ",
  "key15": "2X8BrVZ91hgzjVNbAjoC45BPSqA4ZpRnk6jiMmHuWNH3BJE5QbRFZpuv4BsvkdjdYR45Nf8xZdDt3GsCCKsk8qN5",
  "key16": "3r6Uap36VgWuLhZfMfjvoJ3ouUxymyxB2DbDZzzaftFUJneMnBMJmw7uLzGAPoTffwtf4K8D1K1iSAhoToPsAJ4S",
  "key17": "2Tc3K6zpo1PgW8a1awLip21nxgaJFXboGHJfjgzdgn1f2QuqWWZFh9A5Lm1WqZE3qNodxV46bxNgPceN2kzs3xqp",
  "key18": "fBic1rnRaEzE8VpCzJmBXP8k3i8kZWUyxk9n9XAgbdPDBY16xS6RmaNkTcXXJAL6DEZokpM4ErLhCA4Aw78a9qR",
  "key19": "5YwELTvCrz7M331Qdg5huSR4ktBk9dbQnGv22bQtfLUbgBwEqmvhWEqZVftnKGJ3qtbGY4Mz8gd6AngsunAQTN3h",
  "key20": "4coKiTiJzrY2Yd92ugzGa68douzqBd1A3uWT9kEjyCJMgDNCgyF392LfGB8PSHziLCZMY2PhLKdo5Frmws7jH34c",
  "key21": "3C9C7isc5v5b6CnMKPwedvQw1osM6KfjZuY2oDMHHDqiMzh8MSMX4tM48JeCEY9KZYBiBezvwYqvvimhG5VdQBZG",
  "key22": "2fMhMkdYGzP6DuZjxj2JEZUVZB13wYQaqa5TUE24GXzZQFXDnret1kAXDtY2wbjCmZa7kzKMFQddEgtS1temLk7k",
  "key23": "2QDAsQgZjeXPaqAP9FgRjsye4bCfcEEyrmnmSWdZUoKay25ECN2hwvUrrm1TrHdCoRFgvTV77xFrQoFodcZmvG9o",
  "key24": "5zS8Wmgeep7Z7vzWYBTn5vHn766gG6u5hDpyj5VYoNPcgyA5hVYN9SyzGtoUHGdv3RaHyJMMkgBUm6Tbp86qLeXm",
  "key25": "5wtTxCwH28Psmrsp2ehhMpMLWm4ugN4WtbCjWt8z3a1v4bEyqoYbwCHpHuotERZd9fAnpxUCg6sP73yw4xVxsNCi",
  "key26": "36V7urgrgqb2M8VbY82CPgaGS1V8AC9mtjV7mxDGHna5FG15xxQUCzSEJaF1LnzYWqroMXCzcz5LbkckRDSsoMQQ",
  "key27": "RFTz22eN8YGcqrjruHrSJq91QSCSmH2jrwrpZ9Zh6RzgFbprMBfvqZMRdR6A2bXvzwQSZ3zB4wpZNQs39gWDLdp",
  "key28": "4Xt1tHUikPe1Edn4Vu3C44RCn15fC87Di4VYY5j6fSnsMaBSeKcUZNaZvABNw6JY35BrC44Z8PAaXm8ML1BAuW8S",
  "key29": "2pezFvQtzJiscUCuNWMYPtNjU9asrket7YSktxHTEc3zritoZEctYaCnYpc69yL7oHmc4HpWH238hH4yPdZX21qx",
  "key30": "UEr7aAhhEwX6yUKGZ5rQo4Uqy8N8RC5Um6ce4VDq7T3sAL2UxhPKMFRS9xm22fzv21kKFQNhQtUsAGSRSVK1EfY",
  "key31": "2Z5frKj6B9uJr9YofucQhcfP25zPmsNXzdiZ6fi11r4farMtkT12y9Bq4nRxBmfEqemSzNFmQ8zvmKPS3VcJ1KMw",
  "key32": "55sSjEdj3pupEz5hEqjLBtcHFi1dV41T5QfDdukXg6npLFLZFSEkzXGtyR5jJ3JRsHYLm6qNpg1FPyVnWJ9qztj4",
  "key33": "oxWiUYVZhmgbuPbZymyMRnTJKDejAXdVrjAKZMSJw2HaFPVjWFp6vN4qBTtznUemidYwYgNDnsnTiowe8urwLnk",
  "key34": "5hMeK2aUDhasCovkUXYTJ8qN3zdRUaZu3dcgy2uboaTr3HPQiCtyCsNwSf7g7MDHSNkZQRohxwqKwkw9mc8YE3By",
  "key35": "5C6kxpxay4zgwDZTVF8t1GDBVFRR6L63eUeZ57yxVt8E5xZUNmdPVy87ZrPLX7DEDCdoXrjM4GofVW2QK1r8AZsW",
  "key36": "esmN3S7eiyfmBYqxNUjjVbPkLQYARtP1BcxVnKov9DNhDvbHCiuM9nqZYBAw6e61xdYNY2vHRQW6U3reghjyZDj",
  "key37": "9kcxGG3ytaw883pywi4TWakwyJA1NQe8xaNCvUozovnGFZcaUELYNcqmTCtXfqwjHeBpCGL8zYooBC6zi1c1x1d",
  "key38": "5PTFHjzETCmH52EXtpoUvgxHRsKoSBVT2vU8agAerUA2JmMv6T8XbGCbNpXV6ddTzHerGEe1G9SA2n2u5Bi5zjnP",
  "key39": "42q8VWXLfYJMTY5gvQgED9y47nfrMb7qCsSCbkoGJ2HzjAEbX6TBKBv52X4GLfmvWCooYg9qViFgmN4vLvfEcUjW",
  "key40": "3sFUsN3VR9uhheRwzRxCgBL2vYEWQJssfAuUysj8bnNUvgvYywbEdomb2wuhqSevugRVkL6pbKXu1KtmiZK3J46",
  "key41": "3htvSs1Eg7XSNKCvy1ahXTF7V4czMxX7C2SE1wVTPcJCz88MkG4giPSRJ2YU2udQXrV8mVAGi7HhkuTpdmgE6Ts3",
  "key42": "mXd94styveEW1nHQ6wSrLYEH3SaxbW66hdyvKDrNfWphuazepmvWYpu3UFixyyUhsh134AxyTy21SVDAMciBe4o",
  "key43": "3xMMkYyppUPUDo4AFiMp4ZKXQ83aSet95Fjw9WbBGx4eKf2LXDsTkFfGKNapqhzFAgUNCNUTipbPQNzGdXMr97X4",
  "key44": "2xE1Z9S6RRcW4dsMaJCNWr72jo15xEyvsqJSBTp6sYaxqqXmMB7a1kfMesVai2bSaobKS8L8kJoGBGHFcSEKupL8",
  "key45": "3bCDD88BSZFiYFmAMRnuVyrmHUVkC3wmRtj9eYue7A71CpVN3VWFmWcVy3qq2656q1ZhU7YGy1wdZnjEiwDfav8a",
  "key46": "5Fq3KpSTykhYFxx2eXBqERvs7wuouFJ7z2FWeDK1nm2VFpYEe25LPfYp6bJNCXSuUr4zHXnXwvSwLe3Fd1PoA3ie",
  "key47": "5uw9UkLsBFJ9taTvHmzrvZeoRHx1rywGvfjj6eDpHHHyFrkRESHMsXEPxx1S4JqQkQLfymNqBwU9omJMC9AZTNSh"
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
