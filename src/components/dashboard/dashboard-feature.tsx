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
    "25UqcLrGJtBntGzX5evAhP4enWP82QqTscKtazc2sE5oVhi63wGdmxrxJLEaLKzb1WdaQxEStwR8GfRRXaE9M5PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ki6EkT31AmDkJWzHkYgzqYQhwxccfTvkzpKR26p8qeBuAxqhEbnQ9R3Z3PuxMuYBZzn5Y9Ks7e6DD1vyWEMMebE",
  "key1": "dC4aA78AfgPVcCdyG5sFH44xM4fXZUa74C6vG1CaVTy6UWEyfmtdZjJdwzLoV22uBMnVfVDRzngskHgmjcXZDpt",
  "key2": "2shRwkJkA6aXxp8mWKwVSD5vfTuGZBk2vYfYCBBDcKUceA3i9AQQqEVyCuUPA2qKRygmjbn4UgyUwGst9VMVcAYM",
  "key3": "2iKGtZFx66rfVSCRnpF2v4K4AVzwkrTyyTwUpNcd6Swu5bqaTqrnzar2my2cE1PssDxEEQpQ3MkLcXyNGVW1K6R6",
  "key4": "4uFui4xns5wpieB91jbAXWCSnfm921duHZGni7Aa8KDJi8Yv13s4dUQTB8rA6KKost2QUJYhgqpPrSpYHhgtfCC9",
  "key5": "dzmJvaisWRTyGFfttUjaPDt4HKXAzFgxy4qZrEKx2eNCXsBYp2vkyRxSEVzwC1CzjSYyoKhSgGBShWptFvBrtkd",
  "key6": "4MBAFX1sgd7p5m1CufWPMeZhVxv48dtFuEDaV38R7Mih3PZRYCnnXPMd3XTgdqGd6nW3JP7WogaV6gM5q8TKz5bT",
  "key7": "4wsqMjp7tJX1hB8oGZ9mMQEdTm4SUHabrfca5PfC5uyuohKJNYafSYtFdEKxTezAD1rkmVy3d2cTnQMQFs56JFoA",
  "key8": "3L1keUX611wpVcsxij5eSi8Yypz5zo7wKyv5nLFiwPcghnjKaYN9QwD9xjRrKWNVy8frnYGu9YXAEZh4t6F3GWsY",
  "key9": "4kRQhjLixsS9qFeDQm75LzzQnsKT9PGU3LYjjGM6akLn8p4i7CVi4YxEJEYu1L5RD98uH6WvpjCs3k2wXiari3bE",
  "key10": "3v15aKNcvTPy1RmVkfktmh1j23wv3Ap6HyLDRFei4fSWRXGtoAkGZbq59ZYxxyfGuzQ3ZNhRDDwnULwS712dWryS",
  "key11": "5LZ6h4RxWE9mEABZ33xc2BRMiEUmtuLXtx2LfyxARsmhDZtT9LuFsE76TmCTpgftRiqYzDku8asEvu3r8uJiUkHS",
  "key12": "22yAF2UTNTzZ22YRsd3wm9qWmfPnLPF52nVZzo14X88czNWznpbL1r4EfJLYZv4WnZGueZE8j2hyQaEsofmzpnTQ",
  "key13": "2pzo5jwQymf9Po3JXUYJCHLtb1YPxQQ1PXJHaneUJWK7Ad6ZnrMrqido79HE61Ts8nnB5w24odZCgSpWEexThEKP",
  "key14": "47DEAjduXENVa3oxmZZhcoQKybkT5UJZYPZCgzAAxNWeHiTJPNdr19apB78CtFi18oa8G8jtVYguiAYyLLNMMVzA",
  "key15": "3d7zVfdU5CAuUgcA9Q5riEEDQmsEt32ha77QSa9LgsxMAa4WtoD3NmPzB1CKnSEeqWiq9Bgr2ebh2MFNmaXpGQD1",
  "key16": "5CwWERfZJtDCcKVvQvLb2LgqmRkju4gaL7RSngiS8jQMCERg721yGn18HSzRxsqu1hvW6Pcx841WjhKb92sKbNc1",
  "key17": "UP4tChGqbeavms8RS9ybwL94KDtJFy3UoTDJx44FueKehcCKXuH9SPXsgfcjvLchidEUvW8ywQS1Y29azsa9xSq",
  "key18": "33heH3JgQMSQWvgYAn3tT6DHhkx5PNGFS5nbrEiN1Maqc4UXjrQDZVP44BSKFpiEDGEeNARDhWz9tkR12YYSufiS",
  "key19": "4jnVYoWkoC7BA8doBsHD4WMUjyPpm52s6G9umJZWB5DQbcxVmwU3x2pN4Bj43yMRWDVye5kQVUogcVKG9vqgK9Jg",
  "key20": "5grexqNU3HLd5kjVNMBXYVUYx4JaJBa4enrYZrVgT3fW6gkNVuJRxV3eRSHzMQR7Y2E6aKCphwUJJx2YsRrJfBNL",
  "key21": "47qPFuTURsmBv88xuz1T8DqrNZERSuVRfePAVQ7WSYE2qfL7Z1CHXKrFYhkyRbJJ2p6kofR8okX9uR5fXNLjsNHr",
  "key22": "3NSbdeA7nxy16NinBSdaugdha8K35ZXj19o1SPKBF3n4upjYSNwTNw98XoJE2FWTFSDBtuqoSqbDzUWwj5gg5b8T",
  "key23": "2aaYDMadHsLJXVDAJxjLQbvJjUpH2fcXMT2hMB68XCkShX49g5TFj6GS4aGkfAYHsrN3mbt79vHPJeFXv65L3Ufs",
  "key24": "2g8JNsp9JzWedbkGezeSNgw2D9JDK6LLFZtAQ4dMbHCTniJwXpWrPwnVzfSs7m7jYf5zPNckyL74jwqgwkKKWTpT",
  "key25": "KbkoXUouXqMzVER77ajTKQBXqbidLs5eWynbHVyPZdwcUxx8BepNcbDFJHJ6SBNkFWMP9WHgwLmc3e1p5ZNK63M",
  "key26": "5qicv7u6ajGuU4ZG5yTVmMFw8gzndK8wBhKc9qh7nkPi6RLCLxayQYcmgVttELRpMwtmTk94WVWUzVS6DBag2Wd8",
  "key27": "JEC8iekbXBoWhiMfFdogEEinBBKv8aiWCytf4LU19oTbqmKHFkoWXjYVB1xbrbFaE2b7ZxH32Jd7J2QoqN1P1QX",
  "key28": "3pcb7Jgsg9V1YkCfSfeDxCXG9zW7jNxWP1LDCda1r5HgmunhJc8dqKwcVH8NmF8ckKzVPiN4a8M3anRhTFe4pbou",
  "key29": "5U9P3RgnJy8fGjK5VvveubMnQjPHKi7nkWVuDb7cYmkFdgR2S3LBjHP7h7WQ2f18tBUS7a96cVNkBpP9LULDhRaq",
  "key30": "3hmi7xW5BHMJSwrEog2bL8KG4t1SYBL6cPcBXVoG6mtij9DG9zuSKiUv11dSzWYngkGJ4uDzPna3brtdnp4mvujX",
  "key31": "2NUbCfz85UdujfHiwFRx4CChom2WNYGq2JooDJ9hV7BWUSB5cDQpUdHtsSGwi6srx8kuWBKSomHrhhWTkyr9rvyQ"
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
