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
    "2QMbvvHcy76PG2ztn1qXpvcg6BP6ozBobWkDS1qdGasXZhrZg2yo8m3KGWQQPjrGAsvTY97pBjSxJTo3BYrZgHwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ja8CeUSrtcyENp1DeRiKV4Svvbdao3yYAmqAaonurQskzvMrrVujNDJ9sqkqzvncp9xmFK7Ve1TUhAa1Fo2eMCq",
  "key1": "SnNnQ7kjznDHVXmEfDMu4sdQZBNX8oYrHTdQ3qHSx8FKQEt3x17MnE3iN6QzuGKUH8KpWkofRtrLud8yiJnbDQ5",
  "key2": "4FutdEGTmgkAaqvPuFz6yB6iiMZTcQDdgih1HGRUbqZiDZdC3beB3X9i1mtM5fzZeLBf1u4t8W2eeT9CZGDxEpE5",
  "key3": "2CkbFLM6FwFH1M4EPsfcGkgktUwjtfZpmmniPCMmeq5gXFgrBUWLPSnt55PBH2vNHUvq9La1xjHKhjESvT6YY1vb",
  "key4": "5hzh6fJjJa9bpQAd5Mr9ButQDwizsD62V87hvLHnYYkMBpdtRL3ojqsnkFfmKLsTQCLoPUrWJ3z2y6vgk31jMrrk",
  "key5": "3QjQT9e6UYJBeqBabxzujfKNeSECMTcYmzDxu3ia9xftTA9haQeAA29uqxuiHGZRqnuRGGBvLgCfp6YvNFBmGmoo",
  "key6": "54VQMNWBLyw25ucD3m6tgJoH72KoVR5VRvWBS2vbT9LfhNSyt3c58xxbq2jq5pZT7ugBpLfy3N1i9STEK3EGcVPv",
  "key7": "3BWZKT6dUMCkUUkEBUVk72Wp7bQy5z54Z4K88iro7oLEvqoh4DU5QdqWz9zJu6cRoq3KUMhBPUJgbAiQkGtnw1tE",
  "key8": "3U8LAXBpFA9yxMJv9QDjjqjfVyxBZbFrZZoMwUU7fFdZKU8w1NZ7gtUjbVpZivwJ9hXaPC2s4zC8upg2bEBwgUik",
  "key9": "2zjqrV4NUHYgDKrjcfBZ75RLnJGzjqrtG3CrGkixYKeednhJ5BcobeqLLeMDkU6DQqACT8wAaRzd9rYSgBTZNNRy",
  "key10": "3GyGPzoB7EopqU5SK9ZwJ5fEBdqd5KZUXKgKePS9byk6GWigc2exgK2Kg6jVCL1mrvY6JzN1F9jNETv5moJyaPYE",
  "key11": "3yc2WM1MNoV4Qw1hj1n3nN2Pc2TWqReT3Vu4fJK7yTmjBNKMEHtPguqmJAa3VqAtePvYrVFZoRFqcvJCQhN7JuLA",
  "key12": "3iA3vEH3AF1xMLNRAK3Mvn9HAfuS5szG5dhcZL2QJgk8qzCW8ySrrFLc4rLM8ebt7aAaPSX2VbGUQeSd7aBAsoYp",
  "key13": "3drxzyMqrUV4cGSHW2Ji8KvpXirLGQhmJ1kW4hpCMDfUzogZtTrFKREKUPWi2xeC5tQCpRMyYzMQ22C85hTGfMKa",
  "key14": "2veBFbsWGQyYBGZzSEYG18X4rriPuPouV7LpZSU5MKFcqVziPpKXfK5c91L9XHsz762mmsWKg7JY5aiDEamLN8x",
  "key15": "4Nxv9SCvsBjb9pxgpcCGf88FT2u4hEtyekyZkTNQTqterpdhpXMEdJNGrijACqTkj95WrNVPuoDUtrs9PYP11aUV",
  "key16": "YHxJhS4ZB3QEvw3kZpYvf6ahEM5Zyq9PwCxf8sV7PVo9zuGSsJvaCxHcRnd7kZnkAAPEptMV9krRMiuk2Rzjs42",
  "key17": "3GVC13cF3hLJqpguefcVVizEwtcXTUBVjkB983PycVq5gceUeZjtmmtjfBRi1A9CZ71NfVhqQtpPbp3M2wFWPm2U",
  "key18": "5KSk986iyZ3Azbfdz6BtQ9hzhtx1eivKfACo8i7tCPCZ481DLPAJGgnUFoRNwKbE3FKi4hWsr6kjR85N3nxhPQqV",
  "key19": "H1DxZyuRz63qRB76ddDhU2EVmYEPf26SXkxVRkxSWmV26wjiiUPn9eUvFoxGkj52WHECinPVLEMYAdgEmGJnAjf",
  "key20": "5TRbZiSHtjS2YcCoNdFh8B9bSyZ7CYQpBv9KaMqmh79ExkvRUFURdHpQFf3xqAqC5ezKi9kDKNzQ9TSittjcY54E",
  "key21": "2LPYGq3EJTnQmffJyF8GCtuBnH1SPCxAvrLzsN6Tg97PHUZe8nmSnYzVXkUvzDgXtAVq23zZpRjDWqWVuqKvL3qD",
  "key22": "4FfBosWF5ZBaYnXkDjWchXjNTPBAe54F4H6dVky5DcBquTX6KMGuVV5aT4cr3EooMHZTKZ16Aq7jpH8AqPwx3f9M",
  "key23": "3WKQKCgUnB3D9wBvMcse5rzU3g51SMeekdMhd27cJarUxzQryXdkmNVts4cRqhwamKJLKFiJbzfaZVfShWqy84KG",
  "key24": "4adHKmm5qAn2JDFB1i9BucmxL7wCd3GgDzinH7CJs6WbbrD4F1zw57BNmjKEYXvc8BHAbjoFkNFoZ94Z249GPHX9",
  "key25": "2U7C2yGL2Ji569qUTE5nFidjct1BW2nyn2y7wM2xmj4sc8yNq5vt8FLyCsZPWAmYmhCpPoPLA8BDoxSuZ4xCWPQm",
  "key26": "5TFiAPKxy85dS8yZEFStvNU94cSQK3bW2uqixxvUfjacqztxr1PGAvVNq6LX4GvCqH68oN75mDq6XFH9BdgmSgqF",
  "key27": "45pXEwq3Nj6wozR2f7HhCDi6MsM6qPKX2hrrYB8dNaXGugsj9zVuAFCawVGPfr3T428bDEGB9MtyXASJi7EPC9de"
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
