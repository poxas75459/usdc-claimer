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
    "2JmjTXt5vUh6ApernfsvLZgRmGirxDckyYfiP7H4Rr5AEXh84CKADrRejuAasnKwdgkivGjCg6WbB3V61rZMM3rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kESkvaJgrG4JorZe7Q5GjDyno8Yyiu9iSZniQUBvXMYrJYWMVbWJdfjXgcqxzyedrKB2oVdQQkPm4NLv1DiRSCL",
  "key1": "Wkf5Zze1xxQ4haAqPvU8kC2UAxcDJsV9o8ysi5M5aerEAnuJ1hDriBPYLBp5QHHDTbWqGccdd3J91LZnp5Mm4HT",
  "key2": "kudNybAe8LF2ETzrYRFfnGkFiFPfDdyiBCYpzc6fyP6G6o3nLRKKLTTjurnadrYBgnUy2ZkezEpSZ3hDS54QWm2",
  "key3": "3F6754A7mJaaUQa6GHmQAAxPjnE16pS1QY1vucFcZn98g4nCLXC2j1HReR65y3BkDcrMany17ju9aHL2QYzwTTuE",
  "key4": "413NwBfrCR5Ce4Q7nmMJ33zR7zswSzoxfGEFTDWRGdWaBKpWxA2yDjUE1BxnK3zmBDgkCWB7k31ELXsJJKEc31fF",
  "key5": "2yu6dTvLA7eA4TV4uwTtJ25NkA1LxjN5Y8TbbAnQ873MvaJqHgQxV97PASrWDY48JiffhazYSvPKKY8VDxuFrXtd",
  "key6": "2SAi8H4zY6jc7HkXfLxoSJEXqHQPSpruZDRqrgH3cKYmCKZyfLcTwfqoS52aNWgyrLL3uGeMQwH7MqawqE9QvsCj",
  "key7": "Ppnp6YjAHhysgVKAGXVX7isQvTXofNPsaz1qc5jBs2avpXRmMpMmuae8CxkqStgCm8gLS2FGB6KRh2pn2ULqMtS",
  "key8": "2sAg6DqgCkcpHJdRtm7m3kfW8FusfK9WHFq3M9xeAuhxYfhpHLErXNea59b3JNM8YH19XWdTWgU39bc5s21v9HsP",
  "key9": "JFrezh5vFgfWzGUW9o5HZtpsWXTt5bETWhaUoHxE7FHzZ7aPJVT6Ti9jMk3MJsePKqCW1f1DCzBSQJSsM8truk6",
  "key10": "5dtXtYTBmA8Laue83aWU2bTtWMqrBTDBZpr2mFvGR7nLFjoEP63MNKqBDCSEmpT3RUUVTXBPcZVfvioeAUNqpvh5",
  "key11": "58aiH24eHLSkUn14tz6ULGpmdvrv947NPSTcij9r2zurd8P4MPz1yqrc1oMc9afU7UkApjt97ubhAwdDjoYXxLVx",
  "key12": "5nf6SsqKYsjiXwhGxAK2ooek6Qk7QyfUX2oHd1d1SKs4LV2RTCt9QL1wbgkM62krrdZnLRcr6afMv3a7rwEkQqus",
  "key13": "2xzUPENEN2vAqkHpUHAzCrxEn2YcibB7kik4gXhifYGgm1qTeoo7EoB3bvh5eZSYZ3vq7KYRjTANU19voQMdPwNe",
  "key14": "4DLmi8Kqge6yG9BxLS8sNxAwxG2rte6UMUneTqFJ33FuHqeUrDpfjS8NKxFQ65ZvYWFxKgNaE1D8bwG53KbXr5Bz",
  "key15": "42H6oTkFGbBb2s24g6yL91KVn6QYYGuaySAQQBYRdtYvEL7N8YvgmEN1Kbbtx8W1cxRNiX5nS3AfYxE6SA81zSP7",
  "key16": "51iirRxkkhorH46SQmGb3jeMAk4h1912VSTZbHgRsJfX7fVE6FrEECbacewh16UZofgmZusqdy9baKPPV4nEhu5d",
  "key17": "4iwF8heBgFKU5qBaDPGnLQ5LoeGRRYREJxZtC9eNRvksT6CDFDXMJBLoYpRcnQ1SVGZFuapwbw4ZdARCWyo7cgbK",
  "key18": "39TsQJvEQvmruiRcxdc8vHrRzvuEpgfHbWBAMRLCG6fhgV51qjEMusbCmjK5Ch5xHDsrMMVhYEgzx7mrZYNB9xPz",
  "key19": "23WTUKu5a5MEUxZJRCi621LGWFatso75TKxumQTVfKMgiSDhHWUbWnpspEDiRUxUhK39zHdVabPpB8euex3zN5qb",
  "key20": "ofH3XwWiRbete57B3HiYfPwi1xcSzawD2gW7X5ANavW1BuMwpN1xzCwSMqSzM4GxnUT2qcTYm15AGjDYJM5euo4",
  "key21": "K3CMQHuTHidszqNkUk98qYAcwnMcPmRsBnXwB79aznRSbeoT4oL65U5h3WEPbdZ629MC3y2EohKu1VTESoVagS7",
  "key22": "3KkRxmCZ7asHtCocCB95puwbMyN3uy5aiDpe54LrwV7iPbTNUHSwaMjHK9JUNVK6oNKvp9mQyTTkKJdJPJfztENw",
  "key23": "4cit65ih8AGWSMxsMd87Spp8q7f6fxejzTkN9BN1eV5ngkFC6obrCFXY4TkLiVsFgK9oanVHyB9bskbjNaPA8Cx5",
  "key24": "21Nqpv8GEs22vr6YgN73MbXpunuSKb8tFHtiD4VhSkhq2MBfuggxZ6UD2SmYAcnJPK8Ga29uB8tJ53fosoZQjrNP",
  "key25": "2TMsSiTT8Y6Le4UKaLFHd17gV2iPafUFSWQNFBgWgM8JKH1VCG3HxHHWj7xNSnvg49DQE4D4ULdRnBRQNyWEhRRg",
  "key26": "2wnkBZizSm1TBCvVzBri7bb52bKukXK4xevzcqjuLJw5Ctg5re4TGDoYYz9XFCGxKrf1C4NFXhZ237xxBmjtqeQG",
  "key27": "5gDRYbf3B6iF2AxRp3b9kcKJNaEuRUG4asm4tqya5WETQXDuGxYmAx7kHaHpr3VktXvvvrxCUc3QRjHM2E43VhWn",
  "key28": "3HnKzAqw1Kf7HNpopBxerz3BYoWDLWaPdyZv8EzRc6qXZ7W9Ekj5Dam19ReiVzwGy9uhxbgg1xqFXroiXNPGzLFs",
  "key29": "z61YKnBnVMxBFyRYTBgqCuMUa7pnXcT2s1JbGwRYYrzouBTo24SjSyiDjSwCYZXUhtyAP9aQW7ys8EwosBrDnX9",
  "key30": "2HYPDC4mG2HU51EV6wc4N6m873i3Mm3Aybs8XmkaEyPgvedC5PM3JtpTmo51L3uVef7hL3yNoYUtmpYAr2gkDK3f",
  "key31": "HA9DCJPwqwdNSbkAgwGcz6KroKmk8fiBs6278AoSuENaV2yxLLLzYnbW2gVDVKpgxRizjJEA67YZJTNfPJTiGQ9",
  "key32": "3ANcVGpc6M299bzhtFUFeboxq3EKqNMktycxcBU8uFAgXZkwTikNaA7jUXgWR3xumiTesdjwWVubr83Purhan5ap",
  "key33": "5bZRJ9M3UEiYZSdbWLNiG34W8Fxch2xdRMwb8tr9G9rVJR7f4wTc7eAB7vMeB61X3GrqNxg2WD8CCAbzAvjkDEg2",
  "key34": "2rKobZf9qrHAMNauCnR2frwXqLQ1T8MQY1CkGvKMaAgx79aNdi2NuvJ6och2hSANyHwEdkfC7RpmAgTt3pz7eLuu",
  "key35": "5cbJpeasFBtQKx51svP24azF4uznd6bt7WM2k16cDzaCnoj33DzugxsSxjmZddqLACZtZaBKAZXc69i5z1AdYsZ3",
  "key36": "4qV11Pc1mJsDM7RhDGqbJ1hXEagmq9ym7p5YqX2zHwfPQ25f46XM7V9AUok1Z8z4K1PhJ3SNawZ4jTyM6UKEVy7s",
  "key37": "sFxJj5WZML7a47NaVk2C1nMzPHWtmHNrYT62g15FBYEjZoh1KpgHXcAC8SFfscgpEGpcuH8gmRXy7XZMdLFPxrH",
  "key38": "2j4ymnXcBUwY5rjwuo6Pmp5bGZPqP3WBrqhTkX6qnGVyW8j1gonaUDUgnqp3jSPvJhiRHkJQ7Bwzv2CQH3NwkwWL",
  "key39": "3vXht2U8ZvD1eAE64bEBSMNHCdg1cATcDVdJQ63EPx8etwaW8zxdjoznr92Jz5tw58RLKoPRjmNvMrgB2wvhaHfm",
  "key40": "3yZYSWEszeRAqfsrmdAcZSA8gkPZyJ4JEbGjjMYhy2uWpfqkbaEzPoSpNHCFCqH9tkgrRL8XqKYd3ynKuN8YTSsr",
  "key41": "3Y6tNoo6F87gSJgcfDNUqeGS2k8PC6rLEw9RucD7xtm2EAz4mbUm2Yj543EDSe67mSRd6NekqtvqzsrGXEDmCMGc",
  "key42": "9ZyV5mvyZe6MVyER84HDniQhz7wUUbTeEdFvbWH5aGrHJo79324poqJ23TRgWpaQxfYTrPNcLAZYDMkwCGWCrst",
  "key43": "ZzqkuBgYrAjzrEF1WYXoFHvbgtvM68pKSDbmDwZ4T1cETfcmkDRcGmojVSjYCCBTv6pAXnqDYpfGuYdX5ZHoCYv",
  "key44": "5JXTkQnKSk2MGXmM7L3cSzM7iyaX3AVQhU6rYBCH9arWk2Jn8q89f4GEz1pfPzWWytnuMZxXLPgC9rSCfwGiHoLj",
  "key45": "xVtDZktDXhkmkMSQVwZNv5mBwEbPzAUkkf7894NNy1T6oUptHz7yCoWX85M52suwV85G2u2XdhKyzRH93jvWcZg",
  "key46": "26h8us5H6eth8tM5gz9qfo7KX3ATzZqd6NqCnZ9FGysZ3AaZ6x3mJcYNYZvGGtbmmh3Wnu91iP5N89sg1Eg4zAKq"
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
