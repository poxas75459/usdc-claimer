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
    "5fyyqfokCDQnhszmss2SnSLw2uNmsDyhmD22EJZYGyi8mUkTvNJ51cuWzhrAD5w8vkeMmMFdjATEeyk6UzBbiZRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3if1uNnvhxr81KH4TUWtp19a166Sz2ETZr4z8rzL8hdGyYY2eFQV9pwADAn81aBWdPQnAQH9RXRQFkK7iYbS2GW6",
  "key1": "5yQ2SvcVuMj1J2kUPjmD84uG5GPtVB6t1a6WVYvrgB3bbhFXxKbHWRjcZyRDWqqmnpPkmcPkj3Jh6CLzRgu7Tpj5",
  "key2": "4YbhjuQWX9pujE5NseA1k4bdBcKeEZ2F7uz9rTqaJnem5Qf8RXoruzN28UFdHyS38gSyLHURTpupkAeRLFjbXu27",
  "key3": "4NzJgtQVGyCVZaE8r4RN7RUaFUvUyDhiVfmQsuxYDyN4c7b7i2q4dtkvr6fLSfhRV355PNUWHeN7hRmpCSPiGQjz",
  "key4": "j2qAc4KMUrZqwG4c7i9tcd7D1b9PKQFz7twx4r63wKhRcashJ2w2pVQdT4brdHJywvyB8zZ8KEWwyN8GVuwbq5L",
  "key5": "4KuuYAEsMD2sKZuqYqQ9awAVwPhjdQVViTKDCZd2fpWmmB5eGQpeQxV4YYDXeKExBcCbBex6T7ju4cLUvTCywSDw",
  "key6": "5BA4aBERG9rrWmXuHV9Gpy9eDPbZKSvbPi4ZqcvEL59S4D48tUHgnoXo3tnrLha2fM8zd1qx1ywYmH8jwpAVW1eM",
  "key7": "4YE13Pn6keda5xyrnqwL8Pyzg2kYnmVjy3Kq6vtn4c1ZoYaon8BNDprxexHBcCwGXZUFBLB8x1YEmA2jTAdSeX6b",
  "key8": "2kpdQBLWPo4cYY2KE3GqKX34Z83sKx56MAR9AWqpNqTffwaB4f7JAt3ZgqKq1RzWELYCB3Mke3uBe1BVHtKahJqY",
  "key9": "638U3o69aBpB49vth5BUSeu1Fnk5TAWCA1WQeLVL1azK8VTkitMXqnG7iJHKGjevTUr6tuxq9efVzmGLGHwNP67t",
  "key10": "4VySRjb5LfqKmUT6RrR8FZfkZtD1doKLtdWpTUSMmYvnv8tvRYEu8GxBb69JjtKKMCpsq8DZb7yuU6LEujJJsx8H",
  "key11": "4JJQBqCucyzC7SXMPhVHnCMTbFjXHMq56n3dcN8ekGFKWp9wfL1ZNb2WMkrFTAJppH2SArWWk8RwFBBa9s56Dq3",
  "key12": "3SYK4Z43edEipNkoiYcqa5m5jTaSYrpy1d5hX2SgVXFaM9QLtYn98Xnb1H8wvxTm2W7vzsMT3Lc3aYdi7fTCxP2v",
  "key13": "3kQ7dZWnEyRjgWDqyD3cJwgodWNngsMkAGb4gTMqwWgojvW5ESyMaqWKAJhcLkHdBYByW3KhydXMGmuF8DoqTdG8",
  "key14": "2PxK8275amrZhetUCeP8kWfXLD8BjtAC6Xg5Bw6JdNQfgC2mFS3Wjh8cYgsgQxHgHoQUCgUYqA6cCUMh5fhtjcBt",
  "key15": "3V3q8zf6cvR5tXcXiyNWaDnmJqbJqZr787CFu3txj8ac7KamQmF39758QKRuvtCqC3ravz5hrxdecPgKhmGw31aE",
  "key16": "ex5Q1mAhrxtzCGZaJcjwhNURxn1B6MFmhAvz8awLiNiCR6KmWgDVncqRdRW3Rrw2rXTBvVs9Za31zz456Vd1Ci1",
  "key17": "53DRwEdHc3VTwF338Mcoko2TeSuYjEcsS5xxo9MaNbhUFSpBjmFpFeJf8zZeqo9KvcLNrhcVWjhgQ2uScJXja3gT",
  "key18": "fKC8W7tGr2Q8aAcXMNTBFP9npvUioEGxFym7iCBQEvUisaw6AsfjoLsv1M4xg5Kyxzibns7dYfqPThSiYw5JrXU",
  "key19": "7nzFxBewxYHvLS85gVrLLxqrbgdfquw5ALWGg1HDqzX2DYHGR2bHbs9L2wBA4QqqqbHhHG1Fx19cnPMfNc2M2Cy",
  "key20": "zKnyX7dUsFM8hpT27wYaeoN45pgx1FzfDyyzJ6JaCmzyCj4Scqcb3KuEvxDCx2nCKq7j2KUfarM2qHroqJ6PFQ9",
  "key21": "2HY5bVa6mrStf7bwJGfUrHmKNsRBXzdbGmJ5Un3NZTvdf61KR35vnDnSqpqw5PqQaRAnoJp4kV4BkAuGKaBimABL",
  "key22": "47BfEXjUdm32igcTatsmTWyMHRTjUf77Rh4w2wKuAzcR3qvCETfWJoMaJjaBC4v8HiahhJ2MNXY6sgTYFDNMRPFm",
  "key23": "4PxCTVzY6szAsrp4oQMrWAnGeKdPCpCNX6xzNpC5LFEJ4srmdH9PESRDKkPEvnE1QhvgEJxg3CcgcyqMPzugiTQC",
  "key24": "41cDeJ1sLLB9JJDyK7BzNGw6m8NzXkFwJSX4WwiLksZyaQTYPm76zFDUZ6jvuLooMo2ujFeCTEDdZR7oKfKbD3RE"
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
