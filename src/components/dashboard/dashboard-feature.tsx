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
    "2un8PiTHfyBCqr7QsQ11gFEv8fAnFTsZBHAimQ347Mj325rwdzdqS8TnsPPoAVxC794pi65mLn5H8QRbfMPANv7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKLKBbcuWsouzUwHEKBwRwoMvZFHSxyupnNqaFov3gNZT5SDwCgFQcRSKPmg21512tqHyH7SAJZMeGZCrCkCeaV",
  "key1": "611jvnoVRRLKSyUb2XY8U7AL8WjXqZmcfyxtPpgE3PEMNK85g1CD98mFAJPjjqmtyWc9kmW4HbKR3ueiU6jAHfx8",
  "key2": "1ZoYsLtNzqbMqAEC3eGPvxpBbm2x2kMgpG8u2yVqTKFk5T2KUkyPZF75CR7LhRXqZtPKoWYP1PFWnkYe9MkVivN",
  "key3": "2tDRjZDkuzhBCs4hHNhcaocR9YfM6FXYy6y72PstUiBw7wMBQspL598qLwAQrnubWBtn48sSNaz549jwY4bHcLrp",
  "key4": "2pksxNDoudchnAGRo4ttb1DjPi9DaaqGfjCJJTyxxxDvuM2oyWHGwJuwwixHG2w3LRx8MS7KSRAsbYtAQVfqc91f",
  "key5": "498PQXRWH9uMNT1jMhav7wyKAnCYTXW36qiS58dWw3rccbF7233WDsybqeEywzpTdm9w53L9sYQnFwrxdX1TfCwM",
  "key6": "36gpcDTk1BT1mkguMzPQ3A7c8n24Nig4quzGaX4aHzdMsKRXoS7YBPPxiDYu6n3JZw8dxnKrB6QwYsveVh3JWdye",
  "key7": "5n5so5t4X2rzLUmHmv9W9MKAUmw2ZxDVp4DEYwWC1aAwgXwPCrYDksfviUKWgimAkcNh1Pjyy7dZA7gTHPF1aYhv",
  "key8": "51cFDQPyfXvYm4q2sdNnNem5xDj9wf6aqf8Ag5BtiEJrzrbZPxQp1vwrcshD2rL4dfMj7PqUrjgLMJZTH7XKj8QT",
  "key9": "22H5WVTgfmr7L3A1u8H2wJjpgwyMopQYhuQ3GjCwheizr97C17yj1obhWSqahaeB12bTBMbKWQbY38Pj29veL94n",
  "key10": "2o6ATKjyZF4DgCDFGdHbFhciukSoM9Y5WWEoe3ixe7F1YrBBMX7qPDDqkCfy9Ai43vH9uTukiT8KfVP7KcqutQC1",
  "key11": "2Bubz5F7Rttq1RkHuW61K8DXbvEYX9nkPMLGkdaswYSjwVxdpNYjBhzRpMLzepYPtfx81EvQ6f8rmg5f8KPttk79",
  "key12": "4MV1xFzEnHMUyoqn8MoQManvh75zxdLXW6zN39sVVDRPNo5ajYCtnQZmmhKK9Y47LAXSbFnLhBeUZbN9wgWhgzbq",
  "key13": "4oW8cb26R7sATcBBeAJ3qQ5aD6EgaNCDs74tHBhE97KoEs4WnDYUeaqCGhNhExawa97u6GEKntPXchHx7MeyrMGX",
  "key14": "SNkbtsansNv4UkhAKdhrq2bBGt3a2NfwaaK7d7CAuwmRuvBzmrKY9PbFmZXxu1YQsSC11j2WpTPPm4ZXE4nouX4",
  "key15": "5YcksxzgN9hoQPWd73u11AsAEwmUQv9XCas2fi4wc71Y2VfbtiRcpdt7zB2FbuXmeyU2CJFxvb75rjauYv3zz2nT",
  "key16": "1p1RT9roXUKxYbkU3Mp4RkZ4WRVkK8WKxRvkbL2j2nWVCteUpXqwbnyjfCrkoUBAkNpqDv92Xqkbd3MkaK6hZjT",
  "key17": "4nRbXVm28QDBz83xx7Y97o4RpMrpzJuvcHKP3buP1BL3uTUpMxhdTmVnR1fLGtnF5rU5GeHjopu79DgeEpFbLhTR",
  "key18": "2LAiJCJewtB1DejJM9YUni4xRpGW9R5HDYhwGQeXx95wjVG6ofFkqGy5kb2tQeumSqQeGU7ifsX9tQ25hebyKFKz",
  "key19": "4LprcV5uCEYRTb9eDPEXjNe8cgGFxpCXvPsmXSrP1xZwdSrspdkzMQoPXhupxGPEDFBtyNL15RebZNqfEKGSJPWW",
  "key20": "2dBW5kZy7g3no4dXG8S8BwMa1dMSn1ZqAMWviBTUcPG2761AGeXkYiyMq3wuag9aEMYBXZAFUvd9XC6irsXgAbNU",
  "key21": "E9QJ8nJ9krX5y6SAnAXPDsNDYaCj6jrsdcXsmABdpSncqWnMMVDJiDSrbpJQWgtm1JwfLr2Aq6qRo5SoWgHsKWL",
  "key22": "5PziWwJQwWgdmJocyfrz76HKadqxXbqd1vbsRQxnB4B6SfkVnDtinB3cSWkwVM5FHiReVC9x3En5M3fVYMdN6uaj",
  "key23": "3wXG4MdkPkmLEUKvpxgQovTF7rJfZCe5BFMp7iubTrCCmNkMcJ62NewzFJdNA9tFxvKf5PDn2iaCjefwgjWsADX3",
  "key24": "49tGQXhKozuVj7WyVMaDZrYxPtsJhDPnhu8wQmWg6qUR6Spv4NRKnapXN6MA2LRiencDMd3mwFwFEag8y5tBMMV5",
  "key25": "2Bfx5U4kJtPKq8JwU5uiquwzLUcoca1YmLUHA8HLWNGQBukzDo4WFXQZRKdRaPaYLtMbcE3aNsYVHJdJzfZ59fr8",
  "key26": "3LaZDdvuEckE8qsrcagN8ALxa5BvnfWcZw3U5MB2a5GN3c6Ys9VpU8842aXe74m5kcoc9hMKGtukCWFzLEgQCGGD",
  "key27": "4JHBquVuNnvpGG4UQ5zG3W5y7AFNn1hwk7JD3KxfbbG5AnPc1Eium8c6YpYPqTjBnGP7z4aXZdW4JEJT6LnfAbfF",
  "key28": "5JKwQ2BCx6RuBSGSy7qsNQZoQ7zub8sVTGfXV5w5dVi9Bc79usVAKk28tzL5PNpaezCgC91qVwHw33wzhTG2AUzP",
  "key29": "3xGn6wgU1XcWkDhVdx7A7DyCn1MEwkiKAkvDceds4FY4kF2g4rBxiEse6qqwWbCWzjzSKC3fyUa4PkDjT3SoBAPQ",
  "key30": "4u3NF9ZRZjPJDHuZ4CReMTNsRdyDBaU1bmbFz8nCxtMMBh9hJ8ADd23F53hvUbgb6ZvLfPFWruf4QUsyKtwd8QZP",
  "key31": "27bHb1YytoDbEeViqpjo8MmkWUgFrgQd2KDRYjom8111KibgbWUGVC9L1xPd3ihQxju116pzr2FsWXqeWyioMSYN",
  "key32": "3kjWV84bTzKdmap61jBRB6XGpzrCHCA2GrrDDPLC2eYgwMBKCwVhj9nsGCyUYLsUHb3Ak4Soxy44hc3SZnjJ9xBf",
  "key33": "kHEspkyKqRqU1hoCyZVr77HiHsUijEYCfs7hmDuDQS9Qf8GZTqeGG31HzitU4eu2xuDz6S7pbYEhvAu33venjz1",
  "key34": "5KXVUjugZzYG8rie1bMfSxuDkeCJBbyq2S6PZ4A33CDPt9mJysrDcj9RqjSvvSRDe4gF8fSGQHrfRmBjPty6Di9u",
  "key35": "5y1NMJGyyVxktgETrwNrNRBDJ1ia7fBaA7vyUBme8LwgCUD5cBUJA3rjGw3bxNSqXdaXK3PoxB1zhi3mzUjyyY2S",
  "key36": "3sqoMqEC7Cggnvm6TH56qAuXeR1pRNGVAA8Lx7CNQCpXsVY6fFkGfNayQb2JUkJ9ZvyhTCVmhkRZLDEWpDYWmrz",
  "key37": "2utwDdpKecY8BJS8D3wgEiZFyFcZm7L8hByehJWYdPAy5eSbHzHSLNuqowTR7Wqj1y7Yv2puiNWqT9bHnojsJsc6",
  "key38": "mhJRRsKW5WK8rZu2uzcKyWcTXibWcHqS6jKM2eHDpjCdQtjQ2m5TxbDYpvSyA9o9FzXkJss7aA7rtkdeAnMJPMf",
  "key39": "2MRvahPYCyKUJFmHeP9V4S4vEvveUWjVK8RQZPZ9VFpPQrBH6zNg2VKvn8SJ2ru1tyY435tM1Z8x84Xz8NGwvD6P",
  "key40": "5TP5LFSU9ged2SBinvmxQsRzoCFbyRWGtT1PQPJPtToyYkftb3joYHEt1efYGFdbQagEoSwKxtmeCLhW2JhYU1dm",
  "key41": "5QF8C9WK86fcoognq6aSmja9HNbda613cwGLhvLkst2m5xqzs8biyL8Lje4tw3semG6qekuj2VvH7PZpUuesHGEm",
  "key42": "2mH1Q5FxV21B9D59bPSd9AmncULwvm1hM8fCCYSozA3YdrmhBBawZWXuGeMxDuPUKWtiHcPgheQcyNUzmHfKSzFp"
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
