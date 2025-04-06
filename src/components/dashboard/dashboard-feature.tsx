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
    "4StBtbDNkmGQkxFHTGY5WP43uZMsuUZ6hjswDELpbhfNBaprxtcv5LgKvKxMCPRJH1zvwY8GVaBUcBpVsGDFGsc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nz6FuUDmWkSjwhwmxCXrqCgpxNy1DhRCpDWsddUNq72WAWEE1hnW9Gj53RSWxPUFetQoNNzrvMbdvbiaRQZpPcE",
  "key1": "VsTjbMQxvCAuESLo3uixfUwSLTEWw9Li9s6j4wnxeiqY9hRHQ5WBQs6cyWwpJY4ZSJe7ZNPnJ3oCQKtdJiNVJGK",
  "key2": "39wsh6WC1XAH3QFDpx2yVk2oao14jqFq95gsW2fRztfbmRFfvwUawoeR18H45rbibaCt73a57bgzWhcGk7nb5PgG",
  "key3": "29tXZicfUW6kLEFtJFkR5p5kJo6MMTSMMAqjw9GpJP3DmZQx4YoHaqKuEsAemVY2bwURTGHjZvnQCRaK9gRHCCTZ",
  "key4": "31zQf26guQDbvaeqYwbyiRJpUTY8AYxoCPnGF9Z9b8eut6gXHD4kNot7AERd6znA6nDg7KTCNJmGuo6Dv9PGrT52",
  "key5": "5T3L3ykYB2jfSqJyJj5ERJzfS2czL4ANbLc1hQfDiPcYZwbkkG1Q1YdQG6g7mqULFTJcRiwsTE1xAAvmfjU4NizA",
  "key6": "5dZVetQdMuYv6gg63bevnGJDgEXABvPJ6Gfu2MPv5yw61abY1KAjBevJ98LVsFmmLR4RXLAU8Z41t6VerjJwtPSJ",
  "key7": "4uPgEru7sPjgWPzShH44HRD7V3ZHgMx2VSzuB78bG39kTupjaSEDNgh8fLSfKN5pjqwaQukmX6SLRGtHJqaurDiN",
  "key8": "7DJhmfkSMn6HdkN1LNvH1J8zBKkjTetkyPR3pFntfCwKFyDaBNRnSfFR47NgKxW4mzndrfb4pZKY8Ag4bmEabqV",
  "key9": "5CF9o7HTb1BAmg8nW7iRY9MZRrLYS3LsRnaoMSr5514H3qntg2tBqooKFgp4yHwGq6ESRc3Caas9yKrBqQDi8t54",
  "key10": "2gUshZbEZAze3asVgKwWTxn32RRdXGbsae6vvDL41oUQDRP8th3u25CPbGFMmh5nLjS1yFTnKqucYXfSHuhVz9ro",
  "key11": "2r57jWgKiB1ngcbYa74YHtq65ScWSf9yNbVpNbBnX9d7nqf28iCuwMiBduYZHXfLtiUoPGLvLeqSbC1prcbkDDUM",
  "key12": "W3Fv7jPAYv2dz5XHXWgBvkJLucUcZsVysFsyaHHyVJEaioZpMgosrecvd77xaKY9dB9khPGLCnks4KdrxREahyr",
  "key13": "6aFsFWm72QuUPYy1pEstEok6jZUjFKVM79BGxjMnsfA33upy7iyeaH912vr8rh1Y8vC2QpJTDPKN6SVtP9MSjzs",
  "key14": "nnujGxZo4337fyEVRjLMBBfZBd3aUJtBUVev3dJbGFrdzoHCy1wk6zP5C3QubeGYxScDhAVKKzPJwEqPBm5bHfC",
  "key15": "2kmE6SEsnRtyxuXf2bKazQGVieQ74L9pkg36BjjF9947rTnLEunbx4JCkjsRGGpdcA6gzjj8djdDoSYDWjRgcC6T",
  "key16": "4YmZGp2miRg5nfMKi7Z1EkXz6Tnt3twRh2iUy9ANhjutw8zgq5ysZ9bhtzVrUDp6LRKbkFyvzBvYbxG7bpv9AM9M",
  "key17": "4KvxFL4sqABowM6MYwoe3z8GwT25BnJEWtTfsy8gsvnfPSrHFZnMeGRw2XYMzJgBc9s2bAoWAbGHBzU18ypcXJ4o",
  "key18": "5qBKLjt53Q7xzaHezagTWDPCMiUhFBHgSDL5dF5EGvChtpxonCwWCKD84AjQsaHXQircfh5Mnfudwa8pjYmCTMyJ",
  "key19": "3LrnbGKDfmip94QrDAJZcYLEhozSkoj7HBaUjdLHpSVmApbexZCXbCEFyJr2ZCCfHyXBe3vucvwuxpiCkdWgr6qU",
  "key20": "2CBZ76Q7MUAxqAswHUs2XACnz2QkWV4jkfSZ3aDQWvgrPyGD1YXss4rAFNtm9d41RtKrAASiG18SszxMRNN79CVF",
  "key21": "54HZcTPgEfUMmc97tz3s79VG9Pf2XEUymNd6cS5uvMAUjzQUrUcybMcmLXmdtEs9pdaqju95sYME7N2dX3F9v3kx",
  "key22": "5ZG4WYZhJQbpEqkMrMteTC9Yf8iq3WRSW78epU4ASu9bDg8mnoeeP2DktqBPptmxfd3GofxBroetizouqoHeDWpF",
  "key23": "4ro1hJHT9X92hTVWiJYTZgKLmAQWkTiACn2bjiwHZectevu4KZad1WMNdeZrcrGkvG2f5wAJR8ujRxjAVkJestUi",
  "key24": "2hwVujKqanUf8sZtANyKU3czQij2kuTA1U1fzv5dgwY6nBMrXxhKRJRjzakD29Q78JiW8HjMNKm6wJDge6iu2QXm",
  "key25": "6YwKr1RCE4xvFRCKDY5PgiCR6AnPyt6ZhkfBkQDVfe5iUx1NNfNooR97bV6ju2FTYTcpDKq25VZufK1mN7rq4K9",
  "key26": "5yKdrBmTYmk9FhQYQD8sYdCWuToVVBrhmMG9tNXANLBJp6riux4CvJyJz6cJzQdRdnMngARBXqUKfXymAme5iQBu",
  "key27": "26TJoRZrqoXzFr3SyFLa1yKWV6Q8X39V5yyFvSgyECSEr58436Bv8KM7fB4G2Nje7H1BzvNg9BpHMrMYhRMRxS8u",
  "key28": "XBTTogbHY8DcPgUafcQ4GR6QaGcuoXprE3gebK4aF8HS6d92EUAoNpwbMnsAoTVdLjikHvTMiigwXieGoF9Mfwu",
  "key29": "4rw9NCeVKg2c8Xcb512xHHvcfc7oD9xuER6gJr5iysaY7tJujettMRGqW9eaPGvhDv3ubZMAxLZLHAQsMxkLs8rU",
  "key30": "3VfxDvVijjKRzbvfcugjmdvAvEJYwH7ocLRBbsFTnKWVGJJTTLzM4Dkp2h3eoKDoq6CUzqkYWycwszYEGTTH39pb",
  "key31": "52DhJYFBLwXzqTPpyGdqCmKfoJVx6r6mud2ihp7wQWY53By7YZgSwbpKLLyvpzJ8QHn6crKGLb8buyyR7oMwXA6Q",
  "key32": "co9qjzpunEALwTVkz7VRtLgVJCjhocxjP9EcJ6aPXnEpX6AiZ9HEdMQsERJN9B1zLiUzAJQPx3knyynEzTbpJt3",
  "key33": "5wckdVzNVJtmLRW42MoWRu9xTMUnrB4cvgWjKcSUCbupa5UNnBH16pz7cVs1sPpRjTxLmKAsi4whG5M1hDnz58QM",
  "key34": "4Pe3Pcdj6k8Sbr2pf8tmbWQqH4WgKZixQPHZxgoBSSC7sPymtSN7MK8VJnFh9MxuGATJyzYfDocXKghi7ak9bbmh",
  "key35": "Hb2UeSzE9afJ2eYp3V3iN3gbmr37Tk9i2usVuUFjXKLVe4K4RzNx5i7SwoAqfwogwcrT6gZUK3jvsudUES4BiEg",
  "key36": "2x41UwuoQ8rKehDuqynZZdpWeziXcSkRHyYZctZDzfKaD73CbaSXJjZhH6qPYR4GfDh6grgnr7S88774EXFKeFg3",
  "key37": "5Xb1A8tPLGJEtQz45cv96Wpgxbz4RyXkfRBsM3JSfvRXaf5hmkj2Du934viQDeJKs4VE18YwazDL6w7DR5wwzhon",
  "key38": "2ovHxdkAoSThnnTMh4LwzHmA7efySA3QDQZekTLUpCCrrpR8Vsp4TUHDHY46BTaaFQcuXLV9VHBJztTGDMSfaqnF",
  "key39": "3Z6XsV7PMuyj9GqQyhZJMfQrjfZJMKpyA8KsUmhQrw88jeMnvsZNZ7WNJssBLVvEthcbmSyL1Mbq6YzbEkXvUKzv",
  "key40": "3yHRernTYyyRxhNRHUcAzmY3fZWfzzsvJ2XPZXwFeJwSU7MDDCJft6krqYzJvUgUqjqRidr88XiUJAaavVkHGXhF"
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
