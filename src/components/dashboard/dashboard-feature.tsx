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
    "S7edE3SMqFsrDkN6m54YtLaMW1iTqnCDmvmJEEvvi2vbv5htqqgAYx6YPifemKZN8t2MHsBogubJmG9RTUiUrZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3deVVAP2TB17vQG8zYdF1JoK6NyzSQrNH8p5AyvsLi47r5Xyu9qu5Eg9CAdntpRTuUY63tpE2rnCrpqky34DUPML",
  "key1": "5zhHwShN5LJ4xARtMYAH2dxcx6e1rU9Fwb62GUi5fQQMTURgNcEQjrBaNp63JxsvMmPX5geX1z1WczYQccfi8aUw",
  "key2": "5W2cJBYARi6tjVRsXwqY8Ys3nj4XUFus6FcCzrNPyrAS391pgnRfECegnrbdGjEhMVykgBSAFS6YYTQTQajB8fEX",
  "key3": "3CAeqxkFRSVy7PUHnVmknwiyEq3uVEG5nqQkr2vy5row2uB5pgrEzFFuJxxBSCgphFwkjqz7T42N3jV1fJNqDZKu",
  "key4": "NbmPQqyTL61pfSPPgHm1iZuCrSCiL8nQCAKf3uwKLXG2FsMA36FNJgrNdfzSvvka7MD2ochrAev3PYYtmcsa9MT",
  "key5": "2VTcxBXMfpkuw3KAynNSBAuERgRne8FLJ49DKXafTjxoKks1G4yBMzhFecMFYcVwTpGFyDgpdxmMZ7gKe88rKSEJ",
  "key6": "8tdhZiSNhTA4bsKW9hEanPVguniit7gi1o4DrbLJGyGqAoWdm8HrbwoWsWwXtnXML8i84JmDTbv8VXcuAsytoQB",
  "key7": "zBJCYmsZFc6whXL2rwPwUANHNrsKFMKg8rgxibguv954A8UZa5BVe6ZBZqun2XhH1G6qu4Q4Ne89nABbjcVkumG",
  "key8": "4y9qDWGXMgRoTnguyt1NWeXiuRC5Xv6hWY74yUmoFJdp4BgAZ4yS3TTaJVT4r8AKMzGzNfd54ir81urBLJ7Y2DRA",
  "key9": "5sCHdLVvg8GrZt7K61Nmc8n4kLzpFukqZwvFh16BWhqCbivQU8LWFuE98ZfBk2f41Z2Ei3uqZQ3LMSGhvfuPQZsA",
  "key10": "4DYF4bNbT3AHfLAWkaBqJUH83dyL8Zv3p6v1iCN7z9ofTVsMi3qd9pi3Y1KBdc6UZ3UHCeoqKtg1MrMo7edmG1yH",
  "key11": "2WtvzCTbkKv2LihmcQeYe63n5fEXsh2X6pVBFRn6yuCCLo689yTgRNBcf6ZEP8ia4soV7aTviWSAoNsHxHnQzpbj",
  "key12": "3pjFXKctsNxp56JGWUWT3KN2x19oAr2VK5P8MrMAJXPUWtXrfjaC5FFVBCEAnTE4LGehg9UTkBXKhgyscFQ1g68u",
  "key13": "4Qg514um6eoRy68WA2HNgAG2CSRB5tD7Z5XyKHmt6dsNazcU8vSq7ooAV5AhhLo4q5RFB1wfL9JNHHbn7vryaLKc",
  "key14": "5uiJ3m6MvcxyjTdrrxEcCjK5qNzmwgdSRPSCKTWyHeDBbDuo6Yh8vc7BsRewLQXQuGgYoujA3syfJeKSaFrgbbzC",
  "key15": "4XXS3yVBuBmnk18vrNVRNrKfUXXyVBiU6b3WADHh8SSFEbkEx98tkCT5Nninj5yYbXGaeNrmxu3n4HvJuS6ogj52",
  "key16": "5KYaccYTxqgYo5RD3Avr2MF8UTH9fQgAXeemJi4uYA76jUE7MNaKLGCFFrNKpJsFMBPRg9aAipCQh9jThDnruVXo",
  "key17": "3Ye1JAfaWh4wkx4rCmtfiJ9rFKrgouz4c11h82ea5Nyxuz4G7M2piZ6fHLPhcmQy311DwZPC9GF5xSb2nAcgsnzr",
  "key18": "2gJsUtziwffVBmraXMbSAtXjaErJGPHrZAxi5kxGFexQsRYfGDKx69AQsdDWBXmFvEMybKprpoRfjX1yMiKZG5t9",
  "key19": "2bd5nHodAQtV6HFp6sWrUKwZNKSu1Suy66HKiQQeztzBYpS18671iXTG359k6mDnKZ9meszbwDMkSxQ16SucPik7",
  "key20": "4qNpg5cK5sNxwP9F4bzF1ZV5gdC8aMwFAJ5VdBFvBP8GVPvMCF1VtdddBcQbGy9quSauuPSqtVPWfcq4iGZQJvv7",
  "key21": "3bDTGQSzKunL6wapx76AQ7k6AdEjk9buNfiLehBApeKbKwJQxHFpA3oqeKt52VqpVKqZM1hjiWEG4rdmX2sbN7V3",
  "key22": "XGtcph1h6MF5uTuUmz8hhexYzVX1sQZYrUo2ZJwTjRcu6mFHHmA9tZ7uyCzThNhnVehUdtV41wH6tmVmkKK2Aae",
  "key23": "2NHSQdbBdyfHYkRhDmgYLXrSSZMfDYuy8KhaMEMh17aLvhWoVb2LTPe3qx7sA4RWGJ4tWtQYJDoZVh1q64L6Lc2k",
  "key24": "4ttX7ABhoJH8sFdeHxrzzp2tU3kZmzYGGNhkr2d4yuJzgch1BmR5hgxZBRWFYj1NEC1bqtDJPSKELWmjoHj93Rzx",
  "key25": "5MQMUFEyFYoW5bHHc2pW4yD5g2FcEmWFwFAYxszAxoU1pHs87LPh7HyfgmwKnLBACZfpQtvfsX98qPKk1GPctEHe",
  "key26": "64DW7Ex2qhmP196BQVuYjc7yBbbghSeQ7BvagrTsHSHPAvdgWFYQNuqhRNJwRDBJY1WpfjtRkwKqoxWDNcUK8xGq",
  "key27": "2ubLETF7VpDoy49RSgL3jM8Jw4YSELVWQTFF3JuGDMaDZNbvnphxMfsE9qrai5tK4j9XjKjfA2Fq7BaGUro11gNm",
  "key28": "3Q3UDLCDcZvwUKYmpuzjG36JE79whU9Dbfb5vZ6nKsNrC25Yu2Zc7FkGR7kinsDBSc6tkLihaJpyHxoH5PMZ1LGF",
  "key29": "2M9hCVAwN6VvmgRfkMRS9mJTSwHmHDJ24kQBdJpLA73hEhikV1BwCt3WsHmhj87Ce88Rw1HquCMSBE9zxzgMXCXK",
  "key30": "3nZedjA6or5XEh6ieWLU5gK9r1bQ42FWG5oeu2cLZZYJyc1bDpAobQHqwAEYjNbHwi8EBKjcH7u19Vm4KPHypz8Y",
  "key31": "2z4A87G16UC7k9uztQcwseqTkm2uEvn1aZgq5t6rk7n41VGSJnDi37exU6xgP9ZRH7HrTnexSrABckn7twGBHz7w",
  "key32": "4krtGknKuHNrnsEKBQZmEsE8TGFkSCXV6CLRMFGWjSvKCV8K55o53FYReyTzqFuKt9sJi4zRDkK18GEMxbzFGHwT",
  "key33": "2kevMR2rjZseBNeobZBS8XoZuXP3Mi8NJgQjGpgEqHAeLgXNaxJDrBGkCnqn4gYARN4Bm9i2ZrQ3LiuGG2AcCcf",
  "key34": "kFe9m7Sb73ZmZNB8RwJQfAT4bWkWW8EyWLUhGP3XEsWrmv6wEzfG8wCoTXqxgCaYYf8YyY5bh2dBCvHUNCUURTz",
  "key35": "uWMtRdnzLBXZgDoR37z2xU6knvNetxw6Xwoa3tq18FaAyXw4U5kX2cY7y9DfvmNi3ePKFubqatX9DjS37JhUYAm",
  "key36": "2WWeThdLpCsjowjLzgL81GGsvcLsQ65EPzWqA6R86LCG5qTWizYFQhFg7YU1NWtm5QGy6AzJfE3G7YCr82bo9pJD",
  "key37": "3T6rxhW4YdQ3iftKKD8TFuDs2wEMZp2dKoHThjvEq5RKgioEkkXc1xjWci93qfr4D5H8ghV87xJ5WebnUNq7uKBh"
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
