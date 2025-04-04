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
    "2nbu58XGQXeywFwzEXx3tUqUrf9hpiNcqEvhsnbk4gqXPpoXjRD4AAxvn2VpVgPuKJtTbe7vAvGnr12eTpVL1gDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YECbkYWnRuHucQHSy4VcRb4CkeMHSNWQkpWLnGNeF8Mwz9zSWv9AzhDAiDc4G8MDaGCVJrSTKa6QvDhidW8otss",
  "key1": "2wDyusoVZjDS7LeWcn1xn7sPRn1A44JZMhMz9kzaJej1eAtxQLazsVQdwMJVQrNuVJ7iRCySrozV7FVakN73SAji",
  "key2": "5vPAMq5hDEPoPwmQnWAygyFa3wzovXKuiacVwyPUSvxLYm96bexXLAxyY4QoFXdLzUr5hwAEUaf4oyEL5D1a99jP",
  "key3": "4gdoBnGPxD5ZFkWeBEBAwKhp5vt9RADJfNB5C3a2pY78P42Gmew46h3rLF5ZnoKkSkuv6xdMZM7SE5VvH4zVcj83",
  "key4": "3nMWibqWfoYL4PSRiGSg7pY3VSRTRCmtumcMyoMSoLWowbeZ9G6AmiUb2mZvPGPmtm8uaVWjNepk2zWjZ6dg4shg",
  "key5": "5d4W6Tfo8dBT5BQB5JCdPn3j5oUPUVUCu44Tkcknuw1Gz7jfpDYqdv6r5iJRDqsJC3Eo4AyGZi46UmNZgkdgKwFf",
  "key6": "58bhYTfqk2nXmqPpdS6ZA26v8XMPFFc2ZzkcAA5Pn913QowEhQwVKttXDLw6g1vgi2tKkLkbDQo82EVFQUrXFH9i",
  "key7": "3cmqM4Dgptm2PmZKJv2jHaBfq9QjYZTWDJ3vZVMNTDXzvbDogwTBaaHvQSpcbJfZtVgWXUC1QPWBbEHixAMjknvj",
  "key8": "3CLMajEpLZ57cUkAZboGcgLaRTyQUuhwq4HMXmcQC7dJJY4kg9F9kbvz2j6RpoWvoLXAMzpPTPYccEzrbWaZ2Dfy",
  "key9": "5Jip51XpYnV3Qc3dL8B729AbFdGg4aUMbdec9RwcraNj3NUZM1uUQscLUvb1GHYY6XZgFQdPUfbEM45LWFPVCov7",
  "key10": "3yHcC4KNW2KMFboZvFn8qF7bEwjdousHdZUaXTKC8EaXvXmPTcd4siDbB3caa2nDyrP1YckrvaZLT5kchjtQt2SH",
  "key11": "2Y4VwYSo4GJj6Hvf6d5s5DwQTRVKiWfGJ3HN9mNG2Pj98sbaRUCcsAiFqBEdXNt4ds8ufGmjpFLUJ7VbMLyfFQig",
  "key12": "51FFzHwNGZvatWyqsfamoTxeg7vYoPf3AiE9qiHnci78ye92bmpVoYD7nDDf4P9936HwgbjYvKDPyLozj1AFqNr4",
  "key13": "426CXYXWYieis3GJLacRTsSayu69DSmhrJqLnKutg8d56TvVFvHwb1FQiRkrmUBarti1ouCYKnB2gv56i15jyPcB",
  "key14": "5hPHXYXnXFWenCkhAbGPT7nUX2Ac9Kv5Qoo5cXuAUQFjHq3ERgbaebtQdWdHa1zL6GnnRj5eMS4kXNTYSbKZdAza",
  "key15": "3R3Rp7R1YzzUH6hPbRK2h3LrYZW3uk2FEJt2S68Mg5d2UrJ9mgpbQ8vLdKg3nqKySgAxNvHAX2EViHycHp5zAVut",
  "key16": "2CXorWDLgXnJzThdNZr5hXxF2DAsktEbaXDX7sEHQ6H6bFeX3v9AZPk3nqPT69CSz8uHvUr8QeuseyYWSKYgz7iZ",
  "key17": "5UEE1g68G24rc79cMEh9ygNVEfeZz1JzU3Z4d5Zn1U8wvjpVaFeMaUYeyKaGzrtucDFB2KzbAZ1H5WiwVt81QAmU",
  "key18": "5GzGX8Q2noU7ChGoTtX3KHdmGiJEjUNcxpiFeFcuirX3okdkFLEdgJB9cXN28YnbaGroLTEXQyDgKQbLUxneTRse",
  "key19": "3HU1tBkkVDqb29wA8esX8hJej3V5nAPZvAEX4SvCKZffWjeaCWDA5H6smKgi1dFQQfeHDZ8KVm3MCiizqX4F7snC",
  "key20": "63dAubms6RTMkq8HpMGfrFfeBEoSYZ6CfAfhWocQ6qyNKKQhoLwCn68v6u29WzPyoVhasPXpTCTp4Duri1GBhBR9",
  "key21": "4vtNpMGNRT2Uc8s8HsY7uKZ5sjLyzj6KdfjKCMe7xdkNAYBQDqEY8Ds4tRA2mfG9RcKkZFyisJ184Rq552XUmQi7",
  "key22": "2XhfCBFau3RN1iybWQDzz8LFtE7x6CxqjbRX5MMnyEJ3KcgJ7gYH4yUFwbhp3ChP4FTd4tW6HDMxvqiWqzWvhD6R",
  "key23": "5kLC3Uxk6Ax3rqSn7WUk78PMJC7qYVrdnXMPWpCmDcdFxoiK1GTvyWbQjQQ8xMpjRoEEThunvYTmKXRMoUhXkmcx",
  "key24": "39T8qwEK7rD7HUNezbMhzNYNcQMVymBLLmc8mXQoSzXGVYgnEsJzqY4AmJmjb2NhfaX4e5LyaX4ZWSEdXJpKHiyU",
  "key25": "xGJVZ68wv2jQFbdRdQstyEvG9BoxwSucgv9ZHSadswU8imX6dg7cJMfw1a7nnasHBcNa1FA5QJpsfh2RzWRtURT",
  "key26": "4d6J2iDwdrKUcwDXsNQeoAdVUNbwocL8VavS8AH4bZfu7ay3qe49EERMTyr9fpPtWp9emMg87ji5p8VgPDsNC1z7",
  "key27": "2PcNW17D1AS28WG1Tmbg1nKpMjwYfH77Qv1bTLXRFYWh4hDhreKncTb1vtAgoRYhKpecsSwxL6Yk6kiYaMY2Jx5V",
  "key28": "4UQ7ugDQuMJ2x6JxfdnLo9ZFxUFLnMTcQfAsShNhrhedQDo2novY7Grak45YroNaXtYE6odnTiox3xN426taU9ys",
  "key29": "5Ren7xzctCPSVAKmFrDi6J2E3NL7LjEDcNkBLsA58eHrenmJb6yJiNk1RfyVf2H8XXxvRSv6RhGkfWqk2fsJ9BYF",
  "key30": "3SoSm7Ap5PjVxpyUFDKenwW2RwEiwF8YVfFepsMNBFzN28Kr2iry3oHLsAzRWDTssupcEmFoB7HTorwzNncrccq",
  "key31": "5Zg5y31VzCxTq47KyfYRPh9WSSNui8g7TECFazRF9tsAnHw13sVjHw6CYq6o5Tz6VKZLbFG4Nf9RmDtJC7LrgwKE",
  "key32": "4p3jtoPMP4Gz48j7LkU6QPscJQqo2vJHrSTHL91fEdTmU9DGGbJDBZWLY6aYc7ZF8Mbn37vSopW6E7GFqzRNcy66",
  "key33": "CCBHQY3a3ttBty3ZYaxrcXRVaqJKGaatyojAeWkgmwXeTp6kAuWHan7VXu6xBgv6uVf7BwXN6FyFuh7pn2vfJZd",
  "key34": "587EmT8ZbprSXfC4pp1EyfyhEHy2JmmFgwyATviFxko6FBCKrxEPTLsUEW7vhSPapVAefEiXoyGRffgCpxR13PNP",
  "key35": "3d9MwRQqpGrwTsGJsioq2idJfTuSZqxRThM2ZumXSQduQXWPaE3YXaoSpXiPU1tq4f7ZNehTQTcb1KoKxyHFVMCp",
  "key36": "D2s99WNYhxcgPwQECGDWtjNXFq1UEFfvvNBH9AUVXiQNSjevdtPVMFeaEBf7V3iCXechZDGyT92krX4xaxRxFYY",
  "key37": "2gvskEFxvioUhZgiSHoQbrpg4yDU9KNJZPwb66bydWzZi83gNh8dFUHDyJcdb8tmNKC5vQmnMpKCoxhW9m18LWFG",
  "key38": "2t8XbpWFPxYXE5N3MDNz1nMtwkxxwmqmuKzbr5fG9YiRPSqHWuZifUVYKKVSMB3Uo2i1zWTAi7uLx3rj3hhjcqBJ",
  "key39": "3oeojSb9Yy1Xu3UWq792wu9mEKGAr3yFMs1HddcXZaEdAvWCHofAYiKiZKEcMJHtj97Bqm9BiCQfiSNPtbyVMLwS",
  "key40": "5c8cmNdWYScPba3tXJvKrXjZxR31fmsiVwQr1xrhMRWrMTcUzvvnQ7mUvhN2AJgo6kcq3EwZqwxMRBeBxo4B3yAA",
  "key41": "5wbaTtxNbfaN628fut15VEA4qTxFsAD5UFbm9KGCbNZL8RGjtA7u8HT8s56zkcuG1kQZdt8yM4RrQSKGkcR8WEzy",
  "key42": "5fSTRWEp2WLa6FrEgxPbkRFHa7A4hp9CHrnNtwBhDfrkGF818LcuoXkVtj24N83s6VtZiZv9vqyMuwHyMACgYQdP",
  "key43": "2kKB6L2G2DA9bYqoM9CUMv8g3EWCgckpPC796xfv3MJyn4R9T9V2a712twSAEHQymDYowzF4WrMEpxxxjfDwyEb6",
  "key44": "5Fp4Yxsa2eN9NdBfADw6NBHtcKbArePDUJyAx3VEqvghtqJqnXgBEA4zXT2uD7aALmgyFFJANgpi9yQFqiaSLvZa",
  "key45": "4aXWfCmG39h57KotSqX1DUr7k4mZQohZzCYXxXtPJFnK7Lkkvp7R8W1NTsX2c71wxzKEaSZF3W5SLeLjNeVcg8n6",
  "key46": "kjJxs11N2ikR8HcKFPys6AwJmuZeSZ91aSpN6EEWANYVTMPyieV2T4wFP2BMJRe6qYdBrcMkBnahsXVcJSVpofj",
  "key47": "3u2nYWCP9jDtiWzehejADKv1GBWRh4aBKAUYxPqZJ2iuYqJUox687Me3YC89WQtcyz8t7FVUo7goT9MPyJ6vQpuj",
  "key48": "29sCkUY9immxBNUzpbekRtKDYqPMSkrzLqJ2J9VEhtXzvg9mCD81NxmuFutXuu8nMy62mPugmkkhBB5qqFxhqHpe",
  "key49": "2DpMo81Z9EmRYyBpCUTJvYEPNWFMJAduNFAzrD3hPopdoj7pv5xEttCXz8BDbrSjPgRL4BSNTzSKisHSVvfzVdkp"
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
