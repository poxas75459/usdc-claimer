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
    "3Zn8Mcq91aVicRdWT5EBG2ZgK1ewV2egUdFFBdjqCp14fFPFD7XWtPMHsbwoPkHyceyfxJgssY4T9LdhcAsvfr4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bz1gDM7n8d5LstQ42nEY1RG53CtyMC5vSv5ru6nWdvPS86uhNqFC84iNbPE8tLhDTdRELxtxoKtnoU5W3rCFFK9",
  "key1": "3ELH8k9YbVmezAnZ143RtQ1Gn9how4NP1nsbry9VkdmjtmaP379p9qzjEFnafXeYSKZCojRnyN4oiram7KJFXw1i",
  "key2": "orMjp8gn5iZMiJHuWuhuSzKdJ7pZseh6G6CmDTpMeJPF4kGuExfEd3t8spDWsvnbCZMNSJQ9DfctZfwmQKASYTd",
  "key3": "3vg51CBhTGBsSduQP9Gr5LydeprFjt9yo34atUTqEDGHwcgGC4sgA1GY2FPijYeGfmSzNB3vpoBoNkFR6zSyoxxj",
  "key4": "YPpRhbJafez32zN7rddk42d4226fkdpsMwSLYBvQAGdpRVrDtded88Et4cMdBVwJRwsvvLVzqkw2ZH7UqhdCxeD",
  "key5": "2oKHc6WFzFp9UnHtzEmFc1nvcpYL4GVWibq6FLhVFFDfyWwpm7a5P4zs3NaQVwjgGutDzaEXoLttsGcjDVhxRLjW",
  "key6": "5w12hQrDtwrVpYm4hCAXx6xb5Tq5DfjdswZ6jAb29iz9JNXSGQ73bcEpqyapsKb6C1EMc5wuLcD34QpamLux7Jd5",
  "key7": "8yRy3KNYx9fiqV5RgTGz3EYt5YBritZ6Jj2m9fxkuzZMZJwQRPvphnDunbfEZc5fkw6zMiNq5Wtkan165bdGnHp",
  "key8": "25BzsNyjiWkHE14iJ9Wf6a4qo1UAEmMozuJ2qcpBHF6X8Psi5bi8BFcKLExQuTmgEzRB9w9ddo8skzxj7jwCNy2r",
  "key9": "3WtVSb6UWmHqJmAV95edvLZsDNb1aan2v13nmF5Wsjge6s1BHxhf8CK7rz1rFhb2Vx4hAc6DnFHPozJqDx2DT2H5",
  "key10": "4ZtLuVUuNogSKMzVe41PQXCtiPBN4afThJ2uRaAkBPp4GKVrihopu4DK6DCTqnokxziaihiBTt656GPUGsxbMYYo",
  "key11": "5HS1hcmDdtCWAQCnCMJUb1rATMXiPLDvTQNSUZYGA6nRwFuC5XQewWoJMh2PQEt3b7e5m1WozqsnXuE6fs2iXvHN",
  "key12": "617YM7wNpgxFEf6t3ukF4D3hzdiwWqZ3p1XUDAQ79sviQn9te6q4ov2aFJg9bLbdqYaJtUv6TKKta1ohssvxDoGU",
  "key13": "4YkpfY64Rh7BYHVpD4cGQagiofkgBFzRBCdDSxZztQEyVt26wPnWfTLNKPTwwZ3jmZ9g7PGKeq4s6wxne5fTLX41",
  "key14": "3YrBt9ZTLJva17sa23m3vVeDksZH8czzyTnMLLZSrLqnW8B1J9JPDAFeEJDJJCbe2DwM5Y5bASfGQtqEQayLhWgy",
  "key15": "5kUEpNSdwzydqVtNHqpizuaheevmGEnmiBcTFQKZR1cgRCGZkmvw45wCEYeNT7GXK5B4uXVae2PeERr8KYM5xFpb",
  "key16": "jPLsGgyKiN7KzDxUBxr2E47Mt9VsGQsvCrmhGWVXrX2vrsrxrRYSme51vcGFAWtX77yn8YapDtSdAEixTPUn67B",
  "key17": "9rh17hUWrmULs8b7RozhKcRQFDQUj7MwpfxPWvNDmLsTmSeJtRDvBQoz58qhTJfPX5GZSSYK94Mcc6J6dpVx6V8",
  "key18": "3924NqAHtTmh4ELhCEaJ5hyXQFtXSDqHvzBeTqPAQyaSZvv2o59LCnQ22PcZ5S7nzrEqPDNDBVN3Ko8S37TC9yzY",
  "key19": "24iCBXzZKQip5j5vJ7ZqtEXvYgAs8H6jRxqwUkoS3zKf7MhnEwnu88osy7A3oEBE4ZYc2fx1zP3Hr1wgcjHheTpz",
  "key20": "X7zVwXwmq6siWrjNpRkpVMAuHK6S7XuyHKnohucvDsnZ27rPFb7HfZUnUSrbtLCrheYFadBHMu4KgNV2dMAL4KY",
  "key21": "5RAF7Q7nMkQu3oTQQSA3aav3dDT5dUj3voDyqoFP4PJLspKmXpVnUQZmZCgdwY9kkdVNwZd2wshPHeHf4TuKcDfn",
  "key22": "5aVUyGbnDsXMNoPo2FEoGB5LPyvZ7z2bRBihk3X6fbd7DKimDx7J2Tg1dqgPz4y5Qqg8TCT9isvcScp7uukrGL6c",
  "key23": "35zQsjaBe6ip8gtsEoPdKuoA1WVVwF14udHpBmMFcwa2eSHyLwrrL5FVxQQDWjWqKQbocMiLUp6UjXqfnGL2zVGK",
  "key24": "5cUJAKA79SpvcoUrbikv39epe5i9owUqicFzyC8LNzukKGgXzsLF68D4tbvAkvrJ5VgVD1bfcbKoUqsT5jxmxvvb",
  "key25": "46ZewQLD3Zt6M7siYLobfZuMNojsSxoGRcX413h6vRNciSNf8DsgBth4VYBaYkS6oXPQpfqsxWTj3orfzfuVGfpX",
  "key26": "3KweQMGKu7iEPx2G5R3Ax2KLWkxmD5383w33v7yfkSXpB22GUPhor8PfSa8AGeageAwMUffrAQ5MfnDeCJHiWqti",
  "key27": "4kDDj2HFvsmaE9YCR9Qd9ZJM7kUPmjEXs8psSVs5FQ7xURtAiPt1VkJcJJsaoonnDyJjyRS8YgV4hfCgDxaGots5",
  "key28": "5nzs67gK1But1fAudu3zNhz2rUC2HzzULSq3TEQ6XwDsGbdL3qzZwFUt8tfQVJ9PHXwGi6taWSbqQ8dcNWqKfCnE",
  "key29": "BDoEsLgfbTkoztHpUUU7d8wgDVspdDvXyCywoFXCuY5hwgpm9WqC5bN4HBBM5H3DrQ6aXs7r5Qp8dojL64JHaqa",
  "key30": "3UtakGEkrZXbomYj1zz29AZ5pM8MqpzfMQwgLz4qMCG4kFA3BjDTvFocN5DpGnrKkehaHFf3uvTAKGPLjZtyzbUy",
  "key31": "4Ht1rV8qepuMRZrsjFkfZ72Db8hvtHqGWrood2n957QkNN8HXuUaTzoksVqdYfvFKys6QFAFfYQ5CHNwvXdxKpRr",
  "key32": "5Q2mA5rY6iWKvpEHwYYrr63ovEEBjbBzVDT821NnDSXmNcuc6pon9xoAeo13P24imETQvGn3uYjVSoujBHqYbtrx",
  "key33": "5eDzZ2FHq6puXxit23yUHDaMANH3mcjp4zkgmfExd2WSuRSfK9S5SZPkH1s5P8ixpk8GsqxZqjiwyGHkHi5eD5Fx",
  "key34": "3F1mKExUGGQmGoMSaiwMsE9ekswLA5SjqSRDA8G7PAd6UseJkwSr1m5Nksm4jB3cWCDMtrQphoPUqJLGHqeDBwqm",
  "key35": "3Xg8hq2DeLo4uD6S8B3rsDPGU7rg56rn8zDHTJ3kMrqj6FD5jx842D4RyHpz5Cbn8rKQAzZfpiBhT3B5hmWHni18",
  "key36": "5tjLbDQgVDPN5VLTk2gtyTh5Y6joLunQ72c7gtKES1EdebK63Dkxeh5RTk3T7SMUyN3qvvHNUFeS7YJkkhGMeHw1",
  "key37": "5EeqH2VujeXGpC73D1dTfh8QmYn6xRmjfGDQV4QnZPaAF7U7QGGd2otoJmxoSdotomxhwC7xkZff7JzwVrJAVjkQ",
  "key38": "4Qz6hHM6JJQcDzU7hgdm8NUSNqDNZouzKkMe4hiQ9RrTVjjUMyH1txqW9TTHH6FiLZDjionLMemQF8VuEHd7P4qb",
  "key39": "29gKMq71Qy53P3gDXK7Y9Jz7H3T1T1NA8AQHGiYfWDQUERPkkpL4vbxRpNSqZbCPBqCCkY5Wy51Bjq39tLxudzAo",
  "key40": "4ro8Aa7MnTPDVcGUPdW3HThhcmPXrK2xL1AqkTfcWgsYJwMbwanoCeHTfhzFKzybv2vb8512RjniH4x2NPB5iNVJ",
  "key41": "5u293wk1L1mVSKfcq4rE8PbBfCrMVxZjiWHnT4tDKxSSjdZYscNXi3NNHhNxwZpUV4DycnXVozkjnGye6gd62UvX"
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
