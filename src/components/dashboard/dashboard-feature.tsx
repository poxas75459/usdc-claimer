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
    "2fJ9EXcMZmU8c5rq6MC71iUi4vRwyoizx2QqJ1w5pAQx5NS1c9WLRkCWkkWwaeDE7AW7hY5CkiPHAqsuG5ZzNP11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewGY8LZxNY34eps8ubscQuDLpfqDC3XAJ3gvytMrq48WYmWAjir98D2GVPWmAJxbk7yioNjDtef9Y2mQqJHXjc2",
  "key1": "4RoAy5kVurtRCGMJqwLR8aubz9jBJebb76QvAnfZQt4ieiGHq6nANG4xS89ydoYmy6MPBDQBHpgBGHs9JZF3Xa88",
  "key2": "5ChzXDh1ZMqDNm6nz1MwrBLZeXanDKvELNRbzAsrh7rVuucMhvJnowrnD1CmMcNsjXea4Jc3PRqVpH5iFryS8uxA",
  "key3": "3DLDXXVRjcTJvJQvDK5VqWyumVZGgYrR5c5z7HzMAVfSbc7BLCvsTFMX8ftcJHEDHS9NbmJ5VhxBuMJjFMqMT7vt",
  "key4": "3tPGu41wBBFZHyp6NgkpBfj2Muchzvh5jnJryzLFscWRJYfVaqB7UQ4ZSdWb1e5qk9RsFWp3hL4AKP86T4PS1frK",
  "key5": "4yWpbemH1tirDRBJBpwFe9L7ckgWyN72JWpYCm47Rw1tAjekmjWTePw6NWz3SK7X4URDpqffpg5fz1RX4QuKL4Qk",
  "key6": "SuVDza4o6V4K1vzdn5vWUszcqQjGqBpkNddjGU1TiPjXwKqS6ePKZCtkVBnzKMLTqdnqpuKZjXroZQN6AMGpqJk",
  "key7": "4pwp975inWoRJ4jvnfLNink1rREpSydsjdRSMzTPpNyNRWtfBiqKp6CDo4MKiLMjCwwmq513hAg8tETmZebB84Mw",
  "key8": "f8DFcbR6sbgF6FRLL4sWzFkLyo56FfhXstcpVgTApcgkRuZGEHHySJXKDn5yoMNXhA9kjx2M6ijkdjENM8W3aDN",
  "key9": "3RwbebZK6uEosQUc98ytojoVWAGrmnwB6BCXGhwgupWkncbdyHrH6j9Jd9NeajkCqo28rrnFvaMfWsYnps1opH59",
  "key10": "4frsQK65JXpJku8SSSwhc5J6VduU2qhVbn2sBiQKzSSqrBPzUWKQ3Sa6x6bUQDctiXTYak9WQvtn9DExi6XfzBCh",
  "key11": "4SMgAFUyRvSMUybKDmp8YwRT7YC6V3TNiHnYJ6NbyvgSe37PQhsWC6xFMNhvq3krCCQ8SFGk7j5jr4YLGwNksrsW",
  "key12": "fyPiNYjkc7SChb5JTitzF8fZxqZS7eEbQn4inbQNkVJandFQaPY3xWgtK4QUto9TNTA1RqX2No2oVvJhrNrR3sy",
  "key13": "4EgdEJYSZ7Pm8Qpi5uLdBbRR7tkiaxm3pp1GBxubivaPMt8GjWSjiR2t55Dihx8Bu8zDQmvdxcz7RaJLKajVDXwW",
  "key14": "3nYQvFHMAfPphmpUfGw34rsYkEfjfV9yEhGZXHsncoaj94vFZ6fETSm7cN6Xx8fAUzzhAAvRfQqQjmci59mo45CJ",
  "key15": "2bUhZzS4TFuojrCdq93DMKCV47LKmdNTPfieeHkDevskXGf7vJTiXycWsw9Ay9EbqqotpeKDQAcgGKjpn5z4Q9gE",
  "key16": "4PuHJsV62dngQPZb6M8Lsn8t2am4fdwSamkhAryK6hBpBXdRmNuViRRTe2TJhukKdm4SxqcA3nLNxb4iuED4QddB",
  "key17": "2Q7emHE1L1q8gapzSkJDipAE1pwc3rYLYj3sTX8jP7xmTvXe5Eq6uiNDUKU1kibpJEqS2ajz2XjqmHeLSfFymVL6",
  "key18": "4C227zdUZnKrXqevFsofMsdQ98G2dTesYWir9TqZBZTB3Z3gjqiHHRbHc9voHRDi9aBXyV6BVafem8FEFeG48yj1",
  "key19": "5fpUmFNiiUK9ExqYiGynDfH8jcJLk6iTEf8xzuAEHNfGNCgkFMvDAkPGE7rxyogVYLyUtKGG49YoGmo4jGNC9bp8",
  "key20": "535wqHRHgCQZRyKAWCuXRQtch6b5wyTEnARLpVk6akyQuDTF3NgSGWnKzyz9FGiXsq6JzQsYQcGZaX6DQxdWLPvf",
  "key21": "5ar6VF5iAwQ81ofbavbKY7GfBcyDsUhCGJS4ZF7hYm8ngS2RD82od3kQjMZreAFqLSs15enNfXf6SnHtLYL57eyC",
  "key22": "2zMsgM1Q1WJpMnmqwhpCTD5uytMyzGU7idkcQCHrYjiK3j5gAoJJYmzxLVfWdBSeimjfhABPDkjEa94NpQ7reFcm",
  "key23": "3QAf21aSNanUkGj2K2qEJcAENEVX1WrKsNvcgsskAvLKt32kYiErnBJnRVEccDMHFEvvjb1KY1Mt851nBmdQrwBC",
  "key24": "452b3NUDKX69uFn1Cp5pkiKicP31qqGipHCFrodX53i8Ka34aYhmMG7H8AsRxPtL2aDskuFUxUhuve6ex9ZbYbsA",
  "key25": "3NZkXMEsHzN5PdngqWYoUq7n5szvSZn4Pk6BdZKz5Ag9YEe8xPNXUKDKhbh8EJPEn8s1T7Q2JhWNcsg85p3J3xUr",
  "key26": "3vMRy88Qnx8o3Zzoj67G8u1jBF4ZmRiVHMRFSn4X6YMtiGvgdVCwN127YVoQqE3KpucMQHeUu7wPgw3sVgaeMpEw",
  "key27": "5sv2eptCXU9bWtm6DL8WB7unBiV3XzGQiDmfYCMg7hevJwk7jdYN7vXeT9XNQHJenovW2hMdyRSibVdEYDWU3SJP",
  "key28": "46B3nBFNkVEsYUB2AaJodetHNKivVG2LyqTrr5Rjqg1a8Mai2UMQ12fLYos2v5pwjEuna3EDGTUppYEnpM4vjk9m",
  "key29": "QUNSPLiHxwN4r5DJssphxb7uBPAHBbN68u7TSbrfYK854uDdBihuQft1ceQVL4Dk7yfAY2HfayVC7PSvvNks6UQ",
  "key30": "2YP5Mtr865nY8CZJZtyi5oCdtiJiR8f3i3y6zLx5pfEn3yFyM9FSk9oXvBEJVDu2r267arbeHY4c2Za9SHp8s9YA",
  "key31": "64pKxLo9E9hVqbZJEByiTqR1CFe53UxZ7XpYfnbq5HmZXuo5nGZMhDK4wjDDqrXQ1FTMrLD6FwqMLxY98aNwJiEY",
  "key32": "5Uy5cTkjAr2MWJoGnkyZYnQEk5FAwH8jtXHvKtuV8PK96xiTE4VjQouB6F86y75pRgXKnyPrdrjKXMmph6Ux3o2D",
  "key33": "mxqHnePSfxTkSEnv1SxUMqFy5Rty7pXa99thUNA2o4cAgPc42ExySDCufrJGHv2VQ6oMtFthhDvYey6AaHqHQBY",
  "key34": "s9S6dCy8D4qGjpK9Js79BHA1hCo8SuDCCsE7j5n9nY5TS9FT1Ure7tuv1JjAtb1TBfGPzSseAPW5E4SaY3jK3m5",
  "key35": "2mtia2EsRoUFgvC12m2ancfuPURmvQpTU5SX1SM5GxEL5QRZfKjnxN1LBDR38Ycb2eKwbDMSpvpGKgBUCCBPbXMP",
  "key36": "5En36TFxNhSRF8RM4USwX2qPnTZv3XoZSCsfKK2VtBbxNJWyjwLmkfyHnfc5hpbN7bzng1u5Q7Br43SBm9n59SWs",
  "key37": "2Y1jeEWoFGm1cuoTUn33FA7iJepAsV6yqeJPR737WrcnpAyJMAD7nDGHGMJY5NoknzMQSrEDXytJSiw5jQcsXFHe",
  "key38": "Wg1dseCac8j6o6bHeu6yiFvqueMVDzJ5Se3ek9osEZnoJ4ksPZ4p5cwQLCVUov7adajircV1tHNzP88nkfUvW22",
  "key39": "4dWbrkjPGQdpr1wuSDDtDKC9XY8xwdNSJHaWScBWutAtyGvjYtSuWByNniWqmPWfGGR1X4ZYH31MSvYCrCzxh7DS",
  "key40": "613QHUZfJvawtsS2uZ2NPmCDqA8is8nfFBNN8HdP58w4wdqhUFx9Njf7z3ncHWNVPqeBk4EDszRqxkrtJfDDo4fG",
  "key41": "2C2umwHpijSrMKsiXuU9Yq5G7sFNEFiYy1ETYUC26rYu9sHJkcG3q7ofmDQitRNXBRFxXnCCGtu3Nj39gnBMQ7Gv",
  "key42": "5DbueY3LrbUo9P6XU8Hjcjzfz6cP795EKwzRGttzukermSx7k1VnWRiL6aqsRJorPni4sVVKENay7whuqfsGyr1w",
  "key43": "3eTgNhynMBN7N2sVfrAmkfJ5yMnMDnxgwXoRmVD7huw4SoCTV3KXBNeMEDZdRGSU767y6QTQpkh3ghBHLQMo6H8U",
  "key44": "22cyj6aiLtZQrTCPLCyNyP7hVyURFchbdHXLmGpsfGr9dmZHDxYq23f8G9LP9wtnQwfbaffNxEFXhPTFGVuEUEg4",
  "key45": "2qkF3ZCZiMiAN38Gmr3veRyRKBQwVYcHN8qDtWTpfUJcjfyZUusNjhXByRXR79aTkPcWH9GVd4EkuQnAjYSyZSYX",
  "key46": "5VqwFsbsG9x7FpjrnK9V95TVtUURnveZ1VCAHojvrhAV293qZLCM9Xw4YC2VYaee2k2663EwVZFsni3vtq1TAu6E"
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
