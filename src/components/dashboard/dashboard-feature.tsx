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
    "3PMp24LkxLfR9qaX1hvMkrLVrGQT6xkgru4wkrD3QYF5dJsGN3X79UVavD3Zv8jCB3SqUjLAbqgbDzL8ibeL2yEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1eEkWvSEgnAavBoZ2wgJsmCJG6yGnnPCoGPD2r66KHXS61Tkmir1i4eLShvj99outtXLtWVHFWCTjskirhSaE7x",
  "key1": "28tj74docw4s6FoFGVSKmbdBZM6uvYDH6tRr7j1w1iocbSPUrVBPbLtvKDsVS4rBYfqCZ6wpVK2aRpmugMaPLHWH",
  "key2": "23YEHA2Y9F2j3QdZeb73cLSuRxY4FYdEbBnGYAr4t3uAtDMnEG1pSYMEQttmvzrnxNswM4Sfjioth28WApP2mnF3",
  "key3": "2LrCVRqsokkWkKa1HgndUrs4md6yju2KmnYcPHLhaRVXzYK1z7NBhqkJmi47RJbgffaVi78gMz7ekefCn7ia9cBf",
  "key4": "3cucPXrRfFXmMiDNy8kf7MMqi4hUT2Z5c3KuwUJrkjkPGQe7b2USWMzvTVXoqnA8oJK5JJmQKsbtw6E3ZxXgZ7ku",
  "key5": "3uUQkp6hDm2LpMoyMsPTKANJEgNy7usUrYcG33DyuFgtgvGHKAPWKZ7UpR5YEpXysmFcVMQNDbgp9ETEx2MejKby",
  "key6": "5Gaecs5M9X4QTG3NbJAYXHnvvurJZkKBsaT5iPLVg3cnbPxuYJ9UemZ2MpUN8StubDCwQ2EnV9478PdK5s2WKme7",
  "key7": "23atvFTkkyNMYtb11E19LxeGJZjBad1b9QyGDBKbpVxYoMzysKPTBPVamrYkyykiRyTWdrTT2jszyywWGWGqC5Xx",
  "key8": "63Xpg6PKYpKeuUEYSmEYUwQc6qETj9ojWyRESJupmC6pvxhMTSNyvST652pQroLbCjhPY7qChU3RnWLYtP6Z37w9",
  "key9": "T1mZTFvVFpBjQXntdqwNS8BVb8SaavfykeeLLbwju8AUxVM82cF6mGRyG2ut57rYCxx92NPbxaCyeX2Zngxe7xx",
  "key10": "41ZTFzX3yQmUKRh8oYGbqxagvxGFsWR7NhxaT38tsgodV4f6Zhti46S2gEbH3qjYZ1jjSE5zS2N4pQijsTAr23P9",
  "key11": "5RkZZKNP8kxyPBtFWaou9HBQy2f6ZimFYAbDbjqwJ9rvnrwzR4YR4jDymWYNd91Lr9mUXGd9Kq9RE8V1PXrvVLuc",
  "key12": "2Xoyt2682nZRuQxk7gFaurWSVeTdqqJ3xEXazPGDRfoQN87NTSsYALzn24pH7DuRAtRPQQLywCi2pexCpeZ4FmaG",
  "key13": "4kJx6KGMw6KpZypXSHky4MWnBR8mZXJRViEYmDFqeNwmBBCAyAcGVgaTC1SgkF8FUv6GwXkhM8swzKNfWYGFbhB6",
  "key14": "4QT3bnnYW4x5LUWDw5Hho47KDej9TZ5k961ergDMARpQL3AwCaLpaHbRiXHksSWfeB6cUo1rBXTtG3CUcoE88uV9",
  "key15": "52xULhQiUCCuXgfUjDmRt1VTaVBfDfNgFpQEEeM8uMBbWtny7VvyKoGmQCgWw4pPBGGfGCb6PeVUFdgY6yGieGwZ",
  "key16": "364kSgqT4hynpW5AZUBJQLf2xgFaSHnsvjSTsVQFwVFuw97DaX4rYRqGUARP9Fhsu4tPUmsYAsJQUss6tLLdbiUk",
  "key17": "5PiSGwhyWZfQMZ5U86KAGo1mAH6ud28V9VHUA9PaGvcRwxgWWsGQHMPACHFr3tspw2yHTLgAqJeAEWx24GNDnrQQ",
  "key18": "65Zw4HnqrPDmFWEzgWbpzs7Rhf9XV4TNtzGh7DZxU5X61zrwtanpsz8qYSwW3oGEgFUUUsWKPwhzu1BpLnBst6tg",
  "key19": "5rvt2UX3ymKUKvs38zhd1TmEy8nDGySAQZVUy5HcbZS1CG3yiJ5UtfuZNwiu5WB7iLhXwrMZsDeM4PggazdvRE9r",
  "key20": "5LpZBUUW9LUeKJyxvbxgtDR2ptogizqwmsUNH9VY5B2oueptDHj8gGJWjSPXPHH85ivdJKPdW7aZiLY3RDdRP5NA",
  "key21": "gK9NRRU9K3KnfbAhC3ikXFp9d3xe1fDThd2EQfvH9rGGgCdTmjd1iwoKkp7rqKQsikJqbB58jsRivz2vugkSQLw",
  "key22": "3CUudrP89YVhFvqTpNcdAff5JMe2aPJjU7asFXmAneSqbRYx1LoCo4aNJLHhivz2FsEhN1mqT9zi9t8AbGrLFi8W",
  "key23": "4yTP7kiFeBmL1Mxj2vySc5s8z4EBkAqpwWUQGAZs8baHxKNtTzDSVdzCCcQwWgT3h6qvhQioTz4URgJHXtzSQXdF",
  "key24": "4JnwzkEi7uvNvmQUurCqt9KtPwjMStzDQCEiyLXzwrnYC3QemS5514tVvYviAAssEeE7pmHmzVftQNprmrKg2gMU",
  "key25": "44k2tkosWbT89uAsPKVsR3x4Eu4KuDmko2eMHtgxPXSg6zt4GkgisjtDu8ZRcNtKqWY3uocU25U8i95uzmnGV3ia",
  "key26": "2sf6YdqQtnHdQe91Rk1DhhmYuq5Jd8GzULZ4BLFjUJk9derAwLc5Ex5YYRAqYDMA6dF5sxRyPMc2QJB1XsijWcHm",
  "key27": "2Vkm8WgzEbuvMXtaf5m3V7do6yCgSoiBj5tcMBnnGhHUiPft4A9e8QRBb3MNYKHnSCkS3UzhFJbntiuqaEfmKVri",
  "key28": "2KcrNfihLiUPWsidRrzLUMU264bLDpW7qBhDxt6BQedKQknY81FkMpp4ybGh9Xutj2kyERGi4cM5GWBK3pPt7tTg",
  "key29": "51RMXCotAuqeePQdTQRHsJKFv1jvmdxPCDF7rfZffLS4c1ShphdSxhTQx6aECpoKzXpRZMiAky6pe7k7un398Jry",
  "key30": "5vn16Tq387ULdwubJBtaEDfGud6ACc7YHofpWjcNQ8BhU3Ye7xMNumwhSFQPhqaFsti3DammzCnZ9ax9jGBcbPrN",
  "key31": "JaYUPhKgCBt6xP9zRx6yi6JBaNgU9Mg2KHNg2C7AMBqApTNj6xq4njfShqUwqfhW8q4sRFvdYtkZkv5pZzVzWe9",
  "key32": "yLgQQqq4a6YfMktLnDqXQbAs7u3qhtoeQWbTuTcb7y1E31zCgN39xTkYNYsPzRgCmhWYMotsoCWJbTBvsHvNJNz",
  "key33": "52CLYWye5M3KetDuWZw6KSJHWmBywpqqaDSNe2jtHdhUuDDWZkPrvmFj6Wjf1vFreuUBBXMHqJpcsAcFboGBx9a2",
  "key34": "3fy3a5LtTD95pRN5CLF3wfdZU2Z22byMSLsNMzTXu5Dq739pMTfPZpkBXFwZBf9gbzaWR5ZCR8UgsM6QRySyKYx8",
  "key35": "49PSsJYBy2J6yo79RdosF2y8VHC1rRHzG8gQBsQiccEwGtmq3FV1oiHFF4aNrk5qvHNEEE8K6ugpU8KcbgUVysjK",
  "key36": "3fpwr5o1tX8WYKwDBTtwgYuUVJRLWpUyqVQ2EhiMa1M2UxLyGAMdCfMqwu6UyEshAS19v9tMubWWpgqfC3zXw6qn",
  "key37": "5rvV8LqJEHPjyLHv52qPVxXSzz81oto91jUf2cay8m3gHFtCY9ZGUsB3MAaN3xzrzzoHwq8zBmZqfL7jiffUsfHD",
  "key38": "3CH8qEKSH1MYWYnJE2DkVwNjJes6YxmxJBiSnxFidCRkuU2SvmQMfo8juTE6xUmL7wFA4hnPZ9UPU6HRfN61pxwi",
  "key39": "4LR8dWc3PrifdKjvWY9cF3PUJzUWGjSDNNK2j9GeZ8VpzJ28or3zamUdp1cGiodTPs3fzYaQhocmxrcLcsMys7QR",
  "key40": "4MKrcJy2FN1FBEeuTAPc336E6XVNhsn9Ccv8M3EF9qkMUJVcc7bkV1WwJVSKBv8hTmdZSoiBHcRzaPJ4zzL9hZ7i",
  "key41": "tMzLAemwt4VnssNthWJxPYjVMLGHiBvhERK8eGTzg6n3Jm35qutZxzPzVdjp79K6mUKR9AjgGQr84pcNH1U4sck",
  "key42": "4DJ4wnWqf6AiDRCT3enYF2yLmHUvYrJMePtXC7cZbKvogr2yriFZNdX681NaLmf9qDJ5DKYkryBweSikgyBGHVMG",
  "key43": "3jx2e7uJyX23B9VHTrg4s3yTvDTv8BodzLRrobob3G77PBxcY1PZ2KSo2uriVuaEQCcmfi1ph1JMHS5ZFBF3NfiM",
  "key44": "RBupQ1e6MPFqF34YYxjQQLnYwA7v3g8UWFsAD7K9qMoAr9VeXzgzshd9TDysMK624NJvMAxsWw1AQqabAiosxc3",
  "key45": "2pYh9aXGPZYApTVy141kr5SRisGKMkj1mQm8WRkuaqCmbfCzHaa9d8zUpEdfYsP7TsCqyyi5JJ8xmZ3tpVypPs7K",
  "key46": "27ntZEEvTVxWi9nREpgURfBNsL6G3G1de9RUZWw8cp57BT5uvKVywRiausJVwMfFJMnJxqc46V9VYBZKhwzRPvBy",
  "key47": "5CwPGbJCu2NjLoTzLVThnDewgT3CiCWHoUiKpXsCUqccetN4Y2kui5PtB1jj5dW23XLcyhPz4p7gg1Z2LurgtDSo",
  "key48": "2LypB6FqMVU9REmt3aPSsXkxh3Kg4AfPeXaLwxakWodjyMDmzqgRN3QEUSFLF5EVLPBE4EaJmTUKvEjc4eBLax2q",
  "key49": "5sXjPhF9mzhtP3yToziM72vuGXru4FKbagS2nEoMHG4uSML8mdruYtsUC5BxyPEmfgQ5xL51P4pJB9A4zxwg6ZgL"
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
