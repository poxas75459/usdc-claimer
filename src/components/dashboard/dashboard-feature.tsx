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
    "3RY1aKcHTUam7U2dFQYZKSaamES2grYNKogDx5TxSpMnHmS2r8cWdoRem3zDuebMWjMSnX9VQ5yGqPtXvd8qddgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43p8gikmgZfKLka6V8DoQbuAqBub3bJ9V7cc8VyCqRqyY5Y5sJ2MLSBwmJPV5ndA2HavxAz1F2Q5nrQtnZGUZvzo",
  "key1": "UMUAFaEeifmCFpsw1YactFcbxPk5TZ1BiPWTTAtYX23AQxkLPrmov2wmBjCS8E78JMQveKE8auQwUykfYErfUi2",
  "key2": "4s5z5Arcq5hUzdNsafTFfXsUgWFw5uUAtxSWywKJKK2Nfx9m4jXmADEPqSYhJgkAbPCqbQCriPNL87vsLrZfNSnQ",
  "key3": "5xxB8z84iEb6a5YV3C9ihhSLNxycyw6NVwymFZcL6aJ6MvaBVESyx15iCa3TfcX4zCU2xve2AiUyKXYjmaLJymwZ",
  "key4": "2RYLMRzxC2Har6eq7oe984NBRwBK95A7JRbcYyvaYVVHAXmQtfwMKJHA6fVgPnRf1FhGS6L7hQ7Q2NcGQNyDkTSG",
  "key5": "5ziBa8HzFNjFd29qWZ1gscauVCQfJSioJcQwDZYn7q9DnrmHNEB3LA6pmAvrq8c6mumNsKAPdAFP4k4WmoRdGpDt",
  "key6": "62UX2kWGLDLjgxkeV5vvhPVsr1Acv2EkHpbat72tmGyJ1mSXeJhJ1SxEfzEbS4t9eSetfqvjGjaRHmqFUDK6NWLH",
  "key7": "61rPgGEnU51Cnv9JhPjgkvCoqCe6ZdyPMH64W7Y5TvqQhNVNpuLg7sbjiUsUignGQnndR7btrnRG6TniFcnHcAj9",
  "key8": "3TNnmQ4SuUHS4MySjHy8U6wwA6sGpoazFpc4MubhLucJS5RFxjfdiKTiPxqEXhhuPqM9oVqqtZmrg2GkfmBr9wAb",
  "key9": "2mqkVFScmm46wBYDX9HoNNkJubQjzYSEm9b2XW7evGWHHLcTbPRNHR94JjaHgCxQRcvT49ZYvgzaVKz1dbT4U5KS",
  "key10": "4P1s4Um278fJMYgSFaK1pg57T2ZmXBuUtNsYozGA6A1K1w4DNA2m9k91aRrVQm1TpCsVVNaYyS1gUu1mAJqFbqdC",
  "key11": "GKW4CkVebyDLiPSAMKQPHD1zk7tthAfFcPzp7gikagi4YA9yNCLuiWZvTJfADbAwKKdzwGSXtTBUGYdkK9bsw5m",
  "key12": "3tS3VV2Pv6kq4pa74Bm2EB4ntjiwXCkFTS6wBja4SKKoGLjTiPCokD7ewAARzo7XkJia8ntWj6aJ86XuvHsBAbPm",
  "key13": "45EpHkYdLqTAgy8UssqK52bRJchTpUH7TZNbBNR7uLdPPCT6gCnEznNTpqYe9qHo3ukkQpQNJRMrQhjKvgK1GXZF",
  "key14": "4F2sJafrtx1GEyBuAW9tYNFS4nJiwtUfL2wvRwLHjP4ZoyLewWEqebG4VYU3FPo9AiZVEJFL7qinFbAcToJdqCN7",
  "key15": "4AdfZEFTkbroBBzodMfdGdBUFfmMgaquaVDmr3Mjc3qs6QTArcmSfTzhctwCeAYEDZk8W6JwkAUtHm9NCAqzQueb",
  "key16": "2oZmPGvwyoqA29x7jP64Foc3M8W6aLtiHbEqkK2QvG2sMskUFeho39XvbKKFSFVW4kASMpxFdosiQCMRyRdX4Dkt",
  "key17": "3rFTsoTnsCSnrhiGCVwSWUuRSrbRvD9ntphHdAyeskNUBhyLgshkhRfkZNa8W7JDDECXB5Uyyv7RWpTCAeqM5XAs",
  "key18": "3LDfVntoAHTcrssq8K5p1XtZSDoVAVjkPZquuSicXr3a5N5azgZDsqCp9HywupUTVYXCL24wbCqvUvsHGpAMsYsy",
  "key19": "41srXEtHmqN8SAw4gBgyxdTuHPRMJ2ofFh5uXK1pARJCEA9jGnKwXaPH8NAYiKjeNG8TgW5avWSepTKkTt7Gt62j",
  "key20": "3k1XtdqK8Sko1BknqnKBU6ZwrWf8tBeQsfhempvXshuozNY7rCFnCPX4Z5hwZdD4dDb5XzAYgbBrMmEjtyLQV3rT",
  "key21": "iWUZLHcvWqfLxY7DzKBZwg2M9x7WaEssduayoNhhyjM1aFJXWJYsMkw4CcYcnMYqRJDAH6gJCAnsLBb9msEii47",
  "key22": "57sDWJnz6mv9f4t9vRDHyGLGQ526TJ6vN9ka1fXGzSz6Td4RJgXz6osUBxLLGuULgopkF1rvBYfd3U7MNsKEs65v",
  "key23": "2B6awWC5mMEg7yas76VF9HnuRrqNBCKovHuTJuhamiL3XakrCGYxT1NSy8FRZ1N3FHizof5rtedmcmPiKd8EuAYD",
  "key24": "5ZSRJ1FP8mZ1yVFYy7JiRsQCPXeGwu1fZxBhmX9UWYroJEcm6xYuZtE62tMNR67BHpHGs4fuQmgeHYhrj1yVSeRz",
  "key25": "4czz8E772Ndtvkk5m9qJV9YEFstqWGqDrSeFXpsboSRxcBdqigNMthoByGHmQ3YteVAyqfGV9EDSDtAkfUXJGAUd",
  "key26": "4Hyp21CoXKb4XycZ7fXpdTxCgDAUvYNk4Peg5ijHB74yfGVxzRd14ESWAJnwCNyiR7fcUFVKNXNYdCgafAfWxeyG",
  "key27": "2MLZUn5G9bL8iMSTqA3XFVL82ZMDGDRFC4N536XwMvP717Qqjs589Fh8Q8ckLUYvUbX9yb5UrkNksxXV9Bs37vq1",
  "key28": "66V2gHUdtVcPFhKw6uB51xLDnWTo3BWMUZWKZ2MdXG2tzHY6ZRJDZiJGcUZWhR72xdrmjGgzP2oZeYSVSNtJXzd7",
  "key29": "3uS3FtjjYQ5Pxwpke6WzvLo5AjZDGqFrfsDs6UzeXodzSS3pDeBrENQvnZepRPniFz4MWeqMSHtNQvrTV6rNhvCN",
  "key30": "shabtAJJArHC8CQ6eg5bVdybiJVmVgspA9p2AWhzME4eXMPTzaSb2jDqUeZtqesVhE9X3CuyWurc39B2N759FMs",
  "key31": "26eQK5Gd8bqgANGADYkSY2FVr1Sc8AnNwzEavT7tW7vJQXb4xnnPpTrFMxLNnqUXGyquPa2ssPdXvPpEr1M5bBKo",
  "key32": "3MNm8VaJxWuGDJaCLxnYBNf2nJwfg2vofPfbHtbVAL3Ugwx6vFQDpk64UM6aunwBSwHQLQWjBppmN3JwzW7z52bb",
  "key33": "DK76cKJSPANWc1grCnDcqu9ZP9664tpcNcCQv9pN5nwFdKnvg6aqTjYDF3tdAwSWnBMd7mEBX7V5SPQe5dAhrYf",
  "key34": "2TLyQyPdkEd3RMAskNqLro6yxbYf6yjnNSC4RPKYyDaFHBNgkfSUj98eN59NoVaPL3b1dt9nEyetifbBh8WyqBwf",
  "key35": "5Gpqt1o3aLB1TMqd6h2miJ3HPeXs2EfMBZDEDPEkvZsSgDpGbT1eNrYpzKgCBPeBAwVYk6YcY8y1acCd4hi9EXuU",
  "key36": "7kEdEqMmnhSjBiaNTu3tsZQsym1ubNX9DgQdJt2rZ4Mx1z7WVpMAuy1hJwp9GU5gDmBfhHC18nBQkqVzYZsGC8s",
  "key37": "5cYXm2LvQPiqr6paDdos8PqccASpr6g49oLGhWj8Me5UrnXx1reV67FbFFeG26aVajaDFbn2VMNPZcAfkEj7KAX9",
  "key38": "qqQbCZHX25r1mMMzX8TbQGg7Uc2KgrJDXNu3wrRhLBtET5ZvNEV9ZFam3hPpZmKPJQAB47iT8z2L2bNEyc4d5Po",
  "key39": "3CHokX6z3uYGwTqzTmptYZSUCmoxSVpnJH1EketCv2xiPXe5QWcjg1bEMUTtfjhKRgw2dYkmZ36Psfs9e3peLQ2v",
  "key40": "3ioh1VWHVzasV8C1h6wtcPEqNRPXxuY7m5c8GjTvbKE68gfx6k5s6eEMdJeC8QpWHydbM27MBo42UVK1ZkfJ4u5k",
  "key41": "3wVhZxrUM7gRrPztphDDpaXLjFzbjbYdRRe4Rk82T4i9jAvuzvnCHX5WcGrcFAL186LG9DgL94W2figGqCoxxStL",
  "key42": "2cqz9UhNbp9NfxJjpnzpHsULG93Tg59ABXHW7ZFyDDaiugy21G8kRatywMBt55q2GjMe13HnGR45KExjfo8MaTZv",
  "key43": "4bZkiEqzzghzwBMpYGRsX4hwvJkNSDMNLQwjqQZiKjXAeSNLNTB3bVAkw9MaAoptdCF1wWK8W6R4Bz2hSYuX1a8W",
  "key44": "3Vd9NimvqqXQLjZZvvc4npsHtSzv9LVFr2GZtswAzNtDiZ8Z2T93VyJ1Hoqc1dZe6er8tdfDNQugacHeEeY5f4s8",
  "key45": "3dbMjDSXWc7aHLyH8tgBvYghHYCsmybu4UtHM2xx1yKPR7p6tZMztfMhDy38TGNPKFjwMRkvooDVX1eArwRFTyDA",
  "key46": "4aVZwTx4fyhNzRzMKxa9GraM7XetmBrwy7Nt85wPn6C669P7xqmg2fBqbkngQ5i1Q7nYHLUjY8dcmC3FuNDuBrEr",
  "key47": "44vtSFPn4TXSqbKQ9KSr9EmYYYzUw72jDC2RJLb6q2C3LboC9Jsv7p5Uf8RpxaiPUV35zDybdMoMgJCAEvkAoC2Q"
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
