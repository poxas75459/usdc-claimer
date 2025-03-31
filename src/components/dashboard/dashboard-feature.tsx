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
    "368w9gzZmHrjZMruFphTTUtF2ERWYr5SAJauA2BZdujuu1CoH3GhBGSWSkLLmqBMAWwoUdSCTARLkKG1daXJoZWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSGyWCoxXj7xfxpTov3yB3Y8e2veiUZW1tJ3X6CGZmEtkdkufn4ooP8kaNkaXTCEmuoEZ2hapKgCQuKUTk7kgzF",
  "key1": "3dpA13ADiyMDxPgZzHWRqb9Nm93FFWCBxEHZNzdEhudVbd1McA7QKMWZhFxFAkn4XxUUgVqGU5i3Ka366gTBmmj7",
  "key2": "5w3V2acgiVz2r7huiEHT5DY5inxMFBjyfamNGpUScVdHMZE6sot1YXpjNL8QR2APAqyzM78xdp2jhV3SGnt3yD3U",
  "key3": "aJRPxJHv7TvgzSdgrW3Gt8wxDiha8wSTNEzMQnbGNySXqJ6XzSZ9m2bD8pygXMMJcv4omvdCWxx2v63rczmroSN",
  "key4": "74Z2yQHZ8S8NhYQPyZMxoxVrDMQ6YsKXU4DEQzYxgvPj2Kk6uGTFY4PVXDqt3qndsyM8n4kNEWKFg1u8SPRC5rG",
  "key5": "2FA8DgWscgwaTFvgpXS8wwyTr94oPjfYUFzkGjJtYwAiTqN4LaxcrAwcaZePGWw7QdHsaxsUqF5wyvChyeEPn5JU",
  "key6": "52gNbxGWh19epWhu8gRYVHs76dDTYpREbpux786YGgjCfnte9RgPUn5JYJqvQSLSUm4BwcCW3ddpuECnnoKm3HpV",
  "key7": "38y4tRjFyWxBveGe9ds17yfBRMmvY3T3YHwdVqNkSTRtZwRkj6yL6YkTayBd7GEBWsVAcuahG4hpjCH2Gii6qnRg",
  "key8": "2jMJcBHvpjviPJ9dESaA1kDakckbXdp8UwHkqkj2zdT75Fz4ju1XGGYZjjSh8y4nbNEduZjbENvFM84ay3nUwmEu",
  "key9": "4VzCvsSAvyzh6n67EDuZ21wFrR9Xj9YhTyYyKutgrdmra67TvvFUj6fBeDsyZ2A9hsqPGYoYykHyvt3TmADMoyPx",
  "key10": "2q93Mpt6yKkcRXDUkBeqPUc1TVY3E67drZTcnkFu7KkJYqRSEa8tvznYwWmqkbXrzypT9UT9zVN3B6Z15KHfcynT",
  "key11": "5iPrWiaBqTdSJtmXVKGckVRYAXy4JxeKeXhJvscJhMfgFZF7TMJDvHv4Vr45QYBwv4n1LkjopTB3js1h5RSLFFYT",
  "key12": "5UXMgziEn6Vn89AAZehLsHDbcca3Kvkhp6g8xvLZ3DTVrinCJVoMJEpmBgeM55xLYJ9ss2a8ToicMZZauYcMq3J7",
  "key13": "2NMqUTngxYArfn4KwuZZwv8EmW23k5cRqqZBPgEXv3AebMBsJ6SaLGowTkMgaB7fxFGdS8iCsMyWMHmf4dd72seE",
  "key14": "4bNFVSynsPLn8creUyL7inmuZMfWf3Vy9xjtPhrFmU5ASdVBhUcz6afFknSB5UgdZy4hAqRU4BkN1uWPd5TbdmS4",
  "key15": "3GzA1isfXVJ4b3hUCtdPTCvwbaHUMf2jKhnqf4xCBU39aFvcLoAk1tPRtsC5QuLye8BE63iTHdzxiwuKYVuzbaJC",
  "key16": "24waDKkAJnvbDSHJzPDc8vpiuL8hYEJorVZVuu8b1Ui2iEjose5qM5CJDzRB63GgFdYLsiCQ3rXeKyM6PizXjQDD",
  "key17": "3V3rnAB7YqCwMhZcdsvUtzSXqzUDA3ahsqXPT4r48namwB5krCRKvguU4NKNq77CjR91LyA5vBVgENgpPCN2muAm",
  "key18": "3wr9gM6D7hac2nQzFoeZETHofqSWi2sZK151kAnGeJuCzG95Y7ATzpMsrfnZBRKSVvo67A5TTkrtgQ8czqere5xP",
  "key19": "5uBpmbdQD5ivMzcYtFH2qvKwzWqBRHGgxkR7jBLvNeMzFa8835VMB67sAu7GpZkXQDPCXyLgsCfcgGXK4nyFnLfu",
  "key20": "2FRVrC8gRpvnJaMDA8XyK23683vzDvUd69YiZ8mccTrXBdGX92dZbN5roLYTLh1iRQs8Mzep55rpKW6FC6Hkq6AF",
  "key21": "22M8fpyjFDTuu3z2emj68ig8D2FssvXTdHjynEEYpX26AEgnUdzjFqXPR1bBGHFzXBw6vruQUiPjoKdbo9JNScTd",
  "key22": "5YZsHDDg1GEkfeAJsqGLa6vuRvz6ZU6YHYgny6SgTsaTw6PCdj34XcxTRpaz8zEwMwfb5wCVWXZ9o1vwG17QWY2J",
  "key23": "42Brt1LWtEWTieDcgJhwoBUYCbMdYYUsy76zWb6TMa6EBRjxzcMPcGr52XyQtMPRWZjQS5hj3j9VKY6p7nE7Yar4",
  "key24": "5LHmfq57FTUo9xtQ3u1ureF33CcxUjfpzH78MsnJPWeXDCcw54UarRbrA6ZCywiq2RNCSCzE3ShWkfQh329xPebe",
  "key25": "2MMCemgMF6Bj4t7UiUXMpKps4ViHQ8w7rb8DEurFuWp3RhPpRqPb1zCg7sihGKjZ5W8R1BqDys3zb2PBuBxTgkFJ",
  "key26": "BTUtzPdGSyJbWtBAX62sBNBj52x6cDbghBnpfNzCb3VVsnucxtFa9TXGesEyjLW2uqxcuCBzC8h2adCnGtufJt4",
  "key27": "2q9Nn4BpHTTvbpmXi7bQUS8g3nPZNaCnTcKsPDnf49TweWJC7g3spHWEXvwHUyXPNhRXaJTDAbMdnDQxnFFvD7fF",
  "key28": "2CCfdDZuBQ72iv31SMcLb61tYHuMhbFocRZyDiPMJDr8vaBSeVaNV4hweB47Xpu8T3p22Gpne4SUAzxg4qoDw6Xf",
  "key29": "3D2tGRMnwme8m6k3HT78pULWddt5izTsdiSXUH8F3NRK33oLiMwcU5vqEAv2dEXi9TrbsN2UxwWGgppGVWU94Wd2",
  "key30": "5asTc9RYqccnVHr7hE4ripYD4wBhpM2QCcYy8JLTdNJpa7coTdNaEzosdPKfvnrAVqcn7XS82hdVyWUkHn6Dn118",
  "key31": "25BAA1uBpi6aPSHLDLkfFRePP3Q6pYzo5RBsFgAn6bZXVwL3BQ9WHhgsvB9b1bFYEFnrAWkykNypHbTmEqU2Qtg4",
  "key32": "z81CL1cpqtSaEbbQjukbd5s539NEcEyRTZY3wVsiaE63LNyh39oXUHMs3yJnzn3DsySDTj3qCBtXRh7WQwhVkhr"
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
