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
    "5ChoVgSFdkVeEfJ5UDKgM9YTiiHvUQZyxMVkpZKn7HomyU2dZXXBz4sYFNSv1LibpJgitF6v9Cf9Sbh5aw14S3NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2rnwe8kSFY4aU6z7CMSYp1nhwhVxZUCw6i4eG6JFy3VNwwYTT9kD5xPRSVmpLQ8NGnsLrWFeUHQjHb33qz694f",
  "key1": "6uY1x5tzQnHJAxeMaTRNQCqoRG7neSUj3jMrrzTDjrLik4rMVWrPcPx1cG4jaDtyMnywBVjdKHdkHJJSVtgm8ce",
  "key2": "2XSAKpFbnHtQXT7qGd3uxYtGRUNiwtgVBycZK3Z2crVCdyX4KibBhy6XoY3rCbUrQ4cHNmQhR4EbAeMFNGXdcNwx",
  "key3": "2LYKrr2nL3J93psKD5tWSj62MYd6oKqhHJq1PLuBuZy5uYLec83WubfKdvaakaJxZ7vjNrwtVnPM8vc6F4RDcbvo",
  "key4": "4Wns5mn4qG8cL6hv3zFNufGyaw2GxVDDQxAwiFx8kXvXTEorD2j4h483t3K5hv85vbU9BD5bpHNcbVbWk1FBhgrF",
  "key5": "A2NU4suTupsYykGCi7D3Z6hU7hfsiU9nPtZ3roYKn1r36rE75oNcmfdQSjQCavTFcyndDryjz8cDte98VsfhsZa",
  "key6": "3zTZfwU5pfKLqAqzUz4chmPVEuU6xyffiHCxPAyzRVnqzu359UH9ypVtNzJKFuiuZDRPj3txsWRqR6u9BbrMsywP",
  "key7": "61js2dPZ7EkJ1mrj1abC9qGKqG8txHbj3DM1M3Nj8zEJqrs1s8Vnh4B7k8g6gWKZunfVs5DtmAFxdXtVoWJqZ8FV",
  "key8": "VAokkokZbTuRdA5xRakc5ZnmYyQa2YyH7gxFWhG2dvFVUJJ7WGPjwhaBFWdcWRbEg9hVPzsysr7G8b8UxC7WM96",
  "key9": "2nrKhBUx5KbpsyndSZCcB7wrjnMM3deLP9UijF8z5etTm1W4pWkn6a2mMEmDsKZKfspghbNK9Hf3uUy3zh4iPth7",
  "key10": "5KYrazzk5ewWphmgQLGfN6s6EJdCTsTcuxWv9zPpQ39Kb7LtuY2nfYoPN1WGo7nT5dtcHRaLp9pGwVNjBNuJm3fC",
  "key11": "W1itBnWYC71AXijycdZraX6FCtgEque2nmSvBoyo5aA2u6jErHLWBeLvJsQ5MXUBfomXMkFXHo3d31J9QqNXK9C",
  "key12": "3PHHYQvbxm7o15hDiPZ62QBosifqk1byYA46WUyetBk7qt1gdXyLorGJodppHt5icokN7NfhnbhJQrB26FwQYf9H",
  "key13": "3MLTLnvvwsENf7MCfHxgnqixyQqdexkeQiur3FvVS9AN65FX352ohJyWkGX9S7Hz4yukGjc6TkMEh5ie5uAyRzKD",
  "key14": "7JtHiKWPmamTfCLxtQRCrMdksthT3aZi2PwvkWKcqnEJTT94e3Mg2P7v5n6CGuko7hiWtKqgM2qq4P4tsqLhE4c",
  "key15": "2s3Eu8pVMWXhCVJiZ2nPrLPiHacfNZNFnUPSLJuey1wZVrrjSqXFGpxSYKQu2ZJsi6boX1WprJURjEmwGQ2JDaak",
  "key16": "4fWwqeYFACDKD2qZovUpc7exDunyVZ6tBtfCmK93vxvJYxnQJfaWbwBAYaiuY9sxAQKqdquSc1rcsWhqhhrNbQKi",
  "key17": "5YfwzZoAPcuqPBiBkbd7kqr8et9kxxd2vzZyRGLcngUby6kZLk3Co8XpTNLfeYbEnSNGYrdSvp68eiupu2pH8Pmm",
  "key18": "4hAoPdJoJ2QR4Pqmvyo7tyqdziDpVgkovPnFciCaKtET6PkHL6ypupbQraQGfDReefjQQ4wvgsYj7oysGNem2aZ6",
  "key19": "4BFjUMJS5wZAzHj1AjcguK39Xc9c8oyQcf2H98dRPbNPpJ1Hjs33hHJNxdNFtKTJc51UQxNcGvTCQ9kNHwCgxKBi",
  "key20": "4jsXpXLiT5PMthoT3rAH1tofrkJdyxFmaZJH3z8MVvvMs4bYGB7dW15qspE3CWEXDrrxnRX5dTfrgNYL43W5aP9U",
  "key21": "8NZhKdfH6XKJ58qZYpxeYKjiXHB6SrRh8NkdFf81yAQfDqig9sJnMs766dpqszNtPUvRcC824KkPSzL5GMGBEdB",
  "key22": "2GeJ4iiYsNhHHhjxkyvqj4GPhCSTxLZfeXdAHGqSrNgoCDXbpWKv2XN7gu6bg8T74ssVe6YVJQYkhHhnxH6iLdg5",
  "key23": "29kmdqqF4AAgx3kCCWNyhg1UAC6vT4zhLMojarq7fyHZvL9iYcpoWpp87VuWfFmMMJ4j3YgyRRDqwGmqNhpV7BSL",
  "key24": "3WqiT2zLohyCMizf2VLpiptRLS1qaJo8XNoV7ojEp43RwFx1ceppNhhwRAomhPNSdJ9sNx97tBaxUoVbNxtastAG",
  "key25": "4HUKhEZ34fnzjGMyzZwZdTxMJ4VhFNhWhFVqfwCU9iCQ99qpLjRN2rdvmv6kKo2G4yn1h9g7opBpKVgbWHuLD2Cf",
  "key26": "2Yv7EiRk9VAX3wgP8kh4AQcaC6AKebvHUWM8UzsTDXKYkiJByv7Lr2LiFyvF8mGgfZvQr7VtQTtKhcgvN2vKvAz1",
  "key27": "2q72PgNVJRjCEL9n3raPbnNrA6N7fxqg2yf3vSq2JGxmYy5ZqHYxyNxm5hus2vwopmEiVXDwK7nATn6D74bkBqXY"
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
