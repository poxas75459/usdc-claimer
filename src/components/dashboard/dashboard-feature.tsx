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
    "5zTCmt9iyNH8HAcmG5fqvxgZ7b74zVVwnQ66TVDa6kYCxnYbbFseVFhXtzNKCNrBTbLXx4cqeVo4WzmD6TFWUbcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64DrHh535QF6Mrsdyu5Gafb8GYc9eRHQV6ZtvaBqZFhvQv5YZn1bWFEgJ3K3v2ZMJzvTZeKofbBswf59YRTwUhY4",
  "key1": "4HjstDg6SHsCnjbDTx4j5on1GMrrdXSg4mxNeVc4ADSDRk2GLk3tg2djxw7REmKRVNPT1wT4cbWUu4X7w1aeAuxt",
  "key2": "NoS21iy7Np6UHLVwsQpnKSYhReKdEgPUTSGGqG1XpXWBV2iVLijU3zKa7ojWMBm5kbhAhk8eFqKYE72FZKQfjUy",
  "key3": "4okeP5EmUDEg6MBXTWGrpfrs24maGA8ehMdKtdWEQR12WQnphyBPER9zFAvdkjLbUPA43mZRh53iuFVj56AQ1wfG",
  "key4": "sK3dymHgAw546kj6ABovfQK2uPvuS8oUvw2iN7jF8sas7iTuMmd2Bo793bJhdCUkXXDYJpjvacea6z2yaEiV6GR",
  "key5": "4K523kGQXeE5A6RpZaKtgw93a49578W6ySFYbZoV5DWSvVhEY5uWgjDhup8g5WWGJvXKtPJkjfHGcxAbLk8cLdAF",
  "key6": "YFTadZFHFAEYZdvectWepykzg1Wjx1xygEDz7eR3xnfPUWyiLigJBpxSBbTMWqYLYZYyZUQgMVcbTGSfHq2PxbK",
  "key7": "5ve2ajdduZiccFoDNC8mDoBggxAx2jFv93nR9KkZeDR7LG975XjCwnNGePpJNMD7f8dxS43QwcA5FVqHmTcEXjgR",
  "key8": "423NLUdC4HAuUE2yuqgkbQSQfmoYbLxtjdKdmvTbTqhKw8to5nNpn8QwtkWRqpuqq1tWYp9Qpt97HUeWvoKfjUjt",
  "key9": "3CZUn9SWyd34uDDmv2Fw3coDHFv8Lk995c5uhu2KW1gDNxWyJjgjxdvncmQabJhJcgGCNdAg4uqaQs8gqcsTE46z",
  "key10": "2yCTReBKE5gucvbi4ufWr2eMwbxTfxw6VGyfVj96usqM8uz7X9ecJZR9294MVdoR58RCNbfdMUEpW2ocmCgSQKfD",
  "key11": "2S8rqzLgkn34pciZdkFonsscBJNQtUCAs8QAYSZSv3eMLxvfEbwowcHeRD8c8f1htq8paYjvj4VJYkDhRAE857ND",
  "key12": "CieH939gyoVuzWvEk2kK7hN32bEofiMPhwnvhBWCq627DhnVhy55qAsRcUmYkm56tZxy6GJyA1mqEMEX4H2Bwkr",
  "key13": "3DSXaabBR1qKGV5FqFXxHpgHSWk3NQsAMUXvMie4tWcwv21kDmdqjyzrWXYKfbAUpDADyshKkQmcagfoWZXvAWjr",
  "key14": "2H2qd4Ym2YacMeMFRy952eBp4JBo285H5tUzWp534jfXnU8MuMT39yAeoLMZFz6g5ipNbASCQSMUfff1jGCRZHDx",
  "key15": "3sBK8zBhp5KkAZyfqjHfv9doTDsmgGuBurvPhGVfoCxe5PZvP97e4tHSvbC7owQfeVBwfopwrRVkrxW12XwaBGxY",
  "key16": "QB4358mKW7z3oXdtqVGTH6DC3VBkZARvKo4MFGpbt5FLgY8ReRxvR2F1EP7R2F3vLi7aipa8kLNUqcaRkbCntH3",
  "key17": "5uXJ5rFujKsmYkUisWsdp7eBHEYEE3w2vyBMw2WLu2yAPMkxvKw7dwhW3CBnRVFyRHbWgGLMw2YoumsCSVfYWPAt",
  "key18": "2A1pj4AvzPy8jaAtqcpfEGzKQdH8RTx8dA57NtRr9zWFBVW7hX5QS2cREYfXvFsngb7BnGcUATaWwYQtCVU4AFYv",
  "key19": "gXcfPfpkgpxbwxfVzZ9HQWmVnahr9JdLxsaWVCEjFs9C4UTVfJnFrQ4npNmhNeCNd4nSnVic6R1FJ6HpbS6117z",
  "key20": "u1B7WSppb65VYSpQdjei455UCgC9V3KqrXV6VqNgVhm12jrgb1MRwR34ku8mGcsmbw8LkGyRtfJDNiec1M1oUGq",
  "key21": "c3yBZdhrqi5m9TJcdb8DiWfPoySNnwvjL9JgdZNAkMMVPuGckLz8LAKt7UUBPiJVp1PxsspCMqgCsj1vYctcAje",
  "key22": "5UYhcawfCQpfVCt8NMYex4mcppxhJmikrFVnfLc29HtZzQcb8MHN8okZp8mf93Rbw8Ajty7Pq21TuT8aVBdjsHj3",
  "key23": "4zK972G6WSyiWTRFpQa9aN7w5cZyAUdL9QYZoJ8TTQz7b83i7PgxqzcvsQhztqLCsbGQnoviwdAQPdhjHw8D6cxi",
  "key24": "3LYsw8KJyjcpJNWvUN7Za4oVJeC7yNKUHVMa61azXnmJKJMWJQGoDfoRQpRovrhH2qVTnVSPCt85WkZXzcbbANt2",
  "key25": "6p2VRkgRLTKX3SatPSDbdTqkmNSy36ZdMAH5UVNg6e9k9VxL2zGRVVisq5vh4MjwjLLZdZ5qWzmhK5mt85U6RrH",
  "key26": "4A8oD9gzA5BEfaCPtwudjFnD6YfxVXgVXnCYoQevS55ePkHJErAND7Q3dyGm8vH4kdrvfMaTDqah33d8siirsg25",
  "key27": "2HujdgHb2C2A5oE4GcR2DkzpswcZKp6TN8b8xvqG8Mzeerc8Lo92mtvW4LyhHfbeXPjXA2Wz3493pGCCg6N97VRy",
  "key28": "3WULnQPon7qw2UueCD35NW1pS3GhowpcdzPZK82AHhBNmDskqMQ469cbuawo8PWXbzNEwz4aqU9j5cPYvoG7NbNV",
  "key29": "4aJu67yChTaZGGj87Ug1eHGFc5fTgirNNoR6K8ws2AyqimV1prwG9RM6HNkv7kvXFrjYvcb7fu3vGNdooVifaPv",
  "key30": "2qK9jeJAZXQK5eoGckifvJphsNvNHJkTnPyi77U55efLVh2fCP8ffjaFrFrLatbJ8XUWQhKedCX9PudNRUaL1YMc",
  "key31": "2ivGc4v7msfFkuvj8vTJbXLXNUEq7YVUnXvgRzNYKEiVrqeFsKZvnxqATh1RodBhXY2bJDraDnUdfHyrFHUpQjAf",
  "key32": "29kD2CZ5mBWjczFHNe8bC2G9LqLmiVtCtWv5e527MysmZSUcpe8pQ9ZuV4zK5YWbjj3CQvfJmGCHFyKm6vanc2XS",
  "key33": "2ASsEdgBNT7MUUmvCeCjhG76BvUkBQKkcVctWPD5ABzbcA3Erve6vxw847QUVdDocRUB5GJBQGwMuCu5ujhqYyQp",
  "key34": "3MyDWCqGN3YhCURRmzSJbrXie34c1m9izUn74STkifT8thAAF7w9FQrDwRzd7CB8jLjStJjQqw1S4KjzrsgKNXSv"
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
