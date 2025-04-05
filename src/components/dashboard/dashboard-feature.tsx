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
    "3qNFdaabcRxVCgLaEqdcmmXx1WXLyXBTFPjBc1dzL3RfxkxHJ88eBUXiz2mHNMHfkGEn89hPMzmMGiGBKqfAnE6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PhW89qrnKnEBpUniCMDCDNUmLJBsAwx8f9JmghBHsv6Jn13g1LV494KKXQfduiduTv85WVoGdewXZP7KiMdkCxC",
  "key1": "3v8havR1kKzZgBdM9jaZ6U9sJfNvfT9644uihjVkwNi9j9DGrvz7tANZDEdgVstv21BuUCXy4Auwfev3QwpMd35G",
  "key2": "2dHdyvRnqVCAnNQtawi2s4Ke2oGr9R5P7oBxaTFukfhycRMvDPNWPHmbSPj5HaJwMuxLDHHUTkwvhvmnSH4mbVqu",
  "key3": "5LReLPwdZqa4JpNSTLStZtswDB1HGuUYrnugqXKeKYC1erjwhdHE4sjteGvCEZSWuk3t9pZh7a7NbSKsh9pTz6x7",
  "key4": "3tQK85dJJSqZTgPVvmU97osYnDwkvo3GeknPbFxbELa95iwEUUBb1B8mmpx5DycJpGHGjoz4CiQUDnFrYW58jopU",
  "key5": "4CaL9jhe5Y4zYyLKyrGRY1shuJ3MvLze1eUy4DB5scW56jsWfacFj1S2ZnGSqEDhMVX5DuNxsWehzofq2bzyvuMo",
  "key6": "27JPAcrDnWVKCzprKWS4LhtuCVDd5dQJKQsEGFLGAbCu2b5sqbaETBFg158G4cMy2XVb4rNj4f69ogn3wc7ni4kQ",
  "key7": "ZeJwLjTTspy7cAYCFJKPbZSXtupyb6nxPQytdmWg7SXnte5ebtetHHGBr4unhiwfhjBqGESSokjVco1wXU64VGw",
  "key8": "32pUxZPKAf2uz6yg53KS6VCWa8gXCb8CAbkm6XsFUpakvfz4TZzM6L1W2GH38uJtLfnCE5ssibQjtac4rXaF8p3B",
  "key9": "1vXPLAEuFBzyMiv2cJvRmCGzmNfet8wTMpauEXCpw6sLrfvd1UvG1CfRKYHpVv3MhwsLmratm7AsL67amCTM6bn",
  "key10": "4YbgToXouKdqyxD5G6bx3mkCFmq3D6gJa1KxiNL4EBg4X5GyK5e1DSz15Rt26FBi5SN3cYTbSJomNmHHRF5MmJhV",
  "key11": "3gLyPyngRLXzfpdzuJiE7eVLRL9FXssJcNc1yJpyiJ1AB4GVZGaZ6JQZDXVbTZcR69DeHQBscm7v7LCYRzonkPC2",
  "key12": "1221yvARtxjzYw4M3XPmtTDfLT8ry6ahiQLyLxjvkCrueLrr59Fxz8pKsim5zSa4omHEd7QNB4qwcxEmJHPJarwB",
  "key13": "4XSJMxm1Yk6pJXoeJM8BBcpHrwzRYmNUDgVhWuLXzijiu92mCjwNt12QrU3KhFD8Vtn3fa8vNzsXUfED4rCHfmjm",
  "key14": "29BCij9aVXrLMt9tBNBnx9fnAGqhRi87PET27F7hUD8kR2F4JaWaAEYTfiYo5F4S4c6H9n3wHmTU3rvwD5Ds1NBL",
  "key15": "5NZXfPuk7RMmkfMQ387BfQZFPJ9FrLaD9kqedZsNK61xNw3WqQZT7Xa7QCAUxseJLNQZQMqQLkRU52ZXuYxbtsgU",
  "key16": "2XhnyHDQxsiGSCwuWjWneKK2MnLdMxNwNZAHKabzSw3Gtnm5qPsXXUvRQyAgkU5VyYM4yC4NLmQt6rszW6h8kK7G",
  "key17": "2DSpHfj38anixng4MCP753rFuA5AzHKGT8wG4Kpa7AQTfXzJ49eKXym1hT9gd1eh2fBbmT9ZZGRYBqjUZvE9UCUb",
  "key18": "4435JvcEYSSq9PQff6yccCDp3FJvNhiovtsT2LFPMx99cax68ys6TCcNiMjuyBqaFSVbrvFBEyu4U8SpqeYZTKsJ",
  "key19": "5XVtpS1ETV8JwZATjFj3D9C7daTp4LgfS6kJBJm98sABZ4b3pBauYKBLNaHRtMUfKN3dEVoj71p1spFgoyccpXYQ",
  "key20": "5NoRky9RNFDc5Uv87bY2mgxgSjEKqptMAPRQqaD3ed9QrJoHsDSpBDyjvD68Q9kuxLnnhxKAygWnRfg7eGUXhHcY",
  "key21": "279f8z3LGHkZjGpbhA5Yi84bjLzcPZEk5aXGEKXfDCLGSkK95XSGLrK6w72qjGgzVnuToz76QDxFy62PAcC7S3xf",
  "key22": "3yXTcN1oSoiwX7Z8hR1DYGUV2Gz8uuUmYhH3N2HeLsgGowQjXMcGxiv24B1JeRtVxpv7tL8vD22SmDH7Dc7TZKzt",
  "key23": "Nktettt5w7AhNdVaZYJCZZiyTFA5NfHxzdptf328Vcqze5rKpWs8bqeBKn5hDpGAXkMiM3ZZoE7ihfZyq7Q98LF",
  "key24": "3aDRCf2xbnr2CJ6FS9fCgAj3vugrXhkLDzCCE4Rjm7ifYny7HRkfFaFKvKGQadfUxb6SjZHHMG91BX1293y2Hyzv",
  "key25": "5FhLUX4D6RR4tAoDzENQbhV73eXB81Lv5ohpH25uWYDWmpcHuATSqpvxVnHPh7d7DoERd8npaAxBQFFG874d5FE6",
  "key26": "5byp4RWtumacWHiQ8nxfoNdwkKfQfQ5kJzfEb9r3yjvJwNyV8P6GeVG4J1uV5nr41m9kBmzrvsrCMkmwRxifouae",
  "key27": "57Fovvnv9Y1GATobTti9ScXfTQkrdiqeo1yt7fGESS9KNLjYJinJjvxA5kc4qVWdKxo1cJfagsdh7vACPA4qCU6B",
  "key28": "5xfzNAe2YpzD65sNobzyQh52RLQr29L57CJ14e6PkPwUgyDrjZT3NgBN6jejjWWiAcuRseN9RnRJKqyBayT1Nvbt",
  "key29": "3xS1VGk51y3iLtxkzF8qJc1Z7KP3PrHW2LS1s2janJxjUBFCXLCxUJvNQqwMyneGPKxcvetpHWWHQmLo8G96jDmQ",
  "key30": "5Znt3kz3VAzZYCt27LL7FiPgPvK8mQtw4WQqMKkG7cCk73GTQ8PU65S3fgm7qVNRRysxTyZdTrEuDGXoAfvzW5AT",
  "key31": "UBWGXRKreVoAqPmt7cjfVrtHMSw9s53WMen7LK9sVemePSZcf67aYa85HxapseSBi51Xypf6NP4aPYW4CU8qxt7",
  "key32": "pZEBLzKB4MVPEHxjjgf7c561bVmJxx2tPFKqwjnDjaHJo3qaw6qrTS3TTh5G3fPfkUDRTCYMwNJXgtDjqP4ApRe",
  "key33": "2nNTuh789tkUi3aYTen9Qu5YKs3cX1AwoQzzVj3kMDbbStPTncukcH11Q4vVT3PyGLtZdPKgZJ48oJEmRdBokPFV",
  "key34": "5j1719tYrbpHs9rHGp3QoEdo2TwjJMJqqJhj7MXkE5BfMZ1eWDbJx7rg3dSgoRYK6ACotCWRQLXdWac2LMVtmy6s",
  "key35": "46ZyoN19p9MsX6hYmA3YAMSTivYNQa6S9jrJ7CdSgsHk4UsHrErkwfi6Jvy3kZARZrhaXkS9LZ73f26HeJDDmXah",
  "key36": "55p9RLYSC17FqHfhx6w8za3UReQhZBDey2d3BKY156qUnL1BpHMGDgmzT9yiN2M6jJ9vY3iNwU7kCKwbJgNb8DoP",
  "key37": "53G7LKLo4RvmMAhv2ysGUndT2Ym22pRpggVjm3Wvoqz5ZHZ2h3TfBWaYo5VLs4n58KmbL2wKWQ434ExngNpEZiE9",
  "key38": "2Xp4SuFtPwXL9NUJAJFbnCo4w2H1HK9AqjWZHijEBn8vUkTRGRVpoQjwSo3jpgQbgrbFkRyzimnpJfXafdnGAf7F",
  "key39": "2Xccfh2kXWPNKQhCeiquxJ72rD1bY8oLFWxtD7swGsqJFFTGrM7Tt1PzBvoSi2JP6TSWxGp9y7NsaSu9FS2z2se1",
  "key40": "5jk651NJ7hzxZFzWxJoQx5eCxmDuZCMRyNesZwMkfQoiEKaSkNxLii8Y3yfmfgRyCfJkBibChacLShBP2NaFHDXL",
  "key41": "5WnSG8YgeYbQ4Mfhx3VqyeqLmRwRu4gua1bfC7qo9As1Py3o3ec2EiLaJtLNDWEPbEF9v3m1KNCLXsCM8UTWwmr",
  "key42": "FEepcVj4LuFnTtFjenixtnfDzvGgt48yU2mUhE1ciZp5kDfzg9QZCHzEuUnzYTvGc9XyuGTvTH3CNukxsH8n1oF",
  "key43": "3HPPimzMLSEq4LcT81QhXirmfQnyoLbpR88JUikzotkbpB2GAjWeZXg7n12mDEN5wGKiXYRpuGBSw7Y9nBzzhCPb",
  "key44": "3Gri8xaFi4VVutNtoHDp9softTaxvsKQ9aTcUCk933KpxF81wntv1LRcDkGyz5jcVcwPAgawNcywXb8tKH6BaGDY",
  "key45": "fsJJo3kSwdxqCpdLn39QaSF1tLmE6cowai9yCBdSNBH5xomE1KEa1hZWoZkywfAWbQRrr9CbSfW7AEEb3hjMJCy",
  "key46": "uG3oDy1w7Se6FaTZPWrsM1ueHEWLkJr9Emmjg7k4KWhAEwoyQW834gJ7LvKsCZ8D3mKkBBVxZhqJhPnqXzcpeb5",
  "key47": "3PXTh1Wiy1oEoNuPqZszmU3tzsb2qg7a72Dc3x4dfoDWnyQPVTEg8zs999SkjUmXXTHD6MSwGMtJtK2fHS9SKtvP"
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
