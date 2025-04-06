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
    "87KigarxdfCCozMeRKnSE5iZAMJVz1gG3imFtHp81yjNpJtw5VhW5uSaJs7RBaDRvdFdKxSyuSbjY97BVaH8CFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqkVvVscskn5rcMmDpEA15XbomRNxXgcsxsTKmPpUt4MbQqVKGQjVs39Pmd6swmqXkLhm5dKvNorxgwvviXrjkv",
  "key1": "5xoL9RRaRNxUY6KfmXcnnTn1i1awifrM9c43PMo55C363j8UCDA9xBVMurMgHmhnUPh7fiPa2EQ4YnRfskSaHY7n",
  "key2": "4yhnwzQSxc2JigNmnb1kKeMWkM8KmwRGYyH6jEpeiapAk4hNBNNYY8uhg69rgwrE2o6CAmEtyvr1RpnkgwvimZTm",
  "key3": "2igAyDn48mqGPCzbHVqYYZCQG4WM98egd3rnds6KJrfr2vwNY7nXF9wdmpBecivU2Xyz6wMKBjEqKScbEVqEputK",
  "key4": "2uhC9rsL3rhyYLEVpDstTS5GcMpJqczw4PxzebU28GkumRbXY2TW1jG7x3mQgM8KSrTLTHr33wStuRtUYUngwfda",
  "key5": "2T2tGxLm4pt5ubuV8yASxpeoqYkCwyjjUUQq4NZGwgP31BCG4rPwE2eDqAx71nSjZmomgE7wrLPifpnHpzyQgCZg",
  "key6": "G5bpJ8GwvsYVn5P2air5fo4Y15KSem2Vpdwq54HFEH1JY8hUrAr9KJ48SHnGdKGJJJjVLHzUiQKd4u8ciz7rLxf",
  "key7": "41ppuLFKZygJnQdREwV9KLzAfFZnEtcgKLSotyppaoaYjgia1X2Cug8ULsQkzH9gBWm4p5pHkkgUq3761SfGvZbH",
  "key8": "48WZxuAYwJBmv146nFcNoxFkpmUxY9MeZdPUTq9KgK9LXURZuozCCDaQKtz6gkCK5FpfsHWWfFX82m9KcCsbLeYX",
  "key9": "hAh1QvXf6Khq4u4yKcpixUJdSJKHSwahKosQtW4VqqZfNFH1xyc55CS4fcgR4MVDQfUJte4ks3PPeMmUEnTLnsE",
  "key10": "35xeSdPaWSiQtdDAV4qiESz4yiuKYjvA758o4rCMcd2vmU9Y89Po1AtmA3Zv1c7d38Z45nKfB8Zhy6tjj9W3GC9D",
  "key11": "4rFkuKqDBd7FeajEZAeh4cXCiHsEtnbhdtHwkC9ULVkubmBEHTas3LgvhA91UoZxz55DomXyPWe1W3pQmiMajaoC",
  "key12": "3R1P3QJeDCH1EvbMwmhMMfkgCJqPP4hsHtUJ6PHyvruGNMpec42SQzB4iwWGJz8WqzUDuUajYnsJNGrnRrwery8S",
  "key13": "2QxwJNMbERTGNF59AHr8u8wPJszMehCDAXfnG4HWYPb8dTKXHwwWHf9ru5gkUedeoGsdrFfGoU9GsMWfBxmJ399b",
  "key14": "63hcAFdwPKtnF7oc9iePXkmRRuL6cG8kF59XndV6CpTc8JURg5qjRYZkHDgFeQMKmwvyCdGm9E6c1zQ3bf7TWBDK",
  "key15": "Zgdb4AaYH62EuyQGkSwyEsDoiEuP1pqatRxfvgmQ6sBQYpaNuK64o1PzdWwAGUHzCaJx85RgPjgBNQTHo43bPyn",
  "key16": "2v1EC4FEFjmUvyTebswGa3N1LtcUfg9d8PtnnsJha6HKwJu5eCVpLduLxR1LS5Mv4m9kpprTJJZWdGimw6czjjez",
  "key17": "66Errm3EMyUxzkwHxjRe1kidHDZkRPrtbj5euWecRdC2pyF1yo6yvoLcrcwUbXtemusk4Qo6WvwzDcig6om76J1y",
  "key18": "3kHQ7drUkauju6KGkfWUKXNRxNn1aFiSvANHmMgZqNa6F5wa4adTn2fr1LvunqiqtDMoNpgKJTmugQbTk9Kus7t1",
  "key19": "4gwPptRzPBbZiTjLLDdG72azx1JFPEc4oXKkvZLN46r9hdNpFXCEJazBvudRUaYVDmfAUaVtMxjgUepAue1FsroB",
  "key20": "3KQUQT8dhJhid1RpYufoHZ6JQYRqFHz7UbWRG12j6crHCaZD7npfgpVkWnumgr4x3DTiPCy3S4PPY6jNMjkRG9Zs",
  "key21": "3fNcZJreQqTBFkbVNzmLafXxJ5ZuGA9SVVY68oXhXwFFAhLBbqcxNad1rJScFmrFXKpqeV8DoT7AWUvEuyep5s2h",
  "key22": "3CdzYR9rxcKFZryyQjfedoqmZmyDtANqmmLMn4bU5TjeisBvKqZLGdoStuiDLF8Ly1TJnXMeR5hwNp7TF8X4yXAe",
  "key23": "5nMT1Lww9G2294Xc11eP1LKimaEGH4BKNXGgtHGvgwkN427iU8oj3FrLt3nk2qdabQRFrD4QetMhgrToX5tNxUAF",
  "key24": "3RQyFs6bpq17gcwKGaPaF9qxFr5RgSXMK7Qh1GAFZRuJNVoC2pZTyRWZSDP2AuFaswKpZf75CAdc6WuAdjJGJeG3",
  "key25": "4Re8of5JxzCtiHgWJJxMojDk2xU7KKcNgaD6hYUK6bHrrGhkh5FYjThJyr4LzX3ywPiyXzXkmKDj5SvnVxsU9CUd",
  "key26": "33rzPTvSyjHmoxWdFbJXfx1NhVkeDjworouysUyugwa9ygtQdCF1TtKUr4jd83jBCwdNN8vnEK24Y867dikXojqJ",
  "key27": "4areKpjHCTUGeyRsZpqBQZGxNF7uaRrfeS6LTMRrrS2VUm5bkciKRaPS3JGaPeN8cVMHMcqxeEudXgDjeGzUfY8P",
  "key28": "5Rk6L4gNYeP6rHT3JiokytR8CtAS13ZUNabs5K4evs1rhU9jny7ppU4sjnKPXMzfY8JM8yowArmTn83v2ZM7TYRR",
  "key29": "4rxscDyPxE3mPtSXgnt5BBohVVeKBkiEHhPxuDD8uyZdJEP7jBphjvZLGtZF22qsPCWYmK52iodhwNio4mBvVnHZ",
  "key30": "rrXU9w7wtdqzgL19YBdL1qDnkoLbLi3dPiwTbkUXZHs4ckX8uPrgZQyDFYfZSfw3pormoGPCW9M82RHcxLd6des",
  "key31": "66XEVPzB3KABB2v3zeu2SVE42BUHcsftCKPJjDC46BZ5UyaJCG7ymPYgz7JNWLbwvkHZb7gd1E7dt3QwmD8aHwjx",
  "key32": "4AAM49N3EsP8CKqcD6mxtdZYq4Y3TGQqwPAb1ewMsRFzYVp9RZfpaQiDrj186y6vi7VLp36ZWrGupiNaEp7ixvNd",
  "key33": "ZtPH1WT6pSgs3Wqs5QDnFxqXuf32Wxr4bdPUZ6cmojQc6FnHGdmbGRPPz7sxrL7DoLj6yBEShEhFhowBGo9H6tn",
  "key34": "orJA8ZHzNnxDXcbDqCyM3xAfoHyADLGDVySgaMjzMtaYN8ZFoZi9GwNL9ZLEeiD6CULk2ePDtKCwm2Qb3LcTFgu",
  "key35": "28ZFSj2JG5nUqY7HKdFEMs89PJPUxUuaWvKT6jXh49HfJ3XAVjBAmL77y6YGSSecqkxH1WK1SjB4fKUodgknh4Rd",
  "key36": "9CbWhGx14dq3ijEMkDgZu77YVAGbZQpECXxtNKNY4FyK16J1qJxWcgY9NoJb7NxJczUyPZVyNVaDqtVVfo911VX",
  "key37": "5tt58kck8XRuJ3GETdJ5dbhn79Q2LPxYSjsL9Q551QgNGNJfX94ZXMzBitoP11LmjYKsWUqrfpnzKuoZSMzYxxER",
  "key38": "4D7CHY2usNrHs98xephvNocTxFpYdJWPEAmhDAF56JLCCW91UYRMghp9FRxJSkWXBk8xrAq8vaqL62R9ib2jWiuf",
  "key39": "3aMEnpZ4uaiiM3GhuFy3Ft5NraK9oUmnSshMrMHb6ieEZiLRdRCsjZgeRfsYwisiN83nBfkMbyJjoBFbPR47E7NX",
  "key40": "3ZcRuoBnV2VZLHTQ4YPZPjU1Z2ULjSnc2fgUCGYbdxmLz4VMiXfiZRcSEWNpsDx5RqEKq79apKaWrboEWp3KVhmv",
  "key41": "3ryH1Wn4cLmKsLtiAuBn9co8BpqiQpejwQyQo5B51vmxuvQZKgMgxfRRYeJYvt9Z13XhYsKiNUCAsZLKXtc2A9id",
  "key42": "BYa3FQrRLy4pLg58MdoAtcrRvnqX1oRT9knoQWQhni5QGKqGZLdqJoJ2C8xp2cXKy1GcyKNsiM7tgxdFkKiMgaP",
  "key43": "3ycpP2YLgF3yjru3PT372LLDtC4wcpSJTKzMBjoMRizs5RDCC9ytP4zrRwdXK7Lh5dkkDhUcsSufmfMuA55sr6Mc",
  "key44": "3fiavKPDD6RUwNp9uDxyefYZ1r7EqRAXfMeaJTxbCcKvydDEhr8mNwZaM3kGqV4Guiu932pHLxNXXYmizLauAfyz",
  "key45": "3A2yKq1RvEgfu8M6QkaGNf1y6x9PvinJgryaQtLVa2Vv5biTsE6ot76HkDNMeGKsWcbo43G2VKyv2JGKXkswhWRa"
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
