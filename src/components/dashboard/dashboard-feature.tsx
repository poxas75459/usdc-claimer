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
    "Nx9zbq9adCN2oxzfZ1kcsYDK61DYy1hpTY7UtDqVV1rm6KEPy5hfBRxpr3i4Ki2R6Ga2vtUp9YS6h2QeF3ckkc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cD7UZR9nAXpb194vzDriuQdkt3mzX3M2BDFzQ42MZ2RMVrPq3cYdUhvv3McxVVDDNJyYGk98Zq8i9Un8YVX1iP5",
  "key1": "3yELArg4DF3fSNMfWDH5CZSKwL8XqpR4LKSiev37nDkQKPoZoikHKCJWHwHYGLy1qMKk9VfwCsE2rgfSQ6xZA64h",
  "key2": "2keeN19Xq9jLBSEaBCd8ne9qPPXp1QUK3qvefkXtJNtNuLiNhB2qyuDEng8fEuUXwkYUFRCyTcGKYsiPDfEwwmAp",
  "key3": "F2t98saWmdTZAtfW534eNtoDCrKf9JmhSVxqRDjDCHWwmjZFj8ErKGC42nzcvrZXZ8gGDhr4g7ViL3GkYGiYrBS",
  "key4": "TswPLbs2iTPSeAUexCR6aAuztyFQRDnWVcezKGnqSvjVTSwEv7H34a6RZjV3WhmgY6X9DWzzKrpLwwJ5jWwjtJR",
  "key5": "5yncQwuHBFgUzeH9rv5CmceJgGiRmbpMhTxveJ15obahZobx7WHtRFeVTWnZyLFNRqWekA4idFfZswgriLpuKA2a",
  "key6": "qGaekbgcPT8XKQUbJB2j3vz2xDTHiLyEAffVhewqnqXdUMwxPgDoqiPduEFP94C1AvRnVqJ5ZpT83x1m12UoR1b",
  "key7": "5zFQ9mJCaHrEKNfGxEMBHBys4sVQcq7Bsv9B6MB6HTZpEvCK6J8ecV59SP4xuGp4WKJJcudPPVj1xVm4pHDeQCmY",
  "key8": "2xH6GyrGNec4UnGidajc33ZWb2gnhdr4fHVSPs3b1bSSTGJMWZPrNGJYVckBjVg2fa9ak5fJB4Fsx92tWTMiYmUQ",
  "key9": "4ava85f8dEYnPw7bJF9QSUcrbYbDk2t7NcYDcfNRiRgpUmprv3fvccHjJmCP6mLtoFfBVPMbZTxTHMN3d2NXGYVF",
  "key10": "4dgHSWFQydeHdKfEtE8LQpKkTWX8sq9W7TDnVa6JvoToafcNWPdaFzbp8RATmkhNBmxNSPZ5dqf4wGz9jnPH7XND",
  "key11": "6NqvGB9AQZEGuJDEk7ANxbfh1cg3NamcVG9bag26LHhvLQbX3wfKdr3mXRLHzgrxiX6t4EEwbvRbSUADUxFktvJ",
  "key12": "42VKMUwPWmGozLkvUzwmnVbujBQHLLEadCY2DqQiEPXpxzhWi4qzQ66K3UeDVYF65N76q9zzuzgdqkvxQpdm8Ja6",
  "key13": "eS3iWj1CYxfqdqVBY3sRAPUkhW1vnt6643v41LaKgKp39ukXPD2SQbnq5nUdUMfbJkYZqqsxFanBNdJnaMf1yja",
  "key14": "5ShifUiEoQK7t6fi858fUg4C8E2hGLgm7CAmyxN1oPAtweHUWPhBoToKAwcRUQzDd5UnbDWDYi5SQBZeRjDGhHLF",
  "key15": "CQiGJLDVHUgJwEkYMUo6ZezERr7LEDXMHKiYVnHVoSaxb9PFfoCKikw1XJWpgqTduCLvh4km3qVuHtgayuNYuTr",
  "key16": "4MHKrUYYL2gS846ZPuHbgiUtkNGbAN7NanGXRSeXwJunWjji75GXXu5jyVwkXRe2gjurqaaEEWxdQ4exwTPi6ifi",
  "key17": "4Vv4rh8yJbwmJzMW61fec4i7SaGhGpVDP7i5hMWX1qPrBAK2yq6iEMytYPTZjWQ15PAJeMNP2EBpaprMQgkAxP4Y",
  "key18": "5dXJsFYjgCpbGsaUUz7pz41MQKLajCMQAHBdTBhhEWs3ziX7tKrgaeRnxPQNtZUsP1xegSyucBzPkyUaYW4UrR57",
  "key19": "4LKycmaqfAQBHrGtKGnaVcm5PkMWAAxE74m4ZNCb42ftJpnTU3aDsf1wdiVfQMmAhUEQQvs6hNUrS7LqRSHJLYic",
  "key20": "34c8pZL35xJG6foJJxhEdJBjPNw1nP6gFiKQ7A7eHamEgV5GfJAKGMy3fXkJDe6EAijSvxt8U3v5xgnyQ9xoM2Fy",
  "key21": "63Rc7bYs9Whc7cZqwu6buMuAw1gKrwp7e24schtpdb6826uJ2Pc3Ptc4wo76rUBFYUj8WKR7opa6PDRkot1TWua",
  "key22": "5DtALY2PMUfH9uCupU4cRiaQdeWcwBCvzvrGZZrHfqvHeuefGXU393yNUYCiDg8GnhYGMRhgxtbfBeUjFL3F2Ge8",
  "key23": "5DbHGzm5f7F7wcEK954GEgK9uDaNrUvLBrV32inYcnrqvsdq4jZFkX5FcTYqW53FJUmEAy1ijz2EGtSaT97oXrfX",
  "key24": "5Jt6oBt7gpTUGYwpT1uUtpfRxMgepB4S4ZyCMwfmf55Fgp26wWavKyWEkXpfK579KCay4473j5fXPVCjGW7NRzhs",
  "key25": "4HNfF95ncdUwCH34QRwcvExbsfy3orwzMbmKU3YDJASVnG3RHVui5WiEHzUQLU5Y7zKpNkgK2oafqcuMhq84pGxf",
  "key26": "2BdimNm3Bon9hekG4CLgfgzTeVg9peTF4fziaupShkqU9bfpvg4YcK4KtNjEr86JRU1TP2KHoM8SAC2RaSp93dy9",
  "key27": "2hoMeCrvJnLeoDonMoEmZPEvexGosicsZztxTAQMrkrfFs3peGHwENnpYa8QUC8BZKmNVpLWHptRz7YtQRCMGeoK",
  "key28": "3iTMofjxGPzMvWzTiRdb76aQHkdyv7R1viyTvSJtFKPmzxCYMkgvKzGrKW812Qfmksa84hypp2sHhJovqkqg8VeA",
  "key29": "5TXheT6YCPK5usRKa94zM7WbAcbGF6oGkHWTAn3C2VBpAAAtt5Gmk8jfmH2Ff2yzbXhr6F7W7rThpQ5vtvr7qfVV",
  "key30": "3RMFbhzBKPyPWKcWUSi7Cd51KubzQs4sXoFuuffTwggfYwwo5yDRQRe3kzTQpJyD6q5BW7V1kVAazXh4sTf2dr1H",
  "key31": "HADBAc3uf9UsiMDJwoZc1PHHURiuYZTR43QMKs52dTn28UXnRnh7m9njLnreKDpyqFweUpfXEef2CWEXoGyzbhp",
  "key32": "a8uAZo525TqZfxTFqvseGNWZM7N2CEredXRukMoMK3t1tTuyVd1vWN4ujEL7agjw1Rakjfv3SsGr5d67QjnheZ4",
  "key33": "51m4pS3bbjyGjtaLT2MJFoDoWc17aVvpL2CiXF83ZV8AAEN5NjcPuZfR1TjJ1PRWrxcTmM2MZ1Wz2TwkFWE4mViN",
  "key34": "41fJcLapbG5mS8FMN6ahXTg6REv9FtpVQAHLYPU2tFdguugSPAQh2FXDnCmNEHtc9NKkeb3RXaQsEMKZ3LjgQS14",
  "key35": "2FA7sjqxZ8awG7JqYwjgGpec9MRzuCERMRzBmHQPaeDMu5XNbJMAgVguMBvj6x3Wrz176wYBNVFB6ZwoKyxW5aAV",
  "key36": "27smjnGKtFKGvvdBeC2EzeHSWsaEzY81oJfPADYw9bzrrZuteERrFdiKZfM6rsFd4qNYHnNiwYJZj8NXjYreoaVo",
  "key37": "5agqs4RJN1arRquDjGZQB574WFXk4uVTjxnGdRaexnJnLouji2oKHXZUYc3PTC3GsutNVPrzoVwdbj7FjMB9dmUg",
  "key38": "hJNqyDZetEPBWkKBrbX2tbDx6KM2xwMiQmWFGyBwDy3jgaGgr6C7y2QWHKCC1pS8dwj45aVioCtm7rT9fdwMN4K",
  "key39": "SjDHgtEq6gKxaj1naZy1fdSjssTDGMBb2TvNr2TjyYqKBr8PuSqMqnKzrxSyyfyrHDcfurLhhSmf2Nxhfu37Goe",
  "key40": "5ZJEJNVxUSXB2YMeQFAT5x2CjTSJ6LR2ia9RkPAkuBoNJTMdjLAxC4vbSP5NWrrtJUwfSboUfmk83cyBtW6ursY8",
  "key41": "raxjmzpPrLuTTnorSDi6SfJaL71SZemAr6w21izU7SDsYqsLE6ziA5hgrAwhLDqgksfQtuJDWnQzRaVSDV5bHV7",
  "key42": "4W4Yw3GJucAA1E3wiUmHAN31vAJwVVBH8XidSdgiooRMjnwa73cMt7NaszSthfmjk47HsWe9FHUw72FjcjEY3sE9",
  "key43": "3PizyFv62FS1tP9rYWphSZUeE7NCeodhNxRQAJH9vi7J64SM36982BbSPEYwGPPSKqd5oTGew8U16Lg9Eyu5WsNM",
  "key44": "5UVo2stBaUAEirp3bUwjwkao3og3UFALvokBnwBQWxzC77bkRymSxcZiQkyrvzRtgALLsxDmMpbMNmk2q6Hkyckp",
  "key45": "4EzKgXSGHR6ftcezdV4npw8ewFbnpoyaNSZCpT5urwGR5p8gQBKmPRvDcSfZPQ6YyrF1asrvTnBYCUns2eK6TA3A",
  "key46": "AKoyThWVdUHJpa7JJgpVD6STKVAhCnnPqXhYZaiDNSpagUVCHVfrSg6Jv7QUonZ5mebwbUwJYarQhEonm1KezTL"
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
