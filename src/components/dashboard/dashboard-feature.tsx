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
    "26NxLPjBMTXPsXrU3Jy8XP1URS5T8pmwG4f9iaivgW9wBaJM77wvLpKVXoBJrFbJZBUvHY7GBNkNgiEmz7umA8Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QLdWVdjCtj8MN9ygHNG8E8hKGGWHWb7BNUVxh8HGgR55byGQoDwyamxtHqng1k9hku4CaUx4uvgTfs9g52Jgg4",
  "key1": "2bxcgtVU5kQCXs4Lkx64CDoWQ2BmrVRzdzu6NTMpHBmL5sR3WesD5dc6MRv69CbVxeJVQs3DpGUZXbkHJ74M3tmY",
  "key2": "2bwA2NsfDszCUFQVFVSBjy13GA7WMaNQfrBFjUKDwPgLeErjzZE3RgG1uXZ1LQj27qzjngXjqd75FbZzss869n5j",
  "key3": "22NTcLLqb1Fk5xmcF88yrE1HbgFGF5rj89tatWK38j9HkwpndQXVLSyiCm6XTKzpiXGjoAWvv1c7tw5DeneHhX3M",
  "key4": "2QSoNH8sYPUFNi2Ksh7dvSfdGfmEvdfciq24wW1pJr5hUNRvmQquYA9Mq2XQEpMjBhFGUDvt3N9thnb7vEws7iJo",
  "key5": "4dFMi87g7qzK1itjPR8L7WQdTHCdXK2sXbeq4WYiJyDdLDEFf38ETyCXosdGYNmLMdZSm4vVLC6VzfcqFFnH4aGD",
  "key6": "2vN8cmiNuvSsAKyr12wFT8ZSw5CiQXYUVydN19ZaZSoPxo87YApeY7S3vqG81xkBqUoU8DGmCsURURJewjQBXgrZ",
  "key7": "Uz7aDaz5JFvCepuu6qVNP4dBbp9P21rZzHDVpZUfdNKtdqWTkdCdBrME1oqjCoaJ2jLzaFLy7qaHstYAXVUP46B",
  "key8": "2fuDA5GASokxtuSc7bAgxtDkWsRdjMfFQUrCtu2apQ3wStWkwojy26CtZyEknMmtkDrngTMgkeGP2TY8SGb2kqt",
  "key9": "37UQ7tRJLckYLcbSkN4N6o9UJALBYqWPRsncYwgH7RaomkfUAYzgZfnDyEmmCxUhbd12sWCPpssUq39uQeai6cPm",
  "key10": "ehZtmTFpLSKkXCoN7cUNq8m7LWe3tVwRGUCQu3krixUzUYgXp9zuc4QKEtWJ62vBarCJiJYYXVFPJzD68dbjwB6",
  "key11": "5cbBmpmZV16LeJt76avyTffaFh8mhU6F8uRwvz2J3M34ZJiAr2oL7YbAuYedwGgxkeB2MsmYfjXSHWgTCn1hm8Td",
  "key12": "4wqPb5RFERhffQMPsffbQeVM2iioof6L5uR61W2nEzzPGqqfnoWfi6ZzFQHfD9h7faGLLgjXPFN3t1rSV8htVuCq",
  "key13": "3bd2jAXFBCsTQPxSQ6TnD11L8JXet99wBY9yfnFH5Bvmrbr5fTTC4gzcieoovcwnNSDahtHD84QRvWcNoWVfmPCR",
  "key14": "4inhFV6ez2mpMoz9N7H2Ffucv4hGDZFPF2LgYgwj4GpFSaQ1UWntMHB2GvoM1mQD2yYfwpZubKWSt1YDKDP8gGPF",
  "key15": "UTv9FkF4MU2gRDRRWeS6GtjbndHqH2jQWL98gwX1JHAeHk2T1iwTbsSTCdjJrxe1MiLNbGxi5FyV7LJj1N5HK8V",
  "key16": "26oznYpv5vfoJJij8jn4ydZXy5JUVKQrMwDhGyXJsPZ5WGBxonSZUqQcfHTGnnTmF5ATs9NZ9iX2ZsHdkSjmosgm",
  "key17": "65QnnzocmCnVsMG6RQDF3VFZ92Yoe6EmKevAu6CYUAmcegYxsac1QxxdwYhaAzgdhoehnSLvTKZ3Lq6GmMJqGJ6F",
  "key18": "3Scr9oXdQVBohgeMeegMDm5wqZCqq2kbSTYjo7iR5QJheGaLjM1QNaJJNW3ekN49JAR38DQ2k5x3o72qfmjBEsTY",
  "key19": "3pscE7RyTDonbTqXY9SkYjoxV3L9QwgnNFDCGbVgz5odSE7ERyc46DZBo69yoUudXtjj2SKsmL7nooc1Lw9NP2fY",
  "key20": "5vFNuuqURMB7Hi96yfJNr9aTo9BMX2zqa2PM2xyWYfk9vVBgYUKUH1E3ZJMwXtwaSN7ncLJnYxPr7EKFkaHRetUk",
  "key21": "m4nQK4vbixaZwN7q2RLduxLLbQ3SVAfT2wnoF3mQemod5eutXeu7LLyor48JVGmxATfBq7WfYvsF89Fm9UWnJAc",
  "key22": "5dA81drhCzVjGj8ptPBk3ZJEiDh1fX8NCRyGa7oY6A8aY8U4yTvnJHd4YxfkmxbW6WuTm67WPHuSN214EGBrmmGc",
  "key23": "3WbDPj5zUPbVDXHs1uZ25wJrZB4AR196XvCsyXAZMAAftb9uWqq4pAfT1XgmSbhyUiot4wPwcyYVk2wcQ88YtqRV",
  "key24": "32Wz34EZb1UTQntvfuyiNuGZc8EtSn6ZAYwxgfZc3ZgyrX1U34pNN1R7kHhjThvsrHbW1egUKS72PAQ8Pxnm7Dy4",
  "key25": "5AQZwtM8JJRjregg8eKg3bUaVuA8w81Lhm4Rtdk4nNrUCCNw7LGkp9CE9bjQdX5URJJrgz5VWzGGvyCPETbkdRa5",
  "key26": "GpFSwHpUX2LscM7nwEC934QEWGQHaGsHBiCuEb4e13ETdhKmwaWV4HPGs7bae1hYDkt1XcAPQkZ4FHKPULD2zZF",
  "key27": "44TyvxEtMsiBFhjy9GyA2MSHXaYYMQMKboFGKitcEsmajQuo9kzDL2hTyRhfJRFnuQFhwxCRJSkLCeC12Lhowvq",
  "key28": "3hVQokbcuHqB9e9YTvLBHBmiZF9pbYVqRxjzh4iFQyZ1tWrok6PYNNu1C5LA4tC8Ki8MSZCJjjdSKNteSzaUTj2H",
  "key29": "5Yp6ZSnG32MyTWhwSPFZ6GzkEYY9kZA5JmT9GK82grd4eyaDyCeGt5p8YBs4F17fEpWPDVKq1HMixgauatqh3iiX",
  "key30": "4QaUA6fpYMsiNN85242X6VnpvGah1cv97CtZJ6ZCJKZTbnNeqJtkjpdHaKB2eg5j524inxppJG4b87MsZoqmCvaS",
  "key31": "d6gufE3w4ikddre1P2CYGu6o5BVan6yDpVh6e75w3QF4R3NXCFhqKEqmjGQBi9fojrx8ZsJjLhJxg2YuXV9Jznu",
  "key32": "3yZD54tCAz2J8we4C12o4Kb2n13kDDMn17GEaPE3SRFu8UjSa7jRMvd8UUpgyTucUzbqED7bWMygctDipsS3UHGm"
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
