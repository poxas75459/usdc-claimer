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
    "2j9H9UW9pEZSqxuvpqDSAa1NfgUtKFHE8c39YxfNnKoRFqfwPgyj6FpWNtW9kEPgUhKxeYihEr9dAPgqQobxcmi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTyguPASZXoEWkguCPBfddVVr21GCapgGUUoMPAZQQxYUJ3Wfx73r6Xo1HrRXEvXsVX7hDPMB5q2cqE2RiRMofo",
  "key1": "4RtXt1dMAv9Jodzx4dk3fKRM7BeT92iEr7uRUoYJ3v16STindzgQNHiHuUviGPDuf5YMvxH6hRUoFVaXUoUFscEv",
  "key2": "3MvxX3CbfcNRMoXJNZK4mckzSxNtsZfz2miCuiHdorwxTmS1UBoR2CSv6wnMAMaSZdbF6fzzZpsuwPuoYQbi6LdV",
  "key3": "3WrrcXZEHspeyuvbgpcpuEx4N9dE7h2mH9vgEjW8FS7cxYV1tX9tJbW3RGEf6ZoR77MQRm8nWBYr1oWBpqKkXEEa",
  "key4": "4SN2w4rRg6VRW8hkC8mo6TezDnGMGYvnKRjoi54Su38kp8StEogRdbf1rGsypdsxXWT6uXiU5FcGrcRqE3HQnJQe",
  "key5": "3pthDHDYKvK3vhmg323ajYAc5wcdNxhC7WJVdJqRffjKqyaayj9rjnxyGhPjLEG8RPUzqawUCEqYBRx1ry9jBYTW",
  "key6": "3o4NQYPH3G8YhrFH1mwQdAKvi8ePA2iGzwaRgMwrTzUogfgQ7Mt9oK9fDhnz2LsS2ZwNeNy2tZdqwc2ZFTbrE7hS",
  "key7": "4m62W3URo2M9umtqFhpQ8eZSCv84cSZYv6wv1tSCxPwSafKdsnw7kVp9xBFmDm19oaanqeXDiBqZcTYgQ5uo7pBC",
  "key8": "3TGjv3nXrcmahcyk2AA87HAoQ8KEAfCgYpGirNfYQxckEDwd8KSeQM8xgj3souiznRPJ4aRWs7yFdTFNEBbwbK4A",
  "key9": "2hxfdFXucUCyEcqFgmFKv9keRD4d7utupnyCL9yLBQrCL6dsk9JeNaqJv6jycjNDF6gpJkdmtyf24LacN8YWnYa2",
  "key10": "U5VJiyfWgAjj3p4uceH1D1gaD5m7YwxreBHbNZG6CAPzZ217vNqjvhQoGsAhuYSMu17e6fYwDZdCJ3pTqaE2voL",
  "key11": "5ahGEkTF96uMvaZr83LJmryjzzy54B8gxAHzZ44JDttnyUshHNf8FSGGZVumNHDZCdrjuTRSQqbQfZhsme6SeeRo",
  "key12": "3VG79Z7VGRsVARePymnhjcYbjwHooycdCCF4199rKy6vVGSrGz2xBe2BVWPFhzPzppuVa9wa1SnKABnLfNDqDkB1",
  "key13": "2npELonForezb3e3yxCpRTJQ2zndgVn9AEbbof9ZCpxiF7CAcpGq4KFqagPZ5HdaFCNTHcoCFaQTdzsULu5rSoKt",
  "key14": "2cNE5RmqqRo75r1Nzn9kD78SGy3LmmDMchB8D5SANDUDJ2uHGvwhbbmhRSYD1eGK5Fkw88DKJHkSGh6Bznd4YUYt",
  "key15": "5xBZBWudfPEs5MXHrSN7sokjcDUeWd2xsRyg8iqhohdAvkPCeZq8yh473bdKfiNvzNVfAYDtZmN4djXnE5fNVRxV",
  "key16": "3ShZ2c7L9pbCJAGuvxwrru2D1yeL6GhxFSFETzX8Y3s8J5bg2eo494seQBFUPJuE1gErMrFaphoiATjyG3GRQMBD",
  "key17": "2NGE6kwY3UNAWb8oF8sxRdBcAG9i9sSeQeKbVeSs6oA1kj5nWi1qYHi4Gu8tXYUGPHvefpsmghQJL1bh9L1RcjR8",
  "key18": "4k3NTdn25vot41ty1aV23A5zVgrKRX6ZbHAtRoNTvMPFKNvJuWpbNQJtAtHrH3YMFwYeaFxqGyuGva8ZUChLX4Vi",
  "key19": "vFXoZiVzgW4aiVnZjFhG6MFKXbLdGgiixvP6Eyii3bLb8CZ5ecuZS5TRHYjgK5pjhPCwLVtmHWyCKcWJ5S64xeP",
  "key20": "22doZ1gMNJroTKGS75frB6paw91qKsrB5MrPdUhi2Myq71GLiG2aaG4x7c61aebYVpMipSTrFnbhqdbrFLFVBah9",
  "key21": "27vBGWTaPdsByjqrRjifpWcuDuuTM4H6UiM9Twf6tMuF1K17ooFkmJvAFPQcnvqHcYQydPH1oFfZd9o3ipuyK7Wz",
  "key22": "5hQL8Xa853u5Km1tdLQMaTtKi8Ge5tNy8yG7zfWcyVBjsdwoRsXX9S9VUVowMx9bxFR3zT2UswH7YawsZPqxyYrV",
  "key23": "5pK5Qfajs7S1KA2sNUPcmFAthQCrGtu8tfsZFUacjCP38E1c2N7s1ULZtrCGhjiyw7XEjifScLTFWjLC3Ed9t3XM",
  "key24": "43BcJacagRdThVmmNs4kncSw4xnbaNfvckGTdthFfboWcdZgBKtv1ud9DrzRDXgsF4jvZhhceDXFpX9qqAUQmQVj",
  "key25": "wKAj9nXmhyKmYYnPmE7v9sytfCEZFcC16ok6MyXZmvcrFtr4i5MMBGN94V3ZunS1g19je1rczfWBfgfinmL454W",
  "key26": "3b1PGGkADXxMf2ZEgMeNC2QsVQYpKoLkDwoTNT7dQz8rkh5tftH8ZP5xYWxjFwiZWjxPwPApgnXGLTDaWXkU2cn5",
  "key27": "cGRqVktSvSdakiKwmu7wcpJKNN7S5G1K433GJX1ir7SKiJfFtN6LxwPAJQHEQL4X2ztQ5wJn4LrBZL5GT413erU",
  "key28": "5QaVQa6Yi3W7CfrVTdekkd745dGs4uFKLrWvvDtb8Wi79ptn3DA5zXJbGioQeXM4SZw921ErcBHJicraNSwC5dZf",
  "key29": "3h8qHuyCYmPqph2AkmU1F8Q7b8Pv9Xgyp1Wi2azzdWWrTYuH2gXzrCRkFwi5vQ1UpYpiGqc3HZce8QsQuqYezc7M",
  "key30": "594XEbpgXXrxw3dDUjL2o9FWe67GBvnqArKc3GRHKPr1VUVXejZfpwhvrg1Hmd4bfMAxR6YMaJXEYRLEVYZL9bYX"
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
