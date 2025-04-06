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
    "4AK8jRhruV5rW7iAacpgT2zM7LBW2Ux26QYYpnQahETuD1JMzDm6DUHKwfxWjU4st3Mbh39C25PmLGhUExRVVXgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERnVwBVDTG7kkqVtbJFSV9ssLTfQ6P7qqLh2FRMpDTeDz8GoxjppxDk94DdJocmNhefj2wqNH5bzs5xS8WuEmvp",
  "key1": "4pHGBjguEb4o298Z3D27eYq3cFVqLggCmtDR83zSnQt6t8Twzi7BoXBBqrRAZYj4mfwiFu789ujQY4r72f3aurJN",
  "key2": "36RsGvkFzQUYeiRF8NaW5ZmQRY4EvsFvXM4A63GPGpmma1uPxQtCJmqi3qGevZmgPZPNRX4zKGvZYsFffnYPCf1f",
  "key3": "5px47ZX9ubVbWx7h9cCjf9nMWq3g7JMnev9CxtkXEJU3mxK5ZuXHYgFoXKPyw44PKgAXopu9BUvjwePRm1KnzC1w",
  "key4": "2jq9J9CTc4YmTQz62p38Zyw4TRb4czfg8kpSCe2VXXuw3AG3uR9YmJqNNDPjyBgcmXAY9xXHVxDjFHENddbaKdfZ",
  "key5": "49ATS3ZmDMnA2yYLTFvbPfSdZeSSCMPU8SrF57AtU69fVBjsi43z9h13mHJmGxWDPFEJRGUMqq4oxgEHCcHMM8as",
  "key6": "3sGCGBeC4bhC53stSY8CQGVg1kHpMWZhGujp1pWuBqBuG5V83KsESPygjJLJpvw8UUCYwxRdv3p8b9XcbRCQZ2uk",
  "key7": "3dDXTCpJroKJxmA3CsKruN3TS3jqqoVvQgFppmoRYsT4e6LtjzWZfVDYesgkH2Msr2b9bPQBD52pSyJQmR3hGE82",
  "key8": "2BU9eCtP9YgRdAdAFB6D2neWFCuVFdXPKnpDheDFTesxhbK7VGchaQUpfkQ5LNo4HwEyLLhuTX96YkvxyoPsKaSX",
  "key9": "LrdNoevZ1MgQReQ8rQRhmfBrNKfVK9nSZjQCzR5bQh2CU5Gov3sWQsUYvjYwwUD1quc5exV1X94bDBK9K1LdbrG",
  "key10": "oCZCRbdrsHci5kXGmTq5hehDU4JP81vzmqoaCLJCu2LweXAq3AT89jaDZKkJfV4A6o3A2k68cWkptZjdAGnEo9W",
  "key11": "2mBezLrMABmdx2bx5Wqm9YKBjtUc65J8UntTYWRrLyuTsYoEBD5u1eJBdFpMZWLmrVmvVC6CYo1MkN8h9hjF9CL8",
  "key12": "VMbbPdhgqpcXEPhzWsS84pJvjGeaUbaqjDrZbeVsSQVPoHzuU3aarXQshFv74a96uad3GAf9AyfZbSU14JxAZci",
  "key13": "4UVcy2BRJKduxwsxatvouW3TP7vanz8jGzKsvG7SnYEvVsyX2JnUqV4NgrEJVCe5TyRYcLi5rqsNcpF62N4t94DU",
  "key14": "2YxTqRzpX9pnn4YNeuFAgbHuJg5zUtGoDGibymCv1AXR2fyQd6rRaHGYyzW8dyE5Yv1jmw6wcf1CZ1J3F44R5SLg",
  "key15": "3osD9jUYCHXKEkvABK7SVDAkzHiarWT1mntYe98rYooFq644fxN7Qm1jphim9riXcerpaxdX2atiVYT4py88QhpE",
  "key16": "2TW5vbMaguGo8L5fpMohMQtDMfL2EE7mixpUpguYJ8i8y4CFCAdYhvRz5CRmmvrR8z7Be8TzQBvqvjnGA6jEkfLf",
  "key17": "5ybCNYBYVKMwdh3c1Huo7uvpH1UyZPxtzcnmfvJkLuZeS9aLncgfAkzmbEcfUh9A3enSgQWJQwJEUdCoTy1igds6",
  "key18": "3BeYDYa5mSeYNjAiCsk8BATp8C7K7csGxjEAf7eaYsxU7c5f2J8KmiHAjXGcYBceqRheWNRa7riv5BZADkT5EiG3",
  "key19": "vB386vBzVVEyb2sPmyVZtJ5s5wV6nxqwu4PyY9HDstHWvNScvUBeRNe14tJ43XBwQDcSsgK18s8s8XxzqYPT4UB",
  "key20": "nAd5b6Q5wYjgPoYG5FG6WYRF19iU7uCs6AcekLBssF9BRB4DxwqrnSpioermaQJqFVsQwRAnL26XhjrjormLwDJ",
  "key21": "5XPpdGFYNpaApQ9CpBAagH2sNtzLY6KAUN9XzQbW5w7kVeQt9iNC4tz5FT1MZrHNEsg6cq9N7dWeqe7sBe6dvhdC",
  "key22": "3iBvMnh1M2uNiLtjxJGp68BNw3WRtZNfPDt2KK99zfKYSkd5v6qteLe4hRaCSkTLGgpU8chyzTZe7SHa2kPJs2i6",
  "key23": "5usYqVPU9di7pDeAaL5CkfUjngFM19RxNTBXVxAEPzK1V9xzqVB1CmzPJbojubesF9JBJE4nkZyrv8MfGCfajNgA",
  "key24": "zNJteW4Tz3X2Z31r4efT8pb6RRGAZaibH8KxijRtS9FzYv6UY98SomKfSiUSyginkSXM6Ck7yrwDHeG33kLt9Ar",
  "key25": "3D2auJ4MALDRuNpWqEJyCphYpGeijB5CnFn2N8VHiHQSrBDVySFJViwD7G8z3DkHZndx6JUYkhyQEhYCjHxQ26JX",
  "key26": "5QSGGTJZE8s6x4JeBdftMeGW7gZqNiaTNu8H8vx5reNyXz8sMHpreH761wWL9sFspLxm6ZCrwCcSxRCXDvKDmW11",
  "key27": "4krs3w5fSFu9uWyYiu2vXSRaDomvFDUD94LqYzB5beXUqLsrTM3YAtnHKmm6X8mbeiH5dJ9T7DQ5Hvn2Y6Sr32vH",
  "key28": "54ThogXjamseChd7PQTDS7t59bQifA4LJP1SABp466G3jPuyrGv6q4fKvypgTqcru3ZSv85NCaaYb9razfQm7CYy",
  "key29": "3wHRXq6upUFbxqaad5YAVxo991imoSVHJyhsHphnG8vgtQzsxtKgUouxFjnsKwzfUnXVCRopaPaxutvRhtDVxbzU",
  "key30": "NfM9eQXSDf6mRKJLK8STsT36CLEv8S8ddWkp4dRQGUn8EUDKqfCXUwZ6mnE9ayrN8uKnuvDbWme6Rt6h1NrR4D2",
  "key31": "28xMnnefviCnm9w39mTXzHwgqCcjPWGPUzhmiydLmDvD5NMYGbartQTc9NRJZg6q9uj3EPyfpCo5CXMaokEF1gKu",
  "key32": "5G2PoQGDr8MQTZbKiSr5AhMTSZE8b4Hye1JrQL9cqjAaKgKUuiHCdBfBseYpoTBVwWbe11gY97oqdMF5wgpwF9i3",
  "key33": "4viYr3cGGNv6q2KrdNuYdX6nUGhfsAG3H6PerUyRjUjTqiE1bHNivWEPib8DSYWokgLN8j9cCEY3bRRSHW1jUv3C",
  "key34": "4QytTevdRmGbm2kgV9nbVXGvTfUickFeDagbN63NjqDKjtgEAPa7A8VXyrYws28KP4mpXYhz2zMfa9qBc9rwyjtP",
  "key35": "3ULGzveZMnA3bCUscxjTiuAoCJD2andbM4crxhq2HgZWMw1RQ81Vw9T7FxQUXXRT2RFfWuYUUFeUAZxzY48ANsU7",
  "key36": "5vwToHX5rNtdNj82Bvf2BLKqZB4i3a4j6RSqkhQb9nxBPtqzNtaUfxJD8bSWe7N8tycQZQAFQ9KsjTZJ9sD5Ap8G",
  "key37": "cdzrPUtkNVRQdtfKZRvDUNM394wFZRngpyaBLa9XE7KLrLB3iEEYZdwnQW6sWSiRDE6Dh7m2LSmJ3EqxNkfN4La",
  "key38": "iqiXdbtzLEzbYQdv2FXCm6rYv6mu6vrpwxdHHrQRCfbuxRsuQ7tb3BsCE6be4PFGZtTWz6NRUj26TsSgKuvqctj",
  "key39": "61cVVaeYJc8WH8vqYnrfBXFDA3Mto7wPLvNcFaxoLpn676DyTgJajLAqBcP98aJBnJPAfWdGWANmZ9HRypv3BzSk"
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
