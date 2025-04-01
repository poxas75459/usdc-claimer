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
    "ywpX4CR9bHV4LJdJmKUSdcXz2LWcMvncJHgkxxhqFXyNf7hZm7dmZBTMjHVDfmfgd6qUu92reVFKBiVemXVWgRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQAWpEP9AcAfozVe28ynvZuS6vG2c6Je7bqXVq6KG9X2raebqQZAQSgCCq5up3p7fg1Q7NcaVcE74LZXtrg1fyR",
  "key1": "4ezJCZ6pQsmeQrFxT66Y8MhqqgYrxpgtEToxWmqBe1oWKr5FJAAcFBY5kcJuojR1hC3LfbTgFu2Sfp9qZz8qmhGp",
  "key2": "4FjV5iCYcF3T9sxoW7g8tXZvGb2n36R5vrGjJmcYPCrUGT1DzKxTs9d82ax15QBgKR2ARQp2J4HFqcdyCVEjXhau",
  "key3": "5EXzVn6L6aJgpionoRz2CJEDMYmK7etw2DzSHAbZHrySU9zPfTwaSWJ3avCHVpBQFYYzV9H9VMs4cuTbRKhRjxzM",
  "key4": "2c1AaxMPDEgy3bdh53jaW5b9Q4yL7grNLNsk1yRMAXxoGnyfksb9wNrvKr1f2Aj5x5BYbjTWn91vwBZdpXiUdyCf",
  "key5": "64nNuXTcqZynRAuQPtmtQdLjPmveL7V4DVG2aGg9hYWc4wK3XmG57mLNGyTV9ggXKwrvxxU43FdGJdHANYESzNPy",
  "key6": "58fVdsZAYtXxuZVc6xNXvGqGfwwf7dAJ7RonrXEbKehS8badM5hmsEuJARA5krhuTW14YVqJr75sCiXrhufFe7mJ",
  "key7": "2NwuVqrppceKFHXigpGVrwuPZynTXU6aH5rhFKn8XjHfFQ3c6b715JTrS5p2ACx8T1HMubEzQE9xS911LAFwEhdf",
  "key8": "286eKaP2YF64951Mi2SRhF1ThUVg1H3eXzv6gruukFyhi2dKDxgSLcsbXXnxC5tpvjUWwNdWHLsCzvuGETgwek6f",
  "key9": "2Sjd39bqCNSnfgyzjwLHqg9ztV2di265fwYLuibpcqjswFaBEMeKoFwUWmM4MbiHphWXMsoXfj3R77EkL8G5xZvL",
  "key10": "2GemVKGHXwGFMLYbM62y8vf784jjR5bvrR7ZRTjXJiffbLPnGAkY2j2fTm748eJ5nV9WJ8F1Q5t37XELpAvo8S1S",
  "key11": "2GswCXPFu37WtHNeQM6z81zcfa3k77SfTB8zFg14G95mp1kyeUyuogMUCCxy5ChWfoLZrNKcoTiEUfEERbTstbRR",
  "key12": "2LSkNxZLnuXGKEAMzxi5bcA7cwshz7odmMTGZE4a2ab9PHTaYEH6gNSbo7ELTF4PKUPHYjP1eoCERwoGNGaAmNGp",
  "key13": "5NvhnAfgQCY6B9d5gCYLQcLmruZDrtMQHv4wfSnahXDr4kf8HMoyVYxcEYb7Yi4JsTiA6diGmD2ZckVeFJNCUthw",
  "key14": "5D5VqaaFzk15Ka75KeGFj421HGkNoHx8pNUSW5i7wXuVqihjGozA4goA1iZ1xwzuQt9Qib9Vuygwx31Q8NaFXcSe",
  "key15": "3Q5RRU4WbGo145D9YyqPxLaDDGTzr1vwuyqoiX43iHD5mPRY96PxTVLQNEHGRWf6jkkHeH7kUCbsTAJkhWRfpgy4",
  "key16": "2ZNmkkDXEhUV3cYVzcW8ZEFW2zLnyQNVikU9TXARib7VY8qGNfFiKyUzd7WbKUCUwbUfx1RfjDAYf2HiBLA5KxGu",
  "key17": "5Wt1sEmcapVyCfNSUp2DA4SUheC42ZEw4DCKhXdB84nJmwmWNQHz6tmSBV1AZcy7nDuLB32S7fjZTqamqpik9wB3",
  "key18": "4yo3pkcCRLugRyZhrLHH1nH1KC7LrJjvnG8Z4w5F2n9nuE8FH8nDAAoibS7PUumH71dhLycfky91EsGCyng31hHS",
  "key19": "5awGkSk4bgQ3LpxC8vXvB2gE6eLQg23hWfB7KHv6sdfLeSLmaVc2S9VY4c56wmbq17XkfZvc3gMA7RwQR49aXSWG",
  "key20": "34jSRL2CbQsSi1nSEuHbs7enZGWiNNiH2jmD9D27A2DRfhDMgVMs7wfvZqPdFVGBd1SxuF9gmrQvtoVN9Z44Q9FH",
  "key21": "54xMRG97NC1SJAzoCgtaWpq353VEkJuDEiTUwgJhLYzcSAaD1sNNNvh4arQoxCCvK5o7s1jpUBbtAAa21HnpzTCY",
  "key22": "2yUicinECttfU5A6MxiUGC6d7gemXi39Tx37JS8U7B9Tixdo5i7U9GSRFmEVttTwLJ2eHCUq8qqPocf1ZnFGKshy",
  "key23": "64di6XWbgfAqL1SP2KTzuqpkv3fTY9NjnxqrxMHqf4iFQKQzhnHr4koN2bcjB6ErjxuhDg4Hn6VfTxEHVs4FLnsd",
  "key24": "45s2hWDVpJXF3wr7AtPJuaaZHnYQk9haAVWXEaDFjfMaMUG2f6c8bhZt11aMKQULQNyRP1LHa49iGA3hAjCC9TRE",
  "key25": "56MriZ5zZtSKMBauZtEwsmNS4zgn2QTDix1eQM1z1cUPoMzjYLBkxaUH7kM1imoG94p7qd2qFwqhcCVL7d5EA7Dc",
  "key26": "3tUyop68foji52SS2ygP4faJxf87WMKtiamPiSuiNcEchLnN3c47ZXiiKc52sUjU9Nr5F5tmNm2xzpQkztoJzZSe",
  "key27": "25c2f3TY7uv6uLgghJGCCw5bTag8HdzvtYfpXN3JWxJ8Tgi3QEjCNVWDTHjHX9r2Y9zgA7oxPmSwGXUENNA9nRvv",
  "key28": "2pypnnV9XnfrK1Emx3uQGNVFiQ75HUa5i1ZHy9Nw6h6WsoPc1SrGAW6gP6xm8CkpUVMNPXV6jWUVBpoeuava6cAh"
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
