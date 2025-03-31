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
    "4y2zqJxdF1A2vqxbdXDNL9rzwPTatiPR9EoYEq5RnjwPk415YREqFujRvqFqprYY69R3u5cMWfFNnG2EpYhW22iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTS5UAuY5HkfnCtzCryZGCrSKYw468YTVvfS9Hw8ZvuH6xoH4GBjYYiBbgEbzXBqFosYo1J38Sons8MrtPXK9PQ",
  "key1": "5bP2cV6DFjXuEonZYtHrbC4LoQEmCdcWNCRiNTDAbcKUDbnKD7oHPiSorgx5FrppdDDhuQgbdVWg9iCaXwKb9sNM",
  "key2": "1iwT9TJGWvLMFZdZgTFNYfN4UGFeUXkW9pghaxAeUEjouqMHUFpJryfjFztwbNSacGTbxReNyJHwrCPEFpbRVsp",
  "key3": "4EgdPchcqx9Rt3C7BpWiWC3u72rUdn6sAYKSnEXiHRdc5nbMhqMWYLzXBEVgcF9Th316nJF6grjdZyKE7Huvsvuq",
  "key4": "4P4NqUZQzsvWN6BVgysEc7muLsNfFhWPNKeuudu3wq1x9UJBMxvSmJy7yaJDp26xnRVchxCvEFxVYozZkM2jWbSw",
  "key5": "UjA1sgmtoCzh2EBcVZnMoS4uFVUvRZv8WPiqvsUa2Dwve2YfCu8qRVFT7DxJdamhW2FrH6BvhQS19kFSzgW2tPc",
  "key6": "4u9CL1yc9QDMeKaPcH1Y3K1fkcGUWG2pdxZF4aPYusvRZV58dSHgWZKL5Y9THQxStFyegg7AQicHb89nY6d9FWum",
  "key7": "2tSBLomqYXEYTvmB5kyFdr9b5Qbm1uRMU5QkdipwaPUP6zMZ6iHyoEwBT9CJN5CP5mDvyuo8yXzRX5wiJWgSeZHH",
  "key8": "691io915BHgh2BN6dPB7kA6D7LkphdGECKtMARxE3ofx5rHAdTStd6ogB1dxkVAFBh8PGNc4fbom1NhYYcQvv5R",
  "key9": "493surnt864hspinacRqcuveu7NHkM2H5zPQVDpX1dG2LWxurmekXkiAXusUfNjMNAHLEokaH7wjDCXv2wAq5gWS",
  "key10": "3Ptq5ACYVSTYqHezDD3ivbkh5Wam1qNxb4iM22TK1B889dMN9RFtV7y1hZm19vyQDDQVLcAgpXdCGgG77MYFKZku",
  "key11": "5p7ithAuWv9TkEosQ4yoVTgwo5eeidhKN9gLNFU1kXzgJyys77xsS43gYLigLrp3QjCjhJCgH4HMZhbTojZoNKr8",
  "key12": "3eGrUmjV3m5auw6EhU82hQsS4ic8YAvVHnzw5FEWG3YUYBNzxa3YSPbv7dXRzpGGiLFXX2NLQ7zUe1KCuRdoGAGg",
  "key13": "3bA5wtQp9sBCA6NGm81tLcycku4eALPw5CMnpoMg9vDkUfbxNYNaVE4mRK5PNdRG9uDyEhRFSwqsL6JTffBR2ud7",
  "key14": "2UEpuS5w2gedzfYJqBam4mm1nXWYgbU6zRELCKuKFm6UwnD6FAZAMo8p56nYJQHyCBXjA4XxrCZ2vGQcUdAdPFRz",
  "key15": "35EU6RuATS5vXbJe4NNueV6PX4WPBqrpADy4uEhASYNdnhkDDhs3GK1KrPgE6Jx67UUgZyAebAnZf2uHyBFCw6GY",
  "key16": "5jkoBfekKoBE2k6NNCq2ai9wgPHyzyQZZznQogWEqpeGqLumdn6vTkmJDDpg2MYn5YGmCaR2JmeM6ZMFBAQQHov8",
  "key17": "58Mf7yKyWsp432ni4MH8DvvUayJbXwTRpV3xGAwL71kU5xQKf7FY94QyLCLhLH4fy9SqG4DV8fHv8AqF1HXuP7uJ",
  "key18": "9JECN1V6rMJVStf5FZUaiau1UFNFEgWhHa9F4vmyVjMeUUpNhc7Z873No2YMkCDUByCyUppo2nKLQQzokhoVVMH",
  "key19": "3rrdmAMt1JZ4ECqjoyTA5YCTL9jRAHDb9TFJ29P5wsMSAPXcLNRrLmpfbecc1LM9PZi3qpPKyWPRtDurLNmAumTk",
  "key20": "66UKsFMJuAuQUuD8ousgxq62jQ4jn8TGofRhoc5T6hU46sdfqGszd21bsZNEAevJLVWXo9gZhrjJ1QqndKGeuBPH",
  "key21": "3ngW8qJZcDgwErrHQKLVta6GgdfqyVj4WrPHDkeHwtLKgHPcfpbbUpqEksA2w31riKg2qgmPyqXxwcSLE8dRTRHT",
  "key22": "5ecjiGg4vDK14Z6Z1hZmkTfwQVEkdBWCAn9u4zr3iEyjjYdL8P43c5ohdL6xFRcNdpyrhRxstJJG3UxYdpQcCN82",
  "key23": "V88JufLgxL9UVxiG6V1THjSw3dQ3UZXd6bmUsPpoVoNfXjyWSp5xHsWng1rgk9chZC1VVj171L26MejCpioTBVK",
  "key24": "5GmoNrUEBrMrSSHGvTXSxqaMarjxxiFUMc4f6N6tsqK3oy89kr5nZZqDs9wa3cRb8hEM4zpzwqDtqyKTuYTnqSZK",
  "key25": "UrZdyH27oynss13Jfj8z7mttch9yQ35RUXj9MGHtm7a8oUfvLdkDZ9FhJCCzpi76MGDgK2KRRM8aPXPouGSsyV3",
  "key26": "3jfsmByABYeqPxZez3oRn7DX7ZoebY4oFZiLwZjguMhLjNF4cTCQu7Zu5JPGYJWJNzjvVmEPp7CUS6jMCpbtuHAN",
  "key27": "5Gbxn8a8WNCEYyBnWGxoYS3i2MxQspeUe4EiVvg7vkB29JpFwLAZ1YS4nLeqSG6Rcyrec6GHaSDAUDNpR6fcoGku",
  "key28": "43ED6ugT2mXdoesQXT5TiWYeM91GPSft37paZkUbXsc9yy3XGb6FdbfhCLnHvFB9QwYumGk3z1LvseYEgWuZF3Ku",
  "key29": "49o4GWWp9pjf1jnBjeV7ktGorY8hdThCsE7yA5BnDbDEutnGNjUcbZP1Wuw6tzmF3DK75n7ncAQq8UjZJDUZ1hFo"
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
