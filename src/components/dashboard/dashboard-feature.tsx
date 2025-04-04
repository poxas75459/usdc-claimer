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
    "5yC1LpRr1Sfb5DeDZ6VSJuXbYyaDhMp4A9YnL95r184dUL3wVqLrSAS8y1LvqU65Y4vqbeYLjvGWdHaeb3fFGkdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUZfNXSfuARSo6gh81wq1doKeidJu5acBwDqwpY6Rs5FVUunD7Fyt7VB6feZtaGmSYaBGH7RHdL9585LUgNULRz",
  "key1": "moK3GcqZseo61CbbwLYN5974b8GXYexR5GWWSm9rp5vDEZEJ9ctYacnNcRCgkxDvMCBDSttk2MQX748Bzr48WZv",
  "key2": "65QSPDHPTJpfmQjDwZEWEJHhPusoanYMN3MR7Vai85vfPDvKBgGVCmEg8GrhGu6sbLosNs14BqPEfu4G948LD5sq",
  "key3": "2sD2cPeNPv1AUNwoNZJy8Si1DdTdHJ7Nhpx2BsNmDgdD1UD7MR4VkbdZw6sqDhEUqa9PzNunouULpP2NF3mwJPeM",
  "key4": "499dXHqMhpnhtpvCwehWfjQtn1Cceor4saS1qEwoHynLdZiqPe2M6Aq21JNeLZds6ga434zzuiNnEXQp6JGB5deb",
  "key5": "2UEFzZNX6YVXx3WKaVpFuw2pNJFqfD12GsrZiqzARUGXqvcFgVp62rS3vn7bHmNm2Rtgw5Ls3LEGEUkx51hMxfkM",
  "key6": "46fCA3Q3mefUuKo3pTgciFYBcEFt9TKnQdJJUe73ACpdes3vWLpSFP8kZ4P3rft87CGVEGtdf3oKzcuzgUow3PMQ",
  "key7": "3TfphLiCyyNabhTKBhZ6hN7L88k4pvHak2XMXpjmUrpieajJywhsaCHcK8jgwtrhrXaaM7Jatq8puk4mG3tkebE",
  "key8": "7LvfFXpwUyhw3cFnUufGWoJVdR7QACsxmBdy17USKjXbxo3ChgytRv3c6fpsVd5StbpEhBC3hFrcqqLkU6JQpCk",
  "key9": "3ruENAPvNttDp2U9DdHjZU5yG1pi5DR8XFeFnzSnUjSZWVWSB94LrR75KSKnsDqeScLSRvaBKYZ2XosM72dWuNZc",
  "key10": "37cWRmc9q5uEucdKfgyDy7NxG6KPnyJ39KEixGCnTbwuJRLJvXc5V7en9xLtnaw8Q3PMNPrCJBQc5aD7Pt3qtrSE",
  "key11": "L8fBB3qcku7WgtGfuFrYvgR3BzbpdmaXvqK7LxiWYoitYTUxSPst1S2jKNnQhM28euJdCTgZhtCsydWP1HQ7s4A",
  "key12": "3onmYTJj4ujMAXtELjdPzDFU9AZ1CGZLBVy6vWdjA9QaCiG6Zq3DRp4WW3J7wasDrqF5f24CBAzX1TirTGUtFUdy",
  "key13": "4dMhogsxvi5v1gYzPBJNgpwZ9WEnX9mR5xBZgqwczVpGkmm35maUjnJbeGqscKYURXAkbr8QEtHTEkXPE43NgCZB",
  "key14": "3zeVcABmoLrJGqnMGubS8TeXiVqhtB9Fy5Zy6c7ZP3hvGQCZ1nZ2JmZWvXtDnUboo7N9jL4En5zTnxxiGAzxnq4q",
  "key15": "3CVLYonyGF3GdcM6qer8HCqf5BHhG16C25v68r1nCNTGHqFiB5Xs7X7LUUSPSNERJSbSAEDyURnMQk6ZMUhi4GuU",
  "key16": "5dpxUJag8CqJcNjTHQoMq1a1jU11TN1L5hdXh1EsCX9bRB1gynptcnZ1zrC7eYcD9TecGWhLZDGpaCxy8YPWaQ72",
  "key17": "5vhLVTcL47pkNKfVbGvbCTcKryfd2pMjxsy45kXcLbrxzjirmwCJ1atFAuhuJpA7S87HsfoD3EHTfayoKJj6JwpU",
  "key18": "3erEzD5eJ7FbPFkqRyg5j23tKcmaoAcc6neYqG4dk9qdxmYsziFe6YKuaVThf7XcrZ5REcYprrAe7BscPEE1dcZv",
  "key19": "5fwWCWVjxDcjJ6dHJayKYnwrCbpsQWwLgdTuDiGGLCyaR1Lmu79smW1UQujcSUDYHueN2ZTb5FTkQCPGqaubChtJ",
  "key20": "61bUg3QRwD5ekGehAKdaY6xSTTaafUKpDEUKvmESLor4FDwg5ecFYwX8QNvWQxqTmg3JBQGSVvfQMx1oSkujKVux",
  "key21": "3rUf9WdXKPrGTr9JgDWEiisJYF5x9Yq41AAcyTZf4JYs9BgscnLVyDuZtxtnixqSRhmTGKwj5ibDm385AxgeC9bA",
  "key22": "X5b8ESUAPNC2FsAU6qm6QoeM3tKFiyPQhv1M3n272uP78gJeo1hTKdcuRfo4vU48wJTAiSbdwBnDhzceydyYSLc",
  "key23": "3dQLJAk5UmXtrj3ZGQmoMWLbDq1DzT9XfLxHGgB7SZSfhXUwNSbEKyYCRpeSD8nBnmareyK1d5Nd5uzj668d6paK",
  "key24": "k6E2coBv76Xc3Yvjs5DuXXJ1T2LWRP5aowxu1bQW3DAzfiDpM7kWGwcabhWYxAQUdNEUNbq3Q3RueGo4tmW5B5L",
  "key25": "3E4tDGHiQ9JseVKBbFShhzgr1FbviisHn7Z7Bi2WiFqdKbFyyYhUeibRM1rUuGFUub4LTPvmjkyt87B3GFpq6vh8",
  "key26": "4axMHG7Matrp9SXWtjZHGeCVT6sAkWh5KbutuVPLEnu4itNWpXrAV8kUoo5SeyTGj3gncU9U43BuP2eppETN6WCT",
  "key27": "xh9pZrTreaTCTmtiUAm489oUAbWf5VZDoK7wPmzPoNQ1rYtCZ8Uw9vPt997MdiDML5K82DBSxsUMeEJ6T3oLp6L",
  "key28": "4L8PenegUaavPLPfHvRcFtEeHoHHJX8p4mnBq5EyACLAt7BUTRNz1LN21fNvqa2oQQZaBSPZnhsNGa6M4JqBJNVC",
  "key29": "4KmLV52VQfzCPxmPGPKcDmqy8ii7r27P8r5ZtZ99oFkwFXtKUEbjeYxWFTz4Z2nW8Umdv9UcF4Kibb9RJdkXeRsV",
  "key30": "2HJhqniyDNSFn6ohk4gQcRxTLdrpFuZeHZwuP8dKHCrad748wRudq8oUeJcBU36npjBtgiU1jFarE4tA3M6ormkv",
  "key31": "3iS9Ug9bj2mBsFfAXrhprSeJgwn9a7qrGjNt63RPy14dSbMpmV7VQg4TKVqUFpv5MyrKzR6yAmUw44XrjN8uKesE",
  "key32": "4wjTRbBaywqkW5XbLM7PxBjP9mXRUXKJUZsvz1MidApw1Rs9T7pS1jktzPAwLSsFRwBJ8GRGsyr5XqPhAHP7idmt",
  "key33": "GzasQ8zbrXKQbLbHzkyBWHqw1Ym2Fzy3sd6cCnmZkwRharfiwRhsBTQhMoh4hVJXRmFyRrepoYuyh83JdiVZvAB",
  "key34": "5jRuHVXqqoaGkszxARbQ5iuPe1pSdKq1wu4BUWmsjBBvfxYXP6us1wM1NFVLo6LM9qrMQ5TCGbjXpX1JUWvS2kMS",
  "key35": "ozow6gUovSuUK6rtFAqyWjdfrDPwUsjn3EPVP946LuGWrqEXDQ2d4pJsT3gf7adhwgpBPeTdQ4eCTV2skhRP2do",
  "key36": "324KoLa3sAnoQWtpgSYTyLCWS7F8WS4nDzV5cYSrKpDZYYZ2NAsCEZm7uACd6c8kyi4hZhQabygtCcNkFQt858vw",
  "key37": "2D2BpNiKMSxVveMosZaypHbLnEyEmQQPav3h51qqr1zmeiWHA4j6xX3uq3GeUmpcjsCCP6Fx3yWRJy1btigMS6Ao",
  "key38": "U8W8XuzsBcF5emSqkiEnunetUAvVEyeUnaYuAVNEZScwzKKvZPsripTUqgQr78N1ybGc54KGozqDrZ5TwSmaL9u",
  "key39": "sZG4yBwoM1EsDzutJMPG66MzPSvGR6aRUg4hKJtPSH1NcuLEi7fvFtdKvMkjqGENqH6U75SHesU7W9kKHMQXKkm",
  "key40": "5WpGwKzGyKnoEzfudEATYN5wktmbbKMK68N6sxHQJFMbCDcujM1KRQu6WJRgtPnykP4BDVEFnxxm2SWgRQDcHTV",
  "key41": "5h9ohQC5187xRZ6zqjvk87vpcpFE8kY8ySpoduAx37Npv5HfFxfMvGJ46BGS319TsaWUHw7eEJW4W8Yr6SDtBn6W",
  "key42": "5ghnkHoY4zLWbPAKUVEhDKBbP3iVQWjqTJRess1NAgEabSeMgtzqFcX8rbrgepxdW8wbC87WyNVx7xeXhM3NzQuv",
  "key43": "35VtRgAtDQahh4ni1QumwriRsu9CMaCQL6t3F9323h2gPzbqLqCZBz15tTh15k9FKNxtZJueNwNh1ssXhLKzwMLs",
  "key44": "37X5agZ3R8wkHJrZbN3yBGaNqt1K69uJNND6Zh2n4K7JULnVfK1ThrcQ2R19wyVCiAjwMSWAg2QcCKfizPwmAXC1",
  "key45": "5d84WAo1hfPq9uXEQFXHaUJzDWwkuKVdy3GoPU724eLwduyFwHMP1Ff32j1S4AtT6iGd3DD7CwvmdpWfqwauDuhD"
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
