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
    "tRh9jCoP2LrXbhXSzFYPr9HtbeDwYZqpzgCgN2W2zQ8dpkTtb62pu6jnisQtfdyaR9qcPrSWBPsCRB2dP2o3d4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrXeEnt9Pitt7Amnt4Mpqob82gJFqoAnEcghjSZKtWr1mLG2972XmMcZFo5aZYVdFCrKpyU53iQpgFfp7UFqsF1",
  "key1": "42E41sqJzryNrVcD7TMy5T8nztCZrX4L3zFqTnFUrKDktYugFpNR2CNd9MFHCyGXaMvfz8WHqiUbjARYXUSeb1Er",
  "key2": "4NqttzDypvkqrKCsdsxBBARmGcw1h8YpfSDFAbGzqXhe5XaeELqkBxLeSfud2QupT2FNgptHpKPAkZ6gE8D2RHqs",
  "key3": "27JsrAqfNhuUmQgVswgrx9tEquoyU7V6miApZopV41e56CUjByBRq9nNfR8vumkoK67pGKCY4jaNAb7dKCfG3FKn",
  "key4": "2iz4CpJeiMPZhhwfiuPRceyj5mj3Mp67aP47cB4J7TUbHQC7XC8y4hKjHLSuWTfcDEJiC6eusKeLPB8JrfSEoS86",
  "key5": "2xeBQuW9XmgrzL27cgPnwvW9DN6RCXhzthigmwBusSFxmWqHXUxQcmDaNj8tHWojQ3mWfY6NXAjUDCPWe8fn3N9R",
  "key6": "5U1rcYy1fc1i2PsH47AYnPwFnnbsRUDZiUYgMF5RewspuQzKCtEBho7DR21EjkfQQtnP3pJfqEXsXxjsMQq3VJnk",
  "key7": "4GdCih8pacPGBjxPQ2UqG8cJAiEMCur88GUQ3sWdNrSZePUg1MuiCX4ukGTqDpAfnZer9YH9deaafnG7rnLNeNNX",
  "key8": "tKi8rYScforDLoacBVWf9rK4WHbWQKw1ZJzpjg8NjqwjcNmbN66AnCEr3TpEjJArAKbXcE5us3SZ1R7DQaAARCB",
  "key9": "4yFuj35fXzD1fGokHqGurtfS3uDChVMcKmf9ipCpVEBzdVx1LyCbNG9fiTm5kYBWhC2smNCtrQ6ahQSE2zfBRp5k",
  "key10": "349NMsLhzpjiszfaPg2DCqQdK7bRjsYzC8i6MWkLou6P79bYHwJKsMfguHKAyVcrFcabxFgRraD6yHMU8ovk8zg",
  "key11": "5ZuQGmtrGwsvnzd398KAtLiKBZ7rfWRrDtxGCq3GzqNUqY3PEPRW7U286QGg1A4xpGpVysZmWWBRrVX1G8ENwtgW",
  "key12": "4Aw5XYqGHDxRJCFDCyWrnXnT6twQ1Ek9kCTaTpzcp7B1dsvgmRa1z2Yjtm5PRtzJCdqK5wde5FGnvcaqQpQBQQKq",
  "key13": "DahPsFGTArg79ZRg7VHB3z3UCuCPqiHJDi87qvGm6if7ZwZheCrZWvq31T1FecgJ8RBYajufoRmxaS6G3RxR74r",
  "key14": "4RHSc4tGJ7PprPmuGLu3r41XPNroHTKEkSLp1brhqaQtNNgfYm7VkxzboYkhnF4119ByJ2pFP9zyvrNMTKRSZtG1",
  "key15": "45wtG5s33zqWapvhBt7mJv7cxZRw2cw7zXVSsoiBKppVZhcXRkENFUPSP3Mnmk2VBW3QN5iAvY38r4UPy8E9ccL",
  "key16": "2FmnuwyAb97Afvqgq3Qx827uBN1tGZ16eshcxVoTfxR7WMnxQKYtXhFogxCvvQGuGENRqwwkQWqABMiP7NVDU58L",
  "key17": "4UCKmBxzh6pn2iVgfmYNXot3jCAoWKFbjU74KE4cXUBWViUqGZziXJoku3unw3Bd3H7MKbxS5y1Kr7TjHtvUjZUd",
  "key18": "3eaWyQmgBfzNRQB7GB5JrbJ8QtcK6tVWoJpamUdtGBbkdDNiy6hfeaw8beANWnSN4XbUmWd4EE2EKhYWJhseicse",
  "key19": "4dUL51nbzEmXnVPJPAAg9xuRK1GzzRx1bNdwGbJaDfdmTJHtnTNKreSgnXCMjiULhJitqAGmcrMJftRofAVWBu7G",
  "key20": "5FbAnB6QnFy9bNhJfmrhzCYyFt7fyq7z6ooco528Te1j1TW4YhqMahaf4YsT2GjRTF4oF3bfvAAPBvYBHujuqdbB",
  "key21": "2JHRM5XBMD6bDHFiZw31UH4deCgGLNksGhpvifatcDZvNCnTMAMPZz2D2Mvt1RQc5F7ogpY5kReAXtt1YFfvJVQy",
  "key22": "4SeTPMa3ssqJejPctgew37bxnMWFRDMPPQTkoRMF4nLphHd5MMMptoZDwqRe2sDCJQFbBftdVqbGKK7utekLSpDc",
  "key23": "4XdRXAKdaLjsnQ4UYpz7AHi5j2twUU6NKKKwbQ9ecgDHUQtTVg3YkHAcMP3JnRxPz2hMYvy2a7cV3w6XWwtkezfv",
  "key24": "DCytUNnidRHwjrFWMGaWYmSurDGC4UzZT6UUvW8AGotzBwokZFx5ZRWi3M5Z7nXb53yNNmiQ1yVzHKh2gwMFond",
  "key25": "2TGx4dhixgZnsbT7a4Lhef6d834Lg8WhKk5AvAfLfCVoFuufBZqFBNwgxbdUMtLLML1MVAEeQQmXtroz9CEQe9vo",
  "key26": "3ehNuJPyES5BsBJF1DJDyqo4Ug9W6TbAs289a1XqHT92VK6rUKwbMR79v6HsoSGBPA7tCB5CKdyDNg9PGcg3Yi34",
  "key27": "3armgCaLVBcnJssmaezksYi9R2NYC2LSWwBBtmcjVR7GpW7UVExn1gRsnZrhramiJbndN7xkBFqwmnHQJ2L5nnHN",
  "key28": "5HYwWqr298iCRNqjFSNm3sNureeNShtW5FZQCwcauy66A5WKcYQnXH8XbwHxmQ9RcPaBKKtD4sQ35fEaXzrquPyy",
  "key29": "5mbUdHNjXFJXf1ebTRbwfTSMQyJ7MgJxc2rTWs1j2MrW59p7ECrXnJgiXwooHrkc3xMZPmZ467Z5KFA2S9PUAA1E",
  "key30": "3LfNFLWvSdJopBgLpBR9xx5HkyWj7X3xuMtvFUx8DQLf3CKELPP9WKFwqE5V6HGRYiTpRXvVMUUxTUo1gmqFnRvD",
  "key31": "4RM54jv5dxfPmBqufCPyMWoBzgSZpfTux6L4qK7fr3JttTGz1eoXbQy2qr3ZqrXgebm4TcDgTGMWKKRvWCr2mJEG",
  "key32": "ruVWmKWgF8p8yqWRmetudtQNhq19wQnHG1VD27kvXtYVFLi2byCaUX2DxM4cax9uyNDtnCjLHjL8A3Jzma7yEXp",
  "key33": "2qDF4RKiQTLqy8EfqxJv9Vf2JaCPszMj9ncCd3Qiy4vv5yQ6wMFrxYcX8jgN9dxCPZFk1UhHirYfARxnbwn8T3RA",
  "key34": "joARcreuRFtnqoa4wut7mQDajergdCpc7SqZQngeLxNG5jzidT4aTYMj1nGLdHciY8LEMF71CXZpRDCh6FG1AvH",
  "key35": "8MNhvYrioBPewJzZAjvLh23WMaViPRZ6iNPoRYTLMf9PT3uGphjGn6PweVPkHvMbJa8gAACajGabQ53bfjgAxkS",
  "key36": "1N93ZtN78Ajt51pRFevmNCSEVahw6sw6YkdyT3uN9QCX1nfXULHkFfMqUxnURYLAV9wnG8PqviaD5RYjnfLju4e",
  "key37": "3bULmMv1WAZbBaaK7HG4VVtdNZgm4K8UgC7XLXCGkJdhDepETz42Ew9fEzZ3XCDAcu6wzWgAZTETncH3tpp56ASA",
  "key38": "2dzzxNWY1aiyTfGrgLhYTHtpmMytoqX52WLJmGFSBSv6zRyejvDLw8cFGmAdC2r9r2oAwvCdZkbXZGjR8eiCKocb",
  "key39": "croC16yQw4gQ7ioV9UfvDs64gjgAzCqQfF8L9r2MbqGDvFgmM2U9QiFXJTy6cnubU7B3TV6hAvDKu2cc6PXde4T"
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
