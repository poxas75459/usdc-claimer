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
    "2sA1p9b7p1vXSwRfDndakYZKGFAWmA6M1WtcS3jDGp6MqxmKNYppK5XnhE7Hm13q1tpWopX7AXpfAN9RnhCLJHwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUe6v6kuXrszfsboTPDq8E25WP6ZDyQS2u1VHht5dRticy6tBEDSuaCnfd4imXECuTqGiTzmMNuyqLrGgNPZP3p",
  "key1": "5ZfmS5FVGtQNvTHihtNoJn39Z3rP37EiFgzsyuhzgXzDFnbBn7Ronj3QF3wyyFRdLcaMhD2u6fDFHsgjX8PFkxoq",
  "key2": "sv1c5ugfnepRwxNU43bRsXcHefHX7BFMuuFJ1n6e62XWPgqYt38pGmowGnGyeAmyGKW2zfJZbByjLXNtzTRiAf4",
  "key3": "21qsrBH5RRKcU23VNBkx1AWxcsKrZwxZySKfTDniWZrZGnSccsvG4cdAkVTmrEoUe3rTZxaBJTvDjkL6jci9m6Ey",
  "key4": "3rcSUHb5Tt2z2bakcQcLmXGwGxPCR375TSSLiQTUrzSZwDnTHeLCoSm4otozKPqUc21EfU3KNQiU928uQsk7XT6K",
  "key5": "2f7FtZwZ9rRfYFY9EBLbcXnL5yS62c3Z1Me6xZ8cNxTwZijv9FooUVDmWsQdSmmcE1gDskwLpHU1L42fpdCePCnk",
  "key6": "5Rz69gnryNYbDECCnTASZkHXNGJfFzLwqyWmDcV949Uphh53h7oEinzHyMn52bXP4ARmTYBj531QyfbPnBR2HWC6",
  "key7": "5RGeBnRp8Hea78bn5PJZDfo8FSr1Dhc1QZscu9pMNM6z3Ns9yCesbqcQhvCp3Hh5Y2guK3cPZpFhcsukSGsgVyQX",
  "key8": "62ZFZngTksFNFDvqVT9QNhJBtKRjkM53uFqXoauhrUkhSaz6oDHd39SXcJkMF4pwLuVDwAj8qr2mi2GggPVbKtrp",
  "key9": "2NshMRQFEnjvKmwQ4ghmntCA1Xcixu6dM5FCPgi18YvQ4nukcWDNXKanqA1GC9P8QAsuZTasjNetPFVogAfsYfsa",
  "key10": "wnZu62FAaLe2UEmGKsDLPLr6WJhjhiwqJNzDLm23ikTAhTrqB2nEcUPESTN9CopokBrE3fDLgD1sNhVR8XPRreh",
  "key11": "59drUrsEhMyWEhAZ5chj6tH6RHXCnsJbVb6bVkbsMH2fvkQ83aWsFb3TTscvJVJW7cw6ALpDuPjFsnedCont4iF4",
  "key12": "LnJHcLfMAYHKMiW5F32MF1MQNkgDQCNxVnuuHCFPM7cZYczKKXUCqEnF6iHaMq5n7xNKgLbCmoFiH4qBdNHGUH3",
  "key13": "53swqsGQmD8PD5Ar1JiUmYwZwqqAmCyovzGwJUtoHHX7D3xHCGthcQmNc1ep1fB7DVGR5usRaRBJLhzNfoqieJs8",
  "key14": "4PJsQbAkLbs6hEJxSd9sXFyCxazKVNUHs63FXn6icMQ4n5uT73zA3jPzVVc9v1g9dpCbqevRmaMyfS4uLC6B9dsz",
  "key15": "2FjqkJJSNeywFR1PRR6sHejcU92ZExmZb6ksqGXaL3rYdwVPk3D3rguaq4ddatETZ2R6BoSkSwEmaCb68gPcUiqA",
  "key16": "58rgQMMzhxQjexiwbkJDhPotzyPCY639cQtjBLnRSdWVxdfY4MYNYLiaAdp9HkVwpgf4ERyc56TcnBo7dDqQ2QRG",
  "key17": "3ELqUq8mCv5z4eNi5XvrUfR6243g2vwLs2ptuS7qMBdK1TzCPtZsxBFou4ozAeDeNNaSJbqJEMxXWoAU6Zb4YLSR",
  "key18": "4TYiD3XwyNJW6Q6kD14x8yjZL7nHhyHD1npxAzDTXzVLUE2noik2gmbckSrL4PCcdYw6W1LsPAyKUjmktvC7gkyj",
  "key19": "3mBhUvZyCqVEnyQpLSe6RWHGQH73fqoEhHbccWKGTkkjgvh3AsrzExvQ6y5PdorBuvXf6XQg9vX6qDes36Ygci7e",
  "key20": "3GJLDr1d9bun5T3zG6NxF9CVS1rZR3D6hQxuXfoobHpn4CtMyztaEHTSTvYpZ5oaecBZaSGgGPRxfXKDM9oFinjH",
  "key21": "5a1hqvPy2HJL3zWQX6ueRkUiTbETDHg8CaRHuqtm2fVdYUdSMtJQegfP1Xrw3SfE9txD8Jw94PdpC4pvHKMTtLgJ",
  "key22": "3ScWgjqFvq9i6WU926D7ChPK1XV7E3od3JbZkBPght7aNeb1Xvuiu4SyH7v2mCu6h2gJbzAM2rALE6i5HXMPCpvN",
  "key23": "5e6pBECEkkKVhP4otdmENcrBrveHFURQ2QpHBmah5WVSauyV2ET347P8A5fBohotPLQHTGiGyRr6mw7iRFAKVk7N",
  "key24": "5EzwUpdDmwxiNDWJcEu1QEk5gv842sy6LhDBLDSLsJxMZkRZmmaiik53cDxpXLxG6XP4jnQWNEGSLeZeDyn74rFE",
  "key25": "2evxdaPx7N1Km8QHKA1yqSfinK7jDQ62BCT8cE3xAnyifL6MnFWUCZBaJNyywSwE7HHoPweaXUK2XgDQWqq4A3Tu",
  "key26": "vndYoFwfg8xseEh4c5QTSZRBdiecAx39KwhN9vMTkW5fvyP19FZrJjW42kmF2qw8edM41LpphA4BXiHBR1Ru11p",
  "key27": "7wDT9BVNU8XVxLkd1Eu85F9AzL1LgiJkPV29XgVrDDSvsYAAjgRRaythAbkkBTaxeNUwZBFo2KgRXYMUhtH3vY9",
  "key28": "4iH3Tt6MWXPKy5FHpEYXg6dEtWujTe5o5UwapXL9BcBeRsi9FaVutMJG5SEtmuwR8icSZ26nZUwHFvxYztUhqVPk",
  "key29": "444TRgKEnj97idcUH8mLQR8vKUfDz9y71QF4vdr2apHBwtPQTycMRwYmvWa1VzGia6qgo4nnKimhC6F9VzCR5VfL",
  "key30": "YTERg6YYav8ZL339hLCQ7tAYewa5rcEQ15FuZKua4cvoHXg7j3PRmUJ9xDNbEMGBMUxSSEsnaEE62AxzDS7iytk",
  "key31": "2c9t7pPw319TSs9HrwgQuv7AkzzEb9oowbp1jwykaCtAfSGpJ4Kcutp9ATYBM3E3dxvEtuiVsi8f4drREnXoEz8Q",
  "key32": "3YJFvLJFLsRafXsNNa3M5iYqiHt4dRv75L2LGQoJdkUhMgLVCCFFgQFeukoitBQXJe5tb4QyqAAfWXByuTnJDrAn",
  "key33": "5XYWPBzW22uBrrMjbEnyRZarLVJQBf7tge8eE3mZwaK8DmV4XJPzh6vkpDav1Yrx3KTmxD1PYNmQzP2uL4aLYaVz",
  "key34": "3Rf7rhMgVCoo3nmsxixiA6evyVKgooxN4x7oGcj61WXTnDnbJmKLuBtNEco56a2bea6x35zjaCdQARhSgE5qwcYQ",
  "key35": "5z9DWZZhmHAPFFh2B63CXm8CRhwGpZFou7GUf2j784ApheyQAsqujh58PdGjUEUiVd5spJqsYXzqU5geDL4hY662",
  "key36": "6RDDZVtn2TjVf1kmp6UsEKDsT7xSNippZH7BZkS1dXdZHErSPaU7BoFYCjhGW5UL23rBBUzzkKEThU6Kb9nkYuz",
  "key37": "4rcRmWeT3A5RbeXQbEuE3KMDqME4Hi9Du92oFbCcW4dGpZsssAcaDrX3oL3T4PMwkJKJKuGBG5gH1gKPEU8fFzz3",
  "key38": "5uCXFw6wmCZEcgZ5PDPQys2LNS7ybjQ7Hp1CnUvBNChWTJ3xHwcknAS45hWH8xz9WXhuTA4qn7iKivCbJrVyey2N",
  "key39": "CBddABDVRxrxzaka8bvRhAAXzq6THyb2YfdYq7RKMr8WNdE19bDEvfrEaM2VhGfR2efoZn1YvcMf9hra9NMEGNf",
  "key40": "5u3goR43gDAq3rv7wnKJjVTvEQDNjmphQcpHP5BNdm7fhpCpCu7j4GAa6swALU9qZpZeDzGJygBRXjxiR2tqMVYc",
  "key41": "2v8EVCjeKQfvnL8P4RKEUJXKJkHW8iT8JA1tvp9jZVNnLQEHstZ57K77cbckQCpWMEobruiPyDnBiqeUYDzV3rXy",
  "key42": "5UywH9b3hk9h4z3xUq1cgKtftxFb47VjhdtisHHaS65hi3NzH7MwQJG4Y1gVYxSUZnv9xNqFmp91DkGk1KwiqH7K",
  "key43": "2FxEDsFPaL7JvXnmXDqR3eha26KeB34hxSzGnh6W5WfqanUvR6apc5CqrJArstQ2fvuEy2nmxzLZeqyQR5oqaguF",
  "key44": "CR1ivSTuMMngG4ckQYBWUumR2pH7RJsdtxgKtwGjKBFoKc5LahU3FFvsb8NAqd9RyVZSvk72sqeFDBZyzepqgTt"
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
