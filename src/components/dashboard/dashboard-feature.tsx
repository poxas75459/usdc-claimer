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
    "46nzDtmrCpgDo9AoRCzbpZkJ4sJyGdmGyNrNYCmSWVUz92HUL7yGXPJvdbG6jgg9kphBfQWVqoMeuV1knhcmYSvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61C6yLDetTgwVxZk1oaWYHGTesEwnFsFCRtqPynj9xLFiLzDS86REDbKWnHzHee9fxd1g9dBWavoUuf1fENN7Y68",
  "key1": "473D9zzzSVbsHu9hmrhJucVp6QzcYvorbSyUAtEjWtNyXDW5EcVvK8jN1g48mMVvrSc3TteasjP3M3LSB7XeR1vG",
  "key2": "2GnDb1LTUQk8uZBmkWWKTTv7ctTBm4MRf2GKER5G4gvqU7bkCtg54naCCtLcqf9jadZkn2VSPCo7huyXCVUP2yKR",
  "key3": "2zCSHEYEFpi6KYzktY3GfNDXSEtb4X95AqZsPFjwPuw9qwiSU53eW7r8c1FTSG9Kpb7NMPD9mqLzt5JAYYk6VeyM",
  "key4": "3S79REVzqaUD65VDiZMCEGMPB3evxPEQ82uYdtzYg5cW5TM6UZgSMAcpRBGAgPx3YxF7TyyteyuBF1RrwAXseZBq",
  "key5": "jLcREQpBFDzUJp3LgPN2UUjAvRf9b4rLDNQGM6PrJtgdc6gt8iczapfLQG3GZviPHKC3S6dmBLy7yFXTt7nxPm1",
  "key6": "37AhFb8z3UC4QN34XFRhF4obngpjLQrx6krmYwzVxjzu9xQn9mPWpGPe5badMTsLtiZvtATMhD4YJhzh1iscWuCk",
  "key7": "2S6ohmqq7hxTEQdqw5Q4ebLAnXcwE6QQhhD78obmnNsaPGSUm8Es4KFqZqsmLCFHd3NMvNfErXqfG2APGc1Q24RX",
  "key8": "4oQi8S7CnUUy7uAYjN7niQXgt2b8xgsa24VTohaGkMyTv7BiscxKB83eZ7tf1etAPwCRDpPTp3sHKkPFs7TNRULk",
  "key9": "ChxxycGZcN18D4K9c2BpcY55Zs3A21vUAnNC4bLAiSK2tANgT68Z6KEnR24bms8WAWutV8V1TjuDKcx9tKMtHPC",
  "key10": "4sGk4QUheSS9GSmuBZC8cpRt3tUpdBcWTxsY4vHCuQpfeRKxTRC4JypS6VByhUdBeqAZe4Xh24XD5DUTzRZ3xkuq",
  "key11": "45WN3k7287h7BqRh3CkfLRDr3jQyS6ijAGmA9dVLhWA6kPcM1YLzuX8jRa1Bp8YXYBgxQMkYBhfVHQsL9F5fg7Rk",
  "key12": "5rJJ36nPABDVhRQRrxyFc1ShWjdGNiRGswHtf4Ggqw681RyZEwrH5VbrE574BBag91gzDUernysfBsoPGcq6Zrhe",
  "key13": "4pgmFMMCufGR6XCg9GoXQ359LzsfmwzqK9A665CsnVuZaAerXBpPXyJtC5fQG4aDyH1m74yokjU397CAw6Vq4bxE",
  "key14": "2g5MCUR2n1WQfiNGgef9Co59KUTvAJ6Vb3U3Xw3jPGNMJn5rCzkvctpgmTV9nyJcxH4daptyauukuxwD8vkA4yBj",
  "key15": "GRNzJPPjrtJKQ62HbG5QWeW5NS4Eo9DrJQ3Z6KVsq2kL1emcKYJsAPqucZZ8ScyExCNmTesk9zDPEMC55kVvqmo",
  "key16": "37fSwVTH7VuT4jWt2ZhaEZWjWpUtY7u9omkPAr7hF5CwkUuyXyeip6BdHzNN8yHXyanh1AyJaoS24QzTG75P8ULE",
  "key17": "2itdB7NCQKa2YCFPaPLTfBPxy6eD1UirK1kV4eCnTbvxXCFf5jT4o4Ni613MVsuLcWtsi1UACmaS1oWwUG6Y7aWD",
  "key18": "2sDKBRecqUc82gAJ9ev977cr6hEHSGai9eEhbk2r3WCQsm1sfAY1epAsjNfDVhGzdhcP8m9LQksQh1W7iwRoLryx",
  "key19": "89xT83jjrcPYsZStDQ8YW3Ns9LAHTRjNQGFVzjh2EMmFwbcgJuZojX7hhhEwWQfUj6qLDukP4JjKcWCmL8haVXk",
  "key20": "2mWwxmLxq57GytzmYJKFopZtWsroY3BikQRDPHRkEomdZ5CXN53SGxrKULsYgXHet13weDJtMCLjSner4mrAken4",
  "key21": "4qRcCBZD22nKDJHmL3T33rV3heQ6KL75EwKxvKG1QL4s3fMRSXE1c2ULDpH145Xox8EBY3DbB7At7r6seG9P4h4i",
  "key22": "3BdydbSTHTUWGB6rX6K6SznBTXCihuZqBfuHQYJ5Us1g3nQMcWQrh5j5gqVA7uDn4D4rTy9czjpnH4MKqHD8CGFz",
  "key23": "3UePoUMAXCWWbgg8qDYVRt6jYLd3ENpmLzHooveqGC8YF2AQsucwTKoTEU5UmBYA8adKKYSQG1ZhVFMdKgjZKfRB",
  "key24": "4grLzWPF5jFwCgSfqqQS2fhZXUiBgYhBT8h2Um4VEz7tZRyV48oVod35oLGanUyjF4CuUbVR8rBQsuk2fGoKgEa3",
  "key25": "5E3qoUqXfg9oQKw5LhWjLzYgT4zvLFF2UTznEAKqaibdF1uVSDuR2R394yJJsSBKSyqtW5YVEpVzTd1fcC6akfoT",
  "key26": "56STxUyJd1DqesvXtb3NUfZEzRbC7b3NgHS47gNDRoW7UhkSCwdqPgtyQF1vDnMZgDX7Gac3M2LD6RGApQk4rciF",
  "key27": "3TDv7yYNN1BUu45hAkY1UWtngNWV8aindYKy6URwrf68CyG8DYkjWCi1HcpF3MUkkpTpH5x48bZWEGV5WsAStomQ",
  "key28": "3zW14t3R9Yj8M8ZjnXC9HpLekPXA4UEBJmyTzTV3ynY1NwbWeb7aE16FTmmpK3uZTCAXip1LmpXCJ9nzAtzGB24P",
  "key29": "5o8zJLpbukPaaKsxGHdYY3nHo2d8Nf91e9LS2fk4Jrc4PsJGWJYmgTud3XjxzGzv1V2SqgKQ3vR4E3FoQnp1s4GF",
  "key30": "2zJKMvWc2xx5KaV7KXF5TWHnJFnNyuHri5PHVFmbicLvoC6GKw1mVMwVUyJSG3bTXvypRKpAJqeBZ39ZgAFRoQGM",
  "key31": "4HHyRyXgn3ZmrtLqZHjrPcRRSWcCqvxuYJgygBBDNWCvCoNyBra6JNjVsJ4amHx1VgKpiPStFqXBahf8nvZryvTQ",
  "key32": "qZ3QqfUQByW3YKNG7rSW42T7zS18vxf6vDGs9yGXxFn33Uj8nvXqxdU3L6rGjZa5Ppo8sBDpDLRagcqGkJu3WC5",
  "key33": "3HC2h9aKXCmq3z3kU9h5buy4B86mz3tYzKbbkQEyxbpo3CoTe71wcDqP4UD89MxybSj8ZRv9YqTvpajG8TciwnoJ",
  "key34": "278e2SC1Bre3KnpXQbpjUuvD445wTAe8HwCYR6pHAvDBeP7kEP2ukbsg2q1eNdoKsG8ZuqEXcYnYUejb3BHHgDvP",
  "key35": "2F76MrCQrs3hnzQ6xSwWDoQUXjKinUs9cstv2BNLLYcRAAowquLE4LTeVr7FmZGt9Nmpz3WsoPUN4diczNBobLMA"
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
