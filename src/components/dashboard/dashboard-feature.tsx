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
    "5Q9v4jHuQAJ36rkWFTDFGBRm9ZEHTXvXrMqP8FCminXYU5eQJjbJ9A41zvgQ6gLGWhrNYzJVUw1spxFkUHs1jwH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPPfrojj9fTcZEkhwTkgxPxAa858pao9Gt6S6bb4xwjKYSbA766HsqFtXVtwtMUzseWXGY6a329uwnn2dLpoVdY",
  "key1": "kvx4xWirfTcp9foRpo7LiZJ7aoXvcEtFfSa8JAubrY39gVaYccBuVGcnT6wAAZFfu5FUjCSQEtnUWinzLgStTVa",
  "key2": "5NAz1BxnUUhcqqMD3tDBCwDSRi75LJ7JASAT2hVbKnSCdWTKmTpXtsHaP94Hs3TxGnjWDEtUCs1rY42Ma91gZdYm",
  "key3": "3iTtLNnr6pmNDNemTHrwoxxYLm7vrnDijgnnPvDPLgwQkjcSVvwLGnWZwZZLtp551CKgH7SuK3Tdhnr1QhM4TH6c",
  "key4": "2ckYh5mFAXM4fCDWphLRjCUuHek8dsCqZygmcWMuk4yK6NwTSviykLup1CRfKdL62bBXK4MJ8LU8F8yDXx83h6iT",
  "key5": "2jFpkJHppR56CcuZvMyQJQ63TeYLR7r2ELKmbAXXBsxBYqLvAroC2sk8XxVUgnCcGaFKijnvxDjka24eqpwLLSZT",
  "key6": "5uF5H9fNmLPtv5eMK5kxv3wF36sgCKQeYEoLZP4QN1jNgsZXnZMRAM1oSD9QUvDVTiqhViqqbJs5nsz5df9waH53",
  "key7": "2jVez5nHue2RfYThbc7xTcaACDwhWvkrrXiai13xaHaeM3cxgdr3wcrychzxdmpAAo5wFwtHcZoPUWAs8tJdyP4m",
  "key8": "51BbAAs6rE7EGvNL7qEfpWaui3MiFzDPaZXpYrH98WfG9BGVwoKAjKthTuv5kxpChZNbBVUJ9pt63gSJJd8LwnH5",
  "key9": "JYwv2zFbqRGYDg8JEWKVryncFpCXTBsLSSRYBjzG2mVtfr1gt9AERGkFnH8tNssZyhbVx1VZKM9ag4zGrwXCutS",
  "key10": "39csLF4V58KWwwdvqN91Y6zj73SJ6aUn7jmPiUNKrqZnhGSkdGjgmSNuTepL58Rt5ULgkny3Vr8hYYKFyhHWqWBh",
  "key11": "4Pjb7TZqBb1KM1bVfFaJP8gLoEbi73amEApS7Ev1Gd24byPDMhpZ1gnHyHRSfHuDedVaFhqH8CNpxLqM22vymX4w",
  "key12": "2cPDWZdVjx6fxAixRsApN4xAG1A6kwV4jdNigMcmaMcoFBfG74EEAmpJR92sMCTsV4sUP4CZQ8gFxELnWzh57Cnd",
  "key13": "oLmfsmQ1GCYvjg3Q4fUKNGj6QEgq2x8cQHCLqAiNKJyd12aV3zQMkrqGtyU6Bqn7xdn9cauwhLq9vd9LtEpCopu",
  "key14": "5LUyCBJqDyVTGHe44x7T5FMUh3FBCxfxE5ATpBdNT7PSh1ixZcnvcX5MWTrcb4AeA6ABCLXpCGjxQjRqs3QFquVR",
  "key15": "1vpRaeYmJer4z3ZLVgLCRGiAdtYAsRAtZyvDH2i321iEMMjyaknvLhevVezWyXNMu51cFmtQhXd9sp6hbMb8SbF",
  "key16": "39wf97HtxctYTu6ifwhbD7ibuRxpRyJxwVCNkX2N6WYG9aCtNMgGZQPqLJ4Rz1shjNMfB8TP6i1fgXwphGE7yVBo",
  "key17": "3qesco3wZUmpHGcuvvbcgs75S7QsNY2gjSfpszEStQX5zbUaDdKGa9jQ7rMaKTfgXriayb3j4dMes9mLk2GbfjfA",
  "key18": "3bwbCtA8b4KLdqbggrP2JBgFhYoRAp3p7DSmtsvdEhkGuKKDtd5SPp8mhPnudX2jUwQtftZr1V3mKRe1zRBw1Biw",
  "key19": "48rBNJ2ktzPDN6zN48gMPcrqVQFpCWhBPLvhiEsNPSufki43v3sxmdL31Ax2WBaDU8eyPwEeGLGGs86odScH9chh",
  "key20": "4gwUrAevccG1dHeTJam1miQAsXzfwErdTEcXSB4RxMorbp4EDSbgBrpjBJk3Kxeyq5o3zjv9WeU2UHBjZG2bVAkx",
  "key21": "48L9VFKWC78LCT7d3YRpPUphQncMSA8Ax6f6mwKEiRp9nqyMiRC62tbB76qCgokXLyfhBQAM9Wm2T56ZmtKGvAV5",
  "key22": "2BiG64iKTXY9FmmdGtv5igJzTMnsQz8j93LNYgoSbgebAbZnfJaDPMc1Eccnt2SoMyV5DbB9Wu2VUYZug3suvqo2",
  "key23": "3W4cYqnS8fb2yoHth8XLfJhDEvtUc6oQw8tQ6MzoV1puDgFfuzKEkjF1wXA45hgW7gCNmpm5usDVjgGaieQmeuqJ",
  "key24": "4iHEM2Gw2SyCv8VqUKNzQYjz7VVrLHpdsiAp4ZJVW8PCoASkv9FZ2nGcKk1PpPVpqdjdsiP2v76wTkS8WNqc9mYM",
  "key25": "5pJPgccc7RjLRo4wbW27R4w34uz49TziH27DYndB38mPwMJndE443j66W6DLFahnCjHVHiF66VCtCDQAwE9kC2pu",
  "key26": "3FRpQ8NmCgvQD2arkkqRCxNK2QgApVEU4gBrqF8H1t1uWoi7FK8SeWDg7KhSCVtwFUgTYu4xvzi8ZL91kKsZE19Q",
  "key27": "25hhUkij6wgVphZdLZSSfVzh5SsZmgPEaF6c5qmX8WZxfucYR5x8wo4SQA95uvDhVZPgFfzdCfHWfMsUAW1sLgEN",
  "key28": "5kZpx7ATyArtm8qwTbuXt8naSQX3DPL796HkxxzbUsZJA6z6QTqGdf2yg6CYEKMoM4MNHrFGYy2caaaSW7JMCGr3",
  "key29": "4ntLYsXFneC33v8dQF4wWnHxmak1FDk4Tt81JhbTJKuizYEe2xoaPNx7B2TX92Yzgx9pK7YKGBayQAoMzFmPPvTP",
  "key30": "2nsBW2owP8GapFDUxGog2nNvdsYJnqnMn24y5icY2PrZKiFRyvuWiiQDtspC5oFmiazNK8MTRneuT8uJjaZnYf2H",
  "key31": "oW3ymPSy35kvpUKZZyUaoBB463Cus6KoxZMpkF9ZumC6bVktVWRLdMWSr2HmFtDC3npT4SAhgFe8zgNJqFsEyUb",
  "key32": "5o74aCSHfUAeVZZ76VGJ9iLT1cNak4omRTT1fz44zBAxM1GrM1aawEmpXEEpqWBzGYc1sTJULjtyubrBEktHa8FR",
  "key33": "5kGh53XGhuynQ7NJM12ztJ6R76AjLW7XhewvRn2fosW4ifEbd75Kt9V6rmi7jkY8BcZjjnFZ6HeoQ3XRTQ5ksDFF",
  "key34": "633qn9p4ee53Pm1rDef7FEeeocgw6tRs3LRmx2veZoqtWUbdDdgqrhJM5cFkS3KWaiqZBTffnMmMPw2D58ULJgn4",
  "key35": "2i4tTwWiDsHWT7UXDcutgqAhRB1Woqx269hsUFzPPYr6L3vdce8E8trJUKjYGaqv8GaCwFDawg9zuPiYHhBdvKk1",
  "key36": "2pdH56C4LyXmUKHZ4X3udzcVR9swQ9AL6AGKL4pS8HVDoMmmDdoYHBFe5pgbShzHx9gCywQ2f6os7ym5AyqHF8DW",
  "key37": "3PyhRXREGgZXsLNudvUdtts4r6gBKcq2j1FmXCoyUkLMBgfi8rS5A5hfV49WBLc5539PyYs26EfZcbPBjdXJNioi",
  "key38": "3TGPxWgGqZguM8GnYpbMuUpNnkp28uKgBJDasWiAgho2AR9Ze4wUP5Rj1pZro4vhJ41zBFkp6rCaFJi14MhHx5v1",
  "key39": "4TfNy6H43E9kgtin9uiAyv1ijGicp6n5B171RcfweKKN65Pf4XSoJzX3Z6EWbbCZjbbgjkZYPk4UeEbzREvG874L",
  "key40": "Qyjai26aD4QCpmqBXpPv6mgb81crsKwVBrXaETkypoi8dkpqsgZjcFNyBPieBDsnGhDQTzVFEDDJ4RqqP8Wn7Mk",
  "key41": "2ub87pmPGNkjJYxTdr8o9dkxe9JWYopbc5YYX94hxY3ambRAFKQxt8gp9R2XehiFzYkAYEksw1jxAT4ASuP3Ru8",
  "key42": "5yeD58KtFzD1eXaTaCfuaSySeqXy4xQFVd3EqQFQQnAfWH5fp5e71KDH5batDncWnk4q2YXzuhwDGDiqBKxgPaAf",
  "key43": "3tiB3Jhz5rxp1bXoJWapLgiaNeKLm4ifLsZNhZv7rN1oGpT6VV1BnuXELHaCWspQ9oUTG2XTVodZF6jH9nqAcy9B",
  "key44": "3E2MbxG2e6GFSwave6TkPBdLiEvc4gyphWaiNcc2QCD9iaLjZJnkxMVtV9tr3wT7N6rvzbjdBMcTKRUMbWbayYt5",
  "key45": "3Xh5Bcq6qqv92iK56TveMGyZhhree1cf37PW8GkyY31HzwbcQnJJ5XcEoyzk9XC7SjT8QRoCdCGA8WN8maABzdmN",
  "key46": "588GtsRAKhZmWC8NWPUjffSLPLMCK5CLMK9AJJHt7MGMJkwt3tYDx9N5tQ2jBKFuepwKpjJere8Q4McGZJBDqRyG",
  "key47": "2i6GSkCtbsKJ4Gs5xFtWuq9Hh8WNruNCLpDHQprq6PKxmyi1TyH64d3Lj1KEEhBoJyYVr2yfPbs6kkWcw6TL6rie",
  "key48": "3WFCVHs1QsLb2Awoc6wrLcz3G6AxY38DDiJsTFKo33b66BKkdqXpSVqJpmL8GgEHJNyV2Whmj8HDQQADzkp1zbNk",
  "key49": "mfoEKPifvGDhhQ9QHipWaSXgS2ztceF765ErnYvz9xk6qoWcjD3LKb73Jd9tNzsuvUo52BERi8BfpSTxgA3ESJi"
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
