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
    "63z9fAKwpwHDeYCG7AegHvjuYbsk867n2ZLRrBMUPEWSHd8N8FhUBF1VmoF4aMyJ1PkXSKDCnirGo8LRPYBiq4JB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkucZo8MnuuJ1K551Vt2XX9fFfGNCwJeyrNug7FX8tFu1b3rhDP13MrPNb46wZa9jNmgdxHbZPL9nWJfxyFnasC",
  "key1": "6hBSX4nk3k66GPugrUUDEyvSQsbrTYNpgAToNtxcG46SV55jgkh9aBvyYff3F9jWBsrhdpDPF8vKeBzjdLn8Eh2",
  "key2": "ZxPk88yKiJT6KEW27SGTNnRRQwPTPKasFf5VkkEbtH6p6KGMmVCndmpijFAS2FrTwPodYDZdKS2ekxQjNgXLn6W",
  "key3": "2BY8gjBLe5XD8MVBC5219PCL4N3FPWtVQAkG98XKRZPGotYswAvyxftRYpwN2vmK1cuLATjdqyKSS5yR8gezJCgY",
  "key4": "2KEmyfG7qwq22HVNLP3vccPdhssgFxmjEdcnjgZb1aTiuHAmqXdsAemym8mPX7qrPTGqVT9CBNFjm6onCvVJzvKo",
  "key5": "34jWWSSbVQpv4Tf5emUWia1Zw2pmFQW3cZQpEq423doDpRCDMpQgpipNU6i4zReeAneRki5bdW5rEeJ6LbmBEDim",
  "key6": "2kunnMMLPxpm9kdJ5Dprmnz4G3J8nNT5e7u4jK8Xytj8KSN7ht4DokZEbgd38TefM8DqvokNuht3Qzo813f6FtnW",
  "key7": "PaLrRJLZ2kPsjQSqXWDsvT7CtQ9Vbb2y2LJDkwRDrKkg8BYeMjdqx7mp7BGxYk2fB7rQ7dPinG6AzF4jZaTLoMo",
  "key8": "3RdZ3pWUeNWybQguoQ4DKfB7ohYGk2Rc3pgxfJwjZ8BZD1cofwZjFbPcZFJrZhCd6kHKXSw85rE9EnCMK9F62uwR",
  "key9": "5iC64sAiJ5r1BLfGuGv1uye868uLYB32VvtAkN5Ys3eDGgUHRrVhbo4f8TVs8Gd4xKm3m1pW1fgEZy2gWGxMPp1N",
  "key10": "S7gUMr4pVrE8ComSzGuqVkkSFSKaE35T6P7TYfCA6auazmg9WtjS99yX2RcT7M1YKTwkEP6M6amqdBBtqmrF3Cg",
  "key11": "mzdx1XYFZya2CxBg7zfeZzyWJvNNnvNjzRMKc2cYnha5U4kDoM4VXU4D9onGTZLhhZexDL1WcM33Y8vz4Nm1VPg",
  "key12": "2CUN4Q2Xgb23TqHSEThvYWf2DRwfaPf9Y1Wtbaw7A8KvBLY4iNcckndknFc7MBHESxhJne8ghT9vDsdiq1yd2ALg",
  "key13": "3E9E1YjhR42LhR18PZnNk7e93ao5qaXCsDd8V1CQw1hdssvyR9qiwwS9sz55Tk5U7yPXSCRhAUz5Lku8e5zGspKP",
  "key14": "Yvj9B5EuZHJ7MPJMNAqBY5yiAuKLGH8MUt9pyWiNZGtPkUtDkCrWg4MXBXiCfjPa3ac3hgq5bvHevY4vRvTuTkc",
  "key15": "4MSLYzNhMg4VVJ8cWcFwekF6JmFCKeQAEwXW9mETWYJ7zHw7YvrSghqvycRUhcWRKU3Dpq1kW8eEiescPYYaps9N",
  "key16": "zgmE4XhDq6NQC1d7BcSFToRcKhhgjPq1LYweLoTKbrtLf7G7epYs5PLEhA2bHG92vmRgiU1eAr6sVsRrYhg81cm",
  "key17": "3j6YLppq36h71D9Fxc3VJJPZPWHJ1xzMDrzSiypUd8A3Jo75rBdnZvy9AMoYiZGX5gRR8agiBGBuFYycyXfaE15R",
  "key18": "4JDHvGj47mRzwpd2W6BK8kAbijuCxajd7HaNDUd3qFAeSByyYUKU9E4S3EwdmHmqZrciho1mXBGbhPKhnGnkAv7a",
  "key19": "4zR5HBNgGxnGoQjqRXfMNoZCCwBuA842ztTeVmYjeYNLc14XJEDvQfCbkszr2QJk7qYsQPcS4cevpPZat82SSYLh",
  "key20": "5Pj98VkJJadSYg2XD1RFQayXNw4ienCi5idX4JxKFZ9CRSpxj1VxmAjzuXrC2nHMbY6ahXcauYLWvr2mB6go4DWD",
  "key21": "3X3Eeg2rHx6KALf4eHCfmRT6WqdRDBqUzKj51DP7yPtUfY4RwjoJ87PpPuMk7574zAAdJhozfzPvDMoo9qMJ3tp9",
  "key22": "2hnVf2L9N6fh8TphUfggRv8w6byedAA1QicABndA46GRvqzrfVXosd4p3Vj2hhbEhHLHmshBwGrkRfJD8We1swC",
  "key23": "38dZX7xrLfufWjf3kpV5bLyMZmpyBxZTQrjWoTxndRvSp77vgpFY26b6yg6knMDaV45GmPgejU2AShQ8DWNhn3Da",
  "key24": "5BeZjSugZoExe3Feg1sangmewzpgZRJpB9ArV9VTJGJryjW4dXTRXe2up72eDiMmMZnveHZoQ3CcxPx4671mzPB8",
  "key25": "62Ksk54bP46i21xtri93ZV2TjmgsP7XSWaFn9S9wVnnjKaY6w4cWAHU2U1LHxZU2nacYDcUZK9KravoyH3aaSu5N",
  "key26": "4we9BR9CBf5R7AfcNUBA8TaTEWaiAvLi5sguKKgHbEBxBVyLUDphXE8GDnEReYN22TfZCi8eSj6JQ275UWeAZ33d",
  "key27": "577L9RpHKocLUWb44rEk7R4ov6LaRbBfL21HY9PGTXW4FWRfTmx3GFJjbmrLNd6ABRZfXZSZ2KjL62hBeWX58XPc",
  "key28": "xuaDeSmTRFh4F9qTZHGSoMZSCVtUfunaJPjtVLbSAcJxDP5YBN1CBHaoxDSYQz3hogCGWAXxoYfi93HKJ4He3aa",
  "key29": "yGQVwdbbzzYWxn6j9Jd2hFHDXeyhJyTvzwbUkkXAfih6cQVkyy2SRPb4ZNunfR2WBD2dMjjUwVv4c66NC8kfk8N",
  "key30": "29eoySPNGin6pw1wdETBJUmUNXTommD2RrMxjdoyJUsWtimGvSH8Bgb11Vawv8gLTq4AgSDwsucsuh4e9XLRyghJ",
  "key31": "zeFkGAxqtGjXj3JdqJRYZ9TpfobwBM7PiMmAF3uyYDKRZpLh97aksmrrgZmWyv3vsRfAjoSys2mg8tuvhVbLCvB",
  "key32": "21sMXSbfg1FWHbuufpLRP1DptK1eU59MUexw378sugYFL5QYPV1YXXhsTRF5znkwadHg2vbR1wmFhWPSQW7TtC2y",
  "key33": "4Nfk2ZipYzggGWMFpurxRiry2KyxLhhu9mKGoK2CrUtwR1UGdELybed1b1ysSHJtB7QfZKdNvSbHZwbEJXvtpCZd",
  "key34": "4yawmTS1TYtSsoZLjkmcrqShSumxasZwNZwAfzapfb76KfLc3DtfpWad3i1b59qhTsVpyrgqSr3UGTrupJWNnjkG",
  "key35": "3XaJ9x4eALeJP7dind9AhKEzcJpDEAt2tYDLYXioT6jpSJVMGevaEgVjxEHFCwuEzt5c7rdShnEjjocTMEmPSFVH",
  "key36": "EhNd54BEAAuK8ZQht3UT3bktPYYXjqypxs1tMpgr7y2XVgkfJGumA1z1PwXEZ2a115zFAnf7rAHPZhSq2WQXCcM",
  "key37": "5VjLQFiXVBSo1epyvkg4NHSZGLufbzdkN8Vvac4c3x3LSCm1TGYdkriPVnL1BvqKKjp84KN4ANuCYhgTCZUcT6GQ",
  "key38": "3RdgDyxQ2g3hbey27gsCuqNgaxJxfWtiCgkWZ5FNuX9qXYTHvqWitSLzycBgVzbknPUgE1LtQohvvZpGfrpRne54",
  "key39": "38GMWo7pUFGNTpjSd9dtxFMwfdob5TjXUCkvrC5ZkQ4p2Lftqh9XAuCUYpovms5iDNQUuDM2RkvAfXaZ7KoyHUjc",
  "key40": "4w3tVqh3QPD3ddCMCadw83JLhn9xuZjfbaskg6gKF6os7VCUBp2YJEvZ7WVVSNzJ5Sqg5EaELdZrTgWFG5MkMSZk",
  "key41": "3WMbqRfMrLH2YpE4GZw7H2zMypWxNJXLBFQdds5Tdpri4nMaRRHEGroYZ8D5pTF7vhCE25ZYzFkxCXLzXtGvuujC",
  "key42": "259RJZvJ4eYJfc8dcdSsJJpLX1GRGF1eyPKqHMe4DkbDvxX9fjZmCo7LRx3MWH6e7L3tZhAUZPm3aVSLrbNXP6yH",
  "key43": "3stcaPmWLDKpEPx4aGqHS46BoJadJhE16wCpdBaufXMa3K6crLAgvV5e49uvpBVAnxuWfJRNAwViPb42uiF3aXw4",
  "key44": "3XSuvtEiqv7WDKHST9jWayocJ8otnYWzTozFc1yzUDXUHFNwKg7F4hTR5Cj4xT6PNZctpNT89f2gY9ixns3wRuYx",
  "key45": "5Gm7KH6Ub2KDQAqL65VrLqVQdAVsx9aLj7z9fUmtct37GYqHPxQtZ5oBrSzwJtCjzttBg4M6rwcWBeTotx5mW5L7",
  "key46": "45cqjcJCku1E5tYCc9YDXRiddYUpFA6JhcknQrzciVubsw6QzJ9oATupiyy1StsR8hYyuYYZRNj2rTz12yWpVgos",
  "key47": "4yyL1cW3ghxb3HgimsRkooiKf7cAy6mq8xHZGY4iR9Kqe44h6qmtM8ysntLm7wij3TPv5xLFrPmcRJeqwFGVALKQ",
  "key48": "2bynndeKUNVTrt79Fd2CysZP8VNiC27we38FxHX9oyhnZP6rK4svcd2RTj799dmKYUDt9D6nZjZbK8uifPrknQ7H"
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
