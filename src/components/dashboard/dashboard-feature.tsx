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
    "38vDTCnM7wyqsRgZbaLE3pxaJKmFhX1ihdqSfmkaGVDMDyFcjR7ocBg29goUDsnrAX4zVJrBmC9o2mw92grgQDhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDFrupBFsALBUKVWMehsd3fWeGCby9hzcNjVoiv9mRusvzbjGGZE5pPmqUvATbpUGdEJeFXosM3EtHRiEYn2v49",
  "key1": "2GLeYRHbtMwinti9tPkWafHEZ7YDt8w2wXyYeRtg2WsVczHGfdiLDUyDrRS4aqXRFifgHDd5kC9un3aCp1hkBvDm",
  "key2": "62Prbyafs8AohyMz1XTdAw6D1Fnrm8193uG13k4gkuH7mzBrZG2NmigmtYo8djUXfDDSzEhnY13zka1AVBzLxRtM",
  "key3": "67jMTDeeydDaHkRpMNbwZoqoWJ35GqzNj7pxeq7GEn9aYDGp5ZZyhCs48CBkx9S3e9WGuc3EohLqRUQMrAg68n1F",
  "key4": "64wN8ft9CFsRdss64dj6vt4rxRuR2vyrSFyRcYdTMf6HP3THFxrmrZYHiHjT1pB6evHdDTCQAPQ3qufCh1gqGSo",
  "key5": "64vxfPdRyt4wNfzWuoD3qeBNzYFypbpWbqty5Z1PSAkL3ashLfyDNz9JMPd6BDN6uZkHvLVmteVBJ312VCsPsZuT",
  "key6": "3bauHkFXhe3vQUGMmgDxnHayDuXC857ZSNDXsEu9VKagcVxe1BrpkJqBmEXmMisLEDDEBjgep7UJ9bvNQkE2fsHs",
  "key7": "5HD5tJdnVEruaeYW6A6F8JJAcxdtyhAiTsraHWSKEDqzvddg9wdwevigyD4bSFvkyWMDDKhsSyLH4bt22VfU7Qo2",
  "key8": "5tUTzJrXLkcUGDLzeaGJ5xiJ8yZK6izHRhP4r1vfW4hCqLMgRigbdFCC2Jr8pod2Up7fw841t47fAzHEyTjqfrWx",
  "key9": "v3PxUS31TBCBZw485Dog219x8e6DQS5KLiFNfRX6cjpCVSsoYA1Q1QhHhMkzDr5zM6bJmwe6ydDwrVF8egjfF8P",
  "key10": "vyTvTsYUPUy5t8EZEd6jUJ45jN8Ed2KGpV8KD1HS97hz3mDBQtDDUDSMub2MAn5RmqzYf5Vqfv4BxuoerRDczMt",
  "key11": "4phZZnq7PpwMUTvBmHqRiy7x2e5ACaVkZmPSwHCib7aCA87eFFCAE7cPyZDi3BR82WzVkYNNGRfq7ZAEdY2291og",
  "key12": "3hf7CsodKWnEpfJUC7BBrYcFTTNd9BCFUKanRAVrQ97z5fZmZiijqXwbjzPG5eWFcKLdTZGd9yXqFVqVNeLpmSTb",
  "key13": "YH3QYGnJ41nNEfCdiiy9HaE9GPWL8hbdSsDydNEErzFAeQYcGjR7Xd34EjkHm2C1qvSMTshU2td9tA6DKywL6Q7",
  "key14": "5ztxsZpNM4kyd1T2f97wNjV3dtM3YY3bCA12zbRfy5ctLe1NS1VtWCuQg42UYsgFt7xtoUy6t7NUXzxh2wKx6BN4",
  "key15": "4ygDVkZragMryHbRkanj28vm2MDjGxiSk34tX7dhk7K3aGfFgBxjA73spswkszECdWDjsEToYGc5a9dKorwSeku1",
  "key16": "36WfPXcu5Jmdo4CH4NkyRwiHhYgGr56Lkzq7GaiYokAZGyLfjVnacdpTr4J8gjNTp7VMqh3hZNDmAD7Bv5m1oys5",
  "key17": "35Ef5JqBavwz9Jw4fnf5e5q7VqWkhLYwjW52tNuaYPqA2nRdEyFHoBUsehkPyms7ttWkavwEmHTGmQXEmngDyQYX",
  "key18": "2ati8Xv1gquGSkCPVR5SnPDmkag6hQ6r1gA6TSxuYjTtHBPtLtUfQH5ExmMP9veR2Dw8XPo4rnN2c6J6m67unbzD",
  "key19": "3XXQroNb5YSgnwV7Cha2ypfRFVMeM6iZ7oGWc8VFRMNwGZjZGz94oNwQkg71DAopg2odctKhwfcF5YrE4VPfyc1J",
  "key20": "5QUpunNpBSi4JXWbdhJz3coLT4abJ8TQfxacZRmrnPy8JT49GhqH8nLS4nj2QTEh36JbfQ1J5bHFeySwyzS6r3i7",
  "key21": "4R5SGptBpKLbrWN3abbmr2WP4iEaYApusnxqWRY6d9H1YNA85vLAs5LKMrmowyzmnoD784VVqd3kTdoW6GtGwL4e",
  "key22": "x7aLWBMYmwfSAgQkAJW6phLpdauXrubJvW4beqVK6ym2Y5N4r28FUwrTTAMrNjts4UA4a9YCzSTjGNrKAFN8SLy",
  "key23": "3Sj69Jrf63xZVhkN4r8iPnRLdKKUV1xc6Sf52dWscbWQCnqC8Z95Uqs3yw79jnHrXiEw7R5AWbLaACTmwP6bGJe",
  "key24": "3nMbGzA9xrQ1RqH8BhJUPhit1JuKfeqrx8kV21CfFpnRcjaiA77ubRdYS2XmwH9ZVo46q2EKhhSekmJjd6GPpjio",
  "key25": "2bckYZLyVzWB8r81yLuGXwx8DZp4B1xbCyDiabvCeDyMxF9WzUCwN3xUT8CrW3qNndJhdyt774vzKTrK4rstLK5W",
  "key26": "3ucJhaDiR2cy7QjrRB2Fqx9gXrDhM3Y1SqXLysYtegbPfjVqGbdhv3Ni6qXN7LLMvhmaDqMzv432S6PZ9A5aSzAT",
  "key27": "2LgJydw7Egt2ku2tNssjzGP8gtfTB1VF4MagqJnX9hvsVze82U9UWahhBfxDtE1reGjd42qWVvb4GgT5T5ui29Aq",
  "key28": "5YZrLt1KrPniA6uV6Ecqx5vfuCh5ZKtpcEFKF9bkf9XGh1ybwSfU7N78aasevy9X43kotw1kdXXA3jdHgP1rfWx3",
  "key29": "24CQ4w6dyyHinXyesx79vkKveg44hkHe7dhyMcrMZr1szDEHJpLanU51wjFJeAfGvVn3cLsFh6roP5BpBFijKzqu",
  "key30": "5thrrdC9hVkhV2y2DQeNiunaxgXo8q8aCcstXQJnodrWi8PqqchvKgiribH5rtiCFkVX2v4EGdF86ztgPi2hWLdR",
  "key31": "5cTyRuFTTpdB1qMriHkGDAepgmEp2pS3Ts4HxxWBSF65yy57ph378bRuQGzFJgj99oSLzAAxZu7did7hdNwtE5h3",
  "key32": "2PTvr5xz83k8WwXTktEFLbf8HHY7tkCYWauSkeGwVgFB3vsrWLXEUBp7DsZbDLXeBC78xgkuhRBPDDcKQCw5wzmv",
  "key33": "5j7ZZvZ9LLPLoRn2BYtcDxYfDM65PjHasTwf2zYRZNAoJT2GGKGWYU4dmAY5PNXvxaSe96tSsKTRQzjdA6c6KKDG",
  "key34": "3UGrzSF8xPYQnQ4bX8agRXjGQXkwj7DY5Ano3qXPvRvD2Jy8TtHXpyDQ2QbBMYQVwnyZ5KV7gZuFZtdCPCtiu9YV",
  "key35": "5V1LYmEft9QLh3nayRNnd7cLrhY4ha1kdN7eXKEemef6crZ89ZjqvGVGKJUxd2VNokN8fpnBPexxWxDKo2Wj7fAB",
  "key36": "b4Bh2eofDTV5bYQpo44CwXM373aY3tGXDmHgSirhxzrn47GFVJyKRwWwvrg6qbG3KHtnLRKGirEqN4wdYnkswA1",
  "key37": "43s5BZ4YWSsFn6fAXn5GFAJiAo4HwbXFkqUfBWG3K1K4G2cToC9NdW2yRs31zcWjJJvWJULPSGvaMk2yMvcyJkkC",
  "key38": "4c6hoDuRUTAgKDXUSLcSWmGGwdpNV7dnoZYBsc7s6FeENoMC9zZR1zj1Gou2NsQkHyKCUbgTvHdrSVvbVkbihqqK",
  "key39": "4xRy3iMzT3gztXfKKV7D5bcY6jSbpaf3zqodkyiWcFgaJCXxyyzcZnHzMBqLRiwzFKj1SjKKbLjdYAfKUSiVweoT",
  "key40": "3eHMVwym3Xu8KzG3EGSy9NUUE8D3FzmjFRos6mPit7ACfmsNkGLaSCZRgwokFoAqEfjVJXZa7KgmVo8ML9qNFJL"
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
