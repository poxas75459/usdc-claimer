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
    "4Tr3YmgpZMwq31WajesPyADqo9oFLpvtqH9QUUbw6LVQRCN6TEeimSYhiSBu5wRCjYo4H8a8QY18sRLm3GMV6RoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5UwU8D7vnWnUnn2uNXCdcnF4NmzyDBix9rta5QmQxwoxaoqZ7zpdXPrHNFkHiJeF1dYnxhE1MtVjUujwRDbVUR",
  "key1": "2bP5FoNkQWkeHh5mhAXQ43QRx8Cg79nADVEXs5FFNpANGPazsDEYBn6CK1naoGrtwwbbrxQj7kk5gFVqSGTC7qLN",
  "key2": "3rRxHp7Hnrj9usztdzXMRX4jsVQmoihNCzudrKVXoEiwEJDWw7WF2DTwbAz1EUuYCNGhtJgsEL5zjuRGgwyRKfWK",
  "key3": "2N3aPqF3BxniPPgWvhz7McsnkZiwBVPt3ye6LN96jWto7fppQCFFG57CP8tQG8nSqavUtb1kHSnBPdinD8q6ukyB",
  "key4": "8cnxcyzd1fMDPkCBCPKNxwu3AY7DMcPahP1ZCEjgD1wrefsbgiAhGpC8E9VFHpBSYyh3MW86BEB5v2rtoEqLQxd",
  "key5": "2vn1pGqjTAioRgodPc3kzUVdYaYKZemViHZEUFDjWq1KwaD5ggFnNP4Nzk3RK4jk4WMiWVMfi79eW3PzKkmwW6zD",
  "key6": "9SsQbzju1FryTAdfNAFEYsMyHSe7BvGxwyA1EL86qeusqehg6RjjhPrrCyAoEegxqjmsXAcLyw9HHanN251wztF",
  "key7": "3dsZJK86CBw1WtB6jdPfqnDkAPrTaizNgdxMNwLARYMN3cMqM2Nzz4iBtv1m4r6PhT38NiB8GWPk3uBuDrJttNqT",
  "key8": "BVvnZxeJ141DWJVe43mGyuu57LhUNyDuvtXVBGWu8iFUiUiUmMUVYT46A8ZCJ2CoXbp1zgQBNA768jrSrjJorja",
  "key9": "2r4ohAThFXKvvhEY5bDUrYbubtTKm3G2mif8SK5aDYQspZskp1s2NsrULyGhbX9U564V8ueGHNgNbajaQrktU6qf",
  "key10": "4GFPyYv2c9swQ8HgQuL4i5wioyUpcpJPUeJBfbYApSDfwdT91bfCLhhrdz82Kw2pDJ9XY8yCVpkxVzj1ca6STQcr",
  "key11": "5n8N45i1KyS9HdMYB1Yu8tWU2zKt2FF4TbFJF8zEWfNTeAh7qaLBcZSn9owsJeosTRwRL1vs4ZWmv6hFTEKLZD7r",
  "key12": "29pnpQLbTgMqWvz2KLkJx5GWRW7PDhFjZPhqEmRLaZuCj74S1AVa1pP6eEgmgFdExLxbVthgwtiYHkfvy6ELLddg",
  "key13": "b4FrWqBRoaL4bPQfLgtFHmDW2CDztbUh9XrYqoFRizm6EobV9WbRz3W2D4RkEGsHM6JhES1UHmsy16CYEh1NNPK",
  "key14": "VV7ykNSfpBYNtAXjXcuWSkfmAGv4xf5PXkxaYNKj5MbpwRs1QZu956SnYJoXn1M2cFT7DyF6jVWcvur4b9x2gDu",
  "key15": "2Zajw1fxi8GRgUCcqLQfNi1kLbfmj1Fbt1do52D9jotMeHg8Jf5an8JDPi9G6wJscWs8f3upd7orv66hM4Zf9e8f",
  "key16": "2tmQr9jKuZmSakpASG3pXeX5eJPgMjKrV688rJexv6kYkBYneR76DTnpbqYMXeb3oQDY7zn6jNkBwfGCYMmQKJrD",
  "key17": "g7aijk8xUZtQBXvMhHDBZNqFZV7wyNHtzjSn77UjtNqRyegJtdryxrooCjGyhFztZhBbM2HStfcWejVzDSBFuva",
  "key18": "5kEqRtKVvj5XHt2w9A8rddEiu5pW7PevrXQRZ7uSbxx3rBpJPzYcQtNF9QMD6icPHr8Yc2owfc7enSAZ7mpy64Lz",
  "key19": "WpanV8dezPm4fKSve7SpwbvaCyhB5gXNwEz4KvdoMEkp8dFYCHyq6q3KV9YxRwYQbJ5E2JHBRyB7CgNAqDrUBxJ",
  "key20": "2du3ceCaqyNpsYverspbJxMKfsTsXAJ6wMiqSo9uKuFEbRLezXmkHKzafgBrvXft1uU34BfryAF7qbN7aH8TTkNX",
  "key21": "5gQwtLomsTCedD9tuJJzpwyGEfj65JrR3Ki8g8y3YniC1tNVojFKQ7MHng83cXwiUGKS6GoDtoX5HaDzhCeqfyyk",
  "key22": "3D2zXfNDsZDGcWau9Z1HCuGbbPHhcU4JBRUeExcPPVb3B5drP1m53F4uzPqemqX31YEJxcRAxSGUhK9qCHkErEu5",
  "key23": "2hj6U63rFADCfWQBkTyVjW1SzYHCpSA6S21FXGJGyYmAB4SCK3PnZfHhYE3C427oRtYnVu1NLs5BEvhyda9BQNcj",
  "key24": "2pE12sRA6APwwFZQ7Dgo1JN5GVVr8WgiVua3won6XTPJd74B911bJ4CiPRWoA52jzCRCMd3gnMEwBHRx1oBBjTFt",
  "key25": "4uPcy3BmHuHMbAVLNgMnLxBNLXxpGrKVFBotA2QiGFba6RSJ2UtYY26xRBZuq3Cw9bVuSHuHA76PUom2tv4Ny6TM",
  "key26": "66KgDtTYwGgKwJ6aUjbcafLhDE51TFiUyyNtsrbDPopo179JUGH7JvSM4wccQ5e1Yzr1wYfnXN5HkhmZubR5cAaN",
  "key27": "3xHMCSU8f7dD6VFf7fZ3FHyAYEXFsLVVFzEM9g7GNEqyL5x8mN4PhbTZqSfxenCR9xHn6f6qSPAiipSD5zNUupoB",
  "key28": "237sMJg75pNeETZ9Qe6W3B2VALjJv4PjsjQTfx83vMvKaJwRvb8xeAhR1pJyuEiqZoT3qTBER2T8CJRsovuXRyHH",
  "key29": "4SYtZVXLveztyczXiEjfcV8efL2hynetNvQ3t9BMG4XcLqmjVotGADgdN6KcGA1K9VyA8cLEqowT8fnR57QA3jzV",
  "key30": "43AtLv8Sh1ph7Lv7GTRMQ9TmCH1EJJgpNFkycHCX83txEhKA6mVFm1MwMjktsT2jM3sJ4KraAoQeBTj8sdPAZ1B8",
  "key31": "CKWksYDY2XL72StHky4hCiWjfQUSZv5Ttta67QLRPmn18zSNWq2mkio9m2XdURbsxqXSuFoHEzLUp84dLKuvyD5",
  "key32": "WgaqoybqdpMhaa1cw45rk7afHKSveDQPPJZzuCHHpaWnKueeTw8GYY5vGqc7MaxSJGCbQ2BqXLMDFWiDeaXCiqg",
  "key33": "3ucYaskEWrdycoZ64sV2PcncM26tmgUA1X3KJbaFGsAxzAr1QnHrYZ5LDvZYMdcELpiAbgkvuSTusGgogsDmXvcs",
  "key34": "5j5cKbmf39dTDNyK725BoKQTVP5efatWrAvzuK6cTRtYwpuB8u8vPUYGSRqmNRgpNiNTrwTTapByyjeyPc1Acvor",
  "key35": "TxHdJh9DtFCx7GvSkGFDM2QiEzifdfUKwp7MH7UWGCpJN87WkD4uGSa6SQFnH5Bmmppe7Tuqy52r31Bucn7tFV1",
  "key36": "6cQmfAoninc4h87mDctAdS8BuMmyWZu23vS3ewZj3yBBugS3VbWP7QyaXKcJ3BuLLJa67k6uG51DmbMbZPvYqiV",
  "key37": "4fiYcndwuaNNoLuzJg4hcEpakBnGvfVTiqJpEYHMZbjoE1myzZm2MRkhzRfUW2AQSG7hRN97SpE57d3riD4tmbDp",
  "key38": "4kyYNp4XKpForcA5fhnW9B3JY8MEiFgE57pZme5PdyhMVrBZ2q7yy1R2p6tTS1pY1bzD22tzXZKzbvRTFihdYFd1",
  "key39": "5tq4FCJ8RAXEV8KTrxaqEw8HVNrH57rbbQ44noAvn6wrpD6s2fiZPQ1g9wNPZp6jodTsLLoHZGyqkCpas8bSe2M2",
  "key40": "5uVkEyD2vCi8CNBTGegfisEWgRGLbLqxM82rPML5BDtjQ5pvFSSXsau8kGdPiMCVKZ68AWk6vtE7VaDJjTRmNaDS",
  "key41": "46Dd3x93oSTARyKf4ApjkCazsBCXcTsUcd5wWvMR5U1MVpCEoT9p9BFyyCg2BogWCZcsc2dDDTqjMUkLh8W9gRGq",
  "key42": "3zpQHtL2STcjXqGtgMGAUGCWjqJAsauTNhQudJaWSFRbhN1X9GsMuHknG3kArZxkviw53T55HLoZPWAVPjFzXMJT",
  "key43": "2eJcoXcyHdTmmFpDpGKJdrfDDujwus4t8ZaZDrzXfgLbVgZE8A6xCj8xTJNghniUnfjkWKPaJxdUGybWNu3UDKYM",
  "key44": "4YjapmLHd1yC7fibDG4gYYB89ZyJNRDdAoFVUg54pShMXP9googq6yy8ZCowp1mKh468i5CRfbzNnHoS3cadkwx7"
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
