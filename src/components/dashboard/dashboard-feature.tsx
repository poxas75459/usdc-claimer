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
    "7A71fFAYxiZPVkm6C471wMnvovn7P7oWcpsUBLtHSSDeWd8fKKVEqnMadNC3FvqJmVnByzdpgtePzGifZxH7s4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ADfdESEL6HMxZCyWZMgkvDt1Lvwj2JBcQDAWMBLMcq3jrkE8uijAEaUKpkWCqEgAZVDGLfP2iKM2wMDHo3RFUi",
  "key1": "2AwjJz9Psb7Ad6VGkcqisEEYfWsHgmLV5Ltne4HydvUFx21MWe97wMHEgiBthFqrw3PRtXCEsuCD6B61swonsRpP",
  "key2": "4gxreXptr3DnLM8GWQHnyVvKCQkAj7BLPEG3jH4cz7P8nxEiboeKJCMwU8MQcLP9UDM2KTTpkL8T3HjzNy2DzhuM",
  "key3": "4QLMzgiEEDfcb29sd1TL2jfXY7wawCg18gvKU2k5s4YzVYRo5KwHu8mgmhHwMLbBrYWYFJ7nGYHcaPNzedWy26UK",
  "key4": "b43b2BMFBnHHBoueFJ9QHn2rXM8CTpB9fEN33HWeEiLhvzKSbJ5SoXe4niCVCTf4t9WnPi8mYEy7r1cNPTb7ydk",
  "key5": "2f4zLuGvHUBS3gpWvNpnRpGQm2xffR5njC5NqW1AK4MgVD4LCGmHsvvhAdLpekH595eGiCR7MKcqrcMsjKn4VTUr",
  "key6": "3Zpd2wRgTCNEb1To5bGCbj68AUnKK8AC1QzepxGjmyyb6zdkdwtLMoreu4YeTPWbD42wMXzeEDDuKD9jJRTnZ8Ch",
  "key7": "5YXjgSLG97PC6L281YNMQb1ueiiBixDK9FMxprTiANNSsdVjr5Fauby5xr4cgXsSzfcLS6JtmC4q7EN63cerAhBW",
  "key8": "3oot5iMogtkTprHs6CmiYVbcMxZ4ogKckyRUibHmFX7oE2e6xwi3wX2UeJjaQsSAP2fYmjvKPprW3ki9TWUhWjwz",
  "key9": "2EBuT38Q93vxSaZkHVvGXKA5qMNFJXkWm6TpUr5F9uzsutGermfgA29TEPzw1rEjbCcJiZbhvb2eCsN73JmsoH1r",
  "key10": "5UKUYN4ijos9saAmJ8sGgVVdBPg63jeq39NiVcnQJCfpmhj9DMtxU7bi11Fxo2jP7Z6kcxHDAEh3SzScKFSJsydz",
  "key11": "3strPyaAj6ayWhy17RrJqiGp2nJbpznt7Pp4fpAyKFDP4dW2KzsGMqzKGdtyKVDEcEtutvhFEPNRgDc1MEbYxUZa",
  "key12": "46MBpD4sRKzrkVWfWw7mgheQqPubDUXjBP37avvndm1Ngf1Sa2cQN11fi9zT4Hj3X9LxrmYNF5s6xVFmxu8keM9y",
  "key13": "bPsuq4iiXFCqyNEwoUKtDUGZx9LWq6aaov5Xi8Uts6sNjdpyAJkrSBiTaF2Xm9LaMdBpdfrKXLUAsb4GhZHUD2F",
  "key14": "4NCyn3VvEGbNWSmdh3CBUDYq7MuHLrC2EJ73m9qSJws8ZpvT38B2pmCSeSaa1hqQBHtK7n3V1d75uxzdeq4tWSEL",
  "key15": "251UzVSGHALWJjrYy5AWxqd6xwYYB8553S94HQqKMxKk8X5AZ2KZZ1ey92eoikcrZng4oe2oAMD3wpai2xWhqEpM",
  "key16": "4TAzMKvYC4D4Dq1HvVJ2EoPHfZnQjhhhsdb2kw7LnRizmQ5GoYNQEu1ZMnvcHzMFrfbvoH8zSk9osHtd6PakX4Gk",
  "key17": "2qKfPj6bir6pdXL5RoiFLMyh71Qntj4Khw7t5Q5DHm4EFLE6PYj2KyqY11Uy4wcfiRtYy5aepSvTZZQrSYbHuFVq",
  "key18": "4JPVx8TyVAwmRUpZUUcdutd6mV8qeHs9bjQf5ecEJVKUQihjXMiTrPmCvD1QvvoF1E5sH7DcYpF5Li8Zqkmh78cj",
  "key19": "9tAbj4AwF2KeqEzR1FBNazJYBoNMhUdWZXJpudkPn2y6caErDGdTUZVNqKLotQ7u1wYNb6yjcajmfjRodJ25BeD",
  "key20": "4sCXTybX8iduzH8yCDRZc3fmcSSfyFpwghjfY3uspeKaRqd3j9qxNWwPk2GzJXQk5qq1AihMTAtn3ek6VHx2BhQC",
  "key21": "2qKRXec1BE9QQFY2bzBfWdvTXLMeWebBzrMcyB5vhFgrfgpoa3hDVvUkcDaTn2v2kyZiCRR5rZiRkDvod94oEP7F",
  "key22": "2tedarfFntgFYJP68RmEbpXH9j3aLuxKRevpQJkuRX3WF2Q1CBMQ6ZzW3WSubynMcR2VkiyrV9CQEdEV4HNNDVAf",
  "key23": "ydHrqvtDZgXW4usp85worsc3EsiUAxQ6Zoor1KXhuNUNp2Lj8e76Ua5gaFES5U8fLd1GV6Mvb18ptkbPuPvhLkc",
  "key24": "4YxBDeidrg5kJ3roxZ4fcGEWszNpgLLgXiULDyQGJM5Lqspno2nEGQDAWnwpNUR9mA43cdZDxZ8cSvGK2vaMHpZ1",
  "key25": "zhs5EFw8NPeHQ5ZrCHU8y6xwSFwMBLh8DXka7dh82VzGtMbphxdt7crRr8R2hgdxXxPmtAjaFGMDXT8KMC28cCK",
  "key26": "5ud5s1h1WQiqQrxtwHcFvJuKgJoP4uPSPgEQBjBBSxmRfZFthAvmrJfYeuCzxwBSLBVmvmcjU2pkMnZcBaWdDQMr",
  "key27": "67DKmSXi3T7xtBWBLedRPkSrZVo9GcxXmqNWnGz6ZdgrQmuytdsyTvoQBimUMzkNeBg4p7jSBCw9SapNquEh1dRk",
  "key28": "33i87SRzuD6EJM2m86MPYmZyVzbX6rLu9HNUt5zsJ93S94rWGBZkatLMuE3pABJGGXvY5jTxmtsBqJdNeay74CAq",
  "key29": "2L9rWUsArcdcDZ7daK3BETffRyPwDE1VTRMyBvqA1duWDAqBpMGMVyaEcuUKmfDgsPbXN5JEUca3MoHtAaeqXADC",
  "key30": "D52J16fJ8uAA5RdmD5oMnVimBwUYHNSbCWGWWkr3st9DTQ1Ezbvpbpb8pLWgctByq1hhERyck482detie61zEVE",
  "key31": "4GQTrEPUG7ziTUt7QKXCSBxGitWY7Gs4wvYAQPafxTKxDkjM1XfhqYCuZczCZG4A8qw7CwFv1aGjEqo6qtqHH4cH",
  "key32": "4vRuVHmP7GaPqwzsJnEqn9ryeQsgbC85mDhtb3auTbGbBTb3rrrxCS5PeNaH2aBvb8M3v6tzANjxMjr2V6faoMyM",
  "key33": "4tsZXFD7gtDTrAe6zgjc9gA3L4EC46YrZm3Pn1WEAkkEDuBJ8Q8kUJ1RSijX8vinRvAfRxsND29WXJuujGESgafG",
  "key34": "9USPooX3xZTHsGcWeQ1RWivWa8gaTopxpqRXmWPuRvAy4jVMkCbKopG7tikqXDRkM61KXf5pTmQ971A5Frjkcya",
  "key35": "5T8SoXmAzzqKQtjt1eAdzTe3kR3xGNoZTTyaWxqmqzTE36LpGRqonQd6UqyNZ4uwAT17pEAbnBuiXdkr98Lt5Y98",
  "key36": "2FNS3KBtUaxC6q9mXbJWKzvpvLGfRAxDedsy8pcZYbf8fF9o6b9PeD8FJsbTE2zacVeufh5pA4Lou9Pz41VG4BvF",
  "key37": "2Y8su6ztGzYCDEq5hdwehqgX3sdzr6nHq11kNK24NsLJUTzbu1Q2jCXRf6AhYYo9r8UFn9vUbamYPW6rJmKsuvXM",
  "key38": "2EpfPpf2TjSh3c3iWyot4Lg3ne7G2B239U8VRL3K7iHvi1YugEZtsk4XKh5uk8WDFBUeYtWGiGDxzreo9XoxCHEp",
  "key39": "4Xb7V83iPnrRdou5gWdsgzZAL5ewzS24BHovBme63KiSKjRMo2wWUTpf79bsrjykwwrjFeg2Y73rxJZvLaAeXrH8"
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
