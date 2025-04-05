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
    "2Sp3yvxcwXbKkAdaLUG6VLPZmNmYsHHFvE7VTfDvYVA8Zr3bACxnbwjD1KuibZCD7AmjjAhXmGXb3danzXt9DF6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKN9ueggqXzqpLoBQ5KgobyXEsh8WqMyF5ptKAbg7ncSxGrRneL2fd6omUyF3fzjf1FFbuabDkF8tSr2fK6fu1k",
  "key1": "2BwaNvbBhA7s2EyeR6ZzK85hSyKATKWKQrfuHUibgyM1U1E2mhWPkgz6Dohzasv1fxPqZYxqTUWr4jfampXQUNCM",
  "key2": "2g3FXKKh8FbM4ZK8hxLebprf6ZJQsUXh5d4yxy2UvoP5N9aHbuh8xu2mHSDAvDQuuaaEPQ7hCWcCx81E6r6KqM9x",
  "key3": "5Rq9DcdKtQhYMmVDCn3riX9GbdpZk26NExkjg27W3pEBD8A7pUTyrdScJTUuFojd25EfBBjXwMcaCn9CYKERHEEA",
  "key4": "2GQUheX7ygVPVLLnb9bWGBRLcgbSocCtcd6VcGMpyhoUDxKaWRuXHxKtVUbEUR52vZ7XDnh1FAh7cUL2gqkrcBNp",
  "key5": "4y1HUGUyhQ3nbNGLAPFmTXE3CfkyhFUUpfVyrq59j2vrxm9LxrLMxHYwQk5bx5WCAUHXaeNfwt871xQjHeFGVtro",
  "key6": "5FnBErSJGk61fkVTd9n3uTozQyC4uWNkAriPYTocqbSC8S9amvDFdKqH5FJZZE9599sR9QCR2w7dc6zModzPsqkq",
  "key7": "y8UPPNTzad9fELXjb9ArsU2EM3iWTHs1sGZx61jiT5x285wRp8hDUsieweKQStFAUgAqgbxKmqjvf9u2pWJwhm6",
  "key8": "CxEebt82MHbAZepN3R537JptAqW5Uwj637F2uL8GxvWz2LXkurS3eFovWeyXKotKkwTE4d1ciCD2X2k8cw6hvEg",
  "key9": "3q3u7vhcS8wTXAVPDwRSBJbVGDZgCmoTpsa1qt8SLBmREmfTnvm3JzCHfte9Spf9Q7E729sAtWmVgKUpN17xcTzB",
  "key10": "2tSyBHW9uUQRFYNf6k3JP7JGj4CanjuqhZh2E2s55SEXkAtY5ma7dvXDpd96RvoTN1T2hnGPjD6md4r4gMt2HaLU",
  "key11": "5p1UFLMJZLfCznHx9hwKp1FcTARyrLzqbQ4guisaoMM4oHv5xxJMa7XXEobsxScEC7ejUSJLtUggFdQLoqaiNZKV",
  "key12": "1bUYYYfKT5AevHW2CPLcxLAwVfMUSLQMGRknZLrkFgiZ1PNLiFgE1JMRmWUc3H1PbwkfCNjNajYcCAjo7me1ckW",
  "key13": "3QqZTucDbF65vM2DC6aCimtkdx11Jh4EAbQdQnXMCdg5QHfPVGnniDXpf4oxffETbu4dqtJGhgWnmfVycf5KkLi2",
  "key14": "4U2UPxjAiBFhdK5W1Up8a2iaCApgHonk8Wd6WCHWyEnq5VEDaYDC1RMQSLFyMxq6Gfvm7btTBkFkBvsoTCC8VCUV",
  "key15": "35casAwKazbpwrRQ94myVxxJFJKmXPRwr5n6kzGC1zUQy1U93NdZL4xwWfXrru8c6ynDJNH1LvPYCTU4sPcBwpik",
  "key16": "5eV6S3bvf4zpZqg2BBaxt4covcneMpbQVVHxjh277v18js8yYmC2m13j2z66fyBSPHNDuTPS8DbmhHng1GQ5QJh",
  "key17": "4RvMCGnEG3KCMN4yomarCTUUYvepKMn9bkiUnGag1kHJzAERac4VqVFJ4FauARy47Y5oKd1c3PYgmZup2N5VFCkM",
  "key18": "3YKg2DNbP1mAAR4GsLcssGCX6qPxLVG6P5NiQER4uAAD2kqogPUGW8JjT5a7zA15q2Y2CsVdtvKiUVguf23U4YHY",
  "key19": "4Y5SDxwNaePFDB2upZ2ksPT2z8enyGtieR489Ef7Z1R5aoxjctgqz32zDGftE5D8t9wYD86dcNSc6qKthp9YFPDy",
  "key20": "2Vz1fBN4cwsX5H6KJyZHVdwpr6kqshQAJNYquVjWQhT1Am3V6mGXFsEk6LDodniR4dg47s16ocw7xMpGTrkFJTj8",
  "key21": "2v1HDfRKHfud1YyAyaTtL4jMb5DVWnrVi4yQgVBXXPo3Jaah4wBrg7vzrCizpBtDnTyz9x8ZeGftAxmh7uqegCge",
  "key22": "557GkEErT4R6evP4TEhxHYTewT65XZgRz6GV4wket4zKTw5SEtHJfhdYJpVWpL32QXcqUZgv81Dw8WJUGdUoon2K",
  "key23": "58s9f953vPKymxFzLT5YAWji6qqefCJeSvQyEHMLZCGpY8cFXyjCNe4FWmAJQwmasHDb5g1NArQwqbMbbPj1BDB6",
  "key24": "ZXrD5osFn6ABb2VwgDmPJ1vK34DZcVkdXfzZCvZAD3rJA7ANW2acyE5UA8MkhwmZr9BhFQqYBYDqTN1YXxnhqam",
  "key25": "xQH7PH3kQQuz8jVNiiajfmDG7TDdcx1VVY4WTMQhjP2tAE8Z3YjgrgaiRFPAg476HH9dV4N5wggpcWNm34Yu1yU",
  "key26": "4h1cKVxJVAuMzBRj3Vdc2P9X1S6iLptm4U61TKA4f6AWzz1JZivGRgGYkqoyS5vUaM2NUPHHG7yKj4BkUz3L91Ar",
  "key27": "MdSN6Yg9NnLTD6SS2VftVTj2BfMscbvK8xpXMRxdzBLZqCgzSqsuDsFzeXxsSqSUT97fqPsjE1gMzNDVr1up11g",
  "key28": "RDwsjLRS9FJSxxgFgHumCxpe9dxLyEKA5nMHjmgXWwuqEX1xQWHvsUq48Vd33ie72dotmr6Y1G7pX5kfqUK5iF7",
  "key29": "rHnQtrrYGkWXHnHjQQn2mGci4nFyAfBW6T1SEuzN5mXaZ3V3jgWZj1yeB4SGDdpHrjbSGRD6ZaARMKdxojSG6Mx",
  "key30": "5LEgo4o6VhMx1FLP4stbUCJbV9XLajP1FfKNQ3hs4BF3zkcBprrgTCYwFmNaWagbXCLUsXZ9uRkmeP2Q6M3tKtq4",
  "key31": "5KghbPushuMs7rG1y8FTSzFmBNm1yWswcvMZPJPyEATz9QURaTJH88PfXVV31q15HBszMDAvEgLrh8k6QsbJMGco",
  "key32": "5LQxzSRDtiQj6RzRJmcnk24Ba4v6KuKwfsmMPuNDEsoYtQxUzFuVwM1CKCV1m3iRMjqgaKGwPKR6ybEQTe8j5swT",
  "key33": "3mY1MsGNDbNtFjht89RRx7TkjL6f8aQXnc8tg6qjHCYN6WDafGfQrRZqZGUVnggoBjpkPZwzLeGsadAzG5obPZ1j",
  "key34": "294SYpcVGdgTcorHtwWE7YQY4Grr5q7i6wbheohXNBMjCmxu9kS8Dig6k93eiazS9XArQSHWrGt1rpjtUiiW9vbv",
  "key35": "dkqnfSm6DcABqoAWzrT6nQST9zxU7Rjwc7zZ93Mu2JW3Y8rniZN41iivVTJnXjnFzsKJmzqVjVRxcfyTDrHZSt1",
  "key36": "2uUFwAN2CeFGtWCfBKmossjGtBFYmH91AiRR28kfim2xbJeKq5fpnYti3aqZbj2rLE1N8GXhS9oGdqtt8Xnv2UC4",
  "key37": "4EMLRz2cBqG7Zs2ku6UXqEDw1KXgKBXEAngcQuEf8hHTLe1qjgbhe7hJecdvy6yrHWYuCu9kQPpFHbLj8oXg51RZ",
  "key38": "rsufhehPQRC87YoWqA1ZDa3i2fRZsuiCWUtNMjEk5sbCdy6yncw8wTaixhoANxf6B4i92Kx9konqjo9o8CEG1X4",
  "key39": "2fuGzLMztkBgfMt1bXTRHp1sgqaifNS9kttyq3dVBbyjXm7sWFvyWboEYdSbWteGcii86F9Um1YLmZctqaRF2VWN"
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
