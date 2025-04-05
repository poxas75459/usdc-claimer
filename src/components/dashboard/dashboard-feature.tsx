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
    "5qF1Uni7sYwRrth1BPMfteh2ijbc6tucvALdKYuFuXTTw3cuJdwyooYV7K289aY7CZTEEzUYAtmhxbVW3RUc8X8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSAm9jz4ZC5rzF2sbWAye9LH3hSExvx3xznzPH2cC1yFnb9W7gf9UTdK4JNsAiCAh4zEeeK5LCndYhpiwfkK7Tz",
  "key1": "NVzmZSgJc5uzffr7GAM4K6tenBh2wGVVfscftbw5Ae47KNqQn9VD2VphM8UTAMn2P5Y9ySZE8iMypd1uDfL6K7f",
  "key2": "5o1LpMBwpnzuAHuA1eKQcDTxabEB6S9hWLFCAdFYNkyjbWa3EmhHuoK2BS4pjdiNVYS9kue5vLePAwfUP6UWoDZN",
  "key3": "3dFs9GvE5SdmxMFDdFRyD9HLSvrrDKgnUTFy67H42cvMSDG98P4j7rkNohD6hhA99SyThQfuJ6PAc7SzNc7Eu9nn",
  "key4": "5Srg82mU4XCpjQw4X5p9Piea6k4WruhgtmxHVWA3f7Y2FaxCpU5wtS4dtTi27QL59q3GTmzZvkKNMd6bF2UV6aVY",
  "key5": "635tqHa3BY7eXCUtpBq3zvt3my1AXHKJPKcS7HVryPKy4cg4Ghoy4bi4UQqCf5sdikLStHnR32HftMWQRBcC4e5C",
  "key6": "2iA3YDKSFCoKjCMDohuxVLp4TbV7M85kidURia4gNLb7j4iw2c2VNQyNdJZsRBgYUT3qbF9kCxcwWjrYBtG5ZYR7",
  "key7": "K8ry3Y9ftA8qUBTTMkHm6mjhdDYnjFzCL9LPeKMD9SvVq2utTxYZqY3D4DbpWbTMbQYwQfVfHM2cNGvmLu2SofU",
  "key8": "5RSskr3cQoAMckbWvKE3nDJs7wk3fM9PcfXNUvCdrWJagdUPQrYGZY8L1hPzfKmcvvBsZZDi4yDffgcAnWkzgbPV",
  "key9": "2izhMmRvQ165Xqz55cednvYAQsxWSeteEeEHbTusuUDxyzB5heKZCSUAWbcwEBH3LYwu4jzADYHTmZ8Fd3bf8NwQ",
  "key10": "2yHnVxJEsgnzUogivExtXbeKhHorjZY8sSkmRN5jtpE566pTTTSAJ92MJ8oYm8sDDiLo8ZqiN6rkmfbsjQS5ic5G",
  "key11": "3NtLELbW68nGpkMKb4xRRafX7FWZKF8yrgkuMLiquWj7ebTmxRKUbCjB1h5wqau98GLNUjRxHoXvDKxpaVL7brmK",
  "key12": "128ysD8oRsHcYH5odgGoibSzD1ZFNCDffx1URBRWqoa1qVxTjABVzGc6EsNEUyweFMtDEydn3d6zkALBVJzGP58C",
  "key13": "m3ACTBvLxJpvL7feeH4sk2C4u8om6QGFMo1pEd99i6uiDWXCH8JfY6GAcng8fSdQhm37hAJyje1wrpH9gsnPBF1",
  "key14": "2pKZv67tQgRpUTPrgqPAPngQ6KX9UQvNXwzSXknT88sCj9ohJa6djiPhxjRPAbTi6nXNLnkMuAZrNoXmsSn9DYuj",
  "key15": "o73ci6d1HGDJtBjyZmWumtC3c9dG4z8YshPRdcLxQKVtY1KDqGxgMKFP4thPUb2RjXp1wMnTFSbTNsBucME2afz",
  "key16": "2ojuksJLoVdp8Mt7E3UtwzCjgPbRwnjB1USj7AtfJaip5BAjnAkJKRQJxnxbMUJAUyBxWz5zPchqNJgM5BsYCjD8",
  "key17": "4sWTSxT9q4h7A4kF7945MsfSMvhFTPoXw2YJN8FKWGuPmijnN1ja1LDtL9aZzXQDoL6DwQtHtevY4sm8o2sKz7Xn",
  "key18": "iPQ69PTuPv8SN3T4PSWttvagw2BcQMf2RgkSqMh54b9uX4tB9GaDqKfxun2JU116s711gVq8qYBysJSuHU8cYzn",
  "key19": "WPE9PbqCqN33fwBesefGQuvHLWdWPAyhJJWa3vmAtmmUbpB5jFDEvgFexhZ1XWrykGs86xcX3Nv9ouS8eWBTmeM",
  "key20": "MNk3G94iT4iBg7fUeVKd1zh5sS3RtBAJra17isV5MqufmX4RAReP43sT5h6nXssFngwN3PKBu1RUxvEEmnnhjPW",
  "key21": "4rtEWNaSR9raTzZh43vJ5YkT8N1LMaWc1oiJkx99a2Y2MwmWK35hPcLeGv4zSzZhtgVUKbrJFid1yrFnyb3k8zWX",
  "key22": "2K81WdH3FF7PshoSD8xPm6CJv1qah5xh1iZT2EVAbPh5BJUS73rVmseHCG9GN8UGhvvMEFpXd7xXT2XeYPKZc914",
  "key23": "5nmDhrqh7GknS2egwnnSq6W8CYhWMo6LxhoNHdyyMHEzj6ir2Xz1VsRkbXydkaMJ8DgiVQZNY9bBYWL3KCp62VLM",
  "key24": "4rDZtB7KtNPcMfMX2ZZA8CEKFid7AVYnmNyAxcpyDUh9yEPJYzsjSYxe9u75r8fsTKU34qEzvwUcuZ7JkrTam1rE",
  "key25": "5xocoYMstqr3S6nbRijW2sQAJYSZVuQeKcPdhi55Hi6HZEyMN9xRDy2JNT7vEu7dG9Z4vNKMnHGYdxZ9STp2HWTX",
  "key26": "3FAg5VWF8jh3Mu2uhWvAH8vqAbCHFEmUSRonjnLzoscdTh2i6voTunCxHqd6eXCXUA3PEvduJ6xpzqnNxQ3RGyhi",
  "key27": "2HXCJB12CMNz4HZ6WFYT95xfpwn9dYi7wTcsuidTFndB9qDyHbx6xbM1oZPDReNUb3hDBuc72CrKNasQ5vibVMqv",
  "key28": "tUWsdTngCXTXM7Hw7Wqmm8bQ3DTWVwbFyjXueSRM8gicPWJFjELy4YMLmPTK6LrsCUxiUjuxvGDbcjFaB3iJEsd",
  "key29": "4E7MaxZFubEWVfgm1Ki7Lm7FLocVQPSxpUpgertiGuDdx86JaepMBdh9queuCyUxbzHWDfEqWHvFpwgy48TSZfSu",
  "key30": "SFmPH2CDEWNt7HpWCTCcog5jJezbLGV7HX98kqPF4JdMxjBexPhhCvteMbXFjKoVjUW98nC7AKyXgzGVWfHP9My",
  "key31": "54rZpYaTPk83i3zYKAMBw5R9HoDDGrkYZYVtVSCbd3Ct5AKdPX4JBD7DN6wEHgTTKjfcCy95WhC5X1iKsVpFetdo",
  "key32": "4AZUJRpMvx3oKXScTytG8ZCNPtFG8pGAzRVXEYQP7K9YCCryjeLPU6ARtcMidRy7V6eByJ36LvDShysAPraAX9sV",
  "key33": "3ySJ4d5Yko7jukpx9MNgzxpZnhT3wbJupjhNxi7PPCnCxHstkeSQEVL1VjhTTpoRiqmjZqySqetk48qpP8ZYZsQf",
  "key34": "5Zr5hBsGMN65zg8PiYKhCxUrjQK9Vx3cGjCTxGCj9hVXGAdZvNotJkTVkSSm18w8tQ6DyoguxTXYW4ytWz886xE6",
  "key35": "3wvPUyvCWAQTvi3mz5zWwJWaeAuYic64PrPgeb2fWcenjMVRgU13Lr6nYZ6P12T2SXrkgKfnCbXFa1TYMuMhYHZP",
  "key36": "5dxtNGzsVtMAZWngCXpqC3827dG3Vv6vS7C1qF26jbcBq9ARUbZjbgX7Wo8qXmswUFzh1PZvGutAV4KXWKxESWxs",
  "key37": "3CQZT5LnLgywHxyiNK8tku5mFdRKqfRFmpvrnXVBrw4TZ5uUFccaEewuirQrxCWtiCZLYgDM81a3YnxCJVfsUGsi",
  "key38": "SyLyY6F2qyRnGBA8R8YdkB8dbdAzokz2vzmUs39RD7vSKGQhemmKLuN16FpTwVV3au8e7M3Fz5N9MNn2MGmJevt",
  "key39": "s6yapwaV41WcStaREz7vtz6YjwWP7BVRsTuZZSStxjsAn8beErfuJZdFo6ZsiNZPwpqCygrv8tkKWWfZhFRENVX",
  "key40": "3ThmHPigSWNEakFpqnton1LWSzks89vj6eHEeD9QgkKh35iJfv5Jn7CtGFx4Q5EgoDpo5t5v99utGHXtuzdt5nA3",
  "key41": "2CDRJfweKjtoHvJCAtXfYLtGmgLoKewUzt99STBrNcQHx9UvubtzNEtmm1kcdMBHyhZ5hhy49hrzGBeQw7vsnp8E",
  "key42": "2LB1QN7S9Kb4unoDiMY8poLk8rwALpH7X5FTVZb25ggCq3hisLcciMMV54NhERkgPAgc226hHiN8ijJ4JfrwWk3Z",
  "key43": "3aV2CwvqmzT7dokWUo8PBQ3PawCGFs4LAw4y6stkTDLg1GLoRyPZUqQS9ZBDSkadwC4cPs6c1MvXJ6xR4WiFzwmx",
  "key44": "CAhT9tRQHbdsmfbqtpKwaV61YZVW57hywaQi74BzAuHKPtfaksajnLNP3Y2kP47RsruXv6a9oo5x6QApGc8wHHQ",
  "key45": "2437bS1exABrWk1ed7NRdUm29MHQ97db2uiNSe4NRnvkTDZV5Vc1tHNuZ1Pa8bigsFzoP22qwqQYwV3xqvjtcEpT"
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
