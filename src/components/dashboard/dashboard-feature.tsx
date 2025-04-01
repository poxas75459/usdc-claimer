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
    "4PQ8R5KBcncxyTQ3Don9WXSL2shZ1LXFThjZfizJEQrQ3V1FKM5cNKcVYqTP4nn7bxGDSnVPAY96kxUwm2WvHUPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXuu8H6kikyn6gX9ZTa7fx1CSkrWxTVHCPJ95aUkhRBqeXdztuNnu7kkAvyHf9h79tgbta98aEGbyTw6qv9ks1M",
  "key1": "tFyKuZuC6P4fTDy5qCqkb5g4Yo9stShd9eLt3NPVjjJfAptUkR425WNSEh5sKQB9XcF8jXhAejFPPAESVYqR2bf",
  "key2": "5VYp2eqCAAAyajCoftQopiCyX5UFSVnRFHhSimJVXJX1My1DE7KvQRCzXa3KqUnfkGQpg1PEp6bbNP5YSLkhHT3B",
  "key3": "4MLMcncLjwxH5CzdPdBYuEwA9XBew9gZwXUP3E1sS5JoLuKfUHfwbPb9gBpoY5k5BjZhnUJTirhZ6mcGdURBXT22",
  "key4": "3ozcBaooCM2CdWNNi3DPpmxPqPjcmu7YkaoJXnG6E9B2znZDt76mgU95ZAxLiBFo6hWn2u1WTEfFz93Jm9KDS1UE",
  "key5": "2a9yCD2ghR1zTg5Q81ebHsiJQckniKLj2bvuJMXXtj2fRBjyw25pXdY9GmULBesKR85y8SJuQXMuJKxpWMrZYsSx",
  "key6": "EPvC9NZXUbFWjPKjytm5KdSb7hUzf1fTFj72yBSkgufKcNrUFgeMCjxF1EwRRNHd5cq256tRzQQFaT5wNM2ZgDW",
  "key7": "26EzdP4FMqEagH3aUyBBjYHtpq1SpnH8FqKzf8mHtD9tHSu9vpSvgXCCX893jhXkt8tB7V7tBiLFYaSWboSyzmBZ",
  "key8": "67qzriHP6RHUpvMZVLR3rxPYcknbkvjVMDNFepTDQkD4XE395xcVx2Ax9KWS4zbaGxshdcNVHteMYy7swgf6Xdkw",
  "key9": "foXVoG918fSaeogRwYyYtVX5XnuVL87mWPjfnQV6agi93swBmkATK2tuSbQEEWxaQCEcxvs6nPLA3ohtesUnni1",
  "key10": "2ApW6X3SwXtnFofeYEWpM4Yd4Q7RCjHjvLcYDXq39hvFcvFqdXakQbYW8UQ6FUMB3zCfVK3PMAhajUa9KNR8d6Pq",
  "key11": "3R7HBM9t7kj75mKUnPpQHUhdDRujnHpxZrLnMgS52Y74ALCHaNL8Tt1ziDd6Zexf4SFX3jUHxGx1TQ5GJvG6BzX8",
  "key12": "WafMJxAoKemDx5FKbDPmcmVzuKo22nnv877SBkYDqjUw8qyog6yN6G1ps1gpkHNCASkLwq5RTuizQ2ssDgbYjMj",
  "key13": "4RGyPWCupGmw9K5whzqrgNdDUjBQ3fWpLytWPFkVB5p46nY2keTEBsphPeS4Th1URGP4dqP1B4xjz1jCN111TynU",
  "key14": "27CTUftm9jzpj3vEatYZkC975z6NGK8b61L8FFK6HmxW9khuwY7HDPBpMi568UVTZpNEGAPs3ahmi5VPuM1DL6cx",
  "key15": "5kLGBgMSkhQfmcXjnqM9ydxmZGPicvwAa7nU14CHL3XokQXrhjoFMCCn2FDHqoMihKihSYR7aMP6Z2KS2VSsRSQD",
  "key16": "5ykGFWNur8heQHYPEvaq4FzYw7jgEAYKHzb48TCzTHYm1TNu8m5ftLxJZgRrUhKNhhnxtCTMnSsr3Vw7ZumjYF2Q",
  "key17": "5PYn4uRZiPzQq6fedUtTSwsynNsQfJFL6pz4ZegiRk7C34Fhr8jehB5pcvFm8ueoa3PATzuv9b7D2cNA2ozw7jmV",
  "key18": "4UhDmXBpKZzTGw9pB7gYEw7CzDj2suz7spqZNnEecev6n6faNXuEADvLYGTnCBqgN1GwvaLtg2bDKUArnQJiaLq8",
  "key19": "4vQmFfqNAk1QSBGBix81By7FKT158wC77Qw3oQ1m9FguuUZh2qwKkT2EeweJ5cYGhM3Bw882LkqLNqy6VNmiuib2",
  "key20": "3nifdRkKcGmPvuk5HmoxmTyGrWQQrC7vWbdfexgtfnnB4QDuVhBqcRjF6YTWVYnFyXpNQTfTF4rnssyJNH1vGYSx",
  "key21": "54nahAWPozPWzLBFNzofVRcLCKtCAa1vseRfDFYpVvubyq12UNwo4AX4Tr8x2eGB8j65KVmZMHdCyj7iwcyGzyUf",
  "key22": "5duNdwMfutaC4x3AvURsYejqHd3mKdQ1xPiDYncSEfw6n15vigqh795EEKh72xs6U9ZmP2GsPRWjkQ9iCyYceQe4",
  "key23": "4f7FRLcVBALGHJqCcNJ5NoufHgH7LVgeWP93AqFHZpT5NEgD8qrN4b9dBs3BzvkqF4h6xWdgCKvav71dv93c6Nsz",
  "key24": "2ZWQ3BgWvTn76KQPd22mmUXpJNVadCnfqLgbB8ymbsgosqypZxs1ZPygemaR23c2zdAc9GKod4gHNmAmPpskzSQ8",
  "key25": "2uJYfyfMqgNeRDB6QmcBz2RttZgAkFMuP1NZ7Ka6J7WjbiJyQkQFikcf3J9PpdhTw1RdfBV1wDsZe44syA65tjRz",
  "key26": "3uopsV1yokg6sDsJtLRvkPYdrk9whyjwzL6XoLi6zDyPuFumCASA6Y1YhMiytm7pKMvqYnmEmUGotoLBXnB9Vayx",
  "key27": "36KQcJQ5Dgca8xrkg1jRumtt2gnwLGvLQ1zH1tiqH8aJRDhbZCCdXi6ESQ4xqMSXcTNLfiYwfqBiT2upRAdhLts8",
  "key28": "5nipvGVJDiq3pN1MR7x5o8HjfkRR8xuPyDF5e4UdroBBbKgR5sya44QwnAFFTwCfp4PuVfznM4JjX251gqAgtoQL",
  "key29": "5Yy39gWUbE7GekJ7BMgiLDXAg5TbZS4H9sbY1PqKbrT3j1ijEjJsBGJf5q3KcWoraTvogvMGTSYAY8DF8cUD9u2m",
  "key30": "632G9YDkwD3q68JReu7hdZPVGt5u9bMZhSrrHRBf2ArcZbWtsaPLY5F4eoVWkageuWX96Ww1jF4T1YhgyhMehG3X",
  "key31": "3aC3CnUj4126ojqhYeaWRqDaCuA2nm5vCQvyLG689mWW1GGCerVtJNVMEUXgZcJnWQ369ZSZfNC6Dg33oCgG6455",
  "key32": "3RSruN9V8V4YgkCNCVwMDTZGMTYh8PStvH2QNDeiJXvdPN7NLeBJDwYDTGRzKukvo8AJaTfQcCbPcEJEH38DFDSX",
  "key33": "yX81QwZd5WcbeKb8JMdLuECAJ43Mr7sUZuGpwE5dkWWndBMdE7TeXzzNcMdyv7qKpfUXVkSCWGugtaFDGptMaBx",
  "key34": "4A4zeDFgSWJBGoTGjcmLAb6F6BafJU4ZnLYmtsUFNoHaZAVAmaBE45js2z1jAf8sj84751FidjGz3z1tESJRbAk8",
  "key35": "5aGeN3ecs33mq5r43p27PuP4QwEj9g6RJxRfir8J63tM6DuQ4uEd3Cnqzs2iLFvY1qdUp4qGmnGbeVraoymxmv3N",
  "key36": "4PdMgZ4VRrKfhVUrF8z3mFefyPkoYTKYJwFSfjNqdsQBi5GYtgi9CY1jX8X1CmPFfHebakbbgnCcYj2PDNzrdK7t",
  "key37": "3cums4DdPgAFAqjkUyv1RtdZPMoXLA1cGnKAZYB37bCEtH2vJHeXEHmByzSyhW63LE2KyRPyWTse5uBZ1rWYL51E",
  "key38": "4KWgwVQrYbqXGmCLaoxkqvvLsU9tnkpUcdLwrUDDfQrg4nGJ5XNyba7jh3MhoQFD5fRix3wdifSATeZFvbMCvFNM",
  "key39": "6fYvRefd9GHCkNxT93FrKU9ybxGRfBL61ZaVLW5zREYBbct8waXtvk7Ru7Kas1z4V8B6fsdKmQTP3jEo8XVWdEt",
  "key40": "2oic5i6vkksTTtzqhpoM45HQ47iUVSmusGSmrKtsBwi8LTfmP7wESpGHhSqC7zbRLM3SkU3VKRTEoTnM6ggjdV8R",
  "key41": "3Xx2wbzkTcJop4czVy3QwyTXYTkW5YaGa8S24zwCcd97B42nLsdNhs3DZ4GMwzHdQkYkyA5zesjxMQJMA88H9VCM",
  "key42": "4nqBE3dW7raCARTrT9kBUkyN5qvUyGKmrKqq1gAwnD55S8RZqH4Xhh6aMERzUB7ZeXPP5pa7teGQBzo2m2AuN6G9",
  "key43": "5W4JjmZdsLJWZWCB2uZQeK3xtYVhfTJNS8pusKEYS1LfzGqBc3goc9wFkD8RroxYdEnxBpbV5ac4quLtydtUSiJx",
  "key44": "GojJzg6f2yG5Q5QdJpVLmZn2EiUsj96At8rpdeKSUYhXEstwGT8xePwjVnekRmsb1fNyyM9tHWvCgT7w7gueMEu",
  "key45": "5UDqTgLsSCmkS3tmbRL3b4fzqMk3h6ZZyzQSBUFF5wsBwAemafu2ZQpbvGMUUgepUvTYSUomhwsAEWkxz7WMm3eK",
  "key46": "4h2takgpQLRRgv5PZKqnB6ykVQSQYH5SF3BvA1DprQ1bEy6VJ4Wa95joPjge18ujL4GPUfBEW4qJb1eMEwJGytkn",
  "key47": "7Y8TP488SVnirmgyfqZVAdvh28neF4Ato7VRunnUJqVDhUEVKRf59jSaCE4ntVcU6ysG7cddidXWpGFDDr45uhX",
  "key48": "3MqSdwftAiAWhDLoPbfPzykXzpXav5QV9uxV7VW8VxftvhdKYmaq5YXgHHQF62ooL6dDdtnQeLGssTBhu9YKpF96"
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
