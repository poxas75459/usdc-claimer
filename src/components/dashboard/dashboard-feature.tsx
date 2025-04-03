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
    "4sMazmvpbQBeK7PP9Nb5zUcABY5LQXAeCBtqDbdwHjo6a96XgDMr9Gm6iT2tdyGyvz1zdJ45WSL7tvhreYHGAJAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CeJesctTuJJa6KBH1rP2cq9kzvyayeVfsEqkHftxneksmBDGPKGQrbHQPYcLBrPn6YWwxR4pgVSrHRkfDJR5Qj6",
  "key1": "3ijoC9LgYa1Y6deEYq6BXnLWngCbGL6grnZpF3gaXHhe5XSGzYSwMuW5mzgi7ZPkorLfbvLhMLDse1LvhD1ZAHso",
  "key2": "3xAgbEGHiJbvJFfTuAsmFS45ewAkYtWqBLFnErH6P9PZApaHanc2WxCLaFQXMRRx1vC7djcnM89CxXyDihk3gvrR",
  "key3": "Fxg5c3fLtFUsEbAFGjfeYThJ2m8yBRcHbHn5ddxW6R9wgVtbRZmT2z5RTAiDW7bXYgWe1fAuC31vMQT2GLqAUwV",
  "key4": "2bRMNLuBD12Z8cwFJ5wv9Wmcbrs4qATYbcY7JKkEoCxodRMBL55ckEctq4FF6q7dV1AX3UcDLxW8JRrmLynzGU8o",
  "key5": "5ybjajWkAtMRuPZx7hzEEZbPUjMLTfcL4EJdaT9nXqKLCfgVTi7bzoYQQXMRj6c247tUYWUqGcASZinMjxZp8b4X",
  "key6": "35h6mRAzPWCNX485YVYTGp7apPX8ScUHVj8Ved67K5fYnuWzeB9KG2eh76Six6eL5NLWmoVDgFWnTyPrwuCZo3xD",
  "key7": "bQZ7uS6hBaEzMvS7Mi51FEGYYr6UmokSGkFJPdNeBWjonC1ZbXuhc1pLnk5ium3X1qCwwiEE6qSxhtFudd3gxVb",
  "key8": "XZrastcmTidt3xsr3kpk8gCDw1WpSCmEQZrT5ci3EyUzGF2FyoPUwWQefoFABh8mpVRdUTskRUVfBBTT69QBnbn",
  "key9": "64ogivYDffTtbitby6rMEWJGFayNxkrNSQvDxmt2bqd5bGEQ6xfeWjR6hEG1zRREqgsSb5efXeemoeSuDrwhcD4q",
  "key10": "3iNBWVy1o5EFtDMnEyatqM5hbMi6c4r1Lc5cE3cAvCfYjS16GpYjBAn41NkGdizQab7wHN3gEUWQ5hJe5oFckpPw",
  "key11": "KxuBYMjznbsGJNy6xuXQLNowCj3jW6c9NC9Vkn8sYyPAsRx2FTTpZg6SJVem1xkqoN65iV18YS1Q5KT3zGbaCXc",
  "key12": "2fht1eDcMCQvEcox4GFVfaudMbPszfS5Up2Z6nb3NAe3BgnAgD8kqQvWg1Uy2mPNqR4SWgEyE47yVhWib3zAPQUR",
  "key13": "5rcUhB2NCaiZM2vYsSnvWkk3KwPyzUqeGP7W2uFf2PPGpqWwUGioRARpP3RCXxzNLSEtMognMN5oWkwdp1qkov8",
  "key14": "5meHATNUyihkzJdJHziBjpGBHEU7txvqDeh4eLdyBZB3D9sHXYP9DeCRNkTenVyu7U3gpY1FUvnM4qnC7FT67F4y",
  "key15": "2fYC6q1XvFRkHT4sk1ofkUksg3w3DZiypipvBz1aKc4GbaGMkGH7bFQBNLKD7R3fSSyCh98b6Jw2z9izbwuVsLiH",
  "key16": "4MUJfMBJyi4jh4nG9PpdGMiyRX35NtreatrAgiswtick8svXYa93TSVoRH9S2cpeFqGLYHbbFraGQViyYAm1Xmn",
  "key17": "28iV3TeWY8mRmt44jHEXaPRRgW2J8QfKQuboSUWHbFje8kWm8drukP5HwNiTrSoxWpxWcDiAG84cd855UGJcQ9oW",
  "key18": "446516XoRDhLN1WWyWR2qMDRNBwpPx3vmumepkWuD8pzkSXrs8Squy6NY2zzosM2rNp9tWek2bPm6Z78UYT3xW7J",
  "key19": "SDzwaTj4JFWhaKvQyH5tPEiGx8Qyw3KrPnJEUCYqwiqSKT5w7QnNhPu1ZH5NXe75zNb9Us56Frs42HvtfswYiq7",
  "key20": "3zxScgSTZcRvB5s8JWeNb8Aj5gFRTjK2sydKrSPygW8Loe5Apy3AvYQqTwfLeoQCGNepDetg4eoiKjHsH5hxs26W",
  "key21": "4NuSYwvdbt7PHVCqBXP7HK8BU7jdfgvuoB1euH6WPhMn2bazDQZkhViL1xeEQrLNJ4e68SRTW66HZivTWcff9grj",
  "key22": "5hY1juP41e8UUda26bT52TgQt29CDLaZF7EsGqHNZmBw2vZ4K6aQwMyJqcAzg63HDmq9usvzSrK9NtPmiDBP9jEE",
  "key23": "2xHxzWvmYNv5PMWBBWFXSEdaZMotSpYcE4xfnWU7UcudHBtCWFbpYwNcrGZSKLK2w1ZqkEs7zLbe9ADdDhPLUwqj",
  "key24": "AkEzzMxEkf3XvLrx8SZXPaUhDSMmoAcMk6HxzinGghBApPPupHVNXoJJHZRWn1jpCGWEii49RxUgMwERStH78Z9",
  "key25": "2FvNihkKXS7mfcnmy9tSZdrqhG25Dcg3puMXpHPJA8XB5G4RXAFNECNLVEzJ6bBFJMukDNFFdNp5EaHae8Homhnt",
  "key26": "3Q31gidaCnx3R1uG1hTucCnrjZ63W2Q4pU82T8ohuQ6CmtxMe5enjXiqZrh14KpCFTLMAsa9dXuiNBScUiCmtrsw",
  "key27": "3g3Bjj3SS5LADde3aS34PU47asCSbcwgpW8wqKHQLHjLXCzeneNqgkHw2N4A2ncSFBzaqAzBTgWN8pXjGaFhW6XV",
  "key28": "Nimrijyvonq3mcqjozSmHgRoGsmBgi5GBSesFFewHFmBmn7euraMewiKPcEGdnowbKJDQY2Tc63NgmkpCvYNZFG",
  "key29": "2JwuQTh3ouwgUHEBA9zxWnJh2o7pFytvwtPFqU7jJiJ3Soa5aT7exGbezbkmi5oPkbhCcQ6yKhNmM7GDTYVEZGD2",
  "key30": "5s9ZPmgaiT1VarvjxV3jTfJ3qDjjPpheiucetD7cHaHRh92X1Sys1oNxs3ngbT3rCtNRdWq5wxEo8V5DfirH1ter",
  "key31": "4YY339UcjuDQtVjuvFaeb9X2yvgh89AvGZhm6Rt7FGWm14TPDnB9mk4mJYJxphytWNpBMH9LPGEHhMKTTmeceZrU"
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
