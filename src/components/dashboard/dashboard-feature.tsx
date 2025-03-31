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
    "MAbsZdWwSepBJQiEFdeS1KTj3mtkvJ3ZjYTvfyPZqKH2QGTHRQLupWpjZp9HhJgv86aUrfiNZYBXcfCsNaqm4uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouM1sJhQb4zWhrgYMHt5LTMQJb7UCmADxkySGt5kwaU7yX3Qm51puFs9PchQUvbtkiX34eSurbqXUowFStveXvS",
  "key1": "3FdRvVxwwBQEdYqhbKz1byNoccdpTsKNkYCxkzETpmgfAX2vmN8HtRGD3up86kFdthvap8EY51B1zVBeWiZJbJkk",
  "key2": "2nr1jHRZCD9mEkqHngFSzzFi7VTZ5vJacBc8bh3ejLXUJU7waBRHNGGaZoAxr3aRwWYZagMKoj9khs9G71qNX7vN",
  "key3": "4L9kBswUoydmqzGjF77eKKjfXwhYCiiGr2TJS2RXsiEZBa9hs8bmxK5ocoqNd399sKFWzHHB4q3Dd3QyZ4cY6X7L",
  "key4": "37oAodRb97PfT1TYFWz5ZJ1uScip3PySHRGTVBxrxkgd8CQrcao1i6dCqp8tLwjcWzeTunb1gMVAfgx56ndh1NsK",
  "key5": "2U5AjqqYCvcpgPDL8BuzLftV3Erc5hQy5FPpeMdP6iTYgHWgDbZqoWw6HYtFrHJCSzPscqUrzudAyjdNpdnQyFve",
  "key6": "2PfFmBcRn5DDaamhWQh9ECKvz9wHXMcMN39kK11tuMWoedPLP9HR514XaNkhPrCxZt5suV2wgXKXRw3y5m28wyRg",
  "key7": "21ZJYYJP2vww5DxpRcEkTSkMUM5hASEzG4PpKcxsaSkJW2ywVdnxUFBhs9tcut4o46CMt9eUv6aMdGjfQ3SmNBBQ",
  "key8": "5LpBuajDvB31VfrwpZmP2MAsRwvH3YPH6owkixbn9yBTxVkuSGRMoYh8GWFhiDL5KNEtkX6FSKZD7DZ8EiugF7N",
  "key9": "3RuFKBGYTKZuXQjdaHJFRFvJU8SAJMnTPh9PUnqbZo15ctbmc2Synt6XrLix66eW4qjYECCXS5bRrZRJzwa2S5U5",
  "key10": "qeEnDfYvS71FMAjde27WSQs2QBEWHNnbcSxbqLJSSDYTRTTM9MuKo4a3idk16oAKEZ2EjqoiPsHgw9yZbH2XjVc",
  "key11": "5y6SdNvpwsbjndyiyycMMrL7PuUVmjsnX293ywWmL8W7qxCrU92JVqVPCmntCx2diqfyxrWhJ4PYTQShobEk6Pk2",
  "key12": "4rfkvcb8td7yXYwYMoJZLEY3WhaVbQZvvGmZYTrnoNF64LVyPj6RTY7j3c7ibQ3wnTpZN1rmE56nNhy8R8cujQdb",
  "key13": "2hNZuVfLSKkXCj9vKUPwfpNY6WVdAMw8X6Q17D9tRq1YdiPKzrXXwWj1cgwcAUmUyK3P5zA3TUB6Rkmun9Vz6MyN",
  "key14": "3WZpdSZato285GwmiXDPBBPtXtwvFuxrWKnPp7FLBk9MtkWddZBj5KxpvgrS1oVRnxsZscuc9j8F7SiR7Kx8F5z2",
  "key15": "4CN3sX7HZucfnJkPzHcahCKbbR9s7voRRPDn72fg9xwSdoCkgLe3qWkzSHuFxg7GQrwasEpDBqpgj5eEpbvKuFSM",
  "key16": "52n1agtQnrCUGhUknTn3E25rAgdegy4WEvaz7vF8HyDTgDMQAowVkyZqtzm9VRjqZzRinGbVSZsNJXb8Y4zrezJH",
  "key17": "3nthFxL7HufFoivcxW9PkKNiVo7pYQVc3xNBoLXDtE19nz4N46yo7tr6Pdd7JRexCeAajnV4LLrF79JhohoCzzZU",
  "key18": "3oDdG8G8GyHnfjaQS4MHw7fQcztRUM61pitG6o5dheB5ve4JiUfuZpNzzzQot8WujDuJtS8CXzb74aWpU5g9gxBV",
  "key19": "2frrRuJQ1is47FCfpdCZAV1y9Ty3e3Yhb2JHHWF2CXg4UH4PoXpzB3YFCe5EP1nmbFpipyc1WKJgGJVRiwrgBC3x",
  "key20": "3wkHJhp9sAJYCGLogQbB7xnSWfZF6WMu55ZEZ95nSNAmzkhs9Bh2MWmMfqZbDHKdmvX1dD89nVXBMKGXWyXXpN4",
  "key21": "3ZGUFQZkteCwUbcUGteBZDGURW7eL7hUyx43HRgh39kkVRSTRgfnHxHE3PfwQ3m73SQk1QTS7tx2aK91tK4tmGsx",
  "key22": "4snEQWKjDrsGWkduLf316CpV4vRhz9kw9ewWqj15Pnogvxo4M3QrziisCVSp3uhFXHaNDPtfm1Mp72Z1giiP5pg5",
  "key23": "4L9NpgnCXfT7iJRbviBbfxXDrrMYDUWcDVoNS2WdnjZRZT32UwZ9gnGeL9HRy2sLvSwtU6WtroPVHyXFUrQwDkd5",
  "key24": "4anQK92rfoacq1M15ccpwSqp45Hznv8s5doJAcKjqvhebp5Zb5UHYmTtk5HQGCYYzfGio4rugx2gP6Fp5HwP9o9D",
  "key25": "3uKyrRWT4ZSVrrei2cwc5TsJFi2yP4ESn7Y3nGvkWrtacFBU4EFxVbyyJLuG5hwg6mR8dHzKLAEBe3JEnhhxJzD9",
  "key26": "4h4VzACMTphoVsaZhzP6xQtj8F772US9gjMcmcTZcAVKGZbQUynfU4VxoQrw5msFadWYBMK7e1u5g4rMBQfV5SE9",
  "key27": "4qXbUHepyqVUnfJuWNJLNqE8VkTLkjBUW65zxUubFRa8Fu9AeDwmJpQLsDd4F7zWyCACSagLWxhXjBzPDBxrPn97",
  "key28": "2LQP7PtL4j7kW1RJmj6zxGLrKMH9dZSErg7KnXBVpzNnUZccS9BdLbiVUK1D1N8djA5psWzozqykgcNvd95PVhYp",
  "key29": "2oESBtfgUtYuFRMzmXsyToDtVKZxLN3AP8t411xZegMssQGQGGUBWiJoBATuYyFxYRbF7VJFBpsm4Rf2DfJ2hKCQ",
  "key30": "5mqe3tuyuAatkmUfLT3zmqgc1d325HP2PgA4QVnTZQ6TzaDt64BqWgLGGyjwKmhP2m9pki4Kc4fZPDegW9pCKZak",
  "key31": "2AMMEnMj3L5mgeBrrLcx3b1n2DQMvkTHEdxnESANFjz9Vsa2W5ct3G6MPScbYeqi8t1SSXsFg8a9VLzz7EP8fN5g",
  "key32": "49w8soRLqJUJ8hCyARLjraQ19tGNKyXUmn5BJqKdz8bJxeRkMEprS79Bpc4pKxqrVj7Ln2J58STVFbYkdN83CkS4",
  "key33": "26JdMDbsuJGvhNydBBab7sCoF5GZdkZs3CcTjxEKB5Y4FNPdEv62fxgE8amEhTUsc5oeDHuDnAiwgimggaG2pe8r",
  "key34": "3XMcwEfffwpzFBn4q4f4scoygjYvV35cXoNX6SHmL7ZxW5cSnab1ZLpChrrs5WjiG9FcGPWmwGbN936JXNaQ3hPH"
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
