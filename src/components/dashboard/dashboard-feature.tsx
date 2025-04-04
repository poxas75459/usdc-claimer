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
    "nvjS5Ye7uGmPGeCSsfKefDctb9vPTXNis1Yz6jnwL1FLgu3umvgsxWnVNEQz173rHAXVGu5XruRuDD93Hqai9mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqnDdEtTzJKHkjDPbsmsUx9EonkQMf4nqVKSzPbpiSqeuLkMMgjR1R5bwFNuX4XcrTHZ9Jiv2NAiStoVX1TMWpQ",
  "key1": "3N197D5qqif9uvJEQYbFqBq2LsTSupzsELwYJiwCKZh1UkXDv9MGhF9vSpWZkAb48hXfdF183b6GNpGbMXGHXcvi",
  "key2": "5PNvoDosjDYVh7s4AZMMsAUFpv1Afh2WuxFyzRRtVFmx6yU96dsb9r8wehAoPrkSCvbozAKYWm7me8KQcVRHpQGy",
  "key3": "7j2Qt9krpxf9PN2mSX2pFNGrAdFfu3bZqu23nCU5M4oECBiD1ANtxug59m7LvqxzUUL7bfcz6YB75hUC6dPAMtJ",
  "key4": "5DBxvmxHmvABrEvrW3fwZCSKcEqp27HXLfJUsd1gFJJKRD86FGEpm6ZE4CLqY9qKC2bLftmQDVF8roax66UL4Sz6",
  "key5": "5CJpGzDXVfHkZdeeDyyFgKrzKffkRB6ABb6mWhimzL8sGex1F5LY6aV4t3v3bLLjpgG98t2Ts85ToXfXTjQAAp4s",
  "key6": "5qVU5d2kdJuRkDmgkX7x5Dv3VtooLriSTJSgm7yFfuJnjVLKeDaeQCBNKYJWn316xcJQAgBMQ8ygGy7gZ1bzYPJ4",
  "key7": "2MsBAvmGPYDzS6mxunTKCMXn4q8mWYMoUnKJiD33JSU2p77f9LV5ewfCymecPTgDyzcv9JsxTXrnZAcsHoNRk8Vf",
  "key8": "462vydUe4SKkQf9eUQqq9K6BYDcs1AwQdRGHgb4j9LMxJvfbC4mMmXgAkcgcJoDmk5YZJdsKm79YUPhBRiQj34MM",
  "key9": "5aQrT8ijdBQWLkmqwNqa9y8mPSnWAQ2dbMzm1P9aVH7wg1o7SmhLPxXJkx2yaEiXjmNQ2rfzvt9KzKEmnPo9QZqK",
  "key10": "5fya57cLM7XZspBzoZWcyHYafqWpBbHUFsfFdQHi9ajNMBxwHbqqgteuexYHHFvvc6CJ2pbESgnfq5fFGNB4hpa9",
  "key11": "5fcxdjf2ZUd1Z781vDrtgJD9fZbUtrysNcZd16tMqaKTihxt1RtCSMDANMpBnkujwJkz8b1z5kNVKhfpcUktao8H",
  "key12": "5vcvAniEcwMupdFHoPc9RANqf3kNcqZNKRSjotEiMs7s5tFLnqqfsE19aDRqvFxU7P11EE1KpN7sr5fDNkVe4mEs",
  "key13": "2aNApDU5ZgCjAmfgoVSRWo2KoVJLppvWHcXCgMvvbmSbCiaw65rRU7AgcHZSW8scixhimkwTa5pLePrzpNzd2DR6",
  "key14": "3eBfJgkujzoT2b7vTPQWBJ6B4xpVydBuXTzpBaTLWP4NnLh881bDYzhDFXWtiwkZjUMZNYBoay7y3h6JhgqpfeBx",
  "key15": "5ii5rrUhSbc6cjQdw9Q1rtpXHkJYsNtsRdqUwA7fcZvT8HT7MArsPwoPUD67RsaaiYHcdgxKCXQjERxPNQKv3NiS",
  "key16": "4GF4izWGjKfDLE846gyWvWEtsKS4khT89deA5ZwopmgDVKaBjPhxkUbDiuWtkwp5MMcSztznEgHDtSXQaVkKX23m",
  "key17": "5JGdKsahqfSmGEU6xkGqD6Yzv7UfLEH5p5E81s3Y4Gxwwznnh1LhLxpbXEBkHypc6PbaZjwRgr647JSittQQdGZR",
  "key18": "28uskeDu3uw677p62fEvRZWso8zGGQnivczKzrEguYSRFxEVPuQHA3RvMyZkM34j8f1LA9XzTGHFvP56Mkabjo8a",
  "key19": "3JEFBuu93ZZxkpFovdsEET9J7PPd1MTQwPm1TD6nBQCczExhFipc9VqQmiT1ZwxRFdAUDALxhf2VHEEbgYiDs9u8",
  "key20": "53f9BTvgPHu6GjgNa4W14qrQFKhhDnCbzhnQZibSUMMehSqoantgKJWzHoLFLxFXWgKUM2xh2sDz6V47CyQVBzSY",
  "key21": "nMJ3NzwEnsh5gmi4LqAs916otWG3hYxuSjEng6VhLpBQ25Va9qTHz8aDv27B6qX34GkNKG6EnAjEfDAKcbSqiA7",
  "key22": "2uUS7N7L2eZyoM94LKBi93Ug2a5jACwzJ2Sozo7ev7KbexviNRbk2qzwhScsbNHHVV3YnhtqSxPt5wKcJsway8rC",
  "key23": "3Kt8Ywxy8Kj5ePV4poWiL5SdeipuCeQVkeybihA3MV2iCDm6Ew5mMNBAX17JsPwkxbMggaypGLcUH56ZoJcQDgND",
  "key24": "4R9d6dLJf6HQ7PdwNBh72DCFvZcMhtgpYW8SF3eWaf7gxeZbXYeaUhasQMoPkP1C4sK2qGQGUJMLi3wTUeYSkquD",
  "key25": "4WAz6UxUEavNXALJqX964mCoYvpDAYYQ3r2qwELpQp3oBnfiUhd6wEcPrn7QM5zXBRQM4Wwe3hYxwGuG9PgTWE8G",
  "key26": "3V1G7z1UPUteofSBBGGcyphHJBLRTVkLYJCPKBvyjk7MsFgoaNRvjKVu2zPN7G3qn78YjuK8XiG1cUz4fiEwaGgS",
  "key27": "mo5C1YYPFtFKYmsd7We3ZZh1cdCNVninpvxEKznYXjQjZQrndPo4h8teMzY9KLFXJzPrw21YxwtzHkJ1PezuJkc",
  "key28": "3Q5NcoPbe1J9UaqVChNYKy83y65harQeN3qJVqjVkKMDMjHpH6s1BgPyPBYJaML3chzKoPCYcQSfztupNvFZG8en",
  "key29": "28fATi25FmmFMvw2SN27YLuukXfPKNVwf1zKvCZf39BH4RFep6ezgCHXKbVhQdes1KHoPXBmWmH2NVRrQ1FjEbjX",
  "key30": "3yj6MNAo5y8q7JA8cqtpNsntVYUQcBosEMvYPwHdfJqmB9KkQ6gSJSdH8AVES3gMPQPvLZVHCBTy9WVzP7fpk8ZZ",
  "key31": "3YbytWbMhcybqW5Dbiv2UXtQ3Qj4nphNFVh75kb4waXF6jbuFe58dd917vEu5taGx9QnEQSp1berQXBNQpaTXZbY",
  "key32": "4NzAyndojmCiXFtgrE8mJ53SJuUUf3GLiZGqpmnxGtVQPY7MTw5LjLqoecxrEH9pbtq8CqPrxcX2YEKdiZFyKEkf",
  "key33": "2LkBnLz8K2kT6oJcsTDci7s8ek3kraZLpBYSeYrsJP4C8QLZpJbmh48BiRrzdn5RzEkz6WoL994beXRTJ3uDyLRo",
  "key34": "FxfDDFcxPAirCAhXuWiJvyhkkbreCy5iPEEDARbaD97nWvnxS4KJZrRqyMu2Dd7MobPHzy2CWLyk3RD7zjnLEG2",
  "key35": "4fev58tXjtkQAMapa3gPD2xKu46DcB6iSQMduEbkzYyjCzddCbDUYbxn1i2WG3tG5E6rEXK9TX6BPKWE8wXQMgjY",
  "key36": "24pLf3hn9xdvG8mjpgAV9ziWDTe5p2xvCyPUMq8L5ke9X4EtVnM4kLFn1GRi2AkyV1Kmq49uANyGzoRu9pcjNZAS",
  "key37": "59kk3CjEia9Z6mC6DNU42HCShyAYVATjSpy3GGmF4Rv5ztdVjSCqxThQsFJbCVMSqFEwQmUB3WFEfSHEvzPhTyyv",
  "key38": "5WDEFAvRQDHUSJMszHhMfeQ4M9eWuLdmefYwLvVBZE6TrtTMrhw88NVGUP2SiWt9tXjBN9S68A56WvWzAUi7U8gs",
  "key39": "5JtUghsg8D16TEVyVvjH1hQJ8BGgCE6UHyZkijNqHNFDbYMt8XhEHvXvU72F53juq2oyALijzQmBWnM6jtLhnbZi",
  "key40": "3vHWZgSL1RPBdEW6WTaJWMuA5MpSPURrghEoYoedEU2qmn2QvLoWt3cxpiQmgXGvbyi3Bdcbv1QLk8YikSTRDHsT",
  "key41": "HhLeyqETowqLh8ytW8cqTrBrEJ5iKSFMg5fPpHrfAPNRJrTWsZyf19grEpgaFw2HDfPQuHW7NUuTZbKgD8JFCW6"
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
