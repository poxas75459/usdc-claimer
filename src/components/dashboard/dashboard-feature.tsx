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
    "mrBkwDs6QAk6Hck3Rk9QPGwcq61zRVu2pVxHPSrarigHW4UboMphdbomDR6G7XR7T7rUUkNREWomdSocWiSLBgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDADSDGpZ258Z78RNNc4CzxUydRMZ1xGbckX4r2tdNfFotyjsgkhfwrS3AZYzowaGJm1k5CuQx4Ns913uy8UcYx",
  "key1": "2GJBZSv3yaiZ8EKST1ijoqLRFxusoHCrgdAGxJ71cncpkFSVbhCGNEMXX9pwWPrMsdtwuCAkCRRxZL1TfMkX3pBT",
  "key2": "3zAcQ2SdHrLbeVbRomDKhoRW3q9mSN8T1duf2Q1NL9hnrUXr5vpx4nVF4Aq5XeW4Yty8VSsSoW3vMgftExzyhDXD",
  "key3": "2h8ZXABBh8CQ9ugZPbgzZ7tPGiQpg4bG6mLnRfn1icMByrz6toLLoTYYbTZNfHWW7D51CzHUf3cK6iaxDpjEBgQv",
  "key4": "5DDBrwuGMLNj2jWtLrENfgz5dhfAzg4S7xRAmqVLhMzmynW6sfXB6wmsYfrLaSkmCJpikVosba7kPrZSTtK8rHWh",
  "key5": "4cw9Pi6B7oFMwhECp2TBAf3MCPQHgN3euqJbGpvGBuVAQ6U9TncHWeQBU4ChpjRX53ppqLfnDQDtuhEDcya56DXs",
  "key6": "5KNNyK4DHED7Ke7u913b2GY3Vez6Gey2NnakSs9vTvjpKpchFNY884V5bSWrCT8hqH3JDtk1HNBC8E3cDZFCVZjs",
  "key7": "2TMNdn8EmMcNyHw4D8TuSbeSXYz2Z45JjCkw1Ki4RcBepVwT4qkFvfwWHopUYoKGm94HLtZFKqnD2ybJAgmkdNYK",
  "key8": "5gzWqM3BPBkNyvQTnLu6npB2VZNngkwAdSFe7kUhxVdaHGBsnow9DDsihQhHyXsnfTLdYkRcw35vNuaJyYnkr5yQ",
  "key9": "3uu8Wzbr4Z2pz7kYbGvBXXDBsGCjWauNkjmuNbXbH7NLPg6EoCctc6VGhNdmJBMT6h4TK8EMYnpWK5wJERL9EVg",
  "key10": "3kWTfmtu8oTmsudLfhMtVjpwfhSmkrLk3j8ak2rubnpjqjZwgSS1hnLqNeVxJWSsnQe9UBkjSLUtNBFVptDzKRmo",
  "key11": "5Tcwvtc4SWYJcLjrtjjurXdHhvAuCYKw7caT8UQk4KyYx5bY95HaouJWTN21C33ZG4bqfPonvzhV4pezzh6r3A7m",
  "key12": "3Ft3LE9cPx4HZthgz75ZPttj3NqrEygmyxKV1SBJWtmNB1Z5ruaaLYV1Qd8ZPUhfRU5wvPenzQ5n69xSUkCK43YH",
  "key13": "pywZzFaxnK7PRZugFfQxSehvfhmMBEE5eM5GdBdAsrwVvoUYuqtiSJX6eb9tTk7jjD4WHZUFKJTgxq1MLZD8PnR",
  "key14": "65i2wsGbHZHcVxo1aK8NWN5QBsyrkdCRAjGqjGdTuCyebk23aVL5TC5gqTuji3iYtv1f4BkhEMQsPkHXkUffVp1G",
  "key15": "4M5SPirnJuCDQpzE5Afxj7q4yqFynWFWfi5uhzsnc33yUmL3P9yG1UbdLEun4nYT4dywpSgYYmYyxXaWSSxu28KD",
  "key16": "TiCASo2FJDAXkRCfngeL9c4hu5SyEwK8jxa54uLvfiV5tZSFmHRrygdH8jUEZXEe8ouhjTpbKq6m9BUUygYgkEC",
  "key17": "5kyELNVsqAV6SR2L9uLHUuPAxTj75tGuTgfaonLa5PCRuJSY2hMgrqHBkqMem75Rj2hwQ4zRrUKbP4Z9nDBdvi5p",
  "key18": "4y5UBvTkusbT7FLGyGRP5cg22UXDaeVQ4VnB5FNiVMepKE8Ytz3rkJqhh75SAtPUSLAqJ2opTcQXjNjQX1kjd8o7",
  "key19": "38fRx4kZM5ttDaCdugWMoCNf5dRLiRkbP97jxjJm9nENciCRXd6rk3DswtV6b53kTH1PWDEzfystcaXtKF8rnoTt",
  "key20": "2o3NACQYHKj9HtK6sG8EGB7XNAqPFJjrvxYtzvcMfNPbdEFBCVP7aUJt5udZf7Mu3xSdUpJpdtxfiZrGtDy5dkJ8",
  "key21": "5y2qighw6e8vm9zv9VAEnpo72os2i8ZGtTpkq3f99pZhqVShQzDCbxUMWikfTJMa7nTHUvq19pX5p8NwgXr2spJC",
  "key22": "3aMkDeNQqQhBJsRxvRQW6Sh8Se5mco3Fuzoj7RMxKqPA5xsrYJT4RAE9aPKuSSusHaQCLeXmtjcAJffaRr29p3oC",
  "key23": "4U6DQQRaR7qYeyeC6ZxCtWcvRcd78o27WQkLNdaLcPwPfXQWnGC2QT9UoaReZngUcyZiJex8MrJCtA3wNHtr8Ros",
  "key24": "5Mq2ghJghjb7WTCqxuMbySas9QBiF92YUNyEPkFv6CUM3SvvSRSuXDVaqeYBL87sLvNJ1pr3yxaFAFszmf1iqbjc",
  "key25": "jBiE8adjADnQDekVC4wwV6XaL7AAMjYaeXdKsgEbdvXXn3ULifEZeKaE4w6UyAx7aBmMQL8xEJEvHpfcojgyEhL",
  "key26": "4HeqSJ2LDV1pBfgPU3dqkarcSaUzDAX263SHDuGPJCW6NpnZod4Y4WoYGijHPedVKo6nheNeX4618joAJipQU9pJ"
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
