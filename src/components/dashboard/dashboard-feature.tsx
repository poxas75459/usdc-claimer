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
    "fYGcmYC7YPa994p55gtnRDRGqoK5PpAhv8nnQdi5xMaHCF5LgXkkywQmvRPMkUw5qvTajk6MsxKN1h5eA4tjdB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGnTNEiVGHBmm58DXHUhojQ5JLmAXFLyDhQTefBz1XJ86DqgZHevUAH9Cdoh5aNGuBXb57MKJKvF1jkAMDxrDTE",
  "key1": "46NifebU9JjsjAoUhUzpnATqW54SMQsRWtjBUJFhxCyD8Hjeaxv85TvTRAXdvGc5DfU7BupFuWFJcWLchxS7vEKs",
  "key2": "2jhF6ufSXRpNq33aWLJuWiPhD5cpd5G8GjVkQMoLHNY3StqnxhUc99Z3shpoMGC6rZXgH5WQnTJFwge2t3XMKomx",
  "key3": "54ZwCq5aoNJjSc6eYwor8pphhnKA8Tx1PLzkqfCcEwnQnDRsx59ZHNHnzxzBqXctPXiXsFfMurPdSdQMfmPTktcF",
  "key4": "2PNGv4zSxinTo17Yx4fBsimaZkvBJSobd9XnFEG8TDZJ9auqgV1pabsfBjvGAAebwyHEtdcaL5FAGNRN5LZqoKmG",
  "key5": "2y2NxSHp4fqzUfg9EuXDiPSq9Jyb8PmmYzGSZuxYtXa9zf3KYzpzJS6Asxg3qyAL5n8mVSSNAriqUAzsXERafTTu",
  "key6": "4DrWbkHwxoXQaATFAUn4tuy2miscgD6KJjUW6VJENwBXWBSYXT4gWi1tPWrhbfNGqLxdCdmHmZCPLWzgEk7AQv4t",
  "key7": "413V2dEBsRn1kmPFZAJ96dWj2JAfu1QNYvVSBRizRnboyzEr5JBJXKaRtLSFiEHU6YVcraD7PBTUK5eqFYeoX1Lc",
  "key8": "2q1YuQvVDLfFpFUh5fLktPC6wKqaiQBjtQ9LdG8gpuED34norZzZLxiLEYr3izzsG6Fbrcrmdjbm2ayocuP4tnJv",
  "key9": "8PFua8D3jZeHGvGEkbPDSwW984on3CAGHR2vy1Mmc1fetGzDLRUfe9Mm7CHToBVPKQmwFqhZKpyjy6ftNZeDHcE",
  "key10": "2vXN2wj6nFi7UomEUyhQTazasB1GYENPMHQC35hvEhaPZjFEP8WtCLRDYaXS4NmipjfspQvmrK1BUTH8ht1et3az",
  "key11": "nGF98aNrNZqyMxkwGjPVNXsqdjJV8YSvk3t1dE5uMaJipWM1Yied8Z67wzuvC19CbNhKsZJQTgNm9bp8zS9dSQ4",
  "key12": "4zHrDLTtcUiDYinqazp7eaGaY5JNTrUdLEa5jmbuSyLc79xdv22d2wFCE7552d9ei3eVYPN1QUVg39XKWTr6WLJN",
  "key13": "3SrkgwUq1PsHGNHSv8euX3DhFY556ftsuCwyKT1tUFJixL4e5yBo9eA1hfHHktgSVxKFZxJsqkHGh1xYRT3dm87y",
  "key14": "4TJnqhXzxZR1A95RU16XLR5RFbPRhKf4or36MhFmRybL21Zomy3qipFQEv1rdKJWPsaJEt9GDwJi5PjZL95J3gAv",
  "key15": "u4SCZUXUxWAyo9PXpNtBgsi8mcbihJxEnq1QpiaJNAHH7pbN86RaTvACGSU1Eu6GYQjfbfadjW4zdSv7ofqTS9d",
  "key16": "2YWSRvKakegoSXMYvs4aUrXnHPzDegGP1exHUA9p3Ly2pJMQ49KCsqtLGDmYkTUWnhnM6G8UNqqzKuRgdnbZfpHY",
  "key17": "3dTWdCKB7wg1owEMvnrnuVFPyPxxy8gbMaCF2zXV9HVYSt4Np6ZmbpTjEznQJBaiAs55r8N1GELEYydaBNQYGBhn",
  "key18": "3Q2ERVM8fbXsT3FDwxqeVnjw2NEW6M1EWjJNMdfHgV8vbj4Az4nM1uuGma2dpybroa2Wns8mj6DEx2ny1fPXdTKH",
  "key19": "5tX7mFFuZwaTj5eiocY5mY1V9b1iDaHH8KMWQy1BGWw3mmwSPYa2YYCEX4WnDfuZipdGAKFE3psEdHXaNXqc16C7",
  "key20": "2n9ZwZAD7yP5oSQUcABSbA3EZZx1XkFyYe8ZCRkMqvJ2UtmJZibb4bFtA4BjHZGJ96nNdY21tPB6sq9vzpr6xQVg",
  "key21": "4WPVxDJ89Cu5ipfvo64VEnj9ttn4W9uR8YSUgHF1Zv27Eak5f8z7gWEsPnjmXeeJvdLFBXoXxuZcrkeCjHTiX7pN",
  "key22": "4B4ofhyn5TTkNXNd4p6sJxvzvssdMUwvhz5TnoR9qXg79pHVkDJ8qA9shJHixU7cpA4Ctx8zkXGRdYdeJM4XCNAF",
  "key23": "3gW8LfYeWPXF7sh9yVu843w3eZFZMPNBPTrQmoSvH5ewhjGJci9HJwkrMEZcZDjX79YFphjkpBhmoJvWLcGeeoJn",
  "key24": "4pY1jre5LFS7ERoPM8eiP4basNQ6sZgYc2XVHGfdUdAsaagUyxeG3jkRJDXA46fcxHoeD4GNVNxkPHQHRWvxFTPk",
  "key25": "5C6Jbrf6sfY4wrgH8hWVeuSjfM7fXgG2UPc1wsZhPh1X9LXhjvpZsxG6mVSvj6qFzjRGnn2a6PsDnz63Qc1n1kbe",
  "key26": "2Z24twoAr4mLpqv1qVJsdWfFvfrphNAaqrF2BHGTQQXf9vNGffHcw7YgyTNqoUmgR79QyXeezAsoxQi6FU43XNnA",
  "key27": "4aZyY4kgQaPfDTC4vy55gr1Z1WG4igqJerjGVHCqUEd3Xu5hxRRd7A2ZLgEsfDEvGX7X67ExVjZv7979zeNRU7d",
  "key28": "2jH5FUncyy8wCHuXZttTgzJDCAC2XmskCeUpB9PzUJfNB4vMHsnmXNRKvr9STUuarJJ9YEKCkHGamAGenoDeVVHC",
  "key29": "54umJvekKWkSnwF3E6RhrPzw6oCm41S4MLVwgQuPheumwbe3ui6GttBVQLuj4rKJxY3KVBHfA5zVzLaQwxZzipM5",
  "key30": "4aNqcnjb3ECoRnFciDnPUu99D3gjXABDe4rF9ktwsBNQ8xNsA3iSdvgJ9kxQdRbUM2bSeHeoAE6wkDQA1gVJSw9T",
  "key31": "4nAuWkXqK9NFnMEAni9tJPNtvhXbYzoEza7nCZJH1Nh7GzLrVPj89NPvRLCXzAJNVrH4d3K9u4hV3oC94WxNv1du",
  "key32": "2nLFbG5ZfaEiVSVPtCzHQQJHz2eF4Vkde3D3qcJ6GGPDP7ZyQ8wkKpyY3Ndrsj657Yo6ZCov4yvmnmvnRu3iDskF",
  "key33": "4VFXAQnZ2PiY3qvzQFsc2Uwb88Eucm7DdXg2utTV551XjPZ5qMYnx2PXuSVfXkaw1iRFTM8PKbiNwUZc1VrTNdux",
  "key34": "631xfNHCVhHUcwgyWeMCKuYpVHhhoQRs8FhczQZZe1MWw6cu2nTkrDxPPMFfAi3wD5bPztyT4sbRWAEotw8Ru7hv",
  "key35": "5xHuCFpkpmkxC8R6jNYXiWRHaHWZrToxE4eF6qUyYYqt16GxZm5iCdVns6ZHebzzrnbLagDWsZE6oLFb7Uzi79J1",
  "key36": "ND1LXE2BGM4FfQknqgiECyEagPMWCX4EnyrQch94XMLZS8X6HF8RsTxqyv6hmruquniQTqLmgcfYZc4BC1hHFTk",
  "key37": "4gfUHJ9jZQfCQLwYSULQGjBiSi6pRe52XwEJxJhFsiP5kMAyQmHJ3LajszspeXTCVuTufy33B9q6T7ZsZSKoakmT",
  "key38": "2UahjgCKg8nNdKETGXne3wPunNmrZbkw6NXGjquKKBbDAFmKwKe45Ze4NGZKuzGhx8xWrc6Jt6HgcmNpxWSeaLuF",
  "key39": "4GS3npfTXJtHeUEhizVWWxMjdgGfsEzmsuVnj44haGoLtNcL2XdqVF6jCi6mobw1aJVsu59wZ2PizKbKf21qLhdA",
  "key40": "5h2TDyJexbXQeqQ414b5GFe39XVqi9DdxhTUBioa2jV6UDcA8wXVpQZDBUC2qcjPhabvpe8MAKimptgi3ieurZ42",
  "key41": "62QfEURK6mDAsBVcAGCUTaWkDN2PJ1wov2sKCx2n12bULkye1SoStNbFs5y1xsban3sCuRPS6diD29qh2Brq8pe3",
  "key42": "4ZtNtzuwuCRu56qQM2JPfHUFxssQuvUUucdL8a6bsbShymYk2Gh6rT6emJ68swgSaejp9imBTGDybTd33HdudRJP",
  "key43": "3cFHWupEaXrMRwan4v8HiqyjCa9fnm74VExQVhHTa1ayLRejvxwdRF8KzfDihfY3DUEXjVJsrmXKSorzrrJrDNsu",
  "key44": "2vUUdB3kMrfZJLtfH2hYY7yuUaso3LDLanjPPMzEqo1hAiR6iqFZXbGFPFddqc9ZbgCHhXucFpLWhJkYmAHM4K77",
  "key45": "KAmDUuQDWVyLgSvfewAPb15iXcVTb5UwGRL8ux2756cCbF5gBqRmWqDqb2vM5weA9AqRMXWuvCeVKKcvood4Q2V",
  "key46": "24Vov6gqtKEvHigytaKiG5MNMcxbyrMXoD97WvSawHVLx9cPDszBsszPYr9EcLxGMrGgmg2cbMf2MEi553jY2HSw",
  "key47": "2ptPrKrNvMjjvMmkKN1RrVaM94KTzsc8wd5WHqjiLL3Xpt2FAdSPoGrMqgmt9cprHtm2L81okRD74FuxVgttcVgg",
  "key48": "2M3r3Lfr8J7A7DrHyXQscgcq8JURsHsNL1zXpQ777pdFB9o7fDiHCgqGxK8ve8N69ReaoakWzzrVLxAZ8h9CJzMk",
  "key49": "643SZNQ3L7aKcWFg2JY6aqDQWggoA9sNj5crunNcEUzCXfegDnCCjMS9ToVj3RfDBiH9y65FUB5GcYjb14Vs3STC"
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
