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
    "4DQ35uWPjWzXjBoCnvrrSW36b44JLm1qa4e7166uFMRDtdTN4kTSjZHEMoDLnw5ynSna23uXUwcMmHYiw53im7uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTxFgQNPXg277o9covFsubpNJivUmjfQcVLAFKFfixMp9E2jb1hvqAVN7zYNzokFJJ7RZvbHH29i6gVZzPR52ZQ",
  "key1": "3VGNHfUMuPWtkbVkNyScePPzwV624gSGUQJUxwmGbJxKhTXXXncUNG6KzC1UeaEsfZX5fy749rrNAFG5SA8Xsjxb",
  "key2": "5KYQ6Vk5PtbVWUWThoJ2Z9BRrDYEpAtt12Em3Y7ufy74J6DTzfTW8TFqEw31cf2ADTEPFLeoBzeVqVoKWvpWKjR1",
  "key3": "51Fug4xQ1fc59jWS4QyGtra3URW6RruS4uQuUt5YDF8RTWdy4sNAy4CTGdv3JerEAqJ9Jdt36hqLjd5Nq4vovT4C",
  "key4": "eDsjHWA3xmyieF6h6rfKkqPyXFpzkKA9wAiY3b2x8q6W9CMsAyx8ZBMn95okSdJMdRJKERXpwo4PnEx3J3LWZnJ",
  "key5": "Snc9U2s83TqNM7MiT8Uu6AajuCTvGB9az31y3Z8smn23UjNUnePdZw45GJrsGJwEYkkgR5BVcJMLGrg3kZtUQFU",
  "key6": "5drYipxZME9DPSHV9WqjsDhNFZJA2BXkeVw8T4NeD67QN3AfunZvuYpVq9oPaVpf7scvFC4MHFcR7TsniKHicJbx",
  "key7": "21MTZt6oAqp6pJdbjM9NgzxNWZ32Q7LjE15gte9afWDocqSvMRQ8BxnxKmbBCLcSL2Wjb7nncqXdL9NRsLUAxorr",
  "key8": "fsGR6zNYxh6UvcVGRUZ3D8hJ2tLJa96XcUmLnovW9XMWcBZ8kpwm567jh592sjHZigVLvQRLGjtW9MN3bd9f1aj",
  "key9": "2eLwFXfoDENKD5FJJmeXygLAL34PvCFxAfrz5WipQ1aM4jrAVMGH6FZgzctqR2MXoNiMPw5XPjvvqYhEwxfQRnrN",
  "key10": "2zdm9UNivRvo2AtpWecccw23causZAqkapwKMVbNENNtWAikbQAMDpb73VTKcpjWiREyUuwDAqBTEQV6DQXydNix",
  "key11": "uiKK2JaaUsV7NGDsP42rAZn7xPtrmxnpockv6PLWMLMYXzcmiqUK7AbKyWD5zJWnbr2JjYdFVTcsiS6obe6ZX5a",
  "key12": "A1icNmZ2n1TR3WBnb8yHepVkJmMduTijgVYYy3zPzeoNaPD5FVKJCBpLn1abpTz7P1TbmbaYoGdUNtrWDnLwZQP",
  "key13": "4QM1mye6MiQA1arhkqrAsxqTYx7rPRFyd6f2zsKVYMTDVw1W3B1V6SWhS4i5RuFNbtQTTh3hHQU7C5DGKXtn893R",
  "key14": "4n1Q4pv7PYyYHno24WgMa9eWr6unKMZCSUfup1uqVoJsPmYdRnxUFjU6By8ytJWCeWpVyhXVExa1E5BFHwQug4SW",
  "key15": "5ZgBMP8sFwj85F8EoeX4gYWeG794UzJ1goCvAekqSAQSRE6Us5berCRuTQ83bW1Y2ATtyZerWETDe49wKJTPzyuS",
  "key16": "3vLWgjp9p1yi3EGm2zm1HhovwUxHuMHNnp9cdy1XWQygp3BMkKeaJ1appQjyK3hAEVV4wN8m8a4JbeSoKRWPQugF",
  "key17": "3xqhWmnVXRyRmvUD2fiurHvuALcWoWsWoEWwKZ5HthoCvM8rLgak8e72JjgAdmjXoj9E1nxccajgxtnk5KijJ4ML",
  "key18": "53LbdgrqsLvWgCyMVbpb8Kyrp5bcX6HwNivLJXdQuKfJAPgXb4MaS5XQpcJH4YQzECHKy4Dwp8FtiE3VQGBeWoV7",
  "key19": "2mpPuzyfMqG4QKxzcaW83ZwzzjR8SskAqVMfKcvdhUYFhEYNKYk3Jh6VbUiRURTC5TpW8kLRw9hcCFxFoSxxZ8NE",
  "key20": "4nMYSZAzcpVUM7gXWBXRX1etoEUAHSPmwn1BpeuSprVbtiMJeG8kVc7DX1nDUvTJQsvFSiW1qhuwxeJ2i66Kzywh",
  "key21": "DbJyH7FvS4Msc4K1jP5BSbpDdzeZG4Fq7zWUSpUJ1giWpecvAdzCfz9b8Ke2wXGgdyBM6miuqYRQwEqbTYkWzGR",
  "key22": "4jnRxpFaztjrRddkdRQHBdmFSk3JSh1btVFEhTJT57PKBWVSPWDUyd14qiChPdCUndMNEijXFP6shupjJGpqVvn2",
  "key23": "5PVEtdLZBeKEveesJbNuUyC3DYSq4tqVoX3r2MaHojaEQPq2DV7Q1etWbDmKBm4WBvntnTLHDCuwXA7tohz2mFiE",
  "key24": "xjyx13gvcLbLNcdvAMsV5riQSaT9ABSWAy8PeEGXy1cbNjXwUVfnjB8jHYdLpDBTEEg3JGipAwih5tcFmpH46nm",
  "key25": "3e3sjM8wGnpJnsZv4bwokNRfomtEkmt8yrpgHcngQ5YXGbvMbJqdVT755ojtCDN8GxueXwSNi9LKGYs9Gaa6qTyU",
  "key26": "2DoCVbFmJBvqBUR6KAyjUrcMPkx7SyQEd6NLVyErB4kmMinCU83bTc2fZ5x4DCaSiHbNYW8v359eqProLTsFLyH1",
  "key27": "3mV9XpGvSbZTSstVMWvLKvzjoDe8tzkEwTqU46CyYLeeREfPoCYHhkSxR5Z8pLHA2mbx64tqxgB57GSEn7HeFLTj",
  "key28": "4YjG5RUcjUfW87Sfx9Ccfsza4jfyLKfXZgzBuvR49bfM2znJLYPpXbNLbRth62a5VCFGC4j8mBH9drr5y7FriVWt"
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
