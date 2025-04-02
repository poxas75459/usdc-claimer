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
    "ebaYEUHo7AWqj8mQ4GANEUVkxvG4nkrEoRMav2vbiUM9rsmPynCQCCVHw7L9oi22DWxhJmAbtoVWFJjtr5Xwgmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KdGcKirJe3YTQw8uo7v5zT4Fn3nY57rhporrLJ11Lsp4iVdPE9nWcH7nv4q1sRK5bKyrxnpKhRm9Lc1feLo338",
  "key1": "2gxaFmGTuBc11ryyYMCMi8VHJQ9arggD2auoSsnMkVTNq5u42UFZLimkhqRD2qbtBFCSkwkexAWVbRU2dGQgYrjp",
  "key2": "46UN2FH8Nyy7ojXAm1Z7CeQvD31jAMhDgjcMTnWBSbooyS4xaxtW81xTnL8f9DyZb9KnrFazCLh1bYyacoHmo6nw",
  "key3": "UsRYNvrQKbdybWj31KZuLX9uQKLtzFLyY6ZswN9MVWBkbPRJU11Yc8NnScEJHiV3aYnW6Kpv7Up3yp7GnN7E8Mo",
  "key4": "37ibSK81HYsQtfnYPSWKPzCQ7iNTyhWg3brrQbcT87zV84QPGmAUK6y3MHj7Ba3RJ3WdDrgBSvvogeeV5ZxKqX3d",
  "key5": "3jj1qBFi15QUaSmSqJmnhoPsi6kPsMvhmBLeiSEpZNND76oBQUL8e7vtbUK4CEEmwKMG2TDBCPdNYn4h2Fwd8g31",
  "key6": "2Ri7PDeVcBegWSynhXfGXrX3biouPnvT9VsGN4tqbp8GPpwWrcof6eKSmaXPnViThsSETtoy6gxjAyWpJwC28Zqg",
  "key7": "5DA5AcJNUKvVByfWYoCDpWz1QBF6MDRuCYb7FGSkdoismGqEQ9cc6zmxyL3o2ipZWSuzKW4KfcfSRSYQSBcDs4RE",
  "key8": "2D9XyUGzzf1cJ6tjdn5XaTitGUxXPBG9r4DWLzdPyWgW9HUSxmV3yD658vk9T7D8M2QK23d72zgJ5BaBTBz4GFNL",
  "key9": "xwJ6iSEUAjktT67ZxxvjZD4byb9L5EMp7q2vJJzNhpNDUcqvE3SuRo4kPt5H6PGEFkpruwV3Y6kxRdGWC6AGhXw",
  "key10": "2fbkihR3V5vx81n3VBQ7HfP3BrFd16rDWfqAgR14FZmDYeqJ8rZVbxfGAPsCypoyvvrb7qbk9qcB9rR8NZzBgdA9",
  "key11": "276UTY1SP8DUaNhDa7hHBet5n8ospH5PfGnMVmQstuz9R9ePtW4FysMPx6ZyMMZA5nwEJ8dxYMVPEyTuVLgzFbGm",
  "key12": "59xTcam67o2sXqahcGaCq8fwtXFX6vQtxfxJAQ9JqL95gVxekKhqsfVWziBYHUo7HMT9TsAmNYLhi3zRvrLak36h",
  "key13": "5TFWKqfqyns2qEaVZMnWcEtTN9zgfgppgmjPXzV6otQJKpPT5zPrqqz5McNdbUaG1iwEtJzrxZ3rhQQ1bwKADsBt",
  "key14": "4U1QBP7dorbo1NJfcP31wDaC5KkQLsvBrcPwniMUVnyoKYi9qbUqeWTDH4pmrmP49E3U1FG9oYqZzLS3qVpcHomj",
  "key15": "3xoWgEN6McCFrN8VUX7gG8ErjJmpjX4UGvykFYsjRxcXWQHftYbciGQf4uM3q4JxQ85w9Yz26wa1vwCEX8cqeA26",
  "key16": "4bH9gbaVRzv7yHqipe2fWgxqkEcoZQax8JAmxw4XHVEknrXHA9JHFYHj1buNucxRYDrYhDj9iYREAXaFZzTXTmo8",
  "key17": "2pbSuHhf5QPL5Guh5Nvosh1XhnpSL21dYxuCugMZMJXcgxS4GbztL3wF1aDdb7UgQL4zhLtbBTKViVVwbSRqtoUE",
  "key18": "3v73RZHbcMkQxmESWVLLKE92yZugXSF2w2rHiJXMjUuq1Ny6S4rFTJWNTYB3qRDLNav7tr8A3UFiMsATUDpVqTgx",
  "key19": "3j8dwLpZsLwTzJp4TAdago2H31bveFppYEvyEum9CakBrbL22v4k87sNRACUb7GXriox1EPJwr5jGZeUFFKNaeWD",
  "key20": "srhakBooqDqermexCWt9skNWziN43rMuGf5A91Bx2WYf83QdMHDRZYRoSqCVRvBVNFRZTNdH8BZ234teJkGGGFj",
  "key21": "2CZFzgwkwfMBBKYmrpTxLkAwQtpX1D5UfKLCK2xHMuSGp8MxwZTYFkx214hm6JZQZepb8Jh6Gj5gxEUFwzYkVys3",
  "key22": "3qUtrHxy5bw8X2idY5KauGw2dqRYH93KqDfKWZcE8S2DLs2QEu2tdCMMTKtMcsg7uaqGKWjAPzuzeZUd6sodwHXV",
  "key23": "4f26tyYhWGBiZh5tkqq8hVSzWr7FTjhpt29ce5izATjcSh8mPAwHpsVyvuW2cWu1hMzFMudoWhcYSLgr9Jht4Fud",
  "key24": "3R2EE6yd3uAgVfazcm28ZFiPNqHj1nv3HJvrFxPNPbgPGHZu5coajqqNrwwKqfPSD7JLCgGahrzDeX5yxvSAQscC",
  "key25": "ijmWMpe9LorzXE3FrUcEBFfrEXPdUP3j7uXGDubPD33XgykrbSxYmp5cPMiTNKcxPa6737cvrgJVw4pz9g86kNw",
  "key26": "3xQNa2Yvr2Wjhde3wiANJbwsPz65bKDabqtXwHktbRksnY4P9TvYB6MsUHzsgxP9z7QFuTdmuyfqAhQWswcx4ane"
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
