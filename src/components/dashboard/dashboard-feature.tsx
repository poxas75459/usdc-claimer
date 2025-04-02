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
    "UaAqpMzd3nAb9fYkBQvjKLJDu6CHkYNzfgbB3ztVjMRedaSCUBennCh6TjaJSCnNYKjpu3154YE42x88KNU3pLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8UqfTaMh2vJiCunZxE6ShroazGbQASwkeQvViAdNsoVkiYHqotZYxHNdHouAq2yXj8jFjAA16VzuYviMjxvoZU",
  "key1": "FFGpoAi9ExXnwDtijV7T5fpktnHr2UNg174vZ6L4EgE7akwYU6zT7AiH4khrhLFYYB9s9sU2LTjHtN6WxGrYTwD",
  "key2": "cwNSKzxoQD5bJPznPvkQ3FNucMH6mj3x5gJNzHUhweezdtnLY4sGmW5ARWiDMs4RCnkp8CiPzboYFNJM4cjDvVN",
  "key3": "W2j5eun2UYiToWj3WwFWYMgLx49UugrLRnDvny15CwNpjka4z3qpf2EdVSboL75jSRvpkoP28CCWyUUQb6nonCt",
  "key4": "34AGaTZ7t6rufqMRVs4bgnoc5ksAQTEkWvGe3wzkuMRommAEkifoQZ8zq5kDSLuCZA1KePf9g7E5Pt8XnUwzRqDY",
  "key5": "3ZaSoFBzco5jYcFZtMcvbJu7of58DuWatjsLvvvQE6Bf7ord32dVTSSHSm1GdYbxGQAgyTTkGac7c3tQZiTnCa5j",
  "key6": "P2vVTP5ytxALBnWHqtACM9zVBZKK6KJgpL7u7qKk18njE7ndjwFkZSaFz4gexKeXGGha5ktM972bMGZfDXUrqCt",
  "key7": "3hr4VbyYQvTxVnqejQ95nGFnndYZ7bwfszrJLTs6wqgHYaxiD9NuEYhGAvCxfKk7hPftePb83fc6tQEm9ziRrJpt",
  "key8": "4vGATmAZL9y79hh5kJ7RG4ASbgwmH1MiHKx47ur749ADtCcS8JryHkN3hDWNfUmjz2LxDnhJmRapP8izCxW1G4VS",
  "key9": "43f9ePotvj4HCd4BD91uJETvZUkX9VY5Q7NHYwhWwNn3QycGxntUNTEdC1iB5B4TSFRC4R2CSvtFCzUqqQLamEoj",
  "key10": "3aWEEBN9q2GVQesAQHfqcKpTXjgaLFuti1wQ7zaLzT2uHrRujkRUubdAFcNUHAgSyjsMB5ZoMsmgVMwMtrd4GsdG",
  "key11": "2VzqtxUpgDN99yFpknpGqoEL7JgVoGGbNkScJxAvDhmZEnqoikcAqcLzWaJywEoQh5PbqGRrXF3m7nsZLh8MMr8t",
  "key12": "Hdadip3RZG76hpJakCQeKVgxeZYzLDCu5bqzV4P42fFxrV889hXvP8daKPPJesMx4MAsRxCo8Qj26siLd94oxGg",
  "key13": "4Fuzgbk36QSw8ZmBZeWiabE3b6zbSP4ZohFoVx8PbeP9XyBGX2MytCvSYNpzsApmZKXvdoaSRiWTLBXKYw3vdvum",
  "key14": "4RVqNErLBNYha8DohvA9Y39txxidKH94iUWKk4o5BpzZpH2dyiFxtswvcLs8yVSAQqWcP6L7bJvaii2DTGAnVTvn",
  "key15": "3pcnE1Y2Z7uA1fiBvKRZ1oyvioUhDnnWwZ5nSdZ6naxmy3SoxbVEeaV5CeGvmjCzHcieDXjc9jNyEH74f2nettU9",
  "key16": "4rtkanrYYYaLUg95aM92JzJw1UJDaWzN12yF4jBbqNFF6y4eptwjdH4Aa6WEZePrPW9XCGpYqvLzWqcKMDQJw4gk",
  "key17": "3t8emRDP3okG9fvv9N1DHSuRW4URC8ojVFYo26j3ZscSGiVsbzBuJg2wURmJTSXvUEjLv5dNzrkAyhzLUohNo7iW",
  "key18": "4sTZQNMFAaowL7b3XB5zxrSzMLY67LBdVV3dBnQCw3LvptHZ1fWgaPVS7JsA2ZGcKBk3amx52jLvsT39BoQ2b1uF",
  "key19": "NywxqBsZ9oYEJdnAcG1DMEgEX8MGseRw8bBM4mvabWrzAKJNH18T5X16YAgHujRTSnZ5KtkUx6vf5dveqH8rzaX",
  "key20": "2kmcfjJevJSZvFeGTaSbeVqP5dswida4DwxpLWJw2G1V2kpKqMy2wNaWgqPe1V5yeTqHQmvbJP3XhpbdbXwVwDDv",
  "key21": "5Ekh8CJWZVt3W2v5iA1BF7RvBNFtX1TfxwYtAMMKXFDX5t2wRsbDdU9TbfnhtG1EwYdiogrT9BGA5cYDvVNBBXAh",
  "key22": "3ErMySbdEYt43UJUhvdKBndvm8XyRCtZK9oPvb2YgQZDc4pFKnFf8HmpEsyPcXASfG9e5Hb5RfLJV8DgWJLd5yc",
  "key23": "5ZZLgfQ2TyRDW4th21rE1EjEu72zSpDQdHiF2o87Ae7a7tuqwmsrT6WxPbh2zvQmBWE2nXmMND9s5THcM8jNP6rP",
  "key24": "2QwRk6ektpt7tBT73h4JsfiTy6vFQjA4wDoe21Ur6nKYZ8gDGyQVzx18SULJKfbVXiZdmqfkBM8v4yz8viv3zmoS",
  "key25": "2TXFcSLKEtu6rkVYHVbaX73Hv4piZg6GBR6ZDyWUdUUYGPx33VHPgopMyTXTEYXdB3gsTjjg2T3YPq4iHSS4NU4p",
  "key26": "2i97JoLi7ovCosjenExLJczUgqnWEo3yxQbbwuX9GPq6gHsm2uLRmbJD81MVRvzn3krE8que8URtkcFsRWRTFKba",
  "key27": "3hFVaZwPG3CuL5atNbn8fRz65SyxC5czRYqw4DLJCH2FPNFaZwEF5UDRfCkbZ2t7ZGgTRyTgmRn8VdyDnEcUpb3u",
  "key28": "433YnauVs9hW2kesZRbyfibesspsBTs3eZJirkSgskP8kRUvdHW9cKMRMLgd5yC2aUys16UWkx6vPbxTfuE849p8",
  "key29": "4Nxag8FxnBDS7DLR32QEgSTrZNH4P3tWtUBhWzBsXUbnXJiHrey2n9XegX2ATouQm9ZWpZJztuaKn3kJXLsEwFEf",
  "key30": "368KKrZNpGSHz5XHf2ug36hR41EJPxYzqckBw2QciMfSreDdpQ9rmbnrfQcHiduQUgHxgAx4kUJo7zdU1ftLGMax",
  "key31": "5KzUzTyZbMUr8c9htgddxGBd3J8sGYKgG5n7hHhW4yfNqChq5s5kiCZzt56xssi5u1BHNHHFP1TxZzfdkcZKZb6a",
  "key32": "4vFFsn61h2a3B41rBRUN6gC8GVfmu9MpA9WApqVxV4f3CpjHhqqsw8um7gewzcAN3VsGuborw9Y5pYqkRvTZPpy1",
  "key33": "57RPu6jQp494aF4KoRzNDqouwpoQR9ZeShWNpQQbVEq97yHJWDd76V3xYhjN619MURNAfrLXULRy9ydTJ2UvtEt3",
  "key34": "49AoGuvub3HaK2K74PXeDxn3kLWavBCx2Ju1miFAcYFpsYcxv4BnRrQT5P67AeE2b6i4GTfraEpBvMkFrDvJ55S6",
  "key35": "2FEFDNRgLprQKxvbqngEjeu6wsWvVEJA4v651XX39Fxr4sMWYUt9PjLNEvA9n2FfBS5re9fuhugoeENRjcQ8pphv",
  "key36": "2kVjwD3PokPVmxBtne8aoMV9G5EB5MaxZEEGiy3CXDdmpBDXiVpHrftbXtmwom7iiE76RGQA3dWDm7wjJKcuPHfJ",
  "key37": "365BeM1mfhLrTboeLen5WtD7cqw89ui3NV3EL5G7sogs1PQgZgYwFaegmHEr1EazZzLrHB8jHzxyVA9rgKx32mFJ",
  "key38": "5Dp5DxxyyoqvGBuZNppsKvMr4sUTBWhaHK4k6eci9KhozYAe67VmMh8426m8c1eqwA1nVQ75AeEoQY2GiwpourRi",
  "key39": "3NFHwWBA1DRJXdMNLHiRB7SukQ4s8QKGbnZWoRoFE4PX1CdmPNGpMV1cTRh4mT5AkkcJoEyiBfpFo7ZvLhXcbupQ",
  "key40": "rFQ6HKHyP2vGdtDtr69B7C7UZhugmzCHeqDpzLBPMSQtjarTW7Jak7aory24nnFbRVMDm4aWGnwY9VAQ2AxCaNd",
  "key41": "4yj6bv2ofFsMx8wVvUwvvyu8w9xenfvBVAqsDT8ZbqSxPTKi2yEhU2i1fzCxJFdgmLN1e2dyzbfhn2W4da789Y3",
  "key42": "5DL8UmibmCS3oTEjiBVhyXamS8xmo6pHx7rQnfYGmQiqmKoDPUQ7hmwzhwrbropXkMcKGrFHboUou2n9g8iWueuZ"
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
