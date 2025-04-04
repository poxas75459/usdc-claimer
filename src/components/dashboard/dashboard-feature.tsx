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
    "4QsAhnhUGa4qyHCqxCNJoHXMrNVk9qQFiyKESD1haaZFoMucQ8ahYFUGkLkyx15gWZNUwkNSGvsmr5Lj6qes8Yx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzpryWZ97U35BKFm5CXMAGoTfoTMAfwUGZaitvZzFT3Lq2Sz7CQcNYKuQJtnPzFSGA5wdhye2iVXcA9aaCuP8e4",
  "key1": "ruBn1KWKvDj61fJLQVrF8Fge3UFxgQNeSYKtQA7upchb29tv79zZMqWkZ2bPJWZt2W6k13v1pTtHKx6DEDh5GCH",
  "key2": "57o6WNeCwbiEmvPLFhZ2noGAoYbo73UvcAvrr2mTXb4uLe4pJpEfmhycAg2Dj6PPLcwKqo5H96vZ5UkShfxpFsEQ",
  "key3": "3Re5DpwfjpwPbtHqAmCwEv3dzpX5gHpJeag5Vp6NzNiSqxJanCpSTimkq19mdsiAuUzJ1eRiZzpm6LJNk31dSjbr",
  "key4": "4GiDCprhhsfdU6PVgapL82PyoZPtgRcKTBcogfH81CGy7HtLrpGp6DmhLzWGFBU6J3nL5f4So5PtLPhik8Ty4jAx",
  "key5": "5hgFWve9Y16YbHjDeS7RLRovVaTZ5FzT8XE3Y1mWoER4M2gEXWUPuwezT3sByqwGqAMFs7LcGCBz8DeKXacYQdA1",
  "key6": "5Q1rMqeeiT8wcMvtnitDA11ifQgJRso2t2ac8hk3WwWJK33ZGBrBYcQRvNiHVwVn4UU8SGQaTkARD9q7fjr6exVf",
  "key7": "4272Y1oEC8wgBuRjXUonvS5H6L6jR1UyuDqWS4MJaCjxw2oisgTAR4PV7xN5rBbGsCwyANBvnfHc4HarqFiUJr7D",
  "key8": "26AYHxhGoPcg7m2jHhwdTBzs6Jfd4quvFhiZxFosb1CVTQfHMjfgbjzZ2nEVeChfeqJSom1DfRmi5jQcgnRF9TdC",
  "key9": "B9GaHw4gqVqUB33D882uCp5DGSzbrYegwEon1Vv9UVUwnQn6VHNc4AB6H98o2PrZPh5uTw9nYaDDJatwYDEaKqC",
  "key10": "4TGMKG8SacTMwia1i5gnMTRq6ZmyTCA8ezDjvpbbaHbRK4NNzLYVw3oTarQwcexuMeHLYtotocfcUAy8o7vnMQEC",
  "key11": "vVFqKWY6DSamu9ZfEYGtsDbkuYkD6d9QEb4Vef2Bi5U1TecsSoEcs3ZXcPxRAkp2xEpiGzXgWbv5Hx6n2Y6uY5L",
  "key12": "4KfCBApynMqKpjQVwCCqTCeiSBYMBgbi6SdCzsZiNMJJ2fVbvjjX9v232q9tKDVwJAVHSmXaBubc1fNSw6G4o3bR",
  "key13": "5d6pcYJ1U6N9FEUwN4fTSokPEBFeTUsPZCZcxBaSYeCKVqWWfs96gvqnhtbPSWqvMFyYim8VcHbVHcR4S4QJSTDa",
  "key14": "84JE2nvnC2nR8H7aCbarW433pDJBiF9DdTw9bLNQWHWQM5WZEcNxNJeho87jxUoE3gKmyw7a1teBrzRni4USA3a",
  "key15": "26DZSmPf9ZGbamey1Fni7J2tZe5E3RESa8gxue8e8FBjDFrh22tAwsLKZySWZ6fHhqoAB2tFVrsZsb2GTHQiPsC4",
  "key16": "5d9E7DZsVqCyi7FVPZasbB7bMdxkDrgovAEDD4ce3encqqsH9vTwvFC2eCnPehnsMEfEohKVPXf7mBuN7nLm7v2d",
  "key17": "tNkPzmjKLnUxehLjn9b3GvvN88jCcSw3FWDGWYeoubaTG9Khc81xRhvkNesQrSX5TaLcUzy2Ebng1aTSEKaK16T",
  "key18": "5XU4LvtyCG3NncP7zjYNg46MDAL5ayYc6Zb11aZgrVs53x5Bmh7K4NA1pYTWMLV8g4tK5xXqwgd5ZyELG7HCmSff",
  "key19": "2vkodxSmbnmZx1tQJ33YVWuTok8cgqdGMqiZaQb9tNpy1ksVNe6aR1DsjRUJmUdvAvgjRa3voJopN3ejr3QhbLmr",
  "key20": "phYgiYibBSLEGdMJNmeRPzJhYFTfvFn2vCLvfoBJoRNtb5yVhz2bCZrCefv9iK6hGrXBBubv4ursxDbEyWmpCYK",
  "key21": "4wBPdgQgcYWTbe8qqSPbPnTiTNwmH2iTwWuVCU7AnUGsjJhuMRtAgrJwbwz4JHuhjzLapLUJ3XQce3dBbqp55a7C",
  "key22": "3eZGD5651Cp4cw9TySaizAinmZQVBZVFGXopFwKfqk27NY5BG2WUTzoebCocd2bhvzXjUt3SjA5amW3gjfKDSeU2",
  "key23": "2C4FRFHsVd5iB1Vm5UjUWpg4gSDWcfUau2WQTFQtrpXDXSX7DBbRDtmA3ecLdcCf6PD9eKC1bWHTeNqj3oy3J6hG",
  "key24": "2aPqB7F6nP5wvXW56fSswi9p83cDBBBhNjMDyy2Jv743aJYpN1rJK48GvTbR2wmyfaVnmYizGVW7JJHWnnxoLxhW",
  "key25": "375vkLyf9QAeKRVqDU56jjENqWei9nWP5WMwps89cqLugVRMx8VaMn62M6XVHzLczuazgLH7jfyZJ6SJJaZQkdnZ",
  "key26": "5Gv46N1DFyrTfFDes6wEHYZJuVHinLJ2iK1LTmR9WzyihKJcbkRerY6YPQb7QAWKRDmWjGb5N8UEJzVaEBScDeT",
  "key27": "C9Qr5ZMrikku8MDMEJyhnzwrUPbed8Np9kPJpn9qtjMP7qfiKdgWSXjjXXHtf5qFxE2YyXh8xtDRnK9r7v5Ja8U",
  "key28": "c1htrg3MFU6vmvQw2ov1GxhNZaALaKAq3pLp62eSmY8Uegjrp1E3kTQ591RwBq1hH7XcjsqWS2wC1QdXCzNAhdx",
  "key29": "2CWqTAyr4Hex9ycxvML9BnSeWxo7dXmvemz3W3ASVE4iyStKjtjT2qAf9VrRAJvZgvYQ2ThnP3jRjxnkde1KgcCk",
  "key30": "1yCbpeum8dx18GFAQ84EMbGz5yHaMXSZMMsTXfvWXixZXH3TuFMVLXtTsfVPsjTVJp4D3mk6Gt7Zf8cyuV98MDu",
  "key31": "LTK6zsMCcADRWbDnbmdNRdHAuneB7iGYYNb6dCVM2jExhaedsmtdYCkyHRTEgjQZrVc3XxLYXHsBbFgWzeHdmhF",
  "key32": "EEjpipMnmCWAfXsSRQM4QY51ShF5YAeAhEgYEEuXd3sM1fq2wjcbmDDqB8jzDeGin5gedYHeqDJ4pczxKJjViS5",
  "key33": "4pNFjRhY5uVV4aMrvYPMnXyDqTMQdc9dB2PSnpAkLYnVhzSccXgVSzB3GMZZmkw3qwdpFLcsbuHxD8KdogCfCGDA",
  "key34": "2C5WJjqSzwB8PC17V9Hee56t3eXagFGJiXAoChhtuYfFrYuhTBC981oaxzDW6yUiPiJHHpBxonHvSQ9Zq1v3Evc9",
  "key35": "3peB78BLZA6jAhKqmaT8MduzYDGAYA3VzKRA8WvJf35h1Y36tWdtSHvKXxvkeCt5mLXMdnkL1kjetrQtGdVmBqHp",
  "key36": "5XfPsenRTLb1hsJZbYRNYnxQgxc1r9ef3hwVp2TVxd6SLd9XujCdDpcfFd8wzrBSGn14AHHxzH85cWYY4Xs4mQaC",
  "key37": "4ppNrC6PWZ5y5rdZ5xEpZj5ApATHVFEy3ydpLsxxEqssnMdVQzPFVzNYFrQV8A44SVvbPzpZmCj2vioqYk6J1HdC",
  "key38": "4WX1Fkq93iRP67yyGEeqWmdwoW9Yu98pHJ9W54CARyyXF8DZ4sDHD58LZqqUBuGNbnfMKrGN6WabbXpt8ZKhMp6P",
  "key39": "25aHVoFm7Netjg22ngF9biAY7JcFrvwQomAFv2pwxs7q7R3BJyKd6ZVEh5MaQiw9UGSEKdPZatH6GG3xTC6CZ449",
  "key40": "4ZzvtYtayPeUfGPDiyHaoitiTDADsHWLQDxB1BbjUnaQYZ5RvSPBA8JEo5WbQmF8mEkyopovgMndKZi9qAMJRqAS",
  "key41": "31Yyf76vRP2qYcw9MsbEZSH3Y6hQmmVkUPfHVr7a4HNkf3Mm28uBdERpxE5iYQ682rxQJHUsFiu5WMqyoaNbML9Y",
  "key42": "36ysgM21YK9RLs95ic5p9tSt4PvTqRv5Go9Mi7TvHFWwxMP9Du4cyb9C49PqXD7cW4U4CmQGPuifZGxmhnLMkVto",
  "key43": "2RYo1QVPAA4ZNUwe8fZ35hFzvw7bXXmpvvwLJvxDA2scm7ePj5wV1MR6HeRrsrq6je1ffxq5EGQJi1QT2s9RiKTE",
  "key44": "38RULrFZUZ9MLvKyX1TrP5i9qTQs1bYRfQKkMTLdsRPFm6sFmYHsCDyjFD8vxDJ1LM6HEQijMSFALDo4pHEMgUyb",
  "key45": "4N3SNLCGQmPWzFVJ1Tc1eVJn48GzRfyiWP66358AtNyVogfAGZuXx8cb4KnUbipCgTWduh4t4JEGSnUjdixqgeMP"
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
