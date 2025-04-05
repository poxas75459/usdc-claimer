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
    "3Prc3j2R6oaejJ2eXq5F8L6mA5HJTnVityyHx4mgZC1KxdzaxfXkypmiq8SvijLsbWmexauGBGbHLDGPzTFc4DPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJMoFKaSbnre3QLV92N3ojT9WV79uS5J2Cj6UVER3brfNrVnmZZDKnJwaicpXrcvB4eRsMdMNAj6XjKFDRnij1L",
  "key1": "2mk1dbFC33LxE1Gayi6meAYPJAtzYScPyyFFRtNQMbJEiGMkEeMyxN2PiArugG2npSR4Y5oGaenEe8g3WJiQCQU",
  "key2": "63iQrD7mRePX6fwQPmArkknTBnqDzoXDtcubX2r72UjoEwgA692X1eU4TUJwW3zadr8tAZxtohjpvo7bo9uH6pGs",
  "key3": "25YYR7XXy2fVdTsCKmiUmBnMNAYWkc2mteW3iyQVtxc6Jo4dNHwKPLUuxP6Fw1hXg8XKvs8zz6EfeJqfTD8achjc",
  "key4": "2Je1f4HjTCSQS3me5xoepVGCAGd48rKkfnz1Y4qeNuB4hquk3pqAEJUcq8SNr9C3WjuepgSYxLpG9Hv5aN3tYsZk",
  "key5": "xQojq481xXEaZsuHg128twXDuRbtCXF7TQVFiHEUmiWM8FLnVrZxpSuvqHRu2sPJUcb1z7abBFneiL1jivADpkb",
  "key6": "5ivZhaXDiuqWVSV7b6H5UYfS2SVv31DotGGNTn9kWxomE37wQEzV43jRJvAQ2hjUc7358L2phXZSVoRuQngpKmxG",
  "key7": "5up8GkHTGDzJyAoRe8w2z6zSmwvcHnvbegWzDJLaRZ1zUmhir41dssiMEEsP5ESNhqvgxbNbyLhN9mtHXZFjJefi",
  "key8": "yYMnNupZqLGVGimg9CHH9ptCRdSWD5A7aa8hfHTFpAbpsZBdSkfAhxqgCZC27CoP65LhpUTBvMrJWK3oxmJzDTA",
  "key9": "38jPS7vw4HBPxRKiaY1VCu4ZA4mFJimsoF6fvwgv43aM2sTHh8zCWBZvEgnpEjqqjBKCn8cRX4tfnV5uK3at1JKb",
  "key10": "2Ldv4A3ammGUFmAdE8pEaNsGU3AaPDxE3N3aXbmNhaw7QfiefqFg315nPwkd8oRUiE9EHqHpNECb8ony7zVG7zfY",
  "key11": "2cNkFSYtmE5MtKPyMmyRJFU32C4MvQp1hcVZvxgtDhhrdkASoG4kCmmR79RCNjcQNkShWiR5833joEysZYg3TSTp",
  "key12": "3o9FrCMp6A5fQfeSEVrZsD3tZofiPNdPaJb9YuwR44CpUisorXBjSK6iUXhMiKSQ4LzzjinPZjqBSbtzVtsGFGfH",
  "key13": "5p19RExZt14BCcCb7TCgAebQsJo4H8e8MD9j1xso53uvheFRaYX8mFhcaLdKEY72Y3HG2myofxmt224SUgRhvxrr",
  "key14": "361eGtqKQfFwZvsn4pA49XFKtw3NvH3TCGff7Q2NL7cSgJrF2zu1Aq3rKPDD4sHaaERBnL1ZNPG4oBsM5UA2sK87",
  "key15": "FCPq7FhtFYueSCSB8pNEu899Gypvz3nTH2tfYV7SnSrGxd3gLTYrqUFguX3n3LR2KMWfB2BoKq1eSANVa6aeSJT",
  "key16": "2zhMdWisykwnhrXvNyBADg9r3525JoHJNNBemWRgryixHrLENtDtYhEqWNk24v7k4jPLANG1jjmt9AzepCSwVMvE",
  "key17": "5uVCLeFrgB8FeA7xskCZSZ1fVAW2e9ppGet3hy3G7Kr4vizUjvhcU4cfeNUu15m1x4ANDmWRLbdhK7MQVpZsvHpw",
  "key18": "3Soxxi1Nf7x9bQ83PivtLSpx5h2wCdU5FgigxqnQN4P3AzMUQo22oXs7GE8685VNZ1qdTXxUcMS96kaN8tFw4M6G",
  "key19": "4kLugKgRVfWtuUfSYiwiiL6bXWGQEfCSxpr1H4ZyUnbhHVRLuvgdykrhKtpjVdVEpqESeDkCM95DsmniEyWDq2TA",
  "key20": "5d61TEzTgnxuGNx62b7wrLx6wukwkCayY3D7ZCQMxc4i32WHzcKDCHSh4ZdtLkwbq7GdGiHqmSyu343c1iF33qhH",
  "key21": "4gJsEYrSE5ifZiNTcmf9aPZ5E522rVoL6wtLH6T9BMKMeLXZxWRq3SvmuW15Rheu4JGnitMRwGUb9opMRojqef9j",
  "key22": "4N1PYbVguYoCsJDPYsRYda51zfPpcuWnYK5QUniw47inRPjeMxoGRxQZPcKCa1SFiNfbWLDT6his34NdKFeoEprW",
  "key23": "2e2CfnXUxoRCuFVoM2V7UEvT6jb1jDo9CYwA7S2WjkPJsoxRcqa5re3wTxn4yCpHDs7FCwZgyAdCCMgy4jjBzEXc",
  "key24": "2CNRvaMkQznCYyCGF6XBtq1uy4GpjAzWUQrzBtsdRVsGAWtPGpvS3dokmgByMoPfphzmKqsDyKQJADNSMjRkqcJU",
  "key25": "2cbZMAZDy8YUZiHxgbvkQpiePj58hGmP61LuXgNWsaBDRu4X58dHURrfZWp3eaNtsAbqdbn1RqC9fpDkRz2WPYT5",
  "key26": "2rKGw26m8XaspgzQ5s5WRH6HXLdyx3iTxDXgjytwgJbSEKH2NQahVgp1woz9FaaEevX3BpXGesWDxCx8gLzWVig9",
  "key27": "2nhU2YZmSxkn3FoJqzSkA5MWyg6kiztXNdTXvfbpB8cUaBCtBTdwnU7Mdav4iHHLJ4UvozNRkp6RrrRpkrRoo1wN",
  "key28": "45nEiQeY84RTJmqN7y9fKjpTH6RMTZeQ7JiAZMdzFdp9mC9uAma3DhD46KJk8EtyzE27kjNZJEmbdsbiC433yefP",
  "key29": "33rJNcC2GLQmTLc5TF9engg2v9DB5z85sqpyFgjpbQBNEsrPwSyKMt8SH7eRzEakM3vQeR4iaXgpkSd94dSVk1HU",
  "key30": "39CqAnN1M6eRRaeSYnvjqSHZUw4Jqx4VDX6MeZ1Ga8j677ADYbYmNLcE5oBwQCa29fZ3yqM75j39AFSs1QLKm6tT"
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
