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
    "4RaYKhpeV9h626mnrxwieCYG3hd2pUKuZzG9PAbCxYRwdEVar2Gz6qrJJjbXkkfx3uf4Uet6dSgLuWA81bYpC2mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PRKBwMtdjuGE9hsmjryupmyoLaPr45cQmATo7fNKB9RPCdiakffDnbuWds1fMe3UA4p3oNyUCoNWBd3xZT3rMQh",
  "key1": "3ZppfJk61XiRV9wSkrnxN3eVaVR8uVmeSHyFnikJVeKyNQH1vvEjxig6tAyuiBU7V6N8F9yihdd2EmPSmBK1zWcD",
  "key2": "4WSzoE2QdT8rYsQhKRA1pSV49vQJyS1PEW1Eg1MwCvbGgbteSciTGzyW53V9Gt7NZxiu63wMoFgEP7f4SDd6CEEi",
  "key3": "GKieR5LUcDZ9XajfvQCbT9mx9EKQNMqdN6G8rJSUZTwbEzuuNVp8fPH3ohFYadPwBd9hss7x2tNSiHH1eeRZm4T",
  "key4": "zkK13T12XPW1kkV4Hbkwaak8RyrdMTZDb65fAcJAdUxQD9VHtdqG9GAnwwzzcjAB2oRHW6nyF5VfKh8kMP1LCbZ",
  "key5": "3e6iHm71rd8D7242TCCqaYeHbTq8YHiL3AFMG3Mkmz76jsM5hFe7tj8WjjAZZAq9BQmaXGKkbjtGeDuXCrq3k5vQ",
  "key6": "3s41TfWEcTjRGRCDyQfF35msvAgDbJiWhfpAhMC1UfXWaCU6SccvBA1tpxVR7DrAudQy4wEQzNfUQ8vCn8f9H74z",
  "key7": "5ohLDfVt8Wv2RSVy5j5PMSjnYBjhMgKJyCYNGtUahwrhjcxTy7XaJ36yQGKBaBu8GBLEfoNDb6J8x3qMWY7ZTSmJ",
  "key8": "hxojrwcGysh6pLbRptWUvtxNtrDNA6XghdrC8cpwY82pL13cTu3beML917U9WRh7aFVp31r8T6YDDYAETFDpeEH",
  "key9": "5eL6koG5Xif1Z52hGrKnyCbvsoRupic1ZSaQVAm7MseP6ZQqGUHoiS4JnoiYgWLTfdoDnUgrgFrGHQzp1MrBCkzM",
  "key10": "2rzzom1coA38cknzTVW59eVQLutqfxHP76A29Y4a74sP2fDTnKNit3XQkjq6vtPAhJdq9DJRMYGMuuwBnkYzdCvz",
  "key11": "38fJgvMoayCBwdkD9fYRH7yqpdPR16eNanae1srJRVNB5w2VKCTwpbyUG1KYBCukSDDZywU6gdxUdp5gYsvuoeWu",
  "key12": "23MqxMDcZiY2exnmjfL7KohprftAnmQMK2qzz6nJ2Kb9YcXZq9NSTdijz1CatSXdcTkLhqJ1iJU7CvaHFBAydWjr",
  "key13": "4rqaZixFpM2n9BE1UfcdWdnXq7iz5dTXnWqZR74BGJuxn4mDfqgcyo1nVjbHTN1ZJzLpFePJ2XTnEHZ6QpTq8ytF",
  "key14": "49TfxRF8Bew6Ja29y5LRYgoZpwx9sYjciShhkzQbLanMkAVCFcUWehFUcZuj2STPGZp1UMxEFHR11ZKmQ5HqobT6",
  "key15": "5q5ZrYBoRnyRAXMXYmq5uhKbxYMWQuFeZM2To58wzQB2hEg1JAnTLpcFAdiXkYbu4h59fwGEaReGQ6EixDFw8k6R",
  "key16": "3xTgWqnfqpLu1miafR1jkHkfe1xUt9hf7phhLUvUJcNuhuqmkQVymoqKBihvLpsCysUUsknW44DszMWaDcNiu7SV",
  "key17": "5TaR1CnMZWoK8f6AbDfsfDPitzAfQYZ9FXxsEsDiiiKm7tFrpPLpEWLbm7YoqfwamRxbhadjeHz5D6CqCkuv2az4",
  "key18": "2HonU17XEN9tt5vcTPHGqeGUCKxF7YeDaQchPytWZBok1sBjZuUxd39cKmem3mbtat7MCrNProvCx3cyenoDugPf",
  "key19": "LiYYZW8eMvDA2FCLCAQm87S6UtKYJYfnTbHqyzrhUhaZRMy94sshJAr86KGWLbYUsJFDV1ei1c27xfiSCZbJ3Mv",
  "key20": "5A5qkJy3v8yLowdJHFjxnMBSqu8Mqi3GrSy77gdZjBLa31HcgtPTYshvvbG6yvSh16SR4U7bG7FARuEJ9pMnp487",
  "key21": "XeVBR9EKc9s6eExqekAVLVwtT87Pm3ZSzdEPS9MJdtfhUFLMmWKPaRyQJYyyH17uQTYN4jSvt5aRbp6sVBmVYqq",
  "key22": "3VmFY7BjRbBs7VgLUUB82X1csMUarFJ6VWTEaCo7pZEREKLgfiU25SNrscK6JtFgi6B9GqRL2WvLLpAGf5pG13hu",
  "key23": "4kQBCDiFWdDGsETJbdRLezeQFcuzCCs9UDUKK3YmrNwN7PPaDHcj2AVLhMdw8Q2aWjrC2n15qUtujcJwYx69aWCx",
  "key24": "54imJqXVXp5cfLYgypVmBFDK1qqkwHmrmGYHnChiHUu9soWdsRjLHpfz5hcJ363DPRDwgH7Evs3cztDUpR3s3S9e",
  "key25": "3KtGskPX7F8z3d9GtLQMfQwA9g4ea3aSgvXXFpKS9axZ3qTW4C8KDJT1myBV4kLQu6T97RwrYP1PsMsDagwPa7A5",
  "key26": "2o4vjmsxbjKX63nb3p6pFYJxmx3RpVBTdXgTpAqnHocVS5uCQq5ZFLjuuk4d4UUG9QYjf4J3d5rNqJaQcJvXibJQ",
  "key27": "8Wy1YrFfKLwZwjc29oWJwfDtwPNjkZe9hCZcCDjJEFCCTA2fmGJAPz4R86VfCpnX1T1XHJTD5ghp3qi5XZYND3U",
  "key28": "2ckMj54iCXSUZZ3tmvkxVsKYmzp5h6Yv768WtXkM6o7n64eCHdPh754xE4cay7yeAFLAEmf9TuLJn65j8e1jdKgW",
  "key29": "66EgGCBqSt9w2HGqx2PxkywyJStXg4YbRMEUejnMTSFovfuVFFdk6J28w6Eb125MZgmrUjwu7ocevpjmF9DDhxrY",
  "key30": "3vffBZo5xb8VcLDugKzwhyCHN15E1hS4FJXgSpo5szhEn1hq5ay8Azdr8QrAwAW7BVWLtSWUytYhR4gu15eeoeD1",
  "key31": "3KKtMuEwY4Ej7XQJEsbNWwc4ffDqSE26fV3jN2VESqkvY4CtYVW12ZANKApxZLHf8JJdQChbEgZSjncqEu35bLr5",
  "key32": "5NKjDC83H3Vrtd82A8ZZrLp89xYWeZcb83GrktXPwBeWxEUUhmoUVT5P38Ms6JzjfVtKxDuHfQJptSepgUX2mtD5",
  "key33": "3RFHPzrovZbPPWZso9eP9z2mQFmAchK9xWEjpxSf1pND313L5JoqeFR2xTAorPWoG3WgoERKL1LsbDYmRj2f3svg",
  "key34": "eAYt1dnJ9LQ5oGun8zhxL8F3Nhf94if5QsCR2wo6bmo5R5uCPWhLNMxf5bBNJGxoL2rgMi1FUbNN57SCwWVjbLg"
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
