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
    "23T4VMb5B4r6oY2KC1xits4TotaWphkwZBUdUvBaV9KQ99dqmhzUe7FXE5SWcwdTxNkGLvDcSiLBFp4cCVY5pM4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGcndbAkTrLr3WtdDHHtuJTikvzHtbtvNveykLyLkiU9kaWSMXBiNBdTTc9xEqw8ndEQoK7v6iBn44Rza8XHG4w",
  "key1": "5yKSB85duLX6GbghYcVjtfPzuVHX6JDXm2715jsYPEQZnw2ugrVg96xd6cdDEJQ4tQNJmwDst7QKRvN1C17z5W9F",
  "key2": "5mA5aDA4rLiX1TNAz4u4NxwnQpp447QXz7DCNA4p85CS8vqP9VJfAoAnf186UvUdsLt2QFERPqcvWoAB9oAWvS8B",
  "key3": "x7ask1EQxfy3vRsQZHBiDUXnbJWFEkoDYf7CaZyv2tktYkQA7gKRSVnxFRT8XzpAvzQDWVczq3XPYjEi6qXhFki",
  "key4": "2FtcQ3cVkuZNUgTps1dSuRfr9k1zwunrCAdPjE8sj7cXhpbCXywzJGt5QQ9vAKWuNnJxZG3RCPav3T7wR6N3aQqC",
  "key5": "5drsYFL391SSBc4S7b7yrM1beFyo6nubP3BZTji79PipbubhXazLj4F3cbc3UL9GeMp2MdDKvhaPB5GTc7eGQZU",
  "key6": "5tfD22ZPs86UyoSWMyztA48d5EuiFdT56N39xhuiHFgqXb5TukE4v8s3yk2VFWmk7PxSgV2hBhN8VNhAEKmdzS12",
  "key7": "3NeJg2sq1QCMHfvHWaM4ioTTe8EGwWfodkKT7p9FGmWXkERFAPZobbphoPDsJYVaK9Xc2kz7KSSTGXA6BNLGZkYp",
  "key8": "2oY4axXEeWhCotukPq3sC8cBt4JPtRHF3xzmjsFjrsGsVAix3YHMiBozvkjG3rXt8NAsXdBLLsFDQAwaP3m5oS8M",
  "key9": "4p3FsohFouexPkNa6f3y4ceWrTk812i9cpejry5aJQNLkfi3XAViksoied8LjnYz2kjhnsCRwM28aeouyXDwBCBq",
  "key10": "4T7fAbPFbVeyycgcJWpnfiQQM3BhXWK2KK1aBykcHQjN21VN6DZJngZ46Db8WzCwyqYq3LWfR9cfuXXwQR1LGUjF",
  "key11": "2f52z4QshW5ML2cAidmHSMyNA9kbcRMPRQUzV367GYy1bWAFcUR4oy1Rd9ws2NmiJ9JgttQWcn3qFZkjE8P9G88m",
  "key12": "mpGyPQZFawjJCtvMt2aNnp4yCKznFNCmKkd3boMPmQh7dCHhWxwG7Sv9HyQHBAugpFbqHZXo2YRPPCG3zbRLvqx",
  "key13": "2TsvA6bdgkuRUs681cKN3pkxxco8LWjMoYtqsw7BVGMDpA9QgDJhJmwbg8j9AsMs6nYoQRHWwHEVHTyXkMM4Facw",
  "key14": "2swMq8ioSWUsUqSnAd9cXP5MQWKD2ww1i1HEUFZ2WjCf4GXoA16h3DM3XH5VokkNv2f5RrEkbTs7DNruCmFyZSdG",
  "key15": "3cytJc7gQvL6eHtMu9KnitHCjwkgjXfDYzK4BFfC86KdzLn8JnhPeqecy97p8aBEeFBpVFEWmeR18fBH4cXvhMgi",
  "key16": "4DUv2HjHcgpPHMzBehug2C8NjpaG3ddGfw5fJGP1L8mtjyAvPDEDcbWFwHCwb2qNZ721MdEcJ8ZQhZd82A7yaYyh",
  "key17": "dh22JxZkU9jYZ96PbUH3jC9BDokNF5zsD9jMpN9McdRwPy6wHyM3Z3GuAdYwEB3YXK2KovV1Js9YyrJEsXf4MkX",
  "key18": "467fDuEDRojAPjcNzaphbY4xJ6Cr7nocZFXRbaNdGaQSA2dgZeaT1cSea4edzkNS5TjeNawidvvGSodjfCR6zKtU",
  "key19": "4fzMPATCwMYnN6xyS12CYJ9knk6Yadfm9GyFnEAGK1x94DRQ9Yn8x4mb1LiBGGnpnpCstLPvZ8rHAnGbf8dayPxF",
  "key20": "5h5FoAgabet5yWaBJp368cg11oAwwSo2tHQTGMRMCEhVTLJ38NWrVepqqJnSgRyDYSpKKr4CCVmzSHVJRjNbpaSp",
  "key21": "1ZYhYhCkVN2mcko1FmJkbUma4iB7E2GxJMgL8b2XxiSRaaWVeFRwy3CS5bgjVAvWo41prEWWeyVsn9gvhzcxZS9",
  "key22": "266tNPwr6JkLjVKPJZyYnBeYHvDQx9V8zjQActHNq9ieo4ukG5DjCW29GCfMpfz6pqMQUAQPwehjK4wVYSvKveyF",
  "key23": "57QcdbuiduPUZbSH48yFwanyqNpf5ZhktFSoEYeRPXt42N8RSK6QP8Ymghfa8q2mwaPk5HYpH7qmP8zvcJqtpX4A",
  "key24": "2sGvEXFc3SfXEhLfzZAxHnX8fVnjzpXgg2FXTNUfx8dfqReCChW8skiQk8936QCGut3tCe4r5M9H7CqS1KQzp34a",
  "key25": "4VJS8agc5q8eiP3RVFwZGhWMEBEBn8iqg49pwUatBSkGYVobPjeKrpw7m2tS4YeB9ZSTF6gCysTdX6MC8Gmv9BV6"
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
