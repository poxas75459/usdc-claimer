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
    "5L5MkB3bkVgbBujjXTCqFdf9EDdDTm2iT1YE8FS8We1nsVDkspofUdS867T9eXjKhvgSebnmSzwwoweSaXCP8L8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1XvYrZAhFdqkpS1tTkkL9pAf4cR3Zpo5DiG29yDRgq12zATqAjYL9BWVf71nUMgCdAHu63TirhvEfXQoaPUhgB",
  "key1": "5iHKX7mLPu2yE2WArXZy2cGWPqMr7SwCyfL9YrhdwE56crzSA79qczqUZKK7ngGnx6mve4ch1VeUvQ9ubDHnwWy6",
  "key2": "4ERk5nPWFnLHj5EkQEwrhTrbRtyA9FHDRUwq2WXWDyKqu9cbXWvgCiKPqZVUrLZiLsyVF9vwSqdytTyYn6JbJjxd",
  "key3": "2XtHy1aE25LkkmH4e9Q2734qTagjTz2KdnrgSE5SSRQ2DLEtYfnpzunYC3nqySMfZWJdNe8N5KLe9mDYfn5Mf7UX",
  "key4": "35AxA39pT7WbdwQfGnHS4Srn9MHzyfvcod9npUwGCQaWkVkhRSaXVE3MU9gGiEJ9KDF9FGN7CdafbuudSEeDFWrs",
  "key5": "4VEVrCBbMmKj26dB9j1FY84KQgL6Jr9kQP1rd9rGvqHezbQtdpsSP9nFKHSbmk6VWpDyA6Lwxx5h4bVepCiSm5S",
  "key6": "2REsGwkTgZfXwUHW4Rnne1T1oCZ5oxDErXt2prZEH5KL9pijghwjLJ3Adba7rPgJaNMfGtQWQXoUxASBfbf4dEbV",
  "key7": "3dm2fjVeEbvBTS6HidqWr3En4MkG7cLVTMH7ETcwkgtaUNJiNyHW3EksNMjRDYCDz9H9iG6NzKbzehbVNzGJ7q5a",
  "key8": "JLFueEXw3X2dyvPKCfvptsPJKKEDXLEWewN8w2mBoVrhT6aozepiXdqejndnpk8LqQMonLWd15oPnn1pSiCyFGd",
  "key9": "2zMLCcoGio9SVe1QLTibp6t67javZ27fD9X9hUfbuYCAMVy7bzuPjZc9UzMdVDJCwHSSqk2TYDbTKfmzkMAx56e1",
  "key10": "2qHZpqUPpfurogVL8hLR5fW1CEF4Aa86knKeMaAd3hi4ubj7qiCBrbAdZdgaX8zXDMNLLzjCGZPadgR3ddiEbPax",
  "key11": "3E1FPreYcJVWoJoYR7CqzYUsTuN7sFZ8iZo6BdrTCX8KsSLWxDfiVZPiracvtCTGf4zYmsHmfNL5kf9rLK4tmtcc",
  "key12": "5ZKaZ2VVmNStJPdWqj5UoxBHLEidByfb4fiuLFVHX481L92f2qpZMfADi4nRVvHMzRvt4XfBynsJoxgZVYsVUv9y",
  "key13": "4YQtXNUpY8w8YKy4D9799zDzQra8rMhxgyZVPDai8SrtT9CRSZ9xQxhafz7jEsGviVorE4ZH6dEHPZQqDKea68CL",
  "key14": "4NavNRDDwcMSQoev7RcHMvxsY9fyMWdAJs7AYmcvTVYTXtvHpk4KeFTsJycXh3sQjpe7reF62uPfhcKNXCWeRJEZ",
  "key15": "2SwVuWWp6gXgmtZzw12MBkYf1jJwbPK7VrW1rtfdNAgLt5ebDYUneJ6Gn5v5ZhzU6DjakgyxTZC7CjmwCTpr9Fyv",
  "key16": "675N4kVQHzJhMPkmoiUWwNgExPT3HpQPLYiaeBAhR2VVEanmX3XR1S3FC8iqRCCPvKfTUFWTJXdbzrV7Wx4ETF1W",
  "key17": "22FVrN6bqP6e8buQW5jt7bLfpqA6agpLUJvdaTDqVhiQvHzavsioNKZTVKLfmXeJxYDxs58m1EtfjPJDPXG9wRpm",
  "key18": "3X52d8ww93KPjjgVMHLsSHLE6BSAtyAwUGPQuN6ptz3SaeNZ4WMKdNg9w59FNHtqhra724QNB1vnz3V2zRQEu9N9",
  "key19": "5fX8GmzzNErGxfvhtnRy9JNLqcgaXY8yRQnKZQQMkgAhbAdyWxjN7vvjD1D3QL5i3p5An9SqSN4vihBfohs7yMdR",
  "key20": "4tBeVbFNuqkSvk3hGChGHW1TcRSks8eGu2w5XAZWjCYG9xejNH1QhjSyKnk4scg586Riy5xZA4uek6xUChXk4dED",
  "key21": "2zoRiT2yCvsp6sXJRhdULiUWydtxcLw3QwuX9xzS4eqq27MXNg33ZX4AfcwY762G3WKq4yDHUTb42hZagnvtJRRa",
  "key22": "5K2sTqS4ui7Bwdx7U74LD2EugkFGpv3pzZgT6p5RDVHuTJ6d9W2uqno8sRrXN3MVAcnWMFtrctWRQu44kGSg6D5Y",
  "key23": "ipQRXj7dHMeiNAodaowK1kae8rWhP6D3Zo53roq1QXVGaxSxKGCwi7qheMNzdp7R7GWX4aHKrc4DH4Hfp1jxbkk",
  "key24": "52vPBQDuWCLfc5QfCNGukFjw2bVw24tCGFyKKApSbmugAv2EQXZW2D4mj9cLX94opMTcHULdZo1gLjpD2j5eREhn",
  "key25": "4f9iGhPmL4oByFLUqgdJBg1VjJGLJDXgmnZrBQ2Re26qkoUPKBexBPXvBmEYDa2w45mufzMsZpehkSCSD98mVw5n",
  "key26": "2vmxEBGhGtogdv4sAt5pZcFaDu3TAzumCpTpgvaThzbWtVUbyXUHNTD8V5wisP4Ktx2ganXNGoxow9NWzKRKYHMh",
  "key27": "3oS5VGzsDA9gBmeEAWziwmH5fbhVxKUJTGr6xdBaNVgibw3xFCXp4J1Vsx3N9QjMmdYgfrLCL8WTiEHQs6oJv3GV",
  "key28": "2GobkP7aPcGAMWQWJFd64cSDskEqW5aovKVu32tjeApKigAhKyHUP3WubTjeketbQ2ejaYCTjeHSTxrtMuGkjvTi",
  "key29": "4p57CVL4wExMAi8P7DL55qdkDJw9wmFTAweMTigPRjS7BP7dwpTrNGZtE78rL6sUExqG81ENtoXTF98rR6Y7rGX7",
  "key30": "2xYQoU7Gv9BRB79veZ1F44VPjsQC29dGEe1eq7WukKJLmebxuWgjaoZpvwZCofhDcVKDj7kADKgxS3ko5fHoMBKS",
  "key31": "5fCzzbgQXQuCwAcYFUYTMpUQ23fF5efzMj56Sw2h21oGasyCU7ELToUHHXvbCAw55tCnhyDWGWA4JKVp3zwivZm6",
  "key32": "4NMFhpNnzQ8Nc158qAY3Ud6cghghrr37rGgQBR5e2nBrJ7ZAjtA5CPFLT2hPwQYAr7UhgBJ1hMU7oWpgAQmLcPa",
  "key33": "5tN74h1ZZBunFJPWSFTbEEC5ZM1p2pAXgQn8CAfiJYfuRNLRmCx5NokdDzg8x35pHz3NEs14Bb58yo4chs4bS877"
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
