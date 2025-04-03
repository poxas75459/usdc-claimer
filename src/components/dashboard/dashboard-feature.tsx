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
    "4eNhEHpe9iy86mFmr3KW7qEVZcagSdiVJt5Pjx4AcmaJ6VuDuohL9PP1uLYErF5aLpvgQ23KXsTou93ecCJCccuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ZbVcrBZXh8Mf4uPArKRMSfHvQEzyZh5EyaJJZNkUg7ggYxEdLQpStRa54AhjX1awQNusqxjmtnvcHLL6bkeYNn",
  "key1": "2frvcxSxQP1uyephs3MXr9J5YxgbLkURa4nP8m98ysxWNtSETQXdMkSuc9oWQfcK44tYRg1KeA7PZHBsYMPZzo88",
  "key2": "DtiZgK4ropaHcng5K5FESY7qf3NvxPzGfFvGXBwfXGSGbfARc4LiVXyoCHtoEwZhY5zKTUK5kwEDzaXHheRmjTp",
  "key3": "ziveiHe5prjx7Xw8kNZTwsvsVHkJDTiixMSnb8wT57pEyovn4pP4CT9FxMkwKBqvvJP2JgTXjbarWSJ99keUfSF",
  "key4": "3tkQEzo3nQnU59tn6NjfN5DczLL76XwNA7AhS6hGkWJN2oEAE2hPNxhxMtYp4dwhCTpNVE1xPQLiRM83xEcd9AHR",
  "key5": "4TDoKxcPRF1yaTZPYxXf1e1yn7uf7B1F8yZAmKruuYU9t2o4o51pRYtiTYxhyD48NNNVCWEbP9dat4wkQG2VRbyZ",
  "key6": "2SxBZxtoq2VEpq53y7ptJAPzBk4fXat1eqiVQuDZhVPnJER5uWyJucpGDps9prvT2uuCtKJEw79knMMaDV9q9Qk",
  "key7": "5VynmbkRcEruQRjNzNb29GFxXVA9xQqVguMuKXiz3zmZEFdaUDUrm3dym82xpnuupXkhur74pnGFFrk8KjLhCvz2",
  "key8": "9RNsu7RS5hFnhw3tWp7SCKZgVbHsPsA98fd9gbMBCtvfvauowyCev68AiTdm2YNbCpsPF44wD9FXkBskmJfrFng",
  "key9": "deNdRj8CuKLPyjE8Kk2ooVmPf2xdtYh7pC3VfW8mH5z4avV4JRC98qRvQGqS1spXSNgC9fbBc5GMhqNjrqfQRgF",
  "key10": "3aonpBNgqGZ79Yk99E7AdLypzFWef57Zek7f4oB6qtn71fNy7MECz8YJuntzhXTmc8258ndbr9gDyQc4yKwsN7xY",
  "key11": "67KUH1tDaWRpXQHSLtmmHVCpgPQ5zeZmaxtqcotD7XzuSFRGtpTH5JVkp59p5zCXfGD44cPg5ZJ2PpjC8w68mvYr",
  "key12": "5V14Ah2q73UZy6b1dvSPANmo9PhrCRcRB9c2RmNN3h4gyMdXGbmjMRHRreXPziCn3jvN2vQcWVgtHtYj9USRQfpR",
  "key13": "8JqUL7QNBEtMu6MBx2dVMrFggGjLbX5mTacFbgUHf3S9TTSk2mtNXgdm5EWrK5NMy3pdQh73L4iceWDVjas1iKY",
  "key14": "5mCKYHn87juacHSQTT72v5SLbnfTs5wqDvF2XLm1sHgKocoUvZjy3cagw5yRiasVQNZtFqGc5c5Xo9RXbdXpTeV2",
  "key15": "2LwUKxr1Lxbm7iXcpYKKfim37D5XBk718XAu9oScPWzMtz8RbxAt2k6eKDQdKCcEEWfmE4ghRkKDDrCUd3WqRsYq",
  "key16": "4NzM5GZ5FjR8LvQVieJu3qEvbvqjiaDoYxDDVFAYUPhg54X7WiyABPtVmRfJ61JpLVQ5jM8juncTVtLP66F5wWiD",
  "key17": "5uUK2ERBdEGdVRtYBPA79ZvcffTvgZxRqXypGzbEyVGabb5t1Nv9myoH9RqLk9c6GzhWY3SVMKrVUcJ2AzA2obg6",
  "key18": "5Yb3NH1ctNXXM2JfwSTSfqTPnctCzfRaavLafrsMERp5tBZeyrDFh7dtjLCEV4yxMbNWHbxdjrePAxE3orvhLEMC",
  "key19": "2Zzv6f1Kyn2WeGhvg3NWne8oWdFbaGZzEzsMWHZG8tujcpEbz7L8t8Ers2eZXPgUoJaCrUH5Yurr4pJtGsuvtGWc",
  "key20": "5Ltm9Lsv5nUGSZRajhcvA4tjPzWNMCLMyZcqVZEzRRzKKEjKodVdamnLf7pwvz1VgqDPoh7TrA32P2HpddNLVKVD",
  "key21": "4ciNPfsd2p9rWCGzcU3pYPQ293JgZJPHiUTwGQ5M7UhKLAs2kRgQkZowunoyd4YtWn7affRnYtMyePRaUQGV7Sw1",
  "key22": "5NXtMZkVaCJPDw3zcxGWXQUGZh22Zvkmy5M8w6nGhm9yFApTrQXDJLYVxQSJDAMJWd335tEskqPHfCqZ1SfM2qWo",
  "key23": "3pMRSc68apmFXKQDiYcNZYnMeBXjzpz6hWbCXQrpYqnj4AU7kgqrkExCbDTwsJpqC6gAtDrFuPp33Z8Afsvx2Ypc",
  "key24": "5inT1iZd8ZyPiGiwZKvhx2eFTA56A315CcjeP9bwm2CcR6erGjZhRuaXxqjGm8PyGvNBoRha3Wv9RzbXxKNzqTWk",
  "key25": "3AVPhskRmrekojzduLuVTxZ78XiJr4UMrqhz8UaBku4tZuYL7fhY8T4kbqg7xqoTdJWq7d6UJ4DFCX89cihZhmTW",
  "key26": "4bhGiv9V78njM3kyWEktQmTsWXDFkWzQsuQytCDrZ1iRQxAJAev1Sjep1JGbEmAZqv68bz8QvK6jdCqCtKXJQ32k",
  "key27": "5B6jL3ocdPb2N3XxfJnhwxxUqjAzTqn914FYpTJhnhVQsGXayQqrTQZoqypz3yCi7u5gxxKmoniSwiLj83YM4a1S",
  "key28": "2qm4FPGVcV5Ym9fs6z9pohpPzyXoebbm4NiWoWQ3TgmV15fXM3HTrLfww7w9vhK94WkRPkaHozAN4SrQp35pQAs2",
  "key29": "3non1RBodHc5szVnkuRwmW18B4SXHeTCeE9ugxWgme4tC2Y5Q7NWZtHdczUVGCVRwE3kRsGkoouUY1g3BeTpo7Cy",
  "key30": "2yzxJmreHS8KtUhRuRGZLMeW8YdKVrWjw5C2jV5Mur8kW9tY8u7zHuYBKLQBE3T8VhRUq6YD7amQUoANoff24Brx",
  "key31": "3iRtmaRLW2tXDrmMJqoM8xnNGdskgAEKRYcm56sHf162VoaN45vG6PZtEFe6wdS18t1dqytqibabHAnkfUQ8Qv5Z",
  "key32": "25PoAdEP8PUZUBHadJn8ifzdGNgTNTLcZh3BmFmWS6HVHVf596ctSSMDruRdAhZg7vxDPVTseYPtDz9gtkRxB8WA",
  "key33": "3mgTvtskpTMzhuC3CduFPVTaPtUzkid4jSc7J1TPTKhKB4bv7kfJfEeRJo7vrG4GEsLDqqAVhDXUj7WfCNYXpqzv",
  "key34": "2L9D8AxQe5Ar1dwC657xmbjEKHZyN35FMAj2d2Rn5GNYKdJPFkmSmexALFaH6tLjoxYLXdgEaQieh7bowfu1cMdK",
  "key35": "34Tws4TX117pj2GPCHXQjhu4YE4Jc2tDDy1Sk26DU6cejnerbajS46LVrdVTbudoRnXyXLhTu3ZdWhZug1xcv35X",
  "key36": "3ccaKkd1NSNiLSTtVreKRWNvpyRKnd6iX2ggZjZRR1jCGX5u6xA2aZSoek6cx4jZNJh8tNUpEPdPxqoGSQsLPwBT",
  "key37": "gCFH6Xesdv4fgHob1hp14hGcyHm7xi1ATf6x4JYxt9QLo6o9Jp5zhvuw9K2TU74yzqhyqkERgqgW8weP72H2en7"
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
