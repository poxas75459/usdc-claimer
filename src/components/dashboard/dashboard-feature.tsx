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
    "2a4EZ2rQ7dwHibzhdSMNqiVDLRy8GxBLYT2SLJCj3ZhorP3dJVfjqXR9qycfDB8rKSmwxfmJKnh9X5WFB4waoaCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLkrjx64rSsU6oJKDfSqgJkL3LpaDX9vehHphxib5XFVujYsEj8ZgxUHHrWPpLNFWdAEoMG7cTj6SwS9ikKnEvW",
  "key1": "GZbZaetw7gEbcc2HCdLxQAQALT3nGxuUVTLDaBfqNK3dP25g7szqTVxCWTUFWcCBFWSXsu2m7fJ7KTEy4ATmYs8",
  "key2": "e4QQMj6YpfTR5JcjyoHgvwMkYomS1P4ysfDWAK5WHDS53RcdFfjqVLh6v6iCjyuQBrHqYbfxbJBjFUM9K4rL77G",
  "key3": "3g8xuLPNaKxtYnKjuhTD3fHw5A4baUhaaK5pBm4NUcjsjfphQMtHMn9XGK9P2pEYtEp9TiamRjCSfhCkjmfWGieZ",
  "key4": "3qwrYaKqsDBjXgEb3cr5wC2EhniqGKV7dr97tWcRPuMRNq2AWPn955j1Fia2ikccbcDjxg6Po63LmSj3BK5q5u57",
  "key5": "1gAMFUPfaamx5BHN3xer3on5UKyNQK15YX1ZTfRRAQ4SsVW3nNMwGAj2WwjrpAcnUryVkS72cLxiLEox2jh2fTb",
  "key6": "5Aqe9YAwW2nm5P1e7LvRjojjQSBPPGTMDEUPFVUamZjV2t4sPSuBqHz5s7YtZFyHj9Qmmp1T7z45mDQzBitri1ri",
  "key7": "3hfsBztr3k8fnFF79SfnmqBM66McFQSCkix5GoZYtDfqxSykrXfB7RUUyXHxV2gJzQSqoSKkwKAEHJCyMcVsmJdN",
  "key8": "2itGbdQiSDin8EiEqDLyN2xcqSLaW8KP74ypVns5Bc14uFzeUkFTzwBADSn4KnKbqchYkFNXHFRRGBpVRu3XnXqf",
  "key9": "4Z1nDbEfKvgBaF5S7CaLJ2xdFmzgbEhpoPvMRjSJK8A7efmc374V1YF52WsiBgnTASYZv3ngg2rmVhVwVzPPjMPK",
  "key10": "2v1UAbhTcBARuzxwb9AW1dMyMy6mjMfjLwjTb72296bSQXXWTMA2hNLhxDzLTZJP9ZBLbvTxGUdbX5hqk8K3dBeD",
  "key11": "2A1VLGEVxmn4Pc3oXHAyfPWuwtrJnANccxpAztaeA3AvFCNojVX9LFaL4ZY5yqPLv5aW2TVyph6go6ruTBbXjKtL",
  "key12": "52cL2jGKULqbJ5FT9By8YjwTBS361KeE8UNsTnhnoyS1bB4pZqw7BUnVAFqE7vxPTS7JN4bBBF2pW3fCfQiQdBig",
  "key13": "3QWCCgpEJzq4tG4Ne6u3mRYKH26MBm7vZkCjoW1eQMGRmpJz1fXVyujGkfQkFpYsn3xrDExpHt5QFXvQm438EpES",
  "key14": "2jEk1DDxkRb5DYrmvKNQVF1mYU2S4xeqcnCLEnJi6buAR2kYkig2RFstGfdVkXHUQpWn38cMMukpW19uxwP8cQz4",
  "key15": "2qD3GyHyr7sX11wZiVU11XELbajBcYzFWqXeQfojUJbyV8tkvwQjtx7ZcNVAGjGY1WU7CznZdmtCWc4BQ6NoT57n",
  "key16": "2qZe5Ao8iZQf8aGfoWtuvgRPmkJTc4xTGDGiQwWvWNnnKwZtF2gwU1XmhbNPo6ZA3HBaTbRMxyVjd4ZKYbhjCTHu",
  "key17": "grvgWeAF9drvyJzFkRt9McqTLKdiy6MC28bodiXcCRzkLXVNJBHGPUEwRLVKdo789MN5inTChfbNwsjcn5Vj7d7",
  "key18": "5RrSGrGFW4JK3YPzbUN8K2WD8iqDdnBgtiMVWFiizkfu4FtgwwHmg9A5fghNj2tjJf9DLhMJYUQttEKG5CRCs66y",
  "key19": "3JFz5wqTCsUzQMFpE7RQY6Vm7j2A1K5Wa6X1hgvFb5DGfcBSg7jRefKzX4Dts5KjEEiE1DaBHpa4g6rC9bnEwiLf",
  "key20": "379A92EKLy4Qu55C324WMbNcBhb7ve3FMLEGJHBksMqR8x6TGi3yGK4eH8wwbZNPvhbbsMr8JPbugWQdRsBM6PD6",
  "key21": "2gjzLsXzpfAwDrBuGbBzk3VotgxssFw5nV815mQi7Ak68fFsfwsAjx2ip6cnH5H86Z2tuLuWLPA4PYNxAKCGHEWo",
  "key22": "4Yu4htSb6aognPtQ8FL6BHCpEM4CRuZip4S2urVTB6T7PTJqA4CDj6LM8YU4wN4HrpQueRZxaPQT4eeGvXp4RGpP",
  "key23": "3erHYvVUeoerSM2mKSf5TS1t7wnbrhqrL1NdVQ9vdFpNUzdyj49zAxBfRXVVuihJnNp4g6CfrG75DVaqD632oWDH",
  "key24": "4r2Q6hXL68df1ArL6oT5DLABAKSCaEe9W5YKVe4CkyAZ9iouNtzqYgJGm4zcgL8S3cwCYB8tSzToPkecjSRBR2qf",
  "key25": "vZ8TA2nCwyBefxAXuuCPvsn1mMQuCny1nG6zTE5HwU83H2XppvMr9DxtmcVk7Ke9gms9E9d9o4PcWcZf6uLnVjV",
  "key26": "TdqJ9tksQ5iCaXiBfpJpvoL99Qt9x5dm99euT6sp6PXbkk5cqpyWD29NpbW6QACDco1NEFACs65usVRgmg5eenz",
  "key27": "NcKBkkhqNM2sVPo5yEbALSWwXvWYbh3h7Ub9xyG8Dh9mhSqHP8uyb9KJ4BDqiLUcmVVWRrdr6DYUu2xqcx3MQLC"
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
