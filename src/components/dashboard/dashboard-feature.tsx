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
    "3vtfiy4rTzD8KWvCtGAKMq5ietPzCVCJQJT6Gz6AH7uLyhKTjVpb5pDMZESutnv8SQe1Cz8MmaCJAVAvgHgVbEkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tYRG79BcjHhNTuk1NEiavSTNxThRJdJjTN4cpEZSr89w8vk9VnV644Wi4bxpDfd6R1NGovdETJnKYeAonddgoK",
  "key1": "3TYbtGevcfKemikeqobGPcRdCcJDT1mzjbSx3AmoWEpkXgB9W85GXBYA8Qf7DXGm1GTXuRuYb21DRYRVmqC8zY3d",
  "key2": "5BxbFBoYNX3nA3aM69o3K47z9Z5yqfeJ4E9DTCHViqJgR7iuqhTKTCWfjvwZPDY3k26dWnMjsiUEjCPMyZtH4c7b",
  "key3": "58gnDGbFECHEmjK3XtCiy1JLuJFWJ18UGbifRMWj7X2jSqu4b1gCEFVF5AKZZ5manaE5jubgTmwSgQ6RXkqjU4ub",
  "key4": "2PpVJuq3Z4Jbt5cnFZ5FoaFyvaQvJxb2hq7idQYXYWWt7WzTebynAsfbmaV8U6cdEWxyYvQWY5ez3KWDnxNUpPtC",
  "key5": "DHQ6PKjvRW4Yu2coDBruBJMAQR1nCuwQig9hW4jyDJrcLghVkeRXV41ue9ocKNitWxZYX247bJuWzcxHyDRWRwe",
  "key6": "2b21XUgnPvYiCEfceqXX8i2VmZPMRSuBx8ZaZjGUUo6AjAN7dyqrJhEr21D2xQffweXVQ5jtzsyZoNaQrYB9Y7bk",
  "key7": "574rPGRBstoMaWa2sQ1qSTV6iKKS2kuqWU5LtYFEsMiSagvKJHK7xNDCwZcZ5LRofj2xA9D8PKsS7w8Lab4BKUgZ",
  "key8": "JKLpCF7z2waG5xZvwcLGSnWScabfnXi3BTDTE1K1Y6uxoQ9XLnrZkHWh6Gkj3vvdGbc19WbXxo7Lz9i1L74qB1b",
  "key9": "sp4QxV6tM5GVU3jXSd5wW6A42opWkGstZhci7qmtqoyT55drt7cyo6RRKqKWeSUjAe8FiqvDECqVyBGDw5cYuhN",
  "key10": "3k99wBfYJBb6guMeARHFbPRfoZ781LCk5Q7U4J1pEpVoC4wQ2nZZuyWt3iuDdCJj4tDHVxb6T6rPY3XiuYiJkJJj",
  "key11": "27A2fBSNu7tpkLMAayVrPMVVXT5V2cNyMzf29hHjZTNtLsrvAKo5wSJZTVtSXZpRWLtCGbg4w7b81ZSW73daLxr3",
  "key12": "4rUcFaA54knazY2fp1eeNR8zCZF3g2g6iSY6pyvNTQEiQReZG1xWsg5iioxkva4PLwoTBaBo45gmv2cN4WqH1MUt",
  "key13": "63As2EpQ6RDb9rZ7CsdzPKJ8SRcQCJhKLLRr2UWEiBB7jL6r5QMp43grY5af1qQWLQfNUsshx4U9n4qXWyPSPJyY",
  "key14": "3ZhKEam4wG3GGiJ42fT1GMrHg7EjnC9NZMC1FyjxBnfpKV4fpWRYxiWqGGZhCnqnrZ3nUhRXz11aG7LT4Wonmfdn",
  "key15": "n8vHr1y5jDvFaRkwRESzjvKZ7YuvLT2wXjXMx3ZgJSFCCKWw5QzZt4mvUjnABJqe8BZyFcmwgnhZu11wMP7CAk9",
  "key16": "4UhML56YpiDqBDtyk1WsvJWUCujUW4JmFRktFuYAVNSBa6n9ons39CATnK2kxekiv4tv9SGqiWnVsFqrjqU4MptC",
  "key17": "3ipX9U8RcMCJBgpr2Ygt1okryxUcBF7GrcLLXXngJazw6vjcCZsz1yzC4hna8VZYQMvTckQTgXmpkrXGLGP8zLYe",
  "key18": "3MQgZK6HX5SnkuATg5WHJbFx47oSzzuR4jqWj3vudjY8Ts5WdNuRXAgLVovmXzebofmFJdQhfgYp5muaNJP43Kdu",
  "key19": "32VHdBvjC6byNUsrp5CgC6a9emS62fQQbUGmb3XEEEShPQdG5WXdJF2fbW9NtAy3ZkgsznrctvXYnFGAWzme5hZz",
  "key20": "5iN8DjB3WPpEJmCGgqyFBjzWSSpXxA8wVaQcEzgGUJnGzLBJ2Tpo7qobJLEv8x5CaSUkvLWQAbqS1e2KvzQerwkN",
  "key21": "5VgSxtSta5gJG9VjD1uBY4gPBd3QN8aG3SskByG8cFu3bLJYYyZZhizmfWf1CMXwKnuFVrUNi9afYZDQ6raqa1GF",
  "key22": "5YNxfEEgftA99MM6LzuQ6rXXwJocVTGnENWGLM4HLqV51w9r9R7goRkYpVaAdp5EmVanqfASB5HBkajKteAZvSmD",
  "key23": "21PEkPjSApFpdxcEcqQ4zfQtsC9zWycVxqu94if1QrWvK6e3PsQtG7dY8mQHV9LSSYbceJ85KymAMJ4vs3dvG7s1",
  "key24": "CSLFCyD1DNCyp5sQhB3NEZXV2MfzVxej84dHRVvideudzrzgAK9gD2aMBiXDNXcvwNGHg74cKZDK7yhZTudHuJC",
  "key25": "MGZMRiWSmbHo3BkBW4fkYkdTw5KZxrYSFWXaz4jKSuuvi5EsdgFQF1k9GUBkpKkDuc9X4sG9MhG3gNswrxA9gna",
  "key26": "JfPPv1grymvJqJHGCtpjEno6Hqx2uhiBKTvktKmiHnviyibmKeCV4m2fHozvBkXjv7N2SzPqkG7HXk87Wo2t6zk",
  "key27": "3mCjVAzMK2nU6FbN48iav4nmw5PGxburWH2nySzFax6FGK7bMniGRMSpH7K3WaKrdnB4ME2iEdQ99uxATzrrCdHX",
  "key28": "4nYnr5bsxw5XfDqWiMzkZzCc9Ek6WEsLrCJetBJfAvtGzJcUgcR6M5C2v13mf69QUKBJtSTHSx2CBHaYYcdaT6Vf",
  "key29": "cHqqPiVqoysLutMGoe6vLpHu8b9tGDSZZyR9VRb4V4oSCi9trxRwAxhJp8sx1rWB6wSDNP9XBdtFVgV2oQ37xGD",
  "key30": "Uo2HHmgFFPTKQa1hgLMXshuyRFWt5oeVnJ25c2xQnJJ4c4hdayjrzNGUmyg2i3wLkavpwgtw4ChiCWupgwEnDjf",
  "key31": "3eNPLQ4GzGjEsR6UTk7DFsYcB19sf9co7JtJAhzEvXyAZeZm5EE1ZwgdK6qgqYfgzgww8ckeirXh7V26n1vgg8BV",
  "key32": "4m1jzHLB3NCDfuYazZZ7bFarbdjye7JpU8reVAgavvdSCEhEk2N2b5gSWX2rcCN8kwcNWPpEvWHz7cAMCE1hqnqX",
  "key33": "QB1k5zg4L13AVzhSXTwtYb5dCB9jAdHgba5yH53NBU5gwvRpMhogwUF1griE5svECDvpseehSixeF2oPk6VPEVy",
  "key34": "5RVZCTMc7K5ZatX2xHjgVeACxcVJ2egzZUt2khryRMn6uZqJn4J4FpEfBdtXUK7s6PvD5458UYz9aLwTTweFiwGR",
  "key35": "2BW2My97eKaYvfjZfPGXNXfnnet4XbUHk6MoLrCAeE82aT8MhSDZo5PBd5BebkoSB9uq8cJKkisvR8KgWjnURjXd",
  "key36": "2nAJdDjikfTXXMr39rsMXPu58qGBYACuwWTg84XKzdXVrTNJ1APXzpdbLi718w9YPYrVu41e7h4hFLGNrk4ePkBC",
  "key37": "4H3BdDBEJbYbszSkfSjXu4DT7dpK3dtWiyotXYccuALUd42fqLHfTyQBRwomJSZER4ZYwXHrboxH3K1ZX14xjKVe",
  "key38": "4U8kWwe4g9PqUAMZXSEwDLzJHNTFc9s4VQRKbzgtLMt8iPYNfr1dpSEcZszmb2APmkVthTWQxUXGAXmbeP4WCJpj"
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
