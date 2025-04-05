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
    "27xxrK9PF6ygFdNZoA6Fhe5yUVmzSwEP3KMvZGYG4arPHVHCvNDUgty3qQyPv2TLXqPV559hziiBg9u2BdMuVY3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uq7FvSSyzDCJCZg1ETV7ooQdx2NKCuGawxgZm3Egs76qCFbZbGNnH6cCjcGPVYRZHhVfdzpp9eEcBRLTYrABV2U",
  "key1": "5mT3Tp9jmL8iCJXJAhK7njcNXNGzEcu54TWY3gPwGkQF82Qg4a4VbEGzPWeZQzEAZg6vkAmZDe7uw5sVEHmJjLD2",
  "key2": "ghhYnDe5ENEKNjJ8UzSGYCtrGF1319veE4jbV9bUZtaKE2WKGw3Co2qY9UHNs2YZfiY9sebKpTLVU544rDPDiMF",
  "key3": "UF6QwMcyyWqrqCnvrCUtkiVNHZQuThksyeu467uKJQMPWqZZsTRLAQVvPUEjvNsFqx1sZmiEeYWhULLJXYHZq4x",
  "key4": "RHs9gi8N2k2bJP9QkCBsFE5VmN9jWDLA9KJMUYCqbRnL394xsXiN4DRWi2ck94TxD5RPMvNNU1EKdxxDGc8FMAL",
  "key5": "SoTVpuKPN1LsEtipi4UypGPtMPmJtxhM2t2poC8AZZWB2VRXG5QtRzTMhgFp1UFvWVvLg5yhHtW2AS16n1LvFeP",
  "key6": "2feh8zdtQCBbdPzkxbL1vtxCvLGxFGZamFJFu6nt9Y7Xda9mE8S5nij4HDU8bcSfRGsJjEzQPqbmRPSDdxc2kRXe",
  "key7": "5wfgRHf5PBah7e9V4rnR6AQFAzpxuQZubEp2dLzfPi9YcMYB38MasbsmgkyNpqGZ8b6oHHfy3NzL9PyFKusXXaah",
  "key8": "2P7NjL6h4sgTqJ4U1kjbbFPVdY3ZEQwFmMbD8oiXLXhAKdZEQ7KMsDE4zz1wP6gWGaBsxjqjARfuEJP6zn9UQ1cX",
  "key9": "3zvT3vBQuzMJZ5WST7zu4byP8zpNVdsFcECfuNJofoC7mkKRG3omRQMNCPfkGrEs9SCsD5u495biHzroujhVeoGg",
  "key10": "42b75LU5gt78LKpcSP12DHSc7A343HbMwoPGRXLDsTUi7UVCMePRBrCNaF69ofkWW9rWeQuRL44mxzwpVFS2g1Zy",
  "key11": "3MZXM5vKt5UfJVsPyvMQLvoduQ7gjRT5Gzkdtbpo1aXYG4UWSp2AfkKkZd6mjjJmnpCdhUuhwDvGP39NSSVwqhnE",
  "key12": "4gWAssf3GQJvHr8rxhM9bQ5gWCCS5EH1bTa1TPAcSJQzmZM3pYPSWXZJZAtiG2tzp8yeDTMEVEEbwvGPURfWqszn",
  "key13": "sq8JDQ6VXcWsssLrxBrkSL4iUSdoJbo55GXPzMXrUZG93VthK93Pnb9BWVhQmj6HPRiz525tUGXmfy921LyfPQY",
  "key14": "3uAWUuasUS39BJTD97pcAiHM35kcnAyRG41CQ5VcXaAN6CQE2TLrHDh5SH2DC8MW4chUAMqW4obfccqLKW1c9VcH",
  "key15": "5bvsNspKnfdYAsGzeWYDwyHzpfL4eLhM45vaBFWqQ2YzqmT88zdQah3srKtS1euDNZEpoBzXtdYju2qvWozQST1B",
  "key16": "3AkrgsoDpk7Z9KH6rWHcQoBTDpnnnYMT8tntWXuekFeBbnqayAYuheRfEDkjLSrYCaSbtPy1sc7knGAbLe5TLsXh",
  "key17": "5rCjRZEutWT37GvrAgxZHLrWLNoMuuZVv7fkxeBcEecDh2C2QazkoWVEuVRyTku1yHPfYwruA899XsUDCeB9pT1f",
  "key18": "5xPoZwD6EPCjm9kF5BaAWWkUC4pKKPGREKpChxRRdy7tE3uZQzd85CCkVFLCs9rMrYdzuEVWRHtrjVmoKJH4FfRf",
  "key19": "5akQ4wLqXXHVk1j5GHSAvzLqVVsyKr7PmrREFyUQysVGYqKFfbNg7kTMcWUMY3HthMosm1Ys3dnKQHz4op1CLFc1",
  "key20": "SHuK3h7pAhPPQ6CBjyjztomS6GszygZu3Q8cyJpoZHCR5dNht5tfa5ZMVpifeQXcZxYfwZZkXckaoLdqv5yVBXQ",
  "key21": "4zKmeu7RunNTWxvePZLwamAorhw2btu9ZVNX4dmSft1vbSKtTW2kBuWyu6WFtWraWHdwFdst9Qss7oPDJxrw9d1Q",
  "key22": "4c2sAPGVJnufFGGDGawQaSgvj8uhQ6Upeig7HWPDgTRgSrJ8C8LPiPGHFFaYEyiJES8oRBd97aP8R4uFEtV154xx",
  "key23": "4D5zCTRKNQos4SNeVspNYBTNhsPoMUUeHKyMNtjpzyTRvQUxDZwquLko3XBs459uviVeknbdave3WN4vRVqxbiFo",
  "key24": "RsZgMhH3xHqNemNaryKeEzzh1BQwc7JJPi2n69Q1xt5fj2FD7YUr9m6uMzbXH7nbKVsz9NA12QVW9kxUuApyN93",
  "key25": "3eCNbx4yeJfGAn6kvMMT7Wi7w3czfzt4SHCB3fWSikoddYdP51FVkKy1X6RQ9jFuuAkBNKp3TpiZfvjcwALnCyMc",
  "key26": "YPQB4qmKmUC7aq5H8vexYx91kK63Z6H7mKxfSTP9UvpTx1ecTw9NaWuqzSemLyeeocdaskvqPF1J7MW8SmG88bk",
  "key27": "2GWcjBRHDYbY4mEzb4mRbNnbEZEQj5cDS9SiuVCGHFeapLRRsbe6RrZHWh1oV6iSBKVjAp6wrF4kv9NUVG9AayeH",
  "key28": "mjgezLb6cVi1P1S9ugmsWC7rRFT4WtFrFo7NRbThKDCTrmQvu3kd5KoCGF1PPJj5aD28FkDAYq9Lvgu2h2yNBut",
  "key29": "dz7Scxyeub5pwK2t4sV7Xn5KTnTPWCEf16vWqFuXgBpRoPpdyPYK5wS6egRU8uCvvcYiw4HK3TTTBEA5sgoVJ1H",
  "key30": "48p4kpB6NTqg7kv6mUxDhYK1T1xJemNqaFYmL4gc8xG9rLeNAkmh2a42UHM6Udq8RpX7NmHSJBM3FRzFtTZupUNM",
  "key31": "5M7LE96Afw8ayRdc57Q51MMFFjMogbvTWd8mffie2ewpRfrr5RgijUcdvqGgTRCGmnsrV4uojDAhTuoTg16i3UST",
  "key32": "3zygmgStyH558WfT1aM2kKiGR2w95Qfyv17p6hqJ667Knsaw34XtD9yAeQVz4HPggfsiV1mj7Z47mWsPTaNDHTBW",
  "key33": "4zqaZDmEbHT8PQp2o3pJnVr9nasSZ5x3CSrJUJ6obdBwhdGnJaMFnv3zNZQ8W6izJ4FhARUJZWKia6KGN4qHjZgM",
  "key34": "54TucqjAYrrRiEBDT7XNAha9LYCcYsVtHNNCPR9RXu4LDX6r9XD4djL6Zm9VN5479Y9uHhfUWGvxuCWFf3cCsXZn",
  "key35": "SKQuqD4o7LzVsLsLf2HM8TRuzsPYB7eVKGtQdfW7iiWhKruiKo556wkiM59CTRWEsptj4BgaPfqo5FGJGP4f29g",
  "key36": "4WXzsQg7EVX6NXXDTtomMxSGTgTMHmfHkkm99ye7YFo2yTbipuCToiQUgtekMRGsJkbRs5gBeKUiEp9qYuqSatfv",
  "key37": "5L5x4vxgRtnjqLMwtnzqz28FhGXnGt7qSkJWoesjHhkmB1GzYVyxkno5gaQsV5LRCdvPsDfVdeeCZ5zreZNZkdyY",
  "key38": "3m6Bs1pR1nbr3piks4JUG3adwwGJNofLcoiuQxDCFF4gWdXBx4KJgVT1ttmFjKL1sh55ANu2jZvpUkfrUUYM9Nbe",
  "key39": "24aGkd71DijrTuv68m1r4eiMr6L5mDKV7XsHxqF4EkzmXwXKVcrLcnYNm1igtSTUPUifk3URJ5MRbcCzjwsFCDxL",
  "key40": "3KWdeDEAxKG7Ba6RmM4GdRVzfMhbDkcnQPi4bKUGR7sMLpTAP2hVkjk6rwG3QiCZjFeRZvsgcGpLnAYRZShUvvwR",
  "key41": "32p2rkhTknEG3axmNKzfdUvxbN2EWt6iCXGYUjNWxCRyRohQmiEZDw2zUWcW6muscCQqNbTwTxM6JQYoLKHspSpr",
  "key42": "NMDCZ5RndfjNd283j7HxSU3R2xfMfFdz28DdRji16yfpSxDuu5fimw1DpqMUwQQRVy34ng8f1GGyCJFVk6rWv3z",
  "key43": "5FedK172tL4fEiDvX3CkzmYAWbdknq3Tuxbzn8EbbpEJmH411srueo6gWvMLnfSaem9iweAPRKUHQnuaDdrZgaDU"
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
