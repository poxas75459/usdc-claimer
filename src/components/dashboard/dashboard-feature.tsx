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
    "4Jyz8SgM3snfNxs7VYXQtshstjfoJotdkhpTNTeTmkPy29GW6WW7fbmuvN2ZGCnJPtJbutAmdshnFAeu2CxvWDX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMWoAhMjgmogLWgYGHZCjXoaViE6uGM9ckD5nzNFGDHGK21siXqWVDr5cgFZXvWpzZ66UiYwUsq5DLhRETTyoPZ",
  "key1": "3qdt428nFWtM7HTq7VDmTnMP7nmUp3CgmiacbbsDmxh3vg8NRZp2VuoGVVZ9AqZuyBXyPwxejFgfoMp6gjBxmZCe",
  "key2": "3Wt5kEhP6MKj8AyjZXhGHxyMsw13SmDRu1ZWXrsyLM3ynV714B3p3M7AJ6xWukar8RH5oga9Rkv8ZaMgZNFznHkw",
  "key3": "4m6jxooKqVumP6QtTLykyyKa41Ke6pwYpAj33z7hT52wk1koyB4fZEtxcUkdNmKCN2pQJ5U4GHUwWMGDTTxnhssx",
  "key4": "yHPgkxopghrDPpx81AvhwBgtcHkirzD9tTvCzsq8x9mdbpSMBmoYnimr91sMtqYkHV1VuF2RMqQPjKjruoX69dB",
  "key5": "W1ZsWQYjz6U1W1zTTP4t78f6cgRvtSNki2C7UWjXrdS9X5fv7Qw91qJa9g7TZe74KLPGREwwn6Kr38PER1CasgL",
  "key6": "q3TG6WqcxBiS63gHVLkF5rUWi3Nmjhnfj8iPwjZEi8iy5MatsyZEXGq4J52w5b5Xw6pXaUKPgyxH9Zi4E8zRBUZ",
  "key7": "3Ue6MoLs4UmDFDqhz7tp7kLQwzuj4JWSa5SWENsMYCccUa9KyMv4FPZtBWboVV3YLunSYDbbod4r1TM353CaKwYn",
  "key8": "2fNbBFz16i5ELuFXXmrtu282KpL6UPenmqJZYoky9RLD7DCxrfmxHedQpBBGCbE9fabvpPycFBmkFd65tNAP2KQ2",
  "key9": "EAHVTpG9TGUk8dftgZJPjudPKEP3sPqFfLu3vjCzrnQF1dkzSPuiAMXVDFkMUt8xh8RuGFhKLVoBTwhjEceV7mE",
  "key10": "4ExegAWtqwQ9JbDNgvAvkyVHsjyECSe8y2Y4sA1DUz13zxqLwXvwTfZvT1PYZwXojWqqehnQzfff9GriWFqdYCEU",
  "key11": "3RxNKdNofripX5tW2VHRg2jTJ9aVCXst7XSqoF5w9W9GXTXNbFz3xjyJEWD9WU3eWx4gXNfzpTW1Y44FJqU1BG6M",
  "key12": "5RypL3NqwuRm5GN5y337Rkw9YJX7Q1eer8tsr7yXYzYUFE7PS4FWusCfPc8xDrPxzcCGEdCcoWY27ctHcjTZdmGZ",
  "key13": "3hfXWxB4JsqATZHVbjgexx6vNnBdaJnRiSeYYonDVrtPjXyjQgrJnyKBTcTG6qmTSsMUSJLHtCj9Foin5LyKZKJ3",
  "key14": "ktMmoGZti9xMuMKGRxiEnJmSybcDw2qDAsFwAuaxdGBwqNxEZdH2mE2wCc1ZbBPW7iE7TCsTzyDgtYsnhXsjauH",
  "key15": "4qN9CD5XXbwhdscMr27YZpfdTrCbrJxRvGbwqeUvFTVyKxFmTyAfeDe9TLL7Q1D1UwEDWgt1grVt7wLbrMTfwUh8",
  "key16": "2FFsVPmQ1sZBb65zHBUwSnRFvDtBFrM6wGoLuAWPQWSfNj62WszfSb6ZijLGMM6gnNc1hoZSBszp5h7hWGtbHUy2",
  "key17": "4MtTsy8okpD34AcUvk91LrEgtVhnyD979KLKwuyqBmG87k1hN9X8tvMCd4h3uesScRExJSndbU3YFodTm9deYCeA",
  "key18": "4Jj5vdtAq5k6G8ep1yHYLf4B8h1PEEYf85ktsnuycSFxBRJSXBuysJcyEt2UCe2kMzRBkU4osXEwNzUUsiB1pUKw",
  "key19": "32k6YYF7zYTzwZdC2nLquCU2jNQvdM8DwW9ckugZBi35WgtpwXuUYYALFvzjtBEswTHG5gfhDeQ9Kyg7apZv6jsy",
  "key20": "21f8mFj27wHKNArZQoqjePZLZ22jXsoyHPB7NxPPK1jGgmMuVkJmZ5DuG283YeLqzHBP8tbLhgrCYVeMWNiQrQst",
  "key21": "4Gojou43UnZiB3dty3xGvEoqfgpQvwD5jB5uPPUvoCBJaRcnsyL1yfajzikeHHnHRgzbPYAsNWyhAFC7h8pSzF2a",
  "key22": "tjDdpaWFDJnjMxzQBvUc1Fb8bcjTrKFV3KYfXbtSJd6s4TCeKq5JxJ9JjaJdn3g4Ndshv6wXoWamHqP2NrBFPy2",
  "key23": "5wBd5NWYMBTcNV8gQCDQ3JfF6eiDdzgTfa7TK9GPSxB7izfAJqRFf8bHvBSckZnRCDgdUKf5UTDbeA6DidbafxKE",
  "key24": "65iUFxYBDmhiH4ejJJak6qBf76vMamniwEr3rMCMpTd6zX467HjDtx2M8vPSK7SHtRHL6qoWuZjWDBW4WerD6QMf",
  "key25": "5kwWCvUuD44wUb9wgtcVHnoe3s4c2JcQV7bNKGFHYsjmxNgDZSCdd8DGeJX68qF4GYb78pWcE76h2rab42WguXsp",
  "key26": "5C15HWtSvRyojJgZjgvVpuiY9QtBWTj35uVtZxJikm2GRJhTRriN2tZnLK9tEK2QW5ueSJQMrKHimxqdinTrVfPk",
  "key27": "5iigY2akQoq1c1BFmqmFur3SDh3LqFAmyWbKqzRBF67pnSF2JbimtnZH1Phn2a18pPrK7SLRMMeBxhyR5nreAMS9",
  "key28": "MShg9axpZKaMnUyDobPnjeLp1TS4hUqiaFqwvHysMgCUz7rn9ZPHcf8vr8V8V1Q8TVSmDDvUdPpyp5rzRQXn1Rv",
  "key29": "fJrcng8kNj3KtuY56k5wLmA8fcnVimKZzBg8QHfYMyXB4EJNdLTWtTnhd8CdKEfyZRLLMmWHCdP6ud1QvthzuuP",
  "key30": "31wtKmme92veKsLio35HPi14f5uudaG1GKg2PjqGHqa5W42MeSk5KY2HdM3gpmgvAiZ9LiM6WBKrSku9SnGdqvBF",
  "key31": "5D94nR9MjwHgeBeA6n775HZHCyzVmkjkXm96vvPDyM9Ytu43vDDXY77PeND1uagurrrahDBWqmT5JeSC7NgLHfDp",
  "key32": "qjqwPeDec3yvzercdGL9cJsdDWcw4XTiyfCY5orsyyLo4pZ76YQRufD2fXGnFVJfMJSsc72LMN2kYDoF3HmGqCu",
  "key33": "3SPVehejm9YYQFkSjjvUMdSBEkDLqvCGeL2sK4RZxGzKywExmQzLEg8dUMX2z6WS3T7chvqYxM1mURs59Uq7c2hE",
  "key34": "2dKBi7xCxXjhwsFiZgn9GZRR1WzgkWGmPJdGNduMokpuPs7iuv7E5MZNDtiPEBocC3JGfNj1CxyMKPPHgybLxExv",
  "key35": "4AKdwmzYmLj8um3wSKgdQLV9Lw6LE4kcTAu53K19fo4Fwo1cG61dbZoz3RWtwdGThLiq2PWi9aoKHarAxdpa9Ppf",
  "key36": "35Q9a2B6TfUUoddh4EfRT1JA682hJySc68TGBAuVF4QZ6bv6frhWwQFPaXVYVcySLcn98eEFbkvbZEUQyQY77SDt",
  "key37": "2M7TcjceyZoi2Es7457rRStkcB6EDc7d1UuEKMzJfaPccPgVZh9JTCRJjiFUyHW5qkpgsbxtdsPasN6693tpf8Sx"
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
