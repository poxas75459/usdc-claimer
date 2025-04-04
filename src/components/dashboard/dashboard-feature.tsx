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
    "5ziC45YrobvmBVbK6A5xFMeyUwFYioUVkSMS6hzRwA5kQhSfcek7mcsbkUmtSSbE7biBwrKgoyWgKLN2wNmBtDmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GERTMWJ8YpwsdCf2xZdkDyP1UnxLUw3amn2tJrANJDWDvwFMWh3peLsGiSt4CYeo75seJeCeXc3igeNvPHXwv65",
  "key1": "4wh6aYnATp1jWrzU5L2KvLFBxzdd8oEQ6LuawQuvDXc6CWqTgXACy7Wizxpr4GCBVHeHm1KKS4dGf9Z8aGMcAMSS",
  "key2": "fot4wWnSLc2WwaJ51yZprMDAHEdLBegnQfiGccVCcFXBUq4m73yiz1XnRYFcmMkGDbsNjUifKYe5tda79VnxTSE",
  "key3": "29yr8o1ckgtQ39GQuuvBMpcsY77rd7vBavqmqPaa6gGJ6oED6i5iwUxH53zRjdGky7DZbQFWc5xHsDUkyfuq6ee5",
  "key4": "2u5fYMVu3jEKLKpktHgT1D1bDkqGzwNE3u7mkGevJu9AFYcEPTd4pDtMzxFWYDD3y5XqN49NYhdz8un8M4Lvgcv",
  "key5": "2g3fAZpVg4mLdggCubp5NzZyBVAis4KcPxJtWinTQCroJwrhKBAPiFrLZoKtYwFnCMverGCpuLDXYde29oYdj1Pu",
  "key6": "3poPSeuofZwoXE4UfLn32aXdayLhjhd1ZtH7RFQhGcBCobJfAhrT5bmHAUzeHNaE3brjedDA68aNcP1ezoMDqmZn",
  "key7": "Ze5ascHM2HeLbG5vMTqKJFxqS6iRTx1Go4iv7DB9yeY3QuPCEmTbyx3nbPBvwqbT7aNb5SPHMVozJfNoUHqAonD",
  "key8": "bRKDFK4kSAhaH4AMFxP13fXoWWzLRd15daECpb3NtN3YF7zotkU8azraNwqU3NrgeYLbbGbtxpNz3KBVp7yS6Kb",
  "key9": "4yFTWHBkCgNSmGPdg3zMDzDZ1LpPHAEAhqwvXgqjTpwuwDHTw42EWRDGnQ1rRMgRnoYXvZuJJEo76fVbVJy4Yugw",
  "key10": "5BXLeBQjqWwtKFPeAyjB9hacLgVjoW9WgPBEp1VWiJBDkZA7v2teMQB36TZVFumcSXZ6a4BfhPFpapXkRD1EyvXP",
  "key11": "L5gJK3D5PXAjBPhf6rWKftgQE1PvCphYkuuzWxFSGQB75LHqy8dM1A4U6XE8hwqxMXPokLaYbqa4idpeXQcfq3C",
  "key12": "4VxRrzCWeGwLfoa7bb8rjZiuWc96T6GKQjJAYR7nweoE3wKEQpMjtZ3gjRDnbXT4hQnFmnYsUusMPjqGFicNjoHn",
  "key13": "5SmF84K1WVMGGfiHhyTJeiDoTdZR2dsznXj1BPBLM58YGQoGGi1TsTJBid9LCsoNs8ZotpEYr3jhUhBRN7RXLSVW",
  "key14": "3J8MAm2EGuPE2Pj7U5BcNdwk15hv6Dsjkwy9w85bcQSyhrLwTxsfnDwqqgCUVJRmBsxFKMxxz9twRfmbSLUbxHm1",
  "key15": "652Dg37dTCJPvmUp52QvcLeXFEpFhB8FbqL1odAMUJsHCn6iHanQzfTVJzq7FznfB4qM1G8ybrbB2MG6ZXqdsYRY",
  "key16": "3xryjNVmDy4gqMp2E24Yyio9UwhnX6tdzwpzyfh2eAbuLzLF6w39Pxq832X3tHiFQxHBCd5rxY5eswARTaiK6Ldq",
  "key17": "o7pnqQvJH3XfbAmnfStKKVZb4qkvGrVdqGYu2eFPgfbBcRLCa1Qgr2r5AEEu4VpJNf9AXZhWvxajyQG4sRCPqq8",
  "key18": "5JYe1JuLsMiuJko4CT5G3mgcQ1iDh87NeGFeSkb4FitHB88vex5MkDv8QzGLuffw5o5M3zDvtF23ZwjkaseejT7",
  "key19": "2WJYQvr9wjg6JiRw3GHRCkFCwZs2m6WV6zSWg8kEqPowDhB2AMDJfo3B3i7AX9oZAfZ7Hy6UVRzKA9W7fN1ZpAqf",
  "key20": "2aJLsR1AHDLC4jermyzPQQS3vLb18XeP11C5eFGAe9D5Vno33oC6G5P5hRw8AEjtWuHo2DbuEWTmBHiCzjrdYMX",
  "key21": "25xjuMiTSZiUmdq5ee1y6APcPCDEm67YPrrt233ixd9EvRgekC8KrFE8FxeFiTBSCyExnVj2Km83nSWwaGgCBP5v",
  "key22": "4cWMMiFSBuRypHCrqxZXbNVKQGVoSb8gfKR3FNGshyrDpQ3LMpUp5QMbLYGgVn1MaamxCe26sAa1LMtUtzgVb5N4",
  "key23": "2x5qCkPJDi4CZQWJaVsHPoJQfkWYqvrYkNdjvAB58R7ZaQyKhbJPdLaWKyyzrrd2akjzFEeztrvtj1teoAFSCQPg",
  "key24": "5HZZL7oGmZbdf7hktY3Z2YLaGZAZGq6NFTnuqncX7iFtQS6jyvEZtb1o2rBnK3EYRz3nxZ9VSB89FmtcbBBh1QtN",
  "key25": "62YgSH44bRdKiVvKaRkcfNLLhpnysqBcxpEtUTwW35eNArE4yU5t3hzhUg6nU4fZdLvFK9RjVozjEcGJCSqqHDLN",
  "key26": "4FvM7mNcEGrnqUkzUPXjjxG9yzVS43xzew1b8FLMYuhFge2rvad56znsxPBeKffHtNAqxhBUG3XZmVpF1ZgSXvkV",
  "key27": "3ZxrAeQYo1ARk86Ppw9eRcCjnsPa6mKCT1gt3Mjz5jeN3TkYKVpTzwyaSbRQwSJrQ9HR7McX2wER9o5sQ5hXoGQk",
  "key28": "34H3uYFiTP8syY5wpHrg38ja9qWBstfYxFYKURroa95V3NxxzSQEtDMtpfzcrPXJvEa54nhZjdeUcdvd5PCg7pSN",
  "key29": "5ZoqqFXxFNzLmpr3XWh9jJoeVUqBEZjT6Wod1FkzTGRLMVTZuXWmf5jpEhRd7EpHpGNkneeb3pEuY7BgcgBFaWNo",
  "key30": "41HaqNig1C8ZYbUstgT8jw4CeKefJU35LgjPxNQy1iX7o2ZPR7rEvoU5wfWvzcbjWvdv4pUSaXmkN6AeY4XJt54x",
  "key31": "4HTimxTwCms7PHJ91Ke89o2MajjugRG2ESWmP8PJieX489V91NypsrLMseDyirhzp8K3LZtXfv3heBZibaTn8pc4",
  "key32": "5UDcsN1qCQzKyqhphCgwahC984Wyzu9ADsTU6yoGk3u6NKxpDXM8LYevL9HL8rkm52ZSLfGGcKWw7KXyJfzW2gLW",
  "key33": "5hDbmoSAe5FxsUWvcLSp54i8yeytAhBz7xPZi16MCgyCXUqdrh6zpzgEPKvYt215bBBozeV1qjY17kUxA1HksoJh",
  "key34": "bGHrbRyxCj16Z8VWZxyj5inLADHiA4X7iUEMUF3JWnwZTqhBBWpcXkYVQBq5idVq39FQY7zrtF9WsGnD2qRvzFL",
  "key35": "MbANaLz3dznb75Fuc5noP7nhtWQqWiNS28PQLscCSbkCJDb8f1vkYbxQELfRK7PTBueAeA3pJgNG6bX35zCgVRu",
  "key36": "4rSeXdKFeHxwrXENs7GktZR9G5tjRDidjFKqwEqYHd48pxXGAS9WHd42896QAvZb45JtT5Es71NCebwfLhmACxyp",
  "key37": "3C5Cp5F7iFSoehCxBczKsk1rUzb3cU3Vz3tYXpbS9MNsSeMkZoCE8Gq7D3pnW5veVqW98q3R3Nrhjs6qr46P7xtr",
  "key38": "GrHsfTPFMh3LkrkkiXoExduHQ3Q4QjGovoH1RvRdg8AuGozkUcWpZegKHi9yaMKCWxyrc47Fmg3ZE1m5fpbyR79",
  "key39": "2keNVQdcQdesBSFwmy11MaZRjeCVzzUC9dkc54CTw8M9JcZpnbrYK6xhKTFKa1kMcKyyCgMhruwHwDDGSWxmJDyM",
  "key40": "duPTSShuAADSNb3Fan7A8zBhhBwz5tjEA3QrjBQb2QCpoZ2vpZtzGWWbzpLfRD5USD8YQJXfkEDgzVjGDoLZgLp",
  "key41": "43N26yuwGt3vYoR8eeKGFEa7G23dodrmZprCL3syYNoiQUaC7HGW8Ks2jHy7cLsEQ52gm5jon3edMujo772vGm5T",
  "key42": "2imhQFSDY8qkfhA5buNNBryBNQ6z3Vd2Hi6E32AjpV2kPzLrquxXJVwbzHr6YvQWRw32A8rfJ4LAEiv3dFmJ5XN3",
  "key43": "LWKengT9bRawyrzNLg5KFMsAe3wGeGQBioDVM8AGgFzAXHxSExihagNPBA4aM9yk5DY7H36vtaffr8iwWfvAWca",
  "key44": "29RKyDRFSTd86D1bg5sDQRFM2ypMRPRwvdRQHQmm7pSz9ZfGvbzuSWujsJy8PosujGMxwWWpfCottCBq7b34tLXh",
  "key45": "4GY1wKEaXgVA4jt51DDHqowRLVj6Kdk93XW7VfmqQ8JW1rBgLrtgRqKeEwZ785tGUMRZvoRD2An8Wu1RZs2Bm7Ea",
  "key46": "55E4JdqS6JnL5c3cCjHQq6qFjpw63wRVLroB69ywTS8wCNHMyDebH2dqkL4x8SKmPpfn5PjqVYYm8WfS5ZQx1g5S"
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
