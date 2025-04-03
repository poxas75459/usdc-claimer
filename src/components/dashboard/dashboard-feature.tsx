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
    "3pDYmMf2ChKVXQ8jR8fiuEWMUHq28NJrQ8PsbwpdNs15aSZvvWePG6sk1s3HPLoMFQqRYjzqkNzwLrEBq4PAvY8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEKCoqL8BWgFYbnoU8FgposfmFAfxm3f12RuLwSp4csiGNkXem47ff36WzMrrpu52PEUQMM2y6U3ymeT75znyuS",
  "key1": "4CXhHHt9Yhk5t9KMoDXABbqawn2acyzhPgb55pUfbAB3qnPrU3d8xeujm97bRsRFvdqfMEJoJTjQCrJkiUStWqrt",
  "key2": "5BX3GjKueASBKX6JodYW9pHUCyvZD24qoZVjZqbxMqhVnpZgLVhvRnXuYsbxDpYTmGHKrkT579wjzhR11wP4wKxH",
  "key3": "2NTCv8apZxucCY6xKC1FkXCFEQVxWWJDAvC3y6zzxziLf3ZG35osQPzn1zvpoSS5x3Wci3XGbz4mfMgpyhZku858",
  "key4": "5ez1fGYeQHAoF37vmCngyM7X4eKvYwCh8Z1nFoeWSN3yUPHsDsw3NtP9nLjwqQjRuxWhjiFFzPHGS2LyjM7Hnt3N",
  "key5": "5z7HgnwiU6njuvsaM9URCaSwdeBn99thmJwLqUzB7XT1rhrjpMPhFPbAC3BJgKZmNFChHFxSqPFSu5Xtef898dQL",
  "key6": "43TDhsz38BPUcEscoQSKoZXXMwqkbLrL69VxoEwBVnqjPiQjPh5fuhNb25sSKcv4CcB5EgCboau7Srz7LK7CywPp",
  "key7": "4KqSZryQ3ce8LgAidtnYNtswvaKg9hDwZi4Qh3yjpwjfnEHTxpWFKPd5nbSvv1tZcwiLnUPMqsEwhbNTyEsKYY8o",
  "key8": "2je6zDaf7H7P3fNnxiKpEK3zJiYV6XAfUri4rbhiRMG1LVMzZT4uSQC7wMDw9srWHP1geDTLiTqvHtA2ZjkL9jFp",
  "key9": "3PDcNPfxQHgNgxMqcnBhWeEXgu5ertUdn3EQ4jnof467p3bnRPcPgkFtCPmRrb87t3cvci7iriZBAwjp6o1jkKBX",
  "key10": "2CMyF1tB2gAXzv8WerXL7mkok864tsLWxA4VicbF8NzkNDWrHksXWi9adyzPweAF1WYMXGxv1eHmkNFprKM1NfmJ",
  "key11": "36YtgMAGwnfp2KXm3S8QR6fytMH2w2arK19NGXzTBSfMUzjPJVFWRPwYUr5gkd95vKoE3Ptgx2eEjepHBJgYTWhn",
  "key12": "QmxoUsdPLbbKQxbAoiPgUsBNv3SZ1tpqH15KyUf3SnChVcndL4jaiXhWzm5CNjbuHS9Lsfwie81aYQFGJEviLCR",
  "key13": "2scD43wYLg6CRihBKhZjdR8oViSTf8T3U3wj6KEQQhJykgm2p1NCkFRK9R7pjNC3uqfwSmP91iY4uaGF8H1ysNhw",
  "key14": "5UfzR25wuAgCrtMsRp2damqoXoWYZdKHqr3VVY7iDFEtzG4dgttehk9nBbTsVCquo4BzbhHLKCzDAJRXPLBGoq6",
  "key15": "MwMAreXyzxKTxjpXLPbWWgUZ1R5shTXF2bKTJN2cji7aipVYrDEKzSUVX4Wi5ycmjRRUEoQzqnxv1BR1mkpA8N9",
  "key16": "4as99Mn8HzsqdA35UX94tGJTX47XwY6GobwsUtzcrNKs87X1pMmZjBYSGEQFAxedMTZToMgZEUrehJrtnjrYukt9",
  "key17": "2rnn7vkJey1AuTNseCSUvae46Wkx6ic8LbPYmnCzTtnZgAwTXGcmn2AVoJ28mUnvim4N3HUQXkAtd1BpHLy4jKuS",
  "key18": "vwsvcWc3Kf3384rT7WztC72VGe6n4vFhYm8JRvqQQWxkbuCDzHQ4aoawgdtvhuQ4JewEWH75Y2WBUpNNCnqwahk",
  "key19": "23uJ9cwzVUFhgh65DznxLAfEpKD1nFGzKXu4CSvaxf7kZDTvn5ZyyJhSz6HYU1syjH7dw2hMq9QM8SKMarzAonoR",
  "key20": "3hEYCrETmosrGm46BJGwziUww5uiQbcBeVw37AreAut9CnLyT4zHRdKq7W83nLMaRsPkis2uNYogHEBbmgfjmXxg",
  "key21": "3bxYbfohgjQiQmKWDk5rSnKzUcGTm3R583iwG5kz3c8CYcpPXdvjH8NUm4jaG5tzHzWtDfzw4TkhGZsGahFMxQHm",
  "key22": "gq7qQtibQSNt2vXbCFBbTzEjPV39Rjg9FwbzVWhNSZjA9ug74fbhFkcMJuMCnLQ3B6HwRGtxgf44N2HDzp5Sgz9",
  "key23": "3TQy8DLDbzuHesHJfTHcHjcW3koenWgDCKoN1y6JhjMmAvKvrg7Z53n496RBmT2isA1nf9bA24gq7PfQSXVd9CaL",
  "key24": "4D2kWW5qRf4MpxQEjXVueKurxt8yNUr6sJiSyUmbsA3kWXieM6YfKTctMp7na1dRpZqNUEezXGnYEZzy1u6WvJYS",
  "key25": "4yNTPgfufHMPxTJS2byrBKVaSCosY5WksAPfeDpPLJHSWi1f8erxwmn6ztAyUeav8ndSUWdAjDXM3ZUmgdhWvjLZ",
  "key26": "3YTaAai561wLvYernPBnF4g1wU9y1yXNrD3XxPbT17SLXYf5hdPrUxn87iery9JNtxdUjCkGVeSNYFdBb8hxCgyH",
  "key27": "52TKefTLj1er8bD4qci9UhBUYoP5qUzACAFYYgdDVqbLKQAaUVsWFRry4zfZcDScqnyEUn7MLbJp3Rh8wg1j3UH1",
  "key28": "2FXyeWrSa2zELpdGLWHYkXrP61EV8L9A8GPtXJAq8iDyo6rHKRQvYYMkKUwZEt9ey3r3bbPTZ4AmTbUn53MKnkiL"
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
