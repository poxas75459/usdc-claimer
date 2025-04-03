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
    "3WBr3h1JQbJj8u3NU8f4oFpnjqpMbuBYHW7asjKX6uuXntAwNVGa1cJnYAkjqqKS9wMKy6L14Cyvy1XYeuHcjKWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbJsDnYeYQgwyoGs2zXFn9NhAW2Ak6h7krqH1FWBmCZHFS86AMWUYhPyhWvCASDkvKcyhxcHHk4W8hvKRAjVjga",
  "key1": "2mpDEn2hisbfBMEe6XrqfYjW3Gbvkg4KuwwmyUtX49iGeCcdiES97Vge5tHQCT7eYsHJa7DyMr5uGuPUc3JMD581",
  "key2": "3ogkde5u3Lw9MhmmUvgKYpbSuQx6XUqszyn1fbzpf5TsWgQHvSJgrccGtd4GEb9ntGWRqS5fHcznr1koHiPjK5bx",
  "key3": "5s6o6x6BFSuDA2GGaoJDPote5wiYKR2XHDdcVWbXzCSV6gvTZBNEV6YBGzvtk7CWUQUHS7F9DkqVTEtdFjynhuXc",
  "key4": "zMD31sj3yHU7zKJ5XhmyRNNCUXdkxJUG45nnUHN4u9uycvwzB5ACb4zYnKX7xjYYD859kwYRRya2n5rEFp9NmT6",
  "key5": "2aag3P1AprJBm6xvoWBPk1acNSKXWaqfGAcAfbysKEC69vGA2y8qMaUaRjXrQA6tWFG6z4EJuyxaUvwvAcNz8XwF",
  "key6": "65isYRAMXoarU32WXizPSvjCjWkcVXDnqJKQPUGJPwCAm2qSUKZSxTDJpnMnpWuNQkppLoywdH7GjstQ1uZRpuLh",
  "key7": "58yXG6yRumDUwsEKxriqUF1tEVpmvxEv92TqcMjUCVvbLYVfSNyte4wCAeeT8p89CSuYLVxsBeZqkVf9ZX1gDo7U",
  "key8": "njzc6uA7RDZcnRJzJabpLPiNf7RcijCJ5d75bU7xwGQsmX8aWMJ7Dh9miCtuKYNS4yX4cGzwk5jtwmLbE3TZGeP",
  "key9": "5ssn3WbkaYu4VL723LBTGygx7dhy1fXtviSWK5rpCp5YtXSh1SrRC7kR6jKU7mdiVi6AvrTBwXhENnUr17MJkjM9",
  "key10": "38fNHE7rQAbXAxJ34m7WLik4mtHuG9TZV6nArUwsPgAFLXiYWyT6ZEdYRJiUTqX6AAUSgQDbC9mzPhsjNdFCyPVS",
  "key11": "3zeZeguFYW4Rci9VME63CBQHG2LTQEA1K3pus9jpqgufJBKVjih75mmHZWAXVc7cfV9mhojWm5WrQ2ubxa7xm9ZJ",
  "key12": "ZNLYMahziN2zUQtV6zvmZaXiUEVLa4VgSuZvyrgMHY4AyErsYgmPzcyXRMtbQoHjvZ1BMNEwMsKjf4TNLLwe2bz",
  "key13": "3rpozWZBAVoCJSni9qP9G9hB1EkTcNUw4ZKt7ABLkuQiCwY5Gk9FHK7TwoWMKBUxSUNxmV5BUtEWwumkRTVEkzsg",
  "key14": "5yvJmP8THzXaTh78C4VwB9PfAnbpqvMEjRT6RbuPxKwRvwGL1xJABtQZek7xxg6kvp6XfmhoN42bWuyqF2PutuZA",
  "key15": "3uwdQaBfgWbTt3K2iNTj7t6bTqC6WXfDUAc3jnZ5N5XFU4PAs9MYfUM8FD8WwpxTfx38u8oUk98tFpU6c1rbXvjd",
  "key16": "3mVJKEyM9UKuzb8zoNewbJTt5qTaioXtWzdHxsRQuT1hDcx7sYbzZzKxBZ1w62se1NBcj84ShXjd5bKYrxf46kxw",
  "key17": "4LQTrxosQVSr6Qjdfv6PJqtWUFNpha6sfCYD4FJswkrVrFXa9EcHn6zpGrRbcrUyGi7g5ckX6HdJM9KUh4wYu3ov",
  "key18": "vkfFhba8Czr4hsf14TdHfrffj1bSWt3ryYXXbo6RFaaepx2zU2ABRGmZEH2W1U48ZERyKuPBKnq4U62qgeT6mL2",
  "key19": "677wXbn5yUP2yDZzwv2jamFdVYcWtpdwazj5mxtmZSPe8Qu8Lecf5huha6KrG7KLUAoj6qLUcTdKGNcZj53igfo5",
  "key20": "4VUGEchqfvBYd3kQ5smeHpgmHrdxC23UWpeGzwUHceZfXJq2LdcpbSnoQ2w7XBWRxReyq87kxY3TBGCP48szivXV",
  "key21": "2p9D3JDMkkRFwkVUxuzcRwsBdu3UCmQ73rzJVWkeqofHSvB41DGGwXyiYouXwCL4f22khS6GNJ32ea8HomuuXokU",
  "key22": "2H9i9bqGPuQ8eAxZFF9dhkfdLif9bXBJiumwphRtKWp66HkaSxpAwjC5kxAUWsYKXQCx3ycgYkTu3wygGW1yiEtW",
  "key23": "TDAsckqR8c98eJsCuYSFGHh7XZqY1eR95MenucQBF2Qjr6MqFTdZoRxD8fYim3oEMEm1qgR54VbAkXMmPho3Z6m",
  "key24": "EEV4UaYtqSoQuZ9vbM8rjQamDWUD4tLa1rcSRNPYAGjvEniqf8YYdvYBQmfzxVycPUtTEKd9dM8nTkFXuTq45E5",
  "key25": "4pVRmtvSSwUWuzzwAhTPqfdhN9zqVPPLNwBpwET3gXF7iYcWmUC9TsoGSUkYhCNLB8Q7aPasaiG4qxkejY67izyo",
  "key26": "3ZbbmQBXizEmkiNmmN1w9FLZ9SEn7gt9STjnL6JDKcKzb1fnsV4Y39CcbdBDDCCc9w22se665TGkt1pYWLS9iYo2",
  "key27": "3Xdq5SqsjhJBpMptkXjZRxQ1wtTVXoAGY31ir5h5vTnUz8bnMwkALAwRTfLqWkN5d8KmMAa9JkUGKW23rGmjJB2K",
  "key28": "4pUYtM5uNtJv2uGXcnNKtLLh9MHFTuaAnoXh16qgVeHZkBzkPh6wUGzzyn77vg4s2ehtKnYxtP9Puh6yYNYuCPLX",
  "key29": "41Dw3YywMXBVufdJLFCzsxDu9BdB6gXyFbp97pHtr4pNDE6g2WeSw9iMW6cgoAXzW6xj48w43iauwTvQvcRVK3N1",
  "key30": "5BksL2TSRmQo5DXxfcKTpQtgm6dEQfYRraTq3z4bR5k5mHRvzc6h8VpvGVcQDRRNcLK35bpqZN6NSQ4zFpUbxLf2",
  "key31": "2dpZwJtkChmQ97nPkTfhVAWjuoQt9eurQLrHoTLnkq2DYnritcyjrcouyyGdJV8B9Bns6qKb3UhD34AotG2cXgec",
  "key32": "5Mpo1iJjrrzdWm3crdvNe8BPSqu93tNovFvTtZ3SndBLgDSzZHZPvLfiNfDmZXrJGLMCPULneVbTB61gLv98LPAQ",
  "key33": "2cswa3kLzDR7TnXg1DhiFoLht4PtUfb34nR8PxfQ97bDLx5MANQJuVZmp7Gzcm8rP1RJaLim6JWBHevXVXcjGrXN",
  "key34": "4v6wbM1QmdtQxcRBwH5tPxwg9fQJDE5xCpKTXuGq8PvaD4xHX9AnSjGyb7qajDKJDPwxGiFqz9kYnputZLtuu4U3",
  "key35": "2ZX4Fs2VyTtN6tzyC19wwEvBQrLyamL6MtfSp6EWCG2gKk62yL4LS8sH9cFXH3Aty2CKPnavWRHWqR4v2sxCNMYg",
  "key36": "28iGnE5pPpHm9FgqVwBwL3QhqtnEc3tQgpm1tgU5gnBAB6Mxp55nDgpTiFJ5o1B4kZEregd98p9QdQ1RitT6XCcE",
  "key37": "ESJqMtgbpspincczUMLFLGx9PuMtGG7HoeyC9GPL1Pxgg84wSWjPVUkLk5xdX5NwHjqPNhr2u1Kw49gerrStszy",
  "key38": "5nYccDjDT16kLMvQD1GJSXHrDTdQ9LtpK1YdMMFZburkXhkYmk1CNpVVpcBpsJEF8YJN7SUx4ud7BBV3h6WroCQ",
  "key39": "3KmxRR39DQ4cVSBqgbhKmLoembFaxfRqmuMBDoMf7qCkutMmPUkBJKVhbrYHRrhQnmiFw5815qdomY6tVpFWNnx3",
  "key40": "5gtZPktLbaFfADdNBRTQ56514D3vjXLUgesrx49m5MGr5UJ6GdUEpVA6deuw3X9bdBnoRgNLhDTSjkjjS5KznJX8",
  "key41": "3VJYMsr44HuK7DxnGT4pHUZEZuk82iUVRFWe2por8Ktcc3XJ1kemj8b9aLaEcDzjPZ3kKtyQdmmXgYGkkbFCEGzJ",
  "key42": "3WbC4fPzAWpEPqR8QatK5My5Enj35JjGWiZd67s5oXjAqcaLfrAesyRQiXveiFEQfz2RNmcJATqGVkL3B929pX2R",
  "key43": "365THcTnzx5At3phr4hHMeend8kmcqcgbd5M4V5j32s9guz289rUW8cdkgPAMhiVbvDxkeGZEzDkJkL8jKLpyJR4",
  "key44": "4DP7s8Rn27Z8Fh7QBzqs2UrFjYvg46ieNJpvyxRjVwxMMXtx8kE4UDPhgqywDFKYuCUwfNupJWQJEhgxHBJSE64v",
  "key45": "2Hht426ECK4Viw3sDvsUU8k7YAfS9sZG4UtVU5fKDjJRSsK4tkXi2v6gAd8D7SVHyw3nHfztxev1CzwsUbbx1RGS",
  "key46": "2eS39HMizEpdcVHSoPEAUD6h4D9oKPfVv8VSYM7AJbCtzREf9mpqWii6QxTi44X9hDYj64ejANsxB8zTU2NGcsxR",
  "key47": "48WZe9of45Z71Ag16GGH3ecoFv6dtA837FZnqEeNR52sezG4fC485t1bL9whzzA3vao9y2ZCZL7gkKKpZjLrCMy1",
  "key48": "5BW3xkBG4xXAJ5W2EgoVq2mXrD19wLarRmYtwWGS2hpHNx6awQvEu59wKicBrTwn3ZDqsAjtFYaHe5Q5GTLK96yi",
  "key49": "16tsNFhGVe5yAbcN9XwKtXevgHt725UM3ZJNJSH5r5ERUSpE9ZtzwAJ4rBXqiudk3vHF51AAwDyjevtFGwRjugL"
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
