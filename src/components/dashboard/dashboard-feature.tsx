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
    "2Aie6Ew5WTGvTKEJwFs6n2NVXaMwZEsqSYGs7sUJxncXjjyvb5XRXWPM92RoLipCjHyaNYp7VLVjZu2qDHsRxxBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ae5JBSZMUMCxnaJm2VwyzcigvKzHyzTYKaSeepjAvs3XTSnaR89a6kshsVmjuxEiUpYEYPrhuWMpowwG1pE8Y92",
  "key1": "mBzMf3NHHwsehFgcbVF24yQTZet1ntB39JXPuSngHXkcSoqAzLJuEPc6RLJ8pGqqL9pS6DLBBr1jmgkLRkkuMtB",
  "key2": "5Rf1cquzrKmK1TZJgbPCAt17fu97bmAKi36qeDdzcJebRQXWYAHDDuSxnaHcArFk5xN6qD2ReLkKbYP23JBSRknx",
  "key3": "46EZKxrrcxCuvohWFX4shD37aX4vQPkkSuttzZgTiMa5v2bgFmnCuWb5h82o3YSzrjQUZnyPEE9XCDG6yhc5FYUq",
  "key4": "4UypFhEBbSdoGZaXGG5vb5wJJUEfkyUtyJdSA9JTe2tvPejEq9KgHt4Vf3PPkwhkmsUHeWcNVxDDjJE5rkbeZDsL",
  "key5": "5XTg3MLz5bKna7m3cmHfAsCNsjyqePJoixW3DXiCM3QL37mWjirZXqHgBZ4ao9ZLTXczn7n1bSZ6PiESjTMPTfWh",
  "key6": "SiPkRr4Ett7KNSQX9B5twwPunPdsX6ZBKD55PWtauNpT3YoKA7XqJvHNGzdMdFr6XtkMSyDMTvvbLKi4dE9L1hq",
  "key7": "38pfovYXvrHjpKEFd4cFKo7vzrVR2Pg6atet9xsmEm6Nq2dpRnooaZUTUJZdkEUfMps5x3iX2mMQxAeQsgayfPqN",
  "key8": "4qcWSxo9VphVSZjCXCzTyER7Fcvw6z4L87jvCNfMF9fRUeKyXNVb6CCzM6EVa1pUKaW13L2FXdj986V5BocFSSKa",
  "key9": "5h7kQzj34TBes3TgnbbvXyNBJGznKGBxJibBZpNjVg2sGV3e4vYTbUNRsoPBM9Kv8f9tbT8gvqySsDZyS3viJYdf",
  "key10": "59bB5UBDjBg4Ykhw2CgMvU5LHma2rDLNxFy3bpCNBDoHQ3yixAQGMe4zMdBcoNutmGPrxSqUVAou32qimSTBHQLj",
  "key11": "4HPQpxZMf6GD2JZ8tHriPXjrnCpioZAbhAveL6u92bah2VvNCxjtKkjDYZrAEmt3ramioKCauXChQARznp3DQH5y",
  "key12": "3BPwVJazYsYGiVu2abFYtFpprpDRg7uG85s3PQLeDoKM28QvANMcQx1MyJ3TTREo1rKL7MuVf2GWx4dG7sbQCbgG",
  "key13": "NADaGXLJhwgYfTMuwzj4n4M1cChWQYJGKJ19PjAXLHSTbBUZmmEFMYJ51tKTZdvFVvxaiuVSvyGqucQPZK8nKGd",
  "key14": "4xfVyDD9qFZcC4fQmf6n9yrRPC1t7HrtrewmJKWd7t4J5UwAZXpFpM4hCFfBXM8TWFcbWp37Vo7UY5QuiPBUYqwe",
  "key15": "4SjWSFfmqfzwmfueVS6Sva8afNfPKPwTYeVPo7TyqQD54ttMvKD2Cn32KxqcTVqnnrHjH4kpot8hrSLSkvLCGh1P",
  "key16": "4ygebMwGEofcXK4ojfeWUfJnsBcDXHJaCHp6duHLGoXnYWgwKJuhdWE1FpgdiQHfK6xzqXaeuZgSKkS2KhpreUBB",
  "key17": "1o7uD5XP5ExL9MXiMrffU513mXb41UwgEKZSzutkKYhEJrZRBcQXR9F1NAp8K4dvmdJEFzzKhUa5edzemMgyEWe",
  "key18": "3nab7EVCRrJzqHwGUmHxCP3guZup6nfWabYY2JuzLLreLEHwGq8BYgtrVJxck2Am4392YJ65yzf6qsJVhyovsQ3X",
  "key19": "4BCrqWV1pnzJq8NZH9Y6tncRK3bG3mvdj6ujX17HFAUNHjfL2hzfg5AAwkeJYAd6q18pYr4jDGJU8FuihYhcYM98",
  "key20": "tKxTEg76q2U1iCVvCkUbR3FFQsXN3wMGvDwui5PUFbqwQ1m4K8pTVhAaXEdX6TKxt2zK2KxntPrrHrwz5iKJAUZ",
  "key21": "5zVzCtJUyf6KdYh7JARSVujc6jujXV53EP53beaYJzK7wEqV84FkFXASqbdeBUi7rgVWPYodYME6gxBZ9LpNVnGv",
  "key22": "5q1TnyCtXn7nxzbsRHGDF5ohFZtpPkVehV1gnHcxf8QQ6FjGstPCMyghzuFicWxBo5KNu23bm9u2WUtHYjim4RJp",
  "key23": "48v9HrWpfVtQ7twRojD3rP2CqiB9pFV3aaAHSooUfZe7dCzRb4Dp9uFvqVwEXE23NLdptGYo9LerxPnvjCmB1fdQ",
  "key24": "5UcMiyqB2cnQriGLZm661St2BbkkGdnpzGxKCGTU4o754xpA3ZTdVtVaks6EnGd41sq8HZx3MNFwUZVyATNGR7rp",
  "key25": "5jezSj3QrWSKViZ2vG8U8TbUMKuittCUiPcveP7rfMJLvhT6XW2vmgPgVUvfyKkf63xpqzt1Faq1W4CxumgNNces",
  "key26": "5ewqjheHnFoPf31sV7g4M2TjYCBx15QzEaD7om9HFwUFso4aeow6T4hsLr6jiorDwggzohqFn4eef7QQ7UH8qxuP",
  "key27": "3jawf2QAtWZBPnmCr7svwTnXb144xfoqRksd2XrXYeY1FahrPaJBA5AAgEgEKSgjuwFyVzd7bmwcFMpRhPELT6uf",
  "key28": "pPCLffoVD69uQpFgsqBMsXJ25BYdYtVfkBW5BZ2GgD7a3cornc5LYPKRY8NdcCeuooJ7Xu2zhBw1sHjQAnFKr2r"
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
