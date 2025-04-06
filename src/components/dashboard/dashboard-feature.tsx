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
    "5uVGgT4n9qE5rJX2wnGqYfZSzCtKQwCmXoLCJMXtezmZ7wppKsVBvGPBa2sScLzPYSWL81ksU7Xz71qHf7Y7Cdop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ErCZdPFSxAnrgTUD1AQXbvRAPPGD3dxTe4yRNQ11oNGWUs9ygQx991wBguJj9HEZPihv5KjcoPPXoynVLN1hUQ",
  "key1": "3e4E7NEg297UtAK9SgfkbjeAiTaY5yTGJQMmLAFWbR7jKxvTyijW6bqs1ss5znNUjmaU2kquZBeSsVxN3hRQzRrF",
  "key2": "CvtFwH6Xbh7FB2kbx5c12wWZYXLbXJRyzdK9CQZ5zCc53XijkUNCmUMdjqvptDTuqB5duiyZDeCnXL2VP7wNHEC",
  "key3": "GEoFFTL51bdVRE94mCmQLPH9c5W4HnDNZom4nuppKCULkLptZXT4PqiKpwnXSwj9qReBDfTV9PfNzWYXJttAAnV",
  "key4": "4mrJne7BjpEtdayAqpEFEx94AfvsApmCXa3s44Nfhate7cTxAEby1sW3MZht1KbsGk7KmrurUyJM91A2ExmpR57U",
  "key5": "25o6VJ7uXQ9AcrwHTuHAdZFd7TJ7gq4QysGprKWtTHmJgBjtRm3TtT1aUfXM2mShYDLtiEWyjYizGqzrd43UsRdk",
  "key6": "3oHiRZfyN5MVPTdQLkLB8CTUjFZNgPfBccxzwhYxyKU3uZHg7qRFSvq86fWkdXe3dL6Hzs5uskWvLXY1d4XirnDM",
  "key7": "2mrhNCcEcbMPEsuuLjawzA23f7W6NwkFBVRHarVqLbxEYTJYvBdnBPAgbrKwq2LvN27AahRrKeVtzyBXSd65y5YJ",
  "key8": "DnkXbYTSoAihyBY3ygyZfRXSH4gKJLNDuecZQAdZskMGJNkUR5uWVFK1egvFRatFcwjKA8eoLpK1DEQtj222dKj",
  "key9": "3nj9XswTM7VtKZJw8VCtmqVEoER6h2LYkkMCCWCF1mhGbjbMuY4bgVKa8L3d8T598Tce5Q8CYkM9yYEu54UCtwpB",
  "key10": "5fPdUC3cN8oQEZyfRCKgmHMvdzxXBRJYYBQiVgqeMa672hKuXEdv6Fxx5GS1Xh3SNZpLs1pBDzA8Qiwfv8ukx7vU",
  "key11": "319e8srGYPiE7RHQzjCxcVMo7EEV1v9dVpNU2WnuGDtNbbrF7BMsxouypF3x8g7DnVrKVj7fnEoobwTBNA2kigQM",
  "key12": "3r5nF2WSBWzDFUB7VvnKVJFc7vV67DQe4G9xBzkgNZxhv5rCHzrGoe24AKbkX3iR7TqK45vVs5sZSySDtkEKsFzu",
  "key13": "59bjZxriXkci6Z9adXSS2J2JUTj7KMWvDaQwpDHrQe7ELknYr6LBHpjP2cFr1o4AZq4tUTzh2MUGyVsurWWBbTyJ",
  "key14": "3wTeUexm7nTtT3UQDM79KD3Q4EWHym2JwP5Cw1ACh9tvbAjktwUu2K2wzmBakZMro8MFWsyG4dXC2jkw41DrGgxt",
  "key15": "3NFMH38Z3oZyBxM3CZ595XWKo7WkTJGgShaYK2uZ9zjTtrMDicHa5CQ1S9ieLELbQdNgGj7qD1GXoVPGTwQ8PWrX",
  "key16": "4gLWF1eNEiFcyTkiuvdwedtgA4eZSaaREE1JMd5DZNvubCyPZjK9iVLiaCsA9Vevb6oCGDszig6QYiwy1LRBpd4H",
  "key17": "2ZedNvkcs3zyy597axQpDMHLmbisb4AdHAieJCYtRNPVdqXkmoMJkYU7RxpA8oh1HTB6rkjxWih2P8AQ8ygKuQsh",
  "key18": "271JL48pZW1F89svWoeTAmgvPWeCjyZnixoC5gsJB8MMbwDToR7F7a526EA7QBs61qomkDd7Q1FP2VfD4J1X8ZPs",
  "key19": "Mt2uD1YF7k8h5cBotD38QCAKF3D4mk7oZo5kbfQbgBqx4UsDz8Tar2m3mxqVNTBYxD2QFixhrYg6EAVs6JgaPCQ",
  "key20": "44yVLAgztBcNopa5L2Mq8PeaDrWVk6B4cmuEmJwm5aBDZYQfADAJB1iaqdLCdPGLpcef1nLfLms67Crv5R9sy4NN",
  "key21": "3BkRgxzMVceay7WG2HiDyoJ7dfe1mupwvXNzziTUqPXegMWrueMQJ2Yngy5Qcfh5J3XdyQcn7q441Si1FXtNjQNq",
  "key22": "5sHJpA3mngvxyicB7tnFgq7oZjUPRRv4zk7qzPXEbTc9zcr3FghpsT4rHet4iZWUiUSDTYYQJj5PU36iWXkyHLFj",
  "key23": "5q6GbEkcvvzcsmnNXrNnbEAuLoQxnrJANVw75f5xLQUndoWgA8PgUUar2QecTKorhQHYYT2EXtgqYfkujm8ipCkU",
  "key24": "2ikQ8fAtSptcbwCHsozMp1uKV3ZrwjNt6qcv8dkuemnPA5EaRVLuaKKBzhTkFtHUZH7ivdkNAozH9edC93vvwEYp",
  "key25": "2QDN8yvBjKLwQAKzh6a6fu5CcopVw8VZNj5ZpeYyDroP8JcePSHwrkfzAh7DDgvJJAWWRK94DcW3WjuVtyT1RbCW",
  "key26": "2hYt5KZtGPah6vAYg9521XAtKndBRc6GFGDm8pbXoJHJ8UkJ8epaJVExDfZpznSsPJZDFUQjeU5H931EbqYCDL8J",
  "key27": "QaX8TDreTycUm6uvzpxL183rmDZ6YERbmWXnTfaqguv3Ca7y376H24f5qGUAh1uzRQ1i98g8YZAtZWaJrNrLVZS",
  "key28": "3V4TM1CnBevSjEAXx22ifRfTkJyyggJXeA3PGxXm1yGujXujiyXPgmdqFsmHfq7XZrz8KBtPtKfQhix3XMu84aqr",
  "key29": "42CaeAGxa3dYbuT7ymMKNoH43KqC7iLBMXYZByyXtWphsTypKS2ZCrGBvH8g3pGLETKgWD35QzbP1roX6XsM8YeU",
  "key30": "3M3fsemZVNyK8aTXdtc3VpzN4heB8mVPdxxbnPcWXwsEtatXg2vgusSWjrM84ujvYsEGV3HmxiD94GJBXtmjqneB",
  "key31": "3B9G8KXrkrh8cVTx3zTkGRh9BVoeSKhSVrDs4oYDbsFxTc13wsvicLC8vdCjPPArk9AhbKWBLCP1CGfSue9iBeVs",
  "key32": "269rwEVzfEAP1Gek6MkE76rBkiCbfrUsQUGgNNFQViBEcSC4DYBbZYr7ERqaF3Pe86HL6Ng78DSEm8AbqfdWTdEq",
  "key33": "3VvXhn94vv4jHNyR8kC7M2w8sJx7bSjJtbyzTQm9gAaNz3zktYeNzLBr56P32unxk3SNKTA2kT6F7wmMcAyGamqt",
  "key34": "du8h4KpPJN7imK28tUY1poiPSKXXNfyxJkJZk5LSj9xMpX7hJvmeTx92QAYcv1tyCqvoUqX3zudJxnuQEKxJcy6",
  "key35": "5sKN2NiuxV3qc6Mz9jEc2Cw6yKTA1i2Kvn79ZFif2eWQ5tXGx5r9QGoHpqYkQy6YGareevL3ShopfcYbzpPd3ePA",
  "key36": "4FdEhyqMntzxL6BWZ7HG9uLiRWwdcgCoQyDFgmNcQaX2d6YqS3PSSWcmscZvAXLHEf7qjj9R95F8XPguUGrovhyz",
  "key37": "8YJf5JDsLd6wDHjQ7bApg6gS8wGApu9L9KnFiAm5VFBAy6dJYdmyM16TNbjenCwTDtkciNUrW7SfvbScWWbgvGR",
  "key38": "3qAMNE3fDsEu6qtcqoMRLFZdyvkq8ntQFLQa1APyRB56h7VVHMhrcrAJZA7CdGiWm9DuLfNPupPuTyrufWWrLYcC",
  "key39": "ZofiJnSFvM9J5ZHCZcuygRNwWyt7rBvbYLL1yt3xduoYRny1DiWfdbcPXWhHmAdAq7azY6VdHSHVEaYef3bSCpC"
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
