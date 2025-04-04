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
    "3KZ6mxWEHfjvsbKS3CNvFfjEWi8bekQVKf1ZXDBADWRwsS2A8UBF1UCx6C2wT5FPLGfZy6chpib55DhuJZM4RwM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GWBwi2eKHxgbq5kKLZQnthovyUM1AqR3VXCGVtPHjzEuYsEFrCT7YHEefg8Uvx6Zro1rAT1qc4UkSMHwNZuuM6",
  "key1": "5HjscLDz7af3UEDseLMYqHMApV6gMeJ8kYW6cwHQtzrysAETeUGbqFruruj3fDv3LEw1H2wLTyB1TUxpDirPra9G",
  "key2": "9oFdN5FzCPLTymvHf5N5ZozTmiWDDrZFSA6e9KyKiuQkgpuCXQApCxQsL6ncfZ8A3JowvrUxxRCLfCeiFZv4oW8",
  "key3": "LncPdYgJGV3U1LNa3CxyVsGTpBuAyunKEwgzoptSxtiU3rMF6ti9TWeHTDTnyWRMWxcwcH6pFDB3uT8NnzsLPGC",
  "key4": "5sqQhnszrAewQdM4x294BEuv5VgbYwGhbhSWtbocGF3U8Kn23kK83vmZeVNJYqXrNRFc6JznMLmHtGptjcQUse52",
  "key5": "29UoGQ5MZNHjL5enxpjMrsf3eUqZ4RoQ849tvmZ2qnDE3A6pTf4PaPxSnyw24FvtUyPZ3at3fmzhQtPkaDskFCPk",
  "key6": "3xK7VCCo3mZaeAeDdjwNEoL4LDSgymVb8SSde3E44cDEToPuz34PmdcSavDrcJJ4UoSz81zgMVAHaQq48BnofH3X",
  "key7": "3x9BDzAfsetMb6bn6UA1XwpXma3AVdypP5og5HMDpxX6VMKa2WryJJXya5Huxfr5SG9xAJ8wWVYWizw3K6NvsR1w",
  "key8": "xPswgCEcqwmVRMXLqrLcdWEkrdb2pH817GqqoLvbQaLKR9BbRcLs5UUjsvDokWwsmky4Jbh3jC6BjcYTJ3a15DE",
  "key9": "aJtJGgNJaB8hwBAKkG7fQaRZbFXrm6KmdeqzjDvKVehgqVe5cJ9n8XFgk7oCwWdaofZ9hiz3PXt3ytfYSPLQzV6",
  "key10": "5GfHHw919MgtfbQbzQp4wciD2itiDutsrm56eCaUkoH5a6tVEihzmnr7e9RinPPfMPN3oQdCfGVEvQrKpV4VyktV",
  "key11": "5os5EbeQEAXPhUDdiCUz2TXGZCvZgaUVDU9du8qb9wwMfzbHrFhRWPR9PgzWecWbMdoGNRppDpackuMaQHH2qmW7",
  "key12": "3fKYuTTpchGTQ4WuZFJNRDKU7AbYZpAQ2zmohdBbAQQ14t4HbenVHR4xS3hGT6DDfM6QsbwCrux8ysNHFav1Lm6w",
  "key13": "3jPisYThhEYivcpqwcYXANTghVQk68NrgwE8rPMxBkJR8fFagAycF6ViEQjH4sDRhak6Fps8duYhgkabdNE2fW4S",
  "key14": "adRVxRwxu5jpkYpjBegkbtGwgyu7t4ese2jTzczk92HnjVVpCrie6AKdhy5AXgzLWVauLUJ1ujSaDenE53yiQGF",
  "key15": "5o2YsJ1A11UCfRFVhg9yjvQXvVPXHYAFGqmjd2WujN8wcjfAja6fdHGLZryFzxoDYa5uA2gyVmExVKeHRHxtwCp4",
  "key16": "nUJSDAh6uYXsQw4kb2Akc92dNrzykMvmHGEB1TFJ2AZ5jkM2zE3SjDWrBDBh9kQMR5AqenhRnzkrfoDmR6ddBa8",
  "key17": "4MtyJw334cdBTLtjazQXk59UeJjRmDeAj6S9EkMXaDoG3bnPcwpBPieb97jSrpYeHrp9WCh23B6qGEimumETM7Bx",
  "key18": "61PtgCkdqkPZpVR7mBNBoEp6jYAemUPNwHJwAqRjR8vVWvogB2PCnaJaD6ZZEurq1Yk7TmvS1bAQXD1J7daWNSP8",
  "key19": "3JDBCrmQzbDCvLwi5KYoXP6RRtxA7Rd5KwWivHUSXnwBi4bfH9HspGWh3e9VijUNn1eyLx4BgorJgpizEgmQLr1d",
  "key20": "3xHMvTykpSLvoEueyyFWq8piRNBbzETxf7DnJo7jDfNYrVjaZxNPSrHQ7P65kEh1pzgpHPasb6Qoss9368z5gwkG",
  "key21": "Ehfz5r5Pp5k6WKjwubvNCJ7K5AT2xSPna5ZTzeDkG89B4Jq3FT3Gc3cBiCKjfGhu4VdF52eZph8kZ6RjoxmaHNS",
  "key22": "4m9n8isHTdzqcnVvytXoUfMT3x4i8U9BNztJ2duofZoYR4qeTZqMqSnPE7WaazZMkd8UjqfDW66qhLF7UUQg1Xv",
  "key23": "5QmvfLoSzGTv1rs5GsLXwiiXYdcnxE3kbmChReKuUpzi85odUP9z17syxbUJHFvGuKzFwgHiBJzowaDYDT9Xi4TB",
  "key24": "3KhiVjW1q8hDFLMfCBVPoGvUDoru6AmrFqdsMPTr3EvZXWGSZtkpYamsB6Ttcrmwp1sAusTJSrqvwDyWgPN1oqBh",
  "key25": "E7Aj5kmyd5HxPrN6QkCPkUBhTKkBmCWEfDLm6byaHV5VTpHP1iCFfP5qtkeUnmJvdRbB2c8NSNmDD75v7Dg75pH",
  "key26": "2E7W41o9YvKfdUhko3SbrEBoZ3ErCimkBSFuDBqnf4JgfR8Z4vdUy17EWvouZQDQ95HFghr1gfgJ8PgPJGR2WcAR",
  "key27": "2RSWaiN8Cf9gqjsH999fYECfaFKWTzmkUtFD7NdQfFBTap4movbfAmW5tfT74XbrbgrduGv7iiWZbTeANvXS8q9A",
  "key28": "CCxkCqy7QJivrPfceHL8Usg7sqz6CKH11kaxJcmez8FohrBXJC9tzCc39rdN3qYmbJSwgKRuXsUyAjJhfPivSUq",
  "key29": "5gBJtBzbN5w3CNVvP5xQe69QzoR2nreY6V3qkTTnqcBUUdoyRkvFSAnzRSwBhS5oKSTKqAjdLBpk1ZAA1mhAfCzq",
  "key30": "DUG4GkGsiWAy1aMKm3VCCs9GDdfyceeXT5ju68T1paPS9kiED2gzkYnGUdSPKMwjiyP3gdQeqk4S5ioZL1suyt2"
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
