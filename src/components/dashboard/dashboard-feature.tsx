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
    "5zPVc5CofEriCDy8xugcynm1fV192J7DjakfQTixfWd5HLPCFZq9AuL8vDu6QMhr63dGZyskdcbrv5mtm5qRGdQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kzrnG9eZsE3VP6jHqsiyb1s8r9tBL7PgGgUYdD1FeG5JPhPq9XvjHXzGSwAv7jGx7L2pGJ9bWmfdWr3VstSUCA",
  "key1": "52du7d76s1dj1q79DJVUPhs6oXRCDbZbhq8z2SJkud3a6LryUt8s8UNzvt19McD9zKcC2ULHaecdwZ1HouSXiC3U",
  "key2": "2k1wnVNHSSNZTYCdtfCPFPtoYo3vCenq3c8SzrkJmmoGpBfYfFDopYsQVjy135YEnRurtsExz1VHP51NrmCbG6As",
  "key3": "5gic6dDjW1pJtBxn7UuAr6ZQbAehd17acbRqFqsBkjYLQrRktPifv3SCyXapDmEb2t7MuxiTBch26gPZtdrPyRVX",
  "key4": "2TLbBfrDFo2MrwHCdE2DMTYHfJZGy7amf1zeQuH1eHuGHquvnV4nEVtUSQ2ZjRwXeYtRNYSZybECa4PrN1H3wWBr",
  "key5": "BMkM1TCGWfdLwrQMGxuA2nXAyrFpvgoAyNyGWR4f2zicELTT8EV4gs2KRA7gzsWiPA49c91TKEqXngC8jpc5m9A",
  "key6": "swTufUuasABLHxCRiG2PThXdmP4ecYCUgoj5EuVMmyD5oLfUqBD6xMPyHG2pZAY8LWhyRWgwkfmyMqQevvVGwN9",
  "key7": "4JXcqfKEfb7rNSXJjADd8HoBMhR2NcXsC5MXQBiQr62ooj7qjkpDkTsqgc8z5bRNspqoPSDLEfb8V5PYQw9w3Vjm",
  "key8": "3EYXUnSCBpvxJFAyTGdRzQYU5LpyZwNcvAUDAAVwnu8RmcaPycHUtxBG5eqiPqMiLNTEWjqJK4vc7sbR31F2MHH",
  "key9": "55e4ZctPtExgUTWfMSPBLmuLEiv5KhqERdoPTZuxKryoSRKykEUK515MC5t5eiv79cTuEUdA8mKo7k6QGkySFynE",
  "key10": "4gXaaW8k8tpL4gmYAxNYV8LyjUCGUnWKuytv9dWjTpwTS5DcdjH46buhjWfNkik9PjLLpzj7wXVwkA1uWxgYSbux",
  "key11": "5oRYsEoTYRSbLkxpahgroRZEphim1jp6WDZXmmAphfYrWnJQ8nmNojf8Fu3HP9zE7gzCDdZANNB93dNYsX6XXyTS",
  "key12": "2NY2ta4E9HPGWRUSioRTtZsgorRprAWaRFn8mUEXLb1Ung1r8PgtR8CneenDmZu7AHbgBhcgyFbdDPLAzQGWNttW",
  "key13": "52Rpz8ieiXWuGR6SbLxpLFf3owX4UHSmLmZ9zKmvGTnDCCLBQ7MZPJeNUrJeW7EWPCYEdFLNx2qbK295EQAQkQSE",
  "key14": "2R6ce1xtv26P76eJ5MWHadmYEAw6ZPkA6tWsGSkd4Lt7Y7gScY4Rg3kLcbgRwyDJPEGvzdCYKnNvLYKsjUghtK9m",
  "key15": "5Y93E5WC1PLTpGPr7Q5KaCqTptqSXzEnyEL9hH76QHgzmUc8rgeVGQbARipeQ8Mbm8RvkMh8rHAdj1W9BEfjHjRC",
  "key16": "WXiF8gzfTwo8KcViWJrhD94CVeMY8GooUvi7WgS8uoWjP13PpNSciYErHWs7iz7Pfwd1YDiTK7d7JdjWEcC898X",
  "key17": "3RChXCmFVc1kUhvtH7x3C7aYPuZwLo8SynhgNETJjCKuzbXrgewBnTUKcTmn7YQ5AwTiPvJW1ouWCLFobgCJH1CD",
  "key18": "iCZGwFe66yxoawaH2WXLxotUQciWB5nQbggtTsrDzBXfGKK2kpeKZzUWmuVd2fVZqJBJ2rvjreA3fDywqdYo5ta",
  "key19": "22WSpKcLfPdQbQv32EsdYXwFYkXz5eKnVtPD5HR5kpPqLLf5SdnUfwZy49DLMV89BsrtV2irkzZpgxF4iaRnEALW",
  "key20": "231F5QzM1pvKATHJ3oL5T3HYhvT151WbFTvmx7r2AdaQzSaaHtcKcjjUUhvANFDhFW1WmjBYqm4GeH89UG44RzMU",
  "key21": "5EgJbw6sZ4NuNabVbfmtuD7fvfezGfkAmGS2tPaNq1bBUR4Ku9W7EeGZDzUsJpgxBqzvAB9nBYvpDfHrVyXAHyRK",
  "key22": "5qhrNrN3LDEAp6nJBtsATBQNNescvnueYthPQhULaCYNtbwZmDLrg5ixk1sWSWGdrUmNPZxGVyaW3RtBkPnwUdxp",
  "key23": "u7q7Hn8myb1qwMizqLvGm6KfT2NRw6UXWtxgBk4KhcX6h851c3RTjfUUpESqPwNReCKemrQw7A39Wj3NyCSrw5T",
  "key24": "2GggZ6yXA2Bfsg9EuYbQangc7yRhRYCbmNtQmDirVb62RT1yrXxGk4tfmQEeg8QvB9B2fBpDx7a7RYUDLJ82QhVA",
  "key25": "Wt8s3N6s8ZZg2w1J6dsw5cnXNTDMU1u1niVGMwZBCsxGczYMkZdpNcL69Zp9jDzX4KgEGAk3LkpyuhRsXyCk2U4",
  "key26": "2WSRNAqLUJgUi6btbkeLh3WBoWTS5VjErYjiMy8dAjstxortEZz7sG2mmVod4NChHAe7276MX7515pd8LMdp87yq",
  "key27": "2TyvUyiqMT4RHkfBFF2dFiG2aAdfThrMksj8G9udLxDz6knGf5VEoWQVJ9JYK3KvvEnTHzwYRHrEWdpmYAhTVJya",
  "key28": "4dYH7UyjbdjjVBFrDS4EguCtJRWLHaU6XrfCRyHeXMTga1RkbbE12mJZzqfhYNS7NfUmxX3MjR47Q1LaC7m2SrKM",
  "key29": "4Lu8Syzs3rMi4Up1LEpzzwzD6UBf1fqmvnzmfmpeiCKcWn5jkuqHKoiVr1wWgytWRacjvn9kNaMakQcVNW37B1td",
  "key30": "5M2JxQgRCX6TE8puzPq6Jy3VK9gTtLrBSCczpWBdWqeX4L2Lrj2MapX1QKE93i64v7Xg65w7jxxg5cK2qjPYVtnV",
  "key31": "4YB2ddj37x973N8vwpJ2ELF4hiAFPNXZsKVuVWWmGcETWASVREMMRNEtSUjCE6U1iEfPXt6A2VXriqGKJT2TSryk",
  "key32": "VDCJDXyht1tRzLL4wZ8cL3mES8wtAmMP2fmgETq9aWDGwYKDhEepJs694yHrnrQdnpRBF8N53ywd7Ri9NtPheHu",
  "key33": "qEKkLXFqZSAqpTmhdP1H6S9crcXEUEzZ37hkv8YTHgoocVnP996MmTUb5ifNpWrvnv42keMKbVGYfdukg7SXw3Z",
  "key34": "42rLwki8mN96dGc6sZ7mDstf4jBMH7ANjBZLf6VFS9kLy6ntiUEMWAjdH5mdywrdupNbcMWaBzw43pAbbtDwyjVx",
  "key35": "53it5sBELdVrGnzeKTfQhufonvXEfBSdeghq1U4qK2HRvNxDabxL1YUwuTaa2CCBj7j5qNMdjuFHn3KFcg3CCNcV",
  "key36": "B7Z5xpQXeA38MAUkpgqbQHEwEw4xCg8nTQHzWV8E5fQR4xSgU3Ve3ECRkJGUxoekjgYo6ChT6NXYDCvQadm8nA3",
  "key37": "4iu72uSi8x2LWnZekfhxSLvBLJLy38AodPsMNqm9xKxdqSkegFG1mi9F25Nsv7CgAbPx79XH2AzaPKJSG2CtcSkS",
  "key38": "3ekZ3kUvJ1CvNaFbowXZkaLbtjfLW7Bq4DPQA8esyWPQrQwEdPct7ohi1N8PS1F8nzQQ6HdtzuiBRaYqmJJ1h9q8",
  "key39": "G74erDCHG2CBZ2b3Fh31bxqbdiT29SGHBCNLJNkFWf9ePHPQufN8mNV6E4rex3CCLs34CFULwzxLPMdN4pjdBHf",
  "key40": "mg36o6AaQr9ZsNQ2mqYaG2BNBzFUKSq8TfinhDJZrZ96whQmmVMvkjXWYiCWBF4jFRVWrgKZzU1CPzyzNrgBwQ9",
  "key41": "4RzbaVFdFAaM9Saqtonhq8pPygXd3Ak6kVdPpbgxmZKRnfxki8LTm5pn3VF5asSPCMnEqYeYZH5S5RDjd4pQHeKT",
  "key42": "28qkCW2NzBkVdFbhdzY5vVKG9n6P8BkQZsMP7AG3dVBuCTNapHwiDFSN1NyAeAU3yK1hHXdQkXT6nVFYRsSC7MqR",
  "key43": "2BqufRpBKCn8GWGSnZ41w4yuPA2T7XZV9Y3EQ6JyvWhK3WvXKbLosyHoKBF4N6cajTbLdYYBB7UQZixikStoxGmp",
  "key44": "Fej4kBJBk93kTnD8VEXwEzeLwPhADWYj18qj5NaAHr6mTXRB5Nwv3MYoQM8AMGq5yDGedqEMbHgzMmiogvzdBdZ"
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
