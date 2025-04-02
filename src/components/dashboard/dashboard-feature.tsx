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
    "4ipCW3gs4BJALViaW2qTFTG8bczEXLx9YEckncnpWpsu1yMNsastg8zkJ72FL33TGpHbfb8jzqVtEMezZqsYHsW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJ7PU953XodUBWZdVrfLmChNY8hFQvJvWHVmpLPbbAHmXuksKx6jZF5o7sCVeu74eJFSPaXHcDCZMt6hBRUs6XX",
  "key1": "4VLGhAeVToctZhEBerwdJjj4rRdSqAP8tzL7W275eAYR1ZKYgkfYDhbLA4jERNrbEV8gETLEE9CXKa9M56KopFwS",
  "key2": "3ESkEccjzCh6uB5t74866NHTGasYvirGaSJZXYrck9bBqKvtJEt5A3QuneDnwuNzZPeV2dyNRhuLq1Ud8dXvGsN5",
  "key3": "4QRvGpkqAUn4xifjhpK1ujJf5LjLYtmfEDP4korw5uo1dfmZynpMykYb2LNk7mWXnic1sNVmqU45gSw8VCxibLRz",
  "key4": "4beMJMhu53gARXamWSPh9EyRZiTv7y8HVAmWmg6ZJnK4jmvp8yZv6UrQBpNNPn2mo5nnychsBkQtgHaVaskYv6bA",
  "key5": "2Bmed3r42Z7FQT9mumwCpCfdXVpGjoc6y6r6xY3LRriYrsFz9zv4GhHev2nu1ig9d66w9saeAyFCzQC93U1MQNvV",
  "key6": "4bj9Re8RZGEy1KsCvsYE9T5inSQ4eCJFL8PshFwakzye563JLnEwFwU5sDnSZHWpoMX3rHxZd6MPVziFqBLFJXFf",
  "key7": "2eDc64xdviSWngk2UnfsxjnvG1uNNkTQxUu3DAQGZJJMQzeG9q3r9DsDhYk4caENGXHnDa8gRzCAeuexwNUtjvEJ",
  "key8": "B3JbGdYgdiCEesRRd7PJyiCdNzm6cGGwLmXaRiARLENWYfY4WyKEXxErfaaFpbTCcm6PQ5hV2GxUgdw5bD3KWQr",
  "key9": "5i78Lwu8x4mykVQBjNhQpMXjH9SiDNfbzLr12nnw1G2o7NWW1mseMMghj2czvgYbF5E8sk5gxuF8bsJTqeTBQmSN",
  "key10": "4GmcPRk7WHuM1Sn11cXr53cW2dbby4wMPS1PAdQwjcp1sJH8KHwfzFVR1jDddhLyY61LHoUSK2MoKUPAJwAT1N3y",
  "key11": "FgX5TEyKSK4zFjpfPz872NffSMH1FZcbikpdbrwfzjSxzVnn5NDquZU1itqsNGUeLJocMR9NMRcgKiHnLJYzsGx",
  "key12": "5TTaNpzdyTQQ4vmRBjsx8h997ELGUtxV3DnDnM2NP4K8rVcsnKGS21DafxTkGRqLhnMYdo9udp7gMonLuAzRpFUf",
  "key13": "3cfqspYBsDit5ifb9jWu5cr3WajjuWqYbpUAo6F8YJ232v5icRmk8pCRPHBr6uov9bBwHMeKT3RwyAcSGNoCAuqe",
  "key14": "4SaGkgp3Y9eQAv3nHhovUyy2RExeHQanfXvGuYuv4QTEXT1c5zKUjC9JbdQzcsknPeWfs7PkX2mF2tgSBTcLMrHT",
  "key15": "EM3VH4UEtH4hgsyRy5NxqLC6SHK5JV64rciMhMi6r7AMi56t7uGBgrR8mUc2PxfhWtidez663eC6sFPAyCdbEWD",
  "key16": "3P4HRbqsAF82SN3gbdeaZ5aNnnkNHG6GhsqmWX27D4gft6ueaRL61DtjAgfFv2a41PQp6qAti8pm7Bypo7ntZap3",
  "key17": "5kuT5i49T7RUrEcTAHmQ9GDCdEeqnzHMKecyMT3CUeFnuCRGYH8ffDnmr5bs4gj8mYQoTQkAH4adVYhf8dp4Wb1U",
  "key18": "3qFmTdNyLvmb65GX4ucTckc854neY9ajMWd7fNkA5h6yHPNcp1DxF1LX9GzK1T9MT7LuC6LFnNN2FFDfgN62WZVq",
  "key19": "5mDsCkQwjRKiXqpMKLYXvJNjUUvYHx3g7SZU1gMR911bzxGaehbAUQW3VoGmnSfL5J4esQAUnuDZDYknbjmrSvUq",
  "key20": "3qcZfmbuuhFkhos6CWPhaY1Ag8vw3frctPYjk2WFjfcnGv2jAswNBgMZ7QYDDFbtAYo3LNE1rjPEDUGFNtAufTNA",
  "key21": "sXg55Q1xkrXxYCg6dVTJAj9EcDDvm8XgpkuCWP5f9XiJoSTCBx93grGzXwCxCkeRdQ9PpPML1xhuEAazKhhpR8N",
  "key22": "3r3mDcCbt96pCuu9vvFzXXDThQtWREizmL23b7gYSZWV9kWT7Dzn4PMCufT1vrwZepAEqW9Qk3UnB846g1ruM8Df",
  "key23": "4Gt21ELbE9ia3ASHtjKFm48j4f1fUwANdEe9TEWhbWBZjdZcZZAwePxVTojuDFCUWXpaq2mtFAWezj8V3RFET49G",
  "key24": "3So16nEPrm7PzH8WyUhHgwxjHqTE3GvVfBeCDX26Prt6F2WvVe4jA8xE8xjYSz4T9zkfZEFn7ANyeBNxd3WW45u3",
  "key25": "4FNn7v6aHw2RwhZy1gDZ7uQ3q2BauSVpMcmVwvT54ZCqPCp3z43kSaez5YGNK4Yo8xuc1tJaKDzeQCVBhZTZnN72",
  "key26": "5kqoFXo8LYB6GeMtbU3aKwtuw5tWGHRcn8wdjRiFTGaBS4h2VMUciQPUmVhK7yB1pzS7SJP5bHH8RNWAX5E1jBiq"
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
