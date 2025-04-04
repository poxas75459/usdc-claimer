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
    "4NDH9mTaRpM6FpcqW4S2qVe7C3PyT6oaWDw7zcB9jSToPMhunrYH7v5Y83yaLJDcXqfFKpSCUx3VuY9GFv7NVa2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bm29zweFBHdZU8R9Uzwvb1KDSkadQPk8nbnyTCMsLSYD8W7f2JeyugaGziFhEjo2cdKaBuAJVyLWZk5GVQwhmdV",
  "key1": "4rYGgVtyBeS2KbSR6XFW9t3debf1gyK4gD1n6YsBpDKpJRDB2xKAeBiRNLh2HzDBGVtuUGeujVnCua2pVgFfJtNG",
  "key2": "2muhL9jxiFpfa4wEjucGNVssboShAXH1SSx362jAscPAXXfNFkf6mtdBEqDKWar1fgN3mn9hAeaJLXfWCZFixSDb",
  "key3": "335zXZutpiVsNrLhmBXpCL8qytZ5KTZfe7uukBnox6Nu5bjdhrKkdrShJRpq1tii7XRQi63sY55sKKCE37U32MsW",
  "key4": "243h8nF3uL9F9rvWo8YFCwLNAG9tjVA8cQDBSB5Qff2YM22a4CH8v2bz4zbwXokVnkoAzkQqRc6m2JKzZws9JXJ6",
  "key5": "4Syja96RPoEn9AYnLzJbL1Z7A1BxRJ3SoYY2pWZqz6dm23Louw4tuaWpjs1xEMEvy5QUQf7yaL3wRv9QhPmGxHE8",
  "key6": "MD8dvErVRzXvADeWP8kCJ78Vt1FBGGctt5WDf57cvdQ8gkjE6uGievtmMKDWyECX5CgcWgycsuamS3HJhN5YhML",
  "key7": "2g3Gm9WggqF7awTa2EKiJpNYzpAw8dhqRsyCmCB5sgDiqKfqkvt3mDcLWxsLDPTjtQhkuVU1DfGJLvyQCw3XFT1s",
  "key8": "o2NDzXXGDj6VcoAP7s1cxWSQumpwNmeYPCpMSobUfLJXJJ3jHAew45QXZKEydHNjiQcisBNvZTsmJNTuscTeAAC",
  "key9": "5zqCfRZQcMeMKRYJFWct8Ku5FRR5VdkTaENBq19FJ2s6D8n4bFeQefdpmMsQWNSJBdsjc6CqzKC3rxKBDP4Fwfrq",
  "key10": "5zheTpR5SSTnznpgET8jXSTNdWLRom6aikNFxe49wK1unNEbWofFsuJLSscDYdqSvGmbcw4NVgoyF7oXdQgqki5J",
  "key11": "5n7bVYcfAJ5fYSw17GetjFYsHH93dQVt1TU9RK77tJdP5L5h9PKVpCSuVnM2Wyr84ohNDM1D5RRToaLQtZG3hq12",
  "key12": "31nHrZhArfJAxistYQnDUJhmhmUpyMBVj3DUXPe5oABVJSCQu17Hanow8pBPJ9Ys4hwmWkY5UkWKiJHs8B51zDbJ",
  "key13": "2dqT4g2Sy5n2oBWaGAg1kbtZQ9AMGQSHfKe3esc5eBXrnd5gmZN19s6NH13DLLKAqVR35xGLspevD9S6Nt1a1hG6",
  "key14": "3JQk4QNb9yQXTXiZGZJ4E4p4pTVNk22FL86HNSZZTWENuTFAtFXJfk6nJjJqhdQtUihHGhFzYTxnQ2Q6iUDzUQSq",
  "key15": "22nMWgshn97eMqShkzSUTvV8AcD9R2E7ReTkSJULmGCrkyRmq9iCTzZeeutDscKyq1bxZLr8KauJJR1U8dNKrPS7",
  "key16": "3GY2crBYEnDwwRG8DKU3kGB882r5oavhSWfBeH4vZopYjcp2jwkey232Ue4NbquEzHqtxxebvFPMEf8Wj6FUp1og",
  "key17": "423xiLFdov8EK9DpbKFwEDZDEdXpA31mx9ss7PB9iVLeqQMjHJAivZmLDVcWvBaXGnFRD2FpEK4NDCMCt6PFomY5",
  "key18": "2ZWXNtP7U9QLFFYJ7h3N9fAnjCfjKmCeLH7WHTfPtMGy3EDLDd1n18peLWFoqPNNfBV22Xa1HfxCEL5HV6sF6zyL",
  "key19": "LMCAE6FCuEYHvatQ36ZdfrCXsVLkfMzZ9a1eMyS9mdFdWPBHym3hNMfYDWTDrA1yRkXMAS2NH8tXx3oLp7rzFEE",
  "key20": "2tWKhKKHMAcMgdgxNA72ziSmgbDAVEbsptJynhnNrVZyEYGuyVa3isGQG2ZmYp3YqACZu3B3wB31E9jEfKgV95YK",
  "key21": "3747d5kw7kbTeoovsyY4MgYwmm74y3xbi3VQp221mBb3LKXCerpKxLDZ9rteJGaqGCPS3iHq35HqiyB6rqNaoNne",
  "key22": "2gjmU12SYr4RJYQ2zSsCccdjdpPG3wwHTB5vCootdpDCT8o29iX6f2fH3vvfah9MLWCjHjtEABbdjcDnPQGUaXde",
  "key23": "63ftJ5nUr24P1nC6rfdNEzAdUC7FeTMswteGQPM6f9MJBypKx6EJyCwcheKNE3hMw1fUx9qCZUyHRSbej6Zr5tEX",
  "key24": "4GmamGzs3vd68w5NJ8k7KDsAZ4RQJFJ9QPJr5ZCMhTb6JedcdJveEvjJojG23WsuuTMsnEqHeqNF7XLsHtfjhBKv",
  "key25": "6tyehUdnK8qwX2wojTQnULPbhSvP4wEdZvWLDqPrxYSTXkzbBonnisFbjid7QtrWx1Jj3wEFWt2jWMokBpjXyu5",
  "key26": "39cbYJwTKV98Mgb88CkSxHSYUjp2eVTkjxaEmaJLrQzyAGUGmzESVm83S1ETLtDDarjbzhfQK8bEaEJuCKk5aAwW",
  "key27": "oKYoUxrmbVKCmoRvaNCvXHmgjHAV6QCTv4L7miZH49wPZD7BBntB4aTmE94LqKJGnYgzTK9bxxm9G6gwhejYMJ4",
  "key28": "2Lm68kARVwqCkaH52oDrkFf2A9uMdcL1HwDSx78p6jyQWyfmpdZe3zAJvrHj7xWzM2U2cpUgAQQ586GJYJAytpi7",
  "key29": "46cDHj936tD3Ed5rNEbGGQm8rckwKXUb6HUckNkuBk449x3B6PGkD4JN6exZfbyoMTcQWoL97gdSKmdbdaZq4SDt",
  "key30": "2ySiBdonCRBUkDTbmRNAgYiWx3Sy2CZxSxNMn9Fd6Z85Nwik9yway7mwvUVWNK5L5pAqSUUTHkaJRRPcifF1rs2e",
  "key31": "4Zf1K2jHd3XboG5WK3rZWShFsPUMpgejuziPtEK4q2NrTX8ja8TAiSfqPfjnNzoRbxFmqdokLQPL8rniZAGVvZFR",
  "key32": "5zB7Y7aB9C5V5uiQEVxAnpUj2wSG9pAwDmWrmHfEEi4N1FAgs5ng6PrPLNbZTeecRFGfZia9duEuxrKbi2fTQQkR",
  "key33": "3UGkVAc6CdC5a8XRzi94fcJBwAGeaCNXLHYnapqHaYUqzubriioUH6zfVJF1Z5yoxzT4gJxPaktC1YucYKiV1Fwr",
  "key34": "Hig9PJyH1CnMiwd3r4vNgRUz9mFeJCGdPFoGihHt9P75GHJGXuYFRHffMXJ9QQ9EBtQvD15jhD8Xs2UZGEJtkEz"
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
