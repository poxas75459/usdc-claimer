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
    "4RZPkGMM1nudRahMpzPkQ1dZmK4ADy5PLD55ShqCCFcTCCdj842odpbU1GPkCppcU7RrcxHKgMBHLGoq2okjkL2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FoTUZaMrq7CRiV4ynfe8yk4gpqsUiA3KNBovCQxs7pZVBqa13Fb7yQ5cUCEPV9occZQQrFu5KgfnU15mLbmpVa",
  "key1": "57FKCSiUkGzMK55ScT5MUAttZLnVoJXaW7qpW7ZAHEVDjMJYAiC58F1TKTLuozcdSocKEGvhkYQTV16biwALV8ou",
  "key2": "45W7SAQmCKPU5d9rsadKnncaiCPGPkbfLjVMh5m1ejK6XqYZHujcyJ5CcZDimYpAPAGrjYeUGRFcvcgeEv6jHm1A",
  "key3": "4ckaSHBJAkXmFWmBJCs9huU5xuTn5Jy26tQ8N9TUMkREB1idUxBEAFGfHD4XR1gMsnQC4e3ToHn1QULoAs5MeME4",
  "key4": "3cNrGZ4iKaXCFNJEoGLKMeTGZafZoNJ8DFP8dokgVmqJiJE5x9fo9gwrjnNvNwy9H2y9TtuqJSaqRz8qaxrxhaWi",
  "key5": "4qLwG7rM7bg9jR5gcmcCj6LEnvjaBNCpCvjsGxkCGF6GNwzGQW4hsw2dGJGTY3ToDBYGeMYKhzf2JModuH4DVWHV",
  "key6": "3XAyuACz46Xtipdhn58jf61yPam2PsCPMx1sDiKGmAVG3b7jsbKvcKsAj8FJGZRNHkJyTAgDxUpuWpVmA6yyU78q",
  "key7": "SNQzCkmwGzXXJjqruFyjPLuGS3HBE3zvjEX4RfBFmY9SfapCgr2CNAf6cDja5z3v87nP6pmjnPgif4MgSeMzk9g",
  "key8": "3xysjR55wiQP1nKfX9Psi1qTQNVQsAtyucgkh8ZoH1ZwmsRwGJM4iJRgNUr7pTZMn5poM9rRCpXKSzcSD6iSyWCB",
  "key9": "64sLJQ9HdhZUsZmjpM1Sb67txHLxyF4v538mztb9gNei6PzMhfsA5eGyLWgQw3kXaNPg4CscD2xHJNQpHuSaafoF",
  "key10": "31q2XimzxgiNNEegAJ6DLYKpGGe57YzCZKyrPepzZC8ZCgBJwXZqwjB7QrSYMrPYM8rm7qwB6YiijKRMHvAwYCSb",
  "key11": "5mooNujA8cXZcjGCxKnBWFFaJUk6poSzRkM1Wo4TfTLU6Zko46GdBse8dCCJVCwPuC2RzRxYDzXqVE1ZaLTKjaCA",
  "key12": "2JBCyMMUQp7KLHTNBbiMchu9489qg5kmTzy5mpWtsaViP7qaULphgWBQU2PCqcdmZqGLaQH9xPYB3ayeEbBqo3o5",
  "key13": "3E8jsn2fzGpWbmMGaMvghghh5b3pNjgWTQG9U91uJnFizLAe7myT3i8DstNeqnRwrj6VVyKDHijYQ3otsc5uWtxz",
  "key14": "4bpPqnP4MupqXciLhRLGmt5aqES59LDxKCAq1pyYgLNRV2g4ddE8XbucsnHFngJVM2VLywpRAVnV3b28uVuCdVTX",
  "key15": "5PrHwgUB3Kg69b1cQaRxWeGnHpbST9hUJ2m5JDXWfvUmWyY7k5Pi35b73QK5ncueHrhHuyyxZ5aXkXQXTR6WfLkX",
  "key16": "XgmYndhALsdZLcSny4269dLwQb61iYeHWb9jLrWWRUVQTpiDFqSYPndbv9DNjuanCsbgMdzTFViq4QnNJhbW2vb",
  "key17": "369AWsKuZsTno6ku9cxDQFNz1eC3nbuxP1QvPwAEpZSdwkToqGL6fE9X3Djp7uQCYsyJdWmxeP5sdAx6v9B2GNfM",
  "key18": "3g1k6Uf6QqmBrCeuwfLUspR5sHpAMU5YkhFdw1TjnbmTR2Ec8nzv7n3gQhGmxKyWkyFt9rGZ21Pqa9DDMQAJHvVa",
  "key19": "4bUhXRTSA6WpWGPr4aQ9xjA84oWEoB1bHZHns2bPNuGoEboQodarvaWhiWEWUE99xPNb5jWAPkS2MfvVbDQkB2PZ",
  "key20": "5RZhNHh7zhrYuf88x47K9SYX2tGER12doYGSxjXrt5rYFzF2XEKwmU4e6gWYACwaRBVe6gJ61npE3FhXv6erLjaq",
  "key21": "4wno4DHPs6KrtRGz5WUv8cL6Faz47eyLNh59wtg5FJLUS4eKsQLaeNTEXPKveAkLW1EX6q4jBTJNvFtt2B3q435y",
  "key22": "5Proj6owTUcJXUY1ZkJbe1voWbfpKcEcP22FGxtuSvjvw76y9zstEeQ9FB7TVzGombpXTzFeFax15S9Dd3Atrtbz",
  "key23": "5uKNaeACuebXaEViQhTfa3u5eQLvvmEY4KJe9UvAnqzyFVWzovpFwSCTj18XtoDbcPSx9gqeuhYjWzCjxJFNotaW",
  "key24": "5ha5e4iLwdN8EVcACYWNHGBGMA65pMLpUwjy2B5g1ftkFVzyzffpBF13Yj7sRGszjZmUgjR4jtxjzfCnRU7x2w9z",
  "key25": "gnBhVjLgCZMGch566rDrpxoBnoFcyggaKLswnvzTvjhCFfKx7KjU3tsmaELajh4xfmV6aCurB7bYUScyW86CyWu",
  "key26": "3gmrWJiftKdjX6n228Tqn3mmhhMgVu7iVCjzUc3Dy1Cwz15YfwprojzZABgMVkcHcUyDVqoXBtTm9tpk268YxcXM",
  "key27": "3k68LpW7UByHqFSTqm6mtRnZ1mXRiRMFzaUuN124Zq1sCy3GbkCmm7upPJiRiFLVsawJbCsbBg6KSkyHjacmBxDa",
  "key28": "2dEtR9BpQiUEZYZhfzG5Nf2oV7d7Zkv8CucVTQgjDT4b1ExhxR8s8X4ZuJSKpWX8PkxURUymNiXw1GYWqH6rvm7Z",
  "key29": "ikerR5zVuSq2sfaztXjZp6NUcUnfUBMvov2vYMiqgAjJsaq5aM4wuNwd2ZgvfLUXetnCkB82s6Ft1kYMQRDRJ8y",
  "key30": "2vh4cx84zJGSeA1jCgMVYxUBP2MDN8ehK5vmBg7oyNUHwvzGNM5Bnc7m4rkmk8QUGujCYD583ruXjYpNGDkjtsH5",
  "key31": "yrmGzp5CT6f1gXZUFuqCNnKnTb5W23WPEk6J5AHf9G9NYMComThxZ3XCPEbQtvzBjtAjnk52Mg3WsuTjH1RDpvW",
  "key32": "5jkYN74nCuDCg5UnXLkh6nvAeVFvR1CWtggNBRyC2t4CVYBpf6vvvVfmq5uMGSxeBHiGQtFiW6vf3khupbnt8LDt",
  "key33": "4SxXdMthKzwPTte6vSfgjUcVyn71TG8o1czLcmbu5NiDEXbvXdrhnWWSiPKdq6oKrDyYY8VoHrRdYjtbd2TWHNft",
  "key34": "3RjdpWuuBzePfZHQiQg3F5eUjUYeDnLiHVUHjzwrKFMjNMyA9M1agGFPM2bT3CKZYfbr8Z38Sq7bwBHnXqqJ6cRs",
  "key35": "3vev5moMmbxNRfV97HLqFJ8JfjJDv52wiGPgyzWpmdxVdvcDUeTuELEBZck5LZ3nKvXdGHS4tq283p2d7aRrf76o",
  "key36": "5RoocWoDvwB2KHjoncz3hRtwtiU3dttsnoFPHeeYm2SwrodGczBQYRiRatDxcgn49a412r3XQ1BuGxEa8KyofFxR",
  "key37": "62hmEhrcWPQ5nW4gbgNmmc4AbkXC5L6puZvVW6QJdyWWyVdVJZWaNUGuKmuYt6zf6PJJ3ZRTpmtHWfe1Lsrdu2Zd",
  "key38": "5b65CZoNgrJ83RPTf1fbbU2fgMHm5mBGBQ6L45CXuxcKkt9sn9rtuAsoaPQ6mQtyESx1ethMbXCtLN6KFzVbuaEg",
  "key39": "3tdQJngirA3HN4g9XEfbH2EYhncEanabzN3yDFTC6PS6MHuwoA4J76M8uBeP1tAk91XjX2cT9rHpFm7TsBB968cn",
  "key40": "3xcotLYrSamLsrcm4Ds7vXuLPRMGFmB3tWNqfaybU439xpiyonBXU2UZLDrHizfv4AWyHQG7WhofRxV2zDi8aGEQ",
  "key41": "22MN9RsoGnB4BdWsLusf6rBsoQen2Y7g5cLA3WLLAzMEEzqD64w1iJ8BrKoKFk6SYqFzXDdyAnPv1vbSsQZweTQo",
  "key42": "3B6oW9FtoU2wj8TpQ4jDNAyQW5PLMo1xoRPwczVA5fPoxvDMomAS4NzxST1vzpjzKJ2L5SnDSrqzPdERQ6baMQ4F",
  "key43": "31ouEDhPcoKZV1J1MHDRWdagSqp4YW2J5tGVDcmZihnMiy2WjgCivXQwK6SB5nzeLWiF8yY73UHsLbjnQvkTnstK",
  "key44": "42cc7G2YGKT2bfcf8ii23QQypbTspxgzy6cPthYea3Mv647WaUDbv91tG8KfxHnr7uncHgYkUxKMPL1Zd54qbeTZ",
  "key45": "4ryzzG3WMGQ6TSTpNz7uLjCXrYuxLqVr8oDjudLTJ8e1NwYdABP5w6UxLfkBZQyDUEsZ1UXYmmzU8BiYFuoPZaJu",
  "key46": "AqZQxDnF2mdAQB2ZMxeUAWXSgYV6GChEKqXbyKcUUQVFJ69dhBWTDsoMHxvEzSMxVZL1W8YAr825GjDUht93cSX",
  "key47": "pGCDew7CHefnazDX4Z1W9qeNmEVPUqdc4wCXg6nLboAsRRaFSsj89HGGGKnStKYd13D99FNktZeCuKerkKxgWCn",
  "key48": "GBhz5374cqrWS129PGTibDqNjV4Hc5VULt11J264k83fF65BdD1ZhJEWmntrk8tZZeEjV8671n6mSyeohGcjo3F",
  "key49": "2h2qph9nnd8gHTEdNkrASYJsAEyxJ2G5yELT9Z1iEhCcWGEgzKFMZBmTH5YyBNhx6GJBe9QFJaDBCdTvQNEBAa55"
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
