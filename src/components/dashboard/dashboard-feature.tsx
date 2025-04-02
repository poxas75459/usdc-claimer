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
    "3tRt8uWaFYr63CHa1a9YCLZ9HtbbYvoH6d9pTZNKJQYExfB8tYosbN89D2XerD1zz1dLNNMtNBXTfCf18wc4JbxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epboGGJhiMnpN8X1M3FiRMSXbzqKpHys4ib5oiwtY1GdxhLqtsA4mrVmVRxYSxo1EwCkCW2AsVrjZkvSr4zsKkW",
  "key1": "2YC2ANShbFmGDMoTQYar231BQDvonC8pbNQDBLMT4HTXfWR3u3dyeHa3F7SpsujZnJcbJME8Z8QpY8svmw5pgK88",
  "key2": "41E6sVXWba48qVEdSxbdM49bsieRrg46ivvEPN45p8aaDns3Jz2cYujEVqyBC7GP9Yb7fWyvTmtKT57MQ37aRdFR",
  "key3": "5S6apgjqQxUZgyZJfcvBbYNFzjREU3YRBnWoxCHi4oNrLZJg9xbAfgNfzvPGu2SLNyshB9qui4uFVXquvuUZpBcp",
  "key4": "3XnnamnGJQD3g5i5dS4Mbm9qdprhza5B3mawJTRnq1D8wEAZscsSkEfDufanXDkDxSGDHrZvWNcJjTfgQLpubpY7",
  "key5": "zSQ8tMTnWSADPMfnZmyAQ4UL7aQhRRmACCs7E62ey9zy3H2HeeuywqRGQVE7MndWkySmrpbD9AqnWhrGGNj9Fzs",
  "key6": "wtEzWXWtC9QQytUxyeR9Y7h31SzBwMTa9pRAW4c4bBLYRM8TaCiT2UCS34qZuvfbihg88Qv3xsB1DdGMfMCHB5p",
  "key7": "15HipnfdJtaXj226WVBV92mZhP1gppYdBLBT2sKyTbaHnx9Kgzs9virBabF4AVJA5z46prqrjPy3rJKXCtR42vy",
  "key8": "5xqoAFL9R7f14dtU6xCZMUpq6jMpLg7EWfe8v9kcswV66KVWhaSTQfGysxGbWjTtF8vAc7L9enwnK4Su8nSmJjkw",
  "key9": "5zXqfYWvLjDLqFgzar67fCJe5t8huwrbYNKkoJudNmn1HVwZdJcd6xT5gsEKgjTYqpgbLj587ztmdJ9ostHPMMm3",
  "key10": "5iSnwaaAYBQ4pqXBWQjQocCtvpp3sgctePiKhvrQnVj4oAGxsCoW96NnN7G8v5Q2Kgtp33wsbFTfDiZ5VA56SfRX",
  "key11": "3XyBQZxLHJixgqppQfsqkkGCq1doezoNdcGH9hV3nEQSabhY6v7i9YU9r4B3191miYQx9ydZfN2ofA2d3GwgfQez",
  "key12": "5DiL8Dj3FpmbMGDzfqEtAxxrqmZuoWfgyYPuH91SmpBSzurTWMKt5uzUSufekDAfn4pKSMpoVXBmZQ9cbBSkPeAn",
  "key13": "4F2krFfPv9yTCgxbAiz7F4ZNCu1HuPyiwvR7sJZDcf568jPaYLmiua4zEarxaeUAn5j4F88eJquvAqw6n8FvjGvL",
  "key14": "2RpD73t2ShwN8sQkYVNRJwtWC6zpXKoJ1MmwhrAK4MtRJRXCCX9rReV9o1tgSi4QZyQctVegrtfeMyMxK1svy6xg",
  "key15": "WaznMpJv5eqy3cewDxQh9zPKnzkyuZH7Lfg5NgT4yULDNGJ6xvYQVZ4g8RE46TTo9nvrWbmbcNQ9opJ8sc97yDE",
  "key16": "3HCFHNLrjVBMxEXv6QPLwpboX19LxiQNM8tDCDQJB7Wtr69KfK3cPKED9aJ9X9iMxzKzwFS7gTY68xAsFzTtmugf",
  "key17": "5iHQHJ28Qfwb2B1VhafUxCbULyvietp9FAkBFr3u7dCECAonKu4RwTJA7sTB6Jm2yJmsU8qdJVXyf3H6TryMH8mZ",
  "key18": "5MEA2SHxYED8C1ifNMcBzi7M4EUHbBLEoHbamfkMwViwRtU4eKsgPtjA5kQ6Sn7x1ttDA7fXbVi2NkEhQschQYCH",
  "key19": "4jJ1Wc1DuYPg8rqKWpx8jSsRTf71wfsxtwopMrh9bpeWqDzWqJAnLccaiJmqNfgy5iVHJqZnL5YUEoTFXn12vpny",
  "key20": "4HMCiBcYPEgggDEgwQ1mNPqauWU3gYj4teGwUBCmE5i3oq7EvVTz8VKeTf1Tdrj2YEeB4M66j4BueaDGQyuF3JVh",
  "key21": "4NXdVq1uUEigsRsKYkZ2Ji5uTVxSm3Mdp5QNiM2bwVdGcg7iBwX9wwCpZMi6Q9TSfwvX6XGUvmSzESFzkPknD7mD",
  "key22": "3U7NEWyfLBkDEfdKzV8dEr8iLRGgj7VzVELzgTxx3EQAGeH6MJ5akysXjTY5xwix7NWnaSpoJgn85xJRE6oxw5b7",
  "key23": "4cpoSTADwBEuR4bXw2tVVMpezksqroqttPmcDnUBccadD1rhHJbRiubqjM1e7C23UWQd7eZWXzk7bmeXpjqqfNbw",
  "key24": "4Cys8CHVjX7vSjk2gWmLGDNUJajLbRL7xqCspYJgJkQ7zTwRrPjo5tb8sSh9ogWEWeLkGRNKudkeTE7LVdHcRVWm",
  "key25": "4sWa5Wc6fiXksamPotLCRgm9ibKQa8eeNGU7Bt13yTsDnKLMxqtPEx7p6j3RrqmQuGx2DHroumZbqRTmUScdJoHY",
  "key26": "4vUu2FHsuwxKYXyyVF1bAj8eNiWqX5wcdSn64pXQBQZ6dQ8V2id1sQJRZvhP6wjMGZH3zDzG3A6XiWuregvz9J5a",
  "key27": "YpeEeWwrFrt1BXPGj42yBgBM8wXrchRWBkRJ7WwsoZiYWDPEw864hh17k9VjFXUPrKztUXseg4RgQZWUTdwUwD7",
  "key28": "24nheoLL6jTgz3fdwRr1ndU5KXX5Q5A2EvEmFSTtWMMEHya7xeDdMGpXhMC9no45ifVCTzKPYXto1grfu3iwrR2W",
  "key29": "tTDsP67w5rtddbcDpnbJFjdPKrFgq9rrMrpQRPBTnfiXZNsvS2Qc1veetDtWUwh5xASDfauCuG1dEmYrHx61juQ",
  "key30": "3UBtZEJDdKxWcTcy95h8HJsbUFeqLA2wnka7iNMLUPM2aes2fyPffBiXbbAPx9rDDZTBpsZBJqWwSvrtZtDrLn4x",
  "key31": "5yUfRMNktMsj3V7U3aEmwwvoxSUdGxCxd9xCTxtUX14TRc32wEW7LQoKzdmqNaZNCJVAyf6SdSaPHBKcQTStqtMa",
  "key32": "2gV1sRz1F8iTYKhEV7jESSuq1gqRHQEW5K5v3tWKCw8L2xQmxa2AwjTdFZQrNB2BrGo8Yi4Ji8Nyyh65qdVfNZva"
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
