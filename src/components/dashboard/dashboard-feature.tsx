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
    "4fDehxis1d42aczLQdzmsFXmdkPDKySTSwREf6bSigQygAGqA2CJrPCHqzJu1GJE6fHzUArz8R3kkxNDtem8C3gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NveQWT6i6Vr718pV2oH6g8tpdaYp4zsVeKSZp2ud2mhTXXhuzxoTtM5ar4NVGD5ZFh21ka667kHx5HijCvADUp",
  "key1": "26WiPAgC3fgNSzYFR6D1cgnQdeNQPdPAVgeNp5TVMCWxjpxcDHWA7Up8XWdnx7KadEnk3hdyafnWCtsgpNunaEbM",
  "key2": "3isaEPr5Q57ypDnJQX8Tg2q1syps1LcN2YVpZQW6wLKFyzwUUeeHeXJZpdrxCESuWhP9BPYpbKvhQ18vU3X26BGM",
  "key3": "c9w7nnTjcuZnWx7rFwPYeKsLP1rZVQ88ZvrarpLxrk2hNsh9DtJxZZ4aKRagPRhxmGj5qKEYR5x7bPQga1o3AUQ",
  "key4": "5rniB9M2NfFH4TknQStyaKBHu3GQ1AjZf99ibPXnS2Ezs7YVjKeKR3pUZcR2BZRSdw4fmKjtH3dNCJDr3QEB7ZWx",
  "key5": "5B8YWTsKm4MRmGsaoVrnXrYfPXuQBQSknLf6Ercp2f5nTeC7r1UqWPkAjDF8aK6dfMPSZqbZ393ped83BDtHMypS",
  "key6": "BQRiUFPRddj3rAjU8fKZDbgd3kp8yX4NA8qkBqJecXQjCQ7GiDoTkLW1LzrC47zi5mn2mwyTHm7SbZWfndouKSJ",
  "key7": "5gzqiDhWnJtsGBKwDKd5mbS6eWbxf7g6fmZeCK9knRTRSCEacLSjSQjoGZyfujS2ZqPF6ayeUnTHDQPmsrXi2FDz",
  "key8": "2KaZNXHjYQwaaMMrGAKq6XPHvX89BQDk2X5z7pM6i97DSVUEiPqrnuiFStEF32T4fFP7dEbLAzVqLj7b3Yhqe8B9",
  "key9": "5GYvg96ioEEQBc5dhXkxmFRABNdZywGHDc5kqsud7h1M7xfRz8nnFAdKSMuSkvAQ54DZXvVfjXtZvp1BmL3krpcA",
  "key10": "4QAxy9tQN9yPRHGvmR98XPXtWJhZ8jQCzrN9hM57SsXP4KRuoNEKMAW5WHos9egYAztaCrJeJC6gY1eNhj3NtTVA",
  "key11": "5nieAaXt5amysHkBf97z4zcMEb6P2RMKwHyq8VVNvqLutn2QSw5aLaEYAopMErKC8ELnz4BKXd23zxBC4ubF7LJL",
  "key12": "4YykqSadfyQo5K27P2QfdwbKp7DWgpoz5VeomFuoWQgz26ZNdwvoh1Cx21Zb891kBPisvqaBeHQUvvgNwGgDVuTK",
  "key13": "41DKjqTxGQuoLh39uDcgt5xbcKZkpgJ6az4qHfjDMQmBUZ9DwdncVApQqkqomJzYYVzbyyL3ycckxHEANYdCqS4p",
  "key14": "5uDyE6BdnvykRYtZS8NSraDvV5i6zzafG1kiHhn49uekkGnXEEEEDNLPehYgGwNSyBm1xJAat61Ar3mAPqWvggCn",
  "key15": "ogxHCgSskroTGWg82bscZmmtRjrNYT4aXMw89Z7g3VR84zstsHjpWtcheVZzcHLs8xCQprYCGn2YSXiuLZcePpm",
  "key16": "d2hZHMrrg9jL2MNng492dtVbqdWzTacn5ayfnFNbgZ14dztpjGzYJjpy4WkDBDvAhCDg8QAhgVXGrTQsAgP7GUM",
  "key17": "Wq4US2Xh5KYKUqYyHhYRJE3yPHwjinnNZBULMVHrVjJQevhqoKTkCtiUasvTfLwEqoCwjwgHCgS4NxtN9bTUF1z",
  "key18": "4KcGJkr1jMXCSF4UmH3jg5bAk7bqSVo5yZqbKgzDcs6jZjZUv24F4Mh5MAaZVWQHZwSmsf1TY7jP26U6ZHCTW47Z",
  "key19": "5fBRaGgsz4AJENNeUf4Qw5GfgHVScdo1dMzyFqKK6zYMWEPaA8YfZ5Z9Cedkj8ebrEDRMdef2eGKe1jmYoK6zS29",
  "key20": "67LnLuKGnoPbn7UyXxLKDWSdPe5egzbPj5smDijxV6DmXrjuTWR8YumLVd7XmG4W4qdhQHzrE56JaxFnrAkeyQuU",
  "key21": "4rjFZxLQp1GC8aNpaNgeRGjT3sMf22ysm2DN5GD5AtuuEyhxnUPwq5bhCwt62LHoe2zcZhPnzav5zJjBkaaMBzsm",
  "key22": "2D255PVfPxevp8vRDvtfMmWLtWMJPxDEZSTLqrqt3ThAz8ptYqpjcUUKaBv8hXsRqsG8f3QNfPaR7vCQ1cUo7EiF",
  "key23": "M8f1g4qf92HC1aAkrnDYjTofKP7qJy6xzPbuHxdT8sv7okA7N66jsJZPu24bwE5K8U6DWvRBVgS6t6dsgBFr8HC",
  "key24": "MWaGW2uKptwzK5MsBg1wHDwC16SM7futwoaETadPdxheynsnUWkGQdYsFgBVqf62qR1tRXyqvo5aqzHee1FmbTZ",
  "key25": "dnn3edk3PsCqhd2aHc6oJv92unHCXXF4E2inTSmBncYcabY8aewBxycnJpzupUFXPbCfg1Dd8jaBtANdDNfvwZQ",
  "key26": "5XQaFYGwZJ92ya68qnTXn8oQm7r7nDqzbQLjmRZVeVrYt8vjFjbEjXmfBffS69NB6CkxmG6jYZpZvPGYWhSY66sM",
  "key27": "3zKo6PX6CLu2UxBEnGZWqNZ3EPMnvK857TxbDcvh6y2TtmFLSQtzd4Vkn33KD6Tw5p3v7zjyQJRjFF5sXEHUG8Qu"
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
