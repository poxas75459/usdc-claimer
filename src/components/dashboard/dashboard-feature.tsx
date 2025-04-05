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
    "5HK9b3nPuN41tRc9aXkDrzpYAF4eiQaSaaphgk94CbpxuVLGJYUB52iiWVp5gRb3QiZm4Eid5V4BZegwCJvEVKEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZquccRWg7Xi4x6Tr384DmPbHohnMcLqfJMAukMA9fpmz3chP4Bes7rygnBz3CTDqSjb9epYmJ3ZFYcvHQHA6Lvh",
  "key1": "48MMt1xwafABgkWpP7D6pLGtU9LQVRuhnd9gvhtxq4zUWcibXhvMwUAnzH3QveDen6MGzGGN5bXgqs3bSK8GNttT",
  "key2": "5QQmonHQnG5FaK7QJwcjCJ2ZXoapWFetdQeVQDf9439ysGWpNvxDE4mWcUXLDkHgJQkrZkvKgQ6puabpL3W6EPYG",
  "key3": "2Ls3RsC5cyWLznu9mTKME1HxUn4X7GJffrAhthtAzHB75hyBptRhtKYCpgNmegKFaXscXA2KFbBPhg2PaWxjtxFE",
  "key4": "TSc9WM2SATp4fuc9ZH2aHRP59UHDEJrfM3v1FMKwgL3MhnCG3bRYmZsfy7svKZQa8CuDdBYUiFyndj9nokPdLeD",
  "key5": "3MvqPAKBN2QX2vgXhj2QBxw31HfhN3tCBs5qYttf8UHMaGvR9Teu9e6TV1D1ye94RBk3Dz7XxMySWSxKFxNwmVLr",
  "key6": "4d3QALCqGHUDn5eEpg6PvYwsrm8b8rMAbf7wVqk5t8gXihpkV9DGrE229Sahafp7tQ4SCyKCAvG2mdiV64ahh2bK",
  "key7": "3mCZdBqKKmkpoVtfAH6xU8uvKBCBZtEA74uQ1onsUKd16YJbCMWVTuT34xnnsmsWqoYht4L7so8SkVoWJbrbHysj",
  "key8": "5WV5tjTW2qLKw2MbVaaT2dbQkMS7A8vXwVx8n7ditSD4s44az6LeopZycaXVP7QRVdDohZYw8axKiGmmfxvH2aTQ",
  "key9": "unkUi4Cr3yjY5rXsHctWhygAyrPWtoUzgoGRFQ6P4JQgqKm5AhBLC5JxCWTQrsESaFU7PdHupHaBggrroP338F2",
  "key10": "4EaxZm8Zsi4nFbCeiw5FjmtEGYdimkdeVeqC9RHDSffrMNTREwJmWQ1JNpYArHEEj2wKXgW6ZJHopqLBisEktvo8",
  "key11": "4oNDeP2SHvkWR7mTAQyyqNdU49vALZC4mD6ed9KopnHdq1Lu2vXpXVq8Bh1es4STRQPsRWTqoE8fffJkWynAdo5A",
  "key12": "5t8S3kKvv7apygYHi3maNEdqSnSj3nW9h6AUSUXgtGn77XHWA6gK5Y3iAofVwiAZf2M9jNS3Rw1WyAwTbAcV9Rft",
  "key13": "29B9VDtxU8XVYWtemM7J3Wpskvicua1hgYuco2QD7fHCCPSxSpX5zcPWgZAPG3jjAuEeR4ry7eSUeBjZCSUvpzCA",
  "key14": "2GHwyLnmryySx5JabHh2DYe6rK9DWXiV1iUrPiRrjk8yEjz6qd5gkZet99nh6ReNBC8kDmnRTpfM45ixDKbuXtnF",
  "key15": "5je4zbmqEie6rkmo4w7Nj13suKcBhFeczmwpjDphrbawQ8psHqD9qq7B1XirfYXqgnezQaDrQA2itmaEGajup1xp",
  "key16": "3krUgrdZ1jQNnK1LhNy7JN1VsAPTinBtC2VRzWLQGYWzU9JDpEiAX16KRgHWmBEAByNbnHihogdMMdpwsKzg3Uov",
  "key17": "2XY9NP38LRY9muEATaBD2TSvkddWPUM2ZbZxS7rQY2BTya2tyaQq9gnJiEMnbzEUNqmm39HwLw6THQPgzzLQuADf",
  "key18": "4HNPbFHfkGLZxvDBiUUo6squ2uxDVZjrz5XwibyRR72YhQM8WY3Em3isoDms9yQNkLXcsXUDL9ns9V1PJfY6iFwk",
  "key19": "pcbT77F83ZCGDeu45HwntD9bx8UpvbtnD13LJqcfTwW8dzpHNggCvedy6WtYZ4WvQi4ZEGek9ACNtWMnK1zafvw",
  "key20": "4FeohYWbELZVRUfjKqHrLfYw6dHauVSRnAc7gYjHZnhZ2CXsp5u3TsPde9C9WjbSEoaf7oyZrbGTy46s4aeh2zXi",
  "key21": "4jJgMf53RA232RyZkDKY98PdnsEoai9yciZEmbwr2YXiXfThywnMCktSPAhgADNroM6UeeMjJKnHHxgEDhrMvqds",
  "key22": "49Y5GSpHw9DGeYRQ5TBfA7rXTRGTvtZgeLh7QfDtBYLFtPMqca4vLuvSZXGaEQBqjrPYhoNEzL4B7Rjns3c4QTsx",
  "key23": "2Y9Ud2k7FmbhNzNzX9dVzrZuHFwbNcZP5L5Lsdq21qxatCyy4qTwQrRUyhYtMvudMUVsYatdZYJG7QxErzgjqZJi",
  "key24": "4WhSQcMV1UboKh7H1bXd939Fy8ozPWjE9GHA6ENijFKufFVLjowLWeCMd21CTNLZkptdFR3f885gAWDXKxLd9iFs",
  "key25": "4SYni49iWGpcXm3cH5j4p8MqEKYGNAJGUP7mM8b2B4MQM1rwrrkutbZmXnbrsTTv5prKLDP4CGXPiLo8f5uH441C",
  "key26": "3aWyBmJWrYGCLTL4w4Qd6ycMGoFpWtmEf1dY3VeSxf4MPnvscjKrDSpR5uQaXZsoDm3turEKLVDJFPUnaqUhjXp1",
  "key27": "2q5LWZSRdF3BjPwccrG3PkJL8CgVhd3uFef5fBt4sU1x9vBsXf3xdbcXGjYuTrNW9t77uUqW7YKyZjVavgYXdZLD",
  "key28": "2BMHpWaJ793775yK1oaodEP8ocnzMvGhMmhwt8uRC7cBVBGtBvembxU35f7TJday3BQRpkDXSJP7ysFDczs8z5A6",
  "key29": "3raRBigSsX89FC7daTkVKPeb4hPqyDnUoy3uxNgNzt9a5K8BH2Xrz1CHDWp3V4pQGhDpxT6qPx8x5SanYk3UGbui",
  "key30": "j7xnv2nDD5hzxz9VBi3msRo7xTwSTLT3dkyo681rjcgTTTTDmBvrd13FybHwG19BjASGgr7VTchTFj6YHmA5jhb",
  "key31": "4BD2YyrcFwrfumfN1L3giFhu6589pi2k1uSyfri2mmtUWfTjyha69ZNhEq5nJnzMj6AbTHqwZ2VCnUUGpuzYetkN",
  "key32": "BnfKxDTjFgR8z9GcPMoaq8VPZSTSG9bVhj42KpJ1vuCEo7yraAXFmvk1okRkG2pF76mNC3ww1tdsrimrfefArdc",
  "key33": "4i5D1cuKk6kyuJGcJVqbyACndz2n9wPVB5hJ28Nqhu6teTefRmnVHQdbvW98UaDtYKkKabn86pfoHmiN5bknpVEb",
  "key34": "3syvUvNjnc1btTSqSZjFQt774Yhe9pMKDV3PTfjm9qg23a8YezvRhRRmZ8BdDEeaJ8T4MrKz2KEboVg1qfB5M3rV",
  "key35": "M4W7wwcdau36XCtzXDJf8Soqhyc8YGgA71xJLCQajRhzpKAAmA3U2tTZ5dYNir7CiixjCEryGzpqeVp38C6cCiH",
  "key36": "4p9eHcHmtBAAXMu75uUMX6jCUtQgYTfA25STTAyJvLWupfpodxXV8reDXXqRXSKL1BwK2URTwFic2SLYVtBzE8Z5",
  "key37": "2qC5NMY1WHiETezGQS2KykjwkQYdehmC3Q81L9VLZH7ppgKXdwGR8Zg25ggYCk7sK3ESfduBwtUW79Ya2GeTvDps",
  "key38": "2FMGiZtceWt8nHo2rABS7CxwT94zwJQNkZacu38ypHHQwBTejoY4DdtCq9X1CZGPNA9NmKzGf27z1wBaA5eTxGdP"
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
