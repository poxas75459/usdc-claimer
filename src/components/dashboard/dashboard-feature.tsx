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
    "4JS1ADmzgydZrTWHhxMexdZzGttC4ZR8wxLB4rfZN8t6cHpJ2Jrhs7Ni1G3Tgfb8djHZ3G4tENZ3kZQ4SD9AiR9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtWVh6xMFDf2PW3JuYBrua2NFdtu4BASTAusGkcmLBcdoqCUow4xNJQXeo5F2cABNATTAt1oh8LMryVamRBfgQH",
  "key1": "2MWRfMrKkRMxC3SGafkKsYvZe3AN1nHJ3HYKALShaixkCDu59n6XXL4CQ357CxnpuS1neXKqZBNrTk8SbBLmZGxh",
  "key2": "3WpydcN6iv414P8NBSftnz5E3a7WGbBKqL7rxMSEkYQB7CkEt11Nsdm7tdZTic1Uxnz1KwnmC7Juh1yp8fJNMgV1",
  "key3": "5BrnApWfui7rhh3UuSygFGRyNYFVAkZ5k1dk6xejjGP7zKitmZ8ze6qWZApms6Rfn55hmmWhxT2L3oc4R6BuVpNq",
  "key4": "puHVsKBzyYTzfEvJwgUnJimFwT5CBbfZtoQGn3LiDBrvZfXgFHjNCv7NVQqmom1xcsFZVqHhRvDEHdZ1Tv7tdzk",
  "key5": "5HBeX57rrNJgnnFvCaYbc5PzpWEDZwfrQoTCUdD5EcP45LGf89BMQk3bF7zrAtyWyxDfWEWGNM9pfUR6TNuRzfAv",
  "key6": "2d11CYGFuiydSHaw5RLRq8v14VvT6QWFyUep8uAoJr7G8t2oo4fjve8kaUDrr3hQwkbwfdW7J7tD81LDkyNK9yPe",
  "key7": "2twhR7xSvswiTqAoCXdyiA8RbUoSXYYiTw2dGiCx6vvDfsmvwWhPpEGv1L8rGdXn6GX5iCVKgUxzyvds5TtKrEgd",
  "key8": "5gPTVxr2xGS7eyRxjLabPoRRXGeMm7AaWKfE3ThLnfAbzQVG63rGniTCjkUtgSMzihvyBR5esjozo8qoPkz4RFGa",
  "key9": "4L22aT5vEFicmjxuQiuy6boHUykQ3sGHSoCmN4QW1gnjZPEoVjb3yJCbmnmqhsCXUzPEr9wMVkjASxV3kB1SfcvC",
  "key10": "HZGeXHM3Ef5dn9wwMNQfYpR6R6HS5vHhxY9A9cKP8BTLSsSbEAmKtbE4QPpzCAE54Zd6VQFxJ4bBwoz4UXcxDXQ",
  "key11": "5rqwvtfABV5z33EMdhHMUULJze5h3FHGpbKcbPhi9jHSHY2TvEEcYDur6Ey51rnkgPgakUhZXj4oXEz4WNunNXu1",
  "key12": "3QucZN72H9yx7ehRDbJhuicdBaoWM4Wm5CT7KroZHzVBxJsZewUaMjtsJYakEzgfgxtwZ2c39iofWc33A8FRvBxS",
  "key13": "5wN9ueyLDFmVxnqXCj4hiKnGtFuKvpUBYUpxSeU111ZofhszaY8hyTcjLYwqr5qWsRYM4iDbfvQdgsVksR815KZw",
  "key14": "4Xtp9ZESNKigg3BLU1P3oE5H5A4FN8pqy82sU5p8QNkCFm67ZEid9uH26F3EthKzized2gvtBHXh4n1roQGFjSxx",
  "key15": "2kvLrv8TWTe34oh1Lvc71yUaSBgRvueK8SKTPtqXQNDRkHMbt9hQvKx2qh5vnwoYWYvdvEo2KfU7XPokATr8EwVR",
  "key16": "3psX8o8RW6zvapS8mmkTvZTxYxouy6BsSm4iVazV5sBagkMyM5CN3sL2538NYW1qTq3DSJtgE3vfikQQchSyEe3z",
  "key17": "22LtbX2iuW5p7cqhhgrs1yim6tSEq1UZe1beWWbKebr5USkFV7e84hBdZayEE7U5SU7x58ES6QwDFL5pYk8pngnA",
  "key18": "5dhtgPBGCwz1jAayANyzFF1WWYYujqa1VNmsuC89iTU68BApfomsUovMq5THFBb83h1C7U3id5vVs51gzzZ5Qv3B",
  "key19": "3hybhEVkX9c9cispMHQRptUMQWZNfZkqvZraNvrNQmkTLY3N8b5B8PqtCzXBjz4fh8jzG8G1iHrA7XhgAARfoQWv",
  "key20": "5x7TcMfzy5Bv28zLX9z11VbkLmTsHxmGWjkZsPRrJm75StsfunGVuN1XYEGWwQ36TBSZ8tg5hX9uCmsA7a2RCjQ7",
  "key21": "VYvSgCAR2psr1fQcCRfYUntNsw422JH1fsmUsSSFvabkKeUamPb992f7fhernpEmTBSgw1gU7387RTbeuC5HSeq",
  "key22": "3jT1bhAtiPqhUNjaQQ5ATgcbhp82xovCLCJdYXvL4tWZhMPjpunzYB4umSTcxiZuaBKx8PDK2GhTA6qpQKoUshMH",
  "key23": "vARgQuoczjFujbPF9zyhrDCqqfWAT8k6SkzbzYWPeoYgWVmH6B5psqzeRxvVTpLLiZowWstNMUs5uhLpwsf1tK9",
  "key24": "2bQd6wqqMATvf51hjsXtjFJLFsF4REK5ek44wkiR7rvVmQNK2ksyziE6eZGpbqoTCtc5MDXLMJVDLeupbdNWrwuk"
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
