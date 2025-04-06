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
    "az2TobDHWn5vcMpQcEN3bLQWWffDb11CuUFb36KGNhozHzNBCn1ewexdeh7LjNPkpJY4X2vkHQNYrCW6KFGMiY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBK8ybuZjFqHyGiLv19WTpTMPgiwdkpfBYr8bKpsUqxWjhGDWwaup4C8PF1PrhEWovHhXzycs8NSskGFRduAJgc",
  "key1": "4hX6xgRtjbHT2CkG7dpoza3Lwj3XwxSonHPLPagU9sEBbVxaTegYDkqdbWvfyyMBWqDmjRsn9MBX82RtpR7wGo42",
  "key2": "YggXMM65DymbzUiwnK17Mij81HdZzfJDDeCwUvySwSRYwmb9TuHDtgfJATGini6nfQxvpAqqJSrf9QMd6TqJEVA",
  "key3": "4hdNYvmj8ETx2vHhZWDJaMfrRqb7VQxJLnJMW9VyDSf11SqxCzW9m8XQ874hVRi1kaV42fkXTyakQYmfGFizFC9v",
  "key4": "oHmUTsRiBfVhjVEzh1KVuVNZQ2E4edAH3mmun7SYv3VMR94xWtsPowKkMyFecPYs3b32HhUtVGHkcRRXvmAhF7F",
  "key5": "FXbyMGHZsCeaieMsPX9WKXvqRjEioNbyqjvcReMLiAJSKBd3phYyWyPgqCPSY8zR5N74hKAWE2ruXRAVfa4Rp2H",
  "key6": "67Ubr7DEw2WcXN2QQ4ru9LZXS2WpFyuNUceJN5CWTNsdrgw3m18Gqx4gcg3JBfUmtri6ZwxQpximjf4RzCM5xj81",
  "key7": "4LtfGhcqt89BcYWTnX2sBNHyKn9PUE2fWXTg3yQGGxE7hZidzegEfmGuMKCtied1sfYo7hXLK4F449i87HQqWk9E",
  "key8": "FomfaB7HGQMViSbWqj5akSbNwnW3o5Mfx5v88ykg8GqmN8PogKAuYgHxT8LpACrnvL3z8hLC7VJvyufnNNMYzLv",
  "key9": "5RA3m2sYxTUP6H2qBiWKWxbodeTu9UBWLPeufB2sk7TvEbcRdDr7q7UbF11MpxLE5ZR2ugBQ288DAjS9WtcTaCM7",
  "key10": "32UZb29KoGVmtX7BsUH2BftNku1MWVmCmu63bQ5dbQZMMxxEEyw4XvmoV7rdkL8M5ReEAy4EoCCRCM4mdGY5mSQU",
  "key11": "2D7CiiSGj1GzhbbqyLtB9vfnfm4Sy3EPGLJBKbmPziE28qsmucAy4YJqTKSSo5YdkHx8Yuo5hzdWfKkyMcU1kbLC",
  "key12": "56DxxnjZDTBUhcQoF3YSQkhyUD3zCeoxDznN2AMbziJXgBMqGEX6Kj9eRyLhDuXw3KKh8bpLgtFG4E2X3fjuXWBU",
  "key13": "2NrCUM8rTYyc1JA9s8EBm1Bmqw97sX89YPqM45pfUCx6tCazTr8VSgHBzk2MAfUJRz1Y5oxyvrHR8PX6BU4JKs9v",
  "key14": "oN2mWY2x1D2VbxkZNPS6WCogBYtmLsvuHy3cP4NamXZ2kLrarnf2hFcz6hbYcW49iT3krxgWmskYKLWdEP4KQcF",
  "key15": "4iknjfM83iCFa6kYPWvR9GHm6jKzp4UmkVgsye13simt52NWgB2M6GvuhwR8hkaPCpZfh2JHi81rUt3V1mRHz22J",
  "key16": "2FgHW6Ajq28ZdmsAXHSTaw8F67LuR35T5yv9PGZBTyFPa28E1FnK1Kn52sju5Gue3Lxc7nN3DfU4JKgzqTsbz58k",
  "key17": "2kFf7c91DdEq9dZFt3GDW8ZRsFuw3A3gQC82EENVZ3sxNC2Eo6yTKrigvgJWiePj2rsn2Yjo1jsVc3Pr93aZwkXT",
  "key18": "67gS5QWg5fhHbhDrpswFJUidBF6CMPgdaRQwHh6wqbJWEpYqiRKzbZN3bV8mBW88yor32HnDKdt2V72YxngkyNeq",
  "key19": "3UeTGiLwmoXLCCXvc2pAgGdPUoeeaX8z5q251uNRMRRsm13D5GM5jNpCMK8ADkfjm9d7qdfMqvWnaXjhoiukCG2W",
  "key20": "5p6BxhgeVYuMrSUEoRsbriQEDHkBVD64cms9LLrMpm6vG72SEpyu9frHupyuKRHJQaSLP8v1HbfH45BxwkzSHNfJ",
  "key21": "4ycgg4xHXyDnq1B7UpyMCVbYvqnmpLKBE6bZ8HGakD9YG2KskzQShYEUj8fMDZYmcViNwBW9Cfc6XyPqNCL4rywk",
  "key22": "3BeGE9FT5BbRJUGfq8nJvx7TmSi4EyxnnibmQgtByYMHgaqmWrh6Pb4u9DArPwJgejgibw3WZXQPywSZeaRNho9x",
  "key23": "2jsRFHbKaCsr4MbVhMDDji3SCVbDEaPN2FXEToske2PcdBtd1aM4FFGRPSCXf3xebTk3WyJ7Yokh2s9U8MfaLMZ6",
  "key24": "5rBwaDmyuJ1CEN4v7FQsxUAXEUTtL5frqnNR2imkm3UrqVkGkj4mPUzUFU2sMCHtoDfpiVM84EF73N3BzLF6DBVt",
  "key25": "4i7mHxCHgYxPpYJWvF6NeN9RMrbXo34V1juAbULJY2NB5vJecq1jwdksxiijRLkXUBXMepTzyotd1krbM5UTcgz4",
  "key26": "31cDwzSSm9138Htt3H2Ek472rGomDscpaEpwV7ovqYazgPnnhewuosov1hj2k9uHCdHspRh1FXCPt3MAKaj81zDQ",
  "key27": "JA2Ybt9Vts9AD9Jd4xaKkY1JHD8fR8QjRixPkKptJMmQniLVmFe3ALVsRX27ZYm5EkUc8J7RrThT2JQjhmxb8NA"
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
