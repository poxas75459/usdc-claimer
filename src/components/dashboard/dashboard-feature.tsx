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
    "31un3gqXeBXCjFZWaT8BjRDdpDSD6paBLGazu1TSR8GXYxeSdJRhm8Apr7jKebkzJ95h6eVh8ZhawWSCgAvr3huY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHdXw5eAuvqaEfyaa7h8rAmrfPHZ7igXKpfd59pFqPuUNsXPgoBBvAydrYjcy8KXesDyruhKEthxAcT5ZqvKvDY",
  "key1": "KgCgwL3BjrafEc5gGvJTk3i48YturKS1gk4R3oFXnPYm53KG6YdEHDi5Cjbdxaz5v4ezGuJFe7r6Syfo679xaGR",
  "key2": "56t1rtTutsSehi6CE9Nr66paVPwCRZULb9ez44JnxGRG3BPWnaiCXbXEosFXmdwiU6XSa4PucRT9vkFGZtCvVw7n",
  "key3": "38me1wLRRQxFXQ37c4kajpV6i9Y6oQH1epF4qfbkvo6b2Y3Xer21HJeZ1X1qRjwfUKhWYJxdq3mXwEBPGzNbET5Y",
  "key4": "3U3yL514Qr6LpsG5fKBAn9TYvVemPWFk4FfRjoHtC9hrysoqGJT1Szb62PjAmug7FpoGKYByGgvVAYaC2EfRtaWz",
  "key5": "3XM7GAjapVvBxJxp8ZjwPv9MCg7DJHpn8cSRo5XF3qxLnf4GdtgYrjuAUpbjccdv6TYZtoCF1DYPdLpC7jS1kCUU",
  "key6": "2oTkYAG2rkUhdKPjvj6Prr9o9kujMuvueZ2TxDDzWSLN4K2ise8Dfj6yA1MeLXNmDW5uGUMEZpr1aHXgNccjJJ73",
  "key7": "29tvNsygZyCHhoSxBFvMXG6ENfK9BFp4Xh2WojxZ8czf4x1tR5FC8q1d8Y1GGh3XToiNfTJZnFWx5bzLfYWGXFwK",
  "key8": "eQwGf1nnHBQEY3Y3JRwNfeq3Fs6J8AvCVzcsMkrL3XSSB4moViHCmdBjdTSmfo4JHZw5SgAoaSaKEuCdqhEKk47",
  "key9": "hYzjz6UZd73keLkbtF36fcSg7B2PRNHRV6Z9WUaTMYHfxF69WYfx9ssfASpjkoXdGpwzoY3N9Qix2DpNj5WPLPD",
  "key10": "2G9k6rHg4VTYZeohiGvpjihkkmZQLDfKbwMi7TjiTGU2uAt53wyt2hVE3z9bqpNDSi3G9UC5YzVUKakXHua1FtXP",
  "key11": "5Uous5srgAKpnqgKhzqsUL6ezSiMbArbyw7d6JvK4B9uK7nFxvpd8QeXA9ifLsdDkuSa5oCuN4oSrzqoz3ixrydT",
  "key12": "4mh58rQi5om1d7b6wfYrXrLysyNRrCgR5q6fCbWs41HVsVPvXyxmXRX3xFksbogSxJvkDHFh5pC1cH3hxy9kRfRY",
  "key13": "3yLJY1bKghseCNofiGmtso5dYzvULXgZEv8tr74rCV928GepB2tFcWUQuFgZnzV5p6FdDV8kKkkX3Sxfzzpc2prw",
  "key14": "4Czs6z2d6S3HCP3mWnYEjz4HsPz5YGfp9rzywHUXnyT4ShsZhhDPzTArgnK9Gniq3sC7pndZDCg4SZMWcCZTwM7t",
  "key15": "2kRgMgiB3cfcFBmLJdMSjFx7YufH5tdnutGaFMqF6oSuGFw9EYgzTpHmoruiETEQAAYQuvhcGDZ8StxqnBd978XF",
  "key16": "4ZqhrEArAczLqk3bB1hamAfah9JcyvyPUnvZRTGts7VTwMiM2x9WWFZQBnn4gYe9nyts8LCFKWqoCJvpXWgXeBMz",
  "key17": "5iUTc8k8XvAi7Q34pUNzBnua38qTQffrgqSJPU29vYPkUbtAhwzNhr5Cr15UyEAqphWooiXEfMugw2CbFi79tj2G",
  "key18": "61sSY88pDKvKoi1CMLwKUcdAEXVCcsGJzrLysSkGnqtDF1viQw4EGYeGH5DHWzFCtHdu1CELWCdUAvTTjqRm84h6",
  "key19": "5uxpS53ZWURe22deq3AEPuFE1TZKf5QDBJRFJeapwYvkWswxKyEwhvPcGFfLEmWwDU9j3wkiq5SFNQ7UfqhcqcsP",
  "key20": "5zFv6Jo5EmA8w5F5YFz1wdchdWwx8kEZUVERNYdc1xkhnA1RDX1nXdeuXGJZeXRqJTug2EPbZVurDA9NSAoi4qAm",
  "key21": "2oUuZqo8PmDgjVv4wuCwTiFp6hiajnZqzyysUdPrcbX2JyGZB77Y7HxGCCiahjW2JAycfEdaV37Eq6jsSxxnv8Sa",
  "key22": "EdA6hkHxhxzLYsJVupu6KLse8gp29oGDzjojFAk592jSbvXqfj1YDJ41fdrs4FBqjzCdfKx4C4ZsDn71hmMsJJm",
  "key23": "2TA816mHQ4Aiu1sdSd7oWmoido2zostymRXSVGpMYr2GRSphVChnkw5SujLVcK1svtYicACEuYeVmkVHkciKEu4U",
  "key24": "4jvnR881vnzUiqzNNZdLgh5vqcWWvFzeBWmcpfGkMdrtVkJxFPDLKddoAjXxmZ3FdMnQ91oZFySLJ417obFu4vy",
  "key25": "5DUsSdQEiBvoQNgdhk83zwFZ2DYb6krHrjSnJbzmxc88FUEMoDu1Aguqw4PAvn3n6Loo8zLG9dv1E3xWwofVdjT3",
  "key26": "5KSyPQBH8nJHdchR7tw1DKFDKG2NKZ73pC5wiCudEXNN71NXCiQB33npVoUtNf6BTNK6hPj2Vi6WVKmUKoNKVCdW",
  "key27": "nzV7pZVZPYK8YEKdvek7kboxqBoWXdUqXLLK35tgz2Bbc38JFQ6ijW3sEJ1qUADWvw6ewDSueGtbET4qfA39hFA",
  "key28": "ZBGaQWjyjbs5znJMJ3W2jF5A8BA7i4sj4UzPzYADfLY4rqhpQ7mW9evdDKbY2iJ3qJiESYqReiue5MxS8JxsLUx",
  "key29": "4SehcroyigW8UyzLtYqSp8o8nF1f68L1PH1bB2aUeRcNyi7jsfPrzkwAmoU72FWLDeWJB3CVgQtQmw4Faqj7gSua",
  "key30": "aWtnknJcePe7Ez4m3ss4fD9VEhmJXeLQRso5iaz1KQZNXDqnKpdbLqnpYjy6oQwsHBvX34W8aRuGDMd6MTo7S8e",
  "key31": "3LtLUYjjjujsiviyy3VzGxM9sFh3EbzrftXhgcFGziSRhenSjgw1EZbwmi8mqNoLjrQem7QfYq2oZgdqQExcGRGm",
  "key32": "675LwpEjGVtxiPagexDBwkxUc9WPugnVgzrNgVxN27BnSZfzhnYgs6Z2qDzvLrDmgVJjkSPdBXCStS2VPNVHDoxp",
  "key33": "33f5cDBHApSvywGuskaKoNXopWZcmkoobjFj2hkVYvjuhZNQDPrTMah5DqbDG2ZPcar4SC9cpwcbWJNuRy6xzary",
  "key34": "e28aTeSdD6NuawxDsUaTHLG797pZbwbK7fio38azF6b7d4nScVfNoVsPdxk3p8PFDuuAoK5cZp8L8qG5oi92XJu",
  "key35": "28YfEogzuwnfrSs3phFLHdqTXJqGN3UqULqYdwkNvAXXTnrLsvAqrFEsaapvD71eCqNxRikYUmRnmypZw8tZk6ZU",
  "key36": "31gUqSQS3kmg4ymj9iuyZZMaZCdhXbiePekHYeWjhPUPrSGkcZzZi9v1x4yrf5STrMQt9Vmx6CSmoGn1niDbUDDn",
  "key37": "gyq9uNiBLTmkksEiT32Xw4vnk8Dxj89HSPJuDmtvxa9AydG5ujDBwGAZKWKj85edVbZ1YXGVwQT8LThSh9Cqum3",
  "key38": "5UYKhoLYYweWPd1qw6XMCJiLpcGsc3DcowsgZR3ejPNMLoUMU4xBLDNKPsHU86WC5HcxNzEbE59BFWcu2Da9JSPA",
  "key39": "VhXbhxf6TsZ9qtbVtmrJzNUcNBcH4qWHa6YjVZsHHuZTa7tqrDPG1ha4ShtL8EkwtoiSE9WukaHbkvx9vn1v3en",
  "key40": "5hzXdFXwZQmgHDuUJNQ3yVxEzbbpziRkzSQGBrMLVALs4ZM5iMwjc6e7Qa1LnLeaMzZej4GgGc3ZGHpuD9uuSFH7",
  "key41": "5VsFG4syYcqELsqiv7s8LbJeZ666rShwT1Sqj6TUbEbjHFGA727knryYiu9jztJKSQKKpPhAx5siN3JkiJS3JVBp",
  "key42": "4JtZYX5iLRsppPnt2N4F5TZvG4NBoPt5N5fRxunz7gjnwPdbqaNnFLPhVh7tGn5WBBkZxrTUC1vcJrmrDbSfkLhA",
  "key43": "63UAGGBBBs5Wh6zYG7pepB1Wf4jHGYB2jnaM41QSBFSeTfTvHpvcScx3CqreoBdLYnqdqs2hhnh5FetGHxrHgRHJ"
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
