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
    "4ePsZ33zVpM4BSUropo7PHHshSXFb1vCLrGpuESqFLj1B3gSaGaP9LwQhCujWreVfiQ36ovxJibJrGi3YbGjonbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHAhmNWWhpd1s8gevqrYqPQU43iCQFdu6zDjcpnoasw4nvgnAxuyGYtCHSdkL5iusV9hnwmJxKUfL25LZoy5vBv",
  "key1": "5XCbrMAA1fbNdKMTWUqXwGzUiTgEJsuaosQQnTo4gc1gQG7PcRVZE21JGg37iRVs8LRdYH4Ncitt4QgERQqCJg37",
  "key2": "29ZrPi48FLnkpeeMjFSR8wFXNhJGoRCN3bm6bUGE2Z1KDT2tRY2dvEshczta7qgD5pCQexVVKv8V7WRiBGHBoXsu",
  "key3": "3JUmwaz6eMrrNbXEMr5PTAxCqSAM4noPGk24ica1ePUuyqK5NbcBu4AFbUZAQvAqJG8YmrKjfuirzuqBXPSyBNQg",
  "key4": "29Lny4tfFQXKG2VUBH8smRVx9xCN8gUWRXdxaVEdcPH5mA7vmyfSdzgxEUpHukLwTkX9gq2GHwtvw7c58ufHyB4u",
  "key5": "4cdDD7X5S96N4VEvhTVX7p4zvSbMCYuzAYr4u9dp4qTnZxDVDZUfx8k33RBx6CP4Wp2mkeD4kdaHFrztErQecXbA",
  "key6": "2Ls8sJ5maCwRpKDsn853rtvSXt4tqSPrcr4VJS7LboVLDHMVE21s62qE1dqxCP39bMUzjJryK7J2PSUEio9giY5t",
  "key7": "4RTBVzsStezWuHYTCwLLXpAcxpyuzxVfPYCjrtsQMX3LJ3mpuY8ctVs92QLQVyVEFVYAsZpmXg8BmuJegBHM9fV",
  "key8": "3thL9SMB3PGCGMjvMs44dgtDeBwt9EKx9es5wfUuymxYmM9cHs1m84EnjKkJgiZZYV29mcvKvzKqyAP69W6HXsk8",
  "key9": "zBHVL9WHfdd5jh6wsZxRLo1izbEgxAvpNnsivywBanjt1Vni1BjazpMRXfkzDRZmZ63Q3SwiMvEEEYeJMFXAFuw",
  "key10": "5dkyUwGidDrfZtctxPvUnT1u9esdakPqtCVJg1VjZhbzHCnmaaGxtGh3zfHwbfGWmxECdwAQcmPmphaFa8zfULDW",
  "key11": "2Wbpx41FfpugfEyN2DFibtH4YixBTYHanEmRZHAeddE22as3TsNKjsSwdqq8Z33icWhzJ3Mhg9K4jLaH2UFSqiL7",
  "key12": "5Ar8Bn9pdc3819v6xkY8sVQXAcZG4Y1zFuxm292NtUGWxBHvWz14iXhF8DHq3Vh39462uApt1Abx6zMdEGuiBBbo",
  "key13": "biJhu4GQssDpn4NsnpR7qqJDkg8F3Ng2d2zny8Adcb6r83jhLEKmWNPwWDUNSwxwmFvkrbUc9HkG1pUdNSLWgWV",
  "key14": "3Y43EQUvyiCEcQk7FHTqPhjg4WeKYVf6HVRmjSW7QQP2MDrro7juq4dQA3R9KAciwvzSrwsGCCzEDchRzU3qnSfZ",
  "key15": "62anX7zS6QqvJZCTA5R8ZcokEodfCY6YJz2xG1hmyEJRqMbTZRzZWtd626nVDtGE5pG8QCfeHRq9ZdfTnjt13sUq",
  "key16": "3qWSmNDQ7cZE56PVnA3yL3rirGxxvXB9Dws82WNEUZ4RSKj5nYWcn33Z1owwyieKcQFTRX2QegKs3VcPxwYDzmgT",
  "key17": "Th4kZ5TPMpFsFHmQFsCDY2ZHM86AfL4SpBxzkHaL7visCS5TXFVYZX3f7YdvKbTpdeXiKbsAcXZHMKYeGp15w3e",
  "key18": "3mvyRFfrgMj3BYqGk5bEV4pAJofTv3DXYtFPjrZoS6mDro4jEYKbp5xcZLuVe3jngbYkto1K5o15GqGSaNw5g24Y",
  "key19": "51XAS2nZpAqVrM5JATFhqryvbHVStiompsMMZs2w9JoXCWVWBnhQDBz1UrdkUm38EkgSmvByf242MzyfvvMJvQNQ",
  "key20": "5ZRcWi4Fs3v5WNuWirbBcazJhg7RNCeK3nRUiJPxUxufYG9sFec9ydtr7jhxHXzEgyskhsPfm9r637GXjN9d7Gzi",
  "key21": "nV6nci7X8C6LphZhSQf3GYBh4CcMRbiCL2VugbXFgMmTzo6r5S6nUd3fZQWd9JjxxRdQf44jmkf3zqajTvfhycx",
  "key22": "4xksEqLM9jZzeAMJidquEa97Tn1qquC4dfCj8FNxERCPFhPp1qYNNvzBNqL2JiyCxnGqqM2XzWVUdtmRLbL8VNLS",
  "key23": "4fMVYnjVcuTMcGvpuGnPR3754qfJLGD3mVTDJspbEb2kAZ1a72QZp9TQDch3vHCM3E3rNDtzKW82FgUp8KjjkXqK",
  "key24": "5hGoWyter43ry8J91p5pwHNquKgwtz46butSsbT52jdTHaB8YxtgtBbktSJDPNi4tNRHNyjCy4SmHuFcDdzJ94se",
  "key25": "3nkrowi4ufh3m97Ms3B1CJNeTdxp8EXD4TSWJ4iSXuieoMFNG8FTZxXDR4DYBgKUqtzCCW4YGm8CoDpRo3oTttrC",
  "key26": "19DxquGamKnphWUBZFar72M9Ddsr2Pr567veRodksXngVSYUg9uRsuFQUTczojTK5Sw7jfSEoeA1JFakZHpuRk7",
  "key27": "h2k14oCBzBeHZz3W73TcQ1eH9WWdG8CbHnJHLuHXNXEvebWeUcMRo2R2fuW3E9Uuyn8RjCH8AiWZaiRKW17yKg2",
  "key28": "q3WoGV27SsiewE8xi3jBmYGby8zSNxRZVz48HmjqLLoz3aQZQcvRZmqrQhniztG22KFwhzMUx3tkjo4S1HEKS79",
  "key29": "5WzTz561uQN5mfFuiLFoFgNKYgN5CvGDmKf73dPYzBwCsgepUdzdSvLXVGPn3Dzh7kXbKNAqrQQkLxJfgT66C68t",
  "key30": "3qNbjXANntdFehJWCwvNJAbuK7kdmqV4FUc9WbeNHaUkuLyfkmMHrQHfTtFfN429oLmgM93syBc2oCZtty8d1ebf",
  "key31": "wvr962jH8b1QakK5FTNxhERmUQy3JHVvwhsartySDjpnrvrKUQRXvS9go1tuxPnufRqt98bZ1WJz8UyY5ezFELv",
  "key32": "JXtMyuV5B9GhMpVjs3nv4VP3UNisHZzc3rympDnr7hGHz3EWbKUjpNU73BprfUXEYng88z1xiriTNfJFSfytmve",
  "key33": "21n4kYn1n5odcZT2UqN1mtouZ1hTvzaqAHxuDX6cqE7RD6hGvtS4MpehxYgkasdhXMM8aurGSgsg8iUoLNxsp1gH",
  "key34": "zJd5qqrCc17YFtgEr2fLBPgwuxp6NGmJY7nA9gooTWDrzXMRnvJ5kHu8ZFrNDtDyriJf87pRt1GEyxvnbz7dcqX"
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
