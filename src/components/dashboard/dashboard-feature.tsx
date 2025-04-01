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
    "u1NbsHq3w6S43FgxtNrfwRC9oxBVHJdD657A8Q4jfDBCnCn4AciM78gcvM1PbKfb59tZfD2xEXgVTRmkab3QJ8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRmVktfzz427aTVZuE1pqrJvw9DHHSGc5YnJCXQuzAGNdqZaCsNQ9Zm9BJoXXfVmvRC1Lawb5r2KRv6NSCnssqH",
  "key1": "LBqJwDshEgggBQeR8SdM3nHkouBue6sykK54NLyaRZ1YBUsiexXArVJkZbJnrNaM7uzn1TzacowAwBTApscgb3z",
  "key2": "43MtmxknSnExxZQFyXkPpZoiEEh2a5Xu183SB2iDfs8FfJUE8tkRMSzCcNRiYePfYTLK6UNc8oBG9ZsUZZcd8p32",
  "key3": "5tME6npRsbWSagWfJnBnv1z5UcEb3tnZnrrQqA6z9Q2BbrdNskYy4geKhKt3FnxjggDbw4i6UpqVqC7V5qBRRKgf",
  "key4": "5beYjuJ2bhhJF2WEeN22PU7HNecXmRqoZwRvszTyi14vreMkjksWRPdh6Aps3vTUPdAkhMUSyTrsCdLQLSVfCoxk",
  "key5": "5FTgSQnBZLpdjQM4T1gpkGhHPnSBJhJk6Y53sELnyt747Xvt21D4nAP48KpjnP7mrKNz9S5npHgy7ydgsgvpYDF2",
  "key6": "3hPu9wbXsFy2Pc16BysAVoFv93HPfaxw26fqqqrmwTSsoNp1Zt9CW78yJ9Tj5XpKhvKtbfsKkhhMjTQpJtDdtL1o",
  "key7": "z4yamQ9AqyrMptiNXWT7ZQFf2smTF2jnw81bdgTS6ovB7XWaqzeom5N2bFroFDJkiMrCCnnnjp7zQFGrcAP7W5X",
  "key8": "uHUePCRgN6AiEdmQNwNkHYhovd1v4stu97fMz5vv7CDsNtKyEZajoQZ3g6s7i3SBALwgj1Qr5m1Yjso1G9gQfxR",
  "key9": "2iUoyLChG88dso3PBzzc1jTcxvBC6cTxgthECsGKJ82jqGgZ4MaYwp4VmBYbDEwWq5AxMqHb5kfjVbHsfYoPyyVA",
  "key10": "oTJDEzdzbJ7UqgupMJEmE1C1Abwy5Q5NzgCNXrUX7YPadWKJaFGVopoJfLXLm7emww4hvT7xBYPQDmvwKrdZknX",
  "key11": "3VmSxZ4AMPCnX7W78iq7x9ECLRffb3LMSMmR7khxbZYE1QsTUtPTZyuWd2p1mWLCWBPF1VumMbv98i9rjTnZV8wH",
  "key12": "44b9TKMDBc9Jtyfq96zuXE1RuRg4Ftx9jZacU18Lxzn26SSGGGvA2GdDfHN5Esn5sANgeMNa161XEQFbmxA98ymc",
  "key13": "35hGKj81kXocshteXsNNqwasZthoS686Ewn73FiU1zcegLhh9mg8gz4Ag6ADLyWdL9jgCP8BrMLAFWBiqwH3uFJ6",
  "key14": "3rib3TDs1L7N5Y6eCg7idtkwgaETxcUmyX56LVy7BLrmLDt2aXiNQyp8f1USCkr1tn1iqbZU6Qibse22nHFvanby",
  "key15": "5J1rKH5G2re2bfzuUCyzwcsG7w1m7UyrEhBtue3PwNRwDHchi8FU931YJaU1rC3s7uu1rwkj1zCSDGFktW1dCcfi",
  "key16": "4xBEoNSvcpHDW4EVp17BtpDUq1LES5EUhhmYauR8NheFpi37sGNaBodKT3aRwXjxuAdaeBykyo2CxuL4U3qS34Fx",
  "key17": "5gEfnvmzCaLGc3Aiv3yH9k3dEfNPexuWxGmo9EyUGvnDdxAAjxBLwy4eQtFckeuSJFx384621wQz8e5zHATpgLab",
  "key18": "3RFaTb3WZYzAW531yn6T1rUra2gaY9g8ejFtnKpcHs3wWWjaKrHYngEv5xgAiUXsdynBS4inAxSHw3rXGt3BV3Zo",
  "key19": "2NyVwAdTiEB6nbjdKRULj8sFWG6DBT546URiJmNLdyKbWJJKMcxJh4RJBkQdqHiNC7xCbL3TFakmDHkECK6ai8u8",
  "key20": "516CDFchkZqKF5JB9KTreCQ3JFMGYBUNBua9VzdueL7tuTrt6RMRyXN4Y5KkeovtfaBik3EcMJ6J6G3E94ZFEWWf",
  "key21": "GuUF21jtBEdjr4QmPTpyHrbaxXeHpk27Fs63Gy4GKZM6Hoxd5NaH6cedCckPSnEgP3GachGhCRTrcWo1BN2KQ8c",
  "key22": "63gthMwVp1JAsP7c4XfaXuutK2N8aHCsHSJLycYVw4QgRrySjmQAjbGfD7HSFrqnD68Wat3HYk16grNLagUUCuoh",
  "key23": "3UbekuAxgMDgHrPSyP3AQRgYP7mwUSBSY6NrfuYFTSkDfRfcpCfRGsrHHUUW8Tv9KsAyBDYnASGmC3Cj6bXRzE3E",
  "key24": "2NfgsaDxSLVNP59JCoVDs9fjF31w7jyrtDPeiZVBgq8ZPLjsL17qFxSnnUDJN3xpFydJFb6ow4mUYjtakwUAQmB9",
  "key25": "2e84SZ1T4i8XpJvSNAiKPmHs18DJbDmAvRKXxquAzTJftjo9cWiynqoQ95pkBesCkn3bpQEdoiGVCQEqMfzYyk99",
  "key26": "56bnLjketMfAXNmCCTwypFSAAJarjPVgidE6DoNwz1xEC8gQG4L747z1nZ71Y4Pm7v2QqjbPEARHoiD7gapdSNCy",
  "key27": "5ZjSPXRyHU2X33o7tcE2vviNczAGfWvK8T6cqTBBGvZvKAsamN9M5KW6k2SBg3GMzZDmdHuLJZB2SzfzKjPawvJV",
  "key28": "3cU2XGa5fjt14oviVzt8nxoGftbwiBcL4VAr8113ybYq98KQa8zbkiG8ZpLVMMzHxMQtP1JkE4nvxucCXH8n9UR7",
  "key29": "219mVkj5kBqzb4TanDiPPZCQeFayjip9WwebdpG7Cxm4TszctuBP9VaPaQFpoLorhLyACSH4KeSMfuv9XbMvwUGw",
  "key30": "8eXoeemxqj7F4cpSCRBrEKUkNfJzM1avXFpdWRMMtaeMFKuAYFvF7C9hgjzCYeYKNunD3AWJGakPoLTtZu993Uo",
  "key31": "5qDYHFt8MKKdfT3K3wWXF7k6gA2hCwHehk4NWhjWJ7AusS7K75hKoGza3SmjJ6RFNsAi339iQajQcCwrfz8MTdxA",
  "key32": "2Q5yDbaC7PXTyXsWzxZE5vf4ERS2wGEvuc1ocdbhCFz1qWAXDw85UDLpx7mWKGs1rsHRdMcVo2AeFmrpMNbSsiwU",
  "key33": "62NCJDotgyJ1LSLsf7eB1pE9hACLhBMdm7ABaNKAAVbyToRHQvDyt8rJe5ugi3caZP5qZ6dJh8Ap1S4qsm7eqWqN",
  "key34": "54Luv47HN5yDrXEDt3N5ahvGetHzRA949BEHDSihaSJp3Rn4H5rGFGRQsv9kyUo6BVSjd4UDub7X218xGTi2H6hG",
  "key35": "RBJNWjS4awU1ccw7Ys48V6uUFezV27ETZfS7L2ViatYnbHq1kLmY1b2dfFAnrYNzyDmgqBfFPXUscKdqSwMsUfQ",
  "key36": "3CFDqM4Pp2ZcurSKVpgoaQjR8gfCfxtZusApoYjM9uZSqGGSUvubACH39NH77NpShNXJ7BqziS1gPAXXyi2zHcTX",
  "key37": "4cAUVqGNLx3XD3rjcuuTuPaWN5dBRg96mpc68fnNEzCaTHq8YWE2jHcW9AMzJwhv9uQaJT6vzxbHVdC9Z92f2vm",
  "key38": "3aset6kYyJVHhSjGor6uzHXSAQu2fYKGEVZLYojgTMg5khdNTuVTrGUEMGPww87vEcPGxvYNDCxuLCoPtCWdYrj7",
  "key39": "4fQ1Tv241DJKfe69SpDCrk66xm7uT5GtHHz7RNbMJevE8JebZYNQbE8CEybALCGo2s2jiHjYAizsgzZi4jstEq1D",
  "key40": "3rPpTWtViTxaoZH2spdnLEym2QeFVRPkYMzgYSAQjBTRTc8mhT59LfDNaR4RJ3hqF2yLru59XSTnBHda4V9W68gQ",
  "key41": "2RDs9uNTupGtSoi72Jk3CwzE2gA3rCE2u4Y3EHsxGbg5EoRY41p1unwvFLdcFeaMLoQQVFFq7r9nRz5DwNxx717z",
  "key42": "4jiKfPxf2xE9j6mBRSKkmUUQ7CTVhFbouq1rybB212UKgfiHEYk9HDgMAJuFvLWdMHHHePGJJRWrHCxWhjEdbWsw",
  "key43": "31GSQrMbgnCgxHQLdmDz76Pi5VpMtDTMrPyS3dGwfEG1EYgcVWAArPnNhMuo2pYBHbVvZ2Nc3xs7Aboihdy918yW"
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
