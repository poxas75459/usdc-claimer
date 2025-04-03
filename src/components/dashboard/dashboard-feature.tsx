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
    "4PanKKsqG9R3Et1RqEbahBedcwQGzDR7dtQfcCdjqJxwxzDbYLmWbixtM6ZV2o2cQGBx9b3tEEcYXVG7VowDWL3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uXtEJC8t6nnXXYdvqedTcRxmFnGDtztY394ifpfq4JBVAGEmd34kSAdyVGU3qkZHA6MEBQNYKn5bopGYVjS9cg",
  "key1": "2oMsF1mS8mPw4H4x3DPX4U7dKD6FdViiBCYgQaxfKb4VqTuuWbw61kkffppbtuYc1hK4yZoRFzQCsqEjnANArvCV",
  "key2": "4pBjsSsaHerXL2MjmNsj5c3XuUeTUHPuakiUkUZi1igdxWufGfGoRFFtpcFDZonRtY6wE8qRf4RAsfsjYZ4tdNp1",
  "key3": "5KwynofTVyXaFVnqY1H9FittYkkUwZifF8kGFAxPQF8aoEeQSKChQgctvQiNd3CQbjvoMr4rXs6co4NBUSFLj6bV",
  "key4": "3jYRL6tyNwPaX1NvMV9TqdLDCkmgjXquWiYxyt3vTd4feT6kECrA3xvUekRz7RViSkAXsxqNP8EGL9hA91kUJRwQ",
  "key5": "5fHShTzT8bv9RXGrY7Eob256mt7RDK2z4c6ZqfrifPY7RJN6mEYVkAUzYyVHpzTAH7NY5FqbebBLeubhBZ63gdZy",
  "key6": "5yvG4to5rtWKEPpJAwdro4ByKg5vXVthxk31EAe8EiYiDGoZ4oj39vVzx4GsXDVsnYy8q445Ri5wdNRJYPamUUcZ",
  "key7": "3h4USa4jPoF4cBKHMw5FiHjoSrfLykvVbMioNQxZUerT7b7PaPx4t5ruLS478kVnoGKXFJSYbrt2XwydUfwN2Zkz",
  "key8": "3BQC4vnqDwNfxF31ch574u3LPLg1pW7Ca9KZj8cWiUVfdPbCB23LNyokr1YcsRxRBeR7jEMstz6kK1JY7W48cNKA",
  "key9": "2PcquajHj6Tcnagrg1311wrJamabMumWECRYfhrQ1esF6HCfrBESDZGKvYYSZSKW9W6FohoVfoxXV4PbAaUos1po",
  "key10": "4DXAK1uc3DWc77cdPggEBSkQufn8Zobfdx4yD8DbhCTAVZ1NpJnkt9g1W3xxCN2vWBiPuhSn6Vti4hrrDcS717r9",
  "key11": "3r5KLg8jBdMPdHoJC9t4QiQ7nrm8MGNhit1SGmXNUP9aptcXedLaXjGG3gv6ZLdhmPfQjFSbTChAjE34fc2Shwr5",
  "key12": "2SDDNS2tfvuG53g4YFMYZfSDnTA8z1raFuGpmB3ntdRvpTcWkoqLddiZqeKuxR5eCgoqrcay1gAdFbYEpcmM51Bw",
  "key13": "5NxuReJ1eC1ixDMCTTCzZYAZBoyJZX9bjKTTb2Ttmsrnp8J9Datgy1UXd6J6sGsHqRRG7YKAGZxSnzRhrUMpapJg",
  "key14": "5DrTxJmTG7Wwifh4JDJLFwRfBA9ySD7YWzeiqnuaLgdhzQG8Nm6YX73j537WZxjgWDvuvN4VveycrPZPjUXjA5in",
  "key15": "2Ka7kMtYCvGEFGygxAKcfkeoViNYB7Ma3vNnJUgtKiFVjn5CbgYxFRg1ZL7GpaWPY7Awjcv5yW8VVJFwqCvLo72x",
  "key16": "3Wqrst5tmLNije1NAzqjCMGeuSoVciGw7B1hbNXH8daAdbXBBrL4PqdxoB285bA4EQuSyq1k2xMiHGSBfHYvxakt",
  "key17": "3cEWNPfk37Hu9GwGzQWE2BdDqFX9bBPxdyr2rWc5dQk9MN3LNfoZshhR2RPDn4BnYAkDxjiqgxR3SGXJuESiQ9y2",
  "key18": "2NHsrApMiq5SaTupUCsW6Z2196J82ZCu2Ce4KegyMJusFiH7TLQtBERgPtJGauTUKamVHhDuxR6smGLsWsWm7BNJ",
  "key19": "4h7pCk6FcLfXALrH6WSSLgybCa8BZgjxDEz3LNpLcXdP4bzhKwBF9g8oDkLyLKwJzM25VduoLrjbzCJuqicXj4Wj",
  "key20": "uKSMeun2Yv3FEQCxVJJiWAvFSrky6B3RLQdehfyED3AvEfiSoJB3FUSBjvMrDYiMP15iKq5KWtXp6yfSERaF3zy",
  "key21": "2uHaibA3XJRV4WpncrXnhoVFnza6SL2XN2JTSpYznDDjqgUZfG2WV2VNTEVuDpigDYUzDiBTuuojMWotu3AmV2Zm",
  "key22": "3SjWG4XqiV7TWR3L5vNSXhPQBd7y5yNVq6YmN6KrrybxxEzX9vqBtM1bsczZvtJyNUMTmQqLEvXSmxtUxT55RNus",
  "key23": "44kxPFjBmQex7ffdJxBBANwiHWoibYg8TF6kB9676hdk9tknKv1taHT17so79XzP92Ny8TQfKacWJdDhzCsKtccY",
  "key24": "3sbUqeRpx4X2gHEwrBbepiuzPUkZqDohWm8XDnpsyJk7FNvhA4AtrwETvANSTGDzLuKsNDkjqY8YMRHHget7pn7a",
  "key25": "KL7cgiPnHpFuGYWDgXBaZuB2V3NcvW4H1qAxupa8H73fW7oSEFGpS6gJyqr6PFfJM6aiVWJNQ3u8tvtTMF2MRWo",
  "key26": "4gdRB89DHpKsRrM3rK87k9ryrZfiAtRR5s8Dmms4Dsh6M4ZycKPFrLdJj8uTjoVqtQaDHHVrUfhuLBZs5nCnVn3x",
  "key27": "4Nmfm686CTfUeAeWESHGp98v4fXYdbHFnF34NrFPLFTfRq5QUg7zJ9r7reMzyzxxwPpHztFu8iJWcoujWdpSVwoP",
  "key28": "3SmSeGGZL9r1SjM4bDKefGUPoy4UNYNC7sMfJmwqLFYHJQXotvDy5md3xrYwQArdmpS89bxxPguUBpj5sxKXWYRf",
  "key29": "4xsjdeBbGroMY8Y6qKiUGT1Si1sNiuaKo2vgFg9Mp74zpS4j5SkQP7S7VonX17s1dQy67hroRg6rhJRpjg5J2rjZ",
  "key30": "3SWtXydpWwQkWEzRbAMby3v7mgKrGayqrmSx7QPKtT7agLx72EdKMTA6VTJnMFK9ZGj2QqmEWWnmMYah5Ze1Zjfw",
  "key31": "YpkW5NPjzVMuZ4GyFUES9bs3qA4WmHWJpHuYrrGso1ytqR8pPXAMyrWEQSc38NWL8Fo27HsrhTqVT9tD4GSKdCw",
  "key32": "2FVXf5VyfsKWr8Z5vtNPqTb6bAG645DLGaYrbXAhwbPit8kkdqVvPwZH9y2KLMQuxsXvhsuzj9Y5cG5ZTa8JEs2u",
  "key33": "5BecS4UkvmpFqZFGVRQyy4W6UsbEfftJyySTMdQCGm2XAVzhRY1KvFL2msNUE8DJADSe9PrMM9KsWzUm7EE6NgXU",
  "key34": "63366Uu74YxJhHL9AMHKW6qpMjHm3Pds2ZRQPLAKMoinQXHzvmWqdBbDHbtihHzibK8bAcjBnT9zA2RB2GdhEDov",
  "key35": "4Xb4aUKWj3JNCBxataTVvCFcUTBZEKeEUL9eNJEGhKkqbMYgHyxAiSqFkQ91T1KyDMiGaV2HEAN3dPXLH6aU7Aa1",
  "key36": "5X75NkswEbP45v45eBM1cxxDqDcK2bYE4BxFae8KRZx7YyxF1MsEpv8UT6EHU5iLiNnbhL2ScghSrrdoCmEn7TK5",
  "key37": "37oqf86AsAZoJwC7ZX5ccNrQuZj3ytqmtVdemCmuNcnvoMKmYpeB87pgNakM9UmwoY8S1wFeHxaN7q1CLHBAx8kg",
  "key38": "4LBTU9PRrBrngWJisbm3pm3uP5Q3EpDgvXR6ZM4iE1eT1tmC2CwTeWvx3ukNVKFYVGB3QSz4TCQwsubaxfJdgZrE",
  "key39": "5n6xtAijDgdPTsYVcdR1yyMqtP2FcEocEx4z8vTAfqZL35ER1X49Zue5gCo8SdMBVTcUGYuEvG7FitZ6RqFb2Tn3",
  "key40": "33wg19JsHmnKPXxeNMqJy26bBrdBxZnfoJAuynbcKyf6MHgUj2Aouf2givZrJDLCypeA5mgp7gWGwYs4T2hMzHAM",
  "key41": "42TZ935W2tYrZAnSJhf6o8M4boUeTQHHvhMGFVvqmaf1hR8csuSEqVgqByUFAXDvNHy9DYM2jn8fupT9Gspu5a58",
  "key42": "25V4UqALjfj3Eohbqr9HwSpvhRGWUGnE49gjNZerzWjw2xdjrRcBU2DCtuFjsYCDzsQfBw2fkQ1RQLq4NuybyGYG",
  "key43": "5wy16e3d3AechL6s9EARwNbvB2B9vrizKgQAkHJcbGVLXYTc7KVnZkRtPf4EkfSvzFNhU4GnuLZWpjg3u4vePHS5",
  "key44": "5PqZdvkKC4eHPkupqtVm7HZMutEUW55W24WJJ5MTHH87k5GWEbwZsk3tX3S5Wv7TxGaYWXg2gyPPbyipxQFCNk8V"
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
