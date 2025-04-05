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
    "4HrnwccbjHuKHHw1yNE7AvK56TWyxze2DCig6Zcv75xQabBdaNEFfEGfEx9GLj9A8m63RivaGMxnJvoZ4b7eV9PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQ73ETaUowYBsaCJ7zZ39irynPWb1k2tC31jWEKz2RRinw4cch8sCtN7oECNEjfZER7RR7auoVVf3xu9bddgjdP",
  "key1": "4XD2FAEFcWZy9ygLDQ9F1X4NB3kxsTSEGoGH6bSSc3v5DAnqNonUZdwj61j3sDfrpPXbQhephJ2AwNtCjA8zakQi",
  "key2": "43jbfuaZcvfxsuvpFKhrhq67qTQpvenjBoXvbyLyEr2UnVCpVSzYY9KGkFaAV8Q56J6hcLx4CTdzmzRYmUQyJFa7",
  "key3": "3XM62615sQTkzy4ZEJqSsUDu5J68D9yudK6xrZXGYk9bfGPzCihhzttFLgHBWTfjFdRbT8KqwoLz8exD8DfxoEt",
  "key4": "3cGw5RCJkoBQVf3vJi6NSBp99L2WZ8zQ6yZTLyKqAeQFG3TfgZertKdQgFfFMHHq28pBBCMwFT2ttYZwsjs8L3RP",
  "key5": "3DBrekieSGfMrViEQyviM9e8FYobrGfx44w49QQdDtn3KR8g3uoPEr9WyxhydnRVJsc2Ts5K63XgLjgan2ywQcr7",
  "key6": "46AcTLuWTQG6WU7qcRmNbWkJNdmnv7kQe6C4BkUmbEhUfXqmgp3RuMS4xaLmEH4aCnrmPJmsFgNZXeVyWcUgsgF9",
  "key7": "2Wop8YW6GMQnmTJLZD54QsgqNpkCfHMgAGPL2Sq1SeR8PMqhJc1SxgTnZTN5hRt3JqSao4DPvK837UyzwtjUXLgN",
  "key8": "5ua28eUkYdhU6wGZHwLQTZJ24JkDuczNJfsoa1xF6s5mQZMeDiAjc8LVCD4RS3uaxRLyt3tvDpTEP5puRUsZdnPF",
  "key9": "5ZebKXtq8qqjfgSbdFSieTVkWSm8Zx756estcq8rmLb9tKFBYANscuxkBHQUXuDaY4AENkQ4Lhx3JKHH7xXmeAV4",
  "key10": "3ohbmVHMGWnTsuiq6yo9eCbAxPNnDDUgSs2eF95jbhfLWoPrPKpTs4Aa1cqRpB9cgZaYdVYQR9dmTuUZVFJ7MCLV",
  "key11": "4DkS1HxUFQU3EdwWTMQvxJdL1ovBVjPEqg3WovwbnC8Wv19gkb5on88gLxmoudeJbdbxXSZRu4cyVRs76gJpvNAy",
  "key12": "5Z632xz9vkEobckE6xVws8FA6gZbUYHCNCgSdLXm9xQ1Vq4zWcHie5y9Fx1JdLSysiVLECmve2VLuYZZsskrDNps",
  "key13": "53WkuHwdhWBNjGZzWk7m33zh3T6qvcQhqpSXE6LH1uTKoM6BwdxQyWjMxjtshbX5k4NFVWAuDgdStn65Fvqcxh58",
  "key14": "2vQ2hvZdkKja2F7isA5TremGZeyAXs7t2RnYo15AEf4qGjoMq3zyKMJUSCCDQ4AnLssEoziXeNuE1W12ASMjZSGx",
  "key15": "3mg1orp3drm6oyS2JFTpqSA144SBMFW5EYDEGo2rJBzYwNsVTLjDVWkBaHFtVG8Zio3iZVPVwr6fykXGWN355SyC",
  "key16": "5Rxd8PW3NonXBnR2r7Lmwzy61rXHPCVQGRGEDwDMHGCHq9awLAHokvPFvmWXwC7QjBgNq5NTEdHHLv2pyxd7yi1C",
  "key17": "2xuewfDQWivtxyFBeabMvVDkK69AkoyqLQ8drsrY2A24GwF2F42ktQsNLFTiSwxpSp8F7NoTg1canayMAoxgYke",
  "key18": "KReaEk5awUDZDzEMzNCwa4Tv542MaguGzJCSEA4F5NRG2ct4skRsobzJETpACfrj6fCS11GoYSFbU5UY6DyBwGP",
  "key19": "42GRnSFTWm75Z6v8w2fMK4mp5Nu5nkNGP2UiD1GDNCdSvdqZbsJBCv63mX2njSvSNrXJnTViKHr5et4jpSieXWfW",
  "key20": "5gQrgjyhgyDjoDLEPQMEZjmHCQx5CA94ZBqVD13amzd41DpvF2Yu3toNzaktbRMJ79daBqhkfysheoPqJDue7Q3H",
  "key21": "5G5DW2h8frKqtCfgynh5bdTaJJav66cFVhzugyhmsdJJtE7nMUs8pU13zRKw8w2WodxPj7HtPmEDPdM2ryntp8p9",
  "key22": "57B3ujNqpJuudMpjcWTy3hADGFwb47VzM6EAw1bfCUatA35hAMnMqis7tD3cbtmVJLV7MKaCMTPoffeVdeWweXMC",
  "key23": "5JqHdcPMJpBuioyM1J2Jmc2R8Xx6SATqJHKip6wFJZpYN8HbKJC6BcjGzRBPCV3mQEk3hVMLk313Dw7P76LZJERj",
  "key24": "2SVcWnLpuPyLUDPWnHz72BSLLesMRj76ZxATPcNiocLxFGq3TU9pHPEX7G14t1TkNJ9V3daUsY8SewvtfJvKKiC4"
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
