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
    "2qHigpGMn4KryDWQmy1AcEsY7usWQry4SNxM1zyi8KPh2cGRfYj5aZvnnNzMMaU14Q8CDXGYjaQaj2PUxpK78G7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5GgpKDFJuSP3ojV4t1FA82qkneGq7JzCJ6i8ZJTfxf6kwEYpwopeCwfGVGoPTao8TNQ54Qjase3MKPFyWHC7JJ",
  "key1": "4vFMdTTKidkji3HBn1e9h4yVc8ZosHdD8chSHMXyALNUo6y5N1jsPaQz6wfFV1TNpC6Wh3BsTiUhmomJqPWKQ3Bb",
  "key2": "4He5Fx9X4xtLKafEP9eCVzBaUwMQZVmtWGg7qdkvB7feEdHUyEFAwpp92Sfwe1DaV6im3U7gP28tGFA8rsfsDgmE",
  "key3": "44GTM4FbcMDXKMFpJHTSVS7FwAwZdfv81SeE5UsqgNey7z4GuF5gp9F3LzFuszmZ32k6mn5yT7Nx5Vg2vLS7zdBh",
  "key4": "4ssZp7y3HTcDVY7yiV34yds2ymAvg97GKPw3gSdQHrZo8rHmjBsrVi6hRrXd9ve74dX1qSV79PN7mjvGkEPB1SoW",
  "key5": "4Fzzu58ati2VMHYfjYp3Xmt8NAG6X6SYqTnbiMn9rKbj1tRuc6aXFfrAmWCNkvRDkLeF8bF8CMAwy7iaydAeaSdE",
  "key6": "28peiqm7C5Mvbzv1dK4c6yEBmPYU9rPQ399bT6A1mFxa7c9fiRRjctoWWmup6ag3a5rwcLCo8Teeq562LqGdGEnC",
  "key7": "22UB6ooL3ejtRXEJU4TXuSBsBAzMypFWFi3GQR4b6AgEfkAndGuFq3p5562PUbkbxaEodxHUzaAgagWKBdtF3qEo",
  "key8": "4eQFQYCKQFWYdC6CKBmXyy8b9GNoohRZvQ5T6xs8guyJMNuMsger4ZA89PZYts3EkyvHFBauwnWD4c5RkyiKmczu",
  "key9": "T1DDzAVQ1Jeve3iKWd7X9qy5HQewkzDvaVLWSyGWqrGDyBW7khWucjn8jcQdtZbcfgw7xj8rJXvibVn4nrRYiHr",
  "key10": "53Aj74HmDp8bMK8eitiR6zVpqjbLYFXMmwJzJrfngDVc8FLu9fXANpCJZJdnMPoBDuKkmvdEAAHsqgjqaACuEHgg",
  "key11": "659FS1mEZZjkGQuq4GtqRb1ZS417S75NAPn7cpXB4pmSXftXjVbxEbAb8Sqb5LAbUpY9UooCCsvFYtnTb2EAAWKB",
  "key12": "39UGybd6qnVrA8RmMeFs8XWpLrnkRmnuokSRLvY92fp4ZUKTAgVbywNuKbtNmmneyQ3Qxh6QocQUeae5AVFJAy2",
  "key13": "3V4YHxnYM2fGFbD83gR8mVsLnh9DhmyP2nR2pKukFPoS6cLjuWN3Fcuo7PWwGgACW4kKP3qQZ9kcwBEKFZc3WMRb",
  "key14": "4qwo8P2kCRtYLMtPP9EBX2t72FHzW3WPu13fD88Ez8s39UprFNwreVrMJHGk7VoXrdXyLUL2QLZULeVqeX76kZS2",
  "key15": "5NeXgt31VPkWfgqWPtkJqW5vVjD1c9doUMTrvoSdTJbcktYA81xYACV6VfdtzaXtDvwuRyB5MhTuh9R7qLjhcgwD",
  "key16": "2sQveB5aXFibegpRJXXTJCpxhjhhcsszdU8hWRTCxJuahYPdwRCffpK5pir14g7uMaipNv6kT2FUHdXbDUpYtzVV",
  "key17": "A41fVzY2YiaWpgRU2XU5iNG7z5B1HbstRtZsFSFUVK1cpJSwjGEg3ZBrp1vgpR3dQ7pCEdAT15x99oguSDimsDd",
  "key18": "mxurj8vx5Tit3oosyw6rrttsE6UQutv5BQFyAV5XTnfFNxJbFSvLWNn6mfWPiPf6RaWEXW3uNv69dJDKRGbFKaj",
  "key19": "3WDr9QFbhXGFrnnX1DA5M3eYnX5Lchm1abQSjseyia6Q4DMphYCQU9u2ar1VdGdVLbBmgpeu3Nj3xj3eQS6yMc8s",
  "key20": "Vza5Dvp1SWjz5eewXVsZYnaSjVN3nb7FxL24BNFXjVbjT3i3XBSBwaJpAn6J6JYRBK9TK8sF9BpfFfca14bBGUF",
  "key21": "55sHQJ49hFbgq4qHMwH9qQNvwU6GjTmMaEW4Yhpke1siwEmobRCtmUELhtJGnkEJcTYgJNivcswSpJuWssf7SMSz",
  "key22": "4STBCWfEJhE2zGyjgBMn7cwjXNHdKESY6JAobeU7j1KVEtJKZjrpaiTg9HKobRBhYJPKUmLg6GDK2FSxg3khovr5",
  "key23": "5pdxb9spZAvabewLc8xEMqtevCE6sQDmn53CX5krtozmjD5QGhte1CsMNsYuxmtAUCEeGtLyFugLn3jRP1rWSmxV",
  "key24": "QaN8N8RnSQq5gM3fVh3V5qtgNEqumBnjYyHX5s3i4txsxKHX5C7zrrEDPhEgyrn5VRCt9KbJ4frjs78CZYvW3pa",
  "key25": "3frKaq4XcenoMkmCFqTVWS8KhyEkwYnuT4GCLizJbUbNVvS2BHQ5xrMmRmvnpG8AUpaD2EQRC7nYGJM1WJipMyRg",
  "key26": "2DxnFKg6TXtDK6dJEzN8NFtr92aV82mYt3psGTDHV8KTzi8ifJC6UexLkqCWaXbnTZchHQyGQkwxdDxVq8dT3eNs",
  "key27": "4DFfzNrJoXumjL7TjYUkQ35R4cwdjELScajJq7N18MeviKS7vSX3E6ABLu7pXCTQAKAxPZDdLF14U9V1QimXzVg",
  "key28": "4T23KzUXr2FQUfjjq1kVcKYEDwfhy9zrGLeQ3iNnpHD2dkNZC4d4LJsY72mrNbxaiyKCJsUQ9i8haYisySp9t6Wm",
  "key29": "25sk1YG19mpJJnAo27k89gF3MamEyMA6xvMRSoV5gyJU9pRq5R4uZyiRdpKsmkoiyZUEgJzMZ5rMCbJM18hHtXBw",
  "key30": "4C4hDgZcSVtz49MgxVQgz4PsyXJ86u7jdpNhu7hwRFjUDoLNwDjGbpm12W2Mmie2qAWwWH8sRpd5wiYef1V7c3bW",
  "key31": "2eX6zrrBQifoVFdUxnKLAKu6uGrzd7B7c2SeJ9DyS8VEDmfugugbg2728Ss9mrhHwjcfxqeGEzQgFeF1d3c8pFZp",
  "key32": "3TmxBLsoSfhZqUWecV25MeB9DUxPDJLr7W4aSD7b4HgWk924gYbJM2fvVkC4sj1RQ3rpwC3oU9XP27wonBPNLpzP",
  "key33": "2nFXQny9CyT6mneq2udH3fjU8yQcLLuKqo8HJYzkYsNHuu1nWMXNJqurP1E8uWA9K3ZBeD3AzWeftLLj71cf9wVr",
  "key34": "2SdC3w3p3xUtNSUX8NmvyfZbvy9kfR76ixbKeafqjy44Fvd4Ahqgvt5NiEoAVpcEb2p8jP53Q67YiTSaikbhCivM",
  "key35": "jNraqLCq2Xt7SbAMaZgFvpeWFFjqEqSLVQ2uoqxpbRLDoC2DoWiasQuZY9ZLqjBRgbEegyDsBe8pfndwDxy2vjV",
  "key36": "4KWdtMfXPprQDe5bu4yK9UJ6PPT62sTnyeK2fuSiv73h9da1vfuBbiZHPTriPinhre1AJkxtWKQsuSJPkjEGxmQB",
  "key37": "2bGdGgkuRKUXvULWdhAmq5x4XXNARaPQ1L3YrnZ9Kd3vgpipprJ6Yf8w8oUdcVC2pZXbaCaDWRVUzwGzJuEjMbmK",
  "key38": "5Uun2Bp6ds5n5M2MLFoYYpvzSLybsHnxanMSUsTJqCYDBK48KiUvg5CjdLAAbRs1WJ8PmMc5XqiUwwvnA2MXikhT",
  "key39": "535w6CMfvTMyJqyyaXYb9MHiwSLkNPvEy5pYLjmEcM5tQtKL6Hhu7ncKBbwXG4neh3iy1dQimAGXnHbd8WCxPxtu",
  "key40": "2psUh5KmXNhgaLuKHa1d6BZDGbDC33orH85rBh2Xo6npXYeUmWN3SJ7Z6TWzZhh3sZCgzTmFsYagS2MRdehc5QJZ",
  "key41": "3CAezs6NdqAk1s6QRkr9c29qsjD4SdrdVeCvgExmzqMBGH9xG8zVvFVAsA4X1aPsLMy4WwJnZ48NEZD4vSVYNTir",
  "key42": "5giq8xeC6t5Txyr5Y5YLgCcG6kh1gVSyEotNmxqZmeHT85mFaKVDELF4uNVM21NoPwrcjPgroPdQsKMEa3B9Rbh",
  "key43": "4qKDRD4pyUa8JaB2P8m1D6bKAKadcMWjppNCmC5k3Ta2Cu5DSWbERKp6FzGkbRmNefjyhD6Yvcka6BfouNnY44ah"
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
