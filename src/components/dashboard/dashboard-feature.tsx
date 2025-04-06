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
    "49HZ5f8rR7MUREMpAb528yF1uGoXruyLSr2KnZ4MVfMzKYbtKkhYzLMvtJRMYCztsVNiPJJo5H4hw788AYkunKLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acUJtDYjnc8VmEthUvLX927DCyznieinZCQkmdAnP6T5cpcP3nbRmN21C6Ehkpm8GUmqKsFLrxbZABTkWqy2asc",
  "key1": "uo9pK8dyVo81FtPEVws1QfBku1v7nNkM6y6Yd6f4Co1bvDZePNo5SyPQZwgSUs7D9UcfmthpPEr1ESEsADPjJyG",
  "key2": "DviNqFMpo9MLZ1Jfd4SjvzkwHFfY11W9vBkYH37YcHCYpTdxJRuREdMRAVHG8wtNszEqhVJWat6bomdpJqtQd4r",
  "key3": "5unkp6C4m2mB4M9FmxabbHL1DqLVyNhXxM4M1NHPQ3SNFVrABw185gPLjSzxixPXF8eAoMYd3TUD2MHm7ZrPJ4CQ",
  "key4": "4KekijFRqYWCByn5oZj3zJf7QmYCW6AMyKjv6dU3DVnkBk5Bfk77QWEfXGvJWMnAgCLo1yHGxfHGNc6aNPmug475",
  "key5": "7xUNHYHFGcCfTL9FJ4VRKdEFttRYsSuvvGBRzujXt7NbmQsWrRMfR4DToRAn8pmRrCdjpkjcJ9FdeqtiUj49EQc",
  "key6": "2Jdey9gNQZZxYrn4xPKDU3eknQ3GT7YRnU2ha9NWwNYUANnSaAWLezCk3UTZqnMVzbYZWs6K7DNzPQ8ecagEset5",
  "key7": "4r6AeTZDMh7TeEd8zGwrE87H2H1FCutRAxgcDCMQ6LTXYhq7v52TmCY2i7jWzYdTfL1v9iAeDDbB99yK55ZpEEf2",
  "key8": "4ySRchPvXvK185sn1fA7WdbUJ5Sv2GghnD8TtdUcApNvZGFAT4wmTmhs1yeXghWch6DgCLzEPwazPkCPXy1HepBg",
  "key9": "4FheNueMzFSRBoFWJ5hV9XTjrrhZ1FRKQMGbzDwkVRsXNPu7L89FknxRFBDzCPXFMwKtqBUNpfoBfqWd5wThjbdM",
  "key10": "2aWAzv8zRYWBDz5895TCLqnVpNBApLn8XepJG1RR9CEpP8GaYZoKQPhMjpYn1qKJss6miAscqc4rWek2chVcphfj",
  "key11": "uL7ozSYa6CsV29Jpm965GdoL3o8eDLxXhQK7SBgoCHpiCbcfYmvaHUyMiSUm33353rjnzRrBatZBnugN3X5Kk92",
  "key12": "5UAe886b2zr4fVx1U8j8cnL35yVzJ3njKbrDTazDqpZLD3SYsVzv1FSgXQtaPp8vkhxU2EeknTJeYWZDA2khYKzF",
  "key13": "2aRTXcQL1dmCcvyssfkXfLEDPGHPrKxrzobwy5bj1nKWXp2kmNEsU9sgPxXC9uTJQYjhUvoz3H67Y8yF9tmsnbRH",
  "key14": "5H7uBF4rnCQ2wX72aExnVgB2EXSaiEv4bsBUj7CXv6v4Tr5VGpHWaU4eYYvEGE9ewhtMiBUen7pZW9L8ietrjxsZ",
  "key15": "2jH6KMYbCNRT6R228bmEtKVGzcNREYp25zWN4JNft3qETwg4Lbmbii9ESVhXyVwZuZQhXtvsM2ud4sZ5uGUTYU17",
  "key16": "2cuP3BmcC8tjnLptNpgcqohMgJ5mrunXG2kUPa5JsEApHrSw6ppVMJP9etsnKQhEG1ZV3ofAqEU8YH7w3b9sBGbq",
  "key17": "3mHRoUdadq5bovWKx658NvMdVMHonHnGeB7sZXRBWBSSCrd7T8cgkHP2FnfG6RkEun2NgDrdkesdK278BjzUFNHL",
  "key18": "3shRR4ZPZmraAkTrN6RzuQonXfLZ1qouVzxR9e2H661rB3mnQVuxew8Jyu4i7p3G2Lrxk4zd2pmAtQ2BEhf7fRpV",
  "key19": "ZxT6fqjA7QGf4qjkez7fNNmQL5ZfQXxYJo7R1zBbne2sg2Ke2B2VMJJeDZ89NzHbHV8hi5bKTdXbGHaPaBjtTjZ",
  "key20": "3B2kgQhAoocqs7nRjDnrrMvJAy6HQfYt2zf4X9k13k7AEE51KeGEx3aBArHepUsE6W63E2uRHFmJLixj6GGPCGx2",
  "key21": "2YaLKQP2Dc5krxJsBA1meqDy5dcBNRsnd397vDWYY7v6bueZ4X4oeersEaAgDG67TzxEWszF8DcmLgp6ZjKGrMf6",
  "key22": "5Act3ym1i2s1hcBftbTgzW2KJajW1keXjqFkm212gaAVvd5YEYVm1AU2wKpKt2sdXUjxMuYo4TA72PdDpSLWWNMc",
  "key23": "3HXTMtePNjZCC8CUbBXvVmBBxSziY6rhqoN4eR5WaMZnNYeZfkjYi37eCQ7dSXEUsNo9UEAut165hTnEjB1SMBmj",
  "key24": "3NNdQTHRqbeEdjev3j1dFMZ2uLgcxAHUWQLJgLmt1rnVW3cAcUGrEk9vE9X4Esj9C48purbKu4WJHdeR6iPvgBdZ",
  "key25": "5JFb9zsitngM4a7fd2UXKDaFWPPNNj9Gsgi6tBEt7jVGmQdiBLRJwCyufWnpk4t8psgbP3nnJYDCHDJXL2qDkDyY",
  "key26": "2VjBHZwsKWjMb5qXAtCvLPMZx5cpMocePLFbLn34vyM6Zdbstpn5njG9CrtxYoXTvqtFYgzfe3f4bKFjCPQDvi8V",
  "key27": "2YGCuojdoZynaoZtseLo7gJc61DnMYWaRdfeYGqPmyJysuhjT3Gzr9vhHNAXzVfzWMzHBLx5LXVNjiaLXd7MWB1r",
  "key28": "5RMZnBDH2TXnZzcU4WV1p5rQjpX1fMPheE5kMGxzt5FqX48KxmJmrK1gG9oRQFiek4McYvy8HDfQJztr32uYyPmU"
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
