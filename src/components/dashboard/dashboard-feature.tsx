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
    "39baC3zpVRa7t3kvLhEqYrMDK2EUbwq29QGqNk4wjBGou6ftNYYhniJcFZfZjRaxmegpfq2LLgMXvQ1JdTiyEHbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iyxvp4aXApTEivSfA9oYGHUbs3AYjq7ChsubAPAbHcUoob7xcQwi2j1Jqb1rQxf8feZv49nqaSCDw7XcoaAMnFd",
  "key1": "nnbcMGTk1P8k7eMpmtfPEvq12XUvgVap2fXsy9NSyZBj1RNQR7hoxK7zEJqbjBMpiCc9S8kVXyod5SvQMcziZv6",
  "key2": "4a9q4hrYaeVfACN97PvCKMRLZnvQ88XPYoCSTGtbzSadPLFa9btAJL8ipPLEeaCoFzxmwgsbkoGTZgwFbj5Gow6i",
  "key3": "67EYQCqfWAZvMVDnSPmVZqgYHWkw2CcKPZUvMpzSJr5sbxoaLxWXjpfvNQz4Nr3BNynuUeMnmeNXECJsfvnKzibQ",
  "key4": "2UW8RgJz1S81kxmB491oALkr1bzJmokFbvJkeY7BYdvhrMBtG8H4oCVSYdHqpuwzScfazQ2rYCoWQx9TSziJ4WNq",
  "key5": "4kotg939LJZJhDWwAn3FVgNSMGf7Nqu7X6dnUNihSNJwJERmx8XZq5kcwgEf8wNsE4UJmBki5TpmwsQuridNJkJ",
  "key6": "5d8aXoAkYeZPNeUCnDeYNiQ9LueAWvoBTRZvfbjNKFYdbjtWj2adNL9A6EQHBpwHVxDoHhkCaD4CuoevShTZp3LQ",
  "key7": "A6GpMAj4APru14Dv1DGYNvdGpC7QHt8LbM1oAieHaxoCe67cLYu5KSFJTXVKSVLtcv48vg8XhNk8fAkJDuhzj2o",
  "key8": "4uMpSrk5tr9h9LrEt1ii2cjbif5Ndgf7TdygJspeRrUBRjYU464VefeXcuCBuRHXduRV3us3KppXrMvjSVoX9CLE",
  "key9": "5vncbtECEf19yyum9s6ur2RgFJHnR6WVRSgdgqAfkxC6HgjhXnDZbK9zozxF4HKEQbZpXSNa5AffrBiQYC7NaCzg",
  "key10": "4VtJLUN7AV8QmCN4YhdfqPEhuurCxhdn2rraPcYYwR8fYVg56vsEgp224kiXQqLkDiiY9PUUt3bxNitp9FXRm9zz",
  "key11": "5Zf3BzYPjmS5RfnAExmXbhCeRKBFy2eyQ2HxgrEinX2EgxFfsWsvgdvu2WPeeGkg6oLaHeP7x3pf95VbJo1dbHFF",
  "key12": "4T9iekYMEeQjufhcMHLwo5U2gqknSBoCHBoEV2a2TbRtrGrFqeHa7tyAotxSexknjpr3JvXjM8bta1BqB6kL5Szh",
  "key13": "3rvE1AtuasJ4N3qh2bDixAKrmu6K23rZevTF89LjmPACmNi6N7ipTNxhHFgujMCbCoLwEHdQzpGMrCR8MKM5mghT",
  "key14": "2Qmre4imWHNrHshySnBAWJ7gp1sFXR2QzHaDyRpatDSoPQp8yWihQbP8699EpXEjsmEE5HYij7RVqpywYnj1daBW",
  "key15": "4V7NCMgYPqYQD1rZJtdEB4kLLnD9866g68sgt3UR1P4cjjuDckg57Yq2STrsMCB1cJdX5mkmb5tw3SdjBVx55qYP",
  "key16": "4VKPYmYg5N1pzb64ZyTzuAxxg4uu5JUZ1eQG9uzatMpZpNC3NGyfU9eieMj18MP2SDqqxqPFTa5WK2C8eCw3USP8",
  "key17": "3pGT9UipnFcUFienUHjjQhWYmgzJfYLwdbfVN8KA4jhWh7UkzzpaspKnpvtRZRExVxsDAAZjoWo2sqjPCaH9mRp2",
  "key18": "vWDG8PwEzfHAE9dDtDVdeQwLaJT9XYWNZFrj3DmaeiJVTm1AAhMxEGTvoRbg18MufSckUpAq2SgPYkYYBahmCTG",
  "key19": "4XbBkfA6S4M3S4ALiVZejp6hVCVvKprJTx1TPgnL8Nze7z6KuWifyMfoWACpW48yX99VnG5UMfnotNU7WuMaJ5wA",
  "key20": "2cMV9D9Tcs9GxbeC455rqkDW2aHU1bbEBLNk27BTU5yMuAMrpbGZPtr27tPwYxu8CcF38TnZAaiYkcYnpvewurCT",
  "key21": "5Ub7EBjt1JUjLAuLPFzwky9e7pQhUEiv71Wee2qiNWxqshVohVBfSfgLCvoXFoiv7o4gSFN1hN1SgkPeZMJmWWvy",
  "key22": "334wggqFcfEyBsYzPT23fRqAehVYqkXWZ5kVekEFd5F4ZqLcUbq1yr3WZXq1ceRwdscbtdK5QKhHDd8VJArpB7hx",
  "key23": "3gXoVJvxaV2StKs62Rh2iJDYVVdNw1Lk2YeFFW4a6gXXVSfeUU66QyPjHoufoyWyEk7kMtWj6LCZbt8gtEJkN4BB",
  "key24": "2DDsps4FSayxucx9X1K8dC2cfV7STCi9d1xtQMbaxX7rTzU8iNLxwVXxk6WQNxc8vyLZrWXmM2BqfJLgCgBhG5RK",
  "key25": "56qBW6zoT6XtK7aSc93tKt2uSQR8eyefnRDVWyGvosBAB9XVmVUGu9xSS2myfb4GGxxboFk22kCZv5y5iChN5Z3i",
  "key26": "52VjVW9HiMC2MrrJbqDmKm153a9fMtkU5Jq8exWmq6cVPyKYkb6KcvCPAvv38CwpLWNcArLd8TS6uZA6xePHq16o",
  "key27": "33nUBd4jhYjatEHPfpGDCvrXjh19hhg4Fcm84HqGZdfxRYCWUfxguyLYnRGJuodLoBw2CK9hi3ny2Fo9K2wEfMew"
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
