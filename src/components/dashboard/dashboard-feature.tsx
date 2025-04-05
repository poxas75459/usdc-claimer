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
    "4EGp5EuxAJsPYZh6SF7ELxUjhKPMTfFdQoiUpBrCeyjRdX8Tv3DvxLJ8Q2mV3GocjPK4XdLXoZtSMRH3WDoNGFGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJe5NZNWGT8T4fUWQo65KAgyYJBNkA9aQ8i9SGPwCipMjqDZxAmBDexT5acEi2GK2zDkQ7zosqwQbBBh17yjgGm",
  "key1": "2gmremHwfQX6Ew6AEs9pguJ98CkWLqaQJ44GK7jfKrxwMqgWjPj6GfGavNctuPYGBdSzxThZuy5nQpfsKxGPZG65",
  "key2": "3JT5PVuzbiz8ZuBjcHjBwSQpq9upLbzAPqmFHKbjMYJtnBCZ9yXXRL28No1XX5LeQYBZXn9wkapR59K7UNnACmDf",
  "key3": "4VKExgQSgYKrFdfzkGgeHranRYhhP6CA5vesuEU7ZvBKocZMVEPYYEVWi2KfYWQBwa7wKockhYsWcV3FgEg3oo2g",
  "key4": "BKMt42DsRnmQwjjzuFWfLahAnNSvvNufBbzqUJah2gjKUFaY2bgRshS6QHePN23wucdFWm3oHJBQPiZHUj74Y6b",
  "key5": "4Me1yzwmmfuGQZdEWUVYK7jTdjPe1DxJNMg7U6eLNDUwz2mrhCCmVDdoA2ArKaLj4kzbCv8u99zc4DgTokZv3ZPX",
  "key6": "4dLxdrqcQUf1qbbqAD9ycu7s7Ebj1XwKM6dgSgvqFzVP3QkrGRWA2XPtaihz8rpKapKyHZu8cEAXUt3fArzd1Bts",
  "key7": "4G9cn4ryNUpW6C7sPcmAisr2Q463zqpQFhFtY96zgwUuuNUYaWjwGnbrXXd5khf68wvAnpDuDPpQayyXEkkzbhHS",
  "key8": "45VowCkdUAwcA4KicjQZxdht9PcHsFQQtqpHMQPfB8Wdowre9HMRHCGFBTtj5f1aL6LRQJYUuzUDoVZBxVYADAPf",
  "key9": "5iCXRbmNT7uQvdPuNbhj3MD5jf76Ts7cNVQxJJSyr91hoxJ7pmxPRjK4QTPJNyJLDmQuVTDtTx2pUStYYPgCJ9zU",
  "key10": "42QETbthKcgjomCxE6CvAsCwXsMwmumpeNg6VNNZ5p5SjwsdKyPmy49mBFepzKrAmrtcqwKx8fyvDxepchKAkTHw",
  "key11": "2bVPZBjUdmH7vEm9TPn9ctDDEydTGqkCjxuQZdvU6doTs9piD14FcsMbcBMdBJQwhbY3MrUaDGkFevA9q3M1xERr",
  "key12": "3nDN5oPpA6wqTbZmyDoTyjkxbszNAg122JaVvLGSwzm4Ern7Aa6oaq51ifZeozNAqDcGYr18XrPNCdHg6EXnWFUN",
  "key13": "4bViChBx9dGBYDPe93xEdCE1ty13rQvdwVtonxxVUKYhDnf4zB1pdUKQpLvfKDzCGZMBwbhffcg8GF5FTz6qoWa",
  "key14": "3eRhgKRGLftPRpeGdvQTw2U2JGsAroZvT4FuJdo68cJR5eYS3xUU697KCx1VAxAchQpjav5YzQMZxrLNn1dNywgc",
  "key15": "4pJpcqrUAiEU88gK6cCEorCVbHpjAKcp1mrQiobk9HZJEEGn5qg791XWRfzqeHPGV35mq8GDGLgii4eSb9kgiAYJ",
  "key16": "29jpAmrXgvXGCkywKvskddydsZNetqkExc8131roQFvZj7v1pwtHvpDJwmmtUTzFKc33iMHQPSa4uWtw2CxCzYFp",
  "key17": "31k2vbbQ5wvdhh4xaUJNNW8LEZwQRAVPA2U7gJExTYj39wuYjL8pwzWewehifLCCH5MeFPHdX7bybVpQhbaWSZk5",
  "key18": "297oXowYGdWHm8EKkaCk3o9NsdSYGt8ftVr8CZjpEtfkgAoNVsCCriKs4aJswpBKzfzecnzbdrFzYJZ5yN1Xx8rD",
  "key19": "2MHnVB9Fp1Md1VaBh5BKXjYURcAQBNPqo83D3JfVT494W7E8pTYPvjRvm2ksUZdEg5dDvoin1HwgSezfbgb3218c",
  "key20": "5nMKMyQ3dNfgSGpF7jedx2d6s7YkMgXKD6Af6TC3ysAsE37shyYX3DJXcZA9ovC3y5gi9zFcDGWZFop4cUEtD1Yr",
  "key21": "4EPKHDCB3hPQjk7KDZWp13bRguSBXUgrgLEgJqB42KnMZHkxS6MTAvrLQUwoSaaFntJWAVdcqRHSzMg4bxaqq7SD",
  "key22": "2ToyFvsevM2PVyNYybqLpj1sDAUb2hKGD3iFvHUscYpAAGoDa7h8tnREW6y5YLZ1QdpSEwWkq2XcwWSVi9rU3nyk",
  "key23": "66VqoDu7CaBQ1vKNq9SHqExMdTQpZYiPytaHxVQuy5RN1qR3HTaCg2NvzHhn2KBKGrU8N9PYqnvbP7jHEBLXJcnQ",
  "key24": "34oCi8WCC2uu3H5hTPS99c8fUoZi9NKwVG7up9mPujR8TmroApYuFDoQsfdTXw4ec46M2PuywpaaYkb9kk8zabsi",
  "key25": "5NvmmtnixZ1LUFJ1hZJyPVpgMWrEuuB4BDLB9WSkUdUrA5dZKmMctExTRW7iPgyRgStfSXPhXXjrf4THM5eyAHt9",
  "key26": "HBDmTRExR1JhECwBwXjR1hmLiEQ6VYAFkW7DNK3sjDijMHB25fP6Eh6TUcWJYXN2vVwUrJvKMBrxb5Hnau532xE",
  "key27": "512ibQGjMTjGm4NRK2Z6B9GjExM3CM9VrCH3tosoGPT6TuwRMiGHs3vLPGzKd4BPjAXpBSFnPjV8qznSZCmKwd88",
  "key28": "4RVBMaACLos2geZzc7RHpZM3Qg7q37BEEGDGgJtQ83AiqHgu73tkp9rR3RAhS4WiZosszabjxY4wNoK2Vy4VmXzM",
  "key29": "3FSWEoZgBABPUHg5VFoVNRbeTCZDujDzjj3C5gMfYzfXmaeG3DLXuBBAZKGqqJADfcLQeMGY2NabQJjCodDTExPw",
  "key30": "4AEoQesXVbR1cwg3DEcLQf1bp2TNz7NWbFiqTuJLJXxMfjx43GRVhsDykinYPu88kWp5xF9q8ocm38HjzuJ7xjfV",
  "key31": "ye1zA9RPgv97fsnZ5MDMCid2YDYWFGLrxLAhAjHecfppDcFAbiUUwbFNdixwxe9JGqu8TUffKsCumKaBm17ni6j",
  "key32": "2qN4KiRxiF3Vxt4rkrcDsM4CuHNNPp5kFLveTVLg8NkQ18vxaxxyrxjWetw44BR9NPa9JvJkREJ2CX2BZVUkkWUs",
  "key33": "WS543r6GbXzkNnW1svSej3Y8VXaaRGGj6vDBntTgTf5sQJHxiEHJGgdDVb7Fayh7YDtokxiJtd96gucTXpUztRp"
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
