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
    "3e4fYwWoE2ZUceJ553sYuBf5ZXgWJKp8CcKqSB4SosG92pVxqqW4TPZFue5TpYRyp1v24mk5EFngPH1xaw5rv5b1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PKcBKiS3DjHw5WFpzaccq3pMzhCVD2uS4MhgaGYtjGFmtBof4vKqiuCBjA5Pd18mWZVCDSCMQWDum8bk7y5CKc",
  "key1": "2hEos3Qe6xxdMxNRCmLyLtzPHjdWCBPsmDorb5YNnjHnYEBUEpf84qwusPcxMPR7VDwnjd1SpYkK3cibK4BDaaZG",
  "key2": "5uRr1FpUJSsD1qhqPboxLKoQijsivvFDVTmgPu9ZtnjTRtcZtvwP4CPpCXbzs52EfBoveyFnWa128cUibqg544Mu",
  "key3": "2ADM4JPhSW7t8iWpzavAAMn6zSBw1zEPQHREVFkGTP1tStojjF17kU3LcB9CX3h39iprRHHVPYmCBADfuhxeQgtZ",
  "key4": "2sm9tx56unuTcT4cQ7KrjRtwb4HfjNyB228o7nuixuiUEUwGqpjzua8tLXgmRnzzbPos6SbQqAjZbt9HNB6osmoR",
  "key5": "58Fyup3PMUGCWaYcnqEmfyFuaW66sR6ZCch7eFS3DFbab6LqhL7p4CU17yim55x61hXYeeZ3xatQa8xQNEZomGnA",
  "key6": "AnHMcUKuNP2sSUm5kFf8JHE1wbKBFg2qhTcM1uhGYri9MWWyDDFRMVyGoA4cjnZutkXMzd6LDTt8L4AFozEgWbw",
  "key7": "3RS6GiNJ6rwQT2u8vA3VMTw6Q2kACKYw9hLv66BarbZfQ313XyBksXChVocFwssgu1XDy7bLn7T1PWTB2h6J1g6v",
  "key8": "2S4DKKF8QFg6qzuRfxUbynBoVPA21JiZP8VnW3rNX8VWjjwPkSP3Mo94qkXZBEC63SAmk8n1Hvq6w29DbujAYMhs",
  "key9": "63Mc8CpsWQEWUAUcEQshNe1QPjhD1zGv9fRbiC3BNA6ur2MKUvXzuqXkPngkysjZQUNTegG8qkuZru3jGKxMtUJh",
  "key10": "2mi9p79Qbm5Akkcd5iEBr2WKa19oBk33iZjCqQnVYoVtZXTXsRhWgnY317saKxEDYXXt5MbCWtgNK9fRGer3jDom",
  "key11": "JFmxkGrziDT3n52oJDCzkm7bDRYJtab1R9E9KVfUzoWu4BkfGs3sRn8bJubbdpSK8f4FgPaaHpCSLZiA57dgYfM",
  "key12": "2Vf77zqZDoSFSAdxkBXy8agKgeuP44ZeQu6yPEwaa9JusUjmzfxnp7A2ZCZDAH4qXABDbKeB7GybHwEgcPegHMGb",
  "key13": "5gz9N1ueuiAg4uY6FbvoxJq7YttGXmVxN6CE7nwWqc2Ddgty7269UaZnHkyjeSWZVUQEZe1fF8kb4VyRtSvFPURZ",
  "key14": "82fPQ8Ty4e5YxPceKf5HmwBYHhZyaxFteKebR3twnvyHu7s5poBMxw5QdAcyEq3asbjrunmQGeCFrnM6y64LnTN",
  "key15": "2ThKKFUtq7FtCFsYKv8R9DkDoff7SiKbduiNcbd6SwyriZBnJoDQPrGcubfHzU7JeiBGCTMxEhYEnob98wjZ4t7P",
  "key16": "59emtwy8YWDTZvfzkUddENoJsp8m7WPsVsU8hFM2UjePEwELYZbW4BgEF9K6dXr85QrSaKPbeSucEfWVV6y37va7",
  "key17": "3tPrBLoeM2jJhaRuSVL34e3Eu6EVAguktCRrbFQEWcSRYrZkSgpumFah8PBTqCnk8LEYwrd46Q1zctCMHqWBhKYL",
  "key18": "4FVWsyKCg5kySCZWMQ4KcJNDEtCCNgHXeWLaVVc5i82zB8hPvjzyNLv7rZgPLESCZ9GuELYzHs7SpLSKNuvTbM49",
  "key19": "3EjbXWGmyEkyjZaKphQtFMpBzJB8v7DTeKveuqLYuR48BofaxPzA1vr4DfypWvPhXHvAAYLkfXByx9C9WP1uKTju",
  "key20": "28HmLmqrWE2H22ap8FGLhSTX5PENRz55a6s4tiMmV3cBbbNagmi2AvTDjUjjkQvtsBeYbYb7o1Ce1mRrS3iLT6Pk",
  "key21": "3ZAoMUCDUWQ5oJyE6d3oWA7qPBDXXXQ2YH1pgjZep4oYU75914TvKhQQm7yTbp7jENWdJ5bLL5tCwpb2Jady4UHy",
  "key22": "2zycPy8Qd2fr56kGfgH3MoB5VaXaeKo6Y1PdbnxFsQBpq3WKDXAYMYKkisByqQGysrZQ24XMKH2uJNSi3eYNcKX6",
  "key23": "5V3gYnYRV65GxodWtjAUnsF81SBqTuPuLPcWytfDogFmYMdXrKYkT5Q4wA9MWaTuvpcihFmfSxnCExiCB6XxMWab",
  "key24": "34CryKCh4sNVHAk1nyidQR2nVVVveA8ZCVQeeduYH4bkLsYPDoLPV56ikwiYcvwQbGQEwyQJy4HdViMm6bcbnHK8",
  "key25": "39iVtF1dw7Qni2WzqAnP1kCywScSDLLW24fK9fZAScWkdSsuySKeGr3eUP16JA3GLr8Ko6711hV5hoQjPmV2MRoE",
  "key26": "5cWXrFDC7BB6cX8NgeaSB5B3Cgd15b9vE3ri5MgnvygM39K8BFZ38G5R9Jd6BjkWM4wNJNHqksCPZHH8JHFjpt6r",
  "key27": "56rTi9RvQgHryHdnLaF8QWiLvyVmxBzaDhgGKtMjqk5npxRZt7fKoo2L6QuaM8nE5m3w8tXqL2Xhw4bi2Y6hzgr8",
  "key28": "4NvrCcEQCUJtcLT3fMt3QxhtmuWPKQsVZC3fEwBs6LGAucG2DrtJawxxQj1Sy6AQzRye3qjxaCHXBMv8aD6N4FvV",
  "key29": "3mFowhSz6Migjwzv9pPk739QbjuGNtXDJDEshw2cKZH3QrE3JSd7gcWrVbocUTjT4Sf8xpu1AqT15eYGb1mbE4Pu",
  "key30": "3dy5si2pSyFkqPvbKKdXT34wyYMMrgutNF5VcR6LNFLmXEEGFbrqLgfr7p7kij4pwX1DqRAJ8wjaaNgnWMyY4EtE",
  "key31": "3HcJASuUJPbNrGLb42DK6w2e2zsfVigZTJUc6PS5ZHkVnvvj2hHBdRxnYgHpvjc6jKTMehBpVUb3XNXPpdv78Wjr",
  "key32": "32Tfb3iv3nWyQNqGhTiw6AHALxVry3RLQuNM7HGadDscxG3NNosyCfJCKmCrZ2mKxaNLJzhBYZAjywT6ncsSffdt",
  "key33": "wCtC3J7s76rqWt1ogEy6ztQmB1s8zMqqTpr4ZP7qe43hgqhWXsT99KwKoy3tHnmyUCadA9hVtddRrr6x54ybgWu",
  "key34": "4z5woGpvbKdqmZyumRVNdxr72ppfvxZ1CHBb7Zg3WeT39xEQBUyvQGNiGfBqkJgsk57GqnacyrsDa112DLfkhgam",
  "key35": "2hFcJJiXqgxSF9fW7iCcarNHSwaY4pu5NCuZQybJKS7mzA1YuyV2DZgDghNGUMLP3AvGHh2MSHZeY68ewiQLV6Nw",
  "key36": "56eWPhQZxxne4sNjYoPMBUkJcvmc1EXnXZFjzmi99G9HxhgXmgHw5cwmLaYbewyCTRrioDYm2wu6MW4JtabYXDXy",
  "key37": "5Ehcv7QpezYE9FezipsRNguaEthGHxiq5Qnvue8WTXkrfvj59hjsLdh3T1aumTb1Es3wEeXUfsioQyQcSvD2FzPf",
  "key38": "3pjCcX9X45WovgAavuKyvfyShr2NiBmQxnJBGtWo4AUxaazS5tXJYmrFSQqaKh5UguJje1zbdw24SdjeaLw8KPhj",
  "key39": "2kR5AScw7qKyNaLaJ7pPZAyGe45ei4AAPXn8SryMqEA98MS7EvPShVaxXaPz7adWD7iRV2z5GJBXZC12AAVwyaSa",
  "key40": "3BwcswzcVTc3DXCHMg86NiP2J6eZXUX7zSHPCZar2NuJzfRhngJrWiJzo6swwHKWcxHpAcdBKzHw7AhWmdrJ4g13",
  "key41": "5EZid1Avcjzmnx6uxNGCEUpzZWqBRrbD1ZHU2dFmg9ukpeKVdRBVgkfcoujykHhzJu6GuqKAqixRLGJBmvhR7bKh",
  "key42": "2jnn1cL4X9kxJMcSWvkB6b23JqCsA4LU2zXvmaKiLKyJT9ejGNdfdDuRaCDfUd5DHLh7vFqWVoiBjwEpkikLQ1RT",
  "key43": "3SdYim54gwjwPQDtbsnvX8zPHwjW7y8W6gFthpFps6j4tt8ZaBBVwpy6AqE8VRkoCbyELm3KKoLymuy6PPHji6XC",
  "key44": "36ft8PcEQsoZgXBgL7gyCebvynXQJuDrnmF6ytdiruYZjNuyhBQiVrfH6iJfGgZPFxo9PHDWdk66UAvgYeNfjefo",
  "key45": "2YkG3xnqLcFm6VFFSWkdkLYMGVtvtUU7rwFh1saeZMHS6Mmn2kvRR1idMfDQuEwvXTJFBWY3d1FCuaaMaxsPUkrk",
  "key46": "5DtC8GRPT9wFxj8WW8VcPNfhM9gEjnk6KCFTLCfCfJP5k9qtwrRE5LF2ByitV22wTMusEjUy1HLwhhyY6Xo8BXJy",
  "key47": "2h18rf4q9dcq347TXHK7evHwvyph9S8X7DZoB992Xz7jue5UFqE9aBAgpFVTStaqLS7oks1MpVZ8RxNLcoCWZzXd",
  "key48": "wdxKc6FMhU1FQHAgbcuGvAgtSVPDQSDnawgyHT4aau5z2eziFZ6huM4uo91qaXKb7gBbU7jsdX9SW4X8A4sBAM7"
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
