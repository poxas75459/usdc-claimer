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
    "4hgxLjwAp4XtnJkQfKMudcpMSumHQ2T7pk3Wi1WZoHo6SpfURrBfqCQYaUAFFTtnevoP2xE55YknFovfFbWzGSDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HohzfY8QJRyn9kdL6BFcnXfDih1BMXCiQ9b5BF91hZvYZvVjcH8nhDwYz24WY8UkaiEAwVNLL1Y1tQWj88MssMz",
  "key1": "611E6SAcPPJgaaQcSdRLRXaKwUvqjKS8BHm4Rc2HDb3X6WzmFgWUdxY2A7b5kng6wVn2uu2PrzYZs3tsmmeJyisK",
  "key2": "3hVWiG5x7MgH1DkocErBRY2KvNsEQBHLxs5v6SWZnNK4T9fYh92LR7FyzmkVdtjbsidPH3v6G8d67UqDPm3HNfcX",
  "key3": "548YYR24wGWse2TcaQZFjZHM5Fo7SRPcHkEHjjAPaGmRNW1agT2hLCMDgTb4LiReqqFrTbDU878GiLGagGE9XE7C",
  "key4": "2g5PmkCUukNUqxu86Pq2QWhoFpBjGjWMdvVdYVgg2EMjCr6vJxxAPfLqF64YCAHSE2YGGgiXgrC7PbmE1wqEctVx",
  "key5": "3VkBf987ty8Pqpn361CMpFsoq1uXeF56vUR6itUsuApPXLPqHLS1s9c3g4NFJHfdyVj1oUMm6RiABGMwng5JTN7d",
  "key6": "4EY1DJNaGjQkdw4tF57bDAMK1GtVTf4UovpX8kt8qnfkwK99qN2WffhE72h7kZYaUHnUX8Wp9eCfMYngE3vLhXzi",
  "key7": "5id7L1gPRmvG7Hhe5KUdZ1kuGBw6yYPHNJDHKWM4NF4t5n4rardiAhTUieCVJQ1rozH7Yvjpd2mxagNC9KTFvaNd",
  "key8": "4jnBnn9CyrD7LJroVHWcS5gLnrLPx6EzM4sJgosJBDAa7tkTSHP583khJXh4E5kbzxqkhBLaJNgcRJSdYnwCRy5A",
  "key9": "53sD1EWHxSaaaWxS5SPQFgJDjANEVg2auje1eDn7HA1y8NFtbyU6cSbvQ8jpBFMzMAL4pmkko6EhPYHTkAZqNxJ2",
  "key10": "4TnAFXRS4yCSqUnc69DEcnC7nuAhyAVVdSsGAyhGxpyryTSSPaCULzBpikyErst34dKG4hY67GuA5zxzNndLjySo",
  "key11": "5baLRbQEMGxrCDt1ctvBQhL1ik9rH1pb94EHvamJL6ck6tJdD4RpEa1RPbGoKK97zzbiiHuDk3Fp4dowkbryvoSD",
  "key12": "4AoJVJ32VJ4NWFmuFwxNYQZuZf4frWpccWrzgjfzVNn5Ft4rDCUSrv8cWdyi5EBTwsXNibXP8YoxqHi9VpahDdeh",
  "key13": "249cZ9jfaU42SoBUnvF5pEtck4PpmoDnp5mccMwMsjSPPCBUpifZzQKUhnQowvZTNo6Dcf1rSxmUE6aphdrjtJkU",
  "key14": "8MbwUrZJSnpwfw3GHEo8gfCAypxb5BRwE1ynmcoMFC1t64aN4jPD42fVx41Ct4v4QsfC8Z86CpUkfvNHUD4vuJV",
  "key15": "4nxJKRab7SZPZWxTCotSt2JB2ZQSkdAKBaCJsWc1qpZFgs4Ca64MTvXHUWT5hHFu5RPDpg9WvJ41oZpk2Apvc5du",
  "key16": "XyCb3qGsovEpLCp5jfp8bTprSc5zYGKrbWWaTrVpUFm4BSC2KKgEBhrPUcgz3r3vFxJEbhJGgaMm6gGdw1zSCZ7",
  "key17": "awaEkNfyeYdjnPSE9zv9z8nvByCVqc7e7MXgWovohV2tti6vHUW5i5ckRY63G4m9gaVaSco7EoxH4oXDXFuwCMQ",
  "key18": "2KXSEKy47XCs7oaM6dsqX8WS3Ax1gMnFSahzkPZERJ87bR7uYrc6ACkLyK7GohqvnqHREoV1K3QZa6ujghhjo8UC",
  "key19": "45S2ou2E2ShL959jMXVDW4xZYbaPmW2kW6mc1bQKubayvmVSHQeHPvPZRC2grs72hUTjxwSmp2w1edqR4aV5D5Tx",
  "key20": "3fgxF24FAY6gXmVK2PhMyNjSbEmHAXYNabZKR1bEiGpj6petDwDq6Tnqtw2Azvo5TfLkizTZoRxs5XvHPLJHX7Er",
  "key21": "5cmqKpPrRSeef5G1Wh3DVu7mr5udr6UfSawLG5XkbkFe6J5DFfdBx272U8WvYuWdiuPs4cxR9RP29kqgb6vgBLQv",
  "key22": "9sKHKVPDAb4s8qg7JNw8xeh39NHMjaTgWGUUFC8mKHeRzG6UVRgRKxJhkNuhNDr2YL9m8ruqrktvk5C5P619UqX",
  "key23": "4tpxeukS8JZL3LCgdCVRYWCQJXgT31YKTZrNY3VHkZqrWZwkV3JUwSf2bsUuDHnpCeN9VeEWNYPrL7qKfxSCgB41",
  "key24": "4JLJQauuso8MYPF3j3scQPpUrUUcPbKB922NZfH6dCNCCYHeKrgXe49ox1E4dqJtu24zQZ2xP6SR8fjoUT3dRLSg",
  "key25": "34pAHtP3T5BG7RDWLsNoJkK2LVNS7JCvKPbVRKcZ7ywtTh2QapNRo7qMCC3d3FY19noMfY88YMFnqQLqLpHac46Q",
  "key26": "LmQHNFreTNG35UEyHMHHirHgGBKpC7eP7BXqC5zXf6fDStKfTVu2sK6CMzodNoCZ8PM86XBmUzRrSx2EhNerxHq",
  "key27": "2quDXrrvobBJBNVj3mfCosFUDYZd1BP8Kbi5zWZkawUF8WxfVrPM4UQG3zsT9473owtAKkWJj9XznhQLovqFcQAc",
  "key28": "2j7Sd8xPY2S44Xem4Eyar9sUCffkbTbRpNjB8PE8zuZeUGoQaXjZpSBUbBDy9Swfnorx2hkVse3JtZvCq7hUT6J",
  "key29": "2XPant5Xf5312YUyqcZL7Z8FrzwkSBz8jeHHdto4jgnoJvZ7qptMxd6VsY8pAQmQFiqKoYKCWxxQb7PZoXTJvzYM"
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
