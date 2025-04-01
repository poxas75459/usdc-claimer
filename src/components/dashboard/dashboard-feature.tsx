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
    "4Nfbri341ZL9ht74CksgVCyR7xThxkXVUQPAQjxw3x8MCZoQGKdixrNVndu6bQfkGFmRYXxk3oacgq2nxd1r17Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFwWE69verchK32g8jR6ykDAchK64TB4Be7rUeWA4TV9tNTS6ZGtMh6UoTcqN7m8LKSmAQLq7hjf4G9WMCPw9Kb",
  "key1": "2ch7CuRa6ysnPKDZaxaXQfzV6MeLmX9tnXKRPhYyZvb4DRUsqvmE2Qq1JndTw3AaydacaaQ86FSnZZkbWDzzidJx",
  "key2": "2DxDETjfMFnedZwM37Z87BDDQd4gQLWeKnkcxokzCcfw34tBrbkmoBJpwnX2nZeW6q7haZQGutQxX1b6ZjssQXek",
  "key3": "4tjJAySY5hKnAGin4PtvKmHBuDacNJe1RMaBWi45fvw1e1U9XSi8E49B5Z9pHUx5vAgUzWe9opaJmL8QEABjhRSV",
  "key4": "5pid89VPm3JYH2p6u4r9Lm35kWEQGaXVD3KjSXF8PwSAitrQhSubFiNkumVkee6umjDgQJYKJXonXgHQgbAdXmdw",
  "key5": "4iaqEiiNaKcph7JF9LH6inhv2esC12RPRKFaGVWXbmBKYnWYqhyPVhy1W4vMj4QHxWs97MvzfqkFCc3Qrvt43Lpq",
  "key6": "Dsq4UY1G7fpiRms3URdYyVPybNGnbT1KFVWSj3iwfQ8D5fVDe5EHf86GQSpLaFWh1pvLoWZ5qwzRgkdSKCiHoF5",
  "key7": "3feBDHVRjyRQb2r4Z5mSoMmg54gCKJUuFsCo7kESMjSsEvuNpM7BicreMgUH76EyNNgYn41zFvn5BgWzFAKAf27o",
  "key8": "25d5kWhExkmbAjMdoDCqBLerNo9kmpu3PN9F3GG48t4pMiWioRci81zxa4chTBv2UbfKMxeKeoAPUzBGhdmwRhUZ",
  "key9": "2bAs2sBa2NbdbG1EfeoPW1SjceSvGUmkXVKkmsyy6AsZX6TsbXTyq5dqDdB81wi6A8ZbgS2PHtN4z5AYCLFZTByi",
  "key10": "21wXZAewiqqYGxiT5BoDwdGxebcPFxRzMytw5UaYFw8gK6iYB4PsJHnLVP9XMXxtQStAEsoXbTLW989tXHGvui3X",
  "key11": "4sqSa8hmZAiVXKELobMS3Qkcoy3evKfoYpdcFeqZiKBSUMhX5aW5GUPBH2fz1zT8QJ4fccFLZEua8sorR5iL8ePK",
  "key12": "4cBn8i8TsaDdJBw2So7KAGKW1U6BCqDcT58Yc9rTD3ftEC93CyczSZLBMfFYaQXPDy1ALE9zCkgGrRUKP397L1oM",
  "key13": "3YXQqZTJo1rRQCYLvrh1yKzQTZSBrY8Q7dHvVaqMdy6bktsV3zdPuB78K9chtHn5BaEHS2gSPmUREexmhFg6M7Ky",
  "key14": "mFeV6nUKzYA7rggGA8dqtAfXZCjfdPJMgzhZ47qC7niRuspovd6m8P3SYhj4w98zGrgzx4SGvXba7GxRaCjMjaB",
  "key15": "3DVaoyG5qJLzfjvLszKBdQL7oDHhgVUFL3moW1wqccfzxjvP7kjJhhewTqKfEKuiQRkHpugT4yKzvjREFcikfnuQ",
  "key16": "3SZcm4KjjSExNcmYTeYeW4KWFQgio8JQo572ewwYYyXQZX4iKdJK5HcekjJuAzfHM2xXEyBv7RJWrS8orVepXJiZ",
  "key17": "4DRvd3Z5tkmyfVE83JLVc9n16MF3vugPZyuVHJXYJU6Stvm9t2xVF1yDWvXLBp1aaa5u5re34trD78jgi1g2D3bH",
  "key18": "2V38SwJ5HEEykQLpjEsDZssp1n9vvy6iNoLvsGLhcxLECGkDM8Z2ydLrtPLk7riGoGPuQbqBfkDUY4y5qsfMY761",
  "key19": "E2CErzHTY3tK86RF3aK3VEv2uxcMQAJWSjddGb6zh5MtV8HDLfxi71ZJK9vbax8UqyJoR3tqzohYkTWtKrxBG2w",
  "key20": "41TE8tDVP4jKf2QzGDC8Hbw3r4CxHKfsZMYyZYHFjvAEQQC2NNyTgSMcJ1ueNcTBSduhVbFufXToZkH5PbgYEyi7",
  "key21": "4Sowpphk6LEVzPjjYUfovPwMMDjo8sirBV92T1YW76eXnqCfgEkN8CG9h6s8WBxEAHwxfnjeFBWzu7oPR5XDGrbr",
  "key22": "63qxi8auJ8VwsDnyX9VWyaveCZyfptggKeRyY5jeV8D3qgpQde6EhwSfWqZkioQ1zt8HQQ75x53WJ93mxMVHsffd",
  "key23": "27AxPznPJpqG7et5C8kGXp5ZzwZsem5HjZ6fLFwDubS5EgJbgos1TrjqXyqArEK53vkjeYUGwosXqwxTRZMeWRTG",
  "key24": "3KEms4UwE4RWB8Je1D1pFyokUfY7dJGhQxPpCygW689Cahzx93f1Rq8Tw788GdjFFfgv3sxSUaqTnSFk6tGaN9t4",
  "key25": "kRdu7AvuFTQYwXtMGVXYpQhhmmQibb3eqkfeUP6CzZAw4owcbSwPYv7YkBZQTnxoyJfWLJokKfjjhMmKVVNcHQB",
  "key26": "33ZmjMikJTGfrVrRxcUW68uDKpgdt6BQQoyjiV1Hdcy34hYrN1nDcQ6gUfP35HRRKbAGSZGDHRiX3uSTn8YrNRS6",
  "key27": "4rrq8ZPaEWR69nRg44gk9YsTkwuvmJ3SwifJp4wWzTbxHMJR3aJW84KZcTuMQaLspNK22kqB55jQXnKDoDDTCfPe",
  "key28": "2BBjm6nAm6GYLgdz4AFyqPHtH1NT7623Mb524mCPMynEasUnm9zEd1nGF2eb1gviEz79PYVTGHQ4YgKKmsyv2LCh",
  "key29": "Xa8YBWwBhwvfB7EqzSHDCsZVUoN6jnrcieKbXoEhUWLxbmcXtqRVdVQZd1UzVZ9qAJjxbyzCNXQ9tU9paGi9qLG",
  "key30": "5wNU43GK1BX6wkXbtavL34QP9rvZGRGQQaN8s6kcsHWghBGLNb37wZtL12bUgt7ha53LzrDP3eqLEHEY2xg46zVR"
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
