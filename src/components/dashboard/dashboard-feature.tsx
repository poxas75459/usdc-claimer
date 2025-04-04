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
    "5KkhMhVQXFZvAuEScAXcboCygHDAb4evtwKBFXGJJJgaQVUp5Ue8eYD79keDe1HDABzvX9QzcREyrhEa6zfhkWBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3HAWc1rdFFPTWc1zHdkKfWJnyyNmN6E62SYaf9oUZPfycWGWHDQ5yWxz8tVruDQcbJQzL8Y3BUwygJwWeWs3Jk",
  "key1": "2m4htRq3rcJ9WMJGs7e2UHqivTZhMNuGhonC58wXyGHRYtvn2yxUFpYA2aEZCY1uTn9F2YG2vs7uVVEWaNptGQ3n",
  "key2": "64xUZo8tApcP9LYqrHJtnW4Rxn2nPHR4cayHdHP7ALJXAfiESXgKXThVyQdZP8eU7zgxboxvARioPies3Ce66sKp",
  "key3": "2o7tKCMmrDuZ3hqw61bT8Xe21Ra1Bx3zdMk1mFMStxCQUWWfGC8mm16UDPnWaBHDX7RwbLscQLiXrZg1BeK7yjGW",
  "key4": "9dtWr2xBdibyWobaauptVaFhF3dACquRhomz1BTLWrQWv72YZRWv1sSw2v1j8V93nP95rgkYbyCMtyznaN5JaXw",
  "key5": "msR4PMsNFLL2J5PH6GR56wCFvuFouj8cFoaHiDTmB5JwPpSmkebcu41fLZKoBhF6AexcqPWiZiADZGXJu1bZyqK",
  "key6": "2t1GPHnwY79ZS6RzsH9obD7ttYe6YxWNDi6zDZUUsBqjrdQCiYzQTdEn3JBL3DrKX296d7dx19dGLx67sFEGxWnp",
  "key7": "5RFEUbnaVxhbfnWnyWED1wKwEgFMGEBCLKdye5ubj5XCpQP6AfyHLFUj5gMSxLTaYC3o47NvCVhX2EhL4hJjk1v3",
  "key8": "4Gx7c3qd9R9sfrVxPvVZKzpVoLcEdSjJYmEF9L4eAuDt3L95JHyatiAXZWfVa27Gsn8MtihsugKKUSQ1X7BzLFrE",
  "key9": "3GLHvmQKau5KRcHvCrudKXWiF9HG988aFdJi3NMPrDHMzJLAVTnD1B2W9qWYzQVDPiqyUjtFwr5vTMMPDrz4zLHa",
  "key10": "4ufT69S1HebiWHq2euSajBtkxS9jUktZdvPN4Q5kqW2SD5JupNDGKTBpCXQ7W5SDhGyafdf1SxcmPRzBiakdNN81",
  "key11": "39mhEcTvvE2CG1NdPSZSmnsRWZzCNrMzxVLsqXur8MM2vmADE7oqJgkdZq7M9dtKduawqqBiXZXqG1DdV47oZsQu",
  "key12": "4YPZoWkvCpiE32ihmp4W5yDkMxWf1T5GiVd8WRXH9DUUCTe8hQu1ce3ZfJ8soagkbrKNshgYQXuX76bGxxstu5RK",
  "key13": "5Hp9Qu8eZCxzNo12ZAzTsB92W7FKEV68meS6rcvL6U7c6J5xeG34zERqwM4jM1hS8GsuSc5Dpyi36KGgJxqKMRtL",
  "key14": "3rfr2sCRGzoRhMr3neygTPQhtrwGWDNbw3LpsdT4NsTNdfFvCSLob8dAk4wwC83dGPaFsDHJ5ccLdPiqjtYezwDG",
  "key15": "3HxG5Kh77h6hJ2G8cLDcKNzpBQEBW9PoceC86og7QRYjVJ2BEkTZKaCEpWcvkp8Aso3iemXwmckNoH9eDDpR92my",
  "key16": "2Zpeu11tJvYqwm4H9oxBGsPP8C2WWMdNue6jvBkqPWNxbPb585ZZ5PajjzmbHwwjho8ciNyejjB1ffQ2gRPPSivb",
  "key17": "4oEnyr35BzFwnW4CPQokwxmHQJ2NfDcNZXtb8BBVG5M9BTSvySv2Pf2fgdwSgWkKsr1uJLFcp3dC4Qq9PihCoydi",
  "key18": "bGsQFe2YUd6S66UzrcEJUDHJsPfVYiMGAYtqKpQMtiHvg2xBVQPnkpszQjEKJW9EC7V2NaQhSkSe8iq9vA4BRSs",
  "key19": "2gmUngwvSqMBYiV28CmjEGgPLf885WmhFk3ueo7quCrZr9URX7yF9FsjyVhXE7SeGrMXZxxZBtVRLUu6MsAVBXXj",
  "key20": "592ATqVGAMWwJF1k6GU4cEG14gKgjU3Due5ejsZ7fMG9HFtgoX8rqLSsVukGgHKTLhv8x6RH5jKmwjAJsmhJa5GU",
  "key21": "3siCrntbCYfbuSkiJzo4jHuS4ZbGgCHTmXFWKKRXk3181LoGWcjHGEopv7V6sk7hbkm6iP9gr9jiY7wS6jVSM2XH",
  "key22": "2nyNwGGCDT98xeZU9yFZQuX3yo6WoTZAaEVq5LJuPBKpfNQUSKzqu3bMogDwH2hNjw6xzoBc1zu5VorZg14mHgAb",
  "key23": "of69LZ8aC4KNudCHbuSHSxoXZTWPZ4RDFYY7j4BrHR6ow8Gui5JJtLrNrEdKhp4qRe2Yghb4ViexczPmFzTBRQL",
  "key24": "3vpAACjKRgqedNqEojdyFdLGK7GVH3kiqH27knx2BTyYWxHsqWzPYXia9Ng1myseh1QMN2AS5n2dYzm1xZ8gVLE1",
  "key25": "5CsrASaT6baNSCNL9zFb9i27gRigzKsqvvBfEHokRef5UcXiQMLe4oui2Wajdu4kmAoBP2d2UdTLP5wTjTKB8gp7",
  "key26": "4xvhtK7R29ZF6CcYW5Fivib3d8JHdhprmMvFnWhZJQXsRTvrnmQ9CjaS8k7piew3z9BsSCWYLkm8DkTvvbcXERBz",
  "key27": "5YAJx9xi2hV5XKipXmpuAsxgxJeqL6Jtx7gF1X41FgiHyWaEqpJjLrrwSg8babJpxGhMLPufVYPicW1YZciqJuPR",
  "key28": "3vUyAkZsSSg2qAoPwBqoHCPG3VxXijASQ1GvrfuVkJNAVAJvxovsXkjQPjr8mHL2bunqQQcaidUVaf4PNDkfq9Rf",
  "key29": "4CMZtCAEb2G4PGgTyHE8gr1L12GX6GDuPAYjzo2d3D3vpc5rGBzZcN7UJera9CPVvyxc5FMYYzT3rvASTsjXRt8H",
  "key30": "3R56UsbtWiN2pKzEAbfUAg25NFWGhzxuNkZreHEQeoHFeFDoyCuNH7K8jMpdNmYr5iKbr8aJJZWTUhrqYkbLxu94",
  "key31": "4xV78zXS65nm1ibM2guKhAiUSeCbLuomhCnLzAGwGbZncyreqk84E6GVNW6bujwSpP4AvM4utrBabmwYJ21Fftj2",
  "key32": "YiFWKhSEFQS83nSHj9bihmNqfnYvMDbvFY2e82MbkMDi4u3eifmUA7DJxgP1R393BWCWuopZpYqk22JpSY6oZBn",
  "key33": "4bZ7TLPaYhGMaZq8Ai6p47gNJU27M2UDnbup9yU6bb9dQmQxT8dv6zkBxsaiNg3VSsm8GC5emNo9jE1LgucGWxeu",
  "key34": "27hTdLRgs8LxaTMgqj2kfvJG9s52hhNMfzhkLY732w9kWXV37Xcu7KQfAJUUNUnJqhunyX1zRFQZ242wAi9CkUYt",
  "key35": "5VB4g5ETxfcKhnH2BhiL9sQ3ubUBj6SfGwwGMNafSBHwkSWexiGmobQP9VbcUaRV278xoxZApM7S1ekH4gfFpnHv",
  "key36": "5wTXUbteu5zr31nQX8nEKooCvC35hvW77MUBnQkixiKiZLwCRQvjTPLrChXaY7DTa1HtxmFEyjKTMSiyvZnJrgCV",
  "key37": "3EhBbZY1nK6uP26dMrh6ft2sCj9Mbqmj6TVRf4QxfkM5SJwo329bPu2NkD4gd4QYZCDpaS1swD7Ca6eReb3BU7Ra",
  "key38": "3ZNmQXuxCNybfHTtRgTFNJ7iYZprAxRRXZFJGAa9S8YqTBUWGb5xryJQ9Fx6J7kX6BhX3GHHFMCgXDWyANLTdGPK"
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
