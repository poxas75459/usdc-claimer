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
    "28HdYxY9ZzhrrRKkokDhQHL54teyxkWJ6eEpEsM1SWkhMYZmmqsoPfaHwtKyg7ViAtSdE6n4RjTez7fS4wNNnUZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmjwxKv46JLWoRa3WMaqBCtB6AkBRkW6HgipbgBvG8qrp3v2vS8dcuzY9KLaB2dfbqSYD5EcMuAwm2pR6kCzzcA",
  "key1": "5kj9rRKe3gzR3p2iCYCUyut2ALUctR82mpnWmc6F4ugWBqRSPTTLFcqs6VLJ8Anwj4iZrHzqHYrZktsEig8Pu79T",
  "key2": "6kt4q6mPVbchvRzTV8dzUk7zcQeATy9trb6EyJhTSq9iXW8yYMgSGmLx5GnhmnzoVLdkfJwKWroKffEi98objH1",
  "key3": "65wWmLPV48N4fndZ2LjgRmpbn1pPwAPm78bpybsCW9BhjV3hXYfKQ9e7CJyZmZaxfTQF9i8PFsxKS3zgtht6mBmH",
  "key4": "5LDuE9KWTBAruGWfVESHdEJWGFn6rcgZFuJ3JC2mAoLeRe2mhwgXy1fqrBYJCeyLBihZKQP33wSYJfo48urTtdod",
  "key5": "5PUEiuX2nKb9XkHD6Z9PumtFNiQLbFqnR38tMSdv5c2c2sTEqfKu2s7KSPFAZCGguh6zQp1x9S6i2S8Wjp2No11q",
  "key6": "31nsHT9sAuKjJZ2wqMrBq69FwR9qBZ9UkN1nKNHNXZDFCmT93kthw2CzZdxT3jbTgZvHbUL5RvAa8uaesL9BLzva",
  "key7": "4bxR6hZkmiYWErKqkfdhzvZpRNitpdVE9ZMGGidefGVLE3XVBL4Uxp2WoCNCMz4bbVgb7pV6FGJg9BfYXWWwiPAT",
  "key8": "2t9WH58GvyaU7jg14KGs9q7fiwaSQ9W3PJmCWRcGvykGgsa5NttNXudjf6YQjSojpcFufxWcpQvyCPdGUvWVVqEu",
  "key9": "x36NBZr9GpFdwi3E1udwmVL6jnr2KyB5zgDUUgCMz5Gk1zrokiGydJKdXbXkn9zow2nY3z61w7gCs5cByX6scBn",
  "key10": "5so5wyErLsxLVJGSZeMfSqxsqDVaAGroSu6XEc8bD1gtBqgzwn1MDs9sqxyp5vGUBqCBm1Kjr3iqGTYWf6kxKNnb",
  "key11": "3fuShQYqrHhxyQAaAoMqYwuiMEXruZgdTHRrTR2kwBCYFCRCLqdWcLMNBb3nLNDmTwrtkVHZo6LzPX3UrAbsJufr",
  "key12": "4tZ59GGwhPWcm7obGyAaSLMYsNXUGRVncAwzgWNLFJA48ziFmnq5Z8cMG5KYxb5wLbqUUPy5G7aMsDQHMqcRnAJt",
  "key13": "2yGM5LTw9j7oFQcxSbofcaJ8oHRwS3mokp8SyoNnzDbTiGdE57CNdKHwSb8uRqAgAURnqDY3qLAn72xyJHuUC4pS",
  "key14": "5RjFsf6yDoP6j7Av5hPSvj6qLqbHey2hvp56s2jsKs6uGNrFmWU7RDcGxgKJwyNXeb1wk2REgZd6bnq1vtGEAZ2Y",
  "key15": "5bNcumKfQQwoRK1mGt8MhLcCmoPyjKAhVLG4HXPmjZDAMKK5fYwqGMxPvaE8TDzjYMjbPAETdd9yt3GmTJaeujT6",
  "key16": "QfTewe1RJHfB9PS2JtcqqCRw3XjBH2rdKB9uo3YgD5GoKPVKpSN9fCSwyRLjSuWXqDaC3vK6B4Bfz9enpz8ZPZD",
  "key17": "YCNrKMwBMdNdK7hLt7zPScZqhEVf8N23yQCGsdraY595B9cbJEmtoD4xm2aQMVqyw7kviFsQqZMspjH88zRhrMv",
  "key18": "2Uzw8Lo4fjKwQjrf84kZPDCxazfBBjELdrb8NKYmYw7aKxZrLJ8EzHcjZha1p5mbeHC7T7LjYaj5kEbEkMdoFq9n",
  "key19": "5SdiHaDWMEW26cxVSB9WGGS7gnWGbK84eZ1BHdetW2GQAvK5iYNEeY5MzRoSpVvxN2fr9z5MMYPnc3HyjPuG5Z2q",
  "key20": "57DHgzLEcrGiDhZAEAuNhuuj3ezo8s6Uiu4HtE97GQLZtfV5nbZGtqzEpTdqRaoH1zp28TUzgvsMyoD8CmF77e7i",
  "key21": "3vycY8HQk2L3EkVZ6ww1Bko8ZvfrJkMguquvCpXDSck2TaqRmpfSZvPfeofEwg2ZvPELCJ9RdCDVMYaqpdBEJhdT",
  "key22": "5up11HHw7hEU1QJXpugHsgqkemTivaSG4zZRkTo4pUiLH8kgNTRJ3cJNfHRZEEcJfASp8g1Eir1AsS7bCSBkgmMX",
  "key23": "2g26fz7bHx9eRmcVNrWQnx9aSHtWRViL8uZAZWHqCWiiYV647g3ufQonpbNSmjnoxMLqdoJAFdfiryH9vRo1mxKZ",
  "key24": "2XGgbrmkeAq8cww5otZmKaKb9NH2aBKeRQGV8H9vtvJmUnbbUvvKEj3U7ifTEUxYJ8kUYZGsvHjD63R5keCMNNo7",
  "key25": "246nw8cRFYe4Lfyp7QvKmQEdNDqWrCJtHWpmtewyKQybsZuTXfowQAPG24ebTWAPvKCWWezKKiCYBC6ALLVTND2Y",
  "key26": "3yTPwFhiRgCFhopjoRBqDog2vJSvwFB1J9KioQKwUY2eP5GxXt8h1b6aHMhMqYmeggRHqTTALjJMGPKkuJvvwNRU",
  "key27": "4M6o5w8jCeUe8AeB4nrCu2XSTu99wJgmWnsJh8zvW8kr1oS8R1C8nCHLRurx3cgp1uzj7jMivTRHSsxVcGX8Qe9Z",
  "key28": "42jEvYYd8nU3vxFMrgMY5n7oX2M3FXE5y49Art5F1qfjzgCxbR4WSR75dWnfeKNXd4TSTzKm9hRKW1xpoD4acMpz",
  "key29": "3y3sdnrM5pUqzLeKAryYg8GxCMRJktBh21WH9TPzhSNyQjoaEfR49LvdrZgviq1wD7D3hMos3xgUxnaTLmAgJcWi",
  "key30": "2NLAim2ACrGCGeH5mzAFXHvm1rNHrUBMpZHVqc7Dau1Sqix8eomaUWWH8xsLFDz7JVo97q6kE2XqHn9Jz4GsSjPJ",
  "key31": "59Tn1a2u8ikM7fEmqfHshdtF3N5TdpA8PaQ8FArF5njmCJKyF7ZvNZPZr1D2jEi9zDBSJnrsqmCRvAu9n1UPpumg",
  "key32": "3ommd1e3KQGVudu5GMiEYHfcJ4fXDzYF9aw2ZciFmmofD8MKjFJ6Az2yHBmfxKcJLsP6QnM729XQ2hy7cGsFyGzF",
  "key33": "3hbQmLbGWMQbua5fQguUXUosBwyvLHvXCYZnVgHo3p6YHGTyyVLJ7FAXFrYfZW43PWTFeW4TfX8NtmwUDF3naa5h",
  "key34": "5mpmZUFhQEQwwkzzBf5ghXeeXEReL7ncw5vCgrSnEJ9E6JK2pW8tLF6tv1h2zXJq8o9oZu8tAS7hsSB3qW8JChpM",
  "key35": "34MRjbq8XEKzkXUQrbRWXn6F8tUCb2KAC6y8n1vgWyrJhBQK51LHUo7J2XAUUZXkSvx78XkkT1BrELvj16sA2jN1",
  "key36": "UVpdpbFWqPwBv9tqnCvjCf7X7qrUTc3inNwRtkAqJig6uVojRted1JxZLH48DDVTZ2vSomESpujm4czJHSScEdm",
  "key37": "4q4PoFYXWsVj6ukSxg37CzJJer2xY3c85qRRRaXp8ZeCEYNGBfJtUvZFqJ4NE8Ss5kYQ1tnNcACEsoeEAv1qCYBf",
  "key38": "4Vtf8xToo2gBfgZxp9vZvc4WL2zcHTfRvJnkEWJ9cDYLrts2cB66sW8yadnCFkxyQff9G6Q8DdhaKhKqbSSJNJj8",
  "key39": "5W6WSR7pyQUSm9RPNMyoe9sDoJZ4oV86DirT5xrmyHGHGdTEYGBhMNJGR3cGL1PpvK49uDvkineRjg9Xbw4aMqZx",
  "key40": "5e6NuudM3EA9CeoejwJGq3z1f7fRveD4Lq2kS3wSmGUVxJkeXNMXck4JLty7bvtcxui1RbUCkpZG1EGQvbimWjf9",
  "key41": "5g1c7Lk1EGaTAt29WMi2b8jaWnjmSnmEpAp56w5mA7xJstbd4jFc2jtzLbSfhSGNwNUJwvQ3nL99MPDvRr1jNMnv",
  "key42": "48sqMEkeRcb4Lo8r9XD8EBs8QvTMD1XQbySUFGmxe4J4dxWvfDPinduduqXVwY2aTaFTkeVV6athn117ndhb49FL"
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
