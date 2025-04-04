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
    "3wX1hVYTB4Mr9tiisFpzvugmUzoynYow8wXvGETyrLyzKfh4Hb6xKgcPXkbpYXWsNU9AaWswPLwGNQcESjNiJwDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abwRyXF6RxVVJg3M95umd1uQ4tmvcqrJWexbQQsPx2KGotHqoxkP6DfeDBGew9ZbxQQsAx19zPpwuaKRM8PpiE1",
  "key1": "63VJigoqVkuMTH5p7HCL2udgZrpiAxpWM7ZRp9tbPaiFakf1c8N7xq4XkutzyJY3W2ZJm9tRipPSYn4MuHn6YdTV",
  "key2": "WnG4y15yhLZd2k5mEyosRq6jUZUVTSGhoy1Kt8RxdAA56m88bGzw1B6FKr8WWQxVsKuKXW8oswn2fTYXSBU9HRz",
  "key3": "5cFFZqGYdSmbWZL3sum82mWmvNmhyPPpcWFw5Yof4EVv8tiCat5oAthGyVxmisLDkYq1tGwrg51cWC5ya1SDyHfu",
  "key4": "GKpaq2K32WqVWSgcrFQt7UidmcymrtS8kHYhJRK8MAK9wkKLtXSzLP9gmmoXvLcfdNF4kcYp2kTvsxZbtBkecFF",
  "key5": "3J5MVkRxAS6U2uXbL4CfaTPMhTjeZmFeZbtnjisSfytp2obLyiFNgBd9sGKvJrTnc9tHQiDSnVKnVyHucrWkmib3",
  "key6": "26St1cvQrU9YkZrgBLz1TFvi4rHM2Rq5CKnvH5dRvFKu5sxpaXZq9U997vXbG8pTDVdCpcdiGgYaSWsQYj7jm7LU",
  "key7": "4yDKy45iommi5dWfVAopzy2myck71km7MTfUZwAeYWKz2Hk4ppV8aHkjJGvXWDg8TtPhXdHk8xi1ompm7RtdLmNY",
  "key8": "3rkhYdDGpYNK7NdXsJygJSNP57SW4mRHtuLqXHcUS8mggdfV122zMppyB5bGiGVP91PRgdmXqRCBa4LPx3RdCCRh",
  "key9": "5p8gpzP8fNnBUkxjipcYBV46fhrEdyWbZJGGA6T6nrRbqBbQTcWX2Vso9eAgA3vdNfDkMQKKMSoXybADNvX1fVJj",
  "key10": "B3NmwgLD3ZhTvqqgf2NJGpwpL7moduTAZcgEasahxbsLAuiMLLkFvWaFs7FqiAk4SF8J8BzeK2o53tcgFcJ8Pbo",
  "key11": "2SUPC4TyVh2jTgtBDWTM9cWmupNErWZZBpHiKFdrusSdTg2N6WMdrXrWExVaVC2V5xcU9kCnMvKe1FzjmA786GgS",
  "key12": "2wq6XVZwPWAq1beTrNiYRHZEHJe6qMcyT6NVzZMVSjqY6mmzU97nxWDpUbmP4VjSqsA4m2haarKRmkKy88MKg9jB",
  "key13": "3MfPckbRqt58sGTH6JgZQCxnq6F147BmYcUwZG6XKYVddkXugeBy8fMvENmx3bWQGZ6pmoJgwJU8LSu9aqsQdnMs",
  "key14": "2RHJUHtsvbP579G3yg326MzCkvGJ3a9ijMrBt6oaefBe3C42USiT9TAM16ErLJg55KETPTzKXnbPAzGa1vncszFg",
  "key15": "2gRBPJk8uvFBbQ1o9XtHFK3QYQNMoToPf9cJ5VhNZJghxJN16ZcurGxm2HzNkS4WZMfDAMSG1C7zD7JAdzUngFBW",
  "key16": "387xMSEMwa7RNGXjLuuZvP1DUt8YHEZpsFgCPhJsfyFLKQEEo6KZSUN4cEdnjCcLCKsyAS5pimDbfHGEANEMpwQQ",
  "key17": "5uKZHbeVuJTq9nChvnpZrfFDubvVDupfbXWqeeUaPQbNQqrG6FtAs5GYH8DVjKjPbupdgxxkYSH3cBhPzM83CYbb",
  "key18": "HTcT1ueT4WU3vi6dYc1UVBWdhM3yoPdo24xtEYMXKpmXrpj5JJmNar9aAnBWWV493KZ6UmGEPs2hQidzjJ6pkBk",
  "key19": "o4B8GST9uwE9QcEKsynSrRJAYjmDM7vZS6qU3nu54Vv2QJ8S1VFGDnR9UfDXxJeH4xAiR2cChf8vAG16edtn5Vt",
  "key20": "2VzGWWtQzW56AGRThY97aMkHUJvEUnTaADquGZiExSMYKYue2b1aAT4ystG7i5NquDxrgZUE8bRrTEG3dPd4P1hU",
  "key21": "BPqEMZD6eYTNqYBTRuHCQzLbkaVjoSWuksmzxfU2gxwHQcMghoC8HnsTtH4fhr7RgxQNGwLJ8B4YZd9aPnthipx",
  "key22": "21XhZQsyvEYygpcN3TJMDFcAQ6jdvZnUBVMgjoF9pusrc9sXLvebbjfUhdb4XA3CE9AdWVxWJFw2GMndnAXaRGv8",
  "key23": "4eM9H2pQH6HiworLUqiPNnVf97x8WrbNUVEjojk7dfzqPg1Eey9WuL9GLzgHaVsNCm1pjYDiXabHk9WEBzonjtjr",
  "key24": "2QDgzDdA4kNDGfCGD8qraXq8vfGTuyMpLX3xeumt4wBpzdztnTnJ2tX1RuiQAmXwRJdFDYXRH57zwhVvtefkQau",
  "key25": "3RDVe3S4RP24mVoz5ZPjRZWsE2fThnCxN8qMnmufUmJKtcoU8ESfUVJJioSM2JrXdoySrrMzPNnv6MLg9kKVSmjF",
  "key26": "yp3Xyry4ANrWzoJmqzBUvqUkHfPFDoPqub6mfuBpKraSiwTuTUUwbJAX6LNH7n52LZiV8BkqD3vnKEveKwtpaVX",
  "key27": "5n21m1EP6eFqyzJ7Uae84T3bynq4RMBR1Fjx8pBVaJqRmzAvzKAmvKNPcjcz6gcaX1TRX56hL4YZSonmy4J9uC2t"
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
