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
    "2NxCii6s4nDtmkqHsBNnUeF5ttB9dGE8LjeiuZKK8QDpZK56pT7Gbznfya4AfR5MbWECGUgXFQVXZuR5cYKnnUxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiN5LEkTK8Wq2Eiqp49bxJvegVxwG7mFYYfcmXiKjGEkEviwnuvC6rzEBJAWZE2iK6DJpF5ENYP3qH1GCMmYwq2",
  "key1": "oCdH7QgjnYqWeWiPyiFNbKzaWguB7gMqaunwpFP3yGxxtQerLyY3WdB2tLaTwbhCn5jQkgNyQ3MqcLyVAZN1Vsf",
  "key2": "5aFYrrU6ZiyxVPLLsSGeKG29bcM5cVVnXyjjjzKy1e4Z1BgLfBxeEk54ChHNFNM1Z3MaVm1HvNL6Gm4aqMNLhUWD",
  "key3": "BaN8BhifirdfGUQ6RH4prDCrhFDewfjByMLu7FjZEiGaq2sk1SnS5pAT1i1E8GaGEhKfT6ngJYU39zQ19jw2MBi",
  "key4": "2Et3MLWcnYXdYidZ2F699vwKozSu9pniFK43ZC4GTqybGVgLgRKoruVdLR51jMV11hPJhYPxN7f77iX1fN1Ujcu",
  "key5": "4VZ2RJ574jsJxr11UHm8SdWwojgjRtKrBYSdq3wtyw4nyFcvWdFoTXtRkMzsqMBqvoBgrYTwjWHSX5brsEYSNZqE",
  "key6": "42UR5yf6iWcnM9PBi66fzExdiq3FDBhky3ARh9WAQZC66tFHcPDG4QXifGVrHfHwVJHQZ2e53Ek7vnumWVRqRGJ4",
  "key7": "2xCwtF3Qs5XxjHVC4U88Knr57oRdQpoYwHZAc5ouqTEQrXzokdxzPnmcqwYeyK2oHF1zaKWNUBHbYxBWE2kC6YoJ",
  "key8": "5UbqJL4DAxr4NoJfkWp3VxcHhBirqs9J3qss495jH3HtgNM6ERo13DTZUdxJr4ERdafPu2j7TzpQN7DYBB1qoz5s",
  "key9": "5kiEwsCXAT2cPNaLbFrMJpm4uEEnVY3MEFSo1392tshq2M2WPNU9RUe4J8Q7RoedU7vbXPuEKJKoshZGtCHVmbLb",
  "key10": "3e77t6jWV5zbH3BPAPudznvyL2QheiNU8iWcYvd12kjHEB4ucc16enV8Tt2rpWfg6EzYgTikqmUXvZUR6mCP78au",
  "key11": "MhmUrFCPLAN6YZ4o11QrFQTLL3XvTrQYNSHxNuMPBknoHSsediNHDWr2ZoYg649UrxhhSzrA7H8f2G8djYiYWLX",
  "key12": "2zAnUzwXpd4rCNJK6DVmqoQQAUW3fEFRJUHNDMfMuhdjtRrvB4gUaCvWkkFdaWmW7vnz3M4rkusTvcxxPkYR5k9S",
  "key13": "5BzjejTNZ9LYF623s3YKbaYqkvcucJqyp1veJ9ZfmD4D7CaMom5VpMJ4dNSeoEs6N3MRHJo3vhkxzxhG1m63NLV1",
  "key14": "4t8Dtzvrc14zFyg1fdgwCgAtPL6hH2nAUuyvtzDUXdMhXjeV9euBt37yuL8jRsWZ1DTgp1bG7KH3MAAgsuR2SGuu",
  "key15": "1HuzNdo6AtPpzijnVskzBgk1WACHUGp4JxYymscQ58hqsCSrTWsRK7dVjcjeQDLSxQtRnLjNsxkNCok7am1vv5a",
  "key16": "xDxbqPMw7d74VC1yBxUPqsnNMTJXzKaa32D5Ju4phKQiLqiCRoVdupqS3bEo7CkKbtWLGmho8xJA1skwQeiFSJh",
  "key17": "eE1p7cLp6wc5VxPtLBTeLfwQHX3Xffodi5pLqGxJsQotBa7GgAjrhmELv8enSAfCb7HXLo3c1vG1ojk6RjfGK4c",
  "key18": "yegWbJbGMeiihXc15qCu34zdJatRC5f7VA52aoA9EY7N1NDrNS6KUfBV1SFTNKfvboaG3cFa8vyw96uchzErjYk",
  "key19": "2q3b4PszDGjdseqkf5KLGiuWFDad7FDAXpbzbEuWVDoimpDXgthPfeow54bV6uVK5rtLakVd7GCLLkjRXwZHkFFC",
  "key20": "31nY3T1hb3HCoCdB8bPvut1qyFcCjzafUqyqavJWsQ65LuZSm55CtYzxptJxXrNRgC5Kwwd2cCckDRGkrSbLbM9H",
  "key21": "oh6kwDdq9kZM9Ppvfs1TLFqb3ZVZen2esica5uWjyjFPcXLjidEsroQXzHSeA7Vfm4oQmm9kVHt7kZEsHgmcEmJ",
  "key22": "45aCqds34yELPXczWVhWp7uox1apHNBDido2tNZzhwgs3GUmYmddQwFvGRCyNLZEyG22XMEHNs4gjtTsL75twe1v",
  "key23": "2pMQsJmcPXod1zVMhfVLz2wY2WyiwsYc8uGLZWA4fBvoK4vpzuCshy13F2rq8fSsbXnFz4NZpewrQHJrEqz562KP",
  "key24": "4SGU9ABFyRF9xBAs6UCDJrrS5bojidLYmboNmo4MAnewoGR3tQHqz2SgqEigtX4rHVqnkEZxkujiieUUHNr5VWmE",
  "key25": "UaUy6djuMhodnDmLk9Qi4LSiHshTCqK6DYx6nMAcKrMd5cPc93sYHaF2WhaE9rurRCxHYbZjkHmjMaJRL9XwJ3i",
  "key26": "4KevPPCAAoimPmP4UUn2cL7bJEcRMu6EizFXa58Wrh7P5pr37KEiNUavQ375epzQueiofC7kGt2jVTrubjz1q4Pi",
  "key27": "2uPEMuNGXxfGmEA289BH2verq5H6gZCBKUc8rVzGppWpG61tJYkL12Kgm3aQNw9jxMo1fh7coC5RXYzZt9e1K17R",
  "key28": "5qDPcsQEB4qLZxShqvwrv72YQbwxdV1bcsAK2QQG7eb1PapTSdde1Srp5HQatCMkjNCZK9cgsyCVNdu2SC7ttd5o",
  "key29": "dYfNjrSAHbeCBqTbx7TwQFF9uWWB9naAGdH3gsD5qYWmj7F4pzG8yaAXGTym1QqZ5vjWT15r2xY1A8rTsJvEd4U",
  "key30": "4pxCdY1vZY9sXo3aH5sGSke5vQPwpMgmXfbpMZzYUyMgASb27qdc91tSm7ttp1dKM29wtE8ZuEAuJB4bM89DzrGG",
  "key31": "5tcnsRCTmBQa5799aBF5DWn4DDCaFrZYwh6zPo62tU1r7EDMbabE2dVhhGv1RBZe7ZfeV8GQsNBUbUafCFCQm2xT",
  "key32": "RnxNvjmiPH9YE2gW4zPHQsMmncdgFDZJGJDK2rmm39PSKgqtwLZ11Sb3Z7e1qyhwBBfah22VEcxyHxjxodu6P8N",
  "key33": "4m1UGiJWfHYNJmSC2ModzPcZUjEjbWJss8uo22kdmC5bRKW8r3npNcx9eGbXRPJEs3LkM4WUm2JzHzeW32gNzAhy",
  "key34": "2zpf7GDjUnLhKBNLs5Murnom9DRyEaqVUpW5Mr9svcUYZMDKMPHvsV93XJnBMsGmy5byCEkrxk8Ffe3SG5GUvQo",
  "key35": "54Q7dnKqbtDpKngj62zUXQFNRXSZPDQwbFw59AGyTtTz6Zkw1DFZDn7RB7MwduaPQfjPeEFPiQmfEGjkRn4cDoGb",
  "key36": "5yanr8HEVnAg3QEWQUsdTH7d7x5mfNkgv91AeMgNJ71baebLvsZL6DoJsr4yJ42dc6cZFRc1aT6uDWPW5P6BQbFs"
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
