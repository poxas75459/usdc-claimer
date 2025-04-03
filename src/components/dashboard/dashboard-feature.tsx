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
    "4dgpLpEXeN1VrCcsJ1tQN6QtrkUADWEkkRdUdmtwF1TW5Gn4rqtVgTUyJfS4rFszi1uoE4f7DmNqDjPgbsFfg2nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xhSPfPSXZXU7MrpZQS3dKNzRGcxQtGVgvTdNNbW4Cw1GkkUGLAgefqn2EfkJfgMHzsjCrAa43RQipnoLFVDw3Rs",
  "key1": "v1ULKftyuZBHJYnGVDuykwxiU9Vf2rXNvjVmUhUfL3CvAsUsK7dk6cyge9bA2ifng7XKBYpxJsoaeA3KU3CWoR6",
  "key2": "D9ikEd5vUxFpZgv14bkX5HyZDZbxK1MYRmEdvSkKVZujr7THU3fvbbBJKfuwAnHNLap62BwwZMvVrPfqqGdfL6n",
  "key3": "3UdiCococFLsQBgqSF6R66Ji4y5PQVNU37Z2G6xMTVNxF5U3KANhTPsqMvokNSuBay9Q1nFYZg9b1jPSQQakwDjo",
  "key4": "2TihbmMYaZbCWuQuu2kCjWbKvjajdjyWbu4nVdxMjiHfsrNUdkEKoRHcZxf6U1NGWYxXgjTdTpzkbQ854NWaRF3Q",
  "key5": "3c2k5VogwD56Eo1bf3cEqWJfGq2rzHCJU67DvQwHLQ7CGeUr32jRAVkdKhF2HpD9M2KE6s4gTq343hNy9YDvUjoL",
  "key6": "J8kAquQcd8wBgZVs59fxoFKUvhzsy44QKqgDfDBezqmWopZ7sheWRrRAjeHoB1kYHZjyE9VtCFMHGtPsy9PsLM5",
  "key7": "VbjHg3HUaKWgRnNEWtCFDMy1rpXoE6NdCjLDXeDvtz8iYkvNz9FUUUMgWkaPrAp95vPXYjCNXpT3grzbLsp8Crg",
  "key8": "yUM9XDizXAoBkdtLgM8ys8Ht8u1K74ukzEJ6mpsQd16NjYMXWk7c3bfFrgqfGgkAkiTbMavAtoCHAtzfCaBWktF",
  "key9": "5wSeEpm1EfSeqYhbM8TpNSPr8CYP4jCo1KKWL9CEX4kvhXQVFuK4tUob8iHisy8XA4tgWZZzrtGg9N9RSCCNkWdV",
  "key10": "5J9uHnRNow6FvM35GQsLPUMDenAGVA9xBwSxo39jiMf9dnp43BrUtKT5DCQTHW5mP1MxAf2EyP2AAn2a52b7rdWY",
  "key11": "3R9xNztgqG7vTsifRv19V3hEC3rGdfpdVS6ChqEL6bXc4j11TzfWPuz4JggMCEPgukYJ6R3eegPG1bNtVWD5fj4L",
  "key12": "3jAFytQvcKqwgKE1z93WWbsiHxahCLxgicGLV2fs6mTCgd1pBGKbr4xJFRcmsbLhHUXQhHtSgpds8k9FNxirTkz7",
  "key13": "yMR4pvhBroPeJE9ckw8tR2r9JJYMMQHVdPRBoks15APYDYCoxRkFoWVzvFx3RY4DoH9fMqEe4PEB5kmtBgGMnuw",
  "key14": "5Y73ZfcUdMpHKyLY1DsdtSXXgeLQrnf48XcGH5Ro7sAvcPXS3Tb5Qtc92TZvoSLALRqLLzLPdywJqngkDj3Yh6Ad",
  "key15": "5KaU3MyAsBjKaarkdxuu8aYaintHTXSED1WD7r3L9gpBEhXvU2Agg9ETKcbMu8EWcjdBcDc39ueZxsk7QEaHhGcU",
  "key16": "63bxNxmrXi65WNxKxDKzzXuFdgYk2LNG4zbyk1nU8a6DUATZYq3JMEyMPj69kQfRneoGybNtFyxtLrky4zcxF2Cq",
  "key17": "5GPXgywTREK4fp4UZPyxaR5RZBfXfa3fJAXwGERhvjuDPyGSLWHTBFNt3dGEhuE8Qdqyf1oLvkVBq1dEpKwQKLHd",
  "key18": "51NfQ4xopeJN7pxNHST8ExZWvGPc5METQ1pHAqwgetnuYez8JgkKPxCSj7v8efLbmpz484jWRHAnjqnG176XQYzs",
  "key19": "5H2xgQvhUkURoksg6KDHzeDEQVWGBi8HKUn5wdzmvbsA8P3vexCUEKLRGeNCAqzszBrJbmwviLH3fEVLrdnu1VUt",
  "key20": "5CoDgSYQyUtkTNm6vJW3vFd38KYGsPWjv95D2T4qxhYcUQhqrQFN75RtSP6zGmkMemQoY6dzyuQQw5ZsNuL7UbhU",
  "key21": "5gYKUHXn9HpTdzvDGsFrURmQEUjNQqU1mfEJsiJ6QF8r3fGNV6fDYqYEpGtzNKcKjbNdGMBeNFWL3nBDvNfSASrk",
  "key22": "3tbpNGDgrEKpz9UPFtvk5Vpg8Fu6x8c1YNryUdFrJcqsgC1LDkZYx2fMbb5fUkS3g88oaooXrve5xYh4MShZnib6",
  "key23": "5mHpNzq7RHyfpNckQtxSvkvXV1TJ2FGNDHeYxmyzC9TSZgaUfWkqXZxEoRphcNiZ7wzBK4Aodj8SH3tSGL5Mwjjr",
  "key24": "5ohKQSVVToWfnwxQeSzoRCRubr5wB94iwAFnG3Tv4zQ6gese4icvKUZ4pFY1ez2ia8JeHxugogP4dbG9Yg85Qtjb",
  "key25": "38ahvVA24CxF1SKV4bG11KSgTAwSpMjTEtZLD4KUiqrdEJgkHdvxzz8xmUgqirk9cEEMeSppshwax9JWMAczGS86",
  "key26": "uDD5b5DKzuro3hQDLX8prC7WBKns7ENDAPrUoaC1WiNbBSz9e6kUiznywC8HYdaZWy1oweJhJsDN2zmpMef41ky",
  "key27": "4PHuiwrFB3TQtj1nJ88zATBAVH1h8pKsWodzHt2R9BssjjoiFRLqQYfDKWoty1E8cwjRmaVvJuyb54hLj8uvoXms",
  "key28": "4DY1bHPgMxYMFqeSku7pgTHxdAcnUQzvAw9XKgCTnbsSufkDCUUthpCAQB8uq9SvUoBjq59K9awWYsUdkwsSK7Qe",
  "key29": "5JKrBP59KkZ6xFhvujVNWjRv9mSS83j5EgHJRWqVcf5HCLJM7jJDVsZ29cbA8i7fXkivp8Uz9m6kRiQJhzFiaMks",
  "key30": "3pV7sNGhq8ppeu7UfkpV4i494UjvFsrVrbtBLWnxbJGxkmQgQ52hvGhC1BM7hTdRhaSxqsQWbz6uXnjhJgrW9vpp",
  "key31": "4bJDfkhoaGwxv3ZeNHQFkgPBG585yhDMgddr5gKqLX9YUvJ8E14pDDaSjkaSHkioXWLyHASSqqo3wjgBfNkRQAgv",
  "key32": "MacXVbo33ejqvZrGVibMTyfShUAXKmXWJT3VVnPE5sVobxCZqx9ags9FvyLamBHQtkt5foD3WA4ZPzyEGvJCQDL",
  "key33": "395qMvyVp5QRbfEjkXKuRryg3XGbPHzRdJL9isHH9neDMQkpQg3C1AbcYBxRc5JckPgVWiinFG8m1sbUyvvFtZHU",
  "key34": "3JtDw2yFbzBJKc6ofgkwprZhYW7f93Y3MhsHo6XhNGAwHw6B4JAFhL9UZMcZhn6KFpAS86cybJn89biWD1yQsjcn",
  "key35": "4K99eFG6QU4mDMdsQSenjR1WTpWHQs6GGrLiZf6iKymh7562XcwenKRB3WPTuRmgo43aJEq4Rw2peywarXBJE5nQ",
  "key36": "3WRLmAPpuS2kLnz2C7qEM8NMDNRqmNmg2v7WBRmaDrHwGEQtvDvziA8ZWwYYzbz6tp9rjsqRQ5VpSAtB5zJb9uNS",
  "key37": "3EEoci5zKh6XH9XPYurXH1uM8P8xtbVrTjuNkY2ZqBZvSAwKcVkEJy4quAZGFURdLkrXQeMAeuiJzKGaEXGNErCT",
  "key38": "5aezZ8fqAQc1BrefNepriMWiXkuvCWn2iEhD9Zu8wH7djMVEt8H1KncvGEpRMXNccdahCGtYDuZ3ovbkeWg4hQyr",
  "key39": "43kDGyxRey7DXqawL69LYL3CXonnDhVmbuxd3RMB8oLptVihfDP7T5zBrinTrbbs3RUQLU129vqtZSEFGrk4h7TS",
  "key40": "3jRNWxdLYGoQseHQyQcd2wExEbyRr7uhUyz8w8YX5hgs7ffuBdBtZw8xb5cWW5QPSEFKT9yTH22LKrzFyZXVoRjZ",
  "key41": "4G66s3MLz9rYBCWfdWESz6cGp8zZBdXanXCtZ9pDWUYQT8EmCWeaGu9W9hKLdTnk9KiHXk6xbzevRq6HMbHJjqYY",
  "key42": "4MBEwczJCofJVr6AG6TYbjn9nDfMGGpTcbu7ZRPke1JFjGoybxsdvRoguHPTM3WaJyqWfxM6tvXtuQgDmvGKoAFG",
  "key43": "tAdCTUNHTii9PC1veoZzff24mUcmDwFyd3iYnB9yUsrUmiGwJjFfFWTDG1MYkYfxVBTucrxS1VXuYzvbXKFySXv",
  "key44": "5Wv84mMoZ8S3KVJdcWgqtg8vGU79VB66rVJPMiXmgVdpDge2rfxbtdVDnGPEdn468DAXy9KNEjaonWxCQosRje1L",
  "key45": "2bJUjtQDL3fSQXh5rvxMsqWCixuRSKmKxPAM4o18w6K16qW872T88aSrxhEfa3QunVuHMCR7W7W8ggeQVBpGMVtF",
  "key46": "4PWK84gaXS9uYbQb2km8VxtoExvxzLH9SxcMD6X9xALCSj8hfZFzVkgAvynPLosSmMkuUQDTAcQ94uMq7bCo6RHj"
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
