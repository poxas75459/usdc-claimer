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
    "5iigfUwz2FL14N3xcpqB9q6vYnodFNgHVXUUeTEzNPx4Bkp7S8d6Qg3wvq9z7xRxLQqzT99goBbYe8d4Rt8RnNYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pL59y6QX35t3mk1dDsZN9g9wiUSwtpMqUsmWqg39iFLFwKWeMteZ85LyyignvAiWfaMkgX3gGjVfEzUD86L3tj7",
  "key1": "5iGF2rNpeBMZDcD4ptBd7dZcsNM9yaaKesg4uXdyRDsqkV2pVb21p8adm4V7G1XhrkWYBQSpfmt2TbovLDwa9QxP",
  "key2": "3Lg3F4eonp6UDPDmTZWG78LcgNvjhhFDBq72ahynaGwzYgvrXWrTY3bNCrf6FjSVgLyx8eXvrLVNMZrHZNWzALvK",
  "key3": "3YYxJPBNangC7ytubJg5Qjv8QTMHLkP1WqYKhwcgPm4Sn5HZfbPvzku4akiwFgJ2P3DGtDnur4XZ7QEFV9EkNjwr",
  "key4": "5QFDVuFxBYin9UZdHXS3155ZXBxtRh4Y6DbNaqY62itvpKp7TWFNVZTtTqcd51yRG1jBEHRhennbQbr58pNgqHEj",
  "key5": "dkfaSr92wPnjsT2kT4MSUVvyq8N4WZnU8hG1ceLTpS5oNsFgQ51ZGRoG4AukDXmuNBrcXUjWkdLcvCqCZH9Pw55",
  "key6": "ebku2TpZuq5AXJ6sPJW3FyjiVs2LuYsRXNHRbsidEzcXZ8fa7GstG4emckjcUU4CNEq4EUYKgcfriEmfJ5QBEjV",
  "key7": "3LGdS8zWHbHFcTgnLDt69hocSRNBfPjy6mbzEjSgFYXnNabnHXHHpCWWfncJQPxSYoBv7YFXJ7qaRuwrmnYrTPNV",
  "key8": "7u3G2EhcGLWLSQjZ5ZvCBiNKxeANwhpdDC3DKd4nWaCaF4R7nS6KKaheuoSSXAuFzPM6BpKkacZf7wkza1BV485",
  "key9": "5jUtLXUWx5Lbtt5Y2Z1SQPXY4xGZYkesiXbkPYPsYLeyNz8w8VeVpLWVTy1EtXq3Z8EExZP22hubBBryspD5LTQi",
  "key10": "5QvwdSZSByTZNYbSNs2LmcuEsUhYsxDfjuthdNqGeTK9KSvkuH4FUnLi2z7BADLwt8SscqnF1AmbPoYzeR4E48in",
  "key11": "4P2EwJ8Qx5kDCFfvkJL9bKzirQ9YxZNZhazGyzZiP3rerZxLuzeUgnf7BmMh6X6jJrYz5YCtsCNLtcz7q2qq5hmu",
  "key12": "3YqXim8cncYK1o6PoGzBkL3Xr7GcP1X5oLata5Z7q5cT2Hsv4HL9UWdJRhbsTbTr7xTFfi13q2g2RxeXCiMrpwpc",
  "key13": "577EUokV5i3s245EUorzwXQyWzqwjgLD3AARbufHTHrmxZh1gXjLFwjnKqh3MVjKksaT1jiM5XKU5o5yAGRa84vx",
  "key14": "p4XcsJFLFwgBwwq7fWX2uZRFBrZtxjqhtokYjvVwJXprihLMGnGvfJS7h5Tij13uJ7Qz5Gr8vyYQaCeUqMwuq8s",
  "key15": "3HmS7CpXMi33C5d2pkWZNzhbMSxpf22b3fF4o4b51JUUrCCobzCSJ9WrxLq5sPnWS8BfeYMdnHHPuLR976MJnz1Q",
  "key16": "5usrwSEfNb2CaouT3eFrTMbhj6Geo3zPGWpZh6PYYDV9TkJAfW3o3EY6W5ymkGCwJcT8BHxvzo6cmKNLwteB1SK6",
  "key17": "53SeiQk5FL2SRLVr4zJZyPeXdrLurrHMZv94bpqWadioqEFqrx79jPmAvPBpQ6PzxJDQzVDJPetzHpNNk6iDgWcp",
  "key18": "4PHHb6eD72zKoV8x71s6BkjyuJ7AZnmY8SVU3yFMuc3x22iZVZaw8tc1oKYGyecE4bHvRYuL5g9teXt8cGs95ns9",
  "key19": "566H2VembF7LHvTLnQJoZC7hdqxxHBPUZGKP9dfptp2eppJjSCvErYX5dqoKP3NeA2tqGTuUsyjDEBbK8ykqpdf2",
  "key20": "TtNLzc62bXJiddSpLvigpXjZkTBNt3VTHRanVsJzNFGKwwMoPHLYNVxJaXuPWJR5VSLXRhkJPL4rE7qPLTB5egE",
  "key21": "2e7MZQKpqZodiPgAr8jsDPNdDT4Hr63dx3YYYcT4vbZxSJCtFKFgHbT3ne8vVvCddLm5VbxTQMEBd7SKJJiNEsu2",
  "key22": "5KYUry6nTE3aFB9nmVcW9NywXAfqPPwLeTFQJUAAYoL9PpRdbiVYvQsPxHwMK4xAN6CeLvxoTibmTPTPuKAWas3A",
  "key23": "5RV45twoSyEBQcpTQYb4jKTnnv7YKqQuqYUCuqEb25zegXuKz1WfQGP4cQ2qmbnF628SDiCMnyDE45t8rg8TyBWS",
  "key24": "546MP5Gx74gJ3zMn23Aeg3GoxQ2GTS21sPkt8iQ6ikZiKP7huZRRbx3aPDG1q5bopPWw4X3sR649GsKSPDrJzfKd",
  "key25": "3yTtoYc8qeuJXMbohjn2Uk9HCBkn6ifCyGBdfRCGZKs9BRewVpitbbFMLcRLExm3pr7SFFSwZ1ykR7sdJmLnvpzZ",
  "key26": "244c7pZp3pTBifbo5RQ6KJkRjHHFRCFzEEeo17BBdiAKxp6fSyBKjGbNiz1PF6hqdyByfUuKHYQNZmRoT2s2ywJa",
  "key27": "2D8kXEXe4p5t1FRsSTcX32ZBacm9Vkc7k2MmSeetcLQGxmebRKHmSFEFuM6HP2SmFkiKpq1yigR8TpRmZEWRvh4S",
  "key28": "4nqCZmhxhvAmbuX2cLJqykWusAnniXWYvB6FpEA3zgs8ZVqKDY8t5yqbfwrfFGD36a3F81Tz2mtcB1ynHoKfSnN7",
  "key29": "61WkHTxJnieYBS7gkcftV8xHJaXtM4WSwefvn8EvFZNNxYkyk3wySAJsk61vVjnHoZ15tqy4GzMqd6DgnAhgobiK",
  "key30": "3PzMPWGHy5KT2LP19567N8TX7PYqiKGWyDJBqovq49tnH8Q876EHwiWQjvLQbmkXF1nXXGY3zKJaLtF8u13pDoHN",
  "key31": "2BoS6fQPeyA5mXqi9R2ui2SdwxPxBSBGEet9ZQeSmAoB7c5mT28CcvZn1nurp1aRvLcro6mkXpbXvSHRjzQQ9uqg",
  "key32": "25be1ee2UysXoTNb99ZBbcg5rYMTpwKFK4GeEnAztDR2pdwCJ67qDhjsmm3YbpCMbJSqwu9dNzVCp4iJ5E6BNjZs",
  "key33": "24A71BtyLdjPHtXsw4RgwyEf8L2qdwLFHQRf4tiWZR4LEATgPsP3jKX7zUCU2egyARuyt6NhVTceTnMs9XSydwku",
  "key34": "bYKxxWFVFPhepiFJUXjjYroAhX25qifuXg5N2uGx3d8uNu5tEoYghsJXjPJTkKGJY8vsUxVdfwQqLc2NHGUWp3V",
  "key35": "3g3L8RVb4nwhQNooFrcTHvtWfzD79jBDggzGYebuh68SkQ3GCgmfxsvEHD8MU9WoY7m3C1oMaWmvE8L5DnJ7mLkU",
  "key36": "38w5Mb2w4kzcm5qSqRsMcg54BU11JcsyqLyRy49F3vmRz2QNNCH2axbuittMWFjkoC6Qo4iYVhLgL12fnQwTEE7g",
  "key37": "YWG5XccN1MCfTdCg7wNkjgdZq7kCkD2bcMs6XqKJ2MGuFD7fQY923YmGrKzHJ4e6abcpUT6S9NTbB5siJAsLVzW",
  "key38": "3Afz37uHQT8zJb8mnMhR8m8rFU5PZ7dPyUihL8AXboyFqUjMCLK2RoGF67hfSGnLcSgALQmhXAxpEntXBBVf3EwP",
  "key39": "3ijdqrydzpXRSZRH932brtokgM1h6mooSqNHq9QJLpj5iZgmUexUGqT8KaSPi8nMu246ac51ooNfeQZzJC6Xvvoa",
  "key40": "42iaGmRYGMHjWrxs6UzzgwoNWdsG4p2EyAuCpvpoQTYWC7hUnSF7hGLnj9bAREnHjdhSqpmMhZwnSyQ8GdKJPtFU",
  "key41": "4VB5Env9SfQiEZB6W1XaB3NQUhUfx74nbQYKm3zE9kZJ4qGrfMJsEWAmGw4KpXVWpYspgVw6Gn6e6gzYJWWXMCSv",
  "key42": "5vUBuEUcwa3uatByecJhbEjXeudUocyAh4Vt6xKMExsMtdQ8fq9Y5zSFQqXBzzGkU7RpkGz7PwDEFpczFwmV8hCZ",
  "key43": "59yNrcL2QtJ4U8Ww4csUfxZRbYDfw8cuSF7x1HQbfYH9gZiJgu6kh43NfjntGgaMcdiXDeCMgFUb5jrNV3CWPJ6C",
  "key44": "HSNU1VP6iT5ZbUaCpEAXfm9PNjVzZ7hKcPjvoNPM2fBk2niW9YiNKzTritSA8qWKwegT674GexYmuQeFwbgBYAZ",
  "key45": "22AKVkkV6jj1CQwneGdfEuJFSPMfvQ9aqxm37NuXmK2G7JqAt5HCidSjQxm94PupYn5Fqq8Vg6RBNGhJ473WGV2C",
  "key46": "4V5dGo3Kddi9U9VRPx9z5DiEFcUajvUZm7gTi6BK2j6272HS5ed6f4NgFXKdnxm8UaQQgQ3aL3u1nfNovjUAk6x9",
  "key47": "4yRySUFnPq8EjvL5sjw4R1S5LVNbX5DfsgoeiuNSwSzQsn3kJoaMoUYFcaJfvSiPdYWFkMUR4wqpa6B8LeXQRus7"
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
