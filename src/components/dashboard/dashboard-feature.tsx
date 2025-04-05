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
    "3DXJkGvVyGQZpwnWjqjwXfCHes7USd8xhwqHhBg37HxFkKS7zD9ZJ1hCV9YbMJ3SBsMarA4eJWMPtcrLWP6XRxz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zfqk89TmpqNVaDgMuqHGNmpdMm1RBgHi14Hce7TTxm1E4BTCNMXxjMtFUjw2XVhBnqv9Bxjd4TAzgsyQXx2hmhG",
  "key1": "4G8xSWiJozfohMQQKEK31q3a8gnVirvqTF612YeMtQF9QvNwwfiAwdJ1vJKwjneMLRsoNwSp4GYZmfzXJEw4Qf5n",
  "key2": "4yd3aXcKu4ZtkxczRMR8SiAR3bbg4Ku9gewYZ7u1gc17kNphjsfzr7jC32DnDoryuFiXU5vBtEs9RdWeTZe6FMpX",
  "key3": "4qwoBTnrPJaRxadyTMgVf7aC9A72nGLhe3nrnrCTD5zimcV4gW7jo2uKxCv4dc8iv6ZbKTRn2iSMD6Zwb6USV91m",
  "key4": "2wk3fFwZwa6E5NyvnwAGxNZzE4mm5w8FJEt8n1kvnTYe7bqStDQ7mcMuoWJ4cSvRai37CGrHxRjQLkCAFvnUkPZ",
  "key5": "5xVv1888rfFSDum8bYrX6MVJ4wKBCAEoe1kcmxGKiwveZT6HjZN6FWTtdkotS1X2HJrX4Q5kSuxKqjipJc3qWG7B",
  "key6": "1xPghppd7wEYmpeA98ZiCUZ7xvXMRnghxpgdfyrnZozNXZFfcXfRyTzkHEU4w8GwWGMWMrsC5Fxa8mHSgAc12UN",
  "key7": "QadjbM2N9CDAqvZYKpj8rHMXdcMHCXuL1gybeBLEqtNZ1kKFx3X4bRWCX5nCyUkef5Ukv4LkPrEVDLoUbjE1463",
  "key8": "5qxz54Q5a7kL6PJE79g37ha7BZHL8gLqvMncNYK6PZExmmaSSo5XzY6zA71HATY4yXx6HNDy1SPjTJscnKCDZ1uN",
  "key9": "cN2s175TdKFcjUWCtv6XGqK3RtwRniZmGvMYeyED6j9iT5cyUFVJB7vSSuhjMcJiCwtUZYEXwQvGmc6ZREZU87Q",
  "key10": "4viMm6RHY3AbstpNd9mg9TLNus2JWbuTCMSBwMkcrQQ2GmLPb8nc8N2GmoR31iWndpDrYfNUenAAaKHAG1ninf7C",
  "key11": "4qv4sRuPDmErtpZUKhnrDbVBSyGyrD3jGHV8VYL27TUWAkTbE3tQTa64aB5ZEybXNg8dEqpkZsY3pDNSUsJrqtVj",
  "key12": "27LekybZMSm1shj9ASUfeQNL3gvWt8gY7QMF39nWZpLtPucP3j55xXvb4JPPaAVQTefLQP4XCr1rKF1tjAb25Jom",
  "key13": "5L2seXBAWvye8havfNGGoUFAwRiZJGaxsenoa8pJahNehMdE4AgD2zTSYPSZ8K3Tt8bn6xWrAWiXYC8odVFZXW2E",
  "key14": "26JKGt14yYxXhigK3EsjTAuBPYneFhWETueu7mzaJkPoPngEqLpJG18i9zxW7LPbYYquQXkWZgoqcZ2dH8yNvejg",
  "key15": "3jHBvtpyCJETGnwCGyNiPb3kvgMfqZ6EUFZW5quqcdoPpnUYqf7D4bLCNPWYCA5QwAn5EeMeoexUYqSNEoKVAWGQ",
  "key16": "Bi8rB8Mi9Esgm2YA9GRz3wQz8XV6A1tEJpxBC18MXkmbbJx1Br5UdfDnuEF9ftXA2hykfYvBqSz3smJfvsUXWDR",
  "key17": "G6GnCxKbMD1WE26qc3Dsn1DmovZ5PJ1QqTxU3LVZpR4hpZ4cLGd1CtMB1PRwtRQhh7efHQNVyx2unehibZb7NY1",
  "key18": "5v4tmbFTH8cFN2oM7B5q2RCsAN274Hr9ebHD98rq4Jk9VnojQiCav5u3XaHwZwoK8okjTzoBFCVojkSDPvSkicMW",
  "key19": "rznNSszQ1ayiaAK216tFwoWodvqbk6bEjmdFFAyvBJ5kJa2u3Smfsd5TVAxEqugr9iY3nyyTBkATjVJ8YCnoH6N",
  "key20": "5P6HkHzbmyvcHTQLDruwRaWyLrf1qn6XdTiGCi4DN2SmdnWY2VY3Wf8qrfvUJymsByn5nxPVfJkG41VCFz9TTAQn",
  "key21": "2cQovezSDfH6egqP6VGvazjoJm7DxQKN1atGS8o3koHimZYPL8ZcXXmunu11MraLzfD9s9YHJw1XiV36Ds2dfAZu",
  "key22": "2K9hgBNQeuqxL69GBwSJSUFAy6nJDs32QFd3Xk8vsH2xGoGhMCsjH6HQwaZtMopaJpL6LJuRkFkBN5rvjvxhiooP",
  "key23": "2JpbyCrE4SRTpYx3QxXi9CQpSVzvqvfqFGs41iCfYeCX1k8LAseTAtzaEfz9zxa8DjZCG2dCfTpyDpSedzwy5FUd",
  "key24": "5uXsdV7QnfWhX36z3oKGrAML3JJWkmFqCPU7v3mk6inuTTe4J9aX8xfVzkRtp7vyrqoS6RLftUAJdjmuPuLBoq7C",
  "key25": "3oHtBcmiMtwN4SHmAVTdNWzAu8XyuGztWSEma7fxz1LTjp3NmRH1bcuziMTfTJBHN9uUcEW1hjJcbTBjgPDjmGLT"
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
