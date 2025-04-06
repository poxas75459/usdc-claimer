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
    "3NKLfDdvtJFMrgqQMGiymfxotiTP9MPzxrFCVLdbfGW6tM33rHYeLTrLTWLGuHPF5LCyKVo6fNrwt1kUocZxFA1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWaoSpt9cuh4FE2gUSQudLGbk6CtzAnr8iQH1GZXAFvonDwLtsJNjizrwd55rpe3nd83Raqxrw4KvW9igTTV7t2",
  "key1": "4NstjSsYSuR2NRq2grT4Pe6sm7NLEhWewCJhATXJi382n3yUo6ipR5yqKYxwDju837F5eWQQ6ARZcZ3SZRi3wtQP",
  "key2": "hSAakhzuD9soi19yiiUZFNuEEeYTvT33Fc7keWCLy6ZeQRT6qhkArKgfQZ2B4Ka71vmjtQa8MnPXTzAC5RG7oNq",
  "key3": "3LGRWfcaRopJf4dXqTf7UERxaM8VJjZ6eewasLmk37L5uRJc1o6eWneKDxKuitnznHR8KcuGYThBJEFy9c2jHVfG",
  "key4": "21b5NWjfD95mwrvpWu4ukSJVjXnvdE5RFbXSfYrw2cNXiQTDC8H4MgY3efFRxefpFM1nVL5CuZohiXq1BPvtWMdQ",
  "key5": "4mSYDzTaYdraChDkfVpUFtXJ19mo2tmi1uWjqX2d6EvWV7iMy5ep5dHuQhcJYyxLewmWvjerkkim5p476iKjK4dk",
  "key6": "gtHDT9by8L4vtjKPWXRaL9RRjcyuzRirvEDJCcFRSqdy3sDvHtBg7atQ3Ynv48nFLzD4rpAeQ7EQNCWPTxJ5cvy",
  "key7": "4CoKM1ryHbaHJyWCJ7o6HYjruam6T7AU8VR6cPujP6oD1q8PPYRDij6tpYmMtDwLSR49pRSDBfLwb4EHPqEdDnYH",
  "key8": "MUzokqg9uGGM831ZSQbewyFCy6PJ62u3F6NkACjkubPEiJs8kc3Gw7emeQSd7AUqYfA2vp9vddSgEgQ21de1VoY",
  "key9": "5eoyXuW3gNwEFHq4bd3QcyHzzN91pLs9MeQMds9ygheXFeqpmWbHbeMrtsvobmGa18DcMagDwnuhALhghMpvpSa9",
  "key10": "5EP3zQcEHw4abPb3zMwpvXwiVRgP6Jx38f5drv3umDKHFYNpm83o1khM1eQ5H7MWPjjXCxi1UFKMJTCFzqJzNMtX",
  "key11": "5vo727GXfyh94piNbasHgS9zM6MK7fQgwNA5s1wEtnwuvLzZRaTv1vNqKgJBqQnc7eHDCQd559wRcWzy6RA2kpDW",
  "key12": "hgvMjHpYMHCaDSu8bWzVcgmYRiXHuwzmnsxyUD6w1CSqTBJycTJAv3KePJe1KM4uZhPCeaBJPQaRPR7QCuoi3R5",
  "key13": "5tjjj3vW45Datnbzg34HG4YMFNAyehmXHNZ46HFeZjyzFv2YqUPmbphTZyRuoCic2gxaLGvrd27FyYHBRQ9CckhN",
  "key14": "43DXkXyfH7o9A4vvuQ6dyMdqeqBxnQRWuxKkoVcTmUDL8mqRMeS9mCBKz3Nu858mAj29p9cEa7taYyHX7NVw6Tvk",
  "key15": "56wiBxAvq9yvLvPDD2K7qLSh9s9FLGKiDdC5wLvBCpk6Nh7nsqnYSQexV5TYZH1xPVp6tNjRNVSVnf2HN1RGsors",
  "key16": "4dZZHYxy9zeTQVM8bquVRH2PTYmoDwhx4HvkAVu9G6GDPcihce9h5TmXT3AbjhxdCUzfCK5FbyaccmR3cLdx3Bzi",
  "key17": "42oh3nmTWenUoH9SBfdujbwrVEHcpwsiZbEipZ6dJmAQC64cSXW9rVBNC5XfvaNV9R5cRZG1JvAQy9LHAacJETns",
  "key18": "YmfUSEtRLcMG5S3bnnb7yWH2QjTk4fvYgK5askzn1tyuhBrWETUyq5ce7rtccKxDYmHgwkFpwDHdu7T9swLKNhZ",
  "key19": "5jfpnAjzu3qLD5DFQLqgHV1QkkTRfgqGKeizothZ3eUmjX6dTwPj4op5ARbuLMAapkaTE5qReK3RrXwdWKC6sn3N",
  "key20": "4Qapm27wyBut2WM69EMLZz2dyDUZJfDEhaK1RPG5kHpVTg2fWqUqkFxERf3yZgxvLVhvZDJ9PyirUtR76Phn3h3E",
  "key21": "Pk4u2SWz51CmenJN9tSBuCsqJrbEvBybUhrdTkeu7WQMuWTasEQLrbg8CamUvTriRqKBL8ndjUxS4FPjSuK4Jsn",
  "key22": "3fR8jxrAkRrWXrRNthnVYT7mCTBNWtMZq13kZoxp7yWggLQUmY6iDvNXSeXgHupYDYCvAfxqwsEFX32QFQQAo9a3",
  "key23": "bMVWaifmKDv9TFN16JB4etNn3HqS5WyTxvwApZJzeWCC5BHvBTNVAkUqok6QDUjE3NWC6QnmSJiXi1uYfYwrJxK",
  "key24": "2ZEAunmyhMX34Q4aY3DhxGN8RTJzeWR5EHVw135j7n8uWScFTbgxB1JkFf1J8piZW6AaRhr4aJkvBTErNmqx9mZc",
  "key25": "5gaCgiByjrhjGYvCUB9RC6CDdLAiAEVdUD3Xm8KndYYoMf48CKKfAb9iX9G9uSmQ8UBb3CxGT8X4UWWC8RaJ3iWJ",
  "key26": "3NHwwT9SuadcWTh4fAWqTDDz9nMgM9EgiDQgcPpkEPw4rarM7E6yuDtk5C5McX6JMbuewyr6jhr4M6hNExMt34it",
  "key27": "2NFRwM4Mj4bEGLknQ7vQDZB2YuHSGPZh8TcUDDxBTp6fovqJFQLBJ4nkJjdvzjEA7VyzuF8WHSMJSQZaMk92muTY",
  "key28": "3oS1HaWxnTyPbzK1gqTQX6ttwtbBX7sbbr1U4FD9VbxfReX6BbkwS8VmyFqvhMKuHTd6x5vkkCUVjYDMAB4V8npF",
  "key29": "5iU6pHATzy9pa4GpKeqehvtWUX3SUzKEiaxQZqXkibZXNBUHfPTY54GctdHLLJ5HdjAcLdSSVvoiCBs3rxvc8bbJ",
  "key30": "24srNoBTd4WLBH3pKgpb2EkgNHWgb9BtsWoL2mqzaiu3MNvZsYMvk64s6TRFW4NUTqKooxApz1ihaCzuEaLNaN5z",
  "key31": "3Qx1wW7E2uUo1ST9EMXheMwcV9phTGWbND3MBgTspHPQhhzVRq1z8ykoHtMNXsXYzM24ZQTxe1J25yTNWqSKf98m",
  "key32": "3hYfdrUsLp5wJUtQnTFdsJCMx4SdTXkz5w42EXPwhzG2YkcdC892TXGpVbBiJVL48UmvppSKp5frBccuXF28vMrU",
  "key33": "3ErA7JhGZBU1AoCbnpDniYHB65t2cwHJp9GtQ4DPTT3Z4A3T8nLpVWT2eayNmB7G5oduCiXrRYEtGUn9nbpSxgDb",
  "key34": "28tkqd2R1cFAoz1RwjWQny9XMBccY2Q1s3MtKaSZDbccEp3vJFPWq5uLddU169ZYHjBtgxUeQZeM21rYA2pnbQ76",
  "key35": "5zFp1fC2ksoGt26BTYhc4e6WGzWsG8bSguz2SBuhfZXkAygTCRrDjHDBqdB4GEt8znydkxiSgjS3NjzijJf8tr4D",
  "key36": "3Afk3VED67jzJ6AKr6owbHxrgjDvj6HRFMDKC4fVKJzPa5voLpX3UJAjvafqYxNJT2kboXmNC7gJrxhCTEtkvzGd",
  "key37": "4dUJU2w7dLvTAhq8qgYy7jBnuzzN2aFg4cNxTLCPfVuU4M9dCAyERehs1VXqZDxsWmXvThfzWCEVmnFMXnjgLKBd",
  "key38": "62RMZLwBziNsZQsNyXW1NbUyRte4CctKG14yJzFv725WzdS3Rfyy5xSzWL8kF6w1wuy79BpweXd4H8ich6czNYJM",
  "key39": "64ZMXMhNcLatWPNeHzAAfCsfAxnwMMMJyHzZxL6LGkorrm2Hh3NAB45somjDzWAfA8nfHhMbH9ruQbZfHm76SCuW"
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
