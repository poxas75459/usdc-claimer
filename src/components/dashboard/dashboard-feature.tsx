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
    "3UCfYfgpsRdGMdLHqqBbjKAR2EUCcCkhWBaSvsyui8mu5LUMWQJ96Q2h8uqqao24QUtq1PyUtJNEEWN6CCw8pq8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DEGAbJbwnUu6YvCNVekEdMLt5zXTjnUyV46rpzvUFnaKxKkVyYscZkhhmpswevz1BHLov4GkK9pHDCfezAVMUN",
  "key1": "2CBJUhP28YiP4vg3wybf2HkizpFSGTfYaHrbTw5iYJmyz5vKNzEcjwU76p8E2DKrDXG54EAZ5fUY6XMKLoVgeq9Q",
  "key2": "2W8cHcLqiqTz5AgCkRY9vvmxgeTA7Pb8omtR2pJEytpB7diY272GBxmpeHm8gPJ2hysEZ2Aw38Sp5r6tAwuybL7o",
  "key3": "5oJqXApMxTFv3TBTHLRPdr81e364nescSsUVLHXTfMBtiipR8CGc6eACUc4pY9QEvU76SEtmzVg1VPctjMB6A36w",
  "key4": "2BZP6yMStH2SJR3Hbptct9TCbgaKBTTxXMQTTw6urbF9TktR83ojoqcof6XavB3HGWuaYtRq85HvnxhBkP2NmgLb",
  "key5": "ZsZFN4nmoBrG4vfCNU3xMqMyb8cNPNN7dUsJx9eYsV9w2TDe5vnAi3rXvkApchrPJycPjxandoynCLjB7CmS6R5",
  "key6": "54cubUfb5MGvbiRkqvMFjRUzP9Y5pF55r5YM2R3H4v3xPje1n28Kjp14Ztib6BWnvDacaY8gjemZ1DCtca7n8kgT",
  "key7": "414YJn18hpusXTL3XMsyXzZ1sj5HZGyq8mfMk8Auz8ZznWpoWYJL6JUhQzTEhKRRMUh5yM3N82Kt23Wd8y9Yv6Tb",
  "key8": "5GwVFbViQUVrMVVMqstPGKdt7umbei1afXQkHA53TTSVqM5McMt5cZ6BRH9J6fDf2d6r2xdU8g7HXjeS2mE1tkPK",
  "key9": "5qxTh6AY4FbG1pSTFRwyFA3breB8zPW4feN2SUZNSFkVu6yNNKVNpadejcD2az9KM28Qzvs5mUTcj1FwfmSapvsN",
  "key10": "4uGbSYeVxfEPt6ejog5inwMvNSXVigdvWcbQo8uQCySQ7P8k6jKYcZK8sgPg48igQJq8bXvQjbs55y1qvRAyMxnZ",
  "key11": "sNz4YSttYgMDz1zBXpdX2ToFdVSKHzFkSbyL1RmmezyaXKbhU6TbRYdXRTmrKD7nb4MZQ4PzLNNJFf8DaCmoGkr",
  "key12": "4RQVUzucNCkQreud71Wd9THhAfq6xqxmpeVPnB8Ljiiqg5HghN1DbtJ8dCdUvoYFLYHcaEdwHTu6ZQMfpNsdY31V",
  "key13": "2cMVxHtTZ229U9szCoQEvx3jvYVRAQTXPWK4kCyiqVgVVKNz4AVuEiQuH32wtpX3DJkUS1xcCUjuVJb5Ypwit2An",
  "key14": "3GwVpThkYFEveqEFimyUaZnnQzt86ek3HkeVDWbMesh4P4Rro5sXJvNzUF6k7uzP6uJfbhx9UApJapYP1faCLnys",
  "key15": "2YoTF8ZQRXL5poswMfRLxK21TxTSr9BUra4qfafmiPyzpQjBL6WbwdbYmDN3B7x7UzZET6QFPF9NvcVsqbo8fnxK",
  "key16": "3p4mMP3hfEpRomgQ8huXKAx8UyNRekoFSVnv3TpCgFBwmBzEGYFy8xymXQaxag5MXYaoWQsDvRuszrSPmKAUNEZb",
  "key17": "5y7pcnHMCvybWiZiC8Af5vqgXRP1BVhfn1o3o5ZXoWUhF959PAXZQ8sDT7Ftt64HGH3dbR1h12pDZgywuEA5Zixy",
  "key18": "2MXYS4W68aeNkfwtRqyxw6ARKSjFBxtUFMAmiz5RJbFfmpG84Q8bmWGu9vAjLsozK3qUUL9h8NUEW48e8CZ4sLkM",
  "key19": "5yvBvXbdFz17qcN7V6hA3WmkMEpQStiuRju9YUh88dLYg2XV93djDkUEWL1Z9pstRut8ASDCjkz3yXiEE1Nk2jzQ",
  "key20": "KuTHSzBqZxPUQHroLVgXDu59NSfh2LeHD9H94fCHnTGPPee37cYUPgU9eF9KiUD1sHZ2Cs3DHvgH9zpvz6RtSkW",
  "key21": "5QKTW42Trha3oKWstKzHy64THZZMus4Fm8K2oKTn63KvsTu4w3sepYLrJ8dE9KwpD1zMrdd2mgnAtni5tYzTwEmR",
  "key22": "2oy7KzuTmGWdEsrUTWmTH5NN83nvktrMjFu55552UgjaDLniQTHNbZheCko2SxM8s8xSQfgUrLcpm8rZ619HmiF6",
  "key23": "5T7n4gi7HtVSGaP9vp1Pd19Mu2dRQsVBP4yuTSrRAwGswSpxZ7VU7MTZb7tZaz5XaDRArg3zgHAXKPDxKo4VzaKd",
  "key24": "VDvNRxVEHDhSq5sUkW9UwpN5zEdjyAE5Qo6VZX1VFtJWAjGbf5H7spw1Dc2VKcHzMK2Y6nYxLzpi9jG8MJyce8Q",
  "key25": "5RUybJxF78LKnwNCJDPTTxpMSzhipqqfjZxZFYNNofpQa2MkpCGsLUuT94aCGurUDFRDvbXB9DhnkMYTZ8Xy8ajr",
  "key26": "3f1zbWHYTmpX4AGiTWMh73jJtzESM3oWAoMoqZXC4iNo9nzqrxJyr91jFJHCVDExdjcXAFxrknMQyfmVwvEFQiSX",
  "key27": "4EmfqkeXkGSxyjE2chVYXSzhPVPtucGXPL3EC7tMFvZmXaGCr5nLqhVPgpcN6Njw6sNqWFkRgKvMgefnmuMjUYMM",
  "key28": "5oZNficeTMQb85MTwz2wdg8YiJ69GjtK9BmiJKYmT8ezTyAE1MKuAaGHEfubwpR14iEfpVLnaE2dNHZ2DUCqQ4Zh",
  "key29": "4kZecYsvz5sc4N4ZZvxBu9E6ujYha13rKb9BpAJmykz27F6sWC1okZRE76WSqhYBCkdLTcqVPYcFBwpTKyvXzaWM",
  "key30": "5dT2i53PuTPKNr2AGQpzUcrfubWM1rzNWapQkHBcmkWkuJconLGom5XxDwpYJt8cbCpmEHgAzBzDyWbvQPdw3Z68",
  "key31": "3mnkFCrDjfrikJiPNrE4FZThQQb2yWyH7fD9gro23bHqJfsmrBRsHQLbr5AcTQ1WqQMFykiP9yKv1piTRpDHm5zh",
  "key32": "xcyYy3jo2uRUXDV8hdTPCbVvEVZPXP99sG7FkRz2jGgYKb6sJ8KpF79t9oupM3Aq2ypiJEGgHx8cKYtGZuNJ4wu",
  "key33": "2n5C3tyo9xSnQdRUJw7pkwUgr8NpQvrrGcm1XgwqArKa6Rj8v2pnmU76hJbtm2oUWN4UuVCL4ag3qZrPjko7fCWY",
  "key34": "4bjmmDVnMgt9BUqGmYSCbzQGYcr8ZTfDrhvpiHVotyGPzXiELmUnu5NecxL83bDztuhjiVJrAC2JTHh19mQxG8x",
  "key35": "UTij1kRyhRUwZT3m2sq2XUZpHGqcyKPAC5SzDFYfZUwRd5RbXoDAXPfELKXYPaFV6P1R2M1DTAdwR5gjxWEVFk9",
  "key36": "5MuqeMzsXNoGtWZHbRQs6aqk4jR8pMVXs2h8cgSBrKmPx1himcw2s1KSWTn55qcg78aV9PxhjUsvP63jQ3oBckai",
  "key37": "4fR8A7EhgsHBWmre5fRMFgDxe5qWBUtLZ8G6TXxYX8ZJotsFP8pWnAbcrHxN9CbtZ37735NUrgNTwucM9M6Sb234",
  "key38": "3jSJLCPE6zD3sXN5YBnKcJCxX5ZGtsQGA75t4eJWt4RWXcqUwFNFNWikk9W6AMXFPJ51NdqpxSGrVxgYbZU4CYg6",
  "key39": "5xNLyffMqRjGeUTfR9YbdiXCvEGZ3obHFqHvd2wW2LBpkbU4h3HsQW1pzygEFPV7W7RAAjzV4A5hH3sdiuponVgq",
  "key40": "4vuGF51eKwe9ex9VKvUzafMiFvHfUoU1XeBkbPfzfL8bbHmmcu45fcaxckjfGiyTK9ZjnUcqRdgrQVFSNEHsssCk",
  "key41": "49AdthxaRGyJwEL3LoF9z5ostK2KQcMJxj9ui4ug54mWns3ceotrRaHLQdL3Bi3XpQbkTLy3h9YZedEhjxCo17dc",
  "key42": "4i6vsxKSveznFYvE3SrEj2yHRq37HBXNAvyE65Bx3bg5bxTFsAntqT9c4j1vjSBzKujdMNM9HP7QpnRChH42Y5ip",
  "key43": "Nv4ghoMwgSYFYXJDBjavmLVzkDn7XJXFE394kALiEudb6fwfE8KSsoErhyA66UEFu65wRUUNc6bJs3d3EHNxPh2",
  "key44": "48VuLUj7uqNS5QeNrFqgMiGGKkuisH6g1iJsAzHJ2hnCJLQHhiFgL39RnaXSpM9RXLjqVW4tzm4A4Qt8rTPDZMwD",
  "key45": "8yeRmhVQXSc9oUfUSwyoiU8GyyCe5brh6R9opm8UsZa9je8qjtaU6JCT52cuU3cbeaZVX6KbMriSmZt4a1Ge5pV",
  "key46": "5GP39grQNrTbT7RDntbgBVNyGELvLUL7kkw9WQPJHAmP4vzZFSiB89eSPVi7tPavj7Cq8h98mCChM6J5Zx6i8Xje",
  "key47": "5avdAJLpWZhqoHvfgYw1GzWFZ7xMYKYpTe8WaQWws1Rxe7E4ZmrBfjzZRHSLCZx2wBbbmoBcwYrETabwUnDtMjR5"
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
