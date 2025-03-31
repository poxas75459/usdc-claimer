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
    "9jhzYqjSkD3Qmd8eg3y2vpaW4UQLddqTcKJD6UZMa5Z3bLH3gSLyLRzo9wTww7mwB5wgBQP2XP4TYEcZZ57DaeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GN3ASDf6ae7d5PzSQabaDdLSN9wBeZZwi1NeRwYEDGDPxLFW6qVtNqhKanz6p5ohXHgbh2ijadycKZmVji1jt6x",
  "key1": "3m68ct8P5Tttxn2spwNHNHGAGDHhBeihmZpr31AXf5PgURk1t8hJ3oL93YWcCk2x1cXxNJsCpxSVmZUQanAjRhX9",
  "key2": "2NQf8Mvw4bN5GMPSTr1r3raFvgDHCnMrtXZqi5FCKgh5vzrh4tgg7jCr6Rb95J3RMdBkouCHxHHyjNaRe9Scw4re",
  "key3": "4sDf8JadJwNrTbUCwmKhkMorFso4U9zNU2vot55wfX544qnsFux9oaC46W4uku1gMjjnZQ6Dj87ttTipX2tAqpc8",
  "key4": "2d9rAuydfdMa1y4giuagYKqxPkeidpEtQavj5qqMGWTZfUELWywjvqBVqPx8qwV9uefRY7GDkeqLGu6N1VnWzRjW",
  "key5": "2Yg1ySK1o18uNjTh8H46uSkdjwSNWvqiQaWh2WKJmNcHtmEqseRXkwzg1a1znNcyuFhZ1LmuT8tMGbEYqhDTVQqm",
  "key6": "52s2dHpPReUdgGpSmeAjibRkd5XHaKkhASA25Ytf1pmirRT6KBi53ovXf1ys29A1wCDTgsjsmFhY9bZKdCxDEzwr",
  "key7": "2nA7RehcPwkY7trUJVEDUKqRqsiBLvNXvudVKt25bUxTLiLwj3sYtap4yXZQzZquF7t6MuGAmUMeZ9TxCRcDhpZP",
  "key8": "kyoffAucoVu6k6vXD2mxPdrzwtwkiZ4ygSgDYAhk26TbGv5RebharwEmVsNoSo7AERHymB1gocNV9nu1tUfmegj",
  "key9": "59X3tj32JydFq33csoUGLoU3FfHrgcANKam1oQ9hbV7tRGpGddsG2mXvazK2NptRpMqLWKPniU466Jwt1xxTDvpV",
  "key10": "4T8hUDgjB1W6bSqvaHkmDKzwh3bacQBef86tC2kHsX2omwyTK5H5da5xp8mmebUo7V8wSmhJnYPgVrgqSmrGU7m3",
  "key11": "BkFiLUKiFKEJYkDVWYH1nxx6LeGM6NTTJ8E9dHNxHNLpM9A2Gfy2KBeHtbHoqxZPf8Z9Z9b3DmJFUeSn6cTENPs",
  "key12": "2rz1CZWwCGpNx5GfgQ9vwbrWh1XbdPTHTC9vu1m9GvVu2oNhD8GX5KtZbsdEzpiwRUba5L6VGHVw5e6dix3LN6cU",
  "key13": "4RiBufoEvVoU62gq2zswS3EhWP1VV3d7pbBkznCzeVw113J8cfEqrmmYpKo3SrMXxV5kzfs3nfCstH7S98kVSEpv",
  "key14": "xe2t1zVBvoz8yiLryQNKtiAfWXet6i7sfzN3v9PqPDwaFidx4Z4yyH31eRqbqmDy8tv2wmkQcsdxAPHwVaVhbeY",
  "key15": "2SHLS3FgapTE7uKWsE5eyNhuyi1tQf2MyPNdYtpKYLE9D2nDXtfWKt9qCMgHXrMznWPHqSf7PNWW9mzZ8MtNB7EJ",
  "key16": "2LnbNDDRgQpyvAqC9BTqLx5RoHETy2LwWApa1trNYbZWdjtHM9uRCSocYHDg8GPRBGSpYe5ogphFDTh3wwhBYd3G",
  "key17": "4jRhtHF8izuvjpiTpT6Y8LansTz9uNXG4UE9qJrobdfPsCaJRFQPD8Xpngbt1QXB1f5hEXyYQEdvzDHfPWhyWGzf",
  "key18": "Zs7QZ7hRe2Myqu8qRpx3gk68UMor5SiaM266baR4jfTPXMJYJ27KEL2Wsuoq77HpdapMDuWPpgkrzk18dnpCfp1",
  "key19": "4LcZyijG8Rv9cZmFxuJk91jLucMRRhbp5W6dHQHD7TnkYn3XyFCK86pgUvufy6uuPFD6v1gkJQ2Mc5VgkU2GUsMh",
  "key20": "4kheGoGnvbMJ6KHhp4oJvYgXf4phWWHzuBbcRpGJB6rf4SFLwpGC2XrTXyaWrkVstSbi4BFQv4XaaWM1wg8CbsCn",
  "key21": "4QuFWkBLz8Csx8inKnw8wTroUxxF4JjcMXa3Dj4KTRtTkKUmQERxUfH9gG4dA3sFPB92XY26SeZXjEBD3HVVnzto",
  "key22": "4cuev154A332G5oRUHEWwfE5ZsX3FX1wxWFkMokEafT1kZL7RZRqaf5PwcxM4QtSg2EjzzDKBcc3ABKiQRQxmFJM",
  "key23": "3fkdADY8HdiKn6r29RozW7wuH9kgiEbKjPFdfr9rVkVvAMRByqYG9J7A6Fv8w9S7UoooKXRsdTqgcvucUE9T3PTy",
  "key24": "4udiWmMbsVZ9ssVL7ArbK5fcRiNS6AHP7z3rWh2J5cNAWNHbfCyEDQ9TSek3ugtHbbfmmN4Kqczin1oJUifMceMR",
  "key25": "5v8XZ4Dob6aySHWwfutiHHprtP6HJGrwWKDzvj3TpyDJ99WZezJpzb37VLHeeiaCQ7zaQ5UbFmkikagEYacBpTHE",
  "key26": "3M3jaCcpP8koUDMECKPZUYEyyoQ79x8EK8oJAuGHEFanMBTJLhxwXvsg28NmEcB39wR1HRTbQnJBVZRwo9sTjzF2",
  "key27": "2eZyqJ8SqeBWNPxEx6FeRBtcqjGR9bgab6SmPqyaAcuej7LhxC8cJ6pGTpvzGc5oxumHP6tSDRqfzc8wMpdfSuD2",
  "key28": "dBeRCZHpnrN4TANVSA57UWsJRuk8UYxPbKGkhcLCtwvCdiAaBsxspwpiMDcZyTiGowpZL81p7SGo7Wahbc3sWFL",
  "key29": "2NRwn3mUpJXCSF1BDAoFrFGHYaY5vmB4Tc7uiiNe2fJKn4CvqzoyxvmtH3k96gAADzuQqTi1Dh4zUAUmw19E14NV",
  "key30": "4NpiKPtqCBFWMB2V4qboNAwRznPxAkhsQNVRsHtpqU3ynHgShCzpexDDg1oQZRp39saf3Z6TD9K1Suqr3TPnfMEX",
  "key31": "2EipgzAru7t3G8hYCYGzxcD77mFm1jPgjbURXZXPbUrtL2eBr5hqqBn6gwJ94RvUxNfcDBscHpQxVEQebmzUtAqM",
  "key32": "4Mmb4G9uiDNe2WFzLzoZ2MyYdMvkRGRdETCwb2UACTQfiaMasCL5imoDFXryV92YihZFiLfxE7hK1sExGfeanW11",
  "key33": "4ndVNTtwgfJUZWahxLLEPX13MKPseBqFTN5Vrv9Yx96eUxhjmafQoAzmJX88CDqPffy6HzFvpT5y1uzuWwmnHAQy",
  "key34": "Z1saptPLJCxtseg7s12qMP3jLvEni2Hh44nKJpK1THsxCQhV4GetTrHh7nVCHDQDTpCryGLSQ1oGdQ1jrME2DTw",
  "key35": "w3EfXF5j7xMPaq2zvYLECp2eukBsRzCiKKFdqbwpG64FMaZFCAkamtrnPxRxnphJXDHvnPGivrA5Bntw7j7rSQK",
  "key36": "VjwwV92FZL2C2vhXD1iZ5UdHiS6nmBEtD4JdY5Nu42qqkrNmxH5wRkycYHpYAxU8mZw5CWxL2FEi5Zo9v5CagCS",
  "key37": "pD24XFztuSPG8YxK5oWWrxXwGQdaJjfQTsNwEpRzo1XoiVKrTsEDALuL7DqPep5n4E966YUsysin8XxyJtDs1nd",
  "key38": "1TFK8PexTFyChFaDNyZbBUvwTuvzyk1oTJfPXnLmnKzBK87JTzVDXowXikFuT6y4tBB7oDrc7poDVo9pqif2QkY",
  "key39": "1217LWSEsvT3EnuuvN2vAsZim6eTVVbhKhVDh7pTFpjH1fGzoHmv3afWnGEPVCx3QTGC23KW7vCFd2hbgnu5eaE7",
  "key40": "RnqhA7afJtvvWF59ozuZ8oEErt8zvSLavrzR6fDjAGnS58vV6ZWaxcKyJ7rgk1GV9qGimyBrGYhdaBHMfUQCwFM",
  "key41": "5VC6XNS9m54ZvYK693uQd6k6nBw75rNwPWicEVNivWDCuUZEfJfkSViUz4RA48biKn8jhJNBeawN1S1vfek8iaC9",
  "key42": "2hbzGmnGj9pc9jSoaTTiCaoSLrofJLiZ8btiqcVdEnNyFvZMCDUjBShsABDHNdjeSwbVFqrMZVTzkUcqF37Mi9vB",
  "key43": "5QtRd8LMmFnm2XGcoLgTumQQ812UTMFBaaSyeosHRA7DoR6A39Nox8ARS9nAhFK1LSCD6gwoughddLZ9ckY99NgE",
  "key44": "47Z9KR6muM9NzRuZpwYygEjL9roLRyVHCNKC1S6HB45pX7oasgaJ72kan75g4po7CcdzpohqWdYdE5qG5uv2X5X2",
  "key45": "7JZRyH4J1z1q4jCprqnmbt8bNWZH6EqbYgDe7sex16bsgNjhh89wiKDjhcv4XXJTrR1tyREa3QW8qX7pVSJNK4X",
  "key46": "43okPR1LjYJd47PF3PzwkRCRUFx7f9hGffwgamUqk9jeiQ2dx943NvxAnRvFoUmVQ3Xwrq2RS9RivhdCewjrRWgC",
  "key47": "354uKpidPiPTmEtGw5oPDE4VGTtmgX9ACKunmZhZNTeL5wZcX3r5W2miABtAc8rA1wU7Y6o2bb4mry5VfBPXmetz",
  "key48": "3V6PtGCYio6SjwTVqWSyGDZaVf11pFmGe61uiLRkQryPwVPfCqmnmeL7TspJ92ZSkSia1LLfu8VfwFHaPjQJrPsc",
  "key49": "aZhozq8uKRvzBbjoi4Urm7NdwDXPnJq1hxsNnbyKbJmXQazjLDVzufrFVcWNB5iryEABX9NHCF6xidiCtD6RChM"
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
