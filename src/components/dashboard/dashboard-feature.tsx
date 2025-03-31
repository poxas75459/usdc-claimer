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
    "TDi2NKWNZCRPyELaRjWQCSHGqvfzzcziL7G8VSYA8Lu5pVmySpbAmEQto2yBRMxoj62VcNRaPsvSPSDEQnCmCjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2TtR5rEfUcq4TmshFYPz4Meo4ucf7d9H9WAufNUULiPc5obVmqqVvameJpmvSsLdpppxqiK7k1XhW5jMzAWmdY",
  "key1": "YpkKgw4vHUG5rAkkunBFNwyPUCR6SxBEsDmnGr4UDxAu9N9PZb8jqcefN5hybiVjouNRQd2JXMnmYTPypbAYQ8M",
  "key2": "4AHizWoKswPrPWXLH7TqzQ9weiNxxRjxoW2RbLfExNa9eVw2s6cGcxrPy4Kyho2y1AT7vguW3A2powdJYfJE8nJm",
  "key3": "dTWARmKVNnkcTsQ9tPEidGzd8AC7rWBxYznCmrGycnxK5PyGvanmtJNxnsdSaJBqEeXos95KyKqecKGCs2unHg9",
  "key4": "5A3P1vfag9P638kag1zo2zM4r9FzAnZYBJ7aSv3BcqfUvb9Z1FaswEyNViAVGTRDXBcnBdd1XxFHmcu4Tzwn7kdg",
  "key5": "4KJYAUC3wvfnw6bVpyd5vDgNpmGT36wqrZSZri5qkiXfAo3LK83qZpUo3bfyxGy2DJagXS1dBKRPhyHxdpXWTenx",
  "key6": "5ohRJ4TQYpkXTmF4XFZjgCu9Ww7oic2Bpj4pmqvgG2NFFGWmkbGPJiBgpHtRsCbUcoQULzW1M71boN2vGNMKCkgz",
  "key7": "65VpWJPMrs5dMvP8oZxQrKy1ES6C18oetBkfJ2kYefTFJUB1aSZxucxLdChuZku7x96RD6JQ9yBLVzVtDHXNyQLC",
  "key8": "2YyApUUw1QPQEM94eDQ19cnyn6RHzHrxwXb3TKEvH2SBAyk3oK5Ngsk41SzAiv8wGPGtNDSbuC8tkoBctf8g4Cq",
  "key9": "4RE5P6TmpWAVpVwZi1D6G6dRzy572asbphwfkhpLcNJtztXPkoqgewhxneCW8Y6BkdQb9TWiukYVNHBqQxznoow2",
  "key10": "5A6M5o7kgUAfXcDWMMVzFfna4WkTaZom9WB1xax6txH55zX9uM7fTmCajiupHdAQ1W9knhYjtXQXYVUJBDDCTwHk",
  "key11": "54hX4r1r9AdcgC8MLx6ScU7JQDbffpQYYQc7Am18mBdBs3TqVg9mkvzVEjojnjmf7YqQgDkDmea2kUTGyfk2DmQN",
  "key12": "3GZX1NNgDkoB7AfwnRLeCoFPJmBKDTbC7EAYekYfqS6FQqFnP2opZDBoHvfYCNCFDdVDSznyAWU8RHAibVn7AR4q",
  "key13": "4TwqffYgyWsRJyceSJS4LbQt43WqHfgfAY5xSoToAtVHrcUJfrj8zE6hGWfzKkXHGZpqD3LZAmNYcyNajSESC6Mo",
  "key14": "5Cw2E8VdNtcBf9GcV45RtCmiowahKRhGvkthoWezPgWpJDgyYmVs1aFDy8Hvg5B36kYjFqDPTfXnnwMwsT9ZYfRu",
  "key15": "56d4LaHdQZED2HZiZ8yqX3Z8uBNN7B7QwdsooRCJxYUk3ufmdLdeWwivwW3ZEJnbfEtB4WeU8KadpxbKU72aRf58",
  "key16": "4AFY27wU6onw19KaZvcQJUAPia9BUDZR8bDdKETCKvGCQV7JoUxbCa6XihwV2j7e35KtfLFa4QTikZXUy23UYdLm",
  "key17": "2e3PahL2L3BvdKqTGxgMwKgLCYXpLLG7LNabhggffm9y45LGHyErmWiqC8tuPK5F7JvFFxtnWd3Ljw63AyuyXCG8",
  "key18": "XM4Zijqk5o21ttfibgiCLisD87vhMkd5H2sPgZitAtfiTyhjXz7GNXWSAMn7sUFVqMakdvdwrKhzsNTjXAfVNFA",
  "key19": "3uuFUKr5bgi9zD5C8p1m7wvtP3rEgJHuqSUZg5hwThpzqsTV9Fhv2kLd1AQbFGkWmU5U7puykhAdK8dwAXdQBzVP",
  "key20": "2YrFDFd2R6Zg6f4N3tucSrPMXRfVz3v9nvBBhKTvTvMWE8EW4HedWCAWNSfgybaaQvAs2TWVaVgk6vXS6Bx6Ti8X",
  "key21": "NxdqozgNGC7sgArXsQ51v1o8UL4SqAfSVcc2L3kkSpTBxwtzrWaf2gqxDrJKUY8d5pJsoXyQSTYD5BWorpKmQ5j",
  "key22": "dvsE1svxWYuLqFWurk8TND8pvYHv4DTVSvXdxq4atDvpeuktk6BjVmQp1p11Picx7xE51HzvFajfUCQJ4JDVBB1",
  "key23": "3mPnvrGwt9Hgg8sSfkppFLo9TPvyVCpzrxLZUMSz48Y8ywgcBTgcuMCdGZ7gREA5VMJD7ZomhkARhw3fp85HwdMK",
  "key24": "5Tg6uSN6htKoMnL8ynN4SW6ufLzA5aACsaiXDt1YdTfkpHSMQ3af9F9bVD7gTxeTda6mZfsh3GgnCinX5CCnxbb5",
  "key25": "45YjjUKTQDqpZUktxQ8Pp2jjqJHv7842rkencWQb5fhAFGyRPESQ5WFKMFSiHGq98UMxkFoeMB5GeQpD6RiaFLpD",
  "key26": "4zXy8QTqvzpFsycgq8ETWhovqiP1p6857DJSbLtc1GpETVbJBLkHNqjipW1ysd8Y5opWaBA6vnbbPs6xnonvW81u",
  "key27": "4FC3az7SjWogRECo6JFiKhsN9w9kgesuUKFyKjcyZVm9x862En1R4wSTrGwRdUmCQAJwGETikoEj4KDnPhWtG2rh",
  "key28": "5NZj9o58fPMeMFQZgCewjM6Ra43LBsgn8pnfG7B7kz1jHWcKfw8BMXsTqLUTwXBD9trNCwU3A29ARowRYLD5auet",
  "key29": "5Uqg3TMs5NVh72JXyQVVWiiogGJX3rnPRUtYTGMGeW62heYEq2BD2dqvdnKTzZCzwoR8BruCEgZELZsT98QQPebe",
  "key30": "4w8Jt7n5eV6FvQMuA2ayoEnfbnQsc8XV2qQTPbRhoxRnGCZrKc6fxvaepMQ4fFuVkw6Z4vQXyLpCtNkqiJt35Njb",
  "key31": "3866woyMqQvfDQaqwGC1CGptdLEn7SJCX1S1pGjMsYuLDWqhGS5t3BF84AZQk7Jqv24yZuAd85YkFJ6x3LuGjF1z",
  "key32": "h5SSQv1AQy8oj5UTB1iY1p7RoZJzGtFqz9m2K9iYMJeqWM58dQFpoMHaNnJ8fZ9Wi83dnugdHEer4ZcAA7fNJoz",
  "key33": "2qYBG45ygFnW61BYRLvQp6wi8QcQWCPSn64rsVmNiXsH6ZYbtU9dC3GsS5gP789DbazSj9oF25xazw5v3oLaeUJX",
  "key34": "3TnFhfjMHessmaN2TfG7JRB5Guh7KoZkLzvAKz3S8DhUP5pVpgTAE4YY3eGJhRbwwJf6FiZjcpCcJ1QRQJHbJjZ5"
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
