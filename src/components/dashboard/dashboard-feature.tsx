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
    "5qdoxWPdP54Skrz7V8XH4hzpuUAoiYNDfZGRprk8SNB8PjQd1DfspJsohF7sXPiG4qzR53vYbHgABDNzxUas3CST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rGKdfLVVo23K36tF3q7tCwEVUi66ujnUSGuCHA7muvXaU3UwoFGyimgVjzjLQDDJXQtQh6GMkw6VCYV2tyiurW",
  "key1": "2sQXonS1F3QSimj2VxvvaNQeZ2VEppB3eBrZig89mUtu2HaejeUESUTY17gdmvv7j5y5Ysm7ND5Fhy6qs8bMeqin",
  "key2": "rZWXuX2o25JWivCCQ8bpt3wArzU4FpfTwrSYhuqXu2wBh81KkiwUaDiFq4wawUyHb8j9sPkfBu352QhdF6fUhFq",
  "key3": "5hyviyYPzPsWxooEUHURWrEecAmRrDFca7zb3cko6r1gyamvQVfw2z4UJzsGNJ1PsMfA8nJWp776pYkr23qEgLLA",
  "key4": "3ycxFLdVcNaxe4s2NiqX2Y6rcpooLruhJFb71APooJ1FNcnJ2MLSz1i4PdcT4AUskqiBksWyw1pMYpziUj39jeGF",
  "key5": "3vDyb9trxiz5Atm93F8TgJcidteFwigA3hoc7edP2eTHTj5fdFKsxU1b4EYkCc2JNRBUX1thBdopFGFKU2DFSerZ",
  "key6": "5mWxpdtZMZotC7x4u4xW5q7utTuvU4W1YPuRvVqQN3KpoLxzcu2rB9c68mivRxDotZbPzHv6LqTdJRrcnHbR1pRX",
  "key7": "49i3YRE4eB4B6NXcPYXvVXTsHGWs1vRVJNzFDaDG3Xxzyk5g4gPXRjXMJV8bBicAipyuDC4ZzehZZunAmsBx6Xdd",
  "key8": "22DhReDDJkqrjdnybPfuW7t8ibiqzbjetLuNjKUqZDbk6tYFNaWrH3TRGk4JWaKzzdoRNw4XA4fyQ3WES7bLz1sB",
  "key9": "2wg6xxK9t1LFmRtmmHyJwaCemeNCq7czQN7aPWtoz4BHfKuA5rzkgegrcaK1m4dLVyt1nZ3RUH1bUoiK6yDcZ7UY",
  "key10": "3DBUjKDR8EF7tToaXnTg5WPnJjbrjHicEMPchjDgAWPnm2Z7gnvd5cPi7db13sbrPgyk19TXLjnJqT3yHhjcLera",
  "key11": "5BUdYw9QBxHze84KDxbqw9yC8XdA8LGC1P6rofz3Y9KHSjvfY7wEUpTsu23abfTxKvCz5T5fr6WExKiS2nFunWE4",
  "key12": "5kUF6ZvVJaYdn4birs2ecnK68y9EPFzFf4htkkgaofmoEuG6MM2oLTvGTG6H1hZZsg9xYEdZj5meQT2thP8DMKYt",
  "key13": "67dsYepngmoj37eyWXZ76sn5VAPEgykCPzAAhNg66suqdopuSP1ygLsntgUvQDq7HdGRBUzqidYqAzQcte6WoAMU",
  "key14": "PFeNrDFdp2dZ46U7sBzgFLjfXD68pFDGe4A5vnFgEmSVX1mZw8Vao1GKsNUWXeKsUYDbZnP8B4YaifUP3cfGoS6",
  "key15": "3quq3EW1tNgi46Y48zkqzX8GSuYDpRwwrmyGatCcRtcK3VFRCk5jDqWaWUnC4BVUktkzUtomBR7vvUa7ZLMkc6Lm",
  "key16": "5N9BxCMTJum82EyT1VQJEfK6Vk9H7AaCSjNyWTij1ut7q3Zoa4DW7NeFcZE2rStcQaBgv4YCQojvkFaXg3pJY9Uz",
  "key17": "4zPiyLqqemqW6Q8qQCZFDmFKoQG1zbMZxK4R7g5eBv7vaAMcxUKurhi3rE6s44o4gAvmLSiRJnT9cM9extR1J67h",
  "key18": "3v3DqWn3FCYU89ueMzwpuSs6CN69AJS33WnqFiqC7z2dwEmFnRBxaEuJoTnPsSiSjuw71quNw3kwp7R1P89mf8Mi",
  "key19": "3Tf1HnBa3WJY4qzWszU3Qn2cuA4TJZ1Xj1svJKRF8dm4n8Fx5wF9CmxiMzK3yAj3A9hgWo7LTTf7HikM6G2bvwYF",
  "key20": "2LYUmEKeFGZ6ZRv3zLwuWf3SNmSFvzJK9GBUtwqw6wo1KyMFWifLo4gogsbSDuiCnfp6LqWwT77aazKFQQ1xcJAA",
  "key21": "5UjjV9eJbtrP9fihymPQi5b7J4oy1f5ehMuWtDxWd5TsPQgHozR45m2ydF8NtaBmv2BDMopcyTF1TATwQ7829Swh",
  "key22": "QWRQ3J1bAN7yka7ZqA4QoFzhcLvPi7XgLJVTwiKUngAVZtHhaZv8gPBnrYDtnzJ3J2vAMUygT33rLwqya7pzvJR",
  "key23": "3e9VWtvKmSpy8ax549ZLW4oTHzCXjceaXuqhZ4LdGpxZkR56E4CqFC3iVTyQZt5nACDJu1vLEXVTNVd9ko7V1SSa",
  "key24": "NDNNPnJn13mUXjH63PDyTGhwFaWTDyT6hVHU1gokT1Y76xyEKEhy12Btd2qgQULeTMomBHedoymYavFPy6yCLA1",
  "key25": "5Zk7oeCEK61x21Fo4brwqRpzQhnejR18M88oZitqeQvHbW4QSb4xa6MYtAKXTdG8CXo3J6k9kGA4wkMPcr8ospjr",
  "key26": "oduYU8Uch3Kii2gYduyLs9A8TUd8yiDNJzUnemoybxxeE6m7YwpW9eVRRhokReNs3zkqHszEe6kAF52RgPSk9bb",
  "key27": "5Tb8myFpNadAZMye4Amj9iJns5a979gAWYNJfXxFedzWYT6ugEX2VyMWWfrvUZ8AemWdu6D9mA4fVjC3Z1xsGdhU",
  "key28": "WifYHMnpgZTHBeJDT3T6hWEg5TU5m2gpGkrKj9jXtoTjwr3xbHvbRCDf9JY9E7gDb6fNWArbsUhqvFC5nn4qy96",
  "key29": "3D2mR34VFufzXQez94841154zyUw8CVZwoTcSciXMyHNM6yCRzT2gDwaAxM6hT43dCn3X4Mqsw944MW8uLALS9Xg",
  "key30": "37bgfW29gZj62yCqFyNvhfF9ucXm1k11GHDFo4BgoHEzZ3DfiztrzMfbKwwTwrgPLFBMaeTZHoU5hHhTkMiRoqg6",
  "key31": "DKJBNVScLWGDEJMveQk6DWw4yKrXKgqt9GYyfZVaiVzWVd66VbdMp7GHrf8UJMcj3jyQAEP8zdJXMErcNbRXBDM"
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
