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
    "zj7xKEWF4UHfAHE3yxJ1ARkRMMRvyVX4H3PVcr5LYnUX24eYMuabMycbbo3oANz6byU5aj1yUHWqEBS4YgnPV5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ws6nNsnXgxWukY3Pi5amoHrcxv8YdgJCLBMNrrbKz8dncUYMAq53Uq23KbfqXAL18r2vvWvcaR9vebzCRDnJ85x",
  "key1": "Se3JsQ8VoHxDEFv8ktH3S4cZ8DJjcvdvjrd8yDa5i2cbp2fJ6tFEKwKasx4qpoHfEdmkYbk1LBBZwn7n7VyfqXY",
  "key2": "3BcTGAFmTmK2TMX93auTMvLzUaqRr7aSJeuFAbSXmCB7qo4X2wJCBeZieJgvYEmNHvkbxrXnwVU61ZUEGRCA3uoo",
  "key3": "3QbsvHChiwr7wRTnt2aGAsRJNeN4YScx82mfK1szDtr6SD9NptQciGZkfxgwrpG46WU5KhzrWcxHMQwGvfkDjWnX",
  "key4": "4iYMRXNXNhyqK52ceVH3keviS5H5f4vBkNtW9vLCoVBtrCJqVFHZR2y75HUVFUYWEPTLPS8YkTHaWBr3D6Hmq97",
  "key5": "EWJdujq4zDC3DH1an9CZwTCPHgfRhbakeYU5Fwhs8h9revi641TFLY6Kj6B96m1M8TC8sC9En9Wz45RSkDonUj5",
  "key6": "2rRyrH2hyUSgu6egdumyq4cL965ouqE6V7ViPLZyZD6wGj7fYsJmi5njvwDYNMBAWDcBSgQruifZKh6hhWFMZoEe",
  "key7": "4Mq4HeqxyqGMxSKRHJ9PYfn7uLzAsmJYt8YeJ7aUu7GsCCddZjnT3NZ59HaKvpcBs4sz6k2Qu7BwpguprWEBpyLr",
  "key8": "3qyu8TY8ryQWEYNjnc5QphE9RaG7wdVuJvkkYuJtr55oKszSgfWqDDYZfP7tc8K7hxcyswHXyAWKj8i1H5eHE5Yr",
  "key9": "3jkDUBkUmTrz5JzRA62BRRdPXkpRR5wSeqB6qMm9jBj7FdD6nHjyvhTcB5fq6LoJDZ9QHnFSpVU7ng18jVrnr2Hm",
  "key10": "3e8TQP4bszv4hiufPCHxhpTskPicPau2hsr6fm16wRy5SR6r7hvsCWmmNQmvQpVEpoAubXMzbqkT8BCjZmgsnnzP",
  "key11": "5EDtjG7v43vmfUAadkYweB9QqDpHmym3bMnGQEbcXcPkWJ8SpoVEFHaFvpHD95NZwBM7CCEFiPFJu6ZprF2L2VBW",
  "key12": "2PQ3CtAXtXeQe8hXJWRKAU2VnzoM9JG6byeCzBSnsAWTyPdbiDuNmvKcogNtcL26RD29cdQZbHpA6N9HTHsYAPda",
  "key13": "5KkLxcGgPbyvmRj9Qh8gGyh9zb5GMfGeQfMYbYz4B12G5tRCwvovZwATM5wTd2zLBvgxfxMbrN7JvLp6Ap6zKGDc",
  "key14": "5qjhN7ECooQJDtFWrCVK648P9rWdtmDYiuuVpem5st4vgHmhZxWJSxe2tYAKUAsoGwraUGMWgGH4CXZKwNaaApy3",
  "key15": "5k1bTgwJRWQQReNXS5PzCD2MkUQQXk1Z6fCYep7qMqYzojKgtQuc2CqzSaHteavmGSC9zeD1B36RpyMRxvMERqh",
  "key16": "EFfKMfgevofUC2m5ToADbLUFxaG3G7VMNZy5va9vUdBhsCto72nXeHmjvX2FtDTeDjytxmqpAHYALmDA7vUNxLe",
  "key17": "5h9Mb3P1NhGa2SsV2nyxrTvyGYQu6DSFExJv7uxk3viJah8mjJ3bThhq2o3eYzWgE7xJ9ZaNjFaUFXa1C85crxYw",
  "key18": "4S2FwbGpsrJJHt79uqEgMgNFjxQYRLaaC1ejaTEkQdajPLaL8Y3eDaNKR3FyAPPwMozAU3ngbQfLo6Gu5A1RfRjQ",
  "key19": "36cbVoScqsGq4F6TUYEdtL8wVGSnzabC8tHJCjW23iT3kdsw8EuPbigQwFj9XpF94JUmmJ9eyR42t32mkWNymoov",
  "key20": "4HDGUpQ9huk1jdVP9uj3xr3drUMRU3b9oo5J1kWqBzJ5P8WmggYBCpeS7CPYGRHixMGziTCoNQYLp86o39GvMMgR",
  "key21": "4rttHqPUCRntu9R32ThiuLDShKrPLfjYLiFWRf5jscERQmMoVjsukbssgG6w4gof2Hew7cfYpmjViZ67xpRbduZa",
  "key22": "3Nammsk1fsuXmjVex3R8PL36hkpq5vEGy7SH36cofct3HCmAAU15M5w11HMehj6suHu3UDBuhDhMLvkXUmANpzEK",
  "key23": "3cVQ37vAwZXJ2fcMb86emJRVTCpQLb6ymgG17zXjtUsReHqVua7Xi7BBerikG4cvkcA4sdGvgX85P5gx6jNggnok",
  "key24": "27fb71YD6Tix9qs2JJpQinTRkoExZMhRgtfZZD4g7aq53DS3rAXysZJqr6QL81xcKZ3HW294cQ6xgenQ7J45vJQw",
  "key25": "5KHsqFtmQwije3yJ3Vr95niWn2Y2S5n1JX47nYmBHuj6s59UVGqWx8qkowkaXpAa1FAZ17yW6fSeHuiMvKsfYigE",
  "key26": "4vi2BwskLFZwq2LJ9QR7dKdKhbvzVz8dEqhQSBRLBUFVgbWNpjV4jR51CF5cM4vZjHdTyg7Mw7LUuHeEiwvRoGYi",
  "key27": "3REV9AtyreCwnACJpoJLGa8KCmvv3D1yVtSfghH1XkcoUcFAKJgex926DDbji4KXvhFLxW2DCZRnWGmzdYzdmKgv",
  "key28": "4t5bUj9Gk9TcU42dqttcyN2prRvQXb42rgaWAsb8WgxSXNuY2wJCM5sfJBiknmW7PU7JdsAHNyiw5BjzQjZh2X6v",
  "key29": "5gWrJMditcYf4h3t6zuKaQ9XwSZpQtEzwpdPrKeYKXVDaF9mM7i2VExfpsxrn7cvmKCUE7Zya7YWbzd6TBnFa54n",
  "key30": "w1k6R5zWwe82FEefGPgyQwF9y1cfoPUj9K7chY27cemyF8HkEcbkapnbE8kXnrvZyLVT73CJLKdP1i5PAn2BLA1",
  "key31": "ocTqyGZBsTeoRPb1a4b95UWj6ndCopv3tM7uyRC4Go42YA1GXXtXzerTRZw1Vjr4tEyHGkHQ1qXpiAtLDTdy7pt",
  "key32": "5iGyzv6ui8ozmx94Ng4XaovSMKDpeFnuHzTVfY13tFSLmVWoYVQHRrsgB8jpwqBtc6jnbeMRXoqKSKRaTnPQVMmd",
  "key33": "47JXdGYEz5oZjiFVj9ZD7ySR9nGa6M53LH1jhzz7Pggf4BgrRGHdSwR8FFL2w8edTk46j3GerGFh4HtewEnRobYY",
  "key34": "5smjwMhbJW15AG3j5UGrGaFGmc4scK11s5DwLWG5c3JjSJf9vTkJmpLSvK8Fk1odLEzqAoSVc7485sVi4QnYWU4H",
  "key35": "3k2SLV14UfHKVfTTLmm6Xyvc3QAA2qrKxZPx1C1LjFtTPzS1zR94PbT3S9mW8SFpQmJqpxhHoVqBA8iY8V24wQSG",
  "key36": "5axAcVyipbysF91L5MRnUp3PAPSBdJa315q4kTJo4tCJzY9KgdVuQ8bUsijPaYkjdMkVVZvtb36YKF87DKqFybgE",
  "key37": "4hiW9YmBvnWrxtwdBCkhmkL2zzPcxBYNXGB8zj4sApsjA1eYCZJiyskgCrAjD3ijN6z4A9niERzQLMTJSypXNHUc",
  "key38": "4F6P1UKNc6WfKKKh8LKqqtozY2y7QufPQc5B7xioZevybU2zTB4oSyDKUvLzPthPKdm5wHoP7yKoNHerw7MaJjPJ",
  "key39": "3FMsZMJzbJjQSuQjR8stVbG4P8XRvnbPvEEXY2fKd6b7cD4wfgU7CbCXEGyfcdG5B9YU7EDWPDteihXd1FZogEKd",
  "key40": "5JabJe7fbZBds9fNY8GZcsP5AJ5tAEXCsJdH7TwWS2uU877qibt4DmBW1jnLAC6NxZZnCHS2FZtxuK1sLc9xfeXY"
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
