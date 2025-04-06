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
    "4FPeH68Bg6sLxFrMxg6ckTfVT1mh62jGAiNz14okcxmBQF6LZpyn3z4mF8CMeX7EdJwUwCPDRLaCQbzmsEYCrxQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oFjtGqKPNuiAKvSSzyfd3mrENKsPR7toWFutuZmacu5YR9n9Y2aS9FMoavBPARBMXA3nUBhUV6WCfSdn43PZU5i",
  "key1": "3vwX788ZNzp6nPZRQj9U8hTAh7a5zbNpGgM8F2B19iUh9wa1K6FeUocLphAs586gMS9JKzSUhrEVzeHouU2JYqQH",
  "key2": "2mduvGcRKuKyCTPBi9rx2Hn1znm57kbUST2pz1B9LZqTNGzyzbbPWCSFRv8ZTYmuDqTyy8qgNVe9R3QztGfKiQEj",
  "key3": "4RB3LUqV64TJziboto3W5xCTUTdzQM8cRbZU4sjiYdMu7BmW72qcmoqCZuVN3oDrBQu3s9EmAgKzwN74qvUa8QBJ",
  "key4": "5bU43yKiEFeysFJBgu14j5E1mTz6p1oLtDu3aiLhYn7xT5npZ86EBcnBKVf5CVbyTCyBLwz5PrrSLGR8VcYoJtGB",
  "key5": "5rNXn4bnXNPPwr9SYFw4LP2HmbSRUvXwjcwvjNbN7uYZMicgPWYwuNJ1yfeKPhhj2YAePh21tjwXHocw95TGopUT",
  "key6": "3FozWN5nawBzPLmY7oDUvfHktboahRCW9R6dJ9E4nAPec2dPntt6diLtZRz2RgJuDHYtGeDf7cVURVcZUmDVhXTf",
  "key7": "65TetQR3Yvy7VkrpmJqxqpmZQfSrH6FQwSGWkzSfMqCGcVHidnDk8oHpYyXt5PCSEhYruQU8UYopmzKD4dbiTuQy",
  "key8": "5TR9YpUpacw2u4wi9Csz7uQfd4YTGwKQ9GKnVuMYcciiV7PV14B7ExCqwnD2oXtYa9VsHRmxD9Z9hFb1MBCBEyKh",
  "key9": "5buLNjY4UBKh9fvsATjCGYD8f1bQ6BNHkwM362PDCYARNzveDFp8ijPyWgfjMm4FDPM5jLAQXoqFh7iBp7vp2h5q",
  "key10": "4b1MLeVR6m9oSrgASn7pAPnUrwUHTQJHejkfSU1APWfGZDvNp76KR14uCN4q2rSbt52vG2PFALoFy9sUjMAg81A5",
  "key11": "4bcSEL1bhFbCxqtjbf7r8rSgabFvrZTK5QhsrmN6kcUbigSenQCemzTFr3pqstLpkxjNwN2eRdQDv6sRVvhH3Drs",
  "key12": "3wkNAdcQpnEhBibEP1HJxpsrbds6agHgeCXq2jLrNSyEnaS272ynLMjG8ixxEDNCLpTa6eneiuvERv8FKLc3DafM",
  "key13": "2ncVubtS6sqhfYQk4q9dPqk7tc7PyxMJ9ir6huQTxmuuy2zNDxgVmSXjvbvcPYfDtP4mnzzgE3AxWoAQ7ft3VSU9",
  "key14": "5MeLZgQNjZ4Mmga4q6GDUxUuGesi19eAXDhryTds4uptNKA5kud2gQbR46dEEVuvtkiUVN8Sx4gLgjvrAHeveLFW",
  "key15": "5ZrN5BJkxMnLtHLwAC9MT6JdLEzQZDUqSu5LjAguKjx7z1DPh6RraYSmPPR5bBkodsxgKn4mNZ8pQauGfBRgcyzV",
  "key16": "c96UyPDmXU3jWDFHP7pi3T5iTTQ61nijdt5onadrJYbdrmHPnKdyrCDgYaX2u532KyCP6k4uHwfySD6sNyQhUtV",
  "key17": "3uXMiwsPDtb1A6XXSxh9d153y2RHuxJnQG42BDoeVFeaD363vhskf4kx8oWHKQTTgKmTqXapt8y2fUkQKCtYE6Se",
  "key18": "3eYzeNuk1iV53j2giYz4JdGDS4RfcKeymmFSqdVpDA6i86nsL1NVXAC22zWNFCg7kUhY7zM3Sew6mCGcCJXSAbMh",
  "key19": "3hLyBU5NqRAmM1Bbp2tMzcewsaQ2XWguM4c3x2aH2LSu61CWEZCJSNZkJHnbo95HdYwAnDo8inehrFkrgJEBvv2o",
  "key20": "mzaWMSZ2pEbpNawogPAjwmUGWFEZo6XUfgC6x8QzTEpiqbqK8DmqJ7aeBxDroURVsHELUG4ySqqfDYreZiDFHRH",
  "key21": "589AVNpVEMjC5Ns4BSvakYjh31rN8hhR26qz2JZDbg83GqrN4ngB3bz7KEqQ5pCTu81LLmDL6XUfWA8uBymw7Z5k",
  "key22": "5R9scfnBDpPi9rcUwZrPL4s3bKEuMGSgo1UhNFBFdz9YbK65wdqx7iTJZaTrMCCWVMNXmpoFqj3pJPSmaayCtmpL",
  "key23": "44oKS9JwVcTjrdhUGGz45q3wkL4KseA7JVqczBn34fbkE7sCT8K5gjyYqMb5ndhE4ddPXYwi7m6PcFYHfqX9r5Sn",
  "key24": "2jVzV9rHXDDAbdFo3sM2BX2kgdPMGhEDXRASTErD6139LymDTxHNcZpR5hhShvzwA5KgdvvJ89AYr3CYkqhf3CBs",
  "key25": "3J6n7AiS22oJiTBFZFfPoYLMuGtpdu7tv1Km7djabPyDsgWjLnnKsckyAQKMpvqnv1f69EhXNWgQpEWghTG6kGwa",
  "key26": "4bh5jLajjPyKa3XKBWtmoEQPgCXuEiM7UpFywDiAGcieayJobmTvGwk85Ks8zVwFCDt2u4Mr5Ke6ZWNsppawFdFV",
  "key27": "2W7g7f8RTmc5ZoSvbFDXSAvViyGci42PGhAcwQri5U5Y1RD7JGhrf77HKFkCAx6eHyGnJpbUPhJHwQsWHTCHSaz1",
  "key28": "4twCKWbeqwygbLZKAmo6PiQwMJ5zR6rDQKiuf9RU8VhgtUougvfC54piXqHF7qGVwtmq5Vf58meRayYQcUUyULrB",
  "key29": "5waESiY4y9A2dQi6Z74Q94hxEKt451GtPKcDok6LZJs5vxeJHeriMuUGfsLoLmByNMNG5Dxcsvg7c4SAXGsWWhQY",
  "key30": "X2WHq7uh5nmHhQySHZWRL9KQzPm1wjqTLSnkwKCSVRohzvumyUED1Z3cb97fmbWoAAyqFYhocGijmKQKTjdBMFi",
  "key31": "mz4cEPzFVUepypaCgt7Wh9DJzU4YRbGb1QBJkCcQtewSpUq2dAKTbCYrejkSUnTz9tpHXWR1sZu7pBqF6XcuWaR",
  "key32": "4GJe6ChvNPhMDGKpDEpPsFtKCB9XPCCiiUKjZN77W6XSMVv4NhYKR8fahFQV3c7zaCnUFCx6q5q82fuxBKGtHTwb",
  "key33": "4Jj4C3PbFJk358dcz9WFkAdjtvsrJbwqU9nU7FXKJ4s6WtTocHJRCziV1HeQQi4q4S4W7EwHFE98xCso9wvcQVx8",
  "key34": "5aE4fngFDTuad9sobyzTJVs8sJ5QgbXwPGaHH5FtTdqPQweXgvvzpBpFwpyaGghG6BTLTMgepFG5E8uvdchfiwWf",
  "key35": "25TdCnB8Dhe4PrpuQ3vfxkbG5tAbGbVUtForGPKEXPo1tZgFeH9qxb5R5bJPpKUuG5HBhe1i6ZEMZsaTQTcJX4q5",
  "key36": "4VD2Vpo8uR4oTEe3qEXSz26nigbhnqVUbbvZpDRnhBF6uwm7Dp6jtPEGnUtgCbG1Z9ikrdY1Yvj6CiFbjjePJD3p"
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
