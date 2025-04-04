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
    "2WaWRciRRye2yKqSZPDUfBHJAUEkGUNe3qjQqHLtPqpJjJwrLyLF424LtPgVohLjEkL9yuAnT79yGnU2tjpSXA4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLKTZAmXQ47JDvDAdnQBttPyfaCqMQ8taoYMwbhR4HE6moBZJ2aYd2jq2dQDr4ew2SyCAhFpSeM7D3eGiCrmqZM",
  "key1": "HDj2rUXuZMCzjL2KXXMNS3k6jYsC7PmNUGxmeVHmjAEingsNzDiTVGvmRcnZ28ErbbUongbYXYHDpkaDZmYreMd",
  "key2": "2RhWg51YbXGSHvFYrZQURe2NhhSs2RLBChLHCMm2mDnnhqYqerwbgSRSxnNwViwf3hz4EQ3ce8h1rTLCERbnmAau",
  "key3": "31A3saBpGYrFjUgj1SB3P8JB6fVVvLG9tTtHifr1beoYvYLKVT3WFeqih9LuF83UqUFYsR2TwibUhdxmy9dFosHd",
  "key4": "3Gq71DQaPKkcJxzohXZLnqGZwWazbdyEkpdGi3TcB7fyyQB6G9ZPLrVacmzmtjfiX3XCtU4eZv3rBpHVEAEQxqT5",
  "key5": "mciwttKPmjQzCsZbEn3FqY6moGDxcLoAr4HukTF5eJ8ytYjRyiRawKb5VTrWCd2wdYrJJkW2TkgEz9e1pnkzcw4",
  "key6": "2qaNtvxs6mFct1trbR6fpfzbvShNtnDbo2d8qAchPsneqz8PPFQaYtBXC9jfphLK3a8xbVHRSxE6MvwGKjfV77ME",
  "key7": "4Hz9y9nfqr3LQAH2Ydnza4nTiNrrrzGYVnmT6PeQYUxQzPVe5PRQRMDSxVqmsdXrGuiRSTS1um2d7JP1DJKgQY7q",
  "key8": "3uQg8BA1K8kEXcDQqQANM294tgfi14F1QxCq8DaKekyREojktXCo2UAfnqx5bQTc7Rrbfng7UqdtW82pw7XekAe4",
  "key9": "2ZxLpRGJYANRE2x3pzLCX6QA84nSpy1P7gbuNumPAhjvgJRkkLfjFFjymXA9AnxKXtDD6MZEEVmiZHynE3fkYr6Y",
  "key10": "4Xd2kQqch22nTEA2usmDbYsa9CgjbmBdm3v7FKS4aBuz8HsiZkW6cRfzq74kjq1448h2ywhN51HNhXbnSr8aJbqC",
  "key11": "4J9DbQQqQBQZgFjXGTpu2SFeFPrVGrbPUF7PXeubqCchtHy9qvuwdxfoQniyZZXEp7hPxL8E93PrcDgKEvdTZiMV",
  "key12": "5kxX5BuxGuaGvJzUL2c4z585hDM2wjGVX5Fp4mMjWnk3sekygZwXWWByW3XeyY4JXkiYsjs3LA9g6GwCN3JdH5ab",
  "key13": "221YrXyADqGjcqjkMQEHsM3K9u76mQwPD8s7A7WJhAdMB4EDYqLYUjqGtbSmzp8zodcuGYriPsYXyZkcdv6kRsQK",
  "key14": "KV3GWoEcUXHphXrJEfs7uo8nXLxN8jVzEVXmL5x5ywXCTpnS85NYXUFf6ooisrpagELuZrhkNxWEFNiyJLt6XbZ",
  "key15": "tojeaxMxpR2DUXsLuiNXeicc1YMjdMaAP91ycTx3844pVmECErdjs2ZxXkELyznFQ3DRqHKzL8LTHHzJgj3wBPs",
  "key16": "44ESCcP9mHMUEXNY9zDQG9uQ6nW5B1br4GVjcJCCiihVNxzFmnNvZ1RgKCYSEbX7bBw4YJ2bk1kAVhznH2DyxwUQ",
  "key17": "aoSk6xfieiL6wZYxUH5vo2pMtjWCbS9Joq6DkQEfnRMi2jNqT9MLcH5jjNzKbPkYr354EhtTN93qRaA9Hwqb67B",
  "key18": "2Xqu3CLYPPkiyzLXU3qS2winAmefuwdaq4yFQm1ytTevJn2sDjoCdgfaqEkvNSXSnbqvG9eMzDU6EEGtGXJGQ7Dw",
  "key19": "5gucSBiVmGBvjNKKRxiPsirc3UwZYNoNiNs8hPC2nbB7gy3UieL2rZA7wVvU2bt3hqKZw7ZJjENasNXQsxKicrvq",
  "key20": "26iNcjmeHCwdWGNpf3s2gSDfMG1fs5vuN83up6tJyZpUtugPfNwPpMYv1srCvkDwnRSN9MtpHWbgNNyJ9qw1Dj3p",
  "key21": "474cxoXAxztw64MxhQSarhEsv9g4GDxtXvvPzDv7hE2z3HSeb1HcToL9GZvjPAfbiNcwKQkNWpggiP3ifkw1W87Z",
  "key22": "4rTPxFreZUMoiqFyBnQzGhKKjNxBLHzXPgKCravy3QcH1rDsx1ospLiYq2A4khujVhxcRmnq9X6cCjndCe8tdUho",
  "key23": "385U7vUGoWeLium1Dve6BnhS493VK7meHu4uDZ5jKd8KZJFDnvHe5mRBkvK7EEJSTEq3YrF4fpsZth8qMveTjxEQ",
  "key24": "5Hh7ZfGHmi3o2P7bpDDCPJ3XgHG8ExsAkjutbMxAY2U3gLfQyzBPmxXrec2FxBjFjHU5TyMJCJwhbw6sZHJYzmXu"
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
