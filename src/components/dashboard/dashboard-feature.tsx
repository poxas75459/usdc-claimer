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
    "4zW1YVAhfWvjhcmKm3FgANMcCHjquLgZjAcmGWZNMcvV1ZQv5pb45v6ezqGGUiL3Vm7T1cEwjBdwfqtxUVKYQxY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kusNq86ur4pgj5RxkLdPEA2iKMus4583bPkTuc7Xh4cQxUaWRC9WJeysgiR2JUV3FwfQSxY73GC1XhVQPmoyEDL",
  "key1": "4y8RdSr1nmn1NvxL5n6NQWfQbKK6soFbSXNEsyyZnCwpcnJdRTFS2J7PgQ1gPPAJ2Ra3so3ZZHuNHTEsGR52ULCX",
  "key2": "44U7Uyb9LDDwJiu38TCSwfWvEpdySH6ZBAK1uRqf8eETDNq4FBscpXyeayWBP9dNFXnQvF43HvpB1N1F7kk9qTRW",
  "key3": "65x7YxoGfYKbjxYrWGK6cCQcXRx4cVVQwQHRuhxFDiKHntdo2EjB69N1qbxtWvqHYjzAEd91LVnkeEyANCTGJJHu",
  "key4": "65NN8bVdp58GuJviSdoheNgCQThFgxfjrbJVCpnSDEHgTxDqHbBaEHXAYkWnK111Ee6ZgQLYRZwrEv7UVsMKdX6s",
  "key5": "751SZfYSxM82btUeKEVSQj2yHma9Xd8P1QbKoCfGX4fHxU7GQXmrTdjo4YRxGvegYDV4s1vJxA3nRUvgkosopu4",
  "key6": "3kQfF676ZUd7MnUrFqajbwb4118x4RJKa6UM9yyyyqRTCnZnHEnDpRUeTLEiowEZdjArQH5cTF9WqExR1f82tQua",
  "key7": "2zDnn2PRuktRQy58SWbLvSYAYbTmvXY1on7DQoYjuJcP7V4XUMgXysVqxYmr3agmhADtViYoASox22YosttHvpzX",
  "key8": "41iCLZP1n4MrhUNbCZojdfScUoe6a7so4BUH34UK4rrhdTcPSjP4qCv6dskAdySJunGoFA2bH3D28XwECjLK432g",
  "key9": "2r6vba1D8Nu1pr8EpWXskEaxZVCBwSjbG4KHXRbpMfZ9WpNCwSTJCH5XrGRmkdp36cfQ89tGGvX3ihDQMd55DNcd",
  "key10": "4kzEXKnPxtXRCvcDCRjr4kQyQZpF8yimLmUsb98LkNMx8HfZEUU1iztsWv2qKRm6Jsn8VCK8HWzRJSRFdTLojeYi",
  "key11": "bB3FFxAKdecNKpqY2aiKYvcGqjTDV9p51VNnqyP1AwwgQo7TzG9qrNeZ9PN8HukXGKLVGZo3Hkcn7vQPNT898Qz",
  "key12": "x9aATeLviGZKFN3bMRAH6gMEgTDsLxZR16C29zEgKzxfPfQ8twAgfEGsAqgXW6m2v92eQzv3aVSLR6Kv3VJ7vwz",
  "key13": "4Kq59wtmBRR1PQeR2qi8fZfe1s9QX8o5YZPUc5iVTXMKGpKSrzF5XZSTDJFwFCxctSM2qWnSAJRspgcPTGr9TksK",
  "key14": "5718wBp2BytBc344VAWutH6Ch8LHdV4t8f3A9b9Gg6LFUU9KoHqEEu8pCMa3HTVB51dAxh3mjFpWasXThYixD9FZ",
  "key15": "32raDP5iWuQB4Pd18MwCkrFpU1h71hgu5XevXbkNvqURDXqvVAmpzikoSe7PqUgfJ9SbwY89ctD5uuCSrWeX514t",
  "key16": "4pETUEbS6ZAsnuuJoWTRZXwPp8kdR25UEvQS8PfoQNdTzmzCveTjQnAqFXodZxUVgreM1ApuujbDVTByxRfnb9s2",
  "key17": "5Rj6WVXScUMvsGNEPNXbaunEm9ycWwut5CHgZRTZM3xx5W6e7evp2Bf5WCv7VgwXMTCM2J1Gbt4TVD3KncdCFcTr",
  "key18": "5oGvkBa6VEPGcCug2uh2feAcxEuQiJyvQY1m4SVK8jYqQPj7M5k9ZZN4hmW9ru4ExTQjtRyBdyNpVkaVtcFfcC5Z",
  "key19": "5c6g73cb5XiRbdvve5V6Qc8xY1v7vtrMqGjVzQbQcZAPGbksp7FkrtgXRWQYysbNza715uSsk5abxwPCAkhof9eD",
  "key20": "aWWK4nGCwjJyxZ9HzopoPwMyTmbtLEiibDk1C39L7y6EkkK7zAyRE7D63FikGfGABeECoKUKgY74TTbqMpB3Umt",
  "key21": "22RvTNwLR8VSHhV4KNv8C63CffD9atRpBsBMBm1wcpDVZPtUfQ7kYVY7DKAYt7oxzrw196jV2Z9NFFvbijWqCrcE",
  "key22": "fzoArm8NofiK1HYt8YXtGB15rLRkfncf3tQUXKuK318ZbVmjKh4F8Aprf9omztAmJMeFBmXif6KEvL744zEY8bv",
  "key23": "5PqYh7dsiQ74K62wwHvx5N2J98ibtzYCjcrSLjsUsEEFtWt2uDdRxk9W1MC9vuGZSGkfs7ZQjBfJXHpHUAkYa5zB",
  "key24": "4vXCCDU7SsQgJYW7BcLevBNZSAWAvvqLEUnno1kYwiejDuGKzRj3hPFvSUnPeh3DqUEDwpCz6ugzNhoFJAw9e96J",
  "key25": "3YrTB6GpnprjpS7hhbkYPKwihio9NdUFEJ2vjPY63i7CPK7Vcg81G8KjaZWYZzWDgzP6TLne8Di1T7JixSLDNb4P",
  "key26": "4DreMP1nqb7mFLnWpGgKD1vzzD5iuSF8jfYmAjoN26wiknhMDK85zNxhmtNFhv5ubGsJ7WaBk13FeH9Xgbeh7gRd",
  "key27": "2T7VwDzQ95bbGQ2kbAhgVoe5c3spzKy98SXx9fBCvKNtsQSZk93CtJVJMDZxthasCoMkuQWfUSh7FYUC8uj9JFSg",
  "key28": "5iM187EMGAD9wBrUJ18os6sQJ1WzaGXdwgPLLFZ9XDeacEDx47P2KwtojvHfVNEj6gC1CpfRGEQcytBev8mnfWGg",
  "key29": "4aNvNGwhkemF199vo1njhTRSepFEMamrpYJLohaARkagUH3pnh2HLYoaqnmfCCNj8HUSpYxd5noxALW3xWTT2ho6",
  "key30": "3SDuJ7YtgAyUjMmVMLCdW8rEZWQ5mCN7ZuVdMhe7BrD2MxEUuwv6QzUPnncNKNeTV3pRy9WQxqD5xmMAcTSWjBM2",
  "key31": "B6jSTkhb8Pb4oJEo8Juu2baH7oTLBAVzYJJVgK3cXUd3AQwWJbHPEY5wtUR1WEyCcZzQPCx7NSECLeJN3uBHfsi",
  "key32": "uKQyZ1C4Q9Q5eGDbc5WhZZfxTEt6oJq7yigp2Wwq9Fx4zXYaJrxvBapuAALFjQZLy7atae86noZEWRoNEEagVju",
  "key33": "541jjwS4hXck3AwdoUeSLLBJBqjbDTa4hSThb1gpVAkJFzpa2EeSpHHsxsTasAYopcxE87Jy3R4aFj29zNsF1Nev",
  "key34": "3E37rVS6ztzP25JcCwVwWDbh86A2jFfSrazdVftZEyPUyM76dmhMHMWZDCy9CwLZ6bxA2scaA9uRtzqkkpkYjMFf",
  "key35": "3mANitTdDGS3tdWyhi1usav49GgbtJ1h8ND1DugwBuVcN3FYCjUuD14NoHiMjgG8Bsq9gTrjCKQBpSsrUAumDGRZ",
  "key36": "2SmwjadjnZdsndnXoU2F4xcJPm9JtkWkNnnCJSd93A4beyqTxfVGRhh17Fc63hGt9oZBGWUPxV3AG7oYai8VwM51",
  "key37": "2kiPKQUbuuYRx4jjJUUaA4TQFzKn29xejg9bBVJeVkC6GStDRfxF2eZdwg5ZQDhi21vQPuKBPRFnFEqnSNf2fwP1",
  "key38": "5mkK9H3mxk9cd4RqK5Z4WSuRjXvWwjQuwyD38muqsRTn499LMA8qmmMjQjsRhBe51SeUL8z2mLpDLDAuBXS7GtV5",
  "key39": "3UadN8eog6szZyYEpdbvH3sUeZhaxT5nhgktpUX2jvnWAbFA5xYYgMQ376PsgrvvCNvLaDc8uX25pj74qgc2wqeL",
  "key40": "9aahTKyWS9oh3s43fveC7G7nPDkaygr3tBmzNJ6ksXS1if853aKao6n4z72TmUUCdQCggN6BjDvVZbMnQb7M7DJ",
  "key41": "2F6q4ZnUycBepqgUmrVWyMW356JW6vAhSD34CNkVDa5vCbG7uyUzeVh2RF52aMyA49rdr9Gs8giMwZbVfvCAgZKD",
  "key42": "3pubMS8xFiZGYE2s9WMUsmsMSViUFE1rxapkLuCcX54F2PJ7Xm7RjUeMvdEigCoVMCcvAawVFvz6jmQ2tRRjq8pH",
  "key43": "3YyqbjeVvTYcswjcBNeVGzN6cHrwE9fbjHJus1Jj2JqDXTYwNyV9rBa9H4UoGzRmp1F9AxP2UPTYuXFp3BmzvtaE",
  "key44": "5s3wtshRuixXx8nmi3LdEcHbTvVJVqDzUSGtX64z7UQeAsc5NFgCidJu96uwdjpj3182wq8FTXR7vKm61G79goxX",
  "key45": "2YU5fiJvFGEDkb6Bfwj2uWwemoAhzDwduqsJKwE73wie6fiMvS53WLXcy6wueZDFJBEQ1Q3p3eVYW9JuD6b9wTF8",
  "key46": "qGkxH87MznVWk3P9x5s2ja13zE8qRqb1ZvrfSHaEr6P4BaCjE9vgRYPN25ChYwsXEAx2aaQBptLj4NJMh5Eo5jt",
  "key47": "5tu9VQiVMLReLAmzqSV4vT5A7hNuQCqyyFvcVjVwFAgpsPHZFph4FKtzUpgotV8f72PwRpNB7PSDBFdDA3aPJEQK",
  "key48": "5RMsPWnSyUFKNP62zU6yVtw1dJN7wDbrHdEuhaJ1D9H14QsxMJos4uiZJodUxN48PCTwBgFUf832ZnpJh97JBStx",
  "key49": "b8X2NSgXAKibfJ8F3UG38Dk9KRdGYFPLnymKSrCfXo64tA8aP3fzAyGUHSmuTDbcU782Df5CEb4M6K2nET6WpEc"
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
