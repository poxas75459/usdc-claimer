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
    "39fbqKQFHAzNv9vcQBftA1EMrK1yUQRiC5bg8UDnCNhjcuiynCVfS96o6WXrRKNs5AQA638t38cESQX8eJoxGC4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7kPSwBsAJ2yXTGW7zHStzEW6h8Qe7dAE8rKSi3qBmRRzHx5aLjafbr1h3VAErT9wm5inhyAdjWe7D44WSE8oWQ",
  "key1": "2BqqaariEeDkWgmVrJapJujj6hyyPVrCskuCFjPt1cWoSzTKbwZsUjonF2Yjdnjie7riHSkawHVEQuaMRp8ouAuM",
  "key2": "3GuvvViP4S6hehcz7k4ejPa6oLU2CyRnEogbFiHNRVMuDap8xJZ8o9i78RhFgHHKypJxbCRaZ8o9McMqhXMGxohW",
  "key3": "4Nsr6ccAJvVes3cA1L4GG7VLPHr7ae4DdNLF4ms3KvAhPtX2R661tgRNnFbbzByJpifNsP9iJjutC7tKatUxFo4u",
  "key4": "4N1p9dBQaDqFEm7ht4VUxSNqPDon78nadAeVqNMsLFUHt5W7yZZXcceqY5JWtcLCDxRPyxqNa7LqM74RAjKoZhBN",
  "key5": "5UPtJrkQyDPn2Zpi9kHfUTbismCk4EoG5CTfhcypcmPfe56UNB9qxWmj5x3Fph91bmEtAUaNRJg3ntMYvs6egVDA",
  "key6": "2T2RMniifQy7PjNAtb3UUCvxCueHvfgjWgxfaGf5d8y4Scgedu8FVENnNSbwdHeZmuQj4gvRmsxgjLtV6CuqZAYH",
  "key7": "3Arjx3xqkb3aEBAD9o3WE3nRCXhkQn4L1fhBtC7uk4xYBs3hsJ7azoZZopjURianGvKqJ6X8A1gTECzdJCFtASsL",
  "key8": "5AfgidyErVJhsTznwAHPAhT6PDhn3yQ51zjNkuKsjrM5NxrM2C9wJjGqKjocumRPBg8SXNQWPtJjYzoq9X5YDpap",
  "key9": "5ucWmz4MQ1MsiFYQ6WNe58qmmFcV67YuzpKJpiamWkYhBZx9eJpnCSgyA8yYMWFCdXCAudBaDvesqrfE2V6CFzcw",
  "key10": "3FRFc1sxDox9YeFLYTy1vKtwbfp1jhLHPHYW1kGav9aLv1DAijNZZf6RvXsJT5w4gv369p23UKaU47c9NV2vmh8o",
  "key11": "3je7NAiejwwUnnYCYGfxUdrHVMrovH3uX9Ps6QZUqCoGK5ninkFxrtFAUnARjgP6u518eYx1XqSEtiMxufFq1opd",
  "key12": "2m6bFwV7ZZZfc74tYDLrEvehnUhL23egm3M9mXpXzeygvzx784SCTTh4QSUS8XFuMFFcz3tCLk3hVUeu8xDUBSE5",
  "key13": "48V9kazxY4Y6mX3HecobyMw1Eabx1roakuhP2HRLy5pChQkx9WffQqw3DqtLXUPzeMfpEAu3KRUnS2BvYnkeoJbv",
  "key14": "96DE4u9UXiUCwSxepc9MJf7YNLJDCyD4irzy9Wdt1n1PU9aWKm3ZNt3xVkhsogCo9JwLtiPHeRzyeWcWjFqfAWV",
  "key15": "5QMUTZzciN1avCgQVQAZN11kSTD2nodqBccdtYhjkEauPEKxQ6AZm2ceruHzLmHfpRXjrrpKHi5arfyK9DAFmQN",
  "key16": "5HmgXKVbzgUhd2CfRQv7Y8kER1KJBXmLXxkg6QGw9ffTsEnMCB7LLAcTServGd4P1B7WNqXgmjhV8HwXXPCNQNgK",
  "key17": "3CwA5X9qoK91sXaPQxKdf24Te78KVpuk2zRMfRvVAdZ3hVhVCSLZJ2kj3hgU8JmnT4FEopRp69NxdtTAK3J32fg8",
  "key18": "4CSuXmN7WzbcyM6P2ybeBUs8Fjaf3mHVkEn7kV8sejLqCuitewa8R1Gk767YCPuCeTDjz5XPVwF61NwNAwsks7Yo",
  "key19": "22M1SM5qGQTA4h5c8Y3QE7qP47DAnd9nXhRdcD3UxeuGrNtSfsdxRYnJfXAywwVLK5BX6CP4EGRueCaq8SswsNcf",
  "key20": "28Pi6v3CB84hrW3ERriLKwvnP3NfP4VdMNeexbkNLeEJPTetrCvMMVm1ZNVraAfdgibVmYFwyM5VkLSKnuwjwxLq",
  "key21": "3i9XaRH89wuqddxHta1FxBGc7rQizntCLA11LCzUiHJh7v2KD6rzZZf2RpTUbzscagkJJ4KKNJqJjXTtHGc9HabE",
  "key22": "5cuABVFUY3MVb33aJvDuE7DtHbt1N18FToq9f35qyX85gqKNbaxqWrUYCYWJVBfCgFFyYqraKkjTAxQsPdudkuaa",
  "key23": "3K8RJQKCwEfsoCQv5zjqPbZMjrsiYN4EKe228pytyYHifz3wkox17dZCnHtDUJzm6bkVcVdKudx9MHddNUXfwekL",
  "key24": "3CzY1HoxLUgL46R8S55Vk6nqFbGbuFu8hpaBnNpmvMMRnkMKJKA38FeWFLw9vKTWG68vKrB4LruYfgmsoYyWLKTn",
  "key25": "TrhjbtRf9cQpVxvho1neaEGpsReEbVzJizKwMqkNiSoU3sMevjB3voDxErcxLTgH6Q8xwLSaDFmvQ1PbYBTmFSv",
  "key26": "45bDBQhiKkbRuirBA6K2c7SPf2C2edv74ipsSswfq4BSy3SWKzerUd6tYqXruZrFzoKbe66zy3GgCcxcRnxgfyVQ",
  "key27": "5U32YfPtWavdAKbxPnd998X3kxRXxb7AZbeK3VCfxExjVoLhtNMiV1z2a2jaiBdsNT4DGKBGuC9tpNQnotC2M8om",
  "key28": "45kVY9cHy3oqoTQvzEFk2ee3ENgs9YkXb4KV6wDF7EGKp8K4wnCbpLLB7ugKkqsZTPUKGwyUcWyi6eV2jgdqcCei",
  "key29": "3AyCKFBML1AwBjLBkbN2svBoCRN9VHmeGFcLqpzVjPLp9dL6uTzobfinJkFJX6zSXPkozdmCqRQbVu44iyjZXyd1",
  "key30": "2J7B4p18rz6HzVzmvvHmQTPMU2PS7RzhXB2actVtUHFK8Z1FM3RzDeNbvBiNCHPKk9GhjN2L3s3tKLaNEtUQigbd",
  "key31": "pH4VVyMD5EaUduXpdCrCqxa3BRtE28cRjjNwuQmjWzeApGdPHN3NUfyW5JccZxYkpqvM4dwnfChGrCB4WtcY3pa",
  "key32": "5pibFJnFts74wiWGAKaZz5tk7pwC9hWUwgcoDabJfyN212FM7BREPwi9hEntsF3RFHzvbxYC4KFaDQ3GCYzACD5L",
  "key33": "3wiR3qBpnmt9XM2kD7pkzmxq4FSCVJkCw8FRcihHTQK1wAbCcuPbHhZWhnhpwhtSqJMJoSZRrJGycfCEj5mpzm5",
  "key34": "3y6uV8PbY35PineapPeu8s9dNvXaNtWwgbKB8MKVSgXo1dRcXYyUVoE5m5omvw8KxpqYLSdHtH24UgMaKy8Dv62L",
  "key35": "4iTimXpvUSX8aQNtPLYegUzqNQxg5a8zxYZ14MBEEWBhjcxz2xN7uiNrtSKi7DdYpkYpizRuxSdw2WBWvP3a8pFL",
  "key36": "QBDKytt3emRfGx7Pbo4gPhyiA8tq3kxKGTSJ4RZXkie9w4DHDf6pmQgWvSEjAX3bHPg9F3TwdGXWkr38RZrUgvc",
  "key37": "1QzAGix4dTtyWq53dJTvwLkyRQ8BBkNqQaVCNnQQCQ82TMA4ZBgqXDZa5RmvGxUqinww2pU3saVUY2ABULFjjA1",
  "key38": "V6La1PE23GQE1Jpoe3U4FeGA1XrsprsPTb32Gy2QkdLDWcxN6y6ga2KYwsjqQLyAn3nZytxsXaP4xVAAjofkP9C",
  "key39": "2kKyvoz3ftKXpdCUgsExTrAn5sUZRVBtD9txEK8QAEzurVCi3GZhTsNsuLtTQ2MQrABbGHmgfQpoDLGxXkRDCksS",
  "key40": "4AQaiUQENCxKLPoxndyrAjGkv5NrLrFQTbKBTNca8VTBEGD4rxm4Z5KWj8iEABcdnFjcvNyGPAFqnqkMkcHFSTs9",
  "key41": "2RoWjd1mxjuX32AofDpdoAUqiqS58UVAhX2jBZLEwGeJj9ksE2zBu13G67Bx5re3NkZ2XbYjqHTT2fhdahUr1j8M",
  "key42": "58e1J95Dm7MsnvmSxGhwc4WnoBD7S79qN7rw75XJ2FzTRqykYbC6zZxUEwbXbPVuASEVZ3cLK24h7DhtSWupwLqZ",
  "key43": "39VMAGsbqRJSVddji3JxpXfQKKkpfTqYHAS1YoJuqGoJBzfUCyrgqDxDz1dzDPC8G4B8mwMs6e2UbPtjfiiwsMAm",
  "key44": "Lq6Q7Nr9d2xpRv7bFa2XzjEgknmLxsLzeSkC8x6MESWFRYsj2Wf3tfQX7yb55K2FvvTN3jR5ABwZgb6aLxkxkwF",
  "key45": "4DRw6124XvH7e3TmTvsjeVNHPcZ393MBWZVMj435CixF9Xzq5KHrLzeshiNLHmtwAwfQMFzkFicZUyZJBbjkeAfh",
  "key46": "2CyNXcN3rNHjx7Gja5asRZyqSNAWUtc79hRweGnZaepu1SUu4C4pTU7yLkoZ9zmPJ5r7XjfRZ3KoDQdB34iDZPWQ",
  "key47": "25T6x4ADD91tngmTG6VntkorZ7FJUGEjkt8ZVHL2JCXY5oX7H2DZgJWdEx2odqduQLUXNGh9vstXnymupC8N8vnN"
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
