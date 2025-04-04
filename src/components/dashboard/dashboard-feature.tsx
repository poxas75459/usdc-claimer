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
    "AGAkTU3sFn6y3J6NQRfK1qJKRkSpSG2mRZ7BixUwnLcfJQwPPoLeY7iABX9NNeuXk82mxQ5KxdWRefgaK9JQUKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TQWjPZYwzQWABqpHGhuEozBggG6F5Ndki7JVjRwRcFWaLGdz9TxioCn2ZZcqzbqba8toiRv2bwLTh1zQpL5U2Dm",
  "key1": "BXPtcANgEpXKNAMRw259AC9b9wKzbn9r3UW6K6QmXn1iX3eBjAh4cvQdz6rPdXkV7aS5uKzyiW3TgWSddsnk4vb",
  "key2": "5ZLZRHNRiNnskW3E5P2BUebfcURHNkPgaCLXq1x1YHN9gZsK8GzuVihcADWckpDha3BALLXZsKXfegUY9LAGyKKq",
  "key3": "QLFFTEMna4FrK44DZq5sof8BRiUErkWAaruLJXsV9uXTaTqJiVccN7brQkhNVtvnJwPPniYoATvzUzc17aJ7rMx",
  "key4": "2KmJUar2hTgjbAUKHiJT4kNcRiesdCQS6WJ1gdtFH8bud4RQ2atDrGbhdFCJVGYjqYjPuGjUKx5cunwJY5kj6o5N",
  "key5": "5guxWTrgTTipCLVFTGuEKmcEgvNuhN4Ux3hjqcL7bnZ7j6fJmqJio1cgD8Hs166fH4wLBHCNuaRQe8VKEQzwDceB",
  "key6": "33MLJ2zAmSB8NbGWxP7q475izMwzPN9TfhJrk9TLH8ZjuBRQaN5EjQruHaBf4KxAPcedJAxinNV1TJvHQ1BKrxwC",
  "key7": "52HiSRhejKc77ctXNeQSm2fzw9yTr7opdGLhZWvWLyUQq8oFioQcAB25ooVMiR52DZzxLvkKtPQnugqDyoVE2BsB",
  "key8": "2ZJdtCphzuhyBMnD4nMX5KLpdeQQx27MbidjoPZxrf9jJqL2WrE4GwgxtESP3fHJ3Rj1FCo7syNGAKLDjmytJhp5",
  "key9": "5xPne8wtipU87kkcza1dbG4n7vE5syVQwuAgRHhHktyBYrM1qhQuEDHnR11TkECiVgdsL8kShVbJeYrShsudR3Li",
  "key10": "3tVXiYE9DbaAYWeQL4QEaB3MNK1153nzEK61y4cF2V5Sd31nCcPcoNcKe26Nh81X5yV8iJA2mCbrfkh2h1XfBSLS",
  "key11": "4GxineMghG2Pov9NgNiKWs57gouyVT4Q7TSQ45yzuaXxqzef7VhcGdZBMTRDNFiFuUdfAvgyZk4KJUkVkUT4zdNn",
  "key12": "5gvef9tsoty59gu5xz6zWjdv81HjBNYRYQWe24XMbLxaWiBLo4ThmDidUE31yWHFcXm8kN9pL3obrSCLQTE5jBdR",
  "key13": "5CzDi7fyEFnXUh91JWFJnmYgiko34jnW28BmpUyP4UivNzmW5TBM5RPWZfDpyiKM2j3KGpqRxfqEb8EXqWMeTAXs",
  "key14": "uhzhV1GS7Quw5ZKLBooBmiJJxSStfWi4rwmEb6GpBQGcXameDfjc1PPZ8FcgUc3znG4jumVBbKha9fU7qgGhm7V",
  "key15": "3GXDXLNwbfYoCCHDKnxjVhfKxvtBTcprRbFBFNeNsk3q177e8dfvaVC9vbRXY3o84xRZWcrfFbizD7QmL19W7t8",
  "key16": "2YMHRZWfyabw913ktLZ3qPLpy75XprUoLtZ4PZ2EngKDLQKGth21HMvGps79Nxkjsc5kTug63yHFLQ4vPWYFbq7m",
  "key17": "4Ke8C9Bp8JdUZfU4teZXUmScun3NC5tquXwrSTZNgfLmWXT6RyofXnVSQayDR9uRPLVCHCMaMWra4FZrxnKNFXe5",
  "key18": "4j7dCeYrRm5LMTcbqaaue3KuZG6ySv7fHeJgQSyndASSs4yWhRyRbecQSyVLzfdsWA57z1sxCvC7K3mANiJAMfz7",
  "key19": "YjKBbvnETNvuDnGasnA7vNnqbphENNxGKh3jofp4p1DocuL4XRqx6N4y8wQBR9ddmFhY2pc9iiZMfPJTnEdCf7e",
  "key20": "5MmVf2bLw2ET3NnP8xgHe3LPrK5ADjanXccvfw6w5GzrMkzVahnj39QBtmcu8QNWWUbuBog3GYTGU2bQbcXg4ktc",
  "key21": "2uKDob5FgxfYhmgYJTdnK5DsybNWfnWgNkLEVSWuMVhDf95evGnrWdB5H5YSnA4iNFaWuC5vmEb1wPSAURnQm96c",
  "key22": "58pYj5Ck7SLGjawHJPanURGkgCC72yiFo4R2hGvGxHuBmS6sfDLkGU24izM7PW41BEXu2bMDVArHVZ2dMPQWkRXa",
  "key23": "3huekp4do4VPK5Fwzba19cYajEvy7aUVs8BULjs8JUt5VHUuhYc9YbCWb6zUFwi3vAoiRrUy4KFuDpSAkA2nAJQr",
  "key24": "2K75XLHhztXz5S7j5q3SoCj6Yr3y6qCGBTvLU6F6JVP7eXi4fVWxQ44X7ujHuQZvZd4syaQLmtYQpWENBqTXVRV4",
  "key25": "31QUNXWUDTjjBhKSvgkeTjNbRWoH22MfqmtSEpm4dn6N4mc3BDXNuxxfPTi8GQJKLCM9bT9FcMdxofDwWLbsk1T3",
  "key26": "43rKxch5Pouyhz4LYcMTw6BD8bjQe8p5ez9JPvnvKubE7vWgexioqqNxvghWoS4n3LVZGGeAyvzr9dTkGCFG9MTA",
  "key27": "49Ki8m8JTeLnyAVayePMWxDgEV7DrbhGshJDpYeTscMtwMCPZPJQnpp6CQE3o6DZPaGnmnWum27kdPTBT63gkxGP",
  "key28": "2u7LJvp856TVUnpAYZieAGYJ3dSVdyUwWtV9M5J9h35spqoTwvGHiLM7tp8eTYFwyxTKRcn9c1zn8bVfTeVPNnu8",
  "key29": "3WFrm6Br1G113vWtdJvaP3H6Q3wbyUvzCjQP8A7TT8vRN3zm5t6iuA2JLyKwPXcRAPUB5YizpAZsBtgiY8B9w9Xd",
  "key30": "4PUQwJQo9STxPFcH8AAv1pyp4BL5k5qywvpqYgjQRTsGaDpPSFTD2B7xaaBiqWjECkVWoRm7REwuqGBxm3inHHkA",
  "key31": "39SH5axuJw9up8J1bdk3afvFMxpYuGezac7rrhDrdeNpbeCca83JEy6HkfxkvmSKzpUt6QcANh7bo6H8QF7eaATW",
  "key32": "2CVSARvUCfUXcgztWKZCUgJzPisgLXxnFTcPT4WYCzhETXUDARtD9Vo4ncxyxkSX7Vuumyi8npws1ppvTYCgWALZ",
  "key33": "3AfnZ2fqU1HyL68ifR8VJsLKbFeXfi4U84vUVAbtCudRxKpgsEuhdJ84NBssLoC1J3xWynWXeUsLUEyFRwsFB4Ks",
  "key34": "4TpViqYwuMJXSrdL33vAcbS7bJ74ejfTMb41Eb3etEMY5VVgjSSiovdMneoqJmv4eoqqZuLZQqCpy87kpKWE2r5i",
  "key35": "4MQVxL9EqaqtaBHNcirn7jbVkboNeZQMUZBfPoZFXdJaYrCt44tcjiT8VE6rHbAjJw24kvRnDcqkqjUpwjjpF3th"
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
