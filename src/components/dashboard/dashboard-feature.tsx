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
    "62bZSiB8spvzK7j9DhfkDeUQVcFkUzTQDEAutujVxru6YovChYcReUBpf1EK5zBJ3b2FTTicWB4Q5bG8bFyqkZg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GD8b3xge9Ny9ChMMcGua2Ce7FRR36kG7utdremRX3k4VYictZyYNjERUL3swWtPnBJsJ8jWGSMcxbv9uL4S8bVu",
  "key1": "5sFukQAGXEhr5vs59o7F5sV759DiGiKrKAovK8Abd21pddePsoNVmLxHYca5F9DRGhgTaWX1i3k4Bdnx8CjpEa5o",
  "key2": "4HLrjBfWbEHNCPZ4e6EdCEzkSqeWWGZfT5UPmeHB4tdC4ivJdUaZMa8X6wyGPWzMEJVudhHWxnjUWZqwjCUQzXaC",
  "key3": "3CBshvGbCQYuWPg1i14YkmGkaGVnnJaBGUhdbp3jsDQcy9DDYyES1PpALwZ9oWJjryPhNYa5ZgB9ePVX64LeLy1d",
  "key4": "57DJ9ZmJv7z8aDXfurXQAoxAxutV49XGdxuXR34KQakubDbPsqaFnMfdZ2HSEdC5mSM8VuQ1NK76kQny2KpW2AHN",
  "key5": "BCyn8hVzQc2wQbSdsr3swYd7vZjNM29SCHxrmXEUyPN9MnaVXmN4SahYeS7AZJGLauUA8gXpX5kAS97eTW8UpDV",
  "key6": "3BnN9wky3GrvDe36FZdBmBzh6gKtRvh1QHcecJ4XAqiWgXJFSVZK132z6t9bRhyALXPbAMp4EZd7brrmSwPaUCnn",
  "key7": "3AgWQdGhGtD1CraZPEgcodEwSujheSmRLFMnL5CrwvirYiSCziFUQjVdnM1R9cppExUuQsChA8p6TGLStRpgURrM",
  "key8": "5xNx38CDFzd2WJqFfPiPzfU4dEkLURno1BnASvk5QBDqU58WduYQ9REEo6bBLFReB16e4A9sgmqgi6MTQaHJSeth",
  "key9": "5fdRkvfYXXh7HaxyZPL4mZz3drLW5cCnaadbQqQvzrofTemgeAsCas5nweZNZrTZ2MCwKUhVRrHBNkbbrTFB7pnS",
  "key10": "3fxiKjRNEKkfbAPjQW4XctxhNpUV2EWQgZuobpMQJjNQWubDAgFDBQzYs6rZkbFgGTyst4znmw7SV9SdcRFnfqop",
  "key11": "3iL5cwXgC88SUz4auZqvWNXJioLHB23B8kcHato76tQBReEL8HCaggqHpYSKGA9oKJSGg5LCHe9JGrmsxfzA7R1V",
  "key12": "3MwmfVtGDePYj66foQmJV4Mbjuiqr3B9QvcDmb1BZ1wa25pg3ByQSHZDD8Cyj9VsQ7EPNua1QUzg1kzKv4qsE2Bd",
  "key13": "5rZVKxkin64p2g9gyocKjqNDnvtmc29T7aKxXmLFjJawxdpzVxNJTKahUZcQPcg4QzVLPmwN4kcgQDVPdzs2886m",
  "key14": "MV9zogkzhUqws9vDPQDP1sTffTmTjSmUJr7HXE5bT3P8BRJQ5XZU8KZY2snWyNik4MiAvaCHtf4PdPVCfYecxCc",
  "key15": "36qjJKo1B1Lj3Rc3WamY8e3vAsEgTkn2vTbg3FAGCAAPGPjeS78T2qHaPwPhF3mRBjTDaWNf8qyB8GhKm6BWtSqC",
  "key16": "5hb5a39Bm6vdi4PXUjg5qgowf5SJNNK44ussjb2JFK7ndKGfRw3MkzSGtx1F5DMbW5ZMsixspgpE6zZf8qbNZEib",
  "key17": "5pgSME1VUjT7MTrxxznu2oCNhDAEpP4PCrm8Rr8XVjHBjwSoHtNebhS9GWPnTGiNdwhhXvV9gEXBL4PScNP7VCp3",
  "key18": "3L7Qid2QyxqdFn3GRwBeZDVKUj4XBEs2GBPR65zN3p9nLx8JDoRwFZKid7FvMmZvEzXpBjXk7buyEYxoxcH5516T",
  "key19": "S4M6mPQp33u9jRrmPv4XsC8vXfMWGFP84UsJAkvxqh8k9CinBrtt27fHbMTJFMXz11AJqSpekMatkBVZ9EVPgy3",
  "key20": "2nsu5PjdfWVsWnAxvLJvW4aQSJ5L22Zupfftuij52AYALWgVgTJWVHAMz3R6nnx2RVoYYd3ExJeuuZiNZFiCDu7q",
  "key21": "3AywtJZxnbo5hZn43EeuC1LYEYVi5Gx6QcrRy11X5zcLbeQRSYT8axdXoX3qFKVxcmmegMZw8BArsEgh1ZPiSqCY",
  "key22": "4xYrCsexmEGGbwGiToh3k3DbKJcQnqFJG9a6tPmkj73hbZPujdoBNkg8GHG3DhzprmCYZLjWeB2iRarnPm3s8QY5",
  "key23": "378AEwdcjQhSNSZi1qzyHYt788ah29xtosxWYUpwgDSXtCEUfEQUm57DwcBvXb2xAHHjwh2oWeL5d8UkeYHfobaD",
  "key24": "2Fnr46AH5sChrgram6YtRBz8iKDwpfawqmD5B2fT53Z2FwnZcakA9DWMf7E8tE11GJHat6iuYT2CDBid9tWS1jmd",
  "key25": "5fowWdUrpAeY5dzgccEFfBJb5i4SM3AYauTmMFyHiU7DEz72mZFVV1yxSSaBcCKULXYEwAt87hRpr1ww5oUvEwtd",
  "key26": "4N8x8VzPSQwjt85jp5UdbSBxfMZAZ8WacEU7tWXRiVeQ1FToe1h7gdsXjaNkFA9tmgaRxM5xtooBeM7P5PWB4Hqx",
  "key27": "hXMTsAkvAapSQdJavjnBxB3zeCpwyiPQKKHkc6USZNYFNYAnkjE3a8aHbKAuh64qd3BgWdhmZKnypoGHzg9tqkR",
  "key28": "3q3hYvk6N9wSKfzYr5TzmKwEAp4jRCg1E8sVLeQ83eAENX3rPND4ZcS6pQ5Ei18sEcTzsHmzjcfWXR5G5agzkHUC",
  "key29": "2L1HMs4d84LVqxHZGYf7AH8AMD3x5iktA5qzyBNbQyDfd4bUTiPe3gM73eroa5yfhMP1mMZtSHy1YstDziB1XYjG",
  "key30": "5SNGFofcG717fco55rnpuzberWzHDriAzrUeafy6xzMzdX6PBC7Ga6jeaMrbtjRBwVmHTBmks4rUqLiu796gKGLx",
  "key31": "532LNVvp16QP34TzcgATDout4bBSAgJ6qh75kweWr4E8jK8cwCNikc4faiTAU18fyjuZN1XcaqDSkB66gQMLCENT",
  "key32": "LZPhyss2V2DsBPFLpM5m2SFs9xNt6A1QeHmg2QUDP9pRwH45dx3emQ4xQea3rJZzMyVicRpCQE8JUTVsLnKX5tk",
  "key33": "4aAEdhvwmCTnVxUFF1TQ9WkG6ba4MEGNakAZwx71NsnTYdbFDYnYgmBhddSHsN4viRKKTCjGhDCEnUQ7puQMAFAf",
  "key34": "21JRo4T8QvizXUamocioHMzWN3mcWYf2j3Lyqf6dEJjqou75TotSS2nwTCvRa7AXArRcLmA1gc6MKsxpwykZ6vUi",
  "key35": "2EkVhnJsNeP8Zb7uCpuyqH2XzWawwSjvykQMGQU2xcebPXmyaQyRk7wLaHB3xegVn2UvMLg3efMjyz9wVQsiFggs",
  "key36": "44HpuTmvUhVtzaRSrsHRa9DzbwUMDi7ymw5i81yvsCBUAZCpvuGGyyUG2DzTtXKykjdxWniojNb3FvA2FfzkWwxZ",
  "key37": "2S1u3b9s5c9eYMsB2xGxixb67dsrDmD7Ft3oN8YVQCZCE7WiehtDLgu1C4yingNLkdjMCHCRjHRYZiCswtrihSDf",
  "key38": "44hG3zM4xSqPC3fSFa8Hc8mVroceevrse9mETju9viZECrUuDK1ebmcvv2H3Yhn6vTg2nZa8qM5BUHthzBzqTyq2",
  "key39": "5Koaryi7X9vXZKG26gJhba9Bk48cczUZnkAEWzM7eUnrgevUuUhguBmwsVFGCoYfWJkgNwLUcrrPGA9KX8vQRHAd",
  "key40": "28ptNLfPECeHDJerJw4EJ3AejGYSVWA2939Mv9yJPkJEn9gwP6RrwwjtJSg7XonVmUTMj3PBwyK48MDv55Qriyzr",
  "key41": "4FGbdgXNQhx5BFjkhGb1VNjq5raAKt2uL9kfvJpmV8D5mJZH9XcBZEnGHsJPDcvJ2vrrHuEY4iUfqJFkvYLMwzK9",
  "key42": "5uqyNG3LeLb4yGeGyLdr6LBpAa36wJJQnXuQSe7Q868foyxwPZQfqpnqjbEFiWpJfGGWw2s7rwvmTCwcZpQ26sMB",
  "key43": "4mbnqfyupAH4R7mBUZwCgXPJwV3bf8Qm1N7NStrCVMtFC2fw5eUE4XpHGK3aCexbvpxpHvvdFyKmrhS3tBCBjWag",
  "key44": "5gCWR9EGihEYqGpt2RqsFJ1xze3YKrZRghnFTfuEoyNn2C9A2aZH5YoauQcVwd3kWGVXcsue4YaUo7rRSCQhbBZD",
  "key45": "2o49Ny8uqt3vfSV69LmaLT8kJ645stMTN9BFArMCNc4qKZL8q7qgCuEmKzcrFsPAbwc353QVW9NvuMD3ePm1r5SG",
  "key46": "3YAuvdy3LB72PETsK1ykBYGXSWBL48vPEmv4wz1uXBWrNWAeaQpV4HWjTCju5YFfTV2NJxW9X1pdQo7Evy21BPCV",
  "key47": "53D36NVMJ9vjZ24swfALrwXfJDLYB9m8QG2ryArqo4ofuSezeA6fSP1CRqU6fprfWTE1RqGyEGWvUcR2uqykFHF6",
  "key48": "5zXbM8iWZLd2LQxrWLTaqQFvcgLx3NcA3ALFW5XW2vkYaGjryZGPHu52YNuYNrV7HF9vakT5sXEHDSTiSFCbgGLE"
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
