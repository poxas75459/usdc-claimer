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
    "42TCjaxRNVwQ3rNxJW6pC8rQUFxH9EaKNpkSTrgen9MhiQJdStP4cDXiXKBB7yM59J4tCoAtKZJF9B1e1wfW8RQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLf2uqGDY6sNxobYoGjZBvGq3KKRBphk6H7But9CoWb9gNQgRh337N9BegueXAcjKdWNX6xLu36f3mnu8GVfWpe",
  "key1": "D4NfnmQ2snBR8kXLETSARChVSUJP5CUuRTarmnMM31Kx5psnAAPTPnwB7nCyAcvJmkYdZXtEsSWzR3vTgARogYh",
  "key2": "5X18NGq3GwRMayWK79gNjq91eYXmZw2PSHLx7G3FvZVMun3h4rZQA54Ep6cua4SstjWF75yMnQUCKuctBqx46FyA",
  "key3": "3Vf5GWVk81RuxDwjZBZhutciYZe55C1ZysEWkh9PNFjHscSfJHiR5bT5rUWVLvwrYykh9H9wxWMsS78csuPgSh1x",
  "key4": "ewAotWRhSvLJk3XTaeEoATnYZivUuVNErwXqhKsgJm1g14WrFEeMrb9tQGA6WembnzeyjF4UgFFDcfRNNu3UFrx",
  "key5": "2zh5k8AHKboFvdY1yMCoiz39SPaNUxg695D7cExYFur3QCGijeXu7Cd4TgiSCXJrKX1D7VJo43MqeMYrWUCQHN57",
  "key6": "5fftLo87vwLq26FiYK5vTwDvLxxvmB4MNmquHECGjNMfk6QdrV2UytgCR6oeVCNgvDtvGB6gyvo6VTCPDsDGoa4Z",
  "key7": "3JcVAwJHuhkerFdqkhWJgzJ3z9VxB6PWsvPQQH8K8nRnScpRXJ2gSBLri58nWVKB9iUSuobDaMLBNwpPUr3eVsg7",
  "key8": "5zxkAS3TJCHMJ4RpXmFxZvvavBmHfbdj1pbBUhosj2WgW3HQu6kFx2mZxepApBriVtJ16riVdk1ViAUyoNzkxk22",
  "key9": "346iGZ4kKuV6FMFjZAw9vCvFhrXiuiKqyrLErAtZc5DqUZXzjSSQ1JfE7vsR16D5ma9LmwC2XJPUK9UL2izfVQBc",
  "key10": "3vGDsrEo62zvuBA8U1TDnC1QYcqqUG2PiUfCzSKKLQuFpecUTWJNkEn9yTDsf5pbho91hMPn3r1Udvma8N1pvWjE",
  "key11": "2f4agEX2usrbA1sA9Ujudbe4ArFHuir2QFPGU9P9BsHx6DWxZiKdwoKDTNu58Hkk3xN63ZasAYUYHguoMvmH73rL",
  "key12": "XPkc5hNCtxyze37Nv96VkQLrQ9NyU182jrX5D34EGgor4aDBoLRpR1tKWZn741LamnWA9BfYh6vLt5Fh1R7Dd6W",
  "key13": "3yVtkeeFEWGGbPaugj2FAFnaSsrNjzjSq4oEcj6zKHsni2ZSfSEkrT6RZByx41NWUKbBQ7rgDmHiF4uhEdr8Msit",
  "key14": "2DfNPKSjTWaBZ3hmvmGrX9FSfe5WhdMoSnkHxtpFpEnMVcBzb36CBjrNtLdEGKsyd2aXLh59jSffo61G8AyLamfx",
  "key15": "2rj91vhpJi49e8PMzqKVxHHUVVzKq3pGagE4aRfyUeK8pUoV99UATpnTRRujanQTYz95nnDGhhzbqMULPsbL13UW",
  "key16": "5KLoAtqP4Sf5vGeGZzqSjrrBXAcQ9quSos4FJ7wFyPAcZSyB6oCx3Xxaz436KoXTC3gXRzBPJataGQSDzCXkqcmC",
  "key17": "94RHLfHcvs7rZUK1ycMihp8B9KieATc9g54K7G6KB3fBJYfgcpkRkGvt2g9YzWkrJA3y3APzDr1VDb8thUV8PKW",
  "key18": "4qeZTYhJvLyH3NnwkJ1J6uqQEKXc8hRXLdcw9noRwXHNqiGaC7mgna1yEFeprPz9JS6r8wx1z4LcTNkJA3fECqxy",
  "key19": "4xxtHeNcdLFF4CpBRH9SbQgdXnQYWph6SCtE4TKHcJ9UoCU67x1PRekaXGFFL6zNYTdXAo9hmqdAufKvwNFdCYm6",
  "key20": "3hieepKPhU23F9HnF41jQPECwB6ceJ76q18mEFzPnvJ9JyfFLGN12GuYbnJnqrzaUyiVfaRhyqaDuyp2us513oFx",
  "key21": "3bXcyAzRwdcguqwzdySa1NB6jtV4UQYfqt62PrEx1wjaujYvMgU6dt7CpdmV3esLB7G3P4xWX5wctW4VaNFTyTe9",
  "key22": "3Avgps56KHAbZem5Eag3oBQWGbX9Ej6ez9yiZwb813DgdsmV2MKKpj6UNDF5LJz5KisZahFZGyj9aj2g8sjjooLA",
  "key23": "zrVVAXKdg1AFKFActWuWVvU8UsqJyGDn7e9njuXgasQL4niBVEffM9TFAQRUL91NqsVn3s1HvsmzwFqtqKVjses",
  "key24": "3BPdKioogzwzufTAZLvBh31coiwrRXUEPr4Bt6ufWCw8Cc7o1HYVhxvktiSsNRJXtpSQEmmFaDsWHPQnjE98u4pb",
  "key25": "3dxVSZFtuPtJvykUo2qieMYoprJ1Dpud6H7QEo35TAAaFBx5MKuCkGXaxxATstwMV4DvdaDPDENi1cW5wDHaCbHj",
  "key26": "3hV5em7RWLFCsgjTbeNhvjrTuY9hiQsPTJaC6dygfVWmAJz6w8yJEWTSfNQT2d4UXk3umTBPweU2eiusGMS5tvVN",
  "key27": "GsHtJcAS5kchDtzezjGmWX6Efzem1YjLcxDNmwa1hxEBLTKszVAvzvUcfyZubZ9bA3oRbsHLisu64PgZoxzP2YU",
  "key28": "4Eq2CCYSP4JFjbCb8RQh2Dp8nRUdDQpVpUK5MAbmkaopRyUR2kR1aUSMGvq2ZfHJwF3cGGgevAqr1CoyLhMCaA9D",
  "key29": "5Mgo6nGphMwjKSHtg1EUjSrhFKAjckdcZYhbeeN9BBGvCL8vNi2WWkfPibiXHuXcBYRYvUNWnnBXHAYnkDtGrqd4",
  "key30": "5DxQ8HMjrFDkpj8Uk2rRcqEeZHGfz2SV9PFhETTxDTPgQuaMpaubTPvFc4bdH8rvrrF6sSNY21j9oS1vcFGY75Pm",
  "key31": "5dMxz5JZmbVLPTacFoVSVCdHbCh3dVfxC3VbWsoGUd9NmumjouzdufrW98cu1zepcmvL1NDB7MZEosgNmvYu4NsN",
  "key32": "LhnjnFde9Y5YUQ1oZBrVPQktN8h1UT2P6n5FJre6L9uivRZ9SmRWteaZjHD4mtiRPGdJ5EPeV8PczHRwahS9Nna",
  "key33": "CybmtSJDgJD8r77vSzUPbSu1fuKAHQWovheCxQ8CiRhC27itwvAe5JuvmY9xgCwY9QwfBTBf2zTbGtGkuBV8cm3",
  "key34": "3XpB6UWpKyKv6Jv7j5oWb3NME6r9FgMsoHMfTNM7rj7LSv1eDnGxXu5rMHT2rqZ7Siq4YVH2L8PzfsDZAFcV8TjL",
  "key35": "BmMiwcfKUGL9LDpGDPEU7LHr2f2afvHunL7t6xPRMD98tR7PqJgVnYvgFZUvDEE8ksofxouB2aPqf3v7QT82isS",
  "key36": "3G5wL6pjPTs5L235C8XVkFWH6C8TsSS5SWutRn3CJhWNA1PGnLa6ccZBqcfhtSw6T7n3Bbg1KjWGDE7ijj5psr3y"
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
