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
    "4zAVdLS2GNrn8p5kCDnxfcnfDvdPraaAMRmHmbZnxaRdqv1AwzA8KMipFCtEP2ZjjrNrJFHd4UaPiQiSK8JakvFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXcQJG2cKEYg7ZDQn7VvhXxyWNAqxpNsTjqn9fx9KtpNeCQ63ma1Ghhv1yo7iaM5xNHLAtsRcEvwzkAop8ukqdi",
  "key1": "mQ8VqCzbzWwXHJqUTD1rqmJAJC1F9djF5nDnUvbZWp1etfWFhAwTekhrUczgVUm3in1jfoc7o4qfznExyu1WbXn",
  "key2": "4CD5KBuEc9tT8GRSW1ygZ1vZFysvsK1tRNkNCoFvNtZKRcaX9nX9puitC9iSpHs3jW63pMxw2iPb6spwMVdg6254",
  "key3": "2mEEh4jk329ePdwSyZXFWNuqpLrZCokFbvgrbZAJmhnKdz3sT4hVqi5Q2S1eL5pA7FL5eXpYC7T9sNnPajxvzsr4",
  "key4": "55sczuv7UUyhQK7qs83Gr74kgtPhkUdd7WkZAtgjmdJkUzc1zG35eZbb19WG7vXZmrih7dDwt5bhPtXFRqPQ6DEF",
  "key5": "4P4ejYrTHzmEQXTzVCRxZ1uJuff1Dv4LFaNtSmLvkStMtnzvBKLoATYJZDZZvaQw9zJmkHkXM2b2L5cQaeAjj5o",
  "key6": "P2UYTAU5B9NHxrVwshZ336unsnLViMqWAWT2RFgNaYPBpcYqWFqvHRQ6ZfMdpGe1updTswsnHnqhxtvHPSMBYzC",
  "key7": "3W8Li6sffpG6CJBoN1UN8yTk8bArt3u9cAf2naTzvWWm4tGkKdUJdzVpkjayBXGCDT4bpKhpLh4B2VEZ18An8R7x",
  "key8": "4qQXXfooxwc6WTDS4BxVpLReyC5NWFbWZkuRAN49ivMfRqRbyJFYXfW85ubNhbrzqMntmCikW8wJ98u5C2JWoAvw",
  "key9": "2eDS4cDzkpkWMPBtYYfiBpLmExCYaNR1TDPQuPWz71g8Ehn5imf7BWUwcMFJT1xWnfhK81xcqSXrW8FygJbbzFWK",
  "key10": "5R8dJy2wyLMzMMXK9yNrAvNRLVanc5MTqE6TFPKBuPNp4gbBVKpHvXiGW8MeHQPXXnUr9RQf4M2xPx5BZEAt3Wjm",
  "key11": "hpZgsUmJqohyx2onQMaKKUv9RNTw7SeHmUNonxH9xyk4ehd7EEmreSPMPxxf1hxFqCSzrdTh1PpsPqKa237p6gz",
  "key12": "4FXC1JxXKQCcrFZKLUGBZviRicMQiVLJiW9SSA86fsnY3q7cz4sdpUphW5oUAdp6VKY4kNg5JUhFJoKBQXsaejQ",
  "key13": "3X2RDhsHm28BGeZWx365BgWVoAnyKqbqB8zf2koCpuBkuihKgLEGLMPHzv9BunCJi4VpKF1Vh1jsGRJwNnZWVzTe",
  "key14": "3GQpeREvuGgbXokuDsttmL4oZrY7rtL38aF4FpvetCTJ5T5XpYJvQbjWKPRyB3SYZP5eutX3FKxcnfS8CnGYwrny",
  "key15": "eb54rC1PHpP5tUQDqUp3L7ZDFgxLLiQQWZuBTQm9qYVFMaNjJcR5zXa9vYsjyVyWCeeNv6Zw2AZakM8W57a9C3g",
  "key16": "4ACLB3UyHnW2bPryqp9tDJzXMFfUWwKAayvP9H5cvnKTJPdFY9JUogbTWNgjN2WKx1jaknxjmmF1AMJX7pDSEDja",
  "key17": "2WRDZkWrCpHFMEbmXiHAdSqjVa5Gj3q1r5B2ajfebD93UPymwyox44eV3XgFw35ZeBUGU5yiLDwZjiSgfsBtYYxF",
  "key18": "3Yz8Mig8egEgdRaH7wM5AsbGMyF2k9TQdkpF5JJZhWZWWvQqb1Xo9AxzDXVMPf9ApJYb1igdk73BTBywQKjykB1n",
  "key19": "4RufTFdDyEAvvK8d12RW5oewu3P3fn2TLNpgUmR2VjNPqebGk195kqmKuBBMuia9vRaxz9t49nTTDLX6Ww2Zb7Hc",
  "key20": "3AFLqCxeCf5UZFLYaKWnqSxke3ge14KUaA9wtd4KCiMGLkmFJ4PRnjeCUmUF9arnyNVqVcyJWnePF2W8gnsTkYoW",
  "key21": "2jDuZMMtTPBNVJzZeFXR3Dhab918dBPiC7PH984jarTDSo42gfqragWumXefzNPAE7HCSX3BiWrfbR45pXxz8WXX",
  "key22": "3JuL9rfYxN7GJx17JHsMkPJfPgV1n7vFEDeaw2o2AaZhrvvUjRGphVdoQAQoKSr9poZ65s8A2pEm1hR6Mv1H3G1f",
  "key23": "4C2bw1kuzGauCqfkm4LSz7idgxcunadKCYvUVdaQD2EnQwqxev49VqAhJ65EinooGYFc9CJUhwPDLguLoH2GhCP9",
  "key24": "3dyHCWiEGgsRf2j5L4jiBpdXKXDC233n3HY1yACCUQRZELDj6bKGjuiFVCmT421vKvfcXu5kiTCBcnQixwNedAgw",
  "key25": "5dXLzXG9LF8GsQsVq5YqdYtczezCKRchkPAFJ9RRC8gHwhUTWXKDyRJzJGWVcvNADagSieECEFnT2LMANQ489jwf",
  "key26": "5fdVRV84RYparrA6gawUMWHt5cLqreKcL5kwQvR9zUeDuaLJkWdoArtxfU4gQwbYEKjQB15jdjyfp7tY8Wd3hRFw",
  "key27": "2Y8h2Wg9jwmw1hQvu5SSHGJimWpKtJn7JgxzpGXJ6uUFhV6yvWKiVwtz8VAB7E6YpQs3XbT4DaBnyQSW5a8KBQeW",
  "key28": "3cm9cT9TQHNp3wbBgVKtcTZqDiAFrHPsWbHo3rD4gh5s83JtPVeAyumebfawQJ8QbizCRU4kG9bbMm5tBf9wowvg",
  "key29": "JtQef8H2dFPGtJZchGRK27Uy6HnkPSH77n8fWQjtLMvhNpQcoNQJ5F2qzatE8hed25E51reBQQSpsczLjSZhGmj",
  "key30": "2theVSKoJAddWQVEixfmMmkrRMjmg7PWUvUt7QE1KV1H4A6zm45vvfcEdFLCXp7dwqsPv5tuBGz2NwosCa7D8Fj9",
  "key31": "2xpxADCDMnsXJBMx31BWcFx613eQTtwnsrVJMeT3Hbex3ERkPixxoFiL4iRi3yFi6WBq8zyMwy8T5vGoEGvqnbz4",
  "key32": "3anjRUhb2tjuHxxRLwvXAEbsH34cPkm3ae8U3bV55Q5KqnPW6ShuC9TNqw3TsNTYcQ79RdDriQZSfTu6MY86XU1p",
  "key33": "MYs1yUdA3hu1nWKGDy4QEs1d4KXVnKWmCQAkiPRg9o7cx7xmGNwV72XupFmS6jUwkmTdB3fm414gwFZvSWLPk7n",
  "key34": "YtT4FnqDg758xYGge1sg3n2Z3RdehhEJBDSX8FiB8dPgGrXgThEYQD6nwd1xYRGGDviv69JPzGQx1WNpsfHCmQm",
  "key35": "5CeD5DTkKKCd9s34ZXH1984LRWGnqgCCpXXkWjdsZJSYJKYyWy61EyRmHTtvdoE1gpBaVLnfe5kijomuKnWdFvP5",
  "key36": "5jmHQUbp9Jf5JgQAv5iu3jUdhwmAqweN7meRMeqX7BJs3oSi4Gu1zcgBuYcRCS62ehPB7ayCsLwbbf9Dv4hAqkUQ",
  "key37": "3JJXQwk9b9yig54WTRxR9waEuPzc4ExT28bQyQdrbUeBksr4r7r1JtqFoRLEsox3KnoxFFA1WMFyCeDsCZ5dKQeK",
  "key38": "3Lmmff5nNvR1fuQ6VJyNuMSJSyftg9RjAtadK1m2VoRPyyFKEBJc6rPQe9VXXrbeUyS6XxmpvbjeAVjYN97voAdo",
  "key39": "55ENAxpU7EeoabyHK1KZWCUvuSvgeRnyvEU5xV6xoSJ9v2yJxGLtszfYarySMwSe6p9CvcHyJHL8sz4GUWXsdJRf",
  "key40": "4qY1VTJQRcAsw8h3UGC88zheh87bN8dkCzckZosHeS86HWRooSKepgDb2uQBxB5A3UjjvSbz9mzhNMXRJMdjYbXh",
  "key41": "41kqswxfJWSyh7fFmZu5sQUbFdShsUU8Jc5tG2CrpFcjKCwbX8pBqCfbSD7Wxyan88DcpvGfrC3pYvJfdowe7BAu",
  "key42": "4swar831pH9Rgg7wUks9Xj9HDQqqye5coXkr3GRT2SwyDcoyx22hVY5iLtEYDwRpi2TQJctzQufEYB4h5SZym4o",
  "key43": "51XuSTs6gmvRz91k3dHDYg7B3rhPoxqvoGSzNokH13Q1Kb33Do7oXsKmM2dECQRuYZ3jTM4JPL9bMos8ZAhhSFKx"
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
