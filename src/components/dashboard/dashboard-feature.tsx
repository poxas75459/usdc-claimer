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
    "38PdEJuA5M6hnzQWowzbio2JsRfkAiZZWayEjgv5tv8VrgbbNFznKm2Sehs1NWd8tiWV1H3W12AZADfXBiFi7djk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81yiV2a4cfQpkNEcDkmDndHBry64WquEq4VZRfszh9Nk9cFsTUWaNEVFKqUZoco6dDTJdK3QeL4eDZ8QXqQrZvA",
  "key1": "5zMoYwqMj63AXEVcWtrm6Ed37QhWMV6SodKxK7mLneeuzvUPFz3A8B27ubt9UJUh8AgFYMwyQCgPbEkvjVLwSa32",
  "key2": "3YYR5NVsUtR5oGcgSrq5EmUgJpPcYf5AKQWycmJUnKhXo5Kf5JaGa31j12FkiHMwbouzf98CanQsmMMovPMJyxzZ",
  "key3": "4isNJkNtafndWJcfUKrpuHNw4oy96WLNfqXRFz9ALLdFHwKYtTbmB9LwYCiMfk2eggNVfgJdUeRkChKn1Ly5523R",
  "key4": "2KHyCHTR6p9ZNigRr6xDeSpbkrjKDjm1hosS6y7sw6tMEmutjYyQSQcR7974r8i7iUbPfDDSLXPxaQy6dvYDA2YT",
  "key5": "61yWb2fcdUeBMPrk1b7d7RjCHHVh4BFxWLvg21mJQSNnjM6rKiuV2UnJTDdtUVDo9wc18dJhx92DtwUJuKjKy5QS",
  "key6": "j7hhww1h8YUvXYsMj4ojq6x9BeZd6bKyxkpuCshxNz2kXaEqexKyTms3FKp3P9g49BAmqJbaBsQAfckbdguLt5d",
  "key7": "5su3enSztdVyHpfJWd9sZBXp9dKgj65GGpFgvGT6xAwn8SENwSU3Lvkf3AugqAi7qKTCLBEPFrDfrjiVEsCxJiQM",
  "key8": "4ix67LiAM73hVdyBJZHeeew65kjyRYB31hD29vKN2nwibzxHRjs3Pc9fKQx3yrSvt6WSqyrw1QV65K6Jbj3yx5ay",
  "key9": "5v8naxodWW4LrkmUWJ8fTsdZgaYpgKLR1sazAMdqbXyWjodYbBCtvoSJzzp8StsfnpLojpXNpyHGfgWA6PYH1g4e",
  "key10": "2uLPJ6TFFm6Ju9wFxaD5AVSxw154sDmUZjHrTRMPgMvcLc9LuLLFYYZxQWxqfpKvk7fZP8KTUvj4tURuq4EFzshc",
  "key11": "3No2jt26CVuZ3qXk59R2evBUsaJfuxqWSwV92tTD7enAESGNPwNi2yhkfWUF8h9bFape31WGEMecQ5Tsfg24bExx",
  "key12": "2D2Q8b7ZYqw7hcn9EBJLRUJyqpYTBpTA8LZZviCQ1wVjCQ2fgnQQzjL3xf7UWw9Wvjg9j6goaAJKJEjVGiRZ5rAM",
  "key13": "3AM1hVNmJtQu11RkMdfExwoNs5U4Z1n9S3HdzqdbM2LjzG6Z1FBRFHFBNZXUvVDJS1ofj8e3jajBNxrwtcYJsM5t",
  "key14": "aV5Cq1QnD6BfHbKHifiAc5FqyJvfQ1x3GxaW4Uw8VzvLFquzDmBFczDEdqWRFZ6XeZgUua8cfxTP7w1DyENWs8e",
  "key15": "25DfQDprjtosvAakAX721gdYnpw3g21XUWESvpgKtcbzrNvTzHv29op28S5W8dfLPYGhshfia3vTZmCRTNYjqmd4",
  "key16": "5YAQpnzcmjBNSdV413DTSiKw4rJa9KTVzdY7RUcTqGyy9iF1msy2tMfwZ3B8qEFJDbF7mHhd4LX671Ddgvqh1LXQ",
  "key17": "2zD176Rkxz9g56YZQV6hS5W2cNHD9v8hRm6tsRLPEXoXGsmRhusmQfFqXLY3uuT7xSftYGziwNeg49JRTC7cgmvm",
  "key18": "2ohrSjpGmM4QYfpaYshDLke3gjGBvDNEBy7LGypaDeM5Vh95YZzYiP1SQkNwrBoeHEu89QdhwwwdbTpFzUy3KtLh",
  "key19": "3pkPkk7qwcW8bN1Hea82ZGL5t49F6KSUKNM2zRhYVHKLZmKQuhMMWF2vgkzgL6yomyuegCsUF93bL7dHPCjH7zp2",
  "key20": "5ujQDijzMnG6kkvQP8Ui9pnJsfYjTSKRzXhLzox25WYFNfoLGuZ72kxuRSkcRD2CcwN2ZaVz7bV9Ac7HQuyACDSc",
  "key21": "5RKzor7VjGau3r3jiALoV2MJfTwqfJyCb9FVXH5kyzDdiPfiYWwDdp69qK5wjf1dzeaUWuDRP5grQ9sCzaMN4Dqm",
  "key22": "5tTgudrK9a45kXnKFmEeUDtzenZmbSZJ1dVHQD7rCDHF1yAtNcWso8ZcSv182X8MQbKS9q6j2JcDAb1EHNDH2Srz",
  "key23": "27XWoDBsiogw9TZTgVASey2trDGwtpVipi6NcyXvZ8MnkQiauWARpPNG4i9MfS624NbET7ATr8HaHN6AEZJUqSsN",
  "key24": "2awqN8A84NMWaJ1PWJNDHCLKwdr81gxvdBcjsLUo11RV9bD7S2RwXztrsWgNYgxfit7Y3xSxbbZS1K9iPgvBEd5N",
  "key25": "62nW7D8KtkzauazpZgJMbJwVuD9qBVaaRJTd8RweVUjoGWNsweRg6fM1tFEKDz2wdFBSXihCvoDPmXm8yAziCteM"
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
