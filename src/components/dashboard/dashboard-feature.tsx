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
    "3CacQjexRdTVt1fJboa9AfzVBF2GZYHM3EkEP4teT19Ugt4BRavvRMcqFVCdhjeZyKnQcR9enAi3fNPLma2hZCEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sk4ra6U4gmyJUCB3HwTzvjv3sra5KzfLK1AqPKh8XwPrZ1NdBokQZahCxMoq2M6SW6ZTZguTiyf1WZJbWMycbiF",
  "key1": "5o9Ruz8a9iNj7gBJvmrwA44JYxH5ykAQPbKezMwEpZggsLqVDkfpY6PgozLYC2MbCyQjYkh8Tu9UsXEhXLfekaMW",
  "key2": "2aQSiDfSzwuN3BjDyN1ZfcxEL9bnKKeD9NMe7swuT5dtCw82MHhdQRuZLKKsryGpCf76iSBi1DB4GknPS79TPpUa",
  "key3": "jR1KqKGxXE7HwcrreMH8h31WSjwrU73Gqsw72Vc4wcfVLJrD9WZN4modt9of8QoBtLMW8iieCQVShvHQxv9GXmZ",
  "key4": "3tLFYRfSsAkEh9hwj5v6wkUeg2RsyZauk7QqY1yCeQuNAM4YantYnwrj3TZPxB3YX7C2Esvdo6ansd4w5x8CMSfE",
  "key5": "3rqcmubr1TJE18n2KjtybFj8Q39DegurCZKu1fTsfNQm6hfiUVEshJjV991PJ9qp1EF6d7CSws7E9ypsqCmoECjX",
  "key6": "5tameJXzxtg72ReBr6hBdcwcByJVskUiUKptwyFCTZsVJHZjJMQJ8t5P6UXxGyVNK5oSXwwcCBDiJrC8Zg8XvGPD",
  "key7": "Fo9AtDkaRM2XqdDEhzDdUBgov4TQa83SKa4fDHFPPsGtw7qg2FFM3YG4ThH3w7Nw6BbiNpXr5t45EmApMFZpJPU",
  "key8": "2jfttUzHWR9eArSgXbt6GrPGHinJcbHHxPiSre5VUETq45zJhxL9uQKvWKpRYWi3H8S2V4fUR3uU5DfVXNzmthef",
  "key9": "54M95SWQ46LhPJ7nnhLqgNMVmgTdG3JBuGLPuJiy89kgvecmcKu2DpReUjevn2rEwKpd41KrTe7ypUkvHZ2unVFT",
  "key10": "D1oQEMv2ZwtRnZFDhs2q7r3aUBa4bp6A9wojUN4r22vtahMzwpWVAgEkHGTQDhKT8SYK2Hvf5gzrccbtQo6Gm43",
  "key11": "2rh1aBePx6XBCZqzQYXZ6QBeYjkbQr3aRXpvcHEGJYV1Qr4H26os2J2dHhHHLUKmA5LgvYAFyRxGVxYegZ1eLqFr",
  "key12": "3icVnDUMjHCB8tvKHRcTCwmNCviBGe4mA9BFKNzrHS351siNPaHDdEFvB6aFgnxmDZZaQWvVr6ErKhUk3hSVoDiG",
  "key13": "2bKjAYudzUY78FaPc73pbyRgGh2EbtDir8EDYGwVvHYZGSUHNCgVSCKNcUH1eHWyuMYxEwGifBYjcRtuL9hfHrXk",
  "key14": "4S8yEprKweocbv8FSHduWf9NfrrQ5SuxGPyCMdTC8piv9i7275CU3zgFPTpUXxmL8U8u9ZVQk32JTmXXEjq4yivo",
  "key15": "n43x2nvVHUHeASkSi7jFtLwJZeAAeVUaZUvLhXveJWMvZwoaU2Bh6R22CKYVpGkdk92ry5wHL3cCmQPDp3vVESp",
  "key16": "3Wf4d7SYvMz5aP4eWMxir51cvKguh4fYwWYoDWb6VevvCF1inQq78SxXforiH6FjrQY71go3Tm5PmdPsR53zcpGK",
  "key17": "tGyKPhfyXc7vmEdkWDYp9UzTuKgzPjJ4PHWAiJN7x6ufSKULTydifbaVuisym1ssepEFZUe1sq6FgAv8KqAhdzo",
  "key18": "3B3FrSFa9piB6GkWGeijpiA9TgkUpVKCGi2VgexsK5Psz1uvJa8jzzfraNFWNZ2iqYVNr461bk1G5izcarha7iWn",
  "key19": "4Eewtc67DSq64dcXvWWLKZyebbaGqpB54w3SGXhAAc96T6hyys6gvPz5yTSV25naa7YaUx68wFxg4syWkbDwbNfv",
  "key20": "5diHy5BVTbRxqUoSkDb8YNMBp4oXvvzVqMMj44K7s2YbAdWJXdoBCn9gBwp88uteWqFJT261fDKnv4inCcSJQYkn",
  "key21": "5L4PwWFWcTdK1i1MFmjanms6FCoahqEjVcfHJeN7qSrgqJu3e7Xk6tUotarwZDD853LWdPkRAu57Dtmswt1ZwHkg",
  "key22": "U3kdxZV2XFSYPPQsGV674w3bL4ERARkTBnRV9HWdL4A877LhNxAYcrMfWBytTXCxcgceb7uUHvaTXAs6Avk2Kdn",
  "key23": "VhQmpgBxZ7rEqPts6T6u7wrf5XAvunY3psyjEd3GZyt8vwbLiCE5GW93mjcNqo96NTw5MsNeLuyvvTjKErSH7cc",
  "key24": "64XdVVxaMABvNmg4n7R8VwRpe88seB15vGcMwHDU4kUiBVumyv5eV7WXoCMEdWBNZUhaK2SRiAxW4d5Kg1t8iQu3",
  "key25": "652teuootac573ALGGCTSjotniewJosusoCakGQuqZH8ArwVRYA1GqxpqMN5htYVg9HpV4wWqmpSAeaitAy1j8ha",
  "key26": "4bQAxjhttQaPGmUgA9LGBoDmgYquZXzoXdC5Gsw6VwbvbkNWwhNcS4p9mWjp6Cy2SJMerGpyQtGdhrmUqhG4P5uc",
  "key27": "4GEZMmSRFhMYSX7wTQNra1TxD35EiRG9A8QKgjYyTWZ4orzhJoEWp9Rjz82mWsHC1frn2yAeZVBGgxks7UVyHwEU",
  "key28": "5aRsxtQJVcvhg2YgSMRZKQu9UGv1BUKV8TR3VQNFwc9wFarFcEWkuU9QxfeCE4PQ7n9h2CXxVFkebJ5Ek6gUJ3Jr",
  "key29": "3UCjHUEboAiDyLtxc9UF4MQeVQqXtpL9S5moxLeCmazLQYeU7XUrGBm15NdzyfAtPtFeeeog7NBYxkghQUB1WcYm",
  "key30": "5TnYVQgQcfoAxc2Xd6z4b4TxhuFXx8xAhT2KdBmGmz3hd9vN9oK9sB9dAVffb1X1Ryy28YPDe8Dy6puzNnM19wK4",
  "key31": "4gyC3ovTnuirpi1XmxVARfibLFCMCHAMQjDBeXsg4CA4Gx26RBw2yYXKMKyKhpkTQHTNiwSa4u85pvHTWHYELUAx",
  "key32": "4APLz2u2eFRt79sks8gLFWtdSHyhnHiFo4EbUfe7pX5ZwJ24j7EPHXibFmDAhQBQ3jsk4DKyAzuWNajYktEQSMS9",
  "key33": "3ivZU9cKY1MtPkQUKGrkfnUUPxgL88JyzGLXwTYtdXasYikSZ2TKJmGxtVyuyjCo33FEy9Voxr2j83mEgUoJqtSe",
  "key34": "hGWwxHG5wknAsE2qBRDcWgxHT6o7PCGKRKaHkZ5HtVknwxHdKdFcp6mUUtAvnuugCHTG2iDhuunQdfLMkdcTWBZ",
  "key35": "5kDFDumCULb3N5Bo8XMc25hrgiUY68J7JZrAPRvRZ8TRiWRL9v5FVr3Hzw6ddxa5oB9hUNz7FPDtcqgco5UkPN71",
  "key36": "5Yv9CYiuQhsQ7K9u8xzVHmPhZu8h2sMxpo9MnBmU1RStQsFKABF5jKYSdNB6JCS6iCmHPvLRD2fhpENCPRjnc2tH",
  "key37": "3ECpHtj86R39HwpwCWzqEk1uBkecu4nbX9kJwfAeeF4TAFoEuLrgmFMyiYv8zgjNhDhNTovVYu26DQQJWTmLfGGv"
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
