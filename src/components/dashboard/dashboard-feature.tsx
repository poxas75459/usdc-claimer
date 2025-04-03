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
    "35UNr1DjGjGDXo3J8MEuxdiCrmxadnfcAuy2kQ5pH4xmkknfYibMSFJeDU5MtBeYU4yFrDtw9iCeTqHMopn9Mbyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRd8yJ6bLFzTMKWFsirw825EczCRGJ11CwDq4UAJPkBaeV5xp2ZjJFTowSutzSxh7ke6ggzCS4pKwDapPBf31gL",
  "key1": "5thM6yycH1vvhV7YByU7oXCoqkfU15jnQ8skPRXLd6QVqpCGQa8L8tCBePKzbDDYhwtdKXfG2DkawaGmZUXqGS9N",
  "key2": "2sBrZY4XjGsrTMTh6249wvAAqFETNC28JKQAdt5DeTUwKfbcSThwESK5Yh7CJZariKe6qKL7trkDqAXGzrFgLp5G",
  "key3": "QgCzgM3sw8rCEnWzdWpztSV3ArjLRjhMNwesUM3TmjvKiySeGVdvsD5AkgPPq3weaH1HKV29M7johQJLEJNeSEp",
  "key4": "PTCYWJPpqL17Ep4DxyffSxXwykvDEZGWFAZD8eMfssE3waDTHxg7rLh8GcEC8a9EanQk4aYoFHhVT7KxL8mGJBi",
  "key5": "4CPzJ2DwbHXPyJzAqaRaomDVNBs7SDAJ4cdhy2qbkUYq44GC15oN2MZAGGBE7h8CZnEovPzQ314X6tytEJWyMuHf",
  "key6": "xXY8P5UhkGRvqUP1BEUawbwSwWr3x3X482JFtaj2AJfwH36R2qahDhJ9gqGQGbaLYBDGCQpcYdA618jh5vo2A27",
  "key7": "9FVCPoKozaMZppDEa69gt9DgQC3b3foKiXSAjLMuBpqFejfWaFbVgvC95gSKtWdzcnxg7LwLy3TZss2xetd4tHK",
  "key8": "5vyCPerXGmqos6DxogfvKGeLUTMzprfuNQqhtG276bKw6p751MmMAi1ozQhCpDsGZ8tQ42bY9fwJQChaS2f27xUD",
  "key9": "5NLQY9rDvd4ADZZun9eKStbcP5EvnKBV6Pw6vK6WENv1rEGpw87VZz3Qyh9JW4LXJRr3qWHxT7oJB19GEuNDSEYq",
  "key10": "3jeWWY8XbbzrPvLYhuEDayjuj9Cir4RWodJ1T9wJt8Ewehy8d7RTrgVR6LyriJyj2c1NeWBZoDQmonzgNj6U9zeN",
  "key11": "4kHAAbaVH2arnerFKF7Qi9YaMxXde7WA9NVrT46mjdySSEGFiaY4njTV7BupfjRgMEQjpRRhN2CEhqaosBsH6QDR",
  "key12": "2v6Y6fqbAUuXw8UufAWnaZLqqfWZGUZdT2b6Ee5svYQ5XTVKHVwBWLE89jaZSWXaRABJoR6xcWLi1P1CTxQzkQrH",
  "key13": "VzwgefGCpvhxTx6sq9DzSf77fGwxN1L5d1w2uWACZDCMZSfc81JVW7HxqgGhea68neqaZvchoFy5qcgqL9uJVF5",
  "key14": "h9hUM2mChnYHyHM524Rpd2ezvug9u9jvh9xAGqUtsu2Qzr8QU1xMxAPLJYob4TtPaHtxTdgW5ufLQ4t5eZPSe3k",
  "key15": "3HNDTdHqmE1ZvAgFxfPyD1Lt7buqv5UwCJxwiWSugx7xJE1LMJfa8E5yhAbq8q6Ge3Nsms42E9Pc6iYshv9JS226",
  "key16": "5nwdjaEst4TGL9bEfK88yusc2M83aY4QPVG2txPbwpNzFuX6yG1PunsaxvoauWj1LoBA42royCLz4fBU4wARvPbt",
  "key17": "HcmvSRaZ2eJGsf9RxmobCKVAQY73dVmDgeik1e4GeAiGm4XmQmeRC5FygqY1tWbDu7MNdp4vABJcuvRz2SX7Xd7",
  "key18": "42QGnxiUQxZpm9Nn6AX92krn8nAVmPA7RvVBg8C9wEFLZqWUFo8vJpkDZnNsrqusGR8Fc43TeLwSstySqvqvacSG",
  "key19": "3cHZuaDT93frXNrA5JK6YBB5xCNzzUToLJtf34fhqEKfNvNAQZQP1GjaCHKLxxidcZRzGBDe2E9chod8qjbo1tUB",
  "key20": "5aw3qAFDW3j3xrm8aJXw31mU2i5kkFmEomG9uAv67LJehcCrKWK9VYk1H7Ec9sWzJkvzi12FAPYDoU2ugiAej9Ek",
  "key21": "38pTKMjs2b1N3CBeyxYb9LRwY554cecEQG8saU7kuCr9uF15CiR1otQNbRhuHQ2XWg3YpWmyV7tSHkURKrGzLQbV",
  "key22": "3SuJ1HabfpasGGXur5KcWHm7Pi6FyMuGr7EFvaKja4Tu1brjq4JXD8D5n5Md9KJ4SN9LzBfnsXf7tWdAjBjYDnkq",
  "key23": "dKMD7ZarXzXe34h5reBhJ4QshxGxDmeCvhxETMoAqeAcnupfDmCPVTpi4b5qtn92vMPuR8CKnw8hCwWaoxhncbh",
  "key24": "pexbfnhg6NcDzc3tuL3612GTxSLv4r5nuLpDXU8JUfDkdyh2YdpcugS4rwmTrx6owM3sUViT9ZcexcBGcfZmVJa",
  "key25": "8QdUb6EWpUXzs9ne3C7oZHKJd4UG3FrhTVDLcCbvFBMMGaQVbydA4nhTq4Xb3yxktDAx9EZRQM4nZiQTXXDLKkS",
  "key26": "5tAtiSYP6ZdUjGxoPVoBZhQZ2qZcj4JCXJCn4AicacBmV8UuDQKYcs5mFgmc2m4paQZrP38ePJUyeHHaD3edewrv",
  "key27": "5P1fcaoTT6HDPPDusGjPKdDAVSeq7ChrhFPWiyeCSWpyaCGDTRuesjYxyYDkfm7NJvWDD5xbc1DgZe7mpg7hPHRR",
  "key28": "efSVob2G5sxJ9LHAtckxTtDaVtumVFyZZM5rmsk1ezDDjgpYAzqhD4kKmHqhr5GcnqYyHxTxjHSMN2FL1pHPL27",
  "key29": "65rS3bMxmrzaQzZJZDQvh3fNabcLW78js4PnoHgD6z5BuE8eLtZpvfisKmQhhmWBZwhKNuBsNsZzM3Dd8H2mn6ea",
  "key30": "2RKbQvS2o7wtfoU5q5xds9nULgziJhSYmUzmHd4YbVcrzJB9AD13zwbGT4fAWaXHibxE86kXPvGLGQabhG85ExeD",
  "key31": "3Mt2CyZ6RDpsNYZAFsB9KLNJu9pT7tDthUB92R2cbkEu4MLNqyUge5BaGSGkgmMXLnyAiPVBE7NcEp3sNnxVTjiz",
  "key32": "3Zx4mHSRSmU4VxLJ5rauXGKtnUiw5dCcpUayWSJLK1jzLFsvZyvyvD25vVgXsibLf2SyCEjMqmNUBqJ9epL5EPNj",
  "key33": "62RPewzqYvcKAbMiPC8p85rH8SbfNFp4QievXQkhJ7ga6rRQTx6fHm2wEjJ691K4LGYk9Ua792oUhnhyHamwniqd",
  "key34": "ui7nbuuczMMfqpNC23TUFccNkUwQPapGUTDEHhZPxHnTxWNBa4HeQKKFu2ZA1BJvRyqiC1xMRpE3tR8iPdL7ien",
  "key35": "5korn791WAE5cMBWHTZJqbFikqgKGNqohG1EZNDMSa9rPLWx2npfEsbDsHTRnjk6p1awVH6jph7Wf8ANVPBhP9Bu",
  "key36": "4HPSGT97JDTnRsNqKpuX63Vyw45HzsoAMMDFaUqcicvHMjfocAYjg2oLmKVDzhaBdtYnX2NHQx8AYCptfsgqDa5R",
  "key37": "33YfQgtGEmfwmKqtjSfxpKnEbDdsyeRxfU7T2H8fwMQUWyKYLbRHBWxmS98BH1EZPuojGZ4M8tq8oDNZH9SQBpjv",
  "key38": "YUCcT4DwPaLhdAvzRnVC1QV29M16MUAyid459e5BMjA2oDjMxjH5a9vt7ue9jJJCZ3BcDM7kf5VgjVvBnzBuxx2",
  "key39": "3Ux52yfqVbHVi9RpsT21RqATFkVx9o6t1GaddXC1YPWFm191UDpHCcVx1nW72Qjhuum1RCckkHrKxmomJHKS6UmY",
  "key40": "2vLRmudKYdfWssjnojbZNJzVE1ERNn1VTTVWMupme6GfvbMKBFk3eVgzrttfRUfANfmHxA5szKaX3DiE87kxta4C",
  "key41": "4mYBDx2MWdCUdY1m2vCZJHTcHKinXyGfKKwzVULbDvy4hev9poD7ab6DdvJbi1n9txi9GB2L6WrAQ1RgCpdoWVXP"
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
