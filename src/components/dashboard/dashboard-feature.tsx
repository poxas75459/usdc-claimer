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
    "2acHMrzJ3GPEuqnrqGFVamBT7Q1tWQFkJ9fJoMt2g1t9beyai5Wx8sYpKj4MCDowBsEpFDiGCYzNLoB6pGWoFL64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KLEmq3hC4j6pmD78jFLTSDJqWDuFsrAkqaJZbMzHFXpwBaThqXF878kJ27v24spTEgjPGS4TeSFxq5fyRPZSuj1",
  "key1": "22uC4TB6vYUxFQbJ1sy5fxSeBz1QW4odGVCLXcxLDkjjA7zDis8kYQkNTHVURpdasacSevAX68qxmbtYLL3c1bTb",
  "key2": "2xn87mkTcunkmYxPmiQuY6SgqueabDXFU3DhpABDrt5PnxVoKTdXCsL3WQymiiTWNuQTsJ8CJK7nPRjvmYjGnrd",
  "key3": "4qWNBE8jZ6SUchx8G1cNU1M6TKcERTvQSfZfjZmdbAsCS2UP6Vr8QzDw8dL42n1c7ahnSBqzcxq8dvNvHCpTnUBw",
  "key4": "2eCtuKDkiRtEXFrT1SQGS1iwpcvuCiMEbKWMPonNsWDNPSGSSidCNXDazkqbfA7XSCRAbt9gi3MzvhD8FkgUDQxc",
  "key5": "5FdghwrYtQZayh8btQJdq6mXPExzs6i6TNSmzMnerc88pcybuiizXzagiJPtK9rDp28iV3wbxD1CBYJBvwVY91EY",
  "key6": "4XWnRt1u4Ae7YNEKiA69mEuXakv5DxNGZts5VmzZSAkkZvGC6kxkB1oQN3okMeuuUZdziLK6JSY7HWDQpRbHPmXV",
  "key7": "5xcsih7J4TXKo7srYMj2oiaGX9ur3v7jZaXaJcKPTmhs7DUhSztigFwQJpELGTUHQRvm3fadMD9gd8DFsH58NQYx",
  "key8": "5v4VKynP64shF5dDihNoWaKaThj1PBhDvvsBuSo44hqzBFPBEtgErr8RJh58Wi1NpS38yU9sfwYq2RoaEXMxAtbg",
  "key9": "21JsVecNDsLwfRcnuyZrVEqdPpqEs42MqqQe95JrzSFPZTRon8UzVFG27YoguanwFhqio6fXxhtetafR5Gpj14CU",
  "key10": "4bUaoBeTRG4QL3syau5agKfxw5mBvF2p5zoFkVVerbZgxgQbAWkjdsiaSJhiztjeu7FKGvq9To4CBVw53vobEWyY",
  "key11": "4LpFN98iM1dhvXXR2TUAwoxhyerR99Rg6hHpsnbEtxFDG1p4yvkZBN6Sn6XcXeAMixmeZ2aZUg92NKT8JBGcb9s2",
  "key12": "2FgSuguYJRMXt5wNDNNFW2bM2EV6LxprSwyLK4LypwTX88oSsiGzTJDJeN2oAamoCDnz6w7AKfyBQzwyuFcbmgy7",
  "key13": "4ePNTPJBY6N59HR48U4CvSUCxpkvQB7KRJo9vS5ueswvZrWXiGBsyvyh8JvCCWUHUA9dAgTQiiWM3yNRoPWayMsZ",
  "key14": "3qf5Tie9zmUNZdv7XJSLF8Ey9Ecm3fs7YNaTLw2JkY1BkCkmgrqATnwBVHk3TH3kcTQ8nzEVhBkAmCLj7H3MuW5y",
  "key15": "4Mum7ZsPWNytUr7FvANH81jUYRnr99tf8nJoyZBDM7Ks4deMLMUc7scN8a41KpB5jDfVRzf3AaXDEs1URptwK3AU",
  "key16": "4eeBKsfNxCz4un9D5tNWjWw62NPjAKWixa1Mq8fs8nMSVervxmPYUErP2eEqgqKw3CAxzM8crjGkKsS3oeyLzgHq",
  "key17": "siNkSJyCBk6gg6zuq7tnUCfqwzzhZts5EyYJC3JMntj6U4AUgUeu5nYAsFQsjKrJs5NeWoYZzq6ZoohPxcjjf2b",
  "key18": "zmAHtFaPewmDYuGqRv9eDJ2zEYGuziSdoM729dR4Dqsar7DiMQJMzAwPJqXnitNQq4PJRHzzjb3nZeZW2CYXn2g",
  "key19": "5qML6FmPzPb1ptmKSgTpVcBMTzjCbdr6s17wUT1nkzhCLyjqsafz7XP5ZAf7DURcmC7WR7brzpgbvQgU4pSwv9cr",
  "key20": "3bPc9dJVJgW4MDv2yor158xASsWF2bdvaFnoHobDyLdzbnxAgQJgGYd6Gpa2qUiUGGTKypB3y1ka8hoLAxqnCXnN",
  "key21": "2N2Ysmv1rEw8dmRvydqgrutDkGAe9sBKYZSFkd51hDDKzqbsqbk1aYgjy7wmUxCNJ6reknBfCtRYwsGLtPNgyfYQ",
  "key22": "NKAbmMDf6LdMMFqbgcdpsaHs64Mo8roES43RvTWARHFeVJ7NoszQFMxeaGZG2GLGatNWygGrBsGLgCJMVNhEr8S",
  "key23": "4MSCdeKsDtsHdzZkPfyYNqFSe7rgPSuq1gzPiKWBayuoTjm4ezbMC3M5HE4cJftHkAavv32gghPC8CXEzxWa9DdD",
  "key24": "aYJ8Z2XpAAFQemMn7vzu6uFZ7Hz5dy6zodSUSYJHPrKVpLsLYK9iin4AwtTvVYDXtK4HoJfF52JNnPmVpREM9bJ",
  "key25": "PYnx8X7T1rhhUe6Z1wrD15Juy2BEi2tSZCm5PobXofo4wDR3DxDXLrsRbMo9KfHH7J7F2DizdfWqMLMNShWehVm",
  "key26": "4LJn1Xgq6hmDyXF5kzTkGDK1kFDXJgB4MtYJhqRWQbJ5dKcMbLS59jb3VayRWngFVaPJZq6Ss5hTfziDfcd9HNh2",
  "key27": "4rRFjSkUjJyBv69vAnawJERJwd2oV9nDd8S1MFHXnjX2rrkyPw8dthBy9EG5zWCGvZhH69xwRVYeYtbCdzkT7kV2",
  "key28": "4k1ncfcwnt8cXRbbPb1rGabdFGJQR6ztrKRVb4fwbrVFWV3QHBjy5LTeiaHgdTxrVG4usgXNSRKr6NvWJs18fixc",
  "key29": "2Rr7JpYafy3kKL39Na392riBtPxYzCcAosu46u3Z8XpvkRk5q15e1gsdVoSu8nFAvhmcBBKkQ66TpFKfzZEbqjS8",
  "key30": "43yzdixqGauJhT19dv7Qvaiwuj6NEpnhb5KV7bXppH1UinxitooTeoDK1y9XbkjnNptCoMg6D9RkgjoGYXnrQv6F",
  "key31": "2SEvEbYJ9vJ3mNZj8aHb7YfG8smehgfSqpZCTr6X2jKuvdCtg8UdBLxBRdxskBkCxRxtbt4HP6Boq6ZATB26wDMP",
  "key32": "5F1QvexYiyc65AvWTq2vswqPFyRc7ZLR2CQ2VtZkMVHxvSYBQGD278K3rKG8MQDuJiqSeeZfCSfDAsW5EaAE5uWj",
  "key33": "v3Mw19ZiSbxHRFELKkN8dULEXb3fax9XQ4AvLQX8VxDZRpa3rssYz5zUcjJqLFFcnkKJeYbadLWqXV2fF7WxMZn",
  "key34": "3dLQn4xLm76ymPwmhtgQs3XhwvaxxeF1funXEbH8C9tTEniRbtVRasAm5UJG5Yy8zqXruhkAFPz5fMNmhycS2ECY",
  "key35": "4LH4z1uY94aBtBrD61to2JxvEm8HeSWRdtZfFyo4yjfd5cfXYwWbKW2thjTgxa2RyMCBDYJhDU561a6VUvb1dg2m",
  "key36": "5ykgC1yT3gmtfQDiWvHT7at1CQTb7bhrCty8E6ymEbVg9B5LWaLR7EL2UUnnZHUg2JZTJP54XbH3tMXTABEpjM8V",
  "key37": "4Zw5LyEkVAzFfJi8eXj8GJq5yEBhv4ix1NwZBDXrMDtP4hR8z86MoSJ7TDpzixCoGToyxwTMCbsf2ooVMZQE1NAj",
  "key38": "5gXmphx7wWPETREuVrnpR7LCg2ABd8Z6Jv6EiqtwnedCoMJbXhfaFAGDicEe6BQQxhYXkSU3EQkXM914rMkMLPxM",
  "key39": "SxbszAE2icAi87GNUczJEAbBnMNspqwNn7UxfMmb6TVFUy2ammZorurPvfJNQa1Ybh248ZkRq6vMbVWPthUedD7",
  "key40": "4pjkkP4Wu61Qoh3uDF8dQZfts2naDGVeHYhZG82bomhLK7oQPi3AdgP7TgBb9bySggahwHNsWQxL3eQtxUWMK2LJ",
  "key41": "2zYfCm8yp1FhE3LqRV9N45eh6LLViQVyDNb7RYwUDpM4cjsK4WwMbWqK39UbjcZXYdRBCmTgeuP4ATh8expWbyF1",
  "key42": "4YfjNFt3BPQ57zD86tgQfVFoeKbzkN43xeXPbKjgXpDTyr3R3M553cD43qGyJHtsA5K849D7Ap14aaVfRsjS9n8b",
  "key43": "mmmQ338Z2zvSPZVb6cF2d19W37xSa2sxcr7RB5C9hQneAuC9XxELx1qRj9y1KBYyJUc4jt1W36z6t259GPjfeZ2",
  "key44": "5LrL41KtXh2Rq4i97ZrmezHyyk3NERQtxbfKzAQStm6evjwW2KqakuyDunLn7U7u6ecyAWGkUn4HeRjjDVR1W7wv",
  "key45": "4ryTjLZfQfNz7pPnfo8qt5Jk6Ra21zkECGWi5NFpTSnGbWe1R56prbfdDmfC21EwxYM8JWhL1NvdsjdhfDAfViME",
  "key46": "5F9Dyk3CF5fLVDPfKvt6WCzAHCyMoUgG91h91zaHsMsTX4V5ATtMAVJEbGtuEK8X16bqjQ1nfPhGWVDCpwidkSLG",
  "key47": "2S8EoGnguRWAMJqfVRVJXZGnJz7EoJbNDej65sn8eqxiWKYiNhwtAvn9sS9oH27ju2gBeSzUwvRa39nFavBo9aj9",
  "key48": "2Qx7YWFzparxumpxJYGpaK4JDqBkXwJnM5P63EKVSWKW6BUEfjWg7o4x1wAUBBZbx9CguwTarxddvzDVamCmx3fs"
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
