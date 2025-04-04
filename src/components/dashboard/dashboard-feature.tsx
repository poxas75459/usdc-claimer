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
    "5HLqCvvRJx4BqRGgskukBcnMZykV5VUvnvhZykqWziRo7ZxEqq5EuS1QPKNhBGDkPEcEyKZqrhG3JLJXzf1Ygwfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxKzSaL1S9Vyi9zE3za7HdUPG8kWfoRmdab7is7A2AZLVVPc75nPbDjvMrvHDM4T98FC4Vcr6TAHEDG7wwwv8mN",
  "key1": "2SEmmLJDmmoRBsxnQbpPaZXBnnY8My5aXGj4dCPG9NG3o7NKfEaNZ5ozk44wvi5rX8YRzEQu8rfTW9NpLsgnh1Li",
  "key2": "CY5SKsESZAkfECCs3T96WcyZ5hVtoD5B2xbKQWVXWERVgei4XiPqZqBVFoTgLL1ZjAFrNCw6j8NstBUijqbtJWA",
  "key3": "3ZtSG4ttFKpW5Mv41MU3G3eFiq3oanVKbg171azguPeh1dVNvr5Rs68VrmdsMoPmtcM6VcgsRgCt6r77ahwroKGs",
  "key4": "4Usm6ApX3F4T1a1fYWa2ojUTQcQn9R7gTQ8RhurDeXqzwhZR8viGwFbvMAA9rPvk66ijF2n3A9gDrDeBYnCvQWn",
  "key5": "2FzpEaLG6sWxrkQnEPoY9DZwWvQ8pboFWBgvqwSdKA1LwNKcLWbL8R2mHLZB4W1nsEmdd4MJwmf5j2QjhSE3CJZG",
  "key6": "4z4kjUCy6Pon4qUAJtQrfb9rHVQ43xzo1QxcUF59FYaZAaG9Vkb7zz8a23uSsrgtSfyrDapFAtw2gQh1BrEMLYji",
  "key7": "VSkDtoLvXhUETbNJ2URVgYbZ5RrZwajbzr5KaEzvWmztCoZd4aZNNco8LPxGvSWEsx5iaHCG3uCLMAwX4bkM2T9",
  "key8": "P3eoqQ4Eo1e8bKSZmRfmSCosWXprEUYDUTe3bd8c2UZfrZu5cKiWzEVmx6zwY12dZkxqJJTKspbscTSdQiAJPMu",
  "key9": "2dQ4r9nG1frVFHcYdRxKTYyrZeo9F35UsSfTTNZ6dKm18ahwYXo2P6ne77a3TVPidXBpvqcWVvynAyCiC9MVi32q",
  "key10": "QngLVjqdJzDVp8pPSAPYqgrWHYmPqQQEJnqewpquMjq6KriewSwHWW9vGg3AnTnSGANvuhgFDPKDMbtNzxGaDXv",
  "key11": "4zFmikTMRiQFhGmueVSBMiyxXEfM8HpmEwf2X1t1W3ZVZCb1jFNjgLdPgfSCqEqaPhVaiNvyJYSraVXy35siQfpK",
  "key12": "E3gaGxjQG3MWwu6ftpXYqMXXW3G15f5nujsC4WAYKChsmMeSnXmJXTrt4Pmuqyci3p2RZbJp25uc4qCn8D91rvk",
  "key13": "4tyj8tiSwjc7gos4Z8mTZrskwDaC7x1g8t3UkdYtwWEmWpBEJti23PdzNghQ4xqhEAY9WGctsWD7dUvGopLHRnGY",
  "key14": "aaQkLW8fAUszcXG8cMnXjA3qtAVtJqLhLLP8oxVLobtRxsi55TyynTXnCs8LDFGs3Qu4PS9JoX29F4SBXFe9Eys",
  "key15": "2Cikxc9JouRQahaVQ5UJp5sV4gFeKoJKw9fCknhVhaWTDXBQeP6dyT8CfGK7SAo7mJ2RUkutsEbZP9iC6N6Lhfz2",
  "key16": "2GPHyxjd41xdY2F1a7qBGa2sJUhSRVuaynofsaJqgHPbFZQ7r5R78ydxnmnYadN7TvbL1Y6d97TzKNmDpfhnXvP1",
  "key17": "2air3x6doaw96jhoq3nmLCcWv7fo8uXTfLtsby3fsNXvCrsxNNdxhVoTv9d3ZDbE8ab7bEvp7HH82W2bCwPftz1b",
  "key18": "2Fx7tHyhuteYBHTQka9fnSTokTpSTq2UrAcz3CoFa3F2D7134aVTyExe9u1TokB6Rzo8zjaevfwzp84E6fdP3RVm",
  "key19": "dTbydCL9nsLjhdS95Nz7rLCVptMNWVcNxHbQd8zhgGQtP6J1UNPBjr3kaxkMxFJ7zgpBk91ZQYi5QsD5iqsnXHn",
  "key20": "4YcQpRBeE6sARDTsQP4sFA1WtxiTJwCZJQNc1DxjT5fCAA4iGjtqKAG6DdivDnBpzJyLfU9GhjMeu4ecwnEM5upy",
  "key21": "5CoUqjbNRC2mn9bmxrWbsuaTDoy8zJ7Z4YdQeSF9cg3i9ZSvvrL9zy6vjs2M9FCoMap8uQwLwbqAfpsLFJMRjtzX",
  "key22": "4Ep3n3rQB23GHdmEf66STou6cHVK2Ap8fmJFsJfWHAncACZsmdShtVJrgi8UeDmQiRXfmC2Lem4hdUGCiHSBatE6",
  "key23": "5V7r1DbKq7YLFNmKv7WHzysV457UU654MKgEHEJauDjbUUPSe4BbcDbobxLb63tEk17WsoiSsgHbDtEpGNApoP3e",
  "key24": "UfwKDnUNcgbrtZ2UUoenwMGTdvmN5EJsVk68PZPTMPWrZmLtbWkxFsBJZC6dnbeMy1ywu9y1SiQuBWdbBmUwmhq",
  "key25": "59RyPx3e2PcpHwCYywLuq4to8vqzp2Buxo1ftyATvFTc5V15JN1MUfqwY9jV8z2BCSbo81v8d1yg9ajQJb9oNHDx",
  "key26": "3tASK1sLYr9KNMNr9YA6GvfK9MZY7JZb8MirmQQtexMa3FAEnGMczBaLYMSXFEp3Kp9ayDP2Qxxbm4nYYG7PnX4b",
  "key27": "38WrzXpBe22nAfuCuXctuxeiVPaN1xYACrMoYStrTDk9JfNvx5w7yMAoLprr4efgm3f4x3KXfdXEiQQKJUpDCjWC",
  "key28": "35YvJqL6u2SLu6uGtwThhzCYA1f7Y8yscvkWfBj7NTfzF5asR6yVn4hNK3UYuMcPtqEwDoBjxanCNoynYVzRUskm",
  "key29": "43gitbb6sQnEos13gcgoFq2FvmpinZ22AnxUCc1UHRxCbMbxMfNaByrn7xk4zwVLerWzZBCq9dZBBGVjXJmLphwq",
  "key30": "3qdyUAzJ6eeE31eRQZcnyP5mhTt6aqRy97njVyUoeeV9R4JaBqkdi2pWzn1UxVkLbuEup5os247hg7eDF8M6Uyga",
  "key31": "4wDWu6FoNRrhhnZ4oFcpPPVLC9b6fngieWC4v3dYcvqfyRjxEgkw2ST5sfkbAJuGJdAE5JgZ9hTwXsaUG6rVTkLx",
  "key32": "3FGkERgzwLauVq7NufZ635oxy2qC5yfRRnFn5W35jeQrUSDNYkA65QPaLqoqjxwto6tfe9MVQGMYV4d4GAChTwGQ",
  "key33": "2pkLphqqMrL3cMy323HweK7cUzrMyppPBH34suazUzSa6WvUDgG25Tej45GafMzGTEzuArCypsNDRWA9avXL3mKB",
  "key34": "fQSf1VRo7EkwRfMZqwAjzxJF7X7BHxAKRMPnJkH6bGsTN9ZMja3fyh8o4mJT7JmwzoweCNcPRATMqoxmV8wU8sL",
  "key35": "4ruhgmzLAUYkJcAYCEL2BTi8xdm65nqU2mdsYgjznL6emkc5fGDcjeDtrQ81cVGLY5pd8TdiNh899hkLgTSsGnWv",
  "key36": "27asaY3WzyYf9zDF5PbAKFnRcLnarTm2kmVWfwkBk58ZStBnVpGByeY6rPmWdWu8Fze6FBCoDEK4Ep74JbNpcLZm",
  "key37": "5vwxMFi6uv2rKxrofW4YXycMCdvGr2FwFoNLcHb52Es5GdUAtW9LZ3ug6keU7Fr2ugPbcwgYApna43V1WFCNcEoF",
  "key38": "4tEsMCkCqceGFV3ugq2bwQMVxML1iYq1oD18PndojHA8ozyxFUh2oesN332ySLsuDHPtVTsrUUdEg6KQDP5v3PG5",
  "key39": "5aGN8RPEyWgHwahGYczeZk4kA5v8cVELvggTpxFpMvJk554G9Fbr4g1P34yKHfbhthCQGURG4RXDcZmDkccxDmeU",
  "key40": "2LpbMnzSBb2xDcBjuLTi8JEhjYVR5fJAbHfv7GbKP8kZswPDyxBqECAbVoxcrmTYum9XL1rcRJaErquUfxNtbThr"
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
