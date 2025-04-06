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
    "4GWCLkHkkp8soCFTJWdKZBRPKNNEwjSTTXt5FFDnw8vpUeJSWSaHBezDAXt13JtvqqPz3qynGP7EXUQ7vtCZGjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X732hWnkhprDzega2SXUi9Dyc9izccnDcXSe9WT75pWN1e6j7A9TuhFLJxdNBHZqSBwfHcZrmpvu77u98ZEbXWC",
  "key1": "5hnydfeMyRnMALzagBXT3BF5CDH1pjbvS5Um5fWDBUziFTFqNY8sg5VLwPTtadw4CquLhas4Pu5uGae5cYMGLmcN",
  "key2": "mA7mGUUchi7fhSY2UNQE6oWZb4tuA1B4qHTvESHhuBmFsYm3ZxaD9Fe11EJUnPfqmQxmXBC6hC3wpUsKL2FXUo9",
  "key3": "5LzzpmBRoqGw5swTzJHaq884r9phmuQhnGWe7N5Frr8mNW1SUQShMyMRZx3iMsCDkBWgsWPny7duGNv9mU1To3B9",
  "key4": "3hV7RijgqRqXTpCy5VQvvQWzq9NMG53o9Jn78WJeKdw7qNkyH7vhuFpcCjX5qSmVRoSmqHC5e4fHvTUSmz934HVo",
  "key5": "3WBYsrvBgELjYMoX1ncET7qUYVmjLU4Dh3ErwKxqA92ZLR9jeyt13PuVTQkWDjojyv6nBv26m4jtaijNtUPpHr1H",
  "key6": "2LYKhZA7K8QXLwXAMEB8NDyK3h9zzbdVjzP7LGmEkNNxmLPw9bmjFaZ45jAghHAqtAGm3t8TJJcgY3Y42kTyzhiY",
  "key7": "3r9KXFCunF6ro4pbR4FP185gEPZsnRv8R54nbNBQ4xTj4s1j1m4aRzfh72xwxHppX8uX5NQ9q8RGebVnwFj3vpiY",
  "key8": "3WzuUa4uzLabeRHT38QPkXLpMyCpGRDQDyCiaTJd8eczyGcrzkt9unEppasB8HKE3MRSwSL927sBGtubjwTBU9fo",
  "key9": "2dDk1eVfSKGB4VrkWhszL5x7R62f5Gx8n88sfitNkkCLZRjs759fBidC4xwHTWUWySwovwG4jr3Zu4HbJaj3wqrj",
  "key10": "69xhwheEHBSjnyc98qiw2w9aRhoBCKTDocsbMjWGsgDuYjEL7MmM7nv6z6XatTgQ12UHztcAZYnTVtSPRdpieKX",
  "key11": "bCe3qBWjCZpt4rY6N2gmvAgWSPatpDgYTFmvuaTzEEL7qX34twNgbWWwdVidNRCmmhDwVhFmdN5sKaM7nzwpboZ",
  "key12": "4Moizf2u4fCZpcyQFhtUxAnM1nVkBT2Xbzwkvi7Y1ukassu5jVNMTqZos4tNxK5ckGRVDEU5CthvFEmztiJhJmhu",
  "key13": "Fc2sjFtJNm91JSC3cGdhjjSaszZGuKMxeyK1EyyVJSTA2NUgPP5KVXMiwbsgwMjKfFRAqcfUP2hQohKo4KTDMMw",
  "key14": "4Z49BbF4PLpe7SsfFBCadvDMKFRpHaXTnFbayMvmeGBqvsYNqC22pCMW4sMqKYcX6KU8DRBPtMoxy4tHrNopeSZq",
  "key15": "4LVGouk5ihwCJY5q6be6zZ6pzTNmATjG8KqfypJRkS4gCWJWyWNzRFaf1KjdMrRgHFJaQu5kzgETSHZ4pSKkTwkh",
  "key16": "2yefcFMocs9J2EFCvTvGr6f33njq9NedjspLE4QNRJht8kg5vQEFo7syfH6PExxR3VEm7rcWgua7Jwzk84HXmV6S",
  "key17": "5ferqHKvmoaTSdpnjFFk3Nsz8g76nvw6sg9Bkh7FgMuxxYdRXjkPuPQubCKZUSXkAh95kygyddrmNu9A67sZd8hq",
  "key18": "5H6KrZHZQ9Tkvi4F6kR3Lk8AA59cBXY7NJayNRkCWL2r6GWQQSXXHNXbDLt3VUmwWtBbnrmvA4649SCwPKG1nw6P",
  "key19": "3eJGSp86t9cZTXnBfDBbiNDGxD4UCaVd3NtWu2tCMV3xyqG8sHA3CWQJbCzFvrXMf2gQ26QcY5Nk9xquzKiAFj8w",
  "key20": "3N2R7UyLFRwfDp1D7FnhcgjyUqGzkqHQJqKBP2sHqFnzSL4MusCjYh4azAkQHiRHp5umBTA5zwcg7BRc8UNY17HT",
  "key21": "3SGiAeAGVzkAhVCTTgdaQwg2iQKoJ1EtD7PBEqGp4KJgrMYq6fToXfD9BcVPrk98YAxzYybrAAA3yYQ6FV9Fo49W",
  "key22": "42BBejXMtK4tfRiXH1TPhSLBU43vzwQ1bkiKd6HWMtaeZK5qhZuj7QX2EvtaeCrTbL1DacsB2bdD1eSQQSjP9muM",
  "key23": "3SWdZmhvPqFsuch6wCoB4RCjR2az7nr62WBKQsWspogYVAdAjhhjLHyTYNhZrWSStPgYig7pACiNSMjYQwzasg67",
  "key24": "3SqENRgVYYadpbdCfxXUdG7Hk9rNCSf4B6dW79aksNWW1mz4ayz5npAN2sKTLidrzgyZzXqGL4zXneMQbDi8DkpZ",
  "key25": "4UzJJRVTDbTqwYsVQta4YRRgp8Q7sdRuL4vGWM5VZqAV4Gx39tNQPubvKgvssJMDfVbFEqFQgkobR4TkCBM6XiQr",
  "key26": "7J64RCprwV9ssDERE1Zte2yaTiZytuus6aGhVJvVu2NcwEjMGHcPaUDWux75mmnMyTeke89NvQV5BcCdxUfE8Ju",
  "key27": "2skdbnkStotXLpFYp3gKscdFwqKYGtweWtSvyTm11DCoXoqRAprunY48h9HWQxzPUusDr96Y5iYJVKLcBANtQELH",
  "key28": "34qtC9CnsCiPtwNoXhXEBtuzmPEKX8SrCVLUixDx2aGj936qR3epwShB4mgDiznJvMMzeSJuKnczCPg53YrLh3bS",
  "key29": "TYcb5k46usC4e7cViCb1Jj51jLJSzfP5kWEso2QfmGqhnALzghek7auPFnxP6fSmNrU9QuQJ3kCffwc9s1aoSey",
  "key30": "2RsxuvWShw1uQ5a95ML5eNKb8fNYLB8joUPrTekgpCDCSDfPtUhk2wy1QeCh97VitANFrrkefEpYn1aAVbgqXN6A",
  "key31": "4KxToMtr9b5hhpr2ZQozemSAc7EVc2dQWB7yhTS7AD8McGhskzNo3QGSswi25BroSirgK3GKPsysxSaL2SsCyTE4",
  "key32": "4ENmSC4uPUSBfiPBjxYFbL22weZjia1RvUFpzLRfiKBkUKXL95cMHUubcDktqXL3KZWcVxzb5yD8EG6sYH7k6h1M",
  "key33": "4rE7D5HGU3yBy7PsEW3bqHSFparCQ1reBqurhqyezrf4qfrVYRT6w95axPDS8TAkTXjnLgB8jZT1d6iNyYgcdfPv",
  "key34": "2Q9DytvrbZRqsyCJDLCUdf4wqvD336DPCFNGyLJRF9BJxza7SsmeBRBzjg5MP2nhPU5pZXZY6wp56HHLAnXfy5Vc",
  "key35": "5n9mGpHV3pdRwjfXUQ5Ji9m7eRkzCjett1qQxVqD5K145pTDeq7uSHUnX9PeYeWp2cEHeG8tiVVK6YPboDtBcT3M",
  "key36": "347Mw3f4VYbHszwg8qG3x96raEFtReDjiC8boCahg42sjuYhFcjd69tQCtuYwNXM6rNMwFZ48qvhgJBKtq1wB9ZS",
  "key37": "629iDAEYLt7EiHPaRrmTvXxFJZT752ckWvfucZNPoVyPAzVsvYnAuQ95xYGFqWw17dY2BBd1SJjGPH9kqgKcfPga",
  "key38": "5pVBEVLm1jmK9trqjDfm8AT7vsAUPufyUorFmAxdyiZFYXcoEmWBi2nVjG7vaiMfaQmqwS1VFjfhxFFTCZi3zxf7",
  "key39": "2qcF6jPosJ5R4fnsWnWeW65hFDHcJYKZGMXkoAZPopMMtSJovnzyo2YUqujZwj3rB2VVJMXnSB4CJECDtvCBgCjr",
  "key40": "4HGPQGTWXqLkPbNmrvgTJAgDKWHEskUDdkwQYLGC5zTkifFH6DLnZdWaytR2T12P83MUfC3VrJAHJ4MDDmgmKeiC",
  "key41": "29fKJHEMMiPNAmt7JB7k3C2YpWTaj29ajhd4pydadKbZo5VTa5oPj7VKoNXDCKqeemgdurstUNx1BSrTzvSUSptT",
  "key42": "2o74hk8ELxgAKC9K8iABviDgKkRN4iELYQb3YQC4wHYtQgN8EnFzvxr1yjG5oeNSyy8JBmdsos1Zy148mr53x4qk",
  "key43": "4MM6ji5aaKvJywUPbAdxjvFGUS9ryaw5PYpM6FABxM7tYyQ5rbV6vXH4nsTXNLBMsc7CcnFCiYReMapPJbw7GcPR",
  "key44": "3wwB2ebYAZNnxJifXQmrQFqUavrrjvWSqmEGMmRZz7VtFr3kSBUG3fNkeFYLgHpi7AoiCWzbv9z2whT5ipaRjetc",
  "key45": "4Gwk18f7MkknJwEbLp3y5NZyC4LDXGjU8p8WphQoFT6MrwR6GxAwhR3M9UnMJghVbq4cDZpDieNqGjWKq6mYH9Ao",
  "key46": "4RG7zPfKwdBoRYwRKzZv658JKam5ki2K5EdqiiXTNWmntLCtjq4VLRwaw899fJz466qamCfy6HVGUHfWVvRpKpm3",
  "key47": "3SsJWojcULPMSzM3FKQS4KjsZHr1oCpTdm6FHaKTFvfZEdFNrtnmFi5vSmF2iTbcWgkTS8T3VG4BTXtHwPaz59kn",
  "key48": "2GQDfF9AqYh6eH44rv755LmiECRLWP4i1RPZesUpPZGerun44d1FiG7pq1CnmQ3bV2BYuXfpwpA6n7uQR8GWHeZ1"
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
