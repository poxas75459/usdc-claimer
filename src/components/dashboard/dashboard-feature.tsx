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
    "VL15gi73oAH6HwKM4dyym8MrWZ9wf9wasgFzkPJj5FJh6Vv1i2wTejzAWpmDHGeAJoMVYAFmq4veNMtao9RvN5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mf4ZQevBybYUnTXbNy1ocNx74qMVPMU8DUmVanY8CV3EbMzQZYLdrSLfaGiFarciam15AzihLvzJb5p424rAu36",
  "key1": "hDXZ3fXugiycwoQFUQNcvx389CmzkkCx3iQx28B5wnHimUmUKGtBL6pgwwkpVoYxRvywXD2Pp5sE7NZKPtbExPS",
  "key2": "3BeE4VhU2VnaR7VsqiU4UudpWbd5eV8NetxaPGCzZiJXXzQ5juzpj5gGJ6cN5p4Bkk32U3hep62KCP8f4EtQu1vv",
  "key3": "3jfxaLPz4ZLEefDvssHVbkttWK1v27JS1b6su8tXbW7JvVHhK9fh9VLNrA4GRALEWvhU762dKqseS6KWk4cSmByz",
  "key4": "5BtJf2bMc1TMfZX9rqc77KSfjRfpJBitefWPqLRr6N3LBjX4DPyzAUs61EwoKn74pHPTTuatKw8r1UKdUuxVTakC",
  "key5": "2Kae23pvjf4wxHWnPGKprcSRXDE7PJ2snfm3gUtRZSJnLkPsieRyd1M6Hnu2ge51KkTxgR1KSLrkjJQBLzJqPTJJ",
  "key6": "66gf2WVSPrmtAofAY1JZbzFsXikfUQNJY3jsQXadaC1q3bP2xvma5F4DcuxA6iFKs4N7TzyFU7qKbeNmtayt2M3w",
  "key7": "45ntxFpA6ZA766VK8m6wi81mywZnzdubB5meLFXZVHVu5eGtQzjrDLParUHg8eDvZHJHeadR73iTcbyYYHnXjFin",
  "key8": "57y7c7pZjA39PzpNtaoF4QK4vcPJnB48yHhc5xmqCSxoWkvetPhYHikjqnpRYPf3pyTqFr4qnDZZyAyxYUiZc481",
  "key9": "6faKgHGNejFBzUREk5iTFJoA756gQyLmGVUMtGP23A3RnjwsQxvjsqTognwLj8D9VPtU9TNo4Xx6Xd21v3gpFKT",
  "key10": "2Cj8ybjpNvHwxU8587URTZz1GGinFkhq22vTadw1HKVgjpGwD8a8HidsQcHrNrkd4fhHB28kBsKbf1gp4LmRXcLi",
  "key11": "G5FDZ4sb6c4Y7cPmN45pMdxSMxrwJELq6rAZKdvG4WEwzTz6SNyBjRaCYRVuz71VZpCpPHQ7Xry6FxbQZzDamoC",
  "key12": "2WEYPxFsa59j7PnMioJWCVXfsHizTthUk1mnXxsadP2AkRhhnp8jTWpj7P4TT11FxXMhCFzxtetL3jxRjDoqpeby",
  "key13": "3dSTRHyUYpxs319ikCLPj2ifpsSom2gZr1knrHxswaNVnA5Mc5FHdS6gu7mSAW7bE7r54E9suxmb5vMWDbscxX8b",
  "key14": "5fEb95hMUh536sW6V39n4EFKe9XD6xkwBG5BSBR1jfMR5yYFwenAGdk4myeXciGs9ykD9aJnBQjuhZuTonLt3wTc",
  "key15": "tC5BHToCX3CPYgvGcKxwAkVE7YqHnBAqKoqQgNzs5K4ASs9MHdfGbn2ajmxiCSZgN2FEhx4zL3YMdABG4F9wUtK",
  "key16": "4A1izNWKpJjeJ7kirDC7kdfdhgPLTwirNj8oXqg21Fjep3w4mQiHDMksx4zsTLR6u5jVNzGfCaxvqv44Wgyx4G7M",
  "key17": "49vkKU92xAxF8MafiMcHwb3fXXS7x9EHKbEY1FbnT18VZ34umbpSeJyCisFVkTBasdnpAdZPUAYuqij7WZ3YtuVr",
  "key18": "2ratjcDcKo9hsq12X1rMy2AhJCkUxXxbN6yz49npfUoywWejk46krn4eTEmpZeTckkTnsdyv5KhujQP29TtTGQX9",
  "key19": "3z4JrzWvHaqtgmEsMHGMTo3aC9Up77UVsbqVKV8Lvd2SVV4jfun9hBZabHwGQefAdM4Gv7DLKryjAC1mdvtPeXKA",
  "key20": "3Py7SNb3ojXiNPWZnippmtQYqE4JYKodFzMrYZvipPTgRZBvYGMZpy4AL4jBUpCVxYxSfw2CUnncQQS36FCwsUVG",
  "key21": "2EizwdCEAxogk4z1fMgbhvmpzUUft6fBXU2YA5B96XJoDp5J3zwefDVY8WvhPxG8ZMMtRK96r7eTmD9kgf9KsR9v",
  "key22": "uyq4idsxUuNtTn6gwYrFYWBV4qvJcYNNppB97tnPRXX4j2HHHAJLNm7YX41XznUt44g548V6H4c7c22Avk2pywu",
  "key23": "27UW4mqX8ESoa6T4DpBbtasrVLztjFo4RE5jeujjGaSNF6shUd64EzNhweFzWohsFnFmpNkpQFmtpEvspc9zruuA",
  "key24": "zeWsEqxyN191xkNKqLwVjofYKyutGLc2NwYrjmyYtbYwhgfKoMEnwjCbzDfu1FHLivEt5Egfo7apfyKb2QkP9ir",
  "key25": "2ozUUknag7SrvbLiWFmqNqyLbNZAFQTSSMdQDNTTQRBKZE5mo7VL23SQGAR3kRcazf9BiEEQ7oZ8ZbZSCRDYqvCy",
  "key26": "3aPecm9wMh5mZ8w6rktT5Qzb95BH9eNJ3pGwKiUKEdjqzJnVBkY3RpL9D7AaBYxVXc9JZh8zH3VqnDyGwU6egooj",
  "key27": "i8mHDuTkQhF7MJJUD3JntCSEozMTtRUjp9CVYhEEPiM24jf442o5jwyapvGUUpmzQ6rcHmtBegbymsrCq96Bihc",
  "key28": "54ZouDaqH8voxxcSNC8f5N7a8ikWoYsRGAtagop96kWZZkN5K8L6Q8b6fvWbcPxEhtfHfjDJ5jTKgNYy2SmK8fLL",
  "key29": "5eMhgKnSJ7q7p1CDmQnh8qcjnB9vYgxPhbbgsGLjaDdkFf2dhoUqH3D37x9qBCu5MABZdGZR8mXNtb6sHFR6b8Ky",
  "key30": "5wgHtFppNDnC7TUTuU3PPTcfkBcaUhM4c5tH6H5eSNTMLkFGSgBV2rJqqpfHKyfzJRUrVes1hLhCj3f17RvkXX8o",
  "key31": "4n7wNTQPcXJkwnLn69puAPEnGjikM258QdSU8UjnHY8VH29Lm5BUY7VTfqb7MgNH78jidnrrgohtWhzNNv3mYd5k",
  "key32": "2jqZAZsBFZnRf9Y9XYmgoLVEsPnvf8hVCJCY34fb8mXNVoknatCvW6GekZ64vvQBAat4GR46apKQGDkiRsCGHfm3",
  "key33": "9hz24uq6npJgDDEogCwAH9sz5bheegjF6B9h3P2LYH872rXW7TSrZN1ZrqNeT59XVGUQCUdLk5ABWygf3F8SxuE",
  "key34": "3tH69s5DkKS8deLYpLL8CJPw8YNhnX1XvUAMUqCVGCNMaAMAgMQTB34YWWnvS1A2pGcecsPJuNxHKyjYyCM5Cmcn",
  "key35": "2y4BjKCGfZNxdBRG5z3pJgsmnYRUMv48DsBDnBoyDS46VNmM2xJ6c42v6fiUt4FxqiAz66o1skJfks72CEV3BTNf",
  "key36": "MDGNhXQ4xKy5gGdnGfMzVWVRXC9oX3GqtMGHYNmKBLKQQtf1VKR22PKqbnrfb7j5UtAtvAKed3x4ETopNYHNc46",
  "key37": "3gnvRWdCAmWabHbadkVuJzvDV5C5AhWx6g7dMBREt88VAdo7in5JqeCc4UXYPE5RJTbmzEWPD8aQVEhRGkp2VDTd",
  "key38": "3RvXbTRDjLkDr9qEbEYj128XkpJn6LrjufwHrSLDfm3wsA3SCjx8gXJcRJLEb8rxgMyU3xo6DGuzbbRZj7vhqyZh",
  "key39": "4u1zXha7GomBvnrcUcdc5iZysrjVJZ9zGsqb4kwWLHr4jFYbCEehcDjSDPz9yr8HDaxyGvvmtp3pZ7wc66GZWkw7",
  "key40": "2RJexKvm1tZtQnt9qBiTTA9ZH1NvYKnCjzz5AMWs6euJeEErVwGUeznUTTD6tZf6m9qrfYoebCABL16dzeoJyXrE",
  "key41": "2tsB7VoZQW2v7LRUiKDxA4WB84KKtcVrP9wgVSXuE6qWmRcGNh6g57qFgdJx8rtJjxqTRUqkBdke6LpdtgS6HyWD",
  "key42": "4m1uMgY3LJsFCvzR1Q32dDJ9vr6wVk9BTbQtpfk1dbhoh2yBfrQwSpvA42tECdQxzMRCA2futVGvKy1McUQJuLfW",
  "key43": "4Uuy9KmVjEWT2ryQTeMisbEVoAsGAmS7a2T2rKmCxNDs7FWVrJKXcm4KDth9bZrRjuWrihgDvSjhTcCPfnboq53Q",
  "key44": "3D92a7WqZksdui6m1rp9vBhN2vXSXTFxx8NKiFdjFsSt9pvqBNHGM6Rfi9M3p6MUppJrcHga75YSSo3ndhQamvBm",
  "key45": "3T6taScEzQLwGeEhHYwBNvTYus3LJZhdDCzWUuGcvfuvSUQX9bGbGPFD3TewdCEoCM61h7FyWeQn1vaGecH3gX12",
  "key46": "4oKPQ2gkSqFmfL7jc4y7JyBU4XFLy9NDEu74M2wdoQvqUpSc8MjdZahmDrPDidi7aqP5CxgBTWheDdSZAitfMDD7",
  "key47": "3pxPvDLDkSxHza3PWqvjqSJ4dFVdFYMVcvxW5x9PSMQ4JadjbHigJxX4p1VQosf2yEMob9SyXhyaEw8WdstP6kwT",
  "key48": "3KYjNfLbYzRbWdCyqHry9MmV7dbdhpLz33pbai8XgsW49MCUBvTosuRhiyC6WkLHJmcaiHqDQQxvhuUjEMUeDYyN"
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
