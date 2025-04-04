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
    "48n6jXJD3tkmRpYyXrexemkP3S4hNv5X6wHAWGiisM5PzLkN63dTADKKNAYX38npLVb23PLxXCGjhYJkKxoGKVeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmBjGXzyVgmJ4bdPsPkoXGsJhXm2E1eX82v4avhsscT8vgTGEDPmXNPFuakunbyVYeDNKej6GJXE7cUUeirk3dx",
  "key1": "4FERpu8WTAmHk7KPfdBuMAAL3GWYuMrc1WjwJvgbyg2VSkLzQ6yjmh2F5asb7HWmHu7xyLtwrhZVQA5iGGogkdj7",
  "key2": "5QrMDT1Pdsgkt5Z71w9Jtx1YVUDUyQgxrCn8hwnmKfpxMGsrhhT5AfW53rwZBWBsHqMAHBXLrz2QLfsoKi8rpdQB",
  "key3": "3EfkGgEZAaujzSd6vmPWB8bNRZsbnVhU5tdKEs2WQJ4PBwBrkn5kniVPU3VombHfFvKSZU6gTBB73EiKt1xDQJJM",
  "key4": "4LdzBFJt9ZEauKrisKVgoEacMCsesP1NFp6tgv4QCCr4jMhS1yjZdX8fyndrvFSEKJrE95tVs5CbhvzXSB5SNoNK",
  "key5": "eb6McCubc1aKvmtVZRgeTCtRt9oN7zhovNmvvajKNuHa3Xt6D99X2SZBLB5kiGRNMRGA5e9wzffzPzVarv1fiGo",
  "key6": "3tomiH3fz1vj3o3Xoz2FPgUDiuTQiU29EcHZxWV3RwssC6CV9LA7R5EKPNc1ANTbLZwDdjmEhip2P3HYRBJwjv7b",
  "key7": "53V4Jpqo97t6EjKfRfAkg6L1z5CxMzyk3dBMi7bfeJcSr3Wrz47kLDnydGQZZi16gAFF6aB7TReTbeKr6oWY7Vdz",
  "key8": "3Xog7aHNcWvvRCUWWDGwJvNnHxiQ4dVKkZKVcneH3i9deUMGkwvEU4diNXvnbV4zXmL81xXEerc1ooNqYW6jko3t",
  "key9": "2vC38mDp3q9iXRGVTqSpsb4orryUEZeECJVKmK2Vfz4ZH1UTvt3LsC3yNAppngrhLTmzYhjSNnxJMCRwJea3YE4c",
  "key10": "4RP3qsNLZvfK2PXpGzkxYgKaJ2JE7QXgz5Dqt7kyjHec8kU5FNGHve26wf5j6itza7nB6PQUyKHxxRwXEQpvXH6N",
  "key11": "5rauuSfX7RmLXVw31kGWAVkaQHKLmoSi2aKTDeoMkD1x3iK4EDLVtNU1oNi8MWUpxmu1d16TvvuhdfEm4YhPStqG",
  "key12": "3jvDjF9c1cWjnQxgwsyjKn6xQoH5eT647tow7UXjLZKoRGz4WEh2sowXnCKajaKVwTQgZfWDsKd6HGaF4rQrHy7n",
  "key13": "vTFw91WoBhXkKtr3eN7XnVpQ1cL3ExtLCSS2EinSuSSgoPqRwn5bKtcmB9L2GjfG4pH3f7RQecf7iKiFFLzSPDd",
  "key14": "4trMEVnCBTp7ddLPVvhJPFycPSCh9MEYBkgvVchGuZ9Z7kA3TShDvFhcjQ5Y3vs9UxwjnT1cWbfvChAC4eGSFxcK",
  "key15": "3pVf8b333zrtxxSNNgpNNPUq7S24Hw8mBmAn1LpgAH9FyRQwnyTSzRdFzQ8gZCx2848BExjwwnD5RbaSoxbdXjnx",
  "key16": "2Tuik9AMsQTpi94FXqUFJAQqnC5yhfgVgnrte4sYcLNVWKpENr7C4gUdSfqaLfifEAVR8dw2ese5K6bWwVQqjLGc",
  "key17": "4ZbCR7hRdBHcLXMB2LkeFpGkYAoUyAJxxgGrKyY66Xc8rati6C2FoqDDrttupzSx7viS8ZYQ7meG1NPAc1J8vVMi",
  "key18": "4w27BLybXQh4bvMAksVkAKLJtBhurgHbvrR1rjDN6R56akzyqgvp8qMa7exCj1KokrN5SLYpoi7AVpNEbRFTLipm",
  "key19": "3KpibfEmmyZfwHCaq7kBTj2BCu87imARaJicAawZv52jBpQGi1oEKYTZLvTUbnCUcqJ3dEubCoMkQDGLd4hXm3af",
  "key20": "4NvS9hnY24vSSUSNTC4Cv6orhVNsYyFZpHTAZDwGxBAsY9uBcedTpVZtsWYohBrTzx1qmgoYYyRbXDMy6TcFofKU",
  "key21": "5KgPZdJaCwFQepVuWaUpUiRFuoqK8vHRrPNQf3NEpqvEP7iGmMgZc78hfHrdyvQcrLu55kRnRHoAusYAEA74RSmu",
  "key22": "3k19n4m1dhzXDJ3oN2TUezeFCEEVEQzs9KE6JGsSXQgdy7jwhmmpCYEN3D7sxsv2pJ85o3ssGeHQeqogrp7FPFdb",
  "key23": "3pSQ6VtEMzvyFcF25djCHyenTQg8xi1m1jW56TevxE7nTF7kZ2TosY8Ltwhsj2GabBKFVhzP6ZmAcZFxWZkKyGX2",
  "key24": "5fWijmC8ZC7WKyv45AaLobtfKbcvaisCdLKThVyskDBeGoqMe9zS4fmVVNSTvuBJJipKqFcLrqkc6xukfLQo7EZo",
  "key25": "2CUn5esJoJEZJ3KpTvcCCTj1jXjVsx4kJdRZiUV1JB7w1u5wPBjT8TLysVE7Ao3XYCxC5SuEWE7JA7xJvWLWxLJn",
  "key26": "5p9js7nThsRXrSnhf7MYhoLhGKXpV39SAp3pHztRYgfWKwxbtYdDujoMxmSV4LvTX5L6g6aoWUJ13yi39An4PrLA",
  "key27": "5USiV4zPtFWA4nXShzGxcaBNjFXiBLjcyQ6C9qcnrZaqmxrkQMrzTS8vTXJ3uBmtzAUoRaGwuP2ssUe6YDiUaYgu",
  "key28": "5xnMJBB3EFsHQr2yM6QoUh1rPQmy2NBViEoMfWBmEbqh41mce2kv5MzJfnQfcFfGEUUERPSnMQw4nKYPmo21FxVV",
  "key29": "bWAY9BXK8cZ4NaxsJLBCq8itRTDYzpWUhV8dSLgqmKUuCiaHKTed4zPBSqhneDmaDkZpfMyubQeHYj66WUXXkia",
  "key30": "5G8iXCDyMqMR9Y5tZhRMUZkJoSwiLFSwBHZuiEJnECGHb3BwTkbLG6g7rubvacaZWs6NacpwshjFnf1D3YpKEuv1",
  "key31": "4qf13U1K5k4YvuEAJBVvmgxm6tqyJLgNBL745fNR4yxD6zQMQVPecNQJAZARrmyBsuDYFCwQauY1KHHkiradDA7X",
  "key32": "3FT1kPWPTSwdMgiHytw39RA64PQSs8H5rRFPXFqet7N3gXhifbJ2qjbuZFQ7udHKBGMDzyXX8tUqSHSzHg7c5wPP",
  "key33": "vNp9JaQ4tQycJF83eYCYUvRUtT7vF3wPhJ5budqnBSekbAE9Y2gVCVTk12ZRGrib13j3BY1X7WKmeovRZwSELyu",
  "key34": "2zM4yFdQ4miqEWMnhcUBv9gmo653cVumxoricJQSx4HAdd216J5JRefT47x1PjUWFN8Kqjubn9dBMJTrZAs4eQyv",
  "key35": "5Hc4xGnujK95PAcbnT9Qfi3VRM2ns4JW2f2HuQjQTTtiVic8BvSbmqBkiSAbBAzsyarBKSkXCqqMKjdFwnuYL6rf",
  "key36": "5TYeutaHt7HGGXqDR8SBLBfVE6s4hBwZMbC4ywz8QT2soNCvToPNQNLwTY6EANxXiwkwWH6GDjs6fMTFZULostXQ",
  "key37": "2qtqDWc4Qq88Hv7iN5jcHdVRZRX9ubDYrJz2TkhGvWGwtn2F6CyXVdxawFYGtdiYhLyArCkVA41HVv53ujy2Kr6j",
  "key38": "4RJp6jpfJnAppmHk7HcHEpVvWBuwqpg4tngvcxivdKXrqTJrPEHNC42mmgYCKJ5xtZbddihXBGqZcvJrjgsWUgBE"
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
