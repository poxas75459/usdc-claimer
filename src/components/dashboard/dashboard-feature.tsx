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
    "3X8eQpgFpzY7SMPxT5JU74SESf9sPJfitzUhST59fiANBz7C5LZ36GvwZgMvZedKJmedRscWaiUhRkdeqQy9sYDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5pbmzdP51HtPiFvMjcxSMevJ2nTpHfktCVgJA5WcZrF2zh9ai7tcjC64DzJAiq6G88L8HJpfXNr3Hk5wghyFYQ",
  "key1": "4KVVru8WVEugiHdynKF5hxyWM9nLrptgeuxSSukSvFq7DUnDeTsJd9AJuTxUo65oQVDgAuKR2bawk1kiRRNDXAau",
  "key2": "3b4VowFREqQYnRsGQHwASrhiCSQo8J2b7waxGzrBF3YNyJU5RVgp15mtTjedvBPDWmAx9Akm3BBtzvv38GhcxTZj",
  "key3": "2xLEPPr1agXkcZqABnKbMHeBfnfRUYzoQXmeCcHunrCjkEMjMNSWptYBbCoKF35ANxHZtaMswDY5H2husRvKkxqL",
  "key4": "2DudTem1TsmmhKJfUR2PYgoMewRQbpw5uYZAEntELzU6vJcEypAvhe8cj67iEz7py2fhoaaWY5VXczmpiYyZxgf2",
  "key5": "fG9KNgaFLJHcYsVwZaq74cTn4rx3taMVGu8hUzumxmJLZHzZQa77czCpSfrd73kXuTMjjWySzzQD4MeRqBzmtdi",
  "key6": "4cGgzXaePSTPQmQgrZpkotZwJwV8No56WkiYaGzEx9QwaHkDnkkKDbWcW2sqLmhsyu7eSPFKpfHLzBcbZcu6PwyM",
  "key7": "2g1JVZ544hfuazG9UGWsLa4L9B6kU43y1Kjq7dYrVRmFz2k1q6UR4DFDpKpcveH3qAvqnQej9yDzXChvVx1BfJkz",
  "key8": "3S7SFJwEXycSW4ZxQ4wAAdmafQSa5ANPf4oKJ7pNYnMcx5Mrj6WffqbnVDVPoFF1C9vDkzXofdPwCe4DwNALAibv",
  "key9": "4iqoB8gQm3i1U6k5Aoi2Lp4zx2nfbwVYZvfEs8Z2yk85N5KSw5iS5w5grweWEUov2CUUb8kzKoXTkgwzwnqYvUjQ",
  "key10": "KAJrPqozHmpM45v1nVoPTwtAakKQur37A1UFzcjyVd4wqkiaUEJtjrHrHeZf8166sxBxkQr6exKGfxpgCn2vEnB",
  "key11": "5cjUNrVjR3di5yLvNruSKi8pehcyPuFAg942vFrjQa887kfHjURVTz5X6KwJJGCEmsG6KRhFrawEnTo1pfdExYZB",
  "key12": "4DTL21YsDqTcwczMUJ9uyM4ZqYPQHsoqJRWSKmYmiftYs8QPT2DoqifTESKAKfrZPo7aQQhMff9zcUh1dPueyJDE",
  "key13": "4dTtCtChuTbd34bBqcN6VaGB4BRqiBToPedXGhHbLE57gbgWBMPr7mhh7espQZWWsnUTtDRgwwUWthDg4m4UZWpS",
  "key14": "2UnP7tGEcLs5XJVmbuFNgs1KrXTJ5BAwH2iQPASFGVWc5Vvu5rDumfq1QkDvrurKSo4dFALoFtfvUAh2MAEK4yUi",
  "key15": "2LMW2XhMBgjGQk1xMfkmWv8aHpTMVP5rZW66NACqTYGG3oCcuVRebmnVFMWypdw5kveqqYaG17nuv84kTTrSQLXY",
  "key16": "hGsS2P31AHJiPnQ7NTapUs4mNeKZ4D4R2kfbKpuhpngpKCeeZMm6DAZew3HHnWgXd4t5bbnjmn4MR6h2cdCkCwd",
  "key17": "5bN6DVf6ypcpMn69cKysC9TfotHSZrKeeVu256ojApBkdrgd98XGZJwuJeTZTy7cK9QrQn8QyRdKfNVa2zrjZ6Gy",
  "key18": "3jVTE8zfuWW4ca9GvNw6D2Pw93u7SEpsZKh56nrW6X9J7e4FBoLfgDQiLr7AianKLFXXptbzqBGNeGxQWjWHJJB",
  "key19": "dK6W7BFq6emzsYRp6GRVk7d4GBQhvHH6ZxrLvUXWoErvL4Ud5ZguFjaWWGarr9Q48ouhnSAp32CUXTR3N454qja",
  "key20": "N12AGg2hGswAL9YSC7iTZoySLZUaEsvXgArna1mQfqqWQwhAv1zCvfg53TDoVrkDWjg9H6gUL98itogNKdVY77z",
  "key21": "2NwUhmaPhqSD9mUKPd7LdVq2S2U2P1MwyChen9QMChku3zsPkWbZ7Kjv1XvNMaNh63AV5Y24oxnyR4GZLa6rAaqM",
  "key22": "2HU9xVHNG58hQQTHcTViiE7JjDBcTYocAzRwdy7mouA6G2NPQApnfa4NT745fEyuPRYq92LUvWEQxoiAMiTXV9pd",
  "key23": "5xReG7nFPp94ySwGsbTNggwgraKbaU1ds2BMjscFnwehKEHKNoSBcc1degEE9V5VDVq4rKQm7vt6gkk9qQLe3D5u",
  "key24": "3Gxyc9TVT6uJ7zafFB6Sv8qc7enuD7fbpPkMEjFg2jmGHXL3vvh4FXymYfAHeFk9BQWt7P2GysvYViYcqWqrxkuz",
  "key25": "48N79hnPGRGc1wUvCnCpRELNaJ4iaBnNtg38gZnZDt3pkKcxfdLU2V9iMKobCMWyba4ZGjLu9hwyCq7P7keNpiKW",
  "key26": "2q8f2jfmJEa49W3cXbE3fH6UahWsQPnfu6j9V2q3zJ9CHznbkp9cTbjGdhyAZBmBivddWcifnEvjeG1EJUoKze6V",
  "key27": "6prRhJAW4QwTgLZuEHCweZuFiQ2NQyrkYoby9NcL5gCF9afwqqzPY1szi4JS9mEWFn2e3Jo6GuEWpzvKpZxovWD",
  "key28": "5vNBHKpgs5ebahCwWZjxgRfCKcHGCKukonNHKrwy6RcSrQR2EQeP3VBUREwmebcFw1UHCvUq3zC72ydsXSYpPW8U",
  "key29": "3DSYZvgiN3ydaQgw1MPTo4CwMA3XCzAMpBDz8kWGn1mjQhGSYPcL2W5MrFTqgwzQ7hSPdiDnfMq3GtSjbhYvzkaE",
  "key30": "2yzyoJ5oehnm1bQizUnJ3HsLdS5CFasmWz1LfqSSknXayKLKjS14Ue1vLayGg3iGYwZaoBpQyuyNiuHdsw6cmeia",
  "key31": "51tucsUPzPxNAAf5uHWnAhvUAmtRxdA2kVcyo9mnyENUrEAB6neGDHryjETiZ1VuLgMeHCMA6uQEiYmsgRJbHbPF",
  "key32": "zF72Jsz9VGXi5f5coEPiHgchoMs8w3hjzCduadSSPsu16D8dHhJFWSJeVtDuHWPQRRNg5gAgMV1iEip17Xk1Zwo",
  "key33": "413iBDU1Z67DLWxjTAagvV13rBuwGk7UWgZUyf4pwjVFwX1NqmMdkoqA4QqGG6QNC1ps9V7UAujNkS39NPhZsvz4",
  "key34": "2ALjmgxwkVAjciirE8FywPWtq1TqDP17FSo2Pty21gq15P3Yx8SfweLVj98UWhT3ajngNSYTQRmVrtSfcC9vJD4o",
  "key35": "Wf3xJCAdgz3ikqT3poYPFreS8ex3ey97mFiKws6efeQDfr985mZ1KoLx83YggodvHfMYY6YBr9r1kjnHGRH4YKv",
  "key36": "4A2xiat9g4MmRDSX3FPhqeESLn2f6hPW1gxS5QLEeCbdGtyoCEznYQkNCdfoiXvF67CMZeQf2MqgwzTRSBDKTUCx",
  "key37": "4zMDi821EpApVC7ufmEK7eqQDNhhFWSDwVdDqYX5NTFoxb7hk7E3MtkjQ7Xg9uhrT1TVoS55J7u4ybqxRF5zn61J",
  "key38": "4KiEV9ak2E1ZPHaYMt77ZDLg4LqXG5XR34YReAkPtgJzYYsNYFAdz4F8GpPcH4ZLRDkRx1WmVBfNqkpGi5DTSrS1",
  "key39": "BXKE3kgRGGZoBgyTVnVCFBUczryjafPeZFDWS9y2KUBFJEwZvrrvA86DcVzWzKhzw86mepWirFc6wPKskAZeB2e",
  "key40": "4DsErA9pXiUnJPj9hwdYARUMgpFe8m1YZANrMoX3LowTsXH7r7NW1zY78WPVftefJDxN4uHbUrenG3vtkYdu2xAc",
  "key41": "MBEbdPNV7VxbzQYAXaLZqNjWFtnpHYoioBijhTNW7HP8kGp1VtE4hi3wcTZmSqQmT77VeNThK9gTPWbXfeYivhQ",
  "key42": "22bZosMES7XQMckDbqQJvcTDc4Xe6Xe9arevdvqr1Z4vzim2ebqDAaaXibxqqV6GxRcQRr1rHJuZiFsxsKmdJDGM",
  "key43": "4JrUCt3egXhe5iVHcJ4ZdKYLJv26LMeCkQd9dPznWnNopCLgfF1Xn1bgqT8yWBRQUg1baYpWcaphU1zorfk9X4u5",
  "key44": "4TU1WF35YBB3XAiwcWVxKHnt7W9KYiBEqd17fU57ARy6SbrKyKaY4u3rdV1kJHxjr9nTtg7MNn89fUvCCfz81Gd1",
  "key45": "4GSnwxzTn7WofHa8Bg28s3ekuzS3KAyhF446JVEK9H4EAmyF14jaLVGHnVZRMVAsSTomb1Kmv5vVwUbNvr1yxtyS",
  "key46": "4Uih1CZvoT4KKXUfkwwB7pVCV37NZPGD33P6LV66dAqiJAtyJMwvQBmFrjUQVVHtUn312T5s24Q6z3otLXRZTFfK"
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
