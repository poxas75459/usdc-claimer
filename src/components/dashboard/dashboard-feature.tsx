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
    "BQoP9sytNVEpd5ivTEUFDydroUEAH4LJWdgMi4v2DkWuZ8GXGTtUqJAZ9YEfjVS1CUtrQtBg72xj7LUm3LW574Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewZ5cftC7vW9sqqYXbnhQCtweGsDoXdey2Jm6W4hU8vumb9DFSB1hCkNJJPXz2jjmeJMXs4w5sp4nyjB8RUc3um",
  "key1": "5WQ8MKffGcgzabhwF5YwWbsSzThgApxuviagaBuN7W4xfMWnNS6HhuZwg9kT23Q4GeKFqygLcVj5ideh7GiWjrWR",
  "key2": "2nKPJyZzDuVJtq7hk1WPyoBgUPqxcUuquMvvWkkvQDJkkYkq4SvqDGanAAjF67AtFcsqwofShjtxJjEGr16YvQJ7",
  "key3": "43F1s8ggLqALNL5sf8uo8Z4q1rYbdar7YZB7ejZPHeYBzhjQ7Fo1QiTMvoKy2a8a2ij65YQjzGZRdKtum22rLp8s",
  "key4": "2QojRYLxL6Xgdif95y6zzymA1aBCmQFJTatEzNoyaJ1xDhJF15FdEcLGieGAGxbUsGrX7jd3Q1itjmdpAXPDJKKL",
  "key5": "2LiyPbFQNnTRerGBzjJVfMdaX5VrnCxGCKGcreoBa9Sp5dT7qBhBEnCC3JskWAxPi1bkA4mEGeCBbE3vnuXaNzUo",
  "key6": "5z85PVt3TRGa5ZLrE15SygMJ1JmpxW9RzATZwVvqLqmqgrhKk58FVwQZn8pZC4jxTqufGWaUdQGVHzLihtG2Rbi1",
  "key7": "T82LMrLWNLVtdbD6UnBKqt6tTetYNkHMkp2cere8ywU4Jfb1cRJuEiK2T6iYwwFB72hctASaVrJD6yzxoQ5jpbf",
  "key8": "37C12RjfwqPLsUNemKA6GkH2KQvo1b8wmkDwauSDEBk7Jz6QBstXTahAyojZWU34QDGVhdcdBE9amiVEyNeqwSsy",
  "key9": "3iv6F8s5cSpQwrK82TyMyrcomgybKn7aksh4W41dR6DRA3voky3bbT4NNf779SqvkYYyiaUgRC4B2ATYzqecCXNs",
  "key10": "64xb4j7sPC2zZ97a11Lo37uwzZ7VVoGGxF78oWM8EVxhhPu8Shs9dGT1kAsE7o9zP1CimJZpkVBXvDXkYDtrvFVY",
  "key11": "2ANtBMQpx9LHcgnu5WCiGErC8aWaygT5zJxZBQQq8TYTpSeUq11NbwtHYSjvDYp6QHWiEHdEZwjDdpiVzrhkczWv",
  "key12": "5NLE3nviS86jdfKh74jsJJ9J7SeKcWJzrssHHEjv3qh9p8cE1BkRecWHikgX4KvTzZBaDs5keKrhg7tkbJazdsfQ",
  "key13": "2X8kVCZSTTw18rBd9qwE13AbjksG5huxegt8B9d9bPSYdHqnvt54pUaM7jP7dLRA6Rbhb1SQXYtfyKzGCzAfY8r8",
  "key14": "64vLt6qUk9PXrKpmC9eRaerdKTcN2tN8NcPMHM3t5zPhghYyk5squPqXpKmSevBjPaLo71ZgCUqu8sVS8Z6UgffC",
  "key15": "56H5QcLRG19nNSsreERgmZuieNcfnTg91xkoVJftV8a732SAwFXwE7bNUDTNW98bdpnLyrEwWthsZeknmvd7FJHu",
  "key16": "5eicgoqTcGpju8bgmEvGta3WdmWsKhEe2zGVVJ6pQh64WnbUDAnMpTadrrfKRem7JhgmohnvRJCeBm9cF588qgsH",
  "key17": "Bdvofi1oW9EyssHQvhn1M4x8zFA4X4v2ddmsY2tQbfQTaJPnE3Qe6kwZx4uKksryZiUtu2dufZv1aJnf7pNTpZX",
  "key18": "2gaMxLVbAYVx8wKvyymXBmecEuEKUMcQ3NsVVidydC1N3GfUyS8pHouuj1J3d5MQgxEJWWt9BkGDhsK24wzQ9Wx",
  "key19": "2QBPaxjDoAh4ypCJmhvWRYmy6smeqVuoFrPWp6zBnjncG4zqPDwWdSuhftgSjWHhHdgoPo7xjnotacbecmv99apG",
  "key20": "29tAwCpmJ8tGTHb5oTJmaMRuWLavcuHJAfaWYA6Ywz7ZMLU6jQPYxnu9zCXkkMN5f4fddsSysrjqzratYorzTH4t",
  "key21": "5kLZRDuRziT8zLkxgzb9gH37QJPXSmW5BLb16G6VnWwgjp2NQqTQtj9AvWznJ5RnLdUyW58zDN84WXc4Dtnuiq3R",
  "key22": "2XZSmmD6XhrUSPQCdvAJpijps38WgXaM4sYuAgEhbVQ1b34ei5haN64Pe7MqhsyM1Fwo5Q1XPxwrH5fc3SrNxKPj",
  "key23": "8tmzVx6oy43HVqRePY8JSEzhQ7mBJ9NRp53PvoTYdpMswouipBw3e2f2QfXS9bhnaRSyLoaGBnZNDXz2d4Kz1EC",
  "key24": "2Gw1BY3tB4NNj8vRtrc8YTjHNozge38UakpDJ4dV3ERDBoGLcA9b4FradMZgmp2d33ByVYsZzhvGwXnp5qUeNHxZ",
  "key25": "63wXRuV8bDjaecSwfeNbGb6PVdW6Mh5DCuVXzE3nXmmAGN3GbWuXTRJbPxYG3Dm3e2VruREhSZAL1H7HTd9mEJ1s",
  "key26": "3EA2wN8gPsMWCeRXRyUpLmwmJRyRnayjFchVMEYBLiJjUyYys7fujbwDf5fucXYtUxje8KLWowdnNWgdy5wjw9LS",
  "key27": "3UFCz7vCe9PLR5NaNdLf5gr1SRfJRJpZppc7AVUSPwFW55QjgPY5YzByo5gWPxj2hncqpLDmQSmBLQcKjucisYRa",
  "key28": "5Xq7Frv9GUpVDEzYmQKLHCWss6WN4t2dNNykcNvcFuY4DQoYtWvGukhaLiRLH8RUQmKP3yTnWSjjguQZ69B6aPzy",
  "key29": "PYsH4huLkDfBr6hFcZFVdWtmf8eWFMUMsBKSCjNUMfxMJh5jEBSqytxiStqrUim12gF8eFDQpsGa7o3jPKcmizc",
  "key30": "5ova6duwCHcScDNvRHGgw3dnVF5saqwnc5b9rV843TXT5SYynojbcJMf2ZxNHPD1wgHF3ADrpCDc9vSVP93P7C5e",
  "key31": "2TFHib9cwFzSeJY6XxNLxKrWxV9aTsxuAFrs6wwj6bCKTD7scgtjMVr9aiVbzzp98fRbzqrGyaC5uPbELPto2yDU",
  "key32": "3jVx6D6mZd4kTfwpzaYnDY7BjPDwQs7qU5jmwPYHsnE5YaJcTacWtosqSv9b1Ss6zZ5tPEnGJS9zEytsy55LS6jm",
  "key33": "2LCFjsZbP8MKdknDiRbW3nK2WndL7438hcWjeScRUDYdEVfDVYhU8YvqUpaZXsEBeyguATg4xZsgwguFZGf6AeiZ",
  "key34": "LhFswC8a7Ns8PS98LGb9XaNxPEGe3MDWfMsiNoRF5K42kdGp9MRgaqeLx6QqmggJZaNA1e1EVqXzBPdYQK6rPZa"
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
