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
    "jFMqaTtfRhXazHZkSyvSqHSr3hcHapCJ7miadv25w1LKwNRb5JWLM8MZx3CndAPMUndSA7GVsZBYKxRcbrKBvEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gAhLZi4MZUEi5mniwZ2jc2je77as4edyhp5FVTSA7Ru5rzNgVtDxqbetRzdR7gyQVaaPmkGHyvoRDadPUqiES9",
  "key1": "28tZXsmXg8NvPi9cBkGe2S2SruDH7gZdpS2vizbZmKgKrysLckdCJDZW8HADpUtzeawcRjDN71RBx9zPYKoyRj1f",
  "key2": "2HvxUzc3uC5vDNXiN762h8km8R7X5QdcFxveK7PYDCmSDLQXqAZCrowotbz9qg1NeywauV5bjqcaEk6dyFr6j8g7",
  "key3": "2CKs8rnJjqeP38oese8cNXFnsLGaWjA8sbxKNV4ZzAXAGRWzncvTzsBGSnwEEmEJjCp3NkuYnhbemtUm2q8NWrkL",
  "key4": "FA7RDgbKpmzJ9ehCRsJmdWKy945NmiRpRDAL1y6P3zvMjP5RRwPTnMbeeCFTSLgsFzQNmQnGGEKfLPnsa66b5fP",
  "key5": "2e4TE6dBc4zu3TendS6F3LyjRTCNNdtED3qr45rEc7ezSqkxdpvzgk6NbSXvLpZZ4pVUq3UQCVusRxvJnxXbJ549",
  "key6": "48e7rNSzRKZ98Xvv7jA1YvpojoVjUoyiLcoxri19v2YmcmTorXVhKc5LAR9jKz469MNvdSRebENuAZBDy9qzssZx",
  "key7": "gVB81A76LkqQFazQvLHjiZhVCKDyeYbvzV3ZUkFcdQXzm1vS3ViS9KE9rxioDE7fmcbZmMVCE7s8TaNLf6ZusiH",
  "key8": "4pf9Tdm66fzhm1f4oQP6WvYc1uTW9RcxpAcvzFjpKiQCFch9DkjmyN3ZT2XreRHgSGmFatCsct6KAa9EmUEpbH1o",
  "key9": "Y9ULEHps62yFy4bPMcVxCLBih6nWEnmxqtDSH57HcqRShBZMwJLWwSDBfbVwMsiYhgpUgswL6piwiohyMdsYp6R",
  "key10": "5rcTMYm9YopQr2s6vjHcGJ3f4KWp8tkT5ytCsApGkZkWhcPzWYRL6s54wsvono3E2S2397pgPAcvX4q8LkDEbf4s",
  "key11": "3wWe9eQdHsPUpEnoihkFaeFYpMab2dnL85ZYZVq8qBX81qhM5zU247wFpKRaGoeMtWUCH4wHYyCeKpcXew8svSBa",
  "key12": "5Fx574nFjh3oTfHSX8oJUKgXchSQhpdheTvaEuRNE2f4aHAvFzUJn6gkFzgNBFgYLF1shpWDGKVvLy7ee5TqR2sY",
  "key13": "62VmPAJrumV8ZP5ZsNTkRiPMdxJtoiwCwaPw2gKPjKgd2jwy1wyriPTkwGkjgqVYrbRzfLeLsBmjBD4445ja3F8F",
  "key14": "5jjv3S4scfzyBt8phPYcEB1xnCX6t8vxJ2RTGpoHeK6BS76n9dQhF8Gemap9NFX1SoXSAzvnb8T8c4krnUXFGntw",
  "key15": "5hZ3TdSPZBJGgzH4AHXUEYYvBbz3w6PUoiZFbDXUacwjK2XAVP1zSUq7je48J2fnqgHcv9RzCwWcBx3MDyLQAe4r",
  "key16": "3xH6FCx8AZm2AwkRW6zfQAmLe7kJWZptdG1rYPhiYeb3wdYSWkX2sGVsGMSNq1pq7dNvtifP6rcjMzUQKLZk9ijU",
  "key17": "G12BcRsCVVeBVx75Tfy4LhiKoMy6QLCKkzGQTwZdckwia1PjBqQHjGgGwQUNqrLjKrgVpbZRY5BUhjkmc5iP2zV",
  "key18": "65Kq6swnei6ZvLupJLJL19bxDBgYsW2AkJeV5JgFLiFod5gNXK3ewM4zaqyAwbC8HvfjunZwHbSr9EWWCdWdLtfv",
  "key19": "gBR7ds1ZFt1xs3BpU9jhVsM1H1Ln33oUJujo71NTf5V9RFgHVnGcggdGr7ESFT5D3dkiisD64YCqCyzcd2LG8mB",
  "key20": "64cEL2BkfVJzDPeZYnYLcb63fCa6RrScH6V95TTHTqcN6MpbgwMi7NpgDmFzjcSNBAEsvgQsB4P2W5pLv8Mm9ttP",
  "key21": "2FHovv79v9EPr3Mhns7uBNtbnnoPdzczdaSWwvmYptvVdnGRRPwyN1gp1MZT1JnBmLpfjN7LstLUnD8ZDntgxWAV",
  "key22": "34dMK7VoW1KbnBY6bqKt24a5KhLJscF493KSUcEm6krLWvSe636ynkTwvZHQaQP61T8tvArTyVhzZ3hBjJ4uAtGQ",
  "key23": "3sf6ZqNkX8n6Fcfqc8UHs29sotXtnwZdZFisffGafLtMqhKBKHx36oNhtjr6T73UeT8iEUzg7HAznfaftoSMLwha",
  "key24": "46jYWoAbtK2jCGFWpT8wjV5b6JuHRKCwbY4Qj9MrQdQ2pfKkHwAAJimcbnNWdPhSNM1kkBnUBRrNTsAfUcNRE3vc",
  "key25": "JQc8GpSWfXq81D21MZSvxdS2S5uGM6xoGtrgKWBzh8HfjQXv62UxmdJQjQ8Vzvz4SL4myfRBf2wib3DUaS9T28q",
  "key26": "2Qcktmhn1uH4ic3MzVu7i9ZNq4QYxhyV3Xty6b3tUsAPSZpvHETeSyP9W7Hyuon2anG9tNu5Q1eh6RsfFmUpR5FR",
  "key27": "4fbsk321KQmHPEzYSkMcqpHm2ePJcj5T7mRgjpv4EWGbdNYbBUf7Hm61jeEvPf9FTnP3aymHpndCToVu7igsCbCi",
  "key28": "226xV7rmqFyLBnoKAxMS9KbdAzmGHtjuEmYNmvQ4wu6ojZXaXLfUtm45zD2Bu71CA41yHdRAumBpyQ5zL7kKHHit",
  "key29": "3jzXCrNpZVWNfcbfFXXFTbU4pGTQEko4TLnEJdddNBdorFcLUYqnP171S9z9dEEuyuvJkN2Q8ewmYy85wi5sptx8",
  "key30": "4E5oDkiwr6xsNYP7eG6wzdFxBF9q2gyAzxxJnXxoVhXHma345NMe6PooYmCzWJ9YWx6pfnyU3yN3ovudEr7JsowJ",
  "key31": "4GULpq4N6VJ5tzACLNeexJegXsWXywvoD6Aw7ye7GgnYsCAZxvwZ4vHJ1uaJXbPaGtKPhJzZP1ekQopSuf7dYZdK",
  "key32": "2WWmHhRZ6fgLNS9emq1M2eXvjB8wZzZgzcghNgaJJfx6i77F8gjyTqj4KdnAoDSEkkz7dBzS1abhDcPj4DwnvYzf",
  "key33": "25KzfbmmWYe7cjQqRfLnZfHDEchXzVVyV6tZybbKGyUAHF7qEjVWafAZCAxhRJtrJah2KEX5WtWCUHCdUw2XjUza",
  "key34": "4RuejSVaQV42CJZDskcZzXSzNdJZo5tMzVDQZxN6FRv45ST4X28P663tAF1TWaeZbaHPAyhKWwff9MWHZx3PHPyV",
  "key35": "3a2DzrnQCRr3k9YNsnsr6WBW5K9jwf6EEwxtjFsepNcjpn6mFRqNXE2bgSyMGeEpcL6haihMaGG2tA4h9QMkjtqV",
  "key36": "35P5vZzS6nKtwZmqdSsD6xyZFchms7xPFbxT1ZUFXPmazfVUVMSCBFvFsfE7Z79ZVr7JrmtA79XqoVQMF5MbAoGR",
  "key37": "3fAnEQTQf7fV288tmc4U69TATe1rxgEk39DdHMn2N3ht5jsueNDDXDQHx8UnYfBZz8kePjpzA6tWjn5reT51UJGy",
  "key38": "mxmzFPPHHf9We1tn1XtAtRtQLcJqnhy28X4tCbiarATijHpv6mdARr5YCQBKTs9G6yjNysW17wjBUtZjRGzTSw8",
  "key39": "4sUHn25TrVrdNKcRaep2XNLgY9u43i3kZeYYgRiikCm4TfRiXCq2ebJMpjemMXAaKbkzJKbGPB2XBxVcVozELS4S",
  "key40": "2urk5BkbWNBeGVX2iCGqMA99u15dxpYYCk59w8CJBT1utGiNVDEsX2K2L8osQYYhvgQHt7HYoA9tsyrsBfHhnQoF",
  "key41": "2tZdn9n2FGJtQXWsxSJLAxx2ALrgCqGtuN4mMY431xZF4bQLNxJ5AzrRfVsmVxihkX5mqwpV8aXybhD3GSTfmMRU",
  "key42": "42ZKDtW5xpo4d3o7WJKHX1FPPBr2AG2DFnMPWrZfabvLSSiVETzzBk7SLwvr6mTVaBUtPC73tQP1rFxmzr2PKuas",
  "key43": "2ryb9DQwFcr53Yu2GCT4Cjbxjwd5zeZp27s6xZC86qSpVvCBxWRKQLZ8r4BvW2GxdPqu5HJwxT8GVKR2e9mUR2vg",
  "key44": "4q9AKPboSVURQ3MvtdGqozoWrTWVbSFNqCM13BdNrTcMPktDKiWFREBRu9X1zQaE6irLNe6XYTkU9ftV4K3nsx4R"
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
