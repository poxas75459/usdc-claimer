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
    "4hniycvyWAHLtf4z1FVmpYoQaW5HnBt7sLrurxGFMnRukg6b6QrMncLh43Fd6wvMZNAq1b3SgM6fNSn1gRVzcwvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pw9ptv39yzj5dmve2JyXcdZtaM13KtsBiDF7jiWgpB5QKrpfUiZh5ZGx4qZZSN1Cr9oUqA2BarKTNxmLePQHWk9",
  "key1": "F8NCKi7PJ5Hw1XcYGNgcZvYxYGgJp3MGRzARPgLzqgjGMyriBZvCaLXfCCaG9xzE6cXm7BXxHetrmpzopYFj8fC",
  "key2": "29UstHZXKvBLHasb4zYMQP3fQvTybunBvTA5yAPBPcaw96YnVq4LKkVNaXwDUvP6H9iuD2Eh6WrDdHe7xoY2ZCxj",
  "key3": "2Ecb7d13aG27SHCRjK8e14DkTjzjEbX5tD9FNjwQhEhy9FfWqPpq9aoRu5ageUAiYBU46y6vvFq12wQjWHmWJ9Gy",
  "key4": "5vYQt7ba1HC8hZzZKpDR8CacqtrqZuMjbQnxpaGG39JED8guvCMFiCMmMPyqM725pwNQL8gkCro1cfKMJJfU5AzL",
  "key5": "3JJ1hpQrBgEaGEPY75N8aeKPQBaufrWQiHCBhtvc8Yxd2Ke4yeq1H9VvxiDtX53pJE1DknzssmNa8ivcWxyK3Kzm",
  "key6": "5cz9Ps8KhgHpoV5Bt8fWPcHj1v4q9Zi4pwyaWSPLjMMzApEXA2u1S6GvzEmLFTQvwdjG1fppsu2bBSLWAQK4eGmb",
  "key7": "2ZSpFKqM6SDTDgoS5cdY6Zph62PVvqvD4tBcgjTq4LWH2jb8KxShzUvzQBsxzJyz9WTNr6TS6kFC2mVVBhB7HqXU",
  "key8": "5QoWLf1aDYj4BL9JacfjmPKsWxUFcNvw9K8ftVZEKiZgYwp8u2D89UCXhHZ5F9zaYF647i6rnkLXKCjHM7NpVEe1",
  "key9": "c1TNsDbUydvg9aa3stXMuxN24jviRo1L3XKx1Kj6C32HygwD51Z4LhciJHR2wsr3RvJfw8VbVV3uAy6miYD1Bmz",
  "key10": "4ek4La5UHkVBantDMsjs48XSeZJNLhaR1fuBWhi2Jya81PiMTBjMMa7cX62PBXh6GahtsTdYAQ9rYPDbX2hYAZ5C",
  "key11": "5TizBr1cV6cjsdCKn2CFByEVYoGyL5ZbTknezHS3b5knVGL9yAxsYoY9oWYGqiq5JQ5S9seMuTPKFJNxi2RmwYQC",
  "key12": "5CJxdxmffui3U5dntzf8xtqq7pyJUYcSN278eJ2RJEMiGZrJLX7Q5sgFvXaRkPuBGuBPDjdvnQc2PFSSm3kHVGCw",
  "key13": "5G68APFrMN8NP8ARXrX6XU6MwNS7fLN5QxxktQ75sipyLNKoSc5JXr7QKBZ5mgTiB4s2tSvLaBsiNnZofUgVt5nR",
  "key14": "HT1q4BEWdxRm5yQEm2PCYcCV9tV1RaTjiKq4Fq4CeBxbgyaN1UWyvWQkrYweT374pQohhxYNVaZVrU5hcafYPwC",
  "key15": "Qr5cq4GT3od62v1PfvMGrtRXLP5595dGsaJzBu8Zm9zzNU3kkS9RP4biuMraMjjs4jaAusbyyB9wnXYoaFmM7yV",
  "key16": "2y1Kxh38ZTFDasvpf6s9RUptDqxqPyD4CpHZf9qrzP1DCE2UJQuTpH7zNXdsMZhTHF3DfFapVEhzBXQ93VkDSm5E",
  "key17": "66v4aNF3FAowBkeSgiqnzqqAocK9GWUuekKopX75782hzUFdBFnA5VgjYFJ73uxKcBs3DVkaSzXXhm4sJDhyyRLJ",
  "key18": "3Jak5JyVWksPrag2Dfb2DGiYZYERh36yctc6YtAvbxwiZDZLwcETsFSjRMfnpuyL1xUiSZmttozZzToKiZiWQ5WQ",
  "key19": "3MCZHRQQXVT9dowrAPkxVVyt4KdhJqv6B3tTeCTaUgdN3Ur2P2CaHVCAkFeCCrwXUf5FZiTvmeZGwrpW1DW8MjTd",
  "key20": "45wgSEQocZdoeHVcumqwLxmmpG6teAoUVWqQWgyiLdYHffeznNkCeNU81YPLzfFvejMkfPwJttWzQetVHL6jzZLG",
  "key21": "wnvBvt5QB4xGe8kVvHuQCLJvVq2iWX2n8n1DiVLtLWsiTtkyLdLQvxhsWz7XfhsNSwGSu8H4bExX211gxZWCQiA",
  "key22": "4YryqasLg5YnZm3BpedrDBx7bparYYtEMDiNK3yzYSePR3DApqbUdNZaSxuD5B7iYteMKp6CGbmKn6jtRFrxhJPD",
  "key23": "36CDcY3zW5F5F1WZbbmwQE1dX6QkBvpZDzcGd2bN28MKtEXW8wULXtoSfArnTaCmHjTD7BBcpAxiHqoBUrcEXDnG",
  "key24": "5a11TtfUK5JJ1488pdN5DmsXwTRD9yiJLq7UsNGnVMtYXohhQe76zhWUQpVMZEgL2SCkmUx15x6Bf1icVTeTwHDt",
  "key25": "3ax6msXQVroMXYaDQJjsFqYQFtdTYdDY14dro65AZFrgAiuuFThShPdCG8XaRJLKMib3N5qF2TgCjNf44wUxREdt",
  "key26": "2NWjMwTHtDa3d1DF8k3vuwQ6hK9FQ3qnEdZaXjHZLqCcGT85mEaKwPzm2sB8cHqYqFsib3B58q53zcou1WM4TWW2",
  "key27": "2SupTKpSLurcCbqku8akBkpuPbFfjxGBkGnru87UxYf9pic1T9E9HoTa43MKvDBa8MeSqs9ULuEFQ5v4kDeFN8E4",
  "key28": "2voVicBwfJh5GVhf862pNbqQ5fcX1VU6nSjpMgTyFbHB2xGqRqYd77AGST8pwdQhQTPByVjYUz3KgryFRkFvLwHH",
  "key29": "4GFNWuUAxZGAfLKwoxuLmH9wv4MzzxbxSu1by96Bm296d47zAr4mCtX1khpnbXSdxpUcAMkUkN7xvmL3Y27ZzPWz",
  "key30": "2T4Zhx416mxZ8y6Dqgcnv2sHnSyp7DNnNG899LWyGXiyMPiQVe4suj6w8wjydkHu3WocVtjX4cPoFkJE71BoXt5f",
  "key31": "aRmfM5JXmxa7AiTGGU4hDHuwaCAsjT1D8Ggj14TzwQWjyGPnhTxBamfvKL4Pzd7x4UuzYTinntrEnPXmKNxuQFc",
  "key32": "4uGQVMW6khnDrqjwRkkmKpkZEj6dvSZEBo2PvNFfKrt3RDsm3Cx4cvT64FSWrBh8m3MqaAwyxReWKGqAinvwLrxX",
  "key33": "5RE27qHfNBVM5bWE6FLcGN8wMRBwViUqr8DtUYnhBPYTU9w2dbw2xs5DPiUMnQUdiDQd2fG75JrcLso6U45B59oc",
  "key34": "4MaFtUeQZ9anz4ayR9Pt2kcq5bcTcMW96TWu78mtx51RFYZCZ7zGL9QLn8Sykqqszvw3hmNnqP6cqBd2AMNyBGFN",
  "key35": "46qH2V5QVYqiZN3ti4yASUaKttK3K3tHEK716ktHWjRkjM6MXpaX9bjUgQLB7i2mRCPCBgzMB7xHDzuh7nbg6XS3",
  "key36": "jmgq4pT6RZYL3czKLZoxWSv7f1u4HWxa9oTCmGQ1Xgp4MmD7hzFSVg49ztNfiBNqp5pMB96Bx4WaWnK7zvbjghM",
  "key37": "4XeL2SWAE6uW4PqBV7YU7NNBwtHTbzDikt58MVwdHro4TH7zQeX1e22VxEtsv7pkMFEa98HuWJ54iyaKzm4AKy1a",
  "key38": "1Uke8bDjjEH6rBKEgn1R19fdjcUWhDQqe7KqiGnodzFmAKHxHhJYEF7vRRAqmwwSBpVwxeERYEAFHb6egHCHTyu",
  "key39": "3BDpnXq1XtEtouCJFpgQ5mPFF6LUXeAxUKZbAPQko4WafgKUumykCMHCSVon5QpW58vCbqtFEgErpyQaoFLYyvEi",
  "key40": "5uBbSaWNNd8Pm9DwXbCy1e6QCioCKuGZU5rdtEFKHnXACn8YWefco3YCurBGVxnV2h94Qini4agUcyUvaYbJ2xr1",
  "key41": "224Q4j2Uym2t17kVpSWwXe4WCjWMLw2B3rPJ5gzibq44NWc2LTZqCiANcqMUjiF66LtgQPBZhSxtbJVPssfZucb4",
  "key42": "3Uw8Z3ZSvnxFWyzYM68LNLFEXrJKmcsi2FEFtJiDjSZ5cJgZxtZc13PdR4iHnqwPaLG3q7HeZoYs3PzWkMYeXno9",
  "key43": "2NuEVXuEZ9SvafAHw9AmDKiFsCw5tofaYRDQpF2SRRB7BxAVsGe2PLSwKcBvP4QZ3aRBFVGaWNTSPnP7ar7kVjp9",
  "key44": "2nzftp527tYSCAL4zVt9X6WyABfbAmDnyCigAm5qYsrRQr8ZV84KnxHx4GAF38uJxMAvYx1gtY6qi2j8juiHUpRk",
  "key45": "5wyLpTPnA9ydas6MVAyebgcLpSL1qx7SCPBW5xB1f5gy1nQ8jKThfU68SBcwvtRf9RgGazVk2Mo1YMHZshrJgc78",
  "key46": "YNxWV6ee7MB7j9LfjVd2Uth1QF3bq27Apn6fd9kTehyFtapsZXMg3gbdBBZQ2WKUdW2sepYc2EmxUkiEJ6nak3p"
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
