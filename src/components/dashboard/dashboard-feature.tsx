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
    "535y7QzGz4TxkgBtJqMLiobhVJXXyC1ykJMHPZb8QcrBW8egGTLasyZ4ctgE1QhjvdrwATiVgkD2izTmP11q14Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fD5WDgKjVNjb3sUrk73pcDWn9MomRSUPXcHPCCTmjRCrbMVPmE8MiNEwJ23CQ1wW9nWTJMKvQ2ggV6fzoAsZ1KK",
  "key1": "L4ewEHzgFZ31qXZMEBMoA7BN4J7PSPgS3yZ2rxhnq6WyE8YL1hnQNrBgBNUaD9mM6hymH7ReAQqxVKnHZ2DhcSm",
  "key2": "4XdnUaTmdvPQAmyBpsVHxBuxSeysuiq37EW6ryYuDieTaGtdUJKkk6V1ncq8mnxrJtfkJekpPHZoCkW1FTeXcWkL",
  "key3": "5no3XoiSf5TUFff527cTVErgG7D3kCLVc9G4D6d8qd8N82LsBVYJxJzgi9j9LjYdw2jgvuohSQ5RVKYVmUsJ6qBg",
  "key4": "4zHsVCKkYK2bFcWSmBBoE9D9chZAFKgRnbu5te7hsDWqfgPjWdPQPDjqqSWhw3b3rJ7hUedVnduyeQoByjRHi9ux",
  "key5": "3PebqfSRmWvgfm9Gd2WstdihPP2xSU7xeenmx9GaDSVAGupvHfmn48K1W6d6nMr7hRtPr4zmft34AfA7ev776y7w",
  "key6": "28wVsKKa9hJCRgxWdKmiigDs4jvaZoF7vBAyXpCan78zcddWZbm2WYoasMjF2ro1Pm3DotrmZxogfwrpZ6i56595",
  "key7": "4mmAwpsAbfooEbfBuPo8h1NT1JPZGD5X4LT4cdF9YiZ2qubpjdZR9DHNQsrqxbnzRpwdyZWmSRdgR5AxKuG8PKW3",
  "key8": "2r8NVnWPRq8qjEVMpDroc5WPjL8xQQDdif1Qy1npUWTcvC7EJfa8MhZwHbhXbVMvev3PdAPPvWjpUn2RYM7CkrhT",
  "key9": "4TEc5vfRsizeF7u3M7RNGPEprC7dhtSr5HMy5nAMnX9FPrv29rhVcFQ3aE8rDnRFn934iPzSYFSr1GCXkXB8LbQY",
  "key10": "2h6m3e2oqgCu46UrMRizNHtzo4YJ9tkn1rZ6j3DyfcJQaNib73QndFg8Lp1WXbqUza3DDcVeAhpF6MggT6odYDxm",
  "key11": "59J2SqiC2349hiEWWgH84NVUaFmRBmpq35R6S59C3eKxDi8Cg79RqWWrv5hx8BWNBxrp8QHH6q3L3BFVUYe6vZiB",
  "key12": "4k6KZaxw8BsGw6tsVd92zuQSPxutwc6HB2b75WWAxFcyX17nyqXqD8mRnNqmn2jcS6EgMiCqvB5JSFGs5begVRVS",
  "key13": "3u8GKEHL6oEJjqQKbQuK6s84XpqBd4Noh2xX9sYaffo11d8sXnAzyzAJTWnafLhjA9NsjNjoJHzt8n2hJMZAdjhB",
  "key14": "bozjSo82JYRuXguRPrx3827sUn5Bqt9x87Kfk4bZ6GqU9iq3gCWLoFqKRgBJEckdwAHZvxJ6xVEZPZW35B3jUxp",
  "key15": "W3pofp5UQbhwB7CLmZKMEWisx4HxnSLA2u74wKWo93EXrJ4WV7KeW7pV5hv5NqdJ9oq1mzanELZwCdgVFXRJvjD",
  "key16": "3HqzJ2ReBYT5AWk39zaSPzvDnhcLNBnkYqnQYBJEjg9BidDL3xxGTtGw8RXYWiXUp1yyb3CSee3hLbWfVerzWSd4",
  "key17": "4etJCeRj1V2hbJTS3dEtckGV9M9YfYv7sHJtcxGTeXTsbLv3FwKYLJHQYHrNf9amtD7LDa8hFdVSTKoDthGnW1iL",
  "key18": "2rwrnkGKvHSARvqMEwxnYqzmQXFJqmYUuLxnrRrm3h8KBNz8PgAoiJ1hsFLQtiqiByzR1SzWVy6pUGhBLw4pMRGc",
  "key19": "38oVj6DbAwpDdGNHPa696AwkbgzUHJNDtUDybwstkvXiGQMxJN1uYPxg6nKfQXg34EFaHgh6qN4DBnBpKYecmC6z",
  "key20": "54C8JsbEPuvUxhdWQWpHGU1KFy1hJ7S84Gu25TtGaFL3sLYUcA2Wbap4XovAmuFvoSApv2q7KFETBcVZwuMYEsKp",
  "key21": "3ipHkXCMV1FWFVnn1ULf42g5nyhCANbuUzGoy5BduvEd7yQKcKKZA1Q4UArhmu7rSXXXnRag6DY9J84b4tEwxa6L",
  "key22": "4SVZG7ioMUgTGPEb6MzNusGfW2X6yCcE5XYmrxcTTEBw9zFjxe94qFLr46P3SkADnkoVydbtX3coW7qv8RaaSLBu",
  "key23": "38zHQ6VLtHmXBE713qg5o99DgimvvfvBEQjcazfTUwZu9V58shEQnN5LqkNQ6Ds6yZQDTVWASvV2e9spQLmKm9hL",
  "key24": "3kTm6MmncAUA8z7X1fBEzPNXA6VRhwiK534iLzfSy8sYg5dHBBfReRwUutHg8XyQZNvRd9FVSmBmkB7Eb3gmutKE",
  "key25": "im6rBMJ8dUjVPXccAQH3puBs4UM25i9Lai5sHTYLhcU9ihHXnCcZYudwtZY9aJXJkAyxavYFVmAJgsx91KZaNgY",
  "key26": "3ggCRQbNrPh7gRPJqdoWdgpP3m5CuH9xTLZZ35yYWFthkQB15AUdsYKgbBKx77Durgm9pKKBCKMiSSRe6eeNFmAV",
  "key27": "4VLuxcfRqEnTgwFAuZid6wVz8JfghYGctT1XtjMkrxfo8bJxpdfdTTKmfDqSdEnA77Enk5A4uGkg3R29eXzd265G",
  "key28": "317tCrKZh7euAtQiTtyG7uj45zUpn41wdWzJpzeVS3di7dJmR5e15s8EL3mLieCDM1BFHDvs4niLRoDcYV1Yrf2k",
  "key29": "62A4e25DLqvxGcALZeJxRFrqVBwnLrorf3uUCNAzNCEVHx574VF5snPNcyw2XHdtrSRkkoK1bJmL7p5cfWviDYxi",
  "key30": "MnAJnvurAqCfDaNFr8qfqufZcyy1mqc82pwPaPWbc8qTgqc8rdJ2bg492iTiNNRCAKvC5NkLVRNnYvUdvVCHJJx",
  "key31": "iJrD2wHD44FRMnhfVrM4GLMSJxBkcbxBUtnGQzpcXiwz4PrQmPSsHCFzNPDPAzj4tqiyAEbXVx5xNsqDkbHiwXf",
  "key32": "5JDCqhK8cBXNb5JzjhT7pPd9bPNx3ibugWFiMfZX7fwnu6AyWFjjpbkCnPYFHQ6XhRNM3QPjDoNQxzMnurqRvBgk",
  "key33": "2TevsQg9qRb3HERTMYhCbWvPE1eYp93o7S1ucq7WU3QGSdc3JYmU1eC5PwspS3P3oatZ6gLvor7LFrRGJKHGDJgk",
  "key34": "4XDpPCcx6jm7CFSMgbikskWLSYfEkufdTTrwq44UofQqVywkoCCPorxG149o95FGzDZSuudZ449v8CijQJTw9Wsw",
  "key35": "52E8jJwAX1dK8LBWVdGqbvChprxxeephv4aCXHxUnz9gkJsdawjo1QAfUcy5qyeo6jKMmRsDjAW4HyCeimG4r5Mb",
  "key36": "3H4QJjhJ57yo5RfZStpRHiABHMWpvkioazLTCFSv6aukd2uEsjfiBENJWdXV9mrBiujSUrugoJPxxh6h1oMkad4Y",
  "key37": "5p4HFSpKTMxSfMEz1C8UBQXBSH5UQ4SExJEEL8LhkDyNYDPs1yBqLawnB5iXmyNNTqYmNirG4EsKjvok6bgrRY15",
  "key38": "2f8te9pxGppPqMf36Zj9DjXmjYwh9DFajhRHkcAPxXzKRWsE9f3Df9tRURfb7xdGvXmWSiwbwHPMQ3pJkrTZZSeB"
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
