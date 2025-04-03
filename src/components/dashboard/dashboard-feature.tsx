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
    "2Sdu94PrumVpcAuKEimmiEJF9a6ke2KXS7nC7DCnMBWuZiETWBXZXtT5wjXwrk48tA7B3Wua5si4z7AUqXvGmPqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qBP7z19fn2zckqtbSjauN8LMvgJQTGsFnqAEZgDXhYfLAmpGzoixfMasDMkrXTaxrdaeHRwq5TC8TmazSREWGR",
  "key1": "55n3nNXkt6B2v3bAz5iRno3CtZKiX1s8f3zyVwEaGzj8FAUYZuxm3kKme1t4ePZmfZdzB4hh4Ejgqumy5jsUZ13h",
  "key2": "EReC6y3njobn8V5hse57zebSL6GvdQ8h3nr5cTPthrHZAD4j2hj6knzCqs2GRnKpY5T8vfnp7L9tUq2pYDio6DV",
  "key3": "26qDot97jxWyHCqGScDT8SiosUtk61CsLaE4TgarQjSoBnXwLNUUf457sF5o5X5yGi1axF3YPNGM6aqw2X3AJy2D",
  "key4": "4oJApzRRdtp5ERLNu4jWLh3YmtWyq5DuQuPKK9QkwdTHm5nuKM1nUop1hgFPRcZTyEY9xyxGWkdgyG2VwmD1tEuQ",
  "key5": "47YzEmXuFSaNapLV9ZQk1X4PtL1V9pwGVSEPUnMfGRKTWUnB4XDTXFuXUJtamBq33hM6YCUT388pKsbqikxLWLUc",
  "key6": "3DdkDEbK3qhRbM3K6TYckU9J2VertC2htK4713hhqWYfvmzMWurbwXFv5wuRyZRwdmoSiY9kJMy5y6nYTrDT693h",
  "key7": "1581zww1wFeD8BfJsw7pBbw3kAvUwVd2C5oE1Qfh4vFSTbfZgEFh1QbQbTRqXDW1TcCVBbRiS44hb1bt16RV859",
  "key8": "4zi4cM57eMJ7n7Mj1dUWvAivWHpQBJSxaASp1PLiuYWLWGGKeyFwoCdJNUWpdLYjEKKa27sey8m4yJTx5HsuMixv",
  "key9": "28pvMKiWryKe2kNME1vCrUhef7RAQmA3iC19vNwnrTgZoRjt9wjcPnB7S29xzKyQ3qTEQ26JzmDUQG93N1z3MFEC",
  "key10": "3QtwnocC16W4oSJgrjVr3wD5FmUauiGgTTzH8msQsHKfCxVuQpj5sxkZeaKg3LbyypEhvcXjXdNFQQ7wfq5UeCrz",
  "key11": "3nh2pEign3wY7FfqSrKPk3CZLQ38e2y9DiakN3UA7DALdkYg3fAuXETFMrLxX9N3mwABMamW9NNzVhqyLQJLKWFf",
  "key12": "2AiVV4Kuva1wZnRm52FJpgrjuNmLpZpj4doBj11VTtYHA8DVH8hAcGDf7EcxGHVy1Rz1cL1svewUbo7QGJuqE7S4",
  "key13": "4S9vkvQ7T5KQ2CH1Tj1wdbMq1y7qksXjzDEYMSGCkFSwcpdLw6TGX8HNBqmqE5XgivWBEfdjYo5bLMfeqKSLmFtp",
  "key14": "tuWNZdSCQd6VYJvEiCvdYqkaGgwdfHhUr8ZbZ6tjraAsPV6LL9PvWq7GxucnuPDewAQTqjBQgobWsuamJmqyqt8",
  "key15": "63R8Bwip2MroatNPjsoPXYoEfQWoRfnSTgFUuLm6RAy6aFrzZophEbye39nXo5HRceqofssuMUse6Ch22rck8C8n",
  "key16": "5rEqZ4PMPhVcEybu94yGJ14YrBDd11iXnsTz3Uea91diARDfyn1ZM2yUfZ9Y1napbodYgJ71UUPecBr1TefTWz4g",
  "key17": "5q1c1w38Vi2FbF8teEPj3TEQKwJPrVR5K7r8VZmpfAe1hwWNWj36zUmpJSQW6PQaKRYrcRRGqTb4tKEvfchCeF8w",
  "key18": "2iNtsB1P3hkuL1PCwAz77E1FGKkUhcdZ4WFoLBXcvFRuKe8dMEgryTL8MzsW1bcknT9SXkZJ1gJ869q1wDzNsuXq",
  "key19": "cUbrSv9gajq38VDgPyMRQUehRGkb4NLmEKzGp5AqXEM9H15uNhv95fSnDaPGbmUGxgdoTULM1eaVHRhViYPKAnD",
  "key20": "3opQVc3DjggQhmTWzSekuB3wmseVRz3ZgHjJVDoSqefJMv8kwm9gxDUHE1gP1sJUinDGWoL3gABdcwTCFdFQvHFa",
  "key21": "4afK6GhTWfx7eh8TY5PEy4a6Kgj82tfom9w8D3SGLxbzkKsEWUNnD4XB8FZotiHC5CrPGkvnCXntkUwWNPLwv78P",
  "key22": "231RMGWfXamvg7reexoh3DysxygSawGxDAzTfGqrSGY4peiFp1wR75SKq7Bw3PZx5cT8tkuoniMjcnwTDUziMytw",
  "key23": "4fAMShF5mgrinGgWf16YZUQzxpQ2H9iRSom3gBNGvoPgAZsaFkPHB3JQTre5aQGBuwaoqWQDKBT5MqtQ4bWDrdLc",
  "key24": "5tE4nGzbhQ2qBAYXb86uicNjonTvwWi4Nscc6irgdrchTfPx7CmELXbfF4w3jdmvkceVqiUuHAYUeZ92TX7LbF35",
  "key25": "37myhM9RJTUtoyCy1agVPzxxTJnJKg9jwNup6gQBbN8JCQLj8ByYbGwsSsrHazTceUw6KxPThDr83SswLqhaqitY",
  "key26": "5oCZF2HUvmDCnsE7yyovmqsRwiu7nxZddCsPXvZS6NmhshVF3QRze8pSta8X4T8GP41NXxGRpVyXcQMqTBnQ4mE",
  "key27": "4BNc1kWJX4EksNZ5sv9qpbXpHeFR2cFUxdY7YmUho5pZzwWFRQuLJk3M2PakZxp8rcTt5W18KmZNymg8RrEuw59S",
  "key28": "iaxctfEAWxtnDkP6TwFM5FWi4BjJwHkpyaeuoGK643u4CNTxBbqPcdCr2Vc27cdutj8LvZMcKoZN3JNnWUnGm7L",
  "key29": "sp1i4gef5mMu5ZsuGTybQbCEywonBhDqin48SuWnypyUhDLjvu4ArFhqzDx4TVtC6WmBjwVH4y2v3owawvRUpNt",
  "key30": "2VzcYrvh9gNJwdYWmykzYnSaonQgWPoWRPfjKhbeHz6wx4YmQheA4yKAmordSyZCXEgtRcYGfGaNwUdZgd8moQjw",
  "key31": "4sxqG7NcPmxHe1gniNDRSAPtWAuTsqeRrUsUAtduLXfDDbYD7UEbQ9ZeQJDcowy7TMrErNmm6TbWV9C4U7w77DsD",
  "key32": "21f4h2EXs1kpfKLX3q5kFTomvDoYjhdoq176VEvowDDQBWZBBT2hTpj5Cwb7JMq9aEmBkJwuWofR14NFigUa1vzh",
  "key33": "2URtcsX8FSemkZPwn3a2KuqSEvF6PqBy2igMpW3PgmaF5oMv4WLhMznoGdSHP9Gd9m4VoFnEweJxqDhvjYzXQtqE",
  "key34": "26fiLuvhD4TKs1fsqmNavueRSnU4A3f94AZqge7mFjAzyTovH7iDmguAKiJRkktLSofjkbp474PbcPLPxmxWE7bS",
  "key35": "3AhcXYjEPaPWWrApMxvFxYozFNc7ywFbWK8n51Zymeg7rnNgoES5b3kGncy4nKbLm8WupSH5pdjbtD87iUiikXEb",
  "key36": "47xpFCBP5eKbaQhokdwPoZxoYgewM6ukV33mmwdWSmc46ucDyzSo8np9aGrhMCFpumepJjxUxkme7T4amPo49JPE",
  "key37": "4Xuwmwawuvp2oSJNp44gbj4HzLchcc52smmd2LmMjYSznS5zEsRrdjF7K25iC3SmLfxX9nrDqPoNVRUsG5tLFmXz",
  "key38": "5uhkGJaBWshMwg66Brp6DxpkM8aNKHg6pwVHPsM47DFUpLpQ4YADvHS8WS1L3sYuuo3mVeMWwUfjzXWaU6cFGtFC",
  "key39": "D3i4HDpDjnE2oYxaoEpqqZBYF8yyH1RBZweqPnw69iLiiMU5cHyFnB3wYxki7WtfensvhmQNS28bXX4rUmsEKiJ",
  "key40": "43qUQHiQvuXBxX9WwEg16iDERwsHMm4oAm8snTCTm1J8KKAi6tAfUpacu7Ps1taUVWBspExizFTUMrXsQXhBVpJa",
  "key41": "3bHrCrVNyJjKe3ih3VcVJD67JYAEwoPeEq2oZMXaZAZdWJkTcsumpNPTGBz8ydb2msbtkKW6SFak8eVU1kDzT2EZ",
  "key42": "3K5gfWPrCtKgwirYV8cNUSFKLZKEfxmgTXoCGPbvewKGCaeEChnzQhGWeaKoY3CKqTjrj8UrxyQGgn9M6TJNYLTy",
  "key43": "5uWEESXkGzr1Gv55dawVYwga9PHWi83AvwRVxRPk8K4JPXHHkceydw1McRXpGkY2sNQL8E7aPhYjmzAHMzTDiGaa",
  "key44": "3cQsckukiBMmT4iUbUF7Sy5Dbpkta4DSiwSCZm8Ti3yrkicxWXtzYGSGV9WDoppZNdZhPzkBbixJNjCstNURoGUT",
  "key45": "scbMAXGLAaFHu2sJvBFFXCsvJov3pFZ7j25ztFbVJmXDf7iRDRuSjv6S97gQAZZPx2wSMmmNamDvyLDbfZGNnUr",
  "key46": "4jRkzFMaLqSxjRfxHopwuEftUfZughvJY3cZxJroRy57oRogWYGMuaJURWBifxig3tXQ3VaMGJsbcWZpcWR3bYC4"
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
