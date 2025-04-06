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
    "2hGt8utqLqVKCg5jNj69pN9Rfz2nB2VAnjjzw4W6k4QtNhyaQ9ZrcNDrn9agkEu3B6V4gf8zipJf3VFyrbKzW17i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdSvkMmqa2s7jWPwkkzZoX1FXSD9cm5KpH5h6kuwyx2q3Pu2k6amD8M5kuSXtESjwxrkdMLR8eV21vpKX7h48CZ",
  "key1": "2rxoKdK2VXTC1A3CX98umknnDyC46iCMMNMt6kHCgXAXnX1noLB7CUHgj7ywKsDfm4RBKiK29Cw6HB9yNMbCg6Fj",
  "key2": "5PKJxyPPt1GhRxnFLe2s7XXZoVUk4F5Uf7TkyLoQNy2Rxoi7RXmUKriUVe8MRiDSynoroHTQqgeGtW9KRmSKFVga",
  "key3": "27RBR35S4E6yBk6BZk23BQhHpVUGva48icw3vWnhg16MkMVQocDryausYTu2z1wfvPHAUX8BVfxsfsL4UhHSnnSz",
  "key4": "4D43gWZG5wxAEFxM4RkiL3nCRoPuhFnqWqdycMwBCyQw6LmZzgjvF6nfSqHFmbCCNP1neyqwGew5yd4X8q4Wswr1",
  "key5": "2nC9fUyUg7N1ohTbfsyd9gUgXKoiEMo7hVZxVpEGRnx8Swzj2JLqXwD8e7fjpg37yaWRG8Ycev8TnCEdZcrNuX2y",
  "key6": "4bUMQLmWuPLa5HZXetgApzZR6oK8HSUHx8CBV7qhpofDV3pmmNQSd8GeoKsHtYe7zfYEVzBiRvXhSh1QdV3AApjN",
  "key7": "494wFxG1sM181y86WntLszd4LufgDNhaXvotTz1SHWtrGUoDcYjv3G9Q82FjrconQWpUX7p8VXXccjQKTfrDQ9bt",
  "key8": "5QxPwuzCiNYDDgYGP9xoy4aFL6jcfRJEWEsv1b3yjue8gEbNaxkHvw16m8jEBqF38Wk8xnJJ5ZrvtSU13M2zbzoj",
  "key9": "3urFzzJF9mENUR6GfR1iVmFcNuSPvjTTMUaEKNuF3L3tz1H5hK7qeyNmKEmmppdBWYm8ugmB1qsiczQuvDARwRJU",
  "key10": "7p2JAWG8xR93GjF5PBuhdGytzRKHRUTXuEz7uhGPGoujodCq89sNjfM4tcmBgJautC1o8g8gqMNAjXzxj3TC2HS",
  "key11": "NVmV88F3oGubSczJw1BJ3GvxZkmmvWsuebk6rC2Z8YPce6VytvcotRdCjASkpL7Tp31Eqzjg6TGJRfXg43LMZ1i",
  "key12": "3shLF6Y144gcBd2upKSHGZHRjHJ2ZXy3pjBAKcQm7mhVQu6wCYU5AZXFR69nr1pfmvQonF2zgKQ1HGtTePKDxBRa",
  "key13": "4DHBV9G46odCP2LerFYnp7PTr6M6AiCqU5bjoFfpXZrunF21n8FQVUVz9exJB2ho2vYvhWezPsPeRPyGCS2hYh2T",
  "key14": "bodwyL6numfCGXaxVNAKx8heKsiLQzSQK9UYB2FrN7tcQeRFqnY3XU6eaKVbx7PAvoJLaERarHV3mTka4R23RDV",
  "key15": "5g7fGH1nmb2NaVRwC2sDtByWZcNdLr7dTvTsY6RY4v8R18JvrinG7rNthexXP1ZnXtXkwbfC56nTBxSbbzpBhfeT",
  "key16": "3CMByeELnxEW9ZJysg4TS5w2bonXKH9isrSyYAgs4kV8hnrzWq6FpFrVEiAuFDdyKR2nXAyR8MsTgnbAMqufQ4au",
  "key17": "42evfpqAwWBuHsWBNSCeHZn8nAkX78Gu1T18kXDe68bp4zaYRHGMoG97aSV2w4EGBC9vNDV5KGoJi9XU1c3epLGK",
  "key18": "bncekcP7yY87t9BHaCknbVEC4UjzZjxmCyW4GMzGkwhTxhehh7idYWJoLzZUw7nVZPSDVwCYf5hApTcNcXfTwoQ",
  "key19": "3cvDkVvdqzbXHKiPkSvB8S5r8JaU5oJapECRj8FUz3LgWvNpAGUsXPPCQwJmhs39MJMbf3owkKndGLj3ht3abU4m",
  "key20": "3V581jxu3i4W4GvdCT1uxNrTA9nSsYimxCDeFxkjiVxWvafUUXfUJfxJDGLuepittrUEKScDrHCpzsrqEzJx5kGt",
  "key21": "4NmEnGWK2AKdSxxRNWa8Yr7xpVaz8DimibjBfamxgxdYwRJdH1V7RidhkJJoUqngyC54sTZ986AsALxnEeWe5fJt",
  "key22": "3dsaShiKhXDteVxrvdkmGYgPDDP4KYaHdMyFkaFwoLBeW9dsbJ1mfj8LaBj2swE9BkCWTKcnfLLbkKKAeJjh9LMK",
  "key23": "619CRTpxz73BpVFeCm9HfPNGqsDwxFPJ3bm6iJjYjxxDwg6iL1jGsHrmndZRvg6nmDjJZZ1i9KT2mAF8AiJTArjB",
  "key24": "3qybCoTb82Q13hTjz8zf6eu61CyhHDaXaKpnMayANJErMKc8HKz3hP2iW2Hfkef4BZoXhENDxZnM6BQ2WWRz6GDr",
  "key25": "4QkRHLX1kZnxRTBoCaa6ZNtzUB6cRUsiUGqrM1pVcBvC4QjDaCv5UjPcYPtXPN82JgwXm4fve58hpBptyVZFUAUL",
  "key26": "c4XTngUZQNcsUHJrMTCrT2LF8qwpeLaP8ewLDGqkQyqbTkcE33LQBfejYDwmJfcSgArJwxDWsppyxR7epydB6Dd",
  "key27": "52EqWPRof2bwL8Aoa8kd7EwxsVZ49zqUXLs3jZTzhANJynHa7stRFJQSLKmVJYE5R8GarwXuwhA6chexzMRbEH4n",
  "key28": "5AFhGwyp6Jj8CdukdvFu7ejn6iwFs5oEMhyR3VmS1JtQmCPSf23ozwDVoBhQvBBZeYcvc1reouADG1RGBTAtbmAD",
  "key29": "2x1B6JAQQxFBLkQQxPfmfzo8FBqDVXYiF8Z8S4y4RYGPfzmjZRKHNrZY3Ldx6frS3sxDtyvDSddNWc7ER8qCnJHR",
  "key30": "oJECNtcct69F9jEvMiUxfnWXDGTKeqcaMZWKPorZi4dmJaNK3tgWdYJFTsLakCFgJZtDCgbHZAu2cbkCD7SuXdB",
  "key31": "5JzBgrqg2ixHqT8g9HuuFBBYEqsM6FxH1izrUJz3C8QnAF6QRqZAcsm28VLAnVTevsEWDX95kLtJbDkCEE2TFw4M",
  "key32": "3buAxsfSNHwW3dcvKXX3dp35hs8TMH2xeJjdXM8yX8ooq6vevMbbEV7hoPi9ceyfeXog5uajtTyCuAsYSfeAiXEC",
  "key33": "5A5obeQkSgAbwsDjXkGXPzDeCuWPYoLDgMKJVBqbXe899uD9E16WZ8RHTq3oMTUsQotuK7YzapSV5o44qUFJVsxj",
  "key34": "5HxZZN5ivhfrSe5wZEaJ87dGTfvFuJhydM62VjXv1QBqC3PV8YxE1AkHu3Xt2Rg3thrpwjXKmufz6oLhK4agzZKE",
  "key35": "24Acgvsb42M5UG6r6GsedmvN4UMVUwBsw8GVyTCrJe4jfpdCE3ebHxre7LV93ctGHcvPAdUJ1RLAnLfha7yfnvzA",
  "key36": "2ATYeU43RwmhUUkWaAJwUN2R5asawhjYqaQ8LUpJTPyeBc17fKER5nTJHiTACnvcfC85ryiP6p7JvdkjPEndTuar",
  "key37": "5K5CmAxk6RLuEb7Jg44C6D4jw3541vye5EWU83SCYEF7N2MQswrxZdkejhSYyDAiWSTXE5Lu3ffDvUeUfFBMiQtq",
  "key38": "2hdKyXiwfopvg8WwBBepfvBASkDJFCm9nSmGXAHny9MgEgf9m3CaZ9i96zwYRZyAg79QasFxBwSzMT4gyN7Vkifk",
  "key39": "3uX12bdAfUFABeyodLcTK3pYJr7M5SNqC7KMTG7nGnFoY7JFKExbnPatwGayYypy8yDT15VynUBzjEnSv87bRkqF",
  "key40": "GU2qvGRK7UrLVUvqhD3PwT8PE5Twju85AHvDrm1goCVko1AGxbiVbqXwiHp3nzVMRZMjuaCUDUWBF7Td2fpNoKV"
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
