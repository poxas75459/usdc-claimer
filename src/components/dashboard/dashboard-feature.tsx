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
    "4o9iZVdpnQmjnzHPTVRKK2sQgzpU96Tne5idHVE3inbdxmiJVxjoFqUFcnMycngashvoiUGcdNzU4XgKHmd4R1EC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfexqSFxU8GuANLSxhjrnHqbBhV9N4kdbnvPFgdiZdK1v1h76JcaPoemQ7Y2TrWS4CaRSzd2BYmsGd25rSPu1P5",
  "key1": "3AWTGNGjDuoRUtN5BBijbRVz5pCoJN4BJW2216psf1aYPBsKCgifRbnppWQM2NVsjuba4ftych2FmTzy3F3jRwdm",
  "key2": "5abNsL3LU19RAQ3rtvh6B2AKL7JUWWpCFKeuwu7athxtXW4ECqdgXZzFNAJ35vNcZZaPEPu5QRgDpJpbVqFRERwD",
  "key3": "5wy9pFKskeZh9oXSaVRE5Bvd6muHnyEwS3bGiXqpiSb4W4nedYjA9SxQhmTsoZura9R4sFKrqWvzA5ehA8UJrN13",
  "key4": "5uvgyhKHfFNR2LBRuzVQjj9U4srpz5sg2eFrjsuMjiALB8Ru1Ny85GjFYJhsgBKXbSuQQ8dZn4Eo35fe7TpALta1",
  "key5": "4HxfMm6m8ETGiSzceyJjWoMWEXHdZr5bEMF5TGksiBsEoRe9uyLjYfSrNGuGrgsu8HZH7KuqcziFRUC9hyJbY5CV",
  "key6": "4bLwtevyxyrGLWzH1nZajDwhuEpktxhb1Ey7sgJmVVp9Q83qyGN74FJ8s3rVvLjaiQvnh41G6PYycfZoKar6mUw2",
  "key7": "3qy8KkjRbZgXwVzBwc4VyA59csXnvCsPwUSAoJpZo1NTK6GKwSPAWLCrWryLNHpExsm22LnSEc3PoSx6QfSLs2ic",
  "key8": "3yTGx7JFpKyN33qerV5Wug4sqyrrm2zxbYEgNvXtyZvyn4zuUrreMZCM4vX71Y9zXtd3e6BTFU9ifBzzct7SEuBw",
  "key9": "xmbJv8d6WRXi1RWm7yFCSY3FCxZy26XcmwwMHF7xtofg6bw4nUE7R38fR5Ctuji296PvcT8hHmPNyuYEMSjVeLT",
  "key10": "1t5UXcPpMKBXifL1GrUcpPp5FQPbo3yaYcQ8HPpZ66s2D7td11NGFhCh47XnCbbTPP3HbmqDryNUkJC6gU4tgy6",
  "key11": "3oNELCFvofNsj91UQ1uFDKaQiGhw5BwfQctGx6g18VHAHziMQG4M4BVRtYU9ZVD8pWT8EUK9mgda4XE7mxkKQ5zd",
  "key12": "koxsRYsDCsw5WrYnZ81enGZCKAaXNAQMVEKewdqJQ1HZDMKut9LFM1cRkK2ifPABq8Go4avNqe6PugCYJ7TozCB",
  "key13": "28iT9TXus9crAxnzZLmXYLXSXAtrCDXUwoUzZrcvnxWsEFJbJdM8M85Sr9uDorGnr2xfAXGCrDhi7rVQrCtQtUen",
  "key14": "4R6HsgEQ2s1XudrpxuFsDhMk8gLHL6bjaFWLMfvnuiYutmFf2mXJ1xwSFcTgC9BDSKHMwdkCMTuTVrcDmr5in8C2",
  "key15": "47TecZz8byzYu3iUzfkKfoWAZRoaNbAqAVo9xGu6UDa1Hhehvr6uVEHbP2jRSQWosLo2s3e7LiRNCaFinP6ZNkTX",
  "key16": "KmfzVUo2Eh9C92FeebnRsWZkNnU5f5mPLDXCFUZxeBRD7RSHN6YpfdAmGbwZfLs1c6zhktG4mcokWCqa9YbiJtM",
  "key17": "4DmZPJAJLzHNKaLmeJ5yNHaEd6ttSzCFE1dtzL5JpapwmG125y7JJADd38KPg98Qm9FNtu6hjGNVgQcDQ24AsF3k",
  "key18": "JK18Dc9jMHH68jHDF5wcc7ei5kBYrQnKfnc7EVAqSCF3opjAZeVp2eNfSzkfDuJJcEXXpHa9vRPCCdcTddpxx5t",
  "key19": "3Z51Tajj2ny39MefBgovhorJYDZow9NwwgQ6ZwtNeUcEWFMXRi4zdrkNo4Fe1TFmnU6GykDCjYS8cPb3ZWtcn3er",
  "key20": "3c1FZqCDj1rBKavKTERVtEWunQF5eVmP97yP3Gjs4t51QC2NwE5P43ptUBfyRLpjEGzCKH8addRf1bqC6N34RwJF",
  "key21": "5oQF2aH2a6haLjGGf3BZawg6MJSjJE1DP78Tgim3YzWQ96tvVbt1fEmc8HmQNASwjbkR1WQmHTYxTEyusL3nQn8e",
  "key22": "2qwpAJagmnREnEyTjgcy9kjAb2TyeVYYPwBu2ZCNqimVHfFYbcXbbVaXGVgQU5CsZ2PARQv4EpnaKUDe3UhbApHt",
  "key23": "4sdyUVHGnUAFATtg2iNSK7Win5engK3u8KkwbP9fLGQeqiDUHYkTYednJaW6QYn7Dhs58GUh19bd7s8T7qiKhZTT",
  "key24": "4b9FqRJN9tDC1KRkRtYwd8R5aj7VgU7YSZjGZEE7U5vqQCoE7s34FZwCATp4Mv4xNF7R35trgtSdf9HQ46GnAn6M",
  "key25": "WjpVRapRr1o7KRK1uznztnMhPz8fsn4h2Hhkx5Mx4bHEQ6FfvL3G5xhcpYidbLx3Bar9Ybvht6bKuRHYSiFH1dw",
  "key26": "3L5auiWCc8becZa8zcK2UBHXvSKpYxrGrVH2peqgx8E29yobg1XWQjDFYd8MijimQUVh1XRyWcH5pShzj2tDh99K",
  "key27": "4bT27V5kkrACiLZ8b6u735vnnJQgv1XRzei4aeKMvTnreH3fXqykKDrYpaSz2SocCQcCvzLEdNfLbNeAoS3BNTbs",
  "key28": "4Tyow4b15es2XFx2JaGP6gYTNXzxwz9QSyjneSZk43QfgUCXrSP2e4cL5idakrv1TFDwLQyY32XLtokAJbGFi1Zo",
  "key29": "5Vk9TvvPXz2ebWGXA1PzNrA2zvQuHrVg6uHH5kXxibuXr7okuQhW9WeMUUscCb91dZNnLHyAxkdUrWamXbQS16fH",
  "key30": "3AKDURiqZxBg8MzkzBT9nEoE4QFL6Lodoxt24F6DEmWWqBcQX4jdrSf8ztX96QuSvxKspoQRLCs3B3b8sybZrCWm"
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
