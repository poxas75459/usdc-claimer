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
    "3rP1up9ur1e1kDBk8EV7o8b5TSaRmqqB1WrYZJucHc9uCzLxi922jf9K8wL6ndiwaUrrFQ7ccExsz4bMnquv4wXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YNCBCQHM9Qjx8ATBbMH2cAWhR2MwUYpXnev2nASJgbf6YFYQ64uWt2WyKQoivcZKAke5agsAT8Go9g9znsRuuc",
  "key1": "3bkGrCJMdaifSEcvBA3Ftq9GTnsSdozhD31dDLXmoDqaV4DqbVkjcPEUCeBe8GjnVAAogz7raSDoRsz2r8Tx1gRX",
  "key2": "3bb6KzZ9tDRqE7oAdq4vC8KBnVLXXCKKthumW4tEJX94ptN1QCR2bYNdFD91BVMmNCsXPUFqh2rDG7SRMqHHbH3M",
  "key3": "22M9ga18PVB7L4EgsLcuqmJThr2naYfibXuyykxJ6DvxaFQ9wjzHeL83Lpk4y9jVmAfsWUX8vp9xsTzYrDmgZkQb",
  "key4": "5zxHgjvLgkyZMpVRNSEa37UwFXfZz7rNHCWJJKvQ3oQpR2qPmvEwKZJbkbBsM4JYQDLew4d1RnC1zXEfKv2GHCyd",
  "key5": "uWxHrUhz7wE2mYsGuirxuU36KFz9zWrx9gqEveg2SFm7qeAnjf327i6zDDwfoQ2sDtGM6kjYHkCLPVWqVfCJExi",
  "key6": "rdwCjFJZpYR1XsTqpTK3WbZvDi2oqS3uXj7bbJZhormReA6tYDA7sSw1itVc3tcLzwHTPgr4xNbmhHUdjXgdh2h",
  "key7": "5Jma86YZytyg25XgtDoPb3AeL38UePFW83HH8KgevNzFRBAp5KGdwo9wxpXbbxAwaFPHfarxmupbpLxtiNm7fBRb",
  "key8": "3J8Zr4553rVKYUxUeL5ow6eRtjD7x5bE9FYoviXZ5191uvd9zGjoVUJ7uNa8RkoysuUojuA2MdzbrmENKYjtj54P",
  "key9": "4auedSiDp4N6wnc3RrzyuhpLG6j9n8wNhYNY8kQMFp1w5Pjs1NkrbSBjhZieF2UyyNL3N6mb4vQ3wwZtDQKqCjxK",
  "key10": "2Zko6o8j5HpzCknwpjQdojS3XkA61zk75wVVe1Q5S6JSprwoYpsjSaJ7rnxL98jidaiJfEQmdtXvDfWH9r5DiRM8",
  "key11": "rqmdkN3cTyTgiDnt4i2x5uaLaxWV2Kt5t4t4LKTHgpR9JD9dS56fHwjgFXvMd5msz2ftBc2RWq1frgJZA4tYFsb",
  "key12": "2r8iyX1xdGav2q83NdAiXHgH1FhUAJjnZvHWo6x6xU2BiiRF2ftoRP1HhjNMaBnhvhh7jqtvtjrcZYVnF1xrE7LG",
  "key13": "2gFpyidfPsoi5gVdkzPoyo9UriCsc54pWnCeQ7AjRe3cfrk5fm2yytTbHGoGb9SjqDd72LS3e98r3Zr2Z7AUj9yM",
  "key14": "2oaj3jwhwYXAhe9Gto6Z3Fdzt9imSzY9WYCyT8GTF5C3tEC61MzBpsijXDBxFzc1HKGQhjQSPe6tbuRJvrVT7QYt",
  "key15": "4SB5nQRZ4U4YvBPQei8DMr7dvRfZBiDXu3kc4ih2FLTeJTFmoxVhMwtYpgBBpfPn1qRhRT1At4pt4rFPWzfMwhYX",
  "key16": "5xZk846K88Qk7an8EdgW2ZymuJMGbsGuWFD6dYcyvK9GSH1Y5294B8R672tuKTTeVbMyQChrgC3o54JERg5kaGwd",
  "key17": "5BvXybiYby5EMvi9MU2WNMa22vD5aUpgnJGhhSKhyRCxWKQbc9J4UGaN4siBLL9DRp4qdNfCVFKwXKrPcnqkifhT",
  "key18": "53s2aoYEAFcKco5RNWNpq37JF72eZeCmmkhsbcUQ46BVms9uNJWUNZguEqLYSehZUkaQCczqigUsmYCv6YFZXCNZ",
  "key19": "c7gVU3HWT9msanTesmFoaAZz8e4NaHboiQcjtp77vFZgmzH3rdygKe26mNMoS3AsJroWTAYoK8KLuHGFtz5ph3A",
  "key20": "4DNvttCkAhU8aaUCgYQm9MFkPo9X5G1b9h84nQc8NqfL1pDCxvG1zZuULp7SGoHetFfkFq7u7Us8sQyxYrt6B8xe",
  "key21": "244xF1qzgVWQxfeACRu7KJXKxNa2WH83LjEYrRSqs15gpJSYtDBDSTjbvjsdexCxka3VJw7Upv4uWKZXzZcjbMe6",
  "key22": "3XbRWzwSs6G8g75MVD1Y8hcsdUoQmcZaw1TNT2fHj2YsZJtpuC4tqASNB454Ee8W3gCnt43TkGk5MEaSRmY9HAk8",
  "key23": "5mVv1mgP9jygrqtKp7Sjw2eiYi2QcqMjdLs2Zk5RK8yKvvtbx2eAugBuH724ZVL1rc8PNfPEdGmiCpVPrE2aToJ1",
  "key24": "4t2gZLK2vYoQjebeXh2fpzUjhaq2cAUG9kvyRTRG5qpFD8wYdsnCTX8fajKGW7iD6kyrYpsViLP9pS8v2cXj66Tc",
  "key25": "5DwFJhnBkBXLpaUpSX7Bx6EYubwoDLLhaVNhrbN2MTHuc7p2pRPHCPfBbFJMGPqCju7m5zrDwfTeF9wiChq5SLVn",
  "key26": "2riqSGMTkcMg7UNuugxfbWyU1ibqv9Qt84Znvzo4KxwQMCYGextMYUbW6tTyH8PfZnTt9aaPfxGvtzoZHNhoE318",
  "key27": "4jyL2PF4cQhYLEv8mZEzAHWPPtyp6PpnoNDb18w8v9PhHFK3JLFS62PwP7eCMZk11qzyiUVhR9S96gGzE9tErrpi",
  "key28": "pf15mxEGAD75oqHJDHUomHwxJinZqcPGPziHof9rgp2bv5oruaf38v165MzEZhRqkJ2WFfJbypg2XQfFkvVNusm",
  "key29": "2fMecLBDaatM4s34boxdDE3nRjZjdtvybFsXMAsuAFQoUSTFsNFiTxAPuF7rqQPeKV5pcJMpngVg41DzLSy1Hgik",
  "key30": "27k5aH8cuyj2YCcvA76kYHk564FCBoKr1T5kia844LhrPuEEDntmaxZQDV5B9BNrAvYfkvutezAqTfnA3ww2RnWQ",
  "key31": "5zW8kMWsLSDco3fsHye1hRa9Kq6vDCAcmQVBAQzfQQbuYTd18gbYh946KXSahd46AMiSCoERSATA8P2ETGgXPzxA",
  "key32": "59sw3pYHFB2i6KG9NA8uyoTvF9Du8nbvVzmxmx7hHXCPR4dtReWU6oHqDiGZnWTNjsb4ZTftUEbwyS5mVumDPa4k",
  "key33": "3GA2owh2p25yvFYL96YZTj6tpEisqwmYnPxJea4yePyjw5bns3BXNScB6WeJea7mWcpVqBLtecQcvfn9Kz44GTgQ",
  "key34": "52SAUu3DberyLk6pMwVxF3m8FUQYYDVifkh54UeULaKENcuA7y4GRzFUeZb7zEbVAfRzAkB4Y9eEjT9ccatt7o4g",
  "key35": "yDEjbaXFN9o8TBrXAAH3adWG6t21hAx4s44QTei2owKZwLoUdmQ6C3VG3xVBF3Z8y7kx8bWWFWMm1UgSoE6QKxD",
  "key36": "5qDdnwg3ztQJbQoHzhrp4AH8QFH8AR9En4HRixwm1Y1UejBkE2c84wgPz7K5UrN4HAUz5XxeieUtZYgJFQKt6a2F",
  "key37": "2NYCmBBvHV8PJBKMY9gU2afo46k13i6emxssZBTqns8oyj3gBMsnc2QdG2DJxexMiCw49TRZEjGB6Gt9Z1AKLrYY",
  "key38": "2aGhBdCNxe5nTxDgTE4721CbtJDFrQuDp96zJx4Pds4N1fp71kvbrEtr5sUkMc75FWW71zx4cMGfCoCiBNXgSz4p",
  "key39": "CZpC3bKrVDefiuvSekWp4Hd1esAzmCcz8gRya3FkzJyMJ1JyybcBKKQqdBJVgy37VxguB83HQvPrBBx6CH72BGX",
  "key40": "4jNT9gFfskjYQ32L1JDesmJS6qbXAnRt42nvTP5ZGrD61WEDamjbiYUFUaEpD34RV7BKKQZgXf8K8futfhmibeKY",
  "key41": "2ovmp1WqTmLd41WSmjqwqPboSK6VNkRGvZ2HTSVs7jqmVLcAr4eBpQzSa6rG6DHDPUZSjAq712yCGCRSbYCoMDx7",
  "key42": "59BXx45nBU6fcMLQ7ezfcSCtRzGK5vvx6tW3FvKYDQn176QM1KW1tA9VrLB1e4uZsvStqRFqAhmdZoMpqvXaJVZb"
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
