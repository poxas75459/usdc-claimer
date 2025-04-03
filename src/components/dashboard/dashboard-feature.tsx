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
    "5aLVSzu6bGE6Mppn5PWc43nF22idDP8HJ5EJHUNEaUbCUvFvyq4aBa3KPaoBEUfFNyFTomN5rt1CXFZRroPh3sxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppKaZHq16XiY58D2voxV3DcSAcvadUN5LDRzuV2Xynt3f2J4rPSCN8X4brdYRGv21tLrTkLrjZu8CR38Fy6heVB",
  "key1": "5GQJ2qd5r8Kmsiy5qJnGYyEKBPhJTQPFfp6GBp3Pbndir6p4AyxrVvcZz5B2cipTJ17QLdjS9TreL6U9KLrtQuSt",
  "key2": "5T1ukojGZsqWnqnDFme6ip7QjwexA3oAP1mJHuGhSKdT5xvhb8ZXamaPHVLgLRGxu7uXxGP32VYaaaTUdHnHkbri",
  "key3": "4CTKVdXE9NvpmokV1AtuaCPtJpwJDywB3TyCWpd9jyfEKtFZhqERxUWLYAsH8BQzvRVXyaUENL1E8J5u11Q7mhEU",
  "key4": "4KdeodDhRB8j2ryEkt7xuyjJg5L4JxB5RhjVLZgbPx9Bnkfh7hzDey9gN6REsTpEyGkLZVYk32QqAqvjyzDQhmZT",
  "key5": "5BRoL3gs95s2LRgU3LxVNbmZW7iAEdWbWvJN5Nk8DQAaU6jjAbxhyR9na9xVdToLAF9zNweVp8f3zcCqhBZpi23g",
  "key6": "3gE5b8vn7n27s3eg6a9bNitj4XgJbAQj7MfEkpqzKaLP8yw97APB1cxM4m6wFY8pLff52ea47UYBiqDNZ2kpT98E",
  "key7": "2AoYaodHEG5mu69YJWyaA97XXTtFuAaYLGUE1o4jf9JXr2ZzuDLNQF8s6tPWZerhe7KQEzKWMV74tDBVF4rWyvpS",
  "key8": "5fssehahSinn7VaRZe3VkXDRCDk2Jwk4qvBkc1QAQ3mGq5dXBJVcDhvbzkrWwHmoMREkAfb9Yx9iH9ZLxD999RQ9",
  "key9": "4Bw1wUDiKfaYHdshRK6gbEVZCCC9hjPNmtaA8q7DcYYAUq1DZr2HyWcPvaJGwJJMHe9virjJfJ3ejuSzGPoQmtqZ",
  "key10": "4V3WndjbiCjaYHVg4K7BHYamHY2g7XbZLx7JJzujMP9T6CmAdCG6pN1RV7bXcNJpP77aKTr6adMTcza5NQ9GMrGK",
  "key11": "2tSsAtc4vhgmNh6keeUsoYXXPVqr1pcPJSoRRmkD5X2UzCrjmRkbKyHHYKUEXMWnmxh5pqzPjwE8AGJW9sbpRVeG",
  "key12": "4JZGVHSn8pd4z6B9rTkSYJQVwyG82jw5QJtDejV3kpEfKNUk6TcKerqXMhAP3kSgyaKNdvuu5M2RVt2mTSyjb7iA",
  "key13": "47rGk9grB5WZ75ByjJB6qWdvJ5o765HNkfTNZNw21dgw48CoGSsM8ErmnSUfCRLY6b74qRgvb3EsjvopupZQK7sZ",
  "key14": "5VVnCHVoEX7pJhyDrJvBhgHFir6hdAh5XjouhGHeFSb4kgTfPmbcxu1634Va9Ket7K1S3ykhETxsb8eXjxtcwrzx",
  "key15": "5y7nLjeJBVpHwURhPDV2vaCiDNCqmZEvf2jA2C2o5V8w4V2PMUEsNWHpXNonU5WmxcfuedYhN3Myj9pBPtVBJLyi",
  "key16": "Pey2gGCWanY8qywrgApMZLzqWS6yVCdENReaQwM4PRLAbfNXitM2tZSt21SxCncJvgvncafKwappr2WBzVWVDdF",
  "key17": "4EveX4hXSFfYpT82Rt5x2GfeW73fmK1K818zNipPXFUCzenybkRQQeVXQWaS8MCY4NGDti7eqNtQoyBqAbi9WkXw",
  "key18": "4HAMurWETCX9jDJMPAwMKRVf5ECnUz8jNRuirU9Y9HeRHbhiKNx223EceCY7rFr62maup8gxU5RXijKUqByYtytL",
  "key19": "5f6oc7yAkwcnwHHEagjFkYmXPMtgMMi6MDTnPQC1JXi2Z6s5cePvkNsyao4J2iKx9JGknHmSRpFoD6uKuvAPsBpN",
  "key20": "pKjFvjZ91eyd7Ecaotgnn9EbzH7hRgDvPcqDe3i6JrqEYYZbkDZzucJTjU3Me8scExSPSsM2HvNbNxzruiwW6Yx",
  "key21": "5Lm75cjHiBSJRqh9F3pDp7aEaaacsDtGeVBkmv9psx5jxQHb827GB111oWMx7h43QtF2oDN3fpL2qYb4FEfjnfvE",
  "key22": "2iyQGjGC6pDN1tgHAhUHtQrgBVtGk4rdT9MALQuxNzWqSPLJ7wTSSQCT32bUcy3CuuHTVBY7pn4t1GYzTSTTCeNs",
  "key23": "3kf5M9eB6ULmqWAPaMpp9LvFwkqQwWscFq7GLTXfRBCNsp2UMz8MAKAbUqjVLq4ig8seEBnaEUxRpEoByVpw32YV",
  "key24": "3yEdk7koMjnx28X8thjr4A3Rokpgk2BvGeZiVT2ZBVzKdTXN6cWeoGRfFRLowqsigEwyWXrzxFjjj35qLp7aLssk",
  "key25": "4wmsUYU9sfVhRGBoGMXFgW7GejsZWaSAAzoA4YL8r4k3ZxKo8NXrAf9K5uUYrd6LgjQVLQdK3P8EhVVXUzdBLv4Q",
  "key26": "3NL9GRy7xzWm7Ks8jm93YjtNTNWHo3ZfMfB9iP5BNcgt9t5wgtA2YJdwafEEp3jYH5uJ1Q13hjnqschtRU98Atib",
  "key27": "2Bydd8Vs3T3z2v85QqM8SfYq8YQjthHMkczpoMdiTYMsJAyB1zfhhyuKgHjUYUZ8DArfSWxNmCh7YZxJvj19Gbx8",
  "key28": "3zeXCa1cpxeDvLUeFVeYnN6YKcfmczeCZ1hM5twuijuraN1vreW7fcR5vmRvPZ6TbwZ3qZCXzm7yVdPhXRNZcTUv",
  "key29": "TPMUbxANK3mi4ijvLdd5ha2KpucySPfA5V6sA3xpY1C8gX5E3EmSaDezRBm7BhzNYeAAETeFjbQs4mhArTC8kXw",
  "key30": "5hTPY2RSmP7tNUwpyfXjMbshQrMRmua1VmkX125y2pADCsovT4UXYGNY4MeaH47BBdFrXoWJPBA62Wo1h8xNMSjA",
  "key31": "2xCUe9dQMVEgoLevfu3UoLWmU5myKVd2B7qiZcSyE1Eu37jnD2FUR6iwDtgd6QWDGR8mg9yuVVyNAiPxQrKSxu4N",
  "key32": "5RWbfiiDbDJFV5VyK9gtM4EFL2CH5TJfRVJfdkrDRxaQL9k2vY6U9D5dZE8xmfN4yvVYwEUTez2RDNJ1PvNPTgXq",
  "key33": "4Es9ettYvr2t2hM6nPoun7GdVwmzcBtGHVgcHcCEtCztmQEEJK6k4AB64eqTEs2f1kHkMnwc8yKWzN8aPhvBgUxh",
  "key34": "5DdxzByQdanFCCWZrTACW7X6FeWuW7V4fiinyjstZL4aRSqW576ZYLCikQqtmHNTjGFqaJX8bWpmP3eT6epyrATv",
  "key35": "4kbrr3CbtGy5B7qWynv6w5AXmZLcuyWeaqxbGp4qxqtEp82FdP25edRmyzwWRtiZK6EZ8KPwLp5zaZDT9pshrWzP",
  "key36": "5TG6r6CSsepaX5ve2aDEwwYrnCwxV2FnNQ2sdsub6uCVG7Ui59HbWpKYvsYGsEhtaQ4Aa1RZWQVKyiFCmkBqmjV9",
  "key37": "5QeqRu82CXiv77pP2emJcd3uCa2NFcJCQ3mUvUqTN5vAgHoj3NxpWho8v9jnPUGiYmHfKuajtuAhwmoMfWJhynJe",
  "key38": "urs2jeFzsKA8HbCag3WfrKs42KB2AVRCfqSVykayVeRevZVkVCbd1mfE35xf7vN3f9r8xCAWh2GWuDg6HEj9QJ6",
  "key39": "3yuQyHcuRS1nsrRDtqAKm2dWfPx5zjNKQFfVkS8g1tUf86ZZYN5JNVDxR396h9eX5uqGVHPutxWM1d2yfqSwaaVE",
  "key40": "4QnYQb1oaGWBBKonLhRUoexEESLWnTpqfurCn3LqRsxu8SHpoaYZWCTbjdcWMhXmHpFTBFCkXq4n8ngko98X7oK6",
  "key41": "291R9dZjH4PzqYA8LZapbnD3kN3E4uGj6PXTFx8i3i7sTyPr5UHibQkXzLAGgH36g9dex27MWGRf4ymcZDMZuWpz",
  "key42": "461XpfcNZ6JwTFfRSk2t4fdVBm2wRcCKixTDLR59L1522JhxaFpxDQmTYyu4WtNRe8R4XmRyfK5ceNxEdQyz9V9J",
  "key43": "2pFxvMghVaj7uzyz19AomKCVJ7SCuaXtjLxG8d8oev2kVa1mbriYiYBA6See1Pe3YgfsK8raidgD1QqcQkgaVvN3",
  "key44": "39qeVAepTbZB3cEtt8VfB6cEfzWy2aaL2t7wJQH2cajg1AuDwjutJPe5nAVK5sBxijWHmAovKw5gmHKbXna2hSrk",
  "key45": "5ef782ZfyZuyYv66cv5GpVU9gsmBrFtUeiMn5i1g9mPcWXSmZx4yKB7kHYEscmBsshTE2BDkT8R7ngMac3wTU22T",
  "key46": "5ZR2HscsX38ywr55VY7jENiAHd3Xo2MiUWaRs7gMKmrFk7AX2uKKRjqzw1hYoxs6veTcnsgWHgwhCgQHiTCyU4oS",
  "key47": "466Rq4WoQNwotuMJAwAZUufX6HFffSmgzxePjZLs4X5mqJHuR5RWkF3rJujMdLnYtncgidy1SJYQthMW5hCbNtmQ",
  "key48": "2iJTDFFD8jBHLL1QTeiAzbchCkuAM4JxFmxjkcR448NAoHoH3xkE44316JB5t1pSJXUKZKYqSyp6CV8oPPwCx9bA"
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
