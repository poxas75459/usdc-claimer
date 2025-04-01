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
    "2J7JEdqcSn984yCSsTThcZkmoFypsb4Hshtk3i1uiwSKYv26gjKk2qios6u4RQq5CA9i4k2AcG5ZfdZhSV7m6aRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjSRUe5LD3PvucN4WxwTvqVUruAHZUxQRbBDngad41VyAsfs9chtMukd6z7XqB61otrtdWNK2gEB46ZcHN4DD2V",
  "key1": "41axgytEqEdyhNiGXN2QjUGvEt2vJo3jNuDtjns355cSc8PtZkudsP4sHddNhbhgrqsWYwR76idKwMEwHXnFPSPF",
  "key2": "3Z39EXKqwdnPNUEyPfpferixU7fsfGf9Y7ZzD8K4tYKMsHnzk9c33kRTdaoXhVxqDdWd1eTV3yhLZiVJgJEsHr8Y",
  "key3": "As73gPBqQUsRwHpE7TXHtkixyuxjHEjqXeYCHa16z3FY6DddkfhfQvDkGCsdciQ99oT3sb9EAf7T44MFUuvTd9J",
  "key4": "3EFyjim8PmYb4wtwYUgyUyfU4bBXZvLy9MfY7za7WH7HUVF6YYNiQXV9KXeaRvZyubxkgGKLvyXSkesX4rZ3pAJB",
  "key5": "4xFhDVmLUckkihHeaDsqQaGnyc8DjvxWhNEKdv7AEFGtBwi7fBquqN5eMXKbWKRQMCJwDL99CUH1KqvRqPs3Th2d",
  "key6": "XaszPMCFdspF7Koa6NhQscWVGcGW4PFNXAYs9ApS3FeHmcvEYYAHWnbtQcT8ytQXLCNNix2symsA8f8HgdnraeT",
  "key7": "5TePDh4mnrWgdrL8M3SAZyF4BHCtf8ziVi1UmaVNnCFUjKcWD3RKZevS4hXfiZYXFbVHKeoANyguShUnr9ZcWU1M",
  "key8": "5qikd8rpmTHRBKa6iJiGifjcUZqgjnvpGw6YDnR9ag6dpwosuPeC8Cyw53Yd5145XvJMgPh5mszgdDnvH37hwuMs",
  "key9": "4Brf2h31uYUpEt9TuyHHgqoqihQ6g8DPkVYQrkA1doiE4b351icF2N2p78GKBF2wCDboTLrxy5xbe4NZyRnrzgbG",
  "key10": "kPfwoV8KyvAo5wVwWMXVnr3FqWetkn8KMpj42K5uy7txrhHdgugCpbheyFt7KqpeCE3J7CfrspE1qfR22wmgZ3d",
  "key11": "5cRDvB9oMsJnFuitAM7Z2ATFkvTjpcVAhBySphoXBe9zkCimHRr74jsSjLZLtizpxPgRnE1ARwo3eppc879BRJru",
  "key12": "64XgLX5JJPt1CDNNmoVhZ8Dx74xRysxhgZJypfpKzQoxjseMHzZ9fi5e2UnJ4eFDNXrJUphn8hnGCrYJTTQt3gt6",
  "key13": "3CtfqKZG7ELL9P5h76oVWVEJcs3jja3Q46RJ1Wh6UajEDREgvZC3LiW9WLeDAak5cnnE7w4MjsCTagaz4cZjgaAr",
  "key14": "4Dc1u7vCQRkY5EmG1fRbcEbTzMZauhXJR3bSkmQpBx8UVL6RTkMa31AJSV93BUYvKHanjdQ1y1MTKCw6pRRdYiy",
  "key15": "63k3VMGYAbCsyj9mFd3vVHo4s1grmG3DFamDZDRC5fEAQCzhY7rvttehvCj2zXT4h6gLx5ap6uMNBYTTedqontcd",
  "key16": "2bGHNeT3EdRfbW9BYuBUrmbPybUpim4RsYRjitVFXpbNb9owPokvbsbyEUNbKTd5M2HmVw8R31fCiRQzsk529UcF",
  "key17": "4iTDSEx9M7TYme96ttZGWEpp8Y53zFLCtq1Ax1q4VEqEtgbuiTg95indq2oaH85JckDHf3UDyLL6rz68VLTmtXcK",
  "key18": "5GBovZTgkxxH13Ai1NmHXqtcj6tLWvo9o7NpQVZJ5sjL3V1ipdSyZLrGmVec61tR4gGWryBUn1RzyM1pqW1vZM5d",
  "key19": "3ghSeASM694saBajMpyvqDtkAfA22NVVso1z6GATouSjnpotwWvDXibZ9t1EUqLtGRg8NLS7BiwMAorTWe6eiRaQ",
  "key20": "2yTtPeZhHNs5ckMQ4DEJoUrFtK1EixA4Jent1TXUfwJ834uY2TtsdSn3CwZi3pfF7r9hLiStW9GmTKUcKQyC5XeK",
  "key21": "3y3Yux86Lgp8Y7V5GyemoheJjoNNavhgsJJYhBmUB7p9TFDr1bjoDVC5Ku6sHJ43Wrxm5uEwV3YRzm2GSMJTzwRF",
  "key22": "4g6Wqt1TUVZDA2KQaNiqufSJ6oxJLvTuRdMekczoy4CFF7DSSW5TNCQ3tKiQQU3HGGGrcW8pcbpY64s6nBkh4vUH",
  "key23": "GEGHnnBxtkdYVnbwqk1SFrgnRH9vpBfWV5hZpdYTxdgJzRrfkcxwTH9zVfaxLNi2SkuSdv1cH73yArsdaLBQBcw",
  "key24": "4YNxuMSgcf1MjkLuu2hbbDfsfv8BS748mU2aXZ34ZGVnXpfUvdb1NxcaK28bCwTDkSJcKSUJNMBnABg1uEzBtbGi",
  "key25": "5uc3cg4dB5xF7ZfoFii8Ndss8i1gnEbDgSqqFZLCCFVraHowV3FDpe62SUNGgqCrE3rjeZYff2vzECgAvKNnsiM8",
  "key26": "3FU5B1Z8k3JUJw5Qfn3tABfryruxPd3EwKhKvhNuDrj12rMqjKXL8YFbdeE8nfpSC4Ryoj7pFzZsoHarZrpvUW1i",
  "key27": "4fitDtQmuRRSpYxv7Tkqb5QpxrHYGM6ieyxBVszNj41DTKn7Npq6aazCcxiYc1BWynW3zBm5EQ8vSRxa4oM9HKXi",
  "key28": "55CDMCd77PZizQVrHtdkm9ouk9nSEEZa1ZF6gHo3WQwJfz4srnb531N5t7eBrpmXeaQRqUxQ8KLoiUkokZ9TMK7n",
  "key29": "3W8dBuZjNZi7bUhRp7VrqUvJruWKk1DKt5iCRVq59ZDbwxQqBQKCdW4GpoGf8j8FyBejue6RUDfsZXvpTdmpqgKP"
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
