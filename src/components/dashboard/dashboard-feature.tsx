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
    "2bxQJ6HJa6PCLpQQEtJjJxrb4PWrGZTtjm97t4S6t4un1x5fVJAaVNG8Tor2f8W6yoFmDYHR6KTz6YYhrv2KK1Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdxyhgJjoWVxYttqbJKC7CH2fE8R1UAFSeGyg4FzaiEbuxXZXMvSm3DBansnDHENbRHfsWc9rfqEDam26MPJsDu",
  "key1": "2frBDfsyXFhLT4i2bR6RFsNCeXPgBVJW5QpohMyCakboTvJAztpn8daLHeFsvTYtgbGCja5FoghxWDrREy5irSnt",
  "key2": "3rRdT9dCsM3kfpfyuBaZdPAuFEAyf73ztJEiQWP4BFs68fFda7PkJHTTV7XGB5ixULKWKYSzeV8QtPz5nGZZpcuD",
  "key3": "658797SGS65bpcnhweAmTWvxy1FXfBrn5HtXfb8oUuFPgQRUjkEwjGTZEHXcmc1x5UaHbLBoXy73wKpi2Tq25o7B",
  "key4": "LDBmYaQ4Z74TLADrmJA5MMcVDgEUh8g83bCPApNmRfTmBtTPtyXi8PkS1qvruvHTxtGTmRM52pGiPSgwiFj3E5D",
  "key5": "4jQmYVHriLX7r1Q9Qtriup3TCxrDKzxd15wD5tMrQ96HphyDnDaaDLWfJfSJ6mFJ4LcsX7H5uwSDjRs8DjepMXrx",
  "key6": "2gvnRf1NHxUxj5ToLgridaLuf3FKLqjMJ2ePV2duvrQV1wX4VBsvy4wGXjk7ZLaRd3hC2Vh9JCGs9DugFY31tPVC",
  "key7": "KWUv6Df7j7pMmcJxsBhmJeTZefPXUhnP7w979EFGYjkbA9SmkhbcBRNSndZmQMQGPLL9q2bu62cn8GkVvUPrF8r",
  "key8": "5JjTBSjK36UAA5H9HwUQ5JW3KSE6jfggxRkoEZfHZYF54QRvwnydji1sgbxnwFcH9hGeNmw145TSDsA5dUc6ZmSe",
  "key9": "2LtCUnReaNJu4WzXMpLjoF26Q8U2Gfr7y6jMYTZBi2MT5vTJZ2u3TrpMjn3sm1Ftb5nnPnF6vbF2opLnk5sZdThT",
  "key10": "f58R11HkyXFZj7DyJ87Wwvhz13TntVeGY92mQFBFfqDfTnjte4MHjMZZyarkbg4BZj3ptt6fVwPW8PGoivmuSuq",
  "key11": "4tFn4pHWeK8so2H2FiD3E1FeaS3sEWgwed68as4wPuZqG49CAx5qSU3vjsSMkzEdv6GuvFumJJn8x1NhtbgVkzuv",
  "key12": "3r5ZKGZY8g9TKzT6gJLhm2sE9Y7H2YhM1GufcZxqAZT8845ejLVyj6dXgH2k4vYVUaQF9utsuAYLyTNiqWyphj3Y",
  "key13": "5iTw8bL4VzoDFwcntDRjY5wsDpfYCbBzBMUT6Yd2NsrHY3mb3gptaraRyK5LUUdP6TYYM5QsKcwb2b2hhD5TQmyZ",
  "key14": "3h73MPbRYKJ6iGaNFmaZGft6GPfGojtQminay5htjX2UgXmku3NUsuMC39S5phWBRStAKBGyQC2GbUCr4MY7VoCX",
  "key15": "DLF4EHXYAJC9pvid61Y7P4oD7unU1TFMMRoAu5sT8Lxv9p2AU5x5VqXBwNibKScSSbMM69isy8BfpKvMMKGnUoh",
  "key16": "4cT8Tmh6zaaoNufT8RN4CwvjJAQK1EPVbxmrZ8P8FKvmeSRC4vQX9m38cuF6f59raxrUA7gUxfPeZPLZacQR4pLk",
  "key17": "56vuriSKArrD17PgwN4JmsMUwALnwZMaFUeuUC7aDG5Ja1HLLinjhptVTguBhHngtfq6EverWTuMWeQcmtZonQbN",
  "key18": "2vqau3Gak6PwF49evfFgmmPCDVpvcz8ByGhzeqFahKUigv2UqoP8CJQqDXNE2MLm7hdU525QZnCPahTDrYGgEAHf",
  "key19": "514Ut8JYkdVN45oyabhzAvdtKDDKrreYfvTXELDnxVGZ9LpPJuwqkFvxV8jWHaP756eSUYVv1n2msyqjBEJT5pfA",
  "key20": "2P99k8jx7rRFkYZXf5UrJXa16xN5q5yAjt3yhmZCchNvufv8yLMPHRi6jrv1dqsY8w17SmWyXv2kEyu39Qig9zYw",
  "key21": "HqSckQcqoPQqJpeVQArKDvsk1FbgDcjSZX8fEfkaXFq9sXLqYVxtL1n7uVcemYdXNDCjdvjPSeV4x7gSmJLEjCm",
  "key22": "5ZtvgRXyFvPggpDQUerYqNmVPHHYswu1UBLke7aAMxveE7xduyBiNZ34XykPPVhtni7deb2i5aaGHc54U4K8jcwo",
  "key23": "Ls44qAMivuEYLtCzAQi6vwMcnmdfxAoUUigSJNsVJX18JzUMV5bmL6Cbz3EQhoqZyuNAhSoASMb3BEkgdzejdtR",
  "key24": "3ZSHwzpeC8GwdiQ7PadGf5sTewsuG82qEcbF2KrsveCnR7tUe8bhXkNXN3qjEJfqJnEhzzNBYPYgmm9bxmAPFyBH",
  "key25": "3xJD3TZyNzuDy95Acyz18daA5DBJv6VZhbdKeNdyh3MoJ8B2F1CWRxKPQ8CHjd3s3WX7awigSXrCYtBABHYPxq6r",
  "key26": "n1KEtEuMpMbZD8XjjXrKbvcxavmfcQxq5hkh8BjRmHHEPpLdkXpREcEoLRZrPWSknd5tJjDkAsod1EGqFcpNS6c",
  "key27": "58KK7b8x8w2BHYTt4qbnjHHSBiLmo1spJKd5RWJd1xszxifsy2BzhBWTZ3YFvw1Av4EC8Yw1uy5ST7UCtvpE11SE",
  "key28": "5VYtN9qRZNJVsb7a6PkFsueu1rhXN2bzN4XWVnwH3jif5eJ3tqR4tgqpzgtUcxZYMCwHRo4x947tdFiYxuriPXEy",
  "key29": "318CxpYHxPhFKc6L3ptXcAwtNJGkbqSH8rPSVaPXJpShtd43jVZjSnMtjDDmGZVGycMGScGA49q3Zus9EpykqAZC",
  "key30": "5JYegLVCJbDjNqVubzw5iziKmvV1h8cV6c5KcfYBnzk2NPAQ7YgJjAW8kbSGa7RvFckZW7Ya16qmhCXRc6JW9Rx7",
  "key31": "2pd1aTTKPVcApScyKkAUHygcpDyeS66W3V1hU3xvVcGdm5u8GVD8MPJc6n93PeArRYZhxvB1pguHxGtDxw1hsvUp",
  "key32": "2Xbema4y458VaAptxd9JiVcGay6MtYYF8D9qNSPsfgZtkJc88SfFuF9mVtuCemxNta23W4YRUuzWg37eiM83F8BK"
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
