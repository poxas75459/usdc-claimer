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
    "jRBxQs8kUa5tktKyNXPRtmsBRS5kn9Ued4v9T63bzkeUsJviwEryppjGWTakby46EsbmGuvM8JhzYUEBnJdxhJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMUm8aVYdRzfF6iQmHK1cyTmjFVcXCQhQXrawqRZHfggerJpk2PU8g2b21DCXt9LGUaVD5QJKXRtRA1cMu45LCT",
  "key1": "3fou61K12kBxSEyJrru8Y1Kqexd8Fsa96wPE5RVChwZ9fNLgR5YYee8XicH7N9ZtTMsqcQy2pruFT6bz1HTaaSao",
  "key2": "2j5Ppp3iWYvfurkG4KUCLBq6eqTQpdJZy4Lm3cQBkjR6eQR1B9MMTzRMRrmaq8YJ5qDqBvpLiWA6KgD9GWpwZLYn",
  "key3": "3WorwdhPjzAon6PmutmW7MhzMofoFV52sUVKozyebtvW93wJ9BuFw84i5QWymmdSCaxpMHk8stDKPXWRcqXJq6Yd",
  "key4": "3Y9q8aicHE3QjdY2srzuKXzecA4svN1m8wjWpzZm1Jz3Fp2wz8MR7CGy7EAVyd4SsczoNu35gZWhpVh4X6Ybkg7N",
  "key5": "3amd8W3K1tAPRf9Hx2hZdTqW1Rxhg4RprECtLofGjYkEFyJqrWEtc8c2oxU4QH71TQ32qFh1WzAkoGexu2g9TYbM",
  "key6": "4ooHdNiiBRpEzgKzaVqZ4i971Q2q4YQ9xZPz19F3MFy3MB6gfWVFpXL74XdTRmARL2fDrumvZHSvLERaybj3sWUo",
  "key7": "4vovymHoZL6cvwyRhfQWN9vMDCwQfnQDACffhRoauDSqaZeEEcr5SRRfWAnqKSjx5nUa1J277V8NrcZaMLGFxui8",
  "key8": "3DHEC5NYnj3PVsCjfyT9NDVZd6ZWLWVRztPqkhdXcgvg48Snt3Jh8bG6hfa4YYUkW4a5kedyepTFRMTztCiQhBp9",
  "key9": "9B5yFrbR52s1XskJEifRnDkYY3HKu2TZcMzC5BNkyEuDGGPawtfGJD3qFEdCM3toojaPJ3ZvTAjk5ju6cBgGJtn",
  "key10": "4ZeA6Q2ZLiNP7yHf4eNtyEzN3yKnbPdgB6zbeNYNSU5ELusNg5ZGm1xYMAM8585sJvW3baHNHmMuYSZFAsPRLLuW",
  "key11": "3jkGVhFaLZYdZcXwW2c5EjsCr53P6i5Vv39iVzuwv8Wa3r2e4P2uio7P2PuTcD2RmtiJDTvJtE7Hkz6h24kr2ad3",
  "key12": "3TJ2EFCXFAeieftmSW72c45bZpwUFfiFwyoxG3k6pryLU9uLdTWcpayy13pm2K3WeC1MTUdZScMyTycfDQEHTE7a",
  "key13": "3c5BGmzAwUx6fYeAMXfUUie6xCnoakg6nHe9J3pVi7J5dQSUEqX4VzeKg5occmEDpb3zMSHpCYKU2F5UK9UKPQDy",
  "key14": "5zHnrHq8xk1FKZognZEK6mjxTximuwgc2Rc9Qb8ZciiGMYgqc49Y869KC3NY3TK1MRMV259LQcehQDaWk7zdaMAc",
  "key15": "2ohrGgz2HbQbcvRpE7N7y8YfV3rvv5hVjYoR79JAC4WZD9XtyHtNg1Wx4ZVyA1HDbPPPfKPoJ4Us9pGbF39Fc9N",
  "key16": "52w91u6FmMKPGr3iAh3ZYXFB6ugfjVn6Dk4QLvEH3EUBAMMooUr7k4DMekVo2ZBniAcq79hzgMM1p8NCwRFYLc3t",
  "key17": "ZFXA9pgZstUH8YSQWbJUgKragS93a5VqdqHiGnkhNDYAAidKBLbYLcv1e5zMTzoDXwxxzAwWxVG9Fu3GsH6AwSx",
  "key18": "627Jac3Zmr9KTXFcG9nHLZmeM6SMJhxsG9jNFVwJ2tLvqJu2GNSymZLooZwAuzssop5Y49RCiXnqUz2cuTiQXT5H",
  "key19": "267sBz7nQuXfrnCdLnBhbCx5A8qh9TyCztLAsvBpKSdn21TbYaCxqH2ytVGJgeFk3PQmAJBY2wCLV8hsnKYwafJ9",
  "key20": "2Wmcw6eL12EcgCQhUy1WXPnkTpaRa8D4oczYkUMy26ZpGQDxQWyNEYQvfgQ5ardxXGNM5KWytxwnPrWtpr5efKNA",
  "key21": "2WJuuJ3Cr5uGX5659yE5cX64tpFnCYnKLHgkftfrLA87q9eK9V3K3MQcnt5VMESpyTrHyZrPKxccTx2zHC2LH9Qk",
  "key22": "2gdMQvFYQbQ6XRNi1hYsCMUAJMSKF3qvsdRgJcyLuAxH8vMgz6KVWrD1MoPqDmGbUmwsQCBDLHrdRpZK423HughW",
  "key23": "3QKD3b8cucmqFzyFi5BF6rQc7JprphyQ3e3BDWoeH5jwge2ZGTncy6v7Kr4LbXcZbbiyAAwVHuRsUDTGYaLA2fon",
  "key24": "EDzbsnygwJKxi5GP3f3Kpfs1iC1xWa3jXmATVcCXQisdhHhcn7heW7UYhF4Ltz3wVP16WZdz6LnDDfi2yRmTJ1P",
  "key25": "4SFeyfPbrEBTKoTspCDRKSizb1xHmSE5C4ngJBUMyxDah5AmH1fJfwu38Krf4n18qdKehLtDszrnqcCLw3dB5mxF",
  "key26": "53ACwyYZhJXmw7CeL8J2k1NhSPbm5CzWdAx4onh4d57F7VqGe6qJGUmeSr7abQjwf9aHCwyviVXQqZErxCPSKb83",
  "key27": "56U2xWiagzLdxXZsD5aK49Y8PNU3tphHEsvbSqtx2qP54yCVNBd1AbHiJcmVKCzZqhPKcE7HNdV12EF35N8hhWAW",
  "key28": "4pkCyhxUmx7K9dVcv62h5YmrX6kVkb7HMGo2ubdFAHNPovnXa7wgvrddZdTKV6XUsGuAvR76Q7zEzNoPptybQqrX",
  "key29": "2qhFiXH65UnPqJcnE2RdFvzqq7ziJ19cpgDFp8p6FB9hieZBxa9kJkqLMPxNWLYzKifwE7QQmtoNYeZ4Bp17iNXf",
  "key30": "24osdzNyPEhRfB7QGhFnQuAn9b55GnmLfHxkAowcrBRz7nY1BNYA19Wx4xSqTDZVGVT7VQnEb4yLqj4DRpT6RqRo",
  "key31": "2yrtY3JWLfi8ZWCYJrP1HBH2CzyRzcEaKPABC6idt9CZzTK1HbBr3GHHtfzHXHwfMzBqW4HzEXYM6xuUZULH5ed3",
  "key32": "2AiUcRcGGfh7Y4UaSS1pfvcvySFmWCYQ3kSUfiEjzzyHx2fuaS3PgvY4KT41stqrck5XfUjs7cYvzHUYTVDooSGX",
  "key33": "3puD9d1iKTwtKHK3UCUdD39B4UbZZ1BHs7nPcEfC8jDwQp7U1zaUJ29oC7mgd1dhfCoqSPAVMx32gbhZ3EZUkNsD",
  "key34": "3ddU4APvMNRsEMV6WMCvbP1Y1rwsYFecPegzNx3NFDCe8wwsX35U1ZEeopZvmT22nQp4M4yWfqRtA6isPiYMvTMY",
  "key35": "6t6fcfhJQCs3mRKqAwK7vcHVD2zKaY766XAjZQRQJDzkDNTnwSHwZP3Q2KQfpLjFvKEfFo6vhfVYAu7nyg1rYD3",
  "key36": "zXRcG4yiufkzmqWyEwSXTJCjknh7TvRhB1EqtF1CnzUrFst6zMcPMhDovpBfi1NZtfdEoXmPHMfoM5SPuD17AvU"
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
