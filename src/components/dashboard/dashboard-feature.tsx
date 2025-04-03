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
    "2Rhi7wvWwKAnABRU9Jz6ZzvVKx3Lquqx9X4AjE2D9VtXRR5FtWGzorGRgY7sQ9TkMzgQmCy41UkKfSSjTQ8Jk35u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGKE5gWN5HL9WLwoPRQ99fLTnhYVjFEL6sC29UB6LZgCRTbUaAUmd9GGn3n5zh9yH52fgd2sDWPLvTXUzSKuZQq",
  "key1": "5R5WdaGjgofmYw4xHDr9SY5MsFFNkvig6zm5qXBgWZnBHyoksLaQwwPnvZcwYDJFW718sMgQXCAietvZamNzzend",
  "key2": "5Fs6T3Gu5Hrvr8FNYBhEnWCKzmmrN11EXB1xQRco1bs2ohi1mbkqVFje53cjrDFK3h2QJzUEYPDP6pw6gav8PXoH",
  "key3": "5AyocJ8ZYLR2PkY6yzWmir5ZZJFej3k1CpvF2EjcrFZkQ8Dbf7ZmPgMmmPnoyBbrpWzB4WUbsWeoVtRDfRCktY1C",
  "key4": "4DMHBbabmHDi5PkmXKBLqkpK7Z5EahXaLG3yKvCZF4umy2GZaAiFmNNcz2DC95Ddr82K1dYXpTdQyRDw2KkQiJrE",
  "key5": "4H43r5e633SEx3W46oYDWwX6oSGx4eeUmZoVSidz9H2XSwLogke2VtpD4SDRUV3pKYHnCGCoai5e4hgpbgjL1CBB",
  "key6": "2b2SZuuNUCVrk3xk62wjsiWsE5eBYgxeSNhxg1tocGbMryUvF3hHRpf7csVZ33GhyQuMqHaTVxLUm7Tkwuk1AGoz",
  "key7": "3SWwLccvumWELXG29Qp5tDkyQXfaejtssCwGEA3uwtj8MkThf9uqVagfPFKPxKyAosPpRAjUadXqZHrk3CrevCEh",
  "key8": "2vPaYCy66FKyWXWrz1nM97PJLjHMfmdCinqVVbq38MyY3WzVsqNjGMCxYmuphfk6cEz2hf3dLuk3rQZbbKkPijUk",
  "key9": "yj1jRVgqeRJbPgJQer5MQD2GfGdHMT8wecD88sTHAjeVFz4sLezsqhbjGbg1wKfXWHGth8hJ3BeZ4o6VLyJAu9h",
  "key10": "2P89GVN1ktf8EFfF2GuZhYnJxnaEspLcs3YPBQ2S7Sh9nvGaZYbMbftr2tUreyCzSwzvVDgm6rzia11HMKUQpQt8",
  "key11": "Wa1QSmKUVhwvzwwAHn5HmT5CBsE6H1DWC1w3CMYBZF8Eb6fWLZwVCPtpQA1Z4kUsHHea832aQJ2URxPcZ2v33tx",
  "key12": "3qcVCUdyBhax62e9bvHnhTpFXGNVgRSEfcRtC1ybzcom3NUPn8GNtJhFMbKEoyG3gfvhhyP5bbG6wsjSXCrrVbA7",
  "key13": "3ag6KNRhFzdAPAiMHznW4JEZjFVomLXMGYrtGWih5W6zG3xVWmx1T8mLZySsScMXNYkCA5N3RamiNtotk6NB1jr",
  "key14": "5KQTL9CdUpMg4gfYeeWgEoS4Cb63r1anSVoQ49NLfYvUkRNM1jMuifiZoZz7R6spgELveAFTBn785HHknMNEhEfM",
  "key15": "vDRNvjtxBXoWwcpbuMpUe1WBCN5h4dH3PWvzn5FJ2LrKGBP9RCLY9coFiGYHj3f33uDjrBbvZrmznf7VnXGeXrE",
  "key16": "67Xv1YjgUXs7vZseVAsjhcxHyESpY5R9EEa7B3H4rcNF1x22UC7QFSvUi9W9TK7tSJ28RGvxphxWW6FuSz9SVXx9",
  "key17": "2pbzDQBpE9YhrywSYH569xBDoNZfBq46JkRa6rktrMrY5rJJKfdyzQ9prAKiw11yhpGeum39jPe1QvsFsVbXVrat",
  "key18": "k4aAquvCiXEwdDKqTyGMxc1m5tcL7TpKAm2JKuKue5eviVzj2ahGY8cnCnDyULXmEZjSuoB5ScArHqxYrUNM72K",
  "key19": "2mxNmXKYNcz7VYvC1drbY3n1ynPYwRj9mnVaLSQdp7ca2oGmJmXQXhBb2iih72jsHWKHUpvE71nExa4s4GnCz8UB",
  "key20": "5jvdNKKn8h7ZQHSAPe5E3TPm2wWG9yzD2Gbceg28x38CchNZgs83thErESmRWrHGrYb61qxr8thFJYAU3D3C8BYs",
  "key21": "ty2aWt1sZngAxJyk9m3zPx7GCi8J4wZfY1WWTk1WR3TZdpBem1YjSGJjBNvfX5voRxLXAgHqkR7uqcfrNPcWwjc",
  "key22": "63LWDGRFFZQMNuh2RWkbpCqSBoNksofMDssP27RmAKnWvdZxMk4CGv3C67NRoucg9rcKYf6NjswP1m2kfn4SEmDn",
  "key23": "8ZHMANFKn2fpkJqf5AgYS1ERjLnXJnjNwt2tpm3iv9jvLsdwV8ooNqVxQTWA6UWar9R6qBWL1px4g84ARMBa4qH",
  "key24": "fwBKi12o6DsTUp84XzBu8hTY18x7VFaqoJhx8JnUSywX1WxbTjyhq8piHsMC25TV2x2FkLFPee5eyosfUoH8R3r",
  "key25": "4F6ovDgYwgJrgcC16U55Dj4VFEiB9hKAns3inM15VKyu2pdKh6ySwyTcykY9QMnda9X2pftHjbNU4WwcmGwiuLDX",
  "key26": "3cpnz5J6Rc3br4JapdmYjidhWwvmEM7UGDXVQE5XN5jAGSKBeDj6BoXHf4aa8weZ3ibhE5YCjSBXBx21Gf5ERjde",
  "key27": "5AZJAU9W5QR55LAesoA2w2GSu3UuhBGaeGyrq2Qakf6MV13TyBRofNHdoQ95AU4uaDhBo8QX5ptd5KHSqx1vUmfU",
  "key28": "3ZuZLqFBQEJfPegyqaPowdnAdEcxT1Gd6N1JQSuDWyYRd8s4xELVFAXNqaczYAn3DGk2mHgUnKUnDKV8cPRGbQHs",
  "key29": "CijVjKbUQSK9EMiPnwTZrDPq9YFNbjbGRkov1HorNGtNYMo2aGiwd8BU8eYwwvGQbPAh7LfyJpAtMnntPkWjHus",
  "key30": "tfuFhKGU9792X97meaHKf9AunpxUenpCvM4JNptGuUNUe8ELkmKTRsUwTZN272kwGs12tfRXgmKqm1T6Wp2v5fY",
  "key31": "5vQgpFpwBCjxdpnSRcd9mcfxeo81od1WzyMRHJ38W17FTVxzbxsFZ6NVwniAi7L4eWoBrp2CXE8BnN81GhRUyGL5",
  "key32": "3YmdF5pNg9eC4jxp56YT1F4vmL4GbQF9Y3BMvJRGdRHGPQR3JihLWYkfRXpupnD7ypH9sdoZr7qcV7hEdmLXPKQ9",
  "key33": "128LRgJHdvz39ghtpiL5XKcupDwVxnvNwpmChvGjbhEaL9J2QRtvJU4vsAxPUTd37rarAmY2qYFqsJAWhEE4NCRP",
  "key34": "4u8ojpiSFMNDQA55JRikEBWR7p2Q3iQtL178FdqGvqVWTCMFpmhTEBJH8gRAyLXsr8SfMdnQYfvzkwh27yS3iXhv",
  "key35": "ECpjLZ9F74rJ68DU1Xn5mhrb1761jzd8p5Y55sSRFqH1MUeJv21ft5VszpzNi6jZCfzF2oYbREuTKLWnZxHZfMr",
  "key36": "3QeGzBRwiR51gBhHdEhTcWH2VvY2X84v4adDsuyeaxvbH6X5yBhfuLpfegS12jhKdP1Yxurrw2W1riCnVtNJFLjK",
  "key37": "3QE5CwQNRsepreZ3jQe7eb2JS54TGKH4oaoMQ21PDrJZPZjvSsam1aVqmH28JukPbEYqGukx9yuLo9vZyP3tymgQ",
  "key38": "4GggAnuUaZrwcHuEfJ5LzVK3enfDM2AoWCRxWR1k3YAZB4QLCB5TZ2X9jiQYGWWvSQnV8yPYpksJ2zmKx9UFxuUZ",
  "key39": "tDgohYguTMd8XC5YbjDcHk2sZ8ewGss5wMed5RqRZ8QXjMBxquVBNSMYyV6sp3ZpotkvjkK5m3V8zdfvvUDBC2U",
  "key40": "2PXbScXDq5vh6eSPePitRekzzwQba2CQaqJGvuUzurYRqzbLB9ijQ7t9yqJ1QA2J1ETAKBPoLsmkWfDzyGaPMUtG",
  "key41": "5f68Kh3nnKepCiqGs2tTADewFjeopwSZ5aTvXFHFBpqK1vRUGbqUSCPZgytaHQQXtxvbwJrmRrdWeGsXtihF7kFK"
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
