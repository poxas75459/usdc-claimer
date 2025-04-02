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
    "4voZh6cfmwyLCRj2F2otEEYCa6BVKxFHSdYcSV5eG9zmeCroCEayBHBcVkbcthhA9Dq6LEggDTpkEqSYe2ZumRQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2dZS8xEQ499ti46VF1ktCfLAYa2SGZGobZU8guJ3hceJrfLcbfTDy14yCnoKCQDLCXPedCzEdBHGPwFkfAL7GF",
  "key1": "64KVkmh1zQZ1MjDH2NRXWfiABfHm3mZbGND46QvwmCdPArGg5WPdgqAkaD2PXs5MNNeRXgG4R8eWhgN8iVta7jTy",
  "key2": "5XywspqZGdafStxtX5RxytuoSD69YrxfF7NLHC2BMDw3YGXQhCVSK2qZw6cA8BY8Zxf9vKW4hg3nUU9ynC46rKKu",
  "key3": "2PniFqVYDLbWKfse4atTPiRZs5vJKsXSdAUkCgbFPvM58YwVtc9UVGhMQwAY7bWVEvzTYdng4Ym8MFgnER9Pj8tr",
  "key4": "hVeN4iE9N1LS6EfryswqULmb5vkmoAwQ2sUJ5apG4wr6QSKsWhoCEeYFeGrattoYqiRe2ASpKocpdmQqF629Kyg",
  "key5": "43JnBCDwuLgd9i9UhFD7KiJAApbBtp1JRhdGL8EU6eMmtoo9wkg84vA2R7GGTtu9UCPetSmpm24XBD1XPDE5n1a7",
  "key6": "281yDCrakF5Jii9tE21aV4a3qj4feF6kFeb75ciEv4kMT461dWsft5DBwcmeC1mQHxj8Gmx41xfDGx2SZYNvRpxK",
  "key7": "48pUVUwDAdz191hg2MDf3TrwUnivP4sXGQsnyHytWUgaeRKnbk4xefdV8K6JJ1gP2UGA754YrEThSm3wczRz64Hb",
  "key8": "4bevHJTb6URvssYbdgt7ygrwBxCYQw3A6HTADb1BUkQP3PrqBC1Pi3shiEjA6yYyc5GvQizPzknaNwPUcd4kkLg7",
  "key9": "a2oKzEMoagKb82hwD4drUC2zJYa3kUBH38nxrJTnpwxJ1fhFyeSnQfyKMhetoMUNjFffGo7tqud5YDbdm5csKeK",
  "key10": "66f7z9xDBeP8cvxhjJbNuJaHh3quFMZweCWPsZ3A29f5wJMM2DiiEB5uFXe9aT8Uuef9F4iqgsbE8bz5WTHunNfw",
  "key11": "5nwBJambDpdGQbAhxTY8Ux71zFUXS8bdJr8Bzedkw5PURoWon27VWhRUpv1qLxcn71NYN52vFvHzK8qHxgbzdwzT",
  "key12": "34QxbXzzkP9B9FF9wqiy1qy9eYFnZZtCcegyDur3sZNcoJ25Z7xjq1ZXkKjusRD3FbSz5tPg21mA4bBtLx1wqXjN",
  "key13": "4S7v7XfYeqAMBKY5gnWvVQnZeyqBLFKGSY2nZ1eaCcrz1BmDDvK6wExyNtLLnzXUaUJ8cpQr3nRX9Wyv9PhAdDcm",
  "key14": "28ibCcr7XNHt8w4c4VY35ufVmZULx1naeAHTw7sgupZRT62KZ8BVFeMtHzav5H5jYRiSSkKac5zXPaKdXXLuxRia",
  "key15": "4pp2aUwh5NeRe3ad9KRJ1mVxxTNjjcFVre2SUnBBvCA5AJbiiAGuYs95qoNF1Z7xc2k8n3mauVoPXN1PaMAG4edG",
  "key16": "43RmCrqj6TCFQGpQcuoSWM8QaWzzE7ZnaYPS3d5UxgsaHMdrkJLFWPPmvSxMkKnm3YMegksTfs58dWizy4242RJB",
  "key17": "4k2jKUqVBdXGEmcrYf2GRuzJaQP3gScbJaRN6pDcdxFaRnA7RQxajpCjinRP2B8VsrPhgvYWg8HdEf6yLmfRGXvp",
  "key18": "8Sbpfvw3qq7RF7LdrHVD2Yi9CEwrbn3DVUkq6Y5uG3YkzhGLWnGD9HAoPBp9qLaDJznFtjEKWmPfhfbgnad6zyv",
  "key19": "q33fP2vPRVAcVMsXFC8ZPp1AfsyTNhuGDQZAY9yfVcYYUHCswbZUEUKHKo8k8KzVLgvTukyQikfRFRjY1HM5An6",
  "key20": "2s2XMX54xTXh7roCwZp8aGboy3SB5q46Yx4xG7c91TnJzqDp22YynxZqYwQyS9ZDUEFp9pmz2UwMGMx7queduiXa",
  "key21": "3NKVo3a9XDaVtpyFUkeahpiLa93MC1b8bZze4uG8ANAwXwHwi2gEzJCujY3E3rrux7FWWZqYeaU8RtLf9qviPnni",
  "key22": "4eB1HNk4h1RfwSsgPBbv3jfVogdKNq1SF87ZEQnX3dHgkAizMYT3VPwiM6bzeiCoaAvSo5VNUC48WPQww19LJhk1",
  "key23": "4DaWmRJfS4c92fzYFZ6GHk4HsG1ruy7PTTavKUzGUyCM1GkvT9axLiLtZyAzwwhCFLHMGNQXxjKjDEotKCm9bdeq",
  "key24": "4R4mcFq6t9jZhQDFNCvE2j9CV2KGrHaU6UyjhtxGbkfi9dMLYbAyJvs5JoioGA4K646YQj37MhYn3DNww3Av8BXU",
  "key25": "E4fpB1UGXVGuNSNxQmW2GB9CKjV9goKJBPZ4BXhavhcxvpm1FUT26eKwVuWtssugB88zuNaoLPSNZD7oihQ5vMU",
  "key26": "ftFCMKj7K86eVZkF2AoEtGmsZwb9dBepJn9AJLFAGod1htGtQqAGoKGsEdEVjtMfSraoQnd5wzLZ1xXvJfSUvz6",
  "key27": "4y5dxeTvxCkpFxcFpCaR9yYJejJf1SoGnEEQB194Ge3JyovQQq2BcqyepS594eKt86gAbNsJ4wJ1tpTgzjhTyygs",
  "key28": "bKs9mYpajuqQjzhadD1jPmfh4kcfBvdFXxqQz18dnyQgGoxRBtEMFhx2pYE87Ei7YE84JB3bRn5Cgq3sqsa65mN",
  "key29": "3CvNqbYQwkLoxDCig55haWmbhrr2ADtMRGbHHXSExzCuo6i75bMrL7xwujr6gkap36YBGL3nXeYQWn5Q1oE2eqqf",
  "key30": "Urvz33bAGXDyo2WumgqFAAvTiZcaZWp1cjizrCyRM4kK4bAaSTaoxPBnj3QWCsk5j8rW67pwyXpFf4nkQE3gdv8",
  "key31": "5Xvi6kBZqD9sNcUVJWyBw6mGkDwKjXHU4gfxUKV2U5jtcBR6pxJY1EhZRrnuV6zqU4VX4J3JSDL4kzkyoRnUCxrT",
  "key32": "kEWPUxYharQcFujpirhLex3T7gM9Jc89T91xFS6QHCoYAT1eMRSoubSTexqTzxxrwJCaG5RimVehMBFuBzuoZrd",
  "key33": "4mNzNoBnmLcHad83Eo1vB9N1ucbbNF2TdAFnvwf6a5z2c7w2StxCHAT4HWvr6sdFanW5kojtgf3D7F3Z8MGjkjMY",
  "key34": "4DHNZ7bN8tVTmesGjG9FhPXEP2GkTuCV4zbDDVVauRqeeGd3JrbHUNxdAqCufHXt31Xz56SMMTjiwrVJDg7GGvJc",
  "key35": "5DpfgByUPjnSZsgieYAF9RDuKC221XK9fNqnMK29y2aW7VN8qeTVghJYvwgR9uNnQJniJtEL4NwhZLmXUV6dt5WR",
  "key36": "4QeP4PnZy7DY5Ar3npwFvLXjgf9i5x7E7UVc28RfsoNpv884abMkf4zcTxHoW8wzax1Ec8GFWDATRiWXiFfLDMWR",
  "key37": "3N7L3UfAMrkJxoCyMmnhVzzRSb32fSssGoTUiSP1kr7XaD1dHfCuXMpSi1QqRx5DvnpjQB39uQ3hd5kqpuJXQajg",
  "key38": "3VRYcjZp4P7f1L7VVCQgtkHTzFNtCT1isiCgYNqNVv6YmY2zs7rmoBZnmiXjzoBzozzJD4Goeq5seBJGBebtvcZ4",
  "key39": "4a9ZZtvtNyG3BHjhg6LDi391fE2qpcH7argDNL9X5QCh3VFcbotGjUjgKxSLksnzYAyiuFj4QqoAFJecGuvZxDUK",
  "key40": "BBMMoLgZAbnrs39jBY2N6BACkF8nZyoJ1dFHvG8CxyxrwRCyDyH3QkYE4L1npKuPUbKaR7G7CXzmzjT8kDmzXLx"
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
