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
    "4MtWwFrHC4q8oao31iz9Lw2QRBtBguthqkN4nEAjdTRSQEPuuTQPzq51dNFpZHSBGBkEtzVRvZU3jmHZ5F7PbYoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VD5NPSYsjpbdCzTwLCNPunZPGEZPCQLnkrJWaSpSD82umKkqpxQpbNkLNa8NWKMkpJUgpecLoXqKefKuHi3kUBR",
  "key1": "TChNhiyJwstpGDrr7EyWpCk7R5HPfTRfZef8kFNJBAZFRWAFZXqtPYuSsnywRucveaUTQMHskUbbD4WMkmDdytH",
  "key2": "3w69a9UR4hk6Ceyo5VqdfKLo6LNuzVGgmDtwdVq3qg1XQ2tv6KeQ5PhYCB7jAH3tpAQjHVbxaWkPErVXQoM6gqu6",
  "key3": "2b7XvfGqiRvTZ5ABbxFVJueH4RvZWn1hsYi7tey8rtMhHe9rujYy1haLqiRBKhV746KBfHs4bUfKyeJaZZ6LyNXg",
  "key4": "3PjpsPmbnrDaXpt1o9yRoFztiBMuHJnVocHBsR5k9m9PKQCH4Bo6u8W9yZz27y2zfReHPfM7qLZtVu7JxMRxgVjF",
  "key5": "8HGaJTGVvyK8GPWMSJ2QhxcyNB8nLgBsMM7qWVpa8btsHgqbaZU8hGS24ZYawVbYdeHyj9M8KLiuC9NtfsrNor6",
  "key6": "4JKPAGvzPTsdkgJP4zKLpAU81pvUpDTgqGxLKFhYgFf8568M6XJa95ccQa2biXgENUABnFKuL7eKRfqzrMwQ1PE8",
  "key7": "599V2fPBdE1bJD7u7WtPyk5AespH1931rW7rfY7e7iYTSXu7oguG3szn1Y7YhqzwdzKUaWWab7DsjgXVN4oCWSjb",
  "key8": "4dPaYxuHw3cNEmCp75KEhnuSchb2ppcmiKwNuYddyyZm4fADNF7JC1y7AySoVTvH2MBcudSKDvbMMDs5yyxgR4ye",
  "key9": "3K39Q5xryep8MLctgZ2xThwdXJiMBszejUfZKjb2AtHbdQZSyrxwSGsW1eDcYR1v7jKeDj15SvruQv53MUmh6j3t",
  "key10": "2HZQyfNH1yDaTX3abS7Y7aN4otLp971z1iVebVePTMU3MJphCPNgwf6LdcjA18TyQJYfXXxAf3arVPG8kN9rJdwA",
  "key11": "2PdtWSxsegxCGLXjMo3h7LiS6Gzr8QadQezoMwK67S5hjybMcsFyX84Hif2Fgfpq1Nvh9wP2JfCmwMc3CovjDPBQ",
  "key12": "5uGz7DjUCBWSJagMj7g7Ctykmnb39JA6Q8eUrZKpampB2iDtiCugtetAZBT3nCTGfeS9mYz6WeH5ff9LjvdUxauB",
  "key13": "3jSnES7NzJKHScZzwWtoWrsVtdLcYfkaPCzhb7SDx4dZMwz6H4Sz2irJQF3vZLpEpAsn8jYz6W8wuktmRaFX6vPF",
  "key14": "3unRmSfgQU9Vq7WyCwqHwW1wXC4tsUosr4Bxfqe6uWR54qaxDxGsPrh9LDfvm3SHaXoYoa3NHKypBv1rhHvTsCQT",
  "key15": "3wAS6MagdihC9ZBfxt9sj7Zs2qX8Y4PxRdvNTWegjipthmzbKjDfaHSkqTihUwXvkYKaJqBfJmdka7MeNdm2SKko",
  "key16": "G48DVN4YJFnXpPTd1jWWVKam34aw4f4cBofFDekcdDHqGxTrzarDpMU6paer2XGwMUMMj8skAqsudb5cppBip2q",
  "key17": "2s6NA5v213PBsqrQSZSoCh8eMU1N4NVcPbtcbDwfrnLWGHnRhAG1i5wDuEJ82e6wEKuYQpzRPqqHrZQRPt4HvY6J",
  "key18": "M6jtWdRDhf7NnQp77t6xTs4qhW3kCEtFoEMeKiE3B2s5tozjoR3pRg3PpmyQXHGAZRkvSPLDmFF3TGeN2XsJJRx",
  "key19": "5XoyvhWCgxUtfCHyJP5cMHeHf4Hnp79ikmtJi815hkouVDYadgGJePd55zHXHRTsi9SWCedqdgqsojExTN7M9GJn",
  "key20": "3EgrDTCvJhC4qZt52odiL1BrpCx7v3HcowirQy1u8QHxEWYdsWpF18meVBw423xRPLXJSEVveQ7jEYs7xAdJXGfr",
  "key21": "3fAviLpXbdaXKXrZB6Q9cJxjVRAtHkDC1g3yDJPqUgaUB8HRCbPtnoetsaLrnBRZ9Ci1qFcJCY7qysDQH14A7hzT",
  "key22": "2ZTpku5wrKBhFvav4resDym3ikoDjvHefD6YJHEwcPsYLqp4dAinwTCmAUxfgpvq7qbuY4an7Rbg27LjwLRdAuai",
  "key23": "2uJCLkKcVfDeJReDzfbYqjXVnn3RnNagURPAV9gYyn5LCbQ6sCMjyTNFSap2ihrwxEHevQqgq2REiyTTKfwhJL6N",
  "key24": "64sARE9ACVj6eXNm5AYCwsEttuJgW9hFgafHUs5cpaSV16hBGi3R2KSTrwP6aHNCyp3FbhRFYVvU7gJkKC65W8V5",
  "key25": "5q5W7UMcni3yrXAH7d4zZKEkvQUBPqH6QwtkfThd35uzDTagmowhMaRqWsMsWnBhYMDWeYHxwZaaZSFeJKVSw1x7",
  "key26": "4c2BWYmE2s1dSJFDozfNo8nphya9c8u21Az4py4r8CHHSy1Wa4v6MqhC7BXBP5U35gb7Uftu1kj8SWWZM9ZxWZEv",
  "key27": "21qTfe6GQd7FBShitiRnfDWjjhwjaVhnAnCB18uGQBDaCA2JbeFxWWLBri9syATeXbzxYD8naAgCVBiKyPEd9CH4",
  "key28": "5U5JmV6Ue6QkHzGZjxhKT9zBkNQ2j224X8aUCA7HkNwJT5vq977X5HhF2mJCaUF58q9dfdjUAVRxjzS7PC4JbiKE",
  "key29": "4Q5WpitqqgJfCWpMfvYaYF7kCyPxtqw5jC5iTiKEvqBqQxMTncwhCa5QsrXnih6FAbfyBqjLzMTniUsXpRE1qMsD",
  "key30": "GxqW87hDudM4wYNtADP2NCSNGqXU4mac3E4eLm7NLBMKeXxc8eTrmr7biVWMv2kSQiQWqcahLkWnLFdCMFgo6SR",
  "key31": "aPkugUwjAE5msBxZNCzNGuSKfA7WZYLghE9bxXFqQvFusc6jBqXH6ZmUzZueEKEU1PYiRduVEasPYPH5vioo73s",
  "key32": "5P3Twz2J44c7XGyEkkCUf6PfsEztRVkSmXx1PZBGQ9WbvE2S7ZuciByECx8zyyNuWf1mGqW3KznryjXhDXmcKm1X",
  "key33": "PLne78K9ZKmhwnCzeNjxBUZeSbDErATh6dKTpUodhnd9XxpnnVZAZwLtQgHE1zgc2gaxqJxESbxzzZ1hMDeBJJj",
  "key34": "2jYk2zTRuo5Lh4vsvznhV5whFJVgXdwsxfqZ3mB8H7LN6K3xuHRHZHe1D7wjqe87g9TT9AfK6d1Zwg2ZGgTWdm1y",
  "key35": "5WxBbefa649dVMnfztVG2Dw6K4sFXTfbYT1qiJC4PmaBGFC977DAiyFyod5z3igxCRKHpTnQdU5fSZc4KVcNGxN7"
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
