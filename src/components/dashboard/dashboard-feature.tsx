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
    "67SWmdxJq3pyskgstHzKYEh8Cz6o55WHRcy9wMRvkSTqJmk4oTARZQgipqgfpua9J5w1vRUznYR4oWjrgR4n2Ggs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRoarpE24r5sxVf4rzjeJBep2NgxUtEdNTSzgG2VL4bhhReSZVxQ9o11edwatC6HeKfKiXeyzkZUndpQKnfAN16",
  "key1": "2aRmLKvs9kFoHvnmpVAtZjnADD6XKH5ARdi3rDARcrNhpKgUd9rVC2w1oDSCZ26UtgD15hHNWft58DgrTcgbu2sh",
  "key2": "4TkuQZdkYpxv4iMPANsxXaqPB7d8qiYuQYLNwWwbALhhinCY3k9a2MjxPHynxEvnNmvy28RebVpp7DKKEBZXxaCS",
  "key3": "KUbqsNHatESqW9Tz2X9C5sdfRGZukMaKiD1F1aA3XXq6YgjsSxT1evx5EE4P23ePPjPq7nsLmaQeJL8VpgACXrP",
  "key4": "Gz7xPsnQK95HLL8XkCAQJC6zjXAuMXwDbcWup8tLRRGCGZZPDoW7nMFmgmJvzG3dS4hb6P1XYT2u5bbNVnAPiWf",
  "key5": "28mQJVmHPZafjY8fX4RBPWB2FVNtyzwGBLEPw7Up6PEwif9hWBVXmi6FjQwhNkZbonYtzxE4bmt8B8WEryLe41nU",
  "key6": "65txZLmwcN8hwPqBxUytrDhkE6WfucwV5Z3CmaFCHuACSMdZPLrYGVT7KtBsCWCj15u2ZMwPxaCpEC3nvCxMmrER",
  "key7": "61Ar1KWh1Tgry6NVjBTXKkWa1GzV7ZyTrv29J8CSgDBNJyxQp9a1GrRc8VatF8PVxX5tRTTczrTw7rkvqVHTzDCB",
  "key8": "2yUked4GNieL6fTWkD2DwirsxUMavgLj3xBW7j3HRjx4G3ZuQvBt3tpNpmrjvAyCa9wwECr4YMXWfE8pXu2iHccB",
  "key9": "c2wrA7bDa8yL7YQVBfWUuecepAKor1y5f7v5nUGb1NxyUHayaVkm8LM3SAsSxF4UbybYzfA4FYqQpFLrfr1CCVv",
  "key10": "4hJYEgU9Z38RvWRziL3vJEJ5sAryJa9yQB31ucCaatZmqZTHzZhuWHiap2aY63jen5WeyGxHvDn4AEeqcFGZWgKA",
  "key11": "4WnpZLXvNpq3URyWCPBfrGQqPCegKTL6V65HKMrwtoRqBtZ72RVfrmedRZsmKGmbSJZoHGpvWaG8LXnVMpvNu7PL",
  "key12": "4GLkGJfdU5f3cW1cLdX5DiM6Dq6wGHLmgQNy5hnDajg31J4fw9PjDUeUUc9UM4rMggEDakYJ54CEpvymBwC3SKdH",
  "key13": "272xPNrRKvEo94qufs1QHvAoYsuEiJwoqHPfksEjbBThw6ydVDouPzeUZx6pHeGW9T383z7k3RyaUEmz5N5SAdAU",
  "key14": "6gyCexVVvpy1yotv4Fz5Li66xZQAbMcm8zYqcnTFZ24isMuefbXHRkEv7Wex9s8wgep7Emg1yFD4xpCM8ztH6TB",
  "key15": "4iWmePYnkgLdAP3ereGzkooSzwQygkJ9teiuf2rmndFHViQzhmF1cUqcLWEZFs5EEpGdFzfntt7NvYUp3H4syREE",
  "key16": "4NLyWM9HggFSzWdjewGBg7ubcgmTJ7vmqxMweasR6fpzSfw2rEyefTZ7T9kcND8FfB6mWroydmBzqES1Fcs6zGXT",
  "key17": "4EB9bxso2JpW9Tdu3Yrm5y1LJ4BQmvRPgByGrfDjDezjtVwZCrJCoVzUU7rotpXdbT3t3e43E1vmkm1ALTKw1477",
  "key18": "2xQjWQFeRWVif6XB3eScwYSR3H4MgDRznFraTSsR5Mwqz9GFrK1VaxYov2TaGE5n6qD4SQu8zQg67VhMWxZXav3s",
  "key19": "4uQamuUmw3sEuTxR4B7ACRM7S7rHpYc3WaswR9vFCVJYHdPLn3Egts6dj3bCAqfWBjL7wSXcXhetDveDivFMESd5",
  "key20": "4MTM7mxr4WWVuJbeb7p7LJNB6G5WL3jkMqXUtR2ADz8RQ45g2YqoUFYVd43JJ6WeURZNNe6pB5BW11y1h7zNt83M",
  "key21": "49wrUBu1tUjBgnN1Xsk3SEZSChrhAd54Tz3RYkzcrW5FvDB4CTyWdoexFphp7mrSEER1Y7AQ2bRpeU9twh633MH3",
  "key22": "53HcoPt29geaEmuqfQVqB7ZnJ3uBxJKNPKcs5nyrbPa6XshZ4s9VHvKTH45cHXHuKCgDtRMi9gvtB4PAVczyASW1",
  "key23": "4emxv4AHGFhCbdq6x8Qs7hUy7rQGtGdbxe742idRXaGZyrX7Lu13VmHrGBVqbJU13pQm8nEWewjATfeKG92fHDkR",
  "key24": "3jhHT2nD8uUAvZYTR5azcpZPYzfsqTi5Hd3b2iFJkNKxVJVXkWzsFSNG9BUeSh8rzYwNkVwxQzSvZXtCkKPgguHo",
  "key25": "3fQ3u9wNvwjy3ikwbSibBAFU1tmfbNX4c7MJG9Py7pmQSQ1KVzZQVX4CMNwBTcnGiv8cUQB8NBkUdD4bAUEMgbNT",
  "key26": "D1tjs3Vx9TSWE7tEsJYM79X82MdKd4jXb8wQkiymUsk9ZNRhnMe61XquP45NUWNPorKZkJCCx29nm55stEZWYvK",
  "key27": "21YJ6U6e8tDNQbUAKgQ4xDpPxv1DrrMyFvtPTGZmnCsMpTA8UAeDnCv4oHJjP7pyn68vNroyt6xbUL6Skrd8rwnh",
  "key28": "2npuAyJK2gP4ThQ7eqR9qQsVnmE62EWzWYkKQjHuRmAM5PFW4D6Hib6gxrhD2RbF3w4MRpV9oe4UF2D8W6g6eCRH",
  "key29": "W9XjnxiaDc1pcVSHzSWYidytrLKRX2SEnqRGpGbtxTnSSS6CS26SF9CjiRNXoQcBf5psF6frRNAnmvtnmd1tv4u",
  "key30": "2r7rp7e96MWtDB2oMRNc85miRNoXPEYb2k9VZ3YKqqUu28nASj36cgmfreuufSxrBPEWLctH6N441ZisBTGVVf5k",
  "key31": "5yWHQ47ooAdTkkyCdnUMHp34gEg91YzpRcqqaoUKoSj8sZLD1fug41NDbzj7JcwSBzwFLiLD2vd3Nx9SpKsWWL1r",
  "key32": "mxmZwwjEaFSG8NDu5MuqvgmnRP7R2XmGvXP4QQUiQXG6Ei4UqMdGjVM6131D8Vxm27DKv9QQMbdMDZvRTYtc15G"
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
