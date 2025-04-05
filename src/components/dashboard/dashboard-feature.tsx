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
    "5vqHTdrc9qf9j6p3cDbSiqfRPRGRLfJdBo2tiXCW2GeCsDkvrowFBfAkP9J2z9Y5wetUKq7SoeKTHeJEnVhmGd85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGTecwy1sCq6FRSLNgBzMQPH6oAnBvH2r4vxwtf4tbQXBC7FYUc78iqNwU9s6xbBMByaRwXXMDC4xSzu9txKcnP",
  "key1": "54sZq1MCeo7cKcagroKrirhoB7ggh319pccvUFqowK7yAKc6Q8fqRo45fYw5dydcLEhT5FvLg4XVywx1e9rbKp1C",
  "key2": "4eKb2iryaBiGvvEmFcAZc73E3UB7KbRbomhSUdtghFBYjRysTjXe9Us6SPFrbB38CDZQYVSFMP52ow41ykpnjZ4V",
  "key3": "5Mg5jy2V5LX11Pc7wPn4omMCGAtp7q4FPayv3aJzpJtr9Yu2NjxWtv18uzYFccBFdzNZGGQUD85nmvCpQzwaXEuK",
  "key4": "653iPok95MSpJ5Bs2CzUW7DeRquxTAtD8Bttah8miB7s6wdrJ8qB5nfubS2ZPmXWotfDK6WCak2Q6sZ9wMkwf5g7",
  "key5": "3nnLpkBVGiLWrHLPCGcghRjmF7ni1jRkxV2zLNYkaFHkvPwxXchBL8dU87Ktghnmiu3DZDQ1e1iF8c5dc1JNt1WB",
  "key6": "4nkkNtdWHMVMYWz96MYCcQKr8DqHr7TKcC6rcLVHD1Kz84QdZoB62KAg9WXaqrDAfhsxJpuiCpQcLeyC9GX7hUXf",
  "key7": "2tt8Qh3K88ziPxtYk98TbsFukhaUZa49GRHqYTC71GTPvpjdZq7KbCWj9Yxbdgzi2H4XywQxYqDTLYRV3KHwK5gP",
  "key8": "59VxaAAyyZNfBqY2d7LN4pixpGduX2hk1nHemn72q3Bat8WbtCegHHFvFunXguxxJyLfnQxm15i92MLTD7w4c2f3",
  "key9": "2hhXw65eP8pELiPzDd7fXkMpAUGMVW8MmtUCWsDJYAAPrhJHVnqqNLEiMRTMrz1SNXrAjrdajEBnVzz5axadjVb7",
  "key10": "32TXo7NBgBAXDgn5VBwbWYx83tDqcVTpo2n3tHAJ16BRbWsjGq1jb8KXXNf5qqAb4YgRfbwpekK36aydrtxjbNVF",
  "key11": "5a5FeznUahUduFTZDu7iqHQG4u2e8z9PQxJU12FMKw5C55pTMRfhmf3xaMuxTEsHu4jh9Ej1CmRW4sNYUW9cGLBc",
  "key12": "4VvgTDJ5N3UZLUKN6Z4rQCdNoek6ZbfB95K598vCT7pzwL7eLoT3N75UqK3zhSANSe9EEnKTGUUcP1aaJC7vYYku",
  "key13": "2jSvxNcm9GD2EdoymrDJXqzAEdaghFDuwFLkbcGy5zFLydqDdwXzU7xxczPrwTCAXtNmWSKqTgcez9i8D92iS2nw",
  "key14": "2LPUbGJioKtrZFJVUBnwHh4qZwDAacyEhwFiSn2SxMtpDSXwDNjaunY8Tvi2PWhg99nJfvhj2NEHK1GeyPDZdmKG",
  "key15": "3D8T1qmHfAq1zci1CiM9UidQrf3StrwD4mpwqXmN8Kh8rDbmje2MCgxcSSA3NJx83APtvvzJwCyWLbbGdbnrKCjR",
  "key16": "4gNDTDkNWmGhR1cmndTbC7jYNhx4DaWSrZ46jK6VD3YNd2SFrrytqHLpcCFvsGqYJSu9AsFNLGrM8Qq4ixtygBgp",
  "key17": "5jrpUsLiNFpSNzxYqXuqFgwi6Uup7pZX7DhkRpoyboguV9sZtjnrzotW8Z9J18FRTJ5rLrE3vNd6Z4YexQEq6qWe",
  "key18": "3yWHmteVnQaEPNbh4QnncKDtxQMfgf9Ed18ebiqRUSiswWdwq7nNJRvuQYHEUaYhzdEXmr7jMRH6B2MwPRzqDGTy",
  "key19": "5mtwdMBLdasBjkp8hy6NmFaBrne2jtwwFzhBjHJcnMRZ3H3rJ9541Xxc8CWoLDche6gaQn4LYRnQ14Xx2uDZyCnC",
  "key20": "5QbeHqLqNHMpbn3vD3Jr4jjGxPLNihykkRecP6zG5PtatzxDuywSq4gLVU8jLjsFGcsvw1UNZKe4Hq2CDuufpvmx",
  "key21": "3CXHxCPvuRkFQxVG3Xyd5RutPA5abHXqKFqy5QA4PCHVHr1e78M6dojEhzZMYL8xHTXf9aFcmLqedyBkfBAgPzUP",
  "key22": "5GSqGMs9c4AcjgiJnhWRAqvQBCDc3ttip2bPurDpGF6AXRXUnZy3kWrrtvEvMiZ6MZKosG51yABF3xbBFQsHKQfP",
  "key23": "Kx9P9BFNf6NGhcBHtu2KCCoFnb5aiF7uwA7u3u4MKeofy4tgvRH3zVib6s6BV9LqXJBh9hHC1aF6BeuGpR7W2bn",
  "key24": "5J3C7EohiYxXmQ4UZja1Pgm1ArQ1AxzXJm9mPEhQQTZcwpWwQxzwUEK9MSzv1apvCLaqM4pGNhCZG5zosxaqhN2",
  "key25": "259brragfyYEJ8H7SUPwCG2HjEoiRFrrs747UyQLLztGwEgmGagFCP2DnLa8YQ2Fxfv1wiqoUkKGRY2vyYZKJfmF",
  "key26": "HP4Ko2JEqRnTZUWLqAoNHUEFKpJxowLRRW2xZw9fc8jobmnVdbJrQcAayyjuxcV5uDKG63sBWdU4w4otu7DWiYY",
  "key27": "3nvkwA9v5DuQAe3X1pqzG2e9nkG9GB2HxGyB1z1Rn8ziGkB76RhjMNBzvkytfrU1Soj5bYKSzVhZZQTBUGL5S6rz",
  "key28": "2XcrvJZQRHT3kekKtF68VfdexxhD5oMXAC5V4DPufSrLxK5QMLwRCdyaepcEVXVrvGVM4YcdxrksgdJSNyA1SzN3",
  "key29": "3MHBx8HsYQ9Xf5hkx9ZMuXKLHPRCLZvNZKsbb9YChrziNMkrtmShpcHkogEj8RDQk8brgpzpQc86679S528kSaDv",
  "key30": "JtR5baqQaTSuYYTiKwpSNuvWNCDyqsdqA6Qz25gkHUTcsjJHNa8T2e9usQFETYgLf9YGXA4XoxgsTX8LwHbWJpr",
  "key31": "3vHJzoQbTTi4Nx58pVZoc2nWupGbMVsyGVYcmDQiG6UnCoy1gRkPNYQB9xMDxff1VTRwAAZgzh8gRR2dE6n6DrZV",
  "key32": "3LDf7KZcyhMNKVZVf434G47TMh5AcNqCrvog8i3cMJqRV1jPjTZVGAGgA3fArauNm9ee5A4pg4ec59FM69Z64BTR",
  "key33": "2DxPnUQovXfGw6R9HkHFXyDZSHjaNSCQgHWuiqWBLVY5fVSXqxBCmKBvDvedA293YijjYNfoTRWpHEVPGXFP1zeW",
  "key34": "3jDEdr8f3kum6HxRcvjL66H2sVLoPvCaqoa8whV8MSQKTbbJZ9UVozx9tHvJgtPfu9LV7V22rPfw5xoVUd5xbyfg",
  "key35": "GQfZQ1JWbPJcfKCY2jveiDTZjFxYG4pUU7dY1rS4EBNXqALYHSLPuTNnRWhh4b3rJLVERPTPzn1tMVFFW4eNBq8",
  "key36": "3PtVRsiUN5QdHaWstQ5mxePBHKcTWwMfeDLxkd39dZ9oHSdhP8pdoWs83EaPGmYywJPxwvkuoVXQJneZECZL9khw",
  "key37": "54LbFLXv1ecMhjX35xEj5z5jLaYvZWSmfy61Sxah2RYJf9VHVGkTa8uVBiz4dYCaqDDCyGZpZxNZYwVxhQFbvVq7",
  "key38": "2jiuo4DQvQYbKE52X1hQ5xeuXRLG8bNrkbiFZYGpcW7gMYeCDDRo5jFDXy2dD1FQnxLmA7jUnpoTtWQ9trmi65b9",
  "key39": "5y1PoNLWq5xGQYeHUbrj2LUGHAMLjJ7rtb13HA3ADu4rAbouNKtQv2FTDsdvi7Z6aiZfYQP4ineZQg9YXk7shpwo",
  "key40": "2fZYfY4k4WKhy3QdKXFTj3NLjJoMGqYLRPSF1i611JarE13bHqiafyJRf4tzWFw7HXhTeRhXuFp2xNxms95Byky5",
  "key41": "241yJzoxdjhZvMuYhF74bnp9jN45fsJRJpy1ynCXZhFW46ujZtoJcBp4u2jUtecocwnxtHsV3UNz5W19hroXV1Rb",
  "key42": "j2XMkorqvPxfVtdDnySxmv2uhZWqUU3KyR4JN1PAkVtHNy1cHSDoRpPdSsUFbKnT5WRLEDFHAjz9Sgs9YeYgd6b",
  "key43": "4yVuqLv8GcStz5URHMgHADtqv8A7JC5pM199oYvRgs18HEMr5G7VaGTrZC7N8KT2XNB1QP94D7ufPVpGGgtLc38E"
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
