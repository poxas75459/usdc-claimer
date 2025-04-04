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
    "5AnR9umxYmGzgnGW5Do6D9biMoF32WayobGwae3YFJSbK1Db4PD3ekQ2uprDRoDFPVJw7Vm6Y6nhW3HYwExwgHDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVSrk3qwB6TmEQ28QBzQ8JRfocou1hi499qMpsgHkQdMwGsiiVEbaL791uJhZ2Bz4dMFaMCC6a2aepEx5mjgdBp",
  "key1": "4kNS3t4GtT9gcGDJ2dFCUbjFxDxBsMnn3ckwaCTpSjbJBEK78V6XULjp8cvDEbFXTBdQR7xPgJ2wFRRzjhP9FpEB",
  "key2": "5x6PXVT47hf7LcMDtPyMoaH9mGC2q58qVve2dk4tgb84HvcdjYJwmqwL5cC9NmYhsFJiHs9fPd9oPrt68ptT2Gfh",
  "key3": "4PAEm33PXjEwrsRYZ4zCFAfA4bov7wJF2VX2xmirpmQdoLMFChGnutV8m6ijQqL5emXJCQ8U8BJdc6hXhfSo85EV",
  "key4": "74fZ9Z5fMiWs4MDdP913HMUV1BPEKH6pCCrhmUEsA1sUZQQo1XXhEfneNuMhqSutEJvHZBmxRr7JjKRaShG69u2",
  "key5": "38esPx22WFV3dpB5JEmewqyGK2GFra8iBqErYaeR7MGmENMXZc1Mpe6Hnjg6nZsdXHFiKusfZui4LWyqHbojg5By",
  "key6": "bDQbtEDDXXVxzcdEdGDsWvspY4u9Vow5bqJ8LdHQyHQQXkWhu5sdGs2k2D4RazSzzVJCKPnoLCmQggY6tbmwZLS",
  "key7": "4K33vc4RJF7Y9g1ifSEeoS8uwEAdjN675JxGghob8SA3dACuDM2h6rehEqzSsPmm2S7f9VPFhhzPtMJ2BJZWfqj2",
  "key8": "5jr7rvJZLxX9yXyFc4jonGtQdKUDMV9TBPeoLbvHZRCvTciqgGZc8iGA6F4J1zxv6nKbwHBK1eHoytvL62yCHd3A",
  "key9": "4waVoHYWdm2uVZxgMMswMp97F1RUscuFmMLqE8eabUP9oHPXdxpHFue3SKAGfEspAHqaNCUjMvvNexEEHJ3SwX7v",
  "key10": "5ZmRH7N72M9aR7YH6MV6XQQTee6XQZuNvKF9iN1ai7Mt46jRWCJ8gBZPv8F4y4xv7863pfV3ks6HZKd5gCqKgY6Y",
  "key11": "4uF3tVzNpiLKVRm9M5qr31BjJRMibeBVjXaKCD5R4cXR4hBEDSiWV7SEhmhqVtETDqDMdFfa4mj5DCpyeNw1CM9H",
  "key12": "5TVpfqbecUWDfZYknKKfryzqL7m7n58vNGSA9gqGKaz154c147nPQPqF5Z66cHoxEj7TT5p7NZmLzCktF1QHDCp1",
  "key13": "3SdsenZPYhP6t9heqW13Q8QkM6QMRqitNdGkLeTsjUgkrXNSphDB8oJBXyNNbgubvPpFYwRetPRCUJvJeRMv6NEm",
  "key14": "5ZyjUALoMTz6jzj3WQMHa8nQnjYYFmsrd2N5npqyhfohNX8WpHKuMHPBmPtYSWA4ji49KWnJvio7dTApJWSSrRNo",
  "key15": "D6bvXUkh1haeobhdvXRfemmX9nkfSzk1cmQkq7GhABULe7r56P5Zq182T28LdgsBLTDxKnk3PQYovqxGrzWsKCx",
  "key16": "3MuzZYAYqBDf4mNKHsiwNvw4PTnW9w9CKwxazZquYtBTQAdM6aHM555rH3j6ijpYnmRbc8wfT96UohXatQpiwhvt",
  "key17": "rJDUZ3H3d19eauvRSg24CnrN6Q2QSZ1tEj7yARzRRD22uLKEbgAuo3PtQmuCzsKvpRszziG2EwyD6wFcYcoDAvu",
  "key18": "4LGEhkXoSmUvEcQRwv2bzdEeAwmzn4ctGn78dhNquoL5e9fLMgTAr3HQDq8dkkoa8EYjtzhXN6f8rybrUSSQCnUj",
  "key19": "q7bCXhvTnR6Wj9uB8vQgDJ2NLChWA6ViZhppinLL1fxSXiTTBxUgG3K4TKWdHUeK1M5JUkGddkCs24wXnJT5ZnT",
  "key20": "55bdvgSCUbHGZSSmZGtm842pQn2eYwxU669iiAWRA9RtgD4hzequL7yfriEYykfhVBPHetEGRCHogo87DHddX1LP",
  "key21": "2yM4qtd1SJeTJ4ozCt5RC3iSKi2saSyHLySGNTQvjGjyWVZkUP21WyaUmCchsMW1rkYuymnpWDdPaRQm6CKwQRj",
  "key22": "27AeqahvJVtXTjYH6jHeYhM6zAxzwYsko1ruXjUgRdiFz291EGvDiozUi8bxyaEDe1uGfgVjnWn4W7RLbdGg3Wej",
  "key23": "atpTtyVKzUDey11mSy2qjxrcMqH2GzrWp9gAjaxXxKizWEAMmtpmsShUTCDuJgVA5sgQBCnjYj7U2eCK7CbW58b",
  "key24": "2VXgUWnNt2THV6LhR2bL3JFS1t7EwgKGQapFRWLHWmr3kLbaotaBu9tgKcjhapNchWFCoJZoGnpe9fHyDpkfyVFZ",
  "key25": "tqhoNhXJK9zdcGVEm5pdZQCAxbYJjgyB1nNGwucpkva4EiHqqHR4ZNqQYbYv4CHkZzenGq8AnYxL9UtzbeAJwcL",
  "key26": "5JbC32oE6uF3xnkVsu6QC9oRRMNY9sEjfiY4U7pDN9RmMuWo3bMfaucFWix2ZBLrvC7vjEWhxuwma7HcwqDdJkKf",
  "key27": "2TwiKFRRrytNUYn1ZxGHVS5YEoF6RQv4dQAJckmKMx8boftdYn2vd6BUcbBEheGUEc7sKbRt85B9iNn57XkBskH5"
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
