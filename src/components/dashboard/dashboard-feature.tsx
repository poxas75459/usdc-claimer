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
    "48P7n31jVvhEXQYufzkUbqQ2DZBnmGXVtRAvPm8rQHKviK2kZkybDHJYnjMmr8oMi6mFbjWTrcSSWHzLjuMJDE3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52W3gAuMkGgaA1srZyzQCSuBSbm3f6urYyibcQaqdwWrVusdHPFh9MjHeDsoTpt46VNLQajJ1YB28Qv3g9tDPBvU",
  "key1": "2CGjmcvv3zNULBMLz1127pdjhDJSr7nbpRSZZgwaE8GZCEGAuK37ZmZt8gmNbPxTQDxTBnLQXZDB6gxJDKKXRr78",
  "key2": "WRgthptDmtoqDHnezRuQhDZKW1YQqL71f9v55B1jCdZsnLFYrAhhrDMyabitAHZUKd3SBAhMEepwrzCMoqLKtbb",
  "key3": "3M6dMcSUiifMTU3t5edpExNF6h8KKfHBuWGBjao4PeymjSfTpruZMPuDp7Mt2v9oyWPHT48F4zRQbHYD1RwQstZP",
  "key4": "EtqxP8K8DdZ71KHaG2JRtJ8m52a12DSw9ZMC5nWGfBwBF3Ecw7sNUxNhpMzsyWsFoMfxcirMtSskS6bkCJn6VcJ",
  "key5": "55JztgbE1WcRMExsns42YopSQtnwjcjANTPDrAQwewk8FZvb3snU5jacz1vHMM6T5i32gue536WqxaJF3rhWm7wJ",
  "key6": "2uJ7rRWUCGkAS24mZuPS7gKo9YC6f7Sws6qfqJwGJdw9s3KBhWN8GgkhXS3s4Ga49ZEJWkw9ANDZ2yXxwtLS4FHU",
  "key7": "3bPyetmTCJkf1suvEhtnzj8cykFGgAPmFMY4hBuJ3XPTCYrhvmdhQDSdQaaNvMgPp5KCsJMUQ2oYDjWZnUuxH3jx",
  "key8": "4XwsyGUW8Q7m7vYQgSukwDjrm5j8t2RfV3fxtZT1dxTkgZD5QBWU78PDg7bMTYZ748jdKtqLGfyd4RSrhmkP5gx6",
  "key9": "4cFoovtgoNfJF6Z8MhighGyFhre7vN6MgtbZvqqdSPXH7y5TEQ53yhozVxyWmVmKLZTdm3hjBvHm4NAp13Mu81bZ",
  "key10": "3bHjjDJAPt7THf8wYPwv3QW95N63fDpUFaRu3nnWh4FcWJrwD8YW34nSUE5HdDDSTVpAM8kvQpTckDwSAzPJmjK1",
  "key11": "4GHsJ12utH2TScjczj8XfM7GXr8DwEG88NnhFCCk9d5gmj1MDWRb7A3XdvQECnb7P2GS6J6DKJz9Z1DKxgBPJjGT",
  "key12": "Ak9rDrWANDNXwrFzWzjjnzXoUUVLSotPvevn4vvgGLt1yWwymU3CJJYjTTuggmU4VCe1aBuPZeNZUphBMFoAor7",
  "key13": "3TbTCtch2zuJGnPRq91AMMMYrhkJ6FMXdXDBHw14pmcPiRpt9a5cam7G9DrcMB2zWGK1BdV7GhVnW45VVrGQg3Gu",
  "key14": "4eWucrSABUZAafpdrdh2coJLzWgw4Ug45yY9x8B1djTNSzLszZEnYbfdjwz1mdxn3RELnMeGxcEBeC4z2FgWoJD",
  "key15": "5K5JC4yoHRia7aN9kFYNXwc2buZDuzpw1CWJMQNDGxxXrqkS6qJeDdaDz5Bxw3TFnGB1YRCBxfcewTk4d1r3qUcE",
  "key16": "2NBpowrhcAi8dm92jG6aiAWbzWZQNjY5kdZQSED5WuWaSgD2yfvP8BS92QNBQaVPmWiSmStKsQbDyfhzTrJTM5zQ",
  "key17": "2b4Y66Pdv7VLmMGTYZqZhQjbRzr74bFBLJfyWVeBjYkE6zr596zEFRfC5tKvBShHySu9qinfL42t8gk255qenbMT",
  "key18": "4xWLyHZVcNbJNcJadt7cqPWqqqGFQVqyVwL8XyRi92c7gZbSmDgpMNy8TmGRmMFBXGMB3PdkdFrXGqAMaV6i9Xq",
  "key19": "4hqCT5mMMC8DUgZsqnyvep9UWFJjUvg1iRJiZtxajcbeWFhuZCAonFCUjRWWqCxc2SHVmSQ9NpBD7ft3H9zCwgVz",
  "key20": "2MiFr8Fn8YgydbPQXjz9F3Vqwo1L2HKrpvuVnDK7C3mRM7cdrMzGYkrFfEsd362rLK9q7r58FnZhHPrTh7Y1mtFv",
  "key21": "3BcZ9bg8QGVYoTWpDHaHX8NVsrbVtPfXcRwR6sbCNjjbrAPcQkEKMtKSoXh8ZZTK55iwHvTN3WWPXhQUXKx8PiNs",
  "key22": "52UdcqMoPGn7zPSDMXWWKUFpYKHnDWbrTzY7yyEAFNhMFb3dca75XcidRt1q83rGPqAY43mRRfN2TvH6gU1k1QBg",
  "key23": "WUnCAFAUi2G6USEMxdR3fqxqUVSgNM8s9gBZvKsz5wkD3rP1mB3422aFeeEQvFRKxHMtyVnHas2UB1aePYJfrAX",
  "key24": "56rdBbD1JaDeJdmm6p7DEqC1hz4iDxoR4h1uRwg3D2LkYxxanCzvX8f4B4g59YetsywmHx9PWq1CQb5crg68DxQM",
  "key25": "21AcptUrc9q97qvKBs9fLuoSsxESLDiTFAJZthDJK31Wx8wcBMYn6BYotmGdFT3Mw97HZSirZbcR4xPkbzmXisn4",
  "key26": "5EL1hMWU4qrTJmGMtEP4PEzmbeSjtMoMYQALs8YUA7uBHTPhqxXHDbhBAtEmkqeyniVhCgzQRvyMvEzQxmbDbotC",
  "key27": "5nYRxVp69QL4LydtS26pZqbDF2479H2shWk59fEHvmMFTcZjkJznh39zyKAsZW9Y7qwZidkXhNRNTNx3BF6EV5fP",
  "key28": "w4JvRBUQkg3yJxjrX4rirsdhf4wN9JesPJoeAvys4gSDnpySXAABJHDdnz7VR6fb9tfuUPjFohbXVWAK4PRqczU",
  "key29": "Uv9adRVxFqrCb6aiyWEeZArH2yUbADmALyiZ6PE239VBVH6HgZeD6eGLxGPyxLMknx9XcAStFffxAtWE6Q6KEdq",
  "key30": "5YCJz8RYyLDtXHB8XWz3o7bvzGJBviDnpfYzJHLuVdx6EkzAkPtBRWcWwWDYpja5rEpVqHyvJspTnGkeMsPAAW2g",
  "key31": "124AyxEK5nv6nQzxrMiponv1Ho6okRpagSfprorUqiPKPvGzFcrAP9roFzZPgjzBidZxTHXdQX3VbtfJQe2LjRAj",
  "key32": "yB1MwomkoVA2wFnNqpoBBhjbV3vMWqdsTBeGBRNrruKhSPfrVTbV9jkAfCHy4WNR1pG5o55B562KoU7coLXSNn9",
  "key33": "2W59U5yYftYvsSsEeMUpdP5MpdoxKLk84RbEVNaKy2zCgy1vXz4kyYC3iAxDhsoWZZMJzoZxj7a5ZSwtuPU5gg2E",
  "key34": "5zDABs592g5Z31TzWmm98UiekRq2bQ9oszGjwrUPaqrysKxUeLQCt4VhygKwFnDyziAqSMcgWpXS5tNZ51qqKb3b",
  "key35": "3tSiNr7iUAdUyvQkonwo8ayP1ZLRNjg6uwZgwXkgfzPeVGgaKD5yuT2uTWGkSAQfRNhoUETQWZUTn5bbY1cpBQ8F",
  "key36": "2xgM4CFvGddwaAFqdPHVDfk7wgaXGrg6cFB1BnHHLwpjFknJPcqvF9FAkJGJjjc5RPTjfWPRUQ2BovCeEwyGBHfc",
  "key37": "4DndT2VZQk3cJX2dej4pyUEUqhkwAy97maNiroQV5w7cZ5z9nNGPzwb2aQkTLyeGVfwd4te1KMs2diYtAqqsqinQ"
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
