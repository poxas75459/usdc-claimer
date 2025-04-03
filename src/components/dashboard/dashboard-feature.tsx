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
    "nEjAEiEkZyngS5n5eVoxVzqMA2KpcVY6LQyjTefeHAG2erwGPhVFbnAr1sFP4z3PmyEtwGNz7vgbBRqbp4n3kju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21nkPHYU5iKwVeQ3vqRH6xaCM15Kzhvxn1p8EaJFdrDeCzJVWVZaRg3sc3SiEi9qBvdLxYx16EiRuqgwQ82Xne1h",
  "key1": "3wPjaPiASwKxKt1yfLLvbVjRzYUWuKyM3LSBdGQEnz8XjLD7aoCD858WzD5mo7c8BoWtsziYd3o3gYxZTpWqEkNy",
  "key2": "vRPR5st1DuXfPhXiAtuwkjJZ3Fr3GfUDVSUz21cQBwECRPkbkPRbXeJo26rwCZbXp36GTW9S8gGKzfMUK6v21E5",
  "key3": "297GndZirRUio1iwKS7YHpoJvnWyBxLknwCF2AnJtrqXUBGNtdT9BDFbr9DfqTiXpHX4EPgGhKiu2KoNXTiXMJVW",
  "key4": "3soXz43r2EPxt2yUbLGqvGNncE1oSs63vZ8ZGSrD7empgoFD6wb9sxNnCM1SDsdg5oscvaNAUxx2GYdU3srmYxtB",
  "key5": "SWagzGFiyxPcM2r8BrH3h7bmZvzy1uNk428rji6UPLZQd6QZvQgsvMaUTj9Lx9Snarp4quL3j1rqAommvrpGRXh",
  "key6": "2N1PLrPNkCyHFNWoSqwsPYLV4g2oDsWKastNPQjBK7EbtWJqSm7Q77McuNzGC65TYH9JdRiC5gNCCUBjcAZWt7GG",
  "key7": "44BJuiyS9vYrqNChpvN84tRhXKDk23HHs7FAX4y7sJwLbdWdFgzKx1bLC7ruxJkB5jEsD7EgQY6UmxjeMWwRWnBs",
  "key8": "5hbC9yfdbZ9T2P7kJ5FgqxRLnF8mH4NJrr1C4ZuEGf9pHG65BEgToc9fsBD7AmEcB1XuYV3Wyv8kqPyrAfqFXVCy",
  "key9": "4kZ58exaXHreaEzDdWTjws3Ht4qnPYLPc34B1uYNqkhHiMnPTrNBXwp4CdjufrpHrPdyoJfyhiK862jgMyMik7Xi",
  "key10": "5Z7R2SFajaBBZxYt7YdBgzDGiSjS7VGL6ZRuPhY7qf4EB2n3eKsUuCizaMRrNxFRsPYpfpJNG8nsBBhTUdcnKEri",
  "key11": "4VmTNKvst9Ge9ijNC2ttVzDaxtEMpV8fGY72sHJ5uGoindrHs7buY7BCVt3iz9rZnxvP4Wx9kEeZqAvDuf3A1asv",
  "key12": "3YffGnGzFYDQsneHX6pwmCvA1WMKkwtY4chWKSvsXyM7gzsfDiDWRnNBbkvRCabktTsPZCoH95guetgCbhyyXynY",
  "key13": "4AR6SqvRSinZknvas6xEMN58gHfzHniPNWTSYRFLJYiHN9Y8ADHwGzDnQwxW7vtGnwCVWqpaGCYGwEdp7gucLJJo",
  "key14": "5WxnsJjY12WEdF4VkL9CxzyabBTi8R6jYWeVVPphc59faMYkV3FVhSXzVFbuRPDENXjQkT8XrJ7aDsvpenFiQvQK",
  "key15": "5U4C9iy2zTGrQiKBPjstjH5d7pSSRGFdqyQgzhqHxXE8G2SNvCzVmDyVLeih1b9DJurqDBn2yK4kDLybmGgnUgvh",
  "key16": "56ui3nVxdo3ZQPstpTVTxahjgYGqDUbnqGTteYbUpjhyqyw8Ysfb9PifQyxWui57v4WQFHbNdECiQKb3F5s9haZC",
  "key17": "2U7DBnnHRhndsMXFXHuPrb5WUYYPRtZypumdXjVGsr3yt1WzGMqR9JbTsfjhYED8RfRAVZCm7qqK9d8W8QBrFpip",
  "key18": "51Ldfv8vfK4Fk2rwT4qh72SXqk5jV2dyoc5gFJcvocWDJLuxwZALsQbLbjLoWQLjZQhqvW39h2kYMKHfHY6hpRKF",
  "key19": "ZzdELULEYxrvTJomdKLYUQQwDSfACBbeqwuAgjwotHjb8esTjUGNirotQqUo1Qr5iFSM3iECTnPLSKbLfeyeq8s",
  "key20": "45JQ5aA91wzqpQBfHkJD6syFaAyvJQQvBD51yZphxN2HjFUEUt3dTf4tfL6T7zSVL38SPDZ6Qo9KZPfUkMLgYKn5",
  "key21": "3encD8a815zpzw5qkhMNhxtZFWKwmiTkMSMGV63LTNLtrEz4YTNRhtSRxAHWTWc7MbtctWVLkuooYLt7TyDkPHbi",
  "key22": "3agrDer6S4VTdsgELoyi53gj9R33dUACURfrBjUDWYtEpZCWrZMVGGJejwrw3ZoztqeEBhvJxF2XkFobXvtoNdpK",
  "key23": "2vFvxTX5oUSyLSj4FgLgux2Z8Fsc3JrG2eYSiJrMkiyh6emSfWTnSWaEAmSEcJxX76PhkRS6xKszaY9oPZ1424ZH",
  "key24": "WAnig3uB4TdqK9oBJ4Bc7b9iy13UX6Hhpb6HZqwmEoSXAdfspfLCmLwzWhAv6Uf2Uf8HnFyxQMpnVvvDy4LvLzJ",
  "key25": "357aqVP61o53ZTm75KPrYRkAdmb56nxocJCEPwTCWhm7jGPn4dQLqN8fsv7xae8271HQVqzhBhpd5UT9F6fLveYp",
  "key26": "4avBSxcKTAmuf347C2vbtLLUjF3fdaaH77gS3q3SpfycXMRaAFmB4JQkmQzak9ThPmsBE5cPg2qLWuKX3DiqYGgc",
  "key27": "3nWWjnEuYMiffKv396ifyg2JG8k3RJ81aUPFqQgsPNLKg1a8aeYS7NGCdaa3Sc9mCfc9eeWroA33962zAteYc7Uu",
  "key28": "2GVH17HiTqzSSD2aNkXkzS7bkj1vMj4ubnsPrHHvNAe7nj6sD4ognvtzRY4KNHbsJi49toesiSRM3ZQbqjrb3ovK",
  "key29": "41T28hWnGMdSUcbg2ww4FWjcJo6SAWJrSv5dieMTvQ2W9QhFcrYNGKY1CLNvfbToPPkFEaJvUWKxvXMUpJa9D3A3",
  "key30": "3s8Z9AHyfmvdCDtivQzJhU6kFUTWHrRQLubjCoz9orX695fAzQDaNnh72GAxuru5T7XWMsvboPJDMvy28ULSexjx",
  "key31": "2jFx9jyF2gh32SA3Y4KUWu7wVE6pgBkgyAtkdyLK4vffGMFVMrfkzv7mGo6Cus8tt6GjvByzeK4opzZRNWBrr5is",
  "key32": "42NoVP7AinVpnfA1FRtoWsv1gWUELKRPgTFfLVpxf7pTQHAfLzvn8eDz2Yk6RWymUYvdY4URtmkQ8M3vSo7fEsgw",
  "key33": "ruRshe3Wu8sMjPqS8zJ8QTSYsjTxFyU66ePrGEi6ZmrhbkC1znXJwu8FBekdB5DfsaLFvGD4TRk4EqtCTSpyAv6",
  "key34": "rY2Kk2nLrho6AMUGMJfsL5LTubTyX5e9vBGJNimjFgpnXHHy7AUVNcTcocXeK8N7TcDAWkeTH7jUXAUYVtafhwi",
  "key35": "4vifxHQGHhr5eBmVZYyp7frDgU6GceXsm7uYa4r3zZV6eHDttKwD2WJVf7DqZDEMVfLfRyPV4ZHyeLWepv2P5mW3",
  "key36": "35J3j4T3qbCS5XyUUgWsGLg9DnyMaFNz5JDaEdzVT9waNsMX7zdQmdyujssmsJzWwV7ti81x7zamem8mX1o58QdU",
  "key37": "cnYRztGG48KZLzeYX22RPHTV62YWJC7GcByo1qsHieeLnw14i7ZqfUPCkNPLoparEiM1Nbv6RXrkHdCxMXRod3p",
  "key38": "2m6NNUEEy4ax9ocLmNspZv1iA9Xt6tVwtuPpjAGjmZmWZDezv858kRRMDxNfCHPcBEjSZJpAf87mEMJYnAiwz2Mu",
  "key39": "3M7KQsos65cpWERf6rZfUxviH2D9RbCjNfvvyPEr9qWvDiGiBK5R8kQj2LxTQcf5t5rGVqa6MLwHM6diMViZGFyB",
  "key40": "3kARZ8qp5ZcKm5J7KziWZmr4TNjWooVVPSvpgTtZLHqXiWbfxkwNJ7K9dmzNS9MzcLNnK9ThFYiKmSZnaSTuL5kU",
  "key41": "4Hrq2x3N9irR4CwgES8gTFftvgKfve1UpobSxC2pyn5CYb7bEwb9TP9PnxpT29bV3hcRNxCzYNFiEy7yfKUwCXGS",
  "key42": "2cqwy3Nte4wQfUz9ixY2updsZGkGnF8j4M8n9S3gU2WQBp1Nwmj1LrgyZpTU2dQFwajEvgephdrc3jNp8nfpFX6h"
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
