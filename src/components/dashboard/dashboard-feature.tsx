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
    "DERgfnN2eAh9krqjFf1iPSECCTEfyA4fqqZHi5ksh3RkDD4mHFcBkhQJafL7qHJ32rMSTf2EPCQgAr4HphT8gx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1m2SM3cfS7MxwhDph54n82ZQR2gRra1Kn9tBhBQ3V2PR3GaZWnuCwxTPM91XRcmwiceps5SSJVyEpWGGihkVei",
  "key1": "3ZcCcDNUBDcfyxeyEUrpqPudj1e6nMHZMgsmy8AzJZWicC4Ywkq4yoiDingxC1ckbQH1dEbUEhzs9kNUqSy6c73M",
  "key2": "vQ9o5kcFKXLrFXenTPHwtgf7zyM1R7U46Y5NaJokafxUb2cThzqN7M2ztvZEnjwvA7L7qJYRYtZx8HzSpuVXQQN",
  "key3": "24ACzbUbTR9FLvgc7nZR1VxfzQ5gSWpAs15eu2kZ5Kw2FXwr3gA8XwpnUs72g6VHhZz8mjUursQUjVN5y4MnTQQP",
  "key4": "5mZEWv7YRxSeJCF5f4oeihDUihp7FgD5Su1ffJj7WJdwKi1z41uaa1wbwwLN4uDqj8TTnx1X42N6Ht5HZZMP2tG2",
  "key5": "3Jvf23Zi1i7q6AJHJNWAf9uoLpGcHYcQJKmiZyojHXaYxtEX6QniSAbkccGtU5P53b1V26Bwr2hjfa6D1fB2jHwZ",
  "key6": "aLDD3nv7HNssdTJmKdVp9eQ2kAimfjAuuWi9tGJaiT847JNgXfrbUsdkSq68UXkRs9Mcyc8sfAqqZ8wosSkft8n",
  "key7": "3rzYs4ZmN9VzsBfNeab3pYrDWtoeRvQhD8JnhtcVfKiMvKTokuUpF45o9FfR4cBRdEM1pSErv2FgptidkLDRqaV6",
  "key8": "4Q9gDmZeenv1j51euPHfBSDErQmm52XW8HuXLmK2RtSLKzJE2NNjkxMAZqZEFmidcaf8GUYRhbc4PBMrtUCi8Ugm",
  "key9": "52ySH9RDVae2tyTUm8gFgCvcMWdvuWQdfLEGm9tJD92SmM6aAYy1Rgep79UdVZFgzfb3adDkxfCVbCJt2Km4pnui",
  "key10": "4jL55TvGuiGHaseGGhbF5jp1z8wuJCfXWD9igPsU5Xr3xwsGdiVGK1ugbn4UimxVVoLcaM4LG6LdT9MTm52R9vaW",
  "key11": "V4dDUG4vZs4yNrDPSzPzAGC5VNb1fmvXTqVMqZreWbjPknJVRnzWa1aPtF6BUP7veTEy94rSL2K7N7yGCPvWh8M",
  "key12": "5r9hrZUDoFwrcbxfhLqxJhg46X5PjtaKUTbWsGR33qH2916pChuAaj7wezkaY54DjPqudhjqm5SaNuAyLUzqowfb",
  "key13": "3VQb2P3xfx2aRvzPkNCPf84WoW8rXR8U9ADiLogwo6RrDAX3vHgdNYYiQBcoXFioB6vW42JHUkcyctjpj9yY3w61",
  "key14": "5JvmAL5eagUexULHxmbRqKRdMu9t8u7BFLabViJzgyja87WdKBbGYGY5aKrYsFh9fmSkwQK2Ror4ALXTNEVjfnLb",
  "key15": "23R9JSKV7Ze4qDcCC6N55XAm6T12EEvk7kmvyzGURDEY9j7q3SEat1rN4b865mGMfBGhaK749CcqgZuEtm2zZHPL",
  "key16": "4YKiT2HWtZH7mbZNs3WhXsULqWWAZBDE7KkXe2hVU3g4YXRac93ck7fKxs8ui8kvFDBhwbpJBvKAWpYjsu2rjHdT",
  "key17": "5ns8wxYuQYx3yR2zXbL9JpAfE2XDuPdD1upDx2eUeqd1SwpxZsT1R5QnMFo4wPdiJaLWUoExDMXDyNE9fG9RwVxE",
  "key18": "3KqvwsFweZWZaT6vdZd488xgcyZDpPQZ8njgkMn1JHVXuEYffFgKhi1LmbCNQh4kJZc6nzfakrqiemVqUqycJP1D",
  "key19": "2cWTSWGm5oB3WJXxKSYj9xGSjCrWwHkWn1wMLvbioCJXuaLAMhTGVVJNAFmBs9DxgT4YA2BAQEPKsh7RZsyUGejL",
  "key20": "56yg4WgjoKMXTQuiCShS1nfjYZrnnJKnohwhb1r3BBVsckVNxddNruJSVhtkHrkop8V2XFmdjKd1dbqnPA6X5p7J",
  "key21": "59TK5bqGhEkf9aNXDmXepcJU8GjnheKzkFB1KLjzg7QJ9XYVqoE9TFNjD5TjczSJDgsxUujkMqDhZj4NCcGkeTL4",
  "key22": "4uYPJXc1Qc861GLpkFMb1WTkWEWBtuMVDYCHkhLQDB34VS5CBXrpVDdf1vLPCn3wZcYJuN8BsM4pFNYdf32kVKff",
  "key23": "3oo8CG9K1i3LCVvRfxHaBZPgoKmphbCHoaQufTPuJCyUf4wGDVyFKXH8gdwFkQV3fFBP91iSiAAjnZmr3kNpckkE",
  "key24": "UGtFsKPYWVzBjAnoQqP2PYfTML36LtVSbpHNBRAyeSMVrpjm8eQxochi2gVkQZbDMmBXwzaxGWM3azCBRRWR7Jb",
  "key25": "3Te6zDLhzQuTVxd1sbx1roZcUcLv1pEGdWFLFBGPchNzck7r5ihsohM7fkKBi2JVrmPtAV6YbiJGrfHV7ufT7Yi7",
  "key26": "28xyekyThCoKN2T7srSdN6uTdrYxGKyz7U97TE61L6FDMNc3vhi7hYtSK2E3zet5UYohC2wEkieTLjtWabg39HS2",
  "key27": "KWDNjoUtG94BPiPnGxhv6QGYeukAsbL9B3f4eHishH31HtQEAHtzq7ohCRu6VQq86QmrWbygY7xEVxiT5TzraC3",
  "key28": "2UErKzZFyUf35TbBPfS9ZywuCGnpfKkGHMXHd4AP6okd7HyxHiTrcWjwRHUSZxYE4XQvTg5YTVCLxD13KMpd7dGb"
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
