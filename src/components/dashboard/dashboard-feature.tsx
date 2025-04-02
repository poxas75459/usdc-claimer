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
    "487dupeSzcskvi5SBiyiby6zJRwdgqyX7B76SL4yGxxyB2SEM9Tj3HPusMTPaYgMH99PXEXqoDLs3zLSHTDXXtPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5nPsByjBhjoJrGjtprmcbTwy963ambQjXimMFxZb9CyzdALdk1SYZDA9bTFnzDU19xKoRMQ7wBhhSZ6SeUuSz7",
  "key1": "62GTHcTrMfrvw8EiG5ZKieUjorxtxwz1ndXB8incjJY2kUe4Hnf8BThipKGTcEwinv5YjfW636B2LEGSHjXisxrT",
  "key2": "yR9kqgqndbJiSvMkqrPCQTSAGm9YinEMN8XR63xu4BrgZVGpEhBunHeg4Q1x3yzM3ojU1CDCNVg8EBb7MYLaT2B",
  "key3": "UUwvvYdkjqee16dHymfoBYW9W2xwPA6R3cEy5qi2rt8kXHoxNPvSHhtprztDV8QWYgvbPRkqqJqKp8kWApp9A3b",
  "key4": "3imcVQ3kwHU2ULefEaDtnjMgX3UmCDcAnYWmtmWK7GGEj1yKhqgHzy7ssQp4DnP987qLT8wJoQ9qNNXw3Q42oAEf",
  "key5": "5ahfVsGFMgcBZc7hzSNbms1N3Bbr7jw6PBG6e2YRyH8yLTehEZwQ4S1mXKENh2Yj4gcc5M8Z2vu6ASvdNQQgsftW",
  "key6": "4gxgFuGL6ZLKUAHbBDqe7Q171beVF4qCMLz862hqE8Y8WePDDyn2hopUZP85t8q9pSSzykPJt2D21CLDge2kF5ej",
  "key7": "GoCPhKhBpJDZu5uWKUVTadfdqpwdv9heSnhRyhecu5i24NpvLwZritB5Xunr7ahvi6NWoWkZ1XhnvvHuasoZKW2",
  "key8": "67JCnEGSAd2bDFE8TybVsxQHqAKJzEyuikCBwiE8WRVzb7a6JCxffXAwjBptFiwWmWszuq5LmWA7cMUgy6cFhj2D",
  "key9": "5hqXfRQ1CBQtrVxNQ1ZMv3JEhCvuHj36UTKZFiXXdVR5zVWY4JziDxZ92Mq2GUm7NeVwAdMhKJfPk4krgx93t9wH",
  "key10": "MiGxxFAh6NymNQEMUsvL6kk5UVFLFVP39qQa6WBAUKzonREH3M1Dx4Xa2njY6Ciw4t5uy8oyuf2YLL9ZodRhVBv",
  "key11": "2F6VY7GxNiCkMG5bxtwDX7KAJ24EM4Z18dxTwv3oNQCX3dB8BWZim62WkBZuPgk1ym34vcpw1VM1ij13PJGvXYPg",
  "key12": "2M87Bj5KSdjGa2SnWQ7gF46kNoureSd8oVrFuKDGbDDahmVmfuPPC9zhv31g6YtWSvWyh5FREB6RJ9YU8C6wUGT6",
  "key13": "5HaWhoG2WyJN6CGqnnA6buXZ4w1eGdaENwnZzQRB85wFyjqcK28s8qK1ftLB4LwnVmCKNxkmz62Fvr9b8EDSS7zk",
  "key14": "4wpTs3CahLsz8LqDBKx3gXnMZ6bEbE3rYrckrpJmoBD7S1vfB3uVW3G4JGX87VFYsWD4Zm5YrVhFoHtGs3PV9SUv",
  "key15": "5G7zt4HSEjvDn6LxbjvEWxDcrbSqmvUi67Y2kCeTLJVFvrkk1u5SK8UczCKT5Q5REAJRse9MiHkEmpkN5qU6fbbn",
  "key16": "3or9sEsTAzxXrzdTs7DhykVnZbGrGN82DDKkFpfXtTJRa9caxfJb6YNnbfcg9YzophQVxnUhXemqWLEMm1EPgDXw",
  "key17": "29w9iNt9rLfnsk2bvXY4Ftk6wxtBafotPrbAHVDRUiecqrej5fHwsBjmXtrqQHHQX7cxTXrPXoMPjtrkm5bGg43Q",
  "key18": "uYmF5moXcUgAHNZ6eGzJdq88bvxaHVqYYFwk3upEvcikMiwidYYKe9r4bLfFaeK8w6qW5pbw3MadupUtVdhLMUQ",
  "key19": "4r8SsMVAa3YsgNVyBx1wACZC6tNrET84uYjtBhU8dhbo1rHzn9hp3EN7ou44psH32xeAAhzDEgLkdvbBQMQr2Yim",
  "key20": "4xPQDuzxYbF6mAjWqEVrRwsChyojoNAbCFt4ioWkhyZmemboYwwA98HKumLq3G3G9DgpvFVcdonZAGdj78zUh8Dp",
  "key21": "3Mj8GCs46ynCV8JYVJVXJiraFAou8qu616jPWbJqmUgarjVbJ3oV6fUGchrGEB7QBj1iif5Km5ua6bPAu5zVyFx8",
  "key22": "W2yqU2FJ2eMYB8FxGBxq1BQnNGsjEDFFCRY2GHczPaC5M7135c4C9PGhVoA6F8CqQA2HU2wLJ4CYMwiuC4GweHG",
  "key23": "2Xb3RboRtuMAHarTC8zqwXtQ6c3ZKvXXcohgci9FwxYVdGQHRbVLXGptHwB22yCy3vwY5vt7QtEZ167HAAAn7sJQ",
  "key24": "4QF1YASi37H3QWSfAwB8dbGQCnWpy7hZ7AZFecbSGce9z5jVii5c7WDBUCwf29BGivMmTVtJA11NDWk5jM4X8zSD",
  "key25": "3x2ZEcBGzN9v61QTccgnYkdnLgX9uGtHwi6tJMKeBJrsATp4UkHsX1HzvsnjgvyF6CtgTVf7SuCqK9kM5MVQVmPB",
  "key26": "4q58hXqzWL9P9gzMtpJvY5tiBSYXNV9rRT6CFfY9evSEsM4r7yxdGqGaAPAwXf1dJF4ftJspKEQmAdhDx3LAZS8x",
  "key27": "241o2EieNTdpuEewGBhmt2tPEwU7TXZkV1WjMw9svRPUkEhtHWzU9Jk6YS2FjchfQktinjfpk8g18cNZ7DETthe9",
  "key28": "4761L7tAxt9FYvShtbotsJE1sqWH4Pnipo5zcHhYeR34W5Y5SJB3SHiPpDBwq6XFfLxAV7qGCSQidgdaf1ebgP5g",
  "key29": "5A6KbrnBThswFGuxQu9w9XvqFYqcwGiJiSfR3xiNbxbtweYYpjmL8ktJ5o7iUW1RQvBpvFKyg78rTxc9sHL9neWQ",
  "key30": "2YKG54cp3Shv5ocStk8V99qN9DciupPruTq8fELERzkBsf2XEK5aypP2GdRtyDNrM47t25Y3ALZnLpCNEo8PHJ16",
  "key31": "4CuL8a9qjLJ5tHQ7sc2q86GAT33TWuHLB2HtvQbrscsBdY5udFckuNiMqqUKBgXhvnpVrDhhncgfDAn6sk1dMeQT",
  "key32": "v8hxtLoitHnBJmube5RCWwmXyrw8zkv8rdjANbc9KKfThYGQo1JAMjDJHvtb2axd6BaLWKHrdtfhwKSSFJ1gPi5",
  "key33": "24DHJf7iL4cTwi4ZkKKctvMWbbqVhGQtV3GvC782jwzrJhx7XpyoVGiTX6DjLigzsDyDumKo3tpQR844CVbRx9tH",
  "key34": "QBjwxMEoaGrhuHmnLHUnaNdj5PHymfx2xCLCqbyz2Drye7VaVYArp5AcE8qGAU4vxpE2XZgPiRrdw7sUwnZaAXU",
  "key35": "3gcQCHHLyfu8g6secrxUTTABAf9DwRXD8PcRe8HhDYb8EgN5euWKSaCQJHG6Kif9B2XjhZbcfrXtFZ6tKBkzh7b",
  "key36": "5abFVVfc7c2h4ngiXdrAgeM2gWeR4JiUQN1Ca97QWyDn917M3vvM1hKka12Ho6kAMz4ViT9qSmeuJYgyqbJXKFmz",
  "key37": "3qE6idXoBhTzizWAmHXTGtsYgWvhXhpu3Uif4TyHJxjNGqNzpWJEFT29w5oejfsAGGPyL9zEGmtU8m5GNhJmjXzp",
  "key38": "3vhdNYzfMmig5ksbADYy5ZE1PaATcx3eYm1h4CLWs57adEtrkNvdtBY2TuGbqQydRpKxTuQ9AXqvdphBpS1V632F",
  "key39": "Sjsa2ED7dnstQFoASh1uATSY5yZHhhzy1KkQ5WHjbAxkERPCaKCaBan8JiDHykN9p8y4RZQTptc5wqaDE4rLoDh",
  "key40": "5DDwCRVJMGVrSBA1jmYZxPguMWfjNWudHkCW6ujYDPGAG3vBJzdFNHuDLy7iBt9qQzTbQ3uyudcoMVJGAeKfL7x5",
  "key41": "238HHmowPgpyJi2qxGhhmsGwr5yURNvFTXqbJB2bLwzd2TBPxDHqftmV2n5EENiMq3epgL8SLF4MZRuJbj4r8XGx"
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
