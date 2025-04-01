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
    "4QMC8dWA1dywpeZb2Dm8rQYsG3dxUBbfkwYgwwupp9oDRXc8Fh8fse3NGahoR2YmdiV9sdfQKLwMTd3uTZPACtTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4So6GBUq5oZscou4nZZ8yGsd1bP4wgfJZpcfY1y2kjaLA9Vroa1u4iWmDsFK4wJnrWfck3UPN9kfguXxugseZfRd",
  "key1": "3jqgXWRHcyd1tFcPagWE1Cc7ALkNmwDzXbVhHdXjAdA2wsmbrvpnhpxE7RTntX1jq6bfJqpap5GDtqyp1BWXknGw",
  "key2": "3YKCbskoGFqF6cLiwxRmgARvCEhbytNq64S9mwB3oYj8q4Zgd72rD8JFBFyD7Qjck1AdrahdvwTDRVcXAUttPgzp",
  "key3": "jg1ohT5KTC9FRJDPemhL3H8GttH7EtKyTdug62yfyojxyckk2dg1Ds1ViYRB5MgpzSPBoGntQz48ArTmMgJ7Tcf",
  "key4": "2m1YJ5Ta48mB9FbkhxRai7tzpC2GaEFAqEq2dBX1tgijpB5C14XWQNzd38EVqBPeyhCuE4RZ2Jc7f5v9VTdQrVep",
  "key5": "33Newq15EeJpRDm8AisGseiEYxz3TN4XpJcp1ZgnGtdyiKWLg7UgSo6Hc6zxEhhxbVdquGM9axQoYMfEBULPQMS6",
  "key6": "ucSRmfL5UMsbWqjPueeukUC5K4MUSoR4VWs8YX4e6WXpNHgdKFZS16cHr7TpxtuTD8Q9DU2SMcupVQmvv6NupgX",
  "key7": "4iYBbdofoi3YJnQTnmkWPsSrRhQS2JAMLdZZq3WXLMkhLVY94SoFEiNzAnZ9Az7nB3Qt9rihMyj8hQ2s5KTuZjxY",
  "key8": "2moj2iG8BHAJPm4GGDnWchZy919fFucPFNckdCMDEz3PLQq8hRhs7hS6jkUGw42AZfE9RzA1PdPkgQ9Aqmtib9mw",
  "key9": "3ewsitRKLSqrBNyfgwniuj4ksCPk7HjBx926gZagfshDZvQK4r5aBo2UCFGh2PYU2FJbknj6g9JZDYxJXwLLgrLG",
  "key10": "2wySBLnSd3kSozuUkn2JdNcMcMGrpuMxR7CKBscycGqizxe7kSRMcQ3FwDLC7jigRLJUEJ5jSGKVtfbnA3rReYek",
  "key11": "67eyreNNCDL7a3xaGACoB3ATzYWUNet4HLoAcdAucZ84tETuN4zrE3j2c6QDnFWndHduNLnBM9vBFQ1i5NmQaZSA",
  "key12": "212n99YSuTpKbMqi9ZvW332QxvurPcxvp57ckoHbouRVb8Xi4msrczWK8VoPtwsz7DTyuyEGRgSq8gaF1HcS6u6E",
  "key13": "5ajCu3bowA2fwMHmBB7VVrLCD2bwAVXyRkdsXaxiGNxsxuEZy1LAhRFHkz9crfNs8YVgAYjQfGmYAUHN9UpXXtoj",
  "key14": "3jNm1orjsX85jRD92TMKF5fHhhaMVSzRuwuvZMV8YmqgJ5WKhCY3t3ZkPXL3ez3ypEV6vkReWMw9qKLVewVy6RRF",
  "key15": "3pf3cYYQGNM2BGg4x7Cye4ZhkKNBuCvPb8d9KXZKQk5NP9TFB1CPX3ZK8jZhLaa8jNMvTGxtcpjDaTEaZExyse2Z",
  "key16": "FPaqWousZmes5tE9crqPq9xQRrRCSPiuESHi9f1JJSUEojd5qXksCnS89eaTLKa4NeQncWUWEdzTDMctSAs4iyr",
  "key17": "Vag7yNm9Fyd5Xd8FWp9iCiZeygcQsvyiTHZwQE9hMoVARv28tfuAFaZkcUd94fB9TJ2n2UKoQ9JFBBG2xBYFufD",
  "key18": "4JsFiUeJws138WDqcv3GKLgRSoZhVEND6PtdpjiA39ti8wJYSwCgimm5rgCCc3UX7SvULY4pQAKfTWnW8EJrnaBH",
  "key19": "3kxLe9TsNgrKvWXFpLDkgK3MNJkzkxAXckkQXX21XkF3M7sdCX9Rk3YcgfsYqSH6BSEnKr5ayNHcVcwAthSwihoN",
  "key20": "2GmT3g6N9r24XWDaKcyDkLREr4v9VqS6N4TdYG8FJDMJGdb1cHzGMnPEpsMhUMjXEJSUmVfo9z6n4VGpftK1arrZ",
  "key21": "zU8w4waaPTozE7PGUYprXXafM2dfsH76RoQerHWzesR42oymvVtHFkDnnphJX6qfvp5chhvY9Ko8eSvRE77rqCG",
  "key22": "5zAPEys1babNoiJip8qW3oK5sD6mUTwGBu7ZToyvUvHxEQmjo3pZgwunrZoFcazmHFpafzheL1QbqQuPyAaByDUF",
  "key23": "2SxKaG9j5jQymFLpN3aBJHvteH4YJNma1gsEFVTVGDsKRuZK4QDX5cJZ7ih6uMAhJhmuwUC6HTzedhoRYhRZPhW4",
  "key24": "2CuUgFHx3wuDuSXm41guK64DzyvmM86jYrUaj2JPHMKH9YpiPae4L1ngoEFLYxHeKaSxHK1i8xo2WZGK3xEvT9Bw",
  "key25": "2FZg7Xypo4KuGr8gHdniWxbf944ckMutUPMsfCdahUcWXcNwcBe8a34B3DiDuqpcV7rJ6QoNKm6b94f3HdEeRGpL",
  "key26": "2VSRJk57CfSAGFZ2s76yeCDPaPhTe771B8YHjz1sVA4QSDsjgZBYF7K8veQh5Q7Xi3vZgv7GUZQHaG5LGERLTa8X",
  "key27": "5mVZ2CPZPAc69b7fn7MBhxg6Y78PTaNK9Lun4uUZKirR6sG3BTJ7RZHGPNXur5Dhjay2JeSe8qWMnQYUBY6fKETe",
  "key28": "5EphAP1wdauXYGHkd2aqKhUdf7uxYS1LVnYoNQi64VAesx8BCwDeU2zfMC5dKboiU5hhy6qQ7dtppWbFf4KC7APR",
  "key29": "eUxnYDEmr5aXz2K97h9F5DfC9TSJhWDGsGv1idk2USPxBY1d429iqcpwTiZokU5uTnRY8vF9TjversvzxwiybVK",
  "key30": "fd3VKTkrds3cMdxhVS39xWitwid1Un6mp75z3z8qdvYVgsb7gaH2aBFr3dkvNaaKMUWyTGCEWipUQfTuF3bXUYS"
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
