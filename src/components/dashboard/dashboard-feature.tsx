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
    "3N1FALVAAwH4wENRbKZF891ENk9ZV4J1G4chhF8ziDbEyEM8mY7cDW4ManNEkgVFw3ePAnKUT6F4Je5oSeBhoBuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fnu3EVfQGFqPcwu6hafn4g7ecWAdvz25zUQkBz4Z2tcRbFXJ1DTPq8DURmv4D1PWAdnWkRuRXXXtbf694GtSdVG",
  "key1": "5Niho7oVHrK7iX31G7ruXKw1TARr7pv1Q6Cff6Pmu8CdVmgAbFPKbUpWgvKcbgivCeznr7xsyomHAqqM9zy5bZRV",
  "key2": "2wX3z6TfdACia93aNqtgoyuqft3V3kBMGRfnaCUWBGHZeRgt3wNq9TQV53cyGxJnhzLNgxZNYVHvXZW5T6TmsNBb",
  "key3": "Q8M179yofpThtuD51yTnNJMF32jqnEm5cUmz1xpt2duaxfpPmq7GiaUNAXgsua2BW4V1vcfpU6E7eh9znWHEPXS",
  "key4": "hsheigVsEy7eTSiUE4uh6mY9L8ckYuexkur4gApxER5dJRGLgfak8dy4YuWzREfMLV658gBRpqZyN5H5chdLSQ7",
  "key5": "47AFeTsT1NgWBfuzjNAx4QPQmkHFkWHDHfPnWJpK2Ek9LtiVbKKrcxdVxmRoVZU8BJZzyuomoE9tHCtH9EmmBviS",
  "key6": "5UVbJN6zRVm9EusGwnqNwi41SbBybmikd2tETm1bRP7cEkm2PxRF2CBckCZwXnb4YAFVaPPD9mXTTFrZzN2NvR2V",
  "key7": "4LtdmEnjv3hMcwt3Z4K41q5CxGeXM9EpgxsZf5UpxFLfgGTjc3gYksCThXL8XRV1sMAi7TGefab84oqJ7oYzWCoR",
  "key8": "5gB5gaDLcmG2bP2kHupCzaYyCbdHeAw79RrZRRLgDn14LVMpUsgvf1QY3DypTqMo2fTCtPy5hEsj2j4vR5hKKsQh",
  "key9": "pScyjgkZ9D9UsMRbuFftDm8raUoMXMH1mr4zJKHADsUe2YcVWq6dAcRgafXpG5RV6LTUMkwJc1vLcoFCRZN9ATb",
  "key10": "526uERGAsFbA1KX1tNv9LFwqgnpUYiHAzmbji3firfiWirWYbMJHf2rS8NoUC7Tq8RFeJgjaGQhE1gu2qC6bVoxz",
  "key11": "zYyMeRHpc2oDaDs4uDieJejeXP33zdzGKCaoGTU55mSerVZC7RbfAyv7VZowBCs6Jzt8fAWbfT1gc4M7aZ2jLkL",
  "key12": "3Q5bufp7rEAmCGrtGL4Y4gCMhGkn6GafGqeqM3Tye1bcCqfLsmmGX991mooA2kjc8JHFv7Wr488YU4eM5dS1t2Ax",
  "key13": "534QR46h9GQkaDzyfCB5DS3dTeDHfi8P2qiEw9CVMfnaU5Wa2tkgyKTN81YJJzQVRgW6hUMjqiaK2PzDB5Lc1qX",
  "key14": "2Y9buXkwUwyrnrNiAwPU6HEdqCJ5z4tjxWCZdh6TaavSFU2Gi29aSRxEJ47jngq5HXLQ7Y26mvYakpwGzzbea1i5",
  "key15": "4FCwe1GJqR78NY1mKm6S4fcqpB8UgUUKJUatNj1HUYWXNS1yzBKRHCATKAxVxRYW1xvvCYGZzYw7a2M3DMGsTvFk",
  "key16": "a4NYa1D5yryRb4kLpMmKRczsvCEshGfce8QqsWJDKypbx1TyQ5hTEiwjnCsWY4Uztwuydv6WV23RAZ1FKvMMNtD",
  "key17": "3kADL4jdLw7d3Bq7Ui42tViPUFVKDQ8iNvz3SvFDVwYDTcNNAvFJezkt9fVF14Qas5pNQXwXPEoEDRRHsYnDTs2n",
  "key18": "4xRhNuoviBjVd7sZc2Y3hos9Jq8MU9X49kwSuyNZ6Z4UuKvif83zcLun732HiXqX8z6k5JKtkijVsUQ2eeWiM25y",
  "key19": "45z9Acy5SuBp2CmCDqrkNXmjVzGB4494KMCQ1VqdtGUVccYS1pr3z5ujJodtCR76RrwmynA11pahvxxrEhjCc4bB",
  "key20": "5u8p7xY7iK7H1XmTcb3BRn21MyxE3NVAcmEBUiTR1xsdi8dYBYB4aoAbViqY8z4HBLQXv78xh15UcQTRSvXV9eDK",
  "key21": "4WsGxatifCR5ob41ysh8bo13VUQbdY1EKnNBtyksU997HrvSz6EuVqyvCFZQhhSC457S7DXqCitz4L2q6HDvqK6j",
  "key22": "4DwLGy17AyXA5Hjt4PQzSd2rtLUscJauCHNCbYsXpWWRSF2jf87AiNYbkUCm8DoWKafgtndv2MDSDMuiEb23wknF",
  "key23": "5FXewxr56ZFZKmhgEqqezh33uc1bv81eHztnoBh9SfYoYxqLLCybehVG3Fs7r7Nk1wfEJNMp3WURB4eK2hkKnA6M",
  "key24": "5EcAZhMdfuRPchhv4hYRVT6isimjyaWeTRsMZ7PuWMgdMzeac45rndr9y5ygwE8ezZfLtp8QmH23n9GFEchEQHb8",
  "key25": "4E3bk5xBoufu5GVaXiefxQa3NcDVEQT1DQiP2DVLTJTqgrKbadP2aZFpdmgecQaSMVqxybBEoYCn4GaEcYjCbjMo",
  "key26": "eLD7VArAGzZuLGsnpsuBCFKjni3CswhxNtU76Ekgy9FeLimfv78sspcmwy3G8FTYkg6DpAojYYkpjUJowihiLTq",
  "key27": "417HJEcMkeriHgZVSS456Pd1Y5iujhVhxKYZeLwKb8h4LoBjbqTRTDCaFfMxM4xTxPMpDXknKJmAun7ZyEkCSxXR",
  "key28": "5ToiEPhYaW8hg5k7rTZ6zjW5cxHmP59FqFn1HZiUjxuxCNcS7F3QjZfRfLSjE9SKfVabEdMEz2rzK5Cqvk2rTYRS",
  "key29": "5Y3RZpVy4CKQ3GdiWjCxbUX1Ud5pmETD8p5ZNAfyHc1bDwmkPj1xtAAqt5VEmE1wbbHRLepbGAdGAesDDR8XGG52",
  "key30": "yiCsP62Gw5sefVcJPREyPWn1tGgnBNAMohycMycePwnhApcxyypah9t3QqmuF9S7BH7mdALydyv7jLoZDrKFjGF",
  "key31": "5C2YF8QTSRD4JYHNG8G3X6DxEWkLj8M9LTAzdBLLqTFcpdMvBy9Ryd1aGzk8YLTgBseaZiZPxCXTnHk83FWV2o9D",
  "key32": "5GpJm7e8Md51fGcpguz61tdW6UfAKb9kytrEYUHrAtR3ihZgDvdke1SDQvK3u5cE7vs7Qb2YoUe8dHKVNyVPw94p",
  "key33": "4z8embEybhRfGgHTEhXSAYCqPD88wVJ6x4PZ5Rhm57kMLUSZXj62CkwFKQa3ay1dByoozWsCN3NhFpsVfT74edcR",
  "key34": "4rdqVbMBYv8Hty1YUmqN5vKw3ftXMguvqcCu7CxMwaLP8zwUAg18kPo784evKWKSvLYXzMC8tL7iimMe7kw4tcYq",
  "key35": "46SYZG4UM727bemPMwzizzWKGUS3NeZCk2ebbHoRcP9Sb6CbsxTNfTg7y1bD86rpy3yf9tbCHvoNtRvShKE1GEVC",
  "key36": "3VfFKJfsu687FyacPWUAdb94aZF5QqLyT3eGEuCqDtgoZLs4W5gfRWcsgKarzfK6xQxq86T7uDq4P9SRFt9rLU75",
  "key37": "4kRjSCWVjXz8aC363S6GPtHBhWp2maZKRsa7BuZBhDjXVsUU86XwxB3dxFfiJeeL3NL1mkBR6eNVJSc13cSdfnfx",
  "key38": "2rFzRDAsiVbvhdHXkXkRCZ3JNPnhVpun6Mc1uSxojGmhxAY9DArLbnr1p6gBbBjQUYj6AU7Hx9KCJrrykqEsf6L2",
  "key39": "2XiKMWi5WDVhQ3xoyp72iyMmDQzh7SC9zb2pzqnkEHzG6WzVK1hbRXDWszNoEGCP8TLS5kWhzSC86zEMrJiguLQx"
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
