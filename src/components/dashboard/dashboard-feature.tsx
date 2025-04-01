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
    "2amu9tiQySvPdYcQUMWUTZQBDg2V68mQFHmwUJEE4esxePC3VE3cNofbZvWRp3kYkEyMuCxFoBTR1w4TXrfc295T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q1U1DexWeC8N2opZLwmzjpogwRvkM5rGGmvW5ezHLetj78eKMnGZKFcR1jR3VDpNvDjpP7v75MVd99TFevkPAHZ",
  "key1": "36q8UmdutHDDGbGxnaHva5KQfyr2S69PAs1h6ZFRQd1QTz3mVR6beyVh8PWhjNiQkLbw53yAgw8chwiRmWURgT4F",
  "key2": "2V6Z6Hsh2UjyhyRAdUtLo4xc1kCjS1BhTGRzmiTyQNqHToqM35epydtQxrQKVnur6d4fWnxVC3GkDRWTFJ5eYx4L",
  "key3": "CvMMAAnDCV76yd6Bty2Mkg86czCWJgbj2ssybXcPGfhCGRpcthXRVPYknr3FytqP2bSDPTbVBNGjLbc5eeXGcLb",
  "key4": "fWXVamAq3ynvb8LQ1MUaH5WjZPpzBqJb4bfici5RMyqQqZBUisN7du1PCudRtzTyXgsQaB1qsdzfAUrh15j1rWL",
  "key5": "7tu4uNJ1fxNdipRvHshA5eXdYbxeWp5dKy4TGjWwcrASehQ2oSvZChCcx1GX4euJQ7CecNLGSvHd7owJEDnCjHN",
  "key6": "5gPQLYve32uGkkSbB4pDCaTrt1FZjBfHF9CGxXVtZDnd8jsP6LRVEoQ7kpGpFJ1SsTin94UjnRuL4soiwX7gpJp6",
  "key7": "VoSCBCQsTywFhiTydRgNCmdxpZ2ctD4rq7TDmktNmQ1egngrHHGvBDa7HttLAcGC5B14wnrzMVj8nkPdavX6LNN",
  "key8": "4Cvat2Eys389UxpQR5bEbnxgrESwuSDSN1nvyu29zrmpcxswZX39dxSUpq1Pk6WebUVJY1jnhzkZXhUR9aHB9ZYQ",
  "key9": "5B4HxJ92iq63AM2P5uGBjyVPkoVyS2Zz3yUqAvxS1HWQ32st9Xv6DmXjXUERaTMc3azuUJCBNv7dbmg5rHp9xwLx",
  "key10": "SmCfSoZ1TXHbA8UZx25vgeYf4MJ9zgkBU6Ws3qMZuNmkeENNLncAxrCS8bxU5vWGKJrGczT7TVhBzx5ufdUEtji",
  "key11": "4gSJ3WcB5Wo64ufVNpGCBYU2apighfwBme62Vdf6tM5ghT8rivbN4GkctFHTC2spCcTewCMHCmW5Dtnq2AL4j4Q5",
  "key12": "Yig2cj9eWkBg2bkvqroAZog1TKk6QHPhjXL7XxM7vPo9KBqWXWveCHFQ9H3XCpKosWjrqrj2M9TRaYfokFHLfyY",
  "key13": "5ERYaGvtbFp63cvdaREG5ze28hPttScDumuZZbQjzKDWaPA9gXezissEYzyciqMoS26fGmEnPeZdCg73Hgn7Bz2f",
  "key14": "4xHRT5rUzrgseaNn4KApUTt62p4XSPvRH7xKYDNY6DPxHZdvjsxFNbhAHWBrwfHGR4vq3hMheMHcaevuWuKvH81s",
  "key15": "2i2kzNpmPg4nKNwcsZC1hUp6Go2jhVj5fbzA6fWHqvCNoL1PCXuJ7sqs4oeSMyr9uC3fPhzDbdcyeR7cYyE382LU",
  "key16": "3RguNdDvdJGCu9bNL9nTRFEaf5spSMwQqp62EZojJ6i8JZuZ9qJ44TSqCnvuqZf1QYeew7iYxUeJCv66jPHUTpS9",
  "key17": "396V2aDNWJwyARBouLyDcb6Hjmhonf4CLKgoB2BHXvLADAuuvqg8iiida7C4A9sJme1oMxYucSEoYaCyMaqV48TY",
  "key18": "5y9ZAWfKjs2PbnNuCHdetb7iKCyJNjaEL5zKGVXwv5DvJGR2S6HUS2i3KpQK2WFL5bxhnxeXxmwrh2Zvxxvp5wwp",
  "key19": "DdRaeTiu3gNTDUDQbuvUr94JNNWfQURtvdw9YCZvEb4Ptho88qMnssUH43xxwR7BMdYmCCHjs2aUPYmyw7Hdtk1",
  "key20": "34xCdKJ8zgF5219AQadNuCpAKLKVaCmLhvGbPwTS8iPBgfvvabi8JrkaQZK2XACPeF9dkFBSRi5uAgRyGFe6vgQv",
  "key21": "65KmrTCFuMuLiN6oEv8nEsLz8gk5i4vWH3ESTNpJfuTCtai2brCZdj9dwR3rWKeWoBGSy6KzD9hnXa9wVuKZd6aE",
  "key22": "4SfAaNaSjtoD6GtVoRVqgKEDAmSLrP59vmwqGEhqrFk8jBTiSKqRtCEucHRvmM8QRXsCSNJAkQESpgK5veuByk2o",
  "key23": "2jmeFsqZZF7Wjhz9NGm5CwBrLDbasbfnJwykRiY9oYX3K7TDZ9Bx4gC5diXnUqWL3GprptUpEjpLuMebnFpUjNbz",
  "key24": "5DBTuTEULLyJxSRb2dB4uuXeW14VkT44aNkKLv58FbVYFBhH7GZ9a1FaszCP5cgciWYp4JmfNpf8x6rr26GWh7X9",
  "key25": "63kjh58iTYMRecYNSXxBaVWMV4y9BuK9UzqNjG5i1WaWFaeo11erj8EjwKFgH84xmy2at6dp94YZxGiKdWqu9uxd",
  "key26": "rbTsK5rqTW7rkjnbb6rdeWka4RUt5PokjToh3KqHX4TqfZcGYo3xvDZ8KfmLrYQvw715MFzZwkGacGXT3v4nzwS",
  "key27": "9xaHH3Qa4KbM84rnaoBDcUQLMFZBKyyBU4RS5Gpnqsp6ussK3u36VYLGPXW46LVaEet5JX8onDm1dkeLVqYxq8a",
  "key28": "65WRobecvWDGE8ER7yZEpop6DrTEc3fYQjfrNFjofhiBQRAmuBeYJS92pef1bAdMF9pAQ1Mdbvq8g4Tvoe9mGsJY",
  "key29": "wUbgsLZAb61R3xNcbJrLWpuGjGY6BfbjsqYQB2jcLnJbwsGmYVa9JXdWiSK3jiwtBcJSp4fXJA2gSN4vH9rPb5F",
  "key30": "2Pze9G7n6JTpCGbyUJBbwnyEVK1FXopmT1XWb1tGRSJs5vbqvpTJaqLUfkndhbFUp7pWJc6Fw2cvh319hFtuMzYt",
  "key31": "248aWo6QPKM2ARzFasWcA1xvKAmRG1CGoYo8GNRx7VTVXWUmLPHUEzwTrXiwjsGCCuQmh5h3R4vKEGEBeri3en1J",
  "key32": "5W4VpkvMau3QV2FpVHyeACTBnnGiakUKAyxxTJ4qEgkSB8YxJworE53EkasZnvXjs8ppamFVwRNpTrBsoYdqSNek",
  "key33": "4jjYWBqVFgDfsZyUJtMsfmBTee9Fxh14K7PJ2Sfn1H9c63578hu84mmLvjdb3WcfgmwsJumG4nuGVFgZneK1QpU7",
  "key34": "2tPkri1b3U9bsixHNRcBstZq5Ug68xVjZhvru13WcJjs2KsiVuimV8TY89PkdSA72WqFSHH9cnEn1UNxMv74J5EL",
  "key35": "4GLKsTmFyQKstcns5sBxMwbUKwxyqsJTW1zKRWzZmLYptEVfUiwsQLjdepHUSV9Pq5fTctaBpRirX2fEuTErXAWn",
  "key36": "5vu1R2DhsSLfT75vw3Df8y94m9KwXzpPtaSD65i5S3qo7rwZVTrJ642FxCrhGkARB7qLQCueUgm9CYJSJGWc9ofC",
  "key37": "5QtogHcHgNPwZwHpHdQCzGS8utRMpE5dGd5nrhYYb6FWs8n8dp2owMVoA6VzsdfZN9RkbSLRxXbFNwpjemuDqHsj",
  "key38": "59SgwVwX3ee7FoXYQjcAeRUCdccBitkXcWLJZ5Qk7MZXQgjAzpYStmGYTe4tizy8MiWjwNo1dvMfLGBMLzQrkaAG",
  "key39": "2seu92nS39nrrbCkSqKRcjUtavovo3V7HVxzqSXffzVUfXpYECdKac5Wa1XhRPLndoJUc3y8HjndJEUvX9GbkvCU"
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
