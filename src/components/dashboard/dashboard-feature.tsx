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
    "5JGz8uYgNZeZ3w3PEoBDChTtKURBjv5gLmhTb5ZYZQZ4RRANoc9E1AfQkSZZYbpceSccFN5b5z3eb3yTKRV4sNos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HLjupE1TwXGPkaz3AEZ1b4qQ6AjzcHD6o6QXPXS3GmucxzjhfMqTn1JBzqdw9AX2ERf4TxMVFuvTnXAkYcyUc9",
  "key1": "BN6Bja4w7VbNNNMip8DzMrktSbrXYd8AHaXbQ1tQvhB983SAvaBuk8dhssPQorDFsYinuqpKWNbRGQuLT6HsjSF",
  "key2": "5dJcPJ93XNEtTTVJ3XQiyMutDUrW3RwrZttCUL2Mnm2HoK1rh5k3rRL7fxgaC6mphonDNybvRqCFtn8n4hFSGgo2",
  "key3": "3PNi52Ut6vCD6wxw4L6J5EnR2nwYxydjUkdw6L9ecZnMKfExATiWFU6KNAUtZhH6qK4uRvtJ7eseP6Q8HsUEzYba",
  "key4": "4DdjwtRLkJfsVk1rRdYBDcsK3mX2A5Q1B4Z48nJmbroNfETY5KEmWLUPu2oMppV5H94CPKub2LZvRCQdi7GCop5",
  "key5": "4MnaLX42RnwBAv73L9dMyVm5D7aw6PvsJ6oohRLcQHn6Bstqj3fgcTj1H8F9aNtaZEYvJ7QQw6fCymcHPayWEuur",
  "key6": "8o5HNjkjDNfGYwX8m7S5KaYJe7Rkqc4BuYfMRRnqjMmLCcgcZNHe9T82ebKYKxSXn8rX6M6fCkMDzZLZRPQRG7W",
  "key7": "54C7G2iSCLYSRRrR6nipHaNkkMqAtsth4LrtMu2noxh3YaZNZtamgrXHMho8ZvwxHb6XkbEmiq3JyTE3GNkXUapp",
  "key8": "2iDueZ84KVHHbQCtDUxraEXkEadY2pvvPBBrDHbLVFdp9suPDireYj2JFBhUaPDmv2nfVV98JBihygHTQz56UCE9",
  "key9": "3q5U2mdL9nSJSK7Xbqi9pWTGu116VHMtPSqVjVcbb3rWu5p75Eddm6BdLcMzJJ8JaGRZkeXQMQV5qDVP4pfwgYBe",
  "key10": "5dzSdnfzZi6eygi6JXBanfs9NaBYDQvDSDjoYD6j6cfknYvU1cHBDuz5thjoLLhxJTQB8yKc9ZAr74QKgsACSqSC",
  "key11": "MnYrDb4HPunPcM1obww95vSLefFddMrnt9LRM4QuRTTnPA5kArjK9DrtbxvuEBTeNEmqMb51JjDWVcB2M5HgB9C",
  "key12": "5mw4DhfxpqAoyXddrm8yd9FJUGR8wBnuMAiDJgWZyU9uervfzLnHJEjB3NsYbDtbTakQw6W3Zzv4V19kxhnbY1j5",
  "key13": "64PmtNJ4cGbDjFeVogEM1io7LnUnPPPhHGXc8kvtroraVAtrNQENak6RFMEzNwQBHJJBWuYDchk5y5ywzhR4CswL",
  "key14": "2k1ZXszFCBLW58gQw9sGvRCgYughJFnkaTNAtVWfC2nkAjc24RGiwCxM1p4hQGSg41eC1PbD6NKRbcMi8gC8C3yM",
  "key15": "2GpMHGUyYSj1C4ohUbh348yKsyoSVyJtqQm11HQQbeZXxiCp7p9PhgVP8oY3hoY6cfhmtYCASDAgkNdvEXQBjDFw",
  "key16": "4kHyrLCXPW2j2vBspr5h6XpiiLpotv2xtunsYqYZvoWQtrYP2UsPUh9HPHAhtgVPUQPGx5vSbsK7TP1fyjYTeGSC",
  "key17": "3LKLEhJi33bmM5NxpHA6QRr8LEKWorn1TXjn85iR7Lx9AFdueJcB8wy3a3Dur3VugYvmw1GCNn1m46XmmJLXzjrS",
  "key18": "3XYkJguuKyf7WBzSn1VC6cQaSHN7T8ohghshxUjvkcwdzNTPrZmmJiydKfdkWFyFADBQdnZ7ubu8KqoV6px24BeJ",
  "key19": "45uyoLiUKFQHQij1UheX7E4CZdAbvn8KVUNx8Jskr1jehTNQfxxscGLsGfat3oAJuttRyYduXkZpfnAwHoac3JTX",
  "key20": "2BKwxDURZGfzqPUSK1Xno9TyAjJLkGrXr7pL3pgszcCybBPuJZdi6uYxPbvTiqoUKaWcNQ7bZcEDh43DVxVvbZDR",
  "key21": "2te1TXr9G24DmGMBtnvHiaSd9er9bQfDbNUGpzeSAVz5EnCtSST6Wftg8YV5L1MckP3f2LVXaq9ivetPyMYf7ct",
  "key22": "61PCA64QQp2RdLjBaB6uyDnDFygpfj4gsiefBs11eUMxetuefHJ31CHXYgXjVvw7yLYqSvzhDh77pxagy4Nd49FG",
  "key23": "4Ms8FHbFdh8AAHMYu8h8aYR2PNzkZmkZHgnyZtjBeHySgSWErpPxVidvprr716PUjG9SENkYyJwMNTPnXhxAnqXB",
  "key24": "4oHH6oSzCZzf2rV8awHvfpXLSsatzyj4qm9a7NPkfzVmWMGQ7otR7hr5tMZMKArGf2aRFfk9sSDMQjyBXtSzyEaD",
  "key25": "53nMMqWyUrbW3pFLS4qC7fwoxxzPEXmu7Qm6iFGKaEKo84KQXFeaAny4QajCQK32W73GoBPQHoqzJ7ovVcYwqkow",
  "key26": "2Tjga3tiYD9mqMvwfZJg12pDjPa5fbvw37h1UwyrBCwNd9xRChRf5m6cdKPfJC89fQWpVVTotXvqsoBsY7hJmQBm",
  "key27": "2M7YhaHfA72SzmwdbNDZLKKJpJ8cWLacPjmZWr8wuHjTZJxDcjPHqGuQZMurZMEFdDrz4GXKVuvF3oVFVe763fAH",
  "key28": "2x2g5e5YgwxXCKdameAYDLCeUt6HsGMQgGMJptK8kgynnD6MvPWqdk9BsCJYfW5xkkT2eDDeHw2tG1FpMibXkW44",
  "key29": "bKJU1RQZNq6kJBQY9VCrZfA4d17GUCb6PRKvpJDntuSqF9WbFZoMvUPLNiJcAp9dfJQsK55WoagJgMChLTcuW3p",
  "key30": "2G9K9dW8mToaHor8BrdTCpdhqSLNXzUudNiB3jfvnciW7mnTgQsMpTb8shp1nDMTb2edgEqi6ByZM76sPNiRDYnT",
  "key31": "2pTteUUXn8cp1uYTcTDcMie9N2yKP1mpK8t8S146gopNgGV9jyEkE4sq6eXrBCbGoj3EtVhJuBN2W1Lkx6Qkz98W",
  "key32": "4eP9bw8rBuzWxiph3afAbup67SFe7demWbJ6rE2PVBR1HgDN8tiP9h97wLRpMWSSCYW1yVtFVMMuBLfb3sZY8xvE",
  "key33": "3SFwSLLMEVXwvnmNE9YJWfcdqJF3mrm4u8S7CCfC9tytpGwBapVc52BMe58bfcJUDDdZhXJn3SauVvUH1QoHKh8X",
  "key34": "2Lht9N1uhh49Eny8c4Kj6BGwfp25yiAxHcNt8Mdo5XvWv1kgW9A97FTJ8ZADBzFLVF1vx2tuWjpzVmeMuUYiKdW7",
  "key35": "46KMCg5uatHMNbm4LFJfXouZoedCLcTM2cDejDE56F7Bz2qTELwoWPL6zTMH1aCqyXU89NyyFDHginJTWxYjjamT"
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
