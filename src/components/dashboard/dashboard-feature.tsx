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
    "w4KvsW1dvJvSjhK7boL5cLurfN2WrjcbrPNG52Srukn7KPxCx2hydr3v55PhP6K518iZFaq4Qmb2Gq9t7j53dzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKBwBj6HeW1RbWGQgL99AA2aRcM6qPYZZGqxdMvdywejkESZGUS4Wz3grXNUbyqMJY4sPj8TJvp7tbXES88K4Zm",
  "key1": "5DJExSGEwN59ATA3aJc7ba4cuJ7vsgCeRam64UACp5fZbcnXxPLuXRs7Wg6CKPajCkobyznyvzmkFExB6TqTSXXy",
  "key2": "YC4dH3fyZCjAQmJEyJxasf4RonU1GdY1yMe4iPgyAeFda5c3knu4qVR4ajQ1DvPxiEMdrgL2eEkRW24QAqCBA4z",
  "key3": "4XGFD7Cq6WVWq6QGdsqxmV7JvFFymeNSBenF1oDRj39CcuLAZbLZ1FuFp7NwBzgSMKRYLbnAQtmyf3bnmuQ7qBxo",
  "key4": "5Py1Y4SqxqicNqZSakrHFitasXiy2t7zfDHtX3vfov4uFSKtnX1GW6nxj4PbAL4aE74yJsuVHpgqVnUdasg3HMtp",
  "key5": "61QyAe1PbaepGtHST3hfBapZ2TYsy2kePxBiko1pAZH6YNVkE2DcSF87xaTL2Enb8YxLcfBvWcKcX4U4o7R7Y1s1",
  "key6": "5ncA3ttuXYRpYr1WxeuEQSLbW382abjDa1vQg7R5poFeCGrAVpojcTvHckKKCq2rFJDCvervQHwp3RxqGDx9jxSG",
  "key7": "4G3guMfT5hwQxSkftvnQYKH1UMzpiVzEVdEDzYSgji2bGCoHx9muf1RxyJiCmBrsPuHPNEPTnwRH7cqsNaX2uuQv",
  "key8": "4LgrD9V2vrujuE3P3z5aDYH3pKthRj4hevP24f1pF1NkEoG2fFeCevWbZ5H6L3d4EkBAk14PkGuQbRw8WJU5CghV",
  "key9": "zPJbXJJNjQ4EL3SyEdY14EWBS2JQs8jd2NxN78eLpjUzWMEGXEhkUhhh48g9oRCs6kL5wfThuP98h5wkZQ3pZuN",
  "key10": "5FCHiZ9otQLkbWa9vsZZWfmibypeBHDo5LNpEY3V5YqpheAX1X8c6zxYFQkFjYpXrn1A3zPYKbsuLsfjsmHUAbXm",
  "key11": "4ko58BMpYSNLyD9QF1QmpokizeqhdWWQecCdFtbnrAEy9quSXMEM7nrzXpT2JyaPwBG9sz4igtKBfq492gyQfpjB",
  "key12": "ubKkzHP23abE6YAtYV6ui3TkVNzdnbZGcBiAKT7BFGucdmEdrAbvFRvgthoPqyc5Txfqg4yJcacte7CmU1unnRJ",
  "key13": "34rRSxeksMdVVbeYGDK74h7nGdwSwyXRASje6Rze7eafjZnoSyt9SoYGZoTJKy38U8hxKWZ8RWpfaPwGoKnmD19A",
  "key14": "RsVk6jrqgWZKj3TQ86pXHBiRReEhz5vtQtVPzKHyxfMycxWhvZm9kqSPF4KB87CNPBGfSHhwCivH5V74SwmTnKY",
  "key15": "5oJmDERtMDpVc9JSbVV3TeX7Ubnhs6zaSLWxjFyn3HHZZseYYwnwaBFnfQmeDC9QwF7dJrvneKg9aVdTRMeH3oMy",
  "key16": "53dDj5L4emj3dwjxf265dKrfqoi2xhJcDhsSNYQ2m9wBDd8V69Xa1gtC5inniiBFSriNQ4PeGs7qagE2hptNDJsY",
  "key17": "44HT4MrMyqd6oUxCPb4hcUmAJsbp7utcBhaRHVgJFHH3ihguyMYFJ2ceGja3fS2Bap9sJS9KT6cK2Akd8Xd2y6Mn",
  "key18": "3ryET6yt8TQkfRoh1GZrgYqJ5CMVTmE6Mx7vf817U5hDXsxh6Jo9qvgWgfoJygpjx6sXtYianvmKuZkkUsyRwssN",
  "key19": "3rEViB9EG2fZAPyPYn9wCdbAGJbZB9bPiBoVKZA5Bo6kcx71sut4MjunbFhiqdJ7GA1Q7xKRq32WUHNy3btZstRR",
  "key20": "2rYed8dZv79QTqi1cnNrDe1bxZvJZXdgEuJ4KdYwLT5QQWuuTVXNKTUPLXwNHGGCdE8G2psuXQ5NeRGyoWk6mLt1",
  "key21": "5GfPpeFzrm8EPm6JhkmaSTyWgBxyRyB1JBP8BquVWXu5NqdR6kULgAabmJhNHbGrDcXYnRArwbeeekW62NNuQnV1",
  "key22": "invvxDRYNGCmTAX3K2DjCY3KtEejnhAjKQtqwMw3vuc5b3WT1yAAXreAC5MciyDSE4aesApkAU2xV1drLP9goJS",
  "key23": "61hziASRgc2oWS8hWYtnUVCd76zxq9a96KdfCjMdu2EXDK1TNLN9LkMchsfkoHtoYCzftUBVjjEfxx97s6FjHYiV",
  "key24": "2ndG8PZSPA5FMpH9TmKPimEm6BXqGRsRu9rLu7JPDBx12RsiKRD6Y8HxmS8RxApSnugUtQUV1iv9aCbZp8uHVmFk",
  "key25": "qhbw1bht3tN8hTPCB3BdHFCoEgFSoojY3xMrM2P7jjE7Jjwr9PHMLTQz1N1kJPpWq9uZc8K5H5kb5wRqVxcGiCr",
  "key26": "2hoyN6LQ2x2xfxe2KeVyLnRMDxjYFXetWbqkxt4vx9hHZZ61vSRTZqf6HkMdCZfXjxzK5iLdeHqEzzePhZXWPAer",
  "key27": "MjhnAWRnR6tDbfCjz6Fpwt6heLshdZNA2VPESUUBBtsUVP2VV1uG4oYUMUSHkJc9RZUurgC7P73nqbvxdoaEzAj",
  "key28": "3eY8GqjNSWGAhtCz4z2t8gHRSEryYHA57gVqa28zciCn9oh6SmKa1mWjtVvgKumJ22xfG9CGaLp1eoJtUzzPASs8",
  "key29": "4u813tgSFbQVnZ6pq8UBPo6TDVCjZk1pMdL8qt3DftbyAYWgcSnybnPvkxhRxtM3iAjRnLapJz4whCHc6ZDYC9zp",
  "key30": "2WqMPK8QHDN6zBHyxR1JS8TTR7CLJNUwxe34Ti67JmVEJ7F2FqhCpGVCgP9EVYy1iRJJfTBKqa4J4AR6b3jKVwjD",
  "key31": "2a1SpUTGPXTLhSDjUc6ykEbzEtUdFYUV893JicMEYDJAkF2M374tWdAz86FG3GePuPCz1e2GPor5dEGd7ct5ebbL",
  "key32": "35ep8Xfe43bRJqqPrLLBoz7VXXLAMA8h28mMo54QGSuurVo2f8kF7xDmwaVs44vHFGMkP236Z6H1BdktMzCyHqYJ",
  "key33": "5BTdpNiwDTV9SekDwqs4mTpgD1NLtVqUdMvwamF63LUji9P8KnyeqUSZzFfBZAobkTXo6coS2DQfrA55iuMwsSb9",
  "key34": "4nnnsSqHG6UAfH3HzMdYYEnsSNb4rjcgHab6aE7yaRWY9ZCwRU1h7sETr6PxRumzLMbfSFcdA7doFtEti245BzJi",
  "key35": "KRfrFTteuRALv5ZMQXJ7EXf2h65vUbYJhnGHs88mwub1i2nzKuTg1eAwRpghUoa6tocW2vkrksJGpDMXDj6umSA",
  "key36": "26FJVGmWg8CbtNGPFCbftV1fQd1k2MsM1fEAE3wDb6ynhkQKuRABQ8caVWCxC1GaVtr9NX2GzYgKWVQ83sKs8NTL",
  "key37": "4aC34M7HsnNdKEgzKfWZH6suk5qpDti8DhL41yYJnEHQ6cUxqvVxUJNnJrXPES2A5ZhTJaDpbZr48HTDhw8kNBKq",
  "key38": "5LbdNwpMPZMeDFgz5YxoVTYC5vWU8fr6tXW9pX6UdmiLHqDxE8Ai9VPyBRVPnP96UKVv7zvbY1UYt86MzGj2C2HK",
  "key39": "yef5DQA3wrMebBtbbsgFVvJ4gVZGbfXXrCzr9uAyT6Jkh8Av19veNDgEnaPbfmPB4zoQPbc3bGpN93LimPZxhL9",
  "key40": "4MTPYi7jryQ8PAGuTcDLb7LUwDug1ShEvutKrkCGVrTrPoGP3FHB3df9Akj85cC8BRm4VDJLkJCkcWLhLGZ82zuQ",
  "key41": "4Zp3bmeDhJr6NSEVJs6T4XDpZZLXsj6vZijoudWFjrFDxx25zQgNZwFhx8jeXuxjVwbAZsdS3whqFtANVNJJBDdY",
  "key42": "2qG3a32fmVGvnRmcVbjMbybnnGFjd6W1q3eiwyJKmnk2HJa4H1M343cnUt1uPrktgbCKU7thTvntnBWhFcZcmkyF",
  "key43": "mUb5UZzGYSr7mZCbxUBqNbpoKtsyFgwgpkRg4yXF8Md4DqX351gtmUf999mB4SMv7bXonz9Pnw1HXrNDFatN8eM",
  "key44": "YyD9Sqh7AhXHPwVcaESFDTWi3Mbwhqxk7nvj5yr23USzDgAVG8thBtKRR8d4ZYy4Ba3YGHQsk7UDmUyU3QXYd4o"
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
