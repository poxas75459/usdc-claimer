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
    "31XpXNFG4HkAV86bMdfezHZdh4K78GK8hFXh7qPNkyXJCaRQaZc5z4zAhEkE8V93YvZ8dejTDYZjTcwEVQ3DL1m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtjdiKAq37m3fvZ2gLYwwwnJtpsiGcz6DP8RX1oJuJkAbY5AiisjaX8zXnjrdZicowjX8XvW2CykEy8tnx3RhrE",
  "key1": "61PfQU3kdwqEZn6KAMqDcFgXKRkgHbyGMy3bGAUgk9BjZgWkSCbSnJ3X1Xhi5oV6MwxwAZT2D2wDQGpbHdyAh6Xn",
  "key2": "3LRAxhmMv12aokHvvhpzLgJH8szVweA2qTBXPAVjFwyb9EBRVMxLMM8wEeurFPtAWY1s5Lexnn9i5wZtjpZUVwSG",
  "key3": "441FFdNuK1ud7ggoTzpPVVdiJUeZSnJXxkEzt96kdeLpwzb9yY9yam6DrRJpBke8XVaAFi75QNEHubXPjwu4dwfc",
  "key4": "4Ee13F7VNFBLfNSdkaSFSk4UG4FnTKyPH6yRtgurD2zYKyJx9qygrXyNwjSJfonLBYUcAWFVKTvSEtHW4ohzVxVH",
  "key5": "2SeeDXuvGhA1BbGnL1MEZTnGw7vjwKHwwQBamRz1RgaMMNjg7e3NJ7i6y4VnRbdfYcYdqMArjKQKDXpgHXELFQaD",
  "key6": "41bmcPgfG3wZt8C2YJ1qivKvdwYbypcPVWNuiMibLHocSjSbywPVe1q8krk8Mwa9VeNihrhoo7GehTrW4nzpd95T",
  "key7": "3h6dunPWgqUUKxPBPVyb8xaV2MQMzz876Qf1totyXyS6qx72WANJhtXDguvkfw4SCbtJQXoiBdbgqqS7DNQXTfBJ",
  "key8": "2eX36pVbujVRyV9kyandsXWmeWrh6wczNq94onhuTnRz37oyucBGLArZiVY9LxynTPBX57R2LQFAuXtBFG4c1Pes",
  "key9": "nNuJ9UNN4TYDZffSALcYLCupGkF9yD82GP1aLsRZaWMm7TBTDwdR4tiyeuEcXnH6RrViiicnKMZyrsQaEc1AbzG",
  "key10": "ouaPdHNx17NCm9oJHEEpxwyEkTe9KB9wws8bgfpZHyQaYpZcP3fasbtMx18f1tRrRJFAh1dohEHYGXTs6HKuDww",
  "key11": "28ktQ4Zkx1YAktM8bwvB1R4wdD4P2LTyHrziVaS95VFSvoyPphGapwWit6T6NxPmDELCHDuV4XKJEBMg1sHYhgLs",
  "key12": "4tLcvGDeZB1mkZyUTi49aCKGnjzAE8uDFP2JvAZhR7vPDdP6ydAYPgKZkD2RAp8guKGuCDtBa9LRMnmTSpS9e1TU",
  "key13": "41iGJ1F1akCNMXk6e5BpNb3Vk2JZw2QgjB1tuT43njwRU7bkHPuSwQz3Qnw9UmHjTw1MSjbynst7toE2se3qXs2L",
  "key14": "32iFmRjFvg3R1FLgiCTa58sJ8EjcZmsp21zPiY2PDtC3xf1zeASyTZUEYaEB1aaD37q6TiHfurDpx5N4inVPsmEm",
  "key15": "4Jq8aeG8fEdj4BUfGWzuELmo2Za1dBHUVMJkC7hqtqwc9iRFvrgCdQqkZRLR4UFnk8sn45ZouZ5dZd7aEjTFUzK4",
  "key16": "59wmbacLCjA8kjt4avsfDMepn3tp36nmT4vQEsYnjiuk5aScbV1b53itR7oL8wUzdnTPmvAskLbPzKjQpEQQdtUg",
  "key17": "3pExhWFJhv1qPPPUTgydcPJRM6oMt4DfvmMHoXP7kkW7UnyfkvzMqbUsLMpj4RNTMAnH7gTJRc8FZNKA2ahNsxNK",
  "key18": "28P7i3sZQHD6GkeXYVZYPMrRVbjntsGk6kfzX5ZM1VacRzas5sin3KV1U8SW6fdMUVGDb6WFFXNzojtS4XFPf4J2",
  "key19": "5MshYx5YrRancRe5McRAxKinw1F8i4RwGKLn4j8sZXcRfLBj6eWt4omLv6E2NEJcq89cLQm5AXHQLmER17Nw97rc",
  "key20": "4ptZSxmdiUTcXVStz9eFciM7T6svzuZNdtvSfB5SrfRjsKRpdsdzWR29eeRF9z4hd7MzTUk4DLZfN885Uj1Lb4Xs",
  "key21": "2AFYpLrTMKXPt37hwHU3Sv7iHZvTSSS4t8fZsEL2Zc2hBLhAthUCdBgQ4Ft9P1GdDmR688LfegFYYF7nvJ4eaDgX",
  "key22": "489q5vGSCmFz6YGG4VRTCvvgCFX6n4JVM4jbth9VEd4wc4Mt3AQwzoE1oCiYmZYJviqVvqiEgtpwGdLAMH1bZUmY",
  "key23": "3MLaBqpG9Q4aLRis419x16EqUPhtyxL4FNEL34XNs1SxKxuTQArJD7EyniUUVeKDN332iETrMtsoar1iX7ucjJN4",
  "key24": "4W3spiwdoZ1UNohdK2Gye42tJkM49U1Qj5AHbsi4psUKx7yunWmSNT4diEbhkPvuK9ddVrUMU1vZBVq4VAfH8uh3",
  "key25": "47QGh52tLFjTuzS4oxhY5p2uNAwXs7fsWbcEz31PZvTCGxTFPfiu3kexWRTWxNJxBytUjtvWdDEEfhi2ahoqmVeu",
  "key26": "3qvpS5KK8RRJvxVgCnPfGHVXDT4ejS73sSd3kRZumk3u7xc59kjKnZZ5tgXLcMkjqCgKarfSyn5pgxTHuuvzNzjo",
  "key27": "63DLpEDCvuGCSDf9y2eJkT95FJsuu2pU7sxRWGipGJy2HFErrVe1G4YhvqvByP3gdwJZiKBk5Q4ZVgSawznkaEyu",
  "key28": "5pdQ3Kn7EN1iDotXrhkhxwfSC4Q5kyzz4oghRyEJFEHqzxkPdyLCnZVkkmsRp9uCNNWqpeHzQwP7VamwTGoJ5AgG",
  "key29": "3T3SiDU9y8zqDBg3rKKYg3xiyKiGVuJ2KgBmfv4LJMPnYVDkV1zCgdDEWWX2wQ36mAzwU7VhUdJCJz5K2Sd4y14m",
  "key30": "2bZQLbZoy9dQFeH62tyPvjYabXzCKs1L39Xtqq84vD7PQRcUtm9ntvbgcLLWKBySpLzNZ4MCxaXNE4PMUxyL6dZt",
  "key31": "seGPo2epLSmNrXYPegX8Udv8o43XnGJsKfQaKfpuk5vnpdUFCVktJcDWojBKYh392pjCS6doLfZavNnpnnktHaF",
  "key32": "koWnxwjsp6PPavKeSkhvm3eRXvKRKAcPH1XQD1U2yaPCq5PFZSYnaoMAaKfB1DKkrXMKrTCzFGPdE5sLWEXF257",
  "key33": "2vxCdg8L7sgoUo4GfZKcctM45fRewQG2asaNxXwmCDZbeqCo1y7kwanjqUoBzWT6puoWmVVrqYudBidEZU4V9bM2",
  "key34": "2hrSeuhGQnFPqkbagj29Ht9shHKPLGXrpVyHUXN8YoumAtKfZx3tYt82Fr4CwiDSpRzFQqMhhsAYPmP1ZvzjPxQS",
  "key35": "4RZtEK1BSQAM5p6e2jGai2Nk9ELND5C3JJWWPFQj1fFQP64K58VHeQA71J3EECWyQ6z3SsH4QC3GhN3PWgdLqXU5",
  "key36": "2bhGeSdTKhp1ounv4Cfh8DZbe5LqRjzVeUd78BPY39mhWrcuGi5sfb7XAnq9HpU3UkDEBDAfR12LdR34AjR12XHA",
  "key37": "61wAD9mrxHGuHwfxxW7uNRCr7jYpVAa38APjp6h4BGmeHMyMWo1XZ8qCbAhNdRjqzFVkDegPZExdCxyxMg5yawsj",
  "key38": "4EUjLozExxGcN6iENSdgMdYD72BjYjXnp26VMCvTTugSXybHzJ9wteZeSJyHuAWocBAQdhyHd1ACcrFsXZHW7bKW",
  "key39": "3TxEHja1bBbLHyWeSJzRj8vYSnnDmvUbLL8WnWxDS3r8HFpfXc6YbXcT1947Hn5N4CgizgsDZcoMFtX4vPjBSRhi",
  "key40": "4rbyeWYpdXGqiqsENiqemDhcbjab6XHZC2ABij2ar8NC8vTXgJs19zzDL4vtAbLVpf2Ck2oECnMSJSJgNP1EWTfx",
  "key41": "66p4BxzJwLXE8sWJqihmnvtDCF7Lr6zPec1ty8JTPepiriV6bPp9LyftxrgLHRCmuEov3uoGAN8igG4qSesPKFCQ",
  "key42": "3AKydrpdUjtL3FrB6TW4zKBYnu82tgTQ5dQSAZT6eRbo2qgKXN1mLFPwnSaNotdosZDgBH3gW7syV7qiRvTHXNBP",
  "key43": "4jPqU5BySejpHA9X9M7HcrNi6CXULQoNsNvwcK6wAp8Br54GN1cG9kWFvZm2sfiq29saAG4HzCSFTgL3fyThsxAZ",
  "key44": "5vgEUw3WQMCnyDDRQGevU7AtXLD8K8EkmP5KR8WsTphwj9wF8r1R8PkYWQZmuLi3RaieQmaxhtud7J6ES625E414",
  "key45": "3Noeg2k9H66VXYyDrBPgfhmPEKENhZtgzx97VtKj54VUwxMPcDPWFRuopnxXhdC2ESwHDwXBX6nVxBLU44KVXdBt",
  "key46": "5rGLyRbLP9bJWJuWVDRGnBCD4v3LyNKKJYEW9BsUMSceDW4jXsAVrCVUCpokZJ5EkXWzmDrpe2WbVvUqNbJe1Pp2"
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
