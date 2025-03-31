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
    "2Dw4b83H2bVAjHSzLGgmu6kNL7Zdg9aNPc1ujhKuQrB64ec5uR5niEwT8mRZAbMu9Sr9WtLaQ4f9M7PGSJdiKLYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8ifqL3Ra1NGUEnw2nw7jBa7GGNWKXk8NsvadpwxtVubL8uvFMHXSJw28W1faz6uUURzkSUQ1WGkHQVcbGBSovY",
  "key1": "5Rs5BsyTaVdQT5wCux8iUq5PjjtX6xcjsRTTo38q211BdzqsXQP1bKxfcP5aJqoer111GryMCJtixGvwfAaXB1z5",
  "key2": "3kikJWePMk7NyyAosvzx9Nk4kwZKji1s6qKGWoBTH63oSUwXFc6aUScyKL4uAyRaSZmnzXLd7gQt6E5GLfeXEU8J",
  "key3": "27mC2r5snLkqwt8GRKRcV2yZzhPJDZQqdcCLVVNrpsSPnhnvGL5MVYNJ7AKyFPLj3eEkydTCyrjndZCw9b9GTKaZ",
  "key4": "2evfRcuDR2rmmqEDmjTEMdrfZTHLD9Jv3ciKxxbnE1UHr169SmR4cWE8xJoEgFf1f7cQZyZVg1dRwyx5Hy97uxUg",
  "key5": "4Bgasiv35EVVqWZ3Dg9a2U4xbVy9fjMf89BscDNgcL7GEiRnAkevT1V95zByjMakRopwZGqNFnjkRAhcx3wrxj58",
  "key6": "59ZX3Cuj9Gs1x456Q9nJAU7yNVRVsC9XVDy6XLZoqv8EpEqAZ8vdvtGcsfPi9RSYjFKhsKD7Dt8V6LvbXy4hxVMx",
  "key7": "5pHWr1oMpW2ar3WsZfvzxAtcXmFWbtgorDaS6wKTn2Ge269fvvMHhy6ftAc8vJKV37P1r5gCXn16DVCCioAX8pTN",
  "key8": "3u8kFJQgNJeBpgTMoisAFdEnAaaYcGDDwbXC2Ux2uRKPDz5bf26syb6BiycLPA5vD4Ry2dw7snjZ5DFpWMyTtuZp",
  "key9": "2KcB162yw93pG2hcac1wAXH8vVrWC6DXyxz53kzVVhys5qFuyvtPyUSJjpVozQhjGxoAkueyXuvNH4xi474qcjHT",
  "key10": "2bjjMAwheLJUsbV2tQq5u1tFzpTxSxVsrHcuVQeh2LzUrEs4dncUnEkeewdSwTWbjs3tsZ2fNtHPmfQH39nWZPoK",
  "key11": "1EXLdWUTFWvjCQoxQ7wGvwrMHWQMJqaEjb69Sn4d91hjwvmv4nrGVVASz6DiAEoxzGi6jA5eYo7X6zGiXohaKm9",
  "key12": "42m5uDSJMZbhcYodbk3j4otE9nNAAzH6eMRF6sY8XjpwSTumi8p85peQnBtNNpK1EU6CbeqHLmLRzqhQtDnGEBrA",
  "key13": "5AwPFVE19HYJRhdrcAzmLxLfh8JorCq3fA8wsekBW7NGHPUPEfeWUwvHfvUEpUqXUydfCSd3eUcqXeX6PFpW9XUp",
  "key14": "52y4pkryAG9WM45zXK9Hux2svaQTXXAR5y2ukma3K1kyZi63c8RLEq1ojbP3p7zfBuEeJY59ffWWVJRv472AQPe5",
  "key15": "3qGPvme69nCK7sHjNPrVgTQydgTVn4GMFxVPhMMURG8maZE1wxhanexVxZrXEQCuQwVGidprmV4AjCKYxeQwZuYx",
  "key16": "3GWaCsqEMDq1u9jCubyqQBufEZMRrFwUHfuy342WXmvANmj6rwRPX1EaKHwNkPqxPpKaAgcdnXynhJGkrJhhCiXK",
  "key17": "2muCvrHiYeCp6z2712F4FdS4L6eevXc8Hv5V3guxJwFrTE5BN4oFLW3G6aMMc9qxzo3ZgVrnqm1wgkSTB8RC3w9p",
  "key18": "34sjQy8jejxsnegWMogzUWfbtvhqx9KUDtmyADB9fzaLgrXkfzE6dUnK61L6557zkJhuZRohY1MdN83fz7cHJ5sR",
  "key19": "3GsUQ3vpG5YujfkDbqoRiXZxjm8qXa4R416siJF7hrM9prhafcdZT2wMTSWGzpddiEhoeW7LbNAymyKuJ5m9akF5",
  "key20": "5r1vTt65unift5w6dna9cM4akgguwzFmzdanHp7DN3qDLGC8s57eTDumtQ5tgKkYSgC7gd4jZszuT78DQrdZE6Pt",
  "key21": "2LhxvccnjNJqu6qUCSdEJmo82jvXbZP9NoeapUYiDCc783ezMewn5UR5E5coET6wtJbEFpGDX8VDaqQo2vnoAp8C",
  "key22": "4wWZVGNXD7dfZCa1ZyZYFNX8PDewpgERYBafVtW8U5CRBkeMZo1aASMA2xmepUSGXWQPvrJ3HvnSKbs4S2sRpArR",
  "key23": "2wm6dMpmpWTsmiVWgCMKAdUe4DULKpAQegWtZbAxcyJNPshqhySynEfEqgwVTxc45ZVTmzeGC6kMUnkwGpqDNTLn",
  "key24": "3cfx6dpW43qDBVFJi82djGZk4Fsk7Jx45zF7EqmjE6CDFGhzJsJvgA1AbwzbvsK8cYTezYo92MZ3XcxTfVTaTz9y",
  "key25": "4uRtHAbCFqzhYnmMkEjpAtr3Dhew7HP2qD2AYrJh8hfPyschqc1PghvL8xxnC9Qj3J2Hr88UUsvbYsNkvj5sR4Hi",
  "key26": "5HyGZqhV34GKzLsWvQ84fKqJSBzAmkgStxSW95FhvcXgbzDHq9kQuoyejewQ8kFL6upDPBSEM9qLuVrFA4WqZ7Ct",
  "key27": "5GDFWdjJaYzPE4yj2HRzkA3PRWR2SyK78k1EctVyRDfSLKFiWL1naGu65ENh3tLM6mmkdfFSFVcJfB9fdMStcU2A",
  "key28": "7Ek8G2FJD5CWikBSURuUvM4XDDTeEvPYvJ3q7y77thv2BWW9JsgK38Pi4KW8wvQ4EBVzyeUxqR18LqTYBk1UwgP",
  "key29": "2Ma5YPfaLLYmHZKcFGLf5o35P92m1yaGxt9Z18Q2xFzPSeFfbyPkNxvrXx9r1zdb69W9Jh1yFWJVt44B1wRrnpdU",
  "key30": "1KZamgiHH9RcnipvD9L5HrLvYDPL7idy6LJZ5J6i4uip9sAUbGWnDK3R2CbrGTvgguz8JnoV4wwbfygLetsoB8e",
  "key31": "4Ah7Ja1MExNwfr9pd6PfMLbV2qU1aSN4GgiZm78nkW2BcpRET81ib1m8C9WhNhEiTcvn5aFoxSaVoicg2z4ro1Py",
  "key32": "3W4EJsyK7Jnz2wX25ATzYD7yWp9CyTGYYvHrxeHoy2vsCYqRje5Bbnr5WcrKHhUxeBxzMTEEE7TQr4p1ugpyFh7b",
  "key33": "36bAQFK9v844mVBAniFVbU9nkmRPVF4VyxdcPFUvt5txdzTy9GXXY8rJpJkPAX4iPnjManJeoWmpA1RLBDC8dDEb",
  "key34": "5eP6poSv5emm9m7ELo3dHWMuVHmhi6SqytyvZ5u1sefruuRKWrp2VJJPpi1gBbNifKwtYikNDeMympKKXeoJiuEy",
  "key35": "4UeqxvmTnfhPp1ydjQAXL79pcQBisMBeVzwF6D1iDwoaWkRphsLFjLLX3u5pJJXQMTmP58PTCoE1dfNPDQTX2C1Y",
  "key36": "621pH998JvCRZYVHX8PQ71qQYW1WtC2hvtCktczGFvny8ZUarf6ZpWo9QPahYqQB36edVQjzr9iVrtAAnnovJ48w",
  "key37": "m9ohAEwK2NLyyu6MLa1a2fNtE5yBGEquPY2ayTpR7e8wkJPkwnZYKcJQtg1Y78pHKRenaaA2YYEKH5ZzEifiBJp",
  "key38": "4vqXZcqSUmiHkdc8A6eQDAZWFmNxpNLMgj975JcgYozBWXy2DnxHs2r7UhE86GR5MwTLtiuUcdnLETuQAYF8Gkcd",
  "key39": "2P1w5BMByecjSjABZEKNCjMRTjfBKY8PZ1dJqhdrWcf22wR5gxQyneSQ8jjLHFeWT9UELWz2y3VGMikR42YRcfeA",
  "key40": "2pvdtB2LLREPA8DbJfB2Uk68Nw3gdQ5gDEuPw6dy2F7oRvvzNehQQoA2QHkGZRebhoEyrxr935juQ8KGtuqJEFyA",
  "key41": "3Swz411Hceh6b2LkwZRGfkFUPyJk5Q1S6oNWHrQ3bJv4nYJTWXZ42fRY8xRgJQzYSSSNEiepchbsZmWvnAJBSeUN",
  "key42": "zL2YR1114SZPyyX531dCSvn9usGMNmogPJycPLSFcMu6LiUS6JxNLeeMourG65g3yr2DaKNRxdyyAZhjNysVKny",
  "key43": "3h8cpV1vPmGpKY5dLkJCrMMTw6ExPYf1hWNAuxeJHuuNdGQeAjHdSgX8sSzndh9Q6sXnCaBNsj16UL5R3HHZPKmY",
  "key44": "3DfE3WnaM7YUMwPRAtkZHJyHh8KGitax52A3kj8RAxmrMdg5a7VKBoVSvJbdrwY37uDwcibJXgHaGCMbwzJrTKUF"
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
