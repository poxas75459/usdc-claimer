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
    "3YJxoABUyd1PZRhfZURFJdv4fdngmBNLqN5Y1FWwQgDbfPoRgXJYbtyBLX7NkpoSpdLADixiNHNovYxKUF1PdiLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RxNAEmRNskRK5YuD6CN7guprxwQy4XUdTrZ584wVfcuWKY1EYFZqjixubndxiAhwDxVV6ycZxspBZML2U3ksZd6",
  "key1": "3PE7CkpXpV4yWE7RZebg8VSnsyUwGP9N4gYo1WaT5m4uyXF1UX1qX5JRf2UQCf8gmuHrQPewsjwizbS91bKmRxbq",
  "key2": "64dMNih8rJDH7iaAsARkG2g9Bwd9ip5aRCi4pgRfS5EpBMsv7aQcSvgcF86RRd4swiwJ1aRZrAuXbYxHjDYByhpe",
  "key3": "5BgPhSX8GvcHWt126b4zv2KUMGaDerrftUQFbKDLtBWHPk4AvPwsM52rLwaTDNtF2W81WNoULcG8sjicNCsNXp3G",
  "key4": "274keFWMGDvjyWSJqZnnrwpmShdvxpZUKqunHvKTGnuXtj3BbeJGo37XuAKrsTesq5BrZg8JUNRjVfY2xNRLV2ZB",
  "key5": "5ygQyyqHru1sbLDmQc3wwFRSSob2EJp7JQFV91PcapLRQaJMUsL1CEGseob2sghVghYVYHA212QSX3zSvbDD3uLu",
  "key6": "66PzgQ9D9YxongUWVKQcuubxEau9G27gFqeBiyCi9VJ1ckjLA8QzTnesdryzHxhjpCfFY2HpgbGjjsnsFs34yr3a",
  "key7": "3eE5DWbUY1z3cGNgqRMRA6ASNJYfEL3aMgchfzqJTUx7feRYT6Nn6jCPELGt3Pqq2DBFQDj6RWtRKC37AvzLKdEd",
  "key8": "4m5VS6p93p4ZxCy7RmFPMzmrRbuqtuL4YCUUq28kQBW6eiq3APqLxjY7ukRSThTAbUZHLoVX8BjdDKBp12EM3TZ5",
  "key9": "5rMjKTvxbCSiyrKSgtC18R62wirEYAFBAryAzjDXWj5xYUgW3rcaEXaivK6Dkg7baz3Fz3vGV59cdUdrJU3pwW9R",
  "key10": "4uQCkgTUdX6Pnde5M79vAQcGeReZMVNcSRmx7RW8PrNaGx9Ffw64zs4zisifqdPfgMa8UG7uZrYfAd83evq9oh38",
  "key11": "42YqjUDCxhSJMDgZCyLvwsgyf9DaiLqHNnvUiiJoWVWonr2f2LVsxR8ut7kvthiHQ5pAX9LrF64SzamNoa7NjZH2",
  "key12": "3FNTPQjXqiE5Zi4MCYwUgHcx5a9H197axHHRaqrmyH9CyfvZhzXPi4HRMpkSG8bRZTAuorFwQCJiairmAfo5SJpv",
  "key13": "5rQZsj2L6De9KBUo4f1oHUaw9uu7MLXHdCA4xGsMGCQ2BfQiEow1k2MjKQ5A5k22NVqXK3NPkJdzDefxHJovNwoh",
  "key14": "2D7o5pRRJiicAgTYASfzpR3yxWUJzo5RsKnSNRgNBJs2p3GQnfjHfwXogz6fJ3k16fhS6L7WEPzJ7Jhp3bBA2NHq",
  "key15": "B7Ynfua5bGKYpNvtUqQYdUShnVEVgAfjTyb12yK8ci3Cg8Gbdeek6ZdJQsUd8fz7qX8HnjXa879LFZiHgVMnSiS",
  "key16": "4wHkPJWfAn8gcPCmX35Dmx7JnMf8TNgbWAfA6p96kY1HSZjxiJggWSyyAR7jtJum78nWB1BJSJ3NbGzrg9ktqr4Z",
  "key17": "5HMFWuwVbqHcCU2Qaz7XgA3skiv9FX8N4L8GwRYYXGEKpQXL5tSLU71az2hFZcTizury84euo2e6TBjpCfiMpqrz",
  "key18": "4sKGKPyEztLQvNop3uNDFe9g2JdrDEoyNA9sKMcukmvHJbnVufV7Urdo4zjGaydMeEr1EqbSo1NXP2bVKD8nyPfZ",
  "key19": "jvJwpD1zb15dPb9gksdEv2TMBrUTJSX5h4MQaD6UBfkrUe6wwYLqwCR7NrKnV3asUEUNPUj541uVXq2XQGrJ821",
  "key20": "5Ao1RwTTWUs4Z9o62DUD1wfbLXE1XRvYLDcN2qsrj1HdMJNsTzyUW42r5j74XhvjXUwDtN2XzeXbQRkdgkAhQQw2",
  "key21": "4axqW171iSod7xaQffZyd6mgJNgWSbt5C31rpGkjAyzjRJ6Hx2zdRB8pe4nFzsiiDXqRm48SsbwHhHbAsKbT6XjB",
  "key22": "57LyEumgHWN8JRrvgMZuuFwcy5fBmccHMqoFY2SgaWhytutZ4v5T4SVpqMp4cFPaV7oKxPvZfCpEJc4JuUY35Yxf",
  "key23": "mxy6suGDDW5UyKERG355i3sCWNSMtBaHNe8LNw6zj1ebmFa67AnsaFX2c6hkPWRXQE9NE7QLN8DtPHmj5V7nxav",
  "key24": "udU8Y5PEqtbXmvK7KumzFhP1J2a76kXdZiEzCtLruRXE4k9zB4hWJMYq8qDvRTDJ7qsDvJfi3S5LQj8n2Zbi4YF",
  "key25": "2mhiw3iNZ7WUGMMRRfQ7whnPyV8NkTPboK6mPaVNMQjRZRaastmSbuxm7FKRuvGDb6nH6L2ftU8iZpgFrAV3afHh",
  "key26": "3ibX91qDKKfEAAd6X4xYjqYbMHfeGW2p4oySaa66Bwqv7dxdv2vHHhJhfErpj33F1Xan8WbznRgE3oHqybJxJr78",
  "key27": "5f1AXhwK4kFJAaZjU5UGCnqom3AozkpburdmdjX1P1CV3nTdggGFWWEHyJPuvf4BMqzr48d6Xhrf2S9cVNgb5Grp",
  "key28": "4XqtXS3jfNgRirnyz3EwXGk9pEa5sQsfgDdgic1jevmPtEeSSbNtMr5JAB3pua4mKKsUw2qYA81p7m1cZwy3dcEb",
  "key29": "2UfDjNuzNmcszEQ4zMCgYLAGGpSxQoGSRJoReB5Hqz6ng3pcRjudfjU7p6YDkLb8Zd2nzgNEiaAGAzEqUXJ8gmhb",
  "key30": "YxvvCbwPSGbFxu9NgJkqceNMoV3ksFuYgZxTwvCKEM1FsWjPgesL8vfGesDYjcsiDKGDP95SMfN9uv2Jm9cQnAP",
  "key31": "3v8XgN67jNfWMiDoprzpNna1ufLm7XjNC6PWKn3cGkQ3oi8sLYV5jQ63YRcEkidpsK9CoPAryNrMbYdT7MC1e9ow",
  "key32": "LCQ4UdL9NuzWtiLmSDvx6iPdqoBdwo9YjR592ikE5YdKZo553YzyszbwKnvMV4NFdsc4ew41tukf1sx1XKkRbcw",
  "key33": "2eja47Xs86iXKk1QNbG7EhWPPvCkw3xWWy8Ch9ciQ9dEsnwjFx9bE22xq8eWGkxR9zwhmBe5KC3voNDMMK3i46Pr",
  "key34": "2ZGMggGicRXQMtbWgvDF7akiyAqBndQHqrPXUigeftRVjXbTqs96W43CQbfxFwj2J3KQ3A9PdpashyLjmdJyJSEp",
  "key35": "5ycWXn4yQQ9N47AxNyatrPBY9oiMvMjRyXmDQtxhEkR8oHQ54UhwGGHgmpVUQhNij3NaAcT6dpuNJJth8cbvvNrb",
  "key36": "2XKrCjAmueox93Z3D9K6SBxamFxypByjFtMH5EcbMDVSX7AAMcT5n3zFjxTxmg3rzBAQeoF5XzsrGPTkX1EufNaJ",
  "key37": "5JrQBK2tkjBK3VTKahqK2HpXd6azGeQmtCRCcMhWKU6JQqDrTaGR8btZVhFBBoJhaHkURTm7GwYBqj5h7zEwAqVk",
  "key38": "oEx8RdDBfZchuyraKE28npYhVPLJbwVEyarUg7dd4LGLRaS669XVzUYn2KWRrvj9vCgSN6EWRUW3fxmt1P6VvxA",
  "key39": "Ruaq9Erz3mVpsxRRSj7bUw8YSDwnV48LcJmHz1SbFgNsNyqmPKzUXWspFtWxcczF2Fh81jXdmnjPexL5NzWdb6f",
  "key40": "5iieq5xQYbiXSuhfkYQDYJdbC5LZLNmQCGjxM3Kum2RMFsjQvBzCKd5LeuT61VFeZq1b2vT82Bcxk9NKU5s7Fnzt",
  "key41": "3TvHZiiFDk9nK7Z89Bs2s2anf1xDhbCzJanQ7u4Fh8WTrweAJmjfE8iF1pJQ3FaaGxuJjjiM28ztzXZaZBwcdHhv",
  "key42": "2qh7uwh4gjDBbjq1q7LBvswNNAtuMEhFqkqF1GidwYtqwiAebZeKKEUsTEbdPowXd2FbpL6J4UcaS5oD9kfEisXB",
  "key43": "4mgiNpg9QCy19UWVvk8SN4dPpm6RquGXz8dMavaszwUGRDxHmpyzAUdXDaEGRVBm9JMM5P8a2Ca18Csriv8dZXxs"
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
