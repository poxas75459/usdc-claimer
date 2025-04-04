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
    "3ctRFn3gJXTwS2Q7ZfmSgSGWcr5odAwLthwQeEF3V6Km7ZyWeDasEdVyWRjYz3T4awboLqpntYvAezVDTUvc3yPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fxpfpn9AsjBBMrFhtL6MxYYqFJ7S15psjkKtx2C8JELrVbD3ZiqjZbEozFW5vK5T59LwVnwHRWBWAsTYavBhiBz",
  "key1": "3jBEAs2y3QqL1D1fCUeyvBkVYmbhUr6fM3juwPCbFrp3BHyQ3hCbDCjPFWHDULfc6Xb483TMtH2Ys4Cex1mFTVqE",
  "key2": "26q8MwfBxbwEdZVbpL1oPCpa3ZKko7MJnNzuYQEG9VRpAA8Jc3gzfPFjTUNSJMJATS1pFydupF8WVvgtFyaS48Xu",
  "key3": "3zhm2DWwu6ebXJvDVGi3ZtS5ANFy74rcZajQ68CtibeuBZtXKrbRdGzuXyVesyvWHyJqk9Ak8vpaMApn5KBXcpDP",
  "key4": "5JCGbbPcjvcBWnNQWbBSznCwA6nxEcbXyg7FrPxiNx2vPU2DVoAK3dfJS4JeRf9LnHVQz5oLXM1FucPQkWxhue6E",
  "key5": "pWyFxVZmUy8MXHqNv7ekWR3hdCxu14ezorasyydYNo2BhPEqfVjH7H7FNzpzjXQrR5GUFJ4nFMtWUHrLFmFRhZ3",
  "key6": "3gFGY6JNzazSM47n9VHVz4WUW1itFrUPqt8JWTmgAyQ9W1ArJJvGTffPiHr8MKWeNwLKBr3vxVr6rDr6RzGx3r34",
  "key7": "5pmyqkbrsvXw9NYUcESRydS9oG6uxWTtPCUBz6F38DiphdGXroyxHX8WjWLN9Lw9xNvSRTBMtG6iwjkQXE6RkMTB",
  "key8": "2fngKZgschFbVyEHWNVqfqX9uXUVc7hmfY1qHjeQw5VL4f7kBSRyfWvwrrCFQhzifWMGZs8RE7WpuNmuM2Wn4b3A",
  "key9": "4C6ZPkqPjPBddVvSWQx7gmfiR5UyA6aageBnp5EJFbNDpmypbHgMDyj72hoB2N5XcectWUhLh2NB1vYStQVFobFe",
  "key10": "o4QxXRJ6Gfhrh6vAKvXVbhiviML3YQhkexYGPQgDKKjXncLcNg6UsVTGpAgPmmKndKHt8AZF6z19ydbq1rHLyAX",
  "key11": "5TPoD9M4JdfEsx5RNNkQXnAG5CzyoJjBedMoFpRedSHogRYVfk7Y4anxMWLiy6YT27knCrqMsESTVxoSGhjYgTvb",
  "key12": "33YE7x2dXmicJHi71V5fyyfhmTKmtLYZCC7ZKYN6ztKxjiN9Yvya5iRUGMst2D81UERSuZjeRnmT5xfBiU5G14rH",
  "key13": "5Ck1DXEBh4abmpeTHcA363GPio7pAPgGWmNafukYiJEbGSPsKTcTtcRMtHGmoY5gkEuarfxUGFnd1EnVNW1i8NAo",
  "key14": "4K3aZ7FcyQ1WFNQnCphsrZ13PBvnscWQJeLL1D2yDxRgbZQdh4dB6yc2wYD31Kd5SVMbMSU4PhUvn8ijQfSfNgtR",
  "key15": "3LAWPpKMK5gSeJ1aQjKLLhBB8zRA6D2VtXQ2AEVfbzpWx7vBrp88yGdXfXHf9vBTJunDGERWm3Ya2ZT7bu3ztQjK",
  "key16": "61dd1WuTRx9zm6DvLcaqMQQtLaLjViXdN2VqUpQNYnsXYEmdw6cmqepJpYaPAftp7wk4XCDzqHVM6woGpwFjo47s",
  "key17": "2K7h6b7U5Uc8GsWpkpv6UWCSbPVneYEBvSGYwW2MR2c4ieEpmVNdfLDTJWd4EYHqRFxWpyqGB3SZqENCMi6GpNQN",
  "key18": "2yp9AeazAi8E72R89PKhaxqR6w7dH5BthyJyGam25riS3gDEndW4AcpFJ4YP4mEg8bT3ozr7qDHTvGFnqz2dEj94",
  "key19": "2Tv1rQoCNsc5idZ4ZoiF4T5kwCfFkKLtqmyB2kXHKqxhL5QogiacS4TewJHKHmnRjjAhTPMd7nJXzEwyfS2P2sKZ",
  "key20": "2YcFG8CryEABhS9BQwfKQLkEu7yustBQxtbwVTgRwAx8Kyf5r43x7FXeXE1TNT6Zk67ADeZjcJuLniURsMX7paXG",
  "key21": "22ZJpkkuqZi8eJatFfCdcxU8Fuj7xBAeLhKVM1weghjgfPjoP8ebGVoNYSsfVf492JE8nJ4KubfWmvtuDXqK3jv8",
  "key22": "4EmCRe7XWRNhjmxA9dG9KjkZ3csjpV4F6TF9sUfG6braYwEd4VPBCQBtxHSD8mMNxx1PKCrpPf4EBeY2kUd6VWXv",
  "key23": "4fwpY11yi4ZXrhMfnvPmTrQm5kmbzFTn6Y21zRgk7UYsUfdPbE6XsksbNZMaBrT84bd71XvMVNJ2m1Xkf6zfKyQ",
  "key24": "3MiVEDssnzAMSmCXWCsebFocus7YC8dmCobmPVjbbPgktwGmjrpmjRaYMWvYayWNqcUXxp1R8SZ4j8SYoGWVtrpB",
  "key25": "5DYfJtxoZAwA4otuch9pC6aDrzsF7XCbmCT8Dj1Hy44KrvpMbxsufQfUCw7yoCRKN1fLejdadR3JEScDKNjKuo6Y",
  "key26": "5o9Bc4JR7NPpimxXVfsj4TQDEA1iWioLq9XHp6YPdcd4WJsXZV5L79xJpAWNaURdXzwKZDJnirioWJe6KFtKpd3n",
  "key27": "52uqnLuBgBkYwH7yA84xrQb4CNHXPDadmhLUKGTXiZpU57Z3732hY3NMf3rjJJz3Qu3J5mQFofxKtXZ7nzwZGXD3",
  "key28": "5suumCvjj2D4L2YDRe3F5dwxc1nrr2BXtfnFfveVjNNEhj9tje6as6P1hWJdChSnibwBJwUJkXFD9LfzsEYSoiYA",
  "key29": "52u2D6DLkmnPVgheZSWsU42AmUpWDeizAWkdePWLdVrFBBKDSo9oHDKvu3av5U8aksr1Z76a6XmCpzJ6LA7nKRrW",
  "key30": "2AhEu5GzX2PRus753bd7wj6QLzWCekUD5vhtALSvQK9NX522RvLXsfm1kvRi9eiNCiq3HHeDY4Pt8oEcWVeJAy3F",
  "key31": "Ry9PwEHh6MU1uZsG4tWV5cV3zPTR3AJn2AaAMdEpVFrecwhHAwKYy9VMGM1gNT6o3SrUEDhRUxtVxY1ncn6FwZB"
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
