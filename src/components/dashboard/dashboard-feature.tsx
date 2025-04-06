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
    "2v6m7py4sGDq9eFjj6uQ77rUfEqPmcoMwH5nuzcLm1y6HnYRvPd1tKzQkS5hEdEgofMpRQgXUo7Z4X7SDNZofiDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4UPnsaukujEo37NAP7oWUrcYXkXH9hfRuifsNLR6Ggr4B2LanvuWKdDjaoJSgGuVXzZKM99bAecC6DL5SSTtAV",
  "key1": "2NYayCp4yNpPSdAhZxnt5dFK3kiLKn9K9p4j2a16jx1VNj657NKMjfitFzRhbNcQJowwtq883SnLuvmh1cVZTiu7",
  "key2": "3z7Z7mnE28ZHf4CWjZYr57a24JnS8DjZccrg5Rr22oCU5LNHinzC4LrCEHzgFueNDvKtSFLn32QmqogWVaNEhtk9",
  "key3": "3rvrn2eEd4iKjLaWXvYfYSuUZkwcgMVBzw6jTjHr5dDbTx9ckYS2TbbDabV5yLay8snrNncujcM6keZPhfhwpLGE",
  "key4": "ppSoB4CtXA8yxmLYpzXUCde95nwXncXtCayNNpd8tGSvwdvKqcLbjdZEMHyGX8hNRJSvGGsdA7izgQtnAteV3WR",
  "key5": "5U4ACvPjiUqw3wfBGsnQwrYG8ktP4XW4Biuze5uiPHPm112WYouh3Dm4aMio8Kv2WeRDEvXLZS5j4emKyPSEo4Jb",
  "key6": "2KjUmRde32W7cDtZfPqqhxYidh9qz8wPaksL6JpsE1bT3FFKhsNYZA6NtLr5r7UDbW7YDEBgijRL8WvzEtq9BRZh",
  "key7": "2uZhVoNk5WA1mzDmSL5AoDQsuN88f2fUhGwJrNAmbndZ932LdvggPPWsuC35Z93XXCdweuaHsKgp2sfrv77n39Wj",
  "key8": "B4iW4tW9XPEwzr6ip5GPn4ihA83fYnMxVQm6NW8cvrGxoDLTdTnnCKNU25RERveXeYmMTgUEfopvmBzCGxmy1TL",
  "key9": "4iVVdasXoWGs7JmD1eCCVHnpfffGKWVF2pbSWhCPF67Ks3Y817oeTdqTrYLHQT5z8f21kcYtfsEfguy2TecdUaGK",
  "key10": "3CdVZeDHhtMCMKzsY7pc9BwLGMWSrwsx8vSvZY7vQdBbehBhyaFdAukB39grm47Ri6xrp9P4U8s5UhC39vzgP38C",
  "key11": "3xPwp57GyvKXbZADwvRZFadSsJLkQ8g4JkJogC4bqwz9oVCHxbQp6kb3PauZtpESkLinoV2UZYcHRg5wFn96wX9Z",
  "key12": "c2ohkpWZBeT3erV24mQf2Ki4SntEFX5UCDd9Cuy5ZTBzLDf6123VR9pHMbyDW8mDKXbyCwh6XWkCTSgTEpcPxVh",
  "key13": "44grX1vAqW9tgNpn76KP3QYRDuDuCfQYytfjsPu5WhN8MAXYmbrHNHzpBef9DaLcrBfR7b7wZeuv57fZfiUvAGwP",
  "key14": "2wYKaUdCPGCPTenHmeNM6kSCwXx37sPbdpFvAqgihSwbNqxCmZnJKHbY67LipJ8wDocmpy5aVTyKrZixpZSo55c8",
  "key15": "HKq4o931tWTwHB8VRhMYaEoB9JmZ9BJHQP6paaWweFujNYGkZvVxc253SDZNqUDb65H55p3XH3J14boMC47FY2w",
  "key16": "5je4fTtkLJV41LVEQeHnruzUpqDxZvVpZvemXSLGcSQFfTLRAVewqPwcTcAW1hWyjW3nrTQ6ywRPQdPhds9KgyuY",
  "key17": "gCCrgcJb8mZ4AM9qHqjVkw9tTWTJ1SHxLXSkTVRzutyF9qhVyVjySqVCziLzG2DrLmAftjTfDpYt8Mnk7bvomEU",
  "key18": "4dRrDsVJLagEuRm8xjzNTm8DyQnCkxRV5aGp8SBao42gvnKBH1nDUVsqua2n1xWdZGZ2rF9R9jGsjQ1bv7Jyr1FM",
  "key19": "2qDMfxiKecBnV66CjSWdE17jYK3XtMVTZTgSW8z9pma6dqo5v5aRTgnfwF3QJd4fsgnReew6C2USkpwxpVcq2ciS",
  "key20": "4pta2EHLgmSDupHxAjJJHLhQCbVp2LXoCThVG4BfVYgNCfthNDpiWZB52hYizbd2xDhfWVRTC3fuKZeASpBCfa2y",
  "key21": "L2GmSQhecCeyBShAiZBwnCwGWfcPQ9Jsq4hhzL5NSA7eL2BK3fqnrQ2Zk8q2jGnznsGY8SsSKs7gPDk547KHnbc",
  "key22": "UakQgQLUSE3YjvggpEbMaJAujZ14hZtpJJTsHMe62YnRY12MD1kkDgN5C6LGoTJpB63F9ftFrfdVZencTahMxWq",
  "key23": "5id51jap8RAHk3QWKXTZrBz2WzeAzXiCpZ4zZa3QcJs3RmRuwqq6tTVCeQXSg6HFzjA9u5GPSBZnG5RPkpKE1yVm",
  "key24": "5Q9XcRgyXUQogceJZzMBZPbryX8SkQPSoJUyvUeBchauKxv5VnFRUdcShqwWS1rFvocWHZFhHthMDDsbBAAz4nUK",
  "key25": "4TmQzSrvz8wDzzo9zcLy8Tm23apfnpXV4DAP8a81jAeCXSYoyvgfMdXYs6VFMzTiLT9PfyLQaPpLnwY9bCfNpbMU",
  "key26": "2RjmHHNMKLWLYAXKq3hqxGiut7ipPtkZNx5LCGr68fxWDJtB2Ccvmx1u1cL3cB4yox6TJiMYjAEKsKQ2s9b5wrXh",
  "key27": "43s3h1C3GYVdB2mpZcg7bwU8SAG3S7GiHepmZL8HFzhEVh7qV5rRZeeDo83TnNQniMExWWaoaPgwKQhFKRkXS31m",
  "key28": "4GaiZQN6sju5WoMqeNhzfwnJSTvbS1w5WDhk4MAJXVU3T9TZzPe2rHfWRTxMSQDvMM31f157wQFC5cBW1Wv5YtPo",
  "key29": "3MLjQaeCV9h9GJgjhTS15qzciTZGQNNYrS9Wc67coHTDREs4K3xp7NVWHtbYkyY9B3H5km8FY7NPoYBmBVYt4HPU",
  "key30": "3NYTAfTKkMKFGTe6imKEtXcn4vPM2Ad1UY3otqqrkeQyuCsTWkdw6MNq6jvgHuormCqdRaQGtiHJj4pkZZLpghgw",
  "key31": "5j6NVW8E8HRNQ4ntvLHSzsNbavm2aHYALrJM4y4hwjm1wfUkbMtznHZeYqmyMN1pNfHtxKiKfGCqcvCdxfciM1wf",
  "key32": "2YhAbGhvPZFdUb7LzRcoRgMtDcDwY6FMJJChHhN2UpVcwsNJZkUvtu9zJ6XkjxVeS7RN9gQahirsBPpC8CeA5g9o",
  "key33": "4hDwsiDLMGBTuND4Z72Eqrn7fzM5PK8MCvxSyejZnsSRHRAZBhnSAZzjPuhQc4nGJf6QN3jFHGvKyrjfBBtXmpDV",
  "key34": "5FTFThk69Brdwge25YVoRhPsL9NDBUg8ieYUXrWS1BPbuUxQ2Qk2RsVpJLC3BhZChyUR4ca3pVpj5hwk35BMo72w",
  "key35": "2dio16nhn9ssZ2ep8vKF6wZXnEU1EYcVSNhWdMQnzJGLm3x1BY2Aza7HzwgAwf1FTYDRbVXguvcCt844gTJjfLoX",
  "key36": "4DnShFyDSgkQhDh8B6doqQVzTKGdti2nTb6jXq7daBWss9E1TsmoK5curq2u2uGn9yUcGF29oFH5aiY1nGCvdSnU",
  "key37": "2KQPdUM6dYzMijw49ReRWWqEXdWrbY1zZhKmW2ALqPua3op4WGc48JyHcdwcULqihvXFqLmKJWchiZCCAkrkXd8Q",
  "key38": "221GHNJ9vmNXehjAi1xuEKqMgAhfSRdZgWG3TWYqkFaLfx6RhbwZGLzLVLywxDiED9vpAN5cVdU3ZUmnuPxNs8cQ",
  "key39": "36jP2bE3KwmdRG2Xjcmz9AwMi2Y3DyfaYeGX8ZdKJkwfnTv5WmQmkSp3rNakGe6Ao26xQDokyt346GAUyqq2Bydh",
  "key40": "5LEntrJoqhB7t6d86w8hpRk52ZB26mPJx5dm7L6LU6apUzAoMyWPTSrh987FySw7hBmgqx4DK5zwaoPPpFnecUh4",
  "key41": "47YdRo3b7aNHn5LA7Vpaqq4h1vS27V5ceBQs4ct8hMdTCz6ERYY7oZTVgG5bwJiDMYbdjmM4batHeu63FRq77hYF",
  "key42": "5LGnNzSbHLKaCPkqhPQHyc5efzENK14unWdwnhSnsDLof3fCHAUJYckcWPntfoKs2uTfnSpF3J2VA4EQBm9arkwh",
  "key43": "h3mPtbGxbfZhU42J3eXAiSpZkgUswSenJw923iNkD6iT3ENncsMpT5VfUJQoZG9Dm5UVTiTt46UeYCWuDdRD24X",
  "key44": "4WmoHuoAVYL7Vt96UFYhJBtrJsHYyWtcVARpTLHykp2ukY7aCVJh5is9bRqsN2R2CyMWE7FnqTbXCAm2nsaJvPZC",
  "key45": "29BY3N82sxG2quuPPTU3zSCpRVfsBTsn7wyQveNDvRYPPt5gFfwgeoAxLeXx7N3H113YvLiv4NtY4BCZg9DB81Bz",
  "key46": "2VbgmFcDKW3DFMg4t6tdMuqUFdrwRx5gr4PwqggULa2vqqshcyZWuQzUgbSH9jgFYyKxVUKSs2CFTFu2Fsg3SrE4",
  "key47": "cZmtket17AC9JM6pDXZBru8tyzwEX2ipZ4F7TyaEWFcir8qqzJtpfhFnN3dws9kR3wFLgH4MZsXVyGaGX7bevYH",
  "key48": "5BbDzkUrSLJyPJFnVjqfTYniw9GGJXChpUQymoqVo6pQ2TPgHuAUJx7L732Aaq8BxD6UMYQXxKeHLCG6eVRuYGbm"
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
