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
    "4aban6Pbxpf7zHKWQYDdGtKJS28bBJChT2mDLi7qkTtim9QtcpJnakvkjyFGtPL5ezpkgJxKzhciTfzYshfdHcod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DY3g2KJ3QSU2UG491k732CKyhmUdsj71tiNbN3Emt77KrPrbntn2iRPWKgKKPm6zgsoNzKeVMgzuvtB2Pca4UEN",
  "key1": "5MxCeEDe6DgXge6z6nuLZGovTaXWAcFaVu9DyLEcPUJEdnY56TPjD8bu9djbxsUwkasSDCs7Ps9GSSioobSPhx1f",
  "key2": "629L5bNamYdQSrYRsD2QyoaciEzry5FzT9pNs7pCyz9ygdop9seRYBWGFv58uEXPD8BzZXLqGrudgGvLk589sD17",
  "key3": "a2DKMEyproxyGG8mH6wdf4j8Wmcc7RC5mLfnDLR8q5ymctidFpxtu7po4CK4dwR3okiw3FZuC5Sf9EmFrYoHDJZ",
  "key4": "3z3jNi9mwQHKajwQyfTNKvSU2Kpw2ddbUL7xnrnvpQTGzYta742pEcdM3RxawC4BY2Mn8u6TNRKPpfFVa4PG56Sk",
  "key5": "t1fKTEpePBoDakvf1KjPvj3W386BAYvUSjJb5dWBkUYKvCEyU4SGVuAoYDNeucb4jwxFtHsCrsoatvChwxQgShX",
  "key6": "5NT6hmFCyWcbdFvWnH7E5ZRxbtZo1pjmHXsJwHjzt2MC1kxUYXAy5A1fKPZgBbWSR7w6CcrGmPeJfVotJTUVs1u",
  "key7": "44eoGrFhCER2DbTRN5CrWosjwMbYCPXTeJ95NexRSn88wXsHdWhYmw4G55pgSbtePwUAynM8q8W2C9qrr2MEKaBx",
  "key8": "4NTJ3ZxjM1r3vJawZvYbujDWXqgSgEiMBD6LRLRBmS1UffeMxAuA2bPC4u9LXLKYFqXdmXQWqkKzSooAQkvDLuL7",
  "key9": "WFHS6LJkjLVWXFyzN2cUe2espdf381cTfwMjD3tTJ4DA5XPQ8auZRbfXCxnXWS4fStDYCmidibGMQaG75nd1Hjb",
  "key10": "3CFevV7gKi41FZWP4VNFR8MBSnEgCcVPyLBkj6h3ZZy1etstHYaDWmDiLsqpuWeyXx2U25YQW6d5dX3bfor9Zwje",
  "key11": "4agQCWj3AUC64ATmxAXj7RjLC81KJGwYSw5VmAVnhkyuxM6DLxEaffS5fcVXUvwVYPF9ZhizVSv8qjzk9EemHNJk",
  "key12": "4bvyppuhhYNojZqC7bMuGLKLsTJo8kxqcVnaKYhejsxPCh49JxYEyoe8AuLSCp2RBLR8Y7kxKi88ANd7fZKgqA8o",
  "key13": "42nonDFYdFdYEaio3Fj1BP2Q1zvCk3yHLrfAPGhe4FqTHTERgQ8xdf2iKub9uHnXFuocs5mRpjysFp4itU2g1LZe",
  "key14": "3sTdB7sGjaEeuEsHw9WFXy7Nud6EdULfucwBYbVRtBe6BSGZPrXWir4tinbPL4M7ELyHc1TqqwMSQEndyVvPDpwc",
  "key15": "2tEqh5RxWtAACSXc5PazzhU3zfXWw4LtRBsBTnHqVDkBPMS1UZa2Pn5ahFhSvaSr2AhM8TYtUHozsLZNRQHfQsLX",
  "key16": "3XrqKtQfRgJEzEvy6YHL4SKG2NDXKGdYHQmhnUabNgbLc7iDCZKKpeiAQU4vdmGLVsXAB3mWbht8mG9JLKGPwStK",
  "key17": "2VgmpYGwxRa7Cm2Cv915nMW7kbzTa5M4HjN3ksLqvVFmhvbucNE1eyVPGgnTL9xP9FwcUNJc3hWW9MN14PEj8wgf",
  "key18": "2VdBwBJnpBBLjQJAuPwx1kmToYnZRupn4EtBmLyx1pvu2eAaUitRvHD7BXvwxtSDyMq8rCDVvxUWi8QtmAM3id3H",
  "key19": "5jX5w8zmYjHdpXKw5YedKArUtG6Hb7LdwGmkboz5mWLFxExBfYytMfYdkHoV9SLwti3Qz4c4xr6tkbHc8CzthAof",
  "key20": "3tHD9o7YMcGn8EZpon7McxcYTvGfSyrByLasikBFswUeJeKAV9yBCBjFjUfMrK4ByMfM8JCU4EK7UrWRwW9NMS5M",
  "key21": "46iuUaBnnczvWHfTVnTM7mTyZPjanDfmxsiTd1Q3iTpUijfxNoZiUnVxSvKcHnDD6pqgwj7HmbqVhefvqFVxDjXX",
  "key22": "4aAWxbiyCMMmA6SoqZ3WQpQnoZuSCkgmutcSSsk5z27Gf3Rey5FTDH1NcuGzwdkh8LiuNATMU8XzHAmWHQnJpEn9",
  "key23": "3a7gBKosqmHFjLHo3fzMQER8day1ZC2ennthBCq5nmRusb9BgKBAT2gG54he7jsUSynrRjSvmXq5VLJGgaoZCFcq",
  "key24": "up5YBCDANeFDZ9hnbNVthf4ui7JMwWP5EBh3XZdtHuzLvKNjpnVd7FwFgSaEX7WRyVWJwEM6MxqPNH85xi951AR"
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
