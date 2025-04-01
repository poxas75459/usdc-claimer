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
    "5jfZqpCq6RcXmLtwRNbavRzRfFTRBxU4BPnKwt5FmyuNRmv5C5AwVThZNoA298Ex9enDp98SYXxkEqh9FUeqFpsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsTtpXks9obaFLDu7K41PnJgosYpeLpTyraiYVne4bt2pNH55AvGEy3EAMHggEhoJdJadkb3P9sUsWjJNkWibbc",
  "key1": "p3HBT4ADyxF3hLMpbJboPf5xweBhpnopqebNSBiVY2x5AtoEbvLywoxG2Awb5uxAs6br1EUUsHg56jA4SpKtxXR",
  "key2": "4GbhDMXydXXyKX5RZo8sYw6twhGHhkedqHhnyLDBMoyeNeeUEkaNhBiJ7E31gVyAfam9ejgbRLZ4SYpwMqqKbqzX",
  "key3": "5duUndSYzyVSDqsUWzfgxVzVqXnWDLp6e27rGBxkSZgicsSTQoXAYHDADg9nDKAYJErugeBuXxXn66f6vHb3YKKi",
  "key4": "GMngbi9QLuGo3vGK8dptdk9RASk51wbLitoGWuXtXZA9DiAg4MHnm4T3denHaTatTz4ktjc6GTLcrC3B5As6hnV",
  "key5": "5EUPpwELjTC9wch4pcq3Cq4Btdy2hfFDyhFeNuSF2XJHBcwgvhHAPjibTtCr8SoiArbfnG1DPap3YSjFmb84Uv1v",
  "key6": "3YBrijA7K7BGryQ1GWj6X5JKNsV1Zn7uLW63CwbGR4Vu5tfqDqjCuMLrLrpKBxNDHdrX4cGWdCAkThbxo3eDj8Dq",
  "key7": "5NWZF9pTmd71DevK6dmJ6g6VnoQGpDpDgcVEeLNfPe5vuY43z9TvwUkWBGRpokPrbiEinVGLaQhsQLtPqvVj7iTR",
  "key8": "3dW8kCbqbsXTxL8KLcDC41KJrtn1LjMigECGrz2to5Jnjotns2PeFFXYG6C8VTzkF9pjaWb9coaWiXxYQgJKKgpt",
  "key9": "39DvMzDQHpczXY6upkNGFWTYnFD8yCbmHx7v91MQEHvwekAXGH7fzhABSWi9B9nFKNxX2KVFncvHqCoVkWLKvnYx",
  "key10": "5yJ3w5rP9jDhp8TPsgSBh8AyqcATSFkMLYjQb8oBH4TpwiFs6v8TcBb6L1pfgeZtkdeZhW2pfhpVpNPUAbgkwTDw",
  "key11": "4ptS4KPSNzyTtCNq7V2mMVM11k7So9w5WyuzXmTdpMmYSf18xbGGU3CVt2SDZBGZDk8pM7FKkaXzJUgdKFPpcppp",
  "key12": "5jjkoDBWRgoUJuQYaKnv8BtibhXfC8j7FZcsBQ2y4Z5E2hkBV5XhMudGnzRpS56qZWoWkotBpRbVkJxPYeaiSnVB",
  "key13": "21eYwhow3cA5izhUv56EhgR173ea96Xoomky7K9uLCFYzt76WGB5ohuFK4wkbLxM8cm64uwfQzVhtEW38w3JcT3z",
  "key14": "4VrpHv2bXSQiP8EYRon6yewsqh8wfdgeTLga234akSUwzutcfjANiargR59EsEhGezmAgnqwBZ3oL9dGgATXsQtP",
  "key15": "5ynmtb4YgbPjitSayYknmWLR84fgHX6sFcpyC2WgE88PfCNZ7XscP3KGUeTtCAYq5DffdFbnokJtA3XaRej7dtM6",
  "key16": "2Fzd1fpZGUKAfPDNBZjsUEC1atp1ruxkg9qmGXMMJmjKT3wfCCFW9P87pew3q9mCngY9QqS81uJPUeqfXhf7cwt9",
  "key17": "4QAiPsNdQLzm9dxAyAkrZZoXk5bsisYq4v3otDxa5XwDv3SRHAdKcvRrk9MJ2xfUBHYNZHVfu3b5fCRgQiBtghww",
  "key18": "2ovhq9wpgbq4CNxS9hG34FGS3JJLQWWK1zjnQUH48vZd232h2JgjevuAvDevSCwYqqSXXFYT56PdFxUzRam6XcUb",
  "key19": "2FmuvwZukWj1ApVcKmRxAZGC7gukdS5EfPYGEQzqsMxbAfVRxhNizMYHP9j4S71yqaCFTNCrBod8s9Ak2sbP8jbW",
  "key20": "GXyyj9u3S3Dc7upDbaX3PbFhJHUQsrB2v6Qp5chEsynMTUzuBYgWgabNzM7mcYuW3sQGfz9aLGpyRZUqpo29XoD",
  "key21": "64kWM5E6rKwAgvSoAg5kQhhktZaHxC9bMrnJsjuAnpU3S57Xr98Xy2GGhqHpfwPUHW2Hg8fXEY4m44A33iUJ1Baf",
  "key22": "5C4oXwYZmu4L89X1cbJaBTLEKjjWCwndVkbBM1PMfQ8g2idvKsYc5nmWtaXk6s7wj6xrqjZ8uuyfaKfym7AGFr3F",
  "key23": "5eu5cJxE1C1VpBTjvinn33fKEowiRJjKd1x62oeKKAqeeD44C2t8HXTa8UFLPVGdfwPZNscyz5nC8FZKjWD9gxDw",
  "key24": "R8x6hYhdVcsQGfMiHgCXuJxGMJUfPLmFUDAnsoPYzX16UsGisHUm9DUhFCHbbrbBaG5rGuSfykivUodUL4GRv94",
  "key25": "2H3sERoL6iJvnBqdchJY3ibK32VCK5rRJkcowYGDUcSja1Z3D8JZ8JCzEf3oWpJiK446G1SnSQXS8brmu3Sydsa7",
  "key26": "2osMw9dNkiP46GWUyDa6P1RGLwqGmHAjj9uGNzPkrsEsdLw7yGqpe1fSeawDcjH8JkF9SdXPMMsvE3bqwJX8Cs2W",
  "key27": "SqnE5vJ3pdJZVs3vbCgXHJhRGL5W5aei6oaL9xJaJepMzKBxLXaX3AEJdRUN4mpBhDGxmgPNhNmqEUH8Ri9ZCGW",
  "key28": "2GQDhqv44vmadZR1oAxQRujkFjrABroggvx5UbtjabQMfQr9tQtCjq3gY2V53nzcjVBzBuUhBGRa8jYhM1TwHMm3",
  "key29": "3Fc2KVJQRLvZoFhBQUWaPG28rC1hNvVdYqgKQHf478sPVGETGRiWuuvizarzMAtCZLwoK9Ewv6VjgZNUfJ67cwLi",
  "key30": "5LNtoUb5fSUizNT55a6uMWP2hnGVWGtDpkCyvpc1UUWUVjSb2yMSsVZURqbLVDhoA81giLur2itPjsx5DZR2ucTn"
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
