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
    "52yfFobemu15z71dm5SboBRcuYCJHjvs3LbUwe4c99rg7Ei96BoMQGScFqgJkt7EC29Mf5k4Y4H384ysQwGhyxM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgPYudo74gM11CGkQLxyQMvFk9xSKEfgpwGr4GmGYXbAWi6zdGAzPnmcCCB776EtYPW6LFMbrQibYTkfqDwKmhB",
  "key1": "3LNDpFjPBtdx5FKfXng6LjXSXFT9EW5mZDatvNTJ4bk1LWpoG3ntkGd3PVmhMF8VEEeabWX3g4UXjhBYnhTHKH2c",
  "key2": "5aGTqzQv8WQ38bRNiR6FxdtJ1Kk5uxDHGe7NQvdBhFYVWAsGGrKzxX3WDaeY5hLEVzrwfJ3ZBRvcr99Z1MwkB3Eq",
  "key3": "5mgQTWVgJwRkYy5bvrGkLQqerXgF67MU9K1YYtRRBjGsCE45z6Rz6HCmWjCFB53raakh3cFUHeg5HTz943sFGove",
  "key4": "26K4noaHwYxjHKR688YZWNGVf85VJorzjzrPteop6ny6kvwPZ8V5SxR86Ge3XRRzgUZsLD8MkKLV2CX1E44f2xwa",
  "key5": "zC1icM1WzcZjsnA1Gq165FcHKB4BBMd4GoKA3MG6vToYuQWVeePjSUwRvzc1awh5dGtEeCprt4orsNPpQjwzQxS",
  "key6": "eibZPsVx4t2yuuJw7k3pFR1nG4PZqKqfA2Gg3tAyHLufgZy822AkRysJcV8egDBWESYySZXk9GnGV2Lg4HsThqT",
  "key7": "2y6HPUswuMYtqGHHdN1WSEELQKYxQ9gs62BUuQ2FDP6AzL5y5HYU4R7uQBab1d4FS4tBMUopGTACanW2TeqRBc35",
  "key8": "5ndpLoZRD4vv4dSyyHfFSm97nuKCokB44uSsfgDvEdHixeUCdw7htXwshmKHQvwkL2FAQk9CcN6SajnDbkeNqBJ5",
  "key9": "2ZHkhGZMfEq1npAv9mxS5vo1Aye5sPbAX9ej3hf4sPJUQakVWZLYqY2GMHWZhxxf2TkkTVFaZjjsfybcxEWXy32g",
  "key10": "rb99oEPChUvTVXvYmJ2A2JcLiuBar3nCSeSydcTqZ2kdi2yR618TXNAu4NaMSp3FHLw4xTPyejXZUEm4GXN2vHG",
  "key11": "3MwFR88PutqRUMAcYV7u3xCDftMtdQnG4XEjgnZ7zgh6bv4Dy55Go9syhn5nccLwDFktURR8U9nG5R2iYkKfrsE4",
  "key12": "3MPkADxEHwXDCTDg1muycGc5Hn2KHMrxZXWcMvLRD2Ah4MgNmKRyNVrzru9fj987SxP7Twfxvnrk6UTwdkm2aYGN",
  "key13": "Q35CMzK6FZVV87ixTK2ZH7zofVCeN15SB2CUzhEDcP3atJYvfpSQW3oeLSz3BcuYADXw2uvHCQPyMNUinfu1L1o",
  "key14": "5y1Ld3xrGoggbvtkSD7pR5KHhooam2iMu5CV8MXRjw3CyFiWJgbykppEqmKKMCaAcPoQWAbiz25GmVfjyCJeRjiF",
  "key15": "2wHvJinzB5ufUUdTu67yoQJxNUkUm2uUuobYF9opqcYYdUMt873dNNnfq9NzafSW7H9hKm1d9FcjzMQ2sfQvLnrH",
  "key16": "3UthLWLCab7u8eU7xTjRCgDPtJ7su4iEUEVsVEENovXUu6rGyQzFPvm2qnvZzBD5Esw1dFwhAPHRjYr1CXEjN9ku",
  "key17": "5YJ4BYpR8N9Npe3bbvQcpT7EPRrXo3mT1cc9Rx8jySVFx29FofoT3xfYXDWhMvVEc8V23zsPdXQsqVpC2rm7ZqtV",
  "key18": "2gScQHDeWuSsMLbRs4yD7z9JFqHVzCwpvuSa4LaqJS7u2vRsy66RDRdiW1oNM3BcZXVSDfgBnvYX4Z2kanmBnT9g",
  "key19": "5tdiQyCDSDRZBiGow3HHckHrzc9FMuYh3A67NwtcwKYN96co1Csn8ET9DXXnx8uwDRjikhz4TrJg4N15PxT5rsEw",
  "key20": "2K8Ugo9Uvi4J41j29dWYC4skTUbu27ftLrr3nDfFRwtKZYRCkGoi5bkuC7rXcmQY7fRZgXmPA8GePs2Pt2q3Tdah",
  "key21": "eZBmAnHc4WZzrZvdVmUfXERNqR9diusQWdHiZGKKMpLxmqtS3ndCB6gsDdQTYc5VoS1jQ2HjggftLDEo2pw3wuD",
  "key22": "5rxf8zSH6fvRmYnEqeqTEgjswFsSL3kNL6D6aFJUjtzsFRPXq8SBHbLToosz4SQhNLiPjUidDqDmRy2yR94CHmjC",
  "key23": "3XVqksPyQbJSsQwwvAfRJGQteWBCLXYEj6XZpe4CwxMmm2QbcZEbRQ2T8XkskYXrekFJVwR1mxGZAswy5tjQb7j4",
  "key24": "4H3A5cTinuCx2b96nLNuojereDQWrd6mpNr5cc7EVJ54Geve5JR1AuBA3B88XiFqRsqAose57E1n7Hm4toJShNg3",
  "key25": "21RQTeTuk8XCREqP7FBNym2KXM6pimd5qaNzRtpMQ2HrmBuwAJxoFpNx5G9iUqpDS5mUm9SF66MoRKWrH9iwnmeL",
  "key26": "KMyBx6qX1MYbmW4UwiSvAULPHenBBfn9coqGvTwf6VSzY7u91jVEvPHa3K2nK4Sz2zpdx1xKGKyffwRd9MPqo3S",
  "key27": "RjBA5GaTLMoFnnvH9L22gJzzMtXruF7cmTaFvjbxFBUcDKitSxDwi4Dg3kjsQhpieEkCsLqSadX7PiN2FWMcRzU",
  "key28": "3gd5NuV6LKkhjxqhJ7dVZvThwgss6peaJzi1u327UfxAyY4cyTo3TCoMQj3FJyGGPWQEjG4BFBzxZZmCMDwXusp2",
  "key29": "3gMcuJzpu7UyY4p2rTf8k7LjF21351jtY45SyTKEd1ZXYvzpkvmFqffRpdUgAFiKG2gWxfjSCe6d6KQWD5Ekc9Rp",
  "key30": "4v9dagbnphmMQv7x8n1LYhuhcjry5Z1irgzTDZx78R3EcEttdLi8ftbN9KezmXHXLct6B1aYNrWd7LdMQHS9x5zu",
  "key31": "uSMJ8UkL1Cpxeeqd8PyxH1ZjVmb3SPvMoGjntAwpd7Uy5G1dhsq6KkvASwgSEBFooxvxBKPKF8TBggHKpB2qjtb",
  "key32": "np4CaGGgT9RBsHjEnNB1ZScNvrTPm89tE7PM5EeNRir83yWZ4HnmzpNGcrh7BGH6rDrfPtGfNRvAbcivLdG6uKy",
  "key33": "3tEq7YWaDKs51vxag6fZmGWuhb33iCAVTjKcyMpxiifFUgrUygxkLpvkmbx7FqPobfpis2cefqiJqvA53kZfsaBn",
  "key34": "gdWJGiHH4mcXGmB3wjumxn4eR9jcyoiUa3uPone2dTEKjZWGQ2cbH6waTsDkcik4wwf6ZsJ5z8XU8MaQtBptV4D",
  "key35": "251HawYrPhprVRGbBi8AAgu8o8utCWCTbv9CUUdH6ohSTUs4w4CVgKFsduqUSvBJciRpUtLEpgkRuMwDmHNxqcQh",
  "key36": "4rwQe2eW8GVxwNidjPH99cjhipYBNccup819xnGuf2SWXp2tCdBKZD16NTLUu9xKxrP1aFSJifJZRVb6JyoMBLbH",
  "key37": "29squRvibueARBETNoeYRafbxtcpdX7EpyJZgyykbD2jPBHEBtkU8QjtbwWkeZ7TUyZ9wBQ5EMmZ4ArvnYKA4CUw",
  "key38": "5QxEhmtyEZbbHt8ouXWQxJej9iFgBPutK8Qn754Rgkk5aEdpAS1amA3tSmteaPT3fxDSgSAGYaQAMBXPKm3CmBBv",
  "key39": "53tNdpXRJcEga3AvNQVBcaMBbaesgB8Qg9P8dnjrxKnKZxCfgYMmdopz7KzdD2BnHrDBYVXDq2bAECMhS6fPKFSN",
  "key40": "idFQNcEdijAiWn21baasYejMyVhjmUZUUNeySwN37tJS8xygh6LBhedsCVZXQZwwu2KcM7fuyCRw3hnUfdkXkzR"
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
