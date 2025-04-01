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
    "NhgbaT2iNzkMcV8briSaxxrF564K6zuwFCy8AUMTgVcFVLuNQoyutYt22eZqnVC7xTh5PcgGoMaLDTywCEPc6yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBEmhhBr4fqqYYkmR1kRhSzbTPtv7Z5qSxnSq4DWig7TqNcQ75tk89BrQJZeHBeNVELbytS3mXqVJwML2rMK8vD",
  "key1": "46qdYLAtLQJ35xjkjfD9TinSddAMjR99Xh7BaivmpaaRCE1fzwJFqQcZs8qtt2vkJvpc56b5CRPCvCpMuLPghcQ1",
  "key2": "595EBpJH7G8rmuxa8cRkMkfbHF23dd46QkMfh9auBMQfygt1BMKNocGvPMKcFw4vzUKjXN59NLvU4Nv1vcHkyQvm",
  "key3": "4gP17DM97TQcxYXfskzXv9prn4iyhxccwzXQutqjo3FEH5EZz3BSSMXMDRTudGUii5rHB8qdc1hKJqkmfvdMM2vS",
  "key4": "4j44n2JEoQLWHiBCKyGLRgur4rERQRH7VCD815XWqGhPqm2FytxkzGrCmwd4H3hwcvc8BkFF85rYrtLgsXLE4kcF",
  "key5": "Fwg9LjRzYeHXBShSYBe2ZCDsFnoSzYAezGyZYoVt2LKNLKnqQFayg1QhrkMXNyQG7DYq3oHGZjCNqyAiweNppMg",
  "key6": "YnTn4E9G9DEebKfNFQZobrbiAyDaPxzwhpreBD5SrdTtKubpJiYW2fmAXUascbL9P8mh8g6xYZQiBiEbY2rAAuc",
  "key7": "AqQeWmEkXqjMS4krpUXzae1hVVL4nYMpHVCxkhaXyTWjrjU61xhpEPN6aaWwtSxmYFSaeeuCkDqXaSsyZ5GMEp6",
  "key8": "4kaGsUrhDKbSjyXbGTGoGxijZj8nT3LyL4BcEJYsZ39BHaKmk28s7eLezcRCGxisyLA8B5SjmCPec6K8rXubnLqX",
  "key9": "5m19gxTU8723XLSoGig7mbF4eBBHU61bvwP7V4x1PseZzewb5xw5JDBsqSu1JtrurxxW9TLdfZiXWk8akhvrKhce",
  "key10": "6qR7HQVgRVwNxeg2zUEbvxvd1rfKnfp9qJpQWeN4NytNRopHivv7BKCbUDFjPjH1gJjNgnwWYdWrhZLUWyWuNjL",
  "key11": "5cedXZbrG8qVg7uyJLtQiB7SUdNDZ1oCAMhLTJ9SoTLw4WkQt5x9U9gq1nEP4W2zhhcANgjLip7Qkd7K7ry87gMb",
  "key12": "53TTvFm2L6QgUAxTRvcXXiB7ndLt58aY7cQx7oo5FsvrVfEu1jrirhmChm9oNkr9rTqUFbbZELXAfhccFVCH45TR",
  "key13": "JALrf5KTcPGtVLKfRcFwgp1usZyWe1TSyse9vCbaWvBdjnvMpv1BRMGX6H92j5pxQxcnUc2MBPRfBwvX7R1vQuB",
  "key14": "3wuUts4ZoCF9LvZmvmxJAnpNbfZHR8qyR7hLmQPC9DLQBB8jDXk8r6YJGmeQG6koQn7Jge7dzJ8ctiREV6eJL4Ky",
  "key15": "2U5DH4mo1PqAVzcWGi9i5SeWBq3eiQmgpZnUKKDvwXBwiWSTqJ7Tt5YTSnGV2qShwZUoGgu1bK9urjbQfSeWrejH",
  "key16": "21a1D6CKsny9JjVq9Cx9akqTbPPaM2uMSzki1mFvgsNngkyPvc2ofLL7Ghsu71CEDUH4rN2MDXbYhpRuera1dEXA",
  "key17": "63fJEDqxQabZmkBMqUJDmHPyRj4Fi3oGvsGXmM1YLFDvvrfoKC9c6RVic7WJVtrvJQaz3T17Fb3RGporwHyi9nfB",
  "key18": "59f7YiqBqJyC6usRu4CWBz3KCPSFeJ48NtgReKgKNi4tRp7oHxsVSU9DLqRabqFHfY3Q8aJ7dAxENX1rdERZ8n7X",
  "key19": "4QK1G3E9PLL8GEACTSfmsRBKv32dwiSSuFEsvd2Pnffgsw4YkrsUgL2d2xHvVr1SfRJMYVaEJFEFPPTeYPApKryf",
  "key20": "2gRfCHqTwHCp8mHgvdWe3zSW1iBSUPdzpJYCAeXBWCA18d9TskiprMtypMtbd4LcQme2iGnNLsihjzNporwoKFz7",
  "key21": "51feHXbKkGr57SsovqzfKTC6RfgTzhJpFArgLfmALaiFUe74NPmr1MEwzSWhyvYnQErpXw5bzQzy9Pinwpheu87W",
  "key22": "4195hBY3ZKof3Erx7LdBwbxqiYe3d6S7GnGv7GtRp2QTdo8TPasiHT5jf2NLhUAcemRJLXyNkyaUfpGdpWvymrPc",
  "key23": "235hvBmFzb7RmkHVzRWbDuJZLs8LXyYdWpECFYNUqeiGXdXytacKgX2FtfRcpXpGpQmBqw7pBnbRQh4c1peqvk86",
  "key24": "4eV5BEBqWPi4m1ADdo85apJ47zbzx5XoMzhiRcw2VYBoFpfox4U7UvE8oC6hQJ8FND6XoYxGgxSyYZJQ3tRJnYbm",
  "key25": "5EyRrnwpNmKyqoKtuR1xh6DMvyotJ9Q3urTcR9Bb1Li28Cs3WZrvWPQhLZCBaY2miHz5aRjeVLnr31bKWUcyFVR8",
  "key26": "5ne1UojfxqiNSMhv9dkkRbAcR2E6eTA8ryF1EgjBf4aoqqJigc74PoV1bp2tMHNrRw55qjQ91SCxa7Ef7fSUxSaJ",
  "key27": "5PT6zezT9HnUjt5hcKTcBVQo83oC4uoviQYMDkQrknMpVfQvb21cy3HEuiAEH5kfnC5A4pA8dFt1iqEqX7tYqyQ5",
  "key28": "2ZBxi9jxyJt2WAxC6WemUvqBqcDzV9C1JJrXJL4wDU77tm4CiBi1QeQwcJbZtWWp5ABLiui3ZGjeey5mNhjurt4F",
  "key29": "3eKh1B49jviRGCTbDEkqzsP4e2D9pL1tSLNugapEKAgUmhMMJGQYwRExZt73T1VJTAvcfKVCRrZD5a2xVLcgyZ4V",
  "key30": "Qc9zrnGvFhmNQpYqcfN2PEaGyjmnn1U4xgZ2Eqs5w7aV3NkXYij5SP8AMhuWqNTMctrMHaNKFKn6qyZrLMxSbiW",
  "key31": "3tQSuwJfo1zsDBpEZRaJvMrWWt7hgKprRV7Bm1i2Yyr9jB2UPwrqakcjPso8beXvryaeZFeb5wJTLNKnqnJZXdkv",
  "key32": "M4b5gSUo42Cppn7CxrLLibEB4sWtZBUqbDq6Lb3aDLCcHKDQjmhaosUUPmMbiD8aTifdGY7xqjcMapoHnAXYUmn",
  "key33": "3znqQuxhvNKRYAxUGjvhJ7K27NcdUNh8BNar6dgvLFVexhmM2G1PaPCxbPnSGDiUpF44XShBnc8WhCLazL2HPgW7",
  "key34": "4FRdXpjdrsqX9piqqWk9WNJXzqhS6T2axMVtgDXc46WEYMSzVgJANkHLhjJ4Py3nLFB52ZoTghcW5jxtaY4x7p7v",
  "key35": "2nyGLaE2xsYk7VJ76jYme5UeDAnZVuWyrNjmjsyTCZyw7bmeMDc9AmW17s8nv9EXjwGbt9bWBNv6h15qmDSaeR7q",
  "key36": "2e1va97TkReQfKifhH894W9y9SgK8wkW7HFUYS3w8X25udMGJsJ8LqE16XzsKFzaHdVU45jH5MtenFDA8xfbGXqQ",
  "key37": "3wG2gnswg6nnPYzw5JzBB5NjDFbr7QN64TJTbGR5VkiT77eFnjrkLGNZqMe9pGZFF3CL7B6sJuZxVcZ2eUkytgVK",
  "key38": "3WZbayRPAa15CdAwpfpgiV6TdBNpNcz4sNbHVr2waCihdufQZhwFTvTchTz26ght9va3DeQ1SEDLE2Dj3b29ihdX",
  "key39": "cCwML4ra225misLvPVBRcMRhJXPcdCYP8o4LYU5xefHU1LCGLvhAAoHBFFu4LGoAD8gSFN39inJJNTZNHni2tzN",
  "key40": "2kRhWRNHq1iKZhFLApFXswGA9n5oAd2Y8Z8Z1GWBMGUca1N4jH4CLMWXTmUBq8GkvQsE755nSRdAug5CQYLgJapW",
  "key41": "HDn1ckdZaucMS9fjFWc2KCEbbdJ25Buq9roYtBBSntipGT2huRvbqvDbM1JxrXDoo2XdoLveKa7pDwrbzjc6N47",
  "key42": "2TjoEfZeBjAAFwUxtZmuBZzU71SpTHDpQM7arWiAibwTqRD8ngWd29B6ywbMqZ1ePB2DC2XPYHmhxUJaf7USQQ7E",
  "key43": "4hqxN8SYu8vFTmNhgXZ8nGRuxGJZ46D3SJrN8rnWhtLsnuPV1oM8bfzJCREsDYgFs4LsBSrf1pXVaNkHwFMb37XN",
  "key44": "3mQYVFin33DLKDUDjiJqUfhBcjQtWBJsoGPiJbrbSm2oXc5WdPuejfBdXKjApbGn2BQQjpkRspu46vGoPoJG3XW6",
  "key45": "5eFqtT3zjmHPFnqS8DoZNufiMkcfqj2oArBCzqAfV4eLTxGZbywAD9dLrzxEinhF6V8ZXKvPF1s53ezSTYJXTyoS",
  "key46": "2iTfbgRLGkgpQc3WF2mEYVHzTVjeDodFGE2BFozQGeFLpjctiqgdsCBwcajVq32814N8Hd12Wj8GSEdjRhKsGyTS",
  "key47": "3YnytjSVUgdDVVTYvoDbnhxyazzaPaGitZC9uPcpcMp4Ps1pH5gBTYmT8rjJmdpfFHwACXvcaKWCTSj7CJHQC4ps",
  "key48": "4JACKrNvorrVGZPxaKPokKb1UXUiXXHwnCjVYW78SUChtjxjPHi7GxydbwqCyj96WTz4xW7s4rZq3V3Cjxdw2hvd",
  "key49": "3LwBmBJTahnNv6pZCdDGGcvHD9DU1gz3MgCeQGczwh9RtgmS1U2P2VHf4v3nazu52uDpZL5AVYR9SuNanG6kcdsA"
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
