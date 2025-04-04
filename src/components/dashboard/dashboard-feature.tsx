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
    "2t7QmN4aygBGeQAXdf7SP1YYQ776RwrnqdqeGuAo9zJ3ELddFM3iuKsnazuPJMknoo42GASSiAEKoK5N7Eh8Vd3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtQvq3VafTFcckP25Fd4uE489Gmg9bv8XXVFUXj3t173EKtTJuKSuXdbSgNcZAn8M1ck5GymsHLk69sme3gKT2G",
  "key1": "2rH6ZRNLGhCBzHH4sSXtXoFyU4ERjr5bTKnY3P1u2w322mL6LmvCHY6NyqWXM3TshQEUu5M8FfGaZZQq39aciezm",
  "key2": "p3edSYgHNiN7oF1CYbUpvXCLaDdNJBpRPYrC8o66KS3CGEfq7ds1cKX2u8KkFqJEiVPRr5S9mVJwQoskmC1hUW9",
  "key3": "4TkSc5hj2YWMYi1tLjsrypXAvMQi2Y6XJkfeD7XtHDdEPJT12uheh7GW1EsGFwViUGLCzDkWnuF54wfgUTDa1DrR",
  "key4": "3yc7LksiUewwU7TohhghiqkszAd5RpiibEHci2AFWEM5EKXVXNknNpPPS2dVHGHaXH1CbBJnQvWc7r4rzFvniqNW",
  "key5": "N35CYS77Q55LbwoDx9gs289aBw564yAGT8oq5aGoyE1nvpvN4nLhtZiz2TiHwfgj8EGatKPmvDZVyuaqH5Jwat2",
  "key6": "5CsNmQNWb3JEa8Rjz2Sv5FPckbaRu8Kgu6mEj7zkBukju7wywuLoxY3V6zcvixPpuAUqf7ffed8YqyGaKGtSfuvU",
  "key7": "53qGCLNNbYH1sknxHQ95gzry8MtXhQfWY4Byk38S1F2E243RcKKZKRgCNh2RcUQ4iAvtFarSP722amWphNAr2GM6",
  "key8": "3uZbcw6ybfk7sYTJqizNwwMDojEnQRJMxi7JDtpxmdDqjVBb2ARv8ZPSeDEKx9gGMc5JzLsssGdq6WD4w6hxLCzp",
  "key9": "4tPwJGcRzy2JteyWoCyHv9uYcgf8K6JADsAwmfDwadWBmBcjaPubKPKSWSVt1btA6KV1fwSkafPEXf5c6hKxbSrC",
  "key10": "3r7P3W4jShyKohYoMgD7nQ82yDRNXjmNQAwW4REBYxJgnXPz2fZGWcbznuw9qqr4ugtgJxF3R1B1vjJCZ3HQZcFM",
  "key11": "1FpojGW3C2JFU3aVdHfueCSC6RnAnR3gyYRec3CshWq8r2fwN9QWGg5tUSfVzndoSvPnsiT5FDfD4AzR7hkfuEB",
  "key12": "5VrYNvF3dNk4tdF8D1YytT72a5nyqByAmva8fsnoP6RTKtvm5jSeRhcbtyR61WX4bZn2fgkokBucBnFfHft8oKrz",
  "key13": "2yh8obSR75SAcZjHTTB3i2FkRoxK69Lv6xijK6MFVJLGbSP4poMpHp5wfPX3QtvAa84sLaRLBbVnTbZUVfLx6SqG",
  "key14": "2T2cSp6fRoGeZ5rWgnKPC4548ASoN2jUBn2nj8sULD3EhCbV6CLfEmUMKiDxroGN8v4QKPf4RvNCYd29LJdJ5jbE",
  "key15": "5WSExCBNc68YnP5a6sSy3nC1UDiqk1nNdc8i95tc11mfG2vsGeoa2UPVJyi6ZSU8maXX8a66voU66neJYD6bzPNp",
  "key16": "22LFbXpCB5vAJJvrJwGGnUATz819whnQdZXBkSbnxHd1dxqnyrCiQ27VkaVxyBN52WLcaygQPrj7C9cfqdpBC3eB",
  "key17": "427Cx1YuHJVDu9EAaqo7vwdQStdzeoc3X9JSa5D8pKtcCfKivdWivKZ9iJCta6LmsiGdzqFiWN5Sj7ouzk3fbnrh",
  "key18": "4R7QLqYA67Y2rEuxYUhBZLxcCTY2t9A5Jt2dd8b5MPHZENBEEuRCU5GZjbCqkpyzaq7Wagba254txX58DnZEBxw6",
  "key19": "4h3VwCmtUrxVrQhRkscnRmzBd2iQcBKmogBLgM7gSpmUhKLq9jKWjfL6vR63G5zHosuWYydwLuysy2Ps81c1Lgat",
  "key20": "2DMAcVPn9GgL2cydhsY8TEvSZWEb6cij7xRqcMLXugSu1TEUka4UdEqARgPU1ZaonAZ9wSWXxNY6urXmEjV56EQv",
  "key21": "c6AAzs9XWuNJQqDfc5DrQKk7apPSzZBrY5epjQnxEGkS2K1T4uUTJbsffz8dg6cWJ7Puqaq98SV4iAETaRyBFJX",
  "key22": "28NL15ndiHtVTPQgLMguV4HbHQohW2TUbUNyKK4rNjLgQALFJxKKhkaYY3csEoktujgP37XcD321srfzgshuywyP",
  "key23": "67eDQ1czjyd5i55o6YssrABCWtJrpVKsBQuZardKhqBXr17VeAh9KcLsAWBo7gnNCE57zwEe1cEGrnyTntVhuW6u",
  "key24": "421twWMtR63SMN5XrS75NUq773BxhwEts1bjDEdqSdZcg635JSgeU5RGn4ZPMkrYLaNaZUPGL3qzakU3CnhwuQqA",
  "key25": "eqKTCC6mcfjmuKhGNt2eVpXeEXJQHQmSosamFjQCnjTEXLg7c5FRLbSCWWufa858EcCn5GxAALinMSrfkUgLDcJ",
  "key26": "4hV1dqQAqrHDqMPve7FHUxSsbSfb38PS3mFxgFw9Cm29cqZpQffzRM3o1kYMyPiQR2CMiMPehnswNSgmGyNUcDGH",
  "key27": "2SLkxoPP772NHpmAdqRnf6HReJcMEcprc3W1X2teX9XTxxs3DiPRRy7WFA63hTzWBM4ZWWmBJQQRCBNHRjDU1Qfa",
  "key28": "ug1FWPT8ZaEtqHswfHNJnoE7cgT4CyA2ZxmnckWMN1SHZcw9XtzDDgBwDpsVLWdGBJ1VNqxBggM5CYx2bjRuCQP",
  "key29": "22LAW1VjJ9ada5FAYoqJhyMBaNn2LSSfyhDoTRHE35uct4M6L8qxzGwCiwGbQj7eFyve4urUqXf4efTjJmYueAiJ",
  "key30": "47hsnSddx4MRr4A1Qh6LS1AtkmGS3yyyC3XZKFdmusqBCAvKSxFaqMfhgkd2XXwQoMWhp9RmYne3rijj4aVZsDd9",
  "key31": "EkqHAtoQPQE1jcbB4C5giv6d2KxG9g3k1FRxnYwnFQ9HKDcd3kiKNGCSecFoVvT22nZj7Jv944ZJiqo4UrmgPW1",
  "key32": "3rJKvobe74RfZhgCxqFpBcA18VAjaG64Asr3UcG9422f35CbZ8AoqUHCS9GM1Edmf6EY2m3kc3znNjp5WhV1yjGt",
  "key33": "bHx5zyuyZyjNCTFiEQha2DtEyjFojHkTa4HWaRuHA76G3mLpYnLUvbAXPcSEVPV6XcJLLGpS6Se3ucWGaYberfA",
  "key34": "48K1q8NqGEk6rA4MeNoA8VRDM8q5eHeWwEa2MfBsEgpeyjY9R5Pa3FRVBHve1fbBBrFm7eoJbL3hD77FLBddomYe",
  "key35": "29BKFgqHLVAkKgRy1FoUB7ayjLafCSZ6weFxTGfbjUVtSFNDvUUcw8Xa4F34YwN1VjedjtR4PbHJB795eaJAtPiw",
  "key36": "4fvgSwCxCVdaw6KRuVcWReCjYeGU2m3xBZJeLaiARZ87Gvak9yPgcd7RrM4Z1BeJYdszSn5Ey8XpnqgdFgGbCAcb",
  "key37": "33XUM8ERwKW3o19v3kC3rfhSjuNHoYxDMDKhQfPwXNnUc21R8aDMvS1vs8LV1mxgUWVTb8k7zV6VBcyrLobTJtFe",
  "key38": "3hwdA7VD5aMbRNgAs8HpXgekPqtAHmNXsfE8gSWJj2uwWfZENCQtMDLfX3ccHyJRhs3TZe9cNZGu5FQZUj38yStA",
  "key39": "4h6hBrWuGhHQPFaGRBSubGBJUuakC6gnAChK9ETLz62325FtV6cjPSNda9ruYtoXBnCNcSSH1ChAMENSMgW2QTYg",
  "key40": "4MxbWZLqUTU8AnxEuFsEzXwwocGGguAYhmHPY3AXkq8LeexoomK6niBNHRQHR4Cj4nJNsDiJvegtgZZ985N1n7yi",
  "key41": "1hw4ZdsE3pEt93w3aCkwdeyLNVtvpuNyTxtF8XKGScukbQP52eLDYuNEsmWPNYPdtgwRbqikAp9DzEAPBnGRiMv",
  "key42": "5t4KZQ4XkWsroik6V82UbLnLBVtXwb9FzZz9QDm7ShDYz2xdg5nvG65eqyJL4A2h2DZDqj8KLkQk4Se5w2rZ78wL",
  "key43": "2WGQH9j22TdzWjM7Bw63HKhGedcGFKZ85ey4t2uvneehuZDU6dK1ydEJXBBJhdoDDQAMRt6inD4zaXXKDxDJmjtN",
  "key44": "1246C3mWY5i7erabn1ovdeWTk2eGvTsMTb3BRuPD6FAhH2w362VhMKpBxMRe7P5GZ4d8iTtvdewwAFhjGR7cAYiS",
  "key45": "2wBP9xEwdnvCNKVBtHjF8qSANghwLq4T835bwwqLfPVjbb3Gwg88qeMg5kM1mohgfANbXaUf5fbiUQUEEzg8eTFT",
  "key46": "4V8ra2TX7qrfN4q1rQZL5KrA4Ch1v7JN8GN7M1EV1j1FBn5sB46DFR5dLKPCZjcB83saVT3HYUUZ28MYtWH56ZMQ",
  "key47": "3Sj8H9AhG2feoMYdh52s1QNH21gjcmAwyiTZpZkxaqihZWHFqmMuXB7t78dCCZy4ssSeVZqQXPskiS4BXbdpDKsj"
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
