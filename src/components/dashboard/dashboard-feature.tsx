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
    "bJFJ2p5QzatoDHnFfcYfASpLYsuRsyK6oY6152zHB3PLM4ezkLwHwy6oQP1widTg3MX8JrBbjw4nJNvaScc7YqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kt8kiNRq8iXdFx1jMABujvPjMHQ1gTkNsomPJGqNHss3fLFNww5boeHwL1Ls91JVzaLxdXtdbjSv7qJSR1uagUx",
  "key1": "wuHhQrw4Aip1DNm1rq4ug5BMccNbic6mtcuNLanRpXmszAaY6qwkduVweJJcCA8yhYMuaEYbAU8Tsb6ThD8tBNh",
  "key2": "5p5Hhc7JrqhrTTozDkbXj3QZaxspqFWffc1R52T9NzsHNVeNUvVLg6sBcsV1ovNTDCbeYUk2gDo9hTJrNiZCLu1P",
  "key3": "3hJGJAJHF7mBasDEdsKBZXS6Thu3MKuysFd82qE3WQMSuSupPZynwrrvzcpKQoJ9WziKR79BWFCN22NEY3X7c6u9",
  "key4": "4xnBJPBazuQwMMYE6LQgVHd6xi7Yi4VD32MqobkdJpbMsxseRhGKoi5n1Nidzm3BTCJsrrKYpCAFLoxb3AJMdGqb",
  "key5": "3HxvkqUdWBXtuhp4YJggMbeXmX5PqJ8GqNpg64tbXchyu7aGxhWbHfKwLivStbs4c6CCmTbr8Zm3zUMMKuLs1a96",
  "key6": "3c3aVfSKtS1QCK37VZZbRfUeuPjFZ4FcgmyhGAe722Af5hXT69fxRMwntqJNuXDzopjKhq5pDnpJUUpWfbdTdr9U",
  "key7": "sGjER77oZSau12pVax5W7avE7pHtVSgDV6M1TKy1D8pwDnhPJwuYe2KXmvCH3ZNAVXYwUUzzMxH8ieQVsY7UXiY",
  "key8": "4Em1pUKSQiTMz89Q6hBLMdyaoMdsPgCbKPYvfC3fZURYsBejCvFT8BiD5nA7jRq3nQbK4WeyfgyyAgpX8Y3DNycz",
  "key9": "pn6hQEhvxEbt4dz2BHVgWAoaupoKMzaoemwzEPAtrJa3J1E4aYwkdXHmHDEoyNEz5neKWuJ4JJLRyMHg9RPgv5D",
  "key10": "2bByjujKKcN979toWvSsAKDvfWyk7KRTrC5GXYHoN1AjdN6Ns9Y34Bw8Qtqi4Vmv3eZXf8kUsJjrE38T5VsHojUW",
  "key11": "3VpV1aWxCe5y7ZaMaXSU5SXnf7kAV96fjy7s1P2hE4KFEix5L5uX72Aph1Pz1rHGG92Z9LjwdKdVFeNNCgsvU7Zk",
  "key12": "5SYrC4r3jmjoKFvvy44SRUkg8P85FKM3r9MUGm99G89XvKBbhFqTKu6Vr5b6wu674RE2MsWUxPep6zdSVuC7WRb8",
  "key13": "BFich6ozd9X49Th9sko85dr4XVuKytWFkqbHswTgqES5DkGsobFZ2Eib1XiTfTpJDTdnB4hnTsLKkHcYbJEnimd",
  "key14": "4boHGXnMuL8fTJkcwszY82vwnjZghpLYKET4cy4RHLrQCYjSwed8dzFrdSGCw9j8bKrgMosgyRgqcDRZePXpA2vg",
  "key15": "4MqyV7qYKWTXXJGrUBHx5Yg3b5ssBdMpWUNZ42staaf8mW8k3gJMmxZxDqvscXLc8Lb56b6Y5PKwmen62P37vFAK",
  "key16": "2Hw5vGsw3r8pMdMrgTsuJXkfizAJACHjiuvAGHL1upHns8DPojaa3p82dHwV6HEwBcj97wqppvAw16y8w68BnxAB",
  "key17": "5Y5p5Jud7vV5Jxv6ns6XX1T9b8M5QQEqNMiJBMSpbMyRsNdiav69SVMUyNh9dyXK5jbcHuxKSp2SvS5JPmuSEtKy",
  "key18": "3NmHPfR5twjq6pYzXa22pG81J9TwbxnWqkC4HBTPCqAjfFXsTTm7rM9TMSpE1asgT8oscVWdb2rRPcaYFamPUPEL",
  "key19": "2TW32TTBwkAkE4AGDSuTLgaGwTPAjZvtuVdWoLjL15vVH1vJQausSF791aSqC8Ew4VrLxbWzr8ieWoWXHJGaXxiL",
  "key20": "5A5txf9a3QYTsMJxe69SxvHW96LMCu8uZ7UkBz7tK5f3Ln3Qjrk3nidiyVpRASi98f2Bop23QojcsBWPUtEkjXV8",
  "key21": "5we3vNyvA3JejjbLhckJAsUMxwpgr1TiG7huX7BAFCpUGpJVJedUGYHPJu36wgvqvGJ4yH6WmpCxsMyK8c73M1mM",
  "key22": "51Su6LBoRjBLnBNJcvp8miPqAQGCLmjXjGGNJWeAaL6sMgCqSoMhTHsUZCT18pTrZ3B112jtcseiqzMC6xkYX2GW",
  "key23": "5VtESXjnPdcNKubagceAWfqQXSxevTZDqgxkT5NAcft4E4qKbGhVQZCmN3Rtf5VvdmgEJ3TPZ59BjWEsfhxt4kWY",
  "key24": "3ZxbZCEMVyvZRr6X7bPP2SVbMCA6d2anccP4SHj2A59YewbsSUA2useM4axpyLHyZKLacPU6Lpyc1diZSceHv566",
  "key25": "2oBCyvqsoa9PDCT14nLFJZYvt3CuCDj21bzYYAhSbAskMBFdFTNPTRLHJ2uXMUmhczXLVMYMKZmKhTr6ybvE7NZC",
  "key26": "616FgidRVk1HMFyZJ34vgEMs7a4WYNk9kvZfeJEbPmW3peFUUGn6Pp7nejfPpVuaAN2U4wtD1DLWXvcG5EHWq4tF",
  "key27": "5kGjZtC9tYdTo9z5At9oxhv66WgCHvh6JYWkfPCLuWqSukmaz4NJjLZiH6UoAQTQqdHuoWY4JRvYXoSNZx9TnLWj",
  "key28": "56z7itHw663jFRyLDp5VFZq7dnQw2RQhcrNpUheYfrYpPKRUcsapuHhZ7XeNaH5Z2MEPk7LuUzmK8ZasL1pzELkZ",
  "key29": "xATEhzhUKTEUBZJjSC7N8TSBzpzDJ81LRUrwwW7S24XC1NK6oSg2Gk5CkFQSAP9oKvESFHCfukZm1K2ShxqTAd3",
  "key30": "4uYzmmJUgV9A6o5kKcNNz9UQnRio4yjkwtVjpp5ZHUTzzGTqMTc1Xx3NhA2cQtcFUzqkf5ojhRFETCNwnBTqizfp"
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
