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
    "qHU8NdwagV27KszntYiB4fbjw9EYNWW1ynyLzbP7Hwgx78X4CGUEfgXiAE2qxVjju3aiLcK67g9hWGijHpXbDGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bept8ALVV25hJzqJNzaZkYEgZhXZy6cTdKFJmnx8DmKv2UDiZPCqfRrRpsNdcUTpatuY7v1x698tiHdZ2BfKqGM",
  "key1": "3cooqWhqFKYE8pp3m1h2TZSjh3hUSg77GFkcYMZYxaXfqMQuVSjpq9zAmtAFp7JfpFsTcop9PkxAWj5ExtCVHbxy",
  "key2": "5vkArCVREveWATbXkwsEeW9QsPRakp4AxDu1Cnuqo8Tnwp1Z9CxcCpdd6mZKyRgCMaRepLBNjjYgHeYxTqVCZRos",
  "key3": "3q8D7aTBUAg7SWGAD5QdmmAEjijPSCooizi3gpxpeRFB8JRiv5Mew1mmV8MQkG2NVLtDbicamDnBvwPPe88rhTAJ",
  "key4": "3MykHrKe4PDo2iJEqMAWWMxWWBq31Dbws4DA6Bx3u82TUTkqP4NfvZ84ibjK2wst1UUGj1XP6E8tJnFXQP6TdjEB",
  "key5": "3Q4QpCgwvSR1id7Z5uuuEZq8pgR5VVFZXVqfeYqojry4JsQZJs3F87HmtLjeMeCMZNPQBjej3kGUg6ELn1g4d8eR",
  "key6": "5LVyJxAQYpVGpZP2qhzzgL6bhf1C8z5mw2Nc1Y4JhUVhfvSKMQ6baumxxhsfe4PbHafFahT1AJfbQ3zJPHiDcT6Y",
  "key7": "5xuT6ey1o2jvRkogGG7Rgm98wdXYUzUyvimpKsN2jo5MqU9M2TRqKdELbM1VPBw6ReAgwpTm2S2KTUxPTbYmMrkq",
  "key8": "3uHPU2aKHqu4obu4MfErad1f23hJHFk1E3ui4oJzdT2ofSaiLix7586VLu7qbwdmuDqa1eriE859N9raL4WxjVzH",
  "key9": "No8hbTccFNSv3Te67L9iKTB6DMfpEqMGhYe5Q9F2EJVDy5LomPiifJKtNWBrDRkgdcmoRa7EPWsZAHHeYi6Jwjd",
  "key10": "2YioJrG3cvUBE7Q88ocsCv5vcaHPD5gMACGxPFTkEAQ1222dAZER5qo8r4LkTnSn59n1fmH5w66YzEjR8UYKg5He",
  "key11": "4AT47SQNdSn3c6dFk7zJrqcBhuEaSwX6SxEy8H9UVbZeHWPua7fZkXiT83bvoncfon7s6gXpjeALFFTvvF5R7WTd",
  "key12": "5RzFLryrLq6f8PESHdbdbynYBsStpguT5ehxjY31eBony8GkeK7EXcumHNxRidCvA9wQmjX1Ni1qELrM8ppywJ8n",
  "key13": "BCe6h8VfX6ChUGBgFiA6iMzfofS2wUsVMJgvpsBn12E7nTz72G65AfCmqpiECqjkse2m7JvM3VmrHjw4QSXUWGA",
  "key14": "4B1b9Q3FV9vfbkeKkR6e6kCPUM3QbbedeFggm8z4RoZDvcrzEQWwJtajQpeBDXXmJhjLUw3Go4H7F84PoyLMFpGV",
  "key15": "62C8om5haSebKo8G2ofHZCGAxddW815EadY5q2mizy9yPQ8MgTE9pCY688m4hJdyDEVipGpuPsGaChj91QXRAWAh",
  "key16": "4UCXnchTFvUcvPj1KGcuRpQJy65su5S1AijnZGBF9Mix9LR2pL9Aig14CGsbUYJGSoF5bTrSK8rvekA2W89CtjuK",
  "key17": "4rMHmpNxwW4TpwXQGE5vUrpawZbU2RKD1wQ3NRpMUfp7gp1nC37VG1t8Pv4dNp55kmjmHuq81YYxEZ6cLCd24AUt",
  "key18": "3REmXeYtJWLbujvPbGcadPtssp6L56Udn5NCSNTzBs3RYEVTjb4fsAGbGWdNb7A6tfP7aN3oCEfQPQcUnhRciqNC",
  "key19": "hwX6azqqYpUxjje54pii2t3MSa24EQBe2KZJ2NEpqTro52V8cwmAzGzQKpEVQMpx5Tb1tyo1RtkR534S7UJL3S8",
  "key20": "iFUHMbyxGwB81zmBXkXN5inUN7KUQ9Fhn2kvSdg3knLfHwsTE8SiL96yKs6vDxKdSwDWbumiok69KwvYyQszaz3",
  "key21": "3du6bv1yjRFcQcdwQ6a5VCZ5QnmoNArRb6Z22ze78t1yDfhpghaEnyxmmyTfwErMKEbwwJvaKuQiBjEwax3CpDv4",
  "key22": "37oZprAYaZ9zHx8DCeTxjdbupfZuXbbuTHEAM4hqejhd37DaZEG4VDqf76YQ4kivYG1FtQjuHL5KPypefaSQXNrj",
  "key23": "PHuM77znqH7JaGhAEdJ4A8Hc4EfixkYR6KkBwX1KbvipuWTjxeqLc57po3aEM7cTUv7dcoqP7GRowgmj6Yt4t3B",
  "key24": "3DMPicZDLB7LDNKJzZPnEp53RZJgivaCo5UWtcfoc4MdVn8HmXZenLJ9S2ws4uEJ7KXkrHdKz5qXTM1nzHqnXnDU"
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
