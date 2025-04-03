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
    "2Co19u7qfoycCfK7XXndhSbpK2XUnXgtSYapAi4GnW1N7jvfrChtnJ8o66NngGZHRjd1qD1CbGrA2QQZih4LTGiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3oXZkBufZJrvfKcDh6nxwHJbX2submHiTA9uYWzD11GNRmGTzozqPhV4ujmaVDNYucapfQTWfK7LCFJHgFBUtF",
  "key1": "4CGqBAyjjNW8MpJfpdrpLECFyDddVrf85xKSYyaSMxmyxMpJ9FMzdP3CEhUMh5B6kRiW8zJkggKMhEBsfHe7bChU",
  "key2": "nN35s4VWdUidQ7xVr7EMs3MHYFpUMBeCDaZdaE52Zo8412iXLY1QhLUnbeJFqKSTASfpetygc9c8oNhNQZvdbWi",
  "key3": "vpsk3inmuBjNQNRZHv2Eb2UsfeLPyFAGmtmFTjJyp2hyq9WWVTrkhufUFgWt9RUaYtjDVHTGcUSiYP61Ge1Rz1j",
  "key4": "4nJiUDeaw8tHGCLSCZ9moBbWNcnhiWcPvrB5tDDUUV3HEZW5bbe892bkEbAGuAexFGSp8BtshYoLyANjbW3FdMsc",
  "key5": "5ZvwGLQrmXBAGdu1QdtgVzeduBeQVr6bLxQNMaJNW8M1Pbum39KboCcaftw8Sqt8C7vNeqX8tfK6HBGLPuXnown9",
  "key6": "34bX39eDPCs2QyfyDfE7goLcqGhAGtNwPAiJRQgMCm3nr4mkPkK33EPgipxQiSDknTKnAj7AMSa2ynXH2882KePD",
  "key7": "n4xfJ7vmr1v74sWkhkADvWRgXLD8BjGBk7eVqk5vc76mYDQrfAdSJXxmWcoxBi8vfxTPUeeSYnxMqdFWevoKCRD",
  "key8": "3XznzotZHX3b9BLq5wCbetN4U6R3rWsqyTVJ5KjUqsNBcZNjDWcDjgubbTEVhqX9DBxsJcBVvs74TMFvnFUDEPxy",
  "key9": "cQz41HHRhx5ZBrKViEmSUDhQDXttvxoPueQDJFDbgWxATXPbLAsQhJgnBzKjQRjWzppFCnCtWNFY6H8LpekdBSS",
  "key10": "2h2ukgHJ2rLmNarYw65GC2Zn7qVRVqhoZHuB5K1vCHd5oP2cfacH7M6JuZuay9baxXCenbDkXraSsrwHKKL3Jy1s",
  "key11": "NPAn4YSb4LtWtCX282RejP1juEx3J2nKJ7kKoWZBDt7dV7MnMb9ULe2L7oT31ZNheCKSznUCg8XwTSy6bhmeJjd",
  "key12": "S3mAJq4cNZBbgeCG4ap3Kvs7C83kKSyWRXQjKDQ62p6dBY9h5iSH9e9tvnAHGg5WSUFoTCqXwfQyANz6dNxwUFv",
  "key13": "5cATfcFrufk4H39jh6z7j65uxGHmKYmHm3tahexL2aCdv8Mabf24yrp8tjC7cbfy7hJzpeCMaAyUPZ1ZbuHv1drP",
  "key14": "2A8JNsdLnHAvnmuRbqjDpXDrxJHuEXgRjYuYRqhq9Vyr5FaBrpyowLDjMZgDSRQmjQBW3ZhReoZDJtkqnnPnBWoV",
  "key15": "5WspVWanVSBzh4R8fN58mmPtfVQyCQyrRBsuYuuR4cYsQ8A9xyzzs3bA8Z4Gsm8EwSPq8ZzSrmzczMtPoAEog7sW",
  "key16": "nWk7jdv89PUvdC8dZZPQjXoCDGmLRhsiDdnKgnWsFpVuufmpmaQ9BXho53J8HERPZrGHHbkjcnznK83vPTxSJz8",
  "key17": "26LenvWHDMo47DW1DbmSB1N9JzRE8GzucUzsGhdXNZ9UdGbBz2aH1QWAruZZ2i7qBpfP6fye4jQZaZwjAeKxqVvV",
  "key18": "3vaXnxbrQrSA1ed8YnXq9ATaagvWAEcdTTW48giXwyYxFMnYBhpwrvgQaPGTEMiiGBWutdbk4rUvHhgsQhXShKBP",
  "key19": "2dzn7yMoGMMfcBDDHosWZdnRePNSiCVjg72SaGg9FgZzLeknyRWYvTz35okuYmvAogja165MHaXXVV2VBWmm1mX9",
  "key20": "4fDyiGzYFK4GYEV5paAjWRkVhpYAoNSPXS32W1s57vf2LvPXfDkjK1goQ2J9pyhWK4DBm9xVx5Z2KaEUaGHytEDy",
  "key21": "5JoHSpuEbJ2KepYFZFDYED7AquExQGwYrSzNroaPRQ6WQgpARYZ82kPdCZg6jmWBNjKUwsZ35v23Wh9ohFSGqz8D",
  "key22": "5dhYqqvkCu54qHMY3QN9atEnofmaePrBKZWEZumGwsakqEw3QzHi9p7FmFsLbwxNXJxBWEVvdeGry4PmAZ6vvsb5",
  "key23": "5NWq5y2giXPb69RQNqmbtw3sDah7Nd5dpj5subJWdhVkTgxAFwrquMn41g9jvyzD7qi6GKH7aqMnFxPbCjVwwb1v",
  "key24": "67PUs4ieb5znFm8xQSqqCMpi4R54JtZqtGt1Fr855URPUhAvZeGgJzx4acyQe2ojgqFeMXcseLrpXhEwQNAc4EP8",
  "key25": "xv6enduPBYEjE1ZV1pWzrJBVhShUM1TPEJLwdiqshHGhtGsyDkUXAp83dXrNK1dEvFmWa5WmWUGmVN2tv38Pjg1",
  "key26": "35fuLKMnZTRHYerKi8Y1GuPGV7DxTG5cjLKBKvxR1E85fWfQkNicfZFDqfkrDoeQUxknJPacE4cbWU5rN2tccsjz",
  "key27": "4syD8CbBhJivtgW3mz7sNjTk8renVd4Xjc8ZGdEGFZAQ79h7t1f87bcCRpE6GxrXTprV4muuHKATJ33PiuR9JB8c",
  "key28": "2DRS9adFT8p6PQgvC9QhXWCCqT7E1UaGYVZnfLfXkiAkdHgUqpMhDRpckcuqbfnMg4CcF17oBEqT3qDPF1fwMow5",
  "key29": "463eu2CvdUYHNMteuERv9QDXX6UJxDZdtkSVoxqKYoMAweyNBuVf6p2Zak4RtTVttmxiHZ41pAksUgzTdhujoBMj",
  "key30": "3kdtxEtMGdXScTyGNXRHCfL9qodknpoLYG8Vt9HijPzYnYf8X2UDhsCrYJ4YebqrX3HLig2PDsTGNzwGqL7qu6GH",
  "key31": "63c6ndTAirVaEZVqT3VTWeNMZWKoadtf2zxrS1ReUbDTjHEjWfwKtu9kyT42tQhLwhNJiRLNYGq6i9iSaDTe4iJ",
  "key32": "3AxL1JNyRKVw256camzqBzV8b1ibp57wvurGbX2dTVQmLup6cmVm7Vorgv15NHyrmXqxNpzMMcz25bxB8cBK7HFw",
  "key33": "4aZp1W4gmttvuvJDxf1qSyrGPV3LkFh9NTcUJbMdPG2asB6foZTE7khxeSmnCvJdWLjfVfLFzrzv5F1WgndEKbFM",
  "key34": "3tfEq2cL2AomZdEWMgMJiNs2PC6RBML3hUpo4HPuY7mvNj7zZtDBcPGJvQWjhugsmr1JZKNBUz6JQRfNeSx5ydUc",
  "key35": "2fFC7UitpwhoqfKswtzkubdhjJBmaLCwM1vgSLGyHsuScfytq8aSfGR6MjnLqJUSwR6v8PHgdksQSUeRFGMuoCLR",
  "key36": "9h6kVoA2ajaHZu4XDZR6kUvVetNfm1egkCmZ4qRferMX3Q3592DgnnGrzCKbAi8awUpsQh8ab6uFNb9SJ2RLzsk",
  "key37": "3Yc3TFfAsScPSLWHTHgUYWQqStLECZ51x9vpYjBnQWMPcCTFZDvW3j71c1H7ZCcbFFuDfWuZcyQtUSpNsKk9Kkct",
  "key38": "5HUftg6WdqfWznnRv73Fh4Lpd8t2yH4Qg1xMCmwD3waR72FLzhHgMocrzUXpUrJUj6KAJSU8wQJDiqXgHZsDxs1V",
  "key39": "5ZhaWXtC3oS8Qj1P9pgzu1LvxGqnPV4fK1ako6kEzEEYX2jrWD5dFi31T6NaP1UkvPcrioru6pMJsNELLyaCNhMU",
  "key40": "4jCKTqYjYnCKTpzT42FuCpC85dBQSPWGNsuXhAQdwVtcSQqbgbdV13MPzNDs3AeB18DJkVhXYqXU8kyWRGGrT3kQ",
  "key41": "3Lh7y8JtdJufvgaFBkqPEdBCdyNrZ9JKsoRSsBLgMZ8CCWhN69MFZ6jPShHya6Uz6MtnARNLkFpciePjysb5bYiJ",
  "key42": "2b6EvCaEZrgrjPhCMZeNXWffML3zYYEp9mKdMhMmqP6AWUuCYfS5MeMPdJxq96TQnGaCroy3PuXS5EzmNJFeZ9MU",
  "key43": "3gEUEmv3EjDmJVVqqZkM9jRq2F56ChB7hTueAYJbj5MpVAmwSKRKwMxgaEuTtMPcuTYyZziMBztUbnw3kPsKgHF",
  "key44": "2c7wYhd525S9HDCzfS5eMbZgPU9gQd6sxMGMeWNVRXHPq1oajwE95CNeH1RJQckhNMSnf15Zm94RUidQnL7vGJEf",
  "key45": "31eFCB4LVqsusPdobMMrsQwLXXRPVbZjtjREhjZMwS3AUSw4Lv4PhSFzaAnnnzi2gWN1mCMnfiWuUrzNev98Fa4S",
  "key46": "MaSa9FhbykXjaocKkTenmkzvexpdWsUEZFz55MTrfovXUX9H4p4be68K4erkcA8mpDoQxCtRYd1b6dGb59UaqzZ",
  "key47": "L2ySTcvGBBpNeh6T6Drys7FK7c9AqMnL9iNKEkEeo5FX1wzw1K3YSndbftrCeHCeKPVac6vzoT4ugKL5xefSREM",
  "key48": "4nLYQkKc5wKDpmQzjPXowAdYnTvVwYuS5xX4gNLBUFixa5CANpUMbiRHwj7B8p3CPuCtvFg76unEDfRWsMrKE6eE",
  "key49": "5YaJEssDBRijHHgeEm3SCr7VtcHf3SM1b9r8PyjLjhjn3nkyAesk1QtWkPKibmbsFW77HXe1KsD23G53Af4Sohu4"
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
