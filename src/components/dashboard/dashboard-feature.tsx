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
    "4QcRxvLAdb1QVLrBHLosqBiw46SKMoXZpe5tzVsyWhFZgWTWbB1s9598TYsdttnkaZB9nviJECzzjs2s6v2H73gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHFzPgC32fumRLbjft77ve6gwXwywSfpa9mdqWL8qUb3AixVsieqBP6sXU4Tccgbnag5kbsnM1MyL3HKcKQwjQE",
  "key1": "KwuWinpWqsKVjfwSUwxXibCDfGiJk5fscH3SmmB1Knottv1T5hdZAyb6gkkV9c8mvvxS4ikiH5osWbrbYpPeeys",
  "key2": "4wThr6nBWh7LirGGYSLe9rRJbEziasoEBjDG7g1FvuGqGV6ZxjM9zGg8U8ZnBmkNgod2pVMDaQh6PkSnE4hqtgJc",
  "key3": "5Kyf6JmuHUcdy6VYnww8C9bNTHNY911h4UkkHHKV26hQyQvMtLBAmUZcHNZ5DzJEPA7nZ7MjnJRikQbNfCQt6SCr",
  "key4": "39BC1D9WtCcMrhs1HtwvwKtU9hd7ngh8Bo9caYi3KhzX7uL5YF7Ff59fm9Pn69NgoYeU7Tfy3SveazBkDQ6mHkKy",
  "key5": "5uYP1JNyjnvMPErQP8mVTRV6YQShWnCnXU8D8gsZeeyXBBrcZH3MeX3423DrkvtnKSjrBCGnkN53FdHqWehExhWH",
  "key6": "21G118Xf1GjFWgdXXeNj42NvJpat7Q1FETyvN9YtchtByhcgcFVr9eQ7D8rtdWr1TrRXcyZ4myszw4Jz2iMh91dx",
  "key7": "QtjM7jZCuG3fphcYq6RzgAuMWjrkCnvnm5U14EuwRGz8RBjihJg9ybTS4uBsyvDwC41ackVZEcNMazMyL4kJTRy",
  "key8": "35ThgQAv6shv7BsgicSoA7gKefvsqbzwCQ4WdMMSk1GC3dvhehMnhkoQjU7itS69cQMNsRXy3MgPZFFzCXiT9MDz",
  "key9": "3HThXbrprADJmECdwpD9MUFmfkuExyrAPE566TrkNT3TSEGQFubouTi3ZkVYmmq4n5rq6umT3Rf14bRHtPJt3Xdr",
  "key10": "46MJAQPXL23siovBHqJAtXWQPLyz9qGDvCyt6QfKE6qKqY1v1oT6YeSvAJCopQtfBWLi9iHMtJKa2YbtHnDmuYuq",
  "key11": "21RsE9XUBdWvqgdGeSoeVVyLKxhMbhHnqrY6GzUuuvumqun9YktxpzNx1i51DibUe13YaS1Q7KPicn6AkSUvFm6w",
  "key12": "2c82dmg2yZfbS2ChzgKoNDn9hiWPJYLUYuawY6E4WEYHBZKnzixwR25aZXChyPSmw8qoRiPH6fKhe8uN2hsv73Q3",
  "key13": "2afNp6X19RH3sB2gLn3XXdCYUMNBGUPV1peCTth5udWPs2TcfiW5pZNfQp5CXWnzga6AAFHM4LyoDh2btUN5NV5f",
  "key14": "2NzVX4LBFNa7yp2mQTRXzpyXSFLQAWBZRTfienss9WiKdLRb7b1sxBM4RaTDyaACMDevTiJxNAbhxZfGzzA1ee3H",
  "key15": "4iPDZAGcgPSd3G6E3ed5r1U9FinSUZBApQnKdSZxs7LRwH7jB7akwvXsLDfqp42UXf5MZ36MnaSHpzzj3CL7YSKf",
  "key16": "47HfrMitZA88SYBBorjRWq63kSwz3QhNkgZ4Xppv99eoV8PEK5tErG7nfTNgUfF2BxuNMD5jpKuFYoUeeeX18pV7",
  "key17": "5giALhtQNBpCUVJyFe2LZuk7CE43rJS7hyjqEVZGD9EXB91StPkXms6kKJZmN5B3UchN8N1w2arfnBYEafJe5bNH",
  "key18": "5CwyNpZV13NnzY7AMZHukNshjpP4qrcHVF2QhoGLh4bq32WDfdnp68G1LBkpHPLnkt2cSS8vkvitcdXeLNH5x1YC",
  "key19": "Sgvf5X49b8GXy3YWsiMnrD1WwBXjLYdV68GEHQHbDsB1xudNAXgsjnwbfL4WuFCbteLiBuC6qyWDhmpjaCzr441",
  "key20": "3eRfJTs5jqsvX4ZKCZvkNjPwATr4fNRSE5CLhrn55yELoFpQdFkgskjmu7cnoKAAvSZjqYd4gXHFjm3DmKif5kNZ",
  "key21": "4EhCH5cXmpXf2EtVEQsUCmpALNnHqUkweyuZkr1n3J9xae64fiXN797i2DpjJ2bhxmnxbFXWhYog4wNSryrcR6RZ",
  "key22": "2NGXR7d6Fq8tLa1S3bkdGt2eMqg1csk77yqCbnunPJBxGiSuhsi3bsPgt9uZMzKbYg6ZWVfPmHLVeR6L4bMPPHJC",
  "key23": "3BUHPesWPyrFznEHyDqPaC4zVKSGHFYn57hPzeaNZQZFwGDaUYRmbMvzt3hdpnrEapmSVrVDouxo8g1SS8uhkVrK",
  "key24": "7JQ7xjHM95P37QradZsfeVxsC1awGkyKKgfe3ApY5bioJ6mdibvdLTKKpXcV9hrUfjm94dqYQHxgFgavZkHRA1p",
  "key25": "EZ2AcFCG2Kr3H72bE8spspm391iM5P9kbJ4v1jxDHtmqTSw9tBaGym68Ax3sYT7zt1HLsf6ANowJi98oAhtp1gz",
  "key26": "424au5K1r5ix8bPzm1QZbukJnqJRYYoEmUQRixuMRR62Fgjo1KhntRACuX2vdE4FVyjX3HTHmEnMFZWxohdNUXB7",
  "key27": "3m8ZeJjybryFSp4hs28G9864fpnVgvMRGD2wKwQi23bnWrY5coAW1MG4737Ep5sVQjCBhAxHV3mJXPuRgwTAZNRZ",
  "key28": "4fwqQKfBwtnsSgLKjiy5KnW5zggwgPE76TjSNPtJUixxygzDAG7iYSWZw1Q8VHCy1nBxuUPofarBQaTG2xro96b9",
  "key29": "27dheKcDacZQtLMPykixUN8XSpGgN43Ba558vKMhoz97uuZ91kvGEjw5W61pa95AGfLdFrsWTy1LUTtxsCBLrvRa",
  "key30": "3Jv4VCJMuTJDjc7xTyXZxkafhr7Nbwm8yzjvqw9E8D558ihgzPSatCUGnq7KhHYsK92RXW2QbAdCPJDz3JUon8q7",
  "key31": "5geYrvW6J2ZgqWkES3hExzRZbizGG9gtTtpeLnsx9VH5ewHVRxwdWx89NqCY1r6ePAmkuDh9keWKcUSoTxDkwWmj",
  "key32": "5ru33pws874YyYynSFVgmwVvbCxTuoUPRYh7TnRV3tuhjNdyLYXqhgGLGMh7THV2m4YcHuSCWkd1xS1K8LHH51Wo",
  "key33": "2Nh5HmweR1z3DsLvR3TXNjEqoaZ3ombXQhkSo5bFeaVgrvv76aDuSyEoc5nvFj7L69bSubZioEYh9WWZE8ixGwyF"
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
