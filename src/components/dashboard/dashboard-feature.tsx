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
    "5PSE47Kn5M9LDXFWgvGJPSYRMSwwrj8NXh2BoXScF9jKYXheazV4qfJmMjVUhmsyHWzqdGnBHxKJHZSjw8nMyoHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iiCesEvCz6sfFhV5yX9tiu3SoeXMZbHB2b2p43NDBBa1XZogYACrprnK1v5QcNeTBdpdqG2cwWc3EjmPtNS4gSZ",
  "key1": "5dvanmJrTybTPLnTsEKKQ4YmvVVJuRCrBtQbbrzHX2orkZv9V2ZcAfpUsFg3dENwnyfQZfhUG2qbCH2jN3QVSqxJ",
  "key2": "3MuLGYh1YyPtmzYa6dJfk17VbxCrLrutGwjd5UZ9qZLKXdjNjLvgkJQxS9q9msyTT2MT6fZNiBBAAnVPysU336T4",
  "key3": "2B87E7iVwfBFF82Kf2snk92RntHQc7xmW5GMwc4oeFZfzJdZhmJiukQ6dEQ6hRqNVmXLANLPdGmxw5hqPkXibMWV",
  "key4": "3eq1h8qfg95BnvZ7WUXgmJg4UCNbqfv4cz7UVGu3JeR1VwSgqMCyHBQpFhYdJrdX22MEMqhTGrBNqQV5BjFJ5yfK",
  "key5": "jYhCgvn1MUgKv46yAjsbNuE1tBhBVYXPy6sba6TPeUW3fBSuVa6yaBxdKFpWKrARbayaiQnYSEXzeYCRsyj3MZT",
  "key6": "H9zVR5tu9dixcRez8VnujaMw2L3qukCGJyt4Q3XeUTV8W6tkdfoT3XMT3FZhY4vGrjiV7YHkxWLuyXBcvxsLwgN",
  "key7": "54cKVKznK9eapL1qdWY4rEn2iHmqQuoponQ2QzELrtkyfDqNUESfK5nEmxiCnmH7NwJJkGSTzoW8276zfoNakZCb",
  "key8": "3pCSb3GM6i74NWoVq6SPCovpQVFHcF7hSDJsCicGsCBdMVdjMxpzHUJuFhQGkLahjL6fTx6Y4sJQGLVKZmK3jHdL",
  "key9": "3HqeSmRbdD17YKdRGWRKJMZ8M2gQwwGQVFFGDjsg9w6hToC63GpARQxBnNnTkfr5SEW6Qw3xYGiEEgunzxt7n47G",
  "key10": "3Vb7APnomc36czMVckq8k6QeJ7q3wUSheyoGA6U5ajMeVnLfgWwMjFojNUzLX7D7fpo1iEFKp6twTACrfPzJYo7f",
  "key11": "3WPiXooGuJaAVyBFaatK8gNcHd1daeNdfz7cc3gEQfNBv9awKduD6Phxv4EwEGCUuJ5u5AqyRbxk2iPGMmzojYJa",
  "key12": "54XSrPBhUSXeVxAXvepJXZ5ABquMw2dAb1d6tfceCFdXa4xLv1VrHubKdmFhJVRznyxS7CvWuKzamViu7CNqTFEL",
  "key13": "H8yWgDSFe2VH89khCqRDGDaJeAmFcnW95GYa5KE8Xv6snUZRZop6SyusTHHDT3GZao8TvuoK3UY9XarM7wP4jcc",
  "key14": "2rUiZZyz3sGgeu5dYDSmLsHURvqM4EGcWLDf8PaLeySPVLGVcnAqFhkNFZ7jMvhLqmL8vJDztoupVXBbTdT1oiXG",
  "key15": "zjvtrXnwdghzUmdgc1g59xzm26a9qGzTnd5mmwzJbEMnh1H35mVEMqBont8kL2RKgDbzQbsM5LkRhGZc1zyTVzX",
  "key16": "4w7L9Rtvm2oEafYGgkKL9CjnDzhKKDs9SJWFMzKmNfqgvPajBydB3s9i7k4Yku4xkit2QVwaizo1ZQ2mVhhfcuBS",
  "key17": "3RstcXt9g7XPXgyNZieG6LbBAB57XBarQA9B8hbjeUNoLYnjwdjUiqnLFkXjeb2Lnby9Mbtv3geJpZqrhDxRB2mn",
  "key18": "27JBpbZ573VWmuwwy5b5s2UzfQUp2oU5bgi76gXegudKRKUFGqJiT5Sd3hfhzzXWSWydGXza6Rt7HHJ5wix6gEfQ",
  "key19": "5wXxvvCFQbRk2T429x8jS74BB7AMY5GhmiC48dbRr967KKdFp3j5LnNYREg5p2Mj8ixXkiozcfkCCGutdqa5FZHe",
  "key20": "3EJdBDiLWKq4cDxwQr1UVrYLop2xjUk4mxZDFuJi3GXkLugLze4ZYcjHpks1dkjeRteGCRJfuq1GBu3mnkzAAff1",
  "key21": "3s97MGShv74ccKvWJtE8ZDUGYLsM41QWAzzzZPYAeEsREdr7UK4UkxXpvbyP1n6wPtC9RPoCm9daEg15U7xXhvbk",
  "key22": "2pknFKz7wVNqkv1HyrRFh5rq487Nh3vL6hcwniJpnr7hm2fdCfr2ojXK9d6urzXtHfESqGbo5ECvh3zAusuMkL7V",
  "key23": "2rc8SZhDjjW7haJTg7uLrnQ3GqdMRwqGicWeWimGSZEVSk6P1DBJEzWkuj4skQevaYZwxp1Pf4FsrcSD2no9stzo",
  "key24": "5CMfv9BBnQbbRepy9A4ziU8JP9Y3vQgKpdd3w83fLPV6akuxpzLn1QFV7HpJazxFKQ5hktepAERHUYaZd3vTUHej",
  "key25": "qQYwkk5tKyz8568nhMkicpe9hwucs78SXK4xoM3jiJ651b6YFkrHKJrN5eY6Ckq6Q9wrZ61JdhqkKGmrnyJX6j6",
  "key26": "ZaNqPrhNGfjgW9KunPNCkskjRims5NNkDY7PzYBLLMr75Z5nkNzQSyC4uLybQr6P1s2tGBY5fzSJnyF4PPpNKVY",
  "key27": "CwMQcdLZXHRY95YYMHh4YoiyiDvgxZ2uqGRjHG4PJxYdetXxeTs7YQK5K9LxrZ85DwpYmu7ZxmdND1Xwgnwj1Eg",
  "key28": "3GDC3mdu9Un5hbJyNRteYpTfbPRaAS3oMbfL4TDjMGjYXQCWiy6GJNjaRZSMb3YacUi5RohqMvA7RY9oi3jCCGBB",
  "key29": "4JQhbPKuRCFB91YBFmCa9ymwqLT2zKjQ5pnQ7ZwiiEceSe4wBN1NFJ72smy3VJg9T9BF5HUW9ye3Bna4TTtqow9V",
  "key30": "5x7aToZ1n4R1bWBgstStSH78f6JuQoHKphrVYon9xWammwMKDHBL6GibH3LWjzZZu4jNVb4x8Keb8wkPrqULTQAY",
  "key31": "2fYSNfCtNTpV9jeqw5J9uFPyGJNTFAZtCNhu8998ji9JogttBFjo3sYCRWAeamjZcgVBSyt4nvoXY8k9CMtdP2kz",
  "key32": "2XpttyYHrtvggs3rsQoyonKG5cP8MQsEy3MJLUA18HzFYVkcRybhAJ4FifTZFrQXLed86caoRuQfSnPYjvkic5zN",
  "key33": "UervnGW3PmHfBMwCywca7cSA6Rsx9qARCxXEKHmbo5kLVNS526XMw7LEiEABDrjiB99TZrKSPdeuq3qBHRN9LF1",
  "key34": "4UQJn1hs9UXPFQjVpDDuk77norkzewWxUCo6VpFPQ3kzmK2G5McEguivXH5wnXeNR5iVzPZaqBgEY2B6NZf4im2e",
  "key35": "3Si9N2DKiEdcPoUaETDRtBne2YPU4u5EeghZL8EQDQytgRNcfqVxiP3ock7RgmixJThUgGGY2NoVjVdwAf2gdzre",
  "key36": "5PQDbwXoTYbt1Sk2RuGYXUPq6GVX256Q11YnXMKjvhwTmabJ9Kc8KjMUSgzDcayKajnuAcEvXjqLsTzDAW4QJbbN",
  "key37": "25NUZj1jNHWcKkm4qfH9kgUpB6tN7cUno52Gw2tdpDvq6VrnxPFmtr9VNfeqcUdPjfrM8J9sfm35Z3Zo5sEDq3zc",
  "key38": "2FHMZkFUyRx8SFNNzFQmjyY3G3fnZos3j7UtxFDhHcvMV4Jy3tr1qb9bBARdqZS18Ta1RQhv2p2HLnQbGw4nXFre",
  "key39": "3Goxh83dLhQuD2ug4CM4HWfBa6N9MwjeVrfdkvxwNwsZPDepYoXSjwidRhMebS8aNHSGzSU78CnNCaTBh3yjVBEN",
  "key40": "NrqP4L25KTmnKFnkBnGqGhcQ14RREhdYvr6VeFfUpCYPNtgyCAMtGRKCVEYM7PZJh827UoXbvJF3pN9KtDppJgZ",
  "key41": "4SesJjzRzf6sdvN6TF78N6KHR3Ajh2bNMSh8hnDNvdEHkadzUgEvzuxvbhHc9PtoxFYG9Rwo4DAKs4DDqypXtJHt",
  "key42": "vAQypV8mF8wqDcTxfXBXR5VwXw8uHjC1NXFcYmzXUAoCRrbNxed9JkyCPV4iSKkEMdJECdW1mWAy1yMyW5zJAMM",
  "key43": "3ZYKyfXH666ubkcVmNoeHS3PNunju9MnQ1jq3TjCAeYGrLPvSdjJov8ByADNyY7S2aCFd8QxxRpf7sFvGWTbNYqi",
  "key44": "5otbwvvRtTK6fVREqQGSucxVPMXmAvGo4ZmQPT6PQ64uijwtaWcutYrxQyL4xLLrn1XK6GoDY2wQqay2SGsUcPef",
  "key45": "5BaF8Rov288Ueh5ixzUrL1zUXprfDfjvPEV3ATgnAmBkU9LYTpqAaZvmHKawZuMNcGyu4DWhNPZbruKTeuHDwvGX",
  "key46": "2yoygphytE1kHRWkoD7fB1uJZn6k75UnZyz52bFvpsCYUssGJXwJmdESrHwRMKKuSeYGZLC3zX1BrDJ8dvik1SUS"
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
