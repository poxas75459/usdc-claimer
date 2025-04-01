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
    "24D9kKwtkbHt6wandXk9E8iL2hpdom1pmzh8HuHbjNy4vdTpNkEuEsXDcZRWSnhvhwYx9W4UuGZt2MiekkA2h5ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVyxwEijuhnPvaRZCQJpjecJqBXbKWW7PbrWtQjkD1R6AwoQZdCBtKiMnMZiKRXbWbCQYPbhogX7JsDkBb83HgL",
  "key1": "4N3Gdv92U8DCAkbzNknAtRMnajdsARAXR2Tk9SdqdqENpZU8uiTVkTn3pPS8NfeB9Q1Dy5vhNy9VcD8cDyyGyiqG",
  "key2": "5qpaMvZTBonMiMTTr5UseUb7qZxt5TvvBPKtdSRDxme3ovbRNzbUdpWU6cE2XN5JeciRoEKNYePb2o2AXSgHofxw",
  "key3": "37bALxG1Gnj8R3hnUqbH3nm9BBT2zVPaB2QS5wsci2HWctXbyUAeHziEag6B54Dua2miM8adRiQZF1n9Qydi3LHM",
  "key4": "3i3WpoVvngGww8qYuZUzF1K6NVb1rDgaaQgUZ7ZUv8on18MBQjS5tsAiLTQ9w1LE5APFANEAJ7qC7TzmDVqkMwxN",
  "key5": "4CfAyfgbSFAzNqAdprY968QCtYKQj7mf2Szg3qC9HGUz6sDrdWwdbVvbyPr7gXBu3WZQjZwmSi7kxDtfaZdeM8yo",
  "key6": "5AwCqXrN7PpwBEpTGQCq8bg3JQ3GY5RZ11rGu8dWUW2QET2yhegdpoViN8Yeof5qetg88UBUdbwAvwTsa8a4Vivc",
  "key7": "2k1zoya6TmHayrshRDpnykhHvZ6RpX1awTaUFYkSmcJadiY5koqEZsdNtUqTKuGR8LVebga3rENJoiBtZMjAYzwL",
  "key8": "3VCpFF669nyEXWodhD5jH5GDcqLxCEPyDpMVg1WPhFf1tBMzuBvW6eB4z55PXXBzn2D5Xx5EpYtWjBGFS8NTuuKZ",
  "key9": "3QHdeL3NqS4Lesu3q8XpCuB9dh8n7Wwps5hGq88pdmTS5iuwMdohAvdrQYpv6c1AgHzi7RoGPLcQPoyYhRVMsYhU",
  "key10": "5d318BaEre8F5aRRzt1d32n1439vp3SWjS3ZFCZbvoAMzMn5EURkgzM3x2QFmHg6B9YKfL8NFQbss2e55c6a1K3z",
  "key11": "4iDRwGsH18MAYEeC3Tg4gv22QfHLFGV2wiYGRRnRocLkXoXJoGJguepXpw9abuXGrXXMFVomUeacU7mvcWYgs33o",
  "key12": "3HSfZMwPd89kAxWwa1fM2T5MEU2AjZwcywt8xovJ57BYSf8C9xBHr1qH5DvtCYvWj9Y1xSQaRFdziHm4PENEThLf",
  "key13": "SgM2CfRf4oc4VQ5zSETvKntVrVpy2ukzUa4GT3Gp8Nrzeeu8hEwUPGs42Vq6ZhzcHRc8BtjEwNG86XK4tcXjrSS",
  "key14": "2XnZtvvQhepJKLpGN8j5FNyFig65bPQKZTELhA5pi5j5w5gL6fjpuuFpYiRctBu8KDAmWhq122V3JZuxGTSmoWXL",
  "key15": "5m7B3LstMfHqaHsr4QS4D3vu1nNdHcGnvTESgRPJvwF4fgnZHF8iF4b3jFcymH1JdDBHpdiMTA5wsfGKEMq6wD3z",
  "key16": "2KaZgLgPWndjYLPxctGC4xmTcu7JrF1DoPJsfmzPdc5Dbz3vv8NBoywawWiFjxwJhhhNAfwhG2UAXKEeexgn99ia",
  "key17": "25WCfTJLkvVSU7jfgEMuZuxRZT4ABrNJkepd2aUahj2S9qK5UffAynN7o54FrpWx4iJRq86kdQUJQA1CXk2D2poo",
  "key18": "4SfavcfTURg9wfU8LShrbFzbN7FGhMGvS68FDsHH7iQHnRBkUe9zxP6HMy8vVWwufyEE36axCvm3gTAUaM8hnSoE",
  "key19": "3tVficJFQTPoBCe2ntqeTzCapduNHvA8L1pr1QQ99JtfZKz9MDSsgZu3C7MT5MReoJ5p31vDEcyZtcjYMZCq5QZX",
  "key20": "5DUBm4Ckti3aFpTab1DuKEBsFZAADUsS52io6hjBq8pdYyYppWoc2fqwd4mtrTmKtVns2mKKns4XZRfdmo5shfH1",
  "key21": "5hA9QU696mRLpqARSmmZxb8KmmCXxrPRV7CoyUnZeqH6FLaQinxdqyJc6TVnXjo3T2fGdoAiHMH7pfS1t7uY6Tjo",
  "key22": "UZCJnJEckz8fKYik5YmqyKqB351fQbu8EWuSpq3e6HHHxiR76tSNJ9wwYa57P5TfCu9qyNmoaQMn1YWnNweZPcz",
  "key23": "615DMMP9EWRp6AjQhNnT8fyqEV1D8S1pizRGrEftNEfqfBPYgK2Q15dNVf2LQKpp1be2F3o7xspgyeswkygViBP4",
  "key24": "cNPbUkH5PaihabBDYHApoBYKB1i1Mkdu1CKPbwzqUEEhmSgKp77utPSWx68mfHiNAEzdjBjNaSt8NVbGM6bdPxc",
  "key25": "SZDM8jzaozaRBUmfZA5dHUqfxprTchJRSSjW4vCKMGJCZUVVodVBsDBaiWsfxbYtft16mU5T4fZ5Gc44eaDr8rE",
  "key26": "2tFYW4eTseXDQUkHqwo96mpYzgcidDWWc1JBi8x5Y6WWgvaGsc3gJuW6F7ztW95fRfomiahCLNr4P7rPvgMb61vJ",
  "key27": "5jK9nrPsBtFZqt9CMxxJ5afVXc22RyabLsVFjyy6MxYzcfkUUajNSWozrNm4M2mZR4kzcd8W4rZX8ythC2bioKpv",
  "key28": "378AQeDgCWwLT68br3pncUq1nKM5TrHptAB75ifPPXUaadMwjSoSN8anmC3uPP94htW5H6uyAyHKVzdebFYson3o",
  "key29": "39i9v982ctUMrhnGg8g2XwJDdDbLQtc6gGpYB1hPzfPPbjJ6XvoaKa8vrHg6NxhZr611bbHJNYUkB8d7Z2E2Mm9Y",
  "key30": "272gimk8G1wqpoJqr2iav23NZJqq8WeFM3ncy5CnXKVafsi7Gafs2afLvWoUznGUhxjpgPN5F24e7ZhX4eyfaWup",
  "key31": "4omrUDyEi6Ccas8GRNQRqGucEnxndTAB7rmC2wEWbhv7Dsq3MYRa3d4XKrA7bYx9cjuLZvmyEV8YcMjjQBrxmJhz",
  "key32": "7Thxcn9XfrgjXfzC7USTZQpnHQcegca3VWzkcqfoUWxV5Y7eKykTVaRRPmLTUZP33rMqU4w2X4RHi8kLtd18CoL",
  "key33": "4XwKxxAGqqAudNytbgs5euJcvgfPjErhyxRPDzrMcuWhheoXAeJGNcufw4fWFN7Yz2wvvezsYT6pvkWWL2BdpmYu",
  "key34": "5qoe4FE5o24HYwpqsFBuTuvoxXLiFGp2TvYAoMbCZXAheSHP2KvLtNGWdX6wY4mZRrVqNfwbGAkSDnbfyhde4mTx",
  "key35": "3UyFBNLMLQAfDz85CNmxyPwYxchn4poTfYC1ghq5qq6VQp7bWyvY5X36nEsTUAqJnpgtcARCU8zGR7fHRt1gvXX",
  "key36": "4JiQCrJSZUNBxFR2yyiCkbxskL9FfUqM6umcUPnMZtffpiLaafDLuuTMg6RpvjzpqEp1zFYAox5bjLH26b6vx64H",
  "key37": "JfuaVKi6GpsCwzCCL39map9KAQTTYQC1DsN1j1erVbciJb51CoMEn2gJedmJiZBnGWUze2VJf44NBGMuPjX6zgk",
  "key38": "4igEnSDjAm7MGBB8svJP9wMFYfLiHBsQHTC5rqpJjGUupEYkyNwunpA9McV9LBguXnkwMyqP335EcrNXazffYeRg",
  "key39": "zBocwgYAdjAJe1yyn3ZQab4FWrmRdN3dT8vJhLDyaeCKVLG7yQtd9AgEWNbwT6ou1C4RguxEG7P7Aj3Xu8fd29J",
  "key40": "5WbcjtrTAiTBcQw7reEB1BXNafQBdYRjdqfwGFKDDcrKiQCmbKuYpzEZCPRvNoBYvPwyLaTuCTogLjiKsb1QKdeG",
  "key41": "5UpEP7gCdeiHg75uSx8zupJtmAy7ZCjnwNg2MPXv12fCLBnmtFCagjF5uPii7XLqShGeqXviUnzjgF8JMMmvVh7J",
  "key42": "5sNjjRR9fVUbpLA81WFoekEtrLb87pU8haH6Ca4dHN1BiqMhGmfL5osvtyvENiDoeoTe7UN5ayF1LHeoHoqTMu1R",
  "key43": "2JmaTHfsNuEwYCXZTAqA8N1Z91WMZj7dFcpk5DXnfFmv7Hmnc3Ma7PFzgedFfcFJZfdUusJE9K4PQ6UJEwCD1DH3",
  "key44": "63G3SodN8MSu9graHy8yBccv1Fxj5r3ddTc7qrUEH4Urp68D7v6m678bKEERN6aoC46MTP9tZz2hYcX848E1JaZ",
  "key45": "61MgDAWQTyUSekg4RpmoroaS8mb6hs4x9FGWDnBtzgevMHRQKfWiDe8QkTBfc3xktc881R27hytgQcMyYpuKjpLz",
  "key46": "2bKmTt66dZ9ufGuMysRwdcqfnU4rMqBaTD8wmWYGoRiE5DKCTvghF3Ha2EFt3kvL88TAShmuoUs14zbDRjMWVUTR",
  "key47": "2GhiKHR2N5Joa5zuEaioUt5YE3WywkmJQS5bufddeJoqU6TtChUCtgQEkoXaV8ZeskyZ9UG2sjPiTRvHqZLpVarB",
  "key48": "346ywPBR2GR5FTn1TMDy7Cj46fZ2bnaWMuMTTZWcuY3Wt2bL276RXnUz4uQJbNTFwy5tNAMWhuCpTqBoDEVSM2uW"
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
