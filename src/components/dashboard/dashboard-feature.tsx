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
    "2WYq6i95J1EVxcC5tYopq4ZKaJ9PLCB7WK4mKFYcu12RorARQww5upvu1LraAiworEhsNNJDAQisLw3RLxsT8qV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495Bz3XMAQmGz5yzEj6R3nSZhGKYp9kqw7o7fWVgTw5WNwzEuibzxT1Aqvke8x8H3mayMeLjv45gJLD8yrGgL21S",
  "key1": "2UNKkLLRzQPQmeJxGbYwogT571VFCGESPYo9w4DcjMFvj8qz5FuGoG55WahdkFp6LrmV3vkzbh8Cryf663knMdcY",
  "key2": "3Z2XyQ768NjJjapr7HCnFmKT54XDdPutVB8WmRDnmCzcQ7C3fjNisk5gv1gt99u1DdwZYtp4hog9zYFpKJSqG92",
  "key3": "2L2uQQ4zh1tX8Zvd1ALhMaKefkAmkWGzYZdFYerMZFmQE5vSwq8wnmpPuK1p322auiwdcGkUn1szJssXD85uUoCE",
  "key4": "5hyWqxFVr22xGjzdu3CtYG3qreGNHLD3MkRQa15yD3wcL4VHCVbjWqUtvnBa1kfmH6ryiG66Ts2UKwMTzzFskoU5",
  "key5": "2zijkEKhynFamEhyy6GYLfUXg8PKEaa3MNBY97LcaD65oYzw9hHJz1JwE47T7Yy71BTp98JSb6kwSDjXSyRvnQ6S",
  "key6": "4Z6p7bJYguwPmbdG4XsZvdSTBKCj5K8TeTaXezgb98Ee8s3vJhbxRUDVdxtHNwTJ16ZdBkvjGtmBSvgYGXo6uBgV",
  "key7": "67PrvmftmxCx14idzWEEzhz5f6gQZyjGB9eJ88Ea8oSMwm7yUZg88phXeqqajK5c31zB4PxrZpC81o9S1ujYghHo",
  "key8": "FKpD8fGHuxkSueDEEBsvmLiPQFVt9WrpsayLMGVfdZ8pc5LSq6iEtji3dRGeUaeHnB1i9sNBzz6fEsQKfb7dAgW",
  "key9": "3MBpMCyM8VRs88wMRtrRab9NHKqW4bkVLweNiquP875ua71PkeEnFjdEzBDA4oRt1JNTUQgKoX7ZVMbUrVMDXShC",
  "key10": "4fTDR6TMCXxTjMkcmsp38nzvXr5dGSEYJrfiKivcQMb3kin9nk31wunRMFJQDxc1TpcTJy4kkeHs2AiPWDMGmdTn",
  "key11": "x75tkf3ZPpV5k3LyvwTkUdEVntZfJXHED92U7MYLuGEFwmM1FUqs3acD1KRHYK6yjjnNd9N1pdCAKsLL5V58mJH",
  "key12": "5TTuSbt9uXbFfYeDA1zy3Mn47yfB6XQNsmaCf9kJmJzJvSya1yMAuvuHSWiAjUThrr7tARLJrB7sogPg6SmrzhhJ",
  "key13": "2pPUiUe98NBx9SPSVRYXNYKVsXmtkHa4x2mc2CeLBvTKxRRvYsiAJXGq36TwkSq2LT59QTWd6vfZqZBc9QwFCdf8",
  "key14": "5subefjU2QCUkmZZTiin7Dnqog6Bk9dHmbiDNk7x36Z7rAW6Diu8TrFtxRpWTGH1SGbxuyqYZoBCuVgAqDaNuax4",
  "key15": "vH3K71qELEQ5SCSNbNAdKqf8HQHzofzALJpx1F1CTynUZgyriTogEDQrabZVukh66Ms4CT6sUiaTECMCdUozbyH",
  "key16": "5JCfbatmHxbw1u3KeqrENkRQT4XPjQFvQ8z2NB97Q5DJfvcoKGGiVYF4uVqrCPM1g2RXvBBzXpBaSg6p2ZG13L2v",
  "key17": "2Dskxo466UkpGVMWtYevz4q45GpfCyErGgdUtvWh9wRkiNSezuR6gt8u8nq179N8rwTJJgVNRZBR4re99toqcQ6b",
  "key18": "5jRQNE5BrZbq4wyNxmKugeS82WpF6N4S9jzuh1A5kFDLPBWGDVfSQhSNh5FqCnfGRnBHYkvJdZth1KbhDTiaivGw",
  "key19": "22t66jZEAGTJTf3nFRp7GXsjwYJoj74NMcjDizCqSuAJefPwzNJXdeXJXnF985uCgjhnUXHGd5wSd8rALjUu4whi",
  "key20": "2XZD5tQTX5L2WfNyG89PsoFqtNmFiHkEyKomZWjchLSkEq3amFKqfhGp826FmvgZ4WmviCvwHkbd6ECCveqN7yXz",
  "key21": "4YurJwQbpBhC2AVABHssL6KtQzfegvfWHqGW3ibFHWrckKtZoENiFB6eihtvYA7sMy8fKboCvQ7RL8tqmm88KW18",
  "key22": "62e3UhZKE15eDfjnrnpiyWNGpXEfBtyFd9Hrng66ugNjAhRvzqZCa6Te3SNuwJdyY2bcEPJ6M1bKTQxJfSCwhXnm",
  "key23": "313QnuW4EW18aFYHeADuznvFQrQFF6HbBUpJv9oLRtgw6cps7hexWuw3wvUQFAbqaxqSdVDmiGn2PgVxRAyUHhtt",
  "key24": "gNPXRFSygQUmhAfwP3ySZXXMahhVttU5qyQSZZ8jQiCNaEJwQYTRqXKzBcZKDr2MmySmFzjgmJg6HakP9yJ5C5y",
  "key25": "5cByE34MNv5PNwGhu4UtWaqZsKKTpANAcCzCSJUHANN4ytTJHHLufkTiUKsiy4RvLbiiQs68tMETKyYjcQAePVsJ",
  "key26": "45FTaHhsQ7SCtEgo1Tm73GBzpyHXa7w54SXQy5WTxzY86dPgDeFHcGjt9rYbfqnVtHaKGLKMiWGCDoowom3mfiTa",
  "key27": "gkAZ2gHTEETBcBYMnRPETnfjRrgBHcJh9pFy6WtHJH6XmKDgaTPL8Z7uxy56Yr9jHhmpfjo6giZDVxaWX5JNqqU",
  "key28": "MxYq4pt8DQjWQeLNdvPCnX52GLJmbSJHk1QM8HUTqGx5V3rDvxADFBQKHt8w89ckMm6QTedG8nD3D1J82Hyh35E",
  "key29": "7KMN6gEZrKsksdf73EaxCVjXS8XnRTyDcfH25o6rFJQrWfwsisifezSqPdmmHUKzqtEg8QTz8TnEFs2vLJUW7z1"
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
