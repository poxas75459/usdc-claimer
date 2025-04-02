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
    "52Lot9c5dqqjFykXLXz3Zn5P6esPJGUpGRmtJPoTqtVuWE1R8yzVAN7RKt769NkFDk1SremPxzGQTfMMxuyrz3r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nx9zuSbPpR1tZFfjC6f3AF7y7WyanA1xhnvvxUk5xejNhad4iLKJVMoPCaYiWj4rNtQf9NyBjeWgTGzGAsaf77n",
  "key1": "Q6rTTPcuuLfCygyN3dgWe14KRtLtvB8jygYUvw6ZJvoe1aC8iPXfQa3RAqRsbVBvEKufsgLoxHndCBr9YHs33DP",
  "key2": "8hDCgJBRWnfdyeuD8T2gfaAVuaNLjotvopegCZfBasC1qVfXV6U918EVnKtwSvwqHHVJiw19VH7ZjEQgwzkZX9f",
  "key3": "4QSCnc48zHMnkdyruAD3gUU8nN5AMpVbJQH7EVWjY6H8eZAW4U1RUxummUUJTqPfEvNSY5dZq2R1MYmFsCiar8zx",
  "key4": "knBgbAt3VxhXQNfXQmSoKjaxcbquBZ6rcognFAFruv3Gm7mooB9iYxPSU7tWRaWpj66wkzBh8R1UiNn9AFKzn79",
  "key5": "4tp8Z6rrX6WL58HqWXfFbLZmMKMpcacdEyiPGHTRsFxsiUrtVDo4Qf3kAG3ogZwtvVzaFZLagpN2ToJsTr5EmrzD",
  "key6": "29Qco6wGUWprUWwdJZXCWDWxsfBJoXZjdydKdsmU4gpGfy8wYBTtxXGukhAdjCffHjoFFz4FReLzqNBzufgNc8ub",
  "key7": "2KAjUnDnnN8tmgRy91Mn3EEXPwB3xuytSrnsVwfQ6ipJJ3vrqm1DupHUbLF9BxoVABc61ghM55KS4TqzNgDC94Cj",
  "key8": "u7RMes2tm6PCd9ABkv9VuT8uHWgmFxw84PR1FJ9hsWu3aoJTggKhpn1JjpPJFGvkfo9wuhSdXG5KwYjQ9VSvCrp",
  "key9": "mwHpiyL6ftvo7xqkSASXubsk38YNPqb1eH3rbVfDFLjQF2twrdVb9znrd9bNWgexbiWkJ9k2fyUbrzgM1Kkfj8r",
  "key10": "5cq6BZFmMxJwuksKRk6o328y3UKR8yyTTvxoNY8x4stj6facY2Nu8hSnjPieMiphwAFQ5ZoGNXWjK2WfVLUh4fph",
  "key11": "5yvyCMmt8D27sBv5JNSF3W36FD84Dc1UZLUxg7w5EXfrHoX8pFMT3EmahA9PNGEV5TaXJnHEJNJecRgiou6XpLEw",
  "key12": "4KUce8U3gEFJLkwZdrDdvGTxLjfpPBQCVpuJkMwLnWDNpxJHP1vegwGEviLNmdzvbgAztHjH2U9KmzQk45adfjed",
  "key13": "4AzGhLFD1Faetzu5X2QeZ537ijTeY9PxhfwWQ3HtGQh19N4sqrHcJRZn6uikM8ob2YNQKfwHhJ9GgF8ftvHW35do",
  "key14": "3so1U6j3iEQC735WoZfYSEkskNLWXA2HP99X2WLjqZrKgjBq713apqj1zZGLm25q1ss8xkhPnGtNjNeopzU8edSj",
  "key15": "53gx8xJvt9EKQpovQ9vJ4HsDaPw2dPyuqEVhmMD5z44NVgVUzRet1SfHGMrMDKR8wK4uHY6FetgKeCnvKoTcXwJk",
  "key16": "27C9sVtHXJ8VCL9yFTX8xuz1kD1aSRy8nk8ESmucNnLPGuFtsqvD8tQGNc47Tx82t1xN8zKRNfbBEwYrzWvbcq3E",
  "key17": "4T1mcC7PRg1obBmfGZT5cZPiQCpgULNNHib5Ugr6zEvRHmjNzA89i9Bv1vTx8uKY7qKufDobUF2AtvRKeFbtDwZt",
  "key18": "4jbrzn7EbSY3ZT742LC8brEa8wBv8UPvVs82MComPoonyTGcC91A2GiMfLKgDT24sV78nwjZ6HQRUuZCdLJKxDSK",
  "key19": "5XsCYihk3pMX1WEkSYnF7DcVNVqLByvqZWF39hCLAqVgAY6n5EfHuo5Xby6yaAN5ut4UNkVvkwPBgAaLR2mvmza2",
  "key20": "4NFcGnyh3xuD4sWHK2FEbavRBgV63KbSLYYdRbX3uQLTSXuJ5oEFJcyMe77rNZsHQFB4B94L6BMFGp9uFEkHffgC",
  "key21": "2ovsDdJk6SUykhsP1ZsvZB9qiosfFrrpoUJJ8QhGiCDHeymr4pPwKgtJG5Q88vu7mNRMToeVKqzXNYUoGpWm2vEB",
  "key22": "44ea86vUH1XN2JNg7MN9srnsuQagJ8ErrenBPiMJoR2GLVrzkUUUWUYHXjbqDLWCzPbbZnsKdzBewJKamh91StYF",
  "key23": "67L9Q5oFY4M7D5jpFWJcywmEw8Ss1Te2yJuXGBaV7rJBhFN8QWarEq9wy5Q76NfR2RTKrqCNrDtzb9TTKfa557qs",
  "key24": "4pBJa4ZPEaz9qsyHgUp9b45DwjiuomSpe4akMSW8ExyEFpTNF13EFUDJuAHf86HdA7SBLrGSoeWq1yLyqM91wVnG",
  "key25": "63P9Cn8rmZu9Pzqedj1cVhpXH2L94Ejmj52HAom6RchLxAVLX4bqi9F8S7nJKEqRLm7RmPVVfaA8be4Ur4TMwejT",
  "key26": "2fb3xeTtcSxs1G69L7QpK8rCEDYqyzw43qHq7F87pdjBJqbrHYj231bbEJy7fTeqvGT598voxBcwD4Efgp2PmrgJ",
  "key27": "4Dv6J4DUMbWC1imDkRMvAjN32fCTQCQCBsR2PdZ5RKdmCTxb47YL89hUMXnAsV4Fru1jer4zJGPRX7XkC8TXbbEQ",
  "key28": "43G2iMzsYgRuLhzgNnDi6HaJtsRyuUNxseQQ4RicpQSazdQEsdonRhc1suSdbLPPVrdhCaCMPRipenupdJTUES6f",
  "key29": "9vVP23g8PrEFGm1J3bEbdcVKDXN2pUxM595VXeDafiqkgVTFUFuk4nZRegkvocNdzsLiN6NaP6iAAVqYb9g2cEh",
  "key30": "4odCrcQYgBH2SmAGSqdXERACyrmyCTcMQQtLbtGSxrUXT8gpkebK6AwuUDMh1U5iLxpeXgxFK75YbRT83bNmowfD",
  "key31": "4GfKEvjcZnEb87AD3cJgrJYu8gDn3RMhXkpdNXtjaWxKNqq6dkErHaiLSNJ4NME3j7QN8HskNaksmQbBRKBKjVQC",
  "key32": "5HCsRL9efurNK92yUneF7aoWhKBH5tFnKHjAcMWWouykRNRbzbwY9TwS2XazU97W4wY9EmWBQX8W2QTZcPoXehNx",
  "key33": "3NTx4eXkgHzuXaDMLg2848NZtCbkE4cGPZRkwqRQCxtG4rZFoV4MxUYs8kFak9YUXFgnjf2SRbR3WpE4VKNyQj2u",
  "key34": "WR7yyePPBZnxiUsmzXvaNHoqoQVncueVatzsn8FNeRZZ1ZSKnudDPiEhzepymMkW8z5AGH6Egjt19WfEs2U7BK8",
  "key35": "5fMCpBdQ9CbPj8z9NLykidfrZkmx1S44J6aPKhr4Guv7o4doKp9kd14ysNFfXh4ZXpKbTvg1ztSiFVXr5hbqYpA7",
  "key36": "3sjRTxM84y78wxRevxJHgo41GeQWoo4ELtGKFxwsxQqe6wEo7haDsKrPvwfEQfopzWAeA1HTY6ZKRpdEAr4BJLnS",
  "key37": "65NpFb81FML9PqbPWyidgWC3AgbNYudPnmUMhzdLcYr47Ns7FTZZVDjC4URaHntNqh5Nx45a2zmpyqhgiBPVBcaD"
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
