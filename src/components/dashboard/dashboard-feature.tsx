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
    "3tMSRRkgP15J5kNrf1g3DQVD5BzDxVzh3R88Ur6GoaBGjhCaRy2GpDds7V3ML64iNzPTf4FxVjtWjCXdsVeMjYW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oRdCTgnoaj8hgYkiaJLiqSE4S3QxUnjSAjCv55djCMSsJq3QsDU4KtLoLrRMfpprLeb8ifdFaUDqSyb1p7b43u",
  "key1": "gGHkZ1RUCzEiAyirp19uuC5qfz5rayyuDvRHucDAYgEat13QdUEKjw7ZH4T7hsJKjpPCQLn8ndJoLNUUrVKawX7",
  "key2": "3YFbbVHKTknTghwQt7fHKKZD2bGtFHL1GTp2rdjUdBE1BhvwRbNTpH4FN95uyR6mZZdaPJZdZnCtM2NA6VPxZsdL",
  "key3": "2gLVLxs3emGVKuMhEQoGCCCL5cwhew8bf6g8yXeotekUw52vSEb9DxfUe4jBZQ1KXps5kPXrjjwDYYgZ7YeEnsPY",
  "key4": "2wU9YM9Asa6SSxVzquXAiAXWbZGbdjD2w4qh9ugHiNhEmMzU1m8DsVKHU6Af6XiGqYsFX4PMZLJgxB1hHjSs8JeW",
  "key5": "4df2eNi6L2M25PZQ6iPJiuezcUkdoEGdEfvxMNQCTX7BA66U7EYyZ8PKRa1xjRthbNLQhdvJQXXA1Zbj6MKWzvQA",
  "key6": "3sXLegWALDLRnJ8an3FHRGDErKPpNhNxqq62JA8fjAavt5YWdfGC98CrwamdHwH7sx38fSGtsRRFvY1BmZRHeXL6",
  "key7": "2VWuzT2LWu952hB3uT7TjN8uMjJRA3DABDBVuwvWnaD2Witx1rfeH7h4Z4PodgsGGRpN2v3JyDRKBchM2gf7eY6n",
  "key8": "vLyqWxZRNVj1yrePrsz2a81oY82zZRVWkTx6WLyLAx7Rd3gBmqBYF6VvYb6j8nMaDe3oLeXyXoD7G4c9q3app4y",
  "key9": "2kEE9hgKMPDGKFMsN4tx1pgPp1DANXpdd7My21jwaUi6xkLRVE9CZrS9B5PpJ92Z3QzMw9iXVMxBmMSuMsFCQLrk",
  "key10": "EoZyey4BGdBMBE11zphQ42zYe27FdFKvkhgj6yTFNxW87ZfqfMDiqmv3Sa4Za2F9DzLppWMujzjUwWwYaP5gahj",
  "key11": "37V7nhSNd7xDadcuwjZvS3jZ1tJhCQuwj5x45rCctB2QkQeafm6rWGGKmtCbHX1cu6RJooFtkV4P8yNsJDBfGRna",
  "key12": "4Bk3UCSQncQHDN8Qvw99SXxxYbBP72R47zsntrbhva6nXUVCedhyDZwQNc6MzeX8m72qqFVpCqi86DjvvtNjH22g",
  "key13": "4QDHrPfdC8ekJnMHJAVXVcWQqEM2YPtB3xteXi2n9Hjkd6EiN8MC2DcmsHN2CcRkWdmQn4oS3Q4LEQ6LZSh4LQHm",
  "key14": "3b6XzUrmSvmHf2MBS7U22YHwYjDnXifrSiKV5amTf8j4twAYL1NscZv8j8EpqwNiGnqSDnvPESEkfmbdENnGe2es",
  "key15": "eNWsha71A6b5fzdjguhHoF7wMqVnW7FP5hmK1dFkSYPnsQb2dyZXddXafvhnKPbCi3UiVJzprGk9gh6mehtUtQQ",
  "key16": "eCknHrQizern5LHk7SXkZfuQeh6UoiX1odzYp2Jt3tK4CK8HSqUTMeRdK54V4df13tqrxFx7ajvAbcrxcwHodLA",
  "key17": "45zs6YkbuLQuCKpYcti1cauVxGVtJHMj1zCQ98c5JJU3qT5GBUQipRNQH6BjnLESvijBbFA88J7Quv4aUdW2oFDW",
  "key18": "4RtESviQSbZAc3K4StbYi8ecQeHs3eybSbKwNu83Ah4ugUS9qpfQSoVHLX5zRxcPs9YLSWACmeHYWNExDB6SdtVw",
  "key19": "33Q82DZ7c6oRZoYXa2QfbCMty4TMygorBNb6MPjxj9kGBMmYS6x6SS6udxg6oDpc2Hv77xBJG3QHMu87xWYBCMf1",
  "key20": "5VdQG18UyHQagVRavQgKgaa2VAC5coV92yPf4kR1c2gPDfVfJk3qhjv85QHj14kmfGoatyLCVaHcR2JfrESfLe8N",
  "key21": "584K3KrU43KVYS4n94x27BkTqcXJkYCZgPs2WqgnyMcdQm1B95GEaV7CxYxhNU2RP5gibo7VerhW7Cs3qxEzUFC1",
  "key22": "5Bw4PKQgTdKX4aWauZuU8NY15echrmxH5sLsX3XVS5vwGSmweYp2BGTNx6SYtxbsxcryjLjNkYoNFCWf6sGj4KTy",
  "key23": "W6nV8mnbXTReVhCnyEdPPnhbAPeGWbJqhM5X85dD5B7d6LnsKggmsY5fQzcKYtanVAs8u428vDUmCtr7K92JN7k",
  "key24": "iXxJ6EBvD8dEDvXmZq561iigH3qG9EBj3w6APWJe1zuF85DtYuf1JSYWiSvgT298SteZhQBtiyzXXvB2xR2uRGA",
  "key25": "3uUkULZEy6BbAnSLTYCHRMiSKzGVjmbXS5QQ4AjUdQxFsgyZPqNFSNYPVQMHBVgvNAeU1DFteZqJXrkLKowv1q6U",
  "key26": "5Y3aNs3PUbFcwiaeJ4ETVG6gSYiBxZ7TP6rrtsRj8Z8WNohNkPX12DdEuCN6C3BjbzxMEetzpWHK7Hkw979zMvRw",
  "key27": "43cRDgpBCWyt1AvY9gPPNQKyHjfJNK13ufoHVuGfN5wLkQnXhoErEVWUmTVU9hut9GDcgrL348p3TwCwtPfFuAy9",
  "key28": "3hP7zykKhjn3gttwSfZMKFRdUydohqPNAHNYe9aSK14imgRZgL6vpLWbonEiKnfn6UJ8C3fYqdjaNRVj6xAYp8DX",
  "key29": "4LDtPLoiXkP74cL7qrbSdmFyQnQM3TSVSuimiLLfDsHqRMmXrEaWGavqDcMNxa3hiGS5CfDciEtnrXnx7S19J69q",
  "key30": "35TcRYsDZzn3BV9vDP7XDYvMeZKmDt9RszsAZCmkKRHyDytbnywtKr4QmXFHgUSwBJnBQqc8VqBc39kPvqWHtLfk",
  "key31": "Yzap6qNnNVXBrb9GGTsaWfLxc1JXc3VTrcmd6e15hDeepHp7BSLREBTwRvKhAi1tbRVUXUFnwAtnMvMAguFLCwa",
  "key32": "2Jr4FJWmuMNL2McrBrHwRmWjhSFTu4kaRvmu7ozfp39UJR6ihqhcGZwhCUybbZLVV9ajC5u59Gs5pBqcduMvNJUX",
  "key33": "34tuXYvDt3x3u5vj5mzFYgBUYzgXqn4b4UCbE6KVvRfUMxxHrBP2uzvKNGj3AMaxksU6sz9vDYnxkKFfNRJmjUT6",
  "key34": "5TkoekHxEG3QY73wxWDCpLRDtoBzkUEut75AAatgfoLwyqyLCS3jTKHwpTTNoCkQj8MqWdGysWepFpFRNzbUC32q",
  "key35": "5ZEaL4FMqudJHe5au6dton2GdCxohVV4d8qCXvJtXMqxNUw9wvNbXUxei7xUKWhQbG8xnHRFkQznLSnZSSv45Hr3",
  "key36": "3EELzKhJhJY7vfTv3VES6yB7C4aZjMQRwsnMLBhM8tekR3XadmvcBgAtJmieUzx5V3zfrLbyx8kX7AmTTGUPCNJw",
  "key37": "2zeBFwqa9aJviRqLRCfhJaM9LXxjSjUeAt7YGXXGLHM67iETgiTdMe1zaJJWtm64FWxBJRnRq5mokUC5mTStfKFR",
  "key38": "48pESvDpVTzxawDFRKxWU66j3x7Cf1WKLcWQXEyrzWNwhPUrmZE2YKeL68uUe7VqvmkQnkiS8eoQbokoum1JbYWi",
  "key39": "1JXLZzevyg7XcoDLi7t2pnpJ8WdnGM7654AAqYzKbQFPXL4hSTdnYiE1DqbHwRZA1P9aH58bNMETM2pyJwutqEL",
  "key40": "AQPxitfpLNaVU6GPjHkn8nBme4ajoVA2yXAC665Y6y6fU2cmSesdo6PUP42HPrcs22TfjeKYNxyRZf11myeQHrH",
  "key41": "AjGgGDH5KxqcVPa4ye7Rk4M5ERqLbXzDT4WE3tGjDjFn5ctGW4zCD5ZCdaNstop7jdyRJ5GN2aawZVX14dUDCYj",
  "key42": "4s4j3G6wr4YaTwLZTPCpMeZJvQYH1mG7Bp4bkgoYutvmf1msx4B3pPjB5o18KWjHmXDvszZwr4kt6Ky9RvJ9Z1qr",
  "key43": "4t5FyV28jnrseJfTNjAjpk1xos9WRp2giXPtubNrxTeP7WsTcvJFWjA5ThLov2moFA6ZbB1QMRg7ZA8mY7hwNkJv",
  "key44": "3cphgu65a2z8TiGn7vMjvsdYuizQmg5RaKWTvv88PhLVDc3vpaApw1FajqFTJqaEJXg5rf9Sbzt72R5ct8DdQtHn",
  "key45": "4vXMs2djwTKNL31iZuAouoJM5DprbErYBfBrLRbZ4RVTPnvjZS5TEFTDRRENrpxG25ksTx7fdfyy2nQ91rh8w4jP",
  "key46": "211maBEnbMHrVdMzubUTwyb2yxUy1HPdQiNmryB2uWPxt8BZp6tWkjXkWrz5EiH67LJCSENHKWqVkmTKSNa2oD36",
  "key47": "5Z5AQXJnuT5tDVkRYpHkv3JFqrTCSDXipKNnGN71PrknXf11n21FJ3vLwbk5EfuL9GDvog9xPrqjHf6mVxZSqTUm",
  "key48": "5H6id6iRmJKEYbE2Wdp88UBGpAa45neURFDzxS8pdGju9FntwgkpnAFnfBB3QjB2tstkYkUAF8XhV74pCjqwp23E"
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
