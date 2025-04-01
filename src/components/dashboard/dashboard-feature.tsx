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
    "4fT2BaFxVoM1gTkDYKP2ccVVcbvi2L2L6mHgUELtZfd4BaRWsWAAgL3iaX68mSoM67Zf8ypNRLQyS8VH3qsFcPJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CGtP9q7nNEaHbXXKxKycsYvVpTBzmSQQShZ1f98ntxD6V1Gzb9h81wkLNyqtC1PXG24snAXAivzsYdApBZo7m83",
  "key1": "HGtbccUAS3JZ4tBahtAz1EVaXBQTZsAVrmZE7Gz7XPp1GAgc5sqZc22vzb9jEMLZAd9xMh4PVeT9oVmbXTNqbyu",
  "key2": "3fcCEQoYC3iwdW3hM9oogi4TbXgKaNE6xLCLcB3qYYqKQHvFSqdZJ8EwnR6ZkffjGiXHnLie6YvcXrg8W5BcrMZF",
  "key3": "AZwJSpzUVBtVPzytP7qSxtFQpHY73dJgUigAziew8jUEuHeSCyXQqGXvDFhyUyXqFaR3Cs3GV1jVNpMEVRS2ALP",
  "key4": "4FHCz9vgB46QuJuDLs38Y2djKYti23tZWjkEHazZcUNqRE1b7JiKnLXyaeLbmHhm4p27HJmrpkvpfRfFzbbtxk2d",
  "key5": "4LAFAkAeWJTX3B8h3rrtkyQA4ZdJVrQMutAhq6161Rk6e7C8RaQ2XycHxsucP8t3R3iToWYyZf6fVJyo1tTge2Q1",
  "key6": "4za3J58Mw8ZzrDVoxX2J2EzrjyN9NhM8wTtuub66YDkddh9WnFSjWSJbbsCmjj8VdNv9SSiLuxEMaRGvNAjwSyDd",
  "key7": "y6XjVy6jajB8LyPyNiQkFkw6PHhjE2VNUybceYHxmJjHntJDpj8Heoe9ZxqS25V62jTyPZZCUYThXWkzRsadBi7",
  "key8": "3L71WXM9Tunkva8z6axrYm9en21ZpFkyV8zxhez7HcjNSunzht9A9TcLNRBR8JBQmvbehXycAWPHWX79866eJ2zB",
  "key9": "4ji2XgYc6Spi2yRJGFwJgmqPYULVBCWN2eNyBKhmsppfLjt5Xh5DuZDX2N7DNNB2mktMpfaYuLYZcHhcvzffNHGS",
  "key10": "2nb3x46XopxN51VSs5LHheE9QKi2gGYP1tdKoeyDUUjC8DoubbpsrUsihVN1CJhzGwm1NYyCWbHNNBfiSKTj2aA4",
  "key11": "5GjGQzZZRhCKzLaApv2VFBPyqcLZRptDXrisNWbu1zJn6Vd12goqKtF5KXAcrrBwNxfz78yRTkTWSmD25HqnYEV3",
  "key12": "3XpE8BRB8X8bFGSydwPQAUyJD4L2RThqaWyCRLqqM2VcjcW4AJCjZPFZ2UMkSsNKdQSzZpndvjn97Nk8VnuKoHnE",
  "key13": "59t4ieVUb9TUyzeV9rQVEWvhHkWmsH1PpWUvKBXVhLUmueQDvdSMtzThUoNgpFjeLNCSMboo9xYjf47DD9RgwfRp",
  "key14": "5MC5VjxSnYHMvKn8HZPuvAvXCAe5LSD7x7ru7j81tuuetekbaqwA3hyNFvcQFQeVtH9M6xPeSLLXyj6AMQcZrkuN",
  "key15": "CEUSNTSLkb34vCCtmHdrGwi1csoSjN67EDRDYyjnm8eJHLAYUXF2AGQymaGim5BZ8wTidRgT7E1Z5QBD4r8ucQP",
  "key16": "3HphuG8jeDkwC9k4gtLchS1v7pqEkCii7q9oqrgwbugoWWSz2vRKhT3hg4twcpAtNRvimdd8GjAZEofU5DJzqpSh",
  "key17": "5coKdySWXvhmCMWudjHe8sKWdcsQkykBsNTdAH33Ut8YREwf8aocm6TYqvZa41JJuaw4VFGSeHWm8ugMvjtNX4Yb",
  "key18": "2nD6GNhnVEoxrR6urbB1FdD9dCNDajYwoTrzM4ui7Bckzm3dqyW5hJWHaj1qppXPVxpsqJ23rBzoPmTqnE2odezz",
  "key19": "2dJXJTrmauXLPj2JuHkHXjTG3jD9uHyEu1HATSmCh1MPZVvrfHiVqULAuW5TJSTKbRa2AvMBvrZLQd1YKkBJQmUU",
  "key20": "datUwtCp5arEgMTFnY7CYMhfrjeJkZ72cJFQQVRonGRs9HCgwh3ZwfrpbdqzGeLhgeuXvQ6CSXZEknoYWWrQsdG",
  "key21": "Ghjp94hYXULU6i3JEjngUtAQ8gp5nVDkMg7HwcivW1iu6avvCmzmpzWPNhcunU7s9yzuysLNYrz1mpyKxuWHJry",
  "key22": "4MsnWKbRAKLBscJ6jDq574L6UUtu3S7vRsumK224teWTRN5Xoq6PCo2VEtFqXEx4jxPqCKfjBfL8j4h3uBUge112",
  "key23": "2qrKVSit6oJTtvibtH1N1gkrAwJdYxaevZv1xVhZKhLk21WfUCGNmU8fPbg1hTkgeTSvtbnWAhzHV8fSzocaWGxa",
  "key24": "2xRLv3iF18got9h3csEPNYDQcjBdrqNdNQ55z1H29nWPFPpcgZYV7Hkwx3GcGFf5VQCkofeqwu9ke6i3jdXtDRTk",
  "key25": "38hKYnJ4sS9VtwzzFoWZUrguTuBpJF68ymFKJR3U4sPKH1muX6y847ahZrJpiDnin5G7u4trcw7Wf7jodaFKWcWZ",
  "key26": "3E4VccSscs69MW1J6mi1G5PguktyGbUj7qhSLeUEC8ney7E42EGEB25F2BNHKNrfB47hEe3GMPAK7o7muvjH4goQ",
  "key27": "24aGvMwzu9zY9KxZMopjwvfK4zzSGHN4dCnze9dQdftHKCUJ1TDqYw4rPK8u7prtAR82sjWPjmj1Mn6LxfnsztJj",
  "key28": "2inX6TuMsCod5ASTm3dAKJrsnDmoVqZDkS8FJy1CQ1X7UhaQZ2pwYTrFvkTrBcQ25hxPdFUFRe5pA5akXqWqbbFw",
  "key29": "3oJjBwk2jzwDkFKwrkzHN14VuCsCQ1Leq9N8Yb31vU8ZGtg5hEwFKV3uacX4sH7mtkukJQ7NTkYPnQgbt6ZA9K5n"
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
