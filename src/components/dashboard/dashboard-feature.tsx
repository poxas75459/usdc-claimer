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
    "4qneWriehMc96rzoF8z1ynvftHswaJo5756Tye5XwzuDnd1VWYrk7jFmK53cVbJzwja27fYnXUNFHTvxo8G9Ts2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soyigRw2UgNkuoyib8taGoyT7GFa3ziM3bGDSFi9LwxjKX6XpuoU65faENb9vWc3mUtNVNBYqHCiQyps4KwbG1n",
  "key1": "388FPpGisUSs9WaC8kFEDtBfpWvGXF5XPLgbuEDiQfFre42Z1z6v4XRmNwPj5Ua3tza4CB9UJZT6BLcAAxprzzNh",
  "key2": "5MgLdpisfkYDt5MfG4GU6fgju5KPHNPCzJhgsUNPAitc2yVu44TrJdKtuYmjf8oB5VUnEJsqLFeTa6FrVQjdUuME",
  "key3": "4wcgrcwJrrmV1pCsrFqnMGEVpxSsaehzcXhF6HBUNRYzELF1qTMsF6UZWceLGtnYbveP6nPm9k7CaAmwjVk7i2wh",
  "key4": "4AqtJxgNb4KRXzLefCtAMZRXRZTkszt6MSuWMUVrTHjz6zujFzkTbYWCyJXjRcrrHYHe9gBvcjr78ywMXf5hZDP",
  "key5": "5F4p219gcCNHq6Z4jdD9KQThAEMK9hb1i5HqytvQkkri2aamYXy1VoGYzuf9AWhQEFni1jnfUwAph98kZCPrqs6u",
  "key6": "3kWaYDAACm9rwSc9erdZHwPa1ysRGsAVPrKzbGTQgx1TACxZzbMUe3xKR1SQH4CQAWPC5tA1Nsj9aEwEmUFUQsoW",
  "key7": "55tnBp47Zjp2F8hmDT3dMTXBvXrb73cnSt9WsdDWQXepbpJiTTQFNGZJns1XBW43KZ3xwvLnSVnyGxQNqTumEKCd",
  "key8": "3VQGiDrxjrjWoUHRfLWPALwbacjNFffKpPwpzhxng8L5HoQhm9VWt1koasivDE7Darg6E5gY6iBXrhZuZLNLL5GE",
  "key9": "2164CQ98HTdkrVr1Bz24xyPUZ3BnvyrJGAYdNpFpKYqPRvLJbWbVeAqhxUgpwzU1o8etcC1WhQGzYtgcb6Tq5BKx",
  "key10": "5pQW4yi1mgx8DjXSgcG1ZJzCyqMTcYK96Ysb3eVu5BSJjnFVYsyRvRDjaKCD7P9WMzTK8RtzvF2rXtnGHvoffsrx",
  "key11": "8Pvk8XkbyT46AwjfnAJXs4zkcscySV1evFDjFY2TReEtugA982sBoGXp9WtFmeJ4sPX7t9pEP9PpVnSGBcH6JXe",
  "key12": "4p8dMgiNoTYDpiufrS7C6L4q85djghUMrwumYrc2uqFfJ6RWgnR9nugVFXigZjDZcaN7ZAuV3rbYNXtGesYHeqTh",
  "key13": "3x6MwEJAUjnwtRC1ryWpevFgXtb6WPVAH6LSyufUhv5atyhdnFy9sWNCsrtw3tTJyz7xSiN5yLshmbhVumPjdAt9",
  "key14": "4xiTSzUGzPkunjCWF2tcJN9pVgHexyuCMSFoud6Wox1LW69SEXjdwUdxUcXmjUno2W5pbdZpK5PpLsBHWKqTft8X",
  "key15": "5djqLbtUCrFrYjfJNMEeFVmTc4EX834AibW1b4BBJb3GiSKMRSb46xtbgtgWfkn7D5c4oAFwKgaVnXr7YedFssuh",
  "key16": "25XQ6oNjKed4NKptfUAxCb32DFmDfNiMU6vZhVpFThHKKerF4RewZL9otWqG96Qd3TPbiCxm9BptpjtfeaKUuUVn",
  "key17": "43SkJEuSZjgPUmRbVQb7V1sCVRSfrGiQqEAV7TWzBU94T7GA64Hi8QHHw8QjXe5UcU2151J7mGASV41C6MgeVEL9",
  "key18": "45tstTGW7FSL4JTVBMFFmQ9NJiKir8x2nwCafXS4wV3d7fybBz1gcspzr6myAJpbJnZQUtLkH3NndquGV91PFG9u",
  "key19": "4vUDq7RNmfN16Gv4GtB6fopriQ472keBTbkEzhoqJV11swVAN6MqhjsxR9CCK87NBBWu3jofyCRAcyLcXLDzpUAc",
  "key20": "2A9qCfUXnxMfSzWAWiiozrXscN3amu4xDBNKJW6hxiwCEzRJKYepSR3qd669YDnAxQFEHz985nhAqhWx2tURXGC7",
  "key21": "5ZhKRqVGDtB6wJ6RHsHd3PChq8a7Qu3skCuFTDyWY7aNHaPzcQSQzxxBfhr5X4mJsNi5pUjci2vnB5dVeQTu9sA",
  "key22": "2ApPjK2PzNeyNpkp1ukhJy6E84dGwtHMe3buFXRo394NhZ8QtJNNAvjcZoEqwt9EQ6R786JGxmRFKgom4okJ7Nmo",
  "key23": "3NQHiFcLUC7SixjgAR1dPLLu19R7ghpYSa1JKUQWPVvyj1ZySp9ZX3WR5uQ2DHz2M4GAK3mEbycePuXz4BDCCKsN",
  "key24": "5nBrmbG9R2PXGcMJuGQVDEpLtDe4YnZqpJ9oYhHfkNUBYSfNvNSB4C3ztJUSSJc1CzQwouwoZGsPLGCVbvuBZvUh",
  "key25": "4FqjPgyccH1se9jPom8UkgDTyH9fTbagEffW7GxkJqA3HXnLWrPUFFv8JKE2XXbkMitsXR3fM1wjsCwzzsm8J41C",
  "key26": "9As4C7oYeazX4KDoDKbtXWKD2c3SVi2XixQMPDJiiDfb84GXJQLrcjjgQpMoVuULWVA6ge1cMwSGYv9gKVhUXuj"
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
