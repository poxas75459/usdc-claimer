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
    "2wCKSm4N2D1LMqE4xnd32ABSfYNm6w5rvMxBx41L8GXY4Ji1TTLez7PQtCQKKuN6VjMwdHQ8pHJwYfviikWVUU1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648pJgxFW4zEDStBqoj4JL5HXrMFMXkEfZWJZzP8E14pqAjTASNpTNK1qH31QMRii4sKiic7KckozRisPqdsTLJm",
  "key1": "2prYYABZMafwXUYtUaELbw6QikrMjZftsYBF3Wr1KBVEC9gABFZe48vDF8vK1JpxVEQrnMXnw52q4SaqbcCrbQh7",
  "key2": "qLskaaywNdiKUNG1qvdruMAk8JyJ7fhFcwBgbxhDrMcdJMnaJBwqa45DC1kwGibKyhdahdjQ2jyVF1kuLuvUSQB",
  "key3": "56ppUQgbfjF7LLkkymeTQChhRsv8L9XAJFLrbwNjZuwLmvXMs5sNybJvFPm5hzffbQDkPQm5rGvruqRb2CoR7XQV",
  "key4": "4wLj4gq4rL9tTJvmvsXRApY7rTSmz6nSfN4sayT6B6xVSeai2Tk6qWRoahYUE7d3Z534EdWWSNEWwhkntQhkeAqt",
  "key5": "3JAF1TAd8jg74r62SoN2mcG6BYiXLhMcu37AbfvKHmoNcp6f82eU5uYmcDLSmry9VxiuuKV5ZYvH7Uq92NGuP5Dv",
  "key6": "65x3EvDqMfKETCEavjV8Km4AnSyH3XdtApPTCZn9HeDQUzVmdtyrzcewkqYGTEZEd9D5dCJCnXS3wr6oc15PDunk",
  "key7": "2fDmWNmrpTPvHbnetKcDYGUPyoWYxmrtSYuooxdTq1P7C5w2Syng7kx9hdmsGHetGzonxkPoEw6J2hVxFttGNHfF",
  "key8": "5bh4YBf6FmHsPfwJL4nUR4dujw6Do1GHztXFjkZNtkwgQsX2245NCyw9CcCKQ671LMFCWaRijCsw4N5Vzki1CZYY",
  "key9": "2pww5dXNUdGBfdrd3FkZwWCGCS9bXsQW4eAMbUinsWmuzRjZGn42J4HpHR2uQhHqcqZg9LnH9uovehDyAfEqNWyA",
  "key10": "jvfnxtSjxQCqZhXUvWZNk27Z6NzdLV58dZs6TaWsfgutpkkHc1g54uVQt3Y4EK7tGDh2uqFrXJ9bdJ38UXdiN6Y",
  "key11": "5PCa759a1UzZvwqrLnpkC1zCiVHuTNkSq5G5PjNsdn74PMGrYku29Cn24U9NYK9ek46fxDLRH9rwsZJTDgbtd2vq",
  "key12": "4BqQfLdww6rVg1m44V3hmKv1GSbt6ejwhV4hrcQWHhztjhxwVwggpnfKKPFH9jqopLqobPiDdDoubj7Y5iNdHZfz",
  "key13": "4qmmSHRX7D31mpgWZsx2sQDMxpqXmrTcZP3X1xhFi75iGUqPoN9UDzMuyx6WQdV3SjJUJZkawvqmRSs7iomhBvQQ",
  "key14": "5NNnuZjBtQBrEBS2SVFYwEj4sY4Wgh7PJXEoZJPYXTLkeeJwYbJkTiap1B3WUuxf1xnfSGknwE9n9ejvR93qw1c3",
  "key15": "2GFuDna1ybvzCv1Zj8TmCK1BE6ydQpt8xN9fRQmeaaQ1HEJgavdVXZRwqmdJAaZ6Tdg1tNdEbYf8g8DtQCfBEyuS",
  "key16": "64wf38bGeRBNzBfX1BaNkWrjB9DNDBsbm85AyDA9YnbyFZejHZoPRbvvBhAn2mTuHxtgL8ByUPs6AHxTn1AgHpp7",
  "key17": "52hJt8e7UpGGF7zPntQ5a3potPPQCSTCsis4No7nrz94z5qXcvCkFPDXzBXsgPvPupDh4D5qTuuuU8hbeWeD7vSW",
  "key18": "4t7unZM9rtHCDQWoW9WrAtdCDie7Uh6enN975xbWYXfxQeEDYCNqrRfibYieKpNRaiPDkC3R3NLyRp5iW5Bzs2jH",
  "key19": "5CEKmgEHFo1NdNZD23HoHpgNRX1siu2SZiDvi3R8qD8b4cgrip5H7ZBhv7G5h53SwLPuGfe42ginYkrv8P363bKM",
  "key20": "3d9yQeFSYrXwZyMeuTfwocikvk8U3H9e3CT57int7SBWbTtxkejia56poJ5dFvim2yJmJmZYppaAiPpqPc48Kjca",
  "key21": "51kRhev71qvGCSDnRrZY8sJadQUjsUzWCrvc8AzepUggE8Wb6FCz2gaj2Ts6xnbVK7v1bWuvAwgCHcFGsgejmWPi",
  "key22": "3evEyDUtXUQThCGRbXZhqceVRyGFHCpBve3V9zS4r7YnasfmtPczWBJHr6PVWdEtZdPrcem7Qeu6qgS3g5duM3Dm",
  "key23": "3PYV4U4rXctBguZWELJFNa8eh2V1diXR2WuUo1mjVM7wMkRp8UJ3Dgd7rmPHCjcMpZm3o2kEQRxaxNDmb2LKcf4G",
  "key24": "yYxbqY3MgvkDQeewtCA8FZao55EGNkacuWn7RREgAjKiXLafMAFKMQEYsgfyyAfrvAMPANiDKgChnDsvJ3qFhMY",
  "key25": "4ezt8EZoXQ8g9mTiekBZKoT8gdUJZP2TV677b8poZ5XEoKcCVLtfujdZ3euLaVWBkNs13MmDjZ3KgpcRTECjcfFB",
  "key26": "532PVhKwtKNAvWgdwxNvTj2MKQo214bU1X2HzRJSQGiTCsrrVbZ3GwfaFStkvAketoVkUXXYCqPvcjoMyDZBzse3",
  "key27": "2WswzynFCHvRGhzcXAtJ741H8KPqmxKHT5y3EAKE24M94wdpAbRbPWTWMmtsBAsA5d8TZobbY8CUzFLyN3ZXyNxz",
  "key28": "5FCFzABZGYhDkBTmFHCjiL23zKsMMpVfc7tJsHCZ4ALW4SpZSwbUoBqyLou8qYyGNhVvBY1ntaey9XuFDLZAoYqP",
  "key29": "2qE9omfapv38QTh5gVJJ4amyRJe3krZ2dUTQBSihCCBNJH8iQSPrth6cfHNh4W6TujyvkqRmP9f4skGVFJH3Pe2w"
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
