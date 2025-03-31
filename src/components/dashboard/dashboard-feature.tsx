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
    "3FHo5VkbDie7goQaHg2qaYxnYkRQP4qFrPMecaqPTqy7NbUGmXZCAqqfXyy6fjkMGaBmScQ4T1xYvbQqrrwyEY3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z218xPd87DTkkSPBJ8ZNv2c53DFCDR5ZqVB3A6ZhaLkqvu8jHTJ6bTLTDHRwND6t5yNVgDtKCTLCPsKCNdQt8eM",
  "key1": "s6xFWQpzxKJWwawbKbdy2kEZk8xy1MwUYkjmgStrHG7JXbUrSGbypWnkQfpp26GqZwg2vLq9GwnWrxf2tMGg4Yb",
  "key2": "5bHc7X7MerwPu7UV9YAhvvWwtKkK2y8cZHXvetSBXVzG3WsGBN7pLArmPh8maxoGqe3UMMCQ7vx4xVmfvK6WHRw",
  "key3": "44U8a9Lo6Un118EmXWdzfuNfJM15uPDGdqquCkXLrVWzqXA5FBVhh4PWkjGShAUyzhmtUGJQLSwuXzcyQ8ggQWQ9",
  "key4": "4zpE8gMgwkgK7MiDQnHk8yHKJtDr7N3zoDRzqCZ2q52PQ3xXvrFSEJwoTmQ8TkahrPiDzZaJqgCPtPv8eWyXjqYn",
  "key5": "4kzxbakCAv4AzBa5P8PsDASfRrgYzZxdQUsZTbhHQGbrd9pKnx6dkJDMF38yjpjJsgw5K7BZrnUoUmC6ncrahbYz",
  "key6": "wKpwuE6ezkqz1nKfFM2g46XU3wM2vckiMMYY9j3bXrixvjMuC5q4ho6VaK1JHPYXEmfayvcErFcbUjhHZJp9qWK",
  "key7": "4dX57NLte1Nwq8YTQqnv4kkim78qXXWh9TJWjkL1bwoLdRj4WaCTecg6SM2bxqe7ANyq7VSD2Zxpk8FVRTmGW4Xy",
  "key8": "54C4iBS36rm9svN4RontBayn1BH7sPYS1jB2GZh5qS3YWscd5a2DKmX9wt6AUu8TnNQnfzQLqW4WgtG46ef9Gwdv",
  "key9": "26x5vzfpXh54mu7c4ixbydXtBjcHZtvpzavCEhgAgXLjABUJrnxvsSZFYH97SeffbQxLuqrm354TvSJE3gTcxTnV",
  "key10": "3cb4g5AmdAyW3XMwWuA7obbzHBKG9H13VyCyJdRN7H2DRDWWGPbxUiesBtHDDX3Gt12vD9aMb9iE4egoXM38B4xW",
  "key11": "4gssc8Ch1Uf553DMiFkPCBNaf1Dz56Cw5L7XfWxh1ReKSCZiJDrV31wcewoAdk4Nnfbg9V6S5cRHQEQfQRLTCYJ1",
  "key12": "fmPBjTqg6Apybh68AsebmZxUVzZbRdbVqcsnwhh5xpf8XyPdoCqWrja7WRq4YLekwCTPZHs7tmuj1zPcsAfgFQK",
  "key13": "4KZDrx6yM7uxbFKdxWrCjgtdJ9mc4sQtMnK4BuYBEDYpGm6CcAFXrFCdJWQSYCBgiUvNDXbxu4p1kZXqSiYbPKrx",
  "key14": "3G44pYVMhiVfu1ptEBHHuU56ZBPYF2RJwZN4L3W9E1c6rZ7Q7z5vESYaQghF31CXgyhKbmXfJ9jWgbHRkZP2iMFn",
  "key15": "5RGCF91wojZKWLCY2roj6r418Vog8oA1kqa7Z3aJxBzrkz3tP1RxGVC5kuwNAUsPRDA22HPLwX9KBvSTfakDS6E8",
  "key16": "TViYfZa2EPDyJBumLEayrDi63k8yKXLHXK3if8JahYqQiC56Z8txMf5dPVQDUStsYxc6WEwzc7ar79T2yYTXhji",
  "key17": "3wiuEkFbovYSiEsPe7XcPBYRjdjXEmwbgwMoxi2net4dQLs7KRyu5cHJUHoWjjoFvdoArtbvS5DWjZj6VzunVCKR",
  "key18": "57tVaNFVW58vKj1dEc4vnTkGTxh2TwNHfYif9Rv6XtJD53aXFkXUQYWweRJDL8fKJeigdJ5pBTm8MLQzrNT6M3mA",
  "key19": "5euwfAu2imQYBBgNMkaBdsPo2rB2AFDKzQ5s3pzuUGBAvi1dsAgwtEEnafuC6mcDzhERyHkL74mxPEM9JnJQnebA",
  "key20": "qVNcXG83enXWQKJu7X3BSCsxn38U9Qy8Y39vnoyKA7qpXPe2cqFUqfcHnmAPUUc8JQebzNREjkfU5tZ32fpGiVw",
  "key21": "4x5CSKUNwPS2KaGKYcciYnwAw3twPR5r5DiewB3wJoY4uUs6NQr87n5xbKSX7dyvDSfvdtypB81LZSQnn4o1awmF",
  "key22": "3Z4GAYgswefrjHjBSKgxPxbySJnodF4pXymrTY3siRH3hiFWhD1TMUWWbM9EyiobL9XWbLkbRCWGPPz68eLnEs7D",
  "key23": "2LUjDXN2qRxkrdpAS2U8RdzRZQASTN8JEdV8gfuCSyKqUuqgFq62gstdEFDdC14yWERB7x2mtRqXnxE6FYgEvZPW",
  "key24": "3REuxyNqgofrCySmZ8T5fYuNYWsQgHcKZ61TjhqgnXCF632TPw3qLuuaGAuetQzFtgRRN1sBSmgwWVXGVNPky1Bs",
  "key25": "4MPL6Q33oRHbaPzFjbzyvfj5c5XacoqzuaXVXXmJMXMeUedh3jRUCvfe7YKcoScot1moM8eP7Xe6optBA9ujYHiu",
  "key26": "2xRGTmRXTAV92EVLBP5mf6PTjsyEZiWDdLzGrjubAyMKj2Qtw6uqyuv9XaEGD9aMxtk1Y9QLAT9SmJ6PQmtfpZ7B",
  "key27": "2WZVa3cYjfXGx3USekdUVQNeDoHo45DXjNai7AzfL4cbftBqcSumTuigDbN2osSeigot3vhkPXvvwqdyouo4k9BQ",
  "key28": "NFLMUzgmTWdFasAjLsyBUwMNYFWGCxLnTAy5YSLi4Rso63Xp9bz7VrdTipFxanGoBymZycob53NByGR4NvRgq4m",
  "key29": "5woz31SEdf9M5Wjsfk85whV3rDPdzWB8ubSUusaevmumJ47wSEcChsYtqP9NWfYMzyR3SCDa5Qt7J14n8EqFXr5h",
  "key30": "3tjUM4YfYsRPxGFoq3MLHq19MDGH3tCTTXNp3qCAyiQtWwP8KzJ8BqjyTSUbiu97d33RXHAoWLHhBLo5Y5eiNwxT",
  "key31": "678sqWf1KuEHu3LYdwq66T6mVxoWX54evk8zKV94pMEk9UMEEWxSpUa6yZDu973tytbGy8dtXVYpdi6JMsawfckM",
  "key32": "5G9zS2f9nkftkrqPzviN9azmutA9BnfS44PJ8U3v8fuxBR7fSPLnRtbQUyhkhckgcdE2eVX16R1ws7uLgZ2xc6J5",
  "key33": "5762bCg8HokAdpHyeCgwL9KMNJtWbCFysxsybN1FjszwmhZTjFAcBgVCVwHUzvjcEF62Eu6xx8QWkCw9tqvy3V12",
  "key34": "HZk55ij1ZZcTyrVacw5Vv51Z49P67qvbMRT1L8cEek3dF2dMpytssrEb87nLqqUXYvwF1YCCHq9bFm87mUpPMHb",
  "key35": "357sj1gymab66Menu7shwyCzQK7LDGQZZB8SjFUxmyUYWhCLhn33MXcQKnNNJTp7hVDYqvS2KiMA1ZCmdwnirYMC",
  "key36": "3qqhdzAPyH1Y68eDLZsMFchn4gZCq6YT99dmy82Awu6PQAyETRji2Vx7SbETmxLp32K4Uy7HpxnFMbvGb4sGwBE6",
  "key37": "66Y92ttTQs3Uagc5Lt3bFnGSwbQyTtCeVuoMPnDi9hc3fZZZm8p9bq76n682vuD7Fx69cTQj3TNEAZJQoAA82gLf",
  "key38": "VDbApLfPTBrc8x39rGuPw6zZ3LKEP89FrAMiXWBvmdENjTtbeVyQPfcd5C3cFvJnbyq1t4A4XAtqBXtmrVhHv7v",
  "key39": "2VGUghAcXJzN4NPxBgNvmJeigyHZRWnBjpLZ3byTZKyK2jHu4kkQCQWYWRUF7RqvmnaP59jmZKJpj7Lv7HHbAGys",
  "key40": "5yetgUnSsEEShY7jGjAQMynm76z7Ywbu7xwnpP1HNo66boQVTjuaHt4B3LDD3Uze7DK9YfZGrzz1ngRCd45baCDy",
  "key41": "5opsrLd14jdDnRp6aVT9eusRofEhwPZimZErf3nio8bKFGzsP5YJS16vJWCUkCMqZnjNbFMur9xatMSN2xrh77fk",
  "key42": "4Acx4ds5yNmGtZmKRMP4E9Xg4KdMGGP2z1kdmqAzoVmBGPSKKjiXZPetShFUtCFotqMeHobj6Ch3UD1qExds8G3r",
  "key43": "61F8CVoRvvyA7QiGnTyvVscyzZq96ty6FWNwaYEUDzjHuKpvBVY9SmzBWHctqosTib4FVRq5MhxE7UkN98vLkxbd",
  "key44": "24PbRZSnMDKdfU5X8vG6sWUochZBVUgdi4pKaj3HJrqPKR6aJ7gFxjeudFcMXXjkSW1MKEyuHpDFtp3MyKRKgjG2"
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
