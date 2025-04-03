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
    "3vJb5BYsKaFuaApoZ3oivdzN92qjBKjmozUsiMKyHd4xNLbvenQDqMaCfZ6233aaqKjtoY34Eqh9JLiuRfb91g7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24duUUow9n763aTjBdCuWVw1DpwP39dRmF9FKyvsYcJvApp1fnPF8CGt6ktNrQvkwDtK4VY7gFGE6raH3bs3MgcC",
  "key1": "tmr5dfev9Jta4TLppA3fiX8hxuZtGhssVniTFKJyCcSGaTWa7qiw1UDF9pqdpUC79E2nbxjCRUXMJUxWA47ts7p",
  "key2": "4xXUsGE5ZAP7KyoEtdrypFBHNPa5wZsUUJ2AYZ477aqqCmyPMC2n3xCf5CiHvoAFkEybndeQwpLYBRJ4uPiKent2",
  "key3": "wY82GzGyhZsuc4CU1LKUVRVSmh8JWV7qMPKhXFVigEHencPsZ9kFR7cfDVe65Cf2fYqJJy8zgf91bwQyyyWWEX5",
  "key4": "2mp8E68vTc2zLukYFW36ay8E8cDmDYPJAzqYYnXNx5pX6VUE6GhRR8JYmZexyKyxSf4KDRwByu6ufohx7HTmkHRU",
  "key5": "4Wxt4YWe7N4jKSVDpqkiaFEZoRkVaz7PGag8AMD34ebYjUuweqdg1mb7LnEAtCGXMB23W7wqFbqpKkLrSNYoaKaC",
  "key6": "3RqVkv9o47ayYSqN22fd8uu4cAXpMwwJTYvYT1iqhqL6i6suwq6j4gkxLTj2Mer2qKMVipbSqsoQPDArN1HEVuq4",
  "key7": "5iZhyFhGgx61T8gRoU8ZGiNqNLsMDDiYjWzT97yKHsqoWafeJZUa9nAYqtS6CYMB4jTQwhrj3PKsE4FsPVxQ8eVS",
  "key8": "3Qgapbfceygrdri13UBdcz42ZmMTpenJisWHiXCt2EDz5fP1J3hFrbwyHZ8ZArWzuiHhd1s5uEX4jXvFt5rEzVBg",
  "key9": "4tVw3TALgrq3bLnprkT7bvmg7TNLuEx3tgveFXqHUbhJPyZc6hov8MfJYpRccjAqrVN6X2qDcAWa9ZRgeS47cRBj",
  "key10": "dkLpizbgsLZXFVPKW5TzZ4vpiEbZcyuQhEAexrEs5yMjobp2UxieFd14G1tnSi1DQJs45jaGeSof3SigLPvZpMt",
  "key11": "2QBCXNNPRkBQqbqBrk1TuVDKEDGMHTcjFHCpjd6quxJt3eqzgCyZPgCG4u1y2DHPKLt72dUNQ1HsTjqVYFbBTSBM",
  "key12": "2nSWAnrD6sLk1zQG5t3QChPmVbGqRNcS1TTbkR8gWXQgRcfwSGkfJqH899MWAcRMJsk3XfEs2REM85AL6iJmd558",
  "key13": "4A744dmpQWTqJpSqW3SxAi92AcDcyfV5NCnV8hu9mvpZ6wpratKcHhtjx1oeNrXKf2ATh6iDQXY6ADizKVYnBfnC",
  "key14": "2emHrECM3ca5KPohmiVRiRiFV6q6NXpBs3zyvRKH7c8qF5ZwBwvJf6ZgwNEZxU1NEUb1SxHVdKEFefSBrBWR7c3h",
  "key15": "67qMW4hqrCN1FyqVUNMVr52dEBYoZyE3dohVmaqM8o5kBbibQMraqmCfnYATnK3Jb9K3AQgwFHFULGUoaiGqDjVK",
  "key16": "4peaDvW78vvH8ZPVp2XwyyowMGdonQvwHXmW2F65obTzL5VZ79y5zjQBD5jKgFTsoLXf5EoFw97LJVKrWLxw81x5",
  "key17": "2YX72P1pDp4D3d727373jAjZavxJfTL12xEw5icb5huaUvdioMSxrorHneguEh54vzU6JSyKVHyv2eaVudSpPkef",
  "key18": "2WL2VcQyPLGYx1pGXhjDXdgQsxkSdFkH9N1KkYARPjBYGZs4sTEeYhPqczzQ7QeG4Hf9CNaLnvq7LYbfijrtF94N",
  "key19": "qYtAR4F2QARkNXrh97NKcrQFYDStyCGJZZTq1M8axPrXhDgXioRZBymYcZ2hfFrSwRpM9SNfv11WLNCkrAHNNPJ",
  "key20": "49epRpYD6GA4Crt7KD8CVBEGFhrVXposXeDDoY56htJGNE2qpxFg9bZxJsc44kNExxE1Lvh2EYWNLP38jTtFCdEr",
  "key21": "5bVbgjh3QPMrTStLUWCJY3JNHTSsNrFqDwXKUAEhbLy6zHjLoQpL8tj9iduoLZAZnBWuBG7kArTdnEaf32NkbP7B",
  "key22": "5HMQzKt8B6Wo66r3F7MnggYr2gEGkd57Hsmwkkk4KVaYQFJxbiDf2VtufdQHommzwq4xWEEsxJUXaE4C1ZsFm1VP",
  "key23": "5Z6n2BAFAQbFiSafdX6oFDyFjcjBuKiSDSsjxxnCEScYhB9td4GApjnWJAEDGExN9pfzSvSfFNA37G7rDyymmpxZ",
  "key24": "5f2Cj4TzSVYnyjkEzdcZkSR4P74FEkfwGDfvEkHXm1bVx4WHhB9BmKE3JsiGjpSBMaCoApNGSQUv8oPHLEUvYzW8",
  "key25": "7FoYEfbdMgkB89WpzsG3MScdPDM9g4EZpX6LqhPDDfftpLBUVmhN97LBj1dTnsHwJdANfJbHyzPu7ZkE6me99sh",
  "key26": "468aZ6HoRVsbJ69dzHarZMUAW7QxKxTCN9viA4Lig8TCs6DN7dzBaygyad9f8pe6emMDnqk376Ae9aLcXqCtYBJT",
  "key27": "4roQ86Md3Gb7ASVSaFaMH13vBYaQFGV7LyYUPRfHzFaXJyaZ8Awd4au3Tmzmy25JzydLLfAunkjSvhzpjVvBVucE",
  "key28": "3Pg9Mud871AzqezBTHx2BLNwNT5nVQcHt4MXEDrBKun7ZiVVtFK8B1oMeuux16F311WQ2X1GJB5vV7pR9GVkhJQK",
  "key29": "38NfT3B1dWzqLwDx4mj9SJbJUahppUyXng22JKwY5rxLPbcJvUGb8wbzszGnEQs1fdaeoZE33MNHEi3vTk1HwfT5",
  "key30": "5MUNmR5rCMjes6wUmruwKwvFuv746nsNNg28zRSBho8PmMAU985bL8RDH9zkvy6r4ERE1qiKDAdwrvhUfYVQkN7K",
  "key31": "4jNPGWNLNexTtoaaG1XtRawYwnMaFo5vEUKQHBLjxZN6o4LQCgfFvxJNw539cVJmNrJPagYdfnM9hwf1sAwNB9kG",
  "key32": "4jbPmc3yf1ZDzHBDJ4gYkJ25P7muWCAAkf6aC9GNMcWjjaCrXXSRTXUd3TWBENS876Cy8BydwMwafZeiXHpP8TeB",
  "key33": "22WHp4xCcnZV3bmXMTgFqwFGLjcQ63dpkgb4pShZ5jLx6vUemjpxvQq2y448wUgCNtUkwtZE5XhDu3wgRPkLrdrZ",
  "key34": "5G2T4DuTi6AMRgmYFTqxXDMBSvgYNST3raADZpqTf7UNvnApq4QksCQrPa5ZMCiGjAjmdE6ZFbseWzHV6o5Dfhz5",
  "key35": "e2jngRgWw1k8Bodz32xvkj1GHW8L6TMzUVgpjCDEarBrWyP1QYnnbMwqprskLT6ivoWv4AEhiRZqGfW6Ctu4xAb",
  "key36": "2a7apTmH6B16JE3jiUtFxRdRfnes3vATagKDjcprSs9HKtnwt3tT4wnitz6SNJ8HWmLdu8mHvwe28QQ5yftjvmQv",
  "key37": "2CeFeijZBu2XaV3ugxZdVeMRPz4DU3PspKEP5GEtvENaWnZjzVTDmGmvuJAHiRLphCEmTMLhE2eBjVT2Pr4XCikA",
  "key38": "2cnzBozmSccqNuADXQuQXkt4qVW7pR95XE8XQ7ZZ8JVUceqaQWiMXSpBkcyvYo1D7bHvFj26cWkyDP5Kj71kzzgz",
  "key39": "4s466bATTSTk59h69aXXueKU1S6TgWkWtDPFr6Ud6VQwoHnveEFLeQzXZdAkSX6bKXEtYpYzd2NLHHZt6wZLweuU",
  "key40": "2nBht1TeUbr11Gcf2dEqV6a64wufugs5KpVq14qriEJn8yhjeVtDeyN7gN9cMBDfom2vTEYWY5SmjP545E3RqqUN",
  "key41": "5Af66QEYQk7oiEZpueUef1tqSsqocedgWJ5vco9nKL3ZCqfrsikgWV3zZ7ADt9SosHWqu1ZTu7oDPyRQ2VCaxv41",
  "key42": "3esx8hXnctc8M7G5m2DGfzXUfGFacciVk5unAtkFTfeCSAKckL1sRRz4Z31nwrUh56Gq4Hc1hCXck3URwaUzzsCC",
  "key43": "3umXjvwQ7ZMv3wS24ZQyfJ46GuoZey7NTuMqT4rfrAqCMS2S6cXTZ9yeeNJQ17wHRwvXysTm9uGnqyjEsxCQTBia",
  "key44": "5yRQRw8jXdsbLLsiAmch3wVkkArGoTERnwYsvmLpbrAPYLNM3wKg2Jf5uVidqMsVMKP7kgw9W5jq29BDhmHUvzoD",
  "key45": "2TH3fdUF2YJtZt5hC3YPSMAtdSU9MZheiEEWtBCB2WJNzuZy4Qc1pzD21Kp9YYpQuvdkXJ2S6g5FeHP9DuujV7ad",
  "key46": "3ZawcjxyBwCGegxVbTjLrjhNQowyL37KRmCnfknGYME1uaNQUMsozPoApthKxScYkqECUkHcJ965aU6JZQjL9Fio",
  "key47": "4jHCZSPKgZJmLhRkFc93feG4hfoJH3JjVo8wMrXcfRh2LzJ1Mmifv6jyio72noef8RX23LsH1KKgL8mcrjU4zBMH",
  "key48": "245twozDPUfQF2sB6RQ4CQPYnvzZ1HPDRfoqKAKpCMKg3yKzMyN1S59tz4pagL4HWogHH12da645Rmrq1nXFsyin",
  "key49": "5oqUV1SkhanmGnPi8B5RuUJG2pgUTLmFFeqmtisWDDsQ5HKwiCaAEAAAzFBZxeF2CKcXgs2HEbRJaFw7MWraknj4"
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
