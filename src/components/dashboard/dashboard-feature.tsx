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
    "MQq8CMYxUUQU6MfyBmfHyk5gHEiqqfqwoQXp9sC5hgLXTKKyp9sqJZTN7frGDHwqCJCTT7VnsrozJaenh9Ecg56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tT3QfHmkfL2GxXQcDqPjVf3hN9UmbnAP6LWLqaz7xaVSiAD9kXDeBuWKZFqnyTQ85qoV3X5vzXiBnAxvaE1Ct9z",
  "key1": "5vXr1Uh1sofgGcNQbgm6t17oUiccm7o8FgMDzAEsQM23Ay1K83LhjMs34rjtyMdP259UCHqrsAKeGtymVaH45M4E",
  "key2": "62tydQQoHBf2FQtoTmLPMEfPcrsSFJoBj9ds3wRTwHCT1tuAds9msCbvjJZVfQc1rgTgV2gJWe9cwBwf2ogrqkXs",
  "key3": "2jcEKjAXH74n9eWBmjfUiKrKXASo8w3BucE5qaPgnNtSH4W3VCJVNQxfaBPRiMAoBwva6tG3qwmw2pNwVoypivSw",
  "key4": "eT2iVKTZCBnBhzEmcD6nNLNpgZwitaPfLks3Cas44PnAKwm56soAWKdjDVDS3SnNYU1tbo8f2a8VVumP3YCHTye",
  "key5": "211NB8drbmNN2P1YT1qS2UGbH2QofWAyWcs9eb2P7ryEe5Dubz9CFJkpQsEcCNRtX1ATC6yvEmG59F8wvkfbsVe2",
  "key6": "3RuM7oiHAanSfNSGgtcDfPN75iNusUCVm1YadGFs9SqbKxyjYC92hZUfCxxJnfGtkXXkaW4UUJ2cihCTDoxoEyvD",
  "key7": "4nFx4qnL3m7oBDV5mH47p3zErFjbeWiSKrHzsXjtc6paAwpVhPXxnfyme1BHfu4K6ba88ub8QrsKuWV8pJy6cQQH",
  "key8": "4aR3nxUEtQ38ug8tzbbaXfqakghxwF5iLy65jq7Lo4DWGUVgAECPHxAmqkjr9jZEYvX3Yk5m3dE7g2SvH4iRrqX5",
  "key9": "x68rnV7BE7SpJZzJFGZV7NqRvtGvywKJAD6kGqPcu6uABKE3su7z9azxrR8Adjq9BGsu6WDxk1jBQVXqS4xbKSa",
  "key10": "1trJD4e4zExxhBQ8xPnjt7Y6LWduRWE1BBqjeXzNYAaCAKqzS2H5huCQdYkqAxsq6C2PyZ5sA3RyvA5q6NJbdto",
  "key11": "5EjXs8XfpfTW3AW2zS5uTma3d4eHRVdxuvEyqDQoB8vcXzzBakXPyeuZutLzyjX9JiA2RSbMGJuWFvRFRJiM7Xat",
  "key12": "3BybzcJizMsajBdvKhQDPjQodhKtC55Bs6Z9Nc9ozMnu2LhBaQqH6hRxFzALir9b8cDF1PPpbPVKUXc9NfKVrEqW",
  "key13": "fJFYHyQ5DKk2V1ZUFiNJbQDQDSWsYDbWn98y3XdoQUTazJ8ZmBPXw3D6ohKJh9saXJ1UT3pEwu8Hfdj1YQauie6",
  "key14": "3X1TjCLvAJdLEdpvnwuzHMRtQCCuTPHqtS6mqNm243bVTkgfqs9WDKefTfc9VokQSkae5hva3xWH6h1UUPZVp8RZ",
  "key15": "62rMCWe6nvCQ2gBxAW5vDzMSmi6ZdJBR6gso3sCu8JXmfe7zsRzZQYrS42evmHoiMyD7Rvcy5itGZUjSVGiDMtNu",
  "key16": "5CNgRTpYhCwc8aVQQGMs62WTMYjXr35XbckDu95pmueyLNywvBVdAHQfUCpwykqX2GE2a2XKCpUbNxaTTYFws4UY",
  "key17": "5nWTifTL7iHUHHwUgeuAVtSwzLeBjhBfPgmLf7Tu9cMxmqJ8NCGGPw2pLptxkNSjksfBwtJo2L9BbesouDEmmRct",
  "key18": "224trjhFiQ5zqvveJLG18D1u92z8ih42bn5BvBysJ594TkoWbf4vKR9CzwxyRLiFUceE13Tfk5gbbKKgyDXgsFgX",
  "key19": "4bcftjuvDx3iYwXmFNwQSnzuzG8zKiTXDBRRHa1DW5zeyyDshSkcvNE6TPm8S9mgNGhvSxhfw3CcnbZ3oKFw7314",
  "key20": "FxpanrfmRVRTrw1yL7gd35odj7YWz38gTFGqFe9u33DBLLMXPwHGUibmYA4VGMSooart2qqCdGQyxzMinXKkFBY",
  "key21": "38iK2KERVr3462tDUL5tRYfDh6YAFuhfveMjzwMcW9u851aK7VsuuwaMitZx87xDrySZnTfMAXEPzFWPXW8bnkR8",
  "key22": "2Toox9bsYT3vQnMzDBYW6eCmwrAUNtVuTwSmTWX46BEfNCwiGGWbYES4c1EnE852ngBSE3CmZh6QaqKWJ4NaKumr",
  "key23": "3vSrkhvX3dWpaPgrS2anHjLLDzdFJcEtDC19Xs2yburhT9H9bapyxxvj1Y1gp4tt82bqYnMMwRmknct26gFwArqC",
  "key24": "3cbmez4Y5BJriBERxxjmQGXx2RcfdtptWR7XYqWJiafFvEYRB2PXqaATBsj7w4XGYDca8AZHUyBCqD6VosneQ5tN",
  "key25": "2BvViaJhQ1X8j23fqqRKfDvbLTeNgbAs5aDxGpeTBzSgiwKPhBEPj7f9kDGLhRcLpS7hMNnxvBzujmZKyTPYnLxm",
  "key26": "53dh7NtJZERXUJqXgiFywBjqL9vJ2nnKHGmVDPe9g3pPSTCsLs3MJy35cbtJU9kkqdHYEGR5opzGsBPi5hrpWUE9",
  "key27": "3cW5uLVGnzKJRK3YuL9B7w3X49Q7ivpMV3B7Sx6Vd3cSX1owQAJsLtCbZoVDNoif3GZgRTa9XvFXGGLV2th6QAU",
  "key28": "5cQcuLUpKoWju5iyBhzr25GV1aPH9TPcyw9fHo2qxUYub3EaJRy7b4NT1GEHNGXQy8YESwN8hhC4PoLX6TChLzac",
  "key29": "2Z7dSj8WE7RwEyxe6hckyPrMAGAKHhbBXDsBkFSqPj1AqWx1HU32xJCFQbC1m5SGcKSRvCM3ziX2BHs9t913VAc8",
  "key30": "61Qno7E18jb59fsmoAS5Nw4iY68kYyYq4Uc2tvW4mVJGmsrgeRrcd1PUoPSdRHehCzZaqH6LvKevMNh9ncjzjaHX",
  "key31": "5booyFcw8xQn23veUD6dUN9VMuqCYKhrTitrrHi3vDGKHTiC1fvjvu89eMBpWi4qeQb2Bc3KqS6EC7AGaWd9tD1y",
  "key32": "3FkFXzgmwTFnxpujckj17ZtWJKVt5U1Y71HZRviUgR9nyXUe3T4XxBD3ht2P6gNCJ6Megq9RrG9q55N1U5mf7Lnw",
  "key33": "uNGYkwpqyYaJiMVtS5emywCbRAe6eFusEUduWJEjG3AA2TqEE8oVuWnaXNoxfvZUa2hNNHpzFm1gEDyaTEfKu9k",
  "key34": "2eG7bbFX4GvUCj4fJEsjZpyySiF44UU3MCtrMenB1aM3sobVJJjAjbR5D6BWCZMe1odDzceyi5zB72sHaM1rpVks",
  "key35": "5q3Hd8GsgBDgeNcVi99VxUerNuwwt3Cr314HrBcsDt6dFitByfDYnSnwqFWdWMzMCC3ZoVU3dA6kJVRynkNP8B3D",
  "key36": "3sebMR5WiiWA1BwDUYXkTaQLzRWbpp5E65xNUtp3PGXNSLpkwPynGyCjs8Wo167VrkHcf1wnKwN6HhDBdHefahAn",
  "key37": "RqH8R2nQFWxPsXaHSLVmeKS7U6r2g83FEPGAnvQfJKKU26irAgiLuywwKz5w1UsC4skwzNzgmFTwnxXGEosFVfj",
  "key38": "4Pkgb8MqQkedkhmGmeFoVomMHE7Sznn4Q4X5jF3vXae4ZwTbqJczW3zq5oY5f2BMsjVYGgc3LnZLBQRqG9ru9bud"
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
