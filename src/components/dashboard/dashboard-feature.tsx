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
    "4ngG2n4hJ1DhFsc1gK4BhBF5dv72b6DAY83ThsxjHhYkHf6K3v9yjdb57VJiiDguh5M9nXxXqjq8NenjcMBA9VQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPMSfV5grN4pGdkAimLMguNsyvzQHfhotF6eyS6a698xPwo3Jt8bwiZkfVJ4icUezjAeNrcWgC8wpQZqbA7jf1v",
  "key1": "EyREqhJnwn726WKtdCRN63PH1FFGybuAgZE8YRDrChz5Kyk6XkvD5Jwwv2c45hU1rVAMWJVv1PGjKiKQeoQtiHS",
  "key2": "2TaLoyV7mxKvFKGRJ95JEsGnvuQ5ZEMidYZ1hBCQYUohBvcwGMhCUnKQb74awFfnp7Dgfx6MAwDsQuYBotiSRbnr",
  "key3": "2QRXTAeGKx22cPaBwSEgwD6GbJt7wDS6NbntQGmLwj21VZ8pTM1KDC1io2k4Sqs3mmYwwp2E6FKhyiTjMycyWywv",
  "key4": "3RBgwYd3RbarrxT8A7x3ZFwVdyu7AHwfz1cbCh2g86MBUCwVuwMfZ4tHeGRvHacpHUi8R2d1CE7BAK3ApuKMgUdv",
  "key5": "3fFSMdohQa1RVDtiKcr4tmL3MAQkYEaBeVhTjt1b3pV2oVkxjS65KXXQb7dtHEoTvw9n6ppRpqf8XexiE6xt5cHX",
  "key6": "2NCt6Q4pPveRoUexZRN5iMa5TyEN9CKHaM3gpgsPyXuZKcnsmYckaZSSWXquuvXon5952XuvHu8KwRGS7vNptWFW",
  "key7": "3akHQWCJAMtdj4yzjwneUzjLTm9E2hb18yK4eoUyiGrCwSRanNpsfkYHsds3Urkm1tuhzmnqFja6rh9E36zr5hQo",
  "key8": "5E1GZ9w6cwFd4LtNWRH9JSaKyBLFDp1iotQwiiULRADJDzPtQeZDnDPpviwMLercwKV1zyxPitBf6YRmQ4Fzw1vd",
  "key9": "3kLV35FtrhAz3DYbkx8CFsgo6dmLRG6oDgokivsRz5vrSFJ9M3hajokEGjxsh6MoF4oJ1yGVFvAGRvUnkWq2hXaS",
  "key10": "54PY8WuMdQShUTsouJ8PqqtM5JsDQN86Rm1JpsASHxSk1cgQfDawK9nmBZfi3MXPiLY7bTA6ViGMbWf6EXjFrmR7",
  "key11": "4JxS6LmRMRXwDRTvkdk9krJij2YookWnjKUcGP56E7Ucb3j89R2Rr7c62g6NYw2aoqhswahR91aWUSytAFW35FUi",
  "key12": "3pJgt1hH1RE2s1yBF39b8v7hSrW4N6B4mUXiCVjZijqhvoT8b29J2ebDHqKrC9QW8FjyVxcfCLeRDHVhY4WCKN3M",
  "key13": "2vaURmNGAMmqYfZx6McQXm6Yiayecm9RBADg3fmvMMCH4ry1oqfgSqeij77mZ3N3mjizsFnp1KdPDswtUtFd4MW7",
  "key14": "4WsVrixfRmgSyczHUkT8rQubHbqkUdjjMMY6E6BVZLw3uPt95JTEP5NdpJxmyzgrZg8ihaeqWuUky6pWRDmwgTfD",
  "key15": "3TjpDAxtDmaxv7yMfqtweiZbJdXdndRCjhBSDg5Xw44xrCeETdrzcvFv8ZWq1zZ3u1kiXWqoHSchDa6R3yQF1jdd",
  "key16": "2GwypWfPTRebF9iGFDXopRJ8JJ3FhMCDDmw3ayrCCepzJuFP8dvTwBEoqwyETu6kSRq86TckJGFefsAQdcLS3GkY",
  "key17": "3PfD5BCechzMB3hRQ96Zor7fNz2brE9USifunNBE4iCNd7uYGwD8iMfSNSsGxXCHiwwbLFXHwargXQGKTvcVGrv9",
  "key18": "4kg5e4swurktSz4DjBoSUvAf9iXNbMThHqZWUMonndhCWZorpyuAuxRLXKEiq8z8nq4jwU6p2NbB9NPZZxnu1njh",
  "key19": "2dq8R9XaJ82hTgQeJxWnQBwdQxBhmbYmgxwV5qFi92kS3yY8wwBKQ45UpwCxRVvxfR3hembGoZH2fPXLgb5ZyJT4",
  "key20": "4hiE97ZeTqGon4HRzeYt57Lg5N7RzF27A7BWw5kKmYBCXZwNeEodVSQC61QqS7sshVAc11mcmNkv4XyyNjQvfso1",
  "key21": "3ECm36QE8BaZthKwiTUQP31JNuHrPP6aVQCbAg9UanhKqfpB2v81UUSwbtWK4cLYrkS1dzMZbfviVmJusUv2ui1K",
  "key22": "3HPhXmfCWPHLHnYm9zD3f5qZAa6oyN7yMd27RCcCj75mGXD9GWNoBHtRQ3MjxMqKj5U3mL83UwU3quaKF3K7RpXy",
  "key23": "4RVSUCXdzTbreFFuQwSVsuNJ1HVC8MiW5wqHjjvGpZqLNr7TrQJQF1fNsixPfK76gQue1u1MGGwzh1eM7YV32XAJ",
  "key24": "op8Hdv3RWZwqD397opWYx33Q3cwc2H1ULiN1FEom83kuD4ECnjBvTWWXPwbpBW1x4cdoZ9z6ySSreKc3ichdfcx",
  "key25": "58xFsT397TJjSwTZz2puWfGW8VFjVYSywsRYtGEdgqjhXX5mv81p93cKbaWauQUGQExLDoYSrfbzp8jEK59me34w",
  "key26": "WZMkSb75oUGKvQhXjYYzvYVSMoqaxqQdz7w2TCkX8oGdVvfP8UYgoa3wYbBYMb9MMZrc3PuPb5nqgtCUWJK72oW",
  "key27": "qaY7NBf4ByzihWEiJoUdF6RHFrZXygx9w7LCfem4NHDUwo48bg1sfugDL5RmtzdBtvgwzZwYa7UDHhQJX9TP1cr",
  "key28": "28QUWzqXNrZTh9mhgyaK8ToNrJNLg1yWaarHy2FRyk175W5kzp7TXQUmGopenR9ELEu6X8EQS5BS1aY44W6yZ2iN",
  "key29": "2Te7MgbRAWJkpW5D1voPo9CAXyrgwrPbN5p2jwNggda3SVCDx49UgFHYgLLpzHyBczedEiopVv5TuPLZ6sLGDwKv",
  "key30": "5m5xNJtQvdFsQejzaiekviLpYJhYhz6ufS24j1LQaaW1g4Dm7yTRCmrzSUYRuxqZnqNoeW7Pjxh5k9vtwWchq2XP",
  "key31": "RUKdGffs3BW7gzUfXzAszErCQTRCkBzE2jNvnFZvCqydy2WQz4xst5gWrNRjTJ1S7iEJabbPLc5f5BWS61KHV2j",
  "key32": "4vEYqf3qhbopr2buYVJBSVoRXJ24iHmLVBbjxHDKhwEYCZLkqVhV5AAPa65SUd6vQEsQ5N2F3dEBrHt7aRj5ztFa",
  "key33": "7C5TGizvHT6XwjA14p7Zz3cYvym9NDMV5MGzGjaPw8Lyw9HdS6AWbeao1ZboArL7n1x8tg7jJeMjwKC7i1MPVD3",
  "key34": "5cHguWj8qJfcowXrws2FXzEQva4wpMkSrXWJTE5Cj6yWRgPzKQyy7ipz2kYAa9iD4K9bE56rU6v5SQGRPobdoz8n"
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
