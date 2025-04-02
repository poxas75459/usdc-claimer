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
    "7VYAHFi9cnYHF8BkapXjNynb7fL8MMmJ5Q7wN6MYrHHn3wqNrKy1Zm4NspSqeK11fNykeoQGcF9mjHck3YiBAmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhLwQDrdd7ibR5CWJsueDsJcDWsxiiaN6RF18HQDzdynektXuQE9cXTvZ7jCyQDUxaY9rMtpZLUtCFXZPaGdMHt",
  "key1": "4t97v3CXwVJoE8ydoKAmbHzJDngAVTEs1N1jC1n8TUFHu9ZWoYWANeXBjYNCKgSZpbE6WtERyY7ndJY5idv4cSd7",
  "key2": "KCi8aPPsdNLbXfxGsTjrYTUMCox51gP9pEktikcPYNDTBtNbEwqgHVeZTPGPkLLHYksXmGZpu582njTDHFvRqYK",
  "key3": "4ZKofDNiJeFetArQemHfGyMktn2BiDpnoW7o3rgcBvnLH2sWuvHt1xSLsACN3Q8ExhYTrfLk2QvzPBpqVZZ53LU2",
  "key4": "2t2RBVyZegHLJPBzpmQYLJgNEtAXtN8WU3Vk4ZtwBsLPSDRVHbY4wTKNqujdxJgs2iSbnqMWh6VoZfGXoWmkvt79",
  "key5": "5KCYWBFDeJ8oQ3UVAzmrkxBW7dMd24ZLSxuetPGScHPeNV5RBzbCb1C4BJy7SDKYTZwuBzX54f1LnVpgoG8JxTU5",
  "key6": "4i111rSY655CtLJsTXTAiMUaMWKUietF3oa5Ad831WSNyooAVW6bWra9dMbRkjjnxGDcRSAHKYH11kiEuboDMEkG",
  "key7": "2MaYN7dpJS9BwXRPzFB8ABJgkmYCWqKgsNtcJPWE2n6w2Z4LDunUCpvcsHFY7927qx3Z2RQiro3YDUoeGQMyPo39",
  "key8": "2YnsEYMmYWzchTZBzHGPWV5nUx7TP8VMUzX7oGY3a75cs17QzaCV8NNqgKheT5LytTqB8D75wCy6sfTBmqsBb44Z",
  "key9": "66ZrDoAavyHh6figLJJbi54j6T7Cb3Pme3nxGn6pvQoaDinuf6GhSaNkxdycizYVQQbZXxPHy5BNsC5Bd9WCDbB6",
  "key10": "2ZyQt5EMbBpgu5KZpVXJn9N7kPSv4trCd1PxLbsNBrL6ytnTZpnvJs2kGUWrfZbU6xoG2YGJSGwZJjuw3mwnMWuh",
  "key11": "4Xnf5cyGM8WYgjsVjuwEUsupgA8PiGHrmvcMZRHy14bLsibtbWJukv39jVNey1J5NFhBL4YuSDHT3jWUT7ALbp9x",
  "key12": "31ckKxUuVjmNYYeDKDwW3BsvsKt5pPRnnumDHZWNNqKpHUJXqK3Y9tK1V4yKQ78ZU1vM6Lpoehxu52jQ2xLafu3w",
  "key13": "XW2vyEkoQJNzib3qRCf6r7yShwv4TfFgMiCZaMdmYVaBagNZBHqLQ6hAf5sgyB6q1VzhCUNMjccr9mdS7Ayz1wW",
  "key14": "2mNxPanHthGsKeBnrfnzkfgwEwiswqbAJGCHmvNJ6KGdN9Rphzr7DbnnPJjq25euf95dRACwfUefrpkd53svYLtk",
  "key15": "27Az9h7DrteTpofm9eAJ2k5nAcCtKn1KJA7gPmCVXiUyEsHbfN3zVhZrNz8ckDv4r87KPyvwdprbBvqvamkXZLVZ",
  "key16": "5F4jmGSnRgTGQ6nkARbcvCvGzTw3ZLhuubbKzkkaXndrAsV8YKALu4mTMbBJqygPvGHRwA9Xysdgx9vS3Gqvupk",
  "key17": "61BeeHBiXr6gfjZUAVMfvQS8yyfCWRYaPorssexHsWsSBsBfT7EHhCLFUxfQm9yT5DNdV9FX6N5efacRpxuPuADc",
  "key18": "62BTm2ngwZSxNH7v1BDndrSF5QkR9vuYpV35vmwv9gzfXnBcxxVTHijLHMSKJjthqyi5cwjfGVvzsL5uXKTbyh5s",
  "key19": "53LmU9Q1VvKgVnFDWggFzqaPZ8kjgszFLxSzJdRw4kmLii5YgUEFRRDJUDNxnSrTvukmfFCs6RgFzFhPGyGr2S9V",
  "key20": "mwW6S5SPwovqTYLWC8cfJuHXqA6pAee6LD3s3u5Pfh4vPoL3N1yZ45cHZArGJN8WWA4fMwHk7Ux9hAEQ8dvoVVw",
  "key21": "2zKnx8vLj9GhnkSXcDe1hXR4by6LMD2ugqsmzxKnXCdVN6X2ertpUVFVhvTUPYcUim5JZ3dTbNVhsJt4bjHdL4Bu",
  "key22": "4S1YA1Leq6AVL4GAgkyzarh2WE9UcfGf5nCCfRe1TBMkVwYUExx3Bb44qo5ncFVVMZfUBvty7LsfiHPMgdUPcbbw",
  "key23": "5Rh9K2L3C6T2Kt3HQ99patnooyHEV2G3tJzh19ka7mdfF1bb48ZUcQhp5tT13UWHMJEBGrD2oChxMdcAVuPNsbca",
  "key24": "SJtFj3Gd4NQ8CdwrVSSC6HJ3HvDUmAer6GkFHvKK4dJfCS8x6cUJMGhy7VjkNDofJ8bqY5nCgNXG5pLSUETLc1d",
  "key25": "5iGB2wHTvTBMDrYMhRQG58Cfdjv1KuX1fQxNw2ueSrnRuQ3gzqd4V4sB8WxMbkQpANdtsEiJ7UBKiVENwHKcjF8R",
  "key26": "2ky1Wt8ZA9CbonbGs3ZWACP5EvTygerM8QUBx9ygvnUeYe2nKH75LQLtuzhAWXLpvuJPPzY2WZFEpRDSEhQeDGLY",
  "key27": "2c5mtPxCuQZcfSqHmc3mtTbz7Ls8xvjbHZMCgVa2nG97D4cvs14cKLJEYBgCemxaUAGe55fqa7xkZaH2q4ZPnbjm",
  "key28": "5tLJPt89A5zfLdf6nJK5KXR5TBQDQdU8g4x6iqT8Dm5FWbSRssSr1ZnLNncdS9TSitu3XFZGHBYoZc9p92MeWZRd",
  "key29": "4z5VnVPvJRSeV2qit6aJWkNv6rKw3sgWJest9UPFuEXh8mEAGaahnsLQHeJFH9VkVpc5ZJAUZy5vAYqHnPeqG7v4"
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
