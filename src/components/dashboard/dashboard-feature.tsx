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
    "4AcZc5DMhdkQhkGnFRbqTdxETWoQC8jU3btjkExYDicBHYStJo72h78UuFQaDsqDmqQhMcToDy4VvfJyf9911qAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cy9M9enFoUikBwwEiCdfskTY5hWaXX5FVp54Yo5Fm36T2WBtXyTu7EE9FZSg4hVQZYmSDecw7aFZTikp3oUpP1A",
  "key1": "5jo4xdrXQsVz8sd4EJM6dDwyQTzFfVrZkYKtYN1NVK7Z9MWjP7Qvp2JFEeKikpCe8pdwEXrcPho6q4t1k23svREc",
  "key2": "9SL9W4aENoLwnPB1uzAbkN96rptwpNiNCLAYZfJyzidotZDQkivuHJofcZXGKxTX5nqYSs8gneGBVZSLCqtxCft",
  "key3": "yhFs7dpu1Y3vSqMVwMVkg9T2Z4bH3Cmrwet6c6Ap6Wiw9UQzRWi9fqBEbRYpAy3YBv3pDzCCQaVr2Py6ZNn5u6m",
  "key4": "47pbhEV4zzPkh2CXmtrB5kjHXmYdxiGBCDMeJbmuob9iZZ4oqhB1t2m4hGscH6AkfaHbxqyUXVjYunstS85fCfRE",
  "key5": "5HRibjDur6UztSbYMG7rQnKfZUL84WsCdFvbm6uqiUsZNffrXqcr352Jb66KRjdFpJKD2wD5VPLXrva71by731US",
  "key6": "46AaERQZQGXC37tHUCKrTZnDoHtj68a3bigwxoZLMmxNTsoJdoDJXUbkxHdzPoeAeTDAu29kPKQfuZHDUJySv1vL",
  "key7": "5DNMdB6nQSeQXUV5cCndCiKWSBy8ctiqnvr4UchaVK98oBHMTkSYJzN5LFqGRwg8Q3vfcQa7tXjRosiWXuNecQSq",
  "key8": "867eYo9i2qoSLWmyJe8do7ekHGEiPp6YbCFXXRvfLKZJTXtHKnpKsU4g278aFxM6ogZZmZ16sbLeDHUYRNNiyLP",
  "key9": "59VNx1ZsGd6w3YhekrtdrjTctoeLHFCXncpCg2dnbRZznm443Yx7ZdfRCFWixbRzr8vCMRnb6THgxfMJuVUPLSUZ",
  "key10": "4nexKnLEb3aoBGsY11ckYRSNaRbQGAYG3Q6iUoViUihDrQU78MdaHs3n2oV6fa8iYNNrRtGgTMjfA1uPaMF9rKxw",
  "key11": "s1oKqaZmRYJ2KacRPVGZh7DwE7bM68nE42jESyAFF8yTTcE8pijo9AbBb5vCDAd4eU96NeepFa3fuStoHR38JdS",
  "key12": "5M6qDrA8MPaD7PusWWB2AryGMjFgBMXTgRbs3bsKE11P3QW7nDnco8W4vYv54yW2Ki6udDTYp2PhVCVNTQsSLkD4",
  "key13": "QTGQ6bWw9a4CkbNZyZ3c8TVuZZCzGzQb3WJaDXHqJqxjTo2X38NGNM6DyndfaG5qY2tqGeF2oj1ZyoYAjvJhXVW",
  "key14": "sa6cSZ6B8opjxP3XhcGQamZB2kWaqFUKn7W7UeoWRVAYUuz33Dvmii4EJDQV5AhrMKM22JFcDzWNWqfPoTRJ9oF",
  "key15": "4FPsDDtATs2StmRSBSR9YBX4qHB6phi6mxqZ6rSqBJDtCy9y2u7GrpgfnSNCkW9VT28rMR825Uv5zaBiHPjmfziV",
  "key16": "3E7LDiDy9tUxVmTVEYhuE4HQnqUtAQd9iwjRRQPdGM6QNBew6zTQA3KKeRj9AKWxdWM12Sf3ckX3JguxwmHsLM9J",
  "key17": "2XwGT14DrJdbc8UWBfMt4nyeDoiM6RWx7ukSridptfhSu7JKtZkVTpKyKHqjqpXv4xF5rxexUxBVktvxxFfBDx8o",
  "key18": "3z7QYJvYsitgd4h5yoddgQYn6wTCWUPifLk73c4Qd6p99m1FQdrYfgzZZGWf3GaWp1bQnSqV8WG8pPPcvt1KtYv7",
  "key19": "5Ugd6dpMExBLoXrymp221PfCv7aoXBJKjo2M81e8WKP11UiBwKipkaWKa5nzgWrrYT5HHqMbxYC9iDk4jvyTqbe1",
  "key20": "o9hNnmS2Z3cLmPceAEVbWPZTRhTYYEmV3btngyuHMKrd7cELmTTdu9FK3aMRsmXkcPi2HCvcYKMAaVHaaQvRrVF",
  "key21": "BVgixY7HY6MyYnH9pxFhz5xuTac7wCY3qruRn2qTTDX3YosTv6CP6ZNZ5Jy7bCc5CoCAktD5v1YEQ1J5Q19U55F",
  "key22": "39nx3mVSNKX6wqbKYcm6go2oW6eXZWGdVY88SSdrBAM9Pg6VPXqj4X7ESnH6jZyqgQBeqTy9W1EWNCJfroKz5tk8",
  "key23": "2F5KFLeTW6dEzxH42wS3iPPF3N1nEkvyihTnwSaahk5BmTq8bQLArYxmJH6KNR93Gt1dfUR84RxhhrXnmdsXm4LX",
  "key24": "rTeG1sHp8ngkYqVpxSYKqhs9XCyQbmCQ23jBHrcF7hWiZYdj9KkMwXX8w1BNY33iDYxkFxmpJdWGCqrMBbhsVMy",
  "key25": "2fZpoDc6iyWJSFc4SNmtNsVziPGK2e82418rMrbP64C1hkfY7pEAudhR1Y54wXbAcKM7JJsuQW26Jtv2eefwHRis",
  "key26": "3je7pRcQQSgHMDDCyLY5JYL4PVy684zFuVV5cPh5ijZpA1kDP2V7J1T5UbscFk1hrw1W9BsXcniHdpojnbeTAPuG",
  "key27": "4qrSCZxchjxRyqoPQc3eoFMHDTCff8cEMdEzfuDeHr3aXZewL36zWmvyPg2Xi1Cvm51yQ5ApnK6NsMEp4xR6d2Bf",
  "key28": "HhNAmReuN6LCDxMyRbXYbWTZcaeCBWwfkUmhYKVdhu7UVNF5RsWXrUyGcvNSf7om1LPEDDAy9N3uB2TqiMceLCv",
  "key29": "5Hxj6uTYHywSx8n14TteSiS4TQ2SEhX4fxQDjLx6rV4myziMsnM2LbYUXtJwb2QvTaMKhMYDx7ec7dcaLx7GeGM8",
  "key30": "5FA4D5b64hU7kuuFeMQ9zv9zCRPBUpPCYxanCSqBuZbafgkCHevNeeXuNPAj8zAhK93Hx9271wDV4zrqABQwtPFU",
  "key31": "3TPUGWS4NjAWcU1awuf18pAjMup22SuJFBHgNLxATqNVvGTCsUYFpqAQyrU1idpMPcTSk1vK7vmgjKtfChWwfSRo",
  "key32": "UJUeGA7Cob4JtzdDV1LAkGntHdPAMjDgY2iDmV7STmPd8Sz9vi62qptG2p3Sa28YjnnaF3iDjwY8uQBm7fmQDSf",
  "key33": "4v4Kd6uqujqgiZVjtT9hcDxMTbDCtyNp9gtpQQ9tWjC4cv5zYaqT79VBsQNYsan9JWU23xS2HEhwj1xLFXAfQffJ",
  "key34": "4bhMQmj6dTcDPu6z3rg79eNaBrcD1hANBk2nyhBU2Wq2Vqd6zbvQuvccPPLvD2iW27ktdCV88n7M17PwmyxQv8Jn",
  "key35": "5sqsYmGYPGTo4s2cABJSm8UWz9mSNYTq9EiD5jvZTj7M9QLmgQC1LRrstqTEeZkV1hEP28dtYx8Jg23ugFf98r8Z",
  "key36": "26YkJy5gmtVDUtwfHmWyNry3MYVtqmoN9wjpZruHTeDcHmeM3NRLufuAvxABgEb3QBa1FZQzJx4DMRmKiS2RG53c",
  "key37": "3uG5LheU2fisqGFWXdQbLSstvNCQwkBxaqT86GWtxR63WpWcXUitfELWsZp9zng9oBf5niJZmwWzWySr8CvFprYr",
  "key38": "US38m2vSDm2KZG7KLo7sWyYx8TePAMw9TGXmEdEmaNFNHEK7BmFL6L2Qo9qN7m2JVxTjjNKpNBm4JyCMJrwS7oh",
  "key39": "4muGVUfXgkHXtLsB4pn3etm6fMSfgjBTNTH6jK5Wj9UqaJkpsUV1foKDjVcKtoYPVwkAQAcb6QCizcv6ThP3v6Hq",
  "key40": "EpArBMrgi1Mp9FPNdisBTJptjmkLasdF9mK7NkU3SZJaaAPqpwauUrBzs7ADfruG19sQzNMVMRxcSj1pkQZQ2nn",
  "key41": "5hnUooKZ9h9ju2dXTGo8jAcnAa5yEtFVgrxj9xAMn8tWHpmyh4EHMuFfCvXprku5RYMmaP6b7V5WTgNrCrWfzNBA",
  "key42": "4HCZS4k1uehZLcR5dtRvB2LJ1Dh1ijT97Kaw1mvfyFrcm5xJMBVvWKhNp3xgUNvgX3btC9UKbtTbPyLHHuKgdJgt",
  "key43": "2CtwsTMELVfF3vw8XCNViC75XAHqMFDS3GMTn8ctTfBZeUGShipyqYGXkx5quDfVo36DJThhK2qXyXV1ua8xWZzf"
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
