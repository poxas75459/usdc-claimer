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
    "4K4t1nb2wd2pQSxhyxMifG9QVWoZws7JvtwdT4kYKQzYmD2yA2fE7Mjz1jpRbefVT6bTVXdYLiEH2uQ7yEEQzZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3VsYp42cJdRQ3JrbmHDgvzW9mWureAEg6crigqropNj3foLNc4QYwAy13FiiycD1FuEmAWRBJrdUw4C34w1UFB",
  "key1": "45Uq3QnWHq7KPynzYfc27npnXLecHjSmG8J2Ej6jkZGF4otdDAMyVDHR7G8wm7g2Uiw6cXsgEBPts9EQH6qDhBKA",
  "key2": "5jRfQkVXWk65QtkP49zGQJZYwAA7D6QNtien2dctJhMFGVd7NUMwcwJxe1RY3fKnaF2MjGCHLh3sQAXnpAsvFqv6",
  "key3": "637KEsswD1Duy2ju3beqdGDv7hyBEw3aSvn8BnstB2dJEPxGPsynbqLNTeoxM2PiwN289ucnPiQGd7dPqzPA7kfd",
  "key4": "5JWQYv67qFMtYGT7ZRHLsPGKQhqKvYXitqbBCWczFY5ZQSAKvqfTjPE5dq9NQxqknF7skaWHYTtirgCEJZhfVraY",
  "key5": "4KwrD2XUM93d5RnF7njj1L996xumCKBB4PqNZAAxMdZwBa4h4rxhgSXrnLv56zM2R5ehLkn5yqJARm8s1fsZdtNa",
  "key6": "5A3J3ZQBompaHCQvBhkNribLZvrhpxrCMYLRrW5KgseQJEi5ieUaYPN44DhKeaQDbLdpbCKa9qLQAb844UUkN5EB",
  "key7": "6uWYhsAvKpzcz7MyDxD6mdXBnmTT5owQbYv5ni15C1Q3mWaBX6P3SQDKpjfpgGomgusAJLG3R6muEP8BNueiiTZ",
  "key8": "61j9NFUJ9FcFY3koD3qeYBoRfY97v46RoVP3Pge3XZbpi5vcmciEPnGLTwikExQr8WAZvJK4NkMpvkt18EhYhB7q",
  "key9": "5mN1R375R977sB3JaWGJ4kdFGPYW4vvDkpmraQvUfsSpa78k3TbPMvhuoPL8u8UtECfwGTLLqZJja5NqfkX5CnKN",
  "key10": "2n2h4uZN6RJqrcSjXcMZC875WaC9ycujPJWjWLcjSJPsH5t1JVgsodwyuesAbZkwBCv1xpCKLA67o5NWvbhDbRs1",
  "key11": "2VPhTa2bHgj7HQjLYLxyfeXtQwdC411tqB4NYmtCUukydo4nX3zam1wWFCs6QEoUPpkt15dn3JbkCYh1PUCHGniq",
  "key12": "5fnEAjx2AqwmhyBowE6rGruYZJ38Fd8LhXgEKMQyYtqMJZfq84KHJvYnqbvhvUcXyvZYmtuqP2hugsE94pqECgyq",
  "key13": "3L6v32VJWJUH49GuQUhrMhV7TGu61mN7NjYWSYoQ6Qgnx13uZivHbYRcDW7nsQa1DXmY8nAuM67cazPQ9kwVekke",
  "key14": "24N4QknDz3rVukQRM3AtgohkkDicGrWBXjsDUVnbLq141MDDd5n8aQHMQUqeSpPu47aKwyttd5khz4ARAMBq6zFu",
  "key15": "4RVCVd9GhPXhkK5jKuNk348qdc5nLPAzfugEPbyXcGRbCTMCegeCWjUKsPk13rW1PbRLQQyfVYBMhVbCFMzdBKMK",
  "key16": "hZnQgtvkYUPK5YiUqG98iRLqtz1yGRLgH9vNpXu51Fvsw6dWVEGvabrby5AgiAvz4N1PRvtSbCPniMV6u4aJHsa",
  "key17": "4uCAyJX5PjmyT9zokJ7fM5simeYun78VSngitjPaTeGUeusPzjnm1b18tFBWxuyzgZdXCKxuKKZAKgJvR8S34uX3",
  "key18": "3RrzxLj8cBKPdk5vksUbiKoXHc1A9AjK7iV8L7tbUpk6HzpQGofdxFQB66izJVhpo4im32jYPG5Vnu9iVR4BCGA4",
  "key19": "2VC46kkQoHDcckNR49REtdDzGDD454wmry4ei6BR6bZrFRfWCtRbieUAwgigKHczUkMm2oyK9YGpDEz7ebpNCo2W",
  "key20": "3waAjPP3DkMD5V9nbHu5VNKvvzG7ARyv48a4i4uuX6fdSzxg72LKSQnAPSUEVoiQXeUbAK2Qps7c9y2aTiEcpCCQ",
  "key21": "2gBtQHNHwkTuH3bExgQBgAFvPW4Dxsqvk1zcrRB2e2UkYXFTwtjBstKgW2mDxub2Hf2H8tPyLhR4MEWdkBUpM2T8",
  "key22": "5ScYo4j5gvJys654MuRyEXusoXU6EwLirf9voTjBctVqPkY6CFWDFP4jpEEhiEXrNAtmPXA8oMuGr5uqzL2pmzn3",
  "key23": "4SL7oV2yenz8TYvt5inZshzMx7Wwg8eRktTddUicwK2xupP4qQMGznWSMNepxSTjWcemiy3KfLn9R1eCFAchZd6S",
  "key24": "5DD49AgXA35EbxCDy9GLHNNcuKFGSdqD92HYobZVBN1AfCzSCPB2RKbRwGddrQhrPBzMgJVx8bxWs2kmwp6ZEwF8",
  "key25": "3NrzdM3gT6u1TqJjtYUrQSVCRn8YaaZeSd1ANgrxGXdKs5ADKJcoeUvWJ9K7f4WDpoipafMpRRSY4cTd65T3hdyC",
  "key26": "4XHn3uNZ28kgjvFeWU9752WoaD1BYpdpyJUCRdDbuScFEe4AqFXUe2n9mCz291LUBDyjN6NTq3jYy3qDwnRTEDX",
  "key27": "3wMbe31Yw7u5kvvJXRvZiozbmohrNvoidddj1TDJFnKHf7usa7KSWGJCtKunhwonMTddZbyxKeh5Kcco5mvATLXe",
  "key28": "TCxXpsqbLdYDUZp7GJi9exDo7XNwoca15fGDpdqytHECjG3nj5GqyecVXHaRyaeb2Uaz3f5SYv1aRqwWnNjTGgK",
  "key29": "49yuvyJx68G1otqxZkmx4KD5TFSP9sBtYFkX9Pdon9wADjUmMWTDB6FSsNXZm3Zg8KL3cQrpDpLjuVH7NpdscwF8",
  "key30": "3bTZjLZEHfkKrCW5pWdZCcu1QLtyF3ycZP8ytBwk7NUBoPTwVW7SXB3DzDCo3Kk3foxMtR81eZBuwKJTQmd1cmup",
  "key31": "7244VPprkfduD4k7HvgoscNrKK3Tm64Do7cxjVAErzhm3bgRSkyt5TKh8c3fCAFeBSb9HyzQkspN8QL3mnwcsvg",
  "key32": "2indwHXhjyL8F3xU6vyf4tfWo234ED9RsLLtr7tFmZ4FedqkuZihvZyKyA8EjwhibrD2xLuZARciHj74wWM7Thk8",
  "key33": "31qXPwFgySGjfEsLyBLMRbi7PoBWimHoPUToLFzN9XB6ZQ1f7gjMxrBPxxRR1pWW1ZRfsHL93xWyVizCm1vvgy3s",
  "key34": "5wnxvXADVdDnkY19epWWDZYuDrjJehLLFEkf7yjCUHHbetaFLNsE9kfT5D9HSsCrKjDbJoab3sjz6NPmVjBCfHGc",
  "key35": "3c4sa7pqUj1JtRP3haYvWYUGdcrKoc7yv1JDtvRUttCakzmE9g8sDjW6onPCck2ipaWVwSbXjUYegcDCY8ZbwTAh",
  "key36": "5KQjS7kbnkKNzWXHAMPb4zjDCgDVXHxsnReMYGFjwySPq8Zt7PXe7JsEAffBxuC8aJ76W5vU4cdJrFJmrr3bEvQs",
  "key37": "4umQhqWepytLYsXR2x6M97yDgoEVKC2jxVe3HLC8s5Np9vcXvGK5n8eayJTRP7JRx2gMwBH2apox16fK8kpcQYNs",
  "key38": "31aS9DH2Vug9nc9NSA7USrCNPT3d68F3qhwQwjLrzwBy3bGc3p8sm8SzXd9BF3pxcU9gkwLhDjySdqJR9ayAzWeF",
  "key39": "5gffdHEJivGZSWVPKswNsQfEmxZKDQem9yfW7jNSNP1XxuWRkL9ZN9BhogDnopVGakgJyvfVWaUSUnuCCyxJck6y",
  "key40": "27YNw5GLiSgQuYh6N9itzcqaEqsMEphqdioWdCM8EbKdv9qnxKRuZVn8EjV99q1TMLwHhuK5P3gGbFatrvbp34C9",
  "key41": "kE3GJfjUSFYSCyYsCek9iymxvS7UMEeRkeFuWxajtAbxtdN4n97F8vkMjZtHtLceNsPN7U4Aq57yVDxZFjchaHq",
  "key42": "5TyQWN226y14mWhVeqWxezLmdyKi4Q69y1CvS2TFwQrBTPkVTRfa6poxtwjim1oqHLRgCbC8vcVRmEiLYnEHVTBF",
  "key43": "2jut8Ksox7cfhEsYmH9i5YkomLNDHnjrStDo4DYyVY7jrLc79L24DM8YRa1tff31waQFfdxBu13HREJg6b2wZyDL",
  "key44": "2eUSMzo4CywmHj9szkD3K7jXHKsPCpvQ5gt9LQqC8E2P75N6kd4kFFMzjHv9gmpcZ8WrKHUD9MvvHXaBKenRE8p3"
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
