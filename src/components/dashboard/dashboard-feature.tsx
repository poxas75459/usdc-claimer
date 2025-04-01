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
    "3eaSs8Uq1uybHvx8Lj6nugYa6A7f8YybTdYFT5Di4xGGZok3JSSdUr2MMoxos6gsdBhn5AnPZ6TLLaEd6tt4LXdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUWoQifQzFDHsBmSBFB6gDkVWjQvP3xrUr3ZWyVRGj6U3E6ysdiyJMT54KroptNg9tGCoiYLrKKQmpmdbHgrzf3",
  "key1": "5qjBnn9QREoLX1jcYMWz6xsXcoyH8qqrCvHbGjuojzMfpYnSBct8CpTwxfzyeHEZR8aCfK7QkDwPMEo8555f8DLu",
  "key2": "57HdmErLY5ZwdLjE7eVp3hyKCVJbtYCtzd38gz6EPkNX4B1bvFEnEUtKbfQLMm2Zw7QqFvhJ4LYQbw6amXrciXkQ",
  "key3": "vLaKeifUGj5kxBF3tZGBu9B1QCuV5So7nXTmkFfbBMannuotfzMoitRHjDdPyc5DtJqzWm2MMCZqs5cRdijjpFT",
  "key4": "YnrwKVFC3ZhNNTXFYRmJBk1PKyB2bEjus82AxGBq29GJKkKPwPJ5B79TZkmJ3Bb83fxyApLrXs5tU2hTPLUBf6N",
  "key5": "2AHes6R7U8rP2WoY5JvEhKNsVASaSMFJyStwBLpF935NKG1KmAAqKvkLNd7cutzaAkuoj8xALmh8HnL57n2MoLQw",
  "key6": "5NdrzEP5dipPKcFFXS6HXrbqeAAukdQ5gcigchuHiYW5UrEDm2rULAzvXMJkhcgD94RsagHKowurpab4tacrKDui",
  "key7": "WGj6z8M6ehAyP7V1bR5UGjVxXE6feHkKQ7WUX84ovU1aEQ5sW8YBvUmBmwATDNNt2aFcFZHJnbNGwWfSaQF6Ra7",
  "key8": "2k263mfFRNvGRsy5BCwxi7xCM3aonRQmcaXtSHAPbfigP1a1XFv5kNzxperEFj74WRmF11YQrwwAfYCFhb9DX9ou",
  "key9": "ioTGAycKqou9eyTvk3zG12RTwNwSJE7rCUV6KfnEmVTY9Fgpo3C6nhi8mD7Xmt9MTYWugVPsQKk5qTZAzovn87Z",
  "key10": "3hR9qq7ouBcuH98SBBniCT8gtubYjFFu2kibjAMKx2ZoWNd2cSFNieax4iJvbQFy9yE4VE1kfKtgxTzKY8WfbtkB",
  "key11": "62PKS3JmwYP1NhkFgh8dYA4ouwcbwwmpepnpJdn2m9sFjihupE1fEuQYurZWeBZpu1mxsZRpWdCPLCeVF9sbEnD8",
  "key12": "5cMnY3hZVYJ4xgpvHCcpP3t6fqagAueS98YNgimG9NULKg3ZfSgqJWAdxf4eU4M1dGKJc7o7nKpRfZSkmSqky6v",
  "key13": "56eXBRfiCV87gDf5STjRCTnoKLiTEhJpN6mdoJJ7EipzSdZwvTrY9wDzbDXZQmyVAqCaTEXwJD8t3GXGPpm4aRrd",
  "key14": "5HBst6LWnFss6TMwLi8zUsAhK9vvBnkG4VFgWa9v3uUp27ksuryci8YDqxp8kBTNNs7oFaRnW8XdBFQs7GkKNSGD",
  "key15": "5QLPBhWrUBhvw44TUQABFwg12NZrVb2be4JirMEetDBbjmcA1pz2TfD89wmYFoMoKwaXqPvmg3Nbr93u3x9VJrfq",
  "key16": "4DgeXM5GeHmvic9UhuWDrfZ9CpJdWQsq8KtSvyhDk9XUhzbhE93sq4yUSt8Ycn9vhhtTn34YrXuFmxnFyN5fLMPt",
  "key17": "3SoMJPNpDnZY68QjDXgg42NdPCNaeETo5Bdecp83kFSbqWwud15t7pQUsRQMa4nEWBYRKhk7TthW7iCapNWwbnrg",
  "key18": "4zaNdMRLkzgPFugWt9ZuupPamdwYdpvzacWqYt9VfwtT2guF1uB5p6UuABFfrcG1V1k9uQz9CFwb9JMiYpJ5sV54",
  "key19": "gNUSgSeeemh7kKMbA2sS52FY2FyWoCnxVNhJDZ6zCmhQCa53g72PVpFx2PLzLM37YzVeMD2euZSbXVPup1e2YGy",
  "key20": "3PJappgduHsoXfUZewjuUMapEyTzro2yTgFkWrAGFzD3aDZv7KWzJRrfCN5Rri3PuigBdD7YYZu2QfpjpvLAQPWk",
  "key21": "592sTTupYx3TeKYGF53xJfe8EspP5YL8y9ntHCxbYwDLq9jzp2cMzb1sZo2xMSjPMAPnA4ZWGH9xqA2Yv5zuw1Jv",
  "key22": "5ka3oRjsExJMYhpLbDjktsfvi1vz3rxM7zfjg6v8gwF5NnGv2wMMkCQzANPV7W31yAqMxs4DX4qf1sGQKWJKzYVs",
  "key23": "vsonDqzM13KXuyfC15C5MdhuEUWPuG4YtM9uAXmWyLfeAncNvc3EdEEWqDtif9dpeTdyZ3vMJbrAaQk9tTrL1mP",
  "key24": "2zWAvyZXPhoGFzXxthyB6iYcPcNKGz5BRVHQuS67skEWC2RksdPeACNwDb7jpvAhURNSwzafJa3L6FEFgQLFYc79"
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
