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
    "4Wn43CA4NqcwHH2AxRbDrB5nar1z38UYofmhPFqzRm9XDLFPScX4jmWjDLz1GsDZRQBEKC4FxfXYtEqy23XjThUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXSUugHuv2y8oANTosvrpu79wxykDZZNxPVbCc5VZVFimkm6QAN9rTn3nsYtkDgpqWdrx4SYEY9tjXRmdqbUt7e",
  "key1": "4CAvSyqzX2EHvEbizZwpLYTuEXyWi4HGnFe1d6icnfTG4eKmEzg5zsBkayamXQuixqCGvavXqyFhSabyucLwb3v7",
  "key2": "3XpCzYpBWrwrCQnrq4rzzUaYcu8T68H2ZTvLVvtwcsvAH8tSYsqwZTWmyN5XRucGTLj71bjF4F9i9Sz9dLRG9nEL",
  "key3": "4KqqjFjpWCSzg4Se4Vmu3HzgtsvcAsJBzTShkuRvPdXNSF8iSfD6fu4TjjiMvpHZ3c5rrs1atZSy8ijgGx81w6ae",
  "key4": "3ajfRpEyDkMm6SgMTKMXSMkZBnuJRN2ZuRuYYfB4RrkhCzYgfMJ84pJVLNDbCeHDFjEW9qHAPUdxfgNtVzX6QXdy",
  "key5": "oGvybGJa24kEqSsm8LGHzhGryYLEPqGQxc4asCHPjvRrPxpeSRTWqT2prbEaaNEpuBK7a27JXobPPZR2WgJb5MS",
  "key6": "3r145jqoJj55xwV1cg4CdxVY8MGAxfhazBZRoWT8Jz4Dr3VadEB1RTqxhYQy6ebZFBsTupx7Cag5FtYR1iKFfRwu",
  "key7": "3yQh94sigYmsHASwfbXHzY2E4B5auKLq5WEe8s1ofSKPsBYT1zd9JdyTsjMFavFze9j93cFvUNe9mmMGSmTmDnko",
  "key8": "3SaxfV7CtFijVZ96NCec8tMaSwqFqMN8ARfZBje7STi7XDECrHqJ45vHRvVmPr2uGQMHRrEJk6pBGHtPQckYvbES",
  "key9": "2M3RUGFUtwbiWEYXkY4bG2DC7cxLSVkRAinPqDv2fyCQJdwV8akEPm28JAjqMEofXexDTCc47AiAmjHbESW2oQzd",
  "key10": "3biNS4yPWSCgS7JL44R4xP2v2Nc5cvWkvwREkDfv6bt2G81nLH44jZ799sJvJppn6eXiRkUaKedKQ54rC8DkThzr",
  "key11": "3i21iKhCFb8B23hUhiZiEghjMwvG13cbHDUEwWLqztm9V2TVDvgQ3NUauBcwWYZmU2KZR9EXVXKNdfT4ugwa8nNE",
  "key12": "5aRtnvC6V3eBmw7xvBKTCKNPh2MjkUSxFMxaaBgq9ztksjXADNuwMwiJQnpxzNYLhuaFuDYJSHf3aBhCXQi292RQ",
  "key13": "21L5Su7TCcX4EFRrU5NyiANRr9uNe69PrShf7xWYdVbtFsKcgWcCwxLtvcCG4y7pmKKJNjE8cqToLpHRdYcK2Mft",
  "key14": "4JV5BpcwfEdx4jNeJX4t256mox5qrpkxXyoZAmPZQi1WrsLaxfbs4Kzax3GcJtgkYdCLdQTpqSUzx14RHmi3Kzrh",
  "key15": "4rSnsciuuwZA1PY6T1Qivt5f7iC9anrGoan6oe7KdZDsnYe94cJeK21PskJS2N7U1VtWxQkEeuxyD8gEvi8so1aV",
  "key16": "3yFQHTUyQJAhbg2RNCru2GLqHcxYp5Tfdg2yrsCqLkxtY1VWWraj8FB9Esw6ijFUXbWbNAQkazLhbZKrtWfGDwqV",
  "key17": "2atpCrrkZ52e5Pt4hnN5zGnxuv6wbrH3bHGMwynjjW2wpSKXqMKuHT7RhX4ff4mK5wErcKgCha1QdCpBrzcdPk2f",
  "key18": "23yiY5tfDKtrbRgMMvmhvL95AAP3bQne8ZmGcGQDifWaXL91cwDXk6Q81hTDDSJ9ctRciHEizuc3BaBRrVJnCwUG",
  "key19": "5Qqibyg2JndHZzKy8cp8ZV1AQv3279Q9MPcVn4txG9hXH3jGnSWrJt24oa9UefkySY8T73g3TVRzgXxqidAYVQE5",
  "key20": "4pEHaKERazJavJdzDwWdkPTnkv1A7SPD5PfqWusjhpXoovdGmcV8MCeReKTKwDrycpaSKJBEAcPyLjTPXoUYCzbX",
  "key21": "Mx43Sw6u33VcbYBCKvofGVw1RgLDJoy7tHAYnXXmgN38KGQKaodcHTGSVr6JSas9i9a9ta97MGE7hpFUVEwFiiL",
  "key22": "5haEBiN8uSSLr8QRWSoAPTq8KWBs3cxqsNE13NCqorAcv4DNSEbyhtuL3p5u16xZF86FXEZw7xJNpTZ6aSjdCdLc",
  "key23": "3N1fRBTtHSnmuTUH3t7ZDff3E679D4KgFsa1mj69cVdhXemcrbAy9jQDqC4tWEjfLeyBTPenrm3PPyY33Sg4YzkN",
  "key24": "2JiUoQKwkrKni6sMs3aJAc6BH4pREZS3s2pa6jh5njQNHEmqByazVcTfBtQXN8K1VrXZ9nDU9svyvucHxU6TbD31",
  "key25": "5JB3vhH11PSL6YRGURpbb2FuGmR5wCUsPQNVihy51vr2FcfxgwcqKuC4TdxoR4Zrwicy897WBudTr2UxQ67CTMQW",
  "key26": "4Kj6FhVxfbAgA6izVzoapstJ8V8e9KWNywRD5wj6mRcQ5Nj3JVjw1PZEpnhhJKqoh6M1pGpQjDDPNjVaCgrQzCHX",
  "key27": "53KrRJtC9SgRJRb6ujVcEPskFRcJ6KK8fhepKsUHsx4sxUhGyUu3voX7BTVfSM8rzMxGMxrh9cYUg4BjK7PJZ8u",
  "key28": "3uq2aeWmKVWYiFpnu9oEhYBeZpjZpWMjHFQfGAeAaRQSjTg3Fozxph93MzaLo2TEMzg8tw4Kcdo4a3HGvMAbsgPU",
  "key29": "3bYUMdFZdieT6azCdUzQtAbh22NfYmqnARjc3R5dHZdj1EJHQBEQFd1gXSwsPQeBBXsyg8YKMbuyxkQcfzKzAvdQ",
  "key30": "5zXDKqW9h6gx3poejdNZbmMBBsrivzHgr1vjm3JAE3YovD7U28x9MnF2VdTbmb1ZDsLitb595TnuYUwrqqsCaEJD",
  "key31": "4HFYhhwEeC2pEXYgUCeyDwfxhHjFm9QPkmxr73zdvf9v9kSEMxp4yPFK4qfYkbYwZxLKiKFRkT5oPxF4ddtMvuTY"
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
