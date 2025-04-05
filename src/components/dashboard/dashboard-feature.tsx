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
    "5zBC4j4khTpQH7bd1ENFt3W4gQ4Y39fjvwr4qCVRFEjHjHAjiXdLzPvaF6XjqvLijJ7mjsWED62xM4h4oAajAscN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gAEPYgw7oZwfdrgogtDg89rhCCGfw1c6JXzHEcG2eRqFuA39HRgT3dLw9y2MrTJQEHurZdATfj6yo7NSABgVVua",
  "key1": "4kTTwKpkfUY4w5eG9aUpPA41VvLAjPMQsUzBscH7T7ZmH1iczbD3X6imRhpR52mxW3uQEReXv2r9Tp6D4L64rcap",
  "key2": "2yr6Li6LXsRacqLbBPwzNAtcxKeDMsZazNSy82SvaCn9BqZWwMFNtVZL128FQdX7jnZfsiRJPVvunuZM2UQu8zEW",
  "key3": "3YJX1F9mwED2VYgw6VpMufJZumWt6oW5SFMF7wUpHT22enuhgXYTJsJSt1cpS8ZdXyHrMd3chUdmiatEddGb7f4S",
  "key4": "NfWjcskoNRVreF3nHsmgPMwrdfQx7xs8f4AMAsgjxskpP1hJgATQ79a7UMamYiakyr6jMGaJvqfTWgR9tFib4qa",
  "key5": "22sDd15MCu1TJApAqxprdZATVDhJc99yi4WQqL7eKZxAgZNLedKcqSXdbb2vTyLVFTcvk77vFFcEvnn662y1LfDx",
  "key6": "5GzUTjPfnt3BhMcmZDWD5d7iEQf7QgN6G7q2bVG1FWuoXmzmut7z1pb4pEi5x9AF42MDHsofgZDYZTXAXYBAmeTS",
  "key7": "32zGBv82AZ6pP2YG4pL6j2xAJUEmKZ1JTRuvgc7ny2wDoVcXrameP4pC2mGqkJJgAHqNUCygwZexaYZ8Lk1VGxz2",
  "key8": "2tZ8nhJ7WJAdhqahC2pqzpQTgxDc714yVcRATraQ4j4vtHGfJXbzUzUXcxuS7YubDWc1YLDEAvt33G5U5fVm5pyd",
  "key9": "3s9Zy1dJcaSh4Av2fsiepjTkRr5apXHPAL8ikHotix3FeM7YhQphBjuHGFMhqSQHUoh9W6QNNos3D3NmNuGY616t",
  "key10": "5ghnfYAUXnbaYx9ix7mTAoHzffPpU9cTeUQvc5jdWGBG3gXq721H8daDFS5FzukNGewxXMfoJnEaRcgcH8XNQuZU",
  "key11": "5LaRyhSBKp9pfZtP3jf1GQwY48MiCjg5hzCvHFdLv8z9MgSSaGM7QkpGQHTSZtidBzmYJrxXReeRJpxxwNNjRZWx",
  "key12": "as6wCzk1rgawPVS2JDEJD6216ZU3GbqukVxdt1uaTQRWw2wQX1cE8eGHDKmMEHnR4zKYKtKejDiQzVjNHekpRtp",
  "key13": "5PX3rivcxy6jUM4KmToB9Hvke1PREbJ7JRnvGpgoMgrEYLVXY2jjtdh1BtsxZYF6nV8rmaJ2MJiKZBB9hSwKnbDZ",
  "key14": "4Ys2sYVgtqYAmMMv5q14YxCnt6yHeF56S2TNQYfN39CNKCXNgHJYq2L7fSYTYvpWMmhaX11rGhAdwDoAMi9JZnP3",
  "key15": "61PD3VH2ZzqZbGtT9CtHqYLLvegwSB5LQEPf7bVYLoYbTL1qz2qfVD7Q45VJmBbSuWArJCCZwNs7zYbcvBKyMTuW",
  "key16": "2nb4h1zwfD3JBLLQsqCSQiuGQepo7LfQCfexxSJs7VKJhcL2jbPekaUtRuG3fg1MJU81fYp6xqEQL1iWXCU575Yg",
  "key17": "ZFDu3jfjtHtrdnokPmZp2LF6Va7dhfhpCz9PZ8sbavaHLqQWZkUytHxrWyGQfyK7c3WAmTkT6YTaMD2bdQc2zYM",
  "key18": "WHatA82gJvCJHQJTT2vQ6QNkYDxrfiCevBKoHC2Rg9iiikm52dfMBg9L6wfEMqAG8mKbcZee3gYKnikAFXhcjem",
  "key19": "3ehDo46rRZGUuLEffTYepmnnNxWyrUNcptT9yh5Mxt1SetTmFnQJXfN2pp74K52fyPvaLBSPSXiNh6sfnAvi3xYM",
  "key20": "5u4tcvCsVHjRoYAU8jCfh1kqeVu6we3k3oTTkyxMtaMih6AyMKcFnd4jAifFNmSNqkLSJsgZE1bgiom7bcNyL15W",
  "key21": "4kZta3AkPTQDRaQVUyPBbWHQpj92nj8k31w47ntXvff7a5pFd7wY4gB42CNSyCFAd7QeyG5MqLFZRpizaKCJcGNR",
  "key22": "3tx1woX7vL9a8yq1Y7ufEDXG2wnocJr3uNULgh6aeU8sXuiq8Eihgcqjwf1wVYars6b9Cu4xPYr5QcGWoHJhXgLK",
  "key23": "sUjqhQ7ju1nrKHv47s5jdFjK596gJzgdjzQgQzfsbx7Z6NbXe7qD1efyAySYm73w3hJ22TNqnFTSFdDjJvVtoAd",
  "key24": "3sqEwj1RfG7iPTcKDayXMMEuZF6VwmrUVFedrsEyNgG9jo7Erm1VQ7x4qFmMZwYTJ7QiXbBkiCzHmGTBYTo4JGCj",
  "key25": "3wRfU2oNHuNPrG4kYXscQtLZ1yzibBvAArqcw6Mi5nrQZJvMzQPLZBEv6jK8mbGZhT5tDF9VwWjckiT6PTPmNrJC",
  "key26": "39vT8qzZ2axe2qx1tXgvHkdX4vchAgmGSbk9YSaKSsEbnFFMQjQbXYJLe5gcyotxqiu7RyUuPzKPbMYygjNZd6Hq",
  "key27": "4DP6WTWnZNhfdegA8sz2X2Gk8jCjWmCuzqk5duts42Q5xxtpvJaSDdqswwLwuLJyeGZKqiutCkkSQH4V6ZNQ4UGP",
  "key28": "2o8CDw5DMz8sNnTcfCiiV6zDXiCpC7NNGqyiZYpVcuXir4gTg5GQRX96627Xium13AZ3ZhXcCBmxxfahzawjU6Y4",
  "key29": "89triSqkKMCxAmvMakV9a1As2K8vHTQCc6xXyZyZMf7PSUbRUwWmWtDtqSPjvZ5n1r5v5994rtdPpPGUxeWBG1t",
  "key30": "2JV35NotJCw7eswjUqTKmJSCKrUj9Ap5hrdZEHBAEDyQzKPcN8NYWAJmtt3AXC3WANaknSGLFxWGnWBNMSTjjzaf",
  "key31": "HnoyNXH91tevmoDtUWbLvUnDKySMABNy8aqMSceJ2L6UQJrAowR2KaY9pAA3MwwnSArob4fgbtEj3oSXitghMbr",
  "key32": "3vfX1M13GvDfsKVWiM96dDVhF1HoJBoemnVHABY9ZsiJJFHah1R8oC7kzZSZh7y7ZNTYmrrGa67XFWCFb9r9ZbXJ",
  "key33": "2YowbRmsu294NmqnpUPyb74bQGcaFGJ1RZyCgFv5adAYRLdvEfPv9MbsThD2aqYYGh4khrLAbqvBEbAgz5Qf1AoR",
  "key34": "QakKxo3GAykbBFh92E6ENYGzXqYioioK46ggmtbUDXk8qRrnnnaqLTzyjsrSrViT6mgrV4TtdJigqVkQXziCgEp",
  "key35": "3dKwUx9oYXDW5PV3P6F3zPxZEwCuFCW51PNivuruR8AU12HPkzziP8XDtZBdwQvwxGgZ4vcea8UUvR6xai7jpWkW",
  "key36": "5CqVE3gsxpjhQ7v9WTJbkmsgpbvvCZbCCer6pwgJ3CRhiQpbZHkTm65aUDN6ZYdRVKfqPeAtUnW1JcCXrpJZw4Sf",
  "key37": "RyJ162KuDfsY4dbpGt1znvZt6sSV59QKnWQm3jmenPxrqEJvEWiAnd3q5wckcRBGvuyzuoin9baxK2FWAtvXxuV",
  "key38": "3R8xi8sEbxypxFfzdrv11kVtyAYsCNVfKfabrxoYXsnqGutJ8CnsWSs6DRd7Yqm8CLbqmmncDegMg6qpc4DSPi3x"
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
