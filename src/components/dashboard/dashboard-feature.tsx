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
    "3ezW5BxNLDwUR5fktcTgJy1mH7rv97aeMW5XXUexwVtBgoJuamj7qYZyTMwVA84wshpNJP67tNGGRhDPQjvN2uXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54iye8PMyW7Kch3sxrocLiPVWTpw6p4ovGTMhZ7kUBXQNfVDSK1koP9n1Nfz8R1QstTfK9edVjieArc4L7ixy8c7",
  "key1": "2muRDE5pu98xTNEQLkGXnxMeF2qnyYZWDMeM25UJftYZ8S6Loou6GehnTq6GvhTCECaM2Kg27bfjr7XA1rpfSRWX",
  "key2": "5Ggq2uab9qBqmuRKkSLFcAWt1Spf6dRQTWovXBF91w5eodNcCRagfoisPsicJYswCWWq7qSZeLgU99ZVYtYJjNyT",
  "key3": "3a5yDZ2zM1TAgvuxKaPYnrhBaJMykgmuZ4AnjEsDQ5regX92cMJJpb9MDQVcPdvq3me7xbwdkcays74Rv8Z492dG",
  "key4": "2JmYQVytaGEEh7D7dQU3xRJ7NdSGGqLriuBZxVNWMJ7w6i6gJtWjCgpjWVBQLuyjgLHwUr69mQwBFCYGvLoWfj8T",
  "key5": "47tsbQTZSEsXUDqvXP1htZiD3xJFnZNfji4D22vR6krAsde9VDjgtkavnzSM1bLhmuBcSJF2Ni1gEqfmtGSd5JTf",
  "key6": "Hqa4xsoGxFNqg1SiQSZJ5Zy31mCp94PeQdL9uGvnLFjpStDU25K5pamJgrGa1KzpAGgCYtofPxNYNWoU8j96atY",
  "key7": "46R84Pb1hQcKas2tFqHib5a7BDuezUTJipfa5dfjGbSQnEpD5t6jYN4RnbK5gq2PR5d6VuZE24CnJomQmsQnWnzu",
  "key8": "3fSpbRvgvGSFtbSpXvBPDjJ2Q3VgnAzGHzAR2mn8EvhUwanxmNR2TsJ8wg2CR7RWwDQSP8iAJAq7FGWmkabpLcuL",
  "key9": "4oLmAqoRopYDqLiRiRNkdJQguequxNAicPGqiDoMTbU2tY5WFspTvjNy4jzZxc78D33a24naHc1wKT6aqSk3fzCU",
  "key10": "zmiVRyJiKYCjrBcijr4LnaN42Gzg9fYnqyaW2YEkuFFTAPnwytmrhhsWAQL1vKSca51DDhnBriQk3fpsqMPdzxo",
  "key11": "2FGc1aoULXdjszwygcDvP66wPBqebEgyewwjZzcFUCbioB89Qyu44CTtD63eeLS3RXZr2a5AtsoRahQG6ov6rEgE",
  "key12": "3rJowZu1PiSw8wSt6DQJSRLsR6ZxmWX9TL7EKBxJBax7Mi6XYE2jtwoEh8eXTEG3zPoC2vDaejZyNbvZ8qF9qkW5",
  "key13": "3xYjwNFTqKyHgynSkGxFm5zUE4JuSZsPQYhk2iRd9C6CNFt68v98yBBbdcpLycU4zdZA61Ep7WTutTRh9KDkvUJ7",
  "key14": "3unjTnVo5WKFpUpfGs9KT6aTTBEHsqzyuH6TzdhPDrHAbAAiGXo1ctwLwoisAzTwQPy7Ri36KqYAwbwakSfXquhm",
  "key15": "4JdR3GBFPqmqBLoknmkaq9QJefVxBPXraFkYuLLZqb7D6G7LxjVRQYx9qEX8uwmR7RhvaWKiaS5g73Z8TMmjKYaZ",
  "key16": "3b354XaWykDaZ55oySLJFCNQZVkwVYNScL4rbwSxm9DZdu5JddnaxfXcTHRYTuvzxPeiEc6AoSiYoaARMynxK2S",
  "key17": "2zhuVrF81ZDDRTJKnHX7qtogrNP6HK63oV6XHywyFzQ4v2nX7qCWy1pZJaK4MHMA99orGu19VFE4w7JDaPno5zsy",
  "key18": "2XSg5qXr591kySBnu4MhVpnhDanPEz1UcZyxt4cHv1hAf5jKShor8JrdsjVdQWWHRBYiTw9Q2d6oXYHengtHAHhf",
  "key19": "3fN7wFST3dfECeXE1eU3NLocfrjrKuhESYjQ7ZyrGnzXKxMyk9t4jw19MSS9bxwGKDuYjFUt9DmHeVakmzsqMeA2",
  "key20": "5BXJovrhCZTG5mdwrCyW6myQ2kS7W6SM6t4hXtcvxkQeVza6VEJa3wf9pXkz7wgnkTF5bBg2ib7kMZh6gmzYdYyJ",
  "key21": "nwEM4inuNbmyBG4XfVgAXnz7P8DcpSKefe6XNB3XKrqGgkyPDdKyx47DggQgvHHrNwi6fN4zZpCnHg5Q6jkvEMC",
  "key22": "2Wtv8fRkTVqeANwBh2MTwBgaJgep6kUioGF9as8ve5z96ozdtUUdBAgudf9pJnv5j3kHnFHE5Jd8U9cgCFfFAVgn",
  "key23": "61BG3W8sCggZSunRyJCqkuB9APqa2MdcAkP9F5cReKGQsX3LRDC2oN4fm57oNGNNzb2Q27FpmATTzU5thTpe9FEP",
  "key24": "3nbNLwtzMzLnV4RijPUqQG7nBdrXvA1g6yg5YgujjvhyQPr9aBzRrV4qupbrwxb6QarYZW5XnWMkahp6Budh67ry",
  "key25": "4rjgEkaLNxu3kGTS2U7sERmwKN3gEXHebeLSmkNSQNvj2VKdmjU2ZAp8UEeFupR52fXs83Q6s6rSWMSQH2UCYLEp",
  "key26": "5vX9Qo6NbHxUwbBSUPtajFe8du7VjHqomtfcXR1pRdajwNeEJ8VyGXn3w4n5U9aD9yabKnifwimA6pLgfxSJmnUm",
  "key27": "3nHZpp1QYFNXm7h6hr9kepcSxjCfiTH4RpJVzCFFMvnz19ixpBfBktaCqkWYv2BQXV1kAbUwD1dP7DeA4idRZ9Ce",
  "key28": "o98bcNAUaxRpyN4uDegkB5DBKoCTXc6CAE1Pp6KregnU5DbCk5zboWrEgUbBJzvoucNGAYsFmSyk5zSJgvvoEJu",
  "key29": "2NPtev7kjoi9rq9wQbnfzzmSJYsQ1b2BFJycDfsa1k1Va3rhTuYhxnDHnSpRiRqp8KUEhLemk9K9zdbcz8jzfUib",
  "key30": "xX29ijSuK9GVBcSTvXvKaAHmZVbQeJ8q2Tt8hELDvbyjwgfqCBRdcaVo6Tqi73rBeiEpBrjuLKuN55LxBh3KnkW",
  "key31": "56n3aC8tAKKJxbLYLcszpCi7iZPfQnL8DEzz7ZxL6KaKiZNrqCKtRb1VqBq8QsmAX73HuQscpBSkKTPt863Nfrcs",
  "key32": "LZgdrZxsduUUjrqAZoBL8srXiqsWiPgDRKgK5Qhj5ghX6Bi4aq8PmuWD5Lj6BtjBhZ89MkxmTQqA3kfGhunPe56",
  "key33": "2rPULjhpzYmftdhas8H4wPKnhuWEnJp3hSYrf4qPh7tNkyoE7j2WwmaS7BCFY3Tu5M77BzPT4oDgcYGn6MeCYiAJ",
  "key34": "2DSAYdUDyUSCdzrL2j8xvma2cLaZbtDmjw8Q5g4UR3QLEXRcAfvGTs9Xc4A84iRXV9o7EDTdzANYjtdfpjUwz9oM",
  "key35": "3JF1oZFBKXWHPJ1WxLAz9Lh3exFQoH67TNXAeNqfroeYKmZaDQGmTREPCLC6VoEtvuvo93juEDhx7s84Guwu2U8o",
  "key36": "5djB2ku3WQYo5xTmdvRYSbieXYG71DAA98UUP6p6JaMJ5acNwy82hcDq2452GwqYSxZQDB8HPhDAgo8XAE9bsQYE",
  "key37": "4oLycu4VhgoGuctvUmjaeRdyLUN2MWoyyhFwSxCo67earZQ9nXzoARfzeYEim5g2ynzFuWVkDkG3GP5ispPCadf4",
  "key38": "4tnconMdgsSj95SeAwJb67P6ibG1tC5sD8SJyPbQcYyvsyz3wK2u5gBNqtxvsdVBpJFhcpxkLgBnaPWxjSaokB7H",
  "key39": "2ZqXpLzWu87rq3iwg4Li2oW7FN1PV7Lpu9AGXDNT4Ktj5puBYVJFcSc13G1N85y8WvbpXKQSp9pgaXTT4fkF8PfS",
  "key40": "2RLakKXba1ajhu2caNLNrKm9h2azr1PoZwGCUGEUnQttXTPpX6jS7aV6xs8VuZs4qHB26ne1GV3qreemSYS56YkK",
  "key41": "osnT3uLSaXJW6qVDjdWBVRLBAgBjCmMabCWFYBfEcjDBvWtmDYryqbDACgzpCkYjoDEmLURmJeKuUrk5Ut1K14F",
  "key42": "wDVoUjRp99aoUp9i35TMMFCdSdvmz1TqdTRwAU8zy23TK5VE91FTVfcAC2teUbztMry8tfTRQmj1XBhgGrKnqrk",
  "key43": "5LHP8NcxdgKneKUsxwF4CWHyzhHQbr6pgbFc6aqARX8jC6qov7qSz47PBYUKDKhdG8AwkzSr79bkEJVjqT2zXVJQ",
  "key44": "2gFf9p2yPeqc2RkvbBy3eWjp5WdRKYFZqLBMnCJRgFTeRe3wtsrxuN7eBbcMqrTD4gYYHUuT9QxRBYcqQZermLBF"
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
