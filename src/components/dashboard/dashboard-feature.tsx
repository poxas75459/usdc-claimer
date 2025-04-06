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
    "4M6QUcLGtTHFZfurBWKo7YzXMQ79DvTtbJzFgDPBTzf2XVT89ZodSjYfsGDxwtgcXYtdaYkhsLFqvURdUzR5iAkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9qbj1XgJwQfUxBmbqvdQfsBjGmwKUPNQJFp2KUFuC3gdjWtGTZP4W4bSD1BFFbrizjcxyLP3d4tc6f9drjovCC",
  "key1": "3RfAczdcyT9AXxfWnaWQnpSXr1Wj8ufjeT4NxsGnQcFCg91yu7yKRaJrywnHwgnw4jpksjTamu8UaPBYM1vL1VfU",
  "key2": "2DQpokcikEnPrfXNVeq5BEJjarqXkQ5TSbXesnbf3k67CiP5Swh4now4x7MxUHFiWdE55HYdGPvLts91Bg6aAwVg",
  "key3": "4eBdUYMU3iz4r7R9tSmkQ9vc569cMzckdYrHW1KWZVN8jGRc2PHvfotfMa9meYV3WpWnxKkTUox1uecdFuJ29aNe",
  "key4": "5mq8BV5A9uYWJFUccqr4myVJBKs1wbeD2b5Su9uzzLYWdyzGz3FJxxBB68qYAN58AZhcK1PcqdCoie8z6NnuUwNn",
  "key5": "2w7nLhKuEsiZ4d186B7UtxddSACcpEkMHuj2yqioYDiuZuyqu7hy3AE3S4nG6uXXp2Xsas5eHQ3BXPw473pXT8uW",
  "key6": "5hzkDA5PWEX2STjWBx8FrNRge4d9Kf7zGnGoDJbKyWUm1SVx11ef9CccXDEf4c4E3GAy5KiP4HRSPycwDGoYeiZT",
  "key7": "nmr6rdpqNjTCXmzCEoT8ZuswaCPc5tDoZnex9igTGAidwaa4qSVkwzsNpk9oWTct3Gb7QyBRYzZzKHVgZ6p79WW",
  "key8": "5uM4fvbiYiyRs7qeJLmG9q3xthsamRfD4dcXLDQwhz5ijVyMTiThxbpgPqegkuAoBbt6VpLa4xwLMMxXuHWt4vak",
  "key9": "26qMthvShz59jsWZL5jQ36gUtn1UBQfqQbfKwqbcF3uQo92FYyPx447YWzzNjVvedJTWFnhz1YEEpu8z8cSeZerD",
  "key10": "61AvHg6dXZubhRPoZJFhdGEU3rwgiaGXmywwF8u9vi5zPFHSER4ZtvWa86HVZwYMxsxwZY1rgztnLvCsJTpY8ndR",
  "key11": "2rd7Jn4PJWMpmuJXgA8uYWTf99VJP4BAy5Q7UVDdHE5fi4z1Y7Px6QoMxtDygcUHFB4A4J4peeeTxHH1zohvLNkH",
  "key12": "3zbArhRkuswmr6xmf3hJUwqLoqbZEnnPaC4JCBxyCw4FPLSeiZAPYMp4C6pmWEYYGDiL5Kr5kScVDknQdvrQRLss",
  "key13": "59ZRHrZbrkbEHzbVYFr7SfmVyBeiAkq5i35NjFhx71CMG4RRiCR9zHm9VdkX7xUHapVm346VXD8yjqXqQYQnY3ns",
  "key14": "3XCrbTcZByHkAatsNdc4z6F4J2qELmRf8rV6NhKXeubFLpSB6ZszVNPUa4veyqF5eSapph8MmPaiNNBcxiDWdwfL",
  "key15": "5yT48chRq7cR8S8aRQJZiZrgsD59aMemknLRiB1FdBWMg24VNisqkPjx3q5VFGCRmib1gzW4KEng4by696VpMmVY",
  "key16": "5KAm3sodbw5c43iGo2eWP2Wh7PYEPmxEuwVqJVtjzbvSuR6gEAimDNCKYNn5HGnF7kkni9bNjJrnmZhzC1THjm8u",
  "key17": "2Dv7msZyNUmVacAFTX8Ls4DjiFuutaoQ5Jt1ZE2X5P1GfBZWBw9uHRZtYHj5kXKJNbadfANis5DaZKVGvc4ufpen",
  "key18": "59FZZupRrFcU66nLB77QaS79bgPRBVJhsXw6rRcSjAqUpJ3DBTjx2T7UsNa2t7Qen4GfYZjD9mi5evqUfoXmMxfs",
  "key19": "4oxJWpUxBZFBie88ZyG36txZCM3fcpzc8LRonJGnD7iEwyTfkqkdZEhijAbQGUe3Xc8iUa5oTYfy49U2rQhzR81F",
  "key20": "RGTz5GaKBf1dA8uuB3ChwiW3RB9oWQbX8bid7kPAD9em71tG36Rste8emMpm5kXe8tk942811dv6Xj4hTpF1zyE",
  "key21": "5Bdobke3pKzAkepAWFd7uQtEVQTE49QLPBtzjRWj9LtKnL4UT1sRKPb6tJDhm6u4nGY4oLvXaAgYzxA89GEyH4df",
  "key22": "3hXmJhBjsoPGMyo7EbkUGsapoR1nKQK8SSHpg9JCTBRqKJ1gqseNbz7TyK8nGrawaVPEvyMz6XCS25jSLjDeeqwu",
  "key23": "3ZKnEcEPQBCKnPXDXqL6YoKjCsSGJXb2SAULwvFzYVF7RQ9oLxkAtHbMWW8jyU4qKHCDcppXfMtiBmrZWmC5LpyT",
  "key24": "43mJAFDKfTEacSqZSVR6YLr2sXdbBr1CJ3Q8te1F3ZTyAYV2HCbKjAoyvVcx3EonvBcmH7Zg3QNFJHpPV3Y3Va7x",
  "key25": "4PXo6KLufMMQJJrcs1f56sjbjeX5zSBJPej5UUxvrTGyFfxKBDY3bz4JmtzznrheHdckyyhJxPGppdubKuhrWUty",
  "key26": "2Fn2vbWetmJdcP3xsXu3x2RPVEph8DwMQRWBmvFw2K5EBpAfnknmZgAVze9nH8cGGgQ6enxZLWL4EyWMvDo5inWE",
  "key27": "2uuE6aoAwwepK8iQKNEbmdFFNV7rsW6oQjT1pvsupKTc7R3Gc6ZZ8gdtB5S2j6kX6zghvYxTxgdUkWeH3s2kFEL6",
  "key28": "5PsUeXv57MaaH2M54PYBHnH69HaRw1zUTt1YYVYcG1V8W133ahVhUwAtBRHEUtyF7tfLVz32xpByir9MaqqEVLu6",
  "key29": "RfXdmyC6jc3HvN8yvseUtx7biA2ztJMwMPt5uRGzFkzUMoEeNC3JZQNf7Ap3zFH2J28aY56ecJpAQGwLVNv6eoo"
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
