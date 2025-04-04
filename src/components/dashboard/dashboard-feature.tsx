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
    "4qSNhonibhrpvrYTebktFMqHW5qnpsZa88iK1kcM6RXPQunDitBS4WhchWdajvejiK75xxzzmBked2T8qjXjQ5X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzDyA8c5XG1FANJjJKBepmnKyb9NbL3LzFMFzN8X2adZKFhnfiaRscU7JcP5gjfBXvodbghH5ohiwRXwkgeQHwS",
  "key1": "nzjGtRxq4ifwssSxwuH6EVQSCSgkJCKekGZsaHXpqsyWWmYYMNUNa3DyVxvxsZ1Jp9br9XANV1gpi1a3c3g354Z",
  "key2": "2AP8amZohWkXLUMmxEkYtoXN7d2gU3dnhLSWHZTai3Pumd1zuFQ37YqqU9fLRtvydRRNAGPeLEYQn3vZ86WkH1Ln",
  "key3": "4JPQAqaHh7kzrjuYdEqa8HjovUsuZuiGCDeFWPNuQQ8UDdBxS8HR2Jfx2G7xs4mFD7Dmdd9qqHtqJ7ggi7jLtbMN",
  "key4": "4WHqzbpwmJYU5NyUUx7tTaQySJiJtSoUXsKtstZMrWDZpa6eYBwStsxb2UWEHn1xRgTSNrCds6Qxvp6zprwGR1kR",
  "key5": "5dEacpSYQNLgSd96mHPdUk4vKCvycpcNeNLgWqEsNQj192jRWMwkqhuUHSyJWGFDXTCJ1KSyM6qb9bgnh2jPGZwm",
  "key6": "yDUQcB5qqWcjHurZNqT1qaKxUdW3VMPpXjcCRMeZ1WG4MfmJb9VZXMuLEgyERDQiWVRospUZJfTbxQMedE36QSK",
  "key7": "5xJGEzqEbGqA9rpGGNmuS9aHg9StWWDhR18h7VhMPe5ChSe24GdP7BoM2E7fPQ6TSLD5ww63tyVREQguZcxDGtxL",
  "key8": "4cfWoRL3YdA5AEWT6QUnKc3seyDkm6tHhmCPGLdhChuAgi3ZsBmW9SojFXD7uu7CbQRAStxtbUR7RSaP7Aq5cAsA",
  "key9": "3bFVaTpwRA2ZUJy7SbB2So8AUWs8JpzJF2GpLx547BK9hapL7YmRAxhuVpJ7NGkiPP4gZLx3BV9E2CPvu7sVEek6",
  "key10": "5N9uKxLRqZntChe82aeNpA53A1Mp6iU1rkJGr7Sr3GPJLsRHCfcxVwYBxvKYqpZHdHR6r8vFFsa3LEL3Dgut6og",
  "key11": "4J4aitwbYoyQcpnrB2PmuFZ8cxUbKdSmi2XLmh3dsWe9rnks1M6tE18eD3dFccnxoiCFRtW2w3yXc2e5ESYXMHCY",
  "key12": "2oH6QsnFv8Zr69mrPq4s5ZtbWq87M5iApzRca3zz4Nxsy5KehHbVieuRGAkd7XLX4iLkcb77NEySSksKMdcEEYkf",
  "key13": "4aeQDXgyQReu7Z8JBMHqe8dG5p36G34fNEqLhcuURKdAW8xdZup1JauP6vaZ5Sa5MEqQh9oB5yzjExxredKrX8UY",
  "key14": "5RqoqJNWU6MmyUeBDmqAkt3jmyNnXAfJXbNz7wq5dBKCnFAru5F5T61UHWVEUvzECAPr7bVDeyNYYpa5xG7qY6CS",
  "key15": "3NvNqNeJPLbwKCtTFB92Q8GiBcT9WM1odimyhTuSb6vidWzrozF5ZVYqUfrFBofLBQNvFbWbNDbBtrE87dnGsxmE",
  "key16": "3JbqePGbzqCHXkBCxu2x5ox4N4hWv8mbNWSmPrdEJtvdmFeznT8c2Tga9TdAvh4UMYXSuApe8rAERZLjmAHFdcmK",
  "key17": "5fySBdk9CddFGzQhe6RSPbqNxgBuEriUQVSkCp68x4s811TbfGxhCzkArH2aZtQGobZBzDQwDhJrEcW3DRX1xnz4",
  "key18": "4nj8F1LVdSjaBzcP7ZuSpTsECM4JauGmq5sPUbvBFwfTiusAKBaRv4Bad5PB52vYxeaqpJAka1LzfW9ZEFfeosQm",
  "key19": "4rPTH7EPZJjYvEWXa4CmF567Wva3B8XGmYHgdumgkYEJ8fcAJmy499jcNSrqerPqJ2Ste1sibFHT9dHMr1Y6Jbhw",
  "key20": "5oRiTdqMynUMfCtRnQGCpqBYoAyoNLvKcWK1KvYHttRVEURikJ3QjautRVtDdP8k1EWt6KFTiyuN3wESGaNL21Kc",
  "key21": "53CVQkHiUCxwbLf3vihvyBvhB8ZTYkvFUjKDrtD1FcMYuz9petADwyHJJQtTVPbNjRzp7aqbE9PTV6dhPozfkVjf",
  "key22": "3LmJ4KEKhHC9HrspoAz1CM79QR2Ahef3tpGPnLzqYgmyGMzPp3RubhwWNbg5HevA5FGRsUbKDME6BCYLE67fJcc9",
  "key23": "3zSUCNJyUB1mE83PiUqrXjNWncDUaVGRF4xtXU9wWCiVHhpNDHTZvK86871cG2piz5yh4LiGzfhyEJLBVXduaKha",
  "key24": "4JL8LDLhKZHx5QUQtDZSeBdgCQrDdwFk7PBfD3hiUzLymkLvoRJr7TAZuoxrmhqaFCFJxo3TCfqWgn8Lepk6YEXr",
  "key25": "5cBjAUa4Uk9gbPQCp4tiSpbpNhnEmXWxdsPE5tAafjsSYBNS2NTTULHUKjTW1gzBoEmXRZiTNrpxfCtxSTwFGNyc"
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
