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
    "5fDZC29xVem6xehDDTMeus8fdGeGbPWfLHEMvnmrrze4mjGkzPbi9mrHTEwkvMTp2EnZ2Rak33isLhKkpJtPoBNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbTdvzMkvUbk5RRPnn68yjTxrFg3pCjsmVKBtpKRamZAMqKUktsSetBENW8e69K57Gjcy1WDjM5xQRWPWae12Y6",
  "key1": "24TWcZhwVoZnq4oDZuqsyu8GPGLXfsV8hs3BzzxS2GujTb2oyfYker5tKcKT86GngmpjxD4h5jeKJXaLYovTZYPj",
  "key2": "HKUkjVepvJpj9SsjGtFPTziVzpiYkzSfUeSEGyb5mQbk8h9xGrPYnwc3UsAEGBG8BEsCBCn4ughRoda5mjECGS3",
  "key3": "49t285BXmVo2f8eBYSThoBS3qfb7xWyar38ucrNbekQHJ8j7n7xJndZTtHRXovGvu9QpVBRDYfcro4HsZNGMgqgB",
  "key4": "2NvdfTz8tLErcr4cNtCo9Y5Ln2gHuVbMmPf6NwsRgPYxw76sG9gofH1Y5h7pZijE7qV3jMDdiQWQmsE4U1yhcGVg",
  "key5": "5HXHNuJgAeAHa3K5cymJHaAW7y1SwMws7aeJtr7nmxTTp9jdxwZwxE11KoHtWaUf4HmJPGdUvvMtxruSj6ExhpX8",
  "key6": "5787GnLXczSBasuNqYwqwxxPy7BfnjsHW1SjxeTf1m7GQnGNya3exnszRzdRZkTR29a3jNXFru3FnWcUhCyx6sGz",
  "key7": "2j2yLH7MhvaNVC3TKUap2BXDYT5jpgZueesCZarieB3HtMyJTWh5AaoVtG58RWCCp18xJzXjTJq3Nb7a7BNK3Uhi",
  "key8": "shVdC5MLKM953gC6kP5MzbKmPz943FtGqHQqqZx7qjh1DowhBzkpQvMVZ4QjbXVg7bvPotknBY1yiFUNPfNLP1T",
  "key9": "2QPpn5xoQPa4mXnoGRKBpjXPkLsvTrxWedF5WF7WZnZVSMZBogLxSdhwwJkXHqQygEUFx5NvboyGKPatJJWA4HNi",
  "key10": "5vM7HtkmEuaPnnwCP2gbt2eho2pYFPFSRoiNDgwZEBoJVZR4wipXfqLgsxEMqYSkuNfAjnnTZAdBJ7Zi8LBzsPZN",
  "key11": "2sAPp1vRdJQhsJL2ERMvHt3frgVLe6RBwrVh9oaj8WNFS1PjorAp8mkwRZBTmx2xCY16yRYJrv2ar3xs3sUFoTqs",
  "key12": "6eaag9mb72LwH4KYFnXU3WR2HF8MH25QK73ooQLchd9NGbZrgES97HQRaUTy3ZXxvRxTAzqHd8JkWJJnh4KqkhE",
  "key13": "3BXSVw949fV9ZR5rT3SDQkadbCyB5sqJKSLj4vFEYyR5x5e1uhyviYywEC7s4VtX9REUm9ndLeGQodVV6aW838zc",
  "key14": "4csU31H1fDax5g2YLX8kN8BPBTTFqPrS4FyPGjbuLzRygnKyFQFFocw1qe7G11wt5Z4GRZ9VKUnrsoQbGy8ZP8zF",
  "key15": "pxGxpTss5rfi9vhYvcymvySSWu6QkBPEXYc9cPcjskLVMRJWUJpuJYWEZVM25y3TcMj4CKbWstJUBray8xYLZ7e",
  "key16": "4jPE6jXLmjHeWYL5v5MzM2dkRvZvZRqfoQNvxHj1Au5GFCt7juusKYZdkPESWdezF11fo2QGJ5iQvibJMDZeQQCY",
  "key17": "5JudnDpvaLCU7mUhKGYxLunK9YkiG67jWzi8ZwMHKFT8RjrFhU8Uxu38AgmfEjxWKVxdKnCcYHAykkLnwpqtovBD",
  "key18": "54KFPNygNxK8MiYyZv2zJuL7n2thZoQCPWqj4FyJGcoWJEsmD5TWXmcBAm67j7uonce8mZGPy3jTrNFhRp3vEnz7",
  "key19": "59j5VWCs9uNqiUaqBWrTMNWUDT6q52adUsXv7KYvsrYRM956yr5f1pUidx3a1oqLw23TdoW3ZUUMBuRK2ozEtbFQ",
  "key20": "E82dd7JWz6i48sJrFpq46mmxDJe8gtK3ESdLKakmGgiiCeYFDpcJ5RNkLRrnPcVb8S3hTMrTpWZ6gB9MMQ9Vxs3",
  "key21": "3zbi4EzHjqbfGVuUkXnFsUaNegoejLf3jb6mNW8UyWt7GFK7yJGbCD8mSddeuN63WkgGACxZCcMZ2HrzmqctQ9eD",
  "key22": "43yKHpi7vXDvJtzqh4w6gK6TxiszxaCtcEDhwiMkHr2rmb343Pvm4fE9jGARgstwPY6FW1xk6zurVcWYpABbr4aT",
  "key23": "2LcwsYhPPYoRdh14pgvoAg41eLGvJFpiex5dNXYPEZfreqvK7UD4X4nBNtghsS2b5Hg9rfr39qrEZRzwRExpY4kw",
  "key24": "nQWvjXhNvYvxweozrgeLT2FznBud5KcfWALaEDnnh8T1kvbdTUM2eJz5DBMprZEUDWJt4wxSx54yzXTWD2nCwEx",
  "key25": "39jhqS6NMCrccsmxRpUKE35v6FSv3btsnLFEeWyFeBaRt2MD1y1g5ZEyytSo1EBUe6NWXk2fbbgUa8DwdEMbpHQb",
  "key26": "4cjr8tvwkrYfmZyo7EKU7jZ2GKxHDu4GQ8WJMWsJa8BopySRFQ4VE4BkCpYbfcRcj5oWXyEqua78RS3EE6WWjZKV",
  "key27": "5p3Zs6pnbgy71tpJFWpMBBvvjpZWeKRefGEXoiYf5e8NpxYiUJor6picq3eTx4EAF9srkucTxkLE16iuqPo6cZqg",
  "key28": "3pPvDWDWj8AxfMEZT13W6acY377DrjsF5NDw6655iorExGzvjYLoMbZE6ewg9yoP7dReaSDCRbkKZ513Aociyz7F",
  "key29": "4UcdArSEpwrZPcUSv1CzAxMTq1iJqve18yLvoXapMbCaAxfy2n85EBsWARdkXLWT9ieCnHsiM38c4rsJS1Jn8D8h",
  "key30": "5u1Y4NkrdxbMJ6TUif5JY2QPaCiMMVWzNMjzHp7rTw6nXRoqy7tunacZaA9ToecWdj8vAPn1ByriVpfxZF9JikJt",
  "key31": "29ntGLTBoSGWduUMNRqeVC84uBj6CxfGgAEmoFJEC8cnWvA4qLhTtv27T8TkP3Es36aZ38K5nk7ad7wgEhW6TjLU",
  "key32": "3P9Q3inky9sfZWdwmrC2cj56wsL6DbcbSd6RAkejFrUoVF9K6zm3Y6aGFdmyC7HPbzh4ok9vzpfW4h4ckFQgAwcZ",
  "key33": "4LJk8KrxawyL26JYPDQUeHXNqi6b7erYUMXJZTioEXLUnHjQAymMJAD2UvYfXnjFvFoL4Qyp93vB9iRrUYyY5fog"
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
