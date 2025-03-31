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
    "5eJaS5kGDNiSjrDvNrkLyXRdPMKfJJPsZppQLztHhYsihAPpi2VmrUhY5LoqQqzQMegCVX6YeSb5H44KkcETdAME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3LsbbVKgnA9ohFTXbRsTH3V4rYjo81RWzEjYBvzvYrCs7mxwDcU5Vbj2h1R8Yg4kUVcrhxKBzSj2NddjHN5UTW",
  "key1": "3gh4EKhiCDcY9DvUSUfM4cQq5ZviGT6bp8qLLFybosmdvqcMPFauA5xRfxMCpV9AFz7b54ifCoTHfRUU8jAgK9Tt",
  "key2": "XCM1LY6QJJ5dbWyXorgAhLNG3HNL7M5AoTrvKW9s9F2BBMjtAGQaBhJju2Uq7sgmF8q8LemryYNq7kS1rHjibJY",
  "key3": "52R1SjP8tvPxyjZktezV5skFeAaXsRbaMvJs1fH415CA5DECh5cUnccjzmbYzcDBxaEsFGYMaNGoHXdMvgdz5UuD",
  "key4": "3gTuZyjjLkSNv9CejCB4wA4ZNcuSshoDtgkqVv2AodjLfw14g1N2vMD4V8AiGcyGY6EosiqkAVBXu1SwMVXhCXHo",
  "key5": "2CVzVAjA6ef9BtAjrs9Q1QrSe6nBv2e9Ni6VbcKBoS75Pm4d1ekQRfZrTFrNCaxAdEBANqErqVUEF8gffT1v3Vie",
  "key6": "GGKaeW4DHuFDYp7Q41PBsNRs9i8N6mG7wCzXfN3dP8Qr4SmtK7iyPC4ESLWsvFAeN5cpJ2ruNXHsFEn6YWfUSLq",
  "key7": "3wV9GCJdX5368aNZcEKmA2jnhFH3jtM2tVwbck9TSb41TH31sjCcYoegKSizULSP4m5DgXBi1T3jPL5xBu2rQkLS",
  "key8": "3yw1ghikkD5Dei1JTsiyz8Fs6GrgR2h1QF7ZrXsM6nxvk9MkFETNYJp8e5eC8pAu4ybdzFCuuCDgbRwdhDBNEytg",
  "key9": "3J5gUUFNJSUt4AbwWhganyCJvoKXwEeeqgusLEWGCqfJaYMfThJccr2SknMrhm9PM5qXNYt7cXnvabs5GagL5B5Y",
  "key10": "34fxNboYk8Fay7ET1k2QDWHkgjW9gh3PcosLVfrJYFEDEbJCVfMusPWbDQCQhuHXbcXzA72L9YnD8SUMePJga4tB",
  "key11": "gfb3EYUBPc2ZyAsTTDpMsDJ4ZtjAFAsXsdvE1Rs5jLXwodCVxCbCxZng2pQpJeSWTZjTUwGK3FtX2ttr6CMZ4vz",
  "key12": "nhLF4GcV8M5moTejLJrWAukfhgJxVmumjGk94cy4C1HLKHMvUb5usS2QDhieGYhwEqjmFgYQfKpiyWvvt4Xcaof",
  "key13": "2P6gNaMJ4Gwr4ZeRwha7fHvf2csET77UQQYC7JevE6AYJhHVho7cjxuSYKxo7amrYmVL3ykTJVCWpA6fjKYcoKdB",
  "key14": "wQbkHkmGkN2ngq9eJoJFjRyGH3MSxLmtrgeQnaY8oECp6uQVhRkaNUFsEVM3Fq57f48BwyJ5ezMzvzQ6MuSmGxr",
  "key15": "URHgJGcCY9qPHA6M3C1UhR2zomGB89NCJCgkn2Z2XMAVcGfVXKcEu35K1es45gb72oSx5gKxy8oSHHy9thM7ZMp",
  "key16": "5iT2zN9HFUqt1dHU7UgSXcoesFmyYbo5rM7DzJ6j5Qzf3AsQnVLe8qt1JPPoX1VmztkWQSxyNj1ovgetBVHH4guE",
  "key17": "jNM7aBkbcXH4vdne7YxF7QfjrqkhXLMUwko8bLCEoPX2MVbbJJgjt5jQzkbnWJwonmDoEafPDSaAFuQohe3zSoS",
  "key18": "342k8LnUoqcjyRsJHfRiNVKkdbQkZcoJo8qJVcRvpPyA5rtBE7aYbiaDTa1KzousPq3LyKV2b5ikxuYS6DuHbsXw",
  "key19": "5jr2kYSW6ciMNZetMGRGJEaoCFKtWxLWDF83ArRm8BHGTzSUimiP7PETban9Fq1TAMQE5NtjfPMBu5RiT4AtUM4D",
  "key20": "3iF9VGAwh4ggLSiMqyipnahvXAEdKFoQHRzed1CkkEHGp1G7kridp1aaVLjYV4SVpFWNsLQWF32A7oPbbRKk27xr",
  "key21": "4qRvYAANaoLcgaLcpjfs82EKL4HxsavWUJ1qMfn4NCKimAXhxNsMcYWu8mexUE7Cd5uAYEvzNtstPLYQEqD7SHqN",
  "key22": "3HXwxVqL8EebiVagWyPQV7ibdZtnqtWQ4nXsZ2XoBqny3EDs6LAreS9395HUYpbRBuFHropb47keV8RaHcHA7mj7",
  "key23": "XQDDo86DPrHU5Z53fo5gUPdoAA6U1UadJEdoFTadhrsmNbDCjLwsiJ64ZKSC6QKoJcF5xtfPvz158hkHEyLYTLt",
  "key24": "2LeDahatKQkPTw62V6JdZjxAki3edYd4bEwQnT99FP7C2KeZNB843qPrK4bgYNBSnKmLv8EnuowG4uDTzko6v8Vk",
  "key25": "5h7bdSQ7CspCbei2YiXvpXWajFAEnTjPcRY9EWCSpLDj2Mp3udvkzDEMEUavsAySrUoeREHYb7wjQBVUEN38ygDw",
  "key26": "5NtC3WvHqz2qvLKqtC69vqQAxCxwxvwYwagUDgsdMnpqs2b8P8zFLmeeNYXpXuzSHBmmjWzTH9KBm2gUDiGKNqKM",
  "key27": "2EmksfcL9XrLDYFLGvrFU2oeYjmvR8odudVBRjGzRVbekN5ENw22vdqZ9m4V3A2jko5n6rnUh7zsyexaD4bvSKfD",
  "key28": "2o5xf14cef9AnGyVyaZzaxrU1tDJUZb4FgmvvXuVvfTw2qDth1VkXJhgYtqbk48BwP31Ae2T5pxoUURA8K1YvMU5",
  "key29": "26ruCybbW57hoSsKBxD7atDE9ipHZtZPiu6dgeqK8qUaRb8DDqS1MptUngeJFz7UKnGkFUhryq9Bvw6vXzBGwBGW",
  "key30": "yNvJbJwRFEcWW3AJBn8zircE32PA1Ze1dXo2n7dibrzbeg6DFuMBipK6X99cNWDpJZ1tFm9FkXgx9NfRQwBgJ7T",
  "key31": "4f6JiDksWnj918WhyarjXvGnCAbcRtWezZ5Ew9tramjcGSXnZxZiJFPgyjaJTK4gaEdJjseiCFmygh5uQ1MRR5E8",
  "key32": "H6hYo6r7fcPWeRncfE787prHuar4TGs3LzvzGEc9G7DJVhtYhJ2s9M4ie6qvQxET6fzVgT3Zs5FsP4yLsHjUiJi",
  "key33": "RSFMznAHYNf3DB2UFQ1nnrFfafr2jDtpewu5NP6kB46wAhJyVLYzr3GbddmuZcChp8Ck8zDiAeNhAJuJXFm8VqU",
  "key34": "5PH5ckuUvyjmYhS3YGhYCZ89L4Ps6uA857Toj9qzdRwznoDyN3WNSZU1kzQJ7iqfSbxaDwXx8SEF47LcnpV6Uszb",
  "key35": "4MnRXVyAcHYXw7NKwsCp3QZV9fHtmnsUAdmEQfC6Pf3UimnxvaBynwQnEqZSCZTz7UMom6NrAH7ymBtGSCbkJkJy",
  "key36": "26TDxEezornUhxv6r2J2CaSqKa8Lz1f3VSXzZPqHKnf3mWEKXaopsi4knYHBYLXemFaPvgtNhmmkHvtGaP3V9sjD",
  "key37": "3kFrQbb1mWa9Q5RY69PxW6kRUNAfPG1AdSGYugbBEs2pE76ks9dUDzXPV9U8RHijJoKFQ73473w3rwT93j7uXLPV",
  "key38": "595kskXzsp8CvmYK9cE6itvSxTbvAruUi2HZJNmynozCv3ncoRDo8r2ayXnFGkYmNj3K9qMKnA6JcAkWNNr9MfRW",
  "key39": "4XB3iF7zUUCREbvMuw9Qp8gr4uQSB8ncpbZ3zsHREm8AUWBZEPmY3FAvG84jxw1FDYaJLNuy75maFkR2gUjjP6vt",
  "key40": "2NqMoj4ME5BEKyRBE7KwPeZq33R2rgLFEEDPRPAEZzhBCLnyGiLE8muXfcZvn9t7dk1pVNv5xZKLWCzsPcYVvCPn",
  "key41": "5damX215tf67ivi5bphTFZo6v6U24pXfgzA2pumymVe6pgfFxpqryAVZEtVDNQoeCfRmzgVTBNEjbigV8KtUaZCG",
  "key42": "3mhfUVePkmLKxH9Gskzka6XVoKm2fiuAMozQNxoNKWyBwphr9LXVBYgwda7tpZQogHE1WWd551UzAf9B6EgMLLf5",
  "key43": "2dw68poetZyz1JyP3JjezZEnARFb5iszvgdDtgXMT1M9eL8syfeT3aQbobNvJvkQ2YVm8zvQCRKQmF8LQNAnMqD",
  "key44": "4adLrg1GXqD5EqAQwEH5NYeX9knC6RGcjqb6QFy24yJa2y5EbLzQui4eAhePVgkaugTSHBmPMPJKsoExjZNmatab"
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
