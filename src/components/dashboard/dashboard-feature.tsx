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
    "5BXurtns15bhsP6WWGPJw1ZBGD7N4GPq5cXpck2ESCRkR3xx8a52Muf6rGwPrC8jptf9fkFVjfgmaWoUtqyfDRsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnGum84GpxeuK3TSw1r2ptgnmzmLnoCSiRVpFE4mZxQfazSYh5n6Zo2QzXdvhors9uC2FhGT3sgvt2nc4hftfb1",
  "key1": "2SjZ4HPeUQt3DhQC1N1Y1yiFAWbtnmnYBsqNpg22R7A2SyZTzJqBFqC5vRTc1tquA7ZkqbHcuZ1vmgZEAZ7AYiXL",
  "key2": "5yBEnXSi4VL66HGVGVgpNHx6DisHP6J6fKSTDsEJsaFJ8R4tuTVdHUnHPq4ZaCNGeML1Rww7dbrMf3UbYdaeBaAk",
  "key3": "2jqkiPznrpHNFECwdzh6JPwnB5ff6s2wP6in67rrLLU2t2qF7Y8tazCJakfy9vjoLuceTrRZdxWWvpYUVvifF4Hf",
  "key4": "4kvtkgwAqnMujLPBmb723EX5fUCbLRXTAfUo4fghtA7YVYnz4NsoTUtzzM9hQoKNcmhbiymcw3osoFLFRfXDtEuo",
  "key5": "4NTsmEbYq92FzHDmtSwwJ97NGLaSESkPB7CK3nMH8MbmedNwZfy7vcRKsB2zQzVwem1KoUAeVAvKt9KpndQ2iHzx",
  "key6": "43hvHXicjKsszFLQ6vi2RhHqVgVus6L5ARVQAvvTiXrE4bX4yR6g5XYhMbyZsGbHqxJTMGBvtphzz9oY8CyYxWi3",
  "key7": "3w3xLvqNc4PUHthXJF64PagiAHvSQsv12pkjRWvfGi1W5xgxD6JiVZx3im2Y8NueavTS9z5AWS43MqjVtwkGp3PJ",
  "key8": "3QhpvKCAdcjojX3obVaxTh4xczHw2ZtGgcpB3U9RJkHJDKuHyCH2qGGUxXWmAZAJfAWNhrB977vn5GGKC6yjmGVr",
  "key9": "3SYuwcLgHqLkjqAkwA9jFFNfCty4wyoiRHznB8vomMDJU3HbvXRoo9sUNJXeBe4ozmybwsZfGnpGVaZLuJGtU1bi",
  "key10": "5o66x5eyPhSMiQJsTUhBXPnW7a34pJKeYsZgfsThVLTKCaKeGv67xgmQZnznHc4YtPs4dPEX4JLBcNxyAy27y4SC",
  "key11": "LF3q1YxkZS7hGxcH1kPunagjAeABRPikdPSBbAE6BN5L5xMzAXchLnoZ1CaECprwjmDmrptHpNzn6AnxYcYCeL8",
  "key12": "31874PAmYfQENe5KFJFFyXtJtSEqWhV27rteDr7rqGwqhEXFPYTMgtF3JDUFVjxnJuUN5CZAQLEwCYUUnsAQJbzr",
  "key13": "4xRVcW8bmfutKCoVTGJT1VABKEQZKk1ZsRGFpkbAGHTvBeU8RL9XkcksYvyvFjhb6Rdgw9rfgAMWKXKrLZ8LVXgb",
  "key14": "4qMX39q9U1J2VuqPzxEYfgZ36McwauFdJUMwYB7xizxiLJneNN7KmZGnaMoPAQSRj4cuuzjLoQX7cQYDR7bKvgub",
  "key15": "4QtC9aL2GZLedcx8UuQfRkh2pMSFdjPjKQdUigEFFunothES7483iNiuHLMBJWNJ8KqX1CDwKyQUNVds5yed4Eqs",
  "key16": "4SP9WXSVPYph7SkpHv67x23Mkeuk88nn4HYBqGjYxkeJH8xG8n2RmT4m3Ly8FsmpF939CAVL7dFF2nmFyApoHEuF",
  "key17": "2Y9eVcCnNjLrEjfLpB77TFb7DngJw1BZi4vKRRgjXvSw8EYACDssXSna2nAcxWuXqySbuaVx2M1wtBNGApxJmq8M",
  "key18": "957p7MkqtTbKv6H5LDyVBiKN1AGU3VQWdXTgsEBoZK7jYLodAUWxF29pStmYyoo7Z2yZs6oJsGgNT7VT2YpkmZn",
  "key19": "5ESTHkLA7S5qeGPK4temzkwfRQY2WmwvUiigj4xXDYtimEbZLUdC8znmJkEUoH2qL7E1gd5yPrV6NdXQBVwioxhv",
  "key20": "eonf2Qnhvhi3SVrEQHKBEkNbyiwVuDtuNFHnR2gUYcQ4Y1u3DPe3Lp7A9K8LJbMjpVWNaP34J1uUEgNMfvqpBCR",
  "key21": "2HxsC6wsvfZExJzNuo9WMqRFoY6VT7oLNJZFb15YgavBTHvMRfP4vXXM2GvdgypJ6rG7ZisTng7puUghr1qXRfn8",
  "key22": "4dS1LFeoLctXkVrWoqfC3GqaZVprLiHKGcBKCPjCTQLFjG4cVZcX7j2VLyYoQjmNwUZp9qRKLdWJK9MzMi7bxi8e",
  "key23": "62o4VcnPLgPMPfx1cRqhADTt32WEpjoghGxYdbgsiMw9Sh7H6pCP2yVR544rLeR8PfYU331eNDgJmM1jaAaSZw8",
  "key24": "3p6vpLMbhUkXBpEyZNPMbSs9wCwho7bSPa6dQ6Gd8uc9PDA8Y2pgDtjxan8hfR2GhrN3py11G58zqBLNPHfg7CAi",
  "key25": "29qiHjxVqMovnWq5oKz7o1Do1fdME7fTFadyGyJGvGESjwRGh85XJ1kT5UMcW3L1KTz7oVrhd1dSTKXE5hXfWafX",
  "key26": "3paez2giG3KcNxQ6gFseduwP8gFHkTke9qaEPi3Ckt9Jd792aVtuEx297JAe2Y6XwNEpHvrkaA7ViPsfdMh5KpjK",
  "key27": "2Msu7yKHi9gacFa6pbX3q4y43EnGEPp2Z8Jj84xCzwCtMQLENa5Ny23EiyVQw9cpXbifcJJEkdcFWxpM85SndbWQ",
  "key28": "578kyLi4qmoPA9m8QPL7mSavFzPD5E2pFPdtqriDVETUYZ5SuUpBbLGjNHXWbXnN5yMLmVoEPacRBDTa4s8JjLLg",
  "key29": "3WtXa5YVH8fecq6dzxEPPQq8eTVyNr2DkWQFVun6JM2JKz6MqravwRD1gQ4uQTpT3d2yoCAXoq2zujtdcZexKMys",
  "key30": "41CrhhpvEobUHRfPiwJPpoSYac6cC75YHQ5hx1snfk8Pb9NHUVfUrdKkmAtRuebzxfFBYi6pUUWRFNJeVEL2jA4y",
  "key31": "2hDnRPyLG1QkC2KYnj2hvdMLxnGLkQEBYPbwdV8DVWhv9oN8Dsa5sRejLyKB1hKBuMjhYWWyUFAYTqmKhcb6uY4L",
  "key32": "4F1ZLx1wANkAKiJHthqF9momKEZzgV67DQco82daqbwrRQpWCXNQP1BGgdcPsxVZnfUabd8em4wBp1QyZmyPmkyj",
  "key33": "4oXDpSm6v4hcwE4NnWYDPN24YigtBTT8Auw6hhVey7NeJPXSXEC65jAwJCoLYW23f2CgJbEGxpSqnc3oNqsN2TM1",
  "key34": "4xJ1BBknGx2WmJN9AazCdpha8AahgxHtpu1fCwNQeqv9Ge5fL2FZmc5ankDACYkVdaPqn7yMCbtAK4paZvfc56CE",
  "key35": "3pAuEKGeiB3f6GznSWGRrY5yzEt7RCEzKbkcPfkSKwx91XBypY7jX5RAbw3cEtjSrUYGMbbUWPTDVExHaF1edRT",
  "key36": "5ciAFfCQgwsQEoB3LtjpYv312ppWsH7B3gNnvo4jPcD9NxpjphDnUhiA3uZFMVA6S1TRYKSgKbYdBKK6znj2W3a1",
  "key37": "2QeM31Kppz2Ter3c9eAHjUaW7YRokwctm8bCacwZ21Q6NDec5GZJNYR942m6nNfnzjtdosQwKnTfpyfsmLJkJT8g",
  "key38": "5AUQ8WLrQV3uTkSS7YMWT1MRmAD4q4TZAHnkP8H8Jry4BDjbcXqgPjFC7Ht97ci4nfiksafPiusfUrvw4X1HbqS5",
  "key39": "3Ayhv5X3D7VtwhzP3yHNDijP7sMruYaDtKo7X8DF8frKXuijPBYqvz9s72nJPWD2Uy6xE5VqwdbvkJchHjnvP6vQ",
  "key40": "3FXAPrYg8eAyuC122AqdagHTnWgyGvztD8yxmkNLkqB35KM5o1oKnNEPkoWPdeSYgjoH2htT6jNdT6K6Rg6t9nG4",
  "key41": "5z72bwU97toEes6nA3TxQtURysB5L67bDbgnUBbwQu7AhESeBcVy3juLYkugz26opZQ5QDXcwpDz7y1Q8xJAZXAx",
  "key42": "KP5SKDBbwzYVd5WjS4cZaLrz1HWAUnpDoL7edaL1K4YNyPtXXZFzv8fRqs45hG6kRBHi4PrAvtiURuZhKjcK2x5",
  "key43": "4kjFKXzG8DSYWM1qFtQYPoynSyLd6uqWv4XWMgMBeXSeAhug981bnyQQYiXeJjHYi9fiRxw21hFTRopyLzw2vGkQ",
  "key44": "4Atxh5Da3H8LEjCFbtvNEw2JvZLtJG9v5wg61Zaj9hqETzrnPX1xCqipX61cnoTMa7Npp3BoebZRTrtiAK4RKRqi",
  "key45": "3QBJtk322KSRPepctiHkzHfJAuvNCNcAEmgBvHMS7XTsFf6eX34KfVaYdxDXLCk7LpYFnGR83UkY76tTmoHbF2J7"
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
