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
    "2HE9vTB4GcUrPNYjRz6K14SkMyuyEnDJjpYHqTGSSPD9bw5S9GqarTgRoWmkLSaQZx1AjxzDYo2WTXMcne8sQEDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWhKqLH9Z2E57P3uyR6cpvzaFAkGYgrQtSWtRMCZFP8733zpPqeUSyQ2ps7vsw7hU6qycfujfEdsRXCPDucjEoa",
  "key1": "5Kc5v6WCxNUPS8TJ5fsv4GLgN7ooVhrsB8AvLoVXTCoo8BT93atMUVtqYLHUFqECAzTvEnRBLtFvXnh2vaW8QsLV",
  "key2": "3fUrLLbPrefnmwZ3UooQwDZGKBR1MtTS9SWbBv54bv7or79AuN1Sm3CJmrGRmzUqyvhX3t97hiVBmztLxct1vocL",
  "key3": "27rwHCe2TBEwQ9GSryMtYZpA4gMYCVncKEzFGdtXfvhtMNXyKVcUGPYZF3eA6qiu2Rbwa1PsFttaNSEY434wxMRw",
  "key4": "5iU9UQSvL1grEptMWDUbLdMqHBXpZD5AEUkGqS29xWdNj29W3ZNsqY9GVTjuWT3LZ88hx6nMw1FQKn1MsSy5eoxs",
  "key5": "5WAJkWJDCZibBDZhfma7neVsspEp6M3Gfbk9nfmQmE1Wavki2zJHMnBeJfdZikdV7UHLR138SJu76M5PCGdeYrHt",
  "key6": "523Sk6oRaGBfd4U86NNysXaJTK4msig4e3ri5H4d87wyyahWKFr8oXuHR53CkzQ4tepCBpb1Mpj6Sv3opQGnYFAj",
  "key7": "Bi4GNKM5NKwsgYSJ5dXvWEzHgm8n9mUaeXJzZCiP9pM3Kv41LCAfFKdpAVfq7dn8Z2tfZpM7Qb5b2UQ4SUsfmN1",
  "key8": "493L8N6njmg1gVxsWvV6ew5XvN6m6vMyZCD4SqnSn3p1rBvexzyBvVbC96dSCxQ9RDcPLyuzQ9saE9JsEKTKdLAB",
  "key9": "66PfVpBdajzhx2UTHWpLj1kTFaztjqVYCRBsq6mxWXSEix2GAXizHvGBWQbiCPbiswNpjUSzdWn2ruKcaaQbZBGQ",
  "key10": "3zfVpdizvUqLtUPQYk21HMQLMhnDmkRoaeafbf9FsLpCj2hoHEfs4v29Q8oL6ouzacnVFyNHSh2qABECiYU7fLhK",
  "key11": "NGHVjbfDfx2HomXHoYV9ieqaKrP4fqBC8gmv86wmfEJAWoLCx6LaB9kS5ZWNhn3Xir1Nmu3oWvbBocC8XEPd9nW",
  "key12": "4mcr41xzB8348By7L8daaV78nLSAWKfMbw5zErESsAqqwYQ4JYAFsvd7yDqkVztsjv3U6k7W3TLQ2SEJdsFx9pdF",
  "key13": "2NbGpcug2iCExDqV85PB7Uwsv9iNQddyArGRfrs7JFGV1M9fANzCBb1pGcBjyhomjQsA6EpKn895VMV7z5ncGHXQ",
  "key14": "4BVyb5DoRpSTThtET9fAEzmLRKj9u7nToHKeVTB7dBYbfaruQ2QoVPGyozCxWwkfVixwEUNY88g272nPkgFGij8e",
  "key15": "4Uk53cpVgP1H1Y5Kdh6zXwACVaCUgGzV9ft8P4UD3cqibvQr12DaSwQnmuTSbsfMYawaqWLyKfyxKFjTnR1zhJ3H",
  "key16": "3kABNCMkxVogycE5tZMuhZwxz93V242BxJCvwDV48SM5Z3AzJ6jtsK9hhdzrrmjymKD4qG8xzuExptY233GGFGNK",
  "key17": "2krouqLmM6ttHRKeAf2Bn2XEwbMpVnsqH59d3SKQHkVeqNqFnFhMeiJKapYcurQKbxM3yxMby9XE4wVXCeXUHNiQ",
  "key18": "61UddXMvSqNiTGiHNaA9LP8pF84s7UWFqA2KJzE9GZvdDgkZWAaSxK7SnUw84UdWiNm8hcuKRor9kEFcpPTv14Jh",
  "key19": "58ppNKDyHBVny7Af2Zs6KC7AKqQK1mXWUSzq61YQi4zM6cakasyaahbdRjdwYUWVXhcpu5TChEbzSpCBPtWrvae1",
  "key20": "4NzeYcYgFYbzWwSQamTLwKV1UXfJjBkCX4wSeEuTBA6R7vUSTNgBrfHZnWN9UEiE39VMFmccHPe1LiNX9MZs2YZG",
  "key21": "5JYM4PBrxEsMr9f8VxBD36S2YeQLYk2jcqsYrCzxmJnBttAdfhZcSiJcdcwCC3FUtYJuuVTcqpr6A9ZLBgSZeq7C",
  "key22": "eTVkZvjykHhT7sC3stqqkDg7j2ejKB7orkFAbKoH4DMDHJDg3DwcJidkFB7EQcWKinXYepwKC27ZvrnJjFe8ngN",
  "key23": "3fZH6gLKhvJRAeBXLnkNoW8c5qbcJa4F2UXD3EQvJ5FhW3eMBLMismLUpH8sr2HJeLbr6UU2hyndQMJwziRjwqGQ",
  "key24": "3ZipwEQjvSGQ8X4oQhMbQzHikzxdCv19TSgnPjGoiTaoYXWc3ujMHDns7i3rpd9zFucbqCZW7EV18hBTfZDMatse",
  "key25": "5u8iDQU5RhXRaekMSHrKtfPQnSHS2VktPq2D1kA5Rp7vDvj2nFd4dsAkLLPjkzxbGM1MbELu7ShvwW2PSX28z5MD",
  "key26": "frxN78iEKGVyazgzrxo74j26W6uzkLmc8MuFRmKVC82jtRsDDUk3SdGDVK94TYqxSLeMfXLB57rpZLGBU8KWKbc",
  "key27": "2AbN6KZtqXcUuAHFm1Wp1VAAYsZKFpRjUsgXXNdBMT7VeynUJLPonvdq89TEU2rBKTPhXWZ9EVy8bb5A4NhjtkPu",
  "key28": "V1pzqJ2o1jvu96YVN6mhCPrPjA1rdkxGEdmwkyeL3bEgtwjUWM1Wda9LPjS75tUxafaz8o8BEv4YGJXYuDm8ov4",
  "key29": "2PbXENvsER71c1GyKdh2BdCDt5ZpY9woDEzEfi5Cj66TPbcoWEi4Gsor815fECLPTkKgBXcnfj5TYdM6A8kgf6JQ",
  "key30": "3nmmKMP9o8zKWaZrESSY52ahkHLjseDbczsvKFg8Hf9jjTNgTqbAkJwfGowviBxAQeTL3WN3sGKF8iiwNoZp5vDZ",
  "key31": "4d2XBACeqDBtzGzM7G1pb9USSfK9b2kvzkxrjerycgbqSFz1SPjKw2ZNxPH1AkY4DueWFuMSp6jwtUYPoXUmHJgb",
  "key32": "3EZd38SuD9QurenLS17hhsk5MEwLqgqE6EB5U5yDfLWnCEKthDAV9AND26UAJDeq6tnmWAKytF4ieqmzVk4MDjf",
  "key33": "DMqxboMh7U6K9CgUge83tG9MPo84fxcq5rDyzpk8jaUrjLhzB4sMj8FpDYuLH1vB1opb6vnTwJQgsDZc745ceA8",
  "key34": "2Ctrhrmg3c5mbeEfVcUudAx2pVnRfCssztadko3Kjn6DYqiVAto7nvo3pEE9GVY8ycNiroGJeV2CJxRtj4LnKEvp",
  "key35": "2sqooj7rtA6u2HM3EgAjQ65ekHZeLRDdTpnoVAVw4xf7k2kuwxBH6bxup2mRZvGVszLvi11aYwEqVMzeang1bFrt",
  "key36": "4uqUQw7oUkgiK5Zk85fMEwaiEBqpivDn6VGYEREPvbxERyu1HYjisohNxJiLREXsv1UXiU1EVLxoSg84vuJBo4yn",
  "key37": "4wa5ZFttdL4UfwGDe9HdPmmaoHM6Vz7oinibZLRWf3tHq1q3zVZk3uvxcWDQLzRNYu5Mjp6deytgGzNFFB8NSkmN",
  "key38": "5zwSoaAMU3zvaWnsij5mdR1j7PhpR98yU83n5aZ4vuqbF2U62LfJ3KL7ef5TQRRpA7o7JXFfZfmZevqQVwmqyV99",
  "key39": "EbnshkWftVWcJtbUg7NmUSgTrWZjnpVg7jwDofUT6yTubcvT8rh7zPsUZSKXHcKpPLDXN5DN7F58R8HBxKAjtCe",
  "key40": "2XgeDQFvgiBgniThJNuJm64Kg5WsCTyLpY2n9LbPJjjxyLsEQyAV276SZMZyyNDDdZ7kixqt6ZqTB66ZdwxvpuMr",
  "key41": "3fdqJmWQqvrY96L4G9MEyhEUGDVZL7KJu6eZs8NAq4TfeHCdKyZLANharwyU3VPDDTrj7gy6wN7fKfty77GeTu1Z",
  "key42": "4CuhQetmNfGztP9WCNxLp9QWAuogiyeFBMwne87KjyghuuPCKshhq1DHYaeE3BJUMmMXmzBXHxnEdA9rgJ4nyBJ5",
  "key43": "2evZqq5NMUvPgcHz1ACw4tmCAmodJWEkkzeUtGPb7KzNv2QcMuMTd4RsKDFAewTrUfTKE1AVaSizHDcUXpoAUqcB",
  "key44": "2MEhM1W7ArSSEvuQkGijhbLZCkzeC5cwpkri1U3Pc1MYJoriDJU6rcCxoyL6wSjfPfvyZr1Eta83MD1uNqotBhqo",
  "key45": "65ZCbeQJEyKnwGEK2M3VtD1V1iEH3EzkZBUqRm5RxVdCLXQWF69fHFexQHU5s5HtNtMsipE35AV4yFEXZ1j8KKLZ",
  "key46": "vNr1AWhkedR7Ndf4PS7kbythijX3RDRjTmU24jxFHprRenXhXfWQdBwPDGyHaFxUutSVpKtPv48HT5eFzXzTwmF",
  "key47": "2aazVjSAkCYhDPX2YDiefB4V1Dww9hCPN54sYBriVTYhUQfiSu8aR9D5oj4m2mf8wcodoFCxisJgqTSkNWUwo9cM"
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
