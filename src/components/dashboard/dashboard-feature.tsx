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
    "2C2uJkpPeHpAKApP4JFzcDRDN3xyupyCj6Hj7gk8PWYwg4xtQ3U3VCbtnqRUkmyBkDAarN6LMM6WsfLQoMrLZhTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaRcaBrcb3BfGMnuEuvMTJC2s4pyaYpsJbTSubCr9jcHPaVatqi96QKVq7CZZ9j6UVqPZGAsAq28heKShDQiVKK",
  "key1": "5eRVtd8ZpaqvM7bVyKHroaPLDq8oidAmS32to7kwJ5NbfUJhkMh6PNiq4HtVgHw6esLEDqJtMQwPmbYGwmmQ55sU",
  "key2": "4nEuxeyYyoFpG9eKjnwfAZF7jxQqTEeiP7YNR4HtVqbSTEz81zLCaY6TKiHA4X7LYPAeqouNpEWEbhTHSgKNsVEJ",
  "key3": "5JQXciyv7qhzHVT42kMHHxDnDTiEEK7UffviRn6ByyxTLdYt6BXuA7EcyLNr6oX7iqKB5D1MLj6ioFHCHvSKDLFc",
  "key4": "2LSFzFiwkAYmUqAT81VF4XUmm4uSHFA77zF9DqvEVjjKspQqJzfpWSFEee4hKT4w1EyB8CykmXWytKUYBcQNsS1U",
  "key5": "3fZTzBmqVc2bQ9YjeggsLPSiANp8eZ1Cs7E6cBAJ5Kp2Hy6aYG4kLxZcxYpE72rQmjwhkPLgZ1Ri7PVYFPzHBEYa",
  "key6": "2kadp2kEvFtV5jDPKfxbqoUA2WBX4DhWdJWCcHG7kMtRQTBX4bquWtd3UkXmNUUn9iks4XUA57Y53w8ij3ba1kg3",
  "key7": "AFbjCEDyAFUFVqvCzA6ph2tLGWi1QRs3Ak5vhoeWZ1LajhnyrV49Zbp8GVHvgcpEhf5taeJj2YGrhAnqLzjQojR",
  "key8": "5Ma6YE8eAufLh4yTsd5CzvGiAhNSyGqmMJKkqodeuiZextXVbAe9SsFwpp3d9xsmfRsAMSAhnoCEn2CWKvUiNQUf",
  "key9": "479JN7D6iKX5UDgcM8GXT3C9Vd2j5wPQH8TrYYUSqx9qChshx1BdJPbi85yW4C2i62FmDt3CBokWa8UscwSnN63t",
  "key10": "2tr1HWTXRqyvXCj7Q2CMuTKTBoj3sHvMKtd2nYZn9jkZtR73Zec43vSf28srs15fi2VwYYdNuyN3t3HnCUWcMJak",
  "key11": "2YoQSGAFS6nXLstVhkKNuP9RRWb9drEoLyouwwoFMTxS8edXr1Zrz8FicQ3j6vHm4j7g6WWMBQXHKkqNGQjFZo4A",
  "key12": "56K9FRFokvSKFeSZWgCQDepnTrwqrAAJ5TEsjzxQ9s7Du8Dev2ExedrR4Tez1F6xKDtVb9PjRy7QbaxPND5WeZB1",
  "key13": "3d5kRXUiqSAFTycEbEeH1z1PTKHzuYQwS9JGt351GZFoF2fDK3QML9DVcqv51HWPVoHUp7SxevNBXuV94Fwgo37w",
  "key14": "uRCHrCx46zTRt2M3MJnsjU6t2YpgnMXfD97WZkkNDaYQX8dtVWJnmKJnwQnxNotbtjwNKYZDzHNF5KgryiNkwvH",
  "key15": "5RhCS6YKJJ8tzKXMyXdUHLWLEyrpig6GMTndrtc5GyHpYk3tWuYXRuugDbDVFCb8w4oFycSK8nXsyR8BUQ1f2nmM",
  "key16": "5RroUgjfFVa65Me5ahYikPGXva8hc2wZh5vbnEQqyWZCGCCMzM3GFHPfpXg6acEWEXuVSyGZ5kXeqxVEcZJR9PYM",
  "key17": "3u1BrVKTMvuKu5RG6HR16yHUyHF7v9VpWXXvnBmtQSBT1q37ZRwNo9LZ3jdgQ33cGsBXMsFBfQv6oYieA9Xzx5UL",
  "key18": "4LRkRpzetQof12Pxhi3Jh2Are7fXkocWuNTi5YmTWPTUvLkfekyDFvTYZ2YLjbSFoDuZhCSx9BLLXAnCYXgCi8qf",
  "key19": "393Zuzv8rUy1Zgu79KW4ZHnvchPFB2uR39QaYy9znsXyrZ1VHs9iNuw4KUz1yT6vhURjo3TvboiW4jwBVrHWhFtg",
  "key20": "4o9fm61fVk3hD8w9Q4Z438RvuqzF3wXbzS7UuG3WwknKg6SGMwMhkPsPyi13YpnSXFfoa7XFWj5RtwSaaThaBFVA",
  "key21": "pvBXKA6CR2gapw8LR2o4sHgR2D2jJq9dnq2tYVYZCdc9JeGuiUxWi48bmCugjR3ZDz4LvvD12bhCWMSZ1VqNZWt",
  "key22": "2mLqkDHmMW4pmLJUdf3HhiEZiNt58nqKtLV8Fdc8pn2GRc2fTTGFzip4SY3xpT6CsEwWqGEZPwCk5ypWTvVaQzmJ",
  "key23": "3SkzUMRxhrQdRrRJnjo98N3vRERgLmZ2gmL8idhthDmtouAQMfdQNea9YqhNrV3FSCgriB5rQK1qkvMzCLuGeEe3",
  "key24": "3XpZLNz72ebqBT5xj2J8xJapZoQ6JiL21ZxNzvJmmW11e1VCbzE7jo4pkgRvi648fYJDbLR2k7TgCLrdDDQdLBe9",
  "key25": "2iYwEPc6kwserbbGviShpChtuPs1zhdcb36sKabDoDLHbWXF86AnBeKvj6y45pMQ4KktUTHei5kSgxtxS2Tc9Z3B",
  "key26": "2et8GbqwD5vKtWmDSpiScC6pnb26Bw36XDoKsMYAYnpTSaG2UNXS9a3vaLetGFipD6sPvu1H7rHSPwSKaiTCbSPt",
  "key27": "4ncgVCPRt4787YwobZng96go48UpbTdVqCsqUpc1jip3rAdG7GpdopRScHdGnK85o512Saq46w98pdaR8wTAd2iU",
  "key28": "3eSPcUYMNfVP4Wkp9UTA7SHfY6f9MVXpkEiT9r4j21qu2447aK4rd1v3wpSvfTy1Wo3btU1ETyAn6a7c8b4VHGfJ",
  "key29": "gKQjkxE3ro1tDm4LUBH1tuEMYzVmPQdyU2t1vmeWoVHyzVRDoWQoPGrHhHhoHKPbYBv2FgVpWmZ2CMBY6dcXiFN",
  "key30": "579TTeRkwRMdRJZFi5TroLq5B9L724s79ywQ9G22NEPWJfPNjq8weFTeZEForjQHRCiktfZ1tHDHCUcnbo281S7d",
  "key31": "3ySimhKALFiqXp59sN7DgrorjQX18u3pnr7ecsF1pZ8vK4RS5zSbEfC1wecVCEXi9mJe89FhQqpHdJLKHt6pSMrw",
  "key32": "57zdTfGWfKQu9cnBQ7WepVkXUakjwxx7eZHVRjc3d7fiX8WmdEk8Q79Asmgh4MKP79ERjPg6MQv7HVEUM1gBkHUN",
  "key33": "2pcHEJpxSBonEKFDLGvFTUVHDD1yErX4ouQhUk4HCobTJrcm1ZuRhFnXhKQZ1amxSbay5j5exsg3E9Ci1FAVj8Ao",
  "key34": "24ggrkrG2GsY1uQTr9Bx7W9WYykUXEFFdTbUpWPvr4c5C37CVHE1uHRAvuVVVkeKo2DPqXTbctEhbjiWT2sYHAhr",
  "key35": "2VCYNmk43ki9HHymHQS85byhJK7mztnf4KzgZAH3kmedJJdBrJuRhRXTdsrqLCp6psXJMa7xr3As7iCLaq6SHNML",
  "key36": "3FJDq2bz7m9SPctSyqUaMThpbvWZmg5ZmUbEkDR4dPzAEs9mE694caLud6iyGjk3dWQSF5NWyQDepiG9exkKemZW",
  "key37": "2LLDjqMKW5AZHjKedstzecWYB5WHvPMqJNpszFS57LCFMh78nr6ifkgVNCZXJNy5bkwJWfYDNCGj74b4GmqEMXgK",
  "key38": "4Lh4FTLNVdfT1GPrCX4Q46raupEMTZH6y4bfBbExFG6kvZn8Uu6XjnBWBU1wDSQDC3gk6KxLrARFP9kTESobDZXz",
  "key39": "5pQsMVETc8KUv1QMStowvcLnrqbUVB4YexsoAU9X2htKbnfktCLZCEryxt1cof1n4sae9yH142uHUXhmurcD2A5R",
  "key40": "5tbUqGDp6L7Wm9Q7BZyBxE1wANauQugKqyp8uQPR9zgSdLN5PRCH9kXt4TCsW9pjQbHazXQinGVWCKa5PRWcMSy7",
  "key41": "2VcfKLjGgzkJnRLs5jeFCiLizMVAi5hh7geSQe35BaQXW13w5Q9mahVqX8M9hsh3fdYTurcYFLHnRquSwdH4anEN",
  "key42": "3xLYZV9cbqS9rDc4aKeJRzyGavE5BpCqZrJ3Ss2a3tWs8c9xiyv3tQwqN5QcbT2nggSeiAeGPENW2gBAe4H6vg22"
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
