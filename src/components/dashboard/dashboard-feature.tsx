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
    "2SaLUXXzn8yZYR4h4GNu74PDq1kENHXRDDmtmXw61bTH4ig5ioCcX4LCn9467boYXRZCpu7ueNTRwNcR7nZZ5Y2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313CMnZKBy6pyYUtG9LayPKZjjSUDUpFV433n38eUNdKNTTC2BfrsnZS7qetExBGciYfqJn6Y5n7butP3XNENjFp",
  "key1": "4a3EHuMa2qsohduiANapLnC3iLYNmuqrbkq8BNFg2JdQ8KDMDGCVVundi4BJWXEXESAZt12ESh8mRkrMtVkZEVs5",
  "key2": "UDoeCxJYDfdpAuwJ6dH6pmz2Z4yDTyDAzyvnv16reNWT9QzENDWeqSbf5UiMXQCzJhwp6TAAXFDHk983Q9mbCfd",
  "key3": "5Wi3gywyBL9XgzAxXuT7PmBjAxpr3EjNN8t42bXRvPXHNDpNnRUgTvRXehMZJYVaAbMuhEhgQKaMvLWU1t86BqSi",
  "key4": "62fiCtkZJq8pxHuyXC5fwQoynFf3QTFnwMfjeedK6pNmHPQ6imjbKmij3od2ZWv9B8oFqfhfozunxsk9rEREHyiK",
  "key5": "Un7eRep728fPWJcFWaz7eFRzyNdJBRuSQaB722gWpV3MpP67Fw8P6szJgRonczYy8CstxADsZqxYMuqQMD8xXXk",
  "key6": "5vPwim9FjB7ch5HjvcS1ibWduk63QuGfGsyYwb2dBWuJ1fF6RMLADfDnAwLdyTSQZtevw9hpNNj45NgKiP2vTTfw",
  "key7": "tjZ78o1LxFt4NizK4grhhdRm2jLTsRocpJSW8XZvSKj6fjr6qhMA4sJSWiCCTGk8STcGPwcuzf2uedotwkeH72J",
  "key8": "4UPSJSibKJAZMLxSqmNFrXKX1McuJvBLxPeqJHJ5XUbtGxwbTTNdc9P4G8gp6MuBWFLfKSSeHmDtHAseCrXQR6oD",
  "key9": "wMzyPcx2T39NG798FVAmGCiGsuNAph6zKjS8zRnBYc1dDVqQgLoRv5fZjebYWzreV1BEoziCP1q99ishZAGuPd6",
  "key10": "3QGBnakWFrTh5bwfZ2SdJ5JtdeNRRgFsB2LQ8V2ZbT5Hy5gC2d9qdYoKQirMn91ND3SVVZor8uFMkfMt262AB1U7",
  "key11": "3jgRMj2GoapXNKpqP4d5NQ4Scg3AKjLbnJutoqNTqXn4appnEVUx6mWZrmNNbEu3ajfmb8APBs9cS5Hq1hDizotn",
  "key12": "3cE88JxzMTieH86CKRr3qfBr8qUMCG7riJgP6idxzG1N5VYjkSmp6bVRqpEPEb98PAbc1mv1pjFbbzrJu9TkhaGx",
  "key13": "5MTp6vzq3umt6T6FdttfgAM72bSaHTqPqkU6aXgfqZsTiCXS9VqS9FZmEoch8BqVcLn19uKqaReqjvws1cFJ1vBb",
  "key14": "3WJ4YhYivCY7Q22Rrbj6pBbaSxq9QqoYF4iLiaQRpTnoR1jgJir4Facqr5b2XJsAZqDS3Pj9ZnsN43iL75dXEXmT",
  "key15": "4FZzVHDcAsbD3q4eAdcgASJPr7gWKCXrmbbrYNPxEZt5gTiDNoZHFiUcsfZFMAEcAWD1SohFRK6HiBoYzReS7qGq",
  "key16": "4EVULR5xFWGz5MksQHAF7yqKnDt9DLii7HbLYxhsZYQDq1gZyTNDw8oUSaeGQWz7LJrkBJfJHsT8tZ9odv225imb",
  "key17": "4BqKxxWXeya288K1vmZ6UmaMmq1gLw5kvow9oynj7WY3k1db81SV183vKY9AmC7AcmzrFrhHQ3iMUUvToseZqno5",
  "key18": "4rKYVznGtdseoCx1mecSHxDGCpGRHKoUMNvBLnPEyxH1RxWwveYhMDY3BqvS7YL9WrjfGgTnJ6ApRvBmCBfjEBz9",
  "key19": "3nipbYgWhuSLqFNYm6CYrEiLTSqoSewmrDQbZ6ZLR15k5SsTNLG1Wzbs1SGWkPP6QdaMbNMTcrHHFAUBxywbXydW",
  "key20": "3kQtVPCHac6V2xsxwACgm6hAkVXhAshFTWU9akHGSRnSeYseB5qxyiriiHQHGhwBvdd6yNWXE4vaXp1GJ5AXsQ1A",
  "key21": "34EYUSV5g9L6v8MY3gJvZ3iPq4HmsCoxLguCnUV2ugmE7C1CNneVYhg4YEXFghgNtUw2GRTCtekCvN3rqzoaZJKf",
  "key22": "4PsXq8Qh8fh7oRPeuQ5XYzfoHv9JkLsmWhdPEkvg6Gket2enBcqyMGoXqJvep17nQFApY2hNNYzBkfKJyoTgtjdk",
  "key23": "547AU2p8cuWWBR7NBhGa7xco1rLV2uQ72erb64eoidbjHRJywwxmuCR4kShwEaLVGZjYSCNC94pJ5Szd7KK5Jm4G",
  "key24": "2GuURiZdndgAF89nsLNiYstTkxtWAS1VpTHyyNH6shGyaR6QVJ4ZMFSHXSyJzMK9UxSzYzyTfnbeykvh5hFbve9W",
  "key25": "YBQRfDcnqMzDy6jDvaCtKRcifZ9A2qXasSKEk4EWNGuwFrpKzMqJ7sVizjBuTs1G2S8UJJ9r4vL8zXYfRfd1zTh",
  "key26": "5B7aH8ecmCNXgFMNvMWdc6rva8JSYuekKYsutLby2chqNttbM1AE1JVHsBdGtPjYayWaYg6uPizpXP9FF4UjT4af",
  "key27": "2o9rDVD28gAzXWZdsyVHqCLanme6gUcBa9wBLdx6NuaBVBmB82Uub1eSLW2KVoYAuVsMWGQxcGnb7FNVUmXG8iT8",
  "key28": "5tX1ZvDcK9YUrgDqzd2zFdjSUvcZ7dik8Cd7fEGyLmmwRYT49SC8hyJdR6QQAaVdxDCjQij8dFKsFqsjiWacNHPY",
  "key29": "3tYvo8suEURZxoFtPtrU6xTDeZtrYpstpbeRkxx7o4A5G83i6jsF5PEJ54j9yxCC77RRhT32V5JLNcxFgCSWV8LW",
  "key30": "3d1F1VayzEowvoqSvodnCMtyATE9sS3ft2tLHoaadPnmsbqKKUG7ReKYwLAh2sQVTaWM8AqFqAmHpt2VyYkxtTpd",
  "key31": "5Y9pKAYJ7y33LmPR1ouNWS4eFRGUgy8VKrtweRA8boQqWxTHaPGAT6VTyMh9RoNfSX32bHgAN6q7gdbt6SPkYhtu"
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
