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
    "3CKokP7HVc61bsbtLnwVFBCW3xRtcfErrSpSEyg9gmeH641AR6QBZNUKaUtPiRS6SFYs4rq8hp9RuHW2oXbeDpzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651ATNJKi6VHM6XyE4P3SpeDHJUKF2p7JgKFUf9Lbo5kMyd4f7nzhpSsT7BVCSnanmxJMzkz34vVGooC63vWKHjv",
  "key1": "5mUAjxcvJ24wmz6zJc4dbisxpcg7LN69vpodiPmxBv9GfXoZ9YWxoMiio5U2u8FL7pTNuC4RoEc1Bk41tPVQ1WWm",
  "key2": "5z5aDMh4ADHZpzr4RCEstjm9nQBd9adR3QjzJAPkWxxUP9pgJ8JqgwV9YWRWGrVtkHD72vt1rVcyNJRuvon8Vhoc",
  "key3": "62VpTty6EMmwaneJ5rtB33VuknNQbaqthfoSRYMAf7ULgziLtH8GMKhyM9q2XE8aFcfaZRMMQVx7DcD1iAHETeYv",
  "key4": "25rpPZ8fQ7GB6DBMbB4ysSJn2Gdsnc8wevvE5LZhVw2eLAPLoc9pC1Hk4fLNw6A3UTnuDdR69VruHaDMJVJ8Dpmw",
  "key5": "3XbvbRg8nExw8UJd5ouf5i3siKHsHi4GncyrwiaFB8RG1UF9zAmebxaEXr4pRUfXgAkjedgviwFipHhxEdZyoYUa",
  "key6": "3oS5dPtpeZy8eK4cKNFuE8DpDGmkouuVV9PxMBppjz2pMRuWnah3JfRDKZ8Me2rAmNnCGMosfmkppmoQMx3Xqvu3",
  "key7": "3UrYCDo69VyTL9kq1F9arQqNHc4BJaVnqmbL3T3HiQihhxmsPxT2EsvTEPmdHGyUFqnxMzJwC9Yzx9pGYoTpn739",
  "key8": "CKFaUye2P5QV4H31JpeogQbXJgw8aFuHyvuEGtRjRz8CsiYeap2GHf41eVfybsrsfRttfp2znTs1tCu2BEp8Ube",
  "key9": "4qBiYyrMGT9kSiX59Qq8BHm7V36qVmF9JyJcwuXEJf6L1kVAqWuXH6uPuWEU7Yh7kpbKDPvfkL1b9JfyFrLwVTCr",
  "key10": "5o8LYxRRSnromkGTvcCsgXC3XvYdxUtdJge6vhMWqTf478g2zsXHFXdv3Jm7uf1gvmejJBvDKvxSdYjqciuedLB4",
  "key11": "1xCUyPws3PEwiEnHChft9vJSXGr5pWhRPhPFxpCh68DjZocCJ53agXHWg4yiKhUEG6zhQyURBucUBHFLXdhaU91",
  "key12": "54rbidsunqUP8AjwR7foBo3MbEqgkavVNq88EEWwhjMk5mwTP6LYJXf8quF8EmSsGuLABGDCDeYFzANG8E9zaSHE",
  "key13": "53YiU3ubmzwDYoGe3mpTZhnfXexvxLFBBHXpgH649qGCoAfjZvJDXwSR6t5i9kNfEnvVBiDmW3nETorVY4JtRiS",
  "key14": "5hmM6VdVFnVXePMmWoa8d7xsDo7AGG68RQsPrvKYRXSquzD4hUpXRakpxsEjTAGXmbut8BoAcVQG4KXEurhNcQsJ",
  "key15": "5DEK6gLLVxY1hHKH5jPLJxegataTUdy6Sf8wNHZ4hDFgGyYgFzirwMN6iySCa4R2r4dZyaxDpEeeshSiscKTvQLt",
  "key16": "3dnv5Ff7e6YGJSv8xarNNrVPaXQt2Z8YPcGjMau5FTe9LXVEZRRHQxtJ7vdKjedKPrCHubM4zwZKzqYugN9taG3z",
  "key17": "5YMqgnZULpCi8LSfmoDhEYXCFC9qD1QtoNs44kHPqEWA4YEr3EMuVWWLkTgbhCVHiBLoUtEBFvX9CLEFt5bJxGBa",
  "key18": "5fR8H17cFgBsUgNTLJCqCvWjocevNCDcFNJWKfKNmWrmrXPFUMAzn1nvEAEvp5AEWKAXTjWFj4KEbcnd2qF4WRQr",
  "key19": "3NdcX2ZYgU5FCiGhpejCbzPxKixsHUBS7r9VgWaR7k5u4LTewWFeMXgRWzyE7dSrvdhWTetA1Qtr4c694R6LcEou",
  "key20": "53W3EUyWWxNtpRhe7yS4ek9BFjZjJnT94kW3bnFumXNU5SE7qYrF13RZ7zDhSWqKZqMVnyXdc63aEGJyWiMbTrfT",
  "key21": "3T1EHxcewZfMYUZrvjCxLj6S8yLiL7K94vDz7cdcwgNWKwfRxZR8qJPicpKpHs6MSpfQHEZhfsMpv8hLLTgjsG1N",
  "key22": "5cdPxDsSZuRxFwwBFt8MHUefJxe7tonjUbxHEXyHgpW9UYFEQynMd5XQmY6VqzARXFSu79k7zHU7x2TJyh6ieXEq",
  "key23": "mrzxqhj1CMdJJzAtWtNn6S7HvFTscyFV9nkwkmyFGXdV6WB5fhE4WUqyQbKv8fnKFVNsRT2yjDGLCyMtN4KHNUm",
  "key24": "yehPQ821NdDgxRETdByxYFTo2uaGMZepjJEi1MBukAsw95UMZXXkT3vASB4wgwzrBuCJQoqqfHLbYiskB5Qff6E",
  "key25": "58nfp5RD8zBp1To8vkw8cgFaGGJNnHPhf4kngSyvmUHGyT4xiRZpdeAxVUte9KABBh7TBaJNitA8B8VgeE7JLrYm",
  "key26": "3WaTiiTD1jHma3h6YLxuPaH1LVbHMETuZuXdsMaBsPf3UUP4ZwKtLYKqk3v9Zf6BUzZaMJbQgsvDeMXVigFsNwBb",
  "key27": "X51WzB1Kmtvx23hA9PKsgwppsN6gm2gzuXw3iDBGmBJDLn9nzTHaLYQuZwBYEembUWso4yRBtA4QLjFkijEVMNh",
  "key28": "eJCY1j6jxVvcQjAM9dTHH6xiePuHrYLHdXLzvqudbSVwjBxMQwcmeHS1VgsWsy6PmSGXz2yE2PQL4X5cFKXdEW5",
  "key29": "5p6Nst63yxzw2exyy1gMUznJLjU8s38Xum5Dij2oYJxCWviwsX3jKcLzVFtCBwyLDUxDCZRy85RiAzaqETnEWRJy",
  "key30": "5qU6zLqHzZ8aJrWEMNeby1NBoZSZzcJoDRtKnvvEqt2FkN9f1Wt965J8YnWEacxyqoxC1vUYzfktAsD5TjkeHUxK",
  "key31": "5wTx8Vkb5KJVZFiM5v5M5H3m5yWo9y1yNjjg8jG9BzkH2SX1j9sP8jHx4s7hNbUvBDSFN6D5KzECdRgfK1p7TbU5",
  "key32": "54E3nrX18Qv4sLFoKDSKgFTHLCY1NbHjBGpDjhJv4DHesMcPzTYuntPazksfMR9wKtWAy5pNU9krrf8PZDFn4YvT",
  "key33": "3stdNHk8n8yeBy2dJEwnvNFb4wc3gwUaRJS2t36eGH5LMbKT7XZrFyHbM2LRof2ToyLRUC62qQxapE1MspwwSw9R",
  "key34": "gvVutMp5A4AaFLLTDejZvcT1oZeF6iHPQsosSKn8WVrtW5ZnaWFd4sPTqVgZ2Xjr7Pe4nq9YiJnZUnDqje9g3SS",
  "key35": "4vUCRSFRsDiutvy8i2F3SRjKdjuGTmjsmkU9wqEuPE3MFFNo3oUiEbUr8gxEMjmVA5mo3179mt3cN1Kb7UpZTum5",
  "key36": "JfFMX3AfFYATTPD8oRMgtfsbTPNXKfs4xxE32ebYPMK25AyQrx8vjhAKgYtprkbYDk1zw4dGkzh6YXYZ17z7Gjm",
  "key37": "3yTob7x4w36daNZcFn9Pb8WRyxT9efuUSBGeAPt94aRe7GXBAKE4PMw9FNamT9k9FU6GYpfMZwdytpT81RcEFUaL",
  "key38": "nytbuJhkgn2Pk7z2oAJ3r5DFQj4LFCvJpujBjWrvcsVSsXNF7kzHBApm3t3kdwjVJ3SsoCb9ytc3kRasqjodWpv",
  "key39": "5j8o6w6g6qb3PURrn7cZj6dFPiZqHqsW1rsYDfUoayWFnyjKyUUA7WzKLts6JXhP6w4RPjVi1g9hFMRzZCLrXJEh",
  "key40": "5mZyohiNkDDnJR2UEkqCKGizGvrDY9wpp9A3x3k6xu6moDGVSzSbEHE7PMdSoKLx5KPwNHASQqq4GXBeZesRTLbb",
  "key41": "3VXR1w7RYhWWeFBzqNKxwfxbrdqPR8z2GXdwRx7GRTMzUB2ppSyLDLQp1NgFS6DmexTVrkpGtj8Ez5MLsAygPVpR"
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
