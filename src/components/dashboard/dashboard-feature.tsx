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
    "2wqDpLo7THvHxc4YnnLLxVf435bF89AXrgU4EJVE79xsHVb5nmSFt2UycFErjn7Tg22ar711aZkLQibPVoDEbb5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "629tcNEZWaksjXz4cEftumJKtvErve9dn9RYPGpnS4TqsGicKKjAZ2hRoxjjoJgmEBEueWC8Tfopqg3fSmTmo6Ec",
  "key1": "2MGXSGYzri418VDi7H2kCPNRpmubzBSQrnEAqSgijuKvT5A8NEn1Ae7R7VbDsmY9m1BtsW22oTrpAkRsFmSNPhqx",
  "key2": "4d99aHWbY34fo63sZkW53LXd1y71NB6mipz6PrePKbNFQab1xEPifsESnUPtfZrPxRdSLtCDoXepAxitBJ4VJnM9",
  "key3": "bEJk4rhGJVGi2LxbpJa57cLRa2hceD7Q2UZ6AEeQWP6xEWdmjA5R1d7JWcpu1PTCzfB5x6GqtXNMZmo1ehsQ9QB",
  "key4": "LpFMbPmVvSnHgBpyitC8Gwpy58HpeYrffV8NDh2RAgRwJahYpJTmVNb9Wffmbcg8Dyh8wdrzZkkgePCmX9T7uRe",
  "key5": "26DhkATk8GTvYT5JvvFqViohxdFyU4LN2mGAVY7heQdvtpuL147MYVSGdsrm79JaUE7dgRXVcbTUGg2HLPUZpVkm",
  "key6": "4KyCyKq2gVMEpZSxQE8qNtJnXLpeTNU9wbcq9hmc88fGTwT731jVYo2eLLbxfzUP19JjgwTafA2C7KJ9aBLdNBQ8",
  "key7": "4sRjWSiJ8bLGfVgUpMud1zxsbMsSa4aj8nrCMs2AxjbN5Y9sxxK5scBXSw2wiLGhepQUKUM9H7gU3ziH4DbhW5FS",
  "key8": "Qf7vhGBKEa4ncwtRNj2GgHMKyA68aVyFZXBcGDwQiXyCos6A8n8djKYzaN38QqPkhpq2mTwhWzztTWiwabNPJKC",
  "key9": "oMkQ5WfNJ9U4boz52HG3gBVq97LraF3A3NTdrXdsi4JahXrQ7i6svpDiqj2hrQcbDJJ1GXUoLUmQVvtdrrF3pR1",
  "key10": "5TiQCJpBMxpfMJm5hLwCzZWvkuRtHw8XkWr8SpBncwkZ5EUdLX8BqUUDGBUM8BMzmneVGw65GsHkDefQvSZJsWBU",
  "key11": "2fUyFvR94YNh1qfvnXFJZjac3zbx5ASex7Xzcn7YFC7NkfTG5oPE4y4as45Awpd6QArb9sAiEXkJRaS2yKECm9sb",
  "key12": "Y451VrU7rppafZMU9VWvFHzCMTZq7DDRksEnmbqcnGmc5Qw1iwLBHfPpucR55KtyBj2G3Xt46Dqiw4yYmPjW3c7",
  "key13": "3miQSUmmNex2bVesX158MHyXeGjp32G3NRPqUJ94irCwCit4e4F7REZB6aCtA7Atv9ECtw3nMcA42d54tvf3KN6X",
  "key14": "5vfV2NreaX5zsHWbvcXn4E1V7RKS9EF528vNFSA3bqyCi5ALd5m3tgTk8vkbJvf2aUgfKBTqQqjLo2ocUX1fVg6P",
  "key15": "5KK3AGU5vi2mCkDs5qvWM7srEg7fR9aE6wB1MzaBtsEpxNS6D24vD3yAyJdFVXE41LSGkDNLxdxjYBWMjYnWTcH3",
  "key16": "127Y3E1GSBPmgDrHgWjzY3q4zeotaNFE6JYdkw81JgSHSm63Fu6ZwUpNtFqjyVjPyprxsEkAxGDGCdXdw4YCBXBW",
  "key17": "3EEvUF9oG48dbQqjQokJ8SZnxAXj1KiREnCg6xkbR62UG7Cm9ALLNXy8NesfpWZui9UR6vfiBhXY9uCV2VUAqF8K",
  "key18": "4VZwUGfzhDjx1STuZMCBZmNk3ubvYN8MaLBSx3VC2HJseVqSMuBt98zNrGyB9xwogojvpCVGS6DK2k8vrsA5f6gm",
  "key19": "2P6FPRwrQpuKkbN1CuSMvjPd7iDGFds43x45GGXF5MenbJsXB1uUHM7iqZNtmjxEHaYdLJzK5wYX1wMCvWeGsxtq",
  "key20": "48F6M3FyAEM38Uh7EJeVdGHuJePtu6Sxj4jGb2gviG2Nc4W7gJNCiigvkP4x1QWGMF41zfge1nejXbX9L2kYLqYx",
  "key21": "3zEgJPXaT8sEaxQHNFJd32HKysLE6b35CewzhegLAXjMYxHDcMFsnTPo1jkSAhnEnzbRMCNbkKENA33fkYxdyuSz",
  "key22": "5NgeFJaUNGQuHzKpjMdDgR1v75ANzqWBCUEm7t6eEg5tAtRfSMQjze4mxCgiBCz36oE9HDcsgjFySeUnnHoRjhvx",
  "key23": "4gQU7yQ5V4rvBrBZkRyP9sapQQKwzfomeGu3TiL1ZUmCBQYWoF1xYEgucbhA9uLswbS52iGarqp4qnTVwecYTArj",
  "key24": "5mnn2RZPv9xWfZYgGiK7xefj79GNowj3Vm4jAsCXRsjDgQvp6mKBs3LFPfUNW4Nb8vM5zaeyqRrqzw9HJZhPvmPp",
  "key25": "4oJz5u8qi2w7uHARhVArFEXJhqUiG6Pd6H7ka8kmw7Ays2XGK4ox5dLwiE4BoqgzyMbZcD8nDdxyxvaUqe5DcDYJ",
  "key26": "2BrAEvtiR6f3QsgiRDXWCJFNXk53pBSwo4tpJujjUMEhetWxWHLV1qVrAkHpCoAJPTkmsAcQ35PTJsoh8kTnPWoj",
  "key27": "4DguLi4wDwCPkTB6abwQsncFrkgrBsix3EtcUaVguEHxWEcwLrRUuj3nYhwYszqejiSTqtEWzA9KX7D6ZY4bupvx",
  "key28": "3ox7fs63f1vHe7iExx8y9q4kNnnUZjhezBrbjbgjeaboGzUJAjFc5XpJ6RceJV3c3XFXwfwD7zqksDDrtdL3hgNs",
  "key29": "5e1XPSCDVUXid6CnzLKyMhsD5w2ULZs9D59YbKnR3AZ9rceT3fFfWagsJXVgsM5wwrATF8SZQA7tDCGnxjBJYcGW",
  "key30": "4tshHcnKRB3zBqA7gJALuyJGTgg18ZDxGhzHDPALNXdWstfaKuL7VR8y6JnNbiqEcpSqn7RZKgjyri1B6nz2WUP6",
  "key31": "4ofrr5nXYmcJH9WZvwZ1v1VF2xfdnJ9pdVJ6S1pasML1LeLbV1NHvNk9caAdaGqbvvqnn8tqZTqNTMLEXDC7T73e",
  "key32": "KAcQ4TmgDWjQovom5irA5KxWEdaeBoiQFXvfWzFumicbTM5HdYPTfBvdJrLxJpejCAfrBLGRDTCGXxZdFDcsNK5",
  "key33": "2PtUNMgLmc1h8x9BL9dcVZFKQYP8cnhPnXAuNti4NDCfpNW3DYzBbxxusmpAUrvDzKJyW8pQLnAjj5qy8axwqXCg",
  "key34": "5cnX7fqBQ4upAxcBSxH1sTscAG8oDAw1itbcsADmzW1qDKKoWgDkQ87Zhw5K6gDSSDb6hjCais2eAuWkKuKcG6sr",
  "key35": "5jzDZDsKcB5BUMgc6r7FmAMXJVwH2tgTvsaF4NWWCz86F61vKsB7aqyhU6xBHRutAnhGFvF59ZDXyAm5M8iV2pLm",
  "key36": "2uEZ58b2wkJ8HhvTPPRbXAtBG7kKr1Mi3uWh3gZ3qfHsrKfHqrSEnq42YmAdfeJ5z2oSQCPmeYQz1HWip8F8RHLz",
  "key37": "4eoMtVebayceHQmhoJgZSVPRjEeC8putjFsk9uB4QtknSshrWY8byrqw6ejSA2YLvDL6xj15zfnuakKxyaRKiybC",
  "key38": "2TMLsJ4qkhe7YV6ZDscGiZCeY1RNvPXv1ZZiNbRaerSFDcrEqa1jniAH8yzdRNs4QahsUk8ZA6PuGbrNbjwbrdGS",
  "key39": "38fCGeBwjirjrDFH9Xi2FmuKvAnBjFEcjjxRcQbpKSR6KSjUCA7FM4NWLjfBsnxzgvxa3ebFEXBS6wVDGvA9xRCa",
  "key40": "5MdQV4fw4b2dnYMC9EnxPFsVCdaXSXTfb1V5AfNpt2BpVbimdWKDjNtLxLtmG4SoAP4JgBkEJxs9WpzbyQ4AJQo5",
  "key41": "jrQ3JPDDhdxKmyTeu6QjJ5nJ7bnv1M4xViSYqNY2LQi128K35mUVtk5GkkjEkoFetDdaBEeZjoymtBmog8Z4K5U",
  "key42": "26eEz2APs9ZANxwKQkHp8jiP7P2nXjwALECGqmToNbpqYG8eszqZEpQkBAvERag8ovewrXJdxqcV3KWDLVLi1PnC"
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
