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
    "4yz6jzqnDV4SksJH2drgL8fytYAmsqZHT6WzxmkJ4Fx9ThxYkjH2MJRqT6UXKk4jPUiNdbghQjiAhayqKC1N5xDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npxwSdiTFCVgfgJPDZYKhkU1BqmpuYhMhpnGAYSTouapRdTdE66Nv7hkTTJ2WwLPiQnSpiEJmb35jHMZdSSAwx1",
  "key1": "2wFXwHTZ7AYDYGy3eyWgi1j8mo55hcLPbzdHcirdy6jyDT1LZbE8vFLYwZgtmqtT7TU6VRNGsLVSPbiec8vZoT8n",
  "key2": "418fq5fbENFdkRy5ib8iED5ZXu7LwzNqJiv4QuuNieC7SvbGSXpNAKhrSxEgZjeRLQxcm7RNVafe1pwkYX1mAXaH",
  "key3": "37KJ1M7zkxJpN1w5RCHgzDiQ51Rt4MQCbdNUf2w5XJsGXrXRA2Mrw65fKeRypRqf7FS6GVBRodoXw3AHBPG7sriR",
  "key4": "2pE2CXX9Bet4yjU9QDjpj67FXAw11wdNr5jX6cw891HBjLT4gTfMHiGg7cRu1iTGEW1fFG2Khr1MjEQ35ykj7jX5",
  "key5": "2Le7UV1qcWt5BQFh9GH6NDr2pWWFuT5o78p954nGE7EG8wzFGREDRz8oCVpVFJGr2MNaNodWwMmMbjEtXSAespF6",
  "key6": "67cnsVQC8gZvnhviRM19K2drgMPZjbf2aucU89x2DgBCD4bPX5rVrzDhoCsXRLrh5U2uz2mYGe4jw9eq1fEnbmuj",
  "key7": "XsuYVacTBujupRWLmkh82faEpESjurYhJvrg3NkG1U5AaAKvRt1DzYdKQm8PLh1rumEXwzTjv3rfF4K7qRjDxPo",
  "key8": "TrZHoS5nQP9XDAML79vXpfD9LSgSGac4jCD85edbBk2HiG3oC5Df6EdeYucfsv7gUavACR6kq1ZvHXKsBfSJb9z",
  "key9": "3PnJe28GiWCxBuRGcHUue3jkFRAskoGTNcqiHd8nF9ATmpMtB1cryFPiy9LzE7AapZtFEY9dUZafWnd1oczaoqs5",
  "key10": "2MBufQXJDqSaBKmnTb94Kov9cqSddSGr584aDnVUuA5E9AvjetpP38ZGKZrdww8e3HDsNNt5k5yNt2ZU27w8qgD2",
  "key11": "4qiaW11v7bi5GpJy1P5aWVf5Fm3Wu2w8FLg3P3UBooMRYLBQTADMtDyk7CfRGzCizyFWP42CrUWCFtaNRe6ii5nn",
  "key12": "4dbH4zeYH3xWf5g6fmAivxhwjcnzf6X6cNcCNadCbhQHN7BPmHxtyWsuHSUvvixTodiMbeE6yJeco4BgT2HfUMyp",
  "key13": "2c6xZnP9Dq9e2mzHDMQKt4WH97p9sDgktjZMjK4RHi3hfoK3dHYnq3HDYwWM6Ni4HX8afYSmuWB13C1MqR3rqE3k",
  "key14": "3m45HzjbU2ibqQNzXN9HFN6imopT5svdWUcTxRUKwZML1Brxqvz26ZDKcrsGTNt5NsaGjYCYQqtLGJp1hMYaGS7o",
  "key15": "4exTNQ8wd7Daf4TzSUkcvZpmocSFnRN4NFcPyuWUU9XyThzdHV4ye7tco2UACxNauLPeBCUeQccUkNmtY2PLiYuQ",
  "key16": "3YGeSZsMSKkFy743FPyfrpLTtkRSzGJYhdxUbRNKeS7Y9YjAWQmsZ4eEKonuAn3gMEzyaCiTCcwkKiaRVcZZ8jkw",
  "key17": "3Rzk3JkmaiWbu8BYffPnv2zPYHtMiLDBpjrrW9PnSRpiHJGvSRhNaeVzhS78YNny4RBdS3ombuzFdAV25yEFTLDt",
  "key18": "aTcxhJVetam5oHb8DxJYermVGxWQwbcYHQ2NXTvmSpFo6Rb4Gwhx1y7G2DvkXH6b8A4T531ravvfkngZrt6Dnrx",
  "key19": "4cF7wedewAbxXuEugr9warBAA8jVNXy21F9Wx4fgnDrHkiMs9qZNiHMQXSk6AGc4BZ9JMnTYNDSx7C4HKnrxQCfn",
  "key20": "3nJtAp4rzb6itu5Pmv5dnAmi1j6T2vHQWGPYXiE7yyGQ9rikeJLb4HuLNWG8Ynfc6NkAB6BYDyyXDMPrLcUN9vyZ",
  "key21": "21vGS1q3Wu7MoPBNs4tXQ75rzR2yqpRYpAb2SwpuNrg9Ga74FPcZUfvtPmKLn1ny54QEdMnTXHncriHSkcYBHb8o",
  "key22": "2x27rJmgGsHnKEAgm3j2VxmkKXgTQ5Phgug5opdLmkJMUdj2kJ7pxq3swwuhxA2TFCoRnqc6L1eCn7Ei2JPokWSr",
  "key23": "5hMhEZG7Ua1tbs9z5bZzijiStuqBRo6sxnXqc7daLet6FdB9Z7MPBNf5vSmuTkGJLMjNg3TNQhwi5FGzbXFwRSrz",
  "key24": "4hbTWHootVeHzxAAG4jeT8ZsMiVYs5AvtAYRptBAifYTFwDtfFUYVT4Y6vgu3SXeC9WrLBgFF4VCdBdk92hKRpv9",
  "key25": "2BjKY24HTjN1zoWqifeNYPCUE9LUWp8MUpXTQbQztPMQ8Hmrmv3BCwCKL3XgDNw1cFoLmWC71gzZxd4euc2mu1xG"
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
