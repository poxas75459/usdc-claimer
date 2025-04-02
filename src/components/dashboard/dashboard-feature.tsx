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
    "4f1NvgTSsp4p8opcmswSVpdfte4q48HbcNDjHdYWSNPeebXMRzYb2hLM9oi8gsFnGzGf5gz2P8w9PvbdWePChHRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wUVYvaUpevS8oEza3jJLDVCDt1pDiTeyxHozEH2PjwzZSKfRqNDsiPvYUFAuzWmyX8TeCkUABDkk44kfNpyULe",
  "key1": "4KSD819GUUcZSYVc86L6cGgTB8Qq59PNxBxnvJ5FKzvSxNhiEKM3cj4eFbUMwWzeBVKKCTAEm4xU7jAWG7Wzs1AQ",
  "key2": "3nRbQbTH4r1Xg5wggsRgs6fHemWErZjBxW8vug6LDU1GmnV5rhgi6ZWSTUcvt2CR6Gd2MzJy8fcYKtoAPLRxzJDy",
  "key3": "4nnNFr75e3g7rZo3mZzHs3mhfATP6e2twHM3bTMLR1VMKhwiFKeLocFuKQ4C2pM8Ean2eELDSDhECjo5pd3LumCj",
  "key4": "53UxQaoVhA1AHAo85H3VZFprTWxXEy63Gd5jGcfjGukztSszshmxyDfG7iGmKjwYxkDfeBd9mz3hs2egdq7BHTSQ",
  "key5": "4sedKX7AwV4NHc4nqvhHSZEqFzrzn9SnHDGGi1W5ouHsQ4rybuJxnD4SkrAVAPnt6rQf5R4iqdNzPhYZBCAwz7G3",
  "key6": "4GzQAw4nDQfZZLRdUA15nt2xKzcG7zMLaASM5H7ThbxxuaQVeRGvMRrRemYtBiPBfxa3iyn5BbL1d6dLRK9GWTq3",
  "key7": "2RFHji1yRDdQgJ9EWQKEK3m3dMYiKywmkcd661nqeFprHUvs7rwg8UDucesdvf95fpD3To1bMkYKjTQ9Td63ttnJ",
  "key8": "3ZE3Y5ZcWLFaNdRWj7ZDE7fiFRAdCF19LrFxfoFtJ4rUagxQAdExo7DAjMjdLpxtQH7PKdFmdXQRuFETvfKZhEA6",
  "key9": "5Pajhz2faEsf9ezjFHp1Hav1hsFGeW8egnp6X9739yKns3hKjBbheT66qJYG8E3zWZaSMqmVkvcARhhid2NY1z4D",
  "key10": "25jB59cn6NqxP6CjF6QEzxPsdNQJitzHvVR3VZaeZWYXbwarhxN4Zh73C74YDpvNVqoaZsykFFQ176MqYsyMMW3s",
  "key11": "4U7mfe4XKnVER8MHeyKAG3ReeHpM45a6AMBvtY8QMeDcEX3rW41bHkccwL9WRmWq9eHaAvy2b26CXHdZ8yTbBcLt",
  "key12": "2np979LCrsLwCCdKNdrikaiEuzJi1dUQPB3VLTm2fVGp4nFL8CVo1qHwcw6ezUckxuLCQfrHC2gUCVHsu9PNkZVb",
  "key13": "5irZaDieapp8GJSp3f1R4uMpDiNytqUXwvMdMjL2Sx75pNfNX4M9Kn6yLULdm3GGetm11J8V9qf9G9pg4YdD79vt",
  "key14": "RFxRjq2aw67rGKSakVfhf8DNSVEozG1PUGxgJ9qZyFVqwuuxScGZuDfFunAJM252VLzV1Efn61H6DTQuxXC6whN",
  "key15": "3HRgfTFtztr8z1CN27eVhANxEJPxh3rGerxgETuRmUCmigyCYCUK9Ax3JTZMEQ6cmJUf1i5YiBfFkDLqWjvF23Bo",
  "key16": "5czcFvrriRQCo1eeso47Q1ZiTSAkqVQjWGLsJwzeNrxzyknUsAMuJxinRJkmg4EapDcbUHN76fVww8EQ5F2QRGSh",
  "key17": "516h8yHEqGwLqfoYBVXjP3Xy9KkySDmSMCgAT3GDBRhhZ1M3YzWB24LXCoVEubSo3jNmiKQVwgjBgEdF5T5me6V3",
  "key18": "3yTm565EqvG27egxGDg8Bp5nUzADjNCk5TYZgAC2uMw26XxwD6jDeJwMGkMkmRxcGuMsv8nDgZAC7epbLwmbxhP9",
  "key19": "33HCE21dgNRqLZB4bNfxdm4iRgWWhLE3mK8VmNHbtieaKuQR8ngQuFNRjRRVNJ25vY6MoK47yxQ32xjytLwKaa1d",
  "key20": "yF2pD6dUK77Rcf1Bs9tpDS7LpnFoyqezvttTBrupSpu9tDG4Sr4C1EARoQWrNtR865u8oBKdJKF7bCQvuYAukGY",
  "key21": "3ToMWnfsUdYh1kamnEyG85tfTD95xDZjsBRrtkKbGzA8hADjYeiAg9rTvqCm3UT6dU2wsyY7zgDnjjVN4ZtfXgV9",
  "key22": "2kdB4KgJN8kWmgkrLiJQAkzM9LXkx7mibD7pNzgV1cJGzu4QLRS5MN8Z6xc1GAwiHpaSkonxRG7JkkbhA8RYDeKL",
  "key23": "3DszYw4h1zVyWtKnXaFYvN8TVkfTV1TW6SCiTAA95dwBq97BmybEnteDcADYuApNtktpxnA5nkiyXTdP4fSobzix",
  "key24": "42K7TMqHM8E8trtiBZLHRr3B8BtS2mzjub5hbsvezemuaLaBb3Wu7c2b4U7pat2hcTrSJmkZBLoBUNYomZP2gcrb",
  "key25": "BAb2uHfrSsHYP1jGtfPG93mZ3p1Txaap15nc1fh57kLRzApJJdipAoRJBPgD9yya5pjVAkxQYsUf6ot46xEGZgV",
  "key26": "dr7m7ccZKropB5n8gtK16Vnu3evaSbuQ1tPdys2MbpFavP2VphNmud7qz9m9qheW4Qd1WgheJ44AMNLNkpVRkJq",
  "key27": "2E5rdTfnmwvfZgs9kEt63zKyQ3gUh9vTCxYqGA7pLSafVfo99ZSewdAGogicXG4LawrTWxMS6RYSrEoSxio4wYNN",
  "key28": "55YZahhai3LxodxHvi8eayDi1AZQCLtc4QKwyMyKg2QRo77oRKpvw4FDKYPVb4zTYRYRrwUwmG2v2tVk8pN9MsRL",
  "key29": "242stGStSRfmShMmWe6vUwNVY3zTYAxvR6jMpviUzjETBDcgdtrCncMThZ1dc1VTiVRabDYGrPe8eqFQkH563wih",
  "key30": "2rWQDqGhHTTbRZFNGkVZEqfRP94bp8ygSHkbEYut9MnmR72vHNpbnRknZ6prZKXgskvNznwyhpfTyLqgA5tKK6A",
  "key31": "5Yk2dRm4Z4WnXLna24K65aJxaYCYVaoamvsCj1VGWqPKjqgiAuo2dhije3qWRbsxtEJ3TtTCHNKjV8fV4dPWYtaN",
  "key32": "5gmupWdzs1W8PXDHtXTvWQabc7hMapMyT8Q8yepVfUcuf6SncaVhkwCDJMX9SpDdccddNJSJEPbTvKUceHiSQ1Fp",
  "key33": "2HrYX1JjvPGcUSbLa1pprr9KrBC5zx4P52j9nstt2zhnwZKhLzt6S3Mgi5Nn1UzuRkt8GLZpJKQuoAjBWktREFU8",
  "key34": "xPuzPjkhQwCUkXzfJvq9oZ4iFvD9RHdVUwaehvhqKq7ThW5UUogtAGeSVxuUPahJbquzkGvhBNbFvGi3oB3vyws",
  "key35": "3JPQoE7BWqUur3UKrMKWF2ceBBJpqUH5rr1i1FtcaHLqFzjBKKx7KJ9UFC9Kc99pN8g4onyPWYpEQhnby1jrBpac",
  "key36": "11Ah32w5wZMVb4Ravz6pgxojHwySePbDJ5tvi8VJHMWSovc6UnNNMcQh9SfrtDuyqA3Eid4HVHYkPPwCUCDsC8q",
  "key37": "2uBTHXfvaGGjQf1coRzHtg6MvFJwfrDZa6oVsKTVx7WUJTT6mw9kR1A1sT8AnNnMTmRUt4YRWB78Pqt9XsJx7rZN",
  "key38": "NRUCho1Sm3zLdfsGeEahtjm8xkyjFD6q4MXXWs6eb6wMrX5Bsa8Ws8zF7wCAkxLfji93JWKxYohbTBdevXmifQP"
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
