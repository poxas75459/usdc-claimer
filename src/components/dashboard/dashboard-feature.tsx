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
    "4okTqxcGXanKRXyhxNRLQKiKrKTsWY9NDQ8DNWqmfnovLrpvkkqz3zLD7QgUhdgZAywoGjzRCAL32FqN743KB3dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndWbi2Qos3yk73jDkw3FA7583CNUeyBcBRGLS5Y3VTspEWoGxmS7zsaBTXUcbRdRWfMAgyVnqcnSK4ZvmVBKcys",
  "key1": "35Py84eGPkK8SfUzdKqECVFN73haE7CRNXU7FnYSX1jDyeF7AZPz9P2c8y6VzAU2J63p3TvyoYN6C28JayjL9LHm",
  "key2": "2aFPYpM3Dt4h7XgYuojNqa23kg5mH3C5vGYeKMKvw6HZsywBHXvWn5Qb2CcLNf4Na4W9VXb8qNnSJs3yrv7MJ1jC",
  "key3": "vjsNSREPWMZR1N1Pi8oQoRHbz9Qv7QE8S7zwB4Gu3qYfXpPE55Gc9vv3j7pBzmqb6QcY4GSr7UiAVfs88AFH6nJ",
  "key4": "46XWx98ALUex3axrYZ7r9uc4czPnLXa9XkYP9Xppcgeqd9rgA6NZH477jpjfmtrwMCuCgYXYsqyH16wMMev7iYeA",
  "key5": "XVnK3NmwY8UvcyXbnnpfU3Q7ddueEFnZXj7xF48wcXbc6n4e8QB78tUi8uZRcLQ9Pghysa4ET97ZQTunPpPot4Y",
  "key6": "3i3fLmp6nzAwB5beXZTN8kbsm7GnBBbi7DEaUnqqLDUv5aFjCnVcDn5xeg8ZkbrmJx7jZPpMgP7vHk1oN2TVy3zF",
  "key7": "4RhxCVhnkSxdHB2e8avaVBZwnjsCMJ8A3qcsJt2Pab1Zoxz8QEnryc8xD4DKjXPBS8Rj6yFC9YV6U1x8hEAWHQDk",
  "key8": "25uF4oeTpFwW4VRPX7DU9rzFo2wUDLMrAEkz4PbqyTcut6m6gbHypwL381uqwHyiZ5o8mfn1s5p4187DQZoZwnhn",
  "key9": "fCCpxcq4spxMe3D14A4sXbSF7B8WGpgYURwGHREbsrqRfwZAC9LAs8kKCfXj52uXt43qnazZAekGDQGVT2oSb2P",
  "key10": "3CZVMU4r3Mf9x9eeKB9mBWLMXFxfFudXS9a13sKxa7vUtAkzsAE8aXDT3nPKeBNcHzPvtAXJSGaUwyBX3VVVpasG",
  "key11": "2s1kWRFJkTyPkWPumV3FQA3PaBUzwwZupR3SPuNz4eZoKVhdisjQigDnZrZ5wsfuUop4m3JD3kwcJHwMMZ5akGk5",
  "key12": "4q68QPyqPdP1HGu1dAhb8G2CeRz6QZ5Z7mgASHXXMdHSzDDyjU44NPafkWC8mdYvTUY4zf1DNbShsJeDrfPZdb92",
  "key13": "4UNJgq6xE2M9k7Kmjh5AtfPjUuFV1TZVxfigVzZ7fMbCuqFbR6eX9irmy8osB9hKjwarHceHPy7hxdwhQCVkRNqL",
  "key14": "A2vUB5Q4MYwVzqhkCpTuovzQzH4EwpVey5fZScLjrZw7a3Pt8X6kqHaZy57Axuo2xGq84PjLPercXnGeW2bmpPq",
  "key15": "3mdGbsSs3vzvPC9wjyKsY4neuxkUhzVsXKKXLqAav6VZ5LsToT9wDrpUgJgQ36gBAxDBNSy9Ub4JUoefjFNNSZTt",
  "key16": "3K2qUpYdoWY4QvZDEFuHoAi5RumzKJmuqMcqWAL1AUfp42BU5LLkPS9o1xeQ5mFzn4HQweTRV7tRTzvtK5zL2Ji6",
  "key17": "4KoBv3zv9apNgFUNiS2xwCSK87qYHnzkavPXefL29e2MvDt9Fw8JmhYbdDQTZ113KTw2dP5KsvabPKoyfqJuJNJh",
  "key18": "527HJSZj6XX21MJ9QMcL4bVLqQwZjDQGzTYJea6ef7H4rWjSnGsZ7mAdp2GrqF9q1RSGZLn3wNyXa4ab7U1Y22bX",
  "key19": "3aqss256A4KEssF9B6KxaKPc3VSFzxdi5KMnz7Fvzmbbp58RRTJZXUzFYBq61iJwNjyZcWVH6NTMWDaUsXEhajtR",
  "key20": "3bNQioev5Me6hhV9Jqe7Vwdy8yoyQLd6dozc3Gw5guGGbCaf6aTDWmLj3YgsEggUD1mjJBENUNX5YDaWpHBodfHR",
  "key21": "4GLn2ymhgndap5F9R3NVPhDFijS18TzyVqtXFGeoiVEJXuUyVyvZCVxuref9LdYvGFR3RtdN4Cd5KFUKJZDeeW2Y",
  "key22": "45rqsg7QeGAcsFN4wiRshYet3MT39KqfEFHYvJEtiWgduLim6Qm8Xh2iiSR5XG2bs8qzSowFKnVQfLGHHNjcaG1m",
  "key23": "53pTyLqNepMWE9tfQ8jQN8vPczitagvAgLiA5vcNmNkntNF6R7bhJvDKzfDZ1y2h6WttN6N7JnyCT7eaAmeW5nrd",
  "key24": "4dVbackWE6etPFuf1ZcJmoV9hCE8whEpWVtTxe6gHZCfHxZcVowb8PYvqiUQrwea3Cri4ueZgPVHuu6e72GocXDP",
  "key25": "5e2qYLV9sYoeZonTcJ1EQbhrKWqCUa74NMxsEEhJVvV2CwkvPNKKhwJTK8PxPi8DrPLQCsVQmXCb5wZz7YoHUv4j",
  "key26": "Q9he9Zq6egCt5NyNJG17QYPPLakp8682tNeFfHyA8W87Tbozckpm7EymDtQP6TM3ZfJhZoGScQLzBEASUCrEr6h",
  "key27": "5VrnTTtK7xxN421z6BZFtUmn5Hmihn5ecQjz2614ksF6LZFnHfsByNmsEWUvnyGLzBrFxwwqFjR6T5NfWLVuxdfC",
  "key28": "UNLuGuH9VNfXFPMq2ATn8SeURF8hAvWntKg7tpT1ESvDP8YUmCmMkmJmuQfRgK2FvZ1YM2jrWXRrwBStsmT9ZMG",
  "key29": "5VKssdascpz1NZVPR3V9mRrZiTi3YD9FoPHYf6DRf9F4P79sA2aFm1U74iy6vu9P9s3Zyijk5KPgiK9cRWYEGJgX",
  "key30": "2a9m3jKZQhjwA1fY5byuiuTvFC3FuVKKWVGV2kLSS8TJ5kDnJNVL6HJ3ns5qz7AwP31TNTTHpEuKQCEKVWE1Xecp",
  "key31": "33rfEtA8pxxdmX8ivE7JKaDbjpTkptFBq6HPDn7c9P8sHhmHZirMHpQa5Mq5BaoPvz5MTGLvgayQhKAn8iHN2XkP",
  "key32": "4EdYvFeXJJaFxt7gD1MmREcibGP1dUw5HymdXsfsJtxnVAT29cH6J5M12waC11FrYKLSfZcgzeNLhU97MAHusKQW",
  "key33": "2wndTJyVFzs9UYggZtvhS975jHhF3F9or9zWgHJEP8zNpczaYZCaM85jfsgrknieu1GkpCXmG9SduKc3GgCknd99",
  "key34": "7u11fQidsmgU59AEzSeJQS7hgrMLhJpt3G72x3mW8RrYRgnf3TKGq6PkU9UinVRDLE9Ra8fkCKniSDVuQbHxk1d",
  "key35": "Xgcsx2J1Gm5u6MGZ6vAT75Me8t5y2nRbcvXRfnGjzDUmxKNm91oTKgpzfpUazAnVtFGaSaUhhGucSNVsVuVV2Hh",
  "key36": "mDWBE2vZRX8uvUEUxHNwmqobEqxeaeFuuwVHtGs6Zq4wfZyMgrgUCqC4cWJ4U1SqFNvBjc6FMWqX1o2Hg3zukiq",
  "key37": "5ZcAdbEdStDkk8JF2f3vn5YDbSYtBmX1Jd7iYxdh29ubZxszFem89tSDBcVYmD1twBiHjmiV9tFgPwU8tfLKqGQ8",
  "key38": "3RnSvnnVw7Rrff7M9S3gEs2NxATen46bTnxnM3tZPSTXpgUrk6n1XwcLiMJhtAupuL2BHodW8uRXDwfWyqHvYtFi"
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
