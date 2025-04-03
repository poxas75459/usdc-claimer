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
    "57C9MwnoLD42Ru3F4cg7ABfQHeW4MswVa3v9fxKAJ4abY2j4fyMh1k5dwQrUHjn8ir6BEreFcUhzaQ3xu5CWu6vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqHdpRLiN7wLTHg3BjWJCnY66pee5ntCR1BAR14Hyrxfvmj8NMf3HwtV5nHhJpazLheDCD3kX81BP22qdMDUDx9",
  "key1": "5sZ6L3PpBMftPKP4AaiQDMfXTJGNFr1xzeb1SeGnu2jmWdcVRWgNEC5evbm6Szb9fooDfY3tPPqMTCXPo3J5svuA",
  "key2": "31obUP6smdCUss23VY73LoFgpZUu5QCY6KrgcjHU7RwoUDHE93UPxj4Y1zXfr5qgY5p9curkDsiaECDYMRkkn4xh",
  "key3": "3nExbBvHjwrPpdpwWmzQBLS9bZR2MZDH5ahJc3A5YQHskJgUoiRTcoFfw92bfrUCbD7Syo6JykRCLsi1ww3rPBKM",
  "key4": "3v94zGkzYwmoGNnCqvV7fqEZw4uJPzzxmxHWH1qbe8Z3BbJw8LTd9528qQzqVJCerQieBtPVfw3Dvy5jc2RLavmE",
  "key5": "5xbdsRfEn1K6c3GrKXGk4divJ1f17vEJybwU1yKV4C27GoL7iZ1VdxGrbGiaqY3FAT3o1L2dMXCgmhA9boL6CSTE",
  "key6": "HwMEMm7ALA9qS8NMrNwju86UXeTawANUfqfJGgZxNdfBxbhZzpMFR5DYc7bgJokRzPJuUgFUoPftJVPpRGgu4gT",
  "key7": "31eSsb6VRox5QUjkgpifyhAmiRdc1RH5JYpKo2N4FoRAZoKaeUmJVvEJut9pPLV3JDqSUrfekf6faGXhezfQeXNi",
  "key8": "2aPj1eS88jPDTSisJUK8akbGbFeeRB8iBTxaUfASqbdqQM12cWkjRgZ2GY12KwKZnyUiQn23XPzpzz8vpUrDEu2Z",
  "key9": "3z5wysnwzzXGHFP43BveGFhMnfWZw4WBJAeSsxKWhkTnNAvePJ7KUevprmbetvNfZp6St8JuU1oUZ9kvNp3tCxDA",
  "key10": "3ib3PR1npzoppwPxkqmNRE8wJabDXPYpstgrc8vyRiFkTS8RDSA8kW4aMnaM9MXZ4fTn5okHtqZH5r4nc2sdVZiA",
  "key11": "5UwpbnPtV8AQDkv6eoercySZALQnbkd36XHfZykyKziK87TwWBorUmRmzhsCPEdaJB6v6cVYdt3kY1BGi9HX3Q9Q",
  "key12": "3MsJzaB7Je6ERPSLPJ4Bc2gZwYcu5RS19WyniAGPbXHDdyTPBxoRp2gJ3ozsip8pvCydmjVWZ78sWSw46Aizxtnr",
  "key13": "45W6vhZLMSG4pv15bgAaPtb6MJm7gi1ew6gGBGvVGjFQ3uwhkD4zTCSpCXuFXY7Jk8EspLWo9Z6gcLxSdx1QXr9k",
  "key14": "4RUW1Dd1c1zZMtQnSdNkRzRwjPxqWeA99FeqbESYTzfLTyQn2XR4kbmJbXNHb9SfEgM9sfg1pYi2UQP8Wthzy5Cf",
  "key15": "4v5zEAsjqrqoKu5seC1uoaK8zkNLB8B5Batw8SqCj78zpGXLHdw7cJzghB9cfr5A32cWhkWBPb1NJqd6bRBkXJNA",
  "key16": "m4Se5v67axQYNFDAjW5LQHqKo6BTUBaTaDYL13jXnK3C7QXgdzuM7jMxCxCcNsSNS84c8pTL8Mpti9NLePmKurH",
  "key17": "CN5Zn5j5XtDuLQrE4X4CHcZruvsAegDkG8nje2VZx7J8vc1TfT374Lua7X7qC1MGDrHEzFPhhbTkxtjj8uR91r3",
  "key18": "29ffBbLUqxRZd7jaWYR5X18FL5Y4h2uaevkNgHy6LieoY3AsGSZU19RPBqWtS5dSX4XN2vGniuPGvrd1RptVfuKR",
  "key19": "4D1yP4yvcNJYw9DwMxGKAbRzzsJ655LxzTHAsq4HoFWsu7uD591zimwSCBGqRuky9Zxx84tNyoLF2SZQG7Z9H3VV",
  "key20": "TBKddh9PxGueTEGUaHJv5iuCFVLdUeStmRRCeCRXBao83XzLCnUQAGrbsuBABY9vxpn7ApGHML2moT4J976xoUn",
  "key21": "wZHGGQijRKuNRtm7XTHVjgu6mxyjpcSiBwuD7BL5WGQDdAaVMGaDVJxbmR95KdaNeD2yecByYpVQQS8PUYuFXUj",
  "key22": "5kzT2qQojMZJXrWKhzkEp1UcvM9hgE8n3puG9gT7FLi2v1xHAmPfm1MKfy9BDWWWS5w1e3Gu7KirLRzpr3V2op6E",
  "key23": "2nbKCnVzahDQ51bNCmY37hMk7AywrcQpignMCknYVXCknu8tuHCsbN6XS1PkpK4F26swvzEHwpGxtxGb8oNwxR3o",
  "key24": "222npXV6UsQUienoXKFjF93AW53qcgLiqDu8mWhiKwF87it4uupw4ADtBMqtCkE8362whDhrZ2YSKc8v7k1b8319",
  "key25": "2CDp7Q1dytDmbH4iiv3kf9owAXmqnDP9KeRWneCVn9kjq2xe7Rze8Fm87Tei1xJLKCvheie1TZfB8sdMY9G4GZSC",
  "key26": "5sfPnvNQL5fLZdK8HVPYyHc98Na4NuNvykVUbDfTRsSsDgTT2qmST3Jfkvq185QX26Jn72i2vYRz98Sbzk7NEsd3",
  "key27": "5zwsVVM24WGAXsZyAaTM85NLoU2XKNbK5TMgFVvKaNeTmL1DhWjurKSDiM66zyh3eL1Xr6FSwXidqs2qaGTQz95S",
  "key28": "3LV4Ey32eQePGCypQeFhCeuXdbAcWLXGG7BiLTXJGKTtTn6ZdMyhwwSqN6syb9TjP8wQs6M7eAneqLCP3iRZzMnU",
  "key29": "45kmjgQHrz5ZYwSqbaNu2zMQKRLiqpnYgwn22LpjUpPQr2fH76XvtC1kPFmmcUxx4y7Tb1BVUTiZVs1Y3JGvjrRt",
  "key30": "67XxctedPoEngNKucHngxaNU86CQfja6hesVTVTBNSZ4zsd2yiC2UHD58uTVsu96wC2yqPgBNWgMd6R7phW3PcHg",
  "key31": "2iy9CTzGz9PLCKNu7MvACs7tYjTNvc8bcf4QwihZ5advHeX9YDx4HEWLkpKdLAoAhqF5dx5hHqr6F2CsFPzdPB1J"
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
