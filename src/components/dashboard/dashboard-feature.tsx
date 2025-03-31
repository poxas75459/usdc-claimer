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
    "5Wx8Z4VwrK52ehHM7HNM96ATPA8pQmA2Cm6oZd5u2Qzpek4faJjJFyMrU9XcRaR7ZmdPrpCQXrSJn5FfP6ugrNv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7u1YVzrF6Dp69BbNjK3Kbva2K664tJzmMd5ZGKyNRLqt8fiF96gcbvPpxTiG3XQ8MGWZhg7R1bneAhAdJGVKNC",
  "key1": "bX7kvRDgq86NzUNhkDzLiyfPzVqWAmfAKPV3p2P3uzPjNsUTuVZqDyroL7nUxhxMpHNWB8nqwV41wGZM8RvkhpE",
  "key2": "517X2MRXNSdUUwGfkqZDYeVniucQrHSSD33wEtAhREHZDn9bgh5xf4mkm4NeYAuJB8LeP39d3QAjNge4GBd3u1kT",
  "key3": "43f52vecCbYecEryZuRJ6jYNLXw5Bwsy2rpHbFdf4xTxN5ThqF634hxJD8xHkgGVSyCHNzbiiVVh97pfcjDtkzeg",
  "key4": "5ANq9oeTSnuA3CUeW6fWhwz7yxEzrV7sha7hdp8PRdNrHoFwrmdwKdM1NiRMHu7385fZXmB9kSUQBHgGphjbwEA5",
  "key5": "2Sbvi9VJsWHcNR8dGDP5ginyUXoEKgUPsNBQE27j7mPtRPoR911ZmtbGDXueYQw339fizyG6uxPr3nj6rh5fry6u",
  "key6": "3DqYThiQz4wXosepA8ND24qgfEaiRnph37VF3NEMfz3aZzrfwxcAS7XD41CYnQhJKQgxQRsoepDeFALJ33RN1kR",
  "key7": "2mNtYziNUKYCLEXwuiozf9rSMYcTYZ1deLmvKZnLhESmzzNobGMhUCiKW1nfSrC66giWCJg6fm3K6B8spgMt15kz",
  "key8": "3jFbR69ziMEh7Po4oc4pkxwa3VdCsgoxHNnRwHT5v4sz697VfaLxMiANgtdhRTuroDuTenspoEU4hcmuCYLPWhUZ",
  "key9": "3896Tb1WQuen7MigsBbN7risd3H2PSfUXS1T2X3PeiKCyx9KDFojB5m1AFnkJwpjudvkmkhVzc2d5ynzMza13dZz",
  "key10": "592tfKetQKxCwrknUQF5L6XRRZTqUkScUVKS9U1ssevmDNtfr5C9PY4bvy7NeBf2mhMk92AQfgDHiNQ5GnMmv91W",
  "key11": "33A6o78tkNNuzPAgg4tVN53ZSCxE9wvoirFEiJi22h6xQbCvoKDMZhuffh3FvWESLvoQTeQUCFYpcSMgpwTMbMqH",
  "key12": "4K6qPtVVDC8ZSRoCQu8QSC1FzLUytfHkLJyd4Ze7YgrEnkm32e98mYB28J5ZVnXbqvnX2436HmVHCr3K8yirkETz",
  "key13": "ccRdmLubkbmVwfbSYUUTCEA5HVevG7hthqS1vg1CTpHWjstzzdpnVx6zRtueSKxnqigYATtbiT2NNarGzTSd4D2",
  "key14": "2TmdJ7YA34wJrATXbe16yDpe41pNeut6swPsFsq16WFsH94XyomhUmpT8A4a5xHV2Rdv9HU6xzVpaY8amuhZ581y",
  "key15": "47XF7xJ2ozuED6Tfa2cnsSriaqwkDuYRjFrP9zzRfUfKoYz22iWLqfew71VRinzUUB4taxssSeVXyo7zqVdD3HDB",
  "key16": "25MEwbrAqboirWqTURYEbzQwbvNy1QxdRZdeou2UF73QB1EpHeyVnPESfPv5vJ4D3PJ4tMt5ZF9a6JqPmKMYAUiZ",
  "key17": "4crovjkVmicr8CNAmN3nigasHwir6QLtLNAnS8etw3pBJ7dNKyAiy1QnpjMmAuFwd5NiEfHxnknLYnyDuA1bjTjt",
  "key18": "pZWxZMx6ph16XLoPPfyomAHjgiNax5soE5sX5ZtsGVqiiKRhZ5Nryntr27grs6jnC52rtLYAw8ftYd1CKC5G7qZ",
  "key19": "3TfRbGDYakTGvFYUvbrq8bWUcLXysKXAtMorUMTrbhap1gUBfQNxQNNemVQTcxt9M2A6sYBFan8cjAQtgaYN8shC",
  "key20": "3xF7rUnd5VTcuqRZ7FiYK5hUe4x7iry2vBgG4KcKjfAYmk19m9PSHUKDuy4GtcaWw2eStfviHMCU2DWTLRshkY9q",
  "key21": "2rr4UpBnPwScxa4F1SFHsBSVxo5eDiv3hjZaLJG7Wwt91TVCu5LYkL1Lp55KnLvNW1H1yA8zThAUTHmGWN7JosMA",
  "key22": "JSMpH5yjdARmcq5rZB5P44sKhPq5oAK3FEh8WtLK6BieYJRm6zyRa3CrPCFk65r7UXiJchTs6SHnqZxFZtFKMDk",
  "key23": "2G8YJxqepXNPt6kWiDxXpoHg7kihrjj4MfVft38Uxq3AUcMzuftAuvGZusXtDjzRSZutCSK3RVtavj5PSGxQTbsx",
  "key24": "3pfipkoBmSvyNRPtMzZPV5LCqZvNuvvqfVQRCEjz13dWeH8LzrpgBpEUQ8SjJdYLRdpwfZDfWUWduhvDeCm8XxUg",
  "key25": "2RoNHU33Yz4i2Xq9ev8uSeugEPkjFPbKuqzdvcTtrALm5hu4vkaoELUNV2od4cpPMyWArfBfpjsPhzGiXnaPMcu4",
  "key26": "3z9VPYrrBqwriqaHRGXZPUeLfoPfSUSjqXSFDi3GUDvt84Dk7TjKqhDdVugVW6azZ4FhTiAgnGzv29bcJEsVLQnC",
  "key27": "5xKmiNBVNFwYmkcbv2rNaD2D33dA7mAXgNquUDtjxgb4tjFKBH9voe9QpRcFMFEoRZzo9DBjvutz15hUhMuQT8qM",
  "key28": "2iWtByW57hg1McFp5SYBtpYCvdQJeoGvPWXmBvvVJQcLgvivHNxHi9XVvrt5a9QucCx8CcBAiWXt7A8Wot2b7jWr",
  "key29": "5kujrTzUfkonsre5wkd5LnFzDNzjoQdpWiVm5HaPtSGqp9XzphfSa849g1PkcZPDXJcF6L9znYGZzndZBS9ALHnA",
  "key30": "NiaLPgWthdYEYpgZM6KaSbHqQfpSeTsJRKhMc37oMZbdyxtmr9WUNfteaaTNz6qA128QANL7GhYRXS8MkCrPALP",
  "key31": "2KjxeEoRagrWvmKgChdZbKHjZHiYxf4b6X7TC6aeGwHU4Rh7NxBdSxPnXH4QEmp2QFmAq9kDQPhhA9ut5VcBsLJs",
  "key32": "39CYBcRBAjXBrCRmvhY7Nf3wBjddjcYFamFD2xn8a79DTUjVLk5NXm5mLJPxhdoz1uTWA3vWJCVp2hFpxZZwTVSC",
  "key33": "3PEGaGchGQJtbvr4vCZXqmpw5RNmm1CmTrMyj4S12hfueQw3JLUoZDinkBBmjyRYdRbQxLweLL3uGLPsYG1hkkro",
  "key34": "2YVFkcUZ9KFER6J4pdumKddNqyWUJyc5MeCyrra5Le24iJHHifNMgyJmt5AZRJ9vZo2xKquka7mnkjBjPnTus15b",
  "key35": "3Y2Ri39tzEdyksbGyAGMW2cPy9J5cKjeJURZJ6qy3Kv3jNDE4DnxJS7j2znV9g2AiCVeWqicby7QfdQLH2G3rsq4",
  "key36": "R1hjwq9XLjuAeNfoMYsgSRCiWYP5b9vFcJLD6gLW3Pj53pjMdxpcrkwp11ZZyyz25JiYMcRwbxQ4KWHCAJ1r23h",
  "key37": "57MASxmbNv9gfQdLRNffPYpdMtsrsZgC6DCbQhotE4u8wyWE3BqeRLYT5iDqc21dgjzHXU5aHFkWu5na4JbStsKo",
  "key38": "ZVpH4nsqmarPx4LxfwkpnkwftpES4xRhwd4g6o9he666jLu4dzyrp47NAw3iscfeCrbJmqTbnTdhSQ2ejDa8tYk",
  "key39": "5xNUyPnWbz6MMNXZKocXgYVxGeYskUtsXbwMZ3kBWpB95wNimM8FUdb737HdKBhRgVCE1tVnsUkpNmtuDn8Xo4p8",
  "key40": "5DZPepGYxaRQzaDEGRyPwaCJJjbrG16XPBJZEerCTB7d1EkhiMeANamdGTWW1NRtZfiNciUEkhxFGWnR69FZhHXz",
  "key41": "5CuJsDRXfreUHfQH1JbUatcjeAyCZm5gvNMzupqfgHzQV4gw5DCoevU8nxA6TZ7LrJnoHokDDei4yFZE9gMNvaCp",
  "key42": "2ALd9JWrHQ56oogNcEFPUTPe4dpKZbTYjmUeK311GKcrjc6xzZ7mvcbs28e4uUgTCYzAXqvS4g14u2HKgsqWcdkH",
  "key43": "1w6JemcXAdwaqhoHWDvzQgsUTxVJpQWPGDt78EWBbvLwStrsTJtQ3TaSezc71M6XYbVAx3HDsw7PrBXtGEWoweY",
  "key44": "5miwcW33SC16uQmeZVd5UXUpF18hNTGbe7XdnedPDDhLpE2H7KQor9HEcdLbqFoF1cHL429Lj72cgeWRcZ9jfPkP",
  "key45": "52HacH9NgZiLjcHy6ndbuUV5FjgRXhmCKG4KcpGeuEraKKh7STgnnFw4UVJ4TfwavkXMAWBAiPgfbW116UduRsF1",
  "key46": "249DjfbCVSRvJ9pwYkCYkKZYhAU6cdaZwnxAqPEE3Qu6WCHoXhoVwNHGGtm3GY7ZwVk3T9RmvgJdr4JFyM3FZ4Nz",
  "key47": "59boWtbFAjqnedzEk9yZeTNwWKc7991e3wTMs6XSVKfmgj73JgbtXyTjC5pBqRvfnCJs9LTGEJ5xJkkLAht6Vk54",
  "key48": "5dyUy6eJhqBsQFrKqVLj1jDcTJdPmRKTVBHP1SXs3A9bxGKzqqavLmYigvtmFzxn6vWX4Xfb2EUYGpj1K5sP9pKs",
  "key49": "2baBcc8cX8jEjfzZ9LeMxn848VcuoSPU3cGU4a1Cg3bxAHmpJtkv81hbzhu4AGToh8VC3LrCYUoqJDmh1tFycNoj"
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
