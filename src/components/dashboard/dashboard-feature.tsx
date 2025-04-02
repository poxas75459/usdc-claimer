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
    "396KFdJw8Bhcbcv3kGc3Pxrej7JUPpM459SoEyFixscTT3XjiQoTZHFNWdYcdNKHVGHxs98QApVh2GJAhJGxDAQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUFvD7GRYDoRJNkpjCqrQHZkRT6nM9UQYnQQotN2fyrNDDBVYEyWKQBFpcUr3PrPGj7dA1EPBaX5w5KbQXfHzL7",
  "key1": "4DVZt9bdGk7HLGZReMjH7zpBV1PRZmvPwJNNCPNg8jMGfn8VvVLpfXyLtzSyvWKy9JnA7Jnj32bvB6y1DCHoAk7w",
  "key2": "5fLbAHpcqfxrLn9oBLewSHi1ZVJZ3Vs8a2et1S5pBnyitASkJoQu4Ezsr9UDarpyoRS7Ftg8pu3L3xtmoPmk6dH6",
  "key3": "3nnuZgV2UWDJsf5PgtP3ZKQ76jqrm8tEz6AGZaXMNi2YuieCkaLdnE51BqeDAMDe4rfJmcNq3Gjucx9vXgpd9Hc",
  "key4": "2KwwTN86XDrVrVq3LcXci7RSdC5R1LxzJfmYwn1uyqXTSnJvZnEj6pkBsvEm2TMXHVscbeDrg3mcsEYqjnPogiFb",
  "key5": "iVixCtzeoQN7KqXRPCU6uaLWnkqZqnSxPf2iD4FTU5s4N1Gxc9rF9HP9bqG8m6cgdDiyyGJSPMT39vpC1gMrbXP",
  "key6": "4hYHhtAYU4XiMT4D5mNWXay6fbXrc8HSZwXBeyXwaYgVZjkQ56gHiJBhHswTsYJGAN1rJUQgPkoZLTWMiWgBw1wV",
  "key7": "5Z2GRixVm9vLy6xACr3RQMyZEXcUvANzBtv9iQT43eoV4My4SqR4a3y2L7sqTov4jsSgAihFFGvrVr3TTuPTpJQY",
  "key8": "5g4U2Z5uUtGdZ9MHXcJfiURuBrHdWWKPsFemePvT86GvU5GRMZLT9Dkg6vSciYvaWFcnBu1xTkiVnDDQhCCEMcXs",
  "key9": "2o9E8TXVe89QwAcNeQBcbMq6uEECEA7ihte7uUyHVzjiro3LJYZ1cJnx9o5i1TMFSmFcQQqwqEcR8U1xHDfcEWZb",
  "key10": "2CVdA2c9yzWDhcySXyGvaUviF8fLJYC1SJjp5GzM9tTPXiRdduRN3o5M8gUZtsXKjjwLjoQk4eKzFbw5chALgLeV",
  "key11": "TLahDwKE9JPUFdbL5tnxZJiSb2fdd89Ed4RyZC57cQvbFTELk9NrMYhj3CMjMWG8XnzNi6EAkKFAdHyvuehusvS",
  "key12": "5ChHa6omeQJ3camqqKFbTT2KMy8P7J9fB8kKmojkuYFKu3MaUWMCCWZ3KGU7Fouaeq4G4Pm7tZj9X3PxTcLYtR1p",
  "key13": "YECftnzh2W4WYEt9AvvPyw1RkUcLKa2juH1iqoAbxsLi4JTihp3ojX7haR4DgEjm2TMP86mZGkfQjHBp3QyzW3T",
  "key14": "9GwmbspWJ1t7kHUwkD3AdhaofQbBThdsM2LQS5gCex3ZvHisQsMYhYkq7mXNkqTXFW1jr461DMeKLDppLzE4G6j",
  "key15": "j7A7w78mKwmjXJAzag9GZghH5EjR2UmByFp1f3HLUi7CexEeUBtCukR5eoa2zXMLSR7cRmzbsHjXVfusMWsbAMY",
  "key16": "5FZXZtNFeDWhpzVewcNYqssTJcytHbgqyxaWHpGLfT9eYhCQKitq6t5orYAnPJodL9sJvtvBFMFi5yyXnqSMwNfd",
  "key17": "57LKCVsaj4X3VpMwW4rqjzrzFBYqb77S3eMV53CH7qs9ygzJRdLFdV9dTjPrZkjZt6MG8NwAQiCPs47ByJGKJPvn",
  "key18": "676n1NaUas4FTj4TsU9fhzFM29z63q5P7xMe4SvykvW2wLNtCK9kJiR4zv1Vuz1qYT2GQ8ZS68ixtW9fsbRdbxYB",
  "key19": "96WW1JUVpoTPSgXaYxrLayiUTWDDksV9hgFQ49fNAwffBBQusxEdiFkJumQTBZiEXtfmmf6Nr4kbKgyLtAJruQj",
  "key20": "42eV8WGsNHp51BvTUbU3ey7LGuvCKxUTmVVRdjrUsH2FynLhgegDQrK7sMNjzahfMbi7YnTPCYSEytrh1eXZHr3P",
  "key21": "4jSTVHpSuVWe548LV1gFqA9tnknXvopLcBaT5R8xiWSmDFQoSi7T42hngj5ZNvrfFf3WjZwTwHKfSJGmWe1bKmT1",
  "key22": "3QkSzimP94vNgbSoCcyURGxe3HprNWuKfjjAbo1fpaRgQd7fcYu5Uof62rRB92c5DW8XEeyg7cSSs5uijJNC73Pn",
  "key23": "4MLsBUhSoTHsTh69rdrwK7mBg5CKDQqgsQeDKHNTWoQ4tj6g6B1jNLntpQHd9B5rmozV38rok3JHHJpFRJEh5ZRo",
  "key24": "2xptus9MfVGZWgjnwkH9UZNh29dV9cUEWxMGmzRy2MZQg9MTCf1zR3uqNjfSxhG963DJxJP4vUTUGazykFJXxi7K",
  "key25": "5579UTaBN3SBWPNTVLQLT2hRL5Am93aAFZMpTfKGcizAoPUd6A6HmGuwtbmCb2d1SkbRdKGoBUEtjHDi2CUhiJVo",
  "key26": "4i7S1q8fka3TNxUyzQjqv51Q66hcCpedYZjKxjaBKFwCBjj6DNvaHEDfF2wqSRsBeMHPJQiVopPKjacQRQabfur1",
  "key27": "4HiwK3ZaFtHyszUsEz31fmMWPfALWd4PxYFix9Su6iE5cMbyDgMLUBPZHnspA9hLzvJpYBVmgP5Nv5R6hqTcSqB5",
  "key28": "2iq2g2SjLoVcVgLqhBo8NQMXxsrbngkGcGJZFp1UUFRFQF3yA9YtMdeCuAoTVbwjj31sNJQwsNV8KDDC8nZnP15u",
  "key29": "4DMFE2QZhMpKHZ5UFqoaPKAN6Ye6T4ab5BkWceeVh85thf1yHnZbenXTcDxwhZXtAjwmMnwNL1EsFbkAxGR3kHNy",
  "key30": "YSkBDAcXqHsDFH9wanwKAzxncrL3hAu1rPVod9xaEY7mEPyRrMwCvggrom6nPSznVNKFGj5tfpbvm7srNnwV7WZ",
  "key31": "fEgkuhydhdyd4oZQ3dmKKA4oRi5rYAoLevSA8XXsFQQTfDpkDyLcTvQtHRwqGFj1y8rWcPqAtUvszVkPWqx7St9",
  "key32": "3YU8Jak5Sh5CMpFJAAKuarfvJLrURMkFPr291i24qt4b7iZ41cGySyY867kMFmCcP2YLC7qzsdMebJvo2jz9Ujq4",
  "key33": "UaAM2oWa4TuMh5VRZfk2cXVsb6dBSUZHTrC2k4a4muHVPXhxU8KQTpLY3rNkhQEGAojS82BsS7kuv1dvi3ohxUB",
  "key34": "XBfD8mK7xPd24AistKfMrjJXAvGGgzLfJiYUMaWYXcFezPi5ZP35e4MEZTRPePg9pxBH583tJsmx2GgQhqZcu8b",
  "key35": "3mF3XiKLn5vodDrDwqKmdbf4BJgtoHNfQKyyUtUkthWmAjoq5Rd7mzab1kV3DG83JAQF8mtq2EMUn9geZeAXrDM9",
  "key36": "3kkWMSNcrfX1QDBSzRzVqBfwLf2TaaYYkv2rFKHQN3ujV4ZjnVMQ3wS2wGkwbvTdthNp94eF1BHDKRrmnyCkmeco",
  "key37": "8m1D2E2jEz8he9YBAnBUQTKEtAW9YL1s3HDpXZ2mmvPekRU7PnZLURi2EQBGZYnaXNW9ba5RowdHjTp5LepW7AG",
  "key38": "5cYFctHRCVAp2EabWakcqAebKPpRi9fRZkHAyH9MKed81CBbJr3Ksre6zJES9Mc1NNsyaSqWct2CwUknFPkhZ3W8",
  "key39": "5k5Ur39q8z66eztmxYAkLdvTDY9kVBstA8BA8nDpxgUMyJsDspHG8PpH4sHKgdwbmkFLENUqrexDjpqKsiFKKUEW",
  "key40": "3AX2nYQDZgHzdjGQnY4BwEDKP1JVFGwPxLbAse3XQizo5kfh9sWBvo6PGVAyGPe27EqbZrRuZrhmzAiPBYfZRWd9",
  "key41": "5g8JLY9RMawXjvoSgpWEtSEohfyN3sQd1Uhx5pPmwtGsGeFSuh4c6wdStAQ4MHKENq5e6Tgsj7RYn1Zw4L8E4Yuu",
  "key42": "4zVCT69Tf1YqcGVWSdFhNXBk6qYpL6y34xQgyqg9C85ZenPcgichLe12prmBp2aFVBs18AvwiymGaZurR91Ebe6x",
  "key43": "4gdrEUzDScgkUswjXRSzrXiWUbbGJzMcjUDJy5frUQK7jR7rCgW9B8BGfDty5AffJGxQ2hFr7iYmr2NFo4SxGSsB",
  "key44": "5Q4fY7nLHHveThuJZiBjLLuXvWSCjtMZrMLMyfqyqskYSZ3uA6iC8rcNpEdUpFNZisvNR2jUM2tt7yo6QQGxqdBL",
  "key45": "epCg8hA14DVDBc3nJvVxnVaGhTgjF8UsB8rSN81FnyU1H9L57k4Ti9fxfX8nwE1xtnjqfKEx8U7oiTfN2S9mYc6",
  "key46": "29q4tDvCi1a9B3FWfrdN15SEYTQ3FYSjrBsWXnnwE4PRm4ybjbRbjsLgcShz4iAf1RopcKQo4k9crMw46QZMBDP4",
  "key47": "WHdd56b5bXSmKKLy7mKJTMixmENPWXLtDAgek3o5DQbPGspF8XVz3bj6FPVRuc4fMdAA24Ejqc9owxZPg3iAfQg",
  "key48": "3aKs7Ke2v5aqXk8TpQE19uYTcC4X7WjRb2bTYCwYkuLDEMP43dA8Mq66cwRBsYoYhefYyeAVPZyqqQwgVxnaGCS8"
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
