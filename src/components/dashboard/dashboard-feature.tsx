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
    "4WxFuwHEUGfePrXE4JJY1xvs7W98HDf52eVyHABNZTpCzTAu92wFdYBmEw4Yru7tYvERYGUoj58PDepouK6vciSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMDQQw56ZcUFoQXvUdb5bKux9PuyYkaLCBEtAbSejPzn3chQfosT1bJy3MHaYWXDHentgVg7xE5MQCJAq5jxkVb",
  "key1": "53sqdb4R9rDhY2MM4254eSKqWVHNvy5ZAQ3XbMNEoaHvrB8YSdDTibm1XHVXY64XXYoSmCCtKuAB3eXWoJxvLXbp",
  "key2": "3YtK67D7o8GGdyQuD4qjCKmGdiatfRUSuTVkU3oeVENCGnEEow6pbQCNGKE6rLk3GeavgneGXmqs88UuvNGG97Ww",
  "key3": "5SoV6gw8S2Z3xstvy5yC5kYjkrYYjnj1UrfAWqmquMqQtGMKe7WUXa9eaaTYxJPvEvpa7EXhf14eugC4FhALvpyK",
  "key4": "3EBufctThzxZVodwhmQemYauoWuxYqcpa5k45uVmuGmy1dYxZwKSVG3x7hueZ6a2pTkjhbjULuMw6hQq1MBsZHu6",
  "key5": "2b5oit8iSGv8NxG5X2qDr3hqAZ5EErArcoe4ZcfCPFCobTKyEFgP6EDq4qhDacEXSTkJbDV2cRtJve4wgQAx9MBB",
  "key6": "5DnzHBYiwsEdFAaHotYJA5uQdt1c6rp6PRSvSaumDyJrXP9fWCb4gVDR1kAUjypNyG6keGYTMDiRRw8KsqrC5W9w",
  "key7": "3fa5UjYmD2C9iDjaCWjNmQZJDJfSB7DbQBhDyHbdw33e5fSP8sG1M2STvqmSrtiiBVdLe1jQwuuCiN1AnJWX9PyP",
  "key8": "4BiuZYhuhrNhL8S6zFpf1MX4SmV9TV9EQwEM1rpdFJPkWEjJ2juHUdr5uf1soNY3BsJwyBB8F8nDxL8M4cxaXCjd",
  "key9": "2QKrGEnzxfKf846hCwX6nCT1zXfQiGJcyWUeDcyErrz6wD45YZVKp4rb8aHjgV58jE3eBP61uc18Yv1XaYkpRDAL",
  "key10": "sS9mtenC2Z3djXDYr6LjfHt2fefWs3mn1gCrVqBkVJK8Sit4BdhwNaBvBN87uSVufteVtrf13tu3NUjiFtYaqzr",
  "key11": "3ffQ3NDVgq7iYZRTDXCgnkQx7CR9v8CFHuY4B3VRs7VsAKHW6PJXR2NE6n2nQj3btYGTLgPsRrUK3An9EmTwuoan",
  "key12": "3rLXeEcd5XYT2vmF4HZ8kifqRCFdU4cCn4zzVra1YJ2rvb9Zvpu3R5qwcFGMtQufuqmfgt1jJQUAue6Hegi1VUNK",
  "key13": "4K2A9g7HQaX9bvG4RuoLkXCpHmcePLnnBkzV4rRg73To5a2GXqzeTTujoSa2pW6ZyLDJ3v53yXDrBY71RJYwusM8",
  "key14": "4dQzevhC5z1kxSb3QCY6qfJukDzXTcbg5TWGibJZXkHYFbE8yq6fkk3AY9rDkcCYroMUAgAYsoSbpKJ2UDZnXyuD",
  "key15": "5cwUxSzPdrceDkY45E73DhvKF7Ea22drGoDkY9nJCGckVnwmspzbch4GFfjjLmAyBg7pJ2eqg9NwkswR34DYWt3J",
  "key16": "4fwxGU2D3CYvyoDQUqxjEBvz1yKgSzKE4kXCgn5u8tBJMpgro8wLpkgvUpwAyGWMJmwaY5kMcPtBxoYVL1Drzbnz",
  "key17": "21VMnA2HQARxKoTGJnxD3SXefnDufecuE1DR7XME2Dps3hwA9jdgZ66ieRPkNb711vXL9AjcBsyepP2UQNcMy2Sd",
  "key18": "37zHL7Fm2V77z9WeNrCLtBS2iL2j6m5iUru6ZcYyHS1SoCoLi7o3x5TjE2hrdahYKVAYrQEaUbeiHuGttW9onezx",
  "key19": "5AqYr53QcuA8EThLa3J8ikYzkqm66pExTeXXzUaM92c5wA3zENuQGSaK2kPFHKSMGo1AyBYNgcCSHKUajrkxfEPe",
  "key20": "4WyUMgHHoiGLHeXSjVpmTxmtb6GQupjmRWZ4q8SpjDxLsipy44ipse9jD4KFHMs1SAk6Js6yCrEdkiPSJKh9TETj",
  "key21": "48Gz55zhTjcGHBjcsQ1rpuZHLt6TcKSmfv7QoUky7oxNphSf26pUr4JSET1nWNmrUYFqbet4BDLGmpbr8XVR7KWH",
  "key22": "2sCcfR5pzfQBwBDJM9LtsEbczspeHN1jsYWp6bVhW4AWVa1XkFjEHjbqag9BJBS86RwWoEBkZZZox2XpeLD4en32",
  "key23": "5iyN6ivQnpfbnE416947CcBc9tseozrMiBQk1idDWaceNqn6YRMNLpY3FibtDxnvdseAS8fNb1z8XihaDJVxP4yX",
  "key24": "5h1APQvZtYxKQbXVmMDy3gTg6RLTT8Ha8dm8eVxGTcmJVw1yfWaCnfHHxoA3uzma6VbmiG3nSy2QE7aVBqY8HFr8",
  "key25": "5ubZ5FbsooNLwtvHJbCE1g6MTurXRGKkxG4kntzGCooa4WzG7DFcLyYGz8d2KcBWvWdJ4L55JyiCS5WRXrbVHbuy",
  "key26": "5t41152e3qXoNdYZQFk9bn7iwngJmnpc1bTADz8VyAXFSnzaxRz8eivSSbtYQBYt1Q5asRKPCPmi5RYk77QFQQ3D",
  "key27": "2HJjaJYiYC2exDUffnRoqvxNvoiLb5WhZtdowmK7aTBUSWsqWHgFFmPN1k5UtdtmHQ9zF7dsYzAoZDZXr9aQptq7",
  "key28": "2TCH2CTmAviBHzWgrdGruuAZ1cwxj1t5PQBCMzQK1isgvgWNxuoiE3RGPURNcNfWeC2RUFfoV8FKc3XL7VfKRXbS",
  "key29": "5pm2URXpbYsNPyP78ZPFstDeML8X1Fdan6DsVmvvSJGaRJ6bgkZgpPMK3cMfXqBF2hcJmXJ6zMYrSnaenGPpQmr8",
  "key30": "kFtVqnTyi865KW9T1GKq5KMJJDjDSqZPpsRYoxz3G4ECJWCvpVSv8PxdT913itXLGFkbxKgz3AWceiLB1FLV31n",
  "key31": "32ZPHntFVBLZ9oQCRRDehknbygLiYMp3PtWUZTWQfk2NbcoXAbyY7NGyhv7kHRsL7KoDC8Yzc78eNuuNbsHhFo5J",
  "key32": "2jTtgyZkiEcri5bBPg9xJrm3ZeKfgaa5twxH4Wm71A3GEE245a43MMRyTP7ha4w7R1Poib7gPyjSXXXjE7t5c9Dm"
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
