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
    "52tPHJyH95Lm3fQ6n7tSFsTv1qCAV8BuvdA8AmQ7t7oK1NMK8YukgP7fTGyLCWXvUfRFn63GHcLgDk8EwHyeHuPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLoh1asPpVsR1v4SxCnjPSzKU25cLJQpvVdFn1RYZgHFXx4iLFnMoyhHNRXryDrGA2jVWfcA6mKK8xLx847GDSL",
  "key1": "4j4kHWzWvmH2FZWs5E7B9KkmX39WHkJXgkbVWysQXVBN5wptQtzkv3r7jtzn2sobbRnwXqMTe1eipvTXez7P54uc",
  "key2": "D6RhhN6TyS5YXxdX26XFmWQdHFNjs4TGkd8vo33paWEGSURoJ99CWmGv7VR66THbPhwdSj2DTNb73JTy1iawFLo",
  "key3": "f8d2K7qKtXaeRqhiLHTVzDDgLhPVkCWEqV4ee4JiACshq2U8LTivabn2RErNeQRoxypNi1bF2qiRe6xpnhR7eoH",
  "key4": "3PEFAzUAgbpcQaiXZR6FaTzkihZuHGK2WLzJ3mPqxR1Ex2xZKqEv9NGEiiD8q8s5gfZvvV54zDTm5AuracL665oU",
  "key5": "4dLBWBA5QrU8bUBExHSNVoduo62fJyYJSmKs5arinW173BFaWbP1q7HvNndY668cptxRuKEJQVhUpBeJTeF5ruTr",
  "key6": "2C8koxtSqTcqdpNQ1JEvATDEjcRScDjityq7jVSFqTPCD8EXhw2zUq7PdCvWVXg7jR1ZrnNEiAMqN3zZ7EZ5bDM1",
  "key7": "4UkWwaWkyU7VHhVKq3jN7brPz1ti5MV4dBVRJVjjPtmghtWuYfVMPRAHDtC1xeuRheVCuLhimcEJi8LseyrqbCxu",
  "key8": "YkLtYcyCzrG3hLrQrwJDcrt58gXBTfJU86boxVQXt9156EE51Xngstd2NyVztp62kG8WCABDhuc5omVmWEpeBKM",
  "key9": "2jEio3ktjM1Svd4J3KSeLx2VbT8shqExXWGUa99H8UcCmP7QFVW5Z8Cd4Ye2K8kPbv1qe8qZaFw1RgawBwMoUe1p",
  "key10": "2kQihTBg9N2gEztvH6bfyrAdWJZ12i3KVGxupGb1qayLVwjjKzrb7RY2AGB5c7wMoX8XF9wFoXgkfmX838kPHZ7B",
  "key11": "4298kEEz6sUuVNtkU6DCdJkQcJ65CDzWSZBFLYy8jfbSVJda2F92ENDejm8srhtwUk5tF2njW3Az1UV4jQoVEN5S",
  "key12": "52XzYmkoeTwnrYpUoUdX76dGD1JGoBqvxESpbmZKVY6Et7Jj9bqJqT5Ye8DrbuEWUrhPHXsJu3sYCSbPkcpiNkpx",
  "key13": "5Ybh2LjT4krDek6ymr2cEZSq495P9nsJ63UVjS6ubj9qJNbkgHV4Qn8yv6PAfTSvJZ3sG1GmBYjLr7YrydkWydeE",
  "key14": "4c68VmFpKYM8ZcVEdPc17fjQw5w2FzjGYzHdrzkYV1EwkK5SUfeFE2vjMGiE8tuJ5YXUA2cy6tAxTkkmmF6ncsg7",
  "key15": "5FRUrPcCn1aPW12B78RAH3j8nXWwTM9WerTxNZ9irmKVW8ngho1zYFSo1d9f9vxv65fc2A4TuviyUtiUsE9hj6aC",
  "key16": "3wgt5GnVqCswZXbh8KWKLoFFJ5k55pK8ezDpzMhFHHHLaHERmKeUx7gLiwBWrfguVdM1fpSyttx2QBz8YnDgiVXj",
  "key17": "3kanaxpxeybggtLVC2t2LsJrUsCXyfbPqavfWSp6TLganuifRHvMchWyvjRGqJJhXk45dNDjiEfWFFkDo3fsQnYk",
  "key18": "5aAePAYeupjGGXWLuz3NuQh1M5QZTpoeJ9fEMuGgh5BcRtSW6ndBa4VheszxtEgZoSvVHHieKqPieqk5h51sMYQC",
  "key19": "4mMGbLtUgywSRrb9t8nCj14K5TvbH2dE9f9vih962hip76UtvaWBsdmmyKUxsmnTVvwXtyGLFsYKcmyDS7WA8ohc",
  "key20": "4mjrEiEE9y7Kz8LrYY3TxVi11CyTuCrru79ps9TBuEa4Q1cGJTYXz31qW9UWkM2rcMhd6pG1aSEBpPcGiRwV74vp",
  "key21": "4DMfZ6YmBdJmfBoUJU1PXWMe3wybEpp9CuKdrdA1HcdnFvpTefmZUW6fYxkT2f7GXMtPGLneMDPgu61mr8eWkwET",
  "key22": "2UGPvuurBE8rVrqJKYwQqSBSZhxysQtygfZN4p6NSnXobA8zbZP7Fukpwi7B6VUc9HDE1UqjhMGouotedVMu7nNt",
  "key23": "2DorBX5G6CTWS6ZNYbbuBUy9tcXGwZAw1jp7W1vHvWPhfRRRKZiL7QiyfJihQkKFGjgTvy9nZofDvqEuWbZqMxjB",
  "key24": "2ZZKCLtoKdZ5a4aov9JF7rXUHZLpkR4rvgF8XvCVjxhf8BcrsaN39L2xRNfRC2yndGkpg79XNfS5m77bGMhQRs43",
  "key25": "5BooFzukcqMfQfguT2MaQVpXXg4CVrM8NdUrKdSxmBvPDWgu4BuDaXBe48WwgwrHPCQTEMhPHHkbmf6rTbsq3gRM",
  "key26": "2FLuVdCDMpr1kdLj19amgj3FZtqDUy9JXv6fZyobN2KaZCGWsS4zsnY17qgNe2hjosL3u2AypEej1QEdwhfjegM7",
  "key27": "3VU3k8qgXdSV7hpSVowgUPn7gjmTabadiF52Z8dVrriXCGBYizNmusoLLK4M5YK1SeHBxbueRfyXnjTtCUHVH4Zt",
  "key28": "5JqpK3acbn8E6EPWp16J9kLe7PQthx2eWQxzZWAqRnVDvNtGKEJwD1NFgwJQjGHFLTBqsti67edq6ZCJhV8kskKZ",
  "key29": "W7a94QoUN2adXsvbYdyzpF5eiAmaB87FKcbVn3Sp4REEHjDFHhL7t3mErAjjiiXKqqQdzvSmF2TFZFu8aqwSZ7q",
  "key30": "5XozXdhuptxbwwzdh7yRLE65h5M6QfpqBwARLsDXm5kT8Yb7EZYgsFwxQSzQ8osi4HdptoTKceCQpstu24VRvcog",
  "key31": "2M42CvEuaoJUt4CjGgdTD8Wxuz9m59aTaPiqtYGviMuLW8DcQPAxWMyajynJW3s9bNThnpHQvhc7jCEABtxgWvFv",
  "key32": "VQGLjvd5uoVZq5Z3xynmqUGCcDXBLbwMtXdxJibnvnK3hcrczre47JxuWq9FJPapDdcA7yNQbfZwKqYQrbjzDfm",
  "key33": "5mr2sZPdpu4szeoPxctjYTz6MPD3nmM5SwWxTDQoxP8XuKpwCdP7ME25GwwheCmuUwk2R66Wq1zDtqrUuh5MZ3fK",
  "key34": "5otAgS8aXa59QUyjApDmA6gTEHS3GyEAUzSt3CW4QP3bdq7tkLa5s4juYwPEfokdjxzGQW3F9jaVaW8CLc7A4Ldw",
  "key35": "3a7X4gX1vrjRzjL2LpnmXdBKVHRGzje4sNsCE4pQAkunQJVqbWPEZ17wT7VUq2CZDfpQ1D7horWqigzsCyiKc5qv",
  "key36": "4EfQRjsMPLHTJSvwJN48CZQfFwNYuv1HLWF99nLs4Qh1vSyWma3s3aVKQUMzWKYmsEoqbZhV6TEdfxUWAt1fdrLy",
  "key37": "3TCTbotc3Gzhuh89DCcEXYXFRtHRNkniQRmC9JFznJmxmLDDpmZuADDoNfRqwQwg9ZJhH6FNhGLrZYDk1VU48o4U",
  "key38": "33wHnA46x72TyGUL6Zfrxq9KqsuAx3EFjqmiQcdrVgDXJBrA7zVAHTT66MQ75r3LLx1LqecLNCHcwtvXAcGYQAdk",
  "key39": "4m7mkfAbNqrMBRxj6Aq4Lxw6U8cYLT6EhGmbCFEHujbKaDoqhdzzMsEYpxmc8HWgCqTX7siTzSAzAT9TvBkFVHA8",
  "key40": "CmHFgSQCNxECqFxnHuipaRxnidXy4uk5WkNzo4abyGY9YYs928MHjHqrgpuvULhdDgAs77eteh2Vv6A61gpd4NS",
  "key41": "5Qb8ox33TU49wpFoFyjB7GMA55C46YN5bv7pPKHhpaedLA6LS9Bh8jJ9knPWcnmts5j81SzNHK2KQzu5g4RxcrGM",
  "key42": "5zAT4DRg4aRVMnHkcgVHfm62BurKF7YzPPi4vQT5PrzUR9m5N3jwc8t7ZBwvXSE4aNooMAUTTUzNgGT5dJFUZ5WX",
  "key43": "5FcfdqPmvJMrVYtyZYahUX9XnrzVnoxubK17JqACEcuQPvQqu6ktwyGhW2yXQoaMM1SKtaHmXPP55ZiQrXdxZATt",
  "key44": "g33BcLQL85eK2dNUNefuRbtb6gyBaYVcW13BDpsT74xAmjGZY2tsKpyTHc84QiicUkMLx6SCpUncGxCNp6NQRCs",
  "key45": "5wozXTTVXyumcdDBGtFaW16DD98hHYStefMkYXVcgszEvuaMkTMdnxWdowMNUL969x2ypTFhAZ4nP5iv1nZ91Rfm",
  "key46": "66EFYdLDf24HdN9D6WdVVMyGfsGnjUAFmgCAw5ABrkv5Ef3NuiQqUKszd5ofyknuNPFamteQYeRFYEouDhPoUAub",
  "key47": "4XJA5LwioyUftQLuDaXorjg1Za5CUzazMTcd9TE9quKNnvhofzgwoMWQBkVa9mkjy8jb8gGzdqExBEMGywT7VvSB",
  "key48": "2YgBdBRDhcxenU8sZyj9VWHjkt9gmkMEktqpttHXsKnPKZSxQeiLR3xGPb2r8EdE5Mi1xmkkavCPVXuQn3DWEfvc"
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
