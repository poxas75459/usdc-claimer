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
    "3RLTiCdajBhf7JRri3n4WXpX3HETHdvVjCyLi2o99niXGndSmCUF9Pc4LB7AWJcjwAKJWrvEY7dBMPy6LxiXLCSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkSvdGU5rYRQSAT4PjmXEncfNBJJrs2KXFFFPTWAMjDEwWRHGVMPMPiQRRJU5TqPQT8Lfxb2JUy8B4Qg9F28Qm2",
  "key1": "2FkzXSkznNwddDsnxVR6CTrhREfVYBXACY7nJjxvFPGJGQgwemWFJ7DDKvmpfFyb6ErdrJpdUB7skA229n5x4Cdm",
  "key2": "4EfHQPyTWSxjPPjx4AQ1NLY6KoKo6SV8ZYtmz36YbyZp5cSCBvke61Bo2uTKgboZjYbs5Pi3YgebFUxTWsYHWBj8",
  "key3": "5WwjykAPBEyFjtN6upBGgMztDwjzkXGq2iMKpZMVnWcNB5Aze6jXgUMM2azYKeMivwnXdNZwsxmjLrnvZuzph8nm",
  "key4": "5xqwQieyYB6Km6GiEXmhQjg4WZPKCLUe3SkQnECudsCKp4iquV7qieuFc8bTYjZFfrT74M6BT3iSJqNNARWSCtgy",
  "key5": "5RZzrwP1oD85vChjPLoa17oMaBpoyhYpgYdDR9wGqcdUKBQgphFMkA5kvxFa8KLYQVUpgMVJ3D2Qqbb9S91Yo9As",
  "key6": "2tRbGd9dq2L53Yfak24TSV5L5XMX4k5G4zV9BgUewFDTezcgFFqTpFoguCtQw7U7N4UxXyCsUbRRmePmapcgo7iy",
  "key7": "3jnZ7XVdq9eLFfBevhA8MbQAvogwxiW8jEtU2LG4gkGNeKJzPcFFDsNtKcsf5KfmWuchVqW5bV8VVhLTMbzzyVn2",
  "key8": "4xMySY6EkboWc8WjR6xmK6Cbe5V43Aqe549TD7vVMJH1z3AA5Q9F8sJJaM69srm2ZbRhD3SV1MneDRvFeCCnFGH4",
  "key9": "2sVz6YESWV8TGtAxoocPXL7STkqEjRKPwTGHgGMjZM9EDcZcwUanGwsSCVR5WPrjE2Z6qX5QPg9kS3i4iEQ7y7VF",
  "key10": "5fSSzePnUh3VTqY4zjcM2fJGs31pWzsbYvCm5XRSXvUecU4cwBK496hhNL2Xi5DJDgB1PpaHkw1QRDrqVicSpA1J",
  "key11": "4a1Ppxg6o8G4UeMEZFbfB33DGo2w32g5cJcUh559QoWDvEpdTCDVKFtjo2knR1z6nsCxNi4Z66brd1m1Dr7Ukvmj",
  "key12": "2NWzhRdRyYvevyb5fYgHQJCHQ5LNNPSbjkWToZuE61TLUDvbSb3rEJM92MvPZDvyggkuwzfgH3xcBGuGSnxp2Wr2",
  "key13": "2cewgm5bzwUMCgyC7p7gDJuCjwhFiHKy6EzZd7GZbfgShr1rzFnFWobY8XmmYxv3ATYSHEH9UtLHM6CRJ2F7kNqr",
  "key14": "3vDwoCYBRowzNmQjHH3ufsPbYcJEQgUVj5FGSuyJP5Vpc7cRZgc2Qqb6WgGkXGUExHS9uBn2ZCSWJpNsXdgwH74v",
  "key15": "26nr5jMSMS8FtRNMxacdtZdxywLrjxyz7bBHrezRDxD6TN323FKkMw1xxa1CG5qCekChQLcrPqoqiS5RhMxkbFck",
  "key16": "3gNouHJFY1KxUvuc8k7EijFMb7AjGBdAyKUhykbaPVUj6yWUVYfqfrvoFRBDy4thZwgd4y9SSoieaegnG4k9GUGV",
  "key17": "2v5BdeZrdQY7wHUiKtSkQVfKv56RZLzZvQNogbcHeZXF1CG99RKJ3DiG7RVtc5FwEkM2GFHfoCAD6LHyoDsjTuGz",
  "key18": "5tNm3BQP8LFP3FgK2gQuG98VdnTPPvm7hMmW2TQJWthsh8fLpDiY26JknzXx2zvDEZCNtiem952phnWhSL1Fx7sk",
  "key19": "kxNa7htfCD94DQaHBB828xeU3UKSsgrWk1nmR7B1AfjM96NvcBVQYSTNHe1vEpQ5x7CR4WbGoEuD4VG8mpPMX9v",
  "key20": "a13ZpQ7LpEtDTp3DMjbLEDPoN4YQv7v7Km6AGmWZFEsgUN8Tkr3eJqgSTzeEYHrssFTgaEtFXxj8vGzoU4o7LJr",
  "key21": "5ZEMNJPTtb8UMUq9YKqDRRdvwVPQXqz8ZxrLWwkF1a2L2qD8vvwzqJmf8r2b8jA3NKA9ehSTyZMik3iUi26Xq1Xa",
  "key22": "5kMiZvYA9oc4qkmbAc2cmA9xmx2EdhJqwfpVS1EypRZ9L3KfdQvKJiyDRwU7XMSAKKRXCrgMfjxrv9DH4rL4WTKg",
  "key23": "Cu7FC8YZ3vSYuXcW16cFKoRQ7g6GrRCJMsyyCPVy5opG7gXfFpKdRgUo8fCfavFPULutibdJJKXRTLduGiZFgjr",
  "key24": "wTTwRMFEWL6WxfksvqyJMQBpbupXgJzHRnogtiJVyRcMZduuTihAVgn7nxbpe4gvVo6LwnBpsRtwtpfWmmzkEXo",
  "key25": "ZGRmgsZuk5QHBbcC3DbN9JMr5tTGBrwggQpEFNk4aqWBPC3ixeYEyJ9t1kqF1uzpMktzRFfTp8AAgqs8ZFmNSaR",
  "key26": "3SsBkTEo1yETAzt2o1CJcQcLjwP3QSYeiNE549pD634JQD8ADxP1PkLAmVkYtumnKd9kpdHAxADE2QBcUS6Sg9Cq",
  "key27": "2GcSUjYiXMVNnPXacrA1uqfffDGP3uv5Q12ZLHazDLDHhhDB4Khsi7BVuyEYzfSWUSnc7DFLFJSky9DpZHZDTnvy",
  "key28": "48StdDK5K6CGzys4v8sDsDxyrxqBjgebJW6NfKNSHXwVJJsUzpRs6pBdi4h4yLNQSroJNqZ59TkxvNHHskjyugy7",
  "key29": "2ruZTJGYwmTAC4umpPEkZqrYLMvrjN9FYMtYoMWuFgzReiJJfn2dQntJ31jE5QYjJhBLWFyMKKjoYcm3XikhTUDV",
  "key30": "PsHnX94Uzz13ahonh2rxRFBoWADre1fLNXmEBL5nN1MNawsG66t9r3pfhbGEdoQYdyLjoKtDXnMNZ5f62WDddPQ",
  "key31": "531N4MNBtNL6f6SDykDpXPwb43ngSLM79DqSZK5boM8EvDenG9vMY2wCFW6QKXqhPGQv7tqQg6JzW2UPFJXRfMBS",
  "key32": "HpkqfUv5uHC7moXFzNL47GC9DkXSuZzASBQeRmFbxB8THD1jSGstLiRtfpBoRqxtxC2c8seAW8GQLDoeGRZyBC4",
  "key33": "47wRjf4GAKRMVzMnzj2a843apo9aKVwr36HoCbC5sp7R99bfrPu5p9aq613Jkj52ZWffjTQmQMDzyiKuEFK1FbNS",
  "key34": "GvCb8doCDip6dmhBmSqVzwmyfiHNWh47BQFxp75Pn15HqjdGNNAi5m8gKBN9a3ETxFGnMnXHYtuaLa6sZAJfVkw",
  "key35": "3DVvfykgx39KaDjQNwK1tWvuAhoEJzr8DzjmLWrXx6KjoZd9TuKe7GrC1JV4TscV9xsa8VGUypj7KLVCW7crQAC5",
  "key36": "5nc4CwwPyifPxXVo2KwywSE3uRr3iA84TWk6qXcR1PGTBBmL8iLPKawdBc6eQw5s6419yjx5pt5qCkVb5a6vFkqU",
  "key37": "2exwyEiXtQmHhRDSBH8M4zJ6EG9gEordwYesLUtx4NRyUhd4ng5HQCdLkpgZvyFsbyeMC3iJoY2LePbfEZ2GuVCo",
  "key38": "17FRWb29HCJtwPRDXnWwGQh7VXA8fG9A3wkBuYKKL4yzEbEtVNKF9pYVCK7c5tue5LTBhGx6cYFC7zhuw33TCud",
  "key39": "4i5PXHgBdpg56BUUwzVnH3rnAeSoPNEJxAiTdpHKFyvpsBF6Eh1Bauf8XamRyfBdWM5rf7WpyvbJDSsauVNzYCTe",
  "key40": "S9tCc4S3bAjAaizLdUbBhgwGVxNe3eGAgH3avKYFpe598o33Eab9YLBqJa3Nn6mGopkcJ12iv7gKHikwFkrRgzJ",
  "key41": "3fKosWPCuMuxKUTpMWiZRJgfC8Djj81Z5oY7M7573VHQpNVrhdxmfmpRBQfAb9xwm4vSDLjK3BRYv9Fw4JKdp9my",
  "key42": "4x2KALSVmcK7b8sMR5D2D5cYqjfCzdF6K5PUaBZCudiwT4Bf6kwWBUTazMx7ieh36Xt7fSZ2gVRbD7sqShCh3gFG",
  "key43": "2hJeN8ESREQLLM2iAYMZeDtDmfogMMNMokk2QFb4jvq2kmb2NMVHfBvVjkMAJ8gdUzbXYNGWCyNSXBP7tvBzb4xx",
  "key44": "29N7f2PXwgN7CpW6YUYfJFpahzczJzyWp3EQ7WMtGgzaMsPEkCKwehF3zgV2Ap4Kqt7f5goAYyK5AEEamGhPumZr",
  "key45": "4sfpc7GZQbLiZVjdsqPJCLLEEqV8eXHXiV1jCy84FxTP6CcvaPYFfw4ckCxy5ATmpFFsGjXibEeYVPGwNow7bGzM"
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
