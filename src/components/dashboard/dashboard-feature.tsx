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
    "2iegfKkDi5tnWf9ZokUDF3FbeyiiDGDkgzoroGkAuUCoD3X66LJLExzJmAaD6gnJvFJXtqtLAFArSmzUZp3rfVnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDoRp15HdH8QW5CpVKcMKY6zgUqizwDVMyswxKvmBpjDJKc8EyjpDS2VB6QVkRreMe4R1QCnvSDmsaYNmQqiEVV",
  "key1": "2sdkhahRgSyDh7U7bhUS7ciZ6w4kcZa4MaA5DUJ4EqbyVNcY5HfQj5ejfKiNbZiCLKxzoebN9b4p6W2p2XSnF5ZF",
  "key2": "3s95Ym4HKEhRfH1FsERknrwPRHEZw1DQFVmyx3anM6GBQVHsosEWVVQFEbAy6FELoWdx8N6XLos38yshDJ8iFw5e",
  "key3": "Mv189Z6mVZX8FirF26smEPGv7R8nbzZ2qR3VBG2gcZJTPuSonpTvVoSsLMnjVYLpsCHCTUky9YEqZSnSzbxzEuZ",
  "key4": "aNzTkiWeeC3PzJdTiYK1SPE4i3KpRAMxZymgD7LzD5ZiMNfjuHWYFG1NRGttRWqr3tyj5aXB9SzqiLt9nUhEpPq",
  "key5": "2pgzNhCvvVaKKq6AMuVKZiZwbFhrS8uVFRd2R6pnz5Xuyhy2h3H2CY9KaKU3Fnfrucc9PudA9p24ZRLyvUfqMeAK",
  "key6": "3G48PfEy2BX8VvEpq5jEeteAsnmpooqmsaoWFFZdjd4kCkXSKSHwDqazNgSN29Lm5yTSLUEFt8fgvx2hqhd9WH4Z",
  "key7": "2UrTj9yTUS1muEVbrCTne6WRDJQbMJLv3PNL2omyodBnfciw1cSDzM4yYiS4nr9FrHYLNBt3ccLdBkGboLuoVLSY",
  "key8": "3ygFgMEcyqBJJ9cvWX3ANcoppRodLbsM5wJgGiCm5FWpLF7o1b6UWqvCT37maMRSuk9JEAzdRorYTC2WPAu3DT69",
  "key9": "4m2zWfeMEBvkFKzRQabTaVZE1XpMDkYYvSsdh1v7A5o6a3MpbwSj1SPn4mham7Nh13kwqCXL7wBbEj1UdfkiwdQ9",
  "key10": "2RZVJ41bBjh8wFYgaFYpeN9bp1jt5Feq2U9FE6Zcn1JtZaySNBEYcrZjamGMEDAYq6eUzNohR2MvGdBWDuxu4nNT",
  "key11": "48msh6Dx8fgmS7bVstSSHT2npRtY2rRmVVAGhXLSjSR8stYt164rRb4ubErGUDxKwDH9djW532kY9UvKUscwxae5",
  "key12": "5Cf8V5XKMKkxnWVy6dKwn1VFYMo5jUisrkUb4jJj4r7To67pzuGbUzfcJ5aqrUtXVBFkZRVsgad7Wtjeams5xEhe",
  "key13": "3Fv5oYnfTwkPLxHLUQcjps4aQqtwMTdhwr3tpLyDn5gRqxhZqNefrzdENxNDdApbLrKW4qXP7Ww1J7f28MpCYTu3",
  "key14": "4SEnBNctTeP5YDsCHRm36PKmdkcMNAmjthQa7SaPrS3vpK9rpcosx59PSirFZLwVjLvpGr4RqLa8AE4uoZsnAX4z",
  "key15": "2td2mKfqYAEEt8XMep2c3JkJyMrLn29zwkooMoywz4ZzQu5pjbMdcVewcEytsQXxX7zSExpy1GXL961RuzYFtjia",
  "key16": "5bsuy78MXLaQPvsV6mjkfkMxz7F6CYraWtgznQ7D8dpmyTWPD2EDsvn9X1sW1vfkTFG9iKBLo51o3moWowhVwgrf",
  "key17": "LDVVAN1VdBS7b1NtQYtw9Wqmm9BsbMp9KHqNtQPDdSavgg6C1jfXqeMDtbCVxYfUT2ZmdNiFeGLcTQP25fijU5Q",
  "key18": "5AHivhymMvFN7eXs7DvnZKo6s7Fwbixnda3cpM6sVyKXM3piFwKY6EwLruU7jpiHkm2sWNJRg4QL7Tf2FALdouYT",
  "key19": "4ddYb8f5EQFX831Xwe6Dqp9f3iqey8FBXdFxSyHeh75ULTWGkM5qVwwFDeAhABAi42pF5pnEwW8YPQsjTK4PkCrQ",
  "key20": "5azfuPSJAh6rQLzVya5gmG8m9vbJhVWQj9JuVsVmj5RPLwHqkgqsvxy8AuJDfqbTEN1VG5QjoJN82tE6FTXd2UTm",
  "key21": "377uczPmQPUuibuUrzRCtyMQQQCYh8wZ7444P36DLWfCMtL1kbok1G2XbtGggNmR3rGicx6LUkivf5aQ491rGzNg",
  "key22": "3zyTB9HThS7UU3LHMh4U9Wb3zWAtMvLytt5AWimv8cWGZRvXpRHZNu1xSKjaPMFfBGE8H8YMpN4C6XFYgJRqwbUT",
  "key23": "4V1TR4iSm2zNvcfM6MPKuJw7dE2DqNzQB2K5aKcSUJ4XzqcZB9bHzSWjHRM1x6N6VknLPW4UsCRw3vnqazn1jtsx",
  "key24": "4D3yU2HCGVnQtnu6WWHTjp92HS1Xmk1o7odRJy6QpCMMGUeFipsPkWz3YRUKbTqR9DJa96PtHooqhF1NhshRUdfT",
  "key25": "fb5oc8J3wHy2u5q3QEbrFEfUGznjRQA9RxmXPww1jM4wqjUNukdFmpZq9gBiALMbaYt3pzj88oEzYj1dpeNZi2b",
  "key26": "4SjdTdShDVkdpBzN1FpCByC5rCncpps1fvoZTotuXEanbbwgugnKpGtDtdr68KJjMT9cNhuq6YTj84Ruk2niowCB",
  "key27": "4XAbjoL37Z2HFCNcAptpj3dC1fyp3KocWegdpe7ECgMZtgQvgzmUkTiVeqdEcMt3ZMGawKPxdxsKmMhVudmhE7Zn",
  "key28": "2cKpjYavbjvA5ECtkTfoaj1Nc5dZPmgHvH74VUPzb7fJmmg3uej8ek7oPcN7h8eAJZz4JHmXckypBDV1TAXWSFrB",
  "key29": "59d1JuTQZ52xLVh3ejaViUcEjKH5vDQYzo3kE5KqBLv1XXMaEJ46CWPqqn3Awi2iCxoupsmkQyZ3eieGKHqaJ3iw",
  "key30": "3oPtWwegFbjH8e5fNQzw8TgJgjYnWUbJRS6izCFUREZmZsrDMYbDoXcFZ7sBH7CTm47VY1f75svrouiDCuUoS31T",
  "key31": "611w7fCVenHyy2hwqt9AMwR16Xz5pKqkyMk3rEj741KoiXbaePppThwUnUEBRMZyZqzFRJRXfwJBD7Gsh8V47KdC",
  "key32": "51wxMCupFrLPbHNCeBbWGjF6m1GhSdUiEtQvSUYz3HuC5L3trCDr7f19WY1yjpWt8yK8xrs7H3oyZwjwEdcsJDCC",
  "key33": "2jU9QfWZLukghgECCcETCNrhuWenFVC6YYEXU8yrcnLYryiBiiRboFpjLnkjoHPeRZu8vcHEejsjXJP64SyQLGVU",
  "key34": "144d7R9h92534NoQBXTT9bGm8xbm5koeDimRYie3KZTJgZ2XEeoFxqWuxyJFbxsqF4avUeWVHgsuMooswQQKqSf",
  "key35": "5ThawiQC579KiEfsMSAWHvvnAan32oEu8hQibHapCgoPkFuaaCycXrLnVuf26MKcfzD1t1REKZ4ZY6xYXutf5YDN",
  "key36": "3kNcnfKa7xLm7A9zAzay15EKBB5v82QbRSbzZ62ix6qtV5rEwyDYDKEoA86c7wuPHDMvyRf6mhidD6aFn5JTjHXW",
  "key37": "2ESR7DphYxh4SrtmVc7Azgs9QSu7CaBV716wMa7e95amPA9v2sPpSnLqG7nCPL4XZHJ1c3kMP4MNYNL7wjGg29TC",
  "key38": "iNvuMiR2exaxuVB24qALHELpSxgiWywceMYoFZjgU3kteBUTsao9jWa7fXANe44dbPm1fLFDyUSZ7zoPgsGgXuT",
  "key39": "kext12LnM1rMcpdLeGGPQL1PDUtXKxaqEQPgfXqGuKHANh5XXgXWqEvwZ5kwxRxN2JV6hvfg9RL4RnkjtZxJFyM",
  "key40": "pJqBaDeDfkUvXK8jtmuA1ooPWxhAKi1PcuseVtYpoqicKeF1NV4kKxa1JmPKepsrQwKvyiCma6spQV1MUYVeSEV",
  "key41": "3576i9hZQnnF4YXfUAJJC5w4wH6wFYBcAUp5ihr2Eo6taHowPuTD6e7JaHHyhdHXrig5t7mE4r91iynQTQWUKxxp",
  "key42": "4UPLxzFK9jYwDkcb1LsGwtLjMVpYXB8LJMBwoniPp87Fb5WfMgvWkuihjfPLfFN3sHMn9xMEaEhDVRWF7WVAy7KM",
  "key43": "3gCn2Eit92e84EYXHVN7a58T85rk3NYKWU765HsPrr3MTpzKYntLjPEWzzuXxG9JYc8tAtUurpMcYuktn9PqTpMo",
  "key44": "4Di5GYSP9ttumyuvXhfsgsB3fb8TkndJEkeXhyicX9rJAgLu74bF3ooMmRPZ8itEyxAavzwjjseag5zppdcgq1x2",
  "key45": "2Dg4Ngbd8K86haebcfh8AsaEgPBstGE3yyxqpkAQSLcWFCp2pRQnNE7Yw3KeB7fPLwNRFjWWxiZFCH2rReA4iTtB",
  "key46": "5dLzS9Ru8cH62AaFrgHQbHZFPnUh4ob6MrVA63FV7xYA3ebGhrU8295W2BdCBA1L392m7MY8mmpJot7gt5HLQCrz",
  "key47": "2gAS3mGwCVNvXcHi81RaMGYsY1e6UDip7L5SLjmztTzQvDH36yETS4dp4ewzhx9agFVqwQNANNQaaWg1wrASSV9e",
  "key48": "5twTXuQMnrPyeDp36HmyqH4bTU1LFmwUzg7XpnDWfHi3QVdspMVTtMyLGHsq38D3ptx1qkMqkA1ze7DgBV48Ffxd"
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
