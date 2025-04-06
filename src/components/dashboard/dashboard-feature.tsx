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
    "3yiaTB67xZyS5CEeyNFFbo3Ba5XwpfCSB8ir9cu94hetQcjjawBZrYbtfWwoWtufXS2YY8hdDM3qE5mqazWz53dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541CMqLvtKPBrm8mZWyy81mVUHjgqMmj8w4FkGHjhVtYfLW7h8jLDA2bzstLLD41AqpkfvDKFiLkCzLiEE9vt3Q5",
  "key1": "284jKg3jBDdqQj2eTMaeTmg3Cp7SNmK6kP2dBoyDoEztcdGPfEX1YftPa4zBva62be13Xi51PN7atmeBtTKam9Y7",
  "key2": "qzbUpLiTdNM53dkkersQ3YEbkPrXp5opLBLbyb9LRoS8PZpbYxjkUWXtsZ7R3Y3CF4b7BC3LrcBhGUo4GnAFGLS",
  "key3": "4iRS2Zkh4y4aN7ijMVop8nmudkLgoAKL8mprGSWcjeCmE2mTWXtKaUMPFHYMsHdXv2FjNA9EGCtnmum7HG2LAZQt",
  "key4": "3jDYDYU6eyzaSFiZ4TzngYg8CLwQqhaVusXihFqbMRhPBX4rGeLR4gz1fSPAt8NWvseYQe5djbmaAqDQDMurYuNR",
  "key5": "4uFr7NKYTECqUNVzfLbRoFZJNduu7dGj1t8M2nf3oQHWJqg3QG8ECsF14XNtynigx2GDVcGwL8jbPN8jdoRmrMR9",
  "key6": "28wJkkBXKdYRx4yb9Y7BT49h3n1z67459EaW99Js4WoFARZniYAfcXoEJNAU6ZxkyJXe3P3NRtHHddpLqLXjLUaz",
  "key7": "4MyWCHRQjHWuHvCB6qfGSSsaPprvUTg3bEJ8f62vJQ8iTF1MrvkjKb3UbA1LRhqhViHobmj6i418CcWLU519x37S",
  "key8": "4gjHDpV9FjV8Q7HHakozAv5bASt6SHLik3pJFvjZe1ipBLaneVNDsCXK9tvtr8zEyuDqSH3mWccmGGAvZrcbxMLZ",
  "key9": "5FJC7L7oMd2KTvUVCcxbGFgrqjUyC2Qb3XzRk36q3cSgBSSfB1ijHP731YxJYA915bELb7CW8DVZCstFRHPTa3dy",
  "key10": "2CGabP5F4WkBTnB55MtQuE8SeZfEEcRNFpXiL8DDMBrFdALoHzeFCRZorCf81GKZb9FqTefTPhUF5BceHSNGPE3h",
  "key11": "2LBGoq5GL5i7asZRBvzmpJ931rqDSL4hnnLtS4gSyU84nJ6cKEJenAaH8dVGpBo6N2rVVgkemHJkBvNmUXWvZC8N",
  "key12": "2kSxp4JgcQGLVW5Wz3MBpfK4oniyvyrHJi86GmYttymotdWLEAhJfkHR9g4sbviNnj1ydBi5oa9r4qeJj4MQhcAG",
  "key13": "wbYG4JH2mHkyPjZbdpudr1XruNf2wwT4Hd3XE7dnCuubFjguduyyy6t9HL3xCMEU8uaY3f1Q7P2RJx7SAtn2dCq",
  "key14": "4d1mJGNobFqeELF1jLV4nS9a6Ros1PcQtASdVvNdyQbFx1dwgdGbcJCzuTNjNdVwYuEkQmyAi1a5q3X4HY1sAeqT",
  "key15": "4kccmLENtM3T58gUq6uJoZ24wezD8xBeZvoBqtjoyGkU3Kd7K7DsUV66wMQQMYtuJSFt1aVMWHwZNK66FMc4Jtea",
  "key16": "TXLxzzAKsTwEEYjV1mY8f8d6fpLtsobt9iU6fHuNaWKRHvgX7aUe8dWaSx1xzmVZdZiu8s1TdpDpR4iTWUQy6FR",
  "key17": "5MqXFcvPMTf5ZCmh8qhdbadcn6smtHNyyLW6zaADs412XKHhCw1tSoXRfA4pt8ULKyGjt8UGHkg1WrsnxeNMnsee",
  "key18": "2L2vzSsVyVAQgnjPytzfUVZtoDxzpbZcGhGf7eEMHcg7YvjSatBkqhh8rWknGNwGMPYSzZvouhcGKgxSgzssgJ9e",
  "key19": "2zHxzHT9Bw2PdyDwoMLrw2u5P9cdne17D69VBCcyLZbTfJuvh6TLjGUAtKGr3VsyJE2hMoawsFB4U4j4ULsZmiaw",
  "key20": "5vJv9mNKUK1CVvtC8MXVsfDoqDb2DWWo3QUuZc36DwQpqEXoWzTbzetCbAWEacRFdXAv6QGsz5p4bSUTXcjkZSm2",
  "key21": "3DmJ11Zj5oowQnGUUu1JLFDvjsQ8Pn9cSsiyDz4gZJrhH7ty1VyJbJ94oHNFSJfK9Tc6BksTCRbLkAFAipUCJm6n",
  "key22": "3qDb7nTjSpU5JCVBuU1Gpgn3eHqUSbcYgCHeBR74qdgLELVDygw6dVwrzDt4WzUMuAQcZArwmjPcRvmh2Hx5ZUJF",
  "key23": "5UxaaeHNMR5F28WGjXZNfWRWwPxLYSQjrFEUJrePjiMvAPezHa9X7KpYmMzuJEevAhiXdaNVKbRpNWyLynvsQ66g",
  "key24": "2APcPCYvRpDgN5wXMmApftWJ73tzgJgZN7GZjHiH4CYQZ6QdnharLAW4ENyw8bFwb6p8BYQoQbpF3gt52YUs7ddX",
  "key25": "5r1vvzgUqb5ZCGAgCwCVSYbZhfkychfjpVJxYP1prsdczcvkmAbGtHnggFrmXeNirsGwyvBgDZHMvqYZf3Zcs3bi",
  "key26": "4H72wCkWrouQ4F8egFCQ6K6XDCscfxxLbDYJwTL2H8kvPtDFqk9mGHABVNqPHNoUSjHMKSM6uHF7XAGDyJa5gs3G",
  "key27": "2PZ6b4mxv7btKsuL1dEwFMMTSKjYBqE1y1WQtmYzGsZFXw6kvtVqybhCXuEnybWpBq2V2kYGedHyFLj5QfQEFXaU",
  "key28": "nfLo2ZaPCMNRDydkmECWsvw3VJtSpeWaSHHE36Me31tZKwhvVfdhXLBq61VpPE7CBDbodkifCshKpwv2BfzxdMm",
  "key29": "4Af55ua59YknMX4Yf6ku7vofj9uYPzGzjAUYxsz6xPSSQG5aXwPnrH2FB1n81xuT1crWVrKDSdZqqb1D2Y86aMfC",
  "key30": "31ygNFruaMmFhRVzn8kTC6Ru723KjUmzZF81eukzip8ZgtCTYSvLYykYy9LhCpqBb2sffLbhZKSoBCA9Bse1gpvj"
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
