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
    "3KLr5BstaWEzRJEgg1kJkC26UFpt3UqNxhR59Kxx8MBbQqpJjeayeXDxHhRrmnR8epin4uYmoizxCBxWRbtb45Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zfnC7NkA29v8j2y5rG8SgarkZfX1k793U4AxkAXj5C4A6SEmSeZbE6JTEhP5BxfyKVsLdcAKBV1os1gdLxdS3f",
  "key1": "66Qj26YPgMJAsovQRk5eKrL71fzcyaXG5UhW8LxDuj3EhhWNip5sNAer6mpLhdpt6wdu33pCMfhJx3zqWPUNpggs",
  "key2": "4vm1GVh7gsqsRaqrPKwPwPXHPT4YepShiXxM8Zaio8G2h8CoUFv8XumBdjA9yfZMzsyMSvrWm9eCNRxq8gqfqyWo",
  "key3": "2p12UJEWGbVNNj2j9uhRxmcMGKdhENhk5BqwxXWCVG1XDjCeuYWvzA3UnA5kaNNBchE6YFLg1dkK7RRRcULStVPb",
  "key4": "4ntqjG8UYwiLwZs2yUdbv4gs5RGJgNWGbUMMnyBfA9oWCw89iywtxW6JLCRYzZp5w7mYYTjyjbDjQ7k6jdze2M8H",
  "key5": "r854si4Vk21XQEU1ZpMd1Mjex5LXC2eF6bgBipp2KjcunzLZLAWXgwx4Bz498ZsrfNRgBk2J1PLN8yNxmYX5QUS",
  "key6": "44rLbY4dfaQ4CWLyWJihpVJKPTVQNsR9WTsY16jBRCdDjMJMPVUpHegNcTZGDSvbr2iDYJakwQVujpPv9AWFFkyQ",
  "key7": "5m2aagme2tnLecr4ebYqdccYU2f3CjDTumqAKNMw6q4amp4Qa3YP31MCoceb9sYKdGG41FDCZZhF2Ko5vKKTB4AF",
  "key8": "5UXvvxi4Y92NSx3d6RmLBmkzgaTheGtbaB3ndsYxNAqiSusM5vLFR3BwLmahNgcaZeR2T5h2a3urbw7DZ6oNux2R",
  "key9": "aaN8q9JiVosuDtUSQSKRqvRJNDTvtXRHPQiNFdoVeM4eJ3R3Mjbc7z2yYSUtt8XAHcNxm4aHebvuMWqT5HYNGdr",
  "key10": "3z6wemrnvNwwpkCM2HQuM4d69jtx9fu9GDYucNUaoFzJGNrmUK8X5uCFQn1jRosN2VxJE14MJXMUMggzCGbpUw1J",
  "key11": "t4RyK2zFvxyAYcQBY1qFKjCcHCGJk6LiNiNudquTP8hrF7W3pP3tyogdcrAVxC5m786SqHNDTDpWhVntGPkY4jz",
  "key12": "5CxLLNsWtsajYYuRPm2G4YpZhkcDSwBcV5pyR2DVWC4ariJVZ7tArbAQxZz3YBPty88cu3RGb8GmPVnK5ip8EL39",
  "key13": "eSzweKZsB9pLSzYBXGceuoVjYdmg3RxG3Y5GGTvRBiisTMpfcF8zd1SypkUGaJsSX5Wj6WmqUdf5RqDdfqnyvVF",
  "key14": "3cWkLr1pLnKM8qWwBHB4bYJfPF9VwCZKG5GdzGFK4B8XBw4cG8Zc1ADQrkDxhMDrQYx97vLbuSbiobrAV17ocbth",
  "key15": "3JedBf52aLN8XT6zg5x4pKKLTJF9vE9KzkRKu8Uum46zj49WkxgQAPbZhfudHMvLgN5uYehDuzS6jRNheuvAFEfr",
  "key16": "3bVXwT97DD6ygo9hw8x5tre4ots3xJ5tvx4Erk1LSbQBK1cqfzYogJcqFNHBeFBPAsbrtxu3C7AYJJCFEcZLiox2",
  "key17": "37KTuFjXqghxPdyMkrFNzbAmzx8njTxRgiALbxnKQePxT95YRMTF8rXi2UhnYETvxLHN46iCyjdtWK6zcdFhwLsA",
  "key18": "4gE5XbTEu912FKcAjRBCzdq9Fv2FMZcMUPRRdbcEiCnLYLQYETttDobykKzZxbN9heGNFMUZVCm4NMRZkqfFVxQw",
  "key19": "Z6ZxQZ1nFyzBTcweLaNXhGi7tKQmU9CrocabtLHDd5Basd2ZQ76wgpMLmY6bfrqpgbJ4EXqawnEPnFAUQ4MXqz2",
  "key20": "4cLpH4xpRm3Hpy2HHQG6gTafTifdxaE3v3HA3j2QdKLH1wAXy83wkD7BzPYmr44e6zSLHoqFNe7FEVg4EzEbgNWX",
  "key21": "e57sYJdm1nYA8QPacgXhTD1Z4dPkdGvcfdTku9dc7tvppAwRQBkkiGCsbGm1edyZf7h6DZqh39KFw495DhgBAe7",
  "key22": "5stQrzfWPkTvLfPjKL9kBwVTXJEDg684BJoPTWTg6cGC1Sasb1obCGkbcoZjBXAy3kKvz18MSeYaCX8M1tS6xEvu",
  "key23": "2as76ezsRBt8Kv7jHKNAHwaMQBZxBxCW8PqtGxsztaEw4qYYVo6PQDzSJbo9DNkq2pLrS65ZUCaAqHqxVn4YUfQn",
  "key24": "67hRENCnAwysratQQavrTrK9RRQpUBN51e3HehAYGYtVQDDuMHbMcaK41jjxLawHCJqgtCMps8WUesifcKHYa77P"
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
