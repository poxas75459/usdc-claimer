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
    "28H2fNfPzcaEp4Z7Pr3UuWTAnZnF8AZFjxwGWTFaCxLypopfqbNFLG7Qa4U7gKXw4e2J9StSqLAYzMqy8DB6fkLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SBaEwC2H2giUPWL9kZV54nSXrDvXfYpm2WNKegf8wnnmj1ihK4MdWLrQMvftKNXr4toLUbzWzmZAB4G5AtFUsE",
  "key1": "dUghPrFcBuadnyHf8S4En9cmowh37BE1rhDU1S6MNAjLqs4fLAKbq9VsssqFBCueMcHGdhVRgvBv2fVXT5NdJqV",
  "key2": "2RtajJoiM2mH6VrykAGyBvQXHui9ePJ4oZqDH7hcHRy9Ui99zsUDH3zgeijtUmQvyvuBZ4ASKvdzq6MiWU8SvJMa",
  "key3": "3dFZHBCVZdRjncy7MxPr3WWnrxo44FMZJ4o4KTKkYAeazNGbc5ZsFxK8CcHAfv8pKHG9qG4RRHc5oB81ghaEGEBz",
  "key4": "2T7EnQMiFJv6iLwL1XVhYUrSHmsoM1YyN6R2WBQGrha4tFwE1jhmuNsTwRyFGdxAmkLFTDSePRKGT6NwDM1VSpiq",
  "key5": "3uvfZgeoEJMyG1PGf1epyBoy3pyM3dPzALeXfwVdoG6mbbBAEgM1apvCcJ8LH7ocKpUGzLPvLL62MVa3ynJBpQGp",
  "key6": "25XswusKqbhAtHbAWBxouJbCCz9Ks2Jts3f1qiEbBaCDdKnVmP9vycNcbs2iaYWxv8YY65ozbbCpjtHNyHa18v27",
  "key7": "2FVmgdi5wM2THrdYo51L6qC9fVhNGsXzLspvu2AQh6PcfAvK32H4ckXYDBxsdRNjYE576di6SdHR5f38pkZzgxws",
  "key8": "3CiKaiPEN3YNDvWxmtDzB92rJzdijaLdpvxN1n6XaGpjHHLkqbLr3R2eQyro8h7B3811vXiN7UiwWxttrj1yeiEp",
  "key9": "DQvpZuMEMndzcHwaTmeXBMM4ga8puNwgteWNTRQ6ZJYpdmDZaD89bdvK9fXxBoDXZcX97Df7AYka5nDVpB38nes",
  "key10": "67HCR56dusdvJ36kPan6UFZRda7HHdYSpkUGXa3iBteGUG9v6jbkwspMyTbNXTWzBb1jfaYT3q9Qy8ErCo9Hn9J4",
  "key11": "3iHuta1iA6M8Vm2z3DVKtTXn2CyNBB6miD84BjYneYappTRPTMCdecKGKJH1K8A4necsjUjbBirodTn2NsnxQaKK",
  "key12": "5QHx4wbaLTkGyEu3VDMzECpWkgjWjg5zHdhNEG1jejuK6PWhfUxG5WfdfUtKxduSfusQDCg36d9Sz91p6CeacmhM",
  "key13": "LtNu6Fdt1zcriQg2PQf4e1S4for53Hsv38jGx5atD8XF2wFjZfatvZKh4qCJyUezGF6pKPmqRDmAkVD4HXYrpuz",
  "key14": "5N7FZBVSf1b4W4LQyyLKFH5zmx8TDwtXk8NgPWhiyMKcjpknSkgY5VCHZbt5utv2VU6AFH7tRPpxnYP4V66MGzmB",
  "key15": "22wmEbyRCh2wMx6AAL7BEoUNB5mVYte77Ctv3itkXfYVgXfkBmK5S76z97t5FShEXx8xMMdj2QyZPWwEV2aRiJih",
  "key16": "TqrnLEiaCTGjgkrDAFx2r7g14StngZHZHvgM9ubrQiaKZu5XaTZUMie5nfQWLLXT9HUFxx7L75Bn2iskXMXKZ58",
  "key17": "2dDMy1jn34yZbSF2ksg7D14CGr8mWDnheY2YHbwrZzY5Dx8tUU5XDmiED8yEWKJ9jzBgcBsoPFSURxKFxW1QJG8n",
  "key18": "bJscFgsbJTWhY3RpyStcBgHhtKqLCrh3hweGh49JRN1odGCn3pLU3xEkgY2ge8kZ4VtXcnEefnABp3gBygw8dr3",
  "key19": "WPrYGmGkEoE7Y7WEzP4jRWL5sT6VjjqRrnGRRzZrjnaBsMF6tTDMyVxAPEGUXMBn59onfgHmKV9FBGwt6KZmkfS",
  "key20": "2QuJ1dRrTn9pqVR4suTwqArUN98LCa7HqEu2sVnQoik2xn5tTQgNFmJDvuvoQyFiaHn3LnN3P1doH3k9iSgGZkeb",
  "key21": "5XXMKRQkxiCxfEsNtWi6b7gx4sbBD88FTHnMgAmuTUgNFmaxrzFzvaEXQUrB13eywwmM4eu2YUQ6r7FFPY6BVtqp",
  "key22": "e6vvqvTHQyM9i8xyqodWWgffh6K7pNMgnahw7inYQERboLYswMAUL1XmjzoEr5fgtCnWmpSQjzAZNqxKeVoXn4T",
  "key23": "NjMo6Z6Aj96Tv4nqwL2ReUZCt7toisGnR3bx5LwypyzhDYzoqATtWotT8XLEiUotCkkBBpQRn1uocDPDAm2WFb5",
  "key24": "BhesEG9idG5EUyaTEH5YUxCnVRLoML3cMeg9hoKGHZ1kMipBZ4GGX9P4JhVQarqkWMtHQZKZDAVLk87vniRvYnY",
  "key25": "2jg9JPkziyJkLd3LhwNXSzY1vrPAZbV8k78m47dqJEDRwuHGkfjmHWNV6wk1ZQWYqyy6mdGtJSEXuab16D1AdrtG",
  "key26": "2EZ9Q3B6Li3HjuQkLq3jvAA7pF6ajnH3CBjojMYrVCkkQY8iuVBZhRQqnXrhrXS2PG5NR8rX3KnxMv75yxbQsQRQ",
  "key27": "37enaNaU91QhVHtvR7XjmJSMSBGPqNGjpMuR38RHAxjjGAqWMxGZ6QELJUdwzmvZ2FFsMpfXcqqxvRoXNYX79Fxw",
  "key28": "3bHuf9JwEWFGiRavQqHQvxyYfzvPzYsBfQFsxd6jX83a6BYLPyuZ25YdEBp4V1eiVKzhrXmg7ByffZEuo1t2HWdL",
  "key29": "4iVztabaDTEvWvsVGxYXi3V5ckvFuJEtuNibQRVrqsK6toFwy9NqNJAxzyyByxMSP74racrzqdE3vcNk5884Jws7",
  "key30": "2cjpeHgKAJKYScXE7yHcph8UyFp2u78fi1SQBt8fdYEMqQsg6cHiHUVxNsfsM5yxFf3AuThPGQJbnf5svqWaB9Ne",
  "key31": "4A4hVGpVGW2yKV8wxe425w1Gpaumtc389SwNEwjGq7Hm8hpPeMRs1CRtNTVpnNrLsWu8b3GW7PKfnyYo6pHq6Csp",
  "key32": "3CMfaJPxn5Jy3TiCeWf9tFgUUHXGUeLdQgo51BjUNNrNR8vZVLr9qQ2ktd66h9u6UydyWa9ZBTTipKm8u6iHD8WH",
  "key33": "3sAHzQBA7mjVmbvSBpUKZt3eb6JMDLpyVnxkJ5ZLdFpa2qYnnktCTESzSjbcrweJh4eDjuLPuimhGwegWiWQu21j",
  "key34": "2qiNUAqgSmkjhTAusd5ZJXtbpEkcVENceWhre3ZdkWxDfWHk5u7rWE8w6skhVoJQdJqUJwUhV19iJFJAbq5WA6Es",
  "key35": "GjwsgzPwNYRYpaMR94iMvLpYBGVYs9PjDuSWfpgsaVkjZzzkC9afK8kEhLyug8Vw2sBmvHZxcq5c9G7omVEZj3a",
  "key36": "4zFCxfqWb7br3bz4BR8aXtdw5WHKGrSgUekCVW9zbsfpxWiujMUK2MScHySUzmwQZz3ot4KU7bCXxLrUC9raLQpt",
  "key37": "2WzvaTmSxYozwDWKged4uim53nJzCoic8iHnGKj5KdzrfRwhvQR64Hvsb2KBpqfNiryeVZFhVoYavo5f89KppUG9",
  "key38": "3KDKgjyrGCWad9QZF4vsm9w1WmXL6CGjNUviDBAN6u6sod11yPN2Hz8ePKY7NSGyBoj2ZfiUWAqRdZ1AYW2rpJM5",
  "key39": "5dpCrzdnkXkiHB1uDyAiX9f7nGndzBgD76XwTchYgVUvb3q29ET2UPtFckEz5rCarjubvjTq1SahwDAm1CeEUf8m",
  "key40": "5E5b9Jq9W8Fs9CRx84tMHrkLg8kA5nXsD228NLENiXeWkLnazymYTjRCDxkxt2bcDdtJdgdnx7PJ9eeZQEGp3AD7",
  "key41": "3jHj9kE9zMi6YDgt1HDaMN591vTu7rLodNCyGQMBfuhfZF6gU6uksmHoV9beejmnZokdSXRRzKe3S4G1xRLsjsYr",
  "key42": "2GZp2mjfJnRDQJMhMjUSWvLvCk6unRiLDcTaZ1QoWcuAuE7jWkS3Eu4mCAQbCmS1Y7eCQynCNg8sxgkq4wfG1SHs",
  "key43": "2yMS42CKB4Hysj3dz693zjAsYKNZgmbA7HLZ6xkNBicu7P6DdoF75pMyPHxRY89K1511bcHzr3DoJVZrDPqpB9Yk",
  "key44": "3uaiooBT7iYKfGEhXVpVUhzdFy47B9HxZYxrBuktDP26fwxvKFjzPusNUf1zkYomhcYDU4CWqD7cQDpjtVoNLxR2"
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
