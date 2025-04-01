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
    "cx7QFXny8LBxPXtXwX4gNzSfXKoQgE8gUUL2Yo7HuixW98Y7MikfhsNL3chZL3pAUcfddVSJ1szffdf2UMinSGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPC7sJpcJrKzaEBB1vocV6B5YYh5NAMCVnANkhznWGV8FiQ6AMtoX1tDQhv6PLqedPjMbp6KqBLpy3wcqCjvk2J",
  "key1": "4dZaZNB5D1jAB7wtTAnj6K6JEERaRK5d4LGufTemGw4rrM7mqHpcnLJ1zEDxHtyN1nRhhfA2VW6JRD7Q1Jq6StGA",
  "key2": "8Q6qXJUVm9d6mRRfAD2iVNcz55d3MvpheptnUHmCL5G6bhBHgPrDRFcB32zoaasVqnhzZKL21AiJgdptViHTwFR",
  "key3": "5KhCY4pf5SLBGijEBjvHpsvrirLZ17Gs9MMtvqagJ8Bk6e9pyMFnr1d8X5hNXBhBZ97HwynipEYPx3UiPuRLJ9DJ",
  "key4": "62LdNSTUniHCGsLiuL64G43mGEsiUF9qVoJQLMfR4dvbaWZ8zJciQP2zqWxbYbU2NuLgkN4WPAS84pPLthp2D29B",
  "key5": "3Sb6vNxmcGRcr6Y2RxpNYmRgV4sssDKCkGMPPvnkBArMbyTZFuUoGPaRvcLeHP6f1hcqyJtwKqDMjYmUt5oAUVrE",
  "key6": "1XxP7PMYvrb5HqfcDmH4TkCo6v6VgsbCLbyuzN8gY21FYu9bJyCkZERCLjqkzj8krFwrg1ydMQzUuTZTvmzNcQm",
  "key7": "4NP4o24LbkyhjVMDzmASpLMANXknmfuw6wwdHeb6Mv3VPc74T1uUuN29MoxKJmsRPm35yrxv682mGysEoVMj7gAD",
  "key8": "66q1L5B1bXq1i5Yz1phLmwZCSgK91coAy1GmMUcidTZuR8iqf1yLxaT6Syn6z7XoNGChfJfqXAx98ev1MfG6kcWW",
  "key9": "4N1upUmd8pQq9QLMxUvdcJEiEfZihmAfGaeTL12uemujCLkExVRmbUy55dbxDbGjADbvcSpkn32drDoihXeABy16",
  "key10": "3MpuW7M9C7WSxoGqBEUQFJRooH5iA9Z17T2dtxZxgpjipMAcZJ8NnCZfdcF7ywsru6Pz8AhCf5DrVBQRbUgDK8gf",
  "key11": "2dqUy9XPWGuyt8gdSgkZNd5nbTdmmLS4RM8W6DJz6VfzHykb4fjbkwwLkBPVSJGA9S5RaDuP2KQyB3D1ggCyQ1wj",
  "key12": "4gakqhr4tJNGB2nbaSGueoCP4mavbQSgbJ55RV798bNCJ7DkwtTsWh493dNGN9dwCAwtGxKQEMrjMmQNH8fyLeuB",
  "key13": "323mfw3ydde6xftJijS3WMEhetYkZftwcSTDQgLBrP21FAipaGCdnwW4Vfv5nQ6JZCmUghxoKySepfkyBnWMwzsQ",
  "key14": "5yEbG7osoDxUzJ7DSwzjobAb3yeuSvfrky1oami5ZnKY6z5pvKcUuY6Wmxz2bfGEpZ6pSFABcNM8YmNvK7P8QwTJ",
  "key15": "3USZkw5dmEhFf7P2fLgqM4RcTM1Jp4Qop64seL6tVUp4XLQnYPsqkDEjfqxdhEkU4tpDh3SM2dkZtDW3mfdiu72a",
  "key16": "3PyxRo2GpggnqGFmspYjzy8UsCrEUhq7mAUUumKbC767STVifHCMFmq6dWqMK1VP4vpM73gDLw5gxJKCfa4ALpMJ",
  "key17": "5kSky5xkGjFEAwRqn4c9rKCRRmsCiubtMe5Fwf2TUqyzX9VEAbp31i79KaRpbgbE61upd4uHG8HCMQsctq3v4GpL",
  "key18": "3tm1DxEri8jzt79qgPu5xckWpAJqTA8AKBs1uLUksRtfLWjJ2ngqxHzdQ6aky5sAKJ1rmRWwfM8gNHbrTCsjszLE",
  "key19": "5AABZyohufyfnNwFnd4qcEzihTvJD9SSybXjVCad3ZhFJfZBA25DgRMnxbwfnrAgc7h1j9HbQedsHj5ELTWGAB7B",
  "key20": "3bdW3PUsmNBE5FVVtm1UeGL92Wse3Pz3LRfxtfG4eEcTKeL7Adjav9mLQphKqycUp5r5h4XP3vN3Gs2F8HiBpbcZ",
  "key21": "HGh7xXZXgbM8ZcSTJ5YCxTa5FoQ1gHzki16JxtaKxoeoDsVvw85btFNF3ywbtsuMUhHy5HFGpgDsg6ZyiM5JsbW",
  "key22": "3EagGh9ZVnCWFxhz5v9Acd7AUgJHALbzoZDpgcQu9stTnCQQNZzptFV2WbTe7E8jeQr7KnzdCjcd5MiML8M8oCtF",
  "key23": "zu7hLBF2VwnsMxzBHyncb33pbwrmU6RRAEwKGvVVK48r9FwusLnhdy4SJxz9F5cfD2cXvgEJDnGBynH8D6CuCe9",
  "key24": "5AwS1MKHZtEeTrkrbsx69Juu6uq2draTtoBqKtGRGiFZD61xKnn8KCkyiuZaY2JHhcB7yNXJGBDHVcPHmqnuKZGi",
  "key25": "4rMNpQaWhQJaNbCZcQjS6fN6jTjXowtDCqmKVZLX9qw9JJoT6G87xvLnAXSzf8qsXPa9JNMiiMVvAKrQ3nUM5PED",
  "key26": "3opcYcTXAqrvGJ5jA9SK6AG6Z3e8fJRJeVUMcj8XVqJAuPM5om3yFctcUXr9NqLUpaJRHkuYvkGVnA1cLqRnHy7E",
  "key27": "58xMvJoWZEbwNN44Cg4vYJa19uN9SAh8TP9skyMWH3BgWaFEDkMk9mt9PQMtYCXEbyTDwWkqvP53EKKdW4Agejx5"
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
