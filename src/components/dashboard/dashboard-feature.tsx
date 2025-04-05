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
    "noSQuvgbXX2eTTHqADibDt1ADA7d161VQBgvB3z32HWdpsEk8mogZUSCEzQxRUu9dxqgXyNKJEwfDhXowUd5QFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N92MVBkmNBurHQxkipt4JCL9UK59of3GJrXZBnaQWnrYQh9k7n4MKLRgJFRJEHqf6uN6zvjtXKZWrFNcvrpwKxq",
  "key1": "3QiN2hi7SwpwLUoXkmUjW3ni5ZkxnhHrWMMiuuR2MjF1vyXHgG19UYHR1hjfNpa6PnUBXoehjUPpM88pGaptyJ3n",
  "key2": "5hvv1rcGjdX1gqaLPChaa5Jj2zEBYfcVskJkn6xTByfkfPzkpHtcaoQbFpSRkKrcXDmDJ4MLNxsNbFpu8dwfRQHD",
  "key3": "4FJD7BgarDB8ZHzeMRX64QVuZT5MSb23CZkDfL362AFZwZc4S3VksFZQWHeWp3f3fRSbeSK8REribZPSbdd3UBKL",
  "key4": "k64qsb3AVZHswKTkzAwiuaHhbi62vRxpXPMbRizwyU24pdVrenEVmN1bzw6oKRd5h2bTQ17S6u3mnGuEhhvLhzu",
  "key5": "4HwgUqh4cEKY6ZvdcenD5pVfFgKo86nA2tApk1gfyjFAgvXvaywCk8swM5sbD9npU9mkQpq7ToGg3imcitHcjRTL",
  "key6": "585dkwp6Go5ya2Lg8r9oYqSJXr15hF9SqbcqVeVdGKSQmc9pg4YLbNG936MD5ccgWTvKDSyUyNWcLsJ7UqV65TGJ",
  "key7": "4nY3ZXBHsc4uVhBGWsCYjiq27S2x23HvsQQA8EdLgDeCtVSe3pCGFgNFvr8ZeZ7n7MQmc93uSxSLXBQf5m2zQdKT",
  "key8": "CCPpufuJJ8atuYR2CgiRX5pEXSKy7HCWV2ZMUuKGQxS7SXjaHHWFbWJGY4XXFHpubTBJZvG5rakN55TQ5MyBkEe",
  "key9": "EwgtjoQbM41gGad1dg1sZ4paPtAWiADzYen2r5J9Gc6Mr6jtYdEQ6h3VM2Nc9xgCs8TzS2tyQbw6oHYLUrM1SkF",
  "key10": "5QW3NH7FoCH4MfDQFjThVkHxN69wPM786aWxERmCPHkygg4cCzMdaEW1SizYdbnU1nxrWCAZ73zVMCYzgeeSVaMJ",
  "key11": "2coLZdeaHhDBDdBk57BMTxDV7cuR5KKeedFuLLDo9aSBTsgmwhuXhsSVjvw3NiC77WpbG6Cv84pbxVj1QNDTiJhf",
  "key12": "5JEiFNx4MKZKC7feoiptZyJP4d4R8SaeULwpy99E28B1ghZirswUk43KwXvySoGZMFSEsHvsyNpAA15KVAJCd4pM",
  "key13": "3ohXLsQB1auqAZRCVmzNHf7vA2tZeDqo6CLvMmfKixLYrWgsmNQ25w6bJSeiqVFQJYvaSAVMQkKrwHz2jcQFsxse",
  "key14": "5F1BJeqgCgmB9CT6p2wCpprWVMXKUzDzwy3c6NxUh144GZc55uHwNw19DPCKgSWW7TDqTZgGqDPBEqTD8fynSnno",
  "key15": "56hatAAG87pVm4magW6HeZgRvzoybxymgKFQbFhCgz9kW5YpShGECyERfn8QNFLzg7oGdNSnGaKTGKeHiW5z3s7v",
  "key16": "5P1EfpH16mYywhYZzGSNbep3QL6tVwwDKQsGDPL5pMA6WAA9FSYPAHb4qmBNNz2U3wsbH3wKiuhTLdDn28EQ88gN",
  "key17": "2fBAw6jMTdkeoWSduvrYovf3rXDw6Zk6u2MFpmfJE87kEjEcyzm7sVNF72teJoAUNjL9jHtRyYKNML9wgmSMtx3N",
  "key18": "3QavZygeNTaovzn5FgGXYwKP6Ba9apkjhJDyMwfVdeR1amTLKcCWY7uNQzHTm7VQuQ2n5ffCgwrbndSUipWpMfqE",
  "key19": "YxDMsGWKRWmqh135ri6fGVrWCDQjPbsu8jCpEk1c73qnBFLMbWhHkk8U7gj1KHqzjA2rsDipjmCPJMa7kVGmtiS",
  "key20": "5c3rBzuyqghGNNT7rom8C7xhyt2s7WGnrhiPiEENwiuNsDPNJVK8S7m2is9YrTmkRmoMAwnKUVbAFSkQJxDhCaAF",
  "key21": "DkTEp6VgEkJZSKmm9v3vdosvT6bWJrxXj26ixhawZXrEzHkvcMgxohigYwJxQc5HLxVPJjc4KnwKupNBxv95TCh",
  "key22": "5rFGVAkTJnkfcCBnGUBZbUpfYbGQBt71oun8hNHE2cqTuW1peZJLQvnRQqXT8w91f7VvRmHA6yZu31Yk9XoYqeFp",
  "key23": "24LnqkDGCJVK5a1KkEbrdFr8jUhdtqWvxTaZmJan8vX2UniFVDkiyNr9cPF9EwPoi3s25GsdSkXgQuf1zEyMUHKX",
  "key24": "otv1HAdgCrkA8oSQheJ9oCeZMK7iKGAreFrTyAQtTdeheYHK3ncVq6yf24g4aYGwwkvgX85p67Zyc5a6zxTabbd",
  "key25": "46RHuocaaA4eL5PNCA9nZregjWiX1h2pfarQPrCos8w9iMWW6fJKjVDnYya9gnAaQDsKLaAymLwMtKw4WeKG851v",
  "key26": "54Bpja5XudPAz9W7V8orvHky6Gn2qjJNnX6RPYwEJBDCjViXNe4U7kedjkYE2mUc9CKZzq7hiSL4YRzur6JTEEw6",
  "key27": "2qusdBDXAsP4abtow89q1RviRRuwH5TaUvxnK45TY8qrrupeVgYda8bxeu7Z6T8QLxFCK3Sk5E4hjvMaEYzWBjjE",
  "key28": "5nvso7r8f2dQL1fhGtUEmNYBPswtd3MvzrhxhEKzaVpHEWvaGsVL5hwsz9AcNTdD2UpgwLhcAXKepA813bHMnPY9",
  "key29": "iraamejES4eVb9GxsYVxoWL3xhzc9mM94CES6XrsGEKJQDeBE2fcHJUGi81pUsVEx1gtTnz8X9oVhguBLKyjVaJ",
  "key30": "27dSeHmKu1ALXVv2Fydd5PWp712fayrzdqMvTCE7J8Z5Yy9yhyVB1DV7QbzPSparqL6y4bUVFuwJJtgxqiPees3m",
  "key31": "293ov6mrxC6jMkStHk9mWM48qoyao58WQvH56jAXtR5HYomemCT5KuANfJvLyHGAMAsWG3U1uGA3DymhYk3xxe4o",
  "key32": "4dE3Hn4HVT5HQvpeU51qwpMYzfd9zCd6VhGnUf4Jir5P55qVuw3KmvHEv9en7zSFkYwJQ8L2LheBAdsZZRwT4Ndh",
  "key33": "5ML4eg2uhBsBVQdLYC32DwH7Bt72Y8az6UVUZkhGD5cARCtwy3jLU7f66iSm8avU6jjzFsjQokwRh7bK8idF1L2p",
  "key34": "2Yv4HEdUnduaAj7MBnx3oQes3NX5aE6Hja1t9Nwnv6otHRXEGKTPivZRGrohdkXKsBifoesmdocwYyhRU1bAfPH2",
  "key35": "4RjZacXsvFjnht7x5R2EkRKMDQiHa6MwMib5fARF9bqJ9CxmpkaRvhWT76jajh2HAk3nRh1A6oDieBgn4jJjPzsb",
  "key36": "3hxL5L2zr1N1pKrEToDGi8HFrGxxT66Nb2VJjJwkHtQwtYwZ33ddeAHS6wuTLtp1QiBUUpy6Vq9BTpR2RYAs28nn",
  "key37": "2jMWQN4gi9GQMTJ61bA1dBaWry31vqweueMsNaqwcJtP9cvLLjBhXvCxPvro18N5uq3ZmtTMs8vUZMSKRh3FMp6a"
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
