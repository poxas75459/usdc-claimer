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
    "5BUnoVpoYxvWHDhw1gitUjJ4bsbQ8CN4o9YibuAHxRrMR1SjVqWvkGpob1DZVBf5kFFwErAsUaVM1p6DEJBn5NNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNyra8aHP5bAPzAkLC855e81gvpBjWE2ggLPpprSqjSSdSuKEFDYBeUotfcLBQzbEt4cZLdNRUWhN7kGYusXgD3",
  "key1": "3bPLfy4nE9aggGmv6A3sfqPtdKqQxtVkVFcq46KCxX3xGxciNvkLHcgHnfbUfRcnGqpxqcEjxhfXubRSuC97wygW",
  "key2": "2uScJBVFD9WnefJZ9shWGGqssV7fsPMvTkYerz7XQ82DK5M8jTuCYGwFaX2wWSxgUMGrgeRfASbGwYzMWvrZxeHS",
  "key3": "3JinUSsvmu797BUJisvoHPYBgGgE5uBWhYE95v8PnAioQ2km8s1dN1CP5DBVDnFD8rz4BgWDXgb5zmwpMu8XWUXk",
  "key4": "2HzvuJA6BPYYpXGHkqLqbytG6B4eojAYnPQr8GENpavXBdaXY9Mde4xq8mAmEymttx5N7v4uuzQ9DH7MB9VMiWKv",
  "key5": "4dWd48zWTJWqVyBJPia6cWARfNYXn1xzqM8bS4g1raJr9EMJMigVHjwRXBzswJfUgvtcbMNYY36dNG7kPdLw14fH",
  "key6": "4YfQeVJtmmDK3QJAeWzMEmh1CvuK5SRBcY31kZjM4rZ3Qe3Ciwr51FaT8emUoceQWb8sWFqXbRDP5vnH31RGPcr4",
  "key7": "5NpmNfTuMk9hxQgMJzfnZ5xLJaR2SoP1wxVGomhuAGfTKSRHgaZFSjoceQ4PbQosgE6JjvFVMxwMdbCgpfmKgfvW",
  "key8": "JYsdHWbbsC4WCXBASP6VBEy8CG3sgi6TzPwXE8QTWZCdoYy8Jp9gG8DXjMopePhAPA1aXQfPh4Rvry5Dv1gpY9B",
  "key9": "3ZmkTHtynFR9Ls19mhp8D7xqtTaRf97PN3zFe8SXsHpC6242h4L5gxB1FjXDkk74q4t4BU3ZuzZbrajRSHuxzgS5",
  "key10": "5mPHbnaBKVzGhc4jXPvvXfyMJtNzcDzux1jneCbUpCfkVRhh5MzPjWEK3XpRQNKiCwbVn7a4YbGZgEcRHksVyP1T",
  "key11": "3sqHNTfiCZrEW7ZcFQJwgwYcW6NXDY3UmDoQ1SMoEWW1REr9G46BtdQBBXbQHMYGas57nEs9rZkJVubCMRMsi2Cd",
  "key12": "4LH6ARrteUbRj1YKkb72LBmCufvLX1rY2jYEvS8XSwBfXiLV7N6pSKyw1zNK5FyGW3taiXpm7ZMQofcGRMVzd9qW",
  "key13": "3gaeRjAs3aNW3V6Hra6A86VYzPaTYWKYCibqcnAUNX5tvj8MXgVWb6MFTgebs4fpQ3GPh2Cz2zsoheYiQMRm1pYX",
  "key14": "21mFQxNUrX8PDFDnQmgAkU1cPdA4QVjJdhX6TPF2vjtDD1db7XbhASEFbREeTaGkTieoXhtmRXnyp2DooQka1nBY",
  "key15": "AH4hsMCyYs1kmwEtJV7rByEoPAxgJDvuyEaFq5NZiG65UvhpPPdAD1jA1u1WYt1iNghj9EJPiiaoP6t3Wxzuzje",
  "key16": "3wfkPUCqX4mhEHWp9aAxANVnkMwn3W7yuv5HCPugRJgzh8AoT63GRRnSuiFj8bE5erL913Yk8YwZZ1kbk8bmfrFs",
  "key17": "3D3FWg9pyXrNdnboomiQYTiQsCiVjwxXfVwA1wzoZViA3ZmF5Tb32Nr3j12sqKyjHKpDftsUThR8effATLepvHsA",
  "key18": "4iswQrtNBYBQ68abwX98T4mLKKe6Cc3BxfMRkLC5nhNiALDVbbS47LneC9Hwxb4ZyWrx9Td9qhQgt5ipRWWmKo6t",
  "key19": "KdseCd3jUXoTinuMHEc7geK9zVv2mAD7xjPJY6DrSoPZ5cgVaDPKNN6q4GcERnovF8d8gdfe9audt7CCW2cxFhv",
  "key20": "Z74X8SqL7sRmQizsAGsaKRBntVki6mHDJxwPtUEx5We3SN9fmAQMsdJ6wcW9ty6YCqTJ7cgPBsueMZY6u8w4nZ3",
  "key21": "65off24Joo8yWrKnxVQQ5aRtfRTAN8PgL4bxVZKDdvzLJUcezsQ1aRCGPrxEhTdPvsZfDmsJQKt8tykJ73adJQVH",
  "key22": "3wiP9nbuwnaPS9b2Q4KbVCEV1vJhUgnZ1cKKGAabWN5uFfMQUtzgEMsmyL6tN7Aq37Nt4heSS7RnDdPiahaZtVXv",
  "key23": "5z7AL8ZJiDmSPGUVD49k28M5u24h4hTCxeQnZQpe1ebn2fRN6vue2NcN3oBJ8ATWsbGz5dRNzda7cwzBePTJRvNM",
  "key24": "3Z28Xwtb5PDRXoLgSyh72wBrQCifaDh7oEzbQrhdQiWEYUZQgNS8o8gfP6sx9d7FvpkZVmsH6YbaXYfmk5KGPGJi",
  "key25": "3xAprRkjo59qdfjhg1Jy5jeeAwtBRJDVDqtbDjwP8S4rMXwJ4gYqz4qPXjd8XF7qJsE13GjGEwweFJUd82WUkEZA",
  "key26": "3ziRUgKcQnEqQWtoHm5jFwRN85o57BTjiSAMKJTX5KrazScATiB5vs4mGdpRMx7XM5p43WSXmnfTbt8GN5LMo5t6",
  "key27": "2Y5jibZuSgYPoR9kjDmmrF8L5jF7rzuhaRCL6rxUv5b4LNv8XUWcswgzyf1EumYJ89E972R1Lc4G1NHAMQ1bEP7f"
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
