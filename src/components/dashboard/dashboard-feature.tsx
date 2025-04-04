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
    "5QGZuefX1EVV8ee4kHThy868JF8CSw3eQjGJt4yP3FsunLoxaZzxamuT3GBN1taLBmaqy4FBswpxqmLWUKEXivw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4EA1bgWq7BVY7ACbqsp1qhi4DAKFAJrt4r2o3VJtTuKM2etkD8zzAguo97dqNXY1Qt8cVDwqCZ6sTA12pTkUih",
  "key1": "39NR6VVCQP5Y2jYLRSNB1PjH13fgj5StuyGBScza5gz9sqXrDvFK56XCJLoGGNyi1A6KcqPZoRC96rXmi5ikbaWN",
  "key2": "4y1Vx6iSThWXT3QcMdDm5xkvjGzH2mSvjacnuxFZRkp2pWm47fb92mLtAX7gRH4RugB3U86TaHcQh9vhV2cb4Q6m",
  "key3": "4k6uTDUrAMAjRK7rvgXHyLJwW2HTm8sCB1g7bxe1Jc5yJq7dHhwquYXmL4cdbnZbUM14JWCCZcQ8UVvgoALQEHvj",
  "key4": "4UPMHM2DPLNZ1AFXqLy7WUWeWjUFa54Ffn64VU79bB4B8ScPwR4RQ43SxgWbuPq8PG3cQ6niFroPUBLqACgYNqM1",
  "key5": "57gTqqcFnzekvofVH1qTA9RqKn89MkbWRZZCuB5HnNSNU9hWyCa11r8KCohGF3yZfDD7yja22LuUjqvbyB4ftu72",
  "key6": "592jsqKoKuZc6rKfbhHR8rbJsTrFPtEApiZ9CYjX6gaXsxE7Cr1GV252uyLxViNnUwkVvabp36VYWLnaJeJdhMXc",
  "key7": "4ksbnTsrPggkMYR4JWndDJGJgc8jfqKuWWKn82nc27ocJDeuyMYVSsvoSYLZ9NkdQt1tENK8tE5Ta4DcQuGVgafe",
  "key8": "4cNwgt1mEiDBrEmeMHaXMi4s9rzh33boPNsq9SoVHKWcVHQTjW92CP9E8ePdgeRBDYESbFtqXGbEW5wPHpwscztP",
  "key9": "5Sdhat52cTP16pw1GTbuRuiD7oxQm2UDjQd7VK8DXhvhkw7uoB8qCKZjPUwVywNCWoPV6DEdaXeKkxfUFGJhDcr6",
  "key10": "4qvszSGkQDYmnKenqhTt4aFD25r2kJPg4K2QPqwAnTGkF1cJgkxxaQABXaswtqnsHjKj3HVgkDRxUuYcup4oXp6M",
  "key11": "2viiBsomZhEe5VA2t4VAzh3u3qjwW8na8aWyZCeXDgsCb6fKdrgF8Xp3oYbDdWeAMyWiYjDpEmmm2PR7pzrYZecq",
  "key12": "t9kcVnDHKwyFivwzBRzz3LcobykbLnsfukKzcDviPdjLKAJRxu9GUPEsWKx17zAXHtCMfVPTSkp91Gqqp3VJrXS",
  "key13": "2edY1bfajgom1jTrjN6FxNPvk6abRvWUdvDoK3kav19H6EsKJtr51hfBkNDb4yet1723hcAHwtvy4nVe5yvMCqdW",
  "key14": "3sKRYqh1rZ2pfLRnKtSQTQ5sAu2X71rzciCQVxwmtVqmKfPjCmVefXYhqVwPRprHmqWdJa5piknDTPZWDRakEifb",
  "key15": "3vzZgUWtaneKUQj3Cb7ypaDynFzozgj58R4hvVF8WE6Jdy2vWT419UAHrJjm2rpadEpkQHqDNoW3tHA3E86eVMXC",
  "key16": "315z5W1mshddE12dk5aTvasGxcfJPTyr4ukZZMhoPdAJNaURt9Wnq1YhkYTAX4FFFqu5DDQfyiL62vWLfYSZTD3P",
  "key17": "2oZwYgkztLGvx2bsgriwGU6KxSYUJW4qDC7s7Tu8LpiEcoK3v4GLh6f7UjqpMxGr5zHe28AATSih5SdLVdVFrnrP",
  "key18": "65MQhnFke7onH5QXfr2EYJqt7JNcj6dJePsociutx5gdfWyv4vEASA4r5yATLnbeNLMH7hL4M4JdCXSDhSfe2dtc",
  "key19": "2Q6FjBGYSGqj89needvT5Cm18NZZ51hyadnZaFwdsXhnbK7tgpm7BHwRiwL9z9xfamEz2fLsDLRbCAJU4GrXqE8b",
  "key20": "miFT4QNw9kJovw1YitcLQZQhZFHzZK4M3hmbCEHSBkiyHD3PbTygDD4s9gCM1goj5PueaJHreJJEAjkCpSiWzvF",
  "key21": "5rszdtv5GWnQMJdkDkZe5ZmpsVEbhqHbfHbizR3sXtLJhJDgy7DVaebG882gJXL36Zrei27N7kzyPiWpewtNkUNM",
  "key22": "wSUHz4by8VjkRdJCuWcpUiqN8wo5TowNSMi8scXtDrApTvMTtG7km4oLFSwUZKN9VzYtZAFArfeHhbSmtB64HMT",
  "key23": "WfFXtDfkmggAQik2CVW9xkfaVK18MukT41ZCmBCcdDqPoZQ1nxVRs45bQQcgQ7SZU3M5qvj6CeNVJJKyBcShdFe",
  "key24": "2MSKPDqHLqBP1DZ1iRAyq1pXX6LP1UEsMQQXgVJiDGFX4feQtvya6CJTBY8SN6P3RV8Zkp1mj9L4dz56X8ZmjWxb",
  "key25": "4YKc6Awu4PdPH4EabrQEgaG6zC4tR3LU5aSQ7VFUZQDETtJrAJu76XW9i1dWfKrnQgd4qJhZaPAmiQQMEYjqQD6V",
  "key26": "5aZmA65epzER6cEcD6NwFqBQyJg9MPdB82i1V3Rgzq5aFVjkY6paf6n3bo12p8WH4Pjp4JttdciJ7XdEpLqDs19u",
  "key27": "4fo7ZSkV2GXRW1di7Qk7RqC72eUzVwD6J2pT4AymisDS2nC1eXRKFFrypioZzt78hDFmzGUgtW1rWA9MeHhJCkhE",
  "key28": "53NZTSzKgHnNagWCpTDf9364ziArH85C7H3fLVJ6RkXuRS8xXvy4oy6cDhuymHWkR9PdwBdHuQjJU6e94Fmo3Shq",
  "key29": "2s4Hpj1CmFdWHyThVYyzZiysUbYDvHcpaQHAD9tGRsnTjrYMNQwHyuYuRvVN3vkSU5V9qXm9aSmYvCBciFL4MhRp",
  "key30": "5nS5pRfucXnkbRrLqNyJzUH3X2GSzRgUhsVgPuzYeV5r3KRFaYorHb5JxxPLNLnN32aAxAx5xKFbSvusYxUarkWm",
  "key31": "5URrZAnzWRWAyFkYB5RzJ19dV9HPXPeSvLhb7sXaARorDVo6EtiXqnB77WJfAaiSJeo4E1rvXNQtteE7bf5Yp9Pr",
  "key32": "J8jNJipLtjNV6w7WTBGX9T6xRKJ9PXr1Rb5DiWHaDnKqBxmx8kFxaifRMU9NbHwgw7beBMQQD5jKrVLFpG45JsC"
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
