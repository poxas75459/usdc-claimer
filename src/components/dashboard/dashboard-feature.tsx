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
    "fRf1HYGUFZzB5LNAfPav91TQmqu4gcsWHLD3hDeWzyWvfzLa26Q5Y2ybQs71MzM4mMC26MX2qYd8iZEPBRqWwm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4xKBAeG4XRFeGwVMyeNx1djsxf14eBRR2DMyATF2EgaaLaK4dyrK9nV1jZYgN2zEGQt6aApYBRWuX2yCbGfFFV",
  "key1": "5xXDM7EVsxKTSjz2fkEkRCUcwmzkxrjxs7A5TiPU1jpzbynQiFGYeG9CTPHyApPwwn1cQYJmh3CtJAajNWsJVCo7",
  "key2": "2NJkaYLpvgk1NLPVPXX2iYag3WMm7EgiToetGB2jhwZAJxAf26FUapF1GZ7pzzApMCtPPSuXGnXHLNBPhtacCpHZ",
  "key3": "651sH4y89PuiDEVQL4gRj3sesyBmacexk7KC3czcoCdLmJYxNeNuWN1fRs1pFr2Jg4DXyixYkNbfvhQhtSt4GTkL",
  "key4": "52kw5f1muvgcdNzRS5GZrd56Unw223jgkPxc2xBLYRq6gYX8FZFCarCr6VBtS9CbL8Pdc7BZa1iLSFrzyGo4Ar9h",
  "key5": "4DUV8FsC4F3SwAjCKoth9adgmskabq5vZrCct5aCUzoUphK9phySowiUH83A6EVRNWp46rM1PCPmb11df4gnupLr",
  "key6": "2ZYRFhpLGBxD1ojExfMcpUd1j8XaXjB1zoxG43hqA4QynzoqXDXjNHaD36gkcKCkFUA5zD3EeqJinfTii6HusUPD",
  "key7": "VdMz2DEKf8mUSFNHxkswFZkLMHbPeJYyYgBsMbVmFztBkxt8dgiATyUaoRqgUmvCz2h2jujjA8AoSXhUnAdFVw2",
  "key8": "5e84yMXGQCfVPHmBE282wuMoBN93tKTHuCL9iVvh1XXqX83AhRDE5ipw8do34e57x25GGB5UaqPSDgeppgjQKUzh",
  "key9": "45ZJhZbuL6Qtruh8sePmKAZvNND8SudJj3Mc7WteDLstnm9QAc9KyTv5p4XpoVuPk85jrjLzjFrrG6P68DfiCr8V",
  "key10": "2J46rf92ZeCUPofxCUNXRnBEMia5RQUqtWL7C9aRG8LY5ixySvMfB1GgdJcVRv2xmZLP6uC4Vip2HPwU4MAXVG1V",
  "key11": "4kyGVXCHa3C41DCwSqot6PDxpG1Gj9R9jkpn6eoZtDHAP4utk5dUtCrVDmez91J2mqr33tfWf2JmCcsX9yfs2hAF",
  "key12": "4NzsZqRpqd95JLd3uUq8yhwfk9H2n1Aqhz6dTmmqC1a7y3Phq6gMyHw4KfT8igD3Q4Bxp6Czx9csf9gC3UNmQioB",
  "key13": "G8U9PmPcxbfNyRiC29YCTZChseaZUyWZx4kG2S4XThmz1QiPVkGVuxCehNW7dXPu6EDjCSQqVF2reXFWr8GvyGH",
  "key14": "5NBqfS19wZ7arVCeXa2ku7GLTqrqTP4yrLFvihNG8H6igJMmM22H6jcWnyY4E47FPhMCktLUrsdyobZCxtrQ2Prb",
  "key15": "5Da6Ews8zbcQSUGEVTYPoXY9E15zKsa6CBQ3Ar4paZNPVxez9wcVf3JpXkRqsp35n1aKSgwgPiA3HrtK1GdLDsmd",
  "key16": "5x3nHMRok3k24hasaorJA1aZV3wEDQtEGV6STfgRG3RP7Fyreyd7JDqTjDSq3dLDrKJDMurp7RdsZ9i4ykM41ekK",
  "key17": "XqktmJcTHhN1HNRnRQ9aWBax6KfaWEkdVQbESjNmZQZdSGmDQWG7mmqafHK21dFzoWQQr7BDt2ZLs1KSLYdhiJL",
  "key18": "2QuYJtJtEh5vsirCYHzcoHkkEB124djcbqRLC82rymUYrC55ZDnuNHHeRxXWPFrXWNXKj3Fm8cqV2GnSHWSwR4rn",
  "key19": "M3TfSexRZm1LnTSYqbZBTDmGN3usqEGr8LfhsVGNuNuQbt8ZLHPrmcvNpckvFW9EFkDysFSBWpG6fs1Pgm1as9o",
  "key20": "4ymdtM8mFGP4UKe5CcdjVRKsbGQuN5RAeHmG9B7Pno48SwsYBdurMNxKLYJZ4xhSs8BTqPp6nLtcpviXu9K3XMv6",
  "key21": "3CQ2Fu63RjBjwu9MghLfd7uCwLtehChWdKCkAXLMNZcNFryzN23hJTcTCfGpsjAHA3aYPtzoS1MaGfn64yhvjf6x",
  "key22": "4S7s8yo8xxUDjH1gbiMRAavwgiAMRQLH9ovWfMptbgVWRqdQrPwVo1AdyanoBB2GUCWYUWo7gbGE5fNP7Qi4t4qq",
  "key23": "2DbWqvoDf6RFcM7GpJqg3J6GS4gGfYYgUXf5ka7FELMiDp3KHV6hc2QreiJVLZ12AiHpijLP7bF2uFNiHaZeCc6p",
  "key24": "66cUSoJ61CaagNzTLJC8bCekBZgn7pQq2ThTJnWFmuca3yb9Ts2YdNm3HdRacg71P3hHGXfiNscwHnw7oTnrwHPr",
  "key25": "5vCusXwWFbXpxwvbAdhVhGJGypcafbpGvPEHanST3RG1KQymk5jLfySZr7fTqmX7ExuVGwyNzgdL6X5xKTZTDoMD",
  "key26": "218s4GJeA84xfnqKM8rUtSRjvXtLajKxDyacSQdqG2dArhJ4wHNtYu3o3Hm5uomEwC7ojz827BUruvLSbQmQ49Gf",
  "key27": "24vrRmKkgpqUXJ6VWiox8aK6HbgPW5ecoX3CQMGJbbu4NirbSxkwiUpAP7tL6oT4bxeVkxSXJMykoJFvhD8AKfSH",
  "key28": "Nra55ix6DcYyTnyowRpytMukqgkP6acKRPt6pLQ5cmmA7j36hEbawKyJMZ7nxHXuzUi1h5Z9CzXjeD3NPhYBpoV",
  "key29": "2c3q5dJ3nzLFAmmygv6ueKgGhK2VgAkL8eX1QrG7atBGwkKJvZSyFMsBZLrEhAYxXJRJREHPRoZot8Wn7Tqw763x",
  "key30": "5Ld6hgjH8zJQq5zF1SAWttjanqmqs99tuig2vMNJHULcHEXv1LDzKkX26qQfLarqru2YkqYoSjDtAVkudfuJoUQz",
  "key31": "67SZt39hABwG5ST7tQGVH9F1syebQvbYjPQv8GjuPaKBv5YuPBmH2qJ3ZnbCCHwNbGRpdrme1wQHLJtJe36DqPou",
  "key32": "3ndFBomzpHGUNdLGeBWPWGF8wPyTH9fYDtgf7Q2aPpFmrqXHVp2Q8CG8jCUhmdmsBdE6Py1oyPGbQt39SeJGoevL",
  "key33": "51rtcLu1aF1arfKHFWbFmjF1md7h5Z8Hii3nGpuJ4kDwxHogMEHkHquU42H8ixhAwEGmgux1m9wgaL1XPzyt2nvk",
  "key34": "5RnHCT5inj5ujijsZ3LCneW4DfzxsM77bnpdSK6VATh8U71YEaXBgqgwtmYEHYhgM8XnfD653uFfbDqTscFjiyhZ",
  "key35": "2DyUtTWdAuT1Lt6nRssDK8KNnY7g2Us5czDMpFynTBqc5s78hvEC7GnQ2Qb7xsKYaFMpWYMr35ZdDwZNXjaNZWVQ",
  "key36": "U8Vckjmo5F8WNaELr8ZwN9z59xqrStCQzgpKVchEKuT1EzXoQZSvQTb8gDq84hiKWQ52AHevng8t9VPKvQTv61A",
  "key37": "4JfeGev3u4rUCZi32C5YGwmTYLs6aqTUSTnhiKNytibv1gzudtkuxev1gcrgZmxkPFmP3YSCEV8QRRYF3o88LCUT",
  "key38": "2vgan8ZMc3DvjL9bMaTLfEHFfxnt8QE22ppJGF1C5TYHXGBUWHukXChZPz9HvZQxAZNGosminyyaVQqbofRtHFHi",
  "key39": "3y5FmS6MXoY6xt6ZJJ9j5JLTEVNH9YvkxawswtjmcrfjfV7LC76fVwE3EgzivAE5P5KRgkBXUSEzHr31dS4mdkH8",
  "key40": "3dU1N69b7m2766xbLMRRfaxmBcjNoAg7X37SRtmTbs5u3vmJpPLtMbW2b8tqFYP8aPU1cxibNvPPEe5pXYCY1cCg",
  "key41": "4Bug3wg3ibFFYBU1JqjKneHWRXbmAXL7Yf67rUGfge4ptZ2kMefYiejBBJuRM7NiYXLU4MxusivaNnjT2swSsxiG",
  "key42": "37FXyxsrJXxcBjv9wPcbkWPhAkU9X5pdZRHkVkoXep4cFGtYLPPJ6aX7xTJiyubKuh4guNNZqczZ8trs7DtT1eRx",
  "key43": "49zFVUaJw9oe91R87RuN5Qa2AUJDzHHZvLyPNguNb7ZnJtDrnss5dMV5HMqpeW6e3bwunbtY6YMWmb64uBycj2GG",
  "key44": "2wCY6DeYgPkWPyAqUsPBAaDuHjG1Qv3r78Pfs3GKcmDDftR2gcfpTWdb7dE27nSEBqxT5PgPHz8geCCS8nWiV8fR"
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
