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
    "3cfDRsPAYiu6h2XygkDagqHwaB2pztXCbof1GWTxty3CjY1ytxF32QFfbth4oZRkiFWuW9PhXL6kGMcNEBeTwNbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWectXQf4tM1x4ibNmy9oEWuR5mfqEGY8zTGGiNaRV5Yzc5ykH2aUNdrawjDJEiJ5TpNr37p25TFEPVZDXwPFui",
  "key1": "2Jhgm8fPHeFLsDxxjZbwEnc7HEFwkecrvvDbgHtXTfLhdfq1m8gyPcLciqPGDtYMJEHb4gbVhVLK6mHfMctr8AuE",
  "key2": "4Lz5gcnZShiHEHLwWxETRa6h3gnpGmeg9zTdonwB2bEEJe4J54PDUDwNEJFYzTbaER4EshkB4vp37mdwpziAC9yt",
  "key3": "4K4mByVQp9xD4WDM4gd3vVjyfCpxoLtRULqaw4NWDaTFoH9J7NMe3269fbSP7Yp79PrPT1EFaRk2vkY1Y7iWnc54",
  "key4": "5GURMu8kd2Suc7Q6moVr3yVymhnsXukgoKTsx65eap8dwFCgsQkZ27LFsZQEySt3vz9nSQbarneaV5APs5AK6dNF",
  "key5": "3LeKZScrzc9BLUAnbwCEu97fLJMW3eUndKyTXo2o8qgtaDnNYDUzSu8BsBm6osrYWY2aWasdeVF8F9jXL8qCAc7C",
  "key6": "2s3cjPh7KvHs5cF2w34RYEo6ofnQvrP5y5iwQDsHVH47WgXpBbauKNtARDU7FtpbCAfLY2s4kFYFxrw9nHfoJUz1",
  "key7": "3ohanCdb2msc1KW3zSEcFtBYXvCLAzx6U5jzRnNQAsxRyYyEfZv9yrQx1pXEmGNzJQRSt76he9Gohjob7ABoYqqS",
  "key8": "2yewxtJRrJKvoRq2Fn4jiZuejSW1a5TPsuBrUr9dTicodfuvWL7TTgy4Qf8rKbEQmkGDqKo91pWSi5p8wKg2WuCv",
  "key9": "2Djx8Luba8noXhFSLry6bgurSoRsKB7uY3Ct96UuHucWfdYZypVuTEb81MNZyu88p86sHKgnVatvCeXg1V5zcRqD",
  "key10": "3g2AggtsXKfLH63BgNCHdku3K26uyRfn3m9mzYU8S6a5bigEVadWP4ck5s4wMP8mCgyw26TwDgYceprmqSPRVQ3x",
  "key11": "4qi2bNKTwuEoEW1HKE2QiEzSXWYdRUXPjQZD2kknZei9fdX6YwwWY8dKVkWUjLjHQ4gGKiWGAQxw4aazSKxYHdBh",
  "key12": "3wNxvMwjUdr9zqUNZuXiyugu4JdzubRXGxhWVzskEkiFp3XsXTj9Gw6k9VA2uUGzZMKagcp5JZdkEGuCScf4yZdG",
  "key13": "5tk4PAAMBCqoTsJaxBSfgLhtnhasFucdhV7oM2UzhRTNqb83nnbL4WkLweXYA5g6tFyiHNH34cL4NYknp77D2ksj",
  "key14": "FPS8htHtkMNFsmoPeq61Pf213AA518StjbisKsmtZtUP2fjexza8Ke8RYejFzvBWosjhVAPMzTfrhQZsGwpEnY2",
  "key15": "57s6UcFe6Crz6pJxgtvdeAb1qzQAQUDDTHT5qaGxPLAEdzaC6MDmuTZnBDMdBVrY64BPwLak1kvXVLwEjjWZg86o",
  "key16": "3RpyBbwtkJ4RNH3eSbNUqisFtV5ZZn8979iM1qeTnto3vwahBzfjr38pkB2xUedRsarwBm8bRaokT6XjCoinkQUN",
  "key17": "4RxMfDbqGn4Y3DhMJQSgxZ8ohiCwyXK3JBbSFq2ZQ39n9Jc2FZXrCMawHVTfrnwBRweA3g6n4aZoHHhBfzevq5fP",
  "key18": "3Xt15zv4jEdtbLmtEVtPmtDHCaep5iqE7dyDS5aK1P3VwVDZyNtQLwgJh7iqEDu4fJfYCiDm2Qbo1SE4wAmxKeGz",
  "key19": "4CFjbzDFSUt4pDT569GqoSmsqWYoAbxpYURsvhXNt9MyJBCzScFkayrBXvVSKoqDBSo4JjbxD7KQtWp7rxToLnmK",
  "key20": "4Zcz2oCJmRy8CtJW4jW3y4ZMSaxRLg2QkPAwAfDNuJZEk5ww6zX11i556roN6fcw3waAz5Wu83LpbKM2Vohdjk8q",
  "key21": "4W4mV7svy6JT62M2bEaoucg17nd1c2XnC2HywnayMbi1zfLjwPDfSF6s5Ew97PhyVCnrWHF5tz5J7saETf5Hx7m7",
  "key22": "2o1dhjCH3mJQuPazQqzbWvvwpLersdJmf5fXeZBGZDALiQ9HM1teBmdTxLt9LziRujjt7PPbd9Mp4S5L58epfVdF",
  "key23": "5fKQGMMcHZGXBT1UFiYSBARHPoQ3H4U1EbdkszWYC6KkS3MLFxQyHsR1r8JPMyais1p1UnyKuTKfUDMio9NRpMe3",
  "key24": "3Ek41bb3VEmQ7H8VPY6Xmg5P5ygcVzahAWKzGsRpadDirm2XKQQNpAo1CVVxiUaVBeAUhuEqmGGKPTDKf9uW4ovX",
  "key25": "3rJ8WHCPvovUAgvp92NtPvbaYkMi9hVrrWZJa8zM5y2z7cSNV4oivVe7HSBNQp2c9yV44F88tBveb3fszufvp5Xu",
  "key26": "58ZP6bBL6ffC2M4TEE9ULZq4TeebHJ5BrDAHeU5R4xuEtqcVpsF5Uns4ueugjDcAvftUnxWcmiybXbEXVkrn2aJZ",
  "key27": "2a9sTFzyyH7pNdAeHBxVWwyhCp8fpNuRbN8oLJg8T8Q744XAJmjyDJFMpxTGWb5uXkghDtueCof9g7mc9fQURg84",
  "key28": "2ZC6FSTA1wswZoxuvm7AFRvjFCqoJZfPZF6d57Am82ZHp7jYz7GttXMUEVXjHvh2CpFmwRkYyPZAh6h27NtbfHWq",
  "key29": "4YXw1TmvYmfcyVAcnCeKnsTn3vqHWZxLvJGgMPaE5NK53urD7u8pNgPAnkwadAcSkxEG8DwN783vZjRoDpuvXjz1",
  "key30": "36hvGaSJi9RUdKkuMrog9GWi9ZUhrz9SM2vqMtjc5P5xm8BpcVKDyfw8TJnZnBFe7PxNZCRWy7s2BiDKN66BsP7Z",
  "key31": "3QX7yAptAX6ofZ213QQY691P1ZitWGpZS6mx1AARBNAYHJCYXoz2kXt7wwaKnhhpu2tM48W2GFe5r9jPWkFLBPbd",
  "key32": "5HzMAhV12RPCJKAC5jvLW9UcC7bamhDfgVR4VNPVdSCfadu84mM9vf7JLCTV75M6AsAxZ7HUZWoAKbvLsPqq26UJ",
  "key33": "3JPT9pykBLMJxpVy9LbbRGBsajcWh5WdRxcm1kF95bRcRABHrDmY6tGa8EXhiqKjzma12y1AirbLiNAoEiLzFtu",
  "key34": "aqoQM4hUoNXEwhmkijtG6c3UCW4HnjS8K32kff2X779XwL1eZSZMjvjdkNEt9xsH78U82xaCtdKP3Ri9j7XiHbX",
  "key35": "2f4vMRNgx1fcBhXmzBsc5k7EhB4AkiqUbzfYaQ268xtFwqCVMSMmkcrcqoLvP1k8rRfQdLJh5m8QYq3p9XpbTJqV",
  "key36": "3EUPCgybN93pBNvHXzveLmGpbZmVCd6SuKRAYuUXvLWqQAN2VmKTmVQDF3eW7doudrRCpMbrN87Xf81ppEzyW3S2",
  "key37": "9GnaNjnaou8RCj1RMtmVcbTUTKWw4B4TwTzvnHiZpRNjCdo4tfYguLdER412xxsFBVPCfpSZ6SwRzTDG5LtqXzv",
  "key38": "Bbtk8fXH7ZsAPc6UcRUaAgdY31gT8evcCq8C8VqSnyWJjhPD6QPnVTPUrxPHQNjcgCCgQjnHVmXnHcbc9n9wto4",
  "key39": "4SigsaYZaKbJiUG6GvungsvokjpHH6z2vwhSGsZwdt5RJ8thdUuVRT4wfhEcV5L4Ny2LcxDSbg6Vm9w5VSN1GvGP",
  "key40": "2sfQc3fo2TRghq2NwxpWrdC9m7hXddTeQXB3ouPZ1vijzLWyPKpUb8rDqr61s2kthENBCGVJcu35AKqqQfU8Goq9",
  "key41": "538qpNtTJ3GpKKJXov5CV95jvaTPmUnqxtkFnJoq8eNr92GrduoTso7CuanNmiHXyM9AcSr47EAu8DE2SHCcbBEh"
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
