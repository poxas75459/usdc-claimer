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
    "2iFPLQMUCkj6Tj7rdLoPxTCcsFc7SusRs1vgnnsnqdk6JMEnVyqAqNzFTXzq73Yd2dsKb1STdnRZ5ssUkTUyAp1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34F3Rs8Ak7r8fKvACwkSmGSydmKD2Tz3vGHPWMJnevQVoFHNt4JsTnQSwknXFSyGBUFLqzXkiuvoShGxTL1KKaub",
  "key1": "2oKxYRPJYrFBJPM1qaTJhJ6KxatNtBAdWvuTUxTy7WXCpLNwJveUs8JmhuezrHnmADsQEofRkadWNPugrxuXz9AF",
  "key2": "4U2adKN3wn37wehGQ6RLcttu2DQ6Ce1W2428Nx2FxYd1uco53fRpGY9Apwqp8F2muMg51ncVCqUU4xKAkacHfnXF",
  "key3": "2ffUFZMbBkEAji3dQMQCyoUA47VWmH1HjJrF7eXj35tZpLUrCpUd8A8aCFYZD2SH53yVrkfr49CeW3vFnNfSz5EN",
  "key4": "4AUVv6kqdETDfR3QPinH8W9Tdxsq1rUmSLxdFfMbivarNbYVhKNprVvo2JC2wRYbqeq7Hi8jj2wuEeAoWSZVVjDp",
  "key5": "5UE1bV7Lrec3rKfhM9TFgniHtCTatNUueNVnNPdh59mstz5zNZJx1NCDwZtMGsi4hGZAKJdbjrE4mAzvPaAztVg",
  "key6": "3xkhAVeJ4KJd2g6M5QSURxdkzGZQHWXBTMghnTPXNGUU86JezAgnQdFuPwuk4C9NAFBoijXtrXvYJPKp9XPLo5YG",
  "key7": "5pGqEW6iY7jxny3Hz6CeEt4mbMSw4mrJvMWRWv6mnzzfzUMDbXWG4ZVBxbzDzD1B4VW8wNhkcRQ2dd62s8rp4yon",
  "key8": "tvRK66ZF6MB5g5vB6rQtYXAazKEtpS5HakJ4kbP1xwsXEDenQaB1TUHmqjwAJH2DZPonxrudy75chJpnNbjGjna",
  "key9": "QstSWHCHgQcne6acoYECXbU9HzKTby1oErCYmDCorRpigdXB5ytKpRexqJCbbA7snTwi4bJvdsTW1DFjLdehrW4",
  "key10": "vsWkQN1ydj9YvUB4PYMa13yKy5YFbkXXKZ8Khj6Aq7boUm5KyPzP8MjLQD3buqvfcaMiMe73WE9oK8hrxc6qxTG",
  "key11": "GWWLVxBwwA664v7q8rJRhhL2r7FqGd3uYKDNoMXryDnkErFL1YHMZ28Hx7PdRf7eWHRLW5mB2ynHdh9rWztcexv",
  "key12": "tmfH8sinooYwjoP6fFT9xZSp2Xwz1qb12sN9rzgrmFgj6na4Y8Li24rHmVBbgzHEMwxDL5x9eJ2oJiZhzUjbunQ",
  "key13": "5svxWM2qjdfP5vGeG78ic9Mn4kbKNRFVuuoTcAE1LDcTvG7hcBd9FJ8s2qodffS8r1VaRZ8ZRkeA7idD3YtTzqai",
  "key14": "2jfya5FUoJUQkBBYtsuHWTfvxPmyF4qxTCHxFVDsKSuuZqtcB5kRQwazCJVB5jGVnTMT6ubrWbtxkUvy7a59NrpC",
  "key15": "KZhLCRHeGgyP2LujeyxSKNJuTTsHW4Roa8RSFpf6Htq6W21W3JG2nG56GrSVSVpFSaWDsqV6VmMo4cawRaLqQCi",
  "key16": "4T9xLZS6ry6fZY6HzvbFkcjYEQy3Q74qFVgHF6BFJ2yKq4AsNjgqwdhZv3czvmsYWL7kcbDkNUnNUwvknpNquG3y",
  "key17": "3jX29ThMZhF6qCo1imB2SC6WaF3K9GJ9PyZxPuDffHSV9E3qjcxUWQPvatbBMr7rNvqnipk4MvWNW85H4fqrA8vD",
  "key18": "4r7rmhaeBHSxJr1iMiu7yp3kiC6mXz6n7DsJHHeV4Kj2xUUr9NVCF9r9sjqhJe9tzArRxVkA3BM4hWJSjLU9bwpJ",
  "key19": "2QDsqUTWzsF9kJzPGXHwNxRMp2mRmx3Ddc5YP5gRxsGPYeGsf5BXM2kafaZxTwHuq1y7dZhvKimnfp16vwbUyZfD",
  "key20": "3cekps8hyAjmwKyqA9NUjYdDDn5Kxq3rnuvSZXVTLCgLKmQ4YzerzuMkUcwBCyxWd5YBRgHUSoP5seqxAPQbT9SE",
  "key21": "3Wk7RQ6ESqQJU8XeLm6LQdYNaBohbevBX1N8wZDUCBBkxgco43Qbd3BJ8G6oaaSD92yAR4onWRmv6LPniSxFYa6a",
  "key22": "5LmgkKh9ZhcNcsxJfkuUojXuRi3BwUwiXgMHLEoQJxvCX1tYhc3X9tD81AhgbLXs8pMGvmGkpxzTWkxr3XGFHnsA",
  "key23": "CxJBUe5ogjZKEGoNTZiiZJPBshqFLSpQAqW278966wqMKU9hHbS2ZwQEcyUixEH25Tj9n9XT49YVTcButu2RBTK",
  "key24": "5Xder2P5RE91bQVBrMgapa7iapMmU2x8K4SxjcJLHG8CvE843BPqnmotPMMoS4fvGqWKypA7Y3ZvoyVXNtyJ9yzM",
  "key25": "31dmzXchRHFb6wotTG3WFBC3H59m9zPE8dohyrugB2Wv5vSnchBoCSK3tWft5H27CsLQ96PFkyHf1Na38ZhyrJse",
  "key26": "5TBSCSzhz2ZY83rj4eD7Fwsn9G4Fd8T1RxgYas8Z4tf2UZ6vuDk1penXmFbsTHAT2Choy9EPbm7Spgqt4v9ofRc2",
  "key27": "2oxKDBcc3EB9JMSsg7iGxtVjFz24FmrBh11eX8sidbQHWy63B3SQdkiq6kA4VEDugQb6ycxFRaXq21ssLBsisW3p",
  "key28": "hKnNkp2DXea96JqHQanoSyTHVQGJ6NuHLwzShvNe7bj7oq7VVKrctTuBVpoK8LgcZRbFtUBYZQL4agx2tNkUaR9",
  "key29": "2JskNVMqYvm1BVvX3tQ79aQAFXP9nmoW7GuCFUcyEKb6EvtttLMjfmMB11fQHeipkrXF4DModrWWtfvbT4LyyEa1",
  "key30": "4puN5NcdqRs1GhNn4h1XuvqAoT1tdrjQTyXdeo7hDpfjXZrWskGpRQA1h7NAkaaoCnyA36RQt2qbaNU8gYTddtZ6",
  "key31": "wkjLHnMGMYL3pRaDA99Zmicfs7Jdt8HwL1wfLay3cjYYt67yBUoqSmtB2WNHmCFNhX3hkL8QUGo9K9w8wdTWzXU",
  "key32": "5WmLmivLkWbS7vQou5Ls42tpA4ep89zjtv4y3xffPRkt2uYQPFedwRwUuBcLWvgQAsW8hNa8c9sDN8AsxmZ6fFsJ",
  "key33": "3LA1mghZ8G82gs7SbCXSndLWVXkLtfp7hST9xcsRABVq5N3qg1z4mkuENR2Z93x9ouC8U3ZrvGHE38espQW16QZP",
  "key34": "2osrW6145YWgrCRbr6KWoEoLnsJxS9GktDZ17rF2uSkapk79JWXjwn4hVeLEGioxPRvJ3dkCsX9eFBMGPwkv312e",
  "key35": "Dha6wPUYdzTLL5rsuWEze4Uh3VkJeXXugTg5pQgmFvSYD4dtmDHe39DrxQfVe5hEpihzVHwAtteZCKUZvD6Tr7B",
  "key36": "3c5qd6EkVcjt3o25Gm4JofPFeNfJFL1BWxKBf7uBPbcq5rPMXgKFG2zmWNasQqgkdvsEejBX89Y3bFqNgYzxUSeE",
  "key37": "2LTLAaiyC4KGYKwVAUhFHcybZWvVyhyfDDTJLCNTWJZQ8w4dnK7eDVD5XpkJhUtbAh2bQ2MipaVob6qKrRvYtCeP",
  "key38": "WTD1hSwF3NGNDKzDGYybkQVecUchDfQRDWtDMb15qwBjxFZfsoxNpVJQytBdkDqpMQSrN1M3Ft4D5NmQ1p27StG",
  "key39": "5D4GntpaPbfMvADmQV8fDbaeZ3WPm7YodyVWTwuXbUJTCX3BtrPD6inPSQgNrCpsMPbRymbN2sT8xiPMC7wc5bMF",
  "key40": "5PJmdAnK5MceHwQuv6QyDzNJkTo5TXJsQ8NSy3ZtXdSsHb8P7SXKqcKKmoSv1VSfWDWJuZ7HvYr1JMNmNAhkvz8N",
  "key41": "3mxGj58vSzU2PSsXmgRcVp6KBJ5fQF8hsTj8yE9eS8ywG1EEKxTK3vYNZhmyGi7jMfxei1ncFyrPvtbwbAumK4J4",
  "key42": "5FHLZB7bJRY5DeikFDk56N9hXmcuJSvpSoKLU1SAn2GtrUurhaCcykifMXNxiQ2dvm9Dk2Tz5Lv7c1stSEgxXR1o",
  "key43": "3CFj1ktSkv2AGuJ5kSrGWgD7xRPWEYko6cYXxbnv3cZBazktPiqkrVSH6HhnruJzEnHkj2ExNrg1XKgKjeBkx1rv",
  "key44": "3XuWu4AwigDdhE9iiC4RMoE7UXL37FT8cWHBeuGSC5aoCMPRPnLVeVouXzcqAQUKp6zmzVzucZrpf5yv77bWKNto",
  "key45": "c3QUzs6tn2YgKLmQAEZf9N26zE34eKsygFHh61AD1cqDaMQyui8CUFMn9rbys24pw4syK92Az2HjNr4AXbFkEpa",
  "key46": "3gsUUizCPFhxgou4Ggwe5AhLoZHr9JBjf9iW9uSTWiE151i9RVe1eUsFRNFQNiFKUTmGX4NNb3YrsWDVBh6vXaTN"
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
