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
    "9K4vo94MvqBhdD7iKAbAvfpV2GwUbo5PyykFLiS1Y232CxmdS9JEVaVKqnFmmRzgkJzUPLLrfPVs334gLrZ26Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUgL8TNE6bpiDKFW3Ud45xHGkRm9E2qf2KiDc9uXMTy1XPyVknvx2BiNJ2355DUjZiFD6TumsXM7CEGBTAqQ57Q",
  "key1": "3qhfXzuLoHjrJHD8578xpFHiYjkTCojUvkYmN9g6FHnt9j29Tarz2AowY6RkvtkMHW7RTgFV2JSM8gVfCLE3fNLx",
  "key2": "623Wzxx2U1f8BaBupzQ9oSq5EwCn6efK1ai9T4NckoWpAgMANXs85teHqUoQZgcBsxzLM4NvDcycvqFhKDLtaPJa",
  "key3": "pJg4QzzHLCHNbJDoXv82XeguYFrXvHfrsAx7BHoDEWbxgfLwuDtquk9iG21YsL489axHggTd4q5JAo1PWScoJUa",
  "key4": "4bvJZCneu4gPx2dZ4zn8iKYTnFZqajWKAmoQhtuCQqcE4QMYpf7JfzYJDvyAS7cHfxMQoSJgW2orTGxiA9PqTphb",
  "key5": "5uEcQgNCPXJ1tjGqRjyS91W9R3EdKV64gvAyNwQGN58VbrdHv3DFWHwWhJaKo8g2sgoQ6TJQJbM6f3S2muo2dEfs",
  "key6": "61zMwhfkvGyLTwZyST9AJgPa2FeKLDuQz1PpaLLjdWBiRprA5z1ghaqKAnm8sGjAFcgwS2pjha8xbAnGWf2jJNJ9",
  "key7": "4vT7gWi9qK1n3ojSwecnV6LK3ueYeKjkgeFjuE5RnRaknyXiaKWGfv5BBcw2SAmPq8fXpfuJTTUHdHvPvcAx2Lvf",
  "key8": "3fCEaAbsC7KoRELeaUXq5TDPbsWneN1Ak9Y7ZgFXHVZH5H6wGTdcb4Ee9AycKrUvq44RTQMMk56tuYkGbBpUC5yp",
  "key9": "4N9fwi5hj8pBc9ePzkWSMEcPrBbzkfh4QWJ5MGWqJm6VR13otEdSUXZykx18dPvJF6qbSrvyR1XJEvmsGnLQm3LJ",
  "key10": "2aXxchbVuwkuV45wn4t1Dy8cKUYY1atCUZanMYvSHcHFmkufnYy8wFPVtFkBY7CdEcNw4QiwxNpts7oYQEXiCp7z",
  "key11": "2nka7MVPkzBpj6Dai6qaB6LUbdpwmkDeuPViRhsTrs6JjZw5DkK1jogDMbXPDR8WHyC3camu5eayGBgkRLCAKMtn",
  "key12": "5RtVd7ngPtxHfHFxcYa1cmzj9kQadpJFuZYPrwudeDYTyZKSkqBmc76u7hcoJejygVExkA7hSE3wmfduv7XGjEk6",
  "key13": "2jXugkYzPcefJquLcoyT1Pajf2CZWq1wC8YYXxFARJW4nnY8kvoTfXADQaifk7KDoBcL523Jw6P4h7j4fyf7sWZz",
  "key14": "4EwiBV1DE4tMBoocpVX3kgfFxKRzQXHWFWqM5NrTYwwtV1VFcjsKqBYCUSfrNUcNMcXcRVVYUagpr9A689FfhoUw",
  "key15": "5uGxf9jHxGa6kY9eUrPfHHBAWDfD3NcKtUzaGePjaubssYfYA6VxTmNbYc66XBnRPRKusqhRBzZLHnfGJbGJb8Hm",
  "key16": "5XbgBsjX3ut8zypeYT5rAfgo3NNSorY7UkBrPe6k46khyK59hs6Hhnwk6zn54PkJ6HdNno6qNZSYMsfkfVDvucwE",
  "key17": "5Bb2vmCez5jXCFieXeXVq8sdxF4pStsg6KiyedXDFet2bnPVquk8MZpdprRJs1EK9X9yvebXNAfNisZ4zb2JVLvF",
  "key18": "2jQrrbJhq5fqBe3kVB3JYDQyojkuhF4wuSM4xvUKik4YuVHiGKRTRNDijQe4N1skuHaBjYQ4krZxcA3BMSw2UFU6",
  "key19": "5kiA3ceGmi4Ss8L9uvXzTsxki7Db3qAwG8g3NUGYPoBZQ5HnKAhVfLshRaZJZgCPf4yhXyd16dz8jX1kXR2Z4xU9",
  "key20": "wW4VH4EsdDFQ8pxCoUHeDh2yz2ufP6zELFeBcmhPkXrehW3E8mJaEB5Jtgs7PEeJDzCCZ8AerimtiriSMmbaDR7",
  "key21": "3zf5sSfwBRyYrmxqAfdreNc69GokhugqsFytM4UCH11tJAjEuZP8b2pxSkmkeMWYTG8EoM1wK7NyEAQfECeFJUBf",
  "key22": "4eW9XxSPRBU7gZe2vYQSYnLDhYq53wQBQXzvcAkpGgdFN9vRPRRaFvs2zkxQxJH6o73r58WbUNrncBjLzgxa24Xq",
  "key23": "3DesxzgbSEQGFJu74Z76hCVP6FZ1bUtnuZDw3mgzX1VYcXXpT6BwtNwvawzZi7SmBmEf6fiWRKc2sKBZUAVcaBUv",
  "key24": "3VTHNTEcqc7HNGVgnztwSwJJy48Z9gMvKPErEijgGMWT58962eMCMj2ojweJjKZgQ5wqR6VmPV5whRcrpn7PiyQJ",
  "key25": "5SnEJG8bWWzTdqwfLx7SAVKRBBrGGqHCbv1pjAUCBi6EAZnJ8wtfnymBpfbavhzFRWwDgoMewvx5XU7q9CYQZezq",
  "key26": "38Nv9n9tFFn8pBZcLCT6aM8rrRcvGfgkR28fKMkjqoRwm9F8c8CjyxBL24xdSKiVexSses54cEc7vzTZqcyfq9CD",
  "key27": "4uPQ26Ms2hiXQv3Q4nc8MsYpXH97XzD3oGzgEoDQJbQfaUXohQaqz6Veeqstky7VW2SXnahuZTeMbq1bChTzTNq1",
  "key28": "38MKu76Wo4a2sVpKs3mrzBU1hK2ZMQYUXTNhXte92K2wjUeBcPyUSWJP5QfTKcr4a9gtc4GcxWbC4La93nfC6eJd",
  "key29": "5QYUinp47Vu2FV3PcQJtxiGETroNyJsV9x55TweFRZDuF35qfQ5QaFa2q37n7seiVjW7afUN4zyY8baDFmciTrKQ",
  "key30": "7LvuZMiWeSFhi73XmScQMycxNxKPC1DuRfmoYskqSPSGZmGCVkZ86rUVpKfUcsVM3Ubkn5JDivhiAvWnqunkwcY",
  "key31": "3NXW75zRwGXVQDLwse2T2zfb5kKzditfzXFzFv7fDEvDZjizbHKqpn4JWckk9Q7oYCa8Xg74Jgw18x3hGLH4XjKG",
  "key32": "53CM3gfJsFxMhQNFyXGNQRqrgYSU7roJLhPpisQnf2A8Fe2WzoEHu9uRoThi1VeGPEAYN3B1KRW7KMNWAHkA5W6y",
  "key33": "2QqH2jDdt8vU4zSkMyEJvLzYhbNoYNXQ7acR3ncvUqXcj1e2Pz6wDguM9kfpxUbcZEJBzWhMzBHx9V2k5UvyRdnZ",
  "key34": "TLGKFnPsUvQNPyaq3N8UGdJC2AsfVAfrwGskc1DtyPymxkSgcATaBNuA2o6BZCqRKYtPkSCunr3AdLg5ZwMRaUZ",
  "key35": "3TU8baCkmzituzi8wM7Ps1Q17KRJqtJiwYzW1hTUJokup7mQErsvfzNrdoZt3mMgxZcQYuLzXNpBZWh5QBUTFQ3q",
  "key36": "4JrTa1jAFE3F7X7dhskVCHAf5FYfemoc3bHTFb9YnrDFqfSwdK5baz6DaV8JH9c8273PVNaj9tZS6TjQx9nCUn9Q",
  "key37": "JuuiopBZGECJutX2j31n35zVPHCh9yNUnMBHVDRjQ8XQUp1kXjmo6HeXvJBb8KpjWra6fhNCYYVKGKXBjKg5FK2",
  "key38": "2HNkJmkHjeHDBiGafPUrR1JG647kX73y8S4R6Qpr1iXHjVgpHT9r1FxpSnKUof6YtXaMykvhQAMcrHojg9Y5y98k",
  "key39": "3DaqNb8ZHL5rFthMKAU15QXjmtBGeVRDA6vMHZvmvPwjCc487GTCSxuijkNz2j29peFbV9DrMifnR5PhiTX8mpyE",
  "key40": "4zFQJsFfi3JWcedkcvXDwszjEXjpX9p2pvnNXJG3FNtnXMHC1Mi5HXLwTweLWSDrfwsdpTNFsiWyN8FNNGRco66k",
  "key41": "4ENJwH9TmDwY84R1E3Ac8bKpRzY89qvEhFgL9FZx7kyov65VNkGBXbkKgEQuvVA8KzjekKym2EnxKfAk8YfSzot1",
  "key42": "2ZA85F8KEpSFWNbkeb4c8Y1CA9KTaY94LPTd7Feuu9B9JfL6s4UU7eDfZaWunDLE5NN9XfdAyUo266iHibdfwPWy"
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
