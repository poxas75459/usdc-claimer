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
    "2K7oTXaCK82Xf2LjYUcysEBqq3mEWPEBdnxrtUKcJje85erY6nA3HWbsmJfA7JrQ3f46PH486H4CiwSNQQGBeZMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1ngt9Y49diTUXbrNcB4uYpf8PNpKKbmygCgL5UW5SucBT64YpSsfRNdXv1FyMQwm424jounZMv7K8sRnmza79n",
  "key1": "3yGfZM5YAr8khtd81Y2nWmjnjpp9yhsvrVNhqmLkFuiprQfp8bTSSQaVH5WZCzSdX3oD796iGT2mtavk9wPYEU9J",
  "key2": "2o9xBQyt7DH7sSsJFx3P967PApsAv5H3CmtdQTryZFzGUrADKcnsacEYGjf3tbKYNcmtztUMosgch4fmNab4LSV1",
  "key3": "28hqGKu8oTqmuFTSbDFHc6eH4aWHZZ32m4AE1sL3FEYSKqswdm7jxDbGPjSvhKZHN2yR6Sqh6UuzbmFryrtW86it",
  "key4": "33c293mebDhRvj5HLJaUSPbkXW1g2HFSTuHCTZSGJgN3i5BZkmkeRKGQkwFD9HbKzEtbdrB9PCii58Ajkm9qRjUg",
  "key5": "5hePPLhSB4oQxbFJft8LRGQ43xuuhE161VRbK4RPrHBrPdR124LBaLnF3DFV4bSaZWNQSqLJkRNKorbp7EpXaHc9",
  "key6": "3Q9uorPY2RWfHcmnnzWNxR1agXZKWCiHkTN9taZWPFfT7VhGj5aopXuwuJucFVp7iSBo5HpRkqbb4ujTKsF592FX",
  "key7": "4Hx8ACrnmvmYZomdggNFfrScEFN1UY7NBSzBhC2SC8bug3ygDxWoPYQV9AseYvhZFeP1BQwETdqz19M3WagtmWQQ",
  "key8": "4br4yNgoKK1Lyar73BRju3WsGy5Kx5eRsbG9JgwKRLAYT8kYJ26rqkwZ9SXqbhwAMNPGFYDm7QttHu3sDwGkVSU6",
  "key9": "3shtRrs7T7dHsrp8nn9YfExbpdvGCo97eZijGiSAcyabmeXaNYFw5ikJLrxRvaGkj3n33yAQY2H9FxgNTLaDhCTu",
  "key10": "5VTmWgB5XvJReZnRyXEkyh2N2rsUNG1MjGvfgWkP2g76Du1p9L7Fj6jGQnyZBt6EB6HeAwbTK8QhTfGupvyuFoPQ",
  "key11": "4wVn9TxSuWSrN1gvKq46i6LLsLCCBEsYeYAh11kMKfDNjpEEx5RfQ5PJJbsG6AT1ZxwcU55BEsfjTP8GZsSuxNH6",
  "key12": "5hx3bgfcuG64ssevob4rrMkP1CbV9SHGxi1MmUtujhafud9avZz8zjWnw5teo1oHrJRqtwkzq9Hzdsmgny8FBJbN",
  "key13": "3mXkciFimPB69xxzqRp7b9vcwrwayTfdAkK2KHFSVmmiLnXS9sUgjrSCfKHVbW7SP1QDbeDLKVE1afeD58DMY9RF",
  "key14": "2xeCoGAXkwn94uSN9JN2qtjeirjs7o6VmQLjs7ebmZv4jgs99GMcsHiJTs7yJodoL6xGE2WZfMMftqkpy7FuPLMN",
  "key15": "445R4P9WuwMtko8b6vriMytktr8XWyxKNBzyTnbojKjyE47xKAtjkAEeb8MvMRP5N1zQ4r9zkRkTiwhsxx1fGLtB",
  "key16": "3H7EyiEizteoHuXbGd74HE2FzYVY3ZdHgSGoPTqUwPZ1mx4fufcbwXp6tWJeKCViMb2RAXNb68nXZFRqgNE44KU1",
  "key17": "2Stcy5hWCCjJdteeLrBrxX8Vp6icLMytfU5irSq5RNKTjZDhoRWb4JWX6hgsbpFFe5tCa7KqHRCwYg4m4X5zXTXZ",
  "key18": "2ovZAjPoL5mHqkFKb8R3o6gaJA9vq7AYDVb1dw3YQDtwRdvBB6d9GfF1NmbAwo4yKg45zfFHEagXyt6RdVZioeWv",
  "key19": "3rN5gmSqX9iMdQhdFydgCrLYgWk8Cm2zaGenBkjAZiSr6hXoR6WxsDdmyPRKPQ5SqEe4GB48hfg32BuQcHeGETtK",
  "key20": "dnYUnmM4LKTr328onBTaftdqzc3xjxV56yRmnMioqpzyCh1eJDLtivKugbLj61cXaUqZrDRE6UCTQ8By6MsnF1E",
  "key21": "2owMk7EwC231Wso9bHhoPFqxSYgahkVpB6LxpfuHup96dBrZHVH4CPiqwV22cd482mNYdVDQeQA6U3BMkh68A7rd",
  "key22": "27FmHh7fsfdzoASRtdV1XCPTj9vnXDSQyW4cSHiYQB514TVkLT8QouNDKmRVhaKhomh34ddikvcFK367onRNKA7N",
  "key23": "4mxUNzzwgAE6kQ6gvgdXcUVTAMNwC9QPv2j4EvrYk2pfJVEs4occGfvTsEAxTTfZZ2xqxZwtjWZNf4rsdTZGdS8r",
  "key24": "4TqQaT2rEnZsbvvHYpKjVryb5SEYnUXkzZkVoGwnCPs7smsPxLYsSw17kWgW3LaZhDJRyx1wwT9yfsv16rw8NY9L",
  "key25": "5gnT492o6YdiCk61kh8zKswLZRjYkHfiFx1RBrcHar1jGLJhFDW6ap56gsineJmCFFhs1mHvAdRQCtfZpQhXyV9J",
  "key26": "2Zfxbi9nbzKRmK1AVUTrFW6D9v8ou1D25YogwGf3boFGr8G4mYHYgv5VdQ1LajRyoDRs3EaHSD5qGTXXc45A8hit",
  "key27": "HRzqRQhjAP5HMoVWpgTr81P96C7Ropa22taeAvtdfeBg3KmMQrhuXBnui7uiXusN3dZbZrWhwjwvst4iSJ1Y5Hu",
  "key28": "3t8Kpm26hAXZhsrzFaPGceyntRLHjtZLD4mxNg8mcRxMER8pQ5ipuEttCTXdrPz7bahLXxAAFqsepaLH8Trm2tiE",
  "key29": "4HXbXoMirpQ9LEsk2FpyZoan4cDNb8ofzMS9fVAwWwCq7JaGNFbs8arfdBZwP4v1Hqa7HfuKonHqVMsVT5Ne8nfZ",
  "key30": "2hnMjVbfxkoG9LqTYhG8NQX7yAx61Zk6LSVqmToCBXLW1jhVBAp4Y7G42PXAb6GXTMXaZrFibq7FHW79DTLrCGvx",
  "key31": "2MwvNGWcMsHVmndW6d18agfM22qRJqqqHAXZjyy97wP1FvpMBgMrqwL4RaLpgQf2Cuenusg3Nanz2R472CyHuaZP",
  "key32": "2iJohGSFiS9kvp2XokQhYKHNUPwBaogEpzV2NV51SzWfXbHkgxSjhLCVRFf5B5BTjurkiErkncHkKdcimjdZjwMc",
  "key33": "5Dd9n8HkJJHkeKkWs3HUFqNrezJbhpCp2B6AEaAEVL5wKVaWN5K6RWyU4vA6cGEQywE3BsgZTi1oWUSBx4Qcd7KQ",
  "key34": "43KqH51jyrK5X47o2c27p8pyoDAvjpQxYtBr13xHQZpTLyTHXYYEM9Ai85D4ydtW1ANx1w6TjpAZJRQvjNaEMbU",
  "key35": "21CPDP3GCJPrjG9aS8TSsVAdf4rV1SrdA4JAnhvFoRJcNjEFxvBRLoAvKyViACx4SqUnMP5qX2sEUb2ENc3cKSKt",
  "key36": "167Zs3jPfqkLycRsPyQ2C4RrzEeAAnyYHn9pAjtQX2gQTPNr9ZohAp3dfYNN5aECc98HP5zVg9ASpRdoFnnG5pZ",
  "key37": "4vvjBLUC4WP1YDNgj1oqnf3usY2RzwW8nCA7uLVYKgyc6mMAT3rJBDeSSpfkxhpLR4iS39K4pgnKA1TVwSDCurPP",
  "key38": "4RajboSEiiWgicYG2X2csdho9fRouMCnA4LsTSQWAcqCyQgMoRaeHas2Mb4k2y6bYrHjRBz7FQ8TCCes5LMSm2yz"
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
