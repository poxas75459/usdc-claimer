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
    "3pMTmeYmD6k6bSe34N8KaZHTdDW8gwVgg7hvduvR3epubyoPwZpgX9xBBonBbSJ4hMpQUSJCpQ8mUTrQaYrMizvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eS6QwEQuyj2tUKDZheYtdG3UzALZvd2JAeLRxrccrfgMw5s6rp61NW9zkYwWhy5VsFAGS22biqLjEjBGZzuhGcf",
  "key1": "61JosphD7xmXA5Bs3TWY68g4M8QUjqWnfdHqJBvsE8nEcb4bA2uhaoMcVdQJTcsiPXKhvyQYieiUeLE1dCjoSJxw",
  "key2": "2Nj68UF3CxKSyjcn9FQ1mQH1GdpBvPXxiPyQ6F3qVkUbFP7SZBuunFhEGZkrzxyRxH9GBcSNSMcR7tNXYeGW68qs",
  "key3": "5wnu7HgUi3Hmw4vx82yLfpYQBLSZxbocbkZL4tsnuz7zv2PwGuMCgdaBWHvZQFbkaWWEFUSHiMa3ZWmJULaJtUJu",
  "key4": "3v6Sz3sxgkS8gfQdKuFzKHXA2CUDSWU7pMTm1dajRE8hcNq8qvFfxLgBFjdtV6RHzKr93Jcp6J9gmzPBaLqqNq6z",
  "key5": "45zEgGoHtd4hdt6HXcRESw88gYmdbUmx87ds3CjEswMYHov7Bq4RC5p2wAMyzKBziNFcU2xkbpjFEguZEXHTaKc7",
  "key6": "ep9zeviUvZVMoFX63ZY4WKB72EtomwXT5wqAJ7Kf9vkRAhRkkFu5Bi8zo8QEr81VjKLNdpH3YUsUhqvmSFdiqi1",
  "key7": "47eRT9FW3TMGC69g7bBUaspGvuMQox14NQwMatEPSGGbrAzVUF6S2u39fhHEmUGWZQYEWcAhpeBYxrRb4P1CafLg",
  "key8": "5WAAVcpME3yapVNKqfVMpqY5qfZN5NC6sqCWjR2SQmECXipXXafCRJCvcAf9f8HGNMvTdb4Td8vW8jrqTPdj1qeT",
  "key9": "5wTpejjuPhfNpEVXhFxxM16vafoUaFucgUPWhuM8Lwwd2M3Wuri5BL46S3mq7KwWcbnNX2oRtrcvgDZcwkZBqbwz",
  "key10": "4e1Eu9GroduRyt2k6hktWgFaXV38Tv8WEma2YjXazqxMmAd9i3Y626mMZkkZQKtiFSu9KKxXmLjKCZwhUwzk72nM",
  "key11": "3qVSArPWsam3mWB5GLSswwccMwAnyrn35adHVBKC2jHt5XS9rievVCL8ysiMeJd4WQ2Jsc1NMicF7ceAbCEgJHip",
  "key12": "38Y9UK6nuJ72hWWySKG4YN33GJ3z4J9q4i3URG7KKiKicXPpcPgnpTgijofYCxUnXBMV1d3qEBFCMY1wLajstS6n",
  "key13": "4VJn9Y4Tzish2LQGXNG7PKr4EFfH8xiDd4gNiMxHP7X5kNQPrU8JZ2EeDmbM8Z3UvLA1ZFJxdyguM9gJhsZd1d4x",
  "key14": "t9U46tiePntZZb6QdPN1wmF8uQYEAhB8TXRwbquG81WhV7EhRcFMMNm1mA5o3VQEJM2ZCrTgyq86cM38oBrWx1o",
  "key15": "2KM354Co4zByWYREhY5b8fRwGbST1b9dnDoehRtWPeDXmwyfAum76rtBBi2ntyJpnS6dQxwdBFvDshcy8929jeCR",
  "key16": "oJ1sAVcpea6qFXCYmxx1pUoSatk32FpS3ymb7diGHNWYye38LgX6WkXE2WhFqGnVXJPqWWJ4Q6kJxLFBfTCqbRc",
  "key17": "T6DZsPpRPAwLjUk1qF4GWGNYQpyWyYUG1vmYLPZgRUzbmtv6vrNfh7gXp8sfhCaCRefCbTjQpMurkix1uK56im6",
  "key18": "2GDtNMjJW8T2jXL63oJZmAv4k1H5yWFkzH1kjruG29vWLX5FpB7bn9DNCwES61s2WizMU4E6TyxnHw8LxFphPA3v",
  "key19": "ygT6sGpdjB3krZuUQrTqyMYKNCmLv17RsKQEr69ttjJBBri9FGxCpZmgimgbzf84nwFDiXRdd36bsAV5xjz4H1i",
  "key20": "4ZrDTGbwtu2RJEvBNZTNzifjc6mfsHQ9sfysBHncUVVQtGo8VsBFzBSTJU2yonyi7F2XAHYPoixewCvHGsXn5xme",
  "key21": "WUYxHQK7CAu2wA6tuRdD9AxB3ggUQmHotAQGhaBXWQTHhftoxeWWAuk5mHXrCd4HbTsGFt4NSLnDvTgPwTRLFAN",
  "key22": "thSg9RC2rqs8qJM7GfhYAKxsBngG4F56PyhAYoFMjjcS62dkTApxuDYUYHE3yscFcMNgDV4hMZdSJQ3TapDnU46",
  "key23": "8X2ZLenVGQD76rStBdp3xaidnUWS3zdM9L1ZuDYQo88wVYAmLkznTinmYeqdiakbUaXMXBFE8moHAixHhVLEf6W",
  "key24": "4SabtNRgDWtNKN2ib1gnWH7Ew1ZPKkNFDsL3bmZyYRK3hzeNYT2aFW66p2F8GWMnqnja1Rn8W1thWTj5BqnZGu2N",
  "key25": "2WBdpo2WYtUPRVQtH1fNfUshEB7qZKZ7xTsnp38m4mWMAQzdCsvHQCikD3GwjQtjtSrWtNVjnc3bQBqaLr3g4xku",
  "key26": "jCzmVwSHJcwdLnNcucbsB4iKMJKrDeiu5fh4uviu1sxooGJFhiwdHg18qzipuWKLMFkimyRBZQjqJz57hP9d7th",
  "key27": "4QPRTvoHerCREMmQmForoPJWd2bmZbNAc9Y3i8ue156Zeu4G5gWoAftjRU55zttqM5RUQotB2B1bvmE22P5Ay5RG",
  "key28": "36sD3YuNSWYKVYYt84U3HYbEgvNZDwghMTH8fukqeRygJHAW3xJyiM8sjN3HxTtAjQcVVzQjdcYZF4BC2SV8ndsG",
  "key29": "35MuuXY9zQ7twppCEFLRzApBqm3XLysgrsTFTe8V6zLSZ1XZpHEWH1TooN3oNhdGR6BZygBUA69SKuvgJJTN1cn7",
  "key30": "ZZzMFpjBkLGBG7zJRN7o7smiSnJ3FES6PVFhDFUuihsxCRRauAGJMLn1ze49QYq3X5KFnykrXNJPbLP7fZeAomX",
  "key31": "5J4Z1ZV2FaKH7tRC54ZJ6DVtvbLL2N43HpqVmjmeHzcotsCosyPutmw1Xg46kgLJTUvBYAw6NUiVJBTaeZgwzaCK",
  "key32": "2zzM6S2SbxTMU5YyctuKEsmaGqXVKvyRmUMogds3ia1pTYKgZ6f1HxMo18fLnDJ8TRemiRGAtonTr8mxnvYT1cNX",
  "key33": "3HTkmCYf8PLLuGBZb7NJfyyjkp6KYofwNvEXAvuZWQ2oDCAEbpRfhmYsKCnaERGtrEHbUiW3ChXmAV8EPBNfQHnC",
  "key34": "4Q4hEXg261L9s9xbH9wS2PQ3HKkAvEDHzmeeYQH9cVcDYwwLGodiCjkUmoty5xqebmusrtcK6M3PC1tSFeD9fPTT",
  "key35": "3eWJdeCARwBDScJLd1o5P1jrmy4dYsFUZjGbtu6W4Q4ERifRy7kWMuPutxQKcVTwkusBP9FxNkAQsAM6eApNP9iY",
  "key36": "uCB4tZ378KoqWjpN4nQiUmgfiwAX73gZ1RRUr7Z1WsPipoUTikzSMaNkTUj6FkcnFAGcHusN72JQskYxJEwkQy5",
  "key37": "M6MM58wj1HM922UfQNwSBbChZ8sqvUmLWyd4NE7XnYvy1grNeUj8GxLTRSZKD9LonkSB6T8cUDD5nQcsDoDMej8",
  "key38": "2a9Yqar3bUuU23o7oURqDjtDwqmhtj89P2FemMGiC521avukWBo6QQ6oSQ5Nv1C8B9joJCN4fN6YoZFNkaLhRg9k",
  "key39": "Wgzth5SaqPcMgdRbc2YrTTpLbo1iryj8g9jik1nazZN4LvUNa2pPmSSMJSZ8uhL8T2BUegJ8CgcmaCEfPQXJmnM",
  "key40": "5vdSDUAcbETkC3FY64d4aajkhDUfS5hw4pzr2xr5QpcqgLJykSQQ9PXcFSn8VBEkXpeA7KkTydWw9KmSvAxXqfjB",
  "key41": "5peCQNUmBGdMkaigCmyo2D56nbmPgvQV4bFE9CBs7dHh7rLC5jQn4FW18ws8GLtwBwqsa5V3XS2h5zosWBaoa2Qh",
  "key42": "KZFguYtzJqC5LedimgYL3kTAewuZ3MgxpZKPwNAtf1mEb5araoEqLg8fqpJEhjMCVfJ2gfD8fr535iKYhzigPaW",
  "key43": "3UXmebrWeDn3HcxFaEvpMxKEYBErsAsN8ERQBMr2PHZeEfHkduDWyvrh9mQzsd2HmwKapcxDVwE3wfBCRRUn2xxV",
  "key44": "5KLCCoZgBL4jKP6ob79eGnqFAyddKPj22hL58S5KgJzJKbjxBDxEvWoW2dkfgNAPB8T6zfFUSuRFmFmaZ9nDbqMm",
  "key45": "4hD4LcBDfGU1wodZGdYWoV4NBZr3f7Q4pH9Do1qUU6ehvXg1vfMnQi11gwBZTm19f81Dsg9pUh6kd6VhfJtTvu6n",
  "key46": "gGcTom2V3xiEHVBQN7ov5J7RftQhx6MA7kofWUiHz9ycoEaYdJC3c57THs3fFEJkFDgoq4SvZL2mRNJwEnwDpVZ"
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
