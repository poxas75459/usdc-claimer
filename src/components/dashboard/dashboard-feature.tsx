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
    "2JxXKPqJkT4xBqXY9aaoC3VesKxxe3aeWCEaX7QjYtyYHK8HM8ScnSejm82pPW9JZGRR41PnKrsC2HJada55SwCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnnQRfRvFrgK4XJUMZ8UpodqRcN1TstWy9MMrY6DK8S32hy1Nc1unEivj6gDV37SQz6SSGqQff8W6yLK156J26D",
  "key1": "2PBJm3aVcEes5JgXfCPT53eqs9BrS79FJqoU5XbPmENgoti9qDonQy7sTmZ85eGEnyVvQscm2tjrEooSrfKkv6aj",
  "key2": "5N8vbR4eJucpYnZc4zbkVgwWn4qu4uUucrNXKFbpVFtDmpKTgXaq2njpsWWgvhKRfVUtZiBrpA3qx9ivyRd7dE8L",
  "key3": "5XMbpBrkeRGZH1JLw8kcp6D3fTHJgsN1X5G96pQfoMBrHVNLkoRh6528yZNVy3hd6NeECHC9HU9r5ADZVyjG22Ka",
  "key4": "5RfwDekesaPWasmV2sLzHbpaZXGf4zXWvyWQwVHjvcicxLjSkkwRdmfGWBR8RUsZqbe67hNQj6sx5jybzCMAHKfU",
  "key5": "4yxuESMVMKgq7FUEkJjQy2c3tCyrvwLE2h4vGoBh7xLugE2zE3U6aefz29A6FmwXqgAdYqFSKXth3RuHRHqRfU2S",
  "key6": "4JRMJDJCbFFYarWusB6rJei3a5o4v3GmGrSEYU3c7v3y8nKso2uC4NJG7SnpQr5RdyZ9cm41BPD9W7pprbYcThEm",
  "key7": "3EbUJGZ2D6kF5mJaoAkWLPe3L4g65NZs8PJqJyQAbMAWTnexnXoivV55LReeb2VkUvUCvhFKnZvNzGPWT2aLMv9c",
  "key8": "3mJdh6gwEEQ4hJi3Tq1Aijp99X1pCtd1jsPE9B3sEqQqYwMtbktyQp1pWqozCmKVrDX16Z5XdCQTVcBUjoUTvs46",
  "key9": "3NnpoGLq6rEKtqt3KD6pnrXZQDqn9pCD9USiEYNeMmwZh1CUBZS7xG19433PpNhA1dNs7s4R4LNoKHatjBy6gzHQ",
  "key10": "e4uF4jx6x3J6WB8PAqMHMk79rNoKNTAULtA6DtnBCPp7XiDtU1hkc58wawCYZJoCWypnhQGjDh3zNZZxBHdFrsY",
  "key11": "3CKPv6ezwRYrDxF88r5RhkyfykpMVeNAcCebMqKKXFphzrkH2jRkStc7mkgr3Z2Wa2eJiPnEAcx97zViVKVgsQtm",
  "key12": "5UANzcbJSYop9Pn19mqugAWG1u27gSWgHWwy9nfs723qx4Yf5pDEi7pK5pJnnoAwDjfSKprop7MuGx8NMhm8EjbC",
  "key13": "5Jzj1cKXjd6kfB3YF5rZSWpkjTA71kRpMLYno8wWF5v9w4RFBVhwywcySxcHoWRV1Rxji3J5nTcPm82jdg26Lsuu",
  "key14": "5XBsKs2SkQBhvRUNiEnZFhPyn6NCxSyqGvWoghPfB7UcNjcxBR7bi5j3DZWMAikUvzBmsFkpeMwdKq71g5aoorRD",
  "key15": "3jcbhv2mJdG5m1KkoFYyd4NH4oS4Bgi9YuUN3FiTEBy8kwh8GahmvTukZ6SXhxZVFfqJCi3JVhqeNvDJWAPnSskE",
  "key16": "23s9Wchuh43wBa5Nwpsa6gHQd18541ZTt6LsYcrzq7dQHqmpneTWdDXrcer7nZpnnJQ2Mmj7xJVH1UhCENwaNopG",
  "key17": "XaSCKbX4cm3hDhfvC43C8XNzGMafHLWJFLgmGzvAik8qihqBefqC9GeZJGEz7c2NjAgm8jfvHhmhB3R6aoa89u1",
  "key18": "5kiV2xykjEQFPcrEMDUX4wkbjcgy5hekt6fgSVF3tMEBkhK1rPURTigp7fbyAAUTCVLBaQTCPQhk6Sw6G6wM9141",
  "key19": "M99ZwbNBwHQKHcB4o6uDkUfv69jzjd6hvCgJS7yWeRJ4re944PspyrTedkU9iFoCCpnug4gY1e7cnTwV5HHRUQR",
  "key20": "21N737rCxvK8h8CyoXaLdYqAAzCaqHisrAD6wGoehKUfTs9qM2XaRiobuqJNxrqKgpmFJaNQFhrj5MNtSjuRwQdR",
  "key21": "4nvjWViMbs2XpwbwiF91szyaPVFjEdbvDJPRBv29UnZSiGuW4J2xtxZJb1AXPN1hv7HoYFKrfoENAbco4RXqyKzy",
  "key22": "4Pm5sTra8rnzDAEwEh3WG8H63PEiMTe8aFVsULxmMKVSp97kAf4RBjuPS64wc3BWLqaaZmXLtAfoEUcmVkgSELhd",
  "key23": "QBjhu5PNQ4u93ecqZNchNha8NsCcgjHvTeV3ZjgqS3yHocT3GtFjyThA8hPW4tuSvpxeveYLYPx2WzA4KY45fiU",
  "key24": "2frJ9mVFqHyQQfrE7hNmw9RdPj4XZF3Ps3VGk6UHyTckLC9CuNp2ZaK5evcu4YjnDwEDqjmXPknpTK5wn47TP43G",
  "key25": "23mjLKRNhxKzzKieP7UaYGK6DVoK8KGSiFWKeuZjgUTbWSCCxfwLB6G7XaBxiyRV6WKRXkjFEeTtKHe1hxGNe6ef",
  "key26": "4CkwJF6nWRA2rCUw6ejesiaKds7d7H5cAZmB3rp1eR3ZfK6HwdfwbCVRjQdL8QLfUiyGSETKMf6pD5rpwHgfK1LM"
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
