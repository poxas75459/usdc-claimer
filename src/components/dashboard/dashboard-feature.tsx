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
    "2kTKjUgPTSdpCp2XnLe7j2ofdHxhFnV79aDpMgSGZVjKC2YDpGJS5B6apJ8wRHcqxqqExwCGSAobSZX1QqW3sjqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esSkgbfpZBcgvSH5tZHwe4dhRpp5MvemyvGX3p9ZNKgDT3j4Xvah3jmjqSbHuSePenx53kE2GQKs5ebdR8msE9A",
  "key1": "TBhY2o66htrpYat2qcNtJcwrcyqdRjyT34bmWgMq2xMb7hZzv2rQzym5KqTGa7YbmMUPSgdVNhHHCdEv33piAxr",
  "key2": "2yaWh8egjTuFjEWPevg6b3bu5exm1Higi8uRJJiLEMrVPPYzev1hYWzkJA6GrFbTNCskJPLixwsXL7ZVAqGwD1R7",
  "key3": "4AYQFnbGEmRSYvafuW9tqj3zn1eacJX4c1nsfNSxvFLHZHfUqbJtF51J5q8gNhcxeSet7K2N8wKdoCDjfwJWQR3S",
  "key4": "2YpaZU2kBUwukvFbbB8DkQq9ZdiKqQyMf8hF6c6dhdt37bZbxuEM5HLUYu36PVhivBXvaXn7Y8YA3bMsSrBRKGfm",
  "key5": "42PMEE17dSsp4WPThZM87bwwpHwfdano4E2cf7gyYuQXkPWm2aMZHjJjLSQjiTj8DyvNcj8e1wiRhYwwhdVcnbGm",
  "key6": "2irLTfQHUFphzaYoFnguCX2kigyV9bZmpdJ6pKnXp1HdPLWTYZrU6rvc33BZW76s73aS9WZGQ3Xhyan7Yc9JfjJW",
  "key7": "5TyVcbdSLYzQNUf3aCCgEBui492t5ftScX6kZuvdsemc8kaNjXAcmEufg3jGTZiMRwA4SGYdD8u2zMe4LZWrinyn",
  "key8": "3TUDELUXGAVK3oUQwKWFR7MTgt6MCM8YWYEaEKcGZQNjjCpeyoMygdu1qxVLk8SBdYXauNCu5vkoCiZcWd9j8aJs",
  "key9": "5ARsHXtpA6d1LMFvuJjfxyJaKYHkZJL4YnA56pE5PPy5bhVf5EacFq8cU9r4zV2YTb41LW58dF9vuaR58fyddFnn",
  "key10": "3c41MCiT4AddNegYK8R6ZyFZPeBd38U9ZXtMKHKwgREtFt78VBSNDVxCkT2JiFCarg54cQMXVW9zZYF1VjYr9p5p",
  "key11": "sh9kkaHqBpmqYdcT5Txx2bLmbVpGpcEr79d29ikPoyFnyBpNG99mdGfdivEnaz1ycMNQ3TE3LFE9mNwS7M8Txh1",
  "key12": "ERu4Jb5SdvYGTZGZuUfpoMjGzj5XgXuiwhkGMu7S6yo5ogQS7GWG8yo644anH9dahKGiz4gTYDPXuXhXpnPtQNG",
  "key13": "Zp6z1JigP8wcZBFr9eGnDRtZ73wyk1HB4KzrhamyYH6Uj2rk5EPeFk3F5FRD5wLvLqdYQ7Xh2hqzW7wQszJmAZ2",
  "key14": "3JP92xaHiftKdSqDtT4zVVGc2ZEKK82yhdZe7VZeKj7g1S9PR9x1aaWzjtDh9hfqLVwr7dt8xjuN2w3AeQSnSHb3",
  "key15": "5ES7A9uyyoiNpzKAtA2ySuy5oJp56AMCNsMujsa9pSZywGKfVQvgXXotbjZSzSLuH7cKA6wozEoELdEnmwJaLkvq",
  "key16": "MULHwTcUAjBQvR9rSydDvKwFYdUNY6DoQGENrNuEiqJQJtyUu26vHfosm6Mx1B11Qp9CvwUtSRWgjRk7Ja2esjW",
  "key17": "2E6HY5qLokENDi2jDx71e61PVtHMus35rGuGNcppMv1npdcgeDwo7RDjUZ5PSBviXQ3K62gxTJpCPkG2iSuUSnwq",
  "key18": "5nANuMorK4sQBQgDGrEYURCaNewudsWob7jykvK3dVPdEwQxLPQwY5g5rB3jn96kktA1W8PkC9f481M71LyP4MpL",
  "key19": "3ufE56cmvUqKA59Ggt2cULKeBByYUTT92DvkrHsqqvyJc34G76yL2t75swnjKEwP8JHEZhVu6jYFJu6PyPkQvarS",
  "key20": "39swGi1a4sDYzoBnVmQ3KuNaH8CeGJNVxg1sqxtigtnJN2bJUPRncYx5QYxrAYr7umtTfHh4g464hRpoGTzHf4n8",
  "key21": "uUsixJWEkvNT4JDuwbjYfYcSpD6vK5e5zrk2xyoEB4VgNZicGT47E9ELF17pHP1LsiWGdPThFZGwhm7YmoMwCAK",
  "key22": "4hsW4cjgxmKixZLaH71hZs7fo1hFU9mcuD6UyPPsAhzgxpXoBwJJ9SJNAVCHKpYuNWU2HJQCPix4vnWzMKhof6kd",
  "key23": "5qvhhG8LUQGLH5FqhEjGYXpeL3Ei5uxXXGQBx4gY8jQh6wJY1DUAPc5LxvTytpoCtxyJpqiUWnVZzgdWB1fNHTwb",
  "key24": "2GM4kiUvEupkgP6nANXFx4HXkQWRzAdd4jptoVmvQwjiSvGiJnXG9HVrNXxYhAesYFr5nMRo3rPxdEvTkPmZT2Cz",
  "key25": "2AWZkvjUWx29qU4UUfocmYKcj9eq9up8uVXKC745n5eugefPooPkPcJCiCchYhCMKzKfncZNvPJRqAB2qNaXNV3w",
  "key26": "5JtrXEpyFsg1LMugsTBwK1dxXkR1ZThhWN9u2HX5GdbjXmhgoFoRUMGteQnMpMUiHyHdfzNkVMdvUB3WYBW1RkQN",
  "key27": "5zCoQyvhMXfj2QhR5pgC6m6fqsWRP1fSpfT3bfEnj4XAhoNdaY21qXVg83voGrhm3aPgvy2pBAq8QeBJCqDPw6d5",
  "key28": "4aAUQvbBeQxpAf6G6WPuerfddH4MbSkXhJgEJpCGgUMvawotJdqS44bsDvwaahizapPF5CRSeUKHVfWSsRZkgfW8",
  "key29": "4ihmPxcYowXsjGPEyprsMg29WHFyJqgzE8EVpGE743WWr1MTrYUtps9g4abeqUmFyHkWCYNkxHdFeQXVHSnDGBTx",
  "key30": "5MfRjZk2BXF1Z7gx2P1NE1jARYYVqNBjuEpN9Gsr4wf6rvaT4DxF7nLXjnaFHSb5NQ1hrKxcAqmnQtJhDBa8Ve5Z",
  "key31": "Hw2v4b4tpVmUmuPTAczx8QzSVTxoi57mnQbUwyDSPXWGvMxDEvd1vArbsb7GntaFmfXFeNZe2fn5ZZdw8QsAotM",
  "key32": "58XU2mEXbqFKZcoE1LfrKsduzfuhMHSpB8TgtkHNS2CEsTqoy7qGHZdhumu4CeNKJSJBpnqRXi3RCueuzE8TunP1",
  "key33": "WVfmybgG7BG7dpkEPtyifha8b1UkJfgsqWRnbFR3Nav7kjWqPnUCwmeQiAGjn2HbE8U4k57roG5ptrzbsr5JGum",
  "key34": "66t7coKguv1k3WQ7TSGqh7tEG2UwhfEGyvbvetrCdzgyPq4NKBxJLtsZoKrMMjoQ4inuB5PryGjv6befjmYuKeHZ"
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
