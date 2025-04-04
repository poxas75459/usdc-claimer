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
    "4ac95EjHXWaWHNBofGni72wrcCqCncv5p4PaWJBMW4AGWS6StQoMcqgvTQxdDm85kyW2Rh437Qn8VfB8gEzSMjjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGem7G31diWciKTgLRf3N7Lp7kJa11A1UuWQxfpWeUH268FWmh7Z1PYaZx3op7RmAisM6Qgwcnkx4RRAxZyfo2R",
  "key1": "5TftZyebDu9MrPbpp7KnfPmf968nxF3LMuGpPQgz7ydVGWrCLe9btNMgmvC2xCf6AxTWkzkHZ3Yz183UfBnG6RGE",
  "key2": "5yq9p2nxY5DivFTbJ3eNvRU2Y43K871R1QaNR9YCW9EVJfTCNw6gsiYtvZTnCeBEeKVZjnwAWgyyfqVoLTtEAz8F",
  "key3": "2NDzCujTXrGGarZcoJoAwirrdJjx7T8p1ATpnmYeJ36Z4Hmap7NsrLCRU1zeNwLN44tUi9FidKupjmqUXqnEeDK8",
  "key4": "2vD2DKkGpQHoK2yUYc5PMmqEYm5rcrBqZ153jx7nC4U2p5xtFhEC9dSN8m13jnEJSN9779SGN9WjGfiPhhDCR4JE",
  "key5": "38sQqsWdE6YrqPWw84cX4eMJGN7mR6UJLohmW7ehzFgG4SZcn4bBktyipmCkrkrZ5GCqY4YK9WUCYhjmE3xJJVKr",
  "key6": "4twxUNo5pxfmNf8HdWqPKB9sF2BXhWoUicKodFzm65fBLtWZPyP5Y9QgLBLrdapufEfpV7SeWXsVRCn1U9QczNj1",
  "key7": "3knyd4LDhKyaHwmUtdwFwtkGFUg5JV1tnbqQEuLc9XQPhsc4ShhkoNy9qc6uVptoHht3gNXaSzDvC9YSCFjo3fkG",
  "key8": "3AgXVASkL2jberQRh5DHuD4YA69dyzMKxiJask9EZRWEoGrWQsbSpEQMhZ8HMsqnjBux33HQjbqqJU2Y4ZULDHVF",
  "key9": "4amk1eSVxGP6tRYKJXAwemWFMTibhVNgXFsaY19psNcKCaUPBm1WJr8HZRKCmM7L112J2Nu3wQU8cKm5FUznyFEy",
  "key10": "5yU81X3mfMc5ysUZTWJ7QPATJ1uxJ8VruGzGx9on93NWMiZxkKf18mdJi5UhmX42BiM4fK2xYBr9HGeWRPN5Eu7d",
  "key11": "5HnfuevRmYL6HfxWCgNWtShqABCV3Xcf2Ux97YtxFdvq1ECkG18z6Go9osyLFJst14wcf2T6wktyixf8M1KTBZdu",
  "key12": "3mSrFnDTBjXny969x7LkYvPLo8AryHBxvtJfq9aGxjfBmAguJv8enNRcjGPqNMbw6xd3StJNzu9iYZCmQZiWVVkA",
  "key13": "291NEfw6BE8zcmtaH65y5BT3tU5QBV9zfbmZRLg1oMBnnqYs7EW5PNY8jxWGRrkKWStmDaQuppdDTRzyft7eRtbx",
  "key14": "4q8KFpSDueABnMDCEyegqaGd3w4iVSh1rqP1GcDcv1qNNaYExzgMkFUiSRimGiAy426pHnZXbKiHQn4qJrZ2ZGpn",
  "key15": "2SLhSVLmV79cuuJpAkocy7X8CeMG51xBYjhPRQEdJxFgTGKWFCd4nag6ZeG16fpzQcfprPwcUFkGDsdL2vZig9JW",
  "key16": "2wYvLmivPZ4LRaoJ1JudSCb55V8aYQWqPhwDm6wpeRFLDMdufuo1S63BdNENUYVa23eXGKfGhyfHAkBJXPHAxnBM",
  "key17": "39driLmNp5Y6oDXvNZZSkRDZwGiiWouTAV7pUnBuXEoShNMAvefywShZLNmjmNfUvhjwWLdXGD6dNJbcS2W7Ddvw",
  "key18": "4Zfs36u6V3n1uVfZHvjGmuuZR49W1zBP4mqtNUEao724zANYDrpbpRnnx5QEGmcgVZYPbHgsbcVdAry7WafuEypU",
  "key19": "3CVbZFbH8Pjf3Lgqfi8MRhL7xnBgGnoVJGPwV1oQKEFF73v5sncx999oP447E4tHJ7cTaAe3FQxSAqitGtrz1Ckk",
  "key20": "3JRkFXwZMfasecWyuHvYMBMGnAH1kqBwDYSakbumytvDAG94Ny8tZ1Wp64MKv4CrogDTYdiCxSbET7X2pwK77cBP",
  "key21": "3YCWMsSnr2K115W2JCJQj4sjF91wXEp8SR24R2yc5Su8C7yQn2aiRd7q2y5vA4pPm6P5HavQVRPUNCY6fN88P8x7",
  "key22": "2q1DCRssa2R77cSCfNHCvHDVnjNQwF9jqv8HdvpxuyNzy3bcdG9zysRMzU3UJhzZd1kvF7uDgPyqTy9bzvRAZfRU",
  "key23": "55tR51j9krikxPWYZcvW4HH47Sj4fK94e53USZuaXJhNQLVEcoMfPFQeGD8QKDjjw3SzbinkdM4bEzWLvFu5Cyve",
  "key24": "3iL39QVTyUuDSvCDX7A8oJjJrLMVyyAwvuAgMQWrqciy9T32E1qKoCnK7HeU28fikobKR1vnev3fuDcmj3rGhL4b",
  "key25": "5g1cEa7kXRSSvZZedQaLXcjRX2SoMbEgxpeiizaJ4NAn57uT9GfXxVLkjwhkGwZFbaAn9TPfEqE67RtFmhoq3vBG",
  "key26": "5DxihWeaHzBAPSsymA9xJQ8etXmabDbKviwVYwvb8LokCbxArjqFnAac3DMupBw9EqiJG4Z3vZRAikXanDBx3mZ5",
  "key27": "WpZZRFyHQLFpXY6tLLabZJGPAos5qs3yEwvmmyQnom497Zomac6X8JYfdmAHnDuYjRyr5XDCAkkhwVieUYLYCEu",
  "key28": "3nyU9mBHEvMXKjk3SzmT25VJdthF2aCr2iu5oXQ6rr3qpkvxgmeEFdT8h8Q8sy9V1k1kcrZZ3YFYdHih59fNJDCh",
  "key29": "4LuZJLD4JSQPwkMeHyhx56biXyNesGd2QQp9NPoXdwUEonnWS763A7WCgMz2fNbKoMyafrEdfsKcpAjpGhYKJdDz",
  "key30": "LckmPP3ZVEghUa7zH2wYfg8kWbVFnqGYqDBab2uX2Qq8VHa7yWSwjD6KB6fPS4u1Y8QdxB6umg9QsokpGWZpe2p",
  "key31": "4Bsjv7WMj6tZ2FWj6od5CcsjogWnPWRnC9WVcWesNWwpYUuEemVLPNojMeZn5wVLNPVvNq3PhP8Ha4b4mb6FpAwr",
  "key32": "2DjGwyTsQVU6y7vZjxGz8wNQosvDtvQqW4ajypu3GnFmJAYZWAbCJK5WZya2SWE2nFNF4CNaRc6SLUoKxKkfiVnr",
  "key33": "YYGy1oAYp162pz1GrR1QqTHobgCaqLjf7eTzUSy49k7hwZck3D13fWuQfF63Mf8zNCjbEmuUkGQuSpZpXCXQ3af",
  "key34": "HCYAMpJ6XpQUHSZeUV4evF34MPh55L5XGP68r8ANmFb9V7pvmc9AZGviwqpmn3PgMqfzi4N7GYzoZSh2x9jxTZK",
  "key35": "DTwKmwxGV6FWZjkkYCx5oYb9vG5a3c14rkCabvLvTx59to7oDJfnjMnpWLbJMsTkpgRtPmr9G4uc22AuwBYEVjp",
  "key36": "eYr8BfarGLkmVgZ1mwhsohUoDrr9WUHKxa544AyxXhGKzKuHD3KpqkymNCTBhK42XGUVmEV8J2XSRXXvwzdHW73",
  "key37": "ikmCUxMt98VnZz8Qee9J7BTRte2WLB6fdsWFKBVD1YjW5qzJ4ANWfZgudh5KMRtDAR1buznB8T4PSE3WBWZ9LnU"
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
