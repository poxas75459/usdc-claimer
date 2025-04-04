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
    "4MrxBf7G2SJo2fUtrqgWwEcRKr7ovWR6Xz75GBFJB68mMmi8fwTRwRchESWoM12N8BsYbgSaD7nbtAsGPpgf6DGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHpRgo1cktymff13yJTHQiYHwqPVq9vuueMyxQwsLvGo1iVsWXAUGpPak1kA3xykAaPWDzZprzf8msM7AX5csCo",
  "key1": "2GdYDbUD3CuSrAyYQbP4hafFuDt94GECLZNgZ2k89UyhaE3XCY41npNkn354HUrfkJg1QpM6Q8ZmSULUrT4s2yes",
  "key2": "4Ft68B1Vj4VfJncLjBHGX3VeW7zwodFjAo5m3zbCFbdFazWHzxuQpYtGKRSGTxodSBAjYw3UpgtX24iFZwpKRSGg",
  "key3": "4tgafFnFbJFgEBW9nA16zdy2rFjSsAnupgMmywbUiwMEjBPTj32TJ9kL8DpgiPUXjWW1qSmzT9gTwHsHRYfJEYa6",
  "key4": "2wSb3bPEfwQuoEhJkrpe3fdwFxQqSgoFn5UgnMPvxB3cpSSTvSEY5s6JuL5qjSHVdzK9TtKnYfKqcsdbuwGhJqA4",
  "key5": "4zZaePrJVJ3PoSvQamU31Bod8geX83qQpUTfT1vVcT4oUnT3qKVNZb1bWamLt7Ve75UVLSimXiWeT3RBoxLHT2ps",
  "key6": "3bkbFxFHePshy2AkEPKYjcbpNzMqx8rGoYH6v7G6xHdbXiTDPGsWtaiFys1TUGAs91NE5Lggj8xBoB98Rz2AxkpU",
  "key7": "4Yvt1JxY6mDukvGLgimVCGKm64CnnBsfbHZTUwjPQeX8R5yWnwexuy6CvZsxEvJ8273Ke9ttHTvBTSP1pYzAbrqA",
  "key8": "2WRiDygNXwfh8Z4qYRvmHXefrVUCABQj18CxF7uUwkPiKuYWnsnmXJsy31vS4JLk2dxjtQCsX9QgjHBvaZzs8aFj",
  "key9": "5TAk9A5g6kVW5FoBKbQoFryA5w2rvFCE1gsDNCfefvYU24UYSR9LiWrP4wCqY4aPdcWFaqRg8BX1XxoY6kf93e1e",
  "key10": "2LVbAe6dDsKJp24dPtFwh6n2FQjhustAwpPYSwn9KaHk3gNEEbCtdsJG2GzS8a3i4615G7C88W4n95zbtMcdYn86",
  "key11": "2hFzmDv7UuAY3sVSu1caA5JarjSSWPndUZ7eShoNonz3n4rjD3iXYPBDJNPLEjh8wthNyVsbop9Z1pYfUioDA87U",
  "key12": "5GR6NUzR8fX6PAtdoZ2uwaoYqRNCFLnU93kKuELrcpJfbjFuqqrdAptRy44oTKfqJU7xuGbzTXUbP5AWH8Hfg7Nm",
  "key13": "3raRwgJ53Yrn9K2XN39AFxr3rVD5HtBGCV71KZPqhtd5iXJWGaGwQH767Y3mXFopjdRuk6TLZAapn9auuz792Rhe",
  "key14": "3hP6GVpVc6ms2nxH9EX7UvPn8daVDhRWuSMwsrMfcXW7FHnjX5rmxU1RQsZgSL2t3ZMdG6JqHXcY9qmJz2fsMZGa",
  "key15": "2HQ29M8ZnFbRiPwNgif1NyukT84kK1koQCbdKbCTD93AhV2Q3y8i9QvgrtkMRiiEEHD1oiB3HbXadqnyU9uHwAWP",
  "key16": "5dXd7NFHTnLsXPhebdbU1C7cdWkgmpb1f8gjYGvXhcEdGAL5At1JpKv6ZVUeb4WcYpPLt2RhsNukLs62LR3rxH48",
  "key17": "3SA7dFmFQ6umscwf5R7XTgGD9ZyVtcMxyV1h3eiqTyyjRjcNRmdbZBetxkAnTTrkhxNgfb5iKwqJ1B1zZJkqV2TD",
  "key18": "125haThuy57vYZ3D3X7sP9GHEFVQnnuMfXZUn6dPa498vWkRMzJt86mYnPSwh1epzfSbmhdZHAMwayN4KT84p7MZ",
  "key19": "4tgz49hyK2q8PmgeVDq4mWgKh2JwV18WCF2kWPohsvEDii12U5fX79xFkMF1jGrs4MhdtrJmkGpuoU54pmvdxA4V",
  "key20": "4UDpxdBbEZL1o2mPTASbMAxa4gsEahn7ht3XpMb2nZVmcG6yrKLJ8QKQwqPS81wC1BPkGVcCD2FNdcdaBMUJPzhj",
  "key21": "4qLwzeQ8rxSTbjy6qhJhRYUsd3KT5A56yMnQXirnBLDxVSbow5L64z8Qyg6x1SYzfC5NPmh3z4L9c5MrgrnJTPU8",
  "key22": "4bJG5BzGCkQV9zy6dN2oMTxtgyWMaxBb7H74N4gsLKsuH4Xig2ttACr39GwJCJM6LAgbvFA4HwKqqHQzcrKuvUp5",
  "key23": "4kUGT5dBvg6om3cJxYXGC3QSuYQfHYckmW7ph1ywHZ9Pe2Rbp3tT6QV72U4CTDHHUJzWVzpDZfYLDzToy6ivaaPC",
  "key24": "Raxw5agJgiGRv4EqS5gM34nL87ambX6Hxapfvoo8idsS896b4PkMWzkb9jv5WVfiSnZn8NxfD2m8yXpQYZ55qe5",
  "key25": "4WspTh8su8drA77PxXRJKQif1MfUE7W2uqRdzvvZi7TSoPXwL5EPodoKdKXjwdSdZQnsiPn2gCRehZuJheLd1H4m",
  "key26": "5mqCWjoMDWbwCRCB2RdKTqT3Qz1CBJFfEWmPpKCQkiShpNsXAUsM4LetEBMFDz35JdJyEa4mpFGezSnPkuDE7Ak6",
  "key27": "3EKsvQ3q14xu7VK1TEh1ZpBJ3pPZTAXAg5G6XBbrf6uhDpWeCEDj3MAeLZfa93MuH3fzZ3YRt38gjuDinF4bXRfE",
  "key28": "4JzoeSDx75NFkdAax9uDB7Gdg5XrGPpNAUqFd8FwFPUrwZKMkj1eiMpPN67C6PMMSp5mdLHtfkcbt33hs5uVPeGJ"
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
