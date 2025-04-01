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
    "3ybtZ29KDEjh5JBPoKo51y3ALJo8gN1wUAnuquamQUQYJoqUrESfJ9NuRQioitQ3HbAjAMeo8iEFHc3mXKBimy2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWYkxJEetP744q4MjjiJ8aErs8UwLWxrxt5y3DM67HYTEyWLW6E9NPwr1rp2fYyzn7fedLxJLvbYoykV3m4KgW5",
  "key1": "3D3MVub3jxj7pj6QZDiNzp3t8uh5yVqYAjdG5qcGQ98qM7EF8c5GqkeCrBgMSZtcPtFoBwFQf2rBXFaNtTHW6VYH",
  "key2": "3AbFTtw3oFNhQCCxosJqAqX9AxFnfXqXT4JREqTmUCucKHnDwnGZ1mWBD5ZyXSATrECHAkST6UYMKxHvmWWFMYRj",
  "key3": "4gFuJDeLr5KkQ5BmhaS7ZWbeqg7opufBGrrLLfoNkg8c7QJVQNBFmGzzgYhv6kgL9A8UgSZKBTwFWDDY7F3Xj34y",
  "key4": "3auzoAJdqsm3UCT5b1n7XSGfXPftEVuku4PKY3DwsW7yC6STJhShaADUyuhojGd2QpdB2wmkqKpHQR7sB6bXKDyc",
  "key5": "284HE3UeidsHpEyaa4dDQFygHFa5DVT6P3zRo8bqsUaBRqpQKDJPUBtttGZj9qtSrQJymMt4KYis2tX3Uo5xBVwT",
  "key6": "ZSmj4N7YzNJtuJUSKaqojszN8dTp9UfWAHEKdkdU55f9uYbjZ7PyV5seueYWMPZNTrdv8zXMoDHHgxuRF7iKdJb",
  "key7": "5Cv6hH3o3PrPUqYqKkiZMi8NPp1o53quNbnGWFo9StqEdfoRSyWMFVHnasfiV7ZPENXNqE5ctFR9zXuckKGpm269",
  "key8": "253Q5x3iBrkCMNoSKP5j5xQXQ4UaK9Ez9Dep7KSFgKyVamhh1NvNDvBa1uGgQ4pRoRER2SzAUwSSejV5E2VTegoF",
  "key9": "4yXduiRFeKd7bejrJEzpLV21UFyQHJhE7khrV9oQW7h9DmDWLXLS8MioBLY52BDgsg8nmLESgxBBzDVhkro16FBM",
  "key10": "8aQ7GbtpV4N1nUaUVcQpHWEEYYxHAn4xzjDp1guSxS4GtfASTFdrjtDrxvc34pECuoLsDs75SAJY5VPzApwx7uz",
  "key11": "2w4CG94ozx5ErmsdSscs22odncdRrbSYM9CnuFdi8tRgnFR7QFm1ExZFGuZnqmtmnarJRqZqjkDQAWLjjPmo9552",
  "key12": "oK5xEfRErF6JjSDpbA2HbW1TdX7vdM8U3XncK9CCAnoBGDWUt8c4MFHdnJCzrDtg1aDAHQ5hVUDeySvsTWWb7Yg",
  "key13": "2FY8vzrVxV72U8dNGzBL8c2xYiRwx4FphxALKUGHQwJYNZzPR14wgHHXA27WjdVkJxrYS4z1iKyAHm24Fik1fsEP",
  "key14": "3foWV59StaF67HMWZY1NAz3E5zMBb6scMuEMFGqK7fZDKWdC6nG9MpU84juvtWhzV7A2DvBh8arkKtQqAh4gRkof",
  "key15": "4eSnJx7r4BLucmn5uqY8JXz6CcfxNtLeDTVQ6oa4SE1fz5vkJgQkwTn5SSFDKXaYpTdbuAwNiYgWwPuAD4rZJ1SL",
  "key16": "2x5grgNQm4JYit6LJfszn5SuuCN59f3TRLAhbar2jk8f92LzvSBS3LkmT8xLd3UH9xupaC1UhXiGY4dUhUKC2jJy",
  "key17": "4sAFUkNU4swsWTrJgEp6rekYdGTxrxygQCYXvQ9uGEocAJdV6AbnGkwYaKBGeiKB43Rc5veRQi4Ts4CEvnBbuaKR",
  "key18": "4MptXEzLT6qLDZ11gvBUuSMaUQ6bTNC6ne2ZfqE8UfwoqqgrdSZ2CHzyQtCEDYYbitvg6NV2sNVdctLkkugyFL9D",
  "key19": "QGCoDckpZZXwuFjt393uLZt7XLACcSM57uqyxbRHaD89Yg9aRwu8rSEnCWrozFvtw8WC1xtVXvBTkTu5A9wj57y",
  "key20": "5ahjURKJgsdb86JVs4tDBgYsJ6gJB8gaG7TtD7pwkrecZTfmcpREevTTRnkqSbaZEeZwyB8zAonvixr9VBkM5x36",
  "key21": "2QrDWPf723rPkbpjTF24WYaqdsRJVkPQjWBT6Yy8DHQDmWEiepjajXijP2wxLNZc6W4XLK8aEDd9koyDq62DtJ7c",
  "key22": "5ksnHjtxCpqzY6Kpkgz43efZuW3KVCo5FEFndUAP4PQdeQGyi5VHPpQefRs1oWTFCNGMYvPg8aLDrX7CfVjt9U59",
  "key23": "nwRKQiy1HnRjavmZ9gJkPNzwMrsxFxYbvHdMoq8PACiMQcXmBzNoarzXSjU4pztBdzHHhV8HFLDqxTjWDVq72q2",
  "key24": "3kiXJtW8bXBH6QK2kYfXz4FZnz28gdp1EGY2EcwUmspfy65YnBURtRgFkCuNxWTitJYXc9W2f6n9t1wEHQYVT8jE",
  "key25": "2dnHgAYpRuhrZ6d2i8Vz1X1UGgRLBsLmfTprNdca3hDyUu8p1KSeoWVBtcFSeLG4KisRviLAfXvnYWncjM1stm48",
  "key26": "65SxDWsQowkQX5PxBzWeNLPV7cDy8hr77LmwptzpuPTiAPgyoQUic1QNBEpqu5Pxe9LWCRwTQUBiw8VZJFnGqXdV",
  "key27": "29qU1pyfoaxeUjyoDYtwvrq4EP79nHCUZ4n3EXgmbxVGKhrsgVSrtWdgsFEeHJ8irLi5mDPSZ3pcTuNpmSBJqBTp",
  "key28": "4QfG1fs7aUpCFDAZUosTz3BWSjL4tu9p6APe5qms9L9caeQiniWzZgnNAYFzGPngf4F6HmJR7HZvkns8Lw7Q1DGu",
  "key29": "4BnUFjMusteiPc3KK6zbSaeM3yKsuxS9LY4aSpP2SHnv2eoYDQL7YsHNse6Sgnbju5aQsm8WA7eLQosJy1mR8P36",
  "key30": "5D1jVJEfPtJYeKeCrVZaqGtt5KrQZdiiviFpPQ5bAenJ7G8wo5xQE9iKoXtssc9GZ1GngVGhLZJgtALBPYxqvSqP",
  "key31": "351rcZ38XeE7Tz5whYR7gEeSL4BiTwaD9qzA5tEar6nC9MjHE7mMmh8aA77jLHrC3fjvtsP1M6ysHrNQ75Y52S3L",
  "key32": "3mZKXHhSNSxuCmrZu8zhNLJ63AN21UJrpauUjQQYzJkJCrQWCtpRZWNvZ1xJxikxo91myEhVhchbuWuzsZk7vvS6",
  "key33": "3mimRkkQGT1R8oE972pNX5vkVgA9SRrUX3STKazTBK2sv2QA9p17jLBF5qW1Vq1ozi4oqRE5bKLxjLTdwm7dyFMc",
  "key34": "2axauXoKpmWoHXyFBAy8ajZR46RRPjY9ZRnboNxFL9xTNJ4obVHDxNrjezbs6xcXv3umNUcuLuqYa61yBzT6RBAW",
  "key35": "2MCquNnByFxkpj3Sxi3VQPMZEmF4AefVFufZsAHAYt1VS7kindAnxbgeXW3oQ5WE1RYyaQ7Z9ysHxYx5gQPAqu3q",
  "key36": "5Fo8XtfrxqsFWXDhhbREDF2whVTzsPPmSMw8vwf5hX8a5oYYNWbWmV1ukeSHuX54Avna1ZsH3kvm6QztiBCdnetv",
  "key37": "5cnyasNvSE4cNDmRtQA7XxRkzxst5eNRrWhq2stTPtADXYMeeE7oZQYTa16RsXJsgfieQZM1kNLUztnceP3FCpCr",
  "key38": "5bWJciTLZAnRcuTvwsJqM5AM1tEFkKZvWn1spTCau2wkeesKUnuXMT8SdWCYnNtonBgakXpMMs2tF7Tuhi2QiwLP",
  "key39": "2YNei6JvGLUPSFb9KGapNH4L4EbaCkHfonLEPij9SyFaNxGM5a3C6dYrm7UPhVYDoppSo61K8FCfMkaAkCcpXqDP",
  "key40": "2jU3qjnkFVFia2VLLz1QMfSfbPJNKiYcgcaxzK9pcbqp8K8SWDEegijdqcup5gJGXgPK5ckPRA37PeWdGLSKYcG3",
  "key41": "4KGemU9x9zcbhYudbxRoB9EiNEMcysDwYT4qxT97m11upgc5hKxa4ejTvBJgoWmABDK5Huo3goQ1WF7gdk1HmDwY",
  "key42": "2NUcuJDu7YhRBsLWFQ13JqougJ8cCu9hyEqLxWBe13q1gY19Z7So5mAMrvYMi8LgSyA1WiTvvLC7JhXauGUZ77sX",
  "key43": "4KVjBASvPV2Gvzw2YMe264NbvELbQjqLFUqvEmx2efNt74HoRCebk2k6goAWWDoysv7ovLGLBxzxDGJXYEBs9iny",
  "key44": "3cqqpoRKKjiyvrsszoZuWhQ4iwCo97G7eQzWmZ5UMWTWnnBXrCLRtU46XfYMsAUsuMxu3McdQCVNThPrpxyNZ9Bn"
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
