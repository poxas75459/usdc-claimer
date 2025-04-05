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
    "4BYCAU8VQpGuNdmY9oyXKFfgeq8dh3iDjGttUibNHRYUAXMBFvi4WAwYidp8EjrRAUVBBj8ivuTWWw7hCk3RTA5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4icYabTYAENZGwwpVfuVSJ3zqnyHu9N1iiY69S6t5PjX6RukEbZamHeHQZwmexxfbrhC4vwCjbMwA9RDUh2hD3BC",
  "key1": "4Y3wt6obZCdxMNGcQrYMrcZ2dS688n4CMj8LfoVWVbFSrosAZCMDiSatyty6t6fy9YWzGxKBrQ7RTjphhhY67ESa",
  "key2": "4iSCwXnxVEbyRy3i9LxPP6EuPadnRidNNHouqSju5Zi9oSHgbJFq9cAQNJ9bEjNyCZbXWM56Gkx8GgH5n22Sxu3G",
  "key3": "3NeVpuPp27emg6YWJumGTdqnCK1fZQfyH4qqcnmtJaq1FLSaWudAZz4jN7Dj85okJixGDiyRD9KZ35Q9ZjwGK8eF",
  "key4": "2jjePwhwjqtj1tJj1FQUdstX2xVSot3fzRajvwpQ9tG79jSVxBF2mo7WMPzF7HdWShn4USWgxkoJTCLKnLyv4xRr",
  "key5": "4V7X867pNbcVyRT3aLdFn3FQZGHRN1yTimMoqJ9CJDBrCpgDqaKs7ugzqjsb5zNRsaajmKJ5hDNmHmjPA2fCT418",
  "key6": "RaYFor2cEsJPi2UgzoqZacc7YwnpjAYtWbwXRvZiu6znngpDRLEvfLA12ffsiiw16nNgddUnNGtnRhK9ST3hMbJ",
  "key7": "3iKsbRycu8o34HVqF6hfrZKoSwTcAotuweMNbLQwgfybRxiCaewc627x6GvoR2EwKqoqx7BawuX1zYnhJrWSkp5D",
  "key8": "48tr7tQZaSHawHR1JcTw3aEkBa15cZKWW1YjwLYQDUibMMgSsvCuE34BTFybMSqN2BWXiJkJQ6aswupRadLjVhuj",
  "key9": "5BSySjDJGhcVdWgW1E6jrQL9pycQyG9Uir1rHrg5Rv1qCqtZ8VEmH2Ezw4T4sYuGsjD1BmBTd8fHNqiB3iUnQXjG",
  "key10": "4dqbLKyoEngLixD9PxfpUHBRzFX2ZuDxH2gBvExd4xZVH4ipZaKTwEGkKamVMDPsiAu2q84HsachgLp7SL8cmKgm",
  "key11": "m1vnMsUfLfYDpgN2sfPccTyueTun7d8zoPG6ddKyrUYwrkPrMjfRqSYQFMd2oXsFeMU6wknkHcodi2146fxinGj",
  "key12": "38ZCW72JsPHWDcZuJp3VYLTFEcDEKGxVqfj39fF5XCFug51RMdnSZhXujekA5Ye4tP1JBHrDGXZkEoKyQyMoywJ4",
  "key13": "3GvKtw4tEDatzdv3hYLDMGdK7cX3jh7tiEeZsPNia2QjxJ4Mhd9D2zMxfxhxrmFwWXJf5bopjg8TC6fzunRWu3zu",
  "key14": "vuuDbTL1sm1z5GagatiUPCbJF8kir3N55eacYEXFMbWcbaiJAHikFrsTQUwjoucQpUqAR9197sG9nJyF9dw3LPa",
  "key15": "3ZWArsreLdyCBZgfaKoTpzjHNKg9wWKW2ZVBE1cExKWtgWEXHLaP3VWDzHkomGR2bjg8ibJY4MCmgmcNm21fEVWT",
  "key16": "39f4xDKFKMMsUWF5n2vqT12XTAXYruZYnEjVXHyoxHtVNSLpdDdNt9M18VzEvcsoKMTACiRnj29X5bxJBzndECtX",
  "key17": "5SEyQyGyE11PuHreCFMh5V5yhjyVj4PvEvy4J3bGrLXBDWoYDFAi4PtT722XX7uMn7UtKfVKCwSN8Xv1kBgtb4BD",
  "key18": "2ucJEfaWkqYDdqSwW4xLKqkURdJGUr9qxRKRWBXGdbDTDQVC9hgXReKoM5qUaaGMqT74zwNvkZ3bPYx28eL4KbZo",
  "key19": "48DT4bBMEqt34Xk8JboD7TJLauRorLWTpXR9kqhjEcA3Hx2pogftPwAQRnn3AYZZrkjYoC53TaWeLcDfgzTUdyHV",
  "key20": "3x8iWxLxkWUPhHtc9Lm94urDR2D243Y9X95FrvLC7mn2abSTG2HizabTWB1d7iQ78JKUv9BeFhxiZh5CVoAjFxMv",
  "key21": "2zFDeJGcjYHFdToPzfk2yXhQnqdHReNqYdaHrQh3LYdNUt46eGBaNJr6757zKNnLsBcBoBJ7rkaEbntJP6yV8SBy",
  "key22": "2KHuTQx1XDoZrqxN1r8uAd3pRonrBuw2no9k5CWJrmeyssv41a9zBKBa8vREs9LVczRtLoH69CALm56MFN4DwGaC",
  "key23": "4NwJndNB5J2ATKX3AWA84Wcz2GGqXU4D33mniGLzA1RAj5N3EqB4XC1zscGagJzurC6ff3j42aY44ymJK3hipphZ",
  "key24": "3samyaryhpCBYcmanN1JGWzoGaznyL3hSxw5r7MmQJqmBMxFGKjtYn2NzcjHvLJbdKsYfRvtJKbvr9QsNufy7PQN",
  "key25": "2WXTEsSqGoHWLwQpADhBjLP62a4fsDfJWTZHq4QYZqPuiNNnZWc4VvwcsPaTxBWaHoVf6KJCGD8MXf6DGfDBaFYF",
  "key26": "yYRNxFvHyZiECV1gP4YjhZorWdAm89LbhmXCqr8xFpb33oWwySyAhMgYh4ffXDfPTUu6CKY2C8RKFNHajKRHDA5",
  "key27": "4Rd4x1DwqFvGhHNRwhekkhxrKJdQMiwnFHHjdVoY1bh3PeyBq6btrpAs8x9Cw7K8NCYxwxygKJQMwrg66k9Cy6su",
  "key28": "3CFwB9Y3gTSGA1a74h24qGB4PHsrShRsMFMhdAZ7Kw1DjpPUBy3aEPGSLbW6dXZTAgaTQv8yhCNRtd35fJ8eBFXg",
  "key29": "5xV5LjXYXtV8vnCvBiBdCL95jnZjuGuFwP6gPGUxGNMxNr1RZnSrJsd8E3wAP65TZHi8PEDKYtW96bySv425zQua",
  "key30": "3QF5iAygs5PwbqQM2Gxs8U5brMd5U3DjydEo2Am2r3VgpSqwPdWAYdAvZVmKPwNw2EYC9zoUCC4XztZ9pGjCnsFs",
  "key31": "4P5oEeUswqgY7QLpFBVtsWHLQkBfFtPiSP3c1qJQHU2rdcCgDe4D2U5c2bZvzmyjJ5zm1M39fQZFG3o8xAzLsMj4",
  "key32": "ubLDaXWBJ19sRzjuc3HH5jzWdL6MbhuRgt8Nhf9Rzi6KceAP45mXTtcUeneyCZb8AeVc2TRjEKxc5J8wgrKBtpr",
  "key33": "5ubH3xUndtfw5Vvq1AtwyeJNkjwGgJv9sx5X6mBStVMaAqbudfjXFr8uARWPi3WFaoD76ukTeJXNrh5ba7inUeb9"
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
