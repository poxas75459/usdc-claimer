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
    "4e9cz44TMKKxNApM9kf2BgdUWCPT8c56Niyy2hheZrCh54sBpurreCuTUZKkGPXhi8NCt2XHnryQBBH1v45wieDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MrpRGw3jEV9uZyC2UgS7K1pPRxrLANzWN3AVKCQpMoNYxKBijJEMDkhC294w212wX8zUFpGZcozv4e7hBX42kN",
  "key1": "2ubig3ZAvpB916J4E3X61ERfNcD4kxhaxaFSFoPzxkGbF4sR4FvGuzWvpHHEUGZXcTPspB3eoDAho5QvbhXM5JW9",
  "key2": "wF37id518j34aptBXB8CpqmRaupDBeZYP31gHA2LcnL8VgTVjuZVsouncdzoDVKmG6fSPNkh4pGRt7cDmagQQ5o",
  "key3": "22gTngtnSCXh39gduvBYCyKbRdcxPpUrENYz6ukurQyKgvgsEBYLaR3sC2CppqVVMbG21pq9t6gG5NifebKKSZ2G",
  "key4": "3mipN2gCp1Lt9EA5boMvDyvmk9q39CMK4shKAga1dWefYQpX1yPEn6cthmvMHjdWazGnwMyVJk9gLmiXnZ49RyLb",
  "key5": "512PjCAqhojx3FcjMGXiRDkA9VTuB2eBKqBcFbqf1XurCWFYDpXPzwRns5L8Su49ubbh44Cj3nkiLoiyEsRC4qfU",
  "key6": "57Exf8t7nqdntskGDT823xgRnvv7qLrbTHnPtqNTb5NM6XZW4TA2BeeWy1fouznuWTpf4PusUcbhPnwVdZW92QbH",
  "key7": "L5jKxh2ZPMk9LTWCaCE1MYmUQkWbqkc4NPPJzEt31sPJgi9MDuadp6QvhMDZYMN17xkKCt7Vuanj96BzdQmDPWY",
  "key8": "nkFj1dx66kHVzi6LaRkkx3r25SHsBhMi9Up4L5mSQ6Kt2KKVGBmm1KRjJ2WRLRUQs9u9dm835RESQKEjCELBveC",
  "key9": "4BQogz8ZqDhAS9nf2gdwgSTgk5WiyoLMZyg1ymszKKx3iYG4rf4uvGnRE63A7zPdiRPJi5nLPt5UWVUVeE1Zjs6m",
  "key10": "2LG2PTJzktUVwyStzoTGxhC85AaTCkRodqezV8a3KRVz2BBbDtNve4Sk4UEWMejQEAmiSKvBUUtNAF4X6DofgAp8",
  "key11": "5Y1s49HXG7rUSkwCu2RBeHFFQXpxj2FDUbuacE4Y7FFen7L7EZe4HXp5AVpSSt5g5GrpPVGaXSNXgVRn9gejtPUv",
  "key12": "65mmRnqKefGPqasmg19DNjKvfCTUj5SWmEgvFXJf5xQhEGZ9hgcU62r37KAVMMzXZHUMCVcAK9nB5AvRqNcFxQZY",
  "key13": "31Jv4ZFHCm6WZMw6EEs3Y1f5bD5zLUw6G7Cjxe69LHCsvm2xCo6j1pigMntgeDWxzFfYR5B3vkMwFr2QnGzxXAgt",
  "key14": "y9YpJYxwUzwWYmiJQARFDqF95hbCgaCrh16U3Q1EcsZNTbrVqKcsSmWvDcJCWKqPRLBdRZQp8djum3be43pUazA",
  "key15": "44mcBhAAjdBY1pPvRZP79zUcY7Yy5wajKjjT67ryboEthZWwRgL8wYthsi5iZoxchXrhJz94eYTin9FcSzVyqmkf",
  "key16": "37AMRUj6bx4bwA44CBLGGLYm9vSJCtWuYqDEVTqJSQjgBzb5VZ2CsNjowmSt4Rf7rNacHgS1Kkd6VH8T5L9FzdG",
  "key17": "fUxhh1HDgiAbg9zVVbY514dPcQ4tNX7ZRXmdx53EPvatNFRRyL96vaUgDFANUGhMUompbMcSktktMx9MhmfE9Nn",
  "key18": "2YSU36L7z6F8b35vrF31dMBkM2K3zcJknGkoZwYfu3ZN2QKNAza69ymqTjAX6frHP5mjdc8pYLcy1YuPvR9G8zr2",
  "key19": "5TVJik3pc8cAHBQspkJ5yrbu1TCFHXSkxnrsrGv9nsVnbfjrdie7CGGk8joei6AZAcyzsw8HyVUAWb8zbH2gHwxd",
  "key20": "3fLJdMjEkjaBbTXF1RTSRrAhXrZcx4ixE88Z7FFxZLB3dYuu53cPAkTNxn1bab7RZox3bRHLGh5PkUF1m4Equebr",
  "key21": "JEbfudgHnqoQSfvDn86Z6Bxwucav85y5LXPakhiuTnn7dMkfo7L3LszgDFoxHvN6MDP1kH2sDe1MJipZLzbjbv7",
  "key22": "ZzXSeXGGVFvBh4jJXbbLqkV4wgVHe8ES6tuMzJ4wPc8QUfeDh3Hy6NN9M7psoH7APT8DiqLqyeJP3U9PPerhG4M",
  "key23": "5bBNXyeucxXdzhf2EzYitX1Ef7Dspsre3aW9c7Wr7w6GTv3veSKNj3reYkGpvBCHcgMSvFFp8iSDo2bGw6JnTPNu",
  "key24": "5iDwYXY5i7U9bfLugqX9FK8o9dmrwV3F7h3eYDKqUdMj7NsVKq4eB3LDRgZg897xtez6aYGMuQWJzCM4Y2ksCWxi",
  "key25": "tfdsf81774wX7fETejGVJCwFoDSvomrb5HBQdpmCVqUuXjGhCoTUhcsdU6vaLKc9zF8L5rizuxw3BQX3Vg97bKP",
  "key26": "44ee6USQFnZwGUCFqNVAkdPKvK1VMUycVoXRCX4Bg7RkqKgTp5ZjYpXxBgXomCPUgo4b9JBNSigcJXuEY6KVBnuQ",
  "key27": "4DJadi2hFnihG7iosac1ijb7mvbtjj5P3tteJEVAJEAmyDQSaU9XDfFpwvjFDe7N8XcxicyKkuh86q7HPLnC3b2T",
  "key28": "3qjZVT32e1oDk4uuT9z75oLVSud7ahQoWjfBRwBwtw5BDfLuz2dqSQv8FiEBxsa8MVYs1NJwS2mqPAFAyMw3Tum5",
  "key29": "5AGheq7iUP3TUT91Gy8Scs83CQdRPQb1vwhphtbdKJNMaYTShGSdiin9exSHU84YmHD3seGK1yxLaLNQAWk4hsHC",
  "key30": "y4xmVj8ULSYn91E4e7ZZjGKjAniioTTy5a44xAXX8jwNPHrKV88wcy2DDdTxRzPwPwnKu86ZL6vz2sZi8XDwn8V",
  "key31": "Jf4Rd7Avbq7YRcU9fcXMwJ3LcscPcwYKV48SVeFrrJFzqgCX3CZjLtmAPFaXM1gF5hinPqwULaFgN9fM1ZGmmqf"
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
