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
    "2xqqRs4WELFxR6C8FbTjZk6pDuJ68Q9mhHQozFSgMdB5HKC2VSFejbQbdqasW4CC5wZmFRGrzUSzjtQvX4kwFu1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsRb8vtVxRq5VKdnKwJVLTmYtGzAZwmGsX4NVvTj2Kv3RYyQf5msge41YKRuM5yyY7WgaDwoXwS4SPEby9H4hJz",
  "key1": "4gKGz6kDx6DwnfULpYZD5sUYEeyS9q7jEVtKEo8ifxbLeZYZh8wYy3BgyLjmvGoNZADoFJ1Ydc1R9kL2ux34FBuU",
  "key2": "P5FSTJNaKwAMzdoQppVmQ3mRRNQa3YeSK3CWcRzMfXWicX6u3GQ81ott5X429zonuKEfKvXwi4viJKwzytXU7AK",
  "key3": "5az1UU9J215Hdqa5w51FrzxqapdZXe2up7bTE2nKznJkGRkbRbqRh7CZ8yk8jhNTcmTPqPiEU9Nmzx36EThwKaha",
  "key4": "4BxMo5QEXPtQ39UWkTuLHqTZdGRpQDBSpjjEALe4kTxVVadzcpoHELA25P4uRF5NCHciwvQ4sPtfF3kGbFd1WSQc",
  "key5": "5BMocmSPqP1zhFTQca8mvP9EEwYA5WSjVZFj25hEPaAiWaHZfxemYXQfBAtcoCCEVGjfpMTuXq1KsRQRN2Hztyz1",
  "key6": "4H8UrzrzWNJ4cg2pmALayiX7AkkoX76uCoBULzuUe2junWN4GJgj4Yd63V3e1ZHWzcHBkCajyLdWYRepxFbBVTNs",
  "key7": "2KsEHUhJHv3dwTbfpysNDKrKEvCyJvTnXFkfJ94QSmhun635qZJGLXBVXCmmGPf1zMg99urLdrBvXK7r3Pb9VZrp",
  "key8": "4cLDZhjfmDwxmQmcybTTNxXm2acYk1XWvbWXnzJTLtkUzu4XPQjFLFjiydPijzHVuR6B3rcZ6EE15g1NVJ7tL3AX",
  "key9": "4KKWUqsSGecxWzcnfYawkRtTjUgEr7GKuc6nUcQ5Q3nihFsKsv6WuJULD8M1gBRqsrpYCrJiYJq5Fm3aXZP754gC",
  "key10": "W25U9EaegayAw8KFNSRjRb8SLb3L8o53s3sxTiFrEVPgW9vjHuwciaTnyWiQipKykbXQph7Xz69Qmug1K4enUok",
  "key11": "435jcVqQnbC66Hs8fxQUtuXib2TRYgYbTYSSrVv8X55oiCHZPQs8JvyC7KmhCYftLZsYQBjQoT42wZ8FNXJ3GpVQ",
  "key12": "5gvVKfuTwWNxmbaYejDZaKaBxJgSmXCPYif6Y99Z6Hp3pEBEq5SxjASp5u7hXhzemMSSmE38a1heG7QYpr3p3xrB",
  "key13": "UxPrQPvTbXW9WxmsZFQunECi9jRxWQSFTWiieiYrUqBvAtkKGGkzyt5bHtNSBDs9LC16Vas5QDWnsLcaHzANY9G",
  "key14": "4VyNFK6dfVTS65NpNGDaR8bcYTi3q1TvwDw547FU6CEPkBzRNJn54Cj1SoUq2hwn76fHPDpu1weoVGokWoEgWXm6",
  "key15": "5Dr65ziXwyAML2UM2PHs857m495tQaxpXM8M1XUzPi9M2WpV2yZsPSSoDpfivJLcgDCkKTzAfsC72eu4Ceyt4zwW",
  "key16": "5o8ZhkMyEU1NDmSTZFZxPecSJs6PzSzZz1UnozfhDKN1Smc4eUyPuz99kHe6UsEZaaeC9XrGoPuaYnFJJy637fzm",
  "key17": "H6prAWvU5LCFJ7ivM9jNGHRxTxt6YH8rBpECC9UQY8cRZmHnu7MBiqD2EZKLL5G43DnkF4GuDswwXkxwd3erSe5",
  "key18": "3opmRmBJTApG7z8MaQCa8Bf7ZHRYmxbaACuuhgfTGbGjJLkCk2F2uieVVT3SaYRT4WjDpQr5nrRH2wcCZJZ6odpd",
  "key19": "4Qu9FEw9Ao4kSg4M8oPCjBEoEMkkhMX4GTMqNmJMYmC1qejUYHLyzaanZyh6DGb86dpYPQLMWWjTL1n6f5Za8qXo",
  "key20": "24h64yMEr1eHEssLXSPmMD4VztZfrviWtbUANhQHYvAqDcgdQfAgvDzPCe9d64mPXxzfjXiM3SbDeqVHccMKQHvM",
  "key21": "3knt1fp9HGvHDQ8SBg73sTbNa2Nenr5wX69atkGkXbEdW9gy37LRS3gbbEuu48ma5Mgg2HackhUhG2sPa8rn7Luk",
  "key22": "2uMSAhsxTMmR4141wS3mNjzXjp7wzBSzBx3MTVwvTY5uFnxzhfsjr4HVjPBQoDQw986PJRx93WQzVx7Dk5XCzAEd",
  "key23": "37ryfrdYb8HeXa5T2cg3W5iSsJqJy3DjTfMrGCCX58ZegtmG3r1Toh1paQbq2bKfEo2CYzsMbmASfvRsLSYzahyJ",
  "key24": "4Fx2dtcxJnQPhxR7LTdARDXcLES5mSywvkYm7zJYE7AV2aMNXRmEY4iUZTtknysWeF5ALLZoPA3HRgU34Sjq5J6E",
  "key25": "UwzwKMEPEqqr2c9bz8TYMzP5xFYEAsYitVbTKzxrQLDofdZELuwQVo8gnS5A76zizuo6gMbM87qiELYLKrvZUqY",
  "key26": "3SZdX5XJwdMaYoF5beGg22QKbk4SNRciJQYn1GUpiE1wRGH6e9GSVXrRKuyCZcFjf4i8gsWhcGa1eRc861af37QC",
  "key27": "2yVocGtuYvV883TY3mxzg24xDyGFnp9ePNs7RAP12ZeUCYFPh3i9NDgAbqtJScyRg8WC9ZFQsWSCRLgr64Y1cZsE",
  "key28": "J2LDn5LTFkNBrktVADKwgjNeWyVusUddCxFDgEDiQyVeHaszfJumgrhtk2FbfHrofuHecs4J4mwBDebuXsnL6k5",
  "key29": "LS1YjdoqyTS56AcLz1t1zXqEcPzNew1EQD2Wn4oag5aE9YWEQyPpZVRiYguFXw4waMR3vaXeXyf6BbcxhhbM1jY",
  "key30": "5RdrrL1Stf98strwnZ85TJiCos9biauPVvFe1Zi8L1yRhsy8xeHJDudEo782wsBBCXzFDTZuwUxSnEYeWoVbdpsU",
  "key31": "3XTgJcebhsZAFNA3Q8SmxMjhLMu6SvsnEfz9Mbjmq1LEraangDxenUdw2umpnK6a2JaH47yR5KSCM9M5X1cB3bF6",
  "key32": "5CHQ4GaUiUw2feRhvL8xeiXvYr4f2WzjYX3xdomHECrk1xHTQymWGoBvMjvMciPrDLEZAbw5AFahfmXtETHXo1za",
  "key33": "2Mqjq2ddayYw6C5ihmnEPG1ytzjsAJQaicJFoZ89y6PVsKaWbyJXdaSGpXqM3dGxb9vJCoQ9yCu9aoMJAiQ5QHrG",
  "key34": "3Dzad7Ub1zfLrjSJgj6pwE88zywz9C1C2dZT97Rwm3bFpzKQuPDYfZiQMx3qhm8ux21UN2r1S8Y8ouTeF1d2EA8f",
  "key35": "2ehtd7Mk4XQA9F7XLCcHzd1srUwDwt4MSD9ZRpKZxdHgYTiqPzyfRvFzWCdZ8NJoE7wLk2e3CF5SSXp3oR5uusRL",
  "key36": "4HktZDaPutAZT9yeQqAeAAc5mmKZD3RySt4nWZ5bbmLJcPsNh9X4C2P1rv3GZLTP8UzXFzczjK1dZA1JoKM7dZQa",
  "key37": "Ssno6wvvAZbC2dh3GFJwn9BViP6cJUNMjGGUw4TqdE1DJhJiAXtRSfQ7q9mAHN1CMBWdg9K3QQWK2utM2wjXgjz",
  "key38": "65ntBi8b26pfv1J6jQLWP4kjXJjSMmRpKu91af6oFFe4H16tcVCkM8RvspsidbdugRoMbtFj7UpEWgiU2Wr8NFwq",
  "key39": "AY3Kx3eHxmw7qrP2MLBpfoLLdwFYQPgbu5PQZzUkiygAoWWtGHGvTnFbE3dJbFpo79SkiX9tXqbuPFkNw5szshr",
  "key40": "39kfmN7ToNqUBjJkxjBfsPwQEg25RrR34NenNBGC3UneHEbi8VQFHdMicBvx9mzYHgdDwTbfphpC1FEsNrqtm5X8",
  "key41": "kic1Bu1EMaeidy8CQfNQQpFnm5q4QF2zqHSPGjzGdXGj4gGLKLf2LadrDn4Ds5Jyp64WvSrmn7vH9ZUPU4cygoo",
  "key42": "25UQxWZLqSkZCM8JfUEArTuWEgEwGzTXVRSPk2A1BdSpXxKMtBXF4A6zwsHggvwa1vwvBJma21QjQbZjAMY7zcRA",
  "key43": "5ZfsUy2GXqdvVcvRqKjm6d64hEdJfczT1c7sYfXmq1i5tApkiH6iiCNKy8u7AJrL1rAgbqEjqCoqTwZVxXpP2fn",
  "key44": "3pXGteapZErxfBcVMpy3c2cK2ATh5ZdPQinGNR6eACJKsovKwonn8Hw6wUArLX5WRwAh49EWv6Jq6Do7L7f84pra"
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
