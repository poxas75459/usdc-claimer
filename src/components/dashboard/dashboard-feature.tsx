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
    "5sjLfpvrydjB3jScuESAUR6esQHKyZHvUFyt3t2YoqZVxTDeYmWfusPpTh8y3wzoLV7xfH87vaaCSRPJ5vVcUcvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ouCc6jh1onFqrbDubqZtuDBAm5UUuyz5rEh3aB3R1Meq4FXuN89CMe5oGoeCSCVQxRjZyzEdM2Fip9qTgjf2rAn",
  "key1": "2p5v47dvedUrQCJjxaBrBmgai7Y4zYHaCzjT9X2Uw27L6SenFmbrotRB2BXMiMwoF1yhCG85gRWgnaim7vMMrMLn",
  "key2": "4PFWFBRz1kxm8coUhLxZrGNKVhSMncr9EGu8o9N85Ydxx8AFoHwrNXG8QvxaYxZLTmvHN44TcPS6AV2oSXmMPY3R",
  "key3": "2JXaGt15miS1FtbWySmY3oPfY4Y4sqqeJW5hua4LEa4WpfZ3dJZum6z7LKuxBEdX8C27QjTJuHTktg213T7Y9SN3",
  "key4": "2NE25SU4Y7NASZ1t1kBFtzDHo159Wk3QEPYMYyc1KKyAcjvsPc2og2mRbeSh9fs2KenASoFiAycQL7qnJDRRwico",
  "key5": "45HCnWFEUMnt2qNd5g61Zo4g9JhwLz4GoyVUxeg3rK2HK6N5NNmynqJMNjAUTbmUtSBfQWaU6eFBaBQdhb1WpqA6",
  "key6": "4cfg4MHGsGvw7bSfdB162BH5LEcWC1tH12Hn8oKeAMWf629b4dU7BNa9AGvRx3ee8CVP1bjUceG5edeKiw8ABz6D",
  "key7": "4GKWSsnbKVF9SP6Q5DiZNFiYj83gyQ9fniM2ZxDFup8k6D2nZraCUn4XYJMwLNtVNC3qZbtHSJM2VcZMsC3T9W42",
  "key8": "2QQBLoGSFkvnyFS2xakz2FYHmQXkkrUkAadxGDQPKrZ886ikyVUTs55TfJCgu3o9gkAJiRxRF5ji9HaxDuPPGXVc",
  "key9": "3gm5an5ZPf1iNXnFE29WrAiYM3bMWpiQtSmNKRyjsa5caDNLZXFftUpwE3Nj5TxW9g4zGFeQ7WSuP54nzCWXpe8i",
  "key10": "51azrYyvdGKzJoyegL9TXVCxRzpU17Wfn7Kce3BPuh3WfeJo73NGQahgtEYdNYy2dYYvCxn4KEdbeqkaxmpSCR7m",
  "key11": "4JSGtW8pEonrmioJHXapBei4ovxTLh3eG9m8Ai3FaFBWP6wMoaBJBwXFjeJGgwcm4BYV4or9AM2ooDg113tv7pZq",
  "key12": "2HQcCAB4oJAmaPCpqyTnTUX9HLxFAphJYae2ohjjeXLbKJpQdJ2PTD7S5dkauDDekGjdxEgxboVNkPcoQS5rZV8A",
  "key13": "3xSydCsv4bFj9qsKhQNE1wi1ASp5HimD8Be11tGjKNHA2BA5x5kJeikBWz5xjqza5tujBnmdPHdWeFMBDNX4joGR",
  "key14": "4GdbuqcYMGz3XeE5rGHRz7XWNBmFVEFfxrV3wNYbaK7XbuMJ2vjj7LuhAbDgCbL38ihbUE7bq3ChgcPsn1N9HFmT",
  "key15": "44u6s3xYDA144MTv7AoSh6VQhERSy8z7XRkvPKDtNujvzbzs85qYLaxHHWTynmDssoANdxxE5sVadckyfULdQ4fC",
  "key16": "4w3rFxih1QYqsd2FD4KLF5eviiThKeD7QKSUneKkFNTBW8yCG1vBR1JfNQwdueRSxQtqybzy7HGQWmM4vSATn5Sa",
  "key17": "2UpnUNKnDve26rLGEY3DZ3QhXzTRS3G6sXWB8gVnLxwajkazYDMRtCyvkjdEszo2QL8p2fvxfk5ARjMSps4hZmav",
  "key18": "3XhANjX5L7wGk26LJK85fhnDkAHMjMA92DZCFD2aor52CDTauz1PGodzQYCAdH3AB7TcNHMkPLUGh5s269mcBGt4",
  "key19": "5Dnsug1wgH45A3dKZqfk9F3o43R8UcoCFJM37NvozfaiqfkEqYeUNSUy5MhPfrsrjXJ2AqSnQGEK6tunjtU2rZC8",
  "key20": "4ZhJSpEWMmAyyQcsAbmKTCdbDHjBpoTWQnHGWoK9sjVeHXG3LCkhEos6KjPxKybKWyBRyaFYfK4GFSsKzqgeRKnq",
  "key21": "9rC96D7fVHHH63weytmsQj4wXs6azYsFpVTTgrUW59jaGGFg5wMa8eHcBHpQUrUNGau57BuUe1MZiEs8te3TMYH",
  "key22": "4g6BBcJggZXVs9UGRjLd4sUHUKW5ERiyfYMQiXugm7V6iNSvY6jTmQDQBeidwxL2fd9SMVFw3yAff4REoGoV5SnG",
  "key23": "QvrBzudWF3FtCrik3oBoDqbP4bP18QSEnPd77GxXNXUgRTvF4tY3rNyFXSps3XgYtKSvYcRpCwexjjmR6f8k9Mv",
  "key24": "21cRgjhnCws2M3o4PSfWESsAA8G8mXcDWa2WVR7M2ss6jcrbjTapYUyc4J4pcBBuUDKRZBxkUrHC6qoP8YGKcRhx",
  "key25": "57MwM9UgoScZno7G2ra4NhvSKwXVJdhL7nPS8CvcZGFgVGU3vTicxsSWhBdB4NTJRTe4MfTFuhxqb238vxqfQH2m",
  "key26": "5dV5jYAqcQqn62JXyET6ueWVXLRxzz8dPQFCLxzWZvjzXr2bV8RD5kEwmTZLAdKhMtQg5Tf4p1MSKGNxAVmXDZkE"
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
