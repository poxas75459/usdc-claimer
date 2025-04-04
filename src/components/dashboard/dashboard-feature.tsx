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
    "23Aqiy1FFAUAnv98rsgy4Bxso1Uh1iJVZCZq8KttLHPk348kvFzi9ai1eDKYMhaYysJZp71j3mX9RacxWkPLiKrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ehX4d9ZKyG4WNnnYupjmu4RixrEA4bASHPj6zgsN8DCBGBE35NyfxfiCBCJPRMNatzkygpE3nKjddN8KZnhkWTV",
  "key1": "5kWqcNkQRHJ3bs6F8N2unPwTGyVfvvqnb4VFZNyZWhmsy6D11wpBQawwBgm68NBKmodUZMG5NQ6SfuXAYtZ56Mnk",
  "key2": "37VQQuwtYmZHVci6KDU37oxxcsSWcmWABb47KAMBNxHMA7AP2gM71m1mtizmk66cLz5G3cGLbV2jsERj2ZxnB9GJ",
  "key3": "fzKEb1Qs12fGb4jdHnffha67UDMpspS34XwSiWGobUoENYvNbLgjpUxcn4HWJCVwoJBaqXYUsGmgVGBTj9u7zXn",
  "key4": "3nqc33pEZVhpUA3NggSVz5u6QiZMcYbSj3sgvsSrYCGVQ9NdQpDVChSyur48uqSc3xfZSEw7J7fjf7mU4B4VZqHj",
  "key5": "2zw4maDQMKAJhwV1yXXKTzfxNLwKTBDBm1nLzH4mwdLqegSsngurteqL2CTTctZTxNN3sg3BCuk5Nxiv6X7W7vpN",
  "key6": "44MdtV4pVpiT6X2PEvRKd1ZkwL57BXY4UKvcKxvMqxAPWfRBxBrdStqAsC7Cfmy6xoNQuqo1jpc5BGu8MEFhz9fd",
  "key7": "5FkdQUM7Y4EL76pPP5gh5RFre5vJjnqJ7hYLpk9NpjHEpQuVtkzHSP8uU3hSSCKMBg2d5wWMo3pTejTuH6Sz3ceb",
  "key8": "eEZBzBNo6rjuzfNVFPa2NKTtW275DC2HoYuJJGVzPNC47ijDzmW7oTvPFHqzdxq4wJNFFD6qL8dQQ21B2LQ4t7Y",
  "key9": "5JcJPrTByNxXUvViFG9XbWenH9gVjfNPbZpQPw9TWFyuNAf3KV1xaC9hUi9VtHagkjxKJZ71bCSET93VWEaH2XWC",
  "key10": "51UpKLFy9MhfaY9wazWCJBe7gdmdmgZXEr7FYgo9CGtXTPwSrX7jvUU94wPsewP1RiNqVC3uRyYj9VZweimc37Mz",
  "key11": "2VtWU8kUbSJeQTuQJgqbeHtDPLhA5yY61kPgkdvDHwci9Qjev5hxJoAW8LvLLGMVNhHEJr4dkjuXZzFS6bwohc7B",
  "key12": "49Xo1SQ96EgigFc9He8o39pNBe27TmjPi5eDvxGv2uijs3GmoGn6swRqk6z6CnEU6ChUn9NQec8ahgMVpDK3xHrL",
  "key13": "j5frmEDWSX7FfQ4P3GG2f2k4BcBmAEfNvKQrrKHPA3KfxKJnbTYyEGHy4z5wC94LVoEmpanz8BC13BDoTfKGswn",
  "key14": "1LFENpmYHzCEB5ZiUznWio71VwX7YEFe8wQwgSxsNmwWMgr3cEHvYLvVKs9jb3sfE2TnaMyGi3fJWHLVjAXpF1n",
  "key15": "4J3CLEKSavFALqETfiEyZCKHfx6T5furPJqFg9PJ8V1UzqP9qmjXsVmRCSssnY7PrBkswhuh89NffuoPrfTUXSLR",
  "key16": "5yBVbYVtui8548HpnE1G2Ej9vAWwnqaiCJyZKytFamdW9QtMy1PxjSg9k4bHpKdY7u7ZgNMiLhL2HdGULzUjWEFS",
  "key17": "URcrGDQiiuoMsCZMUq2KQJ8TEZAUYCY5LjDhD74qJ7RfkyxJXeNs8M1NpA2Etx3RvrhVDjeyCngwSjT7naV5RyP",
  "key18": "53fDjH25iaH9qdqqwg246dwHskNsafqDGcE4Yr8UiQbkyEVuJD3kkCY8aexB8TdPpNBM4C8Jqe5EMcUtedQ3oNNt",
  "key19": "JG4Y1ey42N2E7L4KtrkfRrXp2WP9F46Sm4h6X6ZCvYPCCxqyoB2Cc844Gh7X3f7qSzE67Xb7b4hppbPXsGTTMPp",
  "key20": "5bnrPj1Ueyca8HeUYKQCZ9VsvyBza8h3Y59d4MPv9CN7mJifnJZWDnU4jMEPjUG3HregkWdHNAmcxtgArfzuAkUe",
  "key21": "5bbgeWFgqervjjxYqRvD6ppu6q6bjkNwD9aKXKm2usDxPtioY1bFCYQ7T1knr2r3odov5N5VtW9iWK964erpWJ79",
  "key22": "44tGMikGufko6iu5xNJ1nVX1fcVmhT2jLkoKSC9unC7MgNyG5sy2YYMw6FM4uyTScBQBWJdwKykAPU22DJoWfNRW",
  "key23": "4V4f3P32ns7UhU7WJsfbM5Kg4p6uzpwMCdBqqRsNbkmjb8yMog8MVH8NE6L1v3tX26sYBf8BbHxhEDiWe7MgAEyj",
  "key24": "5mcQczBFpLYaXyds27BH2BPo5hiGbratP3D9iYKQYVA1vSmzpUUR9TSe89U2sb77fvUUhJ3VGH9hELxZRAUzxSdY",
  "key25": "488NLtg8kzDbbJGRF4BXbM8Q3pLhxjZ1DrKaz73K51gwuFSi6T23tiRZu7UpowkvYen2WUWWFGCtKgtP9c6a9mq9",
  "key26": "4qaP18oC99AmxDZQFpDdoNzGY9jJKt3XdqV65UVQeR1ha8grX9ioVFvn25ZJPadHzFhPZAGokf9usaDeFb5YcLNa",
  "key27": "2ZixaS48ZDXSirvcKPCn4NsMSX7PLjLHqqko1mVUwbonyEknj4R9SjcV4FEnuZKYPXnqShDTp3FDCJ2w7mcaPGvF",
  "key28": "4yg4eHEikweu5WJ5P7Y3Z5wSYmNCLvNg532waXFj3W5k82xGvKkusZtH1gNPQpJbjiJc9mNUeeCWqjwNeAdh6hZX",
  "key29": "4NhjQTz9o4XALsLFLkBNUBspu1TrQpsuyfFrpwW53Eb7qtcm2eQMWkSoWre5v5FqQoStUswk9HAG8Lf3EHB1amaC",
  "key30": "5URphViHEoRgrpBqKLe6YyX5nQVPnnexCkpQo1Z3dVdp5t2K5CNF5A4gTaUsaN8PwueuwC1EpGpkDbybKCt999Q3",
  "key31": "4hf89JTufjxBy1r6mqhVxsiRs1QDFQps2S6HWUfnMxrUjHJkpmtCEB81q7KxtECkSQGCMs8vtj1MLutbn36YH5Er",
  "key32": "4zL2odsgaE3SX5nWW4SwM2pFq3woravRyViUqJ1Tb3zFH8bqdLJx4nh3gAXv12xXwkAzEyV2Ucy9mpwQxTjeKfB5",
  "key33": "2Q2itS3xiXknhv4QGiPdjXdNfdt7E8hTbPzqTDBdjgCgkSzWKFH9PCkvWBjPmLAnPZuuPeftZYJ58uH9niTL7ngb",
  "key34": "4VuRYi93vhcJFZ6KqAYWdQLTr26CrVK4Wnb26D1DRigAvX8E4LWuEhenmQniuDmAmmcuH1kEdtaxns535w7MeypK",
  "key35": "4K695GoWEamCuje1UbqFsbc1aHgH5WNgA7jgAMDqGdxJpZ28qntzatB6jU84sgKPZJK8ZG7f8N9y4Nf3YC4Y3ZjV",
  "key36": "4FWvmcWtvqGvsmusKYfoJWHDxRceDmNxog5GYC3kXGBSca9BYLki2SSBuS8EzLXiG9tB3eXgT23T8giTTx7zvk4q",
  "key37": "4NH6KLuF7REWNNReaV3ymPn9bc6Qd66jbhufsm1SGVMGkvCKKfqAWaULQYFQBges5oW2bEcrfq3RzZwfHG6XAGse",
  "key38": "66BgyZX9xVDmtnugqEkJBTigmTKwvXPdwCBLSMAXr1kWkgrxXFa6jmvUcYd8AD4ivmmhGLhe25fozDpCLXWMFPvM",
  "key39": "5wjqTPBQtfs6gh52aU8gZfkPtz97681zqfPQ6QMpdZ4cHqPUhcpTGLN25Neiaju8R6gk3zM7yam8LzppVGcNsxZF",
  "key40": "5m7m8WTebdjV9uZwSGo7NTbfWWt9gunHntzE19Fs8tZqjj3ADBKW7ckeFEN4t7UAJuZpCL6ThwiptMRyQA9zzpCS",
  "key41": "mvcGvx4UCuUP193WGL2yp936Ef1irsjUB17tWVNJYnw8c9cuFZJHT1nLrqC3GjYgr4iDCMTC2qpa6Yq5uY1YjrV",
  "key42": "3uFXUkcqyDLLQ5M6uMgRQrszoWTJZYxU6TN7gCkanDNbNoaPqNwUX5un2vSnir7rs9Ka8vZ6FgCFbg5r82PRzYLH",
  "key43": "uy7Dytc3JhJzjFPzVNZ1kP8kBsYQsUV9fgz6y6NpEATBfqgh12ZsfBHFq5Jet7thtMd1pZiqewAuhwU26vjUGjr",
  "key44": "5RoXVUW7UoPHnWDHrmozp5TeUzzkBTS4LbzsXJEhNejyufmuUhQ2aLVo5KjoGdtr7S7SNTUU7N9juRgbxbTv53Bj",
  "key45": "31zPQMwCBMv2jSwmDbsSf3ADsoPjWrKAYi4trpuB22FtrDbE55XbBUSRVQ6dCHs87orXQLJSpzCjhugEuofXcegZ",
  "key46": "2jLamWkBdNEFztsTs1WSzaChgPmYWbmD5LeH5W7yQxkbd4mcesCJEtnYfapopM9qe35i9gB7xRXG6repjY4H2dcT"
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
