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
    "55cry5byApW8mUpveSJfYQdtgWrMqXkryPoE7omS2fZivYCQ8HemdG9Zb4TbrJnrKigq4pH69gkYoJBQhsvguzoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VsLS8QBKovLPuFE2R2Q6dWk1PR3MXWe1K58i8vuvwqFNKUPTfdDY3A9tr4xXwAdeFLiqonig178Tuhwg7G94VN",
  "key1": "5w8Pu9kvbygyi1dWgrLLw7S3K629BiMsc9NAH8yjNpvMwsTzSCtPHcDx3mSgSRnrYoNdLn191qoNkDrWkXYsbupT",
  "key2": "3kcHMw9NJ1q31VcefETcho4JJryHLBm7iW24MzkqhLkcBZGC4CEb9Qx1KPpsDb2dPw8Q23ZQGPVhmmzVj96HiejW",
  "key3": "GTgtMLPeXfFekzdQT5aZxZo6MZ3YSCrAmRcUHKnUkthP9MbmF6u1SHMb42YcdoortPWr9wBbrueq5fmVhcLRxZ2",
  "key4": "2Wq3nSnd6wbhrhmhFug6Ntg8FDCia6PAs7g113SFRVMptUizn5sv72XhXEWPm1Pa51bAQFu8UzD6azmV5ei2qpDq",
  "key5": "2eS9vm6QRy8aRiKxJNHzF5FpzNqir4SpLxW3CthGg2zmjYq56NbzxVF4DwGuCsoMgQbPFmENC2MUvgGdBVG6JG9n",
  "key6": "T4fA2Mh3VPsbChuJasv1cH7vqmt4xdamZM2MUQoHLRKjWAJEi3Jw5hXVyHWuK2vArWQdhGf4T8Qopikm1wuxAB1",
  "key7": "4vP6zWHLFibMhPUa5VTAGy7vcRuAb8HtNEbi6f51A8xE8D57g7MTyvdXSZSb5U28WdBWvVfHH588ES2QBJCxtGUZ",
  "key8": "3vWZ69sHpGvekrTpUhy5eYfzbrVYzQmD9Fs1teXuboVUKvi6CjabhNA9LE6BYpsGV6jSFn8weVHoy1WdCqC5Kopa",
  "key9": "4DyUC7VYrSDbEksbeXXPGvcStJgaDdHVbtabE4GTPUeuV8hAvZjGHkQzRP2hByMyAhKkVViKyieSW4REEwEu1D5x",
  "key10": "x7fAZjAqmsKXsV8nE4CDF4L4HL8DdtBBP1b3ntULWMJUsqp61qUf9YGeimano2EyfNgqqKXzDruNRLCEcwxHaKK",
  "key11": "4R1NenEo1fC8sfYWPZwrqEhBRwqziLNJtmCq2fXt7EAGqHvd3JihNkNa9hNMHN3D8Yzqg6YewR2W7pqF7yYR48z3",
  "key12": "4E3Ppgu9EgqSCcKnN8HFrdds693dcZgZy3ibdENzEws5UkkVCAs8rE5ZKaj5JEebAZVYtQcpmdKZh96jLRkmDxCo",
  "key13": "3kS4tqFsvGGycSDVHWNe2sjrXvxygn8FBZZf9p7G9wQJ6uXeoZ5y3CGyiYHLX5aYQvX28uFwznhC6kBwbjAuRvDc",
  "key14": "5bx7hDRHCSPXqBLwiuqoEyRYssmfriUtEKUPFLo6zLzJekGi8Jznxr2397NabcPTgW5ubtqjexfcaDgKFx4DsXAL",
  "key15": "4ufpZNfvVP2Xnku78Yafp9usxFnR8zk1NE8UrPhgrxz8hHScSbpE3S1ft5kZxyREstdMryD2MiUdJ8stcNE1sTep",
  "key16": "97isL9cPzyoMUDESciWGkpyMmvG96iHjT7HCnWFvLbqvn2iT4UhdwQc3nNkxdvW8prfJKaoYCjWMAakfDNsF5ae",
  "key17": "BM4fLWfBUGSCJUHAwnyvjNQyfG45ew8Kkp5hYFWFRhXKGmdPDMVpDUg8153Mz5pGB3F52wjdAF2qKw27qCo5UNR",
  "key18": "58u5xYn4sfJb9KTFiYPCm28L77BK6LemP5ZtoVHLtdjvdkjMFx8qixBKd9ypFf6NcFDwcEJYeQn6uqVASgAQ4xkW",
  "key19": "mAG39yC39t8omvDg3tJF2RntsG1Z3RGSzp48ob7psVShGpeYF44SK8NNnkKBq7toH8JNL3NozeZw9SNu52vrUTc",
  "key20": "yjXqRvzec7G3jNKhmeCd14tj2mb2e4GcHQLweBgZy89mC38XbENjKT5tQchjoVnSsbzaX2iBHivfknQX1MoEGx2",
  "key21": "65oKi1HeU1hquKDjJ1i9puSZnA8qq4zS1diDQkKGj2qqtWfNjYJ768HrXNy9iAivNJ7RrmyLZJ9R1avRoHTyYANd",
  "key22": "3RTpxC8Z7rEmZiZNmrVgPk56WrqbT81VqabmdJys1GZWpJPQ87ua22S7L9dnJQC7NLZR7uEetn4X6rXFC3wtf7Ac",
  "key23": "9K358JRQQJx13ucmgDpcZZSxae3MEPeYgGLTdovSJMChh5fTmg37EJjfzaxXYexPMWr56ugMvCu12r2GfJbkHYE",
  "key24": "QcWCzfR5u9srXXn99RKx4CF73AUCh3eC7DdZ14tosstNe5d6xhcibBYH4vUAXq5bF8jxsfPs5PyyakW5J7aeHMZ",
  "key25": "6ptg7Gpx2W5NZvNKGupCA8QHhuRdfJxoWbFwUDijD3kKgzzfZKTL11a2sKU8oBgW1WFSCZCpPJyS6BgiqpNSkug",
  "key26": "2SBUyr55HW32etVQNi3tbcb851mizBYU7Sjjswfou1WyWSryMyLqtfVHZ5Kypih9CYQyVkQGm32C5KhxJh2RzjtQ",
  "key27": "Fb61RjLKdv7pZEJaFpZqvYRs68YLfkmYnKbgAbZGGYQcuVwdYWvZdmU5Md4A5Vu9tUKCWFXefhsHMv1usAVfGcf",
  "key28": "4KFyPsTuYztn3aJjPBiJXPZZvs1xkyzaVDo5972ShrWxgyHUPtYkKyqCyFvVQc2FpJxB4Kh36mqyjjo1D7YjoY3C",
  "key29": "51s8SUsZUPQEUb81zfDfSrrg1C3UAaKvfue5nT8MZi3x9Vf2Lmpd7KN4jW7yks8T5TKDdaPLqu8xtbj5Et61nLKT",
  "key30": "3qqxH6aXVgypkMsrtJzbEuCcdH1UDvSGBnwRk8Z46svX6FyjknnqhDiGv1KaR1S8dm6mz4d5j5b16ZHAS97LEuXm",
  "key31": "242sonMFpHmgt2b4Xybgd85HCJEKZu5p4N6n5ssadnwxJMHm5ZhSUZyS8ozp3HFgxFhW8fz7d6UrjuZceDKF7o4p",
  "key32": "3scNvLTpq21aELE1b21FNmySQFT12xq1QeYaHq9fF4BjYBo5TZjpqzdk2UoreHcekDSi5d5LLRkQ1Jian1Pkv5do",
  "key33": "5dmy13UTC9REMzCGcHqaVMvbgDpMGXL3A5Xq5HyrTdABLWBH3zqECEka9s9WQPJAdQX3ENzkACjbJsQHs7bsASA7",
  "key34": "5iduv4tSvGxrTXGaU4D8yW5B3vopRa72uyGHvciKpPWtEEufyH8hq3jKbziB3de1G6yjivcNFKBGeAE57BoJbyFB",
  "key35": "5jEAEkfmPRk3uu9aC6khEo3xksrMYRzD9eQmgkw8hXgrZPZ8sZ8GEErAR2bVdgQx921Rcor2wdpDeqLxJPSXcrmS"
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
