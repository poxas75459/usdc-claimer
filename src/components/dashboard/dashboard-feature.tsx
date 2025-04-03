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
    "4znu6PrW7p2Ti4CVFGdeZBwG2ziecu5wediTMBut3pwKso3vpPi2xr7Mh18UdpsNXHMqa8TQhdDFK9zqjpWDNy9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zv8ByDs42oXfMfiva7Epto8dWqoSnqESmeRrJnmF4hTECSPpMkfASmK4oc3z3DozuGQ2zRMayBk7LKX2PSSSuJq",
  "key1": "4cBJ4hRL8sPsk8v19VvrE6EsXHdi6UwTFYWYEWta9Dgs1wDAmkBufjpSEjhrCckBDMhjUHmbReJMwDS56MuD6aFA",
  "key2": "5U8VxZasRXtoUnwx5eKbgfTYm2ww2DX4VWDp6fzkro1ZGdnWrnpfpPwaMXZp3p8sRWBufTvmqiAQQ4kWJMNsNwHS",
  "key3": "2yra34ftmduuDzhjajbAwC6s52X4EMys4Cybuqfv2iTMbmb4YY7nwPXZVQ7ggc1BhusQSh3NfJ7nGVhGS9CbaKru",
  "key4": "27Vy9ixF42zdJJeRbM5xeUs8i3fMzTdSQAV2QpjdrfspHCxMMmnznFhrrsq9s95KcmNbizdYs19H8c92Tng4YPn9",
  "key5": "3yu2bTrVxwWYJ5Q9MjCirpRvPgtAzarmatGjXPPZeVbrGvEWXDGUh5DwHceBKLA5RiADoC4PTW4tKzGueAmMAiZW",
  "key6": "24Uo7uYctA8rQgDgeKBRbU4fPmU5VjiMcibZscYLUNY5NHYu9UZ3r8T1sWvRFH8P2UBTJLXfV4QyeTwWZ41dnLFB",
  "key7": "2NpEtAht8bFz2x7o22ruJmZ15y3vGUdzYRgNYXvj8q3vq2wDz9MDqcoYVmCsgApjDMrowKNKpqoFjJiCF3fSQPpy",
  "key8": "3vcQXxmZemJUkLNK7F3G71AoU1W1mw69zzrYmB1mCKE2fYLJoij9BQyLGWPMC9qrHRmykSveHMhMWqztWVAWRgVa",
  "key9": "4Ahpj9nkLKj6b9QLW5TfVPWb5MCF7viVp3side4JH24GyPC2mt3rsDWDmYsQEMMzT2n4u46QhnwknHPJLYPrUKVv",
  "key10": "3v4XWmRUVG2DXYoPeAJarabaRjbEnEWF1MrkYkqC3fGimafUviqfQg3eHqmJq5Myd8fAJjbvmrAwnxvit9bv32F8",
  "key11": "2MShK1efaajHg1hsgUw8zJ2vAL3KJUEPRjr8rVzywJ8BwzTRT6vx3wmZYitciBrck6ZPBxjv5GUAZQA48G6MXedP",
  "key12": "4jmAgHvCq4D7Rx4bvddUpvfg6EyEKKS6xDMjaamsd13v8xC5vP8aEeoGV9gSW5D5H8Ufdx56xrepDrbkJ6ivj5L3",
  "key13": "ZgTNe5rE9SnLuTQzxXhq3czAsaeNLD9d8Q4CKm1SFggFnK9ihvd91UNmb2SboBZUavXHPSCBhm3B849uJCbqNWx",
  "key14": "3rV4CZVzHZdEXVwsLZjHVgVLkzswVr4hR1h1RSZLkmxNJ26LMNXZKuDjfUSN6iumUoAhxqe8K13eh36g3jqMg7jP",
  "key15": "4zssJVM5zar17yDkyUfYaBPzxwCJeJWPYUiwPrWMVtbJQNNhGHrawHajBMM9S98qFwJfnGBRRvfBA7ZwKRzs3SqS",
  "key16": "63ve6jWFvg7KB7WWdk5QuMYg2Uvq4GsAJgEAumrehhbwwJ5MDEfz6fX6Db5W81j3J8GcuhFTfExc62JQTJXv73ue",
  "key17": "2RLS71VfbWa6rkveDSMFn2AcpT8FG24xhVa1NiLvb77cT7TUjV3DBkNMSUScjxuUj2RoocLWN5MLSr3c99Me9u1z",
  "key18": "5zikQLxgFMmDxUF4f35AWnMkC3uDa3Y2j5wW51FjeDwi9SpwrYzaiJyC9vH1kuC6jW4nzrbaUJ33GSv3jzAjUKjy",
  "key19": "3sZfMWQU2vw8ZpnmnDM7oUTfHWgY2bbNLLFcgrTznoHiibtCXbC3KRdhpUDygst5ZCjKAQrU2T93t4bz5sXUT7Dr",
  "key20": "5D82PFbbq1TPBpT7kHg8SeWJJbFxqkAfMnJXgj7LqXKMX9dxbwDCPfUCxFipvbAFo6gidCVfGDnpmksLbveZo6Ux",
  "key21": "91d8q86QkStP9jY9Y6d55F75PP2m546EVYgscC4xMqcVKd2hSrcntLGdz1TpCEZRyKxAzg9oPrJzwH5hgwVqaPn",
  "key22": "233Qqon3QjXUmBALr6sNG3KZdGJSbXFKjyENQkH71xeRDMaUqDN3VEzfYeu1Lm7kMnbokiWKj4w8XQ5ECLAmSSvg",
  "key23": "3gMTbKWJ7evCy7eGdYzmyxDfVXHKN3zygCqE4nJGcT5XykVnrLKzmk6z4VEyJyzHytfygeZYPpUJnJPiegKMWFpS",
  "key24": "2wQbUv7Wi83D9RUmCfxfhZBzJY7YBgAzHUTNd8mhCv3JbtiYeHUBPiF7hML1YsYxfpuJJbrZKuiAXnG1zZ4UUKSc",
  "key25": "5tSnqe9ngBpFL4p7Nmyqi9WFPWJZDtsBDFFkzotonuMYg2DR58EaGDSoezbdyhWzXeTQpjpS7MxB9vj5Lgv37VoS",
  "key26": "4g9Rye6AGGeEHuAbW9XE4CVKV2Y4qjbjADM13gVHMn2wMbs9psEKv4rj83ArAaaJ5JAQZ2pqXiSq9s55yk1sDjcb",
  "key27": "5LJEqXYTBJgQZYpS9JwG5xhEHZz1kVQHFFHYomz1gdkbSRnpuVWJYSx18U5ebtbGoZgGJxFqD9rhtqUfh2VJ2a62",
  "key28": "4oVwXEjSYGWu9ML6aq9FPDG3PbSrYFwVED5znMBAQt2PcdQgJVLr9rXayLBYuj5vxoXkQK1UNo47JZvFTQrnz7QP",
  "key29": "3jc5iUmgR7DXDnjpUcJLwLt4st2BSqJkRq8WUaRUrETmU8m3E5bDtcgLMsMXJapz3q6d3XMazcgxkiZ48k9yeW6R",
  "key30": "2g2sCaa1GdA1SbEKMLPR7cZ8zYqALukRpYpFiouCMRYCH2ULedB7Rw5EBhLyfeRbt1qhSn49zxytQ583rBwpen7L",
  "key31": "2WMQPzgLcieVLiEQs9aw94LkyzkKgPrkhEeEZrRYHgS7grs16baeU9P2jLBm1C1CibRnWVkhWUYTHA8dEzyxQ68P",
  "key32": "4N58HaqFV9zQWkefjbWSkP99zBMZ9HJcFGPFvV3WHfuuef289eUR3p6hHiSD23R4ZxGQkWNFzfqifdBNPXLPngTM",
  "key33": "2QtKq7BaGqfL5fmvfLAVuuESoM5WTU2Bx15mn3N235RWXq4XpTX65beRYX4whnjVJZY4Y3CPmk8p7N6bSZBhruno",
  "key34": "57zBQdsweFA5kXfYVAnGQkQjrDrTVLUTEmTqkNjgiEvazrnK5pJtEgYSR4uXLztz5PsLhiMoqiqHMrDAepSvMCyu",
  "key35": "4syGSFMzFiibR332Sj1UBktKSqG5zNzuS3zdC9LyJWR8isgffLdLsqRFaqUNM3RtiYNtXxnhrhKR3h9Yg9dHxap4",
  "key36": "3DsYU5PWiZpyq1wxyGRKzTTVsnTmNhaL1i9sh4u1Jx6DjRn8JdE8z5q3sdAopTLVkTu8FXTuXCBUyHtSUPxDeXzN",
  "key37": "3e9t2Sq82s88PQyCJ3pBBySvWJgkKtTHJCpCxPxiDvQhXzWqherK9BZR4HvL7jkq2jnKAdft31y3cmbKx4gSZQXA"
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
