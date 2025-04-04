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
    "2uoYDmGHqebvtf5mPBAcLZjJvkxgEYj3LmUXcdCLgekzzh1mfmPoty3Vv9sKHpHDghU52VPnJCxCJCrmkpUQ7Y1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jRXyAF3GpiQYP3avtcTKXqTdJJdcCVoak1KmuiQSe1qTw1as6PNAkdGBvcx2r7EgxfAUGHpwv9PTPvwHmReL6mk",
  "key1": "T8X1N8mFLBza3Hc1CdoDp4CfEn46TYZSuLwpprPFepFJgozZXrVN2GYtUAx56FeviqRJj9QCq61iYD4QesGajFr",
  "key2": "2KAPieEFsKzahmJqoL4eafm6Ubt4mbew1tN9kDw4e1Sk5kB5Rbjr8MtKFzajT9viTZfpk4rXcTKaEe1AUhy7xcth",
  "key3": "aEcFUEBMK6cQNtpi1CJkyscFfe2po7BT4kk743wxbNMs8wbXEKE6ataYNQ7nKLXMvxKrm9b6HrTBGYTHTrWkK8h",
  "key4": "m7aGgwYHUrVLJYfHNpgE2FMWiMH98uvm756fPmcMk2CmGF7m7NSihnvrwu5X5HV3hU2QxHSVnyK1DcoghmqjBjz",
  "key5": "2SJbZNBeA6iJauBG2EwFRU34Z3t2GVqvQKd5FW93sE4SV6pXqDzjJFHym8c7fGrxktFWmjFkNjDTbnoAyNtE4Z5G",
  "key6": "5GM89qL8gs8fgeAgQSXL5CN5MW4zdfotS45ydjd5CKtjf4jNTKbYkekg1qvEj8b8mQFGUteJrgt3qhMTXWTDgsDT",
  "key7": "3289dHC1JBzuvcjJaKP3wBxuLNsmuzpyQ1na8KtkuXL1YxedXXYUKGpxxY6JbBknZ7vixatkgxSxdt5KVLUQYUaV",
  "key8": "5WzAxjPReU4vz82dV8MbcJnohHk6nZZewXoPgEPRUK8zxPpMqsfj9Y6gyDMUhL8hKiA9UFXfDJ7QseXj2MdoYjLp",
  "key9": "5ZuRBzR12XZmU6gc9CULmeAXMxTukMceM4KEKB7bXKXTx33NM8edD19FtXJXBdpbmevDoaHSc8kyAiSuBujb4qLC",
  "key10": "3XwYUK8JmW4rSpazaYJo2h8eah48hQoNZRoHG7U3Uk7uLYjngW4BLUusne4sctty4gLpRKC4pX4R5qEVuyGyDqQW",
  "key11": "UCy8ikKEkixokwaSEeDnUuyEeGGSs8x6GiJpXJAnkKP7mXt3widkhccUzuMPaLQXqmKWZzu9RsVBvy52J1dPkHf",
  "key12": "WQmEjBkoLar4Xq9aeCx4Rvh272tAYtSysYawiddL9EGkCn6Ku7B43tKmfJxUHABBaLRAFcrvuzNjESkA1KtdVca",
  "key13": "hdzHf5cdZFbTNTETUZwBNnHVcAibJkRsHAC8aNiBhWFLhUFiFsffPZheK3TRxA4h8i7tPm7FJjxaqrN6UXtbU7z",
  "key14": "3M13RaJWGSCYpZiExqZLhEPNciZJjqJPYQ3qi7oU5GUeoezT4NHN7MS63iDEUgNFKdqLE2g2LWYhPzirRA1SgZU3",
  "key15": "2GTzbnroVMCgNqUWAK2nSn5RJCbUnWvfpbA5MS6qCcPpPBLUxn8emKfF4mwVytJjKAU9gcje6NmSCGjydQxywiTa",
  "key16": "5VdSmrFrnhzoJwbbim9vrBFk2HV1GL7GFqUt8ybeYRyv5ATnHjeEVYJE2SuT66zv9cKLSLWt7Qb7zVvU3MWKEJmf",
  "key17": "MBSQ4mVrvuo7A6AGSrVo7Gug47av8s9R4ZhPAA8rg1joz4rwqxPGU2TmGw6JKqGUgQucLZKg3Gy6iYjbqeXeN1b",
  "key18": "46ipdrWUgyn3bg6s133XUYm9ekgqyFCFfuHV23srjYYzqjtN4sZR3PwDuvJiZR3eQcZkz9p64Qr5BN8dV5g4i1zB",
  "key19": "SNWv1cKEgL6BfdimfU4kLCqf3nga1VF4DHzRVzPoaJH1Kap5nyEx3KyRf9RadJnd8rJ1q96kVjZw28fkj3NXRt6",
  "key20": "jg3sHEnq83vJeDBhTkpPyPJAso7b59WTxDoneAiWMkTu4n4KqqYS9siCwv8JzqaDmzDZFF6oj5GoC8T4gtTEpxB",
  "key21": "4zYb5FA7TVLUDmdiBkHksdykoSzLNsLdGJckNpiPNTuySpLTbJqMjmhPW1ShzV4CjZvPgMcuFJ8kPMgjYW2CT5pR",
  "key22": "4rJWxRkZm5FM7BhFLB76j6XVtZ1hFwfQogTn5akrobG5pCsH5Xrmp9tcj6yhonY2N5rnRUFxPPJAjPUq2DuJ9BhC",
  "key23": "3469Hm7ce1BWb2oS3qNyzqSMGJL4xy1DaABLt8p9z1mabW1fiDZwpVByNM8oE1tngSpMhg6ieMdh4BkQsF8THZfw",
  "key24": "5ykE7QwgvAvKUtNRN3uf2N84n62fFcmQpFmuXnVw2tLur4v59zvTHqczKxWtQgRPqr2rCXq4oopqEEwGpbGa8qHb",
  "key25": "6fW3n6RUhsn7RenGXsmbDxM3duWLT96sLeYN1V7nSRpkb1AFh38drRyDBrbYe1Wa2C5fHMXfqhKKiofQ9zeU1zp",
  "key26": "5uJUtxRQ3TyUSfXGDeAuVnRfazEyYpaZV8AMA1rcZV5eMDRVmGdTPSs8YduiwLxoQd3PqHpKjpk5ZbTRgTvduGKi",
  "key27": "5KmFabYWxdgT99XJAKNbPkDWoryr9Q6kWsaaZgySWBkHh5sGDgQ8eymYn5TM6JRpswbcQCUn4VBwiiP25ZF9cHTH",
  "key28": "5Wiy5b1D7W6dTNXtGSd91MxAEusgbdkpdGBd6qXNABCTQnnD4D9UM22Drg8kznUR475EZzDcKJGkhc74rDmgG1yP",
  "key29": "kArqhYhsd9dYAqJQHWiM7M71BHKKvaX5PeHbK31LNvZrkx1PMjox22xxKxm5rnnc1wjWDb4ufPyndQfCsLVriQX",
  "key30": "35MHgRhVFWtFG1wd3KM8LvWdjqtkF85JJAAKQWmGy7i2LwDdTLsCXTVHVMUzVYAUPSG4pRkKzo9P1xxfM33kdUBN",
  "key31": "5nkQB7AdT7qKfYTQ886HMwVLMYbHXusfjcK8CWG7FAQTg9tf7dPmjY5T5TpiaFm7pyZbWaPNU4rZtWytbJvwpVyw",
  "key32": "3tMfjop7fV218m4kimDwDGW9JcVrQduZCRSXbSg5nzyqqQ2TTMHpVGNkB3H5F8zm6xkcDGSTDyVWtXpNZ3kb5q4h",
  "key33": "2QS9mm1w99KBhxhGt3q2jigmsodpHSfjzfPXEphJgpt8JCciDJzK9si7xZWCPJz3a4tdqXZ2H9SMXoUUantoaz4n",
  "key34": "42TCdVDbnk9kSwaGy7iMPD2RKPsu7f9TKkvo7sx9EgdcPcBPCywV5TQLNs7tnbX4Jy5Z8nHkLoAcFHAapbkrLuS3",
  "key35": "2Dyw6dQmiXBL2pPECnwWsjifKkmqXhofJ6vzgLFF86NBVgSYEv1muGVEWBeywtzDSv2fNGWrZsr1y5NoEB9WMfVB",
  "key36": "53rWgyzY49hfZiXBDADGxdv6unMNt3sh87WBTdVQeMQyEpswJZH2KrzZRYWPWwnSBnuuZgQWSYJdv94mt94WSCCK",
  "key37": "31nHhGKzdzjxjwXcFujohxkLpEx5GU7gK55p7MRod4xX9jfBuFJi5BTY8sMWXDE3QgrSDE5AdBQWKenEW2sMm5nu",
  "key38": "35YbGevZwxPWsxpGJ6LufnDY6KayWLoaEiCGgJS2SwpzRJVLprvHWSBYticF2x1pC6XD6aVmzX7FgmcdyQprrhAQ",
  "key39": "3d3ortuw73xLJwDVwhECt6nqjgd7qjYPTPnZ4a7Xxd1k3RwTMsY6CWdg55NzeVn2YJJxhAKbjD3zQ9EZZsea4Nan"
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
