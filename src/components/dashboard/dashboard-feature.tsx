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
    "2q1R8QTXYhFyG4vnxBNq5Q2aFivRJG5VND9LXZamSQhQruJRCrWGghFuBh4iuvJ9bo2nLjkeia8QB7C6HWqEk3dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwinppzgpzR3pZZM55wAESSQanGd7rX9RpzWB3fdW19GRcBEi4aWwSDa9zF5hSGDErNzsCKfJeX7zaodh6zs9Qz",
  "key1": "4xFij3UZsw7evBNJsJi5iMQyapQS7CWAELDjUCAFKM9z5LqkktFGcbQhgU1SqT6A7Q3XwkNM6iqA9sw9KGNztUhR",
  "key2": "4iWdbeistfkYWVdF1vtPCVPSXfLWUPfzLDTe3QfdrThHb3VCqt9DKzJAGdTBKYTKpBkMhbXC51nr18pg3676dMr4",
  "key3": "JW6kyGdhMtDcQd5AhJWtJTbWbdNMhDSEKHdHa8Rj69WdxCw7orzqyTp1VGgoesKF1NiCKwd15HPyzUQMZLL7QSR",
  "key4": "39r81SLP6wUkBNXqcWTvPugY7854e4YvAz3QaRxGKDKcTMzpb9ni4M2rqyfeDn5igkoDqM9jzNCbG71CA55nTZG3",
  "key5": "3m5HhScdnGJUVJtEMBDnYynwDraPRiESNttBMqW25HyinqkSXYWmCaC1gtQ1ndjQNmwtmtzigPsTeHKcj5fUDoDk",
  "key6": "4ccc2ai8rSS7UX4geZvYMFWLye7DjD4t6r1jywx5w2EhX6EMSrqzq6xpYmMcwAi5nma41G8oUcxZUmnk2uZVnBWb",
  "key7": "53N1vAquWzU3LYeetqUUZQ4x9WtvE3Haa6cXhKYpDQxSkLjfEenbKzjs5WDfVgiiv1ijuk6HgwM22GFpLpc2iusR",
  "key8": "4M8mKuofd7rVe1zKpMu4HuzymPYLb1H4Doh4ei9Kjra5wtM8xax5QUJCtySwvvQqjW6m1k8pzLxzPna8jgRNkKos",
  "key9": "5QWABVdkgBNJgGaAzMjyfRjGT5NpgqaGtfQGoST78TeAXDXYN9ZDaSDnrRytsb73QkEFb7bB5TrmLFNqBkKL6zrM",
  "key10": "5L1JafGpumTvpqaYZ7DYD3eH1cySzXUwFgXDjgTWqbjLMNrL67PYXUZP6Q4fVsNRoQzdnbsNSribrg1CjqLFXeGc",
  "key11": "3Mv8k4di42BPsjxm2PrHFFUsCF8dCq9XKQmroqJDhQzGpon5K9ARS4fkPSWTvdaDhKiADcGGqDXuyav6jXbRWKE8",
  "key12": "668CaRbCESr7RNhxQPrmR2VM2kUv6xcJvHsPvHg3TN2LhinJTYsEsbKMcG6fCem4q8efuDsRmgPGjRHsu6ZQxsk5",
  "key13": "2SqpLbqjG9NS34JTWgmPJpFPaxP8KyW48qzeBzBv7He2Nt31AcmLH8yn4Y8eG7oCUGzwQSY6SosDaAZoMghQDBVK",
  "key14": "5iCyPAz6kkRW9vTGeHJUxv4THySqk3riPkKJuifg7gb8VgkqgMaCEXkx5Mrz7x6C15uG6ncPTRCaVAmvYwtZ7c6D",
  "key15": "yAEFE3mnTTn1RVukAV8nbqMWDtxVeZNpC9ifp9F76JNY9XAnTUungLFBbZhfpwEM7M4H19kfWLCe74qktDbxbpw",
  "key16": "3jZXaUGPo3Y6UMJAtW5LaDubmhEBiHyfsZeEWg8u4dKMEdcEY9dCftCn1YuZD8swo7bXJJ1Svf16Neg3HPdSiiBZ",
  "key17": "5NtRwDtfaNzbfjr7pN25MEij6F4VYR5Ht6S4LGjhJEDGzrEwGSvXF3KVWbWKqbDmoSwsvf7k95oAtJHR1dUDJNKn",
  "key18": "9Y1riKGGcZ3prWq9d2eyZRJdSh5DQhCgFJdrTPn3M3FsmJJzgWtkvYugLZfZp77fi5nXHA1EpYRNrKt7Ss3f4xc",
  "key19": "45UQ2FujgQPrfuFVisu36cacsGRmMn9JravgeWEp51V5EUaK6unsnVofRkMAGH5QNAnvMFU5HS3KWNbw2uGRDKBp",
  "key20": "2UewsVLque6fPfsGNNT55DUMEB5zm1DjUzcVBWX1z7KacbyhKNeVCQBFcAVqHTQkh638rvDydKxGzfa1cmdRWuLE",
  "key21": "4DcPiwYsxUw32v2ww6AefmR9gBprwd44Enz7pqLrQci4sRc4W46TQLfwGfkSHmD5KJMZsLFMJEehpwcFpK9QNCgP",
  "key22": "cb3WB9L3DZFvnXRCrYrEA6BhqVN844yTkJBpBPazawdJuXnhrt7UBZKf5Au4y2ofY3oZcmrijRtWa2dyx12ehjE",
  "key23": "2rfgLXcauU7P3i8ZtdPsVXrfoc2U87aHKmdGndRnkDgh67UGxb4ohbftumnA9f1JjWWn8L6vYQhJvH8brWX8FiVF",
  "key24": "4KYHHR1aU2rYQ7T3iHq98iBNGcUwrEECuWj2ArH5GotA6Dh1ndtxe8ZW6EjB544TTTp1kzcs9Z2XrG8m5z1os18k",
  "key25": "49DKmYEX47yHx9fXbaSQEQJYyQTk5mj4AASreRyfmKQSwMDZCMgzFkdL7TSQmiKRKPRxEpY663CbgpWxu6mUYVxP",
  "key26": "4yUAp2dj5SvTAyznvzPsNSz99RqDMsrUDvr9Rufp5QqPTUG4QDD4z7jarRmtL5FyHurv76hFqEAtMprZVE1TLrvp",
  "key27": "5yUQqWXUHnd9VgN2zLmA6oVAps8RtLcRFiXk6Z6gt5zaLgCgkmrDCxoPHHnhmbcZ9VrDjn8sQGgTBENCkCVhxPtu",
  "key28": "2Unuy83JPepqxQjziRWJKewaEgBjs2j1UjYZZzn3JncdFdRjDeCSbXGSwBJKtuxkmkM5AfV1K9QR3J7XPqRwstch",
  "key29": "MzJudsyWJrVyN2QGxrdTj6jF9ELXfWJwUHKWHQPFvocDmNPhWS8wixgHgFUZWRmzq15grbWEPWz3zSoUAhC6gNa",
  "key30": "3SjqKB93uSkantCqCyn6yxvCNGt4ne8brgDBVLDknDPCUG1YMpeN5UYTJv6jxM9MHHXJPWkkjvjkAg7oLSEBmHHf",
  "key31": "3sWb1k9WfACkCisqeo1mGgrx9j4SurjqQZftBZsJzKu1uUU16j6w6dkmsciuBbjymQhZVqDiyHwA7RjD3SPtFxd7",
  "key32": "3m3K4k13MroXH5JXAP1X6BvAsrVrBWonQSZNRh49dt7NujU2To8Taejpj5hH9NTpKXqDWShbML84uiM58HPbYRgB",
  "key33": "26WXVzfDjufjqtW4BNWkB2dQFSCEcLTjwyV1oiMS2Jo8LxLyUmD95VAWmK53ao7CtHb2KsMTM9sU9mj9oFvNYXrw",
  "key34": "dsxJZaaYJb3Xs9HFZLFmbodB9REsdgr2XHXQ9E5YoyrjW6VLRGb4TXt2Zf1keDXNPsSiwB8YPkhCRC1cfS21C2k",
  "key35": "4GHFkWHCCp61q788b4oEe65P7AfBP5RFcCfn7Ho9VDmn8vct3aQdh6Mt4TUR6f21e4RV3DXS7u3fHkh2BUdJwD6F",
  "key36": "3RX2ZiQkyRVtizw8YcSMQjR9VukoZyH4A2GY5kSNRELFW9fPAVXMtGKAsmJpcnQvk7rXqeam7LgSh3SarNx1hMvv",
  "key37": "3ooh5gExN94VHPAZnsNxDhnWP4W9cPszphYo57b71RC1NNqK8u1SGfGhiqhRkz8ZKx44KTzR7HcioncYEJUoGKuH",
  "key38": "2out46Ybqn8YtwdNrTNFuZMHeVC2mrhzhwRXpRq11MDNx8BCeV9qyGrDFYKxDmCVeFtgZqVSpSemrxEz4iPpAiFM"
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
