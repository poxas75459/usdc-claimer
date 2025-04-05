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
    "zt4ugBEo8VNnzAdUr2BBcD9V5S1tYD7WkBdGRh4CyM5hSB1DxTxgJ3WXjj2eCxG9AQB75BNKseMdBCCrip3Rfb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UiDWtc4FgtgvfvsqvUeNfnM4GNL4z6FgdYdZvLdhZwC2yqFJZjWEdyRFCScbEXHn2wp5jgDXfwtSNzrMQ9rx1Tv",
  "key1": "5Aj9aXr9MaJjm82r3ChWmfNSrpr79JSWm4UKPAFvHZhaZKUjy1LjNfz5CH12WvMXSMmpet99yu5UwkRXeJBHidb2",
  "key2": "4YJUgXEWDbAnt97wfaNvzj51jEr6B32UzLS7WzwJJBavVECRC6PGoTLSjfzQ8cHHH1JcV6wPzQw39yfEHkW9CWsK",
  "key3": "CZ3xeojufoZWzpHd9DeVveq3vEmEoJd3fKdhP8Q34gwPjdfEtAnBK2TFf1uttwyAbVNFKeyAEFkNVofsZbWST3U",
  "key4": "3MXbJDZ5XHJ7RvfncrAphQwor5nGxMSd8MSUNdmMGNvf8HijsnCXL2preBZuaA9PYd4okfAEoXQVRQBhqR6eq3Pg",
  "key5": "5jVHseTpbzB6KGm3oANwvWRXFojzookXHPxJXWD2Znz4f6NdjPGNjRTWdZzGgwzb4q96E4ffb1N7c3GfJk2hjhKg",
  "key6": "3uAh3dssoGqAiRGT5bpaKZZPh8JpYTNsPAEJbkfMTqEopKDdANuPnRgnrg2RJgdsELhX9ShVjEVLjwNFPLivYRfU",
  "key7": "3QsJJHY6D31yq5tXhb8xJTHey7T9AfbhJEVsSMR2TBeVYDab3jZkpbnFAJUN4j9zUtafYik2MBPGswKhngoruqAU",
  "key8": "3MfezjfqwFSr9sxNUouuGQsYxU5KRR39L5pso3tKS8oyyd9KkoW9JZsSagBfqmmJvbMbCAzr16ZnBEfPqb5A649h",
  "key9": "42VRXnmv8YP9uTsiWLABCJgLBHMBb3a7EXckTnK5ohpvB8kBVzxu3x8qFhvi21GqkDgZwE3QKRAEWinjDjptw5BE",
  "key10": "4QHq1q9KBD8ag6J85DG2j4KbYcKPrrSCVSbF8cTKoWuGEC2c3GbRtDhByXvsxDMGkCfAA4Dg7t7sEGQf4hCjhNsB",
  "key11": "113wrfyQdfN2i9qkgGmrNtZokFo9Lrxd6MAfxJ8i8doyXA7A9ggdWbAY7ZJsYTwFYyq3JpYbr2TpmfZBbUZeLu5",
  "key12": "2igFjtnKC1u7BqLXEuhwzk1kPaXT72SC5aUkCYuD5UJT34QZYYo2JnsUL6jUwbX6aFBoevygiFyXiZwuNCvt3K2R",
  "key13": "Pk3uGFzGGB6vToDUVb5A5zh7Q1nJpqSy2yZVMCKJrDxWkBBpD35F4Ne82HpwE5wJaiKPcdufHiXcVHh4hBkGR3D",
  "key14": "36YcETxLsoRqXxWTLFKe4uquBeCszNNk1DixW5Kj8V3S1VKgwD9aodedFHmsX32yq1UkuztoN7W3ofEtXD7D7TiC",
  "key15": "3on1hLeKLP9qkS9eVtMh5nKeKLaq5Mf1n9rbvZzSXEjhYbiuRmNAu9KiyccMXtfvGTnRcR8e7peyd5ykmv6oNoPE",
  "key16": "4JyCjP3H4p79r6mX3DX1AxDCpDjm5LFDZzJV6g9Q5Lb1vLv3tHHLb7mxyfa2mM4f4JhCnCeaPSEtrKRVzUX1L9YC",
  "key17": "pnvsxipdugFpwYgSgxLoVHECMaskL4oAKGzie6B1JSz7jM3Dv7c4LXTmDTktkntdHzSKQaom1WiKKc3w4VGKBPs",
  "key18": "3v6XgmXhgx4vYXNyh2rbZP5u7af63NzJiUNAgRPSi2EYFNN6N441JxuuJ2uaZkwAbZ9yGUVcPtsvQmUpsABR9Gjd",
  "key19": "26pyrdp9vG2V6TbmEHroKqoRHNdinT1AZeLbgYHEbxgmdw6AfXJ89jqfroroiV693NA6xNnTTnrtEpYnL8iCwAB9",
  "key20": "cJBWjzThAuR8xewpMM1vc7TYhCAdrHCBmTpoMYqiuvbxLjAPyMt6Gi4WnX82vyibPXbkNTzjqwZczGJYgFRfgUi",
  "key21": "3VDj5eK7RDV4pNqN5qfEsYupkXegujSknZk2yA92kbus84mvWq39Zwd27dqc88NBQuLmL71D44N5LhsZJgZumivo",
  "key22": "3PsD6tEtLkdi9cJytCjVGvVQ4iTcfBDtSoxeZmS1LtdAW7ZiRf6zMJPRNAVefEUgGYe52oqaWtHNULurtAoiL5sB",
  "key23": "245K9pg5UjHeWd2otf2uW4JgPvRtcugRRA8S1FuJ38R13suaK2bqTJkvAkcoZ1tiiX8GcMFRfqdkSW9BjXXPggyQ",
  "key24": "44PdyWQPHuA3BHq4f2t3WU3nteVLGrtRsCQ1Xfck51aoSrq3WQWjJhyXFDE8zQ2L1AesPqPeMkHaTqqn64bPgtrY",
  "key25": "4gSpZhmHrENkQmdpn6zdjhtr1CsomCodFS2aoewVmUuLMPat8vLcyfUoptjAtjZcgrK1QUdCucbpzp4jkuoU1WCS",
  "key26": "3Vowj3jkXo5qFZ6YHG56Ymj2Pv7BTgDpVt7xSBgVV2nEABRDHxFusgP6GRLybuYfVRjFyh56P5tb8gmxgbrMqSPE",
  "key27": "4yCB6CBdDupCR2cYdqKtzJdZkJumRqVr71t6ahBGhYa7fdHTs6AnRcAc4gEP6kgrDFEEE7SnyY8pQYQqwRYzxs6T",
  "key28": "62b5mtTjqikSY4YV2zXfckSYbJZusT792i8BEGtNYo9U3SLhpmDvSY8CyWuuBTTeaRTMSFXD6FhvyerXLJ6WHswa",
  "key29": "3o6xoRVQaPCbG5SYu8yPop6SM31mUuJsFMQFXKCBYq5UNyN4LxLP2bcoMxmUkTX89aTcGuMa8KTV7REKqM1A3FVb",
  "key30": "3faBRh8FRPy6Qozo6TVHTy1cPVfXRYkom5hJHQa7FJQbxQkAh6LzNVnnpd3ppWsKLfUf4zipyfyr667ahZZRreUM",
  "key31": "5NQsKwKkEx97x434NTt3toUbLRzKHQdT5gVZ3ZmRhhMatKSe7sSUBHTHSM8VsYz9N9batT24mMVpLYZ6AXVkbx3L",
  "key32": "wbpumGVij7owjBm2irjiSayUWKzstaEpCU2b23z17yEpoZCqcPEsQ7v3A1hLiLctW8XALBgD2do5Ls6D3sS65xc",
  "key33": "3PWnehvhnkZLXPaNUET5ihMzJfdmLkZZR9SdhHnUw7TLN6XuRtGhtuDPpCHAvBzdb4ct3RA2QAJFYpJqwTQG8dWB",
  "key34": "54LguTuTHurdFZvwSnwwS9o2tMH8UYoNJZ8uvsCMnVZkeyJ8qarXKThhKnSkKP2M16CkkyDbuchBJP4aWY4uP1tT",
  "key35": "5fypu8mgP5rnYad22C4AksTiNFnbBpTDKm1pQKhUz3AovUH9uoGhwkEhtqfUMRhzSjM4LuetMp2xPvSJmuQXYMed",
  "key36": "5DA4BXwqqZheEqMfFxeajJAfHrUDhUndohpnNRHyGatjTqY2AhExnz11BQyknddDHEyE1PCa7AWg9ZemhR2uPUEi",
  "key37": "2qFqqh5K5tBzmhJ4aL7z7oawTExqcgnHbZvCyvkrG5Tb8LbcWyr3n5wMiBmCPf53fQCNitQzh1vb8aAJdZtMzX5d",
  "key38": "hdwaCeTdjpA1RWGJgzkgPkFQnWmGvA7YVwDdML138XaiJA55Ws3hJud9eKwMUeWA4cinPXUGnX2DzSZ2qYbebZ8",
  "key39": "2371w8m1xzD32QcNCyBNc4AAmh1eK1rqoqZt4nST9mUGfMhQ2NmnSECuzH6U8b2hxJkJsHYRYevQB2bSie7kRE3E",
  "key40": "4fQDCYpXtMriqwUVKsGxzzbnaX2J7bB3Zm5vCsKwp7nF8T43444hXhw7FyqxUXs9vDmovLMYS8c4MFkFwcnQWaSK"
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
