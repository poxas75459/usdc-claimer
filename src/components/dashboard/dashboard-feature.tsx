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
    "LMZH1rd9ENEqTtBCEymStyXwnuWbZQ2xbxeCscVd37chbdytNHsznv7eSCi6YjtCCDNSxuQuDCqhr2oB84Dfc93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nFMFZJde6BMgpCLeHqj3fosUiDNNNeUsu5SjAnRQvVQ3K4kNFmiNX3K98AUUbso8WiSb7wCvqiDwxrLZAnPuwuN",
  "key1": "3XkSxW4eM9Fk93rW2Q5kRPhpx1xFfkkHTu6r31d24uugPaPP4TKwDRvDS9jxbHUXtFBxmE69WBCTnTSWzQVqgQ8L",
  "key2": "GeUnDhZozirLW9odzD9uDDs6mcYa1ggbP3r3WeUwgjQwiuNEbZLiQvPT9KidmWEogMBh2e96oaPdpWKVcQ5KcYk",
  "key3": "zXia7rxNcJhZdctQkJSjWyUyoBmRb6YEE56AeNtoPE9Qtd6ouzXbzHZH3T2fXnYE5ndxBeZnJ199BP2uj5H8ViL",
  "key4": "2dg7TdjibiWFoqx4rjjgXjmD3cm9XqgNzbvezR5jRxsNsRmhdtU6DZsNE4om4YKpe6zCo94HTbw49vVQWxEPScE7",
  "key5": "3vZ8d4MPsRmxd4HUrhNUwiJUECCkAGcop1horRh7oFr6SQwdasXwwg7QVt1uio5rZkmohfz7QnPxBNeMjFSqixsH",
  "key6": "2sKqaZLFDhkem8S3FhF3N2kGSnSRQakJJ6DVBzsuKPSG6rDhgRChq1sVGitpHbYDTTmnYb9oUmy9h3oVErtG7CSB",
  "key7": "5t9srsCXczrC3B4TWXbLqDPdshqTr9jfD8RQK6XknAiE1wPfZEVtdrtEGiBWWdxPw2xDhfBZ9nYjA8DYjHaSSSyy",
  "key8": "2pHhzZrtyFsKju5CijGo197gLTDycxCh6VWWcqbWPAfVLNpaHh84D8mtBbcwgbKX8Wt7LLLkXbduSVufxxnzLnNP",
  "key9": "63nZjRgHxhoKrmAbBAjPZeT5cHmjRYrWnSv7nFCmY37F5WNZ4pwi2KMN7o9nA4Pzwvz7yk9a8JViugLXn3LHDu74",
  "key10": "vYgLajDYbm6E59Mwg3AMXsUiMVTkLV5rmUxfxmR6sUeDkviNrrZaRXJ2FSgdJrfr9qQehfZD23pkWtKdmZVg8kg",
  "key11": "5Fzin2hsMQbcHLnFCyFRkoAJvPxhtbXM7gFsGhUZhLNrzLJzuxxpSdp6KAXdNkopq8FzU43HgHgQ8TAzRg24djMk",
  "key12": "EUywhP41TcHc6cCJAgF3uD7NwZyL37MPRgxSqckbF3shPaMCpK3WRSwuHSvrUseBbKgHjUumKMMMMTyFbKoJ4qZ",
  "key13": "3Jjp6RSti7YWdLcwqZg2LbV59vTx67evpqDfqpMoM823MS3B5txsbS4wYZRQMBBRayHg1KztXkVyCF9Z7AER5M1s",
  "key14": "5kDQgquaEWiHMfEbiefLm917yEaBJsnErmqFuMFnCAvkjaW1GuMYz1xwpqsYZaQo5b7js1vm5JC6sNTrbJ2A8Mio",
  "key15": "39nRr92JfDdye278JKzqfSujHVWyM4xdRdzojVUDgiu8FBrwDiYrX6u2tbg9zJvZi7zGe7onnrd5mkobhkcSQFAL",
  "key16": "3hKbwiHPC41We7mXzooXzJDuYP5PWunkJfgzb4DD62MwQe7XquAuvXxb3u5jQCBAkazrxt5JtT7BqNnsug6xKZhd",
  "key17": "4UUhLxZAwoMEHe7wrhc1LG92JgKkkGENJx6MzCCRGGsSBshgQxugQc1vZYL9qu8u553BVz4JQZdBakLwHHVFxxYM",
  "key18": "3NXqW9N3zL2k9Uns5q1w2txLcxRnX9NHrRq6U6NdpBd1XURsVNMe9cp1QKcLg3fyfogR4Y8to54DCsTnGTVv6bVH",
  "key19": "2hnhAPrMDvCuPVwP1k6Nq5Z7XF4rqX2kwomBYD1UNDEcnyKfzDCQkHiMg1GXrQ23wNZyqeARKQ2xFw8cicAibjHy",
  "key20": "3go4iy1PURZi9xaGCi6g4WB6PscrdmS3WCjn9TfRtqEktvLr36EGfspSxyTWNLd5dWoPoEp512KiD6HJ55ExE7Qh",
  "key21": "2BKCoHL6QFuqdHo3r1bCNZ7pSFuReSgzVP2EXWjXw4W8M6SGD1HjDTNjrr32BypwXncjbuBcGP8YG8r8PcgqwAVZ",
  "key22": "P6smTd7qwnDVcyEetguA7VzpT5Y3stgGWuzUjuc9J5AjuvfvrhH5cjb7dReWKkLTaAAKnVZ7s93uHw9p7MiY7Kw",
  "key23": "3rUHiVT3cic12EUnZivfxep1DGV3HwA7Zkd4aEo6i12Bw8xGyXG9FYCvE5hNZVqAWBrwWADv4qcykgd6VU3hnuV",
  "key24": "27uBj63Azvq9zXmpbMsHb1fSNTyFqksaUc9pq8StBQfGatq5MzbNQwcHLzbDKeGNqjb9jQhfRDkJxrE7q5NtFt7b",
  "key25": "64D3Pvmh4Rjt3ZKstV8Yq8Mf9ohg5oVzB94pivKTaYEspqaacvkxAvQSG3jYnmqt17Wvf3NXTW2UGe7WMYktmfuM",
  "key26": "2hjELJ9pmCYne2fsRtDTfRTcX313mZ8hAAWbWhB2zxqowbBBip8bnnM9xvbDPoomdmxn2BCLAbX9nFZ3iordL53q",
  "key27": "52MtgrMfidyKrK3sSVQfskzPq6AwpeoHrid8HdnECWXEswMoXc6ipfhTQELzSB3rxZgu4zkD9b17DgCiMP4ZpqXy",
  "key28": "5Z54SEWzpzZhtemzR24LxEySQrKFfqufCEfuvXRho8srHDhrQDmtetqYPby3z8gBWm7jsFjpoy7Jznhfn64WSMTh",
  "key29": "67623SYX3Zs3ACv2sGiB9N3FNfh7gGcu61QjB5QUzr2Vh8QwvpDFQpWt93ZpgH3GU8DvwgqqrCJKQGbaCUgpMGXu",
  "key30": "5GSQevwaHM8Mpav1wwiLNc7p2M5tHqTuf7Qo1hBFJEVuTmvJqNRVmXG5v9N4LXTe87ia23HFq9wHWCcmttx6bJ9u",
  "key31": "NDqq1iGx11WSZ83MiHnQgE4GNepcHG3baSCaPK8n5wR6CQptf8T9kkhdmKDCsRLnoweueUUeLeFMLbwx2RwMbPU",
  "key32": "2RibCrTgQt83f34wjnboA5EnaRSeG1AZB3thZtQ7onJ8Bdw3PcfMaWwh2EGxStujhM9XnjCMgfG7gMqCR1Wy2qGH",
  "key33": "3Ncn6Hk3fG5PZkXB9AJbuvik6fqmaV96M1mURqX4oTzGX7zaKWfhbVnMCwZt4gAiq2Eaaw7exkdE1JjsDsEB1rJa",
  "key34": "3xt4oTXfRJDHowNaQ2zBvmV5uZSosQmPECV4DFXpPwGMbYJfEyUyqgoC989TGn9e5ZKXshzDxVn2oYyHfUWqvs5x",
  "key35": "3bFWiYwhsGUUCTYoceaLxec6kiGg3UuiVxjWT9zeG12WhMd24W3Qauqt7kucaTyT8bYRTbQNiHNnZddiSgVtVc37",
  "key36": "3QqLC1LwwUpP3L5Jz9Fvk3VS6T8MTp6ny9YmmgbtDNUcUygrfsqVyGBfx263yA83gNx9N72YhjJH7iLTRWgDdGwA",
  "key37": "3QRTvtqhHnhzZSe8ChzDkQxv7HXxdNS6t1WokpFVyE7ZWR2zUcwy2fqaEBCggdSukjA2KhHcSSv547seTYGU1mGc",
  "key38": "3DjmAbi2evHmDa3PHJSQxuLLpXFk3RYJq9G2D5pbgJvoWuKX7TWdazWdaC5YxP62boqittCzrXkUAutmaK2Qik1z",
  "key39": "48ZodCS27JKTHK3bsP1af7geiyrW9jQQWnahQ7yAXEBcn4wTLApcR57FVsUpVsuYh99mroyXpBeCXgpLUXsLnWXr",
  "key40": "t74JWBVKcT836CekveK5DpKctGwT8Mw9ZGSkaTcw8kaBhhgrYAPtf6d7EbLUBXpisabJC38qcRS5xv3bUBUEcUM",
  "key41": "54et2rGkC5vb3kAkzehNoVXMSajzLrgBGrKnm2YU7U8TB2veLRLamd3vW6EfZHWKY8XpCKTx4Eoio7KpcSgryWt2",
  "key42": "4JgXFQciqxUv6RDQ8nqcmYnJx7tXd3cycChU3pHeaXEfJuUULXBUHbnsyEPN5CMYKhdisXBFDyPVsLnU7UttDqu9",
  "key43": "5NJU9QLMz5HwZoq8fciLS4U9RkErKzjNrfevvAZC1hzZxySYSi1enGaFbzzirs1uQcXSebF2xpjy3KqtjbeuEHKo",
  "key44": "3JfZQuEtqYZ43ZBn1SgdESadaGe3sCT54QN7nhfQKJ521yzh9kt8esxnprCbrm9u4YJzSVdkCQDFFd4pnMJFxjYL",
  "key45": "4TdZDGF7MGPe1WGXwiQu2ca4BbV1KxR9BgL8DFyUJNky3iPewXDvjGpBYGNRs2VxhvwMnk3vKGcxLGbJebjtnj2N",
  "key46": "ATXNcgbRb2YE7ijcuJq8Qxz1g36WZgdVsr8ornqseK4skbwPqn8Tb8Yp8p2HzSoHQhbGcSUbZE9X7SuKPZDTA6q",
  "key47": "3jfwaPmF9sMVzJKkCPRAVouYdWGrZKv17TCfm2iQcxYwBHZUrgscAzjC4xE728BNk2vYwBSUWaGRXHpjQRiMC1YQ",
  "key48": "4hn3H94VRJ4SCXXunCAjLCFhjFeWWUm81ddE1KWma6MuQLKeZAGbzE8mgHDB6NRdAkyScEPyVQngV9dj4CaVdKND",
  "key49": "4NTQBbgWK24WvnSZAbUBdyY984nVnndPigXMNU34HNhXttD7pB14ZNyrzDKeu6FtQbKxmfDjKNHPnFiFMaudVgyR"
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
