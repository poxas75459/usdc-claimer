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
    "3tk2yg1YH9tCzjqFHemWN9Nu2yw6BDMrRhz5Ldzfs9rBi1PMM2GXb78BYyZRSYfJHG4dWdYdwXuBs6gaBTjTdvfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633D2K4WEYUn4MaU1QEVuY8SefXeH6MSnfmZfk424JstYmoggVY7T6PKk9goML4qyPPABPa97ETnYufAZxZH4i1h",
  "key1": "bBmMvHAHDyHzAhwFDX3XE2NrTZRcfRr8tFCBWUyXrtbrNWjVNiuMntehh6rzTJU3wPwBtyagbYckWmn8jpGfBjv",
  "key2": "6kGPo6Qxbod9wTYU7MUHTCecrVqob4cze6wLQhwBjcYYaArLTMFrT6xaTewJJdewXFk2SZEXqCVZTZSqByaCnzq",
  "key3": "2CUxBN1AcahGUkkdDoz4xpcaXW7CiemvMm1TyfS5YFPB1QhsfENqKWukK8MDCGNQnd4hNV7cBNRrD3v93M2fk6fr",
  "key4": "61xd887ZcSGZT4F12677et8H99vdCM8fcccuHrc7NJprJTW7AAQPsprGeonm56YETBs78fDtW2y3RoofTrqextp4",
  "key5": "2fbAvYQYrKUgbhvttW2iQG8xx3ohfbPkgeJenrM5pSy3Yzi6oTRJCacKjsXU8hg68Jux82GctuSX2EfivWFupbWy",
  "key6": "3TEBvixUqLMCi2mFiz4DxvK9Bnp2oJEiTMxVqNvxj4hr9JBzLCHBp6tksbMPVruzWnBkUcfX4AgKhtTpoUYHWdCH",
  "key7": "244r7HxLQbaMVZRLav8rvQbKDx9FQ53GHTM4H7bSZd4dTCziVKnN6cY42UYDrLJdwp7bYLXMSuStmj7u1znfCJjD",
  "key8": "5Dwn845cHmT5Hf6wGdgeNuMK9mJTH3dsmTPKHeoXJQXt5uQyoooEZ1vmxD6Uz4sgG4gABwpnBjr3jYsEpLy5Fpd6",
  "key9": "34dG2uibDc21EfSAiSUrvDcAkJUoP1o7vewJNskvWzmdGBmCSUVTHaiMvMQde8W8zp3P3DeECfk5wjttQguVm1Mo",
  "key10": "K5B9VTnz3iH8ChnE93pjX8KTSvYTtTteA8gxeyTEh4RCTL8C1EGrBnhWJPkEQ1YkLkNPUSoWbQXJwtr1fBj18no",
  "key11": "2jKtHLc6wTgbMtCs66Wz3iWxRXjcGy21r6AmhFTrmYifTi6VYSzz54PmjiCpLxeeb6S2xJxLD1v3VGdw6tqg8dSk",
  "key12": "3Y4ZUUWu6RykLW7iXRDv5jZfDjeXNvy3rLW6HWtAeozboMWmPruEu8SAbjHbwQKDFYoFNupR7bsGXB7QURgfkA8E",
  "key13": "3oNZUzp2jGafxnomrAfFesqAnUhioT6YLd1hA8c4QZajG3trAubfdVKo35jHKssA1zVzRYwFRpFGQ3ZbVawrAYfm",
  "key14": "2kPkPANzmBWBoqhTrtg1QeReRVaH1CgPqrSyUJYD5aH5yFhMDcYH88juLEBbfkwmtS2HfBXjjc8V9FUbF56cHiba",
  "key15": "63apPcjMjaY1y8SPcibtXC9LSUMviD8Pz6FzGdkkMgNSjuruURznmraZtyEKpFQ8hHn4QATmAvGA39GdhSaXpv6Y",
  "key16": "2qFQKN5DxLsMzZtjhF7iWEonS5wZ8LzRqT1iN19v8Gd3VJcaybo4p3qBtjfpL1xwuLWaaxFgr9DfrPtSWSoqVBYe",
  "key17": "2i7GsZTN32bs1LZvzYbM5qCPJ8eZBE3zLuUJcxAKoMX5y1ikQXt6ySobXEPhtZCDx284xjaokaKGcG6KByELkrB2",
  "key18": "4xZ4G5sD3waki4UNAeEDCmX3ipuFpi3KnrkAWzShQ6oarLrXDVVj91yYsiKRBdmrd2HUGo7fw6BLqwFMAqp7eWrR",
  "key19": "3xY6fo4vJqB7T6UychQNZgzSL4yiP4uzHQbvLfFFFWCeX3VM8qfBH6K2uEhrgKE3o1VfWJiAJpmYzrhnfAuAs9Kc",
  "key20": "XndceX8Dn67D6XKpddRVnY9kYxqrjFzq1hiF3C7kHykEyz96R8TDosj6Zq6MV1BviCGFaaBvmvv8NQX4DvFKen5",
  "key21": "mRhwTCdko1J7tcd2CP621ks8b8n5YxYfsgNbD4sg5GLSbRCz5jZZF575VZ2Q2LZmysnfLhVhwJGYscb3nuDHckm",
  "key22": "3qUN3MceTCspgUtxA3CGeKxnTpMq5wBi6X1CfLv5zU2ykuoFoV8AVPiAcx9m6aBMJy4hhwiTJ1YHFHMckiQ7XG4E",
  "key23": "1133L8qHaEnpkBwXiuxpvb2Jz1TngnwvxPVyNiSA5R1mF6ZdVA5hXzyGMfnGgYnL9KQPWFkaD6wNSksa56fR8mn",
  "key24": "4p6LhNy4mYPtwMqvJB34pdZEgfzH5WzbQTsWaeg3yGmWeGrVNxQaXPobDhkt28umNmgACo4fXKhVRe8xknXJv7f9",
  "key25": "3A4YNK54xsvEFjeHCcHnBre49T8fDM3AEHah7Wa6s5grYrHKod1h4gL1TGAeDzQUNEEAgDp1YAGPWgnqK4wsaUE6",
  "key26": "56Zp9GkTPVZhdCYcNNzN8bQUxMW33Lp5nbCqXSi7A9bA4YtQKjwkhotdQCyFPSK6YPkBT8stNBhFLgBFp1gy9tyQ",
  "key27": "LJVDTt7wGdcAthP8XkD81exWjC5oLQU7mjS9DLPLqDfF6v9YaugKEufye5sjJLjGxg9AyuFXm2Pqo7ZoBKY2Yp5",
  "key28": "2WUryKxgDiVaVqnqpLBruhqamXRzUcEfRGd7Dny5tnUQkAYqDRkxVLK4inhxMG1JNk8zu3Ppj6nCFSizhgsGL3PT",
  "key29": "4jp2nupSKVjJGpw7j1sSRBGijVmmupEXkci1mBxtX1y13oNadZkXSx7rQ4g856WfocroXtAWb8i8Ztzahn2fT7SF",
  "key30": "2fUxH8fiDVQEsbymqN5UhACz8xrW5Jwq9PfFbSTsSgLes8t1TrJLnJZuviCAHNzVN1rRrJC7ieiw3QtuyU63N9we",
  "key31": "5DxMqG18nLCJTMS4WAAxUUoxWE2g8C5JsAE5QkLhDSpwFYaH4HRDkCsaKLfi5CGgxQu6YFgehG1w2fZ3m2bCVuUy",
  "key32": "2FeZnk4B6yUrBw5nfa3PYvCmfRjjkHbMsTyHE2FZoDjRnUZBCWLHNfbAwMn3d7R57tUztBFvo7j6jUnUT2FzD4Tb",
  "key33": "S6d6nKVPSYHDBfdLkF28wkEQswejJdgSkNPWGAuKwUFBqc8Btf5XCdqfZRaAgxReTW5Pk6zcmvJiR9qrr7Mqj6Q",
  "key34": "4MVAEbtgkYx6rPu5pwxVQRjPvjKvPq3wQjH5Li6MAnNqoXEh9FB5VtLEVAuxqtTMaKLWeuGQEPYq74Fa5uRJk19K",
  "key35": "5DbqDo4xm22QWZaZ4kgiTY4ARyywHM5husfaAJsq6L6cFG5r4ab4BfeGZ5CWNmvuvjFYwLzgtUTTtHMSA7soFzkv",
  "key36": "29NogEgMrK8efGrKP27CbZczKA8TK48xG7a1dmBR6e47n5i5J68X1yNDq9Ph986DKb3YU7vqB1GfrWj1pSUTd8JT",
  "key37": "2SPMnsyx1We8VFtT6kHZv7t9N9tSf5bW4wHqx8cVAzpPdtZbWjR3zNQhmZrE7kSBoB5qytfQFFNBQib3XrzCVWqH",
  "key38": "UXLqo2Cj9oSXUtfYngLLG7Yr1eA4j4Zfa52AcR4tD2YwzxeosbhC3Gn19gVu6sjsz7PNkom326ULX6PV3rNmcrw",
  "key39": "2TWKwYqyiDF86wjdZzoreQ4VZoDKVTpwbYYAeGeXZBE2PbNh7kqrM5CPtBJTndc8gqmd39fqW2d35wWGExsJTyU4",
  "key40": "2884mD252BWXEcLTzE3BKRcZJnS8h6aNrvGmeY8tV2UpgxUhao2TjSYh8qYcFjt8HGvy8P8BYrf5ZW5RmuPdVjWE",
  "key41": "4i5pNsPXCuhxDXvHcoq8qRiAPBdzg6vwTUveqX1HziG8Z7sGRfXWTAJz1ZXwAfsXK5uuBkfDcjTg96RaPWBfYQZL",
  "key42": "2dk5Bmn8E3Dvp76kcA4aERUCMNrUEuZNvHHr4LzKfGssGiDjU3FWX9LvpbMBqRkxhhLU936AcDgkvhVZAuNPqBP6",
  "key43": "uWpLMim1EwVS1ZV6w3cTjFjzt61nunX7LpyG3Z4ph7cpRuXs4ag7tY56j5mNMchVkmUTcchehgEnv5tPrX4r4of",
  "key44": "4YLkkR6NdgGYbMFf7Ya6TXk2YSQXgzAxAwWZUF5h6MJ7p3F3T7nUP9cc5eK8sBBVRguYcfdEVb2yx6oTWCBQj2TZ",
  "key45": "2gNo1KrZKaDtNNCkM6HzifVzDNo2vWzSHJCAu6SWv7QvFPNPmmGXF82erWeRzKKUxWWgvj5nBQVNykf4EpGf2FCG",
  "key46": "5rFp8BBfyu9kbzow7H6QhyooD4DiYSJkiL8uyydLU1nCUEpH1tCW1Z65Yqm7rDLSCr3NMyzUP72SugQJ3EfLE7ZX",
  "key47": "5gj1GvmvW1QVEBNaNGxi4QshEmoLeYMfGd9kTf7LJiphQQ9viFPuriBanLyJQhXq2sYxn1megRmRgd9CBbRnQfqo"
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
