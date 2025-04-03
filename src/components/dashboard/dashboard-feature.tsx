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
    "5LFzzF6vjXjaKvzaQ6ehnFTfGiRNKKx8EJgSSr1Xupx5RGYq7MyVcGm7jYc4MFRfpfKUgbrUzZ8BNLWFtfnGz7aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbfhHE3gUc13YaM7K1CQQ56GPJ6feTULaWcLXu29FyrGN6TEX1TQpNKCPQsqb79DgjpJDveYBU5xFW6UDGH1jVP",
  "key1": "5cCbNwa9TMCnyp6dVMsRKz51fRNhSDjw4yTZ19bFXg4vKMnBgHdikvXURxQM9Bdpgponu5uCGSyJh1mwod1bFiY4",
  "key2": "5hg3FrPyJPz6pvFn22Eg2rB9GstdBeBHX8ESr9cPQwZm3bQCMRFfrY8vAJQFxS9JAqrSbuDbTfFvYAinMJQ4i5wR",
  "key3": "4qnnf8tmzoNWr78SeyBgxJY5DzEPggve8Cv8VYkjiH2HWYEv9waprK1kPUG4USLPz2bg7Y4RaEf3EYNYkmgMFqXJ",
  "key4": "3HfHvesu2TjwnJdYV1ZnFkuKARXiCwiYoT2vdWAjJzoZNDYJv7Lehyj7PWMejSumrjrvgWcCpMa3kqw8hjdEe8m5",
  "key5": "4uZy8HyCfc4RdG8jGfQHHfNQJ4FFaZxxK3x8974QkDS6obdXeahRBRSz7Bigt35yQPCnDn9LQ5BBtup9ciivjVjw",
  "key6": "5AC9QRDF5ZnbZiCa3gCn3EJ1zBT5PiaaEomiTVifgyd6wUBfBsW5JKdvVsdT5jTk4Ehw29a75WReiKM7rdZCMKZK",
  "key7": "2Dutx9tngSyg9qXadCshxMkjAbN2sxLvqw68m1ii8JZxDTrqYyskBMfSKUcaG9qsynX9tMb6aGutw2gBD5mfGGd5",
  "key8": "5wb7VAJHjyMABfNyLpfbv7TmPFHuKuEc7QSpkZP2U336eisYaWKHeRXbdf3UZ3xHQ7SXuLs1sAGcwAsy4LAz2GV8",
  "key9": "2um7PjoLDRbPvyGkGxtWYwQicpb44nTpL6KB2wow5pS3JzgYDUpJFBeJEbJP6cSDq2foFCF9YS5er7wZ6cwNVnEB",
  "key10": "5cFoM49HaBEegj2V2376S9k2B9DU9QsiEQQaijsaWsXH3sKAv5LX1Sr7ecEMZbR5TxBYJEYvPKXG82wm2q6sw7Qk",
  "key11": "2BCv5XmnsuZ75qvZ7LdDMk24M5QBpRR9jfrPmEs7M4JRzpFVBzjN1quKwThMrzvsqRtbGd8C3jihoqWmNBKFT9dQ",
  "key12": "56R7VbbCohfexF3dikXpHqTeLHq3vdesDeENBFYndt1UwUsnrKV31LrZEkAXHWGcKjrksP2CpFvuBnCjCMN1M6Au",
  "key13": "4tqebY7rLWTdFyKNiKczRodxV1JzfGBLezHuSfdX9s8CFam4w33VZ8rsNzxr6oAJjheoP9jhabnLVmpNw8Hngngm",
  "key14": "4GvCqKvKmJXhUHaJEaADdqzUNS8b9morBSKzaFgGNU7TK3vQjYh6SjLmCa3FTf8RSCTfrVtLNo9XkLkw1MzzCSpq",
  "key15": "4poLyNi4QWPr5qHwDTDVjA1GpC5b4kRoM7o1kieHtQe2ezecTCMJUhp9F9Za17NLAV9rd3T89vtQhSUJtvT6YpWE",
  "key16": "5SSJeVxMCmeuHTfSFkT5cMwRUCXsJFnn5RLb924XtHk6BCqNWDG8sseJWM68sUqDJ6bJL2bZTSryafvuVMbeuxug",
  "key17": "4EKkZWjVAYey54y4oJFKTnvTjt1RFH6M8VtaqsjpjxFF1DovvbPRoduowS3mrYSMV1oYgCfaUWWKfvqR3mQhL2Pi",
  "key18": "3rrmhRAdS86SF8wi5fi76mEfGH6Rr6LjmSGyUyfZB4JxXaZjMgJkggBzoLqUv9SSzQqnzJ9ketUn5sRUDmZyUTSr",
  "key19": "Dhs5f7nsE63i8XpKVGauJFQG5R9GxAMELZYHm8MJYCiD1y7rVDCTKQxpuTybvDVPwMFpw6FhjzZ4p63yzvSj4pG",
  "key20": "5Wu6PW8LhPEsqFBZzxkBySULwtfZHMbtCf14X5NRHxpAtPiZZyxgfXAUt5ARow8fUKPDDAfiHpG7AAf8mHvXMjte",
  "key21": "5q2D4Ao8edfDeBTFPymNUUzRCTNeszwZSzjKQgrQR3wpnMtnRVtkZT2bdsh9dbL3ARJsm2z8qjnmYyt7iLAqFQdM",
  "key22": "2x9ymxY5AXyBpe81yvtTNfkZ6dmhgfrKSWsofMTerr9xVsjDJhqSw4ASk1hFtuGYQtv7cfa4QpFh44gB84eDm47g",
  "key23": "kgT574uZHfdgdQzqrBBiUHnujMt1inusqP9hpSTW29VQBRCZJ3NQ9xAGPigVqgcozzY4KPuhc9W7PYKNkNbmSRH",
  "key24": "MgvD1FzMsmd3mcwgEeeqjTkewQPaDroB8AgvqkifayrZF2hjZiEeKbCZUKzCfXG4XUJZVJx2EkPNkHVgySNfFQV",
  "key25": "58QdHrmvugg9pF3gKRRGgUrd2yTCKNaKW7XXpVHifGjK6VXJKnUoXGJSx7BFZ1fW1KWQMJbkwsrSay4Cf4dGFf5W",
  "key26": "4yFV2qv5C5ybNUYv1qpZwrYQ7mPu55LJjiNF7gHzCPsbdNze1xZYZFLUWqEWepsmf2LkfUcfZ3LJrxMCYpdhDciZ",
  "key27": "42pDT6rx5WybtX6brm1zjeTo4LjWgVriMKEqm19cCPsJjVoe3CacUcxEPRrZNE5ZB9wXeoMVVzArQB885Kq8SiXL",
  "key28": "mdXByhjrqxe3bsyL48CBY1P8qxVHNXgkxBdHMyTowjuwcvy3Tkt8Frkkjb2phX1Sremouro3cJxGyEpnuLTH6aM",
  "key29": "4WkH2vnXBpB7pfLDznV9gdAd8ijMvrN5tC7QVDTEdL9wbF41U4LNpt6p4QsG3CSZqef4AmV9kF7H9xo2qYQLQSfo",
  "key30": "2gGbscnJyGRJPohC76yrm48MFNtv2ePqs2UdPrJUeTq5UViWTQrU5MQLRmEH4ZD9JTFQQCARB3a1EKc59euTcnut",
  "key31": "5tyhQQXtUaWi6skUXaHsdQVVgNi6xYmBtkwZhfNbXsZcTLdfgrR7CZjR6cPfF6oW9gLR3DuztzHMrf1cBg49Jk8X",
  "key32": "49SX5xeG5S5pnuGjCNonKxGzrFbrJCa2GvFNGe8rGpqxB2e3VjiAA2TSMrdiQXxhv2MrSnWrNDmDhcEjAmd4h5NU",
  "key33": "4hKodNS2VbVDjrSVeHumJLKPWCdeWhmzpjA3udS9hecMcR2EVwxkZZhNmXemyQVsJx9Tz1pmyrPQi2R4RWiL5ZDi",
  "key34": "mz7eAzoHDPPjeEQTfXQmyaTYwy3EbhTjWxPusbn9pLYuJaxR3x6W5qADrKcdi3BB9M2xE6pi9RbL1QNtdUu8xFr",
  "key35": "wh49CX51EpgGgxfCMPryejN8sC1Pc2BwLPbppAxGv57Re3qYNdFRBX4jbiHgVbjq1g4HjtN3LAfqjL4Y6Nwf9c6",
  "key36": "2sKDgux1Gie4kokK5RD16gPwGUeT5Cz1xFYhR7HqMrk1zmvCFPrZTnEckGe9Md9AdxjBJrfpbcxWezeH8orzNnpr",
  "key37": "4AMGjw22WTkgNv1tx8RsjLiTEija2uw6a2eGEZtcGLAVCa3pRtP8Gjzq5yKb7wwj9eU1MZgTxSYhwtKpHRMEq17V",
  "key38": "26KWxxTWcJ7cBboxxbuBiCx3apEmKqUJosJLtRkK7616duCsaSrn7EHvnrjT1FeLCExGWAid1R3W7uayXtkWBAhm",
  "key39": "5rCjYP74HkRtnD8Yohb4z3456j3Dybjs5P7C3nZ8grsNwg7Hh5DzULsVrhRuw1pCAiFybHpGZmjVzDnjXs81SSrn",
  "key40": "56SYgKYirmj7oGvhxk3hBLAJn7XsFkyzjc9Wf1JS9dHQbrWAWuqkiNkfiXHhXG9V48tY6kASTVW2SyD4PuaGoa5h",
  "key41": "5R9oXFQQE6gUWexzieF5U6Tkmmqdmqdr9SzYD7T2JZA1afHWuYHCwDhVPWj8ep2fb2CWDfizMynKAoVrPBvPd8iV",
  "key42": "2T2BwPSETqkQAfGZZgai651urzaG7jsoSNkcK7KcAojNDmgBmdCn9gawbY9bwUXJ1nV8VsDmUMwX3kKa3Vw4SJNJ"
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
