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
    "2bxDFzx5LhhwGrTRV4CYy1F4JW81fv2u6PZDcY7CADUiqJABQ7crV9ebGxoir4DbWajU2SzSMBDQyEUFJphA3Y3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asq9Q1BbiAKmJYJdnrqEwMVWzbCytw6LF461vS6vcoetH9VzNZejzSSnT4pQVpiTEGSVKWvg4tPkuH7g447dx31",
  "key1": "fi6tcAUZb9vXAVaKcutyKriKbV47mHafGL4A8rNb4Qbh9jrYPptw9NrW3muWf1ozXbMezxnRfCe5sAawcavtVxM",
  "key2": "3CpTAFJHTYbfLhqQmSdgQ9VZQS1Cnom72K35Zgov3keheubUnSpi5TJ7nTes43Xs8f55DFa3rA8ebG7oV3Tgz8DG",
  "key3": "4YiWQqVT4uNFtp7mUp9MLY65jMvCYeNuk1thsteird3LFPdr5sYASUneHLti1qWixzE4i5MVXqJga32cpWot4Crw",
  "key4": "3qJjDkrXkJgB3QRgMyTR6H5gi4QhHBjmtsr1m1YtnyuZvZ3WUrNNQzz43N5M8PBECMx7V26x1emHY2HtSaPphLyX",
  "key5": "ovjLzkktC3m9VdNn5ak3bd6R6HBXtLsrm6mSR7AQ7HxeJCs7imZ2ytMx3exzARmM14bkXAup3ua5efzSF7Kht5g",
  "key6": "4icoSe6gC17hjAvPiks24GqDcA243N5X94gD66pSivf8V3dnJrQFK5wiPFBPfhFuWuhfYVyKPFyUYiaHHRoWshwB",
  "key7": "2Wm5h4sm43GPjo2DaissbWUSQfbQ7bvtWhjP8woFUzqFk9mpB4Tp6jTwQ2LZrQkQtw5f3tc4hDMVJWvrFzTTYeAG",
  "key8": "4hCatpGsrV2AWZg9uEGcBqPgpmbb8qdTVSqMLN1fRWVQYrqMyAkRRp6TRK8BSDhf4iPZNNeew9jFPr1YkgJGZeFu",
  "key9": "2NTdgUtWoXm4H8HNyeDX9Tc8RNKeeh1xzvwcbhYzx8uv5tCQkvKgNEkf8n1vu9s5YpbbtdviQfJg9wE34izAJXMo",
  "key10": "2LkjCj5SDCqmTB7fMhnhuaBk69gJcpiPtwwMyE55ERyH1nBNSuEPcgFPAxfw9JTAbQUsBdatKddtbkrojLKaUUSm",
  "key11": "4d6eaH6ZMCP8yKZJ3kSD658jDzGfKugQcmdZ2UAS7it4DV6WvvkMWFwJphqLJfKoo881rfb56pW4nmZ6oAxS5bht",
  "key12": "5W2WbytmoRPn42bBYyopwKomWwGVVC58TpaAEkvfmDiVEoUY4URrUdEfQZ9AdHsKMaSc4XWtL5DLZMEv8FYZjyT7",
  "key13": "4ezayU9jQk4hevF9mGgUZyrPnsekWtnHmBi7DxFBX6y4eVcUMW8B314WyLyfRc1bagsZzcj9auckykMEoMRCj3dk",
  "key14": "5JfrYTnQ5y4RoiPHDpesBcNun4idHNmM9bvmjnD7iekseTz5hGefbeB8ztz23eHtAxrBNr6fX2mimeycvKpGjee8",
  "key15": "37GCxAvXZWRYNzuwEz3VmNLTTci5ARMQJkjsiVUa4mUZmNNzHEoLmPLJHNURQUh7HE46TzJjz5bNEaEjktGHJAcL",
  "key16": "49fEuUkWtebo9LVRM9rR8jb7k55RW9hHZhQgXE9bGY7AwmbGg2m1JFXGgCE6SYis2ZBgyufbo4kwK5kwbiyTj5bb",
  "key17": "2ARX9XKyKSY4pd5JeF86FAFqvxGtZCFooJP5Kdwz1FamEC5hP2H5fcZLGhR41akEYyPe98v847JFw6dUHjjxcyXi",
  "key18": "5QYiSkbTcZAYfidiYse6Ed3eW4qYpuuB4tto6JTRdpib5St3QstZXHa8gTq2kZPSNFQ3waUQYPmFyCFUAPcwNncz",
  "key19": "55FfwsYLsSNL1mrd14hP9yKwGid6HmMfCFe7rQCUtrrqLo4RBLWRVDvSxybhS18hudHVHjUKbf33fHJTRJ3eH4bC",
  "key20": "2Tcg9mAeARszE9vaE5JT1nhUyRek8ehnoTJBBXk9heNwnrRvxJquZLMUxzBuETtkuoTch1YDZBoSBcY6He2VfCSf",
  "key21": "5usU1xFyYDEfgDWWWkGNjdUtQtK47tF8uUfy3UjQ9r8CtnK8iuyw7ZJ5CgQG996rvFTYNasPNGoU3FCJvMK92fun",
  "key22": "nREtN8Dg7yNFc5jmC4vRfp1qPseuAXgKhbLpQWLWs9tGbMzD8U2NecNSHbcNTx1YDT6SAN9yYdRM5oANeqHSqiR",
  "key23": "62SpSxJ2gf4qNrawdecKQH5kRXzWUXqeV6W4P5LTR5WJyfPUN1ScWQhXMjx6DSszSWYkb2Gwn4PLu12mXAbYDXVb",
  "key24": "Vb7nTbGbfKFUMD8uGW82jaVeGqtJc6Jivjg84xRerhqyufvUPMeM3Bph6F31VyaeALD7MRw7qaNHizuKNgpXYyY",
  "key25": "e8DXQWRhGgrG6tjKq5ZF4mZkgjaNzf1PVP8HpZKbut2Tivkb4zzWHygxGh4jCHhqKPG2zkr2mhxzqGuiFbe117c",
  "key26": "ncGxqE3jEC582aV7mM32cX58WShmt3pUwamnKYHLiV94eZP8wDbPs5AFLc1ZK62uRBq5gUCP5SDfjm9of3fTb3G",
  "key27": "eJib3RNZjjfB5ULPWmEeqo6pftKrx81miJuWYzrWn9sCbgCAudXWE5CUUcg8BvTiM9VMFt4nYQpk8uXEbGqYDK7",
  "key28": "25gfs2qqJuyGL7gpvjQkMPopRTmiMVs3WMWGxygLynV8ZTGYStVoevvSNcHHJJAbwTceWcDU762SHymF7dgHKosN",
  "key29": "b4nvnRKEqpP3DUVLRV8T2MY8fsmMf9mFnyqMzepgSsquBqWzPfA8twpVCUpmvDJo2ZqA935DjnFpb9ofzZizhvR",
  "key30": "3g2FxpDs3MqAg32csN7uQhGtVFMs3iZu2WWAfGnVDh3mPwdbBQS6jRFkmHrq7L4M2vE9xbD1qB2T2BrS5YR24i3e",
  "key31": "3Dk6j7j3Rqu2Lzd3D5mnUMLuL9jRnf3xM5MK8LFkabBX2qWzVQFd6Bxfe2GSrEWBmxyU4pDo4hrKzgDrkxstTyPx"
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
