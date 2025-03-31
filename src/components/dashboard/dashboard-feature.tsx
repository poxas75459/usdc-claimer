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
    "3GdF15UdbrvZ5XTYNFZTKyj5ZAVxHFaj4QYGf9nhMJg1PBxWaPKDEBg2DSGCGSSNRSwZnrmuR7pc2caDbUG4jWrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JuEvoS4LjsjYipzX3aBWUW39LtKQ6hDUPykPpWrKht9aSthqpftczANcwPJMxdXE43WFDZt1n6XXXuURssFR6V",
  "key1": "YXPfcVyyMZqBefbJdqBRxnpLyuBSNRMwTiL7utGVr5U3LDfxpPj3bJxAVMmq3waqUSvxK8iTk2ii3332JV3avRA",
  "key2": "URWciQ6neDMFFFJU9L1MA4JjMWjHi2G95aY9YZAPTQqkw9AwM9twRhnpZoJ6gbeUjtkBdZXZfV7bJrenJQo7KsG",
  "key3": "kESbnHDFTHoMYo5czoovX8cKGuujz7AFWPgCqToYTXMj79diypwv46sKB1YiDd6FnVqRPzUzxdr6TmLrH5eRS4U",
  "key4": "3fcGd1YYBsTMMruXAc69Af3uQpBXBTbrpZjb1KnDHUwmqXb5siWuGrPiqCXcrj3fHgrpCDp8gBSBLRQ1wSZk7Vut",
  "key5": "2aQ4XTru363ueVVW72vWU6QrFwbYqt2x5u4ae2MU9eQS4hSiLXs8f425pTBTQFYvh8HGSCxCRGJjT2sVUmGjb5Z1",
  "key6": "5ozpqxiUTqJSqceiQ2LN6SNi26A2B9xH9qGj2cM6fZJEhSs2Ye5JkgrtjpZEbgYC1tNUmQLd1BwQ1hJuD27sURwA",
  "key7": "8bezidRo2jd1HQmWrzM8nryty74R5bXCyvzmrW68SWG7hs4cCUWiDKik95zcUYEZKTsjWVPS4r32QFM2yN3PEJ7",
  "key8": "56wPwrQJPG1C9tVjLjmo5un5NSMaxdYJDk1WRQMZZgeYAsKVUAYGQ9Mf4kDTbqmXV4eikFD3ScM8qZrkvs4BM7wC",
  "key9": "4Qu7VYU6RLADAVgQJqiJajBa58Mirxb8x2Sc2XthFVZU6wDQUGxYdLqRCjcFkaQnEn2CXGJqEbxrVJ1Ucm13V45A",
  "key10": "qWTAXtgFvge5YpX3dQRrkZdMZWJhYLXqJNGqFqCqpySV3CEvnicjAQVAfayrLzDpBzppcJVPDLcFRs56KZffa4u",
  "key11": "3pppTBQw1cw3T6gWsvuHrWhL2rrH3MRsbPoGJiEsrYA6rUXvGDouBzbyWnPxsKttp8DVhruKja5u3ZVRdP1CdMo9",
  "key12": "nqCvzbFBzkSKwLHtBLRXqsK4KtDrbLPWzQEnHnkZyS4sqizHaA7FJDT4jR29vyfzx5KoyxuFogLjJ34KqCLgLLE",
  "key13": "5ZPgM3cMbqBbMNWbtSkztuaNM3K4B2dS9YfHrGYdGaauxEB9A7Yt2kPtfoCFgnfiQaHbMNdTc3giQA4cBjpZWQnX",
  "key14": "2JyF2vvg6crd27AFUF2KW66CjvXegmsqYLLvb6LJwaFCVupmX2Pii9xcM2staJ174iuWF3sxBUBsrHUE1vxrjEh1",
  "key15": "4thbZrakwnQbmFAbojoZMrjfxyPJL5piDHpvb9tTaebGJ3QofHDE8rrQyevQjJGYVEybnnGxPzWcpNARXEG8YtcN",
  "key16": "52KjuY28SRchtX5yf6ayt7UezHhgoWXaV7GYzSK6C8hk75GnSikCjQLtfksMLSyFbY7UDgWwXWdLFH5gfBYoJURT",
  "key17": "5kZdsHskyyUfFApUo3aVLJangrwL2g8NqyYbbiHitJeow7pCzGkrD6UHjZqPYpqJsh4pCwRG6MRgj9HNkFxSGeWU",
  "key18": "PtMjtG7wzAuY3X14SD7nZB2EQajsj2BA1kdKU7nsVw8zJn7NwfU3VCwswBUk3vcUv5cWcisJ48UA39ojeiTGheQ",
  "key19": "5N5Uxi6rC5rKLzE38TAL7REHmxsXgohRqawjZtrVzcedA3gDwp83n7vtHshAmk6dmXL9go9FWriC8aNcc7paj94r",
  "key20": "5JpJ21hY8PqDpC6PjULB1Q421avMfcAAQUmERVUihYayCkzZCK9rcerdo9xaQ21dE3SewNM9Z5AuVaZpompNzYcH",
  "key21": "58y9XenTmhZQv3Xc8MFUfHHiWrGwg7wFbUNpPXiFSYQfZ7tbU4LRtCMtEVGt8E66Ss4rEgvoGtdDjuF2byvdp1rp",
  "key22": "5JS2sw6z8d7Yvdnoy7PK6YoVogQBREzETXuHK4rfWrXa6GmxP4AA1vu7NopVdifb5zrs7vfw2n85jDbRsZoXr2q6",
  "key23": "5AxsydVuhWGZArG8Nfj6S67LjNfyuGiiZwHgumbfeyrqdTWzCtBqyLBDNgoDPesDWBGf7jkqx3w4zTYvAF3j1JT8",
  "key24": "4SDpVzH7mK23sgyPyxiGDzB2Ux2434nVKbg7potELkbfFjaFvVq25UdrCFFGsqpLoX17Qf6nB5ABTxLTncnaBDSd",
  "key25": "28X3xkBBrZSULUK8y1kN9JDEJyCFGVVyQb3dnKS2WrAC39kN2Qt8uuruLqZj2uN7WXJJxFZ7abpfVAUoAn7sv289",
  "key26": "3aQDEMydqACvANP3SWSeRf3x8bshSk2ippKaX1wgrDYdQFjuaAjfrmMhz5ZchZNTTsTMJH3QTPZvrGbMDYEqteVk",
  "key27": "5jv1BuqXmGk6DpBLcRc4vqU8Wc2mHfyv3gp2zoNnQA33Yvqz29iUuiykVprTkvS47eNBVumsWC9Du1FeQbpxwXDD",
  "key28": "36zEybyWBVkomMnjFmHTByqUmSd2SfWe2uRWhYkP5PgFLTnnTsRvZTyCNiZJfU3Abj34EkKLHsXiorNjTyv6EWBC",
  "key29": "scaDeEZfhjDUxmdrnTq5LbXs1YVid4ATDkA6GzXQsghxcFrx4CweMfzFhcHhkapgfLahxt7d7NEmks6Tf8WaE61",
  "key30": "eHkKkdchVi7GYHZJWvXk5GHh4yGQD1tx5wb1xPHzrVzneEmYRvtJgVbVweM1QP7yQpaadGiR2EucBi2tRmVX6cr",
  "key31": "4abeNdTzRujokP17k3yL6pU8zFk4y6qacJ7vSNJGDdaN1nGXbDH7saaN7YvNR7sjNQq2DgdXQZ7DgnHiN6e7byni",
  "key32": "43u1uXy9kzgdebmvmB5RrbGYcYBTViKUXcHGHD6rJAk9zK3A2Vf4rRiAGYhYA3Fjd7cXJHyKRWGLB3MhQakHfBzW",
  "key33": "5nhJ41BthFvk5fYB2JtXk7qwanhvSXau6xAuWuthnmPfj8CHgEHaxenArPHTNJpMTmTnchJXpBvnRWDNkCB4rvh5",
  "key34": "3myha9SLmn2cmi4k1qKDEgMFxhGbcnraDHE8ftMR8PR3WnTodTB1sevuUUHD8x4ueQmUdbygyciXhJqMTuApV4Wy",
  "key35": "5cCJFbbNiC4ZzKoenC2gcdibWJ9EWxLJ7AC7wqRjXcSQrzoFzUdvZxCqqURXqR3w2bpHJWFYXzGawbgRFT2Wv6o4",
  "key36": "2FcUmHsPwG1yJJbmvA6a5fLtmomcmZqFFwYLvCssZxKi5iXT6rNFX1Uck2pCikYrZJyGWa9c96x1Ktg6cjL2xX1P",
  "key37": "2uzJ2hMXbh55zMRWWL7JNz2Jitw1wjGSRDPH6KwxFtbfpfJ9os53VyG95G3iDgwLYDuxU4M4Fj7uNDKrxuw6kVem",
  "key38": "5CxhY5wjbTZ5gKLAHfhHsGAXduvN6y1hw1v14tC1RHmH6cnKAFxJBVHJymAn1vtRJDeAnpv7Jjvg7v7XAaaYVjSS",
  "key39": "3PCkRwr7fqhYG4e8LxDQmg4Wfkx1bX96G2wV8KmfKjfDjh5wC8dkq53p1xriS8QNFHEzPUxftEepmMU2tKHke3Kb",
  "key40": "2eP2c7SBLkLmu5Wb5Zm2K25WA9dPgvu6xWy1KYxX1SnfiAjmkenD3iK6SBp3dAuV4wR9U1KFM6sQYxbWnSt5WiPi",
  "key41": "4knkExUK3nTys3u52nSLo5P6zNLd4EHK2X8GxBfFErReCiP9ypRKp54zeyPDMfWXPKXQhRE7P7WRnsQTK35SKBGN",
  "key42": "4eVSyjuUJQEjAR4gGxCtvnxW6eayjNhHDG84KV7WCdFL7a2q47bkwgLtHqmXSPKGuLmzAFDSpQ7z9MQXUSN8ze9A",
  "key43": "2rDGTFhXnhWnidaZSFyifaqTFoeE8XH5nW3kRVQhRJHFXogrkXEmkGtsefya4mm1r2t6dpB7zFyh4T8xhJ2VkrK7"
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
