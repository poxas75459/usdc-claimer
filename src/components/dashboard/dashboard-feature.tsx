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
    "3wtFJoNBMEW9V8a1jGqgUjMfzDXUkSw3gsseXSE3RKiR3QmaPUFoSxzZ7wgb6sh4eEf82G9QijqkLBZkpPXkybgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQAEAAqyTcS79n2R5qKgqpYdhxkYmx5mDeoRE4MWn454JK6p9Rvkxzxa9FbZNLPYcx7fyav3ceiHnpqEJxYtjhi",
  "key1": "5CqLt38tRNMiYXTqKWMgZC5y9m3aLBWxZf7DByFz5yVvvugVJ4fMo1xfHwz6JdngizhFcVaca6hTvpMwZvue9gQH",
  "key2": "2uMCbbYztFNnLC2bYRjSNG7j5N74wabqRU6yputUAaa3MCZBsFoRb227bC2tPutfSr6Cearpt5gojcJggGZBYtFS",
  "key3": "2Pv6vJCgEtFHneyRMsDGjAgYGYUSUDJFAhDE1MiZVgaHqebkfKio2Wjh8fWb9zmumBUvyb71wEUPr8nA4cQHRmMW",
  "key4": "2ziE28HfzaoLEoUjT4NepHy78sqR4cSZoLuwc9eTW5rwWHQHs7vjsn7znwmP4CCfrzkhRnjE2SBEUDYsi3RwbS3u",
  "key5": "2oH3G5RD8XfcMW8KENcbHJCMJFACfBTqhH5aq7G44StP8EqqoxGReuzCEjpLwuaF7GCdah5AW9AcL4gfjzK2iEbX",
  "key6": "5dPWnsEKP4RxwTWrLYg2tRuVp3z9BEea9NV9Meg4yTxntNha8XQHoi5yVoNSLAuFo94nAFbbwrYMuGKftCfMscrt",
  "key7": "3aGV2LyUjnGGTzb4kV2y4aPBnrjgKJ4qiJZZqALDbT3vGZnU2oN8RP6HYyWuiBXrBqcnTnftJLy7cHTQzzJ3NfvX",
  "key8": "4i97JRfoa12M8Au6qxcDvuWJXXPvi4fdUnzcxC3cdwzSenaSAJMbA38xizJceaxfes2PP2R1gvepEoNJxukrC2BN",
  "key9": "2TGjJLMMaAjpY3nrkgAoE9FSM8fy1kgs81BwWXsLRR39rJM5PHsvijw37GcsqictLoCZYMTZZpPHfHj4BzzNdSwy",
  "key10": "39h8nu5GZGQGT2vBMkVMWfwDD3cBPRqMzGL6Dongk5o9qErAhpEqCfggj2CueQ7dk5rbNgMmCXmf69kt9yHaTuo1",
  "key11": "3EX5KryHPGy38qHkAK5w6f7HkL6GZFPNTFfhebeKmUFJBRm1TUnRaMjriEPnL2frUF3dds5MmPYU6keBvePqM92L",
  "key12": "22omSnLAB2JrNhbzADu7YZNQcYdjsavVHLxp4zPAnPMBACmfakyAd8P5s4wrjrEEckUFESvNYvQghveArjKqvMQb",
  "key13": "3tLDLGe1tC9kBQnkkLKfitBb4F7Kb2dcG2EC4vYQTPYdXPKiNoMYu8HP4uzkBpzLnyw4UJtHJSWeKGkr5jU8WkEx",
  "key14": "yD6kyotbrLPrUBAbFyiQizHwABKF54ASdDVp1SYZRhZD5f88tNr2F7Zrjvajj4beHQLTnxQGTniiHSqbHdZN5pj",
  "key15": "4GRd46eLzSpYwKGR5aizf3p7xVrNfY1zH5vygYfCcaacSs9AjjoNQX8DdG1qE9utua1VhRHb7W5fJ9B9gwauZx9h",
  "key16": "2eCdrDcpN2F6RwNTxkWB7AxXUH7GRvbqrFbKFZu6PVMU6Sb9zVTEKVZfTgLSnYntjjhHhbfiqRx2x1jLwFG8Tzrc",
  "key17": "2p8NFBcWccuZ3W8Sd3Bfyj3GhAS3USxmCaTW5yNYTSVKHdDg6HRmSveJhbrBBDMjETmsHNDu8KKBG33ARPK9bhfw",
  "key18": "5ECtReFtE8Wq7ZfD3RXypYGtyQz9GgzVupefKDMWCStFgRHs3rqDCYsweSZ5pbVF8wzAznGq6HNXEPv2pAgBYSu4",
  "key19": "4z1g9PNsXpRs5CWq8MdCEHxbxjDja2rEZm7dWosezQG1USKX4pjKj9i63FfhQzLSaqXrNAzgASdssYRFCBt4TZTq",
  "key20": "UePJwXF1oDsfh2m9Bxmjf1522XpoY7VbFtBLWierwLuSrhDLhrDApmUZegh3yUgUQZYoUVnMfTnWyk93NdHEWzi",
  "key21": "5T74sH6Ag9Cxc5H1kUdugJfprJYYuJAo3puvNTQQPeinYrDC2PHp5Zpo8fJQidNnzKPitr9YR5wCh23S61ywmDaD",
  "key22": "V4xGeWHbRj3w65vcmhaQFZ8kGwRbK2KG2XL2oPtoaDyG3WMCXNEELZ39rgLJ1QztdP2q2tJrp14RpCq8VC4NQcW",
  "key23": "5yyToxUQdpazZreLN8qPtYn5xzsrz7oSdH5V7R4vaEbj2KFDKLx2yUS8MNCUNNP9kh8RiCumPkciyafPddhdmhtx",
  "key24": "5Q4mejukoEkaZLJjrmx6Vrj8tM3qDFU3Lpn2TRQEKNursNBGCtaEoTxX673Wp8LhkiXQCs1q3tmMcNWrwSwVRAK6",
  "key25": "292Mw4VCKGeH5ALoph4jSyVvYya3k8MJfScL62B24iVzHMyf5UvabLi7SSMhk97R5bTZ9h2ZGBWYHW5hCSMNaiDF",
  "key26": "35Q5rN7yon67jjN6hrALaHFXBBxwK2Fz5ph8hgztfivqwkx72FFd5xuq2GDPvraMCj3E797o2M9z5w9zX3xELWFc",
  "key27": "E6t6oRa7YHpg3pT7edyDroN6DRBg3ZpgUKDbf2SkjMppmGvy8RQG4bjGEk3mkJoZrXGRqqB6bj3HxxPXKrqhyPz",
  "key28": "4PZGiJRHhy1PUns7x7kPKqqyTTVCovpgjWi6VSeuBcNpjC8Ro2ePMxtR8AmWB4BHbDFpum7XxbRnGpnka5g1Zsyn",
  "key29": "sbi3GqcqgxHvNmVxEn5rDyhBifBD1hYECoxvc3YYfjCMoksrR5bNxzdxZaVnyByw3BTvkdRE7denwKjbrd24Ne7",
  "key30": "3hN8iNJLxykzh3wbGFbUEvkFeJTttQkk6TakSXzqCg6qwVbXCGknUFsXKib64oVVr1mGy6JjGXeJRBCWijaLZDgp",
  "key31": "37hgXrHQAdugeqGLNocyetwTapVmEpqeJrNByWMSi3CWH5zyGESdDJaerVcpW1kVZ5c9hpx1A7J62WmzCVN89JEL",
  "key32": "4xzxzBWYPKmFnPTKbQmFCCnFqL9K9Q4q43qg5DVbBzYWEecQ5DW6NnMuo5cDtzN7d3L6tuoD9b1qSKoXYgqhFZts",
  "key33": "33dfRP79mUdduTz1HvcR8JeuJE6hJ5sR6bo6gVbc4jKgoQq1c8KShq8gwAdSiRRktXj5Etmb7BQXDekTJcWQdRLg",
  "key34": "SP5HFyFUrXaTEdnctu2HZRrBeiLaMZVZeu1PKbFjZR4iHSehNAngw5E1JEPM4FNuxN9cV2R45x43h98zCpeB4w6",
  "key35": "5VKTHmsxxLd8qjQybQPr4BrQFAaTYAEUdEk6fBhAoYMhNGCJXKMFqMMcohgZxXp3phTRh7jE45C8wemeA1u5GNBG",
  "key36": "2R4er46ZQTD6V3sse8hyKhLNjqbrj42HpufFWUCFz5vRd2CKRQsbnzZQTccSTTNQFKUD8ccbfrFoLA9frVpqVx8W",
  "key37": "4Kvx6uFan3FkT8YUEckJE61WDYjskamXLghKPbDgFD66Lmj4oaJnKtYzMeKnoLKDjq4rr94HLw7gENn13dzyziAT",
  "key38": "3tXn8orNp2hmHg8bPWmaPaq3Rz6AKnDodSFeythJfyxguwarTinQwgPKX5pRALUaZQV4ToqdGMv7rvAiYY3mHm5G",
  "key39": "2Bfefwwfu6JJmmrxNPJAfLEJzv88jrz9U3SN4zBUvyKvipeaAwHk6xQTPmsJZ9bpsBiYrwU8HHSCjiSYi4j3y4oC",
  "key40": "2fbChbTkPbYtao1cmGWRdzMQ2HWCL35KAyP8WwY29VBytVnGZ1DNzfaHoN7be6pTtyuJbVC4oronKryWqw8yJi3X",
  "key41": "VpLbmTWQYzL19fm56ZQXPpYvUnKN9Hgg2DSHE5YNqgaCrWTv1SenceuAHiPtxqZFoCCe2mvVXCLCJ8ecSakkFtN",
  "key42": "3W9WF41Tgn32upHLjfb1gjKdMW5Pf5s9BUwbxPsBZGhX7DyfC4DSVGDQyJ57pKkyCrFi6cuWVdmSVsFUcZLvmjqb",
  "key43": "4ky4L2QLeEpYMT7H3Z1Ekm33xohyawRcyQjqovyG3J8yLV1U7iHHtvYWezXnecnEMJpwCLMBCYfZkMkfCNt8SxqK",
  "key44": "5MTySS6mSN85KxRhN2LBfSsQuGnfkt1oU311R1Vvao4qW3RhmQugubzJHB4McZQEJVaMwZdsZ1a6qaKEHAExasTu",
  "key45": "bxNGEABSgJgkRJqCs5ziiHX1GmipbY741d5WxdHmmQPo9DMA6Kc7SbDmUFe3q9reJKbSbHQPVFuPerRmaQ12GZe",
  "key46": "5yVAtgZXabbu92kak5nhBzrYn2EHpi2RVBfVjoSydU5yumxV15kxErN8RySD1B5rpT5JwEm3m2QgoyLYSn1GXxTE"
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
