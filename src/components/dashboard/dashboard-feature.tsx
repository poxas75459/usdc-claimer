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
    "66S8fAUxThwCFqR9nHkuuEXxQd4FQAxLg9MHdVvNDAvHUjqcaP8XskYwEVwGKAN4epRWCM9tX8dDZcEEk7toUFBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSQL7DbfQ5RZMPrsBK4CZ9a1Zktcu7B7UtB4rMhSjihwwLp8JXR8BtS38BrZ5s8Zmyee93gAiMjbgyvHicKLnqY",
  "key1": "4KPgA3wkZipUuHP3wADCqHCRrhYsPYnYwEaxzW7apBLwNs8uB2AJsMBmAeZMcmwTSFNiF8G1hXzYWVopU9pHw8wS",
  "key2": "3D3NAqFsGxLTBNRz7AxkKhZqepeXUKeRewMmenD1QVJprZQySq4tw4iBbMuqcK5QQv9yoFko5nz8twKJU5MYjzaD",
  "key3": "5DzBskHXZYSTCfETMsKLSnkW2XPq37rEQBqmEHzJHr8NC7havgfnNHzsXVR6VCcn3JcaTimofAxXSPTmWUJSVY3x",
  "key4": "2j5tWeXN5j1CshnzNVyfigZsS42zmnv68ApEVvqiYTUoLHLGMYgMAJwd3vRZN8g7HKfEwZ5R7ckuFshLQGKTUgCd",
  "key5": "NsVtYBfnkhm4EhjcsiefxShBBjCmT1Gfm6Ggfdc3M9AMr2z1WPSrM31cSCN3c85J7wCaVSfnc7MM8dMkCMjpMyk",
  "key6": "2wLxT23kPQHwKyEPQqFH4VQFwSdZKKu46XmwZaEnVDEcDz68TgY48BcX4ixbbSjsMYhqtJQABksQnrQpg5PyJRCR",
  "key7": "26GqFXMMe1CXeZEiNcJm2rdz83Jh9fqqrN62tV1X9vmtrB3eygHuoNygJbnu5RfNRF78YSnX5megndWirzocqich",
  "key8": "3UKqmqTgSPWGLNJ5a9UHPy6W5AJkQNx7WRTUqvQ6Pp3DfdE74cnrzREvyv2P5RLmWjERrRMgJzFZH4zYHRCi49Ua",
  "key9": "4kRjgbbVtagjCtbTiBow1yQRav4URwUe6L88xewjH9ifoTSyKoLCSXe4GnN14t7NZ1ZXEbBwgKwvfBoewjgrWzXx",
  "key10": "Wo1eszb8kEmudywARRSsSi93QJZAFPpZfyQ3QhBp6RHUnpUymZbhvDZqVZUDfGQRF5eEMGKNJBdG7njRQGo2WQU",
  "key11": "34irqabYbyMJ2SdnZjeN1jpw7en2oA7Wo1CMn1SsqYGBjegpdEAwx6BKztMZ9KYYnmhYFzswnaWMjfwBkTs6cmve",
  "key12": "25JnuegGwdRcUKyW8qjycrjF219dAAax35WqQKeEUR81qJzCLs73uU8n9W5KaPmdjVf67K5BdZP6o341fVrGz81G",
  "key13": "3y4SEdFkx8oRFpPwcYh2fZnXNEkVSkzP8k4dQfodLdPgTthUSBuJ9zLytvaNcXGwPHk12gwYVn57qQzQJJaUtefe",
  "key14": "3eDCy9rwXujLujbbEQh37aPqSG8FGqaZXUc9gmPPDpU962ZRsvMFgXAYqqRe7caynx3P8nUpe2N4cURP8JZzEw3Y",
  "key15": "darHXxodTM2EYNn1Rs7e2HrgnK4FYdPUDtgC1hJfcW9Jv5n3c9bxc8dgo3BcnPHG6PXbJmc1cui7QbjvTycr2YZ",
  "key16": "2GR8HTjaPSW9S1e5z7kZU39da4Cpi3w7F8PQN8xHkKvMydPD1NKwoFQ4rxbHnCMkqtrXzYk8skjG3Jkbo8hf7Cvk",
  "key17": "24WZEPWoiowQzyPuSvT2YLX2uX23AhE2V4ejRHHK7vw8nNA4UFrzF1ab71uQYaMZTbzcWhgu8CLoJLy241XaAF1B",
  "key18": "5TGLtCxeFjvqmuUUFmXsePwe3oTjVzk6ZNdrYYa7tHgUp7mRXmKYykVzHz6RYyfQQf2bMwHAYQZKv6h8QYPAsRt6",
  "key19": "4chYg5SaFbhCTPwMGvx7GakMxFqqiYiPazWPVqf5Ffe8yzTLHDuPRD4X1dTV1i9SF46vmFa2pE1hPMr9Gf65kvvY",
  "key20": "5Zf6gK6EfKxKA6THzM2oXPK9nrfUP7kahbii9tV4na8Wx4ysZAgSF8D2XjaQv5e7XcAHmCuLZL5v3Xs3XCdAsrCK",
  "key21": "451Fciecyin5bTrJF3QBgcByMjzDVkbrZFZcdQeRoxYrAW34JDjvdmvDs3FzFfrbTFKvYxrsZd4DqEyCogpE3GJL",
  "key22": "cT7yDqCQkXXUvYUvEhBHz1GhQe9kKpwQkFcbCaQU17WpyQ1ZEoc4bRPp13wV1ZoEUfnbfR2KkoFZLin9kaxHnfB",
  "key23": "5VWbmJBhJCMgYtZfYhSJstRWogo9WpTQibu6MixBwpTN43e75zMbN6bzJC64MQjEqRnJPA68CTsunVwYLaLu6Gjv",
  "key24": "5c5d6TjskJfFBCHTknrtQgkcwWuNpxxSfPELgBTCaxf6FAnJq8g4LG6n7AgHmbErrod7u91qd9NL6aQGipmDjsop",
  "key25": "3UpUuWYpv19GhpJTBTvEkJroWoUZLtsG3zdVdSdX55dRvP2LWwp5FUjJsK8LV5ULPDQRZghY9NkV5m5YM9G13AaV",
  "key26": "5hxFXgbnMk66EH7LX8wAHajxBxSJuufA4AdrjEeWTf75RfmjAP2SpafiCcKgc1XQxBGVHCekx7JxAjBVqGC7S2ci",
  "key27": "67Uc7yku9tq9Wksa9TCBQJdPAZSbMVhaRbPRCHYPbkp8G5k2mNBWqgBmPRGuK5XPLeyom8idqstb2ESEdeg39UtF",
  "key28": "4zUubY7nEBXJNZEYvcvz4LaoyNXWCK9Xb1S1ENfZUdXrEvU1b3zypi73YvYtVMbfVVs8UScz5kQQRc5i8nbWkuWA",
  "key29": "2Mymwtv89Dw7rDAubFf4Zj5DD3DNr6bn128DfL4cnNCzPWfY15PtZSumj4F49cgMzBWtafnxK9pZimsNZkrDHKnL",
  "key30": "354ZdXreuxC4Dh6sxUi6Jyo3dvEkQKUtJ7exuoYtLW2dYepkS1ieDKV7CZPr3jECnrfVePrFAXciThVSAK1yEg7",
  "key31": "aeRjTLXN5QzvEdqTUcXb3Fm45icsMjdg5o1NiS7gcG5bCrUjJzEQRzY9y5Ptf8RHyFcDPyEu2DNXy4hDoMCiz86",
  "key32": "542NtvvbHxjsYL9MaGymp7KofxiJNTpVmhLW8KCWnrUPvxUY7nF4iS3AYPtGHJRXmSM5jNv7x1wuZQeBCUwrmN1z",
  "key33": "4Ss6AomTtXZ4Pfu9PdmhBTcLJAuZpVte8fCa7zK7WvXqp6FRSWJdGrC8ZNavEGQ2yryUVRTyqBaFCvhU6jBdDGX8",
  "key34": "3rKztjYT24xUkU35ZtC4kE8NV2UTF9fNKugHUJxGLGeYb4A9ahtR1TfPcKrBduff8PsBbS1v1XYJtgZj2x7i3PbQ",
  "key35": "5F3gpxRRbPZ9Jiu6cMvefp8pKRscWCMn6phCw41DjzqXYSUZMFfPJguJguZ31A4DMJLsr7wwXBe7UXrQQ1HraSLz",
  "key36": "rbweaGPcNihhE7qYSkmxNzhWEBcbFpqybJkduJv1GYuyxgQGBDLW7mF25swZqZqKSVCsziKxKniWnkTd3kkr5Gh",
  "key37": "4M7VWPkUE7LwLrBHZhCWyJ2QssBoKNS2Tj7hWgvesmiPC6tj77U2SAGxgBD1P1MfJQ8rmAQKTk6cEDHSRBhebDRQ",
  "key38": "5cjGCHZ3w9WdejjdZwJjeakwAKkFEUsJfuse67eKy55zxRi9E8CKZ4VSUxTZZ9FtWGuhdJWXBinK2LoBZM6YThJU",
  "key39": "mtF4FgncjKiqGrKh29X93vpk1oD2jj1ywffRvQ2tcw4qwF7zRozhGFAxs6jiNxmEQWR6gRX5To5U6LNJhPR93Eo",
  "key40": "4EhBvQQwTSijhsi1ag4McpZ859UUH6uWK31i9qiZDcB8cuvLAGwY7gnCdRJZrjhtqm3aGpb6mr6eSiNtbAiVM4xh",
  "key41": "5ndtodZ9TTnS12ThoHFyLZGK15n8gWahegAdWxJopTdva4z9nfuLyjHGD3kjuNCEQ9vLKt6xcEZeYLJpRCRwRumd",
  "key42": "4ziG3Wf52yFU1if9Hat4gau157GpbnwS4JnAeWmGue3AHEuzsqaTiZ7czPmvQ4TXGFduWSkzd9Gys7HFqTupBaeg",
  "key43": "UMdVBqNv15ZhmwsWMGN6XujygQN1197dx8P2jayhYKummLZhUmo371HxoXU4nnJsrxFAP5uVod1nDyfiQPPm84G"
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
