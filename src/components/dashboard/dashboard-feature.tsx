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
    "235kvRA6Ng1P51LihrPuHQBYacL8jcaYmwv5A5ejrYVmt3fvQdx2FyoqRHzc4nWAtYQRadzoAq1g2v5TSUiW2sFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PD46eEen82PD54pFKWVKAmksjC8cPwsEViioB4vK4LQqocQ4MHQAa4v3BjSopimRUxUbQu5pYrvvtQynJBQjcs",
  "key1": "2MiA1gsfR369ZXp2GmhmYGbSxNaUYfpPDKETAsRy8X31s5HyVwS3mgUDa9h37W2Mw2jhjg5FKqk7SuKu9LG7fi1V",
  "key2": "2S4Z4rK7dZATrEZPBpvTGgmK47bP2fYRE4dziB18C6JKso7tK5tjm82KxhPRSQJeWTWErXmuhuvZjBrV2CBJ3axt",
  "key3": "3Wso6fBGBLAFEa1PddoAna3Qa3D9XyaaQU8bjXfC5sHb2VjjyDL6Z8ghyP2tEAjUrhXkyiPRFb93AjqEyndeYC5z",
  "key4": "VbpSd41U27aJzvtZPArp6RXxZYkc7FQcqYTS1uGfxRb9v4wKoB7SVGnoogpk983RxRjJszeqB2X9pj7tSfGjswm",
  "key5": "irpQZjXN4VhAaV3nyEDTNHK3CYu6H738sVaefUioZgDrQqL1mc8rHwqPZSnNNhj3LWTb4nsX6vpqqmHzEU9S9Kq",
  "key6": "4K4FS68uQE1EU39B1yKWprS5q9FZUjWhvpmjaNkJmXqSRyUH8v51ydJfFWownCYKWfWSNUfzcLRpphmQ8L3uoFMN",
  "key7": "Yp9P9iWvtLtoyH74GUJRJMreRr5KFswLwPLjVCRakunw3zszAEvu5XCJZGBAudF1pJH5s6rtApWeTewRnmn6nhj",
  "key8": "3HurYMKnfS29CuE2Jn4de75b8c4u5dX8Z4oMWko9dvhr1JPyvFuRwsiEJjKFN6Y3axiVrM8W42uKLqYPm8PpC3Rc",
  "key9": "5Uta9rG88Mpc8Af2dga28V6sE82h8NXz5eCNcBw5G3cvYPwGYMxrujzy29uHyFxE2d6hhQye6PX8Smu3RodHADpW",
  "key10": "3F88215CT8nGrpuiEcUHQ6qvKHTgpXJobpj9bT6KNkMPiYPHkXqGn3TGdQSABoVKTx4KWy8miwqihF6BFVv94W1c",
  "key11": "3sj48YtRuZdFfeDvtYzawjugfyXAy2hcAb9v3x6SJCR323hCZZAYxN1Eu2i6a86v9BNo4qzBPXn9U2mG91pY22Qu",
  "key12": "3nQmrUR4NeLHzE2BRQwh98Qn2MZK57UTQEGRkJDMucK33ygtGAhC3Tb4BBT2argwYoi47mfF6BMwevukHTyRuGqj",
  "key13": "3vFyayEraJx3BEbMFDridSgfJbxFv8jzvHwTa64kkEbgVXS5yqWyWH7kYLFK5uwwn9LrgRunQreFeYSRxVy4Z8eK",
  "key14": "46224STwYWNpiWYpu7eFssSN5n6Eo7thCk5VifGUXTm9LVcVavCyt9ZXL76qwiXYC4iahYMJEv3ETNiyAHs9kLBP",
  "key15": "fvRAcdnXqTWzD4Vzref5gDTJjJ7nREXgkergxLaCUcBewfiH2J3kBVZBX3nXL8bPUKaUi1XuFaF5emGG16LkhuK",
  "key16": "2Gr5cTo33vdsHzG4j9XsQZ3BoUEFEMve5B7tFdyvyrCfdVeyFpS7x6ZnisRSzc4vt4PQFvNUYBFCK5EGfRrMySci",
  "key17": "shcPogPCbYibdU61nkazVijvaniPE1xiB8sAMgJ6XGYHQ1maVztphyEfLWYrhEyCD4RdP2fRU1UJXeeDH3WmVyv",
  "key18": "54r92qGpLYpjEgY62ahLgNkJoBhGuim6scjVjoumwzs7cELCTcAJhMz52jzKgSBBrCHrjJJwX3M9UDk9k5yuthFA",
  "key19": "3RQkfMBQ4UCEBuJcVpLGjUAv6jj6W5yAUJgfpdYNvqrtNp7dQgLvpJS8UiCAS4mKemxQitXMhcM25grRpRqYsm8h",
  "key20": "31gzZ6F2H9yST7qEvQqEdrhHQsYmKyQ4YWKyy7L9Dxzj9P52oJ65gkPvhkosN6cYjmA8NkJJmiETqefiXUoKpmXq",
  "key21": "3zJ8Ebky5Tq3GbXeCK4ELgZrPgo9Ubyp2fNL3yFnAM7f5SCcwmphjYof1A2TFNnN8rvkDfHQmKjRxEm4xpDZqzS7",
  "key22": "3NqHaKQmcGfu9Y1K4Lp7pFSDHhHFpw6aR6yCQsM42rm2T6XuT439WvT8f1nn9t1HJUd8sJidSj4M4bCi5246UWg4",
  "key23": "4LqqwGL8WNevT6dX9BLLJW9nk3zfjBCzVgQE75Ke8L1KLjNrRt4jArLhCSUxYvu1A7v88sC7fbrtZiajosLQYQXJ",
  "key24": "cBGwaXCCZLPW6g1YUvTJt66TNi3pVW5ciJozAKeKrQdaRRAS9uF7phGKZJiFAw2UPSxt2XKE6teGXAysHQPJWiP",
  "key25": "2bKTF61LHTvrZ28yyAh7CBbKzmyASA4D9erHy2VPZfPKTK4cBkFegfEyYje3YhARxDcmwvMpKhGfuszBiE2X58co",
  "key26": "4STbQGWKAffvVmXfds2M3N7CdtBLwH6as16RJeSQVPYzw3t6fdFvyxHEzkSn7CZR8MWnkzGpuPec1TU2fkTQhxiY",
  "key27": "3jdRw2MAA8CSjayG21hbVLBXDzpJdMraoMZRVzNeHCrZjEkJHbyT8umibEnc7gubh15tA9Lv1VNG1aR1TGN8vGBY",
  "key28": "21fbx8juhxWL1PUQCYh8ZAEk69P4ATG9c4vCTgPRt6sVEZeTGRVogQgAzx34ZPEUr7FWt45sk3JEC84AHd7yQWCk",
  "key29": "5tv4tQ9MNwiaUEicyktXxb4YvPQCJQPaateQtBbHcLfiPBCvouDYFryWMEREQTw28rDYc3xiBSMLywospWC3R4Wn",
  "key30": "632Pd4peaWyLwzyH6pMWBVXzKQW9qc4bQswsPBmyqRQpzA3cYVmaFyvUGjMgro9ojZp4HeyMVq6vDZWuR1M58EUN",
  "key31": "2LYAkrNdGTY62HrqXx21YpRgNtFyXx34bo8ANtbyNu3PY6Hyd9cXMdqhs5oiiD8T6SF7vyZLgqqzYKoY7DV4nS5k",
  "key32": "42rPRrqfQefhvsQcsfTTkzFhkTtfiYpLBgTqkCHmbgusKeaUgk3RnLUVJ1mVDuW2AFzH5FSxE3PMcS4KvDWQy2BZ",
  "key33": "4yTmzc2TRJKbGvxftJvohVV2J1EGBuc7vyPA84ex9s4Q9pZ7AbsDHELU4RcYhX2ZvA1P6Fvkx9KH5bpnWxNkvqoz",
  "key34": "CWwhsrb5kmww4DryXsCEeo8LYS1ptkRms3ty4UMLhegTLDWczR81a2aa3Vu8jfKpQ7nhJZt8d1iRomn2oT9WcdZ"
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
