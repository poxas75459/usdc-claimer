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
    "4GNYhzdadBVM5LNCPi8tmBDoXLJnx4DKnsTPUAQT3Rd2BwUfZxVs9f4pnYvzwDg39QKbj919H5ASPWmXSTivwqEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGfz2q8eyddiGWMeRQ4UCNEkShpFbRz1rZqhe25y3PRj4pREfEWW1BXjRqGbBqBU9v4SnWypuw5AaFUYDpoC5ht",
  "key1": "4L4Mj7xsxCFZw1oQYgdWmTZnLneUWZh6f4hQ93pZVWPeL57AvXAqjgSpwwFNBxmZGEL7KBG75xV2ApFz8wTGnizB",
  "key2": "39Huxk2LpfHA6rCbULzeRvCdY4Qm7dNziPqTPSDcvdZwF9EJHNQ4sHLXvc5m6by6hzzGitj2QvWdtLHzvBg5bRK6",
  "key3": "4AFWtkVTudFZMBAk84D724JF5YmAUNYk9W9r7iWZfvCFvqBCguMNqV7NHFW1An93tNajJtbQnH5KHxwWZaYNRE34",
  "key4": "4A6G5SCx7wr5H3ausPEzDXpPrnWaC1yUd6EtVVWYmTXE12qo5Gsf2VJBgKPF36EjrexvkAWyqXYpYEzt9rEi4bNr",
  "key5": "4CPHRHVUpvpqzrsV1Tpy9YwqgkB2SeHab4SVRMYtxauyR5Yy5BbBsUEYYHRrJsu6vyoq9sKYRif6wAhfZJK4fsgL",
  "key6": "53JcN35Gtt3REYxrLUUUoJBiKtPLNKtV2pkS1Uxt4vSdgdNNxx4hJrQWYp8r19htW664Ao4HwLBgM5ZB6xYdpBMq",
  "key7": "5hwhqRsUGEUWqourQUZH3QdgjVqbWoTy2p7dcQzVR3S4BDMHPsBv82JKjs7efuDpj1kLwZAg89aQ6hzJctrgsEEh",
  "key8": "3sUuaqe1oe2eMQCNL5u3K5dWZJU8aNHAxJBE8Djgsx8KyhYA9DghgKDtwKvqtacaPByGS2qPaMsEhxeJ6wdDigVA",
  "key9": "5M1y3qMcPSw6tTg9YjemqBbNfT9HruwBrNyVT82iMPytgPTnbwvRVPkiHwD1NvUqggdpUqF3w59WrfuAQ9dbnHY6",
  "key10": "2nivWbLArTR6TaewgWts7PzKhtdHYSjSFfD2coVsC8vG2ntn9iyDM7dv84GXiGsVVfC73Dvw3LiqgKgM7NyMTk5G",
  "key11": "5ppfQBHPk3azG7TdQBZgVWh6sNssMZWwZCByuzCLH9tj7J4tvJwS36x7PfMdqSWPh39hs2utjLx1jTGZkJF6CzaP",
  "key12": "4hsDxoLopzbAKiYgSgp3A76bEWDaz3QA9jSBfgS6dWhrhERzcS5jUdtAK8Dxdgv3pzUiUPRZbJSujpWTryZv7tgu",
  "key13": "61LNF36yYp96TZeS9w6R1gBrdszdzHp12HacRQNrDq9YuGm7ticab5FDHndwqMq3vJZyf7PPG87zQjb2JNa24sqH",
  "key14": "5x1PDAZyCJBW7styXDyyg6Xw15WxTS2yQgdWRE6BRu24SmWDwrbMHgrRPAtevieGRUXggv294NJgp4QDJDerz2LE",
  "key15": "2xUHty9VKYHdMBwzHi78Qt5f35uLA1z1A7ZpHwRvvnRTP6yMVsQV1pGqUoA9vXqEW9ThVvDrB2jNe8HRX5TgCbPQ",
  "key16": "5GNARs9rufBHL1nFqeZVWnJfVHWA4BHQVroWpYKBK8QFtnikeUrT9BwmBBuWjB4ruS8wtJcm2UM6jPcyTDJvXRHA",
  "key17": "2MFtfQbo6RFLL2iAp4wD2T3hrmt884XyEtULV8TJfhkXi1BJCacbCdFY4DVeWbyzp1wAo1bG84st84fs5P6L3JY7",
  "key18": "3XskrrpsXU9iUmRLUeNWmfsWVeLysRJuwarFnUUBrEH7Hoxt3AwmqQP9YP9xcYSozMg1QkkPL9TpQoVXQCg3VeSF",
  "key19": "27nNZMwLpHbq5TWZDx9tDfMXFY2394kHuBkqZTJkTi3SpHFm1KEzdLLBheEeBroJVRKee2JXq8Rb1nK4S8GFcNNh",
  "key20": "krBCwAEXhZzgsBY3E6SgMEtY5wprFN9AoyWNn4bx6H2BZtgXvFpkN1tJ2zj2hgq5sxNByh9xcQkdVCrUMT7yFdw",
  "key21": "b2kC1Pmu9ebpYP4bVRLXNwyN1LUGNvL1f3tYssSZuuVfcY8Sg96yKP84s3rDGVazwxhXWbubPAM1CX9kcCjyCd3",
  "key22": "5zccvZdmbZdoDkctGzzgzNwFewJ7ooDpFccJqKedABC9et7dWRnSHFJrhMerkvq4ygEhZaqWwjYkLzER5xTED81C",
  "key23": "3YknneSsn5WLs5A3F8PjGY7sqq8jNETGQ21k9D1tJuugaychmsSr7qwFRvt8kj1nkugTuVfkuogHTrcJt73es594",
  "key24": "si8MvREfdyecMfGSGHqM47X7jdzMkQd39Ks21XKwBF2ThrPHt8H5UED7MMm8HYfdoNR5AzwN1Edr96zAshkmx2o",
  "key25": "4x3fxKuEB9i6J9hzbggdFN7RpLQNhzTJT3gBP1jRXrptuRTgPXPmXGLmypTWaqMt8L6tbKvKg257MB57CumgGC1U",
  "key26": "48sN5tyfmCXwkD7Sui17v19XE9SX11nMuX1gdMNb7XMqxmCTazYMqGQCpag68jjCSmXR6GqCbFp3f2VdbV6jW4nF",
  "key27": "531ZikBj1YcjqyMkShDQozU1eUTxY8AkaUtXFyjxNBgJVCNp88SRwRoZgGdUcG9Zebw8sNv6nM5mtyV6gGCcwJKa",
  "key28": "5AAa4q6t1M1DUFD6DzxywGcy7sMfVkSvWvHf4asS8MGSZ2CsivagQJJnznMRAp7Wiz1bX8SGx5UUjmMJ7w1QWvPG",
  "key29": "39nT1VRmXXvPQsspyEhU8Eq32VgmirDVmQv15E97aA3iczkJmeFWLzmnecNoLczeKV1nJHg3cWQ1SW8GmU39qwwi",
  "key30": "28WMa7GeWiNrA4YXstgkRs1gCbBK6qCuuw2jyjpurbUv2Fh8kH6FUeG4wR6cxs8HLzeC4sJ3Hi23SBNvqN5Su3wp",
  "key31": "4d2oVbrwFyyDB8LjbQLSyvazzZdwDgHj5mfZAtNy6XKwEJhewMwkjVGzr1o6B1MJoMWyPseU6KbJrEhNExzpjFDG",
  "key32": "5cfyc7WmQEsgsA6XdqQcL4u4SZCdEjDhUP2WXpApEADSnzcVZmoMsPak5UeUst7FgReXJwyZrxMLKtmC6aG3HV3C",
  "key33": "4uQr5FPFNDZt4dFx3HM9yaLvVh7eL8mmsA2m7XRQYDfcq5MZzZWqksZo7LqyakvEs2ktWryCpdz8dce4FUzWbght",
  "key34": "3wuzxhpmcUdpbeRmXw6hJDmpFCkckE6UGwPuCoDSLKyAAneK6R7Uu8ezm1EbZveLVGUCkoJAFzjRXWL6EMPSsKq1",
  "key35": "2YbuEgKvdrUJeZCAuuuVtABR24odtUqKA1Ag1wEyasPetjgxdfP7H1fdYrYXRNEAZKUoRsc9sdDEyiDtiReJvAd5",
  "key36": "2no8jkZQnKbDBhAx9NYqLNT87Hk2JD5L4W9YF42w7V7SkvpfQdhu4pmLCb6S9x3PXen7YTMuXiApWdobzcSMCSdQ",
  "key37": "4mDyMEvoDGPYskM7BM35UfKTRRc9ZhdbGrjUj1QcsFtzNicLBjTpVWPs6yXbfs71QzT1wDHHTdMi6imA4CQzQpQ4",
  "key38": "4fTa4NdUgUumVFwJKmnEjh9gj6HgAXtNyffGgnUAKNmggntGqgZGn7acDJLdipXJcQkDkRKEyNbEZaY6GveNMTpB",
  "key39": "38tAyviepRzo4qr8wuEHV3FRqK1kg3nz176LpPCk81ihfi5eoU6f9TpYjdjNGiwC7tKPGBKKHx7StF1VnL4hGa9P",
  "key40": "3xohud5SVLr3oy48hEBJs3Lih4ivmbxypkTURvTiwNFDniEMhNw34dKHNht9v2c9vMciZkz8bSN1ArgZx1SaEkbt",
  "key41": "omzVU5kmXoP8iqwLziosg1tHfcdkbRNkiegfTJMDjXN8EXVE2KvcW9WKJNPohhAfFw4E1FV2LcVRPVRJwDBsCxR",
  "key42": "5XmuwohY8Yf6f8n6im34WpvwD4JkeKnXWD8QDqsAgvf3mFfGyAM9bUU9nqBbvaTsSWoXB59YN5HHiWmyubP2kLb6",
  "key43": "2aYuagCE159UUdXQPvP7iT42xTpBCVLPTZDV5xS5X1xDWsSyUMWCjstJcu5Aww6y5Q3JqNScgNPrsdYtR3cFXPvJ",
  "key44": "gTQxRDhx4yHxQ8sY7SPhRxs2fY8jM8AWrCeherd6L4BeYqGkxwZMhz6aWH6ueYnJBA66xZkVQnpMJhHZn6cQmzz",
  "key45": "5SVsBGvp3s2AADrH2ZgCbAAXqMGK5v5dK8uFG8NpLUFxSVt8YtHZMoi6RVEPZ5818bXJ2ptswMZD9rtX9VEYybzC",
  "key46": "2QF4CCVAh1bupiNQE1T1ia4Vq5zxCK2WSQ6CXui3YnGyaPFSd2ZD7ZjuPRLKmfwKqP79ccArkvghc4wLYSioWyGT",
  "key47": "3fQB6nErKTQtehF4tEHHnUz3dME8jkaFidPbxeLunKwj9Tbv6Mn6KtAy1hap3hFWM711AnBRjNL56TDeyfH5MWfg"
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
