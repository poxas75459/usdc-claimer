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
    "kaLxnPHCyb5gtuVxBzNTkwkywFXzbB1ezgvEEGPqeGFfUu7c2Q1uVyG4QTmG8o9XNitPE9pNah4dtvUEeFfzwTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TUHwnoVc61MqSYbofNHH6KpEdCDFAF5GYebkrJomQZakzBDUSiwsaDDYgzZK1HCdQ9WzmqmRD5U4r9cMSCaJot",
  "key1": "4G1UNnpivQihBhqVjKSCiMPxByxHtqpY4So2YNjhEMwiWJJx3vnjKgS8adVuGoddhmDmjL551Tdg2VtHqVV8pxrU",
  "key2": "2WVtBu7bmyR73BFPqFFjd3LjmcoGiajXh2E3dgTkNDFff26gyVUZJg148qRiU81FPJCmyrGXCFjctR5uGd2MHBsE",
  "key3": "5cCgMLRDTrxw3D6Qz6VuJP7iWi2e3FTkr1F2M9Z97JbEytTtjf2cEyc52zM6SuRkia9vx1VuDMrQob776zGzXhMQ",
  "key4": "49pWc4uiqHotWE9ybrLw8AzxEToADfHHXhCHKwQaxSAbCLx9EZuxL3zTDxXujSKe6VucrG4QUybaH7bEyLDrC34X",
  "key5": "5DQKaLUScM2TjygiNJec2smhAg9Q6BTjZnEeNDsY65MuFtMv7Vmb67bX9JQj54ptdD3bHaELnhCAZVdNjrnPXegv",
  "key6": "4mu66cGb1bzhzVAqWnpyKTdCSP5C29NxJDUGkmPKBwSce5QfMbYu5LgNHUCKkQZPwfBgmAgQrMTVRBAi5bscfkV8",
  "key7": "5abQhwrGERgC3JWfPCWssdowGPmA4tyMXa8e4T5AeydBCQseP8KvKGSuHXEDJuZMZ5upDX4e9fXQ7gnjrXYCXSfo",
  "key8": "tjaZHFVYzpDizEMuAjMWFsuvRAYMzethPLRK3uFCbVY4CkpTUH64zFffufgdRPLXdejy3a2XYPTguQpXj85QWrb",
  "key9": "38dQSFEB7QfD2djj4y1EMRnJgypgJxBNeNGU8cPzWvQ7GCxNw6iCxiFAHzg2AxNmyFt7LKWzPLmH8Mhhs34Kok28",
  "key10": "wwNsKjaVPHnxwQfJdue6oSd5UqqoGm88xqmkLV511scCZwvoX27hArkFmxf1HDNtWmNkR5LmYdtEN9TGR9gkuML",
  "key11": "Z3KDxjr1pwhGXw9GSbKFXKiV4G2HMt9HiP8b3p8qYa7YGjD3zHkSrUcfoQkyAwHJbhedWAAbswi4rP2fna4KPDa",
  "key12": "4FADqEU5fJc9dDGYga94mXoPzZPZJvjetBGhaSiJneSZB6qbYaabTqn2vneAK4BeE5yV7NFQGqJ2zeec9yZyKA2d",
  "key13": "2YR4r8z4rRcsAjGeYUv46ms6dNBrFJQdRYChKCSRCdCSm19y7rbeXumvdpEqywVTUmoRLrVHPpKeAQm66KzxKvcJ",
  "key14": "4FHp1Vu2CxbJ3fgWUP1NigGGkioJfWPNRiQpJhD7agYsyqKQvxBqz2xwnr9vm9nCpBauGyDfmzKzM7Ya5Wg8szpS",
  "key15": "5DFxduqMi355Kn97h9xhPNKuDBKXdWopazbW36kPC1stJDGNYruiuxh1B3iAsA2m9RyFAzvN1BkEvjoqN3ebfzon",
  "key16": "3SyZHgV6VC9A8VycmfPdN81SzULuZnyKaTgM4RFiozMRvz6UMJFsqBgsRr2iej5cRTHG5Xva4GHtu1ieq6oTKPxp",
  "key17": "3chg4xH23MJW39kpCaxuVTE3T9DwP8MKawwMjpFhspjJYS6F8hvv9AnbQAFZiiSAefZaM7V9FwpbKn4JMYTjLN1h",
  "key18": "5WeNKcWyBNtLAxPMZb45uJ21wdQ78n3i5vMTT3qmkWBpV3RURv2DgJ99kovjVvx5qgoSL2ZkWXuCqieJGeitXYFw",
  "key19": "knnVjH8hkFDAQo9dMDtvsSMExcXwfMrmKSFiQ2JPSJ26eyEtfzePMVdB6ZDhztjgaP3A77qCSC2MNh1kSSkgY1A",
  "key20": "3u9LTMYtW9ufAUuzvpMzYsJhaTFfrmcKSJ95RwfGgf33TRD5MpdiwMcQz1yadEpEZtYEfTDjvLm2dtHG4nZtVXe6",
  "key21": "2GbdQeykdmoQ5gR1AESbH3Ygj5poDHi5pKbpAf47LLrECuDBdppJbprZJkSBMi4V59h5QiBb1PJ4H7Qgm32AQx67",
  "key22": "3v533TiJzN6KaYcWsMnRuL3stejBr93jgutAVawXeTTTsmiUE6JFsWz1EGpAaFnV1zKwnyAymgWTg9V3k6yYDkoh",
  "key23": "5BwjqVQKuDGbvE4VKdfPJ9ZzNRpvMbdy8N76G2qqi7aLavUzqZfSccdAuBF6vVeqPEPhnAttxsSN2odnsMR1HxUo",
  "key24": "5srgbKwGbybxZ1D6Ww2B8RqhWE6S8bLyHxavdbcDd11C8LfLpM3NfU8DuJxf3fkrfRcVLff4piqQgwZ8iDuc7gkG",
  "key25": "2pWtDU1ExpyFRrp3gjZkKNdjDa8JGogL65nbsWMEEBHh84KN3icHM6b87kLAqBk39i7fePedFuYXnesUBJjLCRbV",
  "key26": "kNRigj9TjhqANPPXQmArACtkDYEnSNzixKHVkqKGWceD9J7mckpxQaskrAEyiCgBEU9PXqvR9nFJVcG4T6eYanj",
  "key27": "YPhSgDAX2ETbXZp1CMRGq3CWRtQefGs8LPSqFKnsvmfRwTS8pFiYw9jXtuAen4LY9Aayfpvf2qZv1RmT41hhi3y",
  "key28": "5fTkDH1pUYNG2JQC9Vb4gySzKDVZHzRfiMAWEm9BnMZZooZqR3s8PYYESD8rFT6rp9MM8BvpGf8PVuRq46E522RQ",
  "key29": "3jiPMZ3o72bqCWyXzFmQX38dc6z2fhFMsGpiEt9K83T1EXNHe98T5e8gc4opeTyrLUA9k9PhHqJWXQRhPNVR7DQ9",
  "key30": "UnLkKsEfpjZeEUM9aUtQS4dGkDZYvXt15mSuZzRWgioPNvzAvqJxvkTGyoGoBZfmAKZRUnxjCmLipEBeY8hs2Bx",
  "key31": "389DAoWXcrih83nuyv1DpWHasMsnhNBycLS4m2jaUqUk2NERWv3YGir9HEKqVwbUosXMrfQg3EG25ye6ngzVS4AA",
  "key32": "41C3BBmWQpobPVLkgxaejacgH3eba2MALDJ8yqmNTRXqwm8d6YTqkK4Jmu1qUZu2bWD3Zzwp5UELG6tD2VBxoaEu",
  "key33": "348uVcgJLMsN8J46BbCbDMUJ9nTiC4cukvRf5ZgPHCxLefqEK4tXWPDtMXnNaVEYsbVBLnbBsCv8ydrmyAAeNszt",
  "key34": "67berZMDQbKKCwAYJxReG4N71SLFfWeoFxu5r1rpohyjLvpB3WZiYRermuqvvH6q24TqzDemaTuTE7v38dwWivpy",
  "key35": "2gue7NQQZUKNSaUKKgTXPbYNJy6ekeWWWBEUCaTAp7XWJbi8V3n1Q2dMAz4YYyPLqWaFVPBz8f7by1EJhuEcifEr",
  "key36": "xW3B7YfjT1RXVSCxY6vpQX7R7d3q3MPBSD5YqZM8nG6QHirvctkauxWTbXk9TippJFCgTxLb4kth3sa6wYD4iaT",
  "key37": "5wnHNgr7YgAGn2MPacLd9CptbrK1xUFrgSKu9VxtdSCk9dzGSC28aEt4G7mgiKUVYRQDpQvqA9TDHtjQCU1YJdTT",
  "key38": "q6ArZ8KcAQf6GGc1SdPKPe6fs3VghtkAMx4fxNWtN6WWpaoVprJuVpBkjBd4VF36Bmt4XkyusEPNKwKEX99yo41",
  "key39": "2f3D2WBLEQsHwnGGT2PYDQi7uZyZQYzCEt31b7p62sbdkR5dMSW1AhEkfeQyf7Lf5GZ8gacm4ixrTHTXnBVTjkeT",
  "key40": "4tKfa4G3oMCfMDxGGVeqFBxr9nNnHdobZcsTR2xdBFm9nJysR2pd5bbfHyGBuBRcUcxfvKFQqHdWExut4ESJbDGK",
  "key41": "2ztaWnfbDmnSxPN6SVjhHkJ1vL9LUS4BmK9kvyzcA4TSBnuqt5VvEViapsAuW55UEg8JD4XiUCNs3pkcUe1461oj",
  "key42": "5K7HptJWqcuXds4DQzTT6JGuKsPobsDC8TPxCTo6pttnZKnohRsoUtrZ2fsuehyoY7qcqn7d3brRJESZnJGc9gVK",
  "key43": "41ZfAGNMGvqsxwbatGmgXXgpE5T6MtMq2EZkr19jhsgx7t3coMvKnnaQQGfBVYVB3iPmraVakwxDFxRAyTRthG6J",
  "key44": "2FCi5DbUjZ8N4b39uJicV9o1Lgfv3SRx4CkTP2zxvD9szvhM8fVvDJEm2HG7cJNQsHBguzk4kWSKysazK2c2ong4",
  "key45": "5doR87WKWrKZ2Uaeuu7NHwgiPbxi5k7xNtCA1at5X8jJaheJeWns31onirpFbDVnMhHxhhbp82Y65zAjSB5w4TQj",
  "key46": "38fQ2zDEg8QxZxit4ASume8Jp5kxqAbTGVnE4oqtBr5Tsxwa7ZD9rmStMBcmxJcF9Ye5VP9LNP1xfmsPJ9oMumY4",
  "key47": "5D63J4XJ6BYz525Xs4qjYvWGmbF5pp9YpawwJomPC3vMR9AMP4S8qe7d7wUAyr6XxTqBPG7d6paajiviZvZLakQV",
  "key48": "2kA4pWNN5CTyHjzbAb4168Xmyn68fk26e2VCZiZ1rsyiw8bVNrbJ5tKz4NJsa7oGJ75McWNwyAe7enRaMSEzGFQc",
  "key49": "3vzCuvbrmFFfJikAZwuVVbqufeN4EhPExLDe9gAyN8PnUqQ9AurWe5jneKjMdxCm9jZ8bWFEiGiCG6FGPYdqzYDE"
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
