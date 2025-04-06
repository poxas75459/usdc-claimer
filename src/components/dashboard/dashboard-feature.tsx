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
    "3JMFT5fv9GD85wxN4J9KW7H8cC1F6PsG4He3ZD8DN53wAeSttQJxzxd2Z3PPTLoEmnEee29KjPuU9wzBBZGDbiqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boTEpUKHwJsSc5rwdt14qvvXMtmUGGFMHtGh1UXKm7zY3Ti65t1PoXSLtPVBLumWcVPQEo28q3ZudRTf4hAc1mT",
  "key1": "5qZztWcdgHTnEQoKbsW6kTkjfbmAiYL9RCwd3q54YsgAW8qUhhcYCaKaUfTHwx9yyXNoRhTv8LKjE8tDjqiKxTqC",
  "key2": "45vP5dT651jmdKiGXo8q5k26dKzmhyRRhaxkXEF7Y6K3iSmMmg49hTqvksk8DM28AAeVwe8hS9ZFYUuMEP2aHik1",
  "key3": "3U2YFKfzjSBsVpKBLNZxvzcKqKCdeNCiVSNueyrGYi7nPyMyuKwUqSL7q2oGWogEQMzvnVkegjNNS5VbFpACMkdB",
  "key4": "2WB2FnHMb92UDX8CvHiGKwqfCpgAETapu6DmMrE6BmCEPZcFFaFPVpZCQrZEPifCLLxNY3fgTYb72PgnobLVqCpu",
  "key5": "2hFZoTdKNSe76b38fCJYawvYvee1KU7BV511BBaTgTxsdKcDL1oWsd22Yjp6XFvobj6vCzbJGGHm4GVdikDdwraq",
  "key6": "2qG7KypV88sdvRF5umj7CRsjnhy4MK2VS5YJB6ZqkfJRStLjPmSzmuEDDaupc8xQyf9rWieq3BaCMjSvBPNYThQR",
  "key7": "3WJmZkLfo68oU86nLHJhaXNHzEqsPVvBZ32xBXkfuzPpMiRiv785qNECo7ctrA3w1bVwsKBdGuMvv4Mxja98nJXQ",
  "key8": "3ydC26bXPMLJpiweqyoSDc74JipUfGyGdprkzpquyXyA267pNPbgricPJ9V9wdCiVc9EaAJQah9H8mwq3MsKxk5g",
  "key9": "5TJ8qEBsXQRQU1EakyJetrqQhj7ABraTyx79yZqDsHjZ9a6qr2z5pJVS5SFFvEwXaaZd2GkWAu6q3CcRiKwKyHrE",
  "key10": "5i3L7F2DLewXGPqKzsT2B5jdfrbLgqW9N9MnyCwPrHGfKuJfUhZTyzHzSTCHKUQPV69rEfMWZGy55hGCCATV29Jj",
  "key11": "627BuTgoUkNco2LApboLk1Dg4mFQzkJ47S82m2z4JEL4MHCAQd2t4W2st9ycHNWyeH3E5DNpMgqvRyG6Lfg34BYV",
  "key12": "58CnfNZcbd9P9xTmjs9zgfruDXmbKgHqxHbNQ7qPuBFBou5mknGF2q6YVMpHkBUB2aygqK6Fh3Vxdv8Y3yZA1igL",
  "key13": "4KsDTAT8q2bYMjpUB7Wy7VaU2FQNhiCcH3XcUX6tKgK6PaBfTbeiGTdnNdhWu3okEcp4dWEwgMgHDCATVRrnCC54",
  "key14": "4izpReDf1oaqHKhoRtXBi9o3j5wSSqmXS7zYDm3peEpvLPRcBnEcUhMmb1BNJrZkzW8XDQYkh1mRiM462M91qURt",
  "key15": "2a3YRdJg6J7P3usz19pR5QrJVKJRqj8CR358QWLDTVuz5BnouAaX2T6DU8QyyxtXs2qf3DKXUVcfBkssNP3z1Cvd",
  "key16": "2cB1ez63VSD9gD6PDWynHsytzFvJtRvaHpt8h2qts6uGXWddokNtVsU6vf5LJ5mY5hcZABsK8rh5yTFfiRyZr6Gj",
  "key17": "4nSPokkYpjcNj92Agx4918YqBeKyaNxJzqrG1ZhjMyrFJuRX2uwuam5i6GfxRwS5KeGxRb5cM1QjjK4knRdVYay2",
  "key18": "3298JZUrXwvHkLHU33aDcPhrxMsPTUyjtqZjupet161e1i2LemawkxxW7qbRP1cibRdgiUPnNvEu5y1b8WGu2chL",
  "key19": "2tSkg6yCPdtXf3y7cSKNjMoFtxb1f9hcg1ARPQKS6nzbseC4DiLF2NxExQrtWszAbdT9hfSTm8JeuiHrKLpr3yQ7",
  "key20": "24iuPGvA7Z9CywMwuCKntE2nV3TYpVGSgaDZbzMqB4UAcD8dvBkBqq9TAvHDTw7SwESMjfK1RbMxtxxQoWaQ7duF",
  "key21": "4A7bFREQgoqyVxjn6nEGmqMt2Jj1uncUeVeueg5akxca7PTbpFXaxGUQMycNyUd7LdE9CUkwA1xH5VqRK7fvXsm",
  "key22": "2UEq8EQJAkDYpgW4kqacpWV826mzoC7cnGvK7JJuBsZ9ahTFAKaJxS9k6t7Z5qxTPgynojbKBepxFuDQjkiy8afa",
  "key23": "4PmYkUg6sV12VNuudFD1vVEzX9XFyY1jgGuA4stEQguJg4Q5sxyvnxdYQWVoC12q2MrwRPQFUtSYXuv3RvissUYP",
  "key24": "5D1evjbJaBTCDVwtL2FLNceXxsfBetymCzVNTge2bTrCfbarZcoqt526bZEENewBAcCkbuNLv7Dv8tcxuLsE9euS",
  "key25": "5zW939fojtj2JYBUj9UmgQh63mBUE9HYebJR7yThM3mLAqUdEDbEqvUWwt5zSnxRJ8wnE7knZ35CNQqXx27JPfxa",
  "key26": "2Apq5XDXZuq3DjxuYarCrFmZG7xVp2tgGusLpnFEj1HZ3NaD2JD3PP4seXre3JZh5aWK1EvAVDKu9w7WHB672WLJ"
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
