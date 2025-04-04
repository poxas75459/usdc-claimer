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
    "4PLtRbUgywgngB2KUPXTphiquwSy2LnoMEcQPELpJaZvc5YKEBC2ddBSU944SdTTVVtWQwzxdUB1TPPe8kuDCx5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcriYFCeQeHnckP5CsFaNq6t4o6WjvMiojQeGo3Xc1StNiyR7S7JWJjhNHK4A83i54ABkLnQczmqQgJ4oKwQkGi",
  "key1": "56Sec75nkFi7ymXJvvxEjexeeaZVKoWWvdo1Ca8yae9xpPrB9Qvy9BuKhadirrBmmoHvD2PYyDDotRVvqRUgJMH9",
  "key2": "4HYTq7pmem6PejKLkyV9CoMCFwYriSviPzeKm3VKL25vDj6tawyY4EPjjez3CkQwThGftYuJq1US9nfsjsuFDnsg",
  "key3": "mbP4wp2Vq59ijPLuKXWxcQMS72eKwe7QvfLm1ygz2FKhHQU1GCxVTukr9gAM4Eq5yFM5hH8eEeHjmU488dzCShf",
  "key4": "2FNv5e3Ky6ToEcDucVatLhjZTSQpS7KeeGwPuR83coxC8cw7AV1BsKNd9B7sb8rawTCJ8chXxpJpxFURgGBaXR4B",
  "key5": "4DH37d5UQDs8Nzs1T7W9YrA4pLjrhNFFaUnr9ncYjpZz7N3HxjyVy5K6QL9ykaqksnyRCzTBpNSzLzvMJdW8ifs9",
  "key6": "2rxR6fyYhm6qu2Lbd3EtDHeFUSztgXpavBVeRazM2Edx5hC9TkNwZtvnW6DqdUoRHrgfV3U7CJF3VTkJVeR7uHAK",
  "key7": "2Z95RVLsqnTBraypwXodJ7URvQ12Nuo9dwXQ1k1suHY5N7W7GN9HKhHq4U3GRRQtuL6GtikjDUB7pgy7E3BdVXXB",
  "key8": "4LmmVRsda2PNHKCNwiTdMZ1bUh1XbtkXRCJpgzk12cZUqMkfuqJhG5hTuVmbMb4HjiBw689eL2YHTVifeFaLn94Q",
  "key9": "4W3ukGNW1X5HHuNpDXtRekCAeNVVmrGMFwBSYU9AKKFSDrw46tbSiZnuBhRqxXAos17UdpRCgcszAnuAiWkEiHeW",
  "key10": "26jshU8fSRLACUEZSDoPNZZ7UP2Jz2vYMsmrdyfEXErmgxZB7nTWMRb44iM1Vbhff9UPYvNr8cERmf28Z3mSVyMH",
  "key11": "2dTSkTGZtzSZVNnpJjxPncVqf92CfeSbt4QnwS3r7rfjxQHyfW2CsfbivW4WznB1EgsfLBseyZcMNMb9QDb6pq7G",
  "key12": "4QrvYM4h2oZGsQCdpY4rsWZQUMaDgwdE5iaq1SoHRHhMngJ64Q497sXQNrUkRLB4ab6r7BRuQJtxRJCnA1ngwwit",
  "key13": "4cdJLerJwYqBLNcRGdvpf6PeYPceVpg73it9h3GUA75dWknPJk43cCAXnhHbmuGCHUcZDbJqo2o5D2zeR7TT66uc",
  "key14": "4mzkjZfp8V7ZZTeHhkZNtE1PN7UWjK7GH3xfqHAgcguVe9a5CesxZJKgnun2JxZy1zMne5GSgWQWCV7M7Bj5AuGb",
  "key15": "2EDWPjoVcXEHMZec8fyEH2HuBG3vgoSQRPJQA334UAJnth5mtgc5LhUfFtNBQWQRtL6tE4Y5nNpevdpJjQvJ6UPJ",
  "key16": "1Vabqu1aS87nvnFuAx53Nc4Asdy1Cr5xV7c5QbL3dDxPRhPZ9EnpPzzLLHVXEvRmfCAcGnDNza6N2d3ZTihpHiJ",
  "key17": "63foeBiwR66oLM7qhUYZBz9Y2f2eEHyEzg2B72dtXKkwUstiPjZuZ78sciHWtKLJf1mvQCfJoRRSY3qLKoaGyc5G",
  "key18": "3Erhaahmm6MzEaJLWnCY18udYe3X4UUskfN2qEnACr4JPtDXYv8B3gSeCQPjH6bfWgFhfHyadLdQX316sSsTHkvq",
  "key19": "5GAGC2dHRYUGYggPaUYdt5SBM864ULGkno4REHffnZEJY4wvjmNKoYogiFspZExC784cBhxpUrhz2SMFywEj62rR",
  "key20": "2H29FDa14HZPzKgskQ4k971Zs43BqomdsBDbobu9gLER3BYzXhUErmd43pGieFNFtTFsV4m49dMAM5xmFvC5dVs1",
  "key21": "5WLWnQmGkdrZan3fUEqwhb4XD3De8uv4yqRZ9oMsNgobxUVkDvjrunLbZHQj6U8DQEoPftPpFZcLLZjjtq6qmZvn",
  "key22": "5Zc6FPiQxec6FMLtmH8tKQX8E1ePQEwxYdQJ7T88sDJ2FhavXvm4L4QdXobctXFaj3h97kaR3Tr5kprso5Y6APce",
  "key23": "4V4EwkeNWKq2smQGvDQxRLMvR7QxHtQ3PUGQKz5CatWmczfQv7Y9iKcjV9Sxwa5crevkQtmbjQm16hKZXUTv8cGo",
  "key24": "4TubHSMGz3gnsYn9bDKmPVWzEuyKSTYvFmGCP9UtYFMHNqom51WxE8vxGPcRLtamqnSi7Wx43HSgwTYxNbnEKVB9",
  "key25": "3QX7d4tUTYXDUbTfKLXgPuAR7c5y5bfBtCxDBwoP5x3QmPURbnjW4SaHtrNAHxFfaoTucVqdq4vcnUL8m6SAWzxw",
  "key26": "127RSPZCiuNYNy4qBoqTZcR6Xihq1EKGS3HQ8ry8X5t2rAKjezZWMfpNJRF2Tend5KXBteuuMs64pKPUepCPyRpn",
  "key27": "KAgGRqH8zYVyfH67fNwc8vPqcsv86rbBGFPEeWcxv7fELpQTrPuz7CAHXaDmaAXtuiPgkW96fsk76YRZxAfw3FE",
  "key28": "ZdvcoJvcoiLedkRcUHXuNpkBWM7MKxFdw4CsEhWeHgF7iNHUTguWd7bXXotgFRWqPvqgM5C6K5kXVdQqNVbopQF",
  "key29": "8CjkFvsnfpCF9ZuTFFw9tmfjryTaobaZG8NSFevW25eqAFKGjNoUonscmkXSGQyLYmDVphEicgviEouKyaLBrc3",
  "key30": "49XgyyFNZxXgb8c6CA46aL2sZpsJfqXR9Z85DEtP4JVChDxbAgnLjTfYAUJLmwyoCAN8mTXsELrGdQjMHbXG89ZR",
  "key31": "3ZqCR2c8JneLAvi3eNYLB8YVVuqs5e5Lo9xofNH15ukgygE5v9GmoPgthJCWHdaz7bYxPpv6vzH1hrYB3M4js2A9",
  "key32": "35re9F8uE8mFyi7ps9SMwoM1mMN45KTnWWDtNywtg1oMnwPCLo4rfmVf1YfBj3xdnenmj2ZCCFtFmTjWi7Momh9S"
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
