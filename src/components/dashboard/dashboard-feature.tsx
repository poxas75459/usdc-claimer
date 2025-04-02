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
    "3212d8QJn7kWk2ycV9Ad7QWMvPx1cZhkmDMpf4ffAyBCGYP3wsmT2A3Fqu9u56anorLL9P9VSh9NY2YT8SPPXG8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoCmjMWWW95HXnV9qYCd33VLXTxk1fsC7uNgmihkf6a1W9EsDDcGX2MgMVwHFtsvST2p6863EEiQNSofokGAvix",
  "key1": "4HbNeD1x4hrZpagjj64x99i5Z4wTAxUw2pkoEjzUwiLbnVqNFUzEY1Ux6JAySvnJNDaeS1QywRiGZ3pv2ZrDWwY9",
  "key2": "5X3zSRqVmCmg4BSvpdGwc684nWCBPJsdRuTEuY4hG7dDu5roQ5UJhXPHhTAdq33NHmvtxvFQyfU3vE68FkAMyxYW",
  "key3": "8speP14rM8qgpYfXo5kkcsvj1hdXePC8yaHgrw6P5p8u4gYF2F5YykdAWCa7ExUA47n1xsppDA4Gp2BLU1Yh1QR",
  "key4": "4mNvdbooRvLZYuPAbJAoRuCmuJwCPc4jyE4B1P3X2vSAwjN4tKzcgnkVPpcModYAPTfrKBwJMMzzQ6RVAysQxs2U",
  "key5": "2fVSZVthAr2LmYX8r4jVC4Jok5468Dw2rQmcrYR2hPtFLivSQR7seWe2bDGcRiPypUqPYjTdpThBY471V6zgrec2",
  "key6": "5LctqnmdiYDjyv2zPiB5mGs2YdcGSRwnzJKUTFvnXrHMJGKHAobEucB7XmRXYCD48DhV8Hmwobm8FZcU6dmPgWz1",
  "key7": "4fSzJBkSAjVnVsXog2V96QSSx9dmd6XSRjDjwFS9oFVHqRk9Xop4BG2ASNdS1D6v4fSmn9HtX5bBPWiNiBESmBrn",
  "key8": "7mirrAw5gNtTRpeKtfw54PBwRFJdsJM11GatiLmcYNVMUkV295Dx2639NRVisNuHKNxhimqyamnuECwLb1BAcim",
  "key9": "3ksQ17vbDW7pB7Kn7Vw3m1CZx8XP2RAoLoJ5fYL8tcaUfuowe56wM8bRG6bh8y2fDvsnbvVS88h4DG9A9y7rRQGv",
  "key10": "3E4hyNbBtP1j9HmsGf91DEQM2u1ZwrU2TK53Dj8p9E4jz9zFWkWw2BnMWk8DXzNmPMSNrVLtBw8Ybn5QweNaYLnS",
  "key11": "U4uPLr7xUpNqvp4ofPEEPa83q81bVhEGk11MUEMXVm9VeHbHZ5cVts3PRGaXEnX3bRQUPXdpWtGGWnYMNGu3BEo",
  "key12": "393xu9zfY7kU7p9jQ2WUQQvVjVwAo1vFqjSnnEbEq3qsX8Z2UmNa43ABSVwAfvN8kWtEtmkBDchMbUDi4PMFKvJC",
  "key13": "4UETxm7MRYtTf5mDJovVbfLArcMZ9NBCEZwg1LCj6RYzvE3EV3nAhwNrnqbVA59aeWLQc5iqVS4vPdsPmsna5X26",
  "key14": "2jZmsdq4YknAJaQVZ44DPKE1x8YCeL9Red9ffR4DvdsSqwe1WnLbm4GrHZpRUieXwMSFS9q8HkscfguXWev8jXqk",
  "key15": "46YiG5hCapm4syyeaf7jRT3f29rZmdTXVndDjUoUqaQ1vLXRCDK2pZnwTnTfbykhu3zAcr9hm983ervg5MVGTAWG",
  "key16": "3WS6zVN8rt91qDRNhq3zvX7wLMB2AF2RSMhXQYCbvwWnR5SwPXMzSgFwRrZbFXN7H9EtbFqjpwgzCYrw6arY3hGQ",
  "key17": "5FEFrVYH7dHaweGovi9bE16WPpaEt1VhUhSk182tQvRTTLKtywiEx3yCvLHzTLTScFor6EG257x7CnYiybhX8wnt",
  "key18": "2qtrsz6hehnZSN7kyhFKFbQvjenTQ3PhNKvSFoxyL4baaLbvkvqouJHiyvLutCKVesWwfwQ7YowJesq5C4Fxpb9w",
  "key19": "bevfpiKX4NCcLczMMbJPZB5yYArYvU4FmpkBSUw99mdaYtHPT9V6V9HWyVnFVBtGmv9iwCQtHLMuRbGCJ12kksr",
  "key20": "59LPibqyF3tGrvPtGNNg6CpZbAEm4xiCbqwBfqoR1phSiARP2ST6w2S5ZGeetSy9wzuFtgyJestzXS2eoEQXVZ8t",
  "key21": "2bvq6JZ7o8LYiJ6xbU2od7wUn7ZeGDcRhXmor6Gxuq63jkwUR4gbLFAGUDbNivQMP8bFhJT46Bv4WRC3VHovcRKc",
  "key22": "2g8QVXY4WVdDhuNHLRSHQsjgk5SL9NHrYzvVqiCwojNHotTzQVS4brwUEB3jwSgH7PLhcqtVV6aR8v7JQTmmxeyL",
  "key23": "3SrLR7id6KpzuQtobpG4DH4VXLYrfpuNUBxNvXV8garKwCbJdcfhvwFrQA6nsDezZcurdwkRweUL4ugswxVEv6HB",
  "key24": "Y9ZmdXeqnrvWXvEwwsnTKfqSWGEVUw1DVa2oEufnPTSMCyn5ZjGaauidJr3od6SwQWLm5ox1MLcJmyXLeKbWiNe",
  "key25": "ra7nSBGK8RWW9h5Ue1Yac7LjJg1zJNGo96wTAPbkd8cgTJ9XiExBCmzehhYSgz6zjcToSzT9qT14uC1KRdx9Qc9",
  "key26": "4HzGaLw8iUSQrwXaj431urTnjvjK888mMvT4XHYrY5cKiHM52JHQQD78FMZuqZVmQtTGwRZZnajNiRkvDd4DsjQU",
  "key27": "5qxAnJyqcf69FNwShZwKHt4QyM65H4kabrCfrrDYPDreWN5veAd4tJtWEoBj6F5pZ96tmhF3kZdkqCeN3iNgGrpj",
  "key28": "2BDAvb6xWdA1DCLnP9j4QVR4udHwYXUnV8bbTdkmPnmzu3ALCEikLw6jtFNbUGcTmeqSaSDSUCDBAqhKbUDavNGt",
  "key29": "xqYB1yGxFfN7B66vgPq52LqUNjBQqtLscM2PUinspXNLFeA3LGsXkLURXnoemBwW1iSiMW42WnJH6idrUotGJfK",
  "key30": "2LYH1fb6KNPtpoXQFoBr5DkhoTUw14LprivQ8y6xfQViRpyw7aExbq2Zu2kDdWm244vC7L2ChFDkxmDF33K3aYim",
  "key31": "2FBqkFi2w4kZscGivwmTwFrrrTinzSJ3tAeLuuXrihDipfDp4FmhyWbXzRhwgNXoSh83DEjSsLkD8Lw5LonuMxV2",
  "key32": "2pMovPaQvVEf1i3WpPZGDt7nMRiTSDxnF9kYJDC2avczmbs3zScAL45AEUyBYEQxbzwrEvxSzcRN9HJhRzc3hCkX",
  "key33": "2U35XBP9sAmYWuFRUbmLGxCJvjKzBdu4HLzsBQxY7DPixR8QoC8kf9R7PtextSHAC3FSyQnW9r1XZ6hXTZLckXTu",
  "key34": "8C85iQhmyaQiERen2GgiMhp8MmM9ocYdK6i3XhaAfVXq6boJ4JmK18xvgsXAEpqx4gA8HJFbBkE8YZ1qYPR9JrW",
  "key35": "5CLvsrYhaA8d7HAtAYDfFcwfH4zHfx4ckLCFgsAiRdBNL1cPE8PNSEjEpsBken39nHMJWNRQu1JNKBkxNfawu833",
  "key36": "4JRur7zcSyg7kMPiVpkXR98HHFHqVfk2FyvR7xRbX5q7t9dhsaLUYczpbcUu46B8stEDGdZgP4jSYUy7gCP4uoTq",
  "key37": "62RzbZzdYsYymrB9NvBdhQMkNrEt4vwWqmtfRRME4XauazTvfaPHGBpSkAPyCaNU4egTbTfhEcZRhobLwEeesqoo",
  "key38": "4BzfAurUr1kwWEutxyGPA23CSwpEunfGxTxry8sb5P3Co56P5R3TZqWp3DY4tSNb4XASaeHBpTpXBc8Bv3qGRxVp",
  "key39": "5BCpLzGZK9PZe8cbChoeKUDwvmmVMFaDusTjkKLzGVtpT9q7p1SB7LJNNRp3r8x3rS3xp1YGo8qEFAw4o7wr1wQd",
  "key40": "UpBpNdpdfJHExkPQbTfH6oXwkZ4cXDMyFRqSvmAqsu6UtdqV5jwLfwxz79GC77iK8Mv35kwo1oMhkKrjapSdPqS",
  "key41": "tNaFcm2aHkdAb71dJm7zqJfLWmzoRjKJYqXhbFupWr4PYHPQKyduSeFTNqT9zVuK555yihPqaBHHNPGBAiPRK56",
  "key42": "2354556BJ2sWP4bxmt7PgHoyTRb7SJRsFJ6ctCZkKwgMGJAoZa1hkbveZVWp7L5twVF4mh18wAuPEivnVyfDByMF",
  "key43": "5AxWfGQQ4Mg1pbtV2ztBhDcQoscXuBRYwvNTLJnJsR25jSyDYFDZ7Kmno2SVuwVuHq6wNJdguaZnTNboGccaugyu"
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
