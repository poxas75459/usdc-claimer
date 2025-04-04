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
    "5p3B9noPUFnzJyuTZweRL8dAiX3yRQaq7Wz1aTufG57aiGzEGPKnqi89tx875ibXqXiRP4qe19RrBF9gijF7MfLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dW1Ax7FX3kdjQCjCLt9dryZJVbHpYiJ6sUpKS8v9nKx2uWrcuNsF6zdh3ZfLqHLo3TBbJ9xtYWJEirxNPAyjBxJ",
  "key1": "4R7Hxk7DndKCrzn5AfMrExhN7Skv631tDYqKB4mDEVj7o82vbYKzkiVAibcYR1T1pRN7LG9uh89cQTVueXgy4Wah",
  "key2": "4HTPNnmfFwavNryji6AvudRd1PaUNs5wLtCT9H5ZG5jD5JpA8NNVPVRqLs5Xbofq4taYgN8gSa3LodRadycKmNio",
  "key3": "Js57768HAPGiiFFA4XLtxTQwmuMCwstW6ZMYkqrYykZaNeBWLrpagWL6hxHTan46SZ9e4qhEsg3Ywysx5KwewEW",
  "key4": "38ZZC86hRqqEd7e9V1EQXbCvvoCpmjus41r3cokcpYgvDdMB2RJ3wsQmZmcdwqxkz8AnjHEAcrYkdmVLvRYMVKKP",
  "key5": "3duwtPwnagBptvMhcGycvKVEgbJmWBUX1iAqLw2zSWUmVPmzi7cXnj7YCtTztfuhGot2PxyTHAoaMpHsk9wmaUtf",
  "key6": "4GdrmSsEaspYPN6hBJxSYCMpd9CHrQCDXP1RSCfrh9HRhnHTVvMkGsty9TjPofKGJTG2xLdpyz2cvnuJzLUA7Asa",
  "key7": "UNBiLPnjpHBizdrNAfiwRB1e3FWHTwjEnYpyR8NM5kbQadW8mg6Hp1aNX9gQ9rFLB11WVYJ71omepXpL38Ho4Gv",
  "key8": "jts4Px9kbvhrtPRQZnkAhgZJ7YwvpBNhUiP9nkgVvnFdSFsxTBHZyQDNENFFD6V1f4JFAsXkkJKFBw4LpdTiwQo",
  "key9": "4uLV8LaXcH7yb5c2nSwCtVb7tZn99W5QjS9q4tJu4GbJ5LAu26bJbhxLZW45TqsrHg8NrZPkHfXRuPVyBndnrjAf",
  "key10": "5xRXZMLttmjEqVFrULSnjrSwBAs1ihyMKSG1tWsyoFjWzyebfBuYbEcCPkw1iVsLTkH2gxZ9wj13uxrik5f4Ruy9",
  "key11": "SzhPc9r4iQyuxX6KST9QhzpMQH2FghW7Zy9ZEPCh7zzRHf2GRFvmVF2taW5CDBb8y5i7CefHmjfmtiTdVCWStY3",
  "key12": "9HHYc5bKDjhxu2BKiNaskZcituKANnBrXXsFND7PckC62hgYFtySpqz6oNYFtjPPrdAqKucgwEo8xrnLESJwc35",
  "key13": "3NYLKr7xuUgeaAk58svbtJvJdyVFAQ8jFTbEXTubEJ7rZ3CoaQF3TsFxVr3tCWZsgw4T2Rkgaqk8yLuSjt43VWex",
  "key14": "7UYcHaidkMCbZ4pfZSKAHCtrHwjBSVP8D82rtR7rFvomWWLdD2V1UyXWyMWQy4XEBucG8qARQ22dkHWXcVp5EBS",
  "key15": "36sC9a4ZLE24Ccq6jMCgAsQ9mVmEXCiZ2qfV1rtEVwd29tRzhD4GVwUhPXJLnW1BC3FkTGAB1BdnAXGYj3QKTJr",
  "key16": "2dzRyY2YirxCVQ6V9Dwrh79aTJFYDu4Dme4PCip8pksmxDaPJkRNuPesUXqQFZmi2GVQiLVJMbTSk9jmKqv97o8A",
  "key17": "DrsjirW6q7VKaHQSkwwUymb8mL4KAwTa2et3STdqqRt5d8gNBWhgqPsiaTe6uMQBbrxzYn13zQQF6j3SLp4N3j2",
  "key18": "5pNzyxAZZ2EZkBnjqGtzQbmhZQPMakDRbwZFxXCYhKBjaLwjv3sC3WR1vQT6DrG2FxYs2iKMxLx9Kt3VaUK6M3Tc",
  "key19": "4QWMnY75v1m1b5zMX9bFsy9FQnFQGJKrvuGnWpJ8hLKogXQyRw2uSqRtgT5jzphERgBmu3PT8hT9UGDLkfv7toe3",
  "key20": "21o699QwTUr8N1foXGacLWbD3gbo2MZ2S8vZbeopHjDwTLvMw6YYaKtJUzhqcnvptMK9nJK7Z7mdR82dHx6QXV5z",
  "key21": "3kGZiGdi784EGEp25EymURHQ7biizYtcEANvX6YyDibTaPfBEzgeAiZjRmgCGLAJiUH2EaPntPGToj3EgGRKPMbj",
  "key22": "3DSxJiHPbdmQCHWXEyB56t2goRg1kYHbtL1MGeUZcwb4QJ8n1KHm5g4xRrbBdeTqBbJCEvvC1JtWWjPG7a2i7WyL",
  "key23": "63uiGJpYC12KhvAPT9QPc3VZ8peDfrQXKArgppo42gAQVyPJF3co8pwN63RKF4GuQmrMrxXjb69pconnycKAuyx2",
  "key24": "4TY6TwSoAk6rwnGydu5tktPwn7QVbAcWSFZyaxhCXFfxd7xyFnHwHkpfdX1tZ7U94xWC5Nswt6AYSrYCkp2Adkbk",
  "key25": "25RRMHtFrQAu7KcRDrN3K3aqx53sx5981Qxiz4op4TmaqHNgRwYarozfLh8smMkv2bmAxmQk97hmH4YACzEPm3ZF",
  "key26": "2Z7qxrecD47abLtTnnFuEMC4Ei1ojDPyATWPyT3mtMm8eQiDfJBaayTBdFmTRYF8ui5fc2qAzeyQiSgtrCmmJQFS",
  "key27": "4nXRFYWsqEkJ36QWnBqKQ4eRFexrgQiKG1cBFU7RUBriz7WyW5g44d6hLrAk4L3JU8UBbJysC6Nm6WgwBxKD37zP",
  "key28": "63WVa5A5q3zUQeZYaD12YoXxt5ohmseemhCBjw1gfSF2HvW2bAf3ZV7fCnYFFQjuisdHVcdtRaAZtjYgw78E5UrW",
  "key29": "5XVEazHy8r5MXExjqxkWUH94Sy8xSonQ5ByBFoGezsfprh5uLitWCAXvv7dgRvdPQKJyb4zVNQ31kQU1nHKThR1F",
  "key30": "4S8w5cR9tt3iP2EGwjZvkGYGFFWb5W5JR3rTY1BWWr9f66k2VFu2UudE3jpDBnbQNM39h4VG8ZAezhGxSivMzTiY",
  "key31": "5AMBEfttjVooWpCDprUbUB9UppCWYUFKdWpRYPJPZBRdWV1hYVDr9iDVr8PwrbrPpbvGPismCqpnAhbM41v9S6Wk",
  "key32": "2JbiC3ZfaNzQyoZxqYFwG1LAfuWkENr5qS5Tx32pEm6UJbhUfzoXrTMfgJyUCtf2DY8b6hDUeiCVEfNfHRKK75ei",
  "key33": "5HH4QeoMsh1W4ADEp8Y5HBZLVLNDmpqvxaLT6i7mbLhpKBkEChqaDNU5ktcEXNSohz59PLT5BHiiSrmQt4zZtGFo",
  "key34": "wqLk4gGHsxugnC3AqKEn5Kx6ewfop46U9M9GguSJ5osHVHv3hpxeRZxRkk5pEHB2noapSiU8MRJPrgtvhigPZgo",
  "key35": "5dichCrhvpEtUX2HJPmgFiAfMJNyxpAxRKpodyAkPydMLsQ82hmQ1QS7Jz3gHo7mbPkxTekBPnEmGKYyxdfbGPLF",
  "key36": "3jLiK9tDZe8EsisUk3CRuurHn6EqgSdCmS4GfsGEWJQh4BswBioSY6kPF8zqHhMgpu2GJjpx1w9Hc4YyXCR4gN3K",
  "key37": "5EKxSXTBpxxEJpgvaygSh6hef25sRPBkNrrjtsNd3ShYTLFsiMaUnNQYXwty9qyguYMKraFL8EMHaGQ85FsdC4nB",
  "key38": "nhVnDPsr8N7Z4hHFg2jJCXcZ7nYmUS7WnyRdQ9GoFKXAZU5Ak56rZ6hueT9Sxu7XnBFtuxfSA6GMfkrMkfmJ421",
  "key39": "wEDbDQUbUA3HYwpb7JGEQ2KH1DjNU1x3xCKfTvtPSjXcm2DsWSPP46FWwaVEuKJNdqHUymn3GVxgcVYzfyKNSvo",
  "key40": "2asMWjtbex4QBf8yZs8bng9qVnXKb92wZjmV4XW4ti8WNsueJzNYWek4r3X5f1qtgF2TFb1CxMevN8EQfEBb4wVT",
  "key41": "2n8cUfQc7G6BW4fihYKgSrMgSaccQzCPJCadjtnDYXho4cbbsDG3YDWYbdWbuJ661REpyCRztSeuXKAqBqwEW5aW",
  "key42": "aiMtXeh5knpCpzBaxw2m6Dq4dxFAKtA4z4YJANFQdgSqzTVxVgS5PbESc1PqwgUsmMKjkGpVMvxxmV8SKRghUPU",
  "key43": "2Lwcr42tbSJesZ36WJfFC7SavECJkzneVkCtTArbp6E7cRBT4WWf7dUK7fEuGiidgTCMUJAhsxr3VJUKAMTwvYL9",
  "key44": "33yatZTbyFycfJ9KGfpiUXDNzaMryeF6ebGNhPt8jRmmyVE1WDxwzUbHSNKz9KV1tmFGu8CisBg23p9HpeejnKdx",
  "key45": "2WfsKBJq1kxZeZN5N2dmkk23aFsxuR21NEBdphkgLaxcP3pdGV1YWZMVbz76uqXu4WmJaw7N6CPCDAXQi3Z7ESgL",
  "key46": "2pEciX6heKsKjb7Ld6bUExrUhTX2fi9nP9vhfcjYyUBHk3pAYmx9u4MRfnErm4L5Bg4uXgz4EboeKHPCKaxDETi",
  "key47": "3PTsBXpYJoboD2FKEjfaHfD8zH8GP5UWFCRbEBaacn4fKKvJzWDxkXP367axCdVLnhH8DnCWuSYdL5NTQVL9kS73"
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
