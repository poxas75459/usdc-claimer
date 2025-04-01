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
    "5E8XJi9fCsjgsnXbbW2Uk5LwkkxRHJsnQGU7JWNeFHeJ5VzkTmL3FVZDmsr47ebHq7PhjLdGgtWn9Z1VG6ZaV1CQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwav1oZR5SksoTgWfWVAhM7skLa5fKf6P5UfL9HUnmaMoxwGQ4YjLSCWD8iYtDCA63tjbQcYL5i4aq7VgEQD22Y",
  "key1": "2mdGMwQ9Du6v6LTgwKUt73sGMHYuMMjBzLfGRW3UGKE5f6oKdkcCmTPzqiKGwXFWtZaRytvxHBfrwcs5j2mLUEbg",
  "key2": "4Bg6Qjnr5MTPe82GEyPScszbgttv4vx54kMz1aiGiEWf7TvTPSf2mYge4nsykG79JcZFKe69grsPX7mBhZkwgvYY",
  "key3": "5GT2bW1byv6jQMThRYGPu9XkpFZM1qEGEiQcATVWHLd8eSqt8dyEH6LRXB6C88VRsPevvfmi2VPzpBqsNfXxJSDM",
  "key4": "4c5qnRBst8VKnfV8jQrqP6yu8LFu9f2Qr8vwLLFADMdaw1bBbDbTLDR57WjmkMnsytMrN1LdE8yKYVUksEySTnjQ",
  "key5": "4QACxx14DwzbJz2fBXfE6awgmxBkhzvmjV8g2W8J78murzZ5Hs5HQw4AYJ5RmD5rMpH39RgnHthux3B8FqH21PDb",
  "key6": "47mU3PVfHT6y9saeujGZShxVFRxGitXVAVwHDdp63TAupj5Jm96Tn9uxgRwcJJE6Vh5AeVzFTb1ehbXWF3XfHwN8",
  "key7": "3J2qAmFxzsjTQz2yTeLZzxvAcyFndySWfKK5n1VceRHm2ubKhz9cJsJv9tiMy8S92huggyYr5Zu3MY8a3KdK2tx9",
  "key8": "3JQuucc2SJbawDT2JQurwQssESZVUk1FMnXGpoq8dYdGwzs3FYUeVrd34udX2XND7jwUaiuoyz644mXBaJtrARTE",
  "key9": "4o2nBHDeDUDxpj9ebVb7MzJm99jTR9dyjVvdyh6fn4nQ4T3eCA3HPqsHLkHvuUSL6UnJtA3CXekDFAgvLFJfETZe",
  "key10": "U7FTuVSQjd4WAFGMZeQRCVSag879VrQRku3KXFKCgvakMHpCAyyutFFKgyqH85H5Z9XN2yzFbGVqw1iJQv4jADP",
  "key11": "2bTkLxWopYJZ5E26bozkEmLQyYbwp6SEfXkAmuedZSbCMKJDLP6ViizanV9TyFMNAHy4Kt9LwNWzeqP3fvmDU1Aq",
  "key12": "5RbtBWgxp7YRhYzyk1VsMoXwjnGrZr3rnuoysfrs9GdTTBSqq4QZkCeW9VGSvfDdJxfg9NCj3KpAmin5GiRazPkL",
  "key13": "ho3RMgYJnREsdzmNnstyz773EiShDKj45jSqfCnvYgvVQGkPo6eJ9yRjExHY6hdrGu7M3e5G2dKMNyoNZAS71Cy",
  "key14": "4uxvxE4jPtqrwpgrcQPgwuWCQXJM4HUyAKeQENfSnryxZ3bnMPfmZe6NqCENg8rqpGaWnYMm9PhnWQB2o9CeoJTB",
  "key15": "2X15DMrhVi86CFi99QXUTxYG7KBu7rgJqueaWJg54P7sVKRhrDHtXsCXAGpPSuEJdWjprzyydhhBm4MGBpdEjohe",
  "key16": "3JZf4aJjq7uy9yCa1ixWvcjYGhWWKcHSbVXookmgN6X8icGzGAPdNdbDASp6imaQfEj9rtLEK3fQge1MgF6nAjHg",
  "key17": "kqicJDMTBmbfbmFPjYPvCQR4KdJXfKjBH8S31qxHNPBPCyXkR1T1GaiowaLMxFoMgLjYPHVktnGyZeGiaPkNhQB",
  "key18": "2pNTECRRo3rtxLFHKN7eyQHbwJkGHm4GdgnkJsU1mphLahS6gTMZyqRsqGhHS64PShvBp3xVRKkmDHrZ1AkFuJ3Z",
  "key19": "4tBuDSnY8zMGyo9zN8Ah6fEDdePK49d6GgZ4jy9eKxz6prY6xaPsmBRj5QY6ZKM9xpTr8UsVKM1NFTc9j1AirHqH",
  "key20": "5hYLc5aFZTDkc9LH7jSYfwFtFgeptBXA6E9bY8mHm1gnVG6uGZfHLmMe85WvUBboR4VNJ5fV1G6pSkcFjnohCjP",
  "key21": "5uTP6DHWCLt6PJTJwvsgYZH1AgSWE4t3GNmn1iUXC52hjidZcFxJ86YztmfZN9xnbsy9nKvo7jUmsFJ8cvY7Ca2V",
  "key22": "49rJjHPGR4DEEKtMHs3DGXMn4H8C9sGp2kx6Y9b4aF9P6xnLEVVsNK8Wsjb1TDLKjXGkBgH75WwEuqcrF5t9n9Pc",
  "key23": "Fv5gFBiFum6BwFbNo2PnofZJ8zWtdLLwGAcCsvhWPncwxFFwz5NrdqXpeRpiVTFy2YonBWNtZSc1LRLnaK9sdke",
  "key24": "4dFpk9B2DeNMfnUDk9gzxTuDryr1YMQpFcWrQx8Eny1GS8rzaT66yaiVTD9cQP36c8F36cHe3MZZSsKsjZUBgXWA",
  "key25": "5WbfMoqHkYKP668PudWcofXRBAYQ4afexf5rJ6qvnFRBx8VbHuVVTS31pEikmkCwxehx4biiZ4WPTtoaudyLtQWe"
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
