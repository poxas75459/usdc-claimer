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
    "5oKm6YWfXCbHAAsfQW8P6VEJtJpLTRdg6KrQQkipvj57MSifqB5UW8F3ee5z6jhKiC14w6Hp61NfMj4KDsFnB1fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmRTbbkiLz2GFbpeE8NJdShoE9RLgHv69jCXUpoPJySm5koqajcgRHEdskSLTJiwSXJMKMmEzQT7b8evc4jhmf3",
  "key1": "3RtLyZaQWvPdvLAci4AfyvwEPTuBYGXM3J9fta9ziwsd3DMKhBAcTyAxWoXyVq4UPFohtJJHdjPU5qxLSGYVPdXs",
  "key2": "4mobhBP4zSidVzT2D5SVGLShc8bKJcUNNxXpCDYFfDj2NKuuRtDiJwrA5TLwvrbb7MhGURT8pycKPbd4RToqYgoY",
  "key3": "3F6Mmfx6i9u7uGSBLjmFJ29jZKegSTCGFxHftrb9F5gUo96y8aN46SjCVZKUmwpVC59napTHEBnVApauBP2gPksu",
  "key4": "31KDibzrwLALU9uxQuwPNq38hzJhY8fn4y8LGxBDg6AUP92GCJo2DECthudD3rPGy9JfcobTcSK34mfeJeDzJpfD",
  "key5": "gHJfXhCTjjwquhU64GSEJYrUwG5Hxysz6hXTDGV5gLpUBGFpwLCYcuhjxmdPLd5JRiv5nreWrECY6f6MVfgAofm",
  "key6": "3GYnznGAZUfLDmFxFbRroeXbhCJY4Fu3qERqjPkP3zsmsQQw4yzVbkM7emQDRfxBrxj8EVvzPU2bEFQX3ybVCCNr",
  "key7": "3ZDzdUvSP4WcL32yzuiXp54nEeHSN8EGbukR75vDAT6HRwJR3KEKRL2v4chxWwHwVMgvQj3thCrem7aspjifpPVJ",
  "key8": "3ENGHv8jGjZSj8WGD3s98fXStAhfCAArzLCnRy6XsTYc7eTojHhmMyXfnNgLJ6pJE4nNn2PoWdjtRWxc3oym7kVE",
  "key9": "3JnRqF6Fo88AvtzQs4L5JKBM6NUAyTvzseFzcE4CTBEKGG96VAapbn6Kx9tj68cVqbiknfK4GUr72BZpDJbBKhh9",
  "key10": "5WJRUFHST3Ctcn8NdmUEDW9aLL7UvEp1joCBAFTg3Bg4rzUVP2ybfE3HAZku3KxBykp1LJmRRMoC9DTgXs73mU5q",
  "key11": "3Zw9GCHPGnZuQLGzWgr2tjuZnH9jh37Ghs4YxQHbaNxwUV6zYgDNeQHMNdXh263xRk9TN1fznfLhgjPaHqRcMLoU",
  "key12": "5EqiJLVubQK815gLwQDfk5U3tR6ki9Wu1JjN2rfZ8zWvX99tb8YoePH9GnUyKfJfeLgW9hRfP3orE2MbFi55jUpo",
  "key13": "2jULQUJSM71cpu6mpm1jmz5p86S7ScQHob5F4noXq3XpXiDeGELUrHRmXnDxFBy3Wa96QyDLbHxD8wERc27ZcZtW",
  "key14": "3hKY4d53YHac7pjDkQVGkcbrawbLSedtMSBSUeW28c8ThR7ztggNM8bBwknr1qqCwrdEiWZuhZwiKGJPnJvoKkKu",
  "key15": "DFTusF89HmY9k9TejacxNjLRMRnUbaPC3QXg9TxCxopGjTZypAYv8gcmgiPUt1UJvW1C2URXZDVUbPAMvrXAjHH",
  "key16": "47fBP2bxddF4uyxM2TvT5y9Y1s9iVttqcZvnkLvdG3HzGPm9qtBEsYdf9wfKxdon4Etsf8DsvhiufR7T622cNMPD",
  "key17": "4vXS2VnaetbxTiwm9Y57gdym9GLLMEuejxtm7YvU59xixw7TTQwiWnj2TvsMvmDynkjZEAcP1n6KkhgU7eFh2185",
  "key18": "4GiRDdNDnrBc9ZvJer9eRWgJcjG4Y1E7noY2heLsdw3RV3nWfk9v7NGaLs3tEq2boVmVYfjpz4Txp1aG12UU1Zrf",
  "key19": "SQAkcjuihSon9TAF5CKpLyRWka4jG9uktkGbmC6fdzxtkEnReqA7v4oTEjKvGNc8Mpvg8Bn2KdNEeCSDcLppwnr",
  "key20": "22Q3R4a9weWDohU74XmcjhZAhqCQteeHDMeXxXb1jP4T2QgjjNBqczeaN4tgeDDokU5F4Z1fF4Ge3TfafXbhVnUU",
  "key21": "uzoSEtFjErk89TaN44uKmYXYc5mVWrxopmHKXT7zv67R3jgAKYPdCPX9PnuxFvXeVdBhS5G6goZFqrM7u42W2pv",
  "key22": "5jChSJGoLLLLju1Kxj2AN8WJuLnF9zDBvs7MXMTE2EWw87rC6GyPtGzQER2hj3vCZTLnJ2dBHtcbQXumARx6nACf",
  "key23": "3ThgN3EmATbYSKHkHAELV7TYcUmBEqsWXzL467dk1JNFvEsdb6QuPKFR3wdieG3CvsQJW9r2GbWSnQjwZRuZvwMc",
  "key24": "4CAfg3oQXGtyj9DZ7ikjCenWLkKRNREzSYtnnvQHBYJfq3GHxRxLMv1wGMNZohLVUfRYXH2Ak2Yq9zzEwmQRgF89",
  "key25": "yvJWhuCPMRhiQGdYSgUFdCa7F6wagAEv37t3n9pAVxP4sA4B5L1EnNAdYEy4GdTm7ff7NqFiS8xfuqyefJaY4sQ",
  "key26": "4uE3VszXFaVwguBGCXaw8Tgckg8jaGPfR4anRcAWTe7gRcf4kyW8C9z59gDD5J5bRZugVPiFVAThWVy1sjhSzNVk",
  "key27": "65rchrvYkVReEcB3Gbf6TV6LBGpXPvFcNwjM133veL9GYW3TbUBCGPdeEhTMosQqpLCXCZnDs1hudqtpnxErWamw",
  "key28": "3SamkzJMGKA8go2i9vDs6syQsRbZPebCwtD7nhb9UQfH2BG6Boc1XUuyzG5zJe6gjSH5mpUJcPoLZCeZwAqfy4P3",
  "key29": "52J3gQzyq1pdKximUN9BrTWVLr9v9xF4DBTC9PKWT6Mp25N4JpXyxQ4Mdva7np3rt1vNz9aoXFGCFPphNWjLAvzW",
  "key30": "4UgffyCpQHy6RL8S1ysgbGJe8F4mAitHnmo8vkz7nfDwKuDHJV1SNimawb9sURPWiSXa2acv53oiGtgXvYJicUAe",
  "key31": "5DtE1kHigGrdpuGHMJcEFmfD9nF48RJSHbTMJH5xZPnxj8SemgK1gkA2FYMk3F89EbFoHhXoaomSmXHSe7ChpSEP",
  "key32": "21WtcFc33S1MifhUutZTFBmGcAgJvv5XjvUaUtNCs2Rxb68mLPgF36fXV9nteVuC8ZLTm3c3jYyykeugZcWz4WLE",
  "key33": "3SRkneZqy33vjDZL5BZF7CrFTHU6ByXbAWwdvNUGkB9e4xQCLbxHcAFMnxQi8P61XH3jHcKkWHxZZrEZaCEBMnvr",
  "key34": "JTwpifMxxNqtGbAqGzZJpA3Cvn3cXxFo6yAqkvPLeqbGuuEv9feFmpvF3pAuib1BngZVD4T81ZnZE2sQwXHEyNE",
  "key35": "39Cc356T1j3cdQgLmLFjWaVPYZvRT2ctfkDbJ41Nxoksk1PXrimwJBUQDBwEoNNdut2zifn3LdG2XvhNzd7zHGsp",
  "key36": "owhMiGYHMdMtFt1L5EG3YCUsWbEP7EgfGRYAg5gLbf7pBQGyWA525Agsp4Qoj63a8njib78L7M7WzSPZBFYSMTo",
  "key37": "373UcLokA3v5eFSQEDmdrSMn4dpsi1CaGvM7vkseV42S2f3VqV9mstXZi8KGFJFdFWfcWsUt2c5niQNcNHXJvJaM",
  "key38": "4NyzzxzyAtdbHH6QLtCxF7Sf614YHjdJb95WUV2S9pfbUNCuf3tHJeE3AFMFPVocczf83xY6bq34bvKx4tfB5UaJ",
  "key39": "2ZiEmZES5XpCzdKbyTsjbziLHZVCAhKBeoddS9hec5uVn93k1NkHycvuExd9wuu8sk85AQCdiRH7Ckk57MbJFKg3",
  "key40": "WYyLXQRpd22TioaA4g2pURGrcVewqWMf7xqt8EuTnQid79ZHG6QkS8oBEYyMUTimoJzgdGEaZ12vvELXpWfV6JW",
  "key41": "2LXpw3dAqP5jer11AEKacN6RAtqUHTHyDyfiEPk8HJ3c4iTCQPgXZQnovey6P62AxmhNmH1fCyFDw9dFd8nsPqKP",
  "key42": "4HU99QXp7JUpfZUKu4LHe9uexyJkinvYr2MLmxszJsVm8pn2Jw5QB3c7KxiJgYMgjBVvydTNZTbaxXLssJwYtoQ4",
  "key43": "5L9V1n5aVbeMzcqMJxTdcr8QXfnS2ajQWg9GW6KThFiSgBpEmni1U9pnBumqDYFEF9Ei2Doj9DZrLny9UPqCCaJJ",
  "key44": "2yxRs42wNxvP7kv4ykTxyhJbwgQJ2xqJEBaxr5mNFw5Nmo7gpzRMh8G8bn8VXhibrctVopRYvgQY2ETVFcoutNa5"
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
