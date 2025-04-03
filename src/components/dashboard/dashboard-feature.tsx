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
    "3o4T3Tdb9ZrarV6zrPQ6DJMpy28SHqMF3F5U7AL1SpfMUeewbhAxbSpcEwnxeL3jsDK84WBWjmQgK86YeVEsvjTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vVRpKMWhsrcUmi3Tw4dSRDB2xScjaZzHAeXPGvpvXVzr8dhKsPmau4Yp8mRfPVLEr9Bfp7b7wecNvEuDkjDpWwd",
  "key1": "5qXZxPN8qKYbwvG584XyhihJAZ8xCZyaUX9ENg6yDGt7fLsDSgfeXmq5mwbToPvPU9yAcCNqxnwxgbgVQVK4nCfh",
  "key2": "5saRD4fgzsP9YeAqvHev2QxgN9dUhB513C83EgE9sugifRT7RJ9PvKb9deJrjemWEAGj1u1zaJq1TYewKL8ZbkVb",
  "key3": "5RqXm8WN8K2gfoa6mSPVv8UZeTseNx9hTfY22HfzN3Xu2mGauVDxRrgN7fW2ZKoqNdh7czYwRy3n8Ki6AXhMTUgA",
  "key4": "4wVL6BHZmkT73EpXyKcfvwtAaDbuDbDY2q8dhbFJCg6pgaTnWoQVGvizkwTosZUFcM6sNDyGsYeqtnyAJp9vM5o",
  "key5": "euL5zR7VFN7RsBAXoAMygu7yv3gq5BtmuGLWf4iKjdX27PxLdi31Ud6fYwoWhDGy1cUMCszPAZYX9Texv3B13yv",
  "key6": "5d7SfqFqSGH7bsJHEiVFqs9eX4wGfmHxc4ACLtYLpNoqNxYEivaRfhS7NTfD153Rf4DJ9CJTgGYrG2FH4dku1Exr",
  "key7": "3y8ZWRbZn76ztgzr4iJN2C8VioM9U8x9v7P949WNs8HzCsWMVkXB33G7EGJxxoBpzvmp8B9kEJFkUQukMcYuG3K3",
  "key8": "4ee9qLYCHmycT63KB7fgPuhCW4ToMG2hh447a9tjbgZkTmJmc8eyFsyjtaE66ZpVrhuAAfyTHB86aQ9Zx25aioZs",
  "key9": "c7Mck7SvjvxgrJZu1fVXdarTjwtV3eV7av4RbCcNa7a6oVLjL3ZcpWJowDCeWkUFfmJ7A8WYo3ku1PwySDbuEGo",
  "key10": "FrGwywsg45d5qjUFt1taD1Kn9mJx2n29m5UnPHqwPU8bzPZKeerV8orh8Fh7ELzELRR3zkW5msZwa6r1TMWYeef",
  "key11": "2xg7wtaJTLg5dsWWbKUgpB1VnALMxWUf1tYRJCmXoEVayr2FNKfQFrgssFJUjNxKmRtpeDm5JPpMqhg1jZYQ5Rk1",
  "key12": "3cppVFkYFP7k47AoKtdiHNWFx7VvfruwCbdHM5jyTzKZe6GHJt4FTQwW5Hc5MZtEeZJ7rFECxWcXtiLAMU3WBc1t",
  "key13": "nrpmHgy38WQ8jUXM36dM2G65TxCXJQ5gwcTSMzYnA8szttjopexp36qxEfKAmsc6k7HFZ6QGDkjZdsGr2BkWKT4",
  "key14": "2vhaRMeFLuiBvjvGqSPcYK8G4vsTnhBxAY9nHs7K66qkACvgZy3vevND3J5owPkLQ5fu4Fa1Cy6kRdJzF7LSZFYx",
  "key15": "5u4FRZ1eLU2bo3s7M9LEkAiiwjtr5JcAmz4qVjGsrLTRhH7ynrLEqHfU6ZqeScTib5xmQwQE7BwQTso87yU3jZye",
  "key16": "Tuzq5iwLHHGS4sCSsduqYXYTWtxZw1E6HymaAWQ5MPB5VVGJG4GboMTNLEswyTwcFaztwoNX35cWt98pWgxGi2M",
  "key17": "2B38taMDBGMYwSsntNGhF46MpsGwbvbSPRLGqgzjKSRosasD64TdWvnnrDaU6DkG5ycV6Xv86P1yDusX4TXQdRMa",
  "key18": "5RU8i21as6J3K9kBzHNKfqhkL1jCpN75cEhYmCX2LfjUPXe97Tsboij8XwWPZs7zwRQ89FwfEZ2MrmNS6y15mvkd",
  "key19": "37cBWUxWa3v52rcLZHhL8Kz2P6ZYEeRB4Rk1gEmRT6SLXrVj92SAiu5FGyMAAPkz8PwTk89G3hT6Wtt5UWbkEyJj",
  "key20": "2SiP2LEoqFPgLGDy1qJnu5DB7fKqVPbaM5QXacDFVuBjLy3C7rjph9u4HunBzNNGPvdsawEjrY8pFJyhz7bfYJCL",
  "key21": "9PS4kx9YtEweazZsyzStzpQCYtVEHPhUxdPD8AoHkGCcUDSBqHuvXV2pF6dd8novAHfBN45SiwiVtEyYjJaLCT8",
  "key22": "4b9mbKdp3LEHvn28GH75qr2JinSbSWtZ613MMeZNu83VuTpv5MdTgpKwKsGgANqxi8Z817SQMTbvaMfRw3R2GPmo",
  "key23": "37sqvtnbZcXRyumABeD6DbUgL87JpbZwdLR24YZ9AJpssBHXCDPaz6BXbCcmGFa5RDM29WCMqtAvFSrHs9DCqXBW",
  "key24": "2wEgPkNrUyT3Nntroi7bG1jDxqiNKFoe8diMR84PUv7xwf3aEDJr6A3q8N4MaNu7kH55k4svERu38VVQL1JSSF6v",
  "key25": "2ZvcCkWgVdSVis8to3qzBXSuioZFoRazU9KCkGx6oRvFi1E7iytAhMQHr31TX1Ukgrx9viysKB1pTBnCWvyTMGNE",
  "key26": "27uFnpHXmVmJktSyzXdcpmvJwGpg8USw9s348u5FCrM5ZKY9Bqr3FRYns7UmfmTwag6w6ne4mKCzae86qV4P3kF5",
  "key27": "3yovruRj2cSDU3WY7sh4jRAtoEgmvkvhYoxvyPK6Zt1fPwnTnVmDYRGpZKf5wZqgz5nvYjaA1d9Zx7H3tihH27L6",
  "key28": "4nF8KvoUBfYqTk7WjzpSPmyUhfPTjieWGZjUjkD6RH8vVYcNgDmVc5Fppk7ekdWbnDMSZdpzbJcFfktvCNFCi4ze",
  "key29": "4wh15xBxttBTK9Xar9JQvGf8TpsXkdVbB9Sise9y3TP25JhypaMMBBTeVbqhM5UsaE9898jLBwMNPoezyZF8PWbT",
  "key30": "2ehVu9brwcTxR7o26nW8T4fkvAim7xTBcQrJ8hhLgEC99r8KA3RxoVHfjtsp1YRUBpwr1Q6SZQ2rtJvohYRMw5J6",
  "key31": "4JFNeBK2p4VMvj5vpiVpRzKwey2pwfZkbQFRks9MA6hTXh9tqeK27MNsZu4d7MB3sS7wJsqHeoXxHGuzmb8zCrgN",
  "key32": "AvABKkCGKCxnacukGiH22AzwrNZ2AXoT8isRMkR11y8gn4pGUvVSVgT8cri383FQfJ9Bs4oNvQJeJoR27FCDkwm",
  "key33": "3qAYA7T2FaTbamsqVhzveySuQqePdUaxGrP5agGZL4XJnDgHgjmxYgeRVJEchaLBUKEkiwPNeY9DdP1HVYLg7TrX",
  "key34": "2v1ae5F1gPhF1AZyv1xzhS9G7NZXZkyhVxoqML1ACyr1mn4y13SsA7TJnVU39cAuVceNqoCmEGtqeMamDHKEW3hQ",
  "key35": "R5ixLPcp9QzASG1EEWfkTV5hfMxLwH46XXix42Y5tPqwcy8aCBChbJUbnSWNMZHKnowD7434gCqrEoZYg8KhsSK",
  "key36": "K2HcTw9WVcmkhoGfa6iHkr73eQXEg1ywuV7cfhxnCKMVBxKgRaRKm4YDwGkJZAAvppgUE7XkETo15Hu8ihRXJqQ",
  "key37": "24dqZfeq1jv8SnyftWKZowRwUiCjJvEUpZCgnm8LhXizgrhEaGDm75gBkq8g9KBNtcuPa9BAAm2NXmCPhnxzzdNY",
  "key38": "TEkXqL3wSFhEucz2H826KfuFkPUJrno3MzKdNZJQgM6FhRJphTr3jybPKh5S4BhkESYmKrGcMfwBU7z6NAyYLnT",
  "key39": "2J9RG1DhgsP78YkdDpNDQkL1ZwMkNBMTTNYZyy7Z6fxKzFXixBoLhxcTviCuGCgL65Xcc6bFvqsbPgejuFT4ThAJ",
  "key40": "5ond8Z2YvUZdzcrZgRCgw347NJD9egvr16iuMPfynvGvKnZ91xjrpmdBxTav54rFpYTq53sNLqDSBWVq9Y3sefLv",
  "key41": "3aT6pj9eDDxngZw2kVvH2z7ZzjtSyS7FiXK1edyNN377Qnu3dADnMG7cvTXFGW8e1bhff3MzYmyJYV5LYidy4Lwp",
  "key42": "2qSD1LVfnCqrC3pQc2unHUU1wcabqhgUGUmByuZS3eagW1YuErHjuApzhvMwEJKtZQeXHJzB1LTno4XBnL5MfTeb",
  "key43": "3yffisR9sFymF1z76ebcKD3oi9PNREmngPLaxEPF3rFnoBX5A64Nm35GAVHcNFakeHbp5sBYzDEjuHRF4G8QU41z",
  "key44": "4CEcvo4PqFb7g8z5LyZep4RkQ73QcAQuwn1gmBBKBW7o74TUACAKC6No7y4Pz5Nb2BVMz3Nn1vEXif6tDsjCkbc1",
  "key45": "3qHHaFzitPqXkztBeLSKExobFgzfA9mLkHYNpUh5fDdUyU1xYrZ5ksPG7H3hNgKkgPVHJG8cMR9LgJhrziQATShY",
  "key46": "bAEzKXRiyaJPi11HsYpn33HotGJtdMR164aXXjVUU2Zi357CcgwVTt2mrhF6KsKaJ6N8aVSULzYbfoNJ3xVSz9S"
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
