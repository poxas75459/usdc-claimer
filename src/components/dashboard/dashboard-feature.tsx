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
    "3qJoAthiw2dMwLhDPnBb9rhfAbYJqgGLYko3JpCuhoQfcUwU6KSkLY2jtz3uVy7nE2U1qFcvm18rwtzy79our2x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMMJJGqGqWifMSUroyBcuc8WVsyaY8bW1bMRmhBSRE5bKXGpjSUFf4buraUMf49yezCDrP5QrQCBHedrBoTE9XZ",
  "key1": "RzfRPR4xi1VatwZTt5s753DMPzstEK6adAP3LkZHmPKwtms5uLGwhsxM7LqVjZhoJCh9VhVoBLggtNK9UqqdT8Z",
  "key2": "5aUdpAGKdyc4nzZVo7GS3yFpdPC7QzMUQ3d6W2XnYgXH5YquA8RzBZAKK3a9JCvu9yoeajSSGsdsy77G15uRGp99",
  "key3": "4kvo8Jv61fEK9f4P47pQwxZyZZp8hnQuGnRTEqeeCABHw2zkeHXrgKhdbJ1wtZU9DeaNJSCeMX5JbKKKzfNURae1",
  "key4": "3CWjCVmaaFuyBBvmzM6ZX7otbs6AuKiZrxLJn8qeZjQkXgjBzsW7FaLRbGHwjXyJXsqXkWTYkcmPybzgb2xeXNDX",
  "key5": "AAantEnsc3BvpETvu2Jdqf6DtqRuRrJ3AnGRbaN9Ai1jSxWbqS8Dz7mheUpxLiwAjjx1FDneE9ZeSKUDtpdyowE",
  "key6": "yknXetxT76Ax2DG2jrz32xkWJmpE7XhrF6mJh5X7c8RWtBZWoeuTBScxphv2mqty7MYPEq37uaWbUPkJMEmh2q4",
  "key7": "5GFRBkdq8Gw3BcUEAPYuyZTRrakxZgBwyFzfsgbvdgcniEebMeWZybyaHzxVBxFX3GQki3L5EzKykJEiM1gWg3UG",
  "key8": "TPziCnsNYh1cCSSwJBXQAT8Fx81xt4bYEHSh1nkFBvsBusKY8a1LMa1awyWRXLb7Lm4epHGwQWuSpGSgKw8iARi",
  "key9": "5d758aiYBZ48WzGJS4pFBgEGkDx9PmuURMxZqcjYmXSas32oWFdT7FbpdxSyTos4YcfnhctzAC7YJSo4MLkLbVub",
  "key10": "r9Y2LXtU7zRA8MnJUV7icq5fRnxfdbBrCU6bxM9Jqfuy5eQ8Yi7oinpxaiBQqMZhHjN5nSgsjD7MR3xHM74DLtD",
  "key11": "3noZWHvDrp4RTrXwUKqGHUUQ5S7cFYwA6eKCu6owgYmYa88Ldxsurz1ojHba5FDqQemtGg7gydeMxU69tvuFgPTC",
  "key12": "3MmM8x95TJTNmsQp4rg3kec1PDdnKrJWgrNXW4nEJfGFdPy274u28SGX9kcnJWZudbHaAgQSNryNYWaGMiVLuBUZ",
  "key13": "aE9M3VzgFo3E2HQt9pqL76MAowkXbvnCUQemoWRYhiiPnNGRjgxF9WAJQCfvGSMMa828D47Zkdmt7YHwgQx2YzA",
  "key14": "HZtTJ4s6iqqfKvkzzikYvvCTDtiagxuz5mSKPhooXkHPFpHfb2Lf9WkvEJ2f7E449nDJUnnSahpxnA1sjUyC8i1",
  "key15": "5nShgybvNRh8pvAGCZXLdfpTxMyZYmV2uTGJPrSSy9TiAAzYdadFqRrsnJKt8c1kgBVZ2GKxALWtwNJ9UJzcR972",
  "key16": "36WEXVx51nCTj14SjpYEMsz9p2vzajqWXaHQ3Dp33uKwaHXML799AGRiPNukRxNGYcNqphLtXa3gFSQbTGSbEFrV",
  "key17": "63njkAUUv9X2c8FXyUe4EJyqMVWcujkfYpMdtxADUxR1pQkFKVNaJMzhP3HnS3qNjNaCVzzC9B9pGCGJDqnQb175",
  "key18": "aUCUCpgdDpBBLWoKxAPWPyQgAMhJZGArDvBfXKqdPmxeDxvzDB8EbyXTXtwpFxtpTcBqgKR5aX8fcX9GrEmTzGD",
  "key19": "558aRSf3uUtSA4uFqib4Yc8fe9xbhPfPX7khHGk8PEfiy55KqZiTwbt4ZtTGLdetsW8uRYKo2ArPnwFkJPRwjBP5",
  "key20": "5WuewrQwyNf5kD2CF5vfCKtaQgWmBj6Moa8LMVjB49cvc5rujE8ki2BzY16WQkVJwGBQUzD8VostJWCGjNpgHRsk",
  "key21": "32Xhgf4EdF6DvEYGDpPkMyvChHuy1bkLFsfR4Mw5o4sPhHPiRAqVP9mSYG8T3cHfBZWxxLMR3tnafAmsn5E7siiQ",
  "key22": "4Kn29aWFqh9xZhAZzDzWdLMer38GA6G2GRXmYsuA5tn33GTvgcMUUYYGJaG5iVEZ7ogbh9KstXGkoeDyXQeWDFTN",
  "key23": "2MTwJAYgCtbFN9WeyVKysyjEKqXLs8saEbpeJkBjgegTQv8kFop8m6bntkLybD5EkAH57ok5Wx25A9GmzEJAvhPH",
  "key24": "2ZdmyESEkWcKPiSKqEoKxDNFGPhACK6bWDXvc2MFSkShtwZD3e59b9gNDBwbHyxBGPkh3a9uGis389hcZpPxzFfH",
  "key25": "NidZBrmKUbmZ5YsvtWVm29D2oheLFVBk8cVoPqa1CvSfyL55DFTLkcSuLmjGW88Qcq95USKU5iasgRgDieNtBvy",
  "key26": "tEEZXFwa6uwzZvkf67jGU9LMe3m1xpeDd3XWQhw2SwbZwC7Msq31bFSufW3UTxcqszFH22VbFucu7hstMP1Ny24",
  "key27": "3F7N2YJWonHk67neaBuwqdrMVatdq94GrnYQJ5pjTGs6sj5RqAgR7KivieePctj2CxQeVg6J4b6dXEin2uKj3iDP",
  "key28": "3hhEB4HGC1q7matCGDMMLSgATMRVrc1zw18sbfxsTqgZRwSxTdFFp5NY6fHXBbJ894eTE9UjV4LubTBgHcX4TF4v"
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
