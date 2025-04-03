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
    "4iuGLnDzxnQnne8MHtACGkD7sAQs18Zq8CMfGYhuKA4ZsJcLjQoydoHd9g3xCG3nuQXspjMfAjYmqsxyUxZfGSM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DGdM8JqufsEGK1GpLjZq286x7mnaB2FstYwULPbbXa5HLDiVCBSoZC9KTZTDfRqibeZDgRM7DZoApNio7tWz95",
  "key1": "sDo4BNHWEoo3yB3324LXxL9tMrheH6ECfBFd4Cx1gSvq621q214vF2yxjCGyiJKiWtmjKNfu9zCEzkzh7KXzqs4",
  "key2": "2mXWs1NU9nP8zgJeeVFdB4SEp3haDbhvBvTxRXqryk8k4cJ259ibwW5T1syZnZSi22pWTyQgCicUNN6fiYPH5peF",
  "key3": "5yoiStoeTSpkLYpfLf4dXQuP5KJpQ6FN9YWjf2PkeFpma73R4uRPwJen8QuWoBJqDFtYs4CN3rWMRzev2yoUpS83",
  "key4": "azLVCR2aagbCPBAxHc2igmVryTp3NCW8odGFPwWJdS6jKiWuPhkxu99yj4rrk7n2qojvyxpToVhHLs2SMJTnDyv",
  "key5": "62Cg1KDyA3xD8PUfNmh7qsEc7BVso7HxBeMA85XKP3pG7FAw1safzgSGKBmJPms5T9iuRzxWPYc2FYQAutcMFYUJ",
  "key6": "ori6mUkSLbJ8gz4pFNSpEuSKiYY7YwxFhUdkr57irmyVW7PTK8e1zvhnz9976iWHgqoKmxx5yKWfR8VQXbi5m1D",
  "key7": "5gw6fCHfoDyHkLxPDPPXwsaANBbQAiZrhgpb66RQkuWYXFmiUTU6FCdrQXNXFxeoxdwaNxX6jpvywiwyRHqv3WKX",
  "key8": "BmgbqCvfTpXY94udeVPBenjZMB9P1riGxpsgwzFSg1gHt5p12ctBvXczwnghXcJtX7sDtQLR7pmxV3enoTXTnek",
  "key9": "2yT5GvvrS2zKJxqXA2HeqCtyj8AYAioPrBnGvVFq4JppPTsNgtS3Q7yJrbQkQL53sjw7AZm3m52DTp6wigi1z6pj",
  "key10": "4mytjm2iaYVR8DYhFuvASgx1N4dU6aiC4zxP3VM6FMaFMDSYEBkUTgJDeVFvnE5Jqjq6PTzgRMzwvDF4Xf57crLg",
  "key11": "3TX9zFySuHMGMLoAgwh8aoEmv8itYZzSDriTpZp8yzy579MGYguJ8pkQSwpb2arX81SjPbk9ZHzYcwXAVXr3E9cm",
  "key12": "4KUfJ4vDE9XEE2GC7VGDym8cbPzE9RdjafQuLf45eo8Nr1Kj4sr3RKbLMRTnLZrKVAXhUCbeXnuwRYrhwi7zE6jB",
  "key13": "3puERLk6pt2ZD5ArDXB7PkGgPzKLzJeoR6ssNyFv3VrNGqZzHgjYuBTLecjXMP33mxuZjiia8MdqYFz6z84SEVxz",
  "key14": "3qMHi7HvXF1z8gromtg27n3RrUZpumZW7D1gzxLCkH2iQ1RuwfggA44Qwda7TYxnvZRGXMwWfuLnj6nkKj8gbyjo",
  "key15": "hhLdufS7xbZNYEhUaDH5nQVSLQinm7uZh3zk2HHjt6HnsNncU6waWZYXfM6RvTJgMgem8xebcpxDEeotBBWUEtu",
  "key16": "2Hi6NwmR9z85TDgdYRVj5CebQiB3dJxZnFw5j5hHAouMnvd3T5MDQmA2k5tDLQmyPc6mLDUu2mzQB8XXUrC2WGY5",
  "key17": "5bH8GsafejiQ9GE9A6kvrimas6RbyayeWfkMPyUprwropuZDCTAsrnMpnwQB5H6yU7BAiN8BfGA5oi773UNCaWwb",
  "key18": "5L1uVB9iCMs4q6jZQwhKdWCvtcZcTkS3LBnPKgwVH5anmD2W3qVzpi7fqE7eiGjfiAHuAoxmQrneaqB6zMzRRohY",
  "key19": "63qm4gR67XhHzSRgT6HKRSHY62EUL7av3CoLFeAopFVne3JeoXNyi2W2csGfP3GSGE3QpfafkE4qpAaqNjHBUwco",
  "key20": "61ffUjewnSMqzqzinDdh9CdcSjWZYMqir3BvF87bhQSv1PXkkvaEGVjLGjkwVdU64pKRVQfFLQy7bikE2NXhoCTT",
  "key21": "3xz4hzyHy3S1VVmoNzmguRbNzmSHbvp4F4tTYcqjBQW2kgkmUFNjFyMA7PHz8KPEA45ZfD3TGzo7Jmwx7Rid16TR",
  "key22": "4t4zoWcKBarvsSwktyLAjb9Eej8joyPvLWTPGguy7yT6rTuwa9gAPMb5VryNrAyGTzVxhii5XNpWMReMX3a1RWct",
  "key23": "4cxtQz9Z8pFSdHuaRk3dxCBbHcuhetMyoQ2ZCnbRaQR14RwnsTLZEdXFobv1h5BBVvxmpPfjmkBEukTxhZBRtvWt",
  "key24": "2pJRFGr5ehzcnBNwyPQSj9g8fX6fWB1yjT3Ex5g72cXsNVfDMLSKpau9Cmi84L4SxGYU3GEgmDM8w2GyXNCSJJQW",
  "key25": "bmhNqYmHgnr8PX3z8mTkyAXhA657P2Xz7sYgJVP5KxEXk15Nz5pD5oLhCryQVGhk1jHXjaE8uQx8NS9Pgy5Yo9V",
  "key26": "44yrLp1G4prWo5Tzp4PoADC5sm6sRya1W9mnfV3cwZr64fsCSBaaX9svJkUmXJVmvBStoUzfab8NR5LtM7pmh5y3",
  "key27": "Fzrb9dEBa7hauVTmUcveSVZP9rrPZuW887fo8oXcGGkjqezR8K1YQDcyE6amdhDdgKs8EgimeLuJXea6gpQh3MP",
  "key28": "5Ur1yV7X7kFRBq4EUJeAR9TqkWTyK2uzj8JCz2yNxsy7ZpAzfLdzCx3yABULLHgHgKXk9Fu8Sctw7XkWy9VREUEQ",
  "key29": "44fRQbo5bY8LTSbCCvq37fiiAcrfjTdPg9DbBSJi1RK32d9MtXmnP25Y2NB9CyKVazjGwEYmA4T2B66hXMQ2HKyG",
  "key30": "5xNixMw9VxSJ7WxrGSidN7Y8bPeZaZgHsL6WAgyb8u9SLDsddFBUE8JurpDGkZNo7bCGqfppzS6px2MBTBuYA8cD",
  "key31": "4FYR79AEVCbumhCjo3A4VWGBpkmDy1y35sxeUbRnq4bdq32GnUkSMLw3urTLkvbofQZuPJbNZb4cgb6JhvJeP1FF",
  "key32": "3y2MZw2qj4awfcbJ6RedVKEBYdhVMkUUM4jzXJXALPMjPyfkRQcY8aFVUyfLeCpfA6dLFarYG2FGU3FqDY5arJR8",
  "key33": "2ppy6LBdQebu72sJw2HcXoUufNixcmw86rAFC8B6fcdvRZ3MqnhhBxybAEQKxcLNb9ipS4DyV3FR8TvVQ8CwHjyw"
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
