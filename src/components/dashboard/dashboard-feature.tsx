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
    "5BFQKYDZbyScrb3F7gRwmwwXFTzumvyo5Pohr3rczJJsLmB425KzWcMBF6SCD7e5cTdAzJ9HQqdfDTaXg63BYPrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KELxzqvwrHuv4RCFGEEJkUESD317N9wKKuFNpbGraBC27TZk2DvhwAoZWGc85sAH4Ld6KXAAosTGxMVQNxrRRKu",
  "key1": "62sttSXtrD8wyTHHwrHwwCC568Wf9HowTxQJXSCCUJ25YQTp8rDLDXvkb9TuKHfAEqD3a2tinULEmR8cx9bp7msg",
  "key2": "2EQXKiZ27WF1mSsoazfxS7nZaeUtWJwWNAfHHhnE4Qr3N5kKLEhF8fPEGJJ8oyXQtuem8DL4rYtzdd5BX9qXmqga",
  "key3": "2KEABunJEgaqp32oJobMkWqP4MBkU2iV88Xkrwq2tpeu1WGqkssQSRaZuBLVELbqw4t9YbM9xwtQLJuTz63nF4hK",
  "key4": "LHHt1BcW5P9mwVTwmQrrg8CHgxChAmarui8tnpLABDTNByhKjErLg8aCXbVn8eKFX3Gr4nsyerhT4Jv5tsW91aC",
  "key5": "4VUYRyTZKoJt12brP5Xsw2SbrMXgJPQrEQNP7CU1KwiHijb4oMYgso8TZnzcR9VvGCiczTsMUur9SrQtyamZ3tWG",
  "key6": "379916e47VzDYzJ8JtcUTzm9f6S8K77y5xYVJN864XdMf1RF87qF21dnyCzvTcoaHaoF9qC3ByDUVzZytVakpyvu",
  "key7": "5Wr9zZ76imxn4wNDj7vPpYhePonDXCSvBrMqQ5mjJUM7uutpsqxfNGGMBeimpSiwiCwWqTZHSyC3oUTbQmY2bRqa",
  "key8": "5mtkmYwDUctNdVxSSFaZjrFD8vEs1P81PiZkiowH7GSjDd6Sxkoh4NU4KgAKCNHuWhVw2rKRbbPhSjQG2rfwUuyD",
  "key9": "35PYzcRDDJjpaCHH3m1zDff7Pf6PiXbTD58e6P5sLYgDRwgqrr1bxWxyqjYHbgkCD9YCKRsK5dLM8s5PRf8QhLZu",
  "key10": "5FaUpUzExm9ZaGFJHS7BmRG5Tw6yfHkc2eML35t15KJLqjPmUCDuj5RtdLiaDU9XxQG7rwpVre1YdZwBP8xiTAW",
  "key11": "VRbFmNUYeZEqgY43TTSxobX6dXR5pkYkxtkJZRAWyZvXVyWY2K1PxsnTQvSvs9YPrY6f57nsyYGzeUzqMtqCGDd",
  "key12": "4huRWvcPq4LnKg5atKLgLosVSHcyRvtsrWom25jaNzBsvWJnxe1oqZky8xZ2WyGEuuXNLae7vMcHrXJeryG7Nf5L",
  "key13": "4BASwdFTo7iBr1t1eXN5mDXFxBPgkoER2XnNiYdpPgzsMMe1WLd5PVb7xLhvyZfC9ecynMJb1zETsiQ6pm5vDkN4",
  "key14": "4EHAwEQyNn7RVXpQYUpcL63QarRRgzfNUtarvpnFyBkTNVtzA9pYpcqYRfHR1rNTh9PKRamckRCAoB6bxkMvb5oE",
  "key15": "XnJ6uGsmc9Qf8yYLRznxn7YauPM8Ur99ZQuLPHvEhsLtwPmrUfBGJCAe6p6kiXhRw64qtR74A6EHEzv3JrFWCiG",
  "key16": "5S5wSZC25WB1rHjtU2uhP7xav3J3ZdA2dEQEEJJmcB1ouxEVmoHgJsEJ1UnhbrpV7tJa45aTvGYSbU7Ksbxtwxnt",
  "key17": "4PY1crG3tiZ6hhhfVxuWv9KFm9XK11Dno6TYUKPsBJUgXWb1GM7sRUQJdDYy3ue2w9DZwkE2E7xzmwKfm3z3Uevm",
  "key18": "5SsfnHq1JMEVtE36UnwWcz32dWc9f5JxrF9TXbcmLGfgrYD4681jbosx2BfZH9JT9FaybXNpUxjqYZgyuuirwGNJ",
  "key19": "4B2R7pxJGbjvnm1qgM41jMxT9hDQZyggN67LdTm3kemDB7aehJvP1PRDKuZQNpMbdFTtCiP6f9dYgcPRZRsK7sCo",
  "key20": "3gNTsM3aDQDvsRb76WrLBA2Tf8T8dmhDhmAX5RSPoV79ET3PYoVs7ZKrnTWYP6eJJ4xpar8rHVn7FjWjHyrcnqVL",
  "key21": "fW5mhGqzBWhifAHw91Fx2uidobKwF6F6HVTGnDdf4yhioco7a2og178giS6RZVwTCKTBDi2PitZuWqB4TLs4AuR",
  "key22": "2NoPJJCiTE93ju2g4bfDYJENi7CWvAzv2jWgip6AYDVDobYLDgAx2XoxxiHohgji5Vo7YRM29RRHjg8yrmYbU6Sw",
  "key23": "5caAPZbkvQ5qDhX14tRddmXhCj8pb84bRwkmuhEVDSWs6A5bAEkdtB9GPqX2ZZw2GGCg5EW2tUnG7qeNr6uSzatd",
  "key24": "Dsk6xdnE7gHHoFDWFbwyDiTZCRj2gj77nov8AeLtSoQ9mw4dhrqD27r8guD4ksDk336XqE15fAvBR25xSgCpsXG",
  "key25": "5E9vnLqbBrJPGHnuB78DdGq6UFRbvAgkBiZQdNQCvut8Ey6QTkAE7vA6uyAh7uj2Yjx3dXKRZCH82YA1qunUTrqs",
  "key26": "5uuWS2Q3MoQwy9A7LgkM51r1XXH92BPAn2f19mv1R8A9efo28SonAWoEKvKfCVP5UpAqKbNnTb2rypE2t6hUu5Xy",
  "key27": "3AaRh15oBkqNDnEom42KvsAJ4vHA4PRFoTjFiHV4i1BXRiwejYJCGZUtCuuSWwUtNJMLbzZXzxKCz5SUorRgg9eG",
  "key28": "2W4t2SZ7CVZ26Dx6sL1LKHHL5hdUJUh6H8NLyoALEA1dhsGwnM5uQMtCob5cxW85ZrHSM3tnPDMZh4KMUcfLV5XX",
  "key29": "52x9wy2d8STzBM32fix84C3St4CqTZ71tpcb7gyJLPjN4fNk84C6kKuXiNLsEj4wR5ACjAUrGaYeXgs3JHp92Hjc",
  "key30": "3XTFZRuBvxhHd3Bx222H89ytn6FQ2pxNNDwKnWRWA3iijDXwCwzYTyWtteTBdB6RNAtxzrLFYgxR6tG8UZTfdan8",
  "key31": "pkdauWpBSrw6ouSi57xh5kYz17xwRXLzCGMSUQaFLMdPsNr176zhTCa1X1AfJBkVuCvCbHvdKBmaesVqeBJmcGa",
  "key32": "2522S81Pd2ELuHtt2DG1j3TAeCHnU88jV2VLjv7m927CBi8yikSETgYBYRQWkNUjow3ZiwcStNqES61gQho4Crzc",
  "key33": "5fHx33ofRvrH1p4uLYrm2vCh6yWzDzkUzHCnhbcVNShSWtd7ub3S9weJQs9WXBAEnPTxaKchxnqsQHLRMvmrhuLc",
  "key34": "5cKC81mM8kwEsG2cCS4sDMwhUWYpfBiwT6L5dGG9Apg1RY6mMX4bdWfURXw2yTVj3PsY2tLPNAwUHQmZtVvhmUr",
  "key35": "AzYKGEvkJ8afYELA3ridujpY5Kt7JfDvR6mwwqf7WaHEABfSWEYuLGgpu5W2oBeqNkkAQUbZgsxBB6jsLKMbuEm",
  "key36": "2h8PyDztXpku9m5saMi4gf5Wai7Wsq8DrsdmdLN77QhdjPpxyqs4L7zr8HEFYiYxXpLDbFkQg5vxRaXJHjt4Pa28",
  "key37": "4v9kYS7snA3C7TAd1hQTZ4APeNdwkt1Coa8ix4MkphKkRKoz4npG5cy5B3NX5LZ41QDVsYhrXSjT2PZaXHAVvbeP",
  "key38": "5ZucYmAYsEWWLdL2bnko4b1vcUYx9GHz493Mj8q5rWQ1YJYHGHbFQBW2gyE1QceJo6A8jnaZyWnHwGBwVT8XxuW",
  "key39": "2o1CJHicyHs1MiHBjDWAsvqhwqEM7p9s4H7342zPa2nZ63hNQ8WUUfuGne6wsvZZRTbN6bH4z6xisePC8zikukZ7",
  "key40": "9rYEsNLWwqQZcSR88KNd4CsoGUNgFs1w4mvDEW4FvFmyTjMwsQ77LTJ6kHEHdEJe8t67qEnHaab86mEm9BUkKes",
  "key41": "4nPkGhACjUwzM4meoix9KzuZQahw9eW8gUscWyywkZFFPocV1Rt5BEZDy2cGr1q3JS4MVbWv79xS3Eoyg5LRyyY3",
  "key42": "8XuFcworZbS8uZaqVVG7tzxLbNxbCS5SrYCxnSYHGtVGcN4fQDu2WubwCdxnmviGzmX2VFXTj1b7Lg383YktELu",
  "key43": "hN44Hh1Jeqbhea1FFLDNZhban3irLCDsUmYhBbtdjpwdDprm1oSEtaqeCbP1nT1TAiQSXN6AZMjsqooK9kTGH82",
  "key44": "29JHaB7y3jeAMvUgNfMapg3gAEJPcp145Ya2vNANFC6X6Tzpn28jguWY63e2M9Jcx4c1K7WUf87tKVNuEnSSvumN",
  "key45": "5FtZqWfvwxiK2GiSPAMv2v4F5hQTGBwsE1A7CiY7F1CzuaS3dj6YYeD1TRARE9er4GZJaXEBiAKg5HE2XqRKXo2F",
  "key46": "2p1Sdy1GS9bm5deResA1WEy4oWGDMcHx2ajMqJ19CSPCFPi3xC168xEbh9oTLoE8DaNErjjJpy6giyAECBGvBF9V",
  "key47": "5t9koiqEiK3AJiX9UrXns6es3QnsR1LWHwkpwghwxAbJ5PJKKJhdyNEo5Xf6oQ8q8JX6LLGKv7QESLEx5Wandu8h",
  "key48": "FQqaRo5QQoecMxBFmQoAD7HEvb3rCdCx3bmQpWoU5ziHi7tS61PycpZA4wzN8nDLWd8gcb7ZLwJarEeoJzAVjy5",
  "key49": "56YYsQTnZnZe4Cj8TvLJVDcbtxxp4wnwvUjADyZnwXvYCvS8htF8DqreaHKEudgaWx6bSG5MmaW8NogLPepK9497"
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
