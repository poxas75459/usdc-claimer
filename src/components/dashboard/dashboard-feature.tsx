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
    "5sbSb4fRQQFMUigy8cFySRTJN9srS6Dc5kaGXZJcwo5BexUDZNvXF9YLLiWW9aW4db5aZaCDyjKhDrdR3SgS6Sf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNqFMHrMqUaf7XTqj4KR7Q7weRdCCfkdNnbCkXuUYxCErXnjL1QRqbLYfd7EtR3HMfkx3YWKGdBbRzFNz7RLnto",
  "key1": "5TMMGgqiCtgVKkjAKAULsk8aJitW9AoXVJAgWUf2zGMLCxvPaNfe1yYm1F8JxVnE6bK2aMCtGR8MvhM1gVGkyZst",
  "key2": "47VvdTGn35LqQpuigpkjmo2BfYU3H1FDvCM7wJbhUuoz32WW741hdFMcNb1sUNyqTZhJkGVGY3DThwic1DRZCmDK",
  "key3": "4HcVjZTLwrvNXNg6mE2ZJbq1A5WKGbuVqHcAJgcHQgJexYj79HYnqphA5tLFsDX9Rrju3R1VZinSQ2c7BLZwB9B3",
  "key4": "3uQzAKtwG3nadVCB1WouES28AGUZ8hRubAE9jSZbBpCNcNoUHAGhddSRboKLUwjBqV1KK1BfbBroH3JQ8Hib1FUk",
  "key5": "3PFnL5kt9ku1b1yvPG69rDzBiYbkC1HmYNByRXsPfvnoPQL8SDySsxUYyUabrW1UEbo8i7EkWivoHDJ7MjESeEer",
  "key6": "5tRQaaRnZS3z9859aGD5BRadL2yNFVJ5TvQ4Kvu8AYchT9yDF6TkJif3es5YJ4hAM2qHYSKZqrAdAXujm2JFEFsN",
  "key7": "4Yq9SmafhL33W5dDVPZ7B9uqAgp4BPLd6kpLBxFp9KmErZNdwvHvmeRGbeBZGjTHRWB7E9NBecpywLmHwQKAK6Rm",
  "key8": "4gamdDyp2t9cZxNqidrqtU4DCLCM8955yhyQhzT99nZ9e6i1pVAM6jsR6AsjLTVfduHQQomMSHYhf8M6oGcFBwHi",
  "key9": "4ZyHFj6PKGRzNBc1F76ByQEY5GSeGjvqce3fBJh8DZ7kmUiVa77mQvfvFWnDG3hgno1vEvYSMq1yPByBQEesDtrB",
  "key10": "2Qi146Hzrf5qD9EZoW4dKnh1fDzjgLfxoveLex2ATuAMfUzxEkAppgS6Ucm3N1EaSbPkS4GRgwExQUHW3JZYvxp8",
  "key11": "4C38272adMfWW7Yqw9idL384kScQBYP4SKtzKGyU1bT5hSmhoyn1v9Ee8sUgwhbo9L6abDdLmiHD6HWP4kcnMBZQ",
  "key12": "hV3PGvxhYasj78KgQCjWhPZNCqY3BNCWUo99cMtXiHmCG9E4x1k4EiCeSWmYArdVSXaVRJLaxddSTpTg5A1PJRc",
  "key13": "55mmhCCguRf4f9XYtSnQThrttz19pxPWxZNk5wZB9Zw9Q2qoCFypXSL2hQcKpNkmtPeawURbEHoTr2QpqV12nVaM",
  "key14": "2yp5Seb4oFwx8MyPGPViwzSBtKdvdDpfD7YoX3TAoyAud1eC27vt2AfqTHQon38oVcNfZwZ3SewfWVA8BxYLe7Vp",
  "key15": "4iBZjyVF97zkDwGoBbuga3TBpKvf4FHzKKn55WCpkmTi7xhy2tWHawiS4wEj4x7e7NFa97apH1mZHN6XZejrWpWD",
  "key16": "54vitWqK5QkmiJcRyf3gQndG3cqducSmrSLTUuchEncyaEcg9LmboZ1zHbc2QU3uczPz8NgaDYwvxcLRsAoR8aKD",
  "key17": "5iWRiXV3niFswf85nporbFSsb1sjfrQv1gsNSCdgGDyEzU3KA9tW43uWwb6qv8d4WqUJkk7gny2L8jLiFB41LvYn",
  "key18": "5a8pPpvhwL3Bmho75NEhgimXM9XYDNaL3iySuF2RjgqypeD5mYwLX1EcrWcevc3Ua2ijhSgCi1obxpcMfSPP2iex",
  "key19": "2wkBhKWvZkraXPuUNXbkbYcJBGYFBZ9yGA9ukV5FA3VfGP8RsjdeC54P3bxyxhFwcv1JEnpTrpWoPp2Pwzqk39ui",
  "key20": "4qQ5nFhEG1DYp2uH5iRibH9TMFdwjb3DE9faH6KMjvEmnS9cTzpqcgbPP3aEAovuZn27cq7545KdV4hxji4BzVUs",
  "key21": "27jtxeFqCjhXkGx2Wwzg2f5vEujHWcKoneDxitsqDpUePBLvM7yjKq4DRXskoy5xVu29K8qQvjW8Hy2kndvZiFwc",
  "key22": "3dsYj8SG2rZcLiGJj1bQumVqd92yvg6CFmAJeC1gBnRRf84DohVHcjMVQHRJeYiQ7csq8eFw5k7Ek3KgUo2Qw8VJ",
  "key23": "2JcVtCVPtahzcte7kR4NpwzvgRcuX4wLua7LR2AVqbANm6W159bVaffwvByd8WzZ9mR4X7cenYszixcVVU9PYK6x",
  "key24": "5HEsL4cU6fvFE9xGbf6XL4ouuiYbXG8E74tejwPdBxaXnJJXckDiKoinh9pkY7kxpKFeZv6f8EJ7HoTrjx48M2o7",
  "key25": "dXYudzBgAz1NgK6uCoHYTbvtsV4Y2KR2pwd4Zwvn68pG463xx5DwHSZeehveEKw2SgHTojM54LbpKJnUMtZMZKZ",
  "key26": "3RrmKxqZehnow8yne4bqYC7YmSsDsYyJjqv3DdPhFinGoK2zJ6HMQ2Qg6uhPYRciZTbo58VY4MEVi9j8oeFE1YCK",
  "key27": "u9eWurtq8GY1kzqrSu8z1rCJsnvKhmA13r4Q8n8gZqMG78y9e7FDqBAgerN6ChsceC4pRtF4gxi7xGv3SxbY4B8",
  "key28": "2qsRPoTZP4prV6LchiySbvEnSWe1rZwaYyZj2NoJjWkgR5NGP8uTRYU1h65wT8xchVP8Zmsnxasn6SWdwtBnkdq",
  "key29": "HQBfPYwn7PueJS9aNH6g1JHQAcmq5fiKGFf3FxANQv8nW66gDEhTkBGezAQiZ6vXN8zxXA6AscaGzikoTjGK8JC",
  "key30": "4A5ERfS3qzYuJoxd76BqVZojd6A4SZuoZkwz35HT1iKLAfcgzadRtb66xFJEzRWNJ37U3rNAYhhvGKPDrbKPqSBS",
  "key31": "49tJp4bARySYduXqrMuZTQw5QWc44W8WnWLGCrhvpiRXQgiqt47Mg1uW4e4XQto1643dU8tCRjc65dxBkk62357M",
  "key32": "62ByEV5FNhYJw7nFsPfsP4MVgfmWwV9cFp9GShQmPsLNd8pSSSANGHnFpLTGgfyc3atu7rT3iLzXNwF3RQRM69zs",
  "key33": "3ELggfvZBnF9HQeUFyteDxaTs7krkDPc3Lakz5LKJ46Hw3bNd9Qm6WL7EsJSjSojFcjmzLDRN9fk1v8jCMepYMXJ",
  "key34": "5LsnBFCjiiZGx1FiG7ESnhbootd15scGyFGxVBSDKVkf7RuqikgoRYrRiGB2o8KBgRNQX7Tx8Di9ryTjoGLXF7T5",
  "key35": "5kj8A1Gb9Pxzc5mwPiy6FNgRLXVFUgsaotaixBGamcJG3NgSzrRsRkezv1yvCpGDwENRV6EvhV4D1PyQNeQcabyb",
  "key36": "2YPYQuDEFQMzSe7ujR2qHWARvk4nCGsa7FxCs1yrMmXB5nJr4uEjBJVG42YXbpF9iLVtVPpbQPh1PrXGgw2gH43b",
  "key37": "FHSsT2ayZtSFQw9XQnGa6HGMQrVCpHpG9t2cA35FCH3rWiCZTv8dz97WatdgNuaX27WpFw492AsvRT6b5mKkpto",
  "key38": "MfHnCWfsepd8Jfausi3PrqkcySWSQGgwkBU6iXbB8m2ZZ9UgGFxYp7XwFEQQuky1p4Rmfqt4MSg9maFtEvD8WLo",
  "key39": "3EfTjpAzAnVzp19oaU9aJoVu7KkqB8hTBDEwkE9zpA3X7yypQYXg4n1S6A3Cy9TvVAy9ZkCKHFU8SEjhcQQSf9g6",
  "key40": "192oA2Gd5hdy2Y2nKVah3SUdDoWPC76bzwbEuVnUYwtyAtSk5mRB6qeQ4xnd6dXaHo6CbCPXi8f3qijiL5GbJ7N",
  "key41": "tZ4J6WprJx8zF16h4YyUMQu3n3dcjbiNxK6NyUrtLHz4DvHD6sD6io6v4RhzGyfyYQQ58B6dEJwUyzAnkKH245k",
  "key42": "xjjsuTZf7ddxZFnfhBYRWmfsaap9GjBVUVuzeabjDg3hbWq42DLu5ry7H5jxNxN5cUPgTbbdwTEvFGv7cALM7Zj",
  "key43": "3XZiobRurJQDiLepk7S62qp1wBifmEKC84x7mCvz1pEPEiSx6cKsU1PhGk42utPBAMLJn9Y8HrRcPtsYhfqJt9FF"
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
