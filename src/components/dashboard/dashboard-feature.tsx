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
    "3iQnaDJR1fYEVE2T1hUKktxgaR2E9TexkFuZwQ1PNRn1m4TEg8nhb1TwueqcnQgLMbLGPHecte96VsHESWzUVYGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLpXvAQZSLDD3v6TZnhs4WHardDfG6UXtq8zYg9zRTnrz8D1FXAsUGTH7NTtZdrFGwK69ozSy5vyELySuGLEBxM",
  "key1": "2oCRTNNwoV2j16bUhKQCVDuj13GUHqdwxJdQkfjKYF174Zdei9j3vbNNp7VLg85jmhXUXeaK8Qf176x8U7pe4Lhq",
  "key2": "2BBMqDEY7MgXeYdqSyeTT2VpwFioQtN6XZNrYYEup2Ngsr28M5z24BPoBQcQA5Mx6qVCwdaD4dJeSD9ukcaZgWEH",
  "key3": "4ABGLG7HwezyGFsBDgJajP8ag4W94WpK8NfqzRgfpfziBagGw5WrhzyKnBRS69hPf9faf432Fbcqj2PHy1KSMtbm",
  "key4": "4WWNcKQrHSo8dtjBJK9TfUDme1o7rqmeXDD4EFb5jL83AMYGpVwmdMktoWGue1CeUEATHakVp4qbe7zxYCsnVvrx",
  "key5": "5ReaUGixF1ykxHuTULxbxVMPeztJqTCssyvuVmkSVgpRUoEgBgwbmk1Fvaktou99cnhGzRe2doxUM6iXMGjuq6rT",
  "key6": "2DMtRQn68fhHC74k9vHBHkRaWYe6RqFcFhHCVomBDdtSzQynEuQY55MvUVSe1sQ4kwxq35s952FJvkZTktGAEnbm",
  "key7": "5aXUtefSzHsnwFNFdMJ8ZVuFjQUj8FNYcSQdjn6SqGLwouMy3QYHW3CrZf45rMe3rQuSYGnZiWuZdLxFg43rZB1D",
  "key8": "5LA5pKDAMEU26mePpLSKZum4fLYhZM3n3PeQbTJGtaWShva2TYMLdQQybUNqaFnFSWHaYAQNVHboArpX5bx9CCC1",
  "key9": "53yxLmTUFseZ4wtEUko33rpkc7i9P3xbF71QYvX9EoKAcdBh26Jkm7sv6rZnPJXwirha4hWjGy9wC1vujs5asczN",
  "key10": "beGApgz76bZwjJQzz5n9Kd8ZGjX92Y7Xe5aZverXf2ks8Q3tNGV9JN2jjoKHt6M4o9TvHP9u3GM58JKmVkb5stg",
  "key11": "228ATKvwRJWewtV1q3s3ZP4Y94p6sKYnE2cUseWUCpg6xEYxHoNpA1Zur27FHsaP4viTuZSReGtzsS3jHxrs6R6j",
  "key12": "3pMKedmaPBiRnPWCkyw1CTYeG39A4JpeoYxoa8DBy7FtNUCWgiWotNX24SBv8thBKkBYrqQJjHyg3E9ycg5cWd5s",
  "key13": "4r2MDgLCGEJaw3XVSTLATsVfKiCBLGN9m58GW8E3kewFPiUnEWNFHZKyjKJtcFo47A4w5LrKA8M6SHaZahQnQ9sM",
  "key14": "3UJaidbNwEArria3LT46DEpkv6sTsM7UNstLXgX75yKk4qtJUrbqzCMRKb3vNNzCRj1VMrs7X3maT3fqKmWsA3pG",
  "key15": "38sdCeo4ft3CLHDLm2M1M6KaWjYkWT5au7S5feGkpfbnyc8HjBPa1WBduJPZXpxSGBJTrWxoRbJiuwtwfq8yrXZG",
  "key16": "5vD5kHFkJs9pNX59ZAUqxSt6QVvf6edwXRckDjfoTLMN6vYGunRERZJc7D8kPZ5otC72PYT3acBXdXiBei2bjXmZ",
  "key17": "WFRqxLmrbvnvHxbmh6Ly9i6ScP2a7Z8nNSTbK6Hu57t3NRuTXbJfRMVXJjzxnP3jjEgakiXTqeppeehY4A3qbre",
  "key18": "5myuDzq5na6BJTUd2btzjYoX4inoZ3va589mohXQ26EqG6CRXU7hsCdurvXJFEB1xQswqhojeUsD3eQnGR5ksFMV",
  "key19": "3RQ5Xuq9zmrrXhaEqRHEzBF9prFskR7WeGq6637cuNZvRr87cuoRSmmU7wvyALpMiCQQEW9XxasRg8MmnDxEj1ph",
  "key20": "5z4mcVNBaAsHNwAfs6ZEox9oxZvZu1JYuiqToxexWCJa3hcEebpx5WxeKp3tooJJfj3XV2dqCTyo3n3jhhAZ62bA",
  "key21": "3ciWoxiWMdnkHVcdUoqLqo8S4WFf1B9ZGBcTswvZgnuGuE2trF2E37HxQ5mZtzEamdeXidR7RMXA9L4xxyjv1Zkb",
  "key22": "2wqZE8bUX6edFprXGB22QhB9Hw8Zzw5MvkrXtyAaHSUoMZ1m7rbPSYJGj4ddRX4znrG185hFfWzMEbDTWfJfRcNm",
  "key23": "26mueNpVPqx6ysRwzBsRBRUTnaZB4dnAPyAspHSN9aDtKpBBLotLaNbKF1qf5EJ4fJoeCTjPy8MTWsvzuBVvh9Jn",
  "key24": "4ni3x4UfCVjqntSqAfGBNkA9CDrfafTQQAKqd8THNAaKRLReB2SrJPxjPdyA3mmmKceoVsDjc6MMqgHyN7ZhzqDJ",
  "key25": "2HiTEJScmGr85EnD8efyX3ygPEtfePKza8cy6V3fJMUVJqoPdHJARhhmUW352Ds2PEziUDrh5tCEsthSEwKB8BQt",
  "key26": "4nTJSoE3k1DLcoDGRnC3qbBPCukacKirC6z5jMCZxndHjWeCickdiuSkRgzvrmqioKJvjp6RQ9T7E2GJPHwFqCM",
  "key27": "5CzWXkiRgpi1orNqKsuqfqiGDvkD5pGqti9WbNHWQT9afvTNrx3vMdskvR5rZzgazcxPwFnNj36PG5hF1qRVtbub",
  "key28": "3Ww2aMEUdGFQjZ4QoAqEyQExrYTQfuwaAhBpk2uUbdwyycL6bLR1QNWNcttp14pyFzCsHJ55iATJejJpiX65CsCU",
  "key29": "2U3KySRSBUQg1Jv47uqNN5LbXm9EUMYkJYCSpHXTvA5wpusTaPK2PYLgsR3n82v24eUNkgwEEkeWei63qvwfKGN7",
  "key30": "4weyauBhfxZuH3ueKq936DNiiZoBY9siGj2cpJ3wo6fAx8uyPQzP1fqAV9ZjsrfxEdXNF7PLBCNnD16Siy84jZ28",
  "key31": "5jaJicz4VyosyhcuYBjdYRDPep6ya1f5xACWrp1NeoJnpbtxNRXe7QioYz9k6qjapghjKGsTE4boAWqQDuJPiTAA",
  "key32": "37AtJDnuKLcZZCJ8mo7KDKGVoRkMMsNTPSTQ9vNHEvPxCUsQbdfbEZVtU5vJcoQLjtkC1XJHLqtxayX8dbYSsQ5U",
  "key33": "4hJdna3HXeFEoPa5FSmdwA8rjNCsS4uNHDcThDxWFC8GwhZhvgnyuQYoeot7Qr2W7E4rxYpzS6jGtJuUKHL51qa5",
  "key34": "2GDFz8RzAjogiFvBbso7oadWZcTFsWerTVxknLGPPwY6G7JhjYRHp27VEUQHXD34Jt52W5xJJHTdXEfunSbRabjF",
  "key35": "2tHBipemNsBCGr5MXug5rYbsFohVuHs5hdDepw83GCKYf6GgKWhM6yPBjBtWPjjUgBcmsLgDMB1qUxAurGfrF613",
  "key36": "2Nq6Um1FTC4vR5wJ4BCsghJM2rAB2EKR298bpmfgipziUEj168ZGzV7NspbFq4wT5uwUqPKBNFNWvXjXPtobvkCE",
  "key37": "5Nro265AuDRYbRFhSQWW2fp1dramFZHV1sHME8V59XJ6dV5tkH1uSVZGBo8yakkwtqWa8SRSDsrxJQA84QwDZrw3",
  "key38": "4dhxixGRWKTyu43SYk5dTWXvbwSZuNK2Vb83YGNNm95zp48ViWvKLaWA714kbhvhQhUPDXBPp9UBwSjJwnbAvotM",
  "key39": "5JLqPhDpWgCU2ZgAohrx5CxXfc4F1BMktiNYHz9NuEfU4nEygiWgXwQUxwbwxvLB2iNYJzy6Lqjb98R2hkq7Xxch",
  "key40": "65BWUkVkAHHN5H9BQtdW4mSJGoz9Bo2Z61bHN6dXUijPQoprqDKoHe4hfHgQerirqECLNnjWQGSJg7Bqkufqs2PP",
  "key41": "VjxZkCSAjCLfutdMyD5CYMzZTPfuWruqZuKqeGFeoxztsTziasrTEEnWjSA63HvssM874y8B69aKwHco7MtzqP2",
  "key42": "QdfNUNJN8ZcAiLMCQk6VcCvTjZ2DLdDVYxcd7WPdMZLJ3q5ziy9hVzsoMdwL8rjuFCHpTUQjFCow7gJojiMmTyT",
  "key43": "3edAnvnuk6FcBG9BCmnhqdK5UUXyx3fpTxpUJ6nZqatEnDDD53qRmfLePBhaEzwbrvFS5cE3CVW8DdurnjtfrB9s",
  "key44": "1gvYhB3UZFJqLTR9rccGLmgVCNTUjPcwatSFGMonPaBKbm1hYLUgybtkTNErW8wamPPefc22okTRFVNuUQF9bbo",
  "key45": "3nEvNR1M1eqD1oXzRzhw2Mrsak2QaUtkUgAjP1LMXbSwuRdtpcmJ8QPoLCGNr4xoxdLQ5ARJ8uTFVnTr2N9F73JL",
  "key46": "49HqoczokPjMEruAM7Dc9qQV24bQ13xWUgz4gxKVenCujZ9ruEKXPNNgQHMYmLboRQYPCnRhKZCDQPsRuVRNQyk4",
  "key47": "2NwyKKJT2iCTCGiVyEuXcqFBJguFdWt2VqX2mcWCRTJk5otbYJKEDRuWALiK9yXLzEacWdhuveYgbrM57tT2cbyY",
  "key48": "5Bi271HihiHqjJkNDw2rcr82HuPpBNLAt4ue9MNAVUF7ARnQqpq1YAQUuDxEbaAddc2C4MDTMGsYxMKwFTTXtrau",
  "key49": "64aFjbDwDC1jMtxVDmAjfGVMmCLVpuLaAe6ppr9QfTiN2HhpysA3GSLirzpTqTu1L5Nnc2fj6QXGZ8MHuSxoWYNo"
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
