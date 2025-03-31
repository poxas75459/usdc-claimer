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
    "2a8zrZqJyDMn2GUjWP1Dy73TYMBuzi8tV4yjbWxJbLwKfrJksT9rVBcRmX8W5vZBAjjNs68TPH7VZB9gMk3ajyXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7g6fgXzK4Gxr1yDECf6wDVgEVfUUUcJBv6yLoW5w88DQisqHcaMtMu6CQFLY9owF22U5BxgGcw5z9EoHnbQPDF",
  "key1": "ce5QqeCaGEpErRMQ84f8aPenzjHsyLiTX56rfUYvpGhJYKAdcpqvgYsNuEL2vfzR6KH1tExP2heVKgbNdkqpps5",
  "key2": "4Fbm1Yk5jNJ3rMwTw2MAsLP6xtFDz18QnmkBAAjVx7BKPBCkxxYxJg58AwEgZtEpTHtfnrBHPM1Z2KUrwwZoeN9M",
  "key3": "3BkENYoJb7e8L8G8rse8cNEWFSufYw3XkoKpgG2zTgZFA2od2xFNtLuRbDbYaAPkVQXWY7JtNtkXiPdpzDogYFqZ",
  "key4": "4WkfVS4P39yq6HFnyRv9SKTWwo77zb1TZbpuAHQDjQKV3zo3iuF31dcTj2zGDXdL9oupWa519RztwJcZpBKLDmD7",
  "key5": "2D7TxtEhX4KLVqZ6ohBdRTHm6bySxbyymkEDj2K7hPpuTEzZDaAQKhEi6oPrkV1JFQLMm4b9tskJZrpd125YHKJe",
  "key6": "8S6iHB1FVa35vuvUA6nCXi5SPBHQEgLnYWR8XN71ge8TZAHueCuRGJrELeRAGz3sA54gDDyJuG6vaXcu54xtw2j",
  "key7": "39Xf7Gp3YdxAWL1H7cRdbyp4AWfZmop22kwt2pUnkCfqfwqtz3WQDGbQWJ8yd9WCwywmzkgshpoyWMBtB2n8kQoF",
  "key8": "5bYjywkWiBoFAoAgKHGnUrDfYzry4bKedXTQ8izbe7D5Ey4bkGrqLJnTFrFyCoQftcDELUn7GE5NMXGCSk1Aq42X",
  "key9": "8xT1HTszvXo2jJsnFmE2rDg9D2aJK1N9Le3w6XJrVxyxCpELNc7crRxVGcJdETwJZzju4kANeNTk5WqGjWfMjCf",
  "key10": "4uHG2E44Am5SKCFhPLdBA9oV9TUeCvNSHWyeNwUJGvpQrPBV49Gn5L1z1LSTpCGafoC7jBWJzZSz8LbzUg9qqBYD",
  "key11": "5rxNmQJcBEFj1inwVm5BEDP5xTVyjQNAb6Vf7iE1i3ekf8i1YSsPpCZDzKKReiitEiUoQAKaMNiwQXH71QL11oUW",
  "key12": "4a6gC4WFspZWm7ATCbbutHnQVWgqmwDqEpa354vYjbvwj3mrr3gmx8S9KtZ2P3wFsmRKMNBCYy4YCcrPmJoNpTbb",
  "key13": "4t5r2bo8ayaBnSL1dw76J3cSmHn5mY8wGqPVxbLXH7f5Btp57M8NaGotT5svV3vgi86obJc1n73JasMD4J9CAp2T",
  "key14": "2VzgsGC2hNkHhAYmwK8ntRDMN55S34tezgj4Tx7T2pyWdZqkDZtj4bafjn8Sk6XvgRW9t1bqmKNMJSpJKizsRxdu",
  "key15": "4nJdNQeGgkYPoLLDjRDhfduA2fy4DehynM7CbTA611fgUGX8bFTrnsLTKfgnf9Me3TKFb6GL4UZ3wLx58jALgeob",
  "key16": "2R23JdqY5Z3Uq1ojPj2WRQ6G1ThccoxweVBkYqm8PctVWmqfyfLoc9zR6tn1jmNwwBwSUg5KsoszZTSxWMyp8oke",
  "key17": "4ck2fdZ6HXXKzMAzfC2AooQ2LFcQJkc1QsRsvmVopH8CrSec43LmL8t77RRXNUtRvHfjdTGKL9K8WY8aeRTG56Vb",
  "key18": "TUJTXu28mSXmj3Ne25EfBFrTnBYPxkNAqLNGsMEg6sDiY9Xnp7qajKEneP5tGhk4GHjCUPj2W4S1gGCJv7ir8C8",
  "key19": "22KPhsFcHQtc5ZXe1g4ekQGuSionJJyJ5MYxdfGR6GcLp4fZDCHicDrxs7v7F2ns8NNxLejLQbD9HpNHB9VvpRC6",
  "key20": "613X7QpxaCebq36zf3Cs2NpqyWUUiZNvcRQNQUckgkknRkQFyn91SDyZKsdofad2a13hXLofLXtrti9Wa2PB4gmQ",
  "key21": "5ritYx4qhYWKwZLrEz8jnAabgrk237fTtsrJu8vbQVEHEVw4pFErwj5Y5QKdR2twKQg6SLyoanuyNp1YXJPtZcYz",
  "key22": "qg49iC66BbcS2oReiQPRJFy6vtSmy7AnsdifrCJMaMVNrF1vgoYVFV2yJRPXCpXh77wWNaxyYbYXuGhKPJbLbuy",
  "key23": "3D1gtKuoxoVFeNqsi4VgtPCgpGZkm8NLrvneoG5eYTKZxRHoURco2hvJYfof2BGQxRVa7YWHMdWGjJjbZNezcy8D",
  "key24": "4ywG6oCzGSXYJemWZQn2BpF58AwZ6b7EwgPDfmnFizwYiMzbb8jShvHSrAAsfaq2kwKdkjVx4tpEgpj3Nn7xjTnF",
  "key25": "5yaEtfrXSxBY4vTw9kE66fPKVotXpQ6qRCA7BMDPQQseA7KFetpAs3koQoE8KoESLVoamtAzMgUCtMD231kVrBX1",
  "key26": "52tm9ufgYxtFdqgKErU5doP5mv9uCxQ3kY81fcu1sofsJZiVJWc5kFved1sKexKdsuv1nadSG4FeimH6trM2zTqy",
  "key27": "1Y2bv86wf2BtcELjcySUzsK1p2UD3j5Gxd7LGMqav8xkKu9xojmUfDPB4k37nZeBToCCa1pdcXvmRz7gdeqLYqE",
  "key28": "3LJt72NkXymdhMUQ935WX4fC2NBe6Em6PLYPNAJ7EWwSmtwiCKo9wXQAR9ZZ86xsXkgbtD8mZQKmHWuwENXFhFkG",
  "key29": "SsRGT4Y2kWzdoXd3EYUJJwSmogV7KdAcgbsbyXvn9DYRoUQM2sJVAQFrPGm1WmCFyCc2nXFw1AefzsgmLzu1iZh"
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
