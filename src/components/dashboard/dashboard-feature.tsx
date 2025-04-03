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
    "5vCXLggWEaxYrnSnRNk77xDe33H7xRL9taUwDhg75hzvug7nDdqzM4Zmc59fzoRd9FQ8SNxg9cj2ni4gSFriVDbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mGpLTgLwMcDwibXU17j391ZEGy7YuvS55E3mq1DNkEZkBXGnvi4r1JU2Byz7wedL4TVWzTmBkmHBEkWN1nMzf9",
  "key1": "632aBTxJQhBCZ9L56k11VtqzHiQhFj33Ptg597yLqajG9fJhpHXHE7nLsXcXErjDvGp5znSzJHnT7DsWh8mkRDzz",
  "key2": "D9CrFGeV9qmV5aZd9xDLkddQaKYHYut9G6Zky6bDgytvNJXGFp1h7ePr8U9db4zDoqE2SkkYSCPFoa7mgcAznAJ",
  "key3": "3G7vyZgNzMx7j8xM2uw3oFpfvvQ1AB6nt9GgzZQLNCnAebprtj9tkX39R3cgVoVQ5EVasSSTA6mcyrgLhAdKc6wj",
  "key4": "5JcED3ZSBtNsZgsE6RN2ax6gXHpRTQZ7c1RnjU1AJ3GokfFym57cetb3rXUNUDbYr55gpkfWSqPfQqMC9otm9av2",
  "key5": "TkDKUx16CJtKTwH5SK78StQmeNjgk363Ewez7pbN8pM6RXtLR2gRPjfNy8XypGz6cJRuTErQyEWRqCBshoAxoSq",
  "key6": "472ckrd8q5qvsju2YEN3yQYGkD7zTixfMjF8cm63HACPD3Wfr6adA1UKovTc51TwfFmVogKc8X6JGYLs4Y4ohzAA",
  "key7": "3DRVUwqV4WLCid5UFBPecAg7gbgPeVWgxJ89Lvk6YmEKmoUyV71DXTy8aFBXSXxNLuUC4DwML8fmhe2pGw6HQdLm",
  "key8": "55th1U2Y7kodHSbof7s88yCn9VqRVqBnvUQ2resctESdc7629ZNnYJJPQU7TVCP4PpjVtiiXZegSgP2yuB4okAJU",
  "key9": "4pERGy563gEKsGtFq1eb6SJADESAM4geW6Bmvfv86MP3wsR6EGZspmpKvWppZ1SoAfYyx671yvKovZfDWNVNiEEM",
  "key10": "2H54VsxNs4K9d4MogYLc5dtZo6PfXAm2GvhdwPBn6CQjNr55DyZRx9X14YH9qUP5Szgxwxs82a59g1SiKFhrtJiM",
  "key11": "3H67EqLD24amWi25QCbwNRjPYqcgsgbyxuFr7vWEtjRTH397M1vczQW5FWYxonDSaHGjGPehRt2u4qwWxxppmBwk",
  "key12": "62skBtZWTdTmYsc4Qggefh9MHqDBB5sEjfzK8ZG1HcBm2wRE5QLc2VfEC1wgZGaq1PN2xTdWPNFRSKB4jmaFKXjc",
  "key13": "5Qzag5WN6wicErZECRdKbCPNAuwBJHTbLTxvAcpxu5qWdKpAPuhPRpTLDz8NpQxZQ19aJvsVx3aPrfKgqfd9Y3GF",
  "key14": "4sQx4QeCe73U4Us9sGraC9ZdyyNeAMWyHZz28FNxJETppnmeYiLgJMRfPw6M6Yp65ke8bxbKRjjoHbdbf1a4M5es",
  "key15": "5PA3dQfFydtAVgaZH1aoxHrazdWm348Pu1L1PGbWBVnP9wBB6mjMKfLC7qGjVJaAHA5UcdZ2KR8oVGTFEJe8mxYb",
  "key16": "271F4NY2ddw5DJ5Y9TMPCHSNe4G4bxRfEKyV1TmtXUa9sNuSRXN6PtASr7idNmeFdTtaNucH3YNCaP3C2QnZuVLL",
  "key17": "KTMjfaC8KJP2KXuje55EPPprad4BkaanpJyag26QWeoH22BYb1dBDyYvSbtSJKiMnfHXva9FqW3sr38Ehwk55Ez",
  "key18": "KXXmX7udXgZZuxBaLxQ1knNj7VqJzPFuHnv4akeyNZRZsTU7eTRzxR5hnVPPh7ZkrUxQ5dL41dTfpUwSGWWymPw",
  "key19": "3UxNsn8Vz34n6gL6JJebxezR9gjamQ6JjgXBSAmxAmbTG6dqguebfhUsWuk8PFdcA8vfyqZE7LDHBou4n2TaDNLr",
  "key20": "Ui5Jn71SAcKrsvyJys8DDd88KdU56pyqavi1XMbXKUuynUWC8zhGmbnMeJjaP6XU9SsvwWrgrgpNPPkji1ZmnZW",
  "key21": "3cd5z3Ne5pxuZsq7FqNASJ2FiX2RNKgR2rtT1cWuz87PMHsXjhtXf46h2dYA3CbfzUbmaYHcmyCBEZnFTbP6dGwT",
  "key22": "5XeJJFjSP9NAiEUzEfAqrjsqHeUoBtTEAi87Gdo4Y45qwMwXUo6kAQaP3G1iwwPpn7XpnKbTfbiXcPbyGNcHCVZN",
  "key23": "5FjqV1C7WZdVqP1ZvLaMkt47scuRFo42CxgNj96C932nKSNxzQJi7Xfc6x8RoK9hZmxDZSPWVoTJnBgb3FYHyUm2",
  "key24": "9zpVqnzSa9XJPih1HT9ZJy5FoRHaJEgcNhxessCn9gpGhzwGBYP3u4yLvPH9gBJy4eBnvBszeNpM8g5chXCDW4i",
  "key25": "3WK5atSJo2t5Xq2WEjxnezGBWHsC2hp5a1KhVaNvRa78wWzHqaCvnYq4KW6E8sFX4HidGb6s3abnGxjyzaDMyHr5",
  "key26": "2veBJhiGdJKsZLAA85dp3Zyj74ArFYRkcKRhwmrghdezMzug6HZMkWo7oQj3qZFkFujBmmYbe5rN4QnyRtKkhgw9",
  "key27": "2PHv7J12HAKgZac4rmHMufL5vjCDY5w9EtM9qj5ekhUAWL6r6qKyaULQQnzftLFpA3qchLZvMoFea2WpiiksxTHN",
  "key28": "3QzwbHceuh3wmmP4whCJpHdGoK8ei7SsN2N27PFmavwjoMRb3g63kk8yAsry2Lin2LLp6p5VUFi9FUunCiHxacfc",
  "key29": "MtYTxxEVnkiggsr6wVMZtzW91racnnhfcYgibjn2kBi6t3HVL6D9v7oQ8YR5NUX9htz7jJkek97Mg4vxdGdY5zw",
  "key30": "4qtYq3mkHWkH8aS5LX6Dp1aHsPKXoQNBPd3CePxc8rgwuUQiooyLZu4EQZLjsiZpS4oW35GRt2DMn8ZfmXjLsbZL",
  "key31": "122Mwh4uFtUUFUarrwzQGGodfN9RUFGZiXLaeoQJQ6dhdSSpkdDQm5Q7ZqpjEKiQ4J1vRqzAZxNqVKHV1cBX4MJz",
  "key32": "QPnT6koovv2TfLJqoPhh7oDD5v3zMN4SzUpek2txTje21fuw2BJ1Zsy8B7msk6HmjeK8FVNaymKpecNyTQcJLsR",
  "key33": "2d9XZ4CGT9Zv8jD3pfDcr6PQ6m12SzejV81rG3GWg41XSkCBr5ov2QjkF3UQhvxprUTRDvqjju9iuQZWnb3oQqQ4",
  "key34": "5vtLY9x1pTZ8BypmD22vwpWVqpAbaudYqhBKaLKwBKuro8KtfEL52eAQ6QUVFKHUVqptVF9KkDW6PujfYd79ZPrV",
  "key35": "Xiq5GkNw75gHc3wZuYbV5eUL4ajcVPxRjuRhKx3KKHt35MZSs7sJ6VusR96xgnrp3FCZNZLEL5UphdLqUNDe2yT",
  "key36": "3aUAv33dSgV4LA4RT3s2NCCjFFRRAAEZRAh8CBZaV9urP63BApK9gU4zvrJbmYujkzxwBn4FvxDHv3MiAPnZvvhu"
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
