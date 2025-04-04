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
    "2XkF1A51GsaK8XEZ7C637TosKT5Ex2G9KnzqV1bhVbmN8hGszKq2VGai68TELEDJoZprTQdi8Bp7BXscyM9GdZbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRBWaDP8U4nAGB8cMUKVid2YxwjZaCi54y3NRKijK33rC8QrHi6CDdaqQRVBrTm3iMC8iYEmspLoWcPcqdcuAk",
  "key1": "HAURGPR3NWtvi6teTkVQddzwVp7aMw2HK5i2xbE1wAgrr41U1VvpBvjxPsTUA8SPgLRP75WDrWLY5crQhbC3kFj",
  "key2": "4TAi3uAUPUqkDSujhyvHEm5qjnyE1YPU2MEHqdUfnKaktnqdqPrBKrZaegYXkbvYRX1jwMtSVpBHeV6Lq1LVfFfb",
  "key3": "5AMpvdw1uhg1SgpM1zkFxcWZxXMQsCD3FehHVgb6umsx4d5EJdDiWmWSLTkmvC25uoP1ySMN16SnchKqBe7hGLsV",
  "key4": "5g4ogP7fKtLkFsn2Dyu5aiANqBNgxvUu9oj5bT41FxsEtkRpyv8SXL773wFp2sb39426iitB3JGypGL44XNNmcNs",
  "key5": "4e4moFD1n8N858NYDujZLvyEwQmA2tZDxUMF1AWELAJ65NVRsARUGhPt5MAyT1dRSJckzzaH5wt8UZ959sNMxUoC",
  "key6": "VAorqjLMt91zfDAAUxmSTR6mXcexzdhGcZL5AiAwwrKogvFE9MZTZnA6KAYf1GvoJEzQt4UpMUuzhGWzK6eAoju",
  "key7": "DfwQshPFAt8WacebiArww2EMCtpnrx83JBgRS4Cbm1EpD6ydbn4NZJmtyzyi4JC64tGirKMFpudarba2Jjwu17c",
  "key8": "3hgfaroCRFVvEXxZWpFNtA7s1gtNYoehmeai6897PsQ9FKH8wxPijCoYEQCY3WUSFG5QHm1SrFJotduTyUW67iFj",
  "key9": "4U33J2BeAixPDZmBgaEHF6JouyCydqTH4xAQB91kVYt5SjgPhVYDDUHY55rkvRbi2rah3PnxuB65RRbi1TBhMbVu",
  "key10": "3dzksD8qcKLDoMnrNEHdt3BEYkFviDLubBfSpWa1QySvnKnuvRx2XfmeCfV51g23kz6YkN1BESzvnfkhgTpviESE",
  "key11": "5po4y9PGiEZAT7UidRnHrvFXKu362sGWFTwWbPokHr9QTeyaxeibi5Z3pSbH8Uoh1WGtmCtGts9XjjG8kbgT3hYz",
  "key12": "WEK73dLyZMcTS1pTZFRQn1F9psqRPriWLq5tpursArbV9dFCD8uySBiFDH1eSEwqqVkjQJqjf9XqkvNHsuxeR8L",
  "key13": "55CrupoeiqGbJRkHTHiKDTo3XMe6HFKQCuCbxA4f6AVEgYAFnVjPXpoFaMDghTBiMr7wTFuBd6hViLEqgrJztcbL",
  "key14": "3Bow8XtqHFAxy1fXTkekgkYBrbR2Awjib8gnMchhDE15UCioEzMWrXbUZsosXRyANYVVbb41LLrtNX6zwJTqWmCt",
  "key15": "4aocUzFvKwYxy6zpf4ScAYLzPcxUeGt95TWPG4hiVx9KiUSmhjRkYtN79KWrYYERNnzjSwyZDr3GwGPdmv4pnyKt",
  "key16": "5c7ZB3i2v3VjeGsSyvbCUx7QMCFpwWXjA2RjcJGiRVdtGPFNsnsPcDnJNL1VLN83m4gqUFUTMfciNYGvtdKp5oad",
  "key17": "5CyA3JhYJSxd9fqnUe3hLikR4uvwM5K4kFscDysmuJuac74i7ficZoT4xyyE6Bw7GdiMxm9VG9iHcaG9h19Xh5dk",
  "key18": "5kLXjVLcExm8CrJamu4BH1VSDTVgtHybW1o4NKJmR8xoXtjnzmoNPGhYuVvnX5Wn3eQrAT2DLxdgm37X5BHATAcc",
  "key19": "4AxxfCeJcG6SsW3bvX5gNrorMg2Y96urLFzKW7n61tUgmmUDrg43zfwyFyJY2z5WRwCBCyRM64Mq3Aj1sTgpwJyR",
  "key20": "4QYu8Hgk7GM2LUq24Qt15zMoDvcb5pUntteLNBJTa1EE9RzdZU2Mkx8spgRXVzPu1DgfD4EzQzSPiWnU8kbVR9DT",
  "key21": "4o9EUJUgCPypg36TLFryi6uGyDt42aeK3xcME9vUKaSGa4sZs4gRGRSw2UH4oiypuq4UY5uNFa2HiUTN2yTE3BmP",
  "key22": "5Ejx1NWaReZVhRAjEAn1rp4MwCspzdTv12Tzcn3ago6217VvBcCkx33YZFhWrv68xwTY3wGZqRBSkBFc3A6QyquQ",
  "key23": "2bSN2jRuNr5pEZpo74NpntYcKbSJgy8PvjyyoQTN6ogiKsmSqZEF89XZY8suZMU1qdpe77C5U8QZTrTgJXhfHhyg",
  "key24": "iEjiAGHRyuCpdad4bRad5T5sosujs7Fkef4M7uFj9ACHrLCBhSZSPJ2P6SMbbnZhsfzGztARKozrz41jGZuGm6b",
  "key25": "39ca3PU88CkrTeGzviEr5vbJyQxjqUfXZa4PFhsuMMo4Q8MFZxPgXVCZoKsaDp7Eombi3tx1WCnJS3Zyau7x3sSY",
  "key26": "Bet3W1hiSbQN1dyHWGfURRzseCKqhWuNSauzcQHQiojm5iXvjzrM84DoWTUMk1aUDz5tiY4hEqJHWoDccmxR1u1",
  "key27": "4M95zQAi8oE555HjBeAAZJeaZpc5v9ABQh6MsfCbpKkRvQDJ7c8RuMxu8daHnugjmqFBvvLaWNA5aR63f9kyshXs",
  "key28": "5h3XQhAg1mFHXSp95L8wcLAVgp2y2QA7qGczhUFntfhKLfpGnzCXeVDaJirQSYj4sjxNLEPCHjtgwkUxg7o9NBms",
  "key29": "4CDjaU9fUFArK8YWSYeSk9Eaw8j2XzQudLqswehm6bTvzfbeEhKwC5z8o1iA7badsNW4EgevhN3phEGc65pkNLi",
  "key30": "4mJUk24dEFb5CUbK2wxxwA8MnDHs64fpZktCNwZGWs8H4cGTgEb1Mkwo9BuFnYUGZXe19WE38qRuis72efUEhufF"
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
