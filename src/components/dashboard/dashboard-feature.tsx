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
    "iHhw3jBzk9JJD5NkGd5WsKesVZy37owQj1nJNKGA2hB9ewcCod1V6H2T7jcnwHmNjuHrREKCFyQCkF3odLi1oGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCJppRdMEtuKPFNX2GUtstuocXjmxg3JDvv5HeEm7vYojymWBPjQsxQpE6sd8iTShkjG7rEa9K3ohiKKTVi11dL",
  "key1": "2bjTzozvRE9vq2N7GHm4E8sTABWSNg3STbNKQkgEQ8b7HvJC4WMYQFPodKYWqFLpgkvBv4bgVXhyiTRZZ8Ur3vTA",
  "key2": "4MJdkrumg4yJ4HjcyvRDKpFakWN43JfZvxLSuQLR9ncmCs4nDcnwabCNRw2GYLgRmHLtG3GtxyyLpW5MZETPUuqA",
  "key3": "35QP4p1XpUqt1CHbSD2NRaU5pHRRCrMPfvds7ZX4RBhQsQiBe3UWbn3tksJqXz6TgjskYPfum9sCE2xtojRLbUU4",
  "key4": "5WKVNHQeyAPp2mByCYKrGg3kvTw2xTPuPS9Q9PnCEsWVxbSBdXXXcaK71aqcdEP3HdcMKbvPwbMbtYYuRCSJ2qjt",
  "key5": "29jLUYbbX3rJ3onSd1DD17BZiGHqfgVCaEAWCX1KSicQJe2sL7rfkHouQLPMCScA3ivJC3TuJTTAb7Kt7nmKidFi",
  "key6": "34ymH8HpJuFX5eAPbA7QiLFxU8CfGLfp6banxvD69EyJLxdDXfjUHh8qze17KhcPAa8xUKY1ePazEgkLijXLn8sA",
  "key7": "4HJf9DCShkyjwVdp4RcRG3EWCZgb8GDhq6UV7qWmGAwWD11NrziFamTzQp5qZiKaje2yHnpA9BLiSNpzfkXEkKC7",
  "key8": "FYKxtE2L8TH1yXGafZekLgTgynS2BMJ4taRQnbvcCiVJXoaB91sGWjgXkPMqKkxn2tyrDsjNAQ8aXFCuSbq5Dow",
  "key9": "2qyTUBS5acy9n7Mj7SwbaGCKPXW4h6SocEot5XRJjcXtPkn3GA5s71zdKeZXPP6KRL4a6g5Hu4s3DiGnt4cvw3vr",
  "key10": "44fmAE3hYuZAmMdpYEheNB2SgTXfKxr9Ao79FgtH4u6BbsCZeGqnvkLcERfdYukT5pQ6u1rU5CTejEZqJZRjLT86",
  "key11": "mrxKPmqFBMAj8HLP3PAw7N5stTeXM2FNJufYC5f89j7SKCjqdGraHY8uEiRTjqZupqNN2nYsa1E5CoGAffUQWB6",
  "key12": "24ECaq9j9GgG8wHZoixp8EJKBaafYYi9cojUUzTawZjgc6ZN35FnHF7sMRVJ2ryGe4NdhYb3WZE5gm6nS8WCEiww",
  "key13": "4kpfwvfuJDtmiahmPbDMBepWMLtqLewSipqWYPaVBMz1rq8gt4voeQ1ofSpcJWtR95txRJ8z69eZt5vaTVLYSEm8",
  "key14": "5334bmd1GTXHy3CuZzHAzTZuLWJgjVfF6ZRhTL8HJDWFaJGgTLX9YqbJgZAzoWW7zpRLsNn27fRF4L99orEtg1Sm",
  "key15": "21vNj4LUN93yEp5qeCFuELAhpWWyXiQARZE71fGQJjz8NfqvJzQGGUB6fNu37uZ7W2iaKLgkr1GhhG5HAebsWZLS",
  "key16": "zRJNNFkTFz4SCseLqFVfFcPUfFCBufPvA1q82ijTumv12Tn98mbc4CeXzLubzADUuNBeZqHjTrH9iXofHjhvb7b",
  "key17": "mijq6Eik7mgHcZGEGSqzHGaUKKPc6YiJ5HtZB6m6RtHqrhBp8wWq6bpk3Fwk3BxRK5JHKRCxMfxTdCEgja7TiJX",
  "key18": "59YpseAvjyTWKEgmes3ByMXvYRJ78YaZWks52unug2cC4rjyQfL5eyn4xPMnwg1QNkPujYks9gVqcBF2cUB8wgqf",
  "key19": "2f7D7MsTgmnzcHwR44sJ56CKqUGGAGPwR7TNpfYj59irdcsnm6F8imYNR5YdtjBZTEM4h8wiwc4jNXULK76gPwjJ",
  "key20": "2GaBpmmFB3VNEam453LvYzY2FfJe8bgMj37cAZ6wCVMHgLtdpw1dUQk8VgcAfLcCysoThmpYDUrFCupzvJS6hQuN",
  "key21": "u4tgBQ9UzrGxM8iQsoqFzR9U6QtMJxMbzkecskzgfKTYGi55NZrUibjjTfEpdyuDqkKre4iyjMbMCQ8JW3i8meZ",
  "key22": "LHa3hakyrL4XU9PNuGkbLh66xpDUof4Xr5ubwGcAez7cgBf7xxkcZfqmvH9xk5xHHXTMsk2raPC1eLjCfVgECSf",
  "key23": "7WnxBJuxDuW7nGqegd8aBU3yoxe9Xe48sc7NqKZyQvSELpztJJvHZqDwudwGqmzwN5fWYQM9YiUgJ56R9vr4fFi",
  "key24": "2bBrKfAHw2sMNWoLV1XmZCwfH6RpGbxv4dppqnHxdRB3wQhcquFNWHPTMCmnGWYMt1pcTTMus7WLnRoCVc4rWerA",
  "key25": "3naZ8MwkAN8QkoRuWp294egCTxLJmwSi5J7rX1q5Sd2xgymaqNgS4rjPLPBX8QHSZhw5h1gqYKNT3Xx184QhtZt9",
  "key26": "5tXxKWPoWk3fCAjmYAYeACyug6BCy8Bc9UzLfRDLTQH1EqcnyVPAKKhJX8KuAftrdSSfvmsjaERpsSeLgjn9pfLb",
  "key27": "3iGcR3BziBoaJdERDZrnGD4CWbePkW867ZXzD5HrXSpM2h5qdVKBRNo3Xs2mVNA1BACVjZSb9bcHNZTr1f3zYJxQ",
  "key28": "Dd2mGEwTrU23DeydXk5qAFfNeHmUHTRGJuzeLW1bgxxdBgxtZokSVkbauxp9HPfasbpHb73PTqVq59FceduMAdu",
  "key29": "5UMYhzqDaHAeZUbiF6tZawNSPwNqez6KWWSCt5HMLUMhrkQ8ycQzvBrBJvHKFyZbuaiHgaxfMYp7bK7MyPYzhnis",
  "key30": "4JVMNyGrKNoFVx2ggR4vzRt4WqPtoPBMaTqxbDUs9mBA5DJYM6eWyqExraZogt3Zo5H7v69ejF7ths5bKZpVFcNG",
  "key31": "4GzYcvMcSsSDoqzVgadRkSmb4tBEnhdHZCuLdMnzLqCnivc2JMn9wH7Lt4ZZizfTngQA1EtMCjkYRS9qa5u1yHwG",
  "key32": "vEy4jJt3ugT4aThbTK3Lu5oAwyNfsHX7JxU3XiwF1C8jiZsxRmQaCbdwGHfouNm4ebqZxmtDcszx7vfxCxXP8vL",
  "key33": "jvV7xAs6BF5cxGqGqAmkguckCFVuNkEcSrsnzrcvBywPscBJmtQnFEZtBe2ADMtgS35scR3TSRWMLBzsTuCPfuZ",
  "key34": "5wL5sMQQWudr5VwPq8AMvCA7Vdxfx9TZE2v2seoHuKj5BPMFjGTzVEi5oyfue8hQfxRFcYnoUPbsAidViyPBs8iu",
  "key35": "2BqPSgudmnmfnoSDA65R9tPgW5kBav1zXTpvnF4mW3XnX1D5EwUEu7gS61tqHadEEFYL1U29pEWGxiz9ndktPGCz",
  "key36": "4ZoigxkUVGyJvFDtTnyWrN9oqqm2vKh6NL4gd6XArMGHzj7QAr8m7UyTaqnuM7jsWESF2p5knRTYgRhJvQkmpfAy",
  "key37": "4YwxS27TGgUYkR9bUpsciZHXQNwEQsPTLFSn7XcAGeZz3LAWdcJKQCufq5kS8WSBKykoqGjgYGT7gzqCw4ErDt7W",
  "key38": "2kTsrBj6ueaRvWBYHzWtBziGiR4YuKwsrr5gB7oDF7dxvJXXep4ghzKmjuzyh4jXwA5EXQYSDbFhfYHhGYZGkoB2",
  "key39": "5QjeCVjpY2U9fZwz1qRFGU2kefCVnDX5uUBEPqFqGJarf9vfQKKSy7kEYmNjPnhUM7cHnDPTGGgTjpG2jSiBN8Me",
  "key40": "5gWeVmKjeG25a6PKhmPWYEwRkRNvuoyX6By13NNBp9vg4ES6fVMxtP1LTwnbcCjRzYYbS2icX5vTvWzZXVK6WBQe",
  "key41": "BDXqKenjopJtPsT8rcSFu2z6Cwobw7i2ZTF3AFWS7iZMkABWubAktzwTWhDXYiMC5kKu47kp6ufK76eHAfwDGSi",
  "key42": "51YssuAyy2Nu8aoBi1ZY4e56vxVU1W6Ce6aG9cUXR8vJBM3cQ97rQ9TLLcW6ruFAJFPJQPhTnJQYHVRSQUbTM1rb",
  "key43": "5CwNkXtZQJAmS5yn8e54cjGHRXeJz9hSFZmp7XYgfESYGbgjJiV6tQRLK6mHLXQaXRT7eRgBDKS1mcnjHAhJJF8J",
  "key44": "hKa4XndY8Qd8fafdFHLVB1YKJrBaKw4LhLe3tDL2f7KUvqLZd5SSVDciVyoMwwaaseeqKUqHjdX4KhfnUFCY98s",
  "key45": "4kWwJkTavBPa2FDW6izka7CcRnRE8QhtLADHFcQAUkHVyHnWQgMs3k4pbWhyaedoPq84vRXiXLNZU5SZe8dGskXj"
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
