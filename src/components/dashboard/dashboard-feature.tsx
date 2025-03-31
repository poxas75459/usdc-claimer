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
    "3Wb4Ckh6fFueyQzSQH5fZLQWH14M6bKifjaixYFbggKnpMMDBPkhehEDA7bs2qwWvxgRPA8G4R7BZjV5QT631sMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSBDY4gdULZ7zhmdT9PwWXW6BxbjnhKrkJPsxPrSHDqzLgLoyip45wiTf3xtcGHPoBZArAeCv19KmwJW1RwWf3f",
  "key1": "5pZM1TKVoFTwGVqvgyPDEwptXrU398fQLrKRZ3PUrtJ8fMVArHhDNw5c3Mf3cyKmyWMRqJGCKzq2FAedcr4DjWJ7",
  "key2": "27cq2RTkkb4hDySt5j9TN2JYohUUzEQFSzRP2ppR5obH1yqkVAkGzeoUwysPngUsyDypvhS9wQzMvNGnHSLkgxM4",
  "key3": "27kz6hBd3bNg1t8efJMamjEXNtDaUmVg8YB4EkzuekLjqDU2QDGcKCAA8CwbGVm1f2UjDdW3zCRFqbysXGyFt21f",
  "key4": "3yMYJD5JzxUBNyNGLrnnR6i1r9jmq9Y2PrmoVK1k1iREfZrxipdCic441z55pESQ58HiwJv96ryTq6nuAbPVVpLz",
  "key5": "5JC4SCxXTbuM7B4c89eV12gH29FhshuRUuHa487DURAXEoQP7wE31iM2WyuwHzpmng8oGMjaGfy1HYjvf4BSUdq",
  "key6": "52Ys2Hh4Pr12zAsGZVom4VpgHXTGD3dyCHApvQhJAf61JNEFApbfkHCAFNo4Mi5AjKoViFD1ubB1Kga8DRKzo1UR",
  "key7": "4AQLuy5Zi1qS5XpLB91CgShdvnPYcxNiaEzowPjuEpZNb7fzqRCRKVqBra3oWxVhm1K1XTiAZNSRdQJtVkHmH4ss",
  "key8": "4c7AaT8FT9w2NVqJpdgFA2obvnd39XSY7h8DHQRewGHqZw9aW9mCsoPU6WkuHSkq6vg6HBUSKsLymVufVKT2FVWK",
  "key9": "4dufwan57NcHVr8LXJSvvzHcNBBNJZAb6zkNkwhRWQctwev2RmD9F3xkDSjxPEqHMUadHaAa2TJG7xvX131Vq1RM",
  "key10": "23hxukYeyHBDHEvHLmvMoH1vjgnxT5AyqWQPkWrGP8Dk3pz2hhHkqk3dvegSERLEUXTtBosHXWF6mkHCvzhpdLUT",
  "key11": "SyEvS2A8oz94sXcPiCYoAsuENAP1yu1gGgb6W3Mh34gAwrgoSUN54Y5hxGiXwYJfn9LvQYPodWxCbfZDDnj3Q9m",
  "key12": "2xxdD9bPJXKKmXhZjEftziFb2dJdVodYV55PDHh2V7MadQfyeV2YRWP8pvryo5GmzPdkMNzpwWsEsMSh2fmZdUbm",
  "key13": "NHNJDhBW3WHMi7pKHg7xb5mnPDMmuKgEp2z6CMdDGY8Jo3sDxwcY49owgfb4HB2hbeo2UZFhdjG2Lvf1rQV1wEP",
  "key14": "5Sh3yzAYpAu9nQeKK5LtvDFRDhguDYr2yykz1ohwDLdxVM2jd6su9zN5dvypoHxkNrU5UjR1gHnofd53bQfE85Em",
  "key15": "4rht9ykVduaWaxYEi6wT5r3bHM7FchFxmQ7zPWdhHgkmW1TsZb2DgyJrVCRF2qBgSgPwBtnSwd9ndDTGs6pYDGFB",
  "key16": "58ojJYkPtY5LSzXPZhZY1Xpu7463t3ZCW4uCjbsQy8F89aUsXJhnbAFtSsy9QRsB6RP2vFCoJeN1R36X6GUhLCkP",
  "key17": "4qv3jRPS2m3UgqZeLtVWT5DcaYRdZU7URe34NsbQxnQXCPE8hLk5r9PcsopuxQ2DmyUuEiHMWp74Ag1ob175qBJU",
  "key18": "3S1NzseETVj4WxdN5AZNhS4DQ4TKrF167tCFfvk2Rn4zvZtQccAjH5BgybRTFEEHq2sSaDKs4VkaVhhRixfX279M",
  "key19": "4g8sS7nVmsjLdhdtRexMykjmt3Y3oVKfe5FL7JvAH8o2hQj3tsEdY7hfuiRBqNbNGUqHAFkgGVNe8jkKLZsq1V2P",
  "key20": "XLiLih81MLUTLqBnVAEsZeqTg7Zf4YRLttYkyoeQVSo5QeDSWxQqaPpZCHsNBbHFJddrvBNpKYtzzmHmt6SYHyq",
  "key21": "22i1LW2MjmYFYBofasgFYtz43bay2rho36jDjUwX3WQ2vqAktN3mVfh81C8CnpAT2PFVnP1BdUvCSVi79et5mcwE",
  "key22": "3U9h9em34rZoqzahnh7tujD3MngKycNLrv4ixYWbvay3Cfbkwu2nvQF7k9thKyYTtq9NfF7FuBJ13HhhAXMohzH5",
  "key23": "285XAeqA3weUeMAz8mbJnzVjAjbVDy1yu2BeW61FipPcxNdEr5R7jMQQtPuzCFdjLtKP9bnnKHYZ9P8CE7ioHq6d",
  "key24": "3bChedTVgNJ1GavzvGo6kio5EiB7vrJwiVUFkg336nfAyYhr2xeGbKUksNYErzF1zgvmBqT1WXdGCVP4Uc994fpy",
  "key25": "2VgJGwYhUbRrN6rXBs9eG2k15x8PnwPUUpiJy29zxxaKYpUkCb3PKMgaqTyFVNeJAWxQhmT3jTfbL5iY4vZMuV8s",
  "key26": "2Fi2xwaxzUB7Ww2WhFp3TyxoaPyAr6obTkKQNn3ta1hi86HzVwidoQKFvzop7KPVutnN59YdeNSLvExUJxoy1Lhj",
  "key27": "4AcpygJ6y2SaDEvpjFu7VEVgtHPvvayjSg4SY6w8rA7d84onBFeoFMCaftrmMoqvEAfxPUFjn64bPJfXfghrntzo",
  "key28": "3MYyJVz35xwiCzvnPvQt7ZvEzYAnvueSLPUZWRgQsT6YDsXZM7pBjfMueMgx7zDfiEw3Y9rk6WmiK93tVcP1xec9",
  "key29": "2A1aC3Mjjpek4dtSUWYUiW6t5AwuFgpoAUJRT6AUz3s6Rfv8Nmeh5kjFfwnJCRJwvZ4hfnFKA6SMv4HuxKyyuz2T",
  "key30": "24Te6zNLBxkwCwekfqYC2hTdngqLZhUTdkNvDxg2Z26vCk1MNuYVzmfNztMqMTW7iNM6S9iAebx1ZX96r23dJ7AP",
  "key31": "UxSyW22xLgFKzSzFds3FTHw5tbuENh82maXS4GDvwJy3F9sDWUqCWoSEha2QpRFL5pBniPqB6a3wYKaJKxnPGFC",
  "key32": "3Z8oQzSvhmLwKgSXzvvAoq1W3nuMJs8KWMfWJ3PLuGBSXiRF5ovAY1tMHeUSqceCXEBnPBvKrNZABrXTGSNDpvvH",
  "key33": "2w6utzr9WKWdnRPR9t8Mt7HvfUNyZwfKzXVm8HShxVNyiuMW15Xtm1yGn3TnJhZ7HHDMJTypsJyNNJUSyX6p7NFR",
  "key34": "5AEfn28RZ3HrmeSuAsuk1Wa4e73F1AscAnekekSRKVjPx9omBVBNmTFAPnSDGcno4h11gnKVaebBer9BL4FxBBHB",
  "key35": "3t75JXgjygyzRgwq75CvPif6RogeEadPqxL6sH2WgwG8Ynbikhzpgq3fnK2rZ8wEBH2at3syk49hsHzhPDSMUm3",
  "key36": "2YDRq9p64jKLoyzAqnxEJhEoG9GdSkAyKX7FqSQBwkr2hYUu8yumDVHnbxadityRZwk1pygNGSHZHgeB9145Be8H",
  "key37": "2ZXAReyXSMK7wTn1zQDhT1cJ9YkzFw4H6RjT4wJkJyAaFEgSX253ZrhQmmnne9DyaXtqkJ74BCLHqWbRLQJgEFkS",
  "key38": "YeUd6JBv717Qpkm5E4H5Ktd93cJs2mmF5pT2fHvG8TYNLvzCJzzFytvpyugCGv54Fsz1hMqFnLWGpVLJcNTtCf6",
  "key39": "4Fu5qcNR1V8cG5eCBzN7uwNKwTJ6QGJVRRcgWH4v6xuTAZxqp4yvLMFxCCG2rLM7uHNpLr8hj3kHnrKDwQ62v4Nv",
  "key40": "4yNcC9Xb7yeCjVe5rAuVtWCvRWvUACbakj21RURZydGdqjH1wy8RwKXqracmyYVnXK8axY82RbbdaayvHuhkQDTJ"
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
