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
    "2KAtb94zcR1icBbMkAuHWMwS1tMhsz84xEFUL62KMcwZEqTeDb66hW1oWzys37YeEYKQYhzajvyVpPVaqfrcKBky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUnV9w6ecWgV1miyLaBZdYvfnVRxm7pkmMwp4Ehcth1pJPEKLYtHRx5Qc3sme5VewL6cHphs94QaRZeHKbGxy69",
  "key1": "4LRmEiiURGmrxt2XqxUt4HPx7nYz9Nz6ADDFv4SdAAp1RZ1sGA11N7mSMCcGNmL9RprhbJSpvGmfT6wBC2XkXQxd",
  "key2": "4Q2D59FCbCMrxL7ttf5euy9HxWFhVXr682pgGSwfMsJGxLpRkqh38WRaAF1ZNefvxbwVGaWhoQePvHVmtRaKkZ7Y",
  "key3": "2kvxRWshvDrFZJttMiKV8TZCYUMAsSKRo3tCsVzZf9f82fESueeKKvQdEJu54D2EpixJ59ayiyXTrdEdd2YQ7htC",
  "key4": "EaveY9tW7whe8RH4KCfwiYFredrhZi1WfLYvjUweEz2EKZ2y7khh4MThzdZvM52vsD8RuztZUyVRwqx1Fa1ZcUs",
  "key5": "4NH6U67gXoeAWY7ZXoWCuPoRwa5wV2mZWCfdqHe6fFJVs1EZMahJmGCUvvytE7KuwAsQZb6o3RMED7mu4BoBPHUD",
  "key6": "5GWR1RQUQPuhCXF98uf1auHREcoApjyNgWDgDcoMgbEE1LWJYLkrBGJoMVrHyXqsDxPTG5kpWVxP56KY6UWSWgjw",
  "key7": "4oKEoDYod1aGFyxZvrgocufC3kVFRNuDVZxs7pNBxxtaCPrC6oC3uVq59udy7C2HHkwJkxE6xopvfFjykcnfvieV",
  "key8": "3vvn8xAqKUmKV6EEejsGJ6AtCkYCEBsXHVe1Cs1wc49Aw2Qntx7kMsVf7mPaxoB8BKJYmHoemKHrCvHiuoeM3VYZ",
  "key9": "B96rcdVEEcz9QPoshxMVDs3Yap4RQNaHJVpQ5359BoQV72Juy7ZZLffQFgFfZC51fCqwHEYJsFEnUKA95rqKJua",
  "key10": "5wuoNw8rj7bvvJLGLV6k6X5LkBjwVno7bxFQygYiewQYfuBE5uNpaF9oiRn4mDsbvMUiA1mHXJsvnQpcVNNA5m62",
  "key11": "3JSpQZfDkGz4xg7SM4sN5tE6VvJFnj7vK1kkYvbCUpCWik8w4w38pNZBHqeh8htsPjdfiBcM4RxzUirZThdHaHcf",
  "key12": "5pWE9Kb4tXQWJTA1nhRQ7Evt3Lo46X2U2z56Vv6Jm2fq22y5bTfCJbY4Jy6CbjHyWt2xihEDcTfGJHpfKvwDnEdv",
  "key13": "Rj3w9hxcd9qtFNF9CNz65XiDma5giYAmmXp7PxR3x6sb3pvwYqfDaCfEBsBM6CvSd3SphwzF7A3vpmMtoac9XKr",
  "key14": "5FPjAxYUzUjqxxfYZ34YLPcJyXeCECe2mkv5no9c8A6vC2sFq3NZaRXKEdQ46W7FASNYRzVQC2mefvNWFszE4Ayn",
  "key15": "3nofxnSmy9X5VQS9xkZEVSfmvi1dX1o667inBWd4NoNXeSiy59V2Hsxag57vCVCPGbBW6QZzpUQAT9zk3Q1dwpA1",
  "key16": "AuBpRuNk39PFJeq57dCTKP8Eke1WYH2p7RHQyPJkuiNQQHZj1GJwezKS2Y4NLifXf21S4a8J1An4GCHyu6NFM3P",
  "key17": "5qKEPpguFXdCeckNHoa6FysufTiKewsD8yXBcwdR8m5EcMcx8jujqKeEpgGzZMKcVVic5cHy1UjXJUSPsXCJ9vKF",
  "key18": "5JcXax28miw1GqQtBBEsFicuzaTitsPKvznVK69oYvXtbLxSPFik2PNhZFDjSNsrkJ8bjfYt5fUtNPK1SbofWtfg",
  "key19": "3bQ5Fyim8uK5Lz96joVM9c8ibNJ9UszZH6ckdut2bqM378QiW56Umygasp4epLE8pnGpQoYqHDh3qhYETibg1djH",
  "key20": "1Sx97XzRsiYR9tWzntEHqVD6ywKdDe4G2p96hFBZpHWpp7p4xmGK9mSQQgDyqq2DEQC5e6ZRy7nzYetsDh9KmzW",
  "key21": "31tX73ZBrDBte1oqKTBEc1oH7uQjyvo9Zc4PMxyqmLkHHWxRbsZYFrqs8AAKPN6E4NdrScUDoDNkVSygcSTi9dKA",
  "key22": "3NrhvnuGdgLr8yAxc1nYQKXJAN6fcA3qwzWkh6UPVjetU97UzqjdxSZJ8pkR2Zh7NzzKW3taqvcFoFWZBEKdNRjy",
  "key23": "35bMUvQb2ykftqfV3nB41Y9R1fA1uCriWNaQ2cGpHWRieN4mtKHsCva42Lok28CFuJ6TxprLtxW9hoX5kiVkgGwz",
  "key24": "5gLAhrz3wV9mnLQJ3KgCdmeFV4vmr6SBhgoxdgP7F4zXBcXj1PRvPdQqWLoCwJJsZTPTgWKnvY66EYQHGCEKBh8W",
  "key25": "4EBjRKZTsTSBKbQmYiQD1xt9R4SFPpSFEA7uJeNS1zp3FUHCGwYvnhkRCudpmfrpGs6KDE4WQmDNrMx7F5En9hZC",
  "key26": "2ydW5xoeYy2U9E9V9JBwyGdxAG9KtrBStGMth2QtvkyRXxHt319sB7WFjEfSaMx1PxpNW4EvURLP2rfbgJkAW5J5",
  "key27": "2i59oTvoy49iiG3KdQK4xxGBVHu2GZHg48PCDaenAQzG3jY9LofsyV1pJVAcBatXSdkHtFDiQ1z2mqHRYArnWSgP",
  "key28": "34KEB4DWWph2HTBYMHRAW6A93zo5CYzHkM8bd9uVA12jr91xXixbXVL5G7nEC9riMsjaXCnqiFiVXF45hD4tDQz9",
  "key29": "2GRYhtYdBYojkeMxinQ6KXYmSissDYnrQBuueLCJZkmj5A1u9fFS8WrkNd5CfHVFYWvgQ4BdKhM5VBNNCFkDchki",
  "key30": "5NNKRMjwbWnN3U4ckV3LuAF8raYQaRMBgZr8pZibZKRKuf3s77d3AtWRJJbwZcVjB7xtaTEQf7oQsZuFX1r8QHgE",
  "key31": "3RBFnvpW2E5FAfamS3CrtdQUPa8SN34mFdQpVNuC5eLcwHNkifeMKFM7WL6DrNrzitqT5sjAKQTHH46EqcoC4RAv",
  "key32": "5hsXEPubCfZryQUBk3CPC7SKJghRg91fPM5yhwWeMyBNww7KpuuBk2s4Uk3zEc3wzNK9wBoUdRYTfy9cWwymGdV1",
  "key33": "5SySwMwZq1u3kHWP4wwKT7z9DaVYAx2bHSSpv14cfNcwhmJeFrZmjkzyddtohixRYWA58jTm7TVbNp3ojsqdGx7M",
  "key34": "2am6ZZNt8ZE9FZwFHP2kqhi5AHpDHCajneitvPGrURmjJTTBp7NwFZJGRa31PUyMz6vRpyou2mdLUirja7f9VLnk",
  "key35": "5wLpC4n8pB3U4wDMsmemaukjqagQ8pQ1XjGUYp9Ntx5VC1GjaomE3uoC2cTSgS7yq7zCDqGTCGyCGeGbY9Xvaxri",
  "key36": "2bSEMzrJpLsGqNoZe3vHvTYTAxbMD2H7jF3YhDG6q4kDTtRujc7kk7MvhYXJApjceuBg6Zp3EoVxKL8Gu2aFxpPA",
  "key37": "4MZwgPY4tTCvDT2NxEnWCs7YGTk7qpwM5FGdjSUP5vVNb4p1B6Yw4csErRirkdTiA6gSTxp1gQoL2Zi4K2V9spmF",
  "key38": "2m3WtQocxjiGr21Gk74QaRfZhYfL1D3dfSVsXQakFe6rtbHAwhVdaa2Uc2iVcfLCCvHKzTN3yv3yfkZhTKJxByWi",
  "key39": "4gGbjsCn7R348xMbTKgSxNz3Kaw8g9VZ62BH1ggCW1uk2pppTTCuZPrapqV5VooQpYeVKBdA37UaUKmtUSLSAEp4",
  "key40": "217cPrdaRqQbYJxVSyYr6nDTtMRc6CwJ3Hysx9n1XK6Ko5EjuEFpLmSVL1ce8ae7vptGEtLfLodpT2g8SGbs1HAU",
  "key41": "5tpBF13Kc8nZfxaishCgEzn2iZp671A74cnxHbrjispKvp11aQozkmpDxLzdjowmvpszKjqCk5PQyrZEQUq4LcWH",
  "key42": "tMv94oc6DpU1WKjWmYEbb8Pgn75H3btqoFTPXKEBAZL97iJfqteSCj6wnEPoTJnArxGuTBwxemP7KoFLXC1iVcq",
  "key43": "2dgHoCxNSm54TsgjVB7MoJs3HgAJrKyiBTWrtFNqVckgcYmrSXgDJxY3y4ZenArnd4qskCJ2sK6rk1bhC3kYwGUV",
  "key44": "59teP32jHNnUwqoFaRqqmgpSP4bMssN1n6GWdCpFra93U461gDjzfgMgoZeaQyK7ddJkZEfnNXuA5bjwLPiSDbtN"
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
