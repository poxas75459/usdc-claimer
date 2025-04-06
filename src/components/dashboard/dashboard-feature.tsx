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
    "2vvg3AvnEMZYWE6drsPYkL2KHRBzx9GX7vHxw53uv4RQ7fwjbZx54eiaJZGUsPJUTec5Wd3H3vGbwgsC3GLsRHqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xAESo97ZiH7PVYSssACCHQhzRZGRNDsPkKeUBrNPt7rqCVeHRDby1g2k7J1yWRWCbNrEYAD3xuJH6sqKdfgqGk",
  "key1": "3nSs5qjsqrwgw6aSApL9WG172KuDHHJN38xexZNjtueSVV8hLWPsNdNPfj6axHqiLwJBzKw9uRuMU8u8geKrbe3A",
  "key2": "32Z3MbSY7JRvyrrBarAbmf7HVwrLN271ggzGSo3TtuWaMBF8AcQYZH3XfX5j7Lr2hCZ6A2XSQKaZevX7DJjQqFJL",
  "key3": "3g3NHnCMiYgzav66cPBTnQLFdmKm8iZE5rryaK6MEoJerf6bcEMFwaD6R64whwNz2hAK3hD2ap6DVt2AdBCeFo5R",
  "key4": "EA6bBznYRw2mv211upUztZUT7cuo4uFz3i1vAjxSuKTpYoRkchFCs2G3fYQz9r7ic7DDA4tHV6U8c4g65yFHz6n",
  "key5": "Tmp5ZCBcZN6Ls9vVvC3B8B59FknmxHNMpffoD79q4nXn6c7mRhDBRVpGyAuN9EgBBuAc7SrLE4S7WXipSd4Jbq9",
  "key6": "EZd4WVvS3SPZ1M2ASfzAs2frxbWWobpbcKHjppQd5fJTXAdyRPQSN1sAkhExtd85VpY8gUs1RGEken4RuS1QYuA",
  "key7": "2Q5iUyYLi3WHPncrq3yNiNGAaY3vrgrvKkH9uQ8qKrMaZWt4ZReg6ZgPaJb4Q4xoFFNnB6feMKBPMbhnbeTsdbdP",
  "key8": "4RMxanC2w2h2bgwGRQSouyEc1MsxJs5JaABuwY4G5yLRAmGdPJk9vamFkM6d5aRC1XrRbzZBXU6vYRcQg9AJXQfY",
  "key9": "58gFrzfVZKamB3zp8KPbBY9YWWJ9WhiLPuvPAvSLvoMAHj9mBQHFWZPawaMTXvR1NFpi1MiLXRbqtMnWGGVUyRey",
  "key10": "4CNzUnPkg6Ep8EGUghCPN6QpPbrBS2diiFtmrKtojApxtCauHVAQVnoztHsLPcX2v54dK8tWUD7RVtdg27PzLvk5",
  "key11": "54Lh3b6YwkfM9K2ts7amMjmCMrFDsMESi3gLXXVDxmbpxEMutvLCQ6qRCru7huKqbiFah6159PpB7nPYMNxC9yPc",
  "key12": "64CxKi2HHpMic67hc6GgXvsaXB7khTKvi6eQJwBaPdy5t3NrpfmqDVJeqqdKuDTVN7gVLZuxn1HaWwkyJWrEzXvS",
  "key13": "3viNhyj9rZarCovNnpbqqVNMje8ozsUBtLvP8BtdSRVCbtwXuxvLSWHrZ8u22w9aiJzugjQRr36n5GLCW8qxWNQ8",
  "key14": "36v3CTD5WsnAo2keZr9xeY7kCAMG5WjjyWEdzxPogxt764Md5DHTkuaq7JCvVip6YUZ2vjVutez6d7cw4TXG1pKR",
  "key15": "ssJzUFrBRYEw26J7Ln5Ci13b6W5M61o25qLmGLXU65JrncijbttdPhjXhb2e1vVjxy4hmLz2HeqHcHFysoQvd6E",
  "key16": "2v2NfBQ7iC2KDD4t5VHx1YoVY7aYYZGBSK1RP9xKsSSvy7xt3KsH1yEawrAQ5EMUndSeg9ZJC4ujKvpXUN5GuAua",
  "key17": "53vTSUPRaStmeKyBxfdjUYU4HgU2xcseTPhrUj4NHhYdpqLBXTKANX6a576KgreTRKXeZvFVCeAmVCW5zqUmwMKX",
  "key18": "5goqEtAUR2CFP3sJtovJs2GPDfG3dAX3Josd4m5mGYBLc3sW6gM6uc129Eet4ESdSVo2kY2KfbraQVM91aWu9qXv",
  "key19": "5iTsUgSyi6rtpUG9XENn3ho4hUWUZZMzh5UGhT2NymVxig3RvjNNpV4vgycLgSh98U2L93sUXosuvQo9AikqDg9M",
  "key20": "3UpUgpDvSqNg1tSDLusKNN4JnRdq4j22nRWd3ZZmPr9UR8mcfT4kJdWFQLNDc7sxRM6VgWmv1t8aYFTHAZrDD8Fv",
  "key21": "hadGhQDM7v7iSnBFx2tu3p1dyHRBw1NfG4sTNRWU5QAoKwDn7EWmCWFoAYBbNGEw18z9ZBQponKPHXKtnpykgwv",
  "key22": "7gqdM8tXNc7kCJECH4ejzCW2bxKYpr1nRQAK28zfRbtV3syY7S4TmNsyzEhh9MDwYD653ibssoxfUoc2CZDvjge",
  "key23": "4pmrv67F3NuwRZoGhCif4hZTT8Zyp9q6Wy7LDuVbcvUhPZahY73dTFrVJUBhAvy76YCPyxi1Up6XRdPQVTaRekXy",
  "key24": "4bY8URXhAETMMWxbpdaE4kvKiN95faAD37b5cmyFcpZgf6h4Ceizb1qmhvu4EE9xysZoa9GkVgb63FQr781jv4Pf",
  "key25": "2Vs7et1BFVZ9NZyJbPUL76tJoTKfjNR4YeHtdPQ77VZkhzg9tjBmt6eG5btrURA7ABJSKihk37sEfh7ou7SmSrBA",
  "key26": "5TovDxFmiLjTwrzZLzL9pkph2BjRD5fPdw5Svj5e2JeHexiQbDxn75dhDRqm7yYcRZoRRwN4AAgSZdLFgKnpb7Lh",
  "key27": "3So3Z2ag9jyDwJkBb6GzZwUtVfGizZ1cLBvUCK3UY5wYPwa4ifzd6E24kp9SJMcapNftPx1jQhQf9aLbYHXocJYv",
  "key28": "2rdxkup2gfeBeHqgY3gYtT77W92ecM3RcwLrk5hX1nYwNWjWxPdRp3DZ5VBnYMfUbRRwuBhMnSC6DvTZuweTYLwU",
  "key29": "3a8LpmW9ExAHhWDXWfZ6bskXUy82BFnrfTJs5T243ShHMUSnVBLTTR19FRX7LUejGobZ3gc1mCJdskoChjxkjy7G",
  "key30": "RRmwxG9usGEr8fxQpyfTfcJKNqRfMDbynuHBYohU3wUW4akmks9bt8rhj68VAaA4ipqkquKv2Q9RTr7oq698PSQ",
  "key31": "7uhfiz9111cHUSzyJcU17AgB4SmaQMkXpHzJd4HN79uskT56aX5H2Pyn7PVGz8GJXyAXpwmkxMfSvP3LZcmT1Ai",
  "key32": "3oET2yD6ZhuHawafyKyR33db8ofBX3WZfqsuCcrP3mP3ByX14AcEWqSvmcbghttgqnShUpumz1UfjEPhzFzkrjHQ",
  "key33": "qLmA1S3vQAhN2hBHvtCMepLsrc4GsT9LoR7KvqU3t2tNMpiidSJ4Bo1QcuTQw4NirLF2kqNyFBesAtxWDVdc4mt",
  "key34": "3K1pbXSoem1KHCG2MqpYbsXsHhaEu3UkUQjcxv8veXG1xzttboa3CG8D5C3STwzqas7LAyw4nyjhW523fphL5GWD",
  "key35": "5E68MwqvFCQvRMTRXm9xb3dBP9GJHKvJvWwxsmZTkxYivCfWgNnwyW6rZrBjR3M5oZK8rKSy8s7vWpjhiMS2jzjB",
  "key36": "5sSCLvP6PUqPCxa4gfoXY4yY4ZLKAwEaWko2ATC2e8yoYpPJYtCK8TwBuiDmhCjaPdRRUnNxQaZkEr9PEUJMgjyy",
  "key37": "3bDTE1P1WLMcqNDDEPG3pacY6QriMB16sGkxJWVspWniGiZy58psKXJ82MBLJUDwurMSFc1g92L8TW2YprU1aLkU",
  "key38": "2FUrGLShtpnFZU4BBmKB9rRqcKsQ26oUtWn7FaC2JZmgEJd3bbqiBLpjafhTYkuo9iwhmnMrDvGqzRkNKBuLRVx7",
  "key39": "3SkqNSRZ2U8Zw937f9p8tYxrQCPktK7SiY1M767pNbH9wZdrpvjKrWFitRhsnmgGvEXE4v6pHpzo7sANNGbX7cHS",
  "key40": "3SucGkMDhiJ52nmPwqBJbyANS7xFPqg55q91qf7bTH7QQDDJHEEcXN8zU5GPuXkMimkqpUj4cLW24jqPzdxup9Gq",
  "key41": "2m5JjjCwh4pR9eiTJ3VV2XnWaNNgjo3KtT6Jfru4Jy79KtWrAgh34rv8N2vffqXsY6m2wuEvfqJfrJwfv27qYequ",
  "key42": "22qiyrJET12VXXJoEQ19EYPHkiWuNK19Jn861gfcmar5TvEwfBMq7KXqgqBGF9YqM7dUKj5MgZCK9ZdZN7omt3mz",
  "key43": "5aVBez2S3e3ryefHYCUPZGKdVyV3HrUbxjaDoC9qtqn4DRB4g8cJH5iwwWNZmpF6KLN5DpH56dbVLUbnRtM2KsA1",
  "key44": "3GFkFUN79sfv8Sk7uXjsJ4RQXV87mRgZUR7g1xC3gYCauSiLLadANznHBhjgvhw1U1RM5tQitoFW8zTfk7YQJSvU",
  "key45": "2H7jaq4LPc4z1JY7Dxu93DH8M9eCsCwMLembqVVzmWBFga3j2tC2Qstmt5ajMtGwyhZNrne7593Lpn5QMrmsB7N5",
  "key46": "5PFgjvYckYKVfZmQifmrUza413kxwfvDc4eUzZNgkgM3bjYnrr2vcQNBmJM11vqP7Cz6NUpBTiP5j3Khsf5hT1X2",
  "key47": "QwsVMLwo8DunaQKhGXViecHVmPMb7mLip1AVetTq5E9rRMswZQsbe9xpFWxbkxLCq7ZWxHtRPePTaZuyW4EpdN5",
  "key48": "4Wt2VKFx3t9ATBAAt2814bNuwWSjcUbsqWbpieCMAHgHro34mCrXPWafnGbQGuj1J9xXXdYL1hJy3tHgwmNReFEw",
  "key49": "3zkmBvQfHybwEJgq4R2PRpsdyuQ7DeMr5LuEfpjhdd3ye5JxonHVVpzzNQMpnRfwLJ5ndk2pdHLCGR8izEBMGE7N"
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
