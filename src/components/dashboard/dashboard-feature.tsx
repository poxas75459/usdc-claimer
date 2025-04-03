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
    "44AogKk6jUEgTCVDWBpiPJbX91vpTRc3hreprs5DyUGxJRUQf4jq5zfwnFKRFV4hCeK1mriWQQDR8Y2sAobLgnZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inUdLPctW2Nd76jTzq3dGRnkiAyR35NUVymUSCdUCmh2NRJjkyB7jTps2LXQRt1eks89We46E7Rm1V9m4pRpqzN",
  "key1": "2C18ktyghZ1qwsVySGCL7tbmdAE7hBsKKD5ZwQcdTXCQG6Gim7pN2xq3k5KWkDC4grHWZPj6jqQwoJ7Cf77zkLaW",
  "key2": "MLSQbSdzGUyzrtuEzFJ7zoLjDzCYnE6mMB2TtYyyMYiDfbseZH1HrhfChcRPYcKaZ66jU1KJYDowJEfZZ4KMduD",
  "key3": "3KUtk3XnDKh7m4VsiKfP7GbF5gSPxYtoJF9SGz7jjnH82HLAuW43a2dDRwED3WjXr6s3UomJJiPGfPWao5Zm4ErN",
  "key4": "2NW14myBbqMvY3YnCgcrtwHudvTWfEjMXuM1DQHRVAUP66PyCfeeiNQxsM9K8bKV1AUADy1iJkTS2hqWf64sJwVD",
  "key5": "29daCmKX3HLCZ26HasDudoyPwaaC1ifHakWceHyn8B74MoogtXmjw1oeKm47ohtKfhDpA82Tq8zhhHJucW1BcEHE",
  "key6": "mz7EWed9w9LvtrHbLjhrgZ4j5pMJHQ68Kc4NQgccCKh8ttvzGXnj4XVrxnnos2g6mcqSzMX5HbGyTgWLx4Kh7p4",
  "key7": "5tYPk9gmwLCrSuYkt6rcHrKjiRg5pSD5F6tvfHqic6oL66D8PtUrawRBexvCJ8YEVMe8oNtAgQEe7xgTPS5jPPBz",
  "key8": "a4ip6XNb5k77GqYMcMxmzzydX8B9WrjTuxRAW3a7YAZJNSpT29uDsBhChsRXC7cW9rhD4PCXeFMxXSkMALSPJq5",
  "key9": "564qdRn3bJKCVSsDQYBCMMPb4a7R22j8Qtybo5tM7eThHwieCkFuxEMqKs59xu2MtP5PhvgC6UQPZe9yTzXUTPxp",
  "key10": "3E52SCHLFN6BcCoB4e1TLt8qSyEEywmxaDSBfS9cihZP6oFPww1Yx5GNo6KW6qwX2x1CyaiihsHwKPrpLVrXnqkH",
  "key11": "2GoEVNKnt8Wb78BVusv7TX4B4iyvTygijNCGL9B5jw6ksmg26Lxs5WJFLRn6T7qR8LuATjNLrvhzdmsPwwTieuTR",
  "key12": "HMusehFu8VmDy6wmQ7ifRQSh4vgFrmVdr7pzz6Gd91iyJ3vXKHJfcmx5jEGs1isc2xKZepseEF5XMg7ziQ87Zpm",
  "key13": "3mvsephywZEpzFRi9ZAG7EmsVbmrHJQrAvfmL3b8J8vdm6EH7iYHkBHt6ybAboiLbjmgrwzja3noyYA3f6jL53PG",
  "key14": "3nqsGcTca9NJnxmSnbZyEsRRV8snoouTSqBseTPDDSXdvadHDRXr2W9xmQY8EF3oq9nXzdtrqDYhxRwLrpTRvD5V",
  "key15": "axUUhEmxWxhJqg3fpduDqEVPjv6kWimyXWPzoiEPSFpJ3RWcif15UDVH3gwDocYAUsLbPRDaL3yk7CrDnarSJMK",
  "key16": "3TdyZzqLEfmZYe1U83J7K15ze8zwuEudvsnrfGkHX33m9wwMXnSJRaFEoevf7K3ETENgq3kViGYa3jNoyzuLE3wZ",
  "key17": "4Pjk7be9VRZAR3TRfhidnQxFe8p4EC2wcCBGitejMXYdKaukeKPF1ZWsRjKCybNXywK1UbXdMnzqn9y969Hrfwt1",
  "key18": "3cw5wBsdDdC8cpCtPpqyT5efyh3TDdf1JxpURB5XHYQrk41ZjBracKR4GKHRy4LMmifLL2V1Q6CN6w9DVLhGHHht",
  "key19": "54kJEceWqa6oWGtc5ZkiqkpqgNQMGePkzeZEafWGhTy3ZRxLNvTfCPcfTfdkxaJ5XnHtP2x1tfp71DAnMwirQKRt",
  "key20": "2BoCU4Lw9JeVsXUa3DM2y1H6pJFvidGJvaSJcs4ax4gE41cMBtTLEmuEi2GZJnX9ABRBH59ddN68LTSDyrD42fi8",
  "key21": "58FxuUfH8tjmVrNVGs9jvuvsU9C7HjHEzvxkHmQuC2qPKWLJ4SprTfiu2q4W9AbfsAyu4jfYS6EkWAeHsDoGLNVU",
  "key22": "5BnfFdmhcXNrxqC56piuN5imPDbWue1YJuywVZBkKfhJx4rcW1gqPgUMwWQMNCbfDXUXWKZ9nxyPySANHfS7HwZ",
  "key23": "2dDqMjmTiFKPQBiaEtVqi7DzxyMoJRNK6fr6Ew5Xe9nFqaCtFRGzA3khYuzECimpFZW5mtEqormJ9QBvN7NMAhGE",
  "key24": "4E6T3ZdVo2Ma4SMVdtxiRH3Ddgz4o1hQiHh71JcvM8f7wzLJd3KeMYN5kbWDgmaQF5EyRxWAgLwDda5DkbYPTVTA",
  "key25": "2mKT13ckVvxYHUsqjewcdUBRUeNesvJZt2SzZMhEp2o8NPf5kxUDsiCHejqa1g1nUbdrr4oYKAqf5KznX1TJFnpJ",
  "key26": "xH3cx7iqe2XBMAU8pp3RJVZR3httrySfmx7bXSey7i41TAh3Pxs3q28wXgEXkVzq3CqiU5zAQuHqy3GeVWvgPoQ",
  "key27": "2vMhdHjoepn614r4T24hJPNvJehHwtYUZ8tKdUsQpQhsSNAhtDDZHnXc73HKs4C3zcRHyh8adg7EF3TaJ2KQJRTo",
  "key28": "2LW9bsuKRqjz4pK8UZSvk8N48ksWjAtc8Zh97hMRsCUh3HGyU5uy1gSM65zWriPddVPYQ2y9cGD4DSAyhqVYGg5D",
  "key29": "2qHHLDgefBRVmbKsfvYVotQBY6CZjzCEmNPWaU7BVMC9BUWyL5gciGTXMRY4mYaGvoHnmRnvSRP9dPNzKSSNKjUB",
  "key30": "Ydqb6n8KvzijgXpFrWk4agNvQndRWUVydXRuM67D8Z8FmgzNChZCQJNQaUNum7MczREqAWcyb56g6j2wexJyG2B",
  "key31": "qHgzGDbajpe6cKW8yL15X8BYGreZtYh19E2U9EAooi32VqhuWJQssr4pVHiuR6Cvj4oGpGUY7N6ovbzcqMw8kHd",
  "key32": "2d5FSPxhKqgdCwskp1Nxd7PnXYiz8maJA2P4wZGadhrNxfidoMV5TF75cSBf9ytvTmoKB6FeEA9uhcYRYH38ALCA",
  "key33": "31dTQwXXEnavTwyhwMp9Eh2JW1Fj4jFwCz18RudGKybMRXxZ6B5mwsT1tuV9C1WZesVwfG3vM43jzLmujucrVU9W",
  "key34": "wAxx5XwPKJQ9n1Krox2Lb8BGdmawAYqQa9XDCQTG387SaMXGn34Sn6u8FSXxfG8PwNSUA4muwSe42ygYPvQVp1D",
  "key35": "3TpHJ9dLwoKvzscNBV2NW2mpWAqTYeLsnTwHmJaF34E8wb8S5M9EuXd2P7SQyRtw4Vx2McHSY2ehpt5DaFhtJhU",
  "key36": "2ehTyKaY69qz6Vbzzq5zR6ZN6N7yC1WvPT4g87GwYtnw4EyWoCCxFjMnsT34eQ81FXwMNL2gHNqbKAa15eyL2EXy",
  "key37": "5Kvko6QVjM3HJ6ZA1RyfQamBkWF4dSbCu2pNgn9DM3BbHZbZ6JtqcRq7ZQQcjCpWsFM8VkBzvcsGjkaboqu1tCGG",
  "key38": "yjJ7dqDJ8fwWLFzhPo68e258eLFvsudYrKKenccpLMqwMf1F4eifGtwiNu3AZFTA4zPw2ncj8UZbfGsGkDBV364",
  "key39": "4jcvBjcBqSqvPUbdbfua1wkrjzVg9rppypwWcZu1qrHk5QgJSM4w5m1yg26ERA9cyx44nzrXTuBCHVD3sY2vE718",
  "key40": "39n3YXwRPqHVQ6Zb5qjef5asnZC3u16VdjrTvjMZRa1n5Di8xfbWT2Ru5zeqqi1LzLoT1BRjPS1cXYvTSL6k63mL",
  "key41": "5TFnYCnnz9s4y95YyPQxxjjkNfYSV7xeYRaaSRVDGk2vdk1WAF7L7WsYCNf6eqxdRtj5gBTcSFuWWDtFokvFyGEG",
  "key42": "5eZvXKR3CgDFDQkeW7MYGoMA9So4qS2emkSR5JmTYwTDpUeJfFVVcuqxZmF1rNCAs1ztqaRwFPw2R4BG6tafiEvU",
  "key43": "3BbYNf2DqpCT9Uih8aBaMPfwKnxYB3E6zgJJo3P28FmXEpi4PyQSqRjmKGmfN4tfLoeJuQcP4Q7fB366rbcdnpGw"
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
