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
    "5Lk78HWqD9QRJD4PKhYyePr1WKi7oPzHU58gYUzabhy4FucH2Zzh1ebuoewYYPQ5hCZ9RbX6iUXmn1yxVcUPFmY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56o5wHDPGVv3NKPKz4GeaubBHRb4Uki7ZpimfsU8fby6TU4ML2KhhiypYW4Nx5Um8WCxvZ8w6g7RAjuPPTwKmVne",
  "key1": "2q1XvAMdJrJe15qyeUAB6rNyvz7eXmNZ12umRYtBWVkNZPbdBQXs315SrFWmY7hTSU12zp8CYYEYNth8KN3LHcR1",
  "key2": "yPbUgLT3dhCDzuVJCPR7t8fGCCbvPpfSaRvVZ8ZsGAiYw9Cm9rEX9gAv5DD3YDt9n5EBqtzDKadGSXNXWv1nRye",
  "key3": "3HqTaWvTHv6DL5JRJ5grcXNgZnU8gGCkDGSyFsfMCnkzJBfncDLgHcQGmstNkoSaU4TAaaDPMDtPAX7U1JdAekSK",
  "key4": "J8oLtVVzp8kGRsGPLEq1178n9FN29Us9f4tkMR5d9vwDCVEzHnM7WUYy6ba1nsWyYNp1cPqGs6XJ1fXHY1AyDv1",
  "key5": "4R6crfNERbgSavGxoafL7GcNHZSFMZkdnPpseKymJuynCv5FknLkT55dGfCmvuVyT45zHzEjLYmb91p53XaJsmyc",
  "key6": "61oC4npuLsTGB3tg9QsxAuEAUJtvZ7Ds51AetmzYCwZRzxK1GM1iWrdVjBE3XUEURdKnCTrAGjTu6Pok3LzpGYvA",
  "key7": "3Hgb4byPriSq7Y3fDcCmqRQ7ezE8Pvo5jA4GueKHGvRJ7XTspoP4z462oDMkFDoyRm22aziL1ogo7gwKsUjueN9c",
  "key8": "5zL5ioHcrCb5sXiCKDQXy483WHdpG54Q4CTBajd79fnh2RkRTNaM9P21Z8vK9xUqBPGofQBzo1u9zhknYFWtvcnL",
  "key9": "5X8SD9jsv4VojgMChX2UEU36fRMh5mbCz97pSArCfRUDNnBSbWmkrhgREqoMXgKJM9azkKNvb4U1Ads6m5oqVqQL",
  "key10": "NhSbMuiSSFhgKEcsT65G39PV6d3otGrhbuixryQEuysT4PQN4mMHAEKVGchE7Qe3Bxu86PoXaYBQUghP5Lcj7Rb",
  "key11": "3KcaPHkw92eM4yyUreg6R7YCNi2W2pQmXaGB4zqkri3tTAX5ERCxJ2woVfnansxzC4TpPcgN35LeDmXb4Mgb2Frh",
  "key12": "MzmpVvkX5YM1UhqgDUhXZj2EzcwATjeF9D6yGuF3CaajPNW56W3A7pGvtwWxfzroirdaGj352niHpU62g3qK4ZN",
  "key13": "3DZYYRxewMFKt27cE7jc5sV9pFzY2nh6MDmASuaZ7zzBki5MSo7PipBvG9k3iw8Y3ykTQuFeMAzRqqUATQnpQ1o",
  "key14": "2cdDAeGPqPNpjaMCvSbvy1eR8kYnRLDxZLdbtdKwqDDG83ZVDJ7Yo2aKRZciNVx6WrAnV7LLNmXCTcU4tbUXvpf5",
  "key15": "4BAfQ4ydg4ZTHepT3B7HAz5BYzEvjpkWnfg64bVxrxx2RgJr895bpDcXBSkA7SZCc4Mq7aaBdo3CzdAK9pvPwdeE",
  "key16": "4kPPT4xTBjQr3CZBTjq4tCpkk4w1gRoKGiq9yfpa5svSSP4THUjisvdVXvtekt9J7vnSLv2G5jKUwjKKHwMAqBxn",
  "key17": "2bTbbkktnsT4Uo2tjKw1r6TuZPd99XEEqshXyTaaHJVDKuNYkhPsM8k8dmNonVwa9QUwTyzVnaJ7zvcZpB7RSYeu",
  "key18": "4f7W9wV8DB23UAxVVV7HYxjyThWDgavTHFkWAyew3JGmHe5yqv37Cyyrf2uuW8tKqhRNzZ56DsLo3HueUeohH2v9",
  "key19": "3RD28DxySLRQyRKqQ7ZxthQNNFak4TooCW88ngqcLe9GWirHKFDxeFgcVnA6gAnjYm16yjEvVU1cJPUUM3hUBKs2",
  "key20": "541FSggYN7iHajNxdmt2HkNMeixu9UsHM1ctznhzPKXh9rXh8J51X7kRx7LW2qjYmWtnEWUdTYFQHoF4VV1Jzu1k",
  "key21": "5RfDR9XVEEXZp1f5UDrXq5yCuxMSx6CopQVLfD4rQZBrBcxZmC1K8nWkdfAwrsSzGd1RviSnKCWAtRMZ9jqp9PUx",
  "key22": "2nyzJDAxRPpseWEUBC8CaJz5CUbzSba1693K8SvjmTgTXhmerBJ1SQopSYeRP8bsDBXbzCbyFotueb5yCNC1eLaE",
  "key23": "5uGdm1JyKFtGdNuLJvaudtC4EqRCQQKkNtPKitYmcqF4habBtZc7CTbYtbX4mxCT9rqt1NyP1mcfrMhcsBRZy3wq",
  "key24": "5yX79oEPmiHn8VQwqpCR1hSQmARkuwDUbKC36WDKKHPE9x888dRjYtUKVVcm3bEEHDzUbFLAaruHeaDktQhAR3TG",
  "key25": "5pqx5xhYQtBTyR16xWPH71ks8duWdagUWsPehJq8ZW44cKTfrVu3oiAaYbenM2PyyBMnqov5rxmpMKryBDVFunBv",
  "key26": "3x2u7vo6aEoZPDjKV5exDUMSbmhpp1FUkERVrvzZgTHacEoKUDtLrxgs6o6EqyZ4rYWGgWrtUxwgL7mpS1Yq1Bar",
  "key27": "3Y8NTJD3ZSvUmN9YiQ6RYJ85qracb67VSurCr93jz9VmadNwhm9CFhveWVvqNBNAceyvxR9ZgtBzAWeEbjttozjD",
  "key28": "FRtXLAxjGfdnpJDxwAAUgm6yCwL4zQYw4vidVaRgsLRe9R7tv7Dq8to8Fc9iBgRxFPcjfXCTtKsEEYzZyppMV6H",
  "key29": "5LmXaodBwS29koWD3HmpWikeQE9SeUPitLc1ReqZCKzaG9mwJktDd4e5uUdFG1jHgwUzxybgtGbaoSmaxqv12VCP",
  "key30": "3qiQWjbdurLZ2jft7Wrcx12PRR1UsJHtAe3YitPSM1FZA5QaRTF9TUAbCoMNFmoh82KaeFpqqcL9cYSrBaYwn3DW",
  "key31": "5gwWsgqeRXUJJk2a6PV3XETyYjnpsQ7rgafK1d2nbmqYAsrUKMTrkWenj5eBAtkJ2Ce7PLG1tdTLKCqFmc1HqtSe",
  "key32": "zUztVU13Kik81vHrTT1cxZ9kjHa1Pd88da1nQ8QLCGCF5XZi7wdFmxCFY1jiHVcCQsX6QFMjWAiodi3UWaMPfJ1",
  "key33": "4ZhE6MimdseVqJi6rHMtcxUG1XWSjCyifqAtDSQ4ZohekE2CDyCmrveZcmUSUzpWVi6zeP32pJQXbMFDFaiYEK5h",
  "key34": "3t49yiuhAGzBFvDfHKddPDq1Xcq5Av4oSvJiQqXWS83PpxvrJwPDiZXR33nzxYsPCu5rtRu86613SjxFXy2XTEVt",
  "key35": "3pSfUT29XMYn6xed45fngPUqLairG2gE585vvULD7GsCbXUkEY1p1gW4cbpPmQ1Eg4PJENCRdpuZ5wjnkhFW3pHx",
  "key36": "2CWNCKXWvB718xhCwX8pRLniS9RG5EFoP1CFrNDdqpu3MCS367MSfX9V4LAUrsrbo9D2RjYKWPCULBXqbo4HuNVc",
  "key37": "5kCaQk2UCo7xbjcgKN5tSnCCNxgpGLSNA6s6D8WJUNrNJfngVGVUtLCdgEhyLADtkgUgavVhmbVTp2M8qFzv63RX",
  "key38": "3fAmBcXVqyJXTezefXVxBais85MvkW6mhXtsPZkaBAfzojWrdHoWLcYzn1AMSWMDDmaquVHfPpnVPqNwhNwz8ffV",
  "key39": "5Lw1DmZrtyTCJiK2eF6F8KNPWrLKMcRHRjanPmd67xahH9jxRK7ppEL7BNt7B8NUmryVtrFCcuj3bPgMLvsJcpyg",
  "key40": "3stfuHCTHMrQZMZigeRyN7cjrPu6qwr8RLYS7i5wMEkKzeTgBJxcLLrBJ3gKpii77VRr3KUxsU58ZydfA6GdWbzn",
  "key41": "22fqFyLdThUKff1J9SNgqWow4nub2fr9oVfws6rLCBEi8BdDgJFU7wJw8k85KzxrFdtZPVxMgTf9jnq6cX9Y7pN7",
  "key42": "2hchAaGaj5YyfCndiqDCjETLkAfLL2cbwXhVsYvybeoUodFzhkRPikDCkx5iuyYxDYjYHQZD7h1paDof2xkAR5Kt",
  "key43": "4HLqSvSHAda2m6HPML9vmdqg4SPFuXLNs3wfyKpNAvSnz5KsuzXQgDvS9K5KsaaDt4n4ZVNTooaid67mq22YJnTa",
  "key44": "2pKLtwacHvxfutF9hSqrr344J9rALUpsroR3pXzEDEL1XgSnmeFr596ubgxp8B9HYijjA3uZ8M6ysiRety3G9MBm",
  "key45": "4e7BCCcqZTcTtivim4S8BjX25a3AKYt6aTfQuBjKhi1tSe28XPdDjNQPzSU7ccHVxoMKfYfJtoz8ZiyFdNYS9RZA",
  "key46": "2AequhS71avGNauFDUHbXXB4zfnXij3Aq9kHBGye7scUCycQ4zuFrZKo1bkYLMyNw28D59oaSfDLLpTFRvSdJGzW",
  "key47": "4orrHz5eqZTR5d1sZaenLvXEMvnNJeVrBzF6h6Ffqr9J2vMe5dgdJHoncxzdgpsZvF2UWkcLPzLR4e8HjAqcdwN9"
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
