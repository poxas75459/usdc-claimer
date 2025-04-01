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
    "4hgGtkK5jZHsyZvABhKDJoC6nZvHSRw7p7zwb3fTPh86HkFTZuoXVkcqeEsetjxcroitpW6ULwiBY5zFhQ56819x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qVWkFYtLvW5XNGftqsiF6Y2gyD98GHTtc9N6jE3rSzVmc5dpV7f5XoCvuwo1VjCcavqpTSfZ2TEdVN7bFga4ks",
  "key1": "4c7iL7bhsLmKogs4twG6yNbifbcvk5TBpYBgAcSnaFkFakU87R8jvBw4HqSmLxXzWvEDyVYvUGuXD52yGMHyBCJC",
  "key2": "2dPCgRWnMEnusptAyRMXXGbapfCzhC2koNqNakbouYLkgHzA8TTgXtzvmpAEiDGeuvJrv6M1Cu5mqM8j8P5pwoUt",
  "key3": "2N3Nm4kndad7Fi8dpyHyjn84qRzDYuB6aDv7MGYpS4nt2zszJ2EFgLQouivHYbe9RkHyMyHPEBTLTfg2R6ab4ZK",
  "key4": "259s7WBaLnE7mxPTQR1RAn8iuC4ageWGhiT5TCDC5wgApLHWpcScqwiFiMddodUWatiNskbXB9rZA8UdfUbMFW2v",
  "key5": "DDtg9fjvwQyneeRaCMrcWjVsejSvuUKrMz3mtjzrGfzHc6t65GPaHpJtWK4LBdy9hb6JnZMiHPHwqjxchBbQmH3",
  "key6": "2bM3PsfGpuwwFvj5y7RzJdHK8VMb6ZD9SDRcn6dfQ5Bcwh6uubkg6ko63oFuXpxkkB4ebckkdqCGuaZnrWiwB7RV",
  "key7": "43c1RRwqvc7vjFKkoXHXU6tEDc1gUaHYjPbZq3QrHAx8B8f2R3gzLHd2XVvQwe1ZLtfxav1XdACQpWpNhXNNzZZs",
  "key8": "v7nogW7i2DtqsVfvTgcCdfWivCxnb5BuHRMjJPJRpzXmwqQELaajJ7DRh5SFgpYggQG4Je8TCuPs49rkJAwMsQf",
  "key9": "5vU2WKruiDQuuFzgK3hRs17nytYiDPRvcHs3dzgmqdSKnGnRvCmnUKo1npSmnDZpxXXpPv1xwdtwicg7s5E6kbHD",
  "key10": "5mwcJAGTuvhsMp2zWpEDVLrWGryPyYE35Mq7SvocqWGkm85i6tph93skTZvgw89w1GHPnY2FWNVjXnhjLHFfTvjR",
  "key11": "53sXJLCgSSt5ieWqCyiLZeP3UtvSpye1JigDakXo2MBM5j5qhEohttvBtystgNuCAqD3gHj8C4th2qtX3bxvii4o",
  "key12": "5JB7MoqZQS7nVZ75SxUxz1ZCpxPizNUuVcwCtbH4gGKKFTQXFWSauUDGGPAoUizAAaaUYJWyEvE83Zoax1eExqrB",
  "key13": "NJxXYG2w3umSnS5YfHGMRcYCqmuzHn4zabigagSN12F76uQZowKEKqLCPip199KxtBHA5F7GQ9CJ58Xzs72qtGJ",
  "key14": "2m8wydbR4iDqT5Ap6jodQEzSkZcmt2rsC7oZdghKdqru5PGzqceiEZSBExJa418ZfFQSsMEiPnivTAsxptMaSScZ",
  "key15": "2TjZu4R44uemaw8x5VDX8CusSNg3bJXwm9UBMHz6ZqZBvtDR1xCFkzS1GNq3ycryYCaY1wVJBRmsnY8viioxdJyi",
  "key16": "3eA5JNm7G76e7ZWCX1fEQS6S8k2x78wH3PAPKyP1JE3c35X1LLCW8ShU2qXxVSgCVdkWh1i7YcsF1n1TZ9gox4J1",
  "key17": "3vHjN3AAD2i8DeAyDWd86ok98GCZJLCie5XVBfX7Rqg5C72nXepyRoEmCfUo28SJQKxtv7RnsjSte3FyT2KPUUHA",
  "key18": "CUte8mG7TM5CVhCFpySrnw4V9zgYZQ6jNiRdYs9TApHxXQzkiVAcX8gHpp5bNMdwSwPna7bBqW2Jkxmw8ouMyHX",
  "key19": "anUbrHXRfvCNc4RKNRBuatuANDmnmrKKv1okSeLr6oUyG7uTdG78N1FxJcaXiQDoExGXbRZfEvtH5b4xhen3hrq",
  "key20": "2Jnpoh6gTzPnogYvos3EBRVA7q7qdo11PHz7FMeDgVEVN6A7gdpLWJmyWkhVgegi7JwnmDySgEfQtZv5Prp3gUVo",
  "key21": "3MLS6mncrAPZRdcUW7ZDYhUmgzJ5UY4i5Bt43J2KdMMYPuvfZHQC7vc7bkV6ua2fnzxtc2KjpNeFQ2s5AwWvyWDK",
  "key22": "sVaQeQxUWBmLrLKoUrgSTYDdXYLTLQ6tqArPqqDHRFJ5geFvnCFZK4xkDJNhH4LcEyR2eWePL5aDvJQNfRKpKd8",
  "key23": "3zEngjCh89heua2nUehJwA2YkwWBBBAYfFrGtd8nc7XYJwWxGJ9oLhJWrYSDncZowdF2oSkgbJwUq8GbTw6kLFKp",
  "key24": "3SPytGwwRoxxGycnseGgjL9QxCpwmZLQJHwJFoAgdxxfMCPovND8G2MvKRKhJvRxf8QAcvWK2Bqk6PjG8yev6vzL",
  "key25": "ess5dFikz1NKvJVFTDWJbBn3TtsSwFSQy7GuvffBjakwwsr4UiP3eEEmhz74YbzLP7nJv2asetksK8oXRmqEVQ8",
  "key26": "3GRz3XqHVbSkPwnCPm5NBtuRDJMFe4vmDKLR2tLo9S21XCVK75kQ5wtzxDRUHgSq3Vk8XTKdrh6C5FWaAbANMnhP",
  "key27": "32MBbDgbDH2CNYaU5EJ7S4yB3bziuwRT2RDHuVSTgv7pC7nbW313PWthSdoPAP3a6yDkDLESgDbpFw28kGBbiFoq",
  "key28": "5TomhjikkAbFXpwHcfJfPWAEsg1sku1aEXMcPtG3xwKFPcJEdqfpyAPGubr6i2LowkDJsK7LxDLvezeoitsqWZAy",
  "key29": "5bJ76CFWuGeNPMj7JY6phtvB2tgSFv2tHR836hc4GjUvt691E263dv3mzSWUACpnXtCiZ9Vhvz8ZdQrKJoDU3cEC",
  "key30": "guqz7b3uJFabS64ofPoGDsKkY5AtWCZriWhK1nmnjTJrMaGtJqh2M5MnM4wKtVtNVteeDHYh4pXkm1jydpASuXq",
  "key31": "5oBhM7YGxcfuJp2YWQbazvuKPv1jUwNgFqm869rCwuApDx4QBJK6GCTp4Lz4SFukgyb9VsJYK7Q7c9EzBxVR9MoV",
  "key32": "2v29CYovYmXrhkvbx1Gbjq8hXbL2Ef4uqSmWXXCw9z1KAC8fCRgKJuXJY1HQVNcMgrV9LJugrTzeGDXYSAak4tpt",
  "key33": "3JC62WtftfpG288HTKvcZXoj7EmSvJrQrsz5VhsReHKfd1F2sUuUseJyJYjcjw8XXRGatHThDf61u6YCkiFRWgTW",
  "key34": "UPjMPU6rAhGELF4nX7k4dmJ8jwVTELyvhxHcZ89N7Y6M1CgJuh6vs1JRkAefzWDbZvsrM6BXC82EFdLKzAc51Ka"
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
