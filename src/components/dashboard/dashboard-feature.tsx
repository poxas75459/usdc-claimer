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
    "2FE7PQ9gorZKDCGe9yucT3cVdUJ2HkA3n6WXDNNtxp5Bk4Trvct7xKsCRw1rucfFmttb77ryw6pfmfSJMqbf2M8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1m65bHw3f6eDULJZKookB36etnMQmEHXwMPZ98R7K88Sd4VH7SV3aC9afVx8CGa68e3VfBRTvYEx7ETb6a5NxA",
  "key1": "3wxyWkNmBbgAbYUXY7Q8HNMKtsxc8BkeQzN1ktRvf2JQScocHXWjJ6K6WHmT7kRoe3wBM8WTgdHPnr3b1WenaCRC",
  "key2": "5HmoA2gSUnpFZXiX4grkAhX7nFtMwcZVoewU9qEVsx4GiBFcRXwepARLTicCAg75E8mRD3mPXjZp7XXUTzaZYmJb",
  "key3": "2JtHB5ysx5qvvF3FVDjQ9pipcK9rSBV7HceMM5UdbAUsKHAuqGWnviwRkRjaKpzr7D8ZbJwecpi4j395wE9qN6gy",
  "key4": "3k7Sqzbpph5dii3XyDRoJ3VmEybMjSu9ZmBEw8nPLw4RRyHio55UEaFW6mYkMboGEeizy82qf23mZSGwSigwjT1i",
  "key5": "369K81p4jkfXck2aPZ3dgJqiFbA3U82yzM4fSKcbgpdDuMmVsMeDBgcsbbcgPZuzmeobYNBomAFnjjAUppKs7bEa",
  "key6": "2ohWat2gmPpfBTFAT1H3mgFWNbimcYHf32Mi9ivXxU8BQCfM5Q7crGYVVLtwvudSup6d9R2Japk6m161BqehEjjA",
  "key7": "41izuBnveZkj8eH2AEQ9Jv5zcuRHrcGeDw2p4qJ2RYhjtytDX2oXdfRZZV19rhWf84V4uikSKuH3HPJBGKsc9EKx",
  "key8": "2TPVjoQcS7LrBypBn4MnQGw74WMc9qZkq8XbD1YowGEmo23S8XANY1xEuzw9NgYAa8Vw5Ei8wGB3ipxJd8sTsg7A",
  "key9": "5gWguBoWNNeVQxXGMRDscP42mDLAgB1as3NLR3nQirsGYvowW2Sd22DSgt3Z1mnDLNHJozMA2pTR6pmYrzRajNV9",
  "key10": "gCtK3L3DPxQ5V4BujDFA5tx9FRBro1SoTgDKwu82Yn6KVSdoUvfQuqxz1icqLYWxxaY2Rzp5ojeygSQbYu3DgEV",
  "key11": "1f1cMvimrqSqtWzPXrDznHKQHtGVwHBN6JobSHSyGxmQ6db4jpULGBYQ8G5saW34L9jryK93igBWjsShYDw1L2h",
  "key12": "2Wx2AqkypUSVFtmvuNTkeM4exohxgcdgFZxEyEkbhFJXw7xjGqPUbsB4kLQRtbn63qipsuuQHQbrgaVhaRuW16pB",
  "key13": "5A9VaL8PCDGX2ErZKekANG78DMt21D1oJUyPX9wfFuArf5t7XYzNsKuyVnEycvjhrAoVd6PEJmDC9EXiJtU1Jniu",
  "key14": "F3sRemyGSDDJpvuXNQDPTRY5XUK4FynYX9umgRNEUgD6nXw2CbMj4hteerjAPYiqbFKPr6oZSPkLo7CSkbArM2B",
  "key15": "436ddUYQy9THdcFpMn2voZSVNHuAwardSqJDzyGNiHqurt7hJizeCqPFdNHM9RpMqrZQHfTVYSCt2nW5dNaui8Xi",
  "key16": "2EWbd3af17MMBKXAddJzgZHiWKUdAr4xrJVMeQUNMh9JJKTU9fvsi1ByBg2BETFzk3cQd8xDPvA2kn1r2rvjLo6s",
  "key17": "3464DFzG1Nb4H4B5EN4pDfSJPYb47iDDhyk1ZQXyDNFp3v1GM32Wp45n1bh7JvD9AgWhqWghYP8gi71YobQHjFqf",
  "key18": "3qky8QTofTYUa4oyRMbYjXy8USbYtPFycieQLb99FvAyCt5qpjruBSThVuPL46ndf6FAKA4YpuSV8qfG6Prj2124",
  "key19": "5rAwJq1Xoj24jbC5xaMnv1rHCr8GUgbsXQ67sRopM5fQ34FMrMdieUjWHL2sd1uffyx21a2EEr8zhNBVMMKg1qGs",
  "key20": "rEV8LF5njvtQpc7uMf1b6ThYXbVRxstdFkczRa25STVD42S7BoeP4LMEixbAZF8L3ZkUPnGXtZvid8nTfDzisoz",
  "key21": "32P9UTHFw1UTeTeFd8PiJwoSfvn8FSZLuPBD5jW5r6tc8PstcMQr2CtEfhc6DzcSFLv1NeJ3EQ2SCSWvL3zdgoMD",
  "key22": "2Hdt6geiqkLrA6gXDuhzSrChURgZnSyjFMTYxDptEZWdyqGFEFztGgv8VbBHDZcVuDNFQmw2ikiyKLSiZwnubthG",
  "key23": "4mUFm3o6PGbP3JsvSHBzzpvC1fTR2pYueJPiWcYBo1w7jyCBH7yXLpxLKQcWRSEUDpWZpCL5wQ8VtmVtJhGPhRVD",
  "key24": "2eWUtpiyE1QqhFaJK6peudoDmaLg2U8ooA9sGkNQFZUax8GUKgT6onzdZcRS2UZgUZiACiSZo833qMAC5Gk2x5jW"
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
