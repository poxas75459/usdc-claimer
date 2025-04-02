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
    "WXqPnAiQzayqvAEJcodG9dgrg2KSc24vf73aDw6pHdyPf2JHLpRFToA1EK8NnJnkXRongAHdugzKeMFEnWfYVs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJcsmPZUabwAsMnpRDPCW8q2T8iPdkALuHBbssqbjhRTfJaP8v7ztsXhEdJHK4KjHi2pT67wkW4bNEvmkbzkoBm",
  "key1": "4DCcN7WBoGi1DzavSk5j4TrePrbuunndDWUTeAKJUo2bLkm8BA2PmYTuPwMfCvyLW5T3cHvpmWXSQbRCzfCnzLR",
  "key2": "DqQhxUw6MnYAc4N8TEoK3EcKzFgZTF8gMxh5te8qwWbSe8M3fprvp8giMK7sqe5kuLMFBDkE2cFNehkCUvULzcK",
  "key3": "TMwArdqYkLH6dnU5XMgXzEYpS86SvzDkHgYdQJKgS2e249VubnRpp9TftDMLZUybhbSU5BfN8WBWxCLd37qeoif",
  "key4": "2reWLc5h2pQ8uAJWtjvJhW5Zdc1CewHEhZUdnAvjCxqW5VHtbUYbXToio589Jt57AyoSz2JTPpzfAbHMg2mStL8L",
  "key5": "dkbdXrUeVz2EFFzge29mci7bVTgaGkp4Tfrua1KYAC24HaaNjhtNUdFf1sDs8bvgg7rkMmCUWekGsMGgES2b1mC",
  "key6": "28AkRotwtuwtz6pENWBqsfGGQPbwQcAXCYqH7Muq79hNx5jKEx1WkqvSrUrcV8gNSRgQ5DaPaQ78r4mNcgw9zU5W",
  "key7": "2FYttDfCpoQPgGXJRiTv2sQ5P418Yw69Kj86aATus5y9bgoGzvftkuKk3mHM9Cv94E5bZMWEGWXjnwd751dtfxwS",
  "key8": "2iYCZchS9rNBW9YNrNRhP8ze5bViC228rZJRe9Mz9aeyqSWLuJ2d7P6FnAssqpEzjyAQiP9ABzrCZpA9aQfR94Uz",
  "key9": "4KyezbQGFL2spUoTk3uErhwVJLJD4xQDDrD7gHsYdJ8uaTHytpBULHgPmTxYoMajMzZ8g2u3cVnHt9uLCRwuxpom",
  "key10": "4iRZEMA4UZDPipmbbUYHDmqj4MjuqVoXu8RzcRFVhK34PPXR6nuQyx2sd8VTzbGYgBF3Zfa2gcBT2XcmYwdaAqSn",
  "key11": "5MLgbdjbc72CCAGQwhbeAS2ctHs86DTKxXaNR7t6cLdXx1jhapjFWwxsuuCaCnC63iJhbWerqBDEDBXmqWPjYeJT",
  "key12": "48Hj9CZojDxVb4STXmm74VsuoHduxK72RcnzpoFB3HKdURyVusGpMyPVJ4HV8WNhNhvLg1xjc8w7LMBTr9FbVUDE",
  "key13": "4NRV4WKCVynx8hvX5oBTXwoZBcYmk4qAhgWhPUjB4AdMerq3yEuwHAno2H2uHN1tZzpNLfb7xQGPAu6AwEepFuYG",
  "key14": "2YAKdTgo9ovy1wxnEqSsY53c5f8962BeSJfhzveMYDfygigrwS4SJZtFGbXTWiMFMk6Ka7PuZ48doZvi9arhiXP2",
  "key15": "4f6Kr3ncMqhx1ASmeyHeQT2RBudzgMx6QDmE8qhGdXA45iRoN1eEV8U2sLvxAfmVjPMox1mN3PSaSVAH1edrcDcM",
  "key16": "3nfd7JQgwoVCm1Q5LUrkmHoVf5EkAWpPT5EU4LTCTTRjYRCRsiWHaNDjJG3ZqmHbtXMVHw2NA9c511nkYgVFgDPq",
  "key17": "2cUNYbGdJFaYAFuiZ5CiwFF2bqeQYmUKEaSjezmytuAyhy2FfizCaerw6BkSDs2meMuL6hP2hU51bnDqN7EBFbQm",
  "key18": "3rwpXz7oeq5i5HvUG1Fob2tKEfQcf8EBQy3oJLefDwACbMRXWGUViwu1DJ7r2CKPUGTQ9rnBAeVdi6XniZzfCvSd",
  "key19": "4cTWD2gbrsi764hoabbS6vZqy3m1LfwVkRFcZJ7stLYxUhGxYywnKvQhpGVWNvJ7PDZYdkHU5y8Jfv87eeC2yU8f",
  "key20": "2t8hjzaJLRxFqBdWSoBfwzmuv7GuFUfSY1wnpT4EGRR5whjCkrfnHA4r58WpmhgZ4mHrGuFU46QXnUXKvsKwyGL4",
  "key21": "5UpeQrxkmVT8WYZjBQSsreSUo3kqatgvxCya7vhsPhhq7HjJ5iKUe4evX9vKxBkDEouRp9cNHVZGvxEBQVfHNShZ",
  "key22": "4PRDZoMU7oTUSSX4wTFa4dGq9AjgpNR4W2RxpfrHCSUF7er27yids4r5PbAnABcPnrvHSZERqG83A1yxDJocjA48",
  "key23": "5RWLhhGaW7WCyA8xswxe6b6fwUpmA1Lajq9jocR5gQKaSZCLJ2P4DCgzoMG8uusNt85YFoYyndS3pkVrNER6ZbZx",
  "key24": "2fo1SUxpCc81M7XnNA2skqVqtpbURYkj9uu7gngssTVfKes3xYyQMyPuJEqA4JfVRcsFAySCRRVq37MYDuCXEwo2",
  "key25": "26N292h5N3cFKo4GMTUzB2Whr75LweKv2CffoyRrn8jsMdpKhPeGAybuChFYSbm82b5R1PoimsGQQ117coDx9gtw",
  "key26": "2hAfAaQ7ieikwQTQ7g4Js4mRZrCvZLQTkY8vNoT6H8xA3b8DSRPzDtzcMw5L8kFGBz16hHcjvTxm6qsyFjra83td",
  "key27": "4HbZA7XkCpDfeXUiEbNDDRfWREHAmUJSajAoZJBMXVcZ3nEbWweXGgKJukerPvUzxiKaqMiF7gPppPp3bfkZUbD8",
  "key28": "34gCdS17U9h2hbeej1WFBT41hnxLatHh18cYQabakWyNnv1RW7AqMX3ecHV8UCYgRDo1RUVFoaaiXVyrfT3SJzxU",
  "key29": "2ZH4vwvSFwo8hjefgKXJH6ud87kqMMux9AcvMVrupYMfSgYSUqPMUEJym6YREE5129EjfJDoQukkKpdyxvA2w79s",
  "key30": "3yFrPD5endyQyB1xxMUSBWx1HQ3nwg9ujgKB6QR9Eqp2QovRSWkjhpWU942smiW9Fg748NWRbsR1ak8EaVRfA9GT"
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
