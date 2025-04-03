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
    "3JMw7kcdLAvR3VL3nUfrHE9q8uoG5H8Q4ybQqgntdkVzA9Y7utw48k4zeSuM8TBwuMXTVR3Z6v4CjtchcuxZKyRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVMayyJeWExc5oJyLwwzpCpmy4GyXsF9W1po8MAVWov7rQ6bwUTXgQKp2xwuFAYS6UUaw9Hr6ABoVxcVFRgNADc",
  "key1": "5jr4fPSVnvLjYJCpzga6NwYW8s494Vq6VHs2FVU7jRu6ZYtZ7emU1Mj58Tqy3Bfw4SE4eSnBBHaDNpvZ27TrdvDL",
  "key2": "5FJWesBwDYRUp3LfApK4opr6e8NUJ4f3nbL52gPPNtoS4M7QQP1HhmRA16xGzf5AVJb5PyPtBGSR2dqTj9MGgzNS",
  "key3": "2padZNdeE2ANp3YK1FLrxpfzZQaYHa6gR1zQznDejsJAFeJZq4yBaP48kA69gXeKBUmbZpuqCeRYxZXbHNHZZFoB",
  "key4": "46M7fodsFAsJVAtd6VtteKAPNtTXjEJ83czMU4dc8e5JrCfqtt9teyEeHR1z7D9hUroKUXYJMW2gt9ezBSfvJGnD",
  "key5": "RniSMreLjswP8gJWmaEwaWyqYw7zVQpXjY2krgSDQsz6fGy6DGBjYa8cYdXkwJHzKapkt4JHoAWaFURLkr1FPG2",
  "key6": "2UHWYrBaBaNqy4QvtaGMm6VXnNTMSRYJbMhpidQak38nxFL8TLaYqxUSwvgHegQSFojawpZnsiE4dZoVJwGJr9XM",
  "key7": "4h3B6cNvagjHPAYJaF2RHxMBC7TJGLbST7RY5k71CHNUCX2XiRfi4B2qiCSuTWYNQJMeCh8zLRaB43YGCKsjwvie",
  "key8": "2oNorZb9WvE3ooxVJt4snCuEzAunc6crxFUNyatperNGMY3HvwfjgFj4pEmcrZKCwXyuTZuuSW9uzBLJW3LF8n2z",
  "key9": "5TnQe3R2YpazwvzGePcbehfNEK6RAJ7F6pS3F4BA9XbCyVhZWzGXnonEjW3ofRtWDgbf8g9W8denu2NMBnowhDP1",
  "key10": "5rJsHmxhgtvQcHY32fmpzEFshtdABxyJ1DCNHEWYipkeeFaUCqLHuwdJmDCk1jezSyhkWUD8h62v9DBj7kgfYBTe",
  "key11": "5Mdg4ZR1AL3fBtJeszKJoDN2xAukavTTgpJ1rrXYUUi5TM6X3mY96vWweP6hpmUn2zm2mdcRDU3DTpvsxFmvMXg",
  "key12": "bennrs5SBrjmPs8SaFRctBkJyoaHGVj8XzvuKQLLViymG7WE7EUFwHnKbfxkXpYxoA3p6bnV693aXmUjjcsnfMN",
  "key13": "5zuiN3SNWzqvBZr21SszhpiqEPUHpgcwe7gPfhLg7YUd9YRm1V5PsadazZCmZZyzwiPdVRus5YLBKUd7KnbNkEGU",
  "key14": "2qUqDUbysF1B7qYu1HeLE7PTxybRGiPHFtTQHWReHktSV4sAAAex9ppcMkcTSFQxozfPrSbQK1ttxLuTodAfsNtQ",
  "key15": "55DHBjnodGoQFnkHLKUccVEW4yp4sLvDEPkS5d4BBNrcbrY2M2FLBbFzVgiMtj9FM3oVGmm9f78XR2iCc3hidfJX",
  "key16": "Xaet2PuM9wZXhdUDD237WJ3f2rNFvoNwLxSKqk6KdXEine5Wsobi7kySCDJkwxnHH8qW5j35SDnNmwPvH39Mfmf",
  "key17": "s9m9cWLsPugDAUT5K6eoteC7DFJjLTJMXVyNnTPai9bacGEQMZKfoq4n3qDBKGPSkRpjHouNuUmn8HQp7oewGdc",
  "key18": "4jxLepXgPaeEfigwh75nahd3v1qK9oF1SPuSU6GgE3r4Cq3YWvqbHaRXsnbQ76gNBwV6gb7ZwXAufa4xSEufyT2Q",
  "key19": "3WRBUSQXriKRY5mK8awhgdLA75hwjvWAytrr2duqCK4GRqp6NDv53v9vipzvs2ELNrsKKsis8vhAw2DKn8pBcoRu",
  "key20": "2PqyJtGvT61R8v647ejAbF4ccJoz9DaTs5FoQQvBwFAqnrZC44K9gQRLdhRF6dmGyoEgZqXr5goo9N8T29bAU1Bt",
  "key21": "4ztePWroXwZRP6gdaQ4FT7rmBmoYTCzdar3ztrTWiyBUP6WXA1cRXnTmbyuBJaZBeMUituPWRUAohcowBQizNhzs",
  "key22": "4FvrVd5cwz7yzDVFzCjPW6MDqhSpk4UdiSg6Ah5zyngQbypZCgu9YWEKdWNJs9FioGeRGmtXY9K6jSuCbGAixV8n",
  "key23": "ejfSr8DA5fT76ta78KkMsC28tpc3GcZgTGPJ5L7z9Abb7pCHvDWHnJLobhUVZb8wWCtxjiY4L6JsVeMf7m13uA8",
  "key24": "5HLwXi71jp9yxCGRvrFUPiZYCjfXZMGW46hvbkq8L5cKP7jh1GecmLx1LuEzQ4h9fZb8aB5QcR4Y7qhwxbgGmh5M",
  "key25": "32UpMKXnqFYzrFJzeBHsFoNqeAaULFeErNvPyzfMfpUhm5TWabXgzDxVQ9afWbneEJB3gdmJKEuLyBktYQ6q5XSD",
  "key26": "5RJNy86p5D3XnzLgHom9o5oMJhKQ4b6P1AcTKWvMeAKJExt22RM19seKNusUFfpffvBHqWYXj9dcQtgevbeBkzP8",
  "key27": "5vC37JZupYq1fNtvL4rb2thSkVS9R5QDNPg8cw1AFhHktEKftiywigBE4NNTXuK1e4fXT3YQRuM5msP35LYsuEy1",
  "key28": "4xYWt2PsBbKonFKaV5og8d4SBdYWpCcXRtxXSu7RXSxATCZiiD6NDNWXJZzrDwWJBP6hh98xRxYWLNgLSg6Ui5Rz",
  "key29": "3Z38dpScCpv1NCmZN3t3wULnpSMH7B4WyhyHNpksN92UgxQHRzGkgbRM8KuUKHLDvTNUhn7iVfuB8W7uixXWEWnL",
  "key30": "49ang8cL4AARmbZ5CEQuQ4swhYcmwzWv8w9swZviwu8LwneywxvwHV7PxpBdAiLDr7PQGtoDzrCM4NyYUg6V8yPm",
  "key31": "26ct9U9KPAcX8hDuuYVi1xAjgKSa8Ztk44nQyMiCFG4cF76QSm3XoK3nXvJgXM7V4cH135XfoLG9ZPD1e7KPqcpq",
  "key32": "257cbGomJJ8EMiwjNxxVPms69bvsz2voXtu1aYUqYAEFdKMEhfEPv7wutyXTukxDeTYj59iK84d3wJ1h7c3DzusD",
  "key33": "5h9amLovioj9C8wKFo2rCGjScNkaLorXC7BFsM5oi1LKLxkjKNyosxJ1k6JsKjFszPxrxWorSzPfQVMvf5owaVHz",
  "key34": "5hZjt3xe5Xs7uthRwx2hEKpqSVQ7YvZy5H2Gvzj4RM6Z3f1zSExAgAR8o6TByxJU5VvfeZJoPME46XjW8spwW37Y",
  "key35": "2timH85EM3f836xZ2ywVSYQmiDY1LYc31tsKxm6y7qZUHXTJHU4XFcdYWsGvgZB1mfctjMGvEWYdTxNKjVgQGqSv",
  "key36": "4xdnwgQwF1eEPs8wGrvfC4d4y88mx5aUGtohdvb745gCEqrYvWgziZXELLLnnjMDe3vePvCxcg3fL7qGC5GZfCC6",
  "key37": "3zjefgYVGNvCNgudmMefjdmbZE1xNHvY4Zn91nBAKCfvHE6Bayn8nYoVKwifbLkpF1a4SSTmF1oJ2duy7bW9mAjZ",
  "key38": "4YWCY2h6NdoNDjSD4owFTfMaVCjUqkCFrcpRsZneKRRjNmcWiivs27AfoqLJFKGUAuNznuGetWRnTZLYRmAongbE",
  "key39": "5dsJmUBtbVmLVrRr7zoumS3EYrYCA1NUFyEJ5TDnCkwJR3Eq9jG9KQLY914wwF2Gui3TDcNcsZHFnK7dyqJmPHkz",
  "key40": "55aQptqEk92Zgcm9CsrBCmaFqwBrbi8bEvnrQPNdVE92SGNCJAYqR4m2ornJS6ZTTH1ZLEVCjPnikejFPDxNYwze",
  "key41": "3raaMFRWmA3yZkfboi7ZVjvjQQQoFQX9YBaogtQXSNbmGYF7UhxhgXzMQfBCEKwKfxoVq2WgUC5Qi5rp9reb995f"
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
