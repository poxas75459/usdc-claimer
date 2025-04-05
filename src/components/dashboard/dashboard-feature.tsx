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
    "2XQHVe4BEyx1a9VsUjFdLZF83TbUHmCF6gaBc1GZ9ETrBkDqKMcsPDgE2Wq3mwkyExtUByVxwp8rdTz6gwjmFGo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8xgt8NRZikzsGV2uvqNkmuBP8mLdHtE9PWHua8STgb57KNrDjrevVNmA37DnDP3fW8xxrWstj9Q8DbhZo7Fxk5",
  "key1": "jmENwzpHawqf8Nt5XgH9Di419PkRF3wa76MEFk39p2KNTuDr6fo159uE7WB8M9EwggCuscXFDDdLUjsCYPHVW7o",
  "key2": "2e5KrHM6obcdVGxUkK8oAfuAHjha2gmvweoEBi4XpUo8JNxi4aGRzGgDW971M3WYsjwgL1XSBMGMc3xoYnLT9W9o",
  "key3": "2tnnUVGNjxyBqcrgZPttw8aqzC8DvSWpKXbcrxrKSmryzNhMjTzsZjRdFPT1ErNwp3XX9cpqRsuAwasCLM1xkpae",
  "key4": "2AtprzAAB1nPtGk8z37Hnvubf9QHCzjSypXwWYX4nP52ttrYNPsP1knTKzvR5L8vYHSxApznRZXkvApJAyoSPocZ",
  "key5": "3wQJUaCyLytbQDuGCQkJJ7hLTm553TcUgpWGWzpUknTteRwgeGoFeLaW95nr8DncWAsivMfX49GqkYipEswPZfKS",
  "key6": "5LepyXmGrDrV5n4CPpCkQEAwnY8VmeL88GZW6DWz1bLXMczS3biNDScVxaSMxuqTmkijQBbjMuD4B1JtxtyufK3q",
  "key7": "45LXJijHmktmR4zeVcjLJM8gHQanrAR2yT7xKptKX52vsv63M236MMCL2eugvb7s1kFGX5vy28jQ1zwFFiEQvmbm",
  "key8": "4kLXbAWnf8wEwdMzwnA8jED8PwCKQ4UqyXjzPhstAR2BdqT62bxHTmFiskiMf3TTCDa7gNgWmZXcb9PaxswkH8ZH",
  "key9": "3s3BCeeqKoeLAui9bYAfiuYZgNPMyzQhQgSW4BEqgYKyJK7At9AnNgqkzguucM4vevGTSMVDu5658KmzKQaEGpDX",
  "key10": "wHQ2w7hs5jUEJGRKLsqjyqLAU68tJfy1qq3CuGKPCNJu1TDSHuHUZ1tsxsVq694A1cG2TcqUTBWrSX5AqFs1yWm",
  "key11": "5NcsbtHCKZgDpAwiaTzK4ybFJ4MCgnJjDV9tfzV45URVyZ7GoVRfbjry2mzsbX9HL9iiprCh36kLLQBy8Hb4Z1YW",
  "key12": "3qQRjgLwzpXggcUhTbSppSXVE18fKw7xyR29QThFUf2aTMEASyGfCVJa3xPjy4wKYgGTW5UvAcQ6Cj8sXgDhKX9E",
  "key13": "5R4FbcwcotKbP7NmTS3PzqfFeoRRdWnm1LzFSFenMYznLNYbJNjEP5gNbhXMa9yeQxKDqnKcGvnN78YXuZdsrpmf",
  "key14": "HZ1133g9z3m7aUfy8cdB3EuhEmtLRuWKi8e2NXZKqMzMmPvCb2ummzDJePeUtcCkhMWvwsgmMNQGFB8U8MqtB1U",
  "key15": "q7XTtPvT63FeNoP8CHyWpnTHnNQq96gNCo3fgCuTtzGhcwh5sM46XCBJm5xEWmgJ1mpgQ2PimiiXrh2cixiyHWj",
  "key16": "42B65gDpXC84XPPgeNrJ2LJrRdqc4jtDEs92ugtFn1rtmnffFhRsESAJABVBRmbXroHjZrF72jdinZSiuEBBVDV2",
  "key17": "rvmqFnrEXT5M2SZJjcYMwxMykkHb84rZ8Bdm35MbFa8KuBLfZSKePirQRnNc6YPsNQZJt62aFBR3oHJDjqkHbir",
  "key18": "5Z3TWVk42v84JZzEWdo5GD3MbiDgKcC22reENZGQeg9FKdZiJLgw1iJaR7hTTjhH6u5phzWfQ6Krk9tt61fhLEP9",
  "key19": "5wDgogoPKwEDjs4PSmxnVzMCPWnaNeuyefDUiqNZqYh6dfk2nVbiYqPBMjnrrKFdZr5HPmrhUnnaXoFt1uYXZnvE",
  "key20": "2KTnBmmHfLkb844UyT1mMkjTE3LroEwUPqcwxgvhCtmALwjvGQ6j6bsHff6rwZK46272oxALYeu2s1nZCTLLDpm",
  "key21": "KMEQypiBB5BUVeYQK3ZodbKK2EYCure4APbAuNaSt4gAr2mkijvcZE6VWSu54CkDY6EA2pFeDXkw4QmggG822Lo",
  "key22": "5K6LrGUKPx1F5dfvNzgkEfM2y6LN29BjTLsWji6ossWZWDR3uWRMCxcyCrZCroV7YWFwHY5ozrzZe3H7eGobknqr",
  "key23": "txoZ7ukAVZ8FcPwun5PfsfmPJu4doGKeD9eNqJbnvyznxzr1stJ4uGQkDHxoQgBZyv8nUvmJbrAFc7rXS8xM2xV",
  "key24": "5aVptYi1eDAbs6oQVFtg8GAEsDP9Q964BY1W9L59fcTTYnJ4jXABPnba3iGx2tjxDLjnRhMAS6kbS3GQuE6D9Ntg",
  "key25": "4h3CU5JNPb91sFYG3vu6Rc4F429P3XyghQttRyD8bSRd7rgbjUcBsSWWvfstg15tkWFNCXCpPvcMHbxxfWBUANMN",
  "key26": "5ddd7NL1NYtux1bUDWVXfPf87ct4VMvAVMCqtYZosvDAfnFBRWEWmKT477a2YRbsymJxRYBrgcHsf9fL43DH7AtD",
  "key27": "3p2HgNec5zqKnT4wBRuok8FajCPNAxpsGKbNk4Hz7FK1k8xa4paP5UKvGkCp9W6przd2Rf5853UL7ACsPZffSRRG",
  "key28": "528by9Y9kGRdnNqRAFEgEsBoP2NQ1o76ekNGLeByzQvDuNpnxogoi54xEGcKL3g7j9kJcBS4rLxyxt9KHCLUSWHA",
  "key29": "5LVrkSUcYoyk2e7jmc6gN2baie8TiU1sQbW3xFGqWQoeohCByUNxgbSj4wZdvtg8R5a4QkHvK43p3zznPp71nqn2",
  "key30": "4gK3bGcaXCku6FYnfnmtEgf4BfeyCnu2MxgDnGQYJcNF7pYXJNS1Hq1d5HjEw9cdenQ22ZY5oymRKjSBaCcsbW2s",
  "key31": "4mGgNA5G2MMGRxhjyhknuJQQPM6waFTSTgJJMx3VYgH8QyFU4r6ycCQFqqDKQXKQNGtCKpzdDnWLyBaQrxLJwY5V",
  "key32": "5qo79hbsBHH4BMTsNqbfFu9afwfLE1tjpomdm55Fot2z6cMcouX9Kocze5iU5dpK1XiP6Jiaq3cN7YDTXKhfXmLj",
  "key33": "5ouGU8zbUem9NQoERPT9P7C4TcZxTnKymJjtoB5ZnKGpqqXUtsWzniUhSCUDZ2aKiy1b2DRAPVp4XZiy19DiFmKe",
  "key34": "3LF7zN99cEqt2tC1R94WEtS2gxWvsi4tCznacu6GhvdU2qMQh7qT8grG3QonCUD4rAXxdKFdsSBxaXyZaExnQHHZ",
  "key35": "2XegYYUE5SyxBc4YrHw5CoXGT1p6MJdd2R4UmmJcgTyKRfbifXbgXbftpbCuAEjjh2iBLE2VQcd44h8YRmttkGh5",
  "key36": "3wo6xqoZcMP5sy3i4qfDxa5RBSFcwwA5fDKT4zimSwqsyJdZRpng97NSnsR8eRZRv68MjjmJktw7QJaMQRfTMzep",
  "key37": "2u6jLHGod8r4ryTrYBdBKZipfWB5U1HKdjHnd1mrqnDSsegoAHaWkQcFLWyLdZb9XmS9zxKGtaQs4zdgYwuqJMZC",
  "key38": "4uTaYeSsPcJwpxhiep16D3BgdPiyKBdp6VxHS7fz7Q99v7FRRkvJJwQ1Zfu6dAKCepkXD89bMCVMCBdrmhHcKYQA",
  "key39": "4wG6yAUBoMhz2akwjekX4U8Cynzd9FDRRsRbBz6vbe6TNnbNJ1Cp3GyKjb1p4M4JAvVt3mte7eSzfqD7ssQUm5Ey",
  "key40": "GCtALuuuq3ZuKgF3YE9kTQkrw4KgdZUF8zUtbMkvkEYuC23jP9jEibVs2Fgq1R8uLtT636TN2mLdgnCDeSk5c4P",
  "key41": "2kjofXv3Sen393gTGQDWuw17ewauv3ZefbExxiSXsQDRPpSuWs3heA1mGJHyShjeTr84rsUaPoyNhRMzMoQSNurN",
  "key42": "2SdyzmRxcCtVECphEpaBHCgjiQ2copp2XeqpxptmYFGfMkg6fTXWDoU34oVi4Bop2dihUsgRzQvZuZW93bFMkvjh",
  "key43": "5krykr6xtyUajjApm97uBbTDDhXVu1VwgwoQQRVsmT3Fn7rxsysx8YUpHJKG385B4yQA6KUeofhPAHdEh8C4rB1v",
  "key44": "4ay3hZqwP99oZ7QKEL9DDuUZRogVQ3Ss2GcFVkhdudhQHwrpnsgYTtRdpsKvSMy62LJvGbGQsjM8NRoqzjHGCQyb"
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
