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
    "vQFD6c6WEt3fLVGjUe7h63EPo6tEnpLkGxisFPV4P5GCjBkTvAQAzGVdRsoKgGXY3XVHoXjuQps1Y6Ajo2c5wvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZdovucZbuVn71EC8HQjXRbWXdpBm45F6EKSKvpJ3q65trwAyvfNcznS3u7b7PSVWHAgkbgmvKv7BMZuW1wV65n",
  "key1": "uaeocR97NccGuperGZ7AqHLWQCcXPTc1FKvuefV13QJbwzEXqhkww5txeTyuGs6ew4wHpJfA5giQo3T9R4kaNtH",
  "key2": "2caV1fA6LnMRVGBd5xUpr6VxZ4BzQtRLqshfxxQs7dzoBPzB93QifinMNb3BmToQGPJuTUfryKT5XYj523XpubhA",
  "key3": "5JwJVyGGvMLm9eTKbe6NoPpBZGU8TSHeJUtZegwT14RQUUvkMQCDp9CbnGDLog3pvwhjVAh2J8bhTsUEVeThCP8c",
  "key4": "e4tzjj5oc4zAt8E4mddrHrPzqNcqAxrYmqMMSeQsk2Azcf8hjpGYSTDCAbEj5Jh6YGNdFB2RTLRfw8mhZNhAoYx",
  "key5": "5BKX36FzXpcGYqBax4aExrqCEEzSkPEccPMaf4HJJ6CMu1To2iMp5pL1TZJ9tspSKPUcJdcZWavj6WMXs6qJzJwe",
  "key6": "fSTf57wbGQTQKBhzrboyXwgVdj9x4j1v9apYN7AeBGKDQ9vCou61VnEsyeDxJyH5FKgaw6fuZzW8SoUApR3E2jP",
  "key7": "5suut6xWceSGM3kcFCcE2SPujRezXEfVJQHoEstF19gcU8rCUtFEe4VFrfzrmCP9BZrN5ZuvDNUbgZYzGCc8hEJg",
  "key8": "21DBVvgUzf99DMcxitTQpt4Cj9RQwivckL3dbxaqcVxiNYjekxLQnptEAP3PBmM6b3furGN3PY8X1qg6XAmAWpUW",
  "key9": "3eQscX2A34Zoh2gavwdWjPrpWLUqYx7kgksFVXHvENox49rQbAGYZjRxHZ841nCnKszBf2iRLuWWsrX91pjUoEBn",
  "key10": "VwajvGfnKSgydDbWdc6ov3dsuEhbKoTx3DPWoTsrqPkjvTZgkxwHkDcoBPHUk6zcCQSPDHg1fYoP5xSxW2J9bf8",
  "key11": "3mdHoNV3EN85b2ewspDhE6FaEwCRjrjWVWSs3f67wpX9Dp2NM4PddUPNhYjV3NWyr52DQ5AVmf9nQetVXysSQhh1",
  "key12": "5gPVuigAxbCKNxL6CxkFVcLFcQewZjJrd9mhb9qtcQbTHqpvP9SBPGDaq2z6tthcjSvoEYcJT23Aahs2D2h3Wyri",
  "key13": "3W63cCiCUuKk1WyaoBBsbbwQDBQ3EcjD2KFj3U5pkwdCLzYpcHMmh9Zj3Z2gfToS8inDyspsvAyFCXNQY1XMvrZ7",
  "key14": "5Yb5igfngGR22raSZHG4qBfUmiT5fTZveJ7uSe1GTQNbKQwd4ocbr7VEqhTcZfPudL7ZxuWxBBgCK8M6SkVwNpmf",
  "key15": "2ymwwqoQNLrNFDB1kGjAQ5ogcfkxcgejnVFo9iqtp6T9VxopfHjhf3aajP8DSoQJaLSQNiHfPYzD97DVZZ94CoBA",
  "key16": "3WbCqZfAwYJn7APpyxJJfgVfihKbm6hWkzKZTY1sEahKgE7WY2YMV8WPGFW5JGryVgLBztzT2K6BKoPz9MDwEU7W",
  "key17": "52hFC37SSRZzRDcbpqREe7D7RyyxU8CBMWHf85ZXPJGRzKT8Kkrbgu4nzsd6Ngx7KujfHFdFonupMmwY7EwTPGkm",
  "key18": "45rgsmATiiMrjf1uARkMcN9if3RUjUzF9A81G36fGJS3K4VqEXanynq8dLSrMWMQ2Z8jVLaou3wLfJ1NRdrE6jdy",
  "key19": "MzkgAmhncMBjMb57Ho27hPpzZxMFYxEbapA5h3HoXjT5AEtXBNuGP2b3s7LFAyBYWmRB9DqeU7cQTr6qPBxiJgL",
  "key20": "R1TPbByCX3wF8wLCm9D7QAWAtRCkdJGADKE9rypkDFAQdhLJ2M7LoJ1DXuSTvsnijsrERLhZzEsFnAqHss8CWM8",
  "key21": "64C2wD2iJMxLKPx8ae1iCCBF3Gw17JwYY9m9e8HQmgy1tZ78uk53JREHpVXUdomtdMSsmCjs3rTMvDMJ4xzyNQXZ",
  "key22": "2TcovB5xEHZEartrmW78zbRwKriK8Nc7TMi9Cj2ddd7jVzssmAwHz2yFmfiBNGeK6TKxA9kdmUjuzb1Z7AXdE7SV",
  "key23": "4vFuvP66Z6NRjeoSdENfKDF8wxaR1zt5HN946mfhjwRLpCobqwB9Q6vhwPizEZNVbAZ7iji4MPGEtdcUsD363qvc",
  "key24": "5LpAQwbNugSPqofDHM9fiNpJuBuWY8fWWE5z5ERZtQVyz8VbYptWvNsFKCXJncY28fCxgEBST19mfA69Z2a8Xh3v",
  "key25": "34syrM87mrmv2kUL4E2JFMf3UCqDcNMwfYu3FPKbmBHYVZrnY7AjyjjUY7wGNPqHKBm7fkc9PQKnP7aUEZDwqwYQ",
  "key26": "3b7GFxYgdsNQX77rXLaeGcLqhoNHqp5Bt4cfmMXPuCBmHoBGdQ5Kb15EECX3fBY3aHkr8zK7fUNR6UEnsxmopv2h",
  "key27": "3989cuPPMhg7xBRPbPVhHAUvoDXzZmaJutpaJ86vYdZs8smUhYBStyeztgf9ZKBsxuceHrB1TSB5PGQWjZ4L1QKa",
  "key28": "3RoEtVj3MKQM52aVQS1fnSUrX5N46tqSvwV7v9dgLfigPY6ANttGNB7b8EdqRCF3sXEE1PhAXcopn3PpUMttFnBp",
  "key29": "38tsh6Ve189Z3PWb3hgH6xEVaL3FUs8dTuxPn8gwXRAfd2G8AsKq5hTCQevvmszSfTdqha1bkKtoqGeCHyGNPiUD",
  "key30": "4TFej9sFo4AcY6BAag7uLVdQ3CfjgcZ8UX4gUux9csRaEaW7XEWHXzrEXp8FwzhHH88MhqG8A2mBZBhkPnZtpQY2",
  "key31": "5GTMSNMWehRkeKiPu6Frbe4FR3TwWTCagkddXLsuTQZbx3Z86S2W7rywpz5E33kFsHe54DrcFYsPXREtjkYheing",
  "key32": "4iyX6SCS8sqpzWZ9UP2NXNWYeB1gPft1cogPadMozbfAbJw5o1UGbJ4tZAC2w7RcAn9JdKeTmcHDrdp5JJ5i5qFT",
  "key33": "5mSmkriKWtJEfNmgDujvoZWyk7y8w2NeyMGAieshBEMoK1ACdSGenpvnKEfGAZ3XmTp7LWNNPQnKQuUM213A52yD",
  "key34": "mQYeWHrXQLU26vznxrfoFdc2M7M56WirNJVu4m88byQYRQ5PhXBVWQ8AG2BzjgG1GwVraCHG4s7GUiiSrobtVp5",
  "key35": "5c2tsLK1awH222ccz6EdFAk9gQkpYz5rBv4ALVnniy9JH7gGemz1rbRb8gyDUHx41uazigdKZkmestJDGf1oNxH1",
  "key36": "38nYrZ5anSvUpzNoYnQA45hGbtvbdV6sbt6Xp3QPcX8J9ETzcW5gLrJg7UkWCioPioUvDyutRMRq7hdWfueggizt",
  "key37": "6g2UH4eefbxzTCFkA6ZY1AjMqpasjJZFyYZmt16wFTZ8p53goxaqbQyJGgt8XTbLtYviyLwyEwU4zsEqMgLcYHj",
  "key38": "4P2uByi58VfegP1hv2hHRbXbVz19bCCCP2uYJ67DGSLTN51fefpJXeCCguRcw64TtCy7212eaxxBGy4AwGhEPXvX",
  "key39": "BZrnSyXiJxrVczQaRX4NLAeFtUmF1WHKchrUKh6Qr6FPK2xbVnqDTayyvMugwz1anLkRRWHXKN4Qr1VbtFvhuJL",
  "key40": "4ooWidyw8foZbPn46RZTRDsUw8KxSc5AUkbjDUwrxpSzmCQfFb5yqgdKFeuVZ8SUc222FfTGWCoE6oAzn6ofo9YL",
  "key41": "5mfA9Roa8MJgDcwiWTYKa9HDueBQVTwW1T83DLmQzNEzMFBwoNzomqDaD4mMf4352wwu75HW5VB3NSs5R85Hpdf8",
  "key42": "5gHiCTY7jhuPKeeCucHAj1AUKiQgWvoH7aAdyTWaevZWobgwej6tK792Zz2vHPaGvah9gSVZC64GNJwX8FJkgiWr",
  "key43": "eiwrnSS2nJjPmtn3YerdASD5VdUAbZ4zJLWMMQue5PXJs2s8aE4xu5P6wFZwpa6oR2g6SVTmXEdnA8yaVG2pfhU",
  "key44": "Pzsbyo76C8V6VKELe5w57e3dA4H7agUbwtm4b1nPjZkFR9mnggF5FGGjmNBLNw7d6f4pT9avNHv1GbkPeEWTyb7",
  "key45": "4t54fRN1ihr7fDXUNhpwyqjeFsRjNBa8zvyNqjUKJVJYxLebzPaFDVECi6UuWZB16BYLLY1Tv6i5DycjGArEFCbR",
  "key46": "4yiWUGx8ECdEMevKbWksNKsj1yhZVtQUm33BN3D3Xdd1qErrDrxte3BmhgrqKAtKinvDi8Ts3drXeqXYZMCoDWFH",
  "key47": "5nrj26RxH84iUR5ZBDe1ZL8MHtf3NUgaisiVzSaNhFdQ97iUxAXfM9n9jHyho9MCK7cmgMcK1e17tCmWWiADWmqb"
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
