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
    "5rBPzXPRzMMEaDSzGdRaJkzd3Ea2xKXCFsMLvyso8J6uFdwV5JkbC9v21ZV3U93PPV8Y6U5P5B1dJyMj5bu5pPUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pq7QM5A2kTHvRTL3y3ikVF33EWw8XzKECJhWLkWMcMS6DQnBcq48HEDV3kuRLRMPYWz6A9h6bTJKHLBcnLjsPec",
  "key1": "mwZCnbLjRL9ZpGUrAbaYeuvcnf5HnN5f7j3KdJYLr11rF1pmGNtYAcHVCfoTV9ffzYKJTZLENjczsgSbUDXHZot",
  "key2": "4J3ZiG2u18XUpVsig1faim3DbvQGR1YDCzbaLc4KENtKFG52kZPTkkGabqcdTEgg1tsPFmuYMmjtMptdz29DLWm3",
  "key3": "3JmXjKZL4Es2SZ6Pp8eF5EPKdis5CtJgmh4jWMVtcTNwg6RRCkMqkAfn6oLPmkY9wcvzKAnf7UkRGhYAmowtZrNq",
  "key4": "5qPuAQ3E1q6nUeuwoPexWDqCoLBFMCJySHUQpZTq3Bs5yWNiicqZziNQtxz5qNnAfhHKEAQYCKnjfieA9WSWNBbk",
  "key5": "3c8cD4fjUDCYeztgXJ7tTePp4G8v6hRVQQMF3YAm4ZvRxX8NempjW5icA8mjimH5fiSrCaUwbe7UqSVc4N5FPvkY",
  "key6": "4kJaSQNTcMBqWTF1dWG6byBYnEnuY77Bhq4qmmsUUaracgDdT5sy9QbmtdQRQUy6GepFXcTE3D17CQpH2Fxqntw8",
  "key7": "3RmVCmkh7pX4mFiqVpcw7bPnPrwLkgiYg8STWfTEeX1KhMN5Vj66K3ZJnv8TYv5VasZ3xV39QUqfxRcofAi8EuAn",
  "key8": "4dTUiVHco8db9KwZCe9KaVkmpqndnnXc2KRqmeQ4yk5azEo8W2jPgNKBRYAH2ynK8uUcdaPqKiwLdBm1rQsoJhAk",
  "key9": "32x2mRQCcCoND9YsSQyfqMBnduGEz64U3TeogTHEYP3aZpiMA18ohjTRFYtq3U3XhhPJbCZDhkVkYdZCPAUffHyH",
  "key10": "3erTbvtVq6Xv5xZDy2dkjbwn5ZYGS3BQWT3hSEEDuk6PBT9Mi96FPn8DygrHYg7cL92MTvRDppBXz5MaW2uDpVWs",
  "key11": "3cmpSdKek4x6XRtoWDz6pafURMErS4257PMyFY2RUsAzPFA4Gf7KjdEAEdFwwQCKZxsjzK6hue1yZ6PhFjFg3uUr",
  "key12": "2GeSUTKKb1CCN5p8Tj5LT6YJyMJu9q9Lkt8qUt5cQV9t1wryE8fPW4i48uLmXn3Nkb1cvxXnLcUq3vJZNGouPbSA",
  "key13": "56FUvUy2BUXziWCDLg3nrXbSnEr7oWwGfwvL8cjst4GfetKQBB6pDpZ4d4p6nGZafekhkb2tQPdKbw3E5zR6aMq8",
  "key14": "5BySvmufVPPYzhBxcjVoumLRjE4bLcv7x2gMk7W1KgYfg9THrdra7zUQkWzmCsdCK3YcKr54NLsugKhjBgci3jPY",
  "key15": "XNgEFdCxUm7hRm3tPh2rKGVc8Fi5AK2J5484HAy1rkt71LndRFwDXPgaAqUwfjMKXu8Tev8HgRHtvpRXmqfsWm6",
  "key16": "EDVd8yRBaBAZNotH7SkWrMBBGW2KyhLDjXVAtyPwBkF6YxfJBvfAE1V2HMoiTTQ5vDc3rz9xpTfsjF1bxzP8sDo",
  "key17": "28AJ9XKGQpua3PPwA9QiZW3CeTTEvqNYTNXBxKYYjiE69pkq4mRAsFYW36zKR6CUbVUcNuZ5oxXVEMop5bEKZgt1",
  "key18": "t7Gf1Rh39SYzitiJ273S9XTQkChgP4uqie1UuTTjpKPKwGooqNUSq3KTwgPxuoxrp4zWEiDbsTwmAPeNqx4fEid",
  "key19": "55TgcEe8hcc8cWLdvCu9K6iD4foSa52m8Ayn9E6JFEUt4pEFkqJdQqHzTBiC4XtHDb6X47sRFL6kaJfaWzsTPHqo",
  "key20": "3reyUdsCiBWTQvXqka2JhzN199nuEN5StpcMVrBcK5xCj6qdoKPHucnmQzZ8VZyge98DZwTdYkmPcfTwLrqwjukC",
  "key21": "4WsuQPoaXWfdyd39rcJD8LbkXAA5z72cWhwMoTfoFLQUpoz3FS9CX3r4ALT82g6D6BQTEms4daNrz9iBGZ1VgJdP",
  "key22": "5hpdajyuTNh6Xy1WjquNvE26mv3o7a57JTUjdxDwC7VrW1qJ7nGmrg56VuX3Lx6yB5p5iTZj6wesiKDGWqJzY4KJ",
  "key23": "1b137qJfKHBg8BCNm5uCDR1jLA3mdnEDgfPi8C1Sqb3fkfPnRRH2pF7SpQQhkS8hFSwBqtdAMZnVBj9pr5rhAPh",
  "key24": "399bhaBA434uJpc9toCdNdL2mNRJoW3LjhcGPUmXQET9BetRx615zjGBkQVhooy3ABUYdWFPbRXzWKuKbUViBwKu",
  "key25": "67osSe9AKy3T8DkrjGQsbnVcT4r1j3Y2fcmMnH3syqutRUEmNhCqstVd6cyXhRv7saf12yK6P3buvSGyyTXPniSa",
  "key26": "3ByJNwEXB3ayk9ei28SRDs7GsB2yehFPCSkwEca5qTnW8ho1FKMw9a8TiSMf5oAkthiZewSmptSYPQoJ66miuKx9",
  "key27": "yb97vUJqXaiaZJhzzSMtiuQM3X7fSQAj7kHJ5bw4N3PjuXWXGnwfNf6vD13rYhMgELNJ5uGFcyp9xf3esPeiLR3",
  "key28": "2RHGSXuQnnFhWbGGgHM5D2RCQyDNWSrgQNQdsP4G3WRPz9PBjXCFUjBP1tpMvh5VBDmgi3sJEYse2xnKnXWjHxkf"
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
