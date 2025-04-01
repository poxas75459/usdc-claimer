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
    "2nR6RH23M9e37bXBtmGSuktAxKXKQCWEF1upi3tYAA66HBBn2ps6fC7hG3G3NSsehGEgRSzJTFz74arheh2Wdn7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npg6hJ7rUDnDMRDkUEKZe2TxifV6gSUnRSSFwVkeC58xmfeqvzrxqsagr1Zc97L6tRpfgeRzCbDGR9m2v5WWTnH",
  "key1": "CNaBgnukXFkKabAHjfMMUwLTCkYNvfTup2H9u4J643bChyqczZqSfQrtehP9HfiN2D3fWs76jjJ5KzuqS29Lfpq",
  "key2": "2YkkMoQRA8Ajy3MMV6XM1kJmYZhtwvSmoq952opzDzq4qtHpDThz99pkw8r2MYgTbGmz3AXxr72P4uG8GPdxTLyZ",
  "key3": "4F5CkeJkAWaSBptWBUb29W9M79d9GdxqHXpSj6gnzWzdm3AJiSgGLHnCZubBYotTCDxeY34Yi6DauGnq6T13jUCe",
  "key4": "3rP3Kkrh5Zkx1YKNNh9dGhJCPf6SLYVxkmsfWfmRnmSVGX2xVNNaikQFFLeYGYovDen4qAurFpKcPxSLWR2dELHF",
  "key5": "48orWCaTSszT8Xt7Mc6N7ogmCaY2LYZhFyvDkGH57GvikZF4ffDaG9vGuSspU3X32jY6rfaTTDNaXGp479Z46L26",
  "key6": "2BxU9Y8rK2tnCwDpuuckyCAmTLDx8jV1sNq54QY1rhQKaM16cPua3xuQcVAMwqHAs5gWdHnQK4sr9T4KSa7REk4f",
  "key7": "2XsUd3c99v82VvTCTt8rSY7VnWa6wQbnH6FfmGwryJVHxMeNMzCj99WhogMUCDdYr7zkc17xwe3VWSW8rcLKckbu",
  "key8": "2vtHA8dVtbfvuY1ZyoudWDSSdDmpN8CssyqsLqYdDMRyN3gmNQnzJpuHjhHwcUK8NdUeddKtf3Srb6V5oHzobdQg",
  "key9": "h16EqoDZ7dcqehiwdnGKGXpjfeJ9PybkHEy6PhW8Dacvj7aqQcwYwRd1qJ99BssdDzXJpDskGR9QsgZ8vJaqgAK",
  "key10": "52hRXwEs8qofSfhHrLaYX8aHpf9zsos7ahNZgZkaoRmwaLvxMSXczdXyaMVLnMCm3Xim1KAJGvU17ZWHbtYnrUv6",
  "key11": "5KqUG5MbYtW2khRasfWE8dLX3VeAzDVKvwARgbA2C2rKMFryPeDT1K2zLG5LK98eEDXy5m9iYkKczzqaBeupEgoP",
  "key12": "2QbKQBfhzVRECPGoaK1xBh41u4Qm1sb3N11owTmHVvB4BQjzouTgTxmshTmpLapS39rapKPXsXjjjzG5NhKKWF6M",
  "key13": "ZCVkmj2MNLHb4eWcT9Su2EcWJfzb5brcsULjzXN1FmhKZkT4YkSuG7a1VzCrxufaBUd9UKEjLAaE59mya4J5W79",
  "key14": "28ZgcxUjYYBjYt9r1icHJPtpbaboQdFsYSDhPkgm3PQCPzEZsdXDwMGF8TDVd8evTHBi2JtdSAvWBa2iCrcuzdfn",
  "key15": "3D1Ju2JPTggWkbTCebqpLqmWEMrsJhJBa43N8HFeErNWb9ksTk9z48MJZhN6eudpK31jHNeBoav9bxMhx3d8LbJN",
  "key16": "2tae8r5XfSiXSFJ2XXyV9B4uQYEnYq9SEXVL9JeUyYhyrhffQbemXd4JFQk1axLwJ4ANBJEibNvP8dPnkk5SZfT9",
  "key17": "5c4VqXYjdsGnLvzGCrVXsG3cfesZSbiR3HvRzu7Z4hXyyMV42tpnrtPyjq2iSif3gCt7SQy9Uqo6H7CLWYYQgi2b",
  "key18": "4XvabQ6gHNuFnHUmxCeHabXFf2sWVxm1xdmkqvr4dNpcAB5wXGLaQtyRttBe6nkYowhbwVz14rCBCigJthh6jhU",
  "key19": "54cw871sm9eFV15d8yURcPuuXXDB8kSb7Je6qiAwCsBKctEZ4TgweGA3hV1wEH9c7TWJNafYmTx3CKMLsGU7i7jE",
  "key20": "2jzcZdyLw7Rg4LL7ZWCvfJPbLVeL49T1LFNCsYvaFVVRjYUguB7EzHJKWQVxmQLeinBCc1W6gLZ3P9229BpteXMA",
  "key21": "3jmt6gzxhguqBzaEU1M2acSgvongWcEnkgh6vNZeeFeE8eqjE81WDdki4c4ZJE1t4KK5XPMpuuG5bqPAvgtX1FKb",
  "key22": "5N11AWWZfrYCRHwvi7uke1AVkrqDX396g14zgjZKNw3JKMKyoCV8ZQCH1SdcK7XHNQDgbBdmVdR3c96CBY2Lf9yB",
  "key23": "eRqv1vwVvUJpMBvtQJNMN8vkv946tTh2HZd3D4XaArCqdacmKE7qWNUQXSPxV1n5LwbYWbR8KuW2ZQuQx64g9Mc",
  "key24": "2te6ie3NGWTXMZkxy5fBQuZGs7nsVbUYSugTxrs7EvTwsKFNTGhRS7mqfJqj35BX4ZkCVcTq1w6HKNVtx8MiG418",
  "key25": "5db2zVw71vFvA2iT3XyL9rvfDmu1sczZL1qGPkKyZbeGNjm2uydDVitNqQZVP1qKQh7F1HoFTikJVitQ9VMkdDw8",
  "key26": "fMQAYJugbYZf4YRdRiPTUhpGR5Jbo4d18N7nk7edWTNMdD7euYtV3PxAEwYj99HhKTgwy58v37fyzb2MsopbUZy",
  "key27": "CpRgabYxwdUW9fmSEa92D8dLGdTp66Af89mUHTPzKJiAMHJQ5j7yYF55nj7zMU1ivPXgPp2RuANv5uuuyQyrToh",
  "key28": "gcaL3ssithUw9nk4AGFvKbZWdodZ8tY8xPJ72tb3wkFsqEp8x5S3R99WNPebJwZJiYfnuHjz3Rn9qS85ocM4BNf",
  "key29": "3vpq4egLKqGp5wyZ9k2UPXqnc8G2mLCamGxiBnaDxv5q1Qua4gfY97CqHCZ2tC6X1W5fTHHJawrCnF4AjgkXdtPz",
  "key30": "4vcjPdP8bxc8YSVo7S3gprBZd8Zht6dvrVYqQm8stUaar3UdpYrtTdQsWcA2CscvmugnLVvcV78SeMw29L14ocBE",
  "key31": "2fTRZSpPRxk7RMdM8ZT2jwGkARVpS71WnhkgUJPQmZDVRLB6jop9wA9BhMeRfAedqUJ2NaWUkEjr6q74pYNqiws7",
  "key32": "3BXch782knbZbqm3xkppx4CKyHuDGwAS62uyS5FZWT2BUTLLvuU9wscJdxUZtiiww3J4D6bLmCuM1d9Nosmm6Ybp",
  "key33": "4ouHh7amSxVd7XhbBTXCc6fpAbRcCx1anuh81XY4Cen9oMLN5i4pPDHJoz4BVPbBkY5Kc2fVmfdZw6uireZrEMWV",
  "key34": "2WXygPmutsx4NMykFw2ho8DdGRyf5yzaz89SMV1gNBYhXKCCmxBPpiuLfYwZx6qfzUZ6XYFxDQjyiba77sVW5TbY",
  "key35": "7t7mYafcByWXNJC8npPj1wBSEVTZa2gZ1bbRVAVGZy7ZdRoMnhySFjQwouAXMDajYsyWS5sugtKvAXrm7bLepKZ",
  "key36": "3qjgcAx5zTV7dNLSNZXV1DUu9hJhcGT6YHRdKCMRF1RSK2gHF7mEQtpw6ddenBMy5b3ZjHKaNv6Ab6ddii9iDcb3",
  "key37": "4gA4nSJwnoH3gMyJW3t3Bfpcqib2QsQCmuigsRBbXpZ3cKDrLBTKv7pMvtxU5uZAtdKuDoUE5qos636He2fTBZ19"
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
