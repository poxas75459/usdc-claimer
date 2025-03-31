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
    "sjZF1hzGQztNKuxD1eWvZSaRFcnu8f75bEvQtx7ZLA7U32sEHHBxwp8FQXeAuiQJTefsaVMXD1svUT3keLuy6xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qrXSDeoG6k5ew7ABFEkRoGY6555UkCNDVzckd7hdRnw3svSHZhts9x3w2vDmnCKi3obhXXVbUmXNaEKfE1ZxkE5",
  "key1": "4pwCfCBPKrpPyDVqMZXfXWfuv6AcRyws5C489w54RJpDXc1P8jnijhTQQjtKi5hNcq8j9hCr9n1nHvaTZX15k4ff",
  "key2": "3Qb553huwv9AcnBHyTTGB4nLcNv4nPuYWEZVrzS4Kd6FdTfhQqZCSYpaVEsKR8F1aH2zzkUZiAz5V9zXLK9XkCJs",
  "key3": "2akaJhKfJecqi1fkmknDdX9sHaETv1bVDazikD7U9jJJdQ3WxMr95HVLwKYmhtPzWuFSHwxMRkseQoAruLZ7cp1s",
  "key4": "ySdFeD3bWWYGMkrCvVTKV6oZtyLLvWGdnfoo6g8qCspppNNTjPLJPNZF7x3PqawqFsYQ7uiW35rXCgEWGB8tkpG",
  "key5": "46vZynJoxCgspwXGnrxz4zMhPtE6sSqXd2sUkSd4zwQWni1G92WYQ696B8vP4Qu5wU3RZbFrikmTsLQKksJppob7",
  "key6": "2x6w7GsY4fHAH111H24P8kUfz3XhHyp3A6fegByq79XYXZARKGbDywXUcG1Tko4wwxJEVMGWFeV1VfdjsKQYiYCA",
  "key7": "3bKNhDhBqVssGCNSUyLuFWX4DVibXfywNHuWfiyetzobZuQNnparJ9tNDj7CKytENFb5nX1Nz8QJjm8cCwSfhk91",
  "key8": "2nCxN1kPFr6CLDcoWc52fF6Txxxe8BMdfk3hLZrVTxcjAymwbmkRbDuEehtajcGCxrJFDUyFwq7wouoLAVxr4RYh",
  "key9": "23KoMM3vQX5DGnT9w2dNEVPR1xadeRJvpUfPCyDriw1AN3M3qF534qK9y2BD7xT7WPv49g6MAcyDo9Ava7D5g9xa",
  "key10": "5Z9FtzikgkSGh1cxmv1vYch2wfyHii59Vzh7cPFNm8ZbZBMeUPtumHzNwmgz91FmKh7pvwfDkUD5fVEnZBDgFA3S",
  "key11": "3jmojbaVxzo221GFpGvAMY21bCr4Uj4JNwhwwusUUBbPCNDKf7XDGijckR8yFcCfspvwgk8z3NG2aMwNVPpN3qdW",
  "key12": "W7vWsSUegHr8wNvk5Y8oZxn8yRhv94GLzW2NvscNLiTLkioitAx2fjZdoqCrrc1kUP4Pn3Db5i3kShEdC7XZeoi",
  "key13": "vWJDP1FDyFxanpRg4ZiMKbG3KAK2LggK5WmttQCDL3VLJYsVSPuKo8uL1oQpAfeTsDhQiMJXyen78sWvzvBd911",
  "key14": "2W5DVg6BTtSZoigNJsUaxBBXZc7Qfb7jwtzJ9TbfFkBtnGtgnTdTMTc43mECG14ofPZj5nKfrsQvf81iXD3G2ehh",
  "key15": "3oDDSgQNg2aCpBPMFRnUMhMdq5LvqUpAJWogPyvxuMbGAt8EUeaQzHFXe7cDACmvdubQ6435TnPEbpKxaFcT2i1b",
  "key16": "4JdFiPP9UgZTEi5awApDZqrPuisiUYfKaf2QBoGFRpeas7SYeEcgUsovf6PJeUjXsXzLXoCZGZ9owTdbnS21owJj",
  "key17": "4xfsN2PmVskvkdwuZiKwLkybL4zJTi8brW2V7RDPbiH53EqhViBAU7eaiSy3jjDLmKg24SFjZGj31MvPNhwgLxp8",
  "key18": "5N9tHarE8NAc8iyNHmPzpBV5WVgMWs6SZonSpAqpxhkN1RqwvfLa2qQ1z5VscDxDUHFyjnjC4SpvhHiWbKzB8Ee3",
  "key19": "29nii7neBVhhaFPCDa9UzSrFf4hcwFk961ijArFKpra9iSa56gDDK7T7ogdnUduuykm5sAuUjD55RBEAmGrBPAmM",
  "key20": "4wzGWeEhmkzgsveLa5wJbDztjHso73MQuDMKAWY67ojbE5iSJkiA9V4RELKwTT4HffqXAPqFsNmSQDTYbDb2EaDn",
  "key21": "5ho1NUzKFTYPJiLFeajGxtY5xgUvM7XwUT63CW56fQUCGF51afGkoj3AGhBNhLu52nkouCZFLYCjL8D84J9acpqS",
  "key22": "21RuufssPiMZSgJE1JFyX8ePTAWae41ugP2rmHKh31xwmYBDXeQ4JWw4ZJFwjWw3xoMkvFeqYera4ZtDU6DdWRaE",
  "key23": "3woCCT6zuWdnxygvbuGtJmTJz9Y7Cwv68GpfCGHMWwhwpNFH9ZCwABVJtmPW6h5XcqeaQcBWg7fZPVEj89wEGwHV",
  "key24": "3uKCbWvNyD2ThTDmVr1XR6FkGQzeE1vHnWs4NvNZV4nXiWzPu2wBybjxRuS7WK1S81fNS4tLvEpaFeZtaXhFM85R",
  "key25": "iFNuWk6GWtFBa96i2chAjS3JqJMGSwnmCvdSAdWtZWntiJdCpwnVF9wmCuose3sjb7ANv9QydYFBUmZzFdQ4KG6",
  "key26": "4gpH8NVvLMDSmvUd2Ayqb2fiaebXeFUXFR67LPDb8cNdN32CsL43E2LgEyKEG7kVAQtPscPUUM5F3b6wopeUbkQg",
  "key27": "558K4sMLKZq9sbTg7Mbq17pecBdraHdQY1Br9uCo4vYoQeJGV1jCejnwtkJtg1WHBtHQRqFwKFHfsvvvx66UXcSu",
  "key28": "4MyuAJQv6zeE2EgcGQfYX91VGpD6o8SDMiALrPp3KgJY6e66qtE3BiKVnpNuKHvYxCHRXuqfmPadUsQ3dzWbn3vf",
  "key29": "2wxHrdthh3ru1KVSf87cMoaaLrXKKqXR3WssjwWc8XJzvCnZa8NjGcFW33izyn5gUABdSVgt2uK81CokqHRiKnxp",
  "key30": "21RKtMgmdyf7esGT531o2MnCAwsUTCLPs1HG39LQerRtMF6PTJH7eZWAEhCbBidYatw95MpUmZ1dYawghTZV1k8E",
  "key31": "41MyhpJ5FXBh8HmNBx541n7cpgWxnuGt2tzagiyr6PQ1M1v9P7NGCDecvNWiNm5MhgboV9oG8mbZYvPW5B1sdrHo",
  "key32": "4zAiUjDwFJzLmK17nA43MvzVqbYtKfxuRxus8kJmyESZALswzGnSbcFJkfAKLNxSzZZNJHPgNbDum3Exs2AWBoru",
  "key33": "3rKZM1Bqb73gnFyHNnkE8TYDHat8p4HjZyzpFD3Zs7ztBGRSTdkMh87Z4CTPiXen69cHFiKHyq3AXa5kxHv59Tdr",
  "key34": "5S23o2tabsidSvZyUjoDNppoaXo9a6FfZXq28rBhD3WKcND1kwrbwU3Lrbz8mjiBn7dNmDgu45KWZV1nQbKmn9Qm",
  "key35": "4tgJSzMabrF7R5vJWzGJrZCh7AnFNWyt2xFc6GWpaCuzV6vY5E7F7iqThXowf98BjeiS8PgJQKG5MiwjNTJMT3AW",
  "key36": "QK7HiZVpLn9omY64vdBAuMmPxtuvWhAZpeRGEhDBLgjVCFPhsxRA2X59vTZJ5LXm9vzhjMhNMifwERtAYeNeS9S",
  "key37": "252vDyTtQof5rYfd3opKBdxctWAR8frGdp4QMDkWWFBVMsS7jtnW7UE2JN2Bcb6CsUrjBRuoyth5BtXnHPCch96m",
  "key38": "2aA8HXLa8z9uy5HmPjCxz2brqE7faxhNSsa9jWwgFGBiKmY9p3AEa2kNwbSq3aaav4CUy8YKBjWgPq28eWPnd2zG",
  "key39": "4FPwaxeGrz9U45tzrugVXXK9gBxfCJwsscz5Qy9EM7fCiNLKJiLKRfhRLAV1WtNuqSTZPhjwR5A8FM16wpRWusB2"
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
