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
    "4LFuZ1dNyGDa31cfAeagGdJK813u5WE728FEmpCTmpFUPQuouL9adPYtJccfvzmKV65CmJhSJtRBwBqHevHfbHtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41p3kdmipyp9J82bYEZfAZGW1aY4oTd23wLA3BAx6CRWpZrM1azqnxVqLxyK6AubShuMUKnpkpcpmLHWwCohadXa",
  "key1": "5rmD1gRQ1BuMfXqG5SuB2UuqNDHtTNY58L9ckBcNk5cxPBf9dQ59YkJkvc7oX9abBKt4BwRfV5Q3ppJdb1JvqA6N",
  "key2": "aU7Q39nL3dcfSNr2StNu6TjbGH8fxenYt2tbW2Rj2Rnm9tVcpGCDGo922yVAV6nePJg69FrKfD6BRJnj7W75w2x",
  "key3": "2tmTksYtgTvP6YDLkaRwrekRaXethMug9nsPzN6dMxp5V1ELLJKC6Xc5HDC8a3e82ZUk5CXDScXVcMmwWKJeZBCr",
  "key4": "21Z2p3g2fKh8j9XeKmFjefTqf4uUFHcYZNWBnb2gevdKuro2HDL5Wyfpw1RWCdSjESggu7VP4kMqrmMm1JoTKo4e",
  "key5": "LUehgsqrTV6AJdzA4ysL1iFthLB9bKc2NkcXuPSk1C8Xc4FuziZiEhZs1BGf6dwnh8TVw42917MreMoUkLCtH9n",
  "key6": "3HTXnGwdC8yQGodnHWKydnRgkx2hbUKX4EyMUgD6jujP5FXApg6YikKcLtQXhtNqukNnbbfsi2MiUCva577D7UvJ",
  "key7": "5tuNqDcLQNcdeYgr1aeSgS33sbP8sxmj9h97uiDiyRwrgeQHCxQduWyDmbEttHus8p4U6QGzwVdkswVSYQeFmHaJ",
  "key8": "51GmeA8Arms5iPt9LRtju4wX66goeHbBhtdr4E41keev84sUnze73L3DUAZ69yfQpzBa38H9RZQbLDSzUeb6fBsM",
  "key9": "2mM7ZgCQcECa4y8CvKHDRZqbs84mMPM5mNjUGk9ap34M5sm27gMTSpWcQZC33mk9zz4R4SZCz8jKGDtgaGDogqUu",
  "key10": "2WEasnLmUMHP6Tabtcp4TL4A5K8eNUdmG6i9ivCqV5pqXybV2TA8n4aJnJia2JUXrnj3yevLVaDzGj3LnBA2bRtr",
  "key11": "55YXXv8FVhP1NyNdUmQvagBa8wFz8Zgn3SQGjByvgYDTaiaSpFQFm4vuxRsXYQw2rBBGpRABJhwALn7aGLgxo2c6",
  "key12": "42NckkRzLyibM9TsDvfDyTzNMv3QBkET2mjLkM4Wc29JNsi7A4AQb94pUEv2ZpkF1tjPSi8MzHPUBGMCcVg7qKF5",
  "key13": "3p7Hy1bxRwwTvkUzQpjqpwK4jivkvW1Vzqhqt2pa16duXrWQ6ZEhg3eyTw7nmF86eSiXe35N6sCoo2mj7yGzwJhM",
  "key14": "4XQ7VYWLwRrx9M265d8nxquaXKrGBn19jRYoQCQCASsQT7bG8MRbgYzqL6x1R1KbQydGYYKsSnb8H2ZLdS4UtM7w",
  "key15": "kWt3EYDm3TFSsNzya8ta3XFy1RdhgpKAwEdCXCRQagq5oVHiPSSpugJ3Yi3ejo9abpoRT5cN2cWjNyMjMaTYLZs",
  "key16": "3bgCELdSdDwXG7zWXxEzMXU2CA83dX5D8tT5Jdtxvh1CzgJFeANDeiBSHEx7yihtnTaPQsaPXrKEQGJa3ysBQqjf",
  "key17": "5v3mznW1BX95TML9Ah2sFUnYCEqkio9kPW5GzhdvPVL1yGcjZFdmD7LdkyV2CR1atKKFpA7zzscgxKxtckMENYfb",
  "key18": "2LYQ3zfGy9DA6BtCWkPQY2ZVkyuVaTccxoNfiwtVRYEiD9vYqSUSJF7f13oY942vFMXuPd4U4TrkjLGV7HNugmBm",
  "key19": "55mG1nzDe8kKB27M9XwowedBqzCgqTEBdNHh2bKMxpAN5a8tdu75j6zHsnitaLmy2yDuteoN1fJub8Sg482gRkVr",
  "key20": "3jbKFkpJCpKmtvkuLTQUN6SWmmyn6PEHRmnasG68fafUNyVHghoLHsT3YnFEgnFv5MDUAqmCN1BMg6Ho3XxvbTbS",
  "key21": "2WcyEYjBiCkFtdFLBJzsJBrE2LuVRn7FU5zsQ6CpZijEdrv6MuYkpo81RhhxMFMSLARyZe2sbY1xceyeJZqTVpZd",
  "key22": "2bwW5Abitqe3M6TBnw2zCJuy8LjeHLP7593RAZ4s2eEVPkgeS9s8e9bRXRfNtv4oAWcFyLGKBpS5PN5AHyyxLZBL",
  "key23": "44oiEjUBapR3kMzSeY13rYu9FTxtroFRLSjKCjgQEA9XF4gFQUprHF2ZCtyy3fzc6r6rmyeWA3ZRi7Pw2EhYDNZt",
  "key24": "4sNgC3mfRw8F5eiZnZeiV6qBxXJHssCqobQxGkLfcFUeZkRi8vy3FEoiXz3QJbfgxmcnMUzqkoQsyL56fz9zB9k9",
  "key25": "3oMrDxoLmbrDZhEptSQ7XHnpaveENNHPPsD9puB2LHcBfueh8itrkPNamgQFUBbphCkEVeEYiN3W9R3zcxcyCCHS",
  "key26": "6fotxqbRMSYNWFzE7cmYNjLVfUPDsTFjTqiprnw9synaeE3mjcwwfoMkLKy1dK7ugQAw63xcZe7KyJGcSCTdw98",
  "key27": "67Cq2qNAU7KNoaqt8uW9YzVttdQZKceSyF4Pgy8Me1rYKeEbPp2XAweSpxSEnF71dnGDWYG4QKG2rhEVxMZyxc7d",
  "key28": "4TrPJSp11LcBgLGdEdjqm7AbwHpjNnvf2mpw9vMyxjrWAs7ob4DNUB7Fdfn6mrFP4WjHx9ACtcWd328g32xFRDZq",
  "key29": "2hPRZ7QizEZamJe8RioVdPkCz5cn4B92MvVnZMEQ6ig8RkUhtsiV6HWeofqVzhW3uGJ6uizri8ht1tLhbg9xPWEQ",
  "key30": "2J1eKR14dy6uQ8Jy9faPXjseaDXcBKxNYk65AxCkTpTk5ZxLcgC9yNK7doQmjoUVzfNJN5Uapbaa6UKPvaUuSXJ8",
  "key31": "57w5WSbT5YZfhZ5w59StcU8hSWY5uQufDXwRQLZsXZQbotX5Z4e5xuqGJnY3vYMQhgPmYcpDDzqZnEdgDbfaniGW",
  "key32": "2ntVU7qdUgQ7RyGsuwMbzkxSsag6Y78S1y8XLpjRpFgYHCMBMNjsxxoagMziSBnUxxMW5kEpsK1Tq7DJy1SgMJa6",
  "key33": "2tKJnXK7W5yHBxQCJZAzETdaCG2LYL9baQc8b1oekU25pcj5qk1Auw7b856nyAGq4xFuEVMgnSBZWuFXDV52Sph6",
  "key34": "4EidXhv3NQ2BRwfvEfBxugYAGmTi3BzhxwMsjFopAMtkgTk7kRNuD7kvL1uXa8gXjF8dXXc2JAsosCBUeMkmapc3",
  "key35": "2TM5TYMAgcAL62VRJTtFFKnQo1ZS5EucXgknCKu6ygCUKiSTViYVM6mLg9EV1kiZQ8fMsNfXJPh2sMpPoVh1n1BX",
  "key36": "2DxFmkSzFgxjyFnA23CLmy3ZZiUB8vSyVLkyPAhTXFAUDp3qt8itRWE8A8ew6xGmmEe6Kmc4SKovxggYruGgVM76",
  "key37": "5AiRvkB1CfgeLbEAz5TTcVGmG62oPas6eugSw4SoKJA69gWYR7QKRBW2Tbf4qYe4EfkfmrMoLHeSZJsK8QLSMtMP",
  "key38": "44sg2B1n2y6UH3w6TQ3eFz7yxc5TimMufGRynzepTz2JRyme8DR4dTmb1uUbuUzLzmPZgpA7SPeRcnT195KmH61v",
  "key39": "2NuhupEuWjDPwUWHwFE8T3HPxgxUvw4xNKMVNvzYJzXuJCiNFYL1yopW7raeRfdmQaocG2opWRQUSJjnBH8cxD6t",
  "key40": "2yuXvMJfMx9eQM8oEwCUM1o5TWJYfWe9kb4awBbRJL3r5hYjTy7WRowfgxYkthruhdtvfcY53DuWCuopZcKkC43z",
  "key41": "63Dkb91NWF98cJ4HYWYk7RVVomUPyBM4cBr82bxuqi3Ec1pPwaRyKygth8UQW4W6ADMPDinAXbmSbUN3JWAydSu1",
  "key42": "2SWJfsE2kithUFdj3wVb1PocjVszLbwi4u6ia8rPGnwNCLJ3fEw74iF8sad6Ez3F361kMg5Q9W9MhYAjtCdNTZNW",
  "key43": "2U3wuYWQTs41jMgYridsvNPUudZVTx77JuoXNCYSRRroNBcJfmjHHnFZQHVXYMhrrMw3bokyD9YyDNupsArjeFrx",
  "key44": "9bGhHc5sdg5nnzVEZ9wW3XwLMLfYojJZiqgTFCErL97qgrdL2oWubo3VFhg7C9Y1ExM4dWdKLMYjypgfEbd2CPr",
  "key45": "3amWLwFc1uzLpRz6fGeBc35xMT9YoqaxdA4nxa3mMEtTtbBP8g4K1daJsbDS7WNxGWukXJ5S5XvWFhhKumrJp89u",
  "key46": "MdfsDrs9Su1hYV9JqQ7S4WD9erC6uQKNYvjDZFp6bvR8rAH2TPB9co9MKcBi6TBY5VBG9ZuhKr41kbt3PiersMR"
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
