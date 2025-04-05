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
    "2RRYgDQh3V8xDBrWvdyAgzdCfUULCWMxYzqMiBG2xNW6x1hmA6CY6NEWfSoLs8XnH1Z6CmeDpmweWhP9djdNVwFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8XRVepsX1u7ZE4hwQEPhVLBQCFag6h2SJMwuBomVskMsunqTEPoe79VxDyCnQeFQ6ZeQpJ8QA9FRx23irSLM7x",
  "key1": "45WgdYkGS2uuRdhBXFo9cb7djiBCdhhVrzPts1pEitqikSVtYXxgbFKUNmU1rd2zyi674RLHyyLThSffo7uuChEd",
  "key2": "57dU7xbRtFyqX2qhXUDfJLprKDKntD7aPNNmhSosPgznHoFVgiJjrdiw93HAi8yCd7omB3kpRikvBWavRqs59kDM",
  "key3": "eojPGikUefm4z4LA7L3C9dMK2vNyt1x4AxmRnqashY6BpTVMwqN29M4C6PBmqWhWm1ge9fpznuHgKgppkHGBLLg",
  "key4": "5GeRdYnNtAMLm2E5GDzn3RKv5E8G7YibnEMQsJdo8wRLcuxLEwHfJgarLxYgiHFxEPZBi2dgjkHqoEUJYanqMtAN",
  "key5": "4SyrwsCV1Ysygwj8YYdx1QMPg1vxki9ba5n22PBEuC6D5H6EBfuczoKRWT8XvbpggVKMUZabHwTQzMm2KWjjnYAC",
  "key6": "3YHzGYF5GedcgqMgGjrtvX9rWDrjYUbvwB8EbcxaXoXneJqArNMBguh6HjPFgTbrSzcJqirbr7tmpM5fPd6gNCfh",
  "key7": "4rv4UTGeRWoszQmxRDZyPnCCzgMdmUcaW8iKtWt95CtRBRMLL4VeHruFTrkpQFJnCW8EhUCn4DvoJnUXHCD6DB3G",
  "key8": "sppvCUNsufu77Xuu7tESp6q9MvtWcFXW4umgpN18aeXhQY8xm7pqFFmt681bPG3G5e8RW6Ycpu8FGz2TuLbMG6r",
  "key9": "avzBXJY16YupTndpwnVqsLkT1dMgkYVvHVXY18XteoYjBvDHeWv1uQVHwDchs55HtoifbdJUiYRJ7GKMwFzFkaY",
  "key10": "4RRCpE2rjgkfPoi3rcfCM7kgg5BRWfKyhHfJUY54BT8MhskdN26xgmqQhVURrYC5xcjA8DepUY7dFiTKiMquiXqo",
  "key11": "5J1hGy4ZQWJ2BsYJBszbTpiaKxnhDGWsK6jrCH3DEUpGAAzas24aavxKr9oPx71kyVr8EqeAMauTbHeSuy44W3T6",
  "key12": "3sCbD2mSTEp53Ne6qqfKm6Cp5Apdn4cybdrsahJ81uhqd8wBd4jDJk1RgtN6GG9vQQWFDKZh3EYg9LV8Wo9ctUyq",
  "key13": "4tMxNkpUiT3NszZTKPR2xN6z9YLozL6dQpF4f9XNfV1CbPkYSnti3hWG3qdFhdxzVT4L4CvQwLp27xoVyScxcxTL",
  "key14": "2qaLsrv4bWZbjXPqL44Y67zqPPTAxbNjVNpya1b7epNmEpJFYaQAaMdgbwCEMAdjCycWZQwmmAx3usUKA5Vy2EQE",
  "key15": "3T6ZWoQJYuqG8ZoLr6Zo9TiHVm9KwhpoVSC7DnC1Np5W1ys9wjAKbXdukNnUAZbo3ffmcqpgyfXApoM9wLp7sZTB",
  "key16": "a6TSfXxixrSLyZPpmuD6giGY8t8drmtDWts7hSJeZnZ89teCLXjUuCz42C3rxZ1jyREALYRiU2ghzof1bAM1T3T",
  "key17": "4Yt8jAzn1hLAZacYB9GrbsYr15vk3ys798c3RoCPuxdTpKCBtaz6GKTxsncMJorEVdVM4dQANs5aHFSAWpi3trMP",
  "key18": "5MK71pMHvDp2qsy2oNstKAySmGsNcDKaZPUhN6szHctqAbxbhqWvLPXiv3srFNTf3nsHxUTXmXb6pXjG6EUixpNX",
  "key19": "3afVX86ExCrSAiuStrYvUQL9nAQydvrQ32k4uR2j2QhpbK88sWfbYN9VTJzDHWFiozUkodowNNerJCR2XqWU1cNg",
  "key20": "41enf8xgKY7C3Qe3R5gcnSAtNuvxHkwbpxFtgooVKh27ioLZLwEN4RPsm6vuL1u9Ygd5aGb7WeTFXeUFNXXyHR5u",
  "key21": "pWxWEkfXSBpTQisq862R6cRte5PWRQXnewFrA9vUk4ucX1i966o28YeWX9azJh5kj9EFgr1QKfe3BiMVNPZEPRm",
  "key22": "37yfe5arwVixPo2nkLb3x24WcQdp5D4Ddre1yanoBeJYHYDH4ugCoMurBCFKB7RXdycGrJ3bBqCvo56QDQdMMZxM",
  "key23": "4REXZQqoGsAaKY4y4iFGyxqjdhXrzHNPHEZ2U8WsCwHp2gQMR8SbUJWoZTvqtUMKC512kQ2wJkrjGkWpuAv5QkHg",
  "key24": "JHTe7hNsi4xyYEgHmcqUyd2FUo6EL2GceRUusrmZFtYjxQaP48h4Bt8LggCyxiZiqqXpvt79FvzzYU3FFZ44L9t",
  "key25": "2c8qinVXQNCRrjZ6oYusF9SgB4CPZoRHLW7ZyfMatTgXzSSKwk7G4udy61GgvNjfQRwHe9bRtgNVTcQndgqhdkuZ",
  "key26": "54bShLqPJFVAfxZSZ3SQRLRMHmh3EdFAzFkiJMhCDXH5mX3ZaUS6mXvq4ndvmB9KpwVExREyvuRgZUCDnsBfkWgK",
  "key27": "2RrJfQHDEUQrE2YFtCvxMUEyZUFqfrhnk4f5QeYF66CXsHs364RFVMAr2Vm2caYFvzdXjjnwzTiZhXcJAwkpqThf",
  "key28": "4CcwxBY43VhenKXh7PneRy65d93VSHm8nboHussykuanUaXUA7hRzVz695J9qLASqC41seEAG61TdQHw1JJu5Lxk",
  "key29": "5WzXSAL2HNbYGY3t86hDL7a8rFA8mNJjDAWgrrueUanP78HBGRhnNAUYM2hryCn9eRcYPoTHtQzaCL3Le5FvKo3f",
  "key30": "2QSgX1qweuJEXNz6qWScf8KfuFjPczPXpAAMa8vm3uLMRAMVLvYCFWvcHoJWd1AvGoJB5Taj2ZXhacvYKKTLQ7du",
  "key31": "3n7Gt8M1pFCFgSwWPXZEVx4BBoz2roy1XRyM2vGzuL5iLKtPSf7nULFVQBsFHypudubohbxSiTVAf7Z5MvyJdTkN",
  "key32": "2sjS6gYA63B8GAFYe6qWYMRr6Cr66TeiLLoo4rDX2P7HcPkjiAq4WPot4N566SGEnH8BzbJ9hTefkjYyz2Cz2F1L",
  "key33": "jpjuaHyHp4PLrnnsT2Dxobi1F7jvDTSGVX8e5XSFY3s1Bx2s5onJo67sp34uowSRKbDxGDBbrgvCCm7DEMA2vZu",
  "key34": "37FbGh36JDesXdU44uPQJJAYytDYEcngpwf4TqWiimMc9ZyD2C2zkushFtyJiWEgRjLBsZb5yo5A9zv3g3yGMwif"
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
