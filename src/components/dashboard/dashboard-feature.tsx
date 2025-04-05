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
    "2qhqVWZockQ4gAf2mwhd9yDPyTk6v5As3RUb6ZbDfXCB2ayfr416pLZEWQJVNWCMKMQ4DpeAkLuswCm2PhWFWC52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pv5u53qhtq8wNDg3UvmjHRPmVWJy55fNvG2myGTWZ8KFJQW24Ej9JLKDbgwkePhCcntteFsmdiDu39VKDmsgizQ",
  "key1": "5LFu9GPyyrrySjWkKV3Rz7y7sFf4go4X7aM1ih9LHMq86S9pwcMaoRcCjUvZNmTvn1fvGcBSCphPtz1659EBcKwW",
  "key2": "3ybuZy3DoHouh3YJsaLwu4gmc4cC898oqLn6tiTiZ5gyTRJdgzuCRPzPBWbqWvb9am5PHwQ3NzRWDJEiaioSpncn",
  "key3": "3PRJR2eCePqfdw6q8bWL76cqokFiHTb2oo1LeS4jUYScGmnt3292Fk38bW15Zz7CUSjDhxFfVSJWYDCa4MwnxBSV",
  "key4": "Tn25EDJi7hyMWDpsgwTHdRuLa7LHNx1ah8fvU9uB5j9ChvdrUFs2K9nBWR4PBAePspHsUu8EXXfkEDx1KnwSW7M",
  "key5": "3PBkuMo11HAMVwfMdQFYZXoKmrYjbcA57NEnu2yjGw8jt2mhd3q3Qsw9MNpHkBPJxw2ySciGGg3QeuiLg1RZMY7v",
  "key6": "5r6qvBvzofTeci8ufc9Z4vnkcSjYBzvjrUspGjzTRTKFcNEnG3PK4KRfvpxLztaTTwi9N4C5mtp36aX7GD1xyk8X",
  "key7": "LpeBeh5YvEekp5GGxJ33X8fQBPy58bA96cewSarfKhH3XZkRkbcukoLvv21z8tWLs8w27nyUGyrrP7Y6ypVXafK",
  "key8": "52iV7kAKb6etoEKstD4t7Ruc7iEoxESCSpdswFcL9qbyQSBWa6gT1QZCjim9oRWWUSU8Sihahr4Z1ybESjsq69rK",
  "key9": "2N2X7KMHDXu8GXGoe7dcNeoo1FtbH256kG9bGVcLjuRwJtqA6wHHT6cnjZorY7humYp3FK7dYKSLscZfu7wmmKu",
  "key10": "5i2aqkvUdbL3u6GLyFtFnsVu4CwcSmUiNeJDDz5ZfEq5kAMboGwvZfSS5hWK8YwWWVZqob9KAFz6rWEGHpPYwAVu",
  "key11": "5WVfED3d7utTQ39XQY4fBQzB18yXyf3VJLjSucqSWAczBDXj25KM4HSvBRXnBPGma9oB9nj2A1p1w56pr7B3g6Qb",
  "key12": "53knZgFeTwi4oW7iML6yVZz6WuCwk7bc6y5FJ4J7HB4482Up4UwKMNEnb5Ukb5DvLEAsp5w9j381JWtTmc78LRXC",
  "key13": "4PKbXW3JmFEEm76rKzD2WMFozCndZgh89Q5gZX2532AG1FJern2RCaRca2JXyr3r4wwpGkp7CMZAw7WuYd4P9jMy",
  "key14": "2cnBAc28kALCCGAuDtR3D5rAZKtFJRhWrgSwt53QE2hoVi8XgF5EnhhWZwKRquMTRMPn1aY4kBCWMnSCNQkWHq2w",
  "key15": "i4JrfUea3RruCgR5KPLc3McMzF4ceNKceZYSr6MwVbNcYj7MvQehnXu2hs6NanQu2EiZEbRCz8fD8RPGedoKHMf",
  "key16": "3nuJ2VyJX3sHapVk83bbRG9cPQg1fWoo5Zz1DDjqSf6tkhwFbynGkfRPuCFQdyM5SXMXpiu3jRkerviAMF7cPQgV",
  "key17": "2kGwceaNFPKBenMd6ENFnyzys8Vfmux7jpbyzhMJY6PAycgLeq1URxhTgu76ZSqZZWL2q4vm6zDwwERdVxiNjcoF",
  "key18": "5zqJz7R55GSEL9mtLXAgYBqECGqrFvGa9zo5wPMVG8mnURPhMC63YzHtYfi5U5feN4epDFxuxBeHC7aF3gXtXtap",
  "key19": "283A2hEf1kYLbRa3aTHrbDcekAjNfoRUcKPBHMkfw4CpJ3ujdkhoCig397fK1ePX4R3Ye5ujxbcRNCTw6JXNDRVA",
  "key20": "51M9goJ5zhgWo6twYtusaiSZdbjSYVLLmJHtS4cueUHVYtuv9C5TN7sptJoyu2KXPYG2nZiLN49ySYwsNJRp1zrS",
  "key21": "4VFxeXhNT1pyqExhRnzPfegGs7wrzYo9DFofmiB9ua49mXDFCe3KCCXTMp2Wwe3rWuHLWPETdUxaYPoVT4b4KEma",
  "key22": "3xwb1JSxLwbhDQVum59URpCGKQm2RF3je9TxNmK6w5gYfVnkDqaUVQxtmXAFySm16QTSRUCtR56sxR2KrUsSTQTQ",
  "key23": "2HwQGuseBkeh1zQFdgBXHbWpxoTRhTS5s7yrVwCRjtEQGXsVTHCFMv579jr349aqFBqZsriX1PPf6dvQ9u1x4b69",
  "key24": "4nf7ULpg7stui9FFKAZjRrY2tCFzprnpL7HsJwZmzb9dpgghCrRwNqJqNRxCh21SeVMjvTQN8UwC28ReHAkiquHd",
  "key25": "5pHjYTFMB2HztZAms75tQiia7DvQ7SipLJhLY86QDzx1uPbaf41dUQEXJUkq69wWfxRK4JzAzv5QikjPuFXPkWy6",
  "key26": "4F3bY5ZrZ3t5zLwJFNxZsKiXx2AjCbxkzGWyvdp9KCordndKBSQPDfCdLTzTZeLVvD22fDAJiKKC3XMRgoHnKxJR",
  "key27": "5s7L51mHhT19Lr1x5B89XcyL6pRy9CnKheRLAWMS2cEkKgQ38EmqNducWXha9XBcnTaFTGqwhoA7QbwLW9u1ct8y",
  "key28": "myWJYUYwKPxBAC3t1xFKx7o8EEkCBU5rabZ8UxCFHLjYwW247tSUJhkEhzC8gzTCBzz4WVmNU1SbZScqkP2UazB",
  "key29": "24y6zg69C5Ry6Eokzu7aJyRoF4FyYQGxbkyAhCXZiXaT5jVDNGyriJCCUHGqMw1y5UpFVu35MDjaAFtVwqxCyhqR",
  "key30": "5G99Nw5SFY2CdioZBSp4H8Mnmk2hBHAWQ9F93nwEJbXqH65Xyf2efWm2du8E3CRu7Eo5GTvHcHbEdU77UnPsftae",
  "key31": "42AisyGDsDPeVNejszRm5raCT2NjZUkg4f4U9CMF7cXDV3X2zWw6uMYQ6Bdad3gKqr4Swadcw4jyPbE6KmUrgcdc",
  "key32": "2LJCrTjzgEVd7FAALM2dkkwARZzS7UdJAnCSp9pKSnn8VVDGGLteKYEBY229iCbF2tGfuwbQN5QygkooT6qpwDbT",
  "key33": "4YpS3jpHAAsiuTFZd1gBpZj36a6xHvSrHR1UNwUwfT6wxCLCsghqZX6MNZ3Z1qzQpAqnf3RDYu733i59fKdGsoSG",
  "key34": "2Dx6WFYbR4CTG34rWgFBHJ3DoLMGCHBHNWJpxkNty8F1u8vrLuLzhmCxLBuAAkdqcvCiu7iRcQTR5cRFqGogigyF"
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
