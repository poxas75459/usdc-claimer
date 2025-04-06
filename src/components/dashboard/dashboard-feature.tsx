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
    "u22p7sFn6aEaWik8dMJyCdJJVHssac7mpRdtHZ3qaU8oymzuJtoKDuW3bYJYNhJuSJCNrQZ9yFus6UaDbtE7aCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycAPsdA1FsPFZJpzV1r8rcy4eo57CGx7GewqP3T9j8ygNmDEp9Zcz4dzSQhDF6RoTnuhdyTVve7eUYpNJLsTAL",
  "key1": "2wCVNyJ24CD24VBhTAMw5eYVmwDahHMWg3du5QY9zo35hCdegR71yq61jCFidMk2eVfMA3at3PLoktxdLP4CkoLz",
  "key2": "2xiZ8psqUrnLzGVQcgmcdeKskUAdAYGydK7NxcaYWi1DUTQB2TPjcetRtDs9W69EfhPLN5Y9eJGCpoX4Tnyn1GPT",
  "key3": "4Uaz1JXqQpaPn8Ro42EHK3K1chU4GzVjw8RDdaJi5S5pJMQzwvNYDWfJ6YAHxuhitGJibDc67nHwHbp7wXMvjg8r",
  "key4": "4CCRtWLGLwwY2iFmCqVdoXDi6bPbBER6Kh8GNrQ2dk2TYFbLovbzv1KUS73CmvoEh2k61rT87UPCqr7Ash1UvXUQ",
  "key5": "4LQzaedcWestiQzazB4xSDcGibbVP7111CabSToSsffUkFW77TYMqgbomHmMqXJ6kGe6mhhPjRbjr55BVbHd9Vnw",
  "key6": "48vU8RzGBn4TSMNa3R1zbhUgjVdpVrrLhMGLQQCmHS7anVYKavPKp7nmsytSBTPU2QtZbCqH4QFTn2FQP1vB1gfG",
  "key7": "494sUDAED4AkiUuJUJUKZRAjTJM4gDNbHcRZJbt9Xx4ehQTPvzmsjVUvV5u5eeVm2RZ7ZPzmGrxUdHjp7RtohkkK",
  "key8": "4CR3tQvD2k3LPC1FY8sSjbC2PVjaBfv4yibbEzaTYyXRkcxSB9dVEFit45dEWm35P159kvQq4MBBbL4QeiR21LUT",
  "key9": "4GygyeWdpF6uY1wsM84cdihs5Eedd1WrMZopH71MUi7ym8f6knsfWSGTHtiPNbnudLukB9t8RXS8QAjJJ5w3XiFF",
  "key10": "5EpoxuLMB2T89k6fTQqmh3yfJgXW6kfZYry8ZqAcC4iMGHemKW3XHd1RchggsqMWLvNSuCo2fsgx3Y3z1a9QzKKz",
  "key11": "27crVddvwDq3SjKw5fosaXyFhhsXvfV7nvbBzoSJarjqKUAKDYnptHfHBgho2RmpjZoTJDweFHxw5Qy24kfyLni5",
  "key12": "3o4SgciY4iLDpwYQHgE6JuMdbuh3ecnzV94uu5qVvyJ61iPFZHHux1w5aNc6L96GB42jYZPMgZuZEHMECHeKLtPE",
  "key13": "2r9XwSYW9wdMTXGRVKsENYvrdTh3xB4zNw3mHKrET8wxnzSEvUkMy4HAkBJ7gFJd84Mm8jMx7W81nAFxn8LAHxyB",
  "key14": "3gnWLXvvYWzVPPJWbQWw8ZeitddNYCJdxUrJZsXdijSi3erwEX9MvG7ZVhyBQuDmczch9QVrUaXeFRpq58th4QeX",
  "key15": "2HuU3BUneWJ8fQvucmGkZCfiATFL8B3GknAKgX7rDqGeRR5DQXTdzyPkjS7Nj9ynahaeuzqxSDyEic5usKQNAs5Z",
  "key16": "4vn5gDW26t6sDgSHcbKxktnmX4t2faT5Yqs5xx8bWjt23Nqt15FZ4NTb8BT2P8r6Eq8a4xro1xNLUR9jgCVKmFYn",
  "key17": "2DbS79dKG9BaVb5xzZg6kS1VMKMhnygNaNY17WTWQnp1RNQDCMPUAsR9nv3hXy7NWHTGYTufmWjqPeqtYjvtwEsL",
  "key18": "5XWA7hCM9kUyDykVXLVkqNGX74EMgePQXXs1woiaZZeweuqBrLMpVfdF1aEvhbzy48umrhLcGKqnjSBYqRWVLDQA",
  "key19": "3opksFuu3DsvSnGvBMAyLPGaDudgsJuFWncfz2bfp68W93Y7AnqhWKkZpvqUXcH2xYx7tCBk3N9i8MM994UmhB5v",
  "key20": "5Eod34qrBNze7MB2mht2y72cEjJg7JH1viiuyWe4MoknuGkH5Np6KprutfgzdZAunEVA1SkhqokV6MdzeHcE6RrZ",
  "key21": "4KnPggnfX9NFR4Uwh5AKwAetANu15iZD2wmDU36VsF8k5hWzLD9VsLDBi3KLR6LL13t1BE1iWxWC6vvRyFbxzWE1",
  "key22": "2CEBLcjeCzu67Atk5sfpFP8aWFwqLhDB85KVzFW4fVtxt1hB3Kq9uAtmZ4kJavapBq3yrtMkaKQ9jWANEcQLiBCo",
  "key23": "8et7uYpXm5yDEW8sgmxFmLqKaXkqNKXKKbZ48e4M8vkpCDwBeNZtuoXhsWpWBpPiJRrhXgTASzc6UkXcbdqAut9",
  "key24": "2fbqLGTvDVzRXL6KNpcneHXkP7DnSawdbTTikiFu4wDqPPKhnPoePtNczyjnnEpukPpWH5BNbe2mVwzvFXw7bTiz",
  "key25": "2zVgNQCKUoa6Tuin94MkzW1hirBFE1jTUBoGjhwc6xazaC33BBbo34ffMivzZLxkYdtqv5s1TJ2yuMcui7rNJkXH",
  "key26": "54AcCHvj5apZ63PTxgRXqLQUp5YGU6kMcPUZf6XKgKkGrqbfrW5WBrvmYUvDkz7LcLXTWDF4y7Bfdg6VH4XG29FJ",
  "key27": "ttqpLKr3LzbTaqvvbe72A6vPswtKoK4sN6VqKVces7W68Cbs9KAzUZLuJSpigWn9A2zERC1JPGZXWrLcaHxUpY9",
  "key28": "4GkLFemdQeC7Ug7kj1mXuMKQkPbEmoVxRYCGYnYHZznoADBipXyKpcBh1mbHLXVoa8dE6Vf126ZFJ2yqYKsxJGxt",
  "key29": "5TuURUuHGtCBXYgGgjfAFRVw3cDyv3wSMfkZgRToRdXfQ19gHYmeTRLhRdqzZVdJbU5C3yexj5VDZa8MxYey6CDc",
  "key30": "1yptCDnWU5QCpn18CdocXvKjjstpS6Q26kg8Rzrxbpm1ZEjGGCCgP78XujML1WQQZ9DAzucsLVMyBVMZ4BTMUsx",
  "key31": "3doPm8MptvGHnZYHJRQq7zfnpPRg2qDGSxRVpJEAoBJbFctyjsp4T467CAbuFB4hRxp2oAPoy3hmkqrQJpzmym7k",
  "key32": "giucKQqrvJHpV1RTZKbjg78NekoYquVCqKfqPwb5eDP5VBkfuFyMha6cAEscvtC7S17PvQuwMoB7gQsqccyRvyv",
  "key33": "57dWnT4phKJpRwMubZpo6ZHMpYpdbWcFgFdKib7h28T6oovFmUuqhWG9ArUHFe4zwJmow17sbJLRu7F1hEm9qiLj"
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
