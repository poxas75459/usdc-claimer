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
    "5aSbth5ZigX3Ygmb8Wykn79wMZK4W34mSuZtUJxYJ7X4rctG3xbfnYcRKfBmwEZrfGXJ2618L9S6PHTgZPkipRXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467RRZiFcyeQRGMzf9R61JQXvhVrs2U2QQm3z4hF1H4EHmYjXZuiCxheDfTNpBYbbratKdQEYNKiahMPWA753y77",
  "key1": "3ZyoctM7HEnP3AnLidwMuvCeHYUbjCQL2zTg7mAYJrvHPe3pcxBM9ANxQMfKo6SMndGauL9cNdUnJsyNVvih4RUy",
  "key2": "3ivpD81mhES7vZ7te2tvkSGPe7QDs236Uts36v5TjW6bKJodHADL267aTNqE7N9q4YeAoxUiTBsNZnnh6wm2Zqu7",
  "key3": "rE8s2uHc7bDrzkixjr8iD2c8bDuYDKxLnYZCghdVrnX58VoUDdbDjbfeLLSZpjR2x4LSTWiPbiY8MjG5Va5hm7w",
  "key4": "4D7zd53KUoB6nc5jbitAAkKmgr6yht1rxXeQsrGgX22dswtrmfhYaHtGzR98F2NrYpgEoRyadmxLNPrQ34ZyTf1u",
  "key5": "5m4UPuUppCKkDbJ7nuYHPiEmbxYYRbobBoiphFHpKEGV5bth2j1nmVVinpEDELtMCC92yDThKFUxoUPCiysqQXc6",
  "key6": "4RJi5777aRPBRD37FTuPp11Msab62JR6ogJcBz8Ze66JSwXjF4wgdWmqvcYf4QeW31e1jE4mgDMb8Dt8N9E4JEeh",
  "key7": "DrksaFsKx7bXRWKBZ5cYRkJuxf9MTRQQzvtst7fq7nDRK4n4Kz8gHp2DzZGUpc6MkVgVYGSUvZZQmHMa2GtS3Dj",
  "key8": "2yqptFGBb7LKhoVjTLTACo2eSdw4Zsy761DaxraJd8WP3A4oiiUtCNG1pmr85bFAefjWZCnobxfXQrSWwCHc9esy",
  "key9": "48HycExfEsaTFAXY6t2gm12r6QZ4d7oBJUHQPJFiNJafYU9FfE8BTuuiA3aE4N33ikioBJwStwFwRJwUXiLq3D6E",
  "key10": "3BM5k4VB1Pg5ML3uMpum1vLMEyakTmtQhiMVPZgGJKG6L6RGpAhAsWC8EgwsyGfNKJRjVsNpqjZUCFQJVwHRi1BD",
  "key11": "5v4faHkT4KjN73ugUaizcbaJmPb3PdfzSkYSjrnFVjouHzmDRcFd6kNLEKX67pXwJxWvt8durj9ggTVMynrUuux2",
  "key12": "5J5R42NQEDP625tgWPPjZH5JNP6ixmgQ7tLFqs7nbivvewkGHqf1mP9Zu2Z6aCLju12gs86kiNWJnS8jFEEoHdKy",
  "key13": "2crtt6iacY2rqjaf2eX7eYqGxoVkSMHZTaqt41qMCTf2sF7nB59hWBZ2Qi2NMj8XmTWAZ3RswYckB24RDgL5ET1s",
  "key14": "5psrFDTgnehEC8VJAmEiQcSAqCyoQmysiWJ6dTveog1XzdNAxgWB5XVQ4QENLPPDKkeV5g3MmU9qFn8R5g2sHuUx",
  "key15": "3HChcrFDtURy2DR9CMTUTMQYn28PUf9sShzhnRA8JVaHwozWF1D6p4gb2UnFAiyWQ2m1XTj9mJHwr74SRefST8t",
  "key16": "5fqG6Qqu2LxBNbQn4wVahwMUoD8TmEUc7KkcJrQ49pu5Sya6sEAypYyLCgZeSkG2LQfHPfRGLapeMUUBytvo54o9",
  "key17": "367okhVCcw9g1gNxqNU7ZmGoVQ7t5GUDHbsESmPd1vdWiDsDRktWnxuJc5afNvbFc58nPV5Xpj82GTQXg8CBGFms",
  "key18": "2EyhHCZvjp9dnVJKjzkFBHKNHz2ufqbMUVUCX4Z8aGVn2CNLYQ1YyMaoJkP7nTd1sPgRL4tQuPUyu17XBQRUYRZ7",
  "key19": "28qEwyjzJE6bNygv9bzGywab6ddgz9GEVBtHZV7TkAfj3Ec7kAi7gUpW4aiji37VggXLjkRSki5m5DgYxf89imYC",
  "key20": "5QGe6SqCqQ9AUQxV9aopjpSAhmJwq9ZjdcHgFY96B5JM1hv3KakdXxHaKoyP4cQNzqnjxSkG4wpdaVxHP6VkBULq",
  "key21": "5gJTwr4aP7S9zx2bipWrGWs3bjRn7bkEGMFHgwMaEeZ8DAweD4e4Xs3xS97SwRzQaYRP6kN9YfFCph7bgfKUg4BY",
  "key22": "Ykxrf12u344r42pTfuFQtitbUPucKcsHuPfTDB49oxzyAtoyB7MtpCQGZEcKjHxv5TSxVb8Njsmi2uEnYe8xNmR",
  "key23": "3d8nrVDSizDjYuLpx8wcawhp5t3eyQhnHpKmGyERsXcmWYB3YQFEBuHDEJNbrZHjSoamDp2k1hcjN7mjLjui9oiZ",
  "key24": "4j3KFdNhrFzBctFCYjLeD22dMCr1v7XWqqqEu7BHeGYM1PtNg9zVTLtHfKB7Q853eykHHy6bJUG3sxEMKeHm6dKg",
  "key25": "RYfaXjV8tFKeN5BkCNibLq9dP6ATXvLfDLQJB3Zxgxgu5C3ZfoxDewvpySASsWb6nAxfjRU5rsXFFG3yxW37Hip",
  "key26": "2fhAGwyJ7SVttucQ5nENWHcAv8imo4xCaPkxVuJe1esvsvzJ1D3pm9CEt56voWgireKyp3ZMf8tiVn1X5frnMgm4",
  "key27": "2F1EKpnoeocgXNtewzM4kw8VP9mpDxLNAEtvhcs3HxBCtbnyTqikbQKyvFh2gySaaFhDqtMc1YV6nrBmBnr7GVs2",
  "key28": "51MgCJoB5C8B87Jeqf17qmQEKEAqfTpr2dMWnipdhScwP4eiPeaxsta79GHWLewbqnSkUYZcBbsAHYZRxZGVAAXi",
  "key29": "PYv4yxEPjfpLtN23yq6XFhWhDgxv61Wpuxv11yRBPBu1kDuLRsoDTJpuTTWBNi4tuczbHEJZkHYXCgprXZj8ehC",
  "key30": "468LhnLgSnmu3bw1GqGc5JNCaE9ZRjUmFCcMiDS7T4YDRxbzKmeA8ZcCFmG3MdorP7zL3WPJDuPNXRHVwfZPNbmZ",
  "key31": "VqgDioYtVhLaeXzD744DMfJiqK8TXSETzQJj7qeoML5C2Ee6HTABYcEbLErFeakJMBZf3BtLkgF3gWmidNpCort",
  "key32": "5bgYXcNwrQ8TmgCcvbEZ4roLgeLArdDunPZ7hugauFbfRydmLHcVbWyfaCo6ubSgCLxA1Rjkw23tLupHULZ9UzeD",
  "key33": "4iPqaCTTBpddX65sr4r5ARVZT8BxYST3Mv5rwRFnSCgBvkbWJVdf12xiNDBDsoB5smyF1nnBA6UiNLWmjLmwRSQ4",
  "key34": "tZbam2wipVb2jDY3TRjcuUsGCs917R6u2P1TxMX5su9CCr9ZifQS2FGo6ZTN8RrsuZAAS15HRnCH4RJdndATEcN",
  "key35": "3V6pgxZjHwzgUH6h7z5v5Q4SSCZdFFxazohjAijbMZUieG16uoLq7kyB5zytXpkHzwRfXAXwotkj8LhJu9qwao2B",
  "key36": "4UWssw5afRWAzdVUjDro3UN2xvoifZw2QvLvK65hQhM3MS6XGTfN7d3F4pYxsejGK6pH3YEwMMm87Gqh1cQ1QVVu"
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
