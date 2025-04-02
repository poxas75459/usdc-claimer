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
    "LmQuYegewZWXBoMWQBmGVMf6nkbSPF1FKvPkfr817EJwQZLfCjBSTLav7cUCpivZjLyLb7jSEsP2rRhtws5XNjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uux1C7HRjoJcZmy742uU7xzPxbBjZNBVgE3Gbb1KAH3My6uCzfCzfxHjqa9ySEBLcvoTj36G4ChzLBDDHyapFN",
  "key1": "3SzZnCwX5BDxaiXonej7f2hpBJST9XcfLGtUmmsacCGy8oZSmBxgx2kHnggCTtkcoUSfdYoLYmSjZq3DamxeKTbN",
  "key2": "4mT1M6UFscTXN8kPyL1a2jq4SPhkwr4HgBmbxUoQwpF8inGeJPRQYiVcCsCrXGPCrcAZLmkCWFpqUVDKPhEsF71v",
  "key3": "1ZmScmWK6okCbLUCg9ATtym5BPceJMXZV8vMMJwANfjGydfoAzBifsxtgDAEayk2tusYBdHsubv6pYEeubST7XC",
  "key4": "2UT9sE5MHQNSm8awtRKmPu2pJ8hxeuGKBUSz4Xtt8o75LfhcG6Fn4jnH4QwGkchf242hTd9N1APLPB6wiP23VeTK",
  "key5": "2c5ZoFd29FyL6DKF3TzpYShzxpYpuJxQhiykCaTXme763A2Ygw74RDt7Ldq4E2dcZeSAKNV6PrLtNmRL9sCSAdft",
  "key6": "4kYdNCAUckfLSvBC6Dp4RsAHY7MhPgVEL18Q5y2knoZMowSDm9Af3ZzVPonamKyLkiaSG4Enr8ggbTZA8PCMc2dx",
  "key7": "4njSRP1rJUwGwXhhThGF9CLy1QFgGFQ6rjh6C8ymqdxJ6sReZ3jZbT4P9G6voUBKxe4tVPGvgA2y9k31RASWBYV1",
  "key8": "44vEzyF6io2mb8tfoZFaFBqA3FUYyhpY3a9xQEgZkLyRViyHvYdwZvwZSsknztWfUqJorGckbpANmkXYYedXf3nx",
  "key9": "5qL5eYzupYpy5SiKT8qrLwQjKA8i5dSzqKjG52NvkCatQqT5B8whiRkRdreFM9q9ZAaZVmXjHuBWWFk6Z6KLkWGS",
  "key10": "hxRFqz8RgNvYo2Hm25749vdoNskTuSvBHi6q3E5EVrRcNJVTBpgs2uoNDU3uSu5TZfaEDLjM1DG97XymYPoBmHs",
  "key11": "gPqouViL66o7tyaNGPj1byWPeRTXcTK6do4FeQdUkuPuaes9Fkwb1LAJX5PpoqdFvyUXrSyGggqaweMjA7xegV3",
  "key12": "j5ShyXqFNrP9Rq4mtSkncGXi7i91XUYB3vf7fhBRXUgUpCznwiJm5SghKAJKYUcqjNtbF561RWQ2dEQtmxd9CiH",
  "key13": "4SQHQECAgs77fP1Lzn8QuVdhe1cU6h9YzVL5Zp2YqkGTytT1vUfLGmaPSPpF3RqUEHiKE3fhT3TMNWPtfhfhisHG",
  "key14": "wLMawVnUFNfFERkxJaa9fhMzLzkELhmxxyubTj8cgK7qbMyW1iFze355sjN8ojMMzxfcAfSzntL1bJFBLUsUzfj",
  "key15": "3jNdwFo45fbz1MKUjeMzugfq8zASUuGj97ajs9toEdvU8PU9vNzS9yrpTvyJZyufpJQAuFMmD8bK1xmur4V2Yz58",
  "key16": "4zo7Wfd77MRAL2hmkG6LUgWueSqMYE2aTLHKaAovSR1CnkqWHBYcZqjaEHqn15Nhp9eCawSeZjUcLL5z4goWCZn8",
  "key17": "63TPE6No2TSkWFuXpqEKtfVpMScBFgNVHW2W1qv8KmfVpgA5Wgxmqne1yUM2pEpBZgB5XitvohBUDzx3a8VCZ6fx",
  "key18": "BsuTM9RcmfoKgQKsmtNAmFCFm8twjqkLvMrr79nas738JfgC4sRLxzGG1g9kdZpDEnvEqJpvAgUn55RadLwjaT5",
  "key19": "5cSb3WuHxvWL3RDf1ZLHJqWCoE5WnMDDzVLdtiykGjfrWVCZqE8CAkuyav8e4j8BjJhwboDY1TFjhsGVCSWpqkxj",
  "key20": "21SUUN4HiJvhyugAVT3MwNXgZJLQCfjX92htQozqXW8Qhvzoy9gSK4KynoFjaYxKirx1n6ybberBWqV25BT4Adjj",
  "key21": "3vDqb4Aw9Wy6oHbbGGWQG2xRnwz3YLGWYzSVsBEdexSNYQioT7BPaD2TFzEtqvEW51SnPt2cTHG2GEBZUtrP1GLX",
  "key22": "4fyxChes91pa76bzy1FytSuV9tFG1K5SrJ3yMr4inMN5QiEbbGQ3AXdK2JBt1j1cQxTvCLDuqGDxs6A8Gc9Z9uiy",
  "key23": "4FeKHjuUPr8zPd3UMp8TF2XnD55tmTP4sqd4zbNK8xgwS8hbSg7rqs29KMQEkmVmWvcYdx47TmJf1UcpMBnAu3nt",
  "key24": "mEr3SUgkUXMLFcSzdVpVvL5vZbatFtJ6fzRSptKkC9HWUEegfim2kiWqcP73ynsXNzjXa9KzJ4Rvkka7Hv89grV",
  "key25": "5EqfXSJ1eNwQiPK1J2veKiV836NfJDbP3CXmj2ghwHX9To6n7pDYDgMuicxuQ51WLG2CUtNbX5gQfCyHGpxmaRQa",
  "key26": "4Xiwyy1yH3iBNopgppwBTghuCpqag2YigSXi5KuRZW4cBjLMm4BF2HGu75x1tUnBXM3siKU3de89GqQzwuR3gLZ6",
  "key27": "4pUhYBT5hcewmi5m6wgNBiZFBMgGZCNXEF5WGTq6f91xMYXZ7VoQxRNMwsFU6h5rR3DGxdbqjDRNwDsgXszoMaKm",
  "key28": "M2BLtwsnm6BDEUa5XfYevjeVp8o2rmihsd5Lt8xaYBqNAEcudYDHLRoCAyCrpgoACPcqcivACKwNMbJCbvz6Duk",
  "key29": "3RCVVCXnSjuzQD5NiAVf39mqpB3Cu5To8KWxVoZMVeEbeiFMA3D665iqTxXRpWSggJem9RuPfdUuU2LiYdEVPvnt",
  "key30": "4MQsRX4TNvyAke6t2o9mqpAHsFppfRH8U2m2Q4AG635baXGaUn58zBFZVvDjdK6uqy9rdoJGfA54k5cY3SQqtsoe",
  "key31": "b7PX5H98TNxnQ2mRTCdLwA9eB7hZA86Lug8K6FLMqHU3nik1VCCfipKmioEA9c8Nt8WkrqiKdgZAPRftC9tTmCv",
  "key32": "2x6yM5g6rKHfKawcYwKLMoJWVugXNMaF61ao3GrkQMeQbWYM7Ki29DiBSAXmM6UYC5F9bNx8h7GAs287WdmK7gPm",
  "key33": "4QBJgoEPKSRPQYTfgTYZqQQGGQqWMjXGVJJC2tLwAuqabqADZEDvwGGqokjE41j4YTtBSmkYKtdHjFiaYJkKMuDL",
  "key34": "4NFdknvSa4hznpgYnXPgYy3wthCgVkCw1FRXbWChCrHjqF8CqFZTxRLKU7F5ZvAw1aGp2T9sKbuPUKvLFSGd8Kb4",
  "key35": "3QuihkLx6e4EwY3ZDxNaW7iZMPNPFThu6vpZNjs1n5PSexNGvAmCvWpFzR7zX7NK6BC79hGCHbyyFoUHKxyvox6f",
  "key36": "4YzPmp6qk9MenqKpkbPJW3LnvDRKUxkeg7i7iaMNg9H2gRH1Aubd4QddZo11mQMYQZHX75vjpG5pLiRDagpoqAr9",
  "key37": "XGBRnkSBupGKR5n3W4koWaeR6ywaaKBjRBwk2hjPLQoJPoXF7sfm7CCjQW2Dpgk8HKy2hXREsmC1QzXLM3bUVtC",
  "key38": "4Q8ACGKNHTNSQQ8SDfppN8FyRncps9ufRPJaehwWFxaTRFayRCmLbNDYSvtTAs64i115j7NmGeDpCHDCKF8TMxa7",
  "key39": "2sqMz3moUHr7tVqcqV95JNt3cs58Gfr81GTBo5dHtLkLovtXheaegyrCAm7dJNpjj2YwMMtFPf7hbz96mxG5Fvt5",
  "key40": "odesWC6YiwcELPN1tnWyg9UnoxY6tgQquRKHNcu8ragAbZUPJJXtEcsqpMC3FNDfGirXNfxUuErtdH9gzPWq3UG",
  "key41": "2gBSiRk5HQEgEo7rWtGmLam6EnujqYt5pXrDw6CvNr2cqAnRv4rtRiiwKYVLeMKmHzqXhXB7A4QHurvcsxedQYak",
  "key42": "3VsfiXcB4BcaefQE8cTcfxbKN1bsibpLuAfohzyviLk1eVRPN376NcrjHJaWuDUMyVSRPS1uusTPnrcyY2kpT9ca",
  "key43": "4VVdvKd2tJGsuRJrXER6WgivYNvzsHU93PWHZdYqkZeDr6XAGvttLcty5VNDNoo2vhi4DqNK9aVdkqkGcos397DZ",
  "key44": "5Un37EAE7GwmhGAqEC3cGVp74CkhH9xhMoWHjrVSxqZksZEBHaV84nrSuif1qEZJQiHWQiuVFTDoZKm6u4oFmDyT",
  "key45": "4LaKviGpYxTAbDZS86eQmzJz8KhL8hEaN7PM6zvuDo81vhAAKgyHjo6t8T6YzsHvPXgjb2vDygjEY7sEwNzgf9QH"
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
