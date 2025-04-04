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
    "HUcLMTifJbsKZmSfye6EaYgQiTxbtkFJb5su2Dm9t4qQL3sFAqUTzGG81V27KU24KnBNoxjwhntiFmi2GaWhZLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xW5zQ51TDkokcsK2t64vYLx7LecYDxe1P7ctSN5REhqGLY4pdU2kWsUR8BsaiasDQnEFVWaHXTNDeGDp4ByLqdQ",
  "key1": "235EuSqM1uCdNMNQo8dhT1MQ9jAZXwMd91RUTnWjQkp4xSHNGHADoCQ2JkjufUSksv67B3Hk2vAVTyty8nSaHFUC",
  "key2": "2HyQQ4vXccCv6rRaHmFwgw15rmNwQyX4EnUypZKEohwruKkwLUK42mfbzUiDRJiU2DZPTQBSqJaTnoqhZqzcT87t",
  "key3": "3anwB7CSxZoyxdzpy1eoeRdMd2fhNf5k2h1pDzHPqe6UxxRCzQ8Yg5AZM4WSLjb9LdD1sqrZkfkXzrzfdk8HMMFz",
  "key4": "5TNhzwJ4Up5eoy9cUcHW5AkDGx9hqLfEqy9UJbwojTPbUNgfNbMzSprP4L9hwFg1B58so97PqVCK8hvWsdy3Fn8U",
  "key5": "38JdzwLuFW2QuNBkQGsHxXUp7diniXK31W7nDnjnCiR9zHzYsxWKc8i98Nkcr2WBQhDZHrwhYi1ag3EmH2YzWufS",
  "key6": "5ViBxaBDQ3GbPQzx53Ln7q86tL684UVSuyRdDTWLxVWzCQHWgUPDJRYZTdcGvuw6CAUSvFJRLTq5FQKXx3kE8aV3",
  "key7": "4xtaB5RpQMcJktVbh3pvdrdgJPjwzFaWuiZKfduBpPTNbcRC41HsqcaXdgWNfdCvruWviHmg3NB68yxWStrAJBe8",
  "key8": "48ykwnHLvC8Rjoc4hXfgQfdaxZQoW77ag5gVjCNrjCHjARf1sxusxfATfvUoXfyYpok4wwnX8j2qRyCfbQ4d65Ai",
  "key9": "3bw6FhUHS6ZVFqnx3ysXVUfTH2Esxr44zwiaKCFpJBZQAsyULYqK5ahC8m5FbC3GqJdJvfvTXySEyXYNR3oWdRH8",
  "key10": "2GnvHckN1JHrJAzn98YrtQQ427Xt1kSGXKindz54VmHJMMdmeEuhCSbxYTRAqD7rfQDLUF5J2KmXFLgaK67VnQYW",
  "key11": "4UTsr2aFwGk5tUQkSzoiNk1jmhfoVUMf3MEYJqhJtHELFiVMcxyeuNQjqhsuGyXWhUPG1b2j5uPsy26oBH9JkzM5",
  "key12": "4e3iHyUsPcBidukvDVE8Pa8xNJHrJXL1wf2D27EenAtTBd88DTRWAUuCzNa5Jo7svnYSwr7hHQNyJs2tYU74X5wa",
  "key13": "4tyjd9gKTYFknfMTvcqe2qwK8Nj8d2jDtLytz9u5Q6C85WnMejaxPsXYEvFfD3dUSvwm3s2KEpUu4uhLLPdA71xQ",
  "key14": "EwfCJ6URid87MkkwVG59hyJX4uH6UDYQamfV8aQk4Yif4U8jqGp2Legz6CfKtyjqx4D9w45bKzBBqLjSDrZputd",
  "key15": "7HYn1faz1MhiQnwpmAVR6cHtyaLHR7bQzgDuJ73RvT1cMivThsKYEvBVR7HN2nRgqptT7R9SSmfy1h3QDqhb3Qv",
  "key16": "4Yk2CZkWtiHK6aitgBVVDgxDE6A3qEKDiysXYdyYMKsQ7ELQXj33Y57od2H6w3SRmV7y387QfcQsTcgRxN9upnnp",
  "key17": "5bFtfGnBhg8qFSLjefuhypQCKapneio57gnmZXqyJoTNyfehwL5S737op2yJCrM69h7NQbDpUCwN7xCZ4ioQtSVW",
  "key18": "5rgaGJy1uZA81r87BVSuFXaNjufTNwWcxow4sDQAktdiZdbtYt7hTUuyBBMS32hCGSv7WVg3Zbs9HAeVe9kMG69J",
  "key19": "2fYYrC2fNri9nCCb8JunxPLc8mQHrt3pHKHQhzSj6AYG8cTmLhqBjBPoUsfk9MTnhktHMNYyBYsiZUtPxk6VjwXn",
  "key20": "AC5fmGxEGf9HCjDsz3hefv7QipPy5Gg8xSK3pjE9rFeEhYGeju46KhF5kCsm3iN1As7SSotc7wFj8XCTzS4ogBQ",
  "key21": "aehDt83GD5R1R5uxM7puA6rq2R6G26wusrwjjVdsJeXnkgEpjM6UhhbGygoQnNycJ9fNdsbf5BosaLfYcDKaocs",
  "key22": "5fVrjGmM4vK9RwGDTwKqySFqE33X7x4YAhKTigdGtxe9eprSZPjVRyvwXetfgQGZHik3ABSmM6doX3AjmjQzCHe2",
  "key23": "4UMMR4wbLzvt4uTq4SoqVVwtHnu7rxt8seKy8oeDGbVfBJaMtdaLVBwmH7k2PLSUTKccBtv2wQttrwyMMFNTpo6g",
  "key24": "3v1WwcB68hf3pUR2dDpA9brruqj7XZGkdEKuo7cwWxYTXHCLQic5ucyGAfe6qbvAZ6Jg3RMZfar3H79GiEZMeJnf",
  "key25": "4aagVXSpfETdPphRtcE7AJCAYvAuEHPg3KDea4rV9oSzMT3MWd5pGgVaCvuGzt2tpb42JuGBTchACgt8nET1yufi",
  "key26": "581P9Prr6DzvRvEHFW9FWHqNdvkemjx95F9jH1LWdNuDX2RPYzdtbUbUF5ao7hUM5CC3jow37SUZ4zHwSHvahw9S",
  "key27": "Uv7JvDKcmbKfQzCSERcN7k1K1YZgJPjTAgmgo1mMSwiBVbNQT2q3QJZfNRtLbMKxLmgwo2wT84dnydYSqps6Uv7",
  "key28": "4n7jy3FzsEK9YtC9xfu5jeFgdkwY1jGiGru9HoR8KVTTEoKqZ3hyLdvp7gVJgPEybmh6pm4JJLDqipbn8Sz4UqG4",
  "key29": "UHQNmgTdyESWiQJPkgHubcFEsWmkAsKQmQA9iXC5ipJiKGvUHSwYzGMZawhxhbCDbQ46hD9AXppMStd6b7TqBXt",
  "key30": "5QUJoeimFUd7F6b4a2oi16jRZTVJG87bMhbNbpeG8h7ZySNxfsPZ9bcxfyWTQ7fW3GB8bvfN9aQXqbNvEvNpFw4b",
  "key31": "58V87gd8cU1VvPaUbuwoghGcB8iVJqfsbu6WeB2eSipfLSsXTkRcv6kppExRDfk1Zz2t3P4RjphfeDBYRBd6N1Fo",
  "key32": "2LPeYs7WoqEaPaWpQ9beSitmArSkHvwo94k7YT9r11p8dHeyjzgMWUFDtBKL3LvzXughmgYf8piy9xYDTayGr6WP",
  "key33": "MypD2ZoSJ6r2MhQb77CatTT1vx6wqXatuW6XzZyVni8R2aP5GyfBJM6CACw6JtrVXA2YDwNkcU3MCY1oXSFJQao",
  "key34": "5ZzETxfDcSgtv4Puj4yKtkFqbps19uUJqW6dxRJQuLNjJBJjXxPESevRHRbB4D6uCeiwgsTreVgVxDeMBswUYg1Y",
  "key35": "jtZUJZKki2UQmVi45wjLRsJZokecvaQMWWsgFp9DXrr81C1R8uaafiJXaDLbvPm2JSbXHbF4puJ7iGh9LtbHf46",
  "key36": "53bQ9orQSac6psAAgukmGiHvpBcv3bjsxTokZk3w8eCYV5AKwADQFMHWGjqpi2SRWgRqe2h1RhdLUNkBKeUXr692",
  "key37": "i1qAA3NkabqKCZwLcuCqLfNdxS7jU8gWdQqmhwJuZ7uPm6StvKGy4eWKn4trCKPz6uDwqq2m84agFFbVqTg9iDS",
  "key38": "4cnudFNo9k3r6xsSyJrsgMNNzb5L7jAk8HoLy2hbZhBTwC3nSC7ZTdj68nra9cMadbMmDqqDsbvvxYvLPkutC5Fg",
  "key39": "3GpQBneE6CaE6nFRmrLerk7AEDqqrjPLugdLerX3FYxih7JXGrxdb8Z9p49xNKBUEFjBb7n2AiARKmsTjEYcyFhZ",
  "key40": "3YAYhRRWizCzxF5bF6RCnyTuqUbzKYZVkWnBHoEvEF9AHLDuBv5LgUJU38SYc3gz1Snrrddc3rEkEQ26id4wKXgS",
  "key41": "34A3nDmGAaTYRJ96bP8oUrCMXJk8RZaUideCfrT8t8SRXTEjrP8yKNULXu2KM6jjAAwMpsFGt9h2CDj6hmu8XjXk",
  "key42": "4PwYEG5HXJ9HH2HKyq8aSAmJtGmKfWp6AbNGhy1QxnXniHNjgFLKNZkkjNHnk7t7N4w9ZYwukQG7X8B6EMA74TJy",
  "key43": "T3GWTpAqVmLn7EYeFeviWXzSAGCLx9xTEX9j31GeLosciob4GW5h8sQBo5MubmQrt35V944S1xLoeVFM1MNCugG",
  "key44": "4JpQnpwXDHyqPcr4HrZfADW6VHgYeSHQtTD4yLeu9MKNsRwH2RTDpqv2gZdti6jYdRDG5BPFvZsLfhRqxiLzWHqx",
  "key45": "s4mB1pY3rgDBc2heZDLAYj2wUTGyHThRuF85t8hWkGc3QuLk6sESWh1ExnLZ2jqNxSpBkMsFRPgv6PumcLJ5u2i",
  "key46": "5xXrbMGCaZYYUg2ufiVRnbJc4p5ZsAVhR9LASki9F8MFHUjzVentc5aDVwMXeMYkSahREBM7rHox6EQViQMjmiB1",
  "key47": "3KzKAmnUjvVTCQH2hybBgxD3ysiykwih9nmSHpBsoUtzUhWho62P2fU6kPSitzBvLL6ynvrDPfYRha9ZSKYnKpSk"
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
