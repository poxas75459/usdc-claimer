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
    "3WR6izPpcswEDB79Mc8tMU4mikd5b2MkVGcuphP5JU7ZNF4rLHwqGaF3NUSzPnMNxM75hrpNWeCmnTz5KoB6ApXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPBvvk7XKX1PE7Trh5CCDEZRj1gygXVZqJ1tt2seqVghx4hZqsNPYnGa17CLQQiAGm21fMJKw8REHw5c4qghQVk",
  "key1": "dSSmFWTNotpSejttBVMZNigEs9XetXngRys6qggTn1rKiTyvwFG9mgKPDwnXyGn8bZiYFxFU6fUN9jacRfRf2ep",
  "key2": "5MThz4aEjBNjQvGqBb23gDqYSfcowxD6i6gChLyywPnTSLGX1ycKkWMCbGU3Dkfo6YtgjtLCcr2J7t4UXWzyPRbF",
  "key3": "2igNgSHZE8DtoJBenLu9FKVyB21BWttMtwHY5idDMpRvHb3DhfzCXKKLw9PgFUVtnnaQ3uxk7WY5Bmaq7NaDBidt",
  "key4": "2smdkYNeq1rN7auc32jLcNztWwiEPhwY3Vw8qBU5WnQ2v3iKPw14HfSq4LGG9r5RD51aixucvxtPf8FzbwaowZcD",
  "key5": "5ZiHknfaV3hB7H24KazFiVXDaSUX3FeYmQPpdbqSc4eaxvH5p7pgbmMteKz2mmoFFe2Sgw3JPpVNXAwEdAhSKxHR",
  "key6": "8RbRe7GTepgAnkot7qmPE6ec4wFVs7bdtYD8pDaKaD47CBAWaLJ5UkAGtiNeXYaThBWCEQRJ6XH9CuBHuu5rtav",
  "key7": "N94pDNEBetWDj2meS8TpT4xQS6FHeSE4UUfWmRsNvmHAb6ZWfZuitsJpep8aCfGqVgi2uwkhYvWd2NvEQ24regU",
  "key8": "3quqP8bQY3ouQtfCUqFqjWj2nAU1J9usbo4GCWKozCeavF2wyUbfaZUhpDv35AEironu1m8eBQtUU5NTvjNpNopH",
  "key9": "3w3j5V1PTi3jsKvbLkxPWZbYVmnZ7pSKMksRWmi9GyhyVtcLxeN5kxopqcvVBYMb54MVy5wnq6CcbCqMF8QEgVrh",
  "key10": "3jpKcAfBtwMTn7K5s3BbHBaxvGSeVxcZ1TEPA74f2zzaicNvBLAieyPAt3qL3Vy4kTKwczU3L2RZnGaT9Q6BS4SA",
  "key11": "45JBR3TYB99q8NyoGJ3VUTViQbAvsdoeUnNxyVph1B1anNzypuwh3WZnh5YE4jV7TRJx7B7BtFby2QV9NkKifDzp",
  "key12": "228VUJzH66rGj7yxx9rapH6FWAn5SLaq96gp6RMJHzKV7nyTXrVWjHk1Be7gPWAQQTf3h9myjorjuxpP4wgwu8nC",
  "key13": "3oZVs3jVCAw4MmB7vNyyt1bd9e1dEZaBai81NZHq32Xcqt7ewQuMN5upZt7N4aS4369Vq2Q3nEZCvYhRSHF2rESQ",
  "key14": "5DZic6yzGcNSMkzw1p4yriaPkNbnwvDoZuz3jGUx6ofp4wrKUoJJ5JeaZpEijZ7FiPVAhejAvmaRPAjiedd3h8Xq",
  "key15": "4164gby2LRNPoXetcap4bjWpQ8VpA4kUQGWngPm9X4BF3Vwq6nyEnkJxGTwiJGfE7zFNoJCJ3XyYwRDMaLtoGyki",
  "key16": "4EzwUWAcA9aCYRB3vDHcHcxi9LpjF8w5JEkCtSuVBYb4DXi3MkHMMQyiLnKF1T7JbbQhqA9L2JT7CLaBdJJRtEHv",
  "key17": "4ZoP272oRZsUgSZvFpn6e6u28YjSoyBEHhmBj84kG3okDPK3gvDCJeaWCFk8ANp4zRLZUFKXaYob4yrYNUYqG9T8",
  "key18": "3aVHR9LpwrGZ6bBtrPDTQfkCJ3hRTb41uZwoc15DALc588hdVjmXA5r1D4DsANN1hqiYSRugNqHsRbJS7y8hn5ub",
  "key19": "3EZfx6sNZ2qWEcmaV2e3TijVDXPDkoFokLnZhzs4ZBYtcMWyqNuSj7AEphDakoMaYbxxDFGecgehNRxCMkQFWCbi",
  "key20": "5hwS6ccvrgABKaKRVyejupYMzJrnNcHqCqXMsdRMek4a6sfK61uF5xBEXUDufLAF6do7R9jRSjdevdkge4eHLtJp",
  "key21": "3iwE9G5Ss4X6GUjAYpDmCjbCHrhKXQBDswZo6G1dytCEks9XiUiX7JaiFEvN1Yy96jcqog2KrC67waUaKdQowmQW",
  "key22": "42YGnbgbf2t7GQDDDFQ8Pva4GtyWUs73XvMwKoPw1nG4qCsdW1F5UGNsfzcjRLUiGDY7E7HDEB9eSRqRYvoopjMA",
  "key23": "oAZE9hoGfZHGSgyPkBuFraLeHf999EFh5zqCoDb6GRMJxLdVnHiVn2nTR3XZePx4yDRNcJUVmcxFGUMALttHGQc",
  "key24": "3GX1ofN8CTPDYjdH2mdzpSKG3GZShRdjiK2NMDu2fKwTUzCiHYPqvYEccT3vVZnUXanpCReZhR4jx8ivwF55WBmS",
  "key25": "4aeY1GTutw3uLBH1y49CiqrFMTEuxKJXJWWGK3d3w1Hun5qKK8D9rQVgjc2QDGYDr4vb6XFcRNNf3HNDrbsoqM8A",
  "key26": "2or6Qxnm9eRfKukAiGMYvqzAUy3bbBHPwqrKewrwUjzE1zszHGrJ7JfpDhBEkbKJD9JCWNUj3GcvGiVUmHCMZ9Y1",
  "key27": "2MKRpTS5jHJxE8kPXQExbNi4NzCjKAQrwvbPzyXFe6ESVYvTSmEcb6XjcnZfujbfrEsLkvY4Jfe2YLJH8zxw43u6"
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
