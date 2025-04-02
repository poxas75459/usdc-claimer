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
    "3tR2i2Q6FJphoUxjFWAa9k8mbkPE8Lqy38iqQBa4jNpFPREkQrC6EbY4ebGUVdFEDkHd3ZuetKbGuFe5eU1qSRsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329mhwSEuqCkcBN5w2GW1Mc5VVj9td9btQ1GMpGSDFCyeb5cGz3bdCkspv7KBkmya2h54tKe2DVkM5NYbRfoQhsf",
  "key1": "5TLqTerkueKkHYSt9XCh7yn6Lm4Uj2DBoxei7b3BTk9TfQNHvmeb55yxbqyLnQC9gCiGMXdYPf5cuvDpK8zxeY3o",
  "key2": "2YzzfdXonveCBgGWvVSvj9tMf5RH842tJoERcjtFeDAwmMo7aJX2qjVb9awK9W9uiu6wEg5ResSNe49RtdUjT1yV",
  "key3": "3oakC9YoMWrSL6hPuLsBkDZSCDqkrdCVR6RuiggxYDrwm1AuCJ2Rs45nT7ZHkNoDRUxJ3BDpo1oqHEFCdrsSaWYj",
  "key4": "54fEo1VRjM96hQioE78EGaNDben84XNcQ8mB2v4nSYJeFF2g4v2MLp7VZehDANxvQKvvCRW3xCWStbnvWmHbsTTw",
  "key5": "2SAc114LsYijGAZduSzc7x2usWmzABk6bNnyhci4AWHsHbYgrPEyaVzyNaJes5J66dccDqhZix8gxNt5xLxvPwtr",
  "key6": "NdeAStdjgxJ91N8QXhcgvwdJiVtiQGrAXkeNwexaG1ggoAKkHPcWmhsGHvw4dRA8kJyRehvv86C1iQkLWHjYHZt",
  "key7": "3aHnZnDtidVHuDQioLewTRsi18dQkzv9zpHP2rRiNDAoDzamHjYQuZSQWzPQtgCig5RMjoZmpNYYokGX22skthsh",
  "key8": "3wbGGLidPvv6sUuSgSgBSEQx7pkttzU4CrF5Gj9RAKPGBdAULf7Dmp2t48WbZSrp9RAc8JqajxTojuHyd95yPMjK",
  "key9": "5RCKRPUa6W3Vifo8eaus1SYfFrudcBwiaKk2eBLcNtzWM3LPMYQqpg4XrTHXK2BQuyBNTMBZPCKM7eRuVs5MUe1j",
  "key10": "37qYQTvwo2TZWpsvq3Wv8eUvcPVkFnVkrGqmuGnRmA6bwnvZwLcCGUU1V9bJMXQU3WcdHfGvUXY8NUv7R1wBSxAv",
  "key11": "4PYN935VzpaqPcjXt7fb6yh4tcNzYDwAFbGP8hRo8NhX9a9RqtiANzYZEirbkKx7iueWh6RDtxmDpVeheKPk2LqN",
  "key12": "5kpSyNUf4utGJSCPx8XPkViDjn51KrW9PTAKw6YFgXPENyXaubxtgSiqFabAFiAHTc4gjGFzUyF3JNmKSbq1b1d3",
  "key13": "2Scmf17cgF4xxEdUu559a9nXoFTowUhc6UFEfmZ9jp9p7UmhXtEXgKjPWhkwyZU3UKV4BRHFiHZ8S59SzP82FouW",
  "key14": "5HtEvE3oNRWn7DmPL5GfyyrQibpBqP1KWycqu6rocvy6PAdkh4uvSNnVKpfDJpn649tFZzCDM3KN3ejdKd5qnEeJ",
  "key15": "2hfQF2Rq8Hkd7RxHH3RKL78JRApWWgfMVkkVf2MpFiDuc87vroJyA3KVajqsUqwny7ZcmNYRX8jV4ESXytiuTq2",
  "key16": "2D2ZyLpmoZwk7YwX6TruMPgyVCSaaPHyJbydvfzC3WmZ4EszQ8xKnmRjNzshjF7DUD4hhC1kHWHfgzNG6W9F12h9",
  "key17": "5ieQYYthZCpnpbHxVRVPgYpDHDCpHcVCVgqyj9joVYTu7cCR882PLaBQmSEdJFMZmFXoHi5n4pDfiyLrC9KrTvKD",
  "key18": "3JwWTn32ZCJAdvXJ9RyTaXKgyujtG1eHCeY29CQYW7mjCS7vaY42fsXRKGPkoZi8ZV1tYDoQraMBMpuaUG1ut7Vk",
  "key19": "2CHmuy5MEUqHdXkCWuEX3LAn7oqWo5NJDmMjzy2HvvLoPr2Uf1Yf4gmXB3uJbfTmVE3UUKuJcyd8KWuAFypNp4XZ",
  "key20": "3cMXFNrzxu3yJKj8LowWxtmz1mis6UsogrP1ZcGnT2Hh65UYFg2aXNtUAae9QSQedp35eQAZymXPNaE2QgoQzakD",
  "key21": "2qU8xadT5bzuoZdJn1BJNtZC3oauL4CWmnYYB24Bvh4HU1QigPAC3T4YZZtcb92aBr7NU4iL2GYjXUfSaBUiHxTh",
  "key22": "4HCbb3cz1kEdh91iBdFKzgvb9QCk6wHfJVh3YY8MkZi7tf2BWQMkjmfjPQDAKvj6oScCcDeuhBn14LspgdQEXEX1",
  "key23": "5TXztDKoNE4rBEuTmYn8m1DHGpjscxYsRyVtx89at9fbjmAoVeHGHFHFUg6cNvcirvjbr4HAUTw8xexn5xgvEj4Q",
  "key24": "55KnCLvJEYqPoNAiNh7c7R6dzPPux4RaADyjVCWuB6PyuYHCZQU3fHtdS2k5wTyuuhaP4ZoMEJ1u2gHij73SPvd1",
  "key25": "51EUu4HZautLtHfKurcGNDtq2bT1PQUzjx3qBkYmqo5SegMZvP3BNPemPr75RzVM3NdA1oYH9AABwgZiXoEtYtzp",
  "key26": "3peGJkVBkwcEEPTU6UwZYz22QBVKUCx13ws7wkn7yLBcQc5mAtG8Qy7AyGdDnCbsycmSKeM5x493PudY4pAcyy5T",
  "key27": "4jHXLbXGXJ4k9bU3RzKLnRrwfehLxg8MNw1aRoFffXQ5Aa2wJj1CJ3VAjp9g9SMuvnd2QuXzEfiaX8YuT4Cjs66F",
  "key28": "65WdS4mSH538gNibzuiigHs5U1oZ2C8unjmMcWi1n8RPZPTMDFDxsPNoh6T5FzjeLUqFP9hMn5Rt253RARV5kYot",
  "key29": "WaWLQyPCftXyvaLL84qGco1445j1xbAE22c4z4QfScmyRUjfjrw5Uwc919wZ6wrGTRgRaLF8ZSrXDvWYNJpEw88",
  "key30": "2GUF657rLpBUim1En1wKn7tQiJzTuEhHxnmGPqBCqpgqThUjJ8BEmSEnY635ELvi4ktuD9Csw5tQeBs4fAgigYsc",
  "key31": "4F9FBEieEftSMrMWbJ8TBiWXxvdGHs45dCrBNEENs6GvJefvSEMALmQxzNZRy8mG2L9zYTCCR4a6SoiPcUKScwfN",
  "key32": "21m1gw1ZPoZLjFMjz4cgF2jqSwnhTn6azVadGGt1xrJcdWuCFvBSgt8MZbdvTWbGDh5g2hXQorJ7xvDHwJpNdss4",
  "key33": "5r56zTzTcUTv7nVjuCgxmvfmaca6U7fQZV9RG7mzXQ9pScGwfiKVR19dS2gGLaKTVoKFPV4d4LY18xuDDSUpAMvw",
  "key34": "2WGvEDRxe6ewas6wzm9gR8V5vro6F6TKzTEpwBXJwSezgEPnCRD75MxBtwEdxkhPgB5puzRMiuLSwrhyRWDMizqT",
  "key35": "bKtZfw3GwPKRTKGz4DKhbb9XUd2ofcmX6fK3LbjWKAz7yB5Q4XF8cNzf36jNaMkL4DUP45At8oWwMTRUHNuPNZm",
  "key36": "4kZrSFdL9EUyNFxQ7RwRT6q1dF94LgQv51DmnT66quAk1iAPbmCMi2NDP1zeGRjTX8ePGRhPqropgWq3HiXtid3d",
  "key37": "3yB2bqe6Jv3N9QdJKuWSUHBMvJWW4yQzGG2EDM1UoQzyX2oK4Kbt8zJNEYhGnSDhNrC6cw1Ju32d7JD1umXcDHoh",
  "key38": "3jFH71cxrak2YtCodg6Vru1c5RnJ9K7phtjbmzpafxMYh98vjepMbLghianecxtVg58gB7qigDbXfBKfvxsdpGeP"
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
