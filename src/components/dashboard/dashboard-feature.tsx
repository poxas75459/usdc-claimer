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
    "LTq9gL2TjEFaEGqCzREQzEynh8s3kYTsCKFXxPubT55eSFwGjMoHrntYPhff8wcTEvzsnMZLyYdKtk8t1pgVGcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QDyvLdq9SNWTYcu5VbDw4FddKNJQQP7VXJKk4hetrdnALtvLGtgXTBaxUYm3UZnELJdCodgnkmPPj1xA1Mqd72X",
  "key1": "4BuVcpmPJjusMTHeyjrJaoDL1Ut1jZaFxwsGrGVhPTUJbTLegEqRyFKy5GCvrgdGybLaZTMd14ZN1RkAjBfV3p7g",
  "key2": "Kbc6fkpDm1Y9sfJ2aVCGWSy63Bf7924ckbDX4aXBNPLXbyESpNkPpDJaFPb4b5gV1oAhWBsp7GfqfLLZQYfJ7GD",
  "key3": "8JPNhTbZGXefU34voYUggk4yvx5ZV1Egn46dTtNKmaXjSZE2VLTsHoFDbiux3LWqKxrcJzWnQ5U14pKtRfxNqVE",
  "key4": "67q8xjo8fkhBaMPjYWBApLQSJgWz11y3M95oKCNQEWDsyLpvYLFYHbhMyd9wajqcD6ioVrtXKLMfCBroxHZPpPrM",
  "key5": "5YWTtW7fRuPc9zr9YzmvSTndJJHJEmnuBKSTxz6Ba1nw8L3zLWo45KiLv8d76HnYqSsh8dvMzcJncVwLMHNs5THH",
  "key6": "37GA7UiBJC3nH7R7d47wg4pnJFNpWMrpehsYnRd3dSSbzEPG5qNGA6zKHyP7N7tvzzvuC7VYcEssT4HQgZFNcBzW",
  "key7": "go6vsk6PJCSPHgydFUieuXEvwhBfj5wkVgESBuhYjjnNSLDPZq2YJUdstehBTQE13QjfR8LSbkW1dUg8BCXHEoJ",
  "key8": "zD4YE7etLrmsBrGUFF9wRSDg4sfWSykELeiBBjCw31UXkYCcT1FSixPDHVMM7tjtzxjwzN9Sae9g5FGUmicnj3m",
  "key9": "5CwuJGuEMDLqPAi3nQ1SKT9kbroZ3sSf4EKMhRRChRiDJCc7WSM8bvnNozBMDiw6Nf4hEhKqVnLRr51zRVM5rYkE",
  "key10": "CoatzLxx7fRYK89LZTR7bEbMfzdEtKtEhrfMdHrxAMN77P62SenuYdW8kFsvPXYPaTYKYo8KeVxh2ya1uESpNGp",
  "key11": "448qqcnKkL7riNQfSUnng7yXxpXkzndfyJ9AnXpxPoePRYHnWk4fnRypaaoVxNRf8rWfwSCGqZsqVPVhb5hBznnK",
  "key12": "53BrX2ehTKXXnY6BhHeo8CcKZav74PLeWhwm7RQtqU73Hf2aXBAGLEjrVTp5nMPUozkCBsykAL1UL1GKfgGtcrCe",
  "key13": "2hkThNZMRQJouEb9729xYCEM1X5r7xAfPatvdpu88ELPu9t6ua58HEaudj3ycwwaQHJALAizKdSCPk5F3BHHtwwx",
  "key14": "3hRMs4ruta6o3Y3dvoFCwa1nMy1tCrC6jugwFnKUM6bMd55SdbiSy7s6a27bfkyffLNJzteYMZMz3MdqbW4cApXU",
  "key15": "4Uii95fPvYUHt1APMspRivUbFZCSWy39zrPvFgvmwxuQXhnWjMfDzp9bYwpepLwazXMixx5ExFeqG1yLck7xHNJW",
  "key16": "G5baKvqzgkARk54xkR612LE6FV8xJH2r3feuxg5ByAStfWj1pAJbCt9KzMXZYG3okUVNsCGsdppaZSptVAFFcYU",
  "key17": "31TAd4mCdjTG8ireDX2ZUNkp7dUWjAihj33BWRUdDN2ZxP3KNCHPqa2hBLWxrbP8hgBcmiFyiEwWCDU5iDX4Uoqu",
  "key18": "26F2bZp51soaMZaZUu9RvRbvSyhQjAQqLgbgB2XzwKEAuRbe8B4Cty2KMNBrqR5eyhJZpZdej8Z5gnYnK1WZptqb",
  "key19": "4LNN92nxqjwtn5jFr7uhpVcR5YZYxxjx65CGXay4T2R77UXrAc721zDyPvvDWBLpCpGj6rMSmPWwJ37fVnWX2Tgv",
  "key20": "ENsHCD4H9K9evaJDXyJXju3Gd6QuSDtVrgEGPRaZTFS377nubqE17mGLHRzk76K5Jx77rgmrSuXRU5NNHyRebYd",
  "key21": "4tuQCtNqbxFqgoq7fT6y4MCpUt256hNKhNjGAV88gUJgjhdYGjrFHg5zFcGMmEDD21Hf7HxcyLjJ4MVindr3XUrU",
  "key22": "5maG5b9FakQowf5PwRiBiGFKriaEjAZwMxPHoi394ga8piUhMoGViYbxdEP81E9uedPWfWez1ydNA3Ybeeyke9rF",
  "key23": "3pVQMKqunKUMXjGmn3qBhmv4F6FupJBjMcmbekxg6Y7geBv4eXFxdAju3BQ1kMSANijV3fdr9Qp2uq573a2xGxfn",
  "key24": "S4s8y9LiUgPpXMbYTm15Ff526y7rciXVgcMFTdoVm99MiV91T9tucDBTv6pvmMhsaQ7SKiZmFXZY8YcFN16EXQ9",
  "key25": "3C7VgaauT4ZJWGa2Heq7Pqw4AQvJ7F9g8NLXNgMwCBus41bqPtKdVti3g8LJjft8a2ZvFCfmqjcxqvLVGhbv37w6",
  "key26": "2gEPsB82TM4ByvwcUhg78ZkLYUaMwCE6Z7cWNjt9ymmfaa7iudeJYkLn8bwY5scaFhm5SkFnKKpTKsyXygvQm2mu",
  "key27": "m8qEyhxBX8e7ShRBZz5pGXYfDLczDPZmK1TTvpuTG4u87zpgE7F4YxrYo6pLoy1GAeKb6W7iSXdYwqPVe7FCYX1",
  "key28": "41NRMcJ3MExdeTKo5ULMZ3eB9HHn6ysra5DWCVtAPYKbumQFiS9LLihgWmLvbSvdPek26tNyZrrqH4WHrTgWwjYH",
  "key29": "3whbTmd9E2vG6vuZQBC2czoSr98KWuUp9cz2AXTmGYmDxT5dyiqF3VK6VS7sfHXuWKF1p42HRLsguo5CBvrYemBh",
  "key30": "2cG8iqzwoSgmi9P7REj7ZsxFBoERWw2ikjTQLoPBzgANRxhj6dWaw1m8WJ8axgT72HngV1x2weKCxGSCVCBGLjkP",
  "key31": "tz3hJsMXcU6SJV4AM2wR8sjeD2zPZUHDjhH8hRHeRZUPjSE3YQny8XgqGukgMUARUMGLc535cAVuNXqMzgQuxkB",
  "key32": "a6PcoesygJYH5M5SaJzvFnSsZ5V4A4ztbxEd4w9YoZtYUdNcjt7bHVeFMJ5W4RM9A7GrVct3EPJyi2ndTHFBZ56",
  "key33": "5qBv2e2ZTcSiz2Ayg7dbxb1iDWmhPcoWv58DRk2PcmKT32jqaMspnemN1iQYMhRxYrgqgJKmQBizEU73Kjeix5qr",
  "key34": "vvM4DQRTGNs3ZThXp2iXXCAvX2CcfXNE1N8N21SfvWJQnk1LAjoFzSt84uPHobwXzpg5putfJsqDqzirNmxc5gJ",
  "key35": "3pMJZrqyqHyjG4CgP5JevvG7LvhVVD1bEQUja2nD3fp5uYXcgArhGhyhJpCoTL9fMe3njp6Ho4MvfReDry4Yy5rq",
  "key36": "ZDoNnUY7Q8XkEGNf8zRKserL8h3bSGp3XoNiTLT1ETnbhAWgzJzmC7NzbsjdZudnCrZ8BSAtfTXWPnb5ipxkUHt",
  "key37": "5MycNnTZBzupCgXmG9mtkrMBEUCQmnNJngqfnEoKNyWv6Xmuhq99jeSq5Z7ucUK7bcJtBCKBiMQTbrR27wTHN1JW",
  "key38": "2S6N4vdq2qGVAm6wUCvh8xGLfFj2NEgED3BzVMMe6W8RGck9hyEwsgXDU7QP9hjob5VRCZDGP1r7HWp2horViETU",
  "key39": "3KPcq9vHbH6CfbbbvYHvfs2quDYnJQjTco2mH6DFWXQf6worwusN5TcUiSEQbZkAyKyuWotqG78dcsiowBn4daRy",
  "key40": "4RzayzNr39zg6QeZy3eCMXr1bTuPn5g1QA4M43G4bQwWaFgfxbT4nrwBkG1dMCQ4B6T2gtoupNCC5rUCrF7scTDV",
  "key41": "2TnqCJdWYixHjUDvZrV7BAFdy5LqeReD1khxRRze5cB3XuqamjAMZT3VXsYesaBRgHKMJpBf4V3QUgcUFYqnEhdg",
  "key42": "4BfCjRHGixnZsxbPT638rYXvJ27Gso44cWY24Mrh3K3BdkbscNJj1SQLznCgd5VLK3kKWfJFn86ywigjvUSWMjVw",
  "key43": "4rgNPckUWKaXT3Mr8ZrNvJaVz6ru4zwJADo5BLYcoKGCmqtTZxH1eoiX8gr2W85wERd8nqEp4u1Veo8NoX9D3ZwG",
  "key44": "5UhLyGiQ2jPvJ6p3P3k7bmsrrpEVsyFDJxavGxfWGpSaARbL7mdqBGE1Pj4GZNSJX3tSmVt5NxUsyJPJ553fR2V2",
  "key45": "4jhpM4iaZYTxc89W2ewjBzhPM4iqscSLeFhTveQq2WhaDpKFZKhqzCTP3czGDTw8gTcFyNoAn51V61pvdaqmTUKj",
  "key46": "5WmXR1PWhuvccSrbmFe6KXV8oNG4fEyEEtDAKRZofPdQghjX8gEAW375QvHXBSutAb68qjFtqbVUMfrZHQfCmp2j",
  "key47": "7wYLimJG3uJbnc56xo5ouGMXatthXgCcMT4eWKexTtBuhugW7QxrrThpTrfpKDFxcspMDGb4YV6X9R2h3RtSz2m",
  "key48": "3VcX8WyN5Y5CYBqtB6yNBvztVBWySFvuo1AjVCWVQcwN8MzyB2PvmAG9iL2XT7K1kRmvqGoQm6Pfi6vsCa8BQY3U",
  "key49": "3ARyGjRWUn1motLrP3jsdk7BmTYgzYwMEVPmQS1uq5NiUinKzUcwGR9DgB3LP61qiXCVz3hHH4w9HC5KcnM3dgoP"
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
