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
    "559iftWo6oTM5gjewvQk1rZLzdNDi7GsULMBXpTgRAxHx5ZmP5PGM4euHsMsVUmZvKoxemdpMLred8LNoipdfGeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMARQa6CQ9LVgNvNqWYn28m8hA7kosdAmoTqyM2nQpQSue72iPwZvfHMtMqh4TZKkwbewACoruRzmydcPwn2DoU",
  "key1": "2Pdz3s2CNCnWmjod33xAg7945QETVDkumvGZowCrSU95HUcJAe9wb5KYjEpfwBAQCLjW7AuPQhSSzkLP1dxhS6Ka",
  "key2": "4fzTb9o4APyePaKLc3R11PtEBXEG5U1Mf23qTTez3BCBes12pocRNQExiGTPyzb4EbSPrVqPL9Tjm8eMcnmrvmj2",
  "key3": "3iScnFafVvSBMJrbjecrv75jbqimJyBx8XoDzs3wVngmTQFwd3dPKEMFNKBTahKrQdw3jZS2FeiLnHPgReYJXoki",
  "key4": "dcX4YoWMJRiwc1fxphRRsUy6nfCQm3u9UZntzQWsTEzkRSXceqwgYvMjLmR4hghcSrrWg1M71EchLcY8HEXSvqN",
  "key5": "pFU3hcZqnr7iqEn8wjQ1wUMPGaAHU4oNt3aBitxa6sXztrimizgFbA7rpCP6MUdRT3AEBHbZ69xjnwP7esbpdYa",
  "key6": "5N4JeKvmqQxbWBJdd4rEGa3ei3baksEHsvr96QW5RzgmJV68SXm4rc64HxjwQrDxtRUwDipibrBt4kzHRuNAqxgH",
  "key7": "4zCG7HaZXdNmkKmRum1ZWc3SX5C5SpRvPQV6ByTc9u84X4nMWou7YYNFZSjHcGQSMe5Zwfs8shVe1S7fiNXk41UP",
  "key8": "4DQx71sR4tniWWzupZViGH8toXQxAd9FQ7vdaSBJRhKHQtMcP6pjpho3V58mZ4XDgXzha7iDS2gB6qYq46LayTWW",
  "key9": "5AK4Q3JWYBPWTE2Sm4s9ud2mwxdPSnbyxSUAXSCjy8jEU8MbvFZmH86KnjJ31bQDSqPudCz1HkMQX736ms6MbNts",
  "key10": "31t2XmDkmZT1pKW8ZC9vYhpPhhXbBYEucHMvViUGPxc7AcABpeSLT6dhxPZLfVDLQ6dXGdgrFyjEvQB7Wp5ShLk8",
  "key11": "9mBUwVX9scSK5s3n6UbUZqUwpCfL87e5d3BKNHsTe7rXxTavKe8cQANsEK6yTwKU3rbMEsiqnngLFQWxRyarked",
  "key12": "49QigwYC6p1aywrQuz1enNcLqRgBaycmYr4ADDJRvg6LZyJgumqFWQ5SywsCVWNc6kQzMZLYhJY8SdPXwpLFCu8E",
  "key13": "3vECiH3qRDCVP33GtMf2MRjzAxvU1pAUfNqA8TYbkY6tMVa8xxPRX1fQqkWWuPA9ZfhBfiXoS8zzNa1hbJa62sD8",
  "key14": "5f5Cy4Q1HQ23TS8CYSPCHhiiDgVVf9dDT8guJLtKWUJHkbAZ8xp34kaojDEcVggyVU8q37SzratZqpgoYbLJ8dDq",
  "key15": "3jMFSygtLD2rVV8iKfs8w5FXWybADR3EfWT5QFW9jDX6Xk6pukAsnUGFqU7sEd73fdy85QMkVwahAptamjpj3oXP",
  "key16": "BV2vHHxiFFzufSmtHvg3CSkGB8NK8b5rKM2vfMtQb89TbZn7MCRRBaMpHXgbSU4K5QcrQKMiQUN7aJyB5ChbAob",
  "key17": "639AtE8nWE85UZtqvFiRVXJsiZyLoe63FMT9CgPkB1DztAnVdQBWYCEkHtSskWsQkUYL1dk5HUXnhLN1X7qhzs3V",
  "key18": "2xW9JMnQEjgNn4bGvJZLKeSyA2rTw62GU11TMgtmegsgYVJAqFCbKxXHmnYM4fJuWS4Gb2yEoz3QzejKy3x12Lag",
  "key19": "3jKv6nzPHJ54CrXCbbHHvvLQkx18zZmK8nw5WF767KCxq91GbqArfq8XW6LzxJHpjJMGeQ8usEryb2wNGpanCBse",
  "key20": "48WweF4fV6p8sJv1m1SJ2DZrC8UzNTHQbp6VNTzhZ8DHpqNDL61BoSNuz9UUUSBWhRapiEW28HzAdqedskFGnJcq",
  "key21": "2X8EVawyRTMdobTS5jpBJ8aV1atHqztnB1TjbJDwDc4yVPJaJ3yoqxHeU4P5tRoJ3Q1GyR2onNCB9inzDHRRyKj3",
  "key22": "zPfg46CJwPQSdFm6Ki1NUMQUfxKM9ydbXQTCRKz7ugabLaNT4pehSVFCGjkXxAn4LEFdCaYBWo6D7eB5e4wHUrk",
  "key23": "R4tmTumLrG3VEQke2vsEKwkRMGwxbgQz4XusmkrhLq2dWkts4GqR5JzrEsS9di7jrmew31FDWpJUWrqttrNCAPK",
  "key24": "4oAfhhagn3hDn9BhFfYvcUp3xMQqLWc4zuaTghGFoKjJ21j4mmr2kNY52KdnsbsERWegMWDcdnAeTsWDteweWkhX",
  "key25": "39svHkX24rcskWQr2MsL5ENC7j97Zt8oWWZdXtkTngTtuctdsgLtRQSf6H9NM5m7NimVJvk6JtZvfR7hJqr8Fc19",
  "key26": "4HQEKMF3bEvzD4T8bjp6m7ivZvc59tGKkDb9V4ZuUJXKLUsPvhAaSXA2E452cnbu7DMq2iifZDG4eQPXmwhJrTNF",
  "key27": "4zk14ErraEXLLCRK6vBdiefy6sKP9bab3LNgAFvbJTAjvCtUKsuACUYQrxt4Y7XVf9TzmdJ1DbBxjiqD4E3aNPGK",
  "key28": "3Gx5bnD3S3NjsDbKoHpk76DRPNnUTgWShxDDA6GTvLhqje8ohh4HJZxHSriKQC7DMs7eDHmmBwz9q8QvDTf6p3zq",
  "key29": "rLBjGcZavcCw7mU43z9KBs6MtraDq28Uz7BTKhzwLrxqZcBPZQCDtxTQC9A9qmUu25GhyXEm9ByjqUhTLeWT8k2",
  "key30": "3cNonCVjGsYPEqS5vY88gWYLWvYkjBUpmkN5uEpM3ZgNLDjoCpAHv3Rz95SLnhc8pquWr7e7cLSCaJFvEDYomZEL",
  "key31": "2gZebGAWNQZTvrsZF7easP8zKK8JDrS8kHZo7uqpBQyyk8JPUDpVWPdoi2rGm5UBwE2SQ1aFgzU8XBGcgjV1mz9V",
  "key32": "5BWQNAAuV8zwoMVRo7PiErd3cmugmLrgWew8mtsL1486BZxxtub8AF4NzCDGhhE4bKjD3iL9ZMUCiNcoSGjvkGxc",
  "key33": "5n7uQZEvkX4nYJ9e29cafoX65u1g8B7xxeCp73bzmCztq7UDRf2RJ6fbTXvzMk8TGitUCEQndSUbdSTmAXFxaQCV",
  "key34": "3NLNabqQXB6rpQFvXdC6K5YPwPjYtm3zuZE76BTbmezzfLYkqAhGyMBGuJoBDBuyVT4azDaA7et5cHVgdvSp3BKr",
  "key35": "3wG7QQT5P3Fi12UiYf2SUjphJhnC95En2769sT63pJG2aa4ti2gn9uyrATfz7D2sFzbQ16LHSy6iWpcbc31GRKTo",
  "key36": "44fxxjpPHteqAu8qufSc87WBB9AWhx6byrGD3BE2FmH7vJ9o7gWXx3v9sUdv3f2N4De6xy2LYXYKJrwLLbRfiiKQ",
  "key37": "7SQGF2m7t9MGA6Rp9Fm2BWSFLJLuC9EghbYW3fJBama3vsSztdSMbnUwgcqoKiyHigXZLWhWFZJyXaYXgXkoLXf",
  "key38": "553dtV3PbepU5akj3qLFFSc7gJD7vU19aQnbe59qfMMz6rAX7EAT9wsXMo3jraDdvnobRZWxZ5TGRhCuMg1Mqx8m",
  "key39": "3MrYxfzFkcAk7hNbcXqhYSTkVw8UUR9AgUtMesedcsScPTmGo8Hv5Aakr2ZGBqbHiBQM1PkgMWUh3zFvog1agU1R"
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
