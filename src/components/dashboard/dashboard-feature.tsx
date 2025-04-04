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
    "4GQBEQC7RoHGErJ4xiDZCz7eeqzdA8icRoUbEsoDRWuAyRVoNttC7tnmzeSguPtEu8FbtBD65b12xCoSReJGLLuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tPNS9SgD3LZb5Rk2ynyokXGhEx4i8VaYR5oWawqCh2QFVq7SGtbCGtiuAQQEDL3wT9XsQwK35EWJx7Ya2VYtft",
  "key1": "66KKmgtbKYQ3CZZ64ibXSN5jva3aKxyzhyd9ML1TWKEByu59kKvQSmyNCfomakPtrjDKG22xjwQzEVSvr1BJJNux",
  "key2": "3t9xfGCsWDXW5Vk27wHnzQg3jsrQcqdkkG5hcDDYtVihv4FY3yqY4L7B3rB1cFpJWXhXDvUXTF884VAYb9NbJ6e",
  "key3": "4AXHRbKW22mbvv8KukFJxvbQrNLiqczFwerMt1F3bgaBHdmagY4HxUQyNCFYuQBcs4q9aF2fviHeSQZFitthLrKF",
  "key4": "5KTRTM1pzM6zagcAMzkZXUF829NWMeiNEiScMyzkgafpKyrkXdrfrug15qc51v7wJLFAewtM5e5c5X6X7BJ9nm1o",
  "key5": "3ovgTnEjA8hK1ykH7vzfrsaD9oV5MrUmMiwXi19iocXtS5NrAncbRpUrLYqZaFNTrs1MxAnPJzctMGunLabTMpuA",
  "key6": "3iifkKHcHFmD1NhSQ1QUMhZH275QCpDrZz8AeBqivxnyzkWaTKPNarwrSW2aRU3KY8AW9bntKvSAKZwJL7gQcXvD",
  "key7": "59mxd2FZenQbh6DRZnEYu2Lh2HEzw4fUZJ2HLC5hagUa4fUH1aMgoo3r1ppy5337YzLSapX46G3hjWUaBEfULdd5",
  "key8": "2MpNy2tgjsYuz4naTyMv8usNKcv2dZi9qSjetZxic427fAN6KrBZficoY6WmZnNAwnHo3epMyjT8kjYeBQ4AEXzL",
  "key9": "62SaUncRcYyQv2Kv1inHy1C4nXeYbXvD8PqExaW5ADE2vif2cfgLFGKyMK8jdJy8PcHVboyaaqK5JKo6ttRK9U68",
  "key10": "3yGKSu1LMMgyVhmDAdcRnYE6eX4WmLpTtZ9WRMYxwydojUJXDJGsA1ZjMMY6kWNaXSRYQQhzhuygkKPfG8faEGZR",
  "key11": "3pxhaPyQahappCAeHCy9A3uMEfPmY3JyNFqBycDKPNtVfefud5z2qGgp9sGaMDSGQD2vT4xDfRnQ9ugpDG2iP8AF",
  "key12": "5AxZNXTaFEzwdZnDMCb482rAcarLzyfmyhZssCgwvqd4KrRMiTjQQ21ykNyQS7wiJ7yZeqa2sgG1JpwXHihxRXWt",
  "key13": "528HoVHVpdmR6h1W2RPnMeMFYxAyo3LG2zC5KVUgFCUXWhQC5NJGeSKQr4J1ASJ1bQif6UeCuEUh2NZ2WRcQhWXM",
  "key14": "5LicQZvunACr5FKDumyWusT8zy7wnFzmHw2SNKD3rXmRU9qSNxuSw6pfUBjfXnWZHkGMo2LFchJVrbTdk6UTUoW2",
  "key15": "5JPjcjteYdCGUb45wFPaPrueYhoguZfUNcMmEXmowUjsfkX3FfHCSXEy97eUzfby1KVztDXty5bHBHu5gaW3wTV4",
  "key16": "2P9hEPpBiVnD7SndeF7M3zVPGHeGdb6ZXSj2NBLFh77x7ZjJpK7KNxdiC7STk16cxPBCK78eVQ5yRFjS5QrbyoMY",
  "key17": "4AaqwTFttoHA2ZB1hJJVeudGEDnXnCNDU5uUPynYTXsxHYt5W3AS43ruMmd767DBJ4WVZhh2usCmZfHbh46CfvxL",
  "key18": "48nPVj1pkbZrv5v3roggDpH3GhGHc4LSytuY6YzuCpn3ZJAjuAEL5cU2r6JMzCwapNFHdqP8vbHA3rK76jnXCsx4",
  "key19": "5EY7LYbJqJP6qr9PBDFBYnLgx6sCu8GMjQGbJPN5wfN8cPP8yxsRGjyzgMNiZiV94BwjzCRdxtZjKmgb1y4oxw2N",
  "key20": "5uVCnKjF5RwWu4XX7YHrqQPgYhxLX3pUZQQeNPCK72L8KG4Vdjh6DXgtCAXv2xNAiA62uPjjtjhLXpY33qYBbSfe",
  "key21": "2mUMug6xNPeovaC286q4T1V9SJ8aZeJgW8daG9XF91VxZDNJZVxw4vjF7iXeoQNDb7HdVutid5EzqAX7wWtu1nHK",
  "key22": "eT6qF7rNKUgpVDGATAMhwtPE5YnMWbebDB2kbb1JaYbuNRw4d716gvK4f3uCEfa7ENTEpu8PL6uzx3zp1HpbCJ9",
  "key23": "mdhzQz1hz9bkLkEXiEgyUdPYD6cYS22Kb5rDGWaX789Uybgpd8MN66teLViJ5CHL7Gecp9Sa2kxHBeSsv6rTeUp",
  "key24": "32G7N97gBpqSvFv5THopvJe3XhgLqTd9TnNb1YopWGGDT2zgYt2Le2NMh3wYVhqjW9U42v2mhi1kisk4N4LDtpz8",
  "key25": "5U4SLG9NRFEtwtPRrLUxGy2SyQfKi6PT61UeUv9ATYncB4YJ9pjaXtantFTMBJKi1Nmrghyhf8vgu3XmaV5EFBnX",
  "key26": "FNUFfauyNqjdKtwhrbVEReZZeycGF5MK5t65FzJGQGbD4QuNkGoGf6cwF8T9LpXooRa5EfMd734gHp6q5ewM6HW",
  "key27": "2sKPx1abpCQEWE7yDEdPb4CEW2oE9BAgxXn9y57Jhow1udocmYaDRrSzwncCL8Ej2JVyK7BtL2rUdqvyrY8G4Gbp",
  "key28": "5HTmaWtLQiPD4N9ow2p3ano9yktEUaN1NcyGDeU2VZTBnsng3APQHxFJ1vAfdXRArkWGDSKFQ82cziwhwASpDoCp",
  "key29": "3yMrT26am8kmC3QdTM8T73PCAmaohTbLJS8g4cSAQFs97Nv8zxReMoo8fG9GVZWkmeKFNUuqcfV2Udn6EQGhHook",
  "key30": "4wbrAmnSibmr3UruWe6jcTBB1jVkjxHKrxnsN4aMeNiYoYBUM87GyDtzUgAR1y88UwRoi9orPasjv21DKn7YW3k6",
  "key31": "5icr7afxFSjxmSxt1kQCPXJ2sWCNiWuW2M4FxNWj4qJB4dV3zBgwCJTh8SBbbnRXKb6AgF4ZLqyhTmFAf3asnkL6",
  "key32": "4BFyV2qsdXkd5iabCjrbLs7o76YmFGEBjT7ZDVuwB9xCgS8LgZZFBE3P1JjYQg4YEZdQRmRXn6d8HcNxYevyVHMV",
  "key33": "3dReBVnhQyuCD7H9GG1dFAy4A5kjdnNzCri93be4infvouZP9PeooBucYda9ut1E8hsEyq94pTghfP54ojRbJCfV",
  "key34": "2NwaMcQVYJWS8gKVHeUsSyqi6X4L51VGkNh4WU8n9p4tHiPp9PiHA7xi48WXeKbcTp7G8rwr9sC61hVc9wZnZK5",
  "key35": "1aRxovv181RYayw9VEmbEfrSzXiGoi61fXk7wHxqtEMo5MgjWHhyXxeBy9XoMs3SdCM93A73WBJFikdSnijkP7t",
  "key36": "2mJmyxYkLrw62JqM3HpkduQtrwiLrPce3EK6cH4vmZUM7RottmoiGUKF7C1X9xFMTv1kgVEHMGb25JBuAQx4FMgi",
  "key37": "5w7ugLGWfULR2JycJS7TTrprAkbvBd23HioFjZwgWxFrxSWMFZoigV4fH4zihCtZ3gAYEEQayhRTrkRPkYmqANth",
  "key38": "5QLMYx9w33jemnSmSwxtQgjUSnbwsqBJKZHcV8CbV4RB7Dx9EdDbgkyYWfmVxtK6YfnJxid5PpuqgjeYv1Kc3tWE",
  "key39": "9sTmNSGUqhmvRongYrSVaTJYdXdeZP916C5VdHqKW3FF4pw6dia1b1j9iYTJSCYkWfsjtD95oCjWQpdn1CCkaXR",
  "key40": "r9LQJ8XJiLQHRLjJBcJRm5dy2ARdMoxboxJSzrBT73DDh3yXV3kCw6gC6VQ2uYB3goaG8ofwTRXATNP6wgkYY6U"
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
