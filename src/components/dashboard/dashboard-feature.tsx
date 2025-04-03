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
    "3EvXGhYMNJemomBmuE31ce8dPEv8AJjCbvB1mSuGcj3Tt8LHhzfqRDEPB5gcPMtrbpzn3JUi99Eo1qByiiCRSpeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSADVDGLNSvkEwHftZZ6ygsJFxqyZwJTpu8qqjpYbcvyN4vsyGngeeYvDX6h3WRj31LghmguuAsB8L1BiFYGrse",
  "key1": "3LXjHqEVBHQCgrCzpre1j24gJUmyRRWwZZs6sDHDmZAmMxVHMJSvVw85V6HwV79tP3w9cKw6a7zFAV5LLnvwvjSB",
  "key2": "3uHLNtzZDTR6m2wPyGEf9Y3CMcrhcRd6bPKqWBChMfk1kJUnN8xR3CGz5LzqL5zKzyoHPx1BEazAkfmtkLu7tJNu",
  "key3": "2ZuBw7CFF9un8qBVuaDN56EiXzpUWEjatJNYd4MmHBf4uSHWy3N22dRcUQ4ULWtnAEwQT4xZcCdbfPJMigs33JB6",
  "key4": "2ypVmn6UuMLjfMqoWmTfRETXRCM5ZyD9ePK8gNb7VKZxoJjAneLrZ3NYMD5D9SgXa4mJ5f8v1vdYAmt6CpFEkjfk",
  "key5": "4nWNrTC9TcXWRK2dNSrR5YyZsnWvzYuR6m2YJwvUWxMjGgTqYdXMtxFT82Z5JxXDRe8bBZQszn5YGFks4WPmFB7H",
  "key6": "3XBvx2GrPZaoEqyxqsXPPsKxziwH87ZDrR7x1y1TtFmAMS2SXrEgyTou85XkXSHDLCuGXhsoxPGTMcE8RehGPZpt",
  "key7": "29JGUQ62U9kEd3tvVTDFb9soVnG7notsosotcXjqnBzi3Tm2nkXNx4UckocEHWoyhRD3G7Lb7FUKzvosJxdMhNVE",
  "key8": "3gtTyLwQGNpb4aAfwrzb6okVvQiN5eYWDe3ESbRrSUBkeUxb1dNNz2qYLy3176JsATQJBVa41pSX3yktkrAYveTh",
  "key9": "5Pq8DpFXWB9MPPuPFBeyZvo8Fu9xPCyYiypDGuAufq6EXM3Fc4u1ojQTNu7gYsNc7Ef6QEokU9VMYj7Dv9YbfYdc",
  "key10": "3m8mPfsNRN3JFRbgbdxGK4hxxPVpafAQpZQnrEmkHyY9wxPsNEnepYxYvwx7eLvCvJovTbtcDazcVf9k9SorQt5k",
  "key11": "4oPDF8sxNeSu2xUq5JWXoYRpC4e8PLpYs1QGTtKpdihWyyYTt3rF1EKSxYVWk5kTaom1sA9ZTEasnXACfawY5xfA",
  "key12": "4Vfs7wJxGsKRrB9e1rz1Bht12vajZYdTFFCBHzuzjX78qvAAAS9MvgFDGFB2g7F3mhGFdVtjQihefaFJcNtRaASi",
  "key13": "2a6Mb4512i3DWHUeoT545uEqycGhTy1cTehqS6dmJ3xGFY4sNCFvcJEkyeNUXMSvKJZXRE23Z3NC3QQ9t8VWsyFP",
  "key14": "RrJmQaepzFcsA6HAUVNr8xWSKd15DU8jVaoDvc5ozzqU3kUqcnDHJqSBz5WDHUr2Ke1399crpMssNDYk3FwgSLt",
  "key15": "5qucW5bUXKV4gLnssLSrGfgUXbQxiKq7JHD3ESTUF9FV3zAJmqtqc3ef56Di2VfWowTJd65bqhrCrDTg324VYYg4",
  "key16": "19NbZ1Sc3jZgja5J4NVom8NWxSBwheZX5NmCnoJV872bYe9L8iRLuT95nrfhDA2WJpYqRYuaNeYEhAg6ur6rvcS",
  "key17": "5yxNMm66d9rsdqMq9eoGN1mZVQobAkM5FARzgT5u2Yp4d9gwmQc3wtFDd9myH8JmNR18tJUyGJjrxumRL4MpkHXe",
  "key18": "PghEw4WjbzehLT2eSyoQjyLb5Kya41vVF8kjvNwMFT3GujAFumFE5LSJbGuHtjPw6KBhdUctX38e14VYNzJYhqb",
  "key19": "63R5cs9vB3HkfYPeDQj6LLKzZt5Yx2MfwBSM2nnn99V4fKv1MxknRff8uNeG2eMxtLUvw3roTofAEzmN4T5Lwzht",
  "key20": "2asPuYVTNDzeX31Z5K9piM11C7x7XuSJfqsGEaPANPpghbAVFYBJK9zXzFS4pG5XeBVrvVj4uUg8ffYG5vNzeNqL",
  "key21": "2mnymiXTYjc55jZVKKakbZxsRSSSZsVrCpZVCYQKuHhoi7RrnLGNFSfSiUZaWcbqeA32JUpijALQuDSSZ4nGwqyJ",
  "key22": "4HFRmcXSxb6aA4KTmz7miWfJaRdqvaUnAw6GL74rWbsfuKs7uC8qjh8i1iXEZyu14Qr6S8peCkd1Mobm6U9VYoW6",
  "key23": "4JPzEFrAVZxL8YbvctVUSQQtPRGkwkk5vee1EbnJ2LLVtC9eVcNtRGeRMSsUjNg3at2D3B7sLDT6nCZWtN4ucmMq",
  "key24": "4XyNGMKtVXsiYzzEHWrZzmgdEJGhcSM7i2hNqZqnvfDyH6iDJrCpFz6L8LuSsk7ix7kuQbCSfBXdEALT4Gb51FC9",
  "key25": "3pH8Ya1MkzRUEY4KTzN7rMFewn7jE8363ofcZKV35zSps5sgboQEH7qTeivHfk5QcWFn5L36Zhwk63stqiJn2WPA",
  "key26": "2wvTTviN2dY63qJpU4ZwZnup1o5ZUcP6Zgj5zNAyG5THUeFxxVi5hgcNkMJYMGJ4Kz8GY5HVUmB1r1BCLEHeHHb4",
  "key27": "38zp9p7uUBrq9U8a7U9pJqKVMgfrYPiZA5h9uJv5GSbfjLmDSCxNPA1hMqa8QqaQbC1GD8ZL6Xr4aXk7CPRz8ivx",
  "key28": "uMRTE95JRpe57UQhjc9KUxZoY2CAXjq47gqk6Z8DfFZDMfe8SmZGgFJrw9q2hRDBfq8onpGE3RS7S9DzpabkHZq",
  "key29": "67hTgisV6Qh8NmuLh3pk3TdYeaT95gjZdMLkZ1uWRjTVB5HoFfMkEbhBNHcnR71zUEKg5uSej17HmPBfYskDAAw4",
  "key30": "38pEi5gaUBGtupuY5tttJ4qTie7tq7JHjyB79qA7xZBkcPRKoiBfDpttERXKR3z4GjvfwELo2ZxY4NY9yqFD7RhC",
  "key31": "UwcF5xW3S7YSF38UrgN7M7cPCnyyFLMqAQGw6L75513Lakyyhhuu77cQEKoXBsTDqFuN5SbaeWDFb235kGJ2enJ",
  "key32": "3dRYAqazRzjVEU257PYSXQDSJ8LSkEqLzbFRHSjXpo7bvSxHZY3Q8WZXEFkSobXWZVTwjzqXoAk4VUSR6tFstdBU",
  "key33": "47FQTLAPaKcDX1oC6vGtygQM86crC9GeQrJfDNG2Qjsvwk7aPVJAB4G4rxtupDQpsi3jS3MwhqmoFZdhUzcREfDT"
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
