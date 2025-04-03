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
    "5RwqU1GCoJpjzajxawcuF5hfNySFJo86fREv3JEUroY3zpouwesFxRf9yVEPvwr2bDDNUrCNGj8R22efvXDnNQ1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvaRtoSN67Z7MaFq4An7NvqU57frW9bciVTffzKmBMycopn8hz9rD7ZXBT1MjDZvvtyH8Joag1mVbUmm3LB8MRb",
  "key1": "4mBV9X8u9d9oZt8oBVaeUqba3qbZ4W8UwJ6QeKEGYdbfA2VjqTCRJ9UMf2wHnnh3Amfb8cM8vUcvUjQtseJpdJn",
  "key2": "2QuP77nPxNbyt8rqxoqCk5WozemhinrqX9tmhHkMBqzNRjRMVyPdVF79aDkExadRRzVeno7h9fuzKB6rBq62Tz2Y",
  "key3": "3Gjc1VfRR5wDc2Vy2K8juhBNXCffiwUHr4HoaGfTttCoqz13WExKQSZTRis6iv59uXT8x6dVC3zcT95ou1FTKSwK",
  "key4": "3zHovbuZ3MZBNzPfyEXZaoqVeLro8MxWfMeydoLJqUpHKiEeJxXUYFdDTvozoYdDjeH82y9vFFvXNsEFoAEyQHsL",
  "key5": "5dturkDntMvPWprfwAvvatYUVL3qZTzPcRxBC72D2uE3DtoLGGc7FZg585psHsGKFwiCkm2AusrUc1xUqm1fqMZb",
  "key6": "TtcK6ND5QWwcyxj4615TvvL1N3C61GLgq6D2kgYGLTHkTRonmUpbxaHQuH4pLig3ZYTZ6WzH9ZCL8bQUAZCWv2L",
  "key7": "4mzjFhAFa4f4MJTStPDzCoEiVG5WZG2XuxuN4uRCtgyvfk6TxZELese1G55ksZJPBeWM7H2hprs5uRPBE84o4AMN",
  "key8": "2iwxWV2VNzWtmjUrFNgwcnRmc8J9mvLuUKzzx58iLRAdW3KeQnHRzV3yJyynhGwoAPHNXMgUsZiTA94p2cw1Po9S",
  "key9": "4oE9U9cFwiTyRwy27VfQ1L1zoJJUKmTtUxx7X7Fpp3dew4Lz6PdFkiH1zxE5UYxmq7TVxvRKXVxix892zPyUvBNn",
  "key10": "2faLNY5RKBthD6HGdhHjNXn1wpcnZ6CNxW8oFsrrKKBmJjGn6SGe8mgbLC5EupVfo3u4CRr3mG31wsQ1qNDqj49Q",
  "key11": "3SxaTvKNyAve3FfFsJZQ5zi8Kys8mthdUfD5FAjHRmXjJDWRF9U54nM2Cb9AHtAHTNeXSLyXGfkGjYrV6SXWVDWc",
  "key12": "2BdmcxB6BR61ef3vGpbncrA2EYwdKJr1HPLriYHGC6FRYigCDNZf7xz1CdzvNLtV7zAhuProogXsT5qqid79oUTH",
  "key13": "3NYnt2up95v8TykoQRAYFgcwP5eZ1suiSB8mCuYi1Xnjqcr83CAxfwY15gC79D19HSQRAAPCD5VYMKjvpi8Ws8j9",
  "key14": "56Q7pZYg3G7HHdNgPRqqAULqTQSc5F5gqBgueZgY5HSMZpP94zgfuW7z799Kw2Xc6juLPbKow78bTD4zpjLkm9ca",
  "key15": "2TvpP7r8dTxeWN9BujcZLai8gqhGLgpzxNqduajYk8P9sqrym8TQjzqKtN6LUWhMuftbG6rZHJr7VDefTJt9Kq8",
  "key16": "AEKAFsfUTtuSYGsFWYKUx8A1K59o1MU2AcfjUpPnVDUqEU4UNZmQijsfo1Z6jyJs5cXEwSXMdWRSmdBsehWxZpp",
  "key17": "5CHD4J5fy8cm8UBbVYZXzCBFyVZGGT174dWPp2d846Bbb7nJeKbzbrdmy7ifpbTvxV3HsMCShMwPdML2QZd588yx",
  "key18": "4R1fLz4QRGRtGjAw864mJXgQa81bwuAawpBXfctMnZjCyyZg6eSV91jQW8PfkDbytbTMYoqeSvzV7cEKCVJCAbdY",
  "key19": "KPoRBLSqM17VMDwAuoNrMVCoWrVKDkbFm92uea5rvAvvLtNdEr4VKAmwKHw6sE6PcXcHh1qGQnFrYs5fFGXdqUK",
  "key20": "45bxdoxjxtL4yUM9rcS7GAsKzbcnDqTsoauTDfS7piK5nN7N4yRdbbamuUdhF2mXNAyLEBpuh1AjovhNz2bJYn5F",
  "key21": "m71zywojq9i1upaJc9fXDjiAuJsZz7chBDCj7hhbebuQv2qCJfEh6stp6hZAYqDgqYZvRNGmZWEhc664SMUjFmB",
  "key22": "5drDba45AywHGya7VCbtexsvgwYWz59c9CtmxdkcyVtBgZGf9ceb9r5sWErTVTpH4nkTZdmjEbzDU7rwF2Et1cas",
  "key23": "2TvAsAP24NBHeJ7VfeDzz3GXz95wVAkFdBdCx2DgRrhuctzLdpBRbNaA5bPaY8oTdk4mGjiYQGeKrxV57ZumstAw",
  "key24": "DvjS7PdUuUNkTrx8mqK8PKxLhiXG9usttUrdeNuyQtM6pTjETjFEBSNZNswwARMmm7P72qnVCwZXX6rSwE4Sogd",
  "key25": "2FTkGTX2Te1E4y4hq9raZJsuZxLEgvhLYonyYxdvwJuGSqX1g3ok59suo94EuLSPKYKjYtsPN6z216bQbZLRRd5o",
  "key26": "Z8LrJitcXnRXvrc5o3TCvF2FukuSnLpsUZVogSkmUu1MEiJgFNnq2rs4BYsNgFE8kvyvXU8og3rQb8j9Goj4pg3",
  "key27": "4frLr251926ZM1Wqeq2u8z5Y4Rzg59Ese2DkVZHbJ1xfcRWbSVf8zb8NquEfSU9wBHsK4NAFoXZFyr8dyyuGNkqG",
  "key28": "4bLYcrWaB7XbCDJV7fgdM3sbS188XoZ71oVrmNbf4fHSVuGgxX76ZurrA6XA9bYXhBJW54KTc87aVvXmgpDukjPD",
  "key29": "5xKvdVATSiAfZRDJGVryKqWqXk1LE8djMg8podGgmMyDhCycqSCtwhu3sBQ8YQ9yRzEGjACzXX6ZCfXRm2Mhe4VS",
  "key30": "5TXQgDQdodVZf9dQmK7mGUtXRmvZ8yMqLHmGhH4iJ8PRhV2WXbBEb3qNTrryhQPm9ixNR2bueaKaeq9BFd2VGDwu",
  "key31": "2EnDdd3voTWnZya5AXhmoZa5AKEMZDLVeSdcZxz4CDVSwYb8CHiL8EW9GH1Lq4spd2k9wjpkSgrdVQ83bMft8Kia",
  "key32": "3wNdpompufwwshroWcRrdhDmAfmPmTWL7ptWBBcAiiDAZKU1zB8dW9cEf5E7v1g7sDzD9VBT7a6EwQ6c1UUHf2Fs",
  "key33": "RcA59WSDeGVoNWYb9shvPoY9uz4j74L6noZNTVnkPmYp1W8pNJqB6LNGW8cfp1Vuw2NYRbdsFMaQv1bRRfJvQTA",
  "key34": "3D44hpcCXpNqtySyBQ4iY6w7YVH1Gjed4A2izFv6iZ34iiEybsFsjNWGf7f8TrY6dSiZdYMteZ7L6BRqurysu1No",
  "key35": "65LptE8YHCjBhxSYfPxrSuquduMDprbMC2vX9T4yTgSJ14HL2TZjD1mfTGnvosmEL3PwUhDBTGaXLAtqwGp2mkSz",
  "key36": "5TxGKVzZtvScKrqAg6Pj4CWestY4ZwpX2Vxo8k5jYSUjikSunR36FwwQkvzjnVa45XVYT4k5uk12ogYziJzF3jMf",
  "key37": "1jMi81tWMvPmTTtLMooLmK6k5RyZwM2heTbNeciVFuZNj8Pye4qJDD2qkWxeZs4kmSrSz8EDh8ufAuP7nJSYwNT",
  "key38": "5vpwqn4nPpAuH2MRFhHX455eAqEAkx8d4eZBAafwxLoQfHyZrR7K1hREGkrxneJWvaJ7jJngqSnnic6TDshz2j3A",
  "key39": "45yPeJrxuAjXZVi6nMNBUdNzRAdbbnnKfuQsqnJG9cmcKuX6BqJfkxxgvboh7TivfBgx2zWUZxzAE9iJpxAzLHDi",
  "key40": "3A6vFVi2GjgNSFJigCmARBFZvwKk5mtuXyCt9aYXSL6R35FQ7EWkfKRSVQbgQQ5G4K4NwGAYHFLxLHQ8RsbC1ePC",
  "key41": "2ELxzS3wF9sZEStaDfUKnrLcL1bsPwTGrQZY3ip2PNeYJBrSuT8KFaQFsjRNPegx5brAnCCym3wVtTUY93d9ghrL",
  "key42": "2SGvmcaihc4ri6SZorxP5ZKsNgrCRnWodi7cgT7GoJJkv8PPFLxp9y4RpwkE7yuMTZCg81y136GqSR3n6xSXZDFm",
  "key43": "2M1hvW2D8oE1Jcy3rCZoh12MqMVdsKWZAK27TmhvcddrTwwwthbiFVPWeAVSzGGA3geZvXaR3x4fzUfp629nj7QK",
  "key44": "2qoNThpmQboYLGMjr27dAdL7jmwC9P8PdHdkpyxkg8X8tuLUKCyEEz5VE7Vbg2YzZZC7L1HojXFnYoqgxGtn5Lgx",
  "key45": "2LAAeqrXuxFjfzBSzN7fG8Q7TF5z7UXNc3mHfCQPy5Babg6Q9NNHGQqFynoFmWmtLTSYSnUqpKkrEnJoPszFRBaa",
  "key46": "5qR6eW1o6TJqKbq4kpfKXfpSpooCJEWWcfp4ntzu4Q7Y7Y8Kb52N6VJTCyAifamjZYpDBrCyXM7Zpxvj9oiRAjYe",
  "key47": "4YBa7ofq3LCReAApvWq2raUcooYPw88XY4Zvnd5XvtQdLwMqpjQ88qsWnAaM7m7Uh87d4eyde188NEthHC47BTjT",
  "key48": "2KrVkTDPzHL4Vm3hmYw5fm1JahxbqHJT22XmUt3F3Jn6eVh6KCVEFqss6SgWR9BpsUG9zgr41X7CymCJGTumg6va"
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
