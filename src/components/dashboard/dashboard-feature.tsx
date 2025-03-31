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
    "HSBYEiLD9jgV23XvrEnUHcBeQL8cPH9h6LaiPKN3YixWtj5QCyhogz8tjBvrE64GC2QkDtwRJbBucjqQviGwq82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJDBW8ufJWLc9akB6WEheekWByZDoDCY4iiiiknqLrLsr9KabLv1PjkLbCfYzSFb7mPH2kAW4AK71cMhgBkUJ7g",
  "key1": "363iXpnfBDVvidoBb5o1iWvowNmnEgdF3uJf5GmrqZJHCu7LdjJsKdeC8jAgDZftsH8xR6FHsd7AhccqDd1zyCXe",
  "key2": "46jFBNTSr7UcVwdAeJ3UFyrDkfsy6Ds4FYC6TXCqtKFmVvVNPvBaYmvwiyYvfRQrZvNrgxcS1gW9BcwBKriKHixb",
  "key3": "26MhCr3oZhFESPSuMtr192CqNCRuRRn6UuaFDZ4AMJ1AwfTCtzKroRkdX3vgiYzk3MmtastAJydkMTV9Q6VTcYBq",
  "key4": "5nuq3BKmUgRefsrqNGCY9doAK72SuaYizdWcoDFNV6M5A6E9uztaYYw5NBrCJq5jnwaTRVm4rCNTKsR2Xs3pr18d",
  "key5": "2qErpTHk5j7ECJRdd7A9v5nGTYyqxdiF7Mn46uHYj1jFtZVWtMYWZsMQ3J126Tmbv3LgHU8gkon7981sdzU4aLaf",
  "key6": "2tpwtKvK49tebBgzDPDx3XfrKhskNzxdDJwyqmcEzSXC6J21iPCseaPRP9mwmnbcX75eeuhDQoNp7NUbQqxSED5B",
  "key7": "4NLw9xEQHhsqLhMAazK8U15QBW5dEwXwsH2Arfry6dWfzXvtazN7AgyDsiJbLdBH5AmpeRq5bHbnYp15Rm2ehsQY",
  "key8": "2C1xBNVuVF2cWVEbJZzSye6UM5BDLQ7kzGjMgx2Edqn4dbTH5TvzjwRkfyoYxDVVwcEzBnHbbr9bAe69ch1yYg4G",
  "key9": "4QA2SMcqDPJg9mCyryUDxdVHFmSDdnwzoWm5BFrsVxfEvvJBfMhBuUcNXr14sTwsYhnjWopbHSgFur2eKAJwXaea",
  "key10": "2F1cvE4mNmYtRiVqXaNgPptz2yxmpr1FdNNY28xEnHnGt71KddcFkRRtDwigBk5fkXwmK9Zdvmt3N7fiHwPiHSQX",
  "key11": "3hzutPBX9p8FBUHe6QfnLa2mNxDbdD4beoacNAZBWCv8EptcTPdDHpgUVk5cGce3e6VmHmTkmQ3Uxmeze1NHek6h",
  "key12": "2TUvrzAJhpDZPrKbkekiCbE3TQYLYxNGJHkqreXhhQNyh6bLPAEQKTgxaH8umBbjzRHaGNg9Mwx3csf9orsjHWGx",
  "key13": "36Rom3o1VCZ5aqdqwF18mw2bxz8c2WvqJq95YErP3KcAZ3raTgDXYVHXqjh1wyiPrqC98p12N3z8D4DuYuSUHNBZ",
  "key14": "3dPJNXGsQab9AwUF9ihisxaU573d3WtSmtGGef52UjgBgNVMpRkrg4naiYb5uktCZesnb5qGy4YkfSnUbUUqa5SZ",
  "key15": "2KR6scEmfzW9nPV2Enxrh2187GJe1to37whjtz1xPui2tvRbyndsazDxa6UvNrn97wxzUqm5ejTLzDYkA5MP6Nnd",
  "key16": "fUkPLfRDSJCd2HSGUuHyKrhiUz5jggLmw9vfQBbgMdFqMrpqnqL6tK4vJLGA8dtp3BHF9hS7goGFGsgu5JfZhmi",
  "key17": "5wq3G1k8epMbTzPJop2UD6bjpK1d9F1kWHWZVqhFZN3bhtKEDnaUb3KNjZKikK61fN4W6X7euoVJ4UR4K8Gb4Lvk",
  "key18": "4Kv7DVHq6RW4jMwjNnQhR81AxSkmNq4Phwoz5nCG365cFMS6MAGiLB4Z6gCFbtCcsBXrzHELRDpD8gxoeYsKFxvg",
  "key19": "2mdYzNfH7uXA8awRKXMfFytxQQsE9FedpjUbYkFRnNWhFaKvwbNbdutixzLEcN4RCFrrRtmrMa5KgP2FnnhDRZkL",
  "key20": "2cvhYoxt7C5GizQY9dG6mVE5sxJFYno9CsqDkP1XaBH4BjZHPdBNJ4QbbFc9j3wbxwEHJKvweHyFmgWH96Q8XkNJ",
  "key21": "4isQEkL9LAPDYe46BrYy8MUXk4u4V3TiAFSPkSNobxbaPpmEanpc9bhkTNjd7mDDEL5Ajzy5KwN6ZCuaDuq3gTgf",
  "key22": "4YWN6gBQTtVUECB6t5jejesBcmFEsJgzwRcMhn6idRPr5vTnRWRvzz79Ta5mh1C4UPwsP8QUxkPsQi3FDaMeQpPM",
  "key23": "4oZZMhMX6bwU4uLY5zxT9QqY51LDMDuCqGQ3GtAHr5obDkNYBHqrXaBi4WT5S6PNJVDX5bfTXCibDhPdN4xtFFSH",
  "key24": "2XLGAis8tPtQcSbA5VivNMgmVyKUbRMLgo3JHcCHc3gL6svJNqAWKWLmkbHiqfoBiUMJkkq7FPYmCo7Q8M8Wc4hA",
  "key25": "3j87ARfcvXinTfnmExT2DcTGhHwYV4Y9dr4penA8sYTythH55CFaQQohsuP5TKU2Pu6Tw8w3ZAmT1V7rrroY3dYV",
  "key26": "5tKcMSQ5aPSLoCESG8L2eEyQpNqQGDoe5SAqczceg84G3uJJnobuJ2Un4odJKZjJbWpRBuJg9nrV4mddGNFT5Mqp",
  "key27": "432LvRoRpXTnn9JPRTqhfkC1ZgwbLzPGUssmXZcBbE1Rhd999gYUUKMW3mL2qimgdnCd5B7sPBvVx64Kn2UrFWQH",
  "key28": "2VMxwb7kFd3oAdVM4758vMifn6jRvxRtthdEtEZrVszbgQYqhzEREBL9G2AE2gG4piM99KbwDoq6iYart5eAggpm",
  "key29": "TXTWa5aFY7SSRYHHgut7thuReXtyJfhSb3PtTAreEYSiv4JbcXr394NhbKohnt9yiKQfjXakzUtifLfL5bhCeBz",
  "key30": "4GhEz3Utxu2hwP2f4DSvSAqNx1iHM3wn1oFAyAgUfA1uxwBB4TNVWWQtB5JGmC9YTB3MN7jmTiA6yBhL7dL4wCHJ",
  "key31": "5byV9baV5APFiMRVBJq7K2cGsDQN3FtM5xy3TQJuHgVkCGL8Hmzoa7GVzMUGSQVhrqyPN1AJ7Uj1vVrsTTn47FXV",
  "key32": "4y1LWmPbhhb8zoYibDjMto6rFgfDGQNCxdj19TwL79287N6h51Ka9p8k2QBQK59K7rmmDxJh1kkj26wMddFXaPae",
  "key33": "5G8rgJTkWwnHhne6oQb8bFejSzDmF4c78KkCxzM3FdSrG2SfaQYX5nF5a2gpsDHqEc5NfYyXQAqA1poQkT98xpT7",
  "key34": "5rLpFhtHa7tqG54rw9B1piE5GnH3VZFTDQichag4qZjCjVXcS6Dyt18Ld53kyU4Zyc1DJgWa44K23tYmVCS2u5VW",
  "key35": "5TiZKaycpYPVZ4LYYuEU3QxzUzt9LVrRWyK3QGxqvtuWQT8N2Qauq8CbjRhN4BN924v3MWL9dfvjNwHL2M9DawDn",
  "key36": "4x1UFJNaE6GVuHhJv49DaP2nekc2kCy7umvNeFMJRaKwVrhjzGwCRaYCDAM9aWJem3wpjvxGmMC62DLGj3vyoEjb",
  "key37": "3uPuWHMgXtVmTn51NyPXNBwxxNX4gUyu9CFwHbdNEUcDjXmtiVtrnQirMTaPL1ngKcSy3JNmT1wB4osGnNUQChwt",
  "key38": "4myTCS9MWhnhp4pb8rRARnpUqvn3ZYhTmddVSnFuTHxZ9ZbQVps7arbRj7gWsyZ6Z3J2nmjfh1rcFmwA9BGur8ij",
  "key39": "5cC2GTsKeMbxp5pommTmo8yi6WQ3yfsfcouhjvrw7K6S4tF5fE2VR3GBFSK5YqndeUPfFSWGSMeVrPribemysVPP",
  "key40": "pttfNGZY2rTGZWryaK2LJYAEBVMj2uE2meEHR6NLgMGnAAE5QFeFWXWNcFi6NZsPpbaxKh45i4RHDdnsu4fppTB"
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
