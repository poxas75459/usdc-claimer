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
    "2rMMmw6ybtd6xp9ZQnMT7EbmoisNZCNJM53J8nvE5TdwEmTp9RbE4FGoriCb34BaZY9Q1kQM828guZMoPFqtxmfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEbVsp2BrjewYZ8gKtjthfHP6ahgyzdwxZ6iXGMvBbMK6KqytzAuTtofP8wqerHyHCyoHi2q9fX8H1FGwCPQRdn",
  "key1": "2Lnz2oXpwhvKLndRwkZnbjrqVf4vUupecs9cNFbd4dRSrw8cc82228AuH5btASjfUadpVzGUwwrRavE3Ba4DDLYK",
  "key2": "4gJXVTvxcpLJaNjB479uH9yU9KA5i12LuV7UoqFkEf5jmHgWLjdo8SB3brXBjFqLggRaAzQeEZ9qd31hSFjoCct9",
  "key3": "3CTj2z7tw1XiF9ZVYVLC9GrAispPtpAEuwC6JVquj25VLhGGGv8YJVUhyJgneueE8Ak8wssV2HokRSm7Ppyp7DbK",
  "key4": "4CJdBsE9ss2Up9dBfz4ABj31i8Z5nFBrd5JjqgEEhFPRyT8Mfynb8Upzwmv1dJLqbVjavkHxWdbaHHW5VciKamfN",
  "key5": "4Pxe32TSEzWs8b4XWo2yjPNqJZksWimqJqrPqfvT2EYxav8iBetgwcxLV8qtLk6HFNDHhHdqYvq8JddpF6jTvHLM",
  "key6": "5CVBqKHmLQqWmvY8WmAUmpRQu6aferNih5YfuJoz1JuXCmWhF2wma8pNjViPige2XeM6Cm1HghApXqUE9CKDoXye",
  "key7": "3y5C5cvhBbJaS5C77aKP4MqjNrY3v1qJE41BFzAN94Qk5kndUWZrWdHbRQP949eB5kniZ6RfWdp98sRLyhhEURsf",
  "key8": "38gecSmCfSKeYuHw6M7yZrk9EHhoFVvQkRSCEK8CvLbi4v1wxb2u9sdrxVSj61Ee1o2MUrPgfcSRftLs1E1zXZqY",
  "key9": "sZCmgcb1H2TKi8rRRJm9uNrwK6KcqBziExsnQnB75wuTVLAHHC5qMdUUwrzRAwFcHB35ptjFuR672dE2sr8LmhH",
  "key10": "3p4vNfEBTfhL2xCSVtZYVqJGK9Xshyf6UeAZMNG68WSScUpdjMnGWCPVUyE6XY19Mzv1mEJc7ySWxXFVcMoRo3QF",
  "key11": "696dj3LJYcJWkVz4xdqoRZxrCinkPUmS5794Ng6BbetKY9sH1zbcK4B8KFuBPjXgbKAZmSjhZk4uHEDrWHjLFw2",
  "key12": "56VDEmPzG7SwKdj9L7wqJGpQjWbW9xRLSnM2FXz7ST1J6GLQB84myLK8RRzGDqE6TjUNQmkDyaUBTmh1arheSxgP",
  "key13": "5nxpN97UVa3J4KvCkwHvNYcWUVHxtSmSFDetZBvWuHYGTXTAvRe2xaJ7TZQ5junJmYaPj8ARP3ySArjXuVZqKoVq",
  "key14": "2VtAhyUvmomt7giiq1dNyoh7Tgd2KdqfKTp5k8YKNehhC262dcf4w9PWTkrPPJ4GAbtU3igvpLR5Aq7cM9TrcJjv",
  "key15": "4uFhf6txLx6rZQeXXqLZYoUGWrstTJyJv6N887xGvvqnxLaHQk5B4n3VeR3cokxfrftgGDJa6vRVRQKr4zRiFEAJ",
  "key16": "5qGSCiL5gjx7xBUdYf9oWWyd8HLRgNCoktLeZQfgdp18bbB6eL2TRdVTbJYpeL62qcDVbAcZCAUrQ4GAfRccCMSX",
  "key17": "2AoVFp9f8rcvN5SCjnU4XRiw27jcCFLEEP4zudH7U81yuie3bBwEGBt384DZqbG2yQ1n3HLMcMTUqdg9YNPr78wR",
  "key18": "zECUgwkJH5SyJQhpSepV9YgaE35tETtcK8PgEkAi3vG8Wv5RTw75xDno48BQTgYdnwLc64FgvuEA7JC3g3JADV7",
  "key19": "2U9y4ZuMjvdvTZeSKbv9kxVYg9MMgXgbQX3cujeDDBE99zjrH9P1xPCqmdkTpoaz1T9i3h6E8UfqbzvAay7Lw52n",
  "key20": "4Qzzkaqoe9aMzoE84DLUcF967B62QPKyN3NvznxJzWgmTfj5vuPDcjGDvZhkVfAuNRetc5VXWKr9WStFuKQGEcfK",
  "key21": "2FtjKvcSMsEJTWb7n8ne48dbBXZpQTjS2PmhRNEDyaNw1ZPTzzHBJe1mBNynd3aSA6BgDU6mFi5wd9sbTQShQTbV",
  "key22": "ngfDqkTiuP3ryzuSd7LRSaey1z2rofMjCpsjLLvR8CCYXNaXNL3Vigm49LJnn4vLBXW16xv2MpLhb3ECqUmJwXd",
  "key23": "5UJD6HjEXhhEDTgV4qwgfXz9CbD6dZKq3FMXdVWRtCNhnppwDqMRv36NxKmEN5RYaN53WNbXtF5eVDxkfvWTDttH",
  "key24": "3ajuRQLoWYc6oKxUU3U1GQNnG25Q1AcqKQMhYQGQrdfmsFu7txvNopagbrd1qmF7ucW287z1K5uhe1Vwgwvs4R86",
  "key25": "4DFghcAZFocgGo1iAH5Az7NmUUBMjGBEMfQeZn91T9jgPvvNMtEtEttJKneKPTVLnTfGqUtSztfzQG7KtiDRAMEk",
  "key26": "5CL18xBAJFZrvcuUZKMXzh4HcPCKeqdC6mADGJtej1NLy3cJUpvnqto1VssKMKbMx5STXVV2uLRYYXcTgN9Rk9Yd",
  "key27": "4VHttXHR4nnUEhnN3ESzf3Dh73RGU4orMcuDSSGEcac4hbnPecFxJmTfXH5SyMTPHTyjPonLjggRKuQXH3nipJwk",
  "key28": "3nQwoeLeBTyv6qtbFuJMUKhETLXrGPY2jy8neRnzTRgSxJKXuvhbnDtxg7A3FNy2D3ZGrQqEoMZDJ2yi7kntbVDH",
  "key29": "2TccU7hRGyeJpiwZV7P85GiqaG7QJDXPyxcZzrmR6qjbq3H1NuieZM5cZHN9woeHm11Xx8Vfb6FnxUMqFq6ci5sL",
  "key30": "VbHxseFbxR5FN9SZLGURUjwSiStiVCwn8w6JN3gb2bzT6VAGnfNq6uqcPUjQRUBQ75D2Q93GyVzX9KoY1jxQ6ct",
  "key31": "gk36dDPTY4fzZD5zNoKhwahKneTsF4jiPH2K7Vc4kVm1hGybNu7kMg1kjqBRwYbxXwEnwMqAnr8RQAicz1hVqNy",
  "key32": "4wfK3r6CuzYiinVYw22Witw6FFqWrCfFWhTYuUgskJXHcqyxrXnmJTUbcdAVPikN6MmvikhJv7d5GNFoTHaGEjNL",
  "key33": "4JgqcaFewFXSXeAaUHdsv1eR1oW27dgid61m8W5w4jBDyHAMhYDbo51y976dr7Q6XPDszCXx91fR6CCFqt3aTakZ",
  "key34": "2DU56VZF23TEdgULi4ZzLWPB3Hbhtno2KgRT1wDMYDrBaMeiuqADFBSuVETqGxH1VTfkKiSS9MEGz4NVL7KKzcun",
  "key35": "58UmFMVF4K6FwsaVjrG5zmrhC4hroxdkvDtxLD6KSk5rVgnQkoSTFgoftMR3As8cqatXvhPE9NjnqUD8N1s7zZNj",
  "key36": "2Z6p3z1KJnhCJhgbGcJuECTnQnERwyLZeR6ZUXq8eh88Nu3bV8Z8YLZZKMvDYKqz22hTsGgFCxUdMCqG7NVk2Vx7",
  "key37": "3LmAZ8pGT58T2kEgJ94TSMMc5gxffp1tTycwnYQn2JLEVf35gBv83aVXeKhyA2fBeBwpgNUCjUFd8MJn9Era5EWk",
  "key38": "2XBNNVx1mwwGMNXESDxUNYzdxFvJV9JWE4EiaCV978cExyCwPdJMjiYxawv8rUnyyt66Av4wft5yfoSaqxXreCee",
  "key39": "3eHm1Cuoy55u2PYxhQizZNsgBhqq4LKw52ZLJJfK714puKv6NpoYH7fEAGqRDz4Gbe8XnmMp3d4fxk6fbVpBJd2T",
  "key40": "59rFoz4CXRH779kDCdspiuqJySBq2oQF35tBbHZdwbNjSarEiYhzaRzSU85Su4wXjynLPJN4R7Uk6i1Hr6SXYY9S",
  "key41": "2xgq3y1rpHLUWd7Cj9bKEm4aoasf9KPTQF9k7ooKToESdQAmMuoK5Zq3uxXc281ojBJ6pwMWprWBz6Sn1HTDcAam",
  "key42": "5BX2T1oY97ddwxbn34w8huoYR56pXYovHwVi9ugn4qwDjjNR4nj898ob85opMdEWHd8vFL4tbyFBeJ2AxYENRdF7",
  "key43": "2F7PAdLKcXubNzRpYGCc2FQousB5vKMiQC9oE3ALifXmrnKwmk8U1zf6bfRpH8S9Q2XpxwfESA1TbNLmq9cy1VoR",
  "key44": "5TQQNEZPfypFtUtK7jDgZiGD6Hqmh6WwNZEFbUegT5SdKCB1Fq24wzzLpsicVMbvptVSPLxjFgYMJSNrtSYkxb4b",
  "key45": "5xEHTz7VW8PeiMRUNpGuexghFPzz4kS8cYx3fyRs9Qm8UKk8NBLfG2wX7x897EiryjMGx4fwn6xY7xPAMYDjRXVB",
  "key46": "2uJFZBLsmizMUuchB4sR9aAKCvwUCX5yHFha197pJFuhg6x11iXB7h5YWUcJYWuiYVPatFYncWEHACchxPMxcGEt"
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
