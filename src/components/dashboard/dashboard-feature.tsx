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
    "21wbuN8WT3mkxPAGyDzYZAzdQoifqGjsYrRA2279K8YmMRj1zT3JTVBzRmsJAvt758w3dBy8j3HpJyejGbEUvdeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJDiwcpfSou6XeB5VSQjVXGZPK11aUsuVicFFkUU1RjioYBKBML9Fq4iYqi9pimQGikPWK5j8QiG4nfckR5fevs",
  "key1": "KgMiBbLaKsbNB4ynXA4v4uJFFLkoi5N1qrHjDqXEcDVc5hgTVZDcZrrDqU3aBivCZ1kDX7f8aHbGK64qYrQ9ciS",
  "key2": "3ASFRLGn6eUQup3L3fwnYHuSStfdRHvN476T9Nx4QuA5N8cbhD2DXZkQhfGBo62Gc3X7csLFmJLZCR7NBepw8b3i",
  "key3": "3gUb5hQBwgjSbCgBMdcX5aWLMPnQYzH3ZwBxTAr9RZxW6M7zkGR3C3b4DAbg6njR44tqFEJJ7veEaGNBCYNudwSM",
  "key4": "2h6wk7CPnyr4KaWLxGrmXq8fsEq3WKNVTr6VNp7Usb2MQHTA8gc45j6GZukNCtntEKARw4W6GJkErhprUyP9aX4x",
  "key5": "2nzKgv2iXVdKFvbAxTAFLU7QY2QDPSNCUu5fRzoMQLRZCPbSgH7FCunH9bTQuTtMautDjVyKGeqz367PeYMMsXVX",
  "key6": "psJuG2BuaiNjnAtpT2X8gZbCPgpGbrRH5GURiCU15u685SKAVFwC3rwR4RQKMJCsWBiuQtTWpN4RXKKnpGE6oCp",
  "key7": "4crS2tHGHecSTiMAFKfZe5e9akEzjMDx7GVvyF8xWAtUugt5kS6pHCeA2mQTcrEF3ptQZPsJCZRvFxnBEui9yjY3",
  "key8": "5aANRnmihjHRTJCJRnJSqAGaV4e652B9J3MaqLqRTMeTsyGWTcCWMspoQFxF2MSrZtLoR7MwXkVekTjwo8CDkFb2",
  "key9": "55v7G5EkKTfovQQzBAT5P1pYjnWAnmiKwNc7dCRxkRcFfuoaSftNvfNAAZhVcLDeBuHhcwifPWc7s5KsoHstvJCM",
  "key10": "44BLTgSJYMxdWpsKohHvPPXS7r5V7oecs5eTEcQwHV3Y9n3Z8XhsGpKFQHk9QGVGMBDUyi5ahtFuz4FqT6PLcNRD",
  "key11": "5SeEJNfFwqp8v63D716Bnhq41ZrwA2MHGzNMb8qNg2VqkeBvnXRocUhnFy1DskxLuTMgsUQtuEbP8askoUsMEN63",
  "key12": "5tCUiRMTDaM9VRvhGgBeKWKhEwwygaw8MivA3tAhkhPWoAbTyw2SvvH5WAWpVFkCMNrxMqoFWDA8hY39wQ7UerQE",
  "key13": "4MGb7uqg9gY5bg83Mt7BuAyv8BD4CMAZPjvqLJayRoqtFidbEkwSwZKJ8AHueqWNk5qPfnwoMoJ1jNJCMPDPdpNg",
  "key14": "4YYc81GUcCD8N44wuD9qbEfjEb6B4Fic3Y7s9sDe9DHYKvbNiwJrLuuKGmyp2ETtWewamLAMoYU8LGW132GNEYfy",
  "key15": "2DN3x5J9i35WAVQdTJyziWgNqf9AWmRUdL7ZUsVp9ia3qcjCSXihRiAb2s1FvuUhyweigDJqPTGcFTPuoUrwdC3e",
  "key16": "2QWjEugYZvKbEmtHtp9jijQAPzwaqCUbK9dgetYYcxpLcuV3A5JTKtPtMSMteC7AC19Uoc8QWBAq8xBsSV3AdCUq",
  "key17": "2aC6iianH4gqWaqQE2Pmf7a8UrQc797xMpnLs6ohgqAfA1mYXpzPcxnFTVvnLCwb7K24MmyMdVdc7BrUqPFuBiNy",
  "key18": "2zmUL39trPfLP4ECpP3XSanZjW6dpEirCrRtW6Jc8fwWEDQRNCAtYosNMtejhb1oDxh6PaWznGYATWLoPW15FJDq",
  "key19": "bBBuKCn54yCw7o7rDiv6EFDcRaVuFmdgkeKC6jQhWxb2KXYfyrU8BNCmauYgNJ83ursEb3jvEaQSV9iBuCNRNbs",
  "key20": "y3dMjEzbpRvYAFGwcNJG1Pq7NJ7x7b3QGLhwpVYm2EwomySrCdr1x5xGfTmKpx7Gnhk7XBhoy262FfaoMERXF7i",
  "key21": "2VsPiwjbogKNAvVfxjVcVhwpqLWfYKi79r6Fz2hw4M48ywTLBJzMdkbqR4XyYS7sdugQjk9FHSD5q8XVW5siJZsr",
  "key22": "1k8HKuiwKVSkHRpyvitfedYRNdoyfpTBVxuEKUQeBL9ee2LmxKGhrges5JGaQXbTPYmQQvU9mo2JejzjcGyTEbG",
  "key23": "2PvrZmycGcpvAZwoHYNuYjYWaYrzugwQEt6xpMhmndxanPz2iUm65qhWA5rWfYwW5mVgDXQKgYAN1p7hE3NghYdn",
  "key24": "3SDZbB1H5r868mC8bi8q2npBHUw7FHgTe23wmwfoRV6Ws7PqYCCj5CgJg6woepqBmUMtLBtVhKAVtYET48YUKnak",
  "key25": "dQsquQppiq4C1Qx3vH7H1bmP4K1AN18813AL4U22zQCMnQQb8MEowENQtv4Sr17SmJsQksTsJNaQZMLFtafEnHW",
  "key26": "SBZB8AKFMtt9VjoDZJtqE349GMDLWSeVXMLwteizkWy1Qf8Mh8Vuc1Az4ySKeGsKqw8b1yLYuL7f6sMnqTuFY5d",
  "key27": "5mydWonv9x4tWg8ZPHRr3Xfy4qZQbHrRJxTq8CeTo1cZw2rz7j9XMerhthTCLk6iJAqesFPJjLkjXoq6G25tL3Kz",
  "key28": "pHRjRRR3g24S2SoUDFmWYSggkCiNEVRJpYLofFgGDPiLXwjni6t7BoXv8vQkKjC4rVGLHWSuXfuYMLVs6tdMzLv",
  "key29": "52jmd4srMGFuQpk13gJfczuioUfa2LfpknctthJr3jkaC8Ep71NUs2kVNTZwy9Me1mLf45dZ89T1vZmeGLrHwvzG",
  "key30": "51uxUyL1fBTA3qBUooyLH759uc8AX3jsFvZU3bcbbnF5y4aBN6WNMSymW1TrtgytLhWd2aZk9UeKRZT6QGYsXgXe",
  "key31": "fK61bgRMkxFgdSzESNt7C6ofR4vLQmgEmqwD8Ha4jwVi7jrBgGthayyTKX13u9mVVg7VYYNLpjH58nQBLSsvU8c",
  "key32": "4geUDzeoUZBaEQsHZpqLd8g92YEJWYmzCqee4VH3yM6czmSi2Dr2LzNQeRAhaW8jt2FTx89sH7qAszjQRdzyqjN4"
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
