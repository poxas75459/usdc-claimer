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
    "4SFrgCeMicNGAQDEqd1BQLaJxjAkgsb1mupFd3pik58ugXEfwHXJ7DBXUEtxsFQ8KkKsYVUCHsDJR4U91fXvDkoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fn5bX125SMXUvWaLNJbQKvqwxg25A8gFfK52KKkHA5SeusM7JLVb2Sc4D7iE5NGkBW5w7X16CFMUGJm2bf22WBq",
  "key1": "4h7A4afVNFMkCWm6jqzbdT5ipunw58yJUfjzEtZoQrcYHegufLGrQomaB4BCR4jwzTUM8cgGqJM4cVThsp4zDbG4",
  "key2": "3mdzSS3ejpsvUAT3yvSkovyQsagJ1PXT164QnkVsYjc27YWSRBUKh9qQJSMKJ2yarp4sDDaB4QBAgLmfXnGQ1mgp",
  "key3": "33DRPXFxs1huXgMA7yBSyVEzbdAkZCphwimv93c65VDtXYyeW1jo9z2rmMXqm9f2GtKJVZsvBnod8GJvohQBWPS",
  "key4": "YxLFzqMTjfdP3UCwcyFYBLTkzBDoqKcr1UwEV7THgZiN9pMm4BRXhdJehG9DmDinU7mgoHvpPWZrm4Jbqfcs1jF",
  "key5": "HU4jGhZYM47DAQ3zryg7QpmUTUiQaYUSB6o7A1znk5Pp5WXpgxCmeeZECvEwuniuSTcLhprfeKZp5Fa11RNFfnH",
  "key6": "5guhaAZrksVbw8R1zQrkMbBpsaq9SMWU4woMquDSdKgc247xk88zHi4UFSQCBWpFCumdNJna3gxibrb7PpxBaUe9",
  "key7": "5s8AMgwYXijwMmEaaz3zZ5PNcm17WVjS1T3HDdSxiMK5gRhtXZGjrsBJAqZPHkurESHz6Vm2X1WMb77F22AyRfm8",
  "key8": "Vtg5sSmEPyJCU2yEBx8hTCtG5eSGkwPR2FZUhgcLUgX3QvK6GBJcWdjXFseNnnuDGXDkC4BTiTx7GzeE7d8C8wd",
  "key9": "3gFuXNMegwp5pjLKRgrxsVA5wqaDKswnoAvcHpo7nd8XyPAnGeuWnX3hnFRnemX8CbxPcNmmad1WBuB4MVmRq6GQ",
  "key10": "UqmfrXfoaH6wFshrTDZwKT4RwNZrdrv6eh6aUNcWmxVp1h19yKt7Fxoo34T5WgzEGxVXpXDZVXZNqSFWwqX4XfM",
  "key11": "51GNRQ9t3MJagtwhikexG4ZSAm3aj9UPmJLLLzdow6CXcsdc382e78pZaJe7ZxY2fxhrG4U21EuBJbnVgGNqP4NA",
  "key12": "4EyxC6bhexLrLsBWUP29rXdvr6ixfqgnYXFzXh6KuMiyXeVWxPNch6oEXVMuRSE92coPKtEqGrSaUTcyUxRkG7J8",
  "key13": "3jRbYzavcuadH3MGyVu7GipstAxPptZqavXuJz7UUvAXQAVb4bozXB1SocH46EJbgv5d7VMfbj2CNz7FoopYuXLZ",
  "key14": "2qYo5dyU4Cn2HxxeQ5oMh4brzADUXxBpZfNPLYER9NhcaQMLkNu53ktXWwDCgVtuBTSQWNwt4rQsKEuKpULLX2hg",
  "key15": "4st95KPA2jeEVpKWFtiCsmdTuBtjNnbQyqseuDkJQYzF6GMZRzirJzSWo9fkZDzHraSTNujnh1n2e74KcuJwHrFJ",
  "key16": "5UXhmqkTVdbFqNZQXLegauUzrv8E8ASqiWLRPBCJJtVLk7ht6ZHFJDHhsATkjQLdjSeAB6crg8n4EnugURrPPCv6",
  "key17": "kdaUVzpuLp19vHt7ZXF3YWLYuT1SqgMgdd3CLb36AQpgTmSH5rjXPv5isFbaJWg53v48UPY4eC5U8XAd28TjvRq",
  "key18": "bA3cRLE6KBRL3GkDXZHfermZi2JAfFB87bBRUbxDuhg4Ur2ersu7kadGjA5zagSUCeZVc8WiV3pFU8y9uMdLBS5",
  "key19": "48bmoN58pkyWwS4uqEc3eZrAzeaEyPuBbeJMwHoF2cZcQYMMznrLChdR6LXHazJ9oexB8kBThXPr6Hk8QJ8YUoVN",
  "key20": "3fNzYcoyQHkYJXVds3krXsdREN43k42Nk9N7pky41c4jv8GxUHd6vdGTZyabv96eRT441apRPX3D6n2ydfP6MXU2",
  "key21": "3JhPR2D8EkEGPyytbvgUA9VosHUmKTZTLgc6N8HNwYAezr5Ce9nXZrtmHcYe7VKZfWhXWNYPKdiEpig259tPFASP",
  "key22": "3fhd5nYLcwPjuo5HUNVvE1FCjgcDe1zyhQuHgm8QS4UGbNPbfa4f6fX6RRZ91dBTPkx3mFteVHqexKRxvn3Lxo1Z",
  "key23": "5Do3LcBkXkjrAccg3yevY5U3mihxiWu3TBpAqgRC49LVyjujMTro34kC9XwoMUtanT2JRDtKG1dZZ4x5titebw1o",
  "key24": "2ugejwqNjTHTqSvRGubFDHeRUokxwah5BXVVQrBAyRiuWLc4hUaorDPF7Kuss4GSwdcYeiZn1G77GTSoeHS46NF7",
  "key25": "4xq7z6xqfGU9ZNjrojBaZ4FjiEP33XFHD5Sw54oZrwX3MeFAajzd4AqEvYSuereUvDmvhutSjFSTWTypxdYLkThm",
  "key26": "3kEe9QkfiBrdiTsrSn7GrjjLK67jm8PByiQQ3stcnLSoj6NztJa4bDqHTc2GF18hZXdQrFygHsGfGFaeVGQNNetS",
  "key27": "zo9zMudy2F3zmVhwTB2hQAwiY6JubbZFCAYd3CFsvXQt7z2G5jR7oeFf2276Kydvz853U1QJ6n5xLJyCQdNxgRV",
  "key28": "5s8toiQaMX5cU3LQ2ZLXPnVwMhYgdb4jLPkL5RG9MzJja7ahsYj37f1PD1DncYa1BQKpkhTwNqnDzb2ExQYvboi"
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
