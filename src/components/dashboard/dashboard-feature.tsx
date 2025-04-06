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
    "5EUzehjYou9ZJPHjfQimGUf976RXywsybXRuBv5yyycBr6hHFJzDh5dhz759ufkPLg5C5oMi9F7jW2WQBZ8ZZCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kysXDnqeThLyCGnrC5qjq9qxHPwitMWDpjX38cb9oWJT5yCJn7zFeBxmnfTXmubZULcfURFe2mU1q5vqA4RQSFp",
  "key1": "5nE6VxSDaRwgRH4W9hhYURekFUVfiCCvJHZWv8x5HNe756y2B8LVxyf1Q5XLQZpdFwXTMoPosXEpZNEdaL3m14Ji",
  "key2": "uvwyu8WDPGkHPFAGBSSBMg84fMKhKonW4KXFjbaRFeuRM4B5wYWUA26VypVCzrouDLWoLP1HSGi4q2nyZGnxpCt",
  "key3": "4aLQ4nNww3hYL7WLYSsSJQ5bQgLET3yVuMQiuB4e6MGBk3rhSgh8f5C8LeSZLb3sD4oKfGYLCm5BKCf2Fr9kiNhd",
  "key4": "3MGhyAkufVZE3Qw7fUy6o9qm9LJh8NqA8fFihrzbKF1fFPtsHEgKrt4pnD3uebiSMst8d7eUZM4wT2ChRKbEtWFw",
  "key5": "3BWmJSe2T4bdY4tKGCQEUzpsZF672uWPsYw2DvVWstwRQ6pZKpon4TQaJNW5Hc2szW5hnMSH76RWZvTtZGmN8Luk",
  "key6": "qtNoziZeUCmKhBknQss6uNDiTFNcjoMKrpXpwH52iS616s6T1bnh55sXdghoQ1nRsgkNWS84cxy9zB3tcfs16vH",
  "key7": "52KULAso4D739bVTgWBarxvDEYejT7ogZz29CyocCy3KficgJZ4HdyvkEYRB2u5hiJ4ngpPHdmyV6Qzuwy86upy3",
  "key8": "HhPDFp6LY6YvQieubpNeP4L6rkSZxocwb7QYBDLUnkc8UBzCs84Qzk6kc8ntvc3Kj5VQVBDoszLgiGWKaCh7PR5",
  "key9": "4hhDGKynStpLUyB8Ld1MpQwY6K6fu9naDK3UcnUcMqjnDHmYNH5zzXaT4dF6istZru2H7SrH1dwbB3dM8GJm7nU2",
  "key10": "5zcdbQhsQgjYUfsqkohgDsY49Ey4wqbnFVmh3i81wdPJ4ohGNSMWQZtarPmYaUhbjV2PmS2FiKFAkeqHH27bYFt7",
  "key11": "4WfjXzoLAUSqvyWV9mn2EpJD7bSJSu5n6QfhPJuupVZdQcQLu3hrDPcnHvLczaSqr4R2myhang1u8QSkRtxRMxd5",
  "key12": "3izwW5bq89KC1vtTw1jitiFawPwT2nu6vxpuxux7ved6JUKrc79vYLXADSPtjjZxEw5eDsMEhHoFFiz7SwkJfYoP",
  "key13": "eVpd4fbrEGxbDs9joP5wAGsud2PdSsHd3tHcufiEswg1Nf9KWkhMaeEgJrp4VpDLya5MqNTJJMT2rgFt11TNnaz",
  "key14": "4uFce7oE1XaCTjfZHeVBSfyCMPxyD8qzniCk2f16QS54SSfDFkJM4UkZ4SDrGa9pTdrqUuF33uB5J1Cv3PASiriJ",
  "key15": "2XCh92SRGqitcCYJPyLxZQveBxAmBFAwAckHRHGC3C1XR2YsL58shdNATWtSaMFRePxXj1CNX1dQGRqAGByf5RMq",
  "key16": "2aksJN5d6YUjRzFNL3soKd89gLUVd2ayxZKpz2VD7jT69kCotoyZD7qesWCvCZt49U2bcHz4Hkue3qwUwtV5Co4q",
  "key17": "45wTDaGeWp82o1HYRdwd2TH5MryKfLGhN288URMFyoAPpUkjx8ZaNigkGvqNeVtmB4qeuMV77fpJyNMWXoL64jcX",
  "key18": "2npQx2ppXMNkpamTKyASY62sCEnTrY6reu2WEERLDck2rmX1EXeKxEipTcmqEL5ZVUoSGVJwV7GtdHUEuQeHWCUi",
  "key19": "4Q6hR5E6ifKqNxgctmgsvza15mS87j2UigVh1y7i1oVEn3oyqsrkRwW4rHLaaAvAEGdqY1QBW7GiEQ2AiYSu8CzT",
  "key20": "2nrwEL7GP5uQQUG1Z9uAyiooe16wPmYRo7v1V59Zcukm6eEpf7QAJuYmMisgq5cdxhb2sWDU6H3XMFQr1Ra5tn1g",
  "key21": "5YDfUcCtmicUGg8yAuag9uSi3sRQzr1brRMqXzh9X2RbF8VAF26DnQCEWfGopp5F78atXaVS2LBDRYZjRdTj9vsR",
  "key22": "39VxiJ7D5X4f9m3XaqVqUnL8cmLhmZevgzHNthxDgAanJ2KDjw6ndK4HGineft9LALgjUf4yGiYzbi6uVHEVmMjr",
  "key23": "31W5MwMD93GMbbziriQNNMKidwJz6Wtbppgcdvw69YUDaC3YMGZ774KmAXxyALSVnQzTwWmw2yCuUkmjPnK8gETq",
  "key24": "2Knd2vpV7p63rrf7CrGDeZmwF6bMTuULVFrCJJHS9gbrKPMSNRQw5pQuNEWxWRsR9cMF4azJKX3mrMXdR1nJK7iD",
  "key25": "3JNUJY4hs64DLR58ds7Rmzbzk51wdVGg8ww4GRjpjr3Zr4pUocCr67gD4EkaYaYRSu78qzWNBY63127zphcxhSip",
  "key26": "5juE1w18TMCCUR34mP1YhsebGoGs6jSJ2SASkCSMBeK4xZTMS9o8ba9aA2drW766BCYYkUhSw8S2dje85GwxUy1A",
  "key27": "4u84gTpAidUZwDStk3cPms1eTq6budVFraxrXCo4WQixM3pvZiib86xW5St2x9N6rTpDnTdA5WbbZCDjACThAndQ",
  "key28": "5RNkYaYePDvVgnEkYp1urQjmmuN8yi6LQcVLABnAAirsFmPEPJMSXWugM7KkFm92PRZMKRm88Jryt8DmR8dQ6g83",
  "key29": "3xK6dSCSjchQyXeYvHrcZZHhr3QAWwDiA4UHhFA8HjQpMMQTkwyKzrJgLoLcCvAjz5ar5wvYyt45v9oqydowKTrz",
  "key30": "4TLu8wx8qiWnTuBsrUvKmtpNJkmhCcShYdhTGJCm3a9GPtnS5wM21NNoMNDbvbkQR3SdyNy1WirrZbWWmX4g1Jyp"
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
