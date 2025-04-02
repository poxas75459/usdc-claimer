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
    "3fPP68kiVM47hKFhL8m9YuJqVALtNAktWqZQt29DHTu27NzmWGACA71mZ6UTAaGZ3axPDDJVLNpQ8oNdAypRRf1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vAhEzUSXoYM4nBVFmZNeEbf2sUCPkevhQ1jCNtpraYPafd9nbzm7ffY9uQTR54Fv4Te9qcTBxSGCsP7MWTSr5Jr",
  "key1": "4Zv2xBrWALpzcw81cjt87UY8UyR6uE14e1gSobGyTGDtiinKoc1sGcA8HFsyqxFEy5B9oTsFpBfJuZ4LNXPEJS5L",
  "key2": "36agLAchHA5sUA7NfsPSpZD5rKveeCUesfzacWw69eTDUUoWcS3rAqwQ6m9Sgk9Tk6G2s72FtHoEUXg7QAJUHgQa",
  "key3": "2hbqHuF55tDhxJvTujJWtBCKc7WxKHZeW3TL9GTcraeu32nCLn1MBqLoZVP19J1DJrj3fUA84MusFLH6TwefyLTt",
  "key4": "5gsUcYriZNN6HAxr2fzwTF3B4ZRFQEpM67LicRh7RV1gaNYvEvW8y9Tu25esNaVMaP5HQfosXNXfT3pvzcWEHQo2",
  "key5": "32ZQ7uJJzpUK4iTVydVnE4WFfaw8rKSMcRCfXmwd1Fzuj3MNBuUcbQ8P3cGsvEPn7d4pZTurR7YUvGywf6MjV4VN",
  "key6": "3PeP1CKEQjZ5tUuhSSeGNHR1u2Yy1AwFmopgbtKJHrvGxSuSs2vHMBYjEb9PZaYTKkV8J6qkxPpuAKLsgm5XmuVW",
  "key7": "cF1NRSE3KnN5mM6yYq3AEy8c5gG71fL7oW5wzQYE6PuHTQ6YMCRbDHpRrVEMvhazEovCMdVgqTqPdUpshwTREhz",
  "key8": "2t6DWehwTg6ECYMiTbyuB79oHp9GNiN6L4WnSu1kN8AcdH9Q1fefrTngg9v9QSJnqRRTxL3CWgxkRrcMSqvueR2W",
  "key9": "QMpe89tevJSjFhPsPdheM3VTxUfQhJCxSj8VcZseXxybe1h6BD4aNHxnFxahj4CtwnvoSGtC2FvTjVGN14K1u7r",
  "key10": "eBng593n5aqyDbEd573cdiVaA8BsShkHr4SzPArMeMz797LeRsaWRbwbtHUv6QwKj4Gjoh6Z5RdGQbokzcE386A",
  "key11": "2RsaXbnGML3GsbZLm61rTXQJQrrAYtxLtuRe8sFzWjBL9pfzdk7FwDVzrGeXmwqiszabkiuq1ZbiMaiwQs1Xr7S5",
  "key12": "3X2btZcjnscTc8J6wEBnD3cDs7rUDHWnzkT4jvGKyc6juthNGtRjQGnrsfxqnyNCQHrPoXDq4uozXUJcSvYtp6Lc",
  "key13": "inzeXgi5GNkWa73EFmxsofrkBPup1FoNBvid8KaWwWYLnaogU9Eppa8jVMYrAt9pnCrQG6KwVpcNafk1vdkX7wu",
  "key14": "5RTanUJdTa7fZeJe1S9W34DdCX9KDxK3esojJSXFkPa5WNPhdeR3xQmKL9UjJxmBkiH68oqt5ytpXG5rmXNfeeUo",
  "key15": "3ekyBL6GkDgtqYvKinVtSbzJMtvSnieFrBs5sSScLAGXwawg9s9DzWkgA1Bjo2hP2s1a1wKDPXYxTFRTGoQK5p62",
  "key16": "2BuMfjQ7Dfb7iY9aTSJHiwdX2NLZN61kSW1eDxE9muAkRz2ZanCJGMf4QfkBXPMKMzRtw1rST1mjL1oDAJycCjma",
  "key17": "3vs4LHXaHVJsPXD3UdSCcsr5xKTcW1svmQGvc3Apn7SGbNZePpcVvLu3hmsssoBiVK6gmEUwFaGWcbzP6AbRnDsL",
  "key18": "4ngM8qSuWwfBPxjFnU9muN6FczmDmfTtbb2U3huE7NKtpTxXroWtYU7mmLNjiG4zqnoWYALhUPPmVFXW6nzjDxga",
  "key19": "5TKSxyCW9XCvHnvR7LUM668Sm8FAaScKQT33YG2shwpFLVrAtqSpi84n2kd2PMdPyujMXPFHpmfjQqS8WoV2Exum",
  "key20": "5UF9Z2WiqgqRhcbuxixzw6bTc1WZDxnHkfo1PLDQGjfyjHtN1XsYMiZBWqcEmpKyhFKfDvSatuapt7ZnsEURTfmB",
  "key21": "36KvtMCEqoeWCSzmDNwcXYMu6oJrMnGEptPDH9as4SJA2SdB8PzvujkRj3WVN7apwzgQ9NeXor1rq5GCHAZsWCNV",
  "key22": "3FZAqJQ5VvtqwUpCks6KiFSAxcALNQCkPdc7WS3rD1oGbuBUo1EAEtrTWbtNrc758NFEZnWNKoBUHoXmvuuTHz4W",
  "key23": "5uscmhtZ56jg5PP6QYTdHtYc7Mob4RMx8Vu6ysGMaWTrW5wVpQGXB7jCgKJtvdiTz63ueXrDprjKFSsJ89Rhho3u",
  "key24": "5euvCac4EBGPiqptjhwLwoFyiLVaAikT55U4grfxWRdKxyL1yqhwA4DvkNZVcNKuPkeUszTjhpo3q1QgdfMRumAq",
  "key25": "54NRmi2c4dJRgpPcShR1WSgL8cazdMA65vxRjmPd9Y1AipBkeF7M9tscT2dTV3yuNy3QZWs8CnWiD9fqovxSbZd",
  "key26": "54KFmwb1smQhp6Rhz73cCacBxrNC3rb8SsRrwTSoGSoytE9DeJxZFCqgvfkcBwxK2nkXGs69vWCpyXzoykf2jEVV",
  "key27": "4hLmVvS3zNXfadUHikxuGbrxVvpWddpotTueDZgpWoWzajhUs3FsSaxi1owbpQ24AmeGG1kuqyrakrqSNBch329Q",
  "key28": "3C4RrHjkf8ebDS73EQAAyxXZeDa89WV6JTg5pp59hwX3hTMCEu2WPDwAPPQXSitxL2BLCMuN4Yme7rxzs33UYXZ5",
  "key29": "XNZ5cVQahtiqRuZanof6UNX58YPbL1YK9sSgZwBirgMReZmTd2NWfASVF3KVXE8i6LzzgYFr1w8qGqGfoaaB1Ba",
  "key30": "4GewCJn6yGJQ9XfVLzsvsF1EzKFcspgpGNvH8f84HKak9q4zDwjEYjeUk7qMFn1LcLu28ZyoePdH59hh4tQagey3",
  "key31": "3g1YDgmpyMWUQv6yzEyuVXJiabsX1yBhCVPpydHVf95RrYSi8yv4tm8VtVy7JPcUcH2KvDmdpXaUBi3Pm4tSREFn",
  "key32": "41CSyjpwmE2h74c397DGXmGLG9zjfw2tnfFPC59VC3Hq5GsNCFqAbGLUPqXUpjAKMz6b5s1RF5YXvA9YuoKfacG5",
  "key33": "3cAygfeb3KT9DLNoXSPATPj8XtmcU9sh33qE2FsTr9A9YCKAVWvA3wxzqHtAqLALyj4dmqoaRyjRp1t1GNey98ok",
  "key34": "5ESiHPtQqf2TzHhuGMCGgcSrXrh45xzj7HjCG2UsLEGeEzzaG73i1fFeM25Evm1D95UpavMyTwzkpXGsYAG79fc6",
  "key35": "5oPfxwCMaTM6DmMGkruPpzq6Kc9ZxmbYRvwiL528tGUuwjyjgkcHTaNTguYvzWZRA4oYm3AFX2TmHiguEtPjJRkL",
  "key36": "q9tPSYfz6TcB1zVLzyecMFqF7Zi7oHhzdMXBC1ydRsF8Tr5rYRxe9H4H9x7NM4GBGgZSWmmmp3aunfXiKFdWzoN",
  "key37": "572LfzGN5Pwz2Z1sz85RE9z963YFc1zg3uDCoWrgnFU41KW9N6FQvLwAZa5XaSUZT7Rh5h12utgtUyB73bR3voBy",
  "key38": "3miKZfbjsSZTJTxjGy4hnnxuNzC9PshjMbBg3FZT7xr3hpnX1up5PoF4Lvb9hoSrRtnNeohZ5yBgh6MaTf8Yqzba",
  "key39": "4fkHC3YVkXcGWGLnd6Y1bN9oJHwfqoNhvrPMWb4e77q3Z2jkKxUVWzFdGVb64qyexMtSTsbreCDb499PPAGdeFtK"
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
