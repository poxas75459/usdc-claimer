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
    "5SL2V3tJ87BLfbXKHFR1bPjbfUD1gD5FMgvfbRnpjCzDFrTGhRCTTEp5niXFVXBom5m8hTgCv7xVCPSWbvELghKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZoP5rDxG7TiC4mwr2HMRf25iVAHW3FQkVBBKbhGm9eZ3iXHB2uMkrDNKUVbCT2cbRz19KViVFySDbUXgBFG9nD",
  "key1": "5ukdBdB8sunusVmCR6uy4b9SAWzwP5nX8kduvLCMpZo8btRosoiQFuk4543iyqnvBVPoMMv6hU14taCbi6TpaGv8",
  "key2": "CfgMQoGoDL2ArbHq2fGvJSbrQNpPpTort6wKxznXH7cGYtB6CeHzgNCjnaTiqM7Hpu9zbiFKxvCoj4RxMADWdt7",
  "key3": "CJWgAjjfF89hQo23Hpy7YNP5t4mCyfXvQWsT39udhCj3um3xDTH9Nas3zHQg6Fh9PJX5yMSYaoFAgid6WcuZJJa",
  "key4": "3A1gb2gxCj4L7uuWCnFYdsBj62ASfdHywxMfz7F5afBnoPjEDcdvtMrwDu3ByhKcqwaRrpeJVqLWtTCUkNXmVTwh",
  "key5": "4jhmsZqCwMVFaBHgot7LJYQvc2oMoDCbZgTkqY44hp6zArppFVhKwPnzTvgZJuwpGyJMZGHCADe6F8YZrDvrgvD1",
  "key6": "3g5EqcGQDJkMpGk6yqamVty5YLapPjVCMp4STyCQrswTE5dTk8oHuZkxDb3DM5aTXstWdsBAdnCMsALC5jEnzW1q",
  "key7": "3vNAEH5MuK3bb2Z8VW1GZWaBCuWbp9HXEqbZfrmMF28n3rx93nVniQBL7CbSfoyiDixU6fzA2r2XLbQomoiU38ur",
  "key8": "5hrmBy94WHb1rd7QJKrRuJYZ2RwB74h1Q7xGg8LoLadxYXPhGttcqyC9pWY5PDZbSStmtiaKHko9b6MJJGRJ9F3W",
  "key9": "3iMW8MHJ9hYGzJGQfuU9nFasivhMujGifE2YwhjjwasHoKddRNRgCwwnjErJkRYxC2oKFQSrP5t6o9Qobx2ogN6f",
  "key10": "23cRDph9AG5im8YTePpQ51YAJbSm3h3dAfbWwtYN8bSVSY2nAhS64TKk4iUuB4tbVt659FYXB9xDcmhdvGfUdwrT",
  "key11": "26tb61e9MRPVKXm6JXomdHmb2YWz15DtPzxBPXzcs9gi4UA5UeZwmVRVVaZViCqhCi3H4PzZRCrm7MQCL2pBjsBS",
  "key12": "4oWgqAkEfQm7GA99rxfHV9LpKtbLCfUV1XKfq7ZabjiTxGh15VsCZ8e6qQY1ds8ZEE9UEksYnhq31kKvoswYNm8J",
  "key13": "3o42eVVe2G8FLezmMqGY3Ahq7fWk3CLxGJjZ1E8x3D7gR3DhAcmNMyandeaFLW9XxxwcDaVey14nh8En5STo314C",
  "key14": "3dMzoRLGDBNi4F8TBeVJccypYszZrCKAxyqamDkQK7MRVJygF1FRH5tf54tPrX8E7A2gUoxea1DkMNiQFFe5e9LU",
  "key15": "3Hf9TN6ucCVBAptcfMCdURXdCv3tLPoxVWwhaDbBXNsLNksRV7BzB8zaqZwdbFVwmQbZb5zqK7UcbrBA933eViB3",
  "key16": "fpgKZHNkytix7LBwg7KWEJZUco4BT2AYXnPw13gM5wqiDAtvxaP7jbMGYTiEcaTmoZXAqAMxM6fcFQrLbfQcSN4",
  "key17": "44Y6uGzMnqtKEhYnTVKzFDR3PaW52Z454mMDHrDfQrfD2sdPgHKQJmaGWLRWt23YpTnRSFGJ5F6f28RjLku1GrM3",
  "key18": "598NKkHq1imJaBM6G9v8nf6T7k2MYf2CNqeM4UtwGk9Hoi9LCKwKZSgpSe4z95mBZ5mAZ8Ugs4iGd7yqLQSCB1ZK",
  "key19": "5Tz5wHjqqQx9YL8pMefCLqFGNXR4ETXhWJPZwGyg32aEi2tjPJeiWFhxCpWC6H6rfnSc9h2uPVuuUqFiiv3FQKD4",
  "key20": "4PuW8SLzLXz9qx8NDhDoRUjKfFhQYjCmY88FjXMeM8N1q8JanLakrn5iF2JPNdiJrCuzhwPEW4o5kjhEsACTmanm",
  "key21": "4Qoso4gYtSf86w37SCh1g9ao3NAEhbF7Y35RRd51kha7nz2MSS6sR2AuQzVZohRTUV2cb7g6nHL7hjRcAKz6PojA",
  "key22": "yVE474Kn7bmvfhoPNje2bwn7ft5DHWgvVP23s8Hu5zNRMk6YNX2crfHbqs9vifbYGGk74Hr9upu5CD8CmmwdJr3",
  "key23": "55QhVvkCmpV5mkZsZrWQoD9gPYz4MRpQNiPyp5AbFgayDJnpkKMka2aUfSAXovka3bMHLY7yYyE7BRFgs96kx6DX",
  "key24": "4f4NCmNaK9PQMQoRvpAR54986mHkXhr24B9ZEZryjbE9gLR5EqJ6QjpSyAfJmh1qauAKX8aZf9U1ShMY62DZsRSW",
  "key25": "31CaQqNXUAH9jGtoypBqWVMLWAvWXjN2H7LeoyN4yMoDPqpbunG5LE2NENcgwjEd9rMMNiuaWvhaZZxHYZopW7cd",
  "key26": "47sCPu3Cc9V4iveWA5vMwD9pos7dn5JySLdi7vQtDJ8AE8FFrPP8jWnjbMveuFZxcdWsruh83Hsb5fxECWhFbX7",
  "key27": "5kBMqXJnZjgexDajND72vTkYCRZ9BfVuxAxYNfmRMZnV8CZR6pnDPVRYwALEganfBoxcPN5KLeNfkXyniJEAdbaz",
  "key28": "32rsuiTwJEVWip3mksGMA8SgS7hnPLQGAguRVQYxtm8gycVxBZKvXyCx15kaLZCeZvoxzdXmK47hjct5X9ocHutM",
  "key29": "3Tp9XAtHUSem9VZTgomhG99x7FrKzh92a3YpY3SXkRuxEaBNZEk7rrpgifMXw4CKpiPR1zXbA7Ye7JL3PgJpHFTi",
  "key30": "5uJwwFaDY8LV3oNx2C5SYLuEHJxeqwfb3KaGtMns8zfaSym4juzeCPggAbfE64uHmrfRkrqAStNNYo5pLVr54zqh",
  "key31": "42beLF9V75MTYF2LEdB1HesT7pSNs4P7HQEncpfSFKyWkRbztetgcPyrUVrK9F7LUdbc5QozcDiDE7uX8qUGDgRa",
  "key32": "aAaC99frbpKnfncWeyeAZQH19NybFJs1ZoN6fixJXyd4K2qHgFE33aKYdTcp4g4keC93KknBu3QAZ4hASuYKp89",
  "key33": "2PeM1Z4ToBH4yto2J8qHoWLVu55wieFuPhMtg21QhohuVw1x4DHMHvwX5tGeToH62ZHFFLQxskeBjfWeKN1hEX3j",
  "key34": "4SvskpAWcMX3HAWXmi5A4PDHJdv3ye8xEjaURYJGyq8cfZj3EpqgKXP14YpjauajLsYEttLV1d8wTMMAek38DVgZ",
  "key35": "CZqoDG65YEiArxmsSCxN8UCVtgerdgtD9cqbwFgGpxJicX5hEcUFxcmxULvPJxDcdEzXAR9LFSKayYtjKZuGCC6",
  "key36": "5y7bKtRqEb9SC1B33L4dEuJ4ToXKt4DXSpv8gBtiSbxEuC1Tftc1yNTzk2JujYqqKyCJVFSqDGvMhzPdZf4RvQSM",
  "key37": "5TVv59GXQm7D5JNkMkLmuuVZBYQTTw4QR8Kz99gxwxsiwBYHXPbYKeEC7CwPry1MvjA5x1urZFKcizXh3jmJSk2Z",
  "key38": "5wQxNmojQVQ6eqpBqR4cevu22hcRcsjuDadfwYTX1aEfnrHoazR8NacWVLmsKFS9fTqJPmjhNpj7KtLmreN2Kjjv",
  "key39": "2hb71AYXtMk8k5sbeZYpPryfQ4nig38w3a8BRvqAUSU2jgPx2pxEQB2n7v1UBdoYNL6P1RuDSB19rS7DtxjpYsyt",
  "key40": "xUWjoihY8hyXtRsbmo8rLLuvyMb6bcofMJQy5679mc1itzofyQso9u4yDGz1ieySc1afPojeE7zwCYwGUExoTQZ",
  "key41": "adzMs17pBhvz8qoZ1u2wsJXWBHqe2CzN5xebHVySkHyYErz26mabgk28TjpQqHRNqywHfjyeMH4QiZgHWQ6Qxbs",
  "key42": "3FsoWssaGnB5XdRnpXqVwAhtoptpdTBzFt8pc6dp4C5mGBZr7EQiXKrnR6jYvQDVDLEAQ6739XHq4jeYbv9YHgka",
  "key43": "2k7Kdq2qW4dVqsQBa7whV5fDZwVttEmGB77dBLbKxUwVAUm4j2bDuW6ReppZcPwsntLSW3YEV9VjDQ6EEzeb6iRv",
  "key44": "2LgCvoyDyvyyz9fbmwUSmbvNboG8qosc9uZZdpycHco5ZwCRFSJv3GtE821XLRQpAiLSdW8iiU8FVEbinB2fSjnd",
  "key45": "3DshaR6kJdzZTwQ3fVBMdtmBjdf348vJx3Cok938mmvcKTocDuRkhp6kYGmMieh2kNEHfB6ZCA2R1YoFiauUPKiv",
  "key46": "HbNQDBHNqUniSPQFrvv5XNhWZyykkfQzscySby9hbenwfNK53GahGtTM5E7asfuWabrrE1x3Th2uGpyUYR8dBqc",
  "key47": "26BRKphmpVBQ6EUQNzJfPG3ExyVg4aeCGVcqopuCfPZBP26NG89t1H1WcBSmBEfmYaVE9mNWYZk3KwtwKCDwEX8b"
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
