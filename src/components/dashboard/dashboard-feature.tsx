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
    "Wuj4qkSAwdsqAYkG3hsxVjdUFf6EoejL3VNwtoAwKbXBRzPTEBSgXbuyfrE4Y4NuHfkHtiAd8PpH2CUbTykf6eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqaaUEJeAv5LQbWXbX1Qsty2PmiphiibSRZgVTVBVr8fY8e2TY3qPPuA9FNiyrLkiyavAf1wrQ2Zg617GAQV5Bc",
  "key1": "2KomcuaeU1THA2pnoJoapjyafawus6CFS7SfNqg7oyr2PPi9pjr9cYTJeLo9J4jj2P3Ztn4TG5ZZEqDqpsxC2F8Z",
  "key2": "2otWtuF1m3caJUx3K2bdyBRtq3RxMo2RLaEXiY9ShjgzqdQ2Gz9nUkqqS8aeXD8XEQKz43rpsSYpaxjRkY5RGkDn",
  "key3": "4JMiqEVzoR1CMdBjrjfL6jYeyfuqW5fQx5tPLcKmwopFPcgy1somf4i1SAECeLn8ERJ8giHTxXAfoCC3ezg1mCgh",
  "key4": "4qH3kUabpAwZEsK7Vvx8s3iuC7qTTc3FHpGRxLKeLn2KPRrsDA7x6LPpvP49bKpxCukqufLPS79TepUBCjwDd6Bq",
  "key5": "49d8WPYWQQijadsYaBBNrGM7V55xPSfkPJwyrYT7cd8EYGWLvA5GfgWYnmqL7aSnNKfWWGGKhDP6vyyDHCLmYjEf",
  "key6": "224bntqr7Ju6otuHyajnzC3PWmpm2kvhq7tSMvF28tKZAMnT4p5AWYbRJeFnr3rvgfrbKf7MeQvocxr2HyTTrsgB",
  "key7": "f8J8RFnsJPxJyfk1b1YbSFbCuisw39pkXBQrJAGV3seSHbSRgKG9te8bNQ6VNDRzE9JWp748nUPvuhkUxf217CL",
  "key8": "3kso5S59JY3eMeWsffQXY4SPHSCvqNygH6sNKyhDtjpyrHarbdconB7qKi6xvQF9XhAha1USa1b1YbvYoHyvjUQa",
  "key9": "5LMkX7hh9PsBte4akg8x1CGjM25q62VzMFvo48AFBVfkJUFk6dBiHxNFTKG1gCE1buetdv4bHKFnXKEpif5aUCtr",
  "key10": "2m1SF89qpgGxWiVjmFWKrL6puNKSo5Sy35VqEwgUB5VxXJMBFFHHHKTp2FZbqjXkbqSM1i4NBUo132bE68MsMAzw",
  "key11": "37jsCn2HCTZ5HVyvXa94u2QihTtYZ9wo35Sg2y1FvrKsyv4ad5Eq9SccFbGJqnYkXD3TpUTtXTCxK4vKQDbuwnno",
  "key12": "hv88Un2jq4BZt9rGGZHa9P8dNkV1sS3CwDk2wURCFLNTMutt5i7QABDJYUfRiNAoGuaoaUyKJPMXrAyj79wQNps",
  "key13": "4APXuWY9B6EBx67u5yqvMK65hxgrdvo9oSN826V3f1QesqhyEXkJd6yLam88ibQQbEqbUaVHnoEPMJgZbcvw5EhA",
  "key14": "2moS7sAHcXLjSGtk9arABdVvnaMnPrWsLrd9WrFUs9jnpGyd3e7W93e5fKcNatGSvjcyezrS4KacrSVYsDsTcNCH",
  "key15": "52C28YNo696kxutjJ8NFsfeNRN5ofyRpurktXRUMqCpLyUjv2tDgy8xXA1iYZmZM3LcsRE357hJyrBRVbASUfGrR",
  "key16": "YiMuNSub7WqE2e8Wh4s7dP9sZHFACcDmz5HWUdv7r3KmPMCsh7u2AdbanVscBNbQBH485m2TKXuKNPgQ3fVxGpg",
  "key17": "deswh5hfjSJNnmMpsJC2z8uwbndMEyoB3xi3BrTXeji1zrGy64RDPdzdjPP9EK9H6MoQkufM5UrRXkTcBWjnFnw",
  "key18": "46butHcrBpw3g9wNY9htF7mu6HSAqfscDGi7FyNAp2Y8Rts2TfDFDab3Ka8q2Sz8VY3HvRtfXn4PsCj7x62aLmnk",
  "key19": "2bSoqxw28uKF6AKgn1AykMmfmxdsVQs8myFN1baubyoqRcMkeWxg1DTWw5JLjZydZFJXhbcQx7L3HeWaU3nzk4v",
  "key20": "4KvzrmJd6oBEgdGjSReJtCT5jiPcKQe5JoAWFtmwQMFT68Rf7zSSQqzrSxK8rfXxZ2PNpYtq7GkZNRWr7ZwLmEEo",
  "key21": "b5xDZhDKxeGenC1FNeLeMypFE47rUWaFJYBfMLdkYVUzZikh7JdgMgRyZ5EAvbXb1An2TAz4iLwXhzsocBNU544",
  "key22": "3fnWiBt3SiE3TH8sFfXD983bMyy4Z6Y4giu1YpNK98oFKcCvdYxhZcbYECR995qcBfWELjWoGq77uXZsQGv8xkRe",
  "key23": "nPCuJBBceGcPXcRkD8XUXZ8mTNbXSzjQ7dHbfnsL7EV4SPKiZDeWbFTozyfhZJBDfekMi4xNYPbYQ1zZ6KHXQnZ",
  "key24": "JP9PsKEPKaJh1exxzzTHLtXfuJ3uNuPRoUU1nNSCmBkh2UDTK4WtpeJGtVmKmBKXV8UtiFxD6hrNdU4oEHz4pMx",
  "key25": "3vEhy4pAe9hGfacynedJV3ubdybPvZgVmzvkBzE5JgRLgwW68us38EebJSQRcWevjNXZwWbqkF8FrMekdYRuyNaJ",
  "key26": "5uCpb5XhwfWietdQi34SBmdq2jV6Ni7JmoJVNW8yvtkeKdu3HcoTbdXweGELGVmKUxJZ9kSMhBYoAt7yHihoVzBJ",
  "key27": "fCoy8ZV91bCrmAr2DgEuC8ZXq23LsYgqk6MpsPRu92UuHzc9s3eAo6612KamS3dLFzbEesVvLBPRX3SSFxqwZ1v"
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
