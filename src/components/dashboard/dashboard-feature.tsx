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
    "3B4ryjJ9VrZV3SoaRUcDwzZRNPvRWsxwyrTcCbDRkEZc5PNWVa7rHwr5EBqjMeqhvLfnvrVWEVUBYLrVn9o78MKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxWhSRPMaWMtvbNrDpe4Bpcaxo9rCiowanXExBVeyJBP7paShqFjAcnJEKqPJTTod5F3NHfigiSeMY2xDR4zbdK",
  "key1": "3dg3R2WEpLMEnuX65NdpnAA2EC4dcE68Lcsk1rUdQJri1KKqxkUobzPnoFtXzjLUdGdwXQC6AZJ1brim8dNGxikv",
  "key2": "2tHH6VuQwT3nR5ne2K3d8bqeUy91icV1A2DDrPC2SR2mdnYFWdfkPWnoKvtZA1nayndU1KSAHSsiiFN1RTewvT52",
  "key3": "5d615yifATcZnjQAbKEvrjNjKvDYioJUhRM99SX4tFLhracmYFowM56GL7urQNBhwGC7wLi5REhESY6FJ2PnfACX",
  "key4": "37eppVF7xdzuQoUKn6HCa2usM7p3XDyvv5B6Noofmu6ubR1zFBPAeuxqQ4RD1JH1ChGkLqLAMoLjP7cq612Ngg5h",
  "key5": "qvzK96nuLLmV259Cub5D7uwkHX8pG9zdcgAm5TZqdtkM1urVuG5rcGD46n8c5oJwwTTtBL9Y5USUEzoeGo8pCXo",
  "key6": "123njo8nHT4pX1sgXioTi8AH2iLptchGKEEb4JzgjmgCM3UzRCvkeXSDBK5NgfxJ3frQrYHtdm1NdeAkL795TVeh",
  "key7": "tsbBTLiofwvVuGC6ux86GD3Z7fHxUPpFkFzQ195M8GwdMk38hVHKJuET2QFh7W1UksEFpDEvqZPupEnMMcYJoEC",
  "key8": "xTGEjftNdbAQwHk2DFEpxv3XciGHuzrzUBgd4EMQyTr2bBcfdY4qLvJdncwvqcsrx6jYQBhD1ndTzo9GMoKTBfG",
  "key9": "2HZEU8WtEgTWywB3UHfBQ5SJNfVNwdv3jWJVTXD8nWhGrnYofT853kosrMcZgvC6A4xQieeEvF2LrV9WAjH7vp3r",
  "key10": "2SEaCsgQgaMvjksDr9omSEkn9Zzb6aneLTsnqp1fZb2n7S2bvXQjKCCGogCFgyiD8Ssa7U4yVGNKs1Sib9qwYQEP",
  "key11": "5dr3fbmnk5cA9yvaorpNiSWZKBR21K3oC8homBYYoJki8bfp5ThFrU6WmPTAGPp2Gp3dyNKqtbyEPxeBonETQFZW",
  "key12": "2u5ZAF4utk2DBgLUp3RMXrr4RHttaEhqjaLrx8Ho4EcVB3fdWVhcgKNA4VfXKuvqaKH1rvg6Ji4MfxDRMBJ97Qs8",
  "key13": "4gJXgh2GiupPm1QpEVZYajnAdMiQgnRMd2gH1LcQ6qFuZCmidUhJEcBwQUnEQAC91NuAngJnX3KEXXRfcxvW2mE9",
  "key14": "CM7sc2STzHUJK9e54cFAqWX3VofHszQU5o6Zh5jCBK5rc6yL3LuqWvaBo963BHAU6aBrzR9mUWL813LG1EM83g6",
  "key15": "3rs7Z1qFDnrpV4YhHGTX8yxAJMbrPqA8ALyz3LV9J2NLmGieyyfzBpV5KTdMQ1G8YKtey9rudEcokN5JMkn7L3aH",
  "key16": "3QWS6fPTcUStqyPChrWw9WvB2YDkA8WaMZyFvV3ov3CQd9Hp2k374vHaPvUZ4yhE7j3jPCgtMvf5E9f89mCiH3Pz",
  "key17": "4PZkYq7jKjfNhT3rMgk82sYYGJUReCi41Xpxsw4fELxwspJhv18Xspr3aHuewZdjpSZfTaGJPcZXCw8FFo183Qgz",
  "key18": "4B6GvjKy6aVpvF2YgMRtniQYRKqE2TcLMXchG876YtSqZ3drvDP4rHaGdpgBaFtHg3y5rvvwoVVXv2AQpMQ7kocY",
  "key19": "4K4jB4UNCqzUQKrqZyQdNLQtRbpyzTKkC9c8uJqN3tWEe5Z6SSg5Pm8bEnJcxhgVBHJiLrbL6t6kPmUrneJ7qJc7",
  "key20": "5USyWEsW9y3QvezKUJidWefCVnaP49AFTP7Rkt7e831uPytxBmjgquA4PQ3cKoa3BFjVDpvYsnEL79czsgex4VkF",
  "key21": "KjA8kDjGbwrmexJRUqHKoGa8zN5YvhStv7HLDg9VYJt51TdZqvm5X7qzcH2UB3HvexBQZdsn8viBSVqqgPwgnDN",
  "key22": "Ts1DE2EnEYArKPoYoDG1wFSh8xWhWcNHL7bHyX7opx6PM2YJZ7P2hNp8JNrQuz22BrBmN95hgFJhXqaGg4KMkTY",
  "key23": "67k3A3ujqTMuoLGq2B8WT4bqH45VQmV7Z6nAfv9tTWRQbP1XSQWe8aufV4cSm7QUp6XcJz6zdL7E5QNpp1ZBT64g",
  "key24": "2uUHSXx6WsTBzpMvPXeTPfbPPaA7uug48VZW9xZ2X8c3qL3yjzBhiMkQXbRr4B5N4oBSqk3NMTJEdWHDRQfXnLaS",
  "key25": "4Noneqgiby3CXrmiUdoLQ7iaKhswYYtHpymobvn7xZYxxkK5mbpaV5rGw9DwroLduv16vKxgHxFdw4WVm7PDzqVR",
  "key26": "5cS4G2ngfePecWaweuY4N36DfHicyqhG4BJRxCRchWtqLmH3tMjJpnwXrXxpqnfCZfuPX3YwRWbdrXadF13WtNmR",
  "key27": "N5wieg8bvb5rUuHi9w9sW4iMvFSG1V7jRCtjjD8GS3mq6fszd3ZE9yRCvFg3GTuQNKXoBtYf4kPqmQ5JouNJ5Hr",
  "key28": "3Yx27eTBXQRBFhGzgHay1MAvH8qvDsx4KXkzTtgxJMm93SBpmzjhFGxiJ6Hz2QbixdfHNBrzSHrzzfxmBHDjMbv",
  "key29": "bUeW1Gfw6q4TpXmTKrGioouckE3Dk7sitknVEzxLcKf8uNoxhCfhqR5UYLGT5mQmfSKJoqu3QK17rHjfPtJ2fnP",
  "key30": "3Lvr1nMdYVBDv7aMLo7BJ4utxGxoPcdXBYH2TTjVDfJrTuqsLrcf2o1wMFQF2RSbAq4vkaJuEwYP4uVNqZmgAZYx",
  "key31": "2teLhTc6t9SvHoqEFt7C1nwis1yBnsryP9pPDjCeZuWu8GvUkXwC3ysXvH6QovBj6qav8mzsBjwALWSTdV1PDX6p",
  "key32": "5m11rRqQfkbfuLeHmXr1JivsFMR98RJtXCSExYgh2RKrjk6qfcd8CtvUFr7fYfqHmsmcyXP5W4stdmqmu2XpZLk5",
  "key33": "4HGRennj2vQxvEQUifKExBysC3NjMLejeVKrMkEr9peu4xvgi1dWwSDmR8eJUFJ9ZiQVhsHC7H3mdReqwRxeGWba",
  "key34": "4eKWCpf6NSWCDUxoEB6VM18quDE8mHboRYib6UzjbaRkY2u1wGrDdGWSXRx7vUSRP16HKKHnsxFrGzZ25QzKJgXS",
  "key35": "9okQR16hASv4i3jn4CGzzyJiUfSMqWziGUSeYv5fTP2ShmmXGRKibz5hPuorCbFu7EVMsHW943Sv3YBAkWqoxUy",
  "key36": "ipZANmhJUF34kPTfNySfbWBgXeViQPcLgDVKeVJKARTGayZbvqrSho67uxNmLnetg15Reb4Jz2kNqtYztuzBNkp",
  "key37": "2VYf7Q3NqBdxNyCagRM7fHMgf6Tm15VuRecfnQFomEF5DSYsLwswC3fScyxXzybHBLxcQ8MRtunLdak5Z7cCMH3b",
  "key38": "3ZqqoWL4yZPri6kUM6HH8dkbqSTNyFe8z2WNjLgQLxSDCi2xbaffQfEFA9rU3sea7ntns35ZSjh17QkFAVxPKDgH",
  "key39": "5StWRVbQDowEcQU2aXgz8SevXikAwur6Zx37acS6UsxuVB2Esr1AhPmM4LGLKXyi469PDuhy9GWWtWjDBNzEjUAx",
  "key40": "oZjSdjzd5Jdo1BFASffAXveBZ8rkdrv8DxFLNbpNqEvaoqE4dLexqims9wvwQcAYeSVrKnhNmLWADj2PzVeCq7X",
  "key41": "5vuGLT6rYK4UnVw8btef8HqTJggsjwuv7GaBWjsyG41W1xcHJu9ecoWEKwjoSMrVHDDrQ4tr2FBZF65GzZi3B8kf",
  "key42": "3nffNnqrFmkwdNSPvpCHoWmj2Y2VhAXwdKeGNT6PDR6exDvLxu7F6Ji5bBWAW21v9Zz3Q3oMsVJphWj3BCRgJdBm",
  "key43": "5s9DVPtWJ4xgbofdaacrm3xG8wn9hoAhzsKwygj7hrHGcfY6YNL7HUbk8DRPj645q3m5FXUPFVxEhS36LBNtmdh1"
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
