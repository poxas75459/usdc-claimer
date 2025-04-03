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
    "u1PxLe67MFVULyAWdFGXeVgzzJBDwYnZFUqR7CvNeir59XjxRg4zGKCtKpXJwSC9uMAGCHz8fJzt8GuLhPvf77A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcuLuFHm3tAY3cxqjUpz4uyvUAoj9uRb1JqkfCvQbRVdmjHnq5wCD5h525TJHhzDLGjqfrA1uw6oMugEjJKtrnz",
  "key1": "2wCLYPu2TXF3fauJajET1Uj9czFvfSYLAKL5YywaHZkXYtktVQEXm9cC8CdPTQybVUkRnJ3Bn9fsS7Bq1RDn1RBK",
  "key2": "xguGyF3k6i1jciQfdm3NYqxL3VNimFeaSFE2VroJoxwYMdQizDEFpYFA2LPBRc1k8Vij8RB55jKKDLNvLWKrJ3r",
  "key3": "2Nq4uz9FDJ7U6MigSwnM37ruEMUqL95gwWY7gtssr384LtUp277SuRMevXcwoPqUJsiV1UYFYgTzfDLvmJLXkHLX",
  "key4": "5dMyQ8KE8CTEjGe2A3K4pm68ALHLZyzzUPASzgWpwamv1NNM7kgRaJMDLTWe2wQAgoC6pdXwoBkeFHg1NqeqWSgV",
  "key5": "2f2FYUDnXifJ8Lz4KUtuUqn6cKRs3uiBNF934iriHDYXRs2C7LVmVgqFFt5U2BEAYd9GD9FLpz9hdJuqnMDQfVTF",
  "key6": "5DxJkBZJJj7fsqFu6Nd53QESAitgcf3qAgfqpBu3LFjncEo7haRLhE86iB98LJixngQPgEoXjZYbQitaHf9u9cwu",
  "key7": "4p2Xwd8mtQvAJDEgaQ16xtsfV4zJgUvtrg28A5AtrFMDxqnDCSsbhxzcXjCJmcJ8QAkzZEEaL56GE6ZozDqMFp6z",
  "key8": "4TNDH6DiEL8s5Qw3twuJDkQzJfeXW5Te71ZnarWcUjPh1ER8bVenjcLQiqTYLnvJdbfs2dZcpN9V8eRQdGmh7u5s",
  "key9": "25jV5bVxqU6dzFBqGhRXXLNN2y3tEVhvvxzqFZ9QmaJ34yPaF3uywdJFsiaJ9Qrq95z7EZ5Lmudud4tBz4Zsmoeb",
  "key10": "hfCGp8dXaiwNYvDHy9H2Ym9axmbq8nRrpoDswLJjcnnEDYh9r52FS9pFBFmkt5eSsuMcY9ouFtohh1hWimpMmSx",
  "key11": "ZE2Pb3mg2LWwUK6jweT9Vi862J7Z8vg4jT3KNDKmKfci2cKgeQwe5Aiww139XkXJ41N3BQo9bbErV1sYhuf5CPA",
  "key12": "4ybemtwkXueRuPT4etqTZuvD8e53H1xaHjgnh2w3co6heQYoBcoxUtjtp7NEey6bj58o5yqv8HFz75c8PYEiJRfh",
  "key13": "2nQcB8PBLPFPyA6xoeHofJYwFqNMDhsTc82XiwT4xL1hxkyaoTTSe3v4xkA44A9JwHXJ8jaa8Ea8KVnM8AMpBTUd",
  "key14": "2pZF981SxA4UtDZcj6D5XPgCzX1bEG4iXTfPvjNvrJGGNds9TEBYDenZkFUBHbXjqEmG6yzGsbob7ApYpjvKUaDA",
  "key15": "5eU4zXYC2yo4BhCG5z3gTxUAHoP6wQgKhf6xT4m7cxYYwTgVK7Jng5rS7cyNMGWQH9A28MxAe9L2TtTiYB6aFeZ3",
  "key16": "5nWaoj4KQ4cQ41Fbf5re1X6UmS9aqg4qY17VHpRR4PmKDPdYn8L1gLBrfYhkUXevPuwgjCAyPCwpeKnqRV8ujDX3",
  "key17": "422FizCEvfDbvBnf4UPV9dY1W5CYzjVdATpid2aF8tfYZnFiyckDWLpF2psNYX8G3BZu7AVgnaAa7gUZqLDfAR5j",
  "key18": "2qTmGoKGVwLyUW3qTsAUDJqvPQCxmWVw6MvwQTY8cGrqa7UGuSn6ku9NtHMyvZUbTicB3HaJTDQhjV32RQEiDqK4",
  "key19": "hfFmwY4GsWqdL1mHqUU9MEKZrxPnfa99SRh3f6KRRrTFG12K1HuVH2JyNdsZzVjF4dj5vvFrpqctqbBuFzG1tU1",
  "key20": "3Wcm996dfGVhKoPfLaDArZ82domerJriVTtAr1LqdhArKWDzfX9AzDo7kRJFDVLhvsgUMHjSFmxhxaBpyd6geQhM",
  "key21": "4wU6kHTPuPMim7bGyCGEWLaXpwb2JXpbcRvSQjUUMoPH7W4wwFaDX5qSroS28JhCgHyrQai1cBxGkmo2mAoHgpYf",
  "key22": "5oqATjicrTsPzNFoyVvoMtav8BwjBXuyA8r6SYZKgb6WsG9g4raQzE8FWVgLJ3E5eYdhYRP8B8haXYVqTKgJQxqg",
  "key23": "g4J9MSNjAVswpFiexSksjwzrCDc3ieKBgEwMVhWtojULZKvM1F9R6svWpyhD6VtT9EsREMYPGjvdBQWFPDHXECL",
  "key24": "2gRZyAxiUGCjqfKVbtLVvEtp3UukWsg2gHoGbX1y7xFapH9buwVnSmcX95cB5SGLRPk1zuWFgbd4rvthsEkTBnzy",
  "key25": "61tsrkNhXVCs7eaQZGGuSx81BJxoLMiCSLK6ZCkcZHzNd4r4vTaFgMSy1bvnmZgyADfxJ7m6u3rcM7iYJQ5kmtAx",
  "key26": "5veqWuggTE184dkW39ZYyaj3ep7eDQssNtcknvi7jBHPUEhbZExP2jNZNczjxoctP6zPZZpAmd3GR5R5oNoUeLrh",
  "key27": "645MnL9nCoUNT3CchyjwRQTWrnpstjvDupy1vBTkMXriikZiKaUzT7epAY6mccnquXm6e3TMwpSjhdKrqGJ5Xmux",
  "key28": "5hv1ftk2Q258ntzF4k7Df86ocoSwzJ17BzTRDUu4Tqn1iaYAwWytMZ26cELECKS5jUsYJUSt9i4CQSFKh67R38EC",
  "key29": "64mhSHhY14ytbmN8v8Rmsp47M6q4PRDhLYZA1JvrEyXudhfHrDHtV9rErPh4GEAYP4NxUURwqpnYiW1ZTn8f42RR"
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
