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
    "4ShFmonKGY1XmJCfDQWMX9o7V6GzDQhE45S4oubexbiP5WvDHd1YYy5ZSHV7Qpbpmx5CwjKVJWW8rM9MQ8FV7UM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wtp8TeAJKsvFbi6cbCvgUiSiGJNeH45nvVy6Fp8kQoXMeaPGEzdRQLia7c1dfYbaYCxwzbp6M8nPnjLKGwDLP3",
  "key1": "h3prQqCegu2BtpnZyonJaYBb2wcjYktVfwyGCD3ZBdsbc3ywXEKf2Wd5NesBprDsEzzzYmydJCcusC8JxWwp91v",
  "key2": "5qBhwsuVeXYCvYzgKr6QNMHhLRpsFYrn7Agva5wcfie3cS7sxj7Pfy6jwbWm7xWtgrpmNeCdfYpsndVwjiTCwXRp",
  "key3": "4WnbjwNy96zWsEmyFzQYfoXnbNCQzHDpMZqxbZrK4hgRQmzC7NiTqxtrUq16KQcxJp2wyno4VWsazffcuf3ByGWZ",
  "key4": "2MULgLKV1giyajpEyuZpn7LVsDpYveArDMyJ6wXFTpPs7WDDkfns2nU7Mt7VxsRVJv1rkfJ8f7xHWxozPEvxS5sd",
  "key5": "4YsbkBNmyxPZ5o9P7ZWijVhGCFFq6vQkQo6yeyNsitS7wgVQNPS3ppj4C7yWRm7QCFEqLqsuCYSRvUrcUZ3EFqYy",
  "key6": "dFjiUfre3Ahv9n8h4DDytWpgo9pFHHVSs8MBuyzMcJHLvx8CmAjHRY8eSnp1hpdBULE2EZAafdP1YMBm2P7q1FB",
  "key7": "34NQ8A1QsSbEyuiEbM2NpzyPHbvkwBrhTnmvRZrpeGSUU451PjU8oyry2hhgiYJdyfdrNGCc3ZKKYhFyJgRPfgxm",
  "key8": "tnCG5bvjFZLMNHgFMzxzs8MPGhBaoAooiNi6iSg7YAMF5RKi4yybBDBza8RcZDLS2mBDAUoW1XPwjNL5GP4oyvp",
  "key9": "3B4vxpokw6tbzRUnMA1oSkadNY6uNw5UnwC9buz9NCtvU6HGPHCHhzhaxmLF2fQFeiBfZ4TkVgy5wocNgLGAi7gH",
  "key10": "2zuqadVA1Y3sG4dqUyX7aSiDK3HCw44SLR5jpnPFWcSQ4du4oJgcQXGaoBA3WMzwovVkk7iaizq6oGNJY6JfjZsC",
  "key11": "oohyCksYPLU2yeZPU9rgeMYdcyEEKZqqEaERGCSYnJBJ7v7ZA9LJoKKDDNA4RUS1KWoYpcyxTmmQPJq1Qg7nW3Q",
  "key12": "5N4rTsC3en9MKPSZCX6tVkxVHMmQFLNyeNQJ8GXwEfFRFo2FfTz6wbJ5GhtgXtwc53fMWtupvDBLTDuhecizPkA",
  "key13": "5XhH7ffJqpuzUqNN2At8qsrVFoCGjPMCEPVaU8NnEp85BwEpTdm9qSdN678QNK5tEJXfoGNfvXvEbucTEzP7L5W6",
  "key14": "5oWhCgwUmYtENBRJqX8VKq5bRnaTKaDAj7iS1h1BdQvyWk14juxL1JZttbDUNwUDXCmFND1Nui1cgCE7RoH6tAB3",
  "key15": "35o4vbEfsU22tzvWxsDKz4vycsR3g65j3YmwMXShWrXe63zTHvERCtM9d1T54kVstKvy6gv3msMxXHnh7Fhb8CxB",
  "key16": "4PCNUVbBDJfsr83cpLZfTwutPmaGNXB2wWaobnSpRYto2iDGXWiQVNNzeCQzJqxkzanYzensV3opCmeUtwqVgK3u",
  "key17": "2dxwRz25stbLzQBopBii9iMbLQ6X5AdAYowibTEVEfdBsPW6ibNJsrqXjMsghG1ZWRcyZ9Yku7pKPo3akAK33MQN",
  "key18": "5SmSjLaq9Mmz4XaTcuh2hJugqyTEnqycdUikdWLAWoveKsKVdQfvYLHwLSsqoswjTJctbNwKC54oqU1MfPoo2uyN",
  "key19": "4TDH6NnsykJ7XVxZzMhHTdKC4HtbV5wUpwHYJd6wZ3oeT3tQeUeL2aZxtcJTD2nNhjHh1wSCB1jiCG186AGmbTe9",
  "key20": "YNYAfLpYgcdMJy6SftfcjyKT2ZxqrJgkMH2oTMUjatNMxUJwATv3Z9hNZBsCTBZEmF9wByhgEaFhNcrUH4m2pia",
  "key21": "2S29f8qog8xvtQaDCcPJVvb1xqxAK3zgipptgqGDwPshK2243k8RgTZ55zmL6sQssLxDWtMxXM16SYYesSTfisiu",
  "key22": "n7XHepZRSD94vpSwaDdUTewQ9DxYdoU6kGYoSQVia8NDE8odWUhSxskJfTbXqHVPubcagTEgwV6CpmNQoFD53A1",
  "key23": "4q4WFj9bvnC21AecfFKhTvPLoDcjEMmmvdU4untRmcAJUpBLojuu561vppgfWvTYLKK2nFrF99fBeNrpCejuD4GX",
  "key24": "4XGsNHpmymk13jYnFwSoAgEuWCUiheL9G16ReZiD69fSVz8oPD17cp4t1zNW9bqS6Z2YZYL1x7yUX9N5YWyohoJL",
  "key25": "pd2vQ1YkxbyuTAeY3XRxHgKndkh9kHKWAk7uJYtei29GHznmHQ8PzaQGoNdFMWWfXxiAewJbX8rffdcu4D9ihLV",
  "key26": "3iBJR76exs6uxkBUN1LESzajfipY62JR2MZCqzLeQCj9kBkJFV6jJKWhrpfY4jXV2Dy8MQ76Z9xGoqfP1UeLvTaQ",
  "key27": "2kYJLApt253GkSaZcZUmn5DKDQCWwEU8WnuWH2ozeYLtBBgW63cKR4J9P8A9dd2MRNN8wzoPgPbxEV3fLK1vw2D7",
  "key28": "QBadUNsaTaoAgzRdsRcAKJJNG6khSCLLWob7Jew3qbTt5jLzBxPZ3zUS3Rgs3VgfYFxoDwZVz6odKXu5Y2nCHsZ",
  "key29": "2MqYoT1SmdjaQWVe5smFCtuNRa3Ax4AEoEQdGZMcvmLWTRLZUSz2ugkSfVzFa2faRxW7AePVPkbBNre5FQ5S8iFT",
  "key30": "3oBDTN1P1aKVffkPMeKqywkV2yARE2ugFAE8n4SGjHhH3mL9wAGGwXeSt9HxpYMFRSpkUKYCtccv2L5JBTq2drpC",
  "key31": "2GkCQgY7zVhugVapLN4qvFoUGLPz98eMWDVUXBSEpX5p2TQdoqii3pckZ61hPvmLue9GEpDUq5Hofxhq33hynr2j",
  "key32": "5DKW5cULhRD2fqvHRgSCaH1bzgT4RJXBGaH5DeUpnVc6wnfbB5K52Ln9T5EprM7Xzr6bx66iQDnjs9aA5x4FUidQ",
  "key33": "LEbxtJwx8Hn7YbdUg9WY8XaWGzWvv5e4QeHAvzLs8Nejy6FrzqedjZuUWurVuymfYtmoTrZmC8Ki7Tz3pJX9hP9",
  "key34": "21NrpaWxVMYPh5uoHJGvknWcs3uj87gC4Qh8PehFcpv9NqQpPeATfnapKvjVL5fMxnerNvHLB2vcMrLC6RxWqXS5",
  "key35": "2cj3nq8Gk1C4744PAuS6UbyP2gvZeXBCzY7tDGMvbs5UoYx74f2iUx5ZiMTXTmCgjCJGJ9179ZQxuwNWtQ55VrC8",
  "key36": "31cdAfdMiWt3HGj1s9xMFhhxbEpbM3q1BKjERxdPktK5kg1E5QGx9Qe4Hmr4KshUrR72AUi1zePuBQuSzF9v5Mwp",
  "key37": "2EJM2DyVuWdn4rC1GXSUxMNSZZc5PhZGVKmPnpn4K2cXsPooQVuefHCyy8e8NNe6ErjQoSjTvLqEdXU6fjiVuu4s",
  "key38": "4JjN4RMg75iwqtj51YgBEaTTq662WijNeEMSZC3QUWCbhE13KsD3nk7ZmUNRRKwZXqomYcz2dC1tTN9oM9nNTBfz",
  "key39": "pMHyqAnwBMo6xwwLa9Wr45cjGvZ7fvGbNbUD1PZe8feqvwrkgqvQujLBuRfuHRqgXurccAVxSUYbHhMtfeX2UPW",
  "key40": "3rqmkcz6CpGnQdCSnWu1y3rGUqN6dmnfCi6boRaX4DgD93FWPJLnwwGxeYaPdaeKpV1rLnqFL8PQHoAFAMq16f77",
  "key41": "6bDQjSSRsetx7pLgNPk6Qcaw9JN2ouohwzZvwmjiJFRTUdHHbUdJCQNSRoRpta37seGLz9Kci6n1wVP24YWwGsA",
  "key42": "3B5GWxK1HuYrDDssjnD8o5V9UZCc28b5TnNm7pvMXNu8WKRjhWUS1Z5W2uuSt8SwfKokSsTbxz7uoUXx1yCP1TK2",
  "key43": "2Cx8ZEVoJ8kMda2hPMWNs8Lin3maMDTCcYZHTh5RseGw4MfVsghxCpsJwAZxq3YF3nxCmYFEw7CJznGtJp73BJTF"
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
