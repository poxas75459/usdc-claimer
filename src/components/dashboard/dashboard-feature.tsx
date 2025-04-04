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
    "4r7qxSMDawX2xnmaBnH3RmG72oKX2fMfnFJBa9fCpr36aZsDMc3Er9TVpexF9y9akSHNnCrnauzztUdwvogLPPc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VS6hBWiBVdWcC42J9MV45YHu7SbPrRpGW7VeXxs7M6B2kmbb7tK2LYY2UyX6w6JDqyt2yEpjN86913Lm3TvTVJm",
  "key1": "5nRk3qiKSFrviTSUomvBJ2MV8h6jjvcueE7txMDz2uXtnJGEaKcoVye3QY3TKhg7NjNTUq2E2oRaWr5mu9oxCeCw",
  "key2": "4wxJhZ73WZL6gSx3DGWmRPQAHya3G8htfRLQ8XJryS3sn6r6cLqhYRSWXEkpkMRZPRopa8jAvDWLWvipHRsTDec5",
  "key3": "4dBt5bj8queurSfHML9gpUirq7RzmdEun9PBEbBpQeQmkVLw2vLHpwCcZRHRgkEUeUXAK5v4K5kr43YrA3s6ztcc",
  "key4": "4futbwJbGN8CNHXnikHe4PuoHPSAeGhfs6RLSc2LrtK3rVQsu9fswQLa9tHE5GTsXVAztKQY8DYAmJru62NLxrZB",
  "key5": "5QGMNRmYSmhsW1sbJmrAFifGGTTpM3Pxmdeqmh9BzpzTqzYa7JfYo1uY7TcqMhWhTe2Jnn2YzLwHD8wtgQ14ZiVy",
  "key6": "5P5rUbZEwsUHUiidxiuLnCfEdZaSXjdCP6yFp83nueAFxobx9g13Jx971dnZy83cuQTCKYygNag8s5LsrRp3jnZv",
  "key7": "2xN3TyeJmezPLH9eEPjXjDjgacDisSfs81nXXCZrRciR4aZ4vt12muEWrvVjwtZfBdq6aTmgvqFtF5DkWA9pfwzY",
  "key8": "3CG8VEhGtkWZ6PhpCkD7W9qFPn3VnngnkCCbAJWSvS7CqjrbEfZhfdztvTvsb1zwdr86KHFJUJ6f1xBGnLMfHRRM",
  "key9": "3bf3BSX92pS82gwVPrzkX6aEoLnwPbhXaWvUsiaG4ycUaxQycpXavPLDXtdx5JsZX1wgHxV4M2jdBtU6Ez3WkP6e",
  "key10": "5Y1eetKWDVT1QWRxA7LDkjFRXL13FghNFr3Dz6yrBhYXzhREagcy341o4GZ8xASGyWPMMYTe1KmpMjrQ2f97RBBF",
  "key11": "sYEeMgUQe9vdeytGp6DStR7RtC1smazfsvQpHogi5etUL4kjWdxy7TKpP5Vd26v5LH4VKotGogrkCmeaScweQKE",
  "key12": "497y4j2L5WYdST7inyW2PQDJecUJ3nweCkjvpsEJGifhFEH7NjcfqXJY2KkLVkDdAKbZxanYxMNyZrQgvXenDWGD",
  "key13": "5cBdqnKPWHdhP4H6prHLgqy7SRRMWq4C4NmAZTU6v6ncBsfiuqALTJHWCNRLuaASvjiBQp7txFczWRJCJdhMPPom",
  "key14": "54m1KVS13jc2XdJfkZXJg8u3oQG9U137bgSRXaFUTivSypDPL7uou4qeULgTmxZA11qgtf212177UKEQ12UMijMS",
  "key15": "nhYDnUwZSkQmcSDY3bqAv6U8LxueKs4bjpAsPTWVRZf4aKcVy5Xv4BbXjxWBudb9dHwypW53y1GpjoWXnnmkiBr",
  "key16": "UoCjcgsoq9BVyG6f6PJVdgbY9gjkKjdrZow2jhuKtLoHBJV8n8b4hzPb4d78izBc1g7XfnVgFS84yvpA9U67wZc",
  "key17": "5veSZqCGjs8cQ5z9gcxjn1WymwGV3MXmaRoofCvR2BMBX7csQpoqmm17UegCLW9FtTSNGfswy4se6Yyxx7qTb6Lu",
  "key18": "waBZTaZszfaRFfPu3BE6tTaacWNkF832aU6mWHkq8FepN3fMeWeXYudz56xnxzmqP9WGDwyRqPftoeKJzDfBSHa",
  "key19": "5nD7Y17RBvqJytUAEZqTGQHZRq3dEpSxp5HwScQJF29jWaWWESiXzZ25Pzst6qwAS1MQXkzVb5ScDSZdbq78SxWU",
  "key20": "2foho6M8tQAFWewYxVjnRxWV5kBR4SfVEjPPgsXxMcMkt2fgtRUVNGrRyDJipA7smJsY2DdJHhAu5dUcoUiajvDd",
  "key21": "43of37J6GeVU8AMTcTy39Ups8qJVv7d2N8pFiMQ1xHhsCPQ4oTYQ1NtWrQzJ4Qp5jmeSycjSdwkjfhmAmEf5D5oz",
  "key22": "2hf3CLgsrvvzhTvPSn8DWhtPPCakAY2T7deGcky2orfXKN5bCcF3BA9YrB3gNa7rDDKE3TBDuZg6qUPkQPLgpfgx",
  "key23": "5QKZqJAxRZLS9ftaYkhxM3qDuFxe7Y1LCtPqXgcUtvK62WDeuMSE6PwXoSYzgTZfCjsGwVhfpSc8svweDUxmbAKE",
  "key24": "1WXk7cce8xg1Ztpc4hQ7W4QPRsYkpVcxSayAhftjkKHsZeK5aRFvcPBY9itryeSKFNgfZdeh6DWBgG6mNQr1AwE",
  "key25": "y3xratZWW7JuwrcBCfrCCWSnyQJwqtztaTANiPad6CVv5RhyzwnLg5GCyFSWY4bWu9YoA9GahuDauEpWyoBRnRe",
  "key26": "4gTH7zPNWfBeJM6DMDKXMcxFxJYsFnXagtkX1sjRGENjWvNM4kyR354uzmjPstx5GebZaNj71aWmYfLRB4rHKUs4",
  "key27": "3dycSDLjccW4AbaFeCyrTcqtXhzLjGQfDBRFGSxHSv9JgwMsNtdH5y6hpGTapTJcnAyEN3wp5UatqenDP9f2xBnj"
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
