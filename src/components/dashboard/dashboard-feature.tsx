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
    "7WseV5sBvuaQiLU4fqrH9Q9ayPWmkbsoYjQpExe62a7nTr5JRDmJDUxCYFiJNSXmikGmxTcV97H8bwVt2C3c9o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfFZyzNgQoiUtLba72iM8UXC7V8JNiiH4RvQSWvvcqVpdbVD7NZHYTu2UB9tVsumrt4phxgFAGEiX2APruwkyoF",
  "key1": "4maAequwRLthjGjtbstbvkvxTuGWQ28s7VUuX59kLLfiu9qDxqZ6y3UcmF5X1ci55vmmgnbjFVs6YsaP2z7YmxTC",
  "key2": "47gFmmK6qsdLBWP1XHD6jgm3K7nUR4r2N7P88Ygrn2rEBxcx1F2CL2xDys5RSqja3KocTSS62yS9eJ2tEbBN8Y4v",
  "key3": "AWoYcuwWVdiVL9vqZgpqGeJ3tHMhuQLTVjjRbhbH5JNWrxPqVACa4dDsXCaiYSrnwcy1WgMZTAJiAsp6UJ9uTDP",
  "key4": "4cKZHXdHgPviqbYzrWyv5TceXFUhjVAswfv6fBuMM2bEiNJa2cN1GP118cjMeNbUEMfyhD5y4mavTRat915FURzN",
  "key5": "5TRHV7KeqeTgaAdS5fTr4syU7rgDxyNt2Cd7d6urjNdmBXBPnj2UQRbNMGxKToEq2pVooWT3coyY6FN5qo8ek6FC",
  "key6": "32TQwKospyqUnbj8DVKfzW59jzRfbYaLRJezFkfEfpf4fzCB6o5yV64N9RU74VLaZppphm3c2MKsVbBRJFgzrjFV",
  "key7": "neN7xZfnL79MREx2xkddE4UbCVEk8rsZzQJ4wwZrfeYJsgEZwaB5wgKRdxyk9FfbGc91MPHGjATSawRBPGH8fSS",
  "key8": "36sH6xiK9FVBDpkNpx7ndZ5e7mxM7WRNWzCX43i6h1j3obbMJP95ecHkTbA9MnPApkSFwdKTj6zoLo6dYSbpsZVh",
  "key9": "3Y5MUUiSuvZCsXNnx6JuhXBpe7PZWmLtYQzgYtDS2LXNpv7eMa1iCuNgY4fKdeyWLm4T3Dvw26fbQgmBK6ksQdxV",
  "key10": "5mXCb2nw26sJm5a3ztYFJjPMCvruR86Ca2zTLQa8bNb5owYZtRNrcRkcFBpN7FrLJMxQ2R4gjA2Rcvapu6jhG7XP",
  "key11": "5wKcmyAk22i9WdKQVp98fVmJeVpxDbiBC5ZGunXVBVAhkvfEkQWndEaY7hnmDRF7Kg4gEQEPQjZNjxshddudx6Rr",
  "key12": "4R3cg2ed5rJWuJQwBE9zRa1d59DsFBS7JH9VfXLsfEgNVxVxKPDZjJhkUPZzJa9bxFWFacbts2pZTAg5FeJXmEaT",
  "key13": "2TKCHkbeL1RnSGnjjKzhjRhhnM8XucCpD435imYCP2jUWtZkRdztMXrTgcBsG82sK48HwC9rbBY9kMFfw21k8kT6",
  "key14": "3zAPfRzmPqt32MaPoAoJtWosPGUM5pucnfp4DPJhFMPnoDtJ9CJpNzhogk6bPpJ1QPVT1spNKiERToZ9k5sYN4UY",
  "key15": "uUgnVnLET6ZSUM5AeGGUS4VdEsNLHM6RkYhXXsT7EGb3SdWrjhqEKngydULM8V8cVXh5ss8FLxSFWY9oF57XPyp",
  "key16": "4vAdE7siMNuLXYtqhcNmTXMfkPsFM8XxZXkvEdXX9hqJ7Yb4rFRyi9dWcu3aosw7bjrGeytUk52hw5Xc7ZwviWKk",
  "key17": "RKXHpMSTUMBgJx5rw6eKkgybt1B6WvH2CZvcQ4ZoT3VMSayQ4QwiUwnAtJtdfmrBzkdbxWUjGZ4sxDh3NSy3XSP",
  "key18": "3YxTRhyRCrvKsQ2pSvnReSmsRhoE8W8Xsg23NoAz85VUQnv2WgMHW5kh868hHtiyrUKx8aDgDfE63WHSZ4csbrgL",
  "key19": "p9N6FiT4NeaYVa2gNiijmHobB7ffpV2KxCpdfL9fhHF5uorPbBmvvJCHq8XCHwXXjAxibvdaQLL4cqQ5ZP2wiiF",
  "key20": "25Wk1sMe1zqqR7sTazLfU3B6zWxwqJkPdwVhWoEoUtQy2Mpx2Xf74Rrrt8GyZCSBh1F1wd56iMw79hJTuAcNu9yE",
  "key21": "3cDFw9BbqbWkRD19VyMfL1iDFjLtiFJsdEJvgcWyMs591HVFphCxgLP9bbXi2UVhKig2hXm6ktPKyqj4rkYBxxyE",
  "key22": "5dv5KCtSj3CQBbXRhZzSv2t8HyvK2GPPUuwT2FqEJAUHHSYjhzsUGb5KT6rAekV418TNQxcMex9tUK7bpgiWAGnV",
  "key23": "MPKWmw3rmMdiuaS2qzWXafvJitXDjRf2AbxXYne1DPVA3TtVLFQKHMw24xA9T5Eg8BVg3usksDd7QtQ8WqfWaNG",
  "key24": "4DbRUnMtNgu3nVV9XH6MDTVNenBp7MkhM3CLRxzpXsLvykW7J38JX7ECTfYwdqtpQmCFmFUobWr4utTNbHkbEHYd",
  "key25": "Csi1T3PSEiwmWSV8t7sALxdrrpRRnfQCk5UzHmmw9MbSdfKatFJDJWocU2EJ4X4HjEhaKzvGTwKUV8zNbzqzk9R",
  "key26": "2YsaVjCGziXBgUECiU3iagYwWEjJ9TjSdwW8nyftwwkNpSPuxbzYzNtCFckgLa6cSD1tgwrW9fLkKZb5rVtyRVPn",
  "key27": "2NpWJCR4shAosNKvvTsRnmodTMBJMWoNXPz6XYye1EzcbSd9rpRsQZtQwV71XXSTTDuKeLmVjmS9aV6Gsm94BENt",
  "key28": "5KXWjeKkJcA65x8wsPWejjBJ2vFbZq1DG7ZLtRkySYiGBXBPmXYBUAdpZm6qG16skNrqPtbC5VqWrtsmp4pN4Nqi",
  "key29": "QgfDEGgmmFdQR8mebGLPV3Qd6CXhqFWNaE5Sv46oiSAjxEELxBR2VTfCmD6eQzG75bivfBJZfQ2a164cvfVjbxy",
  "key30": "5tDfL2emZEXna3bJAzJBjmfBLpptTdUHmgCjfv4RJwXm3vaduzjHKXGoudBRncyRnFBBSb8gZTZ8GqJCScGrNyYv",
  "key31": "5364Q45FEiC4u6S1xhU3D27k3E8y5j9HmDK7kqa7bvYb7gfRgHaq6gBEN4ZNVYEgYv6jsqmfMswWDyzfhyfDzUTL",
  "key32": "5LZ6rAnwCUGrseSFc3ejhgiKmeNMfDM5B1igj4XgEtq4P7Mj3N2BTsuQQJ3t7FJNtsj8BpJijBejZSTfYN4gcjUn",
  "key33": "JemimRv9VZRnNP25G3chxkrVpcnt4XMVwSFwaFemDnbeTVNBrf4Kf7oWpqoknGkBvdNUJP8L467t11JNFoVF6VB"
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
