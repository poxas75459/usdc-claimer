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
    "26446FAhTTs3NDWumsu679ZpnSTxe1D4VC88Ru1DeDuSWwwheDddX3fpDnAEaV6N1ZHougF1j42Mf8bQb7f5jrg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zUzuXwN27Di8Pa81miN7x8HxXaBPdfYcUFG6pnEiFDo94eEK4N6CXJBdjq1vtURtQnjvNNaznFPNVRfafPbsj2w",
  "key1": "4pTA8PFkejN1tdpwyzupgXorx5MvhvqqGoXsrTU3DzA7Y3FZrSduBJzGArEVfjjy8u9D8TCi3JZYzwfbcnABzQq",
  "key2": "2DFkwj55oi167UqKVBQgXfx81xAKZzmudX1ZijqjZvqFvTHrNtHKCjT36av6shM3X5Q4iKv2EjmByGDCP6tE9kgj",
  "key3": "2jNtsxHgxBuUeWM3ZrrEp6yD4WHQnQhoy2qbkwngsxzGMuPK3qM1jNNf2Pr4Ajgq6tLSkMeWU37ePPhhcYcV9gza",
  "key4": "4316VjHoJmPM4KAaMjGHv4BduNwJamV716Dh7824HCWvBhqRFngr7gvjS4SJrDvkd6q92NPMRCjQrPf1eL42aUEk",
  "key5": "5rpDoRSpHWzL3sFwiT2kp4xpdWsDYZ5zUHWbGMeBRM5dpMpS9ETNwM2bts1oh9hB7ZD2MT6SNjwbxUEL2qmwmQBe",
  "key6": "2ULEZgeS4JFjrN9meRVcoUbPMWh1fZNWZ5oPB8S8H1mjb23g9n8S8Q9QYUPb8KDivrCnSAtqSgQutcDy7HYWG7yz",
  "key7": "sdWfTmGgUDhPmxCip8u16hx1YSYkE5aMfD9NE7cKCQ4MDzHGj7gWXfQmPrSf19a33eduWvNE8GhTKnF8ti7ZJmr",
  "key8": "4GkHoT4bHVxWpH9tgaNqm25wNSaKf94kR2DadAG9HuX28712q1Ze9LRH3rHoqWCTDGTwfWNp3QMaT8ekLcU54Xkh",
  "key9": "3pxFfu8pLn1ASczvgJPyM2ZPF4addvafJN65PpCDq3UfR6qihZBvupGGQKenKn53orPDArBCfyJiBmHggyy7WME6",
  "key10": "2KVXUrJw5hbhauy4noBdjwDogBvL8zaS2FF1Uq6hbnj6Eqca7oVgC8NHyCyJS9oty3UmREsDtNvWVhPZCL3AHGAX",
  "key11": "3JMLDE9kBqACHimTqfUME9YLvhQ99pXSnf8kvVBw2AHoFsTEkuzoYot8Ezd8qfL4vEMQuPpAcNj3cAHMUpAmC2cB",
  "key12": "3EzArVyF2XbC5QDeVAQM8dEwW1kFcmMFSzamjShs5T5evFKRcCSKeW4RoiE4zVdpqmEH8hj65zDg1AwtCpyNPq5Q",
  "key13": "5YYsMv9GJ2fBchDfhusc9RQW3azLuhEzphrc921yWSkQh44a23w5KpZVG3q7geq3vNnPrtDw8WpAgNyTiF6Kjhd",
  "key14": "635suFRUQionHMLojfRxuRsFXJ5nNhZ5L4papnWGc7gMj3h46CmgnjEwMNS1ip3TJRDqovuaJKfYgbMweuui7pMN",
  "key15": "2z7RAq2hnrYourH8az2szriWLe59rvJDb9aBEHEPHWaUseLVHrexcnYsZr3kMuEXkzE4hmiQ7Pp7oUr92QrE58Rf",
  "key16": "2wkmkoB1c9jaW7vajy5vsmuQEyk9LtU1XcjG7agtrQBGWJvqgFStxqm3Z4Cf1WiEq5wWg1v5MUYxcsugfEGvS6ub",
  "key17": "4u6LMMWCsBQ5BrymanjUAN5HcTb7jqZpyopX8WtgUrqtjkwb5w8sEytij4Zog62YVy8a482itCFjfmc96Y3JWreG",
  "key18": "2pqCQtrKFBpx2T3ZFY9mRxkFsi4btgccUvS2Sx73W68K8t6DV155XcZqLmLaNbzdsJM9Eaan3ePiahU5LUeq9pjD",
  "key19": "fErv4J62EQgMa2MvcBTHfozg1YW8tXBR9m2VjUQYve4bBs3zBVsXXXf8gzAdiyyqDfCfWvCFjq5cWHrPATtRQBw",
  "key20": "3KZHatak6npVrkuwzL7qZ9PfVfHMtS5LWTzfLjfE47w9L68wArihUsaupqcLSeBkjb3v6HBwBP8VMCREsXnRt9tB",
  "key21": "3JoYeRiSCEEhjNhd1pfbXcM3soe72wVQNzZ7zqmKQYzmD7tXsQ36fuSD661W57bvsRGsYqAAxETsW1KLkhYB7Qvh",
  "key22": "5reM2mckUC3zwg5eaZfXVu7y2mczgTnsTcCProcUGeuM9mmYCDZ8273Uizg9gnJrwr3RebheUK7SCooozhuZzLBc",
  "key23": "5VdVwVqakox9jdJ9ZZhV35igVHL4fsuk3S6cpCQkHyZRGQeLuFxiqqyRhk8QfTYEkXozdxHRrbnCaC3tRYuviRwd",
  "key24": "4vpkbNgEDQ56R1fjt88HgyeVnUpzf3iUNR7TVYjVHNMvTskKjLcaws1JPJJqsm13UTMnVBasdPUVCtYGukgGd2K2",
  "key25": "R2xhHFhw5q3ZwuSW7MQj98ofZywCMAUM66e6dx3ZSvPnSyfSrnpWH3AUNZJMv4V2HfCjYjU8TBERFmKMSwsN11m",
  "key26": "5C7yqziRys3sF8V4mk9aBAWnxxcDXnLw938JYD2HRZ6L9K9dBjLx758XiY8zuoJbYbdh2NwVB1p1YYkU5AF37DHo",
  "key27": "55vWHz9tqFNc4jgtetzsCgfk3Tv5Td23rUW3oNnAkSW1M8RZY7zvWDETRbMbVznW1AwBpNc55a5vC5Mh3DPHZ4FS",
  "key28": "2uUiy846xW5AUazaSxPC9UVqiF6CbX35tLsW84Z5k1jnbpnacXT9DyddKpEKct6qGYJdeCVeiDNmYU8CmLu5gPNG",
  "key29": "3n8sMRbauYZ1njBMrt9XHX9M51NLvBJEsrLU1je5ErZCxSr2TXi43uUT82eYaXfZfTMiwWkGqZxtKuSMt71cZEA9",
  "key30": "4fGaEcWczEW2U6LvJMsNkUWwuZXNDp9viVQvZCQDj4by3MZwpZ5YbT8B3oBCRbADbbFVUjZsEGCXa1kh92zYMrpw",
  "key31": "3SbvMXYnMM5tFYrHrxmAyWaKi859ZCH9zJvctvhY9HgEUwHRu5Lte1XAFxNWjMkoEaBj4GyMpMFwAs6K7kvDedQ6",
  "key32": "5ct3HPqggVgQNtoMa8kpQG5DiXpLf9vhP6piapAR5cSaKzzh4G4dJ2FUd8B5mN7uimUAn1SpUn3Z1vSadHDq34Km",
  "key33": "4xsvKLdP8ejT5z8Xz7wRwqigVfwVYWq8jd6TLvmtQan6VbcLm68SufQf1uink6Mf8gT1qwHxAU2wi1B7hscYKrAQ",
  "key34": "47UDgfPAchC7RfFUym9aAmt77H44WAgw5mUB2gQ1T6kemumgnJrMSZ2TPJKHKevcRV5Xgs9pFQNAFxNtYk8q2KL",
  "key35": "2nhni6QAWLDWotRZ7qTM2FSCg2yxBL8AWaBt8xUcpa4jmUtU6WgSqcubLwgmUuyj83fZZDn7pdBBkTSCzJAH4RRB",
  "key36": "3DW4C6BMqYTZs3A5288pS2Xz6q7kfi3r28XvYpbWi2VeF3M4hG8siynsePAF7PDvQDoucrJC648Bi4Pwj5Q468XB",
  "key37": "4y6H9McN26RNirufSVT9ctqduyYEmyu7MadzhLWc2Xyc5xXDboH3GV5cKwQ9sn34158dTi95aUrc4F4nGA7S8nYD",
  "key38": "5xRV78jTJRtNKa1mGEQKbD2bBFikdHPiMr3EqWirWbaM5WP5eyYXEDKLg1yUJRPt2ia255H5hrv8nicP7K499w7N",
  "key39": "4CdCGMqj3d3Pk6vVBqTmXe7XcSsqM2ydizb2B8genyxuvKLGrGcYvdgbomvUMPLZCy8G2adVzLVSNw5a2qAiV11Q",
  "key40": "2Gk57wiR8tKVubWY5KkUoKFsqAnNDfbWU27GyqHowqHAgMhwmbc8ARThEvhz7KY2Kt4NfZjqoovQq1EBXqCTQU54",
  "key41": "5m9W3r3aRP8brLe9jfYcFzwwDjoy4oDTZj2w9S3KEXBwTLZ4xNsuFfC5DmjvE5Hor5pcL8beL8F1yCAZvr3yvbRs",
  "key42": "3dHXr2pZVbekYpCx97xt3fCyrCuSxQMjMj9eUMraCXdPW5kxZ2odoRu6Bi8H2LUMmMYDp5Pe18wxTfXRSh9tMXx8",
  "key43": "64fa3oTrByUSLWWsLa1EZ4DTL5H7g5mGaRhy8YWLTdwdkqgvcBDXUJZQ6seoq9oJ2uAqKFJWz9aGfeK9YfV31nBH",
  "key44": "3Dyj4PVVvMTRRL5Joh8h5wkbCSC3VLeSs2HcWDw6RFJnueT3juZe1mmjRVRge4EVTaSF89hTet8ivu62KM4teEuw",
  "key45": "2nyovP5vNohqCQX1au9gwhsEP5CUVCZwD6sJbjjeNhXcANKBj495bCBinGefsN84qYNNV49hY3DMu5FhT6MGHdu7",
  "key46": "7VSveah2P9NAfFU4GHd6h4gjqqHRDvoFXt6GH42imW1zjXRMtj3EZTcCbHVesdDLQvFZfd1KgPmj9brRycUqBZW",
  "key47": "5zACYkZ6A4bMfXGJRfuhyrgGWDHtzu3BBSNEvDQdRqJQpZpYZ879wPox1f1qMtEeUDMimYBa3EpT24QSQxeCj8Px",
  "key48": "22obSX4KE3K4kB5hSdZETuG6K8jPTXLQxoYzBiJgpgWYPztgMxBgiMSqrWXyuZpGo8j5fBARAFBDGGkRYozaHAsS",
  "key49": "2o7fomYsZXxZzhuRhx9Ej6wahU4BGtYhS9UKv9FvEQVfjBDdsq4G6vFKUsvMuGBhVeozaUdF26EQmgx5ZKZgtFRg"
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
