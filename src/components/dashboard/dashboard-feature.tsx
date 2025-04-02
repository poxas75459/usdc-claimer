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
    "4NCfxc6wJMjSvC7MsVu6TfJnvTJVarVvN72dgg4kKimqtK9ZpLdvDEhqebTswFwiSscTTnwpYkNGUU9QC68Wp6Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqW5TRj5sM9NYfKK4nNmrtoWZFNu2zejPKKeQVroz77fWdUYTrunCtVowfH48o7kMqCWq12i6nriR3V1WP44vMS",
  "key1": "5bpdx3nGdqVDSAKctK7W5sFXz6mjLDQoTQAEj2YMfYuM96treRYM4jCW72a7nhVhTs7sYMakzCmRQJwhDwszieek",
  "key2": "43TByn9NmWyS9cZSMzzBrppfP8frb9u7UKtPPhPib2pb4NuDDAtkeT5k4v5jNz1rU5DQ7ptmv3wtpC9c6vpEP7wM",
  "key3": "2rKEBdvHH8XCsu8q6qGN9NJBVTEoHNuqiEXv4EPRvJRPp6m4VFH3Rc9afRih7MSHMRdQBrmvkxsT96oM3o4KVcTt",
  "key4": "41dNbwxAwwXhXinz7CuVUayUX59yJDHpjywwUcfDgCXdWgR5K8FpE5WeJa2q9a6tqromphQPo1mnUy7vGLZaLEVr",
  "key5": "ce5Bc5tfH6TYXm6aj8HfrguEGrdcoukQho45946Zs6tBe6tiuGhZ2sUMTSvEj5WxAF6ARNutv64crR5Cg8hpN1j",
  "key6": "3cKPq8SZAamG8YCbxK9henjidtqKVMGtad8iqowGRtf2mKQbKbzpEr2apjSQqXmZq92EYoaZKJZ6f2nTqf85dV95",
  "key7": "4TbHvEYEh1kZL8Y52ukmTUvKYpuq62MCzqAiDxBFy3998ZAdtMAwFg8AKQ7QGEUURrqPLKQpC5X5tj974XoEXJ4t",
  "key8": "3Ak2VrLZcnFiv6o59ytma9PV32P3p9qz7uCqQF4cjT2zgjsb9vcjgjQtXnM4PUfcPAmt7FRyLi4aQ7Qwir42q2f8",
  "key9": "2zNh9PG7pksWwfC3AhS3vf9xKHoJ81KBMGTHENYeiXfen2gEPDDpyPCSZ7oHWvBH25ZDemGimZJEAaK7HQEfBKbE",
  "key10": "5TtqBQUM1mQnw47nsYEYG6Uv2UgtCf34TVvA6FwksRbx4ts2XM12EZwGxCRXVddkiXXJywhsiSfhC4rLTtLinH1Z",
  "key11": "2Ka9tXvZZkFhKZJgRQaAeD3CELkJ7bUN8hjiS5SrDCpyCc9AWRAtyxz3bX9efYgjJCp1Aqkk8XYPWwCyTmDTFACR",
  "key12": "22EArJERLsNKjMWyw4NwTaRbWD61LvvmPBWnQK3nb35pqvaJNRiPaanfKJ82qc3kxeFZb2PGsNCpAuwQNLkH6PWT",
  "key13": "4fog4fCBmYFZmGmcaPxukhdXsHUvPBqs71ea5ptMKmgeVu13VNmr8UYBM366ZEqfPHN1aMimrip96PzSj6UTiCEt",
  "key14": "5JrRMF3W6SaRJXoL3eSAfFxVr3u2yqmHsYAqFmGVhgBD3F1DtwscAYdtXAqNC1dTgAt5wM1gnfsqvKvc4zTSie8Z",
  "key15": "4nkFb36A1gbejWcQechNbG2VGobG3XGXehCQKA13VSvWM1L1gAzN7hQD9rqE3TEPYYeCNtEq2mbFKZFpDVt8RCAd",
  "key16": "2fJs6MVYHh27VhxvSDsDnWJef8QQP9EAsH9Uv8denJVpJXr8TPGc9iLLwT2iwCKqWnvNL54oMK7y13NnifX2oq95",
  "key17": "645Zn8PWiwQrBake83yZVfZw2ggh5jtxTJmks2YpZXX2YnBPzLDvkTPumVQNmE3J8cQDNbqLXcPtoSSFMJsiKM3X",
  "key18": "AbMTyHP6xrXgFuHbpWLf9yUoRdTMwsJ5rQtxSJ4wnMZAkRHDa9XmHqY63aFJDztfcgp14ijuG79QKt6YreudPep",
  "key19": "58HFzTsFo3e48pA9Rz5vvAgJy9FhAhNT84sa4p1rjtLvgEe3YeLE1bmpCCeXU7j6MaKMJAkGvSFsEZ6j4mrNkEm7",
  "key20": "61X9V59UfWGVuUeZvJug3hngUxExPSezui3wC22WSEerzKf72aTFTusMBHLiRgvPh3VSETBKF79JCwpxnVPQtmN1",
  "key21": "2KbER8NaSzMzxLaf8sApxWn6Fsxab7umuRsmDzYxprd6JkMn1C8wnPh1xGTRo3oLB2Epddck3tcwWoD8VJCopcYM",
  "key22": "2XXEFYT8niAP4yGcQhRGJDZrs8wdqqMssVSt9HwUy6CYkEgR8NbEbRKcApDT5Laei1KHyHitFS1CUHnXG6aaeJJo",
  "key23": "373diz3siaMok319HYN12hEoQep9Zx6ZdSc8YqAeE8C46GhnxRSY6wAo2rbS5NxKPCcGrozQXbERmwpnceMqEKR3",
  "key24": "64tUPD9nN2mV51Q9MHiAAP39ti77si8D45xeVMphCDjHZXEuFSrEL2RyHxeSPV4X3Peb3wyBnqPbUtYbPeRjC6dP",
  "key25": "PonQK8YW7YyLDk7AELKSpDhEih8CbkcKmsRdFPmAy4KtbWgugp8ktaKnQFBQZtULPgFHjvJ4cyKz89gp356ZrGM",
  "key26": "4atzfKKs8UqLzeyMN235ihsuHPChQ556SQqJrthGhhFEWX963y2SUpv2u9KqVRQsdmgMgS5VzEHhrKx7TaCnRtW3",
  "key27": "2qTgtPhUjuTByJN3crKvWHyAWQU3TowfXBRkhn7633BgPvjLofQYdhzz37N7UJUzsW1JtQkLNf2i8WLauEsAEpm3",
  "key28": "3nrVHWfSgUh9Wwtehu57FiBdH16qarogXY5uvq1e8zDSXwRfj9DEanmFug4psESaPrHoHEWrP45Wwn3ZxaEE7aoJ",
  "key29": "4X1qV5NRa5zem9jkn73gENudyh4Yp7JiULusXxZAX1taHKuZvzFod4m2qoKhnKfeJD84HyuUopy24zNbT6ByTunB",
  "key30": "3AYdQwmY3kjTkSCp3c2F2CtiTExXseh8ob2h5ovgaKXZkpfRHNiUtrpAaFjdKaPVogQTSrX5JfisSaQk7DqgpJe",
  "key31": "2KybTdqLdhgKmiBiZFZRHAYBmEj8jJWP7ZtQioEmr4XibAJqGq4Krka8hyaXhqxhnZyPtcn94oBBnzs5KiX6TuzW",
  "key32": "YRQxjzhfvtKKocZXbxfC9MNZqFR3RRCbMisVpWNS7oFsiMvkUvhHH9BgpW85D1cSv8hG7zSn3kXSNgxmKs7gRwi",
  "key33": "4uxHyeqRqur9yhQ3PXxckFSPtZsVKCxtsXpVQX4ruidoKszumtW7Dwqpe4pAxshosyW1dRxBbGVSVZwfm9C81hrx"
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
