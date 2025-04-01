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
    "382N8Qvfz7nTjhmjoaNy4TPbG7W9erYUdggX8HfPGZGmckM6xnAcVTM5FYaZSHq9WDngwYxHRb851dykBB6VB9Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJoNQ4kJdhkpemBqCSFPU9sz71ydzj4VBwGhfAfZZsyZTt7vHViUXX5dZ3TknMK7YmtKBEtwZigebyNfEA7UNtJ",
  "key1": "5sZTq5Kk6zF3Uf1kE6kpXYBmVdPpGNy8tgYixA2uaTqn7ec7fdhm9tyqtprRazJnkn4MpK1T6wyHNsd2463DBojQ",
  "key2": "eom2iro6Z53XPc5ikEWNooHxkcFjzyhSj5ecNaKF6JK2iKrv9f54zVDyXXfVdyam1Wi4c7ZxHwNoEjnvcyrcThq",
  "key3": "41L7XC9c4dZVkswEiPYUS33Sb1t6n5sguKZ3z2YxHa4kNYuxzu616coyRqTX9bpbAAj5pRLWDBxLHQ5dbCjEq8LE",
  "key4": "2fftPywqakFEy5Pq9tf6s71BH9e8Dg38r4pLReoZXztgdLnE8ZJcke2EArZdGoiNdtxenqxxybC6fZJsDDuSTcxs",
  "key5": "5HU1eSBYiQvMjoMYEXrXNH2u2fycT7nJwocwRzbTAFjhTmDPAWNDBZkTtQYsHmURq14PC7NNAwwfHfmX2x8w1QyM",
  "key6": "312Dqrmb4yo9pnWHjr9g5WTuFdCuitxmqsPMGRPvaG8CsLUwXaFsRytPy6e85NaDBLG25JUyPT7X5nwbE7Rm2GBz",
  "key7": "3g29KE1oBMz4vkycmyHzhHHXBLL7n44gJMoM5sWHoZdxbFNiDjq74US7Amx8KgBBo4zyfYtLYJxshxvqE7NJhLrM",
  "key8": "4f1iW6Hvz9BpgkjBiRaidsBazP9ATXDfDmSkdbDaoyjV3kYUUZPFA86jYkywJCDQFeoD65geGRwEV5b5YeGtN3Kx",
  "key9": "5FsAQuz9FyofPidvH8QoorLuuhSZSVqxZuKsgNPYc4eQfHJSrPTVLTyaydPYayXMKjQt7jXRpzxCSM9vDUbqsWRB",
  "key10": "5q1CiisDNp5oesJaijPp15HugaY4g66d3JdvPXgMGVH92zT8YAcpHX6HZD7LbD5YTaeU9xWFNEnwfsar4wRBLce3",
  "key11": "fMyCxLuFHahs3KgfuDjHcEGn48LwGLpf7skvT6NGPFQRSPZbrNpPA8STrp1A3pwvSSJreKWg1Lkg9B1RcbMyUFe",
  "key12": "1y9sD897E6EnhZ6gCwcP2FmbhggJRCs1sFJpXfpbwMdknEe4zZku6Zx7g2Av9SdzFbM2GkJ7WwiBX3mwYBzJ8Ct",
  "key13": "3C9CH1kAEst4EEtRQdWMsk43h65xv2gxpbDcB2vqtATL2rQ9QWZEBEjG3cSuNrZcfVPFs2goisW5MujeNRhxmvHD",
  "key14": "5C4qyRa3qaPRUEgq5Ya17mJC5Xr6C4EExx7uK2A1MWFVadcRmKkCUS6dGGDK7zVAKFwVoo4gtfrAHNsn5qL1WXP3",
  "key15": "4Negw2WcDVPfj8Gt4mDJuMpJLTcpi21KHuQrMsWv4i5cnANdMi6WhoMXRQd968ngELr7fndfT53bvXwvmXfNMay6",
  "key16": "4sKuky8XLjeqS54G5bW8Dy4KiidrBYCgqYnNjsUR8FxX8uzEA2rM1HdN8fDDYACg2ujRzJQb7Fb6UnaU4siz1w5f",
  "key17": "2P9JkuHUJZZiNvbySaQJuX5Nvwm6D4JpPnyLARb1GE6EiBwrc5YLmRSq4N8wajWHsbA9kwhxqtcpTrfir4z7CZFL",
  "key18": "7c5F6nNBcfFKN6PZtuYN8Py3PAuzi7imKfZ5XAWAKJdQ7ENWWAQDcU38zvvj5C2r9zqfRHfNLovGbvinAMHsMVN",
  "key19": "3RA4UgG1KQN1cckMnqfuLbuEu73oeYkHwMzgdhBQ6Usq2pANQRcZGk9GeZ6uwGJVd11NaspR46MUcgPRAQr5YG4s",
  "key20": "3uHk2sgzaG4e1EiJn82674Hd7ovCCirfVema24L4h2bid9F3xdqjNtdtcMNTZ3CPFXkguuBqRZgiogvFugaLM83p",
  "key21": "3t9pqRc33cbiQDGkyF3ou83P5GktG6p8RoRuxibrmDmWzFy7rVXzrD7HtW8oQ6srWEJsLqKNqEmyJaqr5Hbt3SSy",
  "key22": "4yeZFeTE5sNYDbg1Y4cWyEuJzShpTehbyr2DWZPHNNTRkSjjLbPZUHVrm1pHA6hYzCfZHieSVdVY9EXLsdigK1K4",
  "key23": "4nUdF3Xds8rdz7RDzLpw4pAnwc1NiLMoHebAcXv5xnmauNdUxc5dmKUqn1E81x6G7CRC25th9vX82PsGbJNTMTUD",
  "key24": "3X6ES9M5bazqQicgPorqnSNrsaSpnKa2727W4cD9daQnJgqpzz3MoehweNncCn3zHJcE428ctm2PeG1RfxdCxz42",
  "key25": "5Z3D1oRXcXGmQeDE5FSmGNqncw49e35vU6bbsnVALcaozBKrmEVPEecwpLthkGzuV5BpDEjtXyDfEYofpWfHQXhM",
  "key26": "2xDX766fFv6AzaWswEdZNskbtG1y3QrZLfSycLwuJndjQEsVvAkBBuVg3WYMBDomRvZbvBtSSGT87ecHDR3ZK321",
  "key27": "3qsUb3mNet3C8hb717pCm2VqBUXF4DiFgt9cwThAjjQ7hxxZVGZMrachMSz23QAqSx3jtjxw1AjnUCgdu1iTNqE8",
  "key28": "3wuy2Sh59uThDsgARddyYd2BLvS6GLXj5k9Hfu2VTUxFGcJsA27CpaQiRuqUDPkaLQTbYom5FfxagP8nhU6SrY4q",
  "key29": "2dfscRTLKVzZCRYEvV8X73QiJDwFbGLx54YfV2pWEb57oEsMwWiQ5ZUqAumjWNfcsifUqFFqre1ZrjkBeHF5HzWA",
  "key30": "32huG5JngrhZ2mAP34ufCAMtsrBhjPaFrz3r7r1Lmg7rDjqEcqymqXj2Uow48CMyfx3JYfTv2iSVDTjxmCnvmBYj",
  "key31": "49NfmR91cwJzde7bM8pH1dEWdLnAoZTPcRvLWSJ53g58RvStcEc7yMCt9ywaY9kTzizA7YLNBMo265wK9ZAUQoXL",
  "key32": "4YmJ5eFMdzPTJKAq7HZtKyGX74P8nYcypNEE99BBuBhp5LaFon7h8mB4FpizHVDJsBRQc8PX1S5mWJwCeThCFQuP"
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
