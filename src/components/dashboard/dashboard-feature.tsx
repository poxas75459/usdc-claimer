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
    "51gmT3XuDxi5F47NC33wqe5cnBBY2gfjATu7UHwziPkUW5sa5gCCbCFkw21qsu9s7QYerfb8eBB4VYXoxU6fFxft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awUDVXmVxp9hS1DSjp2iQFg3hniKZSqPBG2jvgRzyxmovKrgAW6T5xe8BiVZ9bGRFSEMAJrR2g1yAtnXsNvfJtN",
  "key1": "4nDmoZVNAf4ZBcLxFvCk2RLUqeFVxXTh6rttt3oeWxPr6UwZ5kUQs8aFPWrTrPEFD6JwrqKzHWQ1ZjHX2Kj3DnTe",
  "key2": "67GoctN1h7r2ieNZ9HLQkYxjF1crFr25G2chgaTVdEvRkdC7ss3byCn8qZDChxJb9XZoXMyRiqG316jtZCeRP7BZ",
  "key3": "5CTkEADbFLHbTNRpCtQGjp7swMH8pMpohTJnSCzvYQgBjuadmwRwZP9y2ucXDY2azZKWrxdBa2vrps12RaDXGnqw",
  "key4": "3SgF1YwwnHQaht8g4toPgj4duSykS8UpDgZ4bwviYbQybQx8beFd9HLcxe8ChdcGFzDndbmZYxhbnkrDoMXFdueF",
  "key5": "2W9Q7tg3kvG8Bo27iLfoNTmfBTzyGrz3xzb2x7sR6ay36jsa9PWWpU7V85BZscLr8zdYqJpQpthRc3AkAU9X2wGe",
  "key6": "2NBfuXP5rhuKwwwxBpWw34UUJFMghyA8wYNK2GCJ8oiGsh4xiYtojxm8UQqdS1FHftr8TEAS7MJ2kP8fqRSYZMyM",
  "key7": "6ig93GbAFeBYK1YiySETsbCAEEd5ADf2Mm4U46cgkdjxQpZrrRHaSRcCH26qVEnSH4NKEmVR7cCAAwHAbupK9f7",
  "key8": "4yHg8GSqENivQk17eNMZUnS7QTtJviPATdNd2EFLpjZ7BEAo1n5n6JRb1EbnfQnPFUZX6Sy5wdbH9Zr54Z7wqcfa",
  "key9": "5WF7Qi1YWUBw36V3oHcZyxxZ8XvUjDwuxT8X2pQJsPoMpRwZhgQ9gc9Gs18RY8NRE5Y6RrRd9bD7ZcgmL8D2oNXP",
  "key10": "5asSTcmZyoaxgBK9VmHjSUzhuHe19sLnLgPbnvjmdUjSyyk7dEUTqpPBxkTiYetJM5HftapLnENYvCkGpZWtcUbM",
  "key11": "2KsbCbEEKhRZsp6vxTz6gq6DjbkQApnHnsmzGroAg3cVEVvSLJGGz42bFVhq4KE743D8gT8sisEAp3XpJw1f42u1",
  "key12": "TqbUSi1BukokQTPhvJnnwvrVec4kzxHEoqdzmVWqFn8tyWpJ14RWSthT6F6uyBsvZFkMG41ZiJn3vPim145H7eN",
  "key13": "5bUC6JmGVbyk7gMdjZKR6Jj93xvWbruUjAtFpU8dcSUnmvz7CFK4uDv2AZcPnPE1ZGP88W6hwLxMBs439UXqArM4",
  "key14": "2jj173CUhQjG5HAYsWZzq1Tz4Z3azEcC8JKwkfvrjgty6Ycopd1nisJzCLcfTnejwngobwqUEbhDN1sQh7ENgKFB",
  "key15": "goDA2X97YJ1MKAKrLN9ca3Ky18gmWJarae6RdYbGn2V2ZAQAdq3QuQsSdt219k97775t9ZMecTYA7Lx9hh8aTxm",
  "key16": "N9bNsd4rXGLtJSvR5M6KigANcJFZjkSSg2sEEvvgvS8hT64cvfuzawBE9dmDYeVK6pfRrBuwkXTLFYh3UUGNbgM",
  "key17": "3nhfF2AdrxU6ZEw3mU6uBU8UQkSDZ3Mrw4iHaqc1B8SfMm7QrP8Bp2CrHHEAqDABwiA7z7BUrumbbXR7GC2EtoLH",
  "key18": "2cfYFg3JXk84NG9eiYa1jGTSXYq3iSRwy5PJs32ZSeeioWGWtTLzoxvJ7mqYodDZ82AY7utXdyBQjZLktbfMZqNg",
  "key19": "5ryDpacC1K6jughAZE7Vd9d18TpJYZccwnMZm1ZCNAEvCqNWxLaEzaMZfDXtG4P1DeWLVnYmrLFzDs6HtjoYSdXV",
  "key20": "3yJfY41irAADnWPQYK7fMvWCFXb8gWqQkTGg5L9nbxWfLQAwoLgK72zTA7ecrDd8RmenNdoCJqu3GTU2cCa3dJ58",
  "key21": "66jamUHSWGnBAFJg7Y2Ju9eGFkRA8qvStXonQT7MmvB6p1UoBz2CBVZegoHgom9HVBJsKd8reRbTRqZuHoJkjaRk",
  "key22": "5h7cE6T3fYucXTv47BHv8fkCNK19wAbUSV7FUgUBHbJjkztoi1WWtGSHsTvinUtvzrTpQq86ziRnZKGha8FEDwus",
  "key23": "42a4QkjLxxGeyjdJ7UBDxDaZvtusFDbvqsqxhNUj8aLYEFM5rea98cc3kJ2h1iWHV2nWjxzuLDt6aZVU59THb51K",
  "key24": "4AGsTd7fK4MAZopf3cqJBpdQKdGhCzwnPdUUGqMvcN3ukT7AntqwWn4SsZcgo4vES3PZAtwZP8T8TtgqzMod9CgB",
  "key25": "46C3sXgmnt4k35RdhiCrVHkY3fCu5c4eUSafnixaQnPeWfaJUjNvf7ie9nzd8uW2QzuZeXBRGMQhZJyBFvQmb11b",
  "key26": "dUmswUwyUcw6diWczpgRSHcNRarM7DAx1Awsbvh6WpxFqYTUro9wVKPv62Eym4bGt32ERFpMSJazkmkkisaZAEc",
  "key27": "2WTEhtXDAkfL7aeeQde9CSzrZ2zx334wUVdNMsXKhp5gD9q1wCSiHrShi3pKnQ8zTAarHRa4zVtuhzcej7J84rbe",
  "key28": "31LrKiCLX7BfTf6q4MEPuTe16pCGZw4J9MVvKWYDGRx9XexpN3QVs5YVwvrA9X5nbAYPKnnQYSs5jjvauhebGmHC",
  "key29": "61gonUbW3dopZJCfwCnfQrhnMRTCbCZvHfvH7LXreH5EV3SW3ER9uvAqRmivjaNeAfQkHK5wFgz8kHUAs3paM1vj",
  "key30": "2cqLxdX547TFaSHrg4Nrcataj9v22j4JYKfFzGFANHUNXwsSUZsKaSodGCw3zTpFK7C2WWdqafMEZWSnJKarW5pb",
  "key31": "2LvsBihFmDHB75FmTrsNJtFd6KxYiX1aRbb4g997DKZvBUWV8ZQBk9fgSuQN6jASge3CVGu32Qs7FxEVdWA7HZco",
  "key32": "2oBQ7S9NsYKUgsSB5B8DfBfp2iTArAcd1CVrVazQxRWMqmUpSsp6qBufmgg2uVawmEPSn4pHHiwbdqb7sTDyd3K5"
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
