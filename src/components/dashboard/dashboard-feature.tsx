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
    "eSKenRfNU9gP6E6ge3tMF7oBwcDLQiQo3PGxTkBZzSmLxhbPbSWA8Ak41Cx2eHJGDeB4mH8CzWpz4NmHhrzv3xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFdAjj6V8gvU2AaSkAm32Dz8vJqWoJHgSUon6B4xhzF92y7w5Sp78Q51cvaHa8sWNQdKkKqaZZXbTENShrpYzk7",
  "key1": "813BuWypx7XFrDYzenUzHFSNasZKJgqTYcdCtZqQ9SeJSkTzuzFEggRb41AfewJ7fyX6E9V2j3T9KuyUByNnZk9",
  "key2": "3gomJ9uwjEELUR8rLM98H8q8m2Uijip1u1oT7HSGumo46QqfmKjy8zUjJSmZLNczMQ9d2P6kNrYmoW1GTfL8sjJH",
  "key3": "4xc7bRp3HRtpjRNhyvpg5z6YsftFjyThQqy1zQefqAiXthaqd1mWJgD6vk4LswxDykGoqAGQtVo8Q9r6kFPs3Ahh",
  "key4": "3x86z99Q19iyKCJHqkpae62iG8YExAXVGduPvkxMiU3rZ8n7RzXwMXEEUFyuHap87fxPzLi6MYcpkxVsN9BL8jTr",
  "key5": "4FPDUUpJXnXfckL7anupLpxqH9VHQQpML46ZDowTtA5BDmUaUoEvCLR6hxR9Zg41CzZvVBufbWeumKVmPwguMqi3",
  "key6": "42cS4q5Bpt5mjzPUUWFgzbKiekAjXi9DkeqexaGSwMvuSzxXtP1tAPyxfT92LHdM74DsAWCFjhhPTPkYSEpADCWs",
  "key7": "3bGNUk4ZcgdbcXdo21bk2k6RkEr2vgCA99Jbwd7MjyUdVTxtFZX6o6qMeXqnJW2c5KuXxxjecpCw8kTopmbmLdRq",
  "key8": "bw9qSR8iyw6KQErGJZAULN2YwE37jU5hCcESh6DdMPoFP7TY7i3x6FochFwW6vUKELCQvhXiRVRYQQvtANi2GKy",
  "key9": "3GWDhkBVmWKrXCTwgDAwPjDMNB8EzEPXoBHVgDwhjd1TUK8MakUphaVXLVHpbXWy69ni8pZ781StMqffsRee1CL8",
  "key10": "3xCYUySnZ4eDcGXaoEQ57E4F1PYmYtNs9iZPQKHHyB5GrLQFaeUEk66AAfmnqU55ihq4ojRCixaDDTReErYoVSi9",
  "key11": "5ZNo4HdR3cP5AWL7ygwDoDbF8URnFxCMdgcUgSucnAA37JgyjBXzoXaLN3a9xixdEuv1CrXEK32JJaRk3cqTRXJr",
  "key12": "3Gq7a895qd9x4o3vejqgiUCg3itTkMQQ2EqGwDWy5m91rWsjdt4QUE1gDYpohZuBZHa5bsdCrQVroLnMRnpYVybC",
  "key13": "66BNqtNmK7BN4CjckCedbprmkLGBessNGTStbapZcHihDfDXNZYjuT1RFjNcgbjR6EarfLvXDnGNVjVixZ8n3Cq2",
  "key14": "2bYKaA1Cp3ovpHK5yDekEFCLPTi3PDj3oPZwvSmHHHo1iiuny3H2FuFFdgDqFwaYyfvizM5KkHEFBsVdPhJaTG5r",
  "key15": "53K2Pb9bG63gYSF4p1CvXHJiU5e62BNC8mYqZ2BUDgWQLAD8BmF2tPsuqFSbJTu8K9fgavHKgzHbcdWSkq8n4pJ9",
  "key16": "w6YZow5rS8iVDgkPL8NRWzM44zrLXyK5mRgzcHWUJbyrPP7C6AdkBFj48Pz48W5WMd5dNyDcHfZeEGprBoRS7bE",
  "key17": "2Go9CJzFdetNAsSndGQtXjX5BRT4aVUGyYvPbNuXERfyLLwLQTpqW5xpFBF8UYNkui9XtSqUUuYdyKSe5vnMS56g",
  "key18": "3ybn8jZyTEdkXRrcuHib78NAzLMC3FvQBsZ2LHzpHNwdGB4XpWB1Xiehteccr2MyQ7LEcUz2zZmxgzUkWUZXSAcu",
  "key19": "4F94QLM6cLsFbrgr9zHcf2WpSukcEuaFi96bnz9rtYmWkbTSvVuh8ThdFE743faVBJGYXW8XiEnnDZkXhxu7rp6P",
  "key20": "5yVMpBfeXWwgJeWG7UhfEYXFEhxK7BEkTzKu2m1qmyN9jvKdPN3aaQANCyCLLnGLTPADGUNSBQbsLLZXeGZHmQaE",
  "key21": "WADKWf5N3631jgCgg8X4SM5uz1xBMCGn7ChFiFA9vxUfd5BzCxZ8jGEUwCCvvPQYteDgE17pW82uiXsxM3Hu6cK",
  "key22": "44niowJaTGBm6xpkamywCwoviecaSohxCaaHrAuEy3PGe9YErHgA6NoJvrUJEWVMtTTGoWvqy2XScJdUgpxn6Lyn",
  "key23": "4SWrgoh52waWTJK661Jz2Qqgi3Gy35R5dXF7aSe6KqJQHzp9SW54W74jULENHxfMjtPcrvtDbmLPZohdMxZ2KuhL",
  "key24": "4AJPuXKrzpo7ysDj8w6WBrxYc4xSs69MpUHSnyQUGQCtnsewaS4xqtYoUGJX4Em7ntoggtLLDiZvGXBJaGXqx7YL",
  "key25": "4AzjZqjsdFKVKjfTVAjtEYFkW7uNJEJ9nUpqYbydsDwsgkn2sL8D4ESAZ2pw8zPgWzQnGpYCV8p926pDnF9F8LK5",
  "key26": "5oAGUuXUrpY8WWS54912Ruw9YABTCGfTpV7zBY9YYEcUPx58w41y1xgafXWAJtkZGT6bJQ5imynVimbPopKUMsFj",
  "key27": "2AvWMwwFs7WUgAwVewoVT63ECWBFHoFdmNuBuf7sSMRPh8R6VN99Dvrb9Mu7zekJMtYuDv9cYtsEAneaSUo6gpVc",
  "key28": "KB8m9qkKH48sPcqssWkXdGYpkQY9Rh5ores6fEEnLNvdnRqDTWjRQDBWwWnL3GRhZdXoQBCWVLGViFANcF6RT34",
  "key29": "ame6EoP2W4hzPWcAGqi9YDxbzRX5oaKfRW9vAkAR461myFXJkha2STUYF9AYy2tfgtXRWp1MThXt1JPaYCdd1y5",
  "key30": "38HBurMdyGZ3QvJ2bDD9tKTdJ4eUDtNFr7GCSa4ySHX9oV8Hb9MSAgZAksKSsz5Mne38zWmLYsYiGBdNY2zTeLSC",
  "key31": "2Thx6ifSqLRbk6p8KkGh4P1JEYXJsS4wVMgey2AyLJbaXN6X3VpMk4HszcTpTMFwJzWCwU2MKrzg2TBU3D9HEuK6",
  "key32": "PCefVgtPto4HzBudPwDGz3iGV5uePSnzpg3q6hUsHC27b7YF6SHqBkNC4LvvMV3StPatPdvtLa6QiTy7jh5DcLD",
  "key33": "NkmjDz4VxLMY6UoQBMQNjT1sPZjt9MMWqQLYd6Bg7WGW72Kughd2e7FFMaqVXCxDeSUQqN9p4aiXwvMmyWgenwQ",
  "key34": "5XZh2wpqUFQN4NLNGnmP6HTMWGcq2jEaJUjoyNPaLAgipkAzxzaHSDLqvHdkE28cRkK33Go4W5Ueus11GunY6rXN",
  "key35": "3YzjW8wS2dpdFao84ouVVqvEKGdwsdckwyRm59xw5F19QRQuXrokxwSpNLXLuG9Vv1hgVCzFX1BLBrQfMhctZmrC",
  "key36": "5bEgSf96cj5fV6uyazugoaF1xWqQF5Y85VhST5EsZfKTE3pC3y3v7DQT8CAU82sPAAsKNmBS3R2WwWAt969MU77h",
  "key37": "3DokP4ssT6gUAaZTAQiJe8SHbtBhz6jAU3aA4wyg1mpnGVXVBrqbykC5gYv8bZ8mTVKNcYHmdFiJCPg85XBTytfv",
  "key38": "5hRrqokrV3vk5XeUPAGFbAiibaQP3WxWJcbRpVEhcpGeLS93xzi4TVvUZ3MkhVSEUoQgw5NQa6q4XDT8s4hfbc3y",
  "key39": "5equ6vx4xGVZH3k11FhvAnCKSdomKzhkjsUwxnJ8qCiKZJfasiL1RPwAW6LKsPJyXFRFyR6RJpaZ4k6J5Pz31wHG",
  "key40": "2tVL6tYaa4ApsqdTCTja43qFuEAE9Nqk1FbtVcnzGaqGovyRdbF2yiKBjDdMEiLKu9oURsTjvLxvWTkfnvQ6vrph",
  "key41": "55iitG7wXhY1UFWiMe2CGDqxa2qeQCDDZSv2auu4zHR99EzJimYwyVfJ3hPjGgdjkwUDPWRedeTUX5Kir3CfYDnh",
  "key42": "52WLV6j8j7N38cz5tUmEwL2KHGrQpeurqKAtMJM9LsDp7D2UxyjnRYbq78ZNzkbie4fLetp6gGQPTwbwuPJP2DX5",
  "key43": "5XEkR2w88fgCBxvprUHn2tSu4exdiSvFuLSMvbTZweU3ZRjmsiug9TYvjM452gvusqVyjDjpgRCgwfK6DeUYDzy8",
  "key44": "58UVwcJAtWXF7a7YsqPSWbC9EVMHeWauD937ufAWVruDeNm3Fif9x3TLNoTyQxzWPkLNoL4rxr5iEXXQZRu9tyyw",
  "key45": "659V89NQm82G2rRvwf4yVsrMkPbt3ptmvsgoSUv5qp7NzvVbLYtVFfZPDHDNoLq84zkxFMFwqUe2UKdNC48V3ZGj",
  "key46": "3WPKLNZ5wznbHNou6UZg4AM4iTkYbjAiwq7LaMcJqekg3UZWWj9bU3Twtb2uuojqC2N9zJTiTXYPDt46tuWL3GhV",
  "key47": "5EfL5sfSFPT8CARVzN8URH1GYZT3ze93y6CdmkdQ256qaBj5Eer9bxqfRbyp4CFdhcF7p6LxKXvM9NFBpbKkFSUW"
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
