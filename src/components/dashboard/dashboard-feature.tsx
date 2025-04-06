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
    "5JTGEEBVmRsDQmqC3WeBvyXEXdXUGG1Qc24TguC3JxZeyT2aWUhvHEM931YJdBmd66qTu6x4JBqZSVXofSxDboVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkhaxvaFksDWi78SpqADF2chfkS8STjfKGWmweuherq6CukSqAyrdJvKL6YVA2WUo7ckJX1cKmhUaEYzVMAXmbb",
  "key1": "23jJZZcYurKkojAJRH3Tg2HggAWcNGCJ3AEvCPxTEAy6TeZg8TBHQs9uyZq43pxk5fotg51ZjszsaqZzezdL7mYw",
  "key2": "y4Y69dem5CZg9wwDNzBHxwtTVfXyRx4NWJo5WqXxQgacWtNjB9E4pGT9Ccx5z4DCZCVGn4mSaHMLt9HABbG6XfK",
  "key3": "1vnotRsis1uGbtGhxxyHntx3HEo8kC47rhqbYQKbKJ5TaSM61P7s6pjqSZh7nAJdv5DRbdAjoSDqavYsysvSM85",
  "key4": "2JQ9gjvLJBJmgKLzZ3K27U4FP9UqSFwwMFr6ZrFBbvVjQKJHgAFmhCxgT8r9Wk2XVk5tWCKTfL1qjcyL6aD8LSQm",
  "key5": "mc8P5LSc2xtzz63fkcFXEx8c8nFhz4wFSLgRyZkxSGfarxPbASnXKyBqV2yEyYYJfkdK7qbXoLJ6FwwkFfF1FTj",
  "key6": "2bS94dCehT6dueLUM37MV274vTEevBzbMiRdDoNWSiT4Vh4xrSN2snwfgJQ8udhWQURcNBmLhcstsrqS1J7Qe1i3",
  "key7": "3eB5bnprBdAoJh2eGTR7ihHgdcLxz7PxRtY6NkaGnUXxDQgYw93BgxvtSPM1AiKm8wZUaET5KTuGouW3zVoJm59p",
  "key8": "5sRGyfpvMC3sCDgf58E44hAsmkd89DuZnzjxh6s1yAJo8xMqerfihM9ox7NHneq3xmg9W3yvt5ExUoef6TmCERcD",
  "key9": "3zCSf1pkM98zBUgFGyD9KU2AYF932Ujbgryn5WecbJJmLm6rSsG4zsZKhKJ42wUgtrh4Mc2Z1pAsJQzYRRxCXoNb",
  "key10": "3A4o64NoSq3SziZuLHcDLKecMvyMfzSd46AMfXSTDvwV4NYAd8sRfDv6W9GLoppnNPn7dKqzqay65mxbwbbfpZYZ",
  "key11": "4W3tgGV5mE11QNfJZLJjC2Wf26ukpExgXHv7AaerRKFnEmYWwbdVr5suUVxt79vJxrovxYzEfGFMkUsz2Xq3m3qR",
  "key12": "3FVBWJj3jdj89qWserXhLF5eQiKAtJoHUuxTqXvyawWZN4bvVTue6MNFYC2MKN81HhLb8LesvdTqLDL12VxrVdaF",
  "key13": "46oYKs52kwRHforNqoga7Dd43imsCS6L6ghh136Du8FsGJwfzjYAJFsb98fzkps4kLMrfmLk56LmPXM6iA7XhYxP",
  "key14": "XPaXsat22rPxruThX66zt4Dsr66DSNaPLtSg7XnvG5Njvyh7YfksxhXoa6prQnVLBbmcSRC4BggmHTeHa3bJ2Ak",
  "key15": "6551e2p556Lb5WfATzEmL22c6NhiUtrBdrkQ4R4KdtDKMXAb8UjJp8oYTvq5PyJe8JJVB66WdxVYsEsjApr1VtnG",
  "key16": "5e1ZCewFmyiKen1b1GdhmZxwSfhGvzEnpxdSZPsDmpwyPLu2329r7VJ1a5AZtLCdWD4pWCnjGiJ7h5pMBWKm2U4k",
  "key17": "5BeRXWbYkoNzCNDbmVtPZHheDBLn79sykQuKjRA7EsxV1pGMs15HhzqXnHzwTuZ8owW2JG1JaoaAVRNsvVZHC8nc",
  "key18": "2vquBssZFr91mE24TzsM8ExefAFYidyy95NmTJcXLSFCpfM5NJkg7pLMPx4SDi81hQrwvUSCXyUx4Mk2skSctddi",
  "key19": "5rREXSLgXTUDhek5fUBVmQpeA43MbCLckp2WLCUyWaKSkgArhjvas168Ma4KCJvx3ZYNUKVXYLTLCqkjWXsZA8Tt",
  "key20": "ZFbDeMeN3RucM2F9QFKiNu3hci1SNGFXAV9oVuCE5sTxQ35ahsZGz7aiAyhvMAQfkn6MnGjYFmTbBzzEgviHipP",
  "key21": "3W7dLzTHwC6Df69XuV2PsztwqbSYCtNrRiufEWuMsNNZw7FLFVCgrFKQn4rvDkaLULhh3BrNrKt2LXF8cRCkgz9D",
  "key22": "dJVuFiV9m6jTjekUQEX94rr1DBwmHS5QVB4MLvJy3NbnkUcSjuxAxST5298mxEsiNhqTuQX7LPB9mdaNmD3fgLg",
  "key23": "4jfRBLsnkKz5stNeuomPCC4nSoggizEfUqrJHyaX5HMUzD7uZzTjJs4WDELWzutBE27iXKzSTX9bT5Azq5k9RsjA",
  "key24": "4tYkgX8zPRHbDey9EkvtG736kx9DZ9YHyNT35QJPCdbJBhyq785qeV5fgYq3ijqG71c1K5vSoWuXU2CTvFrzfgRX",
  "key25": "4J1gPnXoCXwDKvHWeo4bctk68ncM2qnLDLrCkrJPqNF6zCM8QVm3L4YQpDKWs4bTtXsnsJiEbvdHkZXQWHNoSDEt",
  "key26": "26hErPEJPWbDjTj6mGTgAkGrDnxKxa1uZ9ARJ7aL4LsJzoPJUmBNbttgjaEPvLUV3MrzAizk5CjR5R6UWSpVnvso",
  "key27": "DZJpWSDQoA3GXzv64Fpd3xKaL7r9c1tGRaqbM4hKAzXfnT9wwoZDYEAktUbgDMe9sCPp1BD1UyUoiCcXPc63UKa",
  "key28": "3qdah5dL5MJAd9fKkHrYTvFEqQkxgwNP5oWWwgnq5J2h7hjo3ZLoZ73aaXPYSpqSKUxFXmFDhXzJcW3e4MsjWx4t",
  "key29": "257ka4kTJ9nzDAqkDh9iSzkCdTAG9HPnLceofiTawyBSWMM8bVUtvAwrBkSV4n5HiLstnhM35WBpqn2Ytpac7PMj",
  "key30": "2DnYPDHhAtC5QowYC26fX8RKD5SgEzXqF8VzgpMhhgUsKehb9qZn5Rmr5MnbbQn4hRgSLpnaZZhQRmFymABM15Nf",
  "key31": "oWneh1YE64ZKHvGimDXRQp6ksZ1aRAcCxy9nHTq8bMfSF1vjbkJbECobARn1ELqca4vXu56LNW82BLQfiGyLujE",
  "key32": "5CK9j7FrFYFdvY97dD4HvdNfgarupA3kfdmHNDS3cRmvvPzHBXqj4E358mPUgN7yuyoaMCWu1vpP3ZNAa2MLMas3",
  "key33": "3UZdhV3SCHHinKcVS8WyJhHtDLQxTdmke3vBhiJV1AMs6A7asVuHFwYpgKqnwbA8c7DiKK6QbLisd3zqfNu5WmdY",
  "key34": "2XrU4iuXZG8fG2EBc6j3wub4VdDAv2LHMfDPdjVNAX1zMoNVDrmZqbv4MHT26PWC8Dbe1vxkm9zvbsSebdsjjqux",
  "key35": "Fpmb5E32KmAu82ZMW1n3zcPBmqpyiFFcMTik81PCFZYbaMxt5teQpUgJcd1ochM4DcKnpHZdN165mjy1bcMroUf",
  "key36": "3dUS1jngjsuDCD5ZFZTv4pco4dHD3uwwPFUUdFYiSguavqMM7d6xSvb1xqzVtbhtSHzr8Je2cJFcvB2WBqjEmUpX",
  "key37": "3CrbAVTj9to9BPM8K1hU6a9nGwXK9LsnJHgPUgqHijHwq3HbKM6NfiMz8VzURwkDisaHCeE4aG2saskdz5dTqWYP",
  "key38": "2GjFWc7ZykpJusMYEk6TtsG6fbUJJLij1VaEDYEJqhT3VqZWTEUG43wzoSQWRqc7YifHaQ6FCy3JrsN3uAqrtiqc",
  "key39": "5rnwt3oqLvtD7S8JcEeQzN6vzgGihxfK5d3nUwdqz6ap36x8Wksey9razXkQFSKMfm96DVdUPLsjqN97J4DvVwjX"
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
