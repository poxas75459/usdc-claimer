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
    "2ximJRjoqHKjXd13sRjQhk81pKNDHa22aqtxffjyQmihNiXZHc3yV7XN2xGwfB47bh76nQJpdU1g5SV3PxPEWV8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "317rdECnWDFS8geHxYJMPhFRPENLregzJuuAzEGuj8oYn8L11udDWheMHh2WsPFWcck7nSrEc1QeauhPJ8T38x9G",
  "key1": "5qGTq3EJXs4wxd2n7P7wRMT3XdQgvXpeGZBh8qptoPpQxDQtjJdKE83spRMWEnqna8ZkkHyF1AG41mDKwK2j4uyF",
  "key2": "5Kj1RdKkqmmJPySU2kb9yh4mCrm9uoAzGBaD8xCT6fsBMj1pu2SgvxZgkqmwNeAhe5FrgWza3jtbGeZ3aiKMJz7U",
  "key3": "2XNCkSSCPJgo8RD8MY5ju7L75NCvG5orCACK1wddacMppMg55DkeVDaPs5iSjnkzUGSKK9uMmfZmMGFcrcbadoXL",
  "key4": "xNEggocykznNG7fT7JA3hkcJEMAKNKhLVpXfmKNqT8uoqysgG9ijxudKwoiSF3ysTH8G1eszZJPoufERSHJj3sS",
  "key5": "5QLL7JNoqEVnz8Vz8ZmBK3WJzA6Ac5S95xcDtWmvT9ukXsEAj82zczvvckvWceKK6CWSPFWYp3gmduBynoh3JKzu",
  "key6": "JKY3iPFscahGiMtFwSS7WCwATqb9WPVYtASJDsgG6CEe7Whj34HATWxGdA3DiGTsD3hjDrDSDphvQMXrnPEbdCC",
  "key7": "5zCrTvBbyp6Bi9ezo7MdzUdJKFY8gP4FdVzVgA1ZEpbwFnYufCU6zmZ4c41HMe9UHfGWqQQAjP7DwhLvmYsteUCP",
  "key8": "2KrmCwUwtnjKDQD3W9HFJDQCQFwDAgqVbDp9nCCydLuCfPotxkq7WZ4ywgZg1NxPA9TDDyqnaDVoMJkGrM39TFAt",
  "key9": "4KwYRj5oeQZPAVzpVJjeJVkdqQGEtYf1U5cQJbqrw1iNPcTVBybChexKD642q19SZXaxs2TmYECz9zf49a68zgXE",
  "key10": "2zTEMGT5fRT8PJjSm9N9D7RBRsruTG3ReaTNg92nJcswd4kQao4kX1jfHsc18cRa8TNiH8K8qC34Vm8uYuPajVY9",
  "key11": "4L7Lqkcgf77Y5nc2zwTMnRThPiQSGuABeYrvJy5Yi4bHmoXgbD8qf3EWgzhZSWbevw4nwXamknXtXieHmMpw7C4f",
  "key12": "3AUQLvyFS9Vz8hDQYEu8mgePxdUD8MZpkG8dPinNNWCCW4bodZ3MFDy9mwpPVbj8RvxECoNVRGY4dCuSv8nSdYfZ",
  "key13": "28joczyiww4q6kjboTxK4AoRfiBzTSX3a8w7ULVvL65m5mgqS6ayVCUXXkL3FbzPjFhHefJSzgwCEumLspCw5UFw",
  "key14": "5UXeX1tYWmhm2p4EhKZHMSLKTVRUEBkkVb22yZGXyPnFPUoFVnrNYj9BTAQh3M6xGX4zrcSVuZFUZBPy331cyyPy",
  "key15": "3Y5ErLbsvfMxS4AaQRtSJ2n6kkCX6HF7s7GJznb4ERLC5oPAChLe1kYDqrCkoHRpKgVBdn4MJEMNhWLLzCrVhX4h",
  "key16": "3Wxz1CKKEMcQjm3CLNDzJbtZiYJJQgRkYC1Lb1QHE5PCrREU3uN5jyzwxoXXRirzV1MEhzaFjd2U6fvuEkVZ66B7",
  "key17": "5FPwMD1r1TfiQd9oa1oL9Tx2R3UtEqtVt8AnHwV1XdgrzP5mVYX3g7sC2nRBRvbjkYNtRPMySpw4s9BnDrvUjxpe",
  "key18": "Ahvf6oN5QE4z5vmMbeadpz63YaSwrhNdVNMs93DWQVqKjR8UBx8NFqMxtsREoEoboh6fqJHyU7z3QeVY6whtXLj",
  "key19": "5VkBMhUZoNthLvZWbcejwG3RWqnhPsZ6mG7qS7VBSfntLjQaySH8Wye67td6dTWLpdem6EHw9uVxYBkSpmPj9ksd",
  "key20": "4uJmTS7HFiFW1rEf9RMJDoVM7itTHcfJmt6bijnL8RdVNHiuqomUEbnTE6v4QaRqb4FUQzc1jtkXpTsuv9wGvRez",
  "key21": "5JvtGxNRzxeYiKPKN4xjrnFEkHChaF8tk1CRCqa8XpG1Ubu2L1wzaANAawoycqg3zq8Jgh5cqD53LSb4FSJbkkwy",
  "key22": "4L5HzEF6h6zMXJT5zENNkY76o5GCdkyEgyxa5xBhD8fWLVwhLCRgDZWftYG88Jdzsg4uaAvrN4AeuGnBW1E1EXGf",
  "key23": "5qhq6NPkCWibhote5F94P59YpmdnLhFV7jQyk9AtcZaLQb4uCkcaQS2vbm85YmfV5hggUAzrDGVZNXmjjjdvX6c4",
  "key24": "i99Gq7FHHMrKSizPPg5uHFo1a9v2TtWYYnb5xa7bHCzJSdVeP2VoCpXnM18Csuxx3iNmNeNbBDDLnJX3gTmMJhV",
  "key25": "26yxJqAQu9VHNhj7tnX2tdn23kD7K4NdEebb1SVUVpnwqbBrmDrSQC98mcaA87eC3fpmCjHMLUo7iGzzqWk1uHTA",
  "key26": "2vVSaK5b1xz8myKRaTuhCf1TVWie5tmJrwAgYLAKymWq9dxadUoWrs7wLptUDC957jEYGfbhgmCwgj3bK6G6Kfji",
  "key27": "5uSY6viZeLjceyFqq28EPHneUgd4YWgqWXQnss3gDj2uUmMcDd3rJY9JRh4zxgK5XtYqhxFcWyU8R2Pymk2tFtKc",
  "key28": "2EEbfqJ3o9DQQb2XRgHodzW8YDQxFvd4zVMBrDCKZCUT3wnvhquLE4NLKRjUXAwTNyhvWYrr2cnwjnUKGdisrefn",
  "key29": "VXXorMCxAg9tcdJLMaeahqP9bQxTWTnstLix7EpbCtXd4LrxMncJZA2yHKHoVqL1sL4JJtCJbrM7EQ3fxsTXu6F",
  "key30": "2nUub9aJc2FXyzM4UL5mSTp5hHgKjLYXwa2n54Ye5vGtLfhWMH6aA27PSvEgc1SWPwcvPNuLj5yT4e7iWaf12h5q",
  "key31": "64dpgQmKUiUeRRsucxfXpvaZGKVPWqFNWtdEB5Hy8b3iYMBpL784NideWH3a4L426aMCf1Poo5fQCac1UXK6YAbB",
  "key32": "3mo2wYQU5NkftG4iG6cfwKC9EhqpA4JVwdDFtDn7LPBmbLAW2T2iif9WgTCZhLvZGinHEYedknWYeY992baYXid5",
  "key33": "4U6UAFwdBhz2ZW66oeaMXbnqGm8zoUmkxt5FzFjGZ2TC2qFnQdWG6TZXceyBAGqZnvPdZpWmubyVLH1KGPuMJjfq",
  "key34": "4b81TG64UFaovaRpoMZDs65iwafTFoPJFStgPwXbVm3ZiLjCNmP19LuiTkX1zjhvJYiczcFt4riazKesU57PwpGs",
  "key35": "4PinFBoo1j21ggr6wRRMujgL13LMjffsRXzwRu1hZw4ZsexuRR1Vm88CXfq1iFg4fCd4vXRynNeXspxGbeuyBEEe",
  "key36": "3UexAybG8swjA2rVGzkAW4XRVUwMfVr2vWhJcreqLMUDWZXfkK3b91kAg6DAEfM3to6YDBKESvSYzpPUHAfpRnaN",
  "key37": "5jhV9XZuWWkSrFDEN6QDMrHyWMTWPZuTbUeMD1BFVetcMypYaHBQqUe5Z87DZsbALh6usqD41syaVDRrqTEz2egk",
  "key38": "3kzg5uDP73cUewfDTyrMHT9hQ5Wb9WipbKsG2VxCC6PFFxd8sHxxVa5KY6Qcpqr3RoRgo8RQHcHyFyvHfA7YgPco",
  "key39": "3xDrfgwu8BU1R1hZT1VDeyD29iyBpUwdde3gB5es1hAZ8jh69gXymsHFLuioLpkCtp4ekZGfPtM3RP3L5XDFGb3i",
  "key40": "5fneDPE8h5YCcDWXRsK1y69dxCjXPBe38xoLM2dUSEpH6frTGJLGymYvYwWL148xJP3bN6WJZ1XBE8NwDtYPXBpu",
  "key41": "3pWcmrDCqEL7bxUqC7dSiRJkjPsbraX9rWeK4QR8Nqyguh1HXQkPQR1mtWMA4eCR5e7SjgthVTnz9sMEi5P81mNE",
  "key42": "3ZehsraT2b8WtSUfHuxywJXK9tzvKGZKdf8i3Q5bAuFR2RLvwLzvuEERvfQkNiAHuhwGvFUmBJkU9FRivhkAWWJv",
  "key43": "2zEipLoE9k6TJLzTDga8PnnMfpW287KwXSJPhAiPudwSzuWVcb5755gwuQtC6FVzfBmTnj4q64Y9C29mwWWEQzqN",
  "key44": "4zZfVc2mbvUkdyLFH8YUUHLjcA2etp3QZ9myRkrPse2gyXZy3Vp8LpQruxqexCVYdhfPargqwCEKRT15meXg8oFG",
  "key45": "41UVwpUUVh78suWt5LUM5JsgqgiaXENyHqii1kaNoB8iTwt59564KckFb2ATaXacUGeSKys7gbTkQeugjJToq9Ar"
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
