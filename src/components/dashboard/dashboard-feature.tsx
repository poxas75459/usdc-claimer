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
    "5ytuocni6y4DJShp8VrBeQ6eerZVXAHxVbLnaQZBLL7THoiXiSdEaUL3cKh4U1iWwfTUx6VtP12tkU5YxmK5zuw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oSmqzA1NiF2Fkry4MywQsf5sXVgihrZNQSLhSwZSSY9nyqWEPoEs6ueDtZpwr2Kt7UHBedAXnzmopZikbR9fKNm",
  "key1": "31pdpdj4kKJ44AC4jtgNnHNqsAjtyMitC5D2sh3v25c3yeGhvJtz3ggh6Gzxad2PbYh4NjHBc62rLVMtyqjcTEvX",
  "key2": "e8saDGn4BtXvsa3KJFm3mV7zr7u9S5YRMtTV4CZmWZJ7VsXNUojssw9ntckKPnA14ke1Wt7TxVkbydF7NVYBJ9P",
  "key3": "3p4124qHbvfZWqtZs6x7r4akP6eWU8cTniw4GfoKbc3G3Sc4AcepNkBkfUAfBAHKfosaeLWVjcbm543xMGgDWz2h",
  "key4": "2s7kLNKw8biiMTb3wFWQw3kuk8JG5uKm4TRbqAPpAwHa3SEgfBa8XxR99NSibV2pR6nHpsC5t6BukjS6CLQgUA1d",
  "key5": "31LHP2Wip8sjPu5g7xk99CU7nvebmDKGgW7BeC3JjcyKFsW15VN6GwsnLHFpTmgqnXdB1bdKXqVgb3RQ9nMWWHdK",
  "key6": "3n3W8ithsPY9oxU8tKn1i2BqYVmhS7rf8h24kr6awFrr3Y2iM7evUM5fuSLaMFm6knxb9o5i8b4zuLeeCxFYomXK",
  "key7": "4NNVo2EeXLDdvWAcGWpN2YNve2s67YELHVEgeZWYMFJz7NFJ3y21BMTPw3iEWcqFQRRNtxKSk89WLTkuWkQ71rQY",
  "key8": "SBgwRQPgKkn3r1eRyr6exe9k4sdCsMstWQ7zyFB2dji526nKEk21ADVY6qafX5F1dGzntzExoB9jZac1Mpay9ao",
  "key9": "4A5YqPEZLpgYkdtGc13k9TKNVXu3B11j2JCGXQ3ydseGDAaQf3YRg8aRzQeC4c96iL18PYw7urQhHs6y8WKtg771",
  "key10": "2LLdhAW8hSrxM1dgVJyusP4uqHX2tjuyEGCgDq1JoBpYamWePaAAHm4yeFNcBVHmPiTbKA5K6nz9B6PrQi1mjPQn",
  "key11": "Au7z7jtWhFozjPBnibTqjgu79GCgXqjiEbnMAbhFDAd9gTPiCsct8jG77Rkz8kDd1N6z3voybZu2FHZ4QwcTgce",
  "key12": "5MtgLHRYzS7HFCR25M37xcBfpSurALr9iFdbw9YyjpmAe7qhTxHHWa3vUktzCpGbjp6N7khqAAggZRtcW8WP3MVU",
  "key13": "aMXd14mkyTvNYmEpLixqzE4fhTU4r1FNH2JPwAzBsV1EZjT6fZBhAtX6vDk4CAvYztf9mr1qTr8DPuPtytwVag7",
  "key14": "2xKbJUe9LuKmJ99mr3KXkF6m1aZ2HB3ERT42pWNG2rCcvfKo67KzgcMy1yqT65MPVxnaGhhpA3C1yqwEWt1QRXcQ",
  "key15": "pXUh8hUF2HXZ5artmswqWAwDPPF8hGUMJyL3UQfLcNqWFyXNd5e4jqMV7hWz4VrnLJgrEBczjD1mwrh2d7MckDr",
  "key16": "2CtuSH2V8ZHsgRjCbh8QyH8kCu5UmEtKswXjjyFAwBdXVTt8Gw8UQksVdCWdU2vNxvN3LfNEJzS824dxrQov9idz",
  "key17": "5k51aCqFZYtf7LiWu6nxZkqZesWFxTXzF9PK8HJkaoC9yW2KMQrcxjfiEGgoTUuEZjdr98be5mTzWpQgWFJSE4vg",
  "key18": "3dzGYAX9q12B46fkKtXowHa6aJky5p2GfqqRjdfD9nZqjpkv4fzPgKFndypkPk2uugAgkQjk7HPECFWoookxpHUa",
  "key19": "4yHP16tfxPdVh9qeMYTTMsJ1J2YL4mXgTtFPxEyDwEYsAfGuVzzZPiseyRR2Y3XL7uXdqK64yiPkEZsqmiopgPjr",
  "key20": "4zFTqXWK4grUmfyYKCN22Z1D3Bza4ECKUecTD824h2FgoAU7oPnc1BJBEXJHYAR6W6ZREpnxzGTT9NeDFYD8pR8Q",
  "key21": "5tFXmfm6rXyZoV3Lqh3kAE9nkV554wevVru3J52VWjppLrtSxJuzb1kkCrm3ZgEWsoZkj4zaq4yuX6q4QptJRuZK",
  "key22": "4VJpKdv7AnNSyYNkXo2KmvGQSPRWBRQ2VqeGmZeMUFHkzpEPBWQFzFZcC8gfd5SXLA6LY2sTrwfs3xWZGv9Rn2ae",
  "key23": "2S7h3qmKqP2CmYrcc4wjYU7hKYyW9Z1iJMTyyBM6b7R6Y5mkuB67Mjs7hbiSHRjuFkGgLTXMbXr72fPUCX8EhRUC",
  "key24": "2j9TEypsUqde942xhtdKk1LGE142WmCjutNcbXShxkT1VUY9DUH4X3ofrcNNvh8s1C8XqgkfFbpwKYiywej3KyPg",
  "key25": "ZUnpKZARdug8uveuz1xxGqEJpyfg3ZCdakMqPeBi9A5gfT3uctozdXxaSzB7Rys8mYjFs7JTnhEMq9SEroYiKrU",
  "key26": "64EcSYzWHkLhCXVhfAjZDtwPBoJj4JmQWWJGFWWtYpfXhwRyh4V1adHNTRgBarC1c3xuUnXjdJXvPVdBUenoY5Hj",
  "key27": "46di8PbHskisR8AySoYrbiR2QvLoPVY6TVBYWB17QrBbkyg1PNUb9DREj1qkyGZzKzePC3MNaJDnuqsDrDQgYwCx",
  "key28": "i1XsN2BCemkKayqxzCpabngnRerdqAKe6hVj4aCumMQYQEMvRwErVB2FMNK4gxzUCuXYWvbYeKZx27VMSwxPbBH",
  "key29": "eNv9JEuEw6RyJ5YpAxB9k9Aa4UE6LRQAnaZ1aBvfRp8K5TtdTFMyJJAdqoKX9r7VBQPyDo8UC2NVwZQNcfDNYPM",
  "key30": "3eLwhGW5AG7J1AJaMgjXw3k3V4HGTbzVt3iKcrZKRx8eMF3FXXBg3bGbsydw5XKaFeXd26w9xdmkz6MPPQtJjy2Q",
  "key31": "2eHViToLKk8RJxYC7JXHmX2gCpTAzrjuKZFmY2b3edou6hwwJ8bKJ9SQrNW9Q7f4P2LHSwKfh3go9oYi5UZeoSPk",
  "key32": "49gUtuEQZHq3W1KyazVxx4EBX8czEJJPH4wmxYy5gHYvRH1BpVbUmWH2ZarDW6oWkQGKpW5LKK7Xo6M6qUqbhSXe",
  "key33": "55CzQ7FxRy3Y4vtysbBSgXHbi49s5ishG48VkQgudhP81hsAjMbhCWYZYooLcnq6413Tbof5D5JLS7aBaNH6Hfyo",
  "key34": "Kt9DdEv4Meh5PhTvNyum45LQw5htdmUqYxmGmZKBDCQcKxcbXw5RrB9rmA22PXPNm9i4xTkK9ynHu4LNSiZR9ja"
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
