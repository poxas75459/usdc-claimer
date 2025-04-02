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
    "2igw6hcmACptMahsqiUXd2JdUsJDLo7gAyEeYTYG5mNUpubokc55jpVaK5XfcvhZSkxmmmZAYXCPzEiypk82RbKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyDjcVHhnzztYxHuMFxGVYvGGV225CufMs14WeQL256DHP8TPjbJTWEhzQgTNktkzHjKYfVJQDyV9WFn25FUHDm",
  "key1": "21yRSdKnBcBi3BF9pYKCbZByoQ9Rsbesf9kCF8uXM8H3oBrmPSgWbAfRRNYiEdo6o8oZdW8hxWp26WLGJTK9NouX",
  "key2": "3BPbstvPHBUVhZV5bUFVhQaWKZ15yFnphP28AfekWr76LnPs9uqHBgxy66555HYtUPwkzRmeo8vw691XLaeWNMGE",
  "key3": "3pQ2dxjUQYWRgrX8gqTys1NSiQcM356HrQNyGLxhYAKXSJHTVgoLpW9tZRKwctmkkhCxwQ2QUYT6CJyTXWnSs9aq",
  "key4": "4wekNT2zJyafBm248TXmASF65i6WvNQmt8tpf4CnF1sXzGhFWBdA6neCzyPXkDZJ1YPmkojXhnnM2EJcneDujuk3",
  "key5": "4C3dDZiCeVkcVsjKJsxXBWUWjHoaHfTyUYuV9cBvKMzHKCJD3CH1RtDX8GJuTPseBeveMrCuZ1HQh3wYpM9uJ1yV",
  "key6": "55R2RQgzPeqPqnB9GQSZx5K6SqMejSH6CAPuPug66Dfb4zVxGNmN4Gji5FKq6Z9VfyispyiGH3YGzFb4pVaqUBLT",
  "key7": "3z3Tpqn3eYTgPTiGVW4rWZyi9BN8kfW2hE4yXYVmJyb2rAxhkqqHXXy4w7Co2pcig8Zq746QXnDR5j3n6utVJyjr",
  "key8": "iAgky2ehVeUr3FkSykDoVT1CwHWqutrM5yW6qF3f62g5w5ktuspk8diRUFq9dZJZMPEDn8LPEGux5TnaJWPWY3b",
  "key9": "5gfoVjxNHCy4aipJL7hCo9RcV1Gmq8DyY2ZuHxnwbGrSXjw9rLs6Gx3rscGLhjgFonKmds3dRrziZYUxFNB7T8Dp",
  "key10": "2QAcj9hfx5yV7EFGaMrBpRuyksLAWyqFkgV3QRSHq6nPgZ58HFYtM5rubT77zkpqjzW3WDqbUCDfzFPaPsKrj3MF",
  "key11": "3ruaa1AxMGxZV9byzDyCKGLoaNSAd7EhhihPRMWyyqhAvrtM4u622GG2Bf3YvUmemc7FYk61uUycgRrEZy7xiem2",
  "key12": "2rtMc3AouZxS2fUyRM7zU2428R8v6a7ojJcsEpwMEFF8eGMLR97RPzbDkoV6bY1v37pbwDRkBRsJkAoP6ofjQb1d",
  "key13": "5neRZojPtkd8tXfwKpBFwyLKufLQbci9BZp8MupRUFFVD4ACyYUs1nGeuVsPoNgf32iQjGgGGgwjGkbB6QjngoXB",
  "key14": "4UGmZK831xjdQBqJFa1UW4h3cuXVFX5cBx8zEQcxchtX82D71XP74QjBbhFnR8YGJLgMMDZ5FCqpjS8hQPqP8LDi",
  "key15": "5oUdLBzrasuGoRVmiPmZjHwUoeNBL52v47YxifWeGo6aFRp318e8NwrrdPxEMSarw5UKZjTQktkHTniyQx7BNG9k",
  "key16": "5ckG1zuWk62EGfdYwRj9mQBrcbVFx8X89zUjcMQqwC5yLhuYgfsGrQD4gcdpu1ebQxZRxfRTdnnQ2XywazfTXbJz",
  "key17": "3syjfP2322p6hfgVSh419YZkQHRQ35Sc3VXfNGKpqsTFtUwpEzDLEW6TF7EYqiyWuDv94fHDpJGxX9kd8k2ZHYtQ",
  "key18": "4QycKoujMsfDHX1BXmWeBfx3Mxrm2Phj1dfv5LY6FB8qViGSEVqASRB9VgZrHJrqtNhBSzp6bXz4pq4iVeCUT6NU",
  "key19": "2AcvcqtQTAnz2ZYu3azESEkVkmMVtipiF3LsYMLsy57d1pGjvu3pMREbqpM2VkQPGwATYinmwMG4ctcBp1zuvzpu",
  "key20": "4ioSbqEp6irxoiRL21tMa2rtQevqMJr9c57RBQqL85rpXMwTGsYky437pE9oH1AB56hFqKJDX1eHmX4DtzRKhWv8",
  "key21": "2MWh5mR8KubGh5HWv5jABUURsLzEe5a8WzkpjKADpTYZ22vFRCui9rFpi5fJ7Nx77ttCPmC7r8D92xPVCQ4JJorm",
  "key22": "hFHjpUxaByJQAqSAcDCVeEQ9EmaJgoFyMR9BLPpUhjTJEEmFc2YiW6Yng1MjkVYU1P3A6mHSngNSJGiS2ZnbUdk",
  "key23": "2mwwmihBhtPUtuAzSuZcMoWdZ3VupaqvpvMUAirkRuvsx21R37Rb9U3t2nv33hYtwsLSHPi67NCVphqnEBPAnABk",
  "key24": "3AgmAUnuzrKsNPw1monhmPALRYStoW4EMQmTGDGSb6v3FzLAQh9mYPP1qMJW6GUZfBVCuSpHeBdyowAPrNsea8ui",
  "key25": "2kbcfmDgkNbBhmALEi6m67AwrVN9Pu3rGfh7fuSZxDuAdWGA6LW96vzi6fLCudkoCiR9EXmvSuqtzyXB275tmZvx",
  "key26": "8imoTVZaNZLishy2HUvr3PNPRtEE6idcq4Hy1rDuirGA7N1w6zARgqum3JTEZeegBhVMzY5saiEbXJS8RZbiz3S",
  "key27": "4borXymw8yyd2cZ9K5oeXUWRC5TxpTjypdspbeJ5zPHzNJv1XoNhd3nzBoLpZmut6SxeGfuWNfZYYU13LMbfoPjL",
  "key28": "QUesmg3GM627C37uRZVJpRP447vaKAbRR24aeQSPWok31Yy4u5BzVAMkF3qzkfvr62oU4SEXp6sqXFFZfXniVus",
  "key29": "5rZ5eYB2GNY2cp6UBrBXvgAdXuqrGjg5fhumaqkprp1tFMrHU99BgsUqwiPqjtb49kWt3rTAC7H7NpiqvwpxLVtr",
  "key30": "JQHUmTZ3Yah7BQ2d6LeTZLXcPUyV3waCq8C7EEfKuemyVYXGpqsjFZSHyZMF4ra3DKUdNaeqS5vrdgnfRwfghcc",
  "key31": "3VcwnTcUp21kGNvW3vciK3zQo5cCaa43K2mqA18vy51NRTeNL1jrKfsiDZSzquE4UYEX3jD1DEK6DURriwdvbgPV",
  "key32": "5NJr3GJXDybcGYjXBqagLJHD822ftCXbTocuKGNDkDh7MB1aYFQ6t5i9UavVWMhdgUnWQitRANvmZUEbX7i8rmwi"
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
