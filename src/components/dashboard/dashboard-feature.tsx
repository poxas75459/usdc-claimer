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
    "21PxWAShqdXVuCXwqrJGjhiCzZ7NmWR4he5UM5RXSexnZY4Nnf7QYnzAi1q38bvwmxCmbBkjA38d66qQGJ2z9E7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqHJRoAUD6zukmPYRN662vEWMXkF7NxoLKtusn9Thfqtz3jgGZD5BAK4r6J9gLChJS8wVK8wCE4nzK5bXycv6qE",
  "key1": "41nLZhD8stuqEUZyjsd5G4XauMqqvcbqjWncGXrGi7UP3Gdu3V9ftTYBqS1pec6HAXVzkZ84sdoTXp8QwLXmUkcX",
  "key2": "5QvsxdMJZqG9e272TDsvqYzwMnfz5AJXxaBTukwyjcdwRNMWQqmydiGuTGL1nm7WbctVMnMRygGcqJQdXbsamqJZ",
  "key3": "4TaTPCfeUpWVaucj9YUHBWcymgZmeiki7uUYCdHQPoEcUUEyaH3FEmm9ZuNFNXgmpUX1mj4NvTRgoQJHeN147F2V",
  "key4": "4JixHZEt64TfyDeVJonZwZWBpcu7A6a5e4XQGqoJvfcvUJ6Q3FQLBSahdgysMRu3f9ZQRfW2VXzv6y42o6dmkfrh",
  "key5": "5LMDX6pB9mnKfFJe7YRzAi1sPKYBvum2XGqEFYCrhHczaNeNQigRPqN7vkcYG4ogqTrNNfoMZSLJrCfu7aJy2sWN",
  "key6": "3JGUZvCunRnzn2zLFDbyUah34aH2iFtvh4oDeR6hK2cL6VjKTEbkp6dqRyQtQBLiYxhnGKr4Y4Ko4cCXCguLsdsa",
  "key7": "38rsJWFyfmVY3Y19xfPJKCLDxyAesttXtCgYR5ZozY8yT6kUjk4bJQWiftFvXvj4Y4KGjezr4htT9j5YuSuzbpqi",
  "key8": "2GLbjSh5M2cwRDko7mBzibYum4Jv31SYvEuh73zvBryXEbP4mL9jCgtXVfKvMJqsVQz2k162617DP6DkJPRW7D2s",
  "key9": "5L691PvDQpY9g3JTDKwqCpdCoLgGRrJ7kYVpvJnBmBjqPSBsbHpSLw5MSyuxy7Depe4EHfhsuAc64psNwcC7GTCw",
  "key10": "4BK41ivANm8r3XSByKwa1LYshdLASGA1bbDj9BLKP6UsKYSsCZRF42cpsGx1FtoKdLbZpF7j72DnQC2uiFRuGKNH",
  "key11": "2AT7FkxdX8oAeAwGcDSEiaT2trZX51vVCCZd48kspXUNYsc9nxq7AR76AHbWUM9xAQnkBA9QAH5tJQCgFTHPkjFD",
  "key12": "5aAYm3bGTNcvi3RTjC1Vj1UVyGNKFeMH2QB9D8F9L4Y7rQq2D74G3ifoGSri4yAdWSPGA5ZH1JYfE17TQywk3esb",
  "key13": "3adnqcmhJYGNdhzUcG2ZV3zaqEVnrrxqUBpW6WGRJBjZzegADmUxFNEVArm1cCQKYjKnvopwF593MPQL3B9jDvtQ",
  "key14": "3xzN88Wj1QV4oLnJhfFSm51F6sv72SDECfFmbURiv7uA2n7MEdrmTsKy2spCQHHuT9e75g5m8sP12KKA4H49qsf2",
  "key15": "3B5EahjjoDLMHYava8qTUSMCcFM8PYvo9e245UhaYZSjaKtCeGkh17AbF2pCrP58LVEgnu2BfRpQvGPqLymNiAym",
  "key16": "2AAj52z4yEqnqBFjq9C2VWXh4YNRd8zdXp59XQ9rxdxTj4wuiWtcRupz9WTmXXC3f5fnZ2cYS8mnxybCT9XRMS1H",
  "key17": "47wWaFJdhHaE8KucLjkUB6jzQQZBKyMAcLxb2sYi57TxyRru6YqMB9wcXd8cvDNgq9wv9T3vRgyhc8osDNCdwE9f",
  "key18": "3dTnhcGaqETFbUE16bWVFEBAWP16agLop9CLGMWwig3kiYPFtnUad3kRVzyfA9VwZKdF1hBMYKypg3LyGGxmJwrx",
  "key19": "3HtsVd5XmyfPfEk4wnXs4vDwE9pGr4wiEZcjrCXhHM5kbA7SxMuWkfKUcgyJMDYmD8HKjdgHGBbhWG49cc5b6rAZ",
  "key20": "FPNGCwawLvzttjQQfeAMxsmN34pT2Q2hBMRi4RrYkFgSVfxzF57xVoyznhKTWiSsJNosWJDoYNCpMfGEReqkvrz",
  "key21": "YC7hs4pDxHpKPTdyrbbazjX7LBsyuUWieW5GUqQJo2dJvZuZF5vESB75kSM2xWi3HQmg6noXdFL5oJVR7yGudQa",
  "key22": "joC9C6XTLbem3uRC3aXKCZAPjAAEg1myTaJG9UDDVVCDfrAFPvibQunoZBsLoRnm2kUx6ZtYrkLfEdXwdj4qNYw",
  "key23": "3gjoH7X8CQmLwWaCgBfS7WJpNKkVHtHi4TjgTDUPUFovvymZtLCQ7mEhjbrafUYBcjbjK8sGQBN6jgdxuGpJdxKJ",
  "key24": "3DZuLrs421vPqZCRyhgZwbcj6rK96f73LPFnfpEj7A9SrWz9fPcZiTrinPyovnRzqLsJcDvbuBQjhsAYMCi2mZCb"
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
