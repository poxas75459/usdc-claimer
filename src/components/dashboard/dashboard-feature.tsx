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
    "5D9c9WeHipcTNcrchTVEWeHuoNeXkdNqe8RL7exJ7wU4w13CqfuvQkN8CKYSgqtqiebsaDKn5GYzLP22D54sgYdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMZHvrKohYDrYWo3aB7qyu6fEewF4zeckDkYju6hFe28a9rpFXRcdfSnhNgkeDttaGhZ8g6qtezJwhGrMTG7ndX",
  "key1": "4HJmf54C5E8YDhL5sxTG5NVuc3fZxJHcgDcStSJT1nn8KRrjZYAysDyRk42xJAHkMFp6pnHsARF9eruvGN71cN7",
  "key2": "3uWTxtbPSs5risFSeQoSJJjHVxP3Jofeujk5a9hMt3n7RVtRhEbuz5vwJyeT25wXs3pziaaJrYJwoQw3qCEG9c6U",
  "key3": "2EF4wRwx2KYbACZbJSGi17VcCr4LgtLHANsdwGc9PHEhWzU1xPqCd7APFNNzQJS5EhdgM6YTyBC3HXBFJrPUJquX",
  "key4": "4rC8tv3atv3TqdiL5jgLj1ooTbHAnAMrmegPhdR5mCZuEmCBbnz7aRPawoHw5w6q27s6HnySdaiQhT4WCDyTtkjS",
  "key5": "ktxyMmgNEhMNE7kAxtPcRqHsGtSP8qJbAfNhEq9LRiPNrUFAiPzWptKcsk4AvfuzrF4GZeZ2aKHCukorvhysnwg",
  "key6": "2YAvaTQ5iViZpqgwwZJUuZSGCsdHtU7FiZJ7jGKj8BUbteoXjX7FMfANyxzJzByLwNFERpebZ6xfY5hwdmZsYfoA",
  "key7": "djCwEUxZdocsQZ6CWaPqtaf1BSbuugZhVuM9Yax4JxWCnqSNcwHHm6UGHSiEjj2oxE2eVVLVvTtef2UunNhix3Q",
  "key8": "51LD3yP2xhK4BHUZcDMn341QcdQaanpEBtViefVjunHP8HFs6xqnEVqJ1myg4W3waom578z8T7zWi7u7SgtxVmw6",
  "key9": "2c2gVwAoVJr5zWfvS8VaUSiu4GRyCZ3X4zprzqocdd4T2dvG7KorrJS4nucGE5NCqM9CbBWEXEFEGJ27pkjexvBT",
  "key10": "6UQyYX8AcaYjNdwp38YoZq8EZMAKfbN2kLFdcz6uKqYV7GHfvKVqhBEnCJqifLJp5714bpxBUUxaAQapC5ThU7d",
  "key11": "39kuMhvZE8UCjnKYFMNEeif5pGEWs7eJxJQEzzeLRifPHAqQArXUdy9qCMQoFenxu3rJXvjRpdSk7fEBfABzF2PV",
  "key12": "4Fa6WNPH3SbqrJEXuaqYEZxjP9kKzNEYYgq3HLaywBSsf5tZJqUBhExhVeJtGwWa2xHJaZpeC6rWAinLgtQ4N12v",
  "key13": "3TsgyrPk8VaLZz76woX4mZcFUZnp6XENAJyznJ3GKeQZiCMZUaQPcLZGUJ2tz38DgrCQnPAg4vivYjiugwZ6b5Bf",
  "key14": "tdx3jhyt6PLmz8i8Z6Gsj33EnGTyFgyCLqDeAHTN31hrdsj9tVTRRHEtEoXxTjAXYMqyPm38uKs2KV4qR5Vi7Rh",
  "key15": "4YCUwXETLehFiRuUjy4VPd2bygBR3uubZUojR8CfXC3otRU7dNQETShgAgvmu6QfhHrviumpfFN5SVZ3GE8RPCVZ",
  "key16": "2tsNaHtCJb3JHZgUEBqxEHSmdUvVA36WzbSKLCjfEjtmqhicxe67LdfJfu9W6D3MZurwWze7hapDmeo3Kht2RhCN",
  "key17": "Hmy36dGihtYwhVLqDeqVStNkcphYiyWjdwgUeM3crLqmwbmwEVEFYk1eRHiwwFQt4MNNBkZmYdFa2gfoQjHFYqj",
  "key18": "5JBmc5A2ap9SBJC2zPqzWbgryTSM3zLVKFR9UVAfUTdey2P14fJTC1QBzr69GAXJiCX18DmJwnd2rVvYPgnKb2Rd",
  "key19": "4BwX2EmFyfrLzk1osSvDMrpQbmtYhhHnEPzPkDVj6cxWDPaiWidvGtnq27uNSDvTyuTrH49ycQbyY5c5eCYv1FkK",
  "key20": "44VXNjiBZbQUVPWXzXCVXpnDz5iLKHygDbdYsL9eqHzdFyqoDLq2SR5rewPZtscbnhjvSyV5VW8jLKYKHkmDMRDk",
  "key21": "2BGXkY1GJ5MuNWPw2yjyZPQE5pUxvgxgpHjKduKsRTU24Nm4YLo36z8Y1TSdjzSfj4Fhjwbq7zna5qD5CeVE7JuA",
  "key22": "2mynrjetJqeJivWEtUesaNNw4xucX7YmgMnPBhrtVUULhezWPT29LuLsT3TZjLcHeBP3ezFmKFLRvkwBKJqCz1NT",
  "key23": "5NcwEGtfm5WVfoKpg5yfPeX31xiyM4NdEED9AwLN5PjqT7JKtUPbgmSiTj4mAXdZ5MJYDZF6BLejYHsapAFJXwdA",
  "key24": "3rFpK47s3PL3bd4JYpYB4J8CH2fUByCiXT4FdfVmHEu8daxhp1BucfbwY5zXDSjCportG6JyPNteShYoorXf5oHN",
  "key25": "LDzgJpQnk841CdpaXgArqnfgU9NE5hnNgtCoDqg9jVUuZ7Zzoa2S7cbpANqJB1QXnZ1JnT1D47pSTdmj6w6BWh3",
  "key26": "6EWPbbNrG7eyTTzdSku2mSwUjVYf5agDANNNrn2da9yN3ncJTdSRsYvWveMZ9waK7Gc1FbLb2w1gapigcWujkTs",
  "key27": "3PwhGwNC3tz6QmZywWvgMfJUN1ou9pJQGVHe8uVR9UJBXdD7TXbWqQ1HXwTnFHrKTcyJHApWsLMhJg3YeWEznggx",
  "key28": "3E4aPWo5tNn2Yzer7eTYaqQMxMg4jCsEMMWFNUnW5LdxaJr5yBo8rcQhUTQRBnpU6JB5EtNdVhRGEPv3tr3KxLYg",
  "key29": "2kSy9erNMEq7ecjDJVMpgmQ21tVdi3ExXJrd8nEUbBViPLutmGPaDAjj7hhc2mE796DMDfcrEnMLYN8CEjpRa7t"
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
