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
    "2HGYr7BRU1nCxSus6KqaBPQ8NmbNkUQfpMLPnMQstqqE7oj6BDdG49pWH3yU2f6747N48QvjyrWqQcjtmG9wZ5J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDEVz5nEJxeur8cNvxkZFkiip3rZ9Stn4Hr2SoTgKDhkQkCgqCgnjNh5bcgDTRzqhx5siLcRpMg4ZipvJdhbCSL",
  "key1": "2FNMHDs37hW8DLJzxRU4dUih7jwijsxTQaw5C8hh5RNAEzpup3juysnM3r37N2Jg1dFC95kGYh7y8fMWuLDNQmCT",
  "key2": "2CXXQ62B2HiTsMQbGMQpJ6spNvjhFToZ97mCQFEwaWaZmu4rdYTQyJoWucwYJV6iNpc1yKUN3n25qQFjbNeinU2e",
  "key3": "QKQRTNmxyvvCDuuCMgF5nkYopaAcTjVaETVGJbwzidUWMv1mjFe9eGuKjYjfXausU6ExiBXCENRodgJ8sKnzmxu",
  "key4": "58XMEQa77yvwfcfhyPUWV4yRzyZnZH4fBZ5YhvMhBXPn6b5C7TLgLSzB53SscJBUcWn7CXuPktCp51Kj9gqTGD9c",
  "key5": "3dPjArP8s7qY51jnKU2vBNc2MgecgfDqbpMcEGh6MgeMpeS9zGA1nCRaH2AZtLhSUTPG2J9KvSiJ3FsMu4DkzjZH",
  "key6": "2iomwMbMzk8ikHRMjNbqJbuQ6ezCVjzx5kkWhbf2ECQFM9zqqgQEj8zEBB9rRNor7vBEhzryewa1oVip3qaoDn1L",
  "key7": "oLuVdUzgwiBmMdbah3smuqQu2sqwn5L1GBbWJNg5xNGWikkEvACeDDsgfEmAhzgDEfwjux6voYuaqcxkutKHjoV",
  "key8": "53Qu49puTvv4Tj8TuiA93kmZrgPBAeYjEpcB5z8ERF4kvP9bd1fKWoXdqMQgpbk2D867emnvDpfyiJKbGS9ZKh7J",
  "key9": "341DxDsGeMcwGcrXwbzpFVwmzyvEFuMLvhwy7GsMWTfKm7ax3iNyfYQBnJBBWjJm2wkWefGacizs9kM1MohGotd5",
  "key10": "QdK962biSuS4BFpsBY5HWuTrCrEF8kj8cby5qYgWJ5emmN7Lz6rh5pBCik265UF4uKK2xc7zoaiESb5zE3mVAKt",
  "key11": "2EbpFuayJz81EVdh7zSeUNnpWKNXMRLMaLcJ4dpPrvb5DApuVczivW2V7mmXu2nQPsEiKggwzkwDXxeun5zfHgng",
  "key12": "aLfvpZ2Jgc6UcVVyJ8staMB6kxQ8GQovuNJrALhCx1FPjt3j6uxPoGM9tVMrtdkiB6RYtdr6w5U3L6K4fQMZ4LC",
  "key13": "2sUTY66yxxsoD9rGPN8wERsQZVjP636GW7erytUa215QSqNcBtfroXm9ewEcdDdYR3sakgoCWbbex3jWUMQd3kUM",
  "key14": "63jowQsZAu8v9vpXZqFrnEgG68HWfSx1VAvacwfFMLds8rt6mK9TXYFqTKkWf6aP6s9LMHT3EvRg2EGeQWEWm5mH",
  "key15": "62YAWgu2nVEAwAkC3v7MF5ASR6FU4U3caRyhBP9Yz2Diqy1KVM1J6upgepLKLbDQk6S6py9VmWfLsAzfnPY8MHvu",
  "key16": "64cdA89qzGN4P3JBzA5A3hDaHyczE9k5HSaEMpV3M575VjBJ7rXHMycYwfMBZsiFEtmmiL9wRPbuN6zY4tsUnEEo",
  "key17": "3KZPJg6TB9yFzJMNpzsk8PEjWTyJdK4wwy43Wr6u2x12p7oCZj5A27YBuwByiYjG28tqtGAta9Vxck9xbZyiDnpB",
  "key18": "EWNobedfXxLcrSXE1hSnZb5GmZMqP4nXUF4sukLBeSpqsfieabk2E71i4cDDVQX7WhuXFgyZbjXhRtECbLvY9r1",
  "key19": "5ga3x8tjejsX4Vhw3PS39ujbkLkuwDxVyJiT5jK4qLbGSNdZLNREqLN881GfmZumgcpqV55yxWpjA2PMU2ABNphK",
  "key20": "4n7qmALF9FwBE3MK9dokcyHAHBJVGL5GyYfyp3TfuQstiNZNQTKMwjmcx6JAddRqWhURGMq1rWbjNqwMercSxwYq",
  "key21": "2kgcC8Y3QDboMqYZuLzeAVWwdRmKpx8ySDHFzJkxNCE35PTUybCByeucYZZXj3gKrNcE6CSVsoW1Y1SYD1n2oUh7",
  "key22": "3AzaqkANnvJsmZ5LRAvHrVp3RvtTuUtSuuqLybcLbWmudZ7ahV3PucDb7jXGxgddV7M6tTydmSLJLhX5KRY2mYHw",
  "key23": "3c48PrJ6qDumLeXkpTn2r7NUFRxoTpYqL9dgnM9jMfJZ4SdEscmo7RQ3NgBzfgAzTXKvmnFY2KywAkNzj8ENGMTQ",
  "key24": "4vj5KbWMCDmGufdYBYu5ngK2i8yhoPGc4sPVb3brPEqhCUC3T1arXEqHhTqNBcrd5rnqwRNaj7vobmeiJZHyxDAi",
  "key25": "4D3vGWYFToGUF8VxRrde5secyqkkuNz7ogH294kTaaK7aZdsKAa3VqSAijY5HACPQoeFdnUbwJdcTi3iM7Tg43YF",
  "key26": "5c36tvoRNruMP3AcbKgHAZz7Pga7kNy5QaftMJYFjHK5DYJsDt7m4jnSvT79TcoKbV6vaSPde4MVhV7bq7Npx8X3",
  "key27": "3PHpmmzL1xfwV5LMUgvTD1QUWC7pUfXFDmCCYBKGM2SQexGQTjthznCAjwM7u4UZDwBB4akapp8xqNxSFaFpcCBa",
  "key28": "5dAW3gXiXnNc1JUukyK5tQdScF7nAxAVfmJekyYRj3orXY468u1E6HQNxYeDU1ivVE6fjYTsBZiwsJtAQeunLG2Z",
  "key29": "4ovaLk2fu4duioxccEBsXK6CNDeqPTA4av8EMsFgrFXe9zqszV9qLyDuUGL9Dk2dByfwrzCCQSb8SvwT4HqwRzGT",
  "key30": "3KzgpqbCDSmsGUBxtY3uoewuxiAPrresLm1v4gboNnFLCygyGUsWZZSx8sq9VG22y3qxDKkzZUAm6yMsdec7KNHs",
  "key31": "3aDim3x9Po3bTWWWSVq6oeiyNXjfVixQT1XEbhfKGvijZDuvNpi4YuRqpEeD1QnRWX9vHLkzutn4jWSAwWurmxPA",
  "key32": "5vxnQzLfhdp7ZKduyHGqiRdm3G7uHTWpRXpiDjBLH1MLJdmfUGYRCBGXk8vzvURnPXJnCTbKUNXZ2R7THMxHtFoN",
  "key33": "2cbRDQHGFPTY8bPmCo5XjpEqYGc3JoTgctGJ5YUExYQSUfmk9M9vX3m1psjKpeHcmRfQJdAhgjT7ER22BqSYvAGX",
  "key34": "5bL6FfYt2k1rouSFBCdJzWLZDy125aEGcLLawpcp5gaDPfNzpKg2itCUL37Xc4njrZZQys4b4SeaKHWqBvUvfMXh",
  "key35": "2qHqMmMzSd4cV2UMNoLybRzbK4DwaJ8ijv3dVjZ8vT8Jwb755AqZkzPSWx4uRQthLqEqwJMjpc9s7FieGDKg7jHo",
  "key36": "5r3D8ByzWFLR7977gAh1xa7eyLWFdesSzAJXFYXNDii1buYPvf3CDoWLzt1EnZR7QLArkHdgaLtqAmuEkdFCkNFy"
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
