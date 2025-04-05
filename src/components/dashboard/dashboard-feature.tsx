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
    "JssQB2NqTrVCDwZU6hbu4jcri61fAMqTqRrJuZBy6VAgityTUJWmig9qgVY4W6G22FqU8QFXKs6nVUmbRTLwKA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QaTHyQvY8stJZASragGTL2yv8BqR4py4WJgVeVuKEevQCcKQiXmyay3uhKGqhkrfVaCDVVHqgufrZn5P7aU6US",
  "key1": "4fdp7TJGuLYbKtKrqL2dwhoSn8ctKBQvtnrnFpBD8eETxXU2N2s4bHkLR4n86h7txS569k3b4SJyruEMQH1E6mhA",
  "key2": "3xCfzFVxup1n6XduudujZhFUkjT1xdyf5kLdEuRqRQmp32f5PKBM78Ndy7hoRyDyaLvN5hT9mMwBmFbnvPrL7eGH",
  "key3": "47y6vYCHBhQngzB9sue1pkJkhgWgUGTP5YKyAhJWc4RcgVWqnc4tKgY3wjGUM2wTyRrBH5i2xESMKirsDzijtdnn",
  "key4": "4fmtfgyQgWrenPDLXYTzWJimhQVgf7H8ZbaoE3UbcKhSdWqutgu7aTDGmReC6gKbaDLnqavZgQbivEXUA7wUss9M",
  "key5": "WKmqKRhdxVNJSpmDVzvE2sJoRC7cTtuaY68aMRYJhVMuhnzzX8qAxBcL23wJJ5CzcnWciHpfK1SsSFu8vq5T4o3",
  "key6": "33dYucJH8n1tLm8PMnWQxqAhiVGk7ssJ345ocdYNgzMEcw7e37EB2u83VSMJMfrTNN1d2u8hEuAj9qJCFJiDng8",
  "key7": "4PftEMz3tRhifdQhuqLKGCCFVdf23RLFv9ucXmKZwghHff19MVNaRocorx4WSLJrnSjr214TzVHq6cRAqD4wdsWw",
  "key8": "3HVG4ZPUnf2zJy4n6vpAh9TC2dmYXCHnSmoragNxgphDZ651cdtdQNf1jyGGpCZKAp86WfapbWGaJzovH9hvKTpw",
  "key9": "4vJzQY9wCb3mEmb5ooAbk5apDybXuodDAFpRnaS58TAwgR7MvE23i48M55A4hUd4YjZ8vVhiqQfyaHxGHSX5Tsyg",
  "key10": "4ijPztD39EehMEoNwLVxf7m8PwZqPuZCMQntw8woMvd6zeXpaou9YJnAsZSemG1Ad8fRKMaLt1zEwWznjPBW2AwN",
  "key11": "5TWeMcopZwXHqnfaRiGuiruhFqzP1wb9wH4XWyUgkEv2Wv7kCeRHK53G8Dwsy4h5fVxuAugKzgi3LEHrTsPGpn8Z",
  "key12": "2d62nEDwkPF1dTycv3G8MyqXyEVZtoPWB5AJeNEyt5QeGPWvA4qYEoxcfzzBsUeuFKjhyzQhovRAeRssALS1ByeN",
  "key13": "588SESvBuzDLzo1WzKAtukLEJV8gMzodcy64wwwQPX3rxcbo3gUUsgALv786rS4ogLwkfnm5digKLPGMkm8TeS2P",
  "key14": "3CcRTXAZeKGVVAcsr5Y9qtZS5UscVbz4s2hxRJWGpgreoiyzBqE95FMWwXNQheFDGUmqE4DzgTsaEKcM4mXztscJ",
  "key15": "5gB3EZt8tXoA5NHq5UMq8pWhU7wvMKCXbzH5M9JjE34p4cdR1pbmdzPRqicqAk4S9P8CVnVYQxZaTckKjrAaQwfZ",
  "key16": "5QRS9Liek3GobYEy8ydoAwPQuB6QsXUaDcQWRFF27ez2tVp84s5vzDM3qmWKTRYfZ71CoQyE27shavxvnfeaER28",
  "key17": "53z3R9V9tChVEUYFajwAvDyuQ6ALhRHmMv4f4fuHCbXazGB3xuRmFQG7o8aTaqVNidd2BAGcZb77nNuPAcT1zpuK",
  "key18": "5UzzZr2Dwautxw7BiXj7uBJAi4t95fsagJc8XLAhdJmkF3vEu9tfmg2GpyTr89gmEEeHhTQ1Qvs9C3MoTw38GDvt",
  "key19": "55SAesz7aCWYhwyiL5ee7D28x39U8FqHKgegYPLtHCWGLYX7prKENLBiyWjJNVG2JBPkcE7EhzX1mimBR4g6TTBz",
  "key20": "482oz642oMq19pee5buHkFnxzpotFTk7KNLBj9yh3XRqbpBaNwN3RTZkmMMbMSau9Skiz2r9nzRoY2zZqjsoYg8f",
  "key21": "2NXyxFKWLhvmRgBC5GK4HUo25MpXEZ6MUcFNVu7Uyeato4TDttTT2pimMrrNksVXFGzW8Kn739zNNC4zsKCK4ZMF",
  "key22": "5wyQ9DJKGYZHQnzhcRkM2vUFkL71De3XMVbVdMesFBKSzKf4pz84fuV2togv1y2ZQb7eiWmBEGKcRueX1bq879Xg",
  "key23": "4KSLsGy5DpoCP2y9bJmpARbYcCQM9CW5ho5L9XBn2ryXKcftWM3si1e15FxdqErnaniu7Z8p6UNQk33WVrZJXmNe",
  "key24": "frzhgcdQc4czWwJKpc1cU8f5VNaB6y7qnpArSgphdatrGk8KPhYgjErhgioqWwzUqyqZ5ZPqFThTD3eN5RVdLCC",
  "key25": "3GJu9yqkziLNm4sBqho71KEWDR4cfKMx781UejaVLeKAnL8tEQYYiRB4NX6x4HKvLgqddJtPwTPSi9FTTE7nx9uc",
  "key26": "38Ud78kwtE4mPqMXkqmheuV1Wh6AQGQkJS7XQs1xJADAZ6k2iFKnt7P6qPufwos7yJtomyPNRg3SJAgbGopYe4gX",
  "key27": "3oPu6g5RusfNCm6shMHFhuiZsxwANQ2QTUDuRGFvYTw3FDMFLWsSQUpLaQAeFyAHTUaLegtip6W6vdD2v2cbZjyP",
  "key28": "2gVWvTP6T2KZeaQK5ceCaUKNV3FZWGEF7PAkYtZM1A8w8s2vfizFmydrx3JbxK3KKBzxpDBcQm3ZUo6JdQSJmqBD",
  "key29": "5vGrqzUWY6UrkG4csVB7YngrURPSJCdacHnXyHNackBd9myByr1xr9y6NTgagy9xHTg4j3eG9nFm8wYBnjNr8KnY"
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
