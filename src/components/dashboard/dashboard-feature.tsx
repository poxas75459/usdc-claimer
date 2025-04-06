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
    "2uwxU6yHkhYrkwCGQiBj2FcfSrS8J7VKABRGV6mH1Jzt7Bivm8YneoySxzSo6rfTL8g63QZ8adxXphh1fYodDHi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMwM9pjxDxmRu4r1es1Zr9575iJLgYN1eBCe34SQqnqybPVPaf2iv2psLQqwKqt73YHTHLQ4x6kVg1qoi6y9cKa",
  "key1": "4dnHbarR82ceyZQciY9Ke5UxNMMDUANfV3nyftb1EzQ5NForVHyyp7RZBNnfEp7cvoVE6LsZwdXiGZNRpYPg6Piz",
  "key2": "2j2vox58brM3N1vvuZTRG4yd1q43fwNKE6PA94y6PkwV4YzUzq67FUFAQZ7ue5fGKpHi4feTmFVGtbyb3Q38y4iF",
  "key3": "4WcHAGkCyAtgugbAYqrsMzUoEV8cfCf6PtXeJGKAJZDzf1TkokQcmn3xpgbHxqjZUFCyhpyWyuhnBqrH1MuEiscJ",
  "key4": "4PZHzLBuSfFFVXN1iwZGr81ZMj8MHcGxDTHXMcut1yWr2N8zkQYj7w57XMNwS2feCNqr6xJLbANmCMyWntTQW8po",
  "key5": "2ZnQ55cFMTUdgtZ5KBSh9iZu158okP3vkijZLRw2MSekGEtRVMcnebJxx2vznnDo7khQ775pujHryQBRR1ay9z48",
  "key6": "377DQ5mUGoFweuD1ZtvMzYMuAHgnXauMDjnegaA8PPeUN7HZk8y2GwDzZDjuxipRpgym5NAPKQLNeFE2ASEQuPBi",
  "key7": "3hz1h9WQZYJqi5Cn4kr4fQGzyX5FWLPzKdnCwnuhoTJxbBhmsZYNDAd4hzRRK4rAEsTtN2xU8nXVC3nQ4CbberBA",
  "key8": "4Bmr8S9QqoBrqKjr3DmtVWNy3WvUw3sfFrB5kF5zPzysZ2M5LFwvNcBeuC3UrN9qKPnFJJC1BYJuz5zkYYYaKhmC",
  "key9": "5NSkp2RmpCuFqggXCEmt82Fsqy6fxJrND6HsxcJwhXeZUyjxvJnXZHReApwQjDBe3yj2XgKfwQq4CotjYCjqB3dD",
  "key10": "Nnzyn3nQQYrzmTXj8RAtfbffMxPrL2jNjRsQjmJc9Dq8vjmgmkfyViWHyRoR73Q8RjbiVTiQoDsbez9ph3dDRD4",
  "key11": "5VdS7NtAGZ14qbQo9bR24CVuBom3g3crFrqKaJ5TpNgtMWfJPUCdMWbjSQv3hukcWP3bZZVH9KYGPp88gNW9tn7N",
  "key12": "54SuiLdrsVqsxLayY6DQEApK9bKeStkPo5dBXSvaA9Cn8KxV63TEDHUe3SvatZPYYdwZaDfDA5NkcsoZ8PwsKxtq",
  "key13": "2gw2N18FrnKsFAEndf82gxvt3M5Bxdi8X2JL7HZGZmqbuXwNZpGgfQiV5bVbaUvVhunwGMVPPXksZiusMNe6Re8N",
  "key14": "3bt2ge7C46QpNPrVBqmEjs3DwJt9BUfAaVjkYGoRUSQVmB33dfauq3JMhTYhEm1LfJTtBrk3bZRgdjop1E73PH4V",
  "key15": "47ECd3KJZ8VSxLfEfr3y2vNnWB6BkNc5YyS1wgfLXeWKmSUgzMz1mTEtXEtinavu5UojycXGVeXdZcZ2q9aTMiv1",
  "key16": "3QPw54oMuBgpUiRfv9FWWc5P4deZKJZenwyEahSi817KMnQBwNhr4mrxN7SuqbvtfKkoQwDZPxpQUqc9nKfq2pgA",
  "key17": "2f59uHv6LM94zSTZTyEd6bCV1L6XqSrocnn2UHvp8BzURdvg1KPgtJaFwozkKCFkBqZNZmT8912qZRU9h1KbtKY",
  "key18": "wtv91KKK9kCrXRB287RAcRmm68NSN6YFUdmSdveKKr4caPYqwBrVDhxyos84Nh3uT1q3Per7kGijnPDrTkVi4xU",
  "key19": "3njESdnzcyaBttNQSvJivN3JP7iiv4pb1dZDg7rB2wWGxjkYQZeWGEW2gRb9onD8ZarqGCCPA2aJnMudaU1CFsK9",
  "key20": "LoxBr5hgJTJJR113YkFLPW5WeLZLQw3U5uByAAgbDL8WboJAHZJwV2WJXhBqre9zwfZntr8AZZzk33TQ4b9qJKY",
  "key21": "2airv93GE4R92EZFCv5LCfz2jcuoVeepKSqdmDiJ4cvBduN2wWXC9RbkweKfohyBrNWpimJ3ZT2XK55drvnTpQAN",
  "key22": "4UgVtyQaWcmRZJGvmp8KRkeR9pWUkHJz6Q5QaqkNteDiDHkwKFqFbZoTmAFSBzXYE5GXPiqbtPoLNLNywk7MfkKW",
  "key23": "5g7k2Z4p2mhEcJEktP3A53m6zn8nFrWdEvahGAafba1KX5fLaYU37RVNbxPrYKDAZG8biKwxmGjr7M7iJDhBPBCX",
  "key24": "5L9raPssq3seNGHNzLLYBuaBMqoe6D7tFKpjGoyy7oSk7b2AyDaSdvWypYUiqDEWLCBKYeSYRiWxoXyscUqAgase",
  "key25": "4mFZq34gWAu9M1iNbRdecbiMEeiZM8Gr6N2nVaiQrXbSZi7bDzYwvFNJFmsrW4o38iwfHXZ8QGbo83eoX32nGWsH",
  "key26": "2gVJAbmq4kmJSMD47KCRan2hVz2mWwvQz75xN6pPXx7wNtniNc4PEvn6w1sC1nzrMft7RWGX1p9b1fDpWypSwcSz",
  "key27": "4zgu9iiYJBh6R1WU7cxXi6Lxisq23woii7v3S95wWbNXWUo3enowBhq7dkt9bE3BdJA1eeEKtpaB92ecqNRCMnyp",
  "key28": "4fvsD3hmmud1SygDNriDPwM597mmfqPAnS7zVVkEri4jeobWkXBjpeKS4qTJJf5X7SSDsbahsyt1MxAunxvKRk88",
  "key29": "5GWccKaLFBPzrkcdDxzzAayykfHDYRzowwsBCMYL7RPvV9XL7ZLVFYuYa4DxEE7YfHiebMwUHAzE6jKWT5TVAKEh",
  "key30": "w463L1TnEdYx56i1keWkydEn1c3WoU1z5d7ZaJY1B5BTk6uKkbsvA5rr1totozNd5SWDSPXP6ZYQ8MYAV7zywDw",
  "key31": "24188N9tx2EPTE3QEsuYXaxVB2Hha88et92wJQhZPh7vmsCoHLXKJQ7cPrMKLSmUbGCRcDF9vLvmjQqAmwvJ3vZC",
  "key32": "5DqsHtSi7kpkoKTgusqAjGZpuK4jvfqoXLHozyiLTqBoGauBX2kFBxvd2nocdruwPKiDpg6PCmXn2o2ZHgnAxveM",
  "key33": "32UWod3JPXD4i34Fyzzbmm7F4RqRWzCQRif9anMs2PekfQQwDLwEXRUmAof2oNQy8FoGYTCGQxmBY5oqjuHs2xqW",
  "key34": "4s1M7b9yEXF9N3RQdTXFT6XMWe9614oEwgxASXLett1jDpL2JC2CULYcHEvKL6faMY8Bn4N7JdEeFHTtKjCJEobQ",
  "key35": "4xaotHMKJ7vw5smxVKEyxYR3khU76SAMh8qbb6mq7XQepgdGZCRp6t1pyPuCAedRNEgeZAVbKoeV3eWGkXaB6KdC",
  "key36": "3WUbeVXGFEGwS4TbnFwCkip96qtwKMuzq21tasQBK6y3sBGqNLgqK8xE2WnRKPCatGxPMNueX67THQox1XBwbBsU",
  "key37": "5zx6k5oYcR5imGzFdCLuUfpjrzUtSy6NbwBmWkjBHjkzDerSBp6d81CTteVGHK4HPKqKsZjb853urrKkJEFZe267",
  "key38": "4JyWN66gnTk17fFYDWJs2picS7XNFrVizFzjwCpu3sbFET1qRnXrvfxtQMRvmLCKtAJpZBHbi6VkF6RshuppwC27",
  "key39": "cGtR4TtPAoSjFCtg69sRpkNxNDi53P5SYEVwrLYEuMi1qVaskn2X1MvGCENS7psgqiejV1a4eoD9QrT2qWxo8un",
  "key40": "dwDxGQyTiYCw7MNfkK75LWWQBMZSGXKh9pLNkpKJR122VKLKUwcv3XzmD9SNrCKodeVMqbP2cBRDLwdaC5gA9V1",
  "key41": "4qmC4fJtPJcc4tJ7mGxcetHMHD9TgwtJHH5kEhJL8vntGQ2B7mmvNJupdLpEtUqfhZyRbKzgKaTQC1ZTMzPpkin9",
  "key42": "ysRVcoM1KzVV7r5T5Qd2RzFqG7gBFUNC4Da6sQbAibpB9YkFgqbmUAg1DUVeYsthDfaS2i8aFgX8TdEUqxS7Kaa",
  "key43": "3WKjuJnyKbQbBnGVvYUVc28xZHqQQPGxyiDhtvPosBzQ9mYsQkvbDTfWsdsUgEeXTWJvWM6v3YENg5F9M7oyo662",
  "key44": "5TsKRnYzLV5iEmyPzaTMP5rfRJ969c4owGBq5k5xKkqjb264rbWKmCP73ZzjPEKyr8ZvJ71DT4xztKsMvUUifA1Z",
  "key45": "S6aeE8eXNc4s8bapgGaBYXmaypBoQVKRfaXMBVq7b6LaKVmWDnwak3bvpmGX5BoFqLZA432Greaf56R1UVbNftM",
  "key46": "3q1SfzqFr1PeEhki7CW9rq6dFaFb4WFG3hTNHqPJkWw4ttF7fCsLvFe8y8kvwBWfx9qCWapfGQYo3FjT9Z8LmfsL"
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
