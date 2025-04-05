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
    "4EgwK3DRwKCFrUEJkfPE6SFg5pQZxM5DSsuWEtgfUpoFPYtEKXa3CY1kNQsoRDHpaG2EH9QwiRWz6vBgjU7m4naC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwwQ1LXaLP3xTuerYPDeis4oiYFwB9hF4Ct8vbTwKhCKoNYf7jpTdnZnWxTNBpkvfafhun8ovbaVVU54czyqr1",
  "key1": "4uU5jKgz2WqKNjLGjMsh1TdX7WecBvsd3vsatRpo4BFzUGoueKZWj184YHe3ZJg3fR84eE1kUL5oKTtkCGnRvqNG",
  "key2": "4MdSoVEzy488egK4MrvCECeTyZK3X4HDaa3RFs5So3T7ra9trsiTYticemuAvX9JrZQuHyi5W46AJHJcAxvnmErk",
  "key3": "457d5EB4PyDhpYNeoVL1ZXC5NnPeLDVsMpEEePqw7WtuJjPiQhxqjfo5XMSf9EqzJKFPCAtrWHMy94b7inUPEA5P",
  "key4": "2XH13xgREikY2XK263VEaQFZLtuMBvGFNxZiQNmo1zS5umQeev9ce3BipeYmBYGdTAKoicDKtpYifnJ6X6vBqJJU",
  "key5": "481KeBBgZ6TPMNtJ9BYZMJQNfhuoL6EcNKSzJC4hwiBjGXPNStvdheMfVrxauTFaJSgzS7gSRtv4rA5J1pn7KHdE",
  "key6": "2kc4hehvbnioRnuMwJWkRN3Rd5bmnWaYz5Yr4QeHyddDR6eF4mNTi7tGziC8uXvsk8Kgs7g9AkvyKJuWCsmCy4wA",
  "key7": "38xnZmbJFH4tYNt8DftgAFhFThzqkzL2cPToHsVsUjaJkqSWNezWtNzvfuww1KuYtCYuMp9tfbBcZmeNy3FXERFE",
  "key8": "3Nm1Ma4haqX49h27K1wXE3NHkG7c8a5kE1zbXhpz5rjMjAhKuqqyL1ufDJ56st3TVEdJXwvzesLtaT9sAAKcwTfp",
  "key9": "6HHamUGWsZ3GkCSs6LgkfPyNN1grVbNwkX1y26DjHzBU7vUaSsGx3zRRMXQfMRp9sBt54D5gZqZJeDBYXTyLi2p",
  "key10": "4NX2X5zqzX38rgFC4QkUCcaMyhaPGaxeBV4DXiwwPmKqBuM5gWLj9PT6WS4FFdYngVLLQrsEeduBiMSQf6UDhDEj",
  "key11": "5ekGX8nRii22jdYQhV8DtkUNy3LcBwpXVsJ9ZAhqagLCDKcoKuj4xVR9v8PcmXNrnAt7URLJ6gUk74r5A3ioEsCw",
  "key12": "2hMzJMBpbUZpQXCJU4AwYvtwhNEnYY3LSrzrfeuoXTZQWY7YGPbroCRJRfPNNvV34zWaT6rPvsNKyFt9SW82fxjo",
  "key13": "4tR353u2VpuVn4LM49yTd3yDmBHy55bgoAdv65tXBdLoQRJBFyAkdhVhhJM9P8VeUeLUFa1xxBrbu2KhLmqT46H4",
  "key14": "68FSttH2mqm7nrGm9H7oNLoPRGyy1VqKJ4xzHCcSVETSe39mq1quBX5PAEgPAeLLH2VCTFqNLuXag8pWGu43ZoZ",
  "key15": "GqDaMt5nk986kDxshZwx8GwZ41HzkCG9ZjHMebVH9iCvTu22NPRq6U4APg2uV5BZk7jmaR1pBXuwWuyMXpABwnc",
  "key16": "3341FfUrSGLpmkxiWbndnoigtBLvqZj8RBrZs9p8BHkn4Ne1YkUU6Js8hhP9G895kFDKk9sFjovsfR9HtGFYV3gk",
  "key17": "62QPDGPdCwFai1q8c8bkjFvAydyT4i9tSYX49vrP7fv5MJZ52QUVUnMsirxoNraLnqJJsLDF4fA9eBogQfUZ4yJo",
  "key18": "65XZp4zqRb2FyGmSTKWe1GJUkFTcSqzFLrg6oQCN5kNGqNGKuZqnFRNipJFZRURHkFM8v5E2a4DHMmGZi1baDNqz",
  "key19": "48sXMoGEYLVwZBuKuxYMXDuVNbhvcjvFi8wY4W6sF5aEWgUPtboNyQTcb3UriAzAcF61RmYFFzxWD3y8Z43mSwWP",
  "key20": "2uX55e7S9GdAzmtUaPWTXKoPgAPxPqsbc2ASn8VyUiJJTyZi4U4d8QmcgcPHTUheGmiZn1omYCQKL3Ak71q8oCGp",
  "key21": "4j51S8HXo4km1SPFQ81K2Te8SfPbey3zkmkmdaopFWWvQKGMksXy8HGGTggDTB15u2QRDEVGhrAR7a4uvxbgNCcM",
  "key22": "2PXeN6fRCBr81k9Uh3jbM7RyncFcDmfBgYAQzR2fe3u8zvFuYpQh2RH1VmaxTBGQZr5y4oBM1cgD94YqLMpLb8YW",
  "key23": "3BwUEuDu6bWhmTsTZwvwfuHYbkaVVRrgbtYbRybds54BtjaMiTLdiipZ9ZcXUJyse8eBPGoc4an3vnYYQqK4H8qF",
  "key24": "5qPwcRX6MpDLg6qx141r6qbj4ieADBL6ghryiJ6eLMiTv17A7ab1hTrhQE1Nh37dxmnRcem2gVHaPei1EW6Fs2ur",
  "key25": "4zyADcvWJmU2cpzLHcp6G8gz2cnznjH6BskSuxxhMPSj6XSVGe2jfaA2hjgRsUraSCpHxGLxoB7JdmKGyNFYPKpP",
  "key26": "2EyaZVB1CTkEpPzWFNnjeE8PonWxB1274qCSCEgLUAqhny5KRrdPfeEov28jganFYQBsCcv7tkWTWFD5YMf4S1oo",
  "key27": "5aTpCEkFh2o5LGb6KvcDBkhNnYyTQvD1jjBMdE7kt8yH7LFyYy2nWeYjhNzxhgawRpeoV8xRtY5UT41j4eJNWEz6",
  "key28": "E4GwvqWMdDMhvHUZZQ4jDBMeHnu8SeTuDhxEGDeBXPCAW4spMh8K2FosLegHvPsmDc6eQgQ7wpxdENPN3EfBgJ1"
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
