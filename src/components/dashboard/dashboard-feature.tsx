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
    "5w7YBC8ALnELEW1aojmA5gPyo2bEvA4TygybzXS5DNKFBcDYH7zyibkUNYq8Ra2R56oS9RN2TDBSbaoyomYezG8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dof3zhofYMDW6f7gdJsYeicozarSzLt8QceB7F2R7LEpyhXLhxok1ZtQ1cJdxfq1KLhg1aAFyM9aYQXKsMSxXEX",
  "key1": "44iTrqyt9ug6MxnDxwUkPeqrCMErCf9q4bphyKRGBAa6AGm21T85DtARSLWEttEmov9xJuPTzwmS2PwZF3ttpAgu",
  "key2": "3vbxoRiHZwofgUF4uDXVkVF7WtkAvhECWDmmAt3w7LyH2qcdkCw8JrSJTrNrypZZPM9CMeJYwkyQA3VzfJfGxVEr",
  "key3": "2zWqVna2jKtfNeSztJJzkanwRtuc2LHhc7a2F6b37WLeLp1UzghdsCQAhbSDoYzeMZFzxt95skfe1hUxkPm4PVq2",
  "key4": "3u8LS2Rw3tpfJtWsaPFy5kGK8gFc2bhRP27fHqzEkW1bTYYVSHFiWZpi3zbBZr3BQSZ5veNWmxcBU5n2FSHzaFkz",
  "key5": "49RZxfT9DJsD4wx2TK8jBhq2oW1We88jbNGi2CLrgGWFqaZqAcAbo9nHVRf59wTVaZTtbQ4iGxVBNEnAkVnGsUfy",
  "key6": "5Nw8TjoDPTNuxFLhSSaakAGKAignyYCiBfEnhc67MbEugPQL4gVaDE9d1rpvJe3YvVkFCQY5U6mqWQyEXwQjSHCk",
  "key7": "2mApkTU2W8SpGKku2zoAFyv4FWTAuzAKekjidmQRsAL5DsqW7Uc3s9oimZWfARM9d1VZw5jzE7Dk7HdHk1ZRQcMC",
  "key8": "49hn8fmp6CUTVBpYpEnqzKGJGi7KzyjqXzCEhTzFQKvAUYm2ApELqwCMbLpmGdvJyPuFgY9u6W1zTXiKeCFvJuLd",
  "key9": "2BoEUAaz8VDuQ1N19KJxfUTfeb8o1fPDGNwdJwG9kpSkftqYoWGz6ZdtjgwdL1BBncNUFBio4X7LFhTCQjTca2Lk",
  "key10": "5JCUUxfFnX7ihFp6MxRQv5cx2yNM9tmLpR4P7ntK18UPHuhBcJRs9c1Q4cbzKJg5vgexM5nNt9SJg2YrPvvFqEjd",
  "key11": "5uoF99X7uLGtwhJ9ZamTggVLcDwrGaH2QoEys9or4Res9PyeRW8Fdp6TW9RVhw1YKrBKgNGN24q7E2G2FD4RDt4V",
  "key12": "5YE5eXpZo5MkBBGtMxR9wVzsMgv6uFCqWAh9da92XVYr979dn7dZDwqurU8cViEmCSh9hArKF77p7MLftmSJLjNq",
  "key13": "2jEpYpD2DpxpL2j8kxkhfxHBTVCkAfXEqKYUUDiT769vnB7J46jp4z8rYPmcCmGKskXv1zGjanB3sodBFA4QzbUM",
  "key14": "4nR8WUfBAa6g3R3GEEzGWmUjBXcFCi29nPzCghCUjtAvZ9dFk18Aq6SNdxhNWKERTnNuW2otNFT96z6ofKM9MUsa",
  "key15": "2TinbjnHKBJX62vXkmFTYfirKM6qBWpy4TvxPpjyWnYLSCfbmCFbCbVhaog2bmH6opJ4vv8nCeweRXJ4GKYrrYtP",
  "key16": "62jrexSZiPCZQEBnhTTUBjx3nkJG57jSvdVhQPEV7T7q52DG8t1g31ZojZyr7HYQivy2Bw7H9qqUn5ajRJ1TWPtb",
  "key17": "5etEQADyTc5B7QZGUVGp3kKu7N4PvvL5uT734thc43V2kqtghMd6ddtHG4yedp54DgxfqBqHQyDE7ZqxoiUqvySs",
  "key18": "36mfJXzD1iT8Au4uHBRTKhhG8SxdTUHoHHc3CEREbouuvrEdM5kKgBts2p4Qx7bwpHNcs5sjQLakJFCDbGg9LZ4",
  "key19": "5ZnGuQqSG8P79yY4BeeXWhsqBiSLpugdUaNFwLiW5AoRj6VUNhfpC5UAVpoAud3JERRrtCc9nk7BsCQuGkfv7LVr",
  "key20": "2cUuVXHd6XHcYXAec5o2QgmG9d9Vqyn2Zkaf3WJvheYJpwSQbrq4PWpLc741m1MWHgE47t3KCoo1kj1RJqUiQGSn",
  "key21": "2DmWqQ9wR6pRT9gMSY2NPA4PgSDBP4FUYoxxWTyZMuquQnBbkonEWHSr73xW5WRGazR7NkGSZJgh2JLNLcH5sbLS",
  "key22": "27cVBgUN8A4Ls7Azgeey1RD93PpqVi7CHpYxk5ncQsjkFewYz9uVgjFCvA1EYmTMR2x6xVae7w7kKvLLLeYmXuyA",
  "key23": "52ZEocNxoJiCfJ3FhtHGq4xZi6LMiBQ8ypxBYS6KPLVwsNXBTxBqCUgdX7AceYwdynXxsZP8YRbAsMCnRbgqEEZi",
  "key24": "3BbwL2t9Ve5RdVFdpY7GubHSWv9h7hzwD187fx8NXTnNXaXez5g5W65gpyTGmi2ZhwTtSMDRJcdHh2v5uhndvgjk"
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
