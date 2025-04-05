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
    "4hfkTJgmKxxvcXZUfjiY1xzTwV5rcNvhWpYZen5P7fDqbu5HTJGDd8fUXv4XwcVitKyBwT4RSe1or8JaWtPFMFuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjhZaq68W78xsM14PgxyNWBdJYrL4y57chN2crhTngXoMpCgQC1xTExBDWvdqzBBkYKCXDwzAASuCeJZ56nidhc",
  "key1": "4Y2GFRfywns1Hkc3dMaURcPWQgUGk4PEjw2wHyWEJmuVVfeHK7Tjc3KiQKHskuWmheXZ61Es7sFb6GEFKq1FneFP",
  "key2": "2iTuaqaBjGzDQFEYgKsXp1K8bwAUvYSjForxBoM43HgW1yw9f3T8qFWoirHzLRnxSpXq9Hwsf5pkSpm7qBuAe1pd",
  "key3": "2w6siP22j5ZTPfQVdZrSQdc4dyw9172Ho2ivRdbqU7myJn5yJiQZxSSCVtGuww1Yf7CfqXxnGP1BbvQMogV9mjc4",
  "key4": "3vhC1XzYGH7KCcFo6y2aU7czVYoAjcQDYUHaH1vbiCrVvmZLcc1upfy4Umm2ECptBahayjeziVZuvfiihk2TTNU4",
  "key5": "4EvbikMuMiGjx44mpm67m6HZLm4MjSc9azw5EuhuYh99d8F7rqANLybLzSMnoupXupfJ3FD2egdFPLortEPFwaFV",
  "key6": "3esxkJi3aCskWYbV29LnYsg77yC9dy8Si8RooGZvtjkiknW2U8Pt8Kso29kyVqpdNcV1ZFRa1x8GsjBd6DGamZxQ",
  "key7": "2y4ZTwPFK5wEBd7e4YFDchmPPXcDTdfcvNnvMCvnbS3p6a7oomSJaacSMNehW65vEHRXev1hHTxUkTGRRf8Z2twf",
  "key8": "2Spaa5mrTssmhcGp9KfrQuiqRwTJN2ebZVzEjyR7LpWKusRvgAeSnuurQxq4fSYruLWsBa2oADu7aHVd6nFXRbCn",
  "key9": "2CSJFcgxL5BppHaBUNaLYktv3Qb9CuZTuwCsPUqQ2V7vbVjfFvHdozLcmBwKXQdiXcNy1V7nqZsHyBBb9m7H8Fkx",
  "key10": "2trYw8Ly7j7JMJp7NXYuG8V62xmuxJVZQnXakrVo9qZEMWsqeC27SxPV6a75UhPneKHiR8v3Ga2MbYUJ8hoikS3r",
  "key11": "3K2qTobTQZa4aqi1T2BGGBVfQnZxfjHFSrFGxqdqU7tH9yytboaiTpvuECciaoyvQBxkCg6T4gtsktt87NFyewS5",
  "key12": "4rpFvQNHqtmmvyLJ7WB3qPqf37QH5BgKyeDzjL6wGzAxiXoJQrxS8ZsaUcoFvGDsjpwND221mxeXLTvSCpHVxAi3",
  "key13": "dXZpb9a6DgvzH8VPUHXtaiezvuiVjRvYCvKD8PoqPqTya7R8pysbdFmXprY6RJxZdRpGVqWBZpsiyTKi5dQ8cD3",
  "key14": "5N1eyP2kF8Lbrvf8RQtjFD5W7ekUEzMyU75hCE1kS3naHyPGXRNL4uymTDhkeCbpxKpj1SLRfSNcyzT6dvTbLFXF",
  "key15": "516V1AwAE6qrWjztDESiFMm4yiMeYLNMcbHESACMZ7S4NRPwReUjWnzJmEExv4wVrbPoHmfZByyzsHWq6TjCsNDs",
  "key16": "4BqJijHHqJgFcRgcjEM4sfVCCWSTcEukYheerJn1q7x8GX7XsKHGkgoLjMZkxLstnojtqEGF1vHV9KSw78qbek6n",
  "key17": "2S1Lfkntj9DdRrPxGB2qCRSd7fhKFRyBTGBY8uNNS3oGYZuEotXusM4n3CLRcq9KiYbpHWTp8P6cQYkNWRHbZKXU",
  "key18": "Mvg9VtpUee2GUH8TabEWyi49XoBNLtqkmavLDBZ3vGqPprojBXkKyHDVLZLKDEeGXEQiAhFeCgNVxTcYXmUeoat",
  "key19": "2PfCEqWWY7DvHVeJfuKQN7nugrRF3apmW3tiioL5owKWinjWvLGyDkbCiXVdp2oHUCSG5GU9HyjoBuauykaVq4EY",
  "key20": "5KRCJYJNxrmLXhKTsbA2DUu8vbDskg9ihMM9UDJekys3ETZVtRqSCN8cAszpApnGWS6xjRSvaZiu4fkr5WUaxKAF",
  "key21": "3REzSeYDDQqCh8D5NchqihopFKg6dE5QXHNEco2EjPJc228exfKxbF4XK1pgHRdMCymcw3ReUaqVqqSrDGtJeHte",
  "key22": "49eUedoYtPeWCSLQyyyKbjAx23aieEVHeLvkRSzFFLT4hL9wcu9ESxQpPZbHNKb7YnJkvzE9TL3mC523tTHvfmH9",
  "key23": "33wCmsK4g3SpjuukGX9mJNADhff75LQ1NgTvrZPHvvNsVitZG9ZXGQhZ6aNpUZiE3hxDH7pynBF1P1GL2CpkCHKm",
  "key24": "3pAmvq5JiBwsXtLEawXkMN6n3zfoyxi7gWKvDGcYYFZapsjs1B6CeNBFK5p8G7ZKTY7wXdafjLLALcqCnJQq3M5X",
  "key25": "7pzNxqYfiW9cKHU6netBpmxKx7fZptWYejdjdL1jb9qVetKZgcUtxqbaBzXySTbeeuCF4PrEDUTzwvYRSgesju3",
  "key26": "5aeeyp5qHhEo39tj3JA8ZsJdmgvPk3rmtkN2Td27YU4NXGRE7Jr7pdrf3bmzRsakHvb4y5vafwBwRWJo4LNVmH5x",
  "key27": "2RGxDyadWnimkpDkYbhwptVaRSfc8yhvVLozB9jM5qX2uMqDS1yG1BS5nmcPjK6M63ZewRWDYFAveRgkW7PYvJyR",
  "key28": "4oQGibPuVWZqvaVSV1zfzRUQKremHWwhfC7Mdw37yC9MxFrWebkHp4QATb5QNuZNJs2wN5mjEhkgbn2W3WYZyJoH",
  "key29": "2jmcUkQUFvcbdaZ9tiG6TgdQmZEyBGqgkqaS7JVY1WxLdmf5iioM2xua27VLSaaqY4i5Py3ghaXEEiHteZrV23wg",
  "key30": "3o6XLMvkuGC5u6aAw2hbTawhdcEHtwrJ5qDsWY1VW16BuuSEQfKSS1cNmDu8y79PPxxY79gqeDdNkZG21AgAUcRL",
  "key31": "64Ki1bcGYsodkovKBvNHh1cyd4Yx6h7rQDyRCRMHzt5K8dv6fnyAgVcy8Rvm7sg2PURx7EipVAKb6qfJ4d6nmAuz",
  "key32": "3UxQSLem73qZcvRjj1BEDq32abaDQdyR5T6N2263zQvxWnU1myBmc4wBS5MnwcpoWMPj5R42udVWN6Wcc5S3X5Me",
  "key33": "BSgQmPJsNWTB5CtoH3p2Sxis6Xvv6dXsFsMP7kBQp5WoinBTTtxYJ6cmD2dgUgAiSYNRhrrB5xhtHhp49N3jfK6",
  "key34": "2F4Wpc4QBr7iqdZcnT71K64AVsHZweSCHM3vSBTQiRQ31jeqTBwqbe3mMpfQbGvENU2BUMiBu8aRRtwbWjSQwhCa",
  "key35": "2gT6zB6gADawPPtUTN9qAVtru663h9YaLpPdYTZoGY2zb1j9E6qba4jFGYGE51sWqVWNeTys9RbJpLBhoQZvxqvT",
  "key36": "4msd2HaTWMXGK4PFL3vXVVBBUwVHZCE7jApzYV6GFMU4vBuRLjWFPZsw9xqLrhFXXV483HMWDL5EPGjm6g3fyF1E",
  "key37": "2tJty5KgRCZfTHbqcukFbv5ykWNWDduMJP839fZHmT86o1Yj15B4HKoyZXdYbMb1dcnD9qhu3RrB2MS6N9URNWKa",
  "key38": "3C8cGSfukaZZF4UP8yhWbaYm56ZzeMbqqMNX8cCT314EEExjY4psWfwgJZT1mpFDnohb9XmEgj9p8Z6TGMgt7NJJ",
  "key39": "2SX2Xxwyxk6q9cUkZ3BHYcULxkjmti46fYgh8Cs5Y3EESpVHGxaUDUP5eHQ6gPsP2bEUVJvyTiwgNzWyo37rYDVi",
  "key40": "GM3CSzqaZFHBbrwEeHgahj962GssEQZgK55EU2Urwjx4dHaSLkt41WfnMKqQtSpLXKWr7itVStkTUKsEyDte89X",
  "key41": "hpUtg3pq3uhSimwuJreUCVXnUK1VhTnDznmmaEgEH1UR9yUMthZvfqRfcYRNRxipJWJL291q1D36f4QdShRAWZE",
  "key42": "5KHHxhTQ35rKfqpCcHZXWgHwo833Mp938KEuwVkGxPhDCtzt7PerLEX9zffqCbpuckoURh8aZSJpAtfYoQGMbHXM",
  "key43": "5K7DAH5uQCF6Ry9ExZrTgZm1ezWqk2Q1dqSyBuE7awqZtZyzD2c871WqdrJt8j8YuMTM2iWxASbWG33zfpbrA46r",
  "key44": "2abeLYuvQQ8XuGHc2Weo5BLvBZLUukrXdivkAne8Bz4MpKEsrY9aeJUrEkzuJ15NDX9yMw4b49w7kH6cschYr4Rz",
  "key45": "jzxBeh474mrJRFxHyz9M9mQFZGg9puupT8kHmSEnLmPA38Xaw7y2QijgEY8wKF4cMKCxZxpmGdYG8RTBNmemaXT"
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
