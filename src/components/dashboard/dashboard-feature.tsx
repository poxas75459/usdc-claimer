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
    "jPcLag1rSnD49qZb28Sg6p6z7nndb29SfUogeLCpoK8zQsiCpXR67RY65D3PFzoHfJNtgcmQjyjpn1aLt6UQAgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKy14D5n7dtkhCkdMemgvhxFuYGnuCEzbLahCdFxN9k62Tj3Rrh9XaPDgbwB81Y9mDUPZ9E6aCS8Tq6DgqeYu6P",
  "key1": "67g1WFfd4JRzwFFpKzSJDWEpJQXtJbiXY74ee2jBvYiMNtf8HdSWquRa2EJM7DKKADkr7W9TDJnaKs3AUauHKvtF",
  "key2": "3PzNqrehqFfXtAH8Bmh8LwELjo3NghbxGFagRP9wjbJF4AbixTqTiAoeQQzS5vNpvfJ2tThnkcuKffFJfaSZB6PG",
  "key3": "4fcjGTjTRb7DibDscmCVQDovDnXH5rEvibPMGbXpkVaKYDoSYih3tY958MgcHxDBCtPoqEWWjagJo8QqJPS5wcuz",
  "key4": "9rwpyNiEGqTSEYKbLyx16U2gz3HESX7XKAdbBAFfcNpc6LQXCimPLN4JyGKG9DDpeEjHJ1uvE7KKys81xcPExHb",
  "key5": "2dQNZDmXEGuKCnZGWgqd6E9wnsPnZfBPwN52JRcrKaJ9QLgho7z551uidMPpX3AViWBDUL1h3gxsxUYSq7uUuTwh",
  "key6": "2879fdUXhUwZUX2xjjVM2HEvoZmxxS8qGFqeJbHyC987A851JCakmp4DUHqWfNpXJbtwGkGmySuRzou55SuF2pix",
  "key7": "5Q4cukEvh1Mp1p7a9FNhjPtdHNx9TpRuR5s8GxGZwwcfQkrqCNtDEoU1fYsDHnruozfC2Mpf9H3NNvJaVGy4b9XY",
  "key8": "onpFjgM9EQzavwAcvdkKVQYrNatbpxWbktfJYPXYu1traQ2Nzkcws2CfMfzN9x1qMy9r7Q8vMrd6a3mxGRypcE9",
  "key9": "5a9bsZgzV9mmU2PYpuGhwfs721Lae4ewe7XnNz9d7kGgfPMuHBSws4GfJArQwGHt3Q42Z8ua6YtAFzhm34QWD8t1",
  "key10": "3UiJsyH7s8fNTnDd9e2z98MzVxWMA9fvQiVmv4obYz9KHdMztT7T8WVc3gffeHpKEfNNeC9MtoQtWhjbdNSjj8bs",
  "key11": "JbFagQdwkXFcBKmDiKcDy8JGvxobEmzj2CjfZQ6Dwsh1xJQV4GTKLZDN7PYdjwCc6U9R6UhHaJxZQsCxMycRunZ",
  "key12": "3L5pf1UFYY72wrg97jiwvVXZxPJvSyu3iXu6j3qdHmqDN8T3ah37Lb6wHNqtYN6mZNuMsvJZSnUd7ZGBiJHvDmYy",
  "key13": "2GeKGP8G6R3HGCKkbqTqq15qC7JS9Fm84cgqScZC3xeK9BtGQbNrxoQ3KWLjAKTHyvKy1CmChGbDYxvnoMsWcv6j",
  "key14": "5qNnYKq7tG2B8Yqtuz888qTom3MSEnTrJYgMEciG3v9E5CUquTTdzVMs2xj89ZFJkmZPJCWtq9d6nYguqnMjRNyz",
  "key15": "4SQ4SMHRwXCrwQtyUr7uwjWdt7Q2Dg5kh2kro9bnmQ8PZFHK1S4H1Cqzn8qbT7v1hkFXGRtzj4DoyzMzL4whQjec",
  "key16": "wpqbBri3oduBkdQUj73Ug6K1HmM5ijgzJB8FtpmZ9oe1vEkVdpwMBw1CpgoTXuMKsA4s7d76kj1g4Lr5jeT4Veb",
  "key17": "TtYRTsqaZNMSMU2fzUhUfvE8ug1F1RXQTkr3cYojQEp9oKeaWfg31AmvFR9JWSEh4bjsbkYoj7u7v8N7ATLdhoi",
  "key18": "2veZmjo41coyJ62nPxef9JfrDNNzSUDb5r1hssn1sK7PR6H6yMtCtMLmeHyHXJ9eWL8e5EkTgCzq6B4GZmokhqUv",
  "key19": "VeVDADFTJFAgY1qcBvvjEY55NZHhtBCuGHfYFAaBgojuwxeQNrCVmgNj6xXW7sX1Wk5Qwtjr7QXGBhf1eaLmGwQ",
  "key20": "2i4dV5am3pYLSuEvCLG2JQrdvzQtDL3wTLHe1NvheFumKWmevTpW7vRCg5oKJeJQQfp6nidKQeSjWaH2q1ArYDPt",
  "key21": "2mbTFjbFNit77ixaYHGuVWJFHBZsPhiwU9BoQ6wHVoJ4TXKvMdhQT9Gjjd8FsJytdyceyTFtV5A3ynQUn2Cs89YQ",
  "key22": "2BgiXAtutzrf7MHyAhZD3KebapxyG2V9czvpdAVwrMcrWtVKM77zdFmBDrURxHiA3DixuqbVLtdcNF4g63oNT9Xq",
  "key23": "2e3DhhrQWUmuJYJGy3EAGuYyWW2N8FtJCK7zSi8tfsUoVevCpUCzXHoHJJbxuzdK7WR4v6jhiK4V2XgYoGMcDGY6",
  "key24": "5ujP8U6Z4khHEVUNUxuyvqh3XJJaWyhRLvpkLJHbP2cG5GBfUdQuEMGFzfEa5hLF5HXnknGw1erCY35z5qA6eP57",
  "key25": "8oduBUnbE4db18h6nhb1BVa781XPxH8d7dYuSdRezwh5iB6wjvEHNxvyauLuJKjGQUah5fZ5hrtnFsM2smMJs9p",
  "key26": "2K1K1MzDSs5LVCJggRRAGmtTYFf6L4odHDkHhydfrFqwNhnAwbsHFg6J5ZvQQbqZYFcnQyoijtGwsdsMeA1kQWSR",
  "key27": "232B3om428V7vgKfApda4kYpmMPbruMAbXWVTB7k25Wb9Ep7zVm6rQB6bi4GQKKLLHUUHnY7okqBct5Up53qrTKN",
  "key28": "5jK5QThXHreMCjoTgmwKgRPjeDkVfpgRbWtSQB65guxd1SwX1wNJ8qZYMWCgJuDmPJA3dWD7WTLhnSaFdQ7pFQcq",
  "key29": "5QcGUiW6p47znNeLhyMMwVLJcuEWtSfZEzvsAVjPnhrfu1taLTruGZ6ywADfq8N4r2ZLj9QTqraubcMKCNkz8nYm",
  "key30": "3GzK89t6jdUhz9WDu5uu9MmrhfJZyz9hu5FkBSxmS3yVjReTktSoWBwiDAvSP7QNgegSCrLDsZtpSsB5n96HsrCn",
  "key31": "3mkV4bwcn52YPHh9ggbL14QbhvkVvJUKtpPZyFJx13EhLkGCfRRvXSoDJGudBc9qvBUSf9LenHpcvSA8PunVgeBi",
  "key32": "5m3QrafraUf1m5YASqqCDjbeot8GWoa3Vk4f7YWLkJwTgjBvcc1ycLCHYPgv1Fufu3zpDxqkygBynTTs2XbH33RM",
  "key33": "51hXm5oaQCbfAA3cLpksc8rQxZiFHDGCmGKsbxsVMfbPrsN5i2zAJJ34ZZ36J18PwZcXbJ6DsmVbKii5pw6zC7pX",
  "key34": "3HbTNVdmVGYxh4tGw3D7Bf1eCBjHLdhuLgK69A8yMhC2KuHVqSnJ2ajx6XBURa4RqUVdBf15kCvhGenf4yyLaFi5",
  "key35": "2SEJGorvmsxQ9taT4iu4FwrZX7rEWfgqiFN1xbDA89tBmxN81iSSGcX3moP2eHt1FQbXfVBUSYWyHsKmm25tkuNv",
  "key36": "4xBrfBpxe1QMJeBEDZKPyKhThrmGHJu749mjyy2fS3VF4xyUx1EPTwJNRKJxshrFS1nsfT6WpiYp9BtYJmRvgkcA",
  "key37": "5UCFr27XVary4gHEcFBhtzYYMnTG7HZ5xnLPsS8pRaHkoY31r3qP2DzToJuhSw9ovWhST5N1dvzKe5KVUEdwQUDp",
  "key38": "5s2tZQHgeYdELudkEyVGPMLrucahaPFmBAmsQkogBgDiKRDVf6BHXvi9essG4gjmdLWAWrddmbsZLeApcJBf38nN",
  "key39": "5Yoo2p8NmXCuTqny8iNGBRtqvce54PuVcQcNhZMDY53daoz5WFxoAN15gaxuetPX8jLAqxTERek4bqfVaJedCmUU",
  "key40": "M6aRc5KLj4zcxSV7ooAk4txWKaLRDNoc9XwhXZZVLhDagej1veJRgzDcLTjgePHBLu4CFE6uqDQy9wajX5JCy62",
  "key41": "62VeeVnjXNVkd8Si1m4Vs1jnBwYvPtzYkY5uCZNL9WTgp7rGuTKwrTCpgcxCAzSvmnFR2Ry1mBJdRmyKS2suTm3k",
  "key42": "4QmJsnv3BsMWjK3uUrdcKc6sy2XrpY4uAAVUJXTZaJrtFGUVxxS8e88qGPMnXp4Lbvh7bGFvFddG7iTLe1LD2bdS",
  "key43": "5atK9QXNE8PSGmNCUHfMCK7YJ9oA8o9XiNaWJXUmY71ByDxZPgdKSrfEhB3VskNKcR7nMdkSyBZ9X5aw7U81fKp3",
  "key44": "2PTBXDozKrps6iazJRtndWiwtoSiBA7rgSjjAxRwYfVYLvPqzd8ZSsScvu9n45NMiuNqfbCLiJM2CEHYe1cUb9t8",
  "key45": "2a229Af7aZ8CcDwohhdUQwvuxFExxauyDgj9DVjWP9My64WMuZwpm8WPEt91ukMKrpKo2HEyyQQPTjXSq2fre1h4",
  "key46": "57AVTgaVvY2wKJx9H11SQKZMtRoVLVe9RYZoD97bP2k8XzbWXBypGGjPm8xoCWaSNf2ckZRSuRNRiLC3AbYfwGan",
  "key47": "3z69kJ2mBE6xgLSrGKk6Rw2ELzoFroUZNsBQvmvPygXBv14jMAVPZ17zRWf5BpWJmT8BFahoSCvCgdWwH6UdmjRJ"
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
