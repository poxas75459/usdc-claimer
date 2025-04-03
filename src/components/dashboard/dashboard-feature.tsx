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
    "4Qe3ZJrAzSfEK4XPwt37KS2haRQZLfvoNcik5vXFZazwVWPzRXM9xfjpGf1RTaJuv58xN4SGHtoKtkqM9mNJuqGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366DB2roF4EKpmv1QrGpZuKbcPPpmPYD2BQ8pZTBSq2teeV6crxryCBz8kzff9yRtJwh4S26DqwvMXRpgKVAag72",
  "key1": "2p75ghtHZDtPeTj2trTtng9ajs2jzUjvVUKaEUKxw5R4Mbsn15JPAAm7HvLsxYts7Un1EByq73sAvupRuS8gQMJK",
  "key2": "5tTsRsfJFHmdY2q3vFyxwJGMEApQ26aNfPbnun1MimueTozKE2jKpic2zuHKSBze4vWsnV8rRYzuVVUaMkxK3S8d",
  "key3": "52uKDDKEwQSoT6TBvRKdzm83SWbkv2o1UMj4JdgxikybvYzMTistw7fSUwccjK8ERma2h3dZjwMuhxjqcvSRR3vZ",
  "key4": "APwA7aSFA4C2xxmpqT99a7eSDsncjxom9YVL5UKBe1cFLJjCsG9fkCtuwhX2PE4xPcvVCH959FWRCaGAZwRdMt5",
  "key5": "jQdL1fPqMz4mTeib1boy6pLxquKkjtyGBczLjt9XGzvvb1o5xpTFUzQshw2wDrftB1v54ZQrohJhcCX2wZFwZBi",
  "key6": "4TgqW4LMhTr6896fw3d2ufWCbjjQTZT2pfhwgC3C2tzzonyH3BDm4YTAi5FMLAsSWfWRk71oDivgMDm1ZgWkHLur",
  "key7": "5DRibMa8JbuCGNXWCpKD4kpjoyTx1P2LURt8PxuiT44zVobViJy8TVKkxeMsjKTgwyPUzQLFbGCD5SRG4eitWTkb",
  "key8": "48MVadEVhnwnBBt8Emfjy4YHd3MA2KovkcKE3xsPmWzzwPga5BUN15x9khBfxAYu9q7WeJmRkYfpZvHcd2HNoTVB",
  "key9": "fR7i65zks9EmQgKWJhwfM7G6fH1vkmnVQ9BmeHyiJFys4Lt3fBtZNnrcPGzfvbMU5HqGa22PXhigMa5RfLTuNXV",
  "key10": "3KDNixHwfFVY2koGeDhaHU6aRCWpmfvSup7wgt3yQgXvDPS8PGLf6XaH7ZvBTBes9ybKgtFT8Ar2X1ChrUaG6SwJ",
  "key11": "5evNX717GNm8773erUW2cgfqVGYSbMdSLWG59QmhUz3Xs9WQEFn1zhmch6K88b2dK4gGr429DHQ1hukWzjriHXpk",
  "key12": "4YMcA4JAq1xTVVaSL7oAmz8TKCTebWNWBS7VVMiNuMCDBcqravpCWH5XvEZsFKJPeJvyR2HmsSb5a2Kh2aDbS4vk",
  "key13": "538KmQu3qNcBX4qFfkV9swXUbefuhB5To5WBAPrLtBjzukxz6CYyWh5RcmNVUPnpUWFRjPCttdPm1TLxyyLVnRTD",
  "key14": "fiWEtCKTGRx4cSFtkyuYCYpkRQPDmrAq1iEMW7XbGfDk82AsjKWF5t1aZuvF6GXeDs49cfuLbwQ8p3v2o1hhB1u",
  "key15": "4Fu1REYKKw5EsvpKD6vYrF7C8VWJGBQDMPCmAGdnZQ2uN4Gcjn9ms8A4aAozHdpDjBvskXBT9hSdzFVuy38XszFY",
  "key16": "mFY664u97LKQJzVFnXqELPB7QPfiBq4cQZP59iD6rcCP7BrpgsgojtqWdkwM7roq5dAQAGdZcjNLDzB2bVPYLkY",
  "key17": "2zi6pWDsWbx9mTCPCbpMPS3LAK4CMpb63d9sKLmB7rfF5A3kdoVdsWJBAxFntnwVo2DsbZkCbpt7HDt9uZQGXQKn",
  "key18": "2k7SYyPZGQfBMXRW2dUPXJf8yNpd1dsemjdYpXd188EcTyieefK4NgJ1rhbWevS9X1PNHqEpk4a5hx7wgyV1f8UM",
  "key19": "3jQXRcz75PGbu5NouQQNxJAxgrvJiVPSo1zUH8NCWzRcz4tTqdnwhJuCqzKMFqUhXxdyNcRQAFUmp1PPYntfGB8B",
  "key20": "kXUFdTYJUMxjzUDfBGMWSHuzGsjL2B486BaZymayjhvVsD68nDum2Tntk8qv9a9TLEaAPTww3g9VxeWBSddfp7p",
  "key21": "5uSunfqXR9F68XZJbqkdRm7AGAuPzSaTGVgzu44rYnDbjKB87BBaZZzLbT7DNqnVvGd9psHVZYSV71vsYxEGNeE9",
  "key22": "3CTBmM8nQCr1PsXUERYyNtvRDGSrqSLTHnyZ4yxHBSVZ9eiRd51U8Z3hChAMz98w4uZGusxV1HcEafcXzgvmGbQy",
  "key23": "2hYT8WRDoUVGVdethAuEeJ2ZL3KC9gLSiRBbxf1tLMc4E9DCoJXi1oS8v3jwXX1cT7FFudujVHNdc86N9BPBGhyP",
  "key24": "4MwPbYTjjA1ViXa43mx1aZ5gQy86EdaUxXe6yxuswMjZZJJCcM9ERAr1HF5xbgpGcnkx5RDigP1iuRQG7wJuiyqw",
  "key25": "2SsV9wTp3RRHpCnRTdPXhpontuZY5FHFyZ9jkrbDRp3po6P9VYvMyERi8xSskwxjmVnXVHNDH4cDWVvFMh3Qu3fF",
  "key26": "4AY8SwZLf1TJyiJ8wwhoavqmNN1LcsXFqRduvq1rG1g6q2Q7HtviXhQvK7wSXoDXeFuGrPwDc9vQgSXrZ1Y4y2oF",
  "key27": "5pGQvQFZqjiLAEbDg2fPtnF43xVFs8X7QmNN5YNhAJCeZ7jF7KTxpuJ7vb3xj5UGedwXB3i1wNDkKCt3oG2dRpJf",
  "key28": "aCmuCSzHvZu3vZmL7sgYZeJVCk93YLRiGFwaX2r74NMZjaqyrbAETn571uEevTdNT7CHzK71JMvBbA15hwxzpRj",
  "key29": "fWYSJMZUzx5PQNJqpEbrz687zYKS2xBU1dSg7dYk2kUA1P7GLvGKXK5MWti1ZHQhGMmV6uFe1h6n3aiyT4n9s7K",
  "key30": "4wvjAo1LM7USSX4FV23CDLbZCT8JVk4jHV5RxRbDRiUSGxQ4fuasXJiug12jNCMEUkVx8KQw4zD4TfbVh3WfyCYv",
  "key31": "4rmWRVVXpFdjhHgbvttHrm1DW6dC8bimyRWRWqwjD9JWRNGHJTWrWL5vi39JQKP3mGQmXRSqboSXcoLA59DQBxuZ",
  "key32": "VXE6MXcMYeJZ9CoHMq6Necj9gUYCujSCmBw4o9kPqjWVkrP3ZZC55NXLGpjWKLqxPGs6bXWq2Nk84pscmPJWK55",
  "key33": "KsDB4x13YHs52Ghxqpnm1sVDPXXogezM8jNKV7u8Xr9U4m5WypkubWEaiuAt7THNqdBtM4KVQsJxpEXq7cz8ahT",
  "key34": "2Dfgj1bz1YsJUhNvQHDWkeH82AM8mfYbQZ3hUDXCq344Q9kPhWfSFviszq6hZPGAfvrJkiHk7FZ7j9TS6mrfADLy",
  "key35": "KQCiebjGrnduxtPWgAiD579TTW68zQiW8PHYEAwT41fwutozmh6m3dJBBZaaDeaj5fgnuHdV6w1QvjuJP7hEFvB",
  "key36": "278znGt75VMxjCjBKnrXp81khTv3gD2wVNWvR46tgX42BKA64ZEsBcVJGWq2rwR6byhnHMxNTVSfLhPccxAmVXAD",
  "key37": "4BgY9c7ZssDCoWfDMPCPoYgB5r5qezG6QihetDYm3KQFDBbvcAEu49xE7YWwJAtKLnR5E7guXRq5PYqkGLHyVigV",
  "key38": "4bRvL7qDztHcFD2V86weVFYoGNkKPwUyxHfhL3a1XruAg82fQbV2rSUPR4u7geqBZM1GVrsrvpWtsrQFz9nNZdM8",
  "key39": "59qhrKuL2ggrcPC7fWqvDgHRTcHgm1jzXN5t2AoKWJhWxD8swdy2P3quJGLu6VWzwRPG8LsdcZ5RkWuc2yGVHoGL",
  "key40": "5Kwvbr95Lsqp1M8ch7vebby7isK4xHwk2bvkyLKDMcUEZZsh4HyDEcKQNJzTN3qbXEqw5KZhUNWgKbsNz1U4T8Ew",
  "key41": "idzyrsiNB8tt9tutGiamNWDStcCe4RQDVhm4FDCSqQX9DUQSo6xKDpvbDjfU8dCc8JWsMQu89oSNTZ6PDXPLASY",
  "key42": "5Bp17QiRK7dU4ZGQ86Yi5TG6qmbdCqBwWMhntLwZ3RwEpQ3LGYa8fmxDrMAi25E4eX5sbPsXuuJ4Fi89pa5yPTr7",
  "key43": "3JAra57CjVbpFkhhdHmpu555jszhcAyqxThRjYHR4mzrwKe2RShcCv5H7QUR6CfZsUhvNSZRqWpdUpRqgdujyx9F",
  "key44": "5QibkrgzEA2uhEovfSVhNAptVqjgvqWh8DM8PA9g6ZizWFybCVvZ9xcSWskdMrf7UywgDGVFWvWQspPmy4vgcNjm",
  "key45": "5LfMc25FaUkKtyMiYio8JXT5ZeXivTBmm5oSp83TWnD4kEXujLPstsAXZBGs4RJ3rFxtH4ZsyWE1hQRwhWRGkoFq"
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
