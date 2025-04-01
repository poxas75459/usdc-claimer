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
    "MXZbA2ECmMUXcmpCyTXMnhvtTSwnJDTf4QkheowrcmMBmkcJLzHEKd2hrp2JHQEEsDhtgZT68VGrX56x6am5f4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5yAGRsHUErX5FQqDiFMY6HD6YPz2hYbsmCLrQme5L5ri7j5sCiCjGXgasnkG1EaQCAzyBjJx3zvk9K51opX8Dt",
  "key1": "3TiHFKtXcSGKN6EUJNK98d1kGzehEE2eQmsCabF1M721wxzWDkSe2AdcrdwLxChFKCvRi5K3eUFEDpkAhqWKBY4F",
  "key2": "56KFhCNb8NTHaawcMdVJEX26wKBQGhvbFgMhyMeRaa7BPvCqNetTTwooVFhFxnU2FuLgtoZqKh5MZQ3GwDuFSdRP",
  "key3": "4yjfmdR9fZo7vvZMFEU25doWT7wP3E9wZpJjM6AptDLgurRyoXArtcMgDSHTbTm2p3oSF1mc1k1brihKcamKKbDn",
  "key4": "5uZg8vvEonC2EM21cBrzvDLg1pBe2j3NiPbhY6btGJd9GPDC977KnuMLC9f8XC4P3HSZPuN38kT5hwwVhuZxYyRD",
  "key5": "24d5VXKQBmgd9upzEnhXZ6PquVqXtRgXSfgL7JNFCxCPRcF4oLjKUqUuiu2ij1GnvgYNmF2xsXGDQaWjTz9ic7kZ",
  "key6": "4JGsSrWwvhLNur6t6fcvxxALFXFaz5DmESEXjdhrCh8zvx5EuyxA4E52hDtJf6sA9KE9Ze6TsNEWzWWDggzXM4VQ",
  "key7": "Q3qabXVkPuoH51TUHN3sU6t8fhWsrQBL7X3SP8eEWuBBcrVkSMx1ktAW6xBg3RVGaTxLWwBAey73NW8rxE41vm3",
  "key8": "2RCUahoo5aYkru82jstDnoZc1HBaZbxQBuwvfrdrHruZELic8reHeqTcz6peR87yThFNkkdkLquwAbYPW7rsEr8c",
  "key9": "79jTToXhU94RCpmJMh43dd6pCwtBYMYgqYNfXoUaBcLgfZpTs93JBRhRXUcAo4mwrZaRVbpVfPW2xJGQoK6NyQa",
  "key10": "sTDAjYbskxeJX5suCttASN4hC1z8wWgEoMyvhc8xtXhNuMWpvt73Q89u5SkccdyAAsWh6iawVT95zdBhLNqxync",
  "key11": "4FgTHi4ehscCw7QGUFTHasHHrG2CrSMco5tJF46u7MpetXEo4AWoNqpWNQjyUTzAphk3cUYD5Xjpsp4H7qQtJrGs",
  "key12": "rdQmnWk4iNdyHYcBx5DpDzAdaFZAhcAkA4bwcr8SH3iX73d9r6j1UNuRzBXHkW3VLQ5QeHkgKsmngMp5Te1JjW7",
  "key13": "4gjXJ7Ek3tnPkfehXQsb1e7dvSfVcJauXD1T5WT3uRv4EPv4Wip4X4x8MD4LQCZQvsqEqqMJNzcZ3DYkCWvafwL6",
  "key14": "5Dw1a1shWwNqYx5UmncUSU4jZXbh7rrCjCAtBLekte3eVrK17SKr5P6fRLZ9PxTeDyXxHVYzSyb1qLzJvx2DVfVM",
  "key15": "aRdXoh5vmCmEwMcmkvjw6wDPVsjjL4VMbaowdieXGjmPFw1qQwwPQzFm2NRAmo248P2mGikH6VLtgJwG9nK7Cer",
  "key16": "yuJPG7iarokwUnPw627m5bRXCR5N1rxSisiv3aAJqfiWjMPLpwbi7ihR3By5ezJWQg44MgDCi4WdeJtjvEKavHp",
  "key17": "3pA3oYUvjuqJeQ6ehFTTMWdnCkn6zBTBEbDHySfgyrNPtXEGbbr6APMaUT2fsWSxDEPZFrzLmd5mQKMp3yDLyGUi",
  "key18": "4otwnZ5PBy5BVC9y7SpTjNx7Ji7zF7Nxw9piytsaNsxNDXRQBqgSFjAWYCCYUrPsLueRRumtu637ddzuS7rdqJet",
  "key19": "49FRhQZPMyp36KgX7m7ZcxeZsViVKN7Uqr2zxVgnyRUV34PYnefj6wZeWu9WedkzAAj53pjJ2sTYEiwUjuxy2oex",
  "key20": "2z3HR8dvyPvWuD37LBgyFyyZu7Rpmbsgx6YB9triADUHzhXTRscGjdV46NJQf1pSVSrMLikK1wmAy3JKEttrZY6R",
  "key21": "tYzuoezXwsXUtffsVTHePRkKjF7vxy67JEU8qsAMk2P3i4U5ZDQtiyacaEFz45W5q8UY6b1paVTjpLnGDSX7m5F",
  "key22": "53rv6WbdKMerurWXe2NKHA9rXGtnLuj9rQuBpTLUFmuHrVwv89YHjhKMrzkQPnkYb2NLiGfaTKaVSUWumspPey1y",
  "key23": "3NABnj4HDgUB1ichXBx5t38Svq9rtBiFZ1wtu6eTT1SUBqPtHVDfTv1gtpH6ASogepzuVV7iqLv4BbBRnvKyJmR",
  "key24": "3qKKN4fjbQS4sKp4v1RgS1AWZ9uQgWKsTo8VWKAKnxXjb7m6bQhk6kb11BDDV8955t9fEcB6JgEWD5J7yMqX4H4A",
  "key25": "51EVe9rRm7NpoG6PvmE4DT1438eU88RiLw6DY2FgbKyGjHfw1Qo8p3ZqWYPiG4qmX3g16RyXAqBHYFVhmECH9FU3",
  "key26": "3hhpdpTvxqCSnLtucgRJCnkdQNySLrrSTnN4tNAj54AggAuGJVzgnNBvR6h7DqFEVCmXY77VzVXAnmNB9DsmKyyu",
  "key27": "4EwfaNwDziKrtptMn3FcYkeA3NbTcbD9a3Nagy9pGvwZvhprD5VKpZEEfVMqiH1qtRzezg3adeiv6pzjMMutQs2S",
  "key28": "ceDNJNoc2gBCW6P673ovZXpis2aTsYiZ3db46mKnBjuB2fFLfuR2wFUPVGanHUaYzXJAwfhCHHTKqjzhgeSAFfN",
  "key29": "51TvGKWpiTAE2bnVid9iZTnMSSA1MDLw2YpuDZH6VCGqouckcPbtzyxxug5ZAoNqivEQZkneyYS99ZnGXbD5XDgX",
  "key30": "Wbdi2nGb7z6oDz3vEHcYpfuQYkUYJXXhqQ9EAy2XNRPhaFiU3mxhY762b5VAwbhrEkiYEVy54iNxAvgQtvFiiKP",
  "key31": "mLYcoT98AVRafSGCUiJHE23iq59L4whFkSZC2K1Dbq8cQqvsudyhYs92oRCJXupfergwjuYTjLqrxCfzNfuYQxL",
  "key32": "6452GV99MxRtn8KMRr6HdUQQfJAvegBceqeqBjTGqXWLze5LP6SZDvzaww5SDP3xuBYWpxT4CGakxQPCC1omTrqf",
  "key33": "LeinuEj4qSTTWqQ8JGpE6juhsbentQ6uRKdutrL5NJWXwxRkmcNmjDqwJHSVTnzeuThSCCY4AtmXAnWBN1DvmSm",
  "key34": "53tneNjfU4WHgp5xhvTeVjPJ5eYLFoL5tGDRYpdtRdsdPdB8TSN9h4W1sVwTer9n7BFrqcbiARSTdX8dcXg1n88G",
  "key35": "611wjimyGXfM5p9qR4V56mhrisCmqr6kYGMX3Hwjbu6WVPWUBAg73gU37hpn669pC7WcoZh1hb45Nr8UKfBg4ZN1",
  "key36": "JKXRRMDbs8WBUavjphyvnbaezGVauN5tjsZLDSqTKbLmyiJM9ScmFnVKFBPFiZgXuW2LihWL4zXCnuQ9vnV5CiM",
  "key37": "5A6GncDxxRiAUwJgfx3NNSgVfA9Tvng1udeW6KWCdtoycQ1R4SLnKAv7XR6RVcy8thQ2PSMjdF2ceSJ3CAqoaRmN",
  "key38": "4rXP3GMTHvCpAN9TTPamGJsc8WihuGqQkMsNTmuYZNhZRbgyY54hNo5pnYvn4EH9uGpoNqfjz9JBJNYFvgtNrYwp",
  "key39": "2BFsHhNeMivHkBg4qAEwnL8LvLxfGUmDhvSW3qZFQcuC81mhv7N4bbQhbqb4ojNMpt13tJX7j3XfoT7Ubo2PH321",
  "key40": "4YJYDyrfqen9467B9qCJugsrT4yptpp8wAEtMaJpj15uTmLtHDbGVexrKCwwFW9WdjeeAxHpsizqCTP5jqSY5dTH",
  "key41": "377kvzHtLvKZYtHj4pbHJxu6835bBKKtL9JhzvukHBsEuFW8FuYMBUt2yjj29CtfirhX9B327XVbSyBAJh5PCFpE",
  "key42": "4JAYG2vYPjdhVW4EXheaXRFzVHwsbmWtsA67FipXhDmK9JUNh8g1fkuZhX9pRutFy8vpyS8D3J2Lk5cevYEPGxzP",
  "key43": "5HExYssYNqnQ6ezKWvdixBZFwjzqvCjTEWFXmgzPCyJej2DH9gxJ67Nhq1syrrwpKkZtVrGW9Q49gkNCGWdQtn6",
  "key44": "3Sek87qqL6CNSCmmQBPS1FARuYpGoqttsuTiDTHzpTDDqygXJnDMMwn56kEbiXyDuK9eKYu5yUirnZTg8B1f9UzZ",
  "key45": "F4EFGD6MD7eM6wfF2g1tLkLZ2Hi8Poq7C2At6zr3XZxkaSwzTJKjBznquK44ttQDtBrEc5pmvm4fMFLAG13eWYr",
  "key46": "AXp56VrnmP2pBXeZJhPU3LehruAgKvFRaDMrpYi9ueLcK46rqxU2d4A4iPrAZ38bG6AnQ3DtLAdA1TWEBqQBTpU",
  "key47": "2BEc9FoHbGxvvgMTtfVvUpikkiwMX5MGiSUMpBJaUrfT66Uw67iTuUFBdWtQdh78YAaNaMVHQn1RtJecwMLXn4vk",
  "key48": "5RAnWuLzSBEhaBhFuTSPCLxs13yQHBczV61o2RaazHPvpac9tMzVvE37qFpsv2VvTnSwHCu6esm8D8JkpKtPDnJU"
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
