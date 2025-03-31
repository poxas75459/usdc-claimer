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
    "2F4ySBGSpuW3yg1iUCVE7PVFsfQkm6K9NcxwGngLPDBfVkSKApmhPmxrHXZdoBxE2p5KiKa8zDr1akQeJpnB8XMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3cM7i9ss41CcsFn97EpfyEVU2AyThdzLbsqZFVPiyP4eTyeB71hQiug8i2BEZwszcaSoy5dhSqjS8wGhzZAgdG",
  "key1": "45WunszZs6iib9oZLKz73GR44FHp9iMkMc8up2JMxsAqrt8R8QLHwGU2csL7AyfBuHJ2MNjDoXcGTBvUtf4Sbv7f",
  "key2": "3rA4qdspQvrgEBYKtQaQp8zLtfHEaazTfrwgLvwSwy6NA255V9E8y29nHc3kjhGXjuWk4HdxAQ3hjkqVdFcAKnRL",
  "key3": "5c7u5eG1MeQUoTdBCaWDeMBA5dZ8xXNsE5dJgx22vUXQYh2VMonJ5jsto4P2DuPSdTKbbGKn8TAH3Z2vurbcGyid",
  "key4": "48D68qzYVyAcA1hn8udcn5y1CmvC6YfSGrNKUUppUTRU1cSxkojoEVf2eb1GNv5aggkaMNADvw5DueqeJaBsLHmT",
  "key5": "3EJpg2VScso4e94y4PB4TcCV9cGiP8U3J2LuZikZkGhagsfeYqC2tAoMMVswAf3tNe1Ws6QiCTc7ytzmqfQR8TWj",
  "key6": "5DB4tzQsQfCniPH2Qt38TVmApgTrRYuiiLokMwT57tmNs4xGz4z824xAVFAiZ9GbwUcfyY5vURPYvw2pKNXJj2sC",
  "key7": "4BNthfb2HprfyRrZt9rcQbjG8Jq6WcQHXWrWfovPU5vsnh6oo9KiUp6cm9BZoGJvr1i1K6moCcxmjnwF7ZkrjFnz",
  "key8": "4nxxfC45VZW9za199SUf9xDb6uQwDUu8LCdReFeS33kTPN1MZepFW6o4vWHoPcbEB2NjoGUMfTQW1opRB1ximfKq",
  "key9": "5247WZnLJ8sX9yKREJJdSHfVJKF8Ymt4EZqdeyUiJ6kiF5Bti1r5sewFXr5nzN1aKjVFifHvYmDkf1grdZtEQsP8",
  "key10": "5reSqq7dSPqstHTQHXcydaekVJt7MgAtiYHYhHMjkJYbfzVaLrB2U9sx1eCeioFXRj87pwy4cuTg4LseSpYrkSHy",
  "key11": "59uTr9pkKpyMcXQ1Y1pY8diyVGGhE8rVX6HB4iLyWm5AcPP9F3tt26iv7z16hP3N6xy7XKHCfW6PxAtf56zND8Y9",
  "key12": "4yccSgAEq5PaQYvE88T7tWdLoG9dcsRBjU5Dx2p3DVraGik2GjgrA2C8wVTZE2Qx9SL5FuWtevi78iWEfMYxKDZA",
  "key13": "2UgabnehuN4LGKLBHahhzwQ9rFD7bV8riQaFZbpjocKW6vZw3fkrh9n16dqY7enDJJTe4A8W2kR4zoVXTiHyKi9F",
  "key14": "5k2yYndbCaKH3FaEgzhPVxbngch2i7p3e5ru3EEEvfvfdPMgg7whr8jVWn4b3iiCoh8nt83zyH4YrJJHwsetzz3H",
  "key15": "HK3c6HHo81naxRKsman3doy2ftMiefGdAM3PW3tuhdsjXNcpFsMvhXQkE3XdrA4oKymCZXHjNDY61seEvk74PDv",
  "key16": "3ZQvVx4xp4qVm1RvcQX4e9teM2BtbrEX3b7u1DFqLeK8YMMkxQfN78rFaHBcfWoTMG4msFqgMW1ySdVcYfFoqoJd",
  "key17": "1TiDjw6FrJymgG2p9w8ddEidPvVvGSmwmoSHqQGJ7w34mbgJqza7RwfpwngqYWY5dwkyLWVW225G2PhAnp9EwGY",
  "key18": "atghWUY3chdPsa7WLjoWJTJAJ29dgWq3Lh7cD66EHzjFxpaAaLEvB8Nup6eemBBmYu94CazMEiYBNn8CbpzY5U7",
  "key19": "59H8hVwyinHfF2cEyfE5QmJ1fqfRjwDUgDvRQqqoSRj4FykugMbBtKicAVm2uh84mUdMoG7LU4CxRS82cXU742BA",
  "key20": "3uQgifvpHg7xuofNzgzAuKpYAzYE6pMSZQYZBm9c4bbEd9Zrk1RhvAnW6ewnGSBWPdu82wTSvh3ysVg8m5kkK3f5",
  "key21": "3diZkPq8z4vTsk46kyptFd1kamfQHLSC2NzSb75dt32n1SeqmcoB6VvKYMCfEjSubDrMLMcVa74Mz8RFc5zaqXZc",
  "key22": "bxgMSn4HHWZjStVZMEJyNuf7Gb1gFS8g36Kvge1RXSTM8TY9L9FLpYd4ZpuohzrBSowzZVuaSGRPAwA9gfuNkEk",
  "key23": "27H6b5wFdaTmeed8rjCsyJgxCGSVeNR2xVyGh1BTPj8cGhsu8MawqQW3aF9vqDUAsVZsiSsvT3tByGAffXs6EKzs",
  "key24": "2bwpwKgXpZVDMactdJspcpCeT5ob7ymdpLhCaz5yTzSpkmTj2kSYzx4yZv4HUQy9mX5jWrZZVZao1arvQEjmNYt7",
  "key25": "2ZYEUVXmvvMptTNYJy9v6p6kakmH7jrMrqdT83BjjMCvcQ9BcZQn9kHXnND2ajKAh1YfH5nz5qR5gcSNijdN676T",
  "key26": "4g1VhQXycrBfNQNFExka4MLc6pJEq8JkVysg9axrfTzagy1YgvWygc6qEWDJ85AgDVJxRmyKqfGm1eMpygu3cKH6",
  "key27": "3kgvsBxicCyY6QNGBacYcfvfRufRyPJKUCrSRaR8FQirjWrdk6eK4Q4EACJgnu31HBArc6rZDtu7hmuShMYdzCTx",
  "key28": "2dckyrYts2qzWKUyDjgAtJhG5arwyDUKp2Z9Qtcyk3YXuQPVrNF5MZMx49CT1P3v2oNKzzDvdDHmuBw8cr7iqwW9",
  "key29": "3CAi8BCYUQsoxaXn8JNzcu4GazHy2L5XdvWnvtN7u7rtjX1ocgfXgQMbgZFHj8ixWRTe2DHDxbjBktj71K1UjzPd",
  "key30": "2ui4PCXKKBdYTvUJTMPmEwjHiCf9rByNV2TfZieGFNwYPTNqUchV8frpvYAckpN3RUNV4zE9gSJAaFKeDy5PKuiP",
  "key31": "yvzL66nEnrRQWoAvWNRnQU3JNMUWqZcVvQU5V72TWA2zFZ1k1F8suxsC4DGv9itrZCnCSH6Mnm1qkEoKsKL6HRt",
  "key32": "2bCWDz5SCmS799gk9gefNnzshoJcGGe3www52miTMzcVuwVM9MnUreFtLaRYAF4K5h6ZRD8ERSYobabsKSrV625b",
  "key33": "3DDh856rYiuZafjqBxR9cXoRNBQDrr76d3cLkSdKEnZnM7GLpBLUwCuJapY4xkeaZuHEtEUNnkaDY71SeGf2ZSsp",
  "key34": "3vJcAcrWrRbkxpzuy2KfPadSpcHhe2hyHCEzjSboMRUnqoAjRgkrV8AAmwxeB4H2VNGSA1ZLqrFgG8wQAxZsv8Ny",
  "key35": "yw68SKMZHsRTuUsBaeu8FeHzNhb49mKxr1QRoMfBp6EnDHEQsEFVK1LXjkJG9jrfVBxXEwwjwa6ZNxfKTam2yYQ",
  "key36": "3voa7WT8qd9QB3uCzwdLvFL4DfYEq2whRNHK5VuMCkGfRA8nbBns9918ykdVQeu174ZydQayPRXzJAJTrXeCX9Ru",
  "key37": "52prRzvjfTRWGqrb5LpYgVGznwN5n4M4YBw6CvecxNSvGpB4D9EZ4Y6TPMsWJ7TsJZh3HSKdCn7t1goVCBQMr42C",
  "key38": "3FkoYMZLKizs6aQbpdD54drkn2iLc8uW5C4ZfacsNYASxpAUsLRRfzoMr8iXsyuFw82wEFEajwvCJfS5k3HYKNEs",
  "key39": "35H9n57XUx2UQq1gj3koPRWtHchXGBz6GSUUCNtNt17TUbyZLXxXneEaMWgk7hHjjA4bckuZyBUHw1W2fm14Pnx8"
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
