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
    "2uukBrPxRcmdat4MbrY1coD47TdW6zroRjFBfnSMorHg8fT9YJDjX2TaeHabj2UqsQXPCDcstSQdcyrBnEaHJe4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bPTFQyHXhXcaz33wxN2iU8QraRF4VocrezCTHJA8mD1TjQsMq5wCEK53xEUTqU5Rs8qFEgpixQHP9X1kfkieF6",
  "key1": "5NP1oUhi8WT8KXm63FMSHrAe5gJBbbr7QqJk4vuGt9k3iYuchkt4VLGnZuu3cC4pQhNZUuojsjkdoE8RDEqNhgPB",
  "key2": "AKTwaeE3EzAqHHzcw5r2yMp9JmDmhapG8XfYmRsfEvvK7a4HfL1L7nC4Ft12xf5Qaz2SjNqP5XKSWmLhCP8tyf3",
  "key3": "5YA4aVc66PjgjEMJj5wipNLfqXrdheaSFnA77pak6AySoa7UZPDzK63WqDiDYBLudQro3MQ9ZPktHX7rW9wx9cVj",
  "key4": "65m5qPkP3V3uWKhBUXnmPjCAfetL1GT8BoPhW1CvWimZEFQCzWwx1n3K4padbpgKHHmy6KdWKMfXtzBoYJnthhMo",
  "key5": "XMVoZPYL19GMfontTJPWYaHnmgedAbfbtWtPGMiRRyy6PXoYJExg6iTAqWJNGmov3hmSG2DQ1oiiL5VCKYGQ2Sa",
  "key6": "3ZCnMBVxg2gg1jka6FGdB5Eu2kU9iLdpdR2YXDH55z9uU7EN1t7scBcZfyB1TkL7C3bpQXbVcK2LKEXfSj5T6niN",
  "key7": "2zVfpnnr7UsZHhSaDTtK2E2JHCnF27aV385ATwr9ZUKxJu2yfUck18vjLnxBX9V16SypEUMhmPdLH9oarpGj6xpy",
  "key8": "5Mn7RiB7QpHdx9nCCaiKFWmoKQZV8uEzJu9j8zP3jB81Eu4S5hqSdYNbJvrkS1UDCPrqmHp5cGagTkPVwN5j2hy4",
  "key9": "4ZNcHTAKyhUz1yJRAgHn5h18mozVFQCxpbxqjVBfStGB8CiuunWg994M6EJe3HjoVcRivYikCq3EP6waTY3MgRyC",
  "key10": "hrQhPRzkDWTvkmSyhYE3eGjPSKx9cmMg5wSVWfxzFXenajnbsKxVE3QTMdJq7oqfrkKioio1dKZ2G7VmzqyhVtx",
  "key11": "29MRPjiNUFg22dSHZNeejMNNj8CnXrcLWQ4NojsAzuj2Bh1iaPbPkc4FFeh36o8y9PVmRFjTHDtwmooPghzZ7qir",
  "key12": "2cNwEnz28mFhk3TQadwdhEPi3NHsDuT1eJ2DTKLQGdaCr1Qe2zCsJ7onqSCQE4ymSpFWT8cmu8p8RF2CjNDXUgy6",
  "key13": "4TWYfsdVGXq4S2LDWGnscgkku6f2TahZ5XyCen1YL7brfif9RgT87b9PwmQuTNxwQDoia6EYap1cJSCcpCbnPn2p",
  "key14": "ZSLX2XH4rKhkkg3nvFFF9HWg8ULBnycn6L7bKg8pqkZ6TAHEySpzKLod4uvuRa8CYtzDxs2PAP3A2kEiJ2RviW6",
  "key15": "3HvJTLtkRUWCTnMrD2y1WfrP2Jp8c8DU5aTw8o7AermnMggJXc6uktPgyqxYDU9MRcpr7K8CpuFueAx4DnrY3gEd",
  "key16": "3dHpcLbaX4f2q28nkdi3DviEwy7BytqM7wYqeeD6v252wiRBkQyHfgD3EKcpqX7kNEXLijbxxHsUpQR9VDrbmENk",
  "key17": "2aJSZRmaCpicCViuad2T6Jm9BfMwpkAp8eK7eY5Ebi62QfrotwRCPgg6FPfoqEauJsBoyXhk5Kk7uiK2FexqMZ2h",
  "key18": "NxkdaP61ewDZ81nEj52g9uCHgNFnV8aMNgTdNH6itK93qwFBRGiWGSVwFM7EiS52Aryvb3xXyUMUxYPepxDcmoz",
  "key19": "neqnQvAecQQcDP5wo5jqJkmBwV3gFwVQLg2RKPVaBpkDULjy4qNtNoCTZ81myeTypMnQvXqzEUKSqfhp8MqRYBN",
  "key20": "XVTj4EDheguzEQrCtyrcmtZyZe2jvQBipeumKF2srQZurzxegy5guHywLeDfF5dg3Mc8G1rTAqAxRPf69YRQqL8",
  "key21": "swh26RTCrfvTEz1yzMahofcvpznrHseAmTF4JU6LfuJcQa4b3Yfd5nqMw4gx9J6AaFdtPxTyAG6J5vqfYpTHNgh",
  "key22": "5DKHe7dZ8tNyQtSfQpdfEWq7KhbowwYC7xrFNZvDM35kEPbq5NZ2aS6ZjSvTRN336FsXHLiLK2Ls6qnW3Yvm6GSQ",
  "key23": "5mEjZBS2Rb6EySLxJ4qjUYb5FPngAJWCQB8HeA7s74NNqWDiEW8HtMLJszhaEUxV5Tq1qmV7i5nWzc6MXXz9UxWi",
  "key24": "5FgAQtM6nxmeP1Lm9VoaFQY6EXNiFZra5KJxmoAXM4gc5yFT2E2tZRDV31ZzBXPSznP5ZMt1Q7itC8FgrnsAys41",
  "key25": "VBrnt3RXyxxAw26QRFZKaemokp33phSfgeqvqiS2BGC2TFTVS2vY3rxA1ZUPPLRWBEYWDRtx3MtCKHbU2Dkr1Cx",
  "key26": "3ahoWrbqamohcDTQVWHmxr4NSNEGgdaDPvh2qgo8BLrHZVpEKJSjX3id6sz22GgDSdWyriFwsxhS6KNTABZdXZ5g",
  "key27": "57UwnsLqkMf9Nq6Yv8jfsLjTTyU2MGnQgyvFbtwCWnyjEQcCa9y8SELS9ohByXuYQWrkLKEyjpXBCZayMpSRdpGx",
  "key28": "4hF2k8Bgs5sAQpzvG1T72ovHzGheUeWD51xpBtRUCPjZd4Cq37CNrkhN5pqwdDMjfMhks2Ywkst7J9aRoqmWZA1k",
  "key29": "48eBC2mADB7812WX1ro6q2sQRB3fRcAQXDkVr7rynDmzsFje8FrhSAjYcrPVZZFxzxZmuPK8ps1XC99SitnUKcZf",
  "key30": "VMbp3mdszgvUzfiGugZKrno9PMADoL7vrEL9bVgJ1hUB58JqBbyrRe1gzN8YD6fT8hLLFV97wKXddJhScwnviAV",
  "key31": "3RudtX3guc42SHscCu3qdJDhzQTh8ocFeW9n9SK4wcoDvpr6Cz4NmECRcK1WKiEvrm1jrtRXYKeWL8dbPDMSJDzB",
  "key32": "3uEJCdxDbBwy2T3Ac4zdJu99bEUvGL1Gotkh1f9uZ7NWDrThPstNhCrTuqMdWG8GCdBfo2KbaZ3qLbhBULFAS2BM",
  "key33": "3nCPmhF5ETduoTfJu1eLipK1GdEPiJ3oqUwW5jiNDFyCfauJwj5Tsr4MtcmnhrUgdjybT5sfN7dz68sSUFTWYV4P",
  "key34": "3C6y1BwtrqtAL6B8BVHTYamSAkCGD5KGSademDa1NJQ8beMmA99ADfDfQnRt2LXxvfcvGMu53SG4kASYztyMYLFH",
  "key35": "2Yq66Xdm15jybgGnXqVp6zXLUUZ7g1FNCuhny3fojXCFc1xnrXqFTfn9AxicGoLfjMJyuxvi94EuHtmsug2bE2VB",
  "key36": "5AxH4Wi5wdQX8KWFmbL4u9zxY3LSJP8o6UJh9YBGGKr2ZUAxvrv7TCWyR9yznP7TodZjhuvSxHha4yc784SADQ4k",
  "key37": "4NLBRUXnCHqCNmcTcP86Gr1Jr3uAiR6n4PeSMQA93p4b4PNfPbgwXveTCrwCWNVayfHZDWWvPx1q3yeASrANNZcF",
  "key38": "4iAYsVwwHXeSP6NyKntWBCLf78mX3jnszGL3VKgGCQhZ4S8wLgvrFp8yeDoWUimAQMtUkqVk4nxGKjd8hKHJBoF5",
  "key39": "5evBwgKqcUtrVbeWfU7Bk6R55pZodf4jkihns4dmmpzNGsKQvVTmcM2iM3JSK3MgggG1i6hSzKLJ6TaDaZLXbUEZ",
  "key40": "3Xp67J7tvJuWwKMEZYH5i7qnPua8qFncWCf1bwiLwmdvcMk4FMQrqG5dRzhnWLS22gnmHy28erHdxgm8sARzkjFB"
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
