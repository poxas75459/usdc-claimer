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
    "4GfSvLziKgN5TKrKxSySFXF4YqWJNEJdvEbhaCdiVG1M8Gy1hshFvHeAnnLG2jBH48HPeeZbqtwK5MXC5Tas9aiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2ugbUrWpWrqwT8qAAE9axFrVHY99FEvvQT3XC2Xp96KcqYka4LZDSuC23oDYFTgXGepQU5uJGjpzYeYsuQPSxs",
  "key1": "5nbnNcDt6w8MVigrLeXQrH6wz8R1BgqzwzGMvZSuq14pZgJyMWxUNQ5TXN3S6Rbruqt3smR7Mxyh1NFMxAYRCBi9",
  "key2": "4B9neGidMp25pFFqcWwKKPS1sNnhtGdMnz1ockw3Sb889GFmnteuRY6N2ZrpDr8r4JLgG7J6XpeMo4E4BoNwpgu6",
  "key3": "rMeKDpuG22rzRSjyZwesku7YaJtkQ3WMGamYpeAZu3DHwP61MUxzgsSSPmEjd7YJzMZ1mHk9rNcAfWZ4cCX22kZ",
  "key4": "23VCJBYTpgg8jTsVKS9y7aK9s2uLDWWPSWtxrsRfShLr2NvTxDYYkAvzK8mvgGDiyNeH7ssYQ85MbpqW4Ninm522",
  "key5": "4hRbCBVSTz7YnzgbMwxN5JojqTG422Tkt3cnY8dwNJCrxx4vUis9PFaktjFDVGNin1NnazUdbWdpyaSNaQiY5P3p",
  "key6": "3ya7hTquabVNq1eHkcu5DH24BKUgXUjdJQZGjDpK4wbieW1qggumj99krTgDbd6YrTyUg3Mxtb2eUGPnEzK3cSAc",
  "key7": "nqsLn6H5UBRy2Jbyj2Y43rJawNtDjqNpwCbj251Bh6Lz5NhhiYVnb46d1pYxDwaUuK6cWHf4pJWsBk4Ygdmaz1U",
  "key8": "fKUJisoZwe5AM54PCdc6h5xVsg2mqXDV1amyW2CKQLhCquK9WU839DASt853M9beLepudnBrpBskUnKJXp6b5zw",
  "key9": "43WGZWCMDgKeqm74cA4p9iXwwHB3xbtU5g8UrDuTkzJX5CmFtCVxrRVSh6eWRBuZG1dusjiVRd4XCt2om5xwC6vd",
  "key10": "2X3vWDpQMH8ikgdzKQAoQg4PS9mPXb8YVH5TnHNFquXa6bQ3ApKpJqmyh9LRcyr5w9bB8ZJ7niBqNBNRsf2cbXqz",
  "key11": "5fpbT8izbDpUKxMRtfBaEvsA8G2EHfuuU3eNYPgyPJRDgjTr68PDmzQpmQBgwRJnFL4tKAhYWRGLVZgty1Go5KrD",
  "key12": "2GPWtkUGk7G6XkUuQWF6wFiy4EEQZgdQ4wT2GtnU8kCCsvCtHWDxQ9LF9Ry2v9BenwuaA5FsbHysKFFQadbhD73R",
  "key13": "67GpZ6c2BQ4ccBwE2TnWCjFxfuzc4zKWQUAqk3Y7dyXkMjhB6EFzX1KcA4PDmF1zVKhAmDKrxSmBY1dC8Ze82EMi",
  "key14": "4LtSsiec7WE4YPesgPzMFvvhbACjPj4bVnXkfYBVVLN2Tm4ktQmiR3re3ojj4w3xDdfDicFAenU7Ubs33LNroGw7",
  "key15": "5SUX1FMs7Es8CnSBk6eNVjQgDss6QVaqVErCtLNgZDsBz5XprCMfZui8mQDTzjEMQBviRWKkasQ4CznEvJN8oycw",
  "key16": "5pvjgiCrhokfQPQYpzdTzhDC8PdpN1B2C9DTAn1tBsUCcAVLQA6RsjrjDE8XspcgcBWTmgWqNARoTJiWFUritkBA",
  "key17": "ee1x7qaQ3zFhtvGk5FiidrFJhTLkDZg9nKuEv7UqTfGT8hWC66HNTD2j5hwGdYSx31qoUP1sqT8uLACcCg4rsZX",
  "key18": "3MCghS6GykNzu2UVaGiB3DwrHs1932BBEpUG1XUDmHX5GmF4j1HYuM62iwoueyyGqGZoLKdYHSfugyUZstWEerbd",
  "key19": "46t7vxNXBMa6BsBMagwGip4JJWR8ACBzWybKAAwdMdBwR7XR3U2kRDTU5H9GuhA6YNcETz6DbedjU8vbcuHiwcwi",
  "key20": "2gY1TPubeV8QWhXwstUdYY5W5sHjmvCwDkKmmxUgNFKQoXLaN5dpD8wzkXR4g6ABov5HkDGtTt3Zcxu8UMLPE7oN",
  "key21": "5CgvVGCFdtPK34RBhgARJ4sbobP5cT7mLUjiF2ZJ4yNdxrdGbVh92C5nPXAnpXUSX6VHr7ggtMyKXPxftHArwYNW",
  "key22": "zhcPb4FNoca2JTDWNGGrmDUu2TKe85T4CoiKnaVEhvUDpeqT487vs9qWCmqDeaeNM8cNua7mZn8CrSkwUKV2xFm",
  "key23": "2L2NFazyTsZw5rS6hAVpMQLV9Sqoo2oL84NKVRcNLwoRdDtz6kuzRBsUNm9oobVDBw3929WE9m4BJxScJJ4kbxco",
  "key24": "3ie5F7st2idVGrNQvP5cNQkAA8gscKTbpod9wU4ZQUTxcV5BeBUYu2zduoH7kjHv7LPSnWZffTodZDRC3jZA7uB4",
  "key25": "46PMSFZzejGSpueqgRhSmQnV2WorF1gjCZ8PB7GHer8NKaf8guuwbjfdutf7dQRT5CS8Gb7cA8fK88owHMzyw72G",
  "key26": "3Byr1shESFvX9gDT15zn2MgqHp6D7JYGk4y1Q3gcocupKv7rfKaWZW3W57zZaXGCEc1FoaWDDSR1gX6Xp1mfdQFm",
  "key27": "5CygePiFaAheoTN23cP3nasM7sbtmym38hBdVKUaCJTejDZU7Hw6cbeNyK7XVw6kxwsS3ajgbz9zFNfHYFDRmn5U",
  "key28": "4nydZ16ViYYhQazXrLvvP1YuL5xcoPn4QQrpYuyv9EMv6iipGWSMYUUJCw5m3rqbZmK4nDaLMxWGtbnF7yYT2Rf9",
  "key29": "2aPSgVQRszrdX5yyWEHafhkwzV8fhVoXZvTAmDZrCtDAyhs4N7WdmWcjCcxkpVV83jcfV3BL3hMJBxMMRqwMuXSM",
  "key30": "2Yrw8VVgevLUua3cSnZLWmPkANxdv9NQvLPP17rhHa3kAP7h2nJiA1Roeeb8V2aetZx8ANNxq3Cq9uXRpMRYBKbL",
  "key31": "2E737MnCWVGKc7xFtcu8nrYiKYWhd4L75qGYEi58AqZCHmTQRVs2QiZNkeVZ5es4q6qLVMTquW35VHmktYZ9N2JY",
  "key32": "5YsuJsT3HukJjyHYZUz1N9kE1pYFupJaet343KthAxcmkYamZtMivNTSNwLus4Rw8SU4j8pcdt76gK5wVjBnyCKr",
  "key33": "krLz8natiN3DiPyUvD9VnddQyXcUcLL7ejEeasNEvpuVjMrLeR1RMNJQyFGUxkED3LXmGvk7hwypPub3ZTQeTwY",
  "key34": "5Bqq46azCxiTi3mBx8TFrDjUDbotM2962gt8QgWa2w6LaTrhTsTMZ3vrTg1zwySw4SXWwJ6YppTjwthcG8bSvjyV",
  "key35": "2kSfgHVkYZeSDLKSDRnqrj1PdKbVJs17tdAt4nmhhMEWV26pBsHDFsBuEzTsk4Yn1K2eTv6AnbzmKsXxQActW5Ug",
  "key36": "4HP3zHAgqMtL7mKnW4UUFsWH7311y2yGBRF55fem7f2UeQ84gFocR4LJVUj1FWgMALuwffzbj2vhZYwDDNpW2reG",
  "key37": "3NReajKeht8ui6TUeJWHkKKuWQ7sSa5McPeoWBqYv1WT3SjzG3okLu3Hs1r8Z2u3FopAzPzdvbS95TCUUF39Dxmg",
  "key38": "23BE8jpsxGkfqjHZCQPwLubeLPEAMjD13en6kCapVLxwHT8ochPhFNog53Wi2gaircVvvRfP57J85aP31P77bQnn",
  "key39": "FdxwrrKzS8pDr6Ai4Pjm5tycXrG3vJvc3GfHdUC1Y3GxRLKW3Af2U9eHpH1T4xXMqQ6b9pcL21WUDAioDcs6k5m",
  "key40": "iPagbpagttcMgwDz6J2VcT7C1PETtw96q9juD85kFbBEFsHWvjU1w5PXWaRFd2MYbj6Sm4CtCCZjfT97HH3BT1B",
  "key41": "3hW9AQBkafencBxFFJY7jHUazCxQQgD97nnf8DwC9hGZGXvL5G4E1ugZ1cZU2rUHNVg5sChLSnjdRarx7EnvYBCC",
  "key42": "4deKkCGGBMEaHK8UMJBXbuPwnkjHRb8y5Ef35BgtmkbiprmJp6znELgJsNmLSMBRbPcLDfQTiBVjnY6RyptwFafG",
  "key43": "GTr1TeRNj46nZY4d2puXYfG99WgpbowBPmSYmE44feaKRo4mSxVGDkx4bxUD8qtno3j2cx8Zn731dkGjTdvfSuM",
  "key44": "4UcnH9q61DFvk5fvnQh7C8xTBrWjDQkBV7kbZ7UtQgWrB6U2NqUsnz5YupdY1XQc4wH1X36bS1xE2Gyab28Gkize",
  "key45": "4f4hG16MM38KvvivYVTYB5yHQzR2bTjLc88rSNpspeAh3DsngaduS9uC9NFsjYuPPFg5pSe4WGVXnq9zFTZ4qxZp",
  "key46": "5UmNudJNaEiU9muNe6NtmF3Fmrt1jEGSoGmiavhr2TjHM4m3aYqAxSX9tRVZrCAPzVSAKCU1FwJh1xQdiH74FqmE",
  "key47": "4eZGbP5zXhmMGZzdKxW5SdjVfbzig1Tc34RYjJLEdDjwGbk6KDdXqKLv31m1i3Pvf18KZrhaeNCpw7J73MytumFw"
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
