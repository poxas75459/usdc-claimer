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
    "4dqPDjR5y4AxCLBLpdqRLvrTeNJBLXArq9dEi3nh7cGp5n1ujRcA7qkMZc9hDoJq6HeaFydCKiWTkWCjXzofzttT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gFpz2EgV8P2SN7YqkkBjpEsTFqkiTryVMbh2hLagNpyyD9wHoy9T45FfYJ9FYpcXzqiGBxq7UvNZaoyt46WWaVY",
  "key1": "4yHmmu98pxLcmddVQBcgioit1TWaNybBFDE3ZpJRftQWG7xHhzMtYdaYaxdLSqSiYX3ESqa7VFMV2QuCBJvm4cZg",
  "key2": "2BzHcJw2og7DSviWYEBwfXeFM24ZpdsvahbU6NJ5tb1mgAz4GXGrEBtENcrUVnj3pfW8UjSfAf71STBsga9FB6G4",
  "key3": "4bYdzMNoFDEugM1KAkFwJFoUmuKBuBtNbmUqu1fUJ5hphoL1x3Wr4882JiDzp9cTJXDB8MvKdBHZyGJiyYaq6cwR",
  "key4": "2DFp2q8qHxLbaiPGoxDPEJ3pq9QysrgaZRkJmZGJTiUag8WqrHsWjnvejKCm3tRY3hQP6bz65oEN4oX9CtbbLTRb",
  "key5": "y5X8yBdAJQygZCLmdBwFBGzM4CZnN9sxQHXhce6Ngtsq82jXd4jcMjzm8asJ5waBkFQpvbaK2EYNcAUrJ1VnTtu",
  "key6": "3wRaDNhDyTgNrAdQW5kUGwTR7bkoWLLRGVZtKeAYniAm5QfkCp5CAycnWuQeJ75Kd2shoqT2BieVTBNbnwMzMsX8",
  "key7": "5EU5p2gNeKtuPJTQ2KJifyrf9XvmmRGyw7W9PQfYa9dJFA1QYShBFGqn1vm7gYizgaASgRnN2sbDk44WmUtbgHvP",
  "key8": "5Ez5qwsxSNzKwYg5yuo7tAdmBH4qkR3zt95XXbdU525JDPVkxGuBMRZ2vStYHGw7jDpn7v6vEQn6NrJBAxPWKS1H",
  "key9": "UVUAHwDTVdVwYjtEJ92hX35gvTCFt6kp7zhXho9G8wFpmrbCt8foYTgHhM5ZLCZR7oF4x4J6wy5tz2xnHdKDUnv",
  "key10": "2BGQxTgaB4ACEawkLgDFYFXKpaJbogy8erxweHnpvbmu5oJtg4h8EUdbKh1qa1Cof4CdkwGNeiSU5sDMLXfJxY7Y",
  "key11": "4vq7rLAs5RtoZVojS6MgSycmQHk9nUU1Xf9oYzTZXCcRKLpw5un7GL5pd9uy4yxHZ1sBcDLTB9wGHX48Epb2qFvL",
  "key12": "3UBD9rCHQWK6A1UuwcHcLRUVYXYPCdnJnsVCWXcicPgHf4B1nQ5HqAGBt4syv7QWv2wS2j6ajiPpctZGvaHme54z",
  "key13": "3x8vUjqpgTbCrd216Y95RbL4JCuyVyoX8YkFmQCKLcg1VJAc56eZCqix6ZZUh1SxTefz552eL38RAmyMbd9ku7Fe",
  "key14": "QfDYh1tmo27npbmsezcmeR2d3iRTQVfYvKHbrZ6rcqcW2JGMbv4GQ7KbMTeJqFWvJ24fwgTSyhn5KPRTrG5JAgJ",
  "key15": "3HU31C2AeSVzdqk3FrRGuyHj7AT2fzbZwsVJ4xefR6bACJpoUU8BhkzMPA2qwX4oZs7gwi72EggcFZUhxBJiNjb",
  "key16": "2VQteYAvZQtizVsMubG1xRvKULSJQmrQsb72a1oxxAJbtXJvkYR9fuC2bnHUMpPYHBtAws2dtDLKwTpdBTmRNFUm",
  "key17": "2ACMAb2jpVZwXApVeYA4zXfq8cW7V9ECpqjCH9defzhW4xyaF7csFf6PL3yzgHnuw3tCp8AiPRjFTWC8oVtVWdEU",
  "key18": "661J6sBzCpcrBHUoo3CTWDWuM1uQHfohvA2igC1zNeeJu6BJmF8pxEBk24kXqUcFA6PkcLMNhpG2FbZC3dEYx3df",
  "key19": "4GbLEje2tLMvc3jGvXpuNtc4gw565Twhi9Pdz5mc7R4dxGcGatzHWUBjqKr8LzQQejSnXhMP65foLsvWM1psZEAZ",
  "key20": "2G4i73zJ6wUtM9ZFPVLeaCFmJUHgSwMht1ueqFMWr2AmFbg6MTJaqLTVsPFBrZuG5geymboAiN89PKZvWGgL41Mz",
  "key21": "3pjYTuRPDgJTJnpBVvuAQgfzZUkki5NgdtCek8CPyyPQub36gVtZXE7bf4tv9ovd2E1DWgoXNgwEGA7nzRLtNFsF",
  "key22": "4KSwYwzN8rY9zRHs9JQqkqw3Jm611yPL2mfi2qyLz9Q4WC4cirUH3u4dmQDCG7b48qsYAsapfaGepUCSWMKBBUza",
  "key23": "QQoFLhd5YFafJKaTqYxFQzfjJ68BP6ckHtHRQbYDCtzC3nuFmrynWkmFZJ1RvPDaUysng4mVysVotin26aDAUg9",
  "key24": "2UPMf6kVNqVN1y6KxriXa1dCKKu5mSkMS34RbaU9Q4BF3NBeeDKLDinoW8uNtPyewc6YCDTdrnvVASqeu6nxpaV9",
  "key25": "336PZmg5yvTqAs1QxHB8JXVZU3pnX5B963biwCCTYtaqnu7XTKP3PjYe7MguQHUVHKuwBNKBzR6zM9xU43jvSvze",
  "key26": "4CCpw3WZxezibdvcyi9Z53TwGXt2x4FwYjATfU39YPJUSKPq7wvvf5thwZr1sHgvLarUAEjK9EhtuRdpGMQJjSHX"
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
