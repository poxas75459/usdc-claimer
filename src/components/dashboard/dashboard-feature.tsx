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
    "2AYKacaTFPvR64fi1xv7DFjiuRaW2jHSuAykALWu6GirZbQ18b8W9RgorWvNcwCpjTknyY6RQ1imeN3T6BLcK4bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9w1yjySGxceBcCLorJwokaD7V25XpAp6Fn8cAHWFWp6dRzEMDhrCgpPEtyWpcT8YN4bNGeArreRzUaC89SFjBtq",
  "key1": "Qwc2FqMpoeozDubx1i9mjWhAynJskgXWPtJU88yp6p68snRUqUyvL4hkfX7QLwDiovpR64YrEWjQrYpNZ3BtVDe",
  "key2": "5ucYwjAGJ8ddQSPuPBgyBVoMvXkUeMLM57T3ADKs4BJGc6rerLM4vxymy5YKmfiii1ma5528xu33GGD2M3FUkwPw",
  "key3": "31xmQGGhpqTiJwMjxrT2B8YDeDRGjst4TKnUPEwUtWtNf92f9FqhvNJNqRC4YCTSzC4ZSP117xh7RoC6PMdSLEGa",
  "key4": "XQthAyAhxg1XcHh5gDHqcb5gY3QpphDwjCYWm47dT8Xed8gjxFc3mbCz2v1dAyDbswafNAPkQfw2VtPAwwkYyaZ",
  "key5": "2Hh8jjdrfEzSKFsvddAx6L1yr1gapFhjkgY2guM7vBzFrpcZwdbc9hEurRVxsfyFb1D8RuSnkvUJRsduHSk55cZW",
  "key6": "3RUQZSjM83pnCrUjuRLNubkUQZAeiy5Rb3XjpKEV5J8sMgwssowCx38CQvDQhsy3FouYLUKRnjJTFbc4h5u5mxV5",
  "key7": "NkUZNE8N1SkjbyrrzZoiZWHqj95ibHZxmoudbcrM9evjGVUfUKVBa8NVQkUMkQyVsxJM9gLXC4tFJ8DP1WbReNq",
  "key8": "2v7E8JDte6HQBjtvEZ1wydvXh1dEiRPYaNUMXRtiD82rRBednHEzXCNhm9NzgxCTh8zWAdBD5iJ6mTzaphXBjqiK",
  "key9": "63uLgrKxBgm7bbKtybfSAwqviKPjEXw7RKVTxBJ7buiGxHTstBWZbW5eyV9RMd5RHocNzxLELNHCQx7L8rM6mwhj",
  "key10": "41E87i8L6Rwjo5x4j8w9m7j9VnujiJrrE22juMDhojYXXFej2w5xgPBmjng6u1Uc7JoR6bNDBq7vHqbpb5W7gxQM",
  "key11": "2tscizJNdMwDhUci5QxN8hwxN7XYe9ynH26kqVW9dRNTtc4GDm35wgjPgUeNJPwbNkrpW86MtL2L1CeByswpqW4H",
  "key12": "21pPAfqQnJDRPLChLG6Gkh51J5vvNTJFssa9FqoeEvgHtD7PUjnzKjs4tBCi4TuXbCBAi36VarYuGdfK6akiSLe5",
  "key13": "LyUJuPVLFtt3h7bZ5bzBs8tv2y58byNv5JyfmC5RRpmi8VwFKFsgUBHzG99Dn9svZvLsqjieXiCbtcFKTrP4UCN",
  "key14": "3y4CrtXkkYFCuDeqpCtqEvCubrXRGHHJUBRdcyrfAD1dJV1ZEYo3HaoaJyCJLJ9ZjrrTbVJrSxcb65SSRi5XhRmc",
  "key15": "28VaXycWBooJrBjNnJLFTiFkn2ELD7My6qvtfjTMqEhWWTFb85yYwPDceazAzrVd3ETyYjG76BBusSarx7dcTDAM",
  "key16": "36XTmdY1qKMZAezhDA32GmD8m8yzw4GwyB3D8pR9SYCzyCHWKY1rqE3xkrPrsC9hqjyEXwEZH9Vyx6xoydaaLLVk",
  "key17": "3jfiZ5DxQu9riAiYgh1sNUpfkaGcoonQfJEDmNjGPVbSCpnwfVazbfYZ74QP4Svby61g4hoquWCByCo5gTX2cc2r",
  "key18": "2tsqoaXQeVPZ5cZZo55FxirKBJTM7UdSCbEM84h3w1cB5zLRHZjSAMKEHjvDKtY3QRjbt7sBtRgj5P2VJXVicTPB",
  "key19": "2ybbEnvaVHqNKLaJd9qfFbXPFE2B46sGuBf6cp6BBeo6h3XjzLoiPL7DTzKBzUkZQUaDwNkM96aEvX1qNCtCM8bj",
  "key20": "2ZBdzsgEQ2jPrxVGLdrWetp3YgRNu3BEuzohLMhxTzc78EvZH1Hnos7HTWao4LdBpRsCUCxEZYNgPz1aZHmGhQZD",
  "key21": "x2Daa56Y7Q518iciqTy8TrECEnvoQpRJWMQdsHwDUVKeEkyBHgJ3uB1ubRh15mE25bGz9zBbZc1nDwZ7z2dVKjJ",
  "key22": "4QLfi2oF2jSSuppYQSyhvsBhCaVhvQCz3SxysZzM6wsB5j2ctckT89mmqyeeYSrkBzReUHEWa3LZoNeEEH83ReVK",
  "key23": "5zLnU9LVUexstHcWN1GyAq9GiJHNheandP96ksKsw4btntyX3SbCZ6SzWQRLfuHCkg6brPsAHm8Sz8NGXoGjAFGq",
  "key24": "4arn3MUyZEkoJiRsm9kdxEQKHsJZRRS1AAKpeMT7qRTFE1LukHYYhLUXzPmFvG82SLL38tXCjPq3V8eVcbGqcEDe",
  "key25": "4TyTHnCPbanhrtkuU2ji1RWVHgjUaHKq8pJa2CiNDtgf7VfgEqmji1qPbRsrKxRFnNq3BabLKD86rnSRwJ1gV8xR",
  "key26": "2hUZcHHYsmQtuSj5nQ3KroSwF1A3trF5rV2bhHt1RuQn9xUPfmVF1dtTSJYGKP6YhN3Zxh71J5xkeYaLQymKRWRK",
  "key27": "5DM1BLotpBpLL6iDyDLhWjvV38xGX7qkYe8QXx6FyaWAPpKmfSd6hyoXG8GSyVMLqp2sK8L3aPCxzuCzoLwR9SBV",
  "key28": "5BbWofH8sDxsN1MaeL7Mtmmc8jVC28RAjEyvMRaNpT8YRTMM6ecb7iX9SRxwQzMnD1EjGUjivXHGUMumikPUWeUb",
  "key29": "2PtNr8eqpw7v4XWdDbowQYFA7hVZsBvmAaYvUaYPu7rRt1LxAAJDFPyszf43hHFT4sFF4tCijuFbr3vGsTBeorfW",
  "key30": "3eCT1BJ7SLZ8owDr2T6r5AMFs18v6VDaKipsLtBAwj3QA3STzSutsA9XbkFKgnYf6v9cYiRBS8dU8LX7cKTjKibY",
  "key31": "7XFSSGxfBTNimGEhatBujRspveUFZ22GqWhsePbtH7h4q8KkrsQXmV83VNgV9tc9vkfwdRG5hQCWnV1nFkNTNqU",
  "key32": "2qB4LphQzf9mmNLJ2auxJYd441HhxxYKX2fGVfQH8Biq4Xz3LjdKuXZ3V5pYQmuZG7ZpCnyXZdZH5BRZRB2Wo17e",
  "key33": "vBxiLpXjnZ7XxPHCW1BmqQqdKkcHbKcuL3ZC7MnWetzHE5eSADmWNq1RbagXtetSzVmboCRjKPuYv3ATCq5XQHM",
  "key34": "2MqAsskvh9mNRwyE13LYNxwAmhz8ioBtNcqYQUJQjEqr6tLuFdq99LxUUjw4a8ruvEPiNzB1CpUskF1D24ZtvwY8",
  "key35": "2GrvXSHkcVFUBRN3peGAA2UdcbfkkkuixJCALiXQQiy6vL7GSB3iYL67ySvCz1rgCXHSEtr8RoW8Y2Woq6KyzRti",
  "key36": "2UPE6P9c7eYF7wBmTSS5r518yg3DAZFjisBBDXTKnVqh2N5zWvzqVwKSR8pGFo1Ux9FLo29fJ43cPnciE4RPJjHx",
  "key37": "QjTi9hmFdizeyCo3upVzUcV2bT9rLc7W193ymG9ERsVDQFeRkc5xCYg5XYW3X7X9mMMShskjJW6MPsWEGvCFudf",
  "key38": "5mKhRpFX3PUSRa3QyE3unjUTTLDFjqASXj6u9AH2BYtRHWRwzUvkZmP2zbhCYJPJaxEXtFaEGhNRHJTnL1bzAaP9",
  "key39": "2oST5CR1a3JJjJrAbf9jcQ8MnhfafXvkCdo4jj8tjEhBgdsERbGgPwG9D82KFzo9Q7z7Ykf35TKMdCscpQ2SJCfe",
  "key40": "27ynn78Ujnk29dAepfQdM1Z2x79wipMWgDhc1L6RheXbqWof8XCFYN2zWQKiDdvZoixrKpKFG9eEM4Bq1rWSm7rq"
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
