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
    "4cUwB4dvdUybhgJZiUEc3CKyacFd6kjCP6pDap9h43Kzq74FVP8ao5X2os9fdodzfEhYZhatrtUNUVvkA648DZ76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6EU9oumjLQrLMq28WsfEoirf3Rg1saeZKKKyxfjjF1sANcHMthkMTmsQeiDcDhZsQ2bH8dJjAx7TfGssbJXg4J",
  "key1": "V3oWGYt29GXkv2csDXFDQKHL1PX86zn35TMYKymV451s12MZWZqSnQZxk4KTfA7wJzcdN2w4TgHumFBJC7KvUjJ",
  "key2": "55KRctpDq2HygnWijCoj42JP7Hn4LFBqeFmRNt4jkTfF2pu81QU87fS7Q7apRUYqM39DtVBf2QZGh9Rxqib4SANy",
  "key3": "dcPLrN1ero59JaecDkBQoammZXPmRvYFyfgumQmj8vvhrvbcphFU4u69UncVXQLJDQqPFms8LETmoMVrpZEhgmj",
  "key4": "44iXFP1e338tw5cGYpcjJPbyHqbu8xFQvCXH1tgSzy2J1Cgmjd8TEuc6raa2aLmZSwKsG55RD4hwiHvgEz3guXtS",
  "key5": "3HUXJuPtPnFgDbD99DwnnUQkmZRjUGardwztPQrN5iAUYhcbLkFEHfjpgs8wskvnUCpuPfLJZJPfMWNiCcca9z3G",
  "key6": "67FWyZGZheHe3cMDoyDabvXwLeybsyBG6Q9K6q8puksAMc8naBL7YF5YMWQmfL3DueqX1LUiqWBHy8grsJLYSyPd",
  "key7": "J29WvDw4Ld2KmK5CPoF55hgAacxP7kbKgiQf8QfRTzk9HEzSDUPB5Duh9X4H53DddrcBtE34GbFsd71vMuzJGpu",
  "key8": "ug5aMcJ4WWoXcc5rtLjjyzWSw5GJcVqupiiazaU3dVMb7n66apFN4eKDwGQoVEY2Z4i2ceYGsGGntDgbjJDrcXd",
  "key9": "C9yWqHYFhmN81dCarc8W9PdUBLWvtpCkfA22vxAmnKuoJsdjVb7BkXMLGvN4f7aKfMTB6KVbbNat7skaHWouLTb",
  "key10": "2eM2P7n7FtDds5FiwTeHBBqEkzyzuTtt17AspXMyhpZYWpd4Pgx3JZkaEYbAhct77X3b2ZKwqzZwVQvUvvj42GdV",
  "key11": "2Gfyb3znBWT7neVP7NKZLpiiyZnCjdopDYd6u2ngjNZqqx162qCQWFcziyppEdu9LuQDGXLJHmU5PPVJd9vcfLAr",
  "key12": "4gVCT7adPrAXLGf7p1CcJ5Df11xUivTAMVq7MJ8utSfZXrAYQbMZotRQQL6C9jVoiwJYm35BCqigfLPcsaPaNpso",
  "key13": "4sBsRDZU8JVCT11NbEVn7Dhs9A9uEq4fWezUDLN9hmFE58XznVu6YnTz2VX2cbfgKe9A1VQfmc2tUsYZVisRE2YF",
  "key14": "4kPaYUpMtLER19QJBtntgkCUHaGsxcY3z18x5Qs4wTDgAQc2su39UqQHimGBsiWiENa7jx87avU6z5iSgZ3jWbuc",
  "key15": "4UWYWvFv6qNKxJ9RNdsCjJHwoAXDz5x4FdnhHKwNvPdpZ7bfCt5pvNy6LZcsaSYXffirg7VUTbRXGMo5kkdJNVaQ",
  "key16": "2MwaYnKW3opodWyhtN77kv7UsVoahiKyoF8ABmnhAXs41o8Hnzk8dXFMt3NPzku4xK7Qz1ACAjmuQBnVsipSnrj2",
  "key17": "4evdywB8CFUVNuVv3CcFWQzeFZrXq82GFsfBcAinK83MMyGK1MstFAisi1BxCTsCAj3ridkahnJvJzwvdtMnoX43",
  "key18": "ow9Xo3KYmKhjnkDZcJNvFakhAriowgcFUKcD6rdVUnGdn6Km5BsjQm18ek6R19pgUBvg2NyD37diME7SHVAyzN2",
  "key19": "2tc1LVMRxVWhCdjtLLEZuM94vMGYP5ZuRAsDVCvF9f29KUU9fdt1NoqyP7eajuEtAMrAq9oiBejduR9CeTE8apAF",
  "key20": "2RgrKWKAekjhHGyMXMwhLCnnUPU77ViAv66Y5pqjpcRJDTAC8FE74q9ijNQwRMF5W6vHvqCajQKz2Ycs7NKEnfEQ",
  "key21": "4E2aFwfSb8HAEmVNdoqdhSspLL2QAyeg43Hn7d7oZXFcDoVFg8Vp8kem5bZ8kGFW6Gi6QjUdivb9jWQGMyDhysaj",
  "key22": "29FTHXxQpnBefpuLG46ZuXiDk7t7veEdYtp7d6sLJ5YN1U7pEZpsGaLKu9Kr27KJkikv6fNdKgcZAVsi5HhRJNYw",
  "key23": "q4NzcvwPY8yGdX6D5hYQFiT1zWi9oxybZNA43GRYob1RnbeYhh9AdaGG9VqM2k8ND7z6Ud8RKrJhhiigy9B5CDb",
  "key24": "FDbDSGgiZvRPrPK92G6YmDTxLditi2wz8FM4p8ngim6mV55dmYR6NsCk5qdKdXug1znjr7kkqVdhn1w6bbF8ejm",
  "key25": "4SzPY8QUeyqzx7a2L5tfaG79bqTNCatviyboz3mdDo7ecBoPXnvpxzsxJR8zLgqpi5okB1YH62CMCJxUX6ArwpMr",
  "key26": "31ijLB7Fydz79JuHAH4764NXa7oaN5mchgoMTpo1YetroqTEs9PvULgLXD27GKqSsfGFz425sYYPyEYeVW2Mgstp",
  "key27": "273tETcUw5NGg6cH5C7ziZvwxygiT4XujovJ4fBeEe3YU2ApNNA8fh2VWToQWpyycRS57tTcRAVvQArKsAKArYby",
  "key28": "4FBA6XZqQA1cArhPssrbnpJsPeA6J54PRXdDDLkgRaTMTKgjfDzfTJq1Ahajq18bXCaPq4GVMWaDphKTgBFxky7c",
  "key29": "2vGUMpvcpyipEc26oHMEoeLxy1Z8dZ56neV2nqT6rZGste9txcjqiQErR3z2x4TC7CybNpLPX85gbtNuyjvvLinf",
  "key30": "54YrJKuciR8JxMA4ZtVdsKJBG9ifrfQfQhg4GH2xmyUSe4Ta8akz3CKosQXhEHBabd6vHo6CoREzp9jfEyeoR6kD",
  "key31": "64ww4C3bUphKdWiZ3RL2VXpa4GwGtLF7GWsMLfewHkp2V2tgh6yUqPAR3hgzz3YarEH5Kk5XKQw7AMjSAKdmh3Cc",
  "key32": "3jxj3yVK4g9ACZzHpivptsgpSmEgWnRCsRPf2s6gd1d8DL6tdie4M1PER8sR5AeMqJFmFJGr9sVcRYbHn2b4rmNT",
  "key33": "5TT9mo7LcHrVW67pRjbDDzU6eA8qnWAxyWvh3TNxfbjQSetnBs2dVeLoBhw4SRmZmwgVp8uadAkdMMh78faK5yhu",
  "key34": "2HVDw91UteLjakSHwtgdd5hB5LcqrvPX94NALcQC5sLqtPFyCAvbmEC3t9Vz2iXKTpjP8L9ksmoXGDwgTATXHgUG",
  "key35": "9uLbsi2d6K6h9yE2Cai74G7ysNvmH7XQnsYoX2cjibqPCJKhE6DEHC3zrMoTomGGYRHkwZ28MkgLBBnyb8jRd4f",
  "key36": "5z169TH1nzaSSRWzrQZAzKhaCoEucEQF5g9xF3ofy2xgLD9hSV8NNEe2MQDXCNNA8q4edtHVGr8L1HttZd7BX5L9",
  "key37": "5snPBig64tthwpfG82Esjwbd7LMGWV9cAsK12mGecGtAPJfMPtuxm6nbBFJEh7CiyihH4QrVfgLiADYtQ3JCGXAL",
  "key38": "86JtGv7co2Dej3PmtbD4oeY4Ae84E6T66TmmDXNZvxgACXMuDGxqJhsQ3KMi3FtBNmbyK2yc8cn4NS8LvQ4FnA1",
  "key39": "5oFWP5LZotXwapEAPQYZqMvqwKW9uV5cy47NQJF3vzRRpD5WsMh8mWJb8dXhTSEUe16XafSquXG6A2FFp6C2FCB3"
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
