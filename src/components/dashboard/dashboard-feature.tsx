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
    "3JNtS73jz4V8RaK2WsHk72g4hE4eJwfhMicRPPSLJdq7gz4bg5E5VLQhqhTDRpHLBEaurLTxPPpo7mJ2rK5NaetP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciYckSN6dgEm5tVYNwQ5T6aj8w2oF59PcRZhErSjL2tsjJU1ZjuFaWGh2uFJ9ps57zBiPgw2aT3wRjbtYsfC1vz",
  "key1": "4jo16iiV3WH1KbWM1iWiuRvSn3CffS67zhoivMy54Wy35u5LvW331dR2tb8aHuyAp9GBgfJDeJf3mmgoLmhnZRzy",
  "key2": "3v1TBmxxpiocqQPLMq382eBmKBkriigwuay8jKskJdaM5omL3zVNiSmQe92Gcj5mmVGZbtxC5RdcECzH8eQGY7J1",
  "key3": "2357N7DFCV7YSr54cNagDMYeWBw2V36Ufi6VU8GqkL9cFzkrm9rgAyztxeJEzuPzpehGxHZeuP8AmeLmYMkApp5g",
  "key4": "5JqCaDmdU8YkdyBUpqhQokcDDZ3QJBUf4yTAux96Gu2UqMzV1xQC5yCud2PbqsoNGqCh15UsjvqPiBrtdSWPss9U",
  "key5": "65uncstRk6Vd3u2D8CDnRqTS8kEEx7YYtR8MUCVqhUe5evKiipyBooFm13ja1z8s94JVWqMNgEFr4oPJPMW3AEaT",
  "key6": "2HF3UEMBDz2a9y7NfmPZ6uXBtWea8mCaVu78kYxL3gHA2xJaRF6GEHAwuS5CutCwCc4PMXDzjtjhs9vwEmBVHhJG",
  "key7": "2RhR2v3s9viuWKGFm84v3LcWgJSX4iStyYZygJkX2WuBCwMUcpHSygpVVPbcTqbsgkY52R7UrzmauTjvVAcpTysy",
  "key8": "5sBE38BeQXpaQcwotWguCcBHDHVb9NFq9S4ijkvpz9GmZxh5LaaNU1Q5Q8qEi9GAQJnvu89iDYEZLJ9SFa6TxGed",
  "key9": "2JdyL9EhG62yAqSBkXxLdZV8au5kjSSbMmZKuPo1Pj97dcv8b8z3eY278yLNAP59giTiV82vkHFXs3vTG7V99Gxf",
  "key10": "2Xp95yQ4oAxRvB2A79VZ61ZmGiFrr4r5nLiLvs5hDhoaoSPJN3kowpp11hXAtdzQUNVMBe6deyRkNR7KRfwLX6KX",
  "key11": "5wxwNr4FAZz2EJNQKrXnc8RAYUMTcNTKY9dMdm6RwUprg72yn2vpYpcpmPEHSePj7uNHzUPiDoFpiJLCede6pG9q",
  "key12": "41GfXKXcwrgtnfW6JwESbjKBDEEtf1541iikvxTwJU59KDEkXmQzwErACbVX7RxsiEi5wQfS14ymYn84Bp4Vcbyg",
  "key13": "219bNtBMsJTV74yai4dybk2WpLtRwvxxJSdgKvRfB8RdZQpLhrcdfyKtGe29fGv9xXgKz2btgycJEk5AywAx9nFc",
  "key14": "3vM7bvUfimNMhKL1zcqhwcRi8ma4v2uwc4PDtErj5RG9aBqfpVU3jcQdBW8vMy1cip6jA1VRoGAmVShkvMjEMwij",
  "key15": "5aABmfW11PwL3ZTFjVoUdusAGqo6CoJdBLc85t5xsmniQRvvtmvGJv5bE55RRWSLoCReU5HwJAPiKYnq5cX39ZDs",
  "key16": "1u9eLCSQ1n6RUgyqMGVWrpERc4Xbe8PvuJ9eXvcT14qjb1AH1kB8KAkgDtPka8hEm5CEt1VcjnAKz8pDw9Kr8R7",
  "key17": "4CwVTeefoHjhNiub1XfEDn4KNmpuD1mbs1eNoReNDqQc1vcBu3f1AYAkJFtM6UzmWNLG91YznyxAxG1csffTRKW5",
  "key18": "5DLkcMdFU2Kw6xcVWBV81FRYjdMxHnNfL5z7PcvgFNkEZnj3yXRyHPKrKGnw2WZSfZVzYPhjrAd8GxWrYyjgNrS3",
  "key19": "NnF5qSKqJMkYsPkoMCEN9RnengvabFinnkchske8Ez82U55JdbwTQuc6dhjbsfcVyXsUvFxx2TJpUPiHg6DdcCY",
  "key20": "28FU1hT3b56vFVJePoyLDHjGgYyzaosp12aXcYPDY8hvYXkvsifFwF7g2kNT3Wr7e9U3LuxBYJxQ8hqvnVvF79ZX",
  "key21": "4CXXjDveciXS4KbS2GGFfALpce3VnfWX7yKeMoHMXfUjqLUxuwSSdqRsxviYwzVNFutdskS4kyxrSNemHTQnKes8",
  "key22": "5EDv79QomJ6hN7BLoiVi1uZyrUMP4YkYpvMjJsWUgbaaKoQvhKKNyxqnkwnsaBR11DEQZ9hm2pm6jwrJTrAZ2j7a",
  "key23": "5nWxzKEmmWhpksaPVcryWgK7uu2vRFuEY3xYgP3CUwdxucbt8cmRvWZ1XdbSD6imJ2gB7xewpZK8Ug7ZJjdn7CTU",
  "key24": "xQGngZr3bGyLsP486EQKHE9pQvCFBCtnfCNoURwcL7PK71PTLqyLM4Bt5kNH51wrrDi7KjWn3i2i8CFWEyRiamN",
  "key25": "3BqErsQwEBSwVs8hTFF2PsFbLzQEKQLk8yTW9RosSKPPevkZhndVXWGPzQFEvxoanQxA3dmsW48mWUGK6zqjAZr4",
  "key26": "4mpirw9iRvKpB2A1tf7sYtdtHjBpWfJFxWGMfF6q9tAHucU3ujd9oPviK58Eh1vNdTxKqqGPR5ddQYjLm8a9FBLJ",
  "key27": "4VxdtVQk7H27Fyfh765U1c5XGn9NVE7EhwfaRQ3BYGLUgc7EqGqzrHxsHXmqdVcrZG3q1wGCXFUEM9ANR3QxXagW",
  "key28": "U22i45FLd385ziTj2JwugXaGHbsPUx9E2cWjsuKN3JK9tvEBPYRqogDiWtXSgMVPiNa3Ac8L7fApa9cGu1fWBZo",
  "key29": "c6AZjEKV5SkupEV7t6yChUvtNEzDnxyRwEyPjoAzt2qxWMnHkdos8MGK7qA1GBGcQxZnALdaDUdVt9W2Vo4SbKL",
  "key30": "5H2gCPHGrEkvzxqNaGwLs1Hgf8bSSsYsYfauVjQFjn2qdAUmGJWHHsTghGTdHdwBSvryr1uFjy1r9KhG3C8gViSA",
  "key31": "5u8hmBHmVRTCiaCht9b9ZtUoQyshswkaUUrihobaRXCjxTa7N97qTsrusH7LyVagjM6gMBnsThQEPzeHwu8ckEmt",
  "key32": "2piJgtXjkJQovShTBkiyto9dTVmbrnTAcpUr3WHzKqRnTmvNdp3nXhXscrFPnoeUF8koMRkZwvPGMW1YThCSK7Nk"
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
