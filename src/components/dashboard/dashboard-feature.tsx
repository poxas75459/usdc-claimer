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
    "R86FkjrxUEUkXYJNGPTmRybr2gUEjg1wmL3gqzmoYWrLuTHYPwr2zZb1uJnuTYwC4XQFwJCsrcb3nsGoGfoSCNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zKHc8kXcPPL88LvRwz477KBMBJz7GyLuCqwSwp6mUAUS3bez44pu3jyhn4FspkwytmjnXoKr2x3KzKEcEBfTWF",
  "key1": "3ccV1ixR4gYos6M3YXAGk26tzHNd791FeAVxSCSgjL16Q9dgDbhzyDi9sxEZXqaCBnGgBE7bb53WPEY8VdY96TBR",
  "key2": "3uJFKVkxaLUANDEUFdxFsprZHxKBvMpBJcMmnBZJFvbHnKh3BNZ7k6UDDgGng5X9ca3wZM6wUVVKGndETFPYq1wE",
  "key3": "3uNopt5u7h5X9pA7UBuE1PTrfoq7Ufpe2iw8SzTbx2gTrXyC3vDgZgXEZPH98bLC9jGWjoxNrZwSAzozbWpSSmRX",
  "key4": "3d2UE7ZEf9HCb6o1vPrZcUuj4ZKPo64gGcMXA7BQ3SV2p92GyoXRjy5f9kaPkcp97hhG9X52nEniSAJyZB1kTGB",
  "key5": "43dkveXfpz5G8T5ius1mxJTtb8N4MzZ2ZPyBUo2rtNxjjZnqshaTSk4TdM65vRFhdzhB8wZ3S8ZXHbAVBbEnbVUf",
  "key6": "2h3ZBMP2UhZJKeEZLH2D2as1hT2FqgmiPNcFU1oVAbM9RaWkDYSJn53o6xDx4ntrJUpGhbpUDkD4SvtpE4ugPpvZ",
  "key7": "p2DoSapDdo7RSTju5pM7YMpjRvqB2mbC5Ez3BVaoovqnhn5zAvyvBzPXeNZGJkVQbDhGRPF3tPri9Eod7ancxxH",
  "key8": "5iYU9JzSi5HvPo5oMtyyvp3NbbMMeJpBfHgJT1yQRtzEGLcVi8Mioik5TyxyLzaLhQZ7BECv2jdcyDjQhxe2Ezq7",
  "key9": "4SLn2SaQ1mBF3wf9MhFp7sLpeFd7bMDdPmodZeEjcfjNX8SetUmQWkdNNmWcFn7MmEJjiY95FmC5oeP1xs8bbCN",
  "key10": "4M5zgymLeiqUkx2kPUtZRn89WdWC8rXJ5wCGSw7G8LMHQbdV8Yeo9UFKiAQUzoaDkPpCMd4rkN8rbnFcgVmKXNb8",
  "key11": "5ZftmNxYjC6xqiTPVrs7FBKagAJxnufAf3R1DHJBJVdKHEVkrDGaog42k7BeD9j42T1avizu85YMxWDTAn1hVoyM",
  "key12": "4ngGfBwmMfuBfErPpE6BRjSoCTKEboK1G41do2enXQF24mmWcqYU9eYWwYXJvprN7GHuX7KQKKAtqHMfc1EdZAKi",
  "key13": "Jc8fMtt8GLL6MRDx9X92V3WP9nRPjz7YRpdPbyYYgSGtNRZoKrce2ZWg2xHDsyM3fpu6QwpS5Tsh9vm7wEnW2oa",
  "key14": "2XAyhY14geVYyAzASq4G9FTAo9y5UN4Lansh944jrjyghRRTUUgSnbeNJ2gHHmVd52s4FWxVQxE3PGDJEsa7vsJu",
  "key15": "55f5qqYnjoEr9wUPADCvxJJDbF87G86o8EbYZxQKqKe95C9cLVJt22BwK5H3knNBghZHB7mKTB3bvjHct3DrcVyq",
  "key16": "5kKNfgpgm9trK2J3dZp2ZHBM16RuZomXyAtf5T7ZrwXmUcvRjF96h3swKp99imZ1eKvg4c4QMi6Y5upJ2UwrFc8D",
  "key17": "468Dq7bE6RHXuLPH6aUMxei264UCPX79a2Frq6NdQbbME5Vob9MBdwPpyCzBjbK6aDepZKxQNAPqZBcsY41zhkaS",
  "key18": "5435WFq7QRCB9sL3ZW9r9pwHPSvZRWBuEeDQKZxmzLQSiEJndjFLqDZARvLYN6oHgsDx35CvjzGUFHqR7JsvRuTo",
  "key19": "5AksyYhhefdESmbzR2qWsbPAXHqw7KYrnTm6hTNVMv9f7DHd6LvycqXrXLYWTbjxHQ6rB1A7Yue65at2hbAgubjf",
  "key20": "EfDyiwhLLBFFL3yDMUyWdLbem4Vaf6E9zBZfTFXqQsqKUBJnkw1brmX2a25QeaHzCnNA3kNnQdrsu8iW6Hz4bnk",
  "key21": "5uoxfQYeS8hWZEs2sKKnuQpyrp54mGVLLZvfqJXNf2kMf1EbjWUMopx4TB5Zy59JbBY3VMjH3NLrVssX9C2fHgNW",
  "key22": "CW7QjP39AUoP7zRLJhCYYPeWJH67cLV5GXKXP2QR51vQMrmCrHzF5EAEXY6gwBEqwHeeWgBgbkdYb3SwazWg2Ke",
  "key23": "52ELjAEgVmbA3ABia9zVwsfvZ4vW5BZ4tmr7cHujnigFaqo3JyXAk1cAmUWBGd8wKx7n5PqJvQDK9fCLmMGiYZWv",
  "key24": "2RNthc4wmksiHuyruKLA1q61FDnqPr2fKAp8obG4xdDVRshaGn7yJYz7hYzoft6KT9Vt7dASxcGTD8hNnwwbVxX5",
  "key25": "5eUjzDU2cKh4xQVTtLb7PJdioZz6tLzEuNFFfjrMTrAuZd7MH5WTcB8fpJ2kmw3BdMTB2czKsL5XNEgDkr1m2MxQ",
  "key26": "2ScgZTxPNWJ4SBfmVMSKQFhJSZkFokprmXkaPZHZVdtPeKYUz5bazrr2BoPjAU98MrZDgMFv1b6Tm3WJcuePXdCY",
  "key27": "47TCso5occFZ9gEWP7qhNGj2jomPhkF4rJ8vYm2LEaccXqkKdL1Ug3WdhEFvDQ79okQnrRw13iDqRMWZWD2w8qYw",
  "key28": "4Z2h8hrBsgmDrJDq5jPNckNsEyXGqsWmtYSkjJmHx7yCwUL35eEuRWgZvkDBXzB5BuweZpEaqyjkPGZWCfoh64Uz",
  "key29": "2e3XkyECioToR7KstjpRyFH3RjFGDgAm5yjHEVBnoHpGdzgHgAja9yTjxCRugnvriBfok1oDscNgpsm6t4fhr6pa",
  "key30": "9g6pB1FGja8tjU4bhJ7wqWLpN2p29wwZDWu1NqHyXjzc36BHu3g84s4g1qpQFm5G8616xzzn1KVMkx19JtBd78R",
  "key31": "prQZn7zqH5Lue78ujiYMXj7c1Ate7wgyctzFoj79bbgNzKUgA6Kriqy2afeqDHpdU41KPXPpQU7dWqU8L2HR1yA",
  "key32": "2Hbx1AFAQosvRrFFygBB7hPgbfhmXEMQBgj8aPiGi4qQvcoxzmzNXyrFFwGqZBnMi2HS2bgM8eyJ82LWPQFtYPMT",
  "key33": "3fkodyqoDJJWf942h3DgdVHZpDYiBffn81o4mzCyppQ91j7ZTavN99xyrKbg797KsJykBvrGCBoGcs4FijdJ8ck5",
  "key34": "5AqPhK3ZctTp3ZiomjUmLdmKjMbKG6GUtHMFfKtqVShNmqordSD5DCMhVNMqqAiUwH9wjV2fuxHHhwHRzE8tvD58",
  "key35": "3R4MCUuECeiEta6Va6VURpt74QWVb6LhsgVNBTfx6PB9Gy9xAciLFXLetEw98PiVwZ3QxK2TFEt2VRwkRqK2aWEp",
  "key36": "5jvBd1f8Bgm9c4DbM5FSGbRFr2pwCvuvTNEHP5ZedzrZjwGEG85ap8XsskxVwemTHXos8A4PySaKvsjjYu4ETqvh",
  "key37": "37YzEw8mrMQXSWE6Uot3vbCrQHHJbAKKoJMzv78qkKvmKtLW1Xam86HHiDFdYdU8LyHxjAfqKe2nTjTBJro5PJGk",
  "key38": "4UrTSJANeppMtY2myu79hTGurV6xCSg4hoLQUhdhmcw7gkcxGksjmqZ87XF1rc29yiQJxTJ253sSACzmYfH64Lf",
  "key39": "4zXs6TWcD74MVJqjrJqZ6Bu2wGcEKnhxtFwCN8u2C7BgbAgVTvkV5MoW5ezBBfUG5j6hTx5DjUrPRwii6PNojh6b",
  "key40": "5qAHkTP3FJbz4ZyoFKd1uPWT59XxfsQ8upr4HKsmAK6utvkysTLMaqHYwi2kFpNVQE5qkCn7ZpTcxTZsgQVSwznY",
  "key41": "58SC7MGq83i6Mu99gdWLyKZDcYBJ5sqitw6zSAdKnbvLX1F1SuzazoGGijtBEykWusgZyyCXwtzQaUMcuyBTQS61",
  "key42": "4tzf4hJToCjgx6MLqdfkjjTa1quysQ8xfMVNMmL9yNqYS8Y3uH6eXfnQ5UEF3XtAyFX57Vv4AicRHJroMBHjEUUL",
  "key43": "VkHwvqKHJC1hXJYzgv7Bc6rFwG7vP6kSbRaJC21NBaiXLNiHkDrNohe5z2EvSDzA6WTf8GQcADVvqJozGLqUNFu",
  "key44": "XwNFGQA8gaji4p7kjZyA6y1XKvZ28Lpw9fbbH1h5jyQD5xNU9hmxi7aX6Waxy2bJJ27sDbjSE5fgp8QWtwSLgnc",
  "key45": "8dtzgcLKyHYiBB1Zb1iUPCQo1A2ZcwCRi5yNB34sbTRpA7xGkTA136ULtmDzRGnN72pmQhqZZdKPFnJ4Y1JBs6R",
  "key46": "21LWa7eZsFWPwoCpjcF8s5RTQU2d83V93f8YsPH6HFMiS1CeR2519bCLuM5PRLPj8U9bwyjF1aNcetYzUavFyUBz",
  "key47": "jBjPKA3kc9YrA8tXDPmWcMPf3zVBZVeQBtx4Uv783n3AMQwCxhZPfj144UEzZ6eotP1LDmaTVkeMHFqsdiQUngP",
  "key48": "3GDC8zqahgDiktAY9i4zxeDEMmNkHgm9qKEcf1fxb9nZQPGrCbJ8XFx9MEXEABeUeW1RuxZiSybRSVBf6PWqSbiG",
  "key49": "5VcmDogxbtYEjXDd7jxxFLo2YtZCsufR1GmevQar5P4MiVkGXNuvYMBu1YPzQHUfyxT8oGEFkdxSMnBUnQSET7pw"
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
