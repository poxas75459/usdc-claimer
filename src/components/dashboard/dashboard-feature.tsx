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
    "4XzDe5ZAusGNLpUj7UJupa1nMdevwVHhCwre7e8UAcyKSzoiN5JEkFPwTnrrXFvsDyLv7w6LVJPhPtoe3exHVw4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBC5dCiHoP8DTTZzGfyAduZgTeEkgBccHkJWLx9FeYcEmXmpU74Ey8jKzZqQcxwGoYnE6xTjB6qhXL4cqDiuVBS",
  "key1": "uHqexrAY2x1MryKbAYZMCYC9sufdVervbZ3vbYDHZgUtneA5Rk4rAzxhChQezhFM8Na55GDMSkJdyS7dNDDhb9M",
  "key2": "5yVgfaUmBSiw23u4oHnqTChsqPqW6teoFdfRALTWmKYFdX742hVJqKhLh8EEPpnwgkh1PgwctegYsfm87fthnx6V",
  "key3": "2Z8qNPqLt4jyT6TvhRB8v76AbSgqX6d8nF8AVU72Q4sUuRGfDuRmhxXcRWkT8yk2NyNGFoTvpp9RJ1UaosnJTfjE",
  "key4": "65jQVDcdbEoNEQPBLmSSrBTqnpHmUJwndtdkyBPbCapeEqhqA5oJUQBEbK6eB8fiScJDa5VA6YavHJfrt7wZ1M5W",
  "key5": "5P3Nrwu5fyscCkpjc1LLsJYVWpNxFZeg1X4JFo9SNzJ43rwBN1yVWQtEyz43kHhZ3cpfzwy3XnXvJPL1SvxeQmfq",
  "key6": "4huUwKtqape7oKLatcu9kpcLCXBn8BEFoaT1XmiAEW7qNRB7YZo5WkaonP3XHLBwY56KPyBPVME4NSJbqBd4bPJJ",
  "key7": "4ZFBmCbLjU4PJBzJhJJ68Ju3YrddN9QyE5u8NDMQTWn2qMWfXsSoFE4wpj3qrtZswtn22pxoQ6VnNhjk3NZFUwov",
  "key8": "3J9d6oHVTuX3W9aRwECjkgekNLsWuabCsyFgDJmXRn6xXZJC1FwmytmVqnxUPJjZUM3xPLevRVg7afpYF7xdbQPb",
  "key9": "2XqRujyJ6pxUvbbwGVs5y9AFhyjUh6SfJ5b5CzEh5ziZwqTJu4uRqxW2c5AGkXsYAgZmtbBBgCJB8H1ofS2K4Pug",
  "key10": "3MWABP98XT8SZkpEGSkKhDcjx8bntqLWXknfj26ee7PBW5dTD1r4WtP5R8GDqSU6YX6bd6tNt8jozA8K5mVGLvee",
  "key11": "xntN1FmNJN2Kyt9k4FhPH7LJVYCwceeQ9d8nEZ3NnnGoChEH8pgJmH8xwqNcdAKNHYf4yZqEUS3Vx687Cz3P6xh",
  "key12": "2gDqVHqn4TPC8gyunUhADiy8D3B1JvKzu2sTWkE1dPTbE2gmeWAULT1FjwVX4TMQfmiiJEScQNwBGerA2AAaet6K",
  "key13": "5LUQuB1L9V6XnPZBphjeED52jF6iPk2n5aDX6aiBPTfcoaf6z8zhPJByGv8bcjTtL6zsaPV4m3rtFkhjXMGM1ixV",
  "key14": "5P3A7LDcXrGJS8sK3PFwtGBn6MUvB73GNP5i1tVxyhrtuPkzwEHDUXPWveHFVAShnDa3oV3n2wnXkjd8pxoNACUB",
  "key15": "dF2gbfmDw8paTwEskH6Mr3wxUFKFN7EJv1Xd3iAYtBv8SVBusPkf3EdrpuPvj41vcYEdekH8jWr2eqV2KuirWR3",
  "key16": "1ZmadeHryqvmEwmASd7EMc6CvhtLSRzvVMhARoQeebe7TrvwUpd2AkX6gCCvph7qGsmDdNniBXRp6ighgDbqp27",
  "key17": "2RVJta2E53wncYJG1mLioMLwKCaexs1467NLmvj8Js299UQYR8u7jzricFM5rtWcAg7pyBn1QxXpPdtsFYKdzqKK",
  "key18": "46ii2ZkTujbgcDy4dHSpNRMq1qVWuurYwka7pCMoHiNwHyFKwVTTtS8mj4NCYVaGuP4GX9kLk1uHa35Mgsc7kSf2",
  "key19": "2LrjWP6RJMNosrKoYvtwcW77wMxoP83QR542HEsC2cFvjt7ytAzjwmsQyNaHRTYyuCjaF1evwrudE5tMgbZbrea4",
  "key20": "5oEeeAfX2nLQzKMjLDhsiBWZz7Cs4wrqnjqVpFiHbDUgqqPH4FQzQfcDb6c1PVgbeLrd9gevCxEfTL9U6dtHGDJ8",
  "key21": "5RYDAcHu5ZEkHS16ZbufsM9d3CjCZq8CqAiVjBy3wwX2DaHPoPW1YHdBjhG49WaqoTHaVUxbZJGpyuCktFRULDZD",
  "key22": "4MTvcpxDrkZQsqTibz2vEmFhVeSRfbYHLmnJgqTfoDL8VcpEEXLTNpVMzRzgizRjhG9Fn62xktnNxek7BYgJ66E",
  "key23": "28Sbho4DwMx7szrMzGc5Xamn9HenXPcZo3zMxA1V5Jmszt4sRzYq4RGbjF883Adf6x3PdbUvDk3AzYowMCJyq8t5",
  "key24": "464gWa3HZyZJuUo12uu3frqcaP3AZRLcv7f4PBsH9ayG1BAmJA2RTzMkKuPxfc6jcRqCCn68A4ni5uZnJHuajNSR",
  "key25": "5gHaLFxSSFN4Q73tSCr1xinJTviLerXPrsbRMBiNPrMKTq6wdBU2xkiivbYYG529pnm9TcyKp6GcnESSBGeqG3ez",
  "key26": "3Po7To9wvyg813EL5dT8V2iwU8kwqFCjosb8FBPuNgmK8FcTUXGhLgE9Gjg5uG8WQZpSZYCH4ZtXMBRtKr8fcDU4",
  "key27": "47hNSfYjgAQ1eVHhJgbYvLfy42E8hjSJYoYYfgWy4miTHUfKhgSZWkfXKZDAMwYQ8GUkgS8vSpLzMoLju5ferwD9",
  "key28": "4LjuoCXWweeRd71RL1FTYF3bapoYSjDZN7ALjdSV5LPHdFtF6CPPbTs6EehnZVRVidEmxNe8X691BkuiBzvssiNw",
  "key29": "2GM99KuNa1AdMJCWKUGcktDfbQDbJEg12fc49p5Zjr7ohm3psjyarA5RMhDRanQ1F3kirfFtEagcz4cUiBnsf5j",
  "key30": "4Ac74oL8KhyCup7aAfQoTLtUu8Dzj2hNVWsJKNQeaFNxNxJdGt7HSSLviRZGvo1ARqv5ZVfRmppWchJVz1UecYJo",
  "key31": "2bNXeWpmo4sVXgCz45QvUkroqZDujzTPvY6hPvfJFXdWgfF3if1CDGPYvz8rpWP4p4d48NZY4gY74xNYLzvv5xGs",
  "key32": "3m9wWfCEMpnwZbQ5JNaRXNK24Hs22Mumf4RcFRawU9j7HXFp2CJjvvTG4e7rSZi4hXsRRzZb3SCj6n7A7eEWwdwB",
  "key33": "2Zi28tuBfkTqPuKF79aJYZHx46S8KQyXKrTHVXFB5yvpsiNNk17Uw5CtB6Bndb2hXFRnhD9gwYMQNyKA9d8feip2",
  "key34": "39oggqYEnzoaXuz43iEj3ZQtzqLcAs8EJCD4WZmq9mHoCSUYELRYZfJtvtFSZ1HoCt2BSiAqYP6RaVuDyoSNJduD",
  "key35": "2xfRhrZDC2Gn4X6CYaM2wVT1Wkt44S6otStzcxTaBoicdCAtpWTJx5NjwpxYLbzVukkQRKX3FfE2LAc14DSe2Ba9",
  "key36": "TQEjosYEWgqXdAxiEQAxPai6k6k3CTH61t4VNeaYU9UJt77whL3PuBtiFTo25bdNByURZ7KYpeN7QiUEiaGhkrN",
  "key37": "4mYC6oyEEfWru3KPBH4WnD1TBs55N9PK1rH2b9MP8CrpqptW3XLbUHck6Vqvw8KeLm5dcGArhWmK16EG7rngku2s",
  "key38": "UJiQnYAbPQeehnzSs8o8QbSmZv5e17AkycGEBLSwGGPyK2tjjMosUWvVNELdVs6242WC2syBndmXq8UdUTnsN1u",
  "key39": "4uXaA11qCNrfJuTUsW7GRCNTfcYvZHRbAguYGGPqT6T8Ln8Kv95Rf7dTKcUZtfNhwELgq5qjXWttRWbbVqnj6gBF",
  "key40": "3tPEP4rq6GppDQ5MU2zcf5KRCGCQQdLqbn3uhPPpnL9y334sNaemy2uwqRuoexu7DTkQjrVScCrXUbRLh996nrrV",
  "key41": "4PswgCQMB4Vo44Zs2Juf2v2q9Vd25j7KMmwD6xxgU44qgZEhGeyB3cCvu4o8sNHytX82iSbMR4APj2TgC9EvsviN",
  "key42": "2VtmwTKSyU2sMvm4s9EcjpD4sy598zQXYUp5gEs6UmPA9hJsK1M2sNdynDADfqrYhXiZrKfN32cXAujPiy1Y8Wg9",
  "key43": "pgCido2iEufCLSTvZ76dKwLBDubEAVUQZbCdQuVkWDLRGcrjBYnVzFjVAXxLtLHV8BqLNdUMxwjw2hDnp8aQxwj",
  "key44": "26zXk2dzuqYAzjCwvcoRcBkmyjTuymXGgkxxsGyKPYKndxFEzZm3eR31n6jNt6AG1jScso5KmmtLY3sDy6SSqWXc",
  "key45": "5Kq8KXKmF8Z1LkVutEwTgtKrwkJ14XSorQC3bizDAy2nMwRBfoXkTFzJmQ1Uymq19hhxrZATVqZiAHmbBKTEAVhd",
  "key46": "3weN3t6LbawKhHJm8ktWqCLbyhXYAFN5ovbUPzADpzT1Kf34yJ4JBPYtbRatr9JhPYFjnUpGrpDoCQa8JBFiDRCT",
  "key47": "9485zXuyxi38JjxLAuLDyRmQRnP2T1aHpojKZ3hYh2rmzkqhidzSHd4B1akr9jCbr9amfAqH5niFVZD2RL873C3",
  "key48": "5xTqwfCh7CxDSeHgyXvw6pBjvppcad8dVaEeBw1z34rXiMT7796vUEFQiJCLFi5NnS7F7iveK88uQoTF3KQV5NcQ",
  "key49": "2ZcW6pHFWeahvkWUZ2Z7tAsPbtUMs1UXpcLjGWVMQA8oZndxX9Z1tH5buz77dbNkeTRwmdp6YGhhr1zwPCwGY85B"
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
