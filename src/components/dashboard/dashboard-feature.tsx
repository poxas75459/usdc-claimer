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
    "341aGvGesxd2fDqfMdVcsyn82CE9q1eGzH6pfbVcdimvXuUyWjCQkdDmXwheMDQq9iTUkU6LkwHqW4bD1DcnGPRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yetr9U3EjPZrqVWFuvEr5ydNW245zegaDXzYeY7ujVrt5Nqw8bSvLQdy5LZn6Ppn8zoWhFgHPDj9cAGVZrpCFKm",
  "key1": "5KwoyxTDRNupf2f7nxNg3antaQdwcLUX26Y6utpyBawZ5ayyGpZekJNZ1itpsTAW1AnL1ojM1yfhxxgwnrZpWbwm",
  "key2": "3MV1VDXMoRbJ2RSbd6Qgf5KeRQBm1iK5ap3jxEvhnMFDdeqjStv27Uz3m8oPXCjRuwKwXH1fLExChPREMtwrFFx8",
  "key3": "3SQ8DkFywupa5mJjV6jvHsPnSZeZM2DQsZC8S43WEWDtx5oDYRUsWi9nqmDD1pYjgLtEMqdzdJXHgNLmYKpwt6zf",
  "key4": "3dMthDuE27qkhT8qoLnroYrX2jpbHVy9BxgB1D3wJyiu7Ga3yDMT8LVKmJpcjv5UVvSzgMSqeY6ANrsXRz9AHskE",
  "key5": "2JPHejywnhVAGcdZqsQcukwKoxhZuvnh4sjFifD8Q2qqEwKDDEKV8nSXSHDWskQ8RYd575G2HugBXDK7v9y4q8uz",
  "key6": "2Ji5a63qFKZ327PQdZ2v33TgPx7k3bFft6BEgYdJrzrmmZ4p8p5mZhnZDnZUWR9gnLqsBfvwhfH759uar8kD66R7",
  "key7": "4nN5LzNnVGhNBHZTooPrzasbcoVdsGbWi5GYBReqQNHxeXiHQnqHrK4B91MPbjiwTnqSktQka3ufX1c3AiZasgB5",
  "key8": "4WyxEKLL1GWkQfzXzX1VvzktoT7qbce2JEYxC7ZPyzh87sguYuHM73HZAmFPUVgd3NR1CUNeWQL54pPdKtv8atsk",
  "key9": "5hywc16TFRhA9dkx65NnDPufMqwfFT6f8BrSeAd2pUN4m12xqJsNixfKxu6aQTsZCJUB7xXZXAVrNbh2A96YLszf",
  "key10": "5sgDJKYT9i1FpkZu8B3FnTJF3sciZYj7fjbvKxhyyzU8ikzuAKbu3AqXumHkqPyGLThm26gefmXbUakUpbHo1GXG",
  "key11": "2MH5moLCnH2Emo2kYHYyyPtCkyYZ3aHGMxFX6f1Q1GpLfVSPdDZQrKADq3Mz69QTpg8Unre4hcUBcZ9NzRZEBMKN",
  "key12": "4nPMPGHC239AkVCvT5LuAvz8dHhFL1suLKDUEP4cMrkkcm3cmECEq4GmhHpzyvP3AUtyXaKZGi2e5RQMskq1XPBw",
  "key13": "3fnEhhnE7bKHTP645tBATZbwk6d4CJarf22cRLPi44XcDQgWAYmAvPdZ5FgJ935kK8ybZV5BSdRMa149cALGCTia",
  "key14": "3rd6Pr4thn3UQgY1oT3FEQ6ikzTdmzcngFC6N6Gykk7pwdj41BhXrrok74SayFeP4nvutZy2135cpyPvKvfgfXtF",
  "key15": "V45zYWMuuSqRvjB57FhP35vfy95nLr2i38USygLt4x56bQajqz78W3noffdTXxn542b9nvSckgjdG2i6PbErE9M",
  "key16": "2zfRpqNbi4n1EmsLhsDUFy4Q6X3T1rKeM8rjZcFnF1YCPR5WJjKNp8Meyh1eJ9mqufBNcEF9uD3vDaAjnYxTx6ay",
  "key17": "637CMa7tBfnaikoimnmtLJyNMkQiM2LT2jD2PUzgsyrQkbCoWnZLJpwavoh8zKFWSzu3Ju8CAoU3PSb28eUeghfs",
  "key18": "2wjoYQxz4uKgjFq3vAdjpTp3Se1Ttfhed7fTagJfbs7kWzrmkC4EPjR5N7RGT17VndTGZrExGruNcdXQ7BYSGocR",
  "key19": "3UVFzzkGjhnCSFXH2MhDc9Ggx7JQuxgFdMGfwo2uepTKBphZegBsH1SGunnRJtEBEaX6ZdrGkrm1ocELL8vWEk16",
  "key20": "EMG21i2Jbzxai6NDHB1CKFM4BCjU9anuKH9thrPo83RsN1En7zHEqf5E7n5M436kRkH1Q3dP6qsijG8dyRsCKJG",
  "key21": "3Kmt97FA931484Vi4CncLsnVokFhaahxegzYbvARHRDMpcVTV53w81sN4CAxPXcgocWduiEBhrRrKKrYgJiUehfp",
  "key22": "5Dnnvcir48XzjYbu6WHxd1etBsUYfQSNWFpAE8K4Hshdy8Y5g5LbMpUa5Nxy78n1ysbmxx5Jz8MuSebFxXkXtMz2",
  "key23": "539QrE5pD8ckrXiUhdwAwvZ1xP797BVbiuqHPFNXFQ8ssVuEANSeJxz5kPjG8hYmJ2ttu7wnoLNrDgg7cz5njn7r",
  "key24": "3Lfnh8RWjAYBfgxzVX7fxfbLradWpHrWYqcCGRvVGHVfdMgUAvS8HYf8ZK1z4jAoy2v6NvExAcBsrfSVVsAf52oM",
  "key25": "4zVTv5X3BoUVKyXM2cK1ffvuqLKeDWXitYFtfJJjVaXnAjAi72H1YiyYuduNmxdmThgZP7vyTfZCY73wrHFujSzT",
  "key26": "2njqF1gxX7Abs2kStt7TLY7EFWBDhuf3KpGFVRvG5SWMPzV3TjvmaTx3Mgn5FEUhsGLm9psMfn1Sd1yTNAPWiiNA",
  "key27": "22uLsamZYC4qHH5MqLnrfTu3ShZGPyeiCEWjVANKStZPgoBSKqjPLdX7UrytwG4g2ujFNn5gxBqvaRAcngKaRfH4",
  "key28": "57TccvwrCm2VB5cDiRCUKsntUTGET7ZewvtSy8PPttsR5ZmPz1z5beGfMWXBjnZ81xjdC7DuMzYxoYdiQcoJHNrG",
  "key29": "5m7Hi4GK1SsfzhoNBs288p7mjS2tjQasVii1B2B3eY4QGmbkF7HxUDzuiFcjJYJyMy8NtnLqR8F5Q3RM8kaCL9rc",
  "key30": "63nxWjVSt8ANnVQLNeL1gyMSRCNZnq9MuS8qtNMcgEaY6LkWzNnhrMhMk9HhsZvgwNELZmgTacMdw69Ltm3iW3BL",
  "key31": "4E12Y8x7Ghp4GoRwCEfHPxSmjFS8WFGGkDygcWt69MNrnL6Ngt4tv4jL8DSZaVigrfszThZBZeptzV7jWMd6cBhy"
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
