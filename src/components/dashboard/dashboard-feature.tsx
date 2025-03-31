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
    "5bwCJND7KVe1EvbpPadmCiNaDvHntUGuEYguwvdzh9jFUGUJAMFcJ1mmYzw2jeiRy96pwBCtt5DrekZV3xWCJ4bK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8gqEigHW6E1jbKmgtpjUNgbZNuASbN3Q7gUo4GaHicQZ74P54BbbAhc8txoKbx45HGCT4LT7LVG6a4zxuDETST1",
  "key1": "2WSEqbSGQZULbccJs34utFbZW75srJyo5i2PLe6wEYXjxp7rxij7TL2rkssUeejhfnat3ZryUxSUVP2TDtyC3HVV",
  "key2": "5FbokeWXArPxoRosS8fhKki1tB1pywSC1KFiyRtrKtgqKEGx6E2otUZpH73j85GrDPweCZB24PJpQeNtLY4BQ9WG",
  "key3": "j6wAk93nGBnkyfWikXrYa5MTiWXs7kQ3aBU4NjhfcnTNxQRtAipQVPcY1jYoniPntvDfnd1x4LfAQdjp5pebej9",
  "key4": "2yi7rBYmUR8BgfisyGZjmhtqTLvcmYNqbtNPgT7YxR7JBVTwHzNCKbh7DTxWZdyGsdW1yHM99ZjpjwJtUAL5BKdR",
  "key5": "2eb5XwuvkJ96tqQK3bK6jvUSiyRs85UfhD2Ugb9bAF3nbN48cwbxARHk1DvwGEN9YvU4zgcn1decr4f9KbLEeTbu",
  "key6": "5McmcfPqaWUPbkidC1hMjhe9UumCrjs1NJbnXwKemJbdFgzrz4iAhTvBBjbo5g2L3NwP76XEPSFr8UVMKQCpCV4v",
  "key7": "53eqFEhTe5mDrwofHBidAt2jZX4EEEXSQ2HNmSqVjynTVkjfZHMWeF5LyXSkLrRMPTUmm6cFbYruh4AvgXa87k9Z",
  "key8": "4KZGVLcJrY3Z3PSjA9vPvo8uzJcNxmFU91cKfR5qzi43WCjUVm5u4yBC4YJjWHWMCYVxJzG1PB4d85aPBFEA97Kq",
  "key9": "4Sw63STS6DkE4Zb3VAxNEVZQvKJ5MCdMdCfn5nsFLQLcgoYXwDXqd9ugjKg2Sai4G8bbtw4fzWL66h6oyjCuCLEV",
  "key10": "5V8St65ZGi3UXyH8atJsMfE5fYvunZUDdfseGoCTGMDyqfgsaR2h5NHvyKeYG2pMpYECKjDKjQyzkcRs9CuFXJ6r",
  "key11": "4WyV1gHtKpgpxbjSSrHd2CgLCjxWesa2vCPxkyhvcbkUZz4aEyUUzCBCXHLdXesk1Qtp1cJdY9GzDSh4Y73VcWMP",
  "key12": "5RDv72hJQveqp6w9NNs4QKL67tnpKWKGHgeWXNDBxi2tgDiz9p3psv5uPQTihqTYsyEM17VZSByx1kTPi1Ukusa5",
  "key13": "2xkxFJmcCJJagoNaKCFWnd14H544rST6aGb4QA2Cny8rPpCu7YchGE8eFJNJwgBX4476ZPhtpXjDjoHcTEUYo8cP",
  "key14": "3ZU3qojf7X8yiMwW4E5MMgp6J466cj8SaQr25LpGgSKqM4BFk4GnWErxLeoBitfhbc2kcAygUcNJFv3MsxwHgMKE",
  "key15": "3wsKAydTtNCz4QdJZTt3q7X2JmyZbsz5P7Qp4x4MrHyoj9ampaKuWDKRswaHByJGMnTJfcmiWRMAh7wH6eyV4j1Z",
  "key16": "iUf7tt5QMGHvx9TeffTqXK4LRwKKo26qdopAhw5Bf9YHFZw7H6834UYzAmdNBFcod5WLXyAUDbm9ABzFYKmYwNp",
  "key17": "3zevc8Du6VH8cFpQYPbp98bcDJWekYVrefvjecM7mdQMd5XZkhBQwXCtxeQz8eF32mBtwgHj6nRDgg2ahYXc6RG7",
  "key18": "4sjXsCHxj3JQiz3Rfh6Z33q2vcTJyseDgxvHGJ1fzs6qCYTXRhk96et6sDFGKVLWeXVtHN1tAx4bDE8uXy4bgcAZ",
  "key19": "5HjvG1bEpMDYQid4mD99vkMbtA78ASV1ie5U1U4A2yLPECLLRymvex31RUPbmPLFTsa5rp6D16o2fFwUq9Ysu8gR",
  "key20": "4zDcwR5FMVAZ2xdrCh5WsZFw1AuvKJVRDKC5UJ97sKuCNp6Z3SczGTYLZGqZLRRSYQSX55RRYex8J7zj2wVYhahh",
  "key21": "4givAGe8DXBE6kPLrS4MzDXxmSKXiBxjpt9m9CoFYtdj1vxmzTWCqUds49h2fYrt83XWFNFneLtEov3bgaHpBHLc",
  "key22": "Y8PspCdSfKU7fZAJhZKiLBQee4aeKFa6bdWsnAN6agRXcMfcRMPgQzLyAbdTjQU67p9rf8GkT6sAd7k8zcmmVEt",
  "key23": "2LUE7uWD7GDNVYmwPioPE4ENZuG5QEGopct8EGBZWZUA3KMEa2aqMWArbicC1VpEnXrYUXKEUDRquVZdDvYSMnNe",
  "key24": "3otg763CVQWBX8a2JbvNnVMPa3FzmhGzezXLQZDHfKwrFuTJnmMe83a3ZqYCZwu8wfzkA7q4NPMeGHQzzm5QKgV2",
  "key25": "4HJk2C5h4vSC7MDE5V6w5ShXJRnhagXurKuw76TmvffyosbrNDPYgJyQSSvb4fcajA3qeMToedvGkWZQmfWqvdS1",
  "key26": "3WLKPjEXwocxHQTnT9CaVPpay5W9koKc8fBC67cGBnuzSCHFcXbZVB9sJsc7qy4Rqk3U2tFXbz26ihJPiCWBAEiS",
  "key27": "2VhM8NBLEfbaQYuEVmvNuXKkPoBMYUyy3jLm65f6UFSsi2PUKfn7WSGuvvfYwfTAnSjnTENqMRSCvmYywTyUTaBP",
  "key28": "4r8bQGQwoevaD6hHzoun1U5wszmUofjZifgmXyAZg2UdjcagLac4BMp36fUUYcskyonSLZ7tLu8t1PLXzHdKNnij"
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
