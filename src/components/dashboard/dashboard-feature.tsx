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
    "xoR4aXS5eSnyaNDGMByDKeTUc5hQFj8QkmwGaA8dUSWEgeCzg31NREvTujru98Ej3AyJGhTzrsaAfhaTZKX16V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C6CysxarxV31Pe6MsFyw7P7SgAgK8KdxhUSx52t5nkwmeBcibPMcXow1Phk28VZWsZQydmnaBrxPBv5XXp1MrgJ",
  "key1": "5a7XvAe9Cj9vSXV9Zgi8YefFu4s2fUiLoK4a7Rs8Bq6ghuFuxDs5Rfh3ToRrZva7KuNLkktgcHDp42AvJ2iKp7Db",
  "key2": "2jaaLCumc34yraUgKrTupcAe3GwqjixeGwwUVLdfECi2pCoagSrWkAutu6CmEJMPXsmm258W1W93VswpkjtBv9kP",
  "key3": "4Jdc34n9DsinALJ2dqjm4JGZaG6NPEkDFkhzw9zHqwtGXfWoxF1gJCVq81NueWN9vaRPuwT9giHgx1tNVXKvM3QM",
  "key4": "474d6yMGWEDvD6nnYPZniPZAAAGGtrGPuHUsqqZm9kXW86zHdLQbbqAjKFFFirML3MR3bxMpQnaoxeTYujv7VdqN",
  "key5": "4eqU5EJ8aL4i7DSqZqRGNMEAgHDA9jripNMpTUaxWi259eQvEYcZqhVGL2ipSGp2T9vFv7HaYm6dnftyDbwY4kwm",
  "key6": "JvfMkEZDjwrA9urgKeP6cszdLZb4E9yB2DMan4Wo7YqafMC9wqE93DkuVyv7QgsHtFXMBnX4RqsBighhHTpqqtb",
  "key7": "5Ep2kKzG6Q31qX1rw45xS8BsMkjKBqRfnddJvxeXxcpemBSgwo2Ny5c2cdVp8HDvfHEu6yYRVupRrR4wDvDMQQDN",
  "key8": "5aFSu5nEQYXyrtverFYY8s3knVuqgtH5F4A89oBkNvXjqZaDJ5MHdnLisR1w5zeB4bGqwbJX3bf2DJamLwZg8Kf9",
  "key9": "3YNEkgBbAJ2xJvHSdj5wv4WZjv71pnMebPCSz8DKNVx92Gzk4fpsp6CxbNcTouzGkPXHmkLnNsWVBS7RQKWXbh1D",
  "key10": "418j3zkAYwP7zwpSbGmgNL4oEE7T8S8wPraCY5KCsH3zzijEjmc8xEUfDjFLwfA3unrXeoDGtcQ84aqP7Y1oarS5",
  "key11": "UHzE1qmq1T95Werm4ixNg37HSp2UdDxgqPDXD7vQ7434obnaMKA8y96p1pk2P4GH5rbK3dEwwiBkTv3jBzM4weT",
  "key12": "4gdfJbDT9FdP1UzmH5bAXJvNGVmZ8ux1UFNbMaNev2pCZ7oFcv733qAv2MhfYfJ5pPLXu2vLAfn3ESv8U5D16pQN",
  "key13": "2P3McA5DDAYGuTEt3pfcrJakjwXsaL3DrhYHhQfo8jiMNJLc4AaRyJNU9UCo3jgkLmCo3ZYfzv8gbnsYupdVVEiE",
  "key14": "cX5auMn8m8NnpGEyJ5VwetinBH9wywxFBqHhrAADAHwzh5zgUgpGQVmi4CXc9PHbbK7Mwq9aQC9kigXqDdA4bP6",
  "key15": "4UxEm53wQues4dhecXf334XipBgHzkybZwi73D8ZByKnyCVj944L31XwRDpT7k7UkrooW8HBAwn5KKzh73gApWk5",
  "key16": "v2GcALrbuzuBG8ScWxh74LfHqTn2NvcKzefwDUiUfJh75mDfUZwruodxchuYcc4ZbJCJtPPiKun9CdbdtmAe8Cp",
  "key17": "qmtyzqHUoenJfCD4j3Fm1NSMevbBsRn1cj7KH8SjmSitFwYCLv5HaXjwtPFf8hjTJPpAZBFKXasWfSEGrDECqy5",
  "key18": "NzEncYkjMSn1rB2Utbwov7jzLEG3EZWVeX9cKXuRTiCPbEZmFMfohPVwnE75D1pphiZo58ckHE3qAdwpPqmYmeZ",
  "key19": "5S92vfKYFWkXWTJieUchnM4TfF3EMjE5MyQXuQkrq4j4haU9WRRkmHbZzHDMb2WUR1U4a3RNHtqXtQxhXzvNvnvt",
  "key20": "3Nhkt3SoWBo6cd8nF4DkBDUee6eY6YWUMdayHBcNNnngQ6J8bym57cd5GmUK158K7nX7wPZaKqCjzEwFBSo1vdBH",
  "key21": "56SGeyMNUEBiJyT8JqaLBvPoukmbCa2JhHEJ5rh2ehThButC1MJfCowq85v1fNZTxhXWFrXU2UNBh94wUGRZoRCp",
  "key22": "5LrcekEHUmpiKpagKZZDsWR9A4Pxj3Dn8mGDY4vpyS7wsUTak4KBfRqeSemHjLt7jJSYninMB1nsC5YKa3QPANuV",
  "key23": "4kJTcyP9eycQLBzmJMRmsdycy48cAqbYjMpqVpvwXHiUHjJoa8DdtP1YFUNbbkHuAvf87JDYMifFTQugwCUria9g",
  "key24": "2NcYYQFLzWa2gjUW1BGR2BbEKzoqU4W7vTf8F8YUPRpmNmX1D5MHPYDudYyCCV8t9iw5hqbipdCCiCF8PrgCaU58",
  "key25": "2Lrt2LT6Rfeur35bR7vuHah2gz7dak78PfsU7ozxZsZGq7Uz2QjGbK5qoBPhVtkAhkjD8FYAYX7gmqXtZSUkCQQt",
  "key26": "4cR7xx3rv8WhpaPDnVbxaPm8WuyP1eq2A1qVA1U9iYMRYmpzg1dgXLQLnbAajk1EDiWBjNpzMxp27oK4nempWoND",
  "key27": "3TwyoN7o5prSTpojQ87kEeMWG8gH6Y2rZgjYUwq2CmayVNTiaNjfB72dQYnMu8Er54DjoC4urnWcQgvKS1psH5DC",
  "key28": "2qQK4t6F99b94etneGSi9fT4jptxPjzdNYEFVwQBg2yNswUZc4Eh5z9JRzRu1aGo6pfq99TufmysTqKo5BHTCjth",
  "key29": "3EhzsiSAUT4D8dYaaJkpcm51pcgNPQCEnorbGMyk2JdYKQFcUgfjfmxoj7idToCtcEfumWySzs9QagggAfGT9yoc",
  "key30": "3hjQ8ckayVtfkxfEyXFxezYLU61EeYtW8YT8WaRxfzQiEtGCQWNZj2LvCMj7NhpY9knHZJQ47sPJUSLFoaknDLF5",
  "key31": "5KtMH3Y4Xh5N2oDwQqvqwvCx96bDLc3g9kYVgHikPQw394ftSRbgyLUQcc9gnNqch4v59pH6j2BmpD3mgaKJQgfb",
  "key32": "2K1QQXnv7UCLAExkM1znk3JQTwXcSMDB1V1Eqdpqqf4b65ePgffYZSTxUd7vj26ixTSMHd3hWsRXRNiyD423CygG",
  "key33": "5zJVqYjpgwEjj7YXS1TBD7qED1yasRH1LKdtt4T7vZgGpJzRSgBmvBjxUeYPojHPsvbfjPbW8jSkjiLw142Eyqv2"
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
