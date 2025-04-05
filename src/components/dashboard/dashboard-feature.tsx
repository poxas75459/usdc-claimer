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
    "4AALohcwbQfD3uBt4eD7ouvJeMAJMNzrRSzCvM6D4VzeVdYWEuFC1RPZcBeSwbavsmGLo3kCfBbrSy9v7uxZ11Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJAh9iV7qNYeyTkUmZgEf8uRhJk5dncjVKJ69yAE54CS3T8XBvNrxkc94rdYBgTqr7mZgyqaMiRd6b4GseNyWgP",
  "key1": "djKDDUAUEuUF7Hrjv6zjP1fexGRsdFnNoWseFbkQ5ediaDqxVdDBgNdk5ak3UYqv3msWhmuCGiN2zfLxuzTo1pH",
  "key2": "4QjLqjxkEvkQMXCrtzk6LXM4aWowr1YHXDws82gN439yYTWsHAQY4LJa7Mx4gxzFYs4JMgAK1ngc1dJQd1cau2uF",
  "key3": "3bEUCSQLuZHcZFB8mQMmY3zNcXbW6vJecvpdfQGkovgwdvaSpySA5Zwp32mzFVfjxnbKDvs27hgriRXjiJvgRNLQ",
  "key4": "4RM8umeQ8vi7KjkHVV8E7KNkTRRUff4J2j8pRyFeEpkH3T9TtU3bYw9sohhmNJdUpUBkfHoZaiRKwLu6NkpcMqG",
  "key5": "2tuL8h6bcQXgfpRaTihg7hS7QNqUw1MnQTzvC9oxcspCdbcNtdfbFnx7koD83gBLeScLVDG3X9CeZLVbuLwtTnXK",
  "key6": "76Qj7859c3pPZGKJgsnhm66K5JbvaykGL7ptMWVk3PFEEFwRWTZfgsb7toQm6jkPzX1FmjEtZpV3swhQzPW7BdC",
  "key7": "2buhuCsPGEfSALUMcMiX9YR23pvoot8Phw2J5GMtuvPVXE6ESVjGVkDBHiakvQkDmKpetnSG929mZUjbrtdTgAvW",
  "key8": "5a4bTGGDe9dgyGddEMPBrVTDhw4SZ5SUtsHY9gHs6aE7iS8Dn89HfxGwjpaa7DptNY1Nu3GCTh5Y9uEU13pGMUAJ",
  "key9": "2HVJ3onKdzQYqNaKTATBMg9uG4GJBYKtrFZW37WhyiXaLbdTVHXqoP66zGts6EjtfUsAQ8uMcwGmHysCZh5pdAcB",
  "key10": "3ZxKK8tbHcc59bNDWZjwnAw7QetuQcrWbxFd2uxuhNTer45cS8NnvBg2KU7WhyLVZ2Cq9j76ageKTjyzFhRcdEyw",
  "key11": "5ikBFJmUnViMnKE4kZLZ8ZWdrK7d7Q24tZzQonauYPHXVFQXifrz5gM5fyhysac9GxdnreBeSKZsimWCmp2AZnLb",
  "key12": "3bLoygNAYLsMHfYY7f1AyFpBEeYJ9gS3z7SsRK5LVtQcZxDEyGE9oYvwAPA4Sc3JCJQe9CKmmyTn595gxi3nBAs8",
  "key13": "rQfYk5cJJmHi7yhVEf6tWJ15xRH7P5c6xej2hnb5ACZamcZRGRSfSbrLmjadchQXcZh7XvXw5BTNacKcHV3Xog6",
  "key14": "5hYf9Qg9cXSMymyMvMwVx1t85LfmXHfkDjdZsBMkJEsTpyyPXVcqmHet9fLocHP14wZDcGEz8TQsbUZAT2GrotST",
  "key15": "4KMdAbmuf67KSnPC59gLkZiJ45tSLCDB4Joy6bhTSJEugtJbesfZg1x5AaXxHEExBpaEM2kFbuCJZTWe4w7NYybW",
  "key16": "2VomNaoJJr2aB8Thv9ZUVgW5mNVewwYiVh74eZNTjBhM2fKG5eMthTMt1gYegAK2rfBJKPkZmuSBsFZhepDXpSp2",
  "key17": "5A8whj5gQRSu5Mo9PTyywgxuoYV4dPCQsrM3tSQhxxF3mKqFZTyohJaPVKBL5VvX6nwBD6nKuQrw6HZbnBmumv4p",
  "key18": "4oNjfq67m5i1WM7mogrcBbzxrqvnPuccRfSY5ETL4tw5fRQ2TGhGJn2KHzbs9YMYY5tYJRdpEPPecPgziaWezT5C",
  "key19": "2WvKu4ecHaegzCwi8rbPcj8ab72kZDRPZYhDTAq3QxLzYRnNUhYFjD6tnaaUrBev8b5pr96Zj6UrkPegFRbjmAo1",
  "key20": "3NTRrvGCYy6oevg5S1tZD1mJG9kmxHVqf5brGue189CQcbYzm9FaMVRTobZF6Y6nTL93C6CGyHPhiopUghFrCLJi",
  "key21": "5V4eYvBNzz1huXPAc6W1eiT4B1DkhZhiLEvVWURhMLnnZ9syHP4RwdmTLyDAGNzno9GM2no7XY3oQF7989XCwzdb",
  "key22": "416qEZxx6MQsdaBKiBz5xkf5htUpYuK46w46ULr8jHdoo9TkXBw4BsraLBrLbZEJ7syMMDuHjHdcUydV4zvKLpXD",
  "key23": "5oxv19hYRUHdxcjR6zMbUX4zSyudh9pAaPLWgouzZnaVLMxWKpwmySdWf5bg6rcY2pDqg3v17vo31VBLFVgssTV1",
  "key24": "55T6e89YNarXmvpemp5G3AcQHDcjbfEFVLAZY67QdNNkd6HrcSdHYSwdhZ4aoJaZnYr5tCvLk9s4M3H1DuN5h38L",
  "key25": "2pNv1mLuGgUUqRhABm8c21SymFc1YzeGZVSzV5DawonbvrczH5PnABuZUujh8WbSPyUbAhdG44mY95My48uWXDkr"
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
