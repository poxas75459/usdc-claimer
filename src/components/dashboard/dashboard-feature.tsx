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
    "5iUUwxbBJQDWqwMBU2f41FcvmdUpY16zGUzUpA4ZvYuE4myNsYN1BKQeX8AenHhjbsLCrw6yeEB91EaYVZevTNyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gca2P3eLCgaA6sSFLPVNJkLpKWndKrq9KjCx7xUMazQxxRE2N4bMfR73zMCNinA3UPxvj3U9DkGqmRpnscFYstz",
  "key1": "5DLNWuWqtviL9oDmPZJPvgnUDvNCFDFKXmZHmYNryiNss3Aa5fL7zbWkjkN56VnFMiCP8A485UgPKXL6E7fgaRLc",
  "key2": "2HJiSDHa6nPga8L8PwstwDG8rYLDkEpbpgx1xnkvrc8msjEV33gae2zWybo3NtsxBQTTfMecRMd31ehMyM8ctoUc",
  "key3": "5YLfKHRxFytW2zeJgY4NJNPtUWKoAambcSWohzkZ8mqvzsUDmcaEC7yPsJrWnHjr4xfnEcL2B1TFueRpKynJtCoj",
  "key4": "4QzmsidU7GNENkffTnyHCgSMxUWywEBppddEkTrYTYSgWAQLJCmqBJN2z2cnBAi9ECTxWhkLYLyozYdXpoY2X6bU",
  "key5": "5jEMYx1oCFiL3uB8Za2SEondAstBqSdtUo9tyLzLKCq7faFY6yMXhs2QPpqoznC7NzMLWCeX9qY4NSsXcT5yaDf7",
  "key6": "28oMnmNQYy1XyvzwM8zMTNK3sBo3hvBJyj8dQ4oY8zkFpGF4Z3ZX3PKwZaDJD8fk2cU9NvTCCmPeia6H1H6hARZM",
  "key7": "3x9rE7k6EkQ3dfs8kShGbffgy1XuKo6agAtELuz3XDtMTUWkwZTWZJZDHZxSXZYXchb21PDXY1BXbwR5yQnNeJMJ",
  "key8": "Sxz8WgsmqqPZh6ub1pmw1tigDSMaRs5e6V6qb1JqQ4TLkHJw7cHQUzJC9xPr1uPMVk3yUV2KBJstT59oqt317sC",
  "key9": "hdWBLYEX7MzVzDEZWxhZRDLRXS2bA9iz6YNFegah9WRixfnaKQ1dapb1WZcFB9hZqDA6QTmGVT1vNGGuy3UdoGu",
  "key10": "5gQvyaB9K5dEp5guq8nSFj1LJfvNDKEj5Nru1DnUAvoYP53sKYP7bMMcqWm46YrACnuWS6e3MDQaEmTte1JqPdve",
  "key11": "5VmAfGNSZiSa9NLhyKWArPVLnjnNYe5vRKuxSk4tCLmPa2PY2YvqB5p3ESbhXXa5HZcGa98S3kD818VfkiYJCYGb",
  "key12": "3c44svj5PZnimPTvxbFSUkxP7tooZAzVnjNiQZEh1WTwqcUWMsVZuA5d3BUtnj45LD5Upc8i6vx1tVPPr65WpxWf",
  "key13": "YwyskDZut3yW1aG5PgwGvTnBMm8qmH5j9irEMgSqEqi1eSfkr39R3o1RKiwUHkehU2nXbn7Fe6g5JM8F6LcsNme",
  "key14": "5EvQrikP3iPghPDjZ3PX6exMf7c1mxHv2eXUjpHDGRnmDS26bsfMmRqAEAEnhjtf6juBsoBV81bNuQiVC51GkNN9",
  "key15": "4Ufx56qjX6xHymNBm8YVuxYRDuR2bPtpEQtJnB9Q3GhB8zpNnorvz96gLFuDBvfgAKEhH8Ke2dd9hoyXz3XbD7vM",
  "key16": "K9e7Gz1zUgZzgXUgBYbqBc9ZhHBs4VZQPTuJBryCSoHwet4QSvPoHUNDvVwMhr5vcw4g7WABpvzMqpkf2xFjcyw",
  "key17": "3oJhYFAWXSvPwtXiPjr933ghJPUNsENXMrTQPMuARe5gemeGDh2T19thmwcPTpuqtpr1wj16BDRdzmvEzbdFoUMQ",
  "key18": "4gn7X1wX92bCWCCnP4qK9edbfpq6K95Riquc7hnGDs2cLUk4T7XBTm9vNHKUDikShUSWjaW6sGV5sA3Tae8pgRda",
  "key19": "45jL26WeE3A2g28YetmkE8SwjS8vt8NTMaG5H8z646e9aAQRBGawv8vkkazaW5G3CLasgEkZvfXancvC2SLJsDye",
  "key20": "5uKJyqSJQmWRkESu1HqqGxuTsjBZCaKvy9nF9uftMSyMi34JBAeHcGAHfYPHBFrEPZiMrv8k944SMDHmZXQ6mRnD",
  "key21": "5ZUHAsNE4EGoWsUHc1Pmbq5kqEvwsQnvxXSN5nXq7EX7QuwP4Q7CkTiryaZLWyp5ArXLCSnbJFMuN4TXs7Q7jaKW",
  "key22": "2pJvJiB3paamdKHR6bL9M73BUrQfp4PtSsvempsV293Y1R7FzMMDfv9wdjWTrafhsvgNx6ujjAs5c13mGosKX65t",
  "key23": "65m1jm1AVNFdyqgvLPMEkXXFxWW51Lhk8JDv9yG4jEfKscVEqfY9TvYxHKVJUzdAc6kNT5SaUF2kRcBPobUoqEKo",
  "key24": "2xQPCeUmLiQRwxKeX3LdBQ5fhYj9GeUFybmn9Qx1yNGrYG8RJy1vKT4GzgFTZBVNQTrQFuCZWLVvvBGF8Kkmcgar",
  "key25": "52Mw6HxqU9EHoQfmEhE69JYQsQ4FD3rcPMR7m1Qmob51v59pUJ6zeYHsV5t2VcB6CX6aqj71pUrHskEnHUNsn5NL",
  "key26": "39odXQEi9HdAaYDVty3uCGyrARzbv8gX9gxStHDgwoG4FryRkm4YrJAgR8xWyuay8qg6SPKaLS6rUREgYDMf5Qis",
  "key27": "TA7VDxXJt788q9PvTAPDLKb3C7NWoN5pyMmnbRCaw5BraPiRjiFbhQfNHfYahZoBQPosrSoQ3TGg7Qbt3FxV1xi",
  "key28": "56aUNTkdRPFtxJpNjbwCc1scZtWpfrx2XjCCGuFkfvFCZE7W7BM6MTQDo9cduBvs5azw1weCdCAgguXh37Jcem7E",
  "key29": "3CxWRnF5TyFE9xP8PzqJzRrDMmG8vKqZ6DCjrSTM4X8MdXhLJGjhSLsL8iDEpVaEqYxs1LbEMGcPYo24Fbu1QSH3",
  "key30": "bV8Rqpdd5gGSrkMgC49dzxyVVB5PPKPDaWZmwvzTdSTAvtWF99rEAUzFEN3C5HGmvrzianKSmL1C455RbWrHLnL",
  "key31": "WsWeGBa35qkng3TiU3DxvPKygqSJJ7RWLds81cf8bAbfWrVqoQWq2W7ZdjbkspFQpS7hxSzmt1HsTttCXdy1qA3",
  "key32": "5gi2QhhzDpvaSaGRk57wxuddTEv9eoFoXrsnpfncRwQo4RtSohbHNDFQ3wmvQ7zf2mPWiaUjfUnFsF2nrAZr6MX7",
  "key33": "4pMRKoVqV2wnLJpzh2TtVL494fDdrrb7QTw6V3UYMjpSTpoxhGsTgoyiqPeEYeXMuktX8ct967uz3GuVHXteseqo",
  "key34": "3pcfYp6Y5ECFkszjhJDKJexKsUDhrMmEKGr2fu8kDb4bKpcUcKr85MAUXHosCxkfZ7Ebd7aTMBf2rR37G2xqgQ5P",
  "key35": "2WmvdazxMHD3x89objbZi8wH15cYUmTrZxBnUbr1MvXNy3cbNa5i8E5yvbKMs889mz35bfaDh7NLXQxngt5jfhEX",
  "key36": "53Qa2XioxH8S3LU7PVovtGXPr9Vc3YmME4jFuZiCTAeDUuTexJs8zSDfv7o8zoGpDoMRgy3UaQk3mDGs2PMdUSpB",
  "key37": "3FsY9GTbqv643usv2G3zZjYv9LJBBq5987tq6iw4Reo6dHriGG9r1ePdcj13TwwUcTF88aGw34h41AMLaXBGZpoy",
  "key38": "b7aDiois78jKKrE4ydmbthhPQn5mvbg17UPvcDdcdtemDeaNTsSE8hpn5wZWWRePy4HWRsN3S9e6ETuFjwEUFBL",
  "key39": "3Fr9qvrgm8ZigdW5rvQCBRAVMekJ4TS77arXPCy4cZPFWMC8koD3ABYxLC2nQHehBfAGTBk65QeuvXxRURsZtyWZ"
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
