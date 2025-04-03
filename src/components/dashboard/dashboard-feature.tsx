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
    "5pA7yGB9v5M9yx5MdPxUXZ4Ed7xUwgn4WepVhRozKHNPn7RwmfRHRMsnmppxEbo4hx1ea8rxq7ZmMkjKnSwteEg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464G99cBEZEnrQiNxv7sKyMggMd6jcPraHLNSdNansAZbniarqhiqpFfux6gfrRdPmAWzA5rmh1nRg5abnQnWMkn",
  "key1": "qPZ6nLDAhdiWhPKdUTufp8szrMMjstZ3MocK9nkePZa3QV3FzUgvNvqZxXM6nXZGwvVxmei5nVAb4MiP5trSXh8",
  "key2": "3pxFrb8stxcPCTmp7Fkb92mv1r19xc567P6a8k9qwi3AHghsSyS2uh3hj3tmDmMMiuCSnmJqX2z6ZjwSRGPaCLMv",
  "key3": "4WKuuY3ggRFxtgh8phN5RVkhiQtZtre5iugvJo6er39ZvTvix6myJB9rZQayxw2835Q1ab8r3iMRwCD1kjPTHdt4",
  "key4": "3bxvhyzwgfBwU7g1Ym9yubs6p5mHt2JbySN8gEMyKr542W6mQrAHrrewDSRhgQbUfrt9gFQk8Eg2WNHeZaNYHWKp",
  "key5": "342f96Lr9rQbMFVvKwSPaPuikWNw62SEskR2Rye4GiBh7wnBTo2oBaAj6unpMASqFcHRcagMgPFDEX7pJL9evoub",
  "key6": "5DccgBmxwXzktthH1pKYwpsia1onLt2p83jFxvGsYbXain9FfyxBB6WEAiYzDXswN4jbUS8AGkq8jMboFK1JHL4A",
  "key7": "Up5GJWALhigtdoK7DD3Ke6TN6tAhaXRqZTVk8kRabKQEgsY1j3GKAHuTLFAz6fp4Mr2vKj96nn1u8tyZ8J6hrsB",
  "key8": "2wXMWdcD4YPGzjW63ouFf8UUwD4gXn5rbQi2ikHNU3gvtaLdjq3hSzWVNnJzhbBEVtVrCzbznhXfjQJs9XxgYPbV",
  "key9": "bMoyHWk8tzPRLXc5DNaARXEV2xfm6ytiGkyaJF6AzCfvzSosuGGECbf7hX2GvUs6ddBaPNZRezirKfyXJQh5w88",
  "key10": "2dkX2VyQLNTbJrpec5NB3ZHp6hSh8gNsosrwhD1M2eMh5CfXAFoLT1syHrCNGjeSuXBBST1sVFsLDx4hF55QJHRz",
  "key11": "4Eg3J7bFERed5h4Zbfpu7Fggdj2tve6Ves9iDBAK39MTBko3TrJ2qPDDe5CLUFND1yi4p6WhzHVn9UGAjTAakXyf",
  "key12": "49bp4h4djsZVqwJuzqUQ5gT2twe2xnhWMWeCpRXjjfD8ZtR9wfYMJV82XEo8mLG5oZVM9HRAmtUcb4LKzAAcDwTR",
  "key13": "53TMUxvBfV6kE7dWeeWj5tiyUUJXQCmovHCpGwEhyqvSV7WaE5JoE8Smt5qdoesy3Fias3U7ThZYZLaSVBtBubRK",
  "key14": "2QhaK1Y2qc7ciXWgqAdhv4U2DfD6ym9kAAkSLaJk5JKHSQi7cn1DmRjWfVBX3GVR7wDVSxPEgThLTpsc2ZaW3qtQ",
  "key15": "2Mm3j8NMshV4VPgLrsCi7ZCRsazKWfjo6Dp1WRFcQyBPxvR7F6VCeGZBGbTj9aiw7WM8NcbFPhZSYornMYg9adMz",
  "key16": "61jjkbjwkBebaGbiobXDJHQBMuxC25cNfPx9Pnb5TeGtrUSjq3uUHcH7PUzWWeZq1YDdB6qasqiMFWvYhLrKmdCY",
  "key17": "29hWKPA2TXBwmfahsXocYzEXDwxbAjYXZme46bJwTSghWsdv4yEuLcKgKekhQaLYeAeptd59BwaFXMqQWHAEHzeK",
  "key18": "fNxn2iWeTiqC2ooc76xSA8NWa3psQmwG3umM45poHchRzEbEaeDfr3kZQDQnXAvEeQXmTXu3LzWxGyq8vkfNH2E",
  "key19": "2wKmK7PAdzhispiYnna1ShwQ4YsqRnS19sBcjspcAR7KN5FSrjrhz2JAk89DqaFXeVKavy1gznXvqN7cFa8dkTi2",
  "key20": "MehxL1ZJq9v8eRH7SNTxHjLgiVxEdA4KEo2kmGZ7NVKwmoyPyD4JPJdHcQT6SDUj572ssb3GNeGigohDRivnMxc",
  "key21": "4b7w29ShQ9ANq9zzh3Ce23ixYHrpVoxpp5TjaBvC6WvPHQ79ZySQJztEtySLHbLEgi2zStFjVQXvpjgWbi7S3WY8",
  "key22": "3VVJ1P6aRRpTpR9z4JHvCwL7PBaEJrchEHAKVAL5UXPxbqDVrX6JQiGKBbiMYj62EsXSu2PjsbS4GFZghvPdzGnG",
  "key23": "4Vf3dLJbGrw8Eqv8GjALy1AMxFac1Yn3pfbEnA1xEHc1ZFQkniX5Dszh1sK4RKZqy5WY2iQFoxC8UiYuSFHgzqRW",
  "key24": "2LyivcbvRbK8zj1JLQ57u4LqrUCDqUjXo1xh2oZoFzvcNEvNXFHiFEJAG5Dov8aexpVFJdB2TXrUVSuYW9hwaPj9",
  "key25": "5a4M2fXemMpe5AZbXL5xbfpbnUcwkiwv8PdBXFgjMH9hrK3V5W3bNtGAofvdANDL5FQssQwi6iZJERttQxhFEidc",
  "key26": "4p63waiWEshcB98pPFiuvMXkTbvQaNCnqxARSgcvdTxh3vtZ5i2MoRoNZGiW6hrGBXn1grp6HVTW3HVMmZGvJgAs",
  "key27": "uwwYGnQ2d8yF6JpeUemH8HRzmS3KqRbULfn6Nar65BXcCGtQEUv5Mn5ZvqShgo7C2Lt35aNFpZJpgKznZ7EL84r",
  "key28": "396uu8gbMUP3PQPYKcTSekGm4WbcVF912QNX5r7ydREEAQyXRAjyNiuUZETYoqAUp6ULkK3EThJ5GhywhVLiaN3P",
  "key29": "5sL3PPfqQvPAety4x9X96X4UzTK8Tsc9UgYU8Fhrwd1jvDtUrn56NnTVyaw9tAQAR1jEvxEo2Rp7AB2nDHsVoesR",
  "key30": "2To1Dk4TV2h5UYk6yc4xqVYSBcSMbwxnPaqYt5DHvqvqzDiBm93CRw4pxd1k51uUsp1HU2Y5iEa9yo6vmden1fC8",
  "key31": "5U4VH7rAoPR5yEe9B3R36wXHhYLx4N8e1pjfLE5wjB3ER1vdDH6nQUK9Lup6b3vsMB9axjJ8CCMq5TyHAgwHcjdV",
  "key32": "36DTRGPCgBKqcv9trvQc7eJFzyoXWNAzG7XGfSRgTm4oPrthTRSc4fy6xTGCYj5GHy8o9vZGCzGmua6GkWNoJuLv",
  "key33": "5oXFfniNuY6miSnYCh2wFKZJReoqTr1dckLbygkHSwpWVbBv3KsZMVxBYbr82MtA1tBNEepuSzd4CitYsKYRTyLH",
  "key34": "PwsW3npCbQoCvCMy4ad6mg8poX49KyY4yav2j1Gg9eu55p7qFB8yBWKCQfGF483xagomCx5mFksSRqT2ueDybbx",
  "key35": "4oaM78ucMpntAaos1tevutHLofuvGvSQcLXnbg7Zo4MKi3RVsUsvmSBPiQLuynmm5aVhs3PwuWW7Qb7VTp1aFzvV",
  "key36": "jSUtjrA9XCL2KZygu5mD9SpJaCxBHWhCawogxhQ4YBm3fsmN69mq9ie522JARwwkXbdJmGnarYGaS7qfUop6nxQ",
  "key37": "2TLf2ixm6ZNXUKER77HMUkjhy2nW9Gov9HqJkiGfcgfVwcQEX7AHd4xUcPXtVoMw9aREu1xh1ZgtmiArGGzVcvU9",
  "key38": "4gzRNUFLYZnUsZvz4iq8uYAKsqySnoxkosBAHxtmdwYPFx7GqxW7oRhpkKyHTeBhGuWdERnHE6FhJZYzhJZqQe4q",
  "key39": "2MLe7wRX3EnSuwANfqauqnnX42nYz5xRbSfBrArNEvNbgZTs8UzpktfinCQNctWYSkr1zwrCTjKrfX5fGWP3nha9",
  "key40": "3KNgk3RbbtMJmsQLWCMB9m4GK1yKYY2PeCd4y8bek3cP2apBwxUCvRiYBu5EcwUVvm7ccfMxBmcpK4B66AwvttNk",
  "key41": "3jbme74dUTaPfsT9L8YJPMkuekEGAy8wNe6gCJpiTBTDV54n9U5u7BgNXHyCeKhjgnMYUPJhFXvuEF8n96qwMxG3",
  "key42": "5Q9XTMDWN3ih1vcjioVxkWemE3UXx3MfyXyWSmSg2fWRmMWtJg8G6g5qgThY1qmxdxdRrqUizDxfzVMHe9J2GGJt",
  "key43": "4qdhoGDgS8s9MiRXbeqCgd4s9ajudm57Vr6hyb7YMxB2uG4U435MK9eEExnv8yQ7Q9coxRiQ7tJvg6Bmi1KpqYRJ"
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
