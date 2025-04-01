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
    "3DKJQX1ZsZaJLc3dD7dDoknzTgQyUwoGU7puXTkJZSfVzXzzgAV7d57k7KVYQkj4skLMewxu3xPW9RjfDTKvskFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39o3uyP4qZ9sGhsiQcDLhiYSvq2Lsq5yMfWCcVP86a2igc5g82dEFgKcNrSP6BoyM9NMuxwCf2bgF5um7zgt7wWg",
  "key1": "61HVV9moyqSBQQXoPBJLNUzVe6YpgUmyewYLRTneGPfm2yR3HM9PinXqrXgxqM6n4Y1VnjhsZpdFmU676xRxw7kS",
  "key2": "5WDY6ghtTNGcXwwkC3vaP3nXsf2jaa5anhcAcd6LL18KZUELyoJvtqFR6DHayuyd5jBDr5t6tC6ykR736aSuPceS",
  "key3": "2GVg4BuNz8mjqftX1hV16u3C8NuHcMxTzjRMe9nDcxW5GC1jnAFWqVyNhiKZn7E2jsMSpi4FaB8g6QFjnvacwNs8",
  "key4": "5paSQ1kF77xvnfqqBPidEzTEYhZTXS4eSWCAzwvFCnzbTsJ2gSDbsHv5Jk9kwRaQhiS4SQ3Ce9ocxBKsCZvppzVm",
  "key5": "4QhqwpWG6sPYQofEFzfSAdt7RFYmNqCYFCeQYktcbhYpKsU2VAYjtMKdW9QzdibTsaLckp6uRCEvqfHXNH1Nc7ym",
  "key6": "2T9e7Dt3eWuoAGU5EZ8PxZ4DXjx2BDnnLnT8EeAhHryZvaUyaEzHEfrBERVpaFoqXtcDMptptPDaAYdUt6as3YGe",
  "key7": "XQH3pt3tZ81yaYdFhuVCLqVJK7izWeWb8md7eZfQUJYAVK8iMQcM7kvxS6ACW7LTNa473nzZECg6QGjAGjq2KZP",
  "key8": "5AdZUUrL6dUj7uQSayuMY5J4G4ZpRw7Wh8FSGDMjLLryYFDTcEW52W6ngqHZEkG7BN9qSoHora5bb1kJTFz9GCG2",
  "key9": "3t5TaFmESh5tPLGdcuxVph4hth4CM5H5RHV1FfPzESQYd1KyQiTrrdFcgsy9VGLQEa7oxyfbusKFzHb7oKrP5sCt",
  "key10": "2wDDd3vTMw7EAMusaoLDwK8XcEgUQBPPZgwUi7XPsA3btgVhdwm6LSabK6vRefAwoe24JD3Li8AP1QboqqR84VTU",
  "key11": "5NmP9ZoBAnkUhshSTyN9BRP2BmBjDntwu7jSZM3pS2UUTYBfkKZkxGUnURuDJHrog3vtBnZT8q79dzcgwT4omGqS",
  "key12": "51s6JTi7N3A7epyb9Ma8fGmKK4ftQinViihcnQg8QtbTT2UaWkaPofUbVp92Drz74YDQ18f7TMThdSb5xfQAzRF1",
  "key13": "2k5jjCK6iHCi6VrctZ3zdQPxqtMSLucmiVv4HmWZkJtoJhMvBeWH32EoDUFgMXD3ANMnbGy4JVK6DDSDu2vR8mRb",
  "key14": "5CLjinmQeoovdkmmspfSjMUQ2mpSALwLidqDQA2fjn9E1GYLHr6JNACycSKfSK4Q2cH3gYdGSyGs3fYgq4UQ3tWY",
  "key15": "3PvQX3KVLioUBZKEDzGh39rpu71QcCfmgx6mhveruKmyJjPWkihsdePaqHufMrLtLKydW6CVVJMZV3NTYG2dEhvv",
  "key16": "5kCXozXtVcy8N2TJ8JcoLh7RAKRVoYE8fbsfBuNpBBdDZpn6TnaXzLaj3Yye6h2DvJLRQRhYAXeTYMEXD5n777wu",
  "key17": "2VUij5aRKrKP4qUFrgxRN88DUDD5NKx6b2wKT9jaCjtqgdCFV4mRsbU8F64jxUvrVVcPMuVZDtpYgd4GcHzB2CqK",
  "key18": "25hzFbUwqEevQUgjFUp35inAdd5M2vPEoWfCqRgKRCh9iQWG6bzntkzUVM5DEu4Gb1U22Jk82qVaqUJMt1vQfM3N",
  "key19": "48Z8bf9f9SYNkiAKDMrft1izmGvSLnYKbM4qkFKApgTGGyZhFtGgL6m4PNk7Lqgnxqr9zb5Ko5VwC7BesE6e1ZnP",
  "key20": "4iv6CGbXSYSd3NRAFVaK84m7iAoqaFkFtGjDUgWYWeNFbP7BUrbzfMQC6gSRGypvzke2o54Jb8YYtBfFL1dhFGmh",
  "key21": "47LSPEDyFhmx3AYKPx18aUnS4Yoyp6RE46z7WxYadEwn5c7HD9JmdR98gtipPpG8sZE5Q5HQrQi7PWd9dFh7hkGJ",
  "key22": "2pA4KPNi5jMroVRZV7NwRzt2BQNLFSCoMowTDu9rmPjywVDeVK6GQxUwcYZu5deEdk27e5RJHQ7jEazaENZao1Fq",
  "key23": "3As3F11pyncTqHf3Pi7tx6yUenaioji9QorBCfcP8K1hNxfKVamvG3P3YzdDpfAgGyAQuw4hnHJvR3Dmzbsb6LoJ",
  "key24": "4qhwNjPtESgX6KH8z9DTmuBRXG4NTbXF34iBxSx9iQpBFJSVvq2we5w7pSj3Qk3DXZngp81JrXFkwkoNGWDbxqGx",
  "key25": "3cxjocebYiyzE7XrrgGjGFva9XSZDeQE92hwvH4h1aeUfZrSAQX399eAetFaUF2z9UGo4PAeFwnfq1B1jzGExRXo",
  "key26": "668Z3WWjrxykZZXzeXaWb6zhKcbeYvwHoVFxGj36Rh35HZkqKBVBMHjFuaBBz1XDQk86rrDZWttcPHTjiG3hWvRS",
  "key27": "56Hs9kMKJfuPjjomA5NpmsWqBppXcGZkPAqm4AD6DtWY8XBEP8QSx4U5XMh1xvgT6iRoM8tt8TeJeANT4zeMW941",
  "key28": "3CrM1pthTSbEpjrkJxNzjeT1h3FfNSHq5xx8TPqbXd2euSDvY3PqQh4xYrQnNo7gKNPHLYVYWdjLVBXju83UqLmQ",
  "key29": "23QE61PQqSLzCRkuyKYmR4DTyLRzQrvJD7hzniK6gZdqBPQuUccmKQDUhbvd2FXfWath3XctCT5ZsdmJn3ecMYsa",
  "key30": "59W4kbtWyAS87J4iWtfGhha3ykGyo4YRDA31XPVsxTpGt5XQV8Sp7XGc8iqFTmQoEgiyhGyqTmkdWgnsdVP71Zmh",
  "key31": "2k7NkEAiGV21q1mYP5dJw9vRKsrQN6U8CwDdQFsSbyNguzDs6KtA8KzUqK4DZqdgGu1G3CPyHPbGh5PqrL1ERoVd",
  "key32": "4psgqs96pt45k5pnBifGhQ9QtigN47tU1Ja2y3PDJonDBraYURJAnCsPFfMDivEnHRnCewUdfjEd9iAUmGSW7ZaP",
  "key33": "tv4uupJ6Jp1NP1wWDGbkNXf1RLY5AiEDMthGicrmn2yvsxeeG4kKK4kVj28CudXzpqVhiQUSZ7dFxt11PB4vQNH",
  "key34": "3ojzG6jdrkNbrMvWZv9VDYvQrZJc9FwaJNEnA1TrsctGk9AECedLUvKTn8fxQMMfF9cC7JQeMvX8Qq7rSsfahT8Q",
  "key35": "2kTGu5PGmZ2rZTshDeV5rwGKtyLRAxJWyxEGh5SAbuaBzeSD7vLpRqSFXdCLC5uPXhtvmWfPrHvsdcQoS6yT9weV",
  "key36": "66DzvozyEnkyu4CWFgqcAd1CrERUpL2n5pX1AqjdhJV61zgFvBdC9xFvURF5auXDaGEEaLUmEgJc176RPbWGrjiH",
  "key37": "4ezxESVZnw5PgMzzCPyowQk8KtW9XGkg782CMiZ3jvSop5DXEetRisSM9GuSiUdNLfCZB2BLTvrZG55e5tGSmAj8",
  "key38": "4eLvSQd7wcP3VSLwFGp8yiFEwqEhun4xe7E2sZ1ww2Pwa4TEsmdue2qvBrkoHnxrVacKSGaopBFWuYG1fKZ24CEi",
  "key39": "37cQQwNGpgi2q8r1vXNq4y3i36wrTC1tKpa5SZ6FSyt92wBbRYVokqoUsV3epjmbUHEnCZDFLAdEincD9m5ZAY3Q"
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
