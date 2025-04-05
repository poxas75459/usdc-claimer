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
    "YvXsBgZk49s6q5xc9ip7EtmqM52U54jjigFPEVtxYKe8kQiBXXPZ3cZg87sLvrHXrQKqNmJwceEGMyBLBoFMLSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6qjxeQ9bfw9BSfqqqhCBY9tMsVjpaAR19Q174i9DCn95phBY27T5TNkU827XHHwveMr4m3UovBDdCXbrEvYmXE",
  "key1": "34cFtYUjrqVwuvqWdRR3DLym9duwZ5iTURKUjEEHPqQhoVAFdJagBeD1Teo8XwhQ4cRQ6YkKdd21QH1FjjNFUnQs",
  "key2": "31bZkQvca1n4hdaXQHyQYCQK1rT5eszzpN66R9UBRunSPmShGkKg8RJj83tPGdyyfi1kJg3ycYc67wKps2nsakQW",
  "key3": "2nP6UkGS11hBV5tKv9NjXhfGZg3ohNXQaYdV8C8yqe5Hj66QFx7PH5SRXB9t8Ltot4UT4Uc7gkfXbcEuk1VMUW1i",
  "key4": "5BiczF2jNsbXyXbHh4jZLju9rJwmC99kakgecKWYbN8QvxkgsZLr97A6dcAQk5Q3EDrj4sbCcWhna5EqWzEFcngR",
  "key5": "2zXgCKdMTyB3JV3416msYuacmXreiEJqMcUSbiGTtX3wxCkuJTXRcqC7vQydxTfsBKYZxG7XUoa3f4bYDWpUzzJV",
  "key6": "5cd4ekQuCsPpos1QMpj9PoPtgtXx295oYkob67Zi8yRfX5FZ3oijxR8krndTL3aiVG7Gfe7yaPbia7hoatATf3wm",
  "key7": "3JiMxUth792H4v5aMQxuQUXLm1sZ7CpUiQhRHh9rSQTxpK2cFH3eRrEqdmhdAk9RSxDYeGQe3XzdhtAi8faShk3Q",
  "key8": "5D93Hks9k9oqZeVCshHdkqroYzzy2LebjYviBupka93Lf4Lg5KkUxWkYz8g95WHFogkPNfx9v3Yx6tHS3GbdzwJi",
  "key9": "brDiSFG7SzqJ21ajwwUxEXAJDApwATXBLnsLdq6SPLfQPvSSjYYYenPBGaXas9ap1sedxZniHQ51XTjHHXvVKzX",
  "key10": "3zEWX371qfX3Lh1zU8Q4PBpPfS5Qe2LjSJfDixiH2V8hnoxa7EmSd8RS5DKk3KYLPMa354nMrJdeNznxuRuRfKH5",
  "key11": "5KBfRRBm1ttBJKJULzDhzwudFGHMsNDFVADB9yZoSiwtFmjHsruLP7ngHekw39rZqQSNxC9HMSjS13PYXCzXpspk",
  "key12": "LQtHqHQjH9iYffENCC2V2CYq4ZyusHGZFdMBqYF7vMYtV57uLgYkfHWQVnSi2C35ZPmVbJWPG27NHpUXQdNMDHP",
  "key13": "5q1TejtoXopspyGx9o7tcHQrVLXQJjXNPzGH2qgqVweNTLHpgFRez9MmWrVwoXy66Q93ivWtowLFuDmtcvQGQHwP",
  "key14": "UfVjQqgWDQTjFdcqEQiCYsUZzEP2RvATepnJtcMWNJBxgaHgXCMperEVLJTQMWRLPwa9hcEcyYJQBywiGwyZg4a",
  "key15": "KisEt174X8SVPWHXviW28QE5cLA4CRwfW6PCCfk6bVcXz5zHYrhYgHxUjHQVEBnEnegVoX8FAW6SFm6xkr2B1G2",
  "key16": "4LzQd58URxVc42fpKhEXXTj1y2mHy9RSzWdHoAhC4jeFKLC4zy3KncN3kaawUrM7fPqRXDXCnXeUKvomDJscwAwB",
  "key17": "3zXtJGtGAvGBzTAgzHupEjkWyXhpUrfU7mSYDgRKQtabb67K8di1g7XjbF4TTG2yYXjNxQvDWT4bEQNeAMQnfet8",
  "key18": "54uWYJGURT3dxYu3UKiUsQxrkR3aHiMiqgbVcFFk4suGsuhvAbYfqcSxdWfkuGB1JEAyttaGqHRHJ8kon6NU5uCf",
  "key19": "3FsZk8Ec3yi5RZiwthhoDN5W8wgHjd8NAkfxmdkSrBV3Uqmd3pv2w2eqv34J1hgTs25mTCQMtkSz7ZHEKLuDqpaQ",
  "key20": "hoLsLvDMMWwGC9ZDcBZPsnJk3NvoaxTSjmDpWxWYdWZWoyyUwX67bJL9Tr1rLmFMUVV32ijaFoCpRCkehDrtC8G",
  "key21": "38RjHT3ya9TjyRtW61gfGbXFgfLWM4F4PUF1L4nNGSKSMQpwoZBhydNMM5PRj25xN8Ns4q6MPWn6vWMLGE3EAaQ4",
  "key22": "3ywoTL4CvEmtnUECL194zGxFNP4aUZv42U4RUxVweSmydzLLTAsvFJTaP6Qk3HYpqyh6anqdynNZyqxdB2aqtMEq",
  "key23": "2Z1gSAbGmtvBd9jyJ5JrcogWoBBybGhJzuN9j6AVtGcFPKpjnw7DMSw3a2p56vDBV6LRdvVHvPbHDv3sjU4GKByg",
  "key24": "5ra35PP2MmqWQxUVk15NJ7RrYBNdcz8nx4gJmkNx6NcnaJt6NuHaP4rfo9y3ivxRZH4pZSjzAZLg9VPmym7pUHit",
  "key25": "24PHFutcn5gwyo5ybyQUcx69j8RfxKr3F4yeEvpoqVgq2qRzWugTcGVTSoDX8r4q3Cj2vRfpSRX1Fy3FiRYvS5J5",
  "key26": "3GCVsKNjwZzWVz5tNVcRhnq2hwphAKwG8CDQQCNKdsPrnb6bzQ4AtSMrbZjJkEjibRxUNjv7MutQzstMxAmMMqaM",
  "key27": "5UxgAjgaVsngFvWVVjaWZPq5nT6DMhANFSgmXdD1YP5Yxwu3Gd5uBtfj19WVFwAWvbF4WKtc4jsRHFXfgGyAyQ4z",
  "key28": "538ZqokkuMg8LPh4VL9VWiTCHFGKt1RhhXP77nZLoeW8kDfaqJ9FCT2TBkjgeUHET2ffGbCuXgX6Q6Pyke4E9NWE",
  "key29": "4URhwvW6oNN6EzVsgqp1RPW7EMJLHjRJt2xNUzTJYE5iuVNrKL7d7KJaWgkbt6AA2ejp7NkAZ2jqpD98Aq1NbpJV",
  "key30": "zavzsbrmM1GY8NEdrNuUaXq249BNDmjdJbteqrPbYXEFQGWj28LrjhADkQ6kY6CvBNT9jLPhtc2yV5qYX39NFc7",
  "key31": "4H9jtsw9bFKVqZzjVH5MS9xvknJctuBor3yUTucdo2DvWpeYrMCxPAXZ5wMy5am6KMJSrcT1Fejqex3yE7co2TAC",
  "key32": "38DxNzxXWGLpg5gHGQ5L3CZwcpbTnUnB4CtvzjM2iKwNsVRkGeiX6fRjrmj1oSDUnHUuLn6NzFrJQB3WDzjx81tG",
  "key33": "7kdzfVwupukgyF1haWR886mFkT8vFdPucZUVUt7ovQTZvQdBn3y3onRxHgc5uzM7WCDYemKYSMeA4BqcnS1m8jR"
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
