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
    "UJfcfGcrmT2sQUqTMTSEQkeacve4JzqNcVUQDYKsXSg8MBnH3dyTP6azT5MqReM5G7PQExh4eFRrxSiXnU5qC4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9WRE98e3qDptWz8xcBtixQJxMkznVukm4FRSRBfgXpJXxg4XoipoGXjgYu8sT726m4oa27UJoP73uckgknCkk7",
  "key1": "4V5JTFSeW9vXFQrkfoLVWjBhSNkW3f5qw6qvac8QBBrj6mH8BGWyBJmCD35HuoZ4hnB8Z4ukmkATsC9xZtJYfYy5",
  "key2": "ZyPLvr3cZe5SuEAFvXRxyu3Ha4h9zdg4CDCwEmajX2d4Leh1qCw2kdrDPvUNJqjWswVcVPA1ky76jToXaf5nkqe",
  "key3": "QPRXuj93grKFxLW3MpCW1BAbmAtFap4Q66rL5FZj8jhSWUM2b2sB43AvR9eKNgbcHFdAAgPpKo5y9PZj1Wk53R9",
  "key4": "2cptH6G2rjCwQa3AwwFpNqeRT9XRFgHjngWiDUVSHRjmDKxbZ1Pk9SPaLyjwt79HUumc7ZuSWdXRpEB5nokMXv76",
  "key5": "3yakeyyWRotRGY6z1SoTpHQ7CBrweV3gGtCHCrnZHCYZx9afrDV3qHvBNeyJZf4scGjxsy5BxLgfoQJ34nC2cuF2",
  "key6": "2NVYT6Xo6qFneLy8ncis9zcxf2jYzCgeZfCzBf3uNLBX7aBWWxQp9NR9xFxgxoJiHbcdzGGrDUNNhXcYS5eBf941",
  "key7": "3MgcRj68NG2PtY7v5sxn9ZMthkLmJzgtrk3ZN4bnu5sAgBx3FCY8cNAnS6JvRfXb88QU6ftDRm7saeB97UYFnAuB",
  "key8": "3PbFbakBnZLN58GtyWnVka1ZErqNo2JbFjmxi6kYB9xPQdqGZGG49nDkbcKPdtAZNfBCcXmgJ4BtRW19K8efD3dX",
  "key9": "my7ymdcVcRAq6gnpvnt2Pq8npnaYCm7p4FUQ6n8V6nJGT8amydRrNZjiHezbcVYZnGaVJHm2cs5Q3CiCNrk35jG",
  "key10": "dprzyN3K4GbLs8v9KMs9G8oCYDzj9GSxtEjos63TbVf8DVwkU8mdyjz6NXzcj8zuMcik2y6U9hdqTYguEaqr2FB",
  "key11": "2PZWJPhP2iSj1MEPCywaMKdnuDWMMVYyoUaekHrqL2CekGEkS9DBCeFjsC5589jBPcXk9jZxLtQzmKw7uYHvTSLw",
  "key12": "5QqBsqDXaxrYQSAdmp8G1No8scztyhUJWEvZAKqHSSVjZ3t4j1gQM1jNfCcnK3dmfmb3wT9k3rkL1oQTzCGVHsN7",
  "key13": "5AYczjaPxmxTc8oWATNzkeRCGHct1h1N2RGCQeeKawK1fCnnjuBrbySaNAXgix6mxk8JAB7nsj2qSopiJwKLmBgu",
  "key14": "5YzyDfZ2APRnZwzA5h1aRr1hWhMge1yVGDrfJwdU2tEf23PWgbbiTFqT5qq6f5UC6RxgrAfjbLL7CBDmFomLuBjn",
  "key15": "3fzAVGPRy5wGCBf9ehmAVQZ6YzCXwRoWLQYXW5SoEuRpuUvAojh7HWwwQxJEUKHAxzC44xj4Fv6PhvFgLFEU9JMS",
  "key16": "3fUrRzKK3UceaWK9b7EE8v65Jd9AJckNuirp1KActePqTN6PT4WCzH85nc7Fd1xmq7286NdKKkpruiu3Xp35Yne7",
  "key17": "4WiasY1FdbnS3fTPf8joU3DzWHFdAWAAtSL5JxBe1RyHMWEWWWeE4Y8qwGtzcAXyEYpxY5eRm4Q32N51otgTL2HK",
  "key18": "c97sevuKydhK3gSTqtzY4t7fusM9Ci6Xm2LY2pdoT1jNZUCsnxFmFKcqqEwqT4DH5eeM6Ps466Y9G1rpAN27Fa9",
  "key19": "3hV7yEsQfq8TS2yY6vGydyhki2Wt4b8kSLSHteAn9yoxm41VcF1EvREUfXKSrw4fa2MedSfqisjRCrmxpv2P1wYq",
  "key20": "59ZfAxAS3e28ydqe2Yp96QqpqVJkRnM1EnhvUJCVohAxSLmuuUpvmye8gkeGQS4LDhCNsmp5qm2h8QcbvPLXrkD8",
  "key21": "5pFsEop1KkCv77JQYiu633F7skgmRUBFZUDvegcLeMQoCxqxht29RTMysn97XftQYNrvjtJk7MGM3zwycudRVDyD",
  "key22": "4Q9DJFPWiLvJPbtBgXR8mRZqs4Xp5kcbL1w5FSXj37XuhuWV2k7S1fFeQFjsNaeqnCGazwM78TBKmP9jbyzj1T29",
  "key23": "3SJaCgRMGhWupp1CWprzRHGR7V9eUWBgmKKgwSjhTE7XHqtRk8aKBTW9cS6HZdeDwvMDVfqYmhSfhMtPMADzteEi",
  "key24": "4QmbAHMS9wkRZaf4H4HrjMdKoAASCNFjHoDFdKLR8DkHmBoXfc9UW628SzqimkdDVwqWqeJi5s1fvfJt4wg5cjyw",
  "key25": "3WJMSQ78sAXxP5pqBi2nuWqwwcHZRiwSgT9ULoFeTe3fEQcVKCCa4CUYPsNGubviME14CFBWqXJSTVeecjAS6dXh",
  "key26": "kJ42vGPVSeNRVG5SYiyEidpdR9PCsCAKgHEtcZFadtG91Vk8sRXkyjsEwrNJKLFEmehnZFhFqewGHFB7CuTnVNy",
  "key27": "3YZB8oTeK8dYtDCVQFAz8ffqVkEqRv3HVbo1YwVbhcAFZwX64NjpEVcgA6ak3Q2NJLatKeKqPwFxsYGsKuJeDCxU",
  "key28": "ofNeEsLJ8EsCAUTp3E8mjJaHH4oYHEVtapThPTRCNfLXmTG6S3cTupzyW6hqbzuoKwTGiiKeUqrTkENyhc6yw5W",
  "key29": "5frJVQFMFNexT3uvh6feQwJ7qxwhomCzNASa9UckT8tAPp7YKuC7XkE3HQu3htmB2Y2StyxcPLst2gdEvPRrrmxo",
  "key30": "267AvuXdG9pZ1zVCc1HBDxT5463vrsdSfPHE6SShSCzba44tByrUXJMyowa562oUcnKXwrGkQguC6G2SbUWeZZxc",
  "key31": "LC7bbSSeWXMJdB8aPwfxr11wLaXUYBkYYSD6QJXzLm6StyMxWXXrwot1UXH8GRa5T1rr1P4DQVS62LkSeySBZqD",
  "key32": "2JMU6AUSFXZVgg95dNRr9Z5mjGBF5r4veWRyCcNAhjDJZFso9txEjR8wSv1ncz8fEfc8FiFh628WNmyT15HC5EV5",
  "key33": "3F23bqUDNjVyXpdj7AN2YWnEgqvrtL54Vc1w3Qbr3KvFpPhwrSxRqqS7ahCvfoXcqNSQ36MA6xvhzSZZnLB8LNiR",
  "key34": "5VqcaedUHLgjhYSy4UVp7KG3fsuEn9T5VLcFBu1cdQg93LnfmPAxXc79gu1yqvFuQqfwT7kM1p27FqyakEZe2W2r",
  "key35": "2acwJvuvE5LqBVF8AZgK17pFQPPwMiBsdfFdrcVLULLxXs8MbSfqA5c4HpTksg8ewiyVxpyMmtPR2vksj8fuM3XS",
  "key36": "2ULSzHhVrLuX65LmDDuiZekC7cLiJnLvTnoiynP4gxifoQaKi1dehF7vYVLCjWKTNaRyEFU4ceyCG99rrdJ1v2Js",
  "key37": "3TwGEjh5BHsNL1eNMwPpKfme9zifQZNpehN1snQ7dq3cQFrQ91TzupwFEPWRg2uompM6VuG7CUdcLaMiJ8EzQBxs",
  "key38": "2MWoQfh896pTPCXiFLG1eZBRTWFtpneJoNgv7xcWLPTA9fLrwUWEUqPzanmFLGK9V7JqBQK5PgJrD4xkoTebgrUA",
  "key39": "5ygPgnZZqMesA25MS38jX4e5ZzXqzSq8Z3DvbFvT1Kfw768fDrautDvUAPJveypqLSWCVm8pGyjn5RoM4iMKYq5A",
  "key40": "5ma6RdS44wKFkQWNzmZ1811Ydt8FeeWnWCa676emqN1ko4AYtYL2SNLmpsLUnJQRdXqpQCLhbVPt4wvin6da1QPt",
  "key41": "3zrCyS1ZeaSvkCE7azgcEAEKXQTJW5ZKgJKW1P8uvVokiuKPmCvrUpKgbKvr2NUiRLbJXQQ1W6zCARNQYd1JrGa7"
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
