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
    "5gLDGtXa4mTVoqQkZLL4PGFK1kqxNJxv8LGLFpAwzcVfdMMjiM1aewtpXiULXJFLgoY5aKrnNJj4dZktBLdHJbvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dPTbi3szVSHkvb6t9Qv9w7FeZjNBqKATTyTM6Q174VyuNDhr6B9yaWkbfKgSehkZJzWAAUfmYkkbMzSKSGG54Yx",
  "key1": "bZm9Wq6C3ChFDj2WifBmQjwgkDdXrsCfhDVuQv1uzMwTxECdv8YdjjGD9prhTM7RqmdwD1A3UBaiAgApCk1Z9h5",
  "key2": "3YBugqxr29fTnFFoJDVFBTD4NFpGC7xJYyiJGQNwmQTT9dvs8QTDCtRTFUNfbc1T5yui3mbdWBSRY1WjSovdNZyi",
  "key3": "27P56ZPTvhLxtJRqk9c3vr97uBhR5ev39LFqPNSpTkYe5BhWQnZSedr4qft1HLRcghiBkc7xskMYZ1Z6Px2Tfg9p",
  "key4": "GAaseDiL5t85whRW5ZjjKqy8Bnf8aQ7NdQQsQgyBvTkLo3bnFC5beJfdwdX2ecdsb4tHj3DHXVrkCq5rYNzRMhZ",
  "key5": "kK4Nr4bhXCsnjvBdbEmVPvxp2GfaFAULWhByYLNjNmareHGjhDsKSK4vjKShLnUHCsmzHZp8swybkeVDcWWvY6N",
  "key6": "4dZGP8jgTQdCPTjcwH6LoydrBQhB4ApqEk38R3115AP1k4pkufCw3Md7BK23MspYJ2QFoMojuYNkjTAdEAp6Tp8w",
  "key7": "4DfQxcjXqZR9cABPyqZZ5tFiW8YBjAocUztk6sK5wrCUXAaHM64rf3Vajs3UccqALk8XScPf5JHNK8vRyfMfzST6",
  "key8": "4j8GHijo3HxNCmumVkqxdTZj5zukT9Vs9yFb5JK6VogpAkqy8EPi7Ki64UhXJCBq9tfMpKusKjx7u93Bc883YAmP",
  "key9": "5P9KdhjNWgrFzGWV6tCoN5zX9pvHxxcChPAJ5Aea74pb9S1awQfhG3uTAzc4uLChbS8K1A3VgT8mF8Sj1GcRUGyd",
  "key10": "C4rVcADFea6hb3xUbkFdw6KtFrZuwCzimn37RJ2UGDECD3Jdy5rLfQc3DKeC3xN8Q4z6bm1LfYiqLj6v1BBZs3v",
  "key11": "3FGjeSErTSdot6VKrD1KRDjhJsXW4RRvP4fUdhuDbFSB3CPC9B3yRJv57K5PzdZK8RvQzbWsjthVvxfmUt5FMHDs",
  "key12": "3DXQJEiv1dx74KGmMwveA33Pk6iWdZ9N1PhfpHDVNtN2yHEr2h1X5vfMsmpHrChBoPi8XinGz19h919pTZN28dNN",
  "key13": "31J38XZzVAZMv1wT9P4bv5ArBjpvkHAiz2VYKXBxFT9VtbcXDRQbPnEVc9CjJRwQjwN7QAd3yVVK2RNqTwdczM82",
  "key14": "4bbiyykEcbXngB1vepLPg5A9vAZycBmrKqcoFkS6Edie9fjvmcAZYB2cNMgTxpwCncLNfuBhm1CerAiHtFbY3XrT",
  "key15": "4dpRqRTwkNvg2BhNwUqF5ZZigbRFgverm2LLmb75FmnRap5Ad7xgftjF4pNH6hJLWN6roZHNNZBEgxsf4qiAL2jU",
  "key16": "54y6apgXP7S1ZC4PN7o21cpRv8Ngfz2Uq3dUhSinwQ9QmC2iNVdKJyNkkua8Z293qsh6auztfnJwU9oHfT2Zd3xp",
  "key17": "25a1bvKxDGZn4mKHkXQ7LiozSpQQ4sEMMqCQx5oahTr5SkTMWdWXpHRQYJY4RMCpBWQTjG3D7pAiwPGG87KYPCew",
  "key18": "3jLkFDEWHY36EPZjVGwUgrZNT2Xut9ZfMSsvdjHige4em1HDjB7U9L23j9Cw3y7s4ifgEsBXsb5vBww76GQuH1k6",
  "key19": "5snafBnQBFAQctVmH5raeaQ6CxNUdzWSLS72GZgvVNKUUpmqofWYP4op8Yc5fMKSKAxtauzqG1K4oLN7SvTa6jSZ",
  "key20": "5hpmabnYoB32frFmE9QaGLWw8BXTto9DckY7y8GpeiLx2h19V744EMiJ1eujL5hFBesCmP1v5kVV7gJdCvJ89sye",
  "key21": "5J7hvpdX61JkWVCQKDicp1eTe3wNzEL5e4UBRgskF1VStGmK6m2xRePHu2WH7cuTnDihpgYB4hbLXKCFnHPu5d3K",
  "key22": "5CdCd5RahhwPwb1n9zQ2Ej7TRRQMNhmuToPQpoXYerm2eJQzJbDZAo3S4AUXPsJm1Gr8XCYGFePene7M74f7NYJC",
  "key23": "3htPpeGtkXNoqhvzTHe9TpU4z3rCLhWXWszRdFYUVUGM6v8BRxuz6RAN3Nzd4J9YwwZdpJTWkiWG3Exe1cWL81jC",
  "key24": "3HxR38rzVxAkAHVVKopmqqkvECXhQM7JViuj4NtdVGWtYdLxTJX7isJVRM8pzyqVYQfMTShbQPLikiwC7XpfcWqg",
  "key25": "4T2MiUDR1i5cChTbZ7RNGVjHXoL94ZdQpCGJGhzuLTHMu6LcXaoXsrKJLaRmv4PKA9bxgrWzCXxcucweNBhQ1zNJ",
  "key26": "4i3Exhx4iKWJiWXqxqXKKLqpYfbBbUVX4JQYaBQkXb9n8gCLYQfqewFnnKafruzPibk37tjHJFeh5D9qaDqqHsf4",
  "key27": "5YGjBe3ZwD9p1M7sAC3yTJDGRkAdkrPNi6daNaYHQFpYPmhMESJc5NjAq51JwGkdbEehLuDs4tfLAi1qFaWLA3gB"
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
