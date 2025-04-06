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
    "4vBhE7XiZUPUtp7dJ54TgXknDEyHquXXHUhD1YYXopBSdCxJMgtW5UBt71Ra3oXy3qbLT9jUkkp5jqLkne2Cg1vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVLHqmsX4MNqJFgfiMXPg6jHCKL4DYETjiQPSn8YojA8V34pKxrqPGCQvhDjArtai2gL4BKs5jTFJ71QMnCMuAx",
  "key1": "3vdkim3AArXG6NHyZacaT5XaWzSyKhC1yuRYARVpDLVxLJ2qxL6jtTQbPRkUUJYsV5hdehSh6KxS1hpnZupPZ6qJ",
  "key2": "2RKX7HMgJStb8Mjso1uvbx3YwMLL6yf7yYQ5Q4XY9JfSGhgF9U7xjddudyGoyvtwnh6KCngWZkLzSu9cUGybWHPj",
  "key3": "48krb1JsgLzoCDZLpxfavgTMnY3modvrApLPnn3bWBEWauSLP4JghoVnVaQLPJeKu8qBw1hXD38UYeApZ49gkx7H",
  "key4": "hSDWMfJ1iFqnsorfRqxywci5rWGTBAZHcmhazsps45cb9MiZLkK7eV6Q3Ab9snCR9dCKUBWhpDMYfLu2gjrTzgz",
  "key5": "54cuAPcm8sJ2ck2dxvs8eWYYp5k2nS9THgQZSad7DLzfejaU6idB1wDHQWiJAyvQ36M3iuQxb5oaijVetEkY6VEx",
  "key6": "qcaGb1dn1pm2B4KnRA88Fdao7VfZomoyT5gDzrFD6VGbc4ZAPZEXx7F2uEc8s5jcyGPuwLRCyQakJMe2JDCD5M6",
  "key7": "63FFamhUEjMUTexRwmRqTMXvNTjEtwQAeuvheQ3pAFTZ955YcCQbFwr317ChWGEVbbM73D2U81EvMY9vTQ7N5ds5",
  "key8": "3UrY4UrPiEVgs84kw2ubKoHiqhNHUttoVBWBmwvMBdRxWw6ZM7LWLmt9mNTrwDZmWoDATQnTnnkQP42r8Y31GUK",
  "key9": "3zyJuWD62Hhr7FhrpWJikxoqoNsEPE8fDagNAhBxTMjBLGk6Daot51MKFG1dKA71zKea4E8mmYbMvrgcHhotimLC",
  "key10": "5C521PULBT84cdWZoPzp7Lj9NFyZJ46e4k9AFdzXuqKCBcdRBJ7xLpjhG3vz9cKjNnRiCzRLcymthhzhXbKhGAqH",
  "key11": "2MMpqTAwXYVn7mWxzVVT7rAkNcQJNVooifK1pePaHKgLPoD7jHRupEMaQMssTqBvXMnLVSrmAP3iYrpF74gph2pw",
  "key12": "2R4ga3JA91mkngjxpU3HW11XmY5XRt9xVdgmnrScQsSxfM3oHtjQ1gbGsM397dzda9eHTbZcon1vmbi1T1JDHjcd",
  "key13": "5j8wcbEd8ha5ssMQZmupkXoRmmXF53JKyp4Gu4DGYQzEbbLnxcUA7HwBpNX3fMh6D5RupfBPxGy2ee63eUmsAA7x",
  "key14": "5YY7mNqbwV6svYuJmdFd4cXF8fnvqgLjNABTHfJi9i5cQPRdmbC3vmCfbR4gZunrtuxrMZ4WVcXVEUdaU4rhMusU",
  "key15": "vy46nEmqDPLUZHqGW97u8dUEaoMpJPNfmQW7bngJibZW93UMF2dSngMkRxcBuZawyiNoZRENwiBQcati7vEUvJt",
  "key16": "QSKDesLqESXiGgNwc3UEuZB7ryfugVrXkeTs1n6saQtBPocYebWP5PMsVhDRxKd5cd7sxxBr4vJoitLJAeAFvaY",
  "key17": "5qqY2e8KfuXAuGpbWkLa4dk6qPWexDegwSfGY2bwHGNQhBHqetLrT6yRZELQEBN2UQ6pDrSQdfkwC5ZeHb3B3rXv",
  "key18": "573QWfL9cFvhGZcW8wYd8PVeHvZvRBn9qtvo7YobeP91DXwn3574HvERpfWPNjd72w4hAL1VKtcU9rZT2pTzyF5s",
  "key19": "5vgaehTWSJsVxxadL87MF3krsY8c9Wi2ZSwcnm5QG4Wf9opDaHGBo8WmsqvZBJF6zxhoNmvESHCts6mAqTi1vJV8",
  "key20": "FbDgPwjwGwigWtCYp8HdwtKqFAmj3jwuTsGPAMTSmUzB2eDFy8srWqidWNTkifQXfF5ZqGnVP2uv5RL9Z8GcZsb",
  "key21": "YsVGW8qeabJ8ioZWKwDBb31xXv3vtRSMK2iRVq5vbzuMdHGHfu8oG6foCPnov28dwmw4ozCcs86c9bF1b2PEDmV",
  "key22": "5sBvu3BtJs8yx3eX8unLTRQp9Ehr8bA8E5WvNoBD2xZ97s9VXzrVbRcHLtExBnANCK2rxUXB2BnWgJiqkkKwSETr",
  "key23": "3ozwbiNhRBJYAXcgc8yoK38C5mexFZs2jddNrAh6KBaP5P83Sjk6Emg91zFdBrLwdsgKBPA8JVdA6YcacAjkup8o",
  "key24": "4Gm7LpecVSoimatdHHp47q6QCuac9RmqNkW3e7SQUwyuGr4F6dvy5CGhUpCV392oNU5fx8ELWfhK6PCaP7hoFfLC",
  "key25": "4ggNhDRNn7SDYZ6v94GMgXcUZve6UyisGGD5cGmfb2gErBKv26Cb99yWRfBX1AkZXsck1SRzdkKvaU9fmC378pYA"
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
