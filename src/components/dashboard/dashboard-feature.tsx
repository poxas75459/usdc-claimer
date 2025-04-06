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
    "2bunQPBBuUwvUZgouYBPtD6zCTXqZjwgqQycQjtiCgkYyVjnkKTv6v6SCyp17VFQ5jehX9FiVYne89LsQP1jE25R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rsD6qtvMNqmE6EU3q3VsnMdgGajbegW2JXEUUACH56wrnfARe9UT7iPe8PHEVWg7WNenjwPvsxcw721c2k6FDoM",
  "key1": "5yzvU7bHLW9EFcLXcFGPktv7fSJQHoJS6fTbuezT9Ni7Cac3RP52sdYXoeQC45mALtwgThkxiAYiQaMaRyCDp7qe",
  "key2": "412tSSj2Q2R9rdMc95d7ZbZTrRSuya2eJLy5emdF6jWcBZM7KqcXZ4e8feYp7xyrARGLL4CEFCmFbJtKk9LpwXwM",
  "key3": "5fXmfEbPWcp5vhqQCzT7UqymSzJCZDX2q7KtiZUc9xaGSTXj22JmbtvXGsGuAE3Qi5A7hkyTQhJVs3Cmy4hY1i4x",
  "key4": "5V7pihoaVSaCR92dXpKUJSe7bwjyR6wfbkJ3W2fBh38XbdLZ9ihGDbLk7yhUn15dYai7VsPdizEuE4vEZVW8tGno",
  "key5": "388SGPkehpZkzu7qLMqndcyLNV9Tq54w9LViaEJ8eB7tnq4HBQNvpJ54oC14W4ZbY4TSTJvVT3Y7CDAT1sfYuxRq",
  "key6": "KgQG8nNEEVMtaqgrQUMCvT1QspDAuxdT2h53wHFFxqwS29WUWGyubfErjWyNrrbVkZDPhGrJtgH1T7EnWdabdSB",
  "key7": "51wVZfpToedrK5LHFnrU9mcUZGXiGbWc9mmgwGoxBszjKtwMD5Z2RZVAT2ggMz7n5JCwumhdwiifFvoWYdgDw6bP",
  "key8": "4o47pF3DeszF1DmsuC57RfVsaWkoeAAoZYWExbEkbcDGQ5yuuMaVRXA5u4mXYkhwrfGS49xgXStyWzVNKYinvwnX",
  "key9": "36FiAr3pctD9z274oRH35zgkyCasg88tYsVkZT5o3oA8uuwzion4mvh9YkvuaYsKbTStG1XYgfkmzs42Dn5ioESd",
  "key10": "3DZ8ETELKkVk5AcccJBzbVftFvP4Ah7EKRhwgFaxf68sFMLhRujsvKr4dLJ1AZubgt7V8J4Zcw9u7nbASPSmwamB",
  "key11": "4nwYo3BQbkhdLkx6yAHZi4nvF69bEjA95C1BNENDuWSo92rwMf9VVngb37ypueBWjg17wzit3dMWCQjtHRP1yUet",
  "key12": "3JGib2AYfDRSefDCfw6BQje2fUmXupsRZb8saTvaM5xdRyhZGhX2YEnK6r3UETDrGa4sNNYxoU8t9vBzSquUhbZD",
  "key13": "4FR3C9Xb6TD8qBfJ4duGHSqRMpJVovZL24Q4kPjPo5u1ifHvWZJfYJcYsqDG75L6XfKWV7BQpBZek8m4fSJZhpqc",
  "key14": "4FWXu3mAaFED4RZcSj3oGRkXLsMoWtPYnmkuKNVmgPNMnhvYku2tKjqHrvsZanBk4i6nXbTyPK45BsUVLK9gichE",
  "key15": "62wGZ8xUxsmSB9ZcaDYRNrkBZn2ZGgaXha3wFrPQSRkFfjUN1HqU6YTXpMLyQrBKaHK2LMyTeWCCFCJQFM7YezDg",
  "key16": "41d98tibMkbWfo3MBshezsZ44D6heiyqYdZezUVpJWWeUBTDcyQGS8VmdQRCqXayybmU43cDcgF83d13ZGvWbecm",
  "key17": "2QxZaXuaupikD8HQwx59bZYHMLNRaiPTrHS5jMwe6qHb3gebVhT5SWHXBnHB96gofb8XLD2DP4ADLGjFEhSLqDKW",
  "key18": "2NgZuHdVqgTyUH6csho1CV9KKGirhtHSEAS27rLUSnUESqmc5EPG8jKQtw3Pwbk6GHBZwemkfmLPckq5NsC8QWMZ",
  "key19": "59d8r3GPLiakYBUau5k4h1QWnf41nGStNSTTyDRDPUcgutf1sgqGJcpoVLRbPe9W1ff2ys4qNV9V4owL3sDbVvRi",
  "key20": "2wcjBMU2KogBtkwwK8zDtz6ERG8yJiwR3aMaXAYvxKvbrgLj3G7GzcW7cch1pUUBcj3Azi9gAqAjjMufgNYkBgRE",
  "key21": "4qM79XhzcnPQte8zDT6HGNDtBGNpNiji3eRDSVi5aR5CJPmF7kHtQaowA7stV8na9juACEbJMZF81QyRJd3tx8Bo",
  "key22": "4L4WJD4V8b965rYQsUJsqdsixBcN8q4KMiKnG7eYEUwcPresXVbfvdY7aLF7JBgqJUypUg7fCoCiPJ6U4sYVXyKn",
  "key23": "2MLq9o1K5B5QMb4SWUJxPZ7NGcqkfpWqKW5fKmzkvKdY6ajWGk5t1rjvws2szomfpqdrRrZRHLnNdQoy4qGVWFA",
  "key24": "5BDQy4ZR6TqPkLfhYRLgjeot5sf8e3wLa38GnCfkgsjTW5mBbR2Cm48jCzksEk6eHWQs5uJVbmiiSi3XTF2dDYWV",
  "key25": "52tchRivpkB39ku1nQ8djdNXczhxuAkGLVjrv66H8XbjMhUFMxVt1nicdsmhtN9UUpALcvRTy6nKLXJQdUoWj58y",
  "key26": "3DSApFweYvVYeAKGVBmF7R5M6FtYSGM91Kemui9K47LihtHyy31w3Uuq8vPZ3YiGnv7W2o3GeDv7EKpuKdsDD3t4",
  "key27": "65RPFUQtdNR2aYi3JT5URxuWPnj8Qd4vHbntRG7X6WoHYhNZR3GM8ocBNK3TFiwYH1jB1E2oeRLfs3MaayrFzAKg",
  "key28": "58eH6LZdgrdoctPNCTRqwpJBYgf5kGsDZwvGAutyxZhmPeeY8L6RpJGELy4QcdPDZu3XPVtDXumNZ1wRqFqiFGNs",
  "key29": "4wRSpeJpphUazjg3Lnt8ZoySHtCPn1v3iuBwUie8u5AJJ9NNoGDQbFzT2yaADijFWfGud8mWRFA2CePDZ8YMmMni",
  "key30": "2asSiwBniNebcTYFJgqph9caNkamQqTrtEy9XRLtJJ1Dn5zzdHrtvczNo2qnaGBwh432TrmmpdWCdRTbBcoL6Z32",
  "key31": "58B5XopZnGSuq27bUTf2F2HzEu5MZuHMrfg3F3pDNTpf65VAsgwQkbdEJ1a6meoJtPvCQ4qv2wUGYrRVm5QCeb4A",
  "key32": "3CBTAoQrRGkW5aDKipCLuXTQQSUhXHkkoBY1BbP5DVxP1Jfjmh5CFrBnvVp9JLtr6rNg8cm3DRe4ifvoQy9oMorj",
  "key33": "5BjR4UM9e7X3jKjx5ncjs2sZfT279T1KUK1fopK5vj1MMEkiqzmk6gE1RicQmt5i9y88ec89MXMMM4Mwo3qYZ4SA",
  "key34": "4TMHUcxs4VDqMkLWgXyt53KCWkNjvV7vDzMNdRGZiGvZEcgRVR2EZNE1vRspadAd7TPDQew5ZGKLNemZSsHgusdu",
  "key35": "2UQ1ir3CHCU9p5WVzVJMQefdipjWydjw3cYiDtvmGJjBzh2AZsbHUBNmwwwM9M9z1ba6qY3C3swRDDwmMLhNtroC",
  "key36": "4s4fFGd5cp78n818zGZHzaevjQj6a8qRE4SrRYNkD2jTySGAiECSjPCdMGwjBviVSaPfZ4UYAygcMifJCQWTWLnG",
  "key37": "5JGpQGSJjyn3444cB9HKgKytsKwHjGqDVCFCC7BqxkQQ5xhSfAqhguXq5FKBMNceFSw8pbyJiiRphD1GV9MmAqc5",
  "key38": "3n5gWdXxii7h6RW1j4PKStwzG9QwHEEdDjdP6gWAXQrrqTw1H1xFkyrYbsE2pRXB9K7rNpHkBd8ewrxPmLeF4EA8",
  "key39": "4aaZY2Yf3DmGHkyVR81LSt2JRRsbmpRLiyMpF4X8X2XKAXJbKUEU15vyDNTHV8sv2qWkYMxkMg3gu9byNGGjvn9y",
  "key40": "5EWG2gu2HZfH2KtqvE3Ft6qbQyhhCfkVak1wPtkzySGpz94Lxt5ufkQnkx3ercohczdmtFeSumeodbQHfE7z7oH9",
  "key41": "3KkQtniSQzJs4EKLQXBcqMRPkJUFYStXW4ZHA3dAumdAxvo2oVSzhKJeLBDMhvzh7LLkBLZFs3s1qsMuYy2Le1Gs",
  "key42": "HjYDDBsprYrc2V4RTPyE18AAG4Y3TXYbjGkgXGkzxYeUoegNC8xgUr9BmF8d8d9p6mhuX8CS2Q2Grk8X18YNRfb",
  "key43": "zJhV8P5G5ohi5P17xCzAk7rPUSBAtdHsAWGR12dBHzKnrmNpKsmKvpRnHHBupXCDqdt36AhTTdQ7b5ntJerX6g5",
  "key44": "5xXRH4ZgTNoHiQtDK5JJF4s529Vr7NjMPGrfNa2YiApsePrA8WtmF9MN9QqGf3fDvtEtpbumK4cCC9mj9xB6DRB6",
  "key45": "4m8UqH8Lv3nAS8qhNvPh4rnyFxp25fyHpZ8PMr7G4uuwPTAD2gHoMCm3jpwPYBjAChKbnfJghPdJWo48aWAyAaTp",
  "key46": "2UX9kS2WD3msPFA8NRzp4f1HynAXFcgCkoxYLfr7b7DUR4f41kzVWzKpwXdspjVgqemyCQjHHDucTMikE9FNYZfX",
  "key47": "3CCQVNp4oosc1fsdJjBD6gGCXrtUw7X4FeYY8z7GKFgueBbgeqmR5avHNyVVNFu6FkmgC151WY7LvUFEZGsUFQLW",
  "key48": "2L1RAnJZe3YhhoQb1rqguqQWjiCpMkiaprmcGwhsenozwrLqKioon9VL7aYqePgYLiFgKVHKHpgqxEGA4BjSuVAu"
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
