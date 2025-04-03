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
    "4eHFqw7PG686Lf3XyXtw5X68NsSJNVFmnpVLuKmTFhEXKHnGNavWgxpuoFqLVvjQktgoZ6igaZXGqcknEQ2esicM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5bDxSy9DwMjVJhZ7v1d9FipYFjA3pvVTqawoVt7K1BHEkU85nLwe1qJDSwDmKZChcb1UVbBAFd5ijetxaamYDy",
  "key1": "5dvrC55Zwq2rSCqmAfeoP64No7vV84rM3X56bqZvsrDeEotqAABx4Gb9pcAP6CLfqYL3vQcfrWPJXfMcZaDjCQ9m",
  "key2": "42AKNX5ZWYAJRP4b4uU2xceYu7KyF3spApGEVued61BVCrfS4fracEoZomXKNgqx1o7eTnHmvjkyeNdsLvtkxUsN",
  "key3": "25Lqo5hh7CyadDTVgan6xXphHTwqNkcUL6SmGBF2W4iK6x1qWDxYaMw6DMdtFL7ByhygaQPB4FadUsGeDNxz1oC1",
  "key4": "3p8VU2vCEKC4GYRQxcyb5oaNJyMFg7gK9JDBvtVy66czb76LWmXVY22MAtpY2HoLjPuFmGbhCP4T49KR88mmUoJA",
  "key5": "3izaWGYbr3CWezBoL1b4YWvoUHBfbe46CW2wRAVqVicxScykUVSaTS2ocbB5Pnkyrva5hbJC44d39NRh4nH8Jmfv",
  "key6": "22JZ96ttZ55EzMszy2tuh72iPbqwkrYtK7GB9hHcPha3ZfbCyrCM1NwhAEzXKtT7uJ9mnWv81GQXKs8EPX8k2ehp",
  "key7": "4JMmbkJRN7wKU8EXGP7iQ4Cbca7AdKuZxgKBpnQnn6UbF4JzqxiTyyK4JrvHpXnbsZBY99Hjp7mVLH4SAQ8wFdQ8",
  "key8": "41dkoY1ZZyp54JT1FuqGhsiU16UfbVByhNiThK8ikge3Z1n2Prc6a24FLGCaBn6R9qK8GARo3j16MJ1REhxe3mZy",
  "key9": "3q1fkx7GX1zbySJNKuHiRmqswhwBXQRshnvudovbDGGkSprGnVQ1dKVvrXtX1wHj6m7EWQmui6epHhXViieh39Jp",
  "key10": "4pYyau7LiQBhWKhihZtoMrKJt4Hivb9YP5SvLJcoPbPZVd1xhQfvfPiHCSAwgkS1BUGoMAh8bxapRf6NLNVSNxK4",
  "key11": "5empW8w2umHFeUHYLoSSDK6qYsYZYmhoPknjFF2E5jvPyjbsNVNRVLn2EB6hdt2C5rc7sGtX4MT49Au4WTTpgJWY",
  "key12": "3Mb3TD9taKuSQXUbU6HodbybJSZXP75xbAE1cZLFXceRhPSiuBbryXn5di1CXxg59nY76azNCce52mtYYWmsJmaY",
  "key13": "5YPrWWdDBRKdQut6tiSUER1i3QJtbZZEpoXaapXAWoY45xtFLakbR8qV14FWGoQCMmoPL51rUy9X8PgYwjQUoP79",
  "key14": "2LWbFNPM1du2gXUzVt3WncysqKwkpYzDLE8zRoJnBpiwFCbNL2bn4dWJ7Y7oTsB3coqGntVE2HsVLFA9tCiFpHZg",
  "key15": "5yrF2Wa7CBMFkJTokQsE1iJ4otfHrLePNmjiW8pkf2mjgsh2JfrXxpM1HspAQax6XUq5EyhJzWcjbc92TbbzACwz",
  "key16": "59jc6yZPWqgiLq5Lj7kZvTSyKByiaW5hYuBDiWhhBcij18gQqjrGYTgBT9oTWA7gsDi29aZ1vMTMFLG35qhXhng5",
  "key17": "4swjqnXjCLwe9CPkgQNnwVeYPHeYijjxfWXYxvWfnd83C1SWzcs2DiCCXqcbJvtDnBCggJ5m6QK1dMBmMmvgaVfd",
  "key18": "3LivYkJZPbLj6aKc2KhFnyE4YqvNpk6ZoFAfKEf4vJSpyBqSVVjLCYpbadhiJ97oPuUTJxhZh3x8k8kVN2YqqHB4",
  "key19": "4BpYiwxnYZrSv6DEV5x1kuJpNMnMGdhHokwU6vTcJTqz8eLJQTJgj4ouSgom4LrdpgfcoNBCyoMNgxFi7u9zHT9D",
  "key20": "327eC9Aqe7KoZXPhEQCvSmuhSKK84ta562yANXAadFy9hAoEJsNaodnT6oxMob3fbYVZ9cya1wJQ8Mmsbm11wfp9",
  "key21": "4hjjCnSRYDvKmGcSyJB34dHTTHLR27Jrn8B52qu3ot5jaUor3APjpZWmff9SLTj1f17K1UBmkozAE9yLBaie4uRk",
  "key22": "5tDiZyg9KDxKbD27mvxksQGanEinS2qgo8J2nMy6q81fvniodWLLRTTAntEU93gXH37tRbDyPCgTNGCGKnTGrxAr",
  "key23": "4RQsk68ew8vX5dc1gbWgKKh9ZvaTQtN14oZ3Srn3LYN6Hk84dLTkXKLJCVrAGWSgCYoyoiHR2B6UApJt59gMj9PW",
  "key24": "2TnatGyuEMA3SNkVCpynFFZxoVTtovunX84ayVG725sxG387fJMgzTcFuLS7j5ALuxX1ceRNoUDccaz7Uar68Vpz",
  "key25": "4DEmGgkp2koUAitd6mxHX3FXtqZcWNYWu61BrJ7c4UHPcCPhXcF8MgNfDSbkVvyD53NnEacZsQ9fcDe8MZz5LNzY",
  "key26": "42FK5Sb7GBWubjPpxP5UAt35pLwhWSbQ6hiPVnfeP2U1XrBrxoYhzAGNBx8PSvtELuvE8tJCzWxv3qhfqsLpX79Q",
  "key27": "5grxcAVyEQXp4RgmDvUPVPSLCssZxJhA5UZgDcXVSf1Wg8P9yvCAKCTo1Qq6k3vMoxyrHEDyaN1EXvajcN3gSXE7",
  "key28": "5XqynuBqYhduZwRAJUMhQj5sJgyp6upYe2DYqMURPzCjSaSLR4cTeYQDwdnmntamkju6eXMDYMyrRzL3RK114bQc",
  "key29": "5VLvXg3dEbU24MKXYzpK2NX74x1VByqE9ePwDpiiCto4WULcmvp2iaVWDeBfHcHJjyLAVGY8aMHKqL11AzHomQjS",
  "key30": "3xHF9gN5kvmjuErzvih4Z47zLw33CgS632pB2hxQWUmZMtASUpcHpjvHGvs76KrXBcS426a5onjfR3TVTQEJdhmg",
  "key31": "2GW6fECGCQGLrMRw8yqKRChZ14ZvNgHKPDDPQe2tXQDBWXW5duqDRXMC5fg3WexHJbs19DzQoNDsayKisdk5V1WZ",
  "key32": "3M3SeoAPJQZuR575FghSqMZz9Jd8VddRY3M6oMD3F9FkKeiGqMtq4awsEKz8fr2KuMEcjaWdn5eYBBRXLuc4MxT6",
  "key33": "4Ct8Ub6YvvyN4BDLeozRgY3wAyn8UAJGrXu2FWHcEF1RNojUhbHNiiLs456W1osmiEfkWgVWcAH3awc2oiVAAMFg"
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
