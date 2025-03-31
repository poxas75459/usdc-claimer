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
    "5oD7tFccbMNP1efPC7c16gTF9HNfwgX9vD2M2BUe4EpaavxPLd8VJ1GPVtFAzRmZCzLfCKoXE3LCj4RUo1nKojt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yhv1kvc2awPjTNrySaccHVPNV6QtAGcNnx4izZSZ5Sk4WbRiUzzi3D4aNvvd8Y3bEDh4aMH9DeaF6n5QHjjHCQC",
  "key1": "3XbkXCDhKhZNUj8DXdVkQ2aqr7YP7JwJziSvA8s1rCJL6uRjte5unoopCcFQVB1ttT3wFygy7AR42HLiBCoMDmsk",
  "key2": "2tKHBE2PNmJVm6ohjfworA7dALX2sHqgQMZp3nnGeUBEM6Vs9P9aWv3wBWMCB6GD1GfUv214zdSmNQREgTKSdfpN",
  "key3": "4wsqNeHgeqzvtVzM2tcKmaH1qjJCbJNeG4jk5Goi8GG8Pkge2QYzkwvmDe4edZtABsxQ1ZPbmoc1JBcKmzjXsUzA",
  "key4": "2p4LKMrEoT8JJZeuUkY1a6zev2qKrodN5jCZgrdfCpVEBM61wpmMspkfKhTD15Vv5GfVcHZfNZArppz9eoCwZByh",
  "key5": "4eZe1g3pcEEgzXSXX5FT6hTVmvQH4ZUnbEYBF3atCvhrwxrTKDoqkYjGPWg1R2VLBxsLCaS4gNfpzbd6PgwSj1cs",
  "key6": "23FLVUDENz1AtxwzFkHFeyTAk5Y8QQfSAQX4MCeSjnesNrrmBEL55CgYVALGfZGEu5yta2mBRSEjcnqQ2R3iEJWa",
  "key7": "2fuZmgWMSvvMBSMR8piK2NyLfHs2FjPszJdJ2FKHhoCe3qzR3QsE1MnSzwzDVkeHLuWueWSn566KzrCEpeFv3u8L",
  "key8": "485rmV2uUQnAhXLfPdzEmsXBR8MdxKUjrtK2zuM1qo5Ms2ZJ3HRkmYt5U8MycsxMU7Cf8rwq1absLHRYF6JHwnU2",
  "key9": "3qRw5U4PRUzStGqixQCmtU5QjT8UwmomxjbCiUdaGAkQot8xjLBZKchGKNXQ1tNZLLtH7mhayYZYoTWK2tCYz3JH",
  "key10": "4bmyaJot288dJWnuLLh5gwAsmB7JmMVrpLoy2uqr2Hw5cSbHBPonyyJCJyRGXaHhWCg9noKsFs8hy92hsU6m4JJV",
  "key11": "3D8QcePSdg1AdeWSc1BGT8xyCJpugTN73yqnAubsCDKm88vTtXMc8mAbujJWfRqiP4dGSuudT8bjXWGbZrvz34jc",
  "key12": "4LThjjKCG91Fr8frsvPJ7qb2kcvBY2CYtjiMHneUKPWhq6Zc7oyzaxvjzicSPBCTgjFUt6ZqjqbAYpRKT94LbgJx",
  "key13": "32x8EC4c9tvrvA8iGwNPyLnPknXd4ZYmCPMZFufuCZYJYDG6DMEeNywSB8K6HKivUTfp3jWUFdjU88vVSvXxisdS",
  "key14": "2486c7sRn9zkDu1vSMLzaAhUCBkjWZ9h2SXTjpP1CF2kH8x3G931fHGD57ULDwqNKWrKyu7P9W7gdrguDmzuthzd",
  "key15": "4UYv2f1kbXMA3dGwxwebjbvJBXEnsABa8RAkgFpXjU8EMXn27DEpZRbnADqmNhpPSMccAWFFeGgpS3pTgXQrzC1e",
  "key16": "5gtzkmmxhiH1XHe7RZQ7uUU8Ly74G3Wa2ZmmUbS1rDhwD9rkNPchF92nCxLegHk9AA9BiRECDG4f4Wqjsp7j8L8",
  "key17": "PQRAHrX1NwvaW91X4kku3upx2Jfa4GDqscSzfnyjt6QJgcYihoxmXqmoD6oyHyJGqRciDxvZaLmnXQYtw8Pxpzt",
  "key18": "3hvsoQp5AwuX4EdzLeHRKk9S8rEdaniaWLv7xqrSzjejUZX24SVYEkNbTLt234f5erRtL9vUzppss52SY43jaFpU",
  "key19": "5MzGW6SF4joja6fVyVazh9tEMVfPDnyj4nRYQf9iEDE4KXs6eUJ3vFAoY823yvJCjWKbrY7VDysVE3mdU6ZmjwV7",
  "key20": "4rHaeuxjnihhbGYDje6d5CWSAqSvqgEm8u6zHmzGN46Xu3kKeWjZDS3J4X1xSQGAtFAKigfGPSSv4rWPV7WgfiFF",
  "key21": "2mF3fLKMaQGMygtQhe9cfDvSYtvh119HSoPs5YJZyGhfhM1CM1K7sSgQhxGZAbLofJiE88KHezeom6Cm73wrZ2A",
  "key22": "EBx7QUNXhTtPHwRzqdQEzvADHmgp2hFf73usRMAcujjYVpo6Eb63xkxMcFCXFSUc4auScjaV9JpA1LbmpoJiyDd",
  "key23": "2w7pgtVGsqAhGtGVVMUt1BptXghad8dD3wEgbV6aDFrwfQHTz2nHJ5D9ux8bCFZo8grsTx5vwzaf74YybHZuGJUu",
  "key24": "3f25kgXNhBk7ie8HQk6tfbfsJe642ZqC7Q2W2HkuDJNUMd1wQrHbpAx2DP5FToTZJM1CbYT21vLczyJhZABjx9c7",
  "key25": "3phU8d2b1FTdpNgBkzKCxcCELBzxQQVxNU2jXRwDuDgheevvoQ11uEGJcgNVjY4STRysPf7xsU23tQVKLFTJqrwP",
  "key26": "xP9aTM4CvvyNcA6bzQzPC1efKYKiND3hCic2xSZAt8myNCxKiiZ7SXfGrorzNFY4KGNaQGC1mYwTToMG343QKmP",
  "key27": "5vaXiqiUEXujiBfrDyy4tvn2kZ1CaX9Wkfx2zmgX2xH4jmc1veX2mm698Z3GkfkPqMUofnakpHHgRpc8LQNMT9ZN",
  "key28": "59suCoeDFwQZC5e34a6YDRwuWnVczUnWCFar89CQNhFMxvSmXo1ccEVfhY82nYgcPrJgcyjBUs2aELDZSTgekzZb",
  "key29": "23YSn5SziYbtbREPUqjVMnk1oDguZqatskiUENhJf34ThtpcBESf73dPU3X8BW7rNiXpnDYQWrZ3EjfdvxxME9yS",
  "key30": "4q8NLnVsg7tvjqjk9ZvWv7iJAnSYiAyz1ffjYryijpBJs6FkDhHPcN8pTetd6v5f7TnvLAF2hUHUnGGRHZtDm7Qx",
  "key31": "4CQx2kN8ZqVN8VjKByGiZAQws8TePJsRZFnwr42EQiEu7pg6pGYyvbw1jrvw9kGg8kkoSgh6Up2knaNPr5DVcNpZ",
  "key32": "59Jv4Q7jzpwJJt4zG4ngSH8mT5LrCAB5urghEZkvWcDJY8K9vVFov7wDRXAbgc2CpEfyjWP4QmUPNZDAGPC6yXBv",
  "key33": "36ziz5HZBGRU7q3ByXRwqFQzq2bNnHZGyvKGhVeVg86zHaDSs2iX1odrkragtjACzcoPV21cVRyHjuFcTTy5VbbU",
  "key34": "5LuUQjst5BiQFiFeDQGsFPyuYaRYJAANbc6NU9wXqWdYpAuJJq8pe6v6wVXqKPw6nNhmmy4f45VopvYM6QEjL2S9",
  "key35": "2tocJmYjw2B3ucxcbq46g5MzJQjSg9Dfg27FGvzteC6ETk26yJSaWtRWL3xHLJrAa6VbcsPocCVcjPrSUy5amgXP",
  "key36": "4pZSwmbbeDoYZYgYuxf6FBUr5nJJ7Ryn6WiF4uAK5ZywqJyHHcqwwXgUQCmC5E4u6tk6CWvdwtWYT3YFLcnxiEX8",
  "key37": "3kBKBThQeZJpTVbEXfN3ewFK6URxYVQRvmzzDZH1AhmAyfttN4e89WD7k2C9X8G6r9ffqdkGWsaYMpf8FcsMxPRH",
  "key38": "2MWGmE4rwQ8ojEVoEgXYUG8YutyWzjhhw3sYAhxmwWFY8kXgHUYWYWXdtuSJjAmpVegbDr3jm3ecNffVUhzzrCq6",
  "key39": "iu1Ekt29ZyUMPPWinwtmrMQQoxK4Bas61ehf8E85i2pEcq1wysPybhZG4VDoedfdZbYTDfMCLdiZFjtMY1bZ2B7",
  "key40": "Q6wz2aez5BXMby3YRVKt8VjsNDyQoFDrF9oLHLqys4xqcXejsB4smT3fzE8fSdZorbMNqc523tRrLckGCaspuuq",
  "key41": "2ASd9yDmS1JoTPEqVN8XFSLmFY6fH11Bt6gnVksNpYDnF2hyZ2MQ3ug6bhKpZEKi66tGzUJEHsCLUR3kYh2c6TQX"
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
