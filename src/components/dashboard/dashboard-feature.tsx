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
    "4kUtHr7tL7BToZovRmFwWx2gm2LzdzKBhE2z5HTfpjVXCXspPjNwZN7TDPiFmxV97qHbJFfkp8f92E6tDb3nGgJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPWuRgWdt4fMpNzoiEQLE24f24vFJ5zgHDQHrmUrTgUjV8cDoPqBieiDcecMG2GtsbLgE1sRnXGHUzMMatzrrbm",
  "key1": "5JNZktHHJt9JBwdq3S7Q5hexYvf1f6coK4KskAQ3QGy4VYg9yBs2U6dxywNPP5QLTxDBwUZa5EnQs7v4knj7ituE",
  "key2": "4g5pjWJaApcnKHZVpEcdCjmfXReFbVGYrPzhRFqXwgq7gUDJfDSruYxTCZqufJNa5ftdLTAv6SKVPcY5Jdn2XH6v",
  "key3": "4bC7xc4u855R4mPrUfDpzgWHjt1Gnx4ewqTcGxTM2UzAdZunukVJiJQQikLKfYzt5AjQpgzetBxG61kZ3BY6ZG5M",
  "key4": "4HQrHFk3NhNHQ11VuLaFHxcFbnLXTKePVm3GBZSk4pzgUuk3XtW4fVAuuZzRWcqcVg9YjeQ49CEncJb7kUZKQM6L",
  "key5": "reesEsauUfezn7rbUYjd5sDayGowCgVEqoFkKRgpH83yJVD9PoGaWPgEDcaC35cKY1sK74Yi1nE5ErC82C363ok",
  "key6": "39sbdNaqcNgacYwAJUQKkCLRce8hcWmrUV3AiPMqPqekAdzxLE87fLaDnNSUM1s8rbYR13u2mQXtekeJApCoePoi",
  "key7": "2q6rLicFv61rwCXLHh35sVvDfKjdY8drYtkHv1wK2LBeAo9mA13ZcnUADDWP8cToXRFnBhRCiPQN7XSVJtr15LGe",
  "key8": "5PQowLhvJCf6FgX3t8rvmAQHYpBkAEouwTsS6j3M7F8WBTzT6Pnjqbq7xDNdqSNP493GoDhePkubY5BbdfApRiwo",
  "key9": "2gGJitGMvUmuJvSsGiPSNUwv68qLRPseVVPGZ5rgv6XyiPEdYuQgrLzYC5vwFVVQ1NXTgAzrSvy6GKNiceUt8A4g",
  "key10": "3zkAmyw9tWALroopZ69uq6Rtp889ewPqLwn6YQHnCmrd6CM7AWW36CtYiQwKV9XeHnc6S954Qt1dW4oibqaLRML5",
  "key11": "4vUmfaP5joJ33hRME9oNrYrGoZGyNdknjiRvK8VFBPZtxK3w4mJ4YqFxPFKoqPWbvbBN3dtHFgaSXhLfKJbDANWz",
  "key12": "33BgGweEG1ymw5WUMnEW1GoxhiudgYEQX86z7ey7AZJde7TMmpCWH731zvRuzHRZMuAMyfwpCrVXFPHVVtCcobh3",
  "key13": "zmTGFqgZy9ZiNqUj97ALsF833DzkKkvSVtRHnerYK8yVxBeSw2xwDPo96r6mWu5UAtSZ5byyipo728gj2PSkwwV",
  "key14": "32N5mCw6z77BHKon6CRtYpioiL8CTnvsWrr7H5Ga8h9NcEsufYzkYUjVPBWGx4iCpFXP61L7NjpBFiKToW5iJMBv",
  "key15": "rNufCKpaLo8RA2MDJBUvtCNr6ubmHo1d1dHZNkmgyfodLgkndDN1umJ5wggsRG4rdTtF87N1Au6V5y3B3MGm81H",
  "key16": "rqZRFJk2zs54Hghqd8om5d4EXm8qqRZL2Dz4ZpPgDywj5UVmbVKZBPssvasbixV7QCGwRHudvELcgBxUpjYurJG",
  "key17": "4qCuCbJT4nta8xBpZv8g6SSrqwFin7zoBFKXpGykFnpWXQAHbYVg3pLe9nrRxGnzz9KGpFB4Myp9jXNYQK17d6W1",
  "key18": "2KV35iPuunm13r1G4mWJvLES41YxSCts656wwfiEbbh1VMvrgczAGYVy8RzSq2EKhz1RNebDq51i3gVjrrKKmMPL",
  "key19": "39STkfRfFw1NGVmtjigTsxCc1JAHSz9a9Q3Pp1i8a9FjiQ6fSWAsJV8TTph7rDbZD1s3N1FiYmJbnUPtsGouaDDP",
  "key20": "5QHZyMpiKxRCGCG7ffQsftC9LzbCCwBEh31DckPXnqL39FPyt2EvBsbePxcX9zbUkR5Bcx6ofvNvjULawmW61BaP",
  "key21": "67r9JATYiAKhUvth58GJdFoW48YVzGjubXRGeiqBvAmx5VwaJpeenHj8rhq4wUVxnJJyCtgwpaFHcSzk4FZTEAzZ",
  "key22": "YrAZSr9beCotsr7mmWTTNRY3sP571Apy43PnT26CiPgM2GzMAiQapi9gQ1cngg2bjjmYaokuf9orhNE9mN4mHcW",
  "key23": "2jqbD8pxesW835M1Hm79WXZYWPSWCyjmxWFCBQoD4F4VMsfCkcxHhn3LHZEcayy2FyeNEhpbDWjFnBYXEKcvG1PT",
  "key24": "3tRwFt8w9vxgn1QnrpL5NmD4qcJK67gUKC6qUh79doSMsg35bvcNimniJCpoJ6opJtn8VxzF9kWK5QfSDLPoYU5w",
  "key25": "3KSF3ZoFk3hfgTWNvrRS575sW1x9JSt5cjo1TE1Yn6HChgE2kVs4hbNUk33b6j51V5kBeNs8pajA1nhXfQvwu3eb",
  "key26": "4YmbjNP8UfZAGHDh4fHQ7Cq8j61n8LdPCkeJ4bPbWE5U1J3UzZVEspDAddyDNHHGftPXp7UocDD4mLATpi7C3HC",
  "key27": "2C6sUDnU2NfRSrVnuxMzb7kyKUURfxkWraESVKWnZgvEKvYwBbGVhhFKaeXoWbX4X23yb1Znpy2iXSQjNbEBKKGj",
  "key28": "Vs58sVPcro5fyYyKF66687jEmfh377CFt5kSZ9Fcdvb2q8ib14KonhUhKGQP3HwwvDTis7bu6VvLDgFuyU7ESa8",
  "key29": "2F4g6dWgqTeQ2wTYhhmcXw9Ke4iWfZXsgMNfNtnp8ufKzBUmiuh8qGatVEjA42A9RFNDfxvNMQiP2HSmBkQhQMLE",
  "key30": "5Pke6UhtPcQfW49QnLqj6UAyBHBdcDK5D3QtKybS1FW5GYru26WR5TarUMnymSkD1wVg2ArpkmmT9VL4B7Jb6saU",
  "key31": "4x2hL4y3Pbvcb2XR1W8CGapHD5GGguiDchzgqymNdTyLuFZDHfQx6sKkroCUKjBsyQuPhmDcPGbABjhKuRQ4dd2z",
  "key32": "3yQUFbSLVv98pBZyWwDrat72voWrUyE3jo8f7A5Gkp1V7AcwUo49kxRCSHDcDdf7NLeDh6umhYhK8xuvtUM45CJY",
  "key33": "4ahWTKPP59Cstqjt58MVX4icbhqVknGc6xwQomnxzDPhbiiXTjz6WvDohuNN6pJhtZVRqqEJFdEhZmP4uHgF6G1e",
  "key34": "5rYAmayNKpPpauZ44MHbe7oNRvLeiuJc45az2muPyvkf5CwGnGugA8PMLVPb4y9mjrkuAqiF3mDsDZHxhuoc1CGy",
  "key35": "5wgs1m5s3mn15tzn78ojX8UEyXF23iwCGEV4zjVuyNeEeDmoSimj6z5KJhJgUUbhW6UoDoFdrVu7RSarGoBYRAwo",
  "key36": "264RQUqWT9cGBjqYxkpUw7eCotaQSDVCMBdGxguVR7HxWsxGdNvQZBwoFctuXTqnQYrkaa5mZt1Ltco4yLvBJZWm",
  "key37": "57NNtzhXZryD6j78bfWQM3io1k99vTAcJvVj3Dv5UNmSjbDdgMrSk9soiE8T1iciU4b8joAFoT1HYWguxdy1hVUK",
  "key38": "243p14GYc9ygixVPyeRC7aW67LeM8rA7yZvGMhBNvrMn6ukGYfh97W8CNsHNuXGCNBhnXGvFdnAQ6WLaqoQ9yVuW",
  "key39": "4Z74wj7A5ZQs1kQ5Kt1nBF36woZdU4nFLk7yfVK1Q2Huxw3aSffkjTNXtZYTgmXVGag92Gt99hmqnd3oUDbpdZ6F",
  "key40": "47d2GgB9msutBb4jJ1h1A4ssPLpXPNAgZ7KN6otXw8LagN6uqBNqnYkazJWDByk4vnhe4dvc13GVQuThTK5XSpx",
  "key41": "3uZfpmqb4F7h8WP7TzswBD7mfKXrqBHMjHmujizK23qddDuftfvgGJ2r68HjZGvQnUr1hZEaLJd3tVtWLCgEqX4b",
  "key42": "2S5RJbe21kE7oLjPqBfnyep1aShrB4BP3dxhtRvt3ZY55fiTnvTy4NWah7aJhHyExWgBWmA6Rtbv1hUALER9ZMWz",
  "key43": "37HRS2v9gCUMwrqD2HfR5QsW94n9AtGxizWDCBxgBNAg9d5T7BzSuAfN8XcviGbUEDEtzsYpfz9rU1RGjtDD9y6A",
  "key44": "61WLa29ZDDBpkoLfbLS1WZ9jpvM773nr9RgLhkVHE1J8PSdZyyCeKnKXhXjN9Jikw2Vdz6ppL4UhSUJiY4vRU5tW",
  "key45": "fTBsR8qh83pCYqk2Ch7yAo4qcEm1raiuNrBATsHzNjMMRz2tnE8JT5K6UQtk5fYczfbkMTeNvDA8CMHtUy2q3qz",
  "key46": "3qeCaZR2kVZgyNY7JzNxbtdEoktbQKmSawmAERkY3fPDJfYYRxqjXryQo95fpkYC45rVCHC8Kqj1ynkBHMq7Gvz6",
  "key47": "4Xy2btFB1D2d2eeD8a6nfLQGXyqmbfysjcrFvAKHXHfeEAaYVgMuNpdBGj51qySA5P7PeFAAqEgkAHF19uooYw4X",
  "key48": "2aKbcHqQjjoFpD5tDhrAHxCh37YWNxvtazFXenR15JtQqM6irjmSfJMn76EhXT2uCc8EzNgm13aNGAeewpqKs7n",
  "key49": "2eePUiEfRf1E5m3KsUkJvWZRQsHaDVjJcFjGjErvNSNvjjLzQdscfhohQ3f1tjFPKwrYHTvqmTkLua8ZjdRqPfEB"
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
