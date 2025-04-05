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
    "2jVn29SySVqF77pz1pcgs5mU6Nfwmxxa2QEB7kkT4G9BHzRe3Np5Kr2h5mhqJ1mFcjwqsZQ3DaQfZcUyq5LmVXK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbknsBmVZ7pjz5Pxoor9NS7HaH4AEBTnovSmi6wst4Y5dMijDca7ZDQfBTe9Rq3YM1yMtJNQ1X93NhuKewwLgoF",
  "key1": "5FyXk84HwXMFCPs89ENzxu8dwBjbaH5AKGpZ45AGRLw5Usv4wHbRJSopjmfZTJbaYYw27CoWWxsydpHJiKWPecGJ",
  "key2": "5owd3DNHS9wnk3vob5dVvBBSAaLwaLjEF5mkW8r6b8bAm7XEdEpz8ePkWukLmE3Qjhpf7ez7aSo4z2VRnV6cJR4b",
  "key3": "5eRTUkahCkFZkF8yucpBNbuY5wYbX8dZYDMcUM9xTqHpuUsQC371etz744REehGyP3vjBudrovYWqk4HXGypTfGJ",
  "key4": "37eE4QtpwPHZPGAZzEJ2C5X94iiYR2QcT7HtKZfyofy9k4nAc8XUQdrwKgqEz38bAFCgxvD2utaH4as7RRATVUgn",
  "key5": "5e6ksxbwE4PUpoLgiq7wssyFvHt5izCr3brRdnWDceVCX3KDrbKymoRjuob4XZDX5cyh89iKaCy4DckamaywxFqK",
  "key6": "3RLYhHSsfcD2AMFUY1iJFG32fRGAZwHT7om81j6mpMZVenx38MyM2vfTCHFFMxnopsRCTVQ1fB6XfzRRJ1JrJ1yu",
  "key7": "3NFZYSfFGqdkNSzrsxBUZpXycfFX7YUm6bLDsDHBPyDkfqEH8eMvsEEtBsYaMVi4ttb3mvfj9GSpHEivEPQJXd4g",
  "key8": "oUFtLx9CxGKa95h9NF1B1G3m4JadDkhBT7xG2hKSKimDCRtB7RjDWknZsppifLPiFSqfNT3pi4BM9bWDCPCM5jo",
  "key9": "46YvDfuWfeKhedu1k5F26fLRonn58PdfW4upiqLhi7FV3xfoLe326G2jMyr4D4CoSAfeSE8fTAeXZDNi9tBCP9yW",
  "key10": "3iwZMcavEksxnPWT2d1t39XRezpt85XhiVCVDiafWpdkg22nBPRwqCaUHoNwD6o2yuUfuXN1yJ5fGRWJEuPctqMx",
  "key11": "597PAi1Yd7sbPicyFxhzc7j7xL5SrWA6hY9cnt4yckvVcU9cM8AKQQAxdT6294LMAszRoWYvtayS4Kz1TZS3uvkg",
  "key12": "5vXVR54AtYoFKmCzsp5kimHj2HNKV3jLNGPVkAj9fZyoSjsgxHYYRnTypSLxPc9RcBjDKKzS73kTb6NDaSb35UjC",
  "key13": "2pjccev21b6uasS1gzxcEL2vwhPABpdoEqU3hez9h2RxXtvfGWbaY7if9eK2FmrdANkm641dPfLmN4fH1XaoMciL",
  "key14": "4uKwmNTMUkUkuGA25netoFmGJEuUaZPKQSyiXFBUqQY9BRUZXAxf4YVMZWYeLRXEgxKPRgtUFz8Qu32zGdhVjkrY",
  "key15": "3XmUqZZ9EWH7k6k5MRgmaGKmzDkFqTRhcQiFvpmhd7SyV2nvkgjVhQxv3kmGBbBDgcBCsRg3po8dUrirXiLrNMy1",
  "key16": "44sRwEkm2ik1KGjPCyrUgVagfqR5jsXZp98Wxq8zssg4bKu1ScFxTY2VD6EmZDNRiZJpvHghaRjbtb1cpyK22Bsm",
  "key17": "ozpYEh3r25z52TKbtwq6MK8B6LFVHVnU2Lbs7Z2QjdUKYjKPjDh1S5DQUTgVRGuRfjXEKAejwRyheLYXtBDgrCY",
  "key18": "5m3E1ooqz1rqgPbc1DsF38saAqJNdLhpzYmU68hDQhJQQA2rnQ32o4gfJz4FLJoQYt2EpsFzs6toeX6QmZk5VaZX",
  "key19": "5RyJvfhuf6cFCgjxTAsxaNaHLHQKrZX4A7M3stKtg4okqBy5xXireaC8mgUvmt8k3Xyba9xvLedAXsBVTgP58bHU",
  "key20": "2te6nTKxFMDLPQX2NUnv5FeXZbpTQ17VoW5Ke53kAxyNGrHtte8qtQBZLdsvBaNiNBCBkZxGGYMPhPc3NKMNEhwy",
  "key21": "XkKYSKkU3hSRf3SGeVQQFRApeev5aQhF3rE9kumcXSDekm8WvmiQhfSFsVjqPEkraTRWaQjhRQ4mV9CnFH4H67f",
  "key22": "2WxafGem52XRUR9SZCfviDmMTML4BPNwoceuaDXrJbp6URXBxShDSQMuDzkXQp3Cf24yHQ2urZ2shkcxJu1gbpWF",
  "key23": "QmBzUk6j68Lbmfj8AEh8Z3tC2BPsPqTqvQgukzLw3yQ1heeq6wsyiHEm9wcEq4ezRrDB53eh2mf6PZyE56XwtGK",
  "key24": "3hqgef8fSJLm31sHxgyLxpsH59YuWWQvJWdNdXtm5yxa1ZTtUp9DA4y9f8bTjBYnK4Ng1WBzvgN32D35nA3Xi6w1",
  "key25": "5JcdrFXPkimVexJmnCsiQZw41bYkbkKw4SMJPfZTvwEcYsnTy6AxMQ63Ns6tocgC7H1cq3XPFEmQ5jQcYmxtYZDZ",
  "key26": "3HRaejbmQ6TTYN2DdfT4KntNJmCZQozMor4WRGxYaZyZuieUaP6HtT1JHWFD11XphKv9XL7eT9bykZgLU7ZyKsgd",
  "key27": "WRvbyYfKzURqGz1QY5w9yxB6ExwCPMW963aHrzF8KYZg1ZTEn6ruGkwFyjjnUgzccmGa7Va9DZV3kyxn2VteXK2",
  "key28": "3BnTCSyit9yQqt6j6LDLDXQMMSmwa65ENWPezCPLqeZgCC2PRvfsakezqs2cRJ9L4HjmGoGtN6RqdMPX2Wwu4z9U",
  "key29": "pTKuD1hSynpQ7uxwWYHkLyxhgicL9YSu1CMsCzUtPJ9nrdCXXd8xvGRNxZBREmksghVn31BydDUxhE5MPbVewf1",
  "key30": "5v18Ld8J8uyvNe4fF2JhDdtmxp8W8Vcm6AHbk6YdoHn9bcc32N94W136FquL5uaQyHMuQhzwWDKJWx3R9NZBNUwe"
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
