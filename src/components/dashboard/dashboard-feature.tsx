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
    "4y4E8inZjmBxtHpQt2L4yp2KAPxntSnZqp1qBUKu6vFCaNoaZEee2BGG9CG9o2ZpKfAYAwXaqfs6XLzfUWzttxPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbTWCdLd1ZnkbYHBYWbNz9cAfBQybcbYoGn3Uu3pEaSgmre6NEoJBMnKxK9uQmWva61NgNhY8iVbohffwnNrexY",
  "key1": "4NwHHKzc9tbLgfyB7sDSvBy1rUUC8mq6PLfqxaSTnueCB1stsiVcFPqFHUnHwK5LHU6g61y7CYvbZ3dEjQA1tJ7p",
  "key2": "3cX7eBYHoSp5xHc57hhi8EuFYF8161SYo9DpBGhcZZtyCWfnByhF5WRMG24sQDd3te3rsjiMUEktBmU1Gvu6QxxV",
  "key3": "3CLBQjd6ipYxT9DRpUmJh3FvJ7KmqrgXTdL7UE2k2fk94qoZvEDUv1nuA8NqHyr2kf3onakXskjLj39jubBzorDt",
  "key4": "3ovQvfKRA8CrV8QEk1nJCNtyu51J3nMnRTTrxWJgo9x9Doucw97hd6Chjgup1FLWWTcNL74H8hf1neVbTUQU6vcU",
  "key5": "3VfxXaVD7meUYjarYDw8z9GeUyEzyVpz586Dxr8HxNE6xF33PMZaFiSqaKi3DT92RPZM7M89y6YzLo5X8BC8BUyJ",
  "key6": "3PHEfmqYEmjaw43eNyHyduJLUiXodzvUVsV7rVrDJs8vAcMMddqjVyQ4YMVykoU8B2qt6cYyoZtyh1q7igK2gxf1",
  "key7": "6bhzEFxfeBugUSCfDhWti9nGuw1Bqew5dex9jmY6FKTSFePi7nkhgsjM4NLmpD8hV8NXny1tFCDAB2Ddx9LzMZs",
  "key8": "4SXoBXE1pBqcKo2oAQFc5mhPfK9ak5yExfjfToSxU5AbM3sDVDbttyP36zS6UMenPV3W1efeN2akMz4Tvndgai4A",
  "key9": "5gtFzDjPnCWReiqWf3oBRdKzxrU7STWyQ8Y82adLXnBDt92i68xukt67S7atfDjMZjXJdGW43zjFFxet2dhLexfy",
  "key10": "3qAbf1ho4WDf4wPy6hwq3hRL28SoHiWejuG7wpRwKqERWauTUtSTo2De4QTTzf4oDFShCyCA4mhfMz1FVxkwbb9E",
  "key11": "rRy5xt4YCXPBhMjP1hYiUBkiMLMqLG2qbCXuwzMfKGA9ckAfLGVa3haGkyDRG2jDe3jbKMHwS6JtiUMaVGb44vZ",
  "key12": "5KJAGkz2GZi2QY7Gv6ohzZBioZnHgJAAZEDBJtgFEaHEz3wTu6HmuiFfwNj6eRDTAYToPLHmU6cRytBDL82vJP5z",
  "key13": "D16zF47zRs3ECT58YH8RpczYREGMrxMekh9A1g6WaQXjAfHZMao9pGnJVbaRCuP1k6qj2bJi1cqdqhjQxCAN9Ci",
  "key14": "f53Lg1UNPoe6Q8wJ9PbTYXhmJuLMvdjdrxVa8qcwMMb1HN8fTC5AdDf4sArmCrqvzAD8QSwQgvrN3zQYegYJo8Z",
  "key15": "Epj7qbMUW23rAUvH9XfG9qYsmcAZHwnUDoXjHjgxZj9cLWwiXWZ5aGGdEatkxdT7ecSvhZ5uHQ2SXp31VWVPabD",
  "key16": "5JdYkPuqMukAynqQw1kzRGYLBvUaTvzvLpzcicfCEaG4uYSB6hUH2VbheRgSe2RRXWbvWLHueCBjkH6BYWpJsSUV",
  "key17": "hip4UeKN7y4rrWxWBhkeKk579SvEVFuzLigzHbMsU4domhQxSa4qKAEoszpi8fm29UdWX2cPsukuF1HdmUEZPAr",
  "key18": "5TtZiJTpsRvc6MS3Dn9vLvZTFUBWP1AKNDYQZjDuTQVJLsrfHumNRG8Fzi3Xg8NYeUufGDHLRQvLWPMAwmiE7xmk",
  "key19": "65BjwJwzfSHnZYD4XaAGNzk9mbfero6ehKZpAbsVC5ZRfwQ3DEYSYaN6WqCRqYebLgBxVFAMJj5iKinLQu1wFwDd",
  "key20": "2FRwGe2PGzM7vc5rH2V7BefL5jUDMcajFgkw6JmiE7nR62JaQqQ2uKLzWWFwmmU3Nry3bkhsUZc82eTYcwy3hrnZ",
  "key21": "2kdPqfcPcsjWhmCwxK3boB3a5JaJ5yVHoTMdjFMCPjv8VKXLxZgJwUM4p9QMF3ro271L9bJFWNX6ooVPqGaM8966",
  "key22": "5DR7pharygZKCwTHJXTS5HKko3wEGkXxCeZa45D5DmRTSggUEHocH5fkeMtc87xkRxPN8ctusngYWR9wJXND78U8",
  "key23": "kCweHqaBhPSffkSMW5x1FoQWjCAWEHdJYfeehhJ6LcQ44B7EuFZPN33o1QMpuXmWXRc2qDiAQcL8tGpGteNsMrr",
  "key24": "39d255U8BitmWttRreARep4ZxM3icRC2aZacNUFDKQL5oWEy9TYHby8NxrGXm71R8E3LFT5Z46weiuZL9rJjZenD",
  "key25": "3V9fQeMr4wxvt5DmmnQNDxXsb3BNNBGyaXx5aQVLGvJN3cEQ4SnxiydyY5voyKPJpP32LxjYhGfNemkuLJwd8nL8",
  "key26": "4Jhz2GhXA99VqBfUf1BjXq9rXdr13Bb2MHLuPHyRKCpNMwaNDPCaAMJmdGbWJuAz5ntZAYjC4XaDN7zThVrk2NJq",
  "key27": "5k2kZ8sRUkmPkgBQaKzViE7FpLqDLpewHxjZoXQ88v3WJhk935QKErBNbQqGe4BEvSigVN6za8hU5zkDedt9D5rD",
  "key28": "3mPsF67j5mNQCXYzcEkVbL6qZhTEbwujAJMBKZU8aQXFWYPZ18y4BaE6h3k7t8yPmC2UyVb9UMtQ3kNZbZ9AzRYZ",
  "key29": "3pYXBjS5kE7qRCpXB2fqydnYDHsU1vURDpzM8NVP5UKMAgP4tFb6HDkp7FU6qFpNwNmwiaLsfRgG9NdseoTe5vYR",
  "key30": "3ZjtNTYxLx754nUJinBctsih6PLnKFmQXVspmo8DK1nUwx1aZKne4PXw26qoe1iJFmYkhtm3CcMMNHj6uoxdrmqW",
  "key31": "cktovsaXhRTY9pAyF6ZtbPvXVP7DW9DEwBRDQ5gGH3SkTPnMeU5YPGkx2PLJDAzUuvh3hVwEr4WDXAbp1YAeofs",
  "key32": "3eymEJFoaNqWWgBb7cLDwAKjmhWVHWVUSeQqNU951MLihGDgGni6eTD6zfbeC7nPrNEHvUnPCfrM8wg1MLKSsAgP"
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
