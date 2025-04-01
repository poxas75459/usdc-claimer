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
    "5UKz7QZM4LtBjmc6vXHrEziU3gisPaqjr43t57HkK5nPNFunzZoJZFwqzx2AtHu4V5RqmL81sLQdBytGJ64wTGty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZCmHVC64fxF4GxDR9wDqicdQApE9tQUEMDJRjrjbEFvh4uL8VzPjCPwGzAqcsJJNfiArrs7YGtYu7xCNupMqVJV",
  "key1": "3WykTdiEUKLVLzX7ePuQP8D6Mdv4KrnBGfyP8RK2iYwvCVSh49c5wmDA38JwSkoNSjip8CEgwi2MkeGr9Pqym8pT",
  "key2": "a9qQfDzowr3yBJdYDwttjRABAXUBboB9jHw1EqUzXJ6qVPoEKcWgcrbud5Ba1MqQX3ETNRFFDP1Vzsqzzfr7LrG",
  "key3": "617GhbcCHgUmbKUmA3FtSSDxcq59E4jqhwCoDHEJKUYDy2dx7coidf2jNox8ZAZseezn9DS2z1wQQdesE6iJMpvX",
  "key4": "4b4Meh8zDesr7yUHksCsHHr5tq9MFciWZea4ia5Mi8GmZx7Lo9tT6F4b4bdk1qsAQ54R9y5t2a98y7rtCUMDRFUv",
  "key5": "25WM1tGgEjxZvaPmh4vb3N41KEunduUG3dLu4NWgtE8XjrPiNkYn2UrVDqyB456QweesSKFW47ppqJRRRQWiD2vT",
  "key6": "5z9ryjN91qVXEAKRCDgip7uzXxXuLWWMXHRiSvBsNdji3VHp7NU2JhZpq3G9JYgy4uxQMrNooLaKEimytofKnT2G",
  "key7": "4JnjQT5hJR39HWbdw9TB85KFSifFsVBphYcFfAeNtKTEpMXZVCPKLevupXo5AntH9PmRgE9ShqewzfRqKZfxvyi5",
  "key8": "3pG3UL6h1DiQSn6ez4EnQdark7x2CNiphkuRtDsm591nZzfkyzJzC2ndJpaFPCUD9RtsyXazM2Nkg7SrRjVV58JN",
  "key9": "3cqvioYVz7SY1Tkz1EaB4wqf291rFmR7ZhuhVi3n6qwvfCi9BxH7j8V4gmYtt2itdT8hJEWcTjrpYDskWfuz7nWc",
  "key10": "myMj4ds3GPoVYHyAs4cFDWCHuaUQ3D6rQXq9gSu7Rgpuo4msTnHG111xFRYSyh4a6cSDgDC2VUe7ttQUXENgZLt",
  "key11": "4aeJ5SzG1dRysWndCjJn68rbCabyRvNV4C3zj2bbopS4wv5awsvfunaXEJaFEQbRcpqmtSkgn6utry1JpKzXzE26",
  "key12": "3juHnxV4tS4m7CzpHjGWL1k3ADiQ7y1aEcU7c988f9ywciZBLFdBGHb4dSRXgbpVNJeK7SgnWKD9c3J68GMFCe9v",
  "key13": "4tctS8Byb4zAssFL15pZYw36UZPUkLxXRJvAt4iycLrKQHwS7AN2RgC6T27W7kQuQYwGkNKQxmek8NAKeEBjh7vu",
  "key14": "27ir4zFhaKe2hQmC3VzwtTAWzaRmkHGxxY8HNh5mDEA71pvAEaET29kHZjxGPv5xGxXFvEAunbMNzUXE6SnEQHH7",
  "key15": "Dg5Q3kJqD8YtP7c3VbMHzvg9B7wEMhxvvuouvpgM19mAqfVTHrMEa2xGYJrVC6AWm3mUGERGYA9ZNQBNouY8Xxt",
  "key16": "53cjuLchFFqUG3a7dYrih3RxSSyd79GaB9GNjGoqHk9UWmw3mbLoiBGF4EUZTfDiREriSimNQ1YPAhza7fPyeNxm",
  "key17": "2mztaHT4dSRSkZTBKWQxsFiCHZ6cDTE5Wu43k25kWHqRcbjv2Y5eaiRGbEaf9ryyobvbhUnkb8PkhQPWyJ5KCrmy",
  "key18": "4wLuJnWN371GDMesTqqZgyyUzmm4LZ6N3o6PuPitbVewEdJYiXcqMFWibrtxV57h2oCcYdH1gKzpyN9SERtXhHgc",
  "key19": "3RPPPCAn1objeB9mhMrppJSGM7FU6vMz9ZvPNYam3awHcP4KsCaUbwZgXvTS8THg4t3gwPu5sZGLCfukGS4hJG43",
  "key20": "4kj7M2uLxwPi6AUH4y8z7pVhpLPJTLxLB8NCvi1PGkXcUJ7yFksweffkecrQSRuWmaP9sCPz3B9rMXxCCDQgiNja",
  "key21": "2d8xKKydCn12KQLSHEH4uwi9fnHGn5Wqx9o91Qp3WkfWC1YWTjLGGYsghJvbYmEPDvBfiAsDgJc1Z85HgmixeSTs",
  "key22": "iCqXJk6QfYGb3xcxe3Qt4nCvLXmHZVSvoDjwHHA8P6BRPHTXEF1HB7RD8F3LFof1H6syys5kBCxE5vVDNvzwbWH",
  "key23": "njXnjrZwKhQsq6qpqrRQe5fdFcDt14RRv7CXw62uQ1TKA3QNGEDttLoEgogjooankbCGc2pFH5NqqFcymY6tydE",
  "key24": "3TAa3fzkVbJL6Y7YiWEgHfFxPYV5MGWu3NfC6Zihf31ArEWqWeABWYFNmDJXy652vTuDb5gWmrewLb6ABzSZnJcd",
  "key25": "4iRSV8UcCPgVYQyspXSJFsPUjheKuycjKLT63hhPFoXEjQ1RswuvDpzU9dDDZcewiJxUVQPtQV6GCTewjTM1UjSv",
  "key26": "561kgD9ehNSXpWwn1pp7joZzd7qnFKcBhjDkCrS2g5SpL4G9kKfw5K6WMGVgpCC7GTNrJRt9cmvCMkyt8rnEsefL",
  "key27": "3tVRw2K4XffFHP5C1ry8zour2WT7CXNEYQUPTUi7cUjCDpU7JzxrCwj9kTr7nSjFShATGxMsmpoY9Qau2hKL8wzs",
  "key28": "Nc53t9XgQ8dc8puDCd5vvw8mFWwBicwxecMtGBoogcT4tiPvnvFSueX5y8sTFen1VCgichnV278W57qMUKKcVTY",
  "key29": "64sxgFWTH3PpMkxpwyZx3hpDWVQLf3uEu2PGsJyBdPgSnL4mufzywLfKN1g6cMFNFXR4uk71CexZDCswXmj8GUKD",
  "key30": "3dUjAppjJXaW1MgGx5UFNKa7xbohoYR3McEA58KhVfkzub28juuq62V75uVq3yadxHwTBe6NHH4USPBAZepgFYEJ",
  "key31": "3VWCAvHjW7B48n5o5phBTi7vXgYUXwawmJWunNcHLApvWkT7xcTHnKns1RjC9UXhVmgfJttQUNhPVpHyaKhCx2dD",
  "key32": "4f4tJg72dd1RJQcLfSsvdgCo1dbUkKQTHsUJy37bL2WJtAvGr2p6gPFZVWBFr3L7NrsRvmtwa7m7yN4R4qjvy5Sf",
  "key33": "5Dp4bAtm3PHHzq7cvxzh7QbvNBf9WUgo9PgBLydDgnM3zLvHD1WxZrTsYw7n1koD3xoTZX7TT5yrVgN8pBN9X6vG",
  "key34": "5Q9rkBJtTpzn3RPvG8oANKHG4vpGqkWTuZMMna2ufmx6jNMT2t3H3gnfRSeUaXcChDMnFEJ5kztZiBiYeTLLtFXx",
  "key35": "4vMDhZZMJeV8jcn5TDQG5GNmFsuMCHA1yoFT7DGEPQ1GnScHLgaetPpdkKbrkjPwiDiBVpy87PvKp4f7hBQhZFRk",
  "key36": "2XGMUQm4naqo3FeTrckqyfNwqAHLvqfDKS9fNMVwqW6qAGC4yGwVYKhgRKZi4taNgnV1xEMyoPMgR2GJ5zuawPmx",
  "key37": "5EH7jdAZCTAm1bZ16tZoCSfETtWx1CaCS9K17JfbaWxEHvJBYNYyY22qufagyP1bt42xARP1txtFa47ZPVGXM69F",
  "key38": "2oR5rYbo5q23KQ9m6Use5vTuyNr4RbvXnTQ2e9AERFb6MUymqcnKjNbAc6Cu75Lr6fCV7v9bMG7qPzTMBfyVnqnj",
  "key39": "5QLqcprE2QsowETbP2hhqNCmcru7uLY2voxePPtcBs7uMcaXnTAGi4DSoDxHFDtUHsTSrJx8wZXRTiLESqAfCkvp",
  "key40": "3Ki287BGQJB5UqLmGXbt7HeQkswYtJFVwJHfzC9beBVUAnqrpcNC66Wf8vEtwtzjATgPfq9iTrMvm1G3obi8DEK2",
  "key41": "3oY3h1HxEqr2bFJmcNZySLHr4sx4XLagc89EVL5LBS2sPBe6vVPLYc91541EaE9PNvyvtQpvRDNZjqEDYs7yUJ36",
  "key42": "3PPB5B3APgZr4zwSsZv2FMzyzDrGGuBZvccJspwcJN2zXgLdBmukopjccf6MamsxrXfbBcJwLj1h5UQUiAduNZTe",
  "key43": "29r3Hh7N44iLuA2eLZxqUzfn7rcqcbrcHXad3rXrr5ZVmTh2RBhHsYXLMqaBTJUQtuyxL8H1JCMUZ9JxKGLPVkZu",
  "key44": "4oAhXCwYUL4tPPj8QQRUbdthGAbVw83H4oRsNTXcKLK2YvSNb59keaFiUDB45H9qnHBy9jM9D85rYNteg5jN7MVM",
  "key45": "2NVpv1FyPmdwSovqbJsv2KQWFtKZdR3oLDiWCoUhMxrpvVmC2Gwy2wBFAb8QbUPD2y2pbbgSZvgLNdFGM1VHEzaG"
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
