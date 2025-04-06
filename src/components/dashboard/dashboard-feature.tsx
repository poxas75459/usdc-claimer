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
    "4JxyWs7oLHaiQusbVRUjWPgoLxsMCNXHL6H1G6sM7f13Gn2SkKAzVpmqqTmchzYix26QCXiGb6DqKop2D42qZuYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgLY9Fm8f5FmqTA63tcoDmCeQTWLLSNuBdAGkiRqdU1pncmgnDgYLfyg1Zakq1227QYQBeNB4cxjTWvqCYrJFTR",
  "key1": "4tCWxXTk2Ebhhtom9bAhusfNjspEZRZ96CSw2LrYwF5GRAoXWtKGpTaWCfsssC7ckmvWnA8EgrsLaALjTVchmiCL",
  "key2": "5t6hA5Js3vMejyMTxVBNBLorHaWRBxaDwTKxkGpg5KXZ76heRpk3iu57MaMykkK1NMgYKrGbMGr3CdYjr3JeA1TN",
  "key3": "4PaeJCjcN9SvFQ5Y89vnevRvLgjGtNmXyVLhiVaWHngXM9zASvckV8tRBSDkwnaUWB8BegBdKwerPaXeJDdsiWQ5",
  "key4": "CwFtp2PoCXQRFkMhNCY6GbX3639PzKppnzsNuRwyPyDqJ6f5XpSBbcCdxDCn4sbmXtKjYfBKUDcN8a8gm6qJfYJ",
  "key5": "4aKhbsiGEA4cqqeSWyiegH1PHz3baH73ZdaHzujWxkahm8jG9SZrKwQwN5VWxWcN7VqRVmJg1qM7AesUNaHWBbVo",
  "key6": "5nW5LJM3uJX2MZqqbspaDTKe7Mperm5G83HxkFUnke3PMsuoLMcUXtYjPVNhSKbtK3WMu3SVkSTuikRvgvV5P9hP",
  "key7": "5TrK1LVnvKkwayiAroXSgPTCRUXZUvsA7kxy1e416msjC7cr7FVUTv6DRvsRNVgv6wcG8S9CsYbY4EuBcA9e825W",
  "key8": "3tcyo9iorTSxMeYFiG4445XmZABEptYQU144RX6SvvPzcxNSpczcN5TqvP27U7ME1fLiqxTQRaL3fGHErJK473ds",
  "key9": "5wtTukSR8eUN9oK3sGjC7yBxRcNmwCWptg7JfSVCoBchmb7KArQGDPR1x415C1jL4j2FqyFs5bELNbPaVpgfffkB",
  "key10": "4PSk4WMJ3RyceTTB8mbo6fXDwtocBMd5oXKZEjn9GeT42zh6yi5YihisejeXonu72JFpC6HeNW1WhF3aVtWV7ESB",
  "key11": "2VBhTwax4etsWMMYbB5u175YqimHDy9J1thEKvFuqqGN4EqR54haooay5VCoDjeLbvxidfYdPk4Vqy9JhCH459Gq",
  "key12": "5BUX9sYrvgqSDrAq4SyQAH8ZbovjpuSMvW71yqRyMbwd2YRBkZ7YxEvBHy6Wfxp764kGDYYVdVpWtqPtyxea2EoW",
  "key13": "5QWEdL3CTf58XTthVkwAbUQNfWiLUpgLggbD3nDDXamW8zGe1HzKdxU3mmERn2tViiT8QVPceC36A45XjN92YoEi",
  "key14": "5tUGdkKTgGoymS7KxwtCajoU3HWRngF4Rm85LxjK3hZ8ScDaqcrHYY6VUkL4c1gQM4kW8o36wfPX9e7xuANnnkeP",
  "key15": "3o1vxiWnnzV3j1v8ahio23e267iFWfgzWTFmMcMVcRv2YpawnpVxStQpMESjDNm9BRrk4mXwhYLJnC2CKmfRDFSx",
  "key16": "62H6rWRo9STTVMHBSx3F7nab5Yb3fzc7WxoM8x4WewRZjdz4fKX4ocPjp63P72xhkVdKfVdbXfNFpMVjzhW4Pib6",
  "key17": "36Ja2TVvsk3UFk5aTvGRBtTn14Z58j6X7eXDCc1zWVRQ5F6GH6gpZ3LYJcYMFa8i1vFkvQqXMuQb1ERW1DjKsJE8",
  "key18": "2VU3LaCTVEJ8jYsREW9BRTit27Xn7rhJR8BepgoaSNmR4fQFds39Adp6Vckw9E9gVz2VHr4Du28oTpDYvEHt7afw",
  "key19": "2vbgdE3SNgmfGesmY46KEARJtq5kxGZBEP9XCK9WMtrL4EUUoyd4WS57gNNcMQDkY9rD53ZS5QdmNiqQ15bt4nTs",
  "key20": "3kn1tkKckkZ2KpRwFK4JriZ2i4ArRV9zxpE2xLiAV4xY9knkHZeRXDNhsnLC9oyDSvN5hAvcTrZT64LEKq5FVHWn",
  "key21": "UYkD7GZXXtuPV88u3VKZFkuzgaV4MPDaAXNkBPGUozWxoLvYn6GW1Wb8Nax6JMKtYE4HC6S25DXUumG9XQXDVz4",
  "key22": "rc2q6Bx7c8dKFnu91JpKjh1xJQ6LC17RgvJEcUuxCo553KTo2BRDW32dHVvUneWZnfPwvkY175aBj9eBGukyhf6",
  "key23": "4wY9KcJTp8ekzM7PbatPhxNr2EwC8Cp5Hhn6ZuuWBNKnX6VoibMJWtNptDi6t6AVnZyghkicregzMsREecVTiwLf",
  "key24": "59hBtodNkSYNkmjD6cFWgFScMzXE15uA1Wau1mm4q1S4HNteeDgxQAnhZgpBo8AZJGzFB4au1StiSXP2btkcvKmf",
  "key25": "41FenqEofGSudizzmaZ7Sp5ePV7eyfHotfG6YNEUagEdLf7yPM4aSomcLiqGmNaYpBsT7yqpnrpBMyA6ZsWqon5q",
  "key26": "5NRaCbYDG61GYimAsT2vTwpvQXUpRBJ1xCRNFr4imHLWaCCRhfBh9whr8Jo8oJ2adnfRdmUDFcmKpbWcevbymzwt",
  "key27": "37ZNH5HDZMCBKyektSsEL9G6Qv41qzncPp2wsjjNmFrhP8jffZ44SYrjHdDYg7dJHP4m5hWLmeqFdS6crrjF4SV1",
  "key28": "4eB4ubvhui3XCxnEF5qJjaUe4dHbqvoEgfMrFY7ES8Q7yAEGQrYg1gA2ZuXVbkaYJWJakHkNa7amNFpe2mHhbQve",
  "key29": "37CH5rZtk2DKpk9TQn3kLdUFqENrnVWgZjqhg9ULQmZSvDf2LWZmgdxMxGsuDqJY4SmunwSGkN68TkvaeRcQT2rn",
  "key30": "5yMZKcuz7YP5sKw6rhNcw18HHsConf9GbQmeog9EZFw73KxkZPSQ68aD39RgwoAx3JeJuwvMco8Es8goGJtn7ucv",
  "key31": "5KLHWkbQ6at9FERxMn1Qo8hJtaGwGPdfJj47xNZL3FwjEtjWtjWqk9z1UBrrHXvzKBSDXB34ELNMQQ5V55AWC817",
  "key32": "oHJ8c17o7ojz4VsjnUHidLNL4Wn5SpCiGu8YXR4vqERGYt4TR7RnWTyiPzzxeb5p4CnVM9fCqTb1qsLgEFXhcuH",
  "key33": "5DtgT67bYzVA2DYD3fa8tVkp9xMKADh9iNdC6oWdQEdSzHujToPQfxyWXUT5wppLvgDZdq5znXyQVLXWX5pPkN5c",
  "key34": "2XWWUzhYVhKPgYXGRa6hj5TJAoJRGdxFUifbb9W4PibD817kjSaJXDg7QF9D7F2D1khs3BKPsyeKbVfMQaW4LiTi",
  "key35": "hu8zo4oBWXMwTK9Fbshy2o4gNCkHNF9kVuSgy2u6nLoceztJdMrxqzSmLPkMX5KZEtQLhAFAqsp1Gf9Civk4ipU",
  "key36": "3acAV1cgEnTimkVM4UEWkJuSMSxSJQuW1jVt2tiz748oNpfByhKzdcMRKbrtTGD5wpezZY2a9eCC6L3CZitXKYv1",
  "key37": "2Y6wSFEdpnH18SMTPhmLwJBK5S1cv5D9PdoKF3DFTwHAv8XRXnHrizgejkBH7ChHAcizchX8yDcDzwnAvye7KSda",
  "key38": "39XrEYUMzRxgbHbiJUisAgbni4waK55Q8QXp7xcBe8bCD4rQZkTjZfAMkwdEQpuhnn6nTogGioQKALjgNjatcUCG",
  "key39": "xJsheYceYnbUHqmixsezK4sadsNZRAgCgeFweW47XT87YqExaF3eePzfLazmESue1wQsoxbCTjWA7kyrsQh24Xs",
  "key40": "39qoh4HtQRaz5iXFKXfPg1ZAEiA81YEwYURLNn7UcLKf8jNzRQjWUGmhDQHHeSDmgxMqHhjED1SAg2EMrC4sRsyN",
  "key41": "4LThemKgZjs7EZc4aQrfkWi1C4vLRrVwvkHvpiWP5JhM6Fyu92JTPDod7HiUFGccVCLBPiKqP9moK9v8PvpN3Tz",
  "key42": "5x3K5RznxCnJ1Da4VpAgqtBm8TEfF6Ag8iGxB6j3Cqf7Hfy4f3jyrVzhdyz3u2W6kKoswZdT9nuoTwznkJBNWjDn",
  "key43": "MJLeRkhsm5hC39NBo9dmQXPEEb7LWPLst6AnGfgGh6wNzcTjjYYUMQ4bWgvHDNJBRkPy58oeEsjujsG3WchcTCv",
  "key44": "2h8zzUfqLVFqBKqZMbUbFaQZRG13o3ifmUqPZa6K24xrFX5d7cSPTTNcJkhxKkz7TdBym8b3zcx931pPcRiWx7eE",
  "key45": "3LHt77W62tRnpatorPdHaJA2CnhWhKwbdLU62YuweBuqPgKzuKUwB6J6tz6A3i6mrUFaGgZ1oXGdQMXFt4GMDddv",
  "key46": "5vACSW7WAgKzvTPER97zgWznXDZJfyqQnacv7wsi1CVLr31pgsc2tdDsjxovLdszpg3162EFqXr5vMHFVioRQ7iR",
  "key47": "2exQvkmR6RMbGYNWiisWtWsCzPNjqnBrpNBHataYHqQAha38kU5JEmnfBi5nncpvQeFWnAosBXnooos2UhH7tPEo",
  "key48": "3YhBGLoao2un2Yk2q4dk9odsM9kHKRhM1tiTaK7sWkytJGEMWoCohzW7iSoXFNrLzJr4TKw8U7XhBgZkDGD8JmEC"
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
