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
    "3xCSL4DzmyQxXuTfz3YYx8ndfaNHb9MxUtogz8fJpwN7uJFCfkM1P3JPzeVK3uBuVBVw4K9rE1BLKCGB47c33Nev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVLhWWReqh2PUuX1WViWifpucpPBp9mPD7keaffUKPT4qTNFWk7dBeh187CJbuCdMQuhMGsRxuE2vXymerpiGt2",
  "key1": "3TKWapMtYhkVTEFRrXJVaRWGwP9sgJKTeWBXUue9L9Vec3WnXRkS6eZuBSKqK4m5W7ChybT5mmatse3TkDfdgSne",
  "key2": "4FRo7yrx3b3mzoapgqiKUV4B3jdTCJWPbLzGrnZ1UanDsJk4Hm8uZwgbd4Dczew1Hp93vyLuzhsqK75eJqd4ywmD",
  "key3": "5swSA9G7BHWPUTcAL3ci8rvrUCcEgTvewVUVefsEWefGnMAxkXpNwJXK6q5QKsawkPzBLdD2tcoqqJcagcZt9Wbk",
  "key4": "BcujHtiiXF5nhJ6hYzEKaisLaD48VrTiFLsf6bPSc8NsbvydHQr13sF4ZDMgfRgQ7zHzAxYD33VPE7PHydbfgs4",
  "key5": "42d7SpTJZsHtutLLfXd5KqZJVRQnht3XCzzSJrnfaRANYLsgL4MRxcnAJMTs6m6gv6xk7HoPgVfifRQGwtAem76p",
  "key6": "4LCd4Lvj91dSxCbWPSFEux5YTQ7ZZ6EPmKYsfsV49SrFhhANLFxYy3iWtZTQMwnRBpoShLwPszaJfbi7ihPesEtZ",
  "key7": "2rMcds962LEi3QbDJyj5ZuAurFH62TKUfGZN3MH7NjZeTaH5gLu8fDLQdGWjdCKHZ8Dr88ftzE6FGL1zUFfF1Wcw",
  "key8": "4iSwskvr6naWZnaN48zscqpbzjhMCruDj3FQGHKdckoi5tMRkXBXvx1fKQrG9CMYyh9evJGnjwJAZL5pFHgWobte",
  "key9": "2vRDbYd6AMBc7cCeWpz54iiW5MDQkwEjGyoV7UShQNapQtx6xgDQ6fnuMCn8XtqA5qwiQr1b737WgcdZwdw1gGki",
  "key10": "4261RoXTH4SC1k2BfaYqphZSnA9x99fuyAoD975Atx7Z45qpuLX2estYsBap6CU8PctEocv6uTfGFtXKb3TMaDCo",
  "key11": "46jvQyG8bm9nittgqv2tdPF5yb842oEQwgBG45P4SZrscNsyhF5fesSX5hA9QzEdT4WfmJaCDin469x2vSMVyVfw",
  "key12": "5hdZtCHjFqhsJWpBmhmxoAtBjSuceKMqnwDedeHcCuyVY2cDDvu6iwTQFTTPftPZbDDCuqfTnJToxe2PFkcQvSB2",
  "key13": "4FP77SfNbshzo4HkeBoduWvggZgY8mKHBYCnBAUkUN3SgVZw5YqdZqzbsSR2hYhEkyAJN8i8qazEWiSjBJnnRVow",
  "key14": "5sWexJKVdv4dtxQkTSj2a5pcx54NUDEqwwgnpdnMWFfriY3TUo2TcXCYkfyWQdVeGW9cj1ZtqTL1iG44QYUYCyRZ",
  "key15": "35nn23qhSayFUXRNtbjZ4Z8VoVJmBmr7dw91ciqGkx7iVjLxBTRgD7kcJMTtYkrhhxqTVevpNUY3nXHWKruzPxbH",
  "key16": "3jz5FULqoCaPReHobdY5ax9fdFVnc359KspRSVc7jZE1ziK4qgbm3EWxj3ECiH6AuPLkHZn68MGg7kunvqppL7Jg",
  "key17": "in6VdSGhRVo4yd5FpjHa26odqvaF9ud4MuhozJingQPxRidoUvyx9bFBZ61vEjLRY5dWCYptob8ktXQNBp8SKvF",
  "key18": "2F2fG7ke6eN3qZ8bsGRR4Bf2sVBMmYe6igGB1MkuFEvLzbZXyUCU6o1eVe2eTTCg71EyBeE2o9UA9fWDEaEVZ4g2",
  "key19": "7bXBCJrcLJDUM4ERpEgXy7pSUiGxKWedziiEnkModKd8u5kB6hbQaBhFGAjdXfjY7J64jZLoZhJ9StjBx6Ys39H",
  "key20": "64LXShzdyxkC69KMsAb7BxPzAYP6dWwVFuTnSYmbt3Hc1DoKXLgTuyZ8tGQS8i2WB4VGPT2qccPuDgGNsPm2RMpj",
  "key21": "ru9jJmbiphMS76xU54PbP2VW5t4rZj2mmsYKvG82HvApUXrwC5XzMvYaMJZ9P5WahFYd8Q5WeTfAxsfzciMsyp2",
  "key22": "4cqJtKwB56tLDapk8a6Cia3vwe1dJvXVEVWiR8ZkBZVDjTKw2dzajPG4bmXNAopsmfXB68YKKXuCa7rMf3WCVpeJ",
  "key23": "47wyxyFGovbEZk4pSxLn2eE5Br6y2d1jjgRwdXxBexLaHQQX7aHHyRQ9S2VjuY5WrxXqa3Mdgvp8rzimvgDN6amZ",
  "key24": "2J7xGRzmizeZF4AFnmLFJtBPkKSNR1nnGFhKt6NLNY55TnmPfYfEKVvjkanRefGEV88kzUV82xrkyy1a61C94KvP",
  "key25": "4yiiscmGjWoTzmbeaM9T5cadfZuwf7FRaPsPoQ1DeKzMeuKm27Cxua6ftaz5ueLvxhoWP5z5VmTErwEj36wbu3kR",
  "key26": "5LekcUV8iNQ86FDKgMwmyHTUouhcqb4TrJCMNz9f9jUT91xtRtUxZGXWVxQece88q5rNHRH8mu7mQ54LvAAj7ETh",
  "key27": "da7y8gHBoLMt1f9sk2hvAowX6Cs39gTE5NLVnwf3QL4vnnbVtXLqLWwmNuCFtVXsYt4KDsrTagKAyWXBrk4xdfz",
  "key28": "hK2QtgrXcZ8W3DCDbLoERyNwHq3akXXJ9ujP75wbdKS1CS2vdgZkawCEGNuvSWviqdAVHSLGdwsebTCfQHE5vHb",
  "key29": "WPeKkYykutvysFbguEVFKVD3kpsHZEGxuQGH1KNVRxqGHpJP7tRm6TznKzckub8iJFBCarP5NvcdRMfYy75z2nE",
  "key30": "59aFU8Q415h3g91MmJRNjQBA3SF36sJLDLH4Dfu4iJuuLwXVrYydDrVaUi5zewvdTj2cMdbxELKcZ4RsZg6MYic7",
  "key31": "2r95BmGpdG2hvzmaQViLNjzT9RTDR8YR5B3DWZRAtu1J7YLCcE6mNW3jUWk8YQfLuJA8P8WmwCV5e75djWSJ1HxA"
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
