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
    "64hJB3J5b5y5qvB3UmkG9Ep5Zdtas1L1VCFjovRQaWZAii4Kc1ZHcisfMMwsJ4zc4kry1e46mAnVjG3E6C9jvwjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hz2t6geVo6vac1hCjGmwVcU7KpXXq3KQxnpzLnk21ZwnwxaYbJLzhPqvyKc2bvBrTwf4caq3J2uLXnmJt4mrqJ",
  "key1": "4KStXN9F6hAk3hP6BineNDh9FaFLv3zxPkR6rTFuoxryunGem2jRg1vKkStPo5YLwRHRdwX7X17zbaWjQZSXe3hv",
  "key2": "3XvLJwWckGKopJdnDdNmQHVJksvxGTzP1LGvmV8FkS1SgfVq7r2MikWtcMqL63KpK4c7ypGkSSR68HneCMypRVcf",
  "key3": "31nQQromRbkVnNs5RDeMoFUExCEeRWJjUVHbvDfhmcmSgNmh9gTj3fCQsQkJk81Xc1dPnbqZkfh86fVajUsFDWtR",
  "key4": "g4SznLEsKfpWQi8GQHQQbQ4fnyde4Vg1SvwCfQcSWqBTV9LfjqEgx6PBnFjhRRjSjqhcNKt87VdbijfLVHgk2Q8",
  "key5": "4BHAguKVuGeHAZX1ag2p6G3gHh5ALxT9zz4auytoNKvSCb7vq561dJifRsa1hDtK57xYzQVDFZMtJJLo3zBBRaCZ",
  "key6": "5jPuk32evq3XxWVDQHbycH61JuXXwWNhCagiD8CoWHi3L2WBWySS4kS7YZz6xot6QzDPpyQgcaMt8DzSCYBYyze",
  "key7": "4g8AKZ6yrzq6boCpWMFoyuiRb36RcsoE5kjDiEZSZhVdHVnJwu88piuPskW6FNL73s1MvXsUaXN1f8epFDquCKqR",
  "key8": "4qw8MNThfhgg25b2ayLpeKwWCpQCwGGM3ETBpsNGeb8NsMDtsDKxw4UEkCjn76hQV9rNWYZq7iGVeXpBmkN5zidm",
  "key9": "5LmqFK6Y9dEJtRVsAwuCicbMTQNbmpB4eDCDgD2Q76hSmFfMAthyUKNhcZj1jDbWMn5BLUt5TQbbqLxMoVLUkqQk",
  "key10": "4iBeVTQETXpoTJvAL4f4rhKoyL1LrvkWr4HfpRd3tu5TTzWvbxvjiGRFt9bufwKWQBQ59WoSpiRcWjr66K58nYtL",
  "key11": "3Fi5F5p8v2fGEkk4HUnhPqLq5BMKGGbNCRzQEGq8esyitYc1MVUwJEfVH72qudtznqw9AtKWEBJuL2cdinNMDoS3",
  "key12": "3UdPa1nuuT7YVUpsK3mGGDJZRMDyZZuTjYo4d6HqKZeXMBwtRvwtMitmcDB8atYUt4EHqLkLN5f5JazVGxh3TqQc",
  "key13": "Zz2nqjEj3QsQtwrLnwYcz4Xd55szqTzVg8t6HfryqTyS9j4dcRFtGQJv6EZ7iXXMz9PoumJkk1pgzbfigu6Bauf",
  "key14": "aUYqSxot5w2sAT6YvEhp7JA3T8FqizMCzSY3HB3HQEGZifs7cpvwbi9vYX7Fp6kfUXfRVqe5VeaYfC33FozNPCi",
  "key15": "3rRpNkQ2XY8qV1JwAXA5ty1QHFgNYsaYuJZxChSg1PbcUASGGQYhF3JcRDmjhP6ubFYwtuXVjrtcZcrxNjP4zEgv",
  "key16": "3EeQsXbtzubNUXL5p2TdD1HyD7o2QhHQxvpfaeuyVyjF1JUCQUahESoRxvUJW6qCL53YW8buqwtsRwivXPrmzeML",
  "key17": "6269wo3qUUsQFCh5oStW94GX5DzZLjAcqDxhWS1c1ySr5uPkbepViVBPBMFqzVa9UVDGw1kpitvQHrfGGFbwK6B5",
  "key18": "zkoounXaZ3YhJWukcPhuD1D1P8iSSEJhifSaDFCHPkzqxiV37SvqbevAQfW7WpQNubvSd1M8FgFfVTTSBxpELeE",
  "key19": "42KRMa3idq3GiP2izyNomMGQmfz2pUDauwDXh3FxPgL4TajrDUrFyLoGtdzaKDLtUXa54ozox4a5EuHihySv1Htp",
  "key20": "nL5nmc93E8pvuhvDzZQtLfftnzf1UGjLC6Q7e7RAsT9kP394isZsEiWmVdFQCU8tXG1rk2oB8s9xjrESvCXhELE",
  "key21": "2r4XtyZrxxxkqfrK6w7PwNQN5SuL8v8RBnAUBtqZpecGGAnu88b3qbWh7e6CsX4xmQvSu7Uj9hj83DoYFGfmMzNy",
  "key22": "2BJBt47Jh3suhxroWvQMADRh8yy9yWyEGaDQd8SSJhPsQax4PonRe47YyiqqXrgGQvXr6RJLkAaJfmZgp5qaPkZp",
  "key23": "2pqhgAd6HBCWcPmXi2BY5Ys6owGikR9iYqVrsf7BhpPx4fdLFCHfuc82ju6tmdEurWFjhjRs9x7rJGet2Lmqw7dg",
  "key24": "2jcrysd6yrEKabGfZhX7zYd4mqPwfVvFPtmfJpq2garcNXd5cAuKzmgZoaofic42bp4knDjAVm6o7pjKZbvhahfW",
  "key25": "1wHvp62Up9DXR4h7NBwseXPTrPjDkxmDS4LVpkGBpSZf6ARcW8GegjGjGU5fpQ6tBeu895wMoHapCmSGKjAHrhe",
  "key26": "3MVDiv4jojW9TjBc3UFFqFHr3oAZRFnG8zmhTkZEBavDujoQm9ooLsrUtHcUWsCSR7aqWKJTriTkELBYU94BSJnZ",
  "key27": "vwHhsALgCT4M9L8P6k2yo1wteZJBKiWfRPMGFDJ7374FESp3uKPM4FJkqjfAaGLwfpGhKp38TmZiun9b1zzyr9A",
  "key28": "3GLvaaPoXHzy54kmfRvzKTNLVT1kZx2trZ8dRt6Hi6mEFh67PGVcrYjFKjJi2VRMmCqAyRuPqca8zW454QM47vzV",
  "key29": "2BZsYLU8PemAJ5jzbRb5JKd9USMbFim7Kk5LBhRdCkN2fBft8BmCm6BGKcoaiMvdsBFt9ofxsa1LqKj2rd8bKJHv"
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
