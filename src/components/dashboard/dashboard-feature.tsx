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
    "2RFV36Hv56JC96kycEbHZGQxi1LDJVSzahb7A544GJCaq4Jcyc3zmLmJ8njqsfrkH3kPTPFANXgsiCKqZtvi3diy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62W8KC855hczUT4sf971rnkLWionVhVXV7Ws8YsUHzjw1ySsp3f4Tc3zdppEh1nCb9u6GEfcfmQHkeVapkF5z1rV",
  "key1": "noBPusj68H5tQVo5D6wxCx9wAVZzQzp85Jie8w2CW9gfT7soDdiDVEd6c5Q7iJt7pDGtjMiAmxsTw99RQPy6KdA",
  "key2": "2L7KHbRTN4Gor9dnKS1HiGeLbt3vrtCELC5H5K3frVRbQGsm6FAZxQpx9HhTdLDb2ZSUFez5brLGAcyBHi3HyXTU",
  "key3": "54tPBcR7kesTHFPDAvMPvVEZxXLTWfkXwVa9Bi5Axja653MbjKDWBHeEUKRmdEtQxiKc7tu5zbqHxACeCQFjM3Ct",
  "key4": "4kpTmqpeT8gDQB42mQazyyD6tzELxVdF1udjPh8b3DFLB3n83aYQ9WDWamedY6mc2yLcy4SAVoVKi8kJ1v1qehv3",
  "key5": "5r8s5bKkPfZqHkMhL9uCY1xSrPdAZTvtM4QoKzJMy5DrcMzNo9T1f2KL7Kaoms9YZkqEQcjH9yLDAfDcnUR8TYJ6",
  "key6": "4yKxBhXPLL6XoBunRsL9MhDGB6waUYt7rBBYuA1gB5eeMXFYQKtF9jpJPus9yWh8WU2sARnV2MNpnYN56tgsQyas",
  "key7": "2ofLmfAWnqkT58MdrP4HGCMfHg33yBbCejasfoiPrbrG8DshxZcu8XsBvcqjgaiRPQ2AMrCp8hV33r5VjY8GKBJP",
  "key8": "49qZR96YNbVZynp9tKtqXkYtgL4ApG1TYf34WyUCy5mLrMrgLT2WNJJ6WncunQL9TKDqbYFDEEhcmyBqRx5Yj5h9",
  "key9": "3uPvw5p8U5BwMPakUk1RqGHqx9fNXQRhuJKym6s7tbsC8z7edAq65G9C88Dc2Uo7X4KZQYGKpccQgebFRrwUckty",
  "key10": "2cqrLzbYbdSdyCUyP5gJTZfSDdVkb7FAgbSk9vKEqAUDnVMoDTk4ra1uh9Qe8smGHnPsFfktAcw6RRLsSagUnQWd",
  "key11": "o2WHJ3WKiUYkRW7hMUc7grLandfGvFKHsc8qaYMGcRqbxFgrFRwAavv8FN28ihFR9uodcWsU12xbpoCiWqFtDWc",
  "key12": "35v8HMVvuPdWfE231eMZwGan461VC7gPSo1TyYFW6Up3vtSNcKVjqTuoB9vgkcaNZecGmpfFZZbmS41FrMvdtNY6",
  "key13": "4w86GjjTRe2WDiJfqBB7zRBM5p3KbGw7WEYFbqdwQzQhHDxAYp92XCB7V6oQ511vtWHkp57ESFqDD9TLg6ZSuu2j",
  "key14": "5mjNXZQSzJ6U9ySRRNfFSTDFA1d6p9z8WMXQUTeR9dSksJKvKWwcA3sEHaV2VRPsvLr7KU9cYnaZPALWMpE42kBo",
  "key15": "4H1cZxxbjL17kyhPFq2XfUvTCoMyoUDSwmeWu6PPWjpye2dP3ktAxg2gxrm5KbQoVXLsiQajfifCFjZckBc7J2jo",
  "key16": "5vGb6V9kHW4NLNfT3mfAFQbvxxyw4YwRRhtzWsgUSt2YFj8MydCUF6zWLdcxZ5dZb2VQpCGv6dgbKD6k4rQkJ1n1",
  "key17": "MNCxAtKbCke1Zg8PAAV2e5yvuVZE4TfUMBRQ32a91NvUg517agLyYcJ4GPGmPZha8dptgidr6YtZgRSk4GaomTt",
  "key18": "2ABTFHsLbB8mTuXWU5RJBCn69Hcwo64416NH152ZcoAQpAvNETaTA5wxtnjDtRPapxRxBQq9pu3qdHtkT3SHHzAm",
  "key19": "5N2qWXJ6GLDHVwXjzP8vkcXMzYiYnvdvJA97fcsst72Z1Y9ko8LuBXv7iytm7LmL8FpEdsotGkZdGc6dtMV6bnJ7",
  "key20": "2rHrtiZMaQa5VjsYfo8AgHVE29X9zSpwY8BfeBZvtRuP2CRAtstZDBPjDpt7LzRgBbNrmeiU1DAGdu4Cte2x925Z",
  "key21": "37RDzWE64vWnYgxNmq82PM5parhBHpbKiyW1khajbDNJPJmvGH337d9qNTwcw2TgzReRgRs6aTsudNKhF7kAzoot",
  "key22": "3fuGE5JeE4Hkq8qpeRaHptE7eyUGm8GyezxLmMZeJ9n7bJXPr9JueVNEbH9SBE5HfqXCDTWYKyK5vzmdmArjU7q1",
  "key23": "2Xuf7kxDfPj9AeV4kkhzG4EqA4XNfkrVJdbaBgNCJwrhjrdyb22EcN4MiARmCYfNGHkuw5VNH1virsbC8yjKfjKA",
  "key24": "UxcJ53xJ9tRbwNTAw7zyiaMnxUUczRgZsha8uWCXvhEA6FXWB7xzokE9HeynqfTkbqK7F1aCMTCwfiExtY33qQT",
  "key25": "5eAAMAW6NRfrXcPpqLJYEFXJBuo39B5eZFSTm77agTcLVYgN1K4ECeNycKFJeRR43GHvTnkCgV1BDHtbY6midUxL",
  "key26": "UrNEhBhbgiMy1a7CQ5BFhiDbU9ToV4XQXw4nKU7bWMuG7uCXxEpfts7obAa7gFvjksqdKkD8mi1rXYqjGBR5xcR"
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
