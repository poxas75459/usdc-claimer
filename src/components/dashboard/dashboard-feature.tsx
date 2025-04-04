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
    "4oKxPAca2fYAsP79Q4WR8mD8wg661bsvMBVjsU95KMVqhJbRRqnJFH7TYaWVg8M2RJzdVhgt7gkEMDhH8WuxfLHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tvS3PtUfBtaikaXaxpjXAWAbdQciiMSX4fyRbAwRYuiUrUHBQs6AYgDqyVbXZ8M67y931AFqTfeK31sey6PidCb",
  "key1": "5fFKvXc4MhQfnkiZmMgmrr2aAqBv7zb7PoTSuwuhPSwdeq8wYfKJhVEjX6Gzet3bmEUmkehcC4CvJdYrFdmHhZyP",
  "key2": "32PAsEnHqfZviJNgXXvXNMDyBByAAhagSPAwgPcFGakerkL8eZfCByqXg2qiKWB6kYBujm8C1vUBhvxh6VDjHNYz",
  "key3": "pRggPqK7SeUPWFkCvMRFz2oo56fL7TBw7ZcU9v6YKqEoXPHahurUc8ZMnJqpxmN7p2hQmyrfoCdttfYezo7G85P",
  "key4": "48JnaMGr6X35je3NVAJWK1miwryYm52qbFFUYS9uWcDeEwtesvC7dmQ4c4SmFoVD14xPMKMQ95zCCJp5qFRAE7aV",
  "key5": "fWsEvqKntZ4ic3GKjqB63WhzQy3XNgdtoFAbgh3ekAL3iE1zKDfkHt6H6g4jQYrVWNfy6bBhAzxqc6mkVigekzv",
  "key6": "28BpmRGm7cG4beCQYX85cjzKfg8vgh4yT4SpZwT4WwJbu4HEkTFX27E1D66GvDugw94sz2cQww58we7GjEaPv1ST",
  "key7": "5hB9LyUin1E2ni3yH9sd9Gb1FhBKyA5HhHFva1o8VsK2MwpN6iwB8xYGcMgv84qPE7bXsNAXVe7zncPje7tpwKnH",
  "key8": "3FF9GsinspB2haPgH9vkkgtqnMu2Dw1mSt2JQmxA4bVUWZtQV3GFHY2epqowstVQmUjoEwgYg5brRn7UKRyRvSQo",
  "key9": "3ft3Kfhtr4xTiDsMJDoXXT8kvh7PnpP8eruYrZrbVRzaZUGNiRQra4TJvBJGxWedpUuPqPeGYzSpiw47LxuSKFXK",
  "key10": "3MHhN91gaNcDqMTRS2NNSSnqNDoDfsLB9t9PHXDrhFwdvNUt7wVBtt7FxXeBPi7Ph7bjSiY2SYkXg54JDpPRkjHv",
  "key11": "5KXMphUSd8fQD4apgXNRQifxkurmxaemAbXtxTqDazLWsb5ZLPBCWKGWqpyLFSQBz8pLV7kJktNSV3k6Mnh1YUyu",
  "key12": "3ierppVCBSP7ctGFGmQJqHk5KYy5UQWpnWkg1tLYMPcJzqYbgbEHkCB5nS696M3PhwraGaP1JwfjaqAC4GLJhHku",
  "key13": "3vqYNVpAWqTBYHKBUvYPFuJSYw1JqS76HXy5byXgdYmDfGfDLUbQh8E75TKxAVCP3R1xpHGt4JD54LxhCo7DZodF",
  "key14": "4L26zyJZCLibLQtJyK891L6hKFKr4LRqNvB61cLhCMXbLGG6xgDMgiXE7SBD8zJ6gsmLdnp4McuS2ZD5NMoiXLSH",
  "key15": "5qHcxdqCsfs2Soc8PfS1ib6A7EkDwybtX4P1xd5ibMKDzouAybwp8BQ5dfQwkKAdXfKmSsXwqTxVG9BBnkyXoW8L",
  "key16": "BMKPs7CdeeGXhGQN4FWBA7Fj7a6Zt1LVZhHBdALPicbsgHGoRf1YLKjx9kGX4Ux6eLEENvyusWdn2XyFfSSjqiR",
  "key17": "5V1DMuaFLqh78CSAemt9VfWZbFhRbb75cCgid56oMymhqzhPnhyRAvK1tifyHedyq5raeA45w7BYgjUSE4VqyKji",
  "key18": "5v34mmg8rYbQPGBp6eP3j53BrS4K2niY3AS92FogfYUsxcfS9qchRrXad9eH8EBJPc9gVr5zydYtDHvHxiAh5DN7",
  "key19": "5dPhwfjCQ8bnWumP7S8KUJ4XTvP68rb1eCeZ8kLspNBSbuwfMPjx8BwmeFsNCuFidB8qauXSJVu7dQCEwU94PePK",
  "key20": "5RRvUGZTvZEwaR6WamVVD3UXHWHkf5X7pZAofaUNnZzRoEzJAEbuNYpLbnoM9qwuKCtsGgVL7KXYHwH2uRpDN6Nf",
  "key21": "4pQXscmJE8t5FXimwHcdJvHjPde5djyaEoKiPtHzYz6kfUkvUGdwFP7optQHm45dFC1Vm6XvocJnjiGgY58C8ybm",
  "key22": "4Zyx4i6t6mPt1RtGrcQPg55RfvwF121FmLofU1C1bvUfWzgKfAArzhXxtFBGH7aabPMMgH9mBJrHZGF5Uxxv3uzv",
  "key23": "5mo2sVsVebMg5DWJzNcjPv21Ct3bfioqRLVFD4u27g4641muAmwLyp6z9kdft2akx9MYzkCWfRxtCPBDSL9Q6gbZ",
  "key24": "5HPknxvk2JWmAXMqngWZdffEa9rsQdSbehgJaGkfrhR9uoCtSYVxQMZ3oTkGKxPBz2E3kjH5VApTQb9C28LTSndo",
  "key25": "ikMZy6mTQt99FtV6cQZUG6EsJndyWtzf65H45yXn55BJzNoJqYWMgcbxq8nE4S3EmPoYVgEQgXmaSduuVkBmWv5",
  "key26": "5kHyY3YAPMu4reXETunKccDp95NRNxaXQFczEtLbzZM2PxXZUABzKmtL8gkgjoVUukSvJrt7HZFZS3ib8KFgmiuN",
  "key27": "aT5MggPTPfMz2VuPNhQYTMHHLbdSYFkgWEsdWMENQ5LhPJ7Kcvc7feovgpEr7ST8zKtw55xZHbPPJCZhUxTM8RV",
  "key28": "4Np3KZkJFZgSn4PwoSadzT5TwEVmX1K8gBLCoKV9g1hpun53zJ4w8ug7QGzPa3iqodG79hH3Mb4AXhe14ftHLzo2",
  "key29": "2kCNS8quwBL35mrP6Cf6dYim9gWuzNweNcPoMKTUysFrLYmDb1NdMeUQTqpnYneFp4m2rG6dK6LCP54CDX39e55C",
  "key30": "cWhAhN29G448kxJt25pmuxF6Ua362LyZDpgnD4C6yJoBGX3mD71RpJrmBwo5qsvLwMRtWfoCFm4wmwQu74LBL91",
  "key31": "4s7bvu2ArYigEjXHB6pGi4zjmicgBbG3A9Uzw7iYZrwA75SFpZHi34jBuFfYgcMMst7wiRRLMi3gvQa8B6jcn46s",
  "key32": "4346p5sf8LeQTeuxFqLF5KdKApYw4NQe3Apj24BjZBReCzkQa9id4wwWBF12e7Z6fuMFF1jVRaPcvkPVt6Tbqv7J",
  "key33": "5LTd81a225tJdxfepCrBQKCASfXDMDPgzsSV7UkTrwGfxZ3VYnTQVC5LknwXVTdJrau1N241ojJMDdGgAGAbzKM7",
  "key34": "5cpoek3SXgAw1V8BgKSZrsA3u5nFY4aWvZUzbB94QqJe3nJZLzs99pU3nTbyskixjVksmZmVpgPFNyLcq1f5YA4R",
  "key35": "4STiGAPc3Hgv1jd8bM6q5RXhpWUiBG4iW4zxLHfL5KsvN82BfqWPoopjm65jvWwAESFAjCm5NYKohXgfhFNFbvrh",
  "key36": "4yhHGMxFfKGM3MXdaKXBXQZag3XoxQaDb5BdND85w4mCezQWiNdMVtzgGsXXV6oNafbpTrsEJwFqDQ2Unhk15FxT",
  "key37": "eu6F5KNJWMxE9LWjfHPCK5pDDz4NSinqmfpE1idvK9vuf4xf7fBkEEzrUWhb9VgGyjVqVNXuXcghxh8VF23m7ik",
  "key38": "61U7ypMqiSzcJSjwrpePhDPATT1aXNMgjLGnBQhsuzmHxWAiwH1xy87XJ99fRegDD4XVVJCDfnoShqTXhv5dzkfH",
  "key39": "pSWQujmrK4vTZpFqQrj1r3BKPMtmzvJ7JiKLScCcKFtMa5oJwn2k4bRGSNrkCuC9FNR1btSyz89cXU9jAsHuD2U",
  "key40": "5AhhiRrqrBPH2uJj8nk8bRQRC4gwRtfcBbqTvBjVcFjARvx36br9EXeSFHRoB82ED6tDuyMzYMAAMFSx2sHcCDKa",
  "key41": "3KC4eN5D3g5hwMTLj8j1kht52mzxJAXuanqcvnscvEYAjm54XzqykSCu5jEyWL4dgyzaMbSEGDE5FUP8BCNTo11H",
  "key42": "H1xZmHpDjNX5mmBBQfpqGYPz5ot7SXvMH7wDMR1LhaHikPdJhi77VLzD4bDkiFtVmpgAMegi7iySS79o5nLRA1C",
  "key43": "5DeaV3GUvsghKudn3PQuacoRSwcX1dS3TzSJw7VYzYjoVmWPDcf9AfKK7US3cVKP373FwipEe7GAiphnQLQ8bdnm",
  "key44": "4gHuVeMMmn4L8V5zzdWoZN49oTmB16WQBLFcC6uT2AVmsK19GJqZgH5UfScTrreAL9MrDdmNj4cqyX6KecEhcbeE",
  "key45": "aPZGCPiyUQ4QqUT9NWNp3HcHcNfJqVD1XdqoW1ddLbPPU4yLTu6GdX54uQ3NUh8P4GxDahXr2UJVgk3JuV6oMAs",
  "key46": "4wTXaZw4rVHxqc94wZHzMuJJFHZ3k1VRpAtDC3qoDa872HPCcJAgoL1VRoabtAT78682fijm4jBCfv1ajutTBKDY"
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
