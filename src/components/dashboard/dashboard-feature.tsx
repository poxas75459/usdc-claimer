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
    "5u7mQsPN63dfDqtWbz5ycbBdcTpt2gn9HUTGqWLDXqWRYhz4bs6s6xDXDoPR9MuZZQLYoLikaNGQvmuuJkBQX1L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTox6RH5BLFAQFsnSSA3TdhK7UhhnziPHukeBwVR9p4E53C2DSrmEFs4Gn2JMXHiRcqo4TX5modbXg9VHQ8Lmiz",
  "key1": "5fmiuvWCcpqZ1C5woNx9S13aKmbmxJmz3jXxMxW6dkWdUzhLxnvSt9ZzrTf1SB9jCbu8QiM7chRfip5sQTNCVnUh",
  "key2": "4Bf9nzsu4S9JgKZTECuKkRfCAsab4bM4eQ9wCPLRimhppZWf9xHHqVqeZWFScNZKb1z7ghrrGMjNXozN9tYaaYFL",
  "key3": "27qARwvgwxY4Wwax6CjgEGtPTiKQr1DffKmJ1eeDhwhCmsv64J4zESywXrw1JnRrrbncDy8M6A6TVvuxwcckprhn",
  "key4": "32KXaJpe2JgMYzrwMwCcbjrvTGe5ff28QiU45msYvArd7WYnDAgMFgmTHKH4gSy4kekXuQF63VYsHrceKJK11eYu",
  "key5": "58xtxmnuMPXcUxchod5xboeMi4GEhi9dYN8pTbHuC1H2j4o2VPBr3GZMTSaU5c8CUVrZoPW4oeLRpRnmkxFaRoNM",
  "key6": "Hm99JA17X37u8waKwLArW6xQgtrA7gmpuc28sRnTtbBGDHqPtzNnotcXRFLperXE7tcUbHLBQz9LweeBamEk8UF",
  "key7": "3QaCUFXfHpTiekU23Tj528tcxboyqcGoZkhqJ4HsQLX5fyWqiA88kHvMRZpnoTJffZ1Y9HgT6qy7d3nDuYSCvJHv",
  "key8": "5AkBc4ENMfadmSFfEqZszfhWVky8t79eYMn623pSgGaLvjpDNzdUUSSkBZW6JsMoNNWYKxWkNVsqWfqum25bRQjR",
  "key9": "5ayg2JsiTN96mZn4nt6fcDmtaic3A8UqBW8bXCMZPDgoAVKA6ynk8AihoAkb3GDp3MhsaHaPMD6WQwFbrXkYEit5",
  "key10": "CUJFppNMtbedFvK2V9f3Ly56MfL2rMx88BArrRyrrdbWva3mP4MZTMw8asjkhAR3KiY15BjFXrDGMjNyfofJgGt",
  "key11": "2ULguJTazqzrEnF7LRYHA6Zk1692TzPB927VihemSzL4X8Evw7rbhTwziSCcApSFkiEkwwHCKkvJPEJD91ba5vYF",
  "key12": "67B5E4s38NwzWJu5UcjKDfTukjsYePq2bVwSR2igTc1KZrkFivoidGDonAtUFB62wLaf2kv4QqLTcDEKMeoLW4y6",
  "key13": "3i1xzKck449jd49EfyD2wxKF9CR3CaPYovzc1UE3p7n6JdZVVFs1ag9v6JziGhnut5Y2RASyCHWYcKEP4uVVGjhb",
  "key14": "ebJQhYjwVQ91ofbVb3AyhY5bjjrGFy4w1ByJt7cSsRqvbmPh5TMxQ7LHDpfZN4Zw1fsvTt2tLAR7jhapKbo6DCr",
  "key15": "2guumZ73wpFsMc4E5dXj15kDJa2DAabE34gQFC3XQqR7M1wtTVttK12h4ShTnE5dN8xXijS3CoxGbSJyioDWTvYv",
  "key16": "2TKQrS9LBKg94X6mCjcdTcYoRC4RZZJVswbkpLqDeBAq7DWDqEksenfFJyHPGH2HAv8h7ZeEs8QxQ1E48Sayzek9",
  "key17": "3cVVE1YAQPK6T5iNQ1STyfW3iFaBoSN7BSYxt18JNv7yZrp29aB3MSg8Qy5EEzm3oteXdBN9c9HUZHaERBHNxLkE",
  "key18": "41P17ncQduzSTuncYB55MdRxt6qN8kM3P7qnBsfPe2MKJHu1XJvwZrDYu3snmbN17AwoUkXsgeCDXU6qfeJZt8zS",
  "key19": "3bbNybuQqQhMmD2y6aK6uqWyt6NDeP7qSpH9uBeZ6LXi7PZyRTLb2sAikEuuGi6BvuLJHYuLtvvSjRcAX6NApcxe",
  "key20": "5LshGosUsPMuXZcxdoAN3sxz8ih5oZw4TGzfB1fhVeRShTeCgXQ5aMRxd91Y9JZ61A4NjSFwF1dNNKioSvseV54b",
  "key21": "53Hn1GTKvntryhSTbpV8pFnBFnBFxzEdGxrnKtz9vGWsxTLzFfEmujQ4qfBQ4oBkf46A7XqjvMPcdp7JcFceo8yJ",
  "key22": "3DNGcdqyNViBnVVbhEszfArp64hRDJNbC9pchnZdiQe3mHaC9riwju2gAtsipjQ2gqDBPCWHaDcwv6336UaBFHYa",
  "key23": "6QRcdufaadna7JCGGZLJpHEFa6Gbk11jDgKLZtK6Bzc26QfnRH5scFPhK9rx23vcdEZ5SkcnEyr2MSK1QXD2pzw",
  "key24": "528k75vJnpeEzuMs9xpdXCcffPBtocgHgL2Amk3AEJKyoiHUQQYwVaohCMpemNiEt7WrF6HeQ89ZXqMdNHLNDy7Q",
  "key25": "2HsrxWtDbm2QPWup6mWELfp8Ucfnv29faJ6fCTqt2V1AgBKMWnqRqMpvMKkXknaMmGRe4NTyVjnd8nAGt5sXgRrx",
  "key26": "2kfWBVF93B9gPnNWzpPxpgXJ1CgA3G6Fh3kMD2HPVFzj6LDcLbgab6UwXcjnasA1qoEoRt8LHXS8zh1meEqLXCUW",
  "key27": "3PnbTf4jCKfxvyzBnmBfqaKSBjAsZQ9wPd9RNxgCEm589h3S6boayiJok6FSEmKsjEhFKuo7bPutNVh2phi3YgAf",
  "key28": "65ehFeiBzxRCN8d2JmbVotKFoFYPPkwbYJFxPhcAHnNpjoTN6gEexo3MvHUjXrGWwaBwcLh6m6UyKgo9MsAnJs5T",
  "key29": "mKXcAQUrsjJYGyocrtHMPRSzvCXsEhvTiNMvg1uGrdxHm1JhoRoLYV8cdV4rDMkPzahxU4TPrijeFVytWeKrXRZ",
  "key30": "5A7PTNpjtY2weceiKus3Cpp6459WdcsjteXGi94mKKge8hFTJuGPF75YKB4Zsuj95bxE58NMqNDCcReySHrepTzQ",
  "key31": "Rhu5AkjQDbrmRczwYeTdh2dv1ZfYh6dqdDDwxL3SkWEcxDz1eTPntLgDGkS6577CYh2KTgeWkQaBHXGiGk1gsGE"
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
