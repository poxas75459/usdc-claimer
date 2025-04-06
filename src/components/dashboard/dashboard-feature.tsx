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
    "BKnnrSDeW9hMreGoSLmSMvUpwLsUzusPUitUgTpTGYGYhRc3T2pmiTzej7GYr18MYGMYDyPufSks68hvShm2iGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3ihVkmLBL2WfqbrsHx9j5nQmc7BaFRqPLiqXeLHJnzTG7NcP1PPRWYJJ55VDFyYYU8B8hUEWzFjsRQiiUFD5aZ",
  "key1": "2GjvETQaqaBYSiSTNvYAJfRYfvAgQsFdFSWcKjJRBqZnaw2K6hjg92ejomnRKucRjAjDDvTnPCqPiLRdUCG3kkS9",
  "key2": "2psvU2sxFBsMRUguS6jmqpMA1dMpo68urHvw4Bpt4b8Jc33XnN37Bnrdz1zKnixyHBVnXk2r1qM69PdZunGmS3zE",
  "key3": "3ZFuh8orNAwF7tdqmTy7iC49oHNFNihHsHGBmMB9h6kXbUngDaWPZBoixf4gF3wogsneoWwCN8NEn7E26dMdEujm",
  "key4": "NgmQPAiUqDY2QJCsYN2GYZsmYrGhPEkrkGFLbB86iz8ypWrHybTibLmBgniWQH66R4CLRhopzGKwCYfkRQhFVWu",
  "key5": "bTwn6QDGtS1MZCtPB4td4A8LszU5j9iEdPT9oJZB1vx9nAEbg2dgZPcikD4z5Xwzjh9Z5fk8J5geDQZ67j89sKP",
  "key6": "22FTbDeuKZpsd7uyuJBJFKq7zk5fnqvq7uwExDSuh28UKctimhdtAeWAfsrbKhFofQ4W5wz4Bp22TKBQRnrAF7jv",
  "key7": "KDsqBrAVipG2NpdAc41jZfHCWvhQnXJRe51bybahA8i7vsVQ5KtM1gSVJFYZrxPSoDcrTAezcoTbHDLiwqg2Ei2",
  "key8": "51Vh4tpv9UdjiAVervv6dK6KEUKFnUo3VkWDqSRheA5bPsoTC8fqL2ikf9skM8GwEo71XXkymb6aPmyjty3QUoxf",
  "key9": "5GT5zqSwz1bBMJsfBpkMNusD1yxJfwudbmLQjrp7HybW1anBGy3KoAALdYZ2rY9UUkM2wJ5jwEwE5PiMdF5qzoRp",
  "key10": "5msHsXn4Ut8moW28aTqtRUYQArzjZzYobpCcGboySBGHmKf3ziimJdYw5KT7Z1BNnpHjhnKUacxeHDdshSieetRA",
  "key11": "5q2VNzDFA3eG354N4QZ8MVFSPykiadEv1NWbnRmbkAvVyd8cT78qVZfDxp5xgTH4EkNpdcE2EJRhGR4QuQhac5HN",
  "key12": "5ZEqQDQG3GXDg1K6WV4bUaZhEESjm55k9CVqaAvjgM9m3MTeomysn3uhwzuAPsrnQmSdXNrqCHhzJCxEyJFdahjX",
  "key13": "5fRd88fbwyoF86FHYMkEQ2sDdbahcFK1JssgwNLQxbcuJ22eNEx5J8BfYczyHCgo8uSwvLw4gDYwYHRoMSaXZPaC",
  "key14": "4MBunMmT6RtQfa6GCHtC46vjfvPznq3Ys9abhkvpoHZrRo8KLYhXpv6iYZv6TcKvuiPFs8uhbWm9cy1YWCL7pUNZ",
  "key15": "i9XV8EQzuaPfQwb5cm6VtyKF2Bk5ihmoHpwN6FWxWVRkL4bgMBwhAhvqMSuV2RotdAJviHYe9JRjwTBtELgY962",
  "key16": "5xdpbZSkXaJ16ef4gV7HtvckFK5vf2z5RoXYjxQTsJVKReAkC9B3XXGNzs9pUVcNA7qFhEAbFMuXQE2r2WrKcsNu",
  "key17": "3YMUvXiwDjkjGeVzifBPsK3ya8gPxej2ujF4J1fj5EfSUDdRsQBcA2CR1Ktkuzbe7d6sMGnbYVGGNthaf2pKJM7X",
  "key18": "52XcDTtep2TFXWxanVcwhZodw9ZP1fTBwAhkqUF15EQrJucLutCRmwGodRnqrXhUZtzi9pGFEhQ4NnKVCc2tEeSD",
  "key19": "24vGwKQmTvo3knFJ2C5vZB63qqDKrtiowsPVV4DSW1Tjk2YbfSX2k98kmHa2mYTsD8gv7NvsnzcnwBej7xbZxLVi",
  "key20": "2o4V2NbdoeDidGkGTVF4pkJdtGL4kFBGvRXM7uzYxGbYsPRi9ptrZBHL6yjiU7KLqeg1JL5yFQVVdnUbbCBDHPiZ",
  "key21": "2ayfaobzxBQnHFyc2EwQd91fcBSKiLTj86Q5xKFNUFXnenKgeNviNMtekNvXAgA1KC3bxJSpK3D8FEspHK4VWhqk",
  "key22": "5BfTyfL1jd6cRJJebTaPvnV2bCcwRtygx92MQskKi4enfuKApD8vLZYGnUXh53i6kwoMBvKVizTUQqbPStBSnrBW",
  "key23": "3ZCys7uVNCQNiaSrY1QQZxHSAmkqymszxxtKm7MxY7BAYL1V5h9ded3AEurx5e2YAk5tenivoH3bwTt4U7EDL5n6",
  "key24": "2uwMJSd2H1uTwt7qVi1EFVzXCD6k6a2ztQzq35RMRcKwbstihYK6rrxdv7tShe1fgAYuhqJduEy2bgsmfukP5kDv",
  "key25": "hPfDWaDuWCRVWMQUZbg8nRnLmDWxi9D6Gx9EH5C3965NSZs1Vu6kKQMJjV4h5Vx7gf3Y1Nta85UePnvG1LMVQp5",
  "key26": "2AtH2DBFsExh7cJLgXuaB8GgS29GwTvvm38wnVFBCcGSJc2SJC5GRyifqCSsKqNb35yYAW1YrhoRcRzhNN1fncL6",
  "key27": "xxKLy8NotH97hKFp5KpD5weeSzxtTMabBxZRh92vi2JZMqVHMEEYjp98vLBSKWPDQenLLbWw5iQDd2PECZaMNti",
  "key28": "3o8AkwAuQWvs9ybTFEHXBrkF8WVjCWubzP2VMxbGiGxFxaqzDX9a3oWQUSf3kSSfNJUXz7J1CLYfdoCLpRsZLEEf",
  "key29": "3rbeLeAaZ6XZ7b7GBmw4rWSdf9hrG3mVtsJu2EVu18hxnPknFeqgmmoEKNwdD7g1bVkNtXCSmKgCFcT8vjc8FF15",
  "key30": "4uDEqptZ1FszsHrazq3DM34bFSPDYtLx3UBMcQ8zS9ctntcQjyr24QwDNoZe2484nN1D81Hai6arWrz8HzvL7nYJ",
  "key31": "3nJZn227fwo5BQVM7nr1cWXNp9Q7XoU633SW8sQ3749gEhYxuxbBQJRKfU7WWF4NRXn7NyVwt3PgYs2u9togDWhT",
  "key32": "5Z7tv9S9ZyfkoeuVnuUvvDFJMDY894jneY8CcyWpnfM2sNNubYJUeCsYzynJT7BsfQoqFZZrs3qb78nQXq59vuew",
  "key33": "UZtaYgTjvyxuyk8zE7V25c5tGCmZeyBQDR2Ci1Fb9e6zDVv6FqTfzp4mjGMqkxByGbeAQrRNN9ASGqY8cCM5aEa",
  "key34": "oJs1za768posz2pFe1m6x4Cida5tduDH9bU28tcQgUpNmRGAD7yfTFtNifmpBCtzpcufuuVqYgc8EpP6B3iDgn7",
  "key35": "ZoSF5RStzwRm6uPb3dfiekxxz3oLvfzQkNoQS2FHZ1dTNAVZFRrSfw5Ym5tajJPA4xuTbA3L4bnsc1CQzubqj6Z",
  "key36": "PxeRYUUUYTK4QVoDiGTCH5zB3RpZWybL9aaKLpRTrHcwpvuGyHVqf74UhKKehuAtngHFs1gg3iYvDvQPjwzDTXB",
  "key37": "2J4sR6SVJhkSPS9LLRj9eEe23JBScA7eJTGeKwPL6i5z6MWKbd9UmnCBzF996WV4YVxdDE8MMT3L7eh8NBr185N9",
  "key38": "3CoBJoT838bD45Bd6qFDc25p1c8mf47uJ5mkXTAfMuJHJAERvMmmSbNhxcH8u5mwNsEECZfnwUMh2jWJs2qqyXGd",
  "key39": "4oJX3hM5BePtWGP9yvqwap5n54L4srumn2iQF8pYCqRLoBNPUYhT9DgXj9zERYZTYATo6zDUxD7nME17RKykPJeY",
  "key40": "2oiMdu3cMPaDw5MpvbWiTkQ8j84JPcVqDEStMa1dGZqvT1mvmFHbA4BKeMBHXN6PyFRH3mnf26MfZ3jZVHyZd6rc",
  "key41": "3tQypnaGAjSCrh7MWjgnzNE6yRfygGKdJhBfmTsFSjBMhafTu6kLFfEFxfiDznZgFNRACnK6pKkj6t3vCFaJMowq",
  "key42": "5jfHSvss6y4uhaT5egqNmUuCovNjxfbKQr9DitXrhB717tc5FhgM8m2LKXDMNRBB4XqpLqqomLxUad3qRWnbpFTe",
  "key43": "3zA2ZSxRtaQM5XJawzsX1h6Kff2qC3bcy4mR5BjQzUACWj72SDcEhctKHe6V4CVgrjirkZeiFPdVnMTpmL76jzRi"
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
