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
    "3rjog3Pvv5juFNRmFWc8VHr77GBwFcMoq5qqcGXZkZnbY8D5nfnRgStSeJ8yatcRwiHPMqjszfQ8rfuX8NBrArhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66fdL5oZ2Cqji7figdYz1gGX7ykfDNuwt3E4bJWAUkjsUYbUVTxh7aq5fFKEMMnZBHdkWdExx8UHW1dDYFkYTRUn",
  "key1": "4gdqT5BToPUzarsrQZtRpSFLPB5cZpW2FRdP41o2j5gPf2E643NQNFwNqUzWDdC34JQ3qY7a2KQpGMzrW9zr8Ja6",
  "key2": "2qYeMAxvNSCm4B5KCcoifXqr9xU5rqFAQs1K2u2p83k1WmVnJwVRDSqw9DRrhoNsiK2w2Pmm7W4awCk6uyCZtf8g",
  "key3": "5LHb56kJK5ShC58FFKyM8UDRXj8yPqpT7yDXPepSaBaZVr4zxD5MYt7aR93JSbYHKBzHEUc3DLn59YMgJUCvtWTP",
  "key4": "4HxAGvuP4tuP3BknvM5TRrnjvNDNWrsdG7KKumXSisUk74pXebg9oD8Mj8r53FYcDqXbq98oG3Ztrr8gy2c276Yc",
  "key5": "3UmYN2aCU2sshPoPqnSk3caXG9DxWdvxqPC2p2HENEhs7SWRJXsttnBDnfGR4rBAmZ2NsoCLitSK4z2J4HwmANvp",
  "key6": "3s4HyE9i3tuvz7AuHw9AiTu6MYF2ZMrazmkjDRpuAyzTPKn1dhVTp6p1X1xvq8mtZDGNZJQojSqZv5E5jJLL9uCe",
  "key7": "2cReRqkvhLAQhLxCT6aw2n7sNWyFwLa4gdcmTTjhW2PcjBE8DZeph3RYg8GAkzRNkjnmyjdofsTj8YYErhJ8Tf2j",
  "key8": "25Df6UBGXxLgTBDf4yZExctctMKW98u3PvUpCswsfnyQhets4QpELENwt64GttHC8jyBmr2ngbbnMCZWFbPnh2mc",
  "key9": "3WfTz4D49FhUoeUcEgfUMPYNQ26MhLw1zAf6sRVfbBXqqc4fdgYHpS2t38PVajmV3o131Ggpg3Pe6PPZAYSMdkdi",
  "key10": "5MDJusQNAnGGo5ogyFyzBxheZSdKc6h3BWyehd9A584zWpsUkk7puuXkJnuHobJnY1wqhsTJUzTCreN6VVHaxtij",
  "key11": "5daoEqkYCGSawPtWv8rpVKwtiLNEHS35tiRTHJJfTurBqbCzqw5VaddboWeVLYLfJZewmwUv26wSmJudytwYCRQM",
  "key12": "4fHQzhY3Wj91hVHWhaDqyejxcqTfAPaFYFN7Ara36QEq5dWBtcpBYB4CRtNk1nnhwsv2UKa6rcGQfWySCbCwyuoN",
  "key13": "4C4PcwweicgNvSS56D4h7ERiMBWFQn2X5MC66wxj3f27bYh4VxjhQiQQPrkYwCU2FSugD2erA3ji7BM8Yqhr7ScX",
  "key14": "2yyNTvUXdRVQPuYoAyHS3mJgivgNrdhGeS2UEQCvYgcZZYTEapD5EwBCi2xb3cRQPdkmnHKuQhAmwa6VG6hZp413",
  "key15": "SfZLN6Jm7XFNT5gmjyqEeSb8ic3ciZ3qeaf27mA9G4i9qVYfcbd1S92x2s81r8U38RhisAwxB5ueBbqKq2UfSVE",
  "key16": "dD57xVaFAwZMBUBDXs6S7XnnRCXgRZbPagfL9gSqh4MsecZVykn1db1mXxZuLamaAWJjG7PF7fvQvUX9iBg5hNC",
  "key17": "55JQ6g4jca6RKaSjP8nGBALdMw5gQb5spuEHCfu43KpBHLLSDM2s7aopBGEKshQrJSPDVGrjLSWmnkgviYJvUZkL",
  "key18": "2YUFykRzSJm37TUWJQGbEgiE1LN4vKEuFPrEbWkwjM2fEwiMjbK3s4k5STqdeWBVQe33JSQeF4APLv6jx2sdW4vF",
  "key19": "5p6DhF2HuzXHRVgX8a74ix7NXAek2wkZGe7Uv1uTSo4LZopJLNgw3f87HnJyLweov1UKyg75earHrE87Wr84SKGB",
  "key20": "2HCccaeEfxrxLfmvPWCQSQtCarwQ8r7ukzn7ipz8MkwTmFqAtqHpsEZ7L6yD5tYM8UuMcy5c2mBL1pSRdxw8cjnH",
  "key21": "3B8qyhooqJqBHMnntD3QV8zAaMjxXVWs18kH69qujxxGn3JQU4jpzWqsdV1nNSgN4fsuLLntAZextA2RJFUNACpz",
  "key22": "4fThq3C5VyQ2qoFubPzdScERCATocaVLWUuAvfZXLhuJyH49obkbYQf896kKov8XSEgJivmQkwg284WfgEgbozYm",
  "key23": "5FSwmHzMR194ESVZQZVSLcvHh6rYY9qytsXPZgZpjJ9x3EVgGZn76fkkp9Me7NtymNap7KdQos3YSDBsr5RAnTKL",
  "key24": "4amgeBsK4Ksbo6eoae23GWj5N6k2uoyBofmMtAdVqjwU36QLh8vsWKZ4L2NJsjRLwEzYYsjkGs4N3VJZ4xC8qXF",
  "key25": "59SxtDVEuxGrqd2RaA4PonqyeyRdzFWR8CgK3wjzEmHWqSr7wWEfox5sGw85LbxGH3KHR9ZhXqsP7nGGkEg3eYqq",
  "key26": "2AyAjHWXSRKvmTyotpdmfrVDk5VY1XF6fi4MBX5GVrQDtmTso2qqCtBFHJanSRcAyhwpuhXuzEy8ABMxHc4iWpLp",
  "key27": "5Xzehbuwfk43kZ8q8DP3AP5sznZDmsT6JUGHAGiyP76VYsdGhJZZJsLr4rrLAyeqxsTAnUFAiUBwxLDCS6MRWDNx",
  "key28": "5zmXuaU3vqWPY56iFXeJUzJ4tvetPp5G22TsdhrWR9J1uRTfVisSRG6cxVnPaK1yZ5JvtSDaSGkKLynB5npEh1Ak",
  "key29": "3jJqoj2gpi7qn6U4okh3qJvhVnDrA8QuweCF47krJzEms93rKAWjakuNaniwyFLFyhWn3n6PJ3UGiaMzi6V1UHsz",
  "key30": "brp1NwdgVnP6AtJVC6XrvHLKv2Tbi6pRK5uRFYgAeyg7KD59jCoUYFmWB8EyDbwtrUJFwgDVuHENdvBQyTs22pC",
  "key31": "3RHnG8CYuDM94sZ8mXWfgd6MztTioijUsgivdpLQH2JxXqjyWMvHcvnuvaQzLfs7fmBz6CCKrTiA6iFQzEtLJtLF",
  "key32": "3Zq59Veft9Kio3XEQLAPA9XZA5jYsEPi8mcbG88u6NJFqYH6dhq2LsixHymUmFkbRv4BvJ9p8QjVepSBatcj7Ptq",
  "key33": "C9DWvD9Tg1NmRhZyAbxm2ou7DqzNks1ngWQQhV5xyeRsN5CgzLWMc8YRT2F1KwzL76kr4FJbhTQ7vpfMJSSTkxd",
  "key34": "2pCUkLMFwL1XwdNuiLBy67P7L2PsrGAKU217SbpDPHyxUWasZN5yh5uLVKSXyDbwmVrqTPuyA7PZUMZGTB5w2ci4",
  "key35": "YLGhnM44UCt32eorrtfKUYynBnzbF8dmVzByQ5PmEYr4dDT63ENBGJa3ZZcPDYm71rpL5d9PQvZJebBrct5kuh9",
  "key36": "251QQyueUU2c2z1FWwW3pnE2Mf8a3Cia5QMMYfVazQLHvs2gv8NTbtkBLo9wN9uocBCWpmqLaHtrhASebj9En3S8",
  "key37": "2r1JRPMTuqu4JgfB7gA5LDJoMFxJiZRY622EzhLVW9sG1KMUmnWgQZnDknxpPNFDuSezmfY6ieMgPEqJNPirzzLP",
  "key38": "4dShJSRPiCLPN8oiLummE9gY9rUqnWachuax9q4F2NxWSUQUAemz7o4PTnhubsYVM5wukqxNfezwjwQD1Xj7TcMP",
  "key39": "3KtsmNN1PuL1Fe37vGnkf5jkVyU5GWJGPgauphNLP6ongpinHTd2YyHWexZpEEAzrqvZRHEcEPpz786oafXRJPtg",
  "key40": "5RSSYP3MbpctEv1Hm3AjighYLZYEFj4xgcvxxijs8yPJjsGUTGBFFtUUgh9uWpJVZQmhaWENHEFGYWW928bdmRuB",
  "key41": "3mXgce2YiiXtwP4R8RS9pKbJMHYuASJU6AkBSivX5rVhgauEnH9Lm3HYHECJx7D9DJxmZX3B4BBQHKRT7opT8MPJ",
  "key42": "5azLDmV6Rvw6DMi5qco14XzH8e71V7PcHgNi2VRyYzgbHXPkBRSgMESXD7c44hRwYuMKT17h8bePeZpFJ343Fo6A",
  "key43": "442xJmcUD9Tp1UYWWg8jtJRY8y4tZPvTkJkyFRmBCHK5ZnDNWu91QAUCLM2jE2wqJS1dszH1VRmorvowY8BSpPf8",
  "key44": "2nFTjF6qEnJFbmX56vMtgSQJKEn5yX55dVMLhfiLZuLWkXSgUx1nut1s7sv1SoosjuB85jfQK2oXzsmYatUkm8wZ",
  "key45": "kzKX4CqpkufdfRr7dhBcYg1qLupWDsWLnx8DiiQeDctonnhaHMYdZNNAouweChEV1HTorAuvRYKuayVS5q3dsh3",
  "key46": "5krYGQSwsVSFfiqx7hdqoFJqAzoHLe8Gngh5Koi1CFFSEH1YELL9mfDwCtLmfvXZhujNyZ479tDfEZL67pnbX3T2",
  "key47": "2nR1M7AKw9FyytCXzbWzmTfA8GAtKEoL9DthBHAejevJwuCZ4GK6afWrwztaQHqLMAj2Jod2Xg2tagX9MYopbbwE",
  "key48": "5dRnV1MPHz5ToGpQnuU72aT9gqxqVVCpLZqnPKbp4j9SeezAsdB3ZLwUWVxhTrcBQiYQjDLuKsaTxCviZvCnkRYd"
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
