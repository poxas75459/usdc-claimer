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
    "pKbrmdpkuo46U9ARnEwGRASMQdQQvXrSrihMoNSuXwKhKK4JUAqfbtgfHkqNCYvhEUdh9vThiLdaL8V4bg347Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EeMNmUkzaxt3JDSdY7HQa2a53tGKSNfty7RUdB1W8PeBUcGMc2aJqAbZKxcnyWofvj6VXPQ688QqWNDzoE4bpt3",
  "key1": "3KdMnxthEu1D4jUUJgrKkAR7AKqmh9w9ZadDUAVqvui4wwJ5eGzuwfTjsdHJGwVLpitCqQwp7XVZqWxTXnJ2i6WC",
  "key2": "5NQxZPVqTyxgPATp9gHxxdTLnG4JSEmpTTrZLvUcLbBJmv3WxMYRv7ACJnQXQRB5P5meNnxTnP1ZP4oG8UDPfFP6",
  "key3": "4EeSaJSty6bpbp8MuCaj9wmqCmiL5e44As1rbyx6EGCdghqTuUKNszzxa9Npb9gqi1VyZ6REPTAT3gkdnZ5XWsbj",
  "key4": "5LT2F3o6AqHRWaWRaJhWSrUv73nxkMLXGMXcLk4znGbnsqrqh4nXonBGEh97P9pZrv4Gd2tE8HiQh4fMADgqzZeN",
  "key5": "3En6iPvhA82xRhBgEUAZuvaFrxJwF9TiwM9c9kg2yqT6QKCH5pa4Kw4JCTjQkTgKm6FB8wqf3hgfhkQ8ervbn9Wy",
  "key6": "EvRsYZyvTqR6g7B36CygQ1HPtyr2qFRRrUBevyZspntZ4uPtDvyUg7QcpPXeVoew79FTGHDohR7aryYzQdoTGwo",
  "key7": "4HACg3XQSH8pxDE99C74cqcXLU5ozPwjLZ41hGyBRnebFockkSqzYEBd49X4hcegC3EUEy8NXg5GxjLHYxkgdimZ",
  "key8": "iDMBAjsxZ5aDcAXBeD6oic6xpoWH3PcszzFaSadSZkw6SfWGZ1ZsSra2WV85vfpaaqzKJ5acG4xEr7MRs4eDTD6",
  "key9": "dpkChAdm43zrkJCbUw6ABTYUkXRfJGh9iuu72SuioniybrTaLN3HHWcQUbWnMqyTcM2mmmv6PS3iZUVsbetQd74",
  "key10": "3iQu6B5q2uaGdjHdSt2UoHxNPcjUn9uokgCNLa3ZgSJBRAHVghdX7CJ6qdLVWFTNvGttG4kS5mYhy6Zhj827UrjG",
  "key11": "3xmvsmQYqr9syFu43hmUYCy89shm9HnA2XEdjKn97GcwpDkQbraBBPNP88kFxtGsdN6MCBVDV3W43fCtnajEcZGq",
  "key12": "5dVKksQM2Z8Bq3qYYNj7qFtHRzPGFb7k5c7gFbffb5XfzbktepFxoeADsnpns78yt22SyqqnzctxsTG7RtYNJpJx",
  "key13": "3pHaQyYrSrFrJWGqgYrbizYVrcrMeF1oDBbouRqUxo47K2LprDf1M6Mkj9AH2DrnqDFnUWGhHcWbxQaTbQq6b2PF",
  "key14": "CEYZ6Buyghng26KNU9uuoEx1A5vWKRDRtbsmgiH156bjrmkqFeH4Vi6ZsxGQoVZkPEJwgbMX4GyUYZYFyw78ebi",
  "key15": "4RnShk6cP19awiBnr3Vh8RC77hJBZ4FchR2NsRtjyLShqPBexPavUZ8BCvx4aJMVowTQZXv7Ysw2a85AWuNCovbr",
  "key16": "4RSfD7oBSK5sMxLmGU7LyPJFLwsgqCfS3hThBVYALxANH11Z8gJTEoG5bucNBiwGymYZcN7YL2m4z4YuvV91khMQ",
  "key17": "4rU6KzNUHg3QAH1gL17sWrjL2gkUKLsTse3A5R4WEKtwXq5MziXdJcZaaCLWduUN3JzvZVCL1oc63ovvLevaDkkb",
  "key18": "5D25cy14xusXWxcUAopv2LiTjhpc7iCLhZkZa24AWbxUakJ4uUKJcQyGY3vNJSXDCMbNLEV8rekZ2TGbZxcuyBrn",
  "key19": "4YQzXmLmA6dEfuA6Vt7E1mbxKLaFn9WDY3awDFZio7784p1P6Fa4LpgK1syE8enFw4MRUNYSZ9qRG9VudiwQgXXC",
  "key20": "5XGGmGtJTVRuVRqEnR6L3ocMyAWAfF4jATKNmTX93c7GwcNuzg8naCLEjaq5QwPjffxwUmegnB8ah9G1FVx359PF",
  "key21": "5fRPVUk5akuFVNd22QbwREPQh3TFNZFH4MBmBc7cXD9FpVXjKXqpjiVXGKP1ssSBqXGbhGWokrvkDP33Gp97eoQS",
  "key22": "2NGwN2c3mqMgSmFq6JRvRqXZzbx3ggoxaNW9cHoKzzwTiyiSdQjuQYV1YMuveQes7wHoVxZh2oohUmC2CJrhM9dn",
  "key23": "2f27u3RAHBapqA58St1dKDE2jby11eBMGnrbYVQzMMUVgKWScGPjiatCjnJonhXzU8dbGE33mq4hcVLBpu4h6PvG",
  "key24": "4zEv2mWCutC1f3ktgVH7YoeZvNHMu87hMvKnySfu898JcALobN13u243oa8het6XK2mDA79k1xZVbZTb5dsfyXBS",
  "key25": "4PtXLxw1GmMSAh1rfQkiBqn9Dvgdqqac5uXMKkuJL7QEMTJ8CEf8L6zbgcUJ54rbATxeejrPVwBFAgoymToEiEY3",
  "key26": "2ACryWC5F9xHyNQ3HRufQRtu9HWBJ8M7eG5k5GjJqcAEiWbYmGtLXJwhMYnjX8pZ6jpxvW4h4Tws9paL6N7tKTda",
  "key27": "3Uv4tvsESjGeMEZuoUrFAQpsBpgneQBu6G6sc3xZoEgkxyqfFFHcWKY1icRQYbg7DkJUcBznQABGWJhpp7QuW1nv",
  "key28": "3qwX11Fzxx8DgTF57kHeQnsFMuTCwhNvna37teDp5m5gkrMcQzsRQKVSeJbbwfc4v9bYXKws2gY2ToPRY21NFjZt",
  "key29": "64ZwAwCr8zZehF1CLq2eiCiVXL1he5CEyKPF1e4oyMCEj9hcEyctGqFE6YCzEGhmWbRa93fvcywfLpHJqPzmVJj3",
  "key30": "3w8C8mgnRzDuuvy8itvzTH5KqKHLdQKfWmoSjzcsr54E1WBWb5Am1qjJXcQdKRTRT6fntTKvpNmyZPesc8HZwPmD",
  "key31": "5UiSzWTM83khuFTaYypdvem9b991sA5aZWY6zy3K7GyT19hNqKCWMXrM2q9j2Z3Y8Nf8Y4rnaqzMj6GVfDwFgBBC",
  "key32": "YcoEShe9hBTpcGtFKsjsZuigPjZwTkjEs6dCacxypNSFxPriZY9i6kVJv3PFF2ayt5EysGzukCnNbjvpRUsvuiM",
  "key33": "2q4eKXqY7qLA5gp3MnjTG55tnR6g54eSB3a6meEyTECDz4FqPWvvFzkkVKfRF19nLaaQsdhoKkJrD2LKVPVaJC9h",
  "key34": "5fYLFFfjpwMz9CDZcDiXwb3nQ44feSYSbqzUVsBsubWz7JEEnrP1We3h1DSimvKSKTM4UmK6vvgq57cd5rzpdwDi",
  "key35": "naZV49733YpRTcvdvtXTz4PhtRiY5WkdSe5Kn99ZuxbLvF4p1hPCK7aCMPk9yZv2vo7C24VBGwgYYHrW96N2Vug"
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
