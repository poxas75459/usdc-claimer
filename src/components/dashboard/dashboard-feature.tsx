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
    "EcaAJMWtMJgBPBHWmiGVvbmzyk1wMBsK2yNVSppc2ZWBsmJWm7wxTZHB35u1T3P45TC7XNajtFpNLuZEQP6jGSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gS7gqnmxjw8qm6A7jtZ9zVix328xxoMpXz8TX25zdjZhPm6uRGLdHHWK3mS42GWCX5wdkCqYBVXcPiDfBkysHSa",
  "key1": "2aU1UomvdKozt27MNBoy5z49oHpkrLXHEJErBsjKjQXKTCn7wLdp42fdGija9vRiuhaf6jyYJnuGa81gZE7BVX1w",
  "key2": "2HSArEywL91EQwECNWbnb8bEb3RT674DUMTjGQhmciU1ZFiq1YBVqfdXK2mTswvVoN3ChrbCEt7VrwEUVWoE8EA4",
  "key3": "66VMzGNtqKtrCqZfdR1RGAXsCgmaypxcvSuF8g5wue3tYkX2f1qSHrjkfdZpF1Df6sfPP6qFBBbg7TD79uAFejyK",
  "key4": "3JFBvQ4UqgqcYcYYt7gDqJ63aSEoni17ieMNV1MxsDnzu9Pn73NMYpXqnLAsvjUZQuokeERuvu2HFUyiByAcoeTy",
  "key5": "4FgHWZohy2yGmqdKpomrEP8ng6D6oB4vjFfNSJYb5mATkyt4ktYXKK29RrcdX1WmzYULwqAEji5kGo8uxPVx2XbA",
  "key6": "LhioDVdFG88cjgk6FdkU8FgSB4G9dCsGDfPXE6rKcqySCL47ZLwUYh4Ghnbc7RUt2a9d5LstdVrkzugNXzPY9gc",
  "key7": "2oQDHRah6JNtX1sxy34xrArdTK5rZJQazh2menpJvnPAcnHBc32JSNpYEHqNeFsGubmjhDwMR5563U436LepsM52",
  "key8": "4ai4SopaAvsJRF3fz1cMjC5qeQXFmE5ycHM5YC3gjut4XJMZ6Hv55geJMotPJT3qDgvb1fNDCKmLn4fgpAVax7pj",
  "key9": "4Bmf5PVywK82MD3BKA84eyVZBYP8poHppfNEV3iqAMpgUCATayy6oDRcUH9mrjNxbksek5Jw7vY9md8tbUifvbWc",
  "key10": "3GMrEns7wdT24oYSoeQjDL5FXaGeokUmohsiFGfQD8XRaACW6NQfMiBPQaj5oqf2XADKJPDUrs4ViQ5Saz1qMMox",
  "key11": "4uBZVimdEhwxJUiWnzEGDBZWpY7uMwZ3Tv65PAsys6bvR2pSwkRLvJv6bGNRdPDWbLBRQPvN9ERBa5CjwxDUPcMo",
  "key12": "5LFmHk7vRATbDPkqwG2F5NyRFFfHtR6FmMy51ziHpQtS7QdpLLc8gKF4jaTB42EcuifX3DJcYU3uMimSyJXDZftY",
  "key13": "2br9kwh2fnR2S2GAX8RnfkzrNfQ7G5SV7tuFXz2U3VCrj4wezJPM9y6or4rybPQiFiW5xV3g9c6yvuAcz3RVyGDp",
  "key14": "4tzuypybzVPSd1N7dAeF5VZKuQG2TXgod8rtmaPeNMf4o7FQqx9xZm3g5E2uEMVMjffH4xUi44YRJT5pEnD6rSWw",
  "key15": "5hKke19nvhFDFxRb4Cp5bgHmy7RjtwXe8QRcrMQjePbMdUYJ1iakqZBFpayVFjhrwUJdb8MhfqwG3suaS1VK2k1M",
  "key16": "2qqxfcgQ2HFs54ikeWA5WoPV4ov2HN2nofhPVEBVB929yzntXQ5MsdMhCSSArizA42w9eXSutjSfj8qKbQ3Dkcjv",
  "key17": "38hPS7muyCAeZgmdpnBos3pksidgV4fjTK5nCjJYC3zNcXowgHcx85bdKs3VCVCydkVSxrYXg4LPHX2vGoxbzykY",
  "key18": "5m2MrRVTekJH3ZDeUDvqUJS1LtbruKA9MKAYLTZViSB7vkqnLjCQTkrWP97c6RZpGU3oxQdpadGzvb6zrR5Rjtzk",
  "key19": "2vjVUyxjdqAb1ecNYKsJnpJFkwmytm5AY3qoyzZ8P7upPmszVzq7z7u56AanEPXgFrsv5YV2zd9buJG1ygvxsQnc",
  "key20": "5WDG5CtHQhTSgyaQUZUc1RkzWjnhu7QJiWYuhxS35cdStNnnBGrS6fBrESVVkizbCUKghiCVr6PVfc8pNeuixyMb",
  "key21": "3h9cKsryJNvTinNvUGVTdcjYsCt8dNpbvEfuW1HbkTk3Q1Lrk854Az2aQc4mMEREAVpy2CbTbDJtnVhFxQ1Dmiix",
  "key22": "5aSFVym81EYJ9uspMw88VBAvEhsPHbb8knK8PvbD7a4wQoKZrpVutE3gQrFrkZVP1c2JtJfB9W6SbgHgjo9dK2rV",
  "key23": "dW9TpZQnTmZrKRxUycP3HbYsDdptGe1AiZDSYqSvvzWFcGxd1QRRSQgiCbsBbXqpQcsmcG9g7iN8fDgBH4ZvUN3",
  "key24": "41G2srSpsDYMLUcM33Ubjuja9aXcfWm3G49XCsaDfRv94DTn9fRSCjaSQXwEv5ZqDdWGMaeL4dRL6thqP7TwEAU4",
  "key25": "9Crzo58ZQ9iCZGiTFpRR1JtkDfTqK6so6a2beuZqQ9me6mDPWtpFdLF3WmqjUoVLMdnmDyfr14YSDhehgwFNchE",
  "key26": "485KVhBxh5YqN5xGLb8djxuseZif4gubsr2AiyGrkq1TAj3dXG4UWyud67n5nQNXhAQgUtCWuajPKWtZTrUpLJdt",
  "key27": "62xNhGV8oCWexR5mGbkZGWfxKSiuvjiGnKDJds75SiQJow6Pv7eU8QWX4Gra12hU8rFf2jTf9a6ScB3atGKKbBde",
  "key28": "218s9kMun8p1fS2wxVxTdpmRtEhXgJQvFhuwgMiZvYGcZqPaX3NFDaQ9toZNyi8eBdFvC41pX1rgGe1Sc2DbQ8Tr",
  "key29": "128TmvVmS5yHgubxRs5mc1ChpqRhu4h726Y8ZnNByFsSsDNe9qizKvuCjxTxctrcVM4oFE3KXRCGjDUPNZxJzUWs",
  "key30": "KhRQGj88RBTKCzNu4qytvcgV6knkJZuBmNU7MYk3c9ggc7o6GgMsB9GTxeShRSMpWoS4odyjTR3S5kGfXrVKstJ",
  "key31": "2DhGFzo5ogjhTECU5cuanAHL8672nkkg69aq17B3JQj394jPzX9TkF9PV86foqrQnFKKAzZgx54YgANZF8duRPD2",
  "key32": "2kcdLE9XgugjmcMcVznwzC1Mhf1ikotXoRk6V6XKNTtZjRrYAyjj4VkabG9eC9ykrLEczWyhvXGtiFKyAZGf2wPQ"
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
