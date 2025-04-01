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
    "5apQWXrmSfqYUevqcKZcHxrpeAgw7MAWidbdy7tCp7yqbfGrMDYjYP52o6eXof5Yx28TQEo57yqCVt12p95o7vmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Dy4n5hhupJ7EDJ1rgUux61cHV5SbE1np2tAhQy4dLLEi5zJBkjZoSNzHu2qamBQCw3fbFbwF3tqnBvoqEKVXbF",
  "key1": "67M6gYtf61pGP4eSn6MP3VSzSEZB5Si5KzwQCNna7scxKogsdv6Vaoq1mHzsWhwqWxmvqN43CTbUQZHh1q4byrSY",
  "key2": "4zF74BoF6AFkyG6jjB56bmdC6Ff4QHSQouhEmdGmQMCF4yMbWc9Yww55z6pURrGjVn8gxz9v6USKYsWs3s2pVJxt",
  "key3": "59SSZrfn8bdGesqZeKGfGc9uJbQRfr6eGk99XqzxXRnxzqJ7KtF4YSGZ2paYz9LACHABoNvS63TJhDnaEe7xafS9",
  "key4": "WyQ8VqRzdvt9PE2KH8uxpKCfDA7KsU4hW5hSKrg7D2KZLvwnvdC1JHNNRFKWUtYmarQNPSHLvuPBu4Y6Gun4oBT",
  "key5": "2HLX7fPFf6vKfTN4kJuS5CiYHU6XqTNDEwACNQcHYwNcY1JQQdaSW6USrx5BaZABu4roubgX3PwvjL41J7BT27sq",
  "key6": "2p6iaeGnUXXCNXortjRiDu1pxPubmU32Bq7ac4Kqzw3Zdba7BjcKRZYiWijA2FtkZQ5RXbV6h7L91kwmAt3ZsAno",
  "key7": "2rpTuZV5wJ9pPPGQ5BNPajc7Qgzov8YVvQEMK9QbpPUkptmHUEfwmjgaTycQsPXhhA8oBEK2NWkp88DLKXPuAT1h",
  "key8": "5k6VTiCPEjZGzf5CeszNDgsfpUtGdmXrtrmCG6kSCeDN1TrEACfrKbktCJYdEuw6XdVuyJpEE5UTLCixS1bAe6y6",
  "key9": "4JBrPZQaBza3a7ueZXU9c3zmycNUGKcKD7BhgXww6BCtzGAtsCeFBTUqvBdtZ6ybCx79E9N7Dn3FhQ31ef8kssAa",
  "key10": "2iqbQHosu45WPkp3YAheCkGvyb4UkJdBKyweD3CKbtKstgvQ7mYfSCECiQXxHo7Ce9kd5W7NpFi9UoieWLiiVxSD",
  "key11": "4GcppfAengdB93TfDkgJqBvgatqn4eHxXQxSpfxeqrVT8XTRx1iLuyuJwUoUnQeZGKL5ZqhyjcozyuhLsWP7x4Yi",
  "key12": "4RmiVbdBAp9WkQRi54uMd7ijyoSZfiaXTvjUL5v46HXjqjKnVVd68t9XPrD5zjFAWVM5u3QYVvm58eyBW8JdRH53",
  "key13": "4TzA6JyTXujniFNVo3vXBFJYj2rgnZbBhf1umGWAA4K6UToRuJCq3WXA9SMVnGm8TKjzp5v9qjgbgxvBVoHMXfbr",
  "key14": "5diVqpsHWea5zKBFaSEygwK9d2dt1b6B3icuZiXbhNoKryeBhACUQdPc5m5aB5xVCSpaSesfE1PNU7QJApe1TXSV",
  "key15": "4cWChtWwZP8pRgvvZg7nje47ELqrPjJHMaPgdL7Gfqpvv6k8rYysJ2XA1DgTqTHgaJSsvcuqqN6zXgFUK5RDQkUj",
  "key16": "49s6pbQgr2qfNsNqS9GE2FkhJmjdgFFhiZeeoHLkxgdEGPWD37TyYVWQUc8zdvuZV7segotefN7ZXKj9jQu5z7BV",
  "key17": "4rPoiFXcKUCaPnQMDGXfSgFXmoVs7Pyw4p7eQA34u6iD1j3iWgK18hvnz4eS83aXTHt2Lnbi3r656LgvZWowqVLd",
  "key18": "2YKVxTwGEy7ihHNzS2ezeD6ZqDfprSY9xRyxFSDVCCp7AYkjsSJsAMdq3JQJ9HNCrBCPh3JTZXRLkdNVHcNqM3df",
  "key19": "sbBciZ8622CcFR7ovEX1b9EqvgLXvzKWEQ78Aj4hfmbz6CN2HVdgi2WSiiwKNiauxLxd5v5VnyUafWXZcdHJmG9",
  "key20": "62NqArWU89k1WyEqkdAzBqF6wYeLJo3QnuLQz6AwzvPXz6FchtLNvNL6tjnrLjEfDUwRu21C4oxj27TBPc11C1BU",
  "key21": "56G1jZ9zctmvPXuQADRPq3q3BrzEx8UsBgBycTCgmNwvK6ojxpbX3uzkqLsQ2oZcTrM6TsNkLDT8GfCtkCewYHaw",
  "key22": "5XvpNZLQXj54NLf8d2nwCfUVbCZt2f3xUpQjtMSmYiEzN3up2XR2DtMwtBr6TV4tTeqjh3EP6VpAQN9KJP66AzqC",
  "key23": "2pM7F9afo3oaRPQTKdFHNTNffZGUWyMw9DqG4RBH2BTHhWxjviyxjeSBDNjf2sp4GMjSevTrz48CGaKn6FZw6i5V",
  "key24": "5AAYqDy6iC8UR5j6qW755rsTWxLjPot4ZuDHhPNQdghffxa6awgAg8pfKLqvCkQbUQiFX5UgNbaBATYmoHo8AkWp",
  "key25": "3sDPxHTYgZhyfySxpxE6bJwFTxvusK5Z4KKmNtFgjia311gVosK3wts9wYp7zCYjLSJnjuLWHpngkmjcaGUSeRvJ",
  "key26": "66qMpk15k3q1ZZpXA7Jwjx7S34txgeoUS1qffE3bYkvoeLpL71yjyk3DzHWbJLSqUTWY53HY8Jr2jraeE6eDai2i",
  "key27": "P58JuR5TLtABffn76SvxgT9XepD2xmZgpY7881SPmoAVJnGNwwGXsjJyVGhJSv4BrrpbtFSECFJNFH7oNXqFxGq",
  "key28": "2QxNYBekzFiUJhirRGiJNfXnf9UqeML55pcCiBQRfhtNK3eFqpNLftk8cGfrasZvoTj53BTJSzHRPHhdCd35bH4V",
  "key29": "4A5i4hPAMnRb5968AxnLYdkpuXqNA9mFk38wXTeWq2uQFzDoveQnwPen2LBhY9qRtaihVrcesz5qiytLWgqmLx1b",
  "key30": "YFF9fvZJST49M8C1M5hPxv5dLouND33Z4dqiCGyatCQnMxvfbpWmriKnppYht2KBipMBDoDZWof3CYEn22vKn86",
  "key31": "6C2VtS2q81aLmNxFrSCAHYFAZACsWs16kfdVFzWh5LEqLRJL9M9FLxJmCKgXWt61N2xspQBdBSN21QraY4Zq1XD",
  "key32": "VjwXyW5vksPTLEfwFZqh4UFZFQziamevjgpvjgkjyju5Ai3rfj7pnZMFTVYTX5HYHeALLtHv4wuacpd7shNWser",
  "key33": "Aqvuu4Kz1iEVKS9s5rS1kq5HoSH4FMGWuTCMXr4zvd6V8B9APb7G91sEQtpNbW4rgm9oy2vFbWWhdMDEnBYUg89",
  "key34": "vgiTzuL4pfRpAAMtyJ85uGy1JZtwcWpVihNYi3JyZQddZawexZagk9vN3FCpuhuwMddhLu4HJxc7c6ebtXPGN5C",
  "key35": "5E7JbB8e7dPVFBFz6LJvdA8zeawvNzCxaSe3N6Wdeh3qyV9crhwQqCeVvuhpNpHCQDJZiXxX19ThgXEnrbsrbFew",
  "key36": "3V6AbSQAJPpCF3vzw1q9LWKeYi8LUDDrt9kaw4jxPvyiExPRrvCPesi1uH9xyScEDo5Vrbmjj8DQfQfPmwEkHgEK",
  "key37": "5cggYyguHZPjsDDwBTLpTdf56Dm9NvzqrApqTRh21ya6k5n23oKDKazHjViAMKbfHeFgagm9ri2M9SHibkuK5NJt",
  "key38": "thsKDK593kRupb2HQYUeQU9BtJMdYordPR3Q8rjhGbkyFmAqT7EWHzeRFmZpghKQnSwrf9rbcXrFe5B5i2Dexdb",
  "key39": "67mHjL2Yrq5zYnQbadMSGhNEcbjqKz87sDbiqKr99hD7A2YVc3GrJZxjjuAyhovGBQ2DaStr5QHTVo36Jx1HZqRm",
  "key40": "2GJQrnJMJwMyzy5P1ScMLP96YGrVYXDi6Hui1SRHjaT2mGPpeZX8FBCAdAfuFpDtqfJVWG5XZz1w2SPHwEXrHBha",
  "key41": "4wcc7WgbomNWdZwjxTTTYsbaQvsj6mN2Y1YmnwFVAfm15APcM7JJWP6rKKufaRkGAbM47Vyoei3tPMPPzARSHXT8",
  "key42": "4U4ckmpVqemrrsF9nSpo2KUvddEKZyamPv2DEcirQTfEBkNae16X8CFUeqWnkmjv1j9U2UP8Sp8Se72Ld99NT2V1",
  "key43": "42hUDZP33osVyVLPT9vfnjjmhk4Evgigf1NbM2Ba8Q4D8pRgo3aiZ9JrfVZNPrt6dFJDZyutzgoWCeXYMtuNG7ei",
  "key44": "mznGooopdjkdZk7QzxpnyMaJJxyp2FWs6CT4jWdrjg9AhBzUpyRENK9Hf9vJF7ecsu4BUWwNDws2VJ3wV564Mn9",
  "key45": "JuLJE6ujm7HGqo4iQsCzoincH7u5B1xrJY6LGTHB1b2kskxXN7FuCKEjDXu1F4UMKi272ARX7oBCkUpf2Auzj8B",
  "key46": "5d5eNGtBFEF5jxoxDrSExnjTBgpbiqyxq6WjDX74svocogs8zdsie4XTWxb4JpkJ5j5V23Fq97u66LGSqUsBvT77",
  "key47": "4TX3Jey2Tu8UE2kSGtwHx3AQdXLEB7btb9c5411qL56VFMiDr3AcvNGXdJH1ofRuZScUL7fTCmpGVrAWgbKPs4e9"
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
