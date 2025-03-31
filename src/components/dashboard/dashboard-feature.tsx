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
    "67cf6yMgeDjZ2RjAsFg6Px2zVg2VQq5Siujgp7pfD27ur1GjHKkUyJWPbCjaJ7sMMXd3jWwyfvKxUpiDvhPkssVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3QHm4GFjS2qCnBCE4BVvh1GdsK29Jtd4SiT8NoSqWaC1ipJeQwgk3ZRCyVtujwH65CBdYCLJ4CVwXo9wiVZpLo",
  "key1": "3hv36X3KrEnrxsHrhYfzh332iESZm9FH99nzoHukTCBeuQGiR9w9WhZnYk6S7yPq6txnMMuDebPweqVQZXgRDHnx",
  "key2": "5BkuV2c3ZiDAnGURaSkJqVkR61WGW8fddkxaoE9q4TKs4kfry9bWgEAm4JsgugKJhV28xhNfh4ABiUmyt1mJPhi4",
  "key3": "29WLsA4zhGVRcorMm4auRCFRD7TWHugTGj2kbkTuxkmfL5cxyx1rVJYThXfqE8GVwSNZwnmZ4vQfo1aA62LvpszH",
  "key4": "RRhaC7uxYGFihNKbVDqiv8P3mHDYfBA6ak8X5W8n9CB1RcwgBg4xvNjpihfrtdCqpxsC13UGAYHUT5hD4o6dGRj",
  "key5": "4R7ruwkZPwY3Hjc4zFesSGgwPcYH5rDBs4WjLcUzx4mtnvXEF9KK7no44GWTSXtXCFsHAh7GBugVz6C6h339UbtJ",
  "key6": "2T5bjwy4MU3NacGHMWdgfZPqw58ipimBwM4xSe74vWcPfsvrc3G3vnZaD9tBJd5WYPPZZ2XQAU5qA3gkouYn3c1p",
  "key7": "KK7zRq6sMknqTeTPyDury3Haxz2owknWYjqsX5TjTSxMaFdJLZgbv2jLGADZznY4ZERikrXAAkACbPhG7rreKse",
  "key8": "5xp9Wag8wzFwvU5onENgHKdDfiG3rgZgPuQUg9r46Pg5E2vBH5BaS9WY64eBp1anEENPe2zoH5Nj8fj5PfbNdjtQ",
  "key9": "4aRKb4D7QdqbVqHTL87w6XQtdE94ZRAY4rj4ytx6PjGB1xEs6vFj5U7Q1LFJTrgmvkRPv1bVdLcXAbqkfH6GxH5b",
  "key10": "35R87YcyfeiopjD5rmCbUmPHwg71u6nC1zFoCEw1dCVUe7gsaaHPyzjGaU2G5jTJFC532PSaenSofChVBv6isseT",
  "key11": "2gjn9J8qs1nVSknWqqK7A9nDA5YQM9Bkmqrfafe9GnpqG4A735HVNbDsbk8fUjXwPoifkpfJDu8eCiVcPDKfvjnU",
  "key12": "8nKPZPpUS4W69fmiJsPEMUY34JEzav13b26asUF4q3VDhDGKHtxgWSvXmLxaTf8LjCZ7Pd4bLBjPY7daTqzNJvv",
  "key13": "4sW3RewLtF4GA16aKNir9EFQjuUxgYeM5EVhs66SuzPHeaDiY7Jq7gLSks8FmM4UV5TQFJeyCjDPwAx7wSsrmoZs",
  "key14": "4gg4ANxxGZuJ5B5FEMG9LKDygDBhHrjWEqroWgqDZ4EYLQvcUdqbTAcZN5noBYAdRF4tWW9ZFwSvm7Mq9dHrqPTx",
  "key15": "5SGCWBcou19BVN6Haiz1YvcqT6i22v8TqSW8k74NaNqeWMcvtoJ6FnL1FDRayt5sfjtJ5RPkUovhdfwXZpiqvT8e",
  "key16": "kfckPc3K6Z1qdWkc1NBGVFMkZucjYAbbMXQHC9LKKqzfX82VFjomcmjb6AujY9ifUW7ysVvbpA5gyUoG9VT7MoQ",
  "key17": "dABUajVXDzTjPH8ntdSJRRNH9sPwiPnGrYkdnyFQ4WAsCJJFaW8U3BTn3yaf6kZ9UNELLcbKFPGfA671j8bmNkw",
  "key18": "5SR4G9Av6332rq4dWqMx6JJ8YEj89ThCqGZ29SELKvjAXhHXWyDHzspdQfb8eKakDQZQZaRwonLh1wsjS79RTXpd",
  "key19": "499UvDt97KysNWVT7ooz6SvV3FvcwvsTg6c3NXEbswJ6nUMAQ7BtExCiBqmU5BH3tq6QBJz7qYrYBpzyiP5MGth3",
  "key20": "iLo3F99ycFMCkuL7g2T3ciCDcWVqe83ZThz15eaktNinrpQcphXvqjoF32XMXYsNB3CRufBNi8vuqGnZtUQZsap",
  "key21": "nBdhDcvAEz74rvoE2fSWmpLC67aL7fP6DdxJAmcHru8eakiayDcxRPmtZ7DRyj1STVzbcBAp9gAZTVFcm2PxwAK",
  "key22": "2X1rKXYWPjkJeU2Y5uEbFbCURtWHaBhJRmkWY9cg3ZkSyh2AD2v5Rjx5HvcqAiJv1GdsdnRS8dW7UTPUkQvtgT7y",
  "key23": "4DzHfkzwWwdsTWS6UWWQYidHkT5CRyiK3jKZh4sF1kcd9J5oDkabWiGrAa5datEpzpDPA9pbEV2cKRVj3EvagTju",
  "key24": "kp4uEsVUZVGXuoQdxUjHcje2Bgk2ZmmR3cc2N3dfosYzQ5ESHx92vZ6DWLB1STE6HZPK5AWnNSnWdp77Jzzm62T",
  "key25": "24Vj1wTRJMa6YmSVWr9LThVTXtJVMCsGqBshXR6N8kAfvC5n5rQgWnz29SiGjPcQgJ1Go9HURydnPLVbSRuGfRAJ",
  "key26": "5GN9s5cuv5h713wuTz69CXibZaURgpnKLKMX9JJFsHdFq1kQzUQAeRvXNzZLyrQogiP2aoGBFHgWvAH3xv6UGxTi",
  "key27": "4VP5wvPuCrCXEqepok3tViPZtFp4duVhTyAwFDCYpxGgwUoXr6iVPqzc21Zvy7MK7EswtUftJjK9m8qhh6sTyYEa",
  "key28": "4fA2vCfbWpKeZnrRzjth9YAcpfy8bxihbS2fGBVQUJ3uzUFqsrMyzryPPfcNuCw2gEfDFa1Ldwpf1yV8rDgV55Di",
  "key29": "enzYJ7nhzMk24FBcZhmfJZDS5KDrpJXDLQSdhRAtXfoTp3VQPLKrddJ8mLi2owEdfXbfvkXrU4GM2EYZCN4H91B",
  "key30": "sk7RJGaBEPn15AGbg37B2C2sHi1bYRVxme5N5x7w1bqh4QMwcHWc8zfoaxGnpKAJcCtTqtJSEQGj86aq2mB6EST",
  "key31": "2X9aiujZ4YCsHFfA956QxGM551WQ7uD7xy6pzAftQDaLpm9RxyHZBHi2RC9MEW5whXpDX4LnSrMEjKSFDihkxwaZ",
  "key32": "XT2WErrwhTksUmFZjBuaa9goLj9mnZpQxZoewd1T2Txv1EN2XzYL5F6cHDVYHy6gZAyiZZCwDQRvVDDLf8jdoKt",
  "key33": "2PkFRcFenGfZ5bGSEjXstYNYhSP4a7KAPN72n3kMZ3AXekLZqhE5hxzKYynEDTcqTGii9kheUr9rdftag5u9Hx7U"
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
