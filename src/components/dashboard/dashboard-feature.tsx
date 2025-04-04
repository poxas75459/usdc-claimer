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
    "MnS5fTWMVGGtL5CrPxJ6ARBX4C8bkfR3rBhpc9Bwvutv7zLzXsKCwVv5krrFWuzi3YPC1Q4ez8mxWUTKUCyc3Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TfT2W2HJrGLskbTdJ2my5qFQFb9psMUYhs7jN65bw9QojLuzy7ipd1gBgHr1dkbvc6VN56cMSCaQJYmHGaTjycA",
  "key1": "5qrFs9aEUL4bLso1KX4pc95SZ3CgnrS62f8TNXZWRX5Ct1DXGytvXi1gYArkM8R5nrfaNZ1Anrvsd7oXY3DR2qmq",
  "key2": "3eBTieo7fv88C1hRpeHu4ziQXcamgob7dtrsx3pBkpJ4tnuVnQ7JWVduYkgJFFfmqtgtkeAym4kzv2Hq15wJQVYQ",
  "key3": "5hdPXRdorYp3RBzRELJMP6w6W5BcvR12ELh1q8NfASP2cGE3qBuP9Xy9ufLZ8iosrcCTNhtksXqDTSsgJWR1oDtm",
  "key4": "L4R4u2LjCLMBKbJoBsP2KMVx1g44dFU7YHXdGW8aq3S5cvhqWH9C6cHK9Gx8LHtMNME1Y7QMLDgVfj5GRvFeyTK",
  "key5": "7auPbC8cA7BrV7A1oB9pTtG3rvvMn2ggFCSqxoJL7Z4XazWDwwfxS2BzAYYSQ2X98Uy6HVTwsguePVrfZEe17nc",
  "key6": "xmEULsJsf1qD1iVtDCZdSYohkSw4YqtQhFZwZwSikrbvvT4MTBcAA7ryE1YF2Yojpkb6NeKDZQbEvoKiUkG5SXX",
  "key7": "2YGAdA8EU4gqEXJsDg4TAi3G5ksy64e6pVxirYKG7JhRQr5xhX8m2GG9ssY9fH4JYqhdmxnitTUM1DyoyXVFBtK8",
  "key8": "3SgZK4deYXrLDmnC7mawTZruPyPzZDVSMirGnLk5djMDWzgBVCtP3RJSohEfe8ci1xUm34QCwcovvhzb5uT2P6y5",
  "key9": "4AuNp1TFGCBtx5uFXVHJpcKuCTYyrZTqmh2L86pp4M717XhnHAsjinueCv4rgbFkDm6fESKs6h3oZ8ASMHbuD5Lr",
  "key10": "jYta5vtqeJQMeT28w2EYqNyGcpdFdGCGHdSxMPhS3nwS7yL91V12ZFxgdG9WNQ5M23ZaY2RY7XfYVEBv24dLqXL",
  "key11": "5UccKubMJX2S6HFpa6zLq8ToNFTfdhh45z9nnx5qhvJbQe9TPQ8pzTzubVFCTtRpBnvkRW89snK3Ur5kA6bPQX4u",
  "key12": "629U3JymqCjqheMarwRdbriDDCvE12pvPYmLts4oR6zQafEuH1FQEeaScyS3KZRXzeWGfeQJQXZxX2xJm47kEdoV",
  "key13": "2FfqaPRb79y2Vo1zjVNfR1daPjEBb969ctvyEfZEXEbQrLGdyvKu5TKdyW8BEkqVkDszv7DFEYVSZQMpV6Fshjd1",
  "key14": "41Yz2FAbbbxed7axV5kcMJAZD8NPJu8r7YeKsQ1HmyK6TyodMJdLHW6nC7RxnCZB5oBV45fjwweXbbLM3Jdw5uJ3",
  "key15": "Vwy7hFmTHpE6ApbCL2QKH85a55URcEPeyYFN5HtzPbkrnvLuUaPky4uxDwgnRPBUQcVgeNMg4uMXY5YzbnxhKc3",
  "key16": "2W1YZSkoa75568rrTkNLuBNSbwGHuEyYx6CSWmUtSPCbZz6ett8zxSmJfzmYw8neUNAbTNSZyt3SYbtbXvMgHBqQ",
  "key17": "jyGiMpnnhJdofEtnPYNTi2mPJzBJZfaM9uwrK2FzPCDq2daciTxr624MmgQtp4Uvibm1dByy7qy5Vke9Rf9dMVR",
  "key18": "22jeyh9WxALyBusRU4Tj11zXpnBhevZmVsdJm64PwxqjV2eS4bezULLtnYCPBUNqQzih7ism45FQHf7r5pVBoe6b",
  "key19": "4orTNaivsatxjnWQy2beLfnLZaXkVnPv69JLYBmduZ1c5SXev35oSx43gieNs7H2eApXsEQiA9sAb2d1Cb6GB1bu",
  "key20": "3ZfE9GLvSFjMVkvgtvBYX53xoPSG6u7V7c2W2FtwpK6CsngiXbD4SByJx7C69LCefSMgjSXzyYDEVGBEMp1TtEvQ",
  "key21": "3f36AaVeU8ns48EiTWW7sNSs7cD19LEf19HH95khw1mCKuK2n4ieiip5YUtYZGd9bCTQunYAK7uonWPd2K6bwEKD",
  "key22": "3ZT2u4pP6URvrsYPhYESvYnnj9MYgKeWCvaf191PgRgXwP3SjbBc8n3h7a5QAr93Mw1dVSWpDy9sP1EmWpXaQkUJ",
  "key23": "5d3Rgcvp7iumdinMJCoLpRxbJQTYi5FzXzVyQ6ZoEMVXHDwe5E4rg5drmmuW1tFpBsvfd2jjFJkxqnGhDnmAhFZA",
  "key24": "J7Kjxw6UHAr3DZnnT3DYTGFXvmsEfuk7LVyJ9m4sWA27qbCLFUWtWfGAxYk58z9Ukcu58FZ9SdYDU46S1sBjxqx",
  "key25": "3dewYbnMzVxU6m6TBJRwzT2mthhFnhzzdJaNsMDRmvMnigam5VbfTE9aXMWjdexc2RZ1VSpxjfaM8hEGi4mW3cne",
  "key26": "5KGyscKijXxMM52TwArWVJWfkx5R5n1waVfJqu8eKnGDLh5hj8KaH3dKSAvofbVUamswaUH2AGwbqKAbkNLoEn7j",
  "key27": "5vqAePkcPV4JQeSQY2898wZFSxVuT8SSct3uFZc3yHhSZor5DoVbJkcfY9NQz8MHTkwxGwrMWRx7f7tnzvCMKXoj",
  "key28": "y8fqMjdbq7khyPUDrPyjkzkhohpqqF2SyejSC2DH7TVfxiV5xFVteQe2WDi2XTjV8R3pb6W8rjhCFJ5KWtd3vtc",
  "key29": "Vnv49N19L6TnwZ1GvrSniTzmm1k1jg5Nu3dYJuPD7kTZPjs96XyfZZssj5rX4VBihUkZvXMFXW5tWQMSrVmAgW3",
  "key30": "3pY1xfbgc4Y3LBZPvTKVZ36TbEaftp4Q9J1bSG4LTJD9AhcZHJi2xPhdYkpmNzJGKERiPwi5LfETFWKXPen1P4nD",
  "key31": "iYZLBQfX73pdef8gSynLCs7rcQwAHAPWBFZUyShYCSMWphdkvsNrH83G47CP9PwDYV7aPwW3g8dqYhUvsds1qYu",
  "key32": "2zkRZwGk31ZK2psN3fFNCzEQNyn5AFURN3ovJxYmXbZTMRCegQHtGZhheU5qDzTCsbf4K8ztMk9nr9wSjQ7jXBxj",
  "key33": "4qQNQeJvFufyAm9uvthhoXzFdSRkntuEis2j1Gsd9TEiao8KTLzBJ6yTChcQxGGyU33PNWhfwSTi4CR5jynE78De",
  "key34": "3JVTBYmCihKBGMNfH2jYxgeKWhz3PYuSY9kgkKn5QMgeqTkDHco7e2K5pZUEGSp6DeGFzDdcpsCmQTQX1CXLEyjo",
  "key35": "39mgBMMuts2V9ZYiQ5pRifrkV5q4hte7krnof24VHNM4MvQ5P9vFUR5u748cQSbYHuk1C7gQ8NySwsqEet2TeDHB",
  "key36": "61DftktSfGnAUneTWkyewTb8PZSynLY3QG8e1eakVqqoPLjsVWnUUvrdzyDjBPuUWwy39XFwUsjLBFDDEtHBta1i",
  "key37": "3t7bNcpzjhQeuP2KLfRYAZVjcbjLYv8gbUUvaj8sGcGDRSu1yaHNwq3LrSrSMbCSZezToiryg9hmmQ5C4gsUyv2B",
  "key38": "5AAxP3CSkRLQk6tgRPNSi2CgkiBF9doGazvvsaY5rkb9F8dwGRT54DbEYKoi43g6tenBV3S1NMrfM5a26ronMMxC",
  "key39": "bcjq35iDUoh1bzHtm4Bz1aFFgWjdwqw6BFxSnyExPaq12aAUPtNSjLschzu684WbrWdBXm3D2uKcQMMSjrrhF8c",
  "key40": "5Lb43cPZnB943egoCGfFsGemwq3y3umvz6Npy4ZgksFKYFvPbLf3HKihJLBCgpn6KqB3NBfDvcK68ZvUA9s1veYo"
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
