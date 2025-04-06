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
    "51BNtbnyivPLYaHZJZdXft11GkAGGKsguczzuYZYyWo9mHUCxH73GskaP7n2hwfSMWn99kXyQWepSLZcQGHXNz97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWkVdoBk1AVnKRnsT9BwpChnJGMRTdaZ2XToUd3quNAnjjysSuNADEP8vzbykrG3PVfwGPCLGWXudfoRBY7pqpe",
  "key1": "3MCP8XawLEgMUbVjK9oC1ZKTN4qsjroaBzQABzT3e5GYztavjRigiyveYCtp5cGJQBLdBAhZttoRpTjdGU7tG6uL",
  "key2": "5yM9G8DdWyiHU1P7r57ye8kUoS1eyg7yQMvamaWMAA8htEmrhtvge4oDqdHv3k2XDv6TxntPG9SfQEGfGsAUmvq7",
  "key3": "45z1ZftxdAAH4smebAmcgyiCZuBFGG7LJ5NLrs6Hc4gNekUyBEG9YmjKe8mUoQhU144t6hgtrXMuMF9mRaN4UmTi",
  "key4": "49qSmJfkXqRXVmJpG2jSgyhxV3cXb8bUWUTwvFAr4YrPGFw1fN82e7NBAak9CQeHgLMCVBhYRFewuKDDiNpUCcVA",
  "key5": "4pK8M6Wtgpjz2LFbSoA68v6fo5z8iV5YUkLWppb6dhhx67X6HpMeUVZYpSwszvhXtP4qvDsAn8ZitZ8R5Z4oCePj",
  "key6": "2QUBbKwTsC1EWudo3AWquowCC1JDxcMndLFoUTqW5gTP61gngNUYd799WUzGP7PifwDfbazK5RC7Pv5zWN7AaGTv",
  "key7": "4VQm4yp1rpeofRBmSw5y9HxHFgX7ZTMGNsjV6hT4Lmax6G9Z7k5sHHXQB3NRJXDXptuzBiXFVmvJ4zfqKQdHj4pe",
  "key8": "5hdCaZUaTMwBAnuSA6ftPoaMseL8cHEqHJQBbw6NUWAdyHdNpTrpuPwvJzcHcW5DxmAhN8PjQ1oeV1e8WdyX7AkV",
  "key9": "4K7Ttj51wNodTgrcgbtgqmRs974UDcGocgsPCkqEfFHdXxTtBLBwML91aNxSU4BTWDof6SrHGCszs1iYE6Fg9MfS",
  "key10": "67pmGkXZ6YTWvTdLAFXXiAH5hQDJcGBVhA8M4rSTqJ28aggPB2dy42MTgQ3W9QE5ViCzL1yeqQ6SiCC4JdvCzZ2Q",
  "key11": "4aKSJMK1juoRxWknx4pa1fxc1MTpmQPyL5eZUSZnNQf7SGSxes6SSTfZ1w7NsuvWrfZdMsCtR53QthwU6aaYcs8g",
  "key12": "3oo4cwvjR9cHQrApe4HnhsosZphu93kanHwEb3SrWen8FmWxeJrbfk6YdnnGotY4i89wxkER78NeBZTQkV2B8urp",
  "key13": "62Zh3kZYpJXxT2CPzibAX7qWHq78YZNXwFGMxwfE3TGwPeGyYxWiVfULbQk9mKWKmVx6ZKSwibApD8qcHumdpvcL",
  "key14": "3HrSWEDrpDD2ieegTnSnq6UmZAPmRGiwRnJitu43nY5xXby33kfKjg2i5RsSx3n2w4NPp8z7ejGqZbmnWrV24qGj",
  "key15": "CNz2K962zYoJgJMi1UpfdgCRD4do3YdiqqPZdqRjddcCMxwAWQCU3dW6HAgqbRUBVcD7BMqkNrTdetEMTDFP8p5",
  "key16": "53Mq3K6SPGAhgRPWHA3SrbDRwecUKHoxararQhpJez23FjxvXxraB7rs2XeNzeS1uRNa4xe8zuNNPRiS1VRerdg9",
  "key17": "318nRU4WqSwAyyW24pJoNbK2CcBdtq3UKDmz1BfmY42o3SaiEUWdQ1fXpCgDEZ1R2ZQqdS4P8dfmbcbas21Zyr6R",
  "key18": "21ZRHinjQhBMvmArNvg5bhXPXGNc5fNUVeA9m2qWa9JxMqNAEWS6TNAN94xrhHXwjDhWeyf7PznY7ZbKUMJf69bx",
  "key19": "4VtBvGGPyXo4AZ3igpuZHLeJRjrogUvMdE7ZtKorXhod5NefR5DEmBQkaVudA2SGvCXJsShAyRazRji3RcPJwk55",
  "key20": "3oUcZH1tiNMVhRZL3Bsa2LAkBTqijYzRGw73js9Fk1qamYdqw6Ky7pKJKohq9SLoWZoihafJNHQ6RgFGaW8dsamQ",
  "key21": "b5DvNqMpXDmf2dBHogYivT4hsK65Q6xX3kjeSb4ahaX6R9QbyVrzucRTuQYuqPbciFFn7iwj1uSVcqDo1xGq9Gm",
  "key22": "gi1KF5dgDF2UVbL2gzusRPbGxLenAFQ6dFZ8KWxEUswFP9ZZopdDhbE8Ve2uqv9KGQWNeA1W89SCnAWNo4rkTf8",
  "key23": "4JMo2qGavtRV8BjPJb15BZVB2i64PsiPsHLDXis6mtW4VYZAKRjmaWZMiLXuTJeaNFp4LiCL3ocUpjykG8Q2X9v1",
  "key24": "2hiSEVXmsY9vJPgHitzUj18v3JstZD5EKD3bqVUrHX8kYPuXL84cesFJcB6aZie6h9rh12KiNMGsJ3HmEgGShN9G",
  "key25": "3DRZNWUnrz6yecg1tG7kwLsG38z4tfBZHNjQzNzZ2mmvz1eWKDVpsR72rxWBUp6RQ8XD5dMwwfN4FLmGvVkUmU3n",
  "key26": "5hCGcBznD7Jd1EcyJjkEbPGGhCwnKC7PV91aFsjsAHdMybTJJa7SAMy5xQiSbCDRPfUxEHdczeCH1TWpYpZHhJkB",
  "key27": "2fDFGDg99ZtwWSXGtXjNfmWXtTa7d2cGEsSoouNSFT676QeaDHApeV5vv5PzjZdZQtyYdu5bugbEzT1x9LzBQPTP",
  "key28": "3hHWoeYKwSkv19ntHQB4UMNbd77Fx4YdRcGDhJ92nNKeH2JnSWraXYqTDHpDtTFPX5sTQyNTd82CzRVdjpoQnVrZ",
  "key29": "4WN7EMGE8HL4Lwnmgux3Vg8PJGMRnokXezHoGr75Fb7QcPSLyytGuvXXUHLJcMjd1s36WUxozNTP6SAAYDkSfVTL",
  "key30": "4TafpTkLis5izBtHJ2rv2jcv1pw31t2sqVy3Y4GN3NjP7Gdd8EoMi6zQfpnGeQ5vGGUX2gAVuWqfCgfj6ywPJweW",
  "key31": "66byVBtra6YXnvpRCXRwBvEW1rTXwtrYAHTSDdZy7Vd8gKZdt8tb4hRCe2MfmqYzsahbNWgPSZgeAkUkdQcX1Dze",
  "key32": "JkafqAYzqShGc5ANN49WRc8ZA8BQj8ZfbY4cU1Ta58627Bv3uvtcosuLxPok48beSVrUcFdAz1uZKBj8uNgnaUj",
  "key33": "2NX7L6mmB8XvVu6Uamf7d3odguuvhKS6grPGDvm66ygS7J3ih5ioeVRYDmqa5CRtCXPYMiR52WoDdYpXxkiUD7oH",
  "key34": "57xnuK9zRM9t18X4DBgTzSsRT9CZR3D6Sab3FRZmEztUsc3UKwAf9iBpX5qYD6Y4vAgtDMVAMcz5hYBAGPFzrbgm",
  "key35": "4VVNHX3hcVwyYHz3YEUoT9DT8EtFtGk2KccH3tTboSTferqsGKnkKsxKQov6f7ZuRukRsBWRcpMZf32DgFWu5NiD"
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
