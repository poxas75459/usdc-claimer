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
    "2CyiMV2yk9DhBJUZGT7egMbHmeHJoPgSZ6mJQMFbSA7PQ8CSjkG2KoZwEKrnqdMk1LRz6nkEjjQ8veyJESc5xEBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3nvChXexj7mhzo96FsVEVeAeyY1cyDeVHmx8QVk8fDZEVPqyQTm3MdaWnP9oKnUPCxCdBCqp4rDwLYBHUPWzVj",
  "key1": "5tZ7xWjQfDTJh1h6JDSUNj9Zzccfug8pTntw3qG8r2noDeDmLNvpPtChjKzRWV6iW5h4keK1PwWRDTcWBMH74UCS",
  "key2": "o8hnZq8SNHg3YaZCbg5UJn19BdN4Fo2V1ZMtvtd3atA8t2GZXvJVeQ9StiFJKbih78NEAe7VXvXafLiN5cFPmYb",
  "key3": "2fjJbVFRp1KWFGCtqXJRXcWb2mcJth6VAkurduXX6PvZmd2wf6ZynmkeEgaJvnLa5BsMETrj6gkarXDP43H16JGC",
  "key4": "5saG6bLVZVwA8Evs96uX9GopsTopipm9kZbYeU6zKDNNwEndz68YZ37EDB6ZXqa3UpF1zxd7qWkkH5C2YrbCMaup",
  "key5": "5284UCpayWfzheamcFnkDjyoad6QAZfZuu7a7W1SApvNy3CXmMFP9VjyG5JTYPTqjbvcTa1KkwyqnWESAUfhb5qJ",
  "key6": "2gZnPpJtdi6PKS38bYny1A9pXVGQeSyUBS8fMkEJnGVAtCbKBbkaciiiWT1Wv9z5uQwFw2oLWGaGiaZQMh8fF3kK",
  "key7": "4WY6i2ki3iFosqUgoxzeEEpDfEYRYfAMm8T4h2HLshVh9K4aDh5eeqPKLC4cqttoUSZZ7m3fCHbKqNQPdfNkNPFw",
  "key8": "4aKVwukbuCVpj31mNWoaYHLVKzhjTV4gCSLnjFmSN7shmNB6XaeApMZBAfDcDBWn14iLj5fEw1iyPCMTMUnFqj1J",
  "key9": "2TLGDAMnqsszT63U9WjQpMJZeAUFNbzAgBGHMDwCbyxuPYQkkZtobBGuzLzgj49VPp29v8osxDQnEKh5ryBRhz6H",
  "key10": "41z9Nekk4FUj9sGZjFeSnqdvWkRdBv3xA2beHjWgu3rtoebkVjqM6Lc6a1jWAxdZMzkbS7MbRgys6RZxyeXLm1T4",
  "key11": "pEfm7sud4mZU71CG7u89qRZea1Z4uvZiy3bASjLV7Z9aNRqficKUuiMZwc9pixxHmiL43i5VpYBVe9JN852MuM5",
  "key12": "2eyKSJxoyQxkHk3moSh3ycYN3QhTUyeeYuszH86VXP8a2ZgqBA8tnVbGQKjaRPwFyxUufyYUpa2A3GjuyjGxutm8",
  "key13": "67FH998N5dtdVsKnxFQUtBaV23oDUrgwWafQ9FqMNkfBqBXmnmjSfcsBvqqkop6ip2xp1WHChgDrooQc6Z5q29Q8",
  "key14": "3KF3n61FZPaMrB7iBDkVqyJPjZGei4MzQQjXi4ZiXvvAcmgLT3aKNqrVx6QhzrVDgW9PFMBzVy1ZqYZBLQ8e2j2o",
  "key15": "3WuFujGyJSm7Bh3u2Ef7hrTSv5GZ8y7eX8cdHVJUKq2t3mKxi8GM3HTvdLfotDTtXAD83iqvZUuLGjn9QpQHZzg4",
  "key16": "5oRTGpigQpGsR5fRH5qHE2wo7P1bwtXuhze2Fobz7YxcWrQTxMr7QfdZSDBhNN3UbnjwrZo7EPXPbFHjZFprVvv5",
  "key17": "2eJCRM9vgip1FxruvneQH4wJKQ7kKwQcGCRUZESDtLTfcYpCM7mMRhrmM7hm6cuFA9MDjfrkCaPcN2tKDWYN8StW",
  "key18": "2w9RMSL8dT9AjzwSgbAxvG4yeZeV9wZiwsBon2kUFL6WH3F77RsNKBXvBX9NKENmVEvXSvRUZ5JZAhAPRXiaw2GK",
  "key19": "4eHorMrnnRbbDDKYgvxJa9ZTKu4Bm6DFdfSZ6aHgNwFVVH3a4QFELAGbRHXMLZfja3s5hzr51p3Mj6eQm8iACdQq",
  "key20": "62vaMJqrqX4teQiVG9n7WLpJ8i27xMUgHiHpbjQzvYRxKyFZvMsyDRzd85rQ92src7ydGheChB1s5tdWbHwCf5zw",
  "key21": "54QRiUebAvVVQU8m8yqogS7ytRZbEjRGafk8o6BjwkDVSCqqYyvGA8rdUfuHZGZSrcPNmpPSNYeSnGwDWjyLRXPz",
  "key22": "4GxkgT5YMBJKC53ZdZqwVdKBescCF7zKB32PJ4UhnH6GxrD9ZWhJ79grprgwJDKvrrjaqB1J8pf4gLMUXUQuytri",
  "key23": "2j3WG7VywxTCUQzQebuz8R1CTeLA56zM64xrALmG87DyuZa6m7ewSSQgyuTpfR3CpjRQ1iAxpPgp64Q8rWY5cXtn",
  "key24": "5TFFTr4SZ3KX3nZiPkZ9Uc7ZKHGd8DQYTZdu3ZNkC4UXEDbtWRTS8jHHG1ZikvPWmPZp58VZMeZPJcgZw4AEboFL",
  "key25": "1CGJVBYrXqrNVwvaLYG4dmfNVUkoEmRTRZzBgDZnVzWRsYs4dTuoqPRajSavdaozzyfVL2FNeiWDMAvZcqbxPsD",
  "key26": "52FDR3d5qVPVuUm658fcHys6D7B4JVZE15bogDmJrvHnxkbv68WZpakTFTc7avARxTEY6aeuZdWPYGPo5p4soFAX",
  "key27": "2jHENKf7dF3RFcfxCY3xYKiJaNxWSdf74gWkvCA2eQ5ZyzneaX3v1MC1q8PqAQ7qKrJdQUyiiHezqPj59Zz93x2f",
  "key28": "2myYTVkxYEkKh7frfQUBHmqyNicRh2RB6iKzoyh1tRdUCvUdyKa6rnDjb6s2AuRSE5JZtVTXLNHJ5iiPZrKdvvWs",
  "key29": "4DzMuZ2DaeCfFTfRrAHNb7ZemjnHJBNeXmr7QPM2o6xit9p3VbKB5BAxrckaVQ3WQi4par9QwDvNJyayDMxM5ePB",
  "key30": "4gavU88CEdnLhotzsUTsb4GgUEqstbQsRNpbhNv6iKJGjpfwnYeNtTJBz3UA6evs2HQaDnKDvRt5TNCGbY3AFd3x",
  "key31": "63ZcLtCzHWvaozn8NZRzZnxoG3RxvVqBtruk1j5r1ksSQM8mNCAng2CcewU3Moh6vWFYKdHHNV6xrvjof7fERn4a",
  "key32": "GdLGTjfM29MPNzCkTiANS1NPJdo4cRTfVaddnYx6Sksrikd6r1xYFeZiRgwcxx5rgqsfiQJ3DbNxqoAzusnN1LV",
  "key33": "2zjUaCvncHotYzWUbgHiMEvZyjG6qgwzPFAaq8mico8grSTLiAZmwsgvW1MU5reFKa3kdNGKgUEwSRvM2HrjiAfS",
  "key34": "5xVkADrD5dYa4c9eX6iqRMW3hTMWM8svMrrdYtbt2p1FBbuCXJAtxzxy1GnLCecNEtJoNieSCXiZKmtJn3kWaFhN",
  "key35": "9u3dcnWwb4NA6Gtcp6c1WBJNQbfZWqAf72mD8u7yGBrycsgxrhPXtRTBZKsvEc3Yp8xkTxPdu33DE2HoQjkH2oJ",
  "key36": "36DWhRSNPWRL6nnvNs2BWs63ZbgHssUdTevuhuvtcP25qyNHT575dhf1qY1A66SQ73htefFn4xFYwJ9PBVmCaP7K",
  "key37": "2GwFnprjSRMxCEJL15iquJCVnsd4HLNsKU36d3rjPg1KW9USrpQrEjJtaa9VuZgoZ5dPeWVNv4ParFZVXNiowkbF",
  "key38": "2SG8QfupMeCuUEusKvGVm4j8rHab29yn5Fcod9pVHYSqvXDTswnWQgfhaXJGtfJQdtutixCrbi4dUpTodBDKwRdk",
  "key39": "DEJ8gwz7M1ukq4Bvo4qjkPGmPBk9qaPGMYKbNvAe8D8YNhx5oAFizMME2MKT7QkUnvLv9cM9mSGftDkyJ3Rvv5F",
  "key40": "2mLwgB7e8LmztDwGZFiThg31GXabV7dG9wRkCWhxynjm2LgyMe6AChviez8iQsc7UAyquG1xifWTR3EJRjHANnZr",
  "key41": "2NskqhM8WAYxkhe2YmZVZuK3Ub5TkrTn4iQaTxtfCuwEmm3bLDRvY5Mhuowxkzh3KqNjCptnhFiqwLLcp1sLPkcH",
  "key42": "4R5uGHJt2y91t2ujzsv6nxW6FTCe1BT2tLb2Suza4f2jjxv7G1rBZWJTXLky7evnmqJ4P6VrHtM566Ma6vSS8Cpk",
  "key43": "5iXGWcQ8tqnCfojBbcsVrAtjbDzBEJPgKjYzAhhZWuHHyUS5yjfc6yGgNNGGeDyWsvDyehq2Q5vfuzmMPAAnoRsv",
  "key44": "27Ci8UPwRcYHqcsub16aVoJPmn6tJ8VCADDFZZBB8BAfjrh3nsZs8vLFNDLfdHm7Xx1gfpWPWV1rk2FL2tcQUoy8",
  "key45": "cxiX6KkMrW3u1KmbTHjuf4MU5tV6VHgFTHUAB4nh9TQBj2PW8DvvGuGQtgcP7vABtorJsNrFeMxQ3Byi5hM1JHQ",
  "key46": "44ArKd1nJpEXERJxyPTiuqpgv3J7tKMXjyRhW8QRHeS6vTLwqLmFth881GskmSiKDHnDHqRP3FeRCzSDQE1Uw768",
  "key47": "58FctMrv7hsiHRPiexPrhVPNcFhQP7kiDZmger3jvuryGPrekH1wfMQron3WSQDKVbbswwdUNVuHidHVEYXyFz1L",
  "key48": "5qQcj1kDECgFgqWFt3o82qxhhvUZedV3UfPykgkq4eqFXu7cvxdD3HboacGNzxnZUfaTKvp3UGtEDwzzYCGEmwMq",
  "key49": "2y7HDB7vEKR6445xAyYsiNT2M5pJJNCzoJdJDVi4dsqxjEQN9H1JXn7YatArk2DhzNTjSgfEYTHRxLhvC7Q2WvgY"
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
