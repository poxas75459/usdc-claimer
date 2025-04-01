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
    "iNdGCpmbcKLWz9rpog8r2JiF2oKz3vfTU8QqHLRyv6mzAEGAoDUAvjZHCFJu5zW3dzMpHQdcnKvxBiAeJmssQkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1wuLTpsDknqqsJCotKBRVXep51r3nLTKvNG4ZCVMoT4ap4k4iUd65fUfreoNaR4zAurywju4QXXqdYXVJXhjJa",
  "key1": "2yw2M6bZPBLtRK6hNzJTsu76yHkXPvQA5mbrQMUtqGSfhMhChuKLZx9zgAzY56FFiXf7zV5NTkJkTVHDH1Y7Y1P4",
  "key2": "4EWZ2HrMNK6FxDnxkVRYiauyRXsixYFU67B4Wo5wrnivhpqKLxXGXBX5hxjwJzYjvpd1Hqg1xiQcoxLcDPpDdVCJ",
  "key3": "3s78PsNUN9TjpjkHvgqkcwx5vSpqPMCPjryyTCp4mFsBPnx4LZ7SKsaxUiCDcy8SfGiJqDKWL5b9yfUib6afMknA",
  "key4": "3qRfjwuQ1SNz4UKm151bhpXCXpYMvdAHnNNRz3Cku2FrLnQd5PE3SQgoibpzuP72spAvnJVBkMgURxeYixPbRUgp",
  "key5": "4uwoN1yi3vv5MbossdEYJJtWvfMDGZr6NSt1JfagKDWuhThkSb5cBYPVGLgWuGEwuWqa3y8QE5EyEzJ39yoYJCh9",
  "key6": "3bapmicRRkQdA5ZUoHcHHDJqUGpcQCiZuCVbcdAQ3eo8qr3L7Awbks9GDicdMCBFMbCHu88LBX5poQEpEx9EHVuw",
  "key7": "25V2oS3FtxmZtNnXRCavdb1Q1U5SWsemxA3CYyPWFhvHK4mHC1wKsYg1WSzg1MW7r8mspks7ye1BFWZmiSXayrLM",
  "key8": "5YRxAtwCv94bfSpQavLAYUf5bucWQ3WBryudm6hoHYugzqyM9rthfh4HkteS2Qdxow3YA24byY4ABYxU5gWyygr5",
  "key9": "3yE6MhoHXQ8PaECb4yJyz6HKj7dJSLRKiR7F46B5Ysf661bm7CbTbSHWrYFrBimXBNJqmuy29jnmQZkvDKXMJqRT",
  "key10": "427d7tXfyPJc582N9k8871MhYh5XYacQ54GYHejj4VRN1DZ4CrXgh2BhxE93efDW5MrKxJzNtdtWt7ewy67GuSum",
  "key11": "4wdTSCXhrz14NLun7sFAYk1djRscRCtgwagPtnxbW2YPNs3B7fsVdLBDtCbMMAL1XnJH8B4TRoX3CyAKZ2PHfZfn",
  "key12": "41kdY3hXQBXy44WSAGD2MUMkwf2Yo7x1Nq428bzd2ywJV381X6G8jBe3mr9A6YwegSiCMNBKyQ1c6brcjub7vJo6",
  "key13": "FFKzAGp8qJnNaBg7Jx4aiVUFq4tvniLfFHrHxDHZDZi8euSu9hKSuLbU2uU4hQRXNw5jPTkvRYFoM6T33DigZGC",
  "key14": "5uyN72LF4Zn951KfhKKGSopkg6SmBcTvZcEhvK9VQbLD1rC52sx5ify2VdrX2gRSsRA4DGnm4eHB4Yt2pVxSgfZ3",
  "key15": "pbUfYdMZWtjbmbLhjPrvp1krtjvRPBETKkMwTMQVf7xRaNrFsqvittJtmdvEowDNX3wfUJQ9QjX13NF8yBGfxMT",
  "key16": "22Xh8nF7kiiJxnDd9V7GWkfdWYZvtpNpT4eCtG5vwDHqEB1G6NwhuGBxfZBRbqWkp6LWxF8RX3i6zFVJ6qavVArM",
  "key17": "572vyEC9mnBigbbkt7fSLCyRN96XfeyAvzVfQQnWq52UBeZkjiEa8oKTqeD2jP3TT7EupPVEPcZWptpHeyRbxhyL",
  "key18": "3RxgBEuFdpzkiu4chU8xHDQWWMQoWwKf1g1MjjnXDPRn6rJopRG4LmgNuMYHr9kni33fenp21puyhQFLZkeTZdzu",
  "key19": "imgXcm2ytj4H1DGZ94kgT6fDMCuYxhigBTe5BoftiGgv4gzvvEbK8saNReq6XNT8bhjnWEyqNzr4VToZsPJuzPh",
  "key20": "4G7QAWwAisSrrdV4shauic9Y6jgqYh13NB6E9c2Nr3rj7kCWyeHpX7KH57jL7GoTPYYa2T4A3vkd2G75AEu4LLyG",
  "key21": "4zun32VqbKvBtXs4KEaeGSakAa5XfgdrUYiTiJ8g6uCYesTf2YkPzPQmPsmrdp5zvqDwwA6rJ9Ctab1GoNs1oR97",
  "key22": "5sPpeRz1H6cDAUd7hij6LMLZd8Q6i9miHVDpnVv4qNzMjtKWSK3B7RHWaAtrhNpukvaRogN3NfVeTARrZYP3Z1We",
  "key23": "58MqoHGnjMcGpodkGaLrhkuPmxwaqYP5H4wzD9uwMXA4vdi41R1X3q4obQSPoKrvdwRQArrCmx1Vh8jjyzmybsF4",
  "key24": "3NQX2VsYSBPqRtsekyno14bW5JdCS52YsM6cP9gr5BvNHMnV4YyJusrmKRmT43dUQY7suwvSqVJqRbCWKMWsf1Wn",
  "key25": "5iew1L6si92NVfdbSuf6qfZsZWyE3SKVeUF24trd1gLRkVBoFe9CH52n2zdf5kAyEuSWMh2VFoCyWGuZeQu7fpXa",
  "key26": "3BFw615h5qiRG3SxELXQ4TSjRSKx7JR9iXk2rhwZy9Wd8eiBLzjrBhsYesHSA4nnrUaU3tzTJTkoyT85qrkiC794",
  "key27": "4yLsFtzUdwm3b3e6htRerYvFWRSpo2y3HfbQNvdRPUN7redi3VM1dL8VjojTrQhWn1keVbyxDTKfCtjTuwKx5vVy",
  "key28": "3prT2DgxHtdPCzDnjkxQBVLjPwKKA5HRqsrSZYCRMqcVy1o6JK1BDwbbwWiuBGYR6N2t4pRTUxe6pcjaZd1E5Udq",
  "key29": "2N81J9A5grpcVpvidzSr1iyRfwtpcmqsHCazZNQ9FoboMhNUcsUZmBv5aDe9JqTDu6BKZy16LXS4V1au99sZN6e",
  "key30": "uWW9v1ecowiFuJm9nqJXc5T8Zpx6xNtZYaVJTyGh5EY37WriN7Hn2da1UYGr6CPyQBRuKbq9gN3kTwCm6zgL5ff",
  "key31": "5JjAC3KHtWhgcouvZM1wjXP67BRMX4bnmnyyY3n5wS926SBpfQCdFJf92Me7iLrLoVpVeupgSoiWY7RiVhporVgA",
  "key32": "3HYhRh6qc1zfJ86r3KWDbnUrDTyS1Rc2b8zKuavFa1vi21N5R8rF1vD4ND9HLExzv5zXzKZbN6rmeayuYuKyXiSL",
  "key33": "58T2UUNpAA22tNnoZAjiXxPmxnroGJCeLGi2yPGf4mUy6nL5Tsj6YyyPUxu8tfVGPQJafA22n3H8g8iysJmXRg2H",
  "key34": "jxNJNr8t9ek4R4wPrMLmrHuRvRWxJ5DCrs6e7N6PNHrttX2TrfstctJ7WWQPeEJb6hJhPwaGFuRuwnZKC9VGcM6",
  "key35": "62Ekz29Z8tfveibpCgcMQdGiyWHRZZqXuZtSmjPBTFViEVbGAnCqDL3Y7tu7zFuboPKq4syLEjhx3VnL8QnJRABL",
  "key36": "6HhoFCT5vLRuiyoiNDQtAcaEGKM396CPPdf6xWYoqBa98erbBGPtG81khS44Nh3RHXRPnZMYUbQ613h6xJdygye",
  "key37": "5rff6B2ZD7i5GSoyCx9j5HsyVYRHnKq96wEC8mdcmXr8pC4qJENQH8Mqzz8vT1mRo7efYJyvL1t8YSMdER1ixM6p",
  "key38": "3j8PSvydCVL6HqsDKTpnRReiTBKMUrHcJbHr8wVVXjYHVT5TeFgsDh3BQW1Mciva3CQESDwLdpfbnweYwTLDvZxe"
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
