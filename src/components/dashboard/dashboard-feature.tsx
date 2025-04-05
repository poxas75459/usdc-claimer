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
    "GYcLUzjPsnhRP5Y29GzHrGcJrWw6GWs6tmiY9kutwN9KiCz4afvamdKNfuynQoSoxrLCm6jc4ZRWjLxaWnFeqbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H2kcA2bYvARiuzBynuNVnwW2SmYoA791hzpsXQQXe3Mq3PpnTUa6YeGBC1oUYKqJgjSrxqJoT6fzzPg3cgbjbAg",
  "key1": "5UsK2qVnhmWpLe3xAzX2259j5EzPEbdh2TTpcmL7NNkgCFNxVgLR9bqVzqiNVu1SudzijFN8SG2GqyamiB83H1CN",
  "key2": "ziJPc9gzdyia7wH1dMatWQPCashccCGKxHtWZVg514zGmvJ3Pdp88hArAJ1cJBGz6ZWpGP2ZfE9UZCTkTG3aS84",
  "key3": "3b4TJn4dGXw7cZZm81evDTmTx6eq89TUn5YBxnFn9yXLhh6WSKPVxGFS6tq9zNksUT5XduW3BcuUPT6iQ4vX297i",
  "key4": "MV7C8vvxAQCEm9to3RiHPpFGdqhv835DW4ET5ig2e4ZUYu28Xku6AVxompmXqyFB6NFcxsLFf6D5WT5au8RYyVK",
  "key5": "KyQ3qfzyUeH6aLN5ZHyL2UzaqiDP6kdUfcuJKDJqNdWWjoCUXMon87bedwk9EUCmFknXVK2fYB77J4dNbdEvoRN",
  "key6": "5koscbnjhCkrEH4AJ3FwRj9i3BNEpVGqLbrVXeantG6KYCqiVZwbebykBgRVp9RZC4Gp7c5yD9vtG6Fhey5xW1VR",
  "key7": "37ZAEtQC5aWsiFE8RH36AgdAyrA965aq3mo4dKc8oQ4TkQwJTgd7SaZiA41f9b99yCFUPDbK8AM9wKeRdxAebhxb",
  "key8": "5L132HPSkzKmRTfSZWTtnu7wZcKsfwoXk8VosGSYaSf8jD23LEsLHHBS1ykpGeLAnzwMavUdJ2ozxAQDBAZjJ98y",
  "key9": "4FTiMdwqQT9JDJGXsehQi3fqQe9G4iJgzi7wstFqPnMKgd89t7gy75EwF5F3JvgG7vK9DdC5LCu34JGVq1xEdVx2",
  "key10": "52H2nnzqbDBsSdTjTSbA2Vujyb34ZPqkkcyQDV8Zbg5JqAQWqP32SDv8jaUG3pZ9dw4yUphuNpekR5z7QHiUhP1v",
  "key11": "5UMKUNv256v51pzhR23G1rASoServ91ujxstqFmaq5vaWcwa4hv5zdXdB3ncVsrBGVBFyHqtma3YbAqQNXPNr9VY",
  "key12": "2ifSgDDVDML4Xx1Ct6ManKwihEtXQhS3Sz9r1QaKdwbaw7sRuawS9B9pBhjmidGVVwUEAapxk9mvfsaSZMhy7813",
  "key13": "2acbrUsXzxckXJKFMETfu3EyRgMGozno9gG4r6pXR41YPenFvp9yyQEmKDxJYpbe1aEfZHiZeRS5M6bTzttUDfk4",
  "key14": "3yFHtNpAUtaN92UQBJhsdbmsM9Gi3z1WM3WyCokchS6SQNB9SQdf792SELAunSmkLsdHiXyDtm2GDg9RJnUy6Wsw",
  "key15": "Ncwx1hP2QbXZUuj7eq6gh5cWQMV4RB8kqRZMXfcbDPBmyRJiZQj5Lfsci2depr47TNYyHymsKvNBuMDrTEhtacj",
  "key16": "6725ezKma3KAuKFdY3BpmLXnkv8S4r75dxtLxr3qKggwdFxKZVmxVDN93KRWWUn8th2CN284bYEnvUWbf4Xrd9aA",
  "key17": "5X6Y7T6gAGXj58w3AoxMA5Z1gaFfuFUeuthqG4QWDPcRKhqM8TWoTDQ5HHyMQYZPYPW86F3wVU6xgmP88LHidF3E",
  "key18": "Z8G5jpnmUoRV7PvHy5bUmwwAHBdjbssx747r6pLRQHgdYADaa5GvrxAVacamqyMNnzrhKRbre8EdVRwuXi9nGM8",
  "key19": "56NZmAnTbhxPusp3xAdT1VNFVCzCUp2WEyqfQtF6cJp436Wy9wSPTsBN6QCjFiKgQqnS3EzgVq8myhMmBGxeZrbq",
  "key20": "3AKGrbiHzozorJ2rQDCDa71nbNX9RUbL1hoyT6nZMc7mqyNsAWm3RZENXvCLx2WYZ2H7J13ZQcPoFbC53W43DD3j",
  "key21": "4n7JDKJACkag33d5XT3tQx9MAk6UdKEg142VHne7Q9U4qkgq3psVGkPJiSnEwPyxwRskDpcNKVTggguLrjDT8T6P",
  "key22": "2cQNRsbQkoRCNA2A6DPMofV4dEJRPLcCVLffBMVnvAXh3J5KQXkxH46Pwg5DYt9SakJATyHPHHPx7zpW16i6d4Hs",
  "key23": "qQoGdvwxvmsUEkT6BnBTKfCqELLawPAZP6u678ZgNcsTrYKcjddrjmEQ9yQHiaQtQPnQXwEbjuwPgq7mG58Ujrr",
  "key24": "587Nk6TG4g1Vq9uEbaoFfErpcNb6CZbos9XbGhxdoVguz4KeKqAZNRtifrQwhdaQdSzZ5amiQQTL3FxaTG1Hqtdy",
  "key25": "2syXqBd1FrqxdVayLax23VECf5VQoTRFAUaQS2EVVGjMccvmuouC5fQLBr7BkBCDPkAwkb83z7Zt3mUf6wHoPA2r",
  "key26": "NGPaUrcxsgRYTVfvpoevbexTaLzNg4jYwPsqV49dnpozHLkLAZn5V6A3pVoXeTVrV6Vs57naRs5KpTezHve7gBg",
  "key27": "2kqgtpEN5urRViy5RLTPVLh5K6m39TSvxvAoBuKmnSBT5zzdHh3byKSJ9xxHJ5rny9sMFLRaqHViFrJVJX3erpL3",
  "key28": "3JaYfhr2UXHedQ5KVoK8FwnDsFydQgtSP5jeKurddfACfW5VeLaVauYbd4X4yMMTkMLAxnB4WyUpM19VbEBFiueH",
  "key29": "ykhaGYFBvBpGkSEx2RKGKZz5Z6rQp64Bm3P95FRtdix3ybHrsDxU3MEzkipYx11daHV9CrEUfTRMy6YdSGR78Tm",
  "key30": "KJ1z2vidujm7Zn3zf9bZNbaM3Hq9DGpjJdxCnnCpFdcUHHJZpJq6bSMdquX3TV1X2cpFuB8eeCx8t9motLMhDGW",
  "key31": "UMPeGjgcXEVmznz2uPmcy34WeqzZxPVPMk2nG4NqHHrovvUBStcB4h7Kghcj2jx7n2hvejES64o3YinJmVho142",
  "key32": "k3XjBmhAaS8DnTC8fss8CvjC6sfVth6V88CzX2VZRQTcYWpqbXYbH27HqMJkfwE9xDnWDPW2enZsNfgw7dLNf4y",
  "key33": "21e3QRoxphzTx7gWvHY2rmoDciGva6BPQiXwBpbUb9cZaDCdk2ENCBubTnWEVY6DenZLY6aftUNbHoEkPFJWDAfd",
  "key34": "4rwaYzswFhZ6uLVwhNbgU3G667vxTDQjrobgMWfEvgm6tstZ1bNKENafAe5c7zebhsg4UCXJNuHPJBhYFsmk9sf4",
  "key35": "oqPD3gmcUSuydpCJMWw6DDWLJRcQwpAcHTXGVJAdqnobnwnDckfNav6Syv8X6Ku1ryWH2UH3xjeH9wqAtQBJA4z",
  "key36": "4pBoGdzbrZMm6buWTtwpqWbnRE3R32x2SzyJHWb5Tcad4Li5guBJMhiKYjjUpY1jVk2E1XsYxTumonxsdfoX2CkR",
  "key37": "4uRrKstAGh1b6yvfwJgsKnqmWNRKmQmYgA3Q2LV8my8zCg9hQewqirJNRttSPZnPH7EdayVBmTs5y3QamtSqMCW6",
  "key38": "4awbs3zkYUrCXBKkxcxrUBG2jKRhFmK5fi7KKD398pHUYkg3nvf6wRBzspNbtN2kV9dAQYyQD4XnbtNr5oDogTHi",
  "key39": "5vCHeqz6NLRebW2AanHPcQJASxP22rj76R6koa5TivfZXzRku41qzh8qucmXpmtn58UtJjANftCmhqtZ4Lt9xLLE",
  "key40": "2AJY4d2hTskCCpRKeYrUGunqjqPXGPh4wAK1dQQq25ZdtZY4cz3dwep1BemSDjwaKcW3fhFgCPd9VcCcP8ArAhNZ",
  "key41": "3bhb4jNf1bi8A2HvpkDfi6ZN3FgEeWXqaxvwCy1dnqyCgzTvwLLAF8yk6BR7fQqJEbKpET96bm5tQiueex1mcS3q",
  "key42": "2nQibNmvR7wE873PiHwos3LZoft5jMXdRMCJaMH5uqYw5Ud2JuoKKdtrNdqdpDvc2yub7hr5bj2cgbioFw7JxZuh",
  "key43": "4eBoNg6xLwZHf32ehLtGRWbSEjtWRnJAV5JceEDwWUzpw9FXxEM9BYWXoPULt7yPHJtaohE3iFjphmteVhjFZ3n4",
  "key44": "5hUXHEuR3MQ8ikCGG4VSPYJEmvfCLQZQfgUbHTdb86XDAq9DSFam3kJTRa9Gj9NRKGth1QitEXsdMA7hWPKv5Z7t",
  "key45": "4wFuTYedqDRXko4ackPfduPZQFumz3oTHdwVCPwHEuFiEUpRgXRwvHppiDSm8PsJ3cAt2rDTh5texRm4MmY6c6eX"
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
